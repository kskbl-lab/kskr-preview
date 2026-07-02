(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vl(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const le={},Tr=[],kn=()=>{},xf=()=>!1,Ta=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Aa=n=>n.startsWith("onUpdate:"),Te=Object.assign,xl=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Dd=Object.prototype.hasOwnProperty,ne=(n,t)=>Dd.call(n,t),Ot=Array.isArray,Ar=n=>Ms(n)==="[object Map]",yf=n=>Ms(n)==="[object Set]",Yl=n=>Ms(n)==="[object Date]",Gt=n=>typeof n=="function",ve=n=>typeof n=="string",zn=n=>typeof n=="symbol",ie=n=>n!==null&&typeof n=="object",Mf=n=>(ie(n)||Gt(n))&&Gt(n.then)&&Gt(n.catch),bf=Object.prototype.toString,Ms=n=>bf.call(n),Ud=n=>Ms(n).slice(8,-1),Sf=n=>Ms(n)==="[object Object]",yl=n=>ve(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ns=vl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ca=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Nd=/-\w/g,qe=Ca(n=>n.replace(Nd,t=>t.slice(1).toUpperCase())),Od=/\B([A-Z])/g,nr=Ca(n=>n.replace(Od,"-$1").toLowerCase()),Ra=Ca(n=>n.charAt(0).toUpperCase()+n.slice(1)),Za=Ca(n=>n?`on${Ra(n)}`:""),Un=(n,t)=>!Object.is(n,t),ra=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Ef=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Ml=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Fd=n=>{const t=ve(n)?Number(n):NaN;return isNaN(t)?n:t};let Zl;const Pa=()=>Zl||(Zl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xn(n){if(Ot(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],r=ve(i)?Hd(i):xn(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(ve(n)||ie(n))return n}const kd=/;(?![^(]*\))/g,Bd=/:([^]+)/,zd=/\/\*[^]*?\*\//g;function Hd(n){const t={};return n.replace(zd,"").split(kd).forEach(e=>{if(e){const i=e.split(Bd);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function re(n){let t="";if(ve(n))t=n;else if(Ot(n))for(let e=0;e<n.length;e++){const i=re(n[e]);i&&(t+=i+" ")}else if(ie(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Gd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vd=vl(Gd);function wf(n){return!!n||n===""}function Wd(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=bl(n[i],t[i]);return e}function bl(n,t){if(n===t)return!0;let e=Yl(n),i=Yl(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=zn(n),i=zn(t),e||i)return n===t;if(e=Ot(n),i=Ot(t),e||i)return e&&i?Wd(n,t):!1;if(e=ie(n),i=ie(t),e||i){if(!e||!i)return!1;const r=Object.keys(n).length,s=Object.keys(t).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!bl(n[o],t[o]))return!1}}return String(n)===String(t)}const Tf=n=>!!(n&&n.__v_isRef===!0),Lt=n=>ve(n)?n:n==null?"":Ot(n)||ie(n)&&(n.toString===bf||!Gt(n.toString))?Tf(n)?Lt(n.value):JSON.stringify(n,Af,2):String(n),Af=(n,t)=>Tf(t)?Af(n,t.value):Ar(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,r],s)=>(e[Ka(i,s)+" =>"]=r,e),{})}:yf(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ka(e))}:zn(t)?Ka(t):ie(t)&&!Ot(t)&&!Sf(t)?String(t):t,Ka=(n,t="")=>{var e;return zn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Le;class Xd{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Le&&(Le.active?(this.parent=Le,this.index=(Le.scopes||(Le.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Le;try{return Le=this,t()}finally{Le=e}}}on(){++this._on===1&&(this.prevScope=Le,Le=this)}off(){if(this._on>0&&--this._on===0){if(Le===this)Le=this.prevScope;else{let t=Le;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function $d(){return Le}let he;const Ja=new WeakSet;class Cf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Le&&(Le.active?Le.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ja.has(this)&&(Ja.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Kl(this),If(this);const t=he,e=Mn;he=this,Mn=!0;try{return this.fn()}finally{Lf(this),he=t,Mn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)wl(t);this.deps=this.depsTail=void 0,Kl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ja.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$o(this)&&this.run()}get dirty(){return $o(this)}}let Rf=0,is,rs;function Pf(n,t=!1){if(n.flags|=8,t){n.next=rs,rs=n;return}n.next=is,is=n}function Sl(){Rf++}function El(){if(--Rf>0)return;if(rs){let t=rs;for(rs=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;is;){let t=is;for(is=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function If(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Lf(n){let t,e=n.depsTail,i=e;for(;i;){const r=i.prevDep;i.version===-1?(i===e&&(e=r),wl(i),qd(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=t,n.depsTail=e}function $o(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Df(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Df(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===fs)||(n.globalVersion=fs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!$o(n))))return;n.flags|=2;const t=n.dep,e=he,i=Mn;he=n,Mn=!0;try{If(n);const r=n.fn(n._value);(t.version===0||Un(r,n._value))&&(n.flags|=128,n._value=r,t.version++)}catch(r){throw t.version++,r}finally{he=e,Mn=i,Lf(n),n.flags&=-3}}function wl(n,t=!1){const{dep:e,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)wl(s,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function qd(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Mn=!0;const Uf=[];function ri(){Uf.push(Mn),Mn=!1}function si(){const n=Uf.pop();Mn=n===void 0?!0:n}function Kl(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=he;he=void 0;try{t()}finally{he=e}}}let fs=0;class jd{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Tl{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!he||!Mn||he===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==he)e=this.activeLink=new jd(he,this),he.deps?(e.prevDep=he.depsTail,he.depsTail.nextDep=e,he.depsTail=e):he.deps=he.depsTail=e,Nf(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=he.depsTail,e.nextDep=void 0,he.depsTail.nextDep=e,he.depsTail=e,he.deps===e&&(he.deps=i)}return e}trigger(t){this.version++,fs++,this.notify(t)}notify(t){Sl();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{El()}}}function Nf(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Nf(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const qo=new WeakMap,Zi=Symbol(""),jo=Symbol(""),hs=Symbol("");function Fe(n,t,e){if(Mn&&he){let i=qo.get(n);i||qo.set(n,i=new Map);let r=i.get(e);r||(i.set(e,r=new Tl),r.map=i,r.key=e),r.track()}}function Qn(n,t,e,i,r,s){const o=qo.get(n);if(!o){fs++;return}const a=l=>{l&&l.trigger()};if(Sl(),t==="clear")o.forEach(a);else{const l=Ot(n),u=l&&yl(e);if(l&&e==="length"){const c=Number(i);o.forEach((f,d)=>{(d==="length"||d===hs||!zn(d)&&d>=c)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),u&&a(o.get(hs)),t){case"add":l?u&&a(o.get("length")):(a(o.get(Zi)),Ar(n)&&a(o.get(jo)));break;case"delete":l||(a(o.get(Zi)),Ar(n)&&a(o.get(jo)));break;case"set":Ar(n)&&a(o.get(Zi));break}}El()}function rr(n){const t=te(n);return t===n?t:(Fe(t,"iterate",hs),hn(n)?t:t.map(Sn))}function Ia(n){return Fe(n=te(n),"iterate",hs),n}function In(n,t){return ai(n)?Dr(Ki(n)?Sn(t):t):Sn(t)}const Yd={__proto__:null,[Symbol.iterator](){return Qa(this,Symbol.iterator,n=>In(this,n))},concat(...n){return rr(this).concat(...n.map(t=>Ot(t)?rr(t):t))},entries(){return Qa(this,"entries",n=>(n[1]=In(this,n[1]),n))},every(n,t){return Gn(this,"every",n,t,void 0,arguments)},filter(n,t){return Gn(this,"filter",n,t,e=>e.map(i=>In(this,i)),arguments)},find(n,t){return Gn(this,"find",n,t,e=>In(this,e),arguments)},findIndex(n,t){return Gn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Gn(this,"findLast",n,t,e=>In(this,e),arguments)},findLastIndex(n,t){return Gn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Gn(this,"forEach",n,t,void 0,arguments)},includes(...n){return to(this,"includes",n)},indexOf(...n){return to(this,"indexOf",n)},join(n){return rr(this).join(n)},lastIndexOf(...n){return to(this,"lastIndexOf",n)},map(n,t){return Gn(this,"map",n,t,void 0,arguments)},pop(){return Vr(this,"pop")},push(...n){return Vr(this,"push",n)},reduce(n,...t){return Jl(this,"reduce",n,t)},reduceRight(n,...t){return Jl(this,"reduceRight",n,t)},shift(){return Vr(this,"shift")},some(n,t){return Gn(this,"some",n,t,void 0,arguments)},splice(...n){return Vr(this,"splice",n)},toReversed(){return rr(this).toReversed()},toSorted(n){return rr(this).toSorted(n)},toSpliced(...n){return rr(this).toSpliced(...n)},unshift(...n){return Vr(this,"unshift",n)},values(){return Qa(this,"values",n=>In(this,n))}};function Qa(n,t,e){const i=Ia(n),r=i[t]();return i!==n&&!hn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=e(s.value)),s}),r}const Zd=Array.prototype;function Gn(n,t,e,i,r,s){const o=Ia(n),a=o!==n&&!hn(n),l=o[t];if(l!==Zd[t]){const f=l.apply(n,s);return a?Sn(f):f}let u=e;o!==n&&(a?u=function(f,d){return e.call(this,In(n,f),d,n)}:e.length>2&&(u=function(f,d){return e.call(this,f,d,n)}));const c=l.call(o,u,i);return a&&r?r(c):c}function Jl(n,t,e,i){const r=Ia(n),s=r!==n&&!hn(n);let o=e,a=!1;r!==n&&(s?(a=i.length===0,o=function(u,c,f){return a&&(a=!1,u=In(n,u)),e.call(this,u,In(n,c),f,n)}):e.length>3&&(o=function(u,c,f){return e.call(this,u,c,f,n)}));const l=r[t](o,...i);return a?In(n,l):l}function to(n,t,e){const i=te(n);Fe(i,"iterate",hs);const r=i[t](...e);return(r===-1||r===!1)&&Rl(e[0])?(e[0]=te(e[0]),i[t](...e)):r}function Vr(n,t,e=[]){ri(),Sl();const i=te(n)[t].apply(n,e);return El(),si(),i}const Kd=vl("__proto__,__v_isRef,__isVue"),Of=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(zn));function Jd(n){zn(n)||(n=String(n));const t=te(this);return Fe(t,"has",n),t.hasOwnProperty(n)}class Ff{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const r=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return i===(r?s?lp:Hf:s?zf:Bf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Ot(t);if(!r){let l;if(o&&(l=Yd[e]))return l;if(e==="hasOwnProperty")return Jd}const a=Reflect.get(t,e,Be(t)?t:i);if((zn(e)?Of.has(e):Kd(e))||(r||Fe(t,"get",e),s))return a;if(Be(a)){const l=o&&yl(e)?a:a.value;return r&&ie(l)?Zo(l):l}return ie(a)?r?Zo(a):La(a):a}}class kf extends Ff{constructor(t=!1){super(!1,t)}set(t,e,i,r){let s=t[e];const o=Ot(t)&&yl(e);if(!this._isShallow){const u=ai(s);if(!hn(i)&&!ai(i)&&(s=te(s),i=te(i)),!o&&Be(s)&&!Be(i))return u||(s.value=i),!0}const a=o?Number(e)<t.length:ne(t,e),l=Reflect.set(t,e,i,Be(t)?t:r);return t===te(r)&&(a?Un(i,s)&&Qn(t,"set",e,i):Qn(t,"add",e,i)),l}deleteProperty(t,e){const i=ne(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&i&&Qn(t,"delete",e,void 0),r}has(t,e){const i=Reflect.has(t,e);return(!zn(e)||!Of.has(e))&&Fe(t,"has",e),i}ownKeys(t){return Fe(t,"iterate",Ot(t)?"length":Zi),Reflect.ownKeys(t)}}class Qd extends Ff{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const tp=new kf,ep=new Qd,np=new kf(!0);const Yo=n=>n,Is=n=>Reflect.getPrototypeOf(n);function ip(n,t,e){return function(...i){const r=this.__v_raw,s=te(r),o=Ar(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=r[n](...i),c=e?Yo:t?Dr:Sn;return!t&&Fe(s,"iterate",l?jo:Zi),Te(Object.create(u),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:a?[c(f[0]),c(f[1])]:c(f),done:d}}})}}function Ls(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function rp(n,t){const e={get(r){const s=this.__v_raw,o=te(s),a=te(r);n||(Un(r,a)&&Fe(o,"get",r),Fe(o,"get",a));const{has:l}=Is(o),u=t?Yo:n?Dr:Sn;if(l.call(o,r))return u(s.get(r));if(l.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Fe(te(r),"iterate",Zi),r.size},has(r){const s=this.__v_raw,o=te(s),a=te(r);return n||(Un(r,a)&&Fe(o,"has",r),Fe(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=te(a),u=t?Yo:n?Dr:Sn;return!n&&Fe(l,"iterate",Zi),a.forEach((c,f)=>r.call(s,u(c),u(f),o))}};return Te(e,n?{add:Ls("add"),set:Ls("set"),delete:Ls("delete"),clear:Ls("clear")}:{add(r){const s=te(this),o=Is(s),a=te(r),l=!t&&!hn(r)&&!ai(r)?a:r;return o.has.call(s,l)||Un(r,l)&&o.has.call(s,r)||Un(a,l)&&o.has.call(s,a)||(s.add(l),Qn(s,"add",l,l)),this},set(r,s){!t&&!hn(s)&&!ai(s)&&(s=te(s));const o=te(this),{has:a,get:l}=Is(o);let u=a.call(o,r);u||(r=te(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,s),u?Un(s,c)&&Qn(o,"set",r,s):Qn(o,"add",r,s),this},delete(r){const s=te(this),{has:o,get:a}=Is(s);let l=o.call(s,r);l||(r=te(r),l=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return l&&Qn(s,"delete",r,void 0),u},clear(){const r=te(this),s=r.size!==0,o=r.clear();return s&&Qn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=ip(r,n,t)}),e}function Al(n,t){const e=rp(n,t);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ne(e,r)&&r in i?e:i,r,s)}const sp={get:Al(!1,!1)},ap={get:Al(!1,!0)},op={get:Al(!0,!1)};const Bf=new WeakMap,zf=new WeakMap,Hf=new WeakMap,lp=new WeakMap;function cp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function up(n){return n.__v_skip||!Object.isExtensible(n)?0:cp(Ud(n))}function La(n){return ai(n)?n:Cl(n,!1,tp,sp,Bf)}function Gf(n){return Cl(n,!1,np,ap,zf)}function Zo(n){return Cl(n,!0,ep,op,Hf)}function Cl(n,t,e,i,r){if(!ie(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const s=up(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:e);return r.set(n,a),a}function Ki(n){return ai(n)?Ki(n.__v_raw):!!(n&&n.__v_isReactive)}function ai(n){return!!(n&&n.__v_isReadonly)}function hn(n){return!!(n&&n.__v_isShallow)}function Rl(n){return n?!!n.__v_raw:!1}function te(n){const t=n&&n.__v_raw;return t?te(t):n}function fp(n){return!ne(n,"__v_skip")&&Object.isExtensible(n)&&Ef(n,"__v_skip",!0),n}const Sn=n=>ie(n)?La(n):n,Dr=n=>ie(n)?Zo(n):n;function Be(n){return n?n.__v_isRef===!0:!1}function $t(n){return Vf(n,!1)}function hp(n){return Vf(n,!0)}function Vf(n,t){return Be(n)?n:new dp(n,t)}class dp{constructor(t,e){this.dep=new Tl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:te(t),this._value=e?t:Sn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||hn(t)||ai(t);t=i?t:te(t),Un(t,e)&&(this._rawValue=t,this._value=i?t:Sn(t),this.dep.trigger())}}function yn(n){return Be(n)?n.value:n}const pp={get:(n,t,e)=>t==="__v_raw"?n:yn(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const r=n[t];return Be(r)&&!Be(e)?(r.value=e,!0):Reflect.set(n,t,e,i)}};function Wf(n){return Ki(n)?n:new Proxy(n,pp)}class mp{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Tl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=fs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&he!==this)return Pf(this,!0),!0}get value(){const t=this.dep.track();return Df(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function gp(n,t,e=!1){let i,r;return Gt(n)?i=n:(i=n.get,r=n.set),new mp(i,r,e)}const Ds={},ua=new WeakMap;let Gi;function _p(n,t=!1,e=Gi){if(e){let i=ua.get(e);i||ua.set(e,i=[]),i.push(n)}}function vp(n,t,e=le){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=e,u=S=>r?S:hn(S)||r===!1||r===0?ti(S,1):ti(S);let c,f,d,p,x=!1,g=!1;if(Be(n)?(f=()=>n.value,x=hn(n)):Ki(n)?(f=()=>u(n),x=!0):Ot(n)?(g=!0,x=n.some(S=>Ki(S)||hn(S)),f=()=>n.map(S=>{if(Be(S))return S.value;if(Ki(S))return u(S);if(Gt(S))return l?l(S,2):S()})):Gt(n)?t?f=l?()=>l(n,2):n:f=()=>{if(d){ri();try{d()}finally{si()}}const S=Gi;Gi=c;try{return l?l(n,3,[p]):n(p)}finally{Gi=S}}:f=kn,t&&r){const S=f,w=r===!0?1/0:r;f=()=>ti(S(),w)}const m=$d(),h=()=>{c.stop(),m&&m.active&&xl(m.effects,c)};if(s&&t){const S=t;t=(...w)=>{S(...w),h()}}let y=g?new Array(n.length).fill(Ds):Ds;const v=S=>{if(!(!(c.flags&1)||!c.dirty&&!S))if(t){const w=c.run();if(r||x||(g?w.some((L,C)=>Un(L,y[C])):Un(w,y))){d&&d();const L=Gi;Gi=c;try{const C=[w,y===Ds?void 0:g&&y[0]===Ds?[]:y,p];y=w,l?l(t,3,C):t(...C)}finally{Gi=L}}}else c.run()};return a&&a(v),c=new Cf(f),c.scheduler=o?()=>o(v,!1):v,p=S=>_p(S,!1,c),d=c.onStop=()=>{const S=ua.get(c);if(S){if(l)l(S,4);else for(const w of S)w();ua.delete(c)}},t?i?v(!0):y=c.run():o?o(v.bind(null,!0),!0):c.run(),h.pause=c.pause.bind(c),h.resume=c.resume.bind(c),h.stop=h,h}function ti(n,t=1/0,e){if(t<=0||!ie(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Be(n))ti(n.value,t,e);else if(Ot(n))for(let i=0;i<n.length;i++)ti(n[i],t,e);else if(yf(n)||Ar(n))n.forEach(i=>{ti(i,t,e)});else if(Sf(n)){for(const i in n)ti(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ti(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bs(n,t,e,i){try{return i?n(...i):n()}catch(r){Da(r,t,e)}}function En(n,t,e,i){if(Gt(n)){const r=bs(n,t,e,i);return r&&Mf(r)&&r.catch(s=>{Da(s,t,e)}),r}if(Ot(n)){const r=[];for(let s=0;s<n.length;s++)r.push(En(n[s],t,e,i));return r}}function Da(n,t,e,i=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||le;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}a=a.parent}if(s){ri(),bs(s,null,10,[n,l,u]),si();return}}xp(n,e,r,i,o)}function xp(n,t,e,i=!0,r=!1){if(r)throw n;console.error(n)}const Xe=[];let Cn=-1;const Cr=[];let xi=null,Mr=0;const Xf=Promise.resolve();let fa=null;function Ke(n){const t=fa||Xf;return n?t.then(this?n.bind(this):n):t}function yp(n){let t=Cn+1,e=Xe.length;for(;t<e;){const i=t+e>>>1,r=Xe[i],s=ds(r);s<n||s===n&&r.flags&2?t=i+1:e=i}return t}function Pl(n){if(!(n.flags&1)){const t=ds(n),e=Xe[Xe.length-1];!e||!(n.flags&2)&&t>=ds(e)?Xe.push(n):Xe.splice(yp(t),0,n),n.flags|=1,$f()}}function $f(){fa||(fa=Xf.then(jf))}function Mp(n){Ot(n)?Cr.push(...n):xi&&n.id===-1?xi.splice(Mr+1,0,n):n.flags&1||(Cr.push(n),n.flags|=1),$f()}function Ql(n,t,e=Cn+1){for(;e<Xe.length;e++){const i=Xe[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Xe.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function qf(n){if(Cr.length){const t=[...new Set(Cr)].sort((e,i)=>ds(e)-ds(i));if(Cr.length=0,xi){xi.push(...t);return}for(xi=t,Mr=0;Mr<xi.length;Mr++){const e=xi[Mr];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}xi=null,Mr=0}}const ds=n=>n.id==null?n.flags&2?-1:1/0:n.id;function jf(n){try{for(Cn=0;Cn<Xe.length;Cn++){const t=Xe[Cn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),bs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Cn<Xe.length;Cn++){const t=Xe[Cn];t&&(t.flags&=-2)}Cn=-1,Xe.length=0,qf(),fa=null,(Xe.length||Cr.length)&&jf()}}let sn=null,Yf=null;function ha(n){const t=sn;return sn=n,Yf=n&&n.type.__scopeId||null,t}function Zf(n,t=sn,e){if(!t||n._n)return n;const i=(...r)=>{i._d&&ma(-1);const s=ha(t);let o;try{o=n(...r)}finally{ha(s),i._d&&ma(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ps(n,t){if(sn===null)return n;const e=Ba(sn),i=n.dirs||(n.dirs=[]);for(let r=0;r<t.length;r++){let[s,o,a,l=le]=t[r];s&&(Gt(s)&&(s={mounted:s,updated:s}),s.deep&&ti(o),i.push({dir:s,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Li(n,t,e,i){const r=n.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ri(),En(l,e,8,[n.el,a,n,t]),si())}}function sa(n,t){if(ke){let e=ke.provides;const i=ke.parent&&ke.parent.provides;i===e&&(e=ke.provides=Object.create(i)),e[n]=t}}function bn(n,t,e=!1){const i=Rh();if(i||Pr){let r=Pr?Pr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return e&&Gt(t)?t.call(i&&i.proxy):t}}const bp=Symbol.for("v-scx"),Sp=()=>bn(bp);function Rr(n,t,e){return Kf(n,t,e)}function Kf(n,t,e=le){const{immediate:i,deep:r,flush:s,once:o}=e,a=Te({},e),l=t&&i||!t&&s!=="post";let u;if(_s){if(s==="sync"){const p=Sp();u=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=kn,p.resume=kn,p.pause=kn,p}}const c=ke;a.call=(p,x,g)=>En(p,c,x,g);let f=!1;s==="post"?a.scheduler=p=>{Ze(p,c&&c.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,x)=>{x?p():Pl(p)}),a.augmentJob=p=>{t&&(p.flags|=4),f&&(p.flags|=2,c&&(p.id=c.uid,p.i=c))};const d=vp(n,t,a);return _s&&(u?u.push(d):l&&d()),d}function Ep(n,t,e){const i=this.proxy,r=ve(n)?n.includes(".")?Jf(i,n):()=>i[n]:n.bind(i,i);let s;Gt(t)?s=t:(s=t.handler,e=t);const o=Ss(this),a=Kf(r,s.bind(i),e);return o(),a}function Jf(n,t){const e=t.split(".");return()=>{let i=n;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}const wp=Symbol("_vte"),Qf=n=>n.__isTeleport,Rn=Symbol("_leaveCb"),Wr=Symbol("_enterCb");function Tp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Il(()=>{n.isMounted=!0}),Oa(()=>{n.isUnmounting=!0}),n}const un=[Function,Array],th={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:un,onEnter:un,onAfterEnter:un,onEnterCancelled:un,onBeforeLeave:un,onLeave:un,onAfterLeave:un,onLeaveCancelled:un,onBeforeAppear:un,onAppear:un,onAfterAppear:un,onAppearCancelled:un},eh=n=>{const t=n.subTree;return t.component?eh(t.component):t},Ap={name:"BaseTransition",props:th,setup(n,{slots:t}){const e=Rh(),i=Tp();return()=>{const r=t.default&&rh(t.default(),!0),s=r&&r.length?nh(r):e.subTree?Ht():void 0;if(!s)return;const o=te(n),{mode:a}=o;if(i.isLeaving)return eo(s);const l=tc(s);if(!l)return eo(s);let u=Ko(l,o,i,e,f=>u=f);l.type!==$e&&ms(l,u);let c=e.subTree&&tc(e.subTree);if(c&&c.type!==$e&&!Xi(c,l)&&eh(e).type!==$e){let f=Ko(c,o,i,e);if(ms(c,f),a==="out-in"&&l.type!==$e)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete f.afterLeave,c=void 0},eo(s);a==="in-out"&&l.type!==$e?f.delayLeave=(d,p,x)=>{const g=ih(i,c);g[String(c.key)]=c,d[Rn]=()=>{p(),d[Rn]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{x(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function nh(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==$e){t=e;break}}return t}const Cp=Ap;function ih(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function Ko(n,t,e,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:x,onLeaveCancelled:g,onBeforeAppear:m,onAppear:h,onAfterAppear:y,onAppearCancelled:v}=t,S=String(n.key),w=ih(e,n),L=(G,T)=>{G&&En(G,i,9,T)},C=(G,T)=>{const N=T[1];L(G,T),Ot(G)?G.every(I=>I.length<=1)&&N():G.length<=1&&N()},z={mode:o,persisted:a,beforeEnter(G){let T=l;if(!e.isMounted)if(s)T=m||l;else return;G[Rn]&&G[Rn](!0);const N=w[S];N&&Xi(n,N)&&N.el[Rn]&&N.el[Rn](),L(T,[G])},enter(G){if(w[S]===n)return;let T=u,N=c,I=f;if(!e.isMounted)if(s)T=h||u,N=y||c,I=v||f;else return;let F=!1;G[Wr]=q=>{F||(F=!0,q?L(I,[G]):L(N,[G]),z.delayedLeave&&z.delayedLeave(),G[Wr]=void 0)};const b=G[Wr].bind(null,!1);T?C(T,[G,b]):b()},leave(G,T){const N=String(n.key);if(G[Wr]&&G[Wr](!0),e.isUnmounting)return T();L(d,[G]);let I=!1;G[Rn]=b=>{I||(I=!0,T(),b?L(g,[G]):L(x,[G]),G[Rn]=void 0,w[N]===n&&delete w[N])};const F=G[Rn].bind(null,!1);w[N]=n,p?C(p,[G,F]):F()},clone(G){const T=Ko(G,t,e,i,r);return r&&r(T),T}};return z}function eo(n){if(Ua(n))return n=Ti(n),n.children=null,n}function tc(n){if(!Ua(n))return Qf(n.type)&&n.children?nh(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Gt(e.default))return e.default()}}function ms(n,t){n.shapeFlag&6&&n.component?(n.transition=t,ms(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function rh(n,t=!1,e){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:s);o.type===_e?(o.patchFlag&128&&r++,i=i.concat(rh(o.children,t,a))):(t||o.type!==$e)&&i.push(a!=null?Ti(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function sh(n,t){return Gt(n)?Te({name:n.name},t,{setup:n}):n}function ah(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ec(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const da=new WeakMap;function ss(n,t,e,i,r=!1){if(Ot(n)){n.forEach((g,m)=>ss(g,t&&(Ot(t)?t[m]:t),e,i,r));return}if(as(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ss(n,t,e,i.component.subTree);return}const s=i.shapeFlag&4?Ba(i.component):i.el,o=r?null:s,{i:a,r:l}=n,u=t&&t.r,c=a.refs===le?a.refs={}:a.refs,f=a.setupState,d=te(f),p=f===le?xf:g=>ec(c,g)?!1:ne(d,g),x=(g,m)=>!(m&&ec(c,m));if(u!=null&&u!==l){if(nc(t),ve(u))c[u]=null,p(u)&&(f[u]=null);else if(Be(u)){const g=t;x(u,g.k)&&(u.value=null),g.k&&(c[g.k]=null)}}if(Gt(l))bs(l,a,12,[o,c]);else{const g=ve(l),m=Be(l);if(g||m){const h=()=>{if(n.f){const y=g?p(l)?f[l]:c[l]:x()||!n.k?l.value:c[n.k];if(r)Ot(y)&&xl(y,s);else if(Ot(y))y.includes(s)||y.push(s);else if(g)c[l]=[s],p(l)&&(f[l]=c[l]);else{const v=[s];x(l,n.k)&&(l.value=v),n.k&&(c[n.k]=v)}}else g?(c[l]=o,p(l)&&(f[l]=o)):m&&(x(l,n.k)&&(l.value=o),n.k&&(c[n.k]=o))};if(o){const y=()=>{h(),da.delete(n)};y.id=-1,da.set(n,y),Ze(y,e)}else nc(n),h()}}}function nc(n){const t=da.get(n);t&&(t.flags|=8,da.delete(n))}Pa().requestIdleCallback;Pa().cancelIdleCallback;const as=n=>!!n.type.__asyncLoader,Ua=n=>n.type.__isKeepAlive;function Rp(n,t){oh(n,"a",t)}function Pp(n,t){oh(n,"da",t)}function oh(n,t,e=ke){const i=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Na(t,i,e),e){let r=e.parent;for(;r&&r.parent;)Ua(r.parent.vnode)&&Ip(i,t,e,r),r=r.parent}}function Ip(n,t,e,i){const r=Na(t,n,i,!0);lh(()=>{xl(i[t],r)},e)}function Na(n,t,e=ke,i=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...o)=>{ri();const a=Ss(e),l=En(t,e,n,o);return a(),si(),l});return i?r.unshift(s):r.push(s),s}}const ui=n=>(t,e=ke)=>{(!_s||n==="sp")&&Na(n,(...i)=>t(...i),e)},Lp=ui("bm"),Il=ui("m"),Dp=ui("bu"),Up=ui("u"),Oa=ui("bum"),lh=ui("um"),Np=ui("sp"),Op=ui("rtg"),Fp=ui("rtc");function kp(n,t=ke){Na("ec",n,t)}const Bp="components";function zp(n,t){return Gp(Bp,n,!0,t)||n}const Hp=Symbol.for("v-ndc");function Gp(n,t,e=!0,i=!1){const r=sn||ke;if(r){const s=r.type;{const a=Tm(s,!1);if(a&&(a===t||a===qe(t)||a===Ra(qe(t))))return s}const o=ic(r[n]||s[n],t)||ic(r.appContext[n],t);return!o&&i?s:o}}function ic(n,t){return n&&(n[t]||n[qe(t)]||n[Ra(qe(t))])}function oi(n,t,e,i){let r;const s=e,o=Ot(n);if(o||ve(n)){const a=o&&Ki(n);let l=!1,u=!1;a&&(l=!hn(n),u=ai(n),n=Ia(n)),r=new Array(n.length);for(let c=0,f=n.length;c<f;c++)r[c]=t(l?u?Dr(Sn(n[c])):Sn(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=t(a+1,a,void 0,s)}else if(ie(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=t(n[c],c,l,s)}}else r=[];return r}const Jo=n=>n?Ph(n)?Ba(n):Jo(n.parent):null,os=Te(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Jo(n.parent),$root:n=>Jo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>uh(n),$forceUpdate:n=>n.f||(n.f=()=>{Pl(n.update)}),$nextTick:n=>n.n||(n.n=Ke.bind(n.proxy)),$watch:n=>Ep.bind(n)}),no=(n,t)=>n!==le&&!n.__isScriptSetup&&ne(n,t),Vp={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(no(i,t))return o[t]=1,i[t];if(r!==le&&ne(r,t))return o[t]=2,r[t];if(ne(s,t))return o[t]=3,s[t];if(e!==le&&ne(e,t))return o[t]=4,e[t];Qo&&(o[t]=0)}}const u=os[t];let c,f;if(u)return t==="$attrs"&&Fe(n.attrs,"get",""),u(n);if((c=a.__cssModules)&&(c=c[t]))return c;if(e!==le&&ne(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,ne(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:r,ctx:s}=n;return no(r,t)?(r[t]=e,!0):i!==le&&ne(i,t)?(i[t]=e,!0):ne(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(e[a]||n!==le&&a[0]!=="$"&&ne(n,a)||no(t,a)||ne(s,a)||ne(i,a)||ne(os,a)||ne(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ne(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function rc(n){return Ot(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Qo=!0;function Wp(n){const t=uh(n),e=n.proxy,i=n.ctx;Qo=!1,t.beforeCreate&&sc(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:d,beforeUpdate:p,updated:x,activated:g,deactivated:m,beforeDestroy:h,beforeUnmount:y,destroyed:v,unmounted:S,render:w,renderTracked:L,renderTriggered:C,errorCaptured:z,serverPrefetch:G,expose:T,inheritAttrs:N,components:I,directives:F,filters:b}=t;if(u&&Xp(u,i,null),o)for(const K in o){const at=o[K];Gt(at)&&(i[K]=at.bind(e))}if(r){const K=r.call(e,e);ie(K)&&(n.data=La(K))}if(Qo=!0,s)for(const K in s){const at=s[K],nt=Gt(at)?at.bind(e,e):Gt(at.get)?at.get.bind(e,e):kn,ct=!Gt(at)&&Gt(at.set)?at.set.bind(e):kn,Q=ae({get:nt,set:ct});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>Q.value,set:Z=>Q.value=Z})}if(a)for(const K in a)ch(a[K],i,e,K);if(l){const K=Gt(l)?l.call(e):l;Reflect.ownKeys(K).forEach(at=>{sa(at,K[at])})}c&&sc(c,n,"c");function W(K,at){Ot(at)?at.forEach(nt=>K(nt.bind(e))):at&&K(at.bind(e))}if(W(Lp,f),W(Il,d),W(Dp,p),W(Up,x),W(Rp,g),W(Pp,m),W(kp,z),W(Fp,L),W(Op,C),W(Oa,y),W(lh,S),W(Np,G),Ot(T))if(T.length){const K=n.exposed||(n.exposed={});T.forEach(at=>{Object.defineProperty(K,at,{get:()=>e[at],set:nt=>e[at]=nt,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===kn&&(n.render=w),N!=null&&(n.inheritAttrs=N),I&&(n.components=I),F&&(n.directives=F),G&&ah(n)}function Xp(n,t,e=kn){Ot(n)&&(n=tl(n));for(const i in n){const r=n[i];let s;ie(r)?"default"in r?s=bn(r.from||i,r.default,!0):s=bn(r.from||i):s=bn(r),Be(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function sc(n,t,e){En(Ot(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function ch(n,t,e,i){let r=i.includes(".")?Jf(e,i):()=>e[i];if(ve(n)){const s=t[n];Gt(s)&&Rr(r,s)}else if(Gt(n))Rr(r,n.bind(e));else if(ie(n))if(Ot(n))n.forEach(s=>ch(s,t,e,i));else{const s=Gt(n.handler)?n.handler.bind(e):t[n.handler];Gt(s)&&Rr(r,s,n)}}function uh(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(u=>pa(l,u,o,!0)),pa(l,t,o)),ie(t)&&s.set(t,l),l}function pa(n,t,e,i=!1){const{mixins:r,extends:s}=t;s&&pa(n,s,e,!0),r&&r.forEach(o=>pa(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=$p[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const $p={data:ac,props:oc,emits:oc,methods:ts,computed:ts,beforeCreate:He,created:He,beforeMount:He,mounted:He,beforeUpdate:He,updated:He,beforeDestroy:He,beforeUnmount:He,destroyed:He,unmounted:He,activated:He,deactivated:He,errorCaptured:He,serverPrefetch:He,components:ts,directives:ts,watch:jp,provide:ac,inject:qp};function ac(n,t){return t?n?function(){return Te(Gt(n)?n.call(this,this):n,Gt(t)?t.call(this,this):t)}:t:n}function qp(n,t){return ts(tl(n),tl(t))}function tl(n){if(Ot(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function He(n,t){return n?[...new Set([].concat(n,t))]:t}function ts(n,t){return n?Te(Object.create(null),n,t):t}function oc(n,t){return n?Ot(n)&&Ot(t)?[...new Set([...n,...t])]:Te(Object.create(null),rc(n),rc(t??{})):t}function jp(n,t){if(!n)return t;if(!t)return n;const e=Te(Object.create(null),n);for(const i in t)e[i]=He(n[i],t[i]);return e}function fh(){return{app:null,config:{isNativeTag:xf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yp=0;function Zp(n,t){return function(i,r=null){Gt(i)||(i=Te({},i)),r!=null&&!ie(r)&&(r=null);const s=fh(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:Yp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Cm,get config(){return s.config},set config(c){},use(c,...f){return o.has(c)||(c&&Gt(c.install)?(o.add(c),c.install(u,...f)):Gt(c)&&(o.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,d){if(!l){const p=u._ceVNode||Ee(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(p,c,d),l=!0,u._container=c,c.__vue_app__=u,Ba(p.component)}},onUnmount(c){a.push(c)},unmount(){l&&(En(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=Pr;Pr=u;try{return c()}finally{Pr=f}}};return u}}let Pr=null;const Kp=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${qe(t)}Modifiers`]||n[`${nr(t)}Modifiers`];function Jp(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||le;let r=e;const s=t.startsWith("update:"),o=s&&Kp(i,t.slice(7));o&&(o.trim&&(r=e.map(c=>ve(c)?c.trim():c)),o.number&&(r=e.map(Ml)));let a,l=i[a=Za(t)]||i[a=Za(qe(t))];!l&&s&&(l=i[a=Za(nr(t))]),l&&En(l,n,6,r);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,En(u,n,6,r)}}const Qp=new WeakMap;function hh(n,t,e=!1){const i=e?Qp:t.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Gt(n)){const l=u=>{const c=hh(u,t,!0);c&&(a=!0,Te(o,c))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ie(n)&&i.set(n,null),null):(Ot(s)?s.forEach(l=>o[l]=null):Te(o,s),ie(n)&&i.set(n,o),o)}function Fa(n,t){return!n||!Ta(t)?!1:(t=t.slice(2).replace(/Once$/,""),ne(n,t[0].toLowerCase()+t.slice(1))||ne(n,nr(t))||ne(n,t))}function lc(n){const{type:t,vnode:e,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:d,setupState:p,ctx:x,inheritAttrs:g}=n,m=ha(n);let h,y;try{if(e.shapeFlag&4){const S=r||i,w=S;h=Ln(u.call(w,S,c,f,p,d,x)),y=a}else{const S=t;h=Ln(S.length>1?S(f,{attrs:a,slots:o,emit:l}):S(f,null)),y=t.props?a:tm(a)}}catch(S){ls.length=0,Da(S,n,1),h=Ee($e)}let v=h;if(y&&g!==!1){const S=Object.keys(y),{shapeFlag:w}=v;S.length&&w&7&&(s&&S.some(Aa)&&(y=em(y,s)),v=Ti(v,y,!1,!0))}return e.dirs&&(v=Ti(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(e.dirs):e.dirs),e.transition&&ms(v,e.transition),h=v,ha(m),h}const tm=n=>{let t;for(const e in n)(e==="class"||e==="style"||Ta(e))&&((t||(t={}))[e]=n[e]);return t},em=(n,t)=>{const e={};for(const i in n)(!Aa(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function nm(n,t,e){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?cc(i,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const d=c[f];if(dh(o,i,d)&&!Fa(u,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?cc(i,o,u):!0:!!o;return!1}function cc(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(dh(t,n,s)&&!Fa(e,s))return!0}return!1}function dh(n,t,e){const i=n[e],r=t[e];return e==="style"&&ie(i)&&ie(r)?!bl(i,r):i!==r}function im({vnode:n,parent:t,suspense:e},i){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const ph={},mh=()=>Object.create(ph),gh=n=>Object.getPrototypeOf(n)===ph;function rm(n,t,e,i=!1){const r={},s=mh();n.propsDefaults=Object.create(null),_h(n,t,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);e?n.props=i?r:Gf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function sm(n,t,e,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=te(r),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let d=c[f];if(Fa(n.emitsOptions,d))continue;const p=t[d];if(l)if(ne(s,d))p!==s[d]&&(s[d]=p,u=!0);else{const x=qe(d);r[x]=el(l,a,x,p,n,!1)}else p!==s[d]&&(s[d]=p,u=!0)}}}else{_h(n,t,r,s)&&(u=!0);let c;for(const f in a)(!t||!ne(t,f)&&((c=nr(f))===f||!ne(t,c)))&&(l?e&&(e[f]!==void 0||e[c]!==void 0)&&(r[f]=el(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!t||!ne(t,f))&&(delete s[f],u=!0)}u&&Qn(n.attrs,"set","")}function _h(n,t,e,i){const[r,s]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(ns(l))continue;const u=t[l];let c;r&&ne(r,c=qe(l))?!s||!s.includes(c)?e[c]=u:(a||(a={}))[c]=u:Fa(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=te(e),u=a||le;for(let c=0;c<s.length;c++){const f=s[c];e[f]=el(r,l,f,u[f],n,!ne(u,f))}}return o}function el(n,t,e,i,r,s){const o=n[e];if(o!=null){const a=ne(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Gt(l)){const{propsDefaults:u}=r;if(e in u)i=u[e];else{const c=Ss(r);i=u[e]=l.call(null,t),c()}}else i=l;r.ce&&r.ce._setProp(e,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===nr(e))&&(i=!0))}return i}const am=new WeakMap;function vh(n,t,e=!1){const i=e?am:t.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Gt(n)){const c=f=>{l=!0;const[d,p]=vh(f,t,!0);Te(o,d),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!s&&!l)return ie(n)&&i.set(n,Tr),Tr;if(Ot(s))for(let c=0;c<s.length;c++){const f=qe(s[c]);uc(f)&&(o[f]=le)}else if(s)for(const c in s){const f=qe(c);if(uc(f)){const d=s[c],p=o[f]=Ot(d)||Gt(d)?{type:d}:Te({},d),x=p.type;let g=!1,m=!0;if(Ot(x))for(let h=0;h<x.length;++h){const y=x[h],v=Gt(y)&&y.name;if(v==="Boolean"){g=!0;break}else v==="String"&&(m=!1)}else g=Gt(x)&&x.name==="Boolean";p[0]=g,p[1]=m,(g||ne(p,"default"))&&a.push(f)}}const u=[o,a];return ie(n)&&i.set(n,u),u}function uc(n){return n[0]!=="$"&&!ns(n)}const Ll=n=>n==="_"||n==="_ctx"||n==="$stable",Dl=n=>Ot(n)?n.map(Ln):[Ln(n)],om=(n,t,e)=>{if(t._n)return t;const i=Zf((...r)=>Dl(t(...r)),e);return i._c=!1,i},xh=(n,t,e)=>{const i=n._ctx;for(const r in n){if(Ll(r))continue;const s=n[r];if(Gt(s))t[r]=om(r,s,i);else if(s!=null){const o=Dl(s);t[r]=()=>o}}},yh=(n,t)=>{const e=Dl(t);n.slots.default=()=>e},Mh=(n,t,e)=>{for(const i in t)(e||!Ll(i))&&(n[i]=t[i])},lm=(n,t,e)=>{const i=n.slots=mh();if(n.vnode.shapeFlag&32){const r=t._;r?(Mh(i,t,e),e&&Ef(i,"_",r,!0)):xh(t,i)}else t&&yh(n,t)},cm=(n,t,e)=>{const{vnode:i,slots:r}=n;let s=!0,o=le;if(i.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:Mh(r,t,e):(s=!t.$stable,xh(t,r)),o=t}else t&&(yh(n,t),o={default:1});if(s)for(const a in r)!Ll(a)&&o[a]==null&&delete r[a]},Ze=pm;function um(n){return fm(n)}function fm(n,t){const e=Pa();e.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:d,setScopeId:p=kn,insertStaticContent:x}=n,g=(M,D,_,O=null,k=null,R=null,P=void 0,B=null,Y=!!D.dynamicChildren)=>{if(M===D)return;M&&!Xi(M,D)&&(O=H(M),Z(M,k,R,!0),M=null),D.patchFlag===-2&&(Y=!1,D.dynamicChildren=null);const{type:A,ref:E,shapeFlag:X}=D;switch(A){case ka:m(M,D,_,O);break;case $e:h(M,D,_,O);break;case aa:M==null&&y(D,_,O,P);break;case _e:I(M,D,_,O,k,R,P,B,Y);break;default:X&1?w(M,D,_,O,k,R,P,B,Y):X&6?F(M,D,_,O,k,R,P,B,Y):(X&64||X&128)&&A.process(M,D,_,O,k,R,P,B,Y,dt)}E!=null&&k?ss(E,M&&M.ref,R,D||M,!D):E==null&&M&&M.ref!=null&&ss(M.ref,null,R,M,!0)},m=(M,D,_,O)=>{if(M==null)i(D.el=a(D.children),_,O);else{const k=D.el=M.el;D.children!==M.children&&u(k,D.children)}},h=(M,D,_,O)=>{M==null?i(D.el=l(D.children||""),_,O):D.el=M.el},y=(M,D,_,O)=>{[M.el,M.anchor]=x(M.children,D,_,O,M.el,M.anchor)},v=({el:M,anchor:D},_,O)=>{let k;for(;M&&M!==D;)k=d(M),i(M,_,O),M=k;i(D,_,O)},S=({el:M,anchor:D})=>{let _;for(;M&&M!==D;)_=d(M),r(M),M=_;r(D)},w=(M,D,_,O,k,R,P,B,Y)=>{if(D.type==="svg"?P="svg":D.type==="math"&&(P="mathml"),M==null)L(D,_,O,k,R,P,B,Y);else{const A=M.el&&M.el._isVueCE?M.el:null;try{A&&A._beginPatch(),G(M,D,k,R,P,B,Y)}finally{A&&A._endPatch()}}},L=(M,D,_,O,k,R,P,B)=>{let Y,A;const{props:E,shapeFlag:X,transition:tt,dirs:et}=M;if(Y=M.el=o(M.type,R,E&&E.is,E),X&8?c(Y,M.children):X&16&&z(M.children,Y,null,O,k,io(M,R),P,B),et&&Li(M,null,O,"created"),C(Y,M,M.scopeId,P,O),E){for(const bt in E)bt!=="value"&&!ns(bt)&&s(Y,bt,null,E[bt],R,O);"value"in E&&s(Y,"value",null,E.value,R),(A=E.onVnodeBeforeMount)&&An(A,O,M)}et&&Li(M,null,O,"beforeMount");const ot=hm(k,tt);ot&&tt.beforeEnter(Y),i(Y,D,_),((A=E&&E.onVnodeMounted)||ot||et)&&Ze(()=>{try{A&&An(A,O,M),ot&&tt.enter(Y),et&&Li(M,null,O,"mounted")}finally{}},k)},C=(M,D,_,O,k)=>{if(_&&p(M,_),O)for(let R=0;R<O.length;R++)p(M,O[R]);if(k){let R=k.subTree;if(D===R||wh(R.type)&&(R.ssContent===D||R.ssFallback===D)){const P=k.vnode;C(M,P,P.scopeId,P.slotScopeIds,k.parent)}}},z=(M,D,_,O,k,R,P,B,Y=0)=>{for(let A=Y;A<M.length;A++){const E=M[A]=B?Jn(M[A]):Ln(M[A]);g(null,E,D,_,O,k,R,P,B)}},G=(M,D,_,O,k,R,P)=>{const B=D.el=M.el;let{patchFlag:Y,dynamicChildren:A,dirs:E}=D;Y|=M.patchFlag&16;const X=M.props||le,tt=D.props||le;let et;if(_&&Di(_,!1),(et=tt.onVnodeBeforeUpdate)&&An(et,_,D,M),E&&Li(D,M,_,"beforeUpdate"),_&&Di(_,!0),(X.innerHTML&&tt.innerHTML==null||X.textContent&&tt.textContent==null)&&c(B,""),A?T(M.dynamicChildren,A,B,_,O,io(D,k),R):P||at(M,D,B,null,_,O,io(D,k),R,!1),Y>0){if(Y&16)N(B,X,tt,_,k);else if(Y&2&&X.class!==tt.class&&s(B,"class",null,tt.class,k),Y&4&&s(B,"style",X.style,tt.style,k),Y&8){const ot=D.dynamicProps;for(let bt=0;bt<ot.length;bt++){const xt=ot[bt],vt=X[xt],Mt=tt[xt];(Mt!==vt||xt==="value")&&s(B,xt,vt,Mt,k,_)}}Y&1&&M.children!==D.children&&c(B,D.children)}else!P&&A==null&&N(B,X,tt,_,k);((et=tt.onVnodeUpdated)||E)&&Ze(()=>{et&&An(et,_,D,M),E&&Li(D,M,_,"updated")},O)},T=(M,D,_,O,k,R,P)=>{for(let B=0;B<D.length;B++){const Y=M[B],A=D[B],E=Y.el&&(Y.type===_e||!Xi(Y,A)||Y.shapeFlag&198)?f(Y.el):_;g(Y,A,E,null,O,k,R,P,!0)}},N=(M,D,_,O,k)=>{if(D!==_){if(D!==le)for(const R in D)!ns(R)&&!(R in _)&&s(M,R,D[R],null,k,O);for(const R in _){if(ns(R))continue;const P=_[R],B=D[R];P!==B&&R!=="value"&&s(M,R,B,P,k,O)}"value"in _&&s(M,"value",D.value,_.value,k)}},I=(M,D,_,O,k,R,P,B,Y)=>{const A=D.el=M?M.el:a(""),E=D.anchor=M?M.anchor:a("");let{patchFlag:X,dynamicChildren:tt,slotScopeIds:et}=D;et&&(B=B?B.concat(et):et),M==null?(i(A,_,O),i(E,_,O),z(D.children||[],_,E,k,R,P,B,Y)):X>0&&X&64&&tt&&M.dynamicChildren&&M.dynamicChildren.length===tt.length?(T(M.dynamicChildren,tt,_,k,R,P,B),(D.key!=null||k&&D===k.subTree)&&bh(M,D,!0)):at(M,D,_,E,k,R,P,B,Y)},F=(M,D,_,O,k,R,P,B,Y)=>{D.slotScopeIds=B,M==null?D.shapeFlag&512?k.ctx.activate(D,_,O,P,Y):b(D,_,O,k,R,P,Y):q(M,D,Y)},b=(M,D,_,O,k,R,P)=>{const B=M.component=Mm(M,O,k);if(Ua(M)&&(B.ctx.renderer=dt),bm(B,!1,P),B.asyncDep){if(k&&k.registerDep(B,W,P),!M.el){const Y=B.subTree=Ee($e);h(null,Y,D,_),M.placeholder=Y.el}}else W(B,M,D,_,k,R,P)},q=(M,D,_)=>{const O=D.component=M.component;if(nm(M,D,_))if(O.asyncDep&&!O.asyncResolved){K(O,D,_);return}else O.next=D,O.update();else D.el=M.el,O.vnode=D},W=(M,D,_,O,k,R,P)=>{const B=()=>{if(M.isMounted){let{next:X,bu:tt,u:et,parent:ot,vnode:bt}=M;{const yt=Sh(M);if(yt){X&&(X.el=bt.el,K(M,X,P)),yt.asyncDep.then(()=>{Ze(()=>{M.isUnmounted||A()},k)});return}}let xt=X,vt;Di(M,!1),X?(X.el=bt.el,K(M,X,P)):X=bt,tt&&ra(tt),(vt=X.props&&X.props.onVnodeBeforeUpdate)&&An(vt,ot,X,bt),Di(M,!0);const Mt=lc(M),Dt=M.subTree;M.subTree=Mt,g(Dt,Mt,f(Dt.el),H(Dt),M,k,R),X.el=Mt.el,xt===null&&im(M,Mt.el),et&&Ze(et,k),(vt=X.props&&X.props.onVnodeUpdated)&&Ze(()=>An(vt,ot,X,bt),k)}else{let X;const{el:tt,props:et}=D,{bm:ot,m:bt,parent:xt,root:vt,type:Mt}=M,Dt=as(D);Di(M,!1),ot&&ra(ot),!Dt&&(X=et&&et.onVnodeBeforeMount)&&An(X,xt,D),Di(M,!0);{vt.ce&&vt.ce._hasShadowRoot()&&vt.ce._injectChildStyle(Mt,M.parent?M.parent.type:void 0);const yt=M.subTree=lc(M);g(null,yt,_,O,M,k,R),D.el=yt.el}if(bt&&Ze(bt,k),!Dt&&(X=et&&et.onVnodeMounted)){const yt=D;Ze(()=>An(X,xt,yt),k)}(D.shapeFlag&256||xt&&as(xt.vnode)&&xt.vnode.shapeFlag&256)&&M.a&&Ze(M.a,k),M.isMounted=!0,D=_=O=null}};M.scope.on();const Y=M.effect=new Cf(B);M.scope.off();const A=M.update=Y.run.bind(Y),E=M.job=Y.runIfDirty.bind(Y);E.i=M,E.id=M.uid,Y.scheduler=()=>Pl(E),Di(M,!0),A()},K=(M,D,_)=>{D.component=M;const O=M.vnode.props;M.vnode=D,M.next=null,sm(M,D.props,O,_),cm(M,D.children,_),ri(),Ql(M),si()},at=(M,D,_,O,k,R,P,B,Y=!1)=>{const A=M&&M.children,E=M?M.shapeFlag:0,X=D.children,{patchFlag:tt,shapeFlag:et}=D;if(tt>0){if(tt&128){ct(A,X,_,O,k,R,P,B,Y);return}else if(tt&256){nt(A,X,_,O,k,R,P,B,Y);return}}et&8?(E&16&&J(A,k,R),X!==A&&c(_,X)):E&16?et&16?ct(A,X,_,O,k,R,P,B,Y):J(A,k,R,!0):(E&8&&c(_,""),et&16&&z(X,_,O,k,R,P,B,Y))},nt=(M,D,_,O,k,R,P,B,Y)=>{M=M||Tr,D=D||Tr;const A=M.length,E=D.length,X=Math.min(A,E);let tt;for(tt=0;tt<X;tt++){const et=D[tt]=Y?Jn(D[tt]):Ln(D[tt]);g(M[tt],et,_,null,k,R,P,B,Y)}A>E?J(M,k,R,!0,!1,X):z(D,_,O,k,R,P,B,Y,X)},ct=(M,D,_,O,k,R,P,B,Y)=>{let A=0;const E=D.length;let X=M.length-1,tt=E-1;for(;A<=X&&A<=tt;){const et=M[A],ot=D[A]=Y?Jn(D[A]):Ln(D[A]);if(Xi(et,ot))g(et,ot,_,null,k,R,P,B,Y);else break;A++}for(;A<=X&&A<=tt;){const et=M[X],ot=D[tt]=Y?Jn(D[tt]):Ln(D[tt]);if(Xi(et,ot))g(et,ot,_,null,k,R,P,B,Y);else break;X--,tt--}if(A>X){if(A<=tt){const et=tt+1,ot=et<E?D[et].el:O;for(;A<=tt;)g(null,D[A]=Y?Jn(D[A]):Ln(D[A]),_,ot,k,R,P,B,Y),A++}}else if(A>tt)for(;A<=X;)Z(M[A],k,R,!0),A++;else{const et=A,ot=A,bt=new Map;for(A=ot;A<=tt;A++){const Pt=D[A]=Y?Jn(D[A]):Ln(D[A]);Pt.key!=null&&bt.set(Pt.key,A)}let xt,vt=0;const Mt=tt-ot+1;let Dt=!1,yt=0;const Ft=new Array(Mt);for(A=0;A<Mt;A++)Ft[A]=0;for(A=et;A<=X;A++){const Pt=M[A];if(vt>=Mt){Z(Pt,k,R,!0);continue}let Tt;if(Pt.key!=null)Tt=bt.get(Pt.key);else for(xt=ot;xt<=tt;xt++)if(Ft[xt-ot]===0&&Xi(Pt,D[xt])){Tt=xt;break}Tt===void 0?Z(Pt,k,R,!0):(Ft[Tt-ot]=A+1,Tt>=yt?yt=Tt:Dt=!0,g(Pt,D[Tt],_,null,k,R,P,B,Y),vt++)}const Bt=Dt?dm(Ft):Tr;for(xt=Bt.length-1,A=Mt-1;A>=0;A--){const Pt=ot+A,Tt=D[Pt],Ut=D[Pt+1],Zt=Pt+1<E?Ut.el||Eh(Ut):O;Ft[A]===0?g(null,Tt,_,Zt,k,R,P,B,Y):Dt&&(xt<0||A!==Bt[xt]?Q(Tt,_,Zt,2):xt--)}}},Q=(M,D,_,O,k=null)=>{const{el:R,type:P,transition:B,children:Y,shapeFlag:A}=M;if(A&6){Q(M.component.subTree,D,_,O);return}if(A&128){M.suspense.move(D,_,O);return}if(A&64){P.move(M,D,_,dt);return}if(P===_e){i(R,D,_);for(let X=0;X<Y.length;X++)Q(Y[X],D,_,O);i(M.anchor,D,_);return}if(P===aa){v(M,D,_);return}if(O!==2&&A&1&&B)if(O===0)B.beforeEnter(R),i(R,D,_),Ze(()=>B.enter(R),k);else{const{leave:X,delayLeave:tt,afterLeave:et}=B,ot=()=>{M.ctx.isUnmounted?r(R):i(R,D,_)},bt=()=>{R._isLeaving&&R[Rn](!0),X(R,()=>{ot(),et&&et()})};tt?tt(R,ot,bt):bt()}else i(R,D,_)},Z=(M,D,_,O=!1,k=!1)=>{const{type:R,props:P,ref:B,children:Y,dynamicChildren:A,shapeFlag:E,patchFlag:X,dirs:tt,cacheIndex:et,memo:ot}=M;if(X===-2&&(k=!1),B!=null&&(ri(),ss(B,null,_,M,!0),si()),et!=null&&(D.renderCache[et]=void 0),E&256){D.ctx.deactivate(M);return}const bt=E&1&&tt,xt=!as(M);let vt;if(xt&&(vt=P&&P.onVnodeBeforeUnmount)&&An(vt,D,M),E&6)U(M.component,_,O);else{if(E&128){M.suspense.unmount(_,O);return}bt&&Li(M,null,D,"beforeUnmount"),E&64?M.type.remove(M,D,_,dt,O):A&&!A.hasOnce&&(R!==_e||X>0&&X&64)?J(A,D,_,!1,!0):(R===_e&&X&384||!k&&E&16)&&J(Y,D,_),O&&_t(M)}const Mt=ot!=null&&et==null;(xt&&(vt=P&&P.onVnodeUnmounted)||bt||Mt)&&Ze(()=>{vt&&An(vt,D,M),bt&&Li(M,null,D,"unmounted"),Mt&&(M.el=null)},_)},_t=M=>{const{type:D,el:_,anchor:O,transition:k}=M;if(D===_e){rt(_,O);return}if(D===aa){S(M);return}const R=()=>{r(_),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(M.shapeFlag&1&&k&&!k.persisted){const{leave:P,delayLeave:B}=k,Y=()=>P(_,R);B?B(M.el,R,Y):Y()}else R()},rt=(M,D)=>{let _;for(;M!==D;)_=d(M),r(M),M=_;r(D)},U=(M,D,_)=>{const{bum:O,scope:k,job:R,subTree:P,um:B,m:Y,a:A}=M;fc(Y),fc(A),O&&ra(O),k.stop(),R&&(R.flags|=8,Z(P,M,D,_)),B&&Ze(B,D),Ze(()=>{M.isUnmounted=!0},D)},J=(M,D,_,O=!1,k=!1,R=0)=>{for(let P=R;P<M.length;P++)Z(M[P],D,_,O,k)},H=M=>{if(M.shapeFlag&6)return H(M.component.subTree);if(M.shapeFlag&128)return M.suspense.next();const D=d(M.anchor||M.el),_=D&&D[wp];return _?d(_):D};let it=!1;const st=(M,D,_)=>{let O;M==null?D._vnode&&(Z(D._vnode,null,null,!0),O=D._vnode.component):g(D._vnode||null,M,D,null,null,null,_),D._vnode=M,it||(it=!0,Ql(O),qf(),it=!1)},dt={p:g,um:Z,m:Q,r:_t,mt:b,mc:z,pc:at,pbc:T,n:H,o:n};return{render:st,hydrate:void 0,createApp:Zp(st)}}function io({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Di({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function hm(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function bh(n,t,e=!1){const i=n.children,r=t.children;if(Ot(i)&&Ot(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Jn(r[s]),a.el=o.el),!e&&a.patchFlag!==-2&&bh(o,a)),a.type===ka&&(a.patchFlag===-1&&(a=r[s]=Jn(a)),a.el=o.el),a.type===$e&&!a.el&&(a.el=o.el)}}function dm(n){const t=n.slice(),e=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(r=e[e.length-1],n[r]<u){t[i]=r,e.push(i);continue}for(s=0,o=e.length-1;s<o;)a=s+o>>1,n[e[a]]<u?s=a+1:o=a;u<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}function Sh(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Sh(t)}function fc(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function Eh(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?Eh(t.subTree):null}const wh=n=>n.__isSuspense;function pm(n,t){t&&t.pendingBranch?Ot(n)?t.effects.push(...n):t.effects.push(n):Mp(n)}const _e=Symbol.for("v-fgt"),ka=Symbol.for("v-txt"),$e=Symbol.for("v-cmt"),aa=Symbol.for("v-stc"),ls=[];let an=null;function At(n=!1){ls.push(an=n?null:[])}function mm(){ls.pop(),an=ls[ls.length-1]||null}let gs=1;function ma(n,t=!1){gs+=n,n<0&&an&&t&&(an.hasOnce=!0)}function Th(n){return n.dynamicChildren=gs>0?an||Tr:null,mm(),gs>0&&an&&an.push(n),n}function Ct(n,t,e,i,r,s){return Th(V(n,t,e,i,r,s,!0))}function Ah(n,t,e,i,r){return Th(Ee(n,t,e,i,r,!0))}function ga(n){return n?n.__v_isVNode===!0:!1}function Xi(n,t){return n.type===t.type&&n.key===t.key}const Ch=({key:n})=>n??null,oa=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?ve(n)||Be(n)||Gt(n)?{i:sn,r:n,k:t,f:!!e}:n:null);function V(n,t=null,e=null,i=0,r=null,s=n===_e?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Ch(t),ref:t&&oa(t),scopeId:Yf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:sn};return a?(Ul(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=ve(e)?8:16),gs>0&&!o&&an&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&an.push(l),l}const Ee=gm;function gm(n,t=null,e=null,i=0,r=null,s=!1){if((!n||n===Hp)&&(n=$e),ga(n)){const a=Ti(n,t,!0);return e&&Ul(a,e),gs>0&&!s&&an&&(a.shapeFlag&6?an[an.indexOf(n)]=a:an.push(a)),a.patchFlag=-2,a}if(Am(n)&&(n=n.__vccOpts),t){t=_m(t);let{class:a,style:l}=t;a&&!ve(a)&&(t.class=re(a)),ie(l)&&(Rl(l)&&!Ot(l)&&(l=Te({},l)),t.style=xn(l))}const o=ve(n)?1:wh(n)?128:Qf(n)?64:ie(n)?4:Gt(n)?2:0;return V(n,t,e,i,r,o,s,!0)}function _m(n){return n?Rl(n)||gh(n)?Te({},n):n:null}function Ti(n,t,e=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,u=t?vm(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Ch(u),ref:t&&t.ref?e&&s?Ot(s)?s.concat(oa(t)):[s,oa(t)]:oa(t):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==_e?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ti(n.ssContent),ssFallback:n.ssFallback&&Ti(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&ms(c,l.clone(c)),c}function Me(n=" ",t=0){return Ee(ka,null,n,t)}function cs(n,t){const e=Ee(aa,null,n);return e.staticCount=t,e}function Ht(n="",t=!1){return t?(At(),Ah($e,null,n)):Ee($e,null,n)}function Ln(n){return n==null||typeof n=="boolean"?Ee($e):Ot(n)?Ee(_e,null,n.slice()):ga(n)?Jn(n):Ee(ka,null,String(n))}function Jn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ti(n)}function Ul(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Ot(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),Ul(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!gh(t)?t._ctx=sn:r===3&&sn&&(sn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Gt(t)?(t={default:t,_ctx:sn},e=32):(t=String(t),i&64?(e=16,t=[Me(t)]):e=8);n.children=t,n.shapeFlag|=e}function vm(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=re([t.class,i.class]));else if(r==="style")t.style=xn([t.style,i.style]);else if(Ta(r)){const s=t[r],o=i[r];o&&s!==o&&!(Ot(s)&&s.includes(o))?t[r]=s?[].concat(s,o):o:o==null&&s==null&&!Aa(r)&&(t[r]=o)}else r!==""&&(t[r]=i[r])}return t}function An(n,t,e,i=null){En(n,t,7,[e,i])}const xm=fh();let ym=0;function Mm(n,t,e){const i=n.type,r=(t?t.appContext:n.appContext)||xm,s={uid:ym++,vnode:n,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Xd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vh(i,r),emitsOptions:hh(i,r),emit:null,emitted:null,propsDefaults:le,inheritAttrs:i.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Jp.bind(null,s),n.ce&&n.ce(s),s}let ke=null;const Rh=()=>ke||sn;let _a,nl;{const n=Pa(),t=(e,i)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};_a=t("__VUE_INSTANCE_SETTERS__",e=>ke=e),nl=t("__VUE_SSR_SETTERS__",e=>_s=e)}const Ss=n=>{const t=ke;return _a(n),n.scope.on(),()=>{n.scope.off(),_a(t)}},hc=()=>{ke&&ke.scope.off(),_a(null)};function Ph(n){return n.vnode.shapeFlag&4}let _s=!1;function bm(n,t=!1,e=!1){t&&nl(t);const{props:i,children:r}=n.vnode,s=Ph(n);rm(n,i,s,t),lm(n,r,e||t);const o=s?Sm(n,t):void 0;return t&&nl(!1),o}function Sm(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Vp);const{setup:i}=e;if(i){ri();const r=n.setupContext=i.length>1?wm(n):null,s=Ss(n),o=bs(i,n,0,[n.props,r]),a=Mf(o);if(si(),s(),(a||n.sp)&&!as(n)&&ah(n),a){if(o.then(hc,hc),t)return o.then(l=>{dc(n,l)}).catch(l=>{Da(l,n,0)});n.asyncDep=o}else dc(n,o)}else Ih(n)}function dc(n,t,e){Gt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ie(t)&&(n.setupState=Wf(t)),Ih(n)}function Ih(n,t,e){const i=n.type;n.render||(n.render=i.render||kn);{const r=Ss(n);ri();try{Wp(n)}finally{si(),r()}}}const Em={get(n,t){return Fe(n,"get",""),n[t]}};function wm(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Em),slots:n.slots,emit:n.emit,expose:t}}function Ba(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Wf(fp(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in os)return os[e](n)},has(t,e){return e in t||e in os}})):n.proxy}function Tm(n,t=!0){return Gt(n)?n.displayName||n.name:n.name||t&&n.__name}function Am(n){return Gt(n)&&"__vccOpts"in n}const ae=(n,t)=>gp(n,t,_s);function Nl(n,t,e){try{ma(-1);const i=arguments.length;return i===2?ie(t)&&!Ot(t)?ga(t)?Ee(n,null,[t]):Ee(n,t):Ee(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&ga(e)&&(e=[e]),Ee(n,t,e))}finally{ma(1)}}const Cm="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let il;const pc=typeof window<"u"&&window.trustedTypes;if(pc)try{il=pc.createPolicy("vue",{createHTML:n=>n})}catch{}const Lh=il?n=>il.createHTML(n):n=>n,Rm="http://www.w3.org/2000/svg",Pm="http://www.w3.org/1998/Math/MathML",Kn=typeof document<"u"?document:null,mc=Kn&&Kn.createElement("template"),Im={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const r=t==="svg"?Kn.createElementNS(Rm,n):t==="mathml"?Kn.createElementNS(Pm,n):e?Kn.createElement(n,{is:e}):Kn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Kn.createTextNode(n),createComment:n=>Kn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Kn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,r,s){const o=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{mc.innerHTML=Lh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=mc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},fi="transition",Xr="animation",vs=Symbol("_vtc"),Dh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Lm=Te({},th,Dh),Dm=n=>(n.displayName="Transition",n.props=Lm,n),Um=Dm((n,{slots:t})=>Nl(Cp,Nm(n),t)),Ui=(n,t=[])=>{Ot(n)?n.forEach(e=>e(...t)):n&&n(...t)},gc=n=>n?Ot(n)?n.some(t=>t.length>1):n.length>1:!1;function Nm(n){const t={};for(const I in n)I in Dh||(t[I]=n[I]);if(n.css===!1)return t;const{name:e="v",type:i,duration:r,enterFromClass:s=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=s,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:f=`${e}-leave-from`,leaveActiveClass:d=`${e}-leave-active`,leaveToClass:p=`${e}-leave-to`}=n,x=Om(r),g=x&&x[0],m=x&&x[1],{onBeforeEnter:h,onEnter:y,onEnterCancelled:v,onLeave:S,onLeaveCancelled:w,onBeforeAppear:L=h,onAppear:C=y,onAppearCancelled:z=v}=t,G=(I,F,b,q)=>{I._enterCancelled=q,Ni(I,F?c:a),Ni(I,F?u:o),b&&b()},T=(I,F)=>{I._isLeaving=!1,Ni(I,f),Ni(I,p),Ni(I,d),F&&F()},N=I=>(F,b)=>{const q=I?C:y,W=()=>G(F,I,b);Ui(q,[F,W]),_c(()=>{Ni(F,I?l:s),Vn(F,I?c:a),gc(q)||vc(F,i,g,W)})};return Te(t,{onBeforeEnter(I){Ui(h,[I]),Vn(I,s),Vn(I,o)},onBeforeAppear(I){Ui(L,[I]),Vn(I,l),Vn(I,u)},onEnter:N(!1),onAppear:N(!0),onLeave(I,F){I._isLeaving=!0;const b=()=>T(I,F);Vn(I,f),I._enterCancelled?(Vn(I,d),Mc(I)):(Mc(I),Vn(I,d)),_c(()=>{I._isLeaving&&(Ni(I,f),Vn(I,p),gc(S)||vc(I,i,m,b))}),Ui(S,[I,b])},onEnterCancelled(I){G(I,!1,void 0,!0),Ui(v,[I])},onAppearCancelled(I){G(I,!0,void 0,!0),Ui(z,[I])},onLeaveCancelled(I){T(I),Ui(w,[I])}})}function Om(n){if(n==null)return null;if(ie(n))return[ro(n.enter),ro(n.leave)];{const t=ro(n);return[t,t]}}function ro(n){return Fd(n)}function Vn(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[vs]||(n[vs]=new Set)).add(t)}function Ni(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[vs];e&&(e.delete(t),e.size||(n[vs]=void 0))}function _c(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Fm=0;function vc(n,t,e,i){const r=n._endId=++Fm,s=()=>{r===n._endId&&i()};if(e!=null)return setTimeout(s,e);const{type:o,timeout:a,propCount:l}=km(n,t);if(!o)return i();const u=o+"end";let c=0;const f=()=>{n.removeEventListener(u,d),s()},d=p=>{p.target===n&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},a+1),n.addEventListener(u,d)}function km(n,t){const e=window.getComputedStyle(n),i=x=>(e[x]||"").split(", "),r=i(`${fi}Delay`),s=i(`${fi}Duration`),o=xc(r,s),a=i(`${Xr}Delay`),l=i(`${Xr}Duration`),u=xc(a,l);let c=null,f=0,d=0;t===fi?o>0&&(c=fi,f=o,d=s.length):t===Xr?u>0&&(c=Xr,f=u,d=l.length):(f=Math.max(o,u),c=f>0?o>u?fi:Xr:null,d=c?c===fi?s.length:l.length:0);const p=c===fi&&/\b(?:transform|all)(?:,|$)/.test(i(`${fi}Property`).toString());return{type:c,timeout:f,propCount:d,hasTransform:p}}function xc(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>yc(e)+yc(n[i])))}function yc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Mc(n){return(n?n.ownerDocument:document).body.offsetHeight}function Bm(n,t,e){const i=n[vs];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const va=Symbol("_vod"),Uh=Symbol("_vsh"),zm={name:"show",beforeMount(n,{value:t},{transition:e}){n[va]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):$r(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),$r(n,!0),i.enter(n)):i.leave(n,()=>{$r(n,!1)}):$r(n,t))},beforeUnmount(n,{value:t}){$r(n,t)}};function $r(n,t){n.style.display=t?n[va]:"none",n[Uh]=!t}const Hm=Symbol(""),Gm=/(?:^|;)\s*display\s*:/;function Vm(n,t,e){const i=n.style,r=ve(e);let s=!1;if(e&&!r){if(t)if(ve(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&es(i,a,"")}else for(const o in t)e[o]==null&&es(i,o,"");for(const o in e){o==="display"&&(s=!0);const a=e[o];a!=null?Xm(n,o,!ve(t)&&t?t[o]:void 0,a)||es(i,o,a):es(i,o,"")}}else if(r){if(t!==e){const o=i[Hm];o&&(e+=";"+o),i.cssText=e,s=Gm.test(e)}}else t&&n.removeAttribute("style");va in n&&(n[va]=s?i.display:"",n[Uh]&&(i.display="none"))}const bc=/\s*!important$/;function es(n,t,e){if(Ot(e))e.forEach(i=>es(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=Wm(n,t);bc.test(e)?n.setProperty(nr(i),e.replace(bc,""),"important"):n[i]=e}}const Sc=["Webkit","Moz","ms"],so={};function Wm(n,t){const e=so[t];if(e)return e;let i=qe(t);if(i!=="filter"&&i in n)return so[t]=i;i=Ra(i);for(let r=0;r<Sc.length;r++){const s=Sc[r]+i;if(s in n)return so[t]=s}return t}function Xm(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&ve(i)&&e===i}const Ec="http://www.w3.org/1999/xlink";function wc(n,t,e,i,r,s=Vd(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Ec,t.slice(6,t.length)):n.setAttributeNS(Ec,t,e):e==null||s&&!wf(e)?n.removeAttribute(t):n.setAttribute(t,s?"":zn(e)?String(e):e)}function Tc(n,t,e,i,r){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Lh(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=wf(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(r||t)}function br(n,t,e,i){n.addEventListener(t,e,i)}function $m(n,t,e,i){n.removeEventListener(t,e,i)}const Ac=Symbol("_vei");function qm(n,t,e,i,r=null){const s=n[Ac]||(n[Ac]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=jm(t);if(i){const u=s[t]=Km(i,r);br(n,a,u,l)}else o&&($m(n,a,o,l),s[t]=void 0)}}const Cc=/(?:Once|Passive|Capture)$/;function jm(n){let t;if(Cc.test(n)){t={};let i;for(;i=n.match(Cc);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):nr(n.slice(2)),t]}let ao=0;const Ym=Promise.resolve(),Zm=()=>ao||(Ym.then(()=>ao=0),ao=Date.now());function Km(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;En(Jm(i,e.value),t,5,[i])};return e.value=n,e.attached=Zm(),e}function Jm(n,t){if(Ot(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const Rc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Qm=(n,t,e,i,r,s)=>{const o=r==="svg";t==="class"?Bm(n,i,o):t==="style"?Vm(n,e,i):Ta(t)?Aa(t)||qm(n,t,e,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):tg(n,t,i,o))?(Tc(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&wc(n,t,i,o,s,t!=="value")):n._isVueCE&&(eg(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!ve(i)))?Tc(n,qe(t),i,s,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),wc(n,t,i,o))};function tg(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Rc(t)&&Gt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Rc(t)&&ve(e)?!1:t in n}function eg(n,t){const e=n._def.props;if(!e)return!1;const i=qe(t);return Array.isArray(e)?e.some(r=>qe(r)===i):Object.keys(e).some(r=>qe(r)===i)}const Pc=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Ot(t)?e=>ra(t,e):t};function ng(n){n.target.composing=!0}function Ic(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const oo=Symbol("_assign");function Lc(n,t,e){return t&&(n=n.trim()),e&&(n=Ml(n)),n}const xa={created(n,{modifiers:{lazy:t,trim:e,number:i}},r){n[oo]=Pc(r);const s=i||r.props&&r.props.type==="number";br(n,t?"change":"input",o=>{o.target.composing||n[oo](Lc(n.value,e,s))}),(e||s)&&br(n,"change",()=>{n.value=Lc(n.value,e,s)}),t||(br(n,"compositionstart",ng),br(n,"compositionend",Ic),br(n,"change",Ic))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:r,number:s}},o){if(n[oo]=Pc(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Ml(n.value):n.value,l=t??"";if(a===l)return;const u=n.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===n&&n.type!=="range"&&(i&&t===e||r&&n.value.trim()===l)||(n.value=l)}},ig=["ctrl","shift","alt","meta"],rg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>ig.some(e=>n[`${e}Key`]&&!t.includes(e))},Nn=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=(r,...s)=>{for(let o=0;o<t.length;o++){const a=rg[t[o]];if(a&&a(r,t))return}return n(r,...s)})},sg=Te({patchProp:Qm},Im);let Dc;function ag(){return Dc||(Dc=um(sg))}const og=(...n)=>{const t=ag().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=cg(i);if(!r)return;const s=t._component;!Gt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=e(r,!1,lg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function lg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function cg(n){return ve(n)?document.querySelector(n):n}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Sr=typeof document<"u";function Nh(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function ug(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Nh(n.default)}const ee=Object.assign;function lo(n,t){const e={};for(const i in t){const r=t[i];e[i]=wn(r)?r.map(n):n(r)}return e}const us=()=>{},wn=Array.isArray;function Uc(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}const Oh=/#/g,fg=/&/g,hg=/\//g,dg=/=/g,pg=/\?/g,Fh=/\+/g,mg=/%5B/g,gg=/%5D/g,kh=/%5E/g,_g=/%60/g,Bh=/%7B/g,vg=/%7C/g,zh=/%7D/g,xg=/%20/g;function Ol(n){return n==null?"":encodeURI(""+n).replace(vg,"|").replace(mg,"[").replace(gg,"]")}function yg(n){return Ol(n).replace(Bh,"{").replace(zh,"}").replace(kh,"^")}function rl(n){return Ol(n).replace(Fh,"%2B").replace(xg,"+").replace(Oh,"%23").replace(fg,"%26").replace(_g,"`").replace(Bh,"{").replace(zh,"}").replace(kh,"^")}function Mg(n){return rl(n).replace(dg,"%3D")}function bg(n){return Ol(n).replace(Oh,"%23").replace(pg,"%3F")}function Sg(n){return bg(n).replace(hg,"%2F")}function xs(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const Eg=/\/$/,wg=n=>n.replace(Eg,"");function co(n,t,e="/"){let i,r={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=t.slice(0,l),s=t.slice(l,a>0?a:t.length),r=n(s.slice(1))),a>=0&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=Rg(i??t,e),{fullPath:i+s+o,path:i,query:r,hash:xs(o)}}function Tg(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function Nc(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function Ag(n,t,e){const i=t.matched.length-1,r=e.matched.length-1;return i>-1&&i===r&&Ur(t.matched[i],e.matched[r])&&Hh(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function Ur(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function Hh(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(var e in n)if(!Cg(n[e],t[e]))return!1;return!0}function Cg(n,t){return wn(n)?Oc(n,t):wn(t)?Oc(t,n):(n==null?void 0:n.valueOf())===(t==null?void 0:t.valueOf())}function Oc(n,t){return wn(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function Rg(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=e.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return e.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const hi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let sl=function(n){return n.pop="pop",n.push="push",n}({}),uo=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function Pg(n){if(!n)if(Sr){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),wg(n)}const Ig=/^[^#]+#/;function Lg(n,t){return n.replace(Ig,"#")+t}function Dg(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const za=()=>({left:window.scrollX,top:window.scrollY});function Ug(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),r=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!r)return;t=Dg(r,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Fc(n,t){return(history.state?history.state.position-t:-1)+n}const al=new Map;function Ng(n,t){al.set(n,t)}function Og(n){const t=al.get(n);return al.delete(n),t}function Fg(n){return typeof n=="string"||n&&typeof n=="object"}function Gh(n){return typeof n=="string"||typeof n=="symbol"}let xe=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const Vh=Symbol("");xe.MATCHER_NOT_FOUND+"",xe.NAVIGATION_GUARD_REDIRECT+"",xe.NAVIGATION_ABORTED+"",xe.NAVIGATION_CANCELLED+"",xe.NAVIGATION_DUPLICATED+"";function Nr(n,t){return ee(new Error,{type:n,[Vh]:!0},t)}function Wn(n,t){return n instanceof Error&&Vh in n&&(t==null||!!(n.type&t))}const kg=["params","query","hash"];function Bg(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const t={};for(const e of kg)e in n&&(t[e]=n[e]);return JSON.stringify(t,null,2)}function zg(n){const t={};if(n===""||n==="?")return t;const e=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<e.length;++i){const r=e[i].replace(Fh," "),s=r.indexOf("="),o=xs(s<0?r:r.slice(0,s)),a=s<0?null:xs(r.slice(s+1));if(o in t){let l=t[o];wn(l)||(l=t[o]=[l]),l.push(a)}else t[o]=a}return t}function kc(n){let t="";for(let e in n){const i=n[e];if(e=Mg(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(wn(i)?i.map(r=>r&&rl(r)):[i&&rl(i)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+e,r!=null&&(t+="="+r))})}return t}function Hg(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=wn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return t}const Gg=Symbol(""),Bc=Symbol(""),Ha=Symbol(""),Fl=Symbol(""),ol=Symbol("");function qr(){let n=[];function t(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function yi(n,t,e,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const u=d=>{d===!1?l(Nr(xe.NAVIGATION_ABORTED,{from:e,to:t})):d instanceof Error?l(d):Fg(d)?l(Nr(xe.NAVIGATION_GUARD_REDIRECT,{from:t,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},c=s(()=>n.call(i&&i.instances[r],t,e,u));let f=Promise.resolve(c);n.length<3&&(f=f.then(u)),f.catch(d=>l(d))})}function fo(n,t,e,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Nh(l)){const u=(l.__vccOpts||l)[t];u&&s.push(yi(u,e,i,o,a,r))}else{let u=l();s.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=ug(c)?c.default:c;o.mods[a]=c,o.components[a]=f;const d=(f.__vccOpts||f)[t];return d&&yi(d,e,i,o,a,r)()}))}}return s}function Vg(n,t){const e=[],i=[],r=[],s=Math.max(t.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=t.matched[o];a&&(n.matched.find(u=>Ur(u,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(u=>Ur(u,l))||r.push(l))}return[e,i,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Wg=()=>location.protocol+"//"+location.host;function Wh(n,t){const{pathname:e,search:i,hash:r}=t,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),Nc(a,"")}return Nc(e,n)+i+r}function Xg(n,t,e,i){let r=[],s=[],o=null;const a=({state:d})=>{const p=Wh(n,location),x=e.value,g=t.value;let m=0;if(d){if(e.value=p,t.value=d,o&&o===x){o=null;return}m=g?d.position-g.position:0}else i(p);r.forEach(h=>{h(e.value,x,{delta:m,type:sl.pop,direction:m?m>0?uo.forward:uo.back:uo.unknown})})};function l(){o=e.value}function u(d){r.push(d);const p=()=>{const x=r.indexOf(d);x>-1&&r.splice(x,1)};return s.push(p),p}function c(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(ee({},d.state,{scroll:za()}),"")}}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:u,destroy:f}}function zc(n,t,e,i=!1,r=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:r?za():null}}function $g(n){const{history:t,location:e}=window,i={value:Wh(n,e)},r={value:t.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,u,c){const f=n.indexOf("#"),d=f>-1?(e.host&&document.querySelector("base")?n:n.slice(f))+l:Wg()+n+l;try{t[c?"replaceState":"pushState"](u,"",d),r.value=u}catch(p){console.error(p),e[c?"replace":"assign"](d)}}function o(l,u){s(l,ee({},t.state,zc(r.value.back,l,r.value.forward,!0),u,{position:r.value.position}),!0),i.value=l}function a(l,u){const c=ee({},r.value,t.state,{forward:l,scroll:za()});s(c.current,c,!0),s(l,ee({},zc(i.value,l,null),{position:c.position+1},u),!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function qg(n){n=Pg(n);const t=$g(n),e=Xg(n,t.state,t.location,t.replace);function i(s,o=!0){o||e.pauseListeners(),history.go(s)}const r=ee({location:"",base:n,go:i,createHref:Lg.bind(null,n)},t,e);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function jg(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),qg(n)}let ji=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var Se=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(Se||{});const Yg={type:ji.Static,value:""},Zg=/[a-zA-Z0-9_]/;function Kg(n){if(!n)return[[]];if(n==="/")return[[Yg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(p){throw new Error(`ERR (${e})/"${u}": ${p}`)}let e=Se.Static,i=e;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,u="",c="";function f(){u&&(e===Se.Static?s.push({type:ji.Static,value:u}):e===Se.Param||e===Se.ParamRegExp||e===Se.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:ji.Param,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function d(){u+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==Se.ParamRegExp){i=e,e=Se.EscapeNext;continue}switch(e){case Se.Static:l==="/"?(u&&f(),o()):l===":"?(f(),e=Se.Param):d();break;case Se.EscapeNext:d(),e=i;break;case Se.Param:l==="("?e=Se.ParamRegExp:Zg.test(l)?d():(f(),e=Se.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Se.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:e=Se.ParamRegExpEnd:c+=l;break;case Se.ParamRegExpEnd:f(),e=Se.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:t("Unknown state");break}}return e===Se.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),f(),o(),r}const Hc="[^/]+?",Jg={sensitive:!1,strict:!1,start:!0,end:!0};var Ve=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(Ve||{});const Qg=/[.+*?^${}()[\]/\\]/g;function t0(n,t){const e=ee({},Jg,t),i=[];let r=e.start?"^":"";const s=[];for(const u of n){const c=u.length?[]:[Ve.Root];e.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const d=u[f];let p=Ve.Segment+(e.sensitive?Ve.BonusCaseSensitive:0);if(d.type===ji.Static)f||(r+="/"),r+=d.value.replace(Qg,"\\$&"),p+=Ve.Static;else if(d.type===ji.Param){const{value:x,repeatable:g,optional:m,regexp:h}=d;s.push({name:x,repeatable:g,optional:m});const y=h||Hc;if(y!==Hc){p+=Ve.BonusCustomRegExp;try{`${y}`}catch(S){throw new Error(`Invalid custom RegExp for param "${x}" (${y}): `+S.message)}}let v=g?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(v=m&&u.length<2?`(?:/${v})`:"/"+v),m&&(v+="?"),r+=v,p+=Ve.Dynamic,m&&(p+=Ve.BonusOptional),g&&(p+=Ve.BonusRepeatable),y===".*"&&(p+=Ve.BonusWildcard)}c.push(p)}i.push(c)}if(e.strict&&e.end){const u=i.length-1;i[u][i[u].length-1]+=Ve.BonusStrict}e.strict||(r+="/?"),e.end?r+="$":e.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,e.sensitive?"":"i");function a(u){const c=u.match(o),f={};if(!c)return null;for(let d=1;d<c.length;d++){const p=c[d]||"",x=s[d-1];f[x.name]=p&&x.repeatable?p.split("/"):p}return f}function l(u){let c="",f=!1;for(const d of n){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const p of d)if(p.type===ji.Static)c+=p.value;else if(p.type===ji.Param){const{value:x,repeatable:g,optional:m}=p,h=x in u?u[x]:"";if(wn(h)&&!g)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const y=wn(h)?h.join("/"):h;if(!y)if(m)d.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${x}"`);c+=y}}return c||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function e0(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===Ve.Static+Ve.Segment?-1:1:n.length>t.length?t.length===1&&t[0]===Ve.Static+Ve.Segment?1:-1:0}function Xh(n,t){let e=0;const i=n.score,r=t.score;for(;e<i.length&&e<r.length;){const s=e0(i[e],r[e]);if(s)return s;e++}if(Math.abs(r.length-i.length)===1){if(Gc(i))return 1;if(Gc(r))return-1}return r.length-i.length}function Gc(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const n0={strict:!1,end:!0,sensitive:!1};function i0(n,t,e){const i=t0(Kg(n.path),e),r=ee(i,{record:n,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function r0(n,t){const e=[],i=new Map;t=Uc(n0,t);function r(f){return i.get(f)}function s(f,d,p){const x=!p,g=Wc(f);g.aliasOf=p&&p.record;const m=Uc(t,f),h=[g];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const w of S)h.push(Wc(ee({},g,{components:p?p.record.components:g.components,path:w,aliasOf:p?p.record:g})))}let y,v;for(const S of h){const{path:w}=S;if(d&&w[0]!=="/"){const L=d.record.path,C=L[L.length-1]==="/"?"":"/";S.path=d.record.path+(w&&C+w)}if(y=i0(S,d,m),p?p.alias.push(y):(v=v||y,v!==y&&v.alias.push(y),x&&f.name&&!Xc(y)&&o(f.name)),$h(y)&&l(y),g.children){const L=g.children;for(let C=0;C<L.length;C++)s(L[C],y,p&&p.children[C])}p=p||y}return v?()=>{o(v)}:us}function o(f){if(Gh(f)){const d=i.get(f);d&&(i.delete(f),e.splice(e.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=e.indexOf(f);d>-1&&(e.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return e}function l(f){const d=o0(f,e);e.splice(d,0,f),f.record.name&&!Xc(f)&&i.set(f.record.name,f)}function u(f,d){let p,x={},g,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw Nr(xe.MATCHER_NOT_FOUND,{location:f});m=p.record.name,x=ee(Vc(d.params,p.keys.filter(v=>!v.optional).concat(p.parent?p.parent.keys.filter(v=>v.optional):[]).map(v=>v.name)),f.params&&Vc(f.params,p.keys.map(v=>v.name))),g=p.stringify(x)}else if(f.path!=null)g=f.path,p=e.find(v=>v.re.test(g)),p&&(x=p.parse(g),m=p.record.name);else{if(p=d.name?i.get(d.name):e.find(v=>v.re.test(d.path)),!p)throw Nr(xe.MATCHER_NOT_FOUND,{location:f,currentLocation:d});m=p.record.name,x=ee({},d.params,f.params),g=p.stringify(x)}const h=[];let y=p;for(;y;)h.unshift(y.record),y=y.parent;return{name:m,path:g,params:x,matched:h,meta:a0(h)}}n.forEach(f=>s(f));function c(){e.length=0,i.clear()}return{addRoute:s,resolve:u,removeRoute:o,clearRoutes:c,getRoutes:a,getRecordMatcher:r}}function Vc(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function Wc(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:s0(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function s0(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function Xc(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function a0(n){return n.reduce((t,e)=>ee(t,e.meta),{})}function o0(n,t){let e=0,i=t.length;for(;e!==i;){const s=e+i>>1;Xh(n,t[s])<0?i=s:e=s+1}const r=l0(n);return r&&(i=t.lastIndexOf(r,i-1)),i}function l0(n){let t=n;for(;t=t.parent;)if($h(t)&&Xh(n,t)===0)return t}function $h({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function $c(n){const t=bn(Ha),e=bn(Fl),i=ae(()=>{const l=yn(n.to);return t.resolve(l)}),r=ae(()=>{const{matched:l}=i.value,{length:u}=l,c=l[u-1],f=e.matched;if(!c||!f.length)return-1;const d=f.findIndex(Ur.bind(null,c));if(d>-1)return d;const p=qc(l[u-2]);return u>1&&qc(c)===p&&f[f.length-1].path!==p?f.findIndex(Ur.bind(null,l[u-2])):d}),s=ae(()=>r.value>-1&&d0(e.params,i.value.params)),o=ae(()=>r.value>-1&&r.value===e.matched.length-1&&Hh(e.params,i.value.params));function a(l={}){if(h0(l)){const u=t[yn(n.replace)?"replace":"push"](yn(n.to)).catch(us);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:i,href:ae(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function c0(n){return n.length===1?n[0]:n}const u0=sh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:$c,setup(n,{slots:t}){const e=La($c(n)),{options:i}=bn(Ha),r=ae(()=>({[jc(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[jc(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const s=t.default&&c0(t.default(e));return n.custom?s:Nl("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:r.value},s)}}}),f0=u0;function h0(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function d0(n,t){for(const e in t){const i=t[e],r=n[e];if(typeof i=="string"){if(i!==r)return!1}else if(!wn(r)||r.length!==i.length||i.some((s,o)=>s.valueOf()!==r[o].valueOf()))return!1}return!0}function qc(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const jc=(n,t,e)=>n??t??e,p0=sh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=bn(ol),r=ae(()=>n.route||i.value),s=bn(Bc,0),o=ae(()=>{let u=yn(s);const{matched:c}=r.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),a=ae(()=>r.value.matched[o.value]);sa(Bc,ae(()=>o.value+1)),sa(Gg,a),sa(ol,r);const l=$t();return Rr(()=>[l.value,a.value,n.name],([u,c,f],[d,p,x])=>{c&&(c.instances[f]=u,p&&p!==c&&u&&u===d&&(c.leaveGuards.size||(c.leaveGuards=p.leaveGuards),c.updateGuards.size||(c.updateGuards=p.updateGuards))),u&&c&&(!p||!Ur(c,p)||!d)&&(c.enterCallbacks[f]||[]).forEach(g=>g(u))},{flush:"post"}),()=>{const u=r.value,c=n.name,f=a.value,d=f&&f.components[c];if(!d)return Yc(e.default,{Component:d,route:u});const p=f.props[c],x=p?p===!0?u.params:typeof p=="function"?p(u):p:null,m=Nl(d,ee({},x,t,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(f.instances[c]=null)},ref:l}));return Yc(e.default,{Component:m,route:u})||m}}});function Yc(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const m0=p0;function g0(n){const t=r0(n.routes,n),e=n.parseQuery||zg,i=n.stringifyQuery||kc,r=n.history,s=qr(),o=qr(),a=qr(),l=hp(hi);let u=hi;Sr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=lo.bind(null,H=>""+H),f=lo.bind(null,Sg),d=lo.bind(null,xs);function p(H,it){let st,dt;return Gh(H)?(st=t.getRecordMatcher(H),dt=it):dt=H,t.addRoute(dt,st)}function x(H){const it=t.getRecordMatcher(H);it&&t.removeRoute(it)}function g(){return t.getRoutes().map(H=>H.record)}function m(H){return!!t.getRecordMatcher(H)}function h(H,it){if(it=ee({},it||l.value),typeof H=="string"){const _=co(e,H,it.path),O=t.resolve({path:_.path},it),k=r.createHref(_.fullPath);return ee(_,O,{params:d(O.params),hash:xs(_.hash),redirectedFrom:void 0,href:k})}let st;if(H.path!=null)st=ee({},H,{path:co(e,H.path,it.path).path});else{const _=ee({},H.params);for(const O in _)_[O]==null&&delete _[O];st=ee({},H,{params:f(_)}),it.params=f(it.params)}const dt=t.resolve(st,it),j=H.hash||"";dt.params=c(d(dt.params));const M=Tg(i,ee({},H,{hash:yg(j),path:dt.path})),D=r.createHref(M);return ee({fullPath:M,hash:j,query:i===kc?Hg(H.query):H.query||{}},dt,{redirectedFrom:void 0,href:D})}function y(H){return typeof H=="string"?co(e,H,l.value.path):ee({},H)}function v(H,it){if(u!==H)return Nr(xe.NAVIGATION_CANCELLED,{from:it,to:H})}function S(H){return C(H)}function w(H){return S(ee(y(H),{replace:!0}))}function L(H,it){const st=H.matched[H.matched.length-1];if(st&&st.redirect){const{redirect:dt}=st;let j=typeof dt=="function"?dt(H,it):dt;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=y(j):{path:j},j.params={}),ee({query:H.query,hash:H.hash,params:j.path!=null?{}:H.params},j)}}function C(H,it){const st=u=h(H),dt=l.value,j=H.state,M=H.force,D=H.replace===!0,_=L(st,dt);if(_)return C(ee(y(_),{state:typeof _=="object"?ee({},j,_.state):j,force:M,replace:D}),it||st);const O=st;O.redirectedFrom=it;let k;return!M&&Ag(i,dt,st)&&(k=Nr(xe.NAVIGATION_DUPLICATED,{to:O,from:dt}),Q(dt,dt,!0,!1)),(k?Promise.resolve(k):T(O,dt)).catch(R=>Wn(R)?Wn(R,xe.NAVIGATION_GUARD_REDIRECT)?R:ct(R):at(R,O,dt)).then(R=>{if(R){if(Wn(R,xe.NAVIGATION_GUARD_REDIRECT))return C(ee({replace:D},y(R.to),{state:typeof R.to=="object"?ee({},j,R.to.state):j,force:M}),it||O)}else R=I(O,dt,!0,D,j);return N(O,dt,R),R})}function z(H,it){const st=v(H,it);return st?Promise.reject(st):Promise.resolve()}function G(H){const it=rt.values().next().value;return it&&typeof it.runWithContext=="function"?it.runWithContext(H):H()}function T(H,it){let st;const[dt,j,M]=Vg(H,it);st=fo(dt.reverse(),"beforeRouteLeave",H,it);for(const _ of dt)_.leaveGuards.forEach(O=>{st.push(yi(O,H,it))});const D=z.bind(null,H,it);return st.push(D),J(st).then(()=>{st=[];for(const _ of s.list())st.push(yi(_,H,it));return st.push(D),J(st)}).then(()=>{st=fo(j,"beforeRouteUpdate",H,it);for(const _ of j)_.updateGuards.forEach(O=>{st.push(yi(O,H,it))});return st.push(D),J(st)}).then(()=>{st=[];for(const _ of M)if(_.beforeEnter)if(wn(_.beforeEnter))for(const O of _.beforeEnter)st.push(yi(O,H,it));else st.push(yi(_.beforeEnter,H,it));return st.push(D),J(st)}).then(()=>(H.matched.forEach(_=>_.enterCallbacks={}),st=fo(M,"beforeRouteEnter",H,it,G),st.push(D),J(st))).then(()=>{st=[];for(const _ of o.list())st.push(yi(_,H,it));return st.push(D),J(st)}).catch(_=>Wn(_,xe.NAVIGATION_CANCELLED)?_:Promise.reject(_))}function N(H,it,st){a.list().forEach(dt=>G(()=>dt(H,it,st)))}function I(H,it,st,dt,j){const M=v(H,it);if(M)return M;const D=it===hi,_=Sr?history.state:{};st&&(dt||D?r.replace(H.fullPath,ee({scroll:D&&_&&_.scroll},j)):r.push(H.fullPath,j)),l.value=H,Q(H,it,st,D),ct()}let F;function b(){F||(F=r.listen((H,it,st)=>{if(!U.listening)return;const dt=h(H),j=L(dt,U.currentRoute.value);if(j){C(ee(j,{replace:!0,force:!0}),dt).catch(us);return}u=dt;const M=l.value;Sr&&Ng(Fc(M.fullPath,st.delta),za()),T(dt,M).catch(D=>Wn(D,xe.NAVIGATION_ABORTED|xe.NAVIGATION_CANCELLED)?D:Wn(D,xe.NAVIGATION_GUARD_REDIRECT)?(C(ee(y(D.to),{force:!0}),dt).then(_=>{Wn(_,xe.NAVIGATION_ABORTED|xe.NAVIGATION_DUPLICATED)&&!st.delta&&st.type===sl.pop&&r.go(-1,!1)}).catch(us),Promise.reject()):(st.delta&&r.go(-st.delta,!1),at(D,dt,M))).then(D=>{D=D||I(dt,M,!1),D&&(st.delta&&!Wn(D,xe.NAVIGATION_CANCELLED)?r.go(-st.delta,!1):st.type===sl.pop&&Wn(D,xe.NAVIGATION_ABORTED|xe.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),N(dt,M,D)}).catch(us)}))}let q=qr(),W=qr(),K;function at(H,it,st){ct(H);const dt=W.list();return dt.length?dt.forEach(j=>j(H,it,st)):console.error(H),Promise.reject(H)}function nt(){return K&&l.value!==hi?Promise.resolve():new Promise((H,it)=>{q.add([H,it])})}function ct(H){return K||(K=!H,b(),q.list().forEach(([it,st])=>H?st(H):it()),q.reset()),H}function Q(H,it,st,dt){const{scrollBehavior:j}=n;if(!Sr||!j)return Promise.resolve();const M=!st&&Og(Fc(H.fullPath,0))||(dt||!st)&&history.state&&history.state.scroll||null;return Ke().then(()=>j(H,it,M)).then(D=>D&&Ug(D)).catch(D=>at(D,H,it))}const Z=H=>r.go(H);let _t;const rt=new Set,U={currentRoute:l,listening:!0,addRoute:p,removeRoute:x,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:g,resolve:h,options:n,push:S,replace:w,go:Z,back:()=>Z(-1),forward:()=>Z(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:W.add,isReady:nt,install(H){H.component("RouterLink",f0),H.component("RouterView",m0),H.config.globalProperties.$router=U,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>yn(l)}),Sr&&!_t&&l.value===hi&&(_t=!0,S(r.location).catch(dt=>{}));const it={};for(const dt in hi)Object.defineProperty(it,dt,{get:()=>l.value[dt],enumerable:!0});H.provide(Ha,U),H.provide(Fl,Gf(it)),H.provide(ol,l);const st=H.unmount;rt.add(H),H.unmount=function(){rt.delete(H),rt.size<1&&(u=hi,F&&F(),F=null,l.value=hi,_t=!1,K=!1),st()}}};function J(H){return H.reduce((it,st)=>it.then(()=>G(st)),Promise.resolve())}return U}function _0(){return bn(Ha)}function v0(n){return bn(Fl)}const Ci=(n,t)=>{const e=n.__vccOpts||n;for(const[i,r]of t)e[i]=r;return e},x0={class:"topbar"},y0={class:"topbar-right"},M0={class:"theme-switcher"},b0=["title","onClick"],S0={__name:"TopBar",props:{currentTheme:{type:String,default:"dark"},currentRoute:{type:String,default:"/"}},emits:["set-theme","nav"],setup(n){const t=[{id:"dark",label:"黑色",color:"#111"},{id:"gray",label:"灰色",color:"#555"},{id:"light",label:"白色",color:"#e8e8e8"}];return(e,i)=>(At(),Ct("header",x0,[i[3]||(i[3]=V("div",{class:"topbar-left"},[V("div",{class:"logo"},[V("span",{class:"logo-k"},"K"),V("span",{class:"logo-rest"},"Skr")])],-1)),V("div",y0,[i[0]||(i[0]=V("a",{href:"https://kskr.kuaishou.com",target:"_blank",class:"topbar-link"},"文档",-1)),i[1]||(i[1]=V("a",{href:"#",class:"topbar-link"},"更新日志",-1)),V("div",M0,[(At(),Ct(_e,null,oi(t,r=>V("button",{key:r.id,class:re(["theme-btn",{active:n.currentTheme===r.id}]),title:r.label,onClick:s=>e.$emit("set-theme",r.id)},[V("span",{class:"theme-dot",style:xn({background:r.color})},null,4)],10,b0)),64))]),i[2]||(i[2]=V("span",{class:"version-badge"},"v1.0",-1))])]))}},E0=Ci(S0,[["__scopeId","data-v-1e7bc9b2"]]),w0={class:"app-body"},T0={class:"sidenav"},A0={class:"page-content"},C0={__name:"App",setup(n){const t=$t("dark");function e(a){t.value=a}const i=_0(),r=v0(),s=ae(()=>r.path);function o(a){i.push(a)}return(a,l)=>{const u=zp("router-view");return At(),Ct("div",{class:re(["app","theme-"+t.value])},[Ee(E0,{currentTheme:t.value,currentRoute:s.value,onSetTheme:e,onNav:o},null,8,["currentTheme","currentRoute"]),V("div",w0,[V("nav",T0,[V("button",{class:re(["sidenav-item",{active:s.value==="/"}]),onClick:l[0]||(l[0]=c=>o("/")),title:"插件预览"},[...l[3]||(l[3]=[cs('<div class="sn-icon" data-v-4e2c40ae><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" data-v-4e2c40ae><rect x="3" y="3" width="18" height="18" rx="2.5" data-v-4e2c40ae></rect><circle cx="8.5" cy="8.5" r="1.5" data-v-4e2c40ae></circle><polyline points="21 15 16 10 5 21" data-v-4e2c40ae></polyline></svg></div><span class="sn-label" data-v-4e2c40ae>插件预览</span><div class="sn-active-bar" data-v-4e2c40ae></div>',3)])],2),V("button",{class:re(["sidenav-item",{active:s.value==="/convert"}]),onClick:l[1]||(l[1]=c=>o("/convert")),title:"视频转换"},[...l[4]||(l[4]=[cs('<div class="sn-icon" data-v-4e2c40ae><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" data-v-4e2c40ae><polygon points="23 7 16 12 23 17 23 7" data-v-4e2c40ae></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2" data-v-4e2c40ae></rect><line x1="7" y1="12" x2="11" y2="12" stroke-width="2" data-v-4e2c40ae></line><polyline points="9 10 11 12 9 14" stroke-width="2" data-v-4e2c40ae></polyline></svg></div><span class="sn-label" data-v-4e2c40ae>视频转换</span><div class="sn-active-bar" data-v-4e2c40ae></div>',3)])],2),V("button",{class:re(["sidenav-item",{active:s.value==="/png-crop"}]),onClick:l[2]||(l[2]=c=>o("/png-crop")),title:"裁剪PNG透明像素"},[...l[5]||(l[5]=[cs('<div class="sn-icon" data-v-4e2c40ae><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" data-v-4e2c40ae><rect x="3" y="3" width="18" height="18" rx="2" data-v-4e2c40ae></rect><polyline points="9 3 9 9 3 9" data-v-4e2c40ae></polyline><polyline points="15 3 15 9 21 9" data-v-4e2c40ae></polyline><polyline points="9 21 9 15 3 15" data-v-4e2c40ae></polyline><polyline points="15 21 15 15 21 15" data-v-4e2c40ae></polyline></svg></div><span class="sn-label" data-v-4e2c40ae>PNG裁剪</span><div class="sn-active-bar" data-v-4e2c40ae></div>',3)])],2),l[6]||(l[6]=V("div",{class:"sn-divider"},null,-1))]),V("div",A0,[Ee(u)])])],2)}}},R0=Ci(C0,[["__scopeId","data-v-4e2c40ae"]]),la=[{id:"light",name:"光效",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',plugins:[{id:"edge-glow",name:"EdgeGlow",nameZh:"边缘辉光",status:"active"},{id:"enlargement",name:"Enlargement",nameZh:"局部放大",status:"active"},{id:"shaft-light",name:"ShaftLight",nameZh:"光柱",status:"active"},{id:"overall-glow",name:"OverallGlow",nameZh:"泛光",status:"active"}]},{id:"distortion",name:"画面扭曲",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8"/><path d="M3 12c0 2.2 3.6 4 8 4s8-1.8 8-4"/><path d="M3 12c0-2.2 3.6-4 8-4s8 1.8 8 4"/></svg>',plugins:[{id:"wave-blur",name:"WaveBlurring",nameZh:"波形模糊",status:"active"},{id:"cc-lens",name:"CCLens",nameZh:"鱼眼",status:"active"},{id:"ripple",name:"Ripple",nameZh:"波纹",status:"active"},{id:"wave-warp",name:"WaveWarp",nameZh:"波形变形",status:"active"},{id:"twirl-distort",name:"TwirlDistort",nameZh:"旋转扭曲",status:"active"}]},{id:"blur-mosaic",name:"模糊/马赛克",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="4" height="4"/><rect x="10" y="3" width="4" height="4"/><rect x="17" y="3" width="4" height="4"/><rect x="3" y="10" width="4" height="4"/><rect x="10" y="10" width="4" height="4"/><rect x="17" y="10" width="4" height="4"/><rect x="3" y="17" width="4" height="4"/><rect x="10" y="17" width="4" height="4"/><rect x="17" y="17" width="4" height="4"/></svg>',plugins:[{id:"directional-blur",name:"Directional Blur",nameZh:"定向模糊",status:"active"},{id:"radial-blur",name:"Radial Blur",nameZh:"径向模糊",status:"active"},{id:"basic-mosaic",name:"Basic Mosaic",nameZh:"基础马赛克",status:"active"},{id:"blur-mosaic-fx",name:"Blur Mosaic",nameZh:"模糊马赛克",status:"active"},{id:"brick-mosaic",name:"Brick Mosaic",nameZh:"砖块马赛克",status:"active"},{id:"colorful-mosaic-1",name:"Colorful MosaicI",nameZh:"彩色马赛克 I",status:"active"},{id:"colorful-mosaic-2",name:"Colorful MosaicII",nameZh:"彩色马赛克 II",status:"active"},{id:"colorful-mosaic-3",name:"Colorful MosaicIII",nameZh:"彩色马赛克 III",status:"active"},{id:"glass-mosaic-1",name:"Glass MosaicI",nameZh:"玻璃马赛克 I",status:"active"},{id:"glass-mosaic-2",name:"Glass MosaicII",nameZh:"玻璃马赛克 II",status:"active"},{id:"hexagon-mosaic",name:"Hexagon Mosaic",nameZh:"六边形马赛克",status:"active"},{id:"star-mosaic",name:"Star Mosaic",nameZh:"星形马赛克",status:"active"}]},{id:"text",name:"文本",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>',plugins:[{id:"text-glitch",name:"TextGlitch",nameZh:"文字故障",status:"coming"},{id:"text-reveal",name:"TextReveal",nameZh:"文字揭示",status:"coming"},{id:"kinetic-type",name:"KineticType",nameZh:"动态字体",status:"coming"},{id:"neon-text",name:"NeonText",nameZh:"霓虹文字",status:"coming"}]},{id:"filter",name:"滤镜",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M8 12a4 4 0 0 1 8 0"/><line x1="12" y1="3" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="21"/><line x1="3" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="21" y2="12"/></svg>',plugins:[{id:"engrave",name:"Engrave",nameZh:"雕刻",status:"active"},{id:"newsprint",name:"Newsprint",nameZh:"报纸印刷",status:"active"},{id:"cartoon",name:"Cartoon",nameZh:"卡通",status:"active"},{id:"film-soft-light",name:"FilmSoftLight",nameZh:"胶片柔光",status:"active"},{id:"comic",name:"Comic",nameZh:"漫画",status:"active"}]},{id:"stylize",name:"风格化",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/><circle cx="12" cy="12" r="3"/></svg>',plugins:[{id:"oil-paint",name:"OilPaint",nameZh:"油画效果",status:"coming"},{id:"sketch",name:"Sketch",nameZh:"素描效果",status:"coming"},{id:"halftone",name:"Halftone",nameZh:"半调效果",status:"coming"},{id:"watercolor",name:"Watercolor",nameZh:"水彩效果",status:"coming"},{id:"glitch-art",name:"GlitchArt",nameZh:"故障艺术",status:"coming"}]},{id:"generate",name:"生成",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',plugins:[{id:"particle-gen",name:"ParticleGen",nameZh:"粒子生成",status:"coming"},{id:"noise-field",name:"NoiseField",nameZh:"噪声场",status:"coming"},{id:"fractal",name:"FractalGen",nameZh:"分形生成",status:"coming"},{id:"grid-gen",name:"GridGen",nameZh:"网格生成",status:"coming"}]}],P0={class:"sidebar"},I0={class:"category-list"},L0=["onClick"],D0=["innerHTML"],U0={class:"category-name"},N0={class:"plugin-list"},O0=["onClick"],F0={class:"plugin-info"},k0={class:"plugin-name"},B0={class:"plugin-name-zh"},z0={key:0,class:"plugin-tag"},H0={key:1,class:"plugin-tag active-tag"},G0={class:"sidebar-footer"},V0={class:"footer-text"},W0={class:"footer-count"},X0={class:"footer-available"},$0={__name:"Sidebar",emits:["select-plugin"],setup(n,{emit:t}){const e=t,i=$t("distortion"),r=$t("wave-blur"),s=ae(()=>la.reduce((u,c)=>u+c.plugins.length,0)),o=ae(()=>la.reduce((u,c)=>u+c.plugins.filter(f=>f.status==="active").length,0));function a(u){i.value=i.value===u?null:u}function l(u){u.status!=="coming"&&(r.value=u.id,e("select-plugin",u))}return(u,c)=>(At(),Ct("aside",P0,[V("div",I0,[(At(!0),Ct(_e,null,oi(yn(la),f=>(At(),Ct("div",{key:f.id,class:re(["category-item",{expanded:i.value===f.id}])},[V("div",{class:re(["category-header",{active:i.value===f.id}]),onClick:d=>a(f.id)},[V("div",{class:"category-icon",innerHTML:f.icon},null,8,D0),V("span",U0,Lt(f.name),1),c[0]||(c[0]=V("div",{class:"category-arrow"},[V("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[V("polyline",{points:"6 9 12 15 18 9"})])],-1))],10,L0),Ee(Um,{name:"slide"},{default:Zf(()=>[ps(V("div",N0,[(At(!0),Ct(_e,null,oi(f.plugins,d=>(At(),Ct("div",{key:d.id,class:re(["plugin-item",{selected:r.value===d.id,coming:d.status==="coming"}]),onClick:p=>l(d)},[c[1]||(c[1]=V("div",{class:"plugin-dot"},null,-1)),V("div",F0,[V("span",k0,Lt(d.name),1),V("span",B0,Lt(d.nameZh),1)]),d.status==="coming"?(At(),Ct("span",z0,"即将")):(At(),Ct("span",H0,"可用"))],10,O0))),128))],512),[[zm,i.value===f.id]])]),_:2},1024)],2))),128))]),V("div",G0,[V("div",V0,[V("span",W0,Lt(s.value)+" 个插件",1),c[2]||(c[2]=V("span",{class:"footer-divider"},"·",-1)),V("span",X0,Lt(o.value)+" 已上线",1)])])]))}},q0=Ci($0,[["__scopeId","data-v-3c9974e1"]]),j0={class:"param-panel"},Y0={class:"plugin-header"},Z0={class:"plugin-title-row"},K0={class:"plugin-title"},J0={class:"plugin-title-zh"},Q0={class:"params-scroll"},t_={class:"param-header"},e_={class:"param-label"},n_={class:"param-value-wrap"},i_={class:"param-value"},r_={class:"param-desc"},s_={class:"slider-wrap"},a_={class:"slider-min"},o_=["min","max","step","value","onInput"],l_={class:"slider-max"},c_={class:"panel-actions"},u_={class:"btn-upload"},f_={__name:"ParamPanel",props:{plugin:{type:Object,required:!0},params:{type:Array,required:!0},modelValue:{type:Object,required:!0},compareMode:{type:Boolean,default:!1}},emits:["update:modelValue","reset","upload","toggle-compare"],setup(n,{emit:t}){const e=n,i=t;function r(o,a){i("update:modelValue",{...e.modelValue,[o]:parseFloat(a)})}function s(o){return typeof o=="number"?o.toFixed(1):o}return(o,a)=>(At(),Ct("div",j0,[V("div",Y0,[V("div",Z0,[V("div",null,[V("h2",K0,Lt(n.plugin.name),1),V("p",J0,Lt(n.plugin.nameZh),1)]),V("button",{class:"btn-icon",onClick:a[0]||(a[0]=l=>o.$emit("reset")),title:"重置参数"},[...a[3]||(a[3]=[V("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[V("polyline",{points:"1 4 1 10 7 10"}),V("path",{d:"M3.51 15a9 9 0 1 0 .49-4.64"})],-1)])])])]),V("div",Q0,[(At(!0),Ct(_e,null,oi(n.params,l=>(At(),Ct("div",{class:"param-group",key:l.key},[V("div",t_,[V("span",e_,Lt(l.label),1),V("div",n_,[V("span",i_,Lt(s(n.modelValue[l.key])),1)])]),V("p",r_,Lt(l.desc),1),V("div",s_,[V("span",a_,Lt(l.min),1),V("input",{type:"range",min:l.min,max:l.max,step:l.step||.1,value:n.modelValue[l.key],onInput:u=>r(l.key,u.target.value)},null,40,o_),V("span",l_,Lt(l.max),1)])]))),128))]),V("div",c_,[V("label",u_,[V("input",{type:"file",accept:"image/*",onChange:a[1]||(a[1]=l=>o.$emit("upload",l)),hidden:""},null,32),a[4]||(a[4]=V("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[V("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),V("polyline",{points:"17 8 12 3 7 8"}),V("line",{x1:"12",y1:"3",x2:"12",y2:"15"})],-1)),a[5]||(a[5]=Me(" 上传图片 ",-1))]),V("button",{class:re(["btn-compare",{active:n.compareMode}]),onClick:a[2]||(a[2]=l=>o.$emit("toggle-compare"))},[a[6]||(a[6]=V("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[V("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),V("line",{x1:"12",y1:"3",x2:"12",y2:"21"})],-1)),Me(" "+Lt(n.compareMode?"关闭对比":"前后对比"),1)],2)])]))}},h_=Ci(f_,[["__scopeId","data-v-78100527"]]),d_={class:"preview-area"},p_={class:"preview-toolbar"},m_={class:"toolbar-left"},g_={class:"breadcrumb"},__={class:"breadcrumb-cat"},v_={class:"breadcrumb-plugin"},x_={class:"toolbar-right"},y_={class:"view-toggle"},M_=["onClick","title"],b_=["innerHTML"],S_={class:"zoom-control"},E_={class:"zoom-val"},w_={class:"center-wrap"},T_={__name:"PreviewArea",props:{compareMode:{type:Boolean,default:!1},hasImage:{type:Boolean,default:!1},isWebGL:{type:Boolean,default:!1},showingOriginal:{type:Boolean,default:!1},currentCategory:{type:String,default:""},currentPlugin:{type:String,default:""},imageWidth:{type:Number,default:0},imageHeight:{type:Number,default:0}},emits:["upload","toggle-original"],setup(n,{expose:t,emit:e}){const i=n,r=e,s=$t(null),o=$t(null),a=$t(null),l=$t(null),u=$t(null),c=$t(null),f=$t("fit"),d=$t(100),p=[{id:"fit",label:"适应窗口",icon:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>'},{id:"actual",label:"实际大小",icon:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>'}],x=ae(()=>i.imageWidth||900),g=ae(()=>i.imageHeight||600),m=ae(()=>f.value==="fit"?{width:x.value+"px",height:g.value+"px",maxWidth:"100%",maxHeight:"100%"}:{width:Math.round(x.value*d.value/100)+"px",height:Math.round(g.value*d.value/100)+"px"});t({webglCanvas:s,canvas2d:o,originalCanvas:a});function h(){var L;(L=l.value)==null||L.click()}function y(L){r("upload",L)}function v(L){var z,G;L.preventDefault();const C=(G=(z=L.dataTransfer)==null?void 0:z.files)==null?void 0:G[0];C&&r("upload",{target:{files:[C]}})}function S(L){d.value=Math.min(400,Math.max(10,d.value+L))}function w(){r("toggle-original")}return(L,C)=>(At(),Ct("div",d_,[V("div",p_,[V("div",m_,[V("span",g_,[V("span",__,Lt(n.currentCategory),1),C[3]||(C[3]=V("span",{class:"breadcrumb-sep"},"/",-1)),V("span",v_,Lt(n.currentPlugin),1)])]),V("div",x_,[V("div",y_,[(At(),Ct(_e,null,oi(p,z=>V("button",{key:z.id,class:re({active:f.value===z.id}),onClick:G=>f.value=z.id,title:z.label},[V("span",{innerHTML:z.icon},null,8,b_)],10,M_)),64))]),V("div",S_,[V("button",{onClick:C[0]||(C[0]=z=>S(-25))},[...C[4]||(C[4]=[V("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[V("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])]),V("span",E_,Lt(d.value)+"%",1),V("button",{onClick:C[1]||(C[1]=z=>S(25))},[...C[5]||(C[5]=[V("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[V("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),V("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])])])]),V("div",{class:"canvas-area",ref_key:"canvasArea",ref:c},[n.hasImage?Ht("",!0):(At(),Ct("div",{key:0,class:"upload-placeholder",onClick:h,onDragover:C[2]||(C[2]=Nn(()=>{},["prevent"])),onDrop:v},[...C[6]||(C[6]=[cs('<div class="upload-box" data-v-e90c1f16><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" data-v-e90c1f16><rect x="3" y="3" width="18" height="18" rx="2" data-v-e90c1f16></rect><circle cx="8.5" cy="8.5" r="1.5" data-v-e90c1f16></circle><polyline points="21 15 16 10 5 21" data-v-e90c1f16></polyline></svg><p class="upload-text" data-v-e90c1f16>点击或拖拽图片到此处</p><p class="upload-sub" data-v-e90c1f16>支持 JPG、PNG、WebP</p></div>',1)])],32)),V("div",{class:re(["scroll-wrap",{scrollable:f.value==="actual",hidden:!n.hasImage}])},[V("div",w_,[V("div",{class:"canvas-wrap",style:xn(m.value),ref_key:"canvasWrapRef",ref:u},[V("canvas",{ref_key:"webglCanvas",ref:s,class:"abs-fill",style:xn({display:n.isWebGL?"block":"none"})},null,4),V("canvas",{ref_key:"canvas2d",ref:o,class:"abs-fill",style:xn({display:n.isWebGL?"none":"block"})},null,4),n.compareMode&&n.hasImage?(At(),Ct("div",{key:0,class:re(["compare-overlay",{"showing-original":n.showingOriginal}]),onClick:w},[V("canvas",{ref_key:"originalCanvas",ref:a,class:"abs-fill",style:xn({opacity:n.showingOriginal?1:0})},null,4),V("div",{class:re(["cmp-badge",n.showingOriginal?"badge-orig":"badge-fx"])},Lt(n.showingOriginal?"原图":"效果"),3),C[7]||(C[7]=V("div",{class:"cmp-hint"},"点击切换",-1))],2)):Ht("",!0)],4)])],2)],512),V("input",{ref_key:"fileInput",ref:l,type:"file",accept:"image/*",onChange:y,style:{display:"none"}},null,544)]))}},A_=Ci(T_,[["__scopeId","data-v-e90c1f16"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kl="162",C_=0,Zc=1,R_=2,qh=1,P_=2,Zn=3,Ai=0,tn=1,ei=2,Si=0,Ir=1,Kc=2,Jc=3,Qc=4,I_=5,$i=100,L_=101,D_=102,tu=103,eu=104,U_=200,N_=201,O_=202,F_=203,ll=204,cl=205,k_=206,B_=207,z_=208,H_=209,G_=210,V_=211,W_=212,X_=213,$_=214,q_=0,j_=1,Y_=2,ya=3,Z_=4,K_=5,J_=6,Q_=7,jh=0,tv=1,ev=2,Ei=0,nv=1,iv=2,rv=3,sv=4,av=5,ov=6,lv=7,Yh=300,Or=301,Fr=302,ul=303,fl=304,Ga=306,hl=1e3,_n=1001,dl=1002,We=1003,nu=1004,jr=1005,Je=1006,ho=1007,Yi=1008,wi=1009,cv=1010,uv=1011,Bl=1012,Zh=1013,bi=1014,ni=1015,ys=1016,Kh=1017,Jh=1018,Ji=1020,fv=1021,vn=1023,hv=1024,dv=1025,Qi=1026,kr=1027,pv=1028,Qh=1029,mv=1030,td=1031,ed=1033,po=33776,mo=33777,go=33778,_o=33779,iu=35840,ru=35841,su=35842,au=35843,nd=36196,ou=37492,lu=37496,cu=37808,uu=37809,fu=37810,hu=37811,du=37812,pu=37813,mu=37814,gu=37815,_u=37816,vu=37817,xu=37818,yu=37819,Mu=37820,bu=37821,vo=36492,Su=36494,Eu=36495,gv=36283,wu=36284,Tu=36285,Au=36286,_v=3200,vv=3201,xv=0,yv=1,Mi="",Pn="srgb",Ri="srgb-linear",zl="display-p3",Va="display-p3-linear",Ma="linear",de="srgb",ba="rec709",Sa="p3",sr=7680,Cu=519,Mv=512,bv=513,Sv=514,id=515,Ev=516,wv=517,Tv=518,Av=519,Ru=35044,Pu="300 es",pl=1035,ii=2e3,Ea=2001;class zr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xo=Math.PI/180,ml=180/Math.PI;function Es(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]).toLowerCase()}function Qe(n,t,e){return Math.max(t,Math.min(e,n))}function Cv(n,t){return(n%t+t)%t}function yo(n,t,e){return(1-e)*n+e*t}function Iu(n){return(n&n-1)===0&&n!==0}function gl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Yr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ye(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Qt{constructor(t=0,e=0){Qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,i,r,s,o,a,l,u){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,u)}set(t,e,i,r,s,o,a,l,u){const c=this.elements;return c[0]=t,c[1]=r,c[2]=a,c[3]=e,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],p=i[5],x=i[8],g=r[0],m=r[3],h=r[6],y=r[1],v=r[4],S=r[7],w=r[2],L=r[5],C=r[8];return s[0]=o*g+a*y+l*w,s[3]=o*m+a*v+l*L,s[6]=o*h+a*S+l*C,s[1]=u*g+c*y+f*w,s[4]=u*m+c*v+f*L,s[7]=u*h+c*S+f*C,s[2]=d*g+p*y+x*w,s[5]=d*m+p*v+x*L,s[8]=d*h+p*S+x*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8];return e*o*c-e*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],f=c*o-a*u,d=a*l-c*s,p=u*s-o*l,x=e*f+i*d+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return t[0]=f*g,t[1]=(r*u-c*i)*g,t[2]=(a*i-r*o)*g,t[3]=d*g,t[4]=(c*e-r*l)*g,t[5]=(r*s-a*e)*g,t[6]=p*g,t[7]=(i*l-u*e)*g,t[8]=(o*e-i*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+t,-r*u,r*l,-r*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Mo.makeScale(t,e)),this}rotate(t){return this.premultiply(Mo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Mo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Mo=new Yt;function rd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function wa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Rv(){const n=wa("canvas");return n.style.display="block",n}const Lu={};function Pv(n){n in Lu||(Lu[n]=!0,console.warn(n))}const Du=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uu=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Us={[Ri]:{transfer:Ma,primaries:ba,toReference:n=>n,fromReference:n=>n},[Pn]:{transfer:de,primaries:ba,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Va]:{transfer:Ma,primaries:Sa,toReference:n=>n.applyMatrix3(Uu),fromReference:n=>n.applyMatrix3(Du)},[zl]:{transfer:de,primaries:Sa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Uu),fromReference:n=>n.applyMatrix3(Du).convertLinearToSRGB()}},Iv=new Set([Ri,Va]),se={enabled:!0,_workingColorSpace:Ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Iv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Us[t].toReference,r=Us[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Us[n].primaries},getTransfer:function(n){return n===Mi?Ma:Us[n].transfer}};function Lr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ar;class sd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ar===void 0&&(ar=wa("canvas")),ar.width=t.width,ar.height=t.height;const i=ar.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ar}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=wa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Lr(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Lr(e[i]/255)*255):e[i]=Lr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Lv=0;class ad{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=Es(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(So(r[o].image)):s.push(So(r[o]))}else s=So(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function So(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dv=0;class je extends zr{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,i=_n,r=_n,s=Je,o=Yi,a=vn,l=wi,u=je.DEFAULT_ANISOTROPY,c=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=Es(),this.name="",this.source=new ad(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hl:t.x=t.x-Math.floor(t.x);break;case _n:t.x=t.x<0?0:1;break;case dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hl:t.y=t.y-Math.floor(t.y);break;case _n:t.y=t.y<0?0:1;break;case dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Yh;je.DEFAULT_ANISOTROPY=1;class De{constructor(t=0,e=0,i=0,r=1){De.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],x=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+g)<.1&&Math.abs(x+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(u+1)/2,S=(p+1)/2,w=(h+1)/2,L=(c+d)/4,C=(f+g)/4,z=(x+m)/4;return v>S&&v>w?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=L/i,s=C/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=L/r,s=z/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=C/s,r=z/s),this.set(i,r,s,e),this}let y=Math.sqrt((m-x)*(m-x)+(f-g)*(f-g)+(d-c)*(d-c));return Math.abs(y)<.001&&(y=1),this.x=(m-x)/y,this.y=(f-g)/y,this.z=(d-c)/y,this.w=Math.acos((u+p+h-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uv extends zr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new je(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ad(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends Uv{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class od extends je{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=We,this.minFilter=We,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nv extends je{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=We,this.minFilter=We,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ws{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],x=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=x,t[e+3]=g;return}if(f!==g||l!==d||u!==p||c!==x){let m=1-a;const h=l*d+u*p+c*x+f*g,y=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const w=Math.sqrt(v),L=Math.atan2(w,h*y);m=Math.sin(m*L)/w,a=Math.sin(a*L)/w}const S=a*y;if(l=l*m+d*S,u=u*m+p*S,c=c*m+x*S,f=f*m+g*S,m===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=w,u*=w,c*=w,f*=w}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],p=s[o+2],x=s[o+3];return t[e]=a*x+c*f+l*p-u*d,t[e+1]=l*x+c*d+u*f-a*p,t[e+2]=u*x+c*p+a*d-l*f,t[e+3]=c*x-a*f-l*d-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*p*x,this._y=u*p*f-d*c*x,this._z=u*c*x+d*p*f,this._w=u*c*f-d*p*x;break;case"YXZ":this._x=d*c*f+u*p*x,this._y=u*p*f-d*c*x,this._z=u*c*x-d*p*f,this._w=u*c*f+d*p*x;break;case"ZXY":this._x=d*c*f-u*p*x,this._y=u*p*f+d*c*x,this._z=u*c*x+d*p*f,this._w=u*c*f-d*p*x;break;case"ZYX":this._x=d*c*f-u*p*x,this._y=u*p*f+d*c*x,this._z=u*c*x-d*p*f,this._w=u*c*f+d*p*x;break;case"YZX":this._x=d*c*f+u*p*x,this._y=u*p*f+d*c*x,this._z=u*c*x-d*p*f,this._w=u*c*f-d*p*x;break;case"XZY":this._x=d*c*f-u*p*x,this._y=u*p*f-d*c*x,this._z=u*c*x+d*p*f,this._w=u*c*f+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],u=e[2],c=e[6],f=e[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,u=e._z,c=e._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-e)*c)/u,d=Math.sin(e*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class mt{constructor(t=0,e=0,i=0){mt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*r-a*i),c=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Eo.copy(this).projectOnVector(t),this.sub(Eo)}reflect(t){return this.sub(Eo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eo=new mt,Nu=new ws;class Ts{constructor(t=new mt(1/0,1/0,1/0),e=new mt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,dn):dn.fromBufferAttribute(s,o),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ns.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ns.copy(i.boundingBox)),Ns.applyMatrix4(t.matrixWorld),this.union(Ns)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zr),Os.subVectors(this.max,Zr),or.subVectors(t.a,Zr),lr.subVectors(t.b,Zr),cr.subVectors(t.c,Zr),di.subVectors(lr,or),pi.subVectors(cr,lr),Oi.subVectors(or,cr);let e=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Oi.z,Oi.y,di.z,0,-di.x,pi.z,0,-pi.x,Oi.z,0,-Oi.x,-di.y,di.x,0,-pi.y,pi.x,0,-Oi.y,Oi.x,0];return!wo(e,or,lr,cr,Os)||(e=[1,0,0,0,1,0,0,0,1],!wo(e,or,lr,cr,Os))?!1:(Fs.crossVectors(di,pi),e=[Fs.x,Fs.y,Fs.z],wo(e,or,lr,cr,Os))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Xn=[new mt,new mt,new mt,new mt,new mt,new mt,new mt,new mt],dn=new mt,Ns=new Ts,or=new mt,lr=new mt,cr=new mt,di=new mt,pi=new mt,Oi=new mt,Zr=new mt,Os=new mt,Fs=new mt,Fi=new mt;function wo(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Fi.fromArray(n,s);const a=r.x*Math.abs(Fi.x)+r.y*Math.abs(Fi.y)+r.z*Math.abs(Fi.z),l=t.dot(Fi),u=e.dot(Fi),c=i.dot(Fi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Ov=new Ts,Kr=new mt,To=new mt;class Hl{constructor(t=new mt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ov.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Kr.subVectors(t,this.center);const e=Kr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Kr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(To.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Kr.copy(t.center).add(To)),this.expandByPoint(Kr.copy(t.center).sub(To))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new mt,Ao=new mt,ks=new mt,mi=new mt,Co=new mt,Bs=new mt,Ro=new mt;class Fv{constructor(t=new mt,e=new mt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($n.copy(this.origin).addScaledVector(this.direction,e),$n.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Ao.copy(t).add(e).multiplyScalar(.5),ks.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(Ao);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ks),a=mi.dot(this.direction),l=-mi.dot(ks),u=mi.lengthSq(),c=Math.abs(1-o*o);let f,d,p,x;if(c>0)if(f=o*l-a,d=o*a-l,x=s*c,f>=0)if(d>=-x)if(d<=x){const g=1/c;f*=g,d*=g,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d<=-x?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ao).addScaledVector(ks,d),p}intersectSphere(t,e){$n.subVectors(t.center,this.origin);const i=$n.dot(this.direction),r=$n.dot($n)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(t.min.x-d.x)*u,r=(t.max.x-d.x)*u):(i=(t.max.x-d.x)*u,r=(t.min.x-d.x)*u),c>=0?(s=(t.min.y-d.y)*c,o=(t.max.y-d.y)*c):(s=(t.max.y-d.y)*c,o=(t.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,e,i,r,s){Co.subVectors(e,t),Bs.subVectors(i,t),Ro.crossVectors(Co,Bs);let o=this.direction.dot(Ro),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,t);const l=a*this.direction.dot(Bs.crossVectors(mi,Bs));if(l<0)return null;const u=a*this.direction.dot(Co.cross(mi));if(u<0||l+u>o)return null;const c=-a*mi.dot(Ro);return c<0?null:this.at(c/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(t,e,i,r,s,o,a,l,u,c,f,d,p,x,g,m){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,u,c,f,d,p,x,g,m)}set(t,e,i,r,s,o,a,l,u,c,f,d,p,x,g,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=x,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/ur.setFromMatrixColumn(t,0).length(),s=1/ur.setFromMatrixColumn(t,1).length(),o=1/ur.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=o*c,p=o*f,x=a*c,g=a*f;e[0]=l*c,e[4]=-l*f,e[8]=u,e[1]=p+x*u,e[5]=d-g*u,e[9]=-a*l,e[2]=g-d*u,e[6]=x+p*u,e[10]=o*l}else if(t.order==="YXZ"){const d=l*c,p=l*f,x=u*c,g=u*f;e[0]=d+g*a,e[4]=x*a-p,e[8]=o*u,e[1]=o*f,e[5]=o*c,e[9]=-a,e[2]=p*a-x,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*c,p=l*f,x=u*c,g=u*f;e[0]=d-g*a,e[4]=-o*f,e[8]=x+p*a,e[1]=p+x*a,e[5]=o*c,e[9]=g-d*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*c,p=o*f,x=a*c,g=a*f;e[0]=l*c,e[4]=x*u-p,e[8]=d*u+g,e[1]=l*f,e[5]=g*u+d,e[9]=p*u-x,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*u,x=a*l,g=a*u;e[0]=l*c,e[4]=g-d*f,e[8]=x*f+p,e[1]=f,e[5]=o*c,e[9]=-a*c,e[2]=-u*c,e[6]=p*f+x,e[10]=d-g*f}else if(t.order==="XZY"){const d=o*l,p=o*u,x=a*l,g=a*u;e[0]=l*c,e[4]=-f,e[8]=u*c,e[1]=d*f+g,e[5]=o*c,e[9]=p*f-x,e[2]=x*f-p,e[6]=a*c,e[10]=g*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kv,t,Bv)}lookAt(t,e,i){const r=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),gi.crossVectors(i,nn),gi.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),gi.crossVectors(i,nn)),gi.normalize(),zs.crossVectors(nn,gi),r[0]=gi.x,r[4]=zs.x,r[8]=nn.x,r[1]=gi.y,r[5]=zs.y,r[9]=nn.y,r[2]=gi.z,r[6]=zs.z,r[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],p=i[13],x=i[2],g=i[6],m=i[10],h=i[14],y=i[3],v=i[7],S=i[11],w=i[15],L=r[0],C=r[4],z=r[8],G=r[12],T=r[1],N=r[5],I=r[9],F=r[13],b=r[2],q=r[6],W=r[10],K=r[14],at=r[3],nt=r[7],ct=r[11],Q=r[15];return s[0]=o*L+a*T+l*b+u*at,s[4]=o*C+a*N+l*q+u*nt,s[8]=o*z+a*I+l*W+u*ct,s[12]=o*G+a*F+l*K+u*Q,s[1]=c*L+f*T+d*b+p*at,s[5]=c*C+f*N+d*q+p*nt,s[9]=c*z+f*I+d*W+p*ct,s[13]=c*G+f*F+d*K+p*Q,s[2]=x*L+g*T+m*b+h*at,s[6]=x*C+g*N+m*q+h*nt,s[10]=x*z+g*I+m*W+h*ct,s[14]=x*G+g*F+m*K+h*Q,s[3]=y*L+v*T+S*b+w*at,s[7]=y*C+v*N+S*q+w*nt,s[11]=y*z+v*I+S*W+w*ct,s[15]=y*G+v*F+S*K+w*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],u=t[13],c=t[2],f=t[6],d=t[10],p=t[14],x=t[3],g=t[7],m=t[11],h=t[15];return x*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*p-i*l*p)+g*(+e*l*p-e*u*d+s*o*d-r*o*p+r*u*c-s*l*c)+m*(+e*u*f-e*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-e*l*f+e*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],f=t[9],d=t[10],p=t[11],x=t[12],g=t[13],m=t[14],h=t[15],y=f*m*u-g*d*u+g*l*p-a*m*p-f*l*h+a*d*h,v=x*d*u-c*m*u-x*l*p+o*m*p+c*l*h-o*d*h,S=c*g*u-x*f*u+x*a*p-o*g*p-c*a*h+o*f*h,w=x*f*l-c*g*l-x*a*d+o*g*d+c*a*m-o*f*m,L=e*y+i*v+r*S+s*w;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/L;return t[0]=y*C,t[1]=(g*d*s-f*m*s-g*r*p+i*m*p+f*r*h-i*d*h)*C,t[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*h+i*l*h)*C,t[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*p-i*l*p)*C,t[4]=v*C,t[5]=(c*m*s-x*d*s+x*r*p-e*m*p-c*r*h+e*d*h)*C,t[6]=(x*l*s-o*m*s-x*r*u+e*m*u+o*r*h-e*l*h)*C,t[7]=(o*d*s-c*l*s+c*r*u-e*d*u-o*r*p+e*l*p)*C,t[8]=S*C,t[9]=(x*f*s-c*g*s-x*i*p+e*g*p+c*i*h-e*f*h)*C,t[10]=(o*g*s-x*a*s+x*i*u-e*g*u-o*i*h+e*a*h)*C,t[11]=(c*a*s-o*f*s-c*i*u+e*f*u+o*i*p-e*a*p)*C,t[12]=w*C,t[13]=(c*g*r-x*f*r+x*i*d-e*g*d-c*i*m+e*f*m)*C,t[14]=(x*a*r-o*g*r-x*i*l+e*g*l+o*i*m-e*a*m)*C,t[15]=(o*f*r-c*a*r+c*i*l-e*f*l-o*i*d+e*a*d)*C,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,u=s+s,c=o+o,f=a+a,d=s*u,p=s*c,x=s*f,g=o*c,m=o*f,h=a*f,y=l*u,v=l*c,S=l*f,w=i.x,L=i.y,C=i.z;return r[0]=(1-(g+h))*w,r[1]=(p+S)*w,r[2]=(x-v)*w,r[3]=0,r[4]=(p-S)*L,r[5]=(1-(d+h))*L,r[6]=(m+y)*L,r[7]=0,r[8]=(x+v)*C,r[9]=(m-y)*C,r[10]=(1-(d+g))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=ur.set(r[0],r[1],r[2]).length();const o=ur.set(r[4],r[5],r[6]).length(),a=ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],pn.copy(this);const u=1/s,c=1/o,f=1/a;return pn.elements[0]*=u,pn.elements[1]*=u,pn.elements[2]*=u,pn.elements[4]*=c,pn.elements[5]*=c,pn.elements[6]*=c,pn.elements[8]*=f,pn.elements[9]*=f,pn.elements[10]*=f,e.setFromRotationMatrix(pn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=ii){const l=this.elements,u=2*s/(e-t),c=2*s/(i-r),f=(e+t)/(e-t),d=(i+r)/(i-r);let p,x;if(a===ii)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Ea)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=ii){const l=this.elements,u=1/(e-t),c=1/(i-r),f=1/(o-s),d=(e+t)*u,p=(i+r)*c;let x,g;if(a===ii)x=(o+s)*f,g=-2*f;else if(a===Ea)x=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ur=new mt,pn=new we,kv=new mt(0,0,0),Bv=new mt(1,1,1),gi=new mt,zs=new mt,nn=new mt,Ou=new we,Fu=new ws;class li{constructor(t=0,e=0,i=0,r=li.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ou.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ou,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fu.setFromEuler(this),this.setFromQuaternion(Fu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class ld{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zv=0;const ku=new mt,fr=new ws,qn=new we,Hs=new mt,Jr=new mt,Hv=new mt,Gv=new ws,Bu=new mt(1,0,0),zu=new mt(0,1,0),Hu=new mt(0,0,1),Vv={type:"added"},Wv={type:"removed"},Po={type:"childadded",child:null},Io={type:"childremoved",child:null};class on extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const t=new mt,e=new li,i=new ws,r=new mt(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new we},normalMatrix:{value:new Yt}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ld,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fr.setFromAxisAngle(t,e),this.quaternion.multiply(fr),this}rotateOnWorldAxis(t,e){return fr.setFromAxisAngle(t,e),this.quaternion.premultiply(fr),this}rotateX(t){return this.rotateOnAxis(Bu,t)}rotateY(t){return this.rotateOnAxis(zu,t)}rotateZ(t){return this.rotateOnAxis(Hu,t)}translateOnAxis(t,e){return ku.copy(t).applyQuaternion(this.quaternion),this.position.add(ku.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bu,t)}translateY(t){return this.translateOnAxis(zu,t)}translateZ(t){return this.translateOnAxis(Hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Hs.copy(t):Hs.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Jr,Hs,this.up):qn.lookAt(Hs,Jr,this.up),this.quaternion.setFromRotationMatrix(qn),r&&(qn.extractRotation(r.matrixWorld),fr.setFromRotationMatrix(qn),this.quaternion.premultiply(fr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Vv),Po.child=t,this.dispatchEvent(Po),Po.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wv),Io.child=t,this.dispatchEvent(Io),Io.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,t,Hv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,Gv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),c=o(t.images),f=o(t.shapes),d=o(t.skeletons),p=o(t.animations),x=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}on.DEFAULT_UP=new mt(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new mt,jn=new mt,Lo=new mt,Yn=new mt,hr=new mt,dr=new mt,Gu=new mt,Do=new mt,Uo=new mt,No=new mt;class On{constructor(t=new mt,e=new mt,i=new mt){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),mn.subVectors(t,e),r.cross(mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){mn.subVectors(r,e),jn.subVectors(i,e),Lo.subVectors(t,e);const o=mn.dot(mn),a=mn.dot(jn),l=mn.dot(Lo),u=jn.dot(jn),c=jn.dot(Lo),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(u*l-a*c)*d,x=(o*c-a*l)*d;return s.set(1-p-x,x,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static isFrontFacing(t,e,i,r){return mn.subVectors(i,e),jn.subVectors(t,e),mn.cross(jn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),mn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return On.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return On.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return On.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return On.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return On.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;hr.subVectors(r,i),dr.subVectors(s,i),Do.subVectors(t,i);const l=hr.dot(Do),u=dr.dot(Do);if(l<=0&&u<=0)return e.copy(i);Uo.subVectors(t,r);const c=hr.dot(Uo),f=dr.dot(Uo);if(c>=0&&f<=c)return e.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(i).addScaledVector(hr,o);No.subVectors(t,s);const p=hr.dot(No),x=dr.dot(No);if(x>=0&&p<=x)return e.copy(s);const g=p*u-l*x;if(g<=0&&u>=0&&x<=0)return a=u/(u-x),e.copy(i).addScaledVector(dr,a);const m=c*x-p*f;if(m<=0&&f-c>=0&&p-x>=0)return Gu.subVectors(s,r),a=(f-c)/(f-c+(p-x)),e.copy(r).addScaledVector(Gu,a);const h=1/(m+g+d);return o=g*h,a=d*h,e.copy(i).addScaledVector(hr,o).addScaledVector(dr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function Oo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class oe{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=se.workingColorSpace){return this.r=t,this.g=e,this.b=i,se.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=se.workingColorSpace){if(t=Cv(t,1),e=Qe(e,0,1),i=Qe(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Oo(o,s,t+1/3),this.g=Oo(o,s,t),this.b=Oo(o,s,t-1/3)}return se.toWorkingColorSpace(this,r),this}setStyle(t,e=Pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pn){const i=cd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Lr(t.r),this.g=Lr(t.g),this.b=Lr(t.b),this}copyLinearToSRGB(t){return this.r=bo(t.r),this.g=bo(t.g),this.b=bo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pn){return se.fromWorkingColorSpace(Oe.copy(this),t),Math.round(Qe(Oe.r*255,0,255))*65536+Math.round(Qe(Oe.g*255,0,255))*256+Math.round(Qe(Oe.b*255,0,255))}getHexString(t=Pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(Oe.copy(this),e);const i=Oe.r,r=Oe.g,s=Oe.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=Pn){se.fromWorkingColorSpace(Oe.copy(this),t);const e=Oe.r,i=Oe.g,r=Oe.b;return t!==Pn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(Gs);const i=yo(_i.h,Gs.h,e),r=yo(_i.s,Gs.s,e),s=yo(_i.l,Gs.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new oe;oe.NAMES=cd;let Xv=0;class Wa extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=Ir,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ll,this.blendDst=cl,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ir&&(i.blending=this.blending),this.side!==Ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ll&&(i.blendSrc=this.blendSrc),this.blendDst!==cl&&(i.blendDst=this.blendDst),this.blendEquation!==$i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ya&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ud extends Wa{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new mt,Vs=new Qt;class Bn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ru,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Pv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Vs.fromBufferAttribute(this,e),Vs.applyMatrix3(t),this.setXY(e,Vs.x,Vs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Yr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ye(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array),r=Ye(r,this.array),s=Ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ru&&(t.usage=this.usage),t}}class fd extends Bn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class hd extends Bn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class tr extends Bn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let $v=0;const fn=new we,Fo=new on,pr=new mt,rn=new Ts,Qr=new Ts,Pe=new mt;class ir extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rd(t)?hd:fd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Yt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,i){return fn.makeTranslation(t,e,i),this.applyMatrix4(fn),this}scale(t,e,i){return fn.makeScale(t,e,i),this.applyMatrix4(fn),this}lookAt(t){return Fo.lookAt(t),Fo.updateMatrix(),this.applyMatrix4(Fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tr(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new mt(-1/0,-1/0,-1/0),new mt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new mt,1/0);return}if(t){const i=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Qr.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(rn.min,Qr.min),rn.expandByPoint(Pe),Pe.addVectors(rn.max,Qr.max),rn.expandByPoint(Pe)):(rn.expandByPoint(Qr.min),rn.expandByPoint(Qr.max))}rn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Pe.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Pe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Pe.fromBufferAttribute(a,u),l&&(pr.fromBufferAttribute(t,u),Pe.add(pr)),r=Math.max(r,i.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let z=0;z<i.count;z++)a[z]=new mt,l[z]=new mt;const u=new mt,c=new mt,f=new mt,d=new Qt,p=new Qt,x=new Qt,g=new mt,m=new mt;function h(z,G,T){u.fromBufferAttribute(i,z),c.fromBufferAttribute(i,G),f.fromBufferAttribute(i,T),d.fromBufferAttribute(s,z),p.fromBufferAttribute(s,G),x.fromBufferAttribute(s,T),c.sub(u),f.sub(u),p.sub(d),x.sub(d);const N=1/(p.x*x.y-x.x*p.y);isFinite(N)&&(g.copy(c).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(N),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-x.x).multiplyScalar(N),a[z].add(g),a[G].add(g),a[T].add(g),l[z].add(m),l[G].add(m),l[T].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let z=0,G=y.length;z<G;++z){const T=y[z],N=T.start,I=T.count;for(let F=N,b=N+I;F<b;F+=3)h(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const v=new mt,S=new mt,w=new mt,L=new mt;function C(z){w.fromBufferAttribute(r,z),L.copy(w);const G=a[z];v.copy(G),v.sub(w.multiplyScalar(w.dot(G))).normalize(),S.crossVectors(L,G);const N=S.dot(l[z])<0?-1:1;o.setXYZW(z,v.x,v.y,v.z,N)}for(let z=0,G=y.length;z<G;++z){const T=y[z],N=T.start,I=T.count;for(let F=N,b=N+I;F<b;F+=3)C(t.getX(F+0)),C(t.getX(F+1)),C(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new mt,s=new mt,o=new mt,a=new mt,l=new mt,u=new mt,c=new mt,f=new mt;if(t)for(let d=0,p=t.count;d<p;d+=3){const x=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,x),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let p=0,x=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*c;for(let h=0;h<c;h++)d[x++]=u[p++]}return new Bn(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ir,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=t(l,i);e.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=t(d,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(t.data))}c.length>0&&(r[l]=c,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(e))}const s=t.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vu=new we,ki=new Fv,Ws=new Hl,Wu=new mt,mr=new mt,gr=new mt,_r=new mt,ko=new mt,Xs=new mt,$s=new Qt,qs=new Qt,js=new Qt,Xu=new mt,$u=new mt,qu=new mt,Ys=new mt,Zs=new mt;class Fn extends on{constructor(t=new ir,e=new ud){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Xs.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(ko.fromBufferAttribute(f,t),o?Xs.addScaledVector(ko,c):Xs.addScaledVector(ko.sub(e),c))}e.add(Xs)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere),Ws.applyMatrix4(s),ki.copy(t.ray).recast(t.near),!(Ws.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Ws,Wu)===null||ki.origin.distanceToSquared(Wu)>(t.far-t.near)**2))&&(Vu.copy(s).invert(),ki.copy(t.ray).applyMatrix4(Vu),!(i.boundingBox!==null&&ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=d.length;x<g;x++){const m=d[x],h=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=y,w=v;S<w;S+=3){const L=a.getX(S),C=a.getX(S+1),z=a.getX(S+2);r=Ks(this,h,t,i,u,c,f,L,C,z),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const x=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=x,h=g;m<h;m+=3){const y=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);r=Ks(this,o,t,i,u,c,f,y,v,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,g=d.length;x<g;x++){const m=d[x],h=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=y,w=v;S<w;S+=3){const L=S,C=S+1,z=S+2;r=Ks(this,h,t,i,u,c,f,L,C,z),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const x=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=x,h=g;m<h;m+=3){const y=m,v=m+1,S=m+2;r=Ks(this,o,t,i,u,c,f,y,v,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function qv(n,t,e,i,r,s,o,a){let l;if(t.side===tn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===Ai,a),l===null)return null;Zs.copy(a),Zs.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(Zs);return u<e.near||u>e.far?null:{distance:u,point:Zs.clone(),object:n}}function Ks(n,t,e,i,r,s,o,a,l,u){n.getVertexPosition(a,mr),n.getVertexPosition(l,gr),n.getVertexPosition(u,_r);const c=qv(n,t,e,i,mr,gr,_r,Ys);if(c){r&&($s.fromBufferAttribute(r,a),qs.fromBufferAttribute(r,l),js.fromBufferAttribute(r,u),c.uv=On.getInterpolation(Ys,mr,gr,_r,$s,qs,js,new Qt)),s&&($s.fromBufferAttribute(s,a),qs.fromBufferAttribute(s,l),js.fromBufferAttribute(s,u),c.uv1=On.getInterpolation(Ys,mr,gr,_r,$s,qs,js,new Qt)),o&&(Xu.fromBufferAttribute(o,a),$u.fromBufferAttribute(o,l),qu.fromBufferAttribute(o,u),c.normal=On.getInterpolation(Ys,mr,gr,_r,Xu,$u,qu,new mt),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new mt,materialIndex:0};On.getNormal(mr,gr,_r,f.normal),c.face=f}return c}class As extends ir{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,p=0;x("z","y","x",-1,-1,i,e,t,o,s,0),x("z","y","x",1,-1,i,e,-t,o,s,1),x("x","z","y",1,1,t,i,e,r,o,2),x("x","z","y",1,-1,t,i,-e,r,o,3),x("x","y","z",1,-1,t,e,i,r,s,4),x("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new tr(u,3)),this.setAttribute("normal",new tr(c,3)),this.setAttribute("uv",new tr(f,2));function x(g,m,h,y,v,S,w,L,C,z,G){const T=S/C,N=w/z,I=S/2,F=w/2,b=L/2,q=C+1,W=z+1;let K=0,at=0;const nt=new mt;for(let ct=0;ct<W;ct++){const Q=ct*N-F;for(let Z=0;Z<q;Z++){const _t=Z*T-I;nt[g]=_t*y,nt[m]=Q*v,nt[h]=b,u.push(nt.x,nt.y,nt.z),nt[g]=0,nt[m]=0,nt[h]=L>0?1:-1,c.push(nt.x,nt.y,nt.z),f.push(Z/C),f.push(1-ct/z),K+=1}}for(let ct=0;ct<z;ct++)for(let Q=0;Q<C;Q++){const Z=d+Q+q*ct,_t=d+Q+q*(ct+1),rt=d+(Q+1)+q*(ct+1),U=d+(Q+1)+q*ct;l.push(Z,_t,U),l.push(_t,rt,U),at+=6}a.addGroup(p,at,G),p+=at,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new As(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Br(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ge(n){const t={};for(let e=0;e<n.length;e++){const i=Br(n[e]);for(const r in i)t[r]=i[r]}return t}function jv(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function dd(n){return n.getRenderTarget()===null?n.outputColorSpace:se.workingColorSpace}const Yv={clone:Br,merge:Ge};var Zv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends Wa{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zv,this.fragmentShader=Kv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Br(t.uniforms),this.uniformsGroups=jv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class pd extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new mt,ju=new Qt,Yu=new Qt;class gn extends pd{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ml*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ml*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,ju,Yu),e.subVectors(Yu,ju)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(xo*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const vr=-90,xr=1;class Jv extends on{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(vr,xr,t,e);r.layers=this.layers,this.add(r);const s=new gn(vr,xr,t,e);s.layers=this.layers,this.add(s);const o=new gn(vr,xr,t,e);o.layers=this.layers,this.add(o);const a=new gn(vr,xr,t,e);a.layers=this.layers,this.add(a);const l=new gn(vr,xr,t,e);l.layers=this.layers,this.add(l);const u=new gn(vr,xr,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const u of e)this.remove(u);if(t===ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,u),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,r),t.render(e,c),t.setRenderTarget(f,d,p),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class md extends je{constructor(t,e,i,r,s,o,a,l,u,c){t=t!==void 0?t:[],e=e!==void 0?e:Or,super(t,e,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qv extends er{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new md(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new As(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:Br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Si});s.uniforms.tEquirect.value=e;const o=new Fn(r,s),a=e.minFilter;return e.minFilter===Yi&&(e.minFilter=Je),new Jv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const Bo=new mt,tx=new mt,ex=new Yt;class Vi{constructor(t=new mt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Bo.subVectors(i,e).cross(tx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Bo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ex.getNormalMatrix(t),r=this.coplanarPoint(Bo).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new Hl,Js=new mt;class gd{constructor(t=new Vi,e=new Vi,i=new Vi,r=new Vi,s=new Vi,o=new Vi){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ii){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],p=r[8],x=r[9],g=r[10],m=r[11],h=r[12],y=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,d-u,m-p,S-h).normalize(),i[1].setComponents(l+s,d+u,m+p,S+h).normalize(),i[2].setComponents(l+o,d+c,m+x,S+y).normalize(),i[3].setComponents(l-o,d-c,m-x,S-y).normalize(),i[4].setComponents(l-a,d-f,m-g,S-v).normalize(),e===ii)i[5].setComponents(l+a,d+f,m+g,S+v).normalize();else if(e===Ea)i[5].setComponents(a,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Js.x=r.normal.x>0?t.max.x:t.min.x,Js.y=r.normal.y>0?t.max.y:t.min.y,Js.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _d(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function nx(n,t){const e=t.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,d=u.usage,p=f.byteLength,x=n.createBuffer();n.bindBuffer(c,x),n.bufferData(c,f,d),u.onUploadCallback();let g;if(f instanceof Float32Array)g=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(e)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=n.SHORT;else if(f instanceof Uint32Array)g=n.UNSIGNED_INT;else if(f instanceof Int32Array)g=n.INT;else if(f instanceof Int8Array)g=n.BYTE;else if(f instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,f){const d=c.array,p=c._updateRange,x=c.updateRanges;if(n.bindBuffer(f,u),p.count===-1&&x.length===0&&n.bufferSubData(f,0,d),x.length!==0){for(let g=0,m=x.length;g<m;g++){const h=x[g];e?n.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):n.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}c.clearUpdateRanges()}p.count!==-1&&(e?n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:o,remove:a,update:l}}class Cs extends ir{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=t/a,d=e/l,p=[],x=[],g=[],m=[];for(let h=0;h<c;h++){const y=h*d-o;for(let v=0;v<u;v++){const S=v*f-s;x.push(S,-y,0),g.push(0,0,1),m.push(v/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<a;y++){const v=y+u*h,S=y+u*(h+1),w=y+1+u*(h+1),L=y+1+u*h;p.push(v,S,L),p.push(S,w,L)}this.setIndex(p),this.setAttribute("position",new tr(x,3)),this.setAttribute("normal",new tr(g,3)),this.setAttribute("uv",new tr(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cs(t.width,t.height,t.widthSegments,t.heightSegments)}}var ix=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rx=`#ifdef USE_ALPHAHASH
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
#endif`,sx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ax=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ox=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cx=`#ifdef USE_AOMAP
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
#endif`,ux=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fx=`#ifdef USE_BATCHING
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
#endif`,hx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,dx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,px=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gx=`#ifdef USE_IRIDESCENCE
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
#endif`,_x=`#ifdef USE_BUMPMAP
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
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Tx=`#define PI 3.141592653589793
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
} // validated`,Ax=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cx=`vec3 transformedNormal = objectNormal;
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
#endif`,Rx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Px=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ix=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ux=`
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
}`,Nx=`#ifdef USE_ENVMAP
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
#endif`,Ox=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fx=`#ifdef USE_ENVMAP
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
#endif`,kx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bx=`#ifdef USE_ENVMAP
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
#endif`,zx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wx=`#ifdef USE_GRADIENTMAP
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
}`,Xx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$x=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yx=`uniform bool receiveShadow;
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
#endif`,Zx=`#ifdef USE_ENVMAP
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
#endif`,Kx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e1=`PhysicalMaterial material;
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
#endif`,n1=`struct PhysicalMaterial {
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
}`,i1=`
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
#endif`,r1=`#if defined( RE_IndirectDiffuse )
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
#endif`,s1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,c1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,u1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d1=`#if defined( USE_POINTS_UV )
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
#endif`,p1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v1=`#ifdef USE_MORPHNORMALS
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
#endif`,x1=`#ifdef USE_MORPHTARGETS
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
#endif`,y1=`#ifdef USE_MORPHTARGETS
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
#endif`,M1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,b1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,S1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T1=`#ifdef USE_NORMALMAP
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
#endif`,A1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,D1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,G1=`float getShadowMask() {
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
}`,V1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W1=`#ifdef USE_SKINNING
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
#endif`,X1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$1=`#ifdef USE_SKINNING
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
#endif`,q1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K1=`#ifdef USE_TRANSMISSION
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
#endif`,J1=`#ifdef USE_TRANSMISSION
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
#endif`,Q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ny=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ry=`uniform sampler2D t2D;
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
}`,sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ay=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ly=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cy=`#include <common>
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
}`,uy=`#if DEPTH_PACKING == 3200
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
}`,fy=`#define DISTANCE
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
}`,hy=`#define DISTANCE
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
}`,dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,py=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`uniform float scale;
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
}`,gy=`uniform vec3 diffuse;
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
}`,_y=`#include <common>
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
}`,vy=`uniform vec3 diffuse;
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
}`,xy=`#define LAMBERT
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
}`,yy=`#define LAMBERT
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
}`,My=`#define MATCAP
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
}`,by=`#define MATCAP
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
}`,Sy=`#define NORMAL
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
}`,Ey=`#define NORMAL
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
}`,wy=`#define PHONG
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
}`,Ty=`#define PHONG
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
}`,Ay=`#define STANDARD
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
}`,Cy=`#define STANDARD
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
}`,Ry=`#define TOON
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
}`,Py=`#define TOON
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
}`,Iy=`uniform float size;
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
}`,Ly=`uniform vec3 diffuse;
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
}`,Dy=`#include <common>
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
}`,Uy=`uniform vec3 color;
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
}`,Ny=`uniform float rotation;
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
}`,Oy=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:ix,alphahash_pars_fragment:rx,alphamap_fragment:sx,alphamap_pars_fragment:ax,alphatest_fragment:ox,alphatest_pars_fragment:lx,aomap_fragment:cx,aomap_pars_fragment:ux,batching_pars_vertex:fx,batching_vertex:hx,begin_vertex:dx,beginnormal_vertex:px,bsdfs:mx,iridescence_fragment:gx,bumpmap_pars_fragment:_x,clipping_planes_fragment:vx,clipping_planes_pars_fragment:xx,clipping_planes_pars_vertex:yx,clipping_planes_vertex:Mx,color_fragment:bx,color_pars_fragment:Sx,color_pars_vertex:Ex,color_vertex:wx,common:Tx,cube_uv_reflection_fragment:Ax,defaultnormal_vertex:Cx,displacementmap_pars_vertex:Rx,displacementmap_vertex:Px,emissivemap_fragment:Ix,emissivemap_pars_fragment:Lx,colorspace_fragment:Dx,colorspace_pars_fragment:Ux,envmap_fragment:Nx,envmap_common_pars_fragment:Ox,envmap_pars_fragment:Fx,envmap_pars_vertex:kx,envmap_physical_pars_fragment:Zx,envmap_vertex:Bx,fog_vertex:zx,fog_pars_vertex:Hx,fog_fragment:Gx,fog_pars_fragment:Vx,gradientmap_pars_fragment:Wx,lightmap_fragment:Xx,lightmap_pars_fragment:$x,lights_lambert_fragment:qx,lights_lambert_pars_fragment:jx,lights_pars_begin:Yx,lights_toon_fragment:Kx,lights_toon_pars_fragment:Jx,lights_phong_fragment:Qx,lights_phong_pars_fragment:t1,lights_physical_fragment:e1,lights_physical_pars_fragment:n1,lights_fragment_begin:i1,lights_fragment_maps:r1,lights_fragment_end:s1,logdepthbuf_fragment:a1,logdepthbuf_pars_fragment:o1,logdepthbuf_pars_vertex:l1,logdepthbuf_vertex:c1,map_fragment:u1,map_pars_fragment:f1,map_particle_fragment:h1,map_particle_pars_fragment:d1,metalnessmap_fragment:p1,metalnessmap_pars_fragment:m1,morphinstance_vertex:g1,morphcolor_vertex:_1,morphnormal_vertex:v1,morphtarget_pars_vertex:x1,morphtarget_vertex:y1,normal_fragment_begin:M1,normal_fragment_maps:b1,normal_pars_fragment:S1,normal_pars_vertex:E1,normal_vertex:w1,normalmap_pars_fragment:T1,clearcoat_normal_fragment_begin:A1,clearcoat_normal_fragment_maps:C1,clearcoat_pars_fragment:R1,iridescence_pars_fragment:P1,opaque_fragment:I1,packing:L1,premultiplied_alpha_fragment:D1,project_vertex:U1,dithering_fragment:N1,dithering_pars_fragment:O1,roughnessmap_fragment:F1,roughnessmap_pars_fragment:k1,shadowmap_pars_fragment:B1,shadowmap_pars_vertex:z1,shadowmap_vertex:H1,shadowmask_pars_fragment:G1,skinbase_vertex:V1,skinning_pars_vertex:W1,skinning_vertex:X1,skinnormal_vertex:$1,specularmap_fragment:q1,specularmap_pars_fragment:j1,tonemapping_fragment:Y1,tonemapping_pars_fragment:Z1,transmission_fragment:K1,transmission_pars_fragment:J1,uv_pars_fragment:Q1,uv_pars_vertex:ty,uv_vertex:ey,worldpos_vertex:ny,background_vert:iy,background_frag:ry,backgroundCube_vert:sy,backgroundCube_frag:ay,cube_vert:oy,cube_frag:ly,depth_vert:cy,depth_frag:uy,distanceRGBA_vert:fy,distanceRGBA_frag:hy,equirect_vert:dy,equirect_frag:py,linedashed_vert:my,linedashed_frag:gy,meshbasic_vert:_y,meshbasic_frag:vy,meshlambert_vert:xy,meshlambert_frag:yy,meshmatcap_vert:My,meshmatcap_frag:by,meshnormal_vert:Sy,meshnormal_frag:Ey,meshphong_vert:wy,meshphong_frag:Ty,meshphysical_vert:Ay,meshphysical_frag:Cy,meshtoon_vert:Ry,meshtoon_frag:Py,points_vert:Iy,points_frag:Ly,shadow_vert:Dy,shadow_frag:Uy,sprite_vert:Ny,sprite_frag:Oy},wt={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Dn={basic:{uniforms:Ge([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Ge([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new oe(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Ge([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Ge([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Ge([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new oe(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Ge([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Ge([wt.points,wt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Ge([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Ge([wt.common,wt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Ge([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Ge([wt.sprite,wt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Ge([wt.common,wt.displacementmap,{referencePosition:{value:new mt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Ge([wt.lights,wt.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Dn.physical={uniforms:Ge([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Qs={r:0,b:0,g:0},zi=new li,Fy=new we;function ky(n,t,e,i,r,s,o){const a=new oe(0);let l=s===!0?0:1,u,c,f=null,d=0,p=null;function x(m,h){let y=!1,v=h.isScene===!0?h.background:null;v&&v.isTexture&&(v=(h.backgroundBlurriness>0?e:t).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),y=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ga)?(c===void 0&&(c=new Fn(new As(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:Br(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,L,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),zi.copy(h.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Fy.makeRotationFromEuler(zi)),c.material.toneMapped=se.getTransfer(v.colorSpace)!==de,(f!==v||d!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new Fn(new Cs(2,2),new ci({name:"BackgroundMaterial",uniforms:Br(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=se.getTransfer(v.colorSpace)!==de,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=v,d=v.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function g(m,h){m.getRGB(Qs,dd(n)),i.buffers.color.setClear(Qs.r,Qs.g,Qs.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:x}}function By(n,t,e,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function f(b,q,W,K,at){let nt=!1;if(o){const ct=g(K,W,q);u!==ct&&(u=ct,p(u.object)),nt=h(b,K,W,at),nt&&y(b,K,W,at)}else{const ct=q.wireframe===!0;(u.geometry!==K.id||u.program!==W.id||u.wireframe!==ct)&&(u.geometry=K.id,u.program=W.id,u.wireframe=ct,nt=!0)}at!==null&&e.update(at,n.ELEMENT_ARRAY_BUFFER),(nt||c)&&(c=!1,z(b,q,W,K),at!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(at).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(b){return i.isWebGL2?n.bindVertexArray(b):s.bindVertexArrayOES(b)}function x(b){return i.isWebGL2?n.deleteVertexArray(b):s.deleteVertexArrayOES(b)}function g(b,q,W){const K=W.wireframe===!0;let at=a[b.id];at===void 0&&(at={},a[b.id]=at);let nt=at[q.id];nt===void 0&&(nt={},at[q.id]=nt);let ct=nt[K];return ct===void 0&&(ct=m(d()),nt[K]=ct),ct}function m(b){const q=[],W=[],K=[];for(let at=0;at<r;at++)q[at]=0,W[at]=0,K[at]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:W,attributeDivisors:K,object:b,attributes:{},index:null}}function h(b,q,W,K){const at=u.attributes,nt=q.attributes;let ct=0;const Q=W.getAttributes();for(const Z in Q)if(Q[Z].location>=0){const rt=at[Z];let U=nt[Z];if(U===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(U=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(U=b.instanceColor)),rt===void 0||rt.attribute!==U||U&&rt.data!==U.data)return!0;ct++}return u.attributesNum!==ct||u.index!==K}function y(b,q,W,K){const at={},nt=q.attributes;let ct=0;const Q=W.getAttributes();for(const Z in Q)if(Q[Z].location>=0){let rt=nt[Z];rt===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(rt=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(rt=b.instanceColor));const U={};U.attribute=rt,rt&&rt.data&&(U.data=rt.data),at[Z]=U,ct++}u.attributes=at,u.attributesNum=ct,u.index=K}function v(){const b=u.newAttributes;for(let q=0,W=b.length;q<W;q++)b[q]=0}function S(b){w(b,0)}function w(b,q){const W=u.newAttributes,K=u.enabledAttributes,at=u.attributeDivisors;W[b]=1,K[b]===0&&(n.enableVertexAttribArray(b),K[b]=1),at[b]!==q&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](b,q),at[b]=q)}function L(){const b=u.newAttributes,q=u.enabledAttributes;for(let W=0,K=q.length;W<K;W++)q[W]!==b[W]&&(n.disableVertexAttribArray(W),q[W]=0)}function C(b,q,W,K,at,nt,ct){ct===!0?n.vertexAttribIPointer(b,q,W,at,nt):n.vertexAttribPointer(b,q,W,K,at,nt)}function z(b,q,W,K){if(i.isWebGL2===!1&&(b.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const at=K.attributes,nt=W.getAttributes(),ct=q.defaultAttributeValues;for(const Q in nt){const Z=nt[Q];if(Z.location>=0){let _t=at[Q];if(_t===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(_t=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(_t=b.instanceColor)),_t!==void 0){const rt=_t.normalized,U=_t.itemSize,J=e.get(_t);if(J===void 0)continue;const H=J.buffer,it=J.type,st=J.bytesPerElement,dt=i.isWebGL2===!0&&(it===n.INT||it===n.UNSIGNED_INT||_t.gpuType===Zh);if(_t.isInterleavedBufferAttribute){const j=_t.data,M=j.stride,D=_t.offset;if(j.isInstancedInterleavedBuffer){for(let _=0;_<Z.locationSize;_++)w(Z.location+_,j.meshPerAttribute);b.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let _=0;_<Z.locationSize;_++)S(Z.location+_);n.bindBuffer(n.ARRAY_BUFFER,H);for(let _=0;_<Z.locationSize;_++)C(Z.location+_,U/Z.locationSize,it,rt,M*st,(D+U/Z.locationSize*_)*st,dt)}else{if(_t.isInstancedBufferAttribute){for(let j=0;j<Z.locationSize;j++)w(Z.location+j,_t.meshPerAttribute);b.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let j=0;j<Z.locationSize;j++)S(Z.location+j);n.bindBuffer(n.ARRAY_BUFFER,H);for(let j=0;j<Z.locationSize;j++)C(Z.location+j,U/Z.locationSize,it,rt,U*st,U/Z.locationSize*j*st,dt)}}else if(ct!==void 0){const rt=ct[Q];if(rt!==void 0)switch(rt.length){case 2:n.vertexAttrib2fv(Z.location,rt);break;case 3:n.vertexAttrib3fv(Z.location,rt);break;case 4:n.vertexAttrib4fv(Z.location,rt);break;default:n.vertexAttrib1fv(Z.location,rt)}}}}L()}function G(){I();for(const b in a){const q=a[b];for(const W in q){const K=q[W];for(const at in K)x(K[at].object),delete K[at];delete q[W]}delete a[b]}}function T(b){if(a[b.id]===void 0)return;const q=a[b.id];for(const W in q){const K=q[W];for(const at in K)x(K[at].object),delete K[at];delete q[W]}delete a[b.id]}function N(b){for(const q in a){const W=a[q];if(W[b.id]===void 0)continue;const K=W[b.id];for(const at in K)x(K[at].object),delete K[at];delete W[b.id]}}function I(){F(),c=!0,u!==l&&(u=l,p(u.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:I,resetDefaultState:F,dispose:G,releaseStatesOfGeometry:T,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:S,disableUnusedAttributes:L}}function zy(n,t,e,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,f){n.drawArrays(s,c,f),e.update(f,s,1)}function l(c,f,d){if(d===0)return;let p,x;if(r)p=n,x="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[x](s,c,f,d),e.update(f,s,d)}function u(c,f,d){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<d;x++)this.render(c[x],f[x]);else{p.multiDrawArraysWEBGL(s,c,0,f,0,d);let x=0;for(let g=0;g<d;g++)x+=f[g];e.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function Hy(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||t.has("WEBGL_draw_buffers"),c=e.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,S=o||t.has("OES_texture_float"),w=v&&S,L=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:L}}function Gy(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Vi,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=c(f,d,0)},this.setState=function(f,d,p){const x=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||x===null||x.length===0||s&&!m)s?c(null):u();else{const y=s?0:i,v=y*4;let S=h.clippingState||null;l.value=S,S=c(x,d,v,p);for(let w=0;w!==v;++w)S[w]=e[w];h.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(f,d,p,x){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,x!==!0||m===null){const h=p+g*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,S=p;v!==g;++v,S+=4)o.copy(f[v]).applyMatrix4(y,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Vy(n){let t=new WeakMap;function e(o,a){return a===ul?o.mapping=Or:a===fl&&(o.mapping=Fr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ul||a===fl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Qv(l.height);return u.fromEquirectangularTexture(n,o),t.set(o,u),o.addEventListener("dispose",r),e(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class vd extends pd{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Er=4,Zu=[.125,.215,.35,.446,.526,.582],qi=20,zo=new vd,Ku=new oe;let Ho=null,Go=0,Vo=0;const Wi=(1+Math.sqrt(5))/2,yr=1/Wi,Ju=[new mt(1,1,1),new mt(-1,1,1),new mt(1,1,-1),new mt(-1,1,-1),new mt(0,Wi,yr),new mt(0,Wi,-yr),new mt(yr,0,Wi),new mt(-yr,0,Wi),new mt(Wi,yr,0),new mt(-Wi,yr,0)];class Qu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Ho=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ho,Go,Vo),t.scissorTest=!1,ta(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Or||t.mapping===Fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ho=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:ys,format:vn,colorSpace:Ri,depthBuffer:!1},r=tf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tf(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wy(s)),this._blurMaterial=Xy(s,t,e)}return r}_compileMaterial(t){const e=new Fn(this._lodPlanes[0],t);this._renderer.compile(e,zo)}_sceneToCubeUV(t,e,i,r){const a=new gn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Ku),c.toneMapping=Ei,c.autoClear=!1;const p=new ud({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),x=new Fn(new As,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(Ku),g=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):y===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const v=this._cubeSize;ta(r,y*v,h>2?v:0,v,v),c.setRenderTarget(r),g&&c.render(x,a),c.render(t,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=d,c.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Or||t.mapping===Fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ef());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Fn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;ta(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,zo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ju[(r-1)%Ju.length];this._blur(t,r-1,r,s,o)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Fn(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*qi-1),g=s/x,m=isFinite(s)?1+Math.floor(c*g):qi;m>qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);const h=[];let y=0;for(let C=0;C<qi;++C){const z=C/g,G=Math.exp(-z*z/2);h.push(G),C===0?y+=G:C<m&&(y+=2*G)}for(let C=0;C<h.length;C++)h[C]=h[C]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=x,d.mipInt.value=v-i;const S=this._sizeLods[r],w=3*S*(r>v-Er?r-v+Er:0),L=4*(this._cubeSize-S);ta(e,w,L,3*S,2*S),l.setRenderTarget(e),l.render(f,zo)}}function Wy(n){const t=[],e=[],i=[];let r=n;const s=n-Er+1+Zu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Er?l=Zu[o-n+Er-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,x=6,g=3,m=2,h=1,y=new Float32Array(g*x*p),v=new Float32Array(m*x*p),S=new Float32Array(h*x*p);for(let L=0;L<p;L++){const C=L%3*2/3-1,z=L>2?0:-1,G=[C,z,0,C+2/3,z,0,C+2/3,z+1,0,C,z,0,C+2/3,z+1,0,C,z+1,0];y.set(G,g*x*L),v.set(d,m*x*L);const T=[L,L,L,L,L,L];S.set(T,h*x*L)}const w=new ir;w.setAttribute("position",new Bn(y,g)),w.setAttribute("uv",new Bn(v,m)),w.setAttribute("faceIndex",new Bn(S,h)),t.push(w),r>Er&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function tf(n,t,e){const i=new er(n,t,e);return i.texture.mapping=Ga,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ta(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Xy(n,t,e){const i=new Float32Array(qi),r=new mt(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function ef(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function nf(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Gl(){return`

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
	`}function $y(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===ul||l===fl,c=l===Or||l===Fr;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=t.get(a);return e===null&&(e=new Qu(n)),f=u?e.fromEquirectangular(a,f):e.fromCubemap(a,f),t.set(a,f),f.texture}else{if(t.has(a))return t.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){e===null&&(e=new Qu(n));const d=u?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function qy(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function jy(n,t,e,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const x in d.attributes)t.remove(d.attributes[x]);for(const x in d.morphAttributes){const g=d.morphAttributes[x];for(let m=0,h=g.length;m<h;m++)t.remove(g[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const x in d)t.update(d[x],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const x in p){const g=p[x];for(let m=0,h=g.length;m<h;m++)t.update(g[m],n.ARRAY_BUFFER)}}function u(f){const d=[],p=f.index,x=f.attributes.position;let g=0;if(p!==null){const y=p.array;g=p.version;for(let v=0,S=y.length;v<S;v+=3){const w=y[v+0],L=y[v+1],C=y[v+2];d.push(w,L,L,C,C,w)}}else if(x!==void 0){const y=x.array;g=x.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const w=v+0,L=v+1,C=v+2;d.push(w,L,L,C,C,w)}}else return;const m=new(rd(d)?hd:fd)(d,1);m.version=g;const h=s.get(f);h&&t.remove(h),s.set(f,m)}function c(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function Yy(n,t,e,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,x){n.drawElements(s,x,a,p*l),e.update(x,s,1)}function f(p,x,g){if(g===0)return;let m,h;if(r)m=n,h="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,x,a,p*l,g),e.update(x,s,g)}function d(p,x,g){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<g;h++)this.render(p[h]/l,x[h]);else{m.multiDrawElementsWEBGL(s,x,0,a,p,0,g);let h=0;for(let y=0;y<g;y++)h+=x[y];e.update(h,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function Zy(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Ky(n,t){return n[0]-t[0]}function Jy(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Qy(n,t,e){const i={},r=new Float32Array(8),s=new WeakMap,o=new De,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const d=u.morphTargetInfluences;if(t.isWebGL2===!0){const x=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=x!==void 0?x.length:0;let m=s.get(c);if(m===void 0||m.count!==g){let F=function(){N.dispose(),s.delete(c),c.removeEventListener("dispose",F)};var p=F;m!==void 0&&m.texture.dispose();const h=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,v=c.morphAttributes.color!==void 0,S=c.morphAttributes.position||[],w=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let C=0;h===!0&&(C=1),y===!0&&(C=2),v===!0&&(C=3);let z=c.attributes.position.count*C,G=1;z>t.maxTextureSize&&(G=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const T=new Float32Array(z*G*4*g),N=new od(T,z,G,g);N.type=ni,N.needsUpdate=!0;const I=C*4;for(let b=0;b<g;b++){const q=S[b],W=w[b],K=L[b],at=z*G*4*b;for(let nt=0;nt<q.count;nt++){const ct=nt*I;h===!0&&(o.fromBufferAttribute(q,nt),T[at+ct+0]=o.x,T[at+ct+1]=o.y,T[at+ct+2]=o.z,T[at+ct+3]=0),y===!0&&(o.fromBufferAttribute(W,nt),T[at+ct+4]=o.x,T[at+ct+5]=o.y,T[at+ct+6]=o.z,T[at+ct+7]=0),v===!0&&(o.fromBufferAttribute(K,nt),T[at+ct+8]=o.x,T[at+ct+9]=o.y,T[at+ct+10]=o.z,T[at+ct+11]=K.itemSize===4?o.w:1)}}m={count:g,texture:N,size:new Qt(z,G)},s.set(c,m),c.addEventListener("dispose",F)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",u.morphTexture,e);else{let h=0;for(let v=0;v<d.length;v++)h+=d[v];const y=c.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",d)}f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,e),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const x=d===void 0?0:d.length;let g=i[c.id];if(g===void 0||g.length!==x){g=[];for(let S=0;S<x;S++)g[S]=[S,0];i[c.id]=g}for(let S=0;S<x;S++){const w=g[S];w[0]=S,w[1]=d[S]}g.sort(Jy);for(let S=0;S<8;S++)S<x&&g[S][1]?(a[S][0]=g[S][0],a[S][1]=g[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Ky);const m=c.morphAttributes.position,h=c.morphAttributes.normal;let y=0;for(let S=0;S<8;S++){const w=a[S],L=w[0],C=w[1];L!==Number.MAX_SAFE_INTEGER&&C?(m&&c.getAttribute("morphTarget"+S)!==m[L]&&c.setAttribute("morphTarget"+S,m[L]),h&&c.getAttribute("morphNormal"+S)!==h[L]&&c.setAttribute("morphNormal"+S,h[L]),r[S]=C,y+=C):(m&&c.hasAttribute("morphTarget"+S)===!0&&c.deleteAttribute("morphTarget"+S),h&&c.hasAttribute("morphNormal"+S)===!0&&c.deleteAttribute("morphNormal"+S),r[S]=0)}const v=c.morphTargetsRelative?1:1-y;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function tM(n,t,e,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=t.get(l,c);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:o}}class xd extends je{constructor(t,e,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Qi,c!==Qi&&c!==kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Qi&&(i=bi),i===void 0&&c===kr&&(i=Ji),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:We,this.minFilter=l!==void 0?l:We,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const yd=new je,Md=new xd(1,1);Md.compareFunction=id;const bd=new od,Sd=new Nv,Ed=new md,rf=[],sf=[],af=new Float32Array(16),of=new Float32Array(9),lf=new Float32Array(4);function Hr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=rf[r];if(s===void 0&&(s=new Float32Array(r),rf[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Ae(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ce(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Xa(n,t){let e=sf[t];e===void 0&&(e=new Int32Array(t),sf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function eM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function nM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2fv(this.addr,t),Ce(e,t)}}function iM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;n.uniform3fv(this.addr,t),Ce(e,t)}}function rM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4fv(this.addr,t),Ce(e,t)}}function sM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,i))return;lf.set(i),n.uniformMatrix2fv(this.addr,!1,lf),Ce(e,i)}}function aM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,i))return;of.set(i),n.uniformMatrix3fv(this.addr,!1,of),Ce(e,i)}}function oM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,i))return;af.set(i),n.uniformMatrix4fv(this.addr,!1,af),Ce(e,i)}}function lM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function cM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2iv(this.addr,t),Ce(e,t)}}function uM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3iv(this.addr,t),Ce(e,t)}}function fM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4iv(this.addr,t),Ce(e,t)}}function hM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function dM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2uiv(this.addr,t),Ce(e,t)}}function pM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3uiv(this.addr,t),Ce(e,t)}}function mM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4uiv(this.addr,t),Ce(e,t)}}function gM(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Md:yd;e.setTexture2D(t||s,r)}function _M(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Sd,r)}function vM(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Ed,r)}function xM(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||bd,r)}function yM(n){switch(n){case 5126:return eM;case 35664:return nM;case 35665:return iM;case 35666:return rM;case 35674:return sM;case 35675:return aM;case 35676:return oM;case 5124:case 35670:return lM;case 35667:case 35671:return cM;case 35668:case 35672:return uM;case 35669:case 35673:return fM;case 5125:return hM;case 36294:return dM;case 36295:return pM;case 36296:return mM;case 35678:case 36198:case 36298:case 36306:case 35682:return gM;case 35679:case 36299:case 36307:return _M;case 35680:case 36300:case 36308:case 36293:return vM;case 36289:case 36303:case 36311:case 36292:return xM}}function MM(n,t){n.uniform1fv(this.addr,t)}function bM(n,t){const e=Hr(t,this.size,2);n.uniform2fv(this.addr,e)}function SM(n,t){const e=Hr(t,this.size,3);n.uniform3fv(this.addr,e)}function EM(n,t){const e=Hr(t,this.size,4);n.uniform4fv(this.addr,e)}function wM(n,t){const e=Hr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function TM(n,t){const e=Hr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function AM(n,t){const e=Hr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function CM(n,t){n.uniform1iv(this.addr,t)}function RM(n,t){n.uniform2iv(this.addr,t)}function PM(n,t){n.uniform3iv(this.addr,t)}function IM(n,t){n.uniform4iv(this.addr,t)}function LM(n,t){n.uniform1uiv(this.addr,t)}function DM(n,t){n.uniform2uiv(this.addr,t)}function UM(n,t){n.uniform3uiv(this.addr,t)}function NM(n,t){n.uniform4uiv(this.addr,t)}function OM(n,t,e){const i=this.cache,r=t.length,s=Xa(e,r);Ae(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||yd,s[o])}function FM(n,t,e){const i=this.cache,r=t.length,s=Xa(e,r);Ae(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Sd,s[o])}function kM(n,t,e){const i=this.cache,r=t.length,s=Xa(e,r);Ae(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Ed,s[o])}function BM(n,t,e){const i=this.cache,r=t.length,s=Xa(e,r);Ae(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||bd,s[o])}function zM(n){switch(n){case 5126:return MM;case 35664:return bM;case 35665:return SM;case 35666:return EM;case 35674:return wM;case 35675:return TM;case 35676:return AM;case 5124:case 35670:return CM;case 35667:case 35671:return RM;case 35668:case 35672:return PM;case 35669:case 35673:return IM;case 5125:return LM;case 36294:return DM;case 36295:return UM;case 36296:return NM;case 35678:case 36198:case 36298:case 36306:case 35682:return OM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return BM}}class HM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=yM(e.type)}}class GM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zM(e.type)}}class VM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Wo=/(\w+)(\])?(\[|\.)?/g;function cf(n,t){n.seq.push(t),n.map[t.id]=t}function WM(n,t,e){const i=n.name,r=i.length;for(Wo.lastIndex=0;;){const s=Wo.exec(i),o=Wo.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){cf(e,u===void 0?new HM(a,n,t):new GM(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new VM(a),cf(e,f)),e=f}}}class ca{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);WM(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function uf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const XM=37297;let $M=0;function qM(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function jM(n){const t=se.getPrimaries(se.workingColorSpace),e=se.getPrimaries(n);let i;switch(t===e?i="":t===Sa&&e===ba?i="LinearDisplayP3ToLinearSRGB":t===ba&&e===Sa&&(i="LinearSRGBToLinearDisplayP3"),n){case Ri:case Va:return[i,"LinearTransferOETF"];case Pn:case zl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ff(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+qM(n.getShaderSource(t),o)}else return r}function YM(n,t){const e=jM(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ZM(n,t){let e;switch(t){case nv:e="Linear";break;case iv:e="Reinhard";break;case rv:e="OptimizedCineon";break;case sv:e="ACESFilmic";break;case ov:e="AgX";break;case lv:e="Neutral";break;case av:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function KM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wr).join(`
`)}function JM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function QM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function tb(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function wr(n){return n!==""}function hf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function df(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const eb=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(n){return n.replace(eb,ib)}const nb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ib(n,t){let e=jt[t];if(e===void 0){const i=nb.get(t);if(i!==void 0)e=jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return _l(e)}const rb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pf(n){return n.replace(rb,sb)}function sb(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function mf(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(t+=`precision ${n.precision} sampler3D;
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
		`),n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ab(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===qh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===P_?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function ob(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Or:case Fr:t="ENVMAP_TYPE_CUBE";break;case Ga:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lb(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Fr:t="ENVMAP_MODE_REFRACTION";break}return t}function cb(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jh:t="ENVMAP_BLENDING_MULTIPLY";break;case tv:t="ENVMAP_BLENDING_MIX";break;case ev:t="ENVMAP_BLENDING_ADD";break}return t}function ub(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function fb(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=ab(e),u=ob(e),c=lb(e),f=cb(e),d=ub(e),p=e.isWebGL2?"":KM(e),x=JM(e),g=QM(s),m=r.createProgram();let h,y,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wr).join(`
`),h.length>0&&(h+=`
`),y=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wr).join(`
`),y.length>0&&(y+=`
`)):(h=[mf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),y=[p,mf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ei?"#define TONE_MAPPING":"",e.toneMapping!==Ei?jt.tonemapping_pars_fragment:"",e.toneMapping!==Ei?ZM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,YM("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wr).join(`
`)),o=_l(o),o=hf(o,e),o=df(o,e),a=_l(a),a=hf(a,e),a=df(a,e),o=pf(o),a=pf(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,h=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const S=v+h+o,w=v+y+a,L=uf(r,r.VERTEX_SHADER,S),C=uf(r,r.FRAGMENT_SHADER,w);r.attachShader(m,L),r.attachShader(m,C),e.index0AttributeName!==void 0?r.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function z(I){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(m).trim(),b=r.getShaderInfoLog(L).trim(),q=r.getShaderInfoLog(C).trim();let W=!0,K=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,L,C);else{const at=ff(r,L,"vertex"),nt=ff(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+at+`
`+nt)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(b===""||q==="")&&(K=!1);K&&(I.diagnostics={runnable:W,programLog:F,vertexShader:{log:b,prefix:h},fragmentShader:{log:q,prefix:y}})}r.deleteShader(L),r.deleteShader(C),G=new ca(r,m),T=tb(r,m)}let G;this.getUniforms=function(){return G===void 0&&z(this),G};let T;this.getAttributes=function(){return T===void 0&&z(this),T};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(m,XM)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$M++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=L,this.fragmentShader=C,this}let hb=0;class db{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new pb(t),e.set(t,i)),i}}class pb{constructor(t){this.id=hb++,this.code=t,this.usedTimes=0}}function mb(n,t,e,i,r,s,o){const a=new ld,l=new db,u=new Set,c=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,p=r.vertexTextures;let x=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(T){return u.add(T),T===0?"uv":`uv${T}`}function h(T,N,I,F,b){const q=F.fog,W=b.geometry,K=T.isMeshStandardMaterial?F.environment:null,at=(T.isMeshStandardMaterial?e:t).get(T.envMap||K),nt=at&&at.mapping===Ga?at.image.height:null,ct=g[T.type];T.precision!==null&&(x=r.getMaxPrecision(T.precision),x!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",x,"instead."));const Q=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Z=Q!==void 0?Q.length:0;let _t=0;W.morphAttributes.position!==void 0&&(_t=1),W.morphAttributes.normal!==void 0&&(_t=2),W.morphAttributes.color!==void 0&&(_t=3);let rt,U,J,H;if(ct){const ue=Dn[ct];rt=ue.vertexShader,U=ue.fragmentShader}else rt=T.vertexShader,U=T.fragmentShader,l.update(T),J=l.getVertexShaderID(T),H=l.getFragmentShaderID(T);const it=n.getRenderTarget(),st=b.isInstancedMesh===!0,dt=b.isBatchedMesh===!0,j=!!T.map,M=!!T.matcap,D=!!at,_=!!T.aoMap,O=!!T.lightMap,k=!!T.bumpMap,R=!!T.normalMap,P=!!T.displacementMap,B=!!T.emissiveMap,Y=!!T.metalnessMap,A=!!T.roughnessMap,E=T.anisotropy>0,X=T.clearcoat>0,tt=T.iridescence>0,et=T.sheen>0,ot=T.transmission>0,bt=E&&!!T.anisotropyMap,xt=X&&!!T.clearcoatMap,vt=X&&!!T.clearcoatNormalMap,Mt=X&&!!T.clearcoatRoughnessMap,Dt=tt&&!!T.iridescenceMap,yt=tt&&!!T.iridescenceThicknessMap,Ft=et&&!!T.sheenColorMap,Bt=et&&!!T.sheenRoughnessMap,Pt=!!T.specularMap,Tt=!!T.specularColorMap,Ut=!!T.specularIntensityMap,Zt=ot&&!!T.transmissionMap,Vt=ot&&!!T.thicknessMap,ce=!!T.gradientMap,lt=!!T.alphaMap,Et=T.alphaTest>0,ft=!!T.alphaHash,St=!!T.extensions;let Rt=Ei;T.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Rt=n.toneMapping);const Jt={isWebGL2:f,shaderID:ct,shaderType:T.type,shaderName:T.name,vertexShader:rt,fragmentShader:U,defines:T.defines,customVertexShaderID:J,customFragmentShaderID:H,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:x,batching:dt,instancing:st,instancingColor:st&&b.instanceColor!==null,instancingMorph:st&&b.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:it===null?n.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Ri,alphaToCoverage:!!T.alphaToCoverage,map:j,matcap:M,envMap:D,envMapMode:D&&at.mapping,envMapCubeUVHeight:nt,aoMap:_,lightMap:O,bumpMap:k,normalMap:R,displacementMap:p&&P,emissiveMap:B,normalMapObjectSpace:R&&T.normalMapType===yv,normalMapTangentSpace:R&&T.normalMapType===xv,metalnessMap:Y,roughnessMap:A,anisotropy:E,anisotropyMap:bt,clearcoat:X,clearcoatMap:xt,clearcoatNormalMap:vt,clearcoatRoughnessMap:Mt,iridescence:tt,iridescenceMap:Dt,iridescenceThicknessMap:yt,sheen:et,sheenColorMap:Ft,sheenRoughnessMap:Bt,specularMap:Pt,specularColorMap:Tt,specularIntensityMap:Ut,transmission:ot,transmissionMap:Zt,thicknessMap:Vt,gradientMap:ce,opaque:T.transparent===!1&&T.blending===Ir&&T.alphaToCoverage===!1,alphaMap:lt,alphaTest:Et,alphaHash:ft,combine:T.combine,mapUv:j&&m(T.map.channel),aoMapUv:_&&m(T.aoMap.channel),lightMapUv:O&&m(T.lightMap.channel),bumpMapUv:k&&m(T.bumpMap.channel),normalMapUv:R&&m(T.normalMap.channel),displacementMapUv:P&&m(T.displacementMap.channel),emissiveMapUv:B&&m(T.emissiveMap.channel),metalnessMapUv:Y&&m(T.metalnessMap.channel),roughnessMapUv:A&&m(T.roughnessMap.channel),anisotropyMapUv:bt&&m(T.anisotropyMap.channel),clearcoatMapUv:xt&&m(T.clearcoatMap.channel),clearcoatNormalMapUv:vt&&m(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&m(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&m(T.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&m(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&m(T.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&m(T.sheenRoughnessMap.channel),specularMapUv:Pt&&m(T.specularMap.channel),specularColorMapUv:Tt&&m(T.specularColorMap.channel),specularIntensityMapUv:Ut&&m(T.specularIntensityMap.channel),transmissionMapUv:Zt&&m(T.transmissionMap.channel),thicknessMapUv:Vt&&m(T.thicknessMap.channel),alphaMapUv:lt&&m(T.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(R||E),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!W.attributes.uv&&(j||lt),fog:!!q,useFog:T.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:b.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:_t,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Rt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:j&&T.map.isVideoTexture===!0&&se.getTransfer(T.map.colorSpace)===de,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ei,flipSided:T.side===tn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:St&&T.extensions.derivatives===!0,extensionFragDepth:St&&T.extensions.fragDepth===!0,extensionDrawBuffers:St&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:St&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:St&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:St&&T.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Jt.vertexUv1s=u.has(1),Jt.vertexUv2s=u.has(2),Jt.vertexUv3s=u.has(3),u.clear(),Jt}function y(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const I in T.defines)N.push(I),N.push(T.defines[I]);return T.isRawShaderMaterial===!1&&(v(N,T),S(N,T),N.push(n.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function v(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function S(T,N){a.disableAll(),N.isWebGL2&&a.enable(0),N.supportsVertexTextures&&a.enable(1),N.instancing&&a.enable(2),N.instancingColor&&a.enable(3),N.instancingMorph&&a.enable(4),N.matcap&&a.enable(5),N.envMap&&a.enable(6),N.normalMapObjectSpace&&a.enable(7),N.normalMapTangentSpace&&a.enable(8),N.clearcoat&&a.enable(9),N.iridescence&&a.enable(10),N.alphaTest&&a.enable(11),N.vertexColors&&a.enable(12),N.vertexAlphas&&a.enable(13),N.vertexUv1s&&a.enable(14),N.vertexUv2s&&a.enable(15),N.vertexUv3s&&a.enable(16),N.vertexTangents&&a.enable(17),N.anisotropy&&a.enable(18),N.alphaHash&&a.enable(19),N.batching&&a.enable(20),T.push(a.mask),a.disableAll(),N.fog&&a.enable(0),N.useFog&&a.enable(1),N.flatShading&&a.enable(2),N.logarithmicDepthBuffer&&a.enable(3),N.skinning&&a.enable(4),N.morphTargets&&a.enable(5),N.morphNormals&&a.enable(6),N.morphColors&&a.enable(7),N.premultipliedAlpha&&a.enable(8),N.shadowMapEnabled&&a.enable(9),N.useLegacyLights&&a.enable(10),N.doubleSided&&a.enable(11),N.flipSided&&a.enable(12),N.useDepthPacking&&a.enable(13),N.dithering&&a.enable(14),N.transmission&&a.enable(15),N.sheen&&a.enable(16),N.opaque&&a.enable(17),N.pointsUvs&&a.enable(18),N.decodeVideoTexture&&a.enable(19),N.alphaToCoverage&&a.enable(20),T.push(a.mask)}function w(T){const N=g[T.type];let I;if(N){const F=Dn[N];I=Yv.clone(F.uniforms)}else I=T.uniforms;return I}function L(T,N){let I;for(let F=0,b=c.length;F<b;F++){const q=c[F];if(q.cacheKey===N){I=q,++I.usedTimes;break}}return I===void 0&&(I=new fb(n,N,T,s),c.push(I)),I}function C(T){if(--T.usedTimes===0){const N=c.indexOf(T);c[N]=c[c.length-1],c.pop(),T.destroy()}}function z(T){l.remove(T)}function G(){l.dispose()}return{getParameters:h,getProgramCacheKey:y,getUniforms:w,acquireProgram:L,releaseProgram:C,releaseShaderCache:z,programs:c,dispose:G}}function gb(){let n=new WeakMap;function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function e(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function _b(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function gf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function _f(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,d,p,x,g,m){let h=n[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:x,renderOrder:f.renderOrder,z:g,group:m},n[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=x,h.renderOrder=f.renderOrder,h.z=g,h.group=m),t++,h}function a(f,d,p,x,g,m){const h=o(f,d,p,x,g,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):e.push(h)}function l(f,d,p,x,g,m){const h=o(f,d,p,x,g,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):e.unshift(h)}function u(f,d){e.length>1&&e.sort(f||_b),i.length>1&&i.sort(d||gf),r.length>1&&r.sort(d||gf)}function c(){for(let f=t,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function vb(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new _f,n.set(i,[o])):r>=s.length?(o=new _f,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function xb(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new mt,color:new oe};break;case"SpotLight":e={position:new mt,direction:new mt,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new mt,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new mt,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new mt,halfWidth:new mt,halfHeight:new mt};break}return n[t.id]=e,e}}}function yb(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Mb=0;function bb(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Sb(n,t){const e=new xb,i=yb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new mt);const s=new mt,o=new we,a=new we;function l(c,f){let d=0,p=0,x=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let g=0,m=0,h=0,y=0,v=0,S=0,w=0,L=0,C=0,z=0,G=0;c.sort(bb);const T=f===!0?Math.PI:1;for(let I=0,F=c.length;I<F;I++){const b=c[I],q=b.color,W=b.intensity,K=b.distance,at=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)d+=q.r*W*T,p+=q.g*W*T,x+=q.b*W*T;else if(b.isLightProbe){for(let nt=0;nt<9;nt++)r.probe[nt].addScaledVector(b.sh.coefficients[nt],W);G++}else if(b.isDirectionalLight){const nt=e.get(b);if(nt.color.copy(b.color).multiplyScalar(b.intensity*T),b.castShadow){const ct=b.shadow,Q=i.get(b);Q.shadowBias=ct.bias,Q.shadowNormalBias=ct.normalBias,Q.shadowRadius=ct.radius,Q.shadowMapSize=ct.mapSize,r.directionalShadow[g]=Q,r.directionalShadowMap[g]=at,r.directionalShadowMatrix[g]=b.shadow.matrix,S++}r.directional[g]=nt,g++}else if(b.isSpotLight){const nt=e.get(b);nt.position.setFromMatrixPosition(b.matrixWorld),nt.color.copy(q).multiplyScalar(W*T),nt.distance=K,nt.coneCos=Math.cos(b.angle),nt.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),nt.decay=b.decay,r.spot[h]=nt;const ct=b.shadow;if(b.map&&(r.spotLightMap[C]=b.map,C++,ct.updateMatrices(b),b.castShadow&&z++),r.spotLightMatrix[h]=ct.matrix,b.castShadow){const Q=i.get(b);Q.shadowBias=ct.bias,Q.shadowNormalBias=ct.normalBias,Q.shadowRadius=ct.radius,Q.shadowMapSize=ct.mapSize,r.spotShadow[h]=Q,r.spotShadowMap[h]=at,L++}h++}else if(b.isRectAreaLight){const nt=e.get(b);nt.color.copy(q).multiplyScalar(W),nt.halfWidth.set(b.width*.5,0,0),nt.halfHeight.set(0,b.height*.5,0),r.rectArea[y]=nt,y++}else if(b.isPointLight){const nt=e.get(b);if(nt.color.copy(b.color).multiplyScalar(b.intensity*T),nt.distance=b.distance,nt.decay=b.decay,b.castShadow){const ct=b.shadow,Q=i.get(b);Q.shadowBias=ct.bias,Q.shadowNormalBias=ct.normalBias,Q.shadowRadius=ct.radius,Q.shadowMapSize=ct.mapSize,Q.shadowCameraNear=ct.camera.near,Q.shadowCameraFar=ct.camera.far,r.pointShadow[m]=Q,r.pointShadowMap[m]=at,r.pointShadowMatrix[m]=b.shadow.matrix,w++}r.point[m]=nt,m++}else if(b.isHemisphereLight){const nt=e.get(b);nt.skyColor.copy(b.color).multiplyScalar(W*T),nt.groundColor.copy(b.groundColor).multiplyScalar(W*T),r.hemi[v]=nt,v++}}y>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=wt.LTC_FLOAT_1,r.rectAreaLTC2=wt.LTC_FLOAT_2):(r.rectAreaLTC1=wt.LTC_HALF_1,r.rectAreaLTC2=wt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=wt.LTC_FLOAT_1,r.rectAreaLTC2=wt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=wt.LTC_HALF_1,r.rectAreaLTC2=wt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=x;const N=r.hash;(N.directionalLength!==g||N.pointLength!==m||N.spotLength!==h||N.rectAreaLength!==y||N.hemiLength!==v||N.numDirectionalShadows!==S||N.numPointShadows!==w||N.numSpotShadows!==L||N.numSpotMaps!==C||N.numLightProbes!==G)&&(r.directional.length=g,r.spot.length=h,r.rectArea.length=y,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=L+C-z,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=G,N.directionalLength=g,N.pointLength=m,N.spotLength=h,N.rectAreaLength=y,N.hemiLength=v,N.numDirectionalShadows=S,N.numPointShadows=w,N.numSpotShadows=L,N.numSpotMaps=C,N.numLightProbes=G,r.version=Mb++)}function u(c,f){let d=0,p=0,x=0,g=0,m=0;const h=f.matrixWorldInverse;for(let y=0,v=c.length;y<v;y++){const S=c[y];if(S.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),d++}else if(S.isSpotLight){const w=r.spot[x];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(h),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),x++}else if(S.isRectAreaLight){const w=r.rectArea[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(h),a.identity(),o.copy(S.matrixWorld),o.premultiply(h),a.extractRotation(o),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const w=r.point[p];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(h),p++}else if(S.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(h),m++}}}return{setup:l,setupView:u,state:r}}function vf(n,t){const e=new Sb(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){e.setup(i,f)}function u(f){e.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function Eb(n,t){let e=new WeakMap;function i(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new vf(n,t),e.set(s,[l])):o>=a.length?(l=new vf(n,t),a.push(l)):l=a[o],l}function r(){e=new WeakMap}return{get:i,dispose:r}}class wb extends Wa{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_v,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Tb extends Wa{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ab=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cb=`uniform sampler2D shadow_pass;
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
}`;function Rb(n,t,e){let i=new gd;const r=new Qt,s=new Qt,o=new De,a=new wb({depthPacking:vv}),l=new Tb,u={},c=e.maxTextureSize,f={[Ai]:tn,[tn]:Ai,[ei]:ei},d=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:Ab,fragmentShader:Cb}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new ir;x.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Fn(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qh;let h=this.type;this.render=function(L,C,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const G=n.getRenderTarget(),T=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Si),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=h!==Zn&&this.type===Zn,b=h===Zn&&this.type!==Zn;for(let q=0,W=L.length;q<W;q++){const K=L[q],at=K.shadow;if(at===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(at.autoUpdate===!1&&at.needsUpdate===!1)continue;r.copy(at.mapSize);const nt=at.getFrameExtents();if(r.multiply(nt),s.copy(at.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/nt.x),r.x=s.x*nt.x,at.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/nt.y),r.y=s.y*nt.y,at.mapSize.y=s.y)),at.map===null||F===!0||b===!0){const Q=this.type!==Zn?{minFilter:We,magFilter:We}:{};at.map!==null&&at.map.dispose(),at.map=new er(r.x,r.y,Q),at.map.texture.name=K.name+".shadowMap",at.camera.updateProjectionMatrix()}n.setRenderTarget(at.map),n.clear();const ct=at.getViewportCount();for(let Q=0;Q<ct;Q++){const Z=at.getViewport(Q);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),I.viewport(o),at.updateMatrices(K,Q),i=at.getFrustum(),S(C,z,at.camera,K,this.type)}at.isPointLightShadow!==!0&&this.type===Zn&&y(at,z),at.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(G,T,N)};function y(L,C){const z=t.update(g);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new er(r.x,r.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(C,null,z,d,g,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(C,null,z,p,g,null)}function v(L,C,z,G){let T=null;const N=z.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(N!==void 0)T=N;else if(T=z.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const I=T.uuid,F=C.uuid;let b=u[I];b===void 0&&(b={},u[I]=b);let q=b[F];q===void 0&&(q=T.clone(),b[F]=q,C.addEventListener("dispose",w)),T=q}if(T.visible=C.visible,T.wireframe=C.wireframe,G===Zn?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:f[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,z.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const I=n.properties.get(T);I.light=z}return T}function S(L,C,z,G,T){if(L.visible===!1)return;if(L.layers.test(C.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&T===Zn)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,L.matrixWorld);const F=t.update(L),b=L.material;if(Array.isArray(b)){const q=F.groups;for(let W=0,K=q.length;W<K;W++){const at=q[W],nt=b[at.materialIndex];if(nt&&nt.visible){const ct=v(L,nt,G,T);L.onBeforeShadow(n,L,C,z,F,ct,at),n.renderBufferDirect(z,null,F,ct,L,at),L.onAfterShadow(n,L,C,z,F,ct,at)}}}else if(b.visible){const q=v(L,b,G,T);L.onBeforeShadow(n,L,C,z,F,q,null),n.renderBufferDirect(z,null,F,q,L,null),L.onAfterShadow(n,L,C,z,F,q,null)}}const I=L.children;for(let F=0,b=I.length;F<b;F++)S(I[F],C,z,G,T)}function w(L){L.target.removeEventListener("dispose",w);for(const z in u){const G=u[z],T=L.target.uuid;T in G&&(G[T].dispose(),delete G[T])}}}function Pb(n,t,e){const i=e.isWebGL2;function r(){let lt=!1;const Et=new De;let ft=null;const St=new De(0,0,0,0);return{setMask:function(Rt){ft!==Rt&&!lt&&(n.colorMask(Rt,Rt,Rt,Rt),ft=Rt)},setLocked:function(Rt){lt=Rt},setClear:function(Rt,Jt,ue,Ie,ln){ln===!0&&(Rt*=Ie,Jt*=Ie,ue*=Ie),Et.set(Rt,Jt,ue,Ie),St.equals(Et)===!1&&(n.clearColor(Rt,Jt,ue,Ie),St.copy(Et))},reset:function(){lt=!1,ft=null,St.set(-1,0,0,0)}}}function s(){let lt=!1,Et=null,ft=null,St=null;return{setTest:function(Rt){Rt?st(n.DEPTH_TEST):dt(n.DEPTH_TEST)},setMask:function(Rt){Et!==Rt&&!lt&&(n.depthMask(Rt),Et=Rt)},setFunc:function(Rt){if(ft!==Rt){switch(Rt){case q_:n.depthFunc(n.NEVER);break;case j_:n.depthFunc(n.ALWAYS);break;case Y_:n.depthFunc(n.LESS);break;case ya:n.depthFunc(n.LEQUAL);break;case Z_:n.depthFunc(n.EQUAL);break;case K_:n.depthFunc(n.GEQUAL);break;case J_:n.depthFunc(n.GREATER);break;case Q_:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=Rt}},setLocked:function(Rt){lt=Rt},setClear:function(Rt){St!==Rt&&(n.clearDepth(Rt),St=Rt)},reset:function(){lt=!1,Et=null,ft=null,St=null}}}function o(){let lt=!1,Et=null,ft=null,St=null,Rt=null,Jt=null,ue=null,Ie=null,ln=null;return{setTest:function(fe){lt||(fe?st(n.STENCIL_TEST):dt(n.STENCIL_TEST))},setMask:function(fe){Et!==fe&&!lt&&(n.stencilMask(fe),Et=fe)},setFunc:function(fe,ze,Tn){(ft!==fe||St!==ze||Rt!==Tn)&&(n.stencilFunc(fe,ze,Tn),ft=fe,St=ze,Rt=Tn)},setOp:function(fe,ze,Tn){(Jt!==fe||ue!==ze||Ie!==Tn)&&(n.stencilOp(fe,ze,Tn),Jt=fe,ue=ze,Ie=Tn)},setLocked:function(fe){lt=fe},setClear:function(fe){ln!==fe&&(n.clearStencil(fe),ln=fe)},reset:function(){lt=!1,Et=null,ft=null,St=null,Rt=null,Jt=null,ue=null,Ie=null,ln=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let d={},p={},x=new WeakMap,g=[],m=null,h=!1,y=null,v=null,S=null,w=null,L=null,C=null,z=null,G=new oe(0,0,0),T=0,N=!1,I=null,F=null,b=null,q=null,W=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let at=!1,nt=0;const ct=n.getParameter(n.VERSION);ct.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(ct)[1]),at=nt>=1):ct.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(ct)[1]),at=nt>=2);let Q=null,Z={};const _t=n.getParameter(n.SCISSOR_BOX),rt=n.getParameter(n.VIEWPORT),U=new De().fromArray(_t),J=new De().fromArray(rt);function H(lt,Et,ft,St){const Rt=new Uint8Array(4),Jt=n.createTexture();n.bindTexture(lt,Jt),n.texParameteri(lt,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(lt,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ue=0;ue<ft;ue++)i&&(lt===n.TEXTURE_3D||lt===n.TEXTURE_2D_ARRAY)?n.texImage3D(Et,0,n.RGBA,1,1,St,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(Et+ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return Jt}const it={};it[n.TEXTURE_2D]=H(n.TEXTURE_2D,n.TEXTURE_2D,1),it[n.TEXTURE_CUBE_MAP]=H(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(it[n.TEXTURE_2D_ARRAY]=H(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),it[n.TEXTURE_3D]=H(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),st(n.DEPTH_TEST),l.setFunc(ya),P(!1),B(Zc),st(n.CULL_FACE),k(Si);function st(lt){d[lt]!==!0&&(n.enable(lt),d[lt]=!0)}function dt(lt){d[lt]!==!1&&(n.disable(lt),d[lt]=!1)}function j(lt,Et){return p[lt]!==Et?(n.bindFramebuffer(lt,Et),p[lt]=Et,i&&(lt===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Et),lt===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Et)),!0):!1}function M(lt,Et){let ft=g,St=!1;if(lt){ft=x.get(Et),ft===void 0&&(ft=[],x.set(Et,ft));const Rt=lt.textures;if(ft.length!==Rt.length||ft[0]!==n.COLOR_ATTACHMENT0){for(let Jt=0,ue=Rt.length;Jt<ue;Jt++)ft[Jt]=n.COLOR_ATTACHMENT0+Jt;ft.length=Rt.length,St=!0}}else ft[0]!==n.BACK&&(ft[0]=n.BACK,St=!0);if(St)if(e.isWebGL2)n.drawBuffers(ft);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ft);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function D(lt){return m!==lt?(n.useProgram(lt),m=lt,!0):!1}const _={[$i]:n.FUNC_ADD,[L_]:n.FUNC_SUBTRACT,[D_]:n.FUNC_REVERSE_SUBTRACT};if(i)_[tu]=n.MIN,_[eu]=n.MAX;else{const lt=t.get("EXT_blend_minmax");lt!==null&&(_[tu]=lt.MIN_EXT,_[eu]=lt.MAX_EXT)}const O={[U_]:n.ZERO,[N_]:n.ONE,[O_]:n.SRC_COLOR,[ll]:n.SRC_ALPHA,[G_]:n.SRC_ALPHA_SATURATE,[z_]:n.DST_COLOR,[k_]:n.DST_ALPHA,[F_]:n.ONE_MINUS_SRC_COLOR,[cl]:n.ONE_MINUS_SRC_ALPHA,[H_]:n.ONE_MINUS_DST_COLOR,[B_]:n.ONE_MINUS_DST_ALPHA,[V_]:n.CONSTANT_COLOR,[W_]:n.ONE_MINUS_CONSTANT_COLOR,[X_]:n.CONSTANT_ALPHA,[$_]:n.ONE_MINUS_CONSTANT_ALPHA};function k(lt,Et,ft,St,Rt,Jt,ue,Ie,ln,fe){if(lt===Si){h===!0&&(dt(n.BLEND),h=!1);return}if(h===!1&&(st(n.BLEND),h=!0),lt!==I_){if(lt!==y||fe!==N){if((v!==$i||L!==$i)&&(n.blendEquation(n.FUNC_ADD),v=$i,L=$i),fe)switch(lt){case Ir:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kc:n.blendFunc(n.ONE,n.ONE);break;case Jc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",lt);break}else switch(lt){case Ir:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Jc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",lt);break}S=null,w=null,C=null,z=null,G.set(0,0,0),T=0,y=lt,N=fe}return}Rt=Rt||Et,Jt=Jt||ft,ue=ue||St,(Et!==v||Rt!==L)&&(n.blendEquationSeparate(_[Et],_[Rt]),v=Et,L=Rt),(ft!==S||St!==w||Jt!==C||ue!==z)&&(n.blendFuncSeparate(O[ft],O[St],O[Jt],O[ue]),S=ft,w=St,C=Jt,z=ue),(Ie.equals(G)===!1||ln!==T)&&(n.blendColor(Ie.r,Ie.g,Ie.b,ln),G.copy(Ie),T=ln),y=lt,N=!1}function R(lt,Et){lt.side===ei?dt(n.CULL_FACE):st(n.CULL_FACE);let ft=lt.side===tn;Et&&(ft=!ft),P(ft),lt.blending===Ir&&lt.transparent===!1?k(Si):k(lt.blending,lt.blendEquation,lt.blendSrc,lt.blendDst,lt.blendEquationAlpha,lt.blendSrcAlpha,lt.blendDstAlpha,lt.blendColor,lt.blendAlpha,lt.premultipliedAlpha),l.setFunc(lt.depthFunc),l.setTest(lt.depthTest),l.setMask(lt.depthWrite),a.setMask(lt.colorWrite);const St=lt.stencilWrite;u.setTest(St),St&&(u.setMask(lt.stencilWriteMask),u.setFunc(lt.stencilFunc,lt.stencilRef,lt.stencilFuncMask),u.setOp(lt.stencilFail,lt.stencilZFail,lt.stencilZPass)),A(lt.polygonOffset,lt.polygonOffsetFactor,lt.polygonOffsetUnits),lt.alphaToCoverage===!0?st(n.SAMPLE_ALPHA_TO_COVERAGE):dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function P(lt){I!==lt&&(lt?n.frontFace(n.CW):n.frontFace(n.CCW),I=lt)}function B(lt){lt!==C_?(st(n.CULL_FACE),lt!==F&&(lt===Zc?n.cullFace(n.BACK):lt===R_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):dt(n.CULL_FACE),F=lt}function Y(lt){lt!==b&&(at&&n.lineWidth(lt),b=lt)}function A(lt,Et,ft){lt?(st(n.POLYGON_OFFSET_FILL),(q!==Et||W!==ft)&&(n.polygonOffset(Et,ft),q=Et,W=ft)):dt(n.POLYGON_OFFSET_FILL)}function E(lt){lt?st(n.SCISSOR_TEST):dt(n.SCISSOR_TEST)}function X(lt){lt===void 0&&(lt=n.TEXTURE0+K-1),Q!==lt&&(n.activeTexture(lt),Q=lt)}function tt(lt,Et,ft){ft===void 0&&(Q===null?ft=n.TEXTURE0+K-1:ft=Q);let St=Z[ft];St===void 0&&(St={type:void 0,texture:void 0},Z[ft]=St),(St.type!==lt||St.texture!==Et)&&(Q!==ft&&(n.activeTexture(ft),Q=ft),n.bindTexture(lt,Et||it[lt]),St.type=lt,St.texture=Et)}function et(){const lt=Z[Q];lt!==void 0&&lt.type!==void 0&&(n.bindTexture(lt.type,null),lt.type=void 0,lt.texture=void 0)}function ot(){try{n.compressedTexImage2D.apply(n,arguments)}catch(lt){console.error("THREE.WebGLState:",lt)}}function bt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(lt){console.error("THREE.WebGLState:",lt)}}function xt(){try{n.texSubImage2D.apply(n,arguments)}catch(lt){console.error("THREE.WebGLState:",lt)}}function vt(){try{n.texSubImage3D.apply(n,arguments)}catch(lt){console.error("THREE.WebGLState:",lt)}}function Mt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(lt){console.error("THREE.WebGLState:",lt)}}function Dt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(lt){console.error("THREE.WebGLState:",lt)}}function yt(){try{n.texStorage2D.apply(n,arguments)}catch(lt){console.error("THREE.WebGLState:",lt)}}function Ft(){try{n.texStorage3D.apply(n,arguments)}catch(lt){console.error("THREE.WebGLState:",lt)}}function Bt(){try{n.texImage2D.apply(n,arguments)}catch(lt){console.error("THREE.WebGLState:",lt)}}function Pt(){try{n.texImage3D.apply(n,arguments)}catch(lt){console.error("THREE.WebGLState:",lt)}}function Tt(lt){U.equals(lt)===!1&&(n.scissor(lt.x,lt.y,lt.z,lt.w),U.copy(lt))}function Ut(lt){J.equals(lt)===!1&&(n.viewport(lt.x,lt.y,lt.z,lt.w),J.copy(lt))}function Zt(lt,Et){let ft=f.get(Et);ft===void 0&&(ft=new WeakMap,f.set(Et,ft));let St=ft.get(lt);St===void 0&&(St=n.getUniformBlockIndex(Et,lt.name),ft.set(lt,St))}function Vt(lt,Et){const St=f.get(Et).get(lt);c.get(Et)!==St&&(n.uniformBlockBinding(Et,St,lt.__bindingPointIndex),c.set(Et,St))}function ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},Q=null,Z={},p={},x=new WeakMap,g=[],m=null,h=!1,y=null,v=null,S=null,w=null,L=null,C=null,z=null,G=new oe(0,0,0),T=0,N=!1,I=null,F=null,b=null,q=null,W=null,U.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:st,disable:dt,bindFramebuffer:j,drawBuffers:M,useProgram:D,setBlending:k,setMaterial:R,setFlipSided:P,setCullFace:B,setLineWidth:Y,setPolygonOffset:A,setScissorTest:E,activeTexture:X,bindTexture:tt,unbindTexture:et,compressedTexImage2D:ot,compressedTexImage3D:bt,texImage2D:Bt,texImage3D:Pt,updateUBOMapping:Zt,uniformBlockBinding:Vt,texStorage2D:yt,texStorage3D:Ft,texSubImage2D:xt,texSubImage3D:vt,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Dt,scissor:Tt,viewport:Ut,reset:ce}}function Ib(n,t,e,i,r,s,o){const a=r.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qt,f=new WeakMap;let d;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,E){return x?new OffscreenCanvas(A,E):wa("canvas")}function m(A,E,X,tt){let et=1;const ot=Y(A);if((ot.width>tt||ot.height>tt)&&(et=tt/Math.max(ot.width,ot.height)),et<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const bt=E?gl:Math.floor,xt=bt(et*ot.width),vt=bt(et*ot.height);d===void 0&&(d=g(xt,vt));const Mt=X?g(xt,vt):d;return Mt.width=xt,Mt.height=vt,Mt.getContext("2d").drawImage(A,0,0,xt,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+xt+"x"+vt+")."),Mt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),A;return A}function h(A){const E=Y(A);return Iu(E.width)&&Iu(E.height)}function y(A){return a?!1:A.wrapS!==_n||A.wrapT!==_n||A.minFilter!==We&&A.minFilter!==Je}function v(A,E){return A.generateMipmaps&&E&&A.minFilter!==We&&A.minFilter!==Je}function S(A){n.generateMipmap(A)}function w(A,E,X,tt,et=!1){if(a===!1)return E;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ot=E;if(E===n.RED&&(X===n.FLOAT&&(ot=n.R32F),X===n.HALF_FLOAT&&(ot=n.R16F),X===n.UNSIGNED_BYTE&&(ot=n.R8)),E===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(ot=n.R8UI),X===n.UNSIGNED_SHORT&&(ot=n.R16UI),X===n.UNSIGNED_INT&&(ot=n.R32UI),X===n.BYTE&&(ot=n.R8I),X===n.SHORT&&(ot=n.R16I),X===n.INT&&(ot=n.R32I)),E===n.RG&&(X===n.FLOAT&&(ot=n.RG32F),X===n.HALF_FLOAT&&(ot=n.RG16F),X===n.UNSIGNED_BYTE&&(ot=n.RG8)),E===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(ot=n.RG8UI),X===n.UNSIGNED_SHORT&&(ot=n.RG16UI),X===n.UNSIGNED_INT&&(ot=n.RG32UI),X===n.BYTE&&(ot=n.RG8I),X===n.SHORT&&(ot=n.RG16I),X===n.INT&&(ot=n.RG32I)),E===n.RGBA){const bt=et?Ma:se.getTransfer(tt);X===n.FLOAT&&(ot=n.RGBA32F),X===n.HALF_FLOAT&&(ot=n.RGBA16F),X===n.UNSIGNED_BYTE&&(ot=bt===de?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(ot=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(ot=n.RGB5_A1)}return(ot===n.R16F||ot===n.R32F||ot===n.RG16F||ot===n.RG32F||ot===n.RGBA16F||ot===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function L(A,E,X){return v(A,X)===!0||A.isFramebufferTexture&&A.minFilter!==We&&A.minFilter!==Je?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function C(A){return A===We||A===nu||A===jr?n.NEAREST:n.LINEAR}function z(A){const E=A.target;E.removeEventListener("dispose",z),T(E),E.isVideoTexture&&f.delete(E)}function G(A){const E=A.target;E.removeEventListener("dispose",G),I(E)}function T(A){const E=i.get(A);if(E.__webglInit===void 0)return;const X=A.source,tt=p.get(X);if(tt){const et=tt[E.__cacheKey];et.usedTimes--,et.usedTimes===0&&N(A),Object.keys(tt).length===0&&p.delete(X)}i.remove(A)}function N(A){const E=i.get(A);n.deleteTexture(E.__webglTexture);const X=A.source,tt=p.get(X);delete tt[E.__cacheKey],o.memory.textures--}function I(A){const E=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(E.__webglFramebuffer[tt]))for(let et=0;et<E.__webglFramebuffer[tt].length;et++)n.deleteFramebuffer(E.__webglFramebuffer[tt][et]);else n.deleteFramebuffer(E.__webglFramebuffer[tt]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[tt])}else{if(Array.isArray(E.__webglFramebuffer))for(let tt=0;tt<E.__webglFramebuffer.length;tt++)n.deleteFramebuffer(E.__webglFramebuffer[tt]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let tt=0;tt<E.__webglColorRenderbuffer.length;tt++)E.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[tt]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=A.textures;for(let tt=0,et=X.length;tt<et;tt++){const ot=i.get(X[tt]);ot.__webglTexture&&(n.deleteTexture(ot.__webglTexture),o.memory.textures--),i.remove(X[tt])}i.remove(A)}let F=0;function b(){F=0}function q(){const A=F;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),F+=1,A}function W(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function K(A,E){const X=i.get(A);if(A.isVideoTexture&&P(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){const tt=A.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(X,A,E);return}}e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+E)}function at(A,E){const X=i.get(A);if(A.version>0&&X.__version!==A.version){J(X,A,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+E)}function nt(A,E){const X=i.get(A);if(A.version>0&&X.__version!==A.version){J(X,A,E);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+E)}function ct(A,E){const X=i.get(A);if(A.version>0&&X.__version!==A.version){H(X,A,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+E)}const Q={[hl]:n.REPEAT,[_n]:n.CLAMP_TO_EDGE,[dl]:n.MIRRORED_REPEAT},Z={[We]:n.NEAREST,[nu]:n.NEAREST_MIPMAP_NEAREST,[jr]:n.NEAREST_MIPMAP_LINEAR,[Je]:n.LINEAR,[ho]:n.LINEAR_MIPMAP_NEAREST,[Yi]:n.LINEAR_MIPMAP_LINEAR},_t={[Mv]:n.NEVER,[Av]:n.ALWAYS,[bv]:n.LESS,[id]:n.LEQUAL,[Sv]:n.EQUAL,[Tv]:n.GEQUAL,[Ev]:n.GREATER,[wv]:n.NOTEQUAL};function rt(A,E,X){if(E.type===ni&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Je||E.magFilter===ho||E.magFilter===jr||E.magFilter===Yi||E.minFilter===Je||E.minFilter===ho||E.minFilter===jr||E.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),X?(n.texParameteri(A,n.TEXTURE_WRAP_S,Q[E.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Q[E.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Q[E.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Z[E.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Z[E.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==_n||E.wrapT!==_n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,C(E.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,C(E.minFilter)),E.minFilter!==We&&E.minFilter!==Je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,_t[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===We||E.minFilter!==jr&&E.minFilter!==Yi||E.type===ni&&t.has("OES_texture_float_linear")===!1||a===!1&&E.type===ys&&t.has("OES_texture_half_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function U(A,E){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",z));const tt=E.source;let et=p.get(tt);et===void 0&&(et={},p.set(tt,et));const ot=W(E);if(ot!==A.__cacheKey){et[ot]===void 0&&(et[ot]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),et[ot].usedTimes++;const bt=et[A.__cacheKey];bt!==void 0&&(et[A.__cacheKey].usedTimes--,bt.usedTimes===0&&N(E)),A.__cacheKey=ot,A.__webglTexture=et[ot].texture}return X}function J(A,E,X){let tt=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(tt=n.TEXTURE_3D);const et=U(A,E),ot=E.source;e.bindTexture(tt,A.__webglTexture,n.TEXTURE0+X);const bt=i.get(ot);if(ot.version!==bt.__version||et===!0){e.activeTexture(n.TEXTURE0+X);const xt=se.getPrimaries(se.workingColorSpace),vt=E.colorSpace===Mi?null:se.getPrimaries(E.colorSpace),Mt=E.colorSpace===Mi||xt===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Dt=y(E)&&h(E.image)===!1;let yt=m(E.image,Dt,!1,r.maxTextureSize);yt=B(E,yt);const Ft=h(yt)||a,Bt=s.convert(E.format,E.colorSpace);let Pt=s.convert(E.type),Tt=w(E.internalFormat,Bt,Pt,E.colorSpace,E.isVideoTexture);rt(tt,E,Ft);let Ut;const Zt=E.mipmaps,Vt=a&&E.isVideoTexture!==!0&&Tt!==nd,ce=bt.__version===void 0||et===!0,lt=ot.dataReady,Et=L(E,yt,Ft);if(E.isDepthTexture)Tt=n.DEPTH_COMPONENT,a?E.type===ni?Tt=n.DEPTH_COMPONENT32F:E.type===bi?Tt=n.DEPTH_COMPONENT24:E.type===Ji?Tt=n.DEPTH24_STENCIL8:Tt=n.DEPTH_COMPONENT16:E.type===ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Qi&&Tt===n.DEPTH_COMPONENT&&E.type!==Bl&&E.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=bi,Pt=s.convert(E.type)),E.format===kr&&Tt===n.DEPTH_COMPONENT&&(Tt=n.DEPTH_STENCIL,E.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ji,Pt=s.convert(E.type))),ce&&(Vt?e.texStorage2D(n.TEXTURE_2D,1,Tt,yt.width,yt.height):e.texImage2D(n.TEXTURE_2D,0,Tt,yt.width,yt.height,0,Bt,Pt,null));else if(E.isDataTexture)if(Zt.length>0&&Ft){Vt&&ce&&e.texStorage2D(n.TEXTURE_2D,Et,Tt,Zt[0].width,Zt[0].height);for(let ft=0,St=Zt.length;ft<St;ft++)Ut=Zt[ft],Vt?lt&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,Ut.width,Ut.height,Bt,Pt,Ut.data):e.texImage2D(n.TEXTURE_2D,ft,Tt,Ut.width,Ut.height,0,Bt,Pt,Ut.data);E.generateMipmaps=!1}else Vt?(ce&&e.texStorage2D(n.TEXTURE_2D,Et,Tt,yt.width,yt.height),lt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,yt.width,yt.height,Bt,Pt,yt.data)):e.texImage2D(n.TEXTURE_2D,0,Tt,yt.width,yt.height,0,Bt,Pt,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Vt&&ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,Tt,Zt[0].width,Zt[0].height,yt.depth);for(let ft=0,St=Zt.length;ft<St;ft++)Ut=Zt[ft],E.format!==vn?Bt!==null?Vt?lt&&e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,Ut.width,Ut.height,yt.depth,Bt,Ut.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ft,Tt,Ut.width,Ut.height,yt.depth,0,Ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?lt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,Ut.width,Ut.height,yt.depth,Bt,Pt,Ut.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ft,Tt,Ut.width,Ut.height,yt.depth,0,Bt,Pt,Ut.data)}else{Vt&&ce&&e.texStorage2D(n.TEXTURE_2D,Et,Tt,Zt[0].width,Zt[0].height);for(let ft=0,St=Zt.length;ft<St;ft++)Ut=Zt[ft],E.format!==vn?Bt!==null?Vt?lt&&e.compressedTexSubImage2D(n.TEXTURE_2D,ft,0,0,Ut.width,Ut.height,Bt,Ut.data):e.compressedTexImage2D(n.TEXTURE_2D,ft,Tt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?lt&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,Ut.width,Ut.height,Bt,Pt,Ut.data):e.texImage2D(n.TEXTURE_2D,ft,Tt,Ut.width,Ut.height,0,Bt,Pt,Ut.data)}else if(E.isDataArrayTexture)Vt?(ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,Tt,yt.width,yt.height,yt.depth),lt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Bt,Pt,yt.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,Tt,yt.width,yt.height,yt.depth,0,Bt,Pt,yt.data);else if(E.isData3DTexture)Vt?(ce&&e.texStorage3D(n.TEXTURE_3D,Et,Tt,yt.width,yt.height,yt.depth),lt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Bt,Pt,yt.data)):e.texImage3D(n.TEXTURE_3D,0,Tt,yt.width,yt.height,yt.depth,0,Bt,Pt,yt.data);else if(E.isFramebufferTexture){if(ce)if(Vt)e.texStorage2D(n.TEXTURE_2D,Et,Tt,yt.width,yt.height);else{let ft=yt.width,St=yt.height;for(let Rt=0;Rt<Et;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,Tt,ft,St,0,Bt,Pt,null),ft>>=1,St>>=1}}else if(Zt.length>0&&Ft){if(Vt&&ce){const ft=Y(Zt[0]);e.texStorage2D(n.TEXTURE_2D,Et,Tt,ft.width,ft.height)}for(let ft=0,St=Zt.length;ft<St;ft++)Ut=Zt[ft],Vt?lt&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,Bt,Pt,Ut):e.texImage2D(n.TEXTURE_2D,ft,Tt,Bt,Pt,Ut);E.generateMipmaps=!1}else if(Vt){if(ce){const ft=Y(yt);e.texStorage2D(n.TEXTURE_2D,Et,Tt,ft.width,ft.height)}lt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Bt,Pt,yt)}else e.texImage2D(n.TEXTURE_2D,0,Tt,Bt,Pt,yt);v(E,Ft)&&S(tt),bt.__version=ot.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function H(A,E,X){if(E.image.length!==6)return;const tt=U(A,E),et=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+X);const ot=i.get(et);if(et.version!==ot.__version||tt===!0){e.activeTexture(n.TEXTURE0+X);const bt=se.getPrimaries(se.workingColorSpace),xt=E.colorSpace===Mi?null:se.getPrimaries(E.colorSpace),vt=E.colorSpace===Mi||bt===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Mt=E.isCompressedTexture||E.image[0].isCompressedTexture,Dt=E.image[0]&&E.image[0].isDataTexture,yt=[];for(let ft=0;ft<6;ft++)!Mt&&!Dt?yt[ft]=m(E.image[ft],!1,!0,r.maxCubemapSize):yt[ft]=Dt?E.image[ft].image:E.image[ft],yt[ft]=B(E,yt[ft]);const Ft=yt[0],Bt=h(Ft)||a,Pt=s.convert(E.format,E.colorSpace),Tt=s.convert(E.type),Ut=w(E.internalFormat,Pt,Tt,E.colorSpace),Zt=a&&E.isVideoTexture!==!0,Vt=ot.__version===void 0||tt===!0,ce=et.dataReady;let lt=L(E,Ft,Bt);rt(n.TEXTURE_CUBE_MAP,E,Bt);let Et;if(Mt){Zt&&Vt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Ut,Ft.width,Ft.height);for(let ft=0;ft<6;ft++){Et=yt[ft].mipmaps;for(let St=0;St<Et.length;St++){const Rt=Et[St];E.format!==vn?Pt!==null?Zt?ce&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,St,0,0,Rt.width,Rt.height,Pt,Rt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,St,Ut,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?ce&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,St,0,0,Rt.width,Rt.height,Pt,Tt,Rt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,St,Ut,Rt.width,Rt.height,0,Pt,Tt,Rt.data)}}}else{if(Et=E.mipmaps,Zt&&Vt){Et.length>0&&lt++;const ft=Y(yt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Ut,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(Dt){Zt?ce&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,yt[ft].width,yt[ft].height,Pt,Tt,yt[ft].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Ut,yt[ft].width,yt[ft].height,0,Pt,Tt,yt[ft].data);for(let St=0;St<Et.length;St++){const Jt=Et[St].image[ft].image;Zt?ce&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,St+1,0,0,Jt.width,Jt.height,Pt,Tt,Jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,St+1,Ut,Jt.width,Jt.height,0,Pt,Tt,Jt.data)}}else{Zt?ce&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Pt,Tt,yt[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Ut,Pt,Tt,yt[ft]);for(let St=0;St<Et.length;St++){const Rt=Et[St];Zt?ce&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,St+1,0,0,Pt,Tt,Rt.image[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,St+1,Ut,Pt,Tt,Rt.image[ft])}}}v(E,Bt)&&S(n.TEXTURE_CUBE_MAP),ot.__version=et.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function it(A,E,X,tt,et,ot){const bt=s.convert(X.format,X.colorSpace),xt=s.convert(X.type),vt=w(X.internalFormat,bt,xt,X.colorSpace);if(!i.get(E).__hasExternalTextures){const Dt=Math.max(1,E.width>>ot),yt=Math.max(1,E.height>>ot);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,ot,vt,Dt,yt,E.depth,0,bt,xt,null):e.texImage2D(et,ot,vt,Dt,yt,0,bt,xt,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),R(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,et,i.get(X).__webglTexture,0,k(E)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,et,i.get(X).__webglTexture,ot),e.bindFramebuffer(n.FRAMEBUFFER,null)}function st(A,E,X){if(n.bindRenderbuffer(n.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let tt=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(X||R(E)){const et=E.depthTexture;et&&et.isDepthTexture&&(et.type===ni?tt=n.DEPTH_COMPONENT32F:et.type===bi&&(tt=n.DEPTH_COMPONENT24));const ot=k(E);R(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,tt,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,tt,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,tt,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){const tt=k(E);X&&R(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,tt,n.DEPTH24_STENCIL8,E.width,E.height):R(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,tt,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{const tt=E.textures;for(let et=0;et<tt.length;et++){const ot=tt[et],bt=s.convert(ot.format,ot.colorSpace),xt=s.convert(ot.type),vt=w(ot.internalFormat,bt,xt,ot.colorSpace),Mt=k(E);X&&R(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt,vt,E.width,E.height):R(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt,vt,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,vt,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function dt(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K(E.depthTexture,0);const tt=i.get(E.depthTexture).__webglTexture,et=k(E);if(E.depthTexture.format===Qi)R(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0);else if(E.depthTexture.format===kr)R(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function j(A){const E=i.get(A),X=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");dt(E.__webglFramebuffer,A)}else if(X){E.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[tt]),E.__webglDepthbuffer[tt]=n.createRenderbuffer(),st(E.__webglDepthbuffer[tt],A,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),st(E.__webglDepthbuffer,A,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function M(A,E,X){const tt=i.get(A);E!==void 0&&it(tt.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&j(A)}function D(A){const E=A.texture,X=i.get(A),tt=i.get(E);A.addEventListener("dispose",G);const et=A.textures,ot=A.isWebGLCubeRenderTarget===!0,bt=et.length>1,xt=h(A)||a;if(bt||(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=E.version,o.memory.textures++),ot){X.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(a&&E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[vt]=[];for(let Mt=0;Mt<E.mipmaps.length;Mt++)X.__webglFramebuffer[vt][Mt]=n.createFramebuffer()}else X.__webglFramebuffer[vt]=n.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let vt=0;vt<E.mipmaps.length;vt++)X.__webglFramebuffer[vt]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(bt)if(r.drawBuffers)for(let vt=0,Mt=et.length;vt<Mt;vt++){const Dt=i.get(et[vt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=n.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&R(A)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let vt=0;vt<et.length;vt++){const Mt=et[vt];X.__webglColorRenderbuffer[vt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[vt]);const Dt=s.convert(Mt.format,Mt.colorSpace),yt=s.convert(Mt.type),Ft=w(Mt.internalFormat,Dt,yt,Mt.colorSpace,A.isXRRenderTarget===!0),Bt=k(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt,Ft,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,X.__webglColorRenderbuffer[vt])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),st(X.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ot){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),rt(n.TEXTURE_CUBE_MAP,E,xt);for(let vt=0;vt<6;vt++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)it(X.__webglFramebuffer[vt][Mt],A,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Mt);else it(X.__webglFramebuffer[vt],A,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);v(E,xt)&&S(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let vt=0,Mt=et.length;vt<Mt;vt++){const Dt=et[vt],yt=i.get(Dt);e.bindTexture(n.TEXTURE_2D,yt.__webglTexture),rt(n.TEXTURE_2D,Dt,xt),it(X.__webglFramebuffer,A,Dt,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,0),v(Dt,xt)&&S(n.TEXTURE_2D)}e.unbindTexture()}else{let vt=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?vt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(vt,tt.__webglTexture),rt(vt,E,xt),a&&E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)it(X.__webglFramebuffer[Mt],A,E,n.COLOR_ATTACHMENT0,vt,Mt);else it(X.__webglFramebuffer,A,E,n.COLOR_ATTACHMENT0,vt,0);v(E,xt)&&S(vt),e.unbindTexture()}A.depthBuffer&&j(A)}function _(A){const E=h(A)||a,X=A.textures;for(let tt=0,et=X.length;tt<et;tt++){const ot=X[tt];if(v(ot,E)){const bt=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xt=i.get(ot).__webglTexture;e.bindTexture(bt,xt),S(bt),e.unbindTexture()}}}function O(A){if(a&&A.samples>0&&R(A)===!1){const E=A.textures,X=A.width,tt=A.height;let et=n.COLOR_BUFFER_BIT;const ot=[],bt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(A),vt=E.length>1;if(vt)for(let Mt=0;Mt<E.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Mt=0;Mt<E.length;Mt++){ot.push(n.COLOR_ATTACHMENT0+Mt),A.depthBuffer&&ot.push(bt);const Dt=xt.__ignoreDepthValues!==void 0?xt.__ignoreDepthValues:!1;if(Dt===!1&&(A.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),vt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[Mt]),Dt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[bt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[bt])),vt){const yt=i.get(E[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,yt,0)}n.blitFramebuffer(0,0,X,tt,0,0,X,tt,et,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ot)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),vt)for(let Mt=0;Mt<E.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,xt.__webglColorRenderbuffer[Mt]);const Dt=i.get(E[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,Dt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}}function k(A){return Math.min(r.maxSamples,A.samples)}function R(A){const E=i.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function P(A){const E=o.render.frame;f.get(A)!==E&&(f.set(A,E),A.update())}function B(A,E){const X=A.colorSpace,tt=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===pl||X!==Ri&&X!==Mi&&(se.getTransfer(X)===de?a===!1?t.has("EXT_sRGB")===!0&&tt===vn?(A.format=pl,A.minFilter=Je,A.generateMipmaps=!1):E=sd.sRGBToLinear(E):(tt!==vn||et!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}function Y(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=b,this.setTexture2D=K,this.setTexture2DArray=at,this.setTexture3D=nt,this.setTextureCube=ct,this.rebindTextures=M,this.setupRenderTarget=D,this.updateRenderTargetMipmap=_,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=it,this.useMultisampledRTT=R}function Lb(n,t,e){const i=e.isWebGL2;function r(s,o=Mi){let a;const l=se.getTransfer(o);if(s===wi)return n.UNSIGNED_BYTE;if(s===Kh)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Jh)return n.UNSIGNED_SHORT_5_5_5_1;if(s===cv)return n.BYTE;if(s===uv)return n.SHORT;if(s===Bl)return n.UNSIGNED_SHORT;if(s===Zh)return n.INT;if(s===bi)return n.UNSIGNED_INT;if(s===ni)return n.FLOAT;if(s===ys)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===fv)return n.ALPHA;if(s===vn)return n.RGBA;if(s===hv)return n.LUMINANCE;if(s===dv)return n.LUMINANCE_ALPHA;if(s===Qi)return n.DEPTH_COMPONENT;if(s===kr)return n.DEPTH_STENCIL;if(s===pl)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===pv)return n.RED;if(s===Qh)return n.RED_INTEGER;if(s===mv)return n.RG;if(s===td)return n.RG_INTEGER;if(s===ed)return n.RGBA_INTEGER;if(s===po||s===mo||s===go||s===_o)if(l===de)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===po)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===mo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===go)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===po)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===mo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===go)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_o)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===iu||s===ru||s===su||s===au)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===iu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ru)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===su)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===au)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===nd)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ou||s===lu)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ou)return l===de?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===lu)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===cu||s===uu||s===fu||s===hu||s===du||s===pu||s===mu||s===gu||s===_u||s===vu||s===xu||s===yu||s===Mu||s===bu)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===cu)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===uu)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fu)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hu)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===du)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===pu)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===mu)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gu)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_u)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vu)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xu)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===yu)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Mu)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bu)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vo||s===Su||s===Eu)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===vo)return l===de?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Su)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Eu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===gv||s===wu||s===Tu||s===Au)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===vo)return a.COMPRESSED_RED_RGTC1_EXT;if(s===wu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Tu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Au)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ji?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Db extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ea extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ub={type:"move"};class Xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ea,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ea,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new mt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new mt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ea,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new mt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new mt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,i),h=this._getHandJoint(u,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,x=.005;u.inputState.pinching&&d>p+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=p-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ub)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ea;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Nb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ob=`
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

}`;class Fb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new je,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const i=e.cameras[0].viewport,r=new ci({extensions:{fragDepth:!0},vertexShader:Nb,fragmentShader:Ob,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Fn(new Cs(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class kb extends zr{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,x=null;const g=new Fb,m=e.getContextAttributes();let h=null,y=null;const v=[],S=[],w=new Qt;let L=null;const C=new gn;C.layers.enable(1),C.viewport=new De;const z=new gn;z.layers.enable(2),z.viewport=new De;const G=[C,z],T=new Db;T.layers.enable(1),T.layers.enable(2);let N=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let U=v[rt];return U===void 0&&(U=new Xo,v[rt]=U),U.getTargetRaySpace()},this.getControllerGrip=function(rt){let U=v[rt];return U===void 0&&(U=new Xo,v[rt]=U),U.getGripSpace()},this.getHand=function(rt){let U=v[rt];return U===void 0&&(U=new Xo,v[rt]=U),U.getHandSpace()};function F(rt){const U=S.indexOf(rt.inputSource);if(U===-1)return;const J=v[U];J!==void 0&&(J.update(rt.inputSource,rt.frame,u||o),J.dispatchEvent({type:rt.type,data:rt.inputSource}))}function b(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",b),r.removeEventListener("inputsourceschange",q);for(let rt=0;rt<v.length;rt++){const U=S[rt];U!==null&&(S[rt]=null,v[rt].disconnect(U))}N=null,I=null,g.reset(),t.setRenderTarget(h),p=null,d=null,f=null,r=null,y=null,_t.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){s=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){a=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(rt){u=rt},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(rt){if(r=rt,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",b),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(w),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const U={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,U),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new er(p.framebufferWidth,p.framebufferHeight,{format:vn,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let U=null,J=null,H=null;m.depth&&(H=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,U=m.stencil?kr:Qi,J=m.stencil?Ji:bi);const it={colorFormat:e.RGBA8,depthFormat:H,scaleFactor:s};f=new XRWebGLBinding(r,e),d=f.createProjectionLayer(it),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new er(d.textureWidth,d.textureHeight,{format:vn,type:wi,depthTexture:new xd(d.textureWidth,d.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});const st=t.properties.get(y);st.__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),_t.setContext(r),_t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(rt){for(let U=0;U<rt.removed.length;U++){const J=rt.removed[U],H=S.indexOf(J);H>=0&&(S[H]=null,v[H].disconnect(J))}for(let U=0;U<rt.added.length;U++){const J=rt.added[U];let H=S.indexOf(J);if(H===-1){for(let st=0;st<v.length;st++)if(st>=S.length){S.push(J),H=st;break}else if(S[st]===null){S[st]=J,H=st;break}if(H===-1)break}const it=v[H];it&&it.connect(J)}}const W=new mt,K=new mt;function at(rt,U,J){W.setFromMatrixPosition(U.matrixWorld),K.setFromMatrixPosition(J.matrixWorld);const H=W.distanceTo(K),it=U.projectionMatrix.elements,st=J.projectionMatrix.elements,dt=it[14]/(it[10]-1),j=it[14]/(it[10]+1),M=(it[9]+1)/it[5],D=(it[9]-1)/it[5],_=(it[8]-1)/it[0],O=(st[8]+1)/st[0],k=dt*_,R=dt*O,P=H/(-_+O),B=P*-_;U.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(B),rt.translateZ(P),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert();const Y=dt+P,A=j+P,E=k-B,X=R+(H-B),tt=M*j/A*Y,et=D*j/A*Y;rt.projectionMatrix.makePerspective(E,X,tt,et,Y,A),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}function nt(rt,U){U===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(U.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(r===null)return;g.texture!==null&&(rt.near=g.depthNear,rt.far=g.depthFar),T.near=z.near=C.near=rt.near,T.far=z.far=C.far=rt.far,(N!==T.near||I!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),N=T.near,I=T.far,C.near=N,C.far=I,z.near=N,z.far=I,C.updateProjectionMatrix(),z.updateProjectionMatrix(),rt.updateProjectionMatrix());const U=rt.parent,J=T.cameras;nt(T,U);for(let H=0;H<J.length;H++)nt(J[H],U);J.length===2?at(T,C,z):T.projectionMatrix.copy(C.projectionMatrix),ct(rt,T,U)};function ct(rt,U,J){J===null?rt.matrix.copy(U.matrixWorld):(rt.matrix.copy(J.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(U.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(U.projectionMatrix),rt.projectionMatrixInverse.copy(U.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=ml*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(rt){l=rt,d!==null&&(d.fixedFoveation=rt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=rt)},this.hasDepthSensing=function(){return g.texture!==null};let Q=null;function Z(rt,U){if(c=U.getViewerPose(u||o),x=U,c!==null){const J=c.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let H=!1;J.length!==T.cameras.length&&(T.cameras.length=0,H=!0);for(let st=0;st<J.length;st++){const dt=J[st];let j=null;if(p!==null)j=p.getViewport(dt);else{const D=f.getViewSubImage(d,dt);j=D.viewport,st===0&&(t.setRenderTargetTextures(y,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(y))}let M=G[st];M===void 0&&(M=new gn,M.layers.enable(st),M.viewport=new De,G[st]=M),M.matrix.fromArray(dt.transform.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale),M.projectionMatrix.fromArray(dt.projectionMatrix),M.projectionMatrixInverse.copy(M.projectionMatrix).invert(),M.viewport.set(j.x,j.y,j.width,j.height),st===0&&(T.matrix.copy(M.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),H===!0&&T.cameras.push(M)}const it=r.enabledFeatures;if(it&&it.includes("depth-sensing")){const st=f.getDepthInformation(J[0]);st&&st.isValid&&st.texture&&g.init(t,st,r.renderState)}}for(let J=0;J<v.length;J++){const H=S[J],it=v[J];H!==null&&it!==void 0&&it.update(H,U,u||o)}g.render(t,T),Q&&Q(rt,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),x=null}const _t=new _d;_t.setAnimationLoop(Z),this.setAnimationLoop=function(rt){Q=rt},this.dispose=function(){}}}const Hi=new li,Bb=new we;function zb(n,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,dd(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,y,v,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),x(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),g(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,y,v):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===tn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===tn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const y=t.get(h),v=y.envMap,S=y.envMapRotation;if(v&&(m.envMap.value=v,Hi.copy(S),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),m.envMapRotation.value.setFromMatrix4(Bb.makeRotationFromEuler(Hi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const w=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*w,e(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,y,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*y,m.scale.value=v*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),t.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,y){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===tn&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const y=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Hb(n,t,e,i){let r={},s={},o=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const S=v.program;i.uniformBlockBinding(y,S)}function u(y,v){let S=r[y.id];S===void 0&&(x(y),S=c(y),r[y.id]=S,y.addEventListener("dispose",m));const w=v.program;i.updateUBOMapping(y,w);const L=t.render.frame;s[y.id]!==L&&(d(y),s[y.id]=L)}function c(y){const v=f();y.__bindingPointIndex=v;const S=n.createBuffer(),w=y.__size,L=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,S),S}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=r[y.id],S=y.uniforms,w=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let L=0,C=S.length;L<C;L++){const z=Array.isArray(S[L])?S[L]:[S[L]];for(let G=0,T=z.length;G<T;G++){const N=z[G];if(p(N,L,G,w)===!0){const I=N.__offset,F=Array.isArray(N.value)?N.value:[N.value];let b=0;for(let q=0;q<F.length;q++){const W=F[q],K=g(W);typeof W=="number"||typeof W=="boolean"?(N.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,I+b,N.__data)):W.isMatrix3?(N.__data[0]=W.elements[0],N.__data[1]=W.elements[1],N.__data[2]=W.elements[2],N.__data[3]=0,N.__data[4]=W.elements[3],N.__data[5]=W.elements[4],N.__data[6]=W.elements[5],N.__data[7]=0,N.__data[8]=W.elements[6],N.__data[9]=W.elements[7],N.__data[10]=W.elements[8],N.__data[11]=0):(W.toArray(N.__data,b),b+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,v,S,w){const L=y.value,C=v+"_"+S;if(w[C]===void 0)return typeof L=="number"||typeof L=="boolean"?w[C]=L:w[C]=L.clone(),!0;{const z=w[C];if(typeof L=="number"||typeof L=="boolean"){if(z!==L)return w[C]=L,!0}else if(z.equals(L)===!1)return z.copy(L),!0}return!1}function x(y){const v=y.uniforms;let S=0;const w=16;for(let C=0,z=v.length;C<z;C++){const G=Array.isArray(v[C])?v[C]:[v[C]];for(let T=0,N=G.length;T<N;T++){const I=G[T],F=Array.isArray(I.value)?I.value:[I.value];for(let b=0,q=F.length;b<q;b++){const W=F[b],K=g(W),at=S%w;at!==0&&w-at<K.boundary&&(S+=w-at),I.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=K.storage}}}const L=S%w;return L>0&&(S+=w-L),y.__size=S,y.__cache={},this}function g(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class wd{constructor(t={}){const{canvas:e=Rv(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),x=new Int32Array(4);let g=null,m=null;const h=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pn,this._useLegacyLights=!1,this.toneMapping=Ei,this.toneMappingExposure=1;const v=this;let S=!1,w=0,L=0,C=null,z=-1,G=null;const T=new De,N=new De;let I=null;const F=new oe(0);let b=0,q=e.width,W=e.height,K=1,at=null,nt=null;const ct=new De(0,0,q,W),Q=new De(0,0,q,W);let Z=!1;const _t=new gd;let rt=!1,U=!1,J=null;const H=new we,it=new Qt,st=new mt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function j(){return C===null?K:1}let M=i;function D($,ut){for(let pt=0;pt<$.length;pt++){const gt=$[pt],ht=e.getContext(gt,ut);if(ht!==null)return ht}return null}try{const $={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${kl}`),e.addEventListener("webglcontextlost",ce,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),M===null){const ut=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&ut.shift(),M=D(ut,$),M===null)throw D(ut)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&M instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),M.getShaderPrecisionFormat===void 0&&(M.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch($){throw console.error("THREE.WebGLRenderer: "+$.message),$}let _,O,k,R,P,B,Y,A,E,X,tt,et,ot,bt,xt,vt,Mt,Dt,yt,Ft,Bt,Pt,Tt,Ut;function Zt(){_=new qy(M),O=new Hy(M,_,t),_.init(O),Pt=new Lb(M,_,O),k=new Pb(M,_,O),R=new Zy(M),P=new gb,B=new Ib(M,_,k,P,O,Pt,R),Y=new Vy(v),A=new $y(v),E=new nx(M,O),Tt=new By(M,_,E,O),X=new jy(M,E,R,Tt),tt=new tM(M,X,E,R),yt=new Qy(M,O,B),vt=new Gy(P),et=new mb(v,Y,A,_,O,Tt,vt),ot=new zb(v,P),bt=new vb,xt=new Eb(_,O),Dt=new ky(v,Y,A,k,tt,d,l),Mt=new Rb(v,tt,O),Ut=new Hb(M,R,O,k),Ft=new zy(M,_,R,O),Bt=new Yy(M,_,R,O),R.programs=et.programs,v.capabilities=O,v.extensions=_,v.properties=P,v.renderLists=bt,v.shadowMap=Mt,v.state=k,v.info=R}Zt();const Vt=new kb(v,M);this.xr=Vt,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const $=_.get("WEBGL_lose_context");$&&$.loseContext()},this.forceContextRestore=function(){const $=_.get("WEBGL_lose_context");$&&$.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function($){$!==void 0&&(K=$,this.setSize(q,W,!1))},this.getSize=function($){return $.set(q,W)},this.setSize=function($,ut,pt=!0){if(Vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=$,W=ut,e.width=Math.floor($*K),e.height=Math.floor(ut*K),pt===!0&&(e.style.width=$+"px",e.style.height=ut+"px"),this.setViewport(0,0,$,ut)},this.getDrawingBufferSize=function($){return $.set(q*K,W*K).floor()},this.setDrawingBufferSize=function($,ut,pt){q=$,W=ut,K=pt,e.width=Math.floor($*pt),e.height=Math.floor(ut*pt),this.setViewport(0,0,$,ut)},this.getCurrentViewport=function($){return $.copy(T)},this.getViewport=function($){return $.copy(ct)},this.setViewport=function($,ut,pt,gt){$.isVector4?ct.set($.x,$.y,$.z,$.w):ct.set($,ut,pt,gt),k.viewport(T.copy(ct).multiplyScalar(K).round())},this.getScissor=function($){return $.copy(Q)},this.setScissor=function($,ut,pt,gt){$.isVector4?Q.set($.x,$.y,$.z,$.w):Q.set($,ut,pt,gt),k.scissor(N.copy(Q).multiplyScalar(K).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function($){k.setScissorTest(Z=$)},this.setOpaqueSort=function($){at=$},this.setTransparentSort=function($){nt=$},this.getClearColor=function($){return $.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function($=!0,ut=!0,pt=!0){let gt=0;if($){let ht=!1;if(C!==null){const It=C.texture.format;ht=It===ed||It===td||It===Qh}if(ht){const It=C.texture.type,Nt=It===wi||It===bi||It===Bl||It===Ji||It===Kh||It===Jh,kt=Dt.getClearColor(),zt=Dt.getClearAlpha(),Kt=kt.r,Wt=kt.g,Xt=kt.b;Nt?(p[0]=Kt,p[1]=Wt,p[2]=Xt,p[3]=zt,M.clearBufferuiv(M.COLOR,0,p)):(x[0]=Kt,x[1]=Wt,x[2]=Xt,x[3]=zt,M.clearBufferiv(M.COLOR,0,x))}else gt|=M.COLOR_BUFFER_BIT}ut&&(gt|=M.DEPTH_BUFFER_BIT),pt&&(gt|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(gt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ce,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),bt.dispose(),xt.dispose(),P.dispose(),Y.dispose(),A.dispose(),tt.dispose(),Tt.dispose(),Ut.dispose(),et.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",ln),Vt.removeEventListener("sessionend",fe),J&&(J.dispose(),J=null),ze.stop()};function ce($){$.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const $=R.autoReset,ut=Mt.enabled,pt=Mt.autoUpdate,gt=Mt.needsUpdate,ht=Mt.type;Zt(),R.autoReset=$,Mt.enabled=ut,Mt.autoUpdate=pt,Mt.needsUpdate=gt,Mt.type=ht}function Et($){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",$.statusMessage)}function ft($){const ut=$.target;ut.removeEventListener("dispose",ft),St(ut)}function St($){Rt($),P.remove($)}function Rt($){const ut=P.get($).programs;ut!==void 0&&(ut.forEach(function(pt){et.releaseProgram(pt)}),$.isShaderMaterial&&et.releaseShaderCache($))}this.renderBufferDirect=function($,ut,pt,gt,ht,It){ut===null&&(ut=dt);const Nt=ht.isMesh&&ht.matrixWorld.determinant()<0,kt=Rd($,ut,pt,gt,ht);k.setMaterial(gt,Nt);let zt=pt.index,Kt=1;if(gt.wireframe===!0){if(zt=X.getWireframeAttribute(pt),zt===void 0)return;Kt=2}const Wt=pt.drawRange,Xt=pt.attributes.position;let ye=Wt.start*Kt,en=(Wt.start+Wt.count)*Kt;It!==null&&(ye=Math.max(ye,It.start*Kt),en=Math.min(en,(It.start+It.count)*Kt)),zt!==null?(ye=Math.max(ye,0),en=Math.min(en,zt.count)):Xt!=null&&(ye=Math.max(ye,0),en=Math.min(en,Xt.count));const Re=en-ye;if(Re<0||Re===1/0)return;Tt.setup(ht,gt,kt,pt,zt);let Hn,ge=Ft;if(zt!==null&&(Hn=E.get(zt),ge=Bt,ge.setIndex(Hn)),ht.isMesh)gt.wireframe===!0?(k.setLineWidth(gt.wireframeLinewidth*j()),ge.setMode(M.LINES)):ge.setMode(M.TRIANGLES);else if(ht.isLine){let qt=gt.linewidth;qt===void 0&&(qt=1),k.setLineWidth(qt*j()),ht.isLineSegments?ge.setMode(M.LINES):ht.isLineLoop?ge.setMode(M.LINE_LOOP):ge.setMode(M.LINE_STRIP)}else ht.isPoints?ge.setMode(M.POINTS):ht.isSprite&&ge.setMode(M.TRIANGLES);if(ht.isBatchedMesh)ge.renderMultiDraw(ht._multiDrawStarts,ht._multiDrawCounts,ht._multiDrawCount);else if(ht.isInstancedMesh)ge.renderInstances(ye,Re,ht.count);else if(pt.isInstancedBufferGeometry){const qt=pt._maxInstanceCount!==void 0?pt._maxInstanceCount:1/0,$a=Math.min(pt.instanceCount,qt);ge.renderInstances(ye,Re,$a)}else ge.render(ye,Re)};function Jt($,ut,pt){$.transparent===!0&&$.side===ei&&$.forceSinglePass===!1?($.side=tn,$.needsUpdate=!0,Ps($,ut,pt),$.side=Ai,$.needsUpdate=!0,Ps($,ut,pt),$.side=ei):Ps($,ut,pt)}this.compile=function($,ut,pt=null){pt===null&&(pt=$),m=xt.get(pt),m.init(),y.push(m),pt.traverseVisible(function(ht){ht.isLight&&ht.layers.test(ut.layers)&&(m.pushLight(ht),ht.castShadow&&m.pushShadow(ht))}),$!==pt&&$.traverseVisible(function(ht){ht.isLight&&ht.layers.test(ut.layers)&&(m.pushLight(ht),ht.castShadow&&m.pushShadow(ht))}),m.setupLights(v._useLegacyLights);const gt=new Set;return $.traverse(function(ht){const It=ht.material;if(It)if(Array.isArray(It))for(let Nt=0;Nt<It.length;Nt++){const kt=It[Nt];Jt(kt,pt,ht),gt.add(kt)}else Jt(It,pt,ht),gt.add(It)}),y.pop(),m=null,gt},this.compileAsync=function($,ut,pt=null){const gt=this.compile($,ut,pt);return new Promise(ht=>{function It(){if(gt.forEach(function(Nt){P.get(Nt).currentProgram.isReady()&&gt.delete(Nt)}),gt.size===0){ht($);return}setTimeout(It,10)}_.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let ue=null;function Ie($){ue&&ue($)}function ln(){ze.stop()}function fe(){ze.start()}const ze=new _d;ze.setAnimationLoop(Ie),typeof self<"u"&&ze.setContext(self),this.setAnimationLoop=function($){ue=$,Vt.setAnimationLoop($),$===null?ze.stop():ze.start()},Vt.addEventListener("sessionstart",ln),Vt.addEventListener("sessionend",fe),this.render=function($,ut){if(ut!==void 0&&ut.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ut.parent===null&&ut.matrixWorldAutoUpdate===!0&&ut.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(ut),ut=Vt.getCamera()),$.isScene===!0&&$.onBeforeRender(v,$,ut,C),m=xt.get($,y.length),m.init(),y.push(m),H.multiplyMatrices(ut.projectionMatrix,ut.matrixWorldInverse),_t.setFromProjectionMatrix(H),U=this.localClippingEnabled,rt=vt.init(this.clippingPlanes,U),g=bt.get($,h.length),g.init(),h.push(g),Tn($,ut,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(at,nt),this.info.render.frame++,rt===!0&&vt.beginShadows();const pt=m.state.shadowsArray;if(Mt.render(pt,$,ut),rt===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1)&&Dt.render(g,$),m.setupLights(v._useLegacyLights),ut.isArrayCamera){const gt=ut.cameras;for(let ht=0,It=gt.length;ht<It;ht++){const Nt=gt[ht];Vl(g,$,Nt,Nt.viewport)}}else Vl(g,$,ut);C!==null&&(B.updateMultisampleRenderTarget(C),B.updateRenderTargetMipmap(C)),$.isScene===!0&&$.onAfterRender(v,$,ut),Tt.resetDefaultState(),z=-1,G=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function Tn($,ut,pt,gt){if($.visible===!1)return;if($.layers.test(ut.layers)){if($.isGroup)pt=$.renderOrder;else if($.isLOD)$.autoUpdate===!0&&$.update(ut);else if($.isLight)m.pushLight($),$.castShadow&&m.pushShadow($);else if($.isSprite){if(!$.frustumCulled||_t.intersectsSprite($)){gt&&st.setFromMatrixPosition($.matrixWorld).applyMatrix4(H);const Nt=tt.update($),kt=$.material;kt.visible&&g.push($,Nt,kt,pt,st.z,null)}}else if(($.isMesh||$.isLine||$.isPoints)&&(!$.frustumCulled||_t.intersectsObject($))){const Nt=tt.update($),kt=$.material;if(gt&&($.boundingSphere!==void 0?($.boundingSphere===null&&$.computeBoundingSphere(),st.copy($.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),st.copy(Nt.boundingSphere.center)),st.applyMatrix4($.matrixWorld).applyMatrix4(H)),Array.isArray(kt)){const zt=Nt.groups;for(let Kt=0,Wt=zt.length;Kt<Wt;Kt++){const Xt=zt[Kt],ye=kt[Xt.materialIndex];ye&&ye.visible&&g.push($,Nt,ye,pt,st.z,Xt)}}else kt.visible&&g.push($,Nt,kt,pt,st.z,null)}}const It=$.children;for(let Nt=0,kt=It.length;Nt<kt;Nt++)Tn(It[Nt],ut,pt,gt)}function Vl($,ut,pt,gt){const ht=$.opaque,It=$.transmissive,Nt=$.transparent;m.setupLightsView(pt),rt===!0&&vt.setGlobalState(v.clippingPlanes,pt),It.length>0&&Cd(ht,It,ut,pt),gt&&k.viewport(T.copy(gt)),ht.length>0&&Rs(ht,ut,pt),It.length>0&&Rs(It,ut,pt),Nt.length>0&&Rs(Nt,ut,pt),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Cd($,ut,pt,gt){if((pt.isScene===!0?pt.overrideMaterial:null)!==null)return;const It=O.isWebGL2;J===null&&(J=new er(1,1,{generateMipmaps:!0,type:_.has("EXT_color_buffer_half_float")?ys:wi,minFilter:Yi,samples:It?4:0})),v.getDrawingBufferSize(it),It?J.setSize(it.x,it.y):J.setSize(gl(it.x),gl(it.y));const Nt=v.getRenderTarget();v.setRenderTarget(J),v.getClearColor(F),b=v.getClearAlpha(),b<1&&v.setClearColor(16777215,.5),v.clear();const kt=v.toneMapping;v.toneMapping=Ei,Rs($,pt,gt),B.updateMultisampleRenderTarget(J),B.updateRenderTargetMipmap(J);let zt=!1;for(let Kt=0,Wt=ut.length;Kt<Wt;Kt++){const Xt=ut[Kt],ye=Xt.object,en=Xt.geometry,Re=Xt.material,Hn=Xt.group;if(Re.side===ei&&ye.layers.test(gt.layers)){const ge=Re.side;Re.side=tn,Re.needsUpdate=!0,Wl(ye,pt,gt,en,Re,Hn),Re.side=ge,Re.needsUpdate=!0,zt=!0}}zt===!0&&(B.updateMultisampleRenderTarget(J),B.updateRenderTargetMipmap(J)),v.setRenderTarget(Nt),v.setClearColor(F,b),v.toneMapping=kt}function Rs($,ut,pt){const gt=ut.isScene===!0?ut.overrideMaterial:null;for(let ht=0,It=$.length;ht<It;ht++){const Nt=$[ht],kt=Nt.object,zt=Nt.geometry,Kt=gt===null?Nt.material:gt,Wt=Nt.group;kt.layers.test(pt.layers)&&Wl(kt,ut,pt,zt,Kt,Wt)}}function Wl($,ut,pt,gt,ht,It){$.onBeforeRender(v,ut,pt,gt,ht,It),$.modelViewMatrix.multiplyMatrices(pt.matrixWorldInverse,$.matrixWorld),$.normalMatrix.getNormalMatrix($.modelViewMatrix),ht.onBeforeRender(v,ut,pt,gt,$,It),ht.transparent===!0&&ht.side===ei&&ht.forceSinglePass===!1?(ht.side=tn,ht.needsUpdate=!0,v.renderBufferDirect(pt,ut,gt,ht,$,It),ht.side=Ai,ht.needsUpdate=!0,v.renderBufferDirect(pt,ut,gt,ht,$,It),ht.side=ei):v.renderBufferDirect(pt,ut,gt,ht,$,It),$.onAfterRender(v,ut,pt,gt,ht,It)}function Ps($,ut,pt){ut.isScene!==!0&&(ut=dt);const gt=P.get($),ht=m.state.lights,It=m.state.shadowsArray,Nt=ht.state.version,kt=et.getParameters($,ht.state,It,ut,pt),zt=et.getProgramCacheKey(kt);let Kt=gt.programs;gt.environment=$.isMeshStandardMaterial?ut.environment:null,gt.fog=ut.fog,gt.envMap=($.isMeshStandardMaterial?A:Y).get($.envMap||gt.environment),gt.envMapRotation=gt.environment!==null&&$.envMap===null?ut.environmentRotation:$.envMapRotation,Kt===void 0&&($.addEventListener("dispose",ft),Kt=new Map,gt.programs=Kt);let Wt=Kt.get(zt);if(Wt!==void 0){if(gt.currentProgram===Wt&&gt.lightsStateVersion===Nt)return $l($,kt),Wt}else kt.uniforms=et.getUniforms($),$.onBuild(pt,kt,v),$.onBeforeCompile(kt,v),Wt=et.acquireProgram(kt,zt),Kt.set(zt,Wt),gt.uniforms=kt.uniforms;const Xt=gt.uniforms;return(!$.isShaderMaterial&&!$.isRawShaderMaterial||$.clipping===!0)&&(Xt.clippingPlanes=vt.uniform),$l($,kt),gt.needsLights=Id($),gt.lightsStateVersion=Nt,gt.needsLights&&(Xt.ambientLightColor.value=ht.state.ambient,Xt.lightProbe.value=ht.state.probe,Xt.directionalLights.value=ht.state.directional,Xt.directionalLightShadows.value=ht.state.directionalShadow,Xt.spotLights.value=ht.state.spot,Xt.spotLightShadows.value=ht.state.spotShadow,Xt.rectAreaLights.value=ht.state.rectArea,Xt.ltc_1.value=ht.state.rectAreaLTC1,Xt.ltc_2.value=ht.state.rectAreaLTC2,Xt.pointLights.value=ht.state.point,Xt.pointLightShadows.value=ht.state.pointShadow,Xt.hemisphereLights.value=ht.state.hemi,Xt.directionalShadowMap.value=ht.state.directionalShadowMap,Xt.directionalShadowMatrix.value=ht.state.directionalShadowMatrix,Xt.spotShadowMap.value=ht.state.spotShadowMap,Xt.spotLightMatrix.value=ht.state.spotLightMatrix,Xt.spotLightMap.value=ht.state.spotLightMap,Xt.pointShadowMap.value=ht.state.pointShadowMap,Xt.pointShadowMatrix.value=ht.state.pointShadowMatrix),gt.currentProgram=Wt,gt.uniformsList=null,Wt}function Xl($){if($.uniformsList===null){const ut=$.currentProgram.getUniforms();$.uniformsList=ca.seqWithValue(ut.seq,$.uniforms)}return $.uniformsList}function $l($,ut){const pt=P.get($);pt.outputColorSpace=ut.outputColorSpace,pt.batching=ut.batching,pt.instancing=ut.instancing,pt.instancingColor=ut.instancingColor,pt.instancingMorph=ut.instancingMorph,pt.skinning=ut.skinning,pt.morphTargets=ut.morphTargets,pt.morphNormals=ut.morphNormals,pt.morphColors=ut.morphColors,pt.morphTargetsCount=ut.morphTargetsCount,pt.numClippingPlanes=ut.numClippingPlanes,pt.numIntersection=ut.numClipIntersection,pt.vertexAlphas=ut.vertexAlphas,pt.vertexTangents=ut.vertexTangents,pt.toneMapping=ut.toneMapping}function Rd($,ut,pt,gt,ht){ut.isScene!==!0&&(ut=dt),B.resetTextureUnits();const It=ut.fog,Nt=gt.isMeshStandardMaterial?ut.environment:null,kt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ri,zt=(gt.isMeshStandardMaterial?A:Y).get(gt.envMap||Nt),Kt=gt.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,Wt=!!pt.attributes.tangent&&(!!gt.normalMap||gt.anisotropy>0),Xt=!!pt.morphAttributes.position,ye=!!pt.morphAttributes.normal,en=!!pt.morphAttributes.color;let Re=Ei;gt.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Re=v.toneMapping);const Hn=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,ge=Hn!==void 0?Hn.length:0,qt=P.get(gt),$a=m.state.lights;if(rt===!0&&(U===!0||$!==G)){const cn=$===G&&gt.id===z;vt.setState(gt,$,cn)}let me=!1;gt.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==$a.state.version||qt.outputColorSpace!==kt||ht.isBatchedMesh&&qt.batching===!1||!ht.isBatchedMesh&&qt.batching===!0||ht.isInstancedMesh&&qt.instancing===!1||!ht.isInstancedMesh&&qt.instancing===!0||ht.isSkinnedMesh&&qt.skinning===!1||!ht.isSkinnedMesh&&qt.skinning===!0||ht.isInstancedMesh&&qt.instancingColor===!0&&ht.instanceColor===null||ht.isInstancedMesh&&qt.instancingColor===!1&&ht.instanceColor!==null||ht.isInstancedMesh&&qt.instancingMorph===!0&&ht.morphTexture===null||ht.isInstancedMesh&&qt.instancingMorph===!1&&ht.morphTexture!==null||qt.envMap!==zt||gt.fog===!0&&qt.fog!==It||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==vt.numPlanes||qt.numIntersection!==vt.numIntersection)||qt.vertexAlphas!==Kt||qt.vertexTangents!==Wt||qt.morphTargets!==Xt||qt.morphNormals!==ye||qt.morphColors!==en||qt.toneMapping!==Re||O.isWebGL2===!0&&qt.morphTargetsCount!==ge)&&(me=!0):(me=!0,qt.__version=gt.version);let Pi=qt.currentProgram;me===!0&&(Pi=Ps(gt,ut,ht));let ql=!1,Gr=!1,qa=!1;const Ue=Pi.getUniforms(),Ii=qt.uniforms;if(k.useProgram(Pi.program)&&(ql=!0,Gr=!0,qa=!0),gt.id!==z&&(z=gt.id,Gr=!0),ql||G!==$){Ue.setValue(M,"projectionMatrix",$.projectionMatrix),Ue.setValue(M,"viewMatrix",$.matrixWorldInverse);const cn=Ue.map.cameraPosition;cn!==void 0&&cn.setValue(M,st.setFromMatrixPosition($.matrixWorld)),O.logarithmicDepthBuffer&&Ue.setValue(M,"logDepthBufFC",2/(Math.log($.far+1)/Math.LN2)),(gt.isMeshPhongMaterial||gt.isMeshToonMaterial||gt.isMeshLambertMaterial||gt.isMeshBasicMaterial||gt.isMeshStandardMaterial||gt.isShaderMaterial)&&Ue.setValue(M,"isOrthographic",$.isOrthographicCamera===!0),G!==$&&(G=$,Gr=!0,qa=!0)}if(ht.isSkinnedMesh){Ue.setOptional(M,ht,"bindMatrix"),Ue.setOptional(M,ht,"bindMatrixInverse");const cn=ht.skeleton;cn&&(O.floatVertexTextures?(cn.boneTexture===null&&cn.computeBoneTexture(),Ue.setValue(M,"boneTexture",cn.boneTexture,B)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ht.isBatchedMesh&&(Ue.setOptional(M,ht,"batchingTexture"),Ue.setValue(M,"batchingTexture",ht._matricesTexture,B));const ja=pt.morphAttributes;if((ja.position!==void 0||ja.normal!==void 0||ja.color!==void 0&&O.isWebGL2===!0)&&yt.update(ht,pt,Pi),(Gr||qt.receiveShadow!==ht.receiveShadow)&&(qt.receiveShadow=ht.receiveShadow,Ue.setValue(M,"receiveShadow",ht.receiveShadow)),gt.isMeshGouraudMaterial&&gt.envMap!==null&&(Ii.envMap.value=zt,Ii.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),Gr&&(Ue.setValue(M,"toneMappingExposure",v.toneMappingExposure),qt.needsLights&&Pd(Ii,qa),It&&gt.fog===!0&&ot.refreshFogUniforms(Ii,It),ot.refreshMaterialUniforms(Ii,gt,K,W,J),ca.upload(M,Xl(qt),Ii,B)),gt.isShaderMaterial&&gt.uniformsNeedUpdate===!0&&(ca.upload(M,Xl(qt),Ii,B),gt.uniformsNeedUpdate=!1),gt.isSpriteMaterial&&Ue.setValue(M,"center",ht.center),Ue.setValue(M,"modelViewMatrix",ht.modelViewMatrix),Ue.setValue(M,"normalMatrix",ht.normalMatrix),Ue.setValue(M,"modelMatrix",ht.matrixWorld),gt.isShaderMaterial||gt.isRawShaderMaterial){const cn=gt.uniformsGroups;for(let Ya=0,Ld=cn.length;Ya<Ld;Ya++)if(O.isWebGL2){const jl=cn[Ya];Ut.update(jl,Pi),Ut.bind(jl,Pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pi}function Pd($,ut){$.ambientLightColor.needsUpdate=ut,$.lightProbe.needsUpdate=ut,$.directionalLights.needsUpdate=ut,$.directionalLightShadows.needsUpdate=ut,$.pointLights.needsUpdate=ut,$.pointLightShadows.needsUpdate=ut,$.spotLights.needsUpdate=ut,$.spotLightShadows.needsUpdate=ut,$.rectAreaLights.needsUpdate=ut,$.hemisphereLights.needsUpdate=ut}function Id($){return $.isMeshLambertMaterial||$.isMeshToonMaterial||$.isMeshPhongMaterial||$.isMeshStandardMaterial||$.isShadowMaterial||$.isShaderMaterial&&$.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function($,ut,pt){P.get($.texture).__webglTexture=ut,P.get($.depthTexture).__webglTexture=pt;const gt=P.get($);gt.__hasExternalTextures=!0,gt.__autoAllocateDepthBuffer=pt===void 0,gt.__autoAllocateDepthBuffer||_.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),gt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function($,ut){const pt=P.get($);pt.__webglFramebuffer=ut,pt.__useDefaultFramebuffer=ut===void 0},this.setRenderTarget=function($,ut=0,pt=0){C=$,w=ut,L=pt;let gt=!0,ht=null,It=!1,Nt=!1;if($){const zt=P.get($);zt.__useDefaultFramebuffer!==void 0?(k.bindFramebuffer(M.FRAMEBUFFER,null),gt=!1):zt.__webglFramebuffer===void 0?B.setupRenderTarget($):zt.__hasExternalTextures&&B.rebindTextures($,P.get($.texture).__webglTexture,P.get($.depthTexture).__webglTexture);const Kt=$.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Nt=!0);const Wt=P.get($).__webglFramebuffer;$.isWebGLCubeRenderTarget?(Array.isArray(Wt[ut])?ht=Wt[ut][pt]:ht=Wt[ut],It=!0):O.isWebGL2&&$.samples>0&&B.useMultisampledRTT($)===!1?ht=P.get($).__webglMultisampledFramebuffer:Array.isArray(Wt)?ht=Wt[pt]:ht=Wt,T.copy($.viewport),N.copy($.scissor),I=$.scissorTest}else T.copy(ct).multiplyScalar(K).floor(),N.copy(Q).multiplyScalar(K).floor(),I=Z;if(k.bindFramebuffer(M.FRAMEBUFFER,ht)&&O.drawBuffers&&gt&&k.drawBuffers($,ht),k.viewport(T),k.scissor(N),k.setScissorTest(I),It){const zt=P.get($.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+ut,zt.__webglTexture,pt)}else if(Nt){const zt=P.get($.texture),Kt=ut||0;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,zt.__webglTexture,pt||0,Kt)}z=-1},this.readRenderTargetPixels=function($,ut,pt,gt,ht,It,Nt){if(!($&&$.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=P.get($).__webglFramebuffer;if($.isWebGLCubeRenderTarget&&Nt!==void 0&&(kt=kt[Nt]),kt){k.bindFramebuffer(M.FRAMEBUFFER,kt);try{const zt=$.texture,Kt=zt.format,Wt=zt.type;if(Kt!==vn&&Pt.convert(Kt)!==M.getParameter(M.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xt=Wt===ys&&(_.has("EXT_color_buffer_half_float")||O.isWebGL2&&_.has("EXT_color_buffer_float"));if(Wt!==wi&&Pt.convert(Wt)!==M.getParameter(M.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Wt===ni&&(O.isWebGL2||_.has("OES_texture_float")||_.has("WEBGL_color_buffer_float")))&&!Xt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ut>=0&&ut<=$.width-gt&&pt>=0&&pt<=$.height-ht&&M.readPixels(ut,pt,gt,ht,Pt.convert(Kt),Pt.convert(Wt),It)}finally{const zt=C!==null?P.get(C).__webglFramebuffer:null;k.bindFramebuffer(M.FRAMEBUFFER,zt)}}},this.copyFramebufferToTexture=function($,ut,pt=0){const gt=Math.pow(2,-pt),ht=Math.floor(ut.image.width*gt),It=Math.floor(ut.image.height*gt);B.setTexture2D(ut,0),M.copyTexSubImage2D(M.TEXTURE_2D,pt,0,0,$.x,$.y,ht,It),k.unbindTexture()},this.copyTextureToTexture=function($,ut,pt,gt=0){const ht=ut.image.width,It=ut.image.height,Nt=Pt.convert(pt.format),kt=Pt.convert(pt.type);B.setTexture2D(pt,0),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,pt.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,pt.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,pt.unpackAlignment),ut.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,gt,$.x,$.y,ht,It,Nt,kt,ut.image.data):ut.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,gt,$.x,$.y,ut.mipmaps[0].width,ut.mipmaps[0].height,Nt,ut.mipmaps[0].data):M.texSubImage2D(M.TEXTURE_2D,gt,$.x,$.y,Nt,kt,ut.image),gt===0&&pt.generateMipmaps&&M.generateMipmap(M.TEXTURE_2D),k.unbindTexture()},this.copyTextureToTexture3D=function($,ut,pt,gt,ht=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const It=Math.round($.max.x-$.min.x),Nt=Math.round($.max.y-$.min.y),kt=$.max.z-$.min.z+1,zt=Pt.convert(gt.format),Kt=Pt.convert(gt.type);let Wt;if(gt.isData3DTexture)B.setTexture3D(gt,0),Wt=M.TEXTURE_3D;else if(gt.isDataArrayTexture||gt.isCompressedArrayTexture)B.setTexture2DArray(gt,0),Wt=M.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,gt.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,gt.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,gt.unpackAlignment);const Xt=M.getParameter(M.UNPACK_ROW_LENGTH),ye=M.getParameter(M.UNPACK_IMAGE_HEIGHT),en=M.getParameter(M.UNPACK_SKIP_PIXELS),Re=M.getParameter(M.UNPACK_SKIP_ROWS),Hn=M.getParameter(M.UNPACK_SKIP_IMAGES),ge=pt.isCompressedTexture?pt.mipmaps[ht]:pt.image;M.pixelStorei(M.UNPACK_ROW_LENGTH,ge.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,ge.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,$.min.x),M.pixelStorei(M.UNPACK_SKIP_ROWS,$.min.y),M.pixelStorei(M.UNPACK_SKIP_IMAGES,$.min.z),pt.isDataTexture||pt.isData3DTexture?M.texSubImage3D(Wt,ht,ut.x,ut.y,ut.z,It,Nt,kt,zt,Kt,ge.data):gt.isCompressedArrayTexture?M.compressedTexSubImage3D(Wt,ht,ut.x,ut.y,ut.z,It,Nt,kt,zt,ge.data):M.texSubImage3D(Wt,ht,ut.x,ut.y,ut.z,It,Nt,kt,zt,Kt,ge),M.pixelStorei(M.UNPACK_ROW_LENGTH,Xt),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,ye),M.pixelStorei(M.UNPACK_SKIP_PIXELS,en),M.pixelStorei(M.UNPACK_SKIP_ROWS,Re),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Hn),ht===0&&gt.generateMipmaps&&M.generateMipmap(Wt),k.unbindTexture()},this.initTexture=function($){$.isCubeTexture?B.setTextureCube($,0):$.isData3DTexture?B.setTexture3D($,0):$.isDataArrayTexture||$.isCompressedArrayTexture?B.setTexture2DArray($,0):B.setTexture2D($,0),k.unbindTexture()},this.resetState=function(){w=0,L=0,C=null,k.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===zl?"display-p3":"srgb",e.unpackColorSpace=se.workingColorSpace===Va?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Gb extends wd{}Gb.prototype.isWebGL1Renderer=!0;class Vb extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kl);class Wb{constructor(t,e){this.effectCanvas=t,this.originalCanvas=e,this.renderer=null,this.scene=null,this.camera=null,this.material=null,this.texture=null,this.mesh=null,this.params={horizontalChromatic:70,distortion:50,speed:60,size:60,blur:60},this.time=0,this.animationId=null,this.currentImage=null,this.compareMode=!1}init(){this.scene=new Vb,this.camera=new vd(-1,1,1,-1,0,1),this.renderer=new wd({canvas:this.effectCanvas,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.createMaterial();const t=new Cs(2,2);this.mesh=new Fn(t,this.material),this.scene.add(this.mesh),this.animate(),window.addEventListener("resize",()=>this.handleResize())}createMaterial(){this.material=new ci({uniforms:{uTexture:{value:null},uTime:{value:0},uHorizontalChromatic:{value:.7},uDistortion:{value:.5},uSpeed:{value:.6},uSize:{value:.6},uBlur:{value:.6},uResolution:{value:new Qt(1,1)},uTextureResolution:{value:new Qt(1,1)}},vertexShader:`
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
      `})}loadImage(t){this.currentImage=t,this.texture&&this.texture.dispose(),this.texture=new je(t),this.texture.needsUpdate=!0,this.material.uniforms.uTexture.value=this.texture,this.material.uniforms.uTextureResolution.value.set(t.width,t.height),this.updateCanvasSize(t.width,t.height),this.compareMode&&this.originalCanvas&&this.drawOriginalImage(t)}drawOriginalImage(t){if(!this.originalCanvas)return;const e=this.originalCanvas.getContext("2d");this.originalCanvas.width=t.width,this.originalCanvas.height=t.height,e.drawImage(t,0,0)}updateCanvasSize(t,e){const i=this.effectCanvas.parentElement;if(!i)return;const r=i.clientWidth-48,s=i.clientHeight-48,o=Math.min(r/t,s/e,1),a=Math.floor(t*o),l=Math.floor(e*o);this.effectCanvas.style.width=`${a}px`,this.effectCanvas.style.height=`${l}px`,this.renderer.setSize(t,e,!1),this.material.uniforms.uResolution.value.set(t,e),this.compareMode&&this.originalCanvas&&(this.originalCanvas.style.width=`${a}px`,this.originalCanvas.style.height=`${l}px`)}updateParams(t){this.params={...t},this.material.uniforms.uHorizontalChromatic.value=t.horizontalChromatic/100,this.material.uniforms.uDistortion.value=t.distortion/100,this.material.uniforms.uSpeed.value=t.speed/100,this.material.uniforms.uSize.value=t.size/100,this.material.uniforms.uBlur.value=t.blur/100}setCompareMode(t){this.compareMode=t,t&&this.currentImage&&this.originalCanvas&&(this.drawOriginalImage(this.currentImage),this.updateCanvasSize(this.currentImage.width,this.currentImage.height))}animate(){this.animationId=requestAnimationFrame(()=>this.animate()),this.time+=.016,this.material.uniforms.uTime.value=this.time,this.renderer.render(this.scene,this.camera)}handleResize(){this.currentImage&&this.updateCanvasSize(this.currentImage.width,this.currentImage.height)}dispose(){this.animationId&&cancelAnimationFrame(this.animationId),this.texture&&this.texture.dispose(),this.material&&this.material.dispose(),this.renderer&&this.renderer.dispose(),window.removeEventListener("resize",()=>this.handleResize())}}class pe{constructor(t){this.canvas=t,this.ctx=t.getContext("2d"),this.sourceImage=null,this.params={},this.animFrame=null,this.isAnimating=!1}loadImage(t){this.sourceImage=t,this.canvas.width=t.naturalWidth||t.width,this.canvas.height=t.naturalHeight||t.height,this.render()}updateParams(t){this.params={...this.params,...t},this.render()}render(){this.sourceImage&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.sourceImage,0,0,this.canvas.width,this.canvas.height),this.apply())}apply(){}destroy(){this.animFrame&&cancelAnimationFrame(this.animFrame)}getAvgColor(t,e,i,r,s,o,a){let l=0,u=0,c=0,f=0,d=0;const p=Math.max(0,Math.floor(e)),x=Math.max(0,Math.floor(i)),g=Math.min(o-1,Math.floor(e+r)),m=Math.min(a-1,Math.floor(i+s));for(let h=x;h<=m;h++)for(let y=p;y<=g;y++){const v=(h*o+y)*4;l+=t[v],u+=t[v+1],c+=t[v+2],f+=t[v+3],d++}return d===0?[0,0,0,255]:[l/d,u/d,c/d,f/d]}}class Xb extends pe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(2,Math.round(this.params.intensity/100*60)+2),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;t.clearRect(0,0,r,s);for(let c=0;c<s;c+=o)for(let f=0;f<r;f+=o){const[d,p,x,g]=this.getAvgColor(u,f,c,o-1,o-1,r,s);t.fillStyle=`rgba(${d|0},${p|0},${x|0},${g/255})`,t.fillRect(f,c,o,o)}}}class $b extends pe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(4,Math.round(this.params.intensity/100*80)+4),a=Math.round(this.params.intensity/100*3)+1;t.clearRect(0,0,r,s);const l=document.createElement("canvas"),u=Math.max(4,o);l.width=Math.max(1,Math.ceil(r/u)),l.height=Math.max(1,Math.ceil(s/u));const c=l.getContext("2d");c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high",c.drawImage(i,0,0,l.width,l.height),t.imageSmoothingEnabled=!0,t.imageSmoothingQuality="high",t.drawImage(l,0,0,r,s),t.filter=`blur(${a*2}px)`,t.globalAlpha=.3,t.drawImage(i,0,0,r,s),t.filter="none",t.globalAlpha=1}}class qb extends pe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(4,Math.round(this.params.intensity/100*56)+8),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;t.clearRect(0,0,r,s);for(let c=0;c<s;c+=o)for(let f=0;f<r;f+=o){const[d,p,x]=this.getAvgColor(u,f,c,o-1,o-1,r,s),g=d|0,m=p|0,h=x|0;t.fillStyle=`rgb(${g},${m},${h})`,t.fillRect(f,c,o,o),t.fillStyle="rgba(0,0,0,0.35)",t.fillRect(f+o-2,c,2,o),t.fillRect(f,c+o-2,o,2),t.fillStyle="rgba(255,255,255,0.2)",t.fillRect(f,c,o-2,2),t.fillRect(f,c,2,o-2);const y=f+o/2,v=c+o/2,S=o*.28,w=t.createRadialGradient(y-S*.3,v-S*.3,S*.1,y,v,S);w.addColorStop(0,"rgba(255,255,255,0.5)"),w.addColorStop(.5,`rgba(${g},${m},${h},0.9)`),w.addColorStop(1,"rgba(0,0,0,0.3)"),t.beginPath(),t.arc(y,v,S,0,Math.PI*2),t.fillStyle=w,t.fill()}}}class jb extends pe{constructor(t){super(t),this.params={intensity:50},this._cachedSeeds=null,this._cachedSize=-1}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(8,Math.round(this.params.intensity/100*60)+8),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;this._cachedSize!==o&&(this._cachedSeeds=this._genSeeds(r,s,o),this._cachedSize=o);const c=this._cachedSeeds,f=c.map(([d,p])=>{const[x,g,m]=this.getAvgColor(u,d-o/2,p-o/2,o,o,r,s);return[x|0,g|0,m|0]});t.clearRect(0,0,r,s),this._drawVoronoi(t,c,f,r,s,o)}_genSeeds(t,e,i){const r=[],s=Math.ceil(t/i)+1,o=Math.ceil(e/i)+1;for(let a=0;a<o;a++)for(let l=0;l<s;l++){const u=i*.7,c=l*i+(this._hash(l,a,0)-.5)*u,f=a*i+(this._hash(l,a,1)-.5)*u;r.push([c,f])}return r}_hash(t,e,i){let r=Math.sin(t*127.1+e*311.7+i*74.3)*43758.5453;return r-Math.floor(r)}_drawVoronoi(t,e,i,r,s,o){const a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d"),u=l.createImageData(r,s),c=u.data;for(let m=0;m<s;m++)for(let h=0;h<r;h++){let y=1/0,v=0;const S=Math.round(h/o),w=Math.round(m/o);for(let T=-2;T<=2;T++)for(let N=-2;N<=2;N++){const I=S+N,F=w+T;if(I<0||F<0||I>=Math.ceil(r/o)+1||F>=Math.ceil(s/o)+1)continue;const b=F*(Math.ceil(r/o)+1)+I;if(b<0||b>=e.length)continue;const[q,W]=e[b],K=(h-q)**2+(m-W)**2;K<y&&(y=K,v=b)}const[L,C,z]=i[v],G=(m*r+h)*4;c[G]=L,c[G+1]=C,c[G+2]=z,c[G+3]=255}l.putImageData(u,0,0),t.drawImage(a,0,0);const f=l.getImageData(0,0,r,s).data,d=document.createElement("canvas");d.width=r,d.height=s;const p=d.getContext("2d"),x=p.createImageData(r,s),g=x.data;for(let m=1;m<s-1;m++)for(let h=1;h<r-1;h++){const y=(m*r+h)*4,v=(m*r+h+1)*4,S=((m+1)*r+h)*4;(f[y]!==f[v]||f[y+1]!==f[v+1]||f[y]!==f[S]||f[y+1]!==f[S+1])&&(g[y]=255,g[y+1]=255,g[y+2]=255,g[y+3]=200)}p.putImageData(x,0,0),t.drawImage(d,0,0)}}class Yb extends pe{constructor(t){super(t),this.params={intensity:50},this._seeds=null,this._cachedSize=-1}_hash(t,e,i){let r=Math.sin(t*127.1+e*311.7+i*74.3)*43758.5453;return r-Math.floor(r)}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(6,Math.round(this.params.intensity/100*50)+6),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;if(this._cachedSize!==o){this._seeds=[];const c=Math.ceil(r/o)+1,f=Math.ceil(s/o)+1;for(let d=0;d<f;d++)for(let p=0;p<c;p++){const x=o*.65,g=p*o+(this._hash(p,d,0)-.5)*x,m=d*o+(this._hash(p,d,1)-.5)*x,h=o*(.35+this._hash(p,d,2)*.3);this._seeds.push({x:g,y:m,r:h})}this._cachedSize=o}t.fillStyle="#000",t.fillRect(0,0,r,s);for(const c of this._seeds){const[f,d,p]=this.getAvgColor(u,c.x-c.r,c.y-c.r,c.r*2,c.r*2,r,s),[x,g,m]=this._boostSat(f,d,p,1.5);t.beginPath(),t.arc(c.x,c.y,c.r,0,Math.PI*2),t.fillStyle=`rgb(${x|0},${g|0},${m|0})`,t.fill()}}_boostSat(t,e,i,r){const s=Math.max(t,e,i),o=Math.min(t,e,i),a=(s+o)/2;return[Math.min(255,Math.max(0,a+(t-a)*r)),Math.min(255,Math.max(0,a+(e-a)*r)),Math.min(255,Math.max(0,a+(i-a)*r))]}}class Zb extends pe{constructor(t){super(t),this.params={intensity:50},this._cachedSize=-1,this._triangles=null}_hash(t,e,i){let r=Math.sin(t*127.1+e*311.7+i*74.3)*43758.5453;return r-Math.floor(r)}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(8,Math.round(this.params.intensity/100*60)+10),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;this._cachedSize!==o&&(this._triangles=this._genTriangles(r,s,o),this._cachedSize=o),t.clearRect(0,0,r,s);for(const c of this._triangles){const f=(c[0]+c[2]+c[4])/3,d=(c[1]+c[3]+c[5])/3,[p,x,g]=this.getAvgColor(u,f-o/2,d-o/2,o,o,r,s),[m,h,y]=this._boostSat(p,x,g,1.8);t.beginPath(),t.moveTo(c[0],c[1]),t.lineTo(c[2],c[3]),t.lineTo(c[4],c[5]),t.closePath(),t.fillStyle=`rgb(${m|0},${h|0},${y|0})`,t.fill()}}_genTriangles(t,e,i){const r=[],s=Math.ceil(t/i)+1,o=Math.ceil(e/i)+1,a=[];for(let l=0;l<=o;l++){a.push([]);for(let u=0;u<=s;u++){const c=(this._hash(u,l,0)-.5)*i*.7,f=(this._hash(u,l,1)-.5)*i*.7;a[l].push([u*i+c,l*i+f])}}for(let l=0;l<o;l++)for(let u=0;u<s;u++){const[c,f]=a[l][u],[d,p]=a[l][u+1],[x,g]=a[l+1][u],[m,h]=a[l+1][u+1];r.push([c,f,d,p,x,g]),r.push([d,p,m,h,x,g])}return r}_boostSat(t,e,i,r){const s=Math.max(t,e,i),o=Math.min(t,e,i),a=(s+o)/2;return[Math.min(255,Math.max(0,a+(t-a)*r)),Math.min(255,Math.max(0,a+(e-a)*r)),Math.min(255,Math.max(0,a+(i-a)*r))]}}class Kb extends pe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(20,Math.round(this.params.intensity/100*120)+20),a=document.createElement("canvas");a.width=r,a.height=s,a.getContext("2d").drawImage(i,0,0,r,s),t.clearRect(0,0,r,s);for(let u=0;u<s;u+=o)for(let c=0;c<r;c+=o){const f=Math.min(o,r-c),d=Math.min(o,s-u);t.save(),t.beginPath(),t.rect(c,u,f,d),t.clip(),t.transform(1.08,.04,-.04,1.08,c-c*.08+f*.02,u-u*.08+d*.02),t.drawImage(a,0,0,r,s),t.setTransform(1,0,0,1,0,0);const p=t.createLinearGradient(c,u,c+f,u+d);p.addColorStop(0,"rgba(255,255,255,0.18)"),p.addColorStop(.4,"rgba(255,255,255,0.04)"),p.addColorStop(1,"rgba(0,0,0,0.12)"),t.fillStyle=p,t.fillRect(c,u,f,d),t.restore(),t.strokeStyle="rgba(0,0,0,0.6)",t.lineWidth=1,t.strokeRect(c+.5,u+.5,f-1,d-1)}}}class Jb extends pe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(16,Math.round(this.params.intensity/100*100)+16),a=o*.12,l=document.createElement("canvas");l.width=r,l.height=s;const u=l.getContext("2d");u.drawImage(i,0,0,r,s),u.getImageData(0,0,r,s).data,t.clearRect(0,0,r,s),t.filter="blur(2px)",t.drawImage(i,0,0,r,s),t.filter="none";for(let c=0;c<s;c+=o)for(let f=0;f<r;f+=o){const d=Math.min(o,r-f),p=Math.min(o,s-c),x=f+d/2,g=c+p/2;t.save(),t.beginPath(),this._roundRect(t,f+1,c+1,d-2,p-2,a),t.clip();const m=Math.sin(x/r*Math.PI*2)*o*.15,h=Math.cos(g/s*Math.PI*2)*o*.15;t.drawImage(l,m,h,r,s),t.fillStyle="rgba(255,255,255,0.06)",t.fillRect(f,c,d,p);const y=t.createLinearGradient(f,c,f,c+p*.4);y.addColorStop(0,"rgba(255,255,255,0.25)"),y.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=y,t.fillRect(f,c,d,p*.4),t.restore(),t.save(),t.beginPath(),this._roundRect(t,f+.5,c+.5,d-1,p-1,a),t.strokeStyle="rgba(255,255,255,0.25)",t.lineWidth=1,t.stroke(),t.restore()}}_roundRect(t,e,i,r,s,o){t.moveTo(e+o,i),t.lineTo(e+r-o,i),t.quadraticCurveTo(e+r,i,e+r,i+o),t.lineTo(e+r,i+s-o),t.quadraticCurveTo(e+r,i+s,e+r-o,i+s),t.lineTo(e+o,i+s),t.quadraticCurveTo(e,i+s,e,i+s-o),t.lineTo(e,i+o),t.quadraticCurveTo(e,i,e+o,i),t.closePath()}}class Qb extends pe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(6,Math.round(this.params.intensity/100*60)+6),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;t.clearRect(0,0,r,s);const c=o*2,f=Math.sqrt(3)*o,d=c*.75,p=f,x=Math.ceil(r/d)+1,g=Math.ceil(s/p)+1;for(let m=0;m<g;m++)for(let h=0;h<x;h++){const y=h%2===0?0:f/2,v=h*d,S=m*p+y,[w,L,C]=this.getAvgColor(u,v-o,S-o,o*2,o*2,r,s);t.beginPath();for(let z=0;z<6;z++){const G=Math.PI/3*z-Math.PI/6,T=v+o*Math.cos(G),N=S+o*Math.sin(G);z===0?t.moveTo(T,N):t.lineTo(T,N)}t.closePath(),t.fillStyle=`rgb(${w|0},${L|0},${C|0})`,t.fill(),t.strokeStyle="rgba(0,0,0,0.2)",t.lineWidth=.5,t.stroke()}}}class tS extends pe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(10,Math.round(this.params.intensity/100*70)+10),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;t.clearRect(0,0,r,s),t.filter="blur(4px) brightness(0.5)",t.drawImage(i,0,0,r,s),t.filter="none";const c=Math.ceil(r/o)+1,f=Math.ceil(s/o)+1;for(let d=0;d<f;d++)for(let p=0;p<c;p++){const x=p*o+o/2,g=d*o+o/2,[m,h,y]=this.getAvgColor(u,x-o/2,g-o/2,o,o,r,s);t.save(),t.translate(x,g),t.beginPath();for(let S=0;S<10;S++){const w=Math.PI/5*S-Math.PI/2,L=S%2===0?o*.48:o*.22,C=Math.cos(w)*L,z=Math.sin(w)*L;S===0?t.moveTo(C,z):t.lineTo(C,z)}t.closePath();const v=t.createRadialGradient(-o*.15,-o*.15,0,0,0,o*.5);v.addColorStop(0,`rgba(${Math.min(255,(m|0)+60)},${Math.min(255,(h|0)+60)},${Math.min(255,(y|0)+60)},1)`),v.addColorStop(.5,`rgba(${m|0},${h|0},${y|0},0.9)`),v.addColorStop(1,`rgba(${Math.max(0,(m|0)-40)},${Math.max(0,(h|0)-40)},${Math.max(0,(y|0)-40)},0.8)`),t.fillStyle=v,t.fill(),t.strokeStyle="rgba(0,0,0,0.4)",t.lineWidth=.8,t.stroke(),t.restore()}}}class eS extends pe{constructor(t){super(t),this.params={mode:0,intensity:30,center:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,{mode:o,intensity:a,center:l}=this.params,u=l/100*r,c=l/100*s,f=Math.max(1,Math.round(a/100*24)),d=a/100*.08,p=a/100*.12;t.clearRect(0,0,r,s),t.globalAlpha=1/f;for(let x=0;x<f;x++){const g=x/(f-1||1)-.5;if(t.save(),t.translate(u,c),o===0)t.rotate(g*d*2);else{const m=1+g*p*2;t.scale(m,m)}t.translate(-u,-c),t.drawImage(i,0,0,r,s),t.restore()}t.globalAlpha=1}}class nS extends pe{constructor(t){super(t),this.params={length:30,direction:0}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,{length:o,direction:a}=this.params,l=Math.max(1,Math.round(o/100*30)),u=a*Math.PI/180,c=Math.cos(u),f=Math.sin(u),d=o/100*Math.max(r,s)*.15;t.clearRect(0,0,r,s),t.globalAlpha=1/l;for(let p=0;p<l;p++){const x=(p/(l-1||1)-.5)*2,g=c*x*d,m=f*x*d;t.drawImage(i,g,m,r,s)}t.globalAlpha=1}}class iS extends pe{constructor(t){super(t),this.params={strength:2.9}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,r=i.getImageData(0,0,t,e),s=r.data,o=new Uint8ClampedArray(s.length),a=Math.max(.1,this.params.strength/10*8+.5);for(let l=0;l<e;l++)for(let u=0;u<t;u++){const c=(l*t+u)*4,f=u>0?(l*t+(u-1))*4:c,d=l>0?((l-1)*t+u)*4:c,p=(s[c]-s[f]+s[c]-s[d])*a*.5+128,x=(s[c+1]-s[f+1]+s[c+1]-s[d+1])*a*.5+128,g=(s[c+2]-s[f+2]+s[c+2]-s[d+2])*a*.5+128,m=.299*p+.587*x+.114*g;o[c]=m,o[c+1]=m,o[c+2]=m,o[c+3]=255}for(let l=0;l<o.length;l+=4){const u=o[l];o[l]=Math.min(255,u*1.05),o[l+1]=Math.min(255,u*.97),o[l+2]=Math.min(255,u*.88)}r.data.set(o),i.putImageData(r,0,0)}updateParams(t){this.params={...this.params,strength:t.strength??this.params.strength},this.render()}}class rS extends pe{constructor(t){super(t),this.params={colorModel:2,pattern:2,period:12.7,angle:75,antiAlias:16,turbulence:0,blocksize:-1,angleBoost:0}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=Math.max(2,this.params.period),u=(this.params.angle+this.params.angleBoost*10)*Math.PI/180,c=this.params.turbulence*l*.3,f=Math.pow(2,this.params.blocksize),d=Math.cos(u),p=Math.sin(u),x=(m,h)=>{const y=Math.min(t-1,Math.max(0,Math.round(m))),S=(Math.min(e-1,Math.max(0,Math.round(h)))*t+y)*4;return[s[S],s[S+1],s[S+2],s[S+3]]},g=this.params.pattern;for(let m=0;m<e;m++)for(let h=0;h<t;h++){let y=0,v=0;if(c>0){const ct=Math.sin((h+m*.7)*.1)*c;y=ct,v=ct*.6}const S=(h+y)*d-(m+v)*p,w=(h+y)*p+(m+v)*d,L=Math.floor(S/l)*l+l*.5,C=Math.floor(w/l)*l+l*.5,z=L*d+C*p,G=-L*p+C*d,[T,N,I]=x(z,G),F=(.299*T+.587*N+.114*I)/255,b=(S%l+l)%l/l,q=(w%l+l)%l/l,W=b-.5,K=q-.5;let at=!1;if(g===1)at=Math.abs(W)<F*.5*f;else if(g===0){const ct=F*.5*f;at=W*W+K*K<ct*ct}else{const ct=F*.5*f;at=Math.abs(W)<ct&&Math.abs(K)<ct}const nt=(m*t+h)*4;if(this.params.colorModel===0){const ct=at?0:255;a[nt]=a[nt+1]=a[nt+2]=ct,a[nt+3]=255}else if(this.params.colorModel===1){const ct=at?1:0;a[nt]=Math.round(T*ct),a[nt+1]=Math.round(N*ct),a[nt+2]=Math.round(I*ct),a[nt+3]=255}else{const ct=at?20:240;a[nt]=a[nt+1]=a[nt+2]=ct,a[nt+3]=255}}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class sS extends pe{constructor(t){super(t),this.params={render:2,detailRadius:10.6,detailThreshold:10,shadingSteps:10,shadingSmoothness:10,edgeThreshold:1,edgeWidth:2.5,edgeOpacity:.26}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=Math.max(2,Math.round(this.params.shadingSteps)),a=this.params.shadingSmoothness*.5,l=Math.max(1,Math.round(this.params.edgeWidth)),u=this.params.edgeThreshold*30,c=this.params.edgeOpacity,f=this.params.render,d=new Uint8ClampedArray(s.length);for(let y=0;y<s.length;y+=4){for(let v=0;v<3;v++){const S=s[y+v],w=Math.round(S/255*(o-1))/(o-1)*255;d[y+v]=Math.min(255,w+(S-w)*a/(a+5))}d[y+3]=255}const p=new Float32Array(t*e);for(let y=0;y<t*e;y++){const v=y*4;p[y]=.299*s[v]+.587*s[v+1]+.114*s[v+2]}const x=new Uint8ClampedArray(t*e);for(let y=1;y<e-1;y++)for(let v=1;v<t-1;v++){const S=y*t+v,w=-p[S-t-1]+p[S-t+1]-2*p[S-1]+2*p[S+1]-p[S+t-1]+p[S+t+1],L=-p[S-t-1]-2*p[S-t]-p[S-t+1]+p[S+t-1]+2*p[S+t]+p[S+t+1];x[S]=Math.sqrt(w*w+L*L)>u?255:0}const g=new Uint8ClampedArray(x.length);if(l>0)for(let y=0;y<e;y++)for(let v=0;v<t;v++){let S=!1;for(let w=-l;w<=l&&!S;w++)for(let L=-l;L<=l&&!S;L++){const C=v+L,z=y+w;C>=0&&C<t&&z>=0&&z<e&&x[z*t+C]&&(S=!0)}g[y*t+v]=S?255:0}const m=i.createImageData(t,e),h=m.data;for(let y=0;y<t*e;y++){const v=y*4,S=g[y]>0;if(f===0)h[v]=d[v],h[v+1]=d[v+1],h[v+2]=d[v+2],h[v+3]=255;else if(f===1){const w=S?0:255;h[v]=h[v+1]=h[v+2]=w,h[v+3]=255}else S?(h[v]=Math.round(d[v]*(1-c)),h[v+1]=Math.round(d[v+1]*(1-c)),h[v+2]=Math.round(d[v+2]*(1-c))):(h[v]=d[v],h[v+1]=d[v+1],h[v+2]=d[v+2]),h[v+3]=255}i.putImageData(m,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class aS extends pe{constructor(t){super(t),this.params={lightColor:50,lightRange:73,lightIntensity:50}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.lightIntensity/100,u=this.params.lightRange/100,c=this.params.lightColor/100,f=t*.5,d=e*.5,p=Math.max(t,e)*u*.8,x=200+c*55,g=180+(1-Math.abs(c-.5)*2)*40,m=255-c*80;for(let h=0;h<e;h++)for(let y=0;y<t;y++){const v=(h*t+y)*4,S=Math.sqrt((y-f)**2+(h-d)**2),w=Math.exp(-(S*S)/(2*p*p))*l*1.2,L=s[v],C=s[v+1],z=s[v+2],G=Math.min(1,w*x/255),T=Math.min(1,w*g/255),N=Math.min(1,w*m/255),I=L/255,F=C/255,b=z/255,q=(2*I*G+I*I*(1-2*G))*255,W=(2*F*T+F*F*(1-2*T))*255,K=(2*b*N+b*b*(1-2*N))*255;a[v]=Math.min(255,Math.max(0,L+(q-L)*w*2)),a[v+1]=Math.min(255,Math.max(0,C+(W-C)*w*2)),a[v+2]=Math.min(255,Math.max(0,z+(K-z)*w*2)),a[v+3]=255}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class oS extends pe{constructor(t){super(t),this.params={comicType:0,color1:300,color2:300,gridNum:.14}}hsvToRgb(t,e,i){t=(t%360+360)%360;const r=i*e,s=r*(1-Math.abs(t/60%2-1)),o=i-r;let a=0,l=0,u=0;return t<60?(a=r,l=s,u=0):t<120?(a=s,l=r,u=0):t<180?(a=0,l=r,u=s):t<240?(a=0,l=s,u=r):t<300?(a=s,l=0,u=r):(a=r,l=0,u=s),[(a+o)*255,(l+o)*255,(u+o)*255]}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=Math.max(2,Math.round(this.params.gridNum*30+3)),u=this.params.comicType===1,[c,f,d]=this.hsvToRgb(this.params.color1,.8,.9),[p,x,g]=this.hsvToRgb(this.params.color2,.6,.7);for(let m=0;m<e;m++)for(let h=0;h<t;h++){const y=(m*t+h)*4,v=(.299*s[y]+.587*s[y+1]+.114*s[y+2])/255,S=h%l/l,w=m%l/l,L=S-.5,C=w-.5,z=v*.55,G=L*L+C*C<z*z,N=(h+m)%l/l<(1-v)*.6&&v<.7,I=h%l===0||m%l===0;let F,b,q;if(v>.85?F=b=q=255:v>.5?G?F=b=q=30:F=b=q=240:v>.2?N?F=b=q=20:F=b=q=220:F=b=q=15,I&&this.params.gridNum>.02&&(F=b=q=Math.min(F,80)),u){const W=v;F=Math.round(F*(c/255*W+p/255*(1-W))*1.2),b=Math.round(b*(f/255*W+x/255*(1-W))*1.2),q=Math.round(q*(d/255*W+g/255*(1-W))*1.2)}a[y]=Math.min(255,Math.max(0,F)),a[y+1]=Math.min(255,Math.max(0,b)),a[y+2]=Math.min(255,Math.max(0,q)),a[y+3]=255}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class lS extends pe{constructor(t){super(t),this.params={centerX:.5,centerY:.39,size:76,convergence:20}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.centerX*t,u=this.params.centerY*e,c=Math.max(1,this.params.size),f=this.params.convergence/100,d=(p,x)=>{const g=Math.min(t-1,Math.max(0,Math.round(p))),h=(Math.min(e-1,Math.max(0,Math.round(x)))*t+g)*4;return[s[h],s[h+1],s[h+2],s[h+3]]};for(let p=0;p<e;p++)for(let x=0;x<t;x++){const g=x-l,m=p-u,h=Math.sqrt(g*g+m*m),y=c*Math.max(t,e)/100;if(h<y&&h>0){const v=h/y,w=(f>0?Math.pow(v,1-f*.8):Math.pow(v,1+Math.abs(f)*1.5))*y/h,L=l+g*w,C=u+m*w,[z,G,T,N]=d(L,C),I=(p*t+x)*4;a[I]=z,a[I+1]=G,a[I+2]=T,a[I+3]=N}else{const v=(p*t+x)*4;a[v]=s[v],a[v+1]=s[v+1],a[v+2]=s[v+2],a[v+3]=s[v+3]}}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class cS extends pe{constructor(t){super(t),this.params={radius:100,waveSpeed:4.9,waveWidth:55.1,waveHeight:1,wavePhase:0}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=t*.5,u=e*.5,c=this.params.radius/100*Math.max(t,e),f=Math.max(1,this.params.waveWidth)/100*c,d=this.params.waveHeight*Math.min(t,e)*.02,p=this.params.wavePhase*Math.PI/180,x=(g,m)=>{const h=Math.min(t-1,Math.max(0,Math.round(g))),v=(Math.min(e-1,Math.max(0,Math.round(m)))*t+h)*4;return[s[v],s[v+1],s[v+2],s[v+3]]};for(let g=0;g<e;g++)for(let m=0;m<t;m++){const h=m-l,y=g-u,v=Math.sqrt(h*h+y*y);if(v<c&&v>0){const S=v/f*Math.PI*2-p,w=Math.sin(S)*d*(1-v/c),L=h/v,C=y/v,z=m+L*w,G=g+C*w,[T,N,I,F]=x(z,G),b=(g*t+m)*4;a[b]=T,a[b+1]=N,a[b+2]=I,a[b+3]=F}else{const S=(g*t+m)*4;a[S]=s[S],a[S+1]=s[S+1],a[S+2]=s[S+2],a[S+3]=s[S+3]}}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class uS extends pe{constructor(t){super(t),this.params={waveType:0,waveHeight:10,waveWidth:40,direction:90,waveSpeed:1,phase:0}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.direction*Math.PI/180,u=this.params.waveHeight*Math.min(t,e)*.01,c=Math.max(1,this.params.waveWidth)*Math.min(t,e)*.01,f=this.params.phase*Math.PI/180,d=Math.round(this.params.waveType),p=Math.cos(l),x=Math.sin(l),g=h=>{const y=(h%(Math.PI*2)+Math.PI*2)%(Math.PI*2);return d===1?y<Math.PI?1:-1:d===2?y<Math.PI?y/Math.PI*2-1:3-y/Math.PI*2:Math.sin(h)},m=(h,y)=>{const v=Math.min(t-1,Math.max(0,Math.round(h))),w=(Math.min(e-1,Math.max(0,Math.round(y)))*t+v)*4;return[s[w],s[w+1],s[w+2],s[w+3]]};for(let h=0;h<e;h++)for(let y=0;y<t;y++){const S=(y*p+h*x)/c*Math.PI*2-f,w=g(S)*u,L=y+w*x,C=h-w*p,[z,G,T,N]=m(L,C),I=(h*t+y)*4;a[I]=z,a[I+1]=G,a[I+2]=T,a[I+3]=N}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class fS extends pe{constructor(t){super(t),this.params={centerX:.5,centerY:.5,radius:80,angle:120,smoothness:60}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.centerX*t,u=this.params.centerY*e,c=this.params.radius/100*Math.max(t,e)*.5,f=this.params.angle*Math.PI/180,d=Math.max(1,this.params.smoothness)/100,p=(x,g)=>{const m=Math.floor(x),h=Math.floor(g),y=Math.min(t-1,m+1),v=Math.min(e-1,h+1),S=x-m,w=g-h,L=Math.max(0,m),C=Math.max(0,y),z=Math.max(0,h),G=Math.max(0,v),T=(z*t+L)*4,N=(z*t+C)*4,I=(G*t+L)*4,F=(G*t+C)*4;return[s[T]*(1-S)*(1-w)+s[N]*S*(1-w)+s[I]*(1-S)*w+s[F]*S*w,s[T+1]*(1-S)*(1-w)+s[N+1]*S*(1-w)+s[I+1]*(1-S)*w+s[F+1]*S*w,s[T+2]*(1-S)*(1-w)+s[N+2]*S*(1-w)+s[I+2]*(1-S)*w+s[F+2]*S*w,255]};for(let x=0;x<e;x++)for(let g=0;g<t;g++){const m=g-l,h=x-u,y=Math.sqrt(m*m+h*h);if(y<c){const v=1-Math.pow(y/c,d*2+.1),S=f*v,w=Math.cos(S),L=Math.sin(S),C=l+m*w-h*L,z=u+m*L+h*w,[G,T,N,I]=p(C,z),F=(x*t+g)*4;a[F]=G,a[F+1]=T,a[F+2]=N,a[F+3]=I}else{const v=(x*t+g)*4;a[v]=s[v],a[v+1]=s[v+1],a[v+2]=s[v+2],a[v+3]=s[v+3]}}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class hS extends pe{constructor(t){super(t),this.params={glowCenterX:.5,glowCenterY:.5,glowIntensity:50,glowDensity:60}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.glowCenterX*t,u=this.params.glowCenterY*e,c=this.params.glowIntensity/100,f=this.params.glowDensity/100,d=new Float32Array(t*e);for(let v=0;v<t*e;v++)d[v]=(.299*s[v*4]+.587*s[v*4+1]+.114*s[v*4+2])/255;const p=new Float32Array(t*e);let x=0;for(let v=1;v<e-1;v++)for(let S=1;S<t-1;S++){const w=v*t+S,L=-d[w-t-1]+d[w-t+1]-2*d[w-1]+2*d[w+1]-d[w+t-1]+d[w+t+1],C=-d[w-t-1]-2*d[w-t]-d[w-t+1]+d[w+t-1]+2*d[w+t]+d[w+t+1];p[w]=Math.sqrt(L*L+C*C),p[w]>x&&(x=p[w])}const g=Math.round(f*12+2),m=new Float32Array(t*e),h=new Float32Array(t*e);for(let v=0;v<e;v++)for(let S=0;S<t;S++){let w=0,L=0;for(let C=-g;C<=g;C++){const z=Math.min(t-1,Math.max(0,S+C));w+=p[v*t+z],L++}h[v*t+S]=w/L}for(let v=0;v<e;v++)for(let S=0;S<t;S++){let w=0,L=0;for(let C=-g;C<=g;C++){const z=Math.min(e-1,Math.max(0,v+C));w+=h[z*t+S],L++}m[v*t+S]=w/L}const y=Math.sqrt(l*l+u*u)*1.5;for(let v=0;v<e;v++)for(let S=0;S<t;S++){const w=(v*t+S)*4,L=v*t+S,C=x>0?m[L]/x:0,z=S-l,G=v-u,T=1-Math.sqrt(z*z+G*G)/y,N=C*c*Math.max(0,T)*3;a[w]=Math.min(255,s[w]+N*255),a[w+1]=Math.min(255,s[w+1]+N*255),a[w+2]=Math.min(255,s[w+2]+N*255),a[w+3]=255}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class dS extends pe{constructor(t){super(t),this.params={shape:0,centerX:.5,centerY:.5,magnification:108,size:154,feather:71}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=new Uint8ClampedArray(s),a=this.params.centerX*t,l=this.params.centerY*e,u=this.params.size/100*Math.min(t,e)*.5,c=this.params.magnification/100,f=this.params.feather/100,d=Math.round(this.params.shape)===0,p=(g,m)=>{const h=Math.floor(g),y=Math.floor(m),v=Math.min(t-1,h+1),S=Math.min(e-1,y+1),w=g-h,L=m-y,C=Math.max(0,h),z=Math.max(0,y),G=Math.min(t-1,v),T=Math.min(e-1,S),N=(z*t+C)*4,I=(z*t+G)*4,F=(T*t+C)*4,b=(T*t+G)*4;return[s[N]*(1-w)*(1-L)+s[I]*w*(1-L)+s[F]*(1-w)*L+s[b]*w*L,s[N+1]*(1-w)*(1-L)+s[I+1]*w*(1-L)+s[F+1]*(1-w)*L+s[b+1]*w*L,s[N+2]*(1-w)*(1-L)+s[I+2]*w*(1-L)+s[F+2]*(1-w)*L+s[b+2]*w*L,255]};for(let g=0;g<e;g++)for(let m=0;m<t;m++){const h=m-a,y=g-l;let v=0;if(d?v=Math.sqrt(h*h+y*y)/u:v=Math.max(Math.abs(h),Math.abs(y))/u,v>1)continue;const S=1-f,w=v<S?1:1-(v-S)/(f+.001),L=1/c,C=a+h*L,z=l+y*L,[G,T,N]=p(C,z),I=(g*t+m)*4,F=o[I],b=o[I+1],q=o[I+2];o[I]=Math.round(G*w+F*(1-w)),o[I+1]=Math.round(T*w+b*(1-w)),o[I+2]=Math.round(N*w+q*(1-w)),o[I+3]=255}const x=i.createImageData(t,e);x.data.set(o),i.putImageData(x,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class pS extends pe{constructor(t){super(t),this.params={threshold:.2,strength:1.82,length:1,centerX:.5,centerY:.5}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.centerX*t,u=this.params.centerY*e,c=this.params.threshold,f=this.params.strength,d=this.params.length,p=new Float32Array(t*e);for(let y=0;y<t*e;y++){const v=(.299*s[y*4]+.587*s[y*4+1]+.114*s[y*4+2])/255;p[y]=v>c?(v-c)/(1-c):0}const x=Math.round(d*60+20),g=.97,m=new Float32Array(t*e);for(let y=0;y<e;y++)for(let v=0;v<t;v++){let S=0,w=v,L=y;const C=(l-v)/x,z=(u-y)/x;let G=1;for(let T=0;T<x;T++){const N=Math.min(t-1,Math.max(0,Math.round(w))),I=Math.min(e-1,Math.max(0,Math.round(L)));S+=p[I*t+N]*G,G*=g,w+=C,L+=z}m[y*t+v]=S/x}let h=0;for(let y=0;y<m.length;y++)m[y]>h&&(h=m[y]);if(h>0)for(let y=0;y<m.length;y++)m[y]/=h;for(let y=0;y<t*e;y++){const v=y*4,S=m[y]*f;a[v]=Math.min(255,s[v]+S*255),a[v+1]=Math.min(255,s[v+1]+S*245),a[v+2]=Math.min(255,s[v+2]+S*220),a[v+3]=255}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class mS extends pe{constructor(t){super(t),this.params={threshold:60,glowRadius:40,glowStrength:60,glowColor:0}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.threshold/100,u=Math.round(this.params.glowRadius/100*Math.min(t,e)*.08+2),c=this.params.glowStrength/100,f=Math.round(this.params.glowColor),d=f===1?1:f===2?.7:1,p=f===1?.9:f===2?.85:1,x=f===1?.6:1,g=new Float32Array(t*e*3);for(let v=0;v<t*e;v++){const S=s[v*4]/255,w=s[v*4+1]/255,L=s[v*4+2]/255,C=.299*S+.587*w+.114*L,z=C>l?(C-l)/(1-l+.001):0;g[v*3]=S*z,g[v*3+1]=w*z,g[v*3+2]=L*z}const m=new Float32Array(t*e*3),h=new Float32Array(t*e*3),y=g.slice();for(let v=0;v<e;v++)for(let S=0;S<t;S++){let w=0,L=0,C=0,z=0;for(let T=-u;T<=u;T++){const N=Math.min(t-1,Math.max(0,S+T)),I=(v*t+N)*3;w+=y[I],L+=y[I+1],C+=y[I+2],z++}const G=(v*t+S)*3;h[G]=w/z,h[G+1]=L/z,h[G+2]=C/z}for(let v=0;v<e;v++)for(let S=0;S<t;S++){let w=0,L=0,C=0,z=0;for(let T=-u;T<=u;T++){const I=(Math.min(e-1,Math.max(0,v+T))*t+S)*3;w+=h[I],L+=h[I+1],C+=h[I+2],z++}const G=(v*t+S)*3;m[G]=w/z,m[G+1]=L/z,m[G+2]=C/z}for(let v=0;v<t*e;v++){const S=v*4,w=m[v*3]*d*c,L=m[v*3+1]*p*c,C=m[v*3+2]*x*c,z=s[S]/255,G=s[S+1]/255,T=s[S+2]/255;a[S]=Math.min(255,Math.round((1-(1-z)*(1-w))*255)),a[S+1]=Math.min(255,Math.round((1-(1-G)*(1-L))*255)),a[S+2]=Math.min(255,Math.round((1-(1-T)*(1-C))*255)),a[S+3]=255}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}const gS={class:"plugin-preview"},_S={class:"app-body"},vS={__name:"PluginPreview",setup(n){const t=$t("wave-blur"),e=$t(!1),i=$t(!1),r=$t(!1),s=$t(!0),o=$t(null),a=$t(0),l=$t(0);let u=null,c=null;const f={"wave-blur":{name:"WaveBlurring",nameZh:"波形模糊",EffectClass:null,defaults:{horizontalChromatic:70,distortion:50,speed:60,size:60,blur:60},params:[{key:"horizontalChromatic",label:"AdjustHorizontalChromatic",desc:"水平色差强度",min:0,max:100},{key:"distortion",label:"AdjustDistortion",desc:"扭曲程度",min:0,max:100},{key:"speed",label:"AdjustSpeed",desc:"动画速度",min:0,max:100},{key:"size",label:"AdjustSize",desc:"波形尺寸",min:0,max:100},{key:"blur",label:"AdjustBlur",desc:"模糊强度",min:0,max:100}]},"directional-blur":{name:"Directional Blur",nameZh:"定向模糊",EffectClass:nS,defaults:{length:30,direction:0},params:[{key:"length",label:"Blur Length",desc:"模糊长度",min:0,max:100},{key:"direction",label:"Blur Direction",desc:"模糊方向（角度，0=水平）",min:0,max:360,step:1}]},"radial-blur":{name:"Radial Blur",nameZh:"径向模糊",EffectClass:eS,defaults:{mode:0,intensity:30,center:50},params:[{key:"mode",label:"Mode",desc:"0 = 旋转模糊  /  1 = 缩放模糊",min:0,max:1,step:1},{key:"intensity",label:"Intensity",desc:"模糊强度",min:0,max:100},{key:"center",label:"Center",desc:"中心位置 (0=左上  100=右下)",min:0,max:100}]},"basic-mosaic":{name:"Basic Mosaic",nameZh:"基础马赛克",EffectClass:Xb,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"马赛克块大小",min:1,max:100}]},"blur-mosaic-fx":{name:"Blur Mosaic",nameZh:"模糊马赛克",EffectClass:$b,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"模糊程度",min:1,max:100}]},"brick-mosaic":{name:"Brick Mosaic",nameZh:"砖块马赛克",EffectClass:qb,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"砖块大小",min:1,max:100}]},"colorful-mosaic-1":{name:"Colorful MosaicI",nameZh:"彩色马赛克 I",EffectClass:jb,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"晶格大小",min:1,max:100}]},"colorful-mosaic-2":{name:"Colorful MosaicII",nameZh:"彩色马赛克 II",EffectClass:Yb,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"气泡大小",min:1,max:100}]},"colorful-mosaic-3":{name:"Colorful MosaicIII",nameZh:"彩色马赛克 III",EffectClass:Zb,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"三角片大小",min:1,max:100}]},"glass-mosaic-1":{name:"Glass MosaicI",nameZh:"玻璃马赛克 I",EffectClass:Kb,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"玻璃格大小",min:1,max:100}]},"glass-mosaic-2":{name:"Glass MosaicII",nameZh:"玻璃马赛克 II",EffectClass:Jb,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"磨砂格大小",min:1,max:100}]},"hexagon-mosaic":{name:"Hexagon Mosaic",nameZh:"六边形马赛克",EffectClass:Qb,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"六边形大小",min:1,max:100}]},"star-mosaic":{name:"Star Mosaic",nameZh:"星形马赛克",EffectClass:tS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"星形大小",min:1,max:100}]},engrave:{name:"Engrave",nameZh:"雕刻",EffectClass:iS,defaults:{strength:2.9},params:[{key:"strength",label:"Strength",desc:"雕刻强度",min:0,max:10,step:.1}]},newsprint:{name:"Newsprint",nameZh:"报纸印刷",EffectClass:rS,defaults:{colorModel:2,pattern:2,period:12.7,angle:75,antiAlias:16,turbulence:0,blocksize:-1,angleBoost:0},params:[{key:"colorModel",label:"ColorModel",desc:"颜色模式 (0=黑白 1=彩色 2=灰度半调)",min:0,max:2,step:1},{key:"pattern",label:"Pattern",desc:"图案类型 (0=圆点 1=线条 2=方块)",min:0,max:2,step:1},{key:"period",label:"Period",desc:"网格周期大小",min:1,max:30,step:.1},{key:"angle",label:"Angle",desc:"网格旋转角度",min:0,max:180,step:1},{key:"turbulence",label:"Turbulence",desc:"扰动变形",min:0,max:5,step:.1},{key:"blocksize",label:"Blocksize",desc:"图案缩放 (-2~2)",min:-2,max:2,step:.1},{key:"angleBoost",label:"AngleBoost",desc:"额外角度叠加",min:0,max:5,step:.1}]},cartoon:{name:"Cartoon",nameZh:"卡通",EffectClass:sS,defaults:{render:2,detailRadius:10.6,detailThreshold:10,shadingSteps:10,shadingSmoothness:10,edgeThreshold:1,edgeWidth:2.5,edgeOpacity:.26},params:[{key:"render",label:"Render",desc:"渲染模式 (0=仅填色 1=仅边缘 2=填色+边缘)",min:0,max:2,step:1},{key:"detailRadius",label:"DetailRadius",desc:"细节平滑半径",min:1,max:30,step:.1},{key:"detailThreshold",label:"DetailThreshold",desc:"细节阈值",min:0,max:20,step:.1},{key:"shadingSteps",label:"ShadingSteps",desc:"色阶数量",min:2,max:16,step:1},{key:"shadingSmoothness",label:"ShadingSmoothness",desc:"色阶过渡平滑",min:0,max:20,step:.1},{key:"edgeThreshold",label:"EdgeThreshold",desc:"边缘检测阈值",min:0,max:5,step:.1},{key:"edgeWidth",label:"EdgeWidth",desc:"边缘线宽度",min:0,max:8,step:.1},{key:"edgeOpacity",label:"EdgeOpacity",desc:"边缘线透明度",min:0,max:1,step:.01}]},"film-soft-light":{name:"FilmSoftLight",nameZh:"胶片柔光",EffectClass:aS,defaults:{lightColor:50,lightRange:73,lightIntensity:50},params:[{key:"lightColor",label:"LightColor",desc:"光色偏移 (0=冷蓝 100=暖橙)",min:0,max:100},{key:"lightRange",label:"LightRange",desc:"光晕扩散范围",min:0,max:100},{key:"lightIntensity",label:"LightIntensity",desc:"光晕强度",min:0,max:100}]},comic:{name:"Comic",nameZh:"漫画",EffectClass:oS,defaults:{comicType:0,color1:300,color2:300,gridNum:.14},params:[{key:"comicType",label:"ComicType",desc:"漫画类型 (0=黑白 1=彩色)",min:0,max:1,step:1},{key:"color1",label:"Color1",desc:"高光色相 (0-360°)",min:0,max:360,step:1},{key:"color2",label:"Color2",desc:"阴影色相 (0-360°)",min:0,max:360,step:1},{key:"gridNum",label:"GridNum",desc:"网格密度",min:0,max:1,step:.01}]},"cc-lens":{name:"CCLens",nameZh:"鱼眼",EffectClass:lS,defaults:{centerX:.5,centerY:.39,size:76,convergence:20},params:[{key:"centerX",label:"CenterX",desc:"镜头中心 X",min:0,max:1,step:.01},{key:"centerY",label:"CenterY",desc:"镜头中心 Y",min:0,max:1,step:.01},{key:"size",label:"Size",desc:"镜头大小",min:0,max:200},{key:"convergence",label:"Convergence",desc:"汇聚 (+凸起 / -凹陷)",min:-100,max:100}]},ripple:{name:"Ripple",nameZh:"波纹",EffectClass:cS,defaults:{radius:100,waveSpeed:4.9,waveWidth:55.1,waveHeight:1,wavePhase:0},params:[{key:"radius",label:"半径",desc:"波纹影响半径",min:0,max:200},{key:"waveWidth",label:"波形宽度",desc:"相邻波峰间距",min:1,max:100,step:.1},{key:"waveHeight",label:"波形高度",desc:"波纹位移幅度",min:0,max:5,step:.1},{key:"wavePhase",label:"波纹相",desc:"波纹起始相位 (°)",min:0,max:360,step:1}]},"wave-warp":{name:"WaveWarp",nameZh:"波形变形",EffectClass:uS,defaults:{waveType:0,waveHeight:10,waveWidth:40,direction:90,waveSpeed:1,phase:0},params:[{key:"waveType",label:"波浪类型",desc:"0=正弦 1=方波 2=三角",min:0,max:2,step:1},{key:"waveHeight",label:"波形高度",desc:"位移幅度",min:0,max:100,step:.5},{key:"waveWidth",label:"波形宽度",desc:"波长（像素比）",min:1,max:200,step:1},{key:"direction",label:"方向",desc:"波形传播方向 (°)",min:0,max:360,step:1},{key:"phase",label:"相位",desc:"波形起始相位 (°)",min:0,max:360,step:1}]},"twirl-distort":{name:"TwirlDistort",nameZh:"旋转扭曲",EffectClass:fS,defaults:{centerX:.5,centerY:.5,radius:80,angle:120,smoothness:60},params:[{key:"centerX",label:"CenterX",desc:"旋转中心 X",min:0,max:1,step:.01},{key:"centerY",label:"CenterY",desc:"旋转中心 Y",min:0,max:1,step:.01},{key:"radius",label:"Radius",desc:"影响半径",min:0,max:200},{key:"angle",label:"Angle",desc:"扭曲角度 (°)",min:-360,max:360,step:1},{key:"smoothness",label:"Smoothness",desc:"边缘过渡平滑度",min:0,max:100}]},"edge-glow":{name:"EdgeGlow",nameZh:"边缘辉光",EffectClass:hS,defaults:{glowCenterX:.5,glowCenterY:.5,glowIntensity:50,glowDensity:60},params:[{key:"glowCenterX",label:"GlowCenterX",desc:"光源中心 X",min:0,max:1,step:.01},{key:"glowCenterY",label:"GlowCenterY",desc:"光源中心 Y",min:0,max:1,step:.01},{key:"glowIntensity",label:"Intensity",desc:"辉光亮度",min:0,max:100},{key:"glowDensity",label:"Density",desc:"辉光扩散密度",min:0,max:100}]},enlargement:{name:"Enlargement",nameZh:"局部放大",EffectClass:dS,defaults:{shape:0,centerX:.5,centerY:.5,magnification:108,size:154,feather:71},params:[{key:"shape",label:"Shape",desc:"形状 (0=圆形 1=方形)",min:0,max:1,step:1},{key:"centerX",label:"CenterX",desc:"放大中心 X",min:0,max:1,step:.01},{key:"centerY",label:"CenterY",desc:"放大中心 Y",min:0,max:1,step:.01},{key:"magnification",label:"Magnification",desc:"放大倍数 (%)",min:50,max:400},{key:"size",label:"Size",desc:"镜头大小",min:0,max:300},{key:"feather",label:"Feather",desc:"边缘羽化",min:0,max:100}]},"shaft-light":{name:"ShaftLight",nameZh:"光柱",EffectClass:pS,defaults:{threshold:.2,strength:1.82,length:1,centerX:.5,centerY:.5},params:[{key:"threshold",label:"Threshold",desc:"亮度提取阈值",min:0,max:1,step:.01},{key:"strength",label:"Strength",desc:"光柱强度",min:0,max:5,step:.01},{key:"length",label:"Length",desc:"光线延伸长度",min:0,max:2,step:.01},{key:"centerX",label:"CenterX",desc:"光源中心 X",min:0,max:1,step:.01},{key:"centerY",label:"CenterY",desc:"光源中心 Y",min:0,max:1,step:.01}]},"overall-glow":{name:"OverallGlow",nameZh:"泛光",EffectClass:mS,defaults:{threshold:60,glowRadius:40,glowStrength:60,glowColor:0},params:[{key:"threshold",label:"Threshold",desc:"高光提取阈值",min:0,max:100},{key:"glowRadius",label:"GlowRadius",desc:"光晕扩散半径",min:0,max:100},{key:"glowStrength",label:"GlowStrength",desc:"光晕强度",min:0,max:100},{key:"glowColor",label:"GlowColor",desc:"光晕色调 (0=白 1=暖 2=冷)",min:0,max:2,step:1}]}},d=ae(()=>f[t.value]||null),p=ae(()=>{var F;return((F=d.value)==null?void 0:F.params)||[]}),x=ae(()=>{for(const F of la)if(F.plugins.find(b=>b.id===t.value))return F.name;return""}),g=$t({...f["wave-blur"].defaults});Rr(g,F=>{u==null||u.updateParams(F)},{deep:!0}),Il(()=>{Ke(()=>{y("wave-blur"),S()})});function m(F,b){const q=f[F];if(!q||!b)return null;if(F==="wave-blur"){const W=new Wb(b,null);return W.init(),W}else if(q.EffectClass)return new q.EffectClass(b);return null}function h(){const F=o.value;return F?s.value?F.webglCanvas:F.canvas2d:null}function y(F){var q;(q=u==null?void 0:u.destroy)==null||q.call(u),u=null,s.value=F==="wave-blur";const b=h();u=m(F,b),c&&(u==null||u.loadImage(c)),e.value&&v()}function v(){var b;const F=(b=o.value)==null?void 0:b.originalCanvas;!F||!c||(F.width=a.value||c.naturalWidth||900,F.height=l.value||c.naturalHeight||600,F.getContext("2d").drawImage(c,0,0,F.width,F.height))}function S(){w()}function w(){const q=document.createElement("canvas");q.width=1200,q.height=675;const W=q.getContext("2d"),K=W.createLinearGradient(0,0,0,675);K.addColorStop(0,"#06060f"),K.addColorStop(.5,"#0a0716"),K.addColorStop(1,"#000005"),W.fillStyle=K,W.fillRect(0,0,1200,675);const at=[{x:.18*1200,y:.28*675,r:380,c0:"rgba(110,50,220,0.45)"},{x:.78*1200,y:.55*675,r:340,c0:"rgba(220,65,55,0.42)"},{x:.52*1200,y:.85*675,r:300,c0:"rgba(30,175,145,0.38)"},{x:.88*1200,y:.1*675,r:220,c0:"rgba(210,155,25,0.38)"},{x:.42*1200,y:.18*675,r:180,c0:"rgba(60,130,255,0.32)"}];for(const H of at){const it=W.createRadialGradient(H.x,H.y,0,H.x,H.y,H.r);it.addColorStop(0,H.c0),it.addColorStop(1,"rgba(0,0,0,0)"),W.fillStyle=it,W.fillRect(0,0,1200,675)}const nt=W.createLinearGradient(0,675*.52,0,675*.72);nt.addColorStop(0,"rgba(180,80,255,0.18)"),nt.addColorStop(1,"rgba(0,0,0,0)"),W.fillStyle=nt,W.fillRect(0,675*.52,1200,675*.5),W.save();const ct={x:1200/2,y:675*.58};W.strokeStyle="rgba(180,80,255,0.18)",W.lineWidth=1;for(let H=0;H<=12;H++){const it=H/12,st=675*.58+(675-675*.58)*(it*it),dt=1200/2*(.02+.98*it*it);W.beginPath(),W.moveTo(ct.x-dt,st),W.lineTo(ct.x+dt,st),W.stroke()}for(let H=-8;H<=8;H++){const it=600+H*75;W.beginPath(),W.moveTo(ct.x,ct.y),W.lineTo(it,675),W.stroke()}W.restore();const Q=L(42);for(let H=0;H<160;H++){const it=Q()*1200,st=Q()*675*.62,dt=Q()*1.4+.3,j=Q()*.6+.2;W.beginPath(),W.arc(it,st,dt,0,Math.PI*2),W.fillStyle=`rgba(255,255,255,${j.toFixed(2)})`,W.fill()}const Z=1200/2,_t=675*.58;for(let H=5;H>=1;H--){const it=W.createRadialGradient(Z,_t,0,Z,_t,90+H*28);it.addColorStop(0,`rgba(255,80,180,${.06*H})`),it.addColorStop(1,"rgba(255,80,180,0)"),W.fillStyle=it,W.fillRect(0,0,1200,675)}const rt=W.createRadialGradient(Z,_t,0,Z,_t,68);rt.addColorStop(0,"#fff9f4"),rt.addColorStop(.3,"#ffd580"),rt.addColorStop(.7,"#ff7040"),rt.addColorStop(1,"#e0205a"),W.fillStyle=rt,W.beginPath(),W.arc(Z,_t,68,0,Math.PI*2),W.fill(),W.save(),W.beginPath(),W.arc(Z,_t,68,0,Math.PI*2),W.clip(),W.strokeStyle="rgba(6,6,15,0.4)",W.lineWidth=5;for(let H=_t-68;H<=_t+68;H+=11)W.beginPath(),W.moveTo(Z-70,H),W.lineTo(Z+70,H),W.stroke();W.restore(),W.strokeStyle="rgba(100,200,255,0.15)",W.lineWidth=1,W.beginPath(),W.moveTo(1200*.78,675*.12),W.lineTo(1200*.92,675*.32),W.lineTo(1200*.78,675*.52),W.lineTo(1200*.64,675*.32),W.closePath(),W.stroke(),W.strokeStyle="rgba(180,80,255,0.2)",W.lineWidth=1,W.strokeRect(1200*.06,675*.1,1200*.2,675*.35),W.strokeStyle="rgba(180,80,255,0.1)",W.lineWidth=.5,W.strokeRect(1200*.08,675*.13,1200*.16,675*.29),W.strokeStyle="rgba(30,210,160,0.18)",W.lineWidth=1,W.strokeRect(1200*.75,675*.68,1200*.18,675*.22),W.fillStyle="rgba(0,0,0,0.12)";for(let H=0;H<675;H+=3)W.fillRect(0,H,1200,1);W.save(),W.textBaseline="alphabetic",W.font='bold 110px "Space Grotesk","Inter",sans-serif',W.textAlign="left";const U=W.createLinearGradient(1200*.08,0,1200*.5,0);U.addColorStop(0,"rgba(255,255,255,0.22)"),U.addColorStop(1,"rgba(255,255,255,0.06)"),W.fillStyle=U,W.fillText("KSkr",1200*.08,675*.46),W.restore(),W.save(),W.font='18px "Inter",sans-serif',W.textAlign="left",W.textBaseline="alphabetic",W.fillStyle="rgba(255,255,255,0.1)",W.fillText("AE PLUGIN PREVIEW  ·  上传图片以开始预览效果",1200*.08,675*.54),W.restore(),W.save(),W.font="13px monospace",W.textAlign="right",W.textBaseline="alphabetic",W.fillStyle="rgba(255,255,255,0.08)",W.fillText("KSkr Studio",1200*.97,675*.96),W.restore();const J=new Image;J.onload=()=>C(J),J.src=q.toDataURL()}function L(F){return function(){F|=0,F=F+1831565813|0;let b=Math.imul(F^F>>>15,1|F);return b=b+Math.imul(b^b>>>7,61|b)^b,((b^b>>>14)>>>0)/4294967296}}function C(F){c=F,a.value=F.naturalWidth||F.width||900,l.value=F.naturalHeight||F.height||600,r.value=!0,Ke(()=>{u==null||u.loadImage(F),e.value&&v()})}function z(F){var W,K,at,nt,ct;const b=((K=(W=F==null?void 0:F.target)==null?void 0:W.files)==null?void 0:K[0])||((nt=(at=F==null?void 0:F.dataTransfer)==null?void 0:at.files)==null?void 0:nt[0])||((ct=F==null?void 0:F.files)==null?void 0:ct[0]);if(!b)return;const q=new FileReader;q.onload=Q=>{const Z=new Image;Z.onload=()=>C(Z),Z.src=Q.target.result},q.readAsDataURL(b)}function G(){var F;g.value={...((F=d.value)==null?void 0:F.defaults)||{}}}function T(){e.value=!e.value,i.value=!1,e.value&&c&&Ke(()=>v())}function N(){i.value=!i.value,i.value&&c&&v()}function I(F){t.value=F.id;const b=f[F.id];b&&(g.value={...b.defaults}),Ke(()=>y(F.id))}return(F,b)=>{var q;return At(),Ct("div",gS,[V("div",_S,[Ee(q0,{onSelectPlugin:I}),d.value?(At(),Ah(h_,{key:0,plugin:d.value,params:p.value,modelValue:g.value,"onUpdate:modelValue":b[0]||(b[0]=W=>g.value=W),compareMode:e.value,onReset:G,onUpload:z,onToggleCompare:T},null,8,["plugin","params","modelValue","compareMode"])):Ht("",!0),Ee(A_,{ref_key:"previewArea",ref:o,compareMode:e.value,hasImage:r.value,isWebGL:s.value,showingOriginal:i.value,imageWidth:a.value,imageHeight:l.value,currentCategory:x.value,currentPlugin:((q=d.value)==null?void 0:q.name)||"",onUpload:z,onToggleOriginal:N},null,8,["compareMode","hasImage","isWebGL","showingOriginal","imageWidth","imageHeight","currentCategory","currentPlugin"])])])}}},xS=Ci(vS,[["__scopeId","data-v-bd3edc46"]]);var na=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function ia(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Td={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(n,t){(function(e){n.exports=e()})(function(){return function e(i,r,s){function o(u,c){if(!r[u]){if(!i[u]){var f=typeof ia=="function"&&ia;if(!c&&f)return f(u,!0);if(a)return a(u,!0);var d=new Error("Cannot find module '"+u+"'");throw d.code="MODULE_NOT_FOUND",d}var p=r[u]={exports:{}};i[u][0].call(p.exports,function(x){var g=i[u][1][x];return o(g||x)},p,p.exports,e,i,r,s)}return r[u].exports}for(var a=typeof ia=="function"&&ia,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(e,i,r){var s=e("./utils"),o=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var u,c,f,d,p,x,g,m=[],h=0,y=l.length,v=y,S=s.getTypeOf(l)!=="string";h<l.length;)v=y-h,f=S?(u=l[h++],c=h<y?l[h++]:0,h<y?l[h++]:0):(u=l.charCodeAt(h++),c=h<y?l.charCodeAt(h++):0,h<y?l.charCodeAt(h++):0),d=u>>2,p=(3&u)<<4|c>>4,x=1<v?(15&c)<<2|f>>6:64,g=2<v?63&f:64,m.push(a.charAt(d)+a.charAt(p)+a.charAt(x)+a.charAt(g));return m.join("")},r.decode=function(l){var u,c,f,d,p,x,g=0,m=0,h="data:";if(l.substr(0,h.length)===h)throw new Error("Invalid base64 input, it looks like a data url.");var y,v=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&v--,l.charAt(l.length-2)===a.charAt(64)&&v--,v%1!=0)throw new Error("Invalid base64 input, bad content length.");for(y=o.uint8array?new Uint8Array(0|v):new Array(0|v);g<l.length;)u=a.indexOf(l.charAt(g++))<<2|(d=a.indexOf(l.charAt(g++)))>>4,c=(15&d)<<4|(p=a.indexOf(l.charAt(g++)))>>2,f=(3&p)<<6|(x=a.indexOf(l.charAt(g++))),y[m++]=u,p!==64&&(y[m++]=c),x!==64&&(y[m++]=f);return y}},{"./support":30,"./utils":32}],2:[function(e,i,r){var s=e("./external"),o=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function u(c,f,d,p,x){this.compressedSize=c,this.uncompressedSize=f,this.crc32=d,this.compression=p,this.compressedContent=x}u.prototype={getContentWorker:function(){var c=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),f=this;return c.on("end",function(){if(this.streamInfo.data_length!==f.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),c},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},u.createWorkerFrom=function(c,f,d){return c.pipe(new a).pipe(new l("uncompressedSize")).pipe(f.compressWorker(d)).pipe(new l("compressedSize")).withStreamInfo("compression",f)},i.exports=u},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,i,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,i,r){var s=e("./utils"),o=function(){for(var a,l=[],u=0;u<256;u++){a=u;for(var c=0;c<8;c++)a=1&a?3988292384^a>>>1:a>>>1;l[u]=a}return l}();i.exports=function(a,l){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?function(u,c,f,d){var p=o,x=d+f;u^=-1;for(var g=d;g<x;g++)u=u>>>8^p[255&(u^c[g])];return-1^u}(0|l,a,a.length,0):function(u,c,f,d){var p=o,x=d+f;u^=-1;for(var g=d;g<x;g++)u=u>>>8^p[255&(u^c.charCodeAt(g))];return-1^u}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(e,i,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,i,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),i.exports={Promise:s}},{lie:37}],7:[function(e,i,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=e("pako"),a=e("./utils"),l=e("./stream/GenericWorker"),u=s?"uint8array":"array";function c(f,d){l.call(this,"FlateWorker/"+f),this._pako=null,this._pakoAction=f,this._pakoOptions=d,this.meta={}}r.magic="\b\0",a.inherits(c,l),c.prototype.processChunk=function(f){this.meta=f.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(u,f.data),!1)},c.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},c.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},c.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var f=this;this._pako.onData=function(d){f.push({data:d,meta:f.meta})}},r.compressWorker=function(f){return new c("Deflate",f)},r.uncompressWorker=function(){return new c("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,i,r){function s(p,x){var g,m="";for(g=0;g<x;g++)m+=String.fromCharCode(255&p),p>>>=8;return m}function o(p,x,g,m,h,y){var v,S,w=p.file,L=p.compression,C=y!==u.utf8encode,z=a.transformTo("string",y(w.name)),G=a.transformTo("string",u.utf8encode(w.name)),T=w.comment,N=a.transformTo("string",y(T)),I=a.transformTo("string",u.utf8encode(T)),F=G.length!==w.name.length,b=I.length!==T.length,q="",W="",K="",at=w.dir,nt=w.date,ct={crc32:0,compressedSize:0,uncompressedSize:0};x&&!g||(ct.crc32=p.crc32,ct.compressedSize=p.compressedSize,ct.uncompressedSize=p.uncompressedSize);var Q=0;x&&(Q|=8),C||!F&&!b||(Q|=2048);var Z=0,_t=0;at&&(Z|=16),h==="UNIX"?(_t=798,Z|=function(U,J){var H=U;return U||(H=J?16893:33204),(65535&H)<<16}(w.unixPermissions,at)):(_t=20,Z|=function(U){return 63&(U||0)}(w.dosPermissions)),v=nt.getUTCHours(),v<<=6,v|=nt.getUTCMinutes(),v<<=5,v|=nt.getUTCSeconds()/2,S=nt.getUTCFullYear()-1980,S<<=4,S|=nt.getUTCMonth()+1,S<<=5,S|=nt.getUTCDate(),F&&(W=s(1,1)+s(c(z),4)+G,q+="up"+s(W.length,2)+W),b&&(K=s(1,1)+s(c(N),4)+I,q+="uc"+s(K.length,2)+K);var rt="";return rt+=`
\0`,rt+=s(Q,2),rt+=L.magic,rt+=s(v,2),rt+=s(S,2),rt+=s(ct.crc32,4),rt+=s(ct.compressedSize,4),rt+=s(ct.uncompressedSize,4),rt+=s(z.length,2),rt+=s(q.length,2),{fileRecord:f.LOCAL_FILE_HEADER+rt+z+q,dirRecord:f.CENTRAL_FILE_HEADER+s(_t,2)+rt+s(N.length,2)+"\0\0\0\0"+s(Z,4)+s(m,4)+z+q+N}}var a=e("../utils"),l=e("../stream/GenericWorker"),u=e("../utf8"),c=e("../crc32"),f=e("../signature");function d(p,x,g,m){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=x,this.zipPlatform=g,this.encodeFileName=m,this.streamFiles=p,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(d,l),d.prototype.push=function(p){var x=p.meta.percent||0,g=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(p):(this.bytesWritten+=p.data.length,l.prototype.push.call(this,{data:p.data,meta:{currentFile:this.currentFile,percent:g?(x+100*(g-m-1))/g:100}}))},d.prototype.openedSource=function(p){this.currentSourceOffset=this.bytesWritten,this.currentFile=p.file.name;var x=this.streamFiles&&!p.file.dir;if(x){var g=o(p,x,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},d.prototype.closedSource=function(p){this.accumulate=!1;var x=this.streamFiles&&!p.file.dir,g=o(p,x,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),x)this.push({data:function(m){return f.DATA_DESCRIPTOR+s(m.crc32,4)+s(m.compressedSize,4)+s(m.uncompressedSize,4)}(p),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},d.prototype.flush=function(){for(var p=this.bytesWritten,x=0;x<this.dirRecords.length;x++)this.push({data:this.dirRecords[x],meta:{percent:100}});var g=this.bytesWritten-p,m=function(h,y,v,S,w){var L=a.transformTo("string",w(S));return f.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(h,2)+s(h,2)+s(y,4)+s(v,4)+s(L.length,2)+L}(this.dirRecords.length,g,p,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},d.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},d.prototype.registerPrevious=function(p){this._sources.push(p);var x=this;return p.on("data",function(g){x.processChunk(g)}),p.on("end",function(){x.closedSource(x.previous.streamInfo),x._sources.length?x.prepareNextSource():x.end()}),p.on("error",function(g){x.error(g)}),this},d.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},d.prototype.error=function(p){var x=this._sources;if(!l.prototype.error.call(this,p))return!1;for(var g=0;g<x.length;g++)try{x[g].error(p)}catch{}return!0},d.prototype.lock=function(){l.prototype.lock.call(this);for(var p=this._sources,x=0;x<p.length;x++)p[x].lock()},i.exports=d},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,i,r){var s=e("../compressions"),o=e("./ZipFileWorker");r.generateWorker=function(a,l,u){var c=new o(l.streamFiles,u,l.platform,l.encodeFileName),f=0;try{a.forEach(function(d,p){f++;var x=function(y,v){var S=y||v,w=s[S];if(!w)throw new Error(S+" is not a valid compression method !");return w}(p.options.compression,l.compression),g=p.options.compressionOptions||l.compressionOptions||{},m=p.dir,h=p.date;p._compressWorker(x,g).withStreamInfo("file",{name:d,dir:m,date:h,comment:p.comment||"",unixPermissions:p.unixPermissions,dosPermissions:p.dosPermissions}).pipe(c)}),c.entriesCount=f}catch(d){c.error(d)}return c}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,i,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=e("./external"),i.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,i,r){var s=e("./utils"),o=e("./external"),a=e("./utf8"),l=e("./zipEntries"),u=e("./stream/Crc32Probe"),c=e("./nodejsUtils");function f(d){return new o.Promise(function(p,x){var g=d.decompressed.getContentWorker().pipe(new u);g.on("error",function(m){x(m)}).on("end",function(){g.streamInfo.crc32!==d.decompressed.crc32?x(new Error("Corrupted zip : CRC32 mismatch")):p()}).resume()})}i.exports=function(d,p){var x=this;return p=s.extend(p||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),c.isNode&&c.isStream(d)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",d,!0,p.optimizedBinaryString,p.base64).then(function(g){var m=new l(p);return m.load(g),m}).then(function(g){var m=[o.Promise.resolve(g)],h=g.files;if(p.checkCRC32)for(var y=0;y<h.length;y++)m.push(f(h[y]));return o.Promise.all(m)}).then(function(g){for(var m=g.shift(),h=m.files,y=0;y<h.length;y++){var v=h[y],S=v.fileNameStr,w=s.resolve(v.fileNameStr);x.file(w,v.decompressed,{binary:!0,optimizedBinaryString:!0,date:v.date,dir:v.dir,comment:v.fileCommentStr.length?v.fileCommentStr:null,unixPermissions:v.unixPermissions,dosPermissions:v.dosPermissions,createFolders:p.createFolders}),v.dir||(x.file(w).unsafeOriginalName=S)}return m.zipComment.length&&(x.comment=m.zipComment),x})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,i,r){var s=e("../utils"),o=e("../stream/GenericWorker");function a(l,u){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(u)}s.inherits(a,o),a.prototype._bindStream=function(l){var u=this;(this._stream=l).pause(),l.on("data",function(c){u.push({data:c,meta:{percent:0}})}).on("error",function(c){u.isPaused?this.generatedError=c:u.error(c)}).on("end",function(){u.isPaused?u._upstreamEnded=!0:u.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,i,r){var s=e("readable-stream").Readable;function o(a,l,u){s.call(this,l),this._helper=a;var c=this;a.on("data",function(f,d){c.push(f)||c._helper.pause(),u&&u(d)}).on("error",function(f){c.emit("error",f)}).on("end",function(){c.push(null)})}e("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},i.exports=o},{"../utils":32,"readable-stream":16}],14:[function(e,i,r){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,i,r){function s(w,L,C){var z,G=a.getTypeOf(L),T=a.extend(C||{},c);T.date=T.date||new Date,T.compression!==null&&(T.compression=T.compression.toUpperCase()),typeof T.unixPermissions=="string"&&(T.unixPermissions=parseInt(T.unixPermissions,8)),T.unixPermissions&&16384&T.unixPermissions&&(T.dir=!0),T.dosPermissions&&16&T.dosPermissions&&(T.dir=!0),T.dir&&(w=h(w)),T.createFolders&&(z=m(w))&&y.call(this,z,!0);var N=G==="string"&&T.binary===!1&&T.base64===!1;C&&C.binary!==void 0||(T.binary=!N),(L instanceof f&&L.uncompressedSize===0||T.dir||!L||L.length===0)&&(T.base64=!1,T.binary=!0,L="",T.compression="STORE",G="string");var I=null;I=L instanceof f||L instanceof l?L:x.isNode&&x.isStream(L)?new g(w,L):a.prepareContent(w,L,T.binary,T.optimizedBinaryString,T.base64);var F=new d(w,I,T);this.files[w]=F}var o=e("./utf8"),a=e("./utils"),l=e("./stream/GenericWorker"),u=e("./stream/StreamHelper"),c=e("./defaults"),f=e("./compressedObject"),d=e("./zipObject"),p=e("./generate"),x=e("./nodejsUtils"),g=e("./nodejs/NodejsStreamInputAdapter"),m=function(w){w.slice(-1)==="/"&&(w=w.substring(0,w.length-1));var L=w.lastIndexOf("/");return 0<L?w.substring(0,L):""},h=function(w){return w.slice(-1)!=="/"&&(w+="/"),w},y=function(w,L){return L=L!==void 0?L:c.createFolders,w=h(w),this.files[w]||s.call(this,w,null,{dir:!0,createFolders:L}),this.files[w]};function v(w){return Object.prototype.toString.call(w)==="[object RegExp]"}var S={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(w){var L,C,z;for(L in this.files)z=this.files[L],(C=L.slice(this.root.length,L.length))&&L.slice(0,this.root.length)===this.root&&w(C,z)},filter:function(w){var L=[];return this.forEach(function(C,z){w(C,z)&&L.push(z)}),L},file:function(w,L,C){if(arguments.length!==1)return w=this.root+w,s.call(this,w,L,C),this;if(v(w)){var z=w;return this.filter(function(T,N){return!N.dir&&z.test(T)})}var G=this.files[this.root+w];return G&&!G.dir?G:null},folder:function(w){if(!w)return this;if(v(w))return this.filter(function(G,T){return T.dir&&w.test(G)});var L=this.root+w,C=y.call(this,L),z=this.clone();return z.root=C.name,z},remove:function(w){w=this.root+w;var L=this.files[w];if(L||(w.slice(-1)!=="/"&&(w+="/"),L=this.files[w]),L&&!L.dir)delete this.files[w];else for(var C=this.filter(function(G,T){return T.name.slice(0,w.length)===w}),z=0;z<C.length;z++)delete this.files[C[z].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(w){var L,C={};try{if((C=a.extend(w||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=C.type.toLowerCase(),C.compression=C.compression.toUpperCase(),C.type==="binarystring"&&(C.type="string"),!C.type)throw new Error("No output type specified.");a.checkSupport(C.type),C.platform!=="darwin"&&C.platform!=="freebsd"&&C.platform!=="linux"&&C.platform!=="sunos"||(C.platform="UNIX"),C.platform==="win32"&&(C.platform="DOS");var z=C.comment||this.comment||"";L=p.generateWorker(this,C,z)}catch(G){(L=new l("error")).error(G)}return new u(L,C.type||"string",C.mimeType)},generateAsync:function(w,L){return this.generateInternalStream(w).accumulate(L)},generateNodeStream:function(w,L){return(w=w||{}).type||(w.type="nodebuffer"),this.generateInternalStream(w).toNodejsStream(L)}};i.exports=S},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,i,r){i.exports=e("stream")},{stream:void 0}],17:[function(e,i,r){var s=e("./DataReader");function o(a){s.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),u=a.charCodeAt(1),c=a.charCodeAt(2),f=a.charCodeAt(3),d=this.length-4;0<=d;--d)if(this.data[d]===l&&this.data[d+1]===u&&this.data[d+2]===c&&this.data[d+3]===f)return d-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),u=a.charCodeAt(1),c=a.charCodeAt(2),f=a.charCodeAt(3),d=this.readData(4);return l===d[0]&&u===d[1]&&c===d[2]&&f===d[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./DataReader":18}],18:[function(e,i,r){var s=e("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,u=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)u=(u<<8)+this.byteAt(l);return this.index+=a,u},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},i.exports=o},{"../utils":32}],19:[function(e,i,r){var s=e("./Uint8ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,i,r){var s=e("./DataReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./DataReader":18}],21:[function(e,i,r){var s=e("./ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(e,i,r){var s=e("../utils"),o=e("../support"),a=e("./ArrayReader"),l=e("./StringReader"),u=e("./NodeBufferReader"),c=e("./Uint8ArrayReader");i.exports=function(f){var d=s.getTypeOf(f);return s.checkSupport(d),d!=="string"||o.uint8array?d==="nodebuffer"?new u(f):o.uint8array?new c(s.transformTo("uint8array",f)):new a(s.transformTo("array",f)):new l(f)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,i,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,i,r){var s=e("./GenericWorker"),o=e("../utils");function a(l){s.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,s),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},i.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,i,r){var s=e("./GenericWorker"),o=e("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,s),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},i.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,i,r){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(a,o),a.prototype.processChunk=function(l){if(l){var u=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=u+l.data.length}o.prototype.processChunk.call(this,l)},i.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,i,r){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataWorker");var u=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(c){u.dataIsReady=!0,u.data=c,u.max=c&&c.length||0,u.type=s.getTypeOf(c),u.isPaused||u._tickAndRepeat()},function(c){u.error(c)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,u=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,u);break;case"uint8array":l=this.data.subarray(this.index,u);break;case"array":case"nodebuffer":l=this.data.slice(this.index,u)}return this.index=u,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,i,r){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},i.exports=s},{}],29:[function(e,i,r){var s=e("../utils"),o=e("./ConvertWorker"),a=e("./GenericWorker"),l=e("../base64"),u=e("../support"),c=e("../external"),f=null;if(u.nodestream)try{f=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function d(x,g){return new c.Promise(function(m,h){var y=[],v=x._internalType,S=x._outputType,w=x._mimeType;x.on("data",function(L,C){y.push(L),g&&g(C)}).on("error",function(L){y=[],h(L)}).on("end",function(){try{var L=function(C,z,G){switch(C){case"blob":return s.newBlob(s.transformTo("arraybuffer",z),G);case"base64":return l.encode(z);default:return s.transformTo(C,z)}}(S,function(C,z){var G,T=0,N=null,I=0;for(G=0;G<z.length;G++)I+=z[G].length;switch(C){case"string":return z.join("");case"array":return Array.prototype.concat.apply([],z);case"uint8array":for(N=new Uint8Array(I),G=0;G<z.length;G++)N.set(z[G],T),T+=z[G].length;return N;case"nodebuffer":return Buffer.concat(z);default:throw new Error("concat : unsupported type '"+C+"'")}}(v,y),w);m(L)}catch(C){h(C)}y=[]}).resume()})}function p(x,g,m){var h=g;switch(g){case"blob":case"arraybuffer":h="uint8array";break;case"base64":h="string"}try{this._internalType=h,this._outputType=g,this._mimeType=m,s.checkSupport(h),this._worker=x.pipe(new o(h)),x.lock()}catch(y){this._worker=new a("error"),this._worker.error(y)}}p.prototype={accumulate:function(x){return d(this,x)},on:function(x,g){var m=this;return x==="data"?this._worker.on(x,function(h){g.call(m,h.data,h.meta)}):this._worker.on(x,function(){s.delay(g,arguments,m)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(x){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new f(this,{objectMode:this._outputType!=="nodebuffer"},x)}},i.exports=p},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,i,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),r.blob=o.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,i,r){for(var s=e("./utils"),o=e("./support"),a=e("./nodejsUtils"),l=e("./stream/GenericWorker"),u=new Array(256),c=0;c<256;c++)u[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;u[254]=u[254]=1;function f(){l.call(this,"utf-8 decode"),this.leftOver=null}function d(){l.call(this,"utf-8 encode")}r.utf8encode=function(p){return o.nodebuffer?a.newBufferFrom(p,"utf-8"):function(x){var g,m,h,y,v,S=x.length,w=0;for(y=0;y<S;y++)(64512&(m=x.charCodeAt(y)))==55296&&y+1<S&&(64512&(h=x.charCodeAt(y+1)))==56320&&(m=65536+(m-55296<<10)+(h-56320),y++),w+=m<128?1:m<2048?2:m<65536?3:4;for(g=o.uint8array?new Uint8Array(w):new Array(w),y=v=0;v<w;y++)(64512&(m=x.charCodeAt(y)))==55296&&y+1<S&&(64512&(h=x.charCodeAt(y+1)))==56320&&(m=65536+(m-55296<<10)+(h-56320),y++),m<128?g[v++]=m:(m<2048?g[v++]=192|m>>>6:(m<65536?g[v++]=224|m>>>12:(g[v++]=240|m>>>18,g[v++]=128|m>>>12&63),g[v++]=128|m>>>6&63),g[v++]=128|63&m);return g}(p)},r.utf8decode=function(p){return o.nodebuffer?s.transformTo("nodebuffer",p).toString("utf-8"):function(x){var g,m,h,y,v=x.length,S=new Array(2*v);for(g=m=0;g<v;)if((h=x[g++])<128)S[m++]=h;else if(4<(y=u[h]))S[m++]=65533,g+=y-1;else{for(h&=y===2?31:y===3?15:7;1<y&&g<v;)h=h<<6|63&x[g++],y--;1<y?S[m++]=65533:h<65536?S[m++]=h:(h-=65536,S[m++]=55296|h>>10&1023,S[m++]=56320|1023&h)}return S.length!==m&&(S.subarray?S=S.subarray(0,m):S.length=m),s.applyFromCharCode(S)}(p=s.transformTo(o.uint8array?"uint8array":"array",p))},s.inherits(f,l),f.prototype.processChunk=function(p){var x=s.transformTo(o.uint8array?"uint8array":"array",p.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var g=x;(x=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),x.set(g,this.leftOver.length)}else x=this.leftOver.concat(x);this.leftOver=null}var m=function(y,v){var S;for((v=v||y.length)>y.length&&(v=y.length),S=v-1;0<=S&&(192&y[S])==128;)S--;return S<0||S===0?v:S+u[y[S]]>v?S:v}(x),h=x;m!==x.length&&(o.uint8array?(h=x.subarray(0,m),this.leftOver=x.subarray(m,x.length)):(h=x.slice(0,m),this.leftOver=x.slice(m,x.length))),this.push({data:r.utf8decode(h),meta:p.meta})},f.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=f,s.inherits(d,l),d.prototype.processChunk=function(p){this.push({data:r.utf8encode(p.data),meta:p.meta})},r.Utf8EncodeWorker=d},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,i,r){var s=e("./support"),o=e("./base64"),a=e("./nodejsUtils"),l=e("./external");function u(g){return g}function c(g,m){for(var h=0;h<g.length;++h)m[h]=255&g.charCodeAt(h);return m}e("setimmediate"),r.newBlob=function(g,m){r.checkSupport("blob");try{return new Blob([g],{type:m})}catch{try{var h=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return h.append(g),h.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};var f={stringifyByChunk:function(g,m,h){var y=[],v=0,S=g.length;if(S<=h)return String.fromCharCode.apply(null,g);for(;v<S;)m==="array"||m==="nodebuffer"?y.push(String.fromCharCode.apply(null,g.slice(v,Math.min(v+h,S)))):y.push(String.fromCharCode.apply(null,g.subarray(v,Math.min(v+h,S)))),v+=h;return y.join("")},stringifyByChar:function(g){for(var m="",h=0;h<g.length;h++)m+=String.fromCharCode(g[h]);return m},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function d(g){var m=65536,h=r.getTypeOf(g),y=!0;if(h==="uint8array"?y=f.applyCanBeUsed.uint8array:h==="nodebuffer"&&(y=f.applyCanBeUsed.nodebuffer),y)for(;1<m;)try{return f.stringifyByChunk(g,h,m)}catch{m=Math.floor(m/2)}return f.stringifyByChar(g)}function p(g,m){for(var h=0;h<g.length;h++)m[h]=g[h];return m}r.applyFromCharCode=d;var x={};x.string={string:u,array:function(g){return c(g,new Array(g.length))},arraybuffer:function(g){return x.string.uint8array(g).buffer},uint8array:function(g){return c(g,new Uint8Array(g.length))},nodebuffer:function(g){return c(g,a.allocBuffer(g.length))}},x.array={string:d,array:u,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(g)}},x.arraybuffer={string:function(g){return d(new Uint8Array(g))},array:function(g){return p(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:u,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(new Uint8Array(g))}},x.uint8array={string:d,array:function(g){return p(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:u,nodebuffer:function(g){return a.newBufferFrom(g)}},x.nodebuffer={string:d,array:function(g){return p(g,new Array(g.length))},arraybuffer:function(g){return x.nodebuffer.uint8array(g).buffer},uint8array:function(g){return p(g,new Uint8Array(g.length))},nodebuffer:u},r.transformTo=function(g,m){if(m=m||"",!g)return m;r.checkSupport(g);var h=r.getTypeOf(m);return x[h][g](m)},r.resolve=function(g){for(var m=g.split("/"),h=[],y=0;y<m.length;y++){var v=m[y];v==="."||v===""&&y!==0&&y!==m.length-1||(v===".."?h.pop():h.push(v))}return h.join("/")},r.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(g)?"nodebuffer":s.uint8array&&g instanceof Uint8Array?"uint8array":s.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(g){if(!s[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(g){var m,h,y="";for(h=0;h<(g||"").length;h++)y+="\\x"+((m=g.charCodeAt(h))<16?"0":"")+m.toString(16).toUpperCase();return y},r.delay=function(g,m,h){setImmediate(function(){g.apply(h||null,m||[])})},r.inherits=function(g,m){function h(){}h.prototype=m.prototype,g.prototype=new h},r.extend=function(){var g,m,h={};for(g=0;g<arguments.length;g++)for(m in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],m)&&h[m]===void 0&&(h[m]=arguments[g][m]);return h},r.prepareContent=function(g,m,h,y,v){return l.Promise.resolve(m).then(function(S){return s.blob&&(S instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(S))!==-1)&&typeof FileReader<"u"?new l.Promise(function(w,L){var C=new FileReader;C.onload=function(z){w(z.target.result)},C.onerror=function(z){L(z.target.error)},C.readAsArrayBuffer(S)}):S}).then(function(S){var w=r.getTypeOf(S);return w?(w==="arraybuffer"?S=r.transformTo("uint8array",S):w==="string"&&(v?S=o.decode(S):h&&y!==!0&&(S=function(L){return c(L,s.uint8array?new Uint8Array(L.length):new Array(L.length))}(S))),S):l.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,i,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./signature"),l=e("./zipEntry"),u=e("./support");function c(f){this.files=[],this.loadOptions=f}c.prototype={checkSignature:function(f){if(!this.reader.readAndCheckSignature(f)){this.reader.index-=4;var d=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(d)+", expected "+o.pretty(f)+")")}},isSignature:function(f,d){var p=this.reader.index;this.reader.setIndex(f);var x=this.reader.readString(4)===d;return this.reader.setIndex(p),x},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var f=this.reader.readData(this.zipCommentLength),d=u.uint8array?"uint8array":"array",p=o.transformTo(d,f);this.zipComment=this.loadOptions.decodeFileName(p)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var f,d,p,x=this.zip64EndOfCentralSize-44;0<x;)f=this.reader.readInt(2),d=this.reader.readInt(4),p=this.reader.readData(d),this.zip64ExtensibleData[f]={id:f,length:d,value:p}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var f,d;for(f=0;f<this.files.length;f++)d=this.files[f],this.reader.setIndex(d.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),d.readLocalPart(this.reader),d.handleUTF8(),d.processAttributes()},readCentralDir:function(){var f;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(f=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(f);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var f=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(f<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(f);var d=f;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(f=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(f),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var p=this.centralDirOffset+this.centralDirSize;this.zip64&&(p+=20,p+=12+this.zip64EndOfCentralSize);var x=d-p;if(0<x)this.isSignature(d,a.CENTRAL_FILE_HEADER)||(this.reader.zero=x);else if(x<0)throw new Error("Corrupted zip: missing "+Math.abs(x)+" bytes.")},prepareReader:function(f){this.reader=s(f)},load:function(f){this.prepareReader(f),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=c},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,i,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./compressedObject"),l=e("./crc32"),u=e("./utf8"),c=e("./compressions"),f=e("./support");function d(p,x){this.options=p,this.loadOptions=x}d.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(p){var x,g;if(p.skip(22),this.fileNameLength=p.readInt(2),g=p.readInt(2),this.fileName=p.readData(this.fileNameLength),p.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((x=function(m){for(var h in c)if(Object.prototype.hasOwnProperty.call(c,h)&&c[h].magic===m)return c[h];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,x,p.readData(this.compressedSize))},readCentralPart:function(p){this.versionMadeBy=p.readInt(2),p.skip(2),this.bitFlag=p.readInt(2),this.compressionMethod=p.readString(2),this.date=p.readDate(),this.crc32=p.readInt(4),this.compressedSize=p.readInt(4),this.uncompressedSize=p.readInt(4);var x=p.readInt(2);if(this.extraFieldsLength=p.readInt(2),this.fileCommentLength=p.readInt(2),this.diskNumberStart=p.readInt(2),this.internalFileAttributes=p.readInt(2),this.externalFileAttributes=p.readInt(4),this.localHeaderOffset=p.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");p.skip(x),this.readExtraFields(p),this.parseZIP64ExtraField(p),this.fileComment=p.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var p=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),p==0&&(this.dosPermissions=63&this.externalFileAttributes),p==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var p=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=p.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=p.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=p.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=p.readInt(4))}},readExtraFields:function(p){var x,g,m,h=p.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});p.index+4<h;)x=p.readInt(2),g=p.readInt(2),m=p.readData(g),this.extraFields[x]={id:x,length:g,value:m};p.setIndex(h)},handleUTF8:function(){var p=f.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=u.utf8decode(this.fileName),this.fileCommentStr=u.utf8decode(this.fileComment);else{var x=this.findExtraFieldUnicodePath();if(x!==null)this.fileNameStr=x;else{var g=o.transformTo(p,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var h=o.transformTo(p,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(h)}}},findExtraFieldUnicodePath:function(){var p=this.extraFields[28789];if(p){var x=s(p.value);return x.readInt(1)!==1||l(this.fileName)!==x.readInt(4)?null:u.utf8decode(x.readData(p.length-5))}return null},findExtraFieldUnicodeComment:function(){var p=this.extraFields[25461];if(p){var x=s(p.value);return x.readInt(1)!==1||l(this.fileComment)!==x.readInt(4)?null:u.utf8decode(x.readData(p.length-5))}return null}},i.exports=d},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,i,r){function s(x,g,m){this.name=x,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=g,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var o=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),l=e("./utf8"),u=e("./compressedObject"),c=e("./stream/GenericWorker");s.prototype={internalStream:function(x){var g=null,m="string";try{if(!x)throw new Error("No output type specified.");var h=(m=x.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),g=this._decompressWorker();var y=!this._dataBinary;y&&!h&&(g=g.pipe(new l.Utf8EncodeWorker)),!y&&h&&(g=g.pipe(new l.Utf8DecodeWorker))}catch(v){(g=new c("error")).error(v)}return new o(g,m,"")},async:function(x,g){return this.internalStream(x).accumulate(g)},nodeStream:function(x,g){return this.internalStream(x||"nodebuffer").toNodejsStream(g)},_compressWorker:function(x,g){if(this._data instanceof u&&this._data.compression.magic===x.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new l.Utf8EncodeWorker)),u.createWorkerFrom(m,x,g)},_decompressWorker:function(){return this._data instanceof u?this._data.getContentWorker():this._data instanceof c?this._data:new a(this._data)}};for(var f=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],d=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},p=0;p<f.length;p++)s.prototype[f[p]]=d;i.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,i,r){(function(s){var o,a,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var u=0,c=new l(x),f=s.document.createTextNode("");c.observe(f,{characterData:!0}),o=function(){f.data=u=++u%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var g=s.document.createElement("script");g.onreadystatechange=function(){x(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},s.document.documentElement.appendChild(g)}:function(){setTimeout(x,0)};else{var d=new s.MessageChannel;d.port1.onmessage=x,o=function(){d.port2.postMessage(0)}}var p=[];function x(){var g,m;a=!0;for(var h=p.length;h;){for(m=p,p=[],g=-1;++g<h;)m[g]();h=p.length}a=!1}i.exports=function(g){p.push(g)!==1||a||o()}}).call(this,typeof na<"u"?na:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,i,r){var s=e("immediate");function o(){}var a={},l=["REJECTED"],u=["FULFILLED"],c=["PENDING"];function f(h){if(typeof h!="function")throw new TypeError("resolver must be a function");this.state=c,this.queue=[],this.outcome=void 0,h!==o&&g(this,h)}function d(h,y,v){this.promise=h,typeof y=="function"&&(this.onFulfilled=y,this.callFulfilled=this.otherCallFulfilled),typeof v=="function"&&(this.onRejected=v,this.callRejected=this.otherCallRejected)}function p(h,y,v){s(function(){var S;try{S=y(v)}catch(w){return a.reject(h,w)}S===h?a.reject(h,new TypeError("Cannot resolve promise with itself")):a.resolve(h,S)})}function x(h){var y=h&&h.then;if(h&&(typeof h=="object"||typeof h=="function")&&typeof y=="function")return function(){y.apply(h,arguments)}}function g(h,y){var v=!1;function S(C){v||(v=!0,a.reject(h,C))}function w(C){v||(v=!0,a.resolve(h,C))}var L=m(function(){y(w,S)});L.status==="error"&&S(L.value)}function m(h,y){var v={};try{v.value=h(y),v.status="success"}catch(S){v.status="error",v.value=S}return v}(i.exports=f).prototype.finally=function(h){if(typeof h!="function")return this;var y=this.constructor;return this.then(function(v){return y.resolve(h()).then(function(){return v})},function(v){return y.resolve(h()).then(function(){throw v})})},f.prototype.catch=function(h){return this.then(null,h)},f.prototype.then=function(h,y){if(typeof h!="function"&&this.state===u||typeof y!="function"&&this.state===l)return this;var v=new this.constructor(o);return this.state!==c?p(v,this.state===u?h:y,this.outcome):this.queue.push(new d(v,h,y)),v},d.prototype.callFulfilled=function(h){a.resolve(this.promise,h)},d.prototype.otherCallFulfilled=function(h){p(this.promise,this.onFulfilled,h)},d.prototype.callRejected=function(h){a.reject(this.promise,h)},d.prototype.otherCallRejected=function(h){p(this.promise,this.onRejected,h)},a.resolve=function(h,y){var v=m(x,y);if(v.status==="error")return a.reject(h,v.value);var S=v.value;if(S)g(h,S);else{h.state=u,h.outcome=y;for(var w=-1,L=h.queue.length;++w<L;)h.queue[w].callFulfilled(y)}return h},a.reject=function(h,y){h.state=l,h.outcome=y;for(var v=-1,S=h.queue.length;++v<S;)h.queue[v].callRejected(y);return h},f.resolve=function(h){return h instanceof this?h:a.resolve(new this(o),h)},f.reject=function(h){var y=new this(o);return a.reject(y,h)},f.all=function(h){var y=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var v=h.length,S=!1;if(!v)return this.resolve([]);for(var w=new Array(v),L=0,C=-1,z=new this(o);++C<v;)G(h[C],C);return z;function G(T,N){y.resolve(T).then(function(I){w[N]=I,++L!==v||S||(S=!0,a.resolve(z,w))},function(I){S||(S=!0,a.reject(z,I))})}},f.race=function(h){var y=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var v=h.length,S=!1;if(!v)return this.resolve([]);for(var w=-1,L=new this(o);++w<v;)C=h[w],y.resolve(C).then(function(z){S||(S=!0,a.resolve(L,z))},function(z){S||(S=!0,a.reject(L,z))});var C;return L}},{immediate:36}],38:[function(e,i,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),i.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,i,r){var s=e("./zlib/deflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/messages"),u=e("./zlib/zstream"),c=Object.prototype.toString,f=0,d=-1,p=0,x=8;function g(h){if(!(this instanceof g))return new g(h);this.options=o.assign({level:d,method:x,chunkSize:16384,windowBits:15,memLevel:8,strategy:p,to:""},h||{});var y=this.options;y.raw&&0<y.windowBits?y.windowBits=-y.windowBits:y.gzip&&0<y.windowBits&&y.windowBits<16&&(y.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var v=s.deflateInit2(this.strm,y.level,y.method,y.windowBits,y.memLevel,y.strategy);if(v!==f)throw new Error(l[v]);if(y.header&&s.deflateSetHeader(this.strm,y.header),y.dictionary){var S;if(S=typeof y.dictionary=="string"?a.string2buf(y.dictionary):c.call(y.dictionary)==="[object ArrayBuffer]"?new Uint8Array(y.dictionary):y.dictionary,(v=s.deflateSetDictionary(this.strm,S))!==f)throw new Error(l[v]);this._dict_set=!0}}function m(h,y){var v=new g(y);if(v.push(h,!0),v.err)throw v.msg||l[v.err];return v.result}g.prototype.push=function(h,y){var v,S,w=this.strm,L=this.options.chunkSize;if(this.ended)return!1;S=y===~~y?y:y===!0?4:0,typeof h=="string"?w.input=a.string2buf(h):c.call(h)==="[object ArrayBuffer]"?w.input=new Uint8Array(h):w.input=h,w.next_in=0,w.avail_in=w.input.length;do{if(w.avail_out===0&&(w.output=new o.Buf8(L),w.next_out=0,w.avail_out=L),(v=s.deflate(w,S))!==1&&v!==f)return this.onEnd(v),!(this.ended=!0);w.avail_out!==0&&(w.avail_in!==0||S!==4&&S!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(w.output,w.next_out))):this.onData(o.shrinkBuf(w.output,w.next_out)))}while((0<w.avail_in||w.avail_out===0)&&v!==1);return S===4?(v=s.deflateEnd(this.strm),this.onEnd(v),this.ended=!0,v===f):S!==2||(this.onEnd(f),!(w.avail_out=0))},g.prototype.onData=function(h){this.chunks.push(h)},g.prototype.onEnd=function(h){h===f&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},r.Deflate=g,r.deflate=m,r.deflateRaw=function(h,y){return(y=y||{}).raw=!0,m(h,y)},r.gzip=function(h,y){return(y=y||{}).gzip=!0,m(h,y)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,i,r){var s=e("./zlib/inflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/constants"),u=e("./zlib/messages"),c=e("./zlib/zstream"),f=e("./zlib/gzheader"),d=Object.prototype.toString;function p(g){if(!(this instanceof p))return new p(g);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},g||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||g&&g.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&!(15&m.windowBits)&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var h=s.inflateInit2(this.strm,m.windowBits);if(h!==l.Z_OK)throw new Error(u[h]);this.header=new f,s.inflateGetHeader(this.strm,this.header)}function x(g,m){var h=new p(m);if(h.push(g,!0),h.err)throw h.msg||u[h.err];return h.result}p.prototype.push=function(g,m){var h,y,v,S,w,L,C=this.strm,z=this.options.chunkSize,G=this.options.dictionary,T=!1;if(this.ended)return!1;y=m===~~m?m:m===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof g=="string"?C.input=a.binstring2buf(g):d.call(g)==="[object ArrayBuffer]"?C.input=new Uint8Array(g):C.input=g,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new o.Buf8(z),C.next_out=0,C.avail_out=z),(h=s.inflate(C,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&G&&(L=typeof G=="string"?a.string2buf(G):d.call(G)==="[object ArrayBuffer]"?new Uint8Array(G):G,h=s.inflateSetDictionary(this.strm,L)),h===l.Z_BUF_ERROR&&T===!0&&(h=l.Z_OK,T=!1),h!==l.Z_STREAM_END&&h!==l.Z_OK)return this.onEnd(h),!(this.ended=!0);C.next_out&&(C.avail_out!==0&&h!==l.Z_STREAM_END&&(C.avail_in!==0||y!==l.Z_FINISH&&y!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(v=a.utf8border(C.output,C.next_out),S=C.next_out-v,w=a.buf2string(C.output,v),C.next_out=S,C.avail_out=z-S,S&&o.arraySet(C.output,C.output,v,S,0),this.onData(w)):this.onData(o.shrinkBuf(C.output,C.next_out)))),C.avail_in===0&&C.avail_out===0&&(T=!0)}while((0<C.avail_in||C.avail_out===0)&&h!==l.Z_STREAM_END);return h===l.Z_STREAM_END&&(y=l.Z_FINISH),y===l.Z_FINISH?(h=s.inflateEnd(this.strm),this.onEnd(h),this.ended=!0,h===l.Z_OK):y!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(C.avail_out=0))},p.prototype.onData=function(g){this.chunks.push(g)},p.prototype.onEnd=function(g){g===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},r.Inflate=p,r.inflate=x,r.inflateRaw=function(g,m){return(m=m||{}).raw=!0,x(g,m)},r.ungzip=x},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,i,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var u=Array.prototype.slice.call(arguments,1);u.length;){var c=u.shift();if(c){if(typeof c!="object")throw new TypeError(c+"must be non-object");for(var f in c)c.hasOwnProperty(f)&&(l[f]=c[f])}}return l},r.shrinkBuf=function(l,u){return l.length===u?l:l.subarray?l.subarray(0,u):(l.length=u,l)};var o={arraySet:function(l,u,c,f,d){if(u.subarray&&l.subarray)l.set(u.subarray(c,c+f),d);else for(var p=0;p<f;p++)l[d+p]=u[c+p]},flattenChunks:function(l){var u,c,f,d,p,x;for(u=f=0,c=l.length;u<c;u++)f+=l[u].length;for(x=new Uint8Array(f),u=d=0,c=l.length;u<c;u++)p=l[u],x.set(p,d),d+=p.length;return x}},a={arraySet:function(l,u,c,f,d){for(var p=0;p<f;p++)l[d+p]=u[c+p]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,o)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(s)},{}],42:[function(e,i,r){var s=e("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new s.Buf8(256),u=0;u<256;u++)l[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;function c(f,d){if(d<65537&&(f.subarray&&a||!f.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(f,d));for(var p="",x=0;x<d;x++)p+=String.fromCharCode(f[x]);return p}l[254]=l[254]=1,r.string2buf=function(f){var d,p,x,g,m,h=f.length,y=0;for(g=0;g<h;g++)(64512&(p=f.charCodeAt(g)))==55296&&g+1<h&&(64512&(x=f.charCodeAt(g+1)))==56320&&(p=65536+(p-55296<<10)+(x-56320),g++),y+=p<128?1:p<2048?2:p<65536?3:4;for(d=new s.Buf8(y),g=m=0;m<y;g++)(64512&(p=f.charCodeAt(g)))==55296&&g+1<h&&(64512&(x=f.charCodeAt(g+1)))==56320&&(p=65536+(p-55296<<10)+(x-56320),g++),p<128?d[m++]=p:(p<2048?d[m++]=192|p>>>6:(p<65536?d[m++]=224|p>>>12:(d[m++]=240|p>>>18,d[m++]=128|p>>>12&63),d[m++]=128|p>>>6&63),d[m++]=128|63&p);return d},r.buf2binstring=function(f){return c(f,f.length)},r.binstring2buf=function(f){for(var d=new s.Buf8(f.length),p=0,x=d.length;p<x;p++)d[p]=f.charCodeAt(p);return d},r.buf2string=function(f,d){var p,x,g,m,h=d||f.length,y=new Array(2*h);for(p=x=0;p<h;)if((g=f[p++])<128)y[x++]=g;else if(4<(m=l[g]))y[x++]=65533,p+=m-1;else{for(g&=m===2?31:m===3?15:7;1<m&&p<h;)g=g<<6|63&f[p++],m--;1<m?y[x++]=65533:g<65536?y[x++]=g:(g-=65536,y[x++]=55296|g>>10&1023,y[x++]=56320|1023&g)}return c(y,x)},r.utf8border=function(f,d){var p;for((d=d||f.length)>f.length&&(d=f.length),p=d-1;0<=p&&(192&f[p])==128;)p--;return p<0||p===0?d:p+l[f[p]]>d?p:d}},{"./common":41}],43:[function(e,i,r){i.exports=function(s,o,a,l){for(var u=65535&s|0,c=s>>>16&65535|0,f=0;a!==0;){for(a-=f=2e3<a?2e3:a;c=c+(u=u+o[l++]|0)|0,--f;);u%=65521,c%=65521}return u|c<<16|0}},{}],44:[function(e,i,r){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,i,r){var s=function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var u=0;u<8;u++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a}();i.exports=function(o,a,l,u){var c=s,f=u+l;o^=-1;for(var d=u;d<f;d++)o=o>>>8^c[255&(o^a[d])];return-1^o}},{}],46:[function(e,i,r){var s,o=e("../utils/common"),a=e("./trees"),l=e("./adler32"),u=e("./crc32"),c=e("./messages"),f=0,d=4,p=0,x=-2,g=-1,m=4,h=2,y=8,v=9,S=286,w=30,L=19,C=2*S+1,z=15,G=3,T=258,N=T+G+1,I=42,F=113,b=1,q=2,W=3,K=4;function at(_,O){return _.msg=c[O],O}function nt(_){return(_<<1)-(4<_?9:0)}function ct(_){for(var O=_.length;0<=--O;)_[O]=0}function Q(_){var O=_.state,k=O.pending;k>_.avail_out&&(k=_.avail_out),k!==0&&(o.arraySet(_.output,O.pending_buf,O.pending_out,k,_.next_out),_.next_out+=k,O.pending_out+=k,_.total_out+=k,_.avail_out-=k,O.pending-=k,O.pending===0&&(O.pending_out=0))}function Z(_,O){a._tr_flush_block(_,0<=_.block_start?_.block_start:-1,_.strstart-_.block_start,O),_.block_start=_.strstart,Q(_.strm)}function _t(_,O){_.pending_buf[_.pending++]=O}function rt(_,O){_.pending_buf[_.pending++]=O>>>8&255,_.pending_buf[_.pending++]=255&O}function U(_,O){var k,R,P=_.max_chain_length,B=_.strstart,Y=_.prev_length,A=_.nice_match,E=_.strstart>_.w_size-N?_.strstart-(_.w_size-N):0,X=_.window,tt=_.w_mask,et=_.prev,ot=_.strstart+T,bt=X[B+Y-1],xt=X[B+Y];_.prev_length>=_.good_match&&(P>>=2),A>_.lookahead&&(A=_.lookahead);do if(X[(k=O)+Y]===xt&&X[k+Y-1]===bt&&X[k]===X[B]&&X[++k]===X[B+1]){B+=2,k++;do;while(X[++B]===X[++k]&&X[++B]===X[++k]&&X[++B]===X[++k]&&X[++B]===X[++k]&&X[++B]===X[++k]&&X[++B]===X[++k]&&X[++B]===X[++k]&&X[++B]===X[++k]&&B<ot);if(R=T-(ot-B),B=ot-T,Y<R){if(_.match_start=O,A<=(Y=R))break;bt=X[B+Y-1],xt=X[B+Y]}}while((O=et[O&tt])>E&&--P!=0);return Y<=_.lookahead?Y:_.lookahead}function J(_){var O,k,R,P,B,Y,A,E,X,tt,et=_.w_size;do{if(P=_.window_size-_.lookahead-_.strstart,_.strstart>=et+(et-N)){for(o.arraySet(_.window,_.window,et,et,0),_.match_start-=et,_.strstart-=et,_.block_start-=et,O=k=_.hash_size;R=_.head[--O],_.head[O]=et<=R?R-et:0,--k;);for(O=k=et;R=_.prev[--O],_.prev[O]=et<=R?R-et:0,--k;);P+=et}if(_.strm.avail_in===0)break;if(Y=_.strm,A=_.window,E=_.strstart+_.lookahead,X=P,tt=void 0,tt=Y.avail_in,X<tt&&(tt=X),k=tt===0?0:(Y.avail_in-=tt,o.arraySet(A,Y.input,Y.next_in,tt,E),Y.state.wrap===1?Y.adler=l(Y.adler,A,tt,E):Y.state.wrap===2&&(Y.adler=u(Y.adler,A,tt,E)),Y.next_in+=tt,Y.total_in+=tt,tt),_.lookahead+=k,_.lookahead+_.insert>=G)for(B=_.strstart-_.insert,_.ins_h=_.window[B],_.ins_h=(_.ins_h<<_.hash_shift^_.window[B+1])&_.hash_mask;_.insert&&(_.ins_h=(_.ins_h<<_.hash_shift^_.window[B+G-1])&_.hash_mask,_.prev[B&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=B,B++,_.insert--,!(_.lookahead+_.insert<G)););}while(_.lookahead<N&&_.strm.avail_in!==0)}function H(_,O){for(var k,R;;){if(_.lookahead<N){if(J(_),_.lookahead<N&&O===f)return b;if(_.lookahead===0)break}if(k=0,_.lookahead>=G&&(_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+G-1])&_.hash_mask,k=_.prev[_.strstart&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=_.strstart),k!==0&&_.strstart-k<=_.w_size-N&&(_.match_length=U(_,k)),_.match_length>=G)if(R=a._tr_tally(_,_.strstart-_.match_start,_.match_length-G),_.lookahead-=_.match_length,_.match_length<=_.max_lazy_match&&_.lookahead>=G){for(_.match_length--;_.strstart++,_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+G-1])&_.hash_mask,k=_.prev[_.strstart&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=_.strstart,--_.match_length!=0;);_.strstart++}else _.strstart+=_.match_length,_.match_length=0,_.ins_h=_.window[_.strstart],_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+1])&_.hash_mask;else R=a._tr_tally(_,0,_.window[_.strstart]),_.lookahead--,_.strstart++;if(R&&(Z(_,!1),_.strm.avail_out===0))return b}return _.insert=_.strstart<G-1?_.strstart:G-1,O===d?(Z(_,!0),_.strm.avail_out===0?W:K):_.last_lit&&(Z(_,!1),_.strm.avail_out===0)?b:q}function it(_,O){for(var k,R,P;;){if(_.lookahead<N){if(J(_),_.lookahead<N&&O===f)return b;if(_.lookahead===0)break}if(k=0,_.lookahead>=G&&(_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+G-1])&_.hash_mask,k=_.prev[_.strstart&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=_.strstart),_.prev_length=_.match_length,_.prev_match=_.match_start,_.match_length=G-1,k!==0&&_.prev_length<_.max_lazy_match&&_.strstart-k<=_.w_size-N&&(_.match_length=U(_,k),_.match_length<=5&&(_.strategy===1||_.match_length===G&&4096<_.strstart-_.match_start)&&(_.match_length=G-1)),_.prev_length>=G&&_.match_length<=_.prev_length){for(P=_.strstart+_.lookahead-G,R=a._tr_tally(_,_.strstart-1-_.prev_match,_.prev_length-G),_.lookahead-=_.prev_length-1,_.prev_length-=2;++_.strstart<=P&&(_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+G-1])&_.hash_mask,k=_.prev[_.strstart&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=_.strstart),--_.prev_length!=0;);if(_.match_available=0,_.match_length=G-1,_.strstart++,R&&(Z(_,!1),_.strm.avail_out===0))return b}else if(_.match_available){if((R=a._tr_tally(_,0,_.window[_.strstart-1]))&&Z(_,!1),_.strstart++,_.lookahead--,_.strm.avail_out===0)return b}else _.match_available=1,_.strstart++,_.lookahead--}return _.match_available&&(R=a._tr_tally(_,0,_.window[_.strstart-1]),_.match_available=0),_.insert=_.strstart<G-1?_.strstart:G-1,O===d?(Z(_,!0),_.strm.avail_out===0?W:K):_.last_lit&&(Z(_,!1),_.strm.avail_out===0)?b:q}function st(_,O,k,R,P){this.good_length=_,this.max_lazy=O,this.nice_length=k,this.max_chain=R,this.func=P}function dt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=y,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*C),this.dyn_dtree=new o.Buf16(2*(2*w+1)),this.bl_tree=new o.Buf16(2*(2*L+1)),ct(this.dyn_ltree),ct(this.dyn_dtree),ct(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(z+1),this.heap=new o.Buf16(2*S+1),ct(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*S+1),ct(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function j(_){var O;return _&&_.state?(_.total_in=_.total_out=0,_.data_type=h,(O=_.state).pending=0,O.pending_out=0,O.wrap<0&&(O.wrap=-O.wrap),O.status=O.wrap?I:F,_.adler=O.wrap===2?0:1,O.last_flush=f,a._tr_init(O),p):at(_,x)}function M(_){var O=j(_);return O===p&&function(k){k.window_size=2*k.w_size,ct(k.head),k.max_lazy_match=s[k.level].max_lazy,k.good_match=s[k.level].good_length,k.nice_match=s[k.level].nice_length,k.max_chain_length=s[k.level].max_chain,k.strstart=0,k.block_start=0,k.lookahead=0,k.insert=0,k.match_length=k.prev_length=G-1,k.match_available=0,k.ins_h=0}(_.state),O}function D(_,O,k,R,P,B){if(!_)return x;var Y=1;if(O===g&&(O=6),R<0?(Y=0,R=-R):15<R&&(Y=2,R-=16),P<1||v<P||k!==y||R<8||15<R||O<0||9<O||B<0||m<B)return at(_,x);R===8&&(R=9);var A=new dt;return(_.state=A).strm=_,A.wrap=Y,A.gzhead=null,A.w_bits=R,A.w_size=1<<A.w_bits,A.w_mask=A.w_size-1,A.hash_bits=P+7,A.hash_size=1<<A.hash_bits,A.hash_mask=A.hash_size-1,A.hash_shift=~~((A.hash_bits+G-1)/G),A.window=new o.Buf8(2*A.w_size),A.head=new o.Buf16(A.hash_size),A.prev=new o.Buf16(A.w_size),A.lit_bufsize=1<<P+6,A.pending_buf_size=4*A.lit_bufsize,A.pending_buf=new o.Buf8(A.pending_buf_size),A.d_buf=1*A.lit_bufsize,A.l_buf=3*A.lit_bufsize,A.level=O,A.strategy=B,A.method=k,M(_)}s=[new st(0,0,0,0,function(_,O){var k=65535;for(k>_.pending_buf_size-5&&(k=_.pending_buf_size-5);;){if(_.lookahead<=1){if(J(_),_.lookahead===0&&O===f)return b;if(_.lookahead===0)break}_.strstart+=_.lookahead,_.lookahead=0;var R=_.block_start+k;if((_.strstart===0||_.strstart>=R)&&(_.lookahead=_.strstart-R,_.strstart=R,Z(_,!1),_.strm.avail_out===0)||_.strstart-_.block_start>=_.w_size-N&&(Z(_,!1),_.strm.avail_out===0))return b}return _.insert=0,O===d?(Z(_,!0),_.strm.avail_out===0?W:K):(_.strstart>_.block_start&&(Z(_,!1),_.strm.avail_out),b)}),new st(4,4,8,4,H),new st(4,5,16,8,H),new st(4,6,32,32,H),new st(4,4,16,16,it),new st(8,16,32,32,it),new st(8,16,128,128,it),new st(8,32,128,256,it),new st(32,128,258,1024,it),new st(32,258,258,4096,it)],r.deflateInit=function(_,O){return D(_,O,y,15,8,0)},r.deflateInit2=D,r.deflateReset=M,r.deflateResetKeep=j,r.deflateSetHeader=function(_,O){return _&&_.state?_.state.wrap!==2?x:(_.state.gzhead=O,p):x},r.deflate=function(_,O){var k,R,P,B;if(!_||!_.state||5<O||O<0)return _?at(_,x):x;if(R=_.state,!_.output||!_.input&&_.avail_in!==0||R.status===666&&O!==d)return at(_,_.avail_out===0?-5:x);if(R.strm=_,k=R.last_flush,R.last_flush=O,R.status===I)if(R.wrap===2)_.adler=0,_t(R,31),_t(R,139),_t(R,8),R.gzhead?(_t(R,(R.gzhead.text?1:0)+(R.gzhead.hcrc?2:0)+(R.gzhead.extra?4:0)+(R.gzhead.name?8:0)+(R.gzhead.comment?16:0)),_t(R,255&R.gzhead.time),_t(R,R.gzhead.time>>8&255),_t(R,R.gzhead.time>>16&255),_t(R,R.gzhead.time>>24&255),_t(R,R.level===9?2:2<=R.strategy||R.level<2?4:0),_t(R,255&R.gzhead.os),R.gzhead.extra&&R.gzhead.extra.length&&(_t(R,255&R.gzhead.extra.length),_t(R,R.gzhead.extra.length>>8&255)),R.gzhead.hcrc&&(_.adler=u(_.adler,R.pending_buf,R.pending,0)),R.gzindex=0,R.status=69):(_t(R,0),_t(R,0),_t(R,0),_t(R,0),_t(R,0),_t(R,R.level===9?2:2<=R.strategy||R.level<2?4:0),_t(R,3),R.status=F);else{var Y=y+(R.w_bits-8<<4)<<8;Y|=(2<=R.strategy||R.level<2?0:R.level<6?1:R.level===6?2:3)<<6,R.strstart!==0&&(Y|=32),Y+=31-Y%31,R.status=F,rt(R,Y),R.strstart!==0&&(rt(R,_.adler>>>16),rt(R,65535&_.adler)),_.adler=1}if(R.status===69)if(R.gzhead.extra){for(P=R.pending;R.gzindex<(65535&R.gzhead.extra.length)&&(R.pending!==R.pending_buf_size||(R.gzhead.hcrc&&R.pending>P&&(_.adler=u(_.adler,R.pending_buf,R.pending-P,P)),Q(_),P=R.pending,R.pending!==R.pending_buf_size));)_t(R,255&R.gzhead.extra[R.gzindex]),R.gzindex++;R.gzhead.hcrc&&R.pending>P&&(_.adler=u(_.adler,R.pending_buf,R.pending-P,P)),R.gzindex===R.gzhead.extra.length&&(R.gzindex=0,R.status=73)}else R.status=73;if(R.status===73)if(R.gzhead.name){P=R.pending;do{if(R.pending===R.pending_buf_size&&(R.gzhead.hcrc&&R.pending>P&&(_.adler=u(_.adler,R.pending_buf,R.pending-P,P)),Q(_),P=R.pending,R.pending===R.pending_buf_size)){B=1;break}B=R.gzindex<R.gzhead.name.length?255&R.gzhead.name.charCodeAt(R.gzindex++):0,_t(R,B)}while(B!==0);R.gzhead.hcrc&&R.pending>P&&(_.adler=u(_.adler,R.pending_buf,R.pending-P,P)),B===0&&(R.gzindex=0,R.status=91)}else R.status=91;if(R.status===91)if(R.gzhead.comment){P=R.pending;do{if(R.pending===R.pending_buf_size&&(R.gzhead.hcrc&&R.pending>P&&(_.adler=u(_.adler,R.pending_buf,R.pending-P,P)),Q(_),P=R.pending,R.pending===R.pending_buf_size)){B=1;break}B=R.gzindex<R.gzhead.comment.length?255&R.gzhead.comment.charCodeAt(R.gzindex++):0,_t(R,B)}while(B!==0);R.gzhead.hcrc&&R.pending>P&&(_.adler=u(_.adler,R.pending_buf,R.pending-P,P)),B===0&&(R.status=103)}else R.status=103;if(R.status===103&&(R.gzhead.hcrc?(R.pending+2>R.pending_buf_size&&Q(_),R.pending+2<=R.pending_buf_size&&(_t(R,255&_.adler),_t(R,_.adler>>8&255),_.adler=0,R.status=F)):R.status=F),R.pending!==0){if(Q(_),_.avail_out===0)return R.last_flush=-1,p}else if(_.avail_in===0&&nt(O)<=nt(k)&&O!==d)return at(_,-5);if(R.status===666&&_.avail_in!==0)return at(_,-5);if(_.avail_in!==0||R.lookahead!==0||O!==f&&R.status!==666){var A=R.strategy===2?function(E,X){for(var tt;;){if(E.lookahead===0&&(J(E),E.lookahead===0)){if(X===f)return b;break}if(E.match_length=0,tt=a._tr_tally(E,0,E.window[E.strstart]),E.lookahead--,E.strstart++,tt&&(Z(E,!1),E.strm.avail_out===0))return b}return E.insert=0,X===d?(Z(E,!0),E.strm.avail_out===0?W:K):E.last_lit&&(Z(E,!1),E.strm.avail_out===0)?b:q}(R,O):R.strategy===3?function(E,X){for(var tt,et,ot,bt,xt=E.window;;){if(E.lookahead<=T){if(J(E),E.lookahead<=T&&X===f)return b;if(E.lookahead===0)break}if(E.match_length=0,E.lookahead>=G&&0<E.strstart&&(et=xt[ot=E.strstart-1])===xt[++ot]&&et===xt[++ot]&&et===xt[++ot]){bt=E.strstart+T;do;while(et===xt[++ot]&&et===xt[++ot]&&et===xt[++ot]&&et===xt[++ot]&&et===xt[++ot]&&et===xt[++ot]&&et===xt[++ot]&&et===xt[++ot]&&ot<bt);E.match_length=T-(bt-ot),E.match_length>E.lookahead&&(E.match_length=E.lookahead)}if(E.match_length>=G?(tt=a._tr_tally(E,1,E.match_length-G),E.lookahead-=E.match_length,E.strstart+=E.match_length,E.match_length=0):(tt=a._tr_tally(E,0,E.window[E.strstart]),E.lookahead--,E.strstart++),tt&&(Z(E,!1),E.strm.avail_out===0))return b}return E.insert=0,X===d?(Z(E,!0),E.strm.avail_out===0?W:K):E.last_lit&&(Z(E,!1),E.strm.avail_out===0)?b:q}(R,O):s[R.level].func(R,O);if(A!==W&&A!==K||(R.status=666),A===b||A===W)return _.avail_out===0&&(R.last_flush=-1),p;if(A===q&&(O===1?a._tr_align(R):O!==5&&(a._tr_stored_block(R,0,0,!1),O===3&&(ct(R.head),R.lookahead===0&&(R.strstart=0,R.block_start=0,R.insert=0))),Q(_),_.avail_out===0))return R.last_flush=-1,p}return O!==d?p:R.wrap<=0?1:(R.wrap===2?(_t(R,255&_.adler),_t(R,_.adler>>8&255),_t(R,_.adler>>16&255),_t(R,_.adler>>24&255),_t(R,255&_.total_in),_t(R,_.total_in>>8&255),_t(R,_.total_in>>16&255),_t(R,_.total_in>>24&255)):(rt(R,_.adler>>>16),rt(R,65535&_.adler)),Q(_),0<R.wrap&&(R.wrap=-R.wrap),R.pending!==0?p:1)},r.deflateEnd=function(_){var O;return _&&_.state?(O=_.state.status)!==I&&O!==69&&O!==73&&O!==91&&O!==103&&O!==F&&O!==666?at(_,x):(_.state=null,O===F?at(_,-3):p):x},r.deflateSetDictionary=function(_,O){var k,R,P,B,Y,A,E,X,tt=O.length;if(!_||!_.state||(B=(k=_.state).wrap)===2||B===1&&k.status!==I||k.lookahead)return x;for(B===1&&(_.adler=l(_.adler,O,tt,0)),k.wrap=0,tt>=k.w_size&&(B===0&&(ct(k.head),k.strstart=0,k.block_start=0,k.insert=0),X=new o.Buf8(k.w_size),o.arraySet(X,O,tt-k.w_size,k.w_size,0),O=X,tt=k.w_size),Y=_.avail_in,A=_.next_in,E=_.input,_.avail_in=tt,_.next_in=0,_.input=O,J(k);k.lookahead>=G;){for(R=k.strstart,P=k.lookahead-(G-1);k.ins_h=(k.ins_h<<k.hash_shift^k.window[R+G-1])&k.hash_mask,k.prev[R&k.w_mask]=k.head[k.ins_h],k.head[k.ins_h]=R,R++,--P;);k.strstart=R,k.lookahead=G-1,J(k)}return k.strstart+=k.lookahead,k.block_start=k.strstart,k.insert=k.lookahead,k.lookahead=0,k.match_length=k.prev_length=G-1,k.match_available=0,_.next_in=A,_.input=E,_.avail_in=Y,k.wrap=B,p},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,i,r){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,i,r){i.exports=function(s,o){var a,l,u,c,f,d,p,x,g,m,h,y,v,S,w,L,C,z,G,T,N,I,F,b,q;a=s.state,l=s.next_in,b=s.input,u=l+(s.avail_in-5),c=s.next_out,q=s.output,f=c-(o-s.avail_out),d=c+(s.avail_out-257),p=a.dmax,x=a.wsize,g=a.whave,m=a.wnext,h=a.window,y=a.hold,v=a.bits,S=a.lencode,w=a.distcode,L=(1<<a.lenbits)-1,C=(1<<a.distbits)-1;t:do{v<15&&(y+=b[l++]<<v,v+=8,y+=b[l++]<<v,v+=8),z=S[y&L];e:for(;;){if(y>>>=G=z>>>24,v-=G,(G=z>>>16&255)===0)q[c++]=65535&z;else{if(!(16&G)){if(!(64&G)){z=S[(65535&z)+(y&(1<<G)-1)];continue e}if(32&G){a.mode=12;break t}s.msg="invalid literal/length code",a.mode=30;break t}T=65535&z,(G&=15)&&(v<G&&(y+=b[l++]<<v,v+=8),T+=y&(1<<G)-1,y>>>=G,v-=G),v<15&&(y+=b[l++]<<v,v+=8,y+=b[l++]<<v,v+=8),z=w[y&C];n:for(;;){if(y>>>=G=z>>>24,v-=G,!(16&(G=z>>>16&255))){if(!(64&G)){z=w[(65535&z)+(y&(1<<G)-1)];continue n}s.msg="invalid distance code",a.mode=30;break t}if(N=65535&z,v<(G&=15)&&(y+=b[l++]<<v,(v+=8)<G&&(y+=b[l++]<<v,v+=8)),p<(N+=y&(1<<G)-1)){s.msg="invalid distance too far back",a.mode=30;break t}if(y>>>=G,v-=G,(G=c-f)<N){if(g<(G=N-G)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break t}if(F=h,(I=0)===m){if(I+=x-G,G<T){for(T-=G;q[c++]=h[I++],--G;);I=c-N,F=q}}else if(m<G){if(I+=x+m-G,(G-=m)<T){for(T-=G;q[c++]=h[I++],--G;);if(I=0,m<T){for(T-=G=m;q[c++]=h[I++],--G;);I=c-N,F=q}}}else if(I+=m-G,G<T){for(T-=G;q[c++]=h[I++],--G;);I=c-N,F=q}for(;2<T;)q[c++]=F[I++],q[c++]=F[I++],q[c++]=F[I++],T-=3;T&&(q[c++]=F[I++],1<T&&(q[c++]=F[I++]))}else{for(I=c-N;q[c++]=q[I++],q[c++]=q[I++],q[c++]=q[I++],2<(T-=3););T&&(q[c++]=q[I++],1<T&&(q[c++]=q[I++]))}break}}break}}while(l<u&&c<d);l-=T=v>>3,y&=(1<<(v-=T<<3))-1,s.next_in=l,s.next_out=c,s.avail_in=l<u?u-l+5:5-(l-u),s.avail_out=c<d?d-c+257:257-(c-d),a.hold=y,a.bits=v}},{}],49:[function(e,i,r){var s=e("../utils/common"),o=e("./adler32"),a=e("./crc32"),l=e("./inffast"),u=e("./inftrees"),c=1,f=2,d=0,p=-2,x=1,g=852,m=592;function h(I){return(I>>>24&255)+(I>>>8&65280)+((65280&I)<<8)+((255&I)<<24)}function y(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function v(I){var F;return I&&I.state?(F=I.state,I.total_in=I.total_out=F.total=0,I.msg="",F.wrap&&(I.adler=1&F.wrap),F.mode=x,F.last=0,F.havedict=0,F.dmax=32768,F.head=null,F.hold=0,F.bits=0,F.lencode=F.lendyn=new s.Buf32(g),F.distcode=F.distdyn=new s.Buf32(m),F.sane=1,F.back=-1,d):p}function S(I){var F;return I&&I.state?((F=I.state).wsize=0,F.whave=0,F.wnext=0,v(I)):p}function w(I,F){var b,q;return I&&I.state?(q=I.state,F<0?(b=0,F=-F):(b=1+(F>>4),F<48&&(F&=15)),F&&(F<8||15<F)?p:(q.window!==null&&q.wbits!==F&&(q.window=null),q.wrap=b,q.wbits=F,S(I))):p}function L(I,F){var b,q;return I?(q=new y,(I.state=q).window=null,(b=w(I,F))!==d&&(I.state=null),b):p}var C,z,G=!0;function T(I){if(G){var F;for(C=new s.Buf32(512),z=new s.Buf32(32),F=0;F<144;)I.lens[F++]=8;for(;F<256;)I.lens[F++]=9;for(;F<280;)I.lens[F++]=7;for(;F<288;)I.lens[F++]=8;for(u(c,I.lens,0,288,C,0,I.work,{bits:9}),F=0;F<32;)I.lens[F++]=5;u(f,I.lens,0,32,z,0,I.work,{bits:5}),G=!1}I.lencode=C,I.lenbits=9,I.distcode=z,I.distbits=5}function N(I,F,b,q){var W,K=I.state;return K.window===null&&(K.wsize=1<<K.wbits,K.wnext=0,K.whave=0,K.window=new s.Buf8(K.wsize)),q>=K.wsize?(s.arraySet(K.window,F,b-K.wsize,K.wsize,0),K.wnext=0,K.whave=K.wsize):(q<(W=K.wsize-K.wnext)&&(W=q),s.arraySet(K.window,F,b-q,W,K.wnext),(q-=W)?(s.arraySet(K.window,F,b-q,q,0),K.wnext=q,K.whave=K.wsize):(K.wnext+=W,K.wnext===K.wsize&&(K.wnext=0),K.whave<K.wsize&&(K.whave+=W))),0}r.inflateReset=S,r.inflateReset2=w,r.inflateResetKeep=v,r.inflateInit=function(I){return L(I,15)},r.inflateInit2=L,r.inflate=function(I,F){var b,q,W,K,at,nt,ct,Q,Z,_t,rt,U,J,H,it,st,dt,j,M,D,_,O,k,R,P=0,B=new s.Buf8(4),Y=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!I||!I.state||!I.output||!I.input&&I.avail_in!==0)return p;(b=I.state).mode===12&&(b.mode=13),at=I.next_out,W=I.output,ct=I.avail_out,K=I.next_in,q=I.input,nt=I.avail_in,Q=b.hold,Z=b.bits,_t=nt,rt=ct,O=d;t:for(;;)switch(b.mode){case x:if(b.wrap===0){b.mode=13;break}for(;Z<16;){if(nt===0)break t;nt--,Q+=q[K++]<<Z,Z+=8}if(2&b.wrap&&Q===35615){B[b.check=0]=255&Q,B[1]=Q>>>8&255,b.check=a(b.check,B,2,0),Z=Q=0,b.mode=2;break}if(b.flags=0,b.head&&(b.head.done=!1),!(1&b.wrap)||(((255&Q)<<8)+(Q>>8))%31){I.msg="incorrect header check",b.mode=30;break}if((15&Q)!=8){I.msg="unknown compression method",b.mode=30;break}if(Z-=4,_=8+(15&(Q>>>=4)),b.wbits===0)b.wbits=_;else if(_>b.wbits){I.msg="invalid window size",b.mode=30;break}b.dmax=1<<_,I.adler=b.check=1,b.mode=512&Q?10:12,Z=Q=0;break;case 2:for(;Z<16;){if(nt===0)break t;nt--,Q+=q[K++]<<Z,Z+=8}if(b.flags=Q,(255&b.flags)!=8){I.msg="unknown compression method",b.mode=30;break}if(57344&b.flags){I.msg="unknown header flags set",b.mode=30;break}b.head&&(b.head.text=Q>>8&1),512&b.flags&&(B[0]=255&Q,B[1]=Q>>>8&255,b.check=a(b.check,B,2,0)),Z=Q=0,b.mode=3;case 3:for(;Z<32;){if(nt===0)break t;nt--,Q+=q[K++]<<Z,Z+=8}b.head&&(b.head.time=Q),512&b.flags&&(B[0]=255&Q,B[1]=Q>>>8&255,B[2]=Q>>>16&255,B[3]=Q>>>24&255,b.check=a(b.check,B,4,0)),Z=Q=0,b.mode=4;case 4:for(;Z<16;){if(nt===0)break t;nt--,Q+=q[K++]<<Z,Z+=8}b.head&&(b.head.xflags=255&Q,b.head.os=Q>>8),512&b.flags&&(B[0]=255&Q,B[1]=Q>>>8&255,b.check=a(b.check,B,2,0)),Z=Q=0,b.mode=5;case 5:if(1024&b.flags){for(;Z<16;){if(nt===0)break t;nt--,Q+=q[K++]<<Z,Z+=8}b.length=Q,b.head&&(b.head.extra_len=Q),512&b.flags&&(B[0]=255&Q,B[1]=Q>>>8&255,b.check=a(b.check,B,2,0)),Z=Q=0}else b.head&&(b.head.extra=null);b.mode=6;case 6:if(1024&b.flags&&(nt<(U=b.length)&&(U=nt),U&&(b.head&&(_=b.head.extra_len-b.length,b.head.extra||(b.head.extra=new Array(b.head.extra_len)),s.arraySet(b.head.extra,q,K,U,_)),512&b.flags&&(b.check=a(b.check,q,U,K)),nt-=U,K+=U,b.length-=U),b.length))break t;b.length=0,b.mode=7;case 7:if(2048&b.flags){if(nt===0)break t;for(U=0;_=q[K+U++],b.head&&_&&b.length<65536&&(b.head.name+=String.fromCharCode(_)),_&&U<nt;);if(512&b.flags&&(b.check=a(b.check,q,U,K)),nt-=U,K+=U,_)break t}else b.head&&(b.head.name=null);b.length=0,b.mode=8;case 8:if(4096&b.flags){if(nt===0)break t;for(U=0;_=q[K+U++],b.head&&_&&b.length<65536&&(b.head.comment+=String.fromCharCode(_)),_&&U<nt;);if(512&b.flags&&(b.check=a(b.check,q,U,K)),nt-=U,K+=U,_)break t}else b.head&&(b.head.comment=null);b.mode=9;case 9:if(512&b.flags){for(;Z<16;){if(nt===0)break t;nt--,Q+=q[K++]<<Z,Z+=8}if(Q!==(65535&b.check)){I.msg="header crc mismatch",b.mode=30;break}Z=Q=0}b.head&&(b.head.hcrc=b.flags>>9&1,b.head.done=!0),I.adler=b.check=0,b.mode=12;break;case 10:for(;Z<32;){if(nt===0)break t;nt--,Q+=q[K++]<<Z,Z+=8}I.adler=b.check=h(Q),Z=Q=0,b.mode=11;case 11:if(b.havedict===0)return I.next_out=at,I.avail_out=ct,I.next_in=K,I.avail_in=nt,b.hold=Q,b.bits=Z,2;I.adler=b.check=1,b.mode=12;case 12:if(F===5||F===6)break t;case 13:if(b.last){Q>>>=7&Z,Z-=7&Z,b.mode=27;break}for(;Z<3;){if(nt===0)break t;nt--,Q+=q[K++]<<Z,Z+=8}switch(b.last=1&Q,Z-=1,3&(Q>>>=1)){case 0:b.mode=14;break;case 1:if(T(b),b.mode=20,F!==6)break;Q>>>=2,Z-=2;break t;case 2:b.mode=17;break;case 3:I.msg="invalid block type",b.mode=30}Q>>>=2,Z-=2;break;case 14:for(Q>>>=7&Z,Z-=7&Z;Z<32;){if(nt===0)break t;nt--,Q+=q[K++]<<Z,Z+=8}if((65535&Q)!=(Q>>>16^65535)){I.msg="invalid stored block lengths",b.mode=30;break}if(b.length=65535&Q,Z=Q=0,b.mode=15,F===6)break t;case 15:b.mode=16;case 16:if(U=b.length){if(nt<U&&(U=nt),ct<U&&(U=ct),U===0)break t;s.arraySet(W,q,K,U,at),nt-=U,K+=U,ct-=U,at+=U,b.length-=U;break}b.mode=12;break;case 17:for(;Z<14;){if(nt===0)break t;nt--,Q+=q[K++]<<Z,Z+=8}if(b.nlen=257+(31&Q),Q>>>=5,Z-=5,b.ndist=1+(31&Q),Q>>>=5,Z-=5,b.ncode=4+(15&Q),Q>>>=4,Z-=4,286<b.nlen||30<b.ndist){I.msg="too many length or distance symbols",b.mode=30;break}b.have=0,b.mode=18;case 18:for(;b.have<b.ncode;){for(;Z<3;){if(nt===0)break t;nt--,Q+=q[K++]<<Z,Z+=8}b.lens[Y[b.have++]]=7&Q,Q>>>=3,Z-=3}for(;b.have<19;)b.lens[Y[b.have++]]=0;if(b.lencode=b.lendyn,b.lenbits=7,k={bits:b.lenbits},O=u(0,b.lens,0,19,b.lencode,0,b.work,k),b.lenbits=k.bits,O){I.msg="invalid code lengths set",b.mode=30;break}b.have=0,b.mode=19;case 19:for(;b.have<b.nlen+b.ndist;){for(;st=(P=b.lencode[Q&(1<<b.lenbits)-1])>>>16&255,dt=65535&P,!((it=P>>>24)<=Z);){if(nt===0)break t;nt--,Q+=q[K++]<<Z,Z+=8}if(dt<16)Q>>>=it,Z-=it,b.lens[b.have++]=dt;else{if(dt===16){for(R=it+2;Z<R;){if(nt===0)break t;nt--,Q+=q[K++]<<Z,Z+=8}if(Q>>>=it,Z-=it,b.have===0){I.msg="invalid bit length repeat",b.mode=30;break}_=b.lens[b.have-1],U=3+(3&Q),Q>>>=2,Z-=2}else if(dt===17){for(R=it+3;Z<R;){if(nt===0)break t;nt--,Q+=q[K++]<<Z,Z+=8}Z-=it,_=0,U=3+(7&(Q>>>=it)),Q>>>=3,Z-=3}else{for(R=it+7;Z<R;){if(nt===0)break t;nt--,Q+=q[K++]<<Z,Z+=8}Z-=it,_=0,U=11+(127&(Q>>>=it)),Q>>>=7,Z-=7}if(b.have+U>b.nlen+b.ndist){I.msg="invalid bit length repeat",b.mode=30;break}for(;U--;)b.lens[b.have++]=_}}if(b.mode===30)break;if(b.lens[256]===0){I.msg="invalid code -- missing end-of-block",b.mode=30;break}if(b.lenbits=9,k={bits:b.lenbits},O=u(c,b.lens,0,b.nlen,b.lencode,0,b.work,k),b.lenbits=k.bits,O){I.msg="invalid literal/lengths set",b.mode=30;break}if(b.distbits=6,b.distcode=b.distdyn,k={bits:b.distbits},O=u(f,b.lens,b.nlen,b.ndist,b.distcode,0,b.work,k),b.distbits=k.bits,O){I.msg="invalid distances set",b.mode=30;break}if(b.mode=20,F===6)break t;case 20:b.mode=21;case 21:if(6<=nt&&258<=ct){I.next_out=at,I.avail_out=ct,I.next_in=K,I.avail_in=nt,b.hold=Q,b.bits=Z,l(I,rt),at=I.next_out,W=I.output,ct=I.avail_out,K=I.next_in,q=I.input,nt=I.avail_in,Q=b.hold,Z=b.bits,b.mode===12&&(b.back=-1);break}for(b.back=0;st=(P=b.lencode[Q&(1<<b.lenbits)-1])>>>16&255,dt=65535&P,!((it=P>>>24)<=Z);){if(nt===0)break t;nt--,Q+=q[K++]<<Z,Z+=8}if(st&&!(240&st)){for(j=it,M=st,D=dt;st=(P=b.lencode[D+((Q&(1<<j+M)-1)>>j)])>>>16&255,dt=65535&P,!(j+(it=P>>>24)<=Z);){if(nt===0)break t;nt--,Q+=q[K++]<<Z,Z+=8}Q>>>=j,Z-=j,b.back+=j}if(Q>>>=it,Z-=it,b.back+=it,b.length=dt,st===0){b.mode=26;break}if(32&st){b.back=-1,b.mode=12;break}if(64&st){I.msg="invalid literal/length code",b.mode=30;break}b.extra=15&st,b.mode=22;case 22:if(b.extra){for(R=b.extra;Z<R;){if(nt===0)break t;nt--,Q+=q[K++]<<Z,Z+=8}b.length+=Q&(1<<b.extra)-1,Q>>>=b.extra,Z-=b.extra,b.back+=b.extra}b.was=b.length,b.mode=23;case 23:for(;st=(P=b.distcode[Q&(1<<b.distbits)-1])>>>16&255,dt=65535&P,!((it=P>>>24)<=Z);){if(nt===0)break t;nt--,Q+=q[K++]<<Z,Z+=8}if(!(240&st)){for(j=it,M=st,D=dt;st=(P=b.distcode[D+((Q&(1<<j+M)-1)>>j)])>>>16&255,dt=65535&P,!(j+(it=P>>>24)<=Z);){if(nt===0)break t;nt--,Q+=q[K++]<<Z,Z+=8}Q>>>=j,Z-=j,b.back+=j}if(Q>>>=it,Z-=it,b.back+=it,64&st){I.msg="invalid distance code",b.mode=30;break}b.offset=dt,b.extra=15&st,b.mode=24;case 24:if(b.extra){for(R=b.extra;Z<R;){if(nt===0)break t;nt--,Q+=q[K++]<<Z,Z+=8}b.offset+=Q&(1<<b.extra)-1,Q>>>=b.extra,Z-=b.extra,b.back+=b.extra}if(b.offset>b.dmax){I.msg="invalid distance too far back",b.mode=30;break}b.mode=25;case 25:if(ct===0)break t;if(U=rt-ct,b.offset>U){if((U=b.offset-U)>b.whave&&b.sane){I.msg="invalid distance too far back",b.mode=30;break}J=U>b.wnext?(U-=b.wnext,b.wsize-U):b.wnext-U,U>b.length&&(U=b.length),H=b.window}else H=W,J=at-b.offset,U=b.length;for(ct<U&&(U=ct),ct-=U,b.length-=U;W[at++]=H[J++],--U;);b.length===0&&(b.mode=21);break;case 26:if(ct===0)break t;W[at++]=b.length,ct--,b.mode=21;break;case 27:if(b.wrap){for(;Z<32;){if(nt===0)break t;nt--,Q|=q[K++]<<Z,Z+=8}if(rt-=ct,I.total_out+=rt,b.total+=rt,rt&&(I.adler=b.check=b.flags?a(b.check,W,rt,at-rt):o(b.check,W,rt,at-rt)),rt=ct,(b.flags?Q:h(Q))!==b.check){I.msg="incorrect data check",b.mode=30;break}Z=Q=0}b.mode=28;case 28:if(b.wrap&&b.flags){for(;Z<32;){if(nt===0)break t;nt--,Q+=q[K++]<<Z,Z+=8}if(Q!==(4294967295&b.total)){I.msg="incorrect length check",b.mode=30;break}Z=Q=0}b.mode=29;case 29:O=1;break t;case 30:O=-3;break t;case 31:return-4;case 32:default:return p}return I.next_out=at,I.avail_out=ct,I.next_in=K,I.avail_in=nt,b.hold=Q,b.bits=Z,(b.wsize||rt!==I.avail_out&&b.mode<30&&(b.mode<27||F!==4))&&N(I,I.output,I.next_out,rt-I.avail_out)?(b.mode=31,-4):(_t-=I.avail_in,rt-=I.avail_out,I.total_in+=_t,I.total_out+=rt,b.total+=rt,b.wrap&&rt&&(I.adler=b.check=b.flags?a(b.check,W,rt,I.next_out-rt):o(b.check,W,rt,I.next_out-rt)),I.data_type=b.bits+(b.last?64:0)+(b.mode===12?128:0)+(b.mode===20||b.mode===15?256:0),(_t==0&&rt===0||F===4)&&O===d&&(O=-5),O)},r.inflateEnd=function(I){if(!I||!I.state)return p;var F=I.state;return F.window&&(F.window=null),I.state=null,d},r.inflateGetHeader=function(I,F){var b;return I&&I.state&&2&(b=I.state).wrap?((b.head=F).done=!1,d):p},r.inflateSetDictionary=function(I,F){var b,q=F.length;return I&&I.state?(b=I.state).wrap!==0&&b.mode!==11?p:b.mode===11&&o(1,F,q,0)!==b.check?-3:N(I,F,q,q)?(b.mode=31,-4):(b.havedict=1,d):p},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,i,r){var s=e("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],u=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(c,f,d,p,x,g,m,h){var y,v,S,w,L,C,z,G,T,N=h.bits,I=0,F=0,b=0,q=0,W=0,K=0,at=0,nt=0,ct=0,Q=0,Z=null,_t=0,rt=new s.Buf16(16),U=new s.Buf16(16),J=null,H=0;for(I=0;I<=15;I++)rt[I]=0;for(F=0;F<p;F++)rt[f[d+F]]++;for(W=N,q=15;1<=q&&rt[q]===0;q--);if(q<W&&(W=q),q===0)return x[g++]=20971520,x[g++]=20971520,h.bits=1,0;for(b=1;b<q&&rt[b]===0;b++);for(W<b&&(W=b),I=nt=1;I<=15;I++)if(nt<<=1,(nt-=rt[I])<0)return-1;if(0<nt&&(c===0||q!==1))return-1;for(U[1]=0,I=1;I<15;I++)U[I+1]=U[I]+rt[I];for(F=0;F<p;F++)f[d+F]!==0&&(m[U[f[d+F]]++]=F);if(C=c===0?(Z=J=m,19):c===1?(Z=o,_t-=257,J=a,H-=257,256):(Z=l,J=u,-1),I=b,L=g,at=F=Q=0,S=-1,w=(ct=1<<(K=W))-1,c===1&&852<ct||c===2&&592<ct)return 1;for(;;){for(z=I-at,T=m[F]<C?(G=0,m[F]):m[F]>C?(G=J[H+m[F]],Z[_t+m[F]]):(G=96,0),y=1<<I-at,b=v=1<<K;x[L+(Q>>at)+(v-=y)]=z<<24|G<<16|T|0,v!==0;);for(y=1<<I-1;Q&y;)y>>=1;if(y!==0?(Q&=y-1,Q+=y):Q=0,F++,--rt[I]==0){if(I===q)break;I=f[d+m[F]]}if(W<I&&(Q&w)!==S){for(at===0&&(at=W),L+=b,nt=1<<(K=I-at);K+at<q&&!((nt-=rt[K+at])<=0);)K++,nt<<=1;if(ct+=1<<K,c===1&&852<ct||c===2&&592<ct)return 1;x[S=Q&w]=W<<24|K<<16|L-g|0}}return Q!==0&&(x[L+Q]=I-at<<24|64<<16|0),h.bits=W,0}},{"../utils/common":41}],51:[function(e,i,r){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,i,r){var s=e("../utils/common"),o=0,a=1;function l(P){for(var B=P.length;0<=--B;)P[B]=0}var u=0,c=29,f=256,d=f+1+c,p=30,x=19,g=2*d+1,m=15,h=16,y=7,v=256,S=16,w=17,L=18,C=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],z=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],G=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],T=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],N=new Array(2*(d+2));l(N);var I=new Array(2*p);l(I);var F=new Array(512);l(F);var b=new Array(256);l(b);var q=new Array(c);l(q);var W,K,at,nt=new Array(p);function ct(P,B,Y,A,E){this.static_tree=P,this.extra_bits=B,this.extra_base=Y,this.elems=A,this.max_length=E,this.has_stree=P&&P.length}function Q(P,B){this.dyn_tree=P,this.max_code=0,this.stat_desc=B}function Z(P){return P<256?F[P]:F[256+(P>>>7)]}function _t(P,B){P.pending_buf[P.pending++]=255&B,P.pending_buf[P.pending++]=B>>>8&255}function rt(P,B,Y){P.bi_valid>h-Y?(P.bi_buf|=B<<P.bi_valid&65535,_t(P,P.bi_buf),P.bi_buf=B>>h-P.bi_valid,P.bi_valid+=Y-h):(P.bi_buf|=B<<P.bi_valid&65535,P.bi_valid+=Y)}function U(P,B,Y){rt(P,Y[2*B],Y[2*B+1])}function J(P,B){for(var Y=0;Y|=1&P,P>>>=1,Y<<=1,0<--B;);return Y>>>1}function H(P,B,Y){var A,E,X=new Array(m+1),tt=0;for(A=1;A<=m;A++)X[A]=tt=tt+Y[A-1]<<1;for(E=0;E<=B;E++){var et=P[2*E+1];et!==0&&(P[2*E]=J(X[et]++,et))}}function it(P){var B;for(B=0;B<d;B++)P.dyn_ltree[2*B]=0;for(B=0;B<p;B++)P.dyn_dtree[2*B]=0;for(B=0;B<x;B++)P.bl_tree[2*B]=0;P.dyn_ltree[2*v]=1,P.opt_len=P.static_len=0,P.last_lit=P.matches=0}function st(P){8<P.bi_valid?_t(P,P.bi_buf):0<P.bi_valid&&(P.pending_buf[P.pending++]=P.bi_buf),P.bi_buf=0,P.bi_valid=0}function dt(P,B,Y,A){var E=2*B,X=2*Y;return P[E]<P[X]||P[E]===P[X]&&A[B]<=A[Y]}function j(P,B,Y){for(var A=P.heap[Y],E=Y<<1;E<=P.heap_len&&(E<P.heap_len&&dt(B,P.heap[E+1],P.heap[E],P.depth)&&E++,!dt(B,A,P.heap[E],P.depth));)P.heap[Y]=P.heap[E],Y=E,E<<=1;P.heap[Y]=A}function M(P,B,Y){var A,E,X,tt,et=0;if(P.last_lit!==0)for(;A=P.pending_buf[P.d_buf+2*et]<<8|P.pending_buf[P.d_buf+2*et+1],E=P.pending_buf[P.l_buf+et],et++,A===0?U(P,E,B):(U(P,(X=b[E])+f+1,B),(tt=C[X])!==0&&rt(P,E-=q[X],tt),U(P,X=Z(--A),Y),(tt=z[X])!==0&&rt(P,A-=nt[X],tt)),et<P.last_lit;);U(P,v,B)}function D(P,B){var Y,A,E,X=B.dyn_tree,tt=B.stat_desc.static_tree,et=B.stat_desc.has_stree,ot=B.stat_desc.elems,bt=-1;for(P.heap_len=0,P.heap_max=g,Y=0;Y<ot;Y++)X[2*Y]!==0?(P.heap[++P.heap_len]=bt=Y,P.depth[Y]=0):X[2*Y+1]=0;for(;P.heap_len<2;)X[2*(E=P.heap[++P.heap_len]=bt<2?++bt:0)]=1,P.depth[E]=0,P.opt_len--,et&&(P.static_len-=tt[2*E+1]);for(B.max_code=bt,Y=P.heap_len>>1;1<=Y;Y--)j(P,X,Y);for(E=ot;Y=P.heap[1],P.heap[1]=P.heap[P.heap_len--],j(P,X,1),A=P.heap[1],P.heap[--P.heap_max]=Y,P.heap[--P.heap_max]=A,X[2*E]=X[2*Y]+X[2*A],P.depth[E]=(P.depth[Y]>=P.depth[A]?P.depth[Y]:P.depth[A])+1,X[2*Y+1]=X[2*A+1]=E,P.heap[1]=E++,j(P,X,1),2<=P.heap_len;);P.heap[--P.heap_max]=P.heap[1],function(xt,vt){var Mt,Dt,yt,Ft,Bt,Pt,Tt=vt.dyn_tree,Ut=vt.max_code,Zt=vt.stat_desc.static_tree,Vt=vt.stat_desc.has_stree,ce=vt.stat_desc.extra_bits,lt=vt.stat_desc.extra_base,Et=vt.stat_desc.max_length,ft=0;for(Ft=0;Ft<=m;Ft++)xt.bl_count[Ft]=0;for(Tt[2*xt.heap[xt.heap_max]+1]=0,Mt=xt.heap_max+1;Mt<g;Mt++)Et<(Ft=Tt[2*Tt[2*(Dt=xt.heap[Mt])+1]+1]+1)&&(Ft=Et,ft++),Tt[2*Dt+1]=Ft,Ut<Dt||(xt.bl_count[Ft]++,Bt=0,lt<=Dt&&(Bt=ce[Dt-lt]),Pt=Tt[2*Dt],xt.opt_len+=Pt*(Ft+Bt),Vt&&(xt.static_len+=Pt*(Zt[2*Dt+1]+Bt)));if(ft!==0){do{for(Ft=Et-1;xt.bl_count[Ft]===0;)Ft--;xt.bl_count[Ft]--,xt.bl_count[Ft+1]+=2,xt.bl_count[Et]--,ft-=2}while(0<ft);for(Ft=Et;Ft!==0;Ft--)for(Dt=xt.bl_count[Ft];Dt!==0;)Ut<(yt=xt.heap[--Mt])||(Tt[2*yt+1]!==Ft&&(xt.opt_len+=(Ft-Tt[2*yt+1])*Tt[2*yt],Tt[2*yt+1]=Ft),Dt--)}}(P,B),H(X,bt,P.bl_count)}function _(P,B,Y){var A,E,X=-1,tt=B[1],et=0,ot=7,bt=4;for(tt===0&&(ot=138,bt=3),B[2*(Y+1)+1]=65535,A=0;A<=Y;A++)E=tt,tt=B[2*(A+1)+1],++et<ot&&E===tt||(et<bt?P.bl_tree[2*E]+=et:E!==0?(E!==X&&P.bl_tree[2*E]++,P.bl_tree[2*S]++):et<=10?P.bl_tree[2*w]++:P.bl_tree[2*L]++,X=E,bt=(et=0)===tt?(ot=138,3):E===tt?(ot=6,3):(ot=7,4))}function O(P,B,Y){var A,E,X=-1,tt=B[1],et=0,ot=7,bt=4;for(tt===0&&(ot=138,bt=3),A=0;A<=Y;A++)if(E=tt,tt=B[2*(A+1)+1],!(++et<ot&&E===tt)){if(et<bt)for(;U(P,E,P.bl_tree),--et!=0;);else E!==0?(E!==X&&(U(P,E,P.bl_tree),et--),U(P,S,P.bl_tree),rt(P,et-3,2)):et<=10?(U(P,w,P.bl_tree),rt(P,et-3,3)):(U(P,L,P.bl_tree),rt(P,et-11,7));X=E,bt=(et=0)===tt?(ot=138,3):E===tt?(ot=6,3):(ot=7,4)}}l(nt);var k=!1;function R(P,B,Y,A){rt(P,(u<<1)+(A?1:0),3),function(E,X,tt,et){st(E),_t(E,tt),_t(E,~tt),s.arraySet(E.pending_buf,E.window,X,tt,E.pending),E.pending+=tt}(P,B,Y)}r._tr_init=function(P){k||(function(){var B,Y,A,E,X,tt=new Array(m+1);for(E=A=0;E<c-1;E++)for(q[E]=A,B=0;B<1<<C[E];B++)b[A++]=E;for(b[A-1]=E,E=X=0;E<16;E++)for(nt[E]=X,B=0;B<1<<z[E];B++)F[X++]=E;for(X>>=7;E<p;E++)for(nt[E]=X<<7,B=0;B<1<<z[E]-7;B++)F[256+X++]=E;for(Y=0;Y<=m;Y++)tt[Y]=0;for(B=0;B<=143;)N[2*B+1]=8,B++,tt[8]++;for(;B<=255;)N[2*B+1]=9,B++,tt[9]++;for(;B<=279;)N[2*B+1]=7,B++,tt[7]++;for(;B<=287;)N[2*B+1]=8,B++,tt[8]++;for(H(N,d+1,tt),B=0;B<p;B++)I[2*B+1]=5,I[2*B]=J(B,5);W=new ct(N,C,f+1,d,m),K=new ct(I,z,0,p,m),at=new ct(new Array(0),G,0,x,y)}(),k=!0),P.l_desc=new Q(P.dyn_ltree,W),P.d_desc=new Q(P.dyn_dtree,K),P.bl_desc=new Q(P.bl_tree,at),P.bi_buf=0,P.bi_valid=0,it(P)},r._tr_stored_block=R,r._tr_flush_block=function(P,B,Y,A){var E,X,tt=0;0<P.level?(P.strm.data_type===2&&(P.strm.data_type=function(et){var ot,bt=4093624447;for(ot=0;ot<=31;ot++,bt>>>=1)if(1&bt&&et.dyn_ltree[2*ot]!==0)return o;if(et.dyn_ltree[18]!==0||et.dyn_ltree[20]!==0||et.dyn_ltree[26]!==0)return a;for(ot=32;ot<f;ot++)if(et.dyn_ltree[2*ot]!==0)return a;return o}(P)),D(P,P.l_desc),D(P,P.d_desc),tt=function(et){var ot;for(_(et,et.dyn_ltree,et.l_desc.max_code),_(et,et.dyn_dtree,et.d_desc.max_code),D(et,et.bl_desc),ot=x-1;3<=ot&&et.bl_tree[2*T[ot]+1]===0;ot--);return et.opt_len+=3*(ot+1)+5+5+4,ot}(P),E=P.opt_len+3+7>>>3,(X=P.static_len+3+7>>>3)<=E&&(E=X)):E=X=Y+5,Y+4<=E&&B!==-1?R(P,B,Y,A):P.strategy===4||X===E?(rt(P,2+(A?1:0),3),M(P,N,I)):(rt(P,4+(A?1:0),3),function(et,ot,bt,xt){var vt;for(rt(et,ot-257,5),rt(et,bt-1,5),rt(et,xt-4,4),vt=0;vt<xt;vt++)rt(et,et.bl_tree[2*T[vt]+1],3);O(et,et.dyn_ltree,ot-1),O(et,et.dyn_dtree,bt-1)}(P,P.l_desc.max_code+1,P.d_desc.max_code+1,tt+1),M(P,P.dyn_ltree,P.dyn_dtree)),it(P),A&&st(P)},r._tr_tally=function(P,B,Y){return P.pending_buf[P.d_buf+2*P.last_lit]=B>>>8&255,P.pending_buf[P.d_buf+2*P.last_lit+1]=255&B,P.pending_buf[P.l_buf+P.last_lit]=255&Y,P.last_lit++,B===0?P.dyn_ltree[2*Y]++:(P.matches++,B--,P.dyn_ltree[2*(b[Y]+f+1)]++,P.dyn_dtree[2*Z(B)]++),P.last_lit===P.lit_bufsize-1},r._tr_align=function(P){rt(P,2,3),U(P,v,N),function(B){B.bi_valid===16?(_t(B,B.bi_buf),B.bi_buf=0,B.bi_valid=0):8<=B.bi_valid&&(B.pending_buf[B.pending++]=255&B.bi_buf,B.bi_buf>>=8,B.bi_valid-=8)}(P)}},{"../utils/common":41}],53:[function(e,i,r){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,i,r){(function(s){(function(o,a){if(!o.setImmediate){var l,u,c,f,d=1,p={},x=!1,g=o.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(o);m=m&&m.setTimeout?m:o,l={}.toString.call(o.process)==="[object process]"?function(S){process.nextTick(function(){y(S)})}:function(){if(o.postMessage&&!o.importScripts){var S=!0,w=o.onmessage;return o.onmessage=function(){S=!1},o.postMessage("","*"),o.onmessage=w,S}}()?(f="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",v,!1):o.attachEvent("onmessage",v),function(S){o.postMessage(f+S,"*")}):o.MessageChannel?((c=new MessageChannel).port1.onmessage=function(S){y(S.data)},function(S){c.port2.postMessage(S)}):g&&"onreadystatechange"in g.createElement("script")?(u=g.documentElement,function(S){var w=g.createElement("script");w.onreadystatechange=function(){y(S),w.onreadystatechange=null,u.removeChild(w),w=null},u.appendChild(w)}):function(S){setTimeout(y,0,S)},m.setImmediate=function(S){typeof S!="function"&&(S=new Function(""+S));for(var w=new Array(arguments.length-1),L=0;L<w.length;L++)w[L]=arguments[L+1];var C={callback:S,args:w};return p[d]=C,l(d),d++},m.clearImmediate=h}function h(S){delete p[S]}function y(S){if(x)setTimeout(y,0,S);else{var w=p[S];if(w){x=!0;try{(function(L){var C=L.callback,z=L.args;switch(z.length){case 0:C();break;case 1:C(z[0]);break;case 2:C(z[0],z[1]);break;case 3:C(z[0],z[1],z[2]);break;default:C.apply(a,z)}})(w)}finally{h(S),x=!1}}}}function v(S){S.source===o&&typeof S.data=="string"&&S.data.indexOf(f)===0&&y(+S.data.slice(f.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof na<"u"?na:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Td);var MS=Td.exports;const Ad=yS(MS),bS={class:"converter-page"},SS={class:"conv-panel"},ES={class:"panel-header"},wS={class:"header-actions"},TS={class:"global-settings"},AS={class:"setting-row"},CS={class:"mode-toggle"},RS={class:"setting-row"},PS={class:"fps-row"},IS={class:"fps-presets"},LS=["onClick"],DS={class:"input-with-unit"},US={class:"setting-row"},NS={class:"input-with-unit"},OS={key:0,class:"mode-hint"},FS={class:"add-file-area"},kS={key:0,class:"task-list"},BS={class:"task-list-header"},zS=["onClick"],HS={class:"task-name"},GS={class:"task-meta"},VS={key:0},WS={key:0,class:"task-progress"},XS={class:"prog-bar"},$S={class:"prog-pct"},qS=["onClick"],jS=["onClick"],YS=["href","download"],ZS=["onClick"],KS={key:1,class:"empty-hint"},JS={key:0,class:"preview-placeholder"},QS={class:"video-preview-wrap"},tE=["src"],eE={class:"status-area"},nE={class:"status-header"},iE={class:"status-text"},rE={class:"task-info-badges"},sE={class:"info-badge"},aE={class:"info-badge"},oE={class:"info-badge"},lE={key:0,class:"progress-wrap"},cE={class:"progress-bar"},uE={class:"progress-pct"},fE={key:1,class:"error-msg"},hE={class:"file-info-inline"},dE={key:0},pE={key:1},mE={class:"action-row"},gE=["href","download"],_E={__name:"VideoConverter",setup(n){const t=$t("gif"),e=$t(24),i=$t(960),r=[12,16,24,30],s=$t([]),o=$t(null),a=$t(null),l=$t(null);let u=0;const c=ae(()=>s.value.find(U=>U.id===o.value)||null),f=ae(()=>s.value.some(U=>U.status==="running"));function d(U){x(Array.from(U.target.files||[])),U.target.value=""}function p(U){var H;const J=Array.from(((H=U.dataTransfer)==null?void 0:H.files)||[]).filter(it=>/\.(mp4|mov|webm)$/i.test(it.name));J.length&&x(J)}function x(U){for(const J of U){if(!/\.(mp4|mov|webm)$/i.test(J.name)||J.size>500*1024*1024)continue;const it={id:++u,file:J,objectUrl:URL.createObjectURL(J),status:"idle",statusText:"等待开始",progress:0,duration:0,origW:0,origH:0,downloadUrl:"",downloadName:"",errorMsg:"",cancelled:!1,mode:t.value,fps:e.value,width:i.value};s.value.push(it),o.value||(o.value=it.id)}}function g(U){o.value=U.id}function m(U){var J;U.status==="running"&&(U.cancelled=!0),URL.revokeObjectURL(U.objectUrl),U.downloadUrl&&URL.revokeObjectURL(U.downloadUrl),s.value=s.value.filter(H=>H.id!==U.id),o.value===U.id&&(o.value=((J=s.value[0])==null?void 0:J.id)||null)}function h(){s.value.filter(U=>U.status==="done"||U.status==="cancelled").forEach(U=>{URL.revokeObjectURL(U.objectUrl),U.downloadUrl&&URL.revokeObjectURL(U.downloadUrl)}),s.value=s.value.filter(U=>U.status!=="done"&&U.status!=="cancelled")}function y(){s.value.forEach(U=>{U.status==="running"&&(U.cancelled=!0)})}async function v(){for(const U of s.value)(U.status==="idle"||U.status==="error")&&await w(U)}function S(U,J){const H=U.target;J.duration=H.duration,J.origW=H.videoWidth,J.origH=H.videoHeight,(!J.width||J.width===960)&&(J.width=H.videoWidth||960)}async function w(U){if(U.status==="running")return;U.mode=t.value,U.fps=e.value,U.width=i.value,U.cancelled=!1,U.status="running",U.progress=0,U.errorMsg="",U.statusText="正在转换…",U.downloadUrl&&(URL.revokeObjectURL(U.downloadUrl),U.downloadUrl="");const J=l.value;if(!J){N(U,"画布初始化失败");return}const H=await L(U.objectUrl);if(!H){N(U,"视频加载失败");return}U.duration=U.duration||H.duration,U.origW=U.origW||H.videoWidth,U.origH=U.origH||H.videoHeight;const it=U.width,st=U.origH?Math.round(it*U.origH/U.origW):Math.round(it*9/16);J.width=it,J.height=st;const dt=J.getContext("2d"),j=H.duration,M=1/U.fps,D=Math.ceil(j*U.fps);if(D>1500){N(U,`帧数过多 (${D})，请降低帧率（建议 ≤ 30fps × 时长）`);return}try{U.mode==="gif"?await C(U,H,J,dt,j,M,D,it,st):U.mode==="png"?await z(U,H,J,dt,j,M,D,it,st):await G(U,H,J,dt,j,M,D,it,st)}catch(_){U.cancelled?(U.status="cancelled",U.statusText="已取消"):N(U,"转换失败："+((_==null?void 0:_.message)||String(_)))}}function L(U){return new Promise(J=>{const H=document.createElement("video");H.muted=!0,H.preload="metadata",H.src=U,H.onloadeddata=()=>J(H),H.onerror=()=>J(null),H.load()})}async function C(U,J,H,it,st,dt,j,M,D){const _=Math.round(1e3/U.fps),O=[];for(let R=0;R<j;R++){if(U.cancelled)throw new Error("cancelled");const P=R*dt;await at(J,Math.min(P,st-.001)),it.drawImage(J,0,0,M,D);const B=it.getImageData(0,0,M,D);O.push(B),U.progress=Math.round((R+1)/j*80),U.statusText=`采集帧 ${R+1} / ${j}`,R%3===0&&await ct(0)}if(U.cancelled)throw new Error("cancelled");U.statusText="正在编码 GIF…";const k=await F(O,M,D,_,R=>{U.progress=80+Math.round(R*20)});if(U.cancelled)throw new Error("cancelled");T(U,k,_t(U.file.name)+".gif",`GIF 完成，共 ${j} 帧`)}async function z(U,J,H,it,st,dt,j,M,D){const _=new Ad,O=_.folder("frames");for(let R=0;R<j;R++){if(U.cancelled)throw new Error("cancelled");const P=R*dt;await at(J,Math.min(P,st-.001)),it.drawImage(J,0,0,M,D);const B=await nt(H,"image/png");O.file(`frame_${String(R+1).padStart(4,"0")}.png`,B),U.progress=Math.round((R+1)/j*80),U.statusText=`导出帧 ${R+1} / ${j}`,R%5===0&&await ct(0)}if(U.cancelled)throw new Error("cancelled");U.statusText="打包 ZIP…";const k=await _.generateAsync({type:"blob",compression:"DEFLATE"},R=>{U.progress=80+Math.round(R.percent*.2)});T(U,k,_t(U.file.name)+"_frames.zip",`PNG 完成，共 ${j} 帧`)}async function G(U,J,H,it,st,dt,j,M,D){const _=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm",O=H.captureStream(U.fps),k=[],R=new MediaRecorder(O,{mimeType:_,videoBitsPerSecond:8e6});R.ondataavailable=Y=>{Y.data.size>0&&k.push(Y.data)};const P=new Promise(Y=>{R.onstop=Y});R.start();for(let Y=0;Y<j;Y++){if(U.cancelled)throw R.stop(),await P,new Error("cancelled");const A=Y*dt;await at(J,Math.min(A,st-.001)),it.drawImage(J,0,0,M,D),U.progress=Math.round((Y+1)/j*100),U.statusText=`录制帧 ${Y+1} / ${j}`,await ct(Math.max(16,Math.round(1e3/U.fps)))}R.stop(),await P;const B=new Blob(k,{type:_});T(U,B,_t(U.file.name)+".webm",`WebM 完成，共 ${j} 帧`)}function T(U,J,H,it){U.downloadUrl=URL.createObjectURL(J),U.downloadName=H,U.status="done",U.statusText=it,U.progress=100}function N(U,J){U.status="error",U.statusText="转换失败",U.errorMsg=J,U.progress=0}function I(U){U.cancelled=!0}async function F(U,J,H,it,st){const dt=[],j=O=>{for(let k=0;k<O.length;k++)dt.push(O.charCodeAt(k))},M=O=>dt.push(O&255),D=O=>{dt.push(O&255),dt.push(O>>8&255)};j("GIF89a"),D(J),D(H),M(112),M(0),M(0),M(33),M(255),M(11),j("NETSCAPE2.0"),M(3),M(1),D(0),M(0);const _=U.length;for(let O=0;O<_;O++){const R=U[O].data,{palette:P,indexed:B}=b(R,J*H);M(33),M(249),M(4),M(4),D(Math.round(it/10)),M(0),M(0),M(44),D(0),D(0),D(J),D(H),M(135);for(let E=0;E<256;E++){const X=E*3;M(P[X]||0),M(P[X+1]||0),M(P[X+2]||0)}M(8);const Y=K(B,8);let A=0;for(;A<Y.length;){const E=Math.min(255,Y.length-A);M(E);for(let X=0;X<E;X++)dt.push(Y[A+X]);A+=E}M(0),st&&st((O+1)/_),O%3===0&&await ct(0)}return M(59),new Blob([new Uint8Array(dt)],{type:"image/gif"})}function b(U,J){const H=[],it=Math.max(1,Math.floor(J/4e3));for(let M=0;M<J;M+=it){const D=M*4;H.push([U[D],U[D+1],U[D+2]])}const st=q(H,8);for(;st.length<256;)st.push([0,0,0]);const dt=new Uint8Array(J);for(let M=0;M<J;M++){const D=M*4;dt[M]=W(U[D],U[D+1],U[D+2],st)}const j=new Uint8Array(256*3);for(let M=0;M<256;M++)j[M*3]=st[M][0],j[M*3+1]=st[M][1],j[M*3+2]=st[M][2];return{palette:j,indexed:dt}}function q(U,J){if(J===0||U.length===0){if(U.length===0)return[[0,0,0]];const P=Math.round(U.reduce((A,E)=>A+E[0],0)/U.length),B=Math.round(U.reduce((A,E)=>A+E[1],0)/U.length),Y=Math.round(U.reduce((A,E)=>A+E[2],0)/U.length);return[[P,B,Y]]}let H=255,it=0,st=255,dt=0,j=255,M=0;for(const[P,B,Y]of U)P<H&&(H=P),P>it&&(it=P),B<st&&(st=B),B>dt&&(dt=B),Y<j&&(j=Y),Y>M&&(M=Y);const D=it-H,_=dt-st,O=M-j;let k=0;_>=D&&_>=O?k=1:O>=D&&O>=_&&(k=2),U.sort((P,B)=>P[k]-B[k]);const R=Math.floor(U.length/2);return[...q(U.slice(0,R),J-1),...q(U.slice(R),J-1)]}function W(U,J,H,it){let st=0,dt=1/0;for(let j=0;j<it.length;j++){const M=U-it[j][0],D=J-it[j][1],_=H-it[j][2],O=M*M+D*D+_*_;O<dt&&(dt=O,st=j)}return st}function K(U,J){const H=1<<J,it=H+1;let st=J+1,dt=it+1;const j=()=>1<<st,M=[];let D=0,_=0;const O=B=>{for(D|=B<<_,_+=st;_>=8;)M.push(D&255),D>>=8,_-=8};let k=new Map;const R=()=>{k=new Map;for(let B=0;B<H;B++)k.set(String(B),B);dt=it+1,st=J+1};R(),O(H);let P="";for(let B=0;B<U.length;B++){const Y=String(U[B]),A=P?P+","+Y:Y;k.has(A)?P=A:(O(k.get(P)),dt<4096?(k.set(A,dt++),dt>j()&&st<12&&st++):(O(H),R()),P=Y)}return P&&O(k.get(P)),O(it),_>0&&M.push(D&255),M}function at(U,J){return new Promise((H,it)=>{if(Math.abs(U.currentTime-J)<.001){H();return}const st=()=>{U.removeEventListener("seeked",st),H()},dt=()=>{U.removeEventListener("error",dt),it(new Error("seek error"))};U.addEventListener("seeked",st,{once:!0}),U.addEventListener("error",dt,{once:!0}),U.currentTime=J})}function nt(U,J){return new Promise(H=>U.toBlob(H,J))}function ct(U){return new Promise(J=>setTimeout(J,U))}function Q(U){return U<1024?U+" B":U<1048576?(U/1024).toFixed(1)+" KB":(U/1048576).toFixed(2)+" MB"}function Z(U){if(!U||!isFinite(U))return"";const J=Math.floor(U/60),H=(U%60).toFixed(1);return`${J}:${String(H).padStart(4,"0")}`}function _t(U){return U.replace(/\.[^.]+$/,"")}function rt(U){return{idle:"等待",running:"转换中",done:"完成",error:"失败",cancelled:"已取消"}[U]||U}return Oa(()=>{s.value.forEach(U=>{U.cancelled=!0,URL.revokeObjectURL(U.objectUrl),U.downloadUrl&&URL.revokeObjectURL(U.downloadUrl)})}),(U,J)=>(At(),Ct("div",bS,[V("div",SS,[V("div",ES,[J[13]||(J[13]=V("span",{class:"panel-title"},"视频素材转换",-1)),V("div",wS,[s.value.length?(At(),Ct("button",{key:0,class:"btn-ghost btn-xs",onClick:h,title:"清除已完成"},[...J[12]||(J[12]=[V("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[V("polyline",{points:"3 6 5 6 21 6"}),V("path",{d:"M19 6l-1 14H6L5 6"}),V("path",{d:"M10 11v6M14 11v6"})],-1)])])):Ht("",!0),f.value?(At(),Ct("button",{key:1,class:"btn-ghost btn-xs btn-danger",onClick:y},"取消全部")):Ht("",!0)])]),V("div",TS,[J[20]||(J[20]=V("div",{class:"setting-title"},"输出设置",-1)),V("div",AS,[J[14]||(J[14]=V("span",{class:"setting-label"},"输出格式",-1)),V("div",CS,[V("button",{class:re({active:t.value==="gif"}),onClick:J[0]||(J[0]=H=>t.value="gif")},"GIF 动图",2),V("button",{class:re({active:t.value==="png"}),onClick:J[1]||(J[1]=H=>t.value="png")},"PNG 序列帧",2),V("button",{class:re({active:t.value==="webm"}),onClick:J[2]||(J[2]=H=>t.value="webm")},"WebM 视频",2)])]),V("div",RS,[J[17]||(J[17]=V("span",{class:"setting-label"},"帧率",-1)),V("div",PS,[V("div",IS,[(At(),Ct(_e,null,oi(r,H=>V("button",{key:H,class:re({active:e.value===H}),onClick:it=>e.value=H},[Me(Lt(H),1),J[15]||(J[15]=V("small",null,"fps",-1))],10,LS)),64))]),V("div",DS,[ps(V("input",{type:"number","onUpdate:modelValue":J[3]||(J[3]=H=>e.value=H),min:"1",max:"60",step:"0.5",class:"num-input-sm"},null,512),[[xa,e.value,void 0,{number:!0}]]),J[16]||(J[16]=V("span",{class:"unit"},"fps",-1))])])]),V("div",US,[J[19]||(J[19]=V("span",{class:"setting-label"},"输出宽度",-1)),V("div",NS,[ps(V("input",{type:"number","onUpdate:modelValue":J[4]||(J[4]=H=>i.value=H),min:"64",max:"3840",step:"1",class:"num-input"},null,512),[[xa,i.value,void 0,{number:!0}]]),J[18]||(J[18]=V("span",{class:"unit"},"px  (高度自动)",-1))])]),t.value==="gif"?(At(),Ct("div",OS," GIF 最多 256 色，颜色丰富的视频建议使用 PNG 序列帧 ")):Ht("",!0)]),V("div",FS,[V("input",{ref_key:"fileInput",ref:a,type:"file",accept:"video/mp4,video/quicktime,video/webm,.mp4,.mov,.webm",multiple:"",style:{display:"none"},onChange:d},null,544),V("button",{class:"btn-add",onClick:J[5]||(J[5]=H=>a.value.click())},[...J[21]||(J[21]=[V("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[V("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),V("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),Me(" 添加视频文件 ",-1)])]),J[22]||(J[22]=V("div",{class:"add-hint"},"支持 MP4、MOV、WebM，可多选",-1))]),s.value.length?(At(),Ct("div",kS,[V("div",BS,[V("span",null,"任务队列 ("+Lt(s.value.length)+")",1),s.value.length>1&&!f.value?(At(),Ct("button",{key:0,class:"btn-link",onClick:v},"全部开始")):Ht("",!0)]),(At(!0),Ct(_e,null,oi(s.value,H=>(At(),Ct("div",{key:H.id,class:re(["task-item","task-"+H.status]),onClick:it=>g(H),style:xn({cursor:"pointer",outline:o.value===H.id?"1px solid var(--border-hover, #444)":"none"})},[V("div",HS,Lt(H.file.name),1),V("div",GS,[Me(Lt(Q(H.file.size))+" ",1),H.duration?(At(),Ct("span",VS," · "+Lt(Z(H.duration)),1)):Ht("",!0),V("span",{class:re(["task-badge","badge-"+H.status])},Lt(rt(H.status)),3)]),H.status==="running"?(At(),Ct("div",WS,[V("div",XS,[V("div",{class:"prog-fill",style:xn({width:H.progress+"%"})},null,4)]),V("span",$S,Lt(Math.round(H.progress))+"%",1)])):Ht("",!0),V("div",{class:"task-actions",onClick:J[7]||(J[7]=Nn(()=>{},["stop"]))},[H.status==="idle"||H.status==="error"?(At(),Ct("button",{key:0,class:"task-btn",onClick:it=>w(H)},[...J[23]||(J[23]=[V("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"currentColor"},[V("polygon",{points:"5 3 19 12 5 21 5 3"})],-1)])],8,qS)):Ht("",!0),H.status==="running"?(At(),Ct("button",{key:1,class:"task-btn btn-cancel",onClick:it=>I(H)},[...J[24]||(J[24]=[V("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"currentColor"},[V("rect",{x:"6",y:"6",width:"12",height:"12",rx:"2"})],-1)])],8,jS)):Ht("",!0),H.downloadUrl?(At(),Ct("a",{key:2,href:H.downloadUrl,download:H.downloadName,class:"task-btn btn-dl",onClick:J[6]||(J[6]=Nn(()=>{},["stop"]))},[...J[25]||(J[25]=[V("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[V("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),V("polyline",{points:"7 10 12 15 17 10"}),V("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1)])],8,YS)):Ht("",!0),V("button",{class:"task-btn btn-remove",onClick:it=>m(H)},[...J[26]||(J[26]=[V("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[V("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),V("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,ZS)])],14,zS))),128))])):(At(),Ct("div",KS,[...J[27]||(J[27]=[V("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.2"},[V("polygon",{points:"23 7 16 12 23 17 23 7"}),V("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"})],-1),V("p",null,'还没有任务，点击"添加视频文件"开始',-1)])]))]),V("div",{class:"conv-preview",onDragover:J[11]||(J[11]=Nn(()=>{},["prevent"])),onDrop:Nn(p,["prevent"])},[c.value?Ht("",!0):(At(),Ct("div",JS,[...J[28]||(J[28]=[V("svg",{width:"56",height:"56",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1"},[V("polygon",{points:"23 7 16 12 23 17 23 7"}),V("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"})],-1),V("p",null,"点击左侧任务可预览视频",-1),V("p",{class:"placeholder-sub"},"或拖拽视频文件到此处添加",-1)])])),c.value?(At(),Ct(_e,{key:1},[V("div",QS,[(At(),Ct("video",{key:c.value.id,src:c.value.objectUrl,controls:"",muted:"",playsinline:"",class:"video-preview",onLoadedmetadata:J[8]||(J[8]=H=>S(H,c.value))},null,40,tE))]),V("div",eE,[V("div",nE,[V("div",{class:re(["status-row","status-"+c.value.status])},[J[29]||(J[29]=V("span",{class:"status-dot"},null,-1)),V("span",iE,Lt(c.value.statusText||rt(c.value.status)),1)],2),V("div",rE,[V("span",sE,Lt(t.value.toUpperCase()),1),V("span",aE,Lt(e.value)+" fps",1),V("span",oE,Lt(i.value)+"px",1)])]),c.value.status==="running"?(At(),Ct("div",lE,[V("div",cE,[V("div",{class:"progress-fill",style:xn({width:c.value.progress+"%"})},null,4)]),V("span",uE,Lt(Math.round(c.value.progress))+"%",1)])):Ht("",!0),c.value.errorMsg?(At(),Ct("div",fE,Lt(c.value.errorMsg),1)):Ht("",!0),V("div",hE,[V("span",null,Lt(c.value.file.name),1),V("span",null,Lt(Q(c.value.file.size)),1),c.value.duration?(At(),Ct("span",dE,Lt(Z(c.value.duration)),1)):Ht("",!0),c.value.origW?(At(),Ct("span",pE,Lt(c.value.origW)+" × "+Lt(c.value.origH),1)):Ht("",!0)]),V("div",mE,[c.value.status==="idle"||c.value.status==="error"?(At(),Ct("button",{key:0,class:"btn-convert",onClick:J[9]||(J[9]=H=>w(c.value))}," 开始转换 ")):Ht("",!0),c.value.status==="running"?(At(),Ct("button",{key:1,class:"btn-cancel-big",onClick:J[10]||(J[10]=H=>I(c.value))}," 取消转换 ")):Ht("",!0),c.value.downloadUrl?(At(),Ct("a",{key:2,href:c.value.downloadUrl,download:c.value.downloadName,class:"btn-download"},[J[30]||(J[30]=V("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[V("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),V("polyline",{points:"7 10 12 15 17 10"}),V("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1)),Me(" 下载 "+Lt(c.value.downloadName),1)],8,gE)):Ht("",!0)])])],64)):Ht("",!0)],32),V("canvas",{ref_key:"offCanvas",ref:l,style:{display:"none"}},null,512)]))}},vE=Ci(_E,[["__scopeId","data-v-efa7390c"]]),xE={class:"cropper-page"},yE={class:"ctrl-panel"},ME={class:"mode-switch-row"},bE=["disabled","title"],SE={key:0,class:"no-fsapi-hint"},EE={class:"section"},wE={class:"preset-row"},TE=["onClick"],AE={class:"param-row"},CE={class:"param-label"},RE={class:"param-val"},PE={class:"param-row"},IE={class:"param-label"},LE={class:"param-val"},DE={class:"section"},UE={class:"import-btns"},NE={key:0,class:"section section-actions"},OE=["disabled"],FE=["disabled"],kE={class:"section"},BE={class:"toggle-row"},zE={class:"section section-actions"},HE=["disabled"],GE={key:0,class:"section section-actions"},VE={key:2,class:"task-list"},WE={class:"task-list-hd"},XE={class:"task-stats"},$E={class:"stat-done"},qE={key:0},jE={key:1,class:"stat-err"},YE=["onClick"],ZE={class:"task-thumb checker"},KE=["src"],JE={key:1,class:"thumb-ph"},QE={class:"task-info"},t2=["title"],e2={key:0,class:"task-path"},n2={class:"task-meta"},i2={key:0},r2={key:1,class:"crop-arrow"},s2={key:1,class:"task-err"},a2=["onClick"],o2=["onClick"],l2={key:0,class:"preview-empty"},c2={class:"compare-wrap"},u2={class:"compare-side"},f2={class:"compare-img-box checker"},h2={key:0,class:"compare-size"},d2={class:"compare-side"},p2={class:"compare-img-box checker"},m2={key:0,class:"cmp-overlay"},g2={key:0,class:"compare-size"},_2={key:0,class:"saving"},v2={key:1,class:"no-change"},x2={class:"action-row"},y2=["disabled"],M2={key:1,class:"error-msg"},b2={key:0,class:"dialog-mask"},S2={class:"dialog"},E2={class:"dialog-body"},w2={class:"dialog-actions"},T2={__name:"PngCropper",setup(n){const t=typeof window<"u"&&"showDirectoryPicker"in window,e=$t("safe"),i=$t(1),r=$t(10),s=$t("precise"),o=$t(!0),a=[{id:"precise",name:"精准",threshold:1,padding:10},{id:"standard",name:"标准",threshold:10,padding:5},{id:"strong",name:"强力",threshold:50,padding:0}];function l(j){s.value=j.id,i.value=j.threshold,r.value=j.padding}const u=$t([]),c=$t(null);let f=0;const d=ae(()=>u.value.find(j=>j.id===c.value)||null),p=ae(()=>u.value.some(j=>j.status==="processing")),x=ae(()=>u.value.some(j=>j.status==="done"||j.status==="overwritten")),g=ae(()=>u.value.filter(j=>j.status==="done"||j.status==="overwritten"||j.status==="skipped").length),m=ae(()=>u.value.filter(j=>j.status==="skipped"||j.status==="transparent").length),h=ae(()=>u.value.filter(j=>j.status==="error").length),y=$t(null),v=$t(null);function S(j){C(Array.from(j.target.files||[]),!1),j.target.value=""}function w(j){C(Array.from(j.target.files||[]),!0),j.target.value=""}function L(j){var D;if(e.value!=="safe")return;const M=Array.from(((D=j.dataTransfer)==null?void 0:D.files)||[]).filter(_=>_.type==="image/png"||/\.png$/i.test(_.name));M.length&&C(M,!1)}function C(j,M){for(const D of j){if(D.type!=="image/png"&&!/\.png$/i.test(D.name))continue;const _=M&&D.webkitRelativePath?D.webkitRelativePath:D.name,O=z(D,_);u.value.push(O),G(O),c.value||(c.value=O.id)}}function z(j,M,D=null,_=null){return{id:++f,file:j,relPath:M,fileHandle:D,dirHandle:_,status:"idle",previewUrl:"",origImageData:null,cropCanvas:null,origW:0,origH:0,cropW:0,cropH:0,savingPct:0,downloadBlob:null,errorMsg:""}}function G(j){const M=URL.createObjectURL(j.file);j.previewUrl=M;const D=new Image;D.onload=()=>{const _=document.createElement("canvas");_.width=D.naturalWidth,_.height=D.naturalHeight,_.getContext("2d").drawImage(D,0,0),j.origImageData=_.getContext("2d").getImageData(0,0,_.width,_.height),j.origW=_.width,j.origH=_.height,c.value===j.id&&Ke(()=>H(j)),URL.revokeObjectURL(M),j.previewUrl=_.toDataURL("image/png")},D.src=M}function T(j){c.value=j.id,Ke(()=>{H(j),it(j)})}function N(j){var M;u.value=u.value.filter(D=>D.id!==j.id),c.value===j.id&&(c.value=((M=u.value[0])==null?void 0:M.id)||null)}function I(){u.value=[],c.value=null}function F(j,M,D){const{data:_,width:O,height:k}=j;let R=O,P=-1,B=k,Y=-1;for(let et=0;et<k;et++)for(let ot=0;ot<O;ot++)_[(et*O+ot)*4+3]>M&&(ot<R&&(R=ot),ot>P&&(P=ot),et<B&&(B=et),et>Y&&(Y=et));if(P<0)return null;R=Math.max(0,R-D),B=Math.max(0,B-D),P=Math.min(O-1,P+D),Y=Math.min(k-1,Y+D);const A=P-R+1,E=Y-B+1,X=document.createElement("canvas");X.width=A,X.height=E;const tt=document.createElement("canvas");return tt.width=O,tt.height=k,tt.getContext("2d").putImageData(j,0,0),X.getContext("2d").drawImage(tt,R,B,A,E,0,0,A,E),{canvas:X,w:A,h:E}}async function b(j){if(!j.origImageData){j.errorMsg="图片尚未加载，请稍候";return}j.status="processing",j.errorMsg="",await Ke();try{const M=F(j.origImageData,i.value,r.value);if(!M){j.status="transparent",j.errorMsg="图片全透明，已跳过";return}if(M.w===j.origW&&M.h===j.origH){j.status="skipped",j.cropW=M.w,j.cropH=M.h,j.savingPct=0,j.cropCanvas=M.canvas,c.value===j.id&&Ke(()=>it(j));return}j.cropCanvas=M.canvas,j.cropW=M.w,j.cropH=M.h,j.savingPct=Math.round((1-M.w*M.h/(j.origW*j.origH))*100),j.downloadBlob=await st(M.canvas),j.status="done",c.value===j.id&&Ke(()=>it(j))}catch(M){j.status="error",j.errorMsg="裁剪失败："+M.message}}async function q(){for(const j of u.value)(j.status==="idle"||j.status==="error")&&await b(j)}function W(j){if(!j.downloadBlob)return;const M=document.createElement("a");M.href=URL.createObjectURL(j.downloadBlob),M.download=j.file.name,M.click(),setTimeout(()=>URL.revokeObjectURL(M.href),3e3)}async function K(){const j=new Ad;let M=0;for(const O of u.value)O.status!=="done"||!O.downloadBlob||(j.file(O.relPath,O.downloadBlob),M++);if(!M)return;const D=await j.generateAsync({type:"blob",compression:"DEFLATE"}),_=document.createElement("a");_.href=URL.createObjectURL(D),_.download="cropped_pngs.zip",_.click(),setTimeout(()=>URL.revokeObjectURL(_.href),5e3)}async function at(){if(!t)return;let j;try{j=await window.showDirectoryPicker({mode:"readwrite"})}catch{return}const M=[];if(await nt(j,j,"",M),!M.length){alert("该文件夹中没有找到 PNG 文件。");return}if(await _t(`将处理文件夹"${j.name}"中的 ${M.length} 个 PNG 文件。

`+(o.value?"备份将保存到 _backup_original_pngs 子文件夹中，":"未开启自动备份，")+`处理后原文件将被裁剪版本覆盖，文件名保持不变。

建议先手动备份文件夹。是否继续？`)){I();for(const{file:_,relPath:O,fileHandle:k,rootHandle:R}of M){const P=z(_,O,k,R);u.value.push(P),G(P)}u.value.length&&(c.value=u.value[0].id);for(const _ of u.value){_.status="processing",await Ke();try{_.origImageData||await Q(_,5e3);const O=F(_.origImageData,i.value,r.value);if(!O){_.status="transparent",_.errorMsg="全透明，已跳过";continue}if(O.w===_.origW&&O.h===_.origH){_.status="skipped",_.cropW=O.w,_.cropH=O.h;continue}const k=await st(O.canvas);if(o.value)try{await ct(_,j)}catch{}const R=await _.fileHandle.createWritable();await R.write(k),await R.close(),_.cropCanvas=O.canvas,_.cropW=O.w,_.cropH=O.h,_.savingPct=Math.round((1-O.w*O.h/(_.origW*_.origH))*100),_.downloadBlob=k,_.status="overwritten",c.value===_.id&&Ke(()=>it(_))}catch(O){_.status="error",_.errorMsg=O.message}}}}async function nt(j,M,D,_){for await(const[O,k]of M.entries())if(k.kind==="directory"){if(O==="_backup_original_pngs")continue;await nt(j,k,D?D+"/"+O:O,_)}else if(k.kind==="file"&&/\.png$/i.test(O)){const R=await k.getFile(),P=D?D+"/"+O:O;_.push({file:R,relPath:P,fileHandle:k,rootHandle:j})}}async function ct(j,M){const D=j.relPath.split("/");let _=M;_=await _.getDirectoryHandle("_backup_original_pngs",{create:!0});for(let Y=0;Y<D.length-1;Y++)_=await _.getDirectoryHandle(D[Y],{create:!0});const k=D[D.length-1],R=await _.getFileHandle(k,{create:!0}),P=await j.fileHandle.getFile(),B=await R.createWritable();await B.write(P),await B.close()}function Q(j,M){return new Promise((D,_)=>{if(j.origImageData){D();return}const O=Date.now(),k=setInterval(()=>{j.origImageData?(clearInterval(k),D()):Date.now()-O>M&&(clearInterval(k),_(new Error("图片加载超时")))},50)})}const Z=$t({show:!1,message:"",resolve:null});function _t(j){return new Promise(M=>{Z.value={show:!0,message:j,resolve:D=>{Z.value.show=!1,M(D)}}})}const rt=$t(null),U=$t(null),J=$t(null);function H(j){const M=rt.value;!M||!j.origImageData||(M.width=j.origW,M.height=j.origH,M.getContext("2d").putImageData(j.origImageData,0,0))}function it(j){const M=U.value;M&&(j.cropCanvas?(M.width=j.cropCanvas.width,M.height=j.cropCanvas.height,M.getContext("2d").drawImage(j.cropCanvas,0,0)):(M.width=1,M.height=1,M.getContext("2d").clearRect(0,0,1,1)))}Rr(d,j=>{j&&Ke(()=>{H(j),it(j)})});function st(j){return new Promise(M=>j.toBlob(M,"image/png"))}function dt(j){return{idle:"待处理",processing:"处理中",done:"已裁剪",overwritten:"已覆盖",skipped:"无需裁剪",transparent:"全透明跳过",error:"失败"}[j]||j}return Oa(()=>{u.value=[]}),(j,M)=>(At(),Ct("div",xE,[V("div",yE,[M[35]||(M[35]=V("div",{class:"panel-header"},[V("span",{class:"panel-title"},"裁剪 PNG 透明像素")],-1)),V("div",ME,[V("button",{class:re(["mode-tab",{active:e.value==="safe"}]),onClick:M[0]||(M[0]=D=>e.value="safe")},[...M[14]||(M[14]=[V("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[V("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})],-1),Me(" 安全模式 ",-1)])],2),V("button",{class:re(["mode-tab",{active:e.value==="overwrite"}]),onClick:M[1]||(M[1]=D=>e.value="overwrite"),disabled:!yn(t),title:yn(t)?"":"当前浏览器不支持直接覆盖文件"},[...M[15]||(M[15]=[V("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[V("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),V("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})],-1),Me(" 覆盖模式 ",-1)])],10,bE),yn(t)?Ht("",!0):(At(),Ct("div",SE,"覆盖模式需 Chrome/Edge 86+"))]),V("div",EE,[M[18]||(M[18]=V("div",{class:"section-title"},"裁剪参数",-1)),V("div",wE,[(At(),Ct(_e,null,oi(a,D=>V("button",{key:D.id,class:re(["preset-btn",{active:s.value===D.id}]),onClick:_=>l(D)},Lt(D.name),11,TE)),64))]),V("div",AE,[V("label",CE,[M[16]||(M[16]=Me("Alpha 阈值 ",-1)),V("span",RE,Lt(i.value),1)]),ps(V("input",{type:"range","onUpdate:modelValue":M[2]||(M[2]=D=>i.value=D),min:"0",max:"255",class:"slider"},null,512),[[xa,i.value,void 0,{number:!0}]])]),V("div",PE,[V("label",IE,[M[17]||(M[17]=Me("Padding ",-1)),V("span",LE,Lt(r.value)+"px",1)]),ps(V("input",{type:"range","onUpdate:modelValue":M[3]||(M[3]=D=>r.value=D),min:"0",max:"200",class:"slider"},null,512),[[xa,r.value,void 0,{number:!0}]])]),M[19]||(M[19]=V("div",{class:"hint-box"}," 阈值越低保留的半透明边缘越多；阈值越高越容易去掉透明噪点，但可能裁掉阴影或发光。 ",-1))]),e.value==="safe"?(At(),Ct(_e,{key:0},[V("div",DE,[M[22]||(M[22]=V("div",{class:"section-title"},"导入文件",-1)),V("div",UE,[V("input",{ref_key:"filePicker",ref:y,type:"file",accept:"image/png",multiple:"",style:{display:"none"},onChange:S},null,544),V("input",{ref_key:"folderPicker",ref:v,type:"file",accept:"image/png",multiple:"",webkitdirectory:"",style:{display:"none"},onChange:w},null,544),V("button",{class:"btn-import",onClick:M[4]||(M[4]=D=>y.value.click())},[...M[20]||(M[20]=[V("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[V("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),V("polyline",{points:"13 2 13 9 20 9"})],-1),Me(" 选择 PNG 文件 ",-1)])]),V("button",{class:"btn-import",onClick:M[5]||(M[5]=D=>v.value.click())},[...M[21]||(M[21]=[V("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[V("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})],-1),Me(" 选择文件夹 ",-1)])])]),M[23]||(M[23]=V("div",{class:"add-hint"},"支持多选 PNG；文件夹导入保留相对路径",-1))]),u.value.length?(At(),Ct("div",NE,[V("button",{class:"btn-primary",disabled:p.value,onClick:q},[M[24]||(M[24]=V("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"currentColor"},[V("polygon",{points:"5 3 19 12 5 21 5 3"})],-1)),Me(" "+Lt(p.value?"处理中…":"全部裁剪"),1)],8,OE),V("button",{class:"btn-ghost",disabled:!x.value||p.value,onClick:K},[...M[25]||(M[25]=[V("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[V("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),V("polyline",{points:"7 10 12 15 17 10"}),V("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Me(" 下载 ZIP ",-1)])],8,FE),V("button",{class:"btn-ghost btn-danger",onClick:I},"清空")])):Ht("",!0)],64)):Ht("",!0),e.value==="overwrite"&&yn(t)?(At(),Ct(_e,{key:1},[V("div",kE,[M[28]||(M[28]=V("div",{class:"section-title"},"覆盖选项",-1)),V("label",BE,[M[27]||(M[27]=V("div",{class:"toggle-info"},[V("span",{class:"toggle-label"},"覆盖前自动备份原图"),V("span",{class:"toggle-sub"},"备份至 _backup_original_pngs 子文件夹")],-1)),V("div",{class:re(["toggle-switch",{on:o.value}]),onClick:M[6]||(M[6]=D=>o.value=!o.value)},[...M[26]||(M[26]=[V("div",{class:"toggle-knob"},null,-1)])],2)])]),V("div",zE,[V("button",{class:"btn-primary btn-overwrite",onClick:at,disabled:p.value},[M[29]||(M[29]=V("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[V("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})],-1)),Me(" "+Lt(p.value?"覆盖处理中…":"选择文件夹并直接覆盖"),1)],8,HE),M[30]||(M[30]=V("div",{class:"overwrite-hint"},"处理完成后原 PNG 将被裁剪版本覆盖，文件名保持不变",-1))]),u.value.length?(At(),Ct("div",GE,[V("button",{class:"btn-ghost btn-danger",onClick:I},"清空列表")])):Ht("",!0)],64)):Ht("",!0),u.value.length?(At(),Ct("div",VE,[V("div",WE,[Me(" 文件列表 ("+Lt(u.value.length)+") ",1),V("span",XE,[V("span",$E,Lt(g.value)+" 完成",1),m.value?(At(),Ct("span",qE," · "+Lt(m.value)+" 跳过",1)):Ht("",!0),h.value?(At(),Ct("span",jE," · "+Lt(h.value)+" 失败",1)):Ht("",!0)])]),(At(!0),Ct(_e,null,oi(u.value,D=>(At(),Ct("div",{key:D.id,class:re(["task-item",["st-"+D.status,{selected:c.value===D.id}]]),onClick:_=>T(D)},[V("div",ZE,[D.previewUrl?(At(),Ct("img",{key:0,src:D.previewUrl},null,8,KE)):(At(),Ct("div",JE,[...M[31]||(M[31]=[V("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[V("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),V("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),V("polyline",{points:"21 15 16 10 5 21"})],-1)])]))]),V("div",QE,[V("div",{class:"task-name",title:D.relPath||D.file.name},Lt(D.file.name),9,t2),D.relPath&&D.relPath!==D.file.name?(At(),Ct("div",e2,Lt(D.relPath),1)):Ht("",!0),V("div",n2,[D.origW?(At(),Ct("span",i2,Lt(D.origW)+"×"+Lt(D.origH),1)):Ht("",!0),D.cropW&&(D.status==="done"||D.status==="overwritten")?(At(),Ct("span",r2,"→ "+Lt(D.cropW)+"×"+Lt(D.cropH),1)):Ht("",!0),V("span",{class:re(["task-badge","badge-"+D.status])},Lt(dt(D.status)),3)]),D.errorMsg?(At(),Ct("div",s2,Lt(D.errorMsg),1)):Ht("",!0)]),V("div",{class:"task-btns",onClick:M[7]||(M[7]=Nn(()=>{},["stop"]))},[e.value==="safe"&&D.status==="done"?(At(),Ct("button",{key:0,class:"tbtn tbtn-dl",onClick:_=>W(D),title:"单独下载"},[...M[32]||(M[32]=[V("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[V("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),V("polyline",{points:"7 10 12 15 17 10"}),V("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1)])],8,a2)):Ht("",!0),V("button",{class:"tbtn tbtn-rm",onClick:_=>N(D),title:"移除"},[...M[33]||(M[33]=[V("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[V("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),V("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,o2)])],10,YE))),128))])):e.value==="safe"?(At(),Ct("div",{key:3,class:"empty-hint",onDragover:M[8]||(M[8]=Nn(()=>{},["prevent"])),onDrop:Nn(L,["prevent"])},[...M[34]||(M[34]=[V("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.2"},[V("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),V("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),V("polyline",{points:"21 15 16 10 5 21"})],-1),V("p",null,[Me("拖拽 PNG 文件 / 文件夹到此处"),V("br"),Me("或点击上方按钮添加")],-1)])],32)):Ht("",!0)]),V("div",{class:"preview-pane",onDragover:M[11]||(M[11]=Nn(()=>{},["prevent"])),onDrop:Nn(L,["prevent"])},[d.value?Ht("",!0):(At(),Ct("div",l2,[...M[36]||(M[36]=[cs('<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" data-v-30626382><rect x="3" y="3" width="18" height="18" rx="2" data-v-30626382></rect><circle cx="8.5" cy="8.5" r="1.5" data-v-30626382></circle><polyline points="21 15 16 10 5 21" data-v-30626382></polyline></svg><p data-v-30626382>点击左侧文件查看裁剪对比</p><p class="sub" data-v-30626382>或拖拽 PNG 文件 / 文件夹到此处</p>',3)])])),d.value?(At(),Ct(_e,{key:1},[V("div",c2,[V("div",u2,[M[37]||(M[37]=V("div",{class:"compare-label"},"原图",-1)),V("div",f2,[V("canvas",{ref_key:"origCanvas",ref:rt,class:"cmp-canvas"},null,512)]),d.value.origW?(At(),Ct("div",h2,Lt(d.value.origW)+" × "+Lt(d.value.origH),1)):Ht("",!0)]),M[39]||(M[39]=V("div",{class:"cmp-arrow"},[V("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[V("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),V("polyline",{points:"12 5 19 12 12 19"})])],-1)),V("div",d2,[M[38]||(M[38]=V("div",{class:"compare-label"},"裁剪后",-1)),V("div",p2,[V("canvas",{ref_key:"cropCanvas",ref:U,class:"cmp-canvas"},null,512),d.value.cropCanvas?Ht("",!0):(At(),Ct("div",m2,[V("span",null,Lt(d.value.status==="processing"?"处理中…":"尚未处理"),1)]))]),d.value.cropW?(At(),Ct("div",g2,[Me(Lt(d.value.cropW)+" × "+Lt(d.value.cropH)+" ",1),d.value.savingPct>0?(At(),Ct("span",_2,"节省 "+Lt(d.value.savingPct)+"%",1)):Ht("",!0),d.value.savingPct===0?(At(),Ct("span",v2,"无需裁剪")):Ht("",!0)])):Ht("",!0)])]),V("div",x2,[V("button",{class:"btn-primary",disabled:d.value.status==="processing",onClick:M[9]||(M[9]=D=>b(d.value))},"裁剪此文件",8,y2),e.value==="safe"&&d.value.status==="done"?(At(),Ct("button",{key:0,class:"btn-dl",onClick:M[10]||(M[10]=D=>W(d.value))},[M[40]||(M[40]=V("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[V("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),V("polyline",{points:"7 10 12 15 17 10"}),V("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1)),Me(" 下载 "+Lt(d.value.file.name),1)])):Ht("",!0),d.value.errorMsg?(At(),Ct("div",M2,Lt(d.value.errorMsg),1)):Ht("",!0)])],64)):Ht("",!0)],32),Z.value.show?(At(),Ct("div",b2,[V("div",S2,[M[41]||(M[41]=V("div",{class:"dialog-title"},"⚠️ 确认覆盖操作",-1)),V("div",E2,Lt(Z.value.message),1),V("div",w2,[V("button",{class:"btn-ghost",onClick:M[12]||(M[12]=D=>Z.value.resolve(!1))},"取消"),V("button",{class:"btn-danger-solid",onClick:M[13]||(M[13]=D=>Z.value.resolve(!0))},"确认覆盖")])])])):Ht("",!0),V("canvas",{ref_key:"workCanvas",ref:J,style:{display:"none"}},null,512)]))}},A2=Ci(T2,[["__scopeId","data-v-30626382"]]),C2=[{path:"/",component:xS},{path:"/convert",component:vE},{path:"/png-crop",component:A2}],R2=g0({history:jg("/kskr-preview/"),routes:C2});og(R0).use(R2).mount("#app");
