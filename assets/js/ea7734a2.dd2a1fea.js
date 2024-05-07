"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74230],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(35742);function i(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},74813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),i=n(88828);const l={title:"User Settings & Environment Variables",sidebar_position:3,description:"This section details configuring the OpenBB Platform settings and environment variables.",keywords:["OpenBB Platform","Python client","getting started","OpenBB Hub","local environment","environment variables"]},o=void 0,s={unversionedId:"platform/usage/settings_and_environment_variables",id:"platform/usage/settings_and_environment_variables",title:"User Settings & Environment Variables",description:"This section details configuring the OpenBB Platform settings and environment variables.",source:"@site/content/platform/usage/settings_and_environment_variables.md",sourceDirName:"platform/usage",slug:"/platform/usage/settings_and_environment_variables",permalink:"/platform/usage/settings_and_environment_variables",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/usage/settings_and_environment_variables.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1715079455,formattedLastUpdatedAt:"May 7, 2024",sidebarPosition:3,frontMatter:{title:"User Settings & Environment Variables",sidebar_position:3,description:"This section details configuring the OpenBB Platform settings and environment variables.",keywords:["OpenBB Platform","Python client","getting started","OpenBB Hub","local environment","environment variables"]},sidebar:"tutorialSidebar",previous:{title:"REST API",permalink:"/platform/usage/rest_api"},next:{title:"Basic Response & Command Coverage",permalink:"/platform/usage/basic_response"}},p={},d=[{value:"User Settings",id:"user-settings",level:2},{value:"Notes on Preferences",id:"notes-on-preferences",level:3},{value:"Proxy Networks",id:"proxy-networks",level:3}],u={toc:d},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"User Settings & Environment Variables - Usage | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"This page outlines configuring the OpenBB Platform with user settings and environment variables."),(0,r.kt)("h2",{id:"user-settings"},"User Settings"),(0,r.kt)("p",null,"User preferences are stored locally, ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.openbb_platform/"),", as a JSON file, ",(0,r.kt)("inlineCode",{parentName:"p"},"user_settings.json"),".  It is read upon initializing the Python client, or when the Fast API is authorized. If the file does not exist, it will be created on the first run."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Preference")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Options")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data_directory"),(0,r.kt)("td",{parentName:"tr",align:null},"/home/OpenBBUserData"),(0,r.kt)("td",{parentName:"tr",align:null},"Any path."),(0,r.kt)("td",{parentName:"tr",align:null},"When launching the application for the first time  this directory will be created. It serves as the default location where the application stores usage artifacts  such as logs and exports.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"export_directory"),(0,r.kt)("td",{parentName:"tr",align:null},"/home/OpenBBUserData/exports"),(0,r.kt)("td",{parentName:"tr",align:null},"Any path."),(0,r.kt)("td",{parentName:"tr",align:null},"The OpenBB Charting Extension provides the capability to export images in various formats. This is the directory where it attempts to save such exports.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cache_directory"),(0,r.kt)("td",{parentName:"tr",align:null},"/home/OpenBBUserData/cache"),(0,r.kt)("td",{parentName:"tr",align:null},"Any path."),(0,r.kt)("td",{parentName:"tr",align:null},"The directory where http requests and database caches are stored, for functions with caching.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user_styles_directory"),(0,r.kt)("td",{parentName:"tr",align:null},"/home/OpenBBUserData/styles/user"),(0,r.kt)("td",{parentName:"tr",align:null},"Any path."),(0,r.kt)("td",{parentName:"tr",align:null},"The OpenBB Charting Extension supports custom stylization. This directory is the location where it looks for user-defined styles. If no user styles are found in this directory  the application will proceed with the default styles.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"charting_extension"),(0,r.kt)("td",{parentName:"tr",align:null},"openbb_charting"),(0,r.kt)("td",{parentName:"tr",align:null},'["openbb_charting"]'),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the charting extension to be used with the application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chart_style"),(0,r.kt)("td",{parentName:"tr",align:null},"dark"),(0,r.kt)("td",{parentName:"tr",align:null},'["dark", "light"]'),(0,r.kt)("td",{parentName:"tr",align:null},'The default color style to use with the OpenBB Charting Extension plots. Options include "dark" and "light".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plot_enable_pywry"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"[True, False]"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the application should enable PyWry. If PyWry is disabled  the image will open in your default browser  otherwise  it will be displayed within your editor or in a separate PyWry window.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plot_pywry_width"),(0,r.kt)("td",{parentName:"tr",align:null},"1400"),(0,r.kt)("td",{parentName:"tr",align:null},"Any positive integer."),(0,r.kt)("td",{parentName:"tr",align:null},"PyWry window width.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plot_pywry_height"),(0,r.kt)("td",{parentName:"tr",align:null},"762"),(0,r.kt)("td",{parentName:"tr",align:null},"Any positive integer."),(0,r.kt)("td",{parentName:"tr",align:null},"PyWry window height.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plot_open_export"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"[True, False]"),(0,r.kt)("td",{parentName:"tr",align:null},'Controls whether the "Save As" window should pop up as soon as the image is displayed."')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table_style"),(0,r.kt)("td",{parentName:"tr",align:null},"dark"),(0,r.kt)("td",{parentName:"tr",align:null},'["dark", "light"]'),(0,r.kt)("td",{parentName:"tr",align:null},'"The default color style to use with the OpenBB Charting Extension tables. Options are "dark" and "light""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"Any positive integer."),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the timeout duration for HTTP requests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"[True, False]"),(0,r.kt)("td",{parentName:"tr",align:null},"Enables or disables the collection of metadata  which provides information about operations  including arguments  duration  route  and timestamp. Disabling this feature may improve performance in cases where contextual information is not needed or when the additional computation time and storage space are a concern.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output_type"),(0,r.kt)("td",{parentName:"tr",align:null},"OBBject"),(0,r.kt)("td",{parentName:"tr",align:null},'["OBBject", "dataframe", "numpy", "dict", "chart", "polars"]'),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the type of data the application will output when a command or endpoint is accessed. Note that choosing data formats only available in Python  such as ",(0,r.kt)("inlineCode",{parentName:"td"},"dataframe"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"numpy")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"polars")," will render the application's API non-functional.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"show_warnings"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"[True, False]"),(0,r.kt)("td",{parentName:"tr",align:null},"Enables or disables the display of warnings.")))),(0,r.kt)("h3",{id:"notes-on-preferences"},"Notes on Preferences"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"If a ",(0,r.kt)("inlineCode",{parentName:"li"},"OpenBBUserData")," folder in not in the home directory, the application will create one on first run. The user preferences with paths all default to this folder, be it exports, styles or data - this can be changed at any time to suit."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"OpenBBUserData")," will still be created even if preferences are not pointing to it, this is because the application needs a place to store logs and other artifacts."),(0,r.kt)("li",{parentName:"ul"},"One way to export files or images from the OpenBB Platform is to leverage that functionality from the OpenBB Charting Extension. The ",(0,r.kt)("inlineCode",{parentName:"li"},"export_directory")," preference is the location where the extension will attempt to save CSV and image files."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "preferences": {\n        "data_directory": "~/OpenBBUserData",\n        "export_directory": "~/OpenBBUserData/exports",\n        "cache_directory": "~/OpenBBUserData/cache",\n        "user_styles_directory": "~/OpenBBUserData/styles/user",\n        "charting_extension": "openbb_charting",\n        "chart_style": "dark",\n        "plot_enable_pywry": true,\n        "plot_pywry_width": 1400,\n        "plot_pywry_height": 762,\n        "plot_open_export": false,\n        "table_style": "dark",\n        "request_timeout": 15,\n        "metadata": true,\n        "output_type": "OBBject"\n}\n}\n\n\n## Environment Variables\n\nEnvironment variables are defined in a `.env` file. If this file does not exist, create it inside the same folder `user_settings.json` is located.\n\n- `OPENBB_DEBUG_MODE`: enables verbosity while running the program\n- `OPENBB_DEVELOP_MODE`: points hub service to .co or .dev\n- `OPENBB_AUTO_BUILD`: enables automatic SDK package build on import\n- `OPENBB_CHARTING_EXTENSION`: specifies which charting extension to use\n- `OPENBB_API_AUTH_EXTENSION`: specifies which authentication extension to use\n- `OPENBB_API_AUTH`: enables API authentication for command endpoints\n- `OPENBB_API_USERNAME`: sets API username\n- `OPENBB_API_PASSWORD`: sets API password\n\nVariables can be defined for current session only.\n\n```python\nimport os\nos.environ["OPENBB_DEBUG_MODE"] = "True"\nfrom openbb import obb\n')),(0,r.kt)("h3",{id:"proxy-networks"},"Proxy Networks"),(0,r.kt)("p",null,"An environment variable can be set, in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file, to direct the Requests library to a specific address and port."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-env"},'HTTP_PROXY="<ADDRESS>" or HTTPS_PROXY="<ADDRESS>\u201d\n')),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-env"},'HTTP_PROXY="http://10.10.10.10:8000"\n')))}c.isMDXComponent=!0}}]);