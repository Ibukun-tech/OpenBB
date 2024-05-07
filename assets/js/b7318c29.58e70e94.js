"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61772],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),i=n(35742);function l(e){let{title:t}=e;return a.createElement(i.Z,null,a.createElement("title",null,t))}},87843:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294);function i(e){let{href:t,label:n,type:i}=e;return a.createElement("a",{href:t,className:"_btn text-sm !no-underline inline-flex gap-4 h-10 items-center",rel:"noreferrer noopener",target:"_blank"},"windows"===i?a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-4",height:88,width:88,viewBox:"0 0 88 88"},a.createElement("path",{d:"m0 12.402 35.687-4.86.016 34.423-35.67.203zm35.67 33.529.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349-.011 41.34-47.318-6.678-.066-34.739z",fill:"currentColor"})):a.createElement("svg",{className:"w-4 -mt-1",xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:814,height:1e3,viewBox:"0 0 814 1000"},a.createElement("path",{fill:"currentColor",d:"M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"})),n)}},40920:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(87462),i=(n(67294),n(3905)),l=n(88828),r=n(87843);const o={title:"MacOS",sidebar_position:2,description:"Step-by-step instructions for installing the OpenBB Terminal on MacOS. This guide covers installation for both Intel-based computers and Apple Silicon (M1) devices, and includes instructions for preliminaries like installing Rosetta for M1 users.",keywords:["OpenBB Terminal Installation","MacOS installation guide","OpenBB on Mac Intel","OpenBB on Mac M1","Rosetta installation","PKG installer","OpenBB Terminal application","MacOS Big Sur installation","MacOS Monterey installation","Apple Silicon installation","Unverified developer warning"]},s=void 0,p={unversionedId:"terminal/installation/macos",id:"terminal/installation/macos",title:"MacOS",description:"Step-by-step instructions for installing the OpenBB Terminal on MacOS. This guide covers installation for both Intel-based computers and Apple Silicon (M1) devices, and includes instructions for preliminaries like installing Rosetta for M1 users.",source:"@site/content/terminal/installation/macos.md",sourceDirName:"terminal/installation",slug:"/terminal/installation/macos",permalink:"/terminal/installation/macos",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/installation/macos.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1715079455,formattedLastUpdatedAt:"May 7, 2024",sidebarPosition:2,frontMatter:{title:"MacOS",sidebar_position:2,description:"Step-by-step instructions for installing the OpenBB Terminal on MacOS. This guide covers installation for both Intel-based computers and Apple Silicon (M1) devices, and includes instructions for preliminaries like installing Rosetta for M1 users.",keywords:["OpenBB Terminal Installation","MacOS installation guide","OpenBB on Mac Intel","OpenBB on Mac M1","Rosetta installation","PKG installer","OpenBB Terminal application","MacOS Big Sur installation","MacOS Monterey installation","Apple Silicon installation","Unverified developer warning"]},sidebar:"tutorialSidebar",previous:{title:"Windows",permalink:"/terminal/installation/windows"},next:{title:"Source",permalink:"/terminal/installation/source"}},c={},m=[],u={toc:m},d="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,{title:"MacOS - Installation | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,i.kt)("p",null,"Install the OpenBB Terminal on MacOS (Big Sur or later). There are two versions of the installers available for MacOS, Intel-based and Apple Silicon (M1)."),(0,i.kt)("div",{style:{height:80}},(0,i.kt)(r.Z,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/releases/download/v3.2.5/x86.64.MacOS.OpenBB.Terminal.v3.2.5.pkg",label:"Mac Intel Installer",mdxType:"InstallerButton"}),"  ",(0,i.kt)(r.Z,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/releases/download/v3.2.5/ARM64.MacOS.OpenBB.Terminal.v3.2.5.pkg",label:"Mac M1 Installer",mdxType:"InstallerButton"})),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Minimum Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MacOS Monterey or newer"),(0,i.kt)("li",{parentName:"ul"},"Modern CPU (Intel processor made in the last 5 years or Apple Silicon chip)"),(0,i.kt)("li",{parentName:"ul"},"At least 4GB of RAM"),(0,i.kt)("li",{parentName:"ul"},"At least 5GB of free storage"),(0,i.kt)("li",{parentName:"ul"},"Internet connection (cable or 4G mobile)"))),(0,i.kt)("admonition",{title:"Apple Silicon users will need to install Rosetta prior to installation",type:"info"},(0,i.kt)("p",{parentName:"admonition"},'To understand whether you are using an Apple Sillicon (M1) device or an Intel-based device click on the Apple Icon at the top left of your MacBook and select "About This Mac". Then under "Chip" if it says something like "Apple M1 Pro" or "Apple M1 Max", you know you have an Apple Silicon MacBook. If it says for example "2,3 GHz Quad-Core Intel Core i7" you know that you have an Intel-based MacBook and you can continue by clicking on the "Mac Intel Installer" button.'),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Rosetta Installation Instructions (Apple Sillicon users only)"),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Press \u2318 (Command) + SPACE to open spotlight search, and type "Terminal" and hit Return (\u23ce).')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy and paste the following code in the Terminal and hit ENTER (\u23ce):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-console"},"softwareupdate --install-rosetta\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"This will start up the Rosetta installation process and you will receive a message regarding the Licence Agreement. Type ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," and hit Return (\u23ce).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'After the installation process has finished, you can proceed by clicking on the "Mac M1 Installer" button.'))))),(0,i.kt)("p",null,"Step by step instructions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download the PKG file from the links above.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Launch the PKG installer by double-clicking on it."),(0,i.kt)("img",{width:"634",alt:"image",src:"https://user-images.githubusercontent.com/11668535/234018847-f3e76345-7d4e-445d-a462-64e0d6d902bd.png"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Follow the Installer prompt. You will be asked to enter your system password."),(0,i.kt)("img",{width:"638",alt:"image",src:"https://user-images.githubusercontent.com/11668535/234032407-8ca009a7-0545-4196-b671-5bcc4c5cea9b.png"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"This process installs the application into the ",(0,i.kt)("inlineCode",{parentName:"p"},"/Application/OpenBB Terminal")," folder."),(0,i.kt)("img",{width:"618",alt:"image",src:"https://user-images.githubusercontent.com/11668535/234034347-cb2a80a0-81bb-4e8d-b91e-b636e161cf32.png"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Launch the application by double-clicking on the ",(0,i.kt)("inlineCode",{parentName:"p"},"OpenBB Terminal")," application. If everything was successful you should see a screen like the one below:"))),(0,i.kt)("p",{align:"center"},(0,i.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/223194653-a21966e2-cd55-44da-95eb-7c66811f629b.png"},(0,i.kt)("img",{alt:"run_the_terminal",src:"https://user-images.githubusercontent.com/46355364/223194653-a21966e2-cd55-44da-95eb-7c66811f629b.png"}))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:"),' During the first launch, a warning message may appear. Click, "Open". If you get a warning about opening apps from an unverified developer, please follow the instructions on ',(0,i.kt)("a",{href:"https://support.apple.com/guide/mac-help/open-a-mac-app-from-an-unidentified-developer-mh40616/mac"},"this MacOS User Guide page")," to proceed."),(0,i.kt)("p",{align:"center"},(0,i.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/85772166/220201620-1c42bbd4-7509-41fc-8df8-389f34fde58a.png"},(0,i.kt)("img",{alt:"run_the_terminal",src:"https://user-images.githubusercontent.com/85772166/220201620-1c42bbd4-7509-41fc-8df8-389f34fde58a.png"}))))}h.isMDXComponent=!0}}]);