import{p as d,s as e,a_ as a}from"./index-d3b20173.js";const l=({scenes:c,defaultKey:i,onSelected:n})=>{const[r,t]=d.useState(i);return e.jsx("div",{className:a["category-box"],children:e.jsx("div",{className:a.box,children:c.map(s=>e.jsx("div",{className:r===s.id?a["active-item"]:a.item,onClick:()=>{t(s.id),n(s.id)},children:e.jsx("span",{children:s.name})},s.id))})})};export{l as F};
