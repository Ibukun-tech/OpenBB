"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83907],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>s});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,s=u["".concat(d,".").concat(m)]||u[m]||f[m]||l;return r?n.createElement(s,i(i({ref:t},c),{},{components:r})):n.createElement(s,i({ref:t},c))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(35742);function l(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},53175:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),l=r(88828);const i={title:"tbffr",description:"Get data for Selected Treasury Bill Minus Federal Funds Rate",keywords:["fixedincome","tbffr"]},o=void 0,d={unversionedId:"sdk/reference/fixedincome/tbffr",id:"sdk/reference/fixedincome/tbffr",title:"tbffr",description:"Get data for Selected Treasury Bill Minus Federal Funds Rate",source:"@site/content/sdk/reference/fixedincome/tbffr.md",sourceDirName:"sdk/reference/fixedincome",slug:"/sdk/reference/fixedincome/tbffr",permalink:"/sdk/reference/fixedincome/tbffr",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/fixedincome/tbffr.md",tags:[],version:"current",frontMatter:{title:"tbffr",description:"Get data for Selected Treasury Bill Minus Federal Funds Rate",keywords:["fixedincome","tbffr"]},sidebar:"tutorialSidebar",previous:{title:"spot",permalink:"/sdk/reference/fixedincome/spot"},next:{title:"tmc",permalink:"/sdk/reference/fixedincome/tmc"}},p={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],u={toc:c},f="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"fixedincome.tbffr - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Get data for Selected Treasury Bill Minus Federal Funds Rate."),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/fixedincome/fred_model.py#L1044"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},'openbb.fixedincome.tbffr(parameter: str = "3_month", start_date: Optional[str] = None, end_date: Optional[str] = None)\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"parameter"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"FRED ID of TBFFR data to plot, options: ",'["3_month", "6_month"]'),(0,a.kt)("td",{parentName:"tr",align:null},"3_month"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"start_date"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional","[str]"),(0,a.kt)("td",{parentName:"tr",align:null},"Start date, formatted YYYY-MM-DD"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"end_date"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional","[str]"),(0,a.kt)("td",{parentName:"tr",align:null},"End date, formatted YYYY-MM-DD"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,"This function does not return anything"),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);