"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82154],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(35742);function l(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},78889:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),l=r(88828);const o={title:"dcfc",description:"Get stocks dcf from FMP",keywords:["stocks","fa","dcfc"]},c=void 0,i={unversionedId:"sdk/reference/stocks/fa/dcfc",id:"sdk/reference/stocks/fa/dcfc",title:"dcfc",description:"Get stocks dcf from FMP",source:"@site/content/sdk/reference/stocks/fa/dcfc.md",sourceDirName:"sdk/reference/stocks/fa",slug:"/sdk/reference/stocks/fa/dcfc",permalink:"/sdk/reference/stocks/fa/dcfc",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/fa/dcfc.md",tags:[],version:"current",frontMatter:{title:"dcfc",description:"Get stocks dcf from FMP",keywords:["stocks","fa","dcfc"]},sidebar:"tutorialSidebar",previous:{title:"dcf",permalink:"/sdk/reference/stocks/fa/dcf"},next:{title:"divs",permalink:"/sdk/reference/stocks/fa/divs"}},s={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"stocks.fa.dcfc - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Get stocks dcf from FMP"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/fmp_model.py#L208"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"openbb.stocks.fa.dcfc(symbol: str, limit: int = 5, quarterly: bool = False)\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Stock ticker symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Number to get"),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"quarterly"),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"Flag to get quarterly data, by default False"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"Dataframe of dcf data")))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);