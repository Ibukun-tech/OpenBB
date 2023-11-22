"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19272],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),o=a(35742);function r(e){let{title:t}=e;return n.createElement(o.Z,null,n.createElement("title",null,t))}},20630:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),o=a(15569);function r(e){let{youtubeLink:t,videoLegend:a="Tutorial video"}=e;const[r,i]=(0,n.useState)(!0);return n.createElement("div",{style:{textAlign:"center"}},n.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-center"},n.createElement("p",null,a),n.createElement("div",{style:{transform:"scale(0.7)"}},n.createElement(o.Toggle,{isOn:r,handleChange:()=>i(!r)}))),r&&n.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"}},n.createElement("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})))}},15041:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=a(87462),o=(a(67294),a(3905)),r=a(88828),i=a(20630);const s={title:"Data sources",sidebar_position:1,description:"This page provides useful information on dealing with different data vendors when using OpenBB's Terminal. It outlines how to select a default data source, acquire API keys, and switch the data vendor using specific commands, all in an effort to streamline and improve the user's experience.",keywords:["Terminal","data vendors","API keys","data sources","FinancialModelingPrep","Polygon","AlphaVantage","EODHD","YahooFinance","source","stocks/fa/income","changing data source","Default data source","/sources","get --cmd","set --cmd"]},l=void 0,c={unversionedId:"terminal/usage/data/data-sources",id:"terminal/usage/data/data-sources",title:"Data sources",description:"This page provides useful information on dealing with different data vendors when using OpenBB's Terminal. It outlines how to select a default data source, acquire API keys, and switch the data vendor using specific commands, all in an effort to streamline and improve the user's experience.",source:"@site/content/terminal/usage/data/data-sources.md",sourceDirName:"terminal/usage/data",slug:"/terminal/usage/data/data-sources",permalink:"/terminal/usage/data/data-sources",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/usage/data/data-sources.md",tags:[],version:"current",lastUpdatedBy:"Luqman",lastUpdatedAt:1700659065,formattedLastUpdatedAt:"Nov 22, 2023",sidebarPosition:1,frontMatter:{title:"Data sources",sidebar_position:1,description:"This page provides useful information on dealing with different data vendors when using OpenBB's Terminal. It outlines how to select a default data source, acquire API keys, and switch the data vendor using specific commands, all in an effort to streamline and improve the user's experience.",keywords:["Terminal","data vendors","API keys","data sources","FinancialModelingPrep","Polygon","AlphaVantage","EODHD","YahooFinance","source","stocks/fa/income","changing data source","Default data source","/sources","get --cmd","set --cmd"]},sidebar:"tutorialSidebar",previous:{title:"Data",permalink:"/terminal/usage/data/"},next:{title:"API Keys",permalink:"/terminal/usage/data/api-keys"}},d={},u=[{value:"Relationship With Data Vendors",id:"relationship-with-data-vendors",level:2},{value:"Changing the Data Source In-Command",id:"changing-the-data-source-in-command",level:2},{value:"Setting Default Source Through Hub (easy)",id:"setting-default-source-through-hub-easy",level:3},{value:"Setting Default Source Through Terminal",id:"setting-default-source-through-terminal",level:3}],p={toc:u},m="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{title:"Data sources - Data - Usage | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,o.kt)(i.Z,{youtubeLink:"https://www.youtube.com/embed/cvSwG96Yf4o?si=oswcJYUH51F206Hu",videoLegend:"Short video on where the data comes from",mdxType:"TutorialVideo"}),(0,o.kt)("h2",{id:"relationship-with-data-vendors"},"Relationship With Data Vendors"),(0,o.kt)("p",null,"Most commands will require obtaining API keys from various data providers. OpenBB provides methods for consuming these data feeds, but has no control over the quality or quantity of data provided to an end-user. ",(0,o.kt)("strong",{parentName:"p"},"No API Keys are required to get started using the Terminal"),"."),(0,o.kt)("p",null,"See the list of data providers ",(0,o.kt)("a",{parentName:"p",href:"/terminal/usage/data/api-keys"},"here"),", along with instructions for entering the credentials into the OpenBB Terminal. You can also request a new data source through this ",(0,o.kt)("a",{parentName:"p",href:"https://openbb.co/request-a-feature"},"form"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"OpenBB doesn't store any financial data in its servers. We aggregate access to multiple data sources through API calls and standardize that interaction to provide users a seamless experience when dealing with different data vendors")),(0,o.kt)("h2",{id:"changing-the-data-source-in-command"},"Changing the Data Source In-Command"),(0,o.kt)("p",null,"Many commands have multiple data sources associated with it. A great example is ",(0,o.kt)("inlineCode",{parentName:"p"},"/stocka/fa/income"),", which allows you to select FinancialModelingPrep, Polygon, AlphaVantage, EODHD or YahooFinance. In order to specify the data vendor for that particular command, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--source")," argument."),(0,o.kt)("p",null,"This also becomes clear from the help menu."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/fa/income -h\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"usage: income [-t TICKER] [-q] [-r] [-p column] [-h] [--export EXPORT] [--sheet-name SHEET_NAME [SHEET_NAME ...]] [-l LIMIT] [--source {FinancialModelingPrep,Polygon,AlphaVantage,EODHD,YahooFinance}]\n\nPrints a complete income statement over time. This can be either quarterly or annually.\n\noptional arguments:\n  -t TICKER, --ticker TICKER\n                        Ticker to analyze (default: None)\n  -q, --quarter         Quarter fundamental data flag. (default: False)\n  -r, --ratios          Shows percentage change of values. (default: False)\n  -p column, --plot column\n                        Rows to plot, comma separated. (-1 represents invalid data) (default: None)\n  -h, --help            show this help message (default: False)\n  --export EXPORT       Export raw data into csv, json, xlsx (default: )\n  --sheet-name SHEET_NAME [SHEET_NAME ...]\n                        Name of excel sheet to save data to. Only valid for .xlsx files. (default: None)\n  -l LIMIT, --limit LIMIT\n                        Number of entries to show in data. (default: 5)\n  --source {FinancialModelingPrep,Polygon,AlphaVantage,EODHD,YahooFinance}\n                        Data source to select from (default: FinancialModelingPrep)\n\nFor more information and examples, use 'about income' to access the related guide.\n")),(0,o.kt)("p",null,"Within the source arguments it shows the available sources. An API key may be required to use a source, see this ",(0,o.kt)("a",{parentName:"p",href:"/terminal/usage/data/api-keys"},"page")," for insructions on obtaining and setting credentials."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233730763-54fd6400-f3ad-44a0-9c73-254d91ac2085.png",alt:"Selecting a new Data Source"})),(0,o.kt)("p",null,"The available sources for each command are displayed on the right of the command, and they can be distinguished by the square brackets and distinct font color group. By default, if the user doesn't specify ",(0,o.kt)("inlineCode",{parentName:"p"},"--source")," the Terminal will use the first data provider displayed."),(0,o.kt)("h3",{id:"setting-default-source-through-hub-easy"},"Setting Default Source Through Hub (easy)"),(0,o.kt)("p",null,"The default data vendor can be selected with more ease through the OpenBB Hub. Instructions can be found ",(0,o.kt)("a",{parentName:"p",href:"/terminal/usage/hub"},"here"),"."),(0,o.kt)("h3",{id:"setting-default-source-through-terminal"},"Setting Default Source Through Terminal"),(0,o.kt)("p",null,"The default data source for each command (where multiple sources are available) can be defined within the ",(0,o.kt)("a",{parentName:"p",href:"/terminal/usage/data/data-sources"},(0,o.kt)("inlineCode",{parentName:"a"},"/sources"))," menu."),(0,o.kt)("p",null,"For example, changing the default data provider for the ",(0,o.kt)("inlineCode",{parentName:"p"},"income")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"/sources/get --cmd stocks/fa/income\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-conole"},"Default   : FinancialModelingPrep\nAvailable : FinancialModelingPrep, Polygon, AlphaVantage, EODHD, YahooFinance\n")),(0,o.kt)("p",null,"Then, change the default data provider with the, ",(0,o.kt)("inlineCode",{parentName:"p"},"set"),", command. For example, change the data provider to ",(0,o.kt)("inlineCode",{parentName:"p"},"Polygon")," with\nthe following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"/sources/set --cmd stocks/fa/income --source Polygon\n")),(0,o.kt)("p",null,"A confirmation message is displayed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"Default data source for 'stocks/fa/income' set to 'Polygon'.\n")),(0,o.kt)("p",null,"Using, ",(0,o.kt)("inlineCode",{parentName:"p"},"get"),", once more will confirm the update:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"/sources/get --cmd stocks/fa/income\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"Default   : Polygon\nAvailable : Polygon, FinancialModelingPrep, AlphaVantage, EODHD, YahooFinance\n")))}h.isMDXComponent=!0},15569:(e,t,a)=>{e.exports=a(42285)},42285:(e,t,a)=>{var n,o=(n=a(67294))&&"object"==typeof n&&"default"in n?n.default:n;!function(e,t){void 0===t&&(t={});var a=t.insertAt;if("undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===a&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return o.createElement("label",{"data-testid":"Toggle-label",className:"switch"},o.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),o.createElement("span",{className:"slider round"}))}}}]);