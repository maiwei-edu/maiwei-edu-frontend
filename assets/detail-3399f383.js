import{u as Y,v as K,p as o,s as e,U as h,I as _e,D as je,E as fe,t as A,V as w,y as pe,F as be,G as Ne,H as ye,S as C,J as Pe}from"./index-d3b20173.js";import{d as Ce,a as Ae,M as Ke,b as Se,T as ke}from"./index-c911ac26.js";import{s as Le,d as ze,c as we,a as Te,b as Ee}from"./live-45f19a47.js";import{T as Oe}from"./index-e9655fcb.js";import{H as Ie}from"./index-7f88061e.js";import{E as De}from"./index-ce951dff.js";import{c as Be,n as Fe}from"./icon-collect-n-7dad1c8c.js";import{D as T}from"./index-4a249ac5.js";import{l as E}from"./icon-lock-b2682a8d.js";const Re=({cid:u,isBuy:f,comments:m,commentUsers:c,success:d})=>{const n=Y(),x=K(l=>l.loginUser.value.user),g=K(l=>l.loginUser.value.isLogin),[N,t]=o.useState(""),[S,p]=o.useState(!1),L=()=>{S||N!==""&&(p(!0),Le(u,{content:N}).then(()=>{A.success("成功"),t(""),p(!1),d()}).catch(l=>{p(!1)}))};return e.jsxs("div",{className:h["course-comments-box"],children:[e.jsx("div",{className:h["comment-divider"],children:"全部评论"}),e.jsx("div",{className:h.line}),g&&f&&e.jsx("div",{className:h.replybox,children:e.jsxs("div",{className:h.reply,children:[e.jsx("img",{className:h["user-avatar"],src:x.avatar}),e.jsx(_e,{value:N,onChange:l=>{t(l.target.value)},style:{width:960,height:48,marginRight:30,fontSize:16},placeholder:"此处填写你的评论"}),e.jsx(je,{type:"primary",disabled:N.length===0,style:{width:72,height:48,fontSize:16,border:"none"},onClick:()=>{L()},loading:S,children:"评论"})]})}),!g&&e.jsx("div",{className:h.replybox,children:e.jsx("div",{className:h.text,onClick:()=>n("/login"),children:"未登录，请登录后再评论"})}),e.jsxs("div",{className:h["comment-top"],children:[m.length===0&&e.jsx(De,{}),m.length>0&&m.map(l=>e.jsxs("div",{className:h["comment-item"],children:[e.jsx("div",{className:h["user-avatar"],children:e.jsx("img",{src:c[l.user_id].avatar})}),e.jsxs("div",{className:h["comment-content"],children:[e.jsxs("div",{className:h["comment-info"],children:[e.jsx("div",{className:h.nickname,children:c[l.user_id].nick_name}),e.jsx("div",{className:h["comment-time"],children:fe(l.created_at)})]}),e.jsx("div",{className:h["comment-text"],children:l.content})]})]},l.id))]})]})},Ue="_status_1t4ze_24",Je="_info_1t4ze_34",Me="_desc_1t4ze_61",Ve="_tabs_1t4ze_122",qe="_active_1t4ze_142",He="_actline_1t4ze_146",Qe="_teacher_1t4ze_163",Xe="_avatar_1t4ze_170",a={"course-info":"_course-info_1t4ze_1","course-info-box":"_course-info-box_1t4ze_7","course-thumb":"_course-thumb_1t4ze_16",status:Ue,info:Je,"course-info-title":"_course-info-title_1t4ze_40","collect-button":"_collect-button_1t4ze_53",desc:Me,"btn-box":"_btn-box_1t4ze_72","has-button":"_has-button_1t4ze_82","buy-button":"_buy-button_1t4ze_93","role-button":"_role-button_1t4ze_107",tabs:Ve,"item-tab":"_item-tab_1t4ze_131",active:qe,actline:He,"course-teacher-box":"_course-teacher-box_1t4ze_155",teacher:Qe,avatar:Xe,"teacher-desc":"_teacher-desc_1t4ze_185","coursr-desc":"_coursr-desc_1t4ze_196","course-chapter-box":"_course-chapter-box_1t4ze_208"},j={"chapter-item":"_chapter-item_fdyvi_1","chapter-videos-box":"_chapter-videos-box_fdyvi_9","video-item":"_video-item_fdyvi_14","play-icon":"_play-icon_fdyvi_27","video-title":"_video-title_fdyvi_32","video-info":"_video-info_fdyvi_40"},O="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAAXNSR0IArs4c6QAAAMZQTFRFAAAAAAD/AP//AID/M5n/JJL/QJ//M5n/Oar/OqL/Oq7/Oqj4PqX4Oab/Pqr/Pab5Oqr6O6f6O6f/PKn7PKf8PKj5PKj8O6j5Pqj8O6b6Paf8PKj8PKf6PKf6O6f7PKj7Paf7PKb5O6j5Paj7PKj7O6j6PKj6Paj6PKb6Paj8PKf6PKf7Paf7PKf7PKj7PKj6PKj7PKf6O6f6PKj6PKf6PKf6O6f6O6f7O6f6PKj7PKj7PKf7PKf7PKf6O6f6PKf6PKj7PKf6YRUfqAAAAEF0Uk5TAAEBAgUHCAoSFhYjJSgtLjA0NERRVVVbW19gYWJudHuGh4qKjJuhpKeoqaqwt77Pz9bX2Nze8PDx8vP09vz9/v72PrOHAAABDElEQVQ4y63TW1eCUBCG4QmJjnZS0spQycKyJIJKypT3//+pblCptYG58Lsb1rPYe6+ZEfkb2w3iNI0D15bKtBPyJO0K1vAz1sn8Rim8A4gGN71hBOCXnpvBZ8cSEbG6M8hKTrcT+DhZVaczSMwvugQ6m7ILuEYYwFuhtCIIjDCGQbEeQmyEKVwV6x6kRvj/TufwroJyfX+mg2XZKnS8cI4x89BzNu4wpCLhwRpOqcx05VrUpJXDUR0c5XBcB8c5nBQ/fhvgxAD7O8cPPxq4KyLNp0U9zPfgeamDIhcvSihyq4X7W/6j8o6KV++JSPNxoenMka4zfC3Le62eHvU8qidcvTP6LRTHe63b619kWNM+ogbJWAAAAABJRU5ErkJggg==",Ge=({course:u,videos:f,isBuy:m,switchVideo:c})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:j["chapter-item"],children:e.jsx("div",{className:j["chapter-videos-box"],children:f.length>0&&f.map(d=>e.jsxs("div",{className:j["video-item"],onClick:()=>c(d),children:[m&&e.jsx("img",{className:j["play-icon"],src:O}),!m&&e.jsx("img",{className:j["play-icon"],src:E}),e.jsx("div",{className:j["video-title"],children:e.jsx("div",{className:j.text,children:d.title})}),e.jsxs("div",{className:j["video-info"],children:[d.status===0&&e.jsx("span",{style:{color:"#3ca7fa"},children:w(d.published_at)}),d.status===1&&e.jsx("span",{style:{color:"#04c877"},children:"直播中"}),d.status===2&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"已结束 "}),e.jsx(T,{seconds:d.duration})]})]})]},d.id))})})}),r={"chapter-item":"_chapter-item_15634_1","chapter-name":"_chapter-name_15634_9","chapter-videos-box":"_chapter-videos-box_15634_25","video-item":"_video-item_15634_30","play-icon":"_play-icon_15634_43","video-title":"_video-title_15634_48","video-info":"_video-info_15634_57"},Ye=({chapters:u,course:f,videos:m,isBuy:c,switchVideo:d})=>e.jsxs("div",{children:[u.map(n=>e.jsxs("div",{className:r["chapter-item"],children:[e.jsx("div",{className:r["chapter-name"],children:n.name}),e.jsx("div",{className:r["chapter-videos-box"],children:m[n.id]&&m[n.id].length>0&&m[n.id].map(x=>e.jsxs("div",{className:r["video-item"],onClick:()=>d(x),children:[c&&e.jsx("img",{className:r["play-icon"],src:O}),!c&&e.jsx("img",{className:r["play-icon"],src:E}),e.jsx("div",{className:r["video-title"],children:e.jsx("div",{className:r.text,children:x.title})}),e.jsxs("div",{className:r["video-info"],children:[x.status===0&&e.jsx("span",{style:{color:"#3ca7fa"},children:w(x.published_at)}),x.status===1&&e.jsx("span",{style:{color:"#04c877"},children:"直播中"}),x.status===2&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"已结束 "}),e.jsx(T,{seconds:x.duration})]})]})]},x.id))})]},n.id)),m[0]&&m[0].length>0&&e.jsxs("div",{className:r["chapter-item"],children:[e.jsx("div",{className:r["chapter-name"],children:"无章节内容"}),e.jsx("div",{className:r["chapter-videos-box"],children:m[0].map(n=>e.jsxs("div",{className:r["video-item"],onClick:()=>d(n),children:[c&&e.jsx("img",{className:r["play-icon"],src:O}),!c&&e.jsx("img",{className:r["play-icon"],src:E}),e.jsx("div",{className:r["video-title"],children:e.jsx("div",{className:r.text,children:n.title})}),e.jsxs("div",{className:r["video-info"],children:[n.status===0&&e.jsx("span",{style:{color:"#3ca7fa"},children:w(n.published_at)}),n.status===1&&e.jsx("span",{style:{color:"#04c877"},children:"直播中"}),n.status===2&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"已结束 "}),e.jsx(T,{seconds:n.duration})]})]})]},n.id))})]})]}),cs=()=>{const u=Y(),f=new URLSearchParams(pe().search),m=be(),[c,d]=o.useState(!1),[n,x]=o.useState(!1),[g,N]=o.useState(Number(m.courseId)),[t,S]=o.useState({}),[p,L]=o.useState([]),[l,$]=o.useState({}),[_,W]=o.useState(!1),[k,I]=o.useState(!1),[i,Z]=o.useState({}),[ee,D]=o.useState(!1),[v,se]=o.useState({}),[B,te]=o.useState(!1),[ae,F]=o.useState([]),[ie,R]=o.useState({}),[b,oe]=o.useState(Number(f.get("tab"))||2),[ce,U]=o.useState(!1),z=K(s=>s.systemConfig.value.configFunc);K(s=>s.systemConfig.value.config);const y=K(s=>s.loginUser.value.isLogin),J=[{name:"直播详情",id:2},{name:"直播排课",id:3},{name:"课程评论",id:4}];o.useEffect(()=>(ne(),V(),le(),window.addEventListener("scroll",Q,!0),()=>{window.removeEventListener("scroll",Q,!0)}),[g]),o.useEffect(()=>{Ne(document.getElementById("desc")),ye(document.getElementById("desc"))},[document.getElementById("desc")]);const ne=()=>{c||(d(!0),ze(g).then(s=>{document.title=s.data.course.title,S(s.data.course),L(s.data.chapters),W(s.data.is_buy),$(s.data.videos),!s.data.is_buy&&z.miaosha?re():!s.data.is_buy&&z.tuangou&&M(),d(!1)}))},re=()=>{t.charge!==0&&Ce(0,{course_id:g,course_type:"live"}).then(s=>{Z(s.data),!s.data.data&&!_&&z.tuangou&&M()})},M=()=>{t.charge!==0&&Ae(0,{course_id:g,course_type:"live"}).then(s=>{se(s.data),te(s.data.join_item&&s.data.join_item.length!==0)})},V=()=>{n||(x(!0),we(g,{page:1,size:1e4}).then(s=>{F(s.data.data.data),R(s.data.users),x(!1)}))},de=()=>{x(!1),F([]),R({})},le=()=>{Te({id:g,type:"live"}).then(s=>{I(s.data.like)})},q=s=>{oe(s),u("/live/detail/"+g+"?tab="+s)},H=()=>{y?Ee({id:g,type:"live"}).then(s=>{I(!k),k?A.success("取消收藏"):A.success("已收藏")}):P()},P=()=>{let s=encodeURIComponent(window.location.pathname+window.location.search);u("/login?redirect="+s)},Q=()=>{let s=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,G=document.querySelector("#NavBar");if(G){let ve=G.offsetTop;s>ve?U(!0):U(!1)}},he=()=>{u("/vip")},me=()=>{if(!y){P();return}u("/order?goods_id="+g+"&goods_type=live&goods_charge="+t.charge+"&goods_label=直播课程&goods_name="+t.title+"&goods_thumb="+t.thumb)},ue=s=>{u("/order?course_id="+i.data.goods_id+"&course_type="+i.data.goods_type+"&goods_type=ms&goods_charge="+i.data.charge+"&goods_label=秒杀&goods_name="+i.data.goods_title+"&goods_id="+s+"&goods_thumb="+i.data.goods_thumb)},xe=(s=0)=>{if(!y){P();return}u("/order?course_id="+v.goods.other_id+"&course_type="+v.goods.goods_type+"&goods_type=tg&goods_charge="+v.goods.charge+"&goods_label=团购&goods_name="+v.goods.goods_title+"&goods_id="+v.goods.id+"&goods_thumb="+v.goods.goods_thumb+"&tg_gid="+s)},ge=()=>{if(!y){P();return}D(!0)},X=s=>{if(!y){P();return}if(_===!1){A.error("请购买课程后观看");return}if(s.status===2&&s.duration===0){A.error("直播已结束");return}u("/live/video/"+s.id)};return e.jsxs(e.Fragment,{children:[ce&&e.jsx("div",{className:"fix-nav",children:e.jsx("div",{className:"course-tabs",children:J.map(s=>e.jsxs("div",{className:b===s.id?"active item-tab":"item-tab",onClick:()=>q(s.id),children:[s.name,b===s.id&&e.jsx("div",{className:"actline"})]},s.id))})}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"bread-nav",children:[c&&e.jsx(C.Button,{active:!0,style:{width:1200,height:14,marginLeft:0}}),!c&&e.jsxs(e.Fragment,{children:[e.jsx("a",{onClick:()=>{u("/")},children:"首页"})," ","/",e.jsx("a",{onClick:()=>{u("/live")},children:"直播课"})," ","/",e.jsx("span",{children:t.title})]})]}),e.jsx(Ie,{id:t.id,title:t.title,type:"live"}),!_&&i&&e.jsx(Ke,{open:ee,msData:i,onCancel:()=>D(!1)}),e.jsxs("div",{className:a["course-info"],children:[e.jsxs("div",{className:a["course-info-box"],children:[e.jsxs("div",{className:a["course-thumb"],children:[c&&e.jsx(C.Button,{active:!0,style:{width:320,height:240,borderRadius:8}}),!c&&e.jsxs(e.Fragment,{children:[e.jsx(Oe,{value:t.thumb,width:320,height:240,border:null}),e.jsx("div",{className:a.status,children:t.status_text})]})]}),e.jsxs("div",{className:a.info,children:[c&&e.jsxs("div",{style:{width:710,display:"flex",flexDirection:"column"},children:[e.jsx(C.Button,{active:!0,style:{width:710,height:30,marginTop:20}}),e.jsx(C.Button,{active:!0,style:{width:710,height:16,marginTop:21}})]}),e.jsx("div",{className:a["course-info-title"],children:t.title}),!c&&k&&e.jsx("img",{onClick:()=>{H()},className:a["collect-button"],src:Be}),!c&&!k&&e.jsx("img",{onClick:()=>{H()},className:a["collect-button"],src:Fe}),e.jsx("p",{className:a.desc,children:t.short_description}),e.jsxs("div",{className:a["btn-box"],children:[!_&&t.charge!==0&&e.jsxs(e.Fragment,{children:[i&&i.data&&e.jsxs(e.Fragment,{children:[i.order&&i.order.status===0&&e.jsx("div",{className:a["buy-button"],onClick:()=>ue(i.order.id),children:"已获得秒杀资格，请尽快支付"}),(!i.order||i.order.status!==0)&&!i.data.is_over&&e.jsxs("div",{className:a["buy-button"],onClick:()=>ge(),children:["立即秒杀￥",i.data.charge]})]}),(!i||!i.data)&&e.jsxs(e.Fragment,{children:[B&&e.jsx("div",{className:a["has-button"],children:"正在拼团中"}),!B&&t.charge>0&&e.jsxs("div",{className:a["buy-button"],onClick:()=>me(),children:["订阅课程￥",t.charge]}),t.vip_can_view===1&&!Pe.disable_vip&&e.jsx("div",{className:a["role-button"],onClick:()=>he(),children:"会员免费看"}),v&&v.goods&&(!v.join_item||v.join_item.length===0)&&e.jsxs("div",{className:a["role-button"],onClick:()=>xe(0),children:["单独开团￥",v.goods.charge]})]})]}),t.charge===0&&e.jsx("div",{className:a["has-button"],children:"本课程免费"}),t.charge!==0&&_&&e.jsx("div",{className:a["has-button"],children:"课程已购买"})]})]})]}),!_&&i&&e.jsx(Se,{msData:i}),!_&&i&&e.jsx(ke,{tgData:v}),e.jsx("div",{className:"course-tabs",id:"NavBar",children:J.map(s=>e.jsxs("div",{className:b===s.id?"active item-tab":"item-tab",onClick:()=>q(s.id),children:[s.name,b===s.id&&e.jsx("div",{className:"actline"})]},s.id))})]}),c&&e.jsx("div",{className:a["course-teacher-box"],children:e.jsx(C,{active:!0,paragraph:{rows:1}})}),b===2&&t.teacher&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:a["course-teacher-box"],children:[t.teacher&&e.jsxs("div",{className:a.teacher,children:[e.jsx("img",{className:a.avatar,src:t.teacher.avatar}),e.jsx("a",{children:t.teacher.name})]}),e.jsx("p",{className:a["teacher-desc"],children:t.teacher.short_desc})]}),e.jsx("div",{className:a["coursr-desc"],children:e.jsx("div",{className:"u-content md-content",id:"desc",dangerouslySetInnerHTML:{__html:t.render_desc}})})]}),b===3&&e.jsxs("div",{className:a["course-chapter-box"],children:[p.length>0&&e.jsx(Ye,{chapters:p,course:t,videos:l,isBuy:_,switchVideo:s=>X(s)}),p.length===0&&l[0]&&e.jsx(Ge,{course:t,videos:l[0],isBuy:_,switchVideo:s=>X(s)})]}),b===4&&e.jsx(Re,{cid:g,isBuy:_,comments:ae,commentUsers:ie,success:()=>{de(),V()}})]})]})};export{cs as default};