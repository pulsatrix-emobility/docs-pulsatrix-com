"use strict";(self.webpackChunkdocs_pulsatrix_com=self.webpackChunkdocs_pulsatrix_com||[]).push([[819],{2174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=n(5893),r=n(1151),o=n(2991);const s={slug:"/mqtt-api"},c="MQTT API",a={id:"controller/mqtt-api/index",title:"MQTT API",description:"To use the MQTT API, the MQTT connector must be enabled in the MQTT component configuration. At least the URI of the MQTT broker to be used must be configured, but depending on the installation other parameters may also be required. After saving the settings, you will need to restart the SECC in order to make the changes take effect.",source:"@site/docs/controller/mqtt-api/index.mdx",sourceDirName:"controller/mqtt-api",slug:"/mqtt-api",permalink:"/docs/mqtt-api",draft:!1,unlisted:!1,editUrl:"https://github.com/pulsatrix-emobility/docs-pulsatrix-com/docs/controller/mqtt-api/index.mdx",tags:[],version:"current",frontMatter:{slug:"/mqtt-api"},sidebar:"pxDocs",previous:{title:"/v1/limits",permalink:"/docs/controller/rest-ws-api/v1-limits"},next:{title:"/chargingPoint/status",permalink:"/docs/controller/mqtt-api/chargingPoint-status"}},l={},d=[];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"mqtt-api",children:"MQTT API"}),"\n",(0,i.jsxs)(t.p,{children:["To use the MQTT API, the MQTT connector must be enabled in the ",(0,i.jsx)(t.code,{children:"MQTT"})," component configuration. At least the URI of the MQTT broker to be used must be configured, but depending on the installation other parameters may also be required. After saving the settings, you will need to restart the SECC in order to make the changes take effect."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Currently the MQTT API can only be enabled/disabled by an administrator or the pulsatrix support."})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"The topic is defined as follows:"}),"\n",(0,i.jsx)(t.code,{children:"<Topic-Prefix>/<Client-ID>/<Topic>"})]}),"\n",(0,i.jsxs)(t.p,{children:["The default ",(0,i.jsx)(t.code,{children:"Topic-Prefix"})," is: ",(0,i.jsx)(t.code,{children:"/pulsatrix/secc"})," but can be configured through the ",(0,i.jsx)(t.code,{children:"MQTT"})," component."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Client-ID"})," can be either found in the ",(0,i.jsx)(t.code,{children:"MQTT"})," component configuration, or on the 2nd page of the SECC display. By default it is an alphanumeric string of 12 characters equal to the serial number of the device. However, the client ID can be changed through the component configuration."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Topic"})," is defined by the API and is listed below."]}),"\n","\n","\n",(0,i.jsx)(o.Z,{})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},2991:(e,t,n)=>{n.d(t,{Z:()=>g});n(7294);var i=n(6010),r=n(3438),o=n(9960),s=n(3919),c=n(5999),a=n(2503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(5893);function h(e){let{href:t,children:n}=e;return(0,d.jsx)(o.Z,{href:t,className:(0,i.Z)("card padding--lg",l.cardContainer),children:n})}function u(e){let{href:t,icon:n,title:r,description:o}=e;return(0,d.jsxs)(h,{href:t,children:[(0,d.jsxs)(a.Z,{as:"h2",className:(0,i.Z)("text--truncate",l.cardTitle),title:r,children:[n," ",r]}),o&&(0,d.jsx)("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:o,children:o})]})}function p(e){let{item:t}=e;const n=(0,r.LM)(t);return n?(0,d.jsx)(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.xz)(t.docId??void 0);return(0,d.jsx)(u,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(m,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,r.jA)();return(0,d.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const o=(0,r.MN)(t);return(0,d.jsx)("section",{className:(0,i.Z)("row",n),children:o.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var i=n(7294);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);