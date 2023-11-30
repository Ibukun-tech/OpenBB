"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76071],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),o=n(35742);function a(e){let{title:t}=e;return r.createElement(o.Z,null,r.createElement("title",null,t))}},20630:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),o=n(15569);function a(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[a,i]=(0,r.useState)(!0);return r.createElement("div",{style:{textAlign:"center"}},r.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-center"},r.createElement("p",null,n),r.createElement("div",{style:{transform:"scale(0.7)"}},r.createElement(o.Toggle,{isOn:a,handleChange:()=>i(!a)}))),a&&r.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"}},r.createElement("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})))}},88052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905)),a=n(88828),i=n(20630);const s={title:"Routine Macro Recorder",sidebar_position:4,description:"Learn how to use the macro recorder in OpenBB to start saving commands and automate common tasks with scripts. This page guides you through the process of recording, saving, and accessing your recorded routines.",keywords:["macro recorder","script routines","global commands","Excel's VBA methods","command recording","routine script","terminal main menu","exe --file","OpenBBUserData","routines folder"]},c=void 0,l={unversionedId:"terminal/usage/routines/routine-macro-recorder",id:"terminal/usage/routines/routine-macro-recorder",title:"Routine Macro Recorder",description:"Learn how to use the macro recorder in OpenBB to start saving commands and automate common tasks with scripts. This page guides you through the process of recording, saving, and accessing your recorded routines.",source:"@site/content/terminal/usage/routines/routine-macro-recorder.md",sourceDirName:"terminal/usage/routines",slug:"/terminal/usage/routines/routine-macro-recorder",permalink:"/terminal/usage/routines/routine-macro-recorder",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/usage/routines/routine-macro-recorder.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1701304467,formattedLastUpdatedAt:"Nov 30, 2023",sidebarPosition:4,frontMatter:{title:"Routine Macro Recorder",sidebar_position:4,description:"Learn how to use the macro recorder in OpenBB to start saving commands and automate common tasks with scripts. This page guides you through the process of recording, saving, and accessing your recorded routines.",keywords:["macro recorder","script routines","global commands","Excel's VBA methods","command recording","routine script","terminal main menu","exe --file","OpenBBUserData","routines folder"]},sidebar:"tutorialSidebar",previous:{title:"Overlay Financial Data",permalink:"/terminal/usage/routines/overlay-financial-data"},next:{title:"Routines for Power Users",permalink:"/terminal/usage/routines/routines-for-power-users"}},d={},u=[],p={toc:u},m="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{title:"Routine Macro Recorder - Routines - Usage | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,o.kt)(i.Z,{youtubeLink:"https://www.youtube.com/embed/o53onlk7tPw?si=VPBKE_V3U1WNH-QO",videoLegend:"Short video on recording commands to create routine",mdxType:"TutorialVideo"}),(0,o.kt)("p",null,"OpenBB script routines can be captured with the macro recorder, controlled with global commands, ",(0,o.kt)("inlineCode",{parentName:"p"},"record")," to start saving commands and ",(0,o.kt)("inlineCode",{parentName:"p"},"stop")," to terminate the recording. This shares similarities with that of Excel's VBA methods. This means that any command you run will be automatically recorded for the routine script and once you type ",(0,o.kt)("inlineCode",{parentName:"p"},"stop")," it automatically saves the file to the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/OpenBBUserData/routines/")," folder."),(0,o.kt)("p",null,"For example, if you copy and paste the following prompt in the OpenBB Terminal and press enter, you will see an example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"/record/economy/cpi/treasury/index sp500/stop\n")),(0,o.kt)("p",null,"The following shows the output from this pipeline of commands."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/223204998-70d9e5da-f84e-4c22-90c4-576dcf87c1df.png",alt:"Routines"})),(0,o.kt)("p",null,"Because there was a ",(0,o.kt)("inlineCode",{parentName:"p"},"record")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"stop")," at the ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"end")," respectively, a routine script was created. This file cane be found inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"routines")," folder within the ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenBBUserData")," folder (more on exporting and import data ",(0,o.kt)("a",{parentName:"p",href:"/terminal/usage/data/custom-data"},"here"),")."),(0,o.kt)("p",null,"Now, you should be able to access the routine file from the terminal main menu by doing ",(0,o.kt)("inlineCode",{parentName:"p"},"/exe --file")," and using the auto-completer. Note that the naming of the file will differ for you based on the time you are executing the script."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/223205394-77e7a33d-e9fa-4686-b32f-e8d183b265e6.png",alt:"Routines"})))}h.isMDXComponent=!0},15569:(e,t,n)=>{e.exports=n(42285)},42285:(e,t,n)=>{var r,o=(r=n(67294))&&"object"==typeof r&&"default"in r?r.default:r;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return o.createElement("label",{"data-testid":"Toggle-label",className:"switch"},o.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),o.createElement("span",{className:"slider round"}))}}}]);