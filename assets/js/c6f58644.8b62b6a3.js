"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73608],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),i=n(35742);function a(e){let{title:t}=e;return r.createElement(i.Z,null,r.createElement("title",null,t))}},32633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905)),a=n(88828);const l={title:"Installation",sidebar_position:1,description:"This page outlines the installation of the openbb-charting extension.",keywords:["tutorial","OpenBB Platform","Installation","Python client","Fast API","getting started","extensions","charting","view","Plotly","toolkit","community","Plotly","OpenBBFigure","PyWry"]},o=void 0,s={unversionedId:"platform/extensions/charting/installation",id:"platform/extensions/charting/installation",title:"Installation",description:"This page outlines the installation of the openbb-charting extension.",source:"@site/content/platform/extensions/charting/installation.md",sourceDirName:"platform/extensions/charting",slug:"/platform/extensions/charting/installation",permalink:"/platform/extensions/charting/installation",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/extensions/charting/installation.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713783034,formattedLastUpdatedAt:"Apr 22, 2024",sidebarPosition:1,frontMatter:{title:"Installation",sidebar_position:1,description:"This page outlines the installation of the openbb-charting extension.",keywords:["tutorial","OpenBB Platform","Installation","Python client","Fast API","getting started","extensions","charting","view","Plotly","toolkit","community","Plotly","OpenBBFigure","PyWry"]},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/platform/extensions/charting/examples"},next:{title:"Indicators",permalink:"/platform/extensions/charting/indicators"}},p={},c=[{value:"PyPI",id:"pypi",level:2},{value:"Editable Mode",id:"editable-mode",level:2},{value:"PyWry Dependency In Linux",id:"pywry-dependency-in-linux",level:2}],u={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{title:"Installation - Charting - Extensions | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,i.kt)("h2",{id:"pypi"},"PyPI"),(0,i.kt)("p",null,"To install the extension, run the following command in this folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install openbb-charting\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Find the latest version on ",(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/openbb-charting/"},"PyPI"),".")),(0,i.kt)("h2",{id:"editable-mode"},"Editable Mode"),(0,i.kt)("p",null,"To install from source in editable mode, navigate into the folder, ",(0,i.kt)("inlineCode",{parentName:"p"},"~/openbb_platform/extensions/charting"),", and enter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"pip install -e .\n")),(0,i.kt)("p",null,"After installation, the Python interface will automatically rebuild on initialization.  This process can also be triggered manually with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import openbb\nopenbb.build()\n")),(0,i.kt)("p",null,"The Python interpreter may need to be restarted."),(0,i.kt)("h2",{id:"pywry-dependency-in-linux"},"PyWry Dependency In Linux"),(0,i.kt)("p",null,"When using Linux distributions, the PyWry dependency requires certain dependencies to be installed first."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Debian-based / Ubuntu / Mint:\n",(0,i.kt)("inlineCode",{parentName:"p"},"sudo apt install libwebkit2gtk-4.0-dev"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Arch Linux / Manjaro:\n",(0,i.kt)("inlineCode",{parentName:"p"},"sudo pacman -S webkit2gtk"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fedora:\n",(0,i.kt)("inlineCode",{parentName:"p"},"sudo dnf install gtk3-devel webkit2gtk3-devel")))),(0,i.kt)("p",null,"If Rust (Cargo) is required, install it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"curl --proto '=https' --tlsv1.3 https://sh.rustup.rs -sSf | sh\n")))}m.isMDXComponent=!0}}]);