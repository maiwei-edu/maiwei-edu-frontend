import{p as c,s as e}from"./index-c4424654.js";const u=({page:t,over:n,currentChange:l})=>{const[s,a]=c.useState(1);c.useEffect(()=>{a(t)},[t]),c.useEffect(()=>{l(s)},[s]);const f=()=>{let r=s;r>1&&(r--,a(r))},o=()=>{if(!n){let r=s;r++,a(r)}};return e.jsx("div",{className:"page-wrapper clearfix",children:e.jsxs("div",{className:"page-tab clearfix",children:[e.jsxs("span",{className:"fl h50",children:["第",s,"页"]}),s!==1&&e.jsx("button",{style:{backgroundColor:"#ffffff"},className:"fl h50 cursor",onClick:()=>f(),children:e.jsx("span",{children:"上一页"})}),!n&&e.jsx("button",{style:{backgroundColor:"#ffffff"},className:"fl h50 cursor",onClick:()=>o(),children:e.jsx("span",{children:"下一页"})})]})})};export{u as P};