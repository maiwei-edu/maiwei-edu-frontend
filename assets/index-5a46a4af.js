import{u as n,s,A as e}from"./index-d3b20173.js";import{T as m}from"./index-e9655fcb.js";const j=({cid:o,title:r,videosCount:u,thumb:i,charge:a,isFree:c,userCount:v,category:d})=>{const l=n(),t=()=>{l("/courses/detail/"+o)};return s.jsxs("div",{className:e["vod-course-item-comp"],onClick:()=>t(),children:[s.jsx("div",{className:e["vod-course-thumb"],children:s.jsx("div",{className:e["thumb-bar"],children:s.jsx(m,{value:i,width:264,height:198,border:null})})}),s.jsxs("div",{className:e["vod-course-body"],children:[s.jsx("div",{className:e["vod-course-title"],children:r}),s.jsxs("div",{className:e["vod-course-info"],children:[s.jsx("div",{className:e["vod-course-sub"],children:d.name}),s.jsxs("div",{className:e["vod-course-charge"],children:[c===0&&a>0&&s.jsxs("span",{className:e["charge-text"],children:[s.jsx("span",{className:e.unit,children:"￥"}),a]}),c===1&&s.jsx("span",{className:e["free-text"],children:"免费"})]})]})]})]})};export{j as V};
