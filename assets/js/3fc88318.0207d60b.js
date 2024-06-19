"use strict";(self.webpackChunkdocs_pulsatrix_com=self.webpackChunkdocs_pulsatrix_com||[]).push([[202],{8636:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var n=i(5893),s=i(1151);const l={title:"Limits"},r="",a={id:"controller/mqtt-api/limits",title:"Limits",description:"To set the limits applicable to a charging session, send a message body containing the value as a string to the corresponding topic.",source:"@site/docs/controller/mqtt-api/limits.mdx",sourceDirName:"controller/mqtt-api",slug:"/controller/mqtt-api/limits",permalink:"/docs/controller/mqtt-api/limits",draft:!1,unlisted:!1,editUrl:"https://github.com/pulsatrix-emobility/docs-pulsatrix-com/docs/controller/mqtt-api/limits.mdx",tags:[],version:"current",frontMatter:{title:"Limits"},sidebar:"pxDocs",previous:{title:"/meter/grid",permalink:"/docs/controller/mqtt-api/meter-grid"},next:{title:"Backend API",permalink:"/docs/backend/backend-api"}},o={},c=[{value:"Example Request",id:"example-request",level:2}];function m(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:""}),"\n",(0,n.jsx)(t.h1,{id:"limits-set",children:(0,n.jsxs)("span",{style:{display:"flex",alignItems:"center"},children:["Limits ",(0,n.jsx)("span",{style:{marginLeft:"10px",marginTop:"5px",backgroundColor:"#FCA130",color:"white",padding:"5px",borderRadius:"5px",fontSize:"23px"},children:"SET"})]})}),"\n",(0,n.jsx)(t.p,{children:"To set the limits applicable to a charging session, send a message body containing the value as a string to the corresponding topic."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"/charging/amperageLimit"}),"- ",(0,n.jsx)(t.em,{children:"float"})," - Set the maximum amperage the SECC will allow the vehicle to consume in amps."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The SECC always sets the limit to the minimum of all currently valid limits. This could lead to a\nsituation where the limit set by the API is ignored because it is higher than the limit set by another part of the system."}),"\n",(0,n.jsx)(t.li,{children:"A limit below 6A will be ignored and the SECC will set the limit to 0A."}),"\n",(0,n.jsx)(t.li,{children:"A limit above the effectiveAmperageLimit will be ignored and the SECC will set the limit to the effectiveAmperageLimit."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"/charging/powerLimit"})," - ",(0,n.jsx)(t.em,{children:"int"})," - Set the maximum charging power the SECC will allow the vehicle to consume in watts."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The power limit is internally converted to an amperage limit and behaves the same as described above. (powerLimit \xf7 voltage \xf7 used phases = amperageLimit)"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"/charging/limitTimeout"})," - ",(0,n.jsx)(t.em,{children:"int"})," - Set the time in milliseconds the data set by the API will be valid."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The default timeout for values set by the API is 300,000 milliseconds (5 minutes)."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"example-request",children:"Example Request"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",metastring:'title="pulsatrix/secc/A0123B4567C8/charging/amperageLimit"',children:"8.5\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",metastring:'title="pulsatrix/secc/A0123B4567C8/charging/powerLimit"',children:"100000\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",metastring:'title="pulsatrix/secc/A0123B4567C8/charging/limitTimeout"',children:"300000\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>r});var n=i(7294);const s={},l=n.createContext(s);function r(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);