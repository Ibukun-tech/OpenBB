"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15855],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>N});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=m(n),k=r,N=d["".concat(p,".").concat(k)]||d[k]||s[k]||l;return n?a.createElement(N,i(i({ref:e},u),{},{components:n})):a.createElement(N,i({ref:e},u))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},88828:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(67294),r=n(35742);function l(t){let{title:e}=t;return a.createElement(r.Z,null,a.createElement("title",null,e))}},56695:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),l=n(88828);const i={title:"blacklitterman",description:"The page describes the Python method for the Black Litterman model implemented in the OpenBB library for optimizing portfolio weights. This method provides an advanced approach in risk management and return estimation by taking into account various parameters like risk-free rate, risk aversion factor, and objectives like maximizing Sharpe ratio or minimizing risk.",keywords:["Black Litterman model","Portfolio optimization","Portfolio weights","Risk management","Return estimates","Sharpe ratio","Equilibrium portfolio"]},o=void 0,p={unversionedId:"sdk/reference/portfolio/po/blacklitterman",id:"sdk/reference/portfolio/po/blacklitterman",title:"blacklitterman",description:"The page describes the Python method for the Black Litterman model implemented in the OpenBB library for optimizing portfolio weights. This method provides an advanced approach in risk management and return estimation by taking into account various parameters like risk-free rate, risk aversion factor, and objectives like maximizing Sharpe ratio or minimizing risk.",source:"@site/content/sdk/reference/portfolio/po/blacklitterman.md",sourceDirName:"sdk/reference/portfolio/po",slug:"/sdk/reference/portfolio/po/blacklitterman",permalink:"/sdk/reference/portfolio/po/blacklitterman",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/po/blacklitterman.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1701304467,formattedLastUpdatedAt:"Nov 30, 2023",frontMatter:{title:"blacklitterman",description:"The page describes the Python method for the Black Litterman model implemented in the OpenBB library for optimizing portfolio weights. This method provides an advanced approach in risk management and return estimation by taking into account various parameters like risk-free rate, risk aversion factor, and objectives like maximizing Sharpe ratio or minimizing risk.",keywords:["Black Litterman model","Portfolio optimization","Portfolio weights","Risk management","Return estimates","Sharpe ratio","Equilibrium portfolio"]},sidebar:"tutorialSidebar",previous:{title:"po",permalink:"/sdk/reference/portfolio/po/"},next:{title:"ef",permalink:"/sdk/reference/portfolio/po/ef"}},m={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],d={toc:u},s="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(s,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"portfolio.po.blacklitterman - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Optimize decorrelation weights"),(0,r.kt)("p",null,"Source Code: [",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/po_model.py#L1083"},"link"),"]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"openbb.portfolio.po.blacklitterman(portfolio_engine: Optional[portfolio_optimization.po_engine.PoEngine] = None, kwargs: Any)\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"portfolio_engine"),(0,r.kt)("td",{parentName:"tr",align:null},"PoEngine"),(0,r.kt)("td",{parentName:"tr",align:null},"Portfolio optimization engine, by default None",(0,r.kt)("br",null),"Use ",(0,r.kt)("inlineCode",{parentName:"td"},"portfolio.po.load")," to load a portfolio engine"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interval"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Interval to get data, by default '3y'"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_date"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},'If not using interval, start date string (YYYY-MM-DD), by default ""'),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end_date"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},'If not using interval, end date string (YYYY-MM-DD). If empty use last weekday, by default ""'),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_returns"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"If True use log returns, else arithmetic returns, by default False"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"freq"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Frequency of returns, by default 'D'. Options: 'D' for daily, 'W' for weekly, 'M' for monthly"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxnan"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum percentage of NaNs allowed in the data, by default 0.05"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"threshold"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Value used to replace outliers that are higher than threshold, by default 0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Method used to fill nan values, by default 'time'",(0,r.kt)("br",null),"For more information see ",(0,r.kt)("inlineCode",{parentName:"td"},"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"),"__."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount to allocate to portfolio in long positions, by default 1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value_short"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount to allocate to portfolio in short positions, by default 0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"benchmark"),(0,r.kt)("td",{parentName:"tr",align:null},"Dict"),(0,r.kt)("td",{parentName:"tr",align:null},"Dict of portfolio weights, by default None"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"p_views"),(0,r.kt)("td",{parentName:"tr",align:null},"List"),(0,r.kt)("td",{parentName:"tr",align:null},"Matrix P of views that shows relationships among assets and returns, by default None"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"q_views"),(0,r.kt)("td",{parentName:"tr",align:null},"List"),(0,r.kt)("td",{parentName:"tr",align:null},"Matrix Q of expected returns of views, by default None"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"objective"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Objective function of the optimization model, by default 'Sharpe'",(0,r.kt)("br",null),"Possible values are:",(0,r.kt)("br",null),(0,r.kt)("br",null),"- 'MinRisk': Minimize the selected risk measure.",(0,r.kt)("br",null),"- 'Utility': Maximize the risk averse utility function.",(0,r.kt)("br",null),"- 'Sharpe': Maximize the risk adjusted return ratio based on the selected risk measure.",(0,r.kt)("br",null),"- 'MaxRet': Maximize the expected return of the portfolio."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"risk_free_rate"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Risk free rate, annualized. Used for 'FLPM' and 'SLPM' and Sharpe objective function, by default 0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"risk_aversion"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Risk aversion factor of the 'Utility' objective function, by default 1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delta"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Risk aversion factor of Black Litterman model, by default None"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"equilibrium"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"If True excess returns are based on equilibrium market portfolio, if False",(0,r.kt)("br",null),"excess returns are calculated as historical returns minus risk free rate, by default True"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"optimize"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"If True Black Litterman estimates are used as inputs of mean variance model,",(0,r.kt)("br",null),"if False returns equilibrium weights from Black Litterman model, by default True"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tuple","[pd.DataFrame, Dict]"),(0,r.kt)("td",{parentName:"tr",align:null},"Tuple with weights and performance dictionary")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\nd = {\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"SECTOR": {\n                "AAPL": "INFORMATION TECHNOLOGY",\n                "MSFT": "INFORMATION TECHNOLOGY",\n                "AMZN": "CONSUMER DISCRETIONARY",\n            },\n            "CURRENCY": {\n                "AAPL": "USD",\n                "MSFT": "USD",\n                "AMZN": "USD",\n            },\n            "CURRENT_INVESTED_AMOUNT": {\n                "AAPL": "100000.0",\n                "MSFT": "200000.0",\n                "AMZN": "300000.0",\n            },\n        }\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"p = openbb.portfolio.po.load(symbols_categories=d)\nweights, performance = openbb.portfolio.po.blacklitterman(portfolio_engine=p)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols_file_path="~/openbb_terminal/miscellaneous/portfolio_examples/allocation/60_40_Portfolio.xlsx")\nweights, performance = openbb.portfolio.po.blacklitterman(portfolio_engine=p)\n')),(0,r.kt)("hr",null))}k.isMDXComponent=!0}}]);