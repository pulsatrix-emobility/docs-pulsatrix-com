"use strict";(self.webpackChunkdocs_pulsatrix_com=self.webpackChunkdocs_pulsatrix_com||[]).push([[617],{5757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=n(5893),s=n(1151),r=n(2991);const o={slug:"/ws-rest-api"},c="REST / WebSocket API",a={id:"user-api/ws-rest-api/index",title:"REST / WebSocket API",description:"The REST and WebSocket API have the same endpoints and functionality. The only difference lies in the way the limits are set.",source:"@site/docs/user-api/ws-rest-api/index.mdx",sourceDirName:"user-api/ws-rest-api",slug:"/ws-rest-api",permalink:"/docs/ws-rest-api",draft:!1,unlisted:!1,editUrl:"https://github.com/pulsatrix-emobility/docs-pulsatrix-com/docs/user-api/ws-rest-api/index.mdx",tags:[],version:"current",frontMatter:{slug:"/ws-rest-api"},sidebar:"pxDocs",previous:{title:"Limits",permalink:"/docs/user-api/mqtt-api/limits"},next:{title:"/v1/configuration",permalink:"/docs/user-api/ws-rest-api/v1-configuration"}},l={},d=[];function u(e){const t={a:"a",h1:"h1",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"rest--websocket-api",children:"REST / WebSocket API"}),"\n",(0,i.jsx)(t.p,{children:"The REST and WebSocket API have the same endpoints and functionality. The only difference lies in the way the limits are set.\nWhile it is possible to set multiple values at once through the REST API, it is only possible to set one value at a time through the WebSocket API."}),"\n",(0,i.jsxs)(t.p,{children:["If you are looking for the Swagger documentation for the REST API, you can find it ",(0,i.jsx)(t.a,{href:"/user-api/swagger",children:(0,i.jsx)(t.strong,{children:"here"})}),"."]}),"\n","\n","\n",(0,i.jsx)(r.Z,{})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},2991:(e,t,n)=>{n.d(t,{Z:()=>g});n(7294);var i=n(6010),s=n(3438),r=n(9960),o=n(3919),c=n(5999),a=n(2503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(5893);function u(e){let{href:t,children:n}=e;return(0,d.jsx)(r.Z,{href:t,className:(0,i.Z)("card padding--lg",l.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:s,description:r}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(a.Z,{as:"h2",className:(0,i.Z)("text--truncate",l.cardTitle),title:s,children:[n," ",s]}),r&&(0,d.jsx)("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:r,children:r})]})}function h(e){let{item:t}=e;const n=(0,s.LM)(t);return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,s.xz)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(m,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.jA)();return(0,d.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const r=(0,s.MN)(t);return(0,d.jsx)("section",{className:(0,i.Z)("row",n),children:r.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var i=n(7294);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);