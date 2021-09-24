"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[133],{1133:(e,t,n)=>{n.r(t),n.d(t,{AuthCode:()=>P,AuthPassword:()=>E,AuthRegister:()=>w});var a=n(4050),r=n(5116),o=n(7361),s=n(782),i=n(2340),l=n(6590),c=n(9107),d=n(7687),u=n(4288),m=n(3716),h=n(7324),p=n(7799);const g=o.wB?m.qp:m.z7,Z=(0,a.X$)((({code:e,codeLength:t,trackingDirection:n,isTracking:r,isBig:o})=>{const[s,i]=(0,a.eJ)(),[l,c]=(0,a.eJ)(),[d,u]=(0,a.eJ)(!1),Z=165/t;(0,a.d4)((()=>{s||(0,h.Z)("MonkeyIdle").then(i)}),[s]),(0,a.d4)((()=>{l||(0,h.Z)("MonkeyTracking").then(c)}),[l]);const P=(0,a.I4)((()=>u(!0)),[]);return a.ZP.createElement("div",{id:"monkey",className:o?"big":""},!d&&a.ZP.createElement("div",{className:"monkey-preview"}),s&&a.ZP.createElement(p.Z,{id:"idleMonkey",size:o?m.K2:g,className:r?"hidden":void 0,animationData:s,play:!r,onLoad:P}),l&&a.ZP.createElement(p.Z,{id:"trackingMonkey",size:o?m.K2:g,className:r?"shown":"hidden",animationData:l,playSegment:r?function(){const a=e&&e.length>1||n<0?15+Z*(e.length-1):0,r=e.length===t?180:15+Z*e.length;return n<1?[r,a]:[a,r]}():void 0,speed:2,noLoop:!0}))})),P=(0,a.X$)((0,r.c$)((e=>(0,s.ei)(e,["authPhoneNumber","authIsCodeViaApp","authIsLoading","authError"])),((e,t)=>(0,s.ei)(t,["setAuthCode","returnToAuthPhoneNumber","clearAuthError"])))((({authPhoneNumber:e,authIsCodeViaApp:t,authIsLoading:n,authError:r,setAuthCode:s,returnToAuthPhoneNumber:m,clearAuthError:h})=>{const p=(0,c.Z)(),g=(0,a.sO)(null),[P,v]=(0,a.eJ)(""),[f,E]=(0,a.eJ)(!1),[b,y]=(0,a.eJ)(1);(0,a.d4)((()=>{o.$b||g.current.focus()}),[]),(0,l.ZP)(!0,m);const w=(0,a.I4)((e=>{r&&h();const{currentTarget:t}=e;t.value=t.value.replace(/[^\d]+/,"").substr(0,5),t.value!==P&&(v(t.value),f?t.value.length||E(!1):E(!0),P&&P.length>t.value.length?y(-1):y(1),5===t.value.length&&s({code:t.value}))}),[r,h,P,f,s]);return a.ZP.createElement("div",{id:"auth-code-form",className:"custom-scroll"},a.ZP.createElement("div",{className:"auth-form"},a.ZP.createElement(Z,{code:P,codeLength:5,isTracking:f,trackingDirection:b}),a.ZP.createElement("h2",null,e,a.ZP.createElement("div",{className:"auth-number-edit",onClick:m,role:"button",tabIndex:0,title:p("WrongNumber")},a.ZP.createElement("i",{className:"icon-edit"}))),a.ZP.createElement("p",{className:"note"},(0,i.Z)(p(t?"SentAppCode":"Login.JustSentSms"),["simple_markdown"])),a.ZP.createElement(d.Z,{ref:g,id:"sign-in-code",label:p("Code"),onInput:w,value:P,error:r&&p(r),autoComplete:"one-time-code",inputMode:"numeric"}),n&&a.ZP.createElement(u.Z,null)))})));var v=n(3490),f=n(9364);const E=(0,a.X$)((0,r.c$)((e=>(0,s.ei)(e,["authIsLoading","authError","authHint"])),((e,t)=>(0,s.ei)(t,["setAuthPassword","clearAuthError"])))((({authIsLoading:e,authError:t,authHint:n,setAuthPassword:r,clearAuthError:o})=>{const s=(0,c.Z)(),[i,l]=(0,a.eJ)(!1),d=(0,a.I4)((e=>{l(e)}),[]),u=(0,a.I4)((e=>{r({password:e})}),[r]);return a.ZP.createElement("div",{id:"auth-password-form",className:"custom-scroll"},a.ZP.createElement("div",{className:"auth-form"},a.ZP.createElement(v.Z,{isPasswordVisible:i}),a.ZP.createElement("h2",null,s("Login.Header.Password")),a.ZP.createElement("p",{className:"note"},s("Login.EnterPasswordDescription")),a.ZP.createElement(f.Z,{clearError:o,error:t&&s(t),hint:n,isLoading:e,isPasswordVisible:i,onChangePasswordVisibility:d,onSubmit:u})))})));var b=n(231),y=n(710);const w=(0,a.X$)((0,r.c$)((e=>(0,s.ei)(e,["authIsLoading","authError"])),((e,t)=>(0,s.ei)(t,["signUp","clearAuthError","uploadProfilePhoto"])))((({authIsLoading:e,authError:t,signUp:n,clearAuthError:r,uploadProfilePhoto:o})=>{const s=(0,c.Z)(),[i,l]=(0,a.eJ)(!1),[u,m]=(0,a.eJ)(),[h,p]=(0,a.eJ)(""),[g,Z]=(0,a.eJ)("");return a.ZP.createElement("div",{id:"auth-registration-form",className:"custom-scroll"},a.ZP.createElement("div",{className:"auth-form"},a.ZP.createElement("form",{action:"",method:"post",onSubmit:function(e){e.preventDefault(),n({firstName:h,lastName:g}),u&&o({file:u})}},a.ZP.createElement(y.Z,{onChange:m}),a.ZP.createElement("h2",null,s("YourName")),a.ZP.createElement("p",{className:"note"},s("Login.Register.Desc")),a.ZP.createElement(d.Z,{id:"registration-first-name",label:s("Login.Register.FirstName.Placeholder"),onChange:function(e){t&&r();const{target:n}=e;p(n.value),l(n.value.length>0)},value:h,error:t&&s(t),autoComplete:"given-name"}),a.ZP.createElement(d.Z,{id:"registration-last-name",label:s("Login.Register.LastName.Placeholder"),onChange:function(e){const{target:t}=e;Z(t.value)},value:g,autoComplete:"family-name"}),i&&a.ZP.createElement(b.Z,{type:"submit",ripple:!0,isLoading:e},s("Next")))))})))},7799:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(4050),r=n(9118),o=n(6752),s=n(8674),i=n(5332);let l,c;async function d(){return l||(l=n.e(941).then(n.bind(n,7941)),c=(await l).default),l}setTimeout(d,5e3);const u=(0,a.X$)((({className:e,id:t,animationData:n,play:l,playSegment:u,speed:m,noLoop:h,size:p,quality:g,isLowPriority:Z,onLoad:P})=>{const[v,f]=(0,a.eJ)(),E=(0,a.sO)(null),b=(0,a.sO)(!1),y=(0,a.sO)(!1),w=(0,a.sO)();w.current=l;const N=(0,a.sO)();N.current=u,(0,a.d4)((()=>{if(v||!n)return;const e=()=>{if(!E.current)return;const e=new c(t,E.current,n,{noLoop:h,size:p,quality:g,isLowPriority:Z},P);m&&e.setSpeed(m),f(e)};c?e():d().then((()=>{(0,r.T2)((()=>{E.current&&e()}))}))}),[v,n,t,Z,h,P,g,p,m]),(0,a.d4)((()=>()=>{v&&v.destroy()}),[v]);const k=(0,a.I4)(((e=!1)=>{v&&(w.current||N.current)&&(N.current?v.playSegment(N.current):e?v.goToAndPlay(0):v.play())}),[v]),C=(0,a.I4)((()=>{v&&v.pause()}),[v]),L=(0,a.I4)((()=>{y.current=!0,v&&(b.current||(b.current=v.isPlaying()),C())}),[v,C]),I=(0,a.I4)((()=>{b.current&&k(),b.current=!1,y.current=!1}),[k]),A=(0,a.I4)((()=>{(0,r.T2)(I)}),[I]);(0,a.d4)((()=>{v&&(l||u?y.current?b.current=!0:v.isPlaying()||k(h):y.current?b.current=!1:C())}),[v,l,u,h,k,C]),(0,s.ZP)(L,I),(0,i.Z)(L,A);const J=(0,o.Z)("AnimatedSticker",e),S=p?`width: ${p}px; height: ${p}px;`:void 0;return a.ZP.createElement("div",{ref:E,className:J,style:S})}))},9364:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(4050),r=n(3716),o=n(7361),s=n(6752),i=n(9107),l=n(231);const c=o.wB?550:400,d=(0,a.X$)((({isLoading:e=!1,isPasswordVisible:t,error:n,hint:d,placeholder:u="Password",submitLabel:m="Next",clearError:h,onChangePasswordVisibility:p,onInputChange:g,onSubmit:Z})=>{const P=(0,a.sO)(null),v=(0,i.Z)(),[f,E]=(0,a.eJ)(""),[b,y]=(0,a.eJ)(!1);return(0,a.d4)((()=>{o.$b||setTimeout((()=>{P.current.focus()}),c)}),[]),(0,a.d4)((()=>{n&&requestAnimationFrame((()=>{P.current.focus(),P.current.select()}))}),[n]),a.ZP.createElement("form",{action:"",onSubmit:function(t){t.preventDefault(),e||b&&Z(f)},autoComplete:"off"},a.ZP.createElement("div",{className:(0,s.Z)("input-group password-input",f&&"touched",n&&"error"),dir:v.isRtl?"rtl":void 0},a.ZP.createElement("input",{ref:P,className:"form-control",type:t?"text":"password",id:"sign-in-password",value:f||"",autoComplete:"current-password",onChange:function(e){n&&h();const{target:t}=e;E(t.value),y(t.value.length>=r.lo),g&&g(t.value)},dir:"auto"}),a.ZP.createElement("label",null,n||d||u),a.ZP.createElement("div",{className:"toggle-password",onClick:function(){p(!t)},role:"button",tabIndex:0,title:"Toggle password visibility"},a.ZP.createElement("i",{className:t?"icon-eye":"icon-eye-closed"}))),b&&a.ZP.createElement(l.Z,{type:"submit",ripple:!0,isLoading:e},m))}))},3490:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(4050),r=n(3716),o=n(7361),s=n(7324),i=n(7799);const l=[0,50],c=[0,20],d=[20,0],u=o.wB?r.qp:r.z7,m=(0,a.X$)((({isPasswordVisible:e,isBig:t})=>{const[n,o]=(0,a.eJ)(),[m,h]=(0,a.eJ)(),[p,g]=(0,a.eJ)(!1),[Z,P]=(0,a.eJ)(!1);(0,a.d4)((()=>{n?setTimeout((()=>P(!0)),2e3):(0,s.Z)("MonkeyClose").then(o)}),[n]),(0,a.d4)((()=>{m||(0,s.Z)("MonkeyPeek").then(h)}),[m]);const v=(0,a.I4)((()=>g(!0)),[]);return a.ZP.createElement("div",{id:"monkey",className:t?"big":""},!p&&a.ZP.createElement("div",{className:"monkey-preview"}),n&&a.ZP.createElement(i.Z,{id:"closeMonkey",size:t?r.K2:u,className:Z?"hidden":"shown",animationData:n,playSegment:l,noLoop:!0,onLoad:v}),m&&a.ZP.createElement(i.Z,{id:"peekMonkey",size:t?r.K2:u,className:Z?"shown":"hidden",animationData:m,playSegment:e?c:d,noLoop:!0}))}))},7324:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(6137),r=n(647);const o={MonkeyIdle:n(1679),MonkeyTracking:n(4889),MonkeyClose:n(4185),MonkeyPeek:n(8431),FoldersAll:n(6041),FoldersNew:n(7196),DiscussionGroups:n(4349)};function s(e){const t=o[e].replace(window.location.origin,"");return r.he(`file${t}`,a.IU.Lottie)}},710:(e,t,n)=>{n.d(t,{Z:()=>Z});var a=n(4050),r=n(6752),o=n(3716),s=n(1394),i=n(9107),l=n(231),c=n(3103),d=n(4288);const u={type:"blob",quality:1,format:"jpeg",circle:!1};let m,h,p;const g=(0,a.X$)((({file:e,onChange:t,onClose:r})=>{const[g,Z]=(0,a.eJ)(!1);(0,a.d4)((()=>{e&&(g?async function(e){try{const t=document.getElementById("avatar-crop");if(!t)return;const{offsetWidth:n,offsetHeight:a}=t;p=new m(t,{enableZoom:!0,boundary:{width:n,height:a},viewport:{width:n-16,height:a-16,type:"circle"}});const r=await(0,s.YJ)(e);await p.bind({url:r})}catch(e){o.eM&&console.error(e)}}(e):async function(){return h||(h=Promise.all([n.e(99),n.e(472)]).then(n.bind(n,3472)),m=(await h).default),h}().then((()=>Z(!0))))}),[e,g]);const P=(0,i.Z)();return a.ZP.createElement(c.Z,{isOpen:Boolean(e),onClose:r,title:"Drag to reposition",className:"CropModal",hasCloseButton:!0},g?a.ZP.createElement("div",{id:"avatar-crop"}):a.ZP.createElement(d.Z,null),a.ZP.createElement(l.Z,{className:"confirm-button",round:!0,color:"primary",onClick:async function(){if(!p)return;const e=await p.result(u),n="string"==typeof e?e:(0,s.hl)(e,"avatar.jpg");t(n)},ariaLabel:P("CropImage")},a.ZP.createElement("i",{className:"icon-check"})))})),Z=(0,a.X$)((({title:e="Change your profile picture",disabled:t,currentAvatarBlobUrl:n,onChange:o})=>{const[s,i]=(0,a.eJ)(),[l,c]=(0,a.eJ)(n);(0,a.d4)((()=>{c(n)}),[n]);const d=(0,r.Z)(l&&"filled",t&&"disabled");return a.ZP.createElement("div",{className:"AvatarEditable"},a.ZP.createElement("label",{className:d,role:"button",tabIndex:0,title:e},a.ZP.createElement("input",{type:"file",onChange:function(e){const t=e.target;t&&t.files&&t.files[0]&&(i(t.files[0]),t.value="")},accept:"image/png, image/jpeg"}),a.ZP.createElement("i",{className:"icon-camera-add"}),l&&a.ZP.createElement("img",{src:l,alt:"Avatar"})),a.ZP.createElement(g,{file:s,onClose:function(){i(void 0)},onChange:function(e){i(void 0),o(e),l&&URL.revokeObjectURL(l),c(URL.createObjectURL(e))}}))}))},3103:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(4050),r=n(517),o=n(6752),s=n(8674),i=n(1212),l=n(274),c=n(9107),d=n(6590),u=n(231),m=n(2898);const h=({title:e,className:t,isOpen:n,header:h,hasCloseButton:p,noBackdrop:g,children:Z,onClose:P,onCloseAnimationEnd:v,onEnter:f,shouldSkipHistoryAnimations:E})=>{const{shouldRender:b,transitionClassNames:y}=(0,i.Z)(n,v,E,void 0,E),w=(0,a.sO)(null);(0,a.d4)((()=>n?(0,r.Z)({onEsc:P,onEnter:f}):void 0),[n,P,f]),(0,a.d4)((()=>n&&w.current?function(e){function t(t){if("Tab"!==t.key)return;t.preventDefault(),t.stopPropagation();const n=Array.from(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));if(!n.length)return;const a=n.findIndex((e=>e.isSameNode(document.activeElement)));let r=0;a>=0&&(r=t.shiftKey?a>0?a-1:n.length-1:a<n.length-1?a+1:0),n[r].focus()}return document.addEventListener("keydown",t,!1),()=>{document.removeEventListener("keydown",t,!1)}}(w.current):void 0),[n]);const{forceClose:N}=(0,d.ZP)(n,P);(0,a.d4)((()=>()=>{n&&N()}),[]),(0,l.Z)((([e])=>(document.body.classList.toggle("has-open-dialog",n),(n||!n&&void 0!==e)&&(0,s.YW)(200),()=>{document.body.classList.remove("has-open-dialog")})),[n]);const k=(0,c.Z)();if(!b)return;const C=(0,o.Z)("Modal",t,y,g&&"transparent-backdrop");return a.ZP.createElement(m.Z,null,a.ZP.createElement("div",{ref:w,className:C,tabIndex:-1,role:"dialog"},a.ZP.createElement("div",{className:"modal-container"},a.ZP.createElement("div",{className:"modal-backdrop",onClick:P}),a.ZP.createElement("div",{className:"modal-dialog"},h||(e?a.ZP.createElement("div",{className:"modal-header"},p&&a.ZP.createElement(u.Z,{round:!0,color:"translucent",size:"smaller",ariaLabel:k("Close"),onClick:P},a.ZP.createElement("i",{className:"icon-close"})),a.ZP.createElement("div",{className:"modal-title"},e)):void 0),a.ZP.createElement("div",{className:"modal-content custom-scroll"},Z)))))}},2898:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(4050),r=n(2916);const o=({containerId:e,className:t,children:n})=>{const o=(0,a.sO)();return o.current||(o.current=document.createElement("div")),(0,a.bt)((()=>{const n=document.querySelector(e||"#portals");if(!n)return;const a=o.current;return t&&a.classList.add(t),n.appendChild(a),()=>{r.Z.render(void 0,a),n.removeChild(a)}}),[t,e]),r.Z.render(n,o.current)}},5332:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(4050);function r(e,t){(0,a.d4)((()=>(e&&!document.hasFocus()&&e(),e&&window.addEventListener("blur",e),t&&window.addEventListener("focus",t),()=>{t&&window.removeEventListener("focus",t),e&&window.removeEventListener("blur",e)})),[e,t])}},4349:(e,t,n)=>{e.exports=n.p+"DiscussionGroupsDucks.9ea453d1be9d1b0ee77a..tgs"},6041:(e,t,n)=>{e.exports=n.p+"FoldersAll.3f9f9e243d19f0fbf9aa..tgs"},7196:(e,t,n)=>{e.exports=n.p+"FoldersNew.9a40d71c0c8be70f5bd1..tgs"},4185:(e,t,n)=>{e.exports=n.p+"TwoFactorSetupMonkeyClose.604c4c833d322b7e6c3e..tgs"},1679:(e,t,n)=>{e.exports=n.p+"TwoFactorSetupMonkeyIdle.dea4a492c144df84ddab..tgs"},8431:(e,t,n)=>{e.exports=n.p+"TwoFactorSetupMonkeyPeek.1905436b042520363d7e..tgs"},4889:(e,t,n)=>{e.exports=n.p+"TwoFactorSetupMonkeyTracking.eb5a7a6f166fb7589c12..tgs"}}]);
//# sourceMappingURL=133.4a66ed0221192307a4ba.js.map