"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90004],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(35742);function o(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},20630:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(15569);function o(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[o,i]=(0,r.useState)(!0);return r.createElement("div",{style:{textAlign:"center"}},r.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-center"},r.createElement("p",null,n),r.createElement("div",{style:{transform:"scale(0.7)"}},r.createElement(a.Toggle,{isOn:o,handleChange:()=>i(!o)}))),o&&r.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"}},r.createElement("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})))}},43242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(88828),i=n(20630);const s={title:"Introduction",sidebar_position:0,description:"Learn about the Data Connectors feature of OpenBB Terminal Pro which allows integration of private datasets via different methods such as No code, Advanced and Third-party. For any further assistance, contact us at support@openbb.finance.",keywords:["Data Connectors","private datasets","no code","advanced","third-party","integrate","API","data warehouse","database","support"]},c=void 0,d={unversionedId:"pro/data-connectors/index",id:"pro/data-connectors/index",title:"Introduction",description:"Learn about the Data Connectors feature of OpenBB Terminal Pro which allows integration of private datasets via different methods such as No code, Advanced and Third-party. For any further assistance, contact us at support@openbb.finance.",source:"@site/content/pro/data-connectors/index.md",sourceDirName:"pro/data-connectors",slug:"/pro/data-connectors/",permalink:"/pro/data-connectors/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/pro/data-connectors/index.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713783034,formattedLastUpdatedAt:"Apr 22, 2024",sidebarPosition:0,frontMatter:{title:"Introduction",sidebar_position:0,description:"Learn about the Data Connectors feature of OpenBB Terminal Pro which allows integration of private datasets via different methods such as No code, Advanced and Third-party. For any further assistance, contact us at support@openbb.finance.",keywords:["Data Connectors","private datasets","no code","advanced","third-party","integrate","API","data warehouse","database","support"]},sidebar:"tutorialSidebar",previous:{title:"Excel Templates",permalink:"/pro/templates/excel"},next:{title:"Single widget",permalink:"/pro/data-connectors/single-widget/"}},l={},p=[{value:"Single Widget",id:"single-widget",level:2},{value:"Integrate your own backend",id:"integrate-your-own-backend",level:2},{value:"Native Integrations",id:"native-integrations",level:2}],u={toc:p},h="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"Data Connectors | OpenBB Terminal Pro Docs",mdxType:"HeadTitle"}),(0,a.kt)(i.Z,{youtubeLink:"https://www.youtube.com/embed/os5U2elFj10?si=tp4E_jyD13FTDN3B",videoLegend:"Short introduction to Data Connectors",mdxType:"TutorialVideo"}),(0,a.kt)("p",null,"OpenBB Terminal Pro's Data Connectors are designed to empower teams by allowing them to integrate their own private datasets. This feature enhances the platform's capabilities by providing a seamless experience alongside the data that matters most to you."),(0,a.kt)("img",{className:"pro-border-gradient",width:"800",alt:"data connectors",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/5df818ce-e4a1-4241-b8d5-be60ec25c7d4"}),(0,a.kt)("img",{className:"pro-border-gradient",width:"800",alt:"data connectors - my widgets",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/e3d74bb6-ce1e-4cdf-8f5e-d9053403ce9a"}),(0,a.kt)("p",null,"We offer three distinct methods for importing your data into the platform."),(0,a.kt)("h2",{id:"single-widget"},"Single Widget"),(0,a.kt)("p",null,"This method allows users to import an API endpoint that is directly rendered into a table format. While customization is limited, it provides a quick and easy way to visualize your data. More information can be found ",(0,a.kt)("a",{parentName:"p",href:"/pro/data-connectors/single-widget"},"here"),"."),(0,a.kt)("h2",{id:"integrate-your-own-backend"},"Integrate your own backend"),(0,a.kt)("p",null,"For those who prefer a more hands-on approach, you can create your own backend. You can either leverage OpenBB's cookie-cutter or build a language-agnostic API. More information can be found ",(0,a.kt)("a",{parentName:"p",href:"/pro/data-connectors/integrate-your-own-backend"},"here"),"."),(0,a.kt)("h2",{id:"native-integrations"},"Native Integrations"),(0,a.kt)("p",null,"OpenBB has established partnerships with several companies to streamline the process of importing external data. This includes data providers that require an API key, or integration with a data warehouse or database. This is work in progress."),(0,a.kt)("p",null,"For further assistance in creating your Backend API or adding a single widget endpoint, please contact us at ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@openbb.finance"},"support@openbb.finance")))}m.isMDXComponent=!0},15569:(e,t,n)=>{e.exports=n(42285)},42285:(e,t,n)=>{var r,a=(r=n(67294))&&"object"==typeof r&&"default"in r?r.default:r;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return a.createElement("label",{"data-testid":"Toggle-label",className:"switch"},a.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),a.createElement("span",{className:"slider round"}))}}}]);