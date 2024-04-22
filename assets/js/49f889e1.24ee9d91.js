"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23421],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(35742);function l(e){let{title:t}=e;return r.createElement(n.Z,null,r.createElement("title",null,t))}},32544:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),l=a(88828);const o={title:"global_cases",description:"The 'global_cases' page provides code and instructions for getting historical Covid-19 case data for any country. Utilize the provided Python function to retrieve a DataFrame of historical data.",keywords:["Covid-19","historical data","openbb.alt.covid.global_cases","global cases","country specific data","programming"]},i=void 0,c={unversionedId:"sdk/reference/alt/covid/global_cases",id:"sdk/reference/alt/covid/global_cases",title:"global_cases",description:"The 'global_cases' page provides code and instructions for getting historical Covid-19 case data for any country. Utilize the provided Python function to retrieve a DataFrame of historical data.",source:"@site/content/sdk/reference/alt/covid/global_cases.md",sourceDirName:"sdk/reference/alt/covid",slug:"/sdk/reference/alt/covid/global_cases",permalink:"/sdk/reference/alt/covid/global_cases",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/alt/covid/global_cases.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713783034,formattedLastUpdatedAt:"Apr 22, 2024",frontMatter:{title:"global_cases",description:"The 'global_cases' page provides code and instructions for getting historical Covid-19 case data for any country. Utilize the provided Python function to retrieve a DataFrame of historical data.",keywords:["Covid-19","historical data","openbb.alt.covid.global_cases","global cases","country specific data","programming"]},sidebar:"tutorialSidebar",previous:{title:"reference",permalink:"/sdk/reference/"},next:{title:"global_deaths",permalink:"/sdk/reference/alt/covid/global_deaths"}},s={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"alt.covid.global_cases - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Get historical cases for given country."),(0,n.kt)("p",null,"Source Code: [",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/covid/covid_model.py#L26"},"link"),"]"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"openbb.alt.covid.global_cases(country: str)\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"country"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Country to search for"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,n.kt)("td",{parentName:"tr",align:null},"Dataframe of historical cases")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'df = get_global_cases("United States")\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Dataframe of historical cases for United States\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'df = get_global_cases("Portugal")\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Dataframe of historical cases for Portugal\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'df = get_global_cases("Spain")\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Dataframe of historical cases for Spain\n")),(0,n.kt)("hr",null))}m.isMDXComponent=!0}}]);