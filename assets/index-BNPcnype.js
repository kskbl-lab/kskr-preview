(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vl(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const ae={},Tr=[],Fn=()=>{},xf=()=>!1,Ta=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Aa=n=>n.startsWith("onUpdate:"),we=Object.assign,xl=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Ld=Object.prototype.hasOwnProperty,ne=(n,t)=>Ld.call(n,t),Ot=Array.isArray,Ar=n=>Ms(n)==="[object Map]",yf=n=>Ms(n)==="[object Set]",Yl=n=>Ms(n)==="[object Date]",Ht=n=>typeof n=="function",_e=n=>typeof n=="string",kn=n=>typeof n=="symbol",ie=n=>n!==null&&typeof n=="object",Mf=n=>(ie(n)||Ht(n))&&Ht(n.then)&&Ht(n.catch),Sf=Object.prototype.toString,Ms=n=>Sf.call(n),Dd=n=>Ms(n).slice(8,-1),bf=n=>Ms(n)==="[object Object]",yl=n=>_e(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ns=vl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ca=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Ud=/-\w/g,$e=Ca(n=>n.replace(Ud,t=>t.slice(1).toUpperCase())),Nd=/\B([A-Z])/g,nr=Ca(n=>n.replace(Nd,"-$1").toLowerCase()),Ra=Ca(n=>n.charAt(0).toUpperCase()+n.slice(1)),Za=Ca(n=>n?`on${Ra(n)}`:""),Dn=(n,t)=>!Object.is(n,t),ra=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Ef=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Ml=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Od=n=>{const t=_e(n)?Number(n):NaN;return isNaN(t)?n:t};let Zl;const Pa=()=>Zl||(Zl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xn(n){if(Ot(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],r=_e(i)?zd(i):xn(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(_e(n)||ie(n))return n}const Fd=/;(?![^(]*\))/g,Bd=/:([^]+)/,kd=/\/\*[^]*?\*\//g;function zd(n){const t={};return n.replace(kd,"").split(Fd).forEach(e=>{if(e){const i=e.split(Bd);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function oe(n){let t="";if(_e(n))t=n;else if(Ot(n))for(let e=0;e<n.length;e++){const i=oe(n[e]);i&&(t+=i+" ")}else if(ie(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Hd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gd=vl(Hd);function wf(n){return!!n||n===""}function Vd(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=Sl(n[i],t[i]);return e}function Sl(n,t){if(n===t)return!0;let e=Yl(n),i=Yl(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=kn(n),i=kn(t),e||i)return n===t;if(e=Ot(n),i=Ot(t),e||i)return e&&i?Vd(n,t):!1;if(e=ie(n),i=ie(t),e||i){if(!e||!i)return!1;const r=Object.keys(n).length,s=Object.keys(t).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Sl(n[o],t[o]))return!1}}return String(n)===String(t)}const Tf=n=>!!(n&&n.__v_isRef===!0),Ut=n=>_e(n)?n:n==null?"":Ot(n)||ie(n)&&(n.toString===Sf||!Ht(n.toString))?Tf(n)?Ut(n.value):JSON.stringify(n,Af,2):String(n),Af=(n,t)=>Tf(t)?Af(n,t.value):Ar(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,r],s)=>(e[Ka(i,s)+" =>"]=r,e),{})}:yf(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ka(e))}:kn(t)?Ka(t):ie(t)&&!Ot(t)&&!bf(t)?String(t):t,Ka=(n,t="")=>{var e;return kn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ie;class Wd{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ie&&(Ie.active?(this.parent=Ie,this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Ie;try{return Ie=this,t()}finally{Ie=e}}}on(){++this._on===1&&(this.prevScope=Ie,Ie=this)}off(){if(this._on>0&&--this._on===0){if(Ie===this)Ie=this.prevScope;else{let t=Ie;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Xd(){return Ie}let fe;const Ja=new WeakSet;class Cf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ie&&(Ie.active?Ie.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ja.has(this)&&(Ja.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Kl(this),If(this);const t=fe,e=yn;fe=this,yn=!0;try{return this.fn()}finally{Lf(this),fe=t,yn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)wl(t);this.deps=this.depsTail=void 0,Kl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ja.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$o(this)&&this.run()}get dirty(){return $o(this)}}let Rf=0,is,rs;function Pf(n,t=!1){if(n.flags|=8,t){n.next=rs,rs=n;return}n.next=is,is=n}function bl(){Rf++}function El(){if(--Rf>0)return;if(rs){let t=rs;for(rs=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;is;){let t=is;for(is=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function If(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Lf(n){let t,e=n.depsTail,i=e;for(;i;){const r=i.prevDep;i.version===-1?(i===e&&(e=r),wl(i),$d(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=t,n.depsTail=e}function $o(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Df(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Df(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===fs)||(n.globalVersion=fs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!$o(n))))return;n.flags|=2;const t=n.dep,e=fe,i=yn;fe=n,yn=!0;try{If(n);const r=n.fn(n._value);(t.version===0||Dn(r,n._value))&&(n.flags|=128,n._value=r,t.version++)}catch(r){throw t.version++,r}finally{fe=e,yn=i,Lf(n),n.flags&=-3}}function wl(n,t=!1){const{dep:e,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)wl(s,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function $d(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let yn=!0;const Uf=[];function ii(){Uf.push(yn),yn=!1}function ri(){const n=Uf.pop();yn=n===void 0?!0:n}function Kl(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=fe;fe=void 0;try{t()}finally{fe=e}}}let fs=0;class qd{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Tl{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!fe||!yn||fe===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==fe)e=this.activeLink=new qd(fe,this),fe.deps?(e.prevDep=fe.depsTail,fe.depsTail.nextDep=e,fe.depsTail=e):fe.deps=fe.depsTail=e,Nf(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=fe.depsTail,e.nextDep=void 0,fe.depsTail.nextDep=e,fe.depsTail=e,fe.deps===e&&(fe.deps=i)}return e}trigger(t){this.version++,fs++,this.notify(t)}notify(t){bl();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{El()}}}function Nf(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Nf(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const qo=new WeakMap,Yi=Symbol(""),jo=Symbol(""),hs=Symbol("");function Oe(n,t,e){if(yn&&fe){let i=qo.get(n);i||qo.set(n,i=new Map);let r=i.get(e);r||(i.set(e,r=new Tl),r.map=i,r.key=e),r.track()}}function Jn(n,t,e,i,r,s){const o=qo.get(n);if(!o){fs++;return}const a=l=>{l&&l.trigger()};if(bl(),t==="clear")o.forEach(a);else{const l=Ot(n),u=l&&yl(e);if(l&&e==="length"){const c=Number(i);o.forEach((f,p)=>{(p==="length"||p===hs||!kn(p)&&p>=c)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),u&&a(o.get(hs)),t){case"add":l?u&&a(o.get("length")):(a(o.get(Yi)),Ar(n)&&a(o.get(jo)));break;case"delete":l||(a(o.get(Yi)),Ar(n)&&a(o.get(jo)));break;case"set":Ar(n)&&a(o.get(Yi));break}}El()}function rr(n){const t=te(n);return t===n?t:(Oe(t,"iterate",hs),fn(n)?t:t.map(Sn))}function Ia(n){return Oe(n=te(n),"iterate",hs),n}function Pn(n,t){return si(n)?Dr(Zi(n)?Sn(t):t):Sn(t)}const jd={__proto__:null,[Symbol.iterator](){return Qa(this,Symbol.iterator,n=>Pn(this,n))},concat(...n){return rr(this).concat(...n.map(t=>Ot(t)?rr(t):t))},entries(){return Qa(this,"entries",n=>(n[1]=Pn(this,n[1]),n))},every(n,t){return Hn(this,"every",n,t,void 0,arguments)},filter(n,t){return Hn(this,"filter",n,t,e=>e.map(i=>Pn(this,i)),arguments)},find(n,t){return Hn(this,"find",n,t,e=>Pn(this,e),arguments)},findIndex(n,t){return Hn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Hn(this,"findLast",n,t,e=>Pn(this,e),arguments)},findLastIndex(n,t){return Hn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Hn(this,"forEach",n,t,void 0,arguments)},includes(...n){return to(this,"includes",n)},indexOf(...n){return to(this,"indexOf",n)},join(n){return rr(this).join(n)},lastIndexOf(...n){return to(this,"lastIndexOf",n)},map(n,t){return Hn(this,"map",n,t,void 0,arguments)},pop(){return Vr(this,"pop")},push(...n){return Vr(this,"push",n)},reduce(n,...t){return Jl(this,"reduce",n,t)},reduceRight(n,...t){return Jl(this,"reduceRight",n,t)},shift(){return Vr(this,"shift")},some(n,t){return Hn(this,"some",n,t,void 0,arguments)},splice(...n){return Vr(this,"splice",n)},toReversed(){return rr(this).toReversed()},toSorted(n){return rr(this).toSorted(n)},toSpliced(...n){return rr(this).toSpliced(...n)},unshift(...n){return Vr(this,"unshift",n)},values(){return Qa(this,"values",n=>Pn(this,n))}};function Qa(n,t,e){const i=Ia(n),r=i[t]();return i!==n&&!fn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=e(s.value)),s}),r}const Yd=Array.prototype;function Hn(n,t,e,i,r,s){const o=Ia(n),a=o!==n&&!fn(n),l=o[t];if(l!==Yd[t]){const f=l.apply(n,s);return a?Sn(f):f}let u=e;o!==n&&(a?u=function(f,p){return e.call(this,Pn(n,f),p,n)}:e.length>2&&(u=function(f,p){return e.call(this,f,p,n)}));const c=l.call(o,u,i);return a&&r?r(c):c}function Jl(n,t,e,i){const r=Ia(n),s=r!==n&&!fn(n);let o=e,a=!1;r!==n&&(s?(a=i.length===0,o=function(u,c,f){return a&&(a=!1,u=Pn(n,u)),e.call(this,u,Pn(n,c),f,n)}):e.length>3&&(o=function(u,c,f){return e.call(this,u,c,f,n)}));const l=r[t](o,...i);return a?Pn(n,l):l}function to(n,t,e){const i=te(n);Oe(i,"iterate",hs);const r=i[t](...e);return(r===-1||r===!1)&&Rl(e[0])?(e[0]=te(e[0]),i[t](...e)):r}function Vr(n,t,e=[]){ii(),bl();const i=te(n)[t].apply(n,e);return El(),ri(),i}const Zd=vl("__proto__,__v_isRef,__isVue"),Of=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(kn));function Kd(n){kn(n)||(n=String(n));const t=te(this);return Oe(t,"has",n),t.hasOwnProperty(n)}class Ff{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const r=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return i===(r?s?op:Hf:s?zf:kf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Ot(t);if(!r){let l;if(o&&(l=jd[e]))return l;if(e==="hasOwnProperty")return Kd}const a=Reflect.get(t,e,Be(t)?t:i);if((kn(e)?Of.has(e):Zd(e))||(r||Oe(t,"get",e),s))return a;if(Be(a)){const l=o&&yl(e)?a:a.value;return r&&ie(l)?Zo(l):l}return ie(a)?r?Zo(a):La(a):a}}class Bf extends Ff{constructor(t=!1){super(!1,t)}set(t,e,i,r){let s=t[e];const o=Ot(t)&&yl(e);if(!this._isShallow){const u=si(s);if(!fn(i)&&!si(i)&&(s=te(s),i=te(i)),!o&&Be(s)&&!Be(i))return u||(s.value=i),!0}const a=o?Number(e)<t.length:ne(t,e),l=Reflect.set(t,e,i,Be(t)?t:r);return t===te(r)&&(a?Dn(i,s)&&Jn(t,"set",e,i):Jn(t,"add",e,i)),l}deleteProperty(t,e){const i=ne(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&i&&Jn(t,"delete",e,void 0),r}has(t,e){const i=Reflect.has(t,e);return(!kn(e)||!Of.has(e))&&Oe(t,"has",e),i}ownKeys(t){return Oe(t,"iterate",Ot(t)?"length":Yi),Reflect.ownKeys(t)}}class Jd extends Ff{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Qd=new Bf,tp=new Jd,ep=new Bf(!0);const Yo=n=>n,Is=n=>Reflect.getPrototypeOf(n);function np(n,t,e){return function(...i){const r=this.__v_raw,s=te(r),o=Ar(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=r[n](...i),c=e?Yo:t?Dr:Sn;return!t&&Oe(s,"iterate",l?jo:Yi),we(Object.create(u),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:a?[c(f[0]),c(f[1])]:c(f),done:p}}})}}function Ls(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function ip(n,t){const e={get(r){const s=this.__v_raw,o=te(s),a=te(r);n||(Dn(r,a)&&Oe(o,"get",r),Oe(o,"get",a));const{has:l}=Is(o),u=t?Yo:n?Dr:Sn;if(l.call(o,r))return u(s.get(r));if(l.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Oe(te(r),"iterate",Yi),r.size},has(r){const s=this.__v_raw,o=te(s),a=te(r);return n||(Dn(r,a)&&Oe(o,"has",r),Oe(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=te(a),u=t?Yo:n?Dr:Sn;return!n&&Oe(l,"iterate",Yi),a.forEach((c,f)=>r.call(s,u(c),u(f),o))}};return we(e,n?{add:Ls("add"),set:Ls("set"),delete:Ls("delete"),clear:Ls("clear")}:{add(r){const s=te(this),o=Is(s),a=te(r),l=!t&&!fn(r)&&!si(r)?a:r;return o.has.call(s,l)||Dn(r,l)&&o.has.call(s,r)||Dn(a,l)&&o.has.call(s,a)||(s.add(l),Jn(s,"add",l,l)),this},set(r,s){!t&&!fn(s)&&!si(s)&&(s=te(s));const o=te(this),{has:a,get:l}=Is(o);let u=a.call(o,r);u||(r=te(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,s),u?Dn(s,c)&&Jn(o,"set",r,s):Jn(o,"add",r,s),this},delete(r){const s=te(this),{has:o,get:a}=Is(s);let l=o.call(s,r);l||(r=te(r),l=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return l&&Jn(s,"delete",r,void 0),u},clear(){const r=te(this),s=r.size!==0,o=r.clear();return s&&Jn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=np(r,n,t)}),e}function Al(n,t){const e=ip(n,t);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ne(e,r)&&r in i?e:i,r,s)}const rp={get:Al(!1,!1)},sp={get:Al(!1,!0)},ap={get:Al(!0,!1)};const kf=new WeakMap,zf=new WeakMap,Hf=new WeakMap,op=new WeakMap;function lp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cp(n){return n.__v_skip||!Object.isExtensible(n)?0:lp(Dd(n))}function La(n){return si(n)?n:Cl(n,!1,Qd,rp,kf)}function Gf(n){return Cl(n,!1,ep,sp,zf)}function Zo(n){return Cl(n,!0,tp,ap,Hf)}function Cl(n,t,e,i,r){if(!ie(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const s=cp(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:e);return r.set(n,a),a}function Zi(n){return si(n)?Zi(n.__v_raw):!!(n&&n.__v_isReactive)}function si(n){return!!(n&&n.__v_isReadonly)}function fn(n){return!!(n&&n.__v_isShallow)}function Rl(n){return n?!!n.__v_raw:!1}function te(n){const t=n&&n.__v_raw;return t?te(t):n}function up(n){return!ne(n,"__v_skip")&&Object.isExtensible(n)&&Ef(n,"__v_skip",!0),n}const Sn=n=>ie(n)?La(n):n,Dr=n=>ie(n)?Zo(n):n;function Be(n){return n?n.__v_isRef===!0:!1}function Zt(n){return Vf(n,!1)}function fp(n){return Vf(n,!0)}function Vf(n,t){return Be(n)?n:new hp(n,t)}class hp{constructor(t,e){this.dep=new Tl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:te(t),this._value=e?t:Sn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||fn(t)||si(t);t=i?t:te(t),Dn(t,e)&&(this._rawValue=t,this._value=i?t:Sn(t),this.dep.trigger())}}function Ki(n){return Be(n)?n.value:n}const dp={get:(n,t,e)=>t==="__v_raw"?n:Ki(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const r=n[t];return Be(r)&&!Be(e)?(r.value=e,!0):Reflect.set(n,t,e,i)}};function Wf(n){return Zi(n)?n:new Proxy(n,dp)}class pp{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Tl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=fs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&fe!==this)return Pf(this,!0),!0}get value(){const t=this.dep.track();return Df(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function mp(n,t,e=!1){let i,r;return Ht(n)?i=n:(i=n.get,r=n.set),new pp(i,r,e)}const Ds={},ua=new WeakMap;let Hi;function gp(n,t=!1,e=Hi){if(e){let i=ua.get(e);i||ua.set(e,i=[]),i.push(n)}}function _p(n,t,e=ae){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=e,u=S=>r?S:fn(S)||r===!1||r===0?Qn(S,1):Qn(S);let c,f,p,d,v=!1,g=!1;if(Be(n)?(f=()=>n.value,v=fn(n)):Zi(n)?(f=()=>u(n),v=!0):Ot(n)?(g=!0,v=n.some(S=>Zi(S)||fn(S)),f=()=>n.map(S=>{if(Be(S))return S.value;if(Zi(S))return u(S);if(Ht(S))return l?l(S,2):S()})):Ht(n)?t?f=l?()=>l(n,2):n:f=()=>{if(p){ii();try{p()}finally{ri()}}const S=Hi;Hi=c;try{return l?l(n,3,[d]):n(d)}finally{Hi=S}}:f=Fn,t&&r){const S=f,E=r===!0?1/0:r;f=()=>Qn(S(),E)}const m=Xd(),h=()=>{c.stop(),m&&m.active&&xl(m.effects,c)};if(s&&t){const S=t;t=(...E)=>{S(...E),h()}}let y=g?new Array(n.length).fill(Ds):Ds;const _=S=>{if(!(!(c.flags&1)||!c.dirty&&!S))if(t){const E=c.run();if(r||v||(g?E.some((L,C)=>Dn(L,y[C])):Dn(E,y))){p&&p();const L=Hi;Hi=c;try{const C=[E,y===Ds?void 0:g&&y[0]===Ds?[]:y,d];y=E,l?l(t,3,C):t(...C)}finally{Hi=L}}}else c.run()};return a&&a(_),c=new Cf(f),c.scheduler=o?()=>o(_,!1):_,d=S=>gp(S,!1,c),p=c.onStop=()=>{const S=ua.get(c);if(S){if(l)l(S,4);else for(const E of S)E();ua.delete(c)}},t?i?_(!0):y=c.run():o?o(_.bind(null,!0),!0):c.run(),h.pause=c.pause.bind(c),h.resume=c.resume.bind(c),h.stop=h,h}function Qn(n,t=1/0,e){if(t<=0||!ie(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Be(n))Qn(n.value,t,e);else if(Ot(n))for(let i=0;i<n.length;i++)Qn(n[i],t,e);else if(yf(n)||Ar(n))n.forEach(i=>{Qn(i,t,e)});else if(bf(n)){for(const i in n)Qn(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Qn(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ss(n,t,e,i){try{return i?n(...i):n()}catch(r){Da(r,t,e)}}function bn(n,t,e,i){if(Ht(n)){const r=Ss(n,t,e,i);return r&&Mf(r)&&r.catch(s=>{Da(s,t,e)}),r}if(Ot(n)){const r=[];for(let s=0;s<n.length;s++)r.push(bn(n[s],t,e,i));return r}}function Da(n,t,e,i=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ae;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}a=a.parent}if(s){ii(),Ss(s,null,10,[n,l,u]),ri();return}}vp(n,e,r,i,o)}function vp(n,t,e,i=!0,r=!1){if(r)throw n;console.error(n)}const We=[];let An=-1;const Cr=[];let vi=null,Mr=0;const Xf=Promise.resolve();let fa=null;function gn(n){const t=fa||Xf;return n?t.then(this?n.bind(this):n):t}function xp(n){let t=An+1,e=We.length;for(;t<e;){const i=t+e>>>1,r=We[i],s=ds(r);s<n||s===n&&r.flags&2?t=i+1:e=i}return t}function Pl(n){if(!(n.flags&1)){const t=ds(n),e=We[We.length-1];!e||!(n.flags&2)&&t>=ds(e)?We.push(n):We.splice(xp(t),0,n),n.flags|=1,$f()}}function $f(){fa||(fa=Xf.then(jf))}function yp(n){Ot(n)?Cr.push(...n):vi&&n.id===-1?vi.splice(Mr+1,0,n):n.flags&1||(Cr.push(n),n.flags|=1),$f()}function Ql(n,t,e=An+1){for(;e<We.length;e++){const i=We[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;We.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function qf(n){if(Cr.length){const t=[...new Set(Cr)].sort((e,i)=>ds(e)-ds(i));if(Cr.length=0,vi){vi.push(...t);return}for(vi=t,Mr=0;Mr<vi.length;Mr++){const e=vi[Mr];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}vi=null,Mr=0}}const ds=n=>n.id==null?n.flags&2?-1:1/0:n.id;function jf(n){try{for(An=0;An<We.length;An++){const t=We[An];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ss(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;An<We.length;An++){const t=We[An];t&&(t.flags&=-2)}An=-1,We.length=0,qf(),fa=null,(We.length||Cr.length)&&jf()}}let rn=null,Yf=null;function ha(n){const t=rn;return rn=n,Yf=n&&n.type.__scopeId||null,t}function Zf(n,t=rn,e){if(!t||n._n)return n;const i=(...r)=>{i._d&&ma(-1);const s=ha(t);let o;try{o=n(...r)}finally{ha(s),i._d&&ma(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ps(n,t){if(rn===null)return n;const e=ka(rn),i=n.dirs||(n.dirs=[]);for(let r=0;r<t.length;r++){let[s,o,a,l=ae]=t[r];s&&(Ht(s)&&(s={mounted:s,updated:s}),s.deep&&Qn(o),i.push({dir:s,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ii(n,t,e,i){const r=n.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ii(),bn(l,e,8,[n.el,a,n,t]),ri())}}function sa(n,t){if(Fe){let e=Fe.provides;const i=Fe.parent&&Fe.parent.provides;i===e&&(e=Fe.provides=Object.create(i)),e[n]=t}}function Mn(n,t,e=!1){const i=Rh();if(i||Pr){let r=Pr?Pr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return e&&Ht(t)?t.call(i&&i.proxy):t}}const Mp=Symbol.for("v-scx"),Sp=()=>Mn(Mp);function Rr(n,t,e){return Kf(n,t,e)}function Kf(n,t,e=ae){const{immediate:i,deep:r,flush:s,once:o}=e,a=we({},e),l=t&&i||!t&&s!=="post";let u;if(_s){if(s==="sync"){const d=Sp();u=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Fn,d.resume=Fn,d.pause=Fn,d}}const c=Fe;a.call=(d,v,g)=>bn(d,c,v,g);let f=!1;s==="post"?a.scheduler=d=>{Ye(d,c&&c.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,v)=>{v?d():Pl(d)}),a.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const p=_p(n,t,a);return _s&&(u?u.push(p):l&&p()),p}function bp(n,t,e){const i=this.proxy,r=_e(n)?n.includes(".")?Jf(i,n):()=>i[n]:n.bind(i,i);let s;Ht(t)?s=t:(s=t.handler,e=t);const o=bs(this),a=Kf(r,s.bind(i),e);return o(),a}function Jf(n,t){const e=t.split(".");return()=>{let i=n;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}const Ep=Symbol("_vte"),Qf=n=>n.__isTeleport,Cn=Symbol("_leaveCb"),Wr=Symbol("_enterCb");function wp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Il(()=>{n.isMounted=!0}),Oa(()=>{n.isUnmounting=!0}),n}const cn=[Function,Array],th={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:cn,onEnter:cn,onAfterEnter:cn,onEnterCancelled:cn,onBeforeLeave:cn,onLeave:cn,onAfterLeave:cn,onLeaveCancelled:cn,onBeforeAppear:cn,onAppear:cn,onAfterAppear:cn,onAppearCancelled:cn},eh=n=>{const t=n.subTree;return t.component?eh(t.component):t},Tp={name:"BaseTransition",props:th,setup(n,{slots:t}){const e=Rh(),i=wp();return()=>{const r=t.default&&rh(t.default(),!0),s=r&&r.length?nh(r):e.subTree?Jt():void 0;if(!s)return;const o=te(n),{mode:a}=o;if(i.isLeaving)return eo(s);const l=tc(s);if(!l)return eo(s);let u=Ko(l,o,i,e,f=>u=f);l.type!==Xe&&ms(l,u);let c=e.subTree&&tc(e.subTree);if(c&&c.type!==Xe&&!Wi(c,l)&&eh(e).type!==Xe){let f=Ko(c,o,i,e);if(ms(c,f),a==="out-in"&&l.type!==Xe)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete f.afterLeave,c=void 0},eo(s);a==="in-out"&&l.type!==Xe?f.delayLeave=(p,d,v)=>{const g=ih(i,c);g[String(c.key)]=c,p[Cn]=()=>{d(),p[Cn]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{v(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function nh(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Xe){t=e;break}}return t}const Ap=Tp;function ih(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function Ko(n,t,e,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:p,onLeave:d,onAfterLeave:v,onLeaveCancelled:g,onBeforeAppear:m,onAppear:h,onAfterAppear:y,onAppearCancelled:_}=t,S=String(n.key),E=ih(e,n),L=(V,T)=>{V&&bn(V,i,9,T)},C=(V,T)=>{const U=T[1];L(V,T),Ot(V)?V.every(P=>P.length<=1)&&U():V.length<=1&&U()},z={mode:o,persisted:a,beforeEnter(V){let T=l;if(!e.isMounted)if(s)T=m||l;else return;V[Cn]&&V[Cn](!0);const U=E[S];U&&Wi(n,U)&&U.el[Cn]&&U.el[Cn](),L(T,[V])},enter(V){if(E[S]===n)return;let T=u,U=c,P=f;if(!e.isMounted)if(s)T=h||u,U=y||c,P=_||f;else return;let N=!1;V[Wr]=Y=>{N||(N=!0,Y?L(P,[V]):L(U,[V]),z.delayedLeave&&z.delayedLeave(),V[Wr]=void 0)};const M=V[Wr].bind(null,!1);T?C(T,[V,M]):M()},leave(V,T){const U=String(n.key);if(V[Wr]&&V[Wr](!0),e.isUnmounting)return T();L(p,[V]);let P=!1;V[Cn]=M=>{P||(P=!0,T(),M?L(g,[V]):L(v,[V]),V[Cn]=void 0,E[U]===n&&delete E[U])};const N=V[Cn].bind(null,!1);E[U]=n,d?C(d,[V,N]):N()},clone(V){const T=Ko(V,t,e,i,r);return r&&r(T),T}};return z}function eo(n){if(Ua(n))return n=wi(n),n.children=null,n}function tc(n){if(!Ua(n))return Qf(n.type)&&n.children?nh(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Ht(e.default))return e.default()}}function ms(n,t){n.shapeFlag&6&&n.component?(n.transition=t,ms(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function rh(n,t=!1,e){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:s);o.type===ye?(o.patchFlag&128&&r++,i=i.concat(rh(o.children,t,a))):(t||o.type!==Xe)&&i.push(a!=null?wi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function sh(n,t){return Ht(n)?we({name:n.name},t,{setup:n}):n}function ah(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ec(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const da=new WeakMap;function ss(n,t,e,i,r=!1){if(Ot(n)){n.forEach((g,m)=>ss(g,t&&(Ot(t)?t[m]:t),e,i,r));return}if(as(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ss(n,t,e,i.component.subTree);return}const s=i.shapeFlag&4?ka(i.component):i.el,o=r?null:s,{i:a,r:l}=n,u=t&&t.r,c=a.refs===ae?a.refs={}:a.refs,f=a.setupState,p=te(f),d=f===ae?xf:g=>ec(c,g)?!1:ne(p,g),v=(g,m)=>!(m&&ec(c,m));if(u!=null&&u!==l){if(nc(t),_e(u))c[u]=null,d(u)&&(f[u]=null);else if(Be(u)){const g=t;v(u,g.k)&&(u.value=null),g.k&&(c[g.k]=null)}}if(Ht(l))Ss(l,a,12,[o,c]);else{const g=_e(l),m=Be(l);if(g||m){const h=()=>{if(n.f){const y=g?d(l)?f[l]:c[l]:v()||!n.k?l.value:c[n.k];if(r)Ot(y)&&xl(y,s);else if(Ot(y))y.includes(s)||y.push(s);else if(g)c[l]=[s],d(l)&&(f[l]=c[l]);else{const _=[s];v(l,n.k)&&(l.value=_),n.k&&(c[n.k]=_)}}else g?(c[l]=o,d(l)&&(f[l]=o)):m&&(v(l,n.k)&&(l.value=o),n.k&&(c[n.k]=o))};if(o){const y=()=>{h(),da.delete(n)};y.id=-1,da.set(n,y),Ye(y,e)}else nc(n),h()}}}function nc(n){const t=da.get(n);t&&(t.flags|=8,da.delete(n))}Pa().requestIdleCallback;Pa().cancelIdleCallback;const as=n=>!!n.type.__asyncLoader,Ua=n=>n.type.__isKeepAlive;function Cp(n,t){oh(n,"a",t)}function Rp(n,t){oh(n,"da",t)}function oh(n,t,e=Fe){const i=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Na(t,i,e),e){let r=e.parent;for(;r&&r.parent;)Ua(r.parent.vnode)&&Pp(i,t,e,r),r=r.parent}}function Pp(n,t,e,i){const r=Na(t,n,i,!0);lh(()=>{xl(i[t],r)},e)}function Na(n,t,e=Fe,i=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...o)=>{ii();const a=bs(e),l=bn(t,e,n,o);return a(),ri(),l});return i?r.unshift(s):r.push(s),s}}const ci=n=>(t,e=Fe)=>{(!_s||n==="sp")&&Na(n,(...i)=>t(...i),e)},Ip=ci("bm"),Il=ci("m"),Lp=ci("bu"),Dp=ci("u"),Oa=ci("bum"),lh=ci("um"),Up=ci("sp"),Np=ci("rtg"),Op=ci("rtc");function Fp(n,t=Fe){Na("ec",n,t)}const Bp="components";function kp(n,t){return Hp(Bp,n,!0,t)||n}const zp=Symbol.for("v-ndc");function Hp(n,t,e=!0,i=!1){const r=rn||Fe;if(r){const s=r.type;{const a=wm(s,!1);if(a&&(a===t||a===$e(t)||a===Ra($e(t))))return s}const o=ic(r[n]||s[n],t)||ic(r.appContext[n],t);return!o&&i?s:o}}function ic(n,t){return n&&(n[t]||n[$e(t)]||n[Ra($e(t))])}function ai(n,t,e,i){let r;const s=e,o=Ot(n);if(o||_e(n)){const a=o&&Zi(n);let l=!1,u=!1;a&&(l=!fn(n),u=si(n),n=Ia(n)),r=new Array(n.length);for(let c=0,f=n.length;c<f;c++)r[c]=t(l?u?Dr(Sn(n[c])):Sn(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=t(a+1,a,void 0,s)}else if(ie(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=t(n[c],c,l,s)}}else r=[];return r}const Jo=n=>n?Ph(n)?ka(n):Jo(n.parent):null,os=we(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Jo(n.parent),$root:n=>Jo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>uh(n),$forceUpdate:n=>n.f||(n.f=()=>{Pl(n.update)}),$nextTick:n=>n.n||(n.n=gn.bind(n.proxy)),$watch:n=>bp.bind(n)}),no=(n,t)=>n!==ae&&!n.__isScriptSetup&&ne(n,t),Gp={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(no(i,t))return o[t]=1,i[t];if(r!==ae&&ne(r,t))return o[t]=2,r[t];if(ne(s,t))return o[t]=3,s[t];if(e!==ae&&ne(e,t))return o[t]=4,e[t];Qo&&(o[t]=0)}}const u=os[t];let c,f;if(u)return t==="$attrs"&&Oe(n.attrs,"get",""),u(n);if((c=a.__cssModules)&&(c=c[t]))return c;if(e!==ae&&ne(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,ne(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:r,ctx:s}=n;return no(r,t)?(r[t]=e,!0):i!==ae&&ne(i,t)?(i[t]=e,!0):ne(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(e[a]||n!==ae&&a[0]!=="$"&&ne(n,a)||no(t,a)||ne(s,a)||ne(i,a)||ne(os,a)||ne(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ne(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function rc(n){return Ot(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Qo=!0;function Vp(n){const t=uh(n),e=n.proxy,i=n.ctx;Qo=!1,t.beforeCreate&&sc(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:p,beforeUpdate:d,updated:v,activated:g,deactivated:m,beforeDestroy:h,beforeUnmount:y,destroyed:_,unmounted:S,render:E,renderTracked:L,renderTriggered:C,errorCaptured:z,serverPrefetch:V,expose:T,inheritAttrs:U,components:P,directives:N,filters:M}=t;if(u&&Wp(u,i,null),o)for(const Z in o){const st=o[Z];Ht(st)&&(i[Z]=st.bind(e))}if(r){const Z=r.call(e,e);ie(Z)&&(n.data=La(Z))}if(Qo=!0,s)for(const Z in s){const st=s[Z],et=Ht(st)?st.bind(e,e):Ht(st.get)?st.get.bind(e,e):Fn,ot=!Ht(st)&&Ht(st.set)?st.set.bind(e):Fn,F=de({get:et,set:ot});Object.defineProperty(i,Z,{enumerable:!0,configurable:!0,get:()=>F.value,set:O=>F.value=O})}if(a)for(const Z in a)ch(a[Z],i,e,Z);if(l){const Z=Ht(l)?l.call(e):l;Reflect.ownKeys(Z).forEach(st=>{sa(st,Z[st])})}c&&sc(c,n,"c");function W(Z,st){Ot(st)?st.forEach(et=>Z(et.bind(e))):st&&Z(st.bind(e))}if(W(Ip,f),W(Il,p),W(Lp,d),W(Dp,v),W(Cp,g),W(Rp,m),W(Fp,z),W(Op,L),W(Np,C),W(Oa,y),W(lh,S),W(Up,V),Ot(T))if(T.length){const Z=n.exposed||(n.exposed={});T.forEach(st=>{Object.defineProperty(Z,st,{get:()=>e[st],set:et=>e[st]=et,enumerable:!0})})}else n.exposed||(n.exposed={});E&&n.render===Fn&&(n.render=E),U!=null&&(n.inheritAttrs=U),P&&(n.components=P),N&&(n.directives=N),V&&ah(n)}function Wp(n,t,e=Fn){Ot(n)&&(n=tl(n));for(const i in n){const r=n[i];let s;ie(r)?"default"in r?s=Mn(r.from||i,r.default,!0):s=Mn(r.from||i):s=Mn(r),Be(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function sc(n,t,e){bn(Ot(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function ch(n,t,e,i){let r=i.includes(".")?Jf(e,i):()=>e[i];if(_e(n)){const s=t[n];Ht(s)&&Rr(r,s)}else if(Ht(n))Rr(r,n.bind(e));else if(ie(n))if(Ot(n))n.forEach(s=>ch(s,t,e,i));else{const s=Ht(n.handler)?n.handler.bind(e):t[n.handler];Ht(s)&&Rr(r,s,n)}}function uh(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(u=>pa(l,u,o,!0)),pa(l,t,o)),ie(t)&&s.set(t,l),l}function pa(n,t,e,i=!1){const{mixins:r,extends:s}=t;s&&pa(n,s,e,!0),r&&r.forEach(o=>pa(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Xp[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Xp={data:ac,props:oc,emits:oc,methods:ts,computed:ts,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:ts,directives:ts,watch:qp,provide:ac,inject:$p};function ac(n,t){return t?n?function(){return we(Ht(n)?n.call(this,this):n,Ht(t)?t.call(this,this):t)}:t:n}function $p(n,t){return ts(tl(n),tl(t))}function tl(n){if(Ot(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function ze(n,t){return n?[...new Set([].concat(n,t))]:t}function ts(n,t){return n?we(Object.create(null),n,t):t}function oc(n,t){return n?Ot(n)&&Ot(t)?[...new Set([...n,...t])]:we(Object.create(null),rc(n),rc(t??{})):t}function qp(n,t){if(!n)return t;if(!t)return n;const e=we(Object.create(null),n);for(const i in t)e[i]=ze(n[i],t[i]);return e}function fh(){return{app:null,config:{isNativeTag:xf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jp=0;function Yp(n,t){return function(i,r=null){Ht(i)||(i=we({},i)),r!=null&&!ie(r)&&(r=null);const s=fh(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:jp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Am,get config(){return s.config},set config(c){},use(c,...f){return o.has(c)||(c&&Ht(c.install)?(o.add(c),c.install(u,...f)):Ht(c)&&(o.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,p){if(!l){const d=u._ceVNode||be(i,r);return d.appContext=s,p===!0?p="svg":p===!1&&(p=void 0),n(d,c,p),l=!0,u._container=c,c.__vue_app__=u,ka(d.component)}},onUnmount(c){a.push(c)},unmount(){l&&(bn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=Pr;Pr=u;try{return c()}finally{Pr=f}}};return u}}let Pr=null;const Zp=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${$e(t)}Modifiers`]||n[`${nr(t)}Modifiers`];function Kp(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ae;let r=e;const s=t.startsWith("update:"),o=s&&Zp(i,t.slice(7));o&&(o.trim&&(r=e.map(c=>_e(c)?c.trim():c)),o.number&&(r=e.map(Ml)));let a,l=i[a=Za(t)]||i[a=Za($e(t))];!l&&s&&(l=i[a=Za(nr(t))]),l&&bn(l,n,6,r);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,bn(u,n,6,r)}}const Jp=new WeakMap;function hh(n,t,e=!1){const i=e?Jp:t.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ht(n)){const l=u=>{const c=hh(u,t,!0);c&&(a=!0,we(o,c))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ie(n)&&i.set(n,null),null):(Ot(s)?s.forEach(l=>o[l]=null):we(o,s),ie(n)&&i.set(n,o),o)}function Fa(n,t){return!n||!Ta(t)?!1:(t=t.slice(2).replace(/Once$/,""),ne(n,t[0].toLowerCase()+t.slice(1))||ne(n,nr(t))||ne(n,t))}function lc(n){const{type:t,vnode:e,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:p,setupState:d,ctx:v,inheritAttrs:g}=n,m=ha(n);let h,y;try{if(e.shapeFlag&4){const S=r||i,E=S;h=In(u.call(E,S,c,f,d,p,v)),y=a}else{const S=t;h=In(S.length>1?S(f,{attrs:a,slots:o,emit:l}):S(f,null)),y=t.props?a:Qp(a)}}catch(S){ls.length=0,Da(S,n,1),h=be(Xe)}let _=h;if(y&&g!==!1){const S=Object.keys(y),{shapeFlag:E}=_;S.length&&E&7&&(s&&S.some(Aa)&&(y=tm(y,s)),_=wi(_,y,!1,!0))}return e.dirs&&(_=wi(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(e.dirs):e.dirs),e.transition&&ms(_,e.transition),h=_,ha(m),h}const Qp=n=>{let t;for(const e in n)(e==="class"||e==="style"||Ta(e))&&((t||(t={}))[e]=n[e]);return t},tm=(n,t)=>{const e={};for(const i in n)(!Aa(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function em(n,t,e){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?cc(i,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const p=c[f];if(dh(o,i,p)&&!Fa(u,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?cc(i,o,u):!0:!!o;return!1}function cc(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(dh(t,n,s)&&!Fa(e,s))return!0}return!1}function dh(n,t,e){const i=n[e],r=t[e];return e==="style"&&ie(i)&&ie(r)?!Sl(i,r):i!==r}function nm({vnode:n,parent:t,suspense:e},i){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const ph={},mh=()=>Object.create(ph),gh=n=>Object.getPrototypeOf(n)===ph;function im(n,t,e,i=!1){const r={},s=mh();n.propsDefaults=Object.create(null),_h(n,t,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);e?n.props=i?r:Gf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function rm(n,t,e,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=te(r),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let p=c[f];if(Fa(n.emitsOptions,p))continue;const d=t[p];if(l)if(ne(s,p))d!==s[p]&&(s[p]=d,u=!0);else{const v=$e(p);r[v]=el(l,a,v,d,n,!1)}else d!==s[p]&&(s[p]=d,u=!0)}}}else{_h(n,t,r,s)&&(u=!0);let c;for(const f in a)(!t||!ne(t,f)&&((c=nr(f))===f||!ne(t,c)))&&(l?e&&(e[f]!==void 0||e[c]!==void 0)&&(r[f]=el(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!t||!ne(t,f))&&(delete s[f],u=!0)}u&&Jn(n.attrs,"set","")}function _h(n,t,e,i){const[r,s]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(ns(l))continue;const u=t[l];let c;r&&ne(r,c=$e(l))?!s||!s.includes(c)?e[c]=u:(a||(a={}))[c]=u:Fa(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=te(e),u=a||ae;for(let c=0;c<s.length;c++){const f=s[c];e[f]=el(r,l,f,u[f],n,!ne(u,f))}}return o}function el(n,t,e,i,r,s){const o=n[e];if(o!=null){const a=ne(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ht(l)){const{propsDefaults:u}=r;if(e in u)i=u[e];else{const c=bs(r);i=u[e]=l.call(null,t),c()}}else i=l;r.ce&&r.ce._setProp(e,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===nr(e))&&(i=!0))}return i}const sm=new WeakMap;function vh(n,t,e=!1){const i=e?sm:t.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ht(n)){const c=f=>{l=!0;const[p,d]=vh(f,t,!0);we(o,p),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!s&&!l)return ie(n)&&i.set(n,Tr),Tr;if(Ot(s))for(let c=0;c<s.length;c++){const f=$e(s[c]);uc(f)&&(o[f]=ae)}else if(s)for(const c in s){const f=$e(c);if(uc(f)){const p=s[c],d=o[f]=Ot(p)||Ht(p)?{type:p}:we({},p),v=d.type;let g=!1,m=!0;if(Ot(v))for(let h=0;h<v.length;++h){const y=v[h],_=Ht(y)&&y.name;if(_==="Boolean"){g=!0;break}else _==="String"&&(m=!1)}else g=Ht(v)&&v.name==="Boolean";d[0]=g,d[1]=m,(g||ne(d,"default"))&&a.push(f)}}const u=[o,a];return ie(n)&&i.set(n,u),u}function uc(n){return n[0]!=="$"&&!ns(n)}const Ll=n=>n==="_"||n==="_ctx"||n==="$stable",Dl=n=>Ot(n)?n.map(In):[In(n)],am=(n,t,e)=>{if(t._n)return t;const i=Zf((...r)=>Dl(t(...r)),e);return i._c=!1,i},xh=(n,t,e)=>{const i=n._ctx;for(const r in n){if(Ll(r))continue;const s=n[r];if(Ht(s))t[r]=am(r,s,i);else if(s!=null){const o=Dl(s);t[r]=()=>o}}},yh=(n,t)=>{const e=Dl(t);n.slots.default=()=>e},Mh=(n,t,e)=>{for(const i in t)(e||!Ll(i))&&(n[i]=t[i])},om=(n,t,e)=>{const i=n.slots=mh();if(n.vnode.shapeFlag&32){const r=t._;r?(Mh(i,t,e),e&&Ef(i,"_",r,!0)):xh(t,i)}else t&&yh(n,t)},lm=(n,t,e)=>{const{vnode:i,slots:r}=n;let s=!0,o=ae;if(i.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:Mh(r,t,e):(s=!t.$stable,xh(t,r)),o=t}else t&&(yh(n,t),o={default:1});if(s)for(const a in r)!Ll(a)&&o[a]==null&&delete r[a]},Ye=dm;function cm(n){return um(n)}function um(n,t){const e=Pa();e.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:p,setScopeId:d=Fn,insertStaticContent:v}=n,g=(w,X,x,G=null,B=null,R=null,I=void 0,k=null,J=!!X.dynamicChildren)=>{if(w===X)return;w&&!Wi(w,X)&&(G=H(w),O(w,B,R,!0),w=null),X.patchFlag===-2&&(J=!1,X.dynamicChildren=null);const{type:A,ref:b,shapeFlag:q}=X;switch(A){case Ba:m(w,X,x,G);break;case Xe:h(w,X,x,G);break;case aa:w==null&&y(X,x,G,I);break;case ye:P(w,X,x,G,B,R,I,k,J);break;default:q&1?E(w,X,x,G,B,R,I,k,J):q&6?N(w,X,x,G,B,R,I,k,J):(q&64||q&128)&&A.process(w,X,x,G,B,R,I,k,J,ft)}b!=null&&B?ss(b,w&&w.ref,R,X||w,!X):b==null&&w&&w.ref!=null&&ss(w.ref,null,R,w,!0)},m=(w,X,x,G)=>{if(w==null)i(X.el=a(X.children),x,G);else{const B=X.el=w.el;X.children!==w.children&&u(B,X.children)}},h=(w,X,x,G)=>{w==null?i(X.el=l(X.children||""),x,G):X.el=w.el},y=(w,X,x,G)=>{[w.el,w.anchor]=v(w.children,X,x,G,w.el,w.anchor)},_=({el:w,anchor:X},x,G)=>{let B;for(;w&&w!==X;)B=p(w),i(w,x,G),w=B;i(X,x,G)},S=({el:w,anchor:X})=>{let x;for(;w&&w!==X;)x=p(w),r(w),w=x;r(X)},E=(w,X,x,G,B,R,I,k,J)=>{if(X.type==="svg"?I="svg":X.type==="math"&&(I="mathml"),w==null)L(X,x,G,B,R,I,k,J);else{const A=w.el&&w.el._isVueCE?w.el:null;try{A&&A._beginPatch(),V(w,X,B,R,I,k,J)}finally{A&&A._endPatch()}}},L=(w,X,x,G,B,R,I,k)=>{let J,A;const{props:b,shapeFlag:q,transition:tt,dirs:it}=w;if(J=w.el=o(w.type,R,b&&b.is,b),q&8?c(J,w.children):q&16&&z(w.children,J,null,G,B,io(w,R),I,k),it&&Ii(w,null,G,"created"),C(J,w,w.scopeId,I,G),b){for(const St in b)St!=="value"&&!ns(St)&&s(J,St,null,b[St],R,G);"value"in b&&s(J,"value",null,b.value,R),(A=b.onVnodeBeforeMount)&&Tn(A,G,w)}it&&Ii(w,null,G,"beforeMount");const lt=fm(B,tt);lt&&tt.beforeEnter(J),i(J,X,x),((A=b&&b.onVnodeMounted)||lt||it)&&Ye(()=>{try{A&&Tn(A,G,w),lt&&tt.enter(J),it&&Ii(w,null,G,"mounted")}finally{}},B)},C=(w,X,x,G,B)=>{if(x&&d(w,x),G)for(let R=0;R<G.length;R++)d(w,G[R]);if(B){let R=B.subTree;if(X===R||wh(R.type)&&(R.ssContent===X||R.ssFallback===X)){const I=B.vnode;C(w,I,I.scopeId,I.slotScopeIds,B.parent)}}},z=(w,X,x,G,B,R,I,k,J=0)=>{for(let A=J;A<w.length;A++){const b=w[A]=k?Kn(w[A]):In(w[A]);g(null,b,X,x,G,B,R,I,k)}},V=(w,X,x,G,B,R,I)=>{const k=X.el=w.el;let{patchFlag:J,dynamicChildren:A,dirs:b}=X;J|=w.patchFlag&16;const q=w.props||ae,tt=X.props||ae;let it;if(x&&Li(x,!1),(it=tt.onVnodeBeforeUpdate)&&Tn(it,x,X,w),b&&Ii(X,w,x,"beforeUpdate"),x&&Li(x,!0),(q.innerHTML&&tt.innerHTML==null||q.textContent&&tt.textContent==null)&&c(k,""),A?T(w.dynamicChildren,A,k,x,G,io(X,B),R):I||st(w,X,k,null,x,G,io(X,B),R,!1),J>0){if(J&16)U(k,q,tt,x,B);else if(J&2&&q.class!==tt.class&&s(k,"class",null,tt.class,B),J&4&&s(k,"style",q.style,tt.style,B),J&8){const lt=X.dynamicProps;for(let St=0;St<lt.length;St++){const xt=lt[St],vt=q[xt],Mt=tt[xt];(Mt!==vt||xt==="value")&&s(k,xt,vt,Mt,B,x)}}J&1&&w.children!==X.children&&c(k,X.children)}else!I&&A==null&&U(k,q,tt,x,B);((it=tt.onVnodeUpdated)||b)&&Ye(()=>{it&&Tn(it,x,X,w),b&&Ii(X,w,x,"updated")},G)},T=(w,X,x,G,B,R,I)=>{for(let k=0;k<X.length;k++){const J=w[k],A=X[k],b=J.el&&(J.type===ye||!Wi(J,A)||J.shapeFlag&198)?f(J.el):x;g(J,A,b,null,G,B,R,I,!0)}},U=(w,X,x,G,B)=>{if(X!==x){if(X!==ae)for(const R in X)!ns(R)&&!(R in x)&&s(w,R,X[R],null,B,G);for(const R in x){if(ns(R))continue;const I=x[R],k=X[R];I!==k&&R!=="value"&&s(w,R,k,I,B,G)}"value"in x&&s(w,"value",X.value,x.value,B)}},P=(w,X,x,G,B,R,I,k,J)=>{const A=X.el=w?w.el:a(""),b=X.anchor=w?w.anchor:a("");let{patchFlag:q,dynamicChildren:tt,slotScopeIds:it}=X;it&&(k=k?k.concat(it):it),w==null?(i(A,x,G),i(b,x,G),z(X.children||[],x,b,B,R,I,k,J)):q>0&&q&64&&tt&&w.dynamicChildren&&w.dynamicChildren.length===tt.length?(T(w.dynamicChildren,tt,x,B,R,I,k),(X.key!=null||B&&X===B.subTree)&&Sh(w,X,!0)):st(w,X,x,b,B,R,I,k,J)},N=(w,X,x,G,B,R,I,k,J)=>{X.slotScopeIds=k,w==null?X.shapeFlag&512?B.ctx.activate(X,x,G,I,J):M(X,x,G,B,R,I,J):Y(w,X,J)},M=(w,X,x,G,B,R,I)=>{const k=w.component=ym(w,G,B);if(Ua(w)&&(k.ctx.renderer=ft),Mm(k,!1,I),k.asyncDep){if(B&&B.registerDep(k,W,I),!w.el){const J=k.subTree=be(Xe);h(null,J,X,x),w.placeholder=J.el}}else W(k,w,X,x,B,R,I)},Y=(w,X,x)=>{const G=X.component=w.component;if(em(w,X,x))if(G.asyncDep&&!G.asyncResolved){Z(G,X,x);return}else G.next=X,G.update();else X.el=w.el,G.vnode=X},W=(w,X,x,G,B,R,I)=>{const k=()=>{if(w.isMounted){let{next:q,bu:tt,u:it,parent:lt,vnode:St}=w;{const yt=bh(w);if(yt){q&&(q.el=St.el,Z(w,q,I)),yt.asyncDep.then(()=>{Ye(()=>{w.isUnmounted||A()},B)});return}}let xt=q,vt;Li(w,!1),q?(q.el=St.el,Z(w,q,I)):q=St,tt&&ra(tt),(vt=q.props&&q.props.onVnodeBeforeUpdate)&&Tn(vt,lt,q,St),Li(w,!0);const Mt=lc(w),Lt=w.subTree;w.subTree=Mt,g(Lt,Mt,f(Lt.el),H(Lt),w,B,R),q.el=Mt.el,xt===null&&nm(w,Mt.el),it&&Ye(it,B),(vt=q.props&&q.props.onVnodeUpdated)&&Ye(()=>Tn(vt,lt,q,St),B)}else{let q;const{el:tt,props:it}=X,{bm:lt,m:St,parent:xt,root:vt,type:Mt}=w,Lt=as(X);Li(w,!1),lt&&ra(lt),!Lt&&(q=it&&it.onVnodeBeforeMount)&&Tn(q,xt,X),Li(w,!0);{vt.ce&&vt.ce._hasShadowRoot()&&vt.ce._injectChildStyle(Mt,w.parent?w.parent.type:void 0);const yt=w.subTree=lc(w);g(null,yt,x,G,w,B,R),X.el=yt.el}if(St&&Ye(St,B),!Lt&&(q=it&&it.onVnodeMounted)){const yt=X;Ye(()=>Tn(q,xt,yt),B)}(X.shapeFlag&256||xt&&as(xt.vnode)&&xt.vnode.shapeFlag&256)&&w.a&&Ye(w.a,B),w.isMounted=!0,X=x=G=null}};w.scope.on();const J=w.effect=new Cf(k);w.scope.off();const A=w.update=J.run.bind(J),b=w.job=J.runIfDirty.bind(J);b.i=w,b.id=w.uid,J.scheduler=()=>Pl(b),Li(w,!0),A()},Z=(w,X,x)=>{X.component=w;const G=w.vnode.props;w.vnode=X,w.next=null,rm(w,X.props,G,x),lm(w,X.children,x),ii(),Ql(w),ri()},st=(w,X,x,G,B,R,I,k,J=!1)=>{const A=w&&w.children,b=w?w.shapeFlag:0,q=X.children,{patchFlag:tt,shapeFlag:it}=X;if(tt>0){if(tt&128){ot(A,q,x,G,B,R,I,k,J);return}else if(tt&256){et(A,q,x,G,B,R,I,k,J);return}}it&8?(b&16&&K(A,B,R),q!==A&&c(x,q)):b&16?it&16?ot(A,q,x,G,B,R,I,k,J):K(A,B,R,!0):(b&8&&c(x,""),it&16&&z(q,x,G,B,R,I,k,J))},et=(w,X,x,G,B,R,I,k,J)=>{w=w||Tr,X=X||Tr;const A=w.length,b=X.length,q=Math.min(A,b);let tt;for(tt=0;tt<q;tt++){const it=X[tt]=J?Kn(X[tt]):In(X[tt]);g(w[tt],it,x,null,B,R,I,k,J)}A>b?K(w,B,R,!0,!1,q):z(X,x,G,B,R,I,k,J,q)},ot=(w,X,x,G,B,R,I,k,J)=>{let A=0;const b=X.length;let q=w.length-1,tt=b-1;for(;A<=q&&A<=tt;){const it=w[A],lt=X[A]=J?Kn(X[A]):In(X[A]);if(Wi(it,lt))g(it,lt,x,null,B,R,I,k,J);else break;A++}for(;A<=q&&A<=tt;){const it=w[q],lt=X[tt]=J?Kn(X[tt]):In(X[tt]);if(Wi(it,lt))g(it,lt,x,null,B,R,I,k,J);else break;q--,tt--}if(A>q){if(A<=tt){const it=tt+1,lt=it<b?X[it].el:G;for(;A<=tt;)g(null,X[A]=J?Kn(X[A]):In(X[A]),x,lt,B,R,I,k,J),A++}}else if(A>tt)for(;A<=q;)O(w[A],B,R,!0),A++;else{const it=A,lt=A,St=new Map;for(A=lt;A<=tt;A++){const Ct=X[A]=J?Kn(X[A]):In(X[A]);Ct.key!=null&&St.set(Ct.key,A)}let xt,vt=0;const Mt=tt-lt+1;let Lt=!1,yt=0;const Ft=new Array(Mt);for(A=0;A<Mt;A++)Ft[A]=0;for(A=it;A<=q;A++){const Ct=w[A];if(vt>=Mt){O(Ct,B,R,!0);continue}let Tt;if(Ct.key!=null)Tt=St.get(Ct.key);else for(xt=lt;xt<=tt;xt++)if(Ft[xt-lt]===0&&Wi(Ct,X[xt])){Tt=xt;break}Tt===void 0?O(Ct,B,R,!0):(Ft[Tt-lt]=A+1,Tt>=yt?yt=Tt:Lt=!0,g(Ct,X[Tt],x,null,B,R,I,k,J),vt++)}const kt=Lt?hm(Ft):Tr;for(xt=kt.length-1,A=Mt-1;A>=0;A--){const Ct=lt+A,Tt=X[Ct],Dt=X[Ct+1],jt=Ct+1<b?Dt.el||Eh(Dt):G;Ft[A]===0?g(null,Tt,x,jt,B,R,I,k,J):Lt&&(xt<0||A!==kt[xt]?F(Tt,x,jt,2):xt--)}}},F=(w,X,x,G,B=null)=>{const{el:R,type:I,transition:k,children:J,shapeFlag:A}=w;if(A&6){F(w.component.subTree,X,x,G);return}if(A&128){w.suspense.move(X,x,G);return}if(A&64){I.move(w,X,x,ft);return}if(I===ye){i(R,X,x);for(let q=0;q<J.length;q++)F(J[q],X,x,G);i(w.anchor,X,x);return}if(I===aa){_(w,X,x);return}if(G!==2&&A&1&&k)if(G===0)k.beforeEnter(R),i(R,X,x),Ye(()=>k.enter(R),B);else{const{leave:q,delayLeave:tt,afterLeave:it}=k,lt=()=>{w.ctx.isUnmounted?r(R):i(R,X,x)},St=()=>{R._isLeaving&&R[Cn](!0),q(R,()=>{lt(),it&&it()})};tt?tt(R,lt,St):St()}else i(R,X,x)},O=(w,X,x,G=!1,B=!1)=>{const{type:R,props:I,ref:k,children:J,dynamicChildren:A,shapeFlag:b,patchFlag:q,dirs:tt,cacheIndex:it,memo:lt}=w;if(q===-2&&(B=!1),k!=null&&(ii(),ss(k,null,x,w,!0),ri()),it!=null&&(X.renderCache[it]=void 0),b&256){X.ctx.deactivate(w);return}const St=b&1&&tt,xt=!as(w);let vt;if(xt&&(vt=I&&I.onVnodeBeforeUnmount)&&Tn(vt,X,w),b&6)D(w.component,x,G);else{if(b&128){w.suspense.unmount(x,G);return}St&&Ii(w,null,X,"beforeUnmount"),b&64?w.type.remove(w,X,x,ft,G):A&&!A.hasOnce&&(R!==ye||q>0&&q&64)?K(A,X,x,!1,!0):(R===ye&&q&384||!B&&b&16)&&K(J,X,x),G&&ct(w)}const Mt=lt!=null&&it==null;(xt&&(vt=I&&I.onVnodeUnmounted)||St||Mt)&&Ye(()=>{vt&&Tn(vt,X,w),St&&Ii(w,null,X,"unmounted"),Mt&&(w.el=null)},x)},ct=w=>{const{type:X,el:x,anchor:G,transition:B}=w;if(X===ye){Q(x,G);return}if(X===aa){S(w);return}const R=()=>{r(x),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(w.shapeFlag&1&&B&&!B.persisted){const{leave:I,delayLeave:k}=B,J=()=>I(x,R);k?k(w.el,R,J):J()}else R()},Q=(w,X)=>{let x;for(;w!==X;)x=p(w),r(w),w=x;r(X)},D=(w,X,x)=>{const{bum:G,scope:B,job:R,subTree:I,um:k,m:J,a:A}=w;fc(J),fc(A),G&&ra(G),B.stop(),R&&(R.flags|=8,O(I,w,X,x)),k&&Ye(k,X),Ye(()=>{w.isUnmounted=!0},X)},K=(w,X,x,G=!1,B=!1,R=0)=>{for(let I=R;I<w.length;I++)O(w[I],X,x,G,B)},H=w=>{if(w.shapeFlag&6)return H(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const X=p(w.anchor||w.el),x=X&&X[Ep];return x?p(x):X};let nt=!1;const rt=(w,X,x)=>{let G;w==null?X._vnode&&(O(X._vnode,null,null,!0),G=X._vnode.component):g(X._vnode||null,w,X,null,null,null,x),X._vnode=w,nt||(nt=!0,Ql(G),qf(),nt=!1)},ft={p:g,um:O,m:F,r:ct,mt:M,mc:z,pc:st,pbc:T,n:H,o:n};return{render:rt,hydrate:void 0,createApp:Yp(rt)}}function io({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Li({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function fm(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Sh(n,t,e=!1){const i=n.children,r=t.children;if(Ot(i)&&Ot(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Kn(r[s]),a.el=o.el),!e&&a.patchFlag!==-2&&Sh(o,a)),a.type===Ba&&(a.patchFlag===-1&&(a=r[s]=Kn(a)),a.el=o.el),a.type===Xe&&!a.el&&(a.el=o.el)}}function hm(n){const t=n.slice(),e=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(r=e[e.length-1],n[r]<u){t[i]=r,e.push(i);continue}for(s=0,o=e.length-1;s<o;)a=s+o>>1,n[e[a]]<u?s=a+1:o=a;u<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}function bh(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:bh(t)}function fc(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function Eh(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?Eh(t.subTree):null}const wh=n=>n.__isSuspense;function dm(n,t){t&&t.pendingBranch?Ot(n)?t.effects.push(...n):t.effects.push(n):yp(n)}const ye=Symbol.for("v-fgt"),Ba=Symbol.for("v-txt"),Xe=Symbol.for("v-cmt"),aa=Symbol.for("v-stc"),ls=[];let sn=null;function Pt(n=!1){ls.push(sn=n?null:[])}function pm(){ls.pop(),sn=ls[ls.length-1]||null}let gs=1;function ma(n,t=!1){gs+=n,n<0&&sn&&t&&(sn.hasOnce=!0)}function Th(n){return n.dynamicChildren=gs>0?sn||Tr:null,pm(),gs>0&&sn&&sn.push(n),n}function It(n,t,e,i,r,s){return Th(j(n,t,e,i,r,s,!0))}function Ah(n,t,e,i,r){return Th(be(n,t,e,i,r,!0))}function ga(n){return n?n.__v_isVNode===!0:!1}function Wi(n,t){return n.type===t.type&&n.key===t.key}const Ch=({key:n})=>n??null,oa=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?_e(n)||Be(n)||Ht(n)?{i:rn,r:n,k:t,f:!!e}:n:null);function j(n,t=null,e=null,i=0,r=null,s=n===ye?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Ch(t),ref:t&&oa(t),scopeId:Yf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:rn};return a?(Ul(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=_e(e)?8:16),gs>0&&!o&&sn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&sn.push(l),l}const be=mm;function mm(n,t=null,e=null,i=0,r=null,s=!1){if((!n||n===zp)&&(n=Xe),ga(n)){const a=wi(n,t,!0);return e&&Ul(a,e),gs>0&&!s&&sn&&(a.shapeFlag&6?sn[sn.indexOf(n)]=a:sn.push(a)),a.patchFlag=-2,a}if(Tm(n)&&(n=n.__vccOpts),t){t=gm(t);let{class:a,style:l}=t;a&&!_e(a)&&(t.class=oe(a)),ie(l)&&(Rl(l)&&!Ot(l)&&(l=we({},l)),t.style=xn(l))}const o=_e(n)?1:wh(n)?128:Qf(n)?64:ie(n)?4:Ht(n)?2:0;return j(n,t,e,i,r,o,s,!0)}function gm(n){return n?Rl(n)||gh(n)?we({},n):n:null}function wi(n,t,e=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,u=t?_m(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Ch(u),ref:t&&t.ref?e&&s?Ot(s)?s.concat(oa(t)):[s,oa(t)]:oa(t):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==ye?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&wi(n.ssContent),ssFallback:n.ssFallback&&wi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&ms(c,l.clone(c)),c}function Ke(n=" ",t=0){return be(Ba,null,n,t)}function cs(n,t){const e=be(aa,null,n);return e.staticCount=t,e}function Jt(n="",t=!1){return t?(Pt(),Ah(Xe,null,n)):be(Xe,null,n)}function In(n){return n==null||typeof n=="boolean"?be(Xe):Ot(n)?be(ye,null,n.slice()):ga(n)?Kn(n):be(Ba,null,String(n))}function Kn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:wi(n)}function Ul(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Ot(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),Ul(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!gh(t)?t._ctx=rn:r===3&&rn&&(rn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Ht(t)?(t={default:t,_ctx:rn},e=32):(t=String(t),i&64?(e=16,t=[Ke(t)]):e=8);n.children=t,n.shapeFlag|=e}function _m(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=oe([t.class,i.class]));else if(r==="style")t.style=xn([t.style,i.style]);else if(Ta(r)){const s=t[r],o=i[r];o&&s!==o&&!(Ot(s)&&s.includes(o))?t[r]=s?[].concat(s,o):o:o==null&&s==null&&!Aa(r)&&(t[r]=o)}else r!==""&&(t[r]=i[r])}return t}function Tn(n,t,e,i=null){bn(n,t,7,[e,i])}const vm=fh();let xm=0;function ym(n,t,e){const i=n.type,r=(t?t.appContext:n.appContext)||vm,s={uid:xm++,vnode:n,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Wd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vh(i,r),emitsOptions:hh(i,r),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:i.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Kp.bind(null,s),n.ce&&n.ce(s),s}let Fe=null;const Rh=()=>Fe||rn;let _a,nl;{const n=Pa(),t=(e,i)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};_a=t("__VUE_INSTANCE_SETTERS__",e=>Fe=e),nl=t("__VUE_SSR_SETTERS__",e=>_s=e)}const bs=n=>{const t=Fe;return _a(n),n.scope.on(),()=>{n.scope.off(),_a(t)}},hc=()=>{Fe&&Fe.scope.off(),_a(null)};function Ph(n){return n.vnode.shapeFlag&4}let _s=!1;function Mm(n,t=!1,e=!1){t&&nl(t);const{props:i,children:r}=n.vnode,s=Ph(n);im(n,i,s,t),om(n,r,e||t);const o=s?Sm(n,t):void 0;return t&&nl(!1),o}function Sm(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Gp);const{setup:i}=e;if(i){ii();const r=n.setupContext=i.length>1?Em(n):null,s=bs(n),o=Ss(i,n,0,[n.props,r]),a=Mf(o);if(ri(),s(),(a||n.sp)&&!as(n)&&ah(n),a){if(o.then(hc,hc),t)return o.then(l=>{dc(n,l)}).catch(l=>{Da(l,n,0)});n.asyncDep=o}else dc(n,o)}else Ih(n)}function dc(n,t,e){Ht(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ie(t)&&(n.setupState=Wf(t)),Ih(n)}function Ih(n,t,e){const i=n.type;n.render||(n.render=i.render||Fn);{const r=bs(n);ii();try{Vp(n)}finally{ri(),r()}}}const bm={get(n,t){return Oe(n,"get",""),n[t]}};function Em(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,bm),slots:n.slots,emit:n.emit,expose:t}}function ka(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Wf(up(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in os)return os[e](n)},has(t,e){return e in t||e in os}})):n.proxy}function wm(n,t=!0){return Ht(n)?n.displayName||n.name:n.name||t&&n.__name}function Tm(n){return Ht(n)&&"__vccOpts"in n}const de=(n,t)=>mp(n,t,_s);function Nl(n,t,e){try{ma(-1);const i=arguments.length;return i===2?ie(t)&&!Ot(t)?ga(t)?be(n,null,[t]):be(n,t):be(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&ga(e)&&(e=[e]),be(n,t,e))}finally{ma(1)}}const Am="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let il;const pc=typeof window<"u"&&window.trustedTypes;if(pc)try{il=pc.createPolicy("vue",{createHTML:n=>n})}catch{}const Lh=il?n=>il.createHTML(n):n=>n,Cm="http://www.w3.org/2000/svg",Rm="http://www.w3.org/1998/Math/MathML",Zn=typeof document<"u"?document:null,mc=Zn&&Zn.createElement("template"),Pm={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const r=t==="svg"?Zn.createElementNS(Cm,n):t==="mathml"?Zn.createElementNS(Rm,n):e?Zn.createElement(n,{is:e}):Zn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Zn.createTextNode(n),createComment:n=>Zn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Zn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,r,s){const o=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{mc.innerHTML=Lh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=mc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},ui="transition",Xr="animation",vs=Symbol("_vtc"),Dh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Im=we({},th,Dh),Lm=n=>(n.displayName="Transition",n.props=Im,n),Dm=Lm((n,{slots:t})=>Nl(Ap,Um(n),t)),Di=(n,t=[])=>{Ot(n)?n.forEach(e=>e(...t)):n&&n(...t)},gc=n=>n?Ot(n)?n.some(t=>t.length>1):n.length>1:!1;function Um(n){const t={};for(const P in n)P in Dh||(t[P]=n[P]);if(n.css===!1)return t;const{name:e="v",type:i,duration:r,enterFromClass:s=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=s,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:f=`${e}-leave-from`,leaveActiveClass:p=`${e}-leave-active`,leaveToClass:d=`${e}-leave-to`}=n,v=Nm(r),g=v&&v[0],m=v&&v[1],{onBeforeEnter:h,onEnter:y,onEnterCancelled:_,onLeave:S,onLeaveCancelled:E,onBeforeAppear:L=h,onAppear:C=y,onAppearCancelled:z=_}=t,V=(P,N,M,Y)=>{P._enterCancelled=Y,Ui(P,N?c:a),Ui(P,N?u:o),M&&M()},T=(P,N)=>{P._isLeaving=!1,Ui(P,f),Ui(P,d),Ui(P,p),N&&N()},U=P=>(N,M)=>{const Y=P?C:y,W=()=>V(N,P,M);Di(Y,[N,W]),_c(()=>{Ui(N,P?l:s),Gn(N,P?c:a),gc(Y)||vc(N,i,g,W)})};return we(t,{onBeforeEnter(P){Di(h,[P]),Gn(P,s),Gn(P,o)},onBeforeAppear(P){Di(L,[P]),Gn(P,l),Gn(P,u)},onEnter:U(!1),onAppear:U(!0),onLeave(P,N){P._isLeaving=!0;const M=()=>T(P,N);Gn(P,f),P._enterCancelled?(Gn(P,p),Mc(P)):(Mc(P),Gn(P,p)),_c(()=>{P._isLeaving&&(Ui(P,f),Gn(P,d),gc(S)||vc(P,i,m,M))}),Di(S,[P,M])},onEnterCancelled(P){V(P,!1,void 0,!0),Di(_,[P])},onAppearCancelled(P){V(P,!0,void 0,!0),Di(z,[P])},onLeaveCancelled(P){T(P),Di(E,[P])}})}function Nm(n){if(n==null)return null;if(ie(n))return[ro(n.enter),ro(n.leave)];{const t=ro(n);return[t,t]}}function ro(n){return Od(n)}function Gn(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[vs]||(n[vs]=new Set)).add(t)}function Ui(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[vs];e&&(e.delete(t),e.size||(n[vs]=void 0))}function _c(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Om=0;function vc(n,t,e,i){const r=n._endId=++Om,s=()=>{r===n._endId&&i()};if(e!=null)return setTimeout(s,e);const{type:o,timeout:a,propCount:l}=Fm(n,t);if(!o)return i();const u=o+"end";let c=0;const f=()=>{n.removeEventListener(u,p),s()},p=d=>{d.target===n&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},a+1),n.addEventListener(u,p)}function Fm(n,t){const e=window.getComputedStyle(n),i=v=>(e[v]||"").split(", "),r=i(`${ui}Delay`),s=i(`${ui}Duration`),o=xc(r,s),a=i(`${Xr}Delay`),l=i(`${Xr}Duration`),u=xc(a,l);let c=null,f=0,p=0;t===ui?o>0&&(c=ui,f=o,p=s.length):t===Xr?u>0&&(c=Xr,f=u,p=l.length):(f=Math.max(o,u),c=f>0?o>u?ui:Xr:null,p=c?c===ui?s.length:l.length:0);const d=c===ui&&/\b(?:transform|all)(?:,|$)/.test(i(`${ui}Property`).toString());return{type:c,timeout:f,propCount:p,hasTransform:d}}function xc(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>yc(e)+yc(n[i])))}function yc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Mc(n){return(n?n.ownerDocument:document).body.offsetHeight}function Bm(n,t,e){const i=n[vs];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const va=Symbol("_vod"),Uh=Symbol("_vsh"),km={name:"show",beforeMount(n,{value:t},{transition:e}){n[va]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):$r(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),$r(n,!0),i.enter(n)):i.leave(n,()=>{$r(n,!1)}):$r(n,t))},beforeUnmount(n,{value:t}){$r(n,t)}};function $r(n,t){n.style.display=t?n[va]:"none",n[Uh]=!t}const zm=Symbol(""),Hm=/(?:^|;)\s*display\s*:/;function Gm(n,t,e){const i=n.style,r=_e(e);let s=!1;if(e&&!r){if(t)if(_e(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&es(i,a,"")}else for(const o in t)e[o]==null&&es(i,o,"");for(const o in e){o==="display"&&(s=!0);const a=e[o];a!=null?Wm(n,o,!_e(t)&&t?t[o]:void 0,a)||es(i,o,a):es(i,o,"")}}else if(r){if(t!==e){const o=i[zm];o&&(e+=";"+o),i.cssText=e,s=Hm.test(e)}}else t&&n.removeAttribute("style");va in n&&(n[va]=s?i.display:"",n[Uh]&&(i.display="none"))}const Sc=/\s*!important$/;function es(n,t,e){if(Ot(e))e.forEach(i=>es(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=Vm(n,t);Sc.test(e)?n.setProperty(nr(i),e.replace(Sc,""),"important"):n[i]=e}}const bc=["Webkit","Moz","ms"],so={};function Vm(n,t){const e=so[t];if(e)return e;let i=$e(t);if(i!=="filter"&&i in n)return so[t]=i;i=Ra(i);for(let r=0;r<bc.length;r++){const s=bc[r]+i;if(s in n)return so[t]=s}return t}function Wm(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&_e(i)&&e===i}const Ec="http://www.w3.org/1999/xlink";function wc(n,t,e,i,r,s=Gd(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Ec,t.slice(6,t.length)):n.setAttributeNS(Ec,t,e):e==null||s&&!wf(e)?n.removeAttribute(t):n.setAttribute(t,s?"":kn(e)?String(e):e)}function Tc(n,t,e,i,r){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Lh(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=wf(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(r||t)}function Sr(n,t,e,i){n.addEventListener(t,e,i)}function Xm(n,t,e,i){n.removeEventListener(t,e,i)}const Ac=Symbol("_vei");function $m(n,t,e,i,r=null){const s=n[Ac]||(n[Ac]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=qm(t);if(i){const u=s[t]=Zm(i,r);Sr(n,a,u,l)}else o&&(Xm(n,a,o,l),s[t]=void 0)}}const Cc=/(?:Once|Passive|Capture)$/;function qm(n){let t;if(Cc.test(n)){t={};let i;for(;i=n.match(Cc);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):nr(n.slice(2)),t]}let ao=0;const jm=Promise.resolve(),Ym=()=>ao||(jm.then(()=>ao=0),ao=Date.now());function Zm(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;bn(Km(i,e.value),t,5,[i])};return e.value=n,e.attached=Ym(),e}function Km(n,t){if(Ot(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const Rc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Jm=(n,t,e,i,r,s)=>{const o=r==="svg";t==="class"?Bm(n,i,o):t==="style"?Gm(n,e,i):Ta(t)?Aa(t)||$m(n,t,e,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Qm(n,t,i,o))?(Tc(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&wc(n,t,i,o,s,t!=="value")):n._isVueCE&&(tg(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!_e(i)))?Tc(n,$e(t),i,s,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),wc(n,t,i,o))};function Qm(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Rc(t)&&Ht(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Rc(t)&&_e(e)?!1:t in n}function tg(n,t){const e=n._def.props;if(!e)return!1;const i=$e(t);return Array.isArray(e)?e.some(r=>$e(r)===i):Object.keys(e).some(r=>$e(r)===i)}const Pc=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Ot(t)?e=>ra(t,e):t};function eg(n){n.target.composing=!0}function Ic(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const oo=Symbol("_assign");function Lc(n,t,e){return t&&(n=n.trim()),e&&(n=Ml(n)),n}const xa={created(n,{modifiers:{lazy:t,trim:e,number:i}},r){n[oo]=Pc(r);const s=i||r.props&&r.props.type==="number";Sr(n,t?"change":"input",o=>{o.target.composing||n[oo](Lc(n.value,e,s))}),(e||s)&&Sr(n,"change",()=>{n.value=Lc(n.value,e,s)}),t||(Sr(n,"compositionstart",eg),Sr(n,"compositionend",Ic),Sr(n,"change",Ic))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:r,number:s}},o){if(n[oo]=Pc(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Ml(n.value):n.value,l=t??"";if(a===l)return;const u=n.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===n&&n.type!=="range"&&(i&&t===e||r&&n.value.trim()===l)||(n.value=l)}},ng=["ctrl","shift","alt","meta"],ig={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>ng.some(e=>n[`${e}Key`]&&!t.includes(e))},Un=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=(r,...s)=>{for(let o=0;o<t.length;o++){const a=ig[t[o]];if(a&&a(r,t))return}return n(r,...s)})},rg=we({patchProp:Jm},Pm);let Dc;function sg(){return Dc||(Dc=cm(rg))}const ag=(...n)=>{const t=sg().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=lg(i);if(!r)return;const s=t._component;!Ht(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=e(r,!1,og(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function og(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function lg(n){return _e(n)?document.querySelector(n):n}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const br=typeof document<"u";function Nh(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function cg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Nh(n.default)}const ee=Object.assign;function lo(n,t){const e={};for(const i in t){const r=t[i];e[i]=En(r)?r.map(n):n(r)}return e}const us=()=>{},En=Array.isArray;function Uc(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}const Oh=/#/g,ug=/&/g,fg=/\//g,hg=/=/g,dg=/\?/g,Fh=/\+/g,pg=/%5B/g,mg=/%5D/g,Bh=/%5E/g,gg=/%60/g,kh=/%7B/g,_g=/%7C/g,zh=/%7D/g,vg=/%20/g;function Ol(n){return n==null?"":encodeURI(""+n).replace(_g,"|").replace(pg,"[").replace(mg,"]")}function xg(n){return Ol(n).replace(kh,"{").replace(zh,"}").replace(Bh,"^")}function rl(n){return Ol(n).replace(Fh,"%2B").replace(vg,"+").replace(Oh,"%23").replace(ug,"%26").replace(gg,"`").replace(kh,"{").replace(zh,"}").replace(Bh,"^")}function yg(n){return rl(n).replace(hg,"%3D")}function Mg(n){return Ol(n).replace(Oh,"%23").replace(dg,"%3F")}function Sg(n){return Mg(n).replace(fg,"%2F")}function xs(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const bg=/\/$/,Eg=n=>n.replace(bg,"");function co(n,t,e="/"){let i,r={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=t.slice(0,l),s=t.slice(l,a>0?a:t.length),r=n(s.slice(1))),a>=0&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=Cg(i??t,e),{fullPath:i+s+o,path:i,query:r,hash:xs(o)}}function wg(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function Nc(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function Tg(n,t,e){const i=t.matched.length-1,r=e.matched.length-1;return i>-1&&i===r&&Ur(t.matched[i],e.matched[r])&&Hh(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function Ur(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function Hh(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(var e in n)if(!Ag(n[e],t[e]))return!1;return!0}function Ag(n,t){return En(n)?Oc(n,t):En(t)?Oc(t,n):(n==null?void 0:n.valueOf())===(t==null?void 0:t.valueOf())}function Oc(n,t){return En(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function Cg(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=e.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return e.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const fi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let sl=function(n){return n.pop="pop",n.push="push",n}({}),uo=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function Rg(n){if(!n)if(br){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Eg(n)}const Pg=/^[^#]+#/;function Ig(n,t){return n.replace(Pg,"#")+t}function Lg(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const za=()=>({left:window.scrollX,top:window.scrollY});function Dg(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),r=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!r)return;t=Lg(r,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Fc(n,t){return(history.state?history.state.position-t:-1)+n}const al=new Map;function Ug(n,t){al.set(n,t)}function Ng(n){const t=al.get(n);return al.delete(n),t}function Og(n){return typeof n=="string"||n&&typeof n=="object"}function Gh(n){return typeof n=="string"||typeof n=="symbol"}let ve=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const Vh=Symbol("");ve.MATCHER_NOT_FOUND+"",ve.NAVIGATION_GUARD_REDIRECT+"",ve.NAVIGATION_ABORTED+"",ve.NAVIGATION_CANCELLED+"",ve.NAVIGATION_DUPLICATED+"";function Nr(n,t){return ee(new Error,{type:n,[Vh]:!0},t)}function Vn(n,t){return n instanceof Error&&Vh in n&&(t==null||!!(n.type&t))}const Fg=["params","query","hash"];function Bg(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const t={};for(const e of Fg)e in n&&(t[e]=n[e]);return JSON.stringify(t,null,2)}function kg(n){const t={};if(n===""||n==="?")return t;const e=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<e.length;++i){const r=e[i].replace(Fh," "),s=r.indexOf("="),o=xs(s<0?r:r.slice(0,s)),a=s<0?null:xs(r.slice(s+1));if(o in t){let l=t[o];En(l)||(l=t[o]=[l]),l.push(a)}else t[o]=a}return t}function Bc(n){let t="";for(let e in n){const i=n[e];if(e=yg(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(En(i)?i.map(r=>r&&rl(r)):[i&&rl(i)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+e,r!=null&&(t+="="+r))})}return t}function zg(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=En(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return t}const Hg=Symbol(""),kc=Symbol(""),Ha=Symbol(""),Fl=Symbol(""),ol=Symbol("");function qr(){let n=[];function t(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function xi(n,t,e,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(Nr(ve.NAVIGATION_ABORTED,{from:e,to:t})):p instanceof Error?l(p):Og(p)?l(Nr(ve.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(o&&i.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),a())},c=s(()=>n.call(i&&i.instances[r],t,e,u));let f=Promise.resolve(c);n.length<3&&(f=f.then(u)),f.catch(p=>l(p))})}function fo(n,t,e,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Nh(l)){const u=(l.__vccOpts||l)[t];u&&s.push(xi(u,e,i,o,a,r))}else{let u=l();s.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=cg(c)?c.default:c;o.mods[a]=c,o.components[a]=f;const p=(f.__vccOpts||f)[t];return p&&xi(p,e,i,o,a,r)()}))}}return s}function Gg(n,t){const e=[],i=[],r=[],s=Math.max(t.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=t.matched[o];a&&(n.matched.find(u=>Ur(u,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(u=>Ur(u,l))||r.push(l))}return[e,i,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Vg=()=>location.protocol+"//"+location.host;function Wh(n,t){const{pathname:e,search:i,hash:r}=t,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),Nc(a,"")}return Nc(e,n)+i+r}function Wg(n,t,e,i){let r=[],s=[],o=null;const a=({state:p})=>{const d=Wh(n,location),v=e.value,g=t.value;let m=0;if(p){if(e.value=d,t.value=p,o&&o===v){o=null;return}m=g?p.position-g.position:0}else i(d);r.forEach(h=>{h(e.value,v,{delta:m,type:sl.pop,direction:m?m>0?uo.forward:uo.back:uo.unknown})})};function l(){o=e.value}function u(p){r.push(p);const d=()=>{const v=r.indexOf(p);v>-1&&r.splice(v,1)};return s.push(d),d}function c(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(ee({},p.state,{scroll:za()}),"")}}function f(){for(const p of s)p();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:u,destroy:f}}function zc(n,t,e,i=!1,r=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:r?za():null}}function Xg(n){const{history:t,location:e}=window,i={value:Wh(n,e)},r={value:t.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,u,c){const f=n.indexOf("#"),p=f>-1?(e.host&&document.querySelector("base")?n:n.slice(f))+l:Vg()+n+l;try{t[c?"replaceState":"pushState"](u,"",p),r.value=u}catch(d){console.error(d),e[c?"replace":"assign"](p)}}function o(l,u){s(l,ee({},t.state,zc(r.value.back,l,r.value.forward,!0),u,{position:r.value.position}),!0),i.value=l}function a(l,u){const c=ee({},r.value,t.state,{forward:l,scroll:za()});s(c.current,c,!0),s(l,ee({},zc(i.value,l,null),{position:c.position+1},u),!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function $g(n){n=Rg(n);const t=Xg(n),e=Wg(n,t.state,t.location,t.replace);function i(s,o=!0){o||e.pauseListeners(),history.go(s)}const r=ee({location:"",base:n,go:i,createHref:Ig.bind(null,n)},t,e);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function qg(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),$g(n)}let qi=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var Se=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(Se||{});const jg={type:qi.Static,value:""},Yg=/[a-zA-Z0-9_]/;function Zg(n){if(!n)return[[]];if(n==="/")return[[jg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(d){throw new Error(`ERR (${e})/"${u}": ${d}`)}let e=Se.Static,i=e;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,u="",c="";function f(){u&&(e===Se.Static?s.push({type:qi.Static,value:u}):e===Se.Param||e===Se.ParamRegExp||e===Se.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:qi.Param,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==Se.ParamRegExp){i=e,e=Se.EscapeNext;continue}switch(e){case Se.Static:l==="/"?(u&&f(),o()):l===":"?(f(),e=Se.Param):p();break;case Se.EscapeNext:p(),e=i;break;case Se.Param:l==="("?e=Se.ParamRegExp:Yg.test(l)?p():(f(),e=Se.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Se.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:e=Se.ParamRegExpEnd:c+=l;break;case Se.ParamRegExpEnd:f(),e=Se.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:t("Unknown state");break}}return e===Se.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),f(),o(),r}const Hc="[^/]+?",Kg={sensitive:!1,strict:!1,start:!0,end:!0};var Ge=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(Ge||{});const Jg=/[.+*?^${}()[\]/\\]/g;function Qg(n,t){const e=ee({},Kg,t),i=[];let r=e.start?"^":"";const s=[];for(const u of n){const c=u.length?[]:[Ge.Root];e.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const p=u[f];let d=Ge.Segment+(e.sensitive?Ge.BonusCaseSensitive:0);if(p.type===qi.Static)f||(r+="/"),r+=p.value.replace(Jg,"\\$&"),d+=Ge.Static;else if(p.type===qi.Param){const{value:v,repeatable:g,optional:m,regexp:h}=p;s.push({name:v,repeatable:g,optional:m});const y=h||Hc;if(y!==Hc){d+=Ge.BonusCustomRegExp;try{`${y}`}catch(S){throw new Error(`Invalid custom RegExp for param "${v}" (${y}): `+S.message)}}let _=g?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(_=m&&u.length<2?`(?:/${_})`:"/"+_),m&&(_+="?"),r+=_,d+=Ge.Dynamic,m&&(d+=Ge.BonusOptional),g&&(d+=Ge.BonusRepeatable),y===".*"&&(d+=Ge.BonusWildcard)}c.push(d)}i.push(c)}if(e.strict&&e.end){const u=i.length-1;i[u][i[u].length-1]+=Ge.BonusStrict}e.strict||(r+="/?"),e.end?r+="$":e.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,e.sensitive?"":"i");function a(u){const c=u.match(o),f={};if(!c)return null;for(let p=1;p<c.length;p++){const d=c[p]||"",v=s[p-1];f[v.name]=d&&v.repeatable?d.split("/"):d}return f}function l(u){let c="",f=!1;for(const p of n){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const d of p)if(d.type===qi.Static)c+=d.value;else if(d.type===qi.Param){const{value:v,repeatable:g,optional:m}=d,h=v in u?u[v]:"";if(En(h)&&!g)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const y=En(h)?h.join("/"):h;if(!y)if(m)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);c+=y}}return c||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function t0(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===Ge.Static+Ge.Segment?-1:1:n.length>t.length?t.length===1&&t[0]===Ge.Static+Ge.Segment?1:-1:0}function Xh(n,t){let e=0;const i=n.score,r=t.score;for(;e<i.length&&e<r.length;){const s=t0(i[e],r[e]);if(s)return s;e++}if(Math.abs(r.length-i.length)===1){if(Gc(i))return 1;if(Gc(r))return-1}return r.length-i.length}function Gc(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const e0={strict:!1,end:!0,sensitive:!1};function n0(n,t,e){const i=Qg(Zg(n.path),e),r=ee(i,{record:n,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function i0(n,t){const e=[],i=new Map;t=Uc(e0,t);function r(f){return i.get(f)}function s(f,p,d){const v=!d,g=Wc(f);g.aliasOf=d&&d.record;const m=Uc(t,f),h=[g];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const E of S)h.push(Wc(ee({},g,{components:d?d.record.components:g.components,path:E,aliasOf:d?d.record:g})))}let y,_;for(const S of h){const{path:E}=S;if(p&&E[0]!=="/"){const L=p.record.path,C=L[L.length-1]==="/"?"":"/";S.path=p.record.path+(E&&C+E)}if(y=n0(S,p,m),d?d.alias.push(y):(_=_||y,_!==y&&_.alias.push(y),v&&f.name&&!Xc(y)&&o(f.name)),$h(y)&&l(y),g.children){const L=g.children;for(let C=0;C<L.length;C++)s(L[C],y,d&&d.children[C])}d=d||y}return _?()=>{o(_)}:us}function o(f){if(Gh(f)){const p=i.get(f);p&&(i.delete(f),e.splice(e.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=e.indexOf(f);p>-1&&(e.splice(p,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return e}function l(f){const p=a0(f,e);e.splice(p,0,f),f.record.name&&!Xc(f)&&i.set(f.record.name,f)}function u(f,p){let d,v={},g,m;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw Nr(ve.MATCHER_NOT_FOUND,{location:f});m=d.record.name,v=ee(Vc(p.params,d.keys.filter(_=>!_.optional).concat(d.parent?d.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),f.params&&Vc(f.params,d.keys.map(_=>_.name))),g=d.stringify(v)}else if(f.path!=null)g=f.path,d=e.find(_=>_.re.test(g)),d&&(v=d.parse(g),m=d.record.name);else{if(d=p.name?i.get(p.name):e.find(_=>_.re.test(p.path)),!d)throw Nr(ve.MATCHER_NOT_FOUND,{location:f,currentLocation:p});m=d.record.name,v=ee({},p.params,f.params),g=d.stringify(v)}const h=[];let y=d;for(;y;)h.unshift(y.record),y=y.parent;return{name:m,path:g,params:v,matched:h,meta:s0(h)}}n.forEach(f=>s(f));function c(){e.length=0,i.clear()}return{addRoute:s,resolve:u,removeRoute:o,clearRoutes:c,getRoutes:a,getRecordMatcher:r}}function Vc(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function Wc(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:r0(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function r0(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function Xc(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function s0(n){return n.reduce((t,e)=>ee(t,e.meta),{})}function a0(n,t){let e=0,i=t.length;for(;e!==i;){const s=e+i>>1;Xh(n,t[s])<0?i=s:e=s+1}const r=o0(n);return r&&(i=t.lastIndexOf(r,i-1)),i}function o0(n){let t=n;for(;t=t.parent;)if($h(t)&&Xh(n,t)===0)return t}function $h({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function $c(n){const t=Mn(Ha),e=Mn(Fl),i=de(()=>{const l=Ki(n.to);return t.resolve(l)}),r=de(()=>{const{matched:l}=i.value,{length:u}=l,c=l[u-1],f=e.matched;if(!c||!f.length)return-1;const p=f.findIndex(Ur.bind(null,c));if(p>-1)return p;const d=qc(l[u-2]);return u>1&&qc(c)===d&&f[f.length-1].path!==d?f.findIndex(Ur.bind(null,l[u-2])):p}),s=de(()=>r.value>-1&&h0(e.params,i.value.params)),o=de(()=>r.value>-1&&r.value===e.matched.length-1&&Hh(e.params,i.value.params));function a(l={}){if(f0(l)){const u=t[Ki(n.replace)?"replace":"push"](Ki(n.to)).catch(us);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:i,href:de(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function l0(n){return n.length===1?n[0]:n}const c0=sh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:$c,setup(n,{slots:t}){const e=La($c(n)),{options:i}=Mn(Ha),r=de(()=>({[jc(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[jc(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const s=t.default&&l0(t.default(e));return n.custom?s:Nl("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:r.value},s)}}}),u0=c0;function f0(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function h0(n,t){for(const e in t){const i=t[e],r=n[e];if(typeof i=="string"){if(i!==r)return!1}else if(!En(r)||r.length!==i.length||i.some((s,o)=>s.valueOf()!==r[o].valueOf()))return!1}return!0}function qc(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const jc=(n,t,e)=>n??t??e,d0=sh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Mn(ol),r=de(()=>n.route||i.value),s=Mn(kc,0),o=de(()=>{let u=Ki(s);const{matched:c}=r.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),a=de(()=>r.value.matched[o.value]);sa(kc,de(()=>o.value+1)),sa(Hg,a),sa(ol,r);const l=Zt();return Rr(()=>[l.value,a.value,n.name],([u,c,f],[p,d,v])=>{c&&(c.instances[f]=u,d&&d!==c&&u&&u===p&&(c.leaveGuards.size||(c.leaveGuards=d.leaveGuards),c.updateGuards.size||(c.updateGuards=d.updateGuards))),u&&c&&(!d||!Ur(c,d)||!p)&&(c.enterCallbacks[f]||[]).forEach(g=>g(u))},{flush:"post"}),()=>{const u=r.value,c=n.name,f=a.value,p=f&&f.components[c];if(!p)return Yc(e.default,{Component:p,route:u});const d=f.props[c],v=d?d===!0?u.params:typeof d=="function"?d(u):d:null,m=Nl(p,ee({},v,t,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(f.instances[c]=null)},ref:l}));return Yc(e.default,{Component:m,route:u})||m}}});function Yc(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const p0=d0;function m0(n){const t=i0(n.routes,n),e=n.parseQuery||kg,i=n.stringifyQuery||Bc,r=n.history,s=qr(),o=qr(),a=qr(),l=fp(fi);let u=fi;br&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=lo.bind(null,H=>""+H),f=lo.bind(null,Sg),p=lo.bind(null,xs);function d(H,nt){let rt,ft;return Gh(H)?(rt=t.getRecordMatcher(H),ft=nt):ft=H,t.addRoute(ft,rt)}function v(H){const nt=t.getRecordMatcher(H);nt&&t.removeRoute(nt)}function g(){return t.getRoutes().map(H=>H.record)}function m(H){return!!t.getRecordMatcher(H)}function h(H,nt){if(nt=ee({},nt||l.value),typeof H=="string"){const x=co(e,H,nt.path),G=t.resolve({path:x.path},nt),B=r.createHref(x.fullPath);return ee(x,G,{params:p(G.params),hash:xs(x.hash),redirectedFrom:void 0,href:B})}let rt;if(H.path!=null)rt=ee({},H,{path:co(e,H.path,nt.path).path});else{const x=ee({},H.params);for(const G in x)x[G]==null&&delete x[G];rt=ee({},H,{params:f(x)}),nt.params=f(nt.params)}const ft=t.resolve(rt,nt),ht=H.hash||"";ft.params=c(p(ft.params));const w=wg(i,ee({},H,{hash:xg(ht),path:ft.path})),X=r.createHref(w);return ee({fullPath:w,hash:ht,query:i===Bc?zg(H.query):H.query||{}},ft,{redirectedFrom:void 0,href:X})}function y(H){return typeof H=="string"?co(e,H,l.value.path):ee({},H)}function _(H,nt){if(u!==H)return Nr(ve.NAVIGATION_CANCELLED,{from:nt,to:H})}function S(H){return C(H)}function E(H){return S(ee(y(H),{replace:!0}))}function L(H,nt){const rt=H.matched[H.matched.length-1];if(rt&&rt.redirect){const{redirect:ft}=rt;let ht=typeof ft=="function"?ft(H,nt):ft;return typeof ht=="string"&&(ht=ht.includes("?")||ht.includes("#")?ht=y(ht):{path:ht},ht.params={}),ee({query:H.query,hash:H.hash,params:ht.path!=null?{}:H.params},ht)}}function C(H,nt){const rt=u=h(H),ft=l.value,ht=H.state,w=H.force,X=H.replace===!0,x=L(rt,ft);if(x)return C(ee(y(x),{state:typeof x=="object"?ee({},ht,x.state):ht,force:w,replace:X}),nt||rt);const G=rt;G.redirectedFrom=nt;let B;return!w&&Tg(i,ft,rt)&&(B=Nr(ve.NAVIGATION_DUPLICATED,{to:G,from:ft}),F(ft,ft,!0,!1)),(B?Promise.resolve(B):T(G,ft)).catch(R=>Vn(R)?Vn(R,ve.NAVIGATION_GUARD_REDIRECT)?R:ot(R):st(R,G,ft)).then(R=>{if(R){if(Vn(R,ve.NAVIGATION_GUARD_REDIRECT))return C(ee({replace:X},y(R.to),{state:typeof R.to=="object"?ee({},ht,R.to.state):ht,force:w}),nt||G)}else R=P(G,ft,!0,X,ht);return U(G,ft,R),R})}function z(H,nt){const rt=_(H,nt);return rt?Promise.reject(rt):Promise.resolve()}function V(H){const nt=Q.values().next().value;return nt&&typeof nt.runWithContext=="function"?nt.runWithContext(H):H()}function T(H,nt){let rt;const[ft,ht,w]=Gg(H,nt);rt=fo(ft.reverse(),"beforeRouteLeave",H,nt);for(const x of ft)x.leaveGuards.forEach(G=>{rt.push(xi(G,H,nt))});const X=z.bind(null,H,nt);return rt.push(X),K(rt).then(()=>{rt=[];for(const x of s.list())rt.push(xi(x,H,nt));return rt.push(X),K(rt)}).then(()=>{rt=fo(ht,"beforeRouteUpdate",H,nt);for(const x of ht)x.updateGuards.forEach(G=>{rt.push(xi(G,H,nt))});return rt.push(X),K(rt)}).then(()=>{rt=[];for(const x of w)if(x.beforeEnter)if(En(x.beforeEnter))for(const G of x.beforeEnter)rt.push(xi(G,H,nt));else rt.push(xi(x.beforeEnter,H,nt));return rt.push(X),K(rt)}).then(()=>(H.matched.forEach(x=>x.enterCallbacks={}),rt=fo(w,"beforeRouteEnter",H,nt,V),rt.push(X),K(rt))).then(()=>{rt=[];for(const x of o.list())rt.push(xi(x,H,nt));return rt.push(X),K(rt)}).catch(x=>Vn(x,ve.NAVIGATION_CANCELLED)?x:Promise.reject(x))}function U(H,nt,rt){a.list().forEach(ft=>V(()=>ft(H,nt,rt)))}function P(H,nt,rt,ft,ht){const w=_(H,nt);if(w)return w;const X=nt===fi,x=br?history.state:{};rt&&(ft||X?r.replace(H.fullPath,ee({scroll:X&&x&&x.scroll},ht)):r.push(H.fullPath,ht)),l.value=H,F(H,nt,rt,X),ot()}let N;function M(){N||(N=r.listen((H,nt,rt)=>{if(!D.listening)return;const ft=h(H),ht=L(ft,D.currentRoute.value);if(ht){C(ee(ht,{replace:!0,force:!0}),ft).catch(us);return}u=ft;const w=l.value;br&&Ug(Fc(w.fullPath,rt.delta),za()),T(ft,w).catch(X=>Vn(X,ve.NAVIGATION_ABORTED|ve.NAVIGATION_CANCELLED)?X:Vn(X,ve.NAVIGATION_GUARD_REDIRECT)?(C(ee(y(X.to),{force:!0}),ft).then(x=>{Vn(x,ve.NAVIGATION_ABORTED|ve.NAVIGATION_DUPLICATED)&&!rt.delta&&rt.type===sl.pop&&r.go(-1,!1)}).catch(us),Promise.reject()):(rt.delta&&r.go(-rt.delta,!1),st(X,ft,w))).then(X=>{X=X||P(ft,w,!1),X&&(rt.delta&&!Vn(X,ve.NAVIGATION_CANCELLED)?r.go(-rt.delta,!1):rt.type===sl.pop&&Vn(X,ve.NAVIGATION_ABORTED|ve.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),U(ft,w,X)}).catch(us)}))}let Y=qr(),W=qr(),Z;function st(H,nt,rt){ot(H);const ft=W.list();return ft.length?ft.forEach(ht=>ht(H,nt,rt)):console.error(H),Promise.reject(H)}function et(){return Z&&l.value!==fi?Promise.resolve():new Promise((H,nt)=>{Y.add([H,nt])})}function ot(H){return Z||(Z=!H,M(),Y.list().forEach(([nt,rt])=>H?rt(H):nt()),Y.reset()),H}function F(H,nt,rt,ft){const{scrollBehavior:ht}=n;if(!br||!ht)return Promise.resolve();const w=!rt&&Ng(Fc(H.fullPath,0))||(ft||!rt)&&history.state&&history.state.scroll||null;return gn().then(()=>ht(H,nt,w)).then(X=>X&&Dg(X)).catch(X=>st(X,H,nt))}const O=H=>r.go(H);let ct;const Q=new Set,D={currentRoute:l,listening:!0,addRoute:d,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:g,resolve:h,options:n,push:S,replace:E,go:O,back:()=>O(-1),forward:()=>O(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:W.add,isReady:et,install(H){H.component("RouterLink",u0),H.component("RouterView",p0),H.config.globalProperties.$router=D,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>Ki(l)}),br&&!ct&&l.value===fi&&(ct=!0,S(r.location).catch(ft=>{}));const nt={};for(const ft in fi)Object.defineProperty(nt,ft,{get:()=>l.value[ft],enumerable:!0});H.provide(Ha,D),H.provide(Fl,Gf(nt)),H.provide(ol,l);const rt=H.unmount;Q.add(H),H.unmount=function(){Q.delete(H),Q.size<1&&(u=fi,N&&N(),N=null,l.value=fi,ct=!1,Z=!1),rt()}}};function K(H){return H.reduce((nt,rt)=>nt.then(()=>V(rt)),Promise.resolve())}return D}function g0(){return Mn(Ha)}function _0(n){return Mn(Fl)}const Ai=(n,t)=>{const e=n.__vccOpts||n;for(const[i,r]of t)e[i]=r;return e},v0={class:"topbar"},x0={class:"topbar-right"},y0={class:"theme-switcher"},M0=["title","onClick"],S0={__name:"TopBar",props:{currentTheme:{type:String,default:"dark"},currentRoute:{type:String,default:"/"}},emits:["set-theme","nav"],setup(n){const t=[{id:"dark",label:"黑色",color:"#111"},{id:"gray",label:"灰色",color:"#555"},{id:"light",label:"白色",color:"#e8e8e8"}];return(e,i)=>(Pt(),It("header",v0,[i[3]||(i[3]=j("div",{class:"topbar-left"},[j("div",{class:"logo"},[j("span",{class:"logo-k"},"K"),j("span",{class:"logo-rest"},"Skr")])],-1)),j("div",x0,[i[0]||(i[0]=j("a",{href:"https://kskr.kuaishou.com",target:"_blank",class:"topbar-link"},"文档",-1)),i[1]||(i[1]=j("a",{href:"#",class:"topbar-link"},"更新日志",-1)),j("div",y0,[(Pt(),It(ye,null,ai(t,r=>j("button",{key:r.id,class:oe(["theme-btn",{active:n.currentTheme===r.id}]),title:r.label,onClick:s=>e.$emit("set-theme",r.id)},[j("span",{class:"theme-dot",style:xn({background:r.color})},null,4)],10,M0)),64))]),i[2]||(i[2]=j("span",{class:"version-badge"},"v1.0",-1))])]))}},b0=Ai(S0,[["__scopeId","data-v-1e7bc9b2"]]),E0={class:"app-body"},w0={class:"sidenav"},T0={class:"page-content"},A0={__name:"App",setup(n){const t=Zt("dark");function e(a){t.value=a}const i=g0(),r=_0(),s=de(()=>r.path);function o(a){i.push(a)}return(a,l)=>{const u=kp("router-view");return Pt(),It("div",{class:oe(["app","theme-"+t.value])},[be(b0,{currentTheme:t.value,currentRoute:s.value,onSetTheme:e,onNav:o},null,8,["currentTheme","currentRoute"]),j("div",E0,[j("nav",w0,[j("button",{class:oe(["sidenav-item",{active:s.value==="/"}]),onClick:l[0]||(l[0]=c=>o("/")),title:"插件预览"},[...l[3]||(l[3]=[cs('<div class="sn-icon" data-v-4e2c40ae><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" data-v-4e2c40ae><rect x="3" y="3" width="18" height="18" rx="2.5" data-v-4e2c40ae></rect><circle cx="8.5" cy="8.5" r="1.5" data-v-4e2c40ae></circle><polyline points="21 15 16 10 5 21" data-v-4e2c40ae></polyline></svg></div><span class="sn-label" data-v-4e2c40ae>插件预览</span><div class="sn-active-bar" data-v-4e2c40ae></div>',3)])],2),j("button",{class:oe(["sidenav-item",{active:s.value==="/convert"}]),onClick:l[1]||(l[1]=c=>o("/convert")),title:"视频转换"},[...l[4]||(l[4]=[cs('<div class="sn-icon" data-v-4e2c40ae><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" data-v-4e2c40ae><polygon points="23 7 16 12 23 17 23 7" data-v-4e2c40ae></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2" data-v-4e2c40ae></rect><line x1="7" y1="12" x2="11" y2="12" stroke-width="2" data-v-4e2c40ae></line><polyline points="9 10 11 12 9 14" stroke-width="2" data-v-4e2c40ae></polyline></svg></div><span class="sn-label" data-v-4e2c40ae>视频转换</span><div class="sn-active-bar" data-v-4e2c40ae></div>',3)])],2),j("button",{class:oe(["sidenav-item",{active:s.value==="/png-crop"}]),onClick:l[2]||(l[2]=c=>o("/png-crop")),title:"裁剪PNG透明像素"},[...l[5]||(l[5]=[cs('<div class="sn-icon" data-v-4e2c40ae><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" data-v-4e2c40ae><rect x="3" y="3" width="18" height="18" rx="2" data-v-4e2c40ae></rect><polyline points="9 3 9 9 3 9" data-v-4e2c40ae></polyline><polyline points="15 3 15 9 21 9" data-v-4e2c40ae></polyline><polyline points="9 21 9 15 3 15" data-v-4e2c40ae></polyline><polyline points="15 21 15 15 21 15" data-v-4e2c40ae></polyline></svg></div><span class="sn-label" data-v-4e2c40ae>PNG裁剪</span><div class="sn-active-bar" data-v-4e2c40ae></div>',3)])],2),l[6]||(l[6]=j("div",{class:"sn-divider"},null,-1))]),j("div",T0,[be(u)])])],2)}}},C0=Ai(A0,[["__scopeId","data-v-4e2c40ae"]]),la=[{id:"light",name:"光效",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',plugins:[{id:"edge-glow",name:"EdgeGlow",nameZh:"边缘辉光",status:"active"},{id:"enlargement",name:"Enlargement",nameZh:"局部放大",status:"active"},{id:"shaft-light",name:"ShaftLight",nameZh:"光柱",status:"active"},{id:"overall-glow",name:"OverallGlow",nameZh:"泛光",status:"active"}]},{id:"distortion",name:"画面扭曲",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8"/><path d="M3 12c0 2.2 3.6 4 8 4s8-1.8 8-4"/><path d="M3 12c0-2.2 3.6-4 8-4s8 1.8 8 4"/></svg>',plugins:[{id:"wave-blur",name:"WaveBlurring",nameZh:"波形模糊",status:"active"},{id:"cc-lens",name:"CCLens",nameZh:"鱼眼",status:"active"},{id:"ripple",name:"Ripple",nameZh:"波纹",status:"active"},{id:"wave-warp",name:"WaveWarp",nameZh:"波形变形",status:"active"},{id:"twirl-distort",name:"TwirlDistort",nameZh:"旋转扭曲",status:"active"}]},{id:"blur-mosaic",name:"模糊/马赛克",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="4" height="4"/><rect x="10" y="3" width="4" height="4"/><rect x="17" y="3" width="4" height="4"/><rect x="3" y="10" width="4" height="4"/><rect x="10" y="10" width="4" height="4"/><rect x="17" y="10" width="4" height="4"/><rect x="3" y="17" width="4" height="4"/><rect x="10" y="17" width="4" height="4"/><rect x="17" y="17" width="4" height="4"/></svg>',plugins:[{id:"directional-blur",name:"Directional Blur",nameZh:"定向模糊",status:"active"},{id:"radial-blur",name:"Radial Blur",nameZh:"径向模糊",status:"active"},{id:"basic-mosaic",name:"Basic Mosaic",nameZh:"基础马赛克",status:"active"},{id:"blur-mosaic-fx",name:"Blur Mosaic",nameZh:"模糊马赛克",status:"active"},{id:"brick-mosaic",name:"Brick Mosaic",nameZh:"砖块马赛克",status:"active"},{id:"colorful-mosaic-1",name:"Colorful MosaicI",nameZh:"彩色马赛克 I",status:"active"},{id:"colorful-mosaic-2",name:"Colorful MosaicII",nameZh:"彩色马赛克 II",status:"active"},{id:"colorful-mosaic-3",name:"Colorful MosaicIII",nameZh:"彩色马赛克 III",status:"active"},{id:"glass-mosaic-1",name:"Glass MosaicI",nameZh:"玻璃马赛克 I",status:"active"},{id:"glass-mosaic-2",name:"Glass MosaicII",nameZh:"玻璃马赛克 II",status:"active"},{id:"hexagon-mosaic",name:"Hexagon Mosaic",nameZh:"六边形马赛克",status:"active"},{id:"star-mosaic",name:"Star Mosaic",nameZh:"星形马赛克",status:"active"}]},{id:"text",name:"文本",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>',plugins:[{id:"text-glitch",name:"TextGlitch",nameZh:"文字故障",status:"coming"},{id:"text-reveal",name:"TextReveal",nameZh:"文字揭示",status:"coming"},{id:"kinetic-type",name:"KineticType",nameZh:"动态字体",status:"coming"},{id:"neon-text",name:"NeonText",nameZh:"霓虹文字",status:"coming"}]},{id:"filter",name:"滤镜",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M8 12a4 4 0 0 1 8 0"/><line x1="12" y1="3" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="21"/><line x1="3" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="21" y2="12"/></svg>',plugins:[{id:"engrave",name:"Engrave",nameZh:"雕刻",status:"active"},{id:"newsprint",name:"Newsprint",nameZh:"报纸印刷",status:"active"},{id:"cartoon",name:"Cartoon",nameZh:"卡通",status:"active"},{id:"film-soft-light",name:"FilmSoftLight",nameZh:"胶片柔光",status:"active"},{id:"comic",name:"Comic",nameZh:"漫画",status:"active"}]},{id:"stylize",name:"风格化",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/><circle cx="12" cy="12" r="3"/></svg>',plugins:[{id:"oil-paint",name:"OilPaint",nameZh:"油画效果",status:"coming"},{id:"sketch",name:"Sketch",nameZh:"素描效果",status:"coming"},{id:"halftone",name:"Halftone",nameZh:"半调效果",status:"coming"},{id:"watercolor",name:"Watercolor",nameZh:"水彩效果",status:"coming"},{id:"glitch-art",name:"GlitchArt",nameZh:"故障艺术",status:"coming"}]},{id:"generate",name:"生成",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',plugins:[{id:"particle-gen",name:"ParticleGen",nameZh:"粒子生成",status:"coming"},{id:"noise-field",name:"NoiseField",nameZh:"噪声场",status:"coming"},{id:"fractal",name:"FractalGen",nameZh:"分形生成",status:"coming"},{id:"grid-gen",name:"GridGen",nameZh:"网格生成",status:"coming"}]}],R0={class:"sidebar"},P0={class:"category-list"},I0=["onClick"],L0=["innerHTML"],D0={class:"category-name"},U0={class:"plugin-list"},N0=["onClick"],O0={class:"plugin-info"},F0={class:"plugin-name"},B0={class:"plugin-name-zh"},k0={key:0,class:"plugin-tag"},z0={key:1,class:"plugin-tag active-tag"},H0={class:"sidebar-footer"},G0={class:"footer-text"},V0={class:"footer-count"},W0={class:"footer-available"},X0={__name:"Sidebar",emits:["select-plugin"],setup(n,{emit:t}){const e=t,i=Zt("distortion"),r=Zt("wave-blur"),s=de(()=>la.reduce((u,c)=>u+c.plugins.length,0)),o=de(()=>la.reduce((u,c)=>u+c.plugins.filter(f=>f.status==="active").length,0));function a(u){i.value=i.value===u?null:u}function l(u){u.status!=="coming"&&(r.value=u.id,e("select-plugin",u))}return(u,c)=>(Pt(),It("aside",R0,[j("div",P0,[(Pt(!0),It(ye,null,ai(Ki(la),f=>(Pt(),It("div",{key:f.id,class:oe(["category-item",{expanded:i.value===f.id}])},[j("div",{class:oe(["category-header",{active:i.value===f.id}]),onClick:p=>a(f.id)},[j("div",{class:"category-icon",innerHTML:f.icon},null,8,L0),j("span",D0,Ut(f.name),1),c[0]||(c[0]=j("div",{class:"category-arrow"},[j("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[j("polyline",{points:"6 9 12 15 18 9"})])],-1))],10,I0),be(Dm,{name:"slide"},{default:Zf(()=>[ps(j("div",U0,[(Pt(!0),It(ye,null,ai(f.plugins,p=>(Pt(),It("div",{key:p.id,class:oe(["plugin-item",{selected:r.value===p.id,coming:p.status==="coming"}]),onClick:d=>l(p)},[c[1]||(c[1]=j("div",{class:"plugin-dot"},null,-1)),j("div",O0,[j("span",F0,Ut(p.name),1),j("span",B0,Ut(p.nameZh),1)]),p.status==="coming"?(Pt(),It("span",k0,"即将")):(Pt(),It("span",z0,"可用"))],10,N0))),128))],512),[[km,i.value===f.id]])]),_:2},1024)],2))),128))]),j("div",H0,[j("div",G0,[j("span",V0,Ut(s.value)+" 个插件",1),c[2]||(c[2]=j("span",{class:"footer-divider"},"·",-1)),j("span",W0,Ut(o.value)+" 已上线",1)])])]))}},$0=Ai(X0,[["__scopeId","data-v-3c9974e1"]]),q0={class:"param-panel"},j0={class:"plugin-header"},Y0={class:"plugin-title-row"},Z0={class:"plugin-title"},K0={class:"plugin-title-zh"},J0={class:"params-scroll"},Q0={class:"param-header"},t_={class:"param-label"},e_={class:"param-value-wrap"},n_={class:"param-value"},i_={class:"param-desc"},r_={class:"slider-wrap"},s_={class:"slider-min"},a_=["min","max","step","value","onInput"],o_={class:"slider-max"},l_={class:"panel-actions"},c_={class:"btn-upload"},u_={__name:"ParamPanel",props:{plugin:{type:Object,required:!0},params:{type:Array,required:!0},modelValue:{type:Object,required:!0},compareMode:{type:Boolean,default:!1}},emits:["update:modelValue","reset","upload","toggle-compare"],setup(n,{emit:t}){const e=n,i=t;function r(o,a){i("update:modelValue",{...e.modelValue,[o]:parseFloat(a)})}function s(o){return typeof o=="number"?o.toFixed(1):o}return(o,a)=>(Pt(),It("div",q0,[j("div",j0,[j("div",Y0,[j("div",null,[j("h2",Z0,Ut(n.plugin.name),1),j("p",K0,Ut(n.plugin.nameZh),1)]),j("button",{class:"btn-icon",onClick:a[0]||(a[0]=l=>o.$emit("reset")),title:"重置参数"},[...a[3]||(a[3]=[j("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[j("polyline",{points:"1 4 1 10 7 10"}),j("path",{d:"M3.51 15a9 9 0 1 0 .49-4.64"})],-1)])])])]),j("div",J0,[(Pt(!0),It(ye,null,ai(n.params,l=>(Pt(),It("div",{class:"param-group",key:l.key},[j("div",Q0,[j("span",t_,Ut(l.label),1),j("div",e_,[j("span",n_,Ut(s(n.modelValue[l.key])),1)])]),j("p",i_,Ut(l.desc),1),j("div",r_,[j("span",s_,Ut(l.min),1),j("input",{type:"range",min:l.min,max:l.max,step:l.step||.1,value:n.modelValue[l.key],onInput:u=>r(l.key,u.target.value)},null,40,a_),j("span",o_,Ut(l.max),1)])]))),128))]),j("div",l_,[j("label",c_,[j("input",{type:"file",accept:"image/*",onChange:a[1]||(a[1]=l=>o.$emit("upload",l)),hidden:""},null,32),a[4]||(a[4]=j("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[j("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),j("polyline",{points:"17 8 12 3 7 8"}),j("line",{x1:"12",y1:"3",x2:"12",y2:"15"})],-1)),a[5]||(a[5]=Ke(" 上传图片 ",-1))]),j("button",{class:oe(["btn-compare",{active:n.compareMode}]),onClick:a[2]||(a[2]=l=>o.$emit("toggle-compare"))},[a[6]||(a[6]=j("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[j("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),j("line",{x1:"12",y1:"3",x2:"12",y2:"21"})],-1)),Ke(" "+Ut(n.compareMode?"关闭对比":"前后对比"),1)],2)])]))}},f_=Ai(u_,[["__scopeId","data-v-78100527"]]),h_={class:"preview-area"},d_={class:"preview-toolbar"},p_={class:"toolbar-left"},m_={class:"breadcrumb"},g_={class:"breadcrumb-cat"},__={class:"breadcrumb-plugin"},v_={class:"toolbar-right"},x_={class:"view-toggle"},y_=["onClick","title"],M_=["innerHTML"],S_={class:"zoom-control"},b_={class:"zoom-val"},E_={class:"center-wrap"},w_={__name:"PreviewArea",props:{compareMode:{type:Boolean,default:!1},hasImage:{type:Boolean,default:!1},isWebGL:{type:Boolean,default:!1},showingOriginal:{type:Boolean,default:!1},currentCategory:{type:String,default:""},currentPlugin:{type:String,default:""},imageWidth:{type:Number,default:0},imageHeight:{type:Number,default:0}},emits:["upload","toggle-original"],setup(n,{expose:t,emit:e}){const i=n,r=e,s=Zt(null),o=Zt(null),a=Zt(null),l=Zt(null),u=Zt(null),c=Zt(null),f=Zt("fit"),p=Zt(100),d=[{id:"fit",label:"适应窗口",icon:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>'},{id:"actual",label:"实际大小",icon:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>'}],v=de(()=>i.imageWidth||900),g=de(()=>i.imageHeight||600),m=de(()=>f.value==="fit"?{width:v.value+"px",height:g.value+"px",maxWidth:"100%",maxHeight:"100%"}:{width:Math.round(v.value*p.value/100)+"px",height:Math.round(g.value*p.value/100)+"px"});t({webglCanvas:s,canvas2d:o,originalCanvas:a});function h(){var L;(L=l.value)==null||L.click()}function y(L){r("upload",L)}function _(L){var z,V;L.preventDefault();const C=(V=(z=L.dataTransfer)==null?void 0:z.files)==null?void 0:V[0];C&&r("upload",{target:{files:[C]}})}function S(L){p.value=Math.min(400,Math.max(10,p.value+L))}function E(){r("toggle-original")}return(L,C)=>(Pt(),It("div",h_,[j("div",d_,[j("div",p_,[j("span",m_,[j("span",g_,Ut(n.currentCategory),1),C[3]||(C[3]=j("span",{class:"breadcrumb-sep"},"/",-1)),j("span",__,Ut(n.currentPlugin),1)])]),j("div",v_,[j("div",x_,[(Pt(),It(ye,null,ai(d,z=>j("button",{key:z.id,class:oe({active:f.value===z.id}),onClick:V=>f.value=z.id,title:z.label},[j("span",{innerHTML:z.icon},null,8,M_)],10,y_)),64))]),j("div",S_,[j("button",{onClick:C[0]||(C[0]=z=>S(-25))},[...C[4]||(C[4]=[j("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[j("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])]),j("span",b_,Ut(p.value)+"%",1),j("button",{onClick:C[1]||(C[1]=z=>S(25))},[...C[5]||(C[5]=[j("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[j("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),j("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])])])]),j("div",{class:"canvas-area",ref_key:"canvasArea",ref:c},[n.hasImage?Jt("",!0):(Pt(),It("div",{key:0,class:"upload-placeholder",onClick:h,onDragover:C[2]||(C[2]=Un(()=>{},["prevent"])),onDrop:_},[...C[6]||(C[6]=[cs('<div class="upload-box" data-v-e90c1f16><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" data-v-e90c1f16><rect x="3" y="3" width="18" height="18" rx="2" data-v-e90c1f16></rect><circle cx="8.5" cy="8.5" r="1.5" data-v-e90c1f16></circle><polyline points="21 15 16 10 5 21" data-v-e90c1f16></polyline></svg><p class="upload-text" data-v-e90c1f16>点击或拖拽图片到此处</p><p class="upload-sub" data-v-e90c1f16>支持 JPG、PNG、WebP</p></div>',1)])],32)),j("div",{class:oe(["scroll-wrap",{scrollable:f.value==="actual",hidden:!n.hasImage}])},[j("div",E_,[j("div",{class:"canvas-wrap",style:xn(m.value),ref_key:"canvasWrapRef",ref:u},[j("canvas",{ref_key:"webglCanvas",ref:s,class:"abs-fill",style:xn({display:n.isWebGL?"block":"none"})},null,4),j("canvas",{ref_key:"canvas2d",ref:o,class:"abs-fill",style:xn({display:n.isWebGL?"none":"block"})},null,4),n.compareMode&&n.hasImage?(Pt(),It("div",{key:0,class:oe(["compare-overlay",{"showing-original":n.showingOriginal}]),onClick:E},[j("canvas",{ref_key:"originalCanvas",ref:a,class:"abs-fill",style:xn({opacity:n.showingOriginal?1:0})},null,4),j("div",{class:oe(["cmp-badge",n.showingOriginal?"badge-orig":"badge-fx"])},Ut(n.showingOriginal?"原图":"效果"),3),C[7]||(C[7]=j("div",{class:"cmp-hint"},"点击切换",-1))],2)):Jt("",!0)],4)])],2)],512),j("input",{ref_key:"fileInput",ref:l,type:"file",accept:"image/*",onChange:y,style:{display:"none"}},null,544)]))}},T_=Ai(w_,[["__scopeId","data-v-e90c1f16"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bl="162",A_=0,Zc=1,C_=2,qh=1,R_=2,Yn=3,Ti=0,Qe=1,ti=2,Si=0,Ir=1,Kc=2,Jc=3,Qc=4,P_=5,Xi=100,I_=101,L_=102,tu=103,eu=104,D_=200,U_=201,N_=202,O_=203,ll=204,cl=205,F_=206,B_=207,k_=208,z_=209,H_=210,G_=211,V_=212,W_=213,X_=214,$_=0,q_=1,j_=2,ya=3,Y_=4,Z_=5,K_=6,J_=7,jh=0,Q_=1,tv=2,bi=0,ev=1,nv=2,iv=3,rv=4,sv=5,av=6,ov=7,Yh=300,Or=301,Fr=302,ul=303,fl=304,Ga=306,hl=1e3,_n=1001,dl=1002,Ve=1003,nu=1004,jr=1005,Ze=1006,ho=1007,ji=1008,Ei=1009,lv=1010,cv=1011,kl=1012,Zh=1013,Mi=1014,ei=1015,ys=1016,Kh=1017,Jh=1018,Ji=1020,uv=1021,vn=1023,fv=1024,hv=1025,Qi=1026,Br=1027,dv=1028,Qh=1029,pv=1030,td=1031,ed=1033,po=33776,mo=33777,go=33778,_o=33779,iu=35840,ru=35841,su=35842,au=35843,nd=36196,ou=37492,lu=37496,cu=37808,uu=37809,fu=37810,hu=37811,du=37812,pu=37813,mu=37814,gu=37815,_u=37816,vu=37817,xu=37818,yu=37819,Mu=37820,Su=37821,vo=36492,bu=36494,Eu=36495,mv=36283,wu=36284,Tu=36285,Au=36286,gv=3200,_v=3201,vv=0,xv=1,yi="",Rn="srgb",Ci="srgb-linear",zl="display-p3",Va="display-p3-linear",Ma="linear",he="srgb",Sa="rec709",ba="p3",sr=7680,Cu=519,yv=512,Mv=513,Sv=514,id=515,bv=516,Ev=517,wv=518,Tv=519,Ru=35044,Pu="300 es",pl=1035,ni=2e3,Ea=2001;class zr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xo=Math.PI/180,ml=180/Math.PI;function Es(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]).toLowerCase()}function Je(n,t,e){return Math.max(t,Math.min(e,n))}function Av(n,t){return(n%t+t)%t}function yo(n,t,e){return(1-e)*n+e*t}function Iu(n){return(n&n-1)===0&&n!==0}function gl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Yr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function je(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Qt{constructor(t=0,e=0){Qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,i,r,s,o,a,l,u){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,u)}set(t,e,i,r,s,o,a,l,u){const c=this.elements;return c[0]=t,c[1]=r,c[2]=a,c[3]=e,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],p=i[2],d=i[5],v=i[8],g=r[0],m=r[3],h=r[6],y=r[1],_=r[4],S=r[7],E=r[2],L=r[5],C=r[8];return s[0]=o*g+a*y+l*E,s[3]=o*m+a*_+l*L,s[6]=o*h+a*S+l*C,s[1]=u*g+c*y+f*E,s[4]=u*m+c*_+f*L,s[7]=u*h+c*S+f*C,s[2]=p*g+d*y+v*E,s[5]=p*m+d*_+v*L,s[8]=p*h+d*S+v*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8];return e*o*c-e*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],f=c*o-a*u,p=a*l-c*s,d=u*s-o*l,v=e*f+i*p+r*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=f*g,t[1]=(r*u-c*i)*g,t[2]=(a*i-r*o)*g,t[3]=p*g,t[4]=(c*e-r*l)*g,t[5]=(r*s-a*e)*g,t[6]=d*g,t[7]=(i*l-u*e)*g,t[8]=(o*e-i*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+t,-r*u,r*l,-r*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Mo.makeScale(t,e)),this}rotate(t){return this.premultiply(Mo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Mo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Mo=new qt;function rd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function wa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Cv(){const n=wa("canvas");return n.style.display="block",n}const Lu={};function Rv(n){n in Lu||(Lu[n]=!0,console.warn(n))}const Du=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uu=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Us={[Ci]:{transfer:Ma,primaries:Sa,toReference:n=>n,fromReference:n=>n},[Rn]:{transfer:he,primaries:Sa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Va]:{transfer:Ma,primaries:ba,toReference:n=>n.applyMatrix3(Uu),fromReference:n=>n.applyMatrix3(Du)},[zl]:{transfer:he,primaries:ba,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Uu),fromReference:n=>n.applyMatrix3(Du).convertLinearToSRGB()}},Pv=new Set([Ci,Va]),re={enabled:!0,_workingColorSpace:Ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Pv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Us[t].toReference,r=Us[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Us[n].primaries},getTransfer:function(n){return n===yi?Ma:Us[n].transfer}};function Lr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function So(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ar;class sd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ar===void 0&&(ar=wa("canvas")),ar.width=t.width,ar.height=t.height;const i=ar.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ar}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=wa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Lr(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Lr(e[i]/255)*255):e[i]=Lr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Iv=0;class ad{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=Es(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(bo(r[o].image)):s.push(bo(r[o]))}else s=bo(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function bo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lv=0;class qe extends zr{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,i=_n,r=_n,s=Ze,o=ji,a=vn,l=Ei,u=qe.DEFAULT_ANISOTROPY,c=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=Es(),this.name="",this.source=new ad(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hl:t.x=t.x-Math.floor(t.x);break;case _n:t.x=t.x<0?0:1;break;case dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hl:t.y=t.y-Math.floor(t.y);break;case _n:t.y=t.y<0?0:1;break;case dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Yh;qe.DEFAULT_ANISOTROPY=1;class Le{constructor(t=0,e=0,i=0,r=1){Le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,u=l[0],c=l[4],f=l[8],p=l[1],d=l[5],v=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(c-p)<.01&&Math.abs(f-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(c+p)<.1&&Math.abs(f+g)<.1&&Math.abs(v+m)<.1&&Math.abs(u+d+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(u+1)/2,S=(d+1)/2,E=(h+1)/2,L=(c+p)/4,C=(f+g)/4,z=(v+m)/4;return _>S&&_>E?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=L/i,s=C/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=L/r,s=z/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=C/s,r=z/s),this.set(i,r,s,e),this}let y=Math.sqrt((m-v)*(m-v)+(f-g)*(f-g)+(p-c)*(p-c));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(f-g)/y,this.z=(p-c)/y,this.w=Math.acos((u+d+h-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dv extends zr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new qe(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ad(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends Dv{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class od extends qe{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uv extends qe{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ws{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const p=s[o+0],d=s[o+1],v=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f;return}if(a===1){t[e+0]=p,t[e+1]=d,t[e+2]=v,t[e+3]=g;return}if(f!==g||l!==p||u!==d||c!==v){let m=1-a;const h=l*p+u*d+c*v+f*g,y=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const E=Math.sqrt(_),L=Math.atan2(E,h*y);m=Math.sin(m*L)/E,a=Math.sin(a*L)/E}const S=a*y;if(l=l*m+p*S,u=u*m+d*S,c=c*m+v*S,f=f*m+g*S,m===1-a){const E=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=E,u*=E,c*=E,f*=E}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],p=s[o+1],d=s[o+2],v=s[o+3];return t[e]=a*v+c*f+l*d-u*p,t[e+1]=l*v+c*p+u*f-a*d,t[e+2]=u*v+c*d+a*p-l*f,t[e+3]=c*v-a*f-l*p-u*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),p=l(i/2),d=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=p*c*f+u*d*v,this._y=u*d*f-p*c*v,this._z=u*c*v+p*d*f,this._w=u*c*f-p*d*v;break;case"YXZ":this._x=p*c*f+u*d*v,this._y=u*d*f-p*c*v,this._z=u*c*v-p*d*f,this._w=u*c*f+p*d*v;break;case"ZXY":this._x=p*c*f-u*d*v,this._y=u*d*f+p*c*v,this._z=u*c*v+p*d*f,this._w=u*c*f-p*d*v;break;case"ZYX":this._x=p*c*f-u*d*v,this._y=u*d*f+p*c*v,this._z=u*c*v-p*d*f,this._w=u*c*f+p*d*v;break;case"YZX":this._x=p*c*f+u*d*v,this._y=u*d*f+p*c*v,this._z=u*c*v-p*d*f,this._w=u*c*f-p*d*v;break;case"XZY":this._x=p*c*f-u*d*v,this._y=u*d*f-p*c*v,this._z=u*c*v+p*d*f,this._w=u*c*f+p*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],u=e[2],c=e[6],f=e[10],p=i+a+f;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(c-l)*d,this._y=(s-u)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(c-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+u)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-u)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+c)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+u)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Je(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,u=e._z,c=e._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-e)*c)/u,p=Math.sin(e*c)/u;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class gt{constructor(t=0,e=0,i=0){gt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*r-a*i),c=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Eo.copy(this).projectOnVector(t),this.sub(Eo)}reflect(t){return this.sub(Eo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eo=new gt,Nu=new ws;class Ts{constructor(t=new gt(1/0,1/0,1/0),e=new gt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hn):hn.fromBufferAttribute(s,o),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ns.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ns.copy(i.boundingBox)),Ns.applyMatrix4(t.matrixWorld),this.union(Ns)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zr),Os.subVectors(this.max,Zr),or.subVectors(t.a,Zr),lr.subVectors(t.b,Zr),cr.subVectors(t.c,Zr),hi.subVectors(lr,or),di.subVectors(cr,lr),Ni.subVectors(or,cr);let e=[0,-hi.z,hi.y,0,-di.z,di.y,0,-Ni.z,Ni.y,hi.z,0,-hi.x,di.z,0,-di.x,Ni.z,0,-Ni.x,-hi.y,hi.x,0,-di.y,di.x,0,-Ni.y,Ni.x,0];return!wo(e,or,lr,cr,Os)||(e=[1,0,0,0,1,0,0,0,1],!wo(e,or,lr,cr,Os))?!1:(Fs.crossVectors(hi,di),e=[Fs.x,Fs.y,Fs.z],wo(e,or,lr,cr,Os))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Wn=[new gt,new gt,new gt,new gt,new gt,new gt,new gt,new gt],hn=new gt,Ns=new Ts,or=new gt,lr=new gt,cr=new gt,hi=new gt,di=new gt,Ni=new gt,Zr=new gt,Os=new gt,Fs=new gt,Oi=new gt;function wo(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Oi.fromArray(n,s);const a=r.x*Math.abs(Oi.x)+r.y*Math.abs(Oi.y)+r.z*Math.abs(Oi.z),l=t.dot(Oi),u=e.dot(Oi),c=i.dot(Oi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Nv=new Ts,Kr=new gt,To=new gt;class Hl{constructor(t=new gt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Nv.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Kr.subVectors(t,this.center);const e=Kr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Kr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(To.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Kr.copy(t.center).add(To)),this.expandByPoint(Kr.copy(t.center).sub(To))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new gt,Ao=new gt,Bs=new gt,pi=new gt,Co=new gt,ks=new gt,Ro=new gt;class Ov{constructor(t=new gt,e=new gt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Ao.copy(t).add(e).multiplyScalar(.5),Bs.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(Ao);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Bs),a=pi.dot(this.direction),l=-pi.dot(Bs),u=pi.lengthSq(),c=Math.abs(1-o*o);let f,p,d,v;if(c>0)if(f=o*l-a,p=o*a-l,v=s*c,f>=0)if(p>=-v)if(p<=v){const g=1/c;f*=g,p*=g,d=f*(f+o*p+2*a)+p*(o*f+p+2*l)+u}else p=s,f=Math.max(0,-(o*p+a)),d=-f*f+p*(p+2*l)+u;else p=-s,f=Math.max(0,-(o*p+a)),d=-f*f+p*(p+2*l)+u;else p<=-v?(f=Math.max(0,-(-o*s+a)),p=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+p*(p+2*l)+u):p<=v?(f=0,p=Math.min(Math.max(-s,-l),s),d=p*(p+2*l)+u):(f=Math.max(0,-(o*s+a)),p=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+p*(p+2*l)+u);else p=o>0?-s:s,f=Math.max(0,-(o*p+a)),d=-f*f+p*(p+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ao).addScaledVector(Bs,p),d}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);const i=Xn.dot(this.direction),r=Xn.dot(Xn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,p=this.origin;return u>=0?(i=(t.min.x-p.x)*u,r=(t.max.x-p.x)*u):(i=(t.max.x-p.x)*u,r=(t.min.x-p.x)*u),c>=0?(s=(t.min.y-p.y)*c,o=(t.max.y-p.y)*c):(s=(t.max.y-p.y)*c,o=(t.min.y-p.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-p.z)*f,l=(t.max.z-p.z)*f):(a=(t.max.z-p.z)*f,l=(t.min.z-p.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,i,r,s){Co.subVectors(e,t),ks.subVectors(i,t),Ro.crossVectors(Co,ks);let o=this.direction.dot(Ro),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,t);const l=a*this.direction.dot(ks.crossVectors(pi,ks));if(l<0)return null;const u=a*this.direction.dot(Co.cross(pi));if(u<0||l+u>o)return null;const c=-a*pi.dot(Ro);return c<0?null:this.at(c/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ee{constructor(t,e,i,r,s,o,a,l,u,c,f,p,d,v,g,m){Ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,u,c,f,p,d,v,g,m)}set(t,e,i,r,s,o,a,l,u,c,f,p,d,v,g,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=p,h[3]=d,h[7]=v,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ee().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/ur.setFromMatrixColumn(t,0).length(),s=1/ur.setFromMatrixColumn(t,1).length(),o=1/ur.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const p=o*c,d=o*f,v=a*c,g=a*f;e[0]=l*c,e[4]=-l*f,e[8]=u,e[1]=d+v*u,e[5]=p-g*u,e[9]=-a*l,e[2]=g-p*u,e[6]=v+d*u,e[10]=o*l}else if(t.order==="YXZ"){const p=l*c,d=l*f,v=u*c,g=u*f;e[0]=p+g*a,e[4]=v*a-d,e[8]=o*u,e[1]=o*f,e[5]=o*c,e[9]=-a,e[2]=d*a-v,e[6]=g+p*a,e[10]=o*l}else if(t.order==="ZXY"){const p=l*c,d=l*f,v=u*c,g=u*f;e[0]=p-g*a,e[4]=-o*f,e[8]=v+d*a,e[1]=d+v*a,e[5]=o*c,e[9]=g-p*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const p=o*c,d=o*f,v=a*c,g=a*f;e[0]=l*c,e[4]=v*u-d,e[8]=p*u+g,e[1]=l*f,e[5]=g*u+p,e[9]=d*u-v,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const p=o*l,d=o*u,v=a*l,g=a*u;e[0]=l*c,e[4]=g-p*f,e[8]=v*f+d,e[1]=f,e[5]=o*c,e[9]=-a*c,e[2]=-u*c,e[6]=d*f+v,e[10]=p-g*f}else if(t.order==="XZY"){const p=o*l,d=o*u,v=a*l,g=a*u;e[0]=l*c,e[4]=-f,e[8]=u*c,e[1]=p*f+g,e[5]=o*c,e[9]=d*f-v,e[2]=v*f-d,e[6]=a*c,e[10]=g*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fv,t,Bv)}lookAt(t,e,i){const r=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),mi.crossVectors(i,en),mi.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),mi.crossVectors(i,en)),mi.normalize(),zs.crossVectors(en,mi),r[0]=mi.x,r[4]=zs.x,r[8]=en.x,r[1]=mi.y,r[5]=zs.y,r[9]=en.y,r[2]=mi.z,r[6]=zs.z,r[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],p=i[9],d=i[13],v=i[2],g=i[6],m=i[10],h=i[14],y=i[3],_=i[7],S=i[11],E=i[15],L=r[0],C=r[4],z=r[8],V=r[12],T=r[1],U=r[5],P=r[9],N=r[13],M=r[2],Y=r[6],W=r[10],Z=r[14],st=r[3],et=r[7],ot=r[11],F=r[15];return s[0]=o*L+a*T+l*M+u*st,s[4]=o*C+a*U+l*Y+u*et,s[8]=o*z+a*P+l*W+u*ot,s[12]=o*V+a*N+l*Z+u*F,s[1]=c*L+f*T+p*M+d*st,s[5]=c*C+f*U+p*Y+d*et,s[9]=c*z+f*P+p*W+d*ot,s[13]=c*V+f*N+p*Z+d*F,s[2]=v*L+g*T+m*M+h*st,s[6]=v*C+g*U+m*Y+h*et,s[10]=v*z+g*P+m*W+h*ot,s[14]=v*V+g*N+m*Z+h*F,s[3]=y*L+_*T+S*M+E*st,s[7]=y*C+_*U+S*Y+E*et,s[11]=y*z+_*P+S*W+E*ot,s[15]=y*V+_*N+S*Z+E*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],u=t[13],c=t[2],f=t[6],p=t[10],d=t[14],v=t[3],g=t[7],m=t[11],h=t[15];return v*(+s*l*f-r*u*f-s*a*p+i*u*p+r*a*d-i*l*d)+g*(+e*l*d-e*u*p+s*o*p-r*o*d+r*u*c-s*l*c)+m*(+e*u*f-e*a*d-s*o*f+i*o*d+s*a*c-i*u*c)+h*(-r*a*c-e*l*f+e*a*p+r*o*f-i*o*p+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],f=t[9],p=t[10],d=t[11],v=t[12],g=t[13],m=t[14],h=t[15],y=f*m*u-g*p*u+g*l*d-a*m*d-f*l*h+a*p*h,_=v*p*u-c*m*u-v*l*d+o*m*d+c*l*h-o*p*h,S=c*g*u-v*f*u+v*a*d-o*g*d-c*a*h+o*f*h,E=v*f*l-c*g*l-v*a*p+o*g*p+c*a*m-o*f*m,L=e*y+i*_+r*S+s*E;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/L;return t[0]=y*C,t[1]=(g*p*s-f*m*s-g*r*d+i*m*d+f*r*h-i*p*h)*C,t[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*h+i*l*h)*C,t[3]=(f*l*s-a*p*s-f*r*u+i*p*u+a*r*d-i*l*d)*C,t[4]=_*C,t[5]=(c*m*s-v*p*s+v*r*d-e*m*d-c*r*h+e*p*h)*C,t[6]=(v*l*s-o*m*s-v*r*u+e*m*u+o*r*h-e*l*h)*C,t[7]=(o*p*s-c*l*s+c*r*u-e*p*u-o*r*d+e*l*d)*C,t[8]=S*C,t[9]=(v*f*s-c*g*s-v*i*d+e*g*d+c*i*h-e*f*h)*C,t[10]=(o*g*s-v*a*s+v*i*u-e*g*u-o*i*h+e*a*h)*C,t[11]=(c*a*s-o*f*s-c*i*u+e*f*u+o*i*d-e*a*d)*C,t[12]=E*C,t[13]=(c*g*r-v*f*r+v*i*p-e*g*p-c*i*m+e*f*m)*C,t[14]=(v*a*r-o*g*r-v*i*l+e*g*l+o*i*m-e*a*m)*C,t[15]=(o*f*r-c*a*r+c*i*l-e*f*l-o*i*p+e*a*p)*C,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,u=s+s,c=o+o,f=a+a,p=s*u,d=s*c,v=s*f,g=o*c,m=o*f,h=a*f,y=l*u,_=l*c,S=l*f,E=i.x,L=i.y,C=i.z;return r[0]=(1-(g+h))*E,r[1]=(d+S)*E,r[2]=(v-_)*E,r[3]=0,r[4]=(d-S)*L,r[5]=(1-(p+h))*L,r[6]=(m+y)*L,r[7]=0,r[8]=(v+_)*C,r[9]=(m-y)*C,r[10]=(1-(p+g))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=ur.set(r[0],r[1],r[2]).length();const o=ur.set(r[4],r[5],r[6]).length(),a=ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],dn.copy(this);const u=1/s,c=1/o,f=1/a;return dn.elements[0]*=u,dn.elements[1]*=u,dn.elements[2]*=u,dn.elements[4]*=c,dn.elements[5]*=c,dn.elements[6]*=c,dn.elements[8]*=f,dn.elements[9]*=f,dn.elements[10]*=f,e.setFromRotationMatrix(dn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=ni){const l=this.elements,u=2*s/(e-t),c=2*s/(i-r),f=(e+t)/(e-t),p=(i+r)/(i-r);let d,v;if(a===ni)d=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Ea)d=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=ni){const l=this.elements,u=1/(e-t),c=1/(i-r),f=1/(o-s),p=(e+t)*u,d=(i+r)*c;let v,g;if(a===ni)v=(o+s)*f,g=-2*f;else if(a===Ea)v=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ur=new gt,dn=new Ee,Fv=new gt(0,0,0),Bv=new gt(1,1,1),mi=new gt,zs=new gt,en=new gt,Ou=new Ee,Fu=new ws;class oi{constructor(t=0,e=0,i=0,r=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],p=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ou.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ou,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fu.setFromEuler(this),this.setFromQuaternion(Fu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class ld{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kv=0;const Bu=new gt,fr=new ws,$n=new Ee,Hs=new gt,Jr=new gt,zv=new gt,Hv=new ws,ku=new gt(1,0,0),zu=new gt(0,1,0),Hu=new gt(0,0,1),Gv={type:"added"},Vv={type:"removed"},Po={type:"childadded",child:null},Io={type:"childremoved",child:null};class an extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const t=new gt,e=new oi,i=new ws,r=new gt(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ee},normalMatrix:{value:new qt}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ld,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fr.setFromAxisAngle(t,e),this.quaternion.multiply(fr),this}rotateOnWorldAxis(t,e){return fr.setFromAxisAngle(t,e),this.quaternion.premultiply(fr),this}rotateX(t){return this.rotateOnAxis(ku,t)}rotateY(t){return this.rotateOnAxis(zu,t)}rotateZ(t){return this.rotateOnAxis(Hu,t)}translateOnAxis(t,e){return Bu.copy(t).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ku,t)}translateY(t){return this.translateOnAxis(zu,t)}translateZ(t){return this.translateOnAxis(Hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Hs.copy(t):Hs.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Jr,Hs,this.up):$n.lookAt(Hs,Jr,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),fr.setFromRotationMatrix($n),this.quaternion.premultiply(fr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Gv),Po.child=t,this.dispatchEvent(Po),Po.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vv),Io.child=t,this.dispatchEvent(Io),Io.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,t,zv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,Hv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),c=o(t.images),f=o(t.shapes),p=o(t.skeletons),d=o(t.animations),v=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}an.DEFAULT_UP=new gt(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new gt,qn=new gt,Lo=new gt,jn=new gt,hr=new gt,dr=new gt,Gu=new gt,Do=new gt,Uo=new gt,No=new gt;class Nn{constructor(t=new gt,e=new gt,i=new gt){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),pn.subVectors(t,e),r.cross(pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){pn.subVectors(r,e),qn.subVectors(i,e),Lo.subVectors(t,e);const o=pn.dot(pn),a=pn.dot(qn),l=pn.dot(Lo),u=qn.dot(qn),c=qn.dot(Lo),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const p=1/f,d=(u*l-a*c)*p,v=(o*c-a*l)*p;return s.set(1-d-v,v,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static isFrontFacing(t,e,i,r){return pn.subVectors(i,e),qn.subVectors(t,e),pn.cross(qn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),pn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Nn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;hr.subVectors(r,i),dr.subVectors(s,i),Do.subVectors(t,i);const l=hr.dot(Do),u=dr.dot(Do);if(l<=0&&u<=0)return e.copy(i);Uo.subVectors(t,r);const c=hr.dot(Uo),f=dr.dot(Uo);if(c>=0&&f<=c)return e.copy(r);const p=l*f-c*u;if(p<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(i).addScaledVector(hr,o);No.subVectors(t,s);const d=hr.dot(No),v=dr.dot(No);if(v>=0&&d<=v)return e.copy(s);const g=d*u-l*v;if(g<=0&&u>=0&&v<=0)return a=u/(u-v),e.copy(i).addScaledVector(dr,a);const m=c*v-d*f;if(m<=0&&f-c>=0&&d-v>=0)return Gu.subVectors(s,r),a=(f-c)/(f-c+(d-v)),e.copy(r).addScaledVector(Gu,a);const h=1/(m+g+p);return o=g*h,a=p*h,e.copy(i).addScaledVector(hr,o).addScaledVector(dr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function Oo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class se{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=re.workingColorSpace){return this.r=t,this.g=e,this.b=i,re.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=re.workingColorSpace){if(t=Av(t,1),e=Je(e,0,1),i=Je(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Oo(o,s,t+1/3),this.g=Oo(o,s,t),this.b=Oo(o,s,t-1/3)}return re.toWorkingColorSpace(this,r),this}setStyle(t,e=Rn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Rn){const i=cd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Lr(t.r),this.g=Lr(t.g),this.b=Lr(t.b),this}copyLinearToSRGB(t){return this.r=So(t.r),this.g=So(t.g),this.b=So(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Rn){return re.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Je(Ne.r*255,0,255))*65536+Math.round(Je(Ne.g*255,0,255))*256+Math.round(Je(Ne.b*255,0,255))}getHexString(t=Rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(Ne.copy(this),e);const i=Ne.r,r=Ne.g,s=Ne.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Rn){re.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,i=Ne.g,r=Ne.b;return t!==Rn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(Gs);const i=yo(gi.h,Gs.h,e),r=yo(gi.s,Gs.s,e),s=yo(gi.l,Gs.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new se;se.NAMES=cd;let Wv=0;class Wa extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=Ir,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ll,this.blendDst=cl,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ir&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ll&&(i.blendSrc=this.blendSrc),this.blendDst!==cl&&(i.blendDst=this.blendDst),this.blendEquation!==Xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ya&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ud extends Wa{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new gt,Vs=new Qt;class Bn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ru,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Rv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Vs.fromBufferAttribute(this,e),Vs.applyMatrix3(t),this.setXY(e,Vs.x,Vs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Yr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=je(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yr(e,this.array)),e}setX(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yr(e,this.array)),e}setY(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yr(e,this.array)),e}setW(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array),r=je(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array),r=je(r,this.array),s=je(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ru&&(t.usage=this.usage),t}}class fd extends Bn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class hd extends Bn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class tr extends Bn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Xv=0;const un=new Ee,Fo=new an,pr=new gt,nn=new Ts,Qr=new Ts,Re=new gt;class ir extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rd(t)?hd:fd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,i){return un.makeTranslation(t,e,i),this.applyMatrix4(un),this}scale(t,e,i){return un.makeScale(t,e,i),this.applyMatrix4(un),this}lookAt(t){return Fo.lookAt(t),Fo.updateMatrix(),this.applyMatrix4(Fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tr(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new gt(-1/0,-1/0,-1/0),new gt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new gt,1/0);return}if(t){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Qr.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(nn.min,Qr.min),nn.expandByPoint(Re),Re.addVectors(nn.max,Qr.max),nn.expandByPoint(Re)):(nn.expandByPoint(Qr.min),nn.expandByPoint(Qr.max))}nn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Re.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Re));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Re.fromBufferAttribute(a,u),l&&(pr.fromBufferAttribute(t,u),Re.add(pr)),r=Math.max(r,i.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let z=0;z<i.count;z++)a[z]=new gt,l[z]=new gt;const u=new gt,c=new gt,f=new gt,p=new Qt,d=new Qt,v=new Qt,g=new gt,m=new gt;function h(z,V,T){u.fromBufferAttribute(i,z),c.fromBufferAttribute(i,V),f.fromBufferAttribute(i,T),p.fromBufferAttribute(s,z),d.fromBufferAttribute(s,V),v.fromBufferAttribute(s,T),c.sub(u),f.sub(u),d.sub(p),v.sub(p);const U=1/(d.x*v.y-v.x*d.y);isFinite(U)&&(g.copy(c).multiplyScalar(v.y).addScaledVector(f,-d.y).multiplyScalar(U),m.copy(f).multiplyScalar(d.x).addScaledVector(c,-v.x).multiplyScalar(U),a[z].add(g),a[V].add(g),a[T].add(g),l[z].add(m),l[V].add(m),l[T].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let z=0,V=y.length;z<V;++z){const T=y[z],U=T.start,P=T.count;for(let N=U,M=U+P;N<M;N+=3)h(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const _=new gt,S=new gt,E=new gt,L=new gt;function C(z){E.fromBufferAttribute(r,z),L.copy(E);const V=a[z];_.copy(V),_.sub(E.multiplyScalar(E.dot(V))).normalize(),S.crossVectors(L,V);const U=S.dot(l[z])<0?-1:1;o.setXYZW(z,_.x,_.y,_.z,U)}for(let z=0,V=y.length;z<V;++z){const T=y[z],U=T.start,P=T.count;for(let N=U,M=U+P;N<M;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,d=i.count;p<d;p++)i.setXYZ(p,0,0,0);const r=new gt,s=new gt,o=new gt,a=new gt,l=new gt,u=new gt,c=new gt,f=new gt;if(t)for(let p=0,d=t.count;p<d;p+=3){const v=t.getX(p+0),g=t.getX(p+1),m=t.getX(p+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let p=0,d=e.count;p<d;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(p+0,c.x,c.y,c.z),i.setXYZ(p+1,c.x,c.y,c.z),i.setXYZ(p+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,l){const u=a.array,c=a.itemSize,f=a.normalized,p=new u.constructor(l.length*c);let d=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*c;for(let h=0;h<c;h++)p[v++]=u[d++]}return new Bn(p,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ir,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=t(l,i);e.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const p=u[c],d=t(p,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,p=u.length;f<p;f++){const d=u[f];c.push(d.toJSON(t.data))}c.length>0&&(r[l]=c,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(e))}const s=t.morphAttributes;for(const u in s){const c=[],f=s[u];for(let p=0,d=f.length;p<d;p++)c.push(f[p].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vu=new Ee,Fi=new Ov,Ws=new Hl,Wu=new gt,mr=new gt,gr=new gt,_r=new gt,Bo=new gt,Xs=new gt,$s=new Qt,qs=new Qt,js=new Qt,Xu=new gt,$u=new gt,qu=new gt,Ys=new gt,Zs=new gt;class On extends an{constructor(t=new ir,e=new ud){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Xs.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Bo.fromBufferAttribute(f,t),o?Xs.addScaledVector(Bo,c):Xs.addScaledVector(Bo.sub(e),c))}e.add(Xs)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere),Ws.applyMatrix4(s),Fi.copy(t.ray).recast(t.near),!(Ws.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(Ws,Wu)===null||Fi.origin.distanceToSquared(Wu)>(t.far-t.near)**2))&&(Vu.copy(s).invert(),Fi.copy(t.ray).applyMatrix4(Vu),!(i.boundingBox!==null&&Fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,p=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=p.length;v<g;v++){const m=p[v],h=o[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,E=_;S<E;S+=3){const L=a.getX(S),C=a.getX(S+1),z=a.getX(S+2);r=Ks(this,h,t,i,u,c,f,L,C,z),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=v,h=g;m<h;m+=3){const y=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);r=Ks(this,o,t,i,u,c,f,y,_,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=p.length;v<g;v++){const m=p[v],h=o[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,E=_;S<E;S+=3){const L=S,C=S+1,z=S+2;r=Ks(this,h,t,i,u,c,f,L,C,z),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=v,h=g;m<h;m+=3){const y=m,_=m+1,S=m+2;r=Ks(this,o,t,i,u,c,f,y,_,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function $v(n,t,e,i,r,s,o,a){let l;if(t.side===Qe?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===Ti,a),l===null)return null;Zs.copy(a),Zs.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(Zs);return u<e.near||u>e.far?null:{distance:u,point:Zs.clone(),object:n}}function Ks(n,t,e,i,r,s,o,a,l,u){n.getVertexPosition(a,mr),n.getVertexPosition(l,gr),n.getVertexPosition(u,_r);const c=$v(n,t,e,i,mr,gr,_r,Ys);if(c){r&&($s.fromBufferAttribute(r,a),qs.fromBufferAttribute(r,l),js.fromBufferAttribute(r,u),c.uv=Nn.getInterpolation(Ys,mr,gr,_r,$s,qs,js,new Qt)),s&&($s.fromBufferAttribute(s,a),qs.fromBufferAttribute(s,l),js.fromBufferAttribute(s,u),c.uv1=Nn.getInterpolation(Ys,mr,gr,_r,$s,qs,js,new Qt)),o&&(Xu.fromBufferAttribute(o,a),$u.fromBufferAttribute(o,l),qu.fromBufferAttribute(o,u),c.normal=Nn.getInterpolation(Ys,mr,gr,_r,Xu,$u,qu,new gt),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new gt,materialIndex:0};Nn.getNormal(mr,gr,_r,f.normal),c.face=f}return c}class As extends ir{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let p=0,d=0;v("z","y","x",-1,-1,i,e,t,o,s,0),v("z","y","x",1,-1,i,e,-t,o,s,1),v("x","z","y",1,1,t,i,e,r,o,2),v("x","z","y",1,-1,t,i,-e,r,o,3),v("x","y","z",1,-1,t,e,i,r,s,4),v("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new tr(u,3)),this.setAttribute("normal",new tr(c,3)),this.setAttribute("uv",new tr(f,2));function v(g,m,h,y,_,S,E,L,C,z,V){const T=S/C,U=E/z,P=S/2,N=E/2,M=L/2,Y=C+1,W=z+1;let Z=0,st=0;const et=new gt;for(let ot=0;ot<W;ot++){const F=ot*U-N;for(let O=0;O<Y;O++){const ct=O*T-P;et[g]=ct*y,et[m]=F*_,et[h]=M,u.push(et.x,et.y,et.z),et[g]=0,et[m]=0,et[h]=L>0?1:-1,c.push(et.x,et.y,et.z),f.push(O/C),f.push(1-ot/z),Z+=1}}for(let ot=0;ot<z;ot++)for(let F=0;F<C;F++){const O=p+F+Y*ot,ct=p+F+Y*(ot+1),Q=p+(F+1)+Y*(ot+1),D=p+(F+1)+Y*ot;l.push(O,ct,D),l.push(ct,Q,D),st+=6}a.addGroup(d,st,V),d+=st,p+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new As(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function kr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function He(n){const t={};for(let e=0;e<n.length;e++){const i=kr(n[e]);for(const r in i)t[r]=i[r]}return t}function qv(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function dd(n){return n.getRenderTarget()===null?n.outputColorSpace:re.workingColorSpace}const jv={clone:kr,merge:He};var Yv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Wa{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yv,this.fragmentShader=Zv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=kr(t.uniforms),this.uniformsGroups=qv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class pd extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new gt,ju=new Qt,Yu=new Qt;class mn extends pd{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ml*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ml*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,ju,Yu),e.subVectors(Yu,ju)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(xo*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const vr=-90,xr=1;class Kv extends an{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mn(vr,xr,t,e);r.layers=this.layers,this.add(r);const s=new mn(vr,xr,t,e);s.layers=this.layers,this.add(s);const o=new mn(vr,xr,t,e);o.layers=this.layers,this.add(o);const a=new mn(vr,xr,t,e);a.layers=this.layers,this.add(a);const l=new mn(vr,xr,t,e);l.layers=this.layers,this.add(l);const u=new mn(vr,xr,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const u of e)this.remove(u);if(t===ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,u),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,r),t.render(e,c),t.setRenderTarget(f,p,d),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class md extends qe{constructor(t,e,i,r,s,o,a,l,u,c){t=t!==void 0?t:[],e=e!==void 0?e:Or,super(t,e,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jv extends er{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new md(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new As(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qe,blending:Si});s.uniforms.tEquirect.value=e;const o=new On(r,s),a=e.minFilter;return e.minFilter===ji&&(e.minFilter=Ze),new Kv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const ko=new gt,Qv=new gt,tx=new qt;class Gi{constructor(t=new gt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=ko.subVectors(i,e).cross(Qv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ko),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||tx.getNormalMatrix(t),r=this.coplanarPoint(ko).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new Hl,Js=new gt;class gd{constructor(t=new Gi,e=new Gi,i=new Gi,r=new Gi,s=new Gi,o=new Gi){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ni){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],p=r[7],d=r[8],v=r[9],g=r[10],m=r[11],h=r[12],y=r[13],_=r[14],S=r[15];if(i[0].setComponents(l-s,p-u,m-d,S-h).normalize(),i[1].setComponents(l+s,p+u,m+d,S+h).normalize(),i[2].setComponents(l+o,p+c,m+v,S+y).normalize(),i[3].setComponents(l-o,p-c,m-v,S-y).normalize(),i[4].setComponents(l-a,p-f,m-g,S-_).normalize(),e===ni)i[5].setComponents(l+a,p+f,m+g,S+_).normalize();else if(e===Ea)i[5].setComponents(a,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Js.x=r.normal.x>0?t.max.x:t.min.x,Js.y=r.normal.y>0?t.max.y:t.min.y,Js.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _d(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function ex(n,t){const e=t.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,p=u.usage,d=f.byteLength,v=n.createBuffer();n.bindBuffer(c,v),n.bufferData(c,f,p),u.onUploadCallback();let g;if(f instanceof Float32Array)g=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(e)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=n.SHORT;else if(f instanceof Uint32Array)g=n.UNSIGNED_INT;else if(f instanceof Int32Array)g=n.INT;else if(f instanceof Int8Array)g=n.BYTE;else if(f instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:d}}function s(u,c,f){const p=c.array,d=c._updateRange,v=c.updateRanges;if(n.bindBuffer(f,u),d.count===-1&&v.length===0&&n.bufferSubData(f,0,p),v.length!==0){for(let g=0,m=v.length;g<m;g++){const h=v[g];e?n.bufferSubData(f,h.start*p.BYTES_PER_ELEMENT,p,h.start,h.count):n.bufferSubData(f,h.start*p.BYTES_PER_ELEMENT,p.subarray(h.start,h.start+h.count))}c.clearUpdateRanges()}d.count!==-1&&(e?n.bufferSubData(f,d.offset*p.BYTES_PER_ELEMENT,p,d.offset,d.count):n.bufferSubData(f,d.offset*p.BYTES_PER_ELEMENT,p.subarray(d.offset,d.offset+d.count)),d.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const p=i.get(u);(!p||p.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:o,remove:a,update:l}}class Cs extends ir{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=t/a,p=e/l,d=[],v=[],g=[],m=[];for(let h=0;h<c;h++){const y=h*p-o;for(let _=0;_<u;_++){const S=_*f-s;v.push(S,-y,0),g.push(0,0,1),m.push(_/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<a;y++){const _=y+u*h,S=y+u*(h+1),E=y+1+u*(h+1),L=y+1+u*h;d.push(_,S,L),d.push(S,E,L)}this.setIndex(d),this.setAttribute("position",new tr(v,3)),this.setAttribute("normal",new tr(g,3)),this.setAttribute("uv",new tr(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cs(t.width,t.height,t.widthSegments,t.heightSegments)}}var nx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ix=`#ifdef USE_ALPHAHASH
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
#endif`,rx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ax=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ox=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lx=`#ifdef USE_AOMAP
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
#endif`,cx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ux=`#ifdef USE_BATCHING
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
#endif`,fx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,hx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,px=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mx=`#ifdef USE_IRIDESCENCE
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
#endif`,gx=`#ifdef USE_BUMPMAP
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
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ex=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wx=`#define PI 3.141592653589793
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
} // validated`,Tx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ax=`vec3 transformedNormal = objectNormal;
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
#endif`,Cx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Px=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ix=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dx=`
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
}`,Ux=`#ifdef USE_ENVMAP
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
#endif`,Nx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ox=`#ifdef USE_ENVMAP
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
#endif`,Fx=`#ifdef USE_ENVMAP
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
#endif`,kx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vx=`#ifdef USE_GRADIENTMAP
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
}`,Wx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Xx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$x=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jx=`uniform bool receiveShadow;
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
#endif`,Yx=`#ifdef USE_ENVMAP
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
#endif`,Zx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t1=`PhysicalMaterial material;
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
#endif`,e1=`struct PhysicalMaterial {
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
}`,n1=`
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
#endif`,i1=`#if defined( RE_IndirectDiffuse )
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
#endif`,r1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,l1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,c1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,h1=`#if defined( USE_POINTS_UV )
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
#endif`,d1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_1=`#ifdef USE_MORPHNORMALS
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
#endif`,v1=`#ifdef USE_MORPHTARGETS
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
#endif`,x1=`#ifdef USE_MORPHTARGETS
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
#endif`,y1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,M1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,w1=`#ifdef USE_NORMALMAP
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
#endif`,T1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,L1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F1=`#ifdef USE_ROUGHNESSMAP
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
#endif`,k1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,H1=`float getShadowMask() {
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
}`,G1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V1=`#ifdef USE_SKINNING
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
#endif`,W1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X1=`#ifdef USE_SKINNING
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
#endif`,$1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z1=`#ifdef USE_TRANSMISSION
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
#endif`,K1=`#ifdef USE_TRANSMISSION
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
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ey=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ny=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iy=`uniform sampler2D t2D;
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
}`,ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ly=`#include <common>
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
}`,cy=`#if DEPTH_PACKING == 3200
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
}`,uy=`#define DISTANCE
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
}`,fy=`#define DISTANCE
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
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,py=`uniform float scale;
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
}`,my=`uniform vec3 diffuse;
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
}`,gy=`#include <common>
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
}`,_y=`uniform vec3 diffuse;
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
}`,vy=`#define LAMBERT
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
}`,xy=`#define LAMBERT
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
}`,yy=`#define MATCAP
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
}`,My=`#define MATCAP
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
}`,by=`#define NORMAL
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
}`,Ey=`#define PHONG
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
}`,wy=`#define PHONG
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
}`,Ty=`#define STANDARD
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
}`,Ay=`#define STANDARD
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
}`,Cy=`#define TOON
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
}`,Ry=`#define TOON
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
}`,Py=`uniform float size;
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
}`,Iy=`uniform vec3 diffuse;
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
}`,Ly=`#include <common>
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
}`,Dy=`uniform vec3 color;
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
}`,Uy=`uniform float rotation;
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
}`,Ny=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:nx,alphahash_pars_fragment:ix,alphamap_fragment:rx,alphamap_pars_fragment:sx,alphatest_fragment:ax,alphatest_pars_fragment:ox,aomap_fragment:lx,aomap_pars_fragment:cx,batching_pars_vertex:ux,batching_vertex:fx,begin_vertex:hx,beginnormal_vertex:dx,bsdfs:px,iridescence_fragment:mx,bumpmap_pars_fragment:gx,clipping_planes_fragment:_x,clipping_planes_pars_fragment:vx,clipping_planes_pars_vertex:xx,clipping_planes_vertex:yx,color_fragment:Mx,color_pars_fragment:Sx,color_pars_vertex:bx,color_vertex:Ex,common:wx,cube_uv_reflection_fragment:Tx,defaultnormal_vertex:Ax,displacementmap_pars_vertex:Cx,displacementmap_vertex:Rx,emissivemap_fragment:Px,emissivemap_pars_fragment:Ix,colorspace_fragment:Lx,colorspace_pars_fragment:Dx,envmap_fragment:Ux,envmap_common_pars_fragment:Nx,envmap_pars_fragment:Ox,envmap_pars_vertex:Fx,envmap_physical_pars_fragment:Yx,envmap_vertex:Bx,fog_vertex:kx,fog_pars_vertex:zx,fog_fragment:Hx,fog_pars_fragment:Gx,gradientmap_pars_fragment:Vx,lightmap_fragment:Wx,lightmap_pars_fragment:Xx,lights_lambert_fragment:$x,lights_lambert_pars_fragment:qx,lights_pars_begin:jx,lights_toon_fragment:Zx,lights_toon_pars_fragment:Kx,lights_phong_fragment:Jx,lights_phong_pars_fragment:Qx,lights_physical_fragment:t1,lights_physical_pars_fragment:e1,lights_fragment_begin:n1,lights_fragment_maps:i1,lights_fragment_end:r1,logdepthbuf_fragment:s1,logdepthbuf_pars_fragment:a1,logdepthbuf_pars_vertex:o1,logdepthbuf_vertex:l1,map_fragment:c1,map_pars_fragment:u1,map_particle_fragment:f1,map_particle_pars_fragment:h1,metalnessmap_fragment:d1,metalnessmap_pars_fragment:p1,morphinstance_vertex:m1,morphcolor_vertex:g1,morphnormal_vertex:_1,morphtarget_pars_vertex:v1,morphtarget_vertex:x1,normal_fragment_begin:y1,normal_fragment_maps:M1,normal_pars_fragment:S1,normal_pars_vertex:b1,normal_vertex:E1,normalmap_pars_fragment:w1,clearcoat_normal_fragment_begin:T1,clearcoat_normal_fragment_maps:A1,clearcoat_pars_fragment:C1,iridescence_pars_fragment:R1,opaque_fragment:P1,packing:I1,premultiplied_alpha_fragment:L1,project_vertex:D1,dithering_fragment:U1,dithering_pars_fragment:N1,roughnessmap_fragment:O1,roughnessmap_pars_fragment:F1,shadowmap_pars_fragment:B1,shadowmap_pars_vertex:k1,shadowmap_vertex:z1,shadowmask_pars_fragment:H1,skinbase_vertex:G1,skinning_pars_vertex:V1,skinning_vertex:W1,skinnormal_vertex:X1,specularmap_fragment:$1,specularmap_pars_fragment:q1,tonemapping_fragment:j1,tonemapping_pars_fragment:Y1,transmission_fragment:Z1,transmission_pars_fragment:K1,uv_pars_fragment:J1,uv_pars_vertex:Q1,uv_vertex:ty,worldpos_vertex:ey,background_vert:ny,background_frag:iy,backgroundCube_vert:ry,backgroundCube_frag:sy,cube_vert:ay,cube_frag:oy,depth_vert:ly,depth_frag:cy,distanceRGBA_vert:uy,distanceRGBA_frag:fy,equirect_vert:hy,equirect_frag:dy,linedashed_vert:py,linedashed_frag:my,meshbasic_vert:gy,meshbasic_frag:_y,meshlambert_vert:vy,meshlambert_frag:xy,meshmatcap_vert:yy,meshmatcap_frag:My,meshnormal_vert:Sy,meshnormal_frag:by,meshphong_vert:Ey,meshphong_frag:wy,meshphysical_vert:Ty,meshphysical_frag:Ay,meshtoon_vert:Cy,meshtoon_frag:Ry,points_vert:Py,points_frag:Iy,shadow_vert:Ly,shadow_frag:Dy,sprite_vert:Uy,sprite_frag:Ny},wt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Ln={basic:{uniforms:He([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:He([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new se(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:He([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:He([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:He([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new se(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:He([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:He([wt.points,wt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:He([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:He([wt.common,wt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:He([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:He([wt.sprite,wt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:He([wt.common,wt.displacementmap,{referencePosition:{value:new gt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:He([wt.lights,wt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Ln.physical={uniforms:He([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Qs={r:0,b:0,g:0},ki=new oi,Oy=new Ee;function Fy(n,t,e,i,r,s,o){const a=new se(0);let l=s===!0?0:1,u,c,f=null,p=0,d=null;function v(m,h){let y=!1,_=h.isScene===!0?h.background:null;_&&_.isTexture&&(_=(h.backgroundBlurriness>0?e:t).get(_)),_===null?g(a,l):_&&_.isColor&&(g(_,1),y=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ga)?(c===void 0&&(c=new On(new As(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:kr(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,L,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),ki.copy(h.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Oy.makeRotationFromEuler(ki)),c.material.toneMapped=re.getTransfer(_.colorSpace)!==he,(f!==_||p!==_.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=_,p=_.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new On(new Cs(2,2),new li({name:"BackgroundMaterial",uniforms:kr(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=re.getTransfer(_.colorSpace)!==he,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||p!==_.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=_,p=_.version,d=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function g(m,h){m.getRGB(Qs,dd(n)),i.buffers.color.setClear(Qs.r,Qs.g,Qs.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:v}}function By(n,t,e,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function f(M,Y,W,Z,st){let et=!1;if(o){const ot=g(Z,W,Y);u!==ot&&(u=ot,d(u.object)),et=h(M,Z,W,st),et&&y(M,Z,W,st)}else{const ot=Y.wireframe===!0;(u.geometry!==Z.id||u.program!==W.id||u.wireframe!==ot)&&(u.geometry=Z.id,u.program=W.id,u.wireframe=ot,et=!0)}st!==null&&e.update(st,n.ELEMENT_ARRAY_BUFFER),(et||c)&&(c=!1,z(M,Y,W,Z),st!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(st).buffer))}function p(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function d(M){return i.isWebGL2?n.bindVertexArray(M):s.bindVertexArrayOES(M)}function v(M){return i.isWebGL2?n.deleteVertexArray(M):s.deleteVertexArrayOES(M)}function g(M,Y,W){const Z=W.wireframe===!0;let st=a[M.id];st===void 0&&(st={},a[M.id]=st);let et=st[Y.id];et===void 0&&(et={},st[Y.id]=et);let ot=et[Z];return ot===void 0&&(ot=m(p()),et[Z]=ot),ot}function m(M){const Y=[],W=[],Z=[];for(let st=0;st<r;st++)Y[st]=0,W[st]=0,Z[st]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:W,attributeDivisors:Z,object:M,attributes:{},index:null}}function h(M,Y,W,Z){const st=u.attributes,et=Y.attributes;let ot=0;const F=W.getAttributes();for(const O in F)if(F[O].location>=0){const Q=st[O];let D=et[O];if(D===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(D=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(D=M.instanceColor)),Q===void 0||Q.attribute!==D||D&&Q.data!==D.data)return!0;ot++}return u.attributesNum!==ot||u.index!==Z}function y(M,Y,W,Z){const st={},et=Y.attributes;let ot=0;const F=W.getAttributes();for(const O in F)if(F[O].location>=0){let Q=et[O];Q===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor));const D={};D.attribute=Q,Q&&Q.data&&(D.data=Q.data),st[O]=D,ot++}u.attributes=st,u.attributesNum=ot,u.index=Z}function _(){const M=u.newAttributes;for(let Y=0,W=M.length;Y<W;Y++)M[Y]=0}function S(M){E(M,0)}function E(M,Y){const W=u.newAttributes,Z=u.enabledAttributes,st=u.attributeDivisors;W[M]=1,Z[M]===0&&(n.enableVertexAttribArray(M),Z[M]=1),st[M]!==Y&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](M,Y),st[M]=Y)}function L(){const M=u.newAttributes,Y=u.enabledAttributes;for(let W=0,Z=Y.length;W<Z;W++)Y[W]!==M[W]&&(n.disableVertexAttribArray(W),Y[W]=0)}function C(M,Y,W,Z,st,et,ot){ot===!0?n.vertexAttribIPointer(M,Y,W,st,et):n.vertexAttribPointer(M,Y,W,Z,st,et)}function z(M,Y,W,Z){if(i.isWebGL2===!1&&(M.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const st=Z.attributes,et=W.getAttributes(),ot=Y.defaultAttributeValues;for(const F in et){const O=et[F];if(O.location>=0){let ct=st[F];if(ct===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor)),ct!==void 0){const Q=ct.normalized,D=ct.itemSize,K=e.get(ct);if(K===void 0)continue;const H=K.buffer,nt=K.type,rt=K.bytesPerElement,ft=i.isWebGL2===!0&&(nt===n.INT||nt===n.UNSIGNED_INT||ct.gpuType===Zh);if(ct.isInterleavedBufferAttribute){const ht=ct.data,w=ht.stride,X=ct.offset;if(ht.isInstancedInterleavedBuffer){for(let x=0;x<O.locationSize;x++)E(O.location+x,ht.meshPerAttribute);M.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let x=0;x<O.locationSize;x++)S(O.location+x);n.bindBuffer(n.ARRAY_BUFFER,H);for(let x=0;x<O.locationSize;x++)C(O.location+x,D/O.locationSize,nt,Q,w*rt,(X+D/O.locationSize*x)*rt,ft)}else{if(ct.isInstancedBufferAttribute){for(let ht=0;ht<O.locationSize;ht++)E(O.location+ht,ct.meshPerAttribute);M.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ht=0;ht<O.locationSize;ht++)S(O.location+ht);n.bindBuffer(n.ARRAY_BUFFER,H);for(let ht=0;ht<O.locationSize;ht++)C(O.location+ht,D/O.locationSize,nt,Q,D*rt,D/O.locationSize*ht*rt,ft)}}else if(ot!==void 0){const Q=ot[F];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(O.location,Q);break;case 3:n.vertexAttrib3fv(O.location,Q);break;case 4:n.vertexAttrib4fv(O.location,Q);break;default:n.vertexAttrib1fv(O.location,Q)}}}}L()}function V(){P();for(const M in a){const Y=a[M];for(const W in Y){const Z=Y[W];for(const st in Z)v(Z[st].object),delete Z[st];delete Y[W]}delete a[M]}}function T(M){if(a[M.id]===void 0)return;const Y=a[M.id];for(const W in Y){const Z=Y[W];for(const st in Z)v(Z[st].object),delete Z[st];delete Y[W]}delete a[M.id]}function U(M){for(const Y in a){const W=a[Y];if(W[M.id]===void 0)continue;const Z=W[M.id];for(const st in Z)v(Z[st].object),delete Z[st];delete W[M.id]}}function P(){N(),c=!0,u!==l&&(u=l,d(u.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:P,resetDefaultState:N,dispose:V,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:S,disableUnusedAttributes:L}}function ky(n,t,e,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,f){n.drawArrays(s,c,f),e.update(f,s,1)}function l(c,f,p){if(p===0)return;let d,v;if(r)d=n,v="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[v](s,c,f,p),e.update(f,s,p)}function u(c,f,p){if(p===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<p;v++)this.render(c[v],f[v]);else{d.multiDrawArraysWEBGL(s,c,0,f,0,p);let v=0;for(let g=0;g<p;g++)v+=f[g];e.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function zy(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||t.has("WEBGL_draw_buffers"),c=e.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,S=o||t.has("OES_texture_float"),E=_&&S,L=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:p,maxTextureSize:d,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:E,maxSamples:L}}function Hy(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Gi,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const d=f.length!==0||p||i!==0||r;return r=p,i=f.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){e=c(f,p,0)},this.setState=function(f,p,d){const v=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||v===null||v.length===0||s&&!m)s?c(null):u();else{const y=s?0:i,_=y*4;let S=h.clippingState||null;l.value=S,S=c(v,p,_,d);for(let E=0;E!==_;++E)S[E]=e[E];h.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(f,p,d,v){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const h=d+g*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,S=d;_!==g;++_,S+=4)o.copy(f[_]).applyMatrix4(y,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Gy(n){let t=new WeakMap;function e(o,a){return a===ul?o.mapping=Or:a===fl&&(o.mapping=Fr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ul||a===fl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Jv(l.height);return u.fromEquirectangularTexture(n,o),t.set(o,u),o.addEventListener("dispose",r),e(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class vd extends pd{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Er=4,Zu=[.125,.215,.35,.446,.526,.582],$i=20,zo=new vd,Ku=new se;let Ho=null,Go=0,Vo=0;const Vi=(1+Math.sqrt(5))/2,yr=1/Vi,Ju=[new gt(1,1,1),new gt(-1,1,1),new gt(1,1,-1),new gt(-1,1,-1),new gt(0,Vi,yr),new gt(0,Vi,-yr),new gt(yr,0,Vi),new gt(-yr,0,Vi),new gt(Vi,yr,0),new gt(-Vi,yr,0)];class Qu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Ho=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ho,Go,Vo),t.scissorTest=!1,ta(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Or||t.mapping===Fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ho=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:ys,format:vn,colorSpace:Ci,depthBuffer:!1},r=tf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tf(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vy(s)),this._blurMaterial=Wy(s,t,e)}return r}_compileMaterial(t){const e=new On(this._lodPlanes[0],t);this._renderer.compile(e,zo)}_sceneToCubeUV(t,e,i,r){const a=new mn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,p=c.toneMapping;c.getClearColor(Ku),c.toneMapping=bi,c.autoClear=!1;const d=new ud({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),v=new On(new As,d);let g=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,g=!0):(d.color.copy(Ku),g=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):y===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const _=this._cubeSize;ta(r,y*_,h>2?_:0,_,_),c.setRenderTarget(r),g&&c.render(v,a),c.render(t,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=p,c.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Or||t.mapping===Fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ef());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new On(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;ta(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,zo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ju[(r-1)%Ju.length];this._blur(t,r-1,r,s,o)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new On(this._lodPlanes[r],u),p=u.uniforms,d=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*$i-1),g=s/v,m=isFinite(s)?1+Math.floor(c*g):$i;m>$i&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$i}`);const h=[];let y=0;for(let C=0;C<$i;++C){const z=C/g,V=Math.exp(-z*z/2);h.push(V),C===0?y+=V:C<m&&(y+=2*V)}for(let C=0;C<h.length;C++)h[C]=h[C]/y;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=h,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:_}=this;p.dTheta.value=v,p.mipInt.value=_-i;const S=this._sizeLods[r],E=3*S*(r>_-Er?r-_+Er:0),L=4*(this._cubeSize-S);ta(e,E,L,3*S,2*S),l.setRenderTarget(e),l.render(f,zo)}}function Vy(n){const t=[],e=[],i=[];let r=n;const s=n-Er+1+Zu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Er?l=Zu[o-n+Er-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,p=[c,c,f,c,f,f,c,c,f,f,c,f],d=6,v=6,g=3,m=2,h=1,y=new Float32Array(g*v*d),_=new Float32Array(m*v*d),S=new Float32Array(h*v*d);for(let L=0;L<d;L++){const C=L%3*2/3-1,z=L>2?0:-1,V=[C,z,0,C+2/3,z,0,C+2/3,z+1,0,C,z,0,C+2/3,z+1,0,C,z+1,0];y.set(V,g*v*L),_.set(p,m*v*L);const T=[L,L,L,L,L,L];S.set(T,h*v*L)}const E=new ir;E.setAttribute("position",new Bn(y,g)),E.setAttribute("uv",new Bn(_,m)),E.setAttribute("faceIndex",new Bn(S,h)),t.push(E),r>Er&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function tf(n,t,e){const i=new er(n,t,e);return i.texture.mapping=Ga,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ta(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Wy(n,t,e){const i=new Float32Array($i),r=new gt(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function ef(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function nf(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gl(),fragmentShader:`

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
	`}function Xy(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===ul||l===fl,c=l===Or||l===Fr;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=t.get(a);return e===null&&(e=new Qu(n)),f=u?e.fromEquirectangular(a,f):e.fromCubemap(a,f),t.set(a,f),f.texture}else{if(t.has(a))return t.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){e===null&&(e=new Qu(n));const p=u?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function $y(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function qy(n,t,e,i){const r={},s=new WeakMap;function o(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const v in p.attributes)t.remove(p.attributes[v]);for(const v in p.morphAttributes){const g=p.morphAttributes[v];for(let m=0,h=g.length;m<h;m++)t.remove(g[m])}p.removeEventListener("dispose",o),delete r[p.id];const d=s.get(p);d&&(t.remove(d),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(f,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,e.memory.geometries++),p}function l(f){const p=f.attributes;for(const v in p)t.update(p[v],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const v in d){const g=d[v];for(let m=0,h=g.length;m<h;m++)t.update(g[m],n.ARRAY_BUFFER)}}function u(f){const p=[],d=f.index,v=f.attributes.position;let g=0;if(d!==null){const y=d.array;g=d.version;for(let _=0,S=y.length;_<S;_+=3){const E=y[_+0],L=y[_+1],C=y[_+2];p.push(E,L,L,C,C,E)}}else if(v!==void 0){const y=v.array;g=v.version;for(let _=0,S=y.length/3-1;_<S;_+=3){const E=_+0,L=_+1,C=_+2;p.push(E,L,L,C,C,E)}}else return;const m=new(rd(p)?hd:fd)(p,1);m.version=g;const h=s.get(f);h&&t.remove(h),s.set(f,m)}function c(f){const p=s.get(f);if(p){const d=f.index;d!==null&&p.version<d.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function jy(n,t,e,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function c(d,v){n.drawElements(s,v,a,d*l),e.update(v,s,1)}function f(d,v,g){if(g===0)return;let m,h;if(r)m=n,h="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,v,a,d*l,g),e.update(v,s,g)}function p(d,v,g){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<g;h++)this.render(d[h]/l,v[h]);else{m.multiDrawElementsWEBGL(s,v,0,a,d,0,g);let h=0;for(let y=0;y<g;y++)h+=v[y];e.update(h,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=p}function Yy(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Zy(n,t){return n[0]-t[0]}function Ky(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Jy(n,t,e){const i={},r=new Float32Array(8),s=new WeakMap,o=new Le,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const p=u.morphTargetInfluences;if(t.isWebGL2===!0){const v=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=v!==void 0?v.length:0;let m=s.get(c);if(m===void 0||m.count!==g){let N=function(){U.dispose(),s.delete(c),c.removeEventListener("dispose",N)};var d=N;m!==void 0&&m.texture.dispose();const h=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,_=c.morphAttributes.color!==void 0,S=c.morphAttributes.position||[],E=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let C=0;h===!0&&(C=1),y===!0&&(C=2),_===!0&&(C=3);let z=c.attributes.position.count*C,V=1;z>t.maxTextureSize&&(V=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const T=new Float32Array(z*V*4*g),U=new od(T,z,V,g);U.type=ei,U.needsUpdate=!0;const P=C*4;for(let M=0;M<g;M++){const Y=S[M],W=E[M],Z=L[M],st=z*V*4*M;for(let et=0;et<Y.count;et++){const ot=et*P;h===!0&&(o.fromBufferAttribute(Y,et),T[st+ot+0]=o.x,T[st+ot+1]=o.y,T[st+ot+2]=o.z,T[st+ot+3]=0),y===!0&&(o.fromBufferAttribute(W,et),T[st+ot+4]=o.x,T[st+ot+5]=o.y,T[st+ot+6]=o.z,T[st+ot+7]=0),_===!0&&(o.fromBufferAttribute(Z,et),T[st+ot+8]=o.x,T[st+ot+9]=o.y,T[st+ot+10]=o.z,T[st+ot+11]=Z.itemSize===4?o.w:1)}}m={count:g,texture:U,size:new Qt(z,V)},s.set(c,m),c.addEventListener("dispose",N)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",u.morphTexture,e);else{let h=0;for(let _=0;_<p.length;_++)h+=p[_];const y=c.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",p)}f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,e),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const v=p===void 0?0:p.length;let g=i[c.id];if(g===void 0||g.length!==v){g=[];for(let S=0;S<v;S++)g[S]=[S,0];i[c.id]=g}for(let S=0;S<v;S++){const E=g[S];E[0]=S,E[1]=p[S]}g.sort(Ky);for(let S=0;S<8;S++)S<v&&g[S][1]?(a[S][0]=g[S][0],a[S][1]=g[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Zy);const m=c.morphAttributes.position,h=c.morphAttributes.normal;let y=0;for(let S=0;S<8;S++){const E=a[S],L=E[0],C=E[1];L!==Number.MAX_SAFE_INTEGER&&C?(m&&c.getAttribute("morphTarget"+S)!==m[L]&&c.setAttribute("morphTarget"+S,m[L]),h&&c.getAttribute("morphNormal"+S)!==h[L]&&c.setAttribute("morphNormal"+S,h[L]),r[S]=C,y+=C):(m&&c.hasAttribute("morphTarget"+S)===!0&&c.deleteAttribute("morphTarget"+S),h&&c.hasAttribute("morphNormal"+S)===!0&&c.deleteAttribute("morphNormal"+S),r[S]=0)}const _=c.morphTargetsRelative?1:1-y;f.getUniforms().setValue(n,"morphTargetBaseInfluence",_),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Qy(n,t,e,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=t.get(l,c);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:o}}class xd extends qe{constructor(t,e,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Qi,c!==Qi&&c!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Qi&&(i=Mi),i===void 0&&c===Br&&(i=Ji),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ve,this.minFilter=l!==void 0?l:Ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const yd=new qe,Md=new xd(1,1);Md.compareFunction=id;const Sd=new od,bd=new Uv,Ed=new md,rf=[],sf=[],af=new Float32Array(16),of=new Float32Array(9),lf=new Float32Array(4);function Hr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=rf[r];if(s===void 0&&(s=new Float32Array(r),rf[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Te(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ae(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Xa(n,t){let e=sf[t];e===void 0&&(e=new Int32Array(t),sf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function tM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function eM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2fv(this.addr,t),Ae(e,t)}}function nM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;n.uniform3fv(this.addr,t),Ae(e,t)}}function iM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4fv(this.addr,t),Ae(e,t)}}function rM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,i))return;lf.set(i),n.uniformMatrix2fv(this.addr,!1,lf),Ae(e,i)}}function sM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,i))return;of.set(i),n.uniformMatrix3fv(this.addr,!1,of),Ae(e,i)}}function aM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,i))return;af.set(i),n.uniformMatrix4fv(this.addr,!1,af),Ae(e,i)}}function oM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function lM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2iv(this.addr,t),Ae(e,t)}}function cM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;n.uniform3iv(this.addr,t),Ae(e,t)}}function uM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4iv(this.addr,t),Ae(e,t)}}function fM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function hM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2uiv(this.addr,t),Ae(e,t)}}function dM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;n.uniform3uiv(this.addr,t),Ae(e,t)}}function pM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4uiv(this.addr,t),Ae(e,t)}}function mM(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Md:yd;e.setTexture2D(t||s,r)}function gM(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||bd,r)}function _M(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Ed,r)}function vM(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Sd,r)}function xM(n){switch(n){case 5126:return tM;case 35664:return eM;case 35665:return nM;case 35666:return iM;case 35674:return rM;case 35675:return sM;case 35676:return aM;case 5124:case 35670:return oM;case 35667:case 35671:return lM;case 35668:case 35672:return cM;case 35669:case 35673:return uM;case 5125:return fM;case 36294:return hM;case 36295:return dM;case 36296:return pM;case 35678:case 36198:case 36298:case 36306:case 35682:return mM;case 35679:case 36299:case 36307:return gM;case 35680:case 36300:case 36308:case 36293:return _M;case 36289:case 36303:case 36311:case 36292:return vM}}function yM(n,t){n.uniform1fv(this.addr,t)}function MM(n,t){const e=Hr(t,this.size,2);n.uniform2fv(this.addr,e)}function SM(n,t){const e=Hr(t,this.size,3);n.uniform3fv(this.addr,e)}function bM(n,t){const e=Hr(t,this.size,4);n.uniform4fv(this.addr,e)}function EM(n,t){const e=Hr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function wM(n,t){const e=Hr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function TM(n,t){const e=Hr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function AM(n,t){n.uniform1iv(this.addr,t)}function CM(n,t){n.uniform2iv(this.addr,t)}function RM(n,t){n.uniform3iv(this.addr,t)}function PM(n,t){n.uniform4iv(this.addr,t)}function IM(n,t){n.uniform1uiv(this.addr,t)}function LM(n,t){n.uniform2uiv(this.addr,t)}function DM(n,t){n.uniform3uiv(this.addr,t)}function UM(n,t){n.uniform4uiv(this.addr,t)}function NM(n,t,e){const i=this.cache,r=t.length,s=Xa(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||yd,s[o])}function OM(n,t,e){const i=this.cache,r=t.length,s=Xa(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||bd,s[o])}function FM(n,t,e){const i=this.cache,r=t.length,s=Xa(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Ed,s[o])}function BM(n,t,e){const i=this.cache,r=t.length,s=Xa(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Sd,s[o])}function kM(n){switch(n){case 5126:return yM;case 35664:return MM;case 35665:return SM;case 35666:return bM;case 35674:return EM;case 35675:return wM;case 35676:return TM;case 5124:case 35670:return AM;case 35667:case 35671:return CM;case 35668:case 35672:return RM;case 35669:case 35673:return PM;case 5125:return IM;case 36294:return LM;case 36295:return DM;case 36296:return UM;case 35678:case 36198:case 36298:case 36306:case 35682:return NM;case 35679:case 36299:case 36307:return OM;case 35680:case 36300:case 36308:case 36293:return FM;case 36289:case 36303:case 36311:case 36292:return BM}}class zM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=xM(e.type)}}class HM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kM(e.type)}}class GM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Wo=/(\w+)(\])?(\[|\.)?/g;function cf(n,t){n.seq.push(t),n.map[t.id]=t}function VM(n,t,e){const i=n.name,r=i.length;for(Wo.lastIndex=0;;){const s=Wo.exec(i),o=Wo.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){cf(e,u===void 0?new zM(a,n,t):new HM(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new GM(a),cf(e,f)),e=f}}}class ca{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);VM(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function uf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const WM=37297;let XM=0;function $M(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function qM(n){const t=re.getPrimaries(re.workingColorSpace),e=re.getPrimaries(n);let i;switch(t===e?i="":t===ba&&e===Sa?i="LinearDisplayP3ToLinearSRGB":t===Sa&&e===ba&&(i="LinearSRGBToLinearDisplayP3"),n){case Ci:case Va:return[i,"LinearTransferOETF"];case Rn:case zl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ff(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+$M(n.getShaderSource(t),o)}else return r}function jM(n,t){const e=qM(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function YM(n,t){let e;switch(t){case ev:e="Linear";break;case nv:e="Reinhard";break;case iv:e="OptimizedCineon";break;case rv:e="ACESFilmic";break;case av:e="AgX";break;case ov:e="Neutral";break;case sv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function ZM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wr).join(`
`)}function KM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function JM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function QM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function wr(n){return n!==""}function hf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function df(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tS=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(n){return n.replace(tS,nS)}const eS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function nS(n,t){let e=$t[t];if(e===void 0){const i=eS.get(t);if(i!==void 0)e=$t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return _l(e)}const iS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pf(n){return n.replace(iS,rS)}function rS(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function mf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function sS(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===qh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===R_?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function aS(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Or:case Fr:t="ENVMAP_TYPE_CUBE";break;case Ga:t="ENVMAP_TYPE_CUBE_UV";break}return t}function oS(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Fr:t="ENVMAP_MODE_REFRACTION";break}return t}function lS(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jh:t="ENVMAP_BLENDING_MULTIPLY";break;case Q_:t="ENVMAP_BLENDING_MIX";break;case tv:t="ENVMAP_BLENDING_ADD";break}return t}function cS(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function uS(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=sS(e),u=aS(e),c=oS(e),f=lS(e),p=cS(e),d=e.isWebGL2?"":ZM(e),v=KM(e),g=JM(s),m=r.createProgram();let h,y,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wr).join(`
`),h.length>0&&(h+=`
`),y=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wr).join(`
`),y.length>0&&(y+=`
`)):(h=[mf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),y=[d,mf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bi?"#define TONE_MAPPING":"",e.toneMapping!==bi?$t.tonemapping_pars_fragment:"",e.toneMapping!==bi?YM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,jM("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wr).join(`
`)),o=_l(o),o=hf(o,e),o=df(o,e),a=_l(a),a=hf(a,e),a=df(a,e),o=pf(o),a=pf(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const S=_+h+o,E=_+y+a,L=uf(r,r.VERTEX_SHADER,S),C=uf(r,r.FRAGMENT_SHADER,E);r.attachShader(m,L),r.attachShader(m,C),e.index0AttributeName!==void 0?r.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function z(P){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(m).trim(),M=r.getShaderInfoLog(L).trim(),Y=r.getShaderInfoLog(C).trim();let W=!0,Z=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,L,C);else{const st=ff(r,L,"vertex"),et=ff(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+st+`
`+et)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(M===""||Y==="")&&(Z=!1);Z&&(P.diagnostics={runnable:W,programLog:N,vertexShader:{log:M,prefix:h},fragmentShader:{log:Y,prefix:y}})}r.deleteShader(L),r.deleteShader(C),V=new ca(r,m),T=QM(r,m)}let V;this.getUniforms=function(){return V===void 0&&z(this),V};let T;this.getAttributes=function(){return T===void 0&&z(this),T};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(m,WM)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=XM++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=L,this.fragmentShader=C,this}let fS=0;class hS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new dS(t),e.set(t,i)),i}}class dS{constructor(t){this.id=fS++,this.code=t,this.usedTimes=0}}function pS(n,t,e,i,r,s,o){const a=new ld,l=new hS,u=new Set,c=[],f=r.isWebGL2,p=r.logarithmicDepthBuffer,d=r.vertexTextures;let v=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(T){return u.add(T),T===0?"uv":`uv${T}`}function h(T,U,P,N,M){const Y=N.fog,W=M.geometry,Z=T.isMeshStandardMaterial?N.environment:null,st=(T.isMeshStandardMaterial?e:t).get(T.envMap||Z),et=st&&st.mapping===Ga?st.image.height:null,ot=g[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const F=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,O=F!==void 0?F.length:0;let ct=0;W.morphAttributes.position!==void 0&&(ct=1),W.morphAttributes.normal!==void 0&&(ct=2),W.morphAttributes.color!==void 0&&(ct=3);let Q,D,K,H;if(ot){const ce=Ln[ot];Q=ce.vertexShader,D=ce.fragmentShader}else Q=T.vertexShader,D=T.fragmentShader,l.update(T),K=l.getVertexShaderID(T),H=l.getFragmentShaderID(T);const nt=n.getRenderTarget(),rt=M.isInstancedMesh===!0,ft=M.isBatchedMesh===!0,ht=!!T.map,w=!!T.matcap,X=!!st,x=!!T.aoMap,G=!!T.lightMap,B=!!T.bumpMap,R=!!T.normalMap,I=!!T.displacementMap,k=!!T.emissiveMap,J=!!T.metalnessMap,A=!!T.roughnessMap,b=T.anisotropy>0,q=T.clearcoat>0,tt=T.iridescence>0,it=T.sheen>0,lt=T.transmission>0,St=b&&!!T.anisotropyMap,xt=q&&!!T.clearcoatMap,vt=q&&!!T.clearcoatNormalMap,Mt=q&&!!T.clearcoatRoughnessMap,Lt=tt&&!!T.iridescenceMap,yt=tt&&!!T.iridescenceThicknessMap,Ft=it&&!!T.sheenColorMap,kt=it&&!!T.sheenRoughnessMap,Ct=!!T.specularMap,Tt=!!T.specularColorMap,Dt=!!T.specularIntensityMap,jt=lt&&!!T.transmissionMap,Gt=lt&&!!T.thicknessMap,le=!!T.gradientMap,at=!!T.alphaMap,Et=T.alphaTest>0,dt=!!T.alphaHash,bt=!!T.extensions;let At=bi;T.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(At=n.toneMapping);const Kt={isWebGL2:f,shaderID:ot,shaderType:T.type,shaderName:T.name,vertexShader:Q,fragmentShader:D,defines:T.defines,customVertexShaderID:K,customFragmentShaderID:H,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:ft,instancing:rt,instancingColor:rt&&M.instanceColor!==null,instancingMorph:rt&&M.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:nt===null?n.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Ci,alphaToCoverage:!!T.alphaToCoverage,map:ht,matcap:w,envMap:X,envMapMode:X&&st.mapping,envMapCubeUVHeight:et,aoMap:x,lightMap:G,bumpMap:B,normalMap:R,displacementMap:d&&I,emissiveMap:k,normalMapObjectSpace:R&&T.normalMapType===xv,normalMapTangentSpace:R&&T.normalMapType===vv,metalnessMap:J,roughnessMap:A,anisotropy:b,anisotropyMap:St,clearcoat:q,clearcoatMap:xt,clearcoatNormalMap:vt,clearcoatRoughnessMap:Mt,iridescence:tt,iridescenceMap:Lt,iridescenceThicknessMap:yt,sheen:it,sheenColorMap:Ft,sheenRoughnessMap:kt,specularMap:Ct,specularColorMap:Tt,specularIntensityMap:Dt,transmission:lt,transmissionMap:jt,thicknessMap:Gt,gradientMap:le,opaque:T.transparent===!1&&T.blending===Ir&&T.alphaToCoverage===!1,alphaMap:at,alphaTest:Et,alphaHash:dt,combine:T.combine,mapUv:ht&&m(T.map.channel),aoMapUv:x&&m(T.aoMap.channel),lightMapUv:G&&m(T.lightMap.channel),bumpMapUv:B&&m(T.bumpMap.channel),normalMapUv:R&&m(T.normalMap.channel),displacementMapUv:I&&m(T.displacementMap.channel),emissiveMapUv:k&&m(T.emissiveMap.channel),metalnessMapUv:J&&m(T.metalnessMap.channel),roughnessMapUv:A&&m(T.roughnessMap.channel),anisotropyMapUv:St&&m(T.anisotropyMap.channel),clearcoatMapUv:xt&&m(T.clearcoatMap.channel),clearcoatNormalMapUv:vt&&m(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&m(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&m(T.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&m(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&m(T.sheenColorMap.channel),sheenRoughnessMapUv:kt&&m(T.sheenRoughnessMap.channel),specularMapUv:Ct&&m(T.specularMap.channel),specularColorMapUv:Tt&&m(T.specularColorMap.channel),specularIntensityMapUv:Dt&&m(T.specularIntensityMap.channel),transmissionMapUv:jt&&m(T.transmissionMap.channel),thicknessMapUv:Gt&&m(T.thicknessMap.channel),alphaMapUv:at&&m(T.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(R||b),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:M.isPoints===!0&&!!W.attributes.uv&&(ht||at),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:M.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ct,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:At,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ht&&T.map.isVideoTexture===!0&&re.getTransfer(T.map.colorSpace)===he,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ti,flipSided:T.side===Qe,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:bt&&T.extensions.derivatives===!0,extensionFragDepth:bt&&T.extensions.fragDepth===!0,extensionDrawBuffers:bt&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:bt&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:bt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:bt&&T.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Kt.vertexUv1s=u.has(1),Kt.vertexUv2s=u.has(2),Kt.vertexUv3s=u.has(3),u.clear(),Kt}function y(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)U.push(P),U.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(_(U,T),S(U,T),U.push(n.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function _(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function S(T,U){a.disableAll(),U.isWebGL2&&a.enable(0),U.supportsVertexTextures&&a.enable(1),U.instancing&&a.enable(2),U.instancingColor&&a.enable(3),U.instancingMorph&&a.enable(4),U.matcap&&a.enable(5),U.envMap&&a.enable(6),U.normalMapObjectSpace&&a.enable(7),U.normalMapTangentSpace&&a.enable(8),U.clearcoat&&a.enable(9),U.iridescence&&a.enable(10),U.alphaTest&&a.enable(11),U.vertexColors&&a.enable(12),U.vertexAlphas&&a.enable(13),U.vertexUv1s&&a.enable(14),U.vertexUv2s&&a.enable(15),U.vertexUv3s&&a.enable(16),U.vertexTangents&&a.enable(17),U.anisotropy&&a.enable(18),U.alphaHash&&a.enable(19),U.batching&&a.enable(20),T.push(a.mask),a.disableAll(),U.fog&&a.enable(0),U.useFog&&a.enable(1),U.flatShading&&a.enable(2),U.logarithmicDepthBuffer&&a.enable(3),U.skinning&&a.enable(4),U.morphTargets&&a.enable(5),U.morphNormals&&a.enable(6),U.morphColors&&a.enable(7),U.premultipliedAlpha&&a.enable(8),U.shadowMapEnabled&&a.enable(9),U.useLegacyLights&&a.enable(10),U.doubleSided&&a.enable(11),U.flipSided&&a.enable(12),U.useDepthPacking&&a.enable(13),U.dithering&&a.enable(14),U.transmission&&a.enable(15),U.sheen&&a.enable(16),U.opaque&&a.enable(17),U.pointsUvs&&a.enable(18),U.decodeVideoTexture&&a.enable(19),U.alphaToCoverage&&a.enable(20),T.push(a.mask)}function E(T){const U=g[T.type];let P;if(U){const N=Ln[U];P=jv.clone(N.uniforms)}else P=T.uniforms;return P}function L(T,U){let P;for(let N=0,M=c.length;N<M;N++){const Y=c[N];if(Y.cacheKey===U){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new uS(n,U,T,s),c.push(P)),P}function C(T){if(--T.usedTimes===0){const U=c.indexOf(T);c[U]=c[c.length-1],c.pop(),T.destroy()}}function z(T){l.remove(T)}function V(){l.dispose()}return{getParameters:h,getProgramCacheKey:y,getUniforms:E,acquireProgram:L,releaseProgram:C,releaseShaderCache:z,programs:c,dispose:V}}function mS(){let n=new WeakMap;function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function e(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function gS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function gf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function _f(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,p,d,v,g,m){let h=n[t];return h===void 0?(h={id:f.id,object:f,geometry:p,material:d,groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},n[t]=h):(h.id=f.id,h.object=f,h.geometry=p,h.material=d,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=g,h.group=m),t++,h}function a(f,p,d,v,g,m){const h=o(f,p,d,v,g,m);d.transmission>0?i.push(h):d.transparent===!0?r.push(h):e.push(h)}function l(f,p,d,v,g,m){const h=o(f,p,d,v,g,m);d.transmission>0?i.unshift(h):d.transparent===!0?r.unshift(h):e.unshift(h)}function u(f,p){e.length>1&&e.sort(f||gS),i.length>1&&i.sort(p||gf),r.length>1&&r.sort(p||gf)}function c(){for(let f=t,p=n.length;f<p;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function _S(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new _f,n.set(i,[o])):r>=s.length?(o=new _f,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function vS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new gt,color:new se};break;case"SpotLight":e={position:new gt,direction:new gt,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new gt,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new gt,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new gt,halfWidth:new gt,halfHeight:new gt};break}return n[t.id]=e,e}}}function xS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let yS=0;function MS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function SS(n,t){const e=new vS,i=xS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new gt);const s=new gt,o=new Ee,a=new Ee;function l(c,f){let p=0,d=0,v=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let g=0,m=0,h=0,y=0,_=0,S=0,E=0,L=0,C=0,z=0,V=0;c.sort(MS);const T=f===!0?Math.PI:1;for(let P=0,N=c.length;P<N;P++){const M=c[P],Y=M.color,W=M.intensity,Z=M.distance,st=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)p+=Y.r*W*T,d+=Y.g*W*T,v+=Y.b*W*T;else if(M.isLightProbe){for(let et=0;et<9;et++)r.probe[et].addScaledVector(M.sh.coefficients[et],W);V++}else if(M.isDirectionalLight){const et=e.get(M);if(et.color.copy(M.color).multiplyScalar(M.intensity*T),M.castShadow){const ot=M.shadow,F=i.get(M);F.shadowBias=ot.bias,F.shadowNormalBias=ot.normalBias,F.shadowRadius=ot.radius,F.shadowMapSize=ot.mapSize,r.directionalShadow[g]=F,r.directionalShadowMap[g]=st,r.directionalShadowMatrix[g]=M.shadow.matrix,S++}r.directional[g]=et,g++}else if(M.isSpotLight){const et=e.get(M);et.position.setFromMatrixPosition(M.matrixWorld),et.color.copy(Y).multiplyScalar(W*T),et.distance=Z,et.coneCos=Math.cos(M.angle),et.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),et.decay=M.decay,r.spot[h]=et;const ot=M.shadow;if(M.map&&(r.spotLightMap[C]=M.map,C++,ot.updateMatrices(M),M.castShadow&&z++),r.spotLightMatrix[h]=ot.matrix,M.castShadow){const F=i.get(M);F.shadowBias=ot.bias,F.shadowNormalBias=ot.normalBias,F.shadowRadius=ot.radius,F.shadowMapSize=ot.mapSize,r.spotShadow[h]=F,r.spotShadowMap[h]=st,L++}h++}else if(M.isRectAreaLight){const et=e.get(M);et.color.copy(Y).multiplyScalar(W),et.halfWidth.set(M.width*.5,0,0),et.halfHeight.set(0,M.height*.5,0),r.rectArea[y]=et,y++}else if(M.isPointLight){const et=e.get(M);if(et.color.copy(M.color).multiplyScalar(M.intensity*T),et.distance=M.distance,et.decay=M.decay,M.castShadow){const ot=M.shadow,F=i.get(M);F.shadowBias=ot.bias,F.shadowNormalBias=ot.normalBias,F.shadowRadius=ot.radius,F.shadowMapSize=ot.mapSize,F.shadowCameraNear=ot.camera.near,F.shadowCameraFar=ot.camera.far,r.pointShadow[m]=F,r.pointShadowMap[m]=st,r.pointShadowMatrix[m]=M.shadow.matrix,E++}r.point[m]=et,m++}else if(M.isHemisphereLight){const et=e.get(M);et.skyColor.copy(M.color).multiplyScalar(W*T),et.groundColor.copy(M.groundColor).multiplyScalar(W*T),r.hemi[_]=et,_++}}y>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=wt.LTC_FLOAT_1,r.rectAreaLTC2=wt.LTC_FLOAT_2):(r.rectAreaLTC1=wt.LTC_HALF_1,r.rectAreaLTC2=wt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=wt.LTC_FLOAT_1,r.rectAreaLTC2=wt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=wt.LTC_HALF_1,r.rectAreaLTC2=wt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=d,r.ambient[2]=v;const U=r.hash;(U.directionalLength!==g||U.pointLength!==m||U.spotLength!==h||U.rectAreaLength!==y||U.hemiLength!==_||U.numDirectionalShadows!==S||U.numPointShadows!==E||U.numSpotShadows!==L||U.numSpotMaps!==C||U.numLightProbes!==V)&&(r.directional.length=g,r.spot.length=h,r.rectArea.length=y,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=L+C-z,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=V,U.directionalLength=g,U.pointLength=m,U.spotLength=h,U.rectAreaLength=y,U.hemiLength=_,U.numDirectionalShadows=S,U.numPointShadows=E,U.numSpotShadows=L,U.numSpotMaps=C,U.numLightProbes=V,r.version=yS++)}function u(c,f){let p=0,d=0,v=0,g=0,m=0;const h=f.matrixWorldInverse;for(let y=0,_=c.length;y<_;y++){const S=c[y];if(S.isDirectionalLight){const E=r.directional[p];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),p++}else if(S.isSpotLight){const E=r.spot[v];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),v++}else if(S.isRectAreaLight){const E=r.rectArea[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(h),a.identity(),o.copy(S.matrixWorld),o.premultiply(h),a.extractRotation(o),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const E=r.point[d];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(h),d++}else if(S.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(h),m++}}}return{setup:l,setupView:u,state:r}}function vf(n,t){const e=new SS(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){e.setup(i,f)}function u(f){e.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function bS(n,t){let e=new WeakMap;function i(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new vf(n,t),e.set(s,[l])):o>=a.length?(l=new vf(n,t),a.push(l)):l=a[o],l}function r(){e=new WeakMap}return{get:i,dispose:r}}class ES extends Wa{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wS extends Wa{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const TS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AS=`uniform sampler2D shadow_pass;
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
}`;function CS(n,t,e){let i=new gd;const r=new Qt,s=new Qt,o=new Le,a=new ES({depthPacking:_v}),l=new wS,u={},c=e.maxTextureSize,f={[Ti]:Qe,[Qe]:Ti,[ti]:ti},p=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:TS,fragmentShader:AS}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const v=new ir;v.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new On(v,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qh;let h=this.type;this.render=function(L,C,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const V=n.getRenderTarget(),T=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),P=n.state;P.setBlending(Si),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const N=h!==Yn&&this.type===Yn,M=h===Yn&&this.type!==Yn;for(let Y=0,W=L.length;Y<W;Y++){const Z=L[Y],st=Z.shadow;if(st===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(st.autoUpdate===!1&&st.needsUpdate===!1)continue;r.copy(st.mapSize);const et=st.getFrameExtents();if(r.multiply(et),s.copy(st.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/et.x),r.x=s.x*et.x,st.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/et.y),r.y=s.y*et.y,st.mapSize.y=s.y)),st.map===null||N===!0||M===!0){const F=this.type!==Yn?{minFilter:Ve,magFilter:Ve}:{};st.map!==null&&st.map.dispose(),st.map=new er(r.x,r.y,F),st.map.texture.name=Z.name+".shadowMap",st.camera.updateProjectionMatrix()}n.setRenderTarget(st.map),n.clear();const ot=st.getViewportCount();for(let F=0;F<ot;F++){const O=st.getViewport(F);o.set(s.x*O.x,s.y*O.y,s.x*O.z,s.y*O.w),P.viewport(o),st.updateMatrices(Z,F),i=st.getFrustum(),S(C,z,st.camera,Z,this.type)}st.isPointLightShadow!==!0&&this.type===Yn&&y(st,z),st.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(V,T,U)};function y(L,C){const z=t.update(g);p.defines.VSM_SAMPLES!==L.blurSamples&&(p.defines.VSM_SAMPLES=L.blurSamples,d.defines.VSM_SAMPLES=L.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new er(r.x,r.y)),p.uniforms.shadow_pass.value=L.map.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(C,null,z,p,g,null),d.uniforms.shadow_pass.value=L.mapPass.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(C,null,z,d,g,null)}function _(L,C,z,V){let T=null;const U=z.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(U!==void 0)T=U;else if(T=z.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const P=T.uuid,N=C.uuid;let M=u[P];M===void 0&&(M={},u[P]=M);let Y=M[N];Y===void 0&&(Y=T.clone(),M[N]=Y,C.addEventListener("dispose",E)),T=Y}if(T.visible=C.visible,T.wireframe=C.wireframe,V===Yn?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:f[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,z.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const P=n.properties.get(T);P.light=z}return T}function S(L,C,z,V,T){if(L.visible===!1)return;if(L.layers.test(C.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&T===Yn)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,L.matrixWorld);const N=t.update(L),M=L.material;if(Array.isArray(M)){const Y=N.groups;for(let W=0,Z=Y.length;W<Z;W++){const st=Y[W],et=M[st.materialIndex];if(et&&et.visible){const ot=_(L,et,V,T);L.onBeforeShadow(n,L,C,z,N,ot,st),n.renderBufferDirect(z,null,N,ot,L,st),L.onAfterShadow(n,L,C,z,N,ot,st)}}}else if(M.visible){const Y=_(L,M,V,T);L.onBeforeShadow(n,L,C,z,N,Y,null),n.renderBufferDirect(z,null,N,Y,L,null),L.onAfterShadow(n,L,C,z,N,Y,null)}}const P=L.children;for(let N=0,M=P.length;N<M;N++)S(P[N],C,z,V,T)}function E(L){L.target.removeEventListener("dispose",E);for(const z in u){const V=u[z],T=L.target.uuid;T in V&&(V[T].dispose(),delete V[T])}}}function RS(n,t,e){const i=e.isWebGL2;function r(){let at=!1;const Et=new Le;let dt=null;const bt=new Le(0,0,0,0);return{setMask:function(At){dt!==At&&!at&&(n.colorMask(At,At,At,At),dt=At)},setLocked:function(At){at=At},setClear:function(At,Kt,ce,Pe,on){on===!0&&(At*=Pe,Kt*=Pe,ce*=Pe),Et.set(At,Kt,ce,Pe),bt.equals(Et)===!1&&(n.clearColor(At,Kt,ce,Pe),bt.copy(Et))},reset:function(){at=!1,dt=null,bt.set(-1,0,0,0)}}}function s(){let at=!1,Et=null,dt=null,bt=null;return{setTest:function(At){At?rt(n.DEPTH_TEST):ft(n.DEPTH_TEST)},setMask:function(At){Et!==At&&!at&&(n.depthMask(At),Et=At)},setFunc:function(At){if(dt!==At){switch(At){case $_:n.depthFunc(n.NEVER);break;case q_:n.depthFunc(n.ALWAYS);break;case j_:n.depthFunc(n.LESS);break;case ya:n.depthFunc(n.LEQUAL);break;case Y_:n.depthFunc(n.EQUAL);break;case Z_:n.depthFunc(n.GEQUAL);break;case K_:n.depthFunc(n.GREATER);break;case J_:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}dt=At}},setLocked:function(At){at=At},setClear:function(At){bt!==At&&(n.clearDepth(At),bt=At)},reset:function(){at=!1,Et=null,dt=null,bt=null}}}function o(){let at=!1,Et=null,dt=null,bt=null,At=null,Kt=null,ce=null,Pe=null,on=null;return{setTest:function(ue){at||(ue?rt(n.STENCIL_TEST):ft(n.STENCIL_TEST))},setMask:function(ue){Et!==ue&&!at&&(n.stencilMask(ue),Et=ue)},setFunc:function(ue,ke,wn){(dt!==ue||bt!==ke||At!==wn)&&(n.stencilFunc(ue,ke,wn),dt=ue,bt=ke,At=wn)},setOp:function(ue,ke,wn){(Kt!==ue||ce!==ke||Pe!==wn)&&(n.stencilOp(ue,ke,wn),Kt=ue,ce=ke,Pe=wn)},setLocked:function(ue){at=ue},setClear:function(ue){on!==ue&&(n.clearStencil(ue),on=ue)},reset:function(){at=!1,Et=null,dt=null,bt=null,At=null,Kt=null,ce=null,Pe=null,on=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let p={},d={},v=new WeakMap,g=[],m=null,h=!1,y=null,_=null,S=null,E=null,L=null,C=null,z=null,V=new se(0,0,0),T=0,U=!1,P=null,N=null,M=null,Y=null,W=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let st=!1,et=0;const ot=n.getParameter(n.VERSION);ot.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(ot)[1]),st=et>=1):ot.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),st=et>=2);let F=null,O={};const ct=n.getParameter(n.SCISSOR_BOX),Q=n.getParameter(n.VIEWPORT),D=new Le().fromArray(ct),K=new Le().fromArray(Q);function H(at,Et,dt,bt){const At=new Uint8Array(4),Kt=n.createTexture();n.bindTexture(at,Kt),n.texParameteri(at,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(at,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ce=0;ce<dt;ce++)i&&(at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY)?n.texImage3D(Et,0,n.RGBA,1,1,bt,0,n.RGBA,n.UNSIGNED_BYTE,At):n.texImage2D(Et+ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,At);return Kt}const nt={};nt[n.TEXTURE_2D]=H(n.TEXTURE_2D,n.TEXTURE_2D,1),nt[n.TEXTURE_CUBE_MAP]=H(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(nt[n.TEXTURE_2D_ARRAY]=H(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),nt[n.TEXTURE_3D]=H(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),rt(n.DEPTH_TEST),l.setFunc(ya),I(!1),k(Zc),rt(n.CULL_FACE),B(Si);function rt(at){p[at]!==!0&&(n.enable(at),p[at]=!0)}function ft(at){p[at]!==!1&&(n.disable(at),p[at]=!1)}function ht(at,Et){return d[at]!==Et?(n.bindFramebuffer(at,Et),d[at]=Et,i&&(at===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Et),at===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Et)),!0):!1}function w(at,Et){let dt=g,bt=!1;if(at){dt=v.get(Et),dt===void 0&&(dt=[],v.set(Et,dt));const At=at.textures;if(dt.length!==At.length||dt[0]!==n.COLOR_ATTACHMENT0){for(let Kt=0,ce=At.length;Kt<ce;Kt++)dt[Kt]=n.COLOR_ATTACHMENT0+Kt;dt.length=At.length,bt=!0}}else dt[0]!==n.BACK&&(dt[0]=n.BACK,bt=!0);if(bt)if(e.isWebGL2)n.drawBuffers(dt);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function X(at){return m!==at?(n.useProgram(at),m=at,!0):!1}const x={[Xi]:n.FUNC_ADD,[I_]:n.FUNC_SUBTRACT,[L_]:n.FUNC_REVERSE_SUBTRACT};if(i)x[tu]=n.MIN,x[eu]=n.MAX;else{const at=t.get("EXT_blend_minmax");at!==null&&(x[tu]=at.MIN_EXT,x[eu]=at.MAX_EXT)}const G={[D_]:n.ZERO,[U_]:n.ONE,[N_]:n.SRC_COLOR,[ll]:n.SRC_ALPHA,[H_]:n.SRC_ALPHA_SATURATE,[k_]:n.DST_COLOR,[F_]:n.DST_ALPHA,[O_]:n.ONE_MINUS_SRC_COLOR,[cl]:n.ONE_MINUS_SRC_ALPHA,[z_]:n.ONE_MINUS_DST_COLOR,[B_]:n.ONE_MINUS_DST_ALPHA,[G_]:n.CONSTANT_COLOR,[V_]:n.ONE_MINUS_CONSTANT_COLOR,[W_]:n.CONSTANT_ALPHA,[X_]:n.ONE_MINUS_CONSTANT_ALPHA};function B(at,Et,dt,bt,At,Kt,ce,Pe,on,ue){if(at===Si){h===!0&&(ft(n.BLEND),h=!1);return}if(h===!1&&(rt(n.BLEND),h=!0),at!==P_){if(at!==y||ue!==U){if((_!==Xi||L!==Xi)&&(n.blendEquation(n.FUNC_ADD),_=Xi,L=Xi),ue)switch(at){case Ir:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kc:n.blendFunc(n.ONE,n.ONE);break;case Jc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",at);break}else switch(at){case Ir:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Jc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",at);break}S=null,E=null,C=null,z=null,V.set(0,0,0),T=0,y=at,U=ue}return}At=At||Et,Kt=Kt||dt,ce=ce||bt,(Et!==_||At!==L)&&(n.blendEquationSeparate(x[Et],x[At]),_=Et,L=At),(dt!==S||bt!==E||Kt!==C||ce!==z)&&(n.blendFuncSeparate(G[dt],G[bt],G[Kt],G[ce]),S=dt,E=bt,C=Kt,z=ce),(Pe.equals(V)===!1||on!==T)&&(n.blendColor(Pe.r,Pe.g,Pe.b,on),V.copy(Pe),T=on),y=at,U=!1}function R(at,Et){at.side===ti?ft(n.CULL_FACE):rt(n.CULL_FACE);let dt=at.side===Qe;Et&&(dt=!dt),I(dt),at.blending===Ir&&at.transparent===!1?B(Si):B(at.blending,at.blendEquation,at.blendSrc,at.blendDst,at.blendEquationAlpha,at.blendSrcAlpha,at.blendDstAlpha,at.blendColor,at.blendAlpha,at.premultipliedAlpha),l.setFunc(at.depthFunc),l.setTest(at.depthTest),l.setMask(at.depthWrite),a.setMask(at.colorWrite);const bt=at.stencilWrite;u.setTest(bt),bt&&(u.setMask(at.stencilWriteMask),u.setFunc(at.stencilFunc,at.stencilRef,at.stencilFuncMask),u.setOp(at.stencilFail,at.stencilZFail,at.stencilZPass)),A(at.polygonOffset,at.polygonOffsetFactor,at.polygonOffsetUnits),at.alphaToCoverage===!0?rt(n.SAMPLE_ALPHA_TO_COVERAGE):ft(n.SAMPLE_ALPHA_TO_COVERAGE)}function I(at){P!==at&&(at?n.frontFace(n.CW):n.frontFace(n.CCW),P=at)}function k(at){at!==A_?(rt(n.CULL_FACE),at!==N&&(at===Zc?n.cullFace(n.BACK):at===C_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ft(n.CULL_FACE),N=at}function J(at){at!==M&&(st&&n.lineWidth(at),M=at)}function A(at,Et,dt){at?(rt(n.POLYGON_OFFSET_FILL),(Y!==Et||W!==dt)&&(n.polygonOffset(Et,dt),Y=Et,W=dt)):ft(n.POLYGON_OFFSET_FILL)}function b(at){at?rt(n.SCISSOR_TEST):ft(n.SCISSOR_TEST)}function q(at){at===void 0&&(at=n.TEXTURE0+Z-1),F!==at&&(n.activeTexture(at),F=at)}function tt(at,Et,dt){dt===void 0&&(F===null?dt=n.TEXTURE0+Z-1:dt=F);let bt=O[dt];bt===void 0&&(bt={type:void 0,texture:void 0},O[dt]=bt),(bt.type!==at||bt.texture!==Et)&&(F!==dt&&(n.activeTexture(dt),F=dt),n.bindTexture(at,Et||nt[at]),bt.type=at,bt.texture=Et)}function it(){const at=O[F];at!==void 0&&at.type!==void 0&&(n.bindTexture(at.type,null),at.type=void 0,at.texture=void 0)}function lt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function St(){try{n.compressedTexImage3D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function xt(){try{n.texSubImage2D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function vt(){try{n.texSubImage3D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Mt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Lt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function yt(){try{n.texStorage2D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Ft(){try{n.texStorage3D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function kt(){try{n.texImage2D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Ct(){try{n.texImage3D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Tt(at){D.equals(at)===!1&&(n.scissor(at.x,at.y,at.z,at.w),D.copy(at))}function Dt(at){K.equals(at)===!1&&(n.viewport(at.x,at.y,at.z,at.w),K.copy(at))}function jt(at,Et){let dt=f.get(Et);dt===void 0&&(dt=new WeakMap,f.set(Et,dt));let bt=dt.get(at);bt===void 0&&(bt=n.getUniformBlockIndex(Et,at.name),dt.set(at,bt))}function Gt(at,Et){const bt=f.get(Et).get(at);c.get(Et)!==bt&&(n.uniformBlockBinding(Et,bt,at.__bindingPointIndex),c.set(Et,bt))}function le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},F=null,O={},d={},v=new WeakMap,g=[],m=null,h=!1,y=null,_=null,S=null,E=null,L=null,C=null,z=null,V=new se(0,0,0),T=0,U=!1,P=null,N=null,M=null,Y=null,W=null,D.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:rt,disable:ft,bindFramebuffer:ht,drawBuffers:w,useProgram:X,setBlending:B,setMaterial:R,setFlipSided:I,setCullFace:k,setLineWidth:J,setPolygonOffset:A,setScissorTest:b,activeTexture:q,bindTexture:tt,unbindTexture:it,compressedTexImage2D:lt,compressedTexImage3D:St,texImage2D:kt,texImage3D:Ct,updateUBOMapping:jt,uniformBlockBinding:Gt,texStorage2D:yt,texStorage3D:Ft,texSubImage2D:xt,texSubImage3D:vt,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Lt,scissor:Tt,viewport:Dt,reset:le}}function PS(n,t,e,i,r,s,o){const a=r.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qt,f=new WeakMap;let p;const d=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return v?new OffscreenCanvas(A,b):wa("canvas")}function m(A,b,q,tt){let it=1;const lt=J(A);if((lt.width>tt||lt.height>tt)&&(it=tt/Math.max(lt.width,lt.height)),it<1||b===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const St=b?gl:Math.floor,xt=St(it*lt.width),vt=St(it*lt.height);p===void 0&&(p=g(xt,vt));const Mt=q?g(xt,vt):p;return Mt.width=xt,Mt.height=vt,Mt.getContext("2d").drawImage(A,0,0,xt,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+xt+"x"+vt+")."),Mt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),A;return A}function h(A){const b=J(A);return Iu(b.width)&&Iu(b.height)}function y(A){return a?!1:A.wrapS!==_n||A.wrapT!==_n||A.minFilter!==Ve&&A.minFilter!==Ze}function _(A,b){return A.generateMipmaps&&b&&A.minFilter!==Ve&&A.minFilter!==Ze}function S(A){n.generateMipmap(A)}function E(A,b,q,tt,it=!1){if(a===!1)return b;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let lt=b;if(b===n.RED&&(q===n.FLOAT&&(lt=n.R32F),q===n.HALF_FLOAT&&(lt=n.R16F),q===n.UNSIGNED_BYTE&&(lt=n.R8)),b===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(lt=n.R8UI),q===n.UNSIGNED_SHORT&&(lt=n.R16UI),q===n.UNSIGNED_INT&&(lt=n.R32UI),q===n.BYTE&&(lt=n.R8I),q===n.SHORT&&(lt=n.R16I),q===n.INT&&(lt=n.R32I)),b===n.RG&&(q===n.FLOAT&&(lt=n.RG32F),q===n.HALF_FLOAT&&(lt=n.RG16F),q===n.UNSIGNED_BYTE&&(lt=n.RG8)),b===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(lt=n.RG8UI),q===n.UNSIGNED_SHORT&&(lt=n.RG16UI),q===n.UNSIGNED_INT&&(lt=n.RG32UI),q===n.BYTE&&(lt=n.RG8I),q===n.SHORT&&(lt=n.RG16I),q===n.INT&&(lt=n.RG32I)),b===n.RGBA){const St=it?Ma:re.getTransfer(tt);q===n.FLOAT&&(lt=n.RGBA32F),q===n.HALF_FLOAT&&(lt=n.RGBA16F),q===n.UNSIGNED_BYTE&&(lt=St===he?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(lt=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(lt=n.RGB5_A1)}return(lt===n.R16F||lt===n.R32F||lt===n.RG16F||lt===n.RG32F||lt===n.RGBA16F||lt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function L(A,b,q){return _(A,q)===!0||A.isFramebufferTexture&&A.minFilter!==Ve&&A.minFilter!==Ze?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function C(A){return A===Ve||A===nu||A===jr?n.NEAREST:n.LINEAR}function z(A){const b=A.target;b.removeEventListener("dispose",z),T(b),b.isVideoTexture&&f.delete(b)}function V(A){const b=A.target;b.removeEventListener("dispose",V),P(b)}function T(A){const b=i.get(A);if(b.__webglInit===void 0)return;const q=A.source,tt=d.get(q);if(tt){const it=tt[b.__cacheKey];it.usedTimes--,it.usedTimes===0&&U(A),Object.keys(tt).length===0&&d.delete(q)}i.remove(A)}function U(A){const b=i.get(A);n.deleteTexture(b.__webglTexture);const q=A.source,tt=d.get(q);delete tt[b.__cacheKey],o.memory.textures--}function P(A){const b=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(b.__webglFramebuffer[tt]))for(let it=0;it<b.__webglFramebuffer[tt].length;it++)n.deleteFramebuffer(b.__webglFramebuffer[tt][it]);else n.deleteFramebuffer(b.__webglFramebuffer[tt]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[tt])}else{if(Array.isArray(b.__webglFramebuffer))for(let tt=0;tt<b.__webglFramebuffer.length;tt++)n.deleteFramebuffer(b.__webglFramebuffer[tt]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let tt=0;tt<b.__webglColorRenderbuffer.length;tt++)b.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[tt]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const q=A.textures;for(let tt=0,it=q.length;tt<it;tt++){const lt=i.get(q[tt]);lt.__webglTexture&&(n.deleteTexture(lt.__webglTexture),o.memory.textures--),i.remove(q[tt])}i.remove(A)}let N=0;function M(){N=0}function Y(){const A=N;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),N+=1,A}function W(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function Z(A,b){const q=i.get(A);if(A.isVideoTexture&&I(A),A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){const tt=A.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(q,A,b);return}}e.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+b)}function st(A,b){const q=i.get(A);if(A.version>0&&q.__version!==A.version){K(q,A,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+b)}function et(A,b){const q=i.get(A);if(A.version>0&&q.__version!==A.version){K(q,A,b);return}e.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+b)}function ot(A,b){const q=i.get(A);if(A.version>0&&q.__version!==A.version){H(q,A,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+b)}const F={[hl]:n.REPEAT,[_n]:n.CLAMP_TO_EDGE,[dl]:n.MIRRORED_REPEAT},O={[Ve]:n.NEAREST,[nu]:n.NEAREST_MIPMAP_NEAREST,[jr]:n.NEAREST_MIPMAP_LINEAR,[Ze]:n.LINEAR,[ho]:n.LINEAR_MIPMAP_NEAREST,[ji]:n.LINEAR_MIPMAP_LINEAR},ct={[yv]:n.NEVER,[Tv]:n.ALWAYS,[Mv]:n.LESS,[id]:n.LEQUAL,[Sv]:n.EQUAL,[wv]:n.GEQUAL,[bv]:n.GREATER,[Ev]:n.NOTEQUAL};function Q(A,b,q){if(b.type===ei&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ze||b.magFilter===ho||b.magFilter===jr||b.magFilter===ji||b.minFilter===Ze||b.minFilter===ho||b.minFilter===jr||b.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),q?(n.texParameteri(A,n.TEXTURE_WRAP_S,F[b.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,F[b.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,F[b.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,O[b.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,O[b.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==_n||b.wrapT!==_n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,C(b.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,C(b.minFilter)),b.minFilter!==Ve&&b.minFilter!==Ze&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ct[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ve||b.minFilter!==jr&&b.minFilter!==ji||b.type===ei&&t.has("OES_texture_float_linear")===!1||a===!1&&b.type===ys&&t.has("OES_texture_half_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function D(A,b){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",z));const tt=b.source;let it=d.get(tt);it===void 0&&(it={},d.set(tt,it));const lt=W(b);if(lt!==A.__cacheKey){it[lt]===void 0&&(it[lt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),it[lt].usedTimes++;const St=it[A.__cacheKey];St!==void 0&&(it[A.__cacheKey].usedTimes--,St.usedTimes===0&&U(b)),A.__cacheKey=lt,A.__webglTexture=it[lt].texture}return q}function K(A,b,q){let tt=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(tt=n.TEXTURE_3D);const it=D(A,b),lt=b.source;e.bindTexture(tt,A.__webglTexture,n.TEXTURE0+q);const St=i.get(lt);if(lt.version!==St.__version||it===!0){e.activeTexture(n.TEXTURE0+q);const xt=re.getPrimaries(re.workingColorSpace),vt=b.colorSpace===yi?null:re.getPrimaries(b.colorSpace),Mt=b.colorSpace===yi||xt===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Lt=y(b)&&h(b.image)===!1;let yt=m(b.image,Lt,!1,r.maxTextureSize);yt=k(b,yt);const Ft=h(yt)||a,kt=s.convert(b.format,b.colorSpace);let Ct=s.convert(b.type),Tt=E(b.internalFormat,kt,Ct,b.colorSpace,b.isVideoTexture);Q(tt,b,Ft);let Dt;const jt=b.mipmaps,Gt=a&&b.isVideoTexture!==!0&&Tt!==nd,le=St.__version===void 0||it===!0,at=lt.dataReady,Et=L(b,yt,Ft);if(b.isDepthTexture)Tt=n.DEPTH_COMPONENT,a?b.type===ei?Tt=n.DEPTH_COMPONENT32F:b.type===Mi?Tt=n.DEPTH_COMPONENT24:b.type===Ji?Tt=n.DEPTH24_STENCIL8:Tt=n.DEPTH_COMPONENT16:b.type===ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Qi&&Tt===n.DEPTH_COMPONENT&&b.type!==kl&&b.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Mi,Ct=s.convert(b.type)),b.format===Br&&Tt===n.DEPTH_COMPONENT&&(Tt=n.DEPTH_STENCIL,b.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Ji,Ct=s.convert(b.type))),le&&(Gt?e.texStorage2D(n.TEXTURE_2D,1,Tt,yt.width,yt.height):e.texImage2D(n.TEXTURE_2D,0,Tt,yt.width,yt.height,0,kt,Ct,null));else if(b.isDataTexture)if(jt.length>0&&Ft){Gt&&le&&e.texStorage2D(n.TEXTURE_2D,Et,Tt,jt[0].width,jt[0].height);for(let dt=0,bt=jt.length;dt<bt;dt++)Dt=jt[dt],Gt?at&&e.texSubImage2D(n.TEXTURE_2D,dt,0,0,Dt.width,Dt.height,kt,Ct,Dt.data):e.texImage2D(n.TEXTURE_2D,dt,Tt,Dt.width,Dt.height,0,kt,Ct,Dt.data);b.generateMipmaps=!1}else Gt?(le&&e.texStorage2D(n.TEXTURE_2D,Et,Tt,yt.width,yt.height),at&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,yt.width,yt.height,kt,Ct,yt.data)):e.texImage2D(n.TEXTURE_2D,0,Tt,yt.width,yt.height,0,kt,Ct,yt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Gt&&le&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,Tt,jt[0].width,jt[0].height,yt.depth);for(let dt=0,bt=jt.length;dt<bt;dt++)Dt=jt[dt],b.format!==vn?kt!==null?Gt?at&&e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,0,Dt.width,Dt.height,yt.depth,kt,Dt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,dt,Tt,Dt.width,Dt.height,yt.depth,0,Dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?at&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,0,Dt.width,Dt.height,yt.depth,kt,Ct,Dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,dt,Tt,Dt.width,Dt.height,yt.depth,0,kt,Ct,Dt.data)}else{Gt&&le&&e.texStorage2D(n.TEXTURE_2D,Et,Tt,jt[0].width,jt[0].height);for(let dt=0,bt=jt.length;dt<bt;dt++)Dt=jt[dt],b.format!==vn?kt!==null?Gt?at&&e.compressedTexSubImage2D(n.TEXTURE_2D,dt,0,0,Dt.width,Dt.height,kt,Dt.data):e.compressedTexImage2D(n.TEXTURE_2D,dt,Tt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?at&&e.texSubImage2D(n.TEXTURE_2D,dt,0,0,Dt.width,Dt.height,kt,Ct,Dt.data):e.texImage2D(n.TEXTURE_2D,dt,Tt,Dt.width,Dt.height,0,kt,Ct,Dt.data)}else if(b.isDataArrayTexture)Gt?(le&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,Tt,yt.width,yt.height,yt.depth),at&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,kt,Ct,yt.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,Tt,yt.width,yt.height,yt.depth,0,kt,Ct,yt.data);else if(b.isData3DTexture)Gt?(le&&e.texStorage3D(n.TEXTURE_3D,Et,Tt,yt.width,yt.height,yt.depth),at&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,kt,Ct,yt.data)):e.texImage3D(n.TEXTURE_3D,0,Tt,yt.width,yt.height,yt.depth,0,kt,Ct,yt.data);else if(b.isFramebufferTexture){if(le)if(Gt)e.texStorage2D(n.TEXTURE_2D,Et,Tt,yt.width,yt.height);else{let dt=yt.width,bt=yt.height;for(let At=0;At<Et;At++)e.texImage2D(n.TEXTURE_2D,At,Tt,dt,bt,0,kt,Ct,null),dt>>=1,bt>>=1}}else if(jt.length>0&&Ft){if(Gt&&le){const dt=J(jt[0]);e.texStorage2D(n.TEXTURE_2D,Et,Tt,dt.width,dt.height)}for(let dt=0,bt=jt.length;dt<bt;dt++)Dt=jt[dt],Gt?at&&e.texSubImage2D(n.TEXTURE_2D,dt,0,0,kt,Ct,Dt):e.texImage2D(n.TEXTURE_2D,dt,Tt,kt,Ct,Dt);b.generateMipmaps=!1}else if(Gt){if(le){const dt=J(yt);e.texStorage2D(n.TEXTURE_2D,Et,Tt,dt.width,dt.height)}at&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,kt,Ct,yt)}else e.texImage2D(n.TEXTURE_2D,0,Tt,kt,Ct,yt);_(b,Ft)&&S(tt),St.__version=lt.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function H(A,b,q){if(b.image.length!==6)return;const tt=D(A,b),it=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+q);const lt=i.get(it);if(it.version!==lt.__version||tt===!0){e.activeTexture(n.TEXTURE0+q);const St=re.getPrimaries(re.workingColorSpace),xt=b.colorSpace===yi?null:re.getPrimaries(b.colorSpace),vt=b.colorSpace===yi||St===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Mt=b.isCompressedTexture||b.image[0].isCompressedTexture,Lt=b.image[0]&&b.image[0].isDataTexture,yt=[];for(let dt=0;dt<6;dt++)!Mt&&!Lt?yt[dt]=m(b.image[dt],!1,!0,r.maxCubemapSize):yt[dt]=Lt?b.image[dt].image:b.image[dt],yt[dt]=k(b,yt[dt]);const Ft=yt[0],kt=h(Ft)||a,Ct=s.convert(b.format,b.colorSpace),Tt=s.convert(b.type),Dt=E(b.internalFormat,Ct,Tt,b.colorSpace),jt=a&&b.isVideoTexture!==!0,Gt=lt.__version===void 0||tt===!0,le=it.dataReady;let at=L(b,Ft,kt);Q(n.TEXTURE_CUBE_MAP,b,kt);let Et;if(Mt){jt&&Gt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,at,Dt,Ft.width,Ft.height);for(let dt=0;dt<6;dt++){Et=yt[dt].mipmaps;for(let bt=0;bt<Et.length;bt++){const At=Et[bt];b.format!==vn?Ct!==null?jt?le&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt,0,0,At.width,At.height,Ct,At.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt,Dt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?le&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt,0,0,At.width,At.height,Ct,Tt,At.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt,Dt,At.width,At.height,0,Ct,Tt,At.data)}}}else{if(Et=b.mipmaps,jt&&Gt){Et.length>0&&at++;const dt=J(yt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,at,Dt,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(Lt){jt?le&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,yt[dt].width,yt[dt].height,Ct,Tt,yt[dt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Dt,yt[dt].width,yt[dt].height,0,Ct,Tt,yt[dt].data);for(let bt=0;bt<Et.length;bt++){const Kt=Et[bt].image[dt].image;jt?le&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt+1,0,0,Kt.width,Kt.height,Ct,Tt,Kt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt+1,Dt,Kt.width,Kt.height,0,Ct,Tt,Kt.data)}}else{jt?le&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Ct,Tt,yt[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Dt,Ct,Tt,yt[dt]);for(let bt=0;bt<Et.length;bt++){const At=Et[bt];jt?le&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt+1,0,0,Ct,Tt,At.image[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt+1,Dt,Ct,Tt,At.image[dt])}}}_(b,kt)&&S(n.TEXTURE_CUBE_MAP),lt.__version=it.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function nt(A,b,q,tt,it,lt){const St=s.convert(q.format,q.colorSpace),xt=s.convert(q.type),vt=E(q.internalFormat,St,xt,q.colorSpace);if(!i.get(b).__hasExternalTextures){const Lt=Math.max(1,b.width>>lt),yt=Math.max(1,b.height>>lt);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,lt,vt,Lt,yt,b.depth,0,St,xt,null):e.texImage2D(it,lt,vt,Lt,yt,0,St,xt,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),R(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,it,i.get(q).__webglTexture,0,B(b)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,it,i.get(q).__webglTexture,lt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(A,b,q){if(n.bindRenderbuffer(n.RENDERBUFFER,A),b.depthBuffer&&!b.stencilBuffer){let tt=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(q||R(b)){const it=b.depthTexture;it&&it.isDepthTexture&&(it.type===ei?tt=n.DEPTH_COMPONENT32F:it.type===Mi&&(tt=n.DEPTH_COMPONENT24));const lt=B(b);R(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,tt,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,tt,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,tt,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(b.depthBuffer&&b.stencilBuffer){const tt=B(b);q&&R(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,tt,n.DEPTH24_STENCIL8,b.width,b.height):R(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,tt,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{const tt=b.textures;for(let it=0;it<tt.length;it++){const lt=tt[it],St=s.convert(lt.format,lt.colorSpace),xt=s.convert(lt.type),vt=E(lt.internalFormat,St,xt,lt.colorSpace),Mt=B(b);q&&R(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt,vt,b.width,b.height):R(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt,vt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,vt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ft(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Z(b.depthTexture,0);const tt=i.get(b.depthTexture).__webglTexture,it=B(b);if(b.depthTexture.format===Qi)R(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0);else if(b.depthTexture.format===Br)R(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function ht(A){const b=i.get(A),q=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ft(b.__webglFramebuffer,A)}else if(q){b.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[tt]),b.__webglDepthbuffer[tt]=n.createRenderbuffer(),rt(b.__webglDepthbuffer[tt],A,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),rt(b.__webglDepthbuffer,A,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function w(A,b,q){const tt=i.get(A);b!==void 0&&nt(tt.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&ht(A)}function X(A){const b=A.texture,q=i.get(A),tt=i.get(b);A.addEventListener("dispose",V);const it=A.textures,lt=A.isWebGLCubeRenderTarget===!0,St=it.length>1,xt=h(A)||a;if(St||(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=b.version,o.memory.textures++),lt){q.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(a&&b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[vt]=[];for(let Mt=0;Mt<b.mipmaps.length;Mt++)q.__webglFramebuffer[vt][Mt]=n.createFramebuffer()}else q.__webglFramebuffer[vt]=n.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let vt=0;vt<b.mipmaps.length;vt++)q.__webglFramebuffer[vt]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(St)if(r.drawBuffers)for(let vt=0,Mt=it.length;vt<Mt;vt++){const Lt=i.get(it[vt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=n.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&R(A)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let vt=0;vt<it.length;vt++){const Mt=it[vt];q.__webglColorRenderbuffer[vt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[vt]);const Lt=s.convert(Mt.format,Mt.colorSpace),yt=s.convert(Mt.type),Ft=E(Mt.internalFormat,Lt,yt,Mt.colorSpace,A.isXRRenderTarget===!0),kt=B(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,kt,Ft,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,q.__webglColorRenderbuffer[vt])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),rt(q.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(lt){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),Q(n.TEXTURE_CUBE_MAP,b,xt);for(let vt=0;vt<6;vt++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let Mt=0;Mt<b.mipmaps.length;Mt++)nt(q.__webglFramebuffer[vt][Mt],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Mt);else nt(q.__webglFramebuffer[vt],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);_(b,xt)&&S(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let vt=0,Mt=it.length;vt<Mt;vt++){const Lt=it[vt],yt=i.get(Lt);e.bindTexture(n.TEXTURE_2D,yt.__webglTexture),Q(n.TEXTURE_2D,Lt,xt),nt(q.__webglFramebuffer,A,Lt,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,0),_(Lt,xt)&&S(n.TEXTURE_2D)}e.unbindTexture()}else{let vt=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?vt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(vt,tt.__webglTexture),Q(vt,b,xt),a&&b.mipmaps&&b.mipmaps.length>0)for(let Mt=0;Mt<b.mipmaps.length;Mt++)nt(q.__webglFramebuffer[Mt],A,b,n.COLOR_ATTACHMENT0,vt,Mt);else nt(q.__webglFramebuffer,A,b,n.COLOR_ATTACHMENT0,vt,0);_(b,xt)&&S(vt),e.unbindTexture()}A.depthBuffer&&ht(A)}function x(A){const b=h(A)||a,q=A.textures;for(let tt=0,it=q.length;tt<it;tt++){const lt=q[tt];if(_(lt,b)){const St=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xt=i.get(lt).__webglTexture;e.bindTexture(St,xt),S(St),e.unbindTexture()}}}function G(A){if(a&&A.samples>0&&R(A)===!1){const b=A.textures,q=A.width,tt=A.height;let it=n.COLOR_BUFFER_BIT;const lt=[],St=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(A),vt=b.length>1;if(vt)for(let Mt=0;Mt<b.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Mt=0;Mt<b.length;Mt++){lt.push(n.COLOR_ATTACHMENT0+Mt),A.depthBuffer&&lt.push(St);const Lt=xt.__ignoreDepthValues!==void 0?xt.__ignoreDepthValues:!1;if(Lt===!1&&(A.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),vt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[Mt]),Lt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[St]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[St])),vt){const yt=i.get(b[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,yt,0)}n.blitFramebuffer(0,0,q,tt,0,0,q,tt,it,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,lt)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),vt)for(let Mt=0;Mt<b.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,xt.__webglColorRenderbuffer[Mt]);const Lt=i.get(b[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,Lt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}}function B(A){return Math.min(r.maxSamples,A.samples)}function R(A){const b=i.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function I(A){const b=o.render.frame;f.get(A)!==b&&(f.set(A,b),A.update())}function k(A,b){const q=A.colorSpace,tt=A.format,it=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===pl||q!==Ci&&q!==yi&&(re.getTransfer(q)===he?a===!1?t.has("EXT_sRGB")===!0&&tt===vn?(A.format=pl,A.minFilter=Ze,A.generateMipmaps=!1):b=sd.sRGBToLinear(b):(tt!==vn||it!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}function J(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=M,this.setTexture2D=Z,this.setTexture2DArray=st,this.setTexture3D=et,this.setTextureCube=ot,this.rebindTextures=w,this.setupRenderTarget=X,this.updateRenderTargetMipmap=x,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=R}function IS(n,t,e){const i=e.isWebGL2;function r(s,o=yi){let a;const l=re.getTransfer(o);if(s===Ei)return n.UNSIGNED_BYTE;if(s===Kh)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Jh)return n.UNSIGNED_SHORT_5_5_5_1;if(s===lv)return n.BYTE;if(s===cv)return n.SHORT;if(s===kl)return n.UNSIGNED_SHORT;if(s===Zh)return n.INT;if(s===Mi)return n.UNSIGNED_INT;if(s===ei)return n.FLOAT;if(s===ys)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===uv)return n.ALPHA;if(s===vn)return n.RGBA;if(s===fv)return n.LUMINANCE;if(s===hv)return n.LUMINANCE_ALPHA;if(s===Qi)return n.DEPTH_COMPONENT;if(s===Br)return n.DEPTH_STENCIL;if(s===pl)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===dv)return n.RED;if(s===Qh)return n.RED_INTEGER;if(s===pv)return n.RG;if(s===td)return n.RG_INTEGER;if(s===ed)return n.RGBA_INTEGER;if(s===po||s===mo||s===go||s===_o)if(l===he)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===po)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===mo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===go)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===po)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===mo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===go)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_o)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===iu||s===ru||s===su||s===au)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===iu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ru)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===su)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===au)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===nd)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ou||s===lu)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ou)return l===he?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===lu)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===cu||s===uu||s===fu||s===hu||s===du||s===pu||s===mu||s===gu||s===_u||s===vu||s===xu||s===yu||s===Mu||s===Su)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===cu)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===uu)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fu)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hu)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===du)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===pu)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===mu)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gu)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_u)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vu)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xu)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===yu)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Mu)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Su)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vo||s===bu||s===Eu)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===vo)return l===he?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===bu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Eu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===mv||s===wu||s===Tu||s===Au)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===vo)return a.COMPRESSED_RED_RGTC1_EXT;if(s===wu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Tu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Au)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ji?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class LS extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ea extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DS={type:"move"};class Xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ea,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ea,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new gt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new gt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ea,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new gt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new gt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,i),h=this._getHandJoint(u,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],p=c.position.distanceTo(f.position),d=.02,v=.005;u.inputState.pinching&&p>d+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&p<=d-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(DS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ea;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const US=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NS=`
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

}`;class OS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new qe,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const i=e.cameras[0].viewport,r=new li({extensions:{fragDepth:!0},vertexShader:US,fragmentShader:NS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new On(new Cs(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class FS extends zr{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,p=null,d=null,v=null;const g=new OS,m=e.getContextAttributes();let h=null,y=null;const _=[],S=[],E=new Qt;let L=null;const C=new mn;C.layers.enable(1),C.viewport=new Le;const z=new mn;z.layers.enable(2),z.viewport=new Le;const V=[C,z],T=new LS;T.layers.enable(1),T.layers.enable(2);let U=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let D=_[Q];return D===void 0&&(D=new Xo,_[Q]=D),D.getTargetRaySpace()},this.getControllerGrip=function(Q){let D=_[Q];return D===void 0&&(D=new Xo,_[Q]=D),D.getGripSpace()},this.getHand=function(Q){let D=_[Q];return D===void 0&&(D=new Xo,_[Q]=D),D.getHandSpace()};function N(Q){const D=S.indexOf(Q.inputSource);if(D===-1)return;const K=_[D];K!==void 0&&(K.update(Q.inputSource,Q.frame,u||o),K.dispatchEvent({type:Q.type,data:Q.inputSource}))}function M(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",M),r.removeEventListener("inputsourceschange",Y);for(let Q=0;Q<_.length;Q++){const D=S[Q];D!==null&&(S[Q]=null,_[Q].disconnect(D))}U=null,P=null,g.reset(),t.setRenderTarget(h),d=null,p=null,f=null,r=null,y=null,ct.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Q){u=Q},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",M),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(E),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const D={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,D),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new er(d.framebufferWidth,d.framebufferHeight,{format:vn,type:Ei,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let D=null,K=null,H=null;m.depth&&(H=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,D=m.stencil?Br:Qi,K=m.stencil?Ji:Mi);const nt={colorFormat:e.RGBA8,depthFormat:H,scaleFactor:s};f=new XRWebGLBinding(r,e),p=f.createProjectionLayer(nt),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),y=new er(p.textureWidth,p.textureHeight,{format:vn,type:Ei,depthTexture:new xd(p.textureWidth,p.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});const rt=t.properties.get(y);rt.__ignoreDepthValues=p.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ct.setContext(r),ct.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Y(Q){for(let D=0;D<Q.removed.length;D++){const K=Q.removed[D],H=S.indexOf(K);H>=0&&(S[H]=null,_[H].disconnect(K))}for(let D=0;D<Q.added.length;D++){const K=Q.added[D];let H=S.indexOf(K);if(H===-1){for(let rt=0;rt<_.length;rt++)if(rt>=S.length){S.push(K),H=rt;break}else if(S[rt]===null){S[rt]=K,H=rt;break}if(H===-1)break}const nt=_[H];nt&&nt.connect(K)}}const W=new gt,Z=new gt;function st(Q,D,K){W.setFromMatrixPosition(D.matrixWorld),Z.setFromMatrixPosition(K.matrixWorld);const H=W.distanceTo(Z),nt=D.projectionMatrix.elements,rt=K.projectionMatrix.elements,ft=nt[14]/(nt[10]-1),ht=nt[14]/(nt[10]+1),w=(nt[9]+1)/nt[5],X=(nt[9]-1)/nt[5],x=(nt[8]-1)/nt[0],G=(rt[8]+1)/rt[0],B=ft*x,R=ft*G,I=H/(-x+G),k=I*-x;D.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(k),Q.translateZ(I),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const J=ft+I,A=ht+I,b=B-k,q=R+(H-k),tt=w*ht/A*J,it=X*ht/A*J;Q.projectionMatrix.makePerspective(b,q,tt,it,J,A),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function et(Q,D){D===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(D.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;g.texture!==null&&(Q.near=g.depthNear,Q.far=g.depthFar),T.near=z.near=C.near=Q.near,T.far=z.far=C.far=Q.far,(U!==T.near||P!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),U=T.near,P=T.far,C.near=U,C.far=P,z.near=U,z.far=P,C.updateProjectionMatrix(),z.updateProjectionMatrix(),Q.updateProjectionMatrix());const D=Q.parent,K=T.cameras;et(T,D);for(let H=0;H<K.length;H++)et(K[H],D);K.length===2?st(T,C,z):T.projectionMatrix.copy(C.projectionMatrix),ot(Q,T,D)};function ot(Q,D,K){K===null?Q.matrix.copy(D.matrixWorld):(Q.matrix.copy(K.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(D.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(D.projectionMatrix),Q.projectionMatrixInverse.copy(D.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ml*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(Q){l=Q,p!==null&&(p.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null};let F=null;function O(Q,D){if(c=D.getViewerPose(u||o),v=D,c!==null){const K=c.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let H=!1;K.length!==T.cameras.length&&(T.cameras.length=0,H=!0);for(let rt=0;rt<K.length;rt++){const ft=K[rt];let ht=null;if(d!==null)ht=d.getViewport(ft);else{const X=f.getViewSubImage(p,ft);ht=X.viewport,rt===0&&(t.setRenderTargetTextures(y,X.colorTexture,p.ignoreDepthValues?void 0:X.depthStencilTexture),t.setRenderTarget(y))}let w=V[rt];w===void 0&&(w=new mn,w.layers.enable(rt),w.viewport=new Le,V[rt]=w),w.matrix.fromArray(ft.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(ft.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(ht.x,ht.y,ht.width,ht.height),rt===0&&(T.matrix.copy(w.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),H===!0&&T.cameras.push(w)}const nt=r.enabledFeatures;if(nt&&nt.includes("depth-sensing")){const rt=f.getDepthInformation(K[0]);rt&&rt.isValid&&rt.texture&&g.init(t,rt,r.renderState)}}for(let K=0;K<_.length;K++){const H=S[K],nt=_[K];H!==null&&nt!==void 0&&nt.update(H,D,u||o)}g.render(t,T),F&&F(Q,D),D.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:D}),v=null}const ct=new _d;ct.setAnimationLoop(O),this.setAnimationLoop=function(Q){F=Q},this.dispose=function(){}}}const zi=new oi,BS=new Ee;function kS(n,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,dd(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,y,_,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),p(m,h),h.isMeshPhysicalMaterial&&d(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),g(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,y,_):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Qe&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Qe&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const y=t.get(h),_=y.envMap,S=y.envMapRotation;if(_&&(m.envMap.value=_,zi.copy(S),zi.x*=-1,zi.y*=-1,zi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),m.envMapRotation.value.setFromMatrix4(BS.makeRotationFromEuler(zi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const E=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*E,e(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,y,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*y,m.scale.value=_*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function p(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),t.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function d(m,h,y){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Qe&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const y=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function zS(n,t,e,i){let r={},s={},o=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,_){const S=_.program;i.uniformBlockBinding(y,S)}function u(y,_){let S=r[y.id];S===void 0&&(v(y),S=c(y),r[y.id]=S,y.addEventListener("dispose",m));const E=_.program;i.updateUBOMapping(y,E);const L=t.render.frame;s[y.id]!==L&&(p(y),s[y.id]=L)}function c(y){const _=f();y.__bindingPointIndex=_;const S=n.createBuffer(),E=y.__size,L=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,E,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,S),S}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const _=r[y.id],S=y.uniforms,E=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let L=0,C=S.length;L<C;L++){const z=Array.isArray(S[L])?S[L]:[S[L]];for(let V=0,T=z.length;V<T;V++){const U=z[V];if(d(U,L,V,E)===!0){const P=U.__offset,N=Array.isArray(U.value)?U.value:[U.value];let M=0;for(let Y=0;Y<N.length;Y++){const W=N[Y],Z=g(W);typeof W=="number"||typeof W=="boolean"?(U.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,P+M,U.__data)):W.isMatrix3?(U.__data[0]=W.elements[0],U.__data[1]=W.elements[1],U.__data[2]=W.elements[2],U.__data[3]=0,U.__data[4]=W.elements[3],U.__data[5]=W.elements[4],U.__data[6]=W.elements[5],U.__data[7]=0,U.__data[8]=W.elements[6],U.__data[9]=W.elements[7],U.__data[10]=W.elements[8],U.__data[11]=0):(W.toArray(U.__data,M),M+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,_,S,E){const L=y.value,C=_+"_"+S;if(E[C]===void 0)return typeof L=="number"||typeof L=="boolean"?E[C]=L:E[C]=L.clone(),!0;{const z=E[C];if(typeof L=="number"||typeof L=="boolean"){if(z!==L)return E[C]=L,!0}else if(z.equals(L)===!1)return z.copy(L),!0}return!1}function v(y){const _=y.uniforms;let S=0;const E=16;for(let C=0,z=_.length;C<z;C++){const V=Array.isArray(_[C])?_[C]:[_[C]];for(let T=0,U=V.length;T<U;T++){const P=V[T],N=Array.isArray(P.value)?P.value:[P.value];for(let M=0,Y=N.length;M<Y;M++){const W=N[M],Z=g(W),st=S%E;st!==0&&E-st<Z.boundary&&(S+=E-st),P.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=S,S+=Z.storage}}}const L=S%E;return L>0&&(S+=E-L),y.__size=S,y.__cache={},this}function g(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class wd{constructor(t={}){const{canvas:e=Cv(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;const d=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const h=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rn,this._useLegacyLights=!1,this.toneMapping=bi,this.toneMappingExposure=1;const _=this;let S=!1,E=0,L=0,C=null,z=-1,V=null;const T=new Le,U=new Le;let P=null;const N=new se(0);let M=0,Y=e.width,W=e.height,Z=1,st=null,et=null;const ot=new Le(0,0,Y,W),F=new Le(0,0,Y,W);let O=!1;const ct=new gd;let Q=!1,D=!1,K=null;const H=new Ee,nt=new Qt,rt=new gt,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ht(){return C===null?Z:1}let w=i;function X($,ut){for(let mt=0;mt<$.length;mt++){const _t=$[mt],pt=e.getContext(_t,ut);if(pt!==null)return pt}return null}try{const $={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bl}`),e.addEventListener("webglcontextlost",le,!1),e.addEventListener("webglcontextrestored",at,!1),e.addEventListener("webglcontextcreationerror",Et,!1),w===null){const ut=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&ut.shift(),w=X(ut,$),w===null)throw X(ut)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&w instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),w.getShaderPrecisionFormat===void 0&&(w.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch($){throw console.error("THREE.WebGLRenderer: "+$.message),$}let x,G,B,R,I,k,J,A,b,q,tt,it,lt,St,xt,vt,Mt,Lt,yt,Ft,kt,Ct,Tt,Dt;function jt(){x=new $y(w),G=new zy(w,x,t),x.init(G),Ct=new IS(w,x,G),B=new RS(w,x,G),R=new Yy(w),I=new mS,k=new PS(w,x,B,I,G,Ct,R),J=new Gy(_),A=new Xy(_),b=new ex(w,G),Tt=new By(w,x,b,G),q=new qy(w,b,R,Tt),tt=new Qy(w,q,b,R),yt=new Jy(w,G,k),vt=new Hy(I),it=new pS(_,J,A,x,G,Tt,vt),lt=new kS(_,I),St=new _S,xt=new bS(x,G),Lt=new Fy(_,J,A,B,tt,p,l),Mt=new CS(_,tt,G),Dt=new zS(w,R,G,B),Ft=new ky(w,x,R,G),kt=new jy(w,x,R,G),R.programs=it.programs,_.capabilities=G,_.extensions=x,_.properties=I,_.renderLists=St,_.shadowMap=Mt,_.state=B,_.info=R}jt();const Gt=new FS(_,w);this.xr=Gt,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const $=x.get("WEBGL_lose_context");$&&$.loseContext()},this.forceContextRestore=function(){const $=x.get("WEBGL_lose_context");$&&$.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function($){$!==void 0&&(Z=$,this.setSize(Y,W,!1))},this.getSize=function($){return $.set(Y,W)},this.setSize=function($,ut,mt=!0){if(Gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=$,W=ut,e.width=Math.floor($*Z),e.height=Math.floor(ut*Z),mt===!0&&(e.style.width=$+"px",e.style.height=ut+"px"),this.setViewport(0,0,$,ut)},this.getDrawingBufferSize=function($){return $.set(Y*Z,W*Z).floor()},this.setDrawingBufferSize=function($,ut,mt){Y=$,W=ut,Z=mt,e.width=Math.floor($*mt),e.height=Math.floor(ut*mt),this.setViewport(0,0,$,ut)},this.getCurrentViewport=function($){return $.copy(T)},this.getViewport=function($){return $.copy(ot)},this.setViewport=function($,ut,mt,_t){$.isVector4?ot.set($.x,$.y,$.z,$.w):ot.set($,ut,mt,_t),B.viewport(T.copy(ot).multiplyScalar(Z).round())},this.getScissor=function($){return $.copy(F)},this.setScissor=function($,ut,mt,_t){$.isVector4?F.set($.x,$.y,$.z,$.w):F.set($,ut,mt,_t),B.scissor(U.copy(F).multiplyScalar(Z).round())},this.getScissorTest=function(){return O},this.setScissorTest=function($){B.setScissorTest(O=$)},this.setOpaqueSort=function($){st=$},this.setTransparentSort=function($){et=$},this.getClearColor=function($){return $.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function($=!0,ut=!0,mt=!0){let _t=0;if($){let pt=!1;if(C!==null){const Rt=C.texture.format;pt=Rt===ed||Rt===td||Rt===Qh}if(pt){const Rt=C.texture.type,Nt=Rt===Ei||Rt===Mi||Rt===kl||Rt===Ji||Rt===Kh||Rt===Jh,Bt=Lt.getClearColor(),zt=Lt.getClearAlpha(),Yt=Bt.r,Vt=Bt.g,Wt=Bt.b;Nt?(d[0]=Yt,d[1]=Vt,d[2]=Wt,d[3]=zt,w.clearBufferuiv(w.COLOR,0,d)):(v[0]=Yt,v[1]=Vt,v[2]=Wt,v[3]=zt,w.clearBufferiv(w.COLOR,0,v))}else _t|=w.COLOR_BUFFER_BIT}ut&&(_t|=w.DEPTH_BUFFER_BIT),mt&&(_t|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(_t)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",le,!1),e.removeEventListener("webglcontextrestored",at,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),St.dispose(),xt.dispose(),I.dispose(),J.dispose(),A.dispose(),tt.dispose(),Tt.dispose(),Dt.dispose(),it.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",on),Gt.removeEventListener("sessionend",ue),K&&(K.dispose(),K=null),ke.stop()};function le($){$.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function at(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const $=R.autoReset,ut=Mt.enabled,mt=Mt.autoUpdate,_t=Mt.needsUpdate,pt=Mt.type;jt(),R.autoReset=$,Mt.enabled=ut,Mt.autoUpdate=mt,Mt.needsUpdate=_t,Mt.type=pt}function Et($){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",$.statusMessage)}function dt($){const ut=$.target;ut.removeEventListener("dispose",dt),bt(ut)}function bt($){At($),I.remove($)}function At($){const ut=I.get($).programs;ut!==void 0&&(ut.forEach(function(mt){it.releaseProgram(mt)}),$.isShaderMaterial&&it.releaseShaderCache($))}this.renderBufferDirect=function($,ut,mt,_t,pt,Rt){ut===null&&(ut=ft);const Nt=pt.isMesh&&pt.matrixWorld.determinant()<0,Bt=Cd($,ut,mt,_t,pt);B.setMaterial(_t,Nt);let zt=mt.index,Yt=1;if(_t.wireframe===!0){if(zt=q.getWireframeAttribute(mt),zt===void 0)return;Yt=2}const Vt=mt.drawRange,Wt=mt.attributes.position;let xe=Vt.start*Yt,tn=(Vt.start+Vt.count)*Yt;Rt!==null&&(xe=Math.max(xe,Rt.start*Yt),tn=Math.min(tn,(Rt.start+Rt.count)*Yt)),zt!==null?(xe=Math.max(xe,0),tn=Math.min(tn,zt.count)):Wt!=null&&(xe=Math.max(xe,0),tn=Math.min(tn,Wt.count));const Ce=tn-xe;if(Ce<0||Ce===1/0)return;Tt.setup(pt,_t,Bt,mt,zt);let zn,ge=Ft;if(zt!==null&&(zn=b.get(zt),ge=kt,ge.setIndex(zn)),pt.isMesh)_t.wireframe===!0?(B.setLineWidth(_t.wireframeLinewidth*ht()),ge.setMode(w.LINES)):ge.setMode(w.TRIANGLES);else if(pt.isLine){let Xt=_t.linewidth;Xt===void 0&&(Xt=1),B.setLineWidth(Xt*ht()),pt.isLineSegments?ge.setMode(w.LINES):pt.isLineLoop?ge.setMode(w.LINE_LOOP):ge.setMode(w.LINE_STRIP)}else pt.isPoints?ge.setMode(w.POINTS):pt.isSprite&&ge.setMode(w.TRIANGLES);if(pt.isBatchedMesh)ge.renderMultiDraw(pt._multiDrawStarts,pt._multiDrawCounts,pt._multiDrawCount);else if(pt.isInstancedMesh)ge.renderInstances(xe,Ce,pt.count);else if(mt.isInstancedBufferGeometry){const Xt=mt._maxInstanceCount!==void 0?mt._maxInstanceCount:1/0,$a=Math.min(mt.instanceCount,Xt);ge.renderInstances(xe,Ce,$a)}else ge.render(xe,Ce)};function Kt($,ut,mt){$.transparent===!0&&$.side===ti&&$.forceSinglePass===!1?($.side=Qe,$.needsUpdate=!0,Ps($,ut,mt),$.side=Ti,$.needsUpdate=!0,Ps($,ut,mt),$.side=ti):Ps($,ut,mt)}this.compile=function($,ut,mt=null){mt===null&&(mt=$),m=xt.get(mt),m.init(),y.push(m),mt.traverseVisible(function(pt){pt.isLight&&pt.layers.test(ut.layers)&&(m.pushLight(pt),pt.castShadow&&m.pushShadow(pt))}),$!==mt&&$.traverseVisible(function(pt){pt.isLight&&pt.layers.test(ut.layers)&&(m.pushLight(pt),pt.castShadow&&m.pushShadow(pt))}),m.setupLights(_._useLegacyLights);const _t=new Set;return $.traverse(function(pt){const Rt=pt.material;if(Rt)if(Array.isArray(Rt))for(let Nt=0;Nt<Rt.length;Nt++){const Bt=Rt[Nt];Kt(Bt,mt,pt),_t.add(Bt)}else Kt(Rt,mt,pt),_t.add(Rt)}),y.pop(),m=null,_t},this.compileAsync=function($,ut,mt=null){const _t=this.compile($,ut,mt);return new Promise(pt=>{function Rt(){if(_t.forEach(function(Nt){I.get(Nt).currentProgram.isReady()&&_t.delete(Nt)}),_t.size===0){pt($);return}setTimeout(Rt,10)}x.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let ce=null;function Pe($){ce&&ce($)}function on(){ke.stop()}function ue(){ke.start()}const ke=new _d;ke.setAnimationLoop(Pe),typeof self<"u"&&ke.setContext(self),this.setAnimationLoop=function($){ce=$,Gt.setAnimationLoop($),$===null?ke.stop():ke.start()},Gt.addEventListener("sessionstart",on),Gt.addEventListener("sessionend",ue),this.render=function($,ut){if(ut!==void 0&&ut.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ut.parent===null&&ut.matrixWorldAutoUpdate===!0&&ut.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(ut),ut=Gt.getCamera()),$.isScene===!0&&$.onBeforeRender(_,$,ut,C),m=xt.get($,y.length),m.init(),y.push(m),H.multiplyMatrices(ut.projectionMatrix,ut.matrixWorldInverse),ct.setFromProjectionMatrix(H),D=this.localClippingEnabled,Q=vt.init(this.clippingPlanes,D),g=St.get($,h.length),g.init(),h.push(g),wn($,ut,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(st,et),this.info.render.frame++,Q===!0&&vt.beginShadows();const mt=m.state.shadowsArray;if(Mt.render(mt,$,ut),Q===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Gt.enabled===!1||Gt.isPresenting===!1||Gt.hasDepthSensing()===!1)&&Lt.render(g,$),m.setupLights(_._useLegacyLights),ut.isArrayCamera){const _t=ut.cameras;for(let pt=0,Rt=_t.length;pt<Rt;pt++){const Nt=_t[pt];Vl(g,$,Nt,Nt.viewport)}}else Vl(g,$,ut);C!==null&&(k.updateMultisampleRenderTarget(C),k.updateRenderTargetMipmap(C)),$.isScene===!0&&$.onAfterRender(_,$,ut),Tt.resetDefaultState(),z=-1,V=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function wn($,ut,mt,_t){if($.visible===!1)return;if($.layers.test(ut.layers)){if($.isGroup)mt=$.renderOrder;else if($.isLOD)$.autoUpdate===!0&&$.update(ut);else if($.isLight)m.pushLight($),$.castShadow&&m.pushShadow($);else if($.isSprite){if(!$.frustumCulled||ct.intersectsSprite($)){_t&&rt.setFromMatrixPosition($.matrixWorld).applyMatrix4(H);const Nt=tt.update($),Bt=$.material;Bt.visible&&g.push($,Nt,Bt,mt,rt.z,null)}}else if(($.isMesh||$.isLine||$.isPoints)&&(!$.frustumCulled||ct.intersectsObject($))){const Nt=tt.update($),Bt=$.material;if(_t&&($.boundingSphere!==void 0?($.boundingSphere===null&&$.computeBoundingSphere(),rt.copy($.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),rt.copy(Nt.boundingSphere.center)),rt.applyMatrix4($.matrixWorld).applyMatrix4(H)),Array.isArray(Bt)){const zt=Nt.groups;for(let Yt=0,Vt=zt.length;Yt<Vt;Yt++){const Wt=zt[Yt],xe=Bt[Wt.materialIndex];xe&&xe.visible&&g.push($,Nt,xe,mt,rt.z,Wt)}}else Bt.visible&&g.push($,Nt,Bt,mt,rt.z,null)}}const Rt=$.children;for(let Nt=0,Bt=Rt.length;Nt<Bt;Nt++)wn(Rt[Nt],ut,mt,_t)}function Vl($,ut,mt,_t){const pt=$.opaque,Rt=$.transmissive,Nt=$.transparent;m.setupLightsView(mt),Q===!0&&vt.setGlobalState(_.clippingPlanes,mt),Rt.length>0&&Ad(pt,Rt,ut,mt),_t&&B.viewport(T.copy(_t)),pt.length>0&&Rs(pt,ut,mt),Rt.length>0&&Rs(Rt,ut,mt),Nt.length>0&&Rs(Nt,ut,mt),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function Ad($,ut,mt,_t){if((mt.isScene===!0?mt.overrideMaterial:null)!==null)return;const Rt=G.isWebGL2;K===null&&(K=new er(1,1,{generateMipmaps:!0,type:x.has("EXT_color_buffer_half_float")?ys:Ei,minFilter:ji,samples:Rt?4:0})),_.getDrawingBufferSize(nt),Rt?K.setSize(nt.x,nt.y):K.setSize(gl(nt.x),gl(nt.y));const Nt=_.getRenderTarget();_.setRenderTarget(K),_.getClearColor(N),M=_.getClearAlpha(),M<1&&_.setClearColor(16777215,.5),_.clear();const Bt=_.toneMapping;_.toneMapping=bi,Rs($,mt,_t),k.updateMultisampleRenderTarget(K),k.updateRenderTargetMipmap(K);let zt=!1;for(let Yt=0,Vt=ut.length;Yt<Vt;Yt++){const Wt=ut[Yt],xe=Wt.object,tn=Wt.geometry,Ce=Wt.material,zn=Wt.group;if(Ce.side===ti&&xe.layers.test(_t.layers)){const ge=Ce.side;Ce.side=Qe,Ce.needsUpdate=!0,Wl(xe,mt,_t,tn,Ce,zn),Ce.side=ge,Ce.needsUpdate=!0,zt=!0}}zt===!0&&(k.updateMultisampleRenderTarget(K),k.updateRenderTargetMipmap(K)),_.setRenderTarget(Nt),_.setClearColor(N,M),_.toneMapping=Bt}function Rs($,ut,mt){const _t=ut.isScene===!0?ut.overrideMaterial:null;for(let pt=0,Rt=$.length;pt<Rt;pt++){const Nt=$[pt],Bt=Nt.object,zt=Nt.geometry,Yt=_t===null?Nt.material:_t,Vt=Nt.group;Bt.layers.test(mt.layers)&&Wl(Bt,ut,mt,zt,Yt,Vt)}}function Wl($,ut,mt,_t,pt,Rt){$.onBeforeRender(_,ut,mt,_t,pt,Rt),$.modelViewMatrix.multiplyMatrices(mt.matrixWorldInverse,$.matrixWorld),$.normalMatrix.getNormalMatrix($.modelViewMatrix),pt.onBeforeRender(_,ut,mt,_t,$,Rt),pt.transparent===!0&&pt.side===ti&&pt.forceSinglePass===!1?(pt.side=Qe,pt.needsUpdate=!0,_.renderBufferDirect(mt,ut,_t,pt,$,Rt),pt.side=Ti,pt.needsUpdate=!0,_.renderBufferDirect(mt,ut,_t,pt,$,Rt),pt.side=ti):_.renderBufferDirect(mt,ut,_t,pt,$,Rt),$.onAfterRender(_,ut,mt,_t,pt,Rt)}function Ps($,ut,mt){ut.isScene!==!0&&(ut=ft);const _t=I.get($),pt=m.state.lights,Rt=m.state.shadowsArray,Nt=pt.state.version,Bt=it.getParameters($,pt.state,Rt,ut,mt),zt=it.getProgramCacheKey(Bt);let Yt=_t.programs;_t.environment=$.isMeshStandardMaterial?ut.environment:null,_t.fog=ut.fog,_t.envMap=($.isMeshStandardMaterial?A:J).get($.envMap||_t.environment),_t.envMapRotation=_t.environment!==null&&$.envMap===null?ut.environmentRotation:$.envMapRotation,Yt===void 0&&($.addEventListener("dispose",dt),Yt=new Map,_t.programs=Yt);let Vt=Yt.get(zt);if(Vt!==void 0){if(_t.currentProgram===Vt&&_t.lightsStateVersion===Nt)return $l($,Bt),Vt}else Bt.uniforms=it.getUniforms($),$.onBuild(mt,Bt,_),$.onBeforeCompile(Bt,_),Vt=it.acquireProgram(Bt,zt),Yt.set(zt,Vt),_t.uniforms=Bt.uniforms;const Wt=_t.uniforms;return(!$.isShaderMaterial&&!$.isRawShaderMaterial||$.clipping===!0)&&(Wt.clippingPlanes=vt.uniform),$l($,Bt),_t.needsLights=Pd($),_t.lightsStateVersion=Nt,_t.needsLights&&(Wt.ambientLightColor.value=pt.state.ambient,Wt.lightProbe.value=pt.state.probe,Wt.directionalLights.value=pt.state.directional,Wt.directionalLightShadows.value=pt.state.directionalShadow,Wt.spotLights.value=pt.state.spot,Wt.spotLightShadows.value=pt.state.spotShadow,Wt.rectAreaLights.value=pt.state.rectArea,Wt.ltc_1.value=pt.state.rectAreaLTC1,Wt.ltc_2.value=pt.state.rectAreaLTC2,Wt.pointLights.value=pt.state.point,Wt.pointLightShadows.value=pt.state.pointShadow,Wt.hemisphereLights.value=pt.state.hemi,Wt.directionalShadowMap.value=pt.state.directionalShadowMap,Wt.directionalShadowMatrix.value=pt.state.directionalShadowMatrix,Wt.spotShadowMap.value=pt.state.spotShadowMap,Wt.spotLightMatrix.value=pt.state.spotLightMatrix,Wt.spotLightMap.value=pt.state.spotLightMap,Wt.pointShadowMap.value=pt.state.pointShadowMap,Wt.pointShadowMatrix.value=pt.state.pointShadowMatrix),_t.currentProgram=Vt,_t.uniformsList=null,Vt}function Xl($){if($.uniformsList===null){const ut=$.currentProgram.getUniforms();$.uniformsList=ca.seqWithValue(ut.seq,$.uniforms)}return $.uniformsList}function $l($,ut){const mt=I.get($);mt.outputColorSpace=ut.outputColorSpace,mt.batching=ut.batching,mt.instancing=ut.instancing,mt.instancingColor=ut.instancingColor,mt.instancingMorph=ut.instancingMorph,mt.skinning=ut.skinning,mt.morphTargets=ut.morphTargets,mt.morphNormals=ut.morphNormals,mt.morphColors=ut.morphColors,mt.morphTargetsCount=ut.morphTargetsCount,mt.numClippingPlanes=ut.numClippingPlanes,mt.numIntersection=ut.numClipIntersection,mt.vertexAlphas=ut.vertexAlphas,mt.vertexTangents=ut.vertexTangents,mt.toneMapping=ut.toneMapping}function Cd($,ut,mt,_t,pt){ut.isScene!==!0&&(ut=ft),k.resetTextureUnits();const Rt=ut.fog,Nt=_t.isMeshStandardMaterial?ut.environment:null,Bt=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ci,zt=(_t.isMeshStandardMaterial?A:J).get(_t.envMap||Nt),Yt=_t.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,Vt=!!mt.attributes.tangent&&(!!_t.normalMap||_t.anisotropy>0),Wt=!!mt.morphAttributes.position,xe=!!mt.morphAttributes.normal,tn=!!mt.morphAttributes.color;let Ce=bi;_t.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ce=_.toneMapping);const zn=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,ge=zn!==void 0?zn.length:0,Xt=I.get(_t),$a=m.state.lights;if(Q===!0&&(D===!0||$!==V)){const ln=$===V&&_t.id===z;vt.setState(_t,$,ln)}let me=!1;_t.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==$a.state.version||Xt.outputColorSpace!==Bt||pt.isBatchedMesh&&Xt.batching===!1||!pt.isBatchedMesh&&Xt.batching===!0||pt.isInstancedMesh&&Xt.instancing===!1||!pt.isInstancedMesh&&Xt.instancing===!0||pt.isSkinnedMesh&&Xt.skinning===!1||!pt.isSkinnedMesh&&Xt.skinning===!0||pt.isInstancedMesh&&Xt.instancingColor===!0&&pt.instanceColor===null||pt.isInstancedMesh&&Xt.instancingColor===!1&&pt.instanceColor!==null||pt.isInstancedMesh&&Xt.instancingMorph===!0&&pt.morphTexture===null||pt.isInstancedMesh&&Xt.instancingMorph===!1&&pt.morphTexture!==null||Xt.envMap!==zt||_t.fog===!0&&Xt.fog!==Rt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==vt.numPlanes||Xt.numIntersection!==vt.numIntersection)||Xt.vertexAlphas!==Yt||Xt.vertexTangents!==Vt||Xt.morphTargets!==Wt||Xt.morphNormals!==xe||Xt.morphColors!==tn||Xt.toneMapping!==Ce||G.isWebGL2===!0&&Xt.morphTargetsCount!==ge)&&(me=!0):(me=!0,Xt.__version=_t.version);let Ri=Xt.currentProgram;me===!0&&(Ri=Ps(_t,ut,pt));let ql=!1,Gr=!1,qa=!1;const De=Ri.getUniforms(),Pi=Xt.uniforms;if(B.useProgram(Ri.program)&&(ql=!0,Gr=!0,qa=!0),_t.id!==z&&(z=_t.id,Gr=!0),ql||V!==$){De.setValue(w,"projectionMatrix",$.projectionMatrix),De.setValue(w,"viewMatrix",$.matrixWorldInverse);const ln=De.map.cameraPosition;ln!==void 0&&ln.setValue(w,rt.setFromMatrixPosition($.matrixWorld)),G.logarithmicDepthBuffer&&De.setValue(w,"logDepthBufFC",2/(Math.log($.far+1)/Math.LN2)),(_t.isMeshPhongMaterial||_t.isMeshToonMaterial||_t.isMeshLambertMaterial||_t.isMeshBasicMaterial||_t.isMeshStandardMaterial||_t.isShaderMaterial)&&De.setValue(w,"isOrthographic",$.isOrthographicCamera===!0),V!==$&&(V=$,Gr=!0,qa=!0)}if(pt.isSkinnedMesh){De.setOptional(w,pt,"bindMatrix"),De.setOptional(w,pt,"bindMatrixInverse");const ln=pt.skeleton;ln&&(G.floatVertexTextures?(ln.boneTexture===null&&ln.computeBoneTexture(),De.setValue(w,"boneTexture",ln.boneTexture,k)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}pt.isBatchedMesh&&(De.setOptional(w,pt,"batchingTexture"),De.setValue(w,"batchingTexture",pt._matricesTexture,k));const ja=mt.morphAttributes;if((ja.position!==void 0||ja.normal!==void 0||ja.color!==void 0&&G.isWebGL2===!0)&&yt.update(pt,mt,Ri),(Gr||Xt.receiveShadow!==pt.receiveShadow)&&(Xt.receiveShadow=pt.receiveShadow,De.setValue(w,"receiveShadow",pt.receiveShadow)),_t.isMeshGouraudMaterial&&_t.envMap!==null&&(Pi.envMap.value=zt,Pi.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),Gr&&(De.setValue(w,"toneMappingExposure",_.toneMappingExposure),Xt.needsLights&&Rd(Pi,qa),Rt&&_t.fog===!0&&lt.refreshFogUniforms(Pi,Rt),lt.refreshMaterialUniforms(Pi,_t,Z,W,K),ca.upload(w,Xl(Xt),Pi,k)),_t.isShaderMaterial&&_t.uniformsNeedUpdate===!0&&(ca.upload(w,Xl(Xt),Pi,k),_t.uniformsNeedUpdate=!1),_t.isSpriteMaterial&&De.setValue(w,"center",pt.center),De.setValue(w,"modelViewMatrix",pt.modelViewMatrix),De.setValue(w,"normalMatrix",pt.normalMatrix),De.setValue(w,"modelMatrix",pt.matrixWorld),_t.isShaderMaterial||_t.isRawShaderMaterial){const ln=_t.uniformsGroups;for(let Ya=0,Id=ln.length;Ya<Id;Ya++)if(G.isWebGL2){const jl=ln[Ya];Dt.update(jl,Ri),Dt.bind(jl,Ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ri}function Rd($,ut){$.ambientLightColor.needsUpdate=ut,$.lightProbe.needsUpdate=ut,$.directionalLights.needsUpdate=ut,$.directionalLightShadows.needsUpdate=ut,$.pointLights.needsUpdate=ut,$.pointLightShadows.needsUpdate=ut,$.spotLights.needsUpdate=ut,$.spotLightShadows.needsUpdate=ut,$.rectAreaLights.needsUpdate=ut,$.hemisphereLights.needsUpdate=ut}function Pd($){return $.isMeshLambertMaterial||$.isMeshToonMaterial||$.isMeshPhongMaterial||$.isMeshStandardMaterial||$.isShadowMaterial||$.isShaderMaterial&&$.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function($,ut,mt){I.get($.texture).__webglTexture=ut,I.get($.depthTexture).__webglTexture=mt;const _t=I.get($);_t.__hasExternalTextures=!0,_t.__autoAllocateDepthBuffer=mt===void 0,_t.__autoAllocateDepthBuffer||x.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),_t.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function($,ut){const mt=I.get($);mt.__webglFramebuffer=ut,mt.__useDefaultFramebuffer=ut===void 0},this.setRenderTarget=function($,ut=0,mt=0){C=$,E=ut,L=mt;let _t=!0,pt=null,Rt=!1,Nt=!1;if($){const zt=I.get($);zt.__useDefaultFramebuffer!==void 0?(B.bindFramebuffer(w.FRAMEBUFFER,null),_t=!1):zt.__webglFramebuffer===void 0?k.setupRenderTarget($):zt.__hasExternalTextures&&k.rebindTextures($,I.get($.texture).__webglTexture,I.get($.depthTexture).__webglTexture);const Yt=$.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Nt=!0);const Vt=I.get($).__webglFramebuffer;$.isWebGLCubeRenderTarget?(Array.isArray(Vt[ut])?pt=Vt[ut][mt]:pt=Vt[ut],Rt=!0):G.isWebGL2&&$.samples>0&&k.useMultisampledRTT($)===!1?pt=I.get($).__webglMultisampledFramebuffer:Array.isArray(Vt)?pt=Vt[mt]:pt=Vt,T.copy($.viewport),U.copy($.scissor),P=$.scissorTest}else T.copy(ot).multiplyScalar(Z).floor(),U.copy(F).multiplyScalar(Z).floor(),P=O;if(B.bindFramebuffer(w.FRAMEBUFFER,pt)&&G.drawBuffers&&_t&&B.drawBuffers($,pt),B.viewport(T),B.scissor(U),B.setScissorTest(P),Rt){const zt=I.get($.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+ut,zt.__webglTexture,mt)}else if(Nt){const zt=I.get($.texture),Yt=ut||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,zt.__webglTexture,mt||0,Yt)}z=-1},this.readRenderTargetPixels=function($,ut,mt,_t,pt,Rt,Nt){if(!($&&$.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=I.get($).__webglFramebuffer;if($.isWebGLCubeRenderTarget&&Nt!==void 0&&(Bt=Bt[Nt]),Bt){B.bindFramebuffer(w.FRAMEBUFFER,Bt);try{const zt=$.texture,Yt=zt.format,Vt=zt.type;if(Yt!==vn&&Ct.convert(Yt)!==w.getParameter(w.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Wt=Vt===ys&&(x.has("EXT_color_buffer_half_float")||G.isWebGL2&&x.has("EXT_color_buffer_float"));if(Vt!==Ei&&Ct.convert(Vt)!==w.getParameter(w.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Vt===ei&&(G.isWebGL2||x.has("OES_texture_float")||x.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ut>=0&&ut<=$.width-_t&&mt>=0&&mt<=$.height-pt&&w.readPixels(ut,mt,_t,pt,Ct.convert(Yt),Ct.convert(Vt),Rt)}finally{const zt=C!==null?I.get(C).__webglFramebuffer:null;B.bindFramebuffer(w.FRAMEBUFFER,zt)}}},this.copyFramebufferToTexture=function($,ut,mt=0){const _t=Math.pow(2,-mt),pt=Math.floor(ut.image.width*_t),Rt=Math.floor(ut.image.height*_t);k.setTexture2D(ut,0),w.copyTexSubImage2D(w.TEXTURE_2D,mt,0,0,$.x,$.y,pt,Rt),B.unbindTexture()},this.copyTextureToTexture=function($,ut,mt,_t=0){const pt=ut.image.width,Rt=ut.image.height,Nt=Ct.convert(mt.format),Bt=Ct.convert(mt.type);k.setTexture2D(mt,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,mt.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,mt.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,mt.unpackAlignment),ut.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,_t,$.x,$.y,pt,Rt,Nt,Bt,ut.image.data):ut.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,_t,$.x,$.y,ut.mipmaps[0].width,ut.mipmaps[0].height,Nt,ut.mipmaps[0].data):w.texSubImage2D(w.TEXTURE_2D,_t,$.x,$.y,Nt,Bt,ut.image),_t===0&&mt.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),B.unbindTexture()},this.copyTextureToTexture3D=function($,ut,mt,_t,pt=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Rt=Math.round($.max.x-$.min.x),Nt=Math.round($.max.y-$.min.y),Bt=$.max.z-$.min.z+1,zt=Ct.convert(_t.format),Yt=Ct.convert(_t.type);let Vt;if(_t.isData3DTexture)k.setTexture3D(_t,0),Vt=w.TEXTURE_3D;else if(_t.isDataArrayTexture||_t.isCompressedArrayTexture)k.setTexture2DArray(_t,0),Vt=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,_t.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_t.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,_t.unpackAlignment);const Wt=w.getParameter(w.UNPACK_ROW_LENGTH),xe=w.getParameter(w.UNPACK_IMAGE_HEIGHT),tn=w.getParameter(w.UNPACK_SKIP_PIXELS),Ce=w.getParameter(w.UNPACK_SKIP_ROWS),zn=w.getParameter(w.UNPACK_SKIP_IMAGES),ge=mt.isCompressedTexture?mt.mipmaps[pt]:mt.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,ge.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ge.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,$.min.x),w.pixelStorei(w.UNPACK_SKIP_ROWS,$.min.y),w.pixelStorei(w.UNPACK_SKIP_IMAGES,$.min.z),mt.isDataTexture||mt.isData3DTexture?w.texSubImage3D(Vt,pt,ut.x,ut.y,ut.z,Rt,Nt,Bt,zt,Yt,ge.data):_t.isCompressedArrayTexture?w.compressedTexSubImage3D(Vt,pt,ut.x,ut.y,ut.z,Rt,Nt,Bt,zt,ge.data):w.texSubImage3D(Vt,pt,ut.x,ut.y,ut.z,Rt,Nt,Bt,zt,Yt,ge),w.pixelStorei(w.UNPACK_ROW_LENGTH,Wt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,xe),w.pixelStorei(w.UNPACK_SKIP_PIXELS,tn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ce),w.pixelStorei(w.UNPACK_SKIP_IMAGES,zn),pt===0&&_t.generateMipmaps&&w.generateMipmap(Vt),B.unbindTexture()},this.initTexture=function($){$.isCubeTexture?k.setTextureCube($,0):$.isData3DTexture?k.setTexture3D($,0):$.isDataArrayTexture||$.isCompressedArrayTexture?k.setTexture2DArray($,0):k.setTexture2D($,0),B.unbindTexture()},this.resetState=function(){E=0,L=0,C=null,B.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===zl?"display-p3":"srgb",e.unpackColorSpace=re.workingColorSpace===Va?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class HS extends wd{}HS.prototype.isWebGL1Renderer=!0;class GS extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bl);class VS{constructor(t,e){this.effectCanvas=t,this.originalCanvas=e,this.renderer=null,this.scene=null,this.camera=null,this.material=null,this.texture=null,this.mesh=null,this.params={horizontalChromatic:70,distortion:50,speed:60,size:60,blur:60},this.time=0,this.animationId=null,this.currentImage=null,this.compareMode=!1}init(){this.scene=new GS,this.camera=new vd(-1,1,1,-1,0,1),this.renderer=new wd({canvas:this.effectCanvas,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.createMaterial();const t=new Cs(2,2);this.mesh=new On(t,this.material),this.scene.add(this.mesh),this.animate(),window.addEventListener("resize",()=>this.handleResize())}createMaterial(){this.material=new li({uniforms:{uTexture:{value:null},uTime:{value:0},uHorizontalChromatic:{value:.7},uDistortion:{value:.5},uSpeed:{value:.6},uSize:{value:.6},uBlur:{value:.6},uResolution:{value:new Qt(1,1)},uTextureResolution:{value:new Qt(1,1)}},vertexShader:`
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
      `})}loadImage(t){this.currentImage=t,this.texture&&this.texture.dispose(),this.texture=new qe(t),this.texture.needsUpdate=!0,this.material.uniforms.uTexture.value=this.texture,this.material.uniforms.uTextureResolution.value.set(t.width,t.height),this.updateCanvasSize(t.width,t.height),this.compareMode&&this.originalCanvas&&this.drawOriginalImage(t)}drawOriginalImage(t){if(!this.originalCanvas)return;const e=this.originalCanvas.getContext("2d");this.originalCanvas.width=t.width,this.originalCanvas.height=t.height,e.drawImage(t,0,0)}updateCanvasSize(t,e){const i=this.effectCanvas.parentElement;if(!i)return;const r=i.clientWidth-48,s=i.clientHeight-48,o=Math.min(r/t,s/e,1),a=Math.floor(t*o),l=Math.floor(e*o);this.effectCanvas.style.width=`${a}px`,this.effectCanvas.style.height=`${l}px`,this.renderer.setSize(t,e,!1),this.material.uniforms.uResolution.value.set(t,e),this.compareMode&&this.originalCanvas&&(this.originalCanvas.style.width=`${a}px`,this.originalCanvas.style.height=`${l}px`)}updateParams(t){this.params={...t},this.material.uniforms.uHorizontalChromatic.value=t.horizontalChromatic/100,this.material.uniforms.uDistortion.value=t.distortion/100,this.material.uniforms.uSpeed.value=t.speed/100,this.material.uniforms.uSize.value=t.size/100,this.material.uniforms.uBlur.value=t.blur/100}setCompareMode(t){this.compareMode=t,t&&this.currentImage&&this.originalCanvas&&(this.drawOriginalImage(this.currentImage),this.updateCanvasSize(this.currentImage.width,this.currentImage.height))}animate(){this.animationId=requestAnimationFrame(()=>this.animate()),this.time+=.016,this.material.uniforms.uTime.value=this.time,this.renderer.render(this.scene,this.camera)}handleResize(){this.currentImage&&this.updateCanvasSize(this.currentImage.width,this.currentImage.height)}dispose(){this.animationId&&cancelAnimationFrame(this.animationId),this.texture&&this.texture.dispose(),this.material&&this.material.dispose(),this.renderer&&this.renderer.dispose(),window.removeEventListener("resize",()=>this.handleResize())}}class pe{constructor(t){this.canvas=t,this.ctx=t.getContext("2d"),this.sourceImage=null,this.params={},this.animFrame=null,this.isAnimating=!1}loadImage(t){this.sourceImage=t,this.canvas.width=t.naturalWidth||t.width,this.canvas.height=t.naturalHeight||t.height,this.render()}updateParams(t){this.params={...this.params,...t},this.render()}render(){this.sourceImage&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.sourceImage,0,0,this.canvas.width,this.canvas.height),this.apply())}apply(){}destroy(){this.animFrame&&cancelAnimationFrame(this.animFrame)}getAvgColor(t,e,i,r,s,o,a){let l=0,u=0,c=0,f=0,p=0;const d=Math.max(0,Math.floor(e)),v=Math.max(0,Math.floor(i)),g=Math.min(o-1,Math.floor(e+r)),m=Math.min(a-1,Math.floor(i+s));for(let h=v;h<=m;h++)for(let y=d;y<=g;y++){const _=(h*o+y)*4;l+=t[_],u+=t[_+1],c+=t[_+2],f+=t[_+3],p++}return p===0?[0,0,0,255]:[l/p,u/p,c/p,f/p]}}class WS extends pe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(2,Math.round(this.params.intensity/100*60)+2),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;t.clearRect(0,0,r,s);for(let c=0;c<s;c+=o)for(let f=0;f<r;f+=o){const[p,d,v,g]=this.getAvgColor(u,f,c,o-1,o-1,r,s);t.fillStyle=`rgba(${p|0},${d|0},${v|0},${g/255})`,t.fillRect(f,c,o,o)}}}class XS extends pe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(4,Math.round(this.params.intensity/100*80)+4),a=Math.round(this.params.intensity/100*3)+1;t.clearRect(0,0,r,s);const l=document.createElement("canvas"),u=Math.max(4,o);l.width=Math.max(1,Math.ceil(r/u)),l.height=Math.max(1,Math.ceil(s/u));const c=l.getContext("2d");c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high",c.drawImage(i,0,0,l.width,l.height),t.imageSmoothingEnabled=!0,t.imageSmoothingQuality="high",t.drawImage(l,0,0,r,s),t.filter=`blur(${a*2}px)`,t.globalAlpha=.3,t.drawImage(i,0,0,r,s),t.filter="none",t.globalAlpha=1}}class $S extends pe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(4,Math.round(this.params.intensity/100*56)+8),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;t.clearRect(0,0,r,s);for(let c=0;c<s;c+=o)for(let f=0;f<r;f+=o){const[p,d,v]=this.getAvgColor(u,f,c,o-1,o-1,r,s),g=p|0,m=d|0,h=v|0;t.fillStyle=`rgb(${g},${m},${h})`,t.fillRect(f,c,o,o),t.fillStyle="rgba(0,0,0,0.35)",t.fillRect(f+o-2,c,2,o),t.fillRect(f,c+o-2,o,2),t.fillStyle="rgba(255,255,255,0.2)",t.fillRect(f,c,o-2,2),t.fillRect(f,c,2,o-2);const y=f+o/2,_=c+o/2,S=o*.28,E=t.createRadialGradient(y-S*.3,_-S*.3,S*.1,y,_,S);E.addColorStop(0,"rgba(255,255,255,0.5)"),E.addColorStop(.5,`rgba(${g},${m},${h},0.9)`),E.addColorStop(1,"rgba(0,0,0,0.3)"),t.beginPath(),t.arc(y,_,S,0,Math.PI*2),t.fillStyle=E,t.fill()}}}class qS extends pe{constructor(t){super(t),this.params={intensity:50},this._cachedSeeds=null,this._cachedSize=-1}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(8,Math.round(this.params.intensity/100*60)+8),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;this._cachedSize!==o&&(this._cachedSeeds=this._genSeeds(r,s,o),this._cachedSize=o);const c=this._cachedSeeds,f=c.map(([p,d])=>{const[v,g,m]=this.getAvgColor(u,p-o/2,d-o/2,o,o,r,s);return[v|0,g|0,m|0]});t.clearRect(0,0,r,s),this._drawVoronoi(t,c,f,r,s,o)}_genSeeds(t,e,i){const r=[],s=Math.ceil(t/i)+1,o=Math.ceil(e/i)+1;for(let a=0;a<o;a++)for(let l=0;l<s;l++){const u=i*.7,c=l*i+(this._hash(l,a,0)-.5)*u,f=a*i+(this._hash(l,a,1)-.5)*u;r.push([c,f])}return r}_hash(t,e,i){let r=Math.sin(t*127.1+e*311.7+i*74.3)*43758.5453;return r-Math.floor(r)}_drawVoronoi(t,e,i,r,s,o){const a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d"),u=l.createImageData(r,s),c=u.data;for(let m=0;m<s;m++)for(let h=0;h<r;h++){let y=1/0,_=0;const S=Math.round(h/o),E=Math.round(m/o);for(let T=-2;T<=2;T++)for(let U=-2;U<=2;U++){const P=S+U,N=E+T;if(P<0||N<0||P>=Math.ceil(r/o)+1||N>=Math.ceil(s/o)+1)continue;const M=N*(Math.ceil(r/o)+1)+P;if(M<0||M>=e.length)continue;const[Y,W]=e[M],Z=(h-Y)**2+(m-W)**2;Z<y&&(y=Z,_=M)}const[L,C,z]=i[_],V=(m*r+h)*4;c[V]=L,c[V+1]=C,c[V+2]=z,c[V+3]=255}l.putImageData(u,0,0),t.drawImage(a,0,0);const f=l.getImageData(0,0,r,s).data,p=document.createElement("canvas");p.width=r,p.height=s;const d=p.getContext("2d"),v=d.createImageData(r,s),g=v.data;for(let m=1;m<s-1;m++)for(let h=1;h<r-1;h++){const y=(m*r+h)*4,_=(m*r+h+1)*4,S=((m+1)*r+h)*4;(f[y]!==f[_]||f[y+1]!==f[_+1]||f[y]!==f[S]||f[y+1]!==f[S+1])&&(g[y]=255,g[y+1]=255,g[y+2]=255,g[y+3]=200)}d.putImageData(v,0,0),t.drawImage(p,0,0)}}class jS extends pe{constructor(t){super(t),this.params={intensity:50},this._seeds=null,this._cachedSize=-1}_hash(t,e,i){let r=Math.sin(t*127.1+e*311.7+i*74.3)*43758.5453;return r-Math.floor(r)}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(6,Math.round(this.params.intensity/100*50)+6),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;if(this._cachedSize!==o){this._seeds=[];const c=Math.ceil(r/o)+1,f=Math.ceil(s/o)+1;for(let p=0;p<f;p++)for(let d=0;d<c;d++){const v=o*.65,g=d*o+(this._hash(d,p,0)-.5)*v,m=p*o+(this._hash(d,p,1)-.5)*v,h=o*(.35+this._hash(d,p,2)*.3);this._seeds.push({x:g,y:m,r:h})}this._cachedSize=o}t.fillStyle="#000",t.fillRect(0,0,r,s);for(const c of this._seeds){const[f,p,d]=this.getAvgColor(u,c.x-c.r,c.y-c.r,c.r*2,c.r*2,r,s),[v,g,m]=this._boostSat(f,p,d,1.5);t.beginPath(),t.arc(c.x,c.y,c.r,0,Math.PI*2),t.fillStyle=`rgb(${v|0},${g|0},${m|0})`,t.fill()}}_boostSat(t,e,i,r){const s=Math.max(t,e,i),o=Math.min(t,e,i),a=(s+o)/2;return[Math.min(255,Math.max(0,a+(t-a)*r)),Math.min(255,Math.max(0,a+(e-a)*r)),Math.min(255,Math.max(0,a+(i-a)*r))]}}class YS extends pe{constructor(t){super(t),this.params={intensity:50},this._cachedSize=-1,this._triangles=null}_hash(t,e,i){let r=Math.sin(t*127.1+e*311.7+i*74.3)*43758.5453;return r-Math.floor(r)}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(8,Math.round(this.params.intensity/100*60)+10),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;this._cachedSize!==o&&(this._triangles=this._genTriangles(r,s,o),this._cachedSize=o),t.clearRect(0,0,r,s);for(const c of this._triangles){const f=(c[0]+c[2]+c[4])/3,p=(c[1]+c[3]+c[5])/3,[d,v,g]=this.getAvgColor(u,f-o/2,p-o/2,o,o,r,s),[m,h,y]=this._boostSat(d,v,g,1.8);t.beginPath(),t.moveTo(c[0],c[1]),t.lineTo(c[2],c[3]),t.lineTo(c[4],c[5]),t.closePath(),t.fillStyle=`rgb(${m|0},${h|0},${y|0})`,t.fill()}}_genTriangles(t,e,i){const r=[],s=Math.ceil(t/i)+1,o=Math.ceil(e/i)+1,a=[];for(let l=0;l<=o;l++){a.push([]);for(let u=0;u<=s;u++){const c=(this._hash(u,l,0)-.5)*i*.7,f=(this._hash(u,l,1)-.5)*i*.7;a[l].push([u*i+c,l*i+f])}}for(let l=0;l<o;l++)for(let u=0;u<s;u++){const[c,f]=a[l][u],[p,d]=a[l][u+1],[v,g]=a[l+1][u],[m,h]=a[l+1][u+1];r.push([c,f,p,d,v,g]),r.push([p,d,m,h,v,g])}return r}_boostSat(t,e,i,r){const s=Math.max(t,e,i),o=Math.min(t,e,i),a=(s+o)/2;return[Math.min(255,Math.max(0,a+(t-a)*r)),Math.min(255,Math.max(0,a+(e-a)*r)),Math.min(255,Math.max(0,a+(i-a)*r))]}}class ZS extends pe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(20,Math.round(this.params.intensity/100*120)+20),a=document.createElement("canvas");a.width=r,a.height=s,a.getContext("2d").drawImage(i,0,0,r,s),t.clearRect(0,0,r,s);for(let u=0;u<s;u+=o)for(let c=0;c<r;c+=o){const f=Math.min(o,r-c),p=Math.min(o,s-u);t.save(),t.beginPath(),t.rect(c,u,f,p),t.clip(),t.transform(1.08,.04,-.04,1.08,c-c*.08+f*.02,u-u*.08+p*.02),t.drawImage(a,0,0,r,s),t.setTransform(1,0,0,1,0,0);const d=t.createLinearGradient(c,u,c+f,u+p);d.addColorStop(0,"rgba(255,255,255,0.18)"),d.addColorStop(.4,"rgba(255,255,255,0.04)"),d.addColorStop(1,"rgba(0,0,0,0.12)"),t.fillStyle=d,t.fillRect(c,u,f,p),t.restore(),t.strokeStyle="rgba(0,0,0,0.6)",t.lineWidth=1,t.strokeRect(c+.5,u+.5,f-1,p-1)}}}class KS extends pe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(16,Math.round(this.params.intensity/100*100)+16),a=o*.12,l=document.createElement("canvas");l.width=r,l.height=s;const u=l.getContext("2d");u.drawImage(i,0,0,r,s),u.getImageData(0,0,r,s).data,t.clearRect(0,0,r,s),t.filter="blur(2px)",t.drawImage(i,0,0,r,s),t.filter="none";for(let c=0;c<s;c+=o)for(let f=0;f<r;f+=o){const p=Math.min(o,r-f),d=Math.min(o,s-c),v=f+p/2,g=c+d/2;t.save(),t.beginPath(),this._roundRect(t,f+1,c+1,p-2,d-2,a),t.clip();const m=Math.sin(v/r*Math.PI*2)*o*.15,h=Math.cos(g/s*Math.PI*2)*o*.15;t.drawImage(l,m,h,r,s),t.fillStyle="rgba(255,255,255,0.06)",t.fillRect(f,c,p,d);const y=t.createLinearGradient(f,c,f,c+d*.4);y.addColorStop(0,"rgba(255,255,255,0.25)"),y.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=y,t.fillRect(f,c,p,d*.4),t.restore(),t.save(),t.beginPath(),this._roundRect(t,f+.5,c+.5,p-1,d-1,a),t.strokeStyle="rgba(255,255,255,0.25)",t.lineWidth=1,t.stroke(),t.restore()}}_roundRect(t,e,i,r,s,o){t.moveTo(e+o,i),t.lineTo(e+r-o,i),t.quadraticCurveTo(e+r,i,e+r,i+o),t.lineTo(e+r,i+s-o),t.quadraticCurveTo(e+r,i+s,e+r-o,i+s),t.lineTo(e+o,i+s),t.quadraticCurveTo(e,i+s,e,i+s-o),t.lineTo(e,i+o),t.quadraticCurveTo(e,i,e+o,i),t.closePath()}}class JS extends pe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(6,Math.round(this.params.intensity/100*60)+6),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;t.clearRect(0,0,r,s);const c=o*2,f=Math.sqrt(3)*o,p=c*.75,d=f,v=Math.ceil(r/p)+1,g=Math.ceil(s/d)+1;for(let m=0;m<g;m++)for(let h=0;h<v;h++){const y=h%2===0?0:f/2,_=h*p,S=m*d+y,[E,L,C]=this.getAvgColor(u,_-o,S-o,o*2,o*2,r,s);t.beginPath();for(let z=0;z<6;z++){const V=Math.PI/3*z-Math.PI/6,T=_+o*Math.cos(V),U=S+o*Math.sin(V);z===0?t.moveTo(T,U):t.lineTo(T,U)}t.closePath(),t.fillStyle=`rgb(${E|0},${L|0},${C|0})`,t.fill(),t.strokeStyle="rgba(0,0,0,0.2)",t.lineWidth=.5,t.stroke()}}}class QS extends pe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(10,Math.round(this.params.intensity/100*70)+10),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;t.clearRect(0,0,r,s),t.filter="blur(4px) brightness(0.5)",t.drawImage(i,0,0,r,s),t.filter="none";const c=Math.ceil(r/o)+1,f=Math.ceil(s/o)+1;for(let p=0;p<f;p++)for(let d=0;d<c;d++){const v=d*o+o/2,g=p*o+o/2,[m,h,y]=this.getAvgColor(u,v-o/2,g-o/2,o,o,r,s);t.save(),t.translate(v,g),t.beginPath();for(let S=0;S<10;S++){const E=Math.PI/5*S-Math.PI/2,L=S%2===0?o*.48:o*.22,C=Math.cos(E)*L,z=Math.sin(E)*L;S===0?t.moveTo(C,z):t.lineTo(C,z)}t.closePath();const _=t.createRadialGradient(-o*.15,-o*.15,0,0,0,o*.5);_.addColorStop(0,`rgba(${Math.min(255,(m|0)+60)},${Math.min(255,(h|0)+60)},${Math.min(255,(y|0)+60)},1)`),_.addColorStop(.5,`rgba(${m|0},${h|0},${y|0},0.9)`),_.addColorStop(1,`rgba(${Math.max(0,(m|0)-40)},${Math.max(0,(h|0)-40)},${Math.max(0,(y|0)-40)},0.8)`),t.fillStyle=_,t.fill(),t.strokeStyle="rgba(0,0,0,0.4)",t.lineWidth=.8,t.stroke(),t.restore()}}}class tb extends pe{constructor(t){super(t),this.params={mode:0,intensity:30,center:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,{mode:o,intensity:a,center:l}=this.params,u=l/100*r,c=l/100*s,f=Math.max(1,Math.round(a/100*24)),p=a/100*.08,d=a/100*.12;t.clearRect(0,0,r,s),t.globalAlpha=1/f;for(let v=0;v<f;v++){const g=v/(f-1||1)-.5;if(t.save(),t.translate(u,c),o===0)t.rotate(g*p*2);else{const m=1+g*d*2;t.scale(m,m)}t.translate(-u,-c),t.drawImage(i,0,0,r,s),t.restore()}t.globalAlpha=1}}class eb extends pe{constructor(t){super(t),this.params={length:30,direction:0}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,{length:o,direction:a}=this.params,l=Math.max(1,Math.round(o/100*30)),u=a*Math.PI/180,c=Math.cos(u),f=Math.sin(u),p=o/100*Math.max(r,s)*.15;t.clearRect(0,0,r,s),t.globalAlpha=1/l;for(let d=0;d<l;d++){const v=(d/(l-1||1)-.5)*2,g=c*v*p,m=f*v*p;t.drawImage(i,g,m,r,s)}t.globalAlpha=1}}class nb extends pe{constructor(t){super(t),this.params={strength:2.9}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,r=i.getImageData(0,0,t,e),s=r.data,o=new Uint8ClampedArray(s.length),a=Math.max(.1,this.params.strength/10*8+.5);for(let l=0;l<e;l++)for(let u=0;u<t;u++){const c=(l*t+u)*4,f=u>0?(l*t+(u-1))*4:c,p=l>0?((l-1)*t+u)*4:c,d=(s[c]-s[f]+s[c]-s[p])*a*.5+128,v=(s[c+1]-s[f+1]+s[c+1]-s[p+1])*a*.5+128,g=(s[c+2]-s[f+2]+s[c+2]-s[p+2])*a*.5+128,m=.299*d+.587*v+.114*g;o[c]=m,o[c+1]=m,o[c+2]=m,o[c+3]=255}for(let l=0;l<o.length;l+=4){const u=o[l];o[l]=Math.min(255,u*1.05),o[l+1]=Math.min(255,u*.97),o[l+2]=Math.min(255,u*.88)}r.data.set(o),i.putImageData(r,0,0)}updateParams(t){this.params={...this.params,strength:t.strength??this.params.strength},this.render()}}class ib extends pe{constructor(t){super(t),this.params={colorModel:2,pattern:2,period:12.7,angle:75,antiAlias:16,turbulence:0,blocksize:-1,angleBoost:0}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=Math.max(2,this.params.period),u=(this.params.angle+this.params.angleBoost*10)*Math.PI/180,c=this.params.turbulence*l*.3,f=Math.pow(2,this.params.blocksize),p=Math.cos(u),d=Math.sin(u),v=(m,h)=>{const y=Math.min(t-1,Math.max(0,Math.round(m))),S=(Math.min(e-1,Math.max(0,Math.round(h)))*t+y)*4;return[s[S],s[S+1],s[S+2],s[S+3]]},g=this.params.pattern;for(let m=0;m<e;m++)for(let h=0;h<t;h++){let y=0,_=0;if(c>0){const ot=Math.sin((h+m*.7)*.1)*c;y=ot,_=ot*.6}const S=(h+y)*p-(m+_)*d,E=(h+y)*d+(m+_)*p,L=Math.floor(S/l)*l+l*.5,C=Math.floor(E/l)*l+l*.5,z=L*p+C*d,V=-L*d+C*p,[T,U,P]=v(z,V),N=(.299*T+.587*U+.114*P)/255,M=(S%l+l)%l/l,Y=(E%l+l)%l/l,W=M-.5,Z=Y-.5;let st=!1;if(g===1)st=Math.abs(W)<N*.5*f;else if(g===0){const ot=N*.5*f;st=W*W+Z*Z<ot*ot}else{const ot=N*.5*f;st=Math.abs(W)<ot&&Math.abs(Z)<ot}const et=(m*t+h)*4;if(this.params.colorModel===0){const ot=st?0:255;a[et]=a[et+1]=a[et+2]=ot,a[et+3]=255}else if(this.params.colorModel===1){const ot=st?1:0;a[et]=Math.round(T*ot),a[et+1]=Math.round(U*ot),a[et+2]=Math.round(P*ot),a[et+3]=255}else{const ot=st?20:240;a[et]=a[et+1]=a[et+2]=ot,a[et+3]=255}}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class rb extends pe{constructor(t){super(t),this.params={render:2,detailRadius:10.6,detailThreshold:10,shadingSteps:10,shadingSmoothness:10,edgeThreshold:1,edgeWidth:2.5,edgeOpacity:.26}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=Math.max(2,Math.round(this.params.shadingSteps)),a=this.params.shadingSmoothness*.5,l=Math.max(1,Math.round(this.params.edgeWidth)),u=this.params.edgeThreshold*30,c=this.params.edgeOpacity,f=this.params.render,p=new Uint8ClampedArray(s.length);for(let y=0;y<s.length;y+=4){for(let _=0;_<3;_++){const S=s[y+_],E=Math.round(S/255*(o-1))/(o-1)*255;p[y+_]=Math.min(255,E+(S-E)*a/(a+5))}p[y+3]=255}const d=new Float32Array(t*e);for(let y=0;y<t*e;y++){const _=y*4;d[y]=.299*s[_]+.587*s[_+1]+.114*s[_+2]}const v=new Uint8ClampedArray(t*e);for(let y=1;y<e-1;y++)for(let _=1;_<t-1;_++){const S=y*t+_,E=-d[S-t-1]+d[S-t+1]-2*d[S-1]+2*d[S+1]-d[S+t-1]+d[S+t+1],L=-d[S-t-1]-2*d[S-t]-d[S-t+1]+d[S+t-1]+2*d[S+t]+d[S+t+1];v[S]=Math.sqrt(E*E+L*L)>u?255:0}const g=new Uint8ClampedArray(v.length);if(l>0)for(let y=0;y<e;y++)for(let _=0;_<t;_++){let S=!1;for(let E=-l;E<=l&&!S;E++)for(let L=-l;L<=l&&!S;L++){const C=_+L,z=y+E;C>=0&&C<t&&z>=0&&z<e&&v[z*t+C]&&(S=!0)}g[y*t+_]=S?255:0}const m=i.createImageData(t,e),h=m.data;for(let y=0;y<t*e;y++){const _=y*4,S=g[y]>0;if(f===0)h[_]=p[_],h[_+1]=p[_+1],h[_+2]=p[_+2],h[_+3]=255;else if(f===1){const E=S?0:255;h[_]=h[_+1]=h[_+2]=E,h[_+3]=255}else S?(h[_]=Math.round(p[_]*(1-c)),h[_+1]=Math.round(p[_+1]*(1-c)),h[_+2]=Math.round(p[_+2]*(1-c))):(h[_]=p[_],h[_+1]=p[_+1],h[_+2]=p[_+2]),h[_+3]=255}i.putImageData(m,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class sb extends pe{constructor(t){super(t),this.params={lightColor:50,lightRange:73,lightIntensity:50}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.lightIntensity/100,u=this.params.lightRange/100,c=this.params.lightColor/100,f=t*.5,p=e*.5,d=Math.max(t,e)*u*.8,v=200+c*55,g=180+(1-Math.abs(c-.5)*2)*40,m=255-c*80;for(let h=0;h<e;h++)for(let y=0;y<t;y++){const _=(h*t+y)*4,S=Math.sqrt((y-f)**2+(h-p)**2),E=Math.exp(-(S*S)/(2*d*d))*l*1.2,L=s[_],C=s[_+1],z=s[_+2],V=Math.min(1,E*v/255),T=Math.min(1,E*g/255),U=Math.min(1,E*m/255),P=L/255,N=C/255,M=z/255,Y=(2*P*V+P*P*(1-2*V))*255,W=(2*N*T+N*N*(1-2*T))*255,Z=(2*M*U+M*M*(1-2*U))*255;a[_]=Math.min(255,Math.max(0,L+(Y-L)*E*2)),a[_+1]=Math.min(255,Math.max(0,C+(W-C)*E*2)),a[_+2]=Math.min(255,Math.max(0,z+(Z-z)*E*2)),a[_+3]=255}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class ab extends pe{constructor(t){super(t),this.params={comicType:0,color1:300,color2:300,gridNum:.14}}hsvToRgb(t,e,i){t=(t%360+360)%360;const r=i*e,s=r*(1-Math.abs(t/60%2-1)),o=i-r;let a=0,l=0,u=0;return t<60?(a=r,l=s,u=0):t<120?(a=s,l=r,u=0):t<180?(a=0,l=r,u=s):t<240?(a=0,l=s,u=r):t<300?(a=s,l=0,u=r):(a=r,l=0,u=s),[(a+o)*255,(l+o)*255,(u+o)*255]}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=Math.max(2,Math.round(this.params.gridNum*30+3)),u=this.params.comicType===1,[c,f,p]=this.hsvToRgb(this.params.color1,.8,.9),[d,v,g]=this.hsvToRgb(this.params.color2,.6,.7);for(let m=0;m<e;m++)for(let h=0;h<t;h++){const y=(m*t+h)*4,_=(.299*s[y]+.587*s[y+1]+.114*s[y+2])/255,S=h%l/l,E=m%l/l,L=S-.5,C=E-.5,z=_*.55,V=L*L+C*C<z*z,U=(h+m)%l/l<(1-_)*.6&&_<.7,P=h%l===0||m%l===0;let N,M,Y;if(_>.85?N=M=Y=255:_>.5?V?N=M=Y=30:N=M=Y=240:_>.2?U?N=M=Y=20:N=M=Y=220:N=M=Y=15,P&&this.params.gridNum>.02&&(N=M=Y=Math.min(N,80)),u){const W=_;N=Math.round(N*(c/255*W+d/255*(1-W))*1.2),M=Math.round(M*(f/255*W+v/255*(1-W))*1.2),Y=Math.round(Y*(p/255*W+g/255*(1-W))*1.2)}a[y]=Math.min(255,Math.max(0,N)),a[y+1]=Math.min(255,Math.max(0,M)),a[y+2]=Math.min(255,Math.max(0,Y)),a[y+3]=255}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class ob extends pe{constructor(t){super(t),this.params={centerX:.5,centerY:.39,size:76,convergence:20}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.centerX*t,u=this.params.centerY*e,c=Math.max(1,this.params.size),f=this.params.convergence/100,p=(d,v)=>{const g=Math.min(t-1,Math.max(0,Math.round(d))),h=(Math.min(e-1,Math.max(0,Math.round(v)))*t+g)*4;return[s[h],s[h+1],s[h+2],s[h+3]]};for(let d=0;d<e;d++)for(let v=0;v<t;v++){const g=v-l,m=d-u,h=Math.sqrt(g*g+m*m),y=c*Math.max(t,e)/100;if(h<y&&h>0){const _=h/y,E=(f>0?Math.pow(_,1-f*.8):Math.pow(_,1+Math.abs(f)*1.5))*y/h,L=l+g*E,C=u+m*E,[z,V,T,U]=p(L,C),P=(d*t+v)*4;a[P]=z,a[P+1]=V,a[P+2]=T,a[P+3]=U}else{const _=(d*t+v)*4;a[_]=s[_],a[_+1]=s[_+1],a[_+2]=s[_+2],a[_+3]=s[_+3]}}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class lb extends pe{constructor(t){super(t),this.params={radius:100,waveSpeed:4.9,waveWidth:55.1,waveHeight:1,wavePhase:0}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=t*.5,u=e*.5,c=this.params.radius/100*Math.max(t,e),f=Math.max(1,this.params.waveWidth)/100*c,p=this.params.waveHeight*Math.min(t,e)*.02,d=this.params.wavePhase*Math.PI/180,v=(g,m)=>{const h=Math.min(t-1,Math.max(0,Math.round(g))),_=(Math.min(e-1,Math.max(0,Math.round(m)))*t+h)*4;return[s[_],s[_+1],s[_+2],s[_+3]]};for(let g=0;g<e;g++)for(let m=0;m<t;m++){const h=m-l,y=g-u,_=Math.sqrt(h*h+y*y);if(_<c&&_>0){const S=_/f*Math.PI*2-d,E=Math.sin(S)*p*(1-_/c),L=h/_,C=y/_,z=m+L*E,V=g+C*E,[T,U,P,N]=v(z,V),M=(g*t+m)*4;a[M]=T,a[M+1]=U,a[M+2]=P,a[M+3]=N}else{const S=(g*t+m)*4;a[S]=s[S],a[S+1]=s[S+1],a[S+2]=s[S+2],a[S+3]=s[S+3]}}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class cb extends pe{constructor(t){super(t),this.params={waveType:0,waveHeight:10,waveWidth:40,direction:90,waveSpeed:1,phase:0}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.direction*Math.PI/180,u=this.params.waveHeight*Math.min(t,e)*.01,c=Math.max(1,this.params.waveWidth)*Math.min(t,e)*.01,f=this.params.phase*Math.PI/180,p=Math.round(this.params.waveType),d=Math.cos(l),v=Math.sin(l),g=h=>{const y=(h%(Math.PI*2)+Math.PI*2)%(Math.PI*2);return p===1?y<Math.PI?1:-1:p===2?y<Math.PI?y/Math.PI*2-1:3-y/Math.PI*2:Math.sin(h)},m=(h,y)=>{const _=Math.min(t-1,Math.max(0,Math.round(h))),E=(Math.min(e-1,Math.max(0,Math.round(y)))*t+_)*4;return[s[E],s[E+1],s[E+2],s[E+3]]};for(let h=0;h<e;h++)for(let y=0;y<t;y++){const S=(y*d+h*v)/c*Math.PI*2-f,E=g(S)*u,L=y+E*v,C=h-E*d,[z,V,T,U]=m(L,C),P=(h*t+y)*4;a[P]=z,a[P+1]=V,a[P+2]=T,a[P+3]=U}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class ub extends pe{constructor(t){super(t),this.params={centerX:.5,centerY:.5,radius:80,angle:120,smoothness:60}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.centerX*t,u=this.params.centerY*e,c=this.params.radius/100*Math.max(t,e)*.5,f=this.params.angle*Math.PI/180,p=Math.max(1,this.params.smoothness)/100,d=(v,g)=>{const m=Math.floor(v),h=Math.floor(g),y=Math.min(t-1,m+1),_=Math.min(e-1,h+1),S=v-m,E=g-h,L=Math.max(0,m),C=Math.max(0,y),z=Math.max(0,h),V=Math.max(0,_),T=(z*t+L)*4,U=(z*t+C)*4,P=(V*t+L)*4,N=(V*t+C)*4;return[s[T]*(1-S)*(1-E)+s[U]*S*(1-E)+s[P]*(1-S)*E+s[N]*S*E,s[T+1]*(1-S)*(1-E)+s[U+1]*S*(1-E)+s[P+1]*(1-S)*E+s[N+1]*S*E,s[T+2]*(1-S)*(1-E)+s[U+2]*S*(1-E)+s[P+2]*(1-S)*E+s[N+2]*S*E,255]};for(let v=0;v<e;v++)for(let g=0;g<t;g++){const m=g-l,h=v-u,y=Math.sqrt(m*m+h*h);if(y<c){const _=1-Math.pow(y/c,p*2+.1),S=f*_,E=Math.cos(S),L=Math.sin(S),C=l+m*E-h*L,z=u+m*L+h*E,[V,T,U,P]=d(C,z),N=(v*t+g)*4;a[N]=V,a[N+1]=T,a[N+2]=U,a[N+3]=P}else{const _=(v*t+g)*4;a[_]=s[_],a[_+1]=s[_+1],a[_+2]=s[_+2],a[_+3]=s[_+3]}}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class fb extends pe{constructor(t){super(t),this.params={glowCenterX:.5,glowCenterY:.5,glowIntensity:50,glowDensity:60}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.glowCenterX*t,u=this.params.glowCenterY*e,c=this.params.glowIntensity/100,f=this.params.glowDensity/100,p=new Float32Array(t*e);for(let _=0;_<t*e;_++)p[_]=(.299*s[_*4]+.587*s[_*4+1]+.114*s[_*4+2])/255;const d=new Float32Array(t*e);let v=0;for(let _=1;_<e-1;_++)for(let S=1;S<t-1;S++){const E=_*t+S,L=-p[E-t-1]+p[E-t+1]-2*p[E-1]+2*p[E+1]-p[E+t-1]+p[E+t+1],C=-p[E-t-1]-2*p[E-t]-p[E-t+1]+p[E+t-1]+2*p[E+t]+p[E+t+1];d[E]=Math.sqrt(L*L+C*C),d[E]>v&&(v=d[E])}const g=Math.round(f*12+2),m=new Float32Array(t*e),h=new Float32Array(t*e);for(let _=0;_<e;_++)for(let S=0;S<t;S++){let E=0,L=0;for(let C=-g;C<=g;C++){const z=Math.min(t-1,Math.max(0,S+C));E+=d[_*t+z],L++}h[_*t+S]=E/L}for(let _=0;_<e;_++)for(let S=0;S<t;S++){let E=0,L=0;for(let C=-g;C<=g;C++){const z=Math.min(e-1,Math.max(0,_+C));E+=h[z*t+S],L++}m[_*t+S]=E/L}const y=Math.sqrt(l*l+u*u)*1.5;for(let _=0;_<e;_++)for(let S=0;S<t;S++){const E=(_*t+S)*4,L=_*t+S,C=v>0?m[L]/v:0,z=S-l,V=_-u,T=1-Math.sqrt(z*z+V*V)/y,U=C*c*Math.max(0,T)*3;a[E]=Math.min(255,s[E]+U*255),a[E+1]=Math.min(255,s[E+1]+U*255),a[E+2]=Math.min(255,s[E+2]+U*255),a[E+3]=255}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class hb extends pe{constructor(t){super(t),this.params={shape:0,centerX:.5,centerY:.5,magnification:108,size:154,feather:71}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=new Uint8ClampedArray(s),a=this.params.centerX*t,l=this.params.centerY*e,u=this.params.size/100*Math.min(t,e)*.5,c=this.params.magnification/100,f=this.params.feather/100,p=Math.round(this.params.shape)===0,d=(g,m)=>{const h=Math.floor(g),y=Math.floor(m),_=Math.min(t-1,h+1),S=Math.min(e-1,y+1),E=g-h,L=m-y,C=Math.max(0,h),z=Math.max(0,y),V=Math.min(t-1,_),T=Math.min(e-1,S),U=(z*t+C)*4,P=(z*t+V)*4,N=(T*t+C)*4,M=(T*t+V)*4;return[s[U]*(1-E)*(1-L)+s[P]*E*(1-L)+s[N]*(1-E)*L+s[M]*E*L,s[U+1]*(1-E)*(1-L)+s[P+1]*E*(1-L)+s[N+1]*(1-E)*L+s[M+1]*E*L,s[U+2]*(1-E)*(1-L)+s[P+2]*E*(1-L)+s[N+2]*(1-E)*L+s[M+2]*E*L,255]};for(let g=0;g<e;g++)for(let m=0;m<t;m++){const h=m-a,y=g-l;let _=0;if(p?_=Math.sqrt(h*h+y*y)/u:_=Math.max(Math.abs(h),Math.abs(y))/u,_>1)continue;const S=1-f,E=_<S?1:1-(_-S)/(f+.001),L=1/c,C=a+h*L,z=l+y*L,[V,T,U]=d(C,z),P=(g*t+m)*4,N=o[P],M=o[P+1],Y=o[P+2];o[P]=Math.round(V*E+N*(1-E)),o[P+1]=Math.round(T*E+M*(1-E)),o[P+2]=Math.round(U*E+Y*(1-E)),o[P+3]=255}const v=i.createImageData(t,e);v.data.set(o),i.putImageData(v,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class db extends pe{constructor(t){super(t),this.params={threshold:.2,strength:1.82,length:1,centerX:.5,centerY:.5}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.centerX*t,u=this.params.centerY*e,c=this.params.threshold,f=this.params.strength,p=this.params.length,d=new Float32Array(t*e);for(let y=0;y<t*e;y++){const _=(.299*s[y*4]+.587*s[y*4+1]+.114*s[y*4+2])/255;d[y]=_>c?(_-c)/(1-c):0}const v=Math.round(p*60+20),g=.97,m=new Float32Array(t*e);for(let y=0;y<e;y++)for(let _=0;_<t;_++){let S=0,E=_,L=y;const C=(l-_)/v,z=(u-y)/v;let V=1;for(let T=0;T<v;T++){const U=Math.min(t-1,Math.max(0,Math.round(E))),P=Math.min(e-1,Math.max(0,Math.round(L)));S+=d[P*t+U]*V,V*=g,E+=C,L+=z}m[y*t+_]=S/v}let h=0;for(let y=0;y<m.length;y++)m[y]>h&&(h=m[y]);if(h>0)for(let y=0;y<m.length;y++)m[y]/=h;for(let y=0;y<t*e;y++){const _=y*4,S=m[y]*f;a[_]=Math.min(255,s[_]+S*255),a[_+1]=Math.min(255,s[_+1]+S*245),a[_+2]=Math.min(255,s[_+2]+S*220),a[_+3]=255}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class pb extends pe{constructor(t){super(t),this.params={threshold:60,glowRadius:40,glowStrength:60,glowColor:0}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.threshold/100,u=Math.round(this.params.glowRadius/100*Math.min(t,e)*.08+2),c=this.params.glowStrength/100,f=Math.round(this.params.glowColor),p=f===1?1:f===2?.7:1,d=f===1?.9:f===2?.85:1,v=f===1?.6:1,g=new Float32Array(t*e*3);for(let _=0;_<t*e;_++){const S=s[_*4]/255,E=s[_*4+1]/255,L=s[_*4+2]/255,C=.299*S+.587*E+.114*L,z=C>l?(C-l)/(1-l+.001):0;g[_*3]=S*z,g[_*3+1]=E*z,g[_*3+2]=L*z}const m=new Float32Array(t*e*3),h=new Float32Array(t*e*3),y=g.slice();for(let _=0;_<e;_++)for(let S=0;S<t;S++){let E=0,L=0,C=0,z=0;for(let T=-u;T<=u;T++){const U=Math.min(t-1,Math.max(0,S+T)),P=(_*t+U)*3;E+=y[P],L+=y[P+1],C+=y[P+2],z++}const V=(_*t+S)*3;h[V]=E/z,h[V+1]=L/z,h[V+2]=C/z}for(let _=0;_<e;_++)for(let S=0;S<t;S++){let E=0,L=0,C=0,z=0;for(let T=-u;T<=u;T++){const P=(Math.min(e-1,Math.max(0,_+T))*t+S)*3;E+=h[P],L+=h[P+1],C+=h[P+2],z++}const V=(_*t+S)*3;m[V]=E/z,m[V+1]=L/z,m[V+2]=C/z}for(let _=0;_<t*e;_++){const S=_*4,E=m[_*3]*p*c,L=m[_*3+1]*d*c,C=m[_*3+2]*v*c,z=s[S]/255,V=s[S+1]/255,T=s[S+2]/255;a[S]=Math.min(255,Math.round((1-(1-z)*(1-E))*255)),a[S+1]=Math.min(255,Math.round((1-(1-V)*(1-L))*255)),a[S+2]=Math.min(255,Math.round((1-(1-T)*(1-C))*255)),a[S+3]=255}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}const mb={class:"plugin-preview"},gb={class:"app-body"},_b={__name:"PluginPreview",setup(n){const t=Zt("wave-blur"),e=Zt(!1),i=Zt(!1),r=Zt(!1),s=Zt(!0),o=Zt(null),a=Zt(0),l=Zt(0);let u=null,c=null;const f={"wave-blur":{name:"WaveBlurring",nameZh:"波形模糊",EffectClass:null,defaults:{horizontalChromatic:70,distortion:50,speed:60,size:60,blur:60},params:[{key:"horizontalChromatic",label:"AdjustHorizontalChromatic",desc:"水平色差强度",min:0,max:100},{key:"distortion",label:"AdjustDistortion",desc:"扭曲程度",min:0,max:100},{key:"speed",label:"AdjustSpeed",desc:"动画速度",min:0,max:100},{key:"size",label:"AdjustSize",desc:"波形尺寸",min:0,max:100},{key:"blur",label:"AdjustBlur",desc:"模糊强度",min:0,max:100}]},"directional-blur":{name:"Directional Blur",nameZh:"定向模糊",EffectClass:eb,defaults:{length:30,direction:0},params:[{key:"length",label:"Blur Length",desc:"模糊长度",min:0,max:100},{key:"direction",label:"Blur Direction",desc:"模糊方向（角度，0=水平）",min:0,max:360,step:1}]},"radial-blur":{name:"Radial Blur",nameZh:"径向模糊",EffectClass:tb,defaults:{mode:0,intensity:30,center:50},params:[{key:"mode",label:"Mode",desc:"0 = 旋转模糊  /  1 = 缩放模糊",min:0,max:1,step:1},{key:"intensity",label:"Intensity",desc:"模糊强度",min:0,max:100},{key:"center",label:"Center",desc:"中心位置 (0=左上  100=右下)",min:0,max:100}]},"basic-mosaic":{name:"Basic Mosaic",nameZh:"基础马赛克",EffectClass:WS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"马赛克块大小",min:1,max:100}]},"blur-mosaic-fx":{name:"Blur Mosaic",nameZh:"模糊马赛克",EffectClass:XS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"模糊程度",min:1,max:100}]},"brick-mosaic":{name:"Brick Mosaic",nameZh:"砖块马赛克",EffectClass:$S,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"砖块大小",min:1,max:100}]},"colorful-mosaic-1":{name:"Colorful MosaicI",nameZh:"彩色马赛克 I",EffectClass:qS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"晶格大小",min:1,max:100}]},"colorful-mosaic-2":{name:"Colorful MosaicII",nameZh:"彩色马赛克 II",EffectClass:jS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"气泡大小",min:1,max:100}]},"colorful-mosaic-3":{name:"Colorful MosaicIII",nameZh:"彩色马赛克 III",EffectClass:YS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"三角片大小",min:1,max:100}]},"glass-mosaic-1":{name:"Glass MosaicI",nameZh:"玻璃马赛克 I",EffectClass:ZS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"玻璃格大小",min:1,max:100}]},"glass-mosaic-2":{name:"Glass MosaicII",nameZh:"玻璃马赛克 II",EffectClass:KS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"磨砂格大小",min:1,max:100}]},"hexagon-mosaic":{name:"Hexagon Mosaic",nameZh:"六边形马赛克",EffectClass:JS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"六边形大小",min:1,max:100}]},"star-mosaic":{name:"Star Mosaic",nameZh:"星形马赛克",EffectClass:QS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"星形大小",min:1,max:100}]},engrave:{name:"Engrave",nameZh:"雕刻",EffectClass:nb,defaults:{strength:2.9},params:[{key:"strength",label:"Strength",desc:"雕刻强度",min:0,max:10,step:.1}]},newsprint:{name:"Newsprint",nameZh:"报纸印刷",EffectClass:ib,defaults:{colorModel:2,pattern:2,period:12.7,angle:75,antiAlias:16,turbulence:0,blocksize:-1,angleBoost:0},params:[{key:"colorModel",label:"ColorModel",desc:"颜色模式 (0=黑白 1=彩色 2=灰度半调)",min:0,max:2,step:1},{key:"pattern",label:"Pattern",desc:"图案类型 (0=圆点 1=线条 2=方块)",min:0,max:2,step:1},{key:"period",label:"Period",desc:"网格周期大小",min:1,max:30,step:.1},{key:"angle",label:"Angle",desc:"网格旋转角度",min:0,max:180,step:1},{key:"turbulence",label:"Turbulence",desc:"扰动变形",min:0,max:5,step:.1},{key:"blocksize",label:"Blocksize",desc:"图案缩放 (-2~2)",min:-2,max:2,step:.1},{key:"angleBoost",label:"AngleBoost",desc:"额外角度叠加",min:0,max:5,step:.1}]},cartoon:{name:"Cartoon",nameZh:"卡通",EffectClass:rb,defaults:{render:2,detailRadius:10.6,detailThreshold:10,shadingSteps:10,shadingSmoothness:10,edgeThreshold:1,edgeWidth:2.5,edgeOpacity:.26},params:[{key:"render",label:"Render",desc:"渲染模式 (0=仅填色 1=仅边缘 2=填色+边缘)",min:0,max:2,step:1},{key:"detailRadius",label:"DetailRadius",desc:"细节平滑半径",min:1,max:30,step:.1},{key:"detailThreshold",label:"DetailThreshold",desc:"细节阈值",min:0,max:20,step:.1},{key:"shadingSteps",label:"ShadingSteps",desc:"色阶数量",min:2,max:16,step:1},{key:"shadingSmoothness",label:"ShadingSmoothness",desc:"色阶过渡平滑",min:0,max:20,step:.1},{key:"edgeThreshold",label:"EdgeThreshold",desc:"边缘检测阈值",min:0,max:5,step:.1},{key:"edgeWidth",label:"EdgeWidth",desc:"边缘线宽度",min:0,max:8,step:.1},{key:"edgeOpacity",label:"EdgeOpacity",desc:"边缘线透明度",min:0,max:1,step:.01}]},"film-soft-light":{name:"FilmSoftLight",nameZh:"胶片柔光",EffectClass:sb,defaults:{lightColor:50,lightRange:73,lightIntensity:50},params:[{key:"lightColor",label:"LightColor",desc:"光色偏移 (0=冷蓝 100=暖橙)",min:0,max:100},{key:"lightRange",label:"LightRange",desc:"光晕扩散范围",min:0,max:100},{key:"lightIntensity",label:"LightIntensity",desc:"光晕强度",min:0,max:100}]},comic:{name:"Comic",nameZh:"漫画",EffectClass:ab,defaults:{comicType:0,color1:300,color2:300,gridNum:.14},params:[{key:"comicType",label:"ComicType",desc:"漫画类型 (0=黑白 1=彩色)",min:0,max:1,step:1},{key:"color1",label:"Color1",desc:"高光色相 (0-360°)",min:0,max:360,step:1},{key:"color2",label:"Color2",desc:"阴影色相 (0-360°)",min:0,max:360,step:1},{key:"gridNum",label:"GridNum",desc:"网格密度",min:0,max:1,step:.01}]},"cc-lens":{name:"CCLens",nameZh:"鱼眼",EffectClass:ob,defaults:{centerX:.5,centerY:.39,size:76,convergence:20},params:[{key:"centerX",label:"CenterX",desc:"镜头中心 X",min:0,max:1,step:.01},{key:"centerY",label:"CenterY",desc:"镜头中心 Y",min:0,max:1,step:.01},{key:"size",label:"Size",desc:"镜头大小",min:0,max:200},{key:"convergence",label:"Convergence",desc:"汇聚 (+凸起 / -凹陷)",min:-100,max:100}]},ripple:{name:"Ripple",nameZh:"波纹",EffectClass:lb,defaults:{radius:100,waveSpeed:4.9,waveWidth:55.1,waveHeight:1,wavePhase:0},params:[{key:"radius",label:"半径",desc:"波纹影响半径",min:0,max:200},{key:"waveWidth",label:"波形宽度",desc:"相邻波峰间距",min:1,max:100,step:.1},{key:"waveHeight",label:"波形高度",desc:"波纹位移幅度",min:0,max:5,step:.1},{key:"wavePhase",label:"波纹相",desc:"波纹起始相位 (°)",min:0,max:360,step:1}]},"wave-warp":{name:"WaveWarp",nameZh:"波形变形",EffectClass:cb,defaults:{waveType:0,waveHeight:10,waveWidth:40,direction:90,waveSpeed:1,phase:0},params:[{key:"waveType",label:"波浪类型",desc:"0=正弦 1=方波 2=三角",min:0,max:2,step:1},{key:"waveHeight",label:"波形高度",desc:"位移幅度",min:0,max:100,step:.5},{key:"waveWidth",label:"波形宽度",desc:"波长（像素比）",min:1,max:200,step:1},{key:"direction",label:"方向",desc:"波形传播方向 (°)",min:0,max:360,step:1},{key:"phase",label:"相位",desc:"波形起始相位 (°)",min:0,max:360,step:1}]},"twirl-distort":{name:"TwirlDistort",nameZh:"旋转扭曲",EffectClass:ub,defaults:{centerX:.5,centerY:.5,radius:80,angle:120,smoothness:60},params:[{key:"centerX",label:"CenterX",desc:"旋转中心 X",min:0,max:1,step:.01},{key:"centerY",label:"CenterY",desc:"旋转中心 Y",min:0,max:1,step:.01},{key:"radius",label:"Radius",desc:"影响半径",min:0,max:200},{key:"angle",label:"Angle",desc:"扭曲角度 (°)",min:-360,max:360,step:1},{key:"smoothness",label:"Smoothness",desc:"边缘过渡平滑度",min:0,max:100}]},"edge-glow":{name:"EdgeGlow",nameZh:"边缘辉光",EffectClass:fb,defaults:{glowCenterX:.5,glowCenterY:.5,glowIntensity:50,glowDensity:60},params:[{key:"glowCenterX",label:"GlowCenterX",desc:"光源中心 X",min:0,max:1,step:.01},{key:"glowCenterY",label:"GlowCenterY",desc:"光源中心 Y",min:0,max:1,step:.01},{key:"glowIntensity",label:"Intensity",desc:"辉光亮度",min:0,max:100},{key:"glowDensity",label:"Density",desc:"辉光扩散密度",min:0,max:100}]},enlargement:{name:"Enlargement",nameZh:"局部放大",EffectClass:hb,defaults:{shape:0,centerX:.5,centerY:.5,magnification:108,size:154,feather:71},params:[{key:"shape",label:"Shape",desc:"形状 (0=圆形 1=方形)",min:0,max:1,step:1},{key:"centerX",label:"CenterX",desc:"放大中心 X",min:0,max:1,step:.01},{key:"centerY",label:"CenterY",desc:"放大中心 Y",min:0,max:1,step:.01},{key:"magnification",label:"Magnification",desc:"放大倍数 (%)",min:50,max:400},{key:"size",label:"Size",desc:"镜头大小",min:0,max:300},{key:"feather",label:"Feather",desc:"边缘羽化",min:0,max:100}]},"shaft-light":{name:"ShaftLight",nameZh:"光柱",EffectClass:db,defaults:{threshold:.2,strength:1.82,length:1,centerX:.5,centerY:.5},params:[{key:"threshold",label:"Threshold",desc:"亮度提取阈值",min:0,max:1,step:.01},{key:"strength",label:"Strength",desc:"光柱强度",min:0,max:5,step:.01},{key:"length",label:"Length",desc:"光线延伸长度",min:0,max:2,step:.01},{key:"centerX",label:"CenterX",desc:"光源中心 X",min:0,max:1,step:.01},{key:"centerY",label:"CenterY",desc:"光源中心 Y",min:0,max:1,step:.01}]},"overall-glow":{name:"OverallGlow",nameZh:"泛光",EffectClass:pb,defaults:{threshold:60,glowRadius:40,glowStrength:60,glowColor:0},params:[{key:"threshold",label:"Threshold",desc:"高光提取阈值",min:0,max:100},{key:"glowRadius",label:"GlowRadius",desc:"光晕扩散半径",min:0,max:100},{key:"glowStrength",label:"GlowStrength",desc:"光晕强度",min:0,max:100},{key:"glowColor",label:"GlowColor",desc:"光晕色调 (0=白 1=暖 2=冷)",min:0,max:2,step:1}]}},p=de(()=>f[t.value]||null),d=de(()=>{var N;return((N=p.value)==null?void 0:N.params)||[]}),v=de(()=>{for(const N of la)if(N.plugins.find(M=>M.id===t.value))return N.name;return""}),g=Zt({...f["wave-blur"].defaults});Rr(g,N=>{u==null||u.updateParams(N)},{deep:!0}),Il(()=>{gn(()=>{y("wave-blur"),S()})});function m(N,M){const Y=f[N];if(!Y||!M)return null;if(N==="wave-blur"){const W=new VS(M,null);return W.init(),W}else if(Y.EffectClass)return new Y.EffectClass(M);return null}function h(){const N=o.value;return N?s.value?N.webglCanvas:N.canvas2d:null}function y(N){var Y;(Y=u==null?void 0:u.destroy)==null||Y.call(u),u=null,s.value=N==="wave-blur";const M=h();u=m(N,M),c&&(u==null||u.loadImage(c)),e.value&&_()}function _(){var M;const N=(M=o.value)==null?void 0:M.originalCanvas;!N||!c||(N.width=a.value||c.naturalWidth||900,N.height=l.value||c.naturalHeight||600,N.getContext("2d").drawImage(c,0,0,N.width,N.height))}function S(){E()}function E(){const Y=document.createElement("canvas");Y.width=1200,Y.height=675;const W=Y.getContext("2d"),Z=W.createLinearGradient(0,0,0,675);Z.addColorStop(0,"#06060f"),Z.addColorStop(.5,"#0a0716"),Z.addColorStop(1,"#000005"),W.fillStyle=Z,W.fillRect(0,0,1200,675);const st=[{x:.18*1200,y:.28*675,r:380,c0:"rgba(110,50,220,0.45)"},{x:.78*1200,y:.55*675,r:340,c0:"rgba(220,65,55,0.42)"},{x:.52*1200,y:.85*675,r:300,c0:"rgba(30,175,145,0.38)"},{x:.88*1200,y:.1*675,r:220,c0:"rgba(210,155,25,0.38)"},{x:.42*1200,y:.18*675,r:180,c0:"rgba(60,130,255,0.32)"}];for(const H of st){const nt=W.createRadialGradient(H.x,H.y,0,H.x,H.y,H.r);nt.addColorStop(0,H.c0),nt.addColorStop(1,"rgba(0,0,0,0)"),W.fillStyle=nt,W.fillRect(0,0,1200,675)}const et=W.createLinearGradient(0,675*.52,0,675*.72);et.addColorStop(0,"rgba(180,80,255,0.18)"),et.addColorStop(1,"rgba(0,0,0,0)"),W.fillStyle=et,W.fillRect(0,675*.52,1200,675*.5),W.save();const ot={x:1200/2,y:675*.58};W.strokeStyle="rgba(180,80,255,0.18)",W.lineWidth=1;for(let H=0;H<=12;H++){const nt=H/12,rt=675*.58+(675-675*.58)*(nt*nt),ft=1200/2*(.02+.98*nt*nt);W.beginPath(),W.moveTo(ot.x-ft,rt),W.lineTo(ot.x+ft,rt),W.stroke()}for(let H=-8;H<=8;H++){const nt=600+H*75;W.beginPath(),W.moveTo(ot.x,ot.y),W.lineTo(nt,675),W.stroke()}W.restore();const F=L(42);for(let H=0;H<160;H++){const nt=F()*1200,rt=F()*675*.62,ft=F()*1.4+.3,ht=F()*.6+.2;W.beginPath(),W.arc(nt,rt,ft,0,Math.PI*2),W.fillStyle=`rgba(255,255,255,${ht.toFixed(2)})`,W.fill()}const O=1200/2,ct=675*.58;for(let H=5;H>=1;H--){const nt=W.createRadialGradient(O,ct,0,O,ct,90+H*28);nt.addColorStop(0,`rgba(255,80,180,${.06*H})`),nt.addColorStop(1,"rgba(255,80,180,0)"),W.fillStyle=nt,W.fillRect(0,0,1200,675)}const Q=W.createRadialGradient(O,ct,0,O,ct,68);Q.addColorStop(0,"#fff9f4"),Q.addColorStop(.3,"#ffd580"),Q.addColorStop(.7,"#ff7040"),Q.addColorStop(1,"#e0205a"),W.fillStyle=Q,W.beginPath(),W.arc(O,ct,68,0,Math.PI*2),W.fill(),W.save(),W.beginPath(),W.arc(O,ct,68,0,Math.PI*2),W.clip(),W.strokeStyle="rgba(6,6,15,0.4)",W.lineWidth=5;for(let H=ct-68;H<=ct+68;H+=11)W.beginPath(),W.moveTo(O-70,H),W.lineTo(O+70,H),W.stroke();W.restore(),W.strokeStyle="rgba(100,200,255,0.15)",W.lineWidth=1,W.beginPath(),W.moveTo(1200*.78,675*.12),W.lineTo(1200*.92,675*.32),W.lineTo(1200*.78,675*.52),W.lineTo(1200*.64,675*.32),W.closePath(),W.stroke(),W.strokeStyle="rgba(180,80,255,0.2)",W.lineWidth=1,W.strokeRect(1200*.06,675*.1,1200*.2,675*.35),W.strokeStyle="rgba(180,80,255,0.1)",W.lineWidth=.5,W.strokeRect(1200*.08,675*.13,1200*.16,675*.29),W.strokeStyle="rgba(30,210,160,0.18)",W.lineWidth=1,W.strokeRect(1200*.75,675*.68,1200*.18,675*.22),W.fillStyle="rgba(0,0,0,0.12)";for(let H=0;H<675;H+=3)W.fillRect(0,H,1200,1);W.save(),W.textBaseline="alphabetic",W.font='bold 110px "Space Grotesk","Inter",sans-serif',W.textAlign="left";const D=W.createLinearGradient(1200*.08,0,1200*.5,0);D.addColorStop(0,"rgba(255,255,255,0.22)"),D.addColorStop(1,"rgba(255,255,255,0.06)"),W.fillStyle=D,W.fillText("KSkr",1200*.08,675*.46),W.restore(),W.save(),W.font='18px "Inter",sans-serif',W.textAlign="left",W.textBaseline="alphabetic",W.fillStyle="rgba(255,255,255,0.1)",W.fillText("AE PLUGIN PREVIEW  ·  上传图片以开始预览效果",1200*.08,675*.54),W.restore(),W.save(),W.font="13px monospace",W.textAlign="right",W.textBaseline="alphabetic",W.fillStyle="rgba(255,255,255,0.08)",W.fillText("KSkr Studio",1200*.97,675*.96),W.restore();const K=new Image;K.onload=()=>C(K),K.src=Y.toDataURL()}function L(N){return function(){N|=0,N=N+1831565813|0;let M=Math.imul(N^N>>>15,1|N);return M=M+Math.imul(M^M>>>7,61|M)^M,((M^M>>>14)>>>0)/4294967296}}function C(N){c=N,a.value=N.naturalWidth||N.width||900,l.value=N.naturalHeight||N.height||600,r.value=!0,gn(()=>{u==null||u.loadImage(N),e.value&&_()})}function z(N){var W,Z,st,et,ot;const M=((Z=(W=N==null?void 0:N.target)==null?void 0:W.files)==null?void 0:Z[0])||((et=(st=N==null?void 0:N.dataTransfer)==null?void 0:st.files)==null?void 0:et[0])||((ot=N==null?void 0:N.files)==null?void 0:ot[0]);if(!M)return;const Y=new FileReader;Y.onload=F=>{const O=new Image;O.onload=()=>C(O),O.src=F.target.result},Y.readAsDataURL(M)}function V(){var N;g.value={...((N=p.value)==null?void 0:N.defaults)||{}}}function T(){e.value=!e.value,i.value=!1,e.value&&c&&gn(()=>_())}function U(){i.value=!i.value,i.value&&c&&_()}function P(N){t.value=N.id;const M=f[N.id];M&&(g.value={...M.defaults}),gn(()=>y(N.id))}return(N,M)=>{var Y;return Pt(),It("div",mb,[j("div",gb,[be($0,{onSelectPlugin:P}),p.value?(Pt(),Ah(f_,{key:0,plugin:p.value,params:d.value,modelValue:g.value,"onUpdate:modelValue":M[0]||(M[0]=W=>g.value=W),compareMode:e.value,onReset:V,onUpload:z,onToggleCompare:T},null,8,["plugin","params","modelValue","compareMode"])):Jt("",!0),be(T_,{ref_key:"previewArea",ref:o,compareMode:e.value,hasImage:r.value,isWebGL:s.value,showingOriginal:i.value,imageWidth:a.value,imageHeight:l.value,currentCategory:v.value,currentPlugin:((Y=p.value)==null?void 0:Y.name)||"",onUpload:z,onToggleOriginal:U},null,8,["compareMode","hasImage","isWebGL","showingOriginal","imageWidth","imageHeight","currentCategory","currentPlugin"])])])}}},vb=Ai(_b,[["__scopeId","data-v-bd3edc46"]]);var na=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xb(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function ia(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Td={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(n,t){(function(e){n.exports=e()})(function(){return function e(i,r,s){function o(u,c){if(!r[u]){if(!i[u]){var f=typeof ia=="function"&&ia;if(!c&&f)return f(u,!0);if(a)return a(u,!0);var p=new Error("Cannot find module '"+u+"'");throw p.code="MODULE_NOT_FOUND",p}var d=r[u]={exports:{}};i[u][0].call(d.exports,function(v){var g=i[u][1][v];return o(g||v)},d,d.exports,e,i,r,s)}return r[u].exports}for(var a=typeof ia=="function"&&ia,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(e,i,r){var s=e("./utils"),o=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var u,c,f,p,d,v,g,m=[],h=0,y=l.length,_=y,S=s.getTypeOf(l)!=="string";h<l.length;)_=y-h,f=S?(u=l[h++],c=h<y?l[h++]:0,h<y?l[h++]:0):(u=l.charCodeAt(h++),c=h<y?l.charCodeAt(h++):0,h<y?l.charCodeAt(h++):0),p=u>>2,d=(3&u)<<4|c>>4,v=1<_?(15&c)<<2|f>>6:64,g=2<_?63&f:64,m.push(a.charAt(p)+a.charAt(d)+a.charAt(v)+a.charAt(g));return m.join("")},r.decode=function(l){var u,c,f,p,d,v,g=0,m=0,h="data:";if(l.substr(0,h.length)===h)throw new Error("Invalid base64 input, it looks like a data url.");var y,_=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&_--,l.charAt(l.length-2)===a.charAt(64)&&_--,_%1!=0)throw new Error("Invalid base64 input, bad content length.");for(y=o.uint8array?new Uint8Array(0|_):new Array(0|_);g<l.length;)u=a.indexOf(l.charAt(g++))<<2|(p=a.indexOf(l.charAt(g++)))>>4,c=(15&p)<<4|(d=a.indexOf(l.charAt(g++)))>>2,f=(3&d)<<6|(v=a.indexOf(l.charAt(g++))),y[m++]=u,d!==64&&(y[m++]=c),v!==64&&(y[m++]=f);return y}},{"./support":30,"./utils":32}],2:[function(e,i,r){var s=e("./external"),o=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function u(c,f,p,d,v){this.compressedSize=c,this.uncompressedSize=f,this.crc32=p,this.compression=d,this.compressedContent=v}u.prototype={getContentWorker:function(){var c=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),f=this;return c.on("end",function(){if(this.streamInfo.data_length!==f.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),c},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},u.createWorkerFrom=function(c,f,p){return c.pipe(new a).pipe(new l("uncompressedSize")).pipe(f.compressWorker(p)).pipe(new l("compressedSize")).withStreamInfo("compression",f)},i.exports=u},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,i,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,i,r){var s=e("./utils"),o=function(){for(var a,l=[],u=0;u<256;u++){a=u;for(var c=0;c<8;c++)a=1&a?3988292384^a>>>1:a>>>1;l[u]=a}return l}();i.exports=function(a,l){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?function(u,c,f,p){var d=o,v=p+f;u^=-1;for(var g=p;g<v;g++)u=u>>>8^d[255&(u^c[g])];return-1^u}(0|l,a,a.length,0):function(u,c,f,p){var d=o,v=p+f;u^=-1;for(var g=p;g<v;g++)u=u>>>8^d[255&(u^c.charCodeAt(g))];return-1^u}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(e,i,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,i,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),i.exports={Promise:s}},{lie:37}],7:[function(e,i,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=e("pako"),a=e("./utils"),l=e("./stream/GenericWorker"),u=s?"uint8array":"array";function c(f,p){l.call(this,"FlateWorker/"+f),this._pako=null,this._pakoAction=f,this._pakoOptions=p,this.meta={}}r.magic="\b\0",a.inherits(c,l),c.prototype.processChunk=function(f){this.meta=f.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(u,f.data),!1)},c.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},c.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},c.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var f=this;this._pako.onData=function(p){f.push({data:p,meta:f.meta})}},r.compressWorker=function(f){return new c("Deflate",f)},r.uncompressWorker=function(){return new c("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,i,r){function s(d,v){var g,m="";for(g=0;g<v;g++)m+=String.fromCharCode(255&d),d>>>=8;return m}function o(d,v,g,m,h,y){var _,S,E=d.file,L=d.compression,C=y!==u.utf8encode,z=a.transformTo("string",y(E.name)),V=a.transformTo("string",u.utf8encode(E.name)),T=E.comment,U=a.transformTo("string",y(T)),P=a.transformTo("string",u.utf8encode(T)),N=V.length!==E.name.length,M=P.length!==T.length,Y="",W="",Z="",st=E.dir,et=E.date,ot={crc32:0,compressedSize:0,uncompressedSize:0};v&&!g||(ot.crc32=d.crc32,ot.compressedSize=d.compressedSize,ot.uncompressedSize=d.uncompressedSize);var F=0;v&&(F|=8),C||!N&&!M||(F|=2048);var O=0,ct=0;st&&(O|=16),h==="UNIX"?(ct=798,O|=function(D,K){var H=D;return D||(H=K?16893:33204),(65535&H)<<16}(E.unixPermissions,st)):(ct=20,O|=function(D){return 63&(D||0)}(E.dosPermissions)),_=et.getUTCHours(),_<<=6,_|=et.getUTCMinutes(),_<<=5,_|=et.getUTCSeconds()/2,S=et.getUTCFullYear()-1980,S<<=4,S|=et.getUTCMonth()+1,S<<=5,S|=et.getUTCDate(),N&&(W=s(1,1)+s(c(z),4)+V,Y+="up"+s(W.length,2)+W),M&&(Z=s(1,1)+s(c(U),4)+P,Y+="uc"+s(Z.length,2)+Z);var Q="";return Q+=`
\0`,Q+=s(F,2),Q+=L.magic,Q+=s(_,2),Q+=s(S,2),Q+=s(ot.crc32,4),Q+=s(ot.compressedSize,4),Q+=s(ot.uncompressedSize,4),Q+=s(z.length,2),Q+=s(Y.length,2),{fileRecord:f.LOCAL_FILE_HEADER+Q+z+Y,dirRecord:f.CENTRAL_FILE_HEADER+s(ct,2)+Q+s(U.length,2)+"\0\0\0\0"+s(O,4)+s(m,4)+z+Y+U}}var a=e("../utils"),l=e("../stream/GenericWorker"),u=e("../utf8"),c=e("../crc32"),f=e("../signature");function p(d,v,g,m){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=v,this.zipPlatform=g,this.encodeFileName=m,this.streamFiles=d,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(p,l),p.prototype.push=function(d){var v=d.meta.percent||0,g=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(d):(this.bytesWritten+=d.data.length,l.prototype.push.call(this,{data:d.data,meta:{currentFile:this.currentFile,percent:g?(v+100*(g-m-1))/g:100}}))},p.prototype.openedSource=function(d){this.currentSourceOffset=this.bytesWritten,this.currentFile=d.file.name;var v=this.streamFiles&&!d.file.dir;if(v){var g=o(d,v,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},p.prototype.closedSource=function(d){this.accumulate=!1;var v=this.streamFiles&&!d.file.dir,g=o(d,v,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),v)this.push({data:function(m){return f.DATA_DESCRIPTOR+s(m.crc32,4)+s(m.compressedSize,4)+s(m.uncompressedSize,4)}(d),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},p.prototype.flush=function(){for(var d=this.bytesWritten,v=0;v<this.dirRecords.length;v++)this.push({data:this.dirRecords[v],meta:{percent:100}});var g=this.bytesWritten-d,m=function(h,y,_,S,E){var L=a.transformTo("string",E(S));return f.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(h,2)+s(h,2)+s(y,4)+s(_,4)+s(L.length,2)+L}(this.dirRecords.length,g,d,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},p.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},p.prototype.registerPrevious=function(d){this._sources.push(d);var v=this;return d.on("data",function(g){v.processChunk(g)}),d.on("end",function(){v.closedSource(v.previous.streamInfo),v._sources.length?v.prepareNextSource():v.end()}),d.on("error",function(g){v.error(g)}),this},p.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},p.prototype.error=function(d){var v=this._sources;if(!l.prototype.error.call(this,d))return!1;for(var g=0;g<v.length;g++)try{v[g].error(d)}catch{}return!0},p.prototype.lock=function(){l.prototype.lock.call(this);for(var d=this._sources,v=0;v<d.length;v++)d[v].lock()},i.exports=p},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,i,r){var s=e("../compressions"),o=e("./ZipFileWorker");r.generateWorker=function(a,l,u){var c=new o(l.streamFiles,u,l.platform,l.encodeFileName),f=0;try{a.forEach(function(p,d){f++;var v=function(y,_){var S=y||_,E=s[S];if(!E)throw new Error(S+" is not a valid compression method !");return E}(d.options.compression,l.compression),g=d.options.compressionOptions||l.compressionOptions||{},m=d.dir,h=d.date;d._compressWorker(v,g).withStreamInfo("file",{name:p,dir:m,date:h,comment:d.comment||"",unixPermissions:d.unixPermissions,dosPermissions:d.dosPermissions}).pipe(c)}),c.entriesCount=f}catch(p){c.error(p)}return c}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,i,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=e("./external"),i.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,i,r){var s=e("./utils"),o=e("./external"),a=e("./utf8"),l=e("./zipEntries"),u=e("./stream/Crc32Probe"),c=e("./nodejsUtils");function f(p){return new o.Promise(function(d,v){var g=p.decompressed.getContentWorker().pipe(new u);g.on("error",function(m){v(m)}).on("end",function(){g.streamInfo.crc32!==p.decompressed.crc32?v(new Error("Corrupted zip : CRC32 mismatch")):d()}).resume()})}i.exports=function(p,d){var v=this;return d=s.extend(d||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),c.isNode&&c.isStream(p)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",p,!0,d.optimizedBinaryString,d.base64).then(function(g){var m=new l(d);return m.load(g),m}).then(function(g){var m=[o.Promise.resolve(g)],h=g.files;if(d.checkCRC32)for(var y=0;y<h.length;y++)m.push(f(h[y]));return o.Promise.all(m)}).then(function(g){for(var m=g.shift(),h=m.files,y=0;y<h.length;y++){var _=h[y],S=_.fileNameStr,E=s.resolve(_.fileNameStr);v.file(E,_.decompressed,{binary:!0,optimizedBinaryString:!0,date:_.date,dir:_.dir,comment:_.fileCommentStr.length?_.fileCommentStr:null,unixPermissions:_.unixPermissions,dosPermissions:_.dosPermissions,createFolders:d.createFolders}),_.dir||(v.file(E).unsafeOriginalName=S)}return m.zipComment.length&&(v.comment=m.zipComment),v})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,i,r){var s=e("../utils"),o=e("../stream/GenericWorker");function a(l,u){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(u)}s.inherits(a,o),a.prototype._bindStream=function(l){var u=this;(this._stream=l).pause(),l.on("data",function(c){u.push({data:c,meta:{percent:0}})}).on("error",function(c){u.isPaused?this.generatedError=c:u.error(c)}).on("end",function(){u.isPaused?u._upstreamEnded=!0:u.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,i,r){var s=e("readable-stream").Readable;function o(a,l,u){s.call(this,l),this._helper=a;var c=this;a.on("data",function(f,p){c.push(f)||c._helper.pause(),u&&u(p)}).on("error",function(f){c.emit("error",f)}).on("end",function(){c.push(null)})}e("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},i.exports=o},{"../utils":32,"readable-stream":16}],14:[function(e,i,r){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,i,r){function s(E,L,C){var z,V=a.getTypeOf(L),T=a.extend(C||{},c);T.date=T.date||new Date,T.compression!==null&&(T.compression=T.compression.toUpperCase()),typeof T.unixPermissions=="string"&&(T.unixPermissions=parseInt(T.unixPermissions,8)),T.unixPermissions&&16384&T.unixPermissions&&(T.dir=!0),T.dosPermissions&&16&T.dosPermissions&&(T.dir=!0),T.dir&&(E=h(E)),T.createFolders&&(z=m(E))&&y.call(this,z,!0);var U=V==="string"&&T.binary===!1&&T.base64===!1;C&&C.binary!==void 0||(T.binary=!U),(L instanceof f&&L.uncompressedSize===0||T.dir||!L||L.length===0)&&(T.base64=!1,T.binary=!0,L="",T.compression="STORE",V="string");var P=null;P=L instanceof f||L instanceof l?L:v.isNode&&v.isStream(L)?new g(E,L):a.prepareContent(E,L,T.binary,T.optimizedBinaryString,T.base64);var N=new p(E,P,T);this.files[E]=N}var o=e("./utf8"),a=e("./utils"),l=e("./stream/GenericWorker"),u=e("./stream/StreamHelper"),c=e("./defaults"),f=e("./compressedObject"),p=e("./zipObject"),d=e("./generate"),v=e("./nodejsUtils"),g=e("./nodejs/NodejsStreamInputAdapter"),m=function(E){E.slice(-1)==="/"&&(E=E.substring(0,E.length-1));var L=E.lastIndexOf("/");return 0<L?E.substring(0,L):""},h=function(E){return E.slice(-1)!=="/"&&(E+="/"),E},y=function(E,L){return L=L!==void 0?L:c.createFolders,E=h(E),this.files[E]||s.call(this,E,null,{dir:!0,createFolders:L}),this.files[E]};function _(E){return Object.prototype.toString.call(E)==="[object RegExp]"}var S={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(E){var L,C,z;for(L in this.files)z=this.files[L],(C=L.slice(this.root.length,L.length))&&L.slice(0,this.root.length)===this.root&&E(C,z)},filter:function(E){var L=[];return this.forEach(function(C,z){E(C,z)&&L.push(z)}),L},file:function(E,L,C){if(arguments.length!==1)return E=this.root+E,s.call(this,E,L,C),this;if(_(E)){var z=E;return this.filter(function(T,U){return!U.dir&&z.test(T)})}var V=this.files[this.root+E];return V&&!V.dir?V:null},folder:function(E){if(!E)return this;if(_(E))return this.filter(function(V,T){return T.dir&&E.test(V)});var L=this.root+E,C=y.call(this,L),z=this.clone();return z.root=C.name,z},remove:function(E){E=this.root+E;var L=this.files[E];if(L||(E.slice(-1)!=="/"&&(E+="/"),L=this.files[E]),L&&!L.dir)delete this.files[E];else for(var C=this.filter(function(V,T){return T.name.slice(0,E.length)===E}),z=0;z<C.length;z++)delete this.files[C[z].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(E){var L,C={};try{if((C=a.extend(E||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=C.type.toLowerCase(),C.compression=C.compression.toUpperCase(),C.type==="binarystring"&&(C.type="string"),!C.type)throw new Error("No output type specified.");a.checkSupport(C.type),C.platform!=="darwin"&&C.platform!=="freebsd"&&C.platform!=="linux"&&C.platform!=="sunos"||(C.platform="UNIX"),C.platform==="win32"&&(C.platform="DOS");var z=C.comment||this.comment||"";L=d.generateWorker(this,C,z)}catch(V){(L=new l("error")).error(V)}return new u(L,C.type||"string",C.mimeType)},generateAsync:function(E,L){return this.generateInternalStream(E).accumulate(L)},generateNodeStream:function(E,L){return(E=E||{}).type||(E.type="nodebuffer"),this.generateInternalStream(E).toNodejsStream(L)}};i.exports=S},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,i,r){i.exports=e("stream")},{stream:void 0}],17:[function(e,i,r){var s=e("./DataReader");function o(a){s.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),u=a.charCodeAt(1),c=a.charCodeAt(2),f=a.charCodeAt(3),p=this.length-4;0<=p;--p)if(this.data[p]===l&&this.data[p+1]===u&&this.data[p+2]===c&&this.data[p+3]===f)return p-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),u=a.charCodeAt(1),c=a.charCodeAt(2),f=a.charCodeAt(3),p=this.readData(4);return l===p[0]&&u===p[1]&&c===p[2]&&f===p[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./DataReader":18}],18:[function(e,i,r){var s=e("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,u=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)u=(u<<8)+this.byteAt(l);return this.index+=a,u},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},i.exports=o},{"../utils":32}],19:[function(e,i,r){var s=e("./Uint8ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,i,r){var s=e("./DataReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./DataReader":18}],21:[function(e,i,r){var s=e("./ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(e,i,r){var s=e("../utils"),o=e("../support"),a=e("./ArrayReader"),l=e("./StringReader"),u=e("./NodeBufferReader"),c=e("./Uint8ArrayReader");i.exports=function(f){var p=s.getTypeOf(f);return s.checkSupport(p),p!=="string"||o.uint8array?p==="nodebuffer"?new u(f):o.uint8array?new c(s.transformTo("uint8array",f)):new a(s.transformTo("array",f)):new l(f)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,i,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,i,r){var s=e("./GenericWorker"),o=e("../utils");function a(l){s.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,s),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},i.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,i,r){var s=e("./GenericWorker"),o=e("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,s),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},i.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,i,r){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(a,o),a.prototype.processChunk=function(l){if(l){var u=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=u+l.data.length}o.prototype.processChunk.call(this,l)},i.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,i,r){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataWorker");var u=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(c){u.dataIsReady=!0,u.data=c,u.max=c&&c.length||0,u.type=s.getTypeOf(c),u.isPaused||u._tickAndRepeat()},function(c){u.error(c)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,u=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,u);break;case"uint8array":l=this.data.subarray(this.index,u);break;case"array":case"nodebuffer":l=this.data.slice(this.index,u)}return this.index=u,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,i,r){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},i.exports=s},{}],29:[function(e,i,r){var s=e("../utils"),o=e("./ConvertWorker"),a=e("./GenericWorker"),l=e("../base64"),u=e("../support"),c=e("../external"),f=null;if(u.nodestream)try{f=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function p(v,g){return new c.Promise(function(m,h){var y=[],_=v._internalType,S=v._outputType,E=v._mimeType;v.on("data",function(L,C){y.push(L),g&&g(C)}).on("error",function(L){y=[],h(L)}).on("end",function(){try{var L=function(C,z,V){switch(C){case"blob":return s.newBlob(s.transformTo("arraybuffer",z),V);case"base64":return l.encode(z);default:return s.transformTo(C,z)}}(S,function(C,z){var V,T=0,U=null,P=0;for(V=0;V<z.length;V++)P+=z[V].length;switch(C){case"string":return z.join("");case"array":return Array.prototype.concat.apply([],z);case"uint8array":for(U=new Uint8Array(P),V=0;V<z.length;V++)U.set(z[V],T),T+=z[V].length;return U;case"nodebuffer":return Buffer.concat(z);default:throw new Error("concat : unsupported type '"+C+"'")}}(_,y),E);m(L)}catch(C){h(C)}y=[]}).resume()})}function d(v,g,m){var h=g;switch(g){case"blob":case"arraybuffer":h="uint8array";break;case"base64":h="string"}try{this._internalType=h,this._outputType=g,this._mimeType=m,s.checkSupport(h),this._worker=v.pipe(new o(h)),v.lock()}catch(y){this._worker=new a("error"),this._worker.error(y)}}d.prototype={accumulate:function(v){return p(this,v)},on:function(v,g){var m=this;return v==="data"?this._worker.on(v,function(h){g.call(m,h.data,h.meta)}):this._worker.on(v,function(){s.delay(g,arguments,m)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(v){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new f(this,{objectMode:this._outputType!=="nodebuffer"},v)}},i.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,i,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),r.blob=o.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,i,r){for(var s=e("./utils"),o=e("./support"),a=e("./nodejsUtils"),l=e("./stream/GenericWorker"),u=new Array(256),c=0;c<256;c++)u[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;u[254]=u[254]=1;function f(){l.call(this,"utf-8 decode"),this.leftOver=null}function p(){l.call(this,"utf-8 encode")}r.utf8encode=function(d){return o.nodebuffer?a.newBufferFrom(d,"utf-8"):function(v){var g,m,h,y,_,S=v.length,E=0;for(y=0;y<S;y++)(64512&(m=v.charCodeAt(y)))==55296&&y+1<S&&(64512&(h=v.charCodeAt(y+1)))==56320&&(m=65536+(m-55296<<10)+(h-56320),y++),E+=m<128?1:m<2048?2:m<65536?3:4;for(g=o.uint8array?new Uint8Array(E):new Array(E),y=_=0;_<E;y++)(64512&(m=v.charCodeAt(y)))==55296&&y+1<S&&(64512&(h=v.charCodeAt(y+1)))==56320&&(m=65536+(m-55296<<10)+(h-56320),y++),m<128?g[_++]=m:(m<2048?g[_++]=192|m>>>6:(m<65536?g[_++]=224|m>>>12:(g[_++]=240|m>>>18,g[_++]=128|m>>>12&63),g[_++]=128|m>>>6&63),g[_++]=128|63&m);return g}(d)},r.utf8decode=function(d){return o.nodebuffer?s.transformTo("nodebuffer",d).toString("utf-8"):function(v){var g,m,h,y,_=v.length,S=new Array(2*_);for(g=m=0;g<_;)if((h=v[g++])<128)S[m++]=h;else if(4<(y=u[h]))S[m++]=65533,g+=y-1;else{for(h&=y===2?31:y===3?15:7;1<y&&g<_;)h=h<<6|63&v[g++],y--;1<y?S[m++]=65533:h<65536?S[m++]=h:(h-=65536,S[m++]=55296|h>>10&1023,S[m++]=56320|1023&h)}return S.length!==m&&(S.subarray?S=S.subarray(0,m):S.length=m),s.applyFromCharCode(S)}(d=s.transformTo(o.uint8array?"uint8array":"array",d))},s.inherits(f,l),f.prototype.processChunk=function(d){var v=s.transformTo(o.uint8array?"uint8array":"array",d.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var g=v;(v=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),v.set(g,this.leftOver.length)}else v=this.leftOver.concat(v);this.leftOver=null}var m=function(y,_){var S;for((_=_||y.length)>y.length&&(_=y.length),S=_-1;0<=S&&(192&y[S])==128;)S--;return S<0||S===0?_:S+u[y[S]]>_?S:_}(v),h=v;m!==v.length&&(o.uint8array?(h=v.subarray(0,m),this.leftOver=v.subarray(m,v.length)):(h=v.slice(0,m),this.leftOver=v.slice(m,v.length))),this.push({data:r.utf8decode(h),meta:d.meta})},f.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=f,s.inherits(p,l),p.prototype.processChunk=function(d){this.push({data:r.utf8encode(d.data),meta:d.meta})},r.Utf8EncodeWorker=p},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,i,r){var s=e("./support"),o=e("./base64"),a=e("./nodejsUtils"),l=e("./external");function u(g){return g}function c(g,m){for(var h=0;h<g.length;++h)m[h]=255&g.charCodeAt(h);return m}e("setimmediate"),r.newBlob=function(g,m){r.checkSupport("blob");try{return new Blob([g],{type:m})}catch{try{var h=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return h.append(g),h.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};var f={stringifyByChunk:function(g,m,h){var y=[],_=0,S=g.length;if(S<=h)return String.fromCharCode.apply(null,g);for(;_<S;)m==="array"||m==="nodebuffer"?y.push(String.fromCharCode.apply(null,g.slice(_,Math.min(_+h,S)))):y.push(String.fromCharCode.apply(null,g.subarray(_,Math.min(_+h,S)))),_+=h;return y.join("")},stringifyByChar:function(g){for(var m="",h=0;h<g.length;h++)m+=String.fromCharCode(g[h]);return m},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function p(g){var m=65536,h=r.getTypeOf(g),y=!0;if(h==="uint8array"?y=f.applyCanBeUsed.uint8array:h==="nodebuffer"&&(y=f.applyCanBeUsed.nodebuffer),y)for(;1<m;)try{return f.stringifyByChunk(g,h,m)}catch{m=Math.floor(m/2)}return f.stringifyByChar(g)}function d(g,m){for(var h=0;h<g.length;h++)m[h]=g[h];return m}r.applyFromCharCode=p;var v={};v.string={string:u,array:function(g){return c(g,new Array(g.length))},arraybuffer:function(g){return v.string.uint8array(g).buffer},uint8array:function(g){return c(g,new Uint8Array(g.length))},nodebuffer:function(g){return c(g,a.allocBuffer(g.length))}},v.array={string:p,array:u,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(g)}},v.arraybuffer={string:function(g){return p(new Uint8Array(g))},array:function(g){return d(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:u,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(new Uint8Array(g))}},v.uint8array={string:p,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:u,nodebuffer:function(g){return a.newBufferFrom(g)}},v.nodebuffer={string:p,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return v.nodebuffer.uint8array(g).buffer},uint8array:function(g){return d(g,new Uint8Array(g.length))},nodebuffer:u},r.transformTo=function(g,m){if(m=m||"",!g)return m;r.checkSupport(g);var h=r.getTypeOf(m);return v[h][g](m)},r.resolve=function(g){for(var m=g.split("/"),h=[],y=0;y<m.length;y++){var _=m[y];_==="."||_===""&&y!==0&&y!==m.length-1||(_===".."?h.pop():h.push(_))}return h.join("/")},r.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(g)?"nodebuffer":s.uint8array&&g instanceof Uint8Array?"uint8array":s.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(g){if(!s[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(g){var m,h,y="";for(h=0;h<(g||"").length;h++)y+="\\x"+((m=g.charCodeAt(h))<16?"0":"")+m.toString(16).toUpperCase();return y},r.delay=function(g,m,h){setImmediate(function(){g.apply(h||null,m||[])})},r.inherits=function(g,m){function h(){}h.prototype=m.prototype,g.prototype=new h},r.extend=function(){var g,m,h={};for(g=0;g<arguments.length;g++)for(m in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],m)&&h[m]===void 0&&(h[m]=arguments[g][m]);return h},r.prepareContent=function(g,m,h,y,_){return l.Promise.resolve(m).then(function(S){return s.blob&&(S instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(S))!==-1)&&typeof FileReader<"u"?new l.Promise(function(E,L){var C=new FileReader;C.onload=function(z){E(z.target.result)},C.onerror=function(z){L(z.target.error)},C.readAsArrayBuffer(S)}):S}).then(function(S){var E=r.getTypeOf(S);return E?(E==="arraybuffer"?S=r.transformTo("uint8array",S):E==="string"&&(_?S=o.decode(S):h&&y!==!0&&(S=function(L){return c(L,s.uint8array?new Uint8Array(L.length):new Array(L.length))}(S))),S):l.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,i,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./signature"),l=e("./zipEntry"),u=e("./support");function c(f){this.files=[],this.loadOptions=f}c.prototype={checkSignature:function(f){if(!this.reader.readAndCheckSignature(f)){this.reader.index-=4;var p=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(p)+", expected "+o.pretty(f)+")")}},isSignature:function(f,p){var d=this.reader.index;this.reader.setIndex(f);var v=this.reader.readString(4)===p;return this.reader.setIndex(d),v},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var f=this.reader.readData(this.zipCommentLength),p=u.uint8array?"uint8array":"array",d=o.transformTo(p,f);this.zipComment=this.loadOptions.decodeFileName(d)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var f,p,d,v=this.zip64EndOfCentralSize-44;0<v;)f=this.reader.readInt(2),p=this.reader.readInt(4),d=this.reader.readData(p),this.zip64ExtensibleData[f]={id:f,length:p,value:d}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var f,p;for(f=0;f<this.files.length;f++)p=this.files[f],this.reader.setIndex(p.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),p.readLocalPart(this.reader),p.handleUTF8(),p.processAttributes()},readCentralDir:function(){var f;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(f=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(f);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var f=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(f<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(f);var p=f;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(f=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(f),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var d=this.centralDirOffset+this.centralDirSize;this.zip64&&(d+=20,d+=12+this.zip64EndOfCentralSize);var v=p-d;if(0<v)this.isSignature(p,a.CENTRAL_FILE_HEADER)||(this.reader.zero=v);else if(v<0)throw new Error("Corrupted zip: missing "+Math.abs(v)+" bytes.")},prepareReader:function(f){this.reader=s(f)},load:function(f){this.prepareReader(f),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=c},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,i,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./compressedObject"),l=e("./crc32"),u=e("./utf8"),c=e("./compressions"),f=e("./support");function p(d,v){this.options=d,this.loadOptions=v}p.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(d){var v,g;if(d.skip(22),this.fileNameLength=d.readInt(2),g=d.readInt(2),this.fileName=d.readData(this.fileNameLength),d.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((v=function(m){for(var h in c)if(Object.prototype.hasOwnProperty.call(c,h)&&c[h].magic===m)return c[h];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,v,d.readData(this.compressedSize))},readCentralPart:function(d){this.versionMadeBy=d.readInt(2),d.skip(2),this.bitFlag=d.readInt(2),this.compressionMethod=d.readString(2),this.date=d.readDate(),this.crc32=d.readInt(4),this.compressedSize=d.readInt(4),this.uncompressedSize=d.readInt(4);var v=d.readInt(2);if(this.extraFieldsLength=d.readInt(2),this.fileCommentLength=d.readInt(2),this.diskNumberStart=d.readInt(2),this.internalFileAttributes=d.readInt(2),this.externalFileAttributes=d.readInt(4),this.localHeaderOffset=d.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");d.skip(v),this.readExtraFields(d),this.parseZIP64ExtraField(d),this.fileComment=d.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var d=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),d==0&&(this.dosPermissions=63&this.externalFileAttributes),d==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var d=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=d.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=d.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=d.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=d.readInt(4))}},readExtraFields:function(d){var v,g,m,h=d.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});d.index+4<h;)v=d.readInt(2),g=d.readInt(2),m=d.readData(g),this.extraFields[v]={id:v,length:g,value:m};d.setIndex(h)},handleUTF8:function(){var d=f.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=u.utf8decode(this.fileName),this.fileCommentStr=u.utf8decode(this.fileComment);else{var v=this.findExtraFieldUnicodePath();if(v!==null)this.fileNameStr=v;else{var g=o.transformTo(d,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var h=o.transformTo(d,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(h)}}},findExtraFieldUnicodePath:function(){var d=this.extraFields[28789];if(d){var v=s(d.value);return v.readInt(1)!==1||l(this.fileName)!==v.readInt(4)?null:u.utf8decode(v.readData(d.length-5))}return null},findExtraFieldUnicodeComment:function(){var d=this.extraFields[25461];if(d){var v=s(d.value);return v.readInt(1)!==1||l(this.fileComment)!==v.readInt(4)?null:u.utf8decode(v.readData(d.length-5))}return null}},i.exports=p},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,i,r){function s(v,g,m){this.name=v,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=g,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var o=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),l=e("./utf8"),u=e("./compressedObject"),c=e("./stream/GenericWorker");s.prototype={internalStream:function(v){var g=null,m="string";try{if(!v)throw new Error("No output type specified.");var h=(m=v.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),g=this._decompressWorker();var y=!this._dataBinary;y&&!h&&(g=g.pipe(new l.Utf8EncodeWorker)),!y&&h&&(g=g.pipe(new l.Utf8DecodeWorker))}catch(_){(g=new c("error")).error(_)}return new o(g,m,"")},async:function(v,g){return this.internalStream(v).accumulate(g)},nodeStream:function(v,g){return this.internalStream(v||"nodebuffer").toNodejsStream(g)},_compressWorker:function(v,g){if(this._data instanceof u&&this._data.compression.magic===v.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new l.Utf8EncodeWorker)),u.createWorkerFrom(m,v,g)},_decompressWorker:function(){return this._data instanceof u?this._data.getContentWorker():this._data instanceof c?this._data:new a(this._data)}};for(var f=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],p=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},d=0;d<f.length;d++)s.prototype[f[d]]=p;i.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,i,r){(function(s){var o,a,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var u=0,c=new l(v),f=s.document.createTextNode("");c.observe(f,{characterData:!0}),o=function(){f.data=u=++u%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var g=s.document.createElement("script");g.onreadystatechange=function(){v(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},s.document.documentElement.appendChild(g)}:function(){setTimeout(v,0)};else{var p=new s.MessageChannel;p.port1.onmessage=v,o=function(){p.port2.postMessage(0)}}var d=[];function v(){var g,m;a=!0;for(var h=d.length;h;){for(m=d,d=[],g=-1;++g<h;)m[g]();h=d.length}a=!1}i.exports=function(g){d.push(g)!==1||a||o()}}).call(this,typeof na<"u"?na:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,i,r){var s=e("immediate");function o(){}var a={},l=["REJECTED"],u=["FULFILLED"],c=["PENDING"];function f(h){if(typeof h!="function")throw new TypeError("resolver must be a function");this.state=c,this.queue=[],this.outcome=void 0,h!==o&&g(this,h)}function p(h,y,_){this.promise=h,typeof y=="function"&&(this.onFulfilled=y,this.callFulfilled=this.otherCallFulfilled),typeof _=="function"&&(this.onRejected=_,this.callRejected=this.otherCallRejected)}function d(h,y,_){s(function(){var S;try{S=y(_)}catch(E){return a.reject(h,E)}S===h?a.reject(h,new TypeError("Cannot resolve promise with itself")):a.resolve(h,S)})}function v(h){var y=h&&h.then;if(h&&(typeof h=="object"||typeof h=="function")&&typeof y=="function")return function(){y.apply(h,arguments)}}function g(h,y){var _=!1;function S(C){_||(_=!0,a.reject(h,C))}function E(C){_||(_=!0,a.resolve(h,C))}var L=m(function(){y(E,S)});L.status==="error"&&S(L.value)}function m(h,y){var _={};try{_.value=h(y),_.status="success"}catch(S){_.status="error",_.value=S}return _}(i.exports=f).prototype.finally=function(h){if(typeof h!="function")return this;var y=this.constructor;return this.then(function(_){return y.resolve(h()).then(function(){return _})},function(_){return y.resolve(h()).then(function(){throw _})})},f.prototype.catch=function(h){return this.then(null,h)},f.prototype.then=function(h,y){if(typeof h!="function"&&this.state===u||typeof y!="function"&&this.state===l)return this;var _=new this.constructor(o);return this.state!==c?d(_,this.state===u?h:y,this.outcome):this.queue.push(new p(_,h,y)),_},p.prototype.callFulfilled=function(h){a.resolve(this.promise,h)},p.prototype.otherCallFulfilled=function(h){d(this.promise,this.onFulfilled,h)},p.prototype.callRejected=function(h){a.reject(this.promise,h)},p.prototype.otherCallRejected=function(h){d(this.promise,this.onRejected,h)},a.resolve=function(h,y){var _=m(v,y);if(_.status==="error")return a.reject(h,_.value);var S=_.value;if(S)g(h,S);else{h.state=u,h.outcome=y;for(var E=-1,L=h.queue.length;++E<L;)h.queue[E].callFulfilled(y)}return h},a.reject=function(h,y){h.state=l,h.outcome=y;for(var _=-1,S=h.queue.length;++_<S;)h.queue[_].callRejected(y);return h},f.resolve=function(h){return h instanceof this?h:a.resolve(new this(o),h)},f.reject=function(h){var y=new this(o);return a.reject(y,h)},f.all=function(h){var y=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var _=h.length,S=!1;if(!_)return this.resolve([]);for(var E=new Array(_),L=0,C=-1,z=new this(o);++C<_;)V(h[C],C);return z;function V(T,U){y.resolve(T).then(function(P){E[U]=P,++L!==_||S||(S=!0,a.resolve(z,E))},function(P){S||(S=!0,a.reject(z,P))})}},f.race=function(h){var y=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var _=h.length,S=!1;if(!_)return this.resolve([]);for(var E=-1,L=new this(o);++E<_;)C=h[E],y.resolve(C).then(function(z){S||(S=!0,a.resolve(L,z))},function(z){S||(S=!0,a.reject(L,z))});var C;return L}},{immediate:36}],38:[function(e,i,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),i.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,i,r){var s=e("./zlib/deflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/messages"),u=e("./zlib/zstream"),c=Object.prototype.toString,f=0,p=-1,d=0,v=8;function g(h){if(!(this instanceof g))return new g(h);this.options=o.assign({level:p,method:v,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},h||{});var y=this.options;y.raw&&0<y.windowBits?y.windowBits=-y.windowBits:y.gzip&&0<y.windowBits&&y.windowBits<16&&(y.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var _=s.deflateInit2(this.strm,y.level,y.method,y.windowBits,y.memLevel,y.strategy);if(_!==f)throw new Error(l[_]);if(y.header&&s.deflateSetHeader(this.strm,y.header),y.dictionary){var S;if(S=typeof y.dictionary=="string"?a.string2buf(y.dictionary):c.call(y.dictionary)==="[object ArrayBuffer]"?new Uint8Array(y.dictionary):y.dictionary,(_=s.deflateSetDictionary(this.strm,S))!==f)throw new Error(l[_]);this._dict_set=!0}}function m(h,y){var _=new g(y);if(_.push(h,!0),_.err)throw _.msg||l[_.err];return _.result}g.prototype.push=function(h,y){var _,S,E=this.strm,L=this.options.chunkSize;if(this.ended)return!1;S=y===~~y?y:y===!0?4:0,typeof h=="string"?E.input=a.string2buf(h):c.call(h)==="[object ArrayBuffer]"?E.input=new Uint8Array(h):E.input=h,E.next_in=0,E.avail_in=E.input.length;do{if(E.avail_out===0&&(E.output=new o.Buf8(L),E.next_out=0,E.avail_out=L),(_=s.deflate(E,S))!==1&&_!==f)return this.onEnd(_),!(this.ended=!0);E.avail_out!==0&&(E.avail_in!==0||S!==4&&S!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(E.output,E.next_out))):this.onData(o.shrinkBuf(E.output,E.next_out)))}while((0<E.avail_in||E.avail_out===0)&&_!==1);return S===4?(_=s.deflateEnd(this.strm),this.onEnd(_),this.ended=!0,_===f):S!==2||(this.onEnd(f),!(E.avail_out=0))},g.prototype.onData=function(h){this.chunks.push(h)},g.prototype.onEnd=function(h){h===f&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},r.Deflate=g,r.deflate=m,r.deflateRaw=function(h,y){return(y=y||{}).raw=!0,m(h,y)},r.gzip=function(h,y){return(y=y||{}).gzip=!0,m(h,y)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,i,r){var s=e("./zlib/inflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/constants"),u=e("./zlib/messages"),c=e("./zlib/zstream"),f=e("./zlib/gzheader"),p=Object.prototype.toString;function d(g){if(!(this instanceof d))return new d(g);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},g||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||g&&g.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&!(15&m.windowBits)&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var h=s.inflateInit2(this.strm,m.windowBits);if(h!==l.Z_OK)throw new Error(u[h]);this.header=new f,s.inflateGetHeader(this.strm,this.header)}function v(g,m){var h=new d(m);if(h.push(g,!0),h.err)throw h.msg||u[h.err];return h.result}d.prototype.push=function(g,m){var h,y,_,S,E,L,C=this.strm,z=this.options.chunkSize,V=this.options.dictionary,T=!1;if(this.ended)return!1;y=m===~~m?m:m===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof g=="string"?C.input=a.binstring2buf(g):p.call(g)==="[object ArrayBuffer]"?C.input=new Uint8Array(g):C.input=g,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new o.Buf8(z),C.next_out=0,C.avail_out=z),(h=s.inflate(C,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&V&&(L=typeof V=="string"?a.string2buf(V):p.call(V)==="[object ArrayBuffer]"?new Uint8Array(V):V,h=s.inflateSetDictionary(this.strm,L)),h===l.Z_BUF_ERROR&&T===!0&&(h=l.Z_OK,T=!1),h!==l.Z_STREAM_END&&h!==l.Z_OK)return this.onEnd(h),!(this.ended=!0);C.next_out&&(C.avail_out!==0&&h!==l.Z_STREAM_END&&(C.avail_in!==0||y!==l.Z_FINISH&&y!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(_=a.utf8border(C.output,C.next_out),S=C.next_out-_,E=a.buf2string(C.output,_),C.next_out=S,C.avail_out=z-S,S&&o.arraySet(C.output,C.output,_,S,0),this.onData(E)):this.onData(o.shrinkBuf(C.output,C.next_out)))),C.avail_in===0&&C.avail_out===0&&(T=!0)}while((0<C.avail_in||C.avail_out===0)&&h!==l.Z_STREAM_END);return h===l.Z_STREAM_END&&(y=l.Z_FINISH),y===l.Z_FINISH?(h=s.inflateEnd(this.strm),this.onEnd(h),this.ended=!0,h===l.Z_OK):y!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(C.avail_out=0))},d.prototype.onData=function(g){this.chunks.push(g)},d.prototype.onEnd=function(g){g===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},r.Inflate=d,r.inflate=v,r.inflateRaw=function(g,m){return(m=m||{}).raw=!0,v(g,m)},r.ungzip=v},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,i,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var u=Array.prototype.slice.call(arguments,1);u.length;){var c=u.shift();if(c){if(typeof c!="object")throw new TypeError(c+"must be non-object");for(var f in c)c.hasOwnProperty(f)&&(l[f]=c[f])}}return l},r.shrinkBuf=function(l,u){return l.length===u?l:l.subarray?l.subarray(0,u):(l.length=u,l)};var o={arraySet:function(l,u,c,f,p){if(u.subarray&&l.subarray)l.set(u.subarray(c,c+f),p);else for(var d=0;d<f;d++)l[p+d]=u[c+d]},flattenChunks:function(l){var u,c,f,p,d,v;for(u=f=0,c=l.length;u<c;u++)f+=l[u].length;for(v=new Uint8Array(f),u=p=0,c=l.length;u<c;u++)d=l[u],v.set(d,p),p+=d.length;return v}},a={arraySet:function(l,u,c,f,p){for(var d=0;d<f;d++)l[p+d]=u[c+d]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,o)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(s)},{}],42:[function(e,i,r){var s=e("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new s.Buf8(256),u=0;u<256;u++)l[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;function c(f,p){if(p<65537&&(f.subarray&&a||!f.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(f,p));for(var d="",v=0;v<p;v++)d+=String.fromCharCode(f[v]);return d}l[254]=l[254]=1,r.string2buf=function(f){var p,d,v,g,m,h=f.length,y=0;for(g=0;g<h;g++)(64512&(d=f.charCodeAt(g)))==55296&&g+1<h&&(64512&(v=f.charCodeAt(g+1)))==56320&&(d=65536+(d-55296<<10)+(v-56320),g++),y+=d<128?1:d<2048?2:d<65536?3:4;for(p=new s.Buf8(y),g=m=0;m<y;g++)(64512&(d=f.charCodeAt(g)))==55296&&g+1<h&&(64512&(v=f.charCodeAt(g+1)))==56320&&(d=65536+(d-55296<<10)+(v-56320),g++),d<128?p[m++]=d:(d<2048?p[m++]=192|d>>>6:(d<65536?p[m++]=224|d>>>12:(p[m++]=240|d>>>18,p[m++]=128|d>>>12&63),p[m++]=128|d>>>6&63),p[m++]=128|63&d);return p},r.buf2binstring=function(f){return c(f,f.length)},r.binstring2buf=function(f){for(var p=new s.Buf8(f.length),d=0,v=p.length;d<v;d++)p[d]=f.charCodeAt(d);return p},r.buf2string=function(f,p){var d,v,g,m,h=p||f.length,y=new Array(2*h);for(d=v=0;d<h;)if((g=f[d++])<128)y[v++]=g;else if(4<(m=l[g]))y[v++]=65533,d+=m-1;else{for(g&=m===2?31:m===3?15:7;1<m&&d<h;)g=g<<6|63&f[d++],m--;1<m?y[v++]=65533:g<65536?y[v++]=g:(g-=65536,y[v++]=55296|g>>10&1023,y[v++]=56320|1023&g)}return c(y,v)},r.utf8border=function(f,p){var d;for((p=p||f.length)>f.length&&(p=f.length),d=p-1;0<=d&&(192&f[d])==128;)d--;return d<0||d===0?p:d+l[f[d]]>p?d:p}},{"./common":41}],43:[function(e,i,r){i.exports=function(s,o,a,l){for(var u=65535&s|0,c=s>>>16&65535|0,f=0;a!==0;){for(a-=f=2e3<a?2e3:a;c=c+(u=u+o[l++]|0)|0,--f;);u%=65521,c%=65521}return u|c<<16|0}},{}],44:[function(e,i,r){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,i,r){var s=function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var u=0;u<8;u++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a}();i.exports=function(o,a,l,u){var c=s,f=u+l;o^=-1;for(var p=u;p<f;p++)o=o>>>8^c[255&(o^a[p])];return-1^o}},{}],46:[function(e,i,r){var s,o=e("../utils/common"),a=e("./trees"),l=e("./adler32"),u=e("./crc32"),c=e("./messages"),f=0,p=4,d=0,v=-2,g=-1,m=4,h=2,y=8,_=9,S=286,E=30,L=19,C=2*S+1,z=15,V=3,T=258,U=T+V+1,P=42,N=113,M=1,Y=2,W=3,Z=4;function st(x,G){return x.msg=c[G],G}function et(x){return(x<<1)-(4<x?9:0)}function ot(x){for(var G=x.length;0<=--G;)x[G]=0}function F(x){var G=x.state,B=G.pending;B>x.avail_out&&(B=x.avail_out),B!==0&&(o.arraySet(x.output,G.pending_buf,G.pending_out,B,x.next_out),x.next_out+=B,G.pending_out+=B,x.total_out+=B,x.avail_out-=B,G.pending-=B,G.pending===0&&(G.pending_out=0))}function O(x,G){a._tr_flush_block(x,0<=x.block_start?x.block_start:-1,x.strstart-x.block_start,G),x.block_start=x.strstart,F(x.strm)}function ct(x,G){x.pending_buf[x.pending++]=G}function Q(x,G){x.pending_buf[x.pending++]=G>>>8&255,x.pending_buf[x.pending++]=255&G}function D(x,G){var B,R,I=x.max_chain_length,k=x.strstart,J=x.prev_length,A=x.nice_match,b=x.strstart>x.w_size-U?x.strstart-(x.w_size-U):0,q=x.window,tt=x.w_mask,it=x.prev,lt=x.strstart+T,St=q[k+J-1],xt=q[k+J];x.prev_length>=x.good_match&&(I>>=2),A>x.lookahead&&(A=x.lookahead);do if(q[(B=G)+J]===xt&&q[B+J-1]===St&&q[B]===q[k]&&q[++B]===q[k+1]){k+=2,B++;do;while(q[++k]===q[++B]&&q[++k]===q[++B]&&q[++k]===q[++B]&&q[++k]===q[++B]&&q[++k]===q[++B]&&q[++k]===q[++B]&&q[++k]===q[++B]&&q[++k]===q[++B]&&k<lt);if(R=T-(lt-k),k=lt-T,J<R){if(x.match_start=G,A<=(J=R))break;St=q[k+J-1],xt=q[k+J]}}while((G=it[G&tt])>b&&--I!=0);return J<=x.lookahead?J:x.lookahead}function K(x){var G,B,R,I,k,J,A,b,q,tt,it=x.w_size;do{if(I=x.window_size-x.lookahead-x.strstart,x.strstart>=it+(it-U)){for(o.arraySet(x.window,x.window,it,it,0),x.match_start-=it,x.strstart-=it,x.block_start-=it,G=B=x.hash_size;R=x.head[--G],x.head[G]=it<=R?R-it:0,--B;);for(G=B=it;R=x.prev[--G],x.prev[G]=it<=R?R-it:0,--B;);I+=it}if(x.strm.avail_in===0)break;if(J=x.strm,A=x.window,b=x.strstart+x.lookahead,q=I,tt=void 0,tt=J.avail_in,q<tt&&(tt=q),B=tt===0?0:(J.avail_in-=tt,o.arraySet(A,J.input,J.next_in,tt,b),J.state.wrap===1?J.adler=l(J.adler,A,tt,b):J.state.wrap===2&&(J.adler=u(J.adler,A,tt,b)),J.next_in+=tt,J.total_in+=tt,tt),x.lookahead+=B,x.lookahead+x.insert>=V)for(k=x.strstart-x.insert,x.ins_h=x.window[k],x.ins_h=(x.ins_h<<x.hash_shift^x.window[k+1])&x.hash_mask;x.insert&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[k+V-1])&x.hash_mask,x.prev[k&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=k,k++,x.insert--,!(x.lookahead+x.insert<V)););}while(x.lookahead<U&&x.strm.avail_in!==0)}function H(x,G){for(var B,R;;){if(x.lookahead<U){if(K(x),x.lookahead<U&&G===f)return M;if(x.lookahead===0)break}if(B=0,x.lookahead>=V&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+V-1])&x.hash_mask,B=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),B!==0&&x.strstart-B<=x.w_size-U&&(x.match_length=D(x,B)),x.match_length>=V)if(R=a._tr_tally(x,x.strstart-x.match_start,x.match_length-V),x.lookahead-=x.match_length,x.match_length<=x.max_lazy_match&&x.lookahead>=V){for(x.match_length--;x.strstart++,x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+V-1])&x.hash_mask,B=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart,--x.match_length!=0;);x.strstart++}else x.strstart+=x.match_length,x.match_length=0,x.ins_h=x.window[x.strstart],x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+1])&x.hash_mask;else R=a._tr_tally(x,0,x.window[x.strstart]),x.lookahead--,x.strstart++;if(R&&(O(x,!1),x.strm.avail_out===0))return M}return x.insert=x.strstart<V-1?x.strstart:V-1,G===p?(O(x,!0),x.strm.avail_out===0?W:Z):x.last_lit&&(O(x,!1),x.strm.avail_out===0)?M:Y}function nt(x,G){for(var B,R,I;;){if(x.lookahead<U){if(K(x),x.lookahead<U&&G===f)return M;if(x.lookahead===0)break}if(B=0,x.lookahead>=V&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+V-1])&x.hash_mask,B=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),x.prev_length=x.match_length,x.prev_match=x.match_start,x.match_length=V-1,B!==0&&x.prev_length<x.max_lazy_match&&x.strstart-B<=x.w_size-U&&(x.match_length=D(x,B),x.match_length<=5&&(x.strategy===1||x.match_length===V&&4096<x.strstart-x.match_start)&&(x.match_length=V-1)),x.prev_length>=V&&x.match_length<=x.prev_length){for(I=x.strstart+x.lookahead-V,R=a._tr_tally(x,x.strstart-1-x.prev_match,x.prev_length-V),x.lookahead-=x.prev_length-1,x.prev_length-=2;++x.strstart<=I&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+V-1])&x.hash_mask,B=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),--x.prev_length!=0;);if(x.match_available=0,x.match_length=V-1,x.strstart++,R&&(O(x,!1),x.strm.avail_out===0))return M}else if(x.match_available){if((R=a._tr_tally(x,0,x.window[x.strstart-1]))&&O(x,!1),x.strstart++,x.lookahead--,x.strm.avail_out===0)return M}else x.match_available=1,x.strstart++,x.lookahead--}return x.match_available&&(R=a._tr_tally(x,0,x.window[x.strstart-1]),x.match_available=0),x.insert=x.strstart<V-1?x.strstart:V-1,G===p?(O(x,!0),x.strm.avail_out===0?W:Z):x.last_lit&&(O(x,!1),x.strm.avail_out===0)?M:Y}function rt(x,G,B,R,I){this.good_length=x,this.max_lazy=G,this.nice_length=B,this.max_chain=R,this.func=I}function ft(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=y,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*C),this.dyn_dtree=new o.Buf16(2*(2*E+1)),this.bl_tree=new o.Buf16(2*(2*L+1)),ot(this.dyn_ltree),ot(this.dyn_dtree),ot(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(z+1),this.heap=new o.Buf16(2*S+1),ot(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*S+1),ot(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ht(x){var G;return x&&x.state?(x.total_in=x.total_out=0,x.data_type=h,(G=x.state).pending=0,G.pending_out=0,G.wrap<0&&(G.wrap=-G.wrap),G.status=G.wrap?P:N,x.adler=G.wrap===2?0:1,G.last_flush=f,a._tr_init(G),d):st(x,v)}function w(x){var G=ht(x);return G===d&&function(B){B.window_size=2*B.w_size,ot(B.head),B.max_lazy_match=s[B.level].max_lazy,B.good_match=s[B.level].good_length,B.nice_match=s[B.level].nice_length,B.max_chain_length=s[B.level].max_chain,B.strstart=0,B.block_start=0,B.lookahead=0,B.insert=0,B.match_length=B.prev_length=V-1,B.match_available=0,B.ins_h=0}(x.state),G}function X(x,G,B,R,I,k){if(!x)return v;var J=1;if(G===g&&(G=6),R<0?(J=0,R=-R):15<R&&(J=2,R-=16),I<1||_<I||B!==y||R<8||15<R||G<0||9<G||k<0||m<k)return st(x,v);R===8&&(R=9);var A=new ft;return(x.state=A).strm=x,A.wrap=J,A.gzhead=null,A.w_bits=R,A.w_size=1<<A.w_bits,A.w_mask=A.w_size-1,A.hash_bits=I+7,A.hash_size=1<<A.hash_bits,A.hash_mask=A.hash_size-1,A.hash_shift=~~((A.hash_bits+V-1)/V),A.window=new o.Buf8(2*A.w_size),A.head=new o.Buf16(A.hash_size),A.prev=new o.Buf16(A.w_size),A.lit_bufsize=1<<I+6,A.pending_buf_size=4*A.lit_bufsize,A.pending_buf=new o.Buf8(A.pending_buf_size),A.d_buf=1*A.lit_bufsize,A.l_buf=3*A.lit_bufsize,A.level=G,A.strategy=k,A.method=B,w(x)}s=[new rt(0,0,0,0,function(x,G){var B=65535;for(B>x.pending_buf_size-5&&(B=x.pending_buf_size-5);;){if(x.lookahead<=1){if(K(x),x.lookahead===0&&G===f)return M;if(x.lookahead===0)break}x.strstart+=x.lookahead,x.lookahead=0;var R=x.block_start+B;if((x.strstart===0||x.strstart>=R)&&(x.lookahead=x.strstart-R,x.strstart=R,O(x,!1),x.strm.avail_out===0)||x.strstart-x.block_start>=x.w_size-U&&(O(x,!1),x.strm.avail_out===0))return M}return x.insert=0,G===p?(O(x,!0),x.strm.avail_out===0?W:Z):(x.strstart>x.block_start&&(O(x,!1),x.strm.avail_out),M)}),new rt(4,4,8,4,H),new rt(4,5,16,8,H),new rt(4,6,32,32,H),new rt(4,4,16,16,nt),new rt(8,16,32,32,nt),new rt(8,16,128,128,nt),new rt(8,32,128,256,nt),new rt(32,128,258,1024,nt),new rt(32,258,258,4096,nt)],r.deflateInit=function(x,G){return X(x,G,y,15,8,0)},r.deflateInit2=X,r.deflateReset=w,r.deflateResetKeep=ht,r.deflateSetHeader=function(x,G){return x&&x.state?x.state.wrap!==2?v:(x.state.gzhead=G,d):v},r.deflate=function(x,G){var B,R,I,k;if(!x||!x.state||5<G||G<0)return x?st(x,v):v;if(R=x.state,!x.output||!x.input&&x.avail_in!==0||R.status===666&&G!==p)return st(x,x.avail_out===0?-5:v);if(R.strm=x,B=R.last_flush,R.last_flush=G,R.status===P)if(R.wrap===2)x.adler=0,ct(R,31),ct(R,139),ct(R,8),R.gzhead?(ct(R,(R.gzhead.text?1:0)+(R.gzhead.hcrc?2:0)+(R.gzhead.extra?4:0)+(R.gzhead.name?8:0)+(R.gzhead.comment?16:0)),ct(R,255&R.gzhead.time),ct(R,R.gzhead.time>>8&255),ct(R,R.gzhead.time>>16&255),ct(R,R.gzhead.time>>24&255),ct(R,R.level===9?2:2<=R.strategy||R.level<2?4:0),ct(R,255&R.gzhead.os),R.gzhead.extra&&R.gzhead.extra.length&&(ct(R,255&R.gzhead.extra.length),ct(R,R.gzhead.extra.length>>8&255)),R.gzhead.hcrc&&(x.adler=u(x.adler,R.pending_buf,R.pending,0)),R.gzindex=0,R.status=69):(ct(R,0),ct(R,0),ct(R,0),ct(R,0),ct(R,0),ct(R,R.level===9?2:2<=R.strategy||R.level<2?4:0),ct(R,3),R.status=N);else{var J=y+(R.w_bits-8<<4)<<8;J|=(2<=R.strategy||R.level<2?0:R.level<6?1:R.level===6?2:3)<<6,R.strstart!==0&&(J|=32),J+=31-J%31,R.status=N,Q(R,J),R.strstart!==0&&(Q(R,x.adler>>>16),Q(R,65535&x.adler)),x.adler=1}if(R.status===69)if(R.gzhead.extra){for(I=R.pending;R.gzindex<(65535&R.gzhead.extra.length)&&(R.pending!==R.pending_buf_size||(R.gzhead.hcrc&&R.pending>I&&(x.adler=u(x.adler,R.pending_buf,R.pending-I,I)),F(x),I=R.pending,R.pending!==R.pending_buf_size));)ct(R,255&R.gzhead.extra[R.gzindex]),R.gzindex++;R.gzhead.hcrc&&R.pending>I&&(x.adler=u(x.adler,R.pending_buf,R.pending-I,I)),R.gzindex===R.gzhead.extra.length&&(R.gzindex=0,R.status=73)}else R.status=73;if(R.status===73)if(R.gzhead.name){I=R.pending;do{if(R.pending===R.pending_buf_size&&(R.gzhead.hcrc&&R.pending>I&&(x.adler=u(x.adler,R.pending_buf,R.pending-I,I)),F(x),I=R.pending,R.pending===R.pending_buf_size)){k=1;break}k=R.gzindex<R.gzhead.name.length?255&R.gzhead.name.charCodeAt(R.gzindex++):0,ct(R,k)}while(k!==0);R.gzhead.hcrc&&R.pending>I&&(x.adler=u(x.adler,R.pending_buf,R.pending-I,I)),k===0&&(R.gzindex=0,R.status=91)}else R.status=91;if(R.status===91)if(R.gzhead.comment){I=R.pending;do{if(R.pending===R.pending_buf_size&&(R.gzhead.hcrc&&R.pending>I&&(x.adler=u(x.adler,R.pending_buf,R.pending-I,I)),F(x),I=R.pending,R.pending===R.pending_buf_size)){k=1;break}k=R.gzindex<R.gzhead.comment.length?255&R.gzhead.comment.charCodeAt(R.gzindex++):0,ct(R,k)}while(k!==0);R.gzhead.hcrc&&R.pending>I&&(x.adler=u(x.adler,R.pending_buf,R.pending-I,I)),k===0&&(R.status=103)}else R.status=103;if(R.status===103&&(R.gzhead.hcrc?(R.pending+2>R.pending_buf_size&&F(x),R.pending+2<=R.pending_buf_size&&(ct(R,255&x.adler),ct(R,x.adler>>8&255),x.adler=0,R.status=N)):R.status=N),R.pending!==0){if(F(x),x.avail_out===0)return R.last_flush=-1,d}else if(x.avail_in===0&&et(G)<=et(B)&&G!==p)return st(x,-5);if(R.status===666&&x.avail_in!==0)return st(x,-5);if(x.avail_in!==0||R.lookahead!==0||G!==f&&R.status!==666){var A=R.strategy===2?function(b,q){for(var tt;;){if(b.lookahead===0&&(K(b),b.lookahead===0)){if(q===f)return M;break}if(b.match_length=0,tt=a._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++,tt&&(O(b,!1),b.strm.avail_out===0))return M}return b.insert=0,q===p?(O(b,!0),b.strm.avail_out===0?W:Z):b.last_lit&&(O(b,!1),b.strm.avail_out===0)?M:Y}(R,G):R.strategy===3?function(b,q){for(var tt,it,lt,St,xt=b.window;;){if(b.lookahead<=T){if(K(b),b.lookahead<=T&&q===f)return M;if(b.lookahead===0)break}if(b.match_length=0,b.lookahead>=V&&0<b.strstart&&(it=xt[lt=b.strstart-1])===xt[++lt]&&it===xt[++lt]&&it===xt[++lt]){St=b.strstart+T;do;while(it===xt[++lt]&&it===xt[++lt]&&it===xt[++lt]&&it===xt[++lt]&&it===xt[++lt]&&it===xt[++lt]&&it===xt[++lt]&&it===xt[++lt]&&lt<St);b.match_length=T-(St-lt),b.match_length>b.lookahead&&(b.match_length=b.lookahead)}if(b.match_length>=V?(tt=a._tr_tally(b,1,b.match_length-V),b.lookahead-=b.match_length,b.strstart+=b.match_length,b.match_length=0):(tt=a._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++),tt&&(O(b,!1),b.strm.avail_out===0))return M}return b.insert=0,q===p?(O(b,!0),b.strm.avail_out===0?W:Z):b.last_lit&&(O(b,!1),b.strm.avail_out===0)?M:Y}(R,G):s[R.level].func(R,G);if(A!==W&&A!==Z||(R.status=666),A===M||A===W)return x.avail_out===0&&(R.last_flush=-1),d;if(A===Y&&(G===1?a._tr_align(R):G!==5&&(a._tr_stored_block(R,0,0,!1),G===3&&(ot(R.head),R.lookahead===0&&(R.strstart=0,R.block_start=0,R.insert=0))),F(x),x.avail_out===0))return R.last_flush=-1,d}return G!==p?d:R.wrap<=0?1:(R.wrap===2?(ct(R,255&x.adler),ct(R,x.adler>>8&255),ct(R,x.adler>>16&255),ct(R,x.adler>>24&255),ct(R,255&x.total_in),ct(R,x.total_in>>8&255),ct(R,x.total_in>>16&255),ct(R,x.total_in>>24&255)):(Q(R,x.adler>>>16),Q(R,65535&x.adler)),F(x),0<R.wrap&&(R.wrap=-R.wrap),R.pending!==0?d:1)},r.deflateEnd=function(x){var G;return x&&x.state?(G=x.state.status)!==P&&G!==69&&G!==73&&G!==91&&G!==103&&G!==N&&G!==666?st(x,v):(x.state=null,G===N?st(x,-3):d):v},r.deflateSetDictionary=function(x,G){var B,R,I,k,J,A,b,q,tt=G.length;if(!x||!x.state||(k=(B=x.state).wrap)===2||k===1&&B.status!==P||B.lookahead)return v;for(k===1&&(x.adler=l(x.adler,G,tt,0)),B.wrap=0,tt>=B.w_size&&(k===0&&(ot(B.head),B.strstart=0,B.block_start=0,B.insert=0),q=new o.Buf8(B.w_size),o.arraySet(q,G,tt-B.w_size,B.w_size,0),G=q,tt=B.w_size),J=x.avail_in,A=x.next_in,b=x.input,x.avail_in=tt,x.next_in=0,x.input=G,K(B);B.lookahead>=V;){for(R=B.strstart,I=B.lookahead-(V-1);B.ins_h=(B.ins_h<<B.hash_shift^B.window[R+V-1])&B.hash_mask,B.prev[R&B.w_mask]=B.head[B.ins_h],B.head[B.ins_h]=R,R++,--I;);B.strstart=R,B.lookahead=V-1,K(B)}return B.strstart+=B.lookahead,B.block_start=B.strstart,B.insert=B.lookahead,B.lookahead=0,B.match_length=B.prev_length=V-1,B.match_available=0,x.next_in=A,x.input=b,x.avail_in=J,B.wrap=k,d},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,i,r){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,i,r){i.exports=function(s,o){var a,l,u,c,f,p,d,v,g,m,h,y,_,S,E,L,C,z,V,T,U,P,N,M,Y;a=s.state,l=s.next_in,M=s.input,u=l+(s.avail_in-5),c=s.next_out,Y=s.output,f=c-(o-s.avail_out),p=c+(s.avail_out-257),d=a.dmax,v=a.wsize,g=a.whave,m=a.wnext,h=a.window,y=a.hold,_=a.bits,S=a.lencode,E=a.distcode,L=(1<<a.lenbits)-1,C=(1<<a.distbits)-1;t:do{_<15&&(y+=M[l++]<<_,_+=8,y+=M[l++]<<_,_+=8),z=S[y&L];e:for(;;){if(y>>>=V=z>>>24,_-=V,(V=z>>>16&255)===0)Y[c++]=65535&z;else{if(!(16&V)){if(!(64&V)){z=S[(65535&z)+(y&(1<<V)-1)];continue e}if(32&V){a.mode=12;break t}s.msg="invalid literal/length code",a.mode=30;break t}T=65535&z,(V&=15)&&(_<V&&(y+=M[l++]<<_,_+=8),T+=y&(1<<V)-1,y>>>=V,_-=V),_<15&&(y+=M[l++]<<_,_+=8,y+=M[l++]<<_,_+=8),z=E[y&C];n:for(;;){if(y>>>=V=z>>>24,_-=V,!(16&(V=z>>>16&255))){if(!(64&V)){z=E[(65535&z)+(y&(1<<V)-1)];continue n}s.msg="invalid distance code",a.mode=30;break t}if(U=65535&z,_<(V&=15)&&(y+=M[l++]<<_,(_+=8)<V&&(y+=M[l++]<<_,_+=8)),d<(U+=y&(1<<V)-1)){s.msg="invalid distance too far back",a.mode=30;break t}if(y>>>=V,_-=V,(V=c-f)<U){if(g<(V=U-V)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break t}if(N=h,(P=0)===m){if(P+=v-V,V<T){for(T-=V;Y[c++]=h[P++],--V;);P=c-U,N=Y}}else if(m<V){if(P+=v+m-V,(V-=m)<T){for(T-=V;Y[c++]=h[P++],--V;);if(P=0,m<T){for(T-=V=m;Y[c++]=h[P++],--V;);P=c-U,N=Y}}}else if(P+=m-V,V<T){for(T-=V;Y[c++]=h[P++],--V;);P=c-U,N=Y}for(;2<T;)Y[c++]=N[P++],Y[c++]=N[P++],Y[c++]=N[P++],T-=3;T&&(Y[c++]=N[P++],1<T&&(Y[c++]=N[P++]))}else{for(P=c-U;Y[c++]=Y[P++],Y[c++]=Y[P++],Y[c++]=Y[P++],2<(T-=3););T&&(Y[c++]=Y[P++],1<T&&(Y[c++]=Y[P++]))}break}}break}}while(l<u&&c<p);l-=T=_>>3,y&=(1<<(_-=T<<3))-1,s.next_in=l,s.next_out=c,s.avail_in=l<u?u-l+5:5-(l-u),s.avail_out=c<p?p-c+257:257-(c-p),a.hold=y,a.bits=_}},{}],49:[function(e,i,r){var s=e("../utils/common"),o=e("./adler32"),a=e("./crc32"),l=e("./inffast"),u=e("./inftrees"),c=1,f=2,p=0,d=-2,v=1,g=852,m=592;function h(P){return(P>>>24&255)+(P>>>8&65280)+((65280&P)<<8)+((255&P)<<24)}function y(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function _(P){var N;return P&&P.state?(N=P.state,P.total_in=P.total_out=N.total=0,P.msg="",N.wrap&&(P.adler=1&N.wrap),N.mode=v,N.last=0,N.havedict=0,N.dmax=32768,N.head=null,N.hold=0,N.bits=0,N.lencode=N.lendyn=new s.Buf32(g),N.distcode=N.distdyn=new s.Buf32(m),N.sane=1,N.back=-1,p):d}function S(P){var N;return P&&P.state?((N=P.state).wsize=0,N.whave=0,N.wnext=0,_(P)):d}function E(P,N){var M,Y;return P&&P.state?(Y=P.state,N<0?(M=0,N=-N):(M=1+(N>>4),N<48&&(N&=15)),N&&(N<8||15<N)?d:(Y.window!==null&&Y.wbits!==N&&(Y.window=null),Y.wrap=M,Y.wbits=N,S(P))):d}function L(P,N){var M,Y;return P?(Y=new y,(P.state=Y).window=null,(M=E(P,N))!==p&&(P.state=null),M):d}var C,z,V=!0;function T(P){if(V){var N;for(C=new s.Buf32(512),z=new s.Buf32(32),N=0;N<144;)P.lens[N++]=8;for(;N<256;)P.lens[N++]=9;for(;N<280;)P.lens[N++]=7;for(;N<288;)P.lens[N++]=8;for(u(c,P.lens,0,288,C,0,P.work,{bits:9}),N=0;N<32;)P.lens[N++]=5;u(f,P.lens,0,32,z,0,P.work,{bits:5}),V=!1}P.lencode=C,P.lenbits=9,P.distcode=z,P.distbits=5}function U(P,N,M,Y){var W,Z=P.state;return Z.window===null&&(Z.wsize=1<<Z.wbits,Z.wnext=0,Z.whave=0,Z.window=new s.Buf8(Z.wsize)),Y>=Z.wsize?(s.arraySet(Z.window,N,M-Z.wsize,Z.wsize,0),Z.wnext=0,Z.whave=Z.wsize):(Y<(W=Z.wsize-Z.wnext)&&(W=Y),s.arraySet(Z.window,N,M-Y,W,Z.wnext),(Y-=W)?(s.arraySet(Z.window,N,M-Y,Y,0),Z.wnext=Y,Z.whave=Z.wsize):(Z.wnext+=W,Z.wnext===Z.wsize&&(Z.wnext=0),Z.whave<Z.wsize&&(Z.whave+=W))),0}r.inflateReset=S,r.inflateReset2=E,r.inflateResetKeep=_,r.inflateInit=function(P){return L(P,15)},r.inflateInit2=L,r.inflate=function(P,N){var M,Y,W,Z,st,et,ot,F,O,ct,Q,D,K,H,nt,rt,ft,ht,w,X,x,G,B,R,I=0,k=new s.Buf8(4),J=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!P||!P.state||!P.output||!P.input&&P.avail_in!==0)return d;(M=P.state).mode===12&&(M.mode=13),st=P.next_out,W=P.output,ot=P.avail_out,Z=P.next_in,Y=P.input,et=P.avail_in,F=M.hold,O=M.bits,ct=et,Q=ot,G=p;t:for(;;)switch(M.mode){case v:if(M.wrap===0){M.mode=13;break}for(;O<16;){if(et===0)break t;et--,F+=Y[Z++]<<O,O+=8}if(2&M.wrap&&F===35615){k[M.check=0]=255&F,k[1]=F>>>8&255,M.check=a(M.check,k,2,0),O=F=0,M.mode=2;break}if(M.flags=0,M.head&&(M.head.done=!1),!(1&M.wrap)||(((255&F)<<8)+(F>>8))%31){P.msg="incorrect header check",M.mode=30;break}if((15&F)!=8){P.msg="unknown compression method",M.mode=30;break}if(O-=4,x=8+(15&(F>>>=4)),M.wbits===0)M.wbits=x;else if(x>M.wbits){P.msg="invalid window size",M.mode=30;break}M.dmax=1<<x,P.adler=M.check=1,M.mode=512&F?10:12,O=F=0;break;case 2:for(;O<16;){if(et===0)break t;et--,F+=Y[Z++]<<O,O+=8}if(M.flags=F,(255&M.flags)!=8){P.msg="unknown compression method",M.mode=30;break}if(57344&M.flags){P.msg="unknown header flags set",M.mode=30;break}M.head&&(M.head.text=F>>8&1),512&M.flags&&(k[0]=255&F,k[1]=F>>>8&255,M.check=a(M.check,k,2,0)),O=F=0,M.mode=3;case 3:for(;O<32;){if(et===0)break t;et--,F+=Y[Z++]<<O,O+=8}M.head&&(M.head.time=F),512&M.flags&&(k[0]=255&F,k[1]=F>>>8&255,k[2]=F>>>16&255,k[3]=F>>>24&255,M.check=a(M.check,k,4,0)),O=F=0,M.mode=4;case 4:for(;O<16;){if(et===0)break t;et--,F+=Y[Z++]<<O,O+=8}M.head&&(M.head.xflags=255&F,M.head.os=F>>8),512&M.flags&&(k[0]=255&F,k[1]=F>>>8&255,M.check=a(M.check,k,2,0)),O=F=0,M.mode=5;case 5:if(1024&M.flags){for(;O<16;){if(et===0)break t;et--,F+=Y[Z++]<<O,O+=8}M.length=F,M.head&&(M.head.extra_len=F),512&M.flags&&(k[0]=255&F,k[1]=F>>>8&255,M.check=a(M.check,k,2,0)),O=F=0}else M.head&&(M.head.extra=null);M.mode=6;case 6:if(1024&M.flags&&(et<(D=M.length)&&(D=et),D&&(M.head&&(x=M.head.extra_len-M.length,M.head.extra||(M.head.extra=new Array(M.head.extra_len)),s.arraySet(M.head.extra,Y,Z,D,x)),512&M.flags&&(M.check=a(M.check,Y,D,Z)),et-=D,Z+=D,M.length-=D),M.length))break t;M.length=0,M.mode=7;case 7:if(2048&M.flags){if(et===0)break t;for(D=0;x=Y[Z+D++],M.head&&x&&M.length<65536&&(M.head.name+=String.fromCharCode(x)),x&&D<et;);if(512&M.flags&&(M.check=a(M.check,Y,D,Z)),et-=D,Z+=D,x)break t}else M.head&&(M.head.name=null);M.length=0,M.mode=8;case 8:if(4096&M.flags){if(et===0)break t;for(D=0;x=Y[Z+D++],M.head&&x&&M.length<65536&&(M.head.comment+=String.fromCharCode(x)),x&&D<et;);if(512&M.flags&&(M.check=a(M.check,Y,D,Z)),et-=D,Z+=D,x)break t}else M.head&&(M.head.comment=null);M.mode=9;case 9:if(512&M.flags){for(;O<16;){if(et===0)break t;et--,F+=Y[Z++]<<O,O+=8}if(F!==(65535&M.check)){P.msg="header crc mismatch",M.mode=30;break}O=F=0}M.head&&(M.head.hcrc=M.flags>>9&1,M.head.done=!0),P.adler=M.check=0,M.mode=12;break;case 10:for(;O<32;){if(et===0)break t;et--,F+=Y[Z++]<<O,O+=8}P.adler=M.check=h(F),O=F=0,M.mode=11;case 11:if(M.havedict===0)return P.next_out=st,P.avail_out=ot,P.next_in=Z,P.avail_in=et,M.hold=F,M.bits=O,2;P.adler=M.check=1,M.mode=12;case 12:if(N===5||N===6)break t;case 13:if(M.last){F>>>=7&O,O-=7&O,M.mode=27;break}for(;O<3;){if(et===0)break t;et--,F+=Y[Z++]<<O,O+=8}switch(M.last=1&F,O-=1,3&(F>>>=1)){case 0:M.mode=14;break;case 1:if(T(M),M.mode=20,N!==6)break;F>>>=2,O-=2;break t;case 2:M.mode=17;break;case 3:P.msg="invalid block type",M.mode=30}F>>>=2,O-=2;break;case 14:for(F>>>=7&O,O-=7&O;O<32;){if(et===0)break t;et--,F+=Y[Z++]<<O,O+=8}if((65535&F)!=(F>>>16^65535)){P.msg="invalid stored block lengths",M.mode=30;break}if(M.length=65535&F,O=F=0,M.mode=15,N===6)break t;case 15:M.mode=16;case 16:if(D=M.length){if(et<D&&(D=et),ot<D&&(D=ot),D===0)break t;s.arraySet(W,Y,Z,D,st),et-=D,Z+=D,ot-=D,st+=D,M.length-=D;break}M.mode=12;break;case 17:for(;O<14;){if(et===0)break t;et--,F+=Y[Z++]<<O,O+=8}if(M.nlen=257+(31&F),F>>>=5,O-=5,M.ndist=1+(31&F),F>>>=5,O-=5,M.ncode=4+(15&F),F>>>=4,O-=4,286<M.nlen||30<M.ndist){P.msg="too many length or distance symbols",M.mode=30;break}M.have=0,M.mode=18;case 18:for(;M.have<M.ncode;){for(;O<3;){if(et===0)break t;et--,F+=Y[Z++]<<O,O+=8}M.lens[J[M.have++]]=7&F,F>>>=3,O-=3}for(;M.have<19;)M.lens[J[M.have++]]=0;if(M.lencode=M.lendyn,M.lenbits=7,B={bits:M.lenbits},G=u(0,M.lens,0,19,M.lencode,0,M.work,B),M.lenbits=B.bits,G){P.msg="invalid code lengths set",M.mode=30;break}M.have=0,M.mode=19;case 19:for(;M.have<M.nlen+M.ndist;){for(;rt=(I=M.lencode[F&(1<<M.lenbits)-1])>>>16&255,ft=65535&I,!((nt=I>>>24)<=O);){if(et===0)break t;et--,F+=Y[Z++]<<O,O+=8}if(ft<16)F>>>=nt,O-=nt,M.lens[M.have++]=ft;else{if(ft===16){for(R=nt+2;O<R;){if(et===0)break t;et--,F+=Y[Z++]<<O,O+=8}if(F>>>=nt,O-=nt,M.have===0){P.msg="invalid bit length repeat",M.mode=30;break}x=M.lens[M.have-1],D=3+(3&F),F>>>=2,O-=2}else if(ft===17){for(R=nt+3;O<R;){if(et===0)break t;et--,F+=Y[Z++]<<O,O+=8}O-=nt,x=0,D=3+(7&(F>>>=nt)),F>>>=3,O-=3}else{for(R=nt+7;O<R;){if(et===0)break t;et--,F+=Y[Z++]<<O,O+=8}O-=nt,x=0,D=11+(127&(F>>>=nt)),F>>>=7,O-=7}if(M.have+D>M.nlen+M.ndist){P.msg="invalid bit length repeat",M.mode=30;break}for(;D--;)M.lens[M.have++]=x}}if(M.mode===30)break;if(M.lens[256]===0){P.msg="invalid code -- missing end-of-block",M.mode=30;break}if(M.lenbits=9,B={bits:M.lenbits},G=u(c,M.lens,0,M.nlen,M.lencode,0,M.work,B),M.lenbits=B.bits,G){P.msg="invalid literal/lengths set",M.mode=30;break}if(M.distbits=6,M.distcode=M.distdyn,B={bits:M.distbits},G=u(f,M.lens,M.nlen,M.ndist,M.distcode,0,M.work,B),M.distbits=B.bits,G){P.msg="invalid distances set",M.mode=30;break}if(M.mode=20,N===6)break t;case 20:M.mode=21;case 21:if(6<=et&&258<=ot){P.next_out=st,P.avail_out=ot,P.next_in=Z,P.avail_in=et,M.hold=F,M.bits=O,l(P,Q),st=P.next_out,W=P.output,ot=P.avail_out,Z=P.next_in,Y=P.input,et=P.avail_in,F=M.hold,O=M.bits,M.mode===12&&(M.back=-1);break}for(M.back=0;rt=(I=M.lencode[F&(1<<M.lenbits)-1])>>>16&255,ft=65535&I,!((nt=I>>>24)<=O);){if(et===0)break t;et--,F+=Y[Z++]<<O,O+=8}if(rt&&!(240&rt)){for(ht=nt,w=rt,X=ft;rt=(I=M.lencode[X+((F&(1<<ht+w)-1)>>ht)])>>>16&255,ft=65535&I,!(ht+(nt=I>>>24)<=O);){if(et===0)break t;et--,F+=Y[Z++]<<O,O+=8}F>>>=ht,O-=ht,M.back+=ht}if(F>>>=nt,O-=nt,M.back+=nt,M.length=ft,rt===0){M.mode=26;break}if(32&rt){M.back=-1,M.mode=12;break}if(64&rt){P.msg="invalid literal/length code",M.mode=30;break}M.extra=15&rt,M.mode=22;case 22:if(M.extra){for(R=M.extra;O<R;){if(et===0)break t;et--,F+=Y[Z++]<<O,O+=8}M.length+=F&(1<<M.extra)-1,F>>>=M.extra,O-=M.extra,M.back+=M.extra}M.was=M.length,M.mode=23;case 23:for(;rt=(I=M.distcode[F&(1<<M.distbits)-1])>>>16&255,ft=65535&I,!((nt=I>>>24)<=O);){if(et===0)break t;et--,F+=Y[Z++]<<O,O+=8}if(!(240&rt)){for(ht=nt,w=rt,X=ft;rt=(I=M.distcode[X+((F&(1<<ht+w)-1)>>ht)])>>>16&255,ft=65535&I,!(ht+(nt=I>>>24)<=O);){if(et===0)break t;et--,F+=Y[Z++]<<O,O+=8}F>>>=ht,O-=ht,M.back+=ht}if(F>>>=nt,O-=nt,M.back+=nt,64&rt){P.msg="invalid distance code",M.mode=30;break}M.offset=ft,M.extra=15&rt,M.mode=24;case 24:if(M.extra){for(R=M.extra;O<R;){if(et===0)break t;et--,F+=Y[Z++]<<O,O+=8}M.offset+=F&(1<<M.extra)-1,F>>>=M.extra,O-=M.extra,M.back+=M.extra}if(M.offset>M.dmax){P.msg="invalid distance too far back",M.mode=30;break}M.mode=25;case 25:if(ot===0)break t;if(D=Q-ot,M.offset>D){if((D=M.offset-D)>M.whave&&M.sane){P.msg="invalid distance too far back",M.mode=30;break}K=D>M.wnext?(D-=M.wnext,M.wsize-D):M.wnext-D,D>M.length&&(D=M.length),H=M.window}else H=W,K=st-M.offset,D=M.length;for(ot<D&&(D=ot),ot-=D,M.length-=D;W[st++]=H[K++],--D;);M.length===0&&(M.mode=21);break;case 26:if(ot===0)break t;W[st++]=M.length,ot--,M.mode=21;break;case 27:if(M.wrap){for(;O<32;){if(et===0)break t;et--,F|=Y[Z++]<<O,O+=8}if(Q-=ot,P.total_out+=Q,M.total+=Q,Q&&(P.adler=M.check=M.flags?a(M.check,W,Q,st-Q):o(M.check,W,Q,st-Q)),Q=ot,(M.flags?F:h(F))!==M.check){P.msg="incorrect data check",M.mode=30;break}O=F=0}M.mode=28;case 28:if(M.wrap&&M.flags){for(;O<32;){if(et===0)break t;et--,F+=Y[Z++]<<O,O+=8}if(F!==(4294967295&M.total)){P.msg="incorrect length check",M.mode=30;break}O=F=0}M.mode=29;case 29:G=1;break t;case 30:G=-3;break t;case 31:return-4;case 32:default:return d}return P.next_out=st,P.avail_out=ot,P.next_in=Z,P.avail_in=et,M.hold=F,M.bits=O,(M.wsize||Q!==P.avail_out&&M.mode<30&&(M.mode<27||N!==4))&&U(P,P.output,P.next_out,Q-P.avail_out)?(M.mode=31,-4):(ct-=P.avail_in,Q-=P.avail_out,P.total_in+=ct,P.total_out+=Q,M.total+=Q,M.wrap&&Q&&(P.adler=M.check=M.flags?a(M.check,W,Q,P.next_out-Q):o(M.check,W,Q,P.next_out-Q)),P.data_type=M.bits+(M.last?64:0)+(M.mode===12?128:0)+(M.mode===20||M.mode===15?256:0),(ct==0&&Q===0||N===4)&&G===p&&(G=-5),G)},r.inflateEnd=function(P){if(!P||!P.state)return d;var N=P.state;return N.window&&(N.window=null),P.state=null,p},r.inflateGetHeader=function(P,N){var M;return P&&P.state&&2&(M=P.state).wrap?((M.head=N).done=!1,p):d},r.inflateSetDictionary=function(P,N){var M,Y=N.length;return P&&P.state?(M=P.state).wrap!==0&&M.mode!==11?d:M.mode===11&&o(1,N,Y,0)!==M.check?-3:U(P,N,Y,Y)?(M.mode=31,-4):(M.havedict=1,p):d},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,i,r){var s=e("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],u=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(c,f,p,d,v,g,m,h){var y,_,S,E,L,C,z,V,T,U=h.bits,P=0,N=0,M=0,Y=0,W=0,Z=0,st=0,et=0,ot=0,F=0,O=null,ct=0,Q=new s.Buf16(16),D=new s.Buf16(16),K=null,H=0;for(P=0;P<=15;P++)Q[P]=0;for(N=0;N<d;N++)Q[f[p+N]]++;for(W=U,Y=15;1<=Y&&Q[Y]===0;Y--);if(Y<W&&(W=Y),Y===0)return v[g++]=20971520,v[g++]=20971520,h.bits=1,0;for(M=1;M<Y&&Q[M]===0;M++);for(W<M&&(W=M),P=et=1;P<=15;P++)if(et<<=1,(et-=Q[P])<0)return-1;if(0<et&&(c===0||Y!==1))return-1;for(D[1]=0,P=1;P<15;P++)D[P+1]=D[P]+Q[P];for(N=0;N<d;N++)f[p+N]!==0&&(m[D[f[p+N]]++]=N);if(C=c===0?(O=K=m,19):c===1?(O=o,ct-=257,K=a,H-=257,256):(O=l,K=u,-1),P=M,L=g,st=N=F=0,S=-1,E=(ot=1<<(Z=W))-1,c===1&&852<ot||c===2&&592<ot)return 1;for(;;){for(z=P-st,T=m[N]<C?(V=0,m[N]):m[N]>C?(V=K[H+m[N]],O[ct+m[N]]):(V=96,0),y=1<<P-st,M=_=1<<Z;v[L+(F>>st)+(_-=y)]=z<<24|V<<16|T|0,_!==0;);for(y=1<<P-1;F&y;)y>>=1;if(y!==0?(F&=y-1,F+=y):F=0,N++,--Q[P]==0){if(P===Y)break;P=f[p+m[N]]}if(W<P&&(F&E)!==S){for(st===0&&(st=W),L+=M,et=1<<(Z=P-st);Z+st<Y&&!((et-=Q[Z+st])<=0);)Z++,et<<=1;if(ot+=1<<Z,c===1&&852<ot||c===2&&592<ot)return 1;v[S=F&E]=W<<24|Z<<16|L-g|0}}return F!==0&&(v[L+F]=P-st<<24|64<<16|0),h.bits=W,0}},{"../utils/common":41}],51:[function(e,i,r){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,i,r){var s=e("../utils/common"),o=0,a=1;function l(I){for(var k=I.length;0<=--k;)I[k]=0}var u=0,c=29,f=256,p=f+1+c,d=30,v=19,g=2*p+1,m=15,h=16,y=7,_=256,S=16,E=17,L=18,C=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],z=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],V=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],T=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],U=new Array(2*(p+2));l(U);var P=new Array(2*d);l(P);var N=new Array(512);l(N);var M=new Array(256);l(M);var Y=new Array(c);l(Y);var W,Z,st,et=new Array(d);function ot(I,k,J,A,b){this.static_tree=I,this.extra_bits=k,this.extra_base=J,this.elems=A,this.max_length=b,this.has_stree=I&&I.length}function F(I,k){this.dyn_tree=I,this.max_code=0,this.stat_desc=k}function O(I){return I<256?N[I]:N[256+(I>>>7)]}function ct(I,k){I.pending_buf[I.pending++]=255&k,I.pending_buf[I.pending++]=k>>>8&255}function Q(I,k,J){I.bi_valid>h-J?(I.bi_buf|=k<<I.bi_valid&65535,ct(I,I.bi_buf),I.bi_buf=k>>h-I.bi_valid,I.bi_valid+=J-h):(I.bi_buf|=k<<I.bi_valid&65535,I.bi_valid+=J)}function D(I,k,J){Q(I,J[2*k],J[2*k+1])}function K(I,k){for(var J=0;J|=1&I,I>>>=1,J<<=1,0<--k;);return J>>>1}function H(I,k,J){var A,b,q=new Array(m+1),tt=0;for(A=1;A<=m;A++)q[A]=tt=tt+J[A-1]<<1;for(b=0;b<=k;b++){var it=I[2*b+1];it!==0&&(I[2*b]=K(q[it]++,it))}}function nt(I){var k;for(k=0;k<p;k++)I.dyn_ltree[2*k]=0;for(k=0;k<d;k++)I.dyn_dtree[2*k]=0;for(k=0;k<v;k++)I.bl_tree[2*k]=0;I.dyn_ltree[2*_]=1,I.opt_len=I.static_len=0,I.last_lit=I.matches=0}function rt(I){8<I.bi_valid?ct(I,I.bi_buf):0<I.bi_valid&&(I.pending_buf[I.pending++]=I.bi_buf),I.bi_buf=0,I.bi_valid=0}function ft(I,k,J,A){var b=2*k,q=2*J;return I[b]<I[q]||I[b]===I[q]&&A[k]<=A[J]}function ht(I,k,J){for(var A=I.heap[J],b=J<<1;b<=I.heap_len&&(b<I.heap_len&&ft(k,I.heap[b+1],I.heap[b],I.depth)&&b++,!ft(k,A,I.heap[b],I.depth));)I.heap[J]=I.heap[b],J=b,b<<=1;I.heap[J]=A}function w(I,k,J){var A,b,q,tt,it=0;if(I.last_lit!==0)for(;A=I.pending_buf[I.d_buf+2*it]<<8|I.pending_buf[I.d_buf+2*it+1],b=I.pending_buf[I.l_buf+it],it++,A===0?D(I,b,k):(D(I,(q=M[b])+f+1,k),(tt=C[q])!==0&&Q(I,b-=Y[q],tt),D(I,q=O(--A),J),(tt=z[q])!==0&&Q(I,A-=et[q],tt)),it<I.last_lit;);D(I,_,k)}function X(I,k){var J,A,b,q=k.dyn_tree,tt=k.stat_desc.static_tree,it=k.stat_desc.has_stree,lt=k.stat_desc.elems,St=-1;for(I.heap_len=0,I.heap_max=g,J=0;J<lt;J++)q[2*J]!==0?(I.heap[++I.heap_len]=St=J,I.depth[J]=0):q[2*J+1]=0;for(;I.heap_len<2;)q[2*(b=I.heap[++I.heap_len]=St<2?++St:0)]=1,I.depth[b]=0,I.opt_len--,it&&(I.static_len-=tt[2*b+1]);for(k.max_code=St,J=I.heap_len>>1;1<=J;J--)ht(I,q,J);for(b=lt;J=I.heap[1],I.heap[1]=I.heap[I.heap_len--],ht(I,q,1),A=I.heap[1],I.heap[--I.heap_max]=J,I.heap[--I.heap_max]=A,q[2*b]=q[2*J]+q[2*A],I.depth[b]=(I.depth[J]>=I.depth[A]?I.depth[J]:I.depth[A])+1,q[2*J+1]=q[2*A+1]=b,I.heap[1]=b++,ht(I,q,1),2<=I.heap_len;);I.heap[--I.heap_max]=I.heap[1],function(xt,vt){var Mt,Lt,yt,Ft,kt,Ct,Tt=vt.dyn_tree,Dt=vt.max_code,jt=vt.stat_desc.static_tree,Gt=vt.stat_desc.has_stree,le=vt.stat_desc.extra_bits,at=vt.stat_desc.extra_base,Et=vt.stat_desc.max_length,dt=0;for(Ft=0;Ft<=m;Ft++)xt.bl_count[Ft]=0;for(Tt[2*xt.heap[xt.heap_max]+1]=0,Mt=xt.heap_max+1;Mt<g;Mt++)Et<(Ft=Tt[2*Tt[2*(Lt=xt.heap[Mt])+1]+1]+1)&&(Ft=Et,dt++),Tt[2*Lt+1]=Ft,Dt<Lt||(xt.bl_count[Ft]++,kt=0,at<=Lt&&(kt=le[Lt-at]),Ct=Tt[2*Lt],xt.opt_len+=Ct*(Ft+kt),Gt&&(xt.static_len+=Ct*(jt[2*Lt+1]+kt)));if(dt!==0){do{for(Ft=Et-1;xt.bl_count[Ft]===0;)Ft--;xt.bl_count[Ft]--,xt.bl_count[Ft+1]+=2,xt.bl_count[Et]--,dt-=2}while(0<dt);for(Ft=Et;Ft!==0;Ft--)for(Lt=xt.bl_count[Ft];Lt!==0;)Dt<(yt=xt.heap[--Mt])||(Tt[2*yt+1]!==Ft&&(xt.opt_len+=(Ft-Tt[2*yt+1])*Tt[2*yt],Tt[2*yt+1]=Ft),Lt--)}}(I,k),H(q,St,I.bl_count)}function x(I,k,J){var A,b,q=-1,tt=k[1],it=0,lt=7,St=4;for(tt===0&&(lt=138,St=3),k[2*(J+1)+1]=65535,A=0;A<=J;A++)b=tt,tt=k[2*(A+1)+1],++it<lt&&b===tt||(it<St?I.bl_tree[2*b]+=it:b!==0?(b!==q&&I.bl_tree[2*b]++,I.bl_tree[2*S]++):it<=10?I.bl_tree[2*E]++:I.bl_tree[2*L]++,q=b,St=(it=0)===tt?(lt=138,3):b===tt?(lt=6,3):(lt=7,4))}function G(I,k,J){var A,b,q=-1,tt=k[1],it=0,lt=7,St=4;for(tt===0&&(lt=138,St=3),A=0;A<=J;A++)if(b=tt,tt=k[2*(A+1)+1],!(++it<lt&&b===tt)){if(it<St)for(;D(I,b,I.bl_tree),--it!=0;);else b!==0?(b!==q&&(D(I,b,I.bl_tree),it--),D(I,S,I.bl_tree),Q(I,it-3,2)):it<=10?(D(I,E,I.bl_tree),Q(I,it-3,3)):(D(I,L,I.bl_tree),Q(I,it-11,7));q=b,St=(it=0)===tt?(lt=138,3):b===tt?(lt=6,3):(lt=7,4)}}l(et);var B=!1;function R(I,k,J,A){Q(I,(u<<1)+(A?1:0),3),function(b,q,tt,it){rt(b),ct(b,tt),ct(b,~tt),s.arraySet(b.pending_buf,b.window,q,tt,b.pending),b.pending+=tt}(I,k,J)}r._tr_init=function(I){B||(function(){var k,J,A,b,q,tt=new Array(m+1);for(b=A=0;b<c-1;b++)for(Y[b]=A,k=0;k<1<<C[b];k++)M[A++]=b;for(M[A-1]=b,b=q=0;b<16;b++)for(et[b]=q,k=0;k<1<<z[b];k++)N[q++]=b;for(q>>=7;b<d;b++)for(et[b]=q<<7,k=0;k<1<<z[b]-7;k++)N[256+q++]=b;for(J=0;J<=m;J++)tt[J]=0;for(k=0;k<=143;)U[2*k+1]=8,k++,tt[8]++;for(;k<=255;)U[2*k+1]=9,k++,tt[9]++;for(;k<=279;)U[2*k+1]=7,k++,tt[7]++;for(;k<=287;)U[2*k+1]=8,k++,tt[8]++;for(H(U,p+1,tt),k=0;k<d;k++)P[2*k+1]=5,P[2*k]=K(k,5);W=new ot(U,C,f+1,p,m),Z=new ot(P,z,0,d,m),st=new ot(new Array(0),V,0,v,y)}(),B=!0),I.l_desc=new F(I.dyn_ltree,W),I.d_desc=new F(I.dyn_dtree,Z),I.bl_desc=new F(I.bl_tree,st),I.bi_buf=0,I.bi_valid=0,nt(I)},r._tr_stored_block=R,r._tr_flush_block=function(I,k,J,A){var b,q,tt=0;0<I.level?(I.strm.data_type===2&&(I.strm.data_type=function(it){var lt,St=4093624447;for(lt=0;lt<=31;lt++,St>>>=1)if(1&St&&it.dyn_ltree[2*lt]!==0)return o;if(it.dyn_ltree[18]!==0||it.dyn_ltree[20]!==0||it.dyn_ltree[26]!==0)return a;for(lt=32;lt<f;lt++)if(it.dyn_ltree[2*lt]!==0)return a;return o}(I)),X(I,I.l_desc),X(I,I.d_desc),tt=function(it){var lt;for(x(it,it.dyn_ltree,it.l_desc.max_code),x(it,it.dyn_dtree,it.d_desc.max_code),X(it,it.bl_desc),lt=v-1;3<=lt&&it.bl_tree[2*T[lt]+1]===0;lt--);return it.opt_len+=3*(lt+1)+5+5+4,lt}(I),b=I.opt_len+3+7>>>3,(q=I.static_len+3+7>>>3)<=b&&(b=q)):b=q=J+5,J+4<=b&&k!==-1?R(I,k,J,A):I.strategy===4||q===b?(Q(I,2+(A?1:0),3),w(I,U,P)):(Q(I,4+(A?1:0),3),function(it,lt,St,xt){var vt;for(Q(it,lt-257,5),Q(it,St-1,5),Q(it,xt-4,4),vt=0;vt<xt;vt++)Q(it,it.bl_tree[2*T[vt]+1],3);G(it,it.dyn_ltree,lt-1),G(it,it.dyn_dtree,St-1)}(I,I.l_desc.max_code+1,I.d_desc.max_code+1,tt+1),w(I,I.dyn_ltree,I.dyn_dtree)),nt(I),A&&rt(I)},r._tr_tally=function(I,k,J){return I.pending_buf[I.d_buf+2*I.last_lit]=k>>>8&255,I.pending_buf[I.d_buf+2*I.last_lit+1]=255&k,I.pending_buf[I.l_buf+I.last_lit]=255&J,I.last_lit++,k===0?I.dyn_ltree[2*J]++:(I.matches++,k--,I.dyn_ltree[2*(M[J]+f+1)]++,I.dyn_dtree[2*O(k)]++),I.last_lit===I.lit_bufsize-1},r._tr_align=function(I){Q(I,2,3),D(I,_,U),function(k){k.bi_valid===16?(ct(k,k.bi_buf),k.bi_buf=0,k.bi_valid=0):8<=k.bi_valid&&(k.pending_buf[k.pending++]=255&k.bi_buf,k.bi_buf>>=8,k.bi_valid-=8)}(I)}},{"../utils/common":41}],53:[function(e,i,r){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,i,r){(function(s){(function(o,a){if(!o.setImmediate){var l,u,c,f,p=1,d={},v=!1,g=o.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(o);m=m&&m.setTimeout?m:o,l={}.toString.call(o.process)==="[object process]"?function(S){process.nextTick(function(){y(S)})}:function(){if(o.postMessage&&!o.importScripts){var S=!0,E=o.onmessage;return o.onmessage=function(){S=!1},o.postMessage("","*"),o.onmessage=E,S}}()?(f="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",_,!1):o.attachEvent("onmessage",_),function(S){o.postMessage(f+S,"*")}):o.MessageChannel?((c=new MessageChannel).port1.onmessage=function(S){y(S.data)},function(S){c.port2.postMessage(S)}):g&&"onreadystatechange"in g.createElement("script")?(u=g.documentElement,function(S){var E=g.createElement("script");E.onreadystatechange=function(){y(S),E.onreadystatechange=null,u.removeChild(E),E=null},u.appendChild(E)}):function(S){setTimeout(y,0,S)},m.setImmediate=function(S){typeof S!="function"&&(S=new Function(""+S));for(var E=new Array(arguments.length-1),L=0;L<E.length;L++)E[L]=arguments[L+1];var C={callback:S,args:E};return d[p]=C,l(p),p++},m.clearImmediate=h}function h(S){delete d[S]}function y(S){if(v)setTimeout(y,0,S);else{var E=d[S];if(E){v=!0;try{(function(L){var C=L.callback,z=L.args;switch(z.length){case 0:C();break;case 1:C(z[0]);break;case 2:C(z[0],z[1]);break;case 3:C(z[0],z[1],z[2]);break;default:C.apply(a,z)}})(E)}finally{h(S),v=!1}}}}function _(S){S.source===o&&typeof S.data=="string"&&S.data.indexOf(f)===0&&y(+S.data.slice(f.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof na<"u"?na:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Td);var yb=Td.exports;const Mb=xb(yb),Sb={class:"converter-page"},bb={class:"conv-panel"},Eb={class:"panel-header"},wb={class:"header-actions"},Tb={class:"global-settings"},Ab={class:"setting-row"},Cb={class:"mode-toggle"},Rb={class:"setting-row"},Pb={class:"fps-row"},Ib={class:"fps-presets"},Lb=["onClick"],Db={class:"input-with-unit"},Ub={class:"setting-row"},Nb={class:"input-with-unit"},Ob={key:0,class:"mode-hint"},Fb={class:"add-file-area"},Bb={key:0,class:"task-list"},kb={class:"task-list-header"},zb=["onClick"],Hb={class:"task-name"},Gb={class:"task-meta"},Vb={key:0},Wb={key:0,class:"task-progress"},Xb={class:"prog-bar"},$b={class:"prog-pct"},qb=["onClick"],jb=["onClick"],Yb=["href","download"],Zb=["onClick"],Kb={key:1,class:"empty-hint"},Jb={key:0,class:"preview-placeholder"},Qb={class:"video-preview-wrap"},tE=["src"],eE={class:"status-area"},nE={class:"status-header"},iE={class:"status-text"},rE={class:"task-info-badges"},sE={class:"info-badge"},aE={class:"info-badge"},oE={class:"info-badge"},lE={key:0,class:"progress-wrap"},cE={class:"progress-bar"},uE={class:"progress-pct"},fE={key:1,class:"error-msg"},hE={class:"file-info-inline"},dE={key:0},pE={key:1},mE={class:"action-row"},gE=["href","download"],_E={__name:"VideoConverter",setup(n){const t=Zt("gif"),e=Zt(24),i=Zt(960),r=[12,16,24,30],s=Zt([]),o=Zt(null),a=Zt(null),l=Zt(null);let u=0;const c=de(()=>s.value.find(D=>D.id===o.value)||null),f=de(()=>s.value.some(D=>D.status==="running"));function p(D){v(Array.from(D.target.files||[])),D.target.value=""}function d(D){var H;const K=Array.from(((H=D.dataTransfer)==null?void 0:H.files)||[]).filter(nt=>/\.(mp4|mov|webm)$/i.test(nt.name));K.length&&v(K)}function v(D){for(const K of D){if(!/\.(mp4|mov|webm)$/i.test(K.name)||K.size>500*1024*1024)continue;const nt={id:++u,file:K,objectUrl:URL.createObjectURL(K),status:"idle",statusText:"等待开始",progress:0,duration:0,origW:0,origH:0,downloadUrl:"",downloadName:"",errorMsg:"",cancelled:!1,mode:t.value,fps:e.value,width:i.value};s.value.push(nt),o.value||(o.value=nt.id)}}function g(D){o.value=D.id}function m(D){var K;D.status==="running"&&(D.cancelled=!0),URL.revokeObjectURL(D.objectUrl),D.downloadUrl&&URL.revokeObjectURL(D.downloadUrl),s.value=s.value.filter(H=>H.id!==D.id),o.value===D.id&&(o.value=((K=s.value[0])==null?void 0:K.id)||null)}function h(){s.value.filter(D=>D.status==="done"||D.status==="cancelled").forEach(D=>{URL.revokeObjectURL(D.objectUrl),D.downloadUrl&&URL.revokeObjectURL(D.downloadUrl)}),s.value=s.value.filter(D=>D.status!=="done"&&D.status!=="cancelled")}function y(){s.value.forEach(D=>{D.status==="running"&&(D.cancelled=!0)})}async function _(){for(const D of s.value)(D.status==="idle"||D.status==="error")&&await E(D)}function S(D,K){const H=D.target;K.duration=H.duration,K.origW=H.videoWidth,K.origH=H.videoHeight,(!K.width||K.width===960)&&(K.width=H.videoWidth||960)}async function E(D){if(D.status==="running")return;D.mode=t.value,D.fps=e.value,D.width=i.value,D.cancelled=!1,D.status="running",D.progress=0,D.errorMsg="",D.statusText="正在转换…",D.downloadUrl&&(URL.revokeObjectURL(D.downloadUrl),D.downloadUrl="");const K=l.value;if(!K){U(D,"画布初始化失败");return}const H=await L(D.objectUrl);if(!H){U(D,"视频加载失败");return}D.duration=D.duration||H.duration,D.origW=D.origW||H.videoWidth,D.origH=D.origH||H.videoHeight;const nt=D.width,rt=D.origH?Math.round(nt*D.origH/D.origW):Math.round(nt*9/16);K.width=nt,K.height=rt;const ft=K.getContext("2d"),ht=H.duration,w=1/D.fps,X=Math.ceil(ht*D.fps);if(X>1500){U(D,`帧数过多 (${X})，请降低帧率（建议 ≤ 30fps × 时长）`);return}try{D.mode==="gif"?await C(D,H,K,ft,ht,w,X,nt,rt):D.mode==="png"?await z(D,H,K,ft,ht,w,X,nt,rt):await V(D,H,K,ft,ht,w,X,nt,rt)}catch(x){D.cancelled?(D.status="cancelled",D.statusText="已取消"):U(D,"转换失败："+((x==null?void 0:x.message)||String(x)))}}function L(D){return new Promise(K=>{const H=document.createElement("video");H.muted=!0,H.preload="metadata",H.src=D,H.onloadeddata=()=>K(H),H.onerror=()=>K(null),H.load()})}async function C(D,K,H,nt,rt,ft,ht,w,X){const x=Math.round(1e3/D.fps),G=[];for(let R=0;R<ht;R++){if(D.cancelled)throw new Error("cancelled");const I=R*ft;await st(K,Math.min(I,rt-.001)),nt.drawImage(K,0,0,w,X);const k=nt.getImageData(0,0,w,X);G.push(k),D.progress=Math.round((R+1)/ht*80),D.statusText=`采集帧 ${R+1} / ${ht}`,R%3===0&&await ot(0)}if(D.cancelled)throw new Error("cancelled");D.statusText="正在编码 GIF…";const B=await N(G,w,X,x,R=>{D.progress=80+Math.round(R*20)});if(D.cancelled)throw new Error("cancelled");T(D,B,ct(D.file.name)+".gif",`GIF 完成，共 ${ht} 帧`)}async function z(D,K,H,nt,rt,ft,ht,w,X){const x=new Mb,G=x.folder("frames");for(let R=0;R<ht;R++){if(D.cancelled)throw new Error("cancelled");const I=R*ft;await st(K,Math.min(I,rt-.001)),nt.drawImage(K,0,0,w,X);const k=await et(H,"image/png");G.file(`frame_${String(R+1).padStart(4,"0")}.png`,k),D.progress=Math.round((R+1)/ht*80),D.statusText=`导出帧 ${R+1} / ${ht}`,R%5===0&&await ot(0)}if(D.cancelled)throw new Error("cancelled");D.statusText="打包 ZIP…";const B=await x.generateAsync({type:"blob",compression:"DEFLATE"},R=>{D.progress=80+Math.round(R.percent*.2)});T(D,B,ct(D.file.name)+"_frames.zip",`PNG 完成，共 ${ht} 帧`)}async function V(D,K,H,nt,rt,ft,ht,w,X){const x=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm",G=H.captureStream(D.fps),B=[],R=new MediaRecorder(G,{mimeType:x,videoBitsPerSecond:8e6});R.ondataavailable=J=>{J.data.size>0&&B.push(J.data)};const I=new Promise(J=>{R.onstop=J});R.start();for(let J=0;J<ht;J++){if(D.cancelled)throw R.stop(),await I,new Error("cancelled");const A=J*ft;await st(K,Math.min(A,rt-.001)),nt.drawImage(K,0,0,w,X),D.progress=Math.round((J+1)/ht*100),D.statusText=`录制帧 ${J+1} / ${ht}`,await ot(Math.max(16,Math.round(1e3/D.fps)))}R.stop(),await I;const k=new Blob(B,{type:x});T(D,k,ct(D.file.name)+".webm",`WebM 完成，共 ${ht} 帧`)}function T(D,K,H,nt){D.downloadUrl=URL.createObjectURL(K),D.downloadName=H,D.status="done",D.statusText=nt,D.progress=100}function U(D,K){D.status="error",D.statusText="转换失败",D.errorMsg=K,D.progress=0}function P(D){D.cancelled=!0}async function N(D,K,H,nt,rt){const ft=[],ht=G=>{for(let B=0;B<G.length;B++)ft.push(G.charCodeAt(B))},w=G=>ft.push(G&255),X=G=>{ft.push(G&255),ft.push(G>>8&255)};ht("GIF89a"),X(K),X(H),w(112),w(0),w(0),w(33),w(255),w(11),ht("NETSCAPE2.0"),w(3),w(1),X(0),w(0);const x=D.length;for(let G=0;G<x;G++){const R=D[G].data,{palette:I,indexed:k}=M(R,K*H);w(33),w(249),w(4),w(4),X(Math.round(nt/10)),w(0),w(0),w(44),X(0),X(0),X(K),X(H),w(135);for(let b=0;b<256;b++){const q=b*3;w(I[q]||0),w(I[q+1]||0),w(I[q+2]||0)}w(8);const J=Z(k,8);let A=0;for(;A<J.length;){const b=Math.min(255,J.length-A);w(b);for(let q=0;q<b;q++)ft.push(J[A+q]);A+=b}w(0),rt&&rt((G+1)/x),G%3===0&&await ot(0)}return w(59),new Blob([new Uint8Array(ft)],{type:"image/gif"})}function M(D,K){const H=[],nt=Math.max(1,Math.floor(K/4e3));for(let w=0;w<K;w+=nt){const X=w*4;H.push([D[X],D[X+1],D[X+2]])}const rt=Y(H,8);for(;rt.length<256;)rt.push([0,0,0]);const ft=new Uint8Array(K);for(let w=0;w<K;w++){const X=w*4;ft[w]=W(D[X],D[X+1],D[X+2],rt)}const ht=new Uint8Array(256*3);for(let w=0;w<256;w++)ht[w*3]=rt[w][0],ht[w*3+1]=rt[w][1],ht[w*3+2]=rt[w][2];return{palette:ht,indexed:ft}}function Y(D,K){if(K===0||D.length===0){if(D.length===0)return[[0,0,0]];const I=Math.round(D.reduce((A,b)=>A+b[0],0)/D.length),k=Math.round(D.reduce((A,b)=>A+b[1],0)/D.length),J=Math.round(D.reduce((A,b)=>A+b[2],0)/D.length);return[[I,k,J]]}let H=255,nt=0,rt=255,ft=0,ht=255,w=0;for(const[I,k,J]of D)I<H&&(H=I),I>nt&&(nt=I),k<rt&&(rt=k),k>ft&&(ft=k),J<ht&&(ht=J),J>w&&(w=J);const X=nt-H,x=ft-rt,G=w-ht;let B=0;x>=X&&x>=G?B=1:G>=X&&G>=x&&(B=2),D.sort((I,k)=>I[B]-k[B]);const R=Math.floor(D.length/2);return[...Y(D.slice(0,R),K-1),...Y(D.slice(R),K-1)]}function W(D,K,H,nt){let rt=0,ft=1/0;for(let ht=0;ht<nt.length;ht++){const w=D-nt[ht][0],X=K-nt[ht][1],x=H-nt[ht][2],G=w*w+X*X+x*x;G<ft&&(ft=G,rt=ht)}return rt}function Z(D,K){const H=1<<K,nt=H+1;let rt=K+1,ft=nt+1;const ht=()=>1<<rt,w=[];let X=0,x=0;const G=k=>{for(X|=k<<x,x+=rt;x>=8;)w.push(X&255),X>>=8,x-=8};let B=new Map;const R=()=>{B=new Map;for(let k=0;k<H;k++)B.set(String(k),k);ft=nt+1,rt=K+1};R(),G(H);let I="";for(let k=0;k<D.length;k++){const J=String(D[k]),A=I?I+","+J:J;B.has(A)?I=A:(G(B.get(I)),ft<4096?(B.set(A,ft++),ft>ht()&&rt<12&&rt++):(G(H),R()),I=J)}return I&&G(B.get(I)),G(nt),x>0&&w.push(X&255),w}function st(D,K){return new Promise((H,nt)=>{if(Math.abs(D.currentTime-K)<.001){H();return}const rt=()=>{D.removeEventListener("seeked",rt),H()},ft=()=>{D.removeEventListener("error",ft),nt(new Error("seek error"))};D.addEventListener("seeked",rt,{once:!0}),D.addEventListener("error",ft,{once:!0}),D.currentTime=K})}function et(D,K){return new Promise(H=>D.toBlob(H,K))}function ot(D){return new Promise(K=>setTimeout(K,D))}function F(D){return D<1024?D+" B":D<1048576?(D/1024).toFixed(1)+" KB":(D/1048576).toFixed(2)+" MB"}function O(D){if(!D||!isFinite(D))return"";const K=Math.floor(D/60),H=(D%60).toFixed(1);return`${K}:${String(H).padStart(4,"0")}`}function ct(D){return D.replace(/\.[^.]+$/,"")}function Q(D){return{idle:"等待",running:"转换中",done:"完成",error:"失败",cancelled:"已取消"}[D]||D}return Oa(()=>{s.value.forEach(D=>{D.cancelled=!0,URL.revokeObjectURL(D.objectUrl),D.downloadUrl&&URL.revokeObjectURL(D.downloadUrl)})}),(D,K)=>(Pt(),It("div",Sb,[j("div",bb,[j("div",Eb,[K[13]||(K[13]=j("span",{class:"panel-title"},"视频素材转换",-1)),j("div",wb,[s.value.length?(Pt(),It("button",{key:0,class:"btn-ghost btn-xs",onClick:h,title:"清除已完成"},[...K[12]||(K[12]=[j("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[j("polyline",{points:"3 6 5 6 21 6"}),j("path",{d:"M19 6l-1 14H6L5 6"}),j("path",{d:"M10 11v6M14 11v6"})],-1)])])):Jt("",!0),f.value?(Pt(),It("button",{key:1,class:"btn-ghost btn-xs btn-danger",onClick:y},"取消全部")):Jt("",!0)])]),j("div",Tb,[K[20]||(K[20]=j("div",{class:"setting-title"},"输出设置",-1)),j("div",Ab,[K[14]||(K[14]=j("span",{class:"setting-label"},"输出格式",-1)),j("div",Cb,[j("button",{class:oe({active:t.value==="gif"}),onClick:K[0]||(K[0]=H=>t.value="gif")},"GIF 动图",2),j("button",{class:oe({active:t.value==="png"}),onClick:K[1]||(K[1]=H=>t.value="png")},"PNG 序列帧",2),j("button",{class:oe({active:t.value==="webm"}),onClick:K[2]||(K[2]=H=>t.value="webm")},"WebM 视频",2)])]),j("div",Rb,[K[17]||(K[17]=j("span",{class:"setting-label"},"帧率",-1)),j("div",Pb,[j("div",Ib,[(Pt(),It(ye,null,ai(r,H=>j("button",{key:H,class:oe({active:e.value===H}),onClick:nt=>e.value=H},[Ke(Ut(H),1),K[15]||(K[15]=j("small",null,"fps",-1))],10,Lb)),64))]),j("div",Db,[ps(j("input",{type:"number","onUpdate:modelValue":K[3]||(K[3]=H=>e.value=H),min:"1",max:"60",step:"0.5",class:"num-input-sm"},null,512),[[xa,e.value,void 0,{number:!0}]]),K[16]||(K[16]=j("span",{class:"unit"},"fps",-1))])])]),j("div",Ub,[K[19]||(K[19]=j("span",{class:"setting-label"},"输出宽度",-1)),j("div",Nb,[ps(j("input",{type:"number","onUpdate:modelValue":K[4]||(K[4]=H=>i.value=H),min:"64",max:"3840",step:"1",class:"num-input"},null,512),[[xa,i.value,void 0,{number:!0}]]),K[18]||(K[18]=j("span",{class:"unit"},"px  (高度自动)",-1))])]),t.value==="gif"?(Pt(),It("div",Ob," GIF 最多 256 色，颜色丰富的视频建议使用 PNG 序列帧 ")):Jt("",!0)]),j("div",Fb,[j("input",{ref_key:"fileInput",ref:a,type:"file",accept:"video/mp4,video/quicktime,video/webm,.mp4,.mov,.webm",multiple:"",style:{display:"none"},onChange:p},null,544),j("button",{class:"btn-add",onClick:K[5]||(K[5]=H=>a.value.click())},[...K[21]||(K[21]=[j("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[j("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),j("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),Ke(" 添加视频文件 ",-1)])]),K[22]||(K[22]=j("div",{class:"add-hint"},"支持 MP4、MOV、WebM，可多选",-1))]),s.value.length?(Pt(),It("div",Bb,[j("div",kb,[j("span",null,"任务队列 ("+Ut(s.value.length)+")",1),s.value.length>1&&!f.value?(Pt(),It("button",{key:0,class:"btn-link",onClick:_},"全部开始")):Jt("",!0)]),(Pt(!0),It(ye,null,ai(s.value,H=>(Pt(),It("div",{key:H.id,class:oe(["task-item","task-"+H.status]),onClick:nt=>g(H),style:xn({cursor:"pointer",outline:o.value===H.id?"1px solid var(--border-hover, #444)":"none"})},[j("div",Hb,Ut(H.file.name),1),j("div",Gb,[Ke(Ut(F(H.file.size))+" ",1),H.duration?(Pt(),It("span",Vb," · "+Ut(O(H.duration)),1)):Jt("",!0),j("span",{class:oe(["task-badge","badge-"+H.status])},Ut(Q(H.status)),3)]),H.status==="running"?(Pt(),It("div",Wb,[j("div",Xb,[j("div",{class:"prog-fill",style:xn({width:H.progress+"%"})},null,4)]),j("span",$b,Ut(Math.round(H.progress))+"%",1)])):Jt("",!0),j("div",{class:"task-actions",onClick:K[7]||(K[7]=Un(()=>{},["stop"]))},[H.status==="idle"||H.status==="error"?(Pt(),It("button",{key:0,class:"task-btn",onClick:nt=>E(H)},[...K[23]||(K[23]=[j("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"currentColor"},[j("polygon",{points:"5 3 19 12 5 21 5 3"})],-1)])],8,qb)):Jt("",!0),H.status==="running"?(Pt(),It("button",{key:1,class:"task-btn btn-cancel",onClick:nt=>P(H)},[...K[24]||(K[24]=[j("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"currentColor"},[j("rect",{x:"6",y:"6",width:"12",height:"12",rx:"2"})],-1)])],8,jb)):Jt("",!0),H.downloadUrl?(Pt(),It("a",{key:2,href:H.downloadUrl,download:H.downloadName,class:"task-btn btn-dl",onClick:K[6]||(K[6]=Un(()=>{},["stop"]))},[...K[25]||(K[25]=[j("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[j("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),j("polyline",{points:"7 10 12 15 17 10"}),j("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1)])],8,Yb)):Jt("",!0),j("button",{class:"task-btn btn-remove",onClick:nt=>m(H)},[...K[26]||(K[26]=[j("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[j("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),j("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,Zb)])],14,zb))),128))])):(Pt(),It("div",Kb,[...K[27]||(K[27]=[j("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.2"},[j("polygon",{points:"23 7 16 12 23 17 23 7"}),j("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"})],-1),j("p",null,'还没有任务，点击"添加视频文件"开始',-1)])]))]),j("div",{class:"conv-preview",onDragover:K[11]||(K[11]=Un(()=>{},["prevent"])),onDrop:Un(d,["prevent"])},[c.value?Jt("",!0):(Pt(),It("div",Jb,[...K[28]||(K[28]=[j("svg",{width:"56",height:"56",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1"},[j("polygon",{points:"23 7 16 12 23 17 23 7"}),j("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"})],-1),j("p",null,"点击左侧任务可预览视频",-1),j("p",{class:"placeholder-sub"},"或拖拽视频文件到此处添加",-1)])])),c.value?(Pt(),It(ye,{key:1},[j("div",Qb,[(Pt(),It("video",{key:c.value.id,src:c.value.objectUrl,controls:"",muted:"",playsinline:"",class:"video-preview",onLoadedmetadata:K[8]||(K[8]=H=>S(H,c.value))},null,40,tE))]),j("div",eE,[j("div",nE,[j("div",{class:oe(["status-row","status-"+c.value.status])},[K[29]||(K[29]=j("span",{class:"status-dot"},null,-1)),j("span",iE,Ut(c.value.statusText||Q(c.value.status)),1)],2),j("div",rE,[j("span",sE,Ut(t.value.toUpperCase()),1),j("span",aE,Ut(e.value)+" fps",1),j("span",oE,Ut(i.value)+"px",1)])]),c.value.status==="running"?(Pt(),It("div",lE,[j("div",cE,[j("div",{class:"progress-fill",style:xn({width:c.value.progress+"%"})},null,4)]),j("span",uE,Ut(Math.round(c.value.progress))+"%",1)])):Jt("",!0),c.value.errorMsg?(Pt(),It("div",fE,Ut(c.value.errorMsg),1)):Jt("",!0),j("div",hE,[j("span",null,Ut(c.value.file.name),1),j("span",null,Ut(F(c.value.file.size)),1),c.value.duration?(Pt(),It("span",dE,Ut(O(c.value.duration)),1)):Jt("",!0),c.value.origW?(Pt(),It("span",pE,Ut(c.value.origW)+" × "+Ut(c.value.origH),1)):Jt("",!0)]),j("div",mE,[c.value.status==="idle"||c.value.status==="error"?(Pt(),It("button",{key:0,class:"btn-convert",onClick:K[9]||(K[9]=H=>E(c.value))}," 开始转换 ")):Jt("",!0),c.value.status==="running"?(Pt(),It("button",{key:1,class:"btn-cancel-big",onClick:K[10]||(K[10]=H=>P(c.value))}," 取消转换 ")):Jt("",!0),c.value.downloadUrl?(Pt(),It("a",{key:2,href:c.value.downloadUrl,download:c.value.downloadName,class:"btn-download"},[K[30]||(K[30]=j("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[j("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),j("polyline",{points:"7 10 12 15 17 10"}),j("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1)),Ke(" 下载 "+Ut(c.value.downloadName),1)],8,gE)):Jt("",!0)])])],64)):Jt("",!0)],32),j("canvas",{ref_key:"offCanvas",ref:l,style:{display:"none"}},null,512)]))}},vE=Ai(_E,[["__scopeId","data-v-efa7390c"]]),xE={class:"cropper-page"},yE={class:"ctrl-panel"},ME={class:"section"},SE={class:"mode-cards"},bE=["onClick"],EE={class:"mode-name"},wE={class:"mode-desc"},TE={class:"section"},AE={class:"section-title"},CE={class:"section-val"},RE={class:"section"},PE={class:"toggle-row"},IE={class:"section"},LE={class:"section-title"},DE={class:"section-val"},UE={class:"section"},NE={key:0,class:"section section-actions"},OE=["disabled"],FE=["disabled"],BE={key:1,class:"task-list"},kE={class:"task-list-hd"},zE=["onClick"],HE={class:"task-thumb"},GE=["src"],VE={key:1,class:"thumb-placeholder"},WE={class:"task-info"},XE={class:"task-name"},$E={class:"task-meta"},qE={key:0},jE={key:1,class:"crop-size"},YE=["onClick"],ZE=["onClick"],KE={key:0,class:"preview-empty"},JE={class:"compare-wrap"},QE={class:"compare-side"},tw={class:"compare-img-wrap checker"},ew={key:0,class:"compare-size"},nw={class:"compare-side"},iw={class:"compare-img-wrap checker"},rw={key:0,class:"canvas-overlay"},sw={key:1,class:"canvas-overlay"},aw={key:0,class:"compare-size"},ow={key:0,class:"saving"},lw={class:"action-row"},cw=["disabled"],uw={key:1,class:"error-msg"},fw={__name:"PngCropper",setup(n){const t=Zt(1),e=Zt(!1),i=Zt(10),r=Zt("precise"),s=[{id:"precise",name:"精准模式",desc:"α≥1  padding=10  保留所有半透明",threshold:1,padding:10},{id:"standard",name:"标准模式",desc:"α≥10  padding=5   适合普通 PNG",threshold:10,padding:5},{id:"strong",name:"强力模式",desc:"α≥50  padding=0   去除透明噪点",threshold:50,padding:0}];function o(F){r.value=F.id,t.value=F.threshold,i.value=F.padding,F.id==="precise"&&(e.value=!0),N()}function a(){e.value=!e.value,e.value&&(t.value=1),N()}function l(){r.value="custom",N()}const u=Zt([]),c=Zt(null),f=Zt(null),p=Zt(null),d=Zt(null),v=Zt(null);let g=0;const m=de(()=>u.value.find(F=>F.id===c.value)||null),h=de(()=>u.value.some(F=>F.status==="processing")),y=de(()=>u.value.some(F=>F.status==="done"));function _(F){E(Array.from(F.target.files||[])),F.target.value=""}function S(F){var ct;const O=Array.from(((ct=F.dataTransfer)==null?void 0:ct.files)||[]).filter(Q=>Q.type==="image/png");O.length&&E(O)}function E(F){for(const O of F){if(O.type!=="image/png")continue;const ct={id:++g,file:O,status:"idle",previewUrl:"",origImageData:null,cropImageData:null,origW:0,origH:0,cropW:0,cropH:0,savingPct:0,downloadUrl:"",errorMsg:""};u.value.push(ct),L(ct),c.value||(c.value=ct.id)}}function L(F){const O=URL.createObjectURL(F.file),ct=new Image;ct.onload=()=>{F.previewUrl=O;const Q=document.createElement("canvas");Q.width=ct.naturalWidth,Q.height=ct.naturalHeight,Q.getContext("2d").drawImage(ct,0,0),F.origImageData=Q.getContext("2d").getImageData(0,0,Q.width,Q.height),F.origW=Q.width,F.origH=Q.height,c.value===F.id&&gn(()=>W(F))},ct.src=O}function C(F){c.value=F.id,gn(()=>{W(F),Z(F)})}function z(F){var O;URL.revokeObjectURL(F.previewUrl),F.downloadUrl&&URL.revokeObjectURL(F.downloadUrl),u.value=u.value.filter(ct=>ct.id!==F.id),c.value===F.id&&(c.value=((O=u.value[0])==null?void 0:O.id)||null)}function V(){u.value.forEach(F=>{URL.revokeObjectURL(F.previewUrl),F.downloadUrl&&URL.revokeObjectURL(F.downloadUrl)}),u.value=[],c.value=null}function T(F,O,ct){const{data:Q,width:D,height:K}=F;let H=D,nt=-1,rt=K,ft=-1;for(let B=0;B<K;B++)for(let R=0;R<D;R++)Q[(B*D+R)*4+3]>O&&(R<H&&(H=R),R>nt&&(nt=R),B<rt&&(rt=B),B>ft&&(ft=B));if(nt<0)return null;H=Math.max(0,H-ct),rt=Math.max(0,rt-ct),nt=Math.min(D-1,nt+ct),ft=Math.min(K-1,ft+ct);const ht=nt-H+1,w=ft-rt+1,X=document.createElement("canvas");X.width=ht,X.height=w;const x=X.getContext("2d"),G=document.createElement("canvas");return G.width=D,G.height=K,G.getContext("2d").putImageData(F,0,0),x.drawImage(G,H,rt,ht,w,0,0,ht,w),{canvas:X,x:H,y:rt,w:ht,h:w}}async function U(F){if(!F.origImageData){F.errorMsg="图片尚未加载";return}F.status="processing",F.errorMsg="",await gn();try{const O=e.value?1:t.value,ct=T(F.origImageData,O,i.value);if(!ct){F.status="error",F.errorMsg="图片全透明，无需裁剪";return}F.cropW=ct.w,F.cropH=ct.h,F.savingPct=Math.round((1-ct.w*ct.h/(F.origW*F.origH))*100);const Q=await st(ct.canvas);F.downloadUrl&&URL.revokeObjectURL(F.downloadUrl),F.downloadUrl=URL.createObjectURL(Q),F.cropCanvas=ct.canvas,F.status="done",c.value===F.id&&gn(()=>Z(F))}catch(O){F.status="error",F.errorMsg="裁剪失败："+O.message}}async function P(){for(const F of u.value)await U(F)}function N(){const F=m.value;F&&F.status==="done"&&U(F)}function M(F){if(!F.downloadUrl)return;const O=document.createElement("a");O.href=F.downloadUrl,O.download=F.file.name.replace(/\.png$/i,"_cropped.png"),O.click()}async function Y(){for(const F of u.value)F.status==="done"&&M(F),await et(80)}function W(F){const O=d.value;!O||!F.origImageData||(O.width=F.origW,O.height=F.origH,O.getContext("2d").putImageData(F.origImageData,0,0))}function Z(F){const O=v.value;O&&(F.cropCanvas?(O.width=F.cropCanvas.width,O.height=F.cropCanvas.height,O.getContext("2d").drawImage(F.cropCanvas,0,0)):(O.width=1,O.height=1,O.getContext("2d").clearRect(0,0,1,1)))}Rr(m,F=>{F&&gn(()=>{W(F),Z(F)})});function st(F){return new Promise(O=>F.toBlob(O,"image/png"))}function et(F){return new Promise(O=>setTimeout(O,F))}function ot(F){return{idle:"待处理",processing:"处理中",done:"完成",error:"失败"}[F]||F}return Oa(()=>{u.value.forEach(F=>{URL.revokeObjectURL(F.previewUrl),F.downloadUrl&&URL.revokeObjectURL(F.downloadUrl)})}),(F,O)=>(Pt(),It("div",xE,[j("div",yE,[O[24]||(O[24]=j("div",{class:"panel-header"},[j("span",{class:"panel-title"},"裁剪 PNG 透明像素")],-1)),j("div",ME,[O[9]||(O[9]=j("div",{class:"section-title"},"裁剪模式",-1)),j("div",SE,[(Pt(),It(ye,null,ai(s,ct=>j("button",{key:ct.id,class:oe(["mode-card",{active:r.value===ct.id}]),onClick:Q=>o(ct)},[j("span",EE,Ut(ct.name),1),j("span",wE,Ut(ct.desc),1)],10,bE)),64))])]),j("div",TE,[j("div",AE,[O[10]||(O[10]=Ke("Alpha 阈值 ",-1)),j("span",CE,Ut(t.value),1)]),ps(j("input",{type:"range","onUpdate:modelValue":O[0]||(O[0]=ct=>t.value=ct),min:"0",max:"255",step:"1",class:"slider",onInput:l},null,544),[[xa,t.value,void 0,{number:!0}]]),O[11]||(O[11]=j("div",{class:"hint-box"}," Alpha 阈值越低，保留的半透明边缘越多；阈值越高，越容易去掉透明噪点，但也可能裁掉阴影或发光。 ",-1))]),j("div",RE,[j("label",PE,[O[13]||(O[13]=j("div",{class:"toggle-info"},[j("span",{class:"toggle-label"},"保护半透明边缘"),j("span",{class:"toggle-sub"},"开启后阈值自动降为 1")],-1)),j("div",{class:oe(["toggle-switch",{on:e.value}]),onClick:a},[...O[12]||(O[12]=[j("div",{class:"toggle-knob"},null,-1)])],2)])]),j("div",IE,[j("div",LE,[O[14]||(O[14]=Ke("扩展边距 (Padding) ",-1)),j("span",DE,Ut(i.value)+"px",1)]),ps(j("input",{type:"range","onUpdate:modelValue":O[1]||(O[1]=ct=>i.value=ct),min:"0",max:"200",step:"1",class:"slider",onInput:l},null,544),[[xa,i.value,void 0,{number:!0}]]),O[15]||(O[15]=j("div",{class:"hint-box"}," 防止阴影、发光、毛发等半透明边缘被意外裁掉。 ",-1))]),j("div",UE,[j("input",{ref_key:"fileInput",ref:f,type:"file",accept:"image/png",multiple:"",style:{display:"none"},onChange:_},null,544),j("button",{class:"btn-add",onClick:O[2]||(O[2]=ct=>f.value.click())},[...O[16]||(O[16]=[j("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[j("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),j("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),Ke(" 添加 PNG 文件 ",-1)])]),O[17]||(O[17]=j("div",{class:"add-hint"},"支持多选，仅处理 PNG",-1))]),u.value.length?(Pt(),It("div",NE,[j("button",{class:"btn-primary",disabled:h.value,onClick:P},[O[18]||(O[18]=j("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor"},[j("polygon",{points:"5 3 19 12 5 21 5 3"})],-1)),Ke(" "+Ut(h.value?"处理中…":"全部裁剪"),1)],8,OE),j("button",{class:"btn-ghost",onClick:Y,disabled:!y.value},[...O[19]||(O[19]=[j("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[j("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),j("polyline",{points:"7 10 12 15 17 10"}),j("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Ke(" 下载全部 ",-1)])],8,FE),j("button",{class:"btn-ghost btn-danger",onClick:V},"清空")])):Jt("",!0),u.value.length?(Pt(),It("div",BE,[j("div",kE,"文件列表 ("+Ut(u.value.length)+")",1),(Pt(!0),It(ye,null,ai(u.value,ct=>(Pt(),It("div",{key:ct.id,class:oe(["task-item",["task-"+ct.status,{selected:c.value===ct.id}]]),onClick:Q=>C(ct)},[j("div",HE,[ct.previewUrl?(Pt(),It("img",{key:0,src:ct.previewUrl},null,8,GE)):(Pt(),It("div",VE,[...O[20]||(O[20]=[j("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[j("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),j("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),j("polyline",{points:"21 15 16 10 5 21"})],-1)])]))]),j("div",WE,[j("div",XE,Ut(ct.file.name),1),j("div",$E,[ct.origW?(Pt(),It("span",qE,Ut(ct.origW)+"×"+Ut(ct.origH),1)):Jt("",!0),ct.cropW&&ct.status==="done"?(Pt(),It("span",jE,"→ "+Ut(ct.cropW)+"×"+Ut(ct.cropH),1)):Jt("",!0),j("span",{class:oe(["task-badge","badge-"+ct.status])},Ut(ot(ct.status)),3)])]),j("div",{class:"task-btns",onClick:O[3]||(O[3]=Un(()=>{},["stop"]))},[ct.status==="done"?(Pt(),It("button",{key:0,class:"tbtn tbtn-dl",onClick:Q=>M(ct),title:"下载"},[...O[21]||(O[21]=[j("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[j("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),j("polyline",{points:"7 10 12 15 17 10"}),j("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1)])],8,YE)):Jt("",!0),j("button",{class:"tbtn tbtn-rm",onClick:Q=>z(ct),title:"移除"},[...O[22]||(O[22]=[j("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[j("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),j("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,ZE)])],10,zE))),128))])):(Pt(),It("div",{key:2,class:"empty-hint",onClick:O[4]||(O[4]=ct=>f.value.click()),onDragover:O[5]||(O[5]=Un(()=>{},["prevent"])),onDrop:Un(S,["prevent"])},[...O[23]||(O[23]=[j("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.2"},[j("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),j("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),j("polyline",{points:"21 15 16 10 5 21"})],-1),j("p",null,"点击或拖拽 PNG 文件到此处",-1)])],32))]),j("div",{class:"preview-pane",onDragover:O[8]||(O[8]=Un(()=>{},["prevent"])),onDrop:Un(S,["prevent"])},[m.value?Jt("",!0):(Pt(),It("div",KE,[...O[25]||(O[25]=[cs('<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" data-v-4f90e8a0><rect x="3" y="3" width="18" height="18" rx="2" data-v-4f90e8a0></rect><circle cx="8.5" cy="8.5" r="1.5" data-v-4f90e8a0></circle><polyline points="21 15 16 10 5 21" data-v-4f90e8a0></polyline></svg><p data-v-4f90e8a0>点击左侧文件查看裁剪对比</p><p class="sub" data-v-4f90e8a0>或拖拽 PNG 文件到此处添加</p>',3)])])),m.value?(Pt(),It(ye,{key:1},[j("div",JE,[j("div",QE,[O[26]||(O[26]=j("div",{class:"compare-label"},"原图",-1)),j("div",tw,[j("canvas",{ref_key:"origCanvas",ref:d,class:"compare-canvas"},null,512)]),m.value.origW?(Pt(),It("div",ew,Ut(m.value.origW)+" × "+Ut(m.value.origH),1)):Jt("",!0)]),O[30]||(O[30]=j("div",{class:"compare-arrow"},[j("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[j("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),j("polyline",{points:"12 5 19 12 12 19"})])],-1)),j("div",nw,[O[29]||(O[29]=j("div",{class:"compare-label"},"裁剪后",-1)),j("div",iw,[j("canvas",{ref_key:"cropCanvas",ref:v,class:"compare-canvas"},null,512),m.value.status==="idle"?(Pt(),It("div",rw,[...O[27]||(O[27]=[j("span",null,'点击"全部裁剪"预览',-1)])])):Jt("",!0),m.value.status==="processing"?(Pt(),It("div",sw,[...O[28]||(O[28]=[j("span",null,"处理中…",-1)])])):Jt("",!0)]),m.value.cropW?(Pt(),It("div",aw,[Ke(Ut(m.value.cropW)+" × "+Ut(m.value.cropH)+" ",1),m.value.savingPct?(Pt(),It("span",ow,"节省 "+Ut(m.value.savingPct)+"%",1)):Jt("",!0)])):Jt("",!0)])]),j("div",lw,[j("button",{class:"btn-primary",onClick:O[6]||(O[6]=ct=>U(m.value)),disabled:m.value.status==="processing"}," 裁剪此文件 ",8,cw),m.value.status==="done"?(Pt(),It("button",{key:0,class:"btn-dl",onClick:O[7]||(O[7]=ct=>M(m.value))},[O[31]||(O[31]=j("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[j("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),j("polyline",{points:"7 10 12 15 17 10"}),j("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1)),Ke(" 下载 "+Ut(m.value.file.name),1)])):Jt("",!0),m.value.errorMsg?(Pt(),It("div",uw,Ut(m.value.errorMsg),1)):Jt("",!0)])],64)):Jt("",!0)],32),j("canvas",{ref_key:"workCanvas",ref:p,style:{display:"none"}},null,512)]))}},hw=Ai(fw,[["__scopeId","data-v-4f90e8a0"]]),dw=[{path:"/",component:vb},{path:"/convert",component:vE},{path:"/png-crop",component:hw}],pw=m0({history:qg("/kskr-preview/"),routes:dw});ag(C0).use(pw).mount("#app");
