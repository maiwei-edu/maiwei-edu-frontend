import{u as q,F as J,p as n,v as R,s as e,S as d,D,t as l}from"./index-c4424654.js";import{d as P,j as Q}from"./mock-9f1731cd.js";import{E as O}from"./index-2b1e8b68.js";const U="_title_1j0ha_12",M="_info_1j0ha_23",T="_tit_1j0ha_12",$="_records_1j0ha_101",z="_red_1j0ha_156",a={"banner-box":"_banner-box_1j0ha_1",title:U,info:M,"info-item":"_info-item_1j0ha_30","btn-box":"_btn-box_1j0ha_44","join-button":"_join-button_1j0ha_51","charge-button":"_charge-button_1j0ha_67","vip-button":"_vip-button_1j0ha_84","records-box":"_records-box_1j0ha_101",tit:T,records:$,"record-item":"_record-item_1j0ha_126","item-time":"_item-time_1j0ha_138","item-type":"_item-type_1j0ha_147",red:z,"item-pro":"_item-pro_1j0ha_159","item-status":"_item-status_1j0ha_171"},W=()=>{const r=q(),u=J(),[o,m]=n.useState(!1),[i,b]=n.useState({}),[s,N]=n.useState([]),[h,y]=n.useState([]),[j,S]=n.useState(!1),[A,I]=n.useState(0),[G,w]=n.useState([]),[B,k]=n.useState(0),[x,p]=n.useState(!1),[c,C]=n.useState(Number(u.courseId)||0),_=R(t=>t.loginUser.value.isLogin);n.useEffect(()=>{E()},[c]),n.useEffect(()=>{C(Number(u.courseId))},[u.courseId]),n.useEffect(()=>{let t=0;s.num&&s.num.choice&&(t=t+parseInt(s.num.choice)),s.num&&s.num.select&&(t=t+parseInt(s.num.select)),s.num&&s.num.input&&(t=t+parseInt(s.num.input)),s.num&&s.num.qa&&(t=t+parseInt(s.num.qa)),s.num&&s.num.judge&&(t=t+parseInt(s.num.judge)),s.num&&s.num.cap&&(t=t+parseInt(s.num.cap)),k(t)},[s]);const E=()=>{o||(m(!0),P(c).then(t=>{document.title=t.data.paper.title,b(t.data.paper),N(JSON.parse(t.data.paper.rule)),y(t.data.user_papers),S(t.data.can),I(t.data.join_count),w(t.data.required_courses),m(!1)}).catch(t=>{m(!1)}))},g=t=>{if(!_){f();return}if(!x){if(j===!1){l.error("无权限参与");return}if(typeof t<"u"){if(t.status===3){l.error("请等待阅卷完成查看");return}r("/exam/mockpaper/play?id="+c+"&pid="+t.id);return}p(!0),Q(c).then(v=>{p(!1);let L=v.data.recordId;r("/exam/mockpaper/play?id="+c+"&pid="+L)}).catch(v=>{p(!1)})}},f=()=>{let t=encodeURIComponent(window.location.pathname+window.location.search);r("/login?redirect="+t)},F=()=>{if(!_){f();return}if(i.charge===0){l.error("当前试卷无法购买");return}if(i.enabled_invite===1){l.error("当前试卷仅限邀请用户参与");return}r("/order?goods_id="+c+"&goods_type=mockpaper&goods_charge="+i.charge+"&goods_label=模拟试卷&goods_name="+i.title)};return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"bread-nav",children:[e.jsx("a",{onClick:()=>{r("/exam")},children:"考试练习"})," ","/",e.jsx("a",{onClick:()=>{r("/exam/mockpaper")},children:"模拟考试"})," ","/",e.jsx("span",{children:i.title})]}),e.jsxs("div",{className:a["banner-box"],children:[o&&e.jsxs("div",{style:{width:1200,display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(d.Button,{active:!0,style:{width:300,height:28,marginTop:50,marginBottom:30}}),e.jsx(d.Button,{active:!0,style:{width:600,height:14,marginBottom:50}}),e.jsx(d.Button,{active:!0,style:{width:104,height:40,borderRadius:4}})]}),!o&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:a.title,children:i.title}),e.jsxs("div",{className:a.info,children:[e.jsxs("div",{className:a["info-item"],children:["及格分：",i.pass_score,"分"]}),e.jsx("i",{}),e.jsxs("div",{className:a["info-item"],children:["题数：",B,"道"]}),e.jsx("i",{}),e.jsx("div",{className:a["info-item"],children:"可考试次数：不限"})]}),e.jsx("div",{className:a["btn-box"],children:e.jsxs(e.Fragment,{children:[!j&&i.charge>0&&e.jsxs("div",{className:a["charge-button"],onClick:()=>F(),children:["购买试卷 ￥",i.charge]}),j&&e.jsx(D,{type:"primary",loading:x,className:a["join-button"],onClick:()=>g(void 0),children:"立即考试"})]})})]})]}),e.jsxs("div",{className:a["records-box"],children:[e.jsx("div",{className:a.tit,children:"考试记录"}),e.jsxs("div",{className:a.records,children:[o&&e.jsxs("div",{style:{width:1140,display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(d.Button,{active:!0,style:{width:1140,height:14,marginBottom:30}}),e.jsx(d.Button,{active:!0,style:{width:1140,height:14,marginBottom:30}}),e.jsx(d.Button,{active:!0,style:{width:1140,height:14,marginBottom:30}})]}),!o&&h.length===0&&e.jsx(O,{}),!o&&h.length>0&&e.jsx(e.Fragment,{children:h.map(t=>e.jsxs("div",{className:a["record-item"],children:[e.jsx("div",{className:a["item-type"],children:e.jsxs(e.Fragment,{children:[t.status===1&&e.jsxs("span",{children:[t.get_score,"分"]}),t.status!==1&&e.jsx("span",{className:a.red,children:"未完成"})]})}),e.jsx("div",{className:a["item-pro"],children:e.jsxs(e.Fragment,{children:[t.status!==1&&e.jsx("span",{children:"考试中"}),t.status===1&&e.jsx("span",{children:"已结束"})]})}),e.jsx("div",{className:a["item-status"],onClick:()=>g(t),children:e.jsxs(e.Fragment,{children:[t.status!==1&&e.jsx("span",{className:a.red,children:"继续考试"}),t.status===1&&e.jsx("span",{children:"考试详情"})]})})]},t.id))})]})]})]})};export{W as default};