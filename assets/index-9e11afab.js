import{u as j,y as v,p as c,v as q,s as e,D as N,S as o}from"./index-d3b20173.js";import{d as y}from"./wrongbook-6d3a5e50.js";const p="_banner_5owmw_1",w="_tit_5owmw_12",s={banner:p,tit:w,"btn-box":"_btn-box_5owmw_22","day-play":"_day-play_5owmw_28","btn-all-play":"_btn-all-play_5owmw_45","question-box":"_question-box_5owmw_62","question-item":"_question-item_5owmw_68","question-item-type":"_question-item-type_5owmw_84","qquestion-item-num":"_qquestion-item-num_5owmw_91"},b=()=>{document.title="考试错题本";const l=j();new URLSearchParams(v().search);const[n,m]=c.useState(!1),[i,u]=c.useState({}),r=q(t=>t.loginUser.value.isLogin);c.useEffect(()=>{h()},[]);const h=()=>{n||(m(!0),y({}).then(t=>{u(t.data.types_count),m(!1)}))},x=t=>{if(!r){d();return}i[1]===0&&i[2]===0&&i[3]===0&&i[4]===0&&i[5]===0&&i[6]===0||l("/exam/wrongbook/play?mode="+t)},a=t=>{if(!r){d();return}i[t]!==0&&l("/exam/wrongbook/play?type="+t)},d=()=>{let t=encodeURIComponent(window.location.pathname+window.location.search);l("/login?redirect="+t)};return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"bread-nav",children:[e.jsx("a",{onClick:()=>{l("/exam")},children:"考试练习"})," ","/",e.jsx("span",{children:"考试错题本"})]}),e.jsxs("div",{className:s.banner,children:[e.jsx("div",{className:s.tit,children:"考试错题本"}),e.jsx("div",{className:s["btn-box"],children:e.jsx(N,{type:"primary",loading:n,className:s["btn-all-play"],onClick:()=>x("order"),children:"全部练习"})})]}),e.jsxs("div",{className:s["question-box"],children:[n&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:s["question-item"],children:[e.jsx("div",{className:s["question-item-type"],children:"单选题"}),e.jsx(o.Button,{active:!0,style:{width:80,height:20}})]}),e.jsxs("div",{className:s["question-item"],children:[e.jsx("div",{className:s["question-item-type"],children:"多选题"}),e.jsx(o.Button,{active:!0,style:{width:80,height:20}})]}),e.jsxs("div",{className:s["question-item"],children:[e.jsx("div",{className:s["question-item-type"],children:"判断题"}),e.jsx(o.Button,{active:!0,style:{width:80,height:20}})]}),e.jsxs("div",{className:s["question-item"],children:[e.jsx("div",{className:s["question-item-type"],children:"填空题"}),e.jsx(o.Button,{active:!0,style:{width:80,height:20}})]}),e.jsxs("div",{className:s["question-item"],children:[e.jsx("div",{className:s["question-item-type"],children:"问答题"}),e.jsx(o.Button,{active:!0,style:{width:80,height:20}})]}),e.jsxs("div",{className:s["question-item"],children:[e.jsx("div",{className:s["question-item-type"],children:"题帽题"}),e.jsx(o.Button,{active:!0,style:{width:80,height:20}})]})]}),!n&&e.jsxs("div",{className:s["question-item"],onClick:()=>{i[1]!==0&&a(1)},children:[e.jsx("div",{className:s["question-item-type"],children:"单选题"}),e.jsxs("div",{className:s["question-item-num"],children:["共",i[1],"题错题"]})]}),!n&&e.jsxs("div",{className:s["question-item"],onClick:()=>{i[2]!==0&&a(2)},children:[e.jsx("div",{className:s["question-item-type"],children:"多选题"}),e.jsxs("div",{className:s["question-item-num"],children:["共",i[2],"题错题"]})]}),!n&&e.jsxs("div",{className:s["question-item"],onClick:()=>{i[5]!==0&&a(5)},children:[e.jsx("div",{className:s["question-item-type"],children:"判断题"}),e.jsxs("div",{className:s["question-item-num"],children:["共",i[5],"题错题"]})]}),!n&&e.jsxs("div",{className:s["question-item"],onClick:()=>{i[3]!==0&&a(3)},children:[e.jsx("div",{className:s["question-item-type"],children:"填空题"}),e.jsxs("div",{className:s["question-item-num"],children:["共",i[3],"题错题"]})]}),!n&&e.jsxs("div",{className:s["question-item"],onClick:()=>{i[4]!==0&&a(4)},children:[e.jsx("div",{className:s["question-item-type"],children:"问答题"}),e.jsxs("div",{className:s["question-item-num"],children:["共",i[4],"题错题"]})]}),!n&&e.jsxs("div",{className:s["question-item"],onClick:()=>{i[6]!==0&&a(6)},children:[e.jsx("div",{className:s["question-item-type"],children:"题帽题"}),e.jsxs("div",{className:s["question-item-num"],children:["共",i[6],"题错题"]})]})]})]})};export{b as default};