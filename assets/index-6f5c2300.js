import{u as j,y as v,p as o,v as y,s as e,D as q,S as l}from"./index-d3b20173.js";import{s as N}from"./collection-d2feb62b.js";const p="_banner_f6d5y_1",_="_tit_f6d5y_12",s={banner:p,tit:_,"btn-box":"_btn-box_f6d5y_22","day-play":"_day-play_f6d5y_28","btn-all-play":"_btn-all-play_f6d5y_45","question-box":"_question-box_f6d5y_62","question-item":"_question-item_f6d5y_68","question-item-type":"_question-item-type_f6d5y_84","qquestion-item-num":"_qquestion-item-num_f6d5y_91"},b=()=>{document.title="收藏习题";const c=j();new URLSearchParams(v().search);const[n,d]=o.useState(!1),[i,u]=o.useState({}),r=y(t=>t.loginUser.value.isLogin);o.useEffect(()=>{h()},[]);const h=()=>{n||(d(!0),N({}).then(t=>{u(t.data.types_count),d(!1)}))},x=t=>{if(!r){m();return}i[1]===0&&i[2]===0&&i[3]===0&&i[4]===0&&i[5]===0&&i[6]===0||c("/exam/collection/play?mode="+t)},a=t=>{if(!r){m();return}i[t]!==0&&c("/exam/collection/play?type="+t)},m=()=>{let t=encodeURIComponent(window.location.pathname+window.location.search);c("/login?redirect="+t)};return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"bread-nav",children:[e.jsx("a",{onClick:()=>{c("/exam")},children:"考试练习"})," ","/",e.jsx("span",{children:"收藏习题"})]}),e.jsxs("div",{className:s.banner,children:[e.jsx("div",{className:s.tit,children:"收藏习题"}),e.jsx("div",{className:s["btn-box"],children:e.jsx(q,{type:"primary",loading:n,className:s["btn-all-play"],onClick:()=>x("collect"),children:"全部练习"})})]}),e.jsxs("div",{className:s["question-box"],children:[n&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:s["question-item"],children:[e.jsx("div",{className:s["question-item-type"],children:"单选题"}),e.jsx(l.Button,{active:!0,style:{width:80,height:20}})]}),e.jsxs("div",{className:s["question-item"],children:[e.jsx("div",{className:s["question-item-type"],children:"多选题"}),e.jsx(l.Button,{active:!0,style:{width:80,height:20}})]}),e.jsxs("div",{className:s["question-item"],children:[e.jsx("div",{className:s["question-item-type"],children:"判断题"}),e.jsx(l.Button,{active:!0,style:{width:80,height:20}})]}),e.jsxs("div",{className:s["question-item"],children:[e.jsx("div",{className:s["question-item-type"],children:"填空题"}),e.jsx(l.Button,{active:!0,style:{width:80,height:20}})]}),e.jsxs("div",{className:s["question-item"],children:[e.jsx("div",{className:s["question-item-type"],children:"问答题"}),e.jsx(l.Button,{active:!0,style:{width:80,height:20}})]}),e.jsxs("div",{className:s["question-item"],children:[e.jsx("div",{className:s["question-item-type"],children:"题帽题"}),e.jsx(l.Button,{active:!0,style:{width:80,height:20}})]})]}),!n&&e.jsxs("div",{className:s["question-item"],onClick:()=>{i[1]!==0&&a(1)},children:[e.jsx("div",{className:s["question-item-type"],children:"单选题"}),e.jsxs("div",{className:s["question-item-num"],children:["已收藏",i[1],"题"]})]}),!n&&e.jsxs("div",{className:s["question-item"],onClick:()=>{i[2]!==0&&a(2)},children:[e.jsx("div",{className:s["question-item-type"],children:"多选题"}),e.jsxs("div",{className:s["question-item-num"],children:["已收藏",i[2],"题"]})]}),!n&&e.jsxs("div",{className:s["question-item"],onClick:()=>{i[5]!==0&&a(5)},children:[e.jsx("div",{className:s["question-item-type"],children:"判断题"}),e.jsxs("div",{className:s["question-item-num"],children:["已收藏",i[5],"题"]})]}),!n&&e.jsxs("div",{className:s["question-item"],onClick:()=>{i[3]!==0&&a(3)},children:[e.jsx("div",{className:s["question-item-type"],children:"填空题"}),e.jsxs("div",{className:s["question-item-num"],children:["已收藏",i[3],"题"]})]}),!n&&e.jsxs("div",{className:s["question-item"],onClick:()=>{i[4]!==0&&a(4)},children:[e.jsx("div",{className:s["question-item-type"],children:"问答题"}),e.jsxs("div",{className:s["question-item-num"],children:["已收藏",i[4],"题"]})]}),!n&&e.jsxs("div",{className:s["question-item"],onClick:()=>{i[6]!==0&&a(6)},children:[e.jsx("div",{className:s["question-item-type"],children:"题帽题"}),e.jsxs("div",{className:s["question-item-num"],children:["已收藏",i[6],"题"]})]})]})]})};export{b as default};
