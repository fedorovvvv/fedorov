import{d as z,p,a as F,u as G,b as H,c as J,g as x,s as T,e as A,t as K}from"../chunks/runtime.UeK6UpiG.js";import{c as Q,i as L,a as _,b as w,t as X,d as B,o as Y,e as v,s as j,f as E,g as Z,h as $,j as tt,p as et,k as P,l as q}from"../chunks/disclose-version.59C2tZG8.js";import{o as rt}from"../chunks/main-client.lXZgGMl0.js";function st(o){return class extends nt{constructor(t){super({component:o,...t})}}}class nt{#t={};#e;constructor(t){this.#e=Q(t.component,{target:t.target,props:{...t.props,$$events:this.#t},context:t.context,intro:t.intro,recover:t.recover});for(const e of Object.keys(this.#e))e==="$set"||e==="$destroy"||z(this,e,{get(){return this.#e[e]},set(n){this.#e[e]=n},enumerable:!0})}$set(t){this.#e.$set(t)}$on(t,e){this.#t[t]=this.#t[t]||[];const n=(...a)=>e.call(this,...a);return this.#t[t].push(n),()=>{this.#t[t]=this.#t[t].filter(a=>a!==n)}}$destroy(){this.#e.$destroy()}}const ot="modulepreload",at=function(o,t){return new URL(o,t).href},U={},C=function(t,e,n){let a=Promise.resolve();if(e&&e.length>0){const l=document.getElementsByTagName("link");a=Promise.all(e.map(r=>{if(r=at(r,n),r in U)return;U[r]=!0;const u=r.endsWith(".css"),R=u?'[rel="stylesheet"]':"";if(!!n)for(let f=l.length-1;f>=0;f--){const s=l[f];if(s.href===r&&(!u||s.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${R}`))return;const i=document.createElement("link");if(i.rel=u?"stylesheet":ot,u||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),u)return new Promise((f,s)=>{i.addEventListener("load",f),i.addEventListener("error",()=>s(new Error(`Unable to preload CSS for ${r}`)))})}))}return a.then(()=>t()).catch(l=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=l,window.dispatchEvent(r),!r.defaultPrevented)throw l})},vt={};var it=q('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),ct=q("<!> <!>",!0);function lt(o,t){J(t,!0);let e=p(t,"components",11,()=>[]),n=p(t,"data_0",3,null),a=p(t,"data_1",3,null),l=p(t,"data_2",3,null);F(()=>t.stores.page.set(t.page)),G(()=>{t.stores,t.page,t.constructors,e(),t.form,n(),a(),l(),t.stores.page.notify()});let r=T(!1),u=T(!1),R=T(null);rt(()=>{const s=t.stores.page.subscribe(()=>{x(r)&&(A(u,!0),K().then(()=>{A(R,et(document.title||"untitled page"))}))});return A(r,!0),s});var O=Y(o,!0,ct),i=v(O),f=j(j(i));L(i,()=>t.constructors[1],s=>{var d=E(s),m=v(d);w(m,()=>t.constructors[0],g=>{P(g(m,{get data(){return n()},children:(c,ut)=>{var D=E(c),M=v(D);L(M,()=>t.constructors[2],y=>{var b=E(y),k=v(b);w(k,()=>t.constructors[1],S=>{P(S(k,{get data(){return a()},children:(h,dt)=>{var I=E(h),V=v(I);w(V,()=>t.constructors[2],N=>{P(N(V,{get data(){return l()},get form(){return t.form}}),W=>e()[2]=W)}),_(h,I)}}),h=>e()[1]=h)}),_(y,b)},y=>{var b=E(y),k=v(b);w(k,()=>t.constructors[1],S=>{P(S(k,{get data(){return a()},get form(){return t.form}}),h=>e()[1]=h)}),_(y,b)}),_(c,D)}}),c=>e()[0]=c)}),_(s,d)},s=>{var d=E(s),m=v(d);w(m,()=>t.constructors[0],g=>{P(g(m,{get data(){return n()},get form(){return t.form}}),c=>e()[0]=c)}),_(s,d)}),L(f,()=>x(r),s=>{var d=Z(s,!0,it),m=$(d);L(m,()=>x(u),g=>{var c=tt(g);X(c,()=>x(R)),B(g,c)},null),B(s,d)},null),_(o,O),H()}const gt=st(lt),ht=[()=>C(()=>import("../nodes/0.-8YE-7EJ.js"),__vite__mapDeps([0,1,2]),import.meta.url),()=>C(()=>import("../nodes/1.LRrZ7Ft-.js"),__vite__mapDeps([3,1,2,4,5]),import.meta.url),()=>C(()=>import("../nodes/2.sc19fXby.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),()=>C(()=>import("../nodes/3._vZWgg24.js"),__vite__mapDeps([8,1,2,9,5,10]),import.meta.url)],Et=[],yt={"/(root)":[3,[2]]},bt={handleError:({error:o})=>{console.error(o)}};export{yt as dictionary,bt as hooks,vt as matchers,ht as nodes,gt as root,Et as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.-8YE-7EJ.js","../chunks/disclose-version.59C2tZG8.js","../chunks/runtime.UeK6UpiG.js","../nodes/1.LRrZ7Ft-.js","../chunks/singletons.aGs5BYc5.js","../chunks/index.K1lkvplB.js","../nodes/2.sc19fXby.js","../assets/2.gGGgQYtv.css","../nodes/3._vZWgg24.js","../chunks/main-client.lXZgGMl0.js","../assets/3.BC_SJtRd.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}