var he=Object.defineProperty,pe=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var Z=Object.getOwnPropertySymbols;var Be=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var V=(e,a,r)=>a in e?he(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,D=(e,a)=>{for(var r in a||(a={}))Be.call(a,r)&&V(e,r,a[r]);if(Z)for(var r of Z(a))ye.call(a,r)&&V(e,r,a[r]);return e},G=(e,a)=>pe(e,ge(a));var c=(e,a,r)=>(V(e,typeof a!="symbol"?a+"":a,r),r);import{d as T,w as A,o as d,c as _,a as l,b as n,u as t,N as B,I as y,A as Q,e as w,L as W,B as X,G as Y,f as O,t as xe,C as j,g as ve,h as b,S as P,i as M,j as we,k as be,l as me,r as I,p as Ne,m as Se,n as ke,q as Ce,M as ee,s as te,v as Le,x as ze,y as ae,z as J,D as ne,E as Te,F as Ae,H as le,J as re,K as Oe,O as Ie,P as $e,Q as Ee,R as H,T as Re,U as Ue,V as S,W as Fe,X as Ve,Y as De,Z as Ge,_ as Pe,$ as Me,a0 as Je,a1 as He,a2 as qe,a3 as Ke,a4 as Ze,a5 as Qe,a6 as We,a7 as Xe,a8 as Ye,a9 as je,aa as et,ab as tt,ac as at,ad as nt}from"./vendor.23f29e8a.js";const lt=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const i of u)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function r(u){const i={};return u.integrity&&(i.integrity=u.integrity),u.referrerpolicy&&(i.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?i.credentials="include":u.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(u){if(u.ep)return;u.ep=!0;const i=r(u);fetch(u.href,i)}};lt();const rt=O("a",{href:"https://www.stardustdl.top/",style:{"text-decoration":"none",color:"inherit"}},"StardustDL",-1),st=O("a",{href:"https://github.com/StardustDL/lamcal/blob/master/LICENSE",style:{"text-decoration":"none",color:"inherit"}},"MPL-2.0",-1),ut=O("a",{href:"https://github.com/StardustDL/lamcal",style:{"text-decoration":"none",color:"inherit"}},"GitHub",-1),ot=["href"];async function it(e){let a,r;const s=([a,r]=A(async()=>([a,r]=A(()=>fetch("/build.json")),a=await a,r(),a).json()),a=await a,r(),a);return(u,i)=>(d(),_(t(b),{size:"large"},{default:l(()=>[n(t(w),{label:"Author"},{prefix:l(()=>[n(t(B),null,{default:l(()=>[n(t(y),null,{default:l(()=>[n(t(Q))]),_:1})]),_:1})]),default:l(()=>[rt]),_:1}),n(t(w),{label:"License"},{prefix:l(()=>[n(t(B),null,{default:l(()=>[n(t(y),null,{default:l(()=>[n(t(W))]),_:1})]),_:1})]),default:l(()=>[st]),_:1}),n(t(w),{label:"Source Code"},{prefix:l(()=>[n(t(B),null,{default:l(()=>[n(t(y),null,{default:l(()=>[n(t(X))]),_:1})]),_:1})]),default:l(()=>[ut]),_:1}),n(t(w),{label:"Commit"},{prefix:l(()=>[n(t(B),null,{default:l(()=>[n(t(y),null,{default:l(()=>[n(t(Y))]),_:1})]),_:1})]),default:l(()=>[O("a",{href:`https://github.com/StardustDL/lamcal/commit/${t(s).commit}`,style:{"text-decoration":"none",color:"inherit"}},xe(t(s).shortCommit),9,ot)]),_:1}),n(t(w),{label:"Build Date"},{prefix:l(()=>[n(t(B),null,{default:l(()=>[n(t(y),null,{default:l(()=>[n(t(j))]),_:1})]),_:1})]),default:l(()=>[n(t(ve),{time:new Date(t(s).date),type:"relative"},null,8,["time"])]),_:1})]),_:1}))}const ct={components:{Icon:y,BrandGithub:X,At:Q,License:W,GitCommit:Y,Clock:j}},dt=T(G(D({},ct),{setup:it})),ft=T({setup(e){const a=`(\u03BBu. \u03BBv. v)((\u03BBx. x x)(\u03BBx. x x))
-> \u03BBv. v

(\u03BBx. x x) ((\u03BBy. y) (\u03BBz. z))
-> \u03BBz. z

(\u03BBe. \u03BBf. e) ((\u03BBa. \u03BBb. a) x y) ((\u03BBc. \u03BBd. c) u v)
-> x

(\u03BBx. x (\u03BBy. x y y) x)(\u03BBz. \u03BBw. z)
-> \u03BBy.((\u03BBz.\u03BBw.z) y y)
-> \u03BBy.y
`;return(r,s)=>(d(),_(t(b),{vertical:""},{default:l(()=>[n(t(M),{title:"Lamcal Information",hoverable:"",embedded:""},{default:l(()=>[(d(),_(P,null,{default:l(()=>[n(dt)]),_:1}))]),_:1}),n(t(M),{title:"Lamcal is an online calculator for lambda calculus (\u03BBx. y)."},{default:l(()=>[n(t(we),{alt:"Lamcal",height:"300",src:"https://socialify.git.ci/StardustDL/lamcal/image?description=1&font=Bitter&forks=1&issues=1&language=1&owner=1&pulls=1&stargazers=1&theme=Light"})]),_:1}),n(t(M),{title:"Examples"},{default:l(()=>[n(t(be),{code:a})]),_:1})]),_:1}))}});class m{constructor(a){c(this,"name");this.name=a}toText(){return this.name}}class h{constructor(a,r){c(this,"arg");c(this,"body");this.arg=a,this.body=r}toText(){return`(\u03BB${this.arg}.${this.body.toText()})`}}class p{constructor(a,r){c(this,"left");c(this,"right");this.left=a,this.right=r}toText(){let a=this.left.toText(),r=this.right.toText();return`(${a} ${r})`}}function $(e){switch(e.type){case"single":return new m(e.name);case"abstraction":return new h(e.arg,$(e.body));case"application":return new p($(e.left),$(e.right))}throw new TypeError(`Unknown type ${e.type}.`)}var E;(function(e){e[e.NormalOrder=0]="NormalOrder",e[e.ApplicativeOrder=1]="ApplicativeOrder"})(E||(E={}));class k{constructor(a,r){c(this,"redex");c(this,"result");this.result=a,this.redex=r}done(){return this.redex!=null}}function L(e,a){if(!(e instanceof m)){if(e instanceof p){if(a==0&&q(e)){let u=e.left,i=N(u.body,u.arg,e.right);return new k(i,e)}let r=L(e.left,a);if(r.done())return new k(new p(r.result,e.right),r.redex);let s=L(e.right,a);if(s.done())return new k(new p(e.left,s.result),s.redex);if(a==1&&q(e)){let u=e.left,i=N(u.body,u.arg,e.right);return new k(i,e)}}else if(e instanceof h){let r=L(e.body,a);if(r.done())return new k(new h(e.arg,r.result),r.redex)}}return new k(e)}function _t(e){return e instanceof h&&[...C(e)].length==0}function R(e){return e instanceof m?!0:e instanceof p?q(e)?!1:R(e.left)&&R(e.right):e instanceof h?R(e.body):!1}function U(e){if(e instanceof m)return new Set([e.name]);if(e instanceof p)return new Set([...U(e.left),...U(e.right)]);if(e instanceof h)return new Set([...U(e.body),e.arg]);throw new TypeError("Unknown term type.")}function C(e){if(e instanceof m)return new Set([e.name]);if(e instanceof p)return new Set([...C(e.left),...C(e.right)]);if(e instanceof h){let a=C(e.body);return a.delete(e.arg),a}else throw new TypeError("Unknown term type.")}function ht(e){let a=U(e),r=0;for(;;){let s=`v${r}`;if(!a.has(s))return s;r++}}function N(e,a,r){if(e instanceof m)return e.name==a?r:e;if(e instanceof p)return new p(N(e.left,a,r),N(e.right,a,r));if(e instanceof h){if(e.arg==a)return e;if(C(r).has(e.arg)){let s=ht(new p(e,r));return new h(s,N(N(e.body,e.arg,new m(s)),a,r))}else return new h(e.arg,N(e.body,a,r))}else throw new TypeError("Unknown term type.")}function q(e){return e instanceof p&&e.left instanceof h}var se=(e,a)=>{for(const[r,s]of a)e[r]=s;return e};const pt=S("Lambda"),gt=S("\xA0Calculus and "),Bt=S("Beta"),yt=S("\xA0Reduction "),xt=S(" Reduct in Normal-order "),vt=S(" Reduct in Applicative-order ");async function wt(e){let a,r;class s{constructor(x,g){c(this,"value");c(this,"text");c(this,"redex");c(this,"normal");c(this,"canonical");var z;this.value=x,this.normal=R(this.value),this.canonical=_t(this.value),this.text=this.value.toText(),this.redex=(z=g==null?void 0:g.toText())!=null?z:""}}const u=me(),i=I("(\u03BBe. \u03BBf. e) ((\u03BBa. \u03BBb. a) x y) ((\u03BBc. \u03BBd. c) u v)"),f=I([]),v=I(null),K=I("");function ue(o,x){return o.normal?"success":o.canonical?"error":x==0?"info":x==f.value.length-1?"warning":"default"}const oe=([a,r]=A(async()=>([a,r]=A(()=>fetch("grammar.peggy")),a=await a,r(),a).text()),a=await a,r(),a),ie=Ne.generate(oe);function F(o){v.value=o,K.value=[...C(v.value)].toString()}function ce(o){const x=ie.parse(o);return $(x)}function de(){try{const o=ce(`(${i.value})`);f.value.length=0,f.value.push(new s(o)),F(o)}catch(o){u.error(o.toString());return}}function fe(){const o=L(v.value,E.NormalOrder);o.redex?(f.value.push(new s(o.result,o.redex)),F(o.result)):u.info("Reducted to the final.")}function _e(){const o=L(v.value,E.ApplicativeOrder);o.redex?(f.value.push(new s(o.result,o.redex)),F(o.result)):u.info("Reducted to the final.")}return(o,x)=>(d(),_(t(Ue),{cols:24,style:{"padding-top":"24px"}},{default:l(()=>[n(t(Re),{offset:3,span:18},{default:l(()=>[n(t(Se),null,{default:l(()=>[n(t(ke),null,{default:l(()=>[n(t(b),{vertical:"",size:"large"},{default:l(()=>[n(t(Ce),{subtitle:"\u03BB \u6F14\u7B97\u4E0E \u03B2 \u7EA6\u7B80"},{avatar:l(()=>[n(t(B),null,{default:l(()=>[n(t(y),{size:"16"},{default:l(()=>[n(t(ee))]),_:1})]),_:1})]),title:l(()=>[n(t(te),{type:"info"},{default:l(()=>[pt]),_:1}),gt,n(t(te),{type:"success"},{default:l(()=>[Bt]),_:1}),yt]),_:1}),n(t(Le),{size:"large"},{default:l(()=>[n(t(ze),{placeholder:"\u03BB term",value:i.value,"onUpdate:value":x[0]||(x[0]=g=>i.value=g)},{prefix:l(()=>[n(t(B),null,{default:l(()=>[n(t(y),{size:"16"},{default:l(()=>[n(t(ae))]),_:1})]),_:1})]),_:1},8,["value"]),n(t(J),{onClick:de},{default:l(()=>[n(t(B),null,{default:l(()=>[n(t(y),{size:"16"},{default:l(()=>[n(t(ne))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),n(t(Te),{"content-style":"padding: 24px; width: 100%;"},{default:l(()=>[n(t(b),null,{default:l(()=>[v.value?(d(),_(t(b),{key:0,size:"large"},{default:l(()=>[n(t(b),{size:"large",vertical:""},{default:l(()=>[n(t(w),{label:"Current",value:v.value.toText()},null,8,["value"]),n(t(w),{label:"Free Variables",value:K.value},null,8,["value"]),n(t(Ae),{vertical:"",style:{width:"100%"},size:"large"},{default:l(()=>[n(t(J),{onClick:fe},{icon:l(()=>[n(t(B),null,{default:l(()=>[n(t(le))]),_:1})]),default:l(()=>[xt]),_:1}),n(t(J),{onClick:_e},{icon:l(()=>[n(t(B),null,{default:l(()=>[n(t(re))]),_:1})]),default:l(()=>[vt]),_:1})]),_:1})]),_:1}),f.value.length>0?(d(),_(t(Oe),{key:0},{default:l(()=>[(d(!0),Ie(Ee,null,$e(f.value,(g,z)=>(d(),_(t(Fe),{key:g.text,title:g.text,time:g.redex,type:ue(g,z)},null,8,["title","time","type"]))),128))]),_:1})):H("",!0)]),_:1})):H("",!0)]),_:1}),v.value?H("",!0):(d(),_(t(b),{key:0,size:"large"},{default:l(()=>[(d(),_(P,null,{default:l(()=>[n(ft)]),_:1}))]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1}))}const bt={components:{Icon:y,MathFunction:ee,ChevronRight:ae,Check:ne,BorderInner:re,BorderOuter:le}},mt=T(G(D({},bt),{setup:wt}));var Nt=se(mt,[["__scopeId","data-v-0fb07f1a"]]);const St=T({setup(e){const a=Ve(),r=De(()=>{let s=navigator.language;return s.indexOf("zh")!=-1?{lang:Ge,date:Pe}:s.indexOf("ru")!=-1?{lang:Me,date:Je}:s.indexOf("uk")!=-1?{lang:He,date:qe}:s.indexOf("ja")!=-1?{lang:Ke,date:Ze}:{lang:Qe,date:We}});return(s,u)=>(d(),_(t(Ye),{style:{height:"100%"},theme:t(a)=="dark"?t(Xe):null,locale:t(r).lang,"date-locale":t(r).date},{default:l(()=>[n(t(at),null,{default:l(()=>[n(t(je)),(d(),_(P,null,{default:l(()=>[n(Nt)]),fallback:l(()=>[n(t(et),{size:80,id:"loading-spin"})]),_:1})),n(t(tt),{right:100})]),_:1})]),_:1},8,["theme","locale","date-locale"]))}});var kt=se(St,[["__scopeId","data-v-00142434"]]);nt(kt).mount("#app");
