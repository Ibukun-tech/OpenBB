"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70052],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(35742);function o(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},17129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),o=n(88828);const i={title:"Introduction",sidebar_position:0,description:"OpenBB Platform is a comprehensive solution built with the contribution of numerous community members, facilitating the development of stable integrations with third-party data providers for a robust investment research infrastructure.",keywords:["OpenBB Platform","investment research infrastructure","third-party data providers","financial reports","applications","community contributions","data connectors","extensions"]},s=void 0,l={unversionedId:"sdk/index",id:"sdk/index",title:"Introduction",description:"OpenBB Platform is a comprehensive solution built with the contribution of numerous community members, facilitating the development of stable integrations with third-party data providers for a robust investment research infrastructure.",source:"@site/content/sdk/index.md",sourceDirName:"sdk",slug:"/sdk/",permalink:"/sdk/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/index.md",tags:[],version:"current",lastUpdatedBy:"Luqman",lastUpdatedAt:1700659065,formattedLastUpdatedAt:"Nov 22, 2023",sidebarPosition:0,frontMatter:{title:"Introduction",sidebar_position:0,description:"OpenBB Platform is a comprehensive solution built with the contribution of numerous community members, facilitating the development of stable integrations with third-party data providers for a robust investment research infrastructure.",keywords:["OpenBB Platform","investment research infrastructure","third-party data providers","financial reports","applications","community contributions","data connectors","extensions"]},sidebar:"tutorialSidebar",previous:{title:"FAQs",permalink:"/bot/faqs"},next:{title:"Installation",permalink:"/sdk/installation"}},c={},u=[],p={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"The OpenBB SDK is the core engine of the entire OpenBB platform. It provides programmatic access to the OpenBB Terminal commands directly in a Python script or Jupyter Notebook. Through a nearly 1-to-1 relationship, the OpenBB SDK syntax is instantly recognizable by the same Terminal commands."),(0,a.kt)("img",{width:"769",alt:"sdk",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/3ae6ad4d-d90b-4555-8712-c94a048285d5"}),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A single endpoint for accessing financial data"))),(0,a.kt)("p",null,"Accessing investment research data can be a struggle, requiring significant time and effort. The OpenBB SDK simplifies this process by providing a single endpoint to connect with close to 100 different data sources. With just one line of code, you can access 30+ years of fundamental data for any company, making data collection fast and easy."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Integrate your own workflow"))),(0,a.kt)("p",null,"The OpenBB SDK can be inserted into any investment research workflow. This could be to convey the performance of the portfolio to your portfolio manager or as an extension of your models to provide you with up-to-date financial data that can be pivotal for modeling and visualization. In addition, any other package can be utilized to process and analyze the data without any limitation."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Generate insights from datasets 10 times faster"))),(0,a.kt)("p",null,"With our SDK, you can effortlessly access raw financial data programmatically, reducing the time and effort required to gather relevant information. Moreover, our SDK features built-in charting capabilities for most datasets, allowing you to analyze and visualize data directly from a Jupyter Notebook. This powerful feature streamlines your workflow and allows you to quickly create custom plots, providing insights that are valuable for informed decision making."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Want to contribute? Check out our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/blob/main/CONTRIBUTING.md"},"CONTRIBUTING GUIDELINES"),"."))}m.isMDXComponent=!0}}]);