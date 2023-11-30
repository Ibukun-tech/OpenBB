"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84047],{3905:(D,R,U)=>{U.d(R,{Zo:()=>a,kt:()=>E});var P=U(67294);function S(D,R,U){return R in D?Object.defineProperty(D,R,{value:U,enumerable:!0,configurable:!0,writable:!0}):D[R]=U,D}function e(D,R){var U=Object.keys(D);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(D);R&&(P=P.filter((function(R){return Object.getOwnPropertyDescriptor(D,R).enumerable}))),U.push.apply(U,P)}return U}function t(D){for(var R=1;R<arguments.length;R++){var U=null!=arguments[R]?arguments[R]:{};R%2?e(Object(U),!0).forEach((function(R){S(D,R,U[R])})):Object.getOwnPropertyDescriptors?Object.defineProperties(D,Object.getOwnPropertyDescriptors(U)):e(Object(U)).forEach((function(R){Object.defineProperty(D,R,Object.getOwnPropertyDescriptor(U,R))}))}return D}function A(D,R){if(null==D)return{};var U,P,S=function(D,R){if(null==D)return{};var U,P,S={},e=Object.keys(D);for(P=0;P<e.length;P++)U=e[P],R.indexOf(U)>=0||(S[U]=D[U]);return S}(D,R);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(D);for(P=0;P<e.length;P++)U=e[P],R.indexOf(U)>=0||Object.prototype.propertyIsEnumerable.call(D,U)&&(S[U]=D[U])}return S}var B=P.createContext({}),K=function(D){var R=P.useContext(B),U=R;return D&&(U="function"==typeof D?D(R):t(t({},R),D)),U},a=function(D){var R=K(D.components);return P.createElement(B.Provider,{value:R},D.children)},N="mdxType",G={inlineCode:"code",wrapper:function(D){var R=D.children;return P.createElement(P.Fragment,{},R)}},n=P.forwardRef((function(D,R){var U=D.components,S=D.mdxType,e=D.originalType,B=D.parentName,a=A(D,["components","mdxType","originalType","parentName"]),N=K(U),n=S,E=N["".concat(B,".").concat(n)]||N[n]||G[n]||e;return U?P.createElement(E,t(t({ref:R},a),{},{components:U})):P.createElement(E,t({ref:R},a))}));function E(D,R){var U=arguments,S=R&&R.mdxType;if("string"==typeof D||S){var e=U.length,t=new Array(e);t[0]=n;var A={};for(var B in R)hasOwnProperty.call(R,B)&&(A[B]=R[B]);A.originalType=D,A[N]="string"==typeof D?D:S,t[1]=A;for(var K=2;K<e;K++)t[K]=U[K];return P.createElement.apply(null,t)}return P.createElement.apply(null,U)}n.displayName="MDXCreateElement"},88828:(D,R,U)=>{U.d(R,{Z:()=>e});var P=U(67294),S=U(35742);function e(D){let{title:R}=D;return P.createElement(S.Z,null,P.createElement("title",null,R))}},64561:(D,R,U)=>{U.r(R),U.d(R,{assets:()=>K,contentTitle:()=>A,default:()=>n,frontMatter:()=>t,metadata:()=>B,toc:()=>a});var P=U(87462),S=(U(67294),U(3905)),e=U(88828);const t={title:"load",description:"This page documents how to load historical exchange rate data from Alpha Advantage and YahooFinance. It provides code usage standards in Python and explains the parameters for the source, the resolution, the interval, and the start date of data.",keywords:["load historical exchange rate data","Alpha Advantage","YahooFinance","resolution of data","intervals of intraday data","start date of data","currency pairs"]},A=void 0,B={unversionedId:"terminal/reference/forex/load",id:"terminal/reference/forex/load",title:"load",description:"This page documents how to load historical exchange rate data from Alpha Advantage and YahooFinance. It provides code usage standards in Python and explains the parameters for the source, the resolution, the interval, and the start date of data.",source:"@site/content/terminal/reference/forex/load.md",sourceDirName:"terminal/reference/forex",slug:"/terminal/reference/forex/load",permalink:"/terminal/reference/forex/load",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forex/load.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1701304467,formattedLastUpdatedAt:"Nov 30, 2023",frontMatter:{title:"load",description:"This page documents how to load historical exchange rate data from Alpha Advantage and YahooFinance. It provides code usage standards in Python and explains the parameters for the source, the resolution, the interval, and the start date of data.",keywords:["load historical exchange rate data","Alpha Advantage","YahooFinance","resolution of data","intervals of intraday data","start date of data","currency pairs"]},sidebar:"tutorialSidebar",previous:{title:"fwd",permalink:"/terminal/reference/forex/fwd"},next:{title:"quote",permalink:"/terminal/reference/forex/quote"}},K={},a=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],N={toc:a},G="wrapper";function n(D){let{components:R,...U}=D;return(0,S.kt)(G,(0,P.Z)({},N,U,{components:R,mdxType:"MDXLayout"}),(0,S.kt)(e.Z,{title:"forex /load - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,S.kt)("p",null,"Load historical exchange rate data.Available data sources are Alpha Advantage and YahooFinanceBy default main source used for analysis is YahooFinance (yf). To change it use --source av"),(0,S.kt)("h3",{id:"usage"},"Usage"),(0,S.kt)("pre",null,(0,S.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"load [-t TICKER] [-r {i,d,w,m}] [-i {1min,5min,15min,30min,60min,90min,1hour,1day,5day,1week,1month,3month}] [-s START_DATE] [-e END]\n")),(0,S.kt)("hr",null),(0,S.kt)("h2",{id:"parameters"},"Parameters"),(0,S.kt)("table",null,(0,S.kt)("thead",{parentName:"table"},(0,S.kt)("tr",{parentName:"thead"},(0,S.kt)("th",{parentName:"tr",align:null},"Name"),(0,S.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,S.kt)("th",{parentName:"tr",align:null},"Description"),(0,S.kt)("th",{parentName:"tr",align:null},"Default"),(0,S.kt)("th",{parentName:"tr",align:null},"Optional"),(0,S.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,S.kt)("tbody",{parentName:"table"},(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"ticker"),(0,S.kt)("td",{parentName:"tr",align:null},"-t  --ticker"),(0,S.kt)("td",{parentName:"tr",align:null},"Currency pair to load."),(0,S.kt)("td",{parentName:"tr",align:null},"None"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"USDAWG, IDRZAR, RUBCHF, GBPTND, THBIDR, GBPRSD, ZARNOK, BIFUSD, GBPDJF, SEKINR, GBPBND, COPMXN, ARSCHF, EURPAB, EURSGD, CHFILS, UAHEUR, BRLKRW, GBPMOP, JPYEGP, GBPRUB, AUDCAD, LSLGBP, USDPHP, BOBGBP, GBPHRK, RWFEUR, ARSCLP, EURCHF, MXNGBP, XAGKRW, ZARPLN, SARPKR, EURYER, BBDUSD, RSDGBP, ARSAUD, XAGZAR, ARSCOP, JPYCNY, EURBND, EURCNH, EURKES, XPDGBP, MALUSD, USDTWD, UGXZAR, ETBUSD, JPYRUB, AFNEUR, KRWXAG, CHFNSO, NZDDKK, CZKGBP, CLPBRL, CHFOSO, GBPKES, BRLRSD, JPYAED, NBLUSD, CADMYR, ZARARS, RUBDKK, AEDCAD, AUDCHF, AUDGBP, GBPXCD, GBPMAD, EURHUF, HKDSEK, AEDSGD, JPYARS, LAKEUR, TZSEUR, GBPCLP, FJDAUD, EURDJF, PLNHRK, USDNAD, BAMUSD, EURXAG, CHFKRU, GBPCOP, GBPBZD, SGDNOK, CADJPY, CHFFRN, MADUSD, BRLXAU, GBPSLL, MKDEUR, CADHKD, VNDEUR, NGNUSD, GBPSVC, LYDUSD, PABEUR, PKRMYR, USDMYR, CADILS, EURNZD, USDMAL, USDSZL, THBCHF, BNDGBP, USDMKD, GBPIQD, INRTHB, THBSGD, CZKEUR, AUDTWD, USDHTG, GBPUAH, SEKKRW, MXNBRL, NZDCNY, GBPMVR, GBPGNF, EURUAH, CADEUR, IDRTWD, NZDJPY, USDCUP, CZKZAR, GTQUSD, UAHUSD, AUDEUR, TTDGBP, NZDMYR, NZDEUR, CLPEUR, MYRGBP, PKRJPY, EURUZS, AUDRUB, NOKPLN, AUDCNY, NOKGBP, EURSEK, CHFAED, AUDAED, GBPUYU, ILSAUD, AEDKWD, AUDUSD, MYRUSD, NZDZAR, KRWTWD, DKKUSD, MUREUR, BRLCOP, BNDUSD, PKREGP, EURLYD, PLNILS, DOPEUR, IDRJPY, GBPISK, ARSEUR, RUBMXN, GBPCHF, USDMOP, GBPMDL, INRJPY, CHFINR, USDBSD, USDMUR, XAGGBP, EURLAK, CNYSGD, MYRDKK, AEDSAR, UGXUSD, GHSZAR, GBPMWK, EURPEN, COPEUR, VNDJPY, USDBWP, XAUMXN, THBINR, IQDGBP, MXNJPY, ARSZAR, EURCOP, GBPHTG, NZDINR, USDPYG, LBPEUR, PKRAUD, UZSUSD, JPYSGD, AEDSEK, XAUZAR, SGDZAR, PKRDKK, XAGSAR, PABGBP, USDRWF, INRHKD, HKDXAU, KRWAUD, USDYER, PHPDKK, DKKAED, DKKCNY, EURUYU, XAGUSD, GBPLKR, HKDTWD, USDXPF, BGNCNY, JPYMXN, GBPTRY, EURAMD, XAURUB, AUDHKD, TWDNZD, SEKNOK, JPYPHP, MXNCAD, ZARIDR, CNYINR, ARSGBP, ARSUSD, EURMXN, SEKGBP, ISKDKK, NZDTRY, USDFJD, BHDEUR, GBPEUR, CADZAR, USDHUF, EURTTD, GBPPEN, QARGBP, GBPNOK, DKKSGD, NZDTHB, GBPILS, GBPQAR, GHSGBP, PLNSGD, HKDPLN, GBPALL, XAUAUD, AEDUSD, PLNDKK, SGDAED, SGDSEK, USDDOE, GBPSAR, TRYDKK, ZARMWK, GBPJMD, TNDUSD, PHPZAR, GBPCZK, DZDGBP, AUNCHF, XAGEUR, YERGBP, NZDSEK, NOKZAR, SARXAG, SZLEUR, CHFNBL, USDEUR, LYDGBP, INRZAR, SGDARS, INRCHF, EURMOP, GBPINR, SGDINR, JPYZAR, ARSCAD, ZARRUB, NZDTWD, ARSXAG, ZMWEUR, TRYJPY, BGNAUD, XAUSAR, ZARNGN, NOKUSD, TWDJPY, USDCZK, USDIQD, PHPJPY, DKKINR, NZDCHF, HKDUSD, GBPNGN, RUBNOK, BHDAED, XAUTRY, USDBRL, GBPBDT, IDREUR, GBPMGA, CZKPLN, AUDBGN, SARAED, CLPMXN, NZDAED, USDTZS, EURMYR, NZDGBP, GBPCNH, ZAREGP, CUPGBP, VNDGBP, AUDTHB, BRLJPY, HKDCNY, KHREUR, BGNDKK, GBPAWG, GBPFJD, COPBRL, EURILS, SGDMYR, PLNHUF, TNDGBP, ILSAED, USDLKR, KYDCAD, USDBZD, DKKAUD, EURLSL, XAUEUR, TWDGBP, DKKHUF, USDARS, GBPBMD, BBDBMD, GBPCUP, MXNCLP, ZARLKR, BRLZAR, GBPRON, PKRTWD, INRIDR, DOEUSD, CHFZAR, SGDTRY, EURMKD, TWDDKK, IQDEUR, SGDUSD, USDLAK, BGNUSD, INRNOK, CHFSZL, JODUSD, CNYMYR, CNHEUR, DKKCOP, CADKYD, TZSUSD, EURMUR, BRLSGD, HKDNZD, USDCVE, GBPCNY, USDHRK, KRWSGD, GBPTHB, ZARTND, JPYINR, ZARXAU, TTDEUR, USDKRW, CLPPEN, AUDXAG, LBPUSD, TRYZAR, XAGJPY, NZDNOK, EGPEUR, MXNZAR, EURSDG, ALLUSD, SEKCHF, EURTHB, NSOCHF, USDPGK, EURIQD, CUPUSD, HKDBRL, USDBBD, BBDGBP, SOSGBP, GBPMUR, EURBHD, EURMAD, QARAED, AWGUSD, SEKILS, HUFEUR, ZARCAD, IDRCNY, JPYAUD, GYDEUR, ISKUSD, EURMZN, OSOCHF, VNDCAD, AUDZAR, XPTEUR, AUDINR, NOKILS, USDSCR, AMDGBP, ZARMYR, MWKZAR, COPGBP, RONGBP, PKRTHB, AUDPGK, HRKPLN, DKKPKR, CADVND, THBTWD, ALLEUR, EURRUB, XAGCNY, PKRQAR, MWKUSD, DJFGBP, GBPHNL, ZARXAG, USDGTQ, SZLUSD, NGNJPY, SGDCHF, MYRNZD, EUROMR, XAGTRY, TWDSEK, THBXAU, GBPPLN, CHFVRL, INRSGD, GBPSGD, KYDEUR, USDBOB, SAREUR, RUBGBP, CZKMXN, USDTTD, DJFUSD, KRWCHF, USDNIO, FJDUSD, BRLCAD, OSOUSD, ZARKES, TMTUSD, CADDKK, CHFMAL, EURBZD, DOECHF, MADGBP, EURLRD, ZMWUSD, NBLCHF, BRLXAG, RUBXAG, NOKNZD, TTDUSD, GBPBAM, SVCGBP, LKREUR, SEKEUR, NZDKRW, MYRCHF, ZAROMR, GBPSCR, USDUGX, CHFARE, CHFIDR, USDAUD, USDMGA, TWDHKD, SEKUSD, CHFAUD, RUBXAU, HNLEUR, GBPSZL, ZARCNY, IDRNZD, PENEUR, KRWUSD, DKKCZK, SGDEUR, ILSGBP, PLNCHF, NIOGBP, COPZAR, MOPUSD, MXNCZK, PHPAUD, USDKMF, TRYXAG, EURXPD, BHDGBP, GBPGTQ, ZARTZS, NADZAR, DZDEUR, PKRNZD, SCREUR, USDHKD, USDJMD, EGPGBP, ZARTWD, TWDEUR, NOKCHF, USDTRY, AUDCLP, CADSEK, EURIDR, USDBND, JPYUSD, HKDINR, TWDCNY, CHFBRL, USDOSO, MYRKRW, LSLEUR, ILSEUR, XAUCNY, MURUSD, CHFNZD, CADMXN, MYRTWD, AEDAUD, DKKPLN, KRWRUB, GBPBHD, RWFGBP, RSDUSD, USDETB, ALLGBP, CHFDOE, RONEUR, MYREUR, CHFRUB, GBPPGK, KRWHKD, LKRZAR, USDTMT, SGDTHB, KWDPKR, JODAED, BNDEUR, EURAFN, ZARNZD, EURCNY, EURLBP, GBPBBD, NOKSEK, TRYAUD, GNFEUR, CHFISK, USDSHP, CNYEUR, ZARPKR, CZKNZD, KRUCHF, ARSSGD, LKRGBP, ZARBRL, MXNXAG, USDKES, KHRGBP, HTGEUR, SDGUSD, SEKAED, BMDGBP, NZDAUD, MYRZAR, GBPEGP, JPYGBP, XAGCAD, PGKEUR, BOBUSD, CHFEUR, BGNGBP, EURBDT, INREUR, ZARGBP, CZKAUD, XAUKRW, USDMDL, ILSCHF, USDMAD, GBPXAG, USDGBP, ZARMXN, BRIUSD, EURQAR, EGPJPY, JPYVND, PYGGBP, GBPBOB, GBPKZT, SZLZAR, AUDNZD, ZARCZK, USDDKK, PENCAD, DKKMXN, GBPGYD, USDCNH, CNYZAR, BMDCAD, BRLMXN, GBPLSL, HRKUSD, MOPEUR, INRUSD, BRLGBP, EURBSD, RSDEUR, BMDBBD, USDTJS, DOPGBP, XAUCAD, CADBGN, MYRAUD, HKDMYR, SEKJPY, XAGAUD, JPYCHF, SCRUSD, EURISK, HKDEUR, JPYTWD, PKRSAR, XPFUSD, ZARDKK, GBPPKR, USDKWD, MXNRUB, MVRUSD, MMKGBP, XPTGBP, EURNPR, BRLCLP, GBPIDR, KWDUSD, MXNUSD, SGDPLN, CNYHKD, DKKISK, ZARINR, KHRUSD, USDSAR, AUDNOK, LRDGBP, RUBPLN, THBCAD, CHFGBP, EURPKR, USDIDR, CZKDKK, SLLEUR, EURTZS, DOPUSD, CHFSGD, KRWGBP, GBPJPY, CADBRL, GBPNPR, ZARUGX, MYRINR, ILSNOK, EURSAR, MYRPKR, RONCHF, KRWIDR, CADPEN, THBHKD, KRWMYR, HUFCAD, EURJMD, KRUUSD, NZDHUF, SOSEUR, SGDGBP, NPREUR, CADSGD, EURMMK, PLNHKD, XAUARS, USDGNF, SGDNZD, GBPMXN, ZMWZAR, SLLGBP, EURSZL, MWKGBP, TZSZAR, UYUGBP, ARSJPY, USDDOP, INRXAG, JMDUSD, EUREGP, JPYKRW, PKREUR, RUBZAR, LTLAUD, AEDILS, GBPXPD, ARSMXN, EURDKK, AEDQAR, ARECHF, IQDUSD, UGXGBP, GBPLRD, MVREUR, KRWJPY, QARUSD, CNHGBP, KZTEUR, KWDGBP, CADTWD, TRYCHF, KRWTHB, CHFHUF, EURBWP, ZARSGD, DKKPHP, JPYPKR, PLNSEK, AUDPHP, EURETB, HKDSGD, CLPUSD, KRWBRL, JPYSAR, NOKAED, CNYJPY, PENGBP, USDKZT, TRYSGD, GTQEUR, SEKDKK, ZARNAD, HKDTHB, DKKMYR, BDTJPY, EURCAD, USDBIF, USDTND, TWDCAD, PGKGBP, CNYXAG, ZARHUF, ILSCAD, GBPMYR, GBPLYD, USDVND, SARUSD, PENBRL, KESEUR, RWFUSD, VNDUSD, RSDBRL, SLLUSD, JPYPLN, USDSLL, AUDMYR, GBPARS, MXNAUD, AUDPKR, GHSEUR, HKDJPY, EURBGN, DKKNZD, GBPJOD, USDDJF, PLNUSD, MZNEUR, KMFUSD, USDMMK, DKKCAD, EURXAU, RWFZAR, MXNDKK, NIOEUR, EURSLL, BRLCHF, USDCOP, EURDOP, BRLHKD, COPARS, SARKWD, JPYXAG, USDSGD, CHFRON, USDBRI, DKKZAR, EGPZAR, EURBIF, GBPXAU, GYDGBP, MGAEUR, PLNMXN, GBPOMR, BTNGBP, EURDZD, JODILS, CHFSEK, LBPGBP, AEDEUR, SEKBRL, CADHUF, UAHGBP, INRMYR, RUBAUD, BZDEUR, MYRSGD, BZDUSD, NZDUSD, ZARILS, USDLBP, MDLUSD, THBZAR, RUBUSD, THBKRW, JPYNZD, SVCUSD, ISKCHF, MMKEUR, USDRUB, EURFJD, SZLGBP, AUDSEK, XAUJPY, GBPCDF, CHFHKD, XAGBRL, THBEUR, LYDEUR, EURHRK, CADNZD, CHFTRY, SARJPY, ILSJPY, TWDUSD, OMRUSD, NADUSD, INRSEK, MXNNZD, XAUHKD, MALCHF, AEDPKR, BDTGBP, NZDPKR, ETBGBP, CHFJPY, MVRGBP, NOKDKK, RUBSEK, CADAUD, NPRUSD, KWDEUR, JMDGBP, ARSXAU, DKKHKD, PLNZAR, GBPETB, USDNSO, KESUSD, USDMVR, AUDMXN, AEDZAR, EGPUSD, CLPJPY, BWPGBP, EGPPKR, USDZAR, USDAUN, GBPUGX, GNFUSD, SGDDKK, GBPSOS, SCRGBP, EURGHS, TWDKRW, EURBOB, NOKEUR, INRAUD, AWGGBP, CADIDR, NZDCAD, KESGBP, KRWCAD, SEKCAD, ILSUSD, EURMWK, CHFAUN, HUFAUD, USDHNL, MXNXAU, NOKSGD, AUDFJD, CUPEUR, MURGBP, RONUSD, KMFGBP, MYRIDR, GBPLBP, PHPUSD, CNYDKK, IDRTHB, EURTJS, SGDBRL, MWKEUR, CLPARS, BHDPKR, CADGBP, CLPGBP, HUFPLN, USDSVC, HKDARS, ZARSZL, AUDILS, EURINR, BMDEUR, SGDPKR, PHPEUR, USDJOD, HKDMXN, AUDMAD, GBPBWP, COPDKK, THBGBP, GBPDOP, KWDSAR, THBNZD, USDLYD, USDSOS, USDOMR, BRICHF, GBPKYD, DJFEUR, PLNJPY, USDAED, BOBEUR, IDRMYR, HRKEUR, PLNNOK, AUDJPY, JPYCLP, NIOUSD, MXNCOP, GBPNIO, ISKGBP, IDRCAD, INRKRW, MOPGBP, XAGRUB, HTGGBP, GBPBTN, RONZAR, GBPUSD, BRLARS, XPDUSD, TJSUSD, AUDCNH, CHFVRN, GBPKMF, BWPZAR, KYDUSD, IDRGBP, JPYCAD, GNFGBP, USDKRU, EURHKD, PHPGBP, AUDTRY, GBPTWD, TWDIDR, AEDNOK, GBPBSD, CADHRK, KRWNZD, ZARQAR, EURKHR, EURTND, GBPGHS, ZARCYP, LSLUSD, IDRCHF, JPYTHB, CHFBWP, CADAED, OMRAED, XAGMXN, VRLCHF, CADBMD, IDRKRW, MXNHKD, UAHDKK, SARXAU, BWPCHF, SZLCHF, EURCZK, EURMGA, SHPUSD, EURCUP, PKRSGD, ARSPEN, EURGNF, COPPEN, USDNGN, GBPMMK, PLNTRY, SGDCAD, DKKNOK, USDUAH, EURALL, COPUSD, GBPAED, JPYNGN, THBUSD, MXNSGD, TRYXAU, JPYSEK, EURRSD, GBPXPT, USDKHR, MYRJPY, USDALL, ZARTHB, NOKAUD, USDTHB, OMREUR, GBPKRW, USDXPD, PENCLP, THBJPY, DKKJPY, GTQGBP, GBPPYG, AEDGBP, SGDIDR, BWPUSD, GBPPHP, CNYXAU, CNHAUD, TWDINR, USDISK, PENARS, BRLEUR, HKDIDR, HUFUSD, HKDDKK, CADTHB, DKKEUR, PLNNZD, JPYDKK, TNDZAR, USDNPR, NZDCZK, PLNRUB, TRYNZD, LRDEUR, BIFEUR, HKDZAR, AUDCZK, UYUUSD, USDJPY, CHFMYR, EURKWD, XAUINR, TWDCHF, JPYHUF, LRDUSD, EURXPT, KZTGBP, DKKRUB, JMDEUR, GBPAFN, KZTUSD, HRKAUD, EURGYD, GBPCAD, USDCDF, ILSSEK, GBPLAK, IDRHKD, USDZMW, XCDGBP, ZARAED, CADUSD, THBDKK, PYGEUR, USDSEK, SGDTWD, EURTWD, PLNCZK, USDXAU, GBPXPF, GHSUSD, BWPEUR, RUBKRW, CNYUSD, GBPTTD, USDBAM, ZARSEK, PKRHKD, UYUEUR, CNYGBP, GBPKWD, NGNGBP, SGDHKD, GBPHKD, PLNEUR, IDRUSD, CNYBGN, MYRHKD, JPYRSD, TWDTHB, EURHTG, JPYIDR, PKRUSD, CHFDKK, INRCNY, USDMWK, LAKGBP, SARGBP, USDNOK, EURCDF, TRYGBP, CADXAG, ZARTRY, AEDJPY, BDTEUR, KESZAR, JODEUR, LKRUSD, ARSBRL, EURBTN, ZARUSD, HKDAUD, HUFNZD, HUFZAR, SEKAUD, TWDSGD, EURGTQ, BDTUSD, PKRAED, USDPEN, EURUSD, EURAUD, BSDUSD, ILSJOD, DKKTHB, USDRSD, USDSDG, SGDCNY, JPYBDT, MADZAR, ILSZAR, ISKEUR, YEREUR, MXNPEN, AEDINR, JPYXAU, EURBRL, TNDEUR, SGDAUD, DKKSEK, HKDXAG, MXNCHF, CDFGBP, HUFDKK, ZAREUR, EURZMW, ZARCHF, PENCOP, GBPHUF, HKDGBP, EURNIO, USDUYU, USDUZS, GBPDKK, XAGARS, NOKJPY, PABUSD, CHFKRW, EURTRY, AEDCHF, GBPBGN, CNYAUD, CHFBRI, EURZAR, HUFCHF, ZARGHS, CADKRW, EURMDL, BRLUSD, INRCAD, ZARKRW, TRYEUR, DKKTRY, MYRCNY, CNYTWD, ZARRON, RUBEUR, GBPVND, CHFPLN, CZKSEK, ZARZMW, NSOUSD, NGNEUR, DZDUSD, ZARHKD, EURVND, NZDIDR, AUDHRK, CADINR, KRWCNY, PKRGBP, BIFGBP, IDRINR, SEKNZD, RUBJPY, CADARS, USDDZD, AEDBHD, GBPBIF, BRLAUD, INRGBP, JPYHKD, JPYTRY, INRDKK, AMDEUR, CLPAUD, ZARCOP, GBPAUD, EURPLN, EURKRW, TRYUSD, HRKGBP, KRWEUR, SEKCZK, TWDPKR, AFNGBP, PLNGBP, BTNEUR, USDPAB, USDBGN, CNYNZD, XAGHKD, BBDEUR, PENMXN, MDLGBP, USDEGP, BGNEUR, EURGBP, SDGEUR, CHFTWD, USDCHF, AUNUSD, GBPSEK, HTGUSD, FJDEUR, SGDKRW, EURAED, CZKUSD, QARPKR, PKRZAR, EURKYD, SEKSGD, TJSEUR, JODGBP, XAUGBP, PKRBHD, NADEUR, BHDUSD, ILSPLN, KYDBMD, AUDIDR, AUDLTL, TWDAUD, MXNARS, THBPKR, BGNCAD, NZDMXN, CVEUSD, MMKUSD, EURPGK, YERUSD, JPYEUR, NOKINR, NZDSGD, HRKCAD, ETBEUR, CNYKRW, AUDKRW, USDLSL, USDQAR, NZDPLN, LAKUSD, BSDGBP, AUDARS, DKKTWD, XPFGBP, NGNZAR, CHFMXN, DKKUAH, DKKGBP, USDGYD, USDNBL, XAUTHB, BAMGBP, HKDKRW, CYPZAR, HUFGBP, EURARS, GBPDZD, AUDXAU, CNYIDR, USDGHS, JPYMYR, DKKCHF, AUDSGD, SEKPLN, PENUSD, USDMXN, ZARRWF, UGXEUR, EURKZT, SEKTWD, INRNZD, EURJOD, TWDMYR, OMRZAR, EURNGN, EURBBD, SEKHKD, EURJPY, PGKUSD, XPTUSD, PLNAUD, XAGINR, KRWXAU, USDCLP, USDKYD, EURRWF, XAUBRL, NZDHKD, MGAUSD, CHFNOK, MADAUD, EURRON, NOKRUB, USDXAG, AEDDKK, GBPNZD, MXNEUR, TWDZAR, SOSUSD, MXNPLN, CHFTHB, EURCLP, ZARBWP, FJDGBP, ZARAUD, CHFARS, USDLRD, AEDOMR, THBAUD, SEKRUB, INRXAU, NPRGBP, ZARMAD, HNLUSD, INRTWD, USDCAD, GBPKHR, SGDJPY, DKKBGN, QAREUR, AUDBRL, GBPYER, IDRAUD, GBPMKD, SGDMXN, USDINR, BRLSEK, AEDJOD, KRWINR, USDBHD, GBPRWF, CZKJPY, GYDUSD, MDLEUR, PYGUSD, FRNCHF, JPYBRL, USDILS, MYRCAD, EURBMD, XAUUSD, KRWSEK, CNYTHB, EURHNL, USDPKR, ARSHKD, RSDJPY, VRNCHF, USDRON, EURNAD, USDNZD, EURPHP, JPYCZK, USDPLN, USDXPT, CDFEUR, EURMVR, EURLKR, HUFJPY, GBPAMD, EURPYG, BRLPEN, XPDEUR, AUDDKK, HKDPKR, GBPPAB, HKDCHF, AEDNZD, GBPZAR, BMDKYD, USDBDT, MYRTHB, KYDGBP, MKDUSD, CHFUSD, THBMYR, GBPBRL, EURUGX, EURSOS, CDFUSD, KWDAED, JPYILS, HKDCAD, AUDHUF, BZDGBP, PGKAUD, AUDPLN, THBCNY, CADXAU, SEKZAR, MKDGBP, ZARJPY, INRAED, KRWZAR, HNLGBP, MADEUR, EURSCR, JPYNOK, ZARPHP, UZSEUR, MGAGBP, USDCNY, CNHUSD, OMRGBP, TRYPLN, QARZAR, BSDEUR, PKRKWD, IDRSGD, EURNOK")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"resolution"),(0,S.kt)("td",{parentName:"tr",align:null},"-r  --resolution"),(0,S.kt)("td",{parentName:"tr",align:null},"[Alphavantage only]"," Resolution of data. Can be intraday, daily, weekly or monthly"),(0,S.kt)("td",{parentName:"tr",align:null},"d"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"i, d, w, m")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"interval"),(0,S.kt)("td",{parentName:"tr",align:null},"-i  --interval"),(0,S.kt)("td",{parentName:"tr",align:null},"Interval of intraday data. Options: ","[YahooFinance]"," 1min, 2min, 5min, 15min, 30min, 60min, 90min, 1hour, 1day, 5day, 1week, 1month, 3month. ","[AlphaVantage]"," 1min, 5min, 15min, 30min, 60min"),(0,S.kt)("td",{parentName:"tr",align:null},"1day"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"1min, 5min, 15min, 30min, 60min, 90min, 1hour, 1day, 5day, 1week, 1month, 3month")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"start_date"),(0,S.kt)("td",{parentName:"tr",align:null},"-s  --start"),(0,S.kt)("td",{parentName:"tr",align:null},"The starting date (format YYYY-MM-DD) of the forex pair"),(0,S.kt)("td",{parentName:"tr",align:null},"datetime.now() - timedelta(days=365)"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"None")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"end"),(0,S.kt)("td",{parentName:"tr",align:null},"-e  --end"),(0,S.kt)("td",{parentName:"tr",align:null},"The ending date (format YYYY-MM-DD) of the forex pair"),(0,S.kt)("td",{parentName:"tr",align:null},"2023-11-30"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"None")))),(0,S.kt)("hr",null))}n.isMDXComponent=!0}}]);