"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22401],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return r?n.createElement(f,l(l({ref:t},d),{},{components:r})):n.createElement(f,l({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(35742);function i(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},10939:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),i=r(88828);const l={title:"ecbycrv",description:"Generate euro area yield curve from ECB",keywords:["fixedincome","ecbycrv"]},o=void 0,c={unversionedId:"terminal/reference/fixedincome/ecbycrv",id:"terminal/reference/fixedincome/ecbycrv",title:"ecbycrv",description:"Generate euro area yield curve from ECB",source:"@site/content/terminal/reference/fixedincome/ecbycrv.md",sourceDirName:"terminal/reference/fixedincome",slug:"/terminal/reference/fixedincome/ecbycrv",permalink:"/terminal/reference/fixedincome/ecbycrv",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/fixedincome/ecbycrv.md",tags:[],version:"current",frontMatter:{title:"ecbycrv",description:"Generate euro area yield curve from ECB",keywords:["fixedincome","ecbycrv"]},sidebar:"tutorialSidebar",previous:{title:"ecb",permalink:"/terminal/reference/fixedincome/ecb"},next:{title:"estr",permalink:"/terminal/reference/fixedincome/estr"}},s={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:d},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"fixedincome /ecbycrv - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Generate euro area yield curve from ECB. The yield curve shows the bond ratesat different maturities. The graphic depiction of the relationship between the yield on bonds of the same credit quality but different maturities is known as the yield curve. In the past, most market participants have constructed yield curves from the observations of prices and yields in the Treasury market. Two reasons account for this tendency. First, Treasury securities are viewed as free of default risk, and differences in creditworthiness do not affect yield estimates. Second, as the most active bond market, the Treasury market offers the fewest problems of illiquidity or infrequent trading. The key function of the Treasury yield curve is to serve as a benchmark for pricing bonds and setting yields in other sectors of the debt market. It is clear that the market\u2019s expectations of future rate changes are one important determinant of the yield-curve shape. For example, a steeply upward-sloping curve may indicate market expectations of near-term Fed tightening or of rising inflation. However, it may be too restrictive to assume that the yield differences across bonds with different maturities only reflect the market\u2019s rate expectations. The well-known pure expectations hypothesis has such an extreme implication. The pure expectations hypothesis asserts that all government bonds have the same near-term expected return (as the nominally riskless short-term bond) because the return-seeking activity of risk-neutral traders removes all expected return differentials across bonds."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"ecbycrv [-d DATE] [-p {spot_rate,instantaneous_forward,par_yield}] [--detailed] [--any-rating]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"date"),(0,a.kt)("td",{parentName:"tr",align:null},"-d  --date"),(0,a.kt)("td",{parentName:"tr",align:null},"Date to get data from ECB. If not supplied, the most recent entry will be used."),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"parameter"),(0,a.kt)("td",{parentName:"tr",align:null},"-p  --parameter"),(0,a.kt)("td",{parentName:"tr",align:null},"Selected type of yield curve"),(0,a.kt)("td",{parentName:"tr",align:null},"spot_rate"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"spot_rate, instantaneous_forward, par_yield")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"detailed"),(0,a.kt)("td",{parentName:"tr",align:null},"--detailed"),(0,a.kt)("td",{parentName:"tr",align:null},"If True, returns detailed data. Note that this is very slow."),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"any_rating"),(0,a.kt)("td",{parentName:"tr",align:null},"--any-rating"),(0,a.kt)("td",{parentName:"tr",align:null},"If False, it only returns rates for AAA rated bonds. If True, it returns rates for all bonds."),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);