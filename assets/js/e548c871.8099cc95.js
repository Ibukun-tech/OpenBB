"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(67294),i=n(35742);function a(e){let{title:t}=e;return o.createElement(i.Z,null,o.createElement("title",null,t))}},18415:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(87462),i=(n(67294),n(3905)),a=n(88828);const r={title:"Considerations",sidebar_position:1,description:"Learn about the OpenBB Platform, an open-source solution built by the community. Understand its use via Python interface and REST API, and acquaint yourself with how to build a custom extension or contribute directly to the platform",keywords:["OpenBB Platform","Open source","Python interface","REST API","Data integration","Data standardization","OpenBB extensions","openbb-core","Python package","High-Level Architecture","Custom extension","Contribution"]},l=void 0,s={unversionedId:"platform/development/index",id:"platform/development/index",title:"Considerations",description:"Learn about the OpenBB Platform, an open-source solution built by the community. Understand its use via Python interface and REST API, and acquaint yourself with how to build a custom extension or contribute directly to the platform",source:"@site/content/platform/development/index.md",sourceDirName:"platform/development",slug:"/platform/development/",permalink:"/platform/development/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/development/index.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713783034,formattedLastUpdatedAt:"Apr 22, 2024",sidebarPosition:1,frontMatter:{title:"Considerations",sidebar_position:1,description:"Learn about the OpenBB Platform, an open-source solution built by the community. Understand its use via Python interface and REST API, and acquaint yourself with how to build a custom extension or contribute directly to the platform",keywords:["OpenBB Platform","Open source","Python interface","REST API","Data integration","Data standardization","OpenBB extensions","openbb-core","Python package","High-Level Architecture","Custom extension","Contribution"]},sidebar:"tutorialSidebar",previous:{title:"World News",permalink:"/platform/data_models/WorldNews"},next:{title:"Standardization",permalink:"/platform/development/standardization"}},p={},c=[{value:"Before Beginning",id:"before-beginning",level:2},{value:"What Is An Extension?",id:"what-is-an-extension",level:2}],u={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{title:"Considerations - Development | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,i.kt)("p",null,"These sections provide guidelines for developing with, and contributing to, the OpenBB Platform.\nThere are comprehensive guides on how to build extensions, add new data points, contribute to the code base, and more."),(0,i.kt)("p",null,"We generalize between two distinct types of users:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Developers"),": Those who are building on top of, and extending, the OpenBB Platform for their own purposes and have no intention of contributing the code directly to the GitHub repository. This includes those independently publishing extensions to PyPI or other package managers."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Contributors"),": Those who contribute to the existing codebase, by opening a Pull Request, thus giving back to the community.  This can include bug fixes, enhancements, documentation, and more.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Why Is This Distinction Important?")),(0,i.kt)("p",null,"The OpenBB Platform has been designed as a foundation for further development of investment research applications. We anticipate a wide range of creative use cases."),(0,i.kt)("p",null,"Some of them may be highly specific, or detail-oriented, solving particular problems that may not necessarily fit within the OpenBB Platform Github repository. This is entirely acceptable, even encouraged. Regardless of intention, OpenBB is a proponent of building in public and sharing. We love seeing what people are building, so don't be shy about it!"),(0,i.kt)("h2",{id:"before-beginning"},"Before Beginning"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Familiarize yourself with the codebase, architecture, and components."),(0,i.kt)("li",{parentName:"ul"},"Set clear goals with defined outcomes - i.e, I want to create a technical indicator that uses multiple data points and sources where the output is a chart.")),(0,i.kt)("p",null,"Below is a high-level overview of the OpenBB Platform architecture."),(0,i.kt)("picture",null,(0,i.kt)("source",{media:"(prefers-color-scheme: dark)",srcset:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/48914296/6125cbf2-ff5b-4cd8-b5b8-452cd8d84418"}),(0,i.kt)("img",{alt:"OpenBB Platform High-Level Architecture",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/48914296/6125cbf2-ff5b-4cd8-b5b8-452cd8d84418"})),(0,i.kt)("p",null,"Cloning the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal"},"GitHub repo")," will be the best way to inspect and play around with the code."),(0,i.kt)("h2",{id:"what-is-an-extension"},"What Is An Extension?"),(0,i.kt)("p",null,"An extension is an installable component adding functionality to the OpenBB Platform. It can be a new data source, a new command, a new visualization, or anything imaginable. They can generally be classified as one of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data Provider",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The individual sources of data."))),(0,i.kt)("li",{parentName:"ul"},"Toolkit",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Data processing, router modules, visualizations."))),(0,i.kt)("li",{parentName:"ul"},"OBBject",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Extending the OBBject class itself.")))),(0,i.kt)("p",null,"The extensions within the OpenBB GitHub repository are maintained by the OpenBB Team. The pages under ",(0,i.kt)("a",{parentName:"p",href:"how-to/add_obbject_extension"},"how-to")," detail getting started building with the OpenBB Platform."),(0,i.kt)("p",null,'We welcome contributions, and anyone is free to publish their own OpenBB extension to PyPI, or elsewhere. If you do, please name the package beginning with, "openbb-". We love seeing what you build!'))}m.isMDXComponent=!0}}]);