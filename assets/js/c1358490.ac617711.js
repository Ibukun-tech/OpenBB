"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97794],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>m});var a=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=a.createContext({}),d=function(n){var e=a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},c=function(n){var e=d(n.components);return a.createElement(s.Provider,{value:e},n.children)},f="mdxType",h={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,s=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),f=d(t),u=i,m=f["".concat(s,".").concat(u)]||f[u]||h[u]||r;return t?a.createElement(m,o(o({ref:e},c),{},{components:t})):a.createElement(m,o({ref:e},c))}));function m(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l[f]="string"==typeof n?n:i,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},88828:(n,e,t)=>{t.d(e,{Z:()=>r});var a=t(67294),i=t(35742);function r(n){let{title:e}=n;return a.createElement(i.Z,null,a.createElement("title",null,e))}},91813:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(87462),i=(t(67294),t(3905)),r=t(88828);const o={title:"Indicators",sidebar_position:2,description:"A tutorial of the technical indicators included with the openbb-charting library, including how to get started using them.",keywords:["tutorial","OpenBB Platform","getting started","extensions","charting","view","Plotly","toolkits","indicators","Plotly","OpenBBFigure","PyWry"]},l=void 0,s={unversionedId:"platform/extensions/charting/indicators",id:"platform/extensions/charting/indicators",title:"Indicators",description:"A tutorial of the technical indicators included with the openbb-charting library, including how to get started using them.",source:"@site/content/platform/extensions/charting/indicators.md",sourceDirName:"platform/extensions/charting",slug:"/platform/extensions/charting/indicators",permalink:"/platform/extensions/charting/indicators",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/extensions/charting/indicators.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1715079455,formattedLastUpdatedAt:"May 7, 2024",sidebarPosition:2,frontMatter:{title:"Indicators",sidebar_position:2,description:"A tutorial of the technical indicators included with the openbb-charting library, including how to get started using them.",keywords:["tutorial","OpenBB Platform","getting started","extensions","charting","view","Plotly","toolkits","indicators","Plotly","OpenBBFigure","PyWry"]},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/platform/extensions/charting/installation"},next:{title:"Overview",permalink:"/platform/usage/"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Available Indicators",id:"available-indicators",level:2}],f={toc:c},h="wrapper";function u(n){let{components:e,...t}=n;return(0,i.kt)(h,(0,a.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{title:"Indicators - OpenBB Charting - Extensions | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Select indicators (technical) can be added to a chart where the data is OHLC+V prices over time, and the data is for one symbol only.\nThey are meant as quick visualizations, and a way to build more complex charts.\nAs starting points, they can be refined to perfection by manipulating the figure object directly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from datetime import datetime, timedelta\nfrom openbb import obb\ndata = obb.equity.price.historical(\n    "TSLA",\n    provider="yfinance",\n    interval="15m",\n    start_date=(datetime.now()-timedelta(days=21)).date(),\n    chart=True,\n    chart_params=dict(\n        heikin_ashi=True,\n        indicators=(dict(\n            ema=dict(length=[8,32]),\n            srlines={}, # For indicators, an empty dictionary implies the default state.\n            rsi=dict(length=32)\n        ))\n    )\n)\ndata.show()\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/7d8d95d8-0383-4e9d-9477-7ad2424328df",alt:"TSLA Intraday With Indicators"})),(0,i.kt)("h2",{id:"available-indicators"},"Available Indicators"),(0,i.kt)("p",null,"To get all the indicators, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"charting.indicators()")," method.\nThe object returned is a Pydantic model where each indicator is field.\nIf you don't catch it, it will print as a docstring to the console."),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Some indicators, like RSI and MACD, create subplots. Only 4 subplots (not including the main candles + volume) can be created within the same view.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"data.charting.indicators()\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"SMA:\n\n    Parameters\n    ----------\n\n    length : Union[int, list[int]]\n        Window length for the moving average, by default is 50.\n        The number is relative to the interval of the time series data.\n\n    offset : int\n        Number of periods to offset for the moving average, by default is 0.\n\nEMA:\n\n    Parameters\n    ----------\n\n    length : Union[int, list[int]]\n        Window length for the moving average, by default is 50.\n        The number is relative to the interval of the time series data.\n\n    offset : int\n        Number of periods to offset for the moving average, by default is 0.\n\nHMA:\n\n    Parameters\n    ----------\n\n    length : Union[int, list[int]]\n        Window length for the moving average, by default is 50.\n        The number is relative to the interval of the time series data.\n\n    offset : int\n        Number of periods to offset for the moving average, by default is 0.\n\nWMA:\n\n    Parameters\n    ----------\n\n    length : Union[int, list[int]]\n        Window length for the moving average, by default is 50.\n        The number is relative to the interval of the time series data.\n\n    offset : int\n        Number of periods to offset for the moving average, by default is 0.\n\nZLMA:\n\n    Parameters\n    ----------\n\n    length : Union[int, list[int]]\n        Window length for the moving average, by default is 50.\n        The number is relative to the interval of the time series data.\n\n    offset : int\n        Number of periods to offset for the moving average, by default is 0.\n\nAD:\n\n    Parameters\n    ----------\n\n    offset : int\n        Offset value for the AD, by default is 0.\n\nAD Oscillator:\n\n    Parameters\n    ----------\n\n    fast : int\n        Number of periods to use for the fast calculation, by default 3.\n\n    slow : int\n        Number of periods to use for the slow calculation, by default 10.\n\n    offset : int\n        Offset to be used for the calculation, by default is 0.\n\nADX:\n\n    Parameters\n    ----------\n\n    length : int\n        Window length for the ADX, by default is 50.\n\n    scalar : float\n        Scalar to multiply the ADX by, default is 100.\n\n    drift : int\n        Drift value for the ADX, by default is 1.\n\nAroon:\n\n    Parameters\n    ----------\n\n    length : int\n        Window length for the Aroon, by default is 50.\n\n    scalar : float\n        Scalar to multiply the Aroon by, default is 100.\n\nATR:\n\n    Parameters\n    ----------\n\n    length : int\n        Window length for the ATR, by default is 14.\n\n    mamode : Literal[rma, ema, sma, wma]\n        The mode to use for the moving average calculation.\n\n    drift : int\n        The difference period.\n\n    offset : int\n        Number of periods to offset the result, by default is 0.\n\nCCI:\n\n    Parameters\n    ----------\n\n    length : int\n        Window length for the CCI, by default is 14.\n\n    scalar : float\n        Scalar to multiply the CCI by, default is 0.015.\n\nClenow:\n\n    Parameters\n    ----------\n\n    period : int\n        The number of periods for the momentum, by default 90.\n\nDemark:\n\n    Parameters\n    ----------\n\n    show_all : bool\n        Show 1 - 13.\n        If set to False, show 6 - 9.\n\n    offset : int\n        Number of periods to offset the result, by default is 0.\n\nDonchian:\n\n    Parameters\n    ----------\n\n    lower : Union[int, NoneType]\n        Window length for the lower band, by default is 20.\n\n    upper : Union[int, NoneType]\n        Window length for the upper band, by default is 20.\n\n    offset : Union[int, NoneType]\n        Number of periods to offset the result, by default is 0.\n\nFib:\n\n    Parameters\n    ----------\n\n    period : int\n        The period to calculate the Fibonacci Retracement, by default 120.\n\n    start_date : Union[str, NoneType]\n        The start date for the Fibonacci Retracement.\n\n    end_date : Union[str, NoneType]\n        The end date for the Fibonacci Retracement.\n\nFisher:\n\n    Parameters\n    ----------\n\n    length : int\n        Window length for the Fisher Transform, by default is 14.\n\n    signal : int\n        Fisher Signal Period\n\nIchimoku:\n\n    Parameters\n    ----------\n\n    conversion : int\n        The conversion line period, by default 9.\n\n    base : int\n        The base line period, by default 26.\n\n    lagging : int\n        The lagging line period, by default 52.\n\n    offset : int\n        The offset period, by default 26.\n\n    lookahead : bool\n        Drops the Chikou Span Column to prevent potential data leak\n\nKC:\n\n    Parameters\n    ----------\n\n    length : int\n        Window length for the Keltner Channel, by default is 20.\n\n    scalar : float\n        Scalar to multiply the ATR, by default is 2.\n\n    mamode : Literal[ema, sma, wma, hna, zlma, rma]\n        The mode to use for the moving average calculation, by default is ema.\n\n    offset : int\n        Number of periods to offset the result, by default is 0.\n\nMACD:\n\n    Parameters\n    ----------\n\n    fast : Union[int, NoneType]\n        Window length for the fast EMA, by default is 12.\n\n    slow : Union[int, NoneType]\n        Window length for the slow EMA, by default is 26.\n\n    signal : Union[int, NoneType]\n        Window length for the signal line, by default is 9.\n\n    scalar : Union[float, NoneType]\n        Scalar to multiply the MACD by, default is 100.\n\nOBV:\n\n    Parameters\n    ----------\n\n    offset : int\n        Number of periods to offset the result, by default is 0.\n\nRSI:\n\n    Parameters\n    ----------\n\n    length : int\n        Window length for the RSI, by default is 14.\n\n    scalar : float\n        Scalar to multiply the RSI by, default is 100.\n\n    drift : int\n        Drift value for the RSI, by default is 1.\n\nSRLines:\n\n    Parameters\n    ----------\n\n    show : bool\n        Show the support and resistance lines.\n\nStoch:\n\n    Parameters\n    ----------\n\n    fast_k : int\n        The fast K period, by default 14.\n\n    slow_d : int\n        The slow D period, by default 3.\n\n    slow_k : int\n        The slow K period, by default 3.\n")),(0,i.kt)("p",null,"The model can be converted to a dictionary and then passed through the ",(0,i.kt)("inlineCode",{parentName:"p"},"indicators")," params."),(0,i.kt)("p",null,"The chart below is built from the same object as the one above."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'indicators = data.charting.indicators().dict()\nmacd=indicators.get("macd")\nkc=indicators.get("kc")\nchart_params=dict(\n    candles=False,\n    title="My New Chart",\n    indicators=(dict(\n        macd=macd,\n        kc=kc,\n    ))\n)\ndata.charting.to_chart(**chart_params)\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/76c06aff-a568-4b7f-80d4-c58a73c0f1d7",alt:"indicators2"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Data can be exported directly from the chart as a CSV. Use the button at the bottom-right of the mode bar.")))}u.isMDXComponent=!0}}]);