"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68179],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(67294);function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,a,d=function(e,t){if(null==e)return{};var r,a,d={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(d[r]=e[r]);return d}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(d[r]=e[r])}return d}var l=a.createContext({}),m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,d=e.mdxType,o=e.originalType,l=e.parentName,s=n(e,["components","mdxType","originalType","parentName"]),c=m(r),u=d,f=c["".concat(l,".").concat(u)]||c[u]||p[u]||o;return r?a.createElement(f,i(i({ref:t},s),{},{components:r})):a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var o=r.length,i=new Array(o);i[0]=u;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n[c]="string"==typeof e?e:d,i[1]=n;for(var m=2;m<o;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(39960),d=r(86010),o=r(67294),i=r(16550),n=r(48334);function l(e){let{title:t,url:r,description:l,command:m}=e;const{pathname:s}=(0,i.TH)(),c=s.replace(/\/v\d+/,""),p=!c.includes("/reference")&&!c.includes("/widgets-library/")&&!c.includes("/data_models");return o.createElement(a.Z,{className:(0,d.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":c.startsWith("/terminal")||c.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":c.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":c.startsWith("/sdk")||c.startsWith("/platform"),header_docs:!(c.startsWith("/terminal")||c.startsWith("/pro")||c.startsWith("/sdk")||c.startsWith("/platform")||c.startsWith("/bot"))}),to:r},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),p&&o.createElement(n.Z,{className:"ml-auto mr-4"})),l?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},33260:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(87462),d=(r(67294),r(3905)),o=r(26515);const i={},n="Data Models",l={unversionedId:"platform/data_models/index",id:"platform/data_models/index",title:"Data Models",description:"<ReferenceCard",source:"@site/content/platform/data_models/index.mdx",sourceDirName:"platform/data_models",slug:"/platform/data_models/",permalink:"/platform/data_models/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/data_models/index.mdx",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1701304467,formattedLastUpdatedAt:"Nov 30, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Write Code and Commit",permalink:"/platform/development/contributor-guidelines/write_code_commit"},next:{title:"Ameribor",permalink:"/platform/data_models/AMERIBOR"}},m={},s=[],c={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,d.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("h1",{id:"data-models"},"Data Models"),(0,d.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,d.kt)(o.Z,{title:"Ameribor",description:"Ameribor",url:"/platform/data_models/AMERIBOR",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Analyst Estimates",description:"Historical Analyst Estimates",url:"/platform/data_models/AnalystEstimates",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Available Indices",description:"Available Indices",url:"/platform/data_models/AvailableIndices",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Balance Of Payments",description:"Balance of Payments Reports",url:"/platform/data_models/BalanceOfPayments",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Balance Sheet",description:"Balance Sheet",url:"/platform/data_models/BalanceSheet",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Balance Sheet Growth",description:"Balance Sheet Statement Growth",url:"/platform/data_models/BalanceSheetGrowth",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"COT",description:"Commitment of Traders Reports",url:"/platform/data_models/COT",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"COT Search",description:"Curated Commitment of Traders Reports",url:"/platform/data_models/COTSearch",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Calendar Dividend",description:"Upcoming and Historical Dividend Calendar",url:"/platform/data_models/CalendarDividend",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Calendar Earnings",description:"Upcoming and Historical earnings calendar",url:"/platform/data_models/CalendarEarnings",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Calendar Ipo",description:"Upcoming and Historical IPO Calendar",url:"/platform/data_models/CalendarIpo",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Calendar Splits",description:"Calendar Splits",url:"/platform/data_models/CalendarSplits",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Cash Flow Statement",description:"Cash Flow Statement",url:"/platform/data_models/CashFlowStatement",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Cash Flow Statement Growth",description:"Cash Flow Statement Growth",url:"/platform/data_models/CashFlowStatementGrowth",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Cik Map",description:"Get the CIK number corresponding to a ticker symbol",url:"/platform/data_models/CikMap",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Commercial Paper",description:"Commercial Paper",url:"/platform/data_models/CommercialPaper",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Company Filings",description:"Company Filings",url:"/platform/data_models/CompanyFilings",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Company News",description:"Company News",url:"/platform/data_models/CompanyNews",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Company Overview",description:"Company Overview",url:"/platform/data_models/CompanyOverview",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Consumer Price Index",description:"Consumer Price Index (CPI) Data",url:"/platform/data_models/ConsumerPriceIndex",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Crypto Historical",description:"Cryptocurrency Historical Price",url:"/platform/data_models/CryptoHistorical",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Crypto Search",description:"Cryptocurrency Search",url:"/platform/data_models/CryptoSearch",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Currency Historical",description:"Currency Historical Price",url:"/platform/data_models/CurrencyHistorical",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Currency Pairs",description:"Currency Search",url:"/platform/data_models/CurrencyPairs",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Currency Reference Rates",description:"Current, official, currency reference rates",url:"/platform/data_models/CurrencyReferenceRates",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Discount Window Primary Credit Rate",description:"Discount Window Primary Credit Rate",url:"/platform/data_models/DiscountWindowPrimaryCreditRate",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Discovery Filings",description:"Get the most-recent filings submitted to the SEC",url:"/platform/data_models/DiscoveryFilings",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"ESTR",description:"Euro Short-Term Rate",url:"/platform/data_models/ESTR",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"ETF Active",description:"Get the most active ETFs",url:"/platform/data_models/ETFActive",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"ETF Gainers",description:"Get the top ETF gainers",url:"/platform/data_models/ETFGainers",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"ETF Losers",description:"Get the top ETF losers",url:"/platform/data_models/ETFLosers",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"EU Yield Curve",description:"Euro Area Yield Curve",url:"/platform/data_models/EUYieldCurve",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Earnings Call Transcript",description:"Earnings Call Transcript",url:"/platform/data_models/EarningsCallTranscript",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Economic Calendar",description:"Economic Calendar",url:"/platform/data_models/EconomicCalendar",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Equity Active",description:"Get the most active Equities",url:"/platform/data_models/EquityActive",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Equity Aggressive Small Caps",description:"Get aggressive small cap Equities",url:"/platform/data_models/EquityAggressiveSmallCaps",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Equity FTD",description:"Get reported Fail-to-deliver (FTD) data",url:"/platform/data_models/EquityFTD",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Equity Gainers",description:"Get the top Equity gainers",url:"/platform/data_models/EquityGainers",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Equity Historical",description:"Equity Historical price",url:"/platform/data_models/EquityHistorical",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Equity Info",description:"Equity Info",url:"/platform/data_models/EquityInfo",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Equity Losers",description:"Get the top Equity losers",url:"/platform/data_models/EquityLosers",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Equity NBBO",description:"Equity NBBO",url:"/platform/data_models/EquityNBBO",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Equity Ownership",description:"Equity Ownership",url:"/platform/data_models/EquityOwnership",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Equity Peers",description:"Equity Peers",url:"/platform/data_models/EquityPeers",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Equity Quote",description:"Equity Quote",url:"/platform/data_models/EquityQuote",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Equity Screener",description:"Equity Screen",url:"/platform/data_models/EquityScreener",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Equity Search",description:"Equity Search",url:"/platform/data_models/EquitySearch",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Equity Short Interest",description:"Get reported Short Volume and Days to Cover data",url:"/platform/data_models/EquityShortInterest",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Equity Undervalued Growth",description:"Get undervalued growth Equities",url:"/platform/data_models/EquityUndervaluedGrowth",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Equity Undervalued Large Caps",description:"Get undervalued large cap Equities",url:"/platform/data_models/EquityUndervaluedLargeCaps",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Equity Valuation Multiples",description:"Equity Valuation Multiples",url:"/platform/data_models/EquityValuationMultiples",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Etf Countries",description:"ETF Country weighting",url:"/platform/data_models/EtfCountries",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Etf Historical",description:"ETF Historical Market Price",url:"/platform/data_models/EtfHistorical",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Etf Holdings",description:"Get the holdings for an individual ETF",url:"/platform/data_models/EtfHoldings",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Etf Holdings Date",description:"Get the holdings filing date for an individual ETF",url:"/platform/data_models/EtfHoldingsDate",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Etf Holdings Performance",description:"Get the ETF holdings performance",url:"/platform/data_models/EtfHoldingsPerformance",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Etf Info",description:"ETF Information Overview",url:"/platform/data_models/EtfInfo",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Etf Search",description:"Search for ETFs",url:"/platform/data_models/EtfSearch",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Etf Sectors",description:"ETF Sector weighting",url:"/platform/data_models/EtfSectors",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"European Central Bank Interest Rates",description:"European Central Bank Interest Rates",url:"/platform/data_models/EuropeanCentralBankInterestRates",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"European Index Constituents",description:"European Index Constituents",url:"/platform/data_models/EuropeanIndexConstituents",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"European Indices",description:"Historical European Indices",url:"/platform/data_models/EuropeanIndices",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Executive Compensation",description:"Get Executive Compensation",url:"/platform/data_models/ExecutiveCompensation",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Fedfunds",description:"Fed Funds Rate",url:"/platform/data_models/FEDFUNDS",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Financial Ratios",description:"Extensive set of ratios over time",url:"/platform/data_models/FinancialRatios",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Fred Search",description:"Search for FRED series or economic releases by ID or fuzzy query",url:"/platform/data_models/FredSearch",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Fred Series",description:"Get data by series ID from FRED",url:"/platform/data_models/FredSeries",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Futures Curve",description:"Futures Historical Price",url:"/platform/data_models/FuturesCurve",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Futures Historical",description:"Futures Historical Price",url:"/platform/data_models/FuturesHistorical",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Gdp Forecast",description:"Forecasted GDP Data",url:"/platform/data_models/GdpForecast",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Gdp Nominal",description:"Nominal GDP Data",url:"/platform/data_models/GdpNominal",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Gdp Real",description:"Real GDP Data",url:"/platform/data_models/GdpReal",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Growth Tech Equities",description:"Get growth tech Equities",url:"/platform/data_models/GrowthTechEquities",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"High Quality Market Corporate Bond",description:"High Quality Market Corporate Bond",url:"/platform/data_models/HighQualityMarketCorporateBond",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Historical Attributes",description:"Fetch the historical values of a data tag from Intrinio",url:"/platform/data_models/HistoricalAttributes",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Historical Dividends",description:"Historical Dividends",url:"/platform/data_models/HistoricalDividends",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Historical Employees",description:"Historical Employees",url:"/platform/data_models/HistoricalEmployees",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Historical Eps",description:"Historical earnings-per-share for a given company",url:"/platform/data_models/HistoricalEps",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Historical Splits",description:"Historical Splits",url:"/platform/data_models/HistoricalSplits",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"ICE Bof A",description:"ICE BofA US Corporate Bond Indices",url:"/platform/data_models/ICEBofA",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"IORB",description:"Interest on Reserve Balances",url:"/platform/data_models/IORB",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Income Statement",description:"Income Statement",url:"/platform/data_models/IncomeStatement",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Income Statement Growth",description:"Income Statement Growth",url:"/platform/data_models/IncomeStatementGrowth",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Index Constituents",description:"Index Constituents",url:"/platform/data_models/IndexConstituents",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Index Search",description:"Index Search",url:"/platform/data_models/IndexSearch",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Index Snapshots",description:"Index Snapshots",url:"/platform/data_models/IndexSnapshots",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Insider Trading",description:"Insider Trading",url:"/platform/data_models/InsiderTrading",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Institutional Ownership",description:"Institutional Ownership",url:"/platform/data_models/InstitutionalOwnership",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Institutions Search",description:"Look up institutions regulated by the SEC",url:"/platform/data_models/InstitutionsSearch",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Key Executives",description:"Key Executives",url:"/platform/data_models/KeyExecutives",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Key Metrics",description:"Key Metrics",url:"/platform/data_models/KeyMetrics",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Latest Attributes",description:"Fetch the latest value of a data tag from Intrinio",url:"/platform/data_models/LatestAttributes",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Market Indices",description:"Historical Market Indices",url:"/platform/data_models/MarketIndices",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Market Snapshots",description:"Get a current, complete, market snapshot",url:"/platform/data_models/MarketSnapshots",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Moody Corporate Bond Index",description:"Moody Corporate Bond Index",url:"/platform/data_models/MoodyCorporateBondIndex",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"OTC Aggregate",description:"Weekly aggregate trade data for Over The Counter deals",url:"/platform/data_models/OTCAggregate",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Options Chains",description:"Get the complete options chain for a ticker",url:"/platform/data_models/OptionsChains",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Options Unusual",description:"Get the complete options chain for a ticker",url:"/platform/data_models/OptionsUnusual",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Price Performance",description:"Price performance as a return, over different periods",url:"/platform/data_models/PricePerformance",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Price Performance",description:"Price performance as a return, over different periods",url:"/platform/data_models/PricePerformance",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Price Target",description:"Price Target",url:"/platform/data_models/PriceTarget",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Price Target Consensus",description:"Price Target Consensus",url:"/platform/data_models/PriceTargetConsensus",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Projections",description:"Fed Funds Rate Projections",url:"/platform/data_models/PROJECTIONS",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Revenue Business Line",description:"Revenue Business Line",url:"/platform/data_models/RevenueBusinessLine",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Revenue Geographic",description:"Revenue Geographic",url:"/platform/data_models/RevenueGeographic",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Risk Premium",description:"Historical Market Risk Premium",url:"/platform/data_models/RiskPremium",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Rss Litigation",description:"The RSS feed provides links to litigation releases concerning civil lawsuits brought by the Commission in federal",url:"/platform/data_models/RssLitigation",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"SOFR",description:"Secured Overnight Financing Rate",url:"/platform/data_models/SOFR",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"SP500 Multiples",description:"S&P 500 Multiples",url:"/platform/data_models/SP500Multiples",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Schema Files",description:"Get lists of SEC XML schema files by year",url:"/platform/data_models/SchemaFiles",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Search Attributes",description:"Search Intrinio data tags",url:"/platform/data_models/SearchAttributes",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Selected Treasury Bill",description:"Select Treasury Bill",url:"/platform/data_models/SelectedTreasuryBill",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Selected Treasury Constant Maturity",description:"Select Treasury Constant Maturity",url:"/platform/data_models/SelectedTreasuryConstantMaturity",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Share Statistics",description:"Share Statistics",url:"/platform/data_models/ShareStatistics",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Short Volume",description:"Get reported Fail-to-deliver (FTD) data",url:"/platform/data_models/ShortVolume",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Sic Search",description:"Fuzzy search for Industry Titles, Reporting Office, and SIC Codes",url:"/platform/data_models/SicSearch",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Sonia",description:"Sterling Overnight Index Average",url:"/platform/data_models/SONIA",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Spot Rate",description:"Spot Rates",url:"/platform/data_models/SpotRate",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Symbol Map",description:"Get the ticker symbol corresponding to a company's CIK",url:"/platform/data_models/SymbolMap",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Top Retail",description:"Tracks over $30B USD/day of individual investors trades",url:"/platform/data_models/TopRetail",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Trailing Dividend Yield",description:"Trailing 1yr dividend yield",url:"/platform/data_models/TrailingDividendYield",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Treasury Auctions",description:"Government Treasury Auctions",url:"/platform/data_models/TreasuryAuctions",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Treasury Constant Maturity",description:"Treasury Constant Maturity",url:"/platform/data_models/TreasuryConstantMaturity",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Treasury Rates",description:"Government Treasury Rates",url:"/platform/data_models/TreasuryRates",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"US Yield Curve",description:"US Yield Curve",url:"/platform/data_models/USYieldCurve",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"Upcoming Release Days",description:"Get upcoming release days",url:"/platform/data_models/UpcomingReleaseDays",command:!0,mdxType:"ReferenceCard"}),(0,d.kt)(o.Z,{title:"World News",description:"World News",url:"/platform/data_models/WorldNews",command:!0,mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);