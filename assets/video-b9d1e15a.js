import{W as q,p as t,v as J,K as Fe,t as re,s as e,X as ce,Y as lt,u as ot,F as ct,I as rt}from"./index-d3b20173.js";import{p as it}from"./live-45f19a47.js";import{E as dt}from"./index-ce951dff.js";import{b as ut}from"./icon-back-h-0fef6b27.js";function mt(c,l,d){return q.post(`/addons/zhibo/api/v1/course/${c}/video/${l}/chat/send`,d)}function _t(c,l,d){return q.get(`/addons/zhibo/api/v1/course/${c}/video/${l}/chat/msg`,d)}function ft(c,l,d){return q.post(`/addons/zhibo/api/v1/course/${c}/video/${l}/signIn/${d}`,{})}function ht(c,l,d){return q.post(`/addons/zhibo/api/v1/course/${c}/video/${l}/liveWatchRecord`,d)}function vt(c,l,d){return q.post(`/addons/zhibo/api/v1/course/${c}/video/${l}/vodWatchRecord`,d)}function bt(c,l,d){return q.get(`/addons/zhibo/api/v1/course/${c}/video/${l}/attach/index`,d)}var Y=null;const gt=({chat:c,enabledChat:l,enabledMessage:d,cid:b,vid:y,disabled:u,change:r,sign:_,endSign:j})=>{const[L,w]=t.useState(""),[f,v]=t.useState(""),[C,h]=t.useState({}),[ie,E]=t.useState(!1),[de,$]=t.useState(!1),[G,Z]=t.useState(!1),[B,S]=t.useState(1),[ee,P]=t.useState(100),[ue,i]=t.useState(0),[me,K]=t.useState(null),[N,p]=t.useState([]),[U,z]=t.useState(!1),[F,D]=t.useState(!1),te=J(a=>a.loginUser.value.user);t.useEffect(()=>{c&&typeof c<"u"&&(w(c.channel),h(c.user),v(c.connect_url),l&&b&&y&&_e(c.connect_url,String(b),String(y))),E(!0),ae()},[c,b,y,l]),t.useEffect(()=>{ie&&he()},[N]),t.useEffect(()=>{z(!!u),D(!!d)},[u,d]);const se=()=>{E(!1);let a=B;a++,S(a),ae()},_e=(a,g,T)=>{let k=a;k=k.replace(":courseId",g),k=k.replace(":videoId",T),k=k.replace(":token",Fe()),"WebSocket"in window?(Y=new WebSocket(k),Y.onopen=()=>{Q("connect-success")},Y.onclose=W=>{Q("losed")},Y.onmessage=W=>{E(!0);let m=JSON.parse(W.data);if(m.t==="message"){let I=JSON.parse(m.v),R=N;R.push({msg_body:I}),p([...R])}else if(m.t==="connect"){let I=N;I.push({local:1,msg_body:{chat_id:0},content:m.u.nickname+"已加入"}),p([...I])}else if(m.t==="sign-in-created")_(m.params);else if(m.t==="sign-in-closed")j();else if(m.t==="room-ban")D(!0),r(U,!0);else if(m.t==="room-user-ban"&&m.params[0]===te.id)z(!0),r(!0,F);else if(m.t==="room-un-ban")D(!1),r(U,!1);else if(m.t==="room-user-un-ban"&&m.params[0]===te.id)z(!1),r(!1,F);else if(m.t==="room-over")re.success("当前直播已结束"),setTimeout(()=>{window.location.reload()},1500);else if(m.t==="message-deleted"){let I=m.params.ids[0],R=N,ne=R.findIndex(V=>V.msg_body.chat_id===I);ne&&(R.splice(ne,1),p([...R]))}},Y.onerror=W=>{Q("enter_fail")}):re.error("您的浏览器不支持 WebSocket!")},Q=a=>{E(!0);const g={"connect-success":"已加入聊天室",enter_fail:"无法加入聊天室",offline:"已断开连接",losed:"已断开连接",reconnect:"已重新连接",connectold:"异地登录","connect-repeat":"异地登录","connect-lose":"已断开链接"};let T=N;T.push({local:1,msg_body:{chat_id:0},content:g[a]}),p([...T])},ae=()=>{de||G||($(!0),_t(b,y,{page:B,size:ee}).then(a=>{i(a.data.total),a.data.data[0]&&K(a.data.data[0].id);let g=a.data.data.reverse(),T=N;T.unshift(...g),p([...T]),ee!==a.data.data.length?Z(!0):Z(!1),$(!1),B>1&&fe()}))},fe=()=>{setTimeout(()=>{let a=document.getElementById("chatBox"),g=document.getElementById(String(me));a.scrollTop=g.offsetTop},150)},he=()=>{setTimeout(()=>{let a=document.getElementById("chatBox");a.scrollTop=a.scrollHeight},150)};return e.jsxs("div",{className:ce["chat-all-box"],children:[(F||U)&&e.jsxs("div",{className:ce["tip-box"],children:[F&&e.jsx("div",{className:ce.tip,children:"全员已禁言"}),!F&&U&&e.jsx("div",{className:ce.tip,children:"您已被禁言"})]}),e.jsxs("div",{className:"chat-box",id:"chatBox",children:[N.length>0&&!G&&ue!==0&&e.jsx("div",{className:"bullet-chat active",children:e.jsx("div",{className:"addmore",onClick:()=>se(),children:"加载更多"})}),N.map((a,g)=>e.jsxs("div",{id:a.id,className:"bullet-chat",children:[a.local&&e.jsx("div",{className:"alert-message",children:e.jsx("span",{className:"text-block",children:a.content})}),!a.local&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:a.msg_body.role==="teacher"||a.msg_body.role==="assistant"?"teacher nickname":"nickname",children:a.msg_body.nick_name}),e.jsx("div",{className:"message-content",children:e.jsx("div",{className:"chat-content",children:a.msg_body.content})})]})]},g+(a.msg_body.content||a.content)))]})]})},pt="_content_b4j1k_16",xt="_navheader_b4j1k_22",yt="_top_b4j1k_27",jt="_button_b4j1k_49",St="_name_b4j1k_97",Nt="_time_b4j1k_105",kt="_play_b4j1k_118",wt="_message_b4j1k_147",Ct="_replybox_b4j1k_167",Dt="_submit_b4j1k_188",Tt="_tabs_b4j1k_233",It="_actline_b4j1k_261",o={content:pt,navheader:xt,top:yt,"icon-back":"_icon-back_b4j1k_40",button:jt,"live-banner":"_live-banner_b4j1k_65","live-box":"_live-box_b4j1k_74","live-item":"_live-item_b4j1k_82","live-item-title":"_live-item-title_b4j1k_89",name:St,time:Nt,"live-item-video":"_live-item-video_b4j1k_112",play:kt,"alert-message":"_alert-message_b4j1k_122","play-button":"_play-button_b4j1k_129",message:wt,replybox:Ct,"submit-disabled":"_submit-disabled_b4j1k_188",submit:Dt,"chat-item":"_chat-item_b4j1k_228",tabs:Tt,"active-item-tab":"_active-item-tab_b4j1k_245",actline:It,"item-tab":"_item-tab_b4j1k_268"},Rt="_mask_jtowv_1",Et="_scaleBig_jtowv_1",Pt="_num_jtowv_65",$t="_count_jtowv_79",Bt="_button_jtowv_93",A={mask:Rt,"dialog-box":"_dialog-box_jtowv_11",scaleBig:Et,"dialog-header":"_dialog-header_jtowv_23","icon-close":"_icon-close_jtowv_45","dialog-body":"_dialog-body_jtowv_55",num:Pt,count:$t,button:Bt};var x=null;const zt=({cid:c,vid:l,records:d,onCancel:b})=>{lt.useForm(),J(v=>v.systemConfig.value.config);const[y,u]=t.useState(!1),[r,_]=t.useState(0);t.useState(0);const j=t.useRef(0);t.useEffect(()=>(L(),()=>{x&&clearInterval(x),x=null,_(0)}),[c,l,d]),t.useEffect(()=>{j.current=r},[r]);const L=()=>{let v=d.end_at;const C=new Date;let h=(Date.parse(v)-C)/1e3;Number(h)>0&&w(Number(h))},w=v=>{const C=Math.floor(v);x||(_(C),x=setInterval(()=>{let h=j.current;h>0&&h<=C?(h--,_(h)):(_(0),x&&clearInterval(x),x=null,b())},1e3))},f=()=>{y||(u(!0),ft(c,l,d.id).then(()=>{_(0),x&&clearInterval(x),x=null,u(!1),re.success("签到成功"),b()}).catch(v=>{u(!1)}))};return e.jsx(e.Fragment,{children:e.jsx("div",{className:A.mask,children:e.jsxs("div",{className:A["dialog-box"],children:[e.jsx("div",{className:A["dialog-header"],children:e.jsx("span",{children:"大家快来签到啦！"})}),e.jsxs("div",{className:A["dialog-body"],children:[e.jsx("div",{className:A.count,children:r}),e.jsx("div",{className:A.button,onClick:()=>f(),children:"点击签到"})]})]})})})},Ft="_reload_146vu_9",Mt="_title_146vu_57",Lt="_link_146vu_72",H={"live-attach-box":"_live-attach-box_146vu_1",reload:Ft,"list-box":"_list-box_146vu_37","item-comp":"_item-comp_146vu_48",title:Mt,link:Lt},Ut=({cid:c,vid:l,status:d,onCancel:b})=>{const[y,u]=t.useState(!1),[r,_]=t.useState([]),j=J(f=>f.systemConfig.value.config);t.useEffect(()=>{L()},[c]);const L=()=>{y||(u(!0),bt(c,l,{page:1,size:1e5}).then(f=>{_(f.data.data),u(!1)}))},w=(f,v,C)=>{let h=j.url+`/addons/zhibo/api/v1/course/${f}/video/${v}/attach/${C}/download?token=`+Fe();window.open(h)};return e.jsxs("div",{className:H["live-attach-box"],children:[d!==2&&e.jsx("div",{className:H.reload,children:e.jsx("a",{onClick:()=>b(),children:"点击刷新课件列表"})}),r.length===0&&e.jsx(dt,{}),r.length>0&&e.jsx("div",{className:H["list-box"],children:r.map(f=>e.jsxs("div",{className:H["item-comp"],children:[e.jsx("div",{className:H.title,children:f.name}),e.jsx("div",{className:H.link,children:e.jsx("a",{onClick:()=>w(f.course_id,f.video_id,f.id),children:"下载"})})]},f.id))})]})},qt=()=>{const c=J(s=>s.loginUser.value.user),l=J(s=>s.systemConfig.value.config),d=J(s=>s.loginUser.value.isLogin),b=()=>{r.current&&r.current.destroy(),u.current&&u.current.dispose(),_.current&&_.current.destroy()},y=()=>{r.current&&r.current.fullScreen.cancel(),u.current&&u.current.exitFullscreen()},u=t.useRef(null),r=t.useRef(null),_=t.useRef(null),[j,L]=t.useState(!1),[w,f]=t.useState(""),[v,C]=t.useState("red"),[h,ie]=t.useState("10px"),[E,de]=t.useState("1"),[$,G]=t.useState("");t.useEffect(()=>{l&&(L(parseInt(l.player.enabled_bullet_secret)===1),f(l.player.bullet_secret.text.replace("${user.mobile}",c.mobile).replace("${mobile}",c.mobile).replace("${user.id}",c.id)),C(l.player.bullet_secret.color),ie(l.player.bullet_secret.size+"px"),de(l.player.bullet_secret.opacity))},[l]);const Z=ot(),B=ct(),[S,ee]=t.useState(Number(B.courseId)),[P,ue]=t.useState({}),[i,me]=t.useState({}),[K,N]=t.useState(0);t.useEffect(()=>{let s="";P&&(s=P.poster),!s&&l&&(s=l.player.cover),G(s)},[l,P]);const[p,U]=t.useState(""),[z,F]=t.useState(""),[D,te]=t.useState(""),[se,_e]=t.useState(null),[Q,ae]=t.useState(!1),[fe,he]=t.useState(!1),[a,g]=t.useState(!1),[T,k]=t.useState(!1),[W,m]=t.useState(!1),[I,R]=t.useState(!1),[ne,V]=t.useState(!1),[je,le]=t.useState(null),[Me,Se]=t.useState("0"),[Le,Ne]=t.useState("00"),[Ue,ke]=t.useState("00"),[We,we]=t.useState("00"),[Ce,Ve]=t.useState(0),[ve,Oe]=t.useState(0),[X,be]=t.useState(1),[ge,De]=t.useState(""),[Ae,Te]=t.useState(!1),oe=t.useRef(0),He=[{name:"聊天",id:1},{name:"课件",id:2}];t.useEffect(()=>{(i==null?void 0:i.status)===1&&(D?qe():Ke())},[i,D,p]),t.useEffect(()=>{oe.current=Ce},[Ce]),t.useEffect(()=>{oe.current=ve},[ve]),t.useEffect(()=>{Je()},[S]),t.useEffect(()=>{ee(Number(B.courseId))},[B.courseId]);const Je=()=>{it(S).then(s=>{let n=s.data;document.title=n.video.title,!se&&n.chat&&_e(n.chat),ue(n.course),me(n.video),U(n.play_url),F(n.ali_rts),N(n.record_exists),te(n.web_rtc_play_url),typeof n.video.status>"u"?Te(!1):Te(n.video.status===0||n.video.status===1),ae(n.room_is_ban===1),he(n.user_is_ban===1),g(n.room_is_ban===1||n.user_is_ban===1),n.video.status===0&&(k(!1),Ie(n.video.published_at));let M=n.sign_in_record;M&&M.length!==0?(V(!0),le(M)):(V(!1),le(null))})},Ie=s=>{let M=new Date().getTime(),O=new Date(s).getTime()-M;if(O>=0){let tt=Math.floor(O/1e3/60/60/24);Se(tt);let pe=Math.floor(O/1e3/60/60%24),st=pe<10?"0"+pe:pe;Ne(st);let xe=Math.floor(O/1e3/60%60),at=xe<10?"0"+xe:xe;ke(at);let ye=Math.floor(O/1e3%60),nt=ye<10?"0"+ye:ye;we(nt)}else Se(0),Ne("00"),ke("00"),we("00");if(O<=0){k(!0);return}setTimeout(()=>{Ie(s)},1e3)},qe=()=>{u.current=new window.TCPlayer("meedu-live-player",{width:950,height:535,sources:[{src:D}],controls:!0,autoplay:!0,poster:$,bigPlayButton:!0,reportable:!1,webrtcConfig:{connectRetryCount:3,connectRetryDelay:1,receiveVideo:!0,receiveAudio:!0,showLog:!1},plugins:{DynamicWatermark:j?{type:"text",speed:.2,content:w,opacity:E,fontSize:h,color:v}:null}}),u.current.on("timeupdate",function(){Be(u.current.currentTime(),!1)}),u.current.on("error",function(s){console.log("视频播放出现错误",s),u.current.dispose(),u.current=null,setTimeout(()=>{m(!0)},500)})},Ke=()=>{let s={url:p,pic:$};z&&(s={live_artc_url:z,type:"artc",pic:$}),r.current=new window.DPlayer({container:document.getElementById("meedu-live-player"),live:!0,video:s,autoplay:!0,bulletSecret:{enabled:j,text:w,size:h,color:v,opacity:E}}),r.current.on("timeupdate",()=>{!r.current||!r.current.video||Be(parseInt(r.current.video.currentTime),!1)}),r.current.on("play_error",n=>{console.log("play_error",n),n!=null&&n.from&&(n.from==="AliRTS"||n.from==="HLS")&&(b(),m(!0))})},Re=()=>{b(),setTimeout(()=>{Z("/live/detail/"+P.id+"?tab=3",{replace:!0})},500)},Qe=s=>{be(s)},Xe=s=>{(r.current||u.current)&&y(),le(s),V(!0)},Ye=()=>{K===1&&p.length>0?(b(),R(!0),Ge()):(R(!1),re.error("暂无回放"))},Ee=()=>{window.location.reload()},Pe=()=>{V(!1),le(null)},Ge=()=>{_.current=new window.DPlayer({container:document.getElementById("meedu-vod-player"),autoplay:!1,video:{quality:p,defaultQuality:0,pic:$},bulletSecret:{enabled:j,text:w,size:h,color:v,opacity:E}}),_.current.on("timeupdate",()=>{$e(parseInt(_.current.video.currentTime),!1)}),_.current.on("ended",()=>{$e(parseInt(_.current.video.currentTime),!0)}),_.current.on("play_error",s=>{console.log("播放出错啦",s)})},$e=(s,n)=>{(s-oe.current>=10||n===!0)&&(Ve(s),vt(i.course_id,S,{duration:s}).then(M=>{}))},Be=(s,n)=>{(s-oe.current>=10||n===!0)&&(Oe(s),ht(i.course_id,S,{duration:s}).then(M=>{}))},ze=()=>{ge===""||a||Ze(ge)},Ze=s=>{mt(i.course_id,S,{content:s,duration:ve}).then(n=>{De("")})},et=()=>{be(0),setTimeout(()=>{be(2)},150)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:o.content,children:[e.jsx("div",{className:o.navheader,children:e.jsx("div",{className:o.top,children:e.jsxs("div",{className:"d-flex",children:[e.jsx("img",{onClick:()=>Re(),className:o["icon-back"],src:ut}),e.jsx("span",{onClick:()=>Re(),children:i.title})]})})}),e.jsx("div",{className:o["live-banner"],children:d&&i&&e.jsxs("div",{className:o["live-box"],children:[e.jsxs("div",{className:o["live-item"],children:[i.status===1&&ne&&je&&e.jsx(zt,{cid:P.id,vid:S,records:je,onCancel:()=>Pe()}),e.jsxs("div",{className:o["live-item-title"],children:[e.jsx("span",{className:o.name,children:i.title}),e.jsxs("span",{className:o.time,children:[i.status===0&&e.jsxs(e.Fragment,{children:["开播时间 ",i.published_at]}),i.status===1&&e.jsx(e.Fragment,{children:"直播中"}),i.status===2&&e.jsx(e.Fragment,{children:"已结束"})]})]}),e.jsxs("div",{className:o["live-item-video"],style:{backgroundImage:"url("+P.poster+")",backgroundSize:"100% 100%"},children:[i.status===1?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:o["alert-message"],style:{display:W?"flex":"none"},children:e.jsxs("div",{className:o.message,children:["讲师暂时离开直播间，稍后请刷新！",e.jsx("a",{onClick:()=>Ee(),children:"点击刷新"})]})}),e.jsx("div",{className:o.play,style:{display:W?"none":"block"},children:D?e.jsx("video",{id:"meedu-live-player"}):e.jsx("div",{id:"meedu-live-player",style:{width:"100%",height:"100%"}})})]}):null,i.status===0&&e.jsx("div",{className:o["alert-message"],children:T?e.jsxs("div",{className:o.message,children:["待讲师开播，",e.jsx("a",{onClick:()=>Ee(),children:"点击刷新"})]}):e.jsxs("div",{className:o.message,children:["直播倒计时：",Me,"天",Le,"小时",Ue,"分",We,"秒"]})}),i.status===2&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:o.play,children:[K===1&&!I&&e.jsx("div",{className:o["alert-message"],children:p.length>0?e.jsxs("div",{className:o.message,children:["直播已结束，",e.jsx("a",{onClick:()=>Ye(),children:"点击回看"})]}):e.jsx("div",{className:o.message,children:"直播已结束"})}),e.jsx("div",{id:"meedu-vod-player",style:{width:"100%",height:"100%",display:K===1&&I?"block":"none"}})]})})]}),e.jsx("div",{className:o.replybox,children:X===1&&i.status!==2&&e.jsxs(e.Fragment,{children:[e.jsx(rt,{className:o["reply-content"],value:ge,onChange:s=>{De(s.target.value)},disabled:a,placeholder:a?"禁言状态下无法发布消息":"按回车键可直接发送",onPressEnter:()=>ze()}),e.jsx("div",{className:a?o["submit-disabled"]:o.submit,onClick:()=>ze(),children:"发布"})]})})]}),e.jsxs("div",{className:o["chat-item"],children:[e.jsx("div",{className:o.tabs,children:He.map(s=>e.jsxs("div",{className:X===s.id?o["active-item-tab"]:o["item-tab"],onClick:()=>Qe(s.id),children:[s.name,X===s.id&&e.jsx("div",{className:o.actline})]},s.id))}),X===1&&i.course_id&&e.jsx(gt,{chat:se,enabledChat:Ae,cid:i.course_id,vid:S,disabled:fe,enabledMessage:Q,change:(s,n)=>{s||n?(console.log(s,n),g(!0)):g(!1)},sign:s=>Xe(s),endSign:()=>Pe()}),X===2&&e.jsx(Ut,{status:i.status,cid:P.id,vid:S,onCancel:()=>et()})]})]})})]})})};export{qt as default};