(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Uo(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Qe={},os=[],Tn=()=>{},hu=()=>!1,ea=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ta=n=>n.startsWith("onUpdate:"),St=Object.assign,No=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},df=Object.prototype.hasOwnProperty,je=(n,e)=>df.call(n,e),Le=Array.isArray,ls=n=>Ks(n)==="[object Map]",fu=n=>Ks(n)==="[object Set]",ll=n=>Ks(n)==="[object Date]",Fe=n=>typeof n=="function",ct=n=>typeof n=="string",wn=n=>typeof n=="symbol",Ke=n=>n!==null&&typeof n=="object",du=n=>(Ke(n)||Fe(n))&&Fe(n.then)&&Fe(n.catch),pu=Object.prototype.toString,Ks=n=>pu.call(n),pf=n=>Ks(n).slice(8,-1),mu=n=>Ks(n)==="[object Object]",Fo=n=>ct(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Us=Uo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),na=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},mf=/-\w/g,un=na(n=>n.replace(mf,e=>e.slice(1).toUpperCase())),gf=/\B([A-Z])/g,zi=na(n=>n.replace(gf,"-$1").toLowerCase()),gu=na(n=>n.charAt(0).toUpperCase()+n.slice(1)),xa=na(n=>n?`on${gu(n)}`:""),yn=(n,e)=>!Object.is(n,e),Ma=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},_u=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},_f=n=>{const e=parseFloat(n);return isNaN(e)?n:e},vf=n=>{const e=ct(n)?Number(n):NaN;return isNaN(e)?n:e};let cl;const ia=()=>cl||(cl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ai(n){if(Le(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=ct(i)?yf(i):ai(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(ct(n)||Ke(n))return n}const xf=/;(?![^(]*\))/g,Mf=/:([^]+)/,Sf=/\/\*[^]*?\*\//g;function yf(n){const e={};return n.replace(Sf,"").split(xf).forEach(t=>{if(t){const i=t.split(Mf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Yt(n){let e="";if(ct(n))e=n;else if(Le(n))for(let t=0;t<n.length;t++){const i=Yt(n[t]);i&&(e+=i+" ")}else if(Ke(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Ef="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bf=Uo(Ef);function vu(n){return!!n||n===""}function Tf(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Oo(n[i],e[i]);return t}function Oo(n,e){if(n===e)return!0;let t=ll(n),i=ll(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=wn(n),i=wn(e),t||i)return n===e;if(t=Le(n),i=Le(e),t||i)return t&&i?Tf(n,e):!1;if(t=Ke(n),i=Ke(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Oo(n[o],e[o]))return!1}}return String(n)===String(e)}const xu=n=>!!(n&&n.__v_isRef===!0),xt=n=>ct(n)?n:n==null?"":Le(n)||Ke(n)&&(n.toString===pu||!Fe(n.toString))?xu(n)?xt(n.value):JSON.stringify(n,Mu,2):String(n),Mu=(n,e)=>xu(e)?Mu(n,e.value):ls(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Sa(i,r)+" =>"]=s,t),{})}:fu(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Sa(t))}:wn(e)?Sa(e):Ke(e)&&!Le(e)&&!mu(e)?String(e):e,Sa=(n,e="")=>{var t;return wn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Et;class Af{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Et&&(Et.active?(this.parent=Et,this.index=(Et.scopes||(Et.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Et;try{return Et=this,e()}finally{Et=t}}}on(){++this._on===1&&(this.prevScope=Et,Et=this)}off(){if(this._on>0&&--this._on===0){if(Et===this)Et=this.prevScope;else{let e=Et;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function wf(){return Et}let it;const ya=new WeakSet;class Su{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Et&&(Et.active?Et.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ya.has(this)&&(ya.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Eu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ul(this),bu(this);const e=it,t=hn;it=this,hn=!0;try{return this.fn()}finally{Tu(this),it=e,hn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ho(e);this.deps=this.depsTail=void 0,ul(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ya.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){uo(this)&&this.run()}get dirty(){return uo(this)}}let yu=0,Ns,Fs;function Eu(n,e=!1){if(n.flags|=8,e){n.next=Fs,Fs=n;return}n.next=Ns,Ns=n}function Bo(){yu++}function zo(){if(--yu>0)return;if(Fs){let e=Fs;for(Fs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ns;){let e=Ns;for(Ns=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function bu(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Tu(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Ho(i),Cf(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function uo(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Au(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Au(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Gs)||(n.globalVersion=Gs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!uo(n))))return;n.flags|=2;const e=n.dep,t=it,i=hn;it=n,hn=!0;try{bu(n);const s=n.fn(n._value);(e.version===0||yn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{it=t,hn=i,Tu(n),n.flags&=-3}}function Ho(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Ho(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Cf(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let hn=!0;const wu=[];function Xn(){wu.push(hn),hn=!1}function qn(){const n=wu.pop();hn=n===void 0?!0:n}function ul(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=it;it=void 0;try{e()}finally{it=t}}}let Gs=0;class Rf{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Go{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!it||!hn||it===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==it)t=this.activeLink=new Rf(it,this),it.deps?(t.prevDep=it.depsTail,it.depsTail.nextDep=t,it.depsTail=t):it.deps=it.depsTail=t,Cu(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=it.depsTail,t.nextDep=void 0,it.depsTail.nextDep=t,it.depsTail=t,it.deps===t&&(it.deps=i)}return t}trigger(e){this.version++,Gs++,this.notify(e)}notify(e){Bo();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{zo()}}}function Cu(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Cu(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ho=new WeakMap,Di=Symbol(""),fo=Symbol(""),ks=Symbol("");function Rt(n,e,t){if(hn&&it){let i=ho.get(n);i||ho.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Go),s.map=i,s.key=t),s.track()}}function zn(n,e,t,i,s,r){const o=ho.get(n);if(!o){Gs++;return}const a=l=>{l&&l.trigger()};if(Bo(),e==="clear")o.forEach(a);else{const l=Le(n),u=l&&Fo(t);if(l&&t==="length"){const c=Number(i);o.forEach((h,d)=>{(d==="length"||d===ks||!wn(d)&&d>=c)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(ks)),e){case"add":l?u&&a(o.get("length")):(a(o.get(Di)),ls(n)&&a(o.get(fo)));break;case"delete":l||(a(o.get(Di)),ls(n)&&a(o.get(fo)));break;case"set":ls(n)&&a(o.get(Di));break}}zo()}function Gi(n){const e=Ye(n);return e===n?e:(Rt(e,"iterate",ks),nn(n)?e:e.map(fn))}function sa(n){return Rt(n=Ye(n),"iterate",ks),n}function xn(n,e){return $n(n)?ds(Ui(n)?fn(e):e):fn(e)}const Pf={__proto__:null,[Symbol.iterator](){return Ea(this,Symbol.iterator,n=>xn(this,n))},concat(...n){return Gi(this).concat(...n.map(e=>Le(e)?Gi(e):e))},entries(){return Ea(this,"entries",n=>(n[1]=xn(this,n[1]),n))},every(n,e){return Rn(this,"every",n,e,void 0,arguments)},filter(n,e){return Rn(this,"filter",n,e,t=>t.map(i=>xn(this,i)),arguments)},find(n,e){return Rn(this,"find",n,e,t=>xn(this,t),arguments)},findIndex(n,e){return Rn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Rn(this,"findLast",n,e,t=>xn(this,t),arguments)},findLastIndex(n,e){return Rn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Rn(this,"forEach",n,e,void 0,arguments)},includes(...n){return ba(this,"includes",n)},indexOf(...n){return ba(this,"indexOf",n)},join(n){return Gi(this).join(n)},lastIndexOf(...n){return ba(this,"lastIndexOf",n)},map(n,e){return Rn(this,"map",n,e,void 0,arguments)},pop(){return Ss(this,"pop")},push(...n){return Ss(this,"push",n)},reduce(n,...e){return hl(this,"reduce",n,e)},reduceRight(n,...e){return hl(this,"reduceRight",n,e)},shift(){return Ss(this,"shift")},some(n,e){return Rn(this,"some",n,e,void 0,arguments)},splice(...n){return Ss(this,"splice",n)},toReversed(){return Gi(this).toReversed()},toSorted(n){return Gi(this).toSorted(n)},toSpliced(...n){return Gi(this).toSpliced(...n)},unshift(...n){return Ss(this,"unshift",n)},values(){return Ea(this,"values",n=>xn(this,n))}};function Ea(n,e,t){const i=sa(n),s=i[e]();return i!==n&&!nn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Lf=Array.prototype;function Rn(n,e,t,i,s,r){const o=sa(n),a=o!==n&&!nn(n),l=o[e];if(l!==Lf[e]){const h=l.apply(n,r);return a?fn(h):h}let u=t;o!==n&&(a?u=function(h,d){return t.call(this,xn(n,h),d,n)}:t.length>2&&(u=function(h,d){return t.call(this,h,d,n)}));const c=l.call(o,u,i);return a&&s?s(c):c}function hl(n,e,t,i){const s=sa(n),r=s!==n&&!nn(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(u,c,h){return a&&(a=!1,u=xn(n,u)),t.call(this,u,xn(n,c),h,n)}):t.length>3&&(o=function(u,c,h){return t.call(this,u,c,h,n)}));const l=s[e](o,...i);return a?xn(n,l):l}function ba(n,e,t){const i=Ye(n);Rt(i,"iterate",ks);const s=i[e](...t);return(s===-1||s===!1)&&Xo(t[0])?(t[0]=Ye(t[0]),i[e](...t)):s}function Ss(n,e,t=[]){Xn(),Bo();const i=Ye(n)[e].apply(n,t);return zo(),qn(),i}const If=Uo("__proto__,__v_isRef,__isVue"),Ru=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(wn));function Df(n){wn(n)||(n=String(n));const e=Ye(this);return Rt(e,"has",n),e.hasOwnProperty(n)}class Pu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Vf:Uu:r?Du:Iu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Le(e);if(!s){let l;if(o&&(l=Pf[t]))return l;if(t==="hasOwnProperty")return Df}const a=Reflect.get(e,t,Pt(e)?e:i);if((wn(t)?Ru.has(t):If(t))||(s||Rt(e,"get",t),r))return a;if(Pt(a)){const l=o&&Fo(t)?a:a.value;return s&&Ke(l)?mo(l):l}return Ke(a)?s?mo(a):Vo(a):a}}class Lu extends Pu{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Le(e)&&Fo(t);if(!this._isShallow){const u=$n(r);if(!nn(i)&&!$n(i)&&(r=Ye(r),i=Ye(i)),!o&&Pt(r)&&!Pt(i))return u||(r.value=i),!0}const a=o?Number(t)<e.length:je(e,t),l=Reflect.set(e,t,i,Pt(e)?e:s);return e===Ye(s)&&(a?yn(i,r)&&zn(e,"set",t,i):zn(e,"add",t,i)),l}deleteProperty(e,t){const i=je(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&zn(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!wn(t)||!Ru.has(t))&&Rt(e,"has",t),i}ownKeys(e){return Rt(e,"iterate",Le(e)?"length":Di),Reflect.ownKeys(e)}}class Uf extends Pu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Nf=new Lu,Ff=new Uf,Of=new Lu(!0);const po=n=>n,or=n=>Reflect.getPrototypeOf(n);function Bf(n,e,t){return function(...i){const s=this.__v_raw,r=Ye(s),o=ls(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=s[n](...i),c=t?po:e?ds:fn;return!e&&Rt(r,"iterate",l?fo:Di),St(Object.create(u),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[c(h[0]),c(h[1])]:c(h),done:d}}})}}function lr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function zf(n,e){const t={get(s){const r=this.__v_raw,o=Ye(r),a=Ye(s);n||(yn(s,a)&&Rt(o,"get",s),Rt(o,"get",a));const{has:l}=or(o),u=e?po:n?ds:fn;if(l.call(o,s))return u(r.get(s));if(l.call(o,a))return u(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Rt(Ye(s),"iterate",Di),s.size},has(s){const r=this.__v_raw,o=Ye(r),a=Ye(s);return n||(yn(s,a)&&Rt(o,"has",s),Rt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=Ye(a),u=e?po:n?ds:fn;return!n&&Rt(l,"iterate",Di),a.forEach((c,h)=>s.call(r,u(c),u(h),o))}};return St(t,n?{add:lr("add"),set:lr("set"),delete:lr("delete"),clear:lr("clear")}:{add(s){const r=Ye(this),o=or(r),a=Ye(s),l=!e&&!nn(s)&&!$n(s)?a:s;return o.has.call(r,l)||yn(s,l)&&o.has.call(r,s)||yn(a,l)&&o.has.call(r,a)||(r.add(l),zn(r,"add",l,l)),this},set(s,r){!e&&!nn(r)&&!$n(r)&&(r=Ye(r));const o=Ye(this),{has:a,get:l}=or(o);let u=a.call(o,s);u||(s=Ye(s),u=a.call(o,s));const c=l.call(o,s);return o.set(s,r),u?yn(r,c)&&zn(o,"set",s,r):zn(o,"add",s,r),this},delete(s){const r=Ye(this),{has:o,get:a}=or(r);let l=o.call(r,s);l||(s=Ye(s),l=o.call(r,s)),a&&a.call(r,s);const u=r.delete(s);return l&&zn(r,"delete",s,void 0),u},clear(){const s=Ye(this),r=s.size!==0,o=s.clear();return r&&zn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Bf(s,n,e)}),t}function ko(n,e){const t=zf(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(je(t,s)&&s in i?t:i,s,r)}const Hf={get:ko(!1,!1)},Gf={get:ko(!1,!0)},kf={get:ko(!0,!1)};const Iu=new WeakMap,Du=new WeakMap,Uu=new WeakMap,Vf=new WeakMap;function Wf(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xf(n){return n.__v_skip||!Object.isExtensible(n)?0:Wf(pf(n))}function Vo(n){return $n(n)?n:Wo(n,!1,Nf,Hf,Iu)}function qf(n){return Wo(n,!1,Of,Gf,Du)}function mo(n){return Wo(n,!0,Ff,kf,Uu)}function Wo(n,e,t,i,s){if(!Ke(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=Xf(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function Ui(n){return $n(n)?Ui(n.__v_raw):!!(n&&n.__v_isReactive)}function $n(n){return!!(n&&n.__v_isReadonly)}function nn(n){return!!(n&&n.__v_isShallow)}function Xo(n){return n?!!n.__v_raw:!1}function Ye(n){const e=n&&n.__v_raw;return e?Ye(e):n}function $f(n){return!je(n,"__v_skip")&&Object.isExtensible(n)&&_u(n,"__v_skip",!0),n}const fn=n=>Ke(n)?Vo(n):n,ds=n=>Ke(n)?mo(n):n;function Pt(n){return n?n.__v_isRef===!0:!1}function ft(n){return Yf(n,!1)}function Yf(n,e){return Pt(n)?n:new jf(n,e)}class jf{constructor(e,t){this.dep=new Go,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ye(e),this._value=t?e:fn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||nn(e)||$n(e);e=i?e:Ye(e),yn(e,t)&&(this._rawValue=e,this._value=i?e:fn(e),this.dep.trigger())}}function Nu(n){return Pt(n)?n.value:n}const Kf={get:(n,e,t)=>e==="__v_raw"?n:Nu(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Pt(s)&&!Pt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Fu(n){return Ui(n)?n:new Proxy(n,Kf)}class Zf{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Go(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&it!==this)return Eu(this,!0),!0}get value(){const e=this.dep.track();return Au(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Jf(n,e,t=!1){let i,s;return Fe(n)?i=n:(i=n.get,s=n.set),new Zf(i,s,t)}const cr={},Br=new WeakMap;let Ai;function Qf(n,e=!1,t=Ai){if(t){let i=Br.get(t);i||Br.set(t,i=[]),i.push(n)}}function ed(n,e,t=Qe){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,u=v=>s?v:nn(v)||s===!1||s===0?Hn(v,1):Hn(v);let c,h,d,m,_=!1,x=!1;if(Pt(n)?(h=()=>n.value,_=nn(n)):Ui(n)?(h=()=>u(n),_=!0):Le(n)?(x=!0,_=n.some(v=>Ui(v)||nn(v)),h=()=>n.map(v=>{if(Pt(v))return v.value;if(Ui(v))return u(v);if(Fe(v))return l?l(v,2):v()})):Fe(n)?e?h=l?()=>l(n,2):n:h=()=>{if(d){Xn();try{d()}finally{qn()}}const v=Ai;Ai=c;try{return l?l(n,3,[m]):n(m)}finally{Ai=v}}:h=Tn,e&&s){const v=h,T=s===!0?1/0:s;h=()=>Hn(v(),T)}const p=wf(),f=()=>{c.stop(),p&&p.active&&No(p.effects,c)};if(r&&e){const v=e;e=(...T)=>{v(...T),f()}}let M=x?new Array(n.length).fill(cr):cr;const g=v=>{if(!(!(c.flags&1)||!c.dirty&&!v))if(e){const T=c.run();if(s||_||(x?T.some((P,A)=>yn(P,M[A])):yn(T,M))){d&&d();const P=Ai;Ai=c;try{const A=[T,M===cr?void 0:x&&M[0]===cr?[]:M,m];M=T,l?l(e,3,A):e(...A)}finally{Ai=P}}}else c.run()};return a&&a(g),c=new Su(h),c.scheduler=o?()=>o(g,!1):g,m=v=>Qf(v,!1,c),d=c.onStop=()=>{const v=Br.get(c);if(v){if(l)l(v,4);else for(const T of v)T();Br.delete(c)}},e?i?g(!0):M=c.run():o?o(g.bind(null,!0),!0):c.run(),f.pause=c.pause.bind(c),f.resume=c.resume.bind(c),f.stop=f,f}function Hn(n,e=1/0,t){if(e<=0||!Ke(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Pt(n))Hn(n.value,e,t);else if(Le(n))for(let i=0;i<n.length;i++)Hn(n[i],e,t);else if(fu(n)||ls(n))n.forEach(i=>{Hn(i,e,t)});else if(mu(n)){for(const i in n)Hn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Hn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zs(n,e,t,i){try{return i?n(...i):n()}catch(s){ra(s,e,t)}}function dn(n,e,t,i){if(Fe(n)){const s=Zs(n,e,t,i);return s&&du(s)&&s.catch(r=>{ra(r,e,t)}),s}if(Le(n)){const s=[];for(let r=0;r<n.length;r++)s.push(dn(n[r],e,t,i));return s}}function ra(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Qe;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const c=a.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](n,l,u)===!1)return}a=a.parent}if(r){Xn(),Zs(r,null,10,[n,l,u]),qn();return}}td(n,t,s,i,o)}function td(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Nt=[];let gn=-1;const cs=[];let si=null,ss=0;const Ou=Promise.resolve();let zr=null;function Ls(n){const e=zr||Ou;return n?e.then(this?n.bind(this):n):e}function nd(n){let e=gn+1,t=Nt.length;for(;e<t;){const i=e+t>>>1,s=Nt[i],r=Vs(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function qo(n){if(!(n.flags&1)){const e=Vs(n),t=Nt[Nt.length-1];!t||!(n.flags&2)&&e>=Vs(t)?Nt.push(n):Nt.splice(nd(e),0,n),n.flags|=1,Bu()}}function Bu(){zr||(zr=Ou.then(Hu))}function id(n){Le(n)?cs.push(...n):si&&n.id===-1?si.splice(ss+1,0,n):n.flags&1||(cs.push(n),n.flags|=1),Bu()}function fl(n,e,t=gn+1){for(;t<Nt.length;t++){const i=Nt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Nt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function zu(n){if(cs.length){const e=[...new Set(cs)].sort((t,i)=>Vs(t)-Vs(i));if(cs.length=0,si){si.push(...e);return}for(si=e,ss=0;ss<si.length;ss++){const t=si[ss];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}si=null,ss=0}}const Vs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Hu(n){try{for(gn=0;gn<Nt.length;gn++){const e=Nt[gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Zs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;gn<Nt.length;gn++){const e=Nt[gn];e&&(e.flags&=-2)}gn=-1,Nt.length=0,zu(),zr=null,(Nt.length||cs.length)&&Hu()}}let tn=null,Gu=null;function Hr(n){const e=tn;return tn=n,Gu=n&&n.type.__scopeId||null,e}function ku(n,e=tn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Vr(-1);const r=Hr(e);let o;try{o=n(...s)}finally{Hr(r),i._d&&Vr(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function sd(n,e){if(tn===null)return n;const t=ua(tn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Qe]=e[s];r&&(Fe(r)&&(r={mounted:r,updated:r}),r.deep&&Hn(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function gi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Xn(),dn(l,t,8,[n.el,a,n,e]),qn())}}function rd(n,e){if(Bt){let t=Bt.provides;const i=Bt.parent&&Bt.parent.provides;i===t&&(t=Bt.provides=Object.create(i)),t[n]=e}}function Ir(n,e,t=!1){const i=yh();if(i||us){let s=us?us._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Fe(e)?e.call(i&&i.proxy):e}}const ad=Symbol.for("v-scx"),od=()=>Ir(ad);function Dr(n,e,t){return Vu(n,e,t)}function Vu(n,e,t=Qe){const{immediate:i,deep:s,flush:r,once:o}=t,a=St({},t),l=e&&i||!e&&r!=="post";let u;if($s){if(r==="sync"){const m=od();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Tn,m.resume=Tn,m.pause=Tn,m}}const c=Bt;a.call=(m,_,x)=>dn(m,c,_,x);let h=!1;r==="post"?a.scheduler=m=>{Gt(m,c&&c.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(m,_)=>{_?m():qo(m)}),a.augmentJob=m=>{e&&(m.flags|=4),h&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const d=ed(n,e,a);return $s&&(u?u.push(d):l&&d()),d}function ld(n,e,t){const i=this.proxy,s=ct(n)?n.includes(".")?Wu(i,n):()=>i[n]:n.bind(i,i);let r;Fe(e)?r=e:(r=e.handler,t=e);const o=Js(this),a=Vu(s,r.bind(i),t);return o(),a}function Wu(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const cd=Symbol("_vte"),Xu=n=>n.__isTeleport,_n=Symbol("_leaveCb"),ys=Symbol("_enterCb");function ud(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return $o(()=>{n.isMounted=!0}),Qu(()=>{n.isUnmounting=!0}),n}const Qt=[Function,Array],qu={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qt,onEnter:Qt,onAfterEnter:Qt,onEnterCancelled:Qt,onBeforeLeave:Qt,onLeave:Qt,onAfterLeave:Qt,onLeaveCancelled:Qt,onBeforeAppear:Qt,onAppear:Qt,onAfterAppear:Qt,onAppearCancelled:Qt},$u=n=>{const e=n.subTree;return e.component?$u(e.component):e},hd={name:"BaseTransition",props:qu,setup(n,{slots:e}){const t=yh(),i=ud();return()=>{const s=e.default&&Ku(e.default(),!0),r=s&&s.length?Yu(s):t.subTree?Xr():void 0;if(!r)return;const o=Ye(n),{mode:a}=o;if(i.isLeaving)return Ta(r);const l=dl(r);if(!l)return Ta(r);let u=go(l,o,i,t,h=>u=h);l.type!==Ot&&Ws(l,u);let c=t.subTree&&dl(t.subTree);if(c&&c.type!==Ot&&!Ri(c,l)&&$u(t).type!==Ot){let h=go(c,o,i,t);if(Ws(c,h),a==="out-in"&&l.type!==Ot)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete h.afterLeave,c=void 0},Ta(r);a==="in-out"&&l.type!==Ot?h.delayLeave=(d,m,_)=>{const x=ju(i,c);x[String(c.key)]=c,d[_n]=()=>{m(),d[_n]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{_(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return r}}};function Yu(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Ot){e=t;break}}return e}const fd=hd;function ju(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function go(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:h,onBeforeLeave:d,onLeave:m,onAfterLeave:_,onLeaveCancelled:x,onBeforeAppear:p,onAppear:f,onAfterAppear:M,onAppearCancelled:g}=e,v=String(n.key),T=ju(t,n),P=(O,y)=>{O&&dn(O,i,9,y)},A=(O,y)=>{const R=y[1];P(O,y),Le(O)?O.every(D=>D.length<=1)&&R():O.length<=1&&R()},L={mode:o,persisted:a,beforeEnter(O){let y=l;if(!t.isMounted)if(r)y=p||l;else return;O[_n]&&O[_n](!0);const R=T[v];R&&Ri(n,R)&&R.el[_n]&&R.el[_n](),P(y,[O])},enter(O){if(T[v]===n)return;let y=u,R=c,D=h;if(!t.isMounted)if(r)y=f||u,R=M||c,D=g||h;else return;let V=!1;O[ys]=N=>{V||(V=!0,N?P(D,[O]):P(R,[O]),L.delayedLeave&&L.delayedLeave(),O[ys]=void 0)};const w=O[ys].bind(null,!1);y?A(y,[O,w]):w()},leave(O,y){const R=String(n.key);if(O[ys]&&O[ys](!0),t.isUnmounting)return y();P(d,[O]);let D=!1;O[_n]=w=>{D||(D=!0,y(),w?P(x,[O]):P(_,[O]),O[_n]=void 0,T[R]===n&&delete T[R])};const V=O[_n].bind(null,!1);T[R]=n,m?A(m,[O,V]):V()},clone(O){const y=go(O,e,t,i,s);return s&&s(y),y}};return L}function Ta(n){if(aa(n))return n=hi(n),n.children=null,n}function dl(n){if(!aa(n))return Xu(n.type)&&n.children?Yu(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Fe(t.default))return t.default()}}function Ws(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ws(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Ku(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===Ft?(o.patchFlag&128&&s++,i=i.concat(Ku(o.children,e,a))):(e||o.type!==Ot)&&i.push(a!=null?hi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Zu(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function pl(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Gr=new WeakMap;function Os(n,e,t,i,s=!1){if(Le(n)){n.forEach((x,p)=>Os(x,e&&(Le(e)?e[p]:e),t,i,s));return}if(Bs(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Os(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?ua(i.component):i.el,o=s?null:r,{i:a,r:l}=n,u=e&&e.r,c=a.refs===Qe?a.refs={}:a.refs,h=a.setupState,d=Ye(h),m=h===Qe?hu:x=>pl(c,x)?!1:je(d,x),_=(x,p)=>!(p&&pl(c,p));if(u!=null&&u!==l){if(ml(e),ct(u))c[u]=null,m(u)&&(h[u]=null);else if(Pt(u)){const x=e;_(u,x.k)&&(u.value=null),x.k&&(c[x.k]=null)}}if(Fe(l))Zs(l,a,12,[o,c]);else{const x=ct(l),p=Pt(l);if(x||p){const f=()=>{if(n.f){const M=x?m(l)?h[l]:c[l]:_()||!n.k?l.value:c[n.k];if(s)Le(M)&&No(M,r);else if(Le(M))M.includes(r)||M.push(r);else if(x)c[l]=[r],m(l)&&(h[l]=c[l]);else{const g=[r];_(l,n.k)&&(l.value=g),n.k&&(c[n.k]=g)}}else x?(c[l]=o,m(l)&&(h[l]=o)):p&&(_(l,n.k)&&(l.value=o),n.k&&(c[n.k]=o))};if(o){const M=()=>{f(),Gr.delete(n)};M.id=-1,Gr.set(n,M),Gt(M,t)}else ml(n),f()}}}function ml(n){const e=Gr.get(n);e&&(e.flags|=8,Gr.delete(n))}ia().requestIdleCallback;ia().cancelIdleCallback;const Bs=n=>!!n.type.__asyncLoader,aa=n=>n.type.__isKeepAlive;function dd(n,e){Ju(n,"a",e)}function pd(n,e){Ju(n,"da",e)}function Ju(n,e,t=Bt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(oa(e,i,t),t){let s=t.parent;for(;s&&s.parent;)aa(s.parent.vnode)&&md(i,e,t,s),s=s.parent}}function md(n,e,t,i){const s=oa(e,n,i,!0);eh(()=>{No(i[e],s)},t)}function oa(n,e,t=Bt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Xn();const a=Js(t),l=dn(e,t,n,o);return a(),qn(),l});return i?s.unshift(r):s.push(r),r}}const Kn=n=>(e,t=Bt)=>{(!$s||n==="sp")&&oa(n,(...i)=>e(...i),t)},gd=Kn("bm"),$o=Kn("m"),_d=Kn("bu"),vd=Kn("u"),Qu=Kn("bum"),eh=Kn("um"),xd=Kn("sp"),Md=Kn("rtg"),Sd=Kn("rtc");function yd(n,e=Bt){oa("ec",n,e)}const Ed=Symbol.for("v-ndc");function Xs(n,e,t,i){let s;const r=t,o=Le(n);if(o||ct(n)){const a=o&&Ui(n);let l=!1,u=!1;a&&(l=!nn(n),u=$n(n),n=sa(n)),s=new Array(n.length);for(let c=0,h=n.length;c<h;c++)s[c]=e(l?u?ds(fn(n[c])):fn(n[c]):n[c],c,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(Ke(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];s[l]=e(n[c],c,l,r)}}else s=[];return s}const _o=n=>n?Eh(n)?ua(n):_o(n.parent):null,zs=St(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>_o(n.parent),$root:n=>_o(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>nh(n),$forceUpdate:n=>n.f||(n.f=()=>{qo(n.update)}),$nextTick:n=>n.n||(n.n=Ls.bind(n.proxy)),$watch:n=>ld.bind(n)}),Aa=(n,e)=>n!==Qe&&!n.__isScriptSetup&&je(n,e),bd={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Aa(i,e))return o[e]=1,i[e];if(s!==Qe&&je(s,e))return o[e]=2,s[e];if(je(r,e))return o[e]=3,r[e];if(t!==Qe&&je(t,e))return o[e]=4,t[e];vo&&(o[e]=0)}}const u=zs[e];let c,h;if(u)return e==="$attrs"&&Rt(n.attrs,"get",""),u(n);if((c=a.__cssModules)&&(c=c[e]))return c;if(t!==Qe&&je(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,je(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Aa(s,e)?(s[e]=t,!0):i!==Qe&&je(i,e)?(i[e]=t,!0):je(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==Qe&&a[0]!=="$"&&je(n,a)||Aa(e,a)||je(r,a)||je(i,a)||je(zs,a)||je(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:je(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function gl(n){return Le(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let vo=!0;function Td(n){const e=nh(n),t=n.proxy,i=n.ctx;vo=!1,e.beforeCreate&&_l(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:h,mounted:d,beforeUpdate:m,updated:_,activated:x,deactivated:p,beforeDestroy:f,beforeUnmount:M,destroyed:g,unmounted:v,render:T,renderTracked:P,renderTriggered:A,errorCaptured:L,serverPrefetch:O,expose:y,inheritAttrs:R,components:D,directives:V,filters:w}=e;if(u&&Ad(u,i,null),o)for(const q in o){const k=o[q];Fe(k)&&(i[q]=k.bind(t))}if(s){const q=s.call(t,t);Ke(q)&&(n.data=Vo(q))}if(vo=!0,r)for(const q in r){const k=r[q],K=Fe(k)?k.bind(t,t):Fe(k.get)?k.get.bind(t,t):Tn,ie=!Fe(k)&&Fe(k.set)?k.set.bind(t):Tn,he=Wn({get:K,set:ie});Object.defineProperty(i,q,{enumerable:!0,configurable:!0,get:()=>he.value,set:me=>he.value=me})}if(a)for(const q in a)th(a[q],i,t,q);if(l){const q=Fe(l)?l.call(t):l;Reflect.ownKeys(q).forEach(k=>{rd(k,q[k])})}c&&_l(c,n,"c");function z(q,k){Le(k)?k.forEach(K=>q(K.bind(t))):k&&q(k.bind(t))}if(z(gd,h),z($o,d),z(_d,m),z(vd,_),z(dd,x),z(pd,p),z(yd,L),z(Sd,P),z(Md,A),z(Qu,M),z(eh,v),z(xd,O),Le(y))if(y.length){const q=n.exposed||(n.exposed={});y.forEach(k=>{Object.defineProperty(q,k,{get:()=>t[k],set:K=>t[k]=K,enumerable:!0})})}else n.exposed||(n.exposed={});T&&n.render===Tn&&(n.render=T),R!=null&&(n.inheritAttrs=R),D&&(n.components=D),V&&(n.directives=V),O&&Zu(n)}function Ad(n,e,t=Tn){Le(n)&&(n=xo(n));for(const i in n){const s=n[i];let r;Ke(s)?"default"in s?r=Ir(s.from||i,s.default,!0):r=Ir(s.from||i):r=Ir(s),Pt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function _l(n,e,t){dn(Le(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function th(n,e,t,i){let s=i.includes(".")?Wu(t,i):()=>t[i];if(ct(n)){const r=e[n];Fe(r)&&Dr(s,r)}else if(Fe(n))Dr(s,n.bind(t));else if(Ke(n))if(Le(n))n.forEach(r=>th(r,e,t,i));else{const r=Fe(n.handler)?n.handler.bind(t):e[n.handler];Fe(r)&&Dr(s,r,n)}}function nh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(u=>kr(l,u,o,!0)),kr(l,e,o)),Ke(e)&&r.set(e,l),l}function kr(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&kr(n,r,t,!0),s&&s.forEach(o=>kr(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=wd[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const wd={data:vl,props:xl,emits:xl,methods:Is,computed:Is,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:Is,directives:Is,watch:Rd,provide:vl,inject:Cd};function vl(n,e){return e?n?function(){return St(Fe(n)?n.call(this,this):n,Fe(e)?e.call(this,this):e)}:e:n}function Cd(n,e){return Is(xo(n),xo(e))}function xo(n){if(Le(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function It(n,e){return n?[...new Set([].concat(n,e))]:e}function Is(n,e){return n?St(Object.create(null),n,e):e}function xl(n,e){return n?Le(n)&&Le(e)?[...new Set([...n,...e])]:St(Object.create(null),gl(n),gl(e??{})):e}function Rd(n,e){if(!n)return e;if(!e)return n;const t=St(Object.create(null),n);for(const i in e)t[i]=It(n[i],e[i]);return t}function ih(){return{app:null,config:{isNativeTag:hu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pd=0;function Ld(n,e){return function(i,s=null){Fe(i)||(i=St({},i)),s!=null&&!Ke(s)&&(s=null);const r=ih(),o=new WeakSet,a=[];let l=!1;const u=r.app={_uid:Pd++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:cp,get config(){return r.config},set config(c){},use(c,...h){return o.has(c)||(c&&Fe(c.install)?(o.add(c),c.install(u,...h)):Fe(c)&&(o.add(c),c(u,...h))),u},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),u},component(c,h){return h?(r.components[c]=h,u):r.components[c]},directive(c,h){return h?(r.directives[c]=h,u):r.directives[c]},mount(c,h,d){if(!l){const m=u._ceVNode||Mt(i,s);return m.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(m,c,d),l=!0,u._container=c,c.__vue_app__=u,ua(m.component)}},onUnmount(c){a.push(c)},unmount(){l&&(dn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,h){return r.provides[c]=h,u},runWithContext(c){const h=us;us=u;try{return c()}finally{us=h}}};return u}}let us=null;const Id=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${un(e)}Modifiers`]||n[`${zi(e)}Modifiers`];function Dd(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Qe;let s=t;const r=e.startsWith("update:"),o=r&&Id(i,e.slice(7));o&&(o.trim&&(s=t.map(c=>ct(c)?c.trim():c)),o.number&&(s=t.map(_f)));let a,l=i[a=xa(e)]||i[a=xa(un(e))];!l&&r&&(l=i[a=xa(zi(e))]),l&&dn(l,n,6,s);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,dn(u,n,6,s)}}const Ud=new WeakMap;function sh(n,e,t=!1){const i=t?Ud:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Fe(n)){const l=u=>{const c=sh(u,e,!0);c&&(a=!0,St(o,c))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(Ke(n)&&i.set(n,null),null):(Le(r)?r.forEach(l=>o[l]=null):St(o,r),Ke(n)&&i.set(n,o),o)}function la(n,e){return!n||!ea(e)?!1:(e=e.slice(2).replace(/Once$/,""),je(n,e[0].toLowerCase()+e.slice(1))||je(n,zi(e))||je(n,e))}function Ml(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:h,data:d,setupState:m,ctx:_,inheritAttrs:x}=n,p=Hr(n);let f,M;try{if(t.shapeFlag&4){const v=s||i,T=v;f=Mn(u.call(T,v,c,h,m,d,_)),M=a}else{const v=e;f=Mn(v.length>1?v(h,{attrs:a,slots:o,emit:l}):v(h,null)),M=e.props?a:Nd(a)}}catch(v){Hs.length=0,ra(v,n,1),f=Mt(Ot)}let g=f;if(M&&x!==!1){const v=Object.keys(M),{shapeFlag:T}=g;v.length&&T&7&&(r&&v.some(ta)&&(M=Fd(M,r)),g=hi(g,M,!1,!0))}return t.dirs&&(g=hi(g,null,!1,!0),g.dirs=g.dirs?g.dirs.concat(t.dirs):t.dirs),t.transition&&Ws(g,t.transition),f=g,Hr(p),f}const Nd=n=>{let e;for(const t in n)(t==="class"||t==="style"||ea(t))&&((e||(e={}))[t]=n[t]);return e},Fd=(n,e)=>{const t={};for(const i in n)(!ta(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Od(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Sl(i,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let h=0;h<c.length;h++){const d=c[h];if(rh(o,i,d)&&!la(u,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Sl(i,o,u):!0:!!o;return!1}function Sl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(rh(e,n,r)&&!la(t,r))return!0}return!1}function rh(n,e,t){const i=n[t],s=e[t];return t==="style"&&Ke(i)&&Ke(s)?!Oo(i,s):i!==s}function Bd({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const ah={},oh=()=>Object.create(ah),lh=n=>Object.getPrototypeOf(n)===ah;function zd(n,e,t,i=!1){const s={},r=oh();n.propsDefaults=Object.create(null),ch(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:qf(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Hd(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Ye(s),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let h=0;h<c.length;h++){let d=c[h];if(la(n.emitsOptions,d))continue;const m=e[d];if(l)if(je(r,d))m!==r[d]&&(r[d]=m,u=!0);else{const _=un(d);s[_]=Mo(l,a,_,m,n,!1)}else m!==r[d]&&(r[d]=m,u=!0)}}}else{ch(n,e,s,r)&&(u=!0);let c;for(const h in a)(!e||!je(e,h)&&((c=zi(h))===h||!je(e,c)))&&(l?t&&(t[h]!==void 0||t[c]!==void 0)&&(s[h]=Mo(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!je(e,h))&&(delete r[h],u=!0)}u&&zn(n.attrs,"set","")}function ch(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Us(l))continue;const u=e[l];let c;s&&je(s,c=un(l))?!r||!r.includes(c)?t[c]=u:(a||(a={}))[c]=u:la(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(r){const l=Ye(t),u=a||Qe;for(let c=0;c<r.length;c++){const h=r[c];t[h]=Mo(s,l,h,u[h],n,!je(u,h))}}return o}function Mo(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=je(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Fe(l)){const{propsDefaults:u}=s;if(t in u)i=u[t];else{const c=Js(s);i=u[t]=l.call(null,e),c()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===zi(t))&&(i=!0))}return i}const Gd=new WeakMap;function uh(n,e,t=!1){const i=t?Gd:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Fe(n)){const c=h=>{l=!0;const[d,m]=uh(h,e,!0);St(o,d),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!r&&!l)return Ke(n)&&i.set(n,os),os;if(Le(r))for(let c=0;c<r.length;c++){const h=un(r[c]);yl(h)&&(o[h]=Qe)}else if(r)for(const c in r){const h=un(c);if(yl(h)){const d=r[c],m=o[h]=Le(d)||Fe(d)?{type:d}:St({},d),_=m.type;let x=!1,p=!0;if(Le(_))for(let f=0;f<_.length;++f){const M=_[f],g=Fe(M)&&M.name;if(g==="Boolean"){x=!0;break}else g==="String"&&(p=!1)}else x=Fe(_)&&_.name==="Boolean";m[0]=x,m[1]=p,(x||je(m,"default"))&&a.push(h)}}const u=[o,a];return Ke(n)&&i.set(n,u),u}function yl(n){return n[0]!=="$"&&!Us(n)}const Yo=n=>n==="_"||n==="_ctx"||n==="$stable",jo=n=>Le(n)?n.map(Mn):[Mn(n)],kd=(n,e,t)=>{if(e._n)return e;const i=ku((...s)=>jo(e(...s)),t);return i._c=!1,i},hh=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Yo(s))continue;const r=n[s];if(Fe(r))e[s]=kd(s,r,i);else if(r!=null){const o=jo(r);e[s]=()=>o}}},fh=(n,e)=>{const t=jo(e);n.slots.default=()=>t},dh=(n,e,t)=>{for(const i in e)(t||!Yo(i))&&(n[i]=e[i])},Vd=(n,e,t)=>{const i=n.slots=oh();if(n.vnode.shapeFlag&32){const s=e._;s?(dh(i,e,t),t&&_u(i,"_",s,!0)):hh(e,i)}else e&&fh(n,e)},Wd=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=Qe;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:dh(s,e,t):(r=!e.$stable,hh(e,s)),o=e}else e&&(fh(n,e),o={default:1});if(r)for(const a in s)!Yo(a)&&o[a]==null&&delete s[a]},Gt=jd;function Xd(n){return qd(n)}function qd(n,e){const t=ia();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:h,nextSibling:d,setScopeId:m=Tn,insertStaticContent:_}=n,x=(E,I,B,Q=null,W=null,ee=null,re=void 0,se=null,ae=!!I.dynamicChildren)=>{if(E===I)return;E&&!Ri(E,I)&&(Q=Re(E),me(E,W,ee,!0),E=null),I.patchFlag===-2&&(ae=!1,I.dynamicChildren=null);const{type:b,ref:S,shapeFlag:U}=I;switch(b){case ca:p(E,I,B,Q);break;case Ot:f(E,I,B,Q);break;case Ur:E==null&&M(I,B,Q,re);break;case Ft:D(E,I,B,Q,W,ee,re,se,ae);break;default:U&1?T(E,I,B,Q,W,ee,re,se,ae):U&6?V(E,I,B,Q,W,ee,re,se,ae):(U&64||U&128)&&b.process(E,I,B,Q,W,ee,re,se,ae,qe)}S!=null&&W?Os(S,E&&E.ref,ee,I||E,!I):S==null&&E&&E.ref!=null&&Os(E.ref,null,ee,E,!0)},p=(E,I,B,Q)=>{if(E==null)i(I.el=a(I.children),B,Q);else{const W=I.el=E.el;I.children!==E.children&&u(W,I.children)}},f=(E,I,B,Q)=>{E==null?i(I.el=l(I.children||""),B,Q):I.el=E.el},M=(E,I,B,Q)=>{[E.el,E.anchor]=_(E.children,I,B,Q,E.el,E.anchor)},g=({el:E,anchor:I},B,Q)=>{let W;for(;E&&E!==I;)W=d(E),i(E,B,Q),E=W;i(I,B,Q)},v=({el:E,anchor:I})=>{let B;for(;E&&E!==I;)B=d(E),s(E),E=B;s(I)},T=(E,I,B,Q,W,ee,re,se,ae)=>{if(I.type==="svg"?re="svg":I.type==="math"&&(re="mathml"),E==null)P(I,B,Q,W,ee,re,se,ae);else{const b=E.el&&E.el._isVueCE?E.el:null;try{b&&b._beginPatch(),O(E,I,W,ee,re,se,ae)}finally{b&&b._endPatch()}}},P=(E,I,B,Q,W,ee,re,se)=>{let ae,b;const{props:S,shapeFlag:U,transition:H,dirs:Z}=E;if(ae=E.el=o(E.type,ee,S&&S.is,S),U&8?c(ae,E.children):U&16&&L(E.children,ae,null,Q,W,wa(E,ee),re,se),Z&&gi(E,null,Q,"created"),A(ae,E,E.scopeId,re,Q),S){for(const Me in S)Me!=="value"&&!Us(Me)&&r(ae,Me,null,S[Me],ee,Q);"value"in S&&r(ae,"value",null,S.value,ee),(b=S.onVnodeBeforeMount)&&mn(b,Q,E)}Z&&gi(E,null,Q,"beforeMount");const ne=$d(W,H);ne&&H.beforeEnter(ae),i(ae,I,B),((b=S&&S.onVnodeMounted)||ne||Z)&&Gt(()=>{try{b&&mn(b,Q,E),ne&&H.enter(ae),Z&&gi(E,null,Q,"mounted")}finally{}},W)},A=(E,I,B,Q,W)=>{if(B&&m(E,B),Q)for(let ee=0;ee<Q.length;ee++)m(E,Q[ee]);if(W){let ee=W.subTree;if(I===ee||_h(ee.type)&&(ee.ssContent===I||ee.ssFallback===I)){const re=W.vnode;A(E,re,re.scopeId,re.slotScopeIds,W.parent)}}},L=(E,I,B,Q,W,ee,re,se,ae=0)=>{for(let b=ae;b<E.length;b++){const S=E[b]=se?Bn(E[b]):Mn(E[b]);x(null,S,I,B,Q,W,ee,re,se)}},O=(E,I,B,Q,W,ee,re)=>{const se=I.el=E.el;let{patchFlag:ae,dynamicChildren:b,dirs:S}=I;ae|=E.patchFlag&16;const U=E.props||Qe,H=I.props||Qe;let Z;if(B&&_i(B,!1),(Z=H.onVnodeBeforeUpdate)&&mn(Z,B,I,E),S&&gi(I,E,B,"beforeUpdate"),B&&_i(B,!0),(U.innerHTML&&H.innerHTML==null||U.textContent&&H.textContent==null)&&c(se,""),b?y(E.dynamicChildren,b,se,B,Q,wa(I,W),ee):re||k(E,I,se,null,B,Q,wa(I,W),ee,!1),ae>0){if(ae&16)R(se,U,H,B,W);else if(ae&2&&U.class!==H.class&&r(se,"class",null,H.class,W),ae&4&&r(se,"style",U.style,H.style,W),ae&8){const ne=I.dynamicProps;for(let Me=0;Me<ne.length;Me++){const ge=ne[Me],oe=U[ge],ue=H[ge];(ue!==oe||ge==="value")&&r(se,ge,oe,ue,W,B)}}ae&1&&E.children!==I.children&&c(se,I.children)}else!re&&b==null&&R(se,U,H,B,W);((Z=H.onVnodeUpdated)||S)&&Gt(()=>{Z&&mn(Z,B,I,E),S&&gi(I,E,B,"updated")},Q)},y=(E,I,B,Q,W,ee,re)=>{for(let se=0;se<I.length;se++){const ae=E[se],b=I[se],S=ae.el&&(ae.type===Ft||!Ri(ae,b)||ae.shapeFlag&198)?h(ae.el):B;x(ae,b,S,null,Q,W,ee,re,!0)}},R=(E,I,B,Q,W)=>{if(I!==B){if(I!==Qe)for(const ee in I)!Us(ee)&&!(ee in B)&&r(E,ee,I[ee],null,W,Q);for(const ee in B){if(Us(ee))continue;const re=B[ee],se=I[ee];re!==se&&ee!=="value"&&r(E,ee,se,re,W,Q)}"value"in B&&r(E,"value",I.value,B.value,W)}},D=(E,I,B,Q,W,ee,re,se,ae)=>{const b=I.el=E?E.el:a(""),S=I.anchor=E?E.anchor:a("");let{patchFlag:U,dynamicChildren:H,slotScopeIds:Z}=I;Z&&(se=se?se.concat(Z):Z),E==null?(i(b,B,Q),i(S,B,Q),L(I.children||[],B,S,W,ee,re,se,ae)):U>0&&U&64&&H&&E.dynamicChildren&&E.dynamicChildren.length===H.length?(y(E.dynamicChildren,H,B,W,ee,re,se),(I.key!=null||W&&I===W.subTree)&&ph(E,I,!0)):k(E,I,B,S,W,ee,re,se,ae)},V=(E,I,B,Q,W,ee,re,se,ae)=>{I.slotScopeIds=se,E==null?I.shapeFlag&512?W.ctx.activate(I,B,Q,re,ae):w(I,B,Q,W,ee,re,ae):N(E,I,ae)},w=(E,I,B,Q,W,ee,re)=>{const se=E.component=np(E,Q,W);if(aa(E)&&(se.ctx.renderer=qe),ip(se,!1,re),se.asyncDep){if(W&&W.registerDep(se,z,re),!E.el){const ae=se.subTree=Mt(Ot);f(null,ae,I,B),E.placeholder=ae.el}}else z(se,E,I,B,W,ee,re)},N=(E,I,B)=>{const Q=I.component=E.component;if(Od(E,I,B))if(Q.asyncDep&&!Q.asyncResolved){q(Q,I,B);return}else Q.next=I,Q.update();else I.el=E.el,Q.vnode=I},z=(E,I,B,Q,W,ee,re)=>{const se=()=>{if(E.isMounted){let{next:U,bu:H,u:Z,parent:ne,vnode:Me}=E;{const le=mh(E);if(le){U&&(U.el=Me.el,q(E,U,re)),le.asyncDep.then(()=>{Gt(()=>{E.isUnmounted||b()},W)});return}}let ge=U,oe;_i(E,!1),U?(U.el=Me.el,q(E,U,re)):U=Me,H&&Ma(H),(oe=U.props&&U.props.onVnodeBeforeUpdate)&&mn(oe,ne,U,Me),_i(E,!0);const ue=Ml(E),Ce=E.subTree;E.subTree=ue,x(Ce,ue,h(Ce.el),Re(Ce),E,W,ee),U.el=ue.el,ge===null&&Bd(E,ue.el),Z&&Gt(Z,W),(oe=U.props&&U.props.onVnodeUpdated)&&Gt(()=>mn(oe,ne,U,Me),W)}else{let U;const{el:H,props:Z}=I,{bm:ne,m:Me,parent:ge,root:oe,type:ue}=E,Ce=Bs(I);_i(E,!1),ne&&Ma(ne),!Ce&&(U=Z&&Z.onVnodeBeforeMount)&&mn(U,ge,I),_i(E,!0);{oe.ce&&oe.ce._hasShadowRoot()&&oe.ce._injectChildStyle(ue,E.parent?E.parent.type:void 0);const le=E.subTree=Ml(E);x(null,le,B,Q,E,W,ee),I.el=le.el}if(Me&&Gt(Me,W),!Ce&&(U=Z&&Z.onVnodeMounted)){const le=I;Gt(()=>mn(U,ge,le),W)}(I.shapeFlag&256||ge&&Bs(ge.vnode)&&ge.vnode.shapeFlag&256)&&E.a&&Gt(E.a,W),E.isMounted=!0,I=B=Q=null}};E.scope.on();const ae=E.effect=new Su(se);E.scope.off();const b=E.update=ae.run.bind(ae),S=E.job=ae.runIfDirty.bind(ae);S.i=E,S.id=E.uid,ae.scheduler=()=>qo(S),_i(E,!0),b()},q=(E,I,B)=>{I.component=E;const Q=E.vnode.props;E.vnode=I,E.next=null,Hd(E,I.props,Q,B),Wd(E,I.children,B),Xn(),fl(E),qn()},k=(E,I,B,Q,W,ee,re,se,ae=!1)=>{const b=E&&E.children,S=E?E.shapeFlag:0,U=I.children,{patchFlag:H,shapeFlag:Z}=I;if(H>0){if(H&128){ie(b,U,B,Q,W,ee,re,se,ae);return}else if(H&256){K(b,U,B,Q,W,ee,re,se,ae);return}}Z&8?(S&16&&xe(b,W,ee),U!==b&&c(B,U)):S&16?Z&16?ie(b,U,B,Q,W,ee,re,se,ae):xe(b,W,ee,!0):(S&8&&c(B,""),Z&16&&L(U,B,Q,W,ee,re,se,ae))},K=(E,I,B,Q,W,ee,re,se,ae)=>{E=E||os,I=I||os;const b=E.length,S=I.length,U=Math.min(b,S);let H;for(H=0;H<U;H++){const Z=I[H]=ae?Bn(I[H]):Mn(I[H]);x(E[H],Z,B,null,W,ee,re,se,ae)}b>S?xe(E,W,ee,!0,!1,U):L(I,B,Q,W,ee,re,se,ae,U)},ie=(E,I,B,Q,W,ee,re,se,ae)=>{let b=0;const S=I.length;let U=E.length-1,H=S-1;for(;b<=U&&b<=H;){const Z=E[b],ne=I[b]=ae?Bn(I[b]):Mn(I[b]);if(Ri(Z,ne))x(Z,ne,B,null,W,ee,re,se,ae);else break;b++}for(;b<=U&&b<=H;){const Z=E[U],ne=I[H]=ae?Bn(I[H]):Mn(I[H]);if(Ri(Z,ne))x(Z,ne,B,null,W,ee,re,se,ae);else break;U--,H--}if(b>U){if(b<=H){const Z=H+1,ne=Z<S?I[Z].el:Q;for(;b<=H;)x(null,I[b]=ae?Bn(I[b]):Mn(I[b]),B,ne,W,ee,re,se,ae),b++}}else if(b>H)for(;b<=U;)me(E[b],W,ee,!0),b++;else{const Z=b,ne=b,Me=new Map;for(b=ne;b<=H;b++){const Ee=I[b]=ae?Bn(I[b]):Mn(I[b]);Ee.key!=null&&Me.set(Ee.key,b)}let ge,oe=0;const ue=H-ne+1;let Ce=!1,le=0;const et=new Array(ue);for(b=0;b<ue;b++)et[b]=0;for(b=Z;b<=U;b++){const Ee=E[b];if(oe>=ue){me(Ee,W,ee,!0);continue}let Se;if(Ee.key!=null)Se=Me.get(Ee.key);else for(ge=ne;ge<=H;ge++)if(et[ge-ne]===0&&Ri(Ee,I[ge])){Se=ge;break}Se===void 0?me(Ee,W,ee,!0):(et[Se-ne]=b+1,Se>=le?le=Se:Ce=!0,x(Ee,I[Se],B,null,W,ee,re,se,ae),oe++)}const ze=Ce?Yd(et):os;for(ge=ze.length-1,b=ue-1;b>=0;b--){const Ee=ne+b,Se=I[Ee],Te=I[Ee+1],We=Ee+1<S?Te.el||gh(Te):Q;et[b]===0?x(null,Se,B,We,W,ee,re,se,ae):Ce&&(ge<0||b!==ze[ge]?he(Se,B,We,2):ge--)}}},he=(E,I,B,Q,W=null)=>{const{el:ee,type:re,transition:se,children:ae,shapeFlag:b}=E;if(b&6){he(E.component.subTree,I,B,Q);return}if(b&128){E.suspense.move(I,B,Q);return}if(b&64){re.move(E,I,B,qe);return}if(re===Ft){i(ee,I,B);for(let U=0;U<ae.length;U++)he(ae[U],I,B,Q);i(E.anchor,I,B);return}if(re===Ur){g(E,I,B);return}if(Q!==2&&b&1&&se)if(Q===0)se.beforeEnter(ee),i(ee,I,B),Gt(()=>se.enter(ee),W);else{const{leave:U,delayLeave:H,afterLeave:Z}=se,ne=()=>{E.ctx.isUnmounted?s(ee):i(ee,I,B)},Me=()=>{ee._isLeaving&&ee[_n](!0),U(ee,()=>{ne(),Z&&Z()})};H?H(ee,ne,Me):Me()}else i(ee,I,B)},me=(E,I,B,Q=!1,W=!1)=>{const{type:ee,props:re,ref:se,children:ae,dynamicChildren:b,shapeFlag:S,patchFlag:U,dirs:H,cacheIndex:Z,memo:ne}=E;if(U===-2&&(W=!1),se!=null&&(Xn(),Os(se,null,B,E,!0),qn()),Z!=null&&(I.renderCache[Z]=void 0),S&256){I.ctx.deactivate(E);return}const Me=S&1&&H,ge=!Bs(E);let oe;if(ge&&(oe=re&&re.onVnodeBeforeUnmount)&&mn(oe,I,E),S&6)ce(E.component,B,Q);else{if(S&128){E.suspense.unmount(B,Q);return}Me&&gi(E,null,I,"beforeUnmount"),S&64?E.type.remove(E,I,B,qe,Q):b&&!b.hasOnce&&(ee!==Ft||U>0&&U&64)?xe(b,I,B,!1,!0):(ee===Ft&&U&384||!W&&S&16)&&xe(ae,I,B),Q&&Ie(E)}const ue=ne!=null&&Z==null;(ge&&(oe=re&&re.onVnodeUnmounted)||Me||ue)&&Gt(()=>{oe&&mn(oe,I,E),Me&&gi(E,null,I,"unmounted"),ue&&(E.el=null)},B)},Ie=E=>{const{type:I,el:B,anchor:Q,transition:W}=E;if(I===Ft){te(B,Q);return}if(I===Ur){v(E);return}const ee=()=>{s(B),W&&!W.persisted&&W.afterLeave&&W.afterLeave()};if(E.shapeFlag&1&&W&&!W.persisted){const{leave:re,delayLeave:se}=W,ae=()=>re(B,ee);se?se(E.el,ee,ae):ae()}else ee()},te=(E,I)=>{let B;for(;E!==I;)B=d(E),s(E),E=B;s(I)},ce=(E,I,B)=>{const{bum:Q,scope:W,job:ee,subTree:re,um:se,m:ae,a:b}=E;El(ae),El(b),Q&&Ma(Q),W.stop(),ee&&(ee.flags|=8,me(re,E,I,B)),se&&Gt(se,I),Gt(()=>{E.isUnmounted=!0},I)},xe=(E,I,B,Q=!1,W=!1,ee=0)=>{for(let re=ee;re<E.length;re++)me(E[re],I,B,Q,W)},Re=E=>{if(E.shapeFlag&6)return Re(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const I=d(E.anchor||E.el),B=I&&I[cd];return B?d(B):I};let Ae=!1;const be=(E,I,B)=>{let Q;E==null?I._vnode&&(me(I._vnode,null,null,!0),Q=I._vnode.component):x(I._vnode||null,E,I,null,null,null,B),I._vnode=E,Ae||(Ae=!0,fl(Q),zu(),Ae=!1)},qe={p:x,um:me,m:he,r:Ie,mt:w,mc:L,pc:k,pbc:y,n:Re,o:n};return{render:be,hydrate:void 0,createApp:Ld(be)}}function wa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function _i({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function $d(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function ph(n,e,t=!1){const i=n.children,s=e.children;if(Le(i)&&Le(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Bn(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&ph(o,a)),a.type===ca&&(a.patchFlag===-1&&(a=s[r]=Bn(a)),a.el=o.el),a.type===Ot&&!a.el&&(a.el=o.el)}}function Yd(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(s=t[t.length-1],n[s]<u){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<u?r=a+1:o=a;u<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function mh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:mh(e)}function El(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function gh(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?gh(e.subTree):null}const _h=n=>n.__isSuspense;function jd(n,e){e&&e.pendingBranch?Le(n)?e.effects.push(...n):e.effects.push(n):id(n)}const Ft=Symbol.for("v-fgt"),ca=Symbol.for("v-txt"),Ot=Symbol.for("v-cmt"),Ur=Symbol.for("v-stc"),Hs=[];let jt=null;function dt(n=!1){Hs.push(jt=n?null:[])}function Kd(){Hs.pop(),jt=Hs[Hs.length-1]||null}let qs=1;function Vr(n,e=!1){qs+=n,n<0&&jt&&e&&(jt.hasOnce=!0)}function vh(n){return n.dynamicChildren=qs>0?jt||os:null,Kd(),qs>0&&jt&&jt.push(n),n}function bt(n,e,t,i,s,r){return vh(fe(n,e,t,i,s,r,!0))}function xh(n,e,t,i,s){return vh(Mt(n,e,t,i,s,!0))}function Wr(n){return n?n.__v_isVNode===!0:!1}function Ri(n,e){return n.type===e.type&&n.key===e.key}const Mh=({key:n})=>n??null,Nr=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ct(n)||Pt(n)||Fe(n)?{i:tn,r:n,k:e,f:!!t}:n:null);function fe(n,e=null,t=null,i=0,s=null,r=n===Ft?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Mh(e),ref:e&&Nr(e),scopeId:Gu,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:tn};return a?(Ko(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=ct(t)?8:16),qs>0&&!o&&jt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&jt.push(l),l}const Mt=Zd;function Zd(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Ed)&&(n=Ot),Wr(n)){const a=hi(n,e,!0);return t&&Ko(a,t),qs>0&&!r&&jt&&(a.shapeFlag&6?jt[jt.indexOf(n)]=a:jt.push(a)),a.patchFlag=-2,a}if(op(n)&&(n=n.__vccOpts),e){e=Jd(e);let{class:a,style:l}=e;a&&!ct(a)&&(e.class=Yt(a)),Ke(l)&&(Xo(l)&&!Le(l)&&(l=St({},l)),e.style=ai(l))}const o=ct(n)?1:_h(n)?128:Xu(n)?64:Ke(n)?4:Fe(n)?2:0;return fe(n,e,t,i,s,o,r,!0)}function Jd(n){return n?Xo(n)||lh(n)?St({},n):n:null}function hi(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,u=e?Qd(s||{},e):s,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Mh(u),ref:e&&e.ref?t&&r?Le(r)?r.concat(Nr(e)):[r,Nr(e)]:Nr(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ft?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&hi(n.ssContent),ssFallback:n.ssFallback&&hi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Ws(c,l.clone(c)),c}function So(n=" ",e=0){return Mt(ca,null,n,e)}function Sh(n,e){const t=Mt(Ur,null,n);return t.staticCount=e,t}function Xr(n="",e=!1){return e?(dt(),xh(Ot,null,n)):Mt(Ot,null,n)}function Mn(n){return n==null||typeof n=="boolean"?Mt(Ot):Le(n)?Mt(Ft,null,n.slice()):Wr(n)?Bn(n):Mt(ca,null,String(n))}function Bn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:hi(n)}function Ko(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Le(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Ko(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!lh(e)?e._ctx=tn:s===3&&tn&&(tn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Fe(e)?(e={default:e,_ctx:tn},t=32):(e=String(e),i&64?(t=16,e=[So(e)]):t=8);n.children=e,n.shapeFlag|=t}function Qd(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Yt([e.class,i.class]));else if(s==="style")e.style=ai([e.style,i.style]);else if(ea(s)){const r=e[s],o=i[s];o&&r!==o&&!(Le(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!ta(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function mn(n,e,t,i=null){dn(n,e,7,[t,i])}const ep=ih();let tp=0;function np(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||ep,r={uid:tp++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Af(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:uh(i,s),emitsOptions:sh(i,s),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:i.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Dd.bind(null,r),n.ce&&n.ce(r),r}let Bt=null;const yh=()=>Bt||tn;let qr,yo;{const n=ia(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};qr=e("__VUE_INSTANCE_SETTERS__",t=>Bt=t),yo=e("__VUE_SSR_SETTERS__",t=>$s=t)}const Js=n=>{const e=Bt;return qr(n),n.scope.on(),()=>{n.scope.off(),qr(e)}},bl=()=>{Bt&&Bt.scope.off(),qr(null)};function Eh(n){return n.vnode.shapeFlag&4}let $s=!1;function ip(n,e=!1,t=!1){e&&yo(e);const{props:i,children:s}=n.vnode,r=Eh(n);zd(n,i,r,e),Vd(n,s,t||e);const o=r?sp(n,e):void 0;return e&&yo(!1),o}function sp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,bd);const{setup:i}=t;if(i){Xn();const s=n.setupContext=i.length>1?ap(n):null,r=Js(n),o=Zs(i,n,0,[n.props,s]),a=du(o);if(qn(),r(),(a||n.sp)&&!Bs(n)&&Zu(n),a){if(o.then(bl,bl),e)return o.then(l=>{Tl(n,l)}).catch(l=>{ra(l,n,0)});n.asyncDep=o}else Tl(n,o)}else bh(n)}function Tl(n,e,t){Fe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ke(e)&&(n.setupState=Fu(e)),bh(n)}function bh(n,e,t){const i=n.type;n.render||(n.render=i.render||Tn);{const s=Js(n);Xn();try{Td(n)}finally{qn(),s()}}}const rp={get(n,e){return Rt(n,"get",""),n[e]}};function ap(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,rp),slots:n.slots,emit:n.emit,expose:e}}function ua(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Fu($f(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in zs)return zs[t](n)},has(e,t){return t in e||t in zs}})):n.proxy}function op(n){return Fe(n)&&"__vccOpts"in n}const Wn=(n,e)=>Jf(n,e,$s);function lp(n,e,t){try{Vr(-1);const i=arguments.length;return i===2?Ke(e)&&!Le(e)?Wr(e)?Mt(n,null,[e]):Mt(n,e):Mt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Wr(t)&&(t=[t]),Mt(n,e,t))}finally{Vr(1)}}const cp="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Eo;const Al=typeof window<"u"&&window.trustedTypes;if(Al)try{Eo=Al.createPolicy("vue",{createHTML:n=>n})}catch{}const Th=Eo?n=>Eo.createHTML(n):n=>n,up="http://www.w3.org/2000/svg",hp="http://www.w3.org/1998/Math/MathML",On=typeof document<"u"?document:null,wl=On&&On.createElement("template"),fp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?On.createElementNS(up,n):e==="mathml"?On.createElementNS(hp,n):t?On.createElement(n,{is:t}):On.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>On.createTextNode(n),createComment:n=>On.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>On.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{wl.innerHTML=Th(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=wl.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Zn="transition",Es="animation",Ys=Symbol("_vtc"),Ah={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},dp=St({},qu,Ah),pp=n=>(n.displayName="Transition",n.props=dp,n),mp=pp((n,{slots:e})=>lp(fd,gp(n),e)),vi=(n,e=[])=>{Le(n)?n.forEach(t=>t(...e)):n&&n(...e)},Cl=n=>n?Le(n)?n.some(e=>e.length>1):n.length>1:!1;function gp(n){const e={};for(const D in n)D in Ah||(e[D]=n[D]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,_=_p(s),x=_&&_[0],p=_&&_[1],{onBeforeEnter:f,onEnter:M,onEnterCancelled:g,onLeave:v,onLeaveCancelled:T,onBeforeAppear:P=f,onAppear:A=M,onAppearCancelled:L=g}=e,O=(D,V,w,N)=>{D._enterCancelled=N,xi(D,V?c:a),xi(D,V?u:o),w&&w()},y=(D,V)=>{D._isLeaving=!1,xi(D,h),xi(D,m),xi(D,d),V&&V()},R=D=>(V,w)=>{const N=D?A:M,z=()=>O(V,D,w);vi(N,[V,z]),Rl(()=>{xi(V,D?l:r),Pn(V,D?c:a),Cl(N)||Pl(V,i,x,z)})};return St(e,{onBeforeEnter(D){vi(f,[D]),Pn(D,r),Pn(D,o)},onBeforeAppear(D){vi(P,[D]),Pn(D,l),Pn(D,u)},onEnter:R(!1),onAppear:R(!0),onLeave(D,V){D._isLeaving=!0;const w=()=>y(D,V);Pn(D,h),D._enterCancelled?(Pn(D,d),Dl(D)):(Dl(D),Pn(D,d)),Rl(()=>{D._isLeaving&&(xi(D,h),Pn(D,m),Cl(v)||Pl(D,i,p,w))}),vi(v,[D,w])},onEnterCancelled(D){O(D,!1,void 0,!0),vi(g,[D])},onAppearCancelled(D){O(D,!0,void 0,!0),vi(L,[D])},onLeaveCancelled(D){y(D),vi(T,[D])}})}function _p(n){if(n==null)return null;if(Ke(n))return[Ca(n.enter),Ca(n.leave)];{const e=Ca(n);return[e,e]}}function Ca(n){return vf(n)}function Pn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Ys]||(n[Ys]=new Set)).add(e)}function xi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Ys];t&&(t.delete(e),t.size||(n[Ys]=void 0))}function Rl(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let vp=0;function Pl(n,e,t,i){const s=n._endId=++vp,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=xp(n,e);if(!o)return i();const u=o+"end";let c=0;const h=()=>{n.removeEventListener(u,d),r()},d=m=>{m.target===n&&++c>=l&&h()};setTimeout(()=>{c<l&&h()},a+1),n.addEventListener(u,d)}function xp(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),s=i(`${Zn}Delay`),r=i(`${Zn}Duration`),o=Ll(s,r),a=i(`${Es}Delay`),l=i(`${Es}Duration`),u=Ll(a,l);let c=null,h=0,d=0;e===Zn?o>0&&(c=Zn,h=o,d=r.length):e===Es?u>0&&(c=Es,h=u,d=l.length):(h=Math.max(o,u),c=h>0?o>u?Zn:Es:null,d=c?c===Zn?r.length:l.length:0);const m=c===Zn&&/\b(?:transform|all)(?:,|$)/.test(i(`${Zn}Property`).toString());return{type:c,timeout:h,propCount:d,hasTransform:m}}function Ll(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Il(t)+Il(n[i])))}function Il(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Dl(n){return(n?n.ownerDocument:document).body.offsetHeight}function Mp(n,e,t){const i=n[Ys];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const $r=Symbol("_vod"),wh=Symbol("_vsh"),Sp={name:"show",beforeMount(n,{value:e},{transition:t}){n[$r]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):bs(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),bs(n,!0),i.enter(n)):i.leave(n,()=>{bs(n,!1)}):bs(n,e))},beforeUnmount(n,{value:e}){bs(n,e)}};function bs(n,e){n.style.display=e?n[$r]:"none",n[wh]=!e}const yp=Symbol(""),Ep=/(?:^|;)\s*display\s*:/;function bp(n,e,t){const i=n.style,s=ct(t);let r=!1;if(t&&!s){if(e)if(ct(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ds(i,a,"")}else for(const o in e)t[o]==null&&Ds(i,o,"");for(const o in t){o==="display"&&(r=!0);const a=t[o];a!=null?Ap(n,o,!ct(e)&&e?e[o]:void 0,a)||Ds(i,o,a):Ds(i,o,"")}}else if(s){if(e!==t){const o=i[yp];o&&(t+=";"+o),i.cssText=t,r=Ep.test(t)}}else e&&n.removeAttribute("style");$r in n&&(n[$r]=r?i.display:"",n[wh]&&(i.display="none"))}const Ul=/\s*!important$/;function Ds(n,e,t){if(Le(t))t.forEach(i=>Ds(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Tp(n,e);Ul.test(t)?n.setProperty(zi(i),t.replace(Ul,""),"important"):n[i]=t}}const Nl=["Webkit","Moz","ms"],Ra={};function Tp(n,e){const t=Ra[e];if(t)return t;let i=un(e);if(i!=="filter"&&i in n)return Ra[e]=i;i=gu(i);for(let s=0;s<Nl.length;s++){const r=Nl[s]+i;if(r in n)return Ra[e]=r}return e}function Ap(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&ct(i)&&t===i}const Fl="http://www.w3.org/1999/xlink";function Ol(n,e,t,i,s,r=bf(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Fl,e.slice(6,e.length)):n.setAttributeNS(Fl,e,t):t==null||r&&!vu(t)?n.removeAttribute(e):n.setAttribute(e,r?"":wn(t)?String(t):t)}function Bl(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Th(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=vu(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function wp(n,e,t,i){n.addEventListener(e,t,i)}function Cp(n,e,t,i){n.removeEventListener(e,t,i)}const zl=Symbol("_vei");function Rp(n,e,t,i,s=null){const r=n[zl]||(n[zl]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Pp(e);if(i){const u=r[e]=Dp(i,s);wp(n,a,u,l)}else o&&(Cp(n,a,o,l),r[e]=void 0)}}const Hl=/(?:Once|Passive|Capture)$/;function Pp(n){let e;if(Hl.test(n)){e={};let i;for(;i=n.match(Hl);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):zi(n.slice(2)),e]}let Pa=0;const Lp=Promise.resolve(),Ip=()=>Pa||(Lp.then(()=>Pa=0),Pa=Date.now());function Dp(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;dn(Up(i,t.value),e,5,[i])};return t.value=n,t.attached=Ip(),t}function Up(n,e){if(Le(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Gl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Np=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Mp(n,i,o):e==="style"?bp(n,t,i):ea(e)?ta(e)||Rp(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Fp(n,e,i,o))?(Bl(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ol(n,e,i,o,r,e!=="value")):n._isVueCE&&(Op(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!ct(i)))?Bl(n,un(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Ol(n,e,i,o))};function Fp(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Gl(e)&&Fe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Gl(e)&&ct(t)?!1:e in n}function Op(n,e){const t=n._def.props;if(!t)return!1;const i=un(e);return Array.isArray(t)?t.some(s=>un(s)===i):Object.keys(t).some(s=>un(s)===i)}const Bp=["ctrl","shift","alt","meta"],zp={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Bp.some(t=>n[`${t}Key`]&&!e.includes(t))},Hp=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=zp[e[o]];if(a&&a(s,e))return}return n(s,...r)})},Gp=St({patchProp:Np},fp);let kl;function kp(){return kl||(kl=Xd(Gp))}const Vp=(...n)=>{const e=kp().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Xp(i);if(!s)return;const r=e._component;!Fe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Wp(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Wp(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Xp(n){return ct(n)?document.querySelector(n):n}const Qs=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},qp={class:"topbar"},$p={class:"topbar-right"},Yp={class:"theme-switcher"},jp=["title","onClick"],Kp={__name:"TopBar",props:{currentTheme:{type:String,default:"dark"}},emits:["set-theme"],setup(n){const e=[{id:"dark",label:"黑色",color:"#111"},{id:"gray",label:"灰色",color:"#555"},{id:"light",label:"白色",color:"#e8e8e8"}];return(t,i)=>(dt(),bt("header",qp,[i[4]||(i[4]=Sh('<div class="topbar-left" data-v-14d3a547><div class="logo" data-v-14d3a547><span class="logo-k" data-v-14d3a547>K</span><span class="logo-rest" data-v-14d3a547>Skr</span></div><div class="topbar-divider" data-v-14d3a547></div><span class="topbar-subtitle" data-v-14d3a547>AE Plugin Preview</span></div>',1)),fe("div",$p,[i[0]||(i[0]=fe("a",{href:"https://kskr.kuaishou.com",target:"_blank",class:"topbar-link"},"文档",-1)),i[1]||(i[1]=fe("a",{href:"#",class:"topbar-link"},"更新日志",-1)),i[2]||(i[2]=fe("a",{href:"#",class:"topbar-link"},"关于",-1)),fe("div",Yp,[(dt(),bt(Ft,null,Xs(e,s=>fe("button",{key:s.id,class:Yt(["theme-btn",{active:n.currentTheme===s.id}]),title:s.label,onClick:r=>t.$emit("set-theme",s.id)},[fe("span",{class:"theme-dot",style:ai({background:s.color})},null,4)],10,jp)),64))]),i[3]||(i[3]=fe("span",{class:"version-badge"},"v1.0",-1))])]))}},Zp=Qs(Kp,[["__scopeId","data-v-14d3a547"]]),Fr=[{id:"light",name:"光效",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',plugins:[{id:"edge-glow",name:"EdgeGlow",nameZh:"边缘辉光",status:"active"},{id:"enlargement",name:"Enlargement",nameZh:"局部放大",status:"active"},{id:"shaft-light",name:"ShaftLight",nameZh:"光柱",status:"active"},{id:"overall-glow",name:"OverallGlow",nameZh:"泛光",status:"active"}]},{id:"distortion",name:"画面扭曲",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8"/><path d="M3 12c0 2.2 3.6 4 8 4s8-1.8 8-4"/><path d="M3 12c0-2.2 3.6-4 8-4s8 1.8 8 4"/></svg>',plugins:[{id:"wave-blur",name:"WaveBlurring",nameZh:"波形模糊",status:"active"},{id:"cc-lens",name:"CCLens",nameZh:"鱼眼",status:"active"},{id:"ripple",name:"Ripple",nameZh:"波纹",status:"active"},{id:"wave-warp",name:"WaveWarp",nameZh:"波形变形",status:"active"},{id:"twirl-distort",name:"TwirlDistort",nameZh:"旋转扭曲",status:"active"}]},{id:"blur-mosaic",name:"模糊/马赛克",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="4" height="4"/><rect x="10" y="3" width="4" height="4"/><rect x="17" y="3" width="4" height="4"/><rect x="3" y="10" width="4" height="4"/><rect x="10" y="10" width="4" height="4"/><rect x="17" y="10" width="4" height="4"/><rect x="3" y="17" width="4" height="4"/><rect x="10" y="17" width="4" height="4"/><rect x="17" y="17" width="4" height="4"/></svg>',plugins:[{id:"directional-blur",name:"Directional Blur",nameZh:"定向模糊",status:"active"},{id:"radial-blur",name:"Radial Blur",nameZh:"径向模糊",status:"active"},{id:"basic-mosaic",name:"Basic Mosaic",nameZh:"基础马赛克",status:"active"},{id:"blur-mosaic-fx",name:"Blur Mosaic",nameZh:"模糊马赛克",status:"active"},{id:"brick-mosaic",name:"Brick Mosaic",nameZh:"砖块马赛克",status:"active"},{id:"colorful-mosaic-1",name:"Colorful MosaicI",nameZh:"彩色马赛克 I",status:"active"},{id:"colorful-mosaic-2",name:"Colorful MosaicII",nameZh:"彩色马赛克 II",status:"active"},{id:"colorful-mosaic-3",name:"Colorful MosaicIII",nameZh:"彩色马赛克 III",status:"active"},{id:"glass-mosaic-1",name:"Glass MosaicI",nameZh:"玻璃马赛克 I",status:"active"},{id:"glass-mosaic-2",name:"Glass MosaicII",nameZh:"玻璃马赛克 II",status:"active"},{id:"hexagon-mosaic",name:"Hexagon Mosaic",nameZh:"六边形马赛克",status:"active"},{id:"star-mosaic",name:"Star Mosaic",nameZh:"星形马赛克",status:"active"}]},{id:"text",name:"文本",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>',plugins:[{id:"text-glitch",name:"TextGlitch",nameZh:"文字故障",status:"coming"},{id:"text-reveal",name:"TextReveal",nameZh:"文字揭示",status:"coming"},{id:"kinetic-type",name:"KineticType",nameZh:"动态字体",status:"coming"},{id:"neon-text",name:"NeonText",nameZh:"霓虹文字",status:"coming"}]},{id:"filter",name:"滤镜",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M8 12a4 4 0 0 1 8 0"/><line x1="12" y1="3" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="21"/><line x1="3" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="21" y2="12"/></svg>',plugins:[{id:"engrave",name:"Engrave",nameZh:"雕刻",status:"active"},{id:"newsprint",name:"Newsprint",nameZh:"报纸印刷",status:"active"},{id:"cartoon",name:"Cartoon",nameZh:"卡通",status:"active"},{id:"film-soft-light",name:"FilmSoftLight",nameZh:"胶片柔光",status:"active"},{id:"comic",name:"Comic",nameZh:"漫画",status:"active"}]},{id:"stylize",name:"风格化",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/><circle cx="12" cy="12" r="3"/></svg>',plugins:[{id:"oil-paint",name:"OilPaint",nameZh:"油画效果",status:"coming"},{id:"sketch",name:"Sketch",nameZh:"素描效果",status:"coming"},{id:"halftone",name:"Halftone",nameZh:"半调效果",status:"coming"},{id:"watercolor",name:"Watercolor",nameZh:"水彩效果",status:"coming"},{id:"glitch-art",name:"GlitchArt",nameZh:"故障艺术",status:"coming"}]},{id:"generate",name:"生成",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',plugins:[{id:"particle-gen",name:"ParticleGen",nameZh:"粒子生成",status:"coming"},{id:"noise-field",name:"NoiseField",nameZh:"噪声场",status:"coming"},{id:"fractal",name:"FractalGen",nameZh:"分形生成",status:"coming"},{id:"grid-gen",name:"GridGen",nameZh:"网格生成",status:"coming"}]}],Jp={class:"sidebar"},Qp={class:"category-list"},em=["onClick"],tm=["innerHTML"],nm={class:"category-name"},im={class:"plugin-list"},sm=["onClick"],rm={class:"plugin-info"},am={class:"plugin-name"},om={class:"plugin-name-zh"},lm={key:0,class:"plugin-tag"},cm={key:1,class:"plugin-tag active-tag"},um={class:"sidebar-footer"},hm={class:"footer-text"},fm={class:"footer-count"},dm={class:"footer-available"},pm={__name:"Sidebar",emits:["select-plugin"],setup(n,{emit:e}){const t=e,i=ft("distortion"),s=ft("wave-blur"),r=Wn(()=>Fr.reduce((u,c)=>u+c.plugins.length,0)),o=Wn(()=>Fr.reduce((u,c)=>u+c.plugins.filter(h=>h.status==="active").length,0));function a(u){i.value=i.value===u?null:u}function l(u){u.status!=="coming"&&(s.value=u.id,t("select-plugin",u))}return(u,c)=>(dt(),bt("aside",Jp,[fe("div",Qp,[(dt(!0),bt(Ft,null,Xs(Nu(Fr),h=>(dt(),bt("div",{key:h.id,class:Yt(["category-item",{expanded:i.value===h.id}])},[fe("div",{class:Yt(["category-header",{active:i.value===h.id}]),onClick:d=>a(h.id)},[fe("div",{class:"category-icon",innerHTML:h.icon},null,8,tm),fe("span",nm,xt(h.name),1),c[0]||(c[0]=fe("div",{class:"category-arrow"},[fe("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[fe("polyline",{points:"6 9 12 15 18 9"})])],-1))],10,em),Mt(mp,{name:"slide"},{default:ku(()=>[sd(fe("div",im,[(dt(!0),bt(Ft,null,Xs(h.plugins,d=>(dt(),bt("div",{key:d.id,class:Yt(["plugin-item",{selected:s.value===d.id,coming:d.status==="coming"}]),onClick:m=>l(d)},[c[1]||(c[1]=fe("div",{class:"plugin-dot"},null,-1)),fe("div",rm,[fe("span",am,xt(d.name),1),fe("span",om,xt(d.nameZh),1)]),d.status==="coming"?(dt(),bt("span",lm,"即将")):(dt(),bt("span",cm,"可用"))],10,sm))),128))],512),[[Sp,i.value===h.id]])]),_:2},1024)],2))),128))]),fe("div",um,[fe("div",hm,[fe("span",fm,xt(r.value)+" 个插件",1),c[2]||(c[2]=fe("span",{class:"footer-divider"},"·",-1)),fe("span",dm,xt(o.value)+" 已上线",1)])])]))}},mm=Qs(pm,[["__scopeId","data-v-3c9974e1"]]),gm={class:"param-panel"},_m={class:"plugin-header"},vm={class:"plugin-title-row"},xm={class:"plugin-title"},Mm={class:"plugin-title-zh"},Sm={class:"params-scroll"},ym={class:"param-header"},Em={class:"param-label"},bm={class:"param-value-wrap"},Tm={class:"param-value"},Am={class:"param-desc"},wm={class:"slider-wrap"},Cm={class:"slider-min"},Rm=["min","max","step","value","onInput"],Pm={class:"slider-max"},Lm={class:"panel-actions"},Im={class:"btn-upload"},Dm={__name:"ParamPanel",props:{plugin:{type:Object,required:!0},params:{type:Array,required:!0},modelValue:{type:Object,required:!0},compareMode:{type:Boolean,default:!1}},emits:["update:modelValue","reset","upload","toggle-compare"],setup(n,{emit:e}){const t=n,i=e;function s(o,a){i("update:modelValue",{...t.modelValue,[o]:parseFloat(a)})}function r(o){return typeof o=="number"?o.toFixed(1):o}return(o,a)=>(dt(),bt("div",gm,[fe("div",_m,[fe("div",vm,[fe("div",null,[fe("h2",xm,xt(n.plugin.name),1),fe("p",Mm,xt(n.plugin.nameZh),1)]),fe("button",{class:"btn-icon",onClick:a[0]||(a[0]=l=>o.$emit("reset")),title:"重置参数"},[...a[3]||(a[3]=[fe("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[fe("polyline",{points:"1 4 1 10 7 10"}),fe("path",{d:"M3.51 15a9 9 0 1 0 .49-4.64"})],-1)])])])]),fe("div",Sm,[(dt(!0),bt(Ft,null,Xs(n.params,l=>(dt(),bt("div",{class:"param-group",key:l.key},[fe("div",ym,[fe("span",Em,xt(l.label),1),fe("div",bm,[fe("span",Tm,xt(r(n.modelValue[l.key])),1)])]),fe("p",Am,xt(l.desc),1),fe("div",wm,[fe("span",Cm,xt(l.min),1),fe("input",{type:"range",min:l.min,max:l.max,step:l.step||.1,value:n.modelValue[l.key],onInput:u=>s(l.key,u.target.value)},null,40,Rm),fe("span",Pm,xt(l.max),1)])]))),128))]),fe("div",Lm,[fe("label",Im,[fe("input",{type:"file",accept:"image/*",onChange:a[1]||(a[1]=l=>o.$emit("upload",l)),hidden:""},null,32),a[4]||(a[4]=fe("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[fe("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),fe("polyline",{points:"17 8 12 3 7 8"}),fe("line",{x1:"12",y1:"3",x2:"12",y2:"15"})],-1)),a[5]||(a[5]=So(" 上传图片 ",-1))]),fe("button",{class:Yt(["btn-compare",{active:n.compareMode}]),onClick:a[2]||(a[2]=l=>o.$emit("toggle-compare"))},[a[6]||(a[6]=fe("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[fe("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),fe("line",{x1:"12",y1:"3",x2:"12",y2:"21"})],-1)),So(" "+xt(n.compareMode?"关闭对比":"前后对比"),1)],2)])]))}},Um=Qs(Dm,[["__scopeId","data-v-78100527"]]),Nm={class:"preview-area"},Fm={class:"preview-toolbar"},Om={class:"toolbar-left"},Bm={class:"breadcrumb"},zm={class:"breadcrumb-cat"},Hm={class:"breadcrumb-plugin"},Gm={class:"toolbar-right"},km={class:"view-toggle"},Vm=["onClick","title"],Wm=["innerHTML"],Xm={class:"zoom-control"},qm={class:"zoom-val"},$m={class:"center-wrap"},Ym={__name:"PreviewArea",props:{compareMode:{type:Boolean,default:!1},hasImage:{type:Boolean,default:!1},isWebGL:{type:Boolean,default:!1},showingOriginal:{type:Boolean,default:!1},currentCategory:{type:String,default:""},currentPlugin:{type:String,default:""},imageWidth:{type:Number,default:0},imageHeight:{type:Number,default:0}},emits:["upload","toggle-original"],setup(n,{expose:e,emit:t}){const i=n,s=t,r=ft(null),o=ft(null),a=ft(null),l=ft(null),u=ft(null),c=ft(null),h=ft("fit"),d=ft(100),m=[{id:"fit",label:"适应窗口",icon:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>'},{id:"actual",label:"实际大小",icon:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>'}],_=Wn(()=>i.imageWidth||900),x=Wn(()=>i.imageHeight||600),p=Wn(()=>h.value==="fit"?{width:_.value+"px",height:x.value+"px",maxWidth:"100%",maxHeight:"100%"}:{width:Math.round(_.value*d.value/100)+"px",height:Math.round(x.value*d.value/100)+"px"});e({webglCanvas:r,canvas2d:o,originalCanvas:a});function f(){var P;(P=l.value)==null||P.click()}function M(P){s("upload",P)}function g(P){var L,O;P.preventDefault();const A=(O=(L=P.dataTransfer)==null?void 0:L.files)==null?void 0:O[0];A&&s("upload",{target:{files:[A]}})}function v(P){d.value=Math.min(400,Math.max(10,d.value+P))}function T(){s("toggle-original")}return(P,A)=>(dt(),bt("div",Nm,[fe("div",Fm,[fe("div",Om,[fe("span",Bm,[fe("span",zm,xt(n.currentCategory),1),A[3]||(A[3]=fe("span",{class:"breadcrumb-sep"},"/",-1)),fe("span",Hm,xt(n.currentPlugin),1)])]),fe("div",Gm,[fe("div",km,[(dt(),bt(Ft,null,Xs(m,L=>fe("button",{key:L.id,class:Yt({active:h.value===L.id}),onClick:O=>h.value=L.id,title:L.label},[fe("span",{innerHTML:L.icon},null,8,Wm)],10,Vm)),64))]),fe("div",Xm,[fe("button",{onClick:A[0]||(A[0]=L=>v(-25))},[...A[4]||(A[4]=[fe("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[fe("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])]),fe("span",qm,xt(d.value)+"%",1),fe("button",{onClick:A[1]||(A[1]=L=>v(25))},[...A[5]||(A[5]=[fe("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[fe("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),fe("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])])])]),fe("div",{class:"canvas-area",ref_key:"canvasArea",ref:c},[n.hasImage?Xr("",!0):(dt(),bt("div",{key:0,class:"upload-placeholder",onClick:f,onDragover:A[2]||(A[2]=Hp(()=>{},["prevent"])),onDrop:g},[...A[6]||(A[6]=[Sh('<div class="upload-box" data-v-e90c1f16><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" data-v-e90c1f16><rect x="3" y="3" width="18" height="18" rx="2" data-v-e90c1f16></rect><circle cx="8.5" cy="8.5" r="1.5" data-v-e90c1f16></circle><polyline points="21 15 16 10 5 21" data-v-e90c1f16></polyline></svg><p class="upload-text" data-v-e90c1f16>点击或拖拽图片到此处</p><p class="upload-sub" data-v-e90c1f16>支持 JPG、PNG、WebP</p></div>',1)])],32)),fe("div",{class:Yt(["scroll-wrap",{scrollable:h.value==="actual",hidden:!n.hasImage}])},[fe("div",$m,[fe("div",{class:"canvas-wrap",style:ai(p.value),ref_key:"canvasWrapRef",ref:u},[fe("canvas",{ref_key:"webglCanvas",ref:r,class:"abs-fill",style:ai({display:n.isWebGL?"block":"none"})},null,4),fe("canvas",{ref_key:"canvas2d",ref:o,class:"abs-fill",style:ai({display:n.isWebGL?"none":"block"})},null,4),n.compareMode&&n.hasImage?(dt(),bt("div",{key:0,class:Yt(["compare-overlay",{"showing-original":n.showingOriginal}]),onClick:T},[fe("canvas",{ref_key:"originalCanvas",ref:a,class:"abs-fill",style:ai({opacity:n.showingOriginal?1:0})},null,4),fe("div",{class:Yt(["cmp-badge",n.showingOriginal?"badge-orig":"badge-fx"])},xt(n.showingOriginal?"原图":"效果"),3),A[7]||(A[7]=fe("div",{class:"cmp-hint"},"点击切换",-1))],2)):Xr("",!0)],4)])],2)],512),fe("input",{ref_key:"fileInput",ref:l,type:"file",accept:"image/*",onChange:M,style:{display:"none"}},null,544)]))}},jm=Qs(Ym,[["__scopeId","data-v-e90c1f16"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zo="162",Km=0,Vl=1,Zm=2,Ch=1,Jm=2,Fn=3,fi=0,Wt=1,Gn=2,li=0,hs=1,Wl=2,Xl=3,ql=4,Qm=5,Pi=100,eg=101,tg=102,$l=103,Yl=104,ng=200,ig=201,sg=202,rg=203,bo=204,To=205,ag=206,og=207,lg=208,cg=209,ug=210,hg=211,fg=212,dg=213,pg=214,mg=0,gg=1,_g=2,Yr=3,vg=4,xg=5,Mg=6,Sg=7,Rh=0,yg=1,Eg=2,ci=0,bg=1,Tg=2,Ag=3,wg=4,Cg=5,Rg=6,Pg=7,Ph=300,ps=301,ms=302,Ao=303,wo=304,ha=306,Co=1e3,ln=1001,Ro=1002,Ut=1003,jl=1004,Ts=1005,kt=1006,La=1007,Ii=1008,ui=1009,Lg=1010,Ig=1011,Jo=1012,Lh=1013,oi=1014,kn=1015,js=1016,Ih=1017,Dh=1018,Ni=1020,Dg=1021,cn=1023,Ug=1024,Ng=1025,Fi=1026,gs=1027,Fg=1028,Uh=1029,Og=1030,Nh=1031,Fh=1033,Ia=33776,Da=33777,Ua=33778,Na=33779,Kl=35840,Zl=35841,Jl=35842,Ql=35843,Oh=36196,ec=37492,tc=37496,nc=37808,ic=37809,sc=37810,rc=37811,ac=37812,oc=37813,lc=37814,cc=37815,uc=37816,hc=37817,fc=37818,dc=37819,pc=37820,mc=37821,Fa=36492,gc=36494,_c=36495,Bg=36283,vc=36284,xc=36285,Mc=36286,zg=3200,Hg=3201,Gg=0,kg=1,ri="",vn="srgb",di="srgb-linear",Qo="display-p3",fa="display-p3-linear",jr="linear",st="srgb",Kr="rec709",Zr="p3",ki=7680,Sc=519,Vg=512,Wg=513,Xg=514,Bh=515,qg=516,$g=517,Yg=518,jg=519,yc=35044,Ec="300 es",Po=1035,Vn=2e3,Jr=2001;class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oa=Math.PI/180,Lo=180/Math.PI;function er(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function Vt(n,e,t){return Math.max(e,Math.min(t,n))}function Kg(n,e){return(n%e+e)%e}function Ba(n,e,t){return(1-t)*n+t*e}function bc(n){return(n&n-1)===0&&n!==0}function Io(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function As(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,i,s,r,o,a,l,u){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,u)}set(e,t,i,s,r,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=s,c[2]=a,c[3]=t,c[4]=r,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],d=i[2],m=i[5],_=i[8],x=s[0],p=s[3],f=s[6],M=s[1],g=s[4],v=s[7],T=s[2],P=s[5],A=s[8];return r[0]=o*x+a*M+l*T,r[3]=o*p+a*g+l*P,r[6]=o*f+a*v+l*A,r[1]=u*x+c*M+h*T,r[4]=u*p+c*g+h*P,r[7]=u*f+c*v+h*A,r[2]=d*x+m*M+_*T,r[5]=d*p+m*g+_*P,r[8]=d*f+m*v+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*r*c+i*a*l+s*r*u-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,d=a*l-c*r,m=u*r-o*l,_=t*h+i*d+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(s*u-c*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(c*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=m*x,e[7]=(i*l-u*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-s*u,s*l,-s*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(za.makeScale(e,t)),this}rotate(e){return this.premultiply(za.makeRotation(-e)),this}translate(e,t){return this.premultiply(za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const za=new ke;function zh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Zg(){const n=Qr("canvas");return n.style.display="block",n}const Tc={};function Jg(n){n in Tc||(Tc[n]=!0,console.warn(n))}const Ac=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wc=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ur={[di]:{transfer:jr,primaries:Kr,toReference:n=>n,fromReference:n=>n},[vn]:{transfer:st,primaries:Kr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[fa]:{transfer:jr,primaries:Zr,toReference:n=>n.applyMatrix3(wc),fromReference:n=>n.applyMatrix3(Ac)},[Qo]:{transfer:st,primaries:Zr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(wc),fromReference:n=>n.applyMatrix3(Ac).convertLinearToSRGB()}},Qg=new Set([di,fa]),Ze={enabled:!0,_workingColorSpace:di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Qg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ur[e].toReference,s=ur[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ur[n].primaries},getTransfer:function(n){return n===ri?jr:ur[n].transfer}};function fs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ha(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vi;class Hh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vi===void 0&&(Vi=Qr("canvas")),Vi.width=e.width,Vi.height=e.height;const i=Vi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fs(t[i]/255)*255):t[i]=fs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let e_=0;class Gh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=er(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ga(s[o].image)):r.push(Ga(s[o]))}else r=Ga(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ga(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let t_=0;class zt extends vs{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,i=ln,s=ln,r=kt,o=Ii,a=cn,l=ui,u=zt.DEFAULT_ANISOTROPY,c=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=er(),this.name="",this.source=new Gh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ph)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Co:e.x=e.x-Math.floor(e.x);break;case ln:e.x=e.x<0?0:1;break;case Ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Co:e.y=e.y-Math.floor(e.y);break;case ln:e.y=e.y<0?0:1;break;case Ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Ph;zt.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,i=0,s=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,u=l[0],c=l[4],h=l[8],d=l[1],m=l[5],_=l[9],x=l[2],p=l[6],f=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+p)<.1&&Math.abs(u+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(u+1)/2,v=(m+1)/2,T=(f+1)/2,P=(c+d)/4,A=(h+x)/4,L=(_+p)/4;return g>v&&g>T?g<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(g),s=P/i,r=A/i):v>T?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=P/s,r=L/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=A/r,s=L/r),this.set(i,s,r,t),this}let M=Math.sqrt((p-_)*(p-_)+(h-x)*(h-x)+(d-c)*(d-c));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(h-x)/M,this.z=(d-c)/M,this.w=Math.acos((u+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class n_ extends vs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const r=new zt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends n_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class kh extends zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class i_ extends zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],u=i[s+1],c=i[s+2],h=i[s+3];const d=r[o+0],m=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=x;return}if(h!==x||l!==d||u!==m||c!==_){let p=1-a;const f=l*d+u*m+c*_+h*x,M=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const T=Math.sqrt(g),P=Math.atan2(T,f*M);p=Math.sin(p*P)/T,a=Math.sin(a*P)/T}const v=a*M;if(l=l*p+d*v,u=u*p+m*v,c=c*p+_*v,h=h*p+x*v,p===1-a){const T=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=T,u*=T,c*=T,h*=T}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],u=i[s+2],c=i[s+3],h=r[o],d=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+c*h+l*m-u*d,e[t+1]=l*_+c*d+u*h-a*m,e[t+2]=u*_+c*m+a*d-l*h,e[t+3]=c*_-a*h-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(s/2),h=a(r/2),d=l(i/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*c*h+u*m*_,this._y=u*m*h-d*c*_,this._z=u*c*_+d*m*h,this._w=u*c*h-d*m*_;break;case"YXZ":this._x=d*c*h+u*m*_,this._y=u*m*h-d*c*_,this._z=u*c*_-d*m*h,this._w=u*c*h+d*m*_;break;case"ZXY":this._x=d*c*h-u*m*_,this._y=u*m*h+d*c*_,this._z=u*c*_+d*m*h,this._w=u*c*h-d*m*_;break;case"ZYX":this._x=d*c*h-u*m*_,this._y=u*m*h+d*c*_,this._z=u*c*_-d*m*h,this._w=u*c*h+d*m*_;break;case"YZX":this._x=d*c*h+u*m*_,this._y=u*m*h+d*c*_,this._z=u*c*_-d*m*h,this._w=u*c*h-d*m*_;break;case"XZY":this._x=d*c*h-u*m*_,this._y=u*m*h-d*c*_,this._z=u*c*_+d*m*h,this._w=u*c*h+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],h=t[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(c-l)*m,this._y=(r-u)*m,this._z=(o-s)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(c-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+u)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(r-u)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-s)/m,this._x=(r+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+s*u-r*l,this._y=s*c+o*l+r*a-i*u,this._z=r*c+o*u+i*l-s*a,this._w=o*c-i*a-s*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*s-a*i),c=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*u+o*h-a*c,this.y=i+l*c+a*u-r*h,this.z=s+l*h+r*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ka.copy(this).projectOnVector(e),this.sub(ka)}reflect(e){return this.sub(ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ka=new j,Cc=new tr;class nr{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,sn):sn.fromBufferAttribute(r,o),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hr.copy(i.boundingBox)),hr.applyMatrix4(e.matrixWorld),this.union(hr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),fr.subVectors(this.max,ws),Wi.subVectors(e.a,ws),Xi.subVectors(e.b,ws),qi.subVectors(e.c,ws),Jn.subVectors(Xi,Wi),Qn.subVectors(qi,Xi),Mi.subVectors(Wi,qi);let t=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-Mi.z,Mi.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,Mi.z,0,-Mi.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-Mi.y,Mi.x,0];return!Va(t,Wi,Xi,qi,fr)||(t=[1,0,0,0,1,0,0,0,1],!Va(t,Wi,Xi,qi,fr))?!1:(dr.crossVectors(Jn,Qn),t=[dr.x,dr.y,dr.z],Va(t,Wi,Xi,qi,fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ln=[new j,new j,new j,new j,new j,new j,new j,new j],sn=new j,hr=new nr,Wi=new j,Xi=new j,qi=new j,Jn=new j,Qn=new j,Mi=new j,ws=new j,fr=new j,dr=new j,Si=new j;function Va(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Si.fromArray(n,r);const a=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),l=e.dot(Si),u=t.dot(Si),c=i.dot(Si);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const s_=new nr,Cs=new j,Wa=new j;class el{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):s_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cs.subVectors(e,this.center);const t=Cs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Cs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cs.copy(e.center).add(Wa)),this.expandByPoint(Cs.copy(e.center).sub(Wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new j,Xa=new j,pr=new j,ei=new j,qa=new j,mr=new j,$a=new j;class r_{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Xa.copy(e).add(t).multiplyScalar(.5),pr.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(Xa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(pr),a=ei.dot(this.direction),l=-ei.dot(pr),u=ei.lengthSq(),c=Math.abs(1-o*o);let h,d,m,_;if(c>0)if(h=o*l-a,d=o*a-l,_=r*c,h>=0)if(d>=-_)if(d<=_){const x=1/c;h*=x,d*=x,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d=-r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+u):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+u):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+u);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Xa).addScaledVector(pr,d),m}intersectSphere(e,t){In.subVectors(e.center,this.origin);const i=In.dot(this.direction),s=In.dot(In)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,s=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,s=(e.min.x-d.x)*u),c>=0?(r=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(r=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,i,s,r){qa.subVectors(t,e),mr.subVectors(i,e),$a.crossVectors(qa,mr);let o=this.direction.dot($a),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,e);const l=a*this.direction.dot(mr.crossVectors(ei,mr));if(l<0)return null;const u=a*this.direction.dot(qa.cross(ei));if(u<0||l+u>o)return null;const c=-a*ei.dot($a);return c<0?null:this.at(c/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,i,s,r,o,a,l,u,c,h,d,m,_,x,p){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,u,c,h,d,m,_,x,p)}set(e,t,i,s,r,o,a,l,u,c,h,d,m,_,x,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=h,f[14]=d,f[3]=m,f[7]=_,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/$i.setFromMatrixColumn(e,0).length(),r=1/$i.setFromMatrixColumn(e,1).length(),o=1/$i.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),u=Math.sin(s),c=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*c,m=o*h,_=a*c,x=a*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=m+_*u,t[5]=d-x*u,t[9]=-a*l,t[2]=x-d*u,t[6]=_+m*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,m=l*h,_=u*c,x=u*h;t[0]=d+x*a,t[4]=_*a-m,t[8]=o*u,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=m*a-_,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,m=l*h,_=u*c,x=u*h;t[0]=d-x*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*c,t[9]=x-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,m=o*h,_=a*c,x=a*h;t[0]=l*c,t[4]=_*u-m,t[8]=d*u+x,t[1]=l*h,t[5]=x*u+d,t[9]=m*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*u,_=a*l,x=a*u;t[0]=l*c,t[4]=x-d*h,t[8]=_*h+m,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=m*h+_,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,m=o*u,_=a*l,x=a*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=d*h+x,t[5]=o*c,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*c,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(a_,e,o_)}lookAt(e,t,i){const s=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),ti.crossVectors(i,qt),ti.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),ti.crossVectors(i,qt)),ti.normalize(),gr.crossVectors(qt,ti),s[0]=ti.x,s[4]=gr.x,s[8]=qt.x,s[1]=ti.y,s[5]=gr.y,s[9]=qt.y,s[2]=ti.z,s[6]=gr.z,s[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],d=i[9],m=i[13],_=i[2],x=i[6],p=i[10],f=i[14],M=i[3],g=i[7],v=i[11],T=i[15],P=s[0],A=s[4],L=s[8],O=s[12],y=s[1],R=s[5],D=s[9],V=s[13],w=s[2],N=s[6],z=s[10],q=s[14],k=s[3],K=s[7],ie=s[11],he=s[15];return r[0]=o*P+a*y+l*w+u*k,r[4]=o*A+a*R+l*N+u*K,r[8]=o*L+a*D+l*z+u*ie,r[12]=o*O+a*V+l*q+u*he,r[1]=c*P+h*y+d*w+m*k,r[5]=c*A+h*R+d*N+m*K,r[9]=c*L+h*D+d*z+m*ie,r[13]=c*O+h*V+d*q+m*he,r[2]=_*P+x*y+p*w+f*k,r[6]=_*A+x*R+p*N+f*K,r[10]=_*L+x*D+p*z+f*ie,r[14]=_*O+x*V+p*q+f*he,r[3]=M*P+g*y+v*w+T*k,r[7]=M*A+g*R+v*N+T*K,r[11]=M*L+g*D+v*z+T*ie,r[15]=M*O+g*V+v*q+T*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],d=e[10],m=e[14],_=e[3],x=e[7],p=e[11],f=e[15];return _*(+r*l*h-s*u*h-r*a*d+i*u*d+s*a*m-i*l*m)+x*(+t*l*m-t*u*d+r*o*d-s*o*m+s*u*c-r*l*c)+p*(+t*u*h-t*a*m-r*o*h+i*o*m+r*a*c-i*u*c)+f*(-s*a*c-t*l*h+t*a*d+s*o*h-i*o*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],d=e[10],m=e[11],_=e[12],x=e[13],p=e[14],f=e[15],M=h*p*u-x*d*u+x*l*m-a*p*m-h*l*f+a*d*f,g=_*d*u-c*p*u-_*l*m+o*p*m+c*l*f-o*d*f,v=c*x*u-_*h*u+_*a*m-o*x*m-c*a*f+o*h*f,T=_*h*l-c*x*l-_*a*d+o*x*d+c*a*p-o*h*p,P=t*M+i*g+s*v+r*T;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/P;return e[0]=M*A,e[1]=(x*d*r-h*p*r-x*s*m+i*p*m+h*s*f-i*d*f)*A,e[2]=(a*p*r-x*l*r+x*s*u-i*p*u-a*s*f+i*l*f)*A,e[3]=(h*l*r-a*d*r-h*s*u+i*d*u+a*s*m-i*l*m)*A,e[4]=g*A,e[5]=(c*p*r-_*d*r+_*s*m-t*p*m-c*s*f+t*d*f)*A,e[6]=(_*l*r-o*p*r-_*s*u+t*p*u+o*s*f-t*l*f)*A,e[7]=(o*d*r-c*l*r+c*s*u-t*d*u-o*s*m+t*l*m)*A,e[8]=v*A,e[9]=(_*h*r-c*x*r-_*i*m+t*x*m+c*i*f-t*h*f)*A,e[10]=(o*x*r-_*a*r+_*i*u-t*x*u-o*i*f+t*a*f)*A,e[11]=(c*a*r-o*h*r-c*i*u+t*h*u+o*i*m-t*a*m)*A,e[12]=T*A,e[13]=(c*x*s-_*h*s+_*i*d-t*x*d-c*i*p+t*h*p)*A,e[14]=(_*a*s-o*x*s-_*i*l+t*x*l+o*i*p-t*a*p)*A,e[15]=(o*h*s-c*a*s+c*i*l-t*h*l-o*i*d+t*a*d)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,u=r*o,c=r*a;return this.set(u*o+i,u*a-s*l,u*l+s*a,0,u*a+s*l,c*a+i,c*l-s*o,0,u*l-s*a,c*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,u=r+r,c=o+o,h=a+a,d=r*u,m=r*c,_=r*h,x=o*c,p=o*h,f=a*h,M=l*u,g=l*c,v=l*h,T=i.x,P=i.y,A=i.z;return s[0]=(1-(x+f))*T,s[1]=(m+v)*T,s[2]=(_-g)*T,s[3]=0,s[4]=(m-v)*P,s[5]=(1-(d+f))*P,s[6]=(p+M)*P,s[7]=0,s[8]=(_+g)*A,s[9]=(p-M)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=$i.set(s[0],s[1],s[2]).length();const o=$i.set(s[4],s[5],s[6]).length(),a=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],rn.copy(this);const u=1/r,c=1/o,h=1/a;return rn.elements[0]*=u,rn.elements[1]*=u,rn.elements[2]*=u,rn.elements[4]*=c,rn.elements[5]*=c,rn.elements[6]*=c,rn.elements[8]*=h,rn.elements[9]*=h,rn.elements[10]*=h,t.setFromRotationMatrix(rn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Vn){const l=this.elements,u=2*r/(t-e),c=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let m,_;if(a===Vn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Jr)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Vn){const l=this.elements,u=1/(t-e),c=1/(i-s),h=1/(o-r),d=(t+e)*u,m=(i+s)*c;let _,x;if(a===Vn)_=(o+r)*h,x=-2*h;else if(a===Jr)_=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const $i=new j,rn=new pt,a_=new j(0,0,0),o_=new j(1,1,1),ti=new j,gr=new j,qt=new j,Rc=new pt,Pc=new tr;class Yn{constructor(e=0,t=0,i=0,s=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],u=s[5],c=s[9],h=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Rc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pc.setFromEuler(this),this.setFromQuaternion(Pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class Vh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let l_=0;const Lc=new j,Yi=new tr,Dn=new pt,_r=new j,Rs=new j,c_=new j,u_=new tr,Ic=new j(1,0,0),Dc=new j(0,1,0),Uc=new j(0,0,1),h_={type:"added"},f_={type:"removed"},Ya={type:"childadded",child:null},ja={type:"childremoved",child:null};class Kt extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new j,t=new Yn,i=new tr,s=new j(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new ke}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(Ic,e)}rotateY(e){return this.rotateOnAxis(Dc,e)}rotateZ(e){return this.rotateOnAxis(Uc,e)}translateOnAxis(e,t){return Lc.copy(e).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ic,e)}translateY(e){return this.translateOnAxis(Dc,e)}translateZ(e){return this.translateOnAxis(Uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_r.copy(e):_r.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Rs,_r,this.up):Dn.lookAt(_r,Rs,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Yi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(h_),Ya.child=e,this.dispatchEvent(Ya),Ya.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(f_),ja.child=e,this.dispatchEvent(ja),ja.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,e,c_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,u_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Kt.DEFAULT_UP=new j(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new j,Un=new j,Ka=new j,Nn=new j,ji=new j,Ki=new j,Nc=new j,Za=new j,Ja=new j,Qa=new j;class En{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),an.subVectors(e,t),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){an.subVectors(s,t),Un.subVectors(i,t),Ka.subVectors(e,t);const o=an.dot(an),a=an.dot(Un),l=an.dot(Ka),u=Un.dot(Un),c=Un.dot(Ka),h=o*u-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,m=(u*l-a*c)*d,_=(o*c-a*l)*d;return r.set(1-m-_,_,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static isFrontFacing(e,t,i,s){return an.subVectors(i,t),Un.subVectors(e,t),an.cross(Un).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),an.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return En.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ji.subVectors(s,i),Ki.subVectors(r,i),Za.subVectors(e,i);const l=ji.dot(Za),u=Ki.dot(Za);if(l<=0&&u<=0)return t.copy(i);Ja.subVectors(e,s);const c=ji.dot(Ja),h=Ki.dot(Ja);if(c>=0&&h<=c)return t.copy(s);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(ji,o);Qa.subVectors(e,r);const m=ji.dot(Qa),_=Ki.dot(Qa);if(_>=0&&m<=_)return t.copy(r);const x=m*u-l*_;if(x<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(Ki,a);const p=c*_-m*h;if(p<=0&&h-c>=0&&m-_>=0)return Nc.subVectors(r,s),a=(h-c)/(h-c+(m-_)),t.copy(s).addScaledVector(Nc,a);const f=1/(p+x+d);return o=x*f,a=d*f,t.copy(i).addScaledVector(ji,o).addScaledVector(Ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},vr={h:0,s:0,l:0};function eo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ze.workingColorSpace){if(e=Kg(e,1),t=Vt(t,0,1),i=Vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=eo(o,r,e+1/3),this.g=eo(o,r,e),this.b=eo(o,r,e-1/3)}return Ze.toWorkingColorSpace(this,s),this}setStyle(e,t=vn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){const i=Wh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}copyLinearToSRGB(e){return this.r=Ha(e.r),this.g=Ha(e.g),this.b=Ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return Ze.fromWorkingColorSpace(Ct.copy(this),e),Math.round(Vt(Ct.r*255,0,255))*65536+Math.round(Vt(Ct.g*255,0,255))*256+Math.round(Vt(Ct.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Ct.copy(this),t);const i=Ct.r,s=Ct.g,r=Ct.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=vn){Ze.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,s=Ct.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(vr);const i=Ba(ni.h,vr.h,t),s=Ba(ni.s,vr.s,t),r=Ba(ni.l,vr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Je;Je.NAMES=Wh;let d_=0;class da extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=er(),this.name="",this.type="Material",this.blending=hs,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bo,this.blendDst=To,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bo&&(i.blendSrc=this.blendSrc),this.blendDst!==To&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xh extends da{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new j,xr=new $e;class An{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Jg("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=As(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=As(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=As(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=As(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=As(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),s=Ht(s,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yc&&(e.usage=this.usage),e}}class qh extends An{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class $h extends An{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Oi extends An{constructor(e,t,i){super(new Float32Array(e),t,i)}}let p_=0;const en=new pt,to=new Kt,Zi=new j,$t=new nr,Ps=new nr,vt=new j;class Hi extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zh(e)?$h:qh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,i){return en.makeTranslation(e,t,i),this.applyMatrix4(en),this}scale(e,t,i){return en.makeScale(e,t,i),this.applyMatrix4(en),this}lookAt(e){return to.lookAt(e),to.updateMatrix(),this.applyMatrix4(to.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Oi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new el);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors($t.min,Ps.min),$t.expandByPoint(vt),vt.addVectors($t.max,Ps.max),$t.expandByPoint(vt)):($t.expandByPoint(Ps.min),$t.expandByPoint(Ps.max))}$t.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)vt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(vt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)vt.fromBufferAttribute(a,u),l&&(Zi.fromBufferAttribute(e,u),vt.add(Zi)),s=Math.max(s,i.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new j,l[L]=new j;const u=new j,c=new j,h=new j,d=new $e,m=new $e,_=new $e,x=new j,p=new j;function f(L,O,y){u.fromBufferAttribute(i,L),c.fromBufferAttribute(i,O),h.fromBufferAttribute(i,y),d.fromBufferAttribute(r,L),m.fromBufferAttribute(r,O),_.fromBufferAttribute(r,y),c.sub(u),h.sub(u),m.sub(d),_.sub(d);const R=1/(m.x*_.y-_.x*m.y);isFinite(R)&&(x.copy(c).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(R),p.copy(h).multiplyScalar(m.x).addScaledVector(c,-_.x).multiplyScalar(R),a[L].add(x),a[O].add(x),a[y].add(x),l[L].add(p),l[O].add(p),l[y].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let L=0,O=M.length;L<O;++L){const y=M[L],R=y.start,D=y.count;for(let V=R,w=R+D;V<w;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const g=new j,v=new j,T=new j,P=new j;function A(L){T.fromBufferAttribute(s,L),P.copy(T);const O=a[L];g.copy(O),g.sub(T.multiplyScalar(T.dot(O))).normalize(),v.crossVectors(P,O);const R=v.dot(l[L])<0?-1:1;o.setXYZW(L,g.x,g.y,g.z,R)}for(let L=0,O=M.length;L<O;++L){const y=M[L],R=y.start,D=y.count;for(let V=R,w=R+D;V<w;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const s=new j,r=new j,o=new j,a=new j,l=new j,u=new j,c=new j,h=new j;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),c.subVectors(o,r),h.subVectors(s,r),c.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,r),h.subVectors(s,r),c.cross(h),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,d=new u.constructor(l.length*c);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*c;for(let f=0;f<c;f++)d[_++]=u[m++]}return new An(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hi,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],u=e(l,i);t.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const l=[],u=r[a];for(let c=0,h=u.length;c<h;c++){const d=u[c],m=e(d,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const m=u[h];c.push(m.toJSON(e.data))}c.length>0&&(s[l]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const u in s){const c=s[u];this.setAttribute(u,c.clone(t))}const r=e.morphAttributes;for(const u in r){const c=[],h=r[u];for(let d=0,m=h.length;d<m;d++)c.push(h[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fc=new pt,yi=new r_,Mr=new el,Oc=new j,Ji=new j,Qi=new j,es=new j,no=new j,Sr=new j,yr=new $e,Er=new $e,br=new $e,Bc=new j,zc=new j,Hc=new j,Tr=new j,Ar=new j;class bn extends Kt{constructor(e=new Hi,t=new Xh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Sr.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const c=a[l],h=r[l];c!==0&&(no.fromBufferAttribute(h,e),o?Sr.addScaledVector(no,c):Sr.addScaledVector(no.sub(t),c))}t.add(Sr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mr.copy(i.boundingSphere),Mr.applyMatrix4(r),yi.copy(e.ray).recast(e.near),!(Mr.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Mr,Oc)===null||yi.origin.distanceToSquared(Oc)>(e.far-e.near)**2))&&(Fc.copy(r).invert(),yi.copy(e.ray).applyMatrix4(Fc),!(i.boundingBox!==null&&yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const p=d[_],f=o[p.materialIndex],M=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let v=M,T=g;v<T;v+=3){const P=a.getX(v),A=a.getX(v+1),L=a.getX(v+2);s=wr(this,f,e,i,u,c,h,P,A,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=_,f=x;p<f;p+=3){const M=a.getX(p),g=a.getX(p+1),v=a.getX(p+2);s=wr(this,o,e,i,u,c,h,M,g,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const p=d[_],f=o[p.materialIndex],M=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let v=M,T=g;v<T;v+=3){const P=v,A=v+1,L=v+2;s=wr(this,f,e,i,u,c,h,P,A,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,f=x;p<f;p+=3){const M=p,g=p+1,v=p+2;s=wr(this,o,e,i,u,c,h,M,g,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function m_(n,e,t,i,s,r,o,a){let l;if(e.side===Wt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===fi,a),l===null)return null;Ar.copy(a),Ar.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Ar);return u<t.near||u>t.far?null:{distance:u,point:Ar.clone(),object:n}}function wr(n,e,t,i,s,r,o,a,l,u){n.getVertexPosition(a,Ji),n.getVertexPosition(l,Qi),n.getVertexPosition(u,es);const c=m_(n,e,t,i,Ji,Qi,es,Tr);if(c){s&&(yr.fromBufferAttribute(s,a),Er.fromBufferAttribute(s,l),br.fromBufferAttribute(s,u),c.uv=En.getInterpolation(Tr,Ji,Qi,es,yr,Er,br,new $e)),r&&(yr.fromBufferAttribute(r,a),Er.fromBufferAttribute(r,l),br.fromBufferAttribute(r,u),c.uv1=En.getInterpolation(Tr,Ji,Qi,es,yr,Er,br,new $e)),o&&(Bc.fromBufferAttribute(o,a),zc.fromBufferAttribute(o,l),Hc.fromBufferAttribute(o,u),c.normal=En.getInterpolation(Tr,Ji,Qi,es,Bc,zc,Hc,new j),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new j,materialIndex:0};En.getNormal(Ji,Qi,es,h.normal),c.face=h}return c}class ir extends Hi{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],c=[],h=[];let d=0,m=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Oi(u,3)),this.setAttribute("normal",new Oi(c,3)),this.setAttribute("uv",new Oi(h,2));function _(x,p,f,M,g,v,T,P,A,L,O){const y=v/A,R=T/L,D=v/2,V=T/2,w=P/2,N=A+1,z=L+1;let q=0,k=0;const K=new j;for(let ie=0;ie<z;ie++){const he=ie*R-V;for(let me=0;me<N;me++){const Ie=me*y-D;K[x]=Ie*M,K[p]=he*g,K[f]=w,u.push(K.x,K.y,K.z),K[x]=0,K[p]=0,K[f]=P>0?1:-1,c.push(K.x,K.y,K.z),h.push(me/A),h.push(1-ie/L),q+=1}}for(let ie=0;ie<L;ie++)for(let he=0;he<A;he++){const me=d+he+N*ie,Ie=d+he+N*(ie+1),te=d+(he+1)+N*(ie+1),ce=d+(he+1)+N*ie;l.push(me,Ie,ce),l.push(Ie,te,ce),k+=6}a.addGroup(m,k,O),m+=k,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Dt(n){const e={};for(let t=0;t<n.length;t++){const i=_s(n[t]);for(const s in i)e[s]=i[s]}return e}function g_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Yh(n){return n.getRenderTarget()===null?n.outputColorSpace:Ze.workingColorSpace}const __={clone:_s,merge:Dt};var v_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends da{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=v_,this.fragmentShader=x_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=g_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class jh extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new j,Gc=new $e,kc=new $e;class on extends jh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,Gc,kc),t.subVectors(kc,Gc)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/u,s*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ts=-90,ns=1;class M_ extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(ts,ns,e,t);s.layers=this.layers,this.add(s);const r=new on(ts,ns,e,t);r.layers=this.layers,this.add(r);const o=new on(ts,ns,e,t);o.layers=this.layers,this.add(o);const a=new on(ts,ns,e,t);a.layers=this.layers,this.add(a);const l=new on(ts,ns,e,t);l.layers=this.layers,this.add(l);const u=new on(ts,ns,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const u of t)this.remove(u);if(e===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Jr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,u,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,c),e.setRenderTarget(h,d,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Kh extends zt{constructor(e,t,i,s,r,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:ps,super(e,t,i,s,r,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class S_ extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Kh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ir(5,5,5),r=new jn({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:li});r.uniforms.tEquirect.value=t;const o=new bn(s,r),a=t.minFilter;return t.minFilter===Ii&&(t.minFilter=kt),new M_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const io=new j,y_=new j,E_=new ke;class wi{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=io.subVectors(i,t).cross(y_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(io),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||E_.getNormalMatrix(e),s=this.coplanarPoint(io).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new el,Cr=new j;class Zh{constructor(e=new wi,t=new wi,i=new wi,s=new wi,r=new wi,o=new wi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vn){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],u=s[4],c=s[5],h=s[6],d=s[7],m=s[8],_=s[9],x=s[10],p=s[11],f=s[12],M=s[13],g=s[14],v=s[15];if(i[0].setComponents(l-r,d-u,p-m,v-f).normalize(),i[1].setComponents(l+r,d+u,p+m,v+f).normalize(),i[2].setComponents(l+o,d+c,p+_,v+M).normalize(),i[3].setComponents(l-o,d-c,p-_,v-M).normalize(),i[4].setComponents(l-a,d-h,p-x,v-g).normalize(),t===Vn)i[5].setComponents(l+a,d+h,p+x,v+g).normalize();else if(t===Jr)i[5].setComponents(a,h,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Cr.x=s.normal.x>0?e.max.x:e.min.x,Cr.y=s.normal.y>0?e.max.y:e.min.y,Cr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jh(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function b_(n,e){const t=e.isWebGL2,i=new WeakMap;function s(u,c){const h=u.array,d=u.usage,m=h.byteLength,_=n.createBuffer();n.bindBuffer(c,_),n.bufferData(c,h,d),u.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:m}}function r(u,c,h){const d=c.array,m=c._updateRange,_=c.updateRanges;if(n.bindBuffer(h,u),m.count===-1&&_.length===0&&n.bufferSubData(h,0,d),_.length!==0){for(let x=0,p=_.length;x<p;x++){const f=_[x];t?n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}c.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);if(h===void 0)i.set(u,s(u,c));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,u,c),h.version=u.version}}return{get:o,remove:a,update:l}}class sr extends Hi{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),u=a+1,c=l+1,h=e/a,d=t/l,m=[],_=[],x=[],p=[];for(let f=0;f<c;f++){const M=f*d-o;for(let g=0;g<u;g++){const v=g*h-r;_.push(v,-M,0),x.push(0,0,1),p.push(g/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){const g=M+u*f,v=M+u*(f+1),T=M+1+u*(f+1),P=M+1+u*f;m.push(g,v,P),m.push(v,T,P)}this.setIndex(m),this.setAttribute("position",new Oi(_,3)),this.setAttribute("normal",new Oi(x,3)),this.setAttribute("uv",new Oi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.width,e.height,e.widthSegments,e.heightSegments)}}var T_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,w_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,I_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,U_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,N_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,B_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,z_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,H_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,G_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,X_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,q_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Y_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,j_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,K_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Z_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t0="gl_FragColor = linearToOutputTexel( gl_FragColor );",n0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,i0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,s0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,r0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,l0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,d0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,p0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,v0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,x0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,b0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,T0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,A0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,w0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,L0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,I0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,N0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,z0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,H0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,G0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,k0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,V0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,W0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,X0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Y0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,j0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,K0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ev=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,av=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ov=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,lv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_v=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Av=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Iv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Dv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Uv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ov=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$v=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ex=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ix=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:T_,alphahash_pars_fragment:A_,alphamap_fragment:w_,alphamap_pars_fragment:C_,alphatest_fragment:R_,alphatest_pars_fragment:P_,aomap_fragment:L_,aomap_pars_fragment:I_,batching_pars_vertex:D_,batching_vertex:U_,begin_vertex:N_,beginnormal_vertex:F_,bsdfs:O_,iridescence_fragment:B_,bumpmap_pars_fragment:z_,clipping_planes_fragment:H_,clipping_planes_pars_fragment:G_,clipping_planes_pars_vertex:k_,clipping_planes_vertex:V_,color_fragment:W_,color_pars_fragment:X_,color_pars_vertex:q_,color_vertex:$_,common:Y_,cube_uv_reflection_fragment:j_,defaultnormal_vertex:K_,displacementmap_pars_vertex:Z_,displacementmap_vertex:J_,emissivemap_fragment:Q_,emissivemap_pars_fragment:e0,colorspace_fragment:t0,colorspace_pars_fragment:n0,envmap_fragment:i0,envmap_common_pars_fragment:s0,envmap_pars_fragment:r0,envmap_pars_vertex:a0,envmap_physical_pars_fragment:v0,envmap_vertex:o0,fog_vertex:l0,fog_pars_vertex:c0,fog_fragment:u0,fog_pars_fragment:h0,gradientmap_pars_fragment:f0,lightmap_fragment:d0,lightmap_pars_fragment:p0,lights_lambert_fragment:m0,lights_lambert_pars_fragment:g0,lights_pars_begin:_0,lights_toon_fragment:x0,lights_toon_pars_fragment:M0,lights_phong_fragment:S0,lights_phong_pars_fragment:y0,lights_physical_fragment:E0,lights_physical_pars_fragment:b0,lights_fragment_begin:T0,lights_fragment_maps:A0,lights_fragment_end:w0,logdepthbuf_fragment:C0,logdepthbuf_pars_fragment:R0,logdepthbuf_pars_vertex:P0,logdepthbuf_vertex:L0,map_fragment:I0,map_pars_fragment:D0,map_particle_fragment:U0,map_particle_pars_fragment:N0,metalnessmap_fragment:F0,metalnessmap_pars_fragment:O0,morphinstance_vertex:B0,morphcolor_vertex:z0,morphnormal_vertex:H0,morphtarget_pars_vertex:G0,morphtarget_vertex:k0,normal_fragment_begin:V0,normal_fragment_maps:W0,normal_pars_fragment:X0,normal_pars_vertex:q0,normal_vertex:$0,normalmap_pars_fragment:Y0,clearcoat_normal_fragment_begin:j0,clearcoat_normal_fragment_maps:K0,clearcoat_pars_fragment:Z0,iridescence_pars_fragment:J0,opaque_fragment:Q0,packing:ev,premultiplied_alpha_fragment:tv,project_vertex:nv,dithering_fragment:iv,dithering_pars_fragment:sv,roughnessmap_fragment:rv,roughnessmap_pars_fragment:av,shadowmap_pars_fragment:ov,shadowmap_pars_vertex:lv,shadowmap_vertex:cv,shadowmask_pars_fragment:uv,skinbase_vertex:hv,skinning_pars_vertex:fv,skinning_vertex:dv,skinnormal_vertex:pv,specularmap_fragment:mv,specularmap_pars_fragment:gv,tonemapping_fragment:_v,tonemapping_pars_fragment:vv,transmission_fragment:xv,transmission_pars_fragment:Mv,uv_pars_fragment:Sv,uv_pars_vertex:yv,uv_vertex:Ev,worldpos_vertex:bv,background_vert:Tv,background_frag:Av,backgroundCube_vert:wv,backgroundCube_frag:Cv,cube_vert:Rv,cube_frag:Pv,depth_vert:Lv,depth_frag:Iv,distanceRGBA_vert:Dv,distanceRGBA_frag:Uv,equirect_vert:Nv,equirect_frag:Fv,linedashed_vert:Ov,linedashed_frag:Bv,meshbasic_vert:zv,meshbasic_frag:Hv,meshlambert_vert:Gv,meshlambert_frag:kv,meshmatcap_vert:Vv,meshmatcap_frag:Wv,meshnormal_vert:Xv,meshnormal_frag:qv,meshphong_vert:$v,meshphong_frag:Yv,meshphysical_vert:jv,meshphysical_frag:Kv,meshtoon_vert:Zv,meshtoon_frag:Jv,points_vert:Qv,points_frag:ex,shadow_vert:tx,shadow_frag:nx,sprite_vert:ix,sprite_frag:sx},pe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Sn={basic:{uniforms:Dt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Dt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Dt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Dt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Dt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Dt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Dt([pe.points,pe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Dt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Dt([pe.common,pe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Dt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Dt([pe.sprite,pe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Dt([pe.common,pe.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Dt([pe.lights,pe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Sn.physical={uniforms:Dt([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Rr={r:0,b:0,g:0},bi=new Yn,rx=new pt;function ax(n,e,t,i,s,r,o){const a=new Je(0);let l=r===!0?0:1,u,c,h=null,d=0,m=null;function _(p,f){let M=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=(f.backgroundBlurriness>0?t:e).get(g)),g===null?x(a,l):g&&g.isColor&&(x(g,1),M=!0);const v=n.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===ha)?(c===void 0&&(c=new bn(new ir(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:_s(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,P,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),bi.copy(f.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rx.makeRotationFromEuler(bi)),c.material.toneMapped=Ze.getTransfer(g.colorSpace)!==st,(h!==g||d!==g.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=g,d=g.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new bn(new sr(2,2),new jn({name:"BackgroundMaterial",uniforms:_s(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(g.colorSpace)!==st,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||d!==g.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=g,d=g.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function x(p,f){p.getRGB(Rr,Yh(n)),i.buffers.color.setClear(Rr.r,Rr.g,Rr.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),l=f,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:_}}function ox(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=p(null);let u=l,c=!1;function h(w,N,z,q,k){let K=!1;if(o){const ie=x(q,z,N);u!==ie&&(u=ie,m(u.object)),K=f(w,q,z,k),K&&M(w,q,z,k)}else{const ie=N.wireframe===!0;(u.geometry!==q.id||u.program!==z.id||u.wireframe!==ie)&&(u.geometry=q.id,u.program=z.id,u.wireframe=ie,K=!0)}k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(K||c)&&(c=!1,L(w,N,z,q),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(w){return i.isWebGL2?n.bindVertexArray(w):r.bindVertexArrayOES(w)}function _(w){return i.isWebGL2?n.deleteVertexArray(w):r.deleteVertexArrayOES(w)}function x(w,N,z){const q=z.wireframe===!0;let k=a[w.id];k===void 0&&(k={},a[w.id]=k);let K=k[N.id];K===void 0&&(K={},k[N.id]=K);let ie=K[q];return ie===void 0&&(ie=p(d()),K[q]=ie),ie}function p(w){const N=[],z=[],q=[];for(let k=0;k<s;k++)N[k]=0,z[k]=0,q[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:q,object:w,attributes:{},index:null}}function f(w,N,z,q){const k=u.attributes,K=N.attributes;let ie=0;const he=z.getAttributes();for(const me in he)if(he[me].location>=0){const te=k[me];let ce=K[me];if(ce===void 0&&(me==="instanceMatrix"&&w.instanceMatrix&&(ce=w.instanceMatrix),me==="instanceColor"&&w.instanceColor&&(ce=w.instanceColor)),te===void 0||te.attribute!==ce||ce&&te.data!==ce.data)return!0;ie++}return u.attributesNum!==ie||u.index!==q}function M(w,N,z,q){const k={},K=N.attributes;let ie=0;const he=z.getAttributes();for(const me in he)if(he[me].location>=0){let te=K[me];te===void 0&&(me==="instanceMatrix"&&w.instanceMatrix&&(te=w.instanceMatrix),me==="instanceColor"&&w.instanceColor&&(te=w.instanceColor));const ce={};ce.attribute=te,te&&te.data&&(ce.data=te.data),k[me]=ce,ie++}u.attributes=k,u.attributesNum=ie,u.index=q}function g(){const w=u.newAttributes;for(let N=0,z=w.length;N<z;N++)w[N]=0}function v(w){T(w,0)}function T(w,N){const z=u.newAttributes,q=u.enabledAttributes,k=u.attributeDivisors;z[w]=1,q[w]===0&&(n.enableVertexAttribArray(w),q[w]=1),k[w]!==N&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](w,N),k[w]=N)}function P(){const w=u.newAttributes,N=u.enabledAttributes;for(let z=0,q=N.length;z<q;z++)N[z]!==w[z]&&(n.disableVertexAttribArray(z),N[z]=0)}function A(w,N,z,q,k,K,ie){ie===!0?n.vertexAttribIPointer(w,N,z,k,K):n.vertexAttribPointer(w,N,z,q,k,K)}function L(w,N,z,q){if(i.isWebGL2===!1&&(w.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const k=q.attributes,K=z.getAttributes(),ie=N.defaultAttributeValues;for(const he in K){const me=K[he];if(me.location>=0){let Ie=k[he];if(Ie===void 0&&(he==="instanceMatrix"&&w.instanceMatrix&&(Ie=w.instanceMatrix),he==="instanceColor"&&w.instanceColor&&(Ie=w.instanceColor)),Ie!==void 0){const te=Ie.normalized,ce=Ie.itemSize,xe=t.get(Ie);if(xe===void 0)continue;const Re=xe.buffer,Ae=xe.type,be=xe.bytesPerElement,qe=i.isWebGL2===!0&&(Ae===n.INT||Ae===n.UNSIGNED_INT||Ie.gpuType===Lh);if(Ie.isInterleavedBufferAttribute){const Ue=Ie.data,E=Ue.stride,I=Ie.offset;if(Ue.isInstancedInterleavedBuffer){for(let B=0;B<me.locationSize;B++)T(me.location+B,Ue.meshPerAttribute);w.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let B=0;B<me.locationSize;B++)v(me.location+B);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let B=0;B<me.locationSize;B++)A(me.location+B,ce/me.locationSize,Ae,te,E*be,(I+ce/me.locationSize*B)*be,qe)}else{if(Ie.isInstancedBufferAttribute){for(let Ue=0;Ue<me.locationSize;Ue++)T(me.location+Ue,Ie.meshPerAttribute);w.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let Ue=0;Ue<me.locationSize;Ue++)v(me.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let Ue=0;Ue<me.locationSize;Ue++)A(me.location+Ue,ce/me.locationSize,Ae,te,ce*be,ce/me.locationSize*Ue*be,qe)}}else if(ie!==void 0){const te=ie[he];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(me.location,te);break;case 3:n.vertexAttrib3fv(me.location,te);break;case 4:n.vertexAttrib4fv(me.location,te);break;default:n.vertexAttrib1fv(me.location,te)}}}}P()}function O(){D();for(const w in a){const N=a[w];for(const z in N){const q=N[z];for(const k in q)_(q[k].object),delete q[k];delete N[z]}delete a[w]}}function y(w){if(a[w.id]===void 0)return;const N=a[w.id];for(const z in N){const q=N[z];for(const k in q)_(q[k].object),delete q[k];delete N[z]}delete a[w.id]}function R(w){for(const N in a){const z=a[N];if(z[w.id]===void 0)continue;const q=z[w.id];for(const k in q)_(q[k].object),delete q[k];delete z[w.id]}}function D(){V(),c=!0,u!==l&&(u=l,m(u.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:D,resetDefaultState:V,dispose:O,releaseStatesOfGeometry:y,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:v,disableUnusedAttributes:P}}function lx(n,e,t,i){const s=i.isWebGL2;let r;function o(c){r=c}function a(c,h){n.drawArrays(r,c,h),t.update(h,r,1)}function l(c,h,d){if(d===0)return;let m,_;if(s)m=n,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,c,h,d),t.update(h,r,d)}function u(c,h,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<d;_++)this.render(c[_],h[_]);else{m.multiDrawArraysWEBGL(r,c,0,h,0,d);let _=0;for(let x=0;x<d;x++)_+=h[x];t.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function cx(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,v=o||e.has("OES_texture_float"),T=g&&v,P=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:M,vertexTextures:g,floatFragmentTextures:v,floatVertexTextures:T,maxSamples:P}}function ux(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new wi,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||s;return s=d,i=h.length,m},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,m){const _=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,f=n.get(h);if(!s||_===null||_.length===0||r&&!p)r?c(null):u();else{const M=r?0:i,g=M*4;let v=f.clippingState||null;l.value=v,v=c(_,d,g,m);for(let T=0;T!==g;++T)v[T]=t[T];f.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,d,m,_){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const f=m+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<f)&&(p=new Float32Array(f));for(let g=0,v=m;g!==x;++g,v+=4)o.copy(h[g]).applyMatrix4(M,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function hx(n){let e=new WeakMap;function t(o,a){return a===Ao?o.mapping=ps:a===wo&&(o.mapping=ms),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ao||a===wo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new S_(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",s),t(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Qh extends jh{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const rs=4,Vc=[.125,.215,.35,.446,.526,.582],Li=20,so=new Qh,Wc=new Je;let ro=null,ao=0,oo=0;const Ci=(1+Math.sqrt(5))/2,is=1/Ci,Xc=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,Ci,is),new j(0,Ci,-is),new j(is,0,Ci),new j(-is,0,Ci),new j(Ci,is,0),new j(-Ci,is,0)];class qc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){ro=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ro,ao,oo),e.scissorTest=!1,Pr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ps||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ro=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:js,format:cn,colorSpace:di,depthBuffer:!1},s=$c(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$c(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fx(r)),this._blurMaterial=dx(r,e,t)}return s}_compileMaterial(e){const t=new bn(this._lodPlanes[0],e);this._renderer.compile(t,so)}_sceneToCubeUV(e,t,i,s){const a=new on(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(Wc),c.toneMapping=ci,c.autoClear=!1;const m=new Xh({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),_=new bn(new ir,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Wc),x=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):M===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const g=this._cubeSize;Pr(s,M*g,f>2?g:0,g,g),c.setRenderTarget(s),x&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ps||e.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new bn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Pr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,so)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Xc[(s-1)%Xc.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new bn(this._lodPlanes[s],u),d=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Li-1),x=r/_,p=isFinite(r)?1+Math.floor(c*x):Li;p>Li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Li}`);const f=[];let M=0;for(let A=0;A<Li;++A){const L=A/x,O=Math.exp(-L*L/2);f.push(O),A===0?M+=O:A<p&&(M+=2*O)}for(let A=0;A<f.length;A++)f[A]=f[A]/M;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=_,d.mipInt.value=g-i;const v=this._sizeLods[s],T=3*v*(s>g-rs?s-g+rs:0),P=4*(this._cubeSize-v);Pr(t,T,P,3*v,2*v),l.setRenderTarget(t),l.render(h,so)}}function fx(n){const e=[],t=[],i=[];let s=n;const r=n-rs+1+Vc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-rs?l=Vc[o-n+rs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],m=6,_=6,x=3,p=2,f=1,M=new Float32Array(x*_*m),g=new Float32Array(p*_*m),v=new Float32Array(f*_*m);for(let P=0;P<m;P++){const A=P%3*2/3-1,L=P>2?0:-1,O=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];M.set(O,x*_*P),g.set(d,p*_*P);const y=[P,P,P,P,P,P];v.set(y,f*_*P)}const T=new Hi;T.setAttribute("position",new An(M,x)),T.setAttribute("uv",new An(g,p)),T.setAttribute("faceIndex",new An(v,f)),e.push(T),s>rs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function $c(n,e,t){const i=new Bi(n,e,t);return i.texture.mapping=ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function dx(n,e,t){const i=new Float32Array(Li),s=new j(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Yc(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function jc(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function tl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function px(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Ao||l===wo,c=l===ps||l===ms;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new qc(n)),h=u?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||c&&h&&s(h)){t===null&&(t=new qc(n));const d=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function mx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function gx(n,e,t,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let p=0,f=x.length;p<f;p++)e.remove(x[p])}d.removeEventListener("dispose",o),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,f=x.length;p<f;p++)e.update(x[p],n.ARRAY_BUFFER)}}function u(h){const d=[],m=h.index,_=h.attributes.position;let x=0;if(m!==null){const M=m.array;x=m.version;for(let g=0,v=M.length;g<v;g+=3){const T=M[g+0],P=M[g+1],A=M[g+2];d.push(T,P,P,A,A,T)}}else if(_!==void 0){const M=_.array;x=_.version;for(let g=0,v=M.length/3-1;g<v;g+=3){const T=g+0,P=g+1,A=g+2;d.push(T,P,P,A,A,T)}}else return;const p=new(zh(d)?$h:qh)(d,1);p.version=x;const f=r.get(h);f&&e.remove(f),r.set(h,p)}function c(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&u(h)}else u(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function _x(n,e,t,i){const s=i.isWebGL2;let r;function o(m){r=m}let a,l;function u(m){a=m.type,l=m.bytesPerElement}function c(m,_){n.drawElements(r,_,a,m*l),t.update(_,r,1)}function h(m,_,x){if(x===0)return;let p,f;if(s)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,_,a,m*l,x),t.update(_,r,x)}function d(m,_,x){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<x;f++)this.render(m[f]/l,_[f]);else{p.multiDrawElementsWEBGL(r,_,0,a,m,0,x);let f=0;for(let M=0;M<x;M++)f+=_[M];t.update(f,r,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function vx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function xx(n,e){return n[0]-e[0]}function Mx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Sx(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,o=new Tt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,h){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,x=_!==void 0?_.length:0;let p=r.get(c);if(p===void 0||p.count!==x){let V=function(){R.dispose(),r.delete(c),c.removeEventListener("dispose",V)};var m=V;p!==void 0&&p.texture.dispose();const f=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,g=c.morphAttributes.color!==void 0,v=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let A=0;f===!0&&(A=1),M===!0&&(A=2),g===!0&&(A=3);let L=c.attributes.position.count*A,O=1;L>e.maxTextureSize&&(O=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const y=new Float32Array(L*O*4*x),R=new kh(y,L,O,x);R.type=kn,R.needsUpdate=!0;const D=A*4;for(let w=0;w<x;w++){const N=v[w],z=T[w],q=P[w],k=L*O*4*w;for(let K=0;K<N.count;K++){const ie=K*D;f===!0&&(o.fromBufferAttribute(N,K),y[k+ie+0]=o.x,y[k+ie+1]=o.y,y[k+ie+2]=o.z,y[k+ie+3]=0),M===!0&&(o.fromBufferAttribute(z,K),y[k+ie+4]=o.x,y[k+ie+5]=o.y,y[k+ie+6]=o.z,y[k+ie+7]=0),g===!0&&(o.fromBufferAttribute(q,K),y[k+ie+8]=o.x,y[k+ie+9]=o.y,y[k+ie+10]=o.z,y[k+ie+11]=q.itemSize===4?o.w:1)}}p={count:x,texture:R,size:new $e(L,O)},r.set(c,p),c.addEventListener("dispose",V)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let f=0;for(let g=0;g<d.length;g++)f+=d[g];const M=c.morphTargetsRelative?1:1-f;h.getUniforms().setValue(n,"morphTargetBaseInfluence",M),h.getUniforms().setValue(n,"morphTargetInfluences",d)}h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const _=d===void 0?0:d.length;let x=i[c.id];if(x===void 0||x.length!==_){x=[];for(let v=0;v<_;v++)x[v]=[v,0];i[c.id]=x}for(let v=0;v<_;v++){const T=x[v];T[0]=v,T[1]=d[v]}x.sort(Mx);for(let v=0;v<8;v++)v<_&&x[v][1]?(a[v][0]=x[v][0],a[v][1]=x[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(xx);const p=c.morphAttributes.position,f=c.morphAttributes.normal;let M=0;for(let v=0;v<8;v++){const T=a[v],P=T[0],A=T[1];P!==Number.MAX_SAFE_INTEGER&&A?(p&&c.getAttribute("morphTarget"+v)!==p[P]&&c.setAttribute("morphTarget"+v,p[P]),f&&c.getAttribute("morphNormal"+v)!==f[P]&&c.setAttribute("morphNormal"+v,f[P]),s[v]=A,M+=A):(p&&c.hasAttribute("morphTarget"+v)===!0&&c.deleteAttribute("morphTarget"+v),f&&c.hasAttribute("morphNormal"+v)===!0&&c.deleteAttribute("morphNormal"+v),s[v]=0)}const g=c.morphTargetsRelative?1:1-M;h.getUniforms().setValue(n,"morphTargetBaseInfluence",g),h.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function yx(n,e,t,i){let s=new WeakMap;function r(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}class ef extends zt{constructor(e,t,i,s,r,o,a,l,u,c){if(c=c!==void 0?c:Fi,c!==Fi&&c!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Fi&&(i=oi),i===void 0&&c===gs&&(i=Ni),super(null,s,r,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ut,this.minFilter=l!==void 0?l:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const tf=new zt,nf=new ef(1,1);nf.compareFunction=Bh;const sf=new kh,rf=new i_,af=new Kh,Kc=[],Zc=[],Jc=new Float32Array(16),Qc=new Float32Array(9),eu=new Float32Array(4);function xs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Kc[s];if(r===void 0&&(r=new Float32Array(s),Kc[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pa(n,e){let t=Zc[e];t===void 0&&(t=new Int32Array(e),Zc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ex(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2fv(this.addr,e),gt(t,e)}}function Tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;n.uniform3fv(this.addr,e),gt(t,e)}}function Ax(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4fv(this.addr,e),gt(t,e)}}function wx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;eu.set(i),n.uniformMatrix2fv(this.addr,!1,eu),gt(t,i)}}function Cx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;Qc.set(i),n.uniformMatrix3fv(this.addr,!1,Qc),gt(t,i)}}function Rx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;Jc.set(i),n.uniformMatrix4fv(this.addr,!1,Jc),gt(t,i)}}function Px(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Lx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2iv(this.addr,e),gt(t,e)}}function Ix(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3iv(this.addr,e),gt(t,e)}}function Dx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4iv(this.addr,e),gt(t,e)}}function Ux(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Nx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2uiv(this.addr,e),gt(t,e)}}function Fx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3uiv(this.addr,e),gt(t,e)}}function Ox(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4uiv(this.addr,e),gt(t,e)}}function Bx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?nf:tf;t.setTexture2D(e||r,s)}function zx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||rf,s)}function Hx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||af,s)}function Gx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||sf,s)}function kx(n){switch(n){case 5126:return Ex;case 35664:return bx;case 35665:return Tx;case 35666:return Ax;case 35674:return wx;case 35675:return Cx;case 35676:return Rx;case 5124:case 35670:return Px;case 35667:case 35671:return Lx;case 35668:case 35672:return Ix;case 35669:case 35673:return Dx;case 5125:return Ux;case 36294:return Nx;case 36295:return Fx;case 36296:return Ox;case 35678:case 36198:case 36298:case 36306:case 35682:return Bx;case 35679:case 36299:case 36307:return zx;case 35680:case 36300:case 36308:case 36293:return Hx;case 36289:case 36303:case 36311:case 36292:return Gx}}function Vx(n,e){n.uniform1fv(this.addr,e)}function Wx(n,e){const t=xs(e,this.size,2);n.uniform2fv(this.addr,t)}function Xx(n,e){const t=xs(e,this.size,3);n.uniform3fv(this.addr,t)}function qx(n,e){const t=xs(e,this.size,4);n.uniform4fv(this.addr,t)}function $x(n,e){const t=xs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Yx(n,e){const t=xs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jx(n,e){const t=xs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Kx(n,e){n.uniform1iv(this.addr,e)}function Zx(n,e){n.uniform2iv(this.addr,e)}function Jx(n,e){n.uniform3iv(this.addr,e)}function Qx(n,e){n.uniform4iv(this.addr,e)}function eM(n,e){n.uniform1uiv(this.addr,e)}function tM(n,e){n.uniform2uiv(this.addr,e)}function nM(n,e){n.uniform3uiv(this.addr,e)}function iM(n,e){n.uniform4uiv(this.addr,e)}function sM(n,e,t){const i=this.cache,s=e.length,r=pa(t,s);mt(i,r)||(n.uniform1iv(this.addr,r),gt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||tf,r[o])}function rM(n,e,t){const i=this.cache,s=e.length,r=pa(t,s);mt(i,r)||(n.uniform1iv(this.addr,r),gt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||rf,r[o])}function aM(n,e,t){const i=this.cache,s=e.length,r=pa(t,s);mt(i,r)||(n.uniform1iv(this.addr,r),gt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||af,r[o])}function oM(n,e,t){const i=this.cache,s=e.length,r=pa(t,s);mt(i,r)||(n.uniform1iv(this.addr,r),gt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||sf,r[o])}function lM(n){switch(n){case 5126:return Vx;case 35664:return Wx;case 35665:return Xx;case 35666:return qx;case 35674:return $x;case 35675:return Yx;case 35676:return jx;case 5124:case 35670:return Kx;case 35667:case 35671:return Zx;case 35668:case 35672:return Jx;case 35669:case 35673:return Qx;case 5125:return eM;case 36294:return tM;case 36295:return nM;case 36296:return iM;case 35678:case 36198:case 36298:case 36306:case 35682:return sM;case 35679:case 36299:case 36307:return rM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return oM}}class cM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=kx(t.type)}}class uM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lM(t.type)}}class hM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const lo=/(\w+)(\])?(\[|\.)?/g;function tu(n,e){n.seq.push(e),n.map[e.id]=e}function fM(n,e,t){const i=n.name,s=i.length;for(lo.lastIndex=0;;){const r=lo.exec(i),o=lo.lastIndex;let a=r[1];const l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===s){tu(t,u===void 0?new cM(a,n,e):new uM(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new hM(a),tu(t,h)),t=h}}}class Or{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);fM(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function nu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const dM=37297;let pM=0;function mM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function gM(n){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(n);let i;switch(e===t?i="":e===Zr&&t===Kr?i="LinearDisplayP3ToLinearSRGB":e===Kr&&t===Zr&&(i="LinearSRGBToLinearDisplayP3"),n){case di:case fa:return[i,"LinearTransferOETF"];case vn:case Qo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function iu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+mM(n.getShaderSource(e),o)}else return s}function _M(n,e){const t=gM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function vM(n,e){let t;switch(e){case bg:t="Linear";break;case Tg:t="Reinhard";break;case Ag:t="OptimizedCineon";break;case wg:t="ACESFilmic";break;case Rg:t="AgX";break;case Pg:t="Neutral";break;case Cg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(as).join(`
`)}function MM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(as).join(`
`)}function SM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function as(n){return n!==""}function su(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ru(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const EM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(n){return n.replace(EM,TM)}const bM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function TM(n,e){let t=Ge[e];if(t===void 0){const i=bM.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Do(t)}const AM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function au(n){return n.replace(AM,wM)}function wM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ou(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(e+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ch?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Jm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function RM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ps:case ms:e="ENVMAP_TYPE_CUBE";break;case ha:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ms:e="ENVMAP_MODE_REFRACTION";break}return e}function LM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Rh:e="ENVMAP_BLENDING_MULTIPLY";break;case yg:e="ENVMAP_BLENDING_MIX";break;case Eg:e="ENVMAP_BLENDING_ADD";break}return e}function IM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function DM(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=CM(t),u=RM(t),c=PM(t),h=LM(t),d=IM(t),m=t.isWebGL2?"":xM(t),_=MM(t),x=SM(r),p=s.createProgram();let f,M,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(as).join(`
`),f.length>0&&(f+=`
`),M=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(as).join(`
`),M.length>0&&(M+=`
`)):(f=[ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),M=[m,ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?Ge.tonemapping_pars_fragment:"",t.toneMapping!==ci?vM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,_M("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(as).join(`
`)),o=Do(o),o=su(o,t),o=ru(o,t),a=Do(a),a=su(a,t),a=ru(a,t),o=au(o),a=au(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const v=g+f+o,T=g+M+a,P=nu(s,s.VERTEX_SHADER,v),A=nu(s,s.FRAGMENT_SHADER,T);s.attachShader(p,P),s.attachShader(p,A),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function L(D){if(n.debug.checkShaderErrors){const V=s.getProgramInfoLog(p).trim(),w=s.getShaderInfoLog(P).trim(),N=s.getShaderInfoLog(A).trim();let z=!0,q=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,P,A);else{const k=iu(s,P,"vertex"),K=iu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+k+`
`+K)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(w===""||N==="")&&(q=!1);q&&(D.diagnostics={runnable:z,programLog:V,vertexShader:{log:w,prefix:f},fragmentShader:{log:N,prefix:M}})}s.deleteShader(P),s.deleteShader(A),O=new Or(s,p),y=yM(s,p)}let O;this.getUniforms=function(){return O===void 0&&L(this),O};let y;this.getAttributes=function(){return y===void 0&&L(this),y};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(p,dM)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=P,this.fragmentShader=A,this}let UM=0;class NM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new FM(e),t.set(e,i)),i}}class FM{constructor(e){this.id=UM++,this.code=e,this.usedTimes=0}}function OM(n,e,t,i,s,r,o){const a=new Vh,l=new NM,u=new Set,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,m=s.vertexTextures;let _=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return u.add(y),y===0?"uv":`uv${y}`}function f(y,R,D,V,w){const N=V.fog,z=w.geometry,q=y.isMeshStandardMaterial?V.environment:null,k=(y.isMeshStandardMaterial?t:e).get(y.envMap||q),K=k&&k.mapping===ha?k.image.height:null,ie=x[y.type];y.precision!==null&&(_=s.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const he=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,me=he!==void 0?he.length:0;let Ie=0;z.morphAttributes.position!==void 0&&(Ie=1),z.morphAttributes.normal!==void 0&&(Ie=2),z.morphAttributes.color!==void 0&&(Ie=3);let te,ce,xe,Re;if(ie){const tt=Sn[ie];te=tt.vertexShader,ce=tt.fragmentShader}else te=y.vertexShader,ce=y.fragmentShader,l.update(y),xe=l.getVertexShaderID(y),Re=l.getFragmentShaderID(y);const Ae=n.getRenderTarget(),be=w.isInstancedMesh===!0,qe=w.isBatchedMesh===!0,Ue=!!y.map,E=!!y.matcap,I=!!k,B=!!y.aoMap,Q=!!y.lightMap,W=!!y.bumpMap,ee=!!y.normalMap,re=!!y.displacementMap,se=!!y.emissiveMap,ae=!!y.metalnessMap,b=!!y.roughnessMap,S=y.anisotropy>0,U=y.clearcoat>0,H=y.iridescence>0,Z=y.sheen>0,ne=y.transmission>0,Me=S&&!!y.anisotropyMap,ge=U&&!!y.clearcoatMap,oe=U&&!!y.clearcoatNormalMap,ue=U&&!!y.clearcoatRoughnessMap,Ce=H&&!!y.iridescenceMap,le=H&&!!y.iridescenceThicknessMap,et=Z&&!!y.sheenColorMap,ze=Z&&!!y.sheenRoughnessMap,Ee=!!y.specularMap,Se=!!y.specularColorMap,Te=!!y.specularIntensityMap,We=ne&&!!y.transmissionMap,Oe=ne&&!!y.thicknessMap,at=!!y.gradientMap,F=!!y.alphaMap,_e=y.alphaTest>0,$=!!y.alphaHash,de=!!y.extensions;let ve=ci;y.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(ve=n.toneMapping);const Xe={isWebGL2:h,shaderID:ie,shaderType:y.type,shaderName:y.name,vertexShader:te,fragmentShader:ce,defines:y.defines,customVertexShaderID:xe,customFragmentShaderID:Re,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:qe,instancing:be,instancingColor:be&&w.instanceColor!==null,instancingMorph:be&&w.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ae===null?n.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:di,alphaToCoverage:!!y.alphaToCoverage,map:Ue,matcap:E,envMap:I,envMapMode:I&&k.mapping,envMapCubeUVHeight:K,aoMap:B,lightMap:Q,bumpMap:W,normalMap:ee,displacementMap:m&&re,emissiveMap:se,normalMapObjectSpace:ee&&y.normalMapType===kg,normalMapTangentSpace:ee&&y.normalMapType===Gg,metalnessMap:ae,roughnessMap:b,anisotropy:S,anisotropyMap:Me,clearcoat:U,clearcoatMap:ge,clearcoatNormalMap:oe,clearcoatRoughnessMap:ue,iridescence:H,iridescenceMap:Ce,iridescenceThicknessMap:le,sheen:Z,sheenColorMap:et,sheenRoughnessMap:ze,specularMap:Ee,specularColorMap:Se,specularIntensityMap:Te,transmission:ne,transmissionMap:We,thicknessMap:Oe,gradientMap:at,opaque:y.transparent===!1&&y.blending===hs&&y.alphaToCoverage===!1,alphaMap:F,alphaTest:_e,alphaHash:$,combine:y.combine,mapUv:Ue&&p(y.map.channel),aoMapUv:B&&p(y.aoMap.channel),lightMapUv:Q&&p(y.lightMap.channel),bumpMapUv:W&&p(y.bumpMap.channel),normalMapUv:ee&&p(y.normalMap.channel),displacementMapUv:re&&p(y.displacementMap.channel),emissiveMapUv:se&&p(y.emissiveMap.channel),metalnessMapUv:ae&&p(y.metalnessMap.channel),roughnessMapUv:b&&p(y.roughnessMap.channel),anisotropyMapUv:Me&&p(y.anisotropyMap.channel),clearcoatMapUv:ge&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:le&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:et&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:ze&&p(y.sheenRoughnessMap.channel),specularMapUv:Ee&&p(y.specularMap.channel),specularColorMapUv:Se&&p(y.specularColorMap.channel),specularIntensityMapUv:Te&&p(y.specularIntensityMap.channel),transmissionMapUv:We&&p(y.transmissionMap.channel),thicknessMapUv:Oe&&p(y.thicknessMap.channel),alphaMapUv:F&&p(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ee||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!z.attributes.uv&&(Ue||F),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:w.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ie,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ve,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ue&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===st,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Gn,flipSided:y.side===Wt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:de&&y.extensions.derivatives===!0,extensionFragDepth:de&&y.extensions.fragDepth===!0,extensionDrawBuffers:de&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:de&&y.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Xe.vertexUv1s=u.has(1),Xe.vertexUv2s=u.has(2),Xe.vertexUv3s=u.has(3),u.clear(),Xe}function M(y){const R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)R.push(D),R.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(g(R,y),v(R,y),R.push(n.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function g(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function v(y,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.instancingMorph&&a.enable(4),R.matcap&&a.enable(5),R.envMap&&a.enable(6),R.normalMapObjectSpace&&a.enable(7),R.normalMapTangentSpace&&a.enable(8),R.clearcoat&&a.enable(9),R.iridescence&&a.enable(10),R.alphaTest&&a.enable(11),R.vertexColors&&a.enable(12),R.vertexAlphas&&a.enable(13),R.vertexUv1s&&a.enable(14),R.vertexUv2s&&a.enable(15),R.vertexUv3s&&a.enable(16),R.vertexTangents&&a.enable(17),R.anisotropy&&a.enable(18),R.alphaHash&&a.enable(19),R.batching&&a.enable(20),y.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.alphaToCoverage&&a.enable(20),y.push(a.mask)}function T(y){const R=x[y.type];let D;if(R){const V=Sn[R];D=__.clone(V.uniforms)}else D=y.uniforms;return D}function P(y,R){let D;for(let V=0,w=c.length;V<w;V++){const N=c[V];if(N.cacheKey===R){D=N,++D.usedTimes;break}}return D===void 0&&(D=new DM(n,R,y,r),c.push(D)),D}function A(y){if(--y.usedTimes===0){const R=c.indexOf(y);c[R]=c[c.length-1],c.pop(),y.destroy()}}function L(y){l.remove(y)}function O(){l.dispose()}return{getParameters:f,getProgramCacheKey:M,getUniforms:T,acquireProgram:P,releaseProgram:A,releaseShaderCache:L,programs:c,dispose:O}}function BM(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function zM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function lu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function cu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,m,_,x,p){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:_,renderOrder:h.renderOrder,z:x,group:p},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=x,f.group=p),e++,f}function a(h,d,m,_,x,p){const f=o(h,d,m,_,x,p);m.transmission>0?i.push(f):m.transparent===!0?s.push(f):t.push(f)}function l(h,d,m,_,x,p){const f=o(h,d,m,_,x,p);m.transmission>0?i.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function u(h,d){t.length>1&&t.sort(h||zM),i.length>1&&i.sort(d||lu),s.length>1&&s.sort(d||lu)}function c(){for(let h=e,d=n.length;h<d;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:c,sort:u}}function HM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new cu,n.set(i,[o])):s>=r.length?(o=new cu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function GM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new Je};break;case"SpotLight":t={position:new j,direction:new j,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function kM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let VM=0;function WM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function XM(n,e){const t=new GM,i=kM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)s.probe.push(new j);const r=new j,o=new pt,a=new pt;function l(c,h){let d=0,m=0,_=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let x=0,p=0,f=0,M=0,g=0,v=0,T=0,P=0,A=0,L=0,O=0;c.sort(WM);const y=h===!0?Math.PI:1;for(let D=0,V=c.length;D<V;D++){const w=c[D],N=w.color,z=w.intensity,q=w.distance,k=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)d+=N.r*z*y,m+=N.g*z*y,_+=N.b*z*y;else if(w.isLightProbe){for(let K=0;K<9;K++)s.probe[K].addScaledVector(w.sh.coefficients[K],z);O++}else if(w.isDirectionalLight){const K=t.get(w);if(K.color.copy(w.color).multiplyScalar(w.intensity*y),w.castShadow){const ie=w.shadow,he=i.get(w);he.shadowBias=ie.bias,he.shadowNormalBias=ie.normalBias,he.shadowRadius=ie.radius,he.shadowMapSize=ie.mapSize,s.directionalShadow[x]=he,s.directionalShadowMap[x]=k,s.directionalShadowMatrix[x]=w.shadow.matrix,v++}s.directional[x]=K,x++}else if(w.isSpotLight){const K=t.get(w);K.position.setFromMatrixPosition(w.matrixWorld),K.color.copy(N).multiplyScalar(z*y),K.distance=q,K.coneCos=Math.cos(w.angle),K.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),K.decay=w.decay,s.spot[f]=K;const ie=w.shadow;if(w.map&&(s.spotLightMap[A]=w.map,A++,ie.updateMatrices(w),w.castShadow&&L++),s.spotLightMatrix[f]=ie.matrix,w.castShadow){const he=i.get(w);he.shadowBias=ie.bias,he.shadowNormalBias=ie.normalBias,he.shadowRadius=ie.radius,he.shadowMapSize=ie.mapSize,s.spotShadow[f]=he,s.spotShadowMap[f]=k,P++}f++}else if(w.isRectAreaLight){const K=t.get(w);K.color.copy(N).multiplyScalar(z),K.halfWidth.set(w.width*.5,0,0),K.halfHeight.set(0,w.height*.5,0),s.rectArea[M]=K,M++}else if(w.isPointLight){const K=t.get(w);if(K.color.copy(w.color).multiplyScalar(w.intensity*y),K.distance=w.distance,K.decay=w.decay,w.castShadow){const ie=w.shadow,he=i.get(w);he.shadowBias=ie.bias,he.shadowNormalBias=ie.normalBias,he.shadowRadius=ie.radius,he.shadowMapSize=ie.mapSize,he.shadowCameraNear=ie.camera.near,he.shadowCameraFar=ie.camera.far,s.pointShadow[p]=he,s.pointShadowMap[p]=k,s.pointShadowMatrix[p]=w.shadow.matrix,T++}s.point[p]=K,p++}else if(w.isHemisphereLight){const K=t.get(w);K.skyColor.copy(w.color).multiplyScalar(z*y),K.groundColor.copy(w.groundColor).multiplyScalar(z*y),s.hemi[g]=K,g++}}M>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_FLOAT_1,s.rectAreaLTC2=pe.LTC_FLOAT_2):(s.rectAreaLTC1=pe.LTC_HALF_1,s.rectAreaLTC2=pe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_FLOAT_1,s.rectAreaLTC2=pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_HALF_1,s.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=_;const R=s.hash;(R.directionalLength!==x||R.pointLength!==p||R.spotLength!==f||R.rectAreaLength!==M||R.hemiLength!==g||R.numDirectionalShadows!==v||R.numPointShadows!==T||R.numSpotShadows!==P||R.numSpotMaps!==A||R.numLightProbes!==O)&&(s.directional.length=x,s.spot.length=f,s.rectArea.length=M,s.point.length=p,s.hemi.length=g,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=T,s.pointShadowMap.length=T,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=T,s.spotLightMatrix.length=P+A-L,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=O,R.directionalLength=x,R.pointLength=p,R.spotLength=f,R.rectAreaLength=M,R.hemiLength=g,R.numDirectionalShadows=v,R.numPointShadows=T,R.numSpotShadows=P,R.numSpotMaps=A,R.numLightProbes=O,s.version=VM++)}function u(c,h){let d=0,m=0,_=0,x=0,p=0;const f=h.matrixWorldInverse;for(let M=0,g=c.length;M<g;M++){const v=c[M];if(v.isDirectionalLight){const T=s.directional[d];T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),d++}else if(v.isSpotLight){const T=s.spot[_];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),_++}else if(v.isRectAreaLight){const T=s.rectArea[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),a.identity(),o.copy(v.matrixWorld),o.premultiply(f),a.extractRotation(o),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){const T=s.point[m];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),m++}else if(v.isHemisphereLight){const T=s.hemi[p];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(f),p++}}}return{setup:l,setupView:u,state:s}}function uu(n,e){const t=new XM(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function a(h){s.push(h)}function l(h){t.setup(i,h)}function u(h){t.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function qM(n,e){let t=new WeakMap;function i(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new uu(n,e),t.set(r,[l])):o>=a.length?(l=new uu(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class $M extends da{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YM extends da{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ZM(n,e,t){let i=new Zh;const s=new $e,r=new $e,o=new Tt,a=new $M({depthPacking:Hg}),l=new YM,u={},c=t.maxTextureSize,h={[fi]:Wt,[Wt]:fi,[Gn]:Gn},d=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:jM,fragmentShader:KM}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Hi;_.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new bn(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ch;let f=this.type;this.render=function(P,A,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const O=n.getRenderTarget(),y=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),D=n.state;D.setBlending(li),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const V=f!==Fn&&this.type===Fn,w=f===Fn&&this.type!==Fn;for(let N=0,z=P.length;N<z;N++){const q=P[N],k=q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const K=k.getFrameExtents();if(s.multiply(K),r.copy(k.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/K.x),s.x=r.x*K.x,k.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/K.y),s.y=r.y*K.y,k.mapSize.y=r.y)),k.map===null||V===!0||w===!0){const he=this.type!==Fn?{minFilter:Ut,magFilter:Ut}:{};k.map!==null&&k.map.dispose(),k.map=new Bi(s.x,s.y,he),k.map.texture.name=q.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const ie=k.getViewportCount();for(let he=0;he<ie;he++){const me=k.getViewport(he);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),D.viewport(o),k.updateMatrices(q,he),i=k.getFrustum(),v(A,L,k.camera,q,this.type)}k.isPointLightShadow!==!0&&this.type===Fn&&M(k,L),k.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(O,y,R)};function M(P,A){const L=e.update(x);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Bi(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(A,null,L,d,x,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(A,null,L,m,x,null)}function g(P,A,L,O){let y=null;const R=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(R!==void 0)y=R;else if(y=L.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const D=y.uuid,V=A.uuid;let w=u[D];w===void 0&&(w={},u[D]=w);let N=w[V];N===void 0&&(N=y.clone(),w[V]=N,A.addEventListener("dispose",T)),y=N}if(y.visible=A.visible,y.wireframe=A.wireframe,O===Fn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:h[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const D=n.properties.get(y);D.light=L}return y}function v(P,A,L,O,y){if(P.visible===!1)return;if(P.layers.test(A.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===Fn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);const V=e.update(P),w=P.material;if(Array.isArray(w)){const N=V.groups;for(let z=0,q=N.length;z<q;z++){const k=N[z],K=w[k.materialIndex];if(K&&K.visible){const ie=g(P,K,O,y);P.onBeforeShadow(n,P,A,L,V,ie,k),n.renderBufferDirect(L,null,V,ie,P,k),P.onAfterShadow(n,P,A,L,V,ie,k)}}}else if(w.visible){const N=g(P,w,O,y);P.onBeforeShadow(n,P,A,L,V,N,null),n.renderBufferDirect(L,null,V,N,P,null),P.onAfterShadow(n,P,A,L,V,N,null)}}const D=P.children;for(let V=0,w=D.length;V<w;V++)v(D[V],A,L,O,y)}function T(P){P.target.removeEventListener("dispose",T);for(const L in u){const O=u[L],y=P.target.uuid;y in O&&(O[y].dispose(),delete O[y])}}}function JM(n,e,t){const i=t.isWebGL2;function s(){let F=!1;const _e=new Tt;let $=null;const de=new Tt(0,0,0,0);return{setMask:function(ve){$!==ve&&!F&&(n.colorMask(ve,ve,ve,ve),$=ve)},setLocked:function(ve){F=ve},setClear:function(ve,Xe,tt,yt,Zt){Zt===!0&&(ve*=yt,Xe*=yt,tt*=yt),_e.set(ve,Xe,tt,yt),de.equals(_e)===!1&&(n.clearColor(ve,Xe,tt,yt),de.copy(_e))},reset:function(){F=!1,$=null,de.set(-1,0,0,0)}}}function r(){let F=!1,_e=null,$=null,de=null;return{setTest:function(ve){ve?be(n.DEPTH_TEST):qe(n.DEPTH_TEST)},setMask:function(ve){_e!==ve&&!F&&(n.depthMask(ve),_e=ve)},setFunc:function(ve){if($!==ve){switch(ve){case mg:n.depthFunc(n.NEVER);break;case gg:n.depthFunc(n.ALWAYS);break;case _g:n.depthFunc(n.LESS);break;case Yr:n.depthFunc(n.LEQUAL);break;case vg:n.depthFunc(n.EQUAL);break;case xg:n.depthFunc(n.GEQUAL);break;case Mg:n.depthFunc(n.GREATER);break;case Sg:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=ve}},setLocked:function(ve){F=ve},setClear:function(ve){de!==ve&&(n.clearDepth(ve),de=ve)},reset:function(){F=!1,_e=null,$=null,de=null}}}function o(){let F=!1,_e=null,$=null,de=null,ve=null,Xe=null,tt=null,yt=null,Zt=null;return{setTest:function(nt){F||(nt?be(n.STENCIL_TEST):qe(n.STENCIL_TEST))},setMask:function(nt){_e!==nt&&!F&&(n.stencilMask(nt),_e=nt)},setFunc:function(nt,Lt,pn){($!==nt||de!==Lt||ve!==pn)&&(n.stencilFunc(nt,Lt,pn),$=nt,de=Lt,ve=pn)},setOp:function(nt,Lt,pn){(Xe!==nt||tt!==Lt||yt!==pn)&&(n.stencilOp(nt,Lt,pn),Xe=nt,tt=Lt,yt=pn)},setLocked:function(nt){F=nt},setClear:function(nt){Zt!==nt&&(n.clearStencil(nt),Zt=nt)},reset:function(){F=!1,_e=null,$=null,de=null,ve=null,Xe=null,tt=null,yt=null,Zt=null}}}const a=new s,l=new r,u=new o,c=new WeakMap,h=new WeakMap;let d={},m={},_=new WeakMap,x=[],p=null,f=!1,M=null,g=null,v=null,T=null,P=null,A=null,L=null,O=new Je(0,0,0),y=0,R=!1,D=null,V=null,w=null,N=null,z=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,K=0;const ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ie)[1]),k=K>=1):ie.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),k=K>=2);let he=null,me={};const Ie=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),ce=new Tt().fromArray(Ie),xe=new Tt().fromArray(te);function Re(F,_e,$,de){const ve=new Uint8Array(4),Xe=n.createTexture();n.bindTexture(F,Xe),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<$;tt++)i&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(_e,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(_e+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return Xe}const Ae={};Ae[n.TEXTURE_2D]=Re(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=Re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ae[n.TEXTURE_2D_ARRAY]=Re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=Re(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),be(n.DEPTH_TEST),l.setFunc(Yr),re(!1),se(Vl),be(n.CULL_FACE),W(li);function be(F){d[F]!==!0&&(n.enable(F),d[F]=!0)}function qe(F){d[F]!==!1&&(n.disable(F),d[F]=!1)}function Ue(F,_e){return m[F]!==_e?(n.bindFramebuffer(F,_e),m[F]=_e,i&&(F===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=_e),F===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=_e)),!0):!1}function E(F,_e){let $=x,de=!1;if(F){$=_.get(_e),$===void 0&&($=[],_.set(_e,$));const ve=F.textures;if($.length!==ve.length||$[0]!==n.COLOR_ATTACHMENT0){for(let Xe=0,tt=ve.length;Xe<tt;Xe++)$[Xe]=n.COLOR_ATTACHMENT0+Xe;$.length=ve.length,de=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,de=!0);if(de)if(t.isWebGL2)n.drawBuffers($);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL($);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function I(F){return p!==F?(n.useProgram(F),p=F,!0):!1}const B={[Pi]:n.FUNC_ADD,[eg]:n.FUNC_SUBTRACT,[tg]:n.FUNC_REVERSE_SUBTRACT};if(i)B[$l]=n.MIN,B[Yl]=n.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(B[$l]=F.MIN_EXT,B[Yl]=F.MAX_EXT)}const Q={[ng]:n.ZERO,[ig]:n.ONE,[sg]:n.SRC_COLOR,[bo]:n.SRC_ALPHA,[ug]:n.SRC_ALPHA_SATURATE,[lg]:n.DST_COLOR,[ag]:n.DST_ALPHA,[rg]:n.ONE_MINUS_SRC_COLOR,[To]:n.ONE_MINUS_SRC_ALPHA,[cg]:n.ONE_MINUS_DST_COLOR,[og]:n.ONE_MINUS_DST_ALPHA,[hg]:n.CONSTANT_COLOR,[fg]:n.ONE_MINUS_CONSTANT_COLOR,[dg]:n.CONSTANT_ALPHA,[pg]:n.ONE_MINUS_CONSTANT_ALPHA};function W(F,_e,$,de,ve,Xe,tt,yt,Zt,nt){if(F===li){f===!0&&(qe(n.BLEND),f=!1);return}if(f===!1&&(be(n.BLEND),f=!0),F!==Qm){if(F!==M||nt!==R){if((g!==Pi||P!==Pi)&&(n.blendEquation(n.FUNC_ADD),g=Pi,P=Pi),nt)switch(F){case hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wl:n.blendFunc(n.ONE,n.ONE);break;case Xl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ql:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ql:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,T=null,A=null,L=null,O.set(0,0,0),y=0,M=F,R=nt}return}ve=ve||_e,Xe=Xe||$,tt=tt||de,(_e!==g||ve!==P)&&(n.blendEquationSeparate(B[_e],B[ve]),g=_e,P=ve),($!==v||de!==T||Xe!==A||tt!==L)&&(n.blendFuncSeparate(Q[$],Q[de],Q[Xe],Q[tt]),v=$,T=de,A=Xe,L=tt),(yt.equals(O)===!1||Zt!==y)&&(n.blendColor(yt.r,yt.g,yt.b,Zt),O.copy(yt),y=Zt),M=F,R=!1}function ee(F,_e){F.side===Gn?qe(n.CULL_FACE):be(n.CULL_FACE);let $=F.side===Wt;_e&&($=!$),re($),F.blending===hs&&F.transparent===!1?W(li):W(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const de=F.stencilWrite;u.setTest(de),de&&(u.setMask(F.stencilWriteMask),u.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),u.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),b(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?be(n.SAMPLE_ALPHA_TO_COVERAGE):qe(n.SAMPLE_ALPHA_TO_COVERAGE)}function re(F){D!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),D=F)}function se(F){F!==Km?(be(n.CULL_FACE),F!==V&&(F===Vl?n.cullFace(n.BACK):F===Zm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):qe(n.CULL_FACE),V=F}function ae(F){F!==w&&(k&&n.lineWidth(F),w=F)}function b(F,_e,$){F?(be(n.POLYGON_OFFSET_FILL),(N!==_e||z!==$)&&(n.polygonOffset(_e,$),N=_e,z=$)):qe(n.POLYGON_OFFSET_FILL)}function S(F){F?be(n.SCISSOR_TEST):qe(n.SCISSOR_TEST)}function U(F){F===void 0&&(F=n.TEXTURE0+q-1),he!==F&&(n.activeTexture(F),he=F)}function H(F,_e,$){$===void 0&&(he===null?$=n.TEXTURE0+q-1:$=he);let de=me[$];de===void 0&&(de={type:void 0,texture:void 0},me[$]=de),(de.type!==F||de.texture!==_e)&&(he!==$&&(n.activeTexture($),he=$),n.bindTexture(F,_e||Ae[F]),de.type=F,de.texture=_e)}function Z(){const F=me[he];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ne(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ze(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(F){ce.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),ce.copy(F))}function Te(F){xe.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),xe.copy(F))}function We(F,_e){let $=h.get(_e);$===void 0&&($=new WeakMap,h.set(_e,$));let de=$.get(F);de===void 0&&(de=n.getUniformBlockIndex(_e,F.name),$.set(F,de))}function Oe(F,_e){const de=h.get(_e).get(F);c.get(_e)!==de&&(n.uniformBlockBinding(_e,de,F.__bindingPointIndex),c.set(_e,de))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},he=null,me={},m={},_=new WeakMap,x=[],p=null,f=!1,M=null,g=null,v=null,T=null,P=null,A=null,L=null,O=new Je(0,0,0),y=0,R=!1,D=null,V=null,w=null,N=null,z=null,ce.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:be,disable:qe,bindFramebuffer:Ue,drawBuffers:E,useProgram:I,setBlending:W,setMaterial:ee,setFlipSided:re,setCullFace:se,setLineWidth:ae,setPolygonOffset:b,setScissorTest:S,activeTexture:U,bindTexture:H,unbindTexture:Z,compressedTexImage2D:ne,compressedTexImage3D:Me,texImage2D:ze,texImage3D:Ee,updateUBOMapping:We,uniformBlockBinding:Oe,texStorage2D:le,texStorage3D:et,texSubImage2D:ge,texSubImage3D:oe,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ce,scissor:Se,viewport:Te,reset:at}}function QM(n,e,t,i,s,r,o){const a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,h=new WeakMap;let d;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(b,S){return _?new OffscreenCanvas(b,S):Qr("canvas")}function p(b,S,U,H){let Z=1;const ne=ae(b);if((ne.width>H||ne.height>H)&&(Z=H/Math.max(ne.width,ne.height)),Z<1||S===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Me=S?Io:Math.floor,ge=Me(Z*ne.width),oe=Me(Z*ne.height);d===void 0&&(d=x(ge,oe));const ue=U?x(ge,oe):d;return ue.width=ge,ue.height=oe,ue.getContext("2d").drawImage(b,0,0,ge,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ge+"x"+oe+")."),ue}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),b;return b}function f(b){const S=ae(b);return bc(S.width)&&bc(S.height)}function M(b){return a?!1:b.wrapS!==ln||b.wrapT!==ln||b.minFilter!==Ut&&b.minFilter!==kt}function g(b,S){return b.generateMipmaps&&S&&b.minFilter!==Ut&&b.minFilter!==kt}function v(b){n.generateMipmap(b)}function T(b,S,U,H,Z=!1){if(a===!1)return S;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ne=S;if(S===n.RED&&(U===n.FLOAT&&(ne=n.R32F),U===n.HALF_FLOAT&&(ne=n.R16F),U===n.UNSIGNED_BYTE&&(ne=n.R8)),S===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(ne=n.R8UI),U===n.UNSIGNED_SHORT&&(ne=n.R16UI),U===n.UNSIGNED_INT&&(ne=n.R32UI),U===n.BYTE&&(ne=n.R8I),U===n.SHORT&&(ne=n.R16I),U===n.INT&&(ne=n.R32I)),S===n.RG&&(U===n.FLOAT&&(ne=n.RG32F),U===n.HALF_FLOAT&&(ne=n.RG16F),U===n.UNSIGNED_BYTE&&(ne=n.RG8)),S===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(ne=n.RG8UI),U===n.UNSIGNED_SHORT&&(ne=n.RG16UI),U===n.UNSIGNED_INT&&(ne=n.RG32UI),U===n.BYTE&&(ne=n.RG8I),U===n.SHORT&&(ne=n.RG16I),U===n.INT&&(ne=n.RG32I)),S===n.RGBA){const Me=Z?jr:Ze.getTransfer(H);U===n.FLOAT&&(ne=n.RGBA32F),U===n.HALF_FLOAT&&(ne=n.RGBA16F),U===n.UNSIGNED_BYTE&&(ne=Me===st?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function P(b,S,U){return g(b,U)===!0||b.isFramebufferTexture&&b.minFilter!==Ut&&b.minFilter!==kt?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function A(b){return b===Ut||b===jl||b===Ts?n.NEAREST:n.LINEAR}function L(b){const S=b.target;S.removeEventListener("dispose",L),y(S),S.isVideoTexture&&h.delete(S)}function O(b){const S=b.target;S.removeEventListener("dispose",O),D(S)}function y(b){const S=i.get(b);if(S.__webglInit===void 0)return;const U=b.source,H=m.get(U);if(H){const Z=H[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(b),Object.keys(H).length===0&&m.delete(U)}i.remove(b)}function R(b){const S=i.get(b);n.deleteTexture(S.__webglTexture);const U=b.source,H=m.get(U);delete H[S.__cacheKey],o.memory.textures--}function D(b){const S=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(S.__webglFramebuffer[H]))for(let Z=0;Z<S.__webglFramebuffer[H].length;Z++)n.deleteFramebuffer(S.__webglFramebuffer[H][Z]);else n.deleteFramebuffer(S.__webglFramebuffer[H]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[H])}else{if(Array.isArray(S.__webglFramebuffer))for(let H=0;H<S.__webglFramebuffer.length;H++)n.deleteFramebuffer(S.__webglFramebuffer[H]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let H=0;H<S.__webglColorRenderbuffer.length;H++)S.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[H]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const U=b.textures;for(let H=0,Z=U.length;H<Z;H++){const ne=i.get(U[H]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(U[H])}i.remove(b)}let V=0;function w(){V=0}function N(){const b=V;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),V+=1,b}function z(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function q(b,S){const U=i.get(b);if(b.isVideoTexture&&re(b),b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){const H=b.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(U,b,S);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+S)}function k(b,S){const U=i.get(b);if(b.version>0&&U.__version!==b.version){xe(U,b,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+S)}function K(b,S){const U=i.get(b);if(b.version>0&&U.__version!==b.version){xe(U,b,S);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+S)}function ie(b,S){const U=i.get(b);if(b.version>0&&U.__version!==b.version){Re(U,b,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+S)}const he={[Co]:n.REPEAT,[ln]:n.CLAMP_TO_EDGE,[Ro]:n.MIRRORED_REPEAT},me={[Ut]:n.NEAREST,[jl]:n.NEAREST_MIPMAP_NEAREST,[Ts]:n.NEAREST_MIPMAP_LINEAR,[kt]:n.LINEAR,[La]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},Ie={[Vg]:n.NEVER,[jg]:n.ALWAYS,[Wg]:n.LESS,[Bh]:n.LEQUAL,[Xg]:n.EQUAL,[Yg]:n.GEQUAL,[qg]:n.GREATER,[$g]:n.NOTEQUAL};function te(b,S,U){if(S.type===kn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===kt||S.magFilter===La||S.magFilter===Ts||S.magFilter===Ii||S.minFilter===kt||S.minFilter===La||S.minFilter===Ts||S.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),U?(n.texParameteri(b,n.TEXTURE_WRAP_S,he[S.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,he[S.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,he[S.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,me[S.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,me[S.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==ln||S.wrapT!==ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,A(S.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==Ut&&S.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Ie[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ut||S.minFilter!==Ts&&S.minFilter!==Ii||S.type===kn&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===js&&e.has("OES_texture_half_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ce(b,S){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",L));const H=S.source;let Z=m.get(H);Z===void 0&&(Z={},m.set(H,Z));const ne=z(S);if(ne!==b.__cacheKey){Z[ne]===void 0&&(Z[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Z[ne].usedTimes++;const Me=Z[b.__cacheKey];Me!==void 0&&(Z[b.__cacheKey].usedTimes--,Me.usedTimes===0&&R(S)),b.__cacheKey=ne,b.__webglTexture=Z[ne].texture}return U}function xe(b,S,U){let H=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(H=n.TEXTURE_3D);const Z=ce(b,S),ne=S.source;t.bindTexture(H,b.__webglTexture,n.TEXTURE0+U);const Me=i.get(ne);if(ne.version!==Me.__version||Z===!0){t.activeTexture(n.TEXTURE0+U);const ge=Ze.getPrimaries(Ze.workingColorSpace),oe=S.colorSpace===ri?null:Ze.getPrimaries(S.colorSpace),ue=S.colorSpace===ri||ge===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ce=M(S)&&f(S.image)===!1;let le=p(S.image,Ce,!1,s.maxTextureSize);le=se(S,le);const et=f(le)||a,ze=r.convert(S.format,S.colorSpace);let Ee=r.convert(S.type),Se=T(S.internalFormat,ze,Ee,S.colorSpace,S.isVideoTexture);te(H,S,et);let Te;const We=S.mipmaps,Oe=a&&S.isVideoTexture!==!0&&Se!==Oh,at=Me.__version===void 0||Z===!0,F=ne.dataReady,_e=P(S,le,et);if(S.isDepthTexture)Se=n.DEPTH_COMPONENT,a?S.type===kn?Se=n.DEPTH_COMPONENT32F:S.type===oi?Se=n.DEPTH_COMPONENT24:S.type===Ni?Se=n.DEPTH24_STENCIL8:Se=n.DEPTH_COMPONENT16:S.type===kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Fi&&Se===n.DEPTH_COMPONENT&&S.type!==Jo&&S.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=oi,Ee=r.convert(S.type)),S.format===gs&&Se===n.DEPTH_COMPONENT&&(Se=n.DEPTH_STENCIL,S.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ni,Ee=r.convert(S.type))),at&&(Oe?t.texStorage2D(n.TEXTURE_2D,1,Se,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Se,le.width,le.height,0,ze,Ee,null));else if(S.isDataTexture)if(We.length>0&&et){Oe&&at&&t.texStorage2D(n.TEXTURE_2D,_e,Se,We[0].width,We[0].height);for(let $=0,de=We.length;$<de;$++)Te=We[$],Oe?F&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Te.width,Te.height,ze,Ee,Te.data):t.texImage2D(n.TEXTURE_2D,$,Se,Te.width,Te.height,0,ze,Ee,Te.data);S.generateMipmaps=!1}else Oe?(at&&t.texStorage2D(n.TEXTURE_2D,_e,Se,le.width,le.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,ze,Ee,le.data)):t.texImage2D(n.TEXTURE_2D,0,Se,le.width,le.height,0,ze,Ee,le.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Oe&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Se,We[0].width,We[0].height,le.depth);for(let $=0,de=We.length;$<de;$++)Te=We[$],S.format!==cn?ze!==null?Oe?F&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Te.width,Te.height,le.depth,ze,Te.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Se,Te.width,Te.height,le.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Te.width,Te.height,le.depth,ze,Ee,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,Se,Te.width,Te.height,le.depth,0,ze,Ee,Te.data)}else{Oe&&at&&t.texStorage2D(n.TEXTURE_2D,_e,Se,We[0].width,We[0].height);for(let $=0,de=We.length;$<de;$++)Te=We[$],S.format!==cn?ze!==null?Oe?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,Te.width,Te.height,ze,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,$,Se,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?F&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Te.width,Te.height,ze,Ee,Te.data):t.texImage2D(n.TEXTURE_2D,$,Se,Te.width,Te.height,0,ze,Ee,Te.data)}else if(S.isDataArrayTexture)Oe?(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Se,le.width,le.height,le.depth),F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ze,Ee,le.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,le.width,le.height,le.depth,0,ze,Ee,le.data);else if(S.isData3DTexture)Oe?(at&&t.texStorage3D(n.TEXTURE_3D,_e,Se,le.width,le.height,le.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ze,Ee,le.data)):t.texImage3D(n.TEXTURE_3D,0,Se,le.width,le.height,le.depth,0,ze,Ee,le.data);else if(S.isFramebufferTexture){if(at)if(Oe)t.texStorage2D(n.TEXTURE_2D,_e,Se,le.width,le.height);else{let $=le.width,de=le.height;for(let ve=0;ve<_e;ve++)t.texImage2D(n.TEXTURE_2D,ve,Se,$,de,0,ze,Ee,null),$>>=1,de>>=1}}else if(We.length>0&&et){if(Oe&&at){const $=ae(We[0]);t.texStorage2D(n.TEXTURE_2D,_e,Se,$.width,$.height)}for(let $=0,de=We.length;$<de;$++)Te=We[$],Oe?F&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,ze,Ee,Te):t.texImage2D(n.TEXTURE_2D,$,Se,ze,Ee,Te);S.generateMipmaps=!1}else if(Oe){if(at){const $=ae(le);t.texStorage2D(n.TEXTURE_2D,_e,Se,$.width,$.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ze,Ee,le)}else t.texImage2D(n.TEXTURE_2D,0,Se,ze,Ee,le);g(S,et)&&v(H),Me.__version=ne.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function Re(b,S,U){if(S.image.length!==6)return;const H=ce(b,S),Z=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+U);const ne=i.get(Z);if(Z.version!==ne.__version||H===!0){t.activeTexture(n.TEXTURE0+U);const Me=Ze.getPrimaries(Ze.workingColorSpace),ge=S.colorSpace===ri?null:Ze.getPrimaries(S.colorSpace),oe=S.colorSpace===ri||Me===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const ue=S.isCompressedTexture||S.image[0].isCompressedTexture,Ce=S.image[0]&&S.image[0].isDataTexture,le=[];for(let $=0;$<6;$++)!ue&&!Ce?le[$]=p(S.image[$],!1,!0,s.maxCubemapSize):le[$]=Ce?S.image[$].image:S.image[$],le[$]=se(S,le[$]);const et=le[0],ze=f(et)||a,Ee=r.convert(S.format,S.colorSpace),Se=r.convert(S.type),Te=T(S.internalFormat,Ee,Se,S.colorSpace),We=a&&S.isVideoTexture!==!0,Oe=ne.__version===void 0||H===!0,at=Z.dataReady;let F=P(S,et,ze);te(n.TEXTURE_CUBE_MAP,S,ze);let _e;if(ue){We&&Oe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,F,Te,et.width,et.height);for(let $=0;$<6;$++){_e=le[$].mipmaps;for(let de=0;de<_e.length;de++){const ve=_e[de];S.format!==cn?Ee!==null?We?at&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,0,0,ve.width,ve.height,Ee,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,Te,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?at&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,0,0,ve.width,ve.height,Ee,Se,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,Te,ve.width,ve.height,0,Ee,Se,ve.data)}}}else{if(_e=S.mipmaps,We&&Oe){_e.length>0&&F++;const $=ae(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,F,Te,$.width,$.height)}for(let $=0;$<6;$++)if(Ce){We?at&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,le[$].width,le[$].height,Ee,Se,le[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Te,le[$].width,le[$].height,0,Ee,Se,le[$].data);for(let de=0;de<_e.length;de++){const Xe=_e[de].image[$].image;We?at&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,0,0,Xe.width,Xe.height,Ee,Se,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,Te,Xe.width,Xe.height,0,Ee,Se,Xe.data)}}else{We?at&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ee,Se,le[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Te,Ee,Se,le[$]);for(let de=0;de<_e.length;de++){const ve=_e[de];We?at&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,0,0,Ee,Se,ve.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,Te,Ee,Se,ve.image[$])}}}g(S,ze)&&v(n.TEXTURE_CUBE_MAP),ne.__version=Z.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function Ae(b,S,U,H,Z,ne){const Me=r.convert(U.format,U.colorSpace),ge=r.convert(U.type),oe=T(U.internalFormat,Me,ge,U.colorSpace);if(!i.get(S).__hasExternalTextures){const Ce=Math.max(1,S.width>>ne),le=Math.max(1,S.height>>ne);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,ne,oe,Ce,le,S.depth,0,Me,ge,null):t.texImage2D(Z,ne,oe,Ce,le,0,Me,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),ee(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,Z,i.get(U).__webglTexture,0,W(S)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,Z,i.get(U).__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function be(b,S,U){if(n.bindRenderbuffer(n.RENDERBUFFER,b),S.depthBuffer&&!S.stencilBuffer){let H=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(U||ee(S)){const Z=S.depthTexture;Z&&Z.isDepthTexture&&(Z.type===kn?H=n.DEPTH_COMPONENT32F:Z.type===oi&&(H=n.DEPTH_COMPONENT24));const ne=W(S);ee(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,H,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,H,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,H,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(S.depthBuffer&&S.stencilBuffer){const H=W(S);U&&ee(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,H,n.DEPTH24_STENCIL8,S.width,S.height):ee(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,H,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const H=S.textures;for(let Z=0;Z<H.length;Z++){const ne=H[Z],Me=r.convert(ne.format,ne.colorSpace),ge=r.convert(ne.type),oe=T(ne.internalFormat,Me,ge,ne.colorSpace),ue=W(S);U&&ee(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,oe,S.width,S.height):ee(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,oe,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,oe,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qe(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const H=i.get(S.depthTexture).__webglTexture,Z=W(S);if(S.depthTexture.format===Fi)ee(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,H,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,H,0);else if(S.depthTexture.format===gs)ee(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,H,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,H,0);else throw new Error("Unknown depthTexture format")}function Ue(b){const S=i.get(b),U=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");qe(S.__webglFramebuffer,b)}else if(U){S.__webglDepthbuffer=[];for(let H=0;H<6;H++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[H]),S.__webglDepthbuffer[H]=n.createRenderbuffer(),be(S.__webglDepthbuffer[H],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),be(S.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function E(b,S,U){const H=i.get(b);S!==void 0&&Ae(H.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Ue(b)}function I(b){const S=b.texture,U=i.get(b),H=i.get(S);b.addEventListener("dispose",O);const Z=b.textures,ne=b.isWebGLCubeRenderTarget===!0,Me=Z.length>1,ge=f(b)||a;if(Me||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=S.version,o.memory.textures++),ne){U.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[oe]=[];for(let ue=0;ue<S.mipmaps.length;ue++)U.__webglFramebuffer[oe][ue]=n.createFramebuffer()}else U.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let oe=0;oe<S.mipmaps.length;oe++)U.__webglFramebuffer[oe]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(Me)if(s.drawBuffers)for(let oe=0,ue=Z.length;oe<ue;oe++){const Ce=i.get(Z[oe]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&ee(b)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let oe=0;oe<Z.length;oe++){const ue=Z[oe];U.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[oe]);const Ce=r.convert(ue.format,ue.colorSpace),le=r.convert(ue.type),et=T(ue.internalFormat,Ce,le,ue.colorSpace,b.isXRRenderTarget===!0),ze=W(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,et,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,U.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),be(U.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),te(n.TEXTURE_CUBE_MAP,S,ge);for(let oe=0;oe<6;oe++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)Ae(U.__webglFramebuffer[oe][ue],b,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ue);else Ae(U.__webglFramebuffer[oe],b,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);g(S,ge)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let oe=0,ue=Z.length;oe<ue;oe++){const Ce=Z[oe],le=i.get(Ce);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),te(n.TEXTURE_2D,Ce,ge),Ae(U.__webglFramebuffer,b,Ce,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),g(Ce,ge)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?oe=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,H.__webglTexture),te(oe,S,ge),a&&S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)Ae(U.__webglFramebuffer[ue],b,S,n.COLOR_ATTACHMENT0,oe,ue);else Ae(U.__webglFramebuffer,b,S,n.COLOR_ATTACHMENT0,oe,0);g(S,ge)&&v(oe),t.unbindTexture()}b.depthBuffer&&Ue(b)}function B(b){const S=f(b)||a,U=b.textures;for(let H=0,Z=U.length;H<Z;H++){const ne=U[H];if(g(ne,S)){const Me=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ge=i.get(ne).__webglTexture;t.bindTexture(Me,ge),v(Me),t.unbindTexture()}}}function Q(b){if(a&&b.samples>0&&ee(b)===!1){const S=b.textures,U=b.width,H=b.height;let Z=n.COLOR_BUFFER_BIT;const ne=[],Me=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(b),oe=S.length>1;if(oe)for(let ue=0;ue<S.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let ue=0;ue<S.length;ue++){ne.push(n.COLOR_ATTACHMENT0+ue),b.depthBuffer&&ne.push(Me);const Ce=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(Ce===!1&&(b.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),oe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[ue]),Ce===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Me])),oe){const le=i.get(S[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,U,H,0,0,U,H,Z,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let ue=0;ue<S.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,ge.__webglColorRenderbuffer[ue]);const Ce=i.get(S[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,Ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function W(b){return Math.min(s.maxSamples,b.samples)}function ee(b){const S=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function re(b){const S=o.render.frame;h.get(b)!==S&&(h.set(b,S),b.update())}function se(b,S){const U=b.colorSpace,H=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Po||U!==di&&U!==ri&&(Ze.getTransfer(U)===st?a===!1?e.has("EXT_sRGB")===!0&&H===cn?(b.format=Po,b.minFilter=kt,b.generateMipmaps=!1):S=Hh.sRGBToLinear(S):(H!==cn||Z!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),S}function ae(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=w,this.setTexture2D=q,this.setTexture2DArray=k,this.setTexture3D=K,this.setTextureCube=ie,this.rebindTextures=E,this.setupRenderTarget=I,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=ee}function eS(n,e,t){const i=t.isWebGL2;function s(r,o=ri){let a;const l=Ze.getTransfer(o);if(r===ui)return n.UNSIGNED_BYTE;if(r===Ih)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Dh)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Lg)return n.BYTE;if(r===Ig)return n.SHORT;if(r===Jo)return n.UNSIGNED_SHORT;if(r===Lh)return n.INT;if(r===oi)return n.UNSIGNED_INT;if(r===kn)return n.FLOAT;if(r===js)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Dg)return n.ALPHA;if(r===cn)return n.RGBA;if(r===Ug)return n.LUMINANCE;if(r===Ng)return n.LUMINANCE_ALPHA;if(r===Fi)return n.DEPTH_COMPONENT;if(r===gs)return n.DEPTH_STENCIL;if(r===Po)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Fg)return n.RED;if(r===Uh)return n.RED_INTEGER;if(r===Og)return n.RG;if(r===Nh)return n.RG_INTEGER;if(r===Fh)return n.RGBA_INTEGER;if(r===Ia||r===Da||r===Ua||r===Na)if(l===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ia)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ia)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Da)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ua)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Na)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kl||r===Zl||r===Jl||r===Ql)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Kl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ql)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Oh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ec||r===tc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ec)return l===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===tc)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===nc||r===ic||r===sc||r===rc||r===ac||r===oc||r===lc||r===cc||r===uc||r===hc||r===fc||r===dc||r===pc||r===mc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===nc)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ic)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===sc)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===rc)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ac)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===oc)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===lc)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===cc)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===uc)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hc)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===fc)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===dc)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===pc)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===mc)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fa||r===gc||r===_c)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Fa)return l===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_c)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Bg||r===vc||r===xc||r===Mc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Fa)return a.COMPRESSED_RED_RGTC1_EXT;if(r===vc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Mc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ni?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class tS extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Lr extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nS={type:"move"};class co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,i),f=this._getHandJoint(u,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),m=.02,_=.005;u.inputState.pinching&&d>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Lr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const iS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new zt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,s=new jn({extensions:{fragDepth:!0},vertexShader:iS,fragmentShader:sS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new bn(new sr(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class aS extends vs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,d=null,m=null,_=null;const x=new rS,p=t.getContextAttributes();let f=null,M=null;const g=[],v=[],T=new $e;let P=null;const A=new on;A.layers.enable(1),A.viewport=new Tt;const L=new on;L.layers.enable(2),L.viewport=new Tt;const O=[A,L],y=new tS;y.layers.enable(1),y.layers.enable(2);let R=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ce=g[te];return ce===void 0&&(ce=new co,g[te]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(te){let ce=g[te];return ce===void 0&&(ce=new co,g[te]=ce),ce.getGripSpace()},this.getHand=function(te){let ce=g[te];return ce===void 0&&(ce=new co,g[te]=ce),ce.getHandSpace()};function V(te){const ce=v.indexOf(te.inputSource);if(ce===-1)return;const xe=g[ce];xe!==void 0&&(xe.update(te.inputSource,te.frame,u||o),xe.dispatchEvent({type:te.type,data:te.inputSource}))}function w(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",w),s.removeEventListener("inputsourceschange",N);for(let te=0;te<g.length;te++){const ce=v[te];ce!==null&&(v[te]=null,g[te].disconnect(ce))}R=null,D=null,x.reset(),e.setRenderTarget(f),m=null,d=null,h=null,s=null,M=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(te){u=te},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",w),s.addEventListener("inputsourceschange",N),p.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ce={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Bi(m.framebufferWidth,m.framebufferHeight,{format:cn,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ce=null,xe=null,Re=null;p.depth&&(Re=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=p.stencil?gs:Fi,xe=p.stencil?Ni:oi);const Ae={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Ae),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Bi(d.textureWidth,d.textureHeight,{format:cn,type:ui,depthTexture:new ef(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const be=e.properties.get(M);be.__ignoreDepthValues=d.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await s.requestReferenceSpace(a),Ie.setContext(s),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function N(te){for(let ce=0;ce<te.removed.length;ce++){const xe=te.removed[ce],Re=v.indexOf(xe);Re>=0&&(v[Re]=null,g[Re].disconnect(xe))}for(let ce=0;ce<te.added.length;ce++){const xe=te.added[ce];let Re=v.indexOf(xe);if(Re===-1){for(let be=0;be<g.length;be++)if(be>=v.length){v.push(xe),Re=be;break}else if(v[be]===null){v[be]=xe,Re=be;break}if(Re===-1)break}const Ae=g[Re];Ae&&Ae.connect(xe)}}const z=new j,q=new j;function k(te,ce,xe){z.setFromMatrixPosition(ce.matrixWorld),q.setFromMatrixPosition(xe.matrixWorld);const Re=z.distanceTo(q),Ae=ce.projectionMatrix.elements,be=xe.projectionMatrix.elements,qe=Ae[14]/(Ae[10]-1),Ue=Ae[14]/(Ae[10]+1),E=(Ae[9]+1)/Ae[5],I=(Ae[9]-1)/Ae[5],B=(Ae[8]-1)/Ae[0],Q=(be[8]+1)/be[0],W=qe*B,ee=qe*Q,re=Re/(-B+Q),se=re*-B;ce.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(se),te.translateZ(re),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const ae=qe+re,b=Ue+re,S=W-se,U=ee+(Re-se),H=E*Ue/b*ae,Z=I*Ue/b*ae;te.projectionMatrix.makePerspective(S,U,H,Z,ae,b),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function K(te,ce){ce===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ce.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;x.texture!==null&&(te.near=x.depthNear,te.far=x.depthFar),y.near=L.near=A.near=te.near,y.far=L.far=A.far=te.far,(R!==y.near||D!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,D=y.far,A.near=R,A.far=D,L.near=R,L.far=D,A.updateProjectionMatrix(),L.updateProjectionMatrix(),te.updateProjectionMatrix());const ce=te.parent,xe=y.cameras;K(y,ce);for(let Re=0;Re<xe.length;Re++)K(xe[Re],ce);xe.length===2?k(y,A,L):y.projectionMatrix.copy(A.projectionMatrix),ie(te,y,ce)};function ie(te,ce,xe){xe===null?te.matrix.copy(ce.matrixWorld):(te.matrix.copy(xe.matrixWorld),te.matrix.invert(),te.matrix.multiply(ce.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Lo*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=te)},this.hasDepthSensing=function(){return x.texture!==null};let he=null;function me(te,ce){if(c=ce.getViewerPose(u||o),_=ce,c!==null){const xe=c.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Re=!1;xe.length!==y.cameras.length&&(y.cameras.length=0,Re=!0);for(let be=0;be<xe.length;be++){const qe=xe[be];let Ue=null;if(m!==null)Ue=m.getViewport(qe);else{const I=h.getViewSubImage(d,qe);Ue=I.viewport,be===0&&(e.setRenderTargetTextures(M,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(M))}let E=O[be];E===void 0&&(E=new on,E.layers.enable(be),E.viewport=new Tt,O[be]=E),E.matrix.fromArray(qe.transform.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale),E.projectionMatrix.fromArray(qe.projectionMatrix),E.projectionMatrixInverse.copy(E.projectionMatrix).invert(),E.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),be===0&&(y.matrix.copy(E.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Re===!0&&y.cameras.push(E)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const be=h.getDepthInformation(xe[0]);be&&be.isValid&&be.texture&&x.init(e,be,s.renderState)}}for(let xe=0;xe<g.length;xe++){const Re=v[xe],Ae=g[xe];Re!==null&&Ae!==void 0&&Ae.update(Re,ce,u||o)}x.render(e,y),he&&he(te,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),_=null}const Ie=new Jh;Ie.setAnimationLoop(me),this.setAnimationLoop=function(te){he=te},this.dispose=function(){}}}const Ti=new Yn,oS=new pt;function lS(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Yh(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,M,g,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),c(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,v)):f.isMeshMatcapMaterial?(r(p,f),_(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),x(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,M,g):f.isSpriteMaterial?u(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Wt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Wt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const M=e.get(f),g=M.envMap,v=M.envMapRotation;if(g&&(p.envMap.value=g,Ti.copy(v),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),p.envMapRotation.value.setFromMatrix4(oS.makeRotationFromEuler(Ti)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const T=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*T,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,M,g){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*M,p.scale.value=g*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,M){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Wt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){const M=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function cS(n,e,t,i){let s={},r={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,g){const v=g.program;i.uniformBlockBinding(M,v)}function u(M,g){let v=s[M.id];v===void 0&&(_(M),v=c(M),s[M.id]=v,M.addEventListener("dispose",p));const T=g.program;i.updateUBOMapping(M,T);const P=e.render.frame;r[M.id]!==P&&(d(M),r[M.id]=P)}function c(M){const g=h();M.__bindingPointIndex=g;const v=n.createBuffer(),T=M.__size,P=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,T,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,v),v}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const g=s[M.id],v=M.uniforms,T=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let P=0,A=v.length;P<A;P++){const L=Array.isArray(v[P])?v[P]:[v[P]];for(let O=0,y=L.length;O<y;O++){const R=L[O];if(m(R,P,O,T)===!0){const D=R.__offset,V=Array.isArray(R.value)?R.value:[R.value];let w=0;for(let N=0;N<V.length;N++){const z=V[N],q=x(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,D+w,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,w),w+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,g,v,T){const P=M.value,A=g+"_"+v;if(T[A]===void 0)return typeof P=="number"||typeof P=="boolean"?T[A]=P:T[A]=P.clone(),!0;{const L=T[A];if(typeof P=="number"||typeof P=="boolean"){if(L!==P)return T[A]=P,!0}else if(L.equals(P)===!1)return L.copy(P),!0}return!1}function _(M){const g=M.uniforms;let v=0;const T=16;for(let A=0,L=g.length;A<L;A++){const O=Array.isArray(g[A])?g[A]:[g[A]];for(let y=0,R=O.length;y<R;y++){const D=O[y],V=Array.isArray(D.value)?D.value:[D.value];for(let w=0,N=V.length;w<N;w++){const z=V[w],q=x(z),k=v%T;k!==0&&T-k<q.boundary&&(v+=T-k),D.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=q.storage}}}const P=v%T;return P>0&&(v+=T-P),M.__size=v,M.__cache={},this}function x(M){const g={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(g.boundary=4,g.storage=4):M.isVector2?(g.boundary=8,g.storage=8):M.isVector3||M.isColor?(g.boundary=16,g.storage=12):M.isVector4?(g.boundary=16,g.storage=16):M.isMatrix3?(g.boundary=48,g.storage=48):M.isMatrix4?(g.boundary=64,g.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),g}function p(M){const g=M.target;g.removeEventListener("dispose",p);const v=o.indexOf(g.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[g.id]),delete s[g.id],delete r[g.id]}function f(){for(const M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:u,dispose:f}}class of{constructor(e={}){const{canvas:t=Zg(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const f=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vn,this._useLegacyLights=!1,this.toneMapping=ci,this.toneMappingExposure=1;const g=this;let v=!1,T=0,P=0,A=null,L=-1,O=null;const y=new Tt,R=new Tt;let D=null;const V=new Je(0);let w=0,N=t.width,z=t.height,q=1,k=null,K=null;const ie=new Tt(0,0,N,z),he=new Tt(0,0,N,z);let me=!1;const Ie=new Zh;let te=!1,ce=!1,xe=null;const Re=new pt,Ae=new $e,be=new j,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return A===null?q:1}let E=i;function I(C,G){for(let Y=0;Y<C.length;Y++){const J=C[Y],X=t.getContext(J,G);if(X!==null)return X}return null}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zo}`),t.addEventListener("webglcontextlost",at,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",_e,!1),E===null){const G=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&G.shift(),E=I(G,C),E===null)throw I(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&E instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),E.getShaderPrecisionFormat===void 0&&(E.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let B,Q,W,ee,re,se,ae,b,S,U,H,Z,ne,Me,ge,oe,ue,Ce,le,et,ze,Ee,Se,Te;function We(){B=new mx(E),Q=new cx(E,B,e),B.init(Q),Ee=new eS(E,B,Q),W=new JM(E,B,Q),ee=new vx(E),re=new BM,se=new QM(E,B,W,re,Q,Ee,ee),ae=new hx(g),b=new px(g),S=new b_(E,Q),Se=new ox(E,B,S,Q),U=new gx(E,S,ee,Se),H=new yx(E,U,S,ee),le=new Sx(E,Q,se),oe=new ux(re),Z=new OM(g,ae,b,B,Q,Se,oe),ne=new lS(g,re),Me=new HM,ge=new qM(B,Q),Ce=new ax(g,ae,b,W,H,d,l),ue=new ZM(g,H,Q),Te=new cS(E,ee,Q,W),et=new lx(E,B,ee,Q),ze=new _x(E,B,ee,Q),ee.programs=Z.programs,g.capabilities=Q,g.extensions=B,g.properties=re,g.renderLists=Me,g.shadowMap=ue,g.state=W,g.info=ee}We();const Oe=new aS(g,E);this.xr=Oe,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const C=B.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=B.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(N,z,!1))},this.getSize=function(C){return C.set(N,z)},this.setSize=function(C,G,Y=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,z=G,t.width=Math.floor(C*q),t.height=Math.floor(G*q),Y===!0&&(t.style.width=C+"px",t.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(N*q,z*q).floor()},this.setDrawingBufferSize=function(C,G,Y){N=C,z=G,q=Y,t.width=Math.floor(C*Y),t.height=Math.floor(G*Y),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(y)},this.getViewport=function(C){return C.copy(ie)},this.setViewport=function(C,G,Y,J){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,G,Y,J),W.viewport(y.copy(ie).multiplyScalar(q).round())},this.getScissor=function(C){return C.copy(he)},this.setScissor=function(C,G,Y,J){C.isVector4?he.set(C.x,C.y,C.z,C.w):he.set(C,G,Y,J),W.scissor(R.copy(he).multiplyScalar(q).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(C){W.setScissorTest(me=C)},this.setOpaqueSort=function(C){k=C},this.setTransparentSort=function(C){K=C},this.getClearColor=function(C){return C.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(C=!0,G=!0,Y=!0){let J=0;if(C){let X=!1;if(A!==null){const ye=A.texture.format;X=ye===Fh||ye===Nh||ye===Uh}if(X){const ye=A.texture.type,we=ye===ui||ye===oi||ye===Jo||ye===Ni||ye===Ih||ye===Dh,Pe=Ce.getClearColor(),De=Ce.getClearAlpha(),Ve=Pe.r,Ne=Pe.g,Be=Pe.b;we?(m[0]=Ve,m[1]=Ne,m[2]=Be,m[3]=De,E.clearBufferuiv(E.COLOR,0,m)):(_[0]=Ve,_[1]=Ne,_[2]=Be,_[3]=De,E.clearBufferiv(E.COLOR,0,_))}else J|=E.COLOR_BUFFER_BIT}G&&(J|=E.DEPTH_BUFFER_BIT),Y&&(J|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",at,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Me.dispose(),ge.dispose(),re.dispose(),ae.dispose(),b.dispose(),H.dispose(),Se.dispose(),Te.dispose(),Z.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",Zt),Oe.removeEventListener("sessionend",nt),xe&&(xe.dispose(),xe=null),Lt.stop()};function at(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const C=ee.autoReset,G=ue.enabled,Y=ue.autoUpdate,J=ue.needsUpdate,X=ue.type;We(),ee.autoReset=C,ue.enabled=G,ue.autoUpdate=Y,ue.needsUpdate=J,ue.type=X}function _e(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function $(C){const G=C.target;G.removeEventListener("dispose",$),de(G)}function de(C){ve(C),re.remove(C)}function ve(C){const G=re.get(C).programs;G!==void 0&&(G.forEach(function(Y){Z.releaseProgram(Y)}),C.isShaderMaterial&&Z.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,Y,J,X,ye){G===null&&(G=qe);const we=X.isMesh&&X.matrixWorld.determinant()<0,Pe=cf(C,G,Y,J,X);W.setMaterial(J,we);let De=Y.index,Ve=1;if(J.wireframe===!0){if(De=U.getWireframeAttribute(Y),De===void 0)return;Ve=2}const Ne=Y.drawRange,Be=Y.attributes.position;let ut=Ne.start*Ve,Xt=(Ne.start+Ne.count)*Ve;ye!==null&&(ut=Math.max(ut,ye.start*Ve),Xt=Math.min(Xt,(ye.start+ye.count)*Ve)),De!==null?(ut=Math.max(ut,0),Xt=Math.min(Xt,De.count)):Be!=null&&(ut=Math.max(ut,0),Xt=Math.min(Xt,Be.count));const _t=Xt-ut;if(_t<0||_t===1/0)return;Se.setup(X,J,Pe,Y,De);let Cn,lt=et;if(De!==null&&(Cn=S.get(De),lt=ze,lt.setIndex(Cn)),X.isMesh)J.wireframe===!0?(W.setLineWidth(J.wireframeLinewidth*Ue()),lt.setMode(E.LINES)):lt.setMode(E.TRIANGLES);else if(X.isLine){let He=J.linewidth;He===void 0&&(He=1),W.setLineWidth(He*Ue()),X.isLineSegments?lt.setMode(E.LINES):X.isLineLoop?lt.setMode(E.LINE_LOOP):lt.setMode(E.LINE_STRIP)}else X.isPoints?lt.setMode(E.POINTS):X.isSprite&&lt.setMode(E.TRIANGLES);if(X.isBatchedMesh)lt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)lt.renderInstances(ut,_t,X.count);else if(Y.isInstancedBufferGeometry){const He=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ma=Math.min(Y.instanceCount,He);lt.renderInstances(ut,_t,ma)}else lt.render(ut,_t)};function Xe(C,G,Y){C.transparent===!0&&C.side===Gn&&C.forceSinglePass===!1?(C.side=Wt,C.needsUpdate=!0,ar(C,G,Y),C.side=fi,C.needsUpdate=!0,ar(C,G,Y),C.side=Gn):ar(C,G,Y)}this.compile=function(C,G,Y=null){Y===null&&(Y=C),p=ge.get(Y),p.init(),M.push(p),Y.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),C!==Y&&C.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights(g._useLegacyLights);const J=new Set;return C.traverse(function(X){const ye=X.material;if(ye)if(Array.isArray(ye))for(let we=0;we<ye.length;we++){const Pe=ye[we];Xe(Pe,Y,X),J.add(Pe)}else Xe(ye,Y,X),J.add(ye)}),M.pop(),p=null,J},this.compileAsync=function(C,G,Y=null){const J=this.compile(C,G,Y);return new Promise(X=>{function ye(){if(J.forEach(function(we){re.get(we).currentProgram.isReady()&&J.delete(we)}),J.size===0){X(C);return}setTimeout(ye,10)}B.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let tt=null;function yt(C){tt&&tt(C)}function Zt(){Lt.stop()}function nt(){Lt.start()}const Lt=new Jh;Lt.setAnimationLoop(yt),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(C){tt=C,Oe.setAnimationLoop(C),C===null?Lt.stop():Lt.start()},Oe.addEventListener("sessionstart",Zt),Oe.addEventListener("sessionend",nt),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(G),G=Oe.getCamera()),C.isScene===!0&&C.onBeforeRender(g,C,G,A),p=ge.get(C,M.length),p.init(),M.push(p),Re.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ie.setFromProjectionMatrix(Re),ce=this.localClippingEnabled,te=oe.init(this.clippingPlanes,ce),x=Me.get(C,f.length),x.init(),f.push(x),pn(C,G,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(k,K),this.info.render.frame++,te===!0&&oe.beginShadows();const Y=p.state.shadowsArray;if(ue.render(Y,C,G),te===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1)&&Ce.render(x,C),p.setupLights(g._useLegacyLights),G.isArrayCamera){const J=G.cameras;for(let X=0,ye=J.length;X<ye;X++){const we=J[X];nl(x,C,we,we.viewport)}}else nl(x,C,G);A!==null&&(se.updateMultisampleRenderTarget(A),se.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(g,C,G),Se.resetDefaultState(),L=-1,O=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function pn(C,G,Y,J){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)Y=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ie.intersectsSprite(C)){J&&be.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Re);const we=H.update(C),Pe=C.material;Pe.visible&&x.push(C,we,Pe,Y,be.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ie.intersectsObject(C))){const we=H.update(C),Pe=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),be.copy(C.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),be.copy(we.boundingSphere.center)),be.applyMatrix4(C.matrixWorld).applyMatrix4(Re)),Array.isArray(Pe)){const De=we.groups;for(let Ve=0,Ne=De.length;Ve<Ne;Ve++){const Be=De[Ve],ut=Pe[Be.materialIndex];ut&&ut.visible&&x.push(C,we,ut,Y,be.z,Be)}}else Pe.visible&&x.push(C,we,Pe,Y,be.z,null)}}const ye=C.children;for(let we=0,Pe=ye.length;we<Pe;we++)pn(ye[we],G,Y,J)}function nl(C,G,Y,J){const X=C.opaque,ye=C.transmissive,we=C.transparent;p.setupLightsView(Y),te===!0&&oe.setGlobalState(g.clippingPlanes,Y),ye.length>0&&lf(X,ye,G,Y),J&&W.viewport(y.copy(J)),X.length>0&&rr(X,G,Y),ye.length>0&&rr(ye,G,Y),we.length>0&&rr(we,G,Y),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function lf(C,G,Y,J){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const ye=Q.isWebGL2;xe===null&&(xe=new Bi(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")?js:ui,minFilter:Ii,samples:ye?4:0})),g.getDrawingBufferSize(Ae),ye?xe.setSize(Ae.x,Ae.y):xe.setSize(Io(Ae.x),Io(Ae.y));const we=g.getRenderTarget();g.setRenderTarget(xe),g.getClearColor(V),w=g.getClearAlpha(),w<1&&g.setClearColor(16777215,.5),g.clear();const Pe=g.toneMapping;g.toneMapping=ci,rr(C,Y,J),se.updateMultisampleRenderTarget(xe),se.updateRenderTargetMipmap(xe);let De=!1;for(let Ve=0,Ne=G.length;Ve<Ne;Ve++){const Be=G[Ve],ut=Be.object,Xt=Be.geometry,_t=Be.material,Cn=Be.group;if(_t.side===Gn&&ut.layers.test(J.layers)){const lt=_t.side;_t.side=Wt,_t.needsUpdate=!0,il(ut,Y,J,Xt,_t,Cn),_t.side=lt,_t.needsUpdate=!0,De=!0}}De===!0&&(se.updateMultisampleRenderTarget(xe),se.updateRenderTargetMipmap(xe)),g.setRenderTarget(we),g.setClearColor(V,w),g.toneMapping=Pe}function rr(C,G,Y){const J=G.isScene===!0?G.overrideMaterial:null;for(let X=0,ye=C.length;X<ye;X++){const we=C[X],Pe=we.object,De=we.geometry,Ve=J===null?we.material:J,Ne=we.group;Pe.layers.test(Y.layers)&&il(Pe,G,Y,De,Ve,Ne)}}function il(C,G,Y,J,X,ye){C.onBeforeRender(g,G,Y,J,X,ye),C.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(g,G,Y,J,C,ye),X.transparent===!0&&X.side===Gn&&X.forceSinglePass===!1?(X.side=Wt,X.needsUpdate=!0,g.renderBufferDirect(Y,G,J,X,C,ye),X.side=fi,X.needsUpdate=!0,g.renderBufferDirect(Y,G,J,X,C,ye),X.side=Gn):g.renderBufferDirect(Y,G,J,X,C,ye),C.onAfterRender(g,G,Y,J,X,ye)}function ar(C,G,Y){G.isScene!==!0&&(G=qe);const J=re.get(C),X=p.state.lights,ye=p.state.shadowsArray,we=X.state.version,Pe=Z.getParameters(C,X.state,ye,G,Y),De=Z.getProgramCacheKey(Pe);let Ve=J.programs;J.environment=C.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(C.isMeshStandardMaterial?b:ae).get(C.envMap||J.environment),J.envMapRotation=J.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,Ve===void 0&&(C.addEventListener("dispose",$),Ve=new Map,J.programs=Ve);let Ne=Ve.get(De);if(Ne!==void 0){if(J.currentProgram===Ne&&J.lightsStateVersion===we)return rl(C,Pe),Ne}else Pe.uniforms=Z.getUniforms(C),C.onBuild(Y,Pe,g),C.onBeforeCompile(Pe,g),Ne=Z.acquireProgram(Pe,De),Ve.set(De,Ne),J.uniforms=Pe.uniforms;const Be=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Be.clippingPlanes=oe.uniform),rl(C,Pe),J.needsLights=hf(C),J.lightsStateVersion=we,J.needsLights&&(Be.ambientLightColor.value=X.state.ambient,Be.lightProbe.value=X.state.probe,Be.directionalLights.value=X.state.directional,Be.directionalLightShadows.value=X.state.directionalShadow,Be.spotLights.value=X.state.spot,Be.spotLightShadows.value=X.state.spotShadow,Be.rectAreaLights.value=X.state.rectArea,Be.ltc_1.value=X.state.rectAreaLTC1,Be.ltc_2.value=X.state.rectAreaLTC2,Be.pointLights.value=X.state.point,Be.pointLightShadows.value=X.state.pointShadow,Be.hemisphereLights.value=X.state.hemi,Be.directionalShadowMap.value=X.state.directionalShadowMap,Be.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Be.spotShadowMap.value=X.state.spotShadowMap,Be.spotLightMatrix.value=X.state.spotLightMatrix,Be.spotLightMap.value=X.state.spotLightMap,Be.pointShadowMap.value=X.state.pointShadowMap,Be.pointShadowMatrix.value=X.state.pointShadowMatrix),J.currentProgram=Ne,J.uniformsList=null,Ne}function sl(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=Or.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function rl(C,G){const Y=re.get(C);Y.outputColorSpace=G.outputColorSpace,Y.batching=G.batching,Y.instancing=G.instancing,Y.instancingColor=G.instancingColor,Y.instancingMorph=G.instancingMorph,Y.skinning=G.skinning,Y.morphTargets=G.morphTargets,Y.morphNormals=G.morphNormals,Y.morphColors=G.morphColors,Y.morphTargetsCount=G.morphTargetsCount,Y.numClippingPlanes=G.numClippingPlanes,Y.numIntersection=G.numClipIntersection,Y.vertexAlphas=G.vertexAlphas,Y.vertexTangents=G.vertexTangents,Y.toneMapping=G.toneMapping}function cf(C,G,Y,J,X){G.isScene!==!0&&(G=qe),se.resetTextureUnits();const ye=G.fog,we=J.isMeshStandardMaterial?G.environment:null,Pe=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:di,De=(J.isMeshStandardMaterial?b:ae).get(J.envMap||we),Ve=J.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ne=!!Y.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Be=!!Y.morphAttributes.position,ut=!!Y.morphAttributes.normal,Xt=!!Y.morphAttributes.color;let _t=ci;J.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(_t=g.toneMapping);const Cn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,lt=Cn!==void 0?Cn.length:0,He=re.get(J),ma=p.state.lights;if(te===!0&&(ce===!0||C!==O)){const Jt=C===O&&J.id===L;oe.setState(J,C,Jt)}let ot=!1;J.version===He.__version?(He.needsLights&&He.lightsStateVersion!==ma.state.version||He.outputColorSpace!==Pe||X.isBatchedMesh&&He.batching===!1||!X.isBatchedMesh&&He.batching===!0||X.isInstancedMesh&&He.instancing===!1||!X.isInstancedMesh&&He.instancing===!0||X.isSkinnedMesh&&He.skinning===!1||!X.isSkinnedMesh&&He.skinning===!0||X.isInstancedMesh&&He.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&He.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&He.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&He.instancingMorph===!1&&X.morphTexture!==null||He.envMap!==De||J.fog===!0&&He.fog!==ye||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==oe.numPlanes||He.numIntersection!==oe.numIntersection)||He.vertexAlphas!==Ve||He.vertexTangents!==Ne||He.morphTargets!==Be||He.morphNormals!==ut||He.morphColors!==Xt||He.toneMapping!==_t||Q.isWebGL2===!0&&He.morphTargetsCount!==lt)&&(ot=!0):(ot=!0,He.__version=J.version);let pi=He.currentProgram;ot===!0&&(pi=ar(J,G,X));let al=!1,Ms=!1,ga=!1;const At=pi.getUniforms(),mi=He.uniforms;if(W.useProgram(pi.program)&&(al=!0,Ms=!0,ga=!0),J.id!==L&&(L=J.id,Ms=!0),al||O!==C){At.setValue(E,"projectionMatrix",C.projectionMatrix),At.setValue(E,"viewMatrix",C.matrixWorldInverse);const Jt=At.map.cameraPosition;Jt!==void 0&&Jt.setValue(E,be.setFromMatrixPosition(C.matrixWorld)),Q.logarithmicDepthBuffer&&At.setValue(E,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&At.setValue(E,"isOrthographic",C.isOrthographicCamera===!0),O!==C&&(O=C,Ms=!0,ga=!0)}if(X.isSkinnedMesh){At.setOptional(E,X,"bindMatrix"),At.setOptional(E,X,"bindMatrixInverse");const Jt=X.skeleton;Jt&&(Q.floatVertexTextures?(Jt.boneTexture===null&&Jt.computeBoneTexture(),At.setValue(E,"boneTexture",Jt.boneTexture,se)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(At.setOptional(E,X,"batchingTexture"),At.setValue(E,"batchingTexture",X._matricesTexture,se));const _a=Y.morphAttributes;if((_a.position!==void 0||_a.normal!==void 0||_a.color!==void 0&&Q.isWebGL2===!0)&&le.update(X,Y,pi),(Ms||He.receiveShadow!==X.receiveShadow)&&(He.receiveShadow=X.receiveShadow,At.setValue(E,"receiveShadow",X.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(mi.envMap.value=De,mi.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Ms&&(At.setValue(E,"toneMappingExposure",g.toneMappingExposure),He.needsLights&&uf(mi,ga),ye&&J.fog===!0&&ne.refreshFogUniforms(mi,ye),ne.refreshMaterialUniforms(mi,J,q,z,xe),Or.upload(E,sl(He),mi,se)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Or.upload(E,sl(He),mi,se),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&At.setValue(E,"center",X.center),At.setValue(E,"modelViewMatrix",X.modelViewMatrix),At.setValue(E,"normalMatrix",X.normalMatrix),At.setValue(E,"modelMatrix",X.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Jt=J.uniformsGroups;for(let va=0,ff=Jt.length;va<ff;va++)if(Q.isWebGL2){const ol=Jt[va];Te.update(ol,pi),Te.bind(ol,pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pi}function uf(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function hf(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,G,Y){re.get(C.texture).__webglTexture=G,re.get(C.depthTexture).__webglTexture=Y;const J=re.get(C);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Y===void 0,J.__autoAllocateDepthBuffer||B.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,G){const Y=re.get(C);Y.__webglFramebuffer=G,Y.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,Y=0){A=C,T=G,P=Y;let J=!0,X=null,ye=!1,we=!1;if(C){const De=re.get(C);De.__useDefaultFramebuffer!==void 0?(W.bindFramebuffer(E.FRAMEBUFFER,null),J=!1):De.__webglFramebuffer===void 0?se.setupRenderTarget(C):De.__hasExternalTextures&&se.rebindTextures(C,re.get(C.texture).__webglTexture,re.get(C.depthTexture).__webglTexture);const Ve=C.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(we=!0);const Ne=re.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ne[G])?X=Ne[G][Y]:X=Ne[G],ye=!0):Q.isWebGL2&&C.samples>0&&se.useMultisampledRTT(C)===!1?X=re.get(C).__webglMultisampledFramebuffer:Array.isArray(Ne)?X=Ne[Y]:X=Ne,y.copy(C.viewport),R.copy(C.scissor),D=C.scissorTest}else y.copy(ie).multiplyScalar(q).floor(),R.copy(he).multiplyScalar(q).floor(),D=me;if(W.bindFramebuffer(E.FRAMEBUFFER,X)&&Q.drawBuffers&&J&&W.drawBuffers(C,X),W.viewport(y),W.scissor(R),W.setScissorTest(D),ye){const De=re.get(C.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+G,De.__webglTexture,Y)}else if(we){const De=re.get(C.texture),Ve=G||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,De.__webglTexture,Y||0,Ve)}L=-1},this.readRenderTargetPixels=function(C,G,Y,J,X,ye,we){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=re.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){W.bindFramebuffer(E.FRAMEBUFFER,Pe);try{const De=C.texture,Ve=De.format,Ne=De.type;if(Ve!==cn&&Ee.convert(Ve)!==E.getParameter(E.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Ne===js&&(B.has("EXT_color_buffer_half_float")||Q.isWebGL2&&B.has("EXT_color_buffer_float"));if(Ne!==ui&&Ee.convert(Ne)!==E.getParameter(E.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===kn&&(Q.isWebGL2||B.has("OES_texture_float")||B.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-J&&Y>=0&&Y<=C.height-X&&E.readPixels(G,Y,J,X,Ee.convert(Ve),Ee.convert(Ne),ye)}finally{const De=A!==null?re.get(A).__webglFramebuffer:null;W.bindFramebuffer(E.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(C,G,Y=0){const J=Math.pow(2,-Y),X=Math.floor(G.image.width*J),ye=Math.floor(G.image.height*J);se.setTexture2D(G,0),E.copyTexSubImage2D(E.TEXTURE_2D,Y,0,0,C.x,C.y,X,ye),W.unbindTexture()},this.copyTextureToTexture=function(C,G,Y,J=0){const X=G.image.width,ye=G.image.height,we=Ee.convert(Y.format),Pe=Ee.convert(Y.type);se.setTexture2D(Y,0),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,Y.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,Y.unpackAlignment),G.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,J,C.x,C.y,X,ye,we,Pe,G.image.data):G.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,J,C.x,C.y,G.mipmaps[0].width,G.mipmaps[0].height,we,G.mipmaps[0].data):E.texSubImage2D(E.TEXTURE_2D,J,C.x,C.y,we,Pe,G.image),J===0&&Y.generateMipmaps&&E.generateMipmap(E.TEXTURE_2D),W.unbindTexture()},this.copyTextureToTexture3D=function(C,G,Y,J,X=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=Math.round(C.max.x-C.min.x),we=Math.round(C.max.y-C.min.y),Pe=C.max.z-C.min.z+1,De=Ee.convert(J.format),Ve=Ee.convert(J.type);let Ne;if(J.isData3DTexture)se.setTexture3D(J,0),Ne=E.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)se.setTexture2DArray(J,0),Ne=E.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,J.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,J.unpackAlignment);const Be=E.getParameter(E.UNPACK_ROW_LENGTH),ut=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Xt=E.getParameter(E.UNPACK_SKIP_PIXELS),_t=E.getParameter(E.UNPACK_SKIP_ROWS),Cn=E.getParameter(E.UNPACK_SKIP_IMAGES),lt=Y.isCompressedTexture?Y.mipmaps[X]:Y.image;E.pixelStorei(E.UNPACK_ROW_LENGTH,lt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,lt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,C.min.x),E.pixelStorei(E.UNPACK_SKIP_ROWS,C.min.y),E.pixelStorei(E.UNPACK_SKIP_IMAGES,C.min.z),Y.isDataTexture||Y.isData3DTexture?E.texSubImage3D(Ne,X,G.x,G.y,G.z,ye,we,Pe,De,Ve,lt.data):J.isCompressedArrayTexture?E.compressedTexSubImage3D(Ne,X,G.x,G.y,G.z,ye,we,Pe,De,lt.data):E.texSubImage3D(Ne,X,G.x,G.y,G.z,ye,we,Pe,De,Ve,lt),E.pixelStorei(E.UNPACK_ROW_LENGTH,Be),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ut),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Xt),E.pixelStorei(E.UNPACK_SKIP_ROWS,_t),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Cn),X===0&&J.generateMipmaps&&E.generateMipmap(Ne),W.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?se.setTextureCube(C,0):C.isData3DTexture?se.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?se.setTexture2DArray(C,0):se.setTexture2D(C,0),W.unbindTexture()},this.resetState=function(){T=0,P=0,A=null,W.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Qo?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===fa?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class uS extends of{}uS.prototype.isWebGL1Renderer=!0;class hS extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zo);class fS{constructor(e,t){this.effectCanvas=e,this.originalCanvas=t,this.renderer=null,this.scene=null,this.camera=null,this.material=null,this.texture=null,this.mesh=null,this.params={horizontalChromatic:70,distortion:50,speed:60,size:60,blur:60},this.time=0,this.animationId=null,this.currentImage=null,this.compareMode=!1}init(){this.scene=new hS,this.camera=new Qh(-1,1,1,-1,0,1),this.renderer=new of({canvas:this.effectCanvas,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.createMaterial();const e=new sr(2,2);this.mesh=new bn(e,this.material),this.scene.add(this.mesh),this.animate(),window.addEventListener("resize",()=>this.handleResize())}createMaterial(){this.material=new jn({uniforms:{uTexture:{value:null},uTime:{value:0},uHorizontalChromatic:{value:.7},uDistortion:{value:.5},uSpeed:{value:.6},uSize:{value:.6},uBlur:{value:.6},uResolution:{value:new $e(1,1)},uTextureResolution:{value:new $e(1,1)}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D uTexture;
        uniform float uTime;
        uniform float uHorizontalChromatic;
        uniform float uDistortion;
        uniform float uSpeed;
        uniform float uSize;
        uniform float uBlur;
        uniform vec2 uResolution;
        uniform vec2 uTextureResolution;
        
        varying vec2 vUv;
        
        // 简单的噪声函数
        float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
        }
        
        // 波形扭曲
        vec2 waveDistortion(vec2 uv, float time) {
          float waveFreq = uSize * 10.0 + 1.0;
          float waveAmp = uDistortion * 0.1;
          float waveSpeed = uSpeed * 0.05;
          
          // 多层波形叠加
          float wave1 = sin(uv.y * waveFreq + time * waveSpeed) * waveAmp;
          float wave2 = sin(uv.x * waveFreq * 0.7 + time * waveSpeed * 1.3) * waveAmp * 0.5;
          float wave3 = sin((uv.x + uv.y) * waveFreq * 0.5 + time * waveSpeed * 0.8) * waveAmp * 0.3;
          
          uv.x += wave1 + wave3;
          uv.y += wave2 + wave3;
          
          return uv;
        }
        
        // 高斯模糊采样
        vec4 gaussianBlur(sampler2D tex, vec2 uv, float intensity) {
          if (intensity < 0.01) {
            return texture2D(tex, uv);
          }
          
          vec4 color = vec4(0.0);
          float total = 0.0;
          float blurSize = intensity * 0.01;
          
          // 9点采样
          for (float x = -1.0; x <= 1.0; x += 1.0) {
            for (float y = -1.0; y <= 1.0; y += 1.0) {
              vec2 offset = vec2(x, y) * blurSize;
              float weight = exp(-(x*x + y*y) / 2.0);
              color += texture2D(tex, uv + offset) * weight;
              total += weight;
            }
          }
          
          return color / total;
        }
        
        void main() {
          vec2 uv = vUv;
          
          // 应用波形扭曲
          vec2 distortedUV = waveDistortion(uv, uTime);
          
          // 色差效果
          float chromatic = uHorizontalChromatic * 0.02;
          
          vec2 uvR = distortedUV + vec2(chromatic, 0.0);
          vec2 uvG = distortedUV;
          vec2 uvB = distortedUV - vec2(chromatic, 0.0);
          
          // 分别采样 RGB 通道
          float r = gaussianBlur(uTexture, uvR, uBlur).r;
          float g = gaussianBlur(uTexture, uvG, uBlur).g;
          float b = gaussianBlur(uTexture, uvB, uBlur).b;
          
          vec4 finalColor = vec4(r, g, b, 1.0);
          
          // 边缘处理
          if (distortedUV.x < 0.0 || distortedUV.x > 1.0 || 
              distortedUV.y < 0.0 || distortedUV.y > 1.0) {
            finalColor = vec4(0.0);
          }
          
          gl_FragColor = finalColor;
        }
      `})}loadImage(e){this.currentImage=e,this.texture&&this.texture.dispose(),this.texture=new zt(e),this.texture.needsUpdate=!0,this.material.uniforms.uTexture.value=this.texture,this.material.uniforms.uTextureResolution.value.set(e.width,e.height),this.updateCanvasSize(e.width,e.height),this.compareMode&&this.originalCanvas&&this.drawOriginalImage(e)}drawOriginalImage(e){if(!this.originalCanvas)return;const t=this.originalCanvas.getContext("2d");this.originalCanvas.width=e.width,this.originalCanvas.height=e.height,t.drawImage(e,0,0)}updateCanvasSize(e,t){const i=this.effectCanvas.parentElement;if(!i)return;const s=i.clientWidth-48,r=i.clientHeight-48,o=Math.min(s/e,r/t,1),a=Math.floor(e*o),l=Math.floor(t*o);this.effectCanvas.style.width=`${a}px`,this.effectCanvas.style.height=`${l}px`,this.renderer.setSize(e,t,!1),this.material.uniforms.uResolution.value.set(e,t),this.compareMode&&this.originalCanvas&&(this.originalCanvas.style.width=`${a}px`,this.originalCanvas.style.height=`${l}px`)}updateParams(e){this.params={...e},this.material.uniforms.uHorizontalChromatic.value=e.horizontalChromatic/100,this.material.uniforms.uDistortion.value=e.distortion/100,this.material.uniforms.uSpeed.value=e.speed/100,this.material.uniforms.uSize.value=e.size/100,this.material.uniforms.uBlur.value=e.blur/100}setCompareMode(e){this.compareMode=e,e&&this.currentImage&&this.originalCanvas&&(this.drawOriginalImage(this.currentImage),this.updateCanvasSize(this.currentImage.width,this.currentImage.height))}animate(){this.animationId=requestAnimationFrame(()=>this.animate()),this.time+=.016,this.material.uniforms.uTime.value=this.time,this.renderer.render(this.scene,this.camera)}handleResize(){this.currentImage&&this.updateCanvasSize(this.currentImage.width,this.currentImage.height)}dispose(){this.animationId&&cancelAnimationFrame(this.animationId),this.texture&&this.texture.dispose(),this.material&&this.material.dispose(),this.renderer&&this.renderer.dispose(),window.removeEventListener("resize",()=>this.handleResize())}}class rt{constructor(e){this.canvas=e,this.ctx=e.getContext("2d"),this.sourceImage=null,this.params={},this.animFrame=null,this.isAnimating=!1}loadImage(e){this.sourceImage=e,this.canvas.width=e.naturalWidth||e.width,this.canvas.height=e.naturalHeight||e.height,this.render()}updateParams(e){this.params={...this.params,...e},this.render()}render(){this.sourceImage&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.sourceImage,0,0,this.canvas.width,this.canvas.height),this.apply())}apply(){}destroy(){this.animFrame&&cancelAnimationFrame(this.animFrame)}getAvgColor(e,t,i,s,r,o,a){let l=0,u=0,c=0,h=0,d=0;const m=Math.max(0,Math.floor(t)),_=Math.max(0,Math.floor(i)),x=Math.min(o-1,Math.floor(t+s)),p=Math.min(a-1,Math.floor(i+r));for(let f=_;f<=p;f++)for(let M=m;M<=x;M++){const g=(f*o+M)*4;l+=e[g],u+=e[g+1],c+=e[g+2],h+=e[g+3],d++}return d===0?[0,0,0,255]:[l/d,u/d,c/d,h/d]}}class dS extends rt{constructor(e){super(e),this.params={intensity:50}}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,s=t.width,r=t.height,o=Math.max(2,Math.round(this.params.intensity/100*60)+2),a=document.createElement("canvas");a.width=s,a.height=r;const l=a.getContext("2d");l.drawImage(i,0,0,s,r);const u=l.getImageData(0,0,s,r).data;e.clearRect(0,0,s,r);for(let c=0;c<r;c+=o)for(let h=0;h<s;h+=o){const[d,m,_,x]=this.getAvgColor(u,h,c,o-1,o-1,s,r);e.fillStyle=`rgba(${d|0},${m|0},${_|0},${x/255})`,e.fillRect(h,c,o,o)}}}class pS extends rt{constructor(e){super(e),this.params={intensity:50}}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,s=t.width,r=t.height,o=Math.max(4,Math.round(this.params.intensity/100*80)+4),a=Math.round(this.params.intensity/100*3)+1;e.clearRect(0,0,s,r);const l=document.createElement("canvas"),u=Math.max(4,o);l.width=Math.max(1,Math.ceil(s/u)),l.height=Math.max(1,Math.ceil(r/u));const c=l.getContext("2d");c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high",c.drawImage(i,0,0,l.width,l.height),e.imageSmoothingEnabled=!0,e.imageSmoothingQuality="high",e.drawImage(l,0,0,s,r),e.filter=`blur(${a*2}px)`,e.globalAlpha=.3,e.drawImage(i,0,0,s,r),e.filter="none",e.globalAlpha=1}}class mS extends rt{constructor(e){super(e),this.params={intensity:50}}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,s=t.width,r=t.height,o=Math.max(4,Math.round(this.params.intensity/100*56)+8),a=document.createElement("canvas");a.width=s,a.height=r;const l=a.getContext("2d");l.drawImage(i,0,0,s,r);const u=l.getImageData(0,0,s,r).data;e.clearRect(0,0,s,r);for(let c=0;c<r;c+=o)for(let h=0;h<s;h+=o){const[d,m,_]=this.getAvgColor(u,h,c,o-1,o-1,s,r),x=d|0,p=m|0,f=_|0;e.fillStyle=`rgb(${x},${p},${f})`,e.fillRect(h,c,o,o),e.fillStyle="rgba(0,0,0,0.35)",e.fillRect(h+o-2,c,2,o),e.fillRect(h,c+o-2,o,2),e.fillStyle="rgba(255,255,255,0.2)",e.fillRect(h,c,o-2,2),e.fillRect(h,c,2,o-2);const M=h+o/2,g=c+o/2,v=o*.28,T=e.createRadialGradient(M-v*.3,g-v*.3,v*.1,M,g,v);T.addColorStop(0,"rgba(255,255,255,0.5)"),T.addColorStop(.5,`rgba(${x},${p},${f},0.9)`),T.addColorStop(1,"rgba(0,0,0,0.3)"),e.beginPath(),e.arc(M,g,v,0,Math.PI*2),e.fillStyle=T,e.fill()}}}class gS extends rt{constructor(e){super(e),this.params={intensity:50},this._cachedSeeds=null,this._cachedSize=-1}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,s=t.width,r=t.height,o=Math.max(8,Math.round(this.params.intensity/100*60)+8),a=document.createElement("canvas");a.width=s,a.height=r;const l=a.getContext("2d");l.drawImage(i,0,0,s,r);const u=l.getImageData(0,0,s,r).data;this._cachedSize!==o&&(this._cachedSeeds=this._genSeeds(s,r,o),this._cachedSize=o);const c=this._cachedSeeds,h=c.map(([d,m])=>{const[_,x,p]=this.getAvgColor(u,d-o/2,m-o/2,o,o,s,r);return[_|0,x|0,p|0]});e.clearRect(0,0,s,r),this._drawVoronoi(e,c,h,s,r,o)}_genSeeds(e,t,i){const s=[],r=Math.ceil(e/i)+1,o=Math.ceil(t/i)+1;for(let a=0;a<o;a++)for(let l=0;l<r;l++){const u=i*.7,c=l*i+(this._hash(l,a,0)-.5)*u,h=a*i+(this._hash(l,a,1)-.5)*u;s.push([c,h])}return s}_hash(e,t,i){let s=Math.sin(e*127.1+t*311.7+i*74.3)*43758.5453;return s-Math.floor(s)}_drawVoronoi(e,t,i,s,r,o){const a=document.createElement("canvas");a.width=s,a.height=r;const l=a.getContext("2d"),u=l.createImageData(s,r),c=u.data;for(let p=0;p<r;p++)for(let f=0;f<s;f++){let M=1/0,g=0;const v=Math.round(f/o),T=Math.round(p/o);for(let y=-2;y<=2;y++)for(let R=-2;R<=2;R++){const D=v+R,V=T+y;if(D<0||V<0||D>=Math.ceil(s/o)+1||V>=Math.ceil(r/o)+1)continue;const w=V*(Math.ceil(s/o)+1)+D;if(w<0||w>=t.length)continue;const[N,z]=t[w],q=(f-N)**2+(p-z)**2;q<M&&(M=q,g=w)}const[P,A,L]=i[g],O=(p*s+f)*4;c[O]=P,c[O+1]=A,c[O+2]=L,c[O+3]=255}l.putImageData(u,0,0),e.drawImage(a,0,0);const h=l.getImageData(0,0,s,r).data,d=document.createElement("canvas");d.width=s,d.height=r;const m=d.getContext("2d"),_=m.createImageData(s,r),x=_.data;for(let p=1;p<r-1;p++)for(let f=1;f<s-1;f++){const M=(p*s+f)*4,g=(p*s+f+1)*4,v=((p+1)*s+f)*4;(h[M]!==h[g]||h[M+1]!==h[g+1]||h[M]!==h[v]||h[M+1]!==h[v+1])&&(x[M]=255,x[M+1]=255,x[M+2]=255,x[M+3]=200)}m.putImageData(_,0,0),e.drawImage(d,0,0)}}class _S extends rt{constructor(e){super(e),this.params={intensity:50},this._seeds=null,this._cachedSize=-1}_hash(e,t,i){let s=Math.sin(e*127.1+t*311.7+i*74.3)*43758.5453;return s-Math.floor(s)}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,s=t.width,r=t.height,o=Math.max(6,Math.round(this.params.intensity/100*50)+6),a=document.createElement("canvas");a.width=s,a.height=r;const l=a.getContext("2d");l.drawImage(i,0,0,s,r);const u=l.getImageData(0,0,s,r).data;if(this._cachedSize!==o){this._seeds=[];const c=Math.ceil(s/o)+1,h=Math.ceil(r/o)+1;for(let d=0;d<h;d++)for(let m=0;m<c;m++){const _=o*.65,x=m*o+(this._hash(m,d,0)-.5)*_,p=d*o+(this._hash(m,d,1)-.5)*_,f=o*(.35+this._hash(m,d,2)*.3);this._seeds.push({x,y:p,r:f})}this._cachedSize=o}e.fillStyle="#000",e.fillRect(0,0,s,r);for(const c of this._seeds){const[h,d,m]=this.getAvgColor(u,c.x-c.r,c.y-c.r,c.r*2,c.r*2,s,r),[_,x,p]=this._boostSat(h,d,m,1.5);e.beginPath(),e.arc(c.x,c.y,c.r,0,Math.PI*2),e.fillStyle=`rgb(${_|0},${x|0},${p|0})`,e.fill()}}_boostSat(e,t,i,s){const r=Math.max(e,t,i),o=Math.min(e,t,i),a=(r+o)/2;return[Math.min(255,Math.max(0,a+(e-a)*s)),Math.min(255,Math.max(0,a+(t-a)*s)),Math.min(255,Math.max(0,a+(i-a)*s))]}}class vS extends rt{constructor(e){super(e),this.params={intensity:50},this._cachedSize=-1,this._triangles=null}_hash(e,t,i){let s=Math.sin(e*127.1+t*311.7+i*74.3)*43758.5453;return s-Math.floor(s)}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,s=t.width,r=t.height,o=Math.max(8,Math.round(this.params.intensity/100*60)+10),a=document.createElement("canvas");a.width=s,a.height=r;const l=a.getContext("2d");l.drawImage(i,0,0,s,r);const u=l.getImageData(0,0,s,r).data;this._cachedSize!==o&&(this._triangles=this._genTriangles(s,r,o),this._cachedSize=o),e.clearRect(0,0,s,r);for(const c of this._triangles){const h=(c[0]+c[2]+c[4])/3,d=(c[1]+c[3]+c[5])/3,[m,_,x]=this.getAvgColor(u,h-o/2,d-o/2,o,o,s,r),[p,f,M]=this._boostSat(m,_,x,1.8);e.beginPath(),e.moveTo(c[0],c[1]),e.lineTo(c[2],c[3]),e.lineTo(c[4],c[5]),e.closePath(),e.fillStyle=`rgb(${p|0},${f|0},${M|0})`,e.fill()}}_genTriangles(e,t,i){const s=[],r=Math.ceil(e/i)+1,o=Math.ceil(t/i)+1,a=[];for(let l=0;l<=o;l++){a.push([]);for(let u=0;u<=r;u++){const c=(this._hash(u,l,0)-.5)*i*.7,h=(this._hash(u,l,1)-.5)*i*.7;a[l].push([u*i+c,l*i+h])}}for(let l=0;l<o;l++)for(let u=0;u<r;u++){const[c,h]=a[l][u],[d,m]=a[l][u+1],[_,x]=a[l+1][u],[p,f]=a[l+1][u+1];s.push([c,h,d,m,_,x]),s.push([d,m,p,f,_,x])}return s}_boostSat(e,t,i,s){const r=Math.max(e,t,i),o=Math.min(e,t,i),a=(r+o)/2;return[Math.min(255,Math.max(0,a+(e-a)*s)),Math.min(255,Math.max(0,a+(t-a)*s)),Math.min(255,Math.max(0,a+(i-a)*s))]}}class xS extends rt{constructor(e){super(e),this.params={intensity:50}}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,s=t.width,r=t.height,o=Math.max(20,Math.round(this.params.intensity/100*120)+20),a=document.createElement("canvas");a.width=s,a.height=r,a.getContext("2d").drawImage(i,0,0,s,r),e.clearRect(0,0,s,r);for(let u=0;u<r;u+=o)for(let c=0;c<s;c+=o){const h=Math.min(o,s-c),d=Math.min(o,r-u);e.save(),e.beginPath(),e.rect(c,u,h,d),e.clip(),e.transform(1.08,.04,-.04,1.08,c-c*.08+h*.02,u-u*.08+d*.02),e.drawImage(a,0,0,s,r),e.setTransform(1,0,0,1,0,0);const m=e.createLinearGradient(c,u,c+h,u+d);m.addColorStop(0,"rgba(255,255,255,0.18)"),m.addColorStop(.4,"rgba(255,255,255,0.04)"),m.addColorStop(1,"rgba(0,0,0,0.12)"),e.fillStyle=m,e.fillRect(c,u,h,d),e.restore(),e.strokeStyle="rgba(0,0,0,0.6)",e.lineWidth=1,e.strokeRect(c+.5,u+.5,h-1,d-1)}}}class MS extends rt{constructor(e){super(e),this.params={intensity:50}}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,s=t.width,r=t.height,o=Math.max(16,Math.round(this.params.intensity/100*100)+16),a=o*.12,l=document.createElement("canvas");l.width=s,l.height=r;const u=l.getContext("2d");u.drawImage(i,0,0,s,r),u.getImageData(0,0,s,r).data,e.clearRect(0,0,s,r),e.filter="blur(2px)",e.drawImage(i,0,0,s,r),e.filter="none";for(let c=0;c<r;c+=o)for(let h=0;h<s;h+=o){const d=Math.min(o,s-h),m=Math.min(o,r-c),_=h+d/2,x=c+m/2;e.save(),e.beginPath(),this._roundRect(e,h+1,c+1,d-2,m-2,a),e.clip();const p=Math.sin(_/s*Math.PI*2)*o*.15,f=Math.cos(x/r*Math.PI*2)*o*.15;e.drawImage(l,p,f,s,r),e.fillStyle="rgba(255,255,255,0.06)",e.fillRect(h,c,d,m);const M=e.createLinearGradient(h,c,h,c+m*.4);M.addColorStop(0,"rgba(255,255,255,0.25)"),M.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=M,e.fillRect(h,c,d,m*.4),e.restore(),e.save(),e.beginPath(),this._roundRect(e,h+.5,c+.5,d-1,m-1,a),e.strokeStyle="rgba(255,255,255,0.25)",e.lineWidth=1,e.stroke(),e.restore()}}_roundRect(e,t,i,s,r,o){e.moveTo(t+o,i),e.lineTo(t+s-o,i),e.quadraticCurveTo(t+s,i,t+s,i+o),e.lineTo(t+s,i+r-o),e.quadraticCurveTo(t+s,i+r,t+s-o,i+r),e.lineTo(t+o,i+r),e.quadraticCurveTo(t,i+r,t,i+r-o),e.lineTo(t,i+o),e.quadraticCurveTo(t,i,t+o,i),e.closePath()}}class SS extends rt{constructor(e){super(e),this.params={intensity:50}}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,s=t.width,r=t.height,o=Math.max(6,Math.round(this.params.intensity/100*60)+6),a=document.createElement("canvas");a.width=s,a.height=r;const l=a.getContext("2d");l.drawImage(i,0,0,s,r);const u=l.getImageData(0,0,s,r).data;e.clearRect(0,0,s,r);const c=o*2,h=Math.sqrt(3)*o,d=c*.75,m=h,_=Math.ceil(s/d)+1,x=Math.ceil(r/m)+1;for(let p=0;p<x;p++)for(let f=0;f<_;f++){const M=f%2===0?0:h/2,g=f*d,v=p*m+M,[T,P,A]=this.getAvgColor(u,g-o,v-o,o*2,o*2,s,r);e.beginPath();for(let L=0;L<6;L++){const O=Math.PI/3*L-Math.PI/6,y=g+o*Math.cos(O),R=v+o*Math.sin(O);L===0?e.moveTo(y,R):e.lineTo(y,R)}e.closePath(),e.fillStyle=`rgb(${T|0},${P|0},${A|0})`,e.fill(),e.strokeStyle="rgba(0,0,0,0.2)",e.lineWidth=.5,e.stroke()}}}class yS extends rt{constructor(e){super(e),this.params={intensity:50}}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,s=t.width,r=t.height,o=Math.max(10,Math.round(this.params.intensity/100*70)+10),a=document.createElement("canvas");a.width=s,a.height=r;const l=a.getContext("2d");l.drawImage(i,0,0,s,r);const u=l.getImageData(0,0,s,r).data;e.clearRect(0,0,s,r),e.filter="blur(4px) brightness(0.5)",e.drawImage(i,0,0,s,r),e.filter="none";const c=Math.ceil(s/o)+1,h=Math.ceil(r/o)+1;for(let d=0;d<h;d++)for(let m=0;m<c;m++){const _=m*o+o/2,x=d*o+o/2,[p,f,M]=this.getAvgColor(u,_-o/2,x-o/2,o,o,s,r);e.save(),e.translate(_,x),e.beginPath();for(let v=0;v<10;v++){const T=Math.PI/5*v-Math.PI/2,P=v%2===0?o*.48:o*.22,A=Math.cos(T)*P,L=Math.sin(T)*P;v===0?e.moveTo(A,L):e.lineTo(A,L)}e.closePath();const g=e.createRadialGradient(-o*.15,-o*.15,0,0,0,o*.5);g.addColorStop(0,`rgba(${Math.min(255,(p|0)+60)},${Math.min(255,(f|0)+60)},${Math.min(255,(M|0)+60)},1)`),g.addColorStop(.5,`rgba(${p|0},${f|0},${M|0},0.9)`),g.addColorStop(1,`rgba(${Math.max(0,(p|0)-40)},${Math.max(0,(f|0)-40)},${Math.max(0,(M|0)-40)},0.8)`),e.fillStyle=g,e.fill(),e.strokeStyle="rgba(0,0,0,0.4)",e.lineWidth=.8,e.stroke(),e.restore()}}}class ES extends rt{constructor(e){super(e),this.params={mode:0,intensity:30,center:50}}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,s=t.width,r=t.height,{mode:o,intensity:a,center:l}=this.params,u=l/100*s,c=l/100*r,h=Math.max(1,Math.round(a/100*24)),d=a/100*.08,m=a/100*.12;e.clearRect(0,0,s,r),e.globalAlpha=1/h;for(let _=0;_<h;_++){const x=_/(h-1||1)-.5;if(e.save(),e.translate(u,c),o===0)e.rotate(x*d*2);else{const p=1+x*m*2;e.scale(p,p)}e.translate(-u,-c),e.drawImage(i,0,0,s,r),e.restore()}e.globalAlpha=1}}class bS extends rt{constructor(e){super(e),this.params={length:30,direction:0}}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,s=t.width,r=t.height,{length:o,direction:a}=this.params,l=Math.max(1,Math.round(o/100*30)),u=a*Math.PI/180,c=Math.cos(u),h=Math.sin(u),d=o/100*Math.max(s,r)*.15;e.clearRect(0,0,s,r),e.globalAlpha=1/l;for(let m=0;m<l;m++){const _=(m/(l-1||1)-.5)*2,x=c*_*d,p=h*_*d;e.drawImage(i,x,p,s,r)}e.globalAlpha=1}}class TS extends rt{constructor(e){super(e),this.params={strength:2.9}}apply(){const{width:e,height:t}=this.canvas,i=this.ctx,s=i.getImageData(0,0,e,t),r=s.data,o=new Uint8ClampedArray(r.length),a=Math.max(.1,this.params.strength/10*8+.5);for(let l=0;l<t;l++)for(let u=0;u<e;u++){const c=(l*e+u)*4,h=u>0?(l*e+(u-1))*4:c,d=l>0?((l-1)*e+u)*4:c,m=(r[c]-r[h]+r[c]-r[d])*a*.5+128,_=(r[c+1]-r[h+1]+r[c+1]-r[d+1])*a*.5+128,x=(r[c+2]-r[h+2]+r[c+2]-r[d+2])*a*.5+128,p=.299*m+.587*_+.114*x;o[c]=p,o[c+1]=p,o[c+2]=p,o[c+3]=255}for(let l=0;l<o.length;l+=4){const u=o[l];o[l]=Math.min(255,u*1.05),o[l+1]=Math.min(255,u*.97),o[l+2]=Math.min(255,u*.88)}s.data.set(o),i.putImageData(s,0,0)}updateParams(e){this.params={...this.params,strength:e.strength??this.params.strength},this.render()}}class AS extends rt{constructor(e){super(e),this.params={colorModel:2,pattern:2,period:12.7,angle:75,antiAlias:16,turbulence:0,blocksize:-1,angleBoost:0}}apply(){const{width:e,height:t}=this.canvas,i=this.ctx,r=i.getImageData(0,0,e,t).data,o=i.createImageData(e,t),a=o.data,l=Math.max(2,this.params.period),u=(this.params.angle+this.params.angleBoost*10)*Math.PI/180,c=this.params.turbulence*l*.3,h=Math.pow(2,this.params.blocksize),d=Math.cos(u),m=Math.sin(u),_=(p,f)=>{const M=Math.min(e-1,Math.max(0,Math.round(p))),v=(Math.min(t-1,Math.max(0,Math.round(f)))*e+M)*4;return[r[v],r[v+1],r[v+2],r[v+3]]},x=this.params.pattern;for(let p=0;p<t;p++)for(let f=0;f<e;f++){let M=0,g=0;if(c>0){const ie=Math.sin((f+p*.7)*.1)*c;M=ie,g=ie*.6}const v=(f+M)*d-(p+g)*m,T=(f+M)*m+(p+g)*d,P=Math.floor(v/l)*l+l*.5,A=Math.floor(T/l)*l+l*.5,L=P*d+A*m,O=-P*m+A*d,[y,R,D]=_(L,O),V=(.299*y+.587*R+.114*D)/255,w=(v%l+l)%l/l,N=(T%l+l)%l/l,z=w-.5,q=N-.5;let k=!1;if(x===1)k=Math.abs(z)<V*.5*h;else if(x===0){const ie=V*.5*h;k=z*z+q*q<ie*ie}else{const ie=V*.5*h;k=Math.abs(z)<ie&&Math.abs(q)<ie}const K=(p*e+f)*4;if(this.params.colorModel===0){const ie=k?0:255;a[K]=a[K+1]=a[K+2]=ie,a[K+3]=255}else if(this.params.colorModel===1){const ie=k?1:0;a[K]=Math.round(y*ie),a[K+1]=Math.round(R*ie),a[K+2]=Math.round(D*ie),a[K+3]=255}else{const ie=k?20:240;a[K]=a[K+1]=a[K+2]=ie,a[K+3]=255}}i.putImageData(o,0,0)}updateParams(e){this.params={...this.params,...e},this.render()}}class wS extends rt{constructor(e){super(e),this.params={render:2,detailRadius:10.6,detailThreshold:10,shadingSteps:10,shadingSmoothness:10,edgeThreshold:1,edgeWidth:2.5,edgeOpacity:.26}}apply(){const{width:e,height:t}=this.canvas,i=this.ctx,r=i.getImageData(0,0,e,t).data,o=Math.max(2,Math.round(this.params.shadingSteps)),a=this.params.shadingSmoothness*.5,l=Math.max(1,Math.round(this.params.edgeWidth)),u=this.params.edgeThreshold*30,c=this.params.edgeOpacity,h=this.params.render,d=new Uint8ClampedArray(r.length);for(let M=0;M<r.length;M+=4){for(let g=0;g<3;g++){const v=r[M+g],T=Math.round(v/255*(o-1))/(o-1)*255;d[M+g]=Math.min(255,T+(v-T)*a/(a+5))}d[M+3]=255}const m=new Float32Array(e*t);for(let M=0;M<e*t;M++){const g=M*4;m[M]=.299*r[g]+.587*r[g+1]+.114*r[g+2]}const _=new Uint8ClampedArray(e*t);for(let M=1;M<t-1;M++)for(let g=1;g<e-1;g++){const v=M*e+g,T=-m[v-e-1]+m[v-e+1]-2*m[v-1]+2*m[v+1]-m[v+e-1]+m[v+e+1],P=-m[v-e-1]-2*m[v-e]-m[v-e+1]+m[v+e-1]+2*m[v+e]+m[v+e+1];_[v]=Math.sqrt(T*T+P*P)>u?255:0}const x=new Uint8ClampedArray(_.length);if(l>0)for(let M=0;M<t;M++)for(let g=0;g<e;g++){let v=!1;for(let T=-l;T<=l&&!v;T++)for(let P=-l;P<=l&&!v;P++){const A=g+P,L=M+T;A>=0&&A<e&&L>=0&&L<t&&_[L*e+A]&&(v=!0)}x[M*e+g]=v?255:0}const p=i.createImageData(e,t),f=p.data;for(let M=0;M<e*t;M++){const g=M*4,v=x[M]>0;if(h===0)f[g]=d[g],f[g+1]=d[g+1],f[g+2]=d[g+2],f[g+3]=255;else if(h===1){const T=v?0:255;f[g]=f[g+1]=f[g+2]=T,f[g+3]=255}else v?(f[g]=Math.round(d[g]*(1-c)),f[g+1]=Math.round(d[g+1]*(1-c)),f[g+2]=Math.round(d[g+2]*(1-c))):(f[g]=d[g],f[g+1]=d[g+1],f[g+2]=d[g+2]),f[g+3]=255}i.putImageData(p,0,0)}updateParams(e){this.params={...this.params,...e},this.render()}}class CS extends rt{constructor(e){super(e),this.params={lightColor:50,lightRange:73,lightIntensity:50}}apply(){const{width:e,height:t}=this.canvas,i=this.ctx,r=i.getImageData(0,0,e,t).data,o=i.createImageData(e,t),a=o.data,l=this.params.lightIntensity/100,u=this.params.lightRange/100,c=this.params.lightColor/100,h=e*.5,d=t*.5,m=Math.max(e,t)*u*.8,_=200+c*55,x=180+(1-Math.abs(c-.5)*2)*40,p=255-c*80;for(let f=0;f<t;f++)for(let M=0;M<e;M++){const g=(f*e+M)*4,v=Math.sqrt((M-h)**2+(f-d)**2),T=Math.exp(-(v*v)/(2*m*m))*l*1.2,P=r[g],A=r[g+1],L=r[g+2],O=Math.min(1,T*_/255),y=Math.min(1,T*x/255),R=Math.min(1,T*p/255),D=P/255,V=A/255,w=L/255,N=(2*D*O+D*D*(1-2*O))*255,z=(2*V*y+V*V*(1-2*y))*255,q=(2*w*R+w*w*(1-2*R))*255;a[g]=Math.min(255,Math.max(0,P+(N-P)*T*2)),a[g+1]=Math.min(255,Math.max(0,A+(z-A)*T*2)),a[g+2]=Math.min(255,Math.max(0,L+(q-L)*T*2)),a[g+3]=255}i.putImageData(o,0,0)}updateParams(e){this.params={...this.params,...e},this.render()}}class RS extends rt{constructor(e){super(e),this.params={comicType:0,color1:300,color2:300,gridNum:.14}}hsvToRgb(e,t,i){e=(e%360+360)%360;const s=i*t,r=s*(1-Math.abs(e/60%2-1)),o=i-s;let a=0,l=0,u=0;return e<60?(a=s,l=r,u=0):e<120?(a=r,l=s,u=0):e<180?(a=0,l=s,u=r):e<240?(a=0,l=r,u=s):e<300?(a=r,l=0,u=s):(a=s,l=0,u=r),[(a+o)*255,(l+o)*255,(u+o)*255]}apply(){const{width:e,height:t}=this.canvas,i=this.ctx,r=i.getImageData(0,0,e,t).data,o=i.createImageData(e,t),a=o.data,l=Math.max(2,Math.round(this.params.gridNum*30+3)),u=this.params.comicType===1,[c,h,d]=this.hsvToRgb(this.params.color1,.8,.9),[m,_,x]=this.hsvToRgb(this.params.color2,.6,.7);for(let p=0;p<t;p++)for(let f=0;f<e;f++){const M=(p*e+f)*4,g=(.299*r[M]+.587*r[M+1]+.114*r[M+2])/255,v=f%l/l,T=p%l/l,P=v-.5,A=T-.5,L=g*.55,O=P*P+A*A<L*L,R=(f+p)%l/l<(1-g)*.6&&g<.7,D=f%l===0||p%l===0;let V,w,N;if(g>.85?V=w=N=255:g>.5?O?V=w=N=30:V=w=N=240:g>.2?R?V=w=N=20:V=w=N=220:V=w=N=15,D&&this.params.gridNum>.02&&(V=w=N=Math.min(V,80)),u){const z=g;V=Math.round(V*(c/255*z+m/255*(1-z))*1.2),w=Math.round(w*(h/255*z+_/255*(1-z))*1.2),N=Math.round(N*(d/255*z+x/255*(1-z))*1.2)}a[M]=Math.min(255,Math.max(0,V)),a[M+1]=Math.min(255,Math.max(0,w)),a[M+2]=Math.min(255,Math.max(0,N)),a[M+3]=255}i.putImageData(o,0,0)}updateParams(e){this.params={...this.params,...e},this.render()}}class PS extends rt{constructor(e){super(e),this.params={centerX:.5,centerY:.39,size:76,convergence:20}}apply(){const{width:e,height:t}=this.canvas,i=this.ctx,r=i.getImageData(0,0,e,t).data,o=i.createImageData(e,t),a=o.data,l=this.params.centerX*e,u=this.params.centerY*t,c=Math.max(1,this.params.size),h=this.params.convergence/100,d=(m,_)=>{const x=Math.min(e-1,Math.max(0,Math.round(m))),f=(Math.min(t-1,Math.max(0,Math.round(_)))*e+x)*4;return[r[f],r[f+1],r[f+2],r[f+3]]};for(let m=0;m<t;m++)for(let _=0;_<e;_++){const x=_-l,p=m-u,f=Math.sqrt(x*x+p*p),M=c*Math.max(e,t)/100;if(f<M&&f>0){const g=f/M,T=(h>0?Math.pow(g,1-h*.8):Math.pow(g,1+Math.abs(h)*1.5))*M/f,P=l+x*T,A=u+p*T,[L,O,y,R]=d(P,A),D=(m*e+_)*4;a[D]=L,a[D+1]=O,a[D+2]=y,a[D+3]=R}else{const g=(m*e+_)*4;a[g]=r[g],a[g+1]=r[g+1],a[g+2]=r[g+2],a[g+3]=r[g+3]}}i.putImageData(o,0,0)}updateParams(e){this.params={...this.params,...e},this.render()}}class LS extends rt{constructor(e){super(e),this.params={radius:100,waveSpeed:4.9,waveWidth:55.1,waveHeight:1,wavePhase:0}}apply(){const{width:e,height:t}=this.canvas,i=this.ctx,r=i.getImageData(0,0,e,t).data,o=i.createImageData(e,t),a=o.data,l=e*.5,u=t*.5,c=this.params.radius/100*Math.max(e,t),h=Math.max(1,this.params.waveWidth)/100*c,d=this.params.waveHeight*Math.min(e,t)*.02,m=this.params.wavePhase*Math.PI/180,_=(x,p)=>{const f=Math.min(e-1,Math.max(0,Math.round(x))),g=(Math.min(t-1,Math.max(0,Math.round(p)))*e+f)*4;return[r[g],r[g+1],r[g+2],r[g+3]]};for(let x=0;x<t;x++)for(let p=0;p<e;p++){const f=p-l,M=x-u,g=Math.sqrt(f*f+M*M);if(g<c&&g>0){const v=g/h*Math.PI*2-m,T=Math.sin(v)*d*(1-g/c),P=f/g,A=M/g,L=p+P*T,O=x+A*T,[y,R,D,V]=_(L,O),w=(x*e+p)*4;a[w]=y,a[w+1]=R,a[w+2]=D,a[w+3]=V}else{const v=(x*e+p)*4;a[v]=r[v],a[v+1]=r[v+1],a[v+2]=r[v+2],a[v+3]=r[v+3]}}i.putImageData(o,0,0)}updateParams(e){this.params={...this.params,...e},this.render()}}class IS extends rt{constructor(e){super(e),this.params={waveType:0,waveHeight:10,waveWidth:40,direction:90,waveSpeed:1,phase:0}}apply(){const{width:e,height:t}=this.canvas,i=this.ctx,r=i.getImageData(0,0,e,t).data,o=i.createImageData(e,t),a=o.data,l=this.params.direction*Math.PI/180,u=this.params.waveHeight*Math.min(e,t)*.01,c=Math.max(1,this.params.waveWidth)*Math.min(e,t)*.01,h=this.params.phase*Math.PI/180,d=Math.round(this.params.waveType),m=Math.cos(l),_=Math.sin(l),x=f=>{const M=(f%(Math.PI*2)+Math.PI*2)%(Math.PI*2);return d===1?M<Math.PI?1:-1:d===2?M<Math.PI?M/Math.PI*2-1:3-M/Math.PI*2:Math.sin(f)},p=(f,M)=>{const g=Math.min(e-1,Math.max(0,Math.round(f))),T=(Math.min(t-1,Math.max(0,Math.round(M)))*e+g)*4;return[r[T],r[T+1],r[T+2],r[T+3]]};for(let f=0;f<t;f++)for(let M=0;M<e;M++){const v=(M*m+f*_)/c*Math.PI*2-h,T=x(v)*u,P=M+T*_,A=f-T*m,[L,O,y,R]=p(P,A),D=(f*e+M)*4;a[D]=L,a[D+1]=O,a[D+2]=y,a[D+3]=R}i.putImageData(o,0,0)}updateParams(e){this.params={...this.params,...e},this.render()}}class DS extends rt{constructor(e){super(e),this.params={centerX:.5,centerY:.5,radius:80,angle:120,smoothness:60}}apply(){const{width:e,height:t}=this.canvas,i=this.ctx,r=i.getImageData(0,0,e,t).data,o=i.createImageData(e,t),a=o.data,l=this.params.centerX*e,u=this.params.centerY*t,c=this.params.radius/100*Math.max(e,t)*.5,h=this.params.angle*Math.PI/180,d=Math.max(1,this.params.smoothness)/100,m=(_,x)=>{const p=Math.floor(_),f=Math.floor(x),M=Math.min(e-1,p+1),g=Math.min(t-1,f+1),v=_-p,T=x-f,P=Math.max(0,p),A=Math.max(0,M),L=Math.max(0,f),O=Math.max(0,g),y=(L*e+P)*4,R=(L*e+A)*4,D=(O*e+P)*4,V=(O*e+A)*4;return[r[y]*(1-v)*(1-T)+r[R]*v*(1-T)+r[D]*(1-v)*T+r[V]*v*T,r[y+1]*(1-v)*(1-T)+r[R+1]*v*(1-T)+r[D+1]*(1-v)*T+r[V+1]*v*T,r[y+2]*(1-v)*(1-T)+r[R+2]*v*(1-T)+r[D+2]*(1-v)*T+r[V+2]*v*T,255]};for(let _=0;_<t;_++)for(let x=0;x<e;x++){const p=x-l,f=_-u,M=Math.sqrt(p*p+f*f);if(M<c){const g=1-Math.pow(M/c,d*2+.1),v=h*g,T=Math.cos(v),P=Math.sin(v),A=l+p*T-f*P,L=u+p*P+f*T,[O,y,R,D]=m(A,L),V=(_*e+x)*4;a[V]=O,a[V+1]=y,a[V+2]=R,a[V+3]=D}else{const g=(_*e+x)*4;a[g]=r[g],a[g+1]=r[g+1],a[g+2]=r[g+2],a[g+3]=r[g+3]}}i.putImageData(o,0,0)}updateParams(e){this.params={...this.params,...e},this.render()}}class US extends rt{constructor(e){super(e),this.params={glowCenterX:.5,glowCenterY:.5,glowIntensity:50,glowDensity:60}}apply(){const{width:e,height:t}=this.canvas,i=this.ctx,r=i.getImageData(0,0,e,t).data,o=i.createImageData(e,t),a=o.data,l=this.params.glowCenterX*e,u=this.params.glowCenterY*t,c=this.params.glowIntensity/100,h=this.params.glowDensity/100,d=new Float32Array(e*t);for(let g=0;g<e*t;g++)d[g]=(.299*r[g*4]+.587*r[g*4+1]+.114*r[g*4+2])/255;const m=new Float32Array(e*t);let _=0;for(let g=1;g<t-1;g++)for(let v=1;v<e-1;v++){const T=g*e+v,P=-d[T-e-1]+d[T-e+1]-2*d[T-1]+2*d[T+1]-d[T+e-1]+d[T+e+1],A=-d[T-e-1]-2*d[T-e]-d[T-e+1]+d[T+e-1]+2*d[T+e]+d[T+e+1];m[T]=Math.sqrt(P*P+A*A),m[T]>_&&(_=m[T])}const x=Math.round(h*12+2),p=new Float32Array(e*t),f=new Float32Array(e*t);for(let g=0;g<t;g++)for(let v=0;v<e;v++){let T=0,P=0;for(let A=-x;A<=x;A++){const L=Math.min(e-1,Math.max(0,v+A));T+=m[g*e+L],P++}f[g*e+v]=T/P}for(let g=0;g<t;g++)for(let v=0;v<e;v++){let T=0,P=0;for(let A=-x;A<=x;A++){const L=Math.min(t-1,Math.max(0,g+A));T+=f[L*e+v],P++}p[g*e+v]=T/P}const M=Math.sqrt(l*l+u*u)*1.5;for(let g=0;g<t;g++)for(let v=0;v<e;v++){const T=(g*e+v)*4,P=g*e+v,A=_>0?p[P]/_:0,L=v-l,O=g-u,y=1-Math.sqrt(L*L+O*O)/M,R=A*c*Math.max(0,y)*3;a[T]=Math.min(255,r[T]+R*255),a[T+1]=Math.min(255,r[T+1]+R*255),a[T+2]=Math.min(255,r[T+2]+R*255),a[T+3]=255}i.putImageData(o,0,0)}updateParams(e){this.params={...this.params,...e},this.render()}}class NS extends rt{constructor(e){super(e),this.params={shape:0,centerX:.5,centerY:.5,magnification:108,size:154,feather:71}}apply(){const{width:e,height:t}=this.canvas,i=this.ctx,r=i.getImageData(0,0,e,t).data,o=new Uint8ClampedArray(r),a=this.params.centerX*e,l=this.params.centerY*t,u=this.params.size/100*Math.min(e,t)*.5,c=this.params.magnification/100,h=this.params.feather/100,d=Math.round(this.params.shape)===0,m=(x,p)=>{const f=Math.floor(x),M=Math.floor(p),g=Math.min(e-1,f+1),v=Math.min(t-1,M+1),T=x-f,P=p-M,A=Math.max(0,f),L=Math.max(0,M),O=Math.min(e-1,g),y=Math.min(t-1,v),R=(L*e+A)*4,D=(L*e+O)*4,V=(y*e+A)*4,w=(y*e+O)*4;return[r[R]*(1-T)*(1-P)+r[D]*T*(1-P)+r[V]*(1-T)*P+r[w]*T*P,r[R+1]*(1-T)*(1-P)+r[D+1]*T*(1-P)+r[V+1]*(1-T)*P+r[w+1]*T*P,r[R+2]*(1-T)*(1-P)+r[D+2]*T*(1-P)+r[V+2]*(1-T)*P+r[w+2]*T*P,255]};for(let x=0;x<t;x++)for(let p=0;p<e;p++){const f=p-a,M=x-l;let g=0;if(d?g=Math.sqrt(f*f+M*M)/u:g=Math.max(Math.abs(f),Math.abs(M))/u,g>1)continue;const v=1-h,T=g<v?1:1-(g-v)/(h+.001),P=1/c,A=a+f*P,L=l+M*P,[O,y,R]=m(A,L),D=(x*e+p)*4,V=o[D],w=o[D+1],N=o[D+2];o[D]=Math.round(O*T+V*(1-T)),o[D+1]=Math.round(y*T+w*(1-T)),o[D+2]=Math.round(R*T+N*(1-T)),o[D+3]=255}const _=i.createImageData(e,t);_.data.set(o),i.putImageData(_,0,0)}updateParams(e){this.params={...this.params,...e},this.render()}}class FS extends rt{constructor(e){super(e),this.params={threshold:.2,strength:1.82,length:1,centerX:.5,centerY:.5}}apply(){const{width:e,height:t}=this.canvas,i=this.ctx,r=i.getImageData(0,0,e,t).data,o=i.createImageData(e,t),a=o.data,l=this.params.centerX*e,u=this.params.centerY*t,c=this.params.threshold,h=this.params.strength,d=this.params.length,m=new Float32Array(e*t);for(let M=0;M<e*t;M++){const g=(.299*r[M*4]+.587*r[M*4+1]+.114*r[M*4+2])/255;m[M]=g>c?(g-c)/(1-c):0}const _=Math.round(d*60+20),x=.97,p=new Float32Array(e*t);for(let M=0;M<t;M++)for(let g=0;g<e;g++){let v=0,T=g,P=M;const A=(l-g)/_,L=(u-M)/_;let O=1;for(let y=0;y<_;y++){const R=Math.min(e-1,Math.max(0,Math.round(T))),D=Math.min(t-1,Math.max(0,Math.round(P)));v+=m[D*e+R]*O,O*=x,T+=A,P+=L}p[M*e+g]=v/_}let f=0;for(let M=0;M<p.length;M++)p[M]>f&&(f=p[M]);if(f>0)for(let M=0;M<p.length;M++)p[M]/=f;for(let M=0;M<e*t;M++){const g=M*4,v=p[M]*h;a[g]=Math.min(255,r[g]+v*255),a[g+1]=Math.min(255,r[g+1]+v*245),a[g+2]=Math.min(255,r[g+2]+v*220),a[g+3]=255}i.putImageData(o,0,0)}updateParams(e){this.params={...this.params,...e},this.render()}}class OS extends rt{constructor(e){super(e),this.params={threshold:60,glowRadius:40,glowStrength:60,glowColor:0}}apply(){const{width:e,height:t}=this.canvas,i=this.ctx,r=i.getImageData(0,0,e,t).data,o=i.createImageData(e,t),a=o.data,l=this.params.threshold/100,u=Math.round(this.params.glowRadius/100*Math.min(e,t)*.08+2),c=this.params.glowStrength/100,h=Math.round(this.params.glowColor),d=h===1?1:h===2?.7:1,m=h===1?.9:h===2?.85:1,_=h===1?.6:1,x=new Float32Array(e*t*3);for(let g=0;g<e*t;g++){const v=r[g*4]/255,T=r[g*4+1]/255,P=r[g*4+2]/255,A=.299*v+.587*T+.114*P,L=A>l?(A-l)/(1-l+.001):0;x[g*3]=v*L,x[g*3+1]=T*L,x[g*3+2]=P*L}const p=new Float32Array(e*t*3),f=new Float32Array(e*t*3),M=x.slice();for(let g=0;g<t;g++)for(let v=0;v<e;v++){let T=0,P=0,A=0,L=0;for(let y=-u;y<=u;y++){const R=Math.min(e-1,Math.max(0,v+y)),D=(g*e+R)*3;T+=M[D],P+=M[D+1],A+=M[D+2],L++}const O=(g*e+v)*3;f[O]=T/L,f[O+1]=P/L,f[O+2]=A/L}for(let g=0;g<t;g++)for(let v=0;v<e;v++){let T=0,P=0,A=0,L=0;for(let y=-u;y<=u;y++){const D=(Math.min(t-1,Math.max(0,g+y))*e+v)*3;T+=f[D],P+=f[D+1],A+=f[D+2],L++}const O=(g*e+v)*3;p[O]=T/L,p[O+1]=P/L,p[O+2]=A/L}for(let g=0;g<e*t;g++){const v=g*4,T=p[g*3]*d*c,P=p[g*3+1]*m*c,A=p[g*3+2]*_*c,L=r[v]/255,O=r[v+1]/255,y=r[v+2]/255;a[v]=Math.min(255,Math.round((1-(1-L)*(1-T))*255)),a[v+1]=Math.min(255,Math.round((1-(1-O)*(1-P))*255)),a[v+2]=Math.min(255,Math.round((1-(1-y)*(1-A))*255)),a[v+3]=255}i.putImageData(o,0,0)}updateParams(e){this.params={...this.params,...e},this.render()}}const BS={class:"app-body"},zS={__name:"App",setup(n){const e=ft("dark");function t(w){e.value=w}const i=ft("wave-blur"),s=ft(!1),r=ft(!1),o=ft(!1),a=ft(!0),l=ft(null),u=ft(0),c=ft(0);let h=null,d=null;const m={"wave-blur":{name:"WaveBlurring",nameZh:"波形模糊",EffectClass:null,defaults:{horizontalChromatic:70,distortion:50,speed:60,size:60,blur:60},params:[{key:"horizontalChromatic",label:"AdjustHorizontalChromatic",desc:"水平色差强度",min:0,max:100},{key:"distortion",label:"AdjustDistortion",desc:"扭曲程度",min:0,max:100},{key:"speed",label:"AdjustSpeed",desc:"动画速度",min:0,max:100},{key:"size",label:"AdjustSize",desc:"波形尺寸",min:0,max:100},{key:"blur",label:"AdjustBlur",desc:"模糊强度",min:0,max:100}]},"directional-blur":{name:"Directional Blur",nameZh:"定向模糊",EffectClass:bS,defaults:{length:30,direction:0},params:[{key:"length",label:"Blur Length",desc:"模糊长度",min:0,max:100},{key:"direction",label:"Blur Direction",desc:"模糊方向（角度，0=水平）",min:0,max:360,step:1}]},"radial-blur":{name:"Radial Blur",nameZh:"径向模糊",EffectClass:ES,defaults:{mode:0,intensity:30,center:50},params:[{key:"mode",label:"Mode",desc:"0 = 旋转模糊  /  1 = 缩放模糊",min:0,max:1,step:1},{key:"intensity",label:"Intensity",desc:"模糊强度",min:0,max:100},{key:"center",label:"Center",desc:"中心位置 (0=左上  100=右下)",min:0,max:100}]},"basic-mosaic":{name:"Basic Mosaic",nameZh:"基础马赛克",EffectClass:dS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"马赛克块大小",min:1,max:100}]},"blur-mosaic-fx":{name:"Blur Mosaic",nameZh:"模糊马赛克",EffectClass:pS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"模糊程度",min:1,max:100}]},"brick-mosaic":{name:"Brick Mosaic",nameZh:"砖块马赛克",EffectClass:mS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"砖块大小",min:1,max:100}]},"colorful-mosaic-1":{name:"Colorful MosaicI",nameZh:"彩色马赛克 I",EffectClass:gS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"晶格大小",min:1,max:100}]},"colorful-mosaic-2":{name:"Colorful MosaicII",nameZh:"彩色马赛克 II",EffectClass:_S,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"气泡大小",min:1,max:100}]},"colorful-mosaic-3":{name:"Colorful MosaicIII",nameZh:"彩色马赛克 III",EffectClass:vS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"三角片大小",min:1,max:100}]},"glass-mosaic-1":{name:"Glass MosaicI",nameZh:"玻璃马赛克 I",EffectClass:xS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"玻璃格大小",min:1,max:100}]},"glass-mosaic-2":{name:"Glass MosaicII",nameZh:"玻璃马赛克 II",EffectClass:MS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"磨砂格大小",min:1,max:100}]},"hexagon-mosaic":{name:"Hexagon Mosaic",nameZh:"六边形马赛克",EffectClass:SS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"六边形大小",min:1,max:100}]},"star-mosaic":{name:"Star Mosaic",nameZh:"星形马赛克",EffectClass:yS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"星形大小",min:1,max:100}]},engrave:{name:"Engrave",nameZh:"雕刻",EffectClass:TS,defaults:{strength:2.9},params:[{key:"strength",label:"Strength",desc:"雕刻强度",min:0,max:10,step:.1}]},newsprint:{name:"Newsprint",nameZh:"报纸印刷",EffectClass:AS,defaults:{colorModel:2,pattern:2,period:12.7,angle:75,antiAlias:16,turbulence:0,blocksize:-1,angleBoost:0},params:[{key:"colorModel",label:"ColorModel",desc:"颜色模式 (0=黑白 1=彩色 2=灰度半调)",min:0,max:2,step:1},{key:"pattern",label:"Pattern",desc:"图案类型 (0=圆点 1=线条 2=方块)",min:0,max:2,step:1},{key:"period",label:"Period",desc:"网格周期大小",min:1,max:30,step:.1},{key:"angle",label:"Angle",desc:"网格旋转角度",min:0,max:180,step:1},{key:"turbulence",label:"Turbulence",desc:"扰动变形",min:0,max:5,step:.1},{key:"blocksize",label:"Blocksize",desc:"图案缩放 (-2~2)",min:-2,max:2,step:.1},{key:"angleBoost",label:"AngleBoost",desc:"额外角度叠加",min:0,max:5,step:.1}]},cartoon:{name:"Cartoon",nameZh:"卡通",EffectClass:wS,defaults:{render:2,detailRadius:10.6,detailThreshold:10,shadingSteps:10,shadingSmoothness:10,edgeThreshold:1,edgeWidth:2.5,edgeOpacity:.26},params:[{key:"render",label:"Render",desc:"渲染模式 (0=仅填色 1=仅边缘 2=填色+边缘)",min:0,max:2,step:1},{key:"detailRadius",label:"DetailRadius",desc:"细节平滑半径",min:1,max:30,step:.1},{key:"detailThreshold",label:"DetailThreshold",desc:"细节阈值",min:0,max:20,step:.1},{key:"shadingSteps",label:"ShadingSteps",desc:"色阶数量",min:2,max:16,step:1},{key:"shadingSmoothness",label:"ShadingSmoothness",desc:"色阶过渡平滑",min:0,max:20,step:.1},{key:"edgeThreshold",label:"EdgeThreshold",desc:"边缘检测阈值",min:0,max:5,step:.1},{key:"edgeWidth",label:"EdgeWidth",desc:"边缘线宽度",min:0,max:8,step:.1},{key:"edgeOpacity",label:"EdgeOpacity",desc:"边缘线透明度",min:0,max:1,step:.01}]},"film-soft-light":{name:"FilmSoftLight",nameZh:"胶片柔光",EffectClass:CS,defaults:{lightColor:50,lightRange:73,lightIntensity:50},params:[{key:"lightColor",label:"LightColor",desc:"光色偏移 (0=冷蓝 100=暖橙)",min:0,max:100},{key:"lightRange",label:"LightRange",desc:"光晕扩散范围",min:0,max:100},{key:"lightIntensity",label:"LightIntensity",desc:"光晕强度",min:0,max:100}]},comic:{name:"Comic",nameZh:"漫画",EffectClass:RS,defaults:{comicType:0,color1:300,color2:300,gridNum:.14},params:[{key:"comicType",label:"ComicType",desc:"漫画类型 (0=黑白 1=彩色)",min:0,max:1,step:1},{key:"color1",label:"Color1",desc:"高光色相 (0-360°)",min:0,max:360,step:1},{key:"color2",label:"Color2",desc:"阴影色相 (0-360°)",min:0,max:360,step:1},{key:"gridNum",label:"GridNum",desc:"网格密度",min:0,max:1,step:.01}]},"cc-lens":{name:"CCLens",nameZh:"鱼眼",EffectClass:PS,defaults:{centerX:.5,centerY:.39,size:76,convergence:20},params:[{key:"centerX",label:"CenterX",desc:"镜头中心 X",min:0,max:1,step:.01},{key:"centerY",label:"CenterY",desc:"镜头中心 Y",min:0,max:1,step:.01},{key:"size",label:"Size",desc:"镜头大小",min:0,max:200},{key:"convergence",label:"Convergence",desc:"汇聚 (+凸起 / -凹陷)",min:-100,max:100}]},ripple:{name:"Ripple",nameZh:"波纹",EffectClass:LS,defaults:{radius:100,waveSpeed:4.9,waveWidth:55.1,waveHeight:1,wavePhase:0},params:[{key:"radius",label:"半径",desc:"波纹影响半径",min:0,max:200},{key:"waveWidth",label:"波形宽度",desc:"相邻波峰间距",min:1,max:100,step:.1},{key:"waveHeight",label:"波形高度",desc:"波纹位移幅度",min:0,max:5,step:.1},{key:"wavePhase",label:"波纹相",desc:"波纹起始相位 (°)",min:0,max:360,step:1}]},"wave-warp":{name:"WaveWarp",nameZh:"波形变形",EffectClass:IS,defaults:{waveType:0,waveHeight:10,waveWidth:40,direction:90,waveSpeed:1,phase:0},params:[{key:"waveType",label:"波浪类型",desc:"0=正弦 1=方波 2=三角",min:0,max:2,step:1},{key:"waveHeight",label:"波形高度",desc:"位移幅度",min:0,max:100,step:.5},{key:"waveWidth",label:"波形宽度",desc:"波长（像素比）",min:1,max:200,step:1},{key:"direction",label:"方向",desc:"波形传播方向 (°)",min:0,max:360,step:1},{key:"phase",label:"相位",desc:"波形起始相位 (°)",min:0,max:360,step:1}]},"twirl-distort":{name:"TwirlDistort",nameZh:"旋转扭曲",EffectClass:DS,defaults:{centerX:.5,centerY:.5,radius:80,angle:120,smoothness:60},params:[{key:"centerX",label:"CenterX",desc:"旋转中心 X",min:0,max:1,step:.01},{key:"centerY",label:"CenterY",desc:"旋转中心 Y",min:0,max:1,step:.01},{key:"radius",label:"Radius",desc:"影响半径",min:0,max:200},{key:"angle",label:"Angle",desc:"扭曲角度 (°)",min:-360,max:360,step:1},{key:"smoothness",label:"Smoothness",desc:"边缘过渡平滑度",min:0,max:100}]},"edge-glow":{name:"EdgeGlow",nameZh:"边缘辉光",EffectClass:US,defaults:{glowCenterX:.5,glowCenterY:.5,glowIntensity:50,glowDensity:60},params:[{key:"glowCenterX",label:"GlowCenterX",desc:"光源中心 X",min:0,max:1,step:.01},{key:"glowCenterY",label:"GlowCenterY",desc:"光源中心 Y",min:0,max:1,step:.01},{key:"glowIntensity",label:"Intensity",desc:"辉光亮度",min:0,max:100},{key:"glowDensity",label:"Density",desc:"辉光扩散密度",min:0,max:100}]},enlargement:{name:"Enlargement",nameZh:"局部放大",EffectClass:NS,defaults:{shape:0,centerX:.5,centerY:.5,magnification:108,size:154,feather:71},params:[{key:"shape",label:"Shape",desc:"形状 (0=圆形 1=方形)",min:0,max:1,step:1},{key:"centerX",label:"CenterX",desc:"放大中心 X",min:0,max:1,step:.01},{key:"centerY",label:"CenterY",desc:"放大中心 Y",min:0,max:1,step:.01},{key:"magnification",label:"Magnification",desc:"放大倍数 (%)",min:50,max:400},{key:"size",label:"Size",desc:"镜头大小",min:0,max:300},{key:"feather",label:"Feather",desc:"边缘羽化",min:0,max:100}]},"shaft-light":{name:"ShaftLight",nameZh:"光柱",EffectClass:FS,defaults:{threshold:.2,strength:1.82,length:1,centerX:.5,centerY:.5},params:[{key:"threshold",label:"Threshold",desc:"亮度提取阈值",min:0,max:1,step:.01},{key:"strength",label:"Strength",desc:"光柱强度",min:0,max:5,step:.01},{key:"length",label:"Length",desc:"光线延伸长度",min:0,max:2,step:.01},{key:"centerX",label:"CenterX",desc:"光源中心 X",min:0,max:1,step:.01},{key:"centerY",label:"CenterY",desc:"光源中心 Y",min:0,max:1,step:.01}]},"overall-glow":{name:"OverallGlow",nameZh:"泛光",EffectClass:OS,defaults:{threshold:60,glowRadius:40,glowStrength:60,glowColor:0},params:[{key:"threshold",label:"Threshold",desc:"高光提取阈值",min:0,max:100},{key:"glowRadius",label:"GlowRadius",desc:"光晕扩散半径",min:0,max:100},{key:"glowStrength",label:"GlowStrength",desc:"光晕强度",min:0,max:100},{key:"glowColor",label:"GlowColor",desc:"光晕色调 (0=白 1=暖 2=冷)",min:0,max:2,step:1}]}},_=Wn(()=>m[i.value]||null),x=Wn(()=>{var w;return((w=_.value)==null?void 0:w.params)||[]}),p=Wn(()=>{for(const w of Fr)if(w.plugins.find(N=>N.id===i.value))return w.name;return""}),f=ft({...m["wave-blur"].defaults});Dr(f,w=>{h==null||h.updateParams(w),effectCmp==null||effectCmp.updateParams(w)},{deep:!0}),$o(()=>{Ls(()=>{v("wave-blur"),P()})});function M(w,N){const z=m[w];if(!z||!N)return null;if(w==="wave-blur"){const q=new fS(N,null);return q.init(),q}else if(z.EffectClass)return new z.EffectClass(N);return null}function g(){const w=l.value;return w?a.value?w.webglCanvas:w.canvas2d:null}function v(w){var z;(z=h==null?void 0:h.destroy)==null||z.call(h),h=null,a.value=w==="wave-blur";const N=g();h=M(w,N),d&&(h==null||h.loadImage(d)),s.value&&T()}function T(){var N;const w=(N=l.value)==null?void 0:N.originalCanvas;!w||!d||(w.width=u.value||d.naturalWidth||900,w.height=c.value||d.naturalHeight||600,w.getContext("2d").drawImage(d,0,0,w.width,w.height))}function P(){const w=new Image;w.crossOrigin="anonymous",w.src="/demo.jpg",w.onload=()=>L(w),w.onerror=()=>A()}function A(){const w=document.createElement("canvas");w.width=900,w.height=600;const N=w.getContext("2d"),z=N.createLinearGradient(0,0,900,600);z.addColorStop(0,"#101010"),z.addColorStop(1,"#1c1c1c"),N.fillStyle=z,N.fillRect(0,0,900,600),N.strokeStyle="rgba(255,255,255,.03)",N.lineWidth=1;for(let K=0;K<=900;K+=50)N.beginPath(),N.moveTo(K,0),N.lineTo(K,600),N.stroke();for(let K=0;K<=600;K+=50)N.beginPath(),N.moveTo(0,K),N.lineTo(900,K),N.stroke();const q=N.createRadialGradient(450,300,20,450,300,260);q.addColorStop(0,"rgba(255,255,255,.06)"),q.addColorStop(1,"rgba(255,255,255,0)"),N.fillStyle=q,N.fillRect(0,0,900,600),N.fillStyle="rgba(255,255,255,.18)",N.font='bold 36px "Space Grotesk", sans-serif',N.textAlign="center",N.textBaseline="middle",N.fillText("KSkr",450,278),N.font='15px "Inter", sans-serif',N.fillStyle="rgba(255,255,255,.08)",N.fillText("上传图片以开始预览",450,326);const k=new Image;k.onload=()=>L(k),k.src=w.toDataURL()}function L(w){d=w,u.value=w.naturalWidth||w.width||900,c.value=w.naturalHeight||w.height||600,o.value=!0,Ls(()=>{h==null||h.loadImage(w),s.value&&T()})}function O(w){var q,k,K,ie,he;const N=((k=(q=w==null?void 0:w.target)==null?void 0:q.files)==null?void 0:k[0])||((ie=(K=w==null?void 0:w.dataTransfer)==null?void 0:K.files)==null?void 0:ie[0])||((he=w==null?void 0:w.files)==null?void 0:he[0]);if(!N)return;const z=new FileReader;z.onload=me=>{const Ie=new Image;Ie.onload=()=>L(Ie),Ie.src=me.target.result},z.readAsDataURL(N)}function y(){var w;f.value={...((w=_.value)==null?void 0:w.defaults)||{}}}function R(){s.value=!s.value,r.value=!1,s.value&&d&&Ls(()=>T())}function D(){r.value=!r.value,r.value&&d&&T()}function V(w){i.value=w.id;const N=m[w.id];N&&(f.value={...N.defaults}),Ls(()=>v(w.id))}return(w,N)=>{var z;return dt(),bt("div",{class:Yt(["app","theme-"+e.value])},[Mt(Zp,{currentTheme:e.value,onSetTheme:t},null,8,["currentTheme"]),fe("div",BS,[Mt(mm,{onSelectPlugin:V}),_.value?(dt(),xh(Um,{key:0,plugin:_.value,params:x.value,modelValue:f.value,"onUpdate:modelValue":N[0]||(N[0]=q=>f.value=q),compareMode:s.value,onReset:y,onUpload:O,onToggleCompare:R},null,8,["plugin","params","modelValue","compareMode"])):Xr("",!0),Mt(jm,{ref_key:"previewArea",ref:l,compareMode:s.value,hasImage:o.value,isWebGL:a.value,showingOriginal:r.value,imageWidth:u.value,imageHeight:c.value,currentCategory:p.value,currentPlugin:((z=_.value)==null?void 0:z.name)||"",onUpload:O,onToggleOriginal:D},null,8,["compareMode","hasImage","isWebGL","showingOriginal","imageWidth","imageHeight","currentCategory","currentPlugin"])])],2)}}},HS=Qs(zS,[["__scopeId","data-v-d0df6095"]]);Vp(HS).mount("#app");
