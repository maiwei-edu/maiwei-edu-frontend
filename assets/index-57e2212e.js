import{u as b,s as e,cw as n,p as a,y as F,x as k,S as P,z as S}from"./index-c4424654.js";import{l as B,c as D}from"./path-88bbe786.js";import{E as $}from"./index-2b1e8b68.js";import{F as A}from"./index-daf86d25.js";import{T as I}from"./index-17003175.js";import{P as K}from"./Pagination-12974eb2.js";import"./useForceUpdate-dbe4ad3d.js";const U=({cid:i,name:r,thumb:o,charge:l,originalCharge:h,coursesCount:u,stepsCount:f})=>{const c=b(),m=()=>{c("/learnPath/detail/"+i)};return e.jsxs("div",{className:n["learnPath-item-comp"],onClick:()=>m(),children:[e.jsx("div",{className:n["learnPath-thumb"],children:e.jsx("div",{className:n["thumb-bar"],children:e.jsx(I,{value:o,width:264,height:198,border:null})})}),e.jsxs("div",{className:n["learnPath-body"],children:[e.jsx("div",{className:n["learnPath-title"],children:r}),e.jsxs("div",{className:n["learnPath-count"],children:[e.jsxs("div",{className:n["courses-count"],children:["包含",u,"门课程"]}),l>0&&e.jsxs("div",{className:n["learnpath-course-charge"],children:[e.jsx("small",{children:"￥"}),l]}),l===0&&e.jsx("div",{className:n["green-free"],children:"免费"})]})]})]})},W={"list-box":"_list-box_1xb0e_1"},X=()=>{document.title="学习路径";const i=b(),[r,o]=a.useState(!1),[l,h]=a.useState([]),[u,f]=a.useState([]),[c,m]=a.useState(!1),[x,j]=a.useState(1),[d,q]=a.useState(16),[v,N]=a.useState(0),[y,w]=a.useState([]),C=new URLSearchParams(F().search),[g,L]=a.useState(Number(C.get("cid"))||0),[p,_]=a.useState(Number(C.get("child"))||0);a.useEffect(()=>{R()},[]),a.useEffect(()=>{T()},[c,x,d]);const E=()=>{j(1),h([]),m(!c)},T=()=>{if(r)return;o(!0);let t=0;p===0||g==0?t=g:t=p,B({page:x,size:d,category_id:t}).then(s=>{h(s.data.data.data),w(s.data.steps),N(s.data.data.total),o(!1)})},R=()=>{D({}).then(t=>{f(t.data)})},z=t=>{let s=t.id;return typeof y[s]>"u"?0:y[s].length};return e.jsxs(e.Fragment,{children:[e.jsx(A,{loading:r,categories:u,defaultKey:g,defaultChild:p,onSelected:(t,s)=>{L(t),_(s),i(t===0?"/learnPath":s===0?"/learnPath?cid="+t:"/learnPath?cid="+t+"&child="+s),E()}}),e.jsxs("div",{className:"container",children:[r&&e.jsx(k,{style:{width:1200},children:e.jsx("div",{style:{width:1200,display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginTop:30},children:Array.from({length:12}).map((t,s)=>e.jsxs("div",{style:{width:264,display:"flex",flexDirection:"column"},children:[e.jsx(P.Button,{active:!0,style:{width:264,height:198,borderRadius:"8px 8px 0 0"}}),e.jsx(P,{active:!0,paragraph:{rows:1}})]},s))})}),!r&&l.length===0&&e.jsx(S,{span:24,children:e.jsx($,{})}),!r&&l.length>0&&e.jsx("div",{className:W["list-box"],children:l.map(t=>e.jsx(U,{cid:t.id,thumb:t.thumb,desc:t.desc,name:t.name,coursesCount:t.courses_count,stepsCount:z(t),charge:t.charge,originalCharge:t.original_charge},t.id))}),!r&&l.length>0&&d<v&&e.jsx(S,{span:24,style:{display:"flex",justifyContent:"center",marginTop:50},children:e.jsx(K,{onChange:t=>{j(t),window.scrollTo(0,0)},pageSize:d,defaultCurrent:x,total:v})})]})]})};export{X as default};