import{u as v,p as a,aQ as N,t as b,s as e,x as S,ao as P,z as E}from"./index-d3b20173.js";import{E as z}from"./index-ce951dff.js";import{p as C}from"./test-19b13b0b.js";import{N as w}from"./index-f58e9dd6.js";import{P as y}from"./index-f5f77362.js";const L="_box_72g6p_1",R="_title_72g6p_44",A="_icon_72g6p_53",F="_name_72g6p_58",I="_info_72g6p_69",M="_item_72g6p_76",k="_page_72g6p_1",t={box:L,"project-box":"_project-box_72g6p_8","btn-title":"_btn-title_72g6p_17","paper-item":"_paper-item_72g6p_28","paper-item-comp":"_paper-item-comp_72g6p_35",title:R,icon:A,name:F,info:I,item:M,page:k},H=()=>{document.title="我的考试";const g=v(),[n,m]=a.useState(!1),[l,x]=a.useState([]),[_,B]=a.useState(!1),[i,d]=a.useState(1),[o,D]=a.useState(10);a.useState(0);const[f,c]=a.useState(!1),[h,p]=a.useState(!1);a.useEffect(()=>{j()},[i,o,_]);const j=()=>{n||(m(!0),N({page:i,size:o}).then(s=>{if(s.data.data.length===0){let r=i;r>1&&(b.error("没有更多了"),r--,d(r)),c(!0),p(!1)}else x(s.data.data),i===1&&s.data.data.length<o?p(!0):p(!1),s.data.data.length<o?c(!0):c(!1);m(!1)}))},u=s=>{g("/exam/papers/detail/"+s)};return e.jsx("div",{className:"container",children:e.jsxs("div",{className:t.box,children:[e.jsx(w,{cid:9,refresh:!0}),e.jsxs("div",{className:t["project-box"],children:[e.jsx("div",{className:t["btn-title"],children:"我的考试"}),n&&e.jsx(S,{children:e.jsx("div",{className:"float-left d-j-flex mt-50",children:e.jsx(P,{size:"large"})})}),!n&&l.length===0&&e.jsx(E,{span:24,children:e.jsx(z,{})}),!n&&l.length>0&&e.jsx(e.Fragment,{children:l.map((s,r)=>e.jsx("div",{className:t["paper-item"],children:s.paper&&e.jsxs("div",{className:t["paper-item-comp"],onClick:()=>u(s.paper_id),children:[e.jsxs("div",{className:t.title,children:[e.jsx("img",{className:t.icon,src:C}),e.jsx("div",{className:t.name,children:s.paper.title})]}),e.jsxs("div",{className:t.info,children:[e.jsxs("span",{style:{color:"#3CA7FA"},children:["最高得分：",s.max_score]}),e.jsx("span",{className:t.item,children:"|"}),e.jsxs("span",{children:[s.paper.score,"分"]})]})]})},r))}),!n&&l.length>0&&!h&&e.jsx("div",{id:"page",children:e.jsx(y,{over:f,page:i,currentChange:s=>{d(s),window.scrollTo(0,0)}},i)})]})]})})};export{H as default};
