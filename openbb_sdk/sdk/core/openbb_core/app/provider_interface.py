from dataclasses import dataclass, make_dataclass
from difflib import SequenceMatcher
from typing import Any, Callable, Dict, List, Literal, Optional, Tuple, Type, Union

from fastapi import Query
from openbb_provider.query_executor import QueryExecutor
from openbb_provider.registry_map import MapType, RegistryMap
from openbb_provider.utils.helpers import to_snake_case
from pydantic import BaseConfig, BaseModel, Extra, Field, create_model
from pydantic.fields import FieldInfo, ModelField

from openbb_core.app.model.abstract.singleton import SingletonMeta

TupleFieldType = Tuple[str, type, Any]


@dataclass
class DataclassField:
    """Dataclass field."""

    name: str
    type_: type
    default: Any


@dataclass
class StandardParams:
    """Standard params dataclass."""


@dataclass
class ExtraParams:
    """Extra params dataclass."""


class StandardData(BaseModel):
    """Standard data model."""


class ExtraData(BaseModel):
    """Extra data model."""


@dataclass
class ProviderChoices:
    """Provider choices dataclass."""

    provider: Literal  # type: ignore


class ProviderInterface(metaclass=SingletonMeta):
    """Provider interface class. Provides access to 'openbb_provider' package information.

    Properties
    ----------
    map : MapType
        Dictionary of provider information.
    required_credentials: List[str]
        List of required_credentials.
    model_providers : Dict[str, ProviderChoices]
        Dictionary of provider choices by model.
    params : Dict[str, Dict[str, Union[StandardParams, ExtraParams]]]
        Dictionary of params by model.
    return_schema : Dict[str, Type[BaseModel]]
        Dictionary of return data schema by model.
    available_providers : List[str]
        List of available providers.
    provider_choices : ProviderChoices
        Dataclass with literal of provider names.
    models : List[str]
        List of model names.

    Methods
    -------
    create_executor : QueryExecutor
        Create a query executor
    """

    def __init__(
        self,
        registry_map: Optional[RegistryMap] = None,
        query_executor: Optional[QueryExecutor] = None,
    ) -> None:
        """Initialize provider interface."""
        self._registry_map = registry_map or RegistryMap()
        self._query_executor = query_executor or QueryExecutor

        self._map = self._registry_map.map
        # TODO: Try these 4 methods in a single iteration
        self._model_providers_map = self._generate_model_providers_dc(self._map)
        self._params = self._generate_params_dc(self._map)
        self._data = self._generate_data_dc(self._map)
        self._return_schema = self._generate_return_schema(self._data)

        self._available_providers = self._registry_map.available_providers
        self._provider_choices = self._get_provider_choices(self._available_providers)

    @property
    def map(self) -> MapType:
        """Dictionary of provider information."""
        return self._map

    @property
    def required_credentials(self) -> List[str]:
        """Dictionary of required credentials by provider."""
        return self._registry_map.required_credentials

    @property
    def model_providers(self) -> Dict[str, ProviderChoices]:
        """Dictionary of provider choices by model."""
        return self._model_providers_map

    @property
    def params(self) -> Dict[str, Dict[str, Union[StandardParams, ExtraParams]]]:
        """Dictionary of params by model."""
        return self._params

    @property
    def data(self) -> Dict[str, Dict[str, Union[StandardData, ExtraData]]]:
        """Dictionary of data by model."""
        return self._data

    @property
    def return_schema(self) -> Dict[str, Type[BaseModel]]:
        """Dictionary of data by model merged."""
        return self._return_schema

    @property
    def available_providers(self) -> List[str]:
        """List of available providers."""
        return self._available_providers

    @property
    def provider_choices(self) -> type:
        """Dataclass with literal of provider names."""
        return self._provider_choices

    @property
    def models(self) -> List[str]:
        """List of model names."""
        return self._registry_map.models

    @property
    def return_map(self) -> Dict[str, Dict[str, Any]]:
        """Return map."""
        return self._registry_map.return_map

    def create_executor(self) -> QueryExecutor:
        """Get query executor."""
        return self._query_executor(self._registry_map.registry)  # type: ignore

    @staticmethod
    def _merge_fields(
        current: DataclassField, incoming: DataclassField, query: bool = False
    ) -> DataclassField:
        current_name = current.name
        current_type = current.type_
        current_desc = getattr(current.default, "description", "")

        incoming_type = incoming.type_
        incoming_desc = getattr(incoming.default, "description", "")

        F: Union[Callable, object] = Query if query else FieldInfo

        def split_desc(desc: str) -> Tuple[str, str]:
            """Split field description"""
            item = desc.split(" (provider: ")
            detail = item[0] if item else ""
            prov = item[-1].replace(")", "") if len(item) > 1 else ""
            return detail, prov

        curr_detail, curr_prov = split_desc(current_desc)
        inc_detail, inc_prov = split_desc(incoming_desc)

        if SequenceMatcher(None, curr_detail, inc_detail).ratio() > 0.8:
            new_desc = f"{curr_detail} (provider: {curr_prov}, {inc_prov})"
        else:
            new_desc = f"{current_desc}; {incoming_desc}"

        merged_default = F(  # type: ignore
            default=current.default.default,
            title=f"{current.default.title},{incoming.default.title}",
            description=new_desc,
        )

        merged_type = (
            Union[current_type, incoming_type]
            if current_type != incoming_type
            else current_type
        )

        return DataclassField(
            name=current_name,
            type_=merged_type,  # type: ignore
            default=merged_default,
        )

    @staticmethod
    def _create_field(
        name: str,
        field: ModelField,
        provider_name: Optional[str] = None,
        query: bool = False,
        force_optional: bool = False,
    ) -> DataclassField:
        new_name = name.replace(".", "_")
        # field.type_ don't work for nested types
        # field.outer_type_ don't work for Optional nested types
        type_ = field.annotation
        provider_field = (
            f"(provider: {provider_name})" if provider_name != "openbb" else ""
        )
        description = (
            f"{field.field_info.description} {provider_field}"
            if provider_name and field.field_info.description
            else f"{field.field_info.description}"
        )

        if field.required:
            if force_optional:
                type_ = Optional[type_]  # type: ignore
                default = None
            else:
                default = ...
        else:
            default = field.default

        if query:
            # We need to use query if we want the field description to show up in the
            # swagger, it's a fastapi limitation
            default = Query(
                default=default, title=provider_name, description=description
            )
        elif provider_name:
            default = Field(
                default=default, title=provider_name, description=description
            )

        return DataclassField(new_name, type_, default)

    @classmethod
    def _extract_params(
        cls,
        providers: Any,
    ) -> Tuple[Dict[str, TupleFieldType], Dict[str, TupleFieldType]]:
        """Extract parameters from map."""
        standard: Dict[str, TupleFieldType] = {}
        extra: Dict[str, TupleFieldType] = {}

        for provider_name, model_details in providers.items():
            if provider_name == "openbb":
                for name, field in model_details["QueryParams"]["fields"].items():
                    incoming = cls._create_field(name, field, query=True)

                    standard[incoming.name] = (
                        incoming.name,
                        incoming.type_,
                        incoming.default,
                    )
            else:
                for name, field in model_details["QueryParams"]["fields"].items():
                    if name not in providers["openbb"]["QueryParams"]["fields"]:
                        s_name = to_snake_case(name)
                        incoming = cls._create_field(
                            s_name,
                            field,
                            provider_name,
                            query=True,
                            force_optional=True,
                        )

                        if incoming.name in extra:
                            current = DataclassField(*extra[incoming.name])
                            updated = cls._merge_fields(current, incoming, query=True)
                        else:
                            updated = incoming

                        extra[updated.name] = (
                            updated.name,
                            updated.type_,
                            updated.default,
                        )

        return standard, extra

    @classmethod
    def _extract_data(
        cls,
        providers: Any,
    ) -> Tuple[Dict[str, TupleFieldType], Dict[str, TupleFieldType]]:
        standard: Dict[str, TupleFieldType] = {}
        extra: Dict[str, TupleFieldType] = {}

        for provider_name, model_details in providers.items():
            if provider_name == "openbb":
                for name, field in model_details["Data"]["fields"].items():
                    incoming = cls._create_field(name, field, "openbb")

                    standard[incoming.name] = (
                        incoming.name,
                        incoming.type_,
                        incoming.default,
                    )
            else:
                for name, field in model_details["Data"]["fields"].items():
                    if name not in providers["openbb"]["Data"]["fields"]:
                        s_name = to_snake_case(name)
                        incoming = cls._create_field(
                            s_name, field, provider_name, force_optional=True
                        )

                        if incoming.name in extra:
                            current = DataclassField(*extra[incoming.name])
                            updated = cls._merge_fields(current, incoming)
                        else:
                            updated = incoming

                        extra[updated.name] = (
                            updated.name,
                            updated.type_,
                            updated.default,
                        )

        return standard, extra

    def _generate_params_dc(
        self, map_: MapType
    ) -> Dict[str, Dict[str, Union[StandardParams, ExtraParams]]]:
        """Generate dataclasses for params.

        This creates a dictionary of dataclasses that can be injected as a FastAPI
        dependency.

        Example:
        -------
        @dataclass
        class StockNews(StandardParams):
            symbols: str = Query(...)
            page: int = Query(default=1)

        @dataclass
        class StockNews(ExtraParams):
            pageSize: int = Query(default=15, title="benzinga")
            displayOutput: int = Query(default="headline", title="benzinga")
            ...
            sort: str = Query(default=None, title="benzinga,polygon")
        """
        result: Dict = {}

        for model_name, providers in map_.items():
            standard: dict
            extra: dict
            standard, extra = self._extract_params(providers)

            result[model_name] = {
                "standard": make_dataclass(  # type: ignore
                    cls_name=model_name,
                    fields=list(standard.values()),
                    bases=(StandardParams,),
                ),
                "extra": make_dataclass(  # type: ignore
                    cls_name=model_name,
                    fields=list(extra.values()),
                    bases=(ExtraParams,),
                ),
            }
        return result

    def _generate_model_providers_dc(self, map_: MapType) -> Dict[str, ProviderChoices]:
        """Generate dataclasses for provider choices by model.

        This creates a dictionary that maps model names to dataclasses that can be
        injected as a FastAPI dependency.

        Example:
        -------
        @dataclass
        class StockNews(ProviderChoices):
            provider: Literal["benzinga", "polygon"]
        """
        result: Dict = {}

        for model_name, providers in map_.items():
            choices = sorted(list(providers.keys()))
            if "openbb" in choices:
                choices.remove("openbb")

            result[model_name] = make_dataclass(  # type: ignore
                cls_name=model_name,
                fields=[("provider", Literal[tuple(choices)])],  # type: ignore
                bases=(ProviderChoices,),
            )

        return result

    def _generate_data_dc(
        self, map_: MapType
    ) -> Dict[str, Dict[str, Union[StandardData, ExtraData]]]:
        """Generate dataclasses for data.

        This creates a dictionary of dataclasses.

        Example:
        -------
        class StockHistoricalData(StandardData):
            date: date
            open: PositiveFloat
            high: PositiveFloat
            low: PositiveFloat
            close: PositiveFloat
            adj_close: Optional[PositiveFloat]
            volume: PositiveFloat
        """
        result: Dict = {}

        for model_name, providers in map_.items():
            standard: dict
            extra: dict
            standard, extra = self._extract_data(providers)
            result[model_name] = {
                "standard": make_dataclass(  # type: ignore
                    cls_name=model_name,
                    fields=list(standard.values()),
                    bases=(StandardData,),
                ),
                "extra": make_dataclass(  # type: ignore
                    cls_name=model_name,
                    fields=list(extra.values()),
                    bases=(ExtraData,),
                ),
            }

        return result

    def _generate_return_schema(
        self,
        data: Dict[str, Dict[str, Union[StandardData, ExtraData]]],
    ) -> Dict[str, Type[BaseModel]]:
        """Merge standard data with extra data into a single BaseModel to be injected as FastAPI dependency."""
        result: Dict = {}
        for model_name, dataclasses in data.items():
            standard = dataclasses["standard"]
            extra = dataclasses["extra"]

            fields = standard.__fields__.copy()
            fields.update(extra.__fields__)

            fields_dict: Dict[str, Tuple[Any, Any]] = {}
            for name, field in fields.items():
                fields_dict[name] = (
                    field.annotation,
                    Field(
                        default=field.default,
                        title=field.field_info.title,
                        description=field.field_info.description,
                    ),
                )

            class Config(BaseConfig):
                extra = Extra.allow

            result[model_name] = create_model(  # type: ignore
                model_name,
                __config__=Config,
                **fields_dict,  # type: ignore
            )

        return result

    def _get_provider_choices(self, available_providers: List[str]) -> type:
        return make_dataclass(
            cls_name="ProviderChoices",
            fields=[("provider", Literal[tuple(available_providers)])],  # type: ignore
            bases=(ProviderChoices,),
        )
