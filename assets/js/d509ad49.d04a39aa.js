"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39382],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),o=n(35742);function a(e){let{title:t}=e;return r.createElement(o.Z,null,r.createElement("title",null,t))}},34566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var r=n(87462),o=(n(67294),n(3905)),a=n(88828);const i={title:"Function Examples",sidebar_position:3,description:"This guide provides detailed instructions for including function examples in the router endpoints of the OpenBB Platform.",keywords:["OpenBB community","OpenBB Platform","Custom commands","API","Python Interface","Examples","Usage","Parameters","contributing","requirements"]},l=void 0,p={unversionedId:"platform/development/contributing/function_examples",id:"platform/development/contributing/function_examples",title:"Function Examples",description:"This guide provides detailed instructions for including function examples in the router endpoints of the OpenBB Platform.",source:"@site/content/platform/development/contributing/function_examples.md",sourceDirName:"platform/development/contributing",slug:"/platform/development/contributing/function_examples",permalink:"/platform/development/contributing/function_examples",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/development/contributing/function_examples.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1715079455,formattedLastUpdatedAt:"May 7, 2024",sidebarPosition:3,frontMatter:{title:"Function Examples",sidebar_position:3,description:"This guide provides detailed instructions for including function examples in the router endpoints of the OpenBB Platform.",keywords:["OpenBB community","OpenBB Platform","Custom commands","API","Python Interface","Examples","Usage","Parameters","contributing","requirements"]},sidebar:"tutorialSidebar",previous:{title:"Validators",permalink:"/platform/development/contributing/validators"},next:{title:"Deprecating Endpoints",permalink:"/platform/development/contributing/deprecating_endpoints"}},s={},m=[{value:"Requirements",id:"requirements",level:2},{value:"Example Models",id:"example-models",level:2},{value:"<code>APIEx</code>",id:"apiex",level:3},{value:"<code>PythonEx</code>",id:"pythonex",level:3}],d={toc:m},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{title:"Function Examples - Contributing - Development | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"Usage examples are defined in the router and are expected to provide working syntax,\nwith descriptions for complex functions requiring many parameters."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When a given provider is not installed, its example will be excluded from ",(0,o.kt)("inlineCode",{parentName:"p"},"openapi.json")," and Python docstrings")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"All router endpoints must have examples."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If any endpoint is excluded from the schema it only needs to contain a Python example."),(0,o.kt)("li",{parentName:"ul"},"POST method examples should have both API and Python examples, unless they are excluded from the schema.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For API Examples:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"At least one example using all required parameters. It cannot use any provider-specific parameters here. It should not specify the provider field."),(0,o.kt)("li",{parentName:"ul"},"If there are more than three parameters, a description must be supplied in the example.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For Python Examples:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Descriptions are mandatory.")),(0,o.kt)("h2",{id:"example-models"},"Example Models"),(0,o.kt)("p",null,"There are two models for defining examples, ",(0,o.kt)("inlineCode",{parentName:"p"},"APIEx")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PythonEx"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"APIEx")," is more structured aiming to be language agnostic - provide less freedom - while ",(0,o.kt)("inlineCode",{parentName:"p"},"PythonEx")," gives more freedom to create complex examples."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_core.app.model.example import APIEx, PythonEx\n")),(0,o.kt)("h3",{id:"apiex"},(0,o.kt)("inlineCode",{parentName:"h3"},"APIEx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@router.command(\n    model="WorldNews",\n    examples=[\n        APIEx(parameters={}),\n        APIEx(parameters={"limit": 100}),\n        APIEx(\n            description="Get news on the specified dates.",\n            parameters={"start_date": "2024-02-01", "end_date": "2024-02-07"},\n        ),\n        APIEx(\n            description="Display the headlines of the news.",\n            parameters={"display": "headline", "provider": "benzinga"},\n        ),\n        APIEx(\n            description="Get news by topics.",\n            parameters={"topics": "finance", "provider": "benzinga"},\n        ),\n        APIEx(\n            description="Get news by source using \'tingo\' as provider.",\n            parameters={"provider": "tiingo", "source": "bloomberg"},\n        ),\n        APIEx(\n            description="Filter aticles by term using \'biztoc\' as provider.",\n            parameters={"provider": "biztoc", "term": "apple"},\n        ),\n    ],\n)\n')),(0,o.kt)("h3",{id:"pythonex"},(0,o.kt)("inlineCode",{parentName:"h3"},"PythonEx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@router.command(\n    methods=["POST"],\n    include_in_schema=False,\n    examples=[\n        PythonEx(\n            description="Perform Ordinary Least Squares (OLS) regression.",\n            code=[\n                "stock_data = obb.equity.price.historical(symbol=\'TSLA\', start_date=\'2023-01-01\', provider=\'fmp\').to_df()",\n                \'obb.econometrics.ols_regression(data=stock_data, y_column="close", x_columns=["open", "high", "low"])\',\n            ],\n        )\n    ],\n)\n')))}u.isMDXComponent=!0}}]);