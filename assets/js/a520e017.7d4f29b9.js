"use strict";(self.webpackChunkdocs_pulsatrix_com=self.webpackChunkdocs_pulsatrix_com||[]).push([[792],{1644:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=r(4848),a=r(8453),l=r(1470),s=r(9365);const i={title:"/v1/charging"},o="",c={id:"controller/rest-ws-api/v1-charging",title:"/v1/charging",description:"The /charging endpoint provides momentary information about the current charging process.",source:"@site/docs/controller/rest-ws-api/v1-charging.mdx",sourceDirName:"controller/rest-ws-api",slug:"/controller/rest-ws-api/v1-charging",permalink:"/docs/controller/rest-ws-api/v1-charging",draft:!1,unlisted:!1,editUrl:"https://github.com/pulsatrix-emobility/docs-pulsatrix-com/docs/controller/rest-ws-api/v1-charging.mdx",tags:[],version:"current",frontMatter:{title:"/v1/charging"},sidebar:"pxDocs",previous:{title:"/v1/transaction",permalink:"/docs/controller/rest-ws-api/v1-transaction"},next:{title:"/v1/limits",permalink:"/docs/controller/rest-ws-api/v1-limits"}},u={},d=[{value:"Values",id:"values",level:2},{value:"Example Output",id:"example-output",level:2},{value:"Block Diagramm",id:"block-diagramm",level:2}];function p(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:""})}),"\n",(0,t.jsx)(n.h1,{id:"v1charging-get",children:(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center"},children:["/v1/charging ",(0,t.jsx)("span",{style:{marginLeft:"10px",marginTop:"5px",backgroundColor:"#62B0FE",color:"white",padding:"4px",borderRadius:"5px",fontSize:"23px"},children:"GET"})]})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"/charging"})," endpoint provides momentary information about the current charging process."]}),"\n",(0,t.jsx)(n.h2,{id:"values",children:"Values"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"voltage"})," - ",(0,t.jsx)(n.em,{children:"[float, float, float]"})," - Per phase voltage in V"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"amperage"})," - ",(0,t.jsx)(n.em,{children:"[float, float, float]"})," - Per phase charging current in A"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"allocatedAmperage"})," - ",(0,t.jsx)(n.em,{children:"float"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"commandedAmperage"})," - ",(0,t.jsx)(n.em,{children:"float"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"availableAmperage"})," - ",(0,t.jsx)(n.em,{children:"float"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"signaledAmperage"})," - ",(0,t.jsx)(n.em,{children:"float"})," - Amperage signaled to the EV"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"frequency"})," - ",(0,t.jsx)(n.em,{children:"float"})," - Current grid frequency in Hz"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"energyImported"})," - ",(0,t.jsx)(n.em,{children:"float"})," - Current meter value in kWh"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"lastActivePower"})," - ",(0,t.jsx)(n.em,{children:"float"})," - Last active power of the EV in W"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example-output",children:"Example Output"}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(s.A,{value:"rest",label:"REST",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="http://127.0.0.1/api/v1/charging"',children:'{\n  "voltage": [\n    234.1605072,\n    234.0818024,\n    234.2052612\n  ],\n  "amperage": [\n    8.13,\n    8.2,\n    8.09\n  ],\n  "allocatedAmperage": 16,\n  "commandedAmperage": 0,\n  "availableAmperage": 18,\n  "signaledAmperage": 18,\n  "frequency": 49.930336,\n  "energyImported": 0.307999998,\n  "lastActivePower": 2036.600098\n}\n'})})}),(0,t.jsx)(s.A,{value:"ws",label:"WebSocket",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="ws://127.0.0.1:80/api/ws"',children:'{\n  "topic":"charging",\n  "message":\n  {\n    "voltage": [\n      234.1605072,\n      234.0818024,\n      234.2052612\n    ],\n    "amperage": [\n      8.13,\n      8.2,\n      8.09\n    ],\n    "allocatedAmperage": 16,\n    "commandedAmperage": 0,\n    "availableAmperage": 18,\n    "signaledAmperage": 18,\n    "frequency": 49.930336,\n    "energyImported": 0.307999998,\n    "lastActivePower": 2036.600098\n  }\n}\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"block-diagramm",children:"Block Diagramm"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"              \n                   \u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513              allocatedAmperage  \u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n                   \u2503   API   \u2503             \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2528          \u2503\n                   \u2517\u2501\u2501\u2501\u2501\u252f\u2501\u2501\u2501\u2501\u251b             \u2502 requestedAmperage \u2503   team   \u2503\u25c0\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n       \u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513 \u2502 \u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513     \u2502      \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2503          \u2503          \u2502\n       \u2503Smart Charging\u2520\u2500\u253c\u2500\u2528 HW-Limit \u2503     \u2502      \u2502            \u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u251b          \u25bc\n       \u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u251b \u2502 \u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u251b     \u25bc      \u2502                            \u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\nprofiles       \u25b2        \u2502limits   \u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2513                          \u2503   VCSE   \u2503\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2513       \u2502        \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2503                 \u2503  commandedAmperage       \u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u251b\n\u2503\u250f\u2501\u2501\u2501\u2501\u2501\u253b\u2513      \u2502                  \u2503      CPPWM      \u2520\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2517\u252b\u250f\u2501\u2501\u2501\u2501\u2501\u253b\u2513     \u2502     amperage [3] \u2503    controller   \u2503         \u2502\n \u2517\u252b      \u2520\u2500\u2500\u2500\u2500\u2500\u2518       \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2503\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u25b6\u250f\u2501\u2501\u2501\u253b\u2501\u2501\u2501\u2513     \u2502\n  \u2517\u2501\u2501\u2501\u2501\u2501\u2501\u251b             \u2502          \u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2503 PI(D) \u2503\u25c0\u2500\u2500\u2500\u2500\u2518\n                       \u2502                        \u2517\u2501\u2501\u2501\u252f\u2501\u2501\u2501\u251b\n              \u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513               \u250c\u2500\u2500\u2500\u2518 availableAmperage\n              \u2503  Fiscal Meter   \u2503               \u25bc                                   .\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500.\n              \u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u251b         \u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513 signaledAmperage      ___|__|_______\\____ \n                                          \u2503  ISO 61851  \u2520\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6  |   _  | *     _    ,O\n                                          \u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u251b         CP            \u2500\u2500(_)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500(_)\u2500\u2500\u2500\xb0\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>s});r(6540);var t=r(8215);const a={tabItem:"tabItem_Ymn6"};var l=r(4848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(6540),a=r(8215),l=r(3104),s=r(6347),i=r(205),o=r(7485),c=r(1682),u=r(679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function g(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,l=p(e),[s,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[c,d]=m({queryString:r,groupId:a}),[g,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,u.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),v=(()=>{const e=c??g;return h({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=r(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(4848);function b(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,r=o.indexOf(n),a=i[r].value;a!==t&&(c(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:l}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function A(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(b,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,x.jsx)(A,{...e,children:d(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var t=r(6540);const a={},l=t.createContext(a);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);