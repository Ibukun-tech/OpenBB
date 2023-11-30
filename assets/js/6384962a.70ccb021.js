"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15261],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>s});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},k="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},N=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,o=m(t,["components","mdxType","originalType","parentName"]),k=d(a),N=n,s=k["".concat(p,".").concat(N)]||k[N]||g[N]||l;return a?r.createElement(s,i(i({ref:e},o),{},{components:a})):r.createElement(s,i({ref:e},o))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=N;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m[k]="string"==typeof t?t:n,i[1]=m;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}N.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>l});var r=a(67294),n=a(35742);function l(t){let{title:e}=t;return r.createElement(n.Z,null,r.createElement("title",null,e))}},48953:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>m,default:()=>N,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var r=a(87462),n=(a(67294),a(3905)),l=a(88828);const i={title:"Finding Symbols",sidebar_position:3,description:"This page provides comprehensive information about finding stocks in the with the OpenBB Platform.  Search companies from different sources, and filter results. This guide is intended to introduce some methods for searching, screening, and discovery.",keywords:["stocks","companies","how to find","stocks from India","countries","regions","screen","search","ticker","sector","industry","market caps"]},m=void 0,p={unversionedId:"platform/usage/find_symbols",id:"platform/usage/find_symbols",title:"Finding Symbols",description:"This page provides comprehensive information about finding stocks in the with the OpenBB Platform.  Search companies from different sources, and filter results. This guide is intended to introduce some methods for searching, screening, and discovery.",source:"@site/content/platform/usage/find_symbols.md",sourceDirName:"platform/usage",slug:"/platform/usage/find_symbols",permalink:"/platform/usage/find_symbols",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/usage/find_symbols.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1701304467,formattedLastUpdatedAt:"Nov 30, 2023",sidebarPosition:3,frontMatter:{title:"Finding Symbols",sidebar_position:3,description:"This page provides comprehensive information about finding stocks in the with the OpenBB Platform.  Search companies from different sources, and filter results. This guide is intended to introduce some methods for searching, screening, and discovery.",keywords:["stocks","companies","how to find","stocks from India","countries","regions","screen","search","ticker","sector","industry","market caps"]},sidebar:"tutorialSidebar",previous:{title:"Basic Syntax",permalink:"/platform/usage/basic_syntax"},next:{title:"Market Calendars",permalink:"/platform/usage/market_calendars"}},d={},o=[{value:"Search the SEC",id:"search-the-sec",level:2},{value:"Find a Company",id:"find-a-company",level:3},{value:"Find an Institution",id:"find-an-institution",level:3},{value:"Find a Filing",id:"find-a-filing",level:3},{value:"Screen Markets",id:"screen-markets",level:2},{value:"Find Stocks From India",id:"find-stocks-from-india",level:3},{value:"Search by Sector",id:"search-by-sector",level:3},{value:"Search by Industry",id:"search-by-industry",level:3},{value:"Search by Exchange",id:"search-by-exchange",level:3},{value:"Filter by Metric",id:"filter-by-metric",level:3},{value:"Find an Index",id:"find-an-index",level:2}],k={toc:o},g="wrapper";function N(t){let{components:e,...a}=t;return(0,n.kt)(g,(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"Finding Symbols - Usage | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Finding the ticker symbol, security identifier, the sector, and other metadata is easy if you know where to look.  This guide is intended to introduce some methods for searching, screening, and discovery."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"For maximum coverage and functionality, install OpenBB with ",(0,n.kt)("inlineCode",{parentName:"p"},"[all]")," packages."),(0,n.kt)("p",{parentName:"admonition"},"The examples on this page will assume that the OpenBB Platform has been installed, the environment is active, and it has been imported into a Python session."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb import obb\n")),(0,n.kt)("p",{parentName:"admonition"},"If the installation is fresh, or an extension was just installed, the Python interface will need to be rebuilt.  It will only take a few moments to complete.")),(0,n.kt)("p",null,"The simplest way to find a ticker for a company is with a simple fuzzy query."),(0,n.kt)("h2",{id:"search-the-sec"},"Search the SEC"),(0,n.kt)("p",null,"Perform a quick search using the ",(0,n.kt)("inlineCode",{parentName:"p"},"openbb-sec")," provider."),(0,n.kt)("h3",{id:"find-a-company"},"Find a Company"),(0,n.kt)("p",null,"Use an empty string, ",(0,n.kt)("inlineCode",{parentName:"p"},'""'),", to return the complete list - over 10,000."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'all_companies = obb.equity.search("", provider="sec")\n\nlen(all_companies.results)\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"Out: 10840\n")),(0,n.kt)("p",null,"The SEC sorts this list by market cap.  Applying the ",(0,n.kt)("inlineCode",{parentName:"p"},"to_df()")," method to ",(0,n.kt)("inlineCode",{parentName:"p"},"all_companies")," will show Apple on top"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"all_companies.to_df().head(10)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("th",{parentName:"tr",align:"left"},"name"),(0,n.kt)("th",{parentName:"tr",align:"right"},"cik"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AAPL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Apple Inc."),(0,n.kt)("td",{parentName:"tr",align:"right"},"320193")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MSFT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"MICROSOFT CORP"),(0,n.kt)("td",{parentName:"tr",align:"right"},"789019")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"GOOGL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Alphabet Inc."),(0,n.kt)("td",{parentName:"tr",align:"right"},"1652044")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AMZN"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AMAZON COM INC"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1018724")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"NVDA"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NVIDIA CORP"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1045810")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"META"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Meta Platforms, Inc."),(0,n.kt)("td",{parentName:"tr",align:"right"},"1326801")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BRK-B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"BERKSHIRE HATHAWAY INC"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1067983")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TSLA"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Tesla, Inc."),(0,n.kt)("td",{parentName:"tr",align:"right"},"1318605")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LLY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ELI LILLY & Co"),(0,n.kt)("td",{parentName:"tr",align:"right"},"59478")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"V"),(0,n.kt)("td",{parentName:"tr",align:"left"},"VISA INC."),(0,n.kt)("td",{parentName:"tr",align:"right"},"1403161")))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"This endpoint can be used to map a ticker symbol to a CIK number.")),(0,n.kt)("h3",{id:"find-an-institution"},"Find an Institution"),(0,n.kt)("p",null,"Some reporting companies, like invesment trusts and insurance companies, do not have a ticker symbol directly associated with them.  Filers in the US will have a CIK number, used to retrieve documents from the SEC."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'obb.regulators.sec.institutions_search("Berkshire Hathaway").to_df()\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"name"),(0,n.kt)("th",{parentName:"tr",align:"right"},"cik"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BERKSHIRE HATHAWAY ENERGY CO"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0001081316")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BERKSHIRE HATHAWAY FINANCE CORP"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0001274791")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BERKSHIRE HATHAWAY HOME STATE INSURANCE CO."),(0,n.kt)("td",{parentName:"tr",align:"right"},"0000829771")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BERKSHIRE HATHAWAY INC /DE/"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0000109694")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BERKSHIRE HATHAWAY INC/DE"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0000109694")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BERKSHIRE HATHAWAY INC"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0001067983")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BERKSHIRE HATHAWAY LIFE INSURANCE CO OF NEBRASKA"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0001015867")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LMZ & BERKSHIRE HATHAWAY CO"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0001652795")))),(0,n.kt)("h3",{id:"find-a-filing"},"Find a Filing"),(0,n.kt)("p",null,"Search for filings by CIK or ticker symbol."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'homestate_filings = obb.equity.fundamental.filings(cik="0000829771", provider="sec")\n\nhomestate_filings.to_df().iloc[-1]\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"2023-11-14"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"type"),(0,n.kt)("td",{parentName:"tr",align:"left"},"13F-NT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"link"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.sec.gov/Archives/edgar/data/0000829771/000095012323010929/xslForm13F_X02/primary_doc.xml"},"https://www.sec.gov/Archives/edgar/data/0000829771/000095012323010929/xslForm13F_X02/primary_doc.xml"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"report_date"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-09-30")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"accepted_date"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-11-14 16:15:06+00:00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"act"),(0,n.kt)("td",{parentName:"tr",align:"left"},"34")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"primary_doc_description"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"primary_doc"),(0,n.kt)("td",{parentName:"tr",align:"left"},"xslForm13F_X02/primary_doc.xml")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"accession_number"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0000950123-23-010929")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"file_number"),(0,n.kt)("td",{parentName:"tr",align:"left"},"028-02226")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"film_number"),(0,n.kt)("td",{parentName:"tr",align:"left"},"231406391")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"is_inline_xbrl"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"is_xbrl"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"size"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2960")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"complete_submission_url"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.sec.gov/Archives/edgar/data/0000829771/0000950123-23-010929.txt"},"https://www.sec.gov/Archives/edgar/data/0000829771/0000950123-23-010929.txt"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"filing_detail_url"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.sec.gov/Archives/edgar/data/0000829771/0000950123-23-010929-index.htm"},"https://www.sec.gov/Archives/edgar/data/0000829771/0000950123-23-010929-index.htm"))))),(0,n.kt)("p",null,"Or, search by form type."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'obb.equity.fundamental.filings("AAPL", type="4", provider="sec").to_df().iloc[-1]\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"2023-11-14"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"type"),(0,n.kt)("td",{parentName:"tr",align:"left"},"4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"link"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.sec.gov/Archives/edgar/data/0000320193/000032019323000109/xslF345X05/wk-form4_1700004649.xml"},"https://www.sec.gov/Archives/edgar/data/0000320193/000032019323000109/xslF345X05/wk-form4_1700004649.xml"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"report_date"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-11-10")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"accepted_date"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-11-14 18:31:09+00:00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"primary_doc_description"),(0,n.kt)("td",{parentName:"tr",align:"left"},"FORM 4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"primary_doc"),(0,n.kt)("td",{parentName:"tr",align:"left"},"xslF345X05/wk-form4_1700004649.xml")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"accession_number"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0000320193-23-000109")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"is_inline_xbrl"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"is_xbrl"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"size"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5066")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"complete_submission_url"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.sec.gov/Archives/edgar/data/0000320193/0000320193-23-000109.txt"},"https://www.sec.gov/Archives/edgar/data/0000320193/0000320193-23-000109.txt"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"filing_detail_url"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.sec.gov/Archives/edgar/data/0000320193/0000320193-23-000109-index.htm"},"https://www.sec.gov/Archives/edgar/data/0000320193/0000320193-23-000109-index.htm"))))),(0,n.kt)("h2",{id:"screen-markets"},"Screen Markets"),(0,n.kt)("p",null,"Screeners provide a targeted search, a tool for comparison and discovery.  Find stocks from around the world with the screener endpoint, and the ",(0,n.kt)("inlineCode",{parentName:"p"},"openbb-fmp")," provider."),(0,n.kt)("h3",{id:"find-stocks-from-india"},"Find Stocks From India"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'results = obb.equity.screener(country="IN", provider="fmp").to_df()\nlen(results)\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"Out: 1821\n")),(0,n.kt)("h3",{id:"search-by-sector"},"Search by Sector"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'results = obb.equity.screener(country="IN", sector="Financial Services", provider="fmp").to_df()\nlen(results)\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"Out: 190\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"results.iloc[0]\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("th",{parentName:"tr",align:"left"},"HDFCBANK.NS"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HDFC Bank Limited")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"market_cap"),(0,n.kt)("td",{parentName:"tr",align:"left"},"11344796293939")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sector"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Financial Services")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"industry"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Banks\u2014Regional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"beta"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.714285")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"price"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1505.1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"last_annual_dividend"),(0,n.kt)("td",{parentName:"tr",align:"left"},"19.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"volume"),(0,n.kt)("td",{parentName:"tr",align:"left"},"11850413")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"exchange"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"exchange_name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"National Stock Exchange of India")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"country"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IN")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"is_etf"),(0,n.kt)("td",{parentName:"tr",align:"left"},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"actively_trading"),(0,n.kt)("td",{parentName:"tr",align:"left"},"True")))),(0,n.kt)("h3",{id:"search-by-industry"},"Search by Industry"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'results = obb.equity.screener(country="IN", industry="manufacturing").to_df()\nlen(results)\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"Out: 119\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"results.iloc[0]\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("th",{parentName:"tr",align:"left"},"PAGEIND.NS"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Page Industries Limited")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"market_cap"),(0,n.kt)("td",{parentName:"tr",align:"left"},"418222172840")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sector"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Consumer Cyclical")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"industry"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Apparel Manufacturing")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"beta"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.462")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"price"),(0,n.kt)("td",{parentName:"tr",align:"left"},"37495.6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"last_annual_dividend"),(0,n.kt)("td",{parentName:"tr",align:"left"},"300.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"volume"),(0,n.kt)("td",{parentName:"tr",align:"left"},"12166")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"exchange"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"exchange_name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"National Stock Exchange of India")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"country"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IN")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"is_etf"),(0,n.kt)("td",{parentName:"tr",align:"left"},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"actively_trading"),(0,n.kt)("td",{parentName:"tr",align:"left"},"True")))),(0,n.kt)("h3",{id:"search-by-exchange"},"Search by Exchange"),(0,n.kt)("p",null,"Some countries, like America, have multiple exchanges.  Narrow the search by combining two or more parameters.  The example below finds the companies listed on the American Stock Exchange (AMEX) that are domiciled in China."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'obb.equity.screener(exchange="amex", country="CN").to_df()\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("th",{parentName:"tr",align:"left"},"name"),(0,n.kt)("th",{parentName:"tr",align:"right"},"market_cap"),(0,n.kt)("th",{parentName:"tr",align:"left"},"sector"),(0,n.kt)("th",{parentName:"tr",align:"left"},"industry"),(0,n.kt)("th",{parentName:"tr",align:"right"},"beta"),(0,n.kt)("th",{parentName:"tr",align:"right"},"price"),(0,n.kt)("th",{parentName:"tr",align:"right"},"volume"),(0,n.kt)("th",{parentName:"tr",align:"left"},"exchange"),(0,n.kt)("th",{parentName:"tr",align:"left"},"exchange_name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"country"),(0,n.kt)("th",{parentName:"tr",align:"left"},"is_etf"),(0,n.kt)("th",{parentName:"tr",align:"left"},"actively_trading"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AMBO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Ambow Education Holding Ltd."),(0,n.kt)("td",{parentName:"tr",align:"right"},"4041842"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Consumer Defensive"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Education & Training Services"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.448"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.1425"),(0,n.kt)("td",{parentName:"tr",align:"right"},"203994"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AMEX"),(0,n.kt)("td",{parentName:"tr",align:"left"},"American Stock Exchange"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CN"),(0,n.kt)("td",{parentName:"tr",align:"left"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ITP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IT Tech Packaging, Inc."),(0,n.kt)("td",{parentName:"tr",align:"right"},"2945282"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Basic Materials"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Paper & Paper Products"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.2926"),(0,n.kt)("td",{parentName:"tr",align:"right"},"14954"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AMEX"),(0,n.kt)("td",{parentName:"tr",align:"left"},"American Stock Exchange"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CN"),(0,n.kt)("td",{parentName:"tr",align:"left"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DXF"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Dunxin Financial Holdings Limited"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1291625"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Financial Services"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Credit Services"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.632"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.325"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2829238"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AMEX"),(0,n.kt)("td",{parentName:"tr",align:"left"},"American Stock Exchange"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CN"),(0,n.kt)("td",{parentName:"tr",align:"left"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CPHI"),(0,n.kt)("td",{parentName:"tr",align:"left"},"China Pharma Holdings, Inc."),(0,n.kt)("td",{parentName:"tr",align:"right"},"1024379"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Healthcare"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Drug Manufacturers\u2014Specialty & Generic"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.875"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0896"),(0,n.kt)("td",{parentName:"tr",align:"right"},"539863"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AMEX"),(0,n.kt)("td",{parentName:"tr",align:"left"},"American Stock Exchange"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CN"),(0,n.kt)("td",{parentName:"tr",align:"left"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"True")))),(0,n.kt)("h3",{id:"filter-by-metric"},"Filter by Metric"),(0,n.kt)("p",null,"Applying some filters refines and targets the search.  The example below finds listing on the NYSE domiciled in the USA, with a market cap between $100-300 billion, and exhibiting a beta value of less than 0.5"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'obb.equity.screener(\n  exchange="nyse",\n  mktcap_min=100000000000,\n  mktcap_max=300000000000,\n  country="us",\n  beta_max=0.5,\n  provider="fmp",\n).to_df()\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("th",{parentName:"tr",align:"left"},"name"),(0,n.kt)("th",{parentName:"tr",align:"right"},"market_cap"),(0,n.kt)("th",{parentName:"tr",align:"left"},"sector"),(0,n.kt)("th",{parentName:"tr",align:"left"},"industry"),(0,n.kt)("th",{parentName:"tr",align:"right"},"beta"),(0,n.kt)("th",{parentName:"tr",align:"right"},"price"),(0,n.kt)("th",{parentName:"tr",align:"right"},"last_annual_dividend"),(0,n.kt)("th",{parentName:"tr",align:"right"},"volume"),(0,n.kt)("th",{parentName:"tr",align:"left"},"exchange"),(0,n.kt)("th",{parentName:"tr",align:"left"},"exchange_name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"country"),(0,n.kt)("th",{parentName:"tr",align:"left"},"is_etf"),(0,n.kt)("th",{parentName:"tr",align:"left"},"actively_trading"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MRK"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Merck & Co., Inc."),(0,n.kt)("td",{parentName:"tr",align:"right"},"258192673024"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Healthcare"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Drug Manufacturers\u2014General"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.375"),(0,n.kt)("td",{parentName:"tr",align:"right"},"101.75"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.92"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6760568"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NYSE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"New York Stock Exchange"),(0,n.kt)("td",{parentName:"tr",align:"left"},"US"),(0,n.kt)("td",{parentName:"tr",align:"left"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"VZ"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Verizon Communications Inc."),(0,n.kt)("td",{parentName:"tr",align:"right"},"152314546478"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Communication Services"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Telecom Services"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.391"),(0,n.kt)("td",{parentName:"tr",align:"right"},"36.23"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.66"),(0,n.kt)("td",{parentName:"tr",align:"right"},"14960968"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NYSE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"New York Stock Exchange"),(0,n.kt)("td",{parentName:"tr",align:"left"},"US"),(0,n.kt)("td",{parentName:"tr",align:"left"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"True")))),(0,n.kt)("h2",{id:"find-an-index"},"Find an Index"),(0,n.kt)("p",null,"List all indices from a source with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'indices = obb.index.available(provider="yfinance").to_df()\n\nlen(indices)\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"Out: 274\n")),(0,n.kt)("p",null,"Filter the list down by querying the DataFrame."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'indices[indices["name"].str.contains("ASX 200")]\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"code"),(0,n.kt)("th",{parentName:"tr",align:"left"},"symbol"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"S&P/ASX 200 Index (AUD)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"au_asx200"),(0,n.kt)("td",{parentName:"tr",align:"left"},"^AXJO")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"S&P/ASX 200 Energy Sector Index (AUD)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"au_energy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"^AXEJ")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"S&P/ASX 200 Resources Sector Index (AUD)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"au_resources"),(0,n.kt)("td",{parentName:"tr",align:"left"},"^AXJR")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"S&P/ASX 200 Materials Sector Index (AUD)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"au_materials"),(0,n.kt)("td",{parentName:"tr",align:"left"},"^AXMJ")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"S&P/ASX 200 Industrials Sector Index (AUD)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"au_industrials"),(0,n.kt)("td",{parentName:"tr",align:"left"},"^AXNJ")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"S&P/ASX 200 Consumer Discretionary Sector Index (AUD)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"au_discretionary"),(0,n.kt)("td",{parentName:"tr",align:"left"},"^AXDJ")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"S&P/ASX 200 Consumer Staples Sector Index (AUD)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"au_staples"),(0,n.kt)("td",{parentName:"tr",align:"left"},"^AXSJ")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"S&P/ASX 200 Health Care Sector Index (AUD)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"au_health"),(0,n.kt)("td",{parentName:"tr",align:"left"},"^AXHJ")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"S&P/ASX 200 Financials Sector Index (AUD)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"au_financials"),(0,n.kt)("td",{parentName:"tr",align:"left"},"^AXFJ")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"S&P/ASX 200 A-REIT Industry Index (AUD)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"au_reit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"^AXPJ")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"S&P/ASX 200 Info Tech Sector Index (AUD)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"au_tech"),(0,n.kt)("td",{parentName:"tr",align:"left"},"^AXIJ")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"S&P/ASX 200 Communications Sector Index (AUD)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"au_communications"),(0,n.kt)("td",{parentName:"tr",align:"left"},"^AXTJ")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"S&P/ASX 200 Utilities Sector Index (AUD)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"au_utilities"),(0,n.kt)("td",{parentName:"tr",align:"left"},"^AXUJ")))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"With the ",(0,n.kt)("inlineCode",{parentName:"p"},"openbb-yfinance")," extension, index time series can be  loaded using the ticker symbol or short code.  Non-American indices have a code beginning with the two-letter country code."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-python"},'(\n    obb.index.market("au_utilities", provider="yfinance").to_df().tail(1)\n    == obb.index.market("^AXUJ", provider="yfinance").to_df().tail(1)\n)\n')),(0,n.kt)("table",{parentName:"admonition"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"date"),(0,n.kt)("th",{parentName:"tr",align:"right"},"open"),(0,n.kt)("th",{parentName:"tr",align:"right"},"high"),(0,n.kt)("th",{parentName:"tr",align:"right"},"low"),(0,n.kt)("th",{parentName:"tr",align:"right"},"close"),(0,n.kt)("th",{parentName:"tr",align:"right"},"volume"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-11-17"),(0,n.kt)("td",{parentName:"tr",align:"right"},"True"),(0,n.kt)("td",{parentName:"tr",align:"right"},"True"),(0,n.kt)("td",{parentName:"tr",align:"right"},"True"),(0,n.kt)("td",{parentName:"tr",align:"right"},"True"),(0,n.kt)("td",{parentName:"tr",align:"right"},"True"))))),(0,n.kt)("p",null,"The examples above show demonstrate the most basic ways to find ticker symbols with the OpenBB Platform.  Create your own custom scripts for discovery by combining these with other methods."))}N.isMDXComponent=!0}}]);