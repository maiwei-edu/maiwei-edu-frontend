import{u as R,F as z,p as r,v,s as e,S as g}from"./index-d3b20173.js";import{d as J,a as V,M as q,b as O,T as X}from"./index-c911ac26.js";import{d as Y}from"./path-cac33063.js";import{T as b}from"./index-e9655fcb.js";import{p as G}from"./default-paper-c83eabd4.js";const H="_status_1w64l_26",K="_info_1w64l_36",W="_desc_1w64l_63",Z="_original_1w64l_138",$="_icon_1w64l_178",I="_column_1w64l_182",ee="_spback_1w64l_244",t={"book-info":"_book-info_1w64l_1","book-info-box":"_book-info-box_1w64l_9","book-thumb":"_book-thumb_1w64l_18",status:H,info:K,"book-info-title":"_book-info-title_1w64l_42","collect-button":"_collect-button_1w64l_55",desc:W,"btn-box":"_btn-box_1w64l_74","has-button":"_has-button_1w64l_84","see-button":"_see-button_1w64l_95","buy-button":"_buy-button_1w64l_109","role-button":"_role-button_1w64l_123",original:Z,"book-chapter-box":"_book-chapter-box_1w64l_149","steps-box":"_steps-box_1w64l_157","step-item":"_step-item_1w64l_161","left-item":"_left-item_1w64l_170",icon:$,column:I,"right-item":"_right-item_1w64l_189","step-title":"_step-title_1w64l_195","step-desc":"_step-desc_1w64l_205","courses-box":"_courses-box_1w64l_217","course-item":"_course-item_1w64l_221","course-thumb":"_course-thumb_1w64l_234",spback:ee,"active-thumb-bar":"_active-thumb-bar_1w64l_253","thumb-bar":"_thumb-bar_1w64l_260","course-body":"_course-body_1w64l_267","course-type":"_course-type_1w64l_273","course-name":"_course-name_1w64l_286","course-charge":"_course-charge_1w64l_299","course-free":"_course-free_1w64l_306"},se="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAAXNSR0IArs4c6QAAADxQTFRFAAAA//8Ak1Pf5KgA46cA4aQA46cAzY87klTe4aUAvYBn4aYA2Jwb4aUAzpE2qm2c4aUAk1XevH9p4aUACmT2egAAABF0Uk5TAAEoLzdDWlteb3yGmJmy3/xS7v4vAAAAYUlEQVQ4y+3TOQ6AMAxE0Qn7TsD3vyuiiNPBrxBFfjl6kitLuerwBj31NZxzy+ltaRtDgvbSGiB0aVQalUalUWlUMhgbBmPHTt9O1Ik6USfqRJ3aXL97U9rqP/xMgQX+CF7o6zqa1ZKWvwAAAABJRU5ErkJggg==",le=()=>{const l=R(),m=z(),[d,j]=r.useState(!1),[_,y]=r.useState(Number(m.courseId)),[n,N]=r.useState(!1),[o,k]=r.useState({}),[f,B]=r.useState([]),[a,C]=r.useState({}),[S,A]=r.useState(!1),[i,D]=r.useState({}),[p,U]=r.useState(!1),x=v(s=>s.systemConfig.value.configFunc);v(s=>s.systemConfig.value.config);const u=v(s=>s.loginUser.value.isLogin);r.useEffect(()=>{T()},[_]),r.useEffect(()=>{y(Number(m.courseId))},[m.courseId]);const T=()=>{d||(j(!0),Y(_).then(s=>{document.title=s.data.data.name,k(s.data.data),B(s.data.steps),N(s.data.is_buy),!s.data.is_buy&&x.miaosha?F():!s.data.is_buy&&x.tuangou&&w(),j(!1)}))},F=()=>{o.charge!==0&&J(0,{course_id:_,course_type:"learnPath"}).then(s=>{C(s.data),!s.data.data&&!n&&x.tuangou&&w()})},w=()=>{o.charge!==0&&V(0,{course_id:_,course_type:"learnPath"}).then(s=>{D(s.data),U(s.data.join_item&&s.data.join_item.length!==0)})},h=()=>{let s=encodeURIComponent(window.location.pathname+window.location.search);l("/login?redirect="+s)},L=()=>{if(!u){h();return}A(!0)},M=s=>{l("/order?course_id="+a.data.goods_id+"&course_type="+a.data.goods_type+"&goods_type=ms&goods_charge="+a.data.charge+"&goods_label=秒杀&goods_name="+a.data.goods_title+"&goods_id="+s+"&goods_thumb="+a.data.goods_thumb)},E=()=>{if(!u){h();return}l("/order?goods_id="+_+"&goods_type=path&goods_charge="+o.charge+"&goods_label=学习路径&goods_name="+o.name+"&goods_thumb="+o.thumb)},P=(s=0)=>{if(!u){h();return}l("/order?course_id="+i.goods.other_id+"&course_type="+i.goods.goods_type+"&goods_type=tg&goods_charge="+i.goods.charge+"&goods_label=团购&goods_name="+i.goods.goods_title+"&goods_id="+i.goods.id+"&goods_thumb="+i.goods.goods_thumb+"&tg_gid="+s)},Q=s=>{if(!u){h();return}s.type==="course"?l("/courses/detail/"+s.other_id):s.type==="book"?l("/book/detail/"+s.other_id):s.type==="live"?l("/live/detail/"+s.other_id):s.type==="paper_practice"?l("/exam/practice/detail/"+s.other_id):s.type==="paper_paper"&&l("/exam/papers/detail/"+s.other_id)};return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"bread-nav",children:[d&&e.jsx(g.Button,{active:!0,style:{width:1200,height:14,marginLeft:0}}),!d&&e.jsxs(e.Fragment,{children:[e.jsx("a",{onClick:()=>{l("/")},children:"首页"})," ","/",e.jsx("a",{onClick:()=>{l("/learnPath")},children:"学习路径"})," ","/",e.jsx("span",{children:o.name})]})]}),!n&&a&&e.jsx(q,{open:S,msData:a,onCancel:()=>A(!1)}),e.jsxs("div",{className:t["book-info"],children:[e.jsxs("div",{className:t["book-info-box"],children:[e.jsxs("div",{className:t["book-thumb"],children:[d&&e.jsx(g.Button,{active:!0,style:{width:320,height:240,borderRadius:8}}),e.jsx(b,{value:o.thumb,width:320,height:240,border:null})]}),e.jsxs("div",{className:t.info,children:[d&&e.jsxs("div",{style:{width:710,display:"flex",flexDirection:"column"},children:[e.jsx(g.Button,{active:!0,style:{width:710,height:30,marginTop:20}}),e.jsx(g.Button,{active:!0,style:{width:710,height:16,marginTop:21}})]}),e.jsx("div",{className:t["book-info-title"],children:o.name}),e.jsx("p",{className:t.desc,children:o.desc}),!d&&e.jsxs("div",{className:t["btn-box"],children:[n&&e.jsx("div",{className:t["has-button"],children:"已购买"}),o.charge===0&&!n&&e.jsx("div",{className:t["has-button"],children:"本路径免费"}),!n&&o.charge!==0&&e.jsxs(e.Fragment,{children:[a&&a.data&&e.jsxs(e.Fragment,{children:[a.order&&a.order.status===0&&e.jsx("div",{className:t["buy-button"],onClick:()=>M(a.order.id),children:"已获得秒杀资格，请尽快支付"}),(!a.order||a.order.status!==0)&&!a.data.is_over&&e.jsxs("div",{className:t["buy-button"],onClick:()=>L(),children:["立即秒杀￥",a.data.charge]})]}),(!a||!a.data)&&e.jsxs(e.Fragment,{children:[p&&e.jsx("div",{className:t["has-button"],children:"正在拼团中"}),!p&&o.charge>0&&e.jsxs("div",{className:t["buy-button"],onClick:()=>E(),children:["购买套餐￥",o.charge,"（共",o.courses_count,"课程）"]}),i&&i.goods&&(!i.join_item||i.join_item.length===0)&&e.jsxs("div",{className:t["role-button"],onClick:()=>P(0),children:["单独开团￥",i.goods.charge]})]}),!p&&e.jsxs("div",{className:t.original,children:["原价:￥",o.original_charge]})]})]})]})]}),!n&&a&&e.jsx(O,{msData:a}),!n&&i&&e.jsx(X,{tgData:i})]}),f.length>0&&e.jsx("div",{className:t["book-chapter-box"],children:e.jsx("div",{className:t["steps-box"],children:f.map(s=>e.jsxs("div",{className:t["step-item"],children:[e.jsxs("div",{className:t["left-item"],children:[e.jsx("img",{className:t.icon,src:se}),e.jsx("div",{className:t.column})]}),e.jsxs("div",{className:t["right-item"],children:[e.jsx("div",{className:t["step-title"],children:s.name}),e.jsx("div",{className:t["step-desc"],children:s.desc}),s.courses.length>0&&e.jsx("div",{className:t["courses-box"],children:s.courses.map(c=>e.jsxs("div",{className:t["course-item"],onClick:()=>Q(c),children:[e.jsxs("div",{className:t["course-thumb"],children:[e.jsx("div",{className:t.spback}),c.type==="book"?e.jsx("div",{className:t["active-thumb-bar"],children:e.jsx(b,{value:o.thumb,width:75,height:100,border:4})}):c.type==="paper_paper"||c.type==="paper_practice"||c.type==="paper_mock_paper"?e.jsx("div",{className:t["thumb-bar"],children:e.jsx(b,{value:G,width:133,height:100,border:4})}):e.jsx("div",{className:t["thumb-bar"],children:e.jsx(b,{value:c.thumb,width:133,height:100,border:4})})]}),e.jsxs("div",{className:t["course-body"],children:[e.jsxs("div",{className:t["course-name"],children:[" ",c.name]}),e.jsx("div",{className:t["course-type"],children:c.type_text}),c.charge===0&&e.jsx("div",{className:t["course-free"],children:"免费"}),c.charge!==0&&e.jsxs("div",{className:t["course-charge"],children:["原价:￥",c.charge]})]})]},c.id))})]})]},s.id))})})]})};export{le as default};
