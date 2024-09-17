"use strict";(self.webpackChunkdocs_pulsatrix_com=self.webpackChunkdocs_pulsatrix_com||[]).push([[910],{1941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=n(4848),s=n(8453),l=n(1470),r=n(9365);const a={title:"/v1/limits"},o="",c={id:"controller/rest-ws-api/v1-limits",title:"/v1/limits",description:"The /limits endpoint provides control functionality for the limits of the SECC.You can set the limits through the SET endpoint, and use a GET to get the current values set through the API.",source:"@site/docs/controller/rest-ws-api/v1-limits.mdx",sourceDirName:"controller/rest-ws-api",slug:"/controller/rest-ws-api/v1-limits",permalink:"/docs/controller/rest-ws-api/v1-limits",draft:!1,unlisted:!1,editUrl:"https://github.com/pulsatrix-emobility/docs-pulsatrix-com/docs/controller/rest-ws-api/v1-limits.mdx",tags:[],version:"current",frontMatter:{title:"/v1/limits"},sidebar:"pxDocs",previous:{title:"/v1/charging",permalink:"/docs/controller/rest-ws-api/v1-charging"},next:{title:"MQTT API",permalink:"/docs/mqtt-api"}},u={},d=[{value:"Values",id:"values",level:2},{value:"Example Output",id:"example-output",level:2},{value:"<span>/v1/limits <span>PUT</span></span>",id:"v1limits-put",level:2}];function h(e){const t={br:"br",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:""})}),"\n",(0,i.jsx)(t.h1,{id:"v1limits-get",children:(0,i.jsxs)("span",{style:{display:"flex",alignItems:"center"},children:["/v1/limits ",(0,i.jsx)("span",{style:{marginLeft:"10px",marginTop:"5px",backgroundColor:"#62B0FE",color:"white",padding:"4px",borderRadius:"5px",fontSize:"23px"},children:"GET"})]})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"/limits"})," endpoint provides control functionality for the limits of the SECC.You can set the limits through the ",(0,i.jsx)(t.code,{children:"SET"})," endpoint, and use a ",(0,i.jsx)(t.code,{children:"GET"})," to get the current values set through the API."]}),"\n",(0,i.jsxs)(t.p,{children:["The limits are only active if the ",(0,i.jsx)(t.code,{children:"enabled"})," value is set to ",(0,i.jsx)(t.code,{children:"true"}),".\nIf you set the limits for ",(0,i.jsx)(t.code,{children:"amperageLimit"})," and ",(0,i.jsx)(t.code,{children:"powerLimit"}),", the lower effective value will be used."]}),"\n",(0,i.jsx)(t.h2,{id:"values",children:"Values"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"amperageLimit"})," - ",(0,i.jsx)(t.em,{children:"float"})," - Get or Set the maximum current the SECC will allow the vehicle to draw in amps."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The SECC always sets the limit to the minimum of all currently valid limits. This could lead to a\nsituation where the limit set by the API is ignored because it is higher than the limit set by another part of the system."}),"\n",(0,i.jsx)(t.li,{children:"A limit below 6A will be ignored and the SECC will set the limit to 0A."}),"\n",(0,i.jsx)(t.li,{children:"A limit above the effectiveAmperageLimit will be ignored and the SECC will set the limit to the effectiveAmperageLimit."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"powerLimit"})," - ",(0,i.jsx)(t.em,{children:"int"})," - Get or set the maximum power the SECC will allow the vehicle to draw in watts."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The power limit is effectively calculated back to the amperage limit and behaves the same as described above.",(0,i.jsx)(t.br,{}),"\n","(powerLimit \xf7 voltage \xf7 usedPhases = amperageLimit)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"timeout"})," - ",(0,i.jsx)(t.em,{children:"int"})," - Get or set the time in milliseconds how long the data, set by the API, will be valid."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The default timeout for values set by the API is 300,000 milliseconds (5 minutes)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"example-output",children:"Example Output"}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsx)(r.A,{value:"rest",label:"REST",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",metastring:'title="http://127.0.0.1/api/v1/limits"',children:'{\n  "amperageLimit":NaN,\n  "powerLimit":NaN,\n  "timeout": 300000\n}\n'})})}),(0,i.jsx)(r.A,{value:"ws",label:"WebSocket",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",metastring:'title="ws://127.0.0.1:80/api/ws"',children:'{\n  "topic": "limits",\n  "message": \n  {\n    "amperageLimit":NaN,\n    "powerLimit":NaN,\n    "timeout": 300000\n  }\n}\n'})})})]}),"\n",(0,i.jsx)(t.h2,{id:"v1limits-put",children:(0,i.jsxs)("span",{style:{display:"flex",alignItems:"center"},children:["/v1/limits ",(0,i.jsx)("span",{style:{marginLeft:"10px",marginTop:"5px",backgroundColor:"#FCA130",color:"white",padding:"5px",borderRadius:"5px",fontSize:"23px"},children:"PUT"})]})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"SET"})," endpoint for the limits looks different depending on the protocol used, the REST endpoint allows you to set all values at once, while the WebSocket endpoint only allows you to set one value at a time.\nIf you want to give up control over a value, set it to ",(0,i.jsx)(t.code,{children:"NaN"}),"."]}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsxs)(r.A,{value:"rest",label:"REST",default:!0,children:[(0,i.jsx)(t.p,{children:"Set the request body to the desired values. If you want to change only one value, you can leave the others out."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",metastring:'title="http://127.0.0.1/api/v1/limits"',children:'{\n  "setAmperageLimit": NaN,\n  "sePowerLimit": NaN,\n  "setTimeout": 300000,\n  "setOnePhaseLimit": true,\n  "setPhaseRotation": true\n}\n'})})]}),(0,i.jsxs)(r.A,{value:"ws",label:"WebSocket",children:[(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"setCurrentLimit"})," - ",(0,i.jsx)(t.em,{children:"float32"})," - Sets the amperage limit in amps"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"setPowerLimit"})," - ",(0,i.jsx)(t.em,{children:"int"})," - Sets the power limit in watts"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"setTimeout"})," - ",(0,i.jsx)(t.em,{children:"int"})," - Sets the data validity timeout"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"setOnePhaseLimit"})," - ",(0,i.jsx)(t.em,{children:"bool"})," - Enables/Disables charging on one phase"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"setPhaseRotation"})," - ",(0,i.jsx)(t.em,{children:"bool"})," - Enables/Disables phase rotation"]}),"\n"]}),(0,i.jsxs)(t.p,{children:["With WebSocket it is only possible to set one value at a time.\nUse the format: ",(0,i.jsx)(t.code,{children:'"<command>\\n<value>"'})," to set the value."]}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:'"setCurrentLimit\\n8.5"'})," ",(0,i.jsx)(t.em,{children:"Set the amperage limit to 8.5A"}),"\n",(0,i.jsx)(t.code,{children:'"setPowerLimit\\n10000"'})," ",(0,i.jsx)(t.em,{children:"Sets the Power Limit to 10000W"}),"\n",(0,i.jsx)(t.code,{children:'"setTimeout\\n10000"'})," ",(0,i.jsx)(t.em,{children:"Sets the data validity timeout to 10000ms"}),"\n",(0,i.jsx)(t.code,{children:'"setOnePhaseLimitActive\\ntrue"'})," ",(0,i.jsx)(t.em,{children:"Enables charging on one phase"}),"\n",(0,i.jsx)(t.code,{children:'"setPhaseRotation\\ntrue"'})," ",(0,i.jsx)(t.em,{children:"Enables phase rotation"})]})]})]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var i=n(8215);const s={tabItem:"tabItem_Ymn6"};var l=n(4848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,r),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>y});var i=n(6540),s=n(8215),l=n(3104),r=n(6347),a=n(205),o=n(7485),c=n(1682),u=n(679);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:s}}=e;return{value:t,label:n,attributes:i,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(l),(0,i.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,l=h(e),[r,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:l}))),[c,d]=p({queryString:n,groupId:s}),[x,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,l]=(0,u.Dv)(n);return[s,(0,i.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:s}),f=(()=>{const e=c??x;return m({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{f&&o(f)}),[f]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,l]),tabValues:l}}var v=n(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(4848);function j(e){let{className:t,block:n,selectedValue:i,selectValue:r,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),s=a[n].value;s!==i&&(c(t),r(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...l,className:(0,s.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:l}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===l));return e?(0,i.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function w(e){const t=x(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,b.jsx)(j,{...t,...e}),(0,b.jsx)(g,{...t,...e})]})}function y(e){const t=(0,v.A)();return(0,b.jsx)(w,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(6540);const s={},l=i.createContext(s);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);