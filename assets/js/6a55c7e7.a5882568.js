"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69582],{3905:(a,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>y});var n=t(67294);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function i(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function o(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function l(a,e){if(null==a)return{};var t,n,r=function(a,e){if(null==a)return{};var t,n,r={},i=Object.keys(a);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var s=n.createContext({}),c=function(a){var e=n.useContext(s),t=e;return a&&(t="function"==typeof a?a(e):o(o({},e),a)),t},u=function(a){var e=c(a.components);return n.createElement(s.Provider,{value:e},a.children)},d="mdxType",m={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(a,e){var t=a.components,r=a.mdxType,i=a.originalType,s=a.parentName,u=l(a,["components","mdxType","originalType","parentName"]),d=c(t),p=r,y=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return t?n.createElement(y,o(o({ref:e},u),{},{components:t})):n.createElement(y,o({ref:e},u))}));function y(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=a,l[d]="string"==typeof a?a:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},88828:(a,e,t)=>{t.d(e,{Z:()=>i});var n=t(67294),r=t(35742);function i(a){let{title:e}=a;return n.createElement(r.Z,null,n.createElement("title",null,e))}},98640:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=t(87462),r=(t(67294),t(3905)),i=t(88828);const o={title:"country",description:"This page provides information on how to select a country to look at its data. It displays detailed analysis and parameters for each country.",keywords:["Country Data","Parameters","Country Selection","Data Selection"]},l=void 0,s={unversionedId:"terminal/reference/alt/covid/country",id:"terminal/reference/alt/covid/country",title:"country",description:"This page provides information on how to select a country to look at its data. It displays detailed analysis and parameters for each country.",source:"@site/content/terminal/reference/alt/covid/country.md",sourceDirName:"terminal/reference/alt/covid",slug:"/terminal/reference/alt/covid/country",permalink:"/terminal/reference/alt/covid/country",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/alt/covid/country.md",tags:[],version:"current",lastUpdatedBy:"Luqman",lastUpdatedAt:1700659065,formattedLastUpdatedAt:"Nov 22, 2023",frontMatter:{title:"country",description:"This page provides information on how to select a country to look at its data. It displays detailed analysis and parameters for each country.",keywords:["Country Data","Parameters","Country Selection","Data Selection"]},sidebar:"tutorialSidebar",previous:{title:"cases",permalink:"/terminal/reference/alt/covid/cases"},next:{title:"deaths",permalink:"/terminal/reference/alt/covid/deaths"}},c={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],d={toc:u},m="wrapper";function p(a){let{components:e,...t}=a;return(0,r.kt)(m,(0,n.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"alt /covid/country - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Select a country to look at data for."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"country [-c country_name]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"country"),(0,r.kt)("td",{parentName:"tr",align:null},"-c  --country"),(0,r.kt)("td",{parentName:"tr",align:null},"Country to get data for."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"suriname, qatar, romania, cabo",(0,r.kt)("em",{parentName:"td"},"verde, malawi, micronesia, belarus, denmark, fiji, cambodia, madagascar, saint_vincent_and_the_grenadines, paraguay, eritrea, barbados, ethiopia, laos, zimbabwe, lithuania, comoros, namibia, spain, papua_new_guinea, central_african_republic, honduras, equatorial_guinea, botswana, canada, italy, jordan, chad, czechia, uzbekistan, azerbaijan, poland, us, el_salvador, ghana, kiribati, kuwait, senegal, holy_see, mauritius, oman, sierra_leone, zambia, nigeria, kosovo, brunei, china, gabon, seychelles, guatemala, somalia, peru, sao_tome_and_principe, sweden, pakistan, moldova, togo, niger, ukraine, sudan, trinidad_and_tobago, netherlands, philippines, australia, burkina_faso, tajikistan, united_arab_emirates, kyrgyzstan, costa_rica, portugal, mozambique, mauritania, timor-leste, vietnam, montenegro, guyana, mongolia, bahrain, cameroon, palau, jamaica, new_zealand, iraq, mali, saint_kitts_and_nevis, brazil, belgium, maldives, egypt, panama, rwanda, israel, russia, nicaragua, switzerland, kazakhstan, guinea-bissau, albania, thailand, cuba, uruguay, liechtenstein, bosnia_and_herzegovina, haiti, andorra, taiwan*, dominica, congo"),"(kinshasa), ecuador, malta, vanuatu, dominican",(0,r.kt)("em",{parentName:"td"},"republic, lesotho, morocco, west_bank_and_gaza, lebanon, south_sudan, armenia, afghanistan, grenada, indonesia, sri_lanka, iran, bolivia, luxembourg, north_macedonia, cyprus, iceland, serbia, greece, united_kingdom, georgia, saint_lucia, venezuela, austria, tonga, saudi_arabia, argentina, summer_olympics_2020, angola, algeria, latvia, yemen, singapore, turkey, belize, burundi, ireland, south_africa, bulgaria, india, diamond_princess, cote_d'ivoire, libya, slovenia, benin, djibouti, congo"),"(brazzaville), tunisia, nepal, bahamas, bhutan, colombia, hungary, malaysia, germany, tanzania, samoa, san_marino, syria, liberia, korea,_south, uganda, gambia, marshall_islands, kenya, finland, bangladesh, eswatini, slovakia, burma, ms_zaandam, japan, guinea, monaco, mexico, solomon_islands, estonia, chile, croatia, antigua_and_barbuda, norway, france, all")))),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);