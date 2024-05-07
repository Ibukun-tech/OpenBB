"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42769],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?i.createElement(h,r(r({ref:t},d),{},{components:n})):i.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,r[1]=p;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(67294),a=n(35742);function o(e){let{title:t}=e;return i.createElement(a.Z,null,i.createElement("title",null,t))}},32433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(87462),a=(n(67294),n(3905)),o=n(88828);const r={title:"How To Add Data Provider Extensions",sidebar_position:3,description:"This guide outlines the process for adding a new data provider extension to the OpenBB Platform.",keywords:["OpenBB Platform","Open source","Python interface","REST API","contribution","contributing","documentation","code","provider","data","endpoint","existing","OpenBB extensions","OpenBB provider","standard model","provider model","how to","new","template"]},p=void 0,l={unversionedId:"platform/development/how-to/add_data_provider_extension",id:"platform/development/how-to/add_data_provider_extension",title:"How To Add Data Provider Extensions",description:"This guide outlines the process for adding a new data provider extension to the OpenBB Platform.",source:"@site/content/platform/development/how-to/add_data_provider_extension.md",sourceDirName:"platform/development/how-to",slug:"/platform/development/how-to/add_data_provider_extension",permalink:"/platform/development/how-to/add_data_provider_extension",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/development/how-to/add_data_provider_extension.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1715079455,formattedLastUpdatedAt:"May 7, 2024",sidebarPosition:3,frontMatter:{title:"How To Add Data Provider Extensions",sidebar_position:3,description:"This guide outlines the process for adding a new data provider extension to the OpenBB Platform.",keywords:["OpenBB Platform","Open source","Python interface","REST API","contribution","contributing","documentation","code","provider","data","endpoint","existing","OpenBB extensions","OpenBB provider","standard model","provider model","how to","new","template"]},sidebar:"tutorialSidebar",previous:{title:"How To Add A New Data Endpoint With An Existing Provider",permalink:"/platform/development/how-to/add_endpoint_to_existing_provider"},next:{title:"How To Add Toolkit Extensions",permalink:"/platform/development/how-to/add_toolkit_extension"}},s={},d=[{value:"Template For Getting Started",id:"template-for-getting-started",level:2},{value:"Cookiecutter",id:"cookiecutter",level:3},{value:"Dependencies",id:"dependencies",level:2},{value:"Authorization Credentials",id:"authorization-credentials",level:2},{value:"Filtering Out Secrets From Unit Tests",id:"filtering-out-secrets-from-unit-tests",level:2},{value:"Rebuild the Python Interface and Static Assets",id:"rebuild-the-python-interface-and-static-assets",level:2},{value:"Get Building",id:"get-building",level:2},{value:"Publish Extension To PyPI",id:"publish-extension-to-pypi",level:2},{value:"Setup",id:"setup",level:3},{value:"Release",id:"release",level:3},{value:"Publish",id:"publish",level:3}],u={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"How To Add Data Provider Extensions - How-To - Development | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"This page will walk through adding a new data provider extension to the OpenBB Platform.\nBy the end, you will have an extension that is ready to be published, or submitted as a pull request."),(0,a.kt)("h2",{id:"template-for-getting-started"},"Template For Getting Started"),(0,a.kt)("p",null,"If you've already been through some of the other data provider tasks - ",(0,a.kt)("a",{parentName:"p",href:"add_data_to_existing_endpoint"},"How To Add Data To An Existing Endpoint")," & ",(0,a.kt)("a",{parentName:"p",href:"add_endpoint_to_existing_provider"},"How To Add A New Data Endpoint With An Existing Provider")," - these steps will simply tag on to the beginning. Instead of editing the ",(0,a.kt)("inlineCode",{parentName:"p"},"__init__.py")," file, we will create it. If you haven't been through either of those guides, review them first before jumping in here."),(0,a.kt)("p",null,"An easy way to get started is to copy and paste something existing. In the OpenBB GitHub repository, provider extensions are located ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/develop/openbb_platform/providers"},"here"),"."),(0,a.kt)("p",null,"For convenience's sake, download this template ",(0,a.kt)("a",{parentName:"p",href:"ttps://github.com/OpenBB-finance/OpenBBTerminal/files/14519701/provider_extension_template.zip"},"zip file"),". It contains the basic folder structure and everything required to get started creating new data models."),(0,a.kt)("p",null,"For demonstration purposes, we'll assume this is from the perspective of somebody who will open a pull request and contribute the code to the OpenBB repository. The process, however, also applies to publishing directly via PyPI. Anyone can make an OpenBB extension."),(0,a.kt)("p",null,"The structure of the folder will look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"template/\n\u251c\u2500\u2500 openbb_template/\n\u2502   \u251c\u2500\u2500 models/\n\u2502   \u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u2502   \u2514\u2500\u2500 some_model.py\n\u2502   \u251c\u2500\u2500 utils/\n\u2502   \u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u2502   \u2514\u2500\u2500 helpers.py\n\u2502   \u251c\u2500\u2500 tests/\n\u2502   \u2502   \u251c\u2500\u2500 record/\n\u2502   \u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u2502   \u2514\u2500\u2500 test_template_fetchers.py\n\u2502   \u251c\u2500\u2500 __init__.py\n\u251c\u2500\u2500 __init__.py\n\u251c\u2500\u2500 pyproject.toml\n\u2514\u2500\u2500 README.md\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"__init__.py")," file where models are mapped to the router is under, ",(0,a.kt)("inlineCode",{parentName:"p"},"/openbb_template"),"."),(0,a.kt)("p",null,"To get started:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Unpack the downloaded ",(0,a.kt)("a",{parentName:"li",href:"ttps://github.com/OpenBB-finance/OpenBBTerminal/files/14519701/provider_extension_template.zip"},"zip")," file.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If working with a cloned GitHub repo, the folder is:")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-console"},"~/OpenBBTerminal/openbb_platform/providers\n"))),(0,a.kt)("li",{parentName:"ul"},'Rename everything, "template", to suit. File names, models, import statements, docstrings.'),(0,a.kt)("li",{parentName:"ul"},"Add any provider-specific package requirements in the ",(0,a.kt)("inlineCode",{parentName:"li"},"pyproject.toml")," file."),(0,a.kt)("li",{parentName:"ul"},"Update the Provider information in the ",(0,a.kt)("inlineCode",{parentName:"li"},"__init__.py")," file.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If credentials are required, add a line to the Provider class initialization.")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},'credentials=["api_key", "account_type"], # account_type is either "sandbox" or "live"\n'))),(0,a.kt)("li",{parentName:"ul"},'From a terminal command line, navigate into the folder where the extension is, then install the empty blank package in "editable" mode.',(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-console"},"poetry lock\npip install -e .\n"))),(0,a.kt)("li",{parentName:"ul"},"Start creating data models using the steps outlined ",(0,a.kt)("a",{parentName:"li",href:"add_data_to_existing_endpoint"},"here"))),(0,a.kt)("h3",{id:"cookiecutter"},"Cookiecutter"),(0,a.kt)("p",null,"In order to speed up the process of building an extension, we have created a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/openbb-cookiecutter"},(0,a.kt)("strong",{parentName:"a"},"Cookiecutter"))," template.\nIt serves as a jumpstart for your extension development, and can be used instead of the template ZIP referenced earlier. Instructions are located on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/openbb-cookiecutter"},"GitHub page"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The cookiecutter tool will get you most of the way there, but it still requires some tweaks to the file names and initializations.")),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," file defines the package itself."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Before adding any dependency, ensure it aligns with the Platform's existing dependencies."),(0,a.kt)("li",{parentName:"ul"},"If possible, use loose versioning."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[tool.poetry]\nname = "openbb-template"\nversion = "1.0.0"\ndescription = "Template Provider Extension for the OpenBB Platform"\nauthors = ["Name <my@emailaddress.com>"]\nreadme = "README.md"\npackages = [{ include = "openbb_template" }]\n\n[tool.poetry.dependencies]\npython = "^3.8"\nopenbb-core = "^1.1.2"\n\n[build-system]\nrequires = ["poetry-core"]\nbuild-backend = "poetry.core.masonry.api"\n\n[tool.poetry.plugins."openbb_provider_extension"]\ntemplate = "openbb_template:template_provider"\n')),(0,a.kt)("p",null,"The last line (poetry.plugins) maps to the provider defined in the ",(0,a.kt)("strong",{parentName:"p"},"init"),".py file."),(0,a.kt)("p",null,"Additionally, for local extensions, you can add this line in the ",(0,a.kt)("inlineCode",{parentName:"p"},"LOCAL_DEPS")," variable in the ",(0,a.kt)("inlineCode",{parentName:"p"},"dev_install.py")," file, located in ",(0,a.kt)("inlineCode",{parentName:"p"},"~/OpenBBTerminal/openbb_platform/"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'# If this is a community dependency, add this under "Community dependencies",\n# with additional argument optional = true\nopenbb-extension = { path = "<relative-path-to-the-extension>", develop = true }\n')),(0,a.kt)("p",null,"Now you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"python dev_install.py [-e]")," command to install the local extension."),(0,a.kt)("h2",{id:"authorization-credentials"},"Authorization Credentials"),(0,a.kt)("p",null,"Access to most data sources is authorized with an API key, issued by the source. Sometimes there are multiple authorization fields,\nand other times there may be a need to change the base URL depending on the type of account."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If no authorization is required, leave out the 'credentials' parameter.")),(0,a.kt)("p",null,"Below is the contents from the template's ",(0,a.kt)("inlineCode",{parentName:"p"},"__init__.py")," file, modified to create a provider extension for ",(0,a.kt)("a",{parentName:"p",href:"https://documentation.tradier.com/brokerage-api/overview/endpoints"},"Tradier"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'"""Tradier Provider Module."""\n\nfrom openbb_core.provider.abstract.provider import Provider\nfrom openbb_tradier.models.options_chains import TradierOptionsChainsFetcher\n\ntradier_provider = Provider(\n    name="tradier",\n    website="https://tradier.com",\n    description= "Tradier provides a full range of services in a scalable, secure,"\n        + " and easy-to-use REST-based API for businesses and individual developers."\n        + " Fast, secure, simple. Start in minutes."\n        + " Get access to trading, account management, and market-data for"\n        + " Tradier Brokerage accounts through our APIs.",\n    credentials=["api_key", "account_type"], # account_type is either "sandbox" or "live"\n    fetcher_dict={\n        "OptionsChains": TradierOptionsChainsFetcher,\n    },\n)\n')),(0,a.kt)("h2",{id:"filtering-out-secrets-from-unit-tests"},"Filtering Out Secrets From Unit Tests"),(0,a.kt)("p",null,"The template extension has a starting point for building unit tests, but filters might need to be updated for the specific provider."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'@pytest.fixture(scope="module")\ndef vcr_config():\n    return {\n        "filter_headers": [\n            ("User-Agent", None),\n            ("api_key", "MOCK_API_KEY"),\n            ("x-api-token", "MOCK_API_KEY"),\n        ],\n        "filter_query_parameters": [\n            ("api_key", "MOCK_API_KEY"),\n            ("x-api-token", "MOCK_API_KEY"),\n        ],\n    }\n')),(0,a.kt)("p",null,'For Tradier, authorization is sent in the request headers as "Authorization". We will need to replace ',(0,a.kt)("inlineCode",{parentName:"p"},"api_key")," header filters with ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization"),"."),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"Inspect captured test cassettes to verify that no secrets are recorded.")),(0,a.kt)("h2",{id:"rebuild-the-python-interface-and-static-assets"},"Rebuild the Python Interface and Static Assets"),(0,a.kt)("p",null,"The application will need to rebuild the static files in order to recognize any changes to the ",(0,a.kt)("inlineCode",{parentName:"p"},"fetcher_dict")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"__init__.py")," file.\nThis is also required to reflect any changes to parameters, docstrings and function signatures."),(0,a.kt)("p",null,"Open a terminal, start a new Python session, then enter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import openbb\n\nopenbb.build()\n\nexit()\n")),(0,a.kt)("p",null,"The updated endpoint's function signature will now display the additional provider."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"Signature:\nobb.derivatives.options.chains(\n    symbol: typing.Annotated[str, OpenBBField(description='Symbol to get data for.')],\n    provider: Optional[Literal['cboe', 'intrinio', 'tmx', 'tradier']] = None,\n    **kwargs,\n) -> openbb_core.app.model.obbject.OBBject\n")),(0,a.kt)("h2",{id:"get-building"},"Get Building"),(0,a.kt)("p",null,"Following either path, ",(0,a.kt)("a",{parentName:"p",href:"add_data_to_existing_endpoint"},"How To Add Data To An Existing Endpoint")," & ",(0,a.kt)("a",{parentName:"p",href:"add_endpoint_to_existing_provider"},"How To Add A New Data Endpoint With An Existing Provider"),", will take this from an empty provider extension to a finished product."),(0,a.kt)("p",null,"The new extension can be self-published on PyPI and hosted in an independent GitHub repo. You will then be able to maintain the code, and the release schedule."),(0,a.kt)("p",null,"If not contributing directly to the OpenBB GitHub, we still want to know about your creation. Share it with us on social media, and add ",(0,a.kt)("inlineCode",{parentName:"p"},"openbb")," as a topic tag in your GitHub repo."),(0,a.kt)("h2",{id:"publish-extension-to-pypi"},"Publish Extension To PyPI"),(0,a.kt)("p",null,"To publish your extension to PyPI, you'll need to have a PyPI account and a PyPI API token."),(0,a.kt)("h3",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Create an account and get an API token from ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/manage/account/token/"},"https://pypi.org/manage/account/token/")),(0,a.kt)("p",null,"Store the token with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"poetry config pypi-token.pypi pypi-YYYYYYYY\n")),(0,a.kt)("h3",{id:"release"},"Release"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cd")," into the directory where your extension ",(0,a.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," lives and make sure that the ",(0,a.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," specifies the version tag you want to release and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"poetry build\n")),(0,a.kt)("p",null,"This will create a ",(0,a.kt)("inlineCode",{parentName:"p"},"/dist")," folder in the directory, which will contain the ",(0,a.kt)("inlineCode",{parentName:"p"},".whl")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tar.gz")," files matching the version to release."),(0,a.kt)("p",null,"If you want to test your package locally you can do it with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install dist/openbb_[FILE_NAME].whl\n")),(0,a.kt)("h3",{id:"publish"},"Publish"),(0,a.kt)("p",null,"To publish your package to PyPI run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"poetry publish\n")),(0,a.kt)("p",null,"Now, you can pip install your package from PyPI with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install openbb-some_ext\n")))}m.isMDXComponent=!0}}]);