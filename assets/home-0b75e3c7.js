import{_ as M}from"./YunFooter.vue_vue_type_script_setup_true_lang-84b77f7c.js";import{f as $,o as n,g as s,a as _,r as m,q as k,s as x,L,t as y,l as v,_ as S,aa as V,T as g,F as C,h as z,m as B,n as Y,i as h,c as b,d as f,ab as A,D,ac as F,Z as j,k as E,w as G,ad as P,ae as R}from"./app-52b3db27.js";const q={class:"yun-notice"},O=["innerHTML"],W=$({__name:"YunNotice",props:{content:{}},setup(d){return(e,o)=>(n(),s("div",q,[_("span",{innerHTML:e.content},null,8,O),m(e.$slots,"default")]))}});const Z={class:"say"},I={key:0,class:"say-content animate-fade-in animate-iteration-1"},J={key:1,class:"say-author"},K={key:2,class:"say-from"},Q=$({__name:"YunSay",setup(d){const e=k(),o=x(""),a=x(""),u=x("");function l(){const t=e.value.say.hitokoto.enable?e.value.say.hitokoto.api:e.value.say.api;t&&fetch(t).then(c=>{if(c.ok)c.json().then(i=>{if(e.value.say.hitokoto.enable)o.value=i.hitokoto,a.value=i.from_who,u.value=i.from;else{const r=i[Math.floor(Math.random()*i.length)];r.content?(o.value=r.content,a.value=r.author,u.value=r.from):o.value=r}});else throw new Error(`${e.value.say.api}, HTTP error, status = ${c.status}`)}).catch(c=>{console.error(c.message)})}return L(()=>{l()}),(t,c)=>(n(),s("div",Z,[o.value?(n(),s("span",I,y(o.value),1)):v("v-if",!0),a.value?(n(),s("span",J,y(a.value),1)):v("v-if",!0),u.value?(n(),s("span",K,y(u.value),1)):v("v-if",!0)]))}});const U={},X={class:"go-down","aria-label":"go-down",href:"javascript:window.scrollTo(0, window.banner.clientHeight);"},ee=_("div",{"i-ri-arrow-down-s-line":"","inline-flex":""},null,-1),ne=[ee];function te(d,e){return n(),s("a",X,ne)}const se=S(U,[["render",te]]);const oe={},ae={class:"yun-cloud"},ce=V('<svg class="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto"><defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" fill="var(--yun-c-cloud)"></path></defs><g class="parallax"><use xlink:href="#gentle-wave" x="48" y="0"></use><use xlink:href="#gentle-wave" x="48" y="3"></use><use xlink:href="#gentle-wave" x="48" y="5"></use><use xlink:href="#gentle-wave" x="48" y="7"></use></g></svg>',1),re=[ce];function le(d,e){return n(),s("div",ae,re)}const ie=S(oe,[["render",le]]),_e=_("div",{class:"banner-line-container"},[_("div",{class:"banner-line vertical-line-top"})],-1),ue={class:"banner-char-container"},he={class:"char"},ve=_("div",{class:"banner-line-container bottom"},[_("div",{class:"banner-line vertical-line-bottom"})],-1),de=$({__name:"YunBanner",setup(d){const e=k(),o=g(()=>{const l=[];for(let t=0;t<e.value.banner.title.length;t++){const c=A(1.5,3.5);l.push(c)}return l}),a=g(()=>o.value.reduce((l,t)=>l+t,0)/2),u=g(()=>({"--banner-line-height":`calc(var(--banner-height, 100vh) / 2 - ${a.value}rem)`}));return(l,t)=>{var r;const c=ie,i=se;return n(),s("div",{id:"banner",style:Y(u.value)},[_e,_("div",ue,[(n(!0),s(C,null,z(h(e).banner.title,(w,p)=>(n(),s("div",{key:p,class:"char-box"},[_("span",{class:B([p%2!==0?"char-right":"char-left"]),style:Y({"--banner-char-size":`${o.value[p]}rem`})},[_("span",he,y(w),1)],6)]))),128))]),ve,(r=h(e).banner.cloud)!=null&&r.enable?(n(),b(c,{key:0})):v("v-if",!0),f(i)],4)}}});const me=$({__name:"home",setup(d){const e=D(),o=F("home"),a=k(),u=j(),l=g(()=>u.path.startsWith("/page"));return(t,c)=>{const i=R,r=P,w=de,p=Q,T=W,N=E("router-view"),H=M;return n(),s("main",{class:B(["yun-main justify-center items-center",h(o)&&!h(e).isSidebarOpen&&"pl-0"]),flex:"~ col",w:"full"},[f(r,null,{default:G(()=>[m(t.$slots,"sidebar",{},()=>[f(i)])]),_:3}),l.value?v("v-if",!0):(n(),s(C,{key:0},[h(a).banner.enable?(n(),b(w,{key:0})):v("v-if",!0),h(a).say.enable?(n(),b(p,{key:1,w:"full"})):v("v-if",!0)],64)),h(a).notice.enable?(n(),b(T,{key:1,content:h(a).notice.content,mt:"4"},null,8,["content"])):v("v-if",!0),m(t.$slots,"board"),m(t.$slots,"default",{},()=>[f(N)]),f(H)],2)}}});export{me as default};
