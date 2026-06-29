(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ml(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const se={},wr=[],Un=()=>{},vf=()=>!1,ba=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ea=n=>n.startsWith("onUpdate:"),Ee=Object.assign,gl=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Id=Object.prototype.hasOwnProperty,te=(n,t)=>Id.call(n,t),Dt=Array.isArray,Tr=n=>xs(n)==="[object Map]",xf=n=>xs(n)==="[object Set]",jl=n=>xs(n)==="[object Date]",kt=n=>typeof n=="function",pe=n=>typeof n=="string",On=n=>typeof n=="symbol",ee=n=>n!==null&&typeof n=="object",yf=n=>(ee(n)||kt(n))&&kt(n.then)&&kt(n.catch),Mf=Object.prototype.toString,xs=n=>Mf.call(n),Ld=n=>xs(n).slice(8,-1),Sf=n=>xs(n)==="[object Object]",_l=n=>pe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,es=ml(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wa=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Dd=/-\w/g,qe=wa(n=>n.replace(Dd,t=>t.slice(1).toUpperCase())),Ud=/\B([A-Z])/g,Qi=wa(n=>n.replace(Ud,"-$1").toLowerCase()),Ta=wa(n=>n.charAt(0).toUpperCase()+n.slice(1)),qa=wa(n=>n?`on${Ta(n)}`:""),In=(n,t)=>!Object.is(n,t),na=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},bf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},vl=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Nd=n=>{const t=pe(n)?Number(n):NaN;return isNaN(t)?n:t};let $l;const Aa=()=>$l||($l=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _n(n){if(Dt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],r=pe(i)?kd(i):_n(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(pe(n)||ee(n))return n}const Od=/;(?![^(]*\))/g,Fd=/:([^]+)/,Bd=/\/\*[^]*?\*\//g;function kd(n){const t={};return n.replace(Bd,"").split(Od).forEach(e=>{if(e){const i=e.split(Fd);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function _e(n){let t="";if(pe(n))t=n;else if(Dt(n))for(let e=0;e<n.length;e++){const i=_e(n[e]);i&&(t+=i+" ")}else if(ee(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const zd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gd=ml(zd);function Ef(n){return!!n||n===""}function Hd(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=xl(n[i],t[i]);return e}function xl(n,t){if(n===t)return!0;let e=jl(n),i=jl(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=On(n),i=On(t),e||i)return n===t;if(e=Dt(n),i=Dt(t),e||i)return e&&i?Hd(n,t):!1;if(e=ee(n),i=ee(t),e||i){if(!e||!i)return!1;const r=Object.keys(n).length,s=Object.keys(t).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!xl(n[o],t[o]))return!1}}return String(n)===String(t)}const wf=n=>!!(n&&n.__v_isRef===!0),Yt=n=>pe(n)?n:n==null?"":Dt(n)||ee(n)&&(n.toString===Mf||!kt(n.toString))?wf(n)?Yt(n.value):JSON.stringify(n,Tf,2):String(n),Tf=(n,t)=>wf(t)?Tf(n,t.value):Tr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,r],s)=>(e[ja(i,s)+" =>"]=r,e),{})}:xf(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>ja(e))}:On(t)?ja(t):ee(t)&&!Dt(t)&&!Sf(t)?String(t):t,ja=(n,t="")=>{var e;return On(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ie;class Vd{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ie&&(Ie.active?(this.parent=Ie,this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Ie;try{return Ie=this,t()}finally{Ie=e}}}on(){++this._on===1&&(this.prevScope=Ie,Ie=this)}off(){if(this._on>0&&--this._on===0){if(Ie===this)Ie=this.prevScope;else{let t=Ie;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Wd(){return Ie}let ce;const $a=new WeakSet;class Af{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ie&&(Ie.active?Ie.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$a.has(this)&&($a.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Yl(this),Pf(this);const t=ce,e=vn;ce=this,vn=!0;try{return this.fn()}finally{If(this),ce=t,vn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Sl(t);this.deps=this.depsTail=void 0,Yl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$a.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ho(this)&&this.run()}get dirty(){return Ho(this)}}let Cf=0,ns,is;function Rf(n,t=!1){if(n.flags|=8,t){n.next=is,is=n;return}n.next=ns,ns=n}function yl(){Cf++}function Ml(){if(--Cf>0)return;if(is){let t=is;for(is=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;ns;){let t=ns;for(ns=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Pf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function If(n){let t,e=n.depsTail,i=e;for(;i;){const r=i.prevDep;i.version===-1?(i===e&&(e=r),Sl(i),Xd(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=t,n.depsTail=e}function Ho(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Lf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Lf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===us)||(n.globalVersion=us,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ho(n))))return;n.flags|=2;const t=n.dep,e=ce,i=vn;ce=n,vn=!0;try{Pf(n);const r=n.fn(n._value);(t.version===0||In(r,n._value))&&(n.flags|=128,n._value=r,t.version++)}catch(r){throw t.version++,r}finally{ce=e,vn=i,If(n),n.flags&=-3}}function Sl(n,t=!1){const{dep:e,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)Sl(s,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Xd(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let vn=!0;const Df=[];function ei(){Df.push(vn),vn=!1}function ni(){const n=Df.pop();vn=n===void 0?!0:n}function Yl(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=ce;ce=void 0;try{t()}finally{ce=e}}}let us=0;class qd{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class bl{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ce||!vn||ce===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==ce)e=this.activeLink=new qd(ce,this),ce.deps?(e.prevDep=ce.depsTail,ce.depsTail.nextDep=e,ce.depsTail=e):ce.deps=ce.depsTail=e,Uf(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=ce.depsTail,e.nextDep=void 0,ce.depsTail.nextDep=e,ce.depsTail=e,ce.deps===e&&(ce.deps=i)}return e}trigger(t){this.version++,us++,this.notify(t)}notify(t){yl();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ml()}}}function Uf(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Uf(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Vo=new WeakMap,Xi=Symbol(""),Wo=Symbol(""),fs=Symbol("");function Oe(n,t,e){if(vn&&ce){let i=Vo.get(n);i||Vo.set(n,i=new Map);let r=i.get(e);r||(i.set(e,r=new bl),r.map=i,r.key=e),r.track()}}function Yn(n,t,e,i,r,s){const o=Vo.get(n);if(!o){us++;return}const a=l=>{l&&l.trigger()};if(yl(),t==="clear")o.forEach(a);else{const l=Dt(n),u=l&&_l(e);if(l&&e==="length"){const c=Number(i);o.forEach((f,p)=>{(p==="length"||p===fs||!On(p)&&p>=c)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),u&&a(o.get(fs)),t){case"add":l?u&&a(o.get("length")):(a(o.get(Xi)),Tr(n)&&a(o.get(Wo)));break;case"delete":l||(a(o.get(Xi)),Tr(n)&&a(o.get(Wo)));break;case"set":Tr(n)&&a(o.get(Xi));break}}Ml()}function nr(n){const t=Jt(n);return t===n?t:(Oe(t,"iterate",fs),un(n)?t:t.map(yn))}function Ca(n){return Oe(n=Jt(n),"iterate",fs),n}function Cn(n,t){return ii(n)?Ir(qi(n)?yn(t):t):yn(t)}const jd={__proto__:null,[Symbol.iterator](){return Ya(this,Symbol.iterator,n=>Cn(this,n))},concat(...n){return nr(this).concat(...n.map(t=>Dt(t)?nr(t):t))},entries(){return Ya(this,"entries",n=>(n[1]=Cn(this,n[1]),n))},every(n,t){return Bn(this,"every",n,t,void 0,arguments)},filter(n,t){return Bn(this,"filter",n,t,e=>e.map(i=>Cn(this,i)),arguments)},find(n,t){return Bn(this,"find",n,t,e=>Cn(this,e),arguments)},findIndex(n,t){return Bn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Bn(this,"findLast",n,t,e=>Cn(this,e),arguments)},findLastIndex(n,t){return Bn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Bn(this,"forEach",n,t,void 0,arguments)},includes(...n){return Za(this,"includes",n)},indexOf(...n){return Za(this,"indexOf",n)},join(n){return nr(this).join(n)},lastIndexOf(...n){return Za(this,"lastIndexOf",n)},map(n,t){return Bn(this,"map",n,t,void 0,arguments)},pop(){return Gr(this,"pop")},push(...n){return Gr(this,"push",n)},reduce(n,...t){return Zl(this,"reduce",n,t)},reduceRight(n,...t){return Zl(this,"reduceRight",n,t)},shift(){return Gr(this,"shift")},some(n,t){return Bn(this,"some",n,t,void 0,arguments)},splice(...n){return Gr(this,"splice",n)},toReversed(){return nr(this).toReversed()},toSorted(n){return nr(this).toSorted(n)},toSpliced(...n){return nr(this).toSpliced(...n)},unshift(...n){return Gr(this,"unshift",n)},values(){return Ya(this,"values",n=>Cn(this,n))}};function Ya(n,t,e){const i=Ca(n),r=i[t]();return i!==n&&!un(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=e(s.value)),s}),r}const $d=Array.prototype;function Bn(n,t,e,i,r,s){const o=Ca(n),a=o!==n&&!un(n),l=o[t];if(l!==$d[t]){const f=l.apply(n,s);return a?yn(f):f}let u=e;o!==n&&(a?u=function(f,p){return e.call(this,Cn(n,f),p,n)}:e.length>2&&(u=function(f,p){return e.call(this,f,p,n)}));const c=l.call(o,u,i);return a&&r?r(c):c}function Zl(n,t,e,i){const r=Ca(n),s=r!==n&&!un(n);let o=e,a=!1;r!==n&&(s?(a=i.length===0,o=function(u,c,f){return a&&(a=!1,u=Cn(n,u)),e.call(this,u,Cn(n,c),f,n)}):e.length>3&&(o=function(u,c,f){return e.call(this,u,c,f,n)}));const l=r[t](o,...i);return a?Cn(n,l):l}function Za(n,t,e){const i=Jt(n);Oe(i,"iterate",fs);const r=i[t](...e);return(r===-1||r===!1)&&Tl(e[0])?(e[0]=Jt(e[0]),i[t](...e)):r}function Gr(n,t,e=[]){ei(),yl();const i=Jt(n)[t].apply(n,e);return Ml(),ni(),i}const Yd=ml("__proto__,__v_isRef,__isVue"),Nf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(On));function Zd(n){On(n)||(n=String(n));const t=Jt(this);return Oe(t,"has",n),t.hasOwnProperty(n)}class Of{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const r=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return i===(r?s?ap:zf:s?kf:Bf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Dt(t);if(!r){let l;if(o&&(l=jd[e]))return l;if(e==="hasOwnProperty")return Zd}const a=Reflect.get(t,e,Be(t)?t:i);if((On(e)?Nf.has(e):Yd(e))||(r||Oe(t,"get",e),s))return a;if(Be(a)){const l=o&&_l(e)?a:a.value;return r&&ee(l)?qo(l):l}return ee(a)?r?qo(a):Ra(a):a}}class Ff extends Of{constructor(t=!1){super(!1,t)}set(t,e,i,r){let s=t[e];const o=Dt(t)&&_l(e);if(!this._isShallow){const u=ii(s);if(!un(i)&&!ii(i)&&(s=Jt(s),i=Jt(i)),!o&&Be(s)&&!Be(i))return u||(s.value=i),!0}const a=o?Number(e)<t.length:te(t,e),l=Reflect.set(t,e,i,Be(t)?t:r);return t===Jt(r)&&(a?In(i,s)&&Yn(t,"set",e,i):Yn(t,"add",e,i)),l}deleteProperty(t,e){const i=te(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&i&&Yn(t,"delete",e,void 0),r}has(t,e){const i=Reflect.has(t,e);return(!On(e)||!Nf.has(e))&&Oe(t,"has",e),i}ownKeys(t){return Oe(t,"iterate",Dt(t)?"length":Xi),Reflect.ownKeys(t)}}class Kd extends Of{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Jd=new Ff,Qd=new Kd,tp=new Ff(!0);const Xo=n=>n,Rs=n=>Reflect.getPrototypeOf(n);function ep(n,t,e){return function(...i){const r=this.__v_raw,s=Jt(r),o=Tr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=r[n](...i),c=e?Xo:t?Ir:yn;return!t&&Oe(s,"iterate",l?Wo:Xi),Ee(Object.create(u),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:a?[c(f[0]),c(f[1])]:c(f),done:p}}})}}function Ps(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function np(n,t){const e={get(r){const s=this.__v_raw,o=Jt(s),a=Jt(r);n||(In(r,a)&&Oe(o,"get",r),Oe(o,"get",a));const{has:l}=Rs(o),u=t?Xo:n?Ir:yn;if(l.call(o,r))return u(s.get(r));if(l.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Oe(Jt(r),"iterate",Xi),r.size},has(r){const s=this.__v_raw,o=Jt(s),a=Jt(r);return n||(In(r,a)&&Oe(o,"has",r),Oe(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Jt(a),u=t?Xo:n?Ir:yn;return!n&&Oe(l,"iterate",Xi),a.forEach((c,f)=>r.call(s,u(c),u(f),o))}};return Ee(e,n?{add:Ps("add"),set:Ps("set"),delete:Ps("delete"),clear:Ps("clear")}:{add(r){const s=Jt(this),o=Rs(s),a=Jt(r),l=!t&&!un(r)&&!ii(r)?a:r;return o.has.call(s,l)||In(r,l)&&o.has.call(s,r)||In(a,l)&&o.has.call(s,a)||(s.add(l),Yn(s,"add",l,l)),this},set(r,s){!t&&!un(s)&&!ii(s)&&(s=Jt(s));const o=Jt(this),{has:a,get:l}=Rs(o);let u=a.call(o,r);u||(r=Jt(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,s),u?In(s,c)&&Yn(o,"set",r,s):Yn(o,"add",r,s),this},delete(r){const s=Jt(this),{has:o,get:a}=Rs(s);let l=o.call(s,r);l||(r=Jt(r),l=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return l&&Yn(s,"delete",r,void 0),u},clear(){const r=Jt(this),s=r.size!==0,o=r.clear();return s&&Yn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=ep(r,n,t)}),e}function El(n,t){const e=np(n,t);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(te(e,r)&&r in i?e:i,r,s)}const ip={get:El(!1,!1)},rp={get:El(!1,!0)},sp={get:El(!0,!1)};const Bf=new WeakMap,kf=new WeakMap,zf=new WeakMap,ap=new WeakMap;function op(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lp(n){return n.__v_skip||!Object.isExtensible(n)?0:op(Ld(n))}function Ra(n){return ii(n)?n:wl(n,!1,Jd,ip,Bf)}function Gf(n){return wl(n,!1,tp,rp,kf)}function qo(n){return wl(n,!0,Qd,sp,zf)}function wl(n,t,e,i,r){if(!ee(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const s=lp(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:e);return r.set(n,a),a}function qi(n){return ii(n)?qi(n.__v_raw):!!(n&&n.__v_isReactive)}function ii(n){return!!(n&&n.__v_isReadonly)}function un(n){return!!(n&&n.__v_isShallow)}function Tl(n){return n?!!n.__v_raw:!1}function Jt(n){const t=n&&n.__v_raw;return t?Jt(t):n}function cp(n){return!te(n,"__v_skip")&&Object.isExtensible(n)&&bf(n,"__v_skip",!0),n}const yn=n=>ee(n)?Ra(n):n,Ir=n=>ee(n)?qo(n):n;function Be(n){return n?n.__v_isRef===!0:!1}function ie(n){return Hf(n,!1)}function up(n){return Hf(n,!0)}function Hf(n,t){return Be(n)?n:new fp(n,t)}class fp{constructor(t,e){this.dep=new bl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Jt(t),this._value=e?t:yn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||un(t)||ii(t);t=i?t:Jt(t),In(t,e)&&(this._rawValue=t,this._value=i?t:yn(t),this.dep.trigger())}}function ji(n){return Be(n)?n.value:n}const hp={get:(n,t,e)=>t==="__v_raw"?n:ji(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const r=n[t];return Be(r)&&!Be(e)?(r.value=e,!0):Reflect.set(n,t,e,i)}};function Vf(n){return qi(n)?n:new Proxy(n,hp)}class dp{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new bl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=us-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return Rf(this,!0),!0}get value(){const t=this.dep.track();return Lf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function pp(n,t,e=!1){let i,r;return kt(n)?i=n:(i=n.get,r=n.set),new dp(i,r,e)}const Is={},la=new WeakMap;let Fi;function mp(n,t=!1,e=Fi){if(e){let i=la.get(e);i||la.set(e,i=[]),i.push(n)}}function gp(n,t,e=se){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=e,u=S=>r?S:un(S)||r===!1||r===0?Zn(S,1):Zn(S);let c,f,p,d,v=!1,g=!1;if(Be(n)?(f=()=>n.value,v=un(n)):qi(n)?(f=()=>u(n),v=!0):Dt(n)?(g=!0,v=n.some(S=>qi(S)||un(S)),f=()=>n.map(S=>{if(Be(S))return S.value;if(qi(S))return u(S);if(kt(S))return l?l(S,2):S()})):kt(n)?t?f=l?()=>l(n,2):n:f=()=>{if(p){ei();try{p()}finally{ni()}}const S=Fi;Fi=c;try{return l?l(n,3,[d]):n(d)}finally{Fi=S}}:f=Un,t&&r){const S=f,E=r===!0?1/0:r;f=()=>Zn(S(),E)}const m=Wd(),h=()=>{c.stop(),m&&m.active&&gl(m.effects,c)};if(s&&t){const S=t;t=(...E)=>{S(...E),h()}}let y=g?new Array(n.length).fill(Is):Is;const _=S=>{if(!(!(c.flags&1)||!c.dirty&&!S))if(t){const E=c.run();if(r||v||(g?E.some((I,R)=>In(I,y[R])):In(E,y))){p&&p();const I=Fi;Fi=c;try{const R=[E,y===Is?void 0:g&&y[0]===Is?[]:y,d];y=E,l?l(t,3,R):t(...R)}finally{Fi=I}}}else c.run()};return a&&a(_),c=new Af(f),c.scheduler=o?()=>o(_,!1):_,d=S=>mp(S,!1,c),p=c.onStop=()=>{const S=la.get(c);if(S){if(l)l(S,4);else for(const E of S)E();la.delete(c)}},t?i?_(!0):y=c.run():o?o(_.bind(null,!0),!0):c.run(),h.pause=c.pause.bind(c),h.resume=c.resume.bind(c),h.stop=h,h}function Zn(n,t=1/0,e){if(t<=0||!ee(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Be(n))Zn(n.value,t,e);else if(Dt(n))for(let i=0;i<n.length;i++)Zn(n[i],t,e);else if(xf(n)||Tr(n))n.forEach(i=>{Zn(i,t,e)});else if(Sf(n)){for(const i in n)Zn(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Zn(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ys(n,t,e,i){try{return i?n(...i):n()}catch(r){Pa(r,t,e)}}function Mn(n,t,e,i){if(kt(n)){const r=ys(n,t,e,i);return r&&yf(r)&&r.catch(s=>{Pa(s,t,e)}),r}if(Dt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Mn(n[s],t,e,i));return r}}function Pa(n,t,e,i=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||se;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}a=a.parent}if(s){ei(),ys(s,null,10,[n,l,u]),ni();return}}_p(n,e,r,i,o)}function _p(n,t,e,i=!0,r=!1){if(r)throw n;console.error(n)}const We=[];let wn=-1;const Ar=[];let mi=null,xr=0;const Wf=Promise.resolve();let ca=null;function Sr(n){const t=ca||Wf;return n?t.then(this?n.bind(this):n):t}function vp(n){let t=wn+1,e=We.length;for(;t<e;){const i=t+e>>>1,r=We[i],s=hs(r);s<n||s===n&&r.flags&2?t=i+1:e=i}return t}function Al(n){if(!(n.flags&1)){const t=hs(n),e=We[We.length-1];!e||!(n.flags&2)&&t>=hs(e)?We.push(n):We.splice(vp(t),0,n),n.flags|=1,Xf()}}function Xf(){ca||(ca=Wf.then(jf))}function xp(n){Dt(n)?Ar.push(...n):mi&&n.id===-1?mi.splice(xr+1,0,n):n.flags&1||(Ar.push(n),n.flags|=1),Xf()}function Kl(n,t,e=wn+1){for(;e<We.length;e++){const i=We[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;We.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function qf(n){if(Ar.length){const t=[...new Set(Ar)].sort((e,i)=>hs(e)-hs(i));if(Ar.length=0,mi){mi.push(...t);return}for(mi=t,xr=0;xr<mi.length;xr++){const e=mi[xr];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}mi=null,xr=0}}const hs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function jf(n){try{for(wn=0;wn<We.length;wn++){const t=We[wn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ys(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;wn<We.length;wn++){const t=We[wn];t&&(t.flags&=-2)}wn=-1,We.length=0,qf(),ca=null,(We.length||Ar.length)&&jf()}}let nn=null,$f=null;function ua(n){const t=nn;return nn=n,$f=n&&n.type.__scopeId||null,t}function Yf(n,t=nn,e){if(!t||n._n)return n;const i=(...r)=>{i._d&&da(-1);const s=ua(t);let o;try{o=n(...r)}finally{ua(s),i._d&&da(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function jo(n,t){if(nn===null)return n;const e=Na(nn),i=n.dirs||(n.dirs=[]);for(let r=0;r<t.length;r++){let[s,o,a,l=se]=t[r];s&&(kt(s)&&(s={mounted:s,updated:s}),s.deep&&Zn(o),i.push({dir:s,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ai(n,t,e,i){const r=n.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ei(),Mn(l,e,8,[n.el,a,n,t]),ni())}}function ia(n,t){if(Fe){let e=Fe.provides;const i=Fe.parent&&Fe.parent.provides;i===e&&(e=Fe.provides=Object.create(i)),e[n]=t}}function xn(n,t,e=!1){const i=Ch();if(i||Cr){let r=Cr?Cr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return e&&kt(t)?t.call(i&&i.proxy):t}}const yp=Symbol.for("v-scx"),Mp=()=>xn(yp);function rs(n,t,e){return Zf(n,t,e)}function Zf(n,t,e=se){const{immediate:i,deep:r,flush:s,once:o}=e,a=Ee({},e),l=t&&i||!t&&s!=="post";let u;if(ms){if(s==="sync"){const d=Mp();u=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Un,d.resume=Un,d.pause=Un,d}}const c=Fe;a.call=(d,v,g)=>Mn(d,c,v,g);let f=!1;s==="post"?a.scheduler=d=>{Ye(d,c&&c.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,v)=>{v?d():Al(d)}),a.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const p=gp(n,t,a);return ms&&(u?u.push(p):l&&p()),p}function Sp(n,t,e){const i=this.proxy,r=pe(n)?n.includes(".")?Kf(i,n):()=>i[n]:n.bind(i,i);let s;kt(t)?s=t:(s=t.handler,e=t);const o=Ms(this),a=Zf(r,s.bind(i),e);return o(),a}function Kf(n,t){const e=t.split(".");return()=>{let i=n;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}const bp=Symbol("_vte"),Jf=n=>n.__isTeleport,Tn=Symbol("_leaveCb"),Hr=Symbol("_enterCb");function Ep(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Cl(()=>{n.isMounted=!0}),Rl(()=>{n.isUnmounting=!0}),n}const ln=[Function,Array],Qf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ln,onEnter:ln,onAfterEnter:ln,onEnterCancelled:ln,onBeforeLeave:ln,onLeave:ln,onAfterLeave:ln,onLeaveCancelled:ln,onBeforeAppear:ln,onAppear:ln,onAfterAppear:ln,onAppearCancelled:ln},th=n=>{const t=n.subTree;return t.component?th(t.component):t},wp={name:"BaseTransition",props:Qf,setup(n,{slots:t}){const e=Ch(),i=Ep();return()=>{const r=t.default&&ih(t.default(),!0),s=r&&r.length?eh(r):e.subTree?me():void 0;if(!s)return;const o=Jt(n),{mode:a}=o;if(i.isLeaving)return Ka(s);const l=Jl(s);if(!l)return Ka(s);let u=$o(l,o,i,e,f=>u=f);l.type!==Xe&&ds(l,u);let c=e.subTree&&Jl(e.subTree);if(c&&c.type!==Xe&&!zi(c,l)&&th(e).type!==Xe){let f=$o(c,o,i,e);if(ds(c,f),a==="out-in"&&l.type!==Xe)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete f.afterLeave,c=void 0},Ka(s);a==="in-out"&&l.type!==Xe?f.delayLeave=(p,d,v)=>{const g=nh(i,c);g[String(c.key)]=c,p[Tn]=()=>{d(),p[Tn]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{v(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function eh(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Xe){t=e;break}}return t}const Tp=wp;function nh(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function $o(n,t,e,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:p,onLeave:d,onAfterLeave:v,onLeaveCancelled:g,onBeforeAppear:m,onAppear:h,onAfterAppear:y,onAppearCancelled:_}=t,S=String(n.key),E=nh(e,n),I=(k,T)=>{k&&Mn(k,i,9,T)},R=(k,T)=>{const U=T[1];I(k,T),Dt(k)?k.every(A=>A.length<=1)&&U():k.length<=1&&U()},B={mode:o,persisted:a,beforeEnter(k){let T=l;if(!e.isMounted)if(s)T=m||l;else return;k[Tn]&&k[Tn](!0);const U=E[S];U&&zi(n,U)&&U.el[Tn]&&U.el[Tn](),I(T,[k])},enter(k){if(E[S]===n)return;let T=u,U=c,A=f;if(!e.isMounted)if(s)T=h||u,U=y||c,A=_||f;else return;let N=!1;k[Hr]=X=>{N||(N=!0,X?I(A,[k]):I(U,[k]),B.delayedLeave&&B.delayedLeave(),k[Hr]=void 0)};const M=k[Hr].bind(null,!1);T?R(T,[k,M]):M()},leave(k,T){const U=String(n.key);if(k[Hr]&&k[Hr](!0),e.isUnmounting)return T();I(p,[k]);let A=!1;k[Tn]=M=>{A||(A=!0,T(),M?I(g,[k]):I(v,[k]),k[Tn]=void 0,E[U]===n&&delete E[U])};const N=k[Tn].bind(null,!1);E[U]=n,d?R(d,[k,N]):N()},clone(k){const T=$o(k,t,e,i,r);return r&&r(T),T}};return B}function Ka(n){if(Ia(n))return n=Si(n),n.children=null,n}function Jl(n){if(!Ia(n))return Jf(n.type)&&n.children?eh(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&kt(e.default))return e.default()}}function ds(n,t){n.shapeFlag&6&&n.component?(n.transition=t,ds(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function ih(n,t=!1,e){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:s);o.type===Re?(o.patchFlag&128&&r++,i=i.concat(ih(o.children,t,a))):(t||o.type!==Xe)&&i.push(a!=null?Si(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function rh(n,t){return kt(n)?Ee({name:n.name},t,{setup:n}):n}function sh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ql(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const fa=new WeakMap;function ss(n,t,e,i,r=!1){if(Dt(n)){n.forEach((g,m)=>ss(g,t&&(Dt(t)?t[m]:t),e,i,r));return}if(as(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ss(n,t,e,i.component.subTree);return}const s=i.shapeFlag&4?Na(i.component):i.el,o=r?null:s,{i:a,r:l}=n,u=t&&t.r,c=a.refs===se?a.refs={}:a.refs,f=a.setupState,p=Jt(f),d=f===se?vf:g=>Ql(c,g)?!1:te(p,g),v=(g,m)=>!(m&&Ql(c,m));if(u!=null&&u!==l){if(tc(t),pe(u))c[u]=null,d(u)&&(f[u]=null);else if(Be(u)){const g=t;v(u,g.k)&&(u.value=null),g.k&&(c[g.k]=null)}}if(kt(l))ys(l,a,12,[o,c]);else{const g=pe(l),m=Be(l);if(g||m){const h=()=>{if(n.f){const y=g?d(l)?f[l]:c[l]:v()||!n.k?l.value:c[n.k];if(r)Dt(y)&&gl(y,s);else if(Dt(y))y.includes(s)||y.push(s);else if(g)c[l]=[s],d(l)&&(f[l]=c[l]);else{const _=[s];v(l,n.k)&&(l.value=_),n.k&&(c[n.k]=_)}}else g?(c[l]=o,d(l)&&(f[l]=o)):m&&(v(l,n.k)&&(l.value=o),n.k&&(c[n.k]=o))};if(o){const y=()=>{h(),fa.delete(n)};y.id=-1,fa.set(n,y),Ye(y,e)}else tc(n),h()}}}function tc(n){const t=fa.get(n);t&&(t.flags|=8,fa.delete(n))}Aa().requestIdleCallback;Aa().cancelIdleCallback;const as=n=>!!n.type.__asyncLoader,Ia=n=>n.type.__isKeepAlive;function Ap(n,t){ah(n,"a",t)}function Cp(n,t){ah(n,"da",t)}function ah(n,t,e=Fe){const i=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(La(t,i,e),e){let r=e.parent;for(;r&&r.parent;)Ia(r.parent.vnode)&&Rp(i,t,e,r),r=r.parent}}function Rp(n,t,e,i){const r=La(t,n,i,!0);oh(()=>{gl(i[t],r)},e)}function La(n,t,e=Fe,i=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...o)=>{ei();const a=Ms(e),l=Mn(t,e,n,o);return a(),ni(),l});return i?r.unshift(s):r.push(s),s}}const ai=n=>(t,e=Fe)=>{(!ms||n==="sp")&&La(n,(...i)=>t(...i),e)},Pp=ai("bm"),Cl=ai("m"),Ip=ai("bu"),Lp=ai("u"),Rl=ai("bum"),oh=ai("um"),Dp=ai("sp"),Up=ai("rtg"),Np=ai("rtc");function Op(n,t=Fe){La("ec",n,t)}const Fp="components";function Bp(n,t){return zp(Fp,n,!0,t)||n}const kp=Symbol.for("v-ndc");function zp(n,t,e=!0,i=!1){const r=nn||Fe;if(r){const s=r.type;{const a=wm(s,!1);if(a&&(a===t||a===qe(t)||a===Ta(qe(t))))return s}const o=ec(r[n]||s[n],t)||ec(r.appContext[n],t);return!o&&i?s:o}}function ec(n,t){return n&&(n[t]||n[qe(t)]||n[Ta(qe(t))])}function Ki(n,t,e,i){let r;const s=e,o=Dt(n);if(o||pe(n)){const a=o&&qi(n);let l=!1,u=!1;a&&(l=!un(n),u=ii(n),n=Ca(n)),r=new Array(n.length);for(let c=0,f=n.length;c<f;c++)r[c]=t(l?u?Ir(yn(n[c])):yn(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=t(a+1,a,void 0,s)}else if(ee(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=t(n[c],c,l,s)}}else r=[];return r}const Yo=n=>n?Rh(n)?Na(n):Yo(n.parent):null,os=Ee(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Yo(n.parent),$root:n=>Yo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ch(n),$forceUpdate:n=>n.f||(n.f=()=>{Al(n.update)}),$nextTick:n=>n.n||(n.n=Sr.bind(n.proxy)),$watch:n=>Sp.bind(n)}),Ja=(n,t)=>n!==se&&!n.__isScriptSetup&&te(n,t),Gp={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(Ja(i,t))return o[t]=1,i[t];if(r!==se&&te(r,t))return o[t]=2,r[t];if(te(s,t))return o[t]=3,s[t];if(e!==se&&te(e,t))return o[t]=4,e[t];Zo&&(o[t]=0)}}const u=os[t];let c,f;if(u)return t==="$attrs"&&Oe(n.attrs,"get",""),u(n);if((c=a.__cssModules)&&(c=c[t]))return c;if(e!==se&&te(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,te(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:r,ctx:s}=n;return Ja(r,t)?(r[t]=e,!0):i!==se&&te(i,t)?(i[t]=e,!0):te(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(e[a]||n!==se&&a[0]!=="$"&&te(n,a)||Ja(t,a)||te(s,a)||te(i,a)||te(os,a)||te(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:te(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function nc(n){return Dt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Zo=!0;function Hp(n){const t=ch(n),e=n.proxy,i=n.ctx;Zo=!1,t.beforeCreate&&ic(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:p,beforeUpdate:d,updated:v,activated:g,deactivated:m,beforeDestroy:h,beforeUnmount:y,destroyed:_,unmounted:S,render:E,renderTracked:I,renderTriggered:R,errorCaptured:B,serverPrefetch:k,expose:T,inheritAttrs:U,components:A,directives:N,filters:M}=t;if(u&&Vp(u,i,null),o)for(const q in o){const nt=o[q];kt(nt)&&(i[q]=nt.bind(e))}if(r){const q=r.call(e,e);ee(q)&&(n.data=Ra(q))}if(Zo=!0,s)for(const q in s){const nt=s[q],J=kt(nt)?nt.bind(e,e):kt(nt.get)?nt.get.bind(e,e):Un,lt=!kt(nt)&&kt(nt.set)?nt.set.bind(e):Un,$=ve({get:J,set:lt});Object.defineProperty(i,q,{enumerable:!0,configurable:!0,get:()=>$.value,set:K=>$.value=K})}if(a)for(const q in a)lh(a[q],i,e,q);if(l){const q=kt(l)?l.call(e):l;Reflect.ownKeys(q).forEach(nt=>{ia(nt,q[nt])})}c&&ic(c,n,"c");function tt(q,nt){Dt(nt)?nt.forEach(J=>q(J.bind(e))):nt&&q(nt.bind(e))}if(tt(Pp,f),tt(Cl,p),tt(Ip,d),tt(Lp,v),tt(Ap,g),tt(Cp,m),tt(Op,B),tt(Np,I),tt(Up,R),tt(Rl,y),tt(oh,S),tt(Dp,k),Dt(T))if(T.length){const q=n.exposed||(n.exposed={});T.forEach(nt=>{Object.defineProperty(q,nt,{get:()=>e[nt],set:J=>e[nt]=J,enumerable:!0})})}else n.exposed||(n.exposed={});E&&n.render===Un&&(n.render=E),U!=null&&(n.inheritAttrs=U),A&&(n.components=A),N&&(n.directives=N),k&&sh(n)}function Vp(n,t,e=Un){Dt(n)&&(n=Ko(n));for(const i in n){const r=n[i];let s;ee(r)?"default"in r?s=xn(r.from||i,r.default,!0):s=xn(r.from||i):s=xn(r),Be(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function ic(n,t,e){Mn(Dt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function lh(n,t,e,i){let r=i.includes(".")?Kf(e,i):()=>e[i];if(pe(n)){const s=t[n];kt(s)&&rs(r,s)}else if(kt(n))rs(r,n.bind(e));else if(ee(n))if(Dt(n))n.forEach(s=>lh(s,t,e,i));else{const s=kt(n.handler)?n.handler.bind(e):t[n.handler];kt(s)&&rs(r,s,n)}}function ch(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(u=>ha(l,u,o,!0)),ha(l,t,o)),ee(t)&&s.set(t,l),l}function ha(n,t,e,i=!1){const{mixins:r,extends:s}=t;s&&ha(n,s,e,!0),r&&r.forEach(o=>ha(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Wp[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Wp={data:rc,props:sc,emits:sc,methods:Jr,computed:Jr,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:Jr,directives:Jr,watch:qp,provide:rc,inject:Xp};function rc(n,t){return t?n?function(){return Ee(kt(n)?n.call(this,this):n,kt(t)?t.call(this,this):t)}:t:n}function Xp(n,t){return Jr(Ko(n),Ko(t))}function Ko(n){if(Dt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function ze(n,t){return n?[...new Set([].concat(n,t))]:t}function Jr(n,t){return n?Ee(Object.create(null),n,t):t}function sc(n,t){return n?Dt(n)&&Dt(t)?[...new Set([...n,...t])]:Ee(Object.create(null),nc(n),nc(t??{})):t}function qp(n,t){if(!n)return t;if(!t)return n;const e=Ee(Object.create(null),n);for(const i in t)e[i]=ze(n[i],t[i]);return e}function uh(){return{app:null,config:{isNativeTag:vf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jp=0;function $p(n,t){return function(i,r=null){kt(i)||(i=Ee({},i)),r!=null&&!ee(r)&&(r=null);const s=uh(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:jp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Am,get config(){return s.config},set config(c){},use(c,...f){return o.has(c)||(c&&kt(c.install)?(o.add(c),c.install(u,...f)):kt(c)&&(o.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,p){if(!l){const d=u._ceVNode||Se(i,r);return d.appContext=s,p===!0?p="svg":p===!1&&(p=void 0),n(d,c,p),l=!0,u._container=c,c.__vue_app__=u,Na(d.component)}},onUnmount(c){a.push(c)},unmount(){l&&(Mn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=Cr;Cr=u;try{return c()}finally{Cr=f}}};return u}}let Cr=null;const Yp=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${qe(t)}Modifiers`]||n[`${Qi(t)}Modifiers`];function Zp(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||se;let r=e;const s=t.startsWith("update:"),o=s&&Yp(i,t.slice(7));o&&(o.trim&&(r=e.map(c=>pe(c)?c.trim():c)),o.number&&(r=e.map(vl)));let a,l=i[a=qa(t)]||i[a=qa(qe(t))];!l&&s&&(l=i[a=qa(Qi(t))]),l&&Mn(l,n,6,r);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Mn(u,n,6,r)}}const Kp=new WeakMap;function fh(n,t,e=!1){const i=e?Kp:t.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!kt(n)){const l=u=>{const c=fh(u,t,!0);c&&(a=!0,Ee(o,c))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ee(n)&&i.set(n,null),null):(Dt(s)?s.forEach(l=>o[l]=null):Ee(o,s),ee(n)&&i.set(n,o),o)}function Da(n,t){return!n||!ba(t)?!1:(t=t.slice(2).replace(/Once$/,""),te(n,t[0].toLowerCase()+t.slice(1))||te(n,Qi(t))||te(n,t))}function ac(n){const{type:t,vnode:e,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:p,setupState:d,ctx:v,inheritAttrs:g}=n,m=ua(n);let h,y;try{if(e.shapeFlag&4){const S=r||i,E=S;h=Rn(u.call(E,S,c,f,d,p,v)),y=a}else{const S=t;h=Rn(S.length>1?S(f,{attrs:a,slots:o,emit:l}):S(f,null)),y=t.props?a:Jp(a)}}catch(S){ls.length=0,Pa(S,n,1),h=Se(Xe)}let _=h;if(y&&g!==!1){const S=Object.keys(y),{shapeFlag:E}=_;S.length&&E&7&&(s&&S.some(Ea)&&(y=Qp(y,s)),_=Si(_,y,!1,!0))}return e.dirs&&(_=Si(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(e.dirs):e.dirs),e.transition&&ds(_,e.transition),h=_,ua(m),h}const Jp=n=>{let t;for(const e in n)(e==="class"||e==="style"||ba(e))&&((t||(t={}))[e]=n[e]);return t},Qp=(n,t)=>{const e={};for(const i in n)(!Ea(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function tm(n,t,e){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?oc(i,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const p=c[f];if(hh(o,i,p)&&!Da(u,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?oc(i,o,u):!0:!!o;return!1}function oc(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(hh(t,n,s)&&!Da(e,s))return!0}return!1}function hh(n,t,e){const i=n[e],r=t[e];return e==="style"&&ee(i)&&ee(r)?!xl(i,r):i!==r}function em({vnode:n,parent:t,suspense:e},i){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const dh={},ph=()=>Object.create(dh),mh=n=>Object.getPrototypeOf(n)===dh;function nm(n,t,e,i=!1){const r={},s=ph();n.propsDefaults=Object.create(null),gh(n,t,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);e?n.props=i?r:Gf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function im(n,t,e,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Jt(r),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let p=c[f];if(Da(n.emitsOptions,p))continue;const d=t[p];if(l)if(te(s,p))d!==s[p]&&(s[p]=d,u=!0);else{const v=qe(p);r[v]=Jo(l,a,v,d,n,!1)}else d!==s[p]&&(s[p]=d,u=!0)}}}else{gh(n,t,r,s)&&(u=!0);let c;for(const f in a)(!t||!te(t,f)&&((c=Qi(f))===f||!te(t,c)))&&(l?e&&(e[f]!==void 0||e[c]!==void 0)&&(r[f]=Jo(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!t||!te(t,f))&&(delete s[f],u=!0)}u&&Yn(n.attrs,"set","")}function gh(n,t,e,i){const[r,s]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(es(l))continue;const u=t[l];let c;r&&te(r,c=qe(l))?!s||!s.includes(c)?e[c]=u:(a||(a={}))[c]=u:Da(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=Jt(e),u=a||se;for(let c=0;c<s.length;c++){const f=s[c];e[f]=Jo(r,l,f,u[f],n,!te(u,f))}}return o}function Jo(n,t,e,i,r,s){const o=n[e];if(o!=null){const a=te(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&kt(l)){const{propsDefaults:u}=r;if(e in u)i=u[e];else{const c=Ms(r);i=u[e]=l.call(null,t),c()}}else i=l;r.ce&&r.ce._setProp(e,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Qi(e))&&(i=!0))}return i}const rm=new WeakMap;function _h(n,t,e=!1){const i=e?rm:t.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!kt(n)){const c=f=>{l=!0;const[p,d]=_h(f,t,!0);Ee(o,p),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!s&&!l)return ee(n)&&i.set(n,wr),wr;if(Dt(s))for(let c=0;c<s.length;c++){const f=qe(s[c]);lc(f)&&(o[f]=se)}else if(s)for(const c in s){const f=qe(c);if(lc(f)){const p=s[c],d=o[f]=Dt(p)||kt(p)?{type:p}:Ee({},p),v=d.type;let g=!1,m=!0;if(Dt(v))for(let h=0;h<v.length;++h){const y=v[h],_=kt(y)&&y.name;if(_==="Boolean"){g=!0;break}else _==="String"&&(m=!1)}else g=kt(v)&&v.name==="Boolean";d[0]=g,d[1]=m,(g||te(d,"default"))&&a.push(f)}}const u=[o,a];return ee(n)&&i.set(n,u),u}function lc(n){return n[0]!=="$"&&!es(n)}const Pl=n=>n==="_"||n==="_ctx"||n==="$stable",Il=n=>Dt(n)?n.map(Rn):[Rn(n)],sm=(n,t,e)=>{if(t._n)return t;const i=Yf((...r)=>Il(t(...r)),e);return i._c=!1,i},vh=(n,t,e)=>{const i=n._ctx;for(const r in n){if(Pl(r))continue;const s=n[r];if(kt(s))t[r]=sm(r,s,i);else if(s!=null){const o=Il(s);t[r]=()=>o}}},xh=(n,t)=>{const e=Il(t);n.slots.default=()=>e},yh=(n,t,e)=>{for(const i in t)(e||!Pl(i))&&(n[i]=t[i])},am=(n,t,e)=>{const i=n.slots=ph();if(n.vnode.shapeFlag&32){const r=t._;r?(yh(i,t,e),e&&bf(i,"_",r,!0)):vh(t,i)}else t&&xh(n,t)},om=(n,t,e)=>{const{vnode:i,slots:r}=n;let s=!0,o=se;if(i.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:yh(r,t,e):(s=!t.$stable,vh(t,r)),o=t}else t&&(xh(n,t),o={default:1});if(s)for(const a in r)!Pl(a)&&o[a]==null&&delete r[a]},Ye=hm;function lm(n){return cm(n)}function cm(n,t){const e=Aa();e.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:p,setScopeId:d=Un,insertStaticContent:v}=n,g=(w,V,x,z=null,F=null,P=null,L=void 0,O=null,j=!!V.dynamicChildren)=>{if(w===V)return;w&&!zi(w,V)&&(z=W(w),K(w,F,P,!0),w=null),V.patchFlag===-2&&(j=!1,V.dynamicChildren=null);const{type:C,ref:b,shapeFlag:H}=V;switch(C){case Ua:m(w,V,x,z);break;case Xe:h(w,V,x,z);break;case ra:w==null&&y(V,x,z,L);break;case Re:A(w,V,x,z,F,P,L,O,j);break;default:H&1?E(w,V,x,z,F,P,L,O,j):H&6?N(w,V,x,z,F,P,L,O,j):(H&64||H&128)&&C.process(w,V,x,z,F,P,L,O,j,mt)}b!=null&&F?ss(b,w&&w.ref,P,V||w,!V):b==null&&w&&w.ref!=null&&ss(w.ref,null,P,w,!0)},m=(w,V,x,z)=>{if(w==null)i(V.el=a(V.children),x,z);else{const F=V.el=w.el;V.children!==w.children&&u(F,V.children)}},h=(w,V,x,z)=>{w==null?i(V.el=l(V.children||""),x,z):V.el=w.el},y=(w,V,x,z)=>{[w.el,w.anchor]=v(w.children,V,x,z,w.el,w.anchor)},_=({el:w,anchor:V},x,z)=>{let F;for(;w&&w!==V;)F=p(w),i(w,x,z),w=F;i(V,x,z)},S=({el:w,anchor:V})=>{let x;for(;w&&w!==V;)x=p(w),r(w),w=x;r(V)},E=(w,V,x,z,F,P,L,O,j)=>{if(V.type==="svg"?L="svg":V.type==="math"&&(L="mathml"),w==null)I(V,x,z,F,P,L,O,j);else{const C=w.el&&w.el._isVueCE?w.el:null;try{C&&C._beginPatch(),k(w,V,F,P,L,O,j)}finally{C&&C._endPatch()}}},I=(w,V,x,z,F,P,L,O)=>{let j,C;const{props:b,shapeFlag:H,transition:Z,dirs:Q}=w;if(j=w.el=o(w.type,P,b&&b.is,b),H&8?c(j,w.children):H&16&&B(w.children,j,null,z,F,Qa(w,P),L,O),Q&&Ai(w,null,z,"created"),R(j,w,w.scopeId,L,z),b){for(const St in b)St!=="value"&&!es(St)&&s(j,St,null,b[St],P,z);"value"in b&&s(j,"value",null,b.value,P),(C=b.onVnodeBeforeMount)&&En(C,z,w)}Q&&Ai(w,null,z,"beforeMount");const ot=um(F,Z);ot&&Z.beforeEnter(j),i(j,V,x),((C=b&&b.onVnodeMounted)||ot||Q)&&Ye(()=>{try{C&&En(C,z,w),ot&&Z.enter(j),Q&&Ai(w,null,z,"mounted")}finally{}},F)},R=(w,V,x,z,F)=>{if(x&&d(w,x),z)for(let P=0;P<z.length;P++)d(w,z[P]);if(F){let P=F.subTree;if(V===P||Eh(P.type)&&(P.ssContent===V||P.ssFallback===V)){const L=F.vnode;R(w,L,L.scopeId,L.slotScopeIds,F.parent)}}},B=(w,V,x,z,F,P,L,O,j=0)=>{for(let C=j;C<w.length;C++){const b=w[C]=O?$n(w[C]):Rn(w[C]);g(null,b,V,x,z,F,P,L,O)}},k=(w,V,x,z,F,P,L)=>{const O=V.el=w.el;let{patchFlag:j,dynamicChildren:C,dirs:b}=V;j|=w.patchFlag&16;const H=w.props||se,Z=V.props||se;let Q;if(x&&Ci(x,!1),(Q=Z.onVnodeBeforeUpdate)&&En(Q,x,V,w),b&&Ai(V,w,x,"beforeUpdate"),x&&Ci(x,!0),(H.innerHTML&&Z.innerHTML==null||H.textContent&&Z.textContent==null)&&c(O,""),C?T(w.dynamicChildren,C,O,x,z,Qa(V,F),P):L||nt(w,V,O,null,x,z,Qa(V,F),P,!1),j>0){if(j&16)U(O,H,Z,x,F);else if(j&2&&H.class!==Z.class&&s(O,"class",null,Z.class,F),j&4&&s(O,"style",H.style,Z.style,F),j&8){const ot=V.dynamicProps;for(let St=0;St<ot.length;St++){const vt=ot[St],_t=H[vt],Mt=Z[vt];(Mt!==_t||vt==="value")&&s(O,vt,_t,Mt,F,x)}}j&1&&w.children!==V.children&&c(O,V.children)}else!L&&C==null&&U(O,H,Z,x,F);((Q=Z.onVnodeUpdated)||b)&&Ye(()=>{Q&&En(Q,x,V,w),b&&Ai(V,w,x,"updated")},z)},T=(w,V,x,z,F,P,L)=>{for(let O=0;O<V.length;O++){const j=w[O],C=V[O],b=j.el&&(j.type===Re||!zi(j,C)||j.shapeFlag&198)?f(j.el):x;g(j,C,b,null,z,F,P,L,!0)}},U=(w,V,x,z,F)=>{if(V!==x){if(V!==se)for(const P in V)!es(P)&&!(P in x)&&s(w,P,V[P],null,F,z);for(const P in x){if(es(P))continue;const L=x[P],O=V[P];L!==O&&P!=="value"&&s(w,P,O,L,F,z)}"value"in x&&s(w,"value",V.value,x.value,F)}},A=(w,V,x,z,F,P,L,O,j)=>{const C=V.el=w?w.el:a(""),b=V.anchor=w?w.anchor:a("");let{patchFlag:H,dynamicChildren:Z,slotScopeIds:Q}=V;Q&&(O=O?O.concat(Q):Q),w==null?(i(C,x,z),i(b,x,z),B(V.children||[],x,b,F,P,L,O,j)):H>0&&H&64&&Z&&w.dynamicChildren&&w.dynamicChildren.length===Z.length?(T(w.dynamicChildren,Z,x,F,P,L,O),(V.key!=null||F&&V===F.subTree)&&Mh(w,V,!0)):nt(w,V,x,b,F,P,L,O,j)},N=(w,V,x,z,F,P,L,O,j)=>{V.slotScopeIds=O,w==null?V.shapeFlag&512?F.ctx.activate(V,x,z,L,j):M(V,x,z,F,P,L,j):X(w,V,j)},M=(w,V,x,z,F,P,L)=>{const O=w.component=ym(w,z,F);if(Ia(w)&&(O.ctx.renderer=mt),Mm(O,!1,L),O.asyncDep){if(F&&F.registerDep(O,tt,L),!w.el){const j=O.subTree=Se(Xe);h(null,j,V,x),w.placeholder=j.el}}else tt(O,w,V,x,F,P,L)},X=(w,V,x)=>{const z=V.component=w.component;if(tm(w,V,x))if(z.asyncDep&&!z.asyncResolved){q(z,V,x);return}else z.next=V,z.update();else V.el=w.el,z.vnode=V},tt=(w,V,x,z,F,P,L)=>{const O=()=>{if(w.isMounted){let{next:H,bu:Z,u:Q,parent:ot,vnode:St}=w;{const yt=Sh(w);if(yt){H&&(H.el=St.el,q(w,H,L)),yt.asyncDep.then(()=>{Ye(()=>{w.isUnmounted||C()},F)});return}}let vt=H,_t;Ci(w,!1),H?(H.el=St.el,q(w,H,L)):H=St,Z&&na(Z),(_t=H.props&&H.props.onVnodeBeforeUpdate)&&En(_t,ot,H,St),Ci(w,!0);const Mt=ac(w),Pt=w.subTree;w.subTree=Mt,g(Pt,Mt,f(Pt.el),W(Pt),w,F,P),H.el=Mt.el,vt===null&&em(w,Mt.el),Q&&Ye(Q,F),(_t=H.props&&H.props.onVnodeUpdated)&&Ye(()=>En(_t,ot,H,St),F)}else{let H;const{el:Z,props:Q}=V,{bm:ot,m:St,parent:vt,root:_t,type:Mt}=w,Pt=as(V);Ci(w,!1),ot&&na(ot),!Pt&&(H=Q&&Q.onVnodeBeforeMount)&&En(H,vt,V),Ci(w,!0);{_t.ce&&_t.ce._hasShadowRoot()&&_t.ce._injectChildStyle(Mt,w.parent?w.parent.type:void 0);const yt=w.subTree=ac(w);g(null,yt,x,z,w,F,P),V.el=yt.el}if(St&&Ye(St,F),!Pt&&(H=Q&&Q.onVnodeMounted)){const yt=V;Ye(()=>En(H,vt,yt),F)}(V.shapeFlag&256||vt&&as(vt.vnode)&&vt.vnode.shapeFlag&256)&&w.a&&Ye(w.a,F),w.isMounted=!0,V=x=z=null}};w.scope.on();const j=w.effect=new Af(O);w.scope.off();const C=w.update=j.run.bind(j),b=w.job=j.runIfDirty.bind(j);b.i=w,b.id=w.uid,j.scheduler=()=>Al(b),Ci(w,!0),C()},q=(w,V,x)=>{V.component=w;const z=w.vnode.props;w.vnode=V,w.next=null,im(w,V.props,z,x),om(w,V.children,x),ei(),Kl(w),ni()},nt=(w,V,x,z,F,P,L,O,j=!1)=>{const C=w&&w.children,b=w?w.shapeFlag:0,H=V.children,{patchFlag:Z,shapeFlag:Q}=V;if(Z>0){if(Z&128){lt(C,H,x,z,F,P,L,O,j);return}else if(Z&256){J(C,H,x,z,F,P,L,O,j);return}}Q&8?(b&16&&Y(C,F,P),H!==C&&c(x,H)):b&16?Q&16?lt(C,H,x,z,F,P,L,O,j):Y(C,F,P,!0):(b&8&&c(x,""),Q&16&&B(H,x,z,F,P,L,O,j))},J=(w,V,x,z,F,P,L,O,j)=>{w=w||wr,V=V||wr;const C=w.length,b=V.length,H=Math.min(C,b);let Z;for(Z=0;Z<H;Z++){const Q=V[Z]=j?$n(V[Z]):Rn(V[Z]);g(w[Z],Q,x,null,F,P,L,O,j)}C>b?Y(w,F,P,!0,!1,H):B(V,x,z,F,P,L,O,j,H)},lt=(w,V,x,z,F,P,L,O,j)=>{let C=0;const b=V.length;let H=w.length-1,Z=b-1;for(;C<=H&&C<=Z;){const Q=w[C],ot=V[C]=j?$n(V[C]):Rn(V[C]);if(zi(Q,ot))g(Q,ot,x,null,F,P,L,O,j);else break;C++}for(;C<=H&&C<=Z;){const Q=w[H],ot=V[Z]=j?$n(V[Z]):Rn(V[Z]);if(zi(Q,ot))g(Q,ot,x,null,F,P,L,O,j);else break;H--,Z--}if(C>H){if(C<=Z){const Q=Z+1,ot=Q<b?V[Q].el:z;for(;C<=Z;)g(null,V[C]=j?$n(V[C]):Rn(V[C]),x,ot,F,P,L,O,j),C++}}else if(C>Z)for(;C<=H;)K(w[C],F,P,!0),C++;else{const Q=C,ot=C,St=new Map;for(C=ot;C<=Z;C++){const Ct=V[C]=j?$n(V[C]):Rn(V[C]);Ct.key!=null&&St.set(Ct.key,C)}let vt,_t=0;const Mt=Z-ot+1;let Pt=!1,yt=0;const Ut=new Array(Mt);for(C=0;C<Mt;C++)Ut[C]=0;for(C=Q;C<=H;C++){const Ct=w[C];if(_t>=Mt){K(Ct,F,P,!0);continue}let Tt;if(Ct.key!=null)Tt=St.get(Ct.key);else for(vt=ot;vt<=Z;vt++)if(Ut[vt-ot]===0&&zi(Ct,V[vt])){Tt=vt;break}Tt===void 0?K(Ct,F,P,!0):(Ut[Tt-ot]=C+1,Tt>=yt?yt=Tt:Pt=!0,g(Ct,V[Tt],x,null,F,P,L,O,j),_t++)}const Ot=Pt?fm(Ut):wr;for(vt=Ot.length-1,C=Mt-1;C>=0;C--){const Ct=ot+C,Tt=V[Ct],It=V[Ct+1],jt=Ct+1<b?It.el||bh(It):z;Ut[C]===0?g(null,Tt,x,jt,F,P,L,O,j):Pt&&(vt<0||C!==Ot[vt]?$(Tt,x,jt,2):vt--)}}},$=(w,V,x,z,F=null)=>{const{el:P,type:L,transition:O,children:j,shapeFlag:C}=w;if(C&6){$(w.component.subTree,V,x,z);return}if(C&128){w.suspense.move(V,x,z);return}if(C&64){L.move(w,V,x,mt);return}if(L===Re){i(P,V,x);for(let H=0;H<j.length;H++)$(j[H],V,x,z);i(w.anchor,V,x);return}if(L===ra){_(w,V,x);return}if(z!==2&&C&1&&O)if(z===0)O.beforeEnter(P),i(P,V,x),Ye(()=>O.enter(P),F);else{const{leave:H,delayLeave:Z,afterLeave:Q}=O,ot=()=>{w.ctx.isUnmounted?r(P):i(P,V,x)},St=()=>{P._isLeaving&&P[Tn](!0),H(P,()=>{ot(),Q&&Q()})};Z?Z(P,ot,St):St()}else i(P,V,x)},K=(w,V,x,z=!1,F=!1)=>{const{type:P,props:L,ref:O,children:j,dynamicChildren:C,shapeFlag:b,patchFlag:H,dirs:Z,cacheIndex:Q,memo:ot}=w;if(H===-2&&(F=!1),O!=null&&(ei(),ss(O,null,x,w,!0),ni()),Q!=null&&(V.renderCache[Q]=void 0),b&256){V.ctx.deactivate(w);return}const St=b&1&&Z,vt=!as(w);let _t;if(vt&&(_t=L&&L.onVnodeBeforeUnmount)&&En(_t,V,w),b&6)D(w.component,x,z);else{if(b&128){w.suspense.unmount(x,z);return}St&&Ai(w,null,V,"beforeUnmount"),b&64?w.type.remove(w,V,x,mt,z):C&&!C.hasOnce&&(P!==Re||H>0&&H&64)?Y(C,V,x,!1,!0):(P===Re&&H&384||!F&&b&16)&&Y(j,V,x),z&&xt(w)}const Mt=ot!=null&&Q==null;(vt&&(_t=L&&L.onVnodeUnmounted)||St||Mt)&&Ye(()=>{_t&&En(_t,V,w),St&&Ai(w,null,V,"unmounted"),Mt&&(w.el=null)},x)},xt=w=>{const{type:V,el:x,anchor:z,transition:F}=w;if(V===Re){et(x,z);return}if(V===ra){S(w);return}const P=()=>{r(x),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(w.shapeFlag&1&&F&&!F.persisted){const{leave:L,delayLeave:O}=F,j=()=>L(x,P);O?O(w.el,P,j):j()}else P()},et=(w,V)=>{let x;for(;w!==V;)x=p(w),r(w),w=x;r(V)},D=(w,V,x)=>{const{bum:z,scope:F,job:P,subTree:L,um:O,m:j,a:C}=w;cc(j),cc(C),z&&na(z),F.stop(),P&&(P.flags|=8,K(L,w,V,x)),O&&Ye(O,V),Ye(()=>{w.isUnmounted=!0},V)},Y=(w,V,x,z=!1,F=!1,P=0)=>{for(let L=P;L<w.length;L++)K(w[L],V,x,z,F)},W=w=>{if(w.shapeFlag&6)return W(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const V=p(w.anchor||w.el),x=V&&V[bp];return x?p(x):V};let rt=!1;const it=(w,V,x)=>{let z;w==null?V._vnode&&(K(V._vnode,null,null,!0),z=V._vnode.component):g(V._vnode||null,w,V,null,null,null,x),V._vnode=w,rt||(rt=!0,Kl(z),qf(),rt=!1)},mt={p:g,um:K,m:$,r:xt,mt:M,mc:B,pc:nt,pbc:T,n:W,o:n};return{render:it,hydrate:void 0,createApp:$p(it)}}function Qa({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Ci({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function um(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Mh(n,t,e=!1){const i=n.children,r=t.children;if(Dt(i)&&Dt(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=$n(r[s]),a.el=o.el),!e&&a.patchFlag!==-2&&Mh(o,a)),a.type===Ua&&(a.patchFlag===-1&&(a=r[s]=$n(a)),a.el=o.el),a.type===Xe&&!a.el&&(a.el=o.el)}}function fm(n){const t=n.slice(),e=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(r=e[e.length-1],n[r]<u){t[i]=r,e.push(i);continue}for(s=0,o=e.length-1;s<o;)a=s+o>>1,n[e[a]]<u?s=a+1:o=a;u<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}function Sh(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Sh(t)}function cc(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function bh(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?bh(t.subTree):null}const Eh=n=>n.__isSuspense;function hm(n,t){t&&t.pendingBranch?Dt(n)?t.effects.push(...n):t.effects.push(n):xp(n)}const Re=Symbol.for("v-fgt"),Ua=Symbol.for("v-txt"),Xe=Symbol.for("v-cmt"),ra=Symbol.for("v-stc"),ls=[];let rn=null;function Bt(n=!1){ls.push(rn=n?null:[])}function dm(){ls.pop(),rn=ls[ls.length-1]||null}let ps=1;function da(n,t=!1){ps+=n,n<0&&rn&&t&&(rn.hasOnce=!0)}function wh(n){return n.dynamicChildren=ps>0?rn||wr:null,dm(),ps>0&&rn&&rn.push(n),n}function Gt(n,t,e,i,r,s){return wh(st(n,t,e,i,r,s,!0))}function Th(n,t,e,i,r){return wh(Se(n,t,e,i,r,!0))}function pa(n){return n?n.__v_isVNode===!0:!1}function zi(n,t){return n.type===t.type&&n.key===t.key}const Ah=({key:n})=>n??null,sa=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?pe(n)||Be(n)||kt(n)?{i:nn,r:n,k:t,f:!!e}:n:null);function st(n,t=null,e=null,i=0,r=null,s=n===Re?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Ah(t),ref:t&&sa(t),scopeId:$f,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:nn};return a?(Ll(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=pe(e)?8:16),ps>0&&!o&&rn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&rn.push(l),l}const Se=pm;function pm(n,t=null,e=null,i=0,r=null,s=!1){if((!n||n===kp)&&(n=Xe),pa(n)){const a=Si(n,t,!0);return e&&Ll(a,e),ps>0&&!s&&rn&&(a.shapeFlag&6?rn[rn.indexOf(n)]=a:rn.push(a)),a.patchFlag=-2,a}if(Tm(n)&&(n=n.__vccOpts),t){t=mm(t);let{class:a,style:l}=t;a&&!pe(a)&&(t.class=_e(a)),ee(l)&&(Tl(l)&&!Dt(l)&&(l=Ee({},l)),t.style=_n(l))}const o=pe(n)?1:Eh(n)?128:Jf(n)?64:ee(n)?4:kt(n)?2:0;return st(n,t,e,i,r,o,s,!0)}function mm(n){return n?Tl(n)||mh(n)?Ee({},n):n:null}function Si(n,t,e=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,u=t?_m(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Ah(u),ref:t&&t.ref?e&&s?Dt(s)?s.concat(sa(t)):[s,sa(t)]:sa(t):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Re?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Si(n.ssContent),ssFallback:n.ssFallback&&Si(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&ds(c,l.clone(c)),c}function Qn(n=" ",t=0){return Se(Ua,null,n,t)}function gm(n,t){const e=Se(ra,null,n);return e.staticCount=t,e}function me(n="",t=!1){return t?(Bt(),Th(Xe,null,n)):Se(Xe,null,n)}function Rn(n){return n==null||typeof n=="boolean"?Se(Xe):Dt(n)?Se(Re,null,n.slice()):pa(n)?$n(n):Se(Ua,null,String(n))}function $n(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Si(n)}function Ll(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Dt(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),Ll(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!mh(t)?t._ctx=nn:r===3&&nn&&(nn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else kt(t)?(t={default:t,_ctx:nn},e=32):(t=String(t),i&64?(e=16,t=[Qn(t)]):e=8);n.children=t,n.shapeFlag|=e}function _m(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=_e([t.class,i.class]));else if(r==="style")t.style=_n([t.style,i.style]);else if(ba(r)){const s=t[r],o=i[r];o&&s!==o&&!(Dt(s)&&s.includes(o))?t[r]=s?[].concat(s,o):o:o==null&&s==null&&!Ea(r)&&(t[r]=o)}else r!==""&&(t[r]=i[r])}return t}function En(n,t,e,i=null){Mn(n,t,7,[e,i])}const vm=uh();let xm=0;function ym(n,t,e){const i=n.type,r=(t?t.appContext:n.appContext)||vm,s={uid:xm++,vnode:n,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Vd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_h(i,r),emitsOptions:fh(i,r),emit:null,emitted:null,propsDefaults:se,inheritAttrs:i.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Zp.bind(null,s),n.ce&&n.ce(s),s}let Fe=null;const Ch=()=>Fe||nn;let ma,Qo;{const n=Aa(),t=(e,i)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ma=t("__VUE_INSTANCE_SETTERS__",e=>Fe=e),Qo=t("__VUE_SSR_SETTERS__",e=>ms=e)}const Ms=n=>{const t=Fe;return ma(n),n.scope.on(),()=>{n.scope.off(),ma(t)}},uc=()=>{Fe&&Fe.scope.off(),ma(null)};function Rh(n){return n.vnode.shapeFlag&4}let ms=!1;function Mm(n,t=!1,e=!1){t&&Qo(t);const{props:i,children:r}=n.vnode,s=Rh(n);nm(n,i,s,t),am(n,r,e||t);const o=s?Sm(n,t):void 0;return t&&Qo(!1),o}function Sm(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Gp);const{setup:i}=e;if(i){ei();const r=n.setupContext=i.length>1?Em(n):null,s=Ms(n),o=ys(i,n,0,[n.props,r]),a=yf(o);if(ni(),s(),(a||n.sp)&&!as(n)&&sh(n),a){if(o.then(uc,uc),t)return o.then(l=>{fc(n,l)}).catch(l=>{Pa(l,n,0)});n.asyncDep=o}else fc(n,o)}else Ph(n)}function fc(n,t,e){kt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ee(t)&&(n.setupState=Vf(t)),Ph(n)}function Ph(n,t,e){const i=n.type;n.render||(n.render=i.render||Un);{const r=Ms(n);ei();try{Hp(n)}finally{ni(),r()}}}const bm={get(n,t){return Oe(n,"get",""),n[t]}};function Em(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,bm),slots:n.slots,emit:n.emit,expose:t}}function Na(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Vf(cp(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in os)return os[e](n)},has(t,e){return e in t||e in os}})):n.proxy}function wm(n,t=!0){return kt(n)?n.displayName||n.name:n.name||t&&n.__name}function Tm(n){return kt(n)&&"__vccOpts"in n}const ve=(n,t)=>pp(n,t,ms);function Dl(n,t,e){try{da(-1);const i=arguments.length;return i===2?ee(t)&&!Dt(t)?pa(t)?Se(n,null,[t]):Se(n,t):Se(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&pa(e)&&(e=[e]),Se(n,t,e))}finally{da(1)}}const Am="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tl;const hc=typeof window<"u"&&window.trustedTypes;if(hc)try{tl=hc.createPolicy("vue",{createHTML:n=>n})}catch{}const Ih=tl?n=>tl.createHTML(n):n=>n,Cm="http://www.w3.org/2000/svg",Rm="http://www.w3.org/1998/Math/MathML",jn=typeof document<"u"?document:null,dc=jn&&jn.createElement("template"),Pm={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const r=t==="svg"?jn.createElementNS(Cm,n):t==="mathml"?jn.createElementNS(Rm,n):e?jn.createElement(n,{is:e}):jn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>jn.createTextNode(n),createComment:n=>jn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>jn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,r,s){const o=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{dc.innerHTML=Ih(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=dc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},oi="transition",Vr="animation",gs=Symbol("_vtc"),Lh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Im=Ee({},Qf,Lh),Lm=n=>(n.displayName="Transition",n.props=Im,n),Dm=Lm((n,{slots:t})=>Dl(Tp,Um(n),t)),Ri=(n,t=[])=>{Dt(n)?n.forEach(e=>e(...t)):n&&n(...t)},pc=n=>n?Dt(n)?n.some(t=>t.length>1):n.length>1:!1;function Um(n){const t={};for(const A in n)A in Lh||(t[A]=n[A]);if(n.css===!1)return t;const{name:e="v",type:i,duration:r,enterFromClass:s=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=s,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:f=`${e}-leave-from`,leaveActiveClass:p=`${e}-leave-active`,leaveToClass:d=`${e}-leave-to`}=n,v=Nm(r),g=v&&v[0],m=v&&v[1],{onBeforeEnter:h,onEnter:y,onEnterCancelled:_,onLeave:S,onLeaveCancelled:E,onBeforeAppear:I=h,onAppear:R=y,onAppearCancelled:B=_}=t,k=(A,N,M,X)=>{A._enterCancelled=X,Pi(A,N?c:a),Pi(A,N?u:o),M&&M()},T=(A,N)=>{A._isLeaving=!1,Pi(A,f),Pi(A,d),Pi(A,p),N&&N()},U=A=>(N,M)=>{const X=A?R:y,tt=()=>k(N,A,M);Ri(X,[N,tt]),mc(()=>{Pi(N,A?l:s),kn(N,A?c:a),pc(X)||gc(N,i,g,tt)})};return Ee(t,{onBeforeEnter(A){Ri(h,[A]),kn(A,s),kn(A,o)},onBeforeAppear(A){Ri(I,[A]),kn(A,l),kn(A,u)},onEnter:U(!1),onAppear:U(!0),onLeave(A,N){A._isLeaving=!0;const M=()=>T(A,N);kn(A,f),A._enterCancelled?(kn(A,p),xc(A)):(xc(A),kn(A,p)),mc(()=>{A._isLeaving&&(Pi(A,f),kn(A,d),pc(S)||gc(A,i,m,M))}),Ri(S,[A,M])},onEnterCancelled(A){k(A,!1,void 0,!0),Ri(_,[A])},onAppearCancelled(A){k(A,!0,void 0,!0),Ri(B,[A])},onLeaveCancelled(A){T(A),Ri(E,[A])}})}function Nm(n){if(n==null)return null;if(ee(n))return[to(n.enter),to(n.leave)];{const t=to(n);return[t,t]}}function to(n){return Nd(n)}function kn(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[gs]||(n[gs]=new Set)).add(t)}function Pi(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[gs];e&&(e.delete(t),e.size||(n[gs]=void 0))}function mc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Om=0;function gc(n,t,e,i){const r=n._endId=++Om,s=()=>{r===n._endId&&i()};if(e!=null)return setTimeout(s,e);const{type:o,timeout:a,propCount:l}=Fm(n,t);if(!o)return i();const u=o+"end";let c=0;const f=()=>{n.removeEventListener(u,p),s()},p=d=>{d.target===n&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},a+1),n.addEventListener(u,p)}function Fm(n,t){const e=window.getComputedStyle(n),i=v=>(e[v]||"").split(", "),r=i(`${oi}Delay`),s=i(`${oi}Duration`),o=_c(r,s),a=i(`${Vr}Delay`),l=i(`${Vr}Duration`),u=_c(a,l);let c=null,f=0,p=0;t===oi?o>0&&(c=oi,f=o,p=s.length):t===Vr?u>0&&(c=Vr,f=u,p=l.length):(f=Math.max(o,u),c=f>0?o>u?oi:Vr:null,p=c?c===oi?s.length:l.length:0);const d=c===oi&&/\b(?:transform|all)(?:,|$)/.test(i(`${oi}Property`).toString());return{type:c,timeout:f,propCount:p,hasTransform:d}}function _c(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>vc(e)+vc(n[i])))}function vc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function xc(n){return(n?n.ownerDocument:document).body.offsetHeight}function Bm(n,t,e){const i=n[gs];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const ga=Symbol("_vod"),Dh=Symbol("_vsh"),km={name:"show",beforeMount(n,{value:t},{transition:e}){n[ga]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):Wr(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),Wr(n,!0),i.enter(n)):i.leave(n,()=>{Wr(n,!1)}):Wr(n,t))},beforeUnmount(n,{value:t}){Wr(n,t)}};function Wr(n,t){n.style.display=t?n[ga]:"none",n[Dh]=!t}const zm=Symbol(""),Gm=/(?:^|;)\s*display\s*:/;function Hm(n,t,e){const i=n.style,r=pe(e);let s=!1;if(e&&!r){if(t)if(pe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Qr(i,a,"")}else for(const o in t)e[o]==null&&Qr(i,o,"");for(const o in e){o==="display"&&(s=!0);const a=e[o];a!=null?Wm(n,o,!pe(t)&&t?t[o]:void 0,a)||Qr(i,o,a):Qr(i,o,"")}}else if(r){if(t!==e){const o=i[zm];o&&(e+=";"+o),i.cssText=e,s=Gm.test(e)}}else t&&n.removeAttribute("style");ga in n&&(n[ga]=s?i.display:"",n[Dh]&&(i.display="none"))}const yc=/\s*!important$/;function Qr(n,t,e){if(Dt(e))e.forEach(i=>Qr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=Vm(n,t);yc.test(e)?n.setProperty(Qi(i),e.replace(yc,""),"important"):n[i]=e}}const Mc=["Webkit","Moz","ms"],eo={};function Vm(n,t){const e=eo[t];if(e)return e;let i=qe(t);if(i!=="filter"&&i in n)return eo[t]=i;i=Ta(i);for(let r=0;r<Mc.length;r++){const s=Mc[r]+i;if(s in n)return eo[t]=s}return t}function Wm(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&pe(i)&&e===i}const Sc="http://www.w3.org/1999/xlink";function bc(n,t,e,i,r,s=Gd(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Sc,t.slice(6,t.length)):n.setAttributeNS(Sc,t,e):e==null||s&&!Ef(e)?n.removeAttribute(t):n.setAttribute(t,s?"":On(e)?String(e):e)}function Ec(n,t,e,i,r){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Ih(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Ef(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(r||t)}function yr(n,t,e,i){n.addEventListener(t,e,i)}function Xm(n,t,e,i){n.removeEventListener(t,e,i)}const wc=Symbol("_vei");function qm(n,t,e,i,r=null){const s=n[wc]||(n[wc]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=jm(t);if(i){const u=s[t]=Zm(i,r);yr(n,a,u,l)}else o&&(Xm(n,a,o,l),s[t]=void 0)}}const Tc=/(?:Once|Passive|Capture)$/;function jm(n){let t;if(Tc.test(n)){t={};let i;for(;i=n.match(Tc);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Qi(n.slice(2)),t]}let no=0;const $m=Promise.resolve(),Ym=()=>no||($m.then(()=>no=0),no=Date.now());function Zm(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;Mn(Km(i,e.value),t,5,[i])};return e.value=n,e.attached=Ym(),e}function Km(n,t){if(Dt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const Ac=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Jm=(n,t,e,i,r,s)=>{const o=r==="svg";t==="class"?Bm(n,i,o):t==="style"?Hm(n,e,i):ba(t)?Ea(t)||qm(n,t,e,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Qm(n,t,i,o))?(Ec(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&bc(n,t,i,o,s,t!=="value")):n._isVueCE&&(tg(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!pe(i)))?Ec(n,qe(t),i,s,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),bc(n,t,i,o))};function Qm(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Ac(t)&&kt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ac(t)&&pe(e)?!1:t in n}function tg(n,t){const e=n._def.props;if(!e)return!1;const i=qe(t);return Array.isArray(e)?e.some(r=>qe(r)===i):Object.keys(e).some(r=>qe(r)===i)}const Cc=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Dt(t)?e=>na(t,e):t};function eg(n){n.target.composing=!0}function Rc(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const io=Symbol("_assign");function Pc(n,t,e){return t&&(n=n.trim()),e&&(n=vl(n)),n}const Ic={created(n,{modifiers:{lazy:t,trim:e,number:i}},r){n[io]=Cc(r);const s=i||r.props&&r.props.type==="number";yr(n,t?"change":"input",o=>{o.target.composing||n[io](Pc(n.value,e,s))}),(e||s)&&yr(n,"change",()=>{n.value=Pc(n.value,e,s)}),t||(yr(n,"compositionstart",eg),yr(n,"compositionend",Rc),yr(n,"change",Rc))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:r,number:s}},o){if(n[io]=Cc(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?vl(n.value):n.value,l=t??"";if(a===l)return;const u=n.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===n&&n.type!=="range"&&(i&&t===e||r&&n.value.trim()===l)||(n.value=l)}},ng=["ctrl","shift","alt","meta"],ig={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>ng.some(e=>n[`${e}Key`]&&!t.includes(e))},ts=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=(r,...s)=>{for(let o=0;o<t.length;o++){const a=ig[t[o]];if(a&&a(r,t))return}return n(r,...s)})},rg=Ee({patchProp:Jm},Pm);let Lc;function sg(){return Lc||(Lc=lm(rg))}const ag=(...n)=>{const t=sg().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=lg(i);if(!r)return;const s=t._component;!kt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=e(r,!1,og(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function og(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function lg(n){return pe(n)?document.querySelector(n):n}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Mr=typeof document<"u";function Uh(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function cg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Uh(n.default)}const Qt=Object.assign;function ro(n,t){const e={};for(const i in t){const r=t[i];e[i]=Sn(r)?r.map(n):n(r)}return e}const cs=()=>{},Sn=Array.isArray;function Dc(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}const Nh=/#/g,ug=/&/g,fg=/\//g,hg=/=/g,dg=/\?/g,Oh=/\+/g,pg=/%5B/g,mg=/%5D/g,Fh=/%5E/g,gg=/%60/g,Bh=/%7B/g,_g=/%7C/g,kh=/%7D/g,vg=/%20/g;function Ul(n){return n==null?"":encodeURI(""+n).replace(_g,"|").replace(pg,"[").replace(mg,"]")}function xg(n){return Ul(n).replace(Bh,"{").replace(kh,"}").replace(Fh,"^")}function el(n){return Ul(n).replace(Oh,"%2B").replace(vg,"+").replace(Nh,"%23").replace(ug,"%26").replace(gg,"`").replace(Bh,"{").replace(kh,"}").replace(Fh,"^")}function yg(n){return el(n).replace(hg,"%3D")}function Mg(n){return Ul(n).replace(Nh,"%23").replace(dg,"%3F")}function Sg(n){return Mg(n).replace(fg,"%2F")}function _s(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const bg=/\/$/,Eg=n=>n.replace(bg,"");function so(n,t,e="/"){let i,r={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=t.slice(0,l),s=t.slice(l,a>0?a:t.length),r=n(s.slice(1))),a>=0&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=Cg(i??t,e),{fullPath:i+s+o,path:i,query:r,hash:_s(o)}}function wg(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function Uc(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function Tg(n,t,e){const i=t.matched.length-1,r=e.matched.length-1;return i>-1&&i===r&&Lr(t.matched[i],e.matched[r])&&zh(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function Lr(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function zh(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(var e in n)if(!Ag(n[e],t[e]))return!1;return!0}function Ag(n,t){return Sn(n)?Nc(n,t):Sn(t)?Nc(t,n):(n==null?void 0:n.valueOf())===(t==null?void 0:t.valueOf())}function Nc(n,t){return Sn(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function Cg(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=e.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return e.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const li={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let nl=function(n){return n.pop="pop",n.push="push",n}({}),ao=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function Rg(n){if(!n)if(Mr){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Eg(n)}const Pg=/^[^#]+#/;function Ig(n,t){return n.replace(Pg,"#")+t}function Lg(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const Oa=()=>({left:window.scrollX,top:window.scrollY});function Dg(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),r=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!r)return;t=Lg(r,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Oc(n,t){return(history.state?history.state.position-t:-1)+n}const il=new Map;function Ug(n,t){il.set(n,t)}function Ng(n){const t=il.get(n);return il.delete(n),t}function Og(n){return typeof n=="string"||n&&typeof n=="object"}function Gh(n){return typeof n=="string"||typeof n=="symbol"}let ge=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const Hh=Symbol("");ge.MATCHER_NOT_FOUND+"",ge.NAVIGATION_GUARD_REDIRECT+"",ge.NAVIGATION_ABORTED+"",ge.NAVIGATION_CANCELLED+"",ge.NAVIGATION_DUPLICATED+"";function Dr(n,t){return Qt(new Error,{type:n,[Hh]:!0},t)}function zn(n,t){return n instanceof Error&&Hh in n&&(t==null||!!(n.type&t))}const Fg=["params","query","hash"];function Bg(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const t={};for(const e of Fg)e in n&&(t[e]=n[e]);return JSON.stringify(t,null,2)}function kg(n){const t={};if(n===""||n==="?")return t;const e=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<e.length;++i){const r=e[i].replace(Oh," "),s=r.indexOf("="),o=_s(s<0?r:r.slice(0,s)),a=s<0?null:_s(r.slice(s+1));if(o in t){let l=t[o];Sn(l)||(l=t[o]=[l]),l.push(a)}else t[o]=a}return t}function Fc(n){let t="";for(let e in n){const i=n[e];if(e=yg(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(Sn(i)?i.map(r=>r&&el(r)):[i&&el(i)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+e,r!=null&&(t+="="+r))})}return t}function zg(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=Sn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return t}const Gg=Symbol(""),Bc=Symbol(""),Fa=Symbol(""),Nl=Symbol(""),rl=Symbol("");function Xr(){let n=[];function t(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function gi(n,t,e,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(Dr(ge.NAVIGATION_ABORTED,{from:e,to:t})):p instanceof Error?l(p):Og(p)?l(Dr(ge.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(o&&i.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),a())},c=s(()=>n.call(i&&i.instances[r],t,e,u));let f=Promise.resolve(c);n.length<3&&(f=f.then(u)),f.catch(p=>l(p))})}function oo(n,t,e,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Uh(l)){const u=(l.__vccOpts||l)[t];u&&s.push(gi(u,e,i,o,a,r))}else{let u=l();s.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=cg(c)?c.default:c;o.mods[a]=c,o.components[a]=f;const p=(f.__vccOpts||f)[t];return p&&gi(p,e,i,o,a,r)()}))}}return s}function Hg(n,t){const e=[],i=[],r=[],s=Math.max(t.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=t.matched[o];a&&(n.matched.find(u=>Lr(u,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(u=>Lr(u,l))||r.push(l))}return[e,i,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Vg=()=>location.protocol+"//"+location.host;function Vh(n,t){const{pathname:e,search:i,hash:r}=t,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),Uc(a,"")}return Uc(e,n)+i+r}function Wg(n,t,e,i){let r=[],s=[],o=null;const a=({state:p})=>{const d=Vh(n,location),v=e.value,g=t.value;let m=0;if(p){if(e.value=d,t.value=p,o&&o===v){o=null;return}m=g?p.position-g.position:0}else i(d);r.forEach(h=>{h(e.value,v,{delta:m,type:nl.pop,direction:m?m>0?ao.forward:ao.back:ao.unknown})})};function l(){o=e.value}function u(p){r.push(p);const d=()=>{const v=r.indexOf(p);v>-1&&r.splice(v,1)};return s.push(d),d}function c(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(Qt({},p.state,{scroll:Oa()}),"")}}function f(){for(const p of s)p();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:u,destroy:f}}function kc(n,t,e,i=!1,r=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:r?Oa():null}}function Xg(n){const{history:t,location:e}=window,i={value:Vh(n,e)},r={value:t.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,u,c){const f=n.indexOf("#"),p=f>-1?(e.host&&document.querySelector("base")?n:n.slice(f))+l:Vg()+n+l;try{t[c?"replaceState":"pushState"](u,"",p),r.value=u}catch(d){console.error(d),e[c?"replace":"assign"](p)}}function o(l,u){s(l,Qt({},t.state,kc(r.value.back,l,r.value.forward,!0),u,{position:r.value.position}),!0),i.value=l}function a(l,u){const c=Qt({},r.value,t.state,{forward:l,scroll:Oa()});s(c.current,c,!0),s(l,Qt({},kc(i.value,l,null),{position:c.position+1},u),!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function qg(n){n=Rg(n);const t=Xg(n),e=Wg(n,t.state,t.location,t.replace);function i(s,o=!0){o||e.pauseListeners(),history.go(s)}const r=Qt({location:"",base:n,go:i,createHref:Ig.bind(null,n)},t,e);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function jg(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),qg(n)}let Vi=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var Me=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(Me||{});const $g={type:Vi.Static,value:""},Yg=/[a-zA-Z0-9_]/;function Zg(n){if(!n)return[[]];if(n==="/")return[[$g]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(d){throw new Error(`ERR (${e})/"${u}": ${d}`)}let e=Me.Static,i=e;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,u="",c="";function f(){u&&(e===Me.Static?s.push({type:Vi.Static,value:u}):e===Me.Param||e===Me.ParamRegExp||e===Me.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:Vi.Param,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==Me.ParamRegExp){i=e,e=Me.EscapeNext;continue}switch(e){case Me.Static:l==="/"?(u&&f(),o()):l===":"?(f(),e=Me.Param):p();break;case Me.EscapeNext:p(),e=i;break;case Me.Param:l==="("?e=Me.ParamRegExp:Yg.test(l)?p():(f(),e=Me.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Me.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:e=Me.ParamRegExpEnd:c+=l;break;case Me.ParamRegExpEnd:f(),e=Me.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:t("Unknown state");break}}return e===Me.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),f(),o(),r}const zc="[^/]+?",Kg={sensitive:!1,strict:!1,start:!0,end:!0};var He=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(He||{});const Jg=/[.+*?^${}()[\]/\\]/g;function Qg(n,t){const e=Qt({},Kg,t),i=[];let r=e.start?"^":"";const s=[];for(const u of n){const c=u.length?[]:[He.Root];e.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const p=u[f];let d=He.Segment+(e.sensitive?He.BonusCaseSensitive:0);if(p.type===Vi.Static)f||(r+="/"),r+=p.value.replace(Jg,"\\$&"),d+=He.Static;else if(p.type===Vi.Param){const{value:v,repeatable:g,optional:m,regexp:h}=p;s.push({name:v,repeatable:g,optional:m});const y=h||zc;if(y!==zc){d+=He.BonusCustomRegExp;try{`${y}`}catch(S){throw new Error(`Invalid custom RegExp for param "${v}" (${y}): `+S.message)}}let _=g?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(_=m&&u.length<2?`(?:/${_})`:"/"+_),m&&(_+="?"),r+=_,d+=He.Dynamic,m&&(d+=He.BonusOptional),g&&(d+=He.BonusRepeatable),y===".*"&&(d+=He.BonusWildcard)}c.push(d)}i.push(c)}if(e.strict&&e.end){const u=i.length-1;i[u][i[u].length-1]+=He.BonusStrict}e.strict||(r+="/?"),e.end?r+="$":e.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,e.sensitive?"":"i");function a(u){const c=u.match(o),f={};if(!c)return null;for(let p=1;p<c.length;p++){const d=c[p]||"",v=s[p-1];f[v.name]=d&&v.repeatable?d.split("/"):d}return f}function l(u){let c="",f=!1;for(const p of n){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const d of p)if(d.type===Vi.Static)c+=d.value;else if(d.type===Vi.Param){const{value:v,repeatable:g,optional:m}=d,h=v in u?u[v]:"";if(Sn(h)&&!g)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const y=Sn(h)?h.join("/"):h;if(!y)if(m)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);c+=y}}return c||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function t_(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===He.Static+He.Segment?-1:1:n.length>t.length?t.length===1&&t[0]===He.Static+He.Segment?1:-1:0}function Wh(n,t){let e=0;const i=n.score,r=t.score;for(;e<i.length&&e<r.length;){const s=t_(i[e],r[e]);if(s)return s;e++}if(Math.abs(r.length-i.length)===1){if(Gc(i))return 1;if(Gc(r))return-1}return r.length-i.length}function Gc(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const e_={strict:!1,end:!0,sensitive:!1};function n_(n,t,e){const i=Qg(Zg(n.path),e),r=Qt(i,{record:n,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function i_(n,t){const e=[],i=new Map;t=Dc(e_,t);function r(f){return i.get(f)}function s(f,p,d){const v=!d,g=Vc(f);g.aliasOf=d&&d.record;const m=Dc(t,f),h=[g];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const E of S)h.push(Vc(Qt({},g,{components:d?d.record.components:g.components,path:E,aliasOf:d?d.record:g})))}let y,_;for(const S of h){const{path:E}=S;if(p&&E[0]!=="/"){const I=p.record.path,R=I[I.length-1]==="/"?"":"/";S.path=p.record.path+(E&&R+E)}if(y=n_(S,p,m),d?d.alias.push(y):(_=_||y,_!==y&&_.alias.push(y),v&&f.name&&!Wc(y)&&o(f.name)),Xh(y)&&l(y),g.children){const I=g.children;for(let R=0;R<I.length;R++)s(I[R],y,d&&d.children[R])}d=d||y}return _?()=>{o(_)}:cs}function o(f){if(Gh(f)){const p=i.get(f);p&&(i.delete(f),e.splice(e.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=e.indexOf(f);p>-1&&(e.splice(p,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return e}function l(f){const p=a_(f,e);e.splice(p,0,f),f.record.name&&!Wc(f)&&i.set(f.record.name,f)}function u(f,p){let d,v={},g,m;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw Dr(ge.MATCHER_NOT_FOUND,{location:f});m=d.record.name,v=Qt(Hc(p.params,d.keys.filter(_=>!_.optional).concat(d.parent?d.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),f.params&&Hc(f.params,d.keys.map(_=>_.name))),g=d.stringify(v)}else if(f.path!=null)g=f.path,d=e.find(_=>_.re.test(g)),d&&(v=d.parse(g),m=d.record.name);else{if(d=p.name?i.get(p.name):e.find(_=>_.re.test(p.path)),!d)throw Dr(ge.MATCHER_NOT_FOUND,{location:f,currentLocation:p});m=d.record.name,v=Qt({},p.params,f.params),g=d.stringify(v)}const h=[];let y=d;for(;y;)h.unshift(y.record),y=y.parent;return{name:m,path:g,params:v,matched:h,meta:s_(h)}}n.forEach(f=>s(f));function c(){e.length=0,i.clear()}return{addRoute:s,resolve:u,removeRoute:o,clearRoutes:c,getRoutes:a,getRecordMatcher:r}}function Hc(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function Vc(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:r_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function r_(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function Wc(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function s_(n){return n.reduce((t,e)=>Qt(t,e.meta),{})}function a_(n,t){let e=0,i=t.length;for(;e!==i;){const s=e+i>>1;Wh(n,t[s])<0?i=s:e=s+1}const r=o_(n);return r&&(i=t.lastIndexOf(r,i-1)),i}function o_(n){let t=n;for(;t=t.parent;)if(Xh(t)&&Wh(n,t)===0)return t}function Xh({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Xc(n){const t=xn(Fa),e=xn(Nl),i=ve(()=>{const l=ji(n.to);return t.resolve(l)}),r=ve(()=>{const{matched:l}=i.value,{length:u}=l,c=l[u-1],f=e.matched;if(!c||!f.length)return-1;const p=f.findIndex(Lr.bind(null,c));if(p>-1)return p;const d=qc(l[u-2]);return u>1&&qc(c)===d&&f[f.length-1].path!==d?f.findIndex(Lr.bind(null,l[u-2])):p}),s=ve(()=>r.value>-1&&h_(e.params,i.value.params)),o=ve(()=>r.value>-1&&r.value===e.matched.length-1&&zh(e.params,i.value.params));function a(l={}){if(f_(l)){const u=t[ji(n.replace)?"replace":"push"](ji(n.to)).catch(cs);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:i,href:ve(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function l_(n){return n.length===1?n[0]:n}const c_=rh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Xc,setup(n,{slots:t}){const e=Ra(Xc(n)),{options:i}=xn(Fa),r=ve(()=>({[jc(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[jc(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const s=t.default&&l_(t.default(e));return n.custom?s:Dl("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:r.value},s)}}}),u_=c_;function f_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function h_(n,t){for(const e in t){const i=t[e],r=n[e];if(typeof i=="string"){if(i!==r)return!1}else if(!Sn(r)||r.length!==i.length||i.some((s,o)=>s.valueOf()!==r[o].valueOf()))return!1}return!0}function qc(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const jc=(n,t,e)=>n??t??e,d_=rh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=xn(rl),r=ve(()=>n.route||i.value),s=xn(Bc,0),o=ve(()=>{let u=ji(s);const{matched:c}=r.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),a=ve(()=>r.value.matched[o.value]);ia(Bc,ve(()=>o.value+1)),ia(Gg,a),ia(rl,r);const l=ie();return rs(()=>[l.value,a.value,n.name],([u,c,f],[p,d,v])=>{c&&(c.instances[f]=u,d&&d!==c&&u&&u===p&&(c.leaveGuards.size||(c.leaveGuards=d.leaveGuards),c.updateGuards.size||(c.updateGuards=d.updateGuards))),u&&c&&(!d||!Lr(c,d)||!p)&&(c.enterCallbacks[f]||[]).forEach(g=>g(u))},{flush:"post"}),()=>{const u=r.value,c=n.name,f=a.value,p=f&&f.components[c];if(!p)return $c(e.default,{Component:p,route:u});const d=f.props[c],v=d?d===!0?u.params:typeof d=="function"?d(u):d:null,m=Dl(p,Qt({},v,t,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(f.instances[c]=null)},ref:l}));return $c(e.default,{Component:m,route:u})||m}}});function $c(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const p_=d_;function m_(n){const t=i_(n.routes,n),e=n.parseQuery||kg,i=n.stringifyQuery||Fc,r=n.history,s=Xr(),o=Xr(),a=Xr(),l=up(li);let u=li;Mr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=ro.bind(null,W=>""+W),f=ro.bind(null,Sg),p=ro.bind(null,_s);function d(W,rt){let it,mt;return Gh(W)?(it=t.getRecordMatcher(W),mt=rt):mt=W,t.addRoute(mt,it)}function v(W){const rt=t.getRecordMatcher(W);rt&&t.removeRoute(rt)}function g(){return t.getRoutes().map(W=>W.record)}function m(W){return!!t.getRecordMatcher(W)}function h(W,rt){if(rt=Qt({},rt||l.value),typeof W=="string"){const x=so(e,W,rt.path),z=t.resolve({path:x.path},rt),F=r.createHref(x.fullPath);return Qt(x,z,{params:p(z.params),hash:_s(x.hash),redirectedFrom:void 0,href:F})}let it;if(W.path!=null)it=Qt({},W,{path:so(e,W.path,rt.path).path});else{const x=Qt({},W.params);for(const z in x)x[z]==null&&delete x[z];it=Qt({},W,{params:f(x)}),rt.params=f(rt.params)}const mt=t.resolve(it,rt),ht=W.hash||"";mt.params=c(p(mt.params));const w=wg(i,Qt({},W,{hash:xg(ht),path:mt.path})),V=r.createHref(w);return Qt({fullPath:w,hash:ht,query:i===Fc?zg(W.query):W.query||{}},mt,{redirectedFrom:void 0,href:V})}function y(W){return typeof W=="string"?so(e,W,l.value.path):Qt({},W)}function _(W,rt){if(u!==W)return Dr(ge.NAVIGATION_CANCELLED,{from:rt,to:W})}function S(W){return R(W)}function E(W){return S(Qt(y(W),{replace:!0}))}function I(W,rt){const it=W.matched[W.matched.length-1];if(it&&it.redirect){const{redirect:mt}=it;let ht=typeof mt=="function"?mt(W,rt):mt;return typeof ht=="string"&&(ht=ht.includes("?")||ht.includes("#")?ht=y(ht):{path:ht},ht.params={}),Qt({query:W.query,hash:W.hash,params:ht.path!=null?{}:W.params},ht)}}function R(W,rt){const it=u=h(W),mt=l.value,ht=W.state,w=W.force,V=W.replace===!0,x=I(it,mt);if(x)return R(Qt(y(x),{state:typeof x=="object"?Qt({},ht,x.state):ht,force:w,replace:V}),rt||it);const z=it;z.redirectedFrom=rt;let F;return!w&&Tg(i,mt,it)&&(F=Dr(ge.NAVIGATION_DUPLICATED,{to:z,from:mt}),$(mt,mt,!0,!1)),(F?Promise.resolve(F):T(z,mt)).catch(P=>zn(P)?zn(P,ge.NAVIGATION_GUARD_REDIRECT)?P:lt(P):nt(P,z,mt)).then(P=>{if(P){if(zn(P,ge.NAVIGATION_GUARD_REDIRECT))return R(Qt({replace:V},y(P.to),{state:typeof P.to=="object"?Qt({},ht,P.to.state):ht,force:w}),rt||z)}else P=A(z,mt,!0,V,ht);return U(z,mt,P),P})}function B(W,rt){const it=_(W,rt);return it?Promise.reject(it):Promise.resolve()}function k(W){const rt=et.values().next().value;return rt&&typeof rt.runWithContext=="function"?rt.runWithContext(W):W()}function T(W,rt){let it;const[mt,ht,w]=Hg(W,rt);it=oo(mt.reverse(),"beforeRouteLeave",W,rt);for(const x of mt)x.leaveGuards.forEach(z=>{it.push(gi(z,W,rt))});const V=B.bind(null,W,rt);return it.push(V),Y(it).then(()=>{it=[];for(const x of s.list())it.push(gi(x,W,rt));return it.push(V),Y(it)}).then(()=>{it=oo(ht,"beforeRouteUpdate",W,rt);for(const x of ht)x.updateGuards.forEach(z=>{it.push(gi(z,W,rt))});return it.push(V),Y(it)}).then(()=>{it=[];for(const x of w)if(x.beforeEnter)if(Sn(x.beforeEnter))for(const z of x.beforeEnter)it.push(gi(z,W,rt));else it.push(gi(x.beforeEnter,W,rt));return it.push(V),Y(it)}).then(()=>(W.matched.forEach(x=>x.enterCallbacks={}),it=oo(w,"beforeRouteEnter",W,rt,k),it.push(V),Y(it))).then(()=>{it=[];for(const x of o.list())it.push(gi(x,W,rt));return it.push(V),Y(it)}).catch(x=>zn(x,ge.NAVIGATION_CANCELLED)?x:Promise.reject(x))}function U(W,rt,it){a.list().forEach(mt=>k(()=>mt(W,rt,it)))}function A(W,rt,it,mt,ht){const w=_(W,rt);if(w)return w;const V=rt===li,x=Mr?history.state:{};it&&(mt||V?r.replace(W.fullPath,Qt({scroll:V&&x&&x.scroll},ht)):r.push(W.fullPath,ht)),l.value=W,$(W,rt,it,V),lt()}let N;function M(){N||(N=r.listen((W,rt,it)=>{if(!D.listening)return;const mt=h(W),ht=I(mt,D.currentRoute.value);if(ht){R(Qt(ht,{replace:!0,force:!0}),mt).catch(cs);return}u=mt;const w=l.value;Mr&&Ug(Oc(w.fullPath,it.delta),Oa()),T(mt,w).catch(V=>zn(V,ge.NAVIGATION_ABORTED|ge.NAVIGATION_CANCELLED)?V:zn(V,ge.NAVIGATION_GUARD_REDIRECT)?(R(Qt(y(V.to),{force:!0}),mt).then(x=>{zn(x,ge.NAVIGATION_ABORTED|ge.NAVIGATION_DUPLICATED)&&!it.delta&&it.type===nl.pop&&r.go(-1,!1)}).catch(cs),Promise.reject()):(it.delta&&r.go(-it.delta,!1),nt(V,mt,w))).then(V=>{V=V||A(mt,w,!1),V&&(it.delta&&!zn(V,ge.NAVIGATION_CANCELLED)?r.go(-it.delta,!1):it.type===nl.pop&&zn(V,ge.NAVIGATION_ABORTED|ge.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),U(mt,w,V)}).catch(cs)}))}let X=Xr(),tt=Xr(),q;function nt(W,rt,it){lt(W);const mt=tt.list();return mt.length?mt.forEach(ht=>ht(W,rt,it)):console.error(W),Promise.reject(W)}function J(){return q&&l.value!==li?Promise.resolve():new Promise((W,rt)=>{X.add([W,rt])})}function lt(W){return q||(q=!W,M(),X.list().forEach(([rt,it])=>W?it(W):rt()),X.reset()),W}function $(W,rt,it,mt){const{scrollBehavior:ht}=n;if(!Mr||!ht)return Promise.resolve();const w=!it&&Ng(Oc(W.fullPath,0))||(mt||!it)&&history.state&&history.state.scroll||null;return Sr().then(()=>ht(W,rt,w)).then(V=>V&&Dg(V)).catch(V=>nt(V,W,rt))}const K=W=>r.go(W);let xt;const et=new Set,D={currentRoute:l,listening:!0,addRoute:d,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:g,resolve:h,options:n,push:S,replace:E,go:K,back:()=>K(-1),forward:()=>K(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:tt.add,isReady:J,install(W){W.component("RouterLink",u_),W.component("RouterView",p_),W.config.globalProperties.$router=D,Object.defineProperty(W.config.globalProperties,"$route",{enumerable:!0,get:()=>ji(l)}),Mr&&!xt&&l.value===li&&(xt=!0,S(r.location).catch(mt=>{}));const rt={};for(const mt in li)Object.defineProperty(rt,mt,{get:()=>l.value[mt],enumerable:!0});W.provide(Fa,D),W.provide(Nl,Gf(rt)),W.provide(rl,l);const it=W.unmount;et.add(W),W.unmount=function(){et.delete(W),et.size<1&&(u=li,N&&N(),N=null,l.value=li,xt=!1,q=!1),it()}}};function Y(W){return W.reduce((rt,it)=>rt.then(()=>k(it)),Promise.resolve())}return D}function g_(){return xn(Fa)}function __(n){return xn(Nl)}const tr=(n,t)=>{const e=n.__vccOpts||n;for(const[i,r]of t)e[i]=r;return e},v_={class:"topbar"},x_={class:"topbar-left"},y_={class:"topbar-nav"},M_={class:"topbar-right"},S_={class:"theme-switcher"},b_=["title","onClick"],E_={__name:"TopBar",props:{currentTheme:{type:String,default:"dark"},currentRoute:{type:String,default:"/"}},emits:["set-theme","nav"],setup(n){const t=[{id:"dark",label:"黑色",color:"#111"},{id:"gray",label:"灰色",color:"#555"},{id:"light",label:"白色",color:"#e8e8e8"}];return(e,i)=>(Bt(),Gt("header",v_,[st("div",x_,[i[4]||(i[4]=st("div",{class:"logo"},[st("span",{class:"logo-k"},"K"),st("span",{class:"logo-rest"},"Skr")],-1)),i[5]||(i[5]=st("div",{class:"topbar-divider"},null,-1)),st("nav",y_,[st("button",{class:_e(["nav-tab",{active:n.currentRoute==="/"}]),onClick:i[0]||(i[0]=r=>e.$emit("nav","/"))},[...i[2]||(i[2]=[st("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[st("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),st("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),st("polyline",{points:"21 15 16 10 5 21"})],-1),Qn(" 插件预览 ",-1)])],2),st("button",{class:_e(["nav-tab",{active:n.currentRoute==="/convert"}]),onClick:i[1]||(i[1]=r=>e.$emit("nav","/convert"))},[...i[3]||(i[3]=[st("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[st("polygon",{points:"23 7 16 12 23 17 23 7"}),st("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"})],-1),Qn(" 视频素材转换 ",-1)])],2)])]),st("div",M_,[i[6]||(i[6]=st("a",{href:"https://kskr.kuaishou.com",target:"_blank",class:"topbar-link"},"文档",-1)),i[7]||(i[7]=st("a",{href:"#",class:"topbar-link"},"更新日志",-1)),i[8]||(i[8]=st("a",{href:"#",class:"topbar-link"},"关于",-1)),st("div",S_,[(Bt(),Gt(Re,null,Ki(t,r=>st("button",{key:r.id,class:_e(["theme-btn",{active:n.currentTheme===r.id}]),title:r.label,onClick:s=>e.$emit("set-theme",r.id)},[st("span",{class:"theme-dot",style:_n({background:r.color})},null,4)],10,b_)),64))]),i[9]||(i[9]=st("span",{class:"version-badge"},"v1.0",-1))])]))}},w_=tr(E_,[["__scopeId","data-v-1117d291"]]),T_={class:"app-body"},A_={__name:"App",setup(n){const t=ie("dark");function e(a){t.value=a}const i=g_(),r=__(),s=ve(()=>r.path);function o(a){i.push(a)}return(a,l)=>{const u=Bp("router-view");return Bt(),Gt("div",{class:_e(["app","theme-"+t.value])},[Se(w_,{currentTheme:t.value,currentRoute:s.value,onSetTheme:e,onNav:o},null,8,["currentTheme","currentRoute"]),st("div",T_,[Se(u)])],2)}}},C_=tr(A_,[["__scopeId","data-v-19514291"]]),aa=[{id:"light",name:"光效",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',plugins:[{id:"edge-glow",name:"EdgeGlow",nameZh:"边缘辉光",status:"active"},{id:"enlargement",name:"Enlargement",nameZh:"局部放大",status:"active"},{id:"shaft-light",name:"ShaftLight",nameZh:"光柱",status:"active"},{id:"overall-glow",name:"OverallGlow",nameZh:"泛光",status:"active"}]},{id:"distortion",name:"画面扭曲",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8"/><path d="M3 12c0 2.2 3.6 4 8 4s8-1.8 8-4"/><path d="M3 12c0-2.2 3.6-4 8-4s8 1.8 8 4"/></svg>',plugins:[{id:"wave-blur",name:"WaveBlurring",nameZh:"波形模糊",status:"active"},{id:"cc-lens",name:"CCLens",nameZh:"鱼眼",status:"active"},{id:"ripple",name:"Ripple",nameZh:"波纹",status:"active"},{id:"wave-warp",name:"WaveWarp",nameZh:"波形变形",status:"active"},{id:"twirl-distort",name:"TwirlDistort",nameZh:"旋转扭曲",status:"active"}]},{id:"blur-mosaic",name:"模糊/马赛克",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="4" height="4"/><rect x="10" y="3" width="4" height="4"/><rect x="17" y="3" width="4" height="4"/><rect x="3" y="10" width="4" height="4"/><rect x="10" y="10" width="4" height="4"/><rect x="17" y="10" width="4" height="4"/><rect x="3" y="17" width="4" height="4"/><rect x="10" y="17" width="4" height="4"/><rect x="17" y="17" width="4" height="4"/></svg>',plugins:[{id:"directional-blur",name:"Directional Blur",nameZh:"定向模糊",status:"active"},{id:"radial-blur",name:"Radial Blur",nameZh:"径向模糊",status:"active"},{id:"basic-mosaic",name:"Basic Mosaic",nameZh:"基础马赛克",status:"active"},{id:"blur-mosaic-fx",name:"Blur Mosaic",nameZh:"模糊马赛克",status:"active"},{id:"brick-mosaic",name:"Brick Mosaic",nameZh:"砖块马赛克",status:"active"},{id:"colorful-mosaic-1",name:"Colorful MosaicI",nameZh:"彩色马赛克 I",status:"active"},{id:"colorful-mosaic-2",name:"Colorful MosaicII",nameZh:"彩色马赛克 II",status:"active"},{id:"colorful-mosaic-3",name:"Colorful MosaicIII",nameZh:"彩色马赛克 III",status:"active"},{id:"glass-mosaic-1",name:"Glass MosaicI",nameZh:"玻璃马赛克 I",status:"active"},{id:"glass-mosaic-2",name:"Glass MosaicII",nameZh:"玻璃马赛克 II",status:"active"},{id:"hexagon-mosaic",name:"Hexagon Mosaic",nameZh:"六边形马赛克",status:"active"},{id:"star-mosaic",name:"Star Mosaic",nameZh:"星形马赛克",status:"active"}]},{id:"text",name:"文本",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>',plugins:[{id:"text-glitch",name:"TextGlitch",nameZh:"文字故障",status:"coming"},{id:"text-reveal",name:"TextReveal",nameZh:"文字揭示",status:"coming"},{id:"kinetic-type",name:"KineticType",nameZh:"动态字体",status:"coming"},{id:"neon-text",name:"NeonText",nameZh:"霓虹文字",status:"coming"}]},{id:"filter",name:"滤镜",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M8 12a4 4 0 0 1 8 0"/><line x1="12" y1="3" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="21"/><line x1="3" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="21" y2="12"/></svg>',plugins:[{id:"engrave",name:"Engrave",nameZh:"雕刻",status:"active"},{id:"newsprint",name:"Newsprint",nameZh:"报纸印刷",status:"active"},{id:"cartoon",name:"Cartoon",nameZh:"卡通",status:"active"},{id:"film-soft-light",name:"FilmSoftLight",nameZh:"胶片柔光",status:"active"},{id:"comic",name:"Comic",nameZh:"漫画",status:"active"}]},{id:"stylize",name:"风格化",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/><circle cx="12" cy="12" r="3"/></svg>',plugins:[{id:"oil-paint",name:"OilPaint",nameZh:"油画效果",status:"coming"},{id:"sketch",name:"Sketch",nameZh:"素描效果",status:"coming"},{id:"halftone",name:"Halftone",nameZh:"半调效果",status:"coming"},{id:"watercolor",name:"Watercolor",nameZh:"水彩效果",status:"coming"},{id:"glitch-art",name:"GlitchArt",nameZh:"故障艺术",status:"coming"}]},{id:"generate",name:"生成",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',plugins:[{id:"particle-gen",name:"ParticleGen",nameZh:"粒子生成",status:"coming"},{id:"noise-field",name:"NoiseField",nameZh:"噪声场",status:"coming"},{id:"fractal",name:"FractalGen",nameZh:"分形生成",status:"coming"},{id:"grid-gen",name:"GridGen",nameZh:"网格生成",status:"coming"}]}],R_={class:"sidebar"},P_={class:"category-list"},I_=["onClick"],L_=["innerHTML"],D_={class:"category-name"},U_={class:"plugin-list"},N_=["onClick"],O_={class:"plugin-info"},F_={class:"plugin-name"},B_={class:"plugin-name-zh"},k_={key:0,class:"plugin-tag"},z_={key:1,class:"plugin-tag active-tag"},G_={class:"sidebar-footer"},H_={class:"footer-text"},V_={class:"footer-count"},W_={class:"footer-available"},X_={__name:"Sidebar",emits:["select-plugin"],setup(n,{emit:t}){const e=t,i=ie("distortion"),r=ie("wave-blur"),s=ve(()=>aa.reduce((u,c)=>u+c.plugins.length,0)),o=ve(()=>aa.reduce((u,c)=>u+c.plugins.filter(f=>f.status==="active").length,0));function a(u){i.value=i.value===u?null:u}function l(u){u.status!=="coming"&&(r.value=u.id,e("select-plugin",u))}return(u,c)=>(Bt(),Gt("aside",R_,[st("div",P_,[(Bt(!0),Gt(Re,null,Ki(ji(aa),f=>(Bt(),Gt("div",{key:f.id,class:_e(["category-item",{expanded:i.value===f.id}])},[st("div",{class:_e(["category-header",{active:i.value===f.id}]),onClick:p=>a(f.id)},[st("div",{class:"category-icon",innerHTML:f.icon},null,8,L_),st("span",D_,Yt(f.name),1),c[0]||(c[0]=st("div",{class:"category-arrow"},[st("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[st("polyline",{points:"6 9 12 15 18 9"})])],-1))],10,I_),Se(Dm,{name:"slide"},{default:Yf(()=>[jo(st("div",U_,[(Bt(!0),Gt(Re,null,Ki(f.plugins,p=>(Bt(),Gt("div",{key:p.id,class:_e(["plugin-item",{selected:r.value===p.id,coming:p.status==="coming"}]),onClick:d=>l(p)},[c[1]||(c[1]=st("div",{class:"plugin-dot"},null,-1)),st("div",O_,[st("span",F_,Yt(p.name),1),st("span",B_,Yt(p.nameZh),1)]),p.status==="coming"?(Bt(),Gt("span",k_,"即将")):(Bt(),Gt("span",z_,"可用"))],10,N_))),128))],512),[[km,i.value===f.id]])]),_:2},1024)],2))),128))]),st("div",G_,[st("div",H_,[st("span",V_,Yt(s.value)+" 个插件",1),c[2]||(c[2]=st("span",{class:"footer-divider"},"·",-1)),st("span",W_,Yt(o.value)+" 已上线",1)])])]))}},q_=tr(X_,[["__scopeId","data-v-3c9974e1"]]),j_={class:"param-panel"},$_={class:"plugin-header"},Y_={class:"plugin-title-row"},Z_={class:"plugin-title"},K_={class:"plugin-title-zh"},J_={class:"params-scroll"},Q_={class:"param-header"},t0={class:"param-label"},e0={class:"param-value-wrap"},n0={class:"param-value"},i0={class:"param-desc"},r0={class:"slider-wrap"},s0={class:"slider-min"},a0=["min","max","step","value","onInput"],o0={class:"slider-max"},l0={class:"panel-actions"},c0={class:"btn-upload"},u0={__name:"ParamPanel",props:{plugin:{type:Object,required:!0},params:{type:Array,required:!0},modelValue:{type:Object,required:!0},compareMode:{type:Boolean,default:!1}},emits:["update:modelValue","reset","upload","toggle-compare"],setup(n,{emit:t}){const e=n,i=t;function r(o,a){i("update:modelValue",{...e.modelValue,[o]:parseFloat(a)})}function s(o){return typeof o=="number"?o.toFixed(1):o}return(o,a)=>(Bt(),Gt("div",j_,[st("div",$_,[st("div",Y_,[st("div",null,[st("h2",Z_,Yt(n.plugin.name),1),st("p",K_,Yt(n.plugin.nameZh),1)]),st("button",{class:"btn-icon",onClick:a[0]||(a[0]=l=>o.$emit("reset")),title:"重置参数"},[...a[3]||(a[3]=[st("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[st("polyline",{points:"1 4 1 10 7 10"}),st("path",{d:"M3.51 15a9 9 0 1 0 .49-4.64"})],-1)])])])]),st("div",J_,[(Bt(!0),Gt(Re,null,Ki(n.params,l=>(Bt(),Gt("div",{class:"param-group",key:l.key},[st("div",Q_,[st("span",t0,Yt(l.label),1),st("div",e0,[st("span",n0,Yt(s(n.modelValue[l.key])),1)])]),st("p",i0,Yt(l.desc),1),st("div",r0,[st("span",s0,Yt(l.min),1),st("input",{type:"range",min:l.min,max:l.max,step:l.step||.1,value:n.modelValue[l.key],onInput:u=>r(l.key,u.target.value)},null,40,a0),st("span",o0,Yt(l.max),1)])]))),128))]),st("div",l0,[st("label",c0,[st("input",{type:"file",accept:"image/*",onChange:a[1]||(a[1]=l=>o.$emit("upload",l)),hidden:""},null,32),a[4]||(a[4]=st("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[st("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),st("polyline",{points:"17 8 12 3 7 8"}),st("line",{x1:"12",y1:"3",x2:"12",y2:"15"})],-1)),a[5]||(a[5]=Qn(" 上传图片 ",-1))]),st("button",{class:_e(["btn-compare",{active:n.compareMode}]),onClick:a[2]||(a[2]=l=>o.$emit("toggle-compare"))},[a[6]||(a[6]=st("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[st("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),st("line",{x1:"12",y1:"3",x2:"12",y2:"21"})],-1)),Qn(" "+Yt(n.compareMode?"关闭对比":"前后对比"),1)],2)])]))}},f0=tr(u0,[["__scopeId","data-v-78100527"]]),h0={class:"preview-area"},d0={class:"preview-toolbar"},p0={class:"toolbar-left"},m0={class:"breadcrumb"},g0={class:"breadcrumb-cat"},_0={class:"breadcrumb-plugin"},v0={class:"toolbar-right"},x0={class:"view-toggle"},y0=["onClick","title"],M0=["innerHTML"],S0={class:"zoom-control"},b0={class:"zoom-val"},E0={class:"center-wrap"},w0={__name:"PreviewArea",props:{compareMode:{type:Boolean,default:!1},hasImage:{type:Boolean,default:!1},isWebGL:{type:Boolean,default:!1},showingOriginal:{type:Boolean,default:!1},currentCategory:{type:String,default:""},currentPlugin:{type:String,default:""},imageWidth:{type:Number,default:0},imageHeight:{type:Number,default:0}},emits:["upload","toggle-original"],setup(n,{expose:t,emit:e}){const i=n,r=e,s=ie(null),o=ie(null),a=ie(null),l=ie(null),u=ie(null),c=ie(null),f=ie("fit"),p=ie(100),d=[{id:"fit",label:"适应窗口",icon:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>'},{id:"actual",label:"实际大小",icon:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>'}],v=ve(()=>i.imageWidth||900),g=ve(()=>i.imageHeight||600),m=ve(()=>f.value==="fit"?{width:v.value+"px",height:g.value+"px",maxWidth:"100%",maxHeight:"100%"}:{width:Math.round(v.value*p.value/100)+"px",height:Math.round(g.value*p.value/100)+"px"});t({webglCanvas:s,canvas2d:o,originalCanvas:a});function h(){var I;(I=l.value)==null||I.click()}function y(I){r("upload",I)}function _(I){var B,k;I.preventDefault();const R=(k=(B=I.dataTransfer)==null?void 0:B.files)==null?void 0:k[0];R&&r("upload",{target:{files:[R]}})}function S(I){p.value=Math.min(400,Math.max(10,p.value+I))}function E(){r("toggle-original")}return(I,R)=>(Bt(),Gt("div",h0,[st("div",d0,[st("div",p0,[st("span",m0,[st("span",g0,Yt(n.currentCategory),1),R[3]||(R[3]=st("span",{class:"breadcrumb-sep"},"/",-1)),st("span",_0,Yt(n.currentPlugin),1)])]),st("div",v0,[st("div",x0,[(Bt(),Gt(Re,null,Ki(d,B=>st("button",{key:B.id,class:_e({active:f.value===B.id}),onClick:k=>f.value=B.id,title:B.label},[st("span",{innerHTML:B.icon},null,8,M0)],10,y0)),64))]),st("div",S0,[st("button",{onClick:R[0]||(R[0]=B=>S(-25))},[...R[4]||(R[4]=[st("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[st("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])]),st("span",b0,Yt(p.value)+"%",1),st("button",{onClick:R[1]||(R[1]=B=>S(25))},[...R[5]||(R[5]=[st("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[st("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),st("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])])])]),st("div",{class:"canvas-area",ref_key:"canvasArea",ref:c},[n.hasImage?me("",!0):(Bt(),Gt("div",{key:0,class:"upload-placeholder",onClick:h,onDragover:R[2]||(R[2]=ts(()=>{},["prevent"])),onDrop:_},[...R[6]||(R[6]=[gm('<div class="upload-box" data-v-e90c1f16><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" data-v-e90c1f16><rect x="3" y="3" width="18" height="18" rx="2" data-v-e90c1f16></rect><circle cx="8.5" cy="8.5" r="1.5" data-v-e90c1f16></circle><polyline points="21 15 16 10 5 21" data-v-e90c1f16></polyline></svg><p class="upload-text" data-v-e90c1f16>点击或拖拽图片到此处</p><p class="upload-sub" data-v-e90c1f16>支持 JPG、PNG、WebP</p></div>',1)])],32)),st("div",{class:_e(["scroll-wrap",{scrollable:f.value==="actual",hidden:!n.hasImage}])},[st("div",E0,[st("div",{class:"canvas-wrap",style:_n(m.value),ref_key:"canvasWrapRef",ref:u},[st("canvas",{ref_key:"webglCanvas",ref:s,class:"abs-fill",style:_n({display:n.isWebGL?"block":"none"})},null,4),st("canvas",{ref_key:"canvas2d",ref:o,class:"abs-fill",style:_n({display:n.isWebGL?"none":"block"})},null,4),n.compareMode&&n.hasImage?(Bt(),Gt("div",{key:0,class:_e(["compare-overlay",{"showing-original":n.showingOriginal}]),onClick:E},[st("canvas",{ref_key:"originalCanvas",ref:a,class:"abs-fill",style:_n({opacity:n.showingOriginal?1:0})},null,4),st("div",{class:_e(["cmp-badge",n.showingOriginal?"badge-orig":"badge-fx"])},Yt(n.showingOriginal?"原图":"效果"),3),R[7]||(R[7]=st("div",{class:"cmp-hint"},"点击切换",-1))],2)):me("",!0)],4)])],2)],512),st("input",{ref_key:"fileInput",ref:l,type:"file",accept:"image/*",onChange:y,style:{display:"none"}},null,544)]))}},T0=tr(w0,[["__scopeId","data-v-e90c1f16"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ol="162",A0=0,Yc=1,C0=2,qh=1,R0=2,qn=3,bi=0,Je=1,Kn=2,xi=0,Rr=1,Zc=2,Kc=3,Jc=4,P0=5,Gi=100,I0=101,L0=102,Qc=103,tu=104,D0=200,U0=201,N0=202,O0=203,sl=204,al=205,F0=206,B0=207,k0=208,z0=209,G0=210,H0=211,V0=212,W0=213,X0=214,q0=0,j0=1,$0=2,_a=3,Y0=4,Z0=5,K0=6,J0=7,jh=0,Q0=1,tv=2,yi=0,ev=1,nv=2,iv=3,rv=4,sv=5,av=6,ov=7,$h=300,Ur=301,Nr=302,ol=303,ll=304,Ba=306,cl=1e3,mn=1001,ul=1002,Ve=1003,eu=1004,qr=1005,Ze=1006,lo=1007,Wi=1008,Mi=1009,lv=1010,cv=1011,Fl=1012,Yh=1013,vi=1014,Jn=1015,vs=1016,Zh=1017,Kh=1018,$i=1020,uv=1021,gn=1023,fv=1024,hv=1025,Yi=1026,Or=1027,dv=1028,Jh=1029,pv=1030,Qh=1031,td=1033,co=33776,uo=33777,fo=33778,ho=33779,nu=35840,iu=35841,ru=35842,su=35843,ed=36196,au=37492,ou=37496,lu=37808,cu=37809,uu=37810,fu=37811,hu=37812,du=37813,pu=37814,mu=37815,gu=37816,_u=37817,vu=37818,xu=37819,yu=37820,Mu=37821,po=36492,Su=36494,bu=36495,mv=36283,Eu=36284,wu=36285,Tu=36286,gv=3200,_v=3201,vv=0,xv=1,_i="",An="srgb",Ei="srgb-linear",Bl="display-p3",ka="display-p3-linear",va="linear",ue="srgb",xa="rec709",ya="p3",ir=7680,Au=519,yv=512,Mv=513,Sv=514,nd=515,bv=516,Ev=517,wv=518,Tv=519,Cu=35044,Ru="300 es",fl=1035,ti=2e3,Ma=2001;class Br{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mo=Math.PI/180,hl=180/Math.PI;function Ss(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]).toLowerCase()}function Ke(n,t,e){return Math.max(t,Math.min(e,n))}function Av(n,t){return(n%t+t)%t}function go(n,t,e){return(1-e)*n+e*t}function Pu(n){return(n&n-1)===0&&n!==0}function dl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function jr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $e(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Kt{constructor(t=0,e=0){Kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ke(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,i,r,s,o,a,l,u){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,u)}set(t,e,i,r,s,o,a,l,u){const c=this.elements;return c[0]=t,c[1]=r,c[2]=a,c[3]=e,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],p=i[2],d=i[5],v=i[8],g=r[0],m=r[3],h=r[6],y=r[1],_=r[4],S=r[7],E=r[2],I=r[5],R=r[8];return s[0]=o*g+a*y+l*E,s[3]=o*m+a*_+l*I,s[6]=o*h+a*S+l*R,s[1]=u*g+c*y+f*E,s[4]=u*m+c*_+f*I,s[7]=u*h+c*S+f*R,s[2]=p*g+d*y+v*E,s[5]=p*m+d*_+v*I,s[8]=p*h+d*S+v*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8];return e*o*c-e*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],f=c*o-a*u,p=a*l-c*s,d=u*s-o*l,v=e*f+i*p+r*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=f*g,t[1]=(r*u-c*i)*g,t[2]=(a*i-r*o)*g,t[3]=p*g,t[4]=(c*e-r*l)*g,t[5]=(r*s-a*e)*g,t[6]=d*g,t[7]=(i*l-u*e)*g,t[8]=(o*e-i*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+t,-r*u,r*l,-r*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(_o.makeScale(t,e)),this}rotate(t){return this.premultiply(_o.makeRotation(-t)),this}translate(t,e){return this.premultiply(_o.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _o=new qt;function id(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Sa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Cv(){const n=Sa("canvas");return n.style.display="block",n}const Iu={};function Rv(n){n in Iu||(Iu[n]=!0,console.warn(n))}const Lu=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Du=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ls={[Ei]:{transfer:va,primaries:xa,toReference:n=>n,fromReference:n=>n},[An]:{transfer:ue,primaries:xa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ka]:{transfer:va,primaries:ya,toReference:n=>n.applyMatrix3(Du),fromReference:n=>n.applyMatrix3(Lu)},[Bl]:{transfer:ue,primaries:ya,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Du),fromReference:n=>n.applyMatrix3(Lu).convertLinearToSRGB()}},Pv=new Set([Ei,ka]),ne={enabled:!0,_workingColorSpace:Ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Pv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Ls[t].toReference,r=Ls[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Ls[n].primaries},getTransfer:function(n){return n===_i?va:Ls[n].transfer}};function Pr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let rr;class rd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{rr===void 0&&(rr=Sa("canvas")),rr.width=t.width,rr.height=t.height;const i=rr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=rr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Sa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Pr(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Pr(e[i]/255)*255):e[i]=Pr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Iv=0;class sd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=Ss(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(xo(r[o].image)):s.push(xo(r[o]))}else s=xo(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function xo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lv=0;class je extends Br{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,i=mn,r=mn,s=Ze,o=Wi,a=gn,l=Mi,u=je.DEFAULT_ANISOTROPY,c=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=Ss(),this.name="",this.source=new sd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cl:t.x=t.x-Math.floor(t.x);break;case mn:t.x=t.x<0?0:1;break;case ul:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cl:t.y=t.y-Math.floor(t.y);break;case mn:t.y=t.y<0?0:1;break;case ul:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=$h;je.DEFAULT_ANISOTROPY=1;class Le{constructor(t=0,e=0,i=0,r=1){Le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,u=l[0],c=l[4],f=l[8],p=l[1],d=l[5],v=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(c-p)<.01&&Math.abs(f-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(c+p)<.1&&Math.abs(f+g)<.1&&Math.abs(v+m)<.1&&Math.abs(u+d+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(u+1)/2,S=(d+1)/2,E=(h+1)/2,I=(c+p)/4,R=(f+g)/4,B=(v+m)/4;return _>S&&_>E?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=I/i,s=R/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=I/r,s=B/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=R/s,r=B/s),this.set(i,r,s,e),this}let y=Math.sqrt((m-v)*(m-v)+(f-g)*(f-g)+(p-c)*(p-c));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(f-g)/y,this.z=(p-c)/y,this.w=Math.acos((u+d+h-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dv extends Br{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new je(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new sd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends Dv{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ad extends je{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uv extends je{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bs{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const p=s[o+0],d=s[o+1],v=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f;return}if(a===1){t[e+0]=p,t[e+1]=d,t[e+2]=v,t[e+3]=g;return}if(f!==g||l!==p||u!==d||c!==v){let m=1-a;const h=l*p+u*d+c*v+f*g,y=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const E=Math.sqrt(_),I=Math.atan2(E,h*y);m=Math.sin(m*I)/E,a=Math.sin(a*I)/E}const S=a*y;if(l=l*m+p*S,u=u*m+d*S,c=c*m+v*S,f=f*m+g*S,m===1-a){const E=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=E,u*=E,c*=E,f*=E}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],p=s[o+1],d=s[o+2],v=s[o+3];return t[e]=a*v+c*f+l*d-u*p,t[e+1]=l*v+c*p+u*f-a*d,t[e+2]=u*v+c*d+a*p-l*f,t[e+3]=c*v-a*f-l*p-u*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),p=l(i/2),d=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=p*c*f+u*d*v,this._y=u*d*f-p*c*v,this._z=u*c*v+p*d*f,this._w=u*c*f-p*d*v;break;case"YXZ":this._x=p*c*f+u*d*v,this._y=u*d*f-p*c*v,this._z=u*c*v-p*d*f,this._w=u*c*f+p*d*v;break;case"ZXY":this._x=p*c*f-u*d*v,this._y=u*d*f+p*c*v,this._z=u*c*v+p*d*f,this._w=u*c*f-p*d*v;break;case"ZYX":this._x=p*c*f-u*d*v,this._y=u*d*f+p*c*v,this._z=u*c*v-p*d*f,this._w=u*c*f+p*d*v;break;case"YZX":this._x=p*c*f+u*d*v,this._y=u*d*f+p*c*v,this._z=u*c*v-p*d*f,this._w=u*c*f-p*d*v;break;case"XZY":this._x=p*c*f-u*d*v,this._y=u*d*f-p*c*v,this._z=u*c*v+p*d*f,this._w=u*c*f+p*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],u=e[2],c=e[6],f=e[10],p=i+a+f;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(c-l)*d,this._y=(s-u)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(c-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+u)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-u)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+c)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+u)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ke(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,u=e._z,c=e._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-e)*c)/u,p=Math.sin(e*c)/u;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class pt{constructor(t=0,e=0,i=0){pt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*r-a*i),c=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return yo.copy(this).projectOnVector(t),this.sub(yo)}reflect(t){return this.sub(yo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ke(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yo=new pt,Uu=new bs;class Es{constructor(t=new pt(1/0,1/0,1/0),e=new pt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,fn):fn.fromBufferAttribute(s,o),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ds.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ds.copy(i.boundingBox)),Ds.applyMatrix4(t.matrixWorld),this.union(Ds)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($r),Us.subVectors(this.max,$r),sr.subVectors(t.a,$r),ar.subVectors(t.b,$r),or.subVectors(t.c,$r),ci.subVectors(ar,sr),ui.subVectors(or,ar),Ii.subVectors(sr,or);let e=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-Ii.z,Ii.y,ci.z,0,-ci.x,ui.z,0,-ui.x,Ii.z,0,-Ii.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-Ii.y,Ii.x,0];return!Mo(e,sr,ar,or,Us)||(e=[1,0,0,0,1,0,0,0,1],!Mo(e,sr,ar,or,Us))?!1:(Ns.crossVectors(ci,ui),e=[Ns.x,Ns.y,Ns.z],Mo(e,sr,ar,or,Us))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Gn=[new pt,new pt,new pt,new pt,new pt,new pt,new pt,new pt],fn=new pt,Ds=new Es,sr=new pt,ar=new pt,or=new pt,ci=new pt,ui=new pt,Ii=new pt,$r=new pt,Us=new pt,Ns=new pt,Li=new pt;function Mo(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Li.fromArray(n,s);const a=r.x*Math.abs(Li.x)+r.y*Math.abs(Li.y)+r.z*Math.abs(Li.z),l=t.dot(Li),u=e.dot(Li),c=i.dot(Li);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Nv=new Es,Yr=new pt,So=new pt;class kl{constructor(t=new pt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Nv.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yr.subVectors(t,this.center);const e=Yr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Yr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(So.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yr.copy(t.center).add(So)),this.expandByPoint(Yr.copy(t.center).sub(So))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new pt,bo=new pt,Os=new pt,fi=new pt,Eo=new pt,Fs=new pt,wo=new pt;class Ov{constructor(t=new pt,e=new pt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){bo.copy(t).add(e).multiplyScalar(.5),Os.copy(e).sub(t).normalize(),fi.copy(this.origin).sub(bo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Os),a=fi.dot(this.direction),l=-fi.dot(Os),u=fi.lengthSq(),c=Math.abs(1-o*o);let f,p,d,v;if(c>0)if(f=o*l-a,p=o*a-l,v=s*c,f>=0)if(p>=-v)if(p<=v){const g=1/c;f*=g,p*=g,d=f*(f+o*p+2*a)+p*(o*f+p+2*l)+u}else p=s,f=Math.max(0,-(o*p+a)),d=-f*f+p*(p+2*l)+u;else p=-s,f=Math.max(0,-(o*p+a)),d=-f*f+p*(p+2*l)+u;else p<=-v?(f=Math.max(0,-(-o*s+a)),p=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+p*(p+2*l)+u):p<=v?(f=0,p=Math.min(Math.max(-s,-l),s),d=p*(p+2*l)+u):(f=Math.max(0,-(o*s+a)),p=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+p*(p+2*l)+u);else p=o>0?-s:s,f=Math.max(0,-(o*p+a)),d=-f*f+p*(p+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(bo).addScaledVector(Os,p),d}intersectSphere(t,e){Hn.subVectors(t.center,this.origin);const i=Hn.dot(this.direction),r=Hn.dot(Hn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,p=this.origin;return u>=0?(i=(t.min.x-p.x)*u,r=(t.max.x-p.x)*u):(i=(t.max.x-p.x)*u,r=(t.min.x-p.x)*u),c>=0?(s=(t.min.y-p.y)*c,o=(t.max.y-p.y)*c):(s=(t.max.y-p.y)*c,o=(t.min.y-p.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-p.z)*f,l=(t.max.z-p.z)*f):(a=(t.max.z-p.z)*f,l=(t.min.z-p.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,i,r,s){Eo.subVectors(e,t),Fs.subVectors(i,t),wo.crossVectors(Eo,Fs);let o=this.direction.dot(wo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fi.subVectors(this.origin,t);const l=a*this.direction.dot(Fs.crossVectors(fi,Fs));if(l<0)return null;const u=a*this.direction.dot(Eo.cross(fi));if(u<0||l+u>o)return null;const c=-a*fi.dot(wo);return c<0?null:this.at(c/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class be{constructor(t,e,i,r,s,o,a,l,u,c,f,p,d,v,g,m){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,u,c,f,p,d,v,g,m)}set(t,e,i,r,s,o,a,l,u,c,f,p,d,v,g,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=p,h[3]=d,h[7]=v,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/lr.setFromMatrixColumn(t,0).length(),s=1/lr.setFromMatrixColumn(t,1).length(),o=1/lr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const p=o*c,d=o*f,v=a*c,g=a*f;e[0]=l*c,e[4]=-l*f,e[8]=u,e[1]=d+v*u,e[5]=p-g*u,e[9]=-a*l,e[2]=g-p*u,e[6]=v+d*u,e[10]=o*l}else if(t.order==="YXZ"){const p=l*c,d=l*f,v=u*c,g=u*f;e[0]=p+g*a,e[4]=v*a-d,e[8]=o*u,e[1]=o*f,e[5]=o*c,e[9]=-a,e[2]=d*a-v,e[6]=g+p*a,e[10]=o*l}else if(t.order==="ZXY"){const p=l*c,d=l*f,v=u*c,g=u*f;e[0]=p-g*a,e[4]=-o*f,e[8]=v+d*a,e[1]=d+v*a,e[5]=o*c,e[9]=g-p*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const p=o*c,d=o*f,v=a*c,g=a*f;e[0]=l*c,e[4]=v*u-d,e[8]=p*u+g,e[1]=l*f,e[5]=g*u+p,e[9]=d*u-v,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const p=o*l,d=o*u,v=a*l,g=a*u;e[0]=l*c,e[4]=g-p*f,e[8]=v*f+d,e[1]=f,e[5]=o*c,e[9]=-a*c,e[2]=-u*c,e[6]=d*f+v,e[10]=p-g*f}else if(t.order==="XZY"){const p=o*l,d=o*u,v=a*l,g=a*u;e[0]=l*c,e[4]=-f,e[8]=u*c,e[1]=p*f+g,e[5]=o*c,e[9]=d*f-v,e[2]=v*f-d,e[6]=a*c,e[10]=g*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fv,t,Bv)}lookAt(t,e,i){const r=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),hi.crossVectors(i,tn),hi.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),hi.crossVectors(i,tn)),hi.normalize(),Bs.crossVectors(tn,hi),r[0]=hi.x,r[4]=Bs.x,r[8]=tn.x,r[1]=hi.y,r[5]=Bs.y,r[9]=tn.y,r[2]=hi.z,r[6]=Bs.z,r[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],p=i[9],d=i[13],v=i[2],g=i[6],m=i[10],h=i[14],y=i[3],_=i[7],S=i[11],E=i[15],I=r[0],R=r[4],B=r[8],k=r[12],T=r[1],U=r[5],A=r[9],N=r[13],M=r[2],X=r[6],tt=r[10],q=r[14],nt=r[3],J=r[7],lt=r[11],$=r[15];return s[0]=o*I+a*T+l*M+u*nt,s[4]=o*R+a*U+l*X+u*J,s[8]=o*B+a*A+l*tt+u*lt,s[12]=o*k+a*N+l*q+u*$,s[1]=c*I+f*T+p*M+d*nt,s[5]=c*R+f*U+p*X+d*J,s[9]=c*B+f*A+p*tt+d*lt,s[13]=c*k+f*N+p*q+d*$,s[2]=v*I+g*T+m*M+h*nt,s[6]=v*R+g*U+m*X+h*J,s[10]=v*B+g*A+m*tt+h*lt,s[14]=v*k+g*N+m*q+h*$,s[3]=y*I+_*T+S*M+E*nt,s[7]=y*R+_*U+S*X+E*J,s[11]=y*B+_*A+S*tt+E*lt,s[15]=y*k+_*N+S*q+E*$,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],u=t[13],c=t[2],f=t[6],p=t[10],d=t[14],v=t[3],g=t[7],m=t[11],h=t[15];return v*(+s*l*f-r*u*f-s*a*p+i*u*p+r*a*d-i*l*d)+g*(+e*l*d-e*u*p+s*o*p-r*o*d+r*u*c-s*l*c)+m*(+e*u*f-e*a*d-s*o*f+i*o*d+s*a*c-i*u*c)+h*(-r*a*c-e*l*f+e*a*p+r*o*f-i*o*p+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],f=t[9],p=t[10],d=t[11],v=t[12],g=t[13],m=t[14],h=t[15],y=f*m*u-g*p*u+g*l*d-a*m*d-f*l*h+a*p*h,_=v*p*u-c*m*u-v*l*d+o*m*d+c*l*h-o*p*h,S=c*g*u-v*f*u+v*a*d-o*g*d-c*a*h+o*f*h,E=v*f*l-c*g*l-v*a*p+o*g*p+c*a*m-o*f*m,I=e*y+i*_+r*S+s*E;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return t[0]=y*R,t[1]=(g*p*s-f*m*s-g*r*d+i*m*d+f*r*h-i*p*h)*R,t[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*h+i*l*h)*R,t[3]=(f*l*s-a*p*s-f*r*u+i*p*u+a*r*d-i*l*d)*R,t[4]=_*R,t[5]=(c*m*s-v*p*s+v*r*d-e*m*d-c*r*h+e*p*h)*R,t[6]=(v*l*s-o*m*s-v*r*u+e*m*u+o*r*h-e*l*h)*R,t[7]=(o*p*s-c*l*s+c*r*u-e*p*u-o*r*d+e*l*d)*R,t[8]=S*R,t[9]=(v*f*s-c*g*s-v*i*d+e*g*d+c*i*h-e*f*h)*R,t[10]=(o*g*s-v*a*s+v*i*u-e*g*u-o*i*h+e*a*h)*R,t[11]=(c*a*s-o*f*s-c*i*u+e*f*u+o*i*d-e*a*d)*R,t[12]=E*R,t[13]=(c*g*r-v*f*r+v*i*p-e*g*p-c*i*m+e*f*m)*R,t[14]=(v*a*r-o*g*r-v*i*l+e*g*l+o*i*m-e*a*m)*R,t[15]=(o*f*r-c*a*r+c*i*l-e*f*l-o*i*p+e*a*p)*R,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,u=s+s,c=o+o,f=a+a,p=s*u,d=s*c,v=s*f,g=o*c,m=o*f,h=a*f,y=l*u,_=l*c,S=l*f,E=i.x,I=i.y,R=i.z;return r[0]=(1-(g+h))*E,r[1]=(d+S)*E,r[2]=(v-_)*E,r[3]=0,r[4]=(d-S)*I,r[5]=(1-(p+h))*I,r[6]=(m+y)*I,r[7]=0,r[8]=(v+_)*R,r[9]=(m-y)*R,r[10]=(1-(p+g))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=lr.set(r[0],r[1],r[2]).length();const o=lr.set(r[4],r[5],r[6]).length(),a=lr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],hn.copy(this);const u=1/s,c=1/o,f=1/a;return hn.elements[0]*=u,hn.elements[1]*=u,hn.elements[2]*=u,hn.elements[4]*=c,hn.elements[5]*=c,hn.elements[6]*=c,hn.elements[8]*=f,hn.elements[9]*=f,hn.elements[10]*=f,e.setFromRotationMatrix(hn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=ti){const l=this.elements,u=2*s/(e-t),c=2*s/(i-r),f=(e+t)/(e-t),p=(i+r)/(i-r);let d,v;if(a===ti)d=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Ma)d=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=ti){const l=this.elements,u=1/(e-t),c=1/(i-r),f=1/(o-s),p=(e+t)*u,d=(i+r)*c;let v,g;if(a===ti)v=(o+s)*f,g=-2*f;else if(a===Ma)v=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const lr=new pt,hn=new be,Fv=new pt(0,0,0),Bv=new pt(1,1,1),hi=new pt,Bs=new pt,tn=new pt,Nu=new be,Ou=new bs;class ri{constructor(t=0,e=0,i=0,r=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],p=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Nu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ou.setFromEuler(this),this.setFromQuaternion(Ou,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";class od{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kv=0;const Fu=new pt,cr=new bs,Vn=new be,ks=new pt,Zr=new pt,zv=new pt,Gv=new bs,Bu=new pt(1,0,0),ku=new pt(0,1,0),zu=new pt(0,0,1),Hv={type:"added"},Vv={type:"removed"},To={type:"childadded",child:null},Ao={type:"childremoved",child:null};class sn extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const t=new pt,e=new ri,i=new bs,r=new pt(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new be},normalMatrix:{value:new qt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new od,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cr.setFromAxisAngle(t,e),this.quaternion.multiply(cr),this}rotateOnWorldAxis(t,e){return cr.setFromAxisAngle(t,e),this.quaternion.premultiply(cr),this}rotateX(t){return this.rotateOnAxis(Bu,t)}rotateY(t){return this.rotateOnAxis(ku,t)}rotateZ(t){return this.rotateOnAxis(zu,t)}translateOnAxis(t,e){return Fu.copy(t).applyQuaternion(this.quaternion),this.position.add(Fu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bu,t)}translateY(t){return this.translateOnAxis(ku,t)}translateZ(t){return this.translateOnAxis(zu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ks.copy(t):ks.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Zr,ks,this.up):Vn.lookAt(ks,Zr,this.up),this.quaternion.setFromRotationMatrix(Vn),r&&(Vn.extractRotation(r.matrixWorld),cr.setFromRotationMatrix(Vn),this.quaternion.premultiply(cr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Hv),To.child=t,this.dispatchEvent(To),To.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vv),Ao.child=t,this.dispatchEvent(Ao),Ao.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,t,zv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,Gv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),c=o(t.images),f=o(t.shapes),p=o(t.skeletons),d=o(t.animations),v=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}sn.DEFAULT_UP=new pt(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new pt,Wn=new pt,Co=new pt,Xn=new pt,ur=new pt,fr=new pt,Gu=new pt,Ro=new pt,Po=new pt,Io=new pt;class Ln{constructor(t=new pt,e=new pt,i=new pt){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),dn.subVectors(t,e),r.cross(dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){dn.subVectors(r,e),Wn.subVectors(i,e),Co.subVectors(t,e);const o=dn.dot(dn),a=dn.dot(Wn),l=dn.dot(Co),u=Wn.dot(Wn),c=Wn.dot(Co),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const p=1/f,d=(u*l-a*c)*p,v=(o*c-a*l)*p;return s.set(1-d-v,v,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(a,Xn.z),l)}static isFrontFacing(t,e,i,r){return dn.subVectors(i,e),Wn.subVectors(t,e),dn.cross(Wn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),dn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Ln.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;ur.subVectors(r,i),fr.subVectors(s,i),Ro.subVectors(t,i);const l=ur.dot(Ro),u=fr.dot(Ro);if(l<=0&&u<=0)return e.copy(i);Po.subVectors(t,r);const c=ur.dot(Po),f=fr.dot(Po);if(c>=0&&f<=c)return e.copy(r);const p=l*f-c*u;if(p<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(i).addScaledVector(ur,o);Io.subVectors(t,s);const d=ur.dot(Io),v=fr.dot(Io);if(v>=0&&d<=v)return e.copy(s);const g=d*u-l*v;if(g<=0&&u>=0&&v<=0)return a=u/(u-v),e.copy(i).addScaledVector(fr,a);const m=c*v-d*f;if(m<=0&&f-c>=0&&d-v>=0)return Gu.subVectors(s,r),a=(f-c)/(f-c+(d-v)),e.copy(r).addScaledVector(Gu,a);const h=1/(m+g+p);return o=g*h,a=p*h,e.copy(i).addScaledVector(ur,o).addScaledVector(fr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},zs={h:0,s:0,l:0};function Lo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class re{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=An){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=ne.workingColorSpace){if(t=Av(t,1),e=Ke(e,0,1),i=Ke(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Lo(o,s,t+1/3),this.g=Lo(o,s,t),this.b=Lo(o,s,t-1/3)}return ne.toWorkingColorSpace(this,r),this}setStyle(t,e=An){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=An){const i=ld[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pr(t.r),this.g=Pr(t.g),this.b=Pr(t.b),this}copyLinearToSRGB(t){return this.r=vo(t.r),this.g=vo(t.g),this.b=vo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=An){return ne.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Ke(Ne.r*255,0,255))*65536+Math.round(Ke(Ne.g*255,0,255))*256+Math.round(Ke(Ne.b*255,0,255))}getHexString(t=An){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Ne.copy(this),e);const i=Ne.r,r=Ne.g,s=Ne.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=An){ne.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,i=Ne.g,r=Ne.b;return t!==An?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(zs);const i=go(di.h,zs.h,e),r=go(di.s,zs.s,e),s=go(di.l,zs.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new re;re.NAMES=ld;let Wv=0;class za extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=Ss(),this.name="",this.type="Material",this.blending=Rr,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=al,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=_a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(i.blending=this.blending),this.side!==bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sl&&(i.blendSrc=this.blendSrc),this.blendDst!==al&&(i.blendDst=this.blendDst),this.blendEquation!==Gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_a&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Au&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class cd extends za{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new pt,Gs=new Kt;class Nn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Cu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Rv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Gs.fromBufferAttribute(this,e),Gs.applyMatrix3(t),this.setXY(e,Gs.x,Gs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=jr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=$e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jr(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jr(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jr(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),r=$e(r,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cu&&(t.usage=this.usage),t}}class ud extends Nn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class fd extends Nn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Zi extends Nn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Xv=0;const cn=new be,Do=new sn,hr=new pt,en=new Es,Kr=new Es,Ce=new pt;class er extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(id(t)?fd:ud)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,i){return cn.makeTranslation(t,e,i),this.applyMatrix4(cn),this}scale(t,e,i){return cn.makeScale(t,e,i),this.applyMatrix4(cn),this}lookAt(t){return Do.lookAt(t),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Zi(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new pt(-1/0,-1/0,-1/0),new pt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new pt,1/0);return}if(t){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Kr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(en.min,Kr.min),en.expandByPoint(Ce),Ce.addVectors(en.max,Kr.max),en.expandByPoint(Ce)):(en.expandByPoint(Kr.min),en.expandByPoint(Kr.max))}en.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Ce.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ce));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ce.fromBufferAttribute(a,u),l&&(hr.fromBufferAttribute(t,u),Ce.add(hr)),r=Math.max(r,i.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<i.count;B++)a[B]=new pt,l[B]=new pt;const u=new pt,c=new pt,f=new pt,p=new Kt,d=new Kt,v=new Kt,g=new pt,m=new pt;function h(B,k,T){u.fromBufferAttribute(i,B),c.fromBufferAttribute(i,k),f.fromBufferAttribute(i,T),p.fromBufferAttribute(s,B),d.fromBufferAttribute(s,k),v.fromBufferAttribute(s,T),c.sub(u),f.sub(u),d.sub(p),v.sub(p);const U=1/(d.x*v.y-v.x*d.y);isFinite(U)&&(g.copy(c).multiplyScalar(v.y).addScaledVector(f,-d.y).multiplyScalar(U),m.copy(f).multiplyScalar(d.x).addScaledVector(c,-v.x).multiplyScalar(U),a[B].add(g),a[k].add(g),a[T].add(g),l[B].add(m),l[k].add(m),l[T].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let B=0,k=y.length;B<k;++B){const T=y[B],U=T.start,A=T.count;for(let N=U,M=U+A;N<M;N+=3)h(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const _=new pt,S=new pt,E=new pt,I=new pt;function R(B){E.fromBufferAttribute(r,B),I.copy(E);const k=a[B];_.copy(k),_.sub(E.multiplyScalar(E.dot(k))).normalize(),S.crossVectors(I,k);const U=S.dot(l[B])<0?-1:1;o.setXYZW(B,_.x,_.y,_.z,U)}for(let B=0,k=y.length;B<k;++B){const T=y[B],U=T.start,A=T.count;for(let N=U,M=U+A;N<M;N+=3)R(t.getX(N+0)),R(t.getX(N+1)),R(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,d=i.count;p<d;p++)i.setXYZ(p,0,0,0);const r=new pt,s=new pt,o=new pt,a=new pt,l=new pt,u=new pt,c=new pt,f=new pt;if(t)for(let p=0,d=t.count;p<d;p+=3){const v=t.getX(p+0),g=t.getX(p+1),m=t.getX(p+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let p=0,d=e.count;p<d;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(p+0,c.x,c.y,c.z),i.setXYZ(p+1,c.x,c.y,c.z),i.setXYZ(p+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,l){const u=a.array,c=a.itemSize,f=a.normalized,p=new u.constructor(l.length*c);let d=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*c;for(let h=0;h<c;h++)p[v++]=u[d++]}return new Nn(p,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new er,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=t(l,i);e.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const p=u[c],d=t(p,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,p=u.length;f<p;f++){const d=u[f];c.push(d.toJSON(t.data))}c.length>0&&(r[l]=c,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(e))}const s=t.morphAttributes;for(const u in s){const c=[],f=s[u];for(let p=0,d=f.length;p<d;p++)c.push(f[p].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hu=new be,Di=new Ov,Hs=new kl,Vu=new pt,dr=new pt,pr=new pt,mr=new pt,Uo=new pt,Vs=new pt,Ws=new Kt,Xs=new Kt,qs=new Kt,Wu=new pt,Xu=new pt,qu=new pt,js=new pt,$s=new pt;class Dn extends sn{constructor(t=new er,e=new cd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Vs.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Uo.fromBufferAttribute(f,t),o?Vs.addScaledVector(Uo,c):Vs.addScaledVector(Uo.sub(e),c))}e.add(Vs)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hs.copy(i.boundingSphere),Hs.applyMatrix4(s),Di.copy(t.ray).recast(t.near),!(Hs.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Hs,Vu)===null||Di.origin.distanceToSquared(Vu)>(t.far-t.near)**2))&&(Hu.copy(s).invert(),Di.copy(t.ray).applyMatrix4(Hu),!(i.boundingBox!==null&&Di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,p=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=p.length;v<g;v++){const m=p[v],h=o[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,E=_;S<E;S+=3){const I=a.getX(S),R=a.getX(S+1),B=a.getX(S+2);r=Ys(this,h,t,i,u,c,f,I,R,B),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=v,h=g;m<h;m+=3){const y=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);r=Ys(this,o,t,i,u,c,f,y,_,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=p.length;v<g;v++){const m=p[v],h=o[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,E=_;S<E;S+=3){const I=S,R=S+1,B=S+2;r=Ys(this,h,t,i,u,c,f,I,R,B),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=v,h=g;m<h;m+=3){const y=m,_=m+1,S=m+2;r=Ys(this,o,t,i,u,c,f,y,_,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function qv(n,t,e,i,r,s,o,a){let l;if(t.side===Je?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===bi,a),l===null)return null;$s.copy(a),$s.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo($s);return u<e.near||u>e.far?null:{distance:u,point:$s.clone(),object:n}}function Ys(n,t,e,i,r,s,o,a,l,u){n.getVertexPosition(a,dr),n.getVertexPosition(l,pr),n.getVertexPosition(u,mr);const c=qv(n,t,e,i,dr,pr,mr,js);if(c){r&&(Ws.fromBufferAttribute(r,a),Xs.fromBufferAttribute(r,l),qs.fromBufferAttribute(r,u),c.uv=Ln.getInterpolation(js,dr,pr,mr,Ws,Xs,qs,new Kt)),s&&(Ws.fromBufferAttribute(s,a),Xs.fromBufferAttribute(s,l),qs.fromBufferAttribute(s,u),c.uv1=Ln.getInterpolation(js,dr,pr,mr,Ws,Xs,qs,new Kt)),o&&(Wu.fromBufferAttribute(o,a),Xu.fromBufferAttribute(o,l),qu.fromBufferAttribute(o,u),c.normal=Ln.getInterpolation(js,dr,pr,mr,Wu,Xu,qu,new pt),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new pt,materialIndex:0};Ln.getNormal(dr,pr,mr,f.normal),c.face=f}return c}class ws extends er{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let p=0,d=0;v("z","y","x",-1,-1,i,e,t,o,s,0),v("z","y","x",1,-1,i,e,-t,o,s,1),v("x","z","y",1,1,t,i,e,r,o,2),v("x","z","y",1,-1,t,i,-e,r,o,3),v("x","y","z",1,-1,t,e,i,r,s,4),v("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Zi(u,3)),this.setAttribute("normal",new Zi(c,3)),this.setAttribute("uv",new Zi(f,2));function v(g,m,h,y,_,S,E,I,R,B,k){const T=S/R,U=E/B,A=S/2,N=E/2,M=I/2,X=R+1,tt=B+1;let q=0,nt=0;const J=new pt;for(let lt=0;lt<tt;lt++){const $=lt*U-N;for(let K=0;K<X;K++){const xt=K*T-A;J[g]=xt*y,J[m]=$*_,J[h]=M,u.push(J.x,J.y,J.z),J[g]=0,J[m]=0,J[h]=I>0?1:-1,c.push(J.x,J.y,J.z),f.push(K/R),f.push(1-lt/B),q+=1}}for(let lt=0;lt<B;lt++)for(let $=0;$<R;$++){const K=p+$+X*lt,xt=p+$+X*(lt+1),et=p+($+1)+X*(lt+1),D=p+($+1)+X*lt;l.push(K,xt,D),l.push(xt,et,D),nt+=6}a.addGroup(d,nt,k),d+=nt,p+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ws(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ge(n){const t={};for(let e=0;e<n.length;e++){const i=Fr(n[e]);for(const r in i)t[r]=i[r]}return t}function jv(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function hd(n){return n.getRenderTarget()===null?n.outputColorSpace:ne.workingColorSpace}const $v={clone:Fr,merge:Ge};var Yv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends za{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yv,this.fragmentShader=Zv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fr(t.uniforms),this.uniformsGroups=jv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class dd extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new pt,ju=new Kt,$u=new Kt;class pn extends dd{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(mo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hl*2*Math.atan(Math.tan(mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,ju,$u),e.subVectors($u,ju)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(mo*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gr=-90,_r=1;class Kv extends sn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(gr,_r,t,e);r.layers=this.layers,this.add(r);const s=new pn(gr,_r,t,e);s.layers=this.layers,this.add(s);const o=new pn(gr,_r,t,e);o.layers=this.layers,this.add(o);const a=new pn(gr,_r,t,e);a.layers=this.layers,this.add(a);const l=new pn(gr,_r,t,e);l.layers=this.layers,this.add(l);const u=new pn(gr,_r,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const u of e)this.remove(u);if(t===ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,u),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,r),t.render(e,c),t.setRenderTarget(f,p,d),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class pd extends je{constructor(t,e,i,r,s,o,a,l,u,c){t=t!==void 0?t:[],e=e!==void 0?e:Ur,super(t,e,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jv extends Ji{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new pd(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ws(5,5,5),s=new si({name:"CubemapFromEquirect",uniforms:Fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Je,blending:xi});s.uniforms.tEquirect.value=e;const o=new Dn(r,s),a=e.minFilter;return e.minFilter===Wi&&(e.minFilter=Ze),new Kv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const No=new pt,Qv=new pt,tx=new qt;class Bi{constructor(t=new pt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=No.subVectors(i,e).cross(Qv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(No),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||tx.getNormalMatrix(t),r=this.coplanarPoint(No).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new kl,Zs=new pt;class md{constructor(t=new Bi,e=new Bi,i=new Bi,r=new Bi,s=new Bi,o=new Bi){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ti){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],p=r[7],d=r[8],v=r[9],g=r[10],m=r[11],h=r[12],y=r[13],_=r[14],S=r[15];if(i[0].setComponents(l-s,p-u,m-d,S-h).normalize(),i[1].setComponents(l+s,p+u,m+d,S+h).normalize(),i[2].setComponents(l+o,p+c,m+v,S+y).normalize(),i[3].setComponents(l-o,p-c,m-v,S-y).normalize(),i[4].setComponents(l-a,p-f,m-g,S-_).normalize(),e===ti)i[5].setComponents(l+a,p+f,m+g,S+_).normalize();else if(e===Ma)i[5].setComponents(a,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Zs.x=r.normal.x>0?t.max.x:t.min.x,Zs.y=r.normal.y>0?t.max.y:t.min.y,Zs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gd(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function ex(n,t){const e=t.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,p=u.usage,d=f.byteLength,v=n.createBuffer();n.bindBuffer(c,v),n.bufferData(c,f,p),u.onUploadCallback();let g;if(f instanceof Float32Array)g=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(e)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=n.SHORT;else if(f instanceof Uint32Array)g=n.UNSIGNED_INT;else if(f instanceof Int32Array)g=n.INT;else if(f instanceof Int8Array)g=n.BYTE;else if(f instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:d}}function s(u,c,f){const p=c.array,d=c._updateRange,v=c.updateRanges;if(n.bindBuffer(f,u),d.count===-1&&v.length===0&&n.bufferSubData(f,0,p),v.length!==0){for(let g=0,m=v.length;g<m;g++){const h=v[g];e?n.bufferSubData(f,h.start*p.BYTES_PER_ELEMENT,p,h.start,h.count):n.bufferSubData(f,h.start*p.BYTES_PER_ELEMENT,p.subarray(h.start,h.start+h.count))}c.clearUpdateRanges()}d.count!==-1&&(e?n.bufferSubData(f,d.offset*p.BYTES_PER_ELEMENT,p,d.offset,d.count):n.bufferSubData(f,d.offset*p.BYTES_PER_ELEMENT,p.subarray(d.offset,d.offset+d.count)),d.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const p=i.get(u);(!p||p.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:o,remove:a,update:l}}class Ts extends er{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=t/a,p=e/l,d=[],v=[],g=[],m=[];for(let h=0;h<c;h++){const y=h*p-o;for(let _=0;_<u;_++){const S=_*f-s;v.push(S,-y,0),g.push(0,0,1),m.push(_/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<a;y++){const _=y+u*h,S=y+u*(h+1),E=y+1+u*(h+1),I=y+1+u*h;d.push(_,S,I),d.push(S,E,I)}this.setIndex(d),this.setAttribute("position",new Zi(v,3)),this.setAttribute("normal",new Zi(g,3)),this.setAttribute("uv",new Zi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.width,t.height,t.widthSegments,t.heightSegments)}}var nx=`#ifdef USE_ALPHAHASH
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
#endif`,Gx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hx=`#ifdef USE_FOG
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$x=`uniform bool receiveShadow;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ty=`PhysicalMaterial material;
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
#endif`,ey=`struct PhysicalMaterial {
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
}`,ny=`
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
#endif`,iy=`#if defined( RE_IndirectDiffuse )
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
#endif`,ry=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ay=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ly=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,cy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hy=`#if defined( USE_POINTS_UV )
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
#endif`,dy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,py=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,my=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_y=`#ifdef USE_MORPHNORMALS
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
#endif`,vy=`#ifdef USE_MORPHTARGETS
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
#endif`,xy=`#ifdef USE_MORPHTARGETS
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
#endif`,yy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,My=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ey=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wy=`#ifdef USE_NORMALMAP
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
#endif`,Ty=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ay=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ry=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Py=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Iy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ly=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ny=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,By=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ky=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gy=`float getShadowMask() {
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
}`,Hy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vy=`#ifdef USE_SKINNING
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
#endif`,Wy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xy=`#ifdef USE_SKINNING
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
#endif`,qy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$y=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zy=`#ifdef USE_TRANSMISSION
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
#endif`,Ky=`#ifdef USE_TRANSMISSION
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
#endif`,Jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const n1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i1=`uniform sampler2D t2D;
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
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`#include <common>
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
}`,c1=`#if DEPTH_PACKING == 3200
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
}`,u1=`#define DISTANCE
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
}`,f1=`#define DISTANCE
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
}`,h1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p1=`uniform float scale;
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
}`,m1=`uniform vec3 diffuse;
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
}`,g1=`#include <common>
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
}`,_1=`uniform vec3 diffuse;
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
}`,v1=`#define LAMBERT
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
}`,x1=`#define LAMBERT
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
}`,y1=`#define MATCAP
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
}`,M1=`#define MATCAP
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
}`,S1=`#define NORMAL
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
}`,b1=`#define NORMAL
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
}`,E1=`#define PHONG
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
}`,w1=`#define PHONG
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
}`,T1=`#define STANDARD
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
}`,A1=`#define STANDARD
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
}`,C1=`#define TOON
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
}`,R1=`#define TOON
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
}`,P1=`uniform float size;
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
}`,I1=`uniform vec3 diffuse;
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
}`,L1=`#include <common>
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
}`,D1=`uniform vec3 color;
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
}`,U1=`uniform float rotation;
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
}`,N1=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:nx,alphahash_pars_fragment:ix,alphamap_fragment:rx,alphamap_pars_fragment:sx,alphatest_fragment:ax,alphatest_pars_fragment:ox,aomap_fragment:lx,aomap_pars_fragment:cx,batching_pars_vertex:ux,batching_vertex:fx,begin_vertex:hx,beginnormal_vertex:dx,bsdfs:px,iridescence_fragment:mx,bumpmap_pars_fragment:gx,clipping_planes_fragment:_x,clipping_planes_pars_fragment:vx,clipping_planes_pars_vertex:xx,clipping_planes_vertex:yx,color_fragment:Mx,color_pars_fragment:Sx,color_pars_vertex:bx,color_vertex:Ex,common:wx,cube_uv_reflection_fragment:Tx,defaultnormal_vertex:Ax,displacementmap_pars_vertex:Cx,displacementmap_vertex:Rx,emissivemap_fragment:Px,emissivemap_pars_fragment:Ix,colorspace_fragment:Lx,colorspace_pars_fragment:Dx,envmap_fragment:Ux,envmap_common_pars_fragment:Nx,envmap_pars_fragment:Ox,envmap_pars_vertex:Fx,envmap_physical_pars_fragment:Yx,envmap_vertex:Bx,fog_vertex:kx,fog_pars_vertex:zx,fog_fragment:Gx,fog_pars_fragment:Hx,gradientmap_pars_fragment:Vx,lightmap_fragment:Wx,lightmap_pars_fragment:Xx,lights_lambert_fragment:qx,lights_lambert_pars_fragment:jx,lights_pars_begin:$x,lights_toon_fragment:Zx,lights_toon_pars_fragment:Kx,lights_phong_fragment:Jx,lights_phong_pars_fragment:Qx,lights_physical_fragment:ty,lights_physical_pars_fragment:ey,lights_fragment_begin:ny,lights_fragment_maps:iy,lights_fragment_end:ry,logdepthbuf_fragment:sy,logdepthbuf_pars_fragment:ay,logdepthbuf_pars_vertex:oy,logdepthbuf_vertex:ly,map_fragment:cy,map_pars_fragment:uy,map_particle_fragment:fy,map_particle_pars_fragment:hy,metalnessmap_fragment:dy,metalnessmap_pars_fragment:py,morphinstance_vertex:my,morphcolor_vertex:gy,morphnormal_vertex:_y,morphtarget_pars_vertex:vy,morphtarget_vertex:xy,normal_fragment_begin:yy,normal_fragment_maps:My,normal_pars_fragment:Sy,normal_pars_vertex:by,normal_vertex:Ey,normalmap_pars_fragment:wy,clearcoat_normal_fragment_begin:Ty,clearcoat_normal_fragment_maps:Ay,clearcoat_pars_fragment:Cy,iridescence_pars_fragment:Ry,opaque_fragment:Py,packing:Iy,premultiplied_alpha_fragment:Ly,project_vertex:Dy,dithering_fragment:Uy,dithering_pars_fragment:Ny,roughnessmap_fragment:Oy,roughnessmap_pars_fragment:Fy,shadowmap_pars_fragment:By,shadowmap_pars_vertex:ky,shadowmap_vertex:zy,shadowmask_pars_fragment:Gy,skinbase_vertex:Hy,skinning_pars_vertex:Vy,skinning_vertex:Wy,skinnormal_vertex:Xy,specularmap_fragment:qy,specularmap_pars_fragment:jy,tonemapping_fragment:$y,tonemapping_pars_fragment:Yy,transmission_fragment:Zy,transmission_pars_fragment:Ky,uv_pars_fragment:Jy,uv_pars_vertex:Qy,uv_vertex:t1,worldpos_vertex:e1,background_vert:n1,background_frag:i1,backgroundCube_vert:r1,backgroundCube_frag:s1,cube_vert:a1,cube_frag:o1,depth_vert:l1,depth_frag:c1,distanceRGBA_vert:u1,distanceRGBA_frag:f1,equirect_vert:h1,equirect_frag:d1,linedashed_vert:p1,linedashed_frag:m1,meshbasic_vert:g1,meshbasic_frag:_1,meshlambert_vert:v1,meshlambert_frag:x1,meshmatcap_vert:y1,meshmatcap_frag:M1,meshnormal_vert:S1,meshnormal_frag:b1,meshphong_vert:E1,meshphong_frag:w1,meshphysical_vert:T1,meshphysical_frag:A1,meshtoon_vert:C1,meshtoon_frag:R1,points_vert:P1,points_frag:I1,shadow_vert:L1,shadow_frag:D1,sprite_vert:U1,sprite_frag:N1},wt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Pn={basic:{uniforms:Ge([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Ge([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new re(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Ge([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Ge([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Ge([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new re(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Ge([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Ge([wt.points,wt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Ge([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Ge([wt.common,wt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Ge([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Ge([wt.sprite,wt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Ge([wt.common,wt.displacementmap,{referencePosition:{value:new pt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Ge([wt.lights,wt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Pn.physical={uniforms:Ge([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const Ks={r:0,b:0,g:0},Ni=new ri,O1=new be;function F1(n,t,e,i,r,s,o){const a=new re(0);let l=s===!0?0:1,u,c,f=null,p=0,d=null;function v(m,h){let y=!1,_=h.isScene===!0?h.background:null;_&&_.isTexture&&(_=(h.backgroundBlurriness>0?e:t).get(_)),_===null?g(a,l):_&&_.isColor&&(g(_,1),y=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ba)?(c===void 0&&(c=new Dn(new ws(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:Fr(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,I,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Ni.copy(h.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(O1.makeRotationFromEuler(Ni)),c.material.toneMapped=ne.getTransfer(_.colorSpace)!==ue,(f!==_||p!==_.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=_,p=_.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new Dn(new Ts(2,2),new si({name:"BackgroundMaterial",uniforms:Fr(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=ne.getTransfer(_.colorSpace)!==ue,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||p!==_.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=_,p=_.version,d=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function g(m,h){m.getRGB(Ks,hd(n)),i.buffers.color.setClear(Ks.r,Ks.g,Ks.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:v}}function B1(n,t,e,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function f(M,X,tt,q,nt){let J=!1;if(o){const lt=g(q,tt,X);u!==lt&&(u=lt,d(u.object)),J=h(M,q,tt,nt),J&&y(M,q,tt,nt)}else{const lt=X.wireframe===!0;(u.geometry!==q.id||u.program!==tt.id||u.wireframe!==lt)&&(u.geometry=q.id,u.program=tt.id,u.wireframe=lt,J=!0)}nt!==null&&e.update(nt,n.ELEMENT_ARRAY_BUFFER),(J||c)&&(c=!1,B(M,X,tt,q),nt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(nt).buffer))}function p(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function d(M){return i.isWebGL2?n.bindVertexArray(M):s.bindVertexArrayOES(M)}function v(M){return i.isWebGL2?n.deleteVertexArray(M):s.deleteVertexArrayOES(M)}function g(M,X,tt){const q=tt.wireframe===!0;let nt=a[M.id];nt===void 0&&(nt={},a[M.id]=nt);let J=nt[X.id];J===void 0&&(J={},nt[X.id]=J);let lt=J[q];return lt===void 0&&(lt=m(p()),J[q]=lt),lt}function m(M){const X=[],tt=[],q=[];for(let nt=0;nt<r;nt++)X[nt]=0,tt[nt]=0,q[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:tt,attributeDivisors:q,object:M,attributes:{},index:null}}function h(M,X,tt,q){const nt=u.attributes,J=X.attributes;let lt=0;const $=tt.getAttributes();for(const K in $)if($[K].location>=0){const et=nt[K];let D=J[K];if(D===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(D=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(D=M.instanceColor)),et===void 0||et.attribute!==D||D&&et.data!==D.data)return!0;lt++}return u.attributesNum!==lt||u.index!==q}function y(M,X,tt,q){const nt={},J=X.attributes;let lt=0;const $=tt.getAttributes();for(const K in $)if($[K].location>=0){let et=J[K];et===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(et=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(et=M.instanceColor));const D={};D.attribute=et,et&&et.data&&(D.data=et.data),nt[K]=D,lt++}u.attributes=nt,u.attributesNum=lt,u.index=q}function _(){const M=u.newAttributes;for(let X=0,tt=M.length;X<tt;X++)M[X]=0}function S(M){E(M,0)}function E(M,X){const tt=u.newAttributes,q=u.enabledAttributes,nt=u.attributeDivisors;tt[M]=1,q[M]===0&&(n.enableVertexAttribArray(M),q[M]=1),nt[M]!==X&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](M,X),nt[M]=X)}function I(){const M=u.newAttributes,X=u.enabledAttributes;for(let tt=0,q=X.length;tt<q;tt++)X[tt]!==M[tt]&&(n.disableVertexAttribArray(tt),X[tt]=0)}function R(M,X,tt,q,nt,J,lt){lt===!0?n.vertexAttribIPointer(M,X,tt,nt,J):n.vertexAttribPointer(M,X,tt,q,nt,J)}function B(M,X,tt,q){if(i.isWebGL2===!1&&(M.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const nt=q.attributes,J=tt.getAttributes(),lt=X.defaultAttributeValues;for(const $ in J){const K=J[$];if(K.location>=0){let xt=nt[$];if(xt===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor)),xt!==void 0){const et=xt.normalized,D=xt.itemSize,Y=e.get(xt);if(Y===void 0)continue;const W=Y.buffer,rt=Y.type,it=Y.bytesPerElement,mt=i.isWebGL2===!0&&(rt===n.INT||rt===n.UNSIGNED_INT||xt.gpuType===Yh);if(xt.isInterleavedBufferAttribute){const ht=xt.data,w=ht.stride,V=xt.offset;if(ht.isInstancedInterleavedBuffer){for(let x=0;x<K.locationSize;x++)E(K.location+x,ht.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let x=0;x<K.locationSize;x++)S(K.location+x);n.bindBuffer(n.ARRAY_BUFFER,W);for(let x=0;x<K.locationSize;x++)R(K.location+x,D/K.locationSize,rt,et,w*it,(V+D/K.locationSize*x)*it,mt)}else{if(xt.isInstancedBufferAttribute){for(let ht=0;ht<K.locationSize;ht++)E(K.location+ht,xt.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let ht=0;ht<K.locationSize;ht++)S(K.location+ht);n.bindBuffer(n.ARRAY_BUFFER,W);for(let ht=0;ht<K.locationSize;ht++)R(K.location+ht,D/K.locationSize,rt,et,D*it,D/K.locationSize*ht*it,mt)}}else if(lt!==void 0){const et=lt[$];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(K.location,et);break;case 3:n.vertexAttrib3fv(K.location,et);break;case 4:n.vertexAttrib4fv(K.location,et);break;default:n.vertexAttrib1fv(K.location,et)}}}}I()}function k(){A();for(const M in a){const X=a[M];for(const tt in X){const q=X[tt];for(const nt in q)v(q[nt].object),delete q[nt];delete X[tt]}delete a[M]}}function T(M){if(a[M.id]===void 0)return;const X=a[M.id];for(const tt in X){const q=X[tt];for(const nt in q)v(q[nt].object),delete q[nt];delete X[tt]}delete a[M.id]}function U(M){for(const X in a){const tt=a[X];if(tt[M.id]===void 0)continue;const q=tt[M.id];for(const nt in q)v(q[nt].object),delete q[nt];delete tt[M.id]}}function A(){N(),c=!0,u!==l&&(u=l,d(u.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:A,resetDefaultState:N,dispose:k,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:S,disableUnusedAttributes:I}}function k1(n,t,e,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,f){n.drawArrays(s,c,f),e.update(f,s,1)}function l(c,f,p){if(p===0)return;let d,v;if(r)d=n,v="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[v](s,c,f,p),e.update(f,s,p)}function u(c,f,p){if(p===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<p;v++)this.render(c[v],f[v]);else{d.multiDrawArraysWEBGL(s,c,0,f,0,p);let v=0;for(let g=0;g<p;g++)v+=f[g];e.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function z1(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||t.has("WEBGL_draw_buffers"),c=e.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,S=o||t.has("OES_texture_float"),E=_&&S,I=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:p,maxTextureSize:d,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:E,maxSamples:I}}function G1(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Bi,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const d=f.length!==0||p||i!==0||r;return r=p,i=f.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){e=c(f,p,0)},this.setState=function(f,p,d){const v=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||v===null||v.length===0||s&&!m)s?c(null):u();else{const y=s?0:i,_=y*4;let S=h.clippingState||null;l.value=S,S=c(v,p,_,d);for(let E=0;E!==_;++E)S[E]=e[E];h.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(f,p,d,v){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const h=d+g*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,S=d;_!==g;++_,S+=4)o.copy(f[_]).applyMatrix4(y,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function H1(n){let t=new WeakMap;function e(o,a){return a===ol?o.mapping=Ur:a===ll&&(o.mapping=Nr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ol||a===ll)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Jv(l.height);return u.fromEquirectangularTexture(n,o),t.set(o,u),o.addEventListener("dispose",r),e(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class _d extends dd{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const br=4,Yu=[.125,.215,.35,.446,.526,.582],Hi=20,Oo=new _d,Zu=new re;let Fo=null,Bo=0,ko=0;const ki=(1+Math.sqrt(5))/2,vr=1/ki,Ku=[new pt(1,1,1),new pt(-1,1,1),new pt(1,1,-1),new pt(-1,1,-1),new pt(0,ki,vr),new pt(0,ki,-vr),new pt(vr,0,ki),new pt(-vr,0,ki),new pt(ki,vr,0),new pt(-ki,vr,0)];class Ju{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Fo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fo,Bo,ko),t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ur||t.mapping===Nr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:vs,format:gn,colorSpace:Ei,depthBuffer:!1},r=Qu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qu(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=V1(s)),this._blurMaterial=W1(s,t,e)}return r}_compileMaterial(t){const e=new Dn(this._lodPlanes[0],t);this._renderer.compile(e,Oo)}_sceneToCubeUV(t,e,i,r){const a=new pn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,p=c.toneMapping;c.getClearColor(Zu),c.toneMapping=yi,c.autoClear=!1;const d=new cd({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),v=new Dn(new ws,d);let g=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,g=!0):(d.color.copy(Zu),g=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):y===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const _=this._cubeSize;Js(r,y*_,h>2?_:0,_,_),c.setRenderTarget(r),g&&c.render(v,a),c.render(t,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=p,c.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Ur||t.mapping===Nr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Dn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Js(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Oo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ku[(r-1)%Ku.length];this._blur(t,r-1,r,s,o)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Dn(this._lodPlanes[r],u),p=u.uniforms,d=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Hi-1),g=s/v,m=isFinite(s)?1+Math.floor(c*g):Hi;m>Hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);const h=[];let y=0;for(let R=0;R<Hi;++R){const B=R/g,k=Math.exp(-B*B/2);h.push(k),R===0?y+=k:R<m&&(y+=2*k)}for(let R=0;R<h.length;R++)h[R]=h[R]/y;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=h,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:_}=this;p.dTheta.value=v,p.mipInt.value=_-i;const S=this._sizeLods[r],E=3*S*(r>_-br?r-_+br:0),I=4*(this._cubeSize-S);Js(e,E,I,3*S,2*S),l.setRenderTarget(e),l.render(f,Oo)}}function V1(n){const t=[],e=[],i=[];let r=n;const s=n-br+1+Yu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-br?l=Yu[o-n+br-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,p=[c,c,f,c,f,f,c,c,f,f,c,f],d=6,v=6,g=3,m=2,h=1,y=new Float32Array(g*v*d),_=new Float32Array(m*v*d),S=new Float32Array(h*v*d);for(let I=0;I<d;I++){const R=I%3*2/3-1,B=I>2?0:-1,k=[R,B,0,R+2/3,B,0,R+2/3,B+1,0,R,B,0,R+2/3,B+1,0,R,B+1,0];y.set(k,g*v*I),_.set(p,m*v*I);const T=[I,I,I,I,I,I];S.set(T,h*v*I)}const E=new er;E.setAttribute("position",new Nn(y,g)),E.setAttribute("uv",new Nn(_,m)),E.setAttribute("faceIndex",new Nn(S,h)),t.push(E),r>br&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Qu(n,t,e){const i=new Ji(n,t,e);return i.texture.mapping=Ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Js(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function W1(n,t,e){const i=new Float32Array(Hi),r=new pt(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zl(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function tf(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function ef(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function zl(){return`

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
	`}function X1(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===ol||l===ll,c=l===Ur||l===Nr;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=t.get(a);return e===null&&(e=new Ju(n)),f=u?e.fromEquirectangular(a,f):e.fromCubemap(a,f),t.set(a,f),f.texture}else{if(t.has(a))return t.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){e===null&&(e=new Ju(n));const p=u?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function q1(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function j1(n,t,e,i){const r={},s=new WeakMap;function o(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const v in p.attributes)t.remove(p.attributes[v]);for(const v in p.morphAttributes){const g=p.morphAttributes[v];for(let m=0,h=g.length;m<h;m++)t.remove(g[m])}p.removeEventListener("dispose",o),delete r[p.id];const d=s.get(p);d&&(t.remove(d),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(f,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,e.memory.geometries++),p}function l(f){const p=f.attributes;for(const v in p)t.update(p[v],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const v in d){const g=d[v];for(let m=0,h=g.length;m<h;m++)t.update(g[m],n.ARRAY_BUFFER)}}function u(f){const p=[],d=f.index,v=f.attributes.position;let g=0;if(d!==null){const y=d.array;g=d.version;for(let _=0,S=y.length;_<S;_+=3){const E=y[_+0],I=y[_+1],R=y[_+2];p.push(E,I,I,R,R,E)}}else if(v!==void 0){const y=v.array;g=v.version;for(let _=0,S=y.length/3-1;_<S;_+=3){const E=_+0,I=_+1,R=_+2;p.push(E,I,I,R,R,E)}}else return;const m=new(id(p)?fd:ud)(p,1);m.version=g;const h=s.get(f);h&&t.remove(h),s.set(f,m)}function c(f){const p=s.get(f);if(p){const d=f.index;d!==null&&p.version<d.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function $1(n,t,e,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function c(d,v){n.drawElements(s,v,a,d*l),e.update(v,s,1)}function f(d,v,g){if(g===0)return;let m,h;if(r)m=n,h="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,v,a,d*l,g),e.update(v,s,g)}function p(d,v,g){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<g;h++)this.render(d[h]/l,v[h]);else{m.multiDrawElementsWEBGL(s,v,0,a,d,0,g);let h=0;for(let y=0;y<g;y++)h+=v[y];e.update(h,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=p}function Y1(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Z1(n,t){return n[0]-t[0]}function K1(n,t){return Math.abs(t[1])-Math.abs(n[1])}function J1(n,t,e){const i={},r=new Float32Array(8),s=new WeakMap,o=new Le,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const p=u.morphTargetInfluences;if(t.isWebGL2===!0){const v=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=v!==void 0?v.length:0;let m=s.get(c);if(m===void 0||m.count!==g){let N=function(){U.dispose(),s.delete(c),c.removeEventListener("dispose",N)};var d=N;m!==void 0&&m.texture.dispose();const h=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,_=c.morphAttributes.color!==void 0,S=c.morphAttributes.position||[],E=c.morphAttributes.normal||[],I=c.morphAttributes.color||[];let R=0;h===!0&&(R=1),y===!0&&(R=2),_===!0&&(R=3);let B=c.attributes.position.count*R,k=1;B>t.maxTextureSize&&(k=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const T=new Float32Array(B*k*4*g),U=new ad(T,B,k,g);U.type=Jn,U.needsUpdate=!0;const A=R*4;for(let M=0;M<g;M++){const X=S[M],tt=E[M],q=I[M],nt=B*k*4*M;for(let J=0;J<X.count;J++){const lt=J*A;h===!0&&(o.fromBufferAttribute(X,J),T[nt+lt+0]=o.x,T[nt+lt+1]=o.y,T[nt+lt+2]=o.z,T[nt+lt+3]=0),y===!0&&(o.fromBufferAttribute(tt,J),T[nt+lt+4]=o.x,T[nt+lt+5]=o.y,T[nt+lt+6]=o.z,T[nt+lt+7]=0),_===!0&&(o.fromBufferAttribute(q,J),T[nt+lt+8]=o.x,T[nt+lt+9]=o.y,T[nt+lt+10]=o.z,T[nt+lt+11]=q.itemSize===4?o.w:1)}}m={count:g,texture:U,size:new Kt(B,k)},s.set(c,m),c.addEventListener("dispose",N)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",u.morphTexture,e);else{let h=0;for(let _=0;_<p.length;_++)h+=p[_];const y=c.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",p)}f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,e),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const v=p===void 0?0:p.length;let g=i[c.id];if(g===void 0||g.length!==v){g=[];for(let S=0;S<v;S++)g[S]=[S,0];i[c.id]=g}for(let S=0;S<v;S++){const E=g[S];E[0]=S,E[1]=p[S]}g.sort(K1);for(let S=0;S<8;S++)S<v&&g[S][1]?(a[S][0]=g[S][0],a[S][1]=g[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Z1);const m=c.morphAttributes.position,h=c.morphAttributes.normal;let y=0;for(let S=0;S<8;S++){const E=a[S],I=E[0],R=E[1];I!==Number.MAX_SAFE_INTEGER&&R?(m&&c.getAttribute("morphTarget"+S)!==m[I]&&c.setAttribute("morphTarget"+S,m[I]),h&&c.getAttribute("morphNormal"+S)!==h[I]&&c.setAttribute("morphNormal"+S,h[I]),r[S]=R,y+=R):(m&&c.hasAttribute("morphTarget"+S)===!0&&c.deleteAttribute("morphTarget"+S),h&&c.hasAttribute("morphNormal"+S)===!0&&c.deleteAttribute("morphNormal"+S),r[S]=0)}const _=c.morphTargetsRelative?1:1-y;f.getUniforms().setValue(n,"morphTargetBaseInfluence",_),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Q1(n,t,e,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=t.get(l,c);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:o}}class vd extends je{constructor(t,e,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Yi,c!==Yi&&c!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Yi&&(i=vi),i===void 0&&c===Or&&(i=$i),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ve,this.minFilter=l!==void 0?l:Ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const xd=new je,yd=new vd(1,1);yd.compareFunction=nd;const Md=new ad,Sd=new Uv,bd=new pd,nf=[],rf=[],sf=new Float32Array(16),af=new Float32Array(9),of=new Float32Array(4);function kr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=nf[r];if(s===void 0&&(s=new Float32Array(r),nf[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function we(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Te(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ga(n,t){let e=rf[t];e===void 0&&(e=new Int32Array(t),rf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function tM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function eM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2fv(this.addr,t),Te(e,t)}}function nM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;n.uniform3fv(this.addr,t),Te(e,t)}}function iM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4fv(this.addr,t),Te(e,t)}}function rM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(we(e,i))return;of.set(i),n.uniformMatrix2fv(this.addr,!1,of),Te(e,i)}}function sM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(we(e,i))return;af.set(i),n.uniformMatrix3fv(this.addr,!1,af),Te(e,i)}}function aM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(we(e,i))return;sf.set(i),n.uniformMatrix4fv(this.addr,!1,sf),Te(e,i)}}function oM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function lM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2iv(this.addr,t),Te(e,t)}}function cM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;n.uniform3iv(this.addr,t),Te(e,t)}}function uM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4iv(this.addr,t),Te(e,t)}}function fM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function hM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2uiv(this.addr,t),Te(e,t)}}function dM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;n.uniform3uiv(this.addr,t),Te(e,t)}}function pM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4uiv(this.addr,t),Te(e,t)}}function mM(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?yd:xd;e.setTexture2D(t||s,r)}function gM(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Sd,r)}function _M(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||bd,r)}function vM(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Md,r)}function xM(n){switch(n){case 5126:return tM;case 35664:return eM;case 35665:return nM;case 35666:return iM;case 35674:return rM;case 35675:return sM;case 35676:return aM;case 5124:case 35670:return oM;case 35667:case 35671:return lM;case 35668:case 35672:return cM;case 35669:case 35673:return uM;case 5125:return fM;case 36294:return hM;case 36295:return dM;case 36296:return pM;case 35678:case 36198:case 36298:case 36306:case 35682:return mM;case 35679:case 36299:case 36307:return gM;case 35680:case 36300:case 36308:case 36293:return _M;case 36289:case 36303:case 36311:case 36292:return vM}}function yM(n,t){n.uniform1fv(this.addr,t)}function MM(n,t){const e=kr(t,this.size,2);n.uniform2fv(this.addr,e)}function SM(n,t){const e=kr(t,this.size,3);n.uniform3fv(this.addr,e)}function bM(n,t){const e=kr(t,this.size,4);n.uniform4fv(this.addr,e)}function EM(n,t){const e=kr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function wM(n,t){const e=kr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function TM(n,t){const e=kr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function AM(n,t){n.uniform1iv(this.addr,t)}function CM(n,t){n.uniform2iv(this.addr,t)}function RM(n,t){n.uniform3iv(this.addr,t)}function PM(n,t){n.uniform4iv(this.addr,t)}function IM(n,t){n.uniform1uiv(this.addr,t)}function LM(n,t){n.uniform2uiv(this.addr,t)}function DM(n,t){n.uniform3uiv(this.addr,t)}function UM(n,t){n.uniform4uiv(this.addr,t)}function NM(n,t,e){const i=this.cache,r=t.length,s=Ga(e,r);we(i,s)||(n.uniform1iv(this.addr,s),Te(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||xd,s[o])}function OM(n,t,e){const i=this.cache,r=t.length,s=Ga(e,r);we(i,s)||(n.uniform1iv(this.addr,s),Te(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Sd,s[o])}function FM(n,t,e){const i=this.cache,r=t.length,s=Ga(e,r);we(i,s)||(n.uniform1iv(this.addr,s),Te(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||bd,s[o])}function BM(n,t,e){const i=this.cache,r=t.length,s=Ga(e,r);we(i,s)||(n.uniform1iv(this.addr,s),Te(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Md,s[o])}function kM(n){switch(n){case 5126:return yM;case 35664:return MM;case 35665:return SM;case 35666:return bM;case 35674:return EM;case 35675:return wM;case 35676:return TM;case 5124:case 35670:return AM;case 35667:case 35671:return CM;case 35668:case 35672:return RM;case 35669:case 35673:return PM;case 5125:return IM;case 36294:return LM;case 36295:return DM;case 36296:return UM;case 35678:case 36198:case 36298:case 36306:case 35682:return NM;case 35679:case 36299:case 36307:return OM;case 35680:case 36300:case 36308:case 36293:return FM;case 36289:case 36303:case 36311:case 36292:return BM}}class zM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=xM(e.type)}}class GM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kM(e.type)}}class HM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const zo=/(\w+)(\])?(\[|\.)?/g;function lf(n,t){n.seq.push(t),n.map[t.id]=t}function VM(n,t,e){const i=n.name,r=i.length;for(zo.lastIndex=0;;){const s=zo.exec(i),o=zo.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){lf(e,u===void 0?new zM(a,n,t):new GM(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new HM(a),lf(e,f)),e=f}}}class oa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);VM(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function cf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const WM=37297;let XM=0;function qM(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function jM(n){const t=ne.getPrimaries(ne.workingColorSpace),e=ne.getPrimaries(n);let i;switch(t===e?i="":t===ya&&e===xa?i="LinearDisplayP3ToLinearSRGB":t===xa&&e===ya&&(i="LinearSRGBToLinearDisplayP3"),n){case Ei:case ka:return[i,"LinearTransferOETF"];case An:case Bl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function uf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+qM(n.getShaderSource(t),o)}else return r}function $M(n,t){const e=jM(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function YM(n,t){let e;switch(t){case ev:e="Linear";break;case nv:e="Reinhard";break;case iv:e="OptimizedCineon";break;case rv:e="ACESFilmic";break;case av:e="AgX";break;case ov:e="Neutral";break;case sv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function ZM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Er).join(`
`)}function KM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Er).join(`
`)}function JM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function QM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Er(n){return n!==""}function ff(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tS=/^[ \t]*#include +<([\w\d./]+)>/gm;function pl(n){return n.replace(tS,nS)}const eS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function nS(n,t){let e=Xt[t];if(e===void 0){const i=eS.get(t);if(i!==void 0)e=Xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return pl(e)}const iS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function df(n){return n.replace(iS,rS)}function rS(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function sS(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===qh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===R0?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qn&&(t="SHADOWMAP_TYPE_VSM"),t}function aS(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ur:case Nr:t="ENVMAP_TYPE_CUBE";break;case Ba:t="ENVMAP_TYPE_CUBE_UV";break}return t}function oS(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Nr:t="ENVMAP_MODE_REFRACTION";break}return t}function lS(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jh:t="ENVMAP_BLENDING_MULTIPLY";break;case Q0:t="ENVMAP_BLENDING_MIX";break;case tv:t="ENVMAP_BLENDING_ADD";break}return t}function cS(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function uS(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=sS(e),u=aS(e),c=oS(e),f=lS(e),p=cS(e),d=e.isWebGL2?"":ZM(e),v=KM(e),g=JM(s),m=r.createProgram();let h,y,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Er).join(`
`),h.length>0&&(h+=`
`),y=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Er).join(`
`),y.length>0&&(y+=`
`)):(h=[pf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),y=[d,pf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yi?"#define TONE_MAPPING":"",e.toneMapping!==yi?Xt.tonemapping_pars_fragment:"",e.toneMapping!==yi?YM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,$M("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Er).join(`
`)),o=pl(o),o=ff(o,e),o=hf(o,e),a=pl(a),a=ff(a,e),a=hf(a,e),o=df(o),a=df(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const S=_+h+o,E=_+y+a,I=cf(r,r.VERTEX_SHADER,S),R=cf(r,r.FRAGMENT_SHADER,E);r.attachShader(m,I),r.attachShader(m,R),e.index0AttributeName!==void 0?r.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function B(A){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(m).trim(),M=r.getShaderInfoLog(I).trim(),X=r.getShaderInfoLog(R).trim();let tt=!0,q=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(tt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,I,R);else{const nt=uf(r,I,"vertex"),J=uf(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+N+`
`+nt+`
`+J)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(M===""||X==="")&&(q=!1);q&&(A.diagnostics={runnable:tt,programLog:N,vertexShader:{log:M,prefix:h},fragmentShader:{log:X,prefix:y}})}r.deleteShader(I),r.deleteShader(R),k=new oa(r,m),T=QM(r,m)}let k;this.getUniforms=function(){return k===void 0&&B(this),k};let T;this.getAttributes=function(){return T===void 0&&B(this),T};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(m,WM)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=XM++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=I,this.fragmentShader=R,this}let fS=0;class hS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new dS(t),e.set(t,i)),i}}class dS{constructor(t){this.id=fS++,this.code=t,this.usedTimes=0}}function pS(n,t,e,i,r,s,o){const a=new od,l=new hS,u=new Set,c=[],f=r.isWebGL2,p=r.logarithmicDepthBuffer,d=r.vertexTextures;let v=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(T){return u.add(T),T===0?"uv":`uv${T}`}function h(T,U,A,N,M){const X=N.fog,tt=M.geometry,q=T.isMeshStandardMaterial?N.environment:null,nt=(T.isMeshStandardMaterial?e:t).get(T.envMap||q),J=nt&&nt.mapping===Ba?nt.image.height:null,lt=g[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const $=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,K=$!==void 0?$.length:0;let xt=0;tt.morphAttributes.position!==void 0&&(xt=1),tt.morphAttributes.normal!==void 0&&(xt=2),tt.morphAttributes.color!==void 0&&(xt=3);let et,D,Y,W;if(lt){const oe=Pn[lt];et=oe.vertexShader,D=oe.fragmentShader}else et=T.vertexShader,D=T.fragmentShader,l.update(T),Y=l.getVertexShaderID(T),W=l.getFragmentShaderID(T);const rt=n.getRenderTarget(),it=M.isInstancedMesh===!0,mt=M.isBatchedMesh===!0,ht=!!T.map,w=!!T.matcap,V=!!nt,x=!!T.aoMap,z=!!T.lightMap,F=!!T.bumpMap,P=!!T.normalMap,L=!!T.displacementMap,O=!!T.emissiveMap,j=!!T.metalnessMap,C=!!T.roughnessMap,b=T.anisotropy>0,H=T.clearcoat>0,Z=T.iridescence>0,Q=T.sheen>0,ot=T.transmission>0,St=b&&!!T.anisotropyMap,vt=H&&!!T.clearcoatMap,_t=H&&!!T.clearcoatNormalMap,Mt=H&&!!T.clearcoatRoughnessMap,Pt=Z&&!!T.iridescenceMap,yt=Z&&!!T.iridescenceThicknessMap,Ut=Q&&!!T.sheenColorMap,Ot=Q&&!!T.sheenRoughnessMap,Ct=!!T.specularMap,Tt=!!T.specularColorMap,It=!!T.specularIntensityMap,jt=ot&&!!T.transmissionMap,zt=ot&&!!T.thicknessMap,ae=!!T.gradientMap,at=!!T.alphaMap,Et=T.alphaTest>0,ut=!!T.alphaHash,bt=!!T.extensions;let At=yi;T.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(At=n.toneMapping);const Zt={isWebGL2:f,shaderID:lt,shaderType:T.type,shaderName:T.name,vertexShader:et,fragmentShader:D,defines:T.defines,customVertexShaderID:Y,customFragmentShaderID:W,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:mt,instancing:it,instancingColor:it&&M.instanceColor!==null,instancingMorph:it&&M.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?n.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Ei,alphaToCoverage:!!T.alphaToCoverage,map:ht,matcap:w,envMap:V,envMapMode:V&&nt.mapping,envMapCubeUVHeight:J,aoMap:x,lightMap:z,bumpMap:F,normalMap:P,displacementMap:d&&L,emissiveMap:O,normalMapObjectSpace:P&&T.normalMapType===xv,normalMapTangentSpace:P&&T.normalMapType===vv,metalnessMap:j,roughnessMap:C,anisotropy:b,anisotropyMap:St,clearcoat:H,clearcoatMap:vt,clearcoatNormalMap:_t,clearcoatRoughnessMap:Mt,iridescence:Z,iridescenceMap:Pt,iridescenceThicknessMap:yt,sheen:Q,sheenColorMap:Ut,sheenRoughnessMap:Ot,specularMap:Ct,specularColorMap:Tt,specularIntensityMap:It,transmission:ot,transmissionMap:jt,thicknessMap:zt,gradientMap:ae,opaque:T.transparent===!1&&T.blending===Rr&&T.alphaToCoverage===!1,alphaMap:at,alphaTest:Et,alphaHash:ut,combine:T.combine,mapUv:ht&&m(T.map.channel),aoMapUv:x&&m(T.aoMap.channel),lightMapUv:z&&m(T.lightMap.channel),bumpMapUv:F&&m(T.bumpMap.channel),normalMapUv:P&&m(T.normalMap.channel),displacementMapUv:L&&m(T.displacementMap.channel),emissiveMapUv:O&&m(T.emissiveMap.channel),metalnessMapUv:j&&m(T.metalnessMap.channel),roughnessMapUv:C&&m(T.roughnessMap.channel),anisotropyMapUv:St&&m(T.anisotropyMap.channel),clearcoatMapUv:vt&&m(T.clearcoatMap.channel),clearcoatNormalMapUv:_t&&m(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&m(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&m(T.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&m(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&m(T.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&m(T.sheenRoughnessMap.channel),specularMapUv:Ct&&m(T.specularMap.channel),specularColorMapUv:Tt&&m(T.specularColorMap.channel),specularIntensityMapUv:It&&m(T.specularIntensityMap.channel),transmissionMapUv:jt&&m(T.transmissionMap.channel),thicknessMapUv:zt&&m(T.thicknessMap.channel),alphaMapUv:at&&m(T.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(P||b),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:M.isPoints===!0&&!!tt.attributes.uv&&(ht||at),fog:!!X,useFog:T.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:M.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:xt,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:At,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ht&&T.map.isVideoTexture===!0&&ne.getTransfer(T.map.colorSpace)===ue,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Kn,flipSided:T.side===Je,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:bt&&T.extensions.derivatives===!0,extensionFragDepth:bt&&T.extensions.fragDepth===!0,extensionDrawBuffers:bt&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:bt&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:bt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:bt&&T.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Zt.vertexUv1s=u.has(1),Zt.vertexUv2s=u.has(2),Zt.vertexUv3s=u.has(3),u.clear(),Zt}function y(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const A in T.defines)U.push(A),U.push(T.defines[A]);return T.isRawShaderMaterial===!1&&(_(U,T),S(U,T),U.push(n.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function _(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function S(T,U){a.disableAll(),U.isWebGL2&&a.enable(0),U.supportsVertexTextures&&a.enable(1),U.instancing&&a.enable(2),U.instancingColor&&a.enable(3),U.instancingMorph&&a.enable(4),U.matcap&&a.enable(5),U.envMap&&a.enable(6),U.normalMapObjectSpace&&a.enable(7),U.normalMapTangentSpace&&a.enable(8),U.clearcoat&&a.enable(9),U.iridescence&&a.enable(10),U.alphaTest&&a.enable(11),U.vertexColors&&a.enable(12),U.vertexAlphas&&a.enable(13),U.vertexUv1s&&a.enable(14),U.vertexUv2s&&a.enable(15),U.vertexUv3s&&a.enable(16),U.vertexTangents&&a.enable(17),U.anisotropy&&a.enable(18),U.alphaHash&&a.enable(19),U.batching&&a.enable(20),T.push(a.mask),a.disableAll(),U.fog&&a.enable(0),U.useFog&&a.enable(1),U.flatShading&&a.enable(2),U.logarithmicDepthBuffer&&a.enable(3),U.skinning&&a.enable(4),U.morphTargets&&a.enable(5),U.morphNormals&&a.enable(6),U.morphColors&&a.enable(7),U.premultipliedAlpha&&a.enable(8),U.shadowMapEnabled&&a.enable(9),U.useLegacyLights&&a.enable(10),U.doubleSided&&a.enable(11),U.flipSided&&a.enable(12),U.useDepthPacking&&a.enable(13),U.dithering&&a.enable(14),U.transmission&&a.enable(15),U.sheen&&a.enable(16),U.opaque&&a.enable(17),U.pointsUvs&&a.enable(18),U.decodeVideoTexture&&a.enable(19),U.alphaToCoverage&&a.enable(20),T.push(a.mask)}function E(T){const U=g[T.type];let A;if(U){const N=Pn[U];A=$v.clone(N.uniforms)}else A=T.uniforms;return A}function I(T,U){let A;for(let N=0,M=c.length;N<M;N++){const X=c[N];if(X.cacheKey===U){A=X,++A.usedTimes;break}}return A===void 0&&(A=new uS(n,U,T,s),c.push(A)),A}function R(T){if(--T.usedTimes===0){const U=c.indexOf(T);c[U]=c[c.length-1],c.pop(),T.destroy()}}function B(T){l.remove(T)}function k(){l.dispose()}return{getParameters:h,getProgramCacheKey:y,getUniforms:E,acquireProgram:I,releaseProgram:R,releaseShaderCache:B,programs:c,dispose:k}}function mS(){let n=new WeakMap;function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function e(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function gS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function mf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function gf(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,p,d,v,g,m){let h=n[t];return h===void 0?(h={id:f.id,object:f,geometry:p,material:d,groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},n[t]=h):(h.id=f.id,h.object=f,h.geometry=p,h.material=d,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=g,h.group=m),t++,h}function a(f,p,d,v,g,m){const h=o(f,p,d,v,g,m);d.transmission>0?i.push(h):d.transparent===!0?r.push(h):e.push(h)}function l(f,p,d,v,g,m){const h=o(f,p,d,v,g,m);d.transmission>0?i.unshift(h):d.transparent===!0?r.unshift(h):e.unshift(h)}function u(f,p){e.length>1&&e.sort(f||gS),i.length>1&&i.sort(p||mf),r.length>1&&r.sort(p||mf)}function c(){for(let f=t,p=n.length;f<p;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function _S(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new gf,n.set(i,[o])):r>=s.length?(o=new gf,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function vS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new pt,color:new re};break;case"SpotLight":e={position:new pt,direction:new pt,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new pt,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new pt,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new pt,halfWidth:new pt,halfHeight:new pt};break}return n[t.id]=e,e}}}function xS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let yS=0;function MS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function SS(n,t){const e=new vS,i=xS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new pt);const s=new pt,o=new be,a=new be;function l(c,f){let p=0,d=0,v=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let g=0,m=0,h=0,y=0,_=0,S=0,E=0,I=0,R=0,B=0,k=0;c.sort(MS);const T=f===!0?Math.PI:1;for(let A=0,N=c.length;A<N;A++){const M=c[A],X=M.color,tt=M.intensity,q=M.distance,nt=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)p+=X.r*tt*T,d+=X.g*tt*T,v+=X.b*tt*T;else if(M.isLightProbe){for(let J=0;J<9;J++)r.probe[J].addScaledVector(M.sh.coefficients[J],tt);k++}else if(M.isDirectionalLight){const J=e.get(M);if(J.color.copy(M.color).multiplyScalar(M.intensity*T),M.castShadow){const lt=M.shadow,$=i.get(M);$.shadowBias=lt.bias,$.shadowNormalBias=lt.normalBias,$.shadowRadius=lt.radius,$.shadowMapSize=lt.mapSize,r.directionalShadow[g]=$,r.directionalShadowMap[g]=nt,r.directionalShadowMatrix[g]=M.shadow.matrix,S++}r.directional[g]=J,g++}else if(M.isSpotLight){const J=e.get(M);J.position.setFromMatrixPosition(M.matrixWorld),J.color.copy(X).multiplyScalar(tt*T),J.distance=q,J.coneCos=Math.cos(M.angle),J.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),J.decay=M.decay,r.spot[h]=J;const lt=M.shadow;if(M.map&&(r.spotLightMap[R]=M.map,R++,lt.updateMatrices(M),M.castShadow&&B++),r.spotLightMatrix[h]=lt.matrix,M.castShadow){const $=i.get(M);$.shadowBias=lt.bias,$.shadowNormalBias=lt.normalBias,$.shadowRadius=lt.radius,$.shadowMapSize=lt.mapSize,r.spotShadow[h]=$,r.spotShadowMap[h]=nt,I++}h++}else if(M.isRectAreaLight){const J=e.get(M);J.color.copy(X).multiplyScalar(tt),J.halfWidth.set(M.width*.5,0,0),J.halfHeight.set(0,M.height*.5,0),r.rectArea[y]=J,y++}else if(M.isPointLight){const J=e.get(M);if(J.color.copy(M.color).multiplyScalar(M.intensity*T),J.distance=M.distance,J.decay=M.decay,M.castShadow){const lt=M.shadow,$=i.get(M);$.shadowBias=lt.bias,$.shadowNormalBias=lt.normalBias,$.shadowRadius=lt.radius,$.shadowMapSize=lt.mapSize,$.shadowCameraNear=lt.camera.near,$.shadowCameraFar=lt.camera.far,r.pointShadow[m]=$,r.pointShadowMap[m]=nt,r.pointShadowMatrix[m]=M.shadow.matrix,E++}r.point[m]=J,m++}else if(M.isHemisphereLight){const J=e.get(M);J.skyColor.copy(M.color).multiplyScalar(tt*T),J.groundColor.copy(M.groundColor).multiplyScalar(tt*T),r.hemi[_]=J,_++}}y>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=wt.LTC_FLOAT_1,r.rectAreaLTC2=wt.LTC_FLOAT_2):(r.rectAreaLTC1=wt.LTC_HALF_1,r.rectAreaLTC2=wt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=wt.LTC_FLOAT_1,r.rectAreaLTC2=wt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=wt.LTC_HALF_1,r.rectAreaLTC2=wt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=d,r.ambient[2]=v;const U=r.hash;(U.directionalLength!==g||U.pointLength!==m||U.spotLength!==h||U.rectAreaLength!==y||U.hemiLength!==_||U.numDirectionalShadows!==S||U.numPointShadows!==E||U.numSpotShadows!==I||U.numSpotMaps!==R||U.numLightProbes!==k)&&(r.directional.length=g,r.spot.length=h,r.rectArea.length=y,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=I+R-B,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=k,U.directionalLength=g,U.pointLength=m,U.spotLength=h,U.rectAreaLength=y,U.hemiLength=_,U.numDirectionalShadows=S,U.numPointShadows=E,U.numSpotShadows=I,U.numSpotMaps=R,U.numLightProbes=k,r.version=yS++)}function u(c,f){let p=0,d=0,v=0,g=0,m=0;const h=f.matrixWorldInverse;for(let y=0,_=c.length;y<_;y++){const S=c[y];if(S.isDirectionalLight){const E=r.directional[p];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),p++}else if(S.isSpotLight){const E=r.spot[v];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),v++}else if(S.isRectAreaLight){const E=r.rectArea[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(h),a.identity(),o.copy(S.matrixWorld),o.premultiply(h),a.extractRotation(o),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const E=r.point[d];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(h),d++}else if(S.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(h),m++}}}return{setup:l,setupView:u,state:r}}function _f(n,t){const e=new SS(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){e.setup(i,f)}function u(f){e.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function bS(n,t){let e=new WeakMap;function i(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new _f(n,t),e.set(s,[l])):o>=a.length?(l=new _f(n,t),a.push(l)):l=a[o],l}function r(){e=new WeakMap}return{get:i,dispose:r}}class ES extends za{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wS extends za{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const TS=`void main() {
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
}`;function CS(n,t,e){let i=new md;const r=new Kt,s=new Kt,o=new Le,a=new ES({depthPacking:_v}),l=new wS,u={},c=e.maxTextureSize,f={[bi]:Je,[Je]:bi,[Kn]:Kn},p=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:TS,fragmentShader:AS}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const v=new er;v.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Dn(v,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qh;let h=this.type;this.render=function(I,R,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const k=n.getRenderTarget(),T=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),A=n.state;A.setBlending(xi),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const N=h!==qn&&this.type===qn,M=h===qn&&this.type!==qn;for(let X=0,tt=I.length;X<tt;X++){const q=I[X],nt=q.shadow;if(nt===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(nt.autoUpdate===!1&&nt.needsUpdate===!1)continue;r.copy(nt.mapSize);const J=nt.getFrameExtents();if(r.multiply(J),s.copy(nt.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/J.x),r.x=s.x*J.x,nt.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/J.y),r.y=s.y*J.y,nt.mapSize.y=s.y)),nt.map===null||N===!0||M===!0){const $=this.type!==qn?{minFilter:Ve,magFilter:Ve}:{};nt.map!==null&&nt.map.dispose(),nt.map=new Ji(r.x,r.y,$),nt.map.texture.name=q.name+".shadowMap",nt.camera.updateProjectionMatrix()}n.setRenderTarget(nt.map),n.clear();const lt=nt.getViewportCount();for(let $=0;$<lt;$++){const K=nt.getViewport($);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),A.viewport(o),nt.updateMatrices(q,$),i=nt.getFrustum(),S(R,B,nt.camera,q,this.type)}nt.isPointLightShadow!==!0&&this.type===qn&&y(nt,B),nt.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(k,T,U)};function y(I,R){const B=t.update(g);p.defines.VSM_SAMPLES!==I.blurSamples&&(p.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ji(r.x,r.y)),p.uniforms.shadow_pass.value=I.map.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(R,null,B,p,g,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(R,null,B,d,g,null)}function _(I,R,B,k){let T=null;const U=B.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(U!==void 0)T=U;else if(T=B.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const A=T.uuid,N=R.uuid;let M=u[A];M===void 0&&(M={},u[A]=M);let X=M[N];X===void 0&&(X=T.clone(),M[N]=X,R.addEventListener("dispose",E)),T=X}if(T.visible=R.visible,T.wireframe=R.wireframe,k===qn?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:f[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,B.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const A=n.properties.get(T);A.light=B}return T}function S(I,R,B,k,T){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&T===qn)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,I.matrixWorld);const N=t.update(I),M=I.material;if(Array.isArray(M)){const X=N.groups;for(let tt=0,q=X.length;tt<q;tt++){const nt=X[tt],J=M[nt.materialIndex];if(J&&J.visible){const lt=_(I,J,k,T);I.onBeforeShadow(n,I,R,B,N,lt,nt),n.renderBufferDirect(B,null,N,lt,I,nt),I.onAfterShadow(n,I,R,B,N,lt,nt)}}}else if(M.visible){const X=_(I,M,k,T);I.onBeforeShadow(n,I,R,B,N,X,null),n.renderBufferDirect(B,null,N,X,I,null),I.onAfterShadow(n,I,R,B,N,X,null)}}const A=I.children;for(let N=0,M=A.length;N<M;N++)S(A[N],R,B,k,T)}function E(I){I.target.removeEventListener("dispose",E);for(const B in u){const k=u[B],T=I.target.uuid;T in k&&(k[T].dispose(),delete k[T])}}}function RS(n,t,e){const i=e.isWebGL2;function r(){let at=!1;const Et=new Le;let ut=null;const bt=new Le(0,0,0,0);return{setMask:function(At){ut!==At&&!at&&(n.colorMask(At,At,At,At),ut=At)},setLocked:function(At){at=At},setClear:function(At,Zt,oe,Pe,an){an===!0&&(At*=Pe,Zt*=Pe,oe*=Pe),Et.set(At,Zt,oe,Pe),bt.equals(Et)===!1&&(n.clearColor(At,Zt,oe,Pe),bt.copy(Et))},reset:function(){at=!1,ut=null,bt.set(-1,0,0,0)}}}function s(){let at=!1,Et=null,ut=null,bt=null;return{setTest:function(At){At?it(n.DEPTH_TEST):mt(n.DEPTH_TEST)},setMask:function(At){Et!==At&&!at&&(n.depthMask(At),Et=At)},setFunc:function(At){if(ut!==At){switch(At){case q0:n.depthFunc(n.NEVER);break;case j0:n.depthFunc(n.ALWAYS);break;case $0:n.depthFunc(n.LESS);break;case _a:n.depthFunc(n.LEQUAL);break;case Y0:n.depthFunc(n.EQUAL);break;case Z0:n.depthFunc(n.GEQUAL);break;case K0:n.depthFunc(n.GREATER);break;case J0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ut=At}},setLocked:function(At){at=At},setClear:function(At){bt!==At&&(n.clearDepth(At),bt=At)},reset:function(){at=!1,Et=null,ut=null,bt=null}}}function o(){let at=!1,Et=null,ut=null,bt=null,At=null,Zt=null,oe=null,Pe=null,an=null;return{setTest:function(le){at||(le?it(n.STENCIL_TEST):mt(n.STENCIL_TEST))},setMask:function(le){Et!==le&&!at&&(n.stencilMask(le),Et=le)},setFunc:function(le,ke,bn){(ut!==le||bt!==ke||At!==bn)&&(n.stencilFunc(le,ke,bn),ut=le,bt=ke,At=bn)},setOp:function(le,ke,bn){(Zt!==le||oe!==ke||Pe!==bn)&&(n.stencilOp(le,ke,bn),Zt=le,oe=ke,Pe=bn)},setLocked:function(le){at=le},setClear:function(le){an!==le&&(n.clearStencil(le),an=le)},reset:function(){at=!1,Et=null,ut=null,bt=null,At=null,Zt=null,oe=null,Pe=null,an=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let p={},d={},v=new WeakMap,g=[],m=null,h=!1,y=null,_=null,S=null,E=null,I=null,R=null,B=null,k=new re(0,0,0),T=0,U=!1,A=null,N=null,M=null,X=null,tt=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,J=0;const lt=n.getParameter(n.VERSION);lt.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(lt)[1]),nt=J>=1):lt.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(lt)[1]),nt=J>=2);let $=null,K={};const xt=n.getParameter(n.SCISSOR_BOX),et=n.getParameter(n.VIEWPORT),D=new Le().fromArray(xt),Y=new Le().fromArray(et);function W(at,Et,ut,bt){const At=new Uint8Array(4),Zt=n.createTexture();n.bindTexture(at,Zt),n.texParameteri(at,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(at,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let oe=0;oe<ut;oe++)i&&(at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY)?n.texImage3D(Et,0,n.RGBA,1,1,bt,0,n.RGBA,n.UNSIGNED_BYTE,At):n.texImage2D(Et+oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,At);return Zt}const rt={};rt[n.TEXTURE_2D]=W(n.TEXTURE_2D,n.TEXTURE_2D,1),rt[n.TEXTURE_CUBE_MAP]=W(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(rt[n.TEXTURE_2D_ARRAY]=W(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),rt[n.TEXTURE_3D]=W(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),it(n.DEPTH_TEST),l.setFunc(_a),L(!1),O(Yc),it(n.CULL_FACE),F(xi);function it(at){p[at]!==!0&&(n.enable(at),p[at]=!0)}function mt(at){p[at]!==!1&&(n.disable(at),p[at]=!1)}function ht(at,Et){return d[at]!==Et?(n.bindFramebuffer(at,Et),d[at]=Et,i&&(at===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Et),at===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Et)),!0):!1}function w(at,Et){let ut=g,bt=!1;if(at){ut=v.get(Et),ut===void 0&&(ut=[],v.set(Et,ut));const At=at.textures;if(ut.length!==At.length||ut[0]!==n.COLOR_ATTACHMENT0){for(let Zt=0,oe=At.length;Zt<oe;Zt++)ut[Zt]=n.COLOR_ATTACHMENT0+Zt;ut.length=At.length,bt=!0}}else ut[0]!==n.BACK&&(ut[0]=n.BACK,bt=!0);if(bt)if(e.isWebGL2)n.drawBuffers(ut);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ut);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function V(at){return m!==at?(n.useProgram(at),m=at,!0):!1}const x={[Gi]:n.FUNC_ADD,[I0]:n.FUNC_SUBTRACT,[L0]:n.FUNC_REVERSE_SUBTRACT};if(i)x[Qc]=n.MIN,x[tu]=n.MAX;else{const at=t.get("EXT_blend_minmax");at!==null&&(x[Qc]=at.MIN_EXT,x[tu]=at.MAX_EXT)}const z={[D0]:n.ZERO,[U0]:n.ONE,[N0]:n.SRC_COLOR,[sl]:n.SRC_ALPHA,[G0]:n.SRC_ALPHA_SATURATE,[k0]:n.DST_COLOR,[F0]:n.DST_ALPHA,[O0]:n.ONE_MINUS_SRC_COLOR,[al]:n.ONE_MINUS_SRC_ALPHA,[z0]:n.ONE_MINUS_DST_COLOR,[B0]:n.ONE_MINUS_DST_ALPHA,[H0]:n.CONSTANT_COLOR,[V0]:n.ONE_MINUS_CONSTANT_COLOR,[W0]:n.CONSTANT_ALPHA,[X0]:n.ONE_MINUS_CONSTANT_ALPHA};function F(at,Et,ut,bt,At,Zt,oe,Pe,an,le){if(at===xi){h===!0&&(mt(n.BLEND),h=!1);return}if(h===!1&&(it(n.BLEND),h=!0),at!==P0){if(at!==y||le!==U){if((_!==Gi||I!==Gi)&&(n.blendEquation(n.FUNC_ADD),_=Gi,I=Gi),le)switch(at){case Rr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zc:n.blendFunc(n.ONE,n.ONE);break;case Kc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",at);break}else switch(at){case Rr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Kc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",at);break}S=null,E=null,R=null,B=null,k.set(0,0,0),T=0,y=at,U=le}return}At=At||Et,Zt=Zt||ut,oe=oe||bt,(Et!==_||At!==I)&&(n.blendEquationSeparate(x[Et],x[At]),_=Et,I=At),(ut!==S||bt!==E||Zt!==R||oe!==B)&&(n.blendFuncSeparate(z[ut],z[bt],z[Zt],z[oe]),S=ut,E=bt,R=Zt,B=oe),(Pe.equals(k)===!1||an!==T)&&(n.blendColor(Pe.r,Pe.g,Pe.b,an),k.copy(Pe),T=an),y=at,U=!1}function P(at,Et){at.side===Kn?mt(n.CULL_FACE):it(n.CULL_FACE);let ut=at.side===Je;Et&&(ut=!ut),L(ut),at.blending===Rr&&at.transparent===!1?F(xi):F(at.blending,at.blendEquation,at.blendSrc,at.blendDst,at.blendEquationAlpha,at.blendSrcAlpha,at.blendDstAlpha,at.blendColor,at.blendAlpha,at.premultipliedAlpha),l.setFunc(at.depthFunc),l.setTest(at.depthTest),l.setMask(at.depthWrite),a.setMask(at.colorWrite);const bt=at.stencilWrite;u.setTest(bt),bt&&(u.setMask(at.stencilWriteMask),u.setFunc(at.stencilFunc,at.stencilRef,at.stencilFuncMask),u.setOp(at.stencilFail,at.stencilZFail,at.stencilZPass)),C(at.polygonOffset,at.polygonOffsetFactor,at.polygonOffsetUnits),at.alphaToCoverage===!0?it(n.SAMPLE_ALPHA_TO_COVERAGE):mt(n.SAMPLE_ALPHA_TO_COVERAGE)}function L(at){A!==at&&(at?n.frontFace(n.CW):n.frontFace(n.CCW),A=at)}function O(at){at!==A0?(it(n.CULL_FACE),at!==N&&(at===Yc?n.cullFace(n.BACK):at===C0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):mt(n.CULL_FACE),N=at}function j(at){at!==M&&(nt&&n.lineWidth(at),M=at)}function C(at,Et,ut){at?(it(n.POLYGON_OFFSET_FILL),(X!==Et||tt!==ut)&&(n.polygonOffset(Et,ut),X=Et,tt=ut)):mt(n.POLYGON_OFFSET_FILL)}function b(at){at?it(n.SCISSOR_TEST):mt(n.SCISSOR_TEST)}function H(at){at===void 0&&(at=n.TEXTURE0+q-1),$!==at&&(n.activeTexture(at),$=at)}function Z(at,Et,ut){ut===void 0&&($===null?ut=n.TEXTURE0+q-1:ut=$);let bt=K[ut];bt===void 0&&(bt={type:void 0,texture:void 0},K[ut]=bt),(bt.type!==at||bt.texture!==Et)&&($!==ut&&(n.activeTexture(ut),$=ut),n.bindTexture(at,Et||rt[at]),bt.type=at,bt.texture=Et)}function Q(){const at=K[$];at!==void 0&&at.type!==void 0&&(n.bindTexture(at.type,null),at.type=void 0,at.texture=void 0)}function ot(){try{n.compressedTexImage2D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function St(){try{n.compressedTexImage3D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function vt(){try{n.texSubImage2D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function _t(){try{n.texSubImage3D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Mt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function yt(){try{n.texStorage2D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Ut(){try{n.texStorage3D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Ot(){try{n.texImage2D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Ct(){try{n.texImage3D.apply(n,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Tt(at){D.equals(at)===!1&&(n.scissor(at.x,at.y,at.z,at.w),D.copy(at))}function It(at){Y.equals(at)===!1&&(n.viewport(at.x,at.y,at.z,at.w),Y.copy(at))}function jt(at,Et){let ut=f.get(Et);ut===void 0&&(ut=new WeakMap,f.set(Et,ut));let bt=ut.get(at);bt===void 0&&(bt=n.getUniformBlockIndex(Et,at.name),ut.set(at,bt))}function zt(at,Et){const bt=f.get(Et).get(at);c.get(Et)!==bt&&(n.uniformBlockBinding(Et,bt,at.__bindingPointIndex),c.set(Et,bt))}function ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},$=null,K={},d={},v=new WeakMap,g=[],m=null,h=!1,y=null,_=null,S=null,E=null,I=null,R=null,B=null,k=new re(0,0,0),T=0,U=!1,A=null,N=null,M=null,X=null,tt=null,D.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:it,disable:mt,bindFramebuffer:ht,drawBuffers:w,useProgram:V,setBlending:F,setMaterial:P,setFlipSided:L,setCullFace:O,setLineWidth:j,setPolygonOffset:C,setScissorTest:b,activeTexture:H,bindTexture:Z,unbindTexture:Q,compressedTexImage2D:ot,compressedTexImage3D:St,texImage2D:Ot,texImage3D:Ct,updateUBOMapping:jt,uniformBlockBinding:zt,texStorage2D:yt,texStorage3D:Ut,texSubImage2D:vt,texSubImage3D:_t,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Pt,scissor:Tt,viewport:It,reset:ae}}function PS(n,t,e,i,r,s,o){const a=r.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Kt,f=new WeakMap;let p;const d=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return v?new OffscreenCanvas(C,b):Sa("canvas")}function m(C,b,H,Z){let Q=1;const ot=j(C);if((ot.width>Z||ot.height>Z)&&(Q=Z/Math.max(ot.width,ot.height)),Q<1||b===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const St=b?dl:Math.floor,vt=St(Q*ot.width),_t=St(Q*ot.height);p===void 0&&(p=g(vt,_t));const Mt=H?g(vt,_t):p;return Mt.width=vt,Mt.height=_t,Mt.getContext("2d").drawImage(C,0,0,vt,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+vt+"x"+_t+")."),Mt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),C;return C}function h(C){const b=j(C);return Pu(b.width)&&Pu(b.height)}function y(C){return a?!1:C.wrapS!==mn||C.wrapT!==mn||C.minFilter!==Ve&&C.minFilter!==Ze}function _(C,b){return C.generateMipmaps&&b&&C.minFilter!==Ve&&C.minFilter!==Ze}function S(C){n.generateMipmap(C)}function E(C,b,H,Z,Q=!1){if(a===!1)return b;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ot=b;if(b===n.RED&&(H===n.FLOAT&&(ot=n.R32F),H===n.HALF_FLOAT&&(ot=n.R16F),H===n.UNSIGNED_BYTE&&(ot=n.R8)),b===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(ot=n.R8UI),H===n.UNSIGNED_SHORT&&(ot=n.R16UI),H===n.UNSIGNED_INT&&(ot=n.R32UI),H===n.BYTE&&(ot=n.R8I),H===n.SHORT&&(ot=n.R16I),H===n.INT&&(ot=n.R32I)),b===n.RG&&(H===n.FLOAT&&(ot=n.RG32F),H===n.HALF_FLOAT&&(ot=n.RG16F),H===n.UNSIGNED_BYTE&&(ot=n.RG8)),b===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(ot=n.RG8UI),H===n.UNSIGNED_SHORT&&(ot=n.RG16UI),H===n.UNSIGNED_INT&&(ot=n.RG32UI),H===n.BYTE&&(ot=n.RG8I),H===n.SHORT&&(ot=n.RG16I),H===n.INT&&(ot=n.RG32I)),b===n.RGBA){const St=Q?va:ne.getTransfer(Z);H===n.FLOAT&&(ot=n.RGBA32F),H===n.HALF_FLOAT&&(ot=n.RGBA16F),H===n.UNSIGNED_BYTE&&(ot=St===ue?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(ot=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(ot=n.RGB5_A1)}return(ot===n.R16F||ot===n.R32F||ot===n.RG16F||ot===n.RG32F||ot===n.RGBA16F||ot===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function I(C,b,H){return _(C,H)===!0||C.isFramebufferTexture&&C.minFilter!==Ve&&C.minFilter!==Ze?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function R(C){return C===Ve||C===eu||C===qr?n.NEAREST:n.LINEAR}function B(C){const b=C.target;b.removeEventListener("dispose",B),T(b),b.isVideoTexture&&f.delete(b)}function k(C){const b=C.target;b.removeEventListener("dispose",k),A(b)}function T(C){const b=i.get(C);if(b.__webglInit===void 0)return;const H=C.source,Z=d.get(H);if(Z){const Q=Z[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&U(C),Object.keys(Z).length===0&&d.delete(H)}i.remove(C)}function U(C){const b=i.get(C);n.deleteTexture(b.__webglTexture);const H=C.source,Z=d.get(H);delete Z[b.__cacheKey],o.memory.textures--}function A(C){const b=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let Q=0;Q<b.__webglFramebuffer[Z].length;Q++)n.deleteFramebuffer(b.__webglFramebuffer[Z][Q]);else n.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)n.deleteFramebuffer(b.__webglFramebuffer[Z]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const H=C.textures;for(let Z=0,Q=H.length;Z<Q;Z++){const ot=i.get(H[Z]);ot.__webglTexture&&(n.deleteTexture(ot.__webglTexture),o.memory.textures--),i.remove(H[Z])}i.remove(C)}let N=0;function M(){N=0}function X(){const C=N;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),N+=1,C}function tt(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function q(C,b){const H=i.get(C);if(C.isVideoTexture&&L(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(H,C,b);return}}e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+b)}function nt(C,b){const H=i.get(C);if(C.version>0&&H.__version!==C.version){Y(H,C,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+b)}function J(C,b){const H=i.get(C);if(C.version>0&&H.__version!==C.version){Y(H,C,b);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+b)}function lt(C,b){const H=i.get(C);if(C.version>0&&H.__version!==C.version){W(H,C,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+b)}const $={[cl]:n.REPEAT,[mn]:n.CLAMP_TO_EDGE,[ul]:n.MIRRORED_REPEAT},K={[Ve]:n.NEAREST,[eu]:n.NEAREST_MIPMAP_NEAREST,[qr]:n.NEAREST_MIPMAP_LINEAR,[Ze]:n.LINEAR,[lo]:n.LINEAR_MIPMAP_NEAREST,[Wi]:n.LINEAR_MIPMAP_LINEAR},xt={[yv]:n.NEVER,[Tv]:n.ALWAYS,[Mv]:n.LESS,[nd]:n.LEQUAL,[Sv]:n.EQUAL,[wv]:n.GEQUAL,[bv]:n.GREATER,[Ev]:n.NOTEQUAL};function et(C,b,H){if(b.type===Jn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ze||b.magFilter===lo||b.magFilter===qr||b.magFilter===Wi||b.minFilter===Ze||b.minFilter===lo||b.minFilter===qr||b.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),H?(n.texParameteri(C,n.TEXTURE_WRAP_S,$[b.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,$[b.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,$[b.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,K[b.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,K[b.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==mn||b.wrapT!==mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,R(b.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,R(b.minFilter)),b.minFilter!==Ve&&b.minFilter!==Ze&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,xt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ve||b.minFilter!==qr&&b.minFilter!==Wi||b.type===Jn&&t.has("OES_texture_float_linear")===!1||a===!1&&b.type===vs&&t.has("OES_texture_half_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function D(C,b){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",B));const Z=b.source;let Q=d.get(Z);Q===void 0&&(Q={},d.set(Z,Q));const ot=tt(b);if(ot!==C.__cacheKey){Q[ot]===void 0&&(Q[ot]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Q[ot].usedTimes++;const St=Q[C.__cacheKey];St!==void 0&&(Q[C.__cacheKey].usedTimes--,St.usedTimes===0&&U(b)),C.__cacheKey=ot,C.__webglTexture=Q[ot].texture}return H}function Y(C,b,H){let Z=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=n.TEXTURE_3D);const Q=D(C,b),ot=b.source;e.bindTexture(Z,C.__webglTexture,n.TEXTURE0+H);const St=i.get(ot);if(ot.version!==St.__version||Q===!0){e.activeTexture(n.TEXTURE0+H);const vt=ne.getPrimaries(ne.workingColorSpace),_t=b.colorSpace===_i?null:ne.getPrimaries(b.colorSpace),Mt=b.colorSpace===_i||vt===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Pt=y(b)&&h(b.image)===!1;let yt=m(b.image,Pt,!1,r.maxTextureSize);yt=O(b,yt);const Ut=h(yt)||a,Ot=s.convert(b.format,b.colorSpace);let Ct=s.convert(b.type),Tt=E(b.internalFormat,Ot,Ct,b.colorSpace,b.isVideoTexture);et(Z,b,Ut);let It;const jt=b.mipmaps,zt=a&&b.isVideoTexture!==!0&&Tt!==ed,ae=St.__version===void 0||Q===!0,at=ot.dataReady,Et=I(b,yt,Ut);if(b.isDepthTexture)Tt=n.DEPTH_COMPONENT,a?b.type===Jn?Tt=n.DEPTH_COMPONENT32F:b.type===vi?Tt=n.DEPTH_COMPONENT24:b.type===$i?Tt=n.DEPTH24_STENCIL8:Tt=n.DEPTH_COMPONENT16:b.type===Jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Yi&&Tt===n.DEPTH_COMPONENT&&b.type!==Fl&&b.type!==vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=vi,Ct=s.convert(b.type)),b.format===Or&&Tt===n.DEPTH_COMPONENT&&(Tt=n.DEPTH_STENCIL,b.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=$i,Ct=s.convert(b.type))),ae&&(zt?e.texStorage2D(n.TEXTURE_2D,1,Tt,yt.width,yt.height):e.texImage2D(n.TEXTURE_2D,0,Tt,yt.width,yt.height,0,Ot,Ct,null));else if(b.isDataTexture)if(jt.length>0&&Ut){zt&&ae&&e.texStorage2D(n.TEXTURE_2D,Et,Tt,jt[0].width,jt[0].height);for(let ut=0,bt=jt.length;ut<bt;ut++)It=jt[ut],zt?at&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,It.width,It.height,Ot,Ct,It.data):e.texImage2D(n.TEXTURE_2D,ut,Tt,It.width,It.height,0,Ot,Ct,It.data);b.generateMipmaps=!1}else zt?(ae&&e.texStorage2D(n.TEXTURE_2D,Et,Tt,yt.width,yt.height),at&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,yt.width,yt.height,Ot,Ct,yt.data)):e.texImage2D(n.TEXTURE_2D,0,Tt,yt.width,yt.height,0,Ot,Ct,yt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){zt&&ae&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,Tt,jt[0].width,jt[0].height,yt.depth);for(let ut=0,bt=jt.length;ut<bt;ut++)It=jt[ut],b.format!==gn?Ot!==null?zt?at&&e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,It.width,It.height,yt.depth,Ot,It.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ut,Tt,It.width,It.height,yt.depth,0,It.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?at&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,It.width,It.height,yt.depth,Ot,Ct,It.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ut,Tt,It.width,It.height,yt.depth,0,Ot,Ct,It.data)}else{zt&&ae&&e.texStorage2D(n.TEXTURE_2D,Et,Tt,jt[0].width,jt[0].height);for(let ut=0,bt=jt.length;ut<bt;ut++)It=jt[ut],b.format!==gn?Ot!==null?zt?at&&e.compressedTexSubImage2D(n.TEXTURE_2D,ut,0,0,It.width,It.height,Ot,It.data):e.compressedTexImage2D(n.TEXTURE_2D,ut,Tt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?at&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,It.width,It.height,Ot,Ct,It.data):e.texImage2D(n.TEXTURE_2D,ut,Tt,It.width,It.height,0,Ot,Ct,It.data)}else if(b.isDataArrayTexture)zt?(ae&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,Tt,yt.width,yt.height,yt.depth),at&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Ot,Ct,yt.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,Tt,yt.width,yt.height,yt.depth,0,Ot,Ct,yt.data);else if(b.isData3DTexture)zt?(ae&&e.texStorage3D(n.TEXTURE_3D,Et,Tt,yt.width,yt.height,yt.depth),at&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Ot,Ct,yt.data)):e.texImage3D(n.TEXTURE_3D,0,Tt,yt.width,yt.height,yt.depth,0,Ot,Ct,yt.data);else if(b.isFramebufferTexture){if(ae)if(zt)e.texStorage2D(n.TEXTURE_2D,Et,Tt,yt.width,yt.height);else{let ut=yt.width,bt=yt.height;for(let At=0;At<Et;At++)e.texImage2D(n.TEXTURE_2D,At,Tt,ut,bt,0,Ot,Ct,null),ut>>=1,bt>>=1}}else if(jt.length>0&&Ut){if(zt&&ae){const ut=j(jt[0]);e.texStorage2D(n.TEXTURE_2D,Et,Tt,ut.width,ut.height)}for(let ut=0,bt=jt.length;ut<bt;ut++)It=jt[ut],zt?at&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Ot,Ct,It):e.texImage2D(n.TEXTURE_2D,ut,Tt,Ot,Ct,It);b.generateMipmaps=!1}else if(zt){if(ae){const ut=j(yt);e.texStorage2D(n.TEXTURE_2D,Et,Tt,ut.width,ut.height)}at&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ot,Ct,yt)}else e.texImage2D(n.TEXTURE_2D,0,Tt,Ot,Ct,yt);_(b,Ut)&&S(Z),St.__version=ot.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function W(C,b,H){if(b.image.length!==6)return;const Z=D(C,b),Q=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+H);const ot=i.get(Q);if(Q.version!==ot.__version||Z===!0){e.activeTexture(n.TEXTURE0+H);const St=ne.getPrimaries(ne.workingColorSpace),vt=b.colorSpace===_i?null:ne.getPrimaries(b.colorSpace),_t=b.colorSpace===_i||St===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Mt=b.isCompressedTexture||b.image[0].isCompressedTexture,Pt=b.image[0]&&b.image[0].isDataTexture,yt=[];for(let ut=0;ut<6;ut++)!Mt&&!Pt?yt[ut]=m(b.image[ut],!1,!0,r.maxCubemapSize):yt[ut]=Pt?b.image[ut].image:b.image[ut],yt[ut]=O(b,yt[ut]);const Ut=yt[0],Ot=h(Ut)||a,Ct=s.convert(b.format,b.colorSpace),Tt=s.convert(b.type),It=E(b.internalFormat,Ct,Tt,b.colorSpace),jt=a&&b.isVideoTexture!==!0,zt=ot.__version===void 0||Z===!0,ae=Q.dataReady;let at=I(b,Ut,Ot);et(n.TEXTURE_CUBE_MAP,b,Ot);let Et;if(Mt){jt&&zt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,at,It,Ut.width,Ut.height);for(let ut=0;ut<6;ut++){Et=yt[ut].mipmaps;for(let bt=0;bt<Et.length;bt++){const At=Et[bt];b.format!==gn?Ct!==null?jt?ae&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,bt,0,0,At.width,At.height,Ct,At.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,bt,It,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?ae&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,bt,0,0,At.width,At.height,Ct,Tt,At.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,bt,It,At.width,At.height,0,Ct,Tt,At.data)}}}else{if(Et=b.mipmaps,jt&&zt){Et.length>0&&at++;const ut=j(yt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,at,It,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(Pt){jt?ae&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,yt[ut].width,yt[ut].height,Ct,Tt,yt[ut].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,It,yt[ut].width,yt[ut].height,0,Ct,Tt,yt[ut].data);for(let bt=0;bt<Et.length;bt++){const Zt=Et[bt].image[ut].image;jt?ae&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,bt+1,0,0,Zt.width,Zt.height,Ct,Tt,Zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,bt+1,It,Zt.width,Zt.height,0,Ct,Tt,Zt.data)}}else{jt?ae&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Ct,Tt,yt[ut]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,It,Ct,Tt,yt[ut]);for(let bt=0;bt<Et.length;bt++){const At=Et[bt];jt?ae&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,bt+1,0,0,Ct,Tt,At.image[ut]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,bt+1,It,Ct,Tt,At.image[ut])}}}_(b,Ot)&&S(n.TEXTURE_CUBE_MAP),ot.__version=Q.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function rt(C,b,H,Z,Q,ot){const St=s.convert(H.format,H.colorSpace),vt=s.convert(H.type),_t=E(H.internalFormat,St,vt,H.colorSpace);if(!i.get(b).__hasExternalTextures){const Pt=Math.max(1,b.width>>ot),yt=Math.max(1,b.height>>ot);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,ot,_t,Pt,yt,b.depth,0,St,vt,null):e.texImage2D(Q,ot,_t,Pt,yt,0,St,vt,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),P(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,Q,i.get(H).__webglTexture,0,F(b)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,Q,i.get(H).__webglTexture,ot),e.bindFramebuffer(n.FRAMEBUFFER,null)}function it(C,b,H){if(n.bindRenderbuffer(n.RENDERBUFFER,C),b.depthBuffer&&!b.stencilBuffer){let Z=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(H||P(b)){const Q=b.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Jn?Z=n.DEPTH_COMPONENT32F:Q.type===vi&&(Z=n.DEPTH_COMPONENT24));const ot=F(b);P(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,Z,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,Z,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,Z,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(b.depthBuffer&&b.stencilBuffer){const Z=F(b);H&&P(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,n.DEPTH24_STENCIL8,b.width,b.height):P(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Z,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{const Z=b.textures;for(let Q=0;Q<Z.length;Q++){const ot=Z[Q],St=s.convert(ot.format,ot.colorSpace),vt=s.convert(ot.type),_t=E(ot.internalFormat,St,vt,ot.colorSpace),Mt=F(b);H&&P(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt,_t,b.width,b.height):P(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt,_t,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,_t,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function mt(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);const Z=i.get(b.depthTexture).__webglTexture,Q=F(b);if(b.depthTexture.format===Yi)P(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(b.depthTexture.format===Or)P(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ht(C){const b=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");mt(b.__webglFramebuffer,C)}else if(H){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]=n.createRenderbuffer(),it(b.__webglDepthbuffer[Z],C,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),it(b.__webglDepthbuffer,C,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function w(C,b,H){const Z=i.get(C);b!==void 0&&rt(Z.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&ht(C)}function V(C){const b=C.texture,H=i.get(C),Z=i.get(b);C.addEventListener("dispose",k);const Q=C.textures,ot=C.isWebGLCubeRenderTarget===!0,St=Q.length>1,vt=h(C)||a;if(St||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=b.version,o.memory.textures++),ot){H.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(a&&b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[_t]=[];for(let Mt=0;Mt<b.mipmaps.length;Mt++)H.__webglFramebuffer[_t][Mt]=n.createFramebuffer()}else H.__webglFramebuffer[_t]=n.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let _t=0;_t<b.mipmaps.length;_t++)H.__webglFramebuffer[_t]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(St)if(r.drawBuffers)for(let _t=0,Mt=Q.length;_t<Mt;_t++){const Pt=i.get(Q[_t]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=n.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&P(C)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let _t=0;_t<Q.length;_t++){const Mt=Q[_t];H.__webglColorRenderbuffer[_t]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[_t]);const Pt=s.convert(Mt.format,Mt.colorSpace),yt=s.convert(Mt.type),Ut=E(Mt.internalFormat,Pt,yt,Mt.colorSpace,C.isXRRenderTarget===!0),Ot=F(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,Ut,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,H.__webglColorRenderbuffer[_t])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),it(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ot){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),et(n.TEXTURE_CUBE_MAP,b,vt);for(let _t=0;_t<6;_t++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let Mt=0;Mt<b.mipmaps.length;Mt++)rt(H.__webglFramebuffer[_t][Mt],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Mt);else rt(H.__webglFramebuffer[_t],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);_(b,vt)&&S(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let _t=0,Mt=Q.length;_t<Mt;_t++){const Pt=Q[_t],yt=i.get(Pt);e.bindTexture(n.TEXTURE_2D,yt.__webglTexture),et(n.TEXTURE_2D,Pt,vt),rt(H.__webglFramebuffer,C,Pt,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,0),_(Pt,vt)&&S(n.TEXTURE_2D)}e.unbindTexture()}else{let _t=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?_t=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(_t,Z.__webglTexture),et(_t,b,vt),a&&b.mipmaps&&b.mipmaps.length>0)for(let Mt=0;Mt<b.mipmaps.length;Mt++)rt(H.__webglFramebuffer[Mt],C,b,n.COLOR_ATTACHMENT0,_t,Mt);else rt(H.__webglFramebuffer,C,b,n.COLOR_ATTACHMENT0,_t,0);_(b,vt)&&S(_t),e.unbindTexture()}C.depthBuffer&&ht(C)}function x(C){const b=h(C)||a,H=C.textures;for(let Z=0,Q=H.length;Z<Q;Z++){const ot=H[Z];if(_(ot,b)){const St=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,vt=i.get(ot).__webglTexture;e.bindTexture(St,vt),S(St),e.unbindTexture()}}}function z(C){if(a&&C.samples>0&&P(C)===!1){const b=C.textures,H=C.width,Z=C.height;let Q=n.COLOR_BUFFER_BIT;const ot=[],St=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=i.get(C),_t=b.length>1;if(_t)for(let Mt=0;Mt<b.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Mt=0;Mt<b.length;Mt++){ot.push(n.COLOR_ATTACHMENT0+Mt),C.depthBuffer&&ot.push(St);const Pt=vt.__ignoreDepthValues!==void 0?vt.__ignoreDepthValues:!1;if(Pt===!1&&(C.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),_t&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,vt.__webglColorRenderbuffer[Mt]),Pt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[St]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[St])),_t){const yt=i.get(b[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,yt,0)}n.blitFramebuffer(0,0,H,Z,0,0,H,Z,Q,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ot)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_t)for(let Mt=0;Mt<b.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,vt.__webglColorRenderbuffer[Mt]);const Pt=i.get(b[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,Pt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}}function F(C){return Math.min(r.maxSamples,C.samples)}function P(C){const b=i.get(C);return a&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function L(C){const b=o.render.frame;f.get(C)!==b&&(f.set(C,b),C.update())}function O(C,b){const H=C.colorSpace,Z=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===fl||H!==Ei&&H!==_i&&(ne.getTransfer(H)===ue?a===!1?t.has("EXT_sRGB")===!0&&Z===gn?(C.format=fl,C.minFilter=Ze,C.generateMipmaps=!1):b=rd.sRGBToLinear(b):(Z!==gn||Q!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function j(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=M,this.setTexture2D=q,this.setTexture2DArray=nt,this.setTexture3D=J,this.setTextureCube=lt,this.rebindTextures=w,this.setupRenderTarget=V,this.updateRenderTargetMipmap=x,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=P}function IS(n,t,e){const i=e.isWebGL2;function r(s,o=_i){let a;const l=ne.getTransfer(o);if(s===Mi)return n.UNSIGNED_BYTE;if(s===Zh)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Kh)return n.UNSIGNED_SHORT_5_5_5_1;if(s===lv)return n.BYTE;if(s===cv)return n.SHORT;if(s===Fl)return n.UNSIGNED_SHORT;if(s===Yh)return n.INT;if(s===vi)return n.UNSIGNED_INT;if(s===Jn)return n.FLOAT;if(s===vs)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===uv)return n.ALPHA;if(s===gn)return n.RGBA;if(s===fv)return n.LUMINANCE;if(s===hv)return n.LUMINANCE_ALPHA;if(s===Yi)return n.DEPTH_COMPONENT;if(s===Or)return n.DEPTH_STENCIL;if(s===fl)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===dv)return n.RED;if(s===Jh)return n.RED_INTEGER;if(s===pv)return n.RG;if(s===Qh)return n.RG_INTEGER;if(s===td)return n.RGBA_INTEGER;if(s===co||s===uo||s===fo||s===ho)if(l===ue)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===co)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===uo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ho)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===co)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===uo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ho)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===nu||s===iu||s===ru||s===su)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===nu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===iu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ru)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===su)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ed)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===au||s===ou)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===au)return l===ue?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ou)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===lu||s===cu||s===uu||s===fu||s===hu||s===du||s===pu||s===mu||s===gu||s===_u||s===vu||s===xu||s===yu||s===Mu)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===lu)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cu)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===uu)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fu)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hu)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===du)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pu)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===mu)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gu)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===_u)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vu)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xu)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yu)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Mu)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===po||s===Su||s===bu)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===po)return l===ue?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Su)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===bu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===mv||s===Eu||s===wu||s===Tu)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===po)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Eu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===wu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Tu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$i?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class LS extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Qs extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DS={type:"move"};class Go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new pt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new pt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new pt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new pt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,i),h=this._getHandJoint(u,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],p=c.position.distanceTo(f.position),d=.02,v=.005;u.inputState.pinching&&p>d+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&p<=d-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(DS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Qs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const US=`
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

}`;class OS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new je,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const i=e.cameras[0].viewport,r=new si({extensions:{fragDepth:!0},vertexShader:US,fragmentShader:NS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Dn(new Ts(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class FS extends Br{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,p=null,d=null,v=null;const g=new OS,m=e.getContextAttributes();let h=null,y=null;const _=[],S=[],E=new Kt;let I=null;const R=new pn;R.layers.enable(1),R.viewport=new Le;const B=new pn;B.layers.enable(2),B.viewport=new Le;const k=[R,B],T=new LS;T.layers.enable(1),T.layers.enable(2);let U=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let D=_[et];return D===void 0&&(D=new Go,_[et]=D),D.getTargetRaySpace()},this.getControllerGrip=function(et){let D=_[et];return D===void 0&&(D=new Go,_[et]=D),D.getGripSpace()},this.getHand=function(et){let D=_[et];return D===void 0&&(D=new Go,_[et]=D),D.getHandSpace()};function N(et){const D=S.indexOf(et.inputSource);if(D===-1)return;const Y=_[D];Y!==void 0&&(Y.update(et.inputSource,et.frame,u||o),Y.dispatchEvent({type:et.type,data:et.inputSource}))}function M(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",M),r.removeEventListener("inputsourceschange",X);for(let et=0;et<_.length;et++){const D=S[et];D!==null&&(S[et]=null,_[et].disconnect(D))}U=null,A=null,g.reset(),t.setRenderTarget(h),d=null,p=null,f=null,r=null,y=null,xt.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){s=et,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(et){u=et},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(et){if(r=et,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",M),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(E),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const D={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,D),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Ji(d.framebufferWidth,d.framebufferHeight,{format:gn,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let D=null,Y=null,W=null;m.depth&&(W=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,D=m.stencil?Or:Yi,Y=m.stencil?$i:vi);const rt={colorFormat:e.RGBA8,depthFormat:W,scaleFactor:s};f=new XRWebGLBinding(r,e),p=f.createProjectionLayer(rt),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),y=new Ji(p.textureWidth,p.textureHeight,{format:gn,type:Mi,depthTexture:new vd(p.textureWidth,p.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});const it=t.properties.get(y);it.__ignoreDepthValues=p.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),xt.setContext(r),xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(et){for(let D=0;D<et.removed.length;D++){const Y=et.removed[D],W=S.indexOf(Y);W>=0&&(S[W]=null,_[W].disconnect(Y))}for(let D=0;D<et.added.length;D++){const Y=et.added[D];let W=S.indexOf(Y);if(W===-1){for(let it=0;it<_.length;it++)if(it>=S.length){S.push(Y),W=it;break}else if(S[it]===null){S[it]=Y,W=it;break}if(W===-1)break}const rt=_[W];rt&&rt.connect(Y)}}const tt=new pt,q=new pt;function nt(et,D,Y){tt.setFromMatrixPosition(D.matrixWorld),q.setFromMatrixPosition(Y.matrixWorld);const W=tt.distanceTo(q),rt=D.projectionMatrix.elements,it=Y.projectionMatrix.elements,mt=rt[14]/(rt[10]-1),ht=rt[14]/(rt[10]+1),w=(rt[9]+1)/rt[5],V=(rt[9]-1)/rt[5],x=(rt[8]-1)/rt[0],z=(it[8]+1)/it[0],F=mt*x,P=mt*z,L=W/(-x+z),O=L*-x;D.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(O),et.translateZ(L),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert();const j=mt+L,C=ht+L,b=F-O,H=P+(W-O),Z=w*ht/C*j,Q=V*ht/C*j;et.projectionMatrix.makePerspective(b,H,Z,Q,j,C),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}function J(et,D){D===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(D.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(r===null)return;g.texture!==null&&(et.near=g.depthNear,et.far=g.depthFar),T.near=B.near=R.near=et.near,T.far=B.far=R.far=et.far,(U!==T.near||A!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),U=T.near,A=T.far,R.near=U,R.far=A,B.near=U,B.far=A,R.updateProjectionMatrix(),B.updateProjectionMatrix(),et.updateProjectionMatrix());const D=et.parent,Y=T.cameras;J(T,D);for(let W=0;W<Y.length;W++)J(Y[W],D);Y.length===2?nt(T,R,B):T.projectionMatrix.copy(R.projectionMatrix),lt(et,T,D)};function lt(et,D,Y){Y===null?et.matrix.copy(D.matrixWorld):(et.matrix.copy(Y.matrixWorld),et.matrix.invert(),et.matrix.multiply(D.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(D.projectionMatrix),et.projectionMatrixInverse.copy(D.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=hl*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(et){l=et,p!==null&&(p.fixedFoveation=et),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=et)},this.hasDepthSensing=function(){return g.texture!==null};let $=null;function K(et,D){if(c=D.getViewerPose(u||o),v=D,c!==null){const Y=c.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let W=!1;Y.length!==T.cameras.length&&(T.cameras.length=0,W=!0);for(let it=0;it<Y.length;it++){const mt=Y[it];let ht=null;if(d!==null)ht=d.getViewport(mt);else{const V=f.getViewSubImage(p,mt);ht=V.viewport,it===0&&(t.setRenderTargetTextures(y,V.colorTexture,p.ignoreDepthValues?void 0:V.depthStencilTexture),t.setRenderTarget(y))}let w=k[it];w===void 0&&(w=new pn,w.layers.enable(it),w.viewport=new Le,k[it]=w),w.matrix.fromArray(mt.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(mt.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(ht.x,ht.y,ht.width,ht.height),it===0&&(T.matrix.copy(w.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),W===!0&&T.cameras.push(w)}const rt=r.enabledFeatures;if(rt&&rt.includes("depth-sensing")){const it=f.getDepthInformation(Y[0]);it&&it.isValid&&it.texture&&g.init(t,it,r.renderState)}}for(let Y=0;Y<_.length;Y++){const W=S[Y],rt=_[Y];W!==null&&rt!==void 0&&rt.update(W,D,u||o)}g.render(t,T),$&&$(et,D),D.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:D}),v=null}const xt=new gd;xt.setAnimationLoop(K),this.setAnimationLoop=function(et){$=et},this.dispose=function(){}}}const Oi=new ri,BS=new be;function kS(n,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,hd(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,y,_,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),p(m,h),h.isMeshPhysicalMaterial&&d(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),g(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,y,_):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Je&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Je&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const y=t.get(h),_=y.envMap,S=y.envMapRotation;if(_&&(m.envMap.value=_,Oi.copy(S),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(BS.makeRotationFromEuler(Oi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const E=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*E,e(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,y,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*y,m.scale.value=_*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function p(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),t.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function d(m,h,y){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Je&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const y=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function zS(n,t,e,i){let r={},s={},o=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,_){const S=_.program;i.uniformBlockBinding(y,S)}function u(y,_){let S=r[y.id];S===void 0&&(v(y),S=c(y),r[y.id]=S,y.addEventListener("dispose",m));const E=_.program;i.updateUBOMapping(y,E);const I=t.render.frame;s[y.id]!==I&&(p(y),s[y.id]=I)}function c(y){const _=f();y.__bindingPointIndex=_;const S=n.createBuffer(),E=y.__size,I=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,E,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,S),S}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const _=r[y.id],S=y.uniforms,E=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let I=0,R=S.length;I<R;I++){const B=Array.isArray(S[I])?S[I]:[S[I]];for(let k=0,T=B.length;k<T;k++){const U=B[k];if(d(U,I,k,E)===!0){const A=U.__offset,N=Array.isArray(U.value)?U.value:[U.value];let M=0;for(let X=0;X<N.length;X++){const tt=N[X],q=g(tt);typeof tt=="number"||typeof tt=="boolean"?(U.__data[0]=tt,n.bufferSubData(n.UNIFORM_BUFFER,A+M,U.__data)):tt.isMatrix3?(U.__data[0]=tt.elements[0],U.__data[1]=tt.elements[1],U.__data[2]=tt.elements[2],U.__data[3]=0,U.__data[4]=tt.elements[3],U.__data[5]=tt.elements[4],U.__data[6]=tt.elements[5],U.__data[7]=0,U.__data[8]=tt.elements[6],U.__data[9]=tt.elements[7],U.__data[10]=tt.elements[8],U.__data[11]=0):(tt.toArray(U.__data,M),M+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,A,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,_,S,E){const I=y.value,R=_+"_"+S;if(E[R]===void 0)return typeof I=="number"||typeof I=="boolean"?E[R]=I:E[R]=I.clone(),!0;{const B=E[R];if(typeof I=="number"||typeof I=="boolean"){if(B!==I)return E[R]=I,!0}else if(B.equals(I)===!1)return B.copy(I),!0}return!1}function v(y){const _=y.uniforms;let S=0;const E=16;for(let R=0,B=_.length;R<B;R++){const k=Array.isArray(_[R])?_[R]:[_[R]];for(let T=0,U=k.length;T<U;T++){const A=k[T],N=Array.isArray(A.value)?A.value:[A.value];for(let M=0,X=N.length;M<X;M++){const tt=N[M],q=g(tt),nt=S%E;nt!==0&&E-nt<q.boundary&&(S+=E-nt),A.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=S,S+=q.storage}}}const I=S%E;return I>0&&(S+=E-I),y.__size=S,y.__cache={},this}function g(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class Ed{constructor(t={}){const{canvas:e=Cv(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;const d=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const h=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=An,this._useLegacyLights=!1,this.toneMapping=yi,this.toneMappingExposure=1;const _=this;let S=!1,E=0,I=0,R=null,B=-1,k=null;const T=new Le,U=new Le;let A=null;const N=new re(0);let M=0,X=e.width,tt=e.height,q=1,nt=null,J=null;const lt=new Le(0,0,X,tt),$=new Le(0,0,X,tt);let K=!1;const xt=new md;let et=!1,D=!1,Y=null;const W=new be,rt=new Kt,it=new pt,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ht(){return R===null?q:1}let w=i;function V(G,ct){for(let dt=0;dt<G.length;dt++){const gt=G[dt],ft=e.getContext(gt,ct);if(ft!==null)return ft}return null}try{const G={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ol}`),e.addEventListener("webglcontextlost",ae,!1),e.addEventListener("webglcontextrestored",at,!1),e.addEventListener("webglcontextcreationerror",Et,!1),w===null){const ct=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&ct.shift(),w=V(ct,G),w===null)throw V(ct)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&w instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),w.getShaderPrecisionFormat===void 0&&(w.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(G){throw console.error("THREE.WebGLRenderer: "+G.message),G}let x,z,F,P,L,O,j,C,b,H,Z,Q,ot,St,vt,_t,Mt,Pt,yt,Ut,Ot,Ct,Tt,It;function jt(){x=new q1(w),z=new z1(w,x,t),x.init(z),Ct=new IS(w,x,z),F=new RS(w,x,z),P=new Y1(w),L=new mS,O=new PS(w,x,F,L,z,Ct,P),j=new H1(_),C=new X1(_),b=new ex(w,z),Tt=new B1(w,x,b,z),H=new j1(w,b,P,Tt),Z=new Q1(w,H,b,P),yt=new J1(w,z,O),_t=new G1(L),Q=new pS(_,j,C,x,z,Tt,_t),ot=new kS(_,L),St=new _S,vt=new bS(x,z),Pt=new F1(_,j,C,F,Z,p,l),Mt=new CS(_,Z,z),It=new zS(w,P,z,F),Ut=new k1(w,x,P,z),Ot=new $1(w,x,P,z),P.programs=Q.programs,_.capabilities=z,_.extensions=x,_.properties=L,_.renderLists=St,_.shadowMap=Mt,_.state=F,_.info=P}jt();const zt=new FS(_,w);this.xr=zt,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const G=x.get("WEBGL_lose_context");G&&G.loseContext()},this.forceContextRestore=function(){const G=x.get("WEBGL_lose_context");G&&G.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(G){G!==void 0&&(q=G,this.setSize(X,tt,!1))},this.getSize=function(G){return G.set(X,tt)},this.setSize=function(G,ct,dt=!0){if(zt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=G,tt=ct,e.width=Math.floor(G*q),e.height=Math.floor(ct*q),dt===!0&&(e.style.width=G+"px",e.style.height=ct+"px"),this.setViewport(0,0,G,ct)},this.getDrawingBufferSize=function(G){return G.set(X*q,tt*q).floor()},this.setDrawingBufferSize=function(G,ct,dt){X=G,tt=ct,q=dt,e.width=Math.floor(G*dt),e.height=Math.floor(ct*dt),this.setViewport(0,0,G,ct)},this.getCurrentViewport=function(G){return G.copy(T)},this.getViewport=function(G){return G.copy(lt)},this.setViewport=function(G,ct,dt,gt){G.isVector4?lt.set(G.x,G.y,G.z,G.w):lt.set(G,ct,dt,gt),F.viewport(T.copy(lt).multiplyScalar(q).round())},this.getScissor=function(G){return G.copy($)},this.setScissor=function(G,ct,dt,gt){G.isVector4?$.set(G.x,G.y,G.z,G.w):$.set(G,ct,dt,gt),F.scissor(U.copy($).multiplyScalar(q).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(G){F.setScissorTest(K=G)},this.setOpaqueSort=function(G){nt=G},this.setTransparentSort=function(G){J=G},this.getClearColor=function(G){return G.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(G=!0,ct=!0,dt=!0){let gt=0;if(G){let ft=!1;if(R!==null){const Rt=R.texture.format;ft=Rt===td||Rt===Qh||Rt===Jh}if(ft){const Rt=R.texture.type,Lt=Rt===Mi||Rt===vi||Rt===Fl||Rt===$i||Rt===Zh||Rt===Kh,Nt=Pt.getClearColor(),Ft=Pt.getClearAlpha(),$t=Nt.r,Ht=Nt.g,Vt=Nt.b;Lt?(d[0]=$t,d[1]=Ht,d[2]=Vt,d[3]=Ft,w.clearBufferuiv(w.COLOR,0,d)):(v[0]=$t,v[1]=Ht,v[2]=Vt,v[3]=Ft,w.clearBufferiv(w.COLOR,0,v))}else gt|=w.COLOR_BUFFER_BIT}ct&&(gt|=w.DEPTH_BUFFER_BIT),dt&&(gt|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(gt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ae,!1),e.removeEventListener("webglcontextrestored",at,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),St.dispose(),vt.dispose(),L.dispose(),j.dispose(),C.dispose(),Z.dispose(),Tt.dispose(),It.dispose(),Q.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",an),zt.removeEventListener("sessionend",le),Y&&(Y.dispose(),Y=null),ke.stop()};function ae(G){G.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function at(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const G=P.autoReset,ct=Mt.enabled,dt=Mt.autoUpdate,gt=Mt.needsUpdate,ft=Mt.type;jt(),P.autoReset=G,Mt.enabled=ct,Mt.autoUpdate=dt,Mt.needsUpdate=gt,Mt.type=ft}function Et(G){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",G.statusMessage)}function ut(G){const ct=G.target;ct.removeEventListener("dispose",ut),bt(ct)}function bt(G){At(G),L.remove(G)}function At(G){const ct=L.get(G).programs;ct!==void 0&&(ct.forEach(function(dt){Q.releaseProgram(dt)}),G.isShaderMaterial&&Q.releaseShaderCache(G))}this.renderBufferDirect=function(G,ct,dt,gt,ft,Rt){ct===null&&(ct=mt);const Lt=ft.isMesh&&ft.matrixWorld.determinant()<0,Nt=Ad(G,ct,dt,gt,ft);F.setMaterial(gt,Lt);let Ft=dt.index,$t=1;if(gt.wireframe===!0){if(Ft=H.getWireframeAttribute(dt),Ft===void 0)return;$t=2}const Ht=dt.drawRange,Vt=dt.attributes.position;let xe=Ht.start*$t,Qe=(Ht.start+Ht.count)*$t;Rt!==null&&(xe=Math.max(xe,Rt.start*$t),Qe=Math.min(Qe,(Rt.start+Rt.count)*$t)),Ft!==null?(xe=Math.max(xe,0),Qe=Math.min(Qe,Ft.count)):Vt!=null&&(xe=Math.max(xe,0),Qe=Math.min(Qe,Vt.count));const Ae=Qe-xe;if(Ae<0||Ae===1/0)return;Tt.setup(ft,gt,Nt,dt,Ft);let Fn,de=Ut;if(Ft!==null&&(Fn=b.get(Ft),de=Ot,de.setIndex(Fn)),ft.isMesh)gt.wireframe===!0?(F.setLineWidth(gt.wireframeLinewidth*ht()),de.setMode(w.LINES)):de.setMode(w.TRIANGLES);else if(ft.isLine){let Wt=gt.linewidth;Wt===void 0&&(Wt=1),F.setLineWidth(Wt*ht()),ft.isLineSegments?de.setMode(w.LINES):ft.isLineLoop?de.setMode(w.LINE_LOOP):de.setMode(w.LINE_STRIP)}else ft.isPoints?de.setMode(w.POINTS):ft.isSprite&&de.setMode(w.TRIANGLES);if(ft.isBatchedMesh)de.renderMultiDraw(ft._multiDrawStarts,ft._multiDrawCounts,ft._multiDrawCount);else if(ft.isInstancedMesh)de.renderInstances(xe,Ae,ft.count);else if(dt.isInstancedBufferGeometry){const Wt=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,Ha=Math.min(dt.instanceCount,Wt);de.renderInstances(xe,Ae,Ha)}else de.render(xe,Ae)};function Zt(G,ct,dt){G.transparent===!0&&G.side===Kn&&G.forceSinglePass===!1?(G.side=Je,G.needsUpdate=!0,Cs(G,ct,dt),G.side=bi,G.needsUpdate=!0,Cs(G,ct,dt),G.side=Kn):Cs(G,ct,dt)}this.compile=function(G,ct,dt=null){dt===null&&(dt=G),m=vt.get(dt),m.init(),y.push(m),dt.traverseVisible(function(ft){ft.isLight&&ft.layers.test(ct.layers)&&(m.pushLight(ft),ft.castShadow&&m.pushShadow(ft))}),G!==dt&&G.traverseVisible(function(ft){ft.isLight&&ft.layers.test(ct.layers)&&(m.pushLight(ft),ft.castShadow&&m.pushShadow(ft))}),m.setupLights(_._useLegacyLights);const gt=new Set;return G.traverse(function(ft){const Rt=ft.material;if(Rt)if(Array.isArray(Rt))for(let Lt=0;Lt<Rt.length;Lt++){const Nt=Rt[Lt];Zt(Nt,dt,ft),gt.add(Nt)}else Zt(Rt,dt,ft),gt.add(Rt)}),y.pop(),m=null,gt},this.compileAsync=function(G,ct,dt=null){const gt=this.compile(G,ct,dt);return new Promise(ft=>{function Rt(){if(gt.forEach(function(Lt){L.get(Lt).currentProgram.isReady()&&gt.delete(Lt)}),gt.size===0){ft(G);return}setTimeout(Rt,10)}x.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let oe=null;function Pe(G){oe&&oe(G)}function an(){ke.stop()}function le(){ke.start()}const ke=new gd;ke.setAnimationLoop(Pe),typeof self<"u"&&ke.setContext(self),this.setAnimationLoop=function(G){oe=G,zt.setAnimationLoop(G),G===null?ke.stop():ke.start()},zt.addEventListener("sessionstart",an),zt.addEventListener("sessionend",le),this.render=function(G,ct){if(ct!==void 0&&ct.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ct.parent===null&&ct.matrixWorldAutoUpdate===!0&&ct.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(ct),ct=zt.getCamera()),G.isScene===!0&&G.onBeforeRender(_,G,ct,R),m=vt.get(G,y.length),m.init(),y.push(m),W.multiplyMatrices(ct.projectionMatrix,ct.matrixWorldInverse),xt.setFromProjectionMatrix(W),D=this.localClippingEnabled,et=_t.init(this.clippingPlanes,D),g=St.get(G,h.length),g.init(),h.push(g),bn(G,ct,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(nt,J),this.info.render.frame++,et===!0&&_t.beginShadows();const dt=m.state.shadowsArray;if(Mt.render(dt,G,ct),et===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset(),(zt.enabled===!1||zt.isPresenting===!1||zt.hasDepthSensing()===!1)&&Pt.render(g,G),m.setupLights(_._useLegacyLights),ct.isArrayCamera){const gt=ct.cameras;for(let ft=0,Rt=gt.length;ft<Rt;ft++){const Lt=gt[ft];Gl(g,G,Lt,Lt.viewport)}}else Gl(g,G,ct);R!==null&&(O.updateMultisampleRenderTarget(R),O.updateRenderTargetMipmap(R)),G.isScene===!0&&G.onAfterRender(_,G,ct),Tt.resetDefaultState(),B=-1,k=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function bn(G,ct,dt,gt){if(G.visible===!1)return;if(G.layers.test(ct.layers)){if(G.isGroup)dt=G.renderOrder;else if(G.isLOD)G.autoUpdate===!0&&G.update(ct);else if(G.isLight)m.pushLight(G),G.castShadow&&m.pushShadow(G);else if(G.isSprite){if(!G.frustumCulled||xt.intersectsSprite(G)){gt&&it.setFromMatrixPosition(G.matrixWorld).applyMatrix4(W);const Lt=Z.update(G),Nt=G.material;Nt.visible&&g.push(G,Lt,Nt,dt,it.z,null)}}else if((G.isMesh||G.isLine||G.isPoints)&&(!G.frustumCulled||xt.intersectsObject(G))){const Lt=Z.update(G),Nt=G.material;if(gt&&(G.boundingSphere!==void 0?(G.boundingSphere===null&&G.computeBoundingSphere(),it.copy(G.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),it.copy(Lt.boundingSphere.center)),it.applyMatrix4(G.matrixWorld).applyMatrix4(W)),Array.isArray(Nt)){const Ft=Lt.groups;for(let $t=0,Ht=Ft.length;$t<Ht;$t++){const Vt=Ft[$t],xe=Nt[Vt.materialIndex];xe&&xe.visible&&g.push(G,Lt,xe,dt,it.z,Vt)}}else Nt.visible&&g.push(G,Lt,Nt,dt,it.z,null)}}const Rt=G.children;for(let Lt=0,Nt=Rt.length;Lt<Nt;Lt++)bn(Rt[Lt],ct,dt,gt)}function Gl(G,ct,dt,gt){const ft=G.opaque,Rt=G.transmissive,Lt=G.transparent;m.setupLightsView(dt),et===!0&&_t.setGlobalState(_.clippingPlanes,dt),Rt.length>0&&Td(ft,Rt,ct,dt),gt&&F.viewport(T.copy(gt)),ft.length>0&&As(ft,ct,dt),Rt.length>0&&As(Rt,ct,dt),Lt.length>0&&As(Lt,ct,dt),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Td(G,ct,dt,gt){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;const Rt=z.isWebGL2;Y===null&&(Y=new Ji(1,1,{generateMipmaps:!0,type:x.has("EXT_color_buffer_half_float")?vs:Mi,minFilter:Wi,samples:Rt?4:0})),_.getDrawingBufferSize(rt),Rt?Y.setSize(rt.x,rt.y):Y.setSize(dl(rt.x),dl(rt.y));const Lt=_.getRenderTarget();_.setRenderTarget(Y),_.getClearColor(N),M=_.getClearAlpha(),M<1&&_.setClearColor(16777215,.5),_.clear();const Nt=_.toneMapping;_.toneMapping=yi,As(G,dt,gt),O.updateMultisampleRenderTarget(Y),O.updateRenderTargetMipmap(Y);let Ft=!1;for(let $t=0,Ht=ct.length;$t<Ht;$t++){const Vt=ct[$t],xe=Vt.object,Qe=Vt.geometry,Ae=Vt.material,Fn=Vt.group;if(Ae.side===Kn&&xe.layers.test(gt.layers)){const de=Ae.side;Ae.side=Je,Ae.needsUpdate=!0,Hl(xe,dt,gt,Qe,Ae,Fn),Ae.side=de,Ae.needsUpdate=!0,Ft=!0}}Ft===!0&&(O.updateMultisampleRenderTarget(Y),O.updateRenderTargetMipmap(Y)),_.setRenderTarget(Lt),_.setClearColor(N,M),_.toneMapping=Nt}function As(G,ct,dt){const gt=ct.isScene===!0?ct.overrideMaterial:null;for(let ft=0,Rt=G.length;ft<Rt;ft++){const Lt=G[ft],Nt=Lt.object,Ft=Lt.geometry,$t=gt===null?Lt.material:gt,Ht=Lt.group;Nt.layers.test(dt.layers)&&Hl(Nt,ct,dt,Ft,$t,Ht)}}function Hl(G,ct,dt,gt,ft,Rt){G.onBeforeRender(_,ct,dt,gt,ft,Rt),G.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,G.matrixWorld),G.normalMatrix.getNormalMatrix(G.modelViewMatrix),ft.onBeforeRender(_,ct,dt,gt,G,Rt),ft.transparent===!0&&ft.side===Kn&&ft.forceSinglePass===!1?(ft.side=Je,ft.needsUpdate=!0,_.renderBufferDirect(dt,ct,gt,ft,G,Rt),ft.side=bi,ft.needsUpdate=!0,_.renderBufferDirect(dt,ct,gt,ft,G,Rt),ft.side=Kn):_.renderBufferDirect(dt,ct,gt,ft,G,Rt),G.onAfterRender(_,ct,dt,gt,ft,Rt)}function Cs(G,ct,dt){ct.isScene!==!0&&(ct=mt);const gt=L.get(G),ft=m.state.lights,Rt=m.state.shadowsArray,Lt=ft.state.version,Nt=Q.getParameters(G,ft.state,Rt,ct,dt),Ft=Q.getProgramCacheKey(Nt);let $t=gt.programs;gt.environment=G.isMeshStandardMaterial?ct.environment:null,gt.fog=ct.fog,gt.envMap=(G.isMeshStandardMaterial?C:j).get(G.envMap||gt.environment),gt.envMapRotation=gt.environment!==null&&G.envMap===null?ct.environmentRotation:G.envMapRotation,$t===void 0&&(G.addEventListener("dispose",ut),$t=new Map,gt.programs=$t);let Ht=$t.get(Ft);if(Ht!==void 0){if(gt.currentProgram===Ht&&gt.lightsStateVersion===Lt)return Wl(G,Nt),Ht}else Nt.uniforms=Q.getUniforms(G),G.onBuild(dt,Nt,_),G.onBeforeCompile(Nt,_),Ht=Q.acquireProgram(Nt,Ft),$t.set(Ft,Ht),gt.uniforms=Nt.uniforms;const Vt=gt.uniforms;return(!G.isShaderMaterial&&!G.isRawShaderMaterial||G.clipping===!0)&&(Vt.clippingPlanes=_t.uniform),Wl(G,Nt),gt.needsLights=Rd(G),gt.lightsStateVersion=Lt,gt.needsLights&&(Vt.ambientLightColor.value=ft.state.ambient,Vt.lightProbe.value=ft.state.probe,Vt.directionalLights.value=ft.state.directional,Vt.directionalLightShadows.value=ft.state.directionalShadow,Vt.spotLights.value=ft.state.spot,Vt.spotLightShadows.value=ft.state.spotShadow,Vt.rectAreaLights.value=ft.state.rectArea,Vt.ltc_1.value=ft.state.rectAreaLTC1,Vt.ltc_2.value=ft.state.rectAreaLTC2,Vt.pointLights.value=ft.state.point,Vt.pointLightShadows.value=ft.state.pointShadow,Vt.hemisphereLights.value=ft.state.hemi,Vt.directionalShadowMap.value=ft.state.directionalShadowMap,Vt.directionalShadowMatrix.value=ft.state.directionalShadowMatrix,Vt.spotShadowMap.value=ft.state.spotShadowMap,Vt.spotLightMatrix.value=ft.state.spotLightMatrix,Vt.spotLightMap.value=ft.state.spotLightMap,Vt.pointShadowMap.value=ft.state.pointShadowMap,Vt.pointShadowMatrix.value=ft.state.pointShadowMatrix),gt.currentProgram=Ht,gt.uniformsList=null,Ht}function Vl(G){if(G.uniformsList===null){const ct=G.currentProgram.getUniforms();G.uniformsList=oa.seqWithValue(ct.seq,G.uniforms)}return G.uniformsList}function Wl(G,ct){const dt=L.get(G);dt.outputColorSpace=ct.outputColorSpace,dt.batching=ct.batching,dt.instancing=ct.instancing,dt.instancingColor=ct.instancingColor,dt.instancingMorph=ct.instancingMorph,dt.skinning=ct.skinning,dt.morphTargets=ct.morphTargets,dt.morphNormals=ct.morphNormals,dt.morphColors=ct.morphColors,dt.morphTargetsCount=ct.morphTargetsCount,dt.numClippingPlanes=ct.numClippingPlanes,dt.numIntersection=ct.numClipIntersection,dt.vertexAlphas=ct.vertexAlphas,dt.vertexTangents=ct.vertexTangents,dt.toneMapping=ct.toneMapping}function Ad(G,ct,dt,gt,ft){ct.isScene!==!0&&(ct=mt),O.resetTextureUnits();const Rt=ct.fog,Lt=gt.isMeshStandardMaterial?ct.environment:null,Nt=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ei,Ft=(gt.isMeshStandardMaterial?C:j).get(gt.envMap||Lt),$t=gt.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,Ht=!!dt.attributes.tangent&&(!!gt.normalMap||gt.anisotropy>0),Vt=!!dt.morphAttributes.position,xe=!!dt.morphAttributes.normal,Qe=!!dt.morphAttributes.color;let Ae=yi;gt.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ae=_.toneMapping);const Fn=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,de=Fn!==void 0?Fn.length:0,Wt=L.get(gt),Ha=m.state.lights;if(et===!0&&(D===!0||G!==k)){const on=G===k&&gt.id===B;_t.setState(gt,G,on)}let he=!1;gt.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Ha.state.version||Wt.outputColorSpace!==Nt||ft.isBatchedMesh&&Wt.batching===!1||!ft.isBatchedMesh&&Wt.batching===!0||ft.isInstancedMesh&&Wt.instancing===!1||!ft.isInstancedMesh&&Wt.instancing===!0||ft.isSkinnedMesh&&Wt.skinning===!1||!ft.isSkinnedMesh&&Wt.skinning===!0||ft.isInstancedMesh&&Wt.instancingColor===!0&&ft.instanceColor===null||ft.isInstancedMesh&&Wt.instancingColor===!1&&ft.instanceColor!==null||ft.isInstancedMesh&&Wt.instancingMorph===!0&&ft.morphTexture===null||ft.isInstancedMesh&&Wt.instancingMorph===!1&&ft.morphTexture!==null||Wt.envMap!==Ft||gt.fog===!0&&Wt.fog!==Rt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==_t.numPlanes||Wt.numIntersection!==_t.numIntersection)||Wt.vertexAlphas!==$t||Wt.vertexTangents!==Ht||Wt.morphTargets!==Vt||Wt.morphNormals!==xe||Wt.morphColors!==Qe||Wt.toneMapping!==Ae||z.isWebGL2===!0&&Wt.morphTargetsCount!==de)&&(he=!0):(he=!0,Wt.__version=gt.version);let wi=Wt.currentProgram;he===!0&&(wi=Cs(gt,ct,ft));let Xl=!1,zr=!1,Va=!1;const De=wi.getUniforms(),Ti=Wt.uniforms;if(F.useProgram(wi.program)&&(Xl=!0,zr=!0,Va=!0),gt.id!==B&&(B=gt.id,zr=!0),Xl||k!==G){De.setValue(w,"projectionMatrix",G.projectionMatrix),De.setValue(w,"viewMatrix",G.matrixWorldInverse);const on=De.map.cameraPosition;on!==void 0&&on.setValue(w,it.setFromMatrixPosition(G.matrixWorld)),z.logarithmicDepthBuffer&&De.setValue(w,"logDepthBufFC",2/(Math.log(G.far+1)/Math.LN2)),(gt.isMeshPhongMaterial||gt.isMeshToonMaterial||gt.isMeshLambertMaterial||gt.isMeshBasicMaterial||gt.isMeshStandardMaterial||gt.isShaderMaterial)&&De.setValue(w,"isOrthographic",G.isOrthographicCamera===!0),k!==G&&(k=G,zr=!0,Va=!0)}if(ft.isSkinnedMesh){De.setOptional(w,ft,"bindMatrix"),De.setOptional(w,ft,"bindMatrixInverse");const on=ft.skeleton;on&&(z.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),De.setValue(w,"boneTexture",on.boneTexture,O)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ft.isBatchedMesh&&(De.setOptional(w,ft,"batchingTexture"),De.setValue(w,"batchingTexture",ft._matricesTexture,O));const Wa=dt.morphAttributes;if((Wa.position!==void 0||Wa.normal!==void 0||Wa.color!==void 0&&z.isWebGL2===!0)&&yt.update(ft,dt,wi),(zr||Wt.receiveShadow!==ft.receiveShadow)&&(Wt.receiveShadow=ft.receiveShadow,De.setValue(w,"receiveShadow",ft.receiveShadow)),gt.isMeshGouraudMaterial&&gt.envMap!==null&&(Ti.envMap.value=Ft,Ti.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),zr&&(De.setValue(w,"toneMappingExposure",_.toneMappingExposure),Wt.needsLights&&Cd(Ti,Va),Rt&&gt.fog===!0&&ot.refreshFogUniforms(Ti,Rt),ot.refreshMaterialUniforms(Ti,gt,q,tt,Y),oa.upload(w,Vl(Wt),Ti,O)),gt.isShaderMaterial&&gt.uniformsNeedUpdate===!0&&(oa.upload(w,Vl(Wt),Ti,O),gt.uniformsNeedUpdate=!1),gt.isSpriteMaterial&&De.setValue(w,"center",ft.center),De.setValue(w,"modelViewMatrix",ft.modelViewMatrix),De.setValue(w,"normalMatrix",ft.normalMatrix),De.setValue(w,"modelMatrix",ft.matrixWorld),gt.isShaderMaterial||gt.isRawShaderMaterial){const on=gt.uniformsGroups;for(let Xa=0,Pd=on.length;Xa<Pd;Xa++)if(z.isWebGL2){const ql=on[Xa];It.update(ql,wi),It.bind(ql,wi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wi}function Cd(G,ct){G.ambientLightColor.needsUpdate=ct,G.lightProbe.needsUpdate=ct,G.directionalLights.needsUpdate=ct,G.directionalLightShadows.needsUpdate=ct,G.pointLights.needsUpdate=ct,G.pointLightShadows.needsUpdate=ct,G.spotLights.needsUpdate=ct,G.spotLightShadows.needsUpdate=ct,G.rectAreaLights.needsUpdate=ct,G.hemisphereLights.needsUpdate=ct}function Rd(G){return G.isMeshLambertMaterial||G.isMeshToonMaterial||G.isMeshPhongMaterial||G.isMeshStandardMaterial||G.isShadowMaterial||G.isShaderMaterial&&G.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(G,ct,dt){L.get(G.texture).__webglTexture=ct,L.get(G.depthTexture).__webglTexture=dt;const gt=L.get(G);gt.__hasExternalTextures=!0,gt.__autoAllocateDepthBuffer=dt===void 0,gt.__autoAllocateDepthBuffer||x.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),gt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(G,ct){const dt=L.get(G);dt.__webglFramebuffer=ct,dt.__useDefaultFramebuffer=ct===void 0},this.setRenderTarget=function(G,ct=0,dt=0){R=G,E=ct,I=dt;let gt=!0,ft=null,Rt=!1,Lt=!1;if(G){const Ft=L.get(G);Ft.__useDefaultFramebuffer!==void 0?(F.bindFramebuffer(w.FRAMEBUFFER,null),gt=!1):Ft.__webglFramebuffer===void 0?O.setupRenderTarget(G):Ft.__hasExternalTextures&&O.rebindTextures(G,L.get(G.texture).__webglTexture,L.get(G.depthTexture).__webglTexture);const $t=G.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Lt=!0);const Ht=L.get(G).__webglFramebuffer;G.isWebGLCubeRenderTarget?(Array.isArray(Ht[ct])?ft=Ht[ct][dt]:ft=Ht[ct],Rt=!0):z.isWebGL2&&G.samples>0&&O.useMultisampledRTT(G)===!1?ft=L.get(G).__webglMultisampledFramebuffer:Array.isArray(Ht)?ft=Ht[dt]:ft=Ht,T.copy(G.viewport),U.copy(G.scissor),A=G.scissorTest}else T.copy(lt).multiplyScalar(q).floor(),U.copy($).multiplyScalar(q).floor(),A=K;if(F.bindFramebuffer(w.FRAMEBUFFER,ft)&&z.drawBuffers&&gt&&F.drawBuffers(G,ft),F.viewport(T),F.scissor(U),F.setScissorTest(A),Rt){const Ft=L.get(G.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ft.__webglTexture,dt)}else if(Lt){const Ft=L.get(G.texture),$t=ct||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ft.__webglTexture,dt||0,$t)}B=-1},this.readRenderTargetPixels=function(G,ct,dt,gt,ft,Rt,Lt){if(!(G&&G.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=L.get(G).__webglFramebuffer;if(G.isWebGLCubeRenderTarget&&Lt!==void 0&&(Nt=Nt[Lt]),Nt){F.bindFramebuffer(w.FRAMEBUFFER,Nt);try{const Ft=G.texture,$t=Ft.format,Ht=Ft.type;if($t!==gn&&Ct.convert($t)!==w.getParameter(w.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Vt=Ht===vs&&(x.has("EXT_color_buffer_half_float")||z.isWebGL2&&x.has("EXT_color_buffer_float"));if(Ht!==Mi&&Ct.convert(Ht)!==w.getParameter(w.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ht===Jn&&(z.isWebGL2||x.has("OES_texture_float")||x.has("WEBGL_color_buffer_float")))&&!Vt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ct>=0&&ct<=G.width-gt&&dt>=0&&dt<=G.height-ft&&w.readPixels(ct,dt,gt,ft,Ct.convert($t),Ct.convert(Ht),Rt)}finally{const Ft=R!==null?L.get(R).__webglFramebuffer:null;F.bindFramebuffer(w.FRAMEBUFFER,Ft)}}},this.copyFramebufferToTexture=function(G,ct,dt=0){const gt=Math.pow(2,-dt),ft=Math.floor(ct.image.width*gt),Rt=Math.floor(ct.image.height*gt);O.setTexture2D(ct,0),w.copyTexSubImage2D(w.TEXTURE_2D,dt,0,0,G.x,G.y,ft,Rt),F.unbindTexture()},this.copyTextureToTexture=function(G,ct,dt,gt=0){const ft=ct.image.width,Rt=ct.image.height,Lt=Ct.convert(dt.format),Nt=Ct.convert(dt.type);O.setTexture2D(dt,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,dt.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,dt.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,dt.unpackAlignment),ct.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,gt,G.x,G.y,ft,Rt,Lt,Nt,ct.image.data):ct.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,gt,G.x,G.y,ct.mipmaps[0].width,ct.mipmaps[0].height,Lt,ct.mipmaps[0].data):w.texSubImage2D(w.TEXTURE_2D,gt,G.x,G.y,Lt,Nt,ct.image),gt===0&&dt.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),F.unbindTexture()},this.copyTextureToTexture3D=function(G,ct,dt,gt,ft=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Rt=Math.round(G.max.x-G.min.x),Lt=Math.round(G.max.y-G.min.y),Nt=G.max.z-G.min.z+1,Ft=Ct.convert(gt.format),$t=Ct.convert(gt.type);let Ht;if(gt.isData3DTexture)O.setTexture3D(gt,0),Ht=w.TEXTURE_3D;else if(gt.isDataArrayTexture||gt.isCompressedArrayTexture)O.setTexture2DArray(gt,0),Ht=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,gt.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,gt.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,gt.unpackAlignment);const Vt=w.getParameter(w.UNPACK_ROW_LENGTH),xe=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Qe=w.getParameter(w.UNPACK_SKIP_PIXELS),Ae=w.getParameter(w.UNPACK_SKIP_ROWS),Fn=w.getParameter(w.UNPACK_SKIP_IMAGES),de=dt.isCompressedTexture?dt.mipmaps[ft]:dt.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,de.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,de.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,G.min.x),w.pixelStorei(w.UNPACK_SKIP_ROWS,G.min.y),w.pixelStorei(w.UNPACK_SKIP_IMAGES,G.min.z),dt.isDataTexture||dt.isData3DTexture?w.texSubImage3D(Ht,ft,ct.x,ct.y,ct.z,Rt,Lt,Nt,Ft,$t,de.data):gt.isCompressedArrayTexture?w.compressedTexSubImage3D(Ht,ft,ct.x,ct.y,ct.z,Rt,Lt,Nt,Ft,de.data):w.texSubImage3D(Ht,ft,ct.x,ct.y,ct.z,Rt,Lt,Nt,Ft,$t,de),w.pixelStorei(w.UNPACK_ROW_LENGTH,Vt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,xe),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Qe),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ae),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Fn),ft===0&&gt.generateMipmaps&&w.generateMipmap(Ht),F.unbindTexture()},this.initTexture=function(G){G.isCubeTexture?O.setTextureCube(G,0):G.isData3DTexture?O.setTexture3D(G,0):G.isDataArrayTexture||G.isCompressedArrayTexture?O.setTexture2DArray(G,0):O.setTexture2D(G,0),F.unbindTexture()},this.resetState=function(){E=0,I=0,R=null,F.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Bl?"display-p3":"srgb",e.unpackColorSpace=ne.workingColorSpace===ka?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class GS extends Ed{}GS.prototype.isWebGL1Renderer=!0;class HS extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ol);class VS{constructor(t,e){this.effectCanvas=t,this.originalCanvas=e,this.renderer=null,this.scene=null,this.camera=null,this.material=null,this.texture=null,this.mesh=null,this.params={horizontalChromatic:70,distortion:50,speed:60,size:60,blur:60},this.time=0,this.animationId=null,this.currentImage=null,this.compareMode=!1}init(){this.scene=new HS,this.camera=new _d(-1,1,1,-1,0,1),this.renderer=new Ed({canvas:this.effectCanvas,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.createMaterial();const t=new Ts(2,2);this.mesh=new Dn(t,this.material),this.scene.add(this.mesh),this.animate(),window.addEventListener("resize",()=>this.handleResize())}createMaterial(){this.material=new si({uniforms:{uTexture:{value:null},uTime:{value:0},uHorizontalChromatic:{value:.7},uDistortion:{value:.5},uSpeed:{value:.6},uSize:{value:.6},uBlur:{value:.6},uResolution:{value:new Kt(1,1)},uTextureResolution:{value:new Kt(1,1)}},vertexShader:`
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
      `})}loadImage(t){this.currentImage=t,this.texture&&this.texture.dispose(),this.texture=new je(t),this.texture.needsUpdate=!0,this.material.uniforms.uTexture.value=this.texture,this.material.uniforms.uTextureResolution.value.set(t.width,t.height),this.updateCanvasSize(t.width,t.height),this.compareMode&&this.originalCanvas&&this.drawOriginalImage(t)}drawOriginalImage(t){if(!this.originalCanvas)return;const e=this.originalCanvas.getContext("2d");this.originalCanvas.width=t.width,this.originalCanvas.height=t.height,e.drawImage(t,0,0)}updateCanvasSize(t,e){const i=this.effectCanvas.parentElement;if(!i)return;const r=i.clientWidth-48,s=i.clientHeight-48,o=Math.min(r/t,s/e,1),a=Math.floor(t*o),l=Math.floor(e*o);this.effectCanvas.style.width=`${a}px`,this.effectCanvas.style.height=`${l}px`,this.renderer.setSize(t,e,!1),this.material.uniforms.uResolution.value.set(t,e),this.compareMode&&this.originalCanvas&&(this.originalCanvas.style.width=`${a}px`,this.originalCanvas.style.height=`${l}px`)}updateParams(t){this.params={...t},this.material.uniforms.uHorizontalChromatic.value=t.horizontalChromatic/100,this.material.uniforms.uDistortion.value=t.distortion/100,this.material.uniforms.uSpeed.value=t.speed/100,this.material.uniforms.uSize.value=t.size/100,this.material.uniforms.uBlur.value=t.blur/100}setCompareMode(t){this.compareMode=t,t&&this.currentImage&&this.originalCanvas&&(this.drawOriginalImage(this.currentImage),this.updateCanvasSize(this.currentImage.width,this.currentImage.height))}animate(){this.animationId=requestAnimationFrame(()=>this.animate()),this.time+=.016,this.material.uniforms.uTime.value=this.time,this.renderer.render(this.scene,this.camera)}handleResize(){this.currentImage&&this.updateCanvasSize(this.currentImage.width,this.currentImage.height)}dispose(){this.animationId&&cancelAnimationFrame(this.animationId),this.texture&&this.texture.dispose(),this.material&&this.material.dispose(),this.renderer&&this.renderer.dispose(),window.removeEventListener("resize",()=>this.handleResize())}}class fe{constructor(t){this.canvas=t,this.ctx=t.getContext("2d"),this.sourceImage=null,this.params={},this.animFrame=null,this.isAnimating=!1}loadImage(t){this.sourceImage=t,this.canvas.width=t.naturalWidth||t.width,this.canvas.height=t.naturalHeight||t.height,this.render()}updateParams(t){this.params={...this.params,...t},this.render()}render(){this.sourceImage&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.sourceImage,0,0,this.canvas.width,this.canvas.height),this.apply())}apply(){}destroy(){this.animFrame&&cancelAnimationFrame(this.animFrame)}getAvgColor(t,e,i,r,s,o,a){let l=0,u=0,c=0,f=0,p=0;const d=Math.max(0,Math.floor(e)),v=Math.max(0,Math.floor(i)),g=Math.min(o-1,Math.floor(e+r)),m=Math.min(a-1,Math.floor(i+s));for(let h=v;h<=m;h++)for(let y=d;y<=g;y++){const _=(h*o+y)*4;l+=t[_],u+=t[_+1],c+=t[_+2],f+=t[_+3],p++}return p===0?[0,0,0,255]:[l/p,u/p,c/p,f/p]}}class WS extends fe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(2,Math.round(this.params.intensity/100*60)+2),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;t.clearRect(0,0,r,s);for(let c=0;c<s;c+=o)for(let f=0;f<r;f+=o){const[p,d,v,g]=this.getAvgColor(u,f,c,o-1,o-1,r,s);t.fillStyle=`rgba(${p|0},${d|0},${v|0},${g/255})`,t.fillRect(f,c,o,o)}}}class XS extends fe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(4,Math.round(this.params.intensity/100*80)+4),a=Math.round(this.params.intensity/100*3)+1;t.clearRect(0,0,r,s);const l=document.createElement("canvas"),u=Math.max(4,o);l.width=Math.max(1,Math.ceil(r/u)),l.height=Math.max(1,Math.ceil(s/u));const c=l.getContext("2d");c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high",c.drawImage(i,0,0,l.width,l.height),t.imageSmoothingEnabled=!0,t.imageSmoothingQuality="high",t.drawImage(l,0,0,r,s),t.filter=`blur(${a*2}px)`,t.globalAlpha=.3,t.drawImage(i,0,0,r,s),t.filter="none",t.globalAlpha=1}}class qS extends fe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(4,Math.round(this.params.intensity/100*56)+8),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;t.clearRect(0,0,r,s);for(let c=0;c<s;c+=o)for(let f=0;f<r;f+=o){const[p,d,v]=this.getAvgColor(u,f,c,o-1,o-1,r,s),g=p|0,m=d|0,h=v|0;t.fillStyle=`rgb(${g},${m},${h})`,t.fillRect(f,c,o,o),t.fillStyle="rgba(0,0,0,0.35)",t.fillRect(f+o-2,c,2,o),t.fillRect(f,c+o-2,o,2),t.fillStyle="rgba(255,255,255,0.2)",t.fillRect(f,c,o-2,2),t.fillRect(f,c,2,o-2);const y=f+o/2,_=c+o/2,S=o*.28,E=t.createRadialGradient(y-S*.3,_-S*.3,S*.1,y,_,S);E.addColorStop(0,"rgba(255,255,255,0.5)"),E.addColorStop(.5,`rgba(${g},${m},${h},0.9)`),E.addColorStop(1,"rgba(0,0,0,0.3)"),t.beginPath(),t.arc(y,_,S,0,Math.PI*2),t.fillStyle=E,t.fill()}}}class jS extends fe{constructor(t){super(t),this.params={intensity:50},this._cachedSeeds=null,this._cachedSize=-1}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(8,Math.round(this.params.intensity/100*60)+8),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;this._cachedSize!==o&&(this._cachedSeeds=this._genSeeds(r,s,o),this._cachedSize=o);const c=this._cachedSeeds,f=c.map(([p,d])=>{const[v,g,m]=this.getAvgColor(u,p-o/2,d-o/2,o,o,r,s);return[v|0,g|0,m|0]});t.clearRect(0,0,r,s),this._drawVoronoi(t,c,f,r,s,o)}_genSeeds(t,e,i){const r=[],s=Math.ceil(t/i)+1,o=Math.ceil(e/i)+1;for(let a=0;a<o;a++)for(let l=0;l<s;l++){const u=i*.7,c=l*i+(this._hash(l,a,0)-.5)*u,f=a*i+(this._hash(l,a,1)-.5)*u;r.push([c,f])}return r}_hash(t,e,i){let r=Math.sin(t*127.1+e*311.7+i*74.3)*43758.5453;return r-Math.floor(r)}_drawVoronoi(t,e,i,r,s,o){const a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d"),u=l.createImageData(r,s),c=u.data;for(let m=0;m<s;m++)for(let h=0;h<r;h++){let y=1/0,_=0;const S=Math.round(h/o),E=Math.round(m/o);for(let T=-2;T<=2;T++)for(let U=-2;U<=2;U++){const A=S+U,N=E+T;if(A<0||N<0||A>=Math.ceil(r/o)+1||N>=Math.ceil(s/o)+1)continue;const M=N*(Math.ceil(r/o)+1)+A;if(M<0||M>=e.length)continue;const[X,tt]=e[M],q=(h-X)**2+(m-tt)**2;q<y&&(y=q,_=M)}const[I,R,B]=i[_],k=(m*r+h)*4;c[k]=I,c[k+1]=R,c[k+2]=B,c[k+3]=255}l.putImageData(u,0,0),t.drawImage(a,0,0);const f=l.getImageData(0,0,r,s).data,p=document.createElement("canvas");p.width=r,p.height=s;const d=p.getContext("2d"),v=d.createImageData(r,s),g=v.data;for(let m=1;m<s-1;m++)for(let h=1;h<r-1;h++){const y=(m*r+h)*4,_=(m*r+h+1)*4,S=((m+1)*r+h)*4;(f[y]!==f[_]||f[y+1]!==f[_+1]||f[y]!==f[S]||f[y+1]!==f[S+1])&&(g[y]=255,g[y+1]=255,g[y+2]=255,g[y+3]=200)}d.putImageData(v,0,0),t.drawImage(p,0,0)}}class $S extends fe{constructor(t){super(t),this.params={intensity:50},this._seeds=null,this._cachedSize=-1}_hash(t,e,i){let r=Math.sin(t*127.1+e*311.7+i*74.3)*43758.5453;return r-Math.floor(r)}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(6,Math.round(this.params.intensity/100*50)+6),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;if(this._cachedSize!==o){this._seeds=[];const c=Math.ceil(r/o)+1,f=Math.ceil(s/o)+1;for(let p=0;p<f;p++)for(let d=0;d<c;d++){const v=o*.65,g=d*o+(this._hash(d,p,0)-.5)*v,m=p*o+(this._hash(d,p,1)-.5)*v,h=o*(.35+this._hash(d,p,2)*.3);this._seeds.push({x:g,y:m,r:h})}this._cachedSize=o}t.fillStyle="#000",t.fillRect(0,0,r,s);for(const c of this._seeds){const[f,p,d]=this.getAvgColor(u,c.x-c.r,c.y-c.r,c.r*2,c.r*2,r,s),[v,g,m]=this._boostSat(f,p,d,1.5);t.beginPath(),t.arc(c.x,c.y,c.r,0,Math.PI*2),t.fillStyle=`rgb(${v|0},${g|0},${m|0})`,t.fill()}}_boostSat(t,e,i,r){const s=Math.max(t,e,i),o=Math.min(t,e,i),a=(s+o)/2;return[Math.min(255,Math.max(0,a+(t-a)*r)),Math.min(255,Math.max(0,a+(e-a)*r)),Math.min(255,Math.max(0,a+(i-a)*r))]}}class YS extends fe{constructor(t){super(t),this.params={intensity:50},this._cachedSize=-1,this._triangles=null}_hash(t,e,i){let r=Math.sin(t*127.1+e*311.7+i*74.3)*43758.5453;return r-Math.floor(r)}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(8,Math.round(this.params.intensity/100*60)+10),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;this._cachedSize!==o&&(this._triangles=this._genTriangles(r,s,o),this._cachedSize=o),t.clearRect(0,0,r,s);for(const c of this._triangles){const f=(c[0]+c[2]+c[4])/3,p=(c[1]+c[3]+c[5])/3,[d,v,g]=this.getAvgColor(u,f-o/2,p-o/2,o,o,r,s),[m,h,y]=this._boostSat(d,v,g,1.8);t.beginPath(),t.moveTo(c[0],c[1]),t.lineTo(c[2],c[3]),t.lineTo(c[4],c[5]),t.closePath(),t.fillStyle=`rgb(${m|0},${h|0},${y|0})`,t.fill()}}_genTriangles(t,e,i){const r=[],s=Math.ceil(t/i)+1,o=Math.ceil(e/i)+1,a=[];for(let l=0;l<=o;l++){a.push([]);for(let u=0;u<=s;u++){const c=(this._hash(u,l,0)-.5)*i*.7,f=(this._hash(u,l,1)-.5)*i*.7;a[l].push([u*i+c,l*i+f])}}for(let l=0;l<o;l++)for(let u=0;u<s;u++){const[c,f]=a[l][u],[p,d]=a[l][u+1],[v,g]=a[l+1][u],[m,h]=a[l+1][u+1];r.push([c,f,p,d,v,g]),r.push([p,d,m,h,v,g])}return r}_boostSat(t,e,i,r){const s=Math.max(t,e,i),o=Math.min(t,e,i),a=(s+o)/2;return[Math.min(255,Math.max(0,a+(t-a)*r)),Math.min(255,Math.max(0,a+(e-a)*r)),Math.min(255,Math.max(0,a+(i-a)*r))]}}class ZS extends fe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(20,Math.round(this.params.intensity/100*120)+20),a=document.createElement("canvas");a.width=r,a.height=s,a.getContext("2d").drawImage(i,0,0,r,s),t.clearRect(0,0,r,s);for(let u=0;u<s;u+=o)for(let c=0;c<r;c+=o){const f=Math.min(o,r-c),p=Math.min(o,s-u);t.save(),t.beginPath(),t.rect(c,u,f,p),t.clip(),t.transform(1.08,.04,-.04,1.08,c-c*.08+f*.02,u-u*.08+p*.02),t.drawImage(a,0,0,r,s),t.setTransform(1,0,0,1,0,0);const d=t.createLinearGradient(c,u,c+f,u+p);d.addColorStop(0,"rgba(255,255,255,0.18)"),d.addColorStop(.4,"rgba(255,255,255,0.04)"),d.addColorStop(1,"rgba(0,0,0,0.12)"),t.fillStyle=d,t.fillRect(c,u,f,p),t.restore(),t.strokeStyle="rgba(0,0,0,0.6)",t.lineWidth=1,t.strokeRect(c+.5,u+.5,f-1,p-1)}}}class KS extends fe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(16,Math.round(this.params.intensity/100*100)+16),a=o*.12,l=document.createElement("canvas");l.width=r,l.height=s;const u=l.getContext("2d");u.drawImage(i,0,0,r,s),u.getImageData(0,0,r,s).data,t.clearRect(0,0,r,s),t.filter="blur(2px)",t.drawImage(i,0,0,r,s),t.filter="none";for(let c=0;c<s;c+=o)for(let f=0;f<r;f+=o){const p=Math.min(o,r-f),d=Math.min(o,s-c),v=f+p/2,g=c+d/2;t.save(),t.beginPath(),this._roundRect(t,f+1,c+1,p-2,d-2,a),t.clip();const m=Math.sin(v/r*Math.PI*2)*o*.15,h=Math.cos(g/s*Math.PI*2)*o*.15;t.drawImage(l,m,h,r,s),t.fillStyle="rgba(255,255,255,0.06)",t.fillRect(f,c,p,d);const y=t.createLinearGradient(f,c,f,c+d*.4);y.addColorStop(0,"rgba(255,255,255,0.25)"),y.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=y,t.fillRect(f,c,p,d*.4),t.restore(),t.save(),t.beginPath(),this._roundRect(t,f+.5,c+.5,p-1,d-1,a),t.strokeStyle="rgba(255,255,255,0.25)",t.lineWidth=1,t.stroke(),t.restore()}}_roundRect(t,e,i,r,s,o){t.moveTo(e+o,i),t.lineTo(e+r-o,i),t.quadraticCurveTo(e+r,i,e+r,i+o),t.lineTo(e+r,i+s-o),t.quadraticCurveTo(e+r,i+s,e+r-o,i+s),t.lineTo(e+o,i+s),t.quadraticCurveTo(e,i+s,e,i+s-o),t.lineTo(e,i+o),t.quadraticCurveTo(e,i,e+o,i),t.closePath()}}class JS extends fe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(6,Math.round(this.params.intensity/100*60)+6),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;t.clearRect(0,0,r,s);const c=o*2,f=Math.sqrt(3)*o,p=c*.75,d=f,v=Math.ceil(r/p)+1,g=Math.ceil(s/d)+1;for(let m=0;m<g;m++)for(let h=0;h<v;h++){const y=h%2===0?0:f/2,_=h*p,S=m*d+y,[E,I,R]=this.getAvgColor(u,_-o,S-o,o*2,o*2,r,s);t.beginPath();for(let B=0;B<6;B++){const k=Math.PI/3*B-Math.PI/6,T=_+o*Math.cos(k),U=S+o*Math.sin(k);B===0?t.moveTo(T,U):t.lineTo(T,U)}t.closePath(),t.fillStyle=`rgb(${E|0},${I|0},${R|0})`,t.fill(),t.strokeStyle="rgba(0,0,0,0.2)",t.lineWidth=.5,t.stroke()}}}class QS extends fe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(10,Math.round(this.params.intensity/100*70)+10),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;t.clearRect(0,0,r,s),t.filter="blur(4px) brightness(0.5)",t.drawImage(i,0,0,r,s),t.filter="none";const c=Math.ceil(r/o)+1,f=Math.ceil(s/o)+1;for(let p=0;p<f;p++)for(let d=0;d<c;d++){const v=d*o+o/2,g=p*o+o/2,[m,h,y]=this.getAvgColor(u,v-o/2,g-o/2,o,o,r,s);t.save(),t.translate(v,g),t.beginPath();for(let S=0;S<10;S++){const E=Math.PI/5*S-Math.PI/2,I=S%2===0?o*.48:o*.22,R=Math.cos(E)*I,B=Math.sin(E)*I;S===0?t.moveTo(R,B):t.lineTo(R,B)}t.closePath();const _=t.createRadialGradient(-o*.15,-o*.15,0,0,0,o*.5);_.addColorStop(0,`rgba(${Math.min(255,(m|0)+60)},${Math.min(255,(h|0)+60)},${Math.min(255,(y|0)+60)},1)`),_.addColorStop(.5,`rgba(${m|0},${h|0},${y|0},0.9)`),_.addColorStop(1,`rgba(${Math.max(0,(m|0)-40)},${Math.max(0,(h|0)-40)},${Math.max(0,(y|0)-40)},0.8)`),t.fillStyle=_,t.fill(),t.strokeStyle="rgba(0,0,0,0.4)",t.lineWidth=.8,t.stroke(),t.restore()}}}class tb extends fe{constructor(t){super(t),this.params={mode:0,intensity:30,center:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,{mode:o,intensity:a,center:l}=this.params,u=l/100*r,c=l/100*s,f=Math.max(1,Math.round(a/100*24)),p=a/100*.08,d=a/100*.12;t.clearRect(0,0,r,s),t.globalAlpha=1/f;for(let v=0;v<f;v++){const g=v/(f-1||1)-.5;if(t.save(),t.translate(u,c),o===0)t.rotate(g*p*2);else{const m=1+g*d*2;t.scale(m,m)}t.translate(-u,-c),t.drawImage(i,0,0,r,s),t.restore()}t.globalAlpha=1}}class eb extends fe{constructor(t){super(t),this.params={length:30,direction:0}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,{length:o,direction:a}=this.params,l=Math.max(1,Math.round(o/100*30)),u=a*Math.PI/180,c=Math.cos(u),f=Math.sin(u),p=o/100*Math.max(r,s)*.15;t.clearRect(0,0,r,s),t.globalAlpha=1/l;for(let d=0;d<l;d++){const v=(d/(l-1||1)-.5)*2,g=c*v*p,m=f*v*p;t.drawImage(i,g,m,r,s)}t.globalAlpha=1}}class nb extends fe{constructor(t){super(t),this.params={strength:2.9}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,r=i.getImageData(0,0,t,e),s=r.data,o=new Uint8ClampedArray(s.length),a=Math.max(.1,this.params.strength/10*8+.5);for(let l=0;l<e;l++)for(let u=0;u<t;u++){const c=(l*t+u)*4,f=u>0?(l*t+(u-1))*4:c,p=l>0?((l-1)*t+u)*4:c,d=(s[c]-s[f]+s[c]-s[p])*a*.5+128,v=(s[c+1]-s[f+1]+s[c+1]-s[p+1])*a*.5+128,g=(s[c+2]-s[f+2]+s[c+2]-s[p+2])*a*.5+128,m=.299*d+.587*v+.114*g;o[c]=m,o[c+1]=m,o[c+2]=m,o[c+3]=255}for(let l=0;l<o.length;l+=4){const u=o[l];o[l]=Math.min(255,u*1.05),o[l+1]=Math.min(255,u*.97),o[l+2]=Math.min(255,u*.88)}r.data.set(o),i.putImageData(r,0,0)}updateParams(t){this.params={...this.params,strength:t.strength??this.params.strength},this.render()}}class ib extends fe{constructor(t){super(t),this.params={colorModel:2,pattern:2,period:12.7,angle:75,antiAlias:16,turbulence:0,blocksize:-1,angleBoost:0}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=Math.max(2,this.params.period),u=(this.params.angle+this.params.angleBoost*10)*Math.PI/180,c=this.params.turbulence*l*.3,f=Math.pow(2,this.params.blocksize),p=Math.cos(u),d=Math.sin(u),v=(m,h)=>{const y=Math.min(t-1,Math.max(0,Math.round(m))),S=(Math.min(e-1,Math.max(0,Math.round(h)))*t+y)*4;return[s[S],s[S+1],s[S+2],s[S+3]]},g=this.params.pattern;for(let m=0;m<e;m++)for(let h=0;h<t;h++){let y=0,_=0;if(c>0){const lt=Math.sin((h+m*.7)*.1)*c;y=lt,_=lt*.6}const S=(h+y)*p-(m+_)*d,E=(h+y)*d+(m+_)*p,I=Math.floor(S/l)*l+l*.5,R=Math.floor(E/l)*l+l*.5,B=I*p+R*d,k=-I*d+R*p,[T,U,A]=v(B,k),N=(.299*T+.587*U+.114*A)/255,M=(S%l+l)%l/l,X=(E%l+l)%l/l,tt=M-.5,q=X-.5;let nt=!1;if(g===1)nt=Math.abs(tt)<N*.5*f;else if(g===0){const lt=N*.5*f;nt=tt*tt+q*q<lt*lt}else{const lt=N*.5*f;nt=Math.abs(tt)<lt&&Math.abs(q)<lt}const J=(m*t+h)*4;if(this.params.colorModel===0){const lt=nt?0:255;a[J]=a[J+1]=a[J+2]=lt,a[J+3]=255}else if(this.params.colorModel===1){const lt=nt?1:0;a[J]=Math.round(T*lt),a[J+1]=Math.round(U*lt),a[J+2]=Math.round(A*lt),a[J+3]=255}else{const lt=nt?20:240;a[J]=a[J+1]=a[J+2]=lt,a[J+3]=255}}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class rb extends fe{constructor(t){super(t),this.params={render:2,detailRadius:10.6,detailThreshold:10,shadingSteps:10,shadingSmoothness:10,edgeThreshold:1,edgeWidth:2.5,edgeOpacity:.26}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=Math.max(2,Math.round(this.params.shadingSteps)),a=this.params.shadingSmoothness*.5,l=Math.max(1,Math.round(this.params.edgeWidth)),u=this.params.edgeThreshold*30,c=this.params.edgeOpacity,f=this.params.render,p=new Uint8ClampedArray(s.length);for(let y=0;y<s.length;y+=4){for(let _=0;_<3;_++){const S=s[y+_],E=Math.round(S/255*(o-1))/(o-1)*255;p[y+_]=Math.min(255,E+(S-E)*a/(a+5))}p[y+3]=255}const d=new Float32Array(t*e);for(let y=0;y<t*e;y++){const _=y*4;d[y]=.299*s[_]+.587*s[_+1]+.114*s[_+2]}const v=new Uint8ClampedArray(t*e);for(let y=1;y<e-1;y++)for(let _=1;_<t-1;_++){const S=y*t+_,E=-d[S-t-1]+d[S-t+1]-2*d[S-1]+2*d[S+1]-d[S+t-1]+d[S+t+1],I=-d[S-t-1]-2*d[S-t]-d[S-t+1]+d[S+t-1]+2*d[S+t]+d[S+t+1];v[S]=Math.sqrt(E*E+I*I)>u?255:0}const g=new Uint8ClampedArray(v.length);if(l>0)for(let y=0;y<e;y++)for(let _=0;_<t;_++){let S=!1;for(let E=-l;E<=l&&!S;E++)for(let I=-l;I<=l&&!S;I++){const R=_+I,B=y+E;R>=0&&R<t&&B>=0&&B<e&&v[B*t+R]&&(S=!0)}g[y*t+_]=S?255:0}const m=i.createImageData(t,e),h=m.data;for(let y=0;y<t*e;y++){const _=y*4,S=g[y]>0;if(f===0)h[_]=p[_],h[_+1]=p[_+1],h[_+2]=p[_+2],h[_+3]=255;else if(f===1){const E=S?0:255;h[_]=h[_+1]=h[_+2]=E,h[_+3]=255}else S?(h[_]=Math.round(p[_]*(1-c)),h[_+1]=Math.round(p[_+1]*(1-c)),h[_+2]=Math.round(p[_+2]*(1-c))):(h[_]=p[_],h[_+1]=p[_+1],h[_+2]=p[_+2]),h[_+3]=255}i.putImageData(m,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class sb extends fe{constructor(t){super(t),this.params={lightColor:50,lightRange:73,lightIntensity:50}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.lightIntensity/100,u=this.params.lightRange/100,c=this.params.lightColor/100,f=t*.5,p=e*.5,d=Math.max(t,e)*u*.8,v=200+c*55,g=180+(1-Math.abs(c-.5)*2)*40,m=255-c*80;for(let h=0;h<e;h++)for(let y=0;y<t;y++){const _=(h*t+y)*4,S=Math.sqrt((y-f)**2+(h-p)**2),E=Math.exp(-(S*S)/(2*d*d))*l*1.2,I=s[_],R=s[_+1],B=s[_+2],k=Math.min(1,E*v/255),T=Math.min(1,E*g/255),U=Math.min(1,E*m/255),A=I/255,N=R/255,M=B/255,X=(2*A*k+A*A*(1-2*k))*255,tt=(2*N*T+N*N*(1-2*T))*255,q=(2*M*U+M*M*(1-2*U))*255;a[_]=Math.min(255,Math.max(0,I+(X-I)*E*2)),a[_+1]=Math.min(255,Math.max(0,R+(tt-R)*E*2)),a[_+2]=Math.min(255,Math.max(0,B+(q-B)*E*2)),a[_+3]=255}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class ab extends fe{constructor(t){super(t),this.params={comicType:0,color1:300,color2:300,gridNum:.14}}hsvToRgb(t,e,i){t=(t%360+360)%360;const r=i*e,s=r*(1-Math.abs(t/60%2-1)),o=i-r;let a=0,l=0,u=0;return t<60?(a=r,l=s,u=0):t<120?(a=s,l=r,u=0):t<180?(a=0,l=r,u=s):t<240?(a=0,l=s,u=r):t<300?(a=s,l=0,u=r):(a=r,l=0,u=s),[(a+o)*255,(l+o)*255,(u+o)*255]}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=Math.max(2,Math.round(this.params.gridNum*30+3)),u=this.params.comicType===1,[c,f,p]=this.hsvToRgb(this.params.color1,.8,.9),[d,v,g]=this.hsvToRgb(this.params.color2,.6,.7);for(let m=0;m<e;m++)for(let h=0;h<t;h++){const y=(m*t+h)*4,_=(.299*s[y]+.587*s[y+1]+.114*s[y+2])/255,S=h%l/l,E=m%l/l,I=S-.5,R=E-.5,B=_*.55,k=I*I+R*R<B*B,U=(h+m)%l/l<(1-_)*.6&&_<.7,A=h%l===0||m%l===0;let N,M,X;if(_>.85?N=M=X=255:_>.5?k?N=M=X=30:N=M=X=240:_>.2?U?N=M=X=20:N=M=X=220:N=M=X=15,A&&this.params.gridNum>.02&&(N=M=X=Math.min(N,80)),u){const tt=_;N=Math.round(N*(c/255*tt+d/255*(1-tt))*1.2),M=Math.round(M*(f/255*tt+v/255*(1-tt))*1.2),X=Math.round(X*(p/255*tt+g/255*(1-tt))*1.2)}a[y]=Math.min(255,Math.max(0,N)),a[y+1]=Math.min(255,Math.max(0,M)),a[y+2]=Math.min(255,Math.max(0,X)),a[y+3]=255}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class ob extends fe{constructor(t){super(t),this.params={centerX:.5,centerY:.39,size:76,convergence:20}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.centerX*t,u=this.params.centerY*e,c=Math.max(1,this.params.size),f=this.params.convergence/100,p=(d,v)=>{const g=Math.min(t-1,Math.max(0,Math.round(d))),h=(Math.min(e-1,Math.max(0,Math.round(v)))*t+g)*4;return[s[h],s[h+1],s[h+2],s[h+3]]};for(let d=0;d<e;d++)for(let v=0;v<t;v++){const g=v-l,m=d-u,h=Math.sqrt(g*g+m*m),y=c*Math.max(t,e)/100;if(h<y&&h>0){const _=h/y,E=(f>0?Math.pow(_,1-f*.8):Math.pow(_,1+Math.abs(f)*1.5))*y/h,I=l+g*E,R=u+m*E,[B,k,T,U]=p(I,R),A=(d*t+v)*4;a[A]=B,a[A+1]=k,a[A+2]=T,a[A+3]=U}else{const _=(d*t+v)*4;a[_]=s[_],a[_+1]=s[_+1],a[_+2]=s[_+2],a[_+3]=s[_+3]}}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class lb extends fe{constructor(t){super(t),this.params={radius:100,waveSpeed:4.9,waveWidth:55.1,waveHeight:1,wavePhase:0}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=t*.5,u=e*.5,c=this.params.radius/100*Math.max(t,e),f=Math.max(1,this.params.waveWidth)/100*c,p=this.params.waveHeight*Math.min(t,e)*.02,d=this.params.wavePhase*Math.PI/180,v=(g,m)=>{const h=Math.min(t-1,Math.max(0,Math.round(g))),_=(Math.min(e-1,Math.max(0,Math.round(m)))*t+h)*4;return[s[_],s[_+1],s[_+2],s[_+3]]};for(let g=0;g<e;g++)for(let m=0;m<t;m++){const h=m-l,y=g-u,_=Math.sqrt(h*h+y*y);if(_<c&&_>0){const S=_/f*Math.PI*2-d,E=Math.sin(S)*p*(1-_/c),I=h/_,R=y/_,B=m+I*E,k=g+R*E,[T,U,A,N]=v(B,k),M=(g*t+m)*4;a[M]=T,a[M+1]=U,a[M+2]=A,a[M+3]=N}else{const S=(g*t+m)*4;a[S]=s[S],a[S+1]=s[S+1],a[S+2]=s[S+2],a[S+3]=s[S+3]}}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class cb extends fe{constructor(t){super(t),this.params={waveType:0,waveHeight:10,waveWidth:40,direction:90,waveSpeed:1,phase:0}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.direction*Math.PI/180,u=this.params.waveHeight*Math.min(t,e)*.01,c=Math.max(1,this.params.waveWidth)*Math.min(t,e)*.01,f=this.params.phase*Math.PI/180,p=Math.round(this.params.waveType),d=Math.cos(l),v=Math.sin(l),g=h=>{const y=(h%(Math.PI*2)+Math.PI*2)%(Math.PI*2);return p===1?y<Math.PI?1:-1:p===2?y<Math.PI?y/Math.PI*2-1:3-y/Math.PI*2:Math.sin(h)},m=(h,y)=>{const _=Math.min(t-1,Math.max(0,Math.round(h))),E=(Math.min(e-1,Math.max(0,Math.round(y)))*t+_)*4;return[s[E],s[E+1],s[E+2],s[E+3]]};for(let h=0;h<e;h++)for(let y=0;y<t;y++){const S=(y*d+h*v)/c*Math.PI*2-f,E=g(S)*u,I=y+E*v,R=h-E*d,[B,k,T,U]=m(I,R),A=(h*t+y)*4;a[A]=B,a[A+1]=k,a[A+2]=T,a[A+3]=U}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class ub extends fe{constructor(t){super(t),this.params={centerX:.5,centerY:.5,radius:80,angle:120,smoothness:60}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.centerX*t,u=this.params.centerY*e,c=this.params.radius/100*Math.max(t,e)*.5,f=this.params.angle*Math.PI/180,p=Math.max(1,this.params.smoothness)/100,d=(v,g)=>{const m=Math.floor(v),h=Math.floor(g),y=Math.min(t-1,m+1),_=Math.min(e-1,h+1),S=v-m,E=g-h,I=Math.max(0,m),R=Math.max(0,y),B=Math.max(0,h),k=Math.max(0,_),T=(B*t+I)*4,U=(B*t+R)*4,A=(k*t+I)*4,N=(k*t+R)*4;return[s[T]*(1-S)*(1-E)+s[U]*S*(1-E)+s[A]*(1-S)*E+s[N]*S*E,s[T+1]*(1-S)*(1-E)+s[U+1]*S*(1-E)+s[A+1]*(1-S)*E+s[N+1]*S*E,s[T+2]*(1-S)*(1-E)+s[U+2]*S*(1-E)+s[A+2]*(1-S)*E+s[N+2]*S*E,255]};for(let v=0;v<e;v++)for(let g=0;g<t;g++){const m=g-l,h=v-u,y=Math.sqrt(m*m+h*h);if(y<c){const _=1-Math.pow(y/c,p*2+.1),S=f*_,E=Math.cos(S),I=Math.sin(S),R=l+m*E-h*I,B=u+m*I+h*E,[k,T,U,A]=d(R,B),N=(v*t+g)*4;a[N]=k,a[N+1]=T,a[N+2]=U,a[N+3]=A}else{const _=(v*t+g)*4;a[_]=s[_],a[_+1]=s[_+1],a[_+2]=s[_+2],a[_+3]=s[_+3]}}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class fb extends fe{constructor(t){super(t),this.params={glowCenterX:.5,glowCenterY:.5,glowIntensity:50,glowDensity:60}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.glowCenterX*t,u=this.params.glowCenterY*e,c=this.params.glowIntensity/100,f=this.params.glowDensity/100,p=new Float32Array(t*e);for(let _=0;_<t*e;_++)p[_]=(.299*s[_*4]+.587*s[_*4+1]+.114*s[_*4+2])/255;const d=new Float32Array(t*e);let v=0;for(let _=1;_<e-1;_++)for(let S=1;S<t-1;S++){const E=_*t+S,I=-p[E-t-1]+p[E-t+1]-2*p[E-1]+2*p[E+1]-p[E+t-1]+p[E+t+1],R=-p[E-t-1]-2*p[E-t]-p[E-t+1]+p[E+t-1]+2*p[E+t]+p[E+t+1];d[E]=Math.sqrt(I*I+R*R),d[E]>v&&(v=d[E])}const g=Math.round(f*12+2),m=new Float32Array(t*e),h=new Float32Array(t*e);for(let _=0;_<e;_++)for(let S=0;S<t;S++){let E=0,I=0;for(let R=-g;R<=g;R++){const B=Math.min(t-1,Math.max(0,S+R));E+=d[_*t+B],I++}h[_*t+S]=E/I}for(let _=0;_<e;_++)for(let S=0;S<t;S++){let E=0,I=0;for(let R=-g;R<=g;R++){const B=Math.min(e-1,Math.max(0,_+R));E+=h[B*t+S],I++}m[_*t+S]=E/I}const y=Math.sqrt(l*l+u*u)*1.5;for(let _=0;_<e;_++)for(let S=0;S<t;S++){const E=(_*t+S)*4,I=_*t+S,R=v>0?m[I]/v:0,B=S-l,k=_-u,T=1-Math.sqrt(B*B+k*k)/y,U=R*c*Math.max(0,T)*3;a[E]=Math.min(255,s[E]+U*255),a[E+1]=Math.min(255,s[E+1]+U*255),a[E+2]=Math.min(255,s[E+2]+U*255),a[E+3]=255}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class hb extends fe{constructor(t){super(t),this.params={shape:0,centerX:.5,centerY:.5,magnification:108,size:154,feather:71}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=new Uint8ClampedArray(s),a=this.params.centerX*t,l=this.params.centerY*e,u=this.params.size/100*Math.min(t,e)*.5,c=this.params.magnification/100,f=this.params.feather/100,p=Math.round(this.params.shape)===0,d=(g,m)=>{const h=Math.floor(g),y=Math.floor(m),_=Math.min(t-1,h+1),S=Math.min(e-1,y+1),E=g-h,I=m-y,R=Math.max(0,h),B=Math.max(0,y),k=Math.min(t-1,_),T=Math.min(e-1,S),U=(B*t+R)*4,A=(B*t+k)*4,N=(T*t+R)*4,M=(T*t+k)*4;return[s[U]*(1-E)*(1-I)+s[A]*E*(1-I)+s[N]*(1-E)*I+s[M]*E*I,s[U+1]*(1-E)*(1-I)+s[A+1]*E*(1-I)+s[N+1]*(1-E)*I+s[M+1]*E*I,s[U+2]*(1-E)*(1-I)+s[A+2]*E*(1-I)+s[N+2]*(1-E)*I+s[M+2]*E*I,255]};for(let g=0;g<e;g++)for(let m=0;m<t;m++){const h=m-a,y=g-l;let _=0;if(p?_=Math.sqrt(h*h+y*y)/u:_=Math.max(Math.abs(h),Math.abs(y))/u,_>1)continue;const S=1-f,E=_<S?1:1-(_-S)/(f+.001),I=1/c,R=a+h*I,B=l+y*I,[k,T,U]=d(R,B),A=(g*t+m)*4,N=o[A],M=o[A+1],X=o[A+2];o[A]=Math.round(k*E+N*(1-E)),o[A+1]=Math.round(T*E+M*(1-E)),o[A+2]=Math.round(U*E+X*(1-E)),o[A+3]=255}const v=i.createImageData(t,e);v.data.set(o),i.putImageData(v,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class db extends fe{constructor(t){super(t),this.params={threshold:.2,strength:1.82,length:1,centerX:.5,centerY:.5}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.centerX*t,u=this.params.centerY*e,c=this.params.threshold,f=this.params.strength,p=this.params.length,d=new Float32Array(t*e);for(let y=0;y<t*e;y++){const _=(.299*s[y*4]+.587*s[y*4+1]+.114*s[y*4+2])/255;d[y]=_>c?(_-c)/(1-c):0}const v=Math.round(p*60+20),g=.97,m=new Float32Array(t*e);for(let y=0;y<e;y++)for(let _=0;_<t;_++){let S=0,E=_,I=y;const R=(l-_)/v,B=(u-y)/v;let k=1;for(let T=0;T<v;T++){const U=Math.min(t-1,Math.max(0,Math.round(E))),A=Math.min(e-1,Math.max(0,Math.round(I)));S+=d[A*t+U]*k,k*=g,E+=R,I+=B}m[y*t+_]=S/v}let h=0;for(let y=0;y<m.length;y++)m[y]>h&&(h=m[y]);if(h>0)for(let y=0;y<m.length;y++)m[y]/=h;for(let y=0;y<t*e;y++){const _=y*4,S=m[y]*f;a[_]=Math.min(255,s[_]+S*255),a[_+1]=Math.min(255,s[_+1]+S*245),a[_+2]=Math.min(255,s[_+2]+S*220),a[_+3]=255}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class pb extends fe{constructor(t){super(t),this.params={threshold:60,glowRadius:40,glowStrength:60,glowColor:0}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.threshold/100,u=Math.round(this.params.glowRadius/100*Math.min(t,e)*.08+2),c=this.params.glowStrength/100,f=Math.round(this.params.glowColor),p=f===1?1:f===2?.7:1,d=f===1?.9:f===2?.85:1,v=f===1?.6:1,g=new Float32Array(t*e*3);for(let _=0;_<t*e;_++){const S=s[_*4]/255,E=s[_*4+1]/255,I=s[_*4+2]/255,R=.299*S+.587*E+.114*I,B=R>l?(R-l)/(1-l+.001):0;g[_*3]=S*B,g[_*3+1]=E*B,g[_*3+2]=I*B}const m=new Float32Array(t*e*3),h=new Float32Array(t*e*3),y=g.slice();for(let _=0;_<e;_++)for(let S=0;S<t;S++){let E=0,I=0,R=0,B=0;for(let T=-u;T<=u;T++){const U=Math.min(t-1,Math.max(0,S+T)),A=(_*t+U)*3;E+=y[A],I+=y[A+1],R+=y[A+2],B++}const k=(_*t+S)*3;h[k]=E/B,h[k+1]=I/B,h[k+2]=R/B}for(let _=0;_<e;_++)for(let S=0;S<t;S++){let E=0,I=0,R=0,B=0;for(let T=-u;T<=u;T++){const A=(Math.min(e-1,Math.max(0,_+T))*t+S)*3;E+=h[A],I+=h[A+1],R+=h[A+2],B++}const k=(_*t+S)*3;m[k]=E/B,m[k+1]=I/B,m[k+2]=R/B}for(let _=0;_<t*e;_++){const S=_*4,E=m[_*3]*p*c,I=m[_*3+1]*d*c,R=m[_*3+2]*v*c,B=s[S]/255,k=s[S+1]/255,T=s[S+2]/255;a[S]=Math.min(255,Math.round((1-(1-B)*(1-E))*255)),a[S+1]=Math.min(255,Math.round((1-(1-k)*(1-I))*255)),a[S+2]=Math.min(255,Math.round((1-(1-T)*(1-R))*255)),a[S+3]=255}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}const mb={class:"plugin-preview"},gb={class:"app-body"},_b={__name:"PluginPreview",setup(n){const t=ie("wave-blur"),e=ie(!1),i=ie(!1),r=ie(!1),s=ie(!0),o=ie(null),a=ie(0),l=ie(0);let u=null,c=null;const f={"wave-blur":{name:"WaveBlurring",nameZh:"波形模糊",EffectClass:null,defaults:{horizontalChromatic:70,distortion:50,speed:60,size:60,blur:60},params:[{key:"horizontalChromatic",label:"AdjustHorizontalChromatic",desc:"水平色差强度",min:0,max:100},{key:"distortion",label:"AdjustDistortion",desc:"扭曲程度",min:0,max:100},{key:"speed",label:"AdjustSpeed",desc:"动画速度",min:0,max:100},{key:"size",label:"AdjustSize",desc:"波形尺寸",min:0,max:100},{key:"blur",label:"AdjustBlur",desc:"模糊强度",min:0,max:100}]},"directional-blur":{name:"Directional Blur",nameZh:"定向模糊",EffectClass:eb,defaults:{length:30,direction:0},params:[{key:"length",label:"Blur Length",desc:"模糊长度",min:0,max:100},{key:"direction",label:"Blur Direction",desc:"模糊方向（角度，0=水平）",min:0,max:360,step:1}]},"radial-blur":{name:"Radial Blur",nameZh:"径向模糊",EffectClass:tb,defaults:{mode:0,intensity:30,center:50},params:[{key:"mode",label:"Mode",desc:"0 = 旋转模糊  /  1 = 缩放模糊",min:0,max:1,step:1},{key:"intensity",label:"Intensity",desc:"模糊强度",min:0,max:100},{key:"center",label:"Center",desc:"中心位置 (0=左上  100=右下)",min:0,max:100}]},"basic-mosaic":{name:"Basic Mosaic",nameZh:"基础马赛克",EffectClass:WS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"马赛克块大小",min:1,max:100}]},"blur-mosaic-fx":{name:"Blur Mosaic",nameZh:"模糊马赛克",EffectClass:XS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"模糊程度",min:1,max:100}]},"brick-mosaic":{name:"Brick Mosaic",nameZh:"砖块马赛克",EffectClass:qS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"砖块大小",min:1,max:100}]},"colorful-mosaic-1":{name:"Colorful MosaicI",nameZh:"彩色马赛克 I",EffectClass:jS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"晶格大小",min:1,max:100}]},"colorful-mosaic-2":{name:"Colorful MosaicII",nameZh:"彩色马赛克 II",EffectClass:$S,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"气泡大小",min:1,max:100}]},"colorful-mosaic-3":{name:"Colorful MosaicIII",nameZh:"彩色马赛克 III",EffectClass:YS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"三角片大小",min:1,max:100}]},"glass-mosaic-1":{name:"Glass MosaicI",nameZh:"玻璃马赛克 I",EffectClass:ZS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"玻璃格大小",min:1,max:100}]},"glass-mosaic-2":{name:"Glass MosaicII",nameZh:"玻璃马赛克 II",EffectClass:KS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"磨砂格大小",min:1,max:100}]},"hexagon-mosaic":{name:"Hexagon Mosaic",nameZh:"六边形马赛克",EffectClass:JS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"六边形大小",min:1,max:100}]},"star-mosaic":{name:"Star Mosaic",nameZh:"星形马赛克",EffectClass:QS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"星形大小",min:1,max:100}]},engrave:{name:"Engrave",nameZh:"雕刻",EffectClass:nb,defaults:{strength:2.9},params:[{key:"strength",label:"Strength",desc:"雕刻强度",min:0,max:10,step:.1}]},newsprint:{name:"Newsprint",nameZh:"报纸印刷",EffectClass:ib,defaults:{colorModel:2,pattern:2,period:12.7,angle:75,antiAlias:16,turbulence:0,blocksize:-1,angleBoost:0},params:[{key:"colorModel",label:"ColorModel",desc:"颜色模式 (0=黑白 1=彩色 2=灰度半调)",min:0,max:2,step:1},{key:"pattern",label:"Pattern",desc:"图案类型 (0=圆点 1=线条 2=方块)",min:0,max:2,step:1},{key:"period",label:"Period",desc:"网格周期大小",min:1,max:30,step:.1},{key:"angle",label:"Angle",desc:"网格旋转角度",min:0,max:180,step:1},{key:"turbulence",label:"Turbulence",desc:"扰动变形",min:0,max:5,step:.1},{key:"blocksize",label:"Blocksize",desc:"图案缩放 (-2~2)",min:-2,max:2,step:.1},{key:"angleBoost",label:"AngleBoost",desc:"额外角度叠加",min:0,max:5,step:.1}]},cartoon:{name:"Cartoon",nameZh:"卡通",EffectClass:rb,defaults:{render:2,detailRadius:10.6,detailThreshold:10,shadingSteps:10,shadingSmoothness:10,edgeThreshold:1,edgeWidth:2.5,edgeOpacity:.26},params:[{key:"render",label:"Render",desc:"渲染模式 (0=仅填色 1=仅边缘 2=填色+边缘)",min:0,max:2,step:1},{key:"detailRadius",label:"DetailRadius",desc:"细节平滑半径",min:1,max:30,step:.1},{key:"detailThreshold",label:"DetailThreshold",desc:"细节阈值",min:0,max:20,step:.1},{key:"shadingSteps",label:"ShadingSteps",desc:"色阶数量",min:2,max:16,step:1},{key:"shadingSmoothness",label:"ShadingSmoothness",desc:"色阶过渡平滑",min:0,max:20,step:.1},{key:"edgeThreshold",label:"EdgeThreshold",desc:"边缘检测阈值",min:0,max:5,step:.1},{key:"edgeWidth",label:"EdgeWidth",desc:"边缘线宽度",min:0,max:8,step:.1},{key:"edgeOpacity",label:"EdgeOpacity",desc:"边缘线透明度",min:0,max:1,step:.01}]},"film-soft-light":{name:"FilmSoftLight",nameZh:"胶片柔光",EffectClass:sb,defaults:{lightColor:50,lightRange:73,lightIntensity:50},params:[{key:"lightColor",label:"LightColor",desc:"光色偏移 (0=冷蓝 100=暖橙)",min:0,max:100},{key:"lightRange",label:"LightRange",desc:"光晕扩散范围",min:0,max:100},{key:"lightIntensity",label:"LightIntensity",desc:"光晕强度",min:0,max:100}]},comic:{name:"Comic",nameZh:"漫画",EffectClass:ab,defaults:{comicType:0,color1:300,color2:300,gridNum:.14},params:[{key:"comicType",label:"ComicType",desc:"漫画类型 (0=黑白 1=彩色)",min:0,max:1,step:1},{key:"color1",label:"Color1",desc:"高光色相 (0-360°)",min:0,max:360,step:1},{key:"color2",label:"Color2",desc:"阴影色相 (0-360°)",min:0,max:360,step:1},{key:"gridNum",label:"GridNum",desc:"网格密度",min:0,max:1,step:.01}]},"cc-lens":{name:"CCLens",nameZh:"鱼眼",EffectClass:ob,defaults:{centerX:.5,centerY:.39,size:76,convergence:20},params:[{key:"centerX",label:"CenterX",desc:"镜头中心 X",min:0,max:1,step:.01},{key:"centerY",label:"CenterY",desc:"镜头中心 Y",min:0,max:1,step:.01},{key:"size",label:"Size",desc:"镜头大小",min:0,max:200},{key:"convergence",label:"Convergence",desc:"汇聚 (+凸起 / -凹陷)",min:-100,max:100}]},ripple:{name:"Ripple",nameZh:"波纹",EffectClass:lb,defaults:{radius:100,waveSpeed:4.9,waveWidth:55.1,waveHeight:1,wavePhase:0},params:[{key:"radius",label:"半径",desc:"波纹影响半径",min:0,max:200},{key:"waveWidth",label:"波形宽度",desc:"相邻波峰间距",min:1,max:100,step:.1},{key:"waveHeight",label:"波形高度",desc:"波纹位移幅度",min:0,max:5,step:.1},{key:"wavePhase",label:"波纹相",desc:"波纹起始相位 (°)",min:0,max:360,step:1}]},"wave-warp":{name:"WaveWarp",nameZh:"波形变形",EffectClass:cb,defaults:{waveType:0,waveHeight:10,waveWidth:40,direction:90,waveSpeed:1,phase:0},params:[{key:"waveType",label:"波浪类型",desc:"0=正弦 1=方波 2=三角",min:0,max:2,step:1},{key:"waveHeight",label:"波形高度",desc:"位移幅度",min:0,max:100,step:.5},{key:"waveWidth",label:"波形宽度",desc:"波长（像素比）",min:1,max:200,step:1},{key:"direction",label:"方向",desc:"波形传播方向 (°)",min:0,max:360,step:1},{key:"phase",label:"相位",desc:"波形起始相位 (°)",min:0,max:360,step:1}]},"twirl-distort":{name:"TwirlDistort",nameZh:"旋转扭曲",EffectClass:ub,defaults:{centerX:.5,centerY:.5,radius:80,angle:120,smoothness:60},params:[{key:"centerX",label:"CenterX",desc:"旋转中心 X",min:0,max:1,step:.01},{key:"centerY",label:"CenterY",desc:"旋转中心 Y",min:0,max:1,step:.01},{key:"radius",label:"Radius",desc:"影响半径",min:0,max:200},{key:"angle",label:"Angle",desc:"扭曲角度 (°)",min:-360,max:360,step:1},{key:"smoothness",label:"Smoothness",desc:"边缘过渡平滑度",min:0,max:100}]},"edge-glow":{name:"EdgeGlow",nameZh:"边缘辉光",EffectClass:fb,defaults:{glowCenterX:.5,glowCenterY:.5,glowIntensity:50,glowDensity:60},params:[{key:"glowCenterX",label:"GlowCenterX",desc:"光源中心 X",min:0,max:1,step:.01},{key:"glowCenterY",label:"GlowCenterY",desc:"光源中心 Y",min:0,max:1,step:.01},{key:"glowIntensity",label:"Intensity",desc:"辉光亮度",min:0,max:100},{key:"glowDensity",label:"Density",desc:"辉光扩散密度",min:0,max:100}]},enlargement:{name:"Enlargement",nameZh:"局部放大",EffectClass:hb,defaults:{shape:0,centerX:.5,centerY:.5,magnification:108,size:154,feather:71},params:[{key:"shape",label:"Shape",desc:"形状 (0=圆形 1=方形)",min:0,max:1,step:1},{key:"centerX",label:"CenterX",desc:"放大中心 X",min:0,max:1,step:.01},{key:"centerY",label:"CenterY",desc:"放大中心 Y",min:0,max:1,step:.01},{key:"magnification",label:"Magnification",desc:"放大倍数 (%)",min:50,max:400},{key:"size",label:"Size",desc:"镜头大小",min:0,max:300},{key:"feather",label:"Feather",desc:"边缘羽化",min:0,max:100}]},"shaft-light":{name:"ShaftLight",nameZh:"光柱",EffectClass:db,defaults:{threshold:.2,strength:1.82,length:1,centerX:.5,centerY:.5},params:[{key:"threshold",label:"Threshold",desc:"亮度提取阈值",min:0,max:1,step:.01},{key:"strength",label:"Strength",desc:"光柱强度",min:0,max:5,step:.01},{key:"length",label:"Length",desc:"光线延伸长度",min:0,max:2,step:.01},{key:"centerX",label:"CenterX",desc:"光源中心 X",min:0,max:1,step:.01},{key:"centerY",label:"CenterY",desc:"光源中心 Y",min:0,max:1,step:.01}]},"overall-glow":{name:"OverallGlow",nameZh:"泛光",EffectClass:pb,defaults:{threshold:60,glowRadius:40,glowStrength:60,glowColor:0},params:[{key:"threshold",label:"Threshold",desc:"高光提取阈值",min:0,max:100},{key:"glowRadius",label:"GlowRadius",desc:"光晕扩散半径",min:0,max:100},{key:"glowStrength",label:"GlowStrength",desc:"光晕强度",min:0,max:100},{key:"glowColor",label:"GlowColor",desc:"光晕色调 (0=白 1=暖 2=冷)",min:0,max:2,step:1}]}},p=ve(()=>f[t.value]||null),d=ve(()=>{var A;return((A=p.value)==null?void 0:A.params)||[]}),v=ve(()=>{for(const A of aa)if(A.plugins.find(N=>N.id===t.value))return A.name;return""}),g=ie({...f["wave-blur"].defaults});rs(g,A=>{u==null||u.updateParams(A)},{deep:!0}),Cl(()=>{Sr(()=>{y("wave-blur"),S()})});function m(A,N){const M=f[A];if(!M||!N)return null;if(A==="wave-blur"){const X=new VS(N,null);return X.init(),X}else if(M.EffectClass)return new M.EffectClass(N);return null}function h(){const A=o.value;return A?s.value?A.webglCanvas:A.canvas2d:null}function y(A){var M;(M=u==null?void 0:u.destroy)==null||M.call(u),u=null,s.value=A==="wave-blur";const N=h();u=m(A,N),c&&(u==null||u.loadImage(c)),e.value&&_()}function _(){var N;const A=(N=o.value)==null?void 0:N.originalCanvas;!A||!c||(A.width=a.value||c.naturalWidth||900,A.height=l.value||c.naturalHeight||600,A.getContext("2d").drawImage(c,0,0,A.width,A.height))}function S(){const A=new Image;A.crossOrigin="anonymous",A.src="/kskr-preview/demo.jpg",A.onload=()=>I(A),A.onerror=()=>E()}function E(){const A=document.createElement("canvas");A.width=900,A.height=600;const N=A.getContext("2d"),M=N.createLinearGradient(0,0,900,600);M.addColorStop(0,"#101010"),M.addColorStop(1,"#1c1c1c"),N.fillStyle=M,N.fillRect(0,0,900,600),N.strokeStyle="rgba(255,255,255,.03)",N.lineWidth=1;for(let q=0;q<=900;q+=50)N.beginPath(),N.moveTo(q,0),N.lineTo(q,600),N.stroke();for(let q=0;q<=600;q+=50)N.beginPath(),N.moveTo(0,q),N.lineTo(900,q),N.stroke();const X=N.createRadialGradient(450,300,20,450,300,260);X.addColorStop(0,"rgba(255,255,255,.06)"),X.addColorStop(1,"rgba(255,255,255,0)"),N.fillStyle=X,N.fillRect(0,0,900,600),N.fillStyle="rgba(255,255,255,.18)",N.font='bold 36px "Space Grotesk", sans-serif',N.textAlign="center",N.textBaseline="middle",N.fillText("KSkr",450,278),N.font='15px "Inter", sans-serif',N.fillStyle="rgba(255,255,255,.08)",N.fillText("上传图片以开始预览",450,326);const tt=new Image;tt.onload=()=>I(tt),tt.src=A.toDataURL()}function I(A){c=A,a.value=A.naturalWidth||A.width||900,l.value=A.naturalHeight||A.height||600,r.value=!0,Sr(()=>{u==null||u.loadImage(A),e.value&&_()})}function R(A){var X,tt,q,nt,J;const N=((tt=(X=A==null?void 0:A.target)==null?void 0:X.files)==null?void 0:tt[0])||((nt=(q=A==null?void 0:A.dataTransfer)==null?void 0:q.files)==null?void 0:nt[0])||((J=A==null?void 0:A.files)==null?void 0:J[0]);if(!N)return;const M=new FileReader;M.onload=lt=>{const $=new Image;$.onload=()=>I($),$.src=lt.target.result},M.readAsDataURL(N)}function B(){var A;g.value={...((A=p.value)==null?void 0:A.defaults)||{}}}function k(){e.value=!e.value,i.value=!1,e.value&&c&&Sr(()=>_())}function T(){i.value=!i.value,i.value&&c&&_()}function U(A){t.value=A.id;const N=f[A.id];N&&(g.value={...N.defaults}),Sr(()=>y(A.id))}return(A,N)=>{var M;return Bt(),Gt("div",mb,[st("div",gb,[Se(q_,{onSelectPlugin:U}),p.value?(Bt(),Th(f0,{key:0,plugin:p.value,params:d.value,modelValue:g.value,"onUpdate:modelValue":N[0]||(N[0]=X=>g.value=X),compareMode:e.value,onReset:B,onUpload:R,onToggleCompare:k},null,8,["plugin","params","modelValue","compareMode"])):me("",!0),Se(T0,{ref_key:"previewArea",ref:o,compareMode:e.value,hasImage:r.value,isWebGL:s.value,showingOriginal:i.value,imageWidth:a.value,imageHeight:l.value,currentCategory:v.value,currentPlugin:((M=p.value)==null?void 0:M.name)||"",onUpload:R,onToggleOriginal:T},null,8,["compareMode","hasImage","isWebGL","showingOriginal","imageWidth","imageHeight","currentCategory","currentPlugin"])])])}}},vb=tr(_b,[["__scopeId","data-v-5438a76b"]]);var ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xb(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function ea(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var wd={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(n,t){(function(e){n.exports=e()})(function(){return function e(i,r,s){function o(u,c){if(!r[u]){if(!i[u]){var f=typeof ea=="function"&&ea;if(!c&&f)return f(u,!0);if(a)return a(u,!0);var p=new Error("Cannot find module '"+u+"'");throw p.code="MODULE_NOT_FOUND",p}var d=r[u]={exports:{}};i[u][0].call(d.exports,function(v){var g=i[u][1][v];return o(g||v)},d,d.exports,e,i,r,s)}return r[u].exports}for(var a=typeof ea=="function"&&ea,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(e,i,r){var s=e("./utils"),o=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var u,c,f,p,d,v,g,m=[],h=0,y=l.length,_=y,S=s.getTypeOf(l)!=="string";h<l.length;)_=y-h,f=S?(u=l[h++],c=h<y?l[h++]:0,h<y?l[h++]:0):(u=l.charCodeAt(h++),c=h<y?l.charCodeAt(h++):0,h<y?l.charCodeAt(h++):0),p=u>>2,d=(3&u)<<4|c>>4,v=1<_?(15&c)<<2|f>>6:64,g=2<_?63&f:64,m.push(a.charAt(p)+a.charAt(d)+a.charAt(v)+a.charAt(g));return m.join("")},r.decode=function(l){var u,c,f,p,d,v,g=0,m=0,h="data:";if(l.substr(0,h.length)===h)throw new Error("Invalid base64 input, it looks like a data url.");var y,_=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&_--,l.charAt(l.length-2)===a.charAt(64)&&_--,_%1!=0)throw new Error("Invalid base64 input, bad content length.");for(y=o.uint8array?new Uint8Array(0|_):new Array(0|_);g<l.length;)u=a.indexOf(l.charAt(g++))<<2|(p=a.indexOf(l.charAt(g++)))>>4,c=(15&p)<<4|(d=a.indexOf(l.charAt(g++)))>>2,f=(3&d)<<6|(v=a.indexOf(l.charAt(g++))),y[m++]=u,d!==64&&(y[m++]=c),v!==64&&(y[m++]=f);return y}},{"./support":30,"./utils":32}],2:[function(e,i,r){var s=e("./external"),o=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function u(c,f,p,d,v){this.compressedSize=c,this.uncompressedSize=f,this.crc32=p,this.compression=d,this.compressedContent=v}u.prototype={getContentWorker:function(){var c=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),f=this;return c.on("end",function(){if(this.streamInfo.data_length!==f.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),c},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},u.createWorkerFrom=function(c,f,p){return c.pipe(new a).pipe(new l("uncompressedSize")).pipe(f.compressWorker(p)).pipe(new l("compressedSize")).withStreamInfo("compression",f)},i.exports=u},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,i,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,i,r){var s=e("./utils"),o=function(){for(var a,l=[],u=0;u<256;u++){a=u;for(var c=0;c<8;c++)a=1&a?3988292384^a>>>1:a>>>1;l[u]=a}return l}();i.exports=function(a,l){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?function(u,c,f,p){var d=o,v=p+f;u^=-1;for(var g=p;g<v;g++)u=u>>>8^d[255&(u^c[g])];return-1^u}(0|l,a,a.length,0):function(u,c,f,p){var d=o,v=p+f;u^=-1;for(var g=p;g<v;g++)u=u>>>8^d[255&(u^c.charCodeAt(g))];return-1^u}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(e,i,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,i,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),i.exports={Promise:s}},{lie:37}],7:[function(e,i,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=e("pako"),a=e("./utils"),l=e("./stream/GenericWorker"),u=s?"uint8array":"array";function c(f,p){l.call(this,"FlateWorker/"+f),this._pako=null,this._pakoAction=f,this._pakoOptions=p,this.meta={}}r.magic="\b\0",a.inherits(c,l),c.prototype.processChunk=function(f){this.meta=f.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(u,f.data),!1)},c.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},c.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},c.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var f=this;this._pako.onData=function(p){f.push({data:p,meta:f.meta})}},r.compressWorker=function(f){return new c("Deflate",f)},r.uncompressWorker=function(){return new c("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,i,r){function s(d,v){var g,m="";for(g=0;g<v;g++)m+=String.fromCharCode(255&d),d>>>=8;return m}function o(d,v,g,m,h,y){var _,S,E=d.file,I=d.compression,R=y!==u.utf8encode,B=a.transformTo("string",y(E.name)),k=a.transformTo("string",u.utf8encode(E.name)),T=E.comment,U=a.transformTo("string",y(T)),A=a.transformTo("string",u.utf8encode(T)),N=k.length!==E.name.length,M=A.length!==T.length,X="",tt="",q="",nt=E.dir,J=E.date,lt={crc32:0,compressedSize:0,uncompressedSize:0};v&&!g||(lt.crc32=d.crc32,lt.compressedSize=d.compressedSize,lt.uncompressedSize=d.uncompressedSize);var $=0;v&&($|=8),R||!N&&!M||($|=2048);var K=0,xt=0;nt&&(K|=16),h==="UNIX"?(xt=798,K|=function(D,Y){var W=D;return D||(W=Y?16893:33204),(65535&W)<<16}(E.unixPermissions,nt)):(xt=20,K|=function(D){return 63&(D||0)}(E.dosPermissions)),_=J.getUTCHours(),_<<=6,_|=J.getUTCMinutes(),_<<=5,_|=J.getUTCSeconds()/2,S=J.getUTCFullYear()-1980,S<<=4,S|=J.getUTCMonth()+1,S<<=5,S|=J.getUTCDate(),N&&(tt=s(1,1)+s(c(B),4)+k,X+="up"+s(tt.length,2)+tt),M&&(q=s(1,1)+s(c(U),4)+A,X+="uc"+s(q.length,2)+q);var et="";return et+=`
\0`,et+=s($,2),et+=I.magic,et+=s(_,2),et+=s(S,2),et+=s(lt.crc32,4),et+=s(lt.compressedSize,4),et+=s(lt.uncompressedSize,4),et+=s(B.length,2),et+=s(X.length,2),{fileRecord:f.LOCAL_FILE_HEADER+et+B+X,dirRecord:f.CENTRAL_FILE_HEADER+s(xt,2)+et+s(U.length,2)+"\0\0\0\0"+s(K,4)+s(m,4)+B+X+U}}var a=e("../utils"),l=e("../stream/GenericWorker"),u=e("../utf8"),c=e("../crc32"),f=e("../signature");function p(d,v,g,m){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=v,this.zipPlatform=g,this.encodeFileName=m,this.streamFiles=d,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(p,l),p.prototype.push=function(d){var v=d.meta.percent||0,g=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(d):(this.bytesWritten+=d.data.length,l.prototype.push.call(this,{data:d.data,meta:{currentFile:this.currentFile,percent:g?(v+100*(g-m-1))/g:100}}))},p.prototype.openedSource=function(d){this.currentSourceOffset=this.bytesWritten,this.currentFile=d.file.name;var v=this.streamFiles&&!d.file.dir;if(v){var g=o(d,v,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},p.prototype.closedSource=function(d){this.accumulate=!1;var v=this.streamFiles&&!d.file.dir,g=o(d,v,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),v)this.push({data:function(m){return f.DATA_DESCRIPTOR+s(m.crc32,4)+s(m.compressedSize,4)+s(m.uncompressedSize,4)}(d),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},p.prototype.flush=function(){for(var d=this.bytesWritten,v=0;v<this.dirRecords.length;v++)this.push({data:this.dirRecords[v],meta:{percent:100}});var g=this.bytesWritten-d,m=function(h,y,_,S,E){var I=a.transformTo("string",E(S));return f.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(h,2)+s(h,2)+s(y,4)+s(_,4)+s(I.length,2)+I}(this.dirRecords.length,g,d,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},p.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},p.prototype.registerPrevious=function(d){this._sources.push(d);var v=this;return d.on("data",function(g){v.processChunk(g)}),d.on("end",function(){v.closedSource(v.previous.streamInfo),v._sources.length?v.prepareNextSource():v.end()}),d.on("error",function(g){v.error(g)}),this},p.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},p.prototype.error=function(d){var v=this._sources;if(!l.prototype.error.call(this,d))return!1;for(var g=0;g<v.length;g++)try{v[g].error(d)}catch{}return!0},p.prototype.lock=function(){l.prototype.lock.call(this);for(var d=this._sources,v=0;v<d.length;v++)d[v].lock()},i.exports=p},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,i,r){var s=e("../compressions"),o=e("./ZipFileWorker");r.generateWorker=function(a,l,u){var c=new o(l.streamFiles,u,l.platform,l.encodeFileName),f=0;try{a.forEach(function(p,d){f++;var v=function(y,_){var S=y||_,E=s[S];if(!E)throw new Error(S+" is not a valid compression method !");return E}(d.options.compression,l.compression),g=d.options.compressionOptions||l.compressionOptions||{},m=d.dir,h=d.date;d._compressWorker(v,g).withStreamInfo("file",{name:p,dir:m,date:h,comment:d.comment||"",unixPermissions:d.unixPermissions,dosPermissions:d.dosPermissions}).pipe(c)}),c.entriesCount=f}catch(p){c.error(p)}return c}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,i,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=e("./external"),i.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,i,r){var s=e("./utils"),o=e("./external"),a=e("./utf8"),l=e("./zipEntries"),u=e("./stream/Crc32Probe"),c=e("./nodejsUtils");function f(p){return new o.Promise(function(d,v){var g=p.decompressed.getContentWorker().pipe(new u);g.on("error",function(m){v(m)}).on("end",function(){g.streamInfo.crc32!==p.decompressed.crc32?v(new Error("Corrupted zip : CRC32 mismatch")):d()}).resume()})}i.exports=function(p,d){var v=this;return d=s.extend(d||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),c.isNode&&c.isStream(p)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",p,!0,d.optimizedBinaryString,d.base64).then(function(g){var m=new l(d);return m.load(g),m}).then(function(g){var m=[o.Promise.resolve(g)],h=g.files;if(d.checkCRC32)for(var y=0;y<h.length;y++)m.push(f(h[y]));return o.Promise.all(m)}).then(function(g){for(var m=g.shift(),h=m.files,y=0;y<h.length;y++){var _=h[y],S=_.fileNameStr,E=s.resolve(_.fileNameStr);v.file(E,_.decompressed,{binary:!0,optimizedBinaryString:!0,date:_.date,dir:_.dir,comment:_.fileCommentStr.length?_.fileCommentStr:null,unixPermissions:_.unixPermissions,dosPermissions:_.dosPermissions,createFolders:d.createFolders}),_.dir||(v.file(E).unsafeOriginalName=S)}return m.zipComment.length&&(v.comment=m.zipComment),v})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,i,r){var s=e("../utils"),o=e("../stream/GenericWorker");function a(l,u){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(u)}s.inherits(a,o),a.prototype._bindStream=function(l){var u=this;(this._stream=l).pause(),l.on("data",function(c){u.push({data:c,meta:{percent:0}})}).on("error",function(c){u.isPaused?this.generatedError=c:u.error(c)}).on("end",function(){u.isPaused?u._upstreamEnded=!0:u.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,i,r){var s=e("readable-stream").Readable;function o(a,l,u){s.call(this,l),this._helper=a;var c=this;a.on("data",function(f,p){c.push(f)||c._helper.pause(),u&&u(p)}).on("error",function(f){c.emit("error",f)}).on("end",function(){c.push(null)})}e("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},i.exports=o},{"../utils":32,"readable-stream":16}],14:[function(e,i,r){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,i,r){function s(E,I,R){var B,k=a.getTypeOf(I),T=a.extend(R||{},c);T.date=T.date||new Date,T.compression!==null&&(T.compression=T.compression.toUpperCase()),typeof T.unixPermissions=="string"&&(T.unixPermissions=parseInt(T.unixPermissions,8)),T.unixPermissions&&16384&T.unixPermissions&&(T.dir=!0),T.dosPermissions&&16&T.dosPermissions&&(T.dir=!0),T.dir&&(E=h(E)),T.createFolders&&(B=m(E))&&y.call(this,B,!0);var U=k==="string"&&T.binary===!1&&T.base64===!1;R&&R.binary!==void 0||(T.binary=!U),(I instanceof f&&I.uncompressedSize===0||T.dir||!I||I.length===0)&&(T.base64=!1,T.binary=!0,I="",T.compression="STORE",k="string");var A=null;A=I instanceof f||I instanceof l?I:v.isNode&&v.isStream(I)?new g(E,I):a.prepareContent(E,I,T.binary,T.optimizedBinaryString,T.base64);var N=new p(E,A,T);this.files[E]=N}var o=e("./utf8"),a=e("./utils"),l=e("./stream/GenericWorker"),u=e("./stream/StreamHelper"),c=e("./defaults"),f=e("./compressedObject"),p=e("./zipObject"),d=e("./generate"),v=e("./nodejsUtils"),g=e("./nodejs/NodejsStreamInputAdapter"),m=function(E){E.slice(-1)==="/"&&(E=E.substring(0,E.length-1));var I=E.lastIndexOf("/");return 0<I?E.substring(0,I):""},h=function(E){return E.slice(-1)!=="/"&&(E+="/"),E},y=function(E,I){return I=I!==void 0?I:c.createFolders,E=h(E),this.files[E]||s.call(this,E,null,{dir:!0,createFolders:I}),this.files[E]};function _(E){return Object.prototype.toString.call(E)==="[object RegExp]"}var S={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(E){var I,R,B;for(I in this.files)B=this.files[I],(R=I.slice(this.root.length,I.length))&&I.slice(0,this.root.length)===this.root&&E(R,B)},filter:function(E){var I=[];return this.forEach(function(R,B){E(R,B)&&I.push(B)}),I},file:function(E,I,R){if(arguments.length!==1)return E=this.root+E,s.call(this,E,I,R),this;if(_(E)){var B=E;return this.filter(function(T,U){return!U.dir&&B.test(T)})}var k=this.files[this.root+E];return k&&!k.dir?k:null},folder:function(E){if(!E)return this;if(_(E))return this.filter(function(k,T){return T.dir&&E.test(k)});var I=this.root+E,R=y.call(this,I),B=this.clone();return B.root=R.name,B},remove:function(E){E=this.root+E;var I=this.files[E];if(I||(E.slice(-1)!=="/"&&(E+="/"),I=this.files[E]),I&&!I.dir)delete this.files[E];else for(var R=this.filter(function(k,T){return T.name.slice(0,E.length)===E}),B=0;B<R.length;B++)delete this.files[R[B].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(E){var I,R={};try{if((R=a.extend(E||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=R.type.toLowerCase(),R.compression=R.compression.toUpperCase(),R.type==="binarystring"&&(R.type="string"),!R.type)throw new Error("No output type specified.");a.checkSupport(R.type),R.platform!=="darwin"&&R.platform!=="freebsd"&&R.platform!=="linux"&&R.platform!=="sunos"||(R.platform="UNIX"),R.platform==="win32"&&(R.platform="DOS");var B=R.comment||this.comment||"";I=d.generateWorker(this,R,B)}catch(k){(I=new l("error")).error(k)}return new u(I,R.type||"string",R.mimeType)},generateAsync:function(E,I){return this.generateInternalStream(E).accumulate(I)},generateNodeStream:function(E,I){return(E=E||{}).type||(E.type="nodebuffer"),this.generateInternalStream(E).toNodejsStream(I)}};i.exports=S},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,i,r){i.exports=e("stream")},{stream:void 0}],17:[function(e,i,r){var s=e("./DataReader");function o(a){s.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),u=a.charCodeAt(1),c=a.charCodeAt(2),f=a.charCodeAt(3),p=this.length-4;0<=p;--p)if(this.data[p]===l&&this.data[p+1]===u&&this.data[p+2]===c&&this.data[p+3]===f)return p-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),u=a.charCodeAt(1),c=a.charCodeAt(2),f=a.charCodeAt(3),p=this.readData(4);return l===p[0]&&u===p[1]&&c===p[2]&&f===p[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./DataReader":18}],18:[function(e,i,r){var s=e("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,u=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)u=(u<<8)+this.byteAt(l);return this.index+=a,u},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},i.exports=o},{"../utils":32}],19:[function(e,i,r){var s=e("./Uint8ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,i,r){var s=e("./DataReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./DataReader":18}],21:[function(e,i,r){var s=e("./ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(e,i,r){var s=e("../utils"),o=e("../support"),a=e("./ArrayReader"),l=e("./StringReader"),u=e("./NodeBufferReader"),c=e("./Uint8ArrayReader");i.exports=function(f){var p=s.getTypeOf(f);return s.checkSupport(p),p!=="string"||o.uint8array?p==="nodebuffer"?new u(f):o.uint8array?new c(s.transformTo("uint8array",f)):new a(s.transformTo("array",f)):new l(f)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,i,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,i,r){var s=e("./GenericWorker"),o=e("../utils");function a(l){s.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,s),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},i.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,i,r){var s=e("./GenericWorker"),o=e("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,s),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},i.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,i,r){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(a,o),a.prototype.processChunk=function(l){if(l){var u=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=u+l.data.length}o.prototype.processChunk.call(this,l)},i.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,i,r){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataWorker");var u=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(c){u.dataIsReady=!0,u.data=c,u.max=c&&c.length||0,u.type=s.getTypeOf(c),u.isPaused||u._tickAndRepeat()},function(c){u.error(c)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,u=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,u);break;case"uint8array":l=this.data.subarray(this.index,u);break;case"array":case"nodebuffer":l=this.data.slice(this.index,u)}return this.index=u,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,i,r){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},i.exports=s},{}],29:[function(e,i,r){var s=e("../utils"),o=e("./ConvertWorker"),a=e("./GenericWorker"),l=e("../base64"),u=e("../support"),c=e("../external"),f=null;if(u.nodestream)try{f=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function p(v,g){return new c.Promise(function(m,h){var y=[],_=v._internalType,S=v._outputType,E=v._mimeType;v.on("data",function(I,R){y.push(I),g&&g(R)}).on("error",function(I){y=[],h(I)}).on("end",function(){try{var I=function(R,B,k){switch(R){case"blob":return s.newBlob(s.transformTo("arraybuffer",B),k);case"base64":return l.encode(B);default:return s.transformTo(R,B)}}(S,function(R,B){var k,T=0,U=null,A=0;for(k=0;k<B.length;k++)A+=B[k].length;switch(R){case"string":return B.join("");case"array":return Array.prototype.concat.apply([],B);case"uint8array":for(U=new Uint8Array(A),k=0;k<B.length;k++)U.set(B[k],T),T+=B[k].length;return U;case"nodebuffer":return Buffer.concat(B);default:throw new Error("concat : unsupported type '"+R+"'")}}(_,y),E);m(I)}catch(R){h(R)}y=[]}).resume()})}function d(v,g,m){var h=g;switch(g){case"blob":case"arraybuffer":h="uint8array";break;case"base64":h="string"}try{this._internalType=h,this._outputType=g,this._mimeType=m,s.checkSupport(h),this._worker=v.pipe(new o(h)),v.lock()}catch(y){this._worker=new a("error"),this._worker.error(y)}}d.prototype={accumulate:function(v){return p(this,v)},on:function(v,g){var m=this;return v==="data"?this._worker.on(v,function(h){g.call(m,h.data,h.meta)}):this._worker.on(v,function(){s.delay(g,arguments,m)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(v){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new f(this,{objectMode:this._outputType!=="nodebuffer"},v)}},i.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,i,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),r.blob=o.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,i,r){for(var s=e("./utils"),o=e("./support"),a=e("./nodejsUtils"),l=e("./stream/GenericWorker"),u=new Array(256),c=0;c<256;c++)u[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;u[254]=u[254]=1;function f(){l.call(this,"utf-8 decode"),this.leftOver=null}function p(){l.call(this,"utf-8 encode")}r.utf8encode=function(d){return o.nodebuffer?a.newBufferFrom(d,"utf-8"):function(v){var g,m,h,y,_,S=v.length,E=0;for(y=0;y<S;y++)(64512&(m=v.charCodeAt(y)))==55296&&y+1<S&&(64512&(h=v.charCodeAt(y+1)))==56320&&(m=65536+(m-55296<<10)+(h-56320),y++),E+=m<128?1:m<2048?2:m<65536?3:4;for(g=o.uint8array?new Uint8Array(E):new Array(E),y=_=0;_<E;y++)(64512&(m=v.charCodeAt(y)))==55296&&y+1<S&&(64512&(h=v.charCodeAt(y+1)))==56320&&(m=65536+(m-55296<<10)+(h-56320),y++),m<128?g[_++]=m:(m<2048?g[_++]=192|m>>>6:(m<65536?g[_++]=224|m>>>12:(g[_++]=240|m>>>18,g[_++]=128|m>>>12&63),g[_++]=128|m>>>6&63),g[_++]=128|63&m);return g}(d)},r.utf8decode=function(d){return o.nodebuffer?s.transformTo("nodebuffer",d).toString("utf-8"):function(v){var g,m,h,y,_=v.length,S=new Array(2*_);for(g=m=0;g<_;)if((h=v[g++])<128)S[m++]=h;else if(4<(y=u[h]))S[m++]=65533,g+=y-1;else{for(h&=y===2?31:y===3?15:7;1<y&&g<_;)h=h<<6|63&v[g++],y--;1<y?S[m++]=65533:h<65536?S[m++]=h:(h-=65536,S[m++]=55296|h>>10&1023,S[m++]=56320|1023&h)}return S.length!==m&&(S.subarray?S=S.subarray(0,m):S.length=m),s.applyFromCharCode(S)}(d=s.transformTo(o.uint8array?"uint8array":"array",d))},s.inherits(f,l),f.prototype.processChunk=function(d){var v=s.transformTo(o.uint8array?"uint8array":"array",d.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var g=v;(v=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),v.set(g,this.leftOver.length)}else v=this.leftOver.concat(v);this.leftOver=null}var m=function(y,_){var S;for((_=_||y.length)>y.length&&(_=y.length),S=_-1;0<=S&&(192&y[S])==128;)S--;return S<0||S===0?_:S+u[y[S]]>_?S:_}(v),h=v;m!==v.length&&(o.uint8array?(h=v.subarray(0,m),this.leftOver=v.subarray(m,v.length)):(h=v.slice(0,m),this.leftOver=v.slice(m,v.length))),this.push({data:r.utf8decode(h),meta:d.meta})},f.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=f,s.inherits(p,l),p.prototype.processChunk=function(d){this.push({data:r.utf8encode(d.data),meta:d.meta})},r.Utf8EncodeWorker=p},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,i,r){var s=e("./support"),o=e("./base64"),a=e("./nodejsUtils"),l=e("./external");function u(g){return g}function c(g,m){for(var h=0;h<g.length;++h)m[h]=255&g.charCodeAt(h);return m}e("setimmediate"),r.newBlob=function(g,m){r.checkSupport("blob");try{return new Blob([g],{type:m})}catch{try{var h=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return h.append(g),h.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};var f={stringifyByChunk:function(g,m,h){var y=[],_=0,S=g.length;if(S<=h)return String.fromCharCode.apply(null,g);for(;_<S;)m==="array"||m==="nodebuffer"?y.push(String.fromCharCode.apply(null,g.slice(_,Math.min(_+h,S)))):y.push(String.fromCharCode.apply(null,g.subarray(_,Math.min(_+h,S)))),_+=h;return y.join("")},stringifyByChar:function(g){for(var m="",h=0;h<g.length;h++)m+=String.fromCharCode(g[h]);return m},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function p(g){var m=65536,h=r.getTypeOf(g),y=!0;if(h==="uint8array"?y=f.applyCanBeUsed.uint8array:h==="nodebuffer"&&(y=f.applyCanBeUsed.nodebuffer),y)for(;1<m;)try{return f.stringifyByChunk(g,h,m)}catch{m=Math.floor(m/2)}return f.stringifyByChar(g)}function d(g,m){for(var h=0;h<g.length;h++)m[h]=g[h];return m}r.applyFromCharCode=p;var v={};v.string={string:u,array:function(g){return c(g,new Array(g.length))},arraybuffer:function(g){return v.string.uint8array(g).buffer},uint8array:function(g){return c(g,new Uint8Array(g.length))},nodebuffer:function(g){return c(g,a.allocBuffer(g.length))}},v.array={string:p,array:u,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(g)}},v.arraybuffer={string:function(g){return p(new Uint8Array(g))},array:function(g){return d(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:u,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(new Uint8Array(g))}},v.uint8array={string:p,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:u,nodebuffer:function(g){return a.newBufferFrom(g)}},v.nodebuffer={string:p,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return v.nodebuffer.uint8array(g).buffer},uint8array:function(g){return d(g,new Uint8Array(g.length))},nodebuffer:u},r.transformTo=function(g,m){if(m=m||"",!g)return m;r.checkSupport(g);var h=r.getTypeOf(m);return v[h][g](m)},r.resolve=function(g){for(var m=g.split("/"),h=[],y=0;y<m.length;y++){var _=m[y];_==="."||_===""&&y!==0&&y!==m.length-1||(_===".."?h.pop():h.push(_))}return h.join("/")},r.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(g)?"nodebuffer":s.uint8array&&g instanceof Uint8Array?"uint8array":s.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(g){if(!s[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(g){var m,h,y="";for(h=0;h<(g||"").length;h++)y+="\\x"+((m=g.charCodeAt(h))<16?"0":"")+m.toString(16).toUpperCase();return y},r.delay=function(g,m,h){setImmediate(function(){g.apply(h||null,m||[])})},r.inherits=function(g,m){function h(){}h.prototype=m.prototype,g.prototype=new h},r.extend=function(){var g,m,h={};for(g=0;g<arguments.length;g++)for(m in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],m)&&h[m]===void 0&&(h[m]=arguments[g][m]);return h},r.prepareContent=function(g,m,h,y,_){return l.Promise.resolve(m).then(function(S){return s.blob&&(S instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(S))!==-1)&&typeof FileReader<"u"?new l.Promise(function(E,I){var R=new FileReader;R.onload=function(B){E(B.target.result)},R.onerror=function(B){I(B.target.error)},R.readAsArrayBuffer(S)}):S}).then(function(S){var E=r.getTypeOf(S);return E?(E==="arraybuffer"?S=r.transformTo("uint8array",S):E==="string"&&(_?S=o.decode(S):h&&y!==!0&&(S=function(I){return c(I,s.uint8array?new Uint8Array(I.length):new Array(I.length))}(S))),S):l.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,i,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./signature"),l=e("./zipEntry"),u=e("./support");function c(f){this.files=[],this.loadOptions=f}c.prototype={checkSignature:function(f){if(!this.reader.readAndCheckSignature(f)){this.reader.index-=4;var p=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(p)+", expected "+o.pretty(f)+")")}},isSignature:function(f,p){var d=this.reader.index;this.reader.setIndex(f);var v=this.reader.readString(4)===p;return this.reader.setIndex(d),v},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var f=this.reader.readData(this.zipCommentLength),p=u.uint8array?"uint8array":"array",d=o.transformTo(p,f);this.zipComment=this.loadOptions.decodeFileName(d)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var f,p,d,v=this.zip64EndOfCentralSize-44;0<v;)f=this.reader.readInt(2),p=this.reader.readInt(4),d=this.reader.readData(p),this.zip64ExtensibleData[f]={id:f,length:p,value:d}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var f,p;for(f=0;f<this.files.length;f++)p=this.files[f],this.reader.setIndex(p.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),p.readLocalPart(this.reader),p.handleUTF8(),p.processAttributes()},readCentralDir:function(){var f;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(f=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(f);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var f=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(f<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(f);var p=f;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(f=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(f),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var d=this.centralDirOffset+this.centralDirSize;this.zip64&&(d+=20,d+=12+this.zip64EndOfCentralSize);var v=p-d;if(0<v)this.isSignature(p,a.CENTRAL_FILE_HEADER)||(this.reader.zero=v);else if(v<0)throw new Error("Corrupted zip: missing "+Math.abs(v)+" bytes.")},prepareReader:function(f){this.reader=s(f)},load:function(f){this.prepareReader(f),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=c},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,i,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./compressedObject"),l=e("./crc32"),u=e("./utf8"),c=e("./compressions"),f=e("./support");function p(d,v){this.options=d,this.loadOptions=v}p.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(d){var v,g;if(d.skip(22),this.fileNameLength=d.readInt(2),g=d.readInt(2),this.fileName=d.readData(this.fileNameLength),d.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((v=function(m){for(var h in c)if(Object.prototype.hasOwnProperty.call(c,h)&&c[h].magic===m)return c[h];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,v,d.readData(this.compressedSize))},readCentralPart:function(d){this.versionMadeBy=d.readInt(2),d.skip(2),this.bitFlag=d.readInt(2),this.compressionMethod=d.readString(2),this.date=d.readDate(),this.crc32=d.readInt(4),this.compressedSize=d.readInt(4),this.uncompressedSize=d.readInt(4);var v=d.readInt(2);if(this.extraFieldsLength=d.readInt(2),this.fileCommentLength=d.readInt(2),this.diskNumberStart=d.readInt(2),this.internalFileAttributes=d.readInt(2),this.externalFileAttributes=d.readInt(4),this.localHeaderOffset=d.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");d.skip(v),this.readExtraFields(d),this.parseZIP64ExtraField(d),this.fileComment=d.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var d=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),d==0&&(this.dosPermissions=63&this.externalFileAttributes),d==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var d=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=d.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=d.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=d.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=d.readInt(4))}},readExtraFields:function(d){var v,g,m,h=d.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});d.index+4<h;)v=d.readInt(2),g=d.readInt(2),m=d.readData(g),this.extraFields[v]={id:v,length:g,value:m};d.setIndex(h)},handleUTF8:function(){var d=f.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=u.utf8decode(this.fileName),this.fileCommentStr=u.utf8decode(this.fileComment);else{var v=this.findExtraFieldUnicodePath();if(v!==null)this.fileNameStr=v;else{var g=o.transformTo(d,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var h=o.transformTo(d,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(h)}}},findExtraFieldUnicodePath:function(){var d=this.extraFields[28789];if(d){var v=s(d.value);return v.readInt(1)!==1||l(this.fileName)!==v.readInt(4)?null:u.utf8decode(v.readData(d.length-5))}return null},findExtraFieldUnicodeComment:function(){var d=this.extraFields[25461];if(d){var v=s(d.value);return v.readInt(1)!==1||l(this.fileComment)!==v.readInt(4)?null:u.utf8decode(v.readData(d.length-5))}return null}},i.exports=p},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,i,r){function s(v,g,m){this.name=v,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=g,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var o=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),l=e("./utf8"),u=e("./compressedObject"),c=e("./stream/GenericWorker");s.prototype={internalStream:function(v){var g=null,m="string";try{if(!v)throw new Error("No output type specified.");var h=(m=v.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),g=this._decompressWorker();var y=!this._dataBinary;y&&!h&&(g=g.pipe(new l.Utf8EncodeWorker)),!y&&h&&(g=g.pipe(new l.Utf8DecodeWorker))}catch(_){(g=new c("error")).error(_)}return new o(g,m,"")},async:function(v,g){return this.internalStream(v).accumulate(g)},nodeStream:function(v,g){return this.internalStream(v||"nodebuffer").toNodejsStream(g)},_compressWorker:function(v,g){if(this._data instanceof u&&this._data.compression.magic===v.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new l.Utf8EncodeWorker)),u.createWorkerFrom(m,v,g)},_decompressWorker:function(){return this._data instanceof u?this._data.getContentWorker():this._data instanceof c?this._data:new a(this._data)}};for(var f=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],p=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},d=0;d<f.length;d++)s.prototype[f[d]]=p;i.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,i,r){(function(s){var o,a,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var u=0,c=new l(v),f=s.document.createTextNode("");c.observe(f,{characterData:!0}),o=function(){f.data=u=++u%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var g=s.document.createElement("script");g.onreadystatechange=function(){v(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},s.document.documentElement.appendChild(g)}:function(){setTimeout(v,0)};else{var p=new s.MessageChannel;p.port1.onmessage=v,o=function(){p.port2.postMessage(0)}}var d=[];function v(){var g,m;a=!0;for(var h=d.length;h;){for(m=d,d=[],g=-1;++g<h;)m[g]();h=d.length}a=!1}i.exports=function(g){d.push(g)!==1||a||o()}}).call(this,typeof ta<"u"?ta:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,i,r){var s=e("immediate");function o(){}var a={},l=["REJECTED"],u=["FULFILLED"],c=["PENDING"];function f(h){if(typeof h!="function")throw new TypeError("resolver must be a function");this.state=c,this.queue=[],this.outcome=void 0,h!==o&&g(this,h)}function p(h,y,_){this.promise=h,typeof y=="function"&&(this.onFulfilled=y,this.callFulfilled=this.otherCallFulfilled),typeof _=="function"&&(this.onRejected=_,this.callRejected=this.otherCallRejected)}function d(h,y,_){s(function(){var S;try{S=y(_)}catch(E){return a.reject(h,E)}S===h?a.reject(h,new TypeError("Cannot resolve promise with itself")):a.resolve(h,S)})}function v(h){var y=h&&h.then;if(h&&(typeof h=="object"||typeof h=="function")&&typeof y=="function")return function(){y.apply(h,arguments)}}function g(h,y){var _=!1;function S(R){_||(_=!0,a.reject(h,R))}function E(R){_||(_=!0,a.resolve(h,R))}var I=m(function(){y(E,S)});I.status==="error"&&S(I.value)}function m(h,y){var _={};try{_.value=h(y),_.status="success"}catch(S){_.status="error",_.value=S}return _}(i.exports=f).prototype.finally=function(h){if(typeof h!="function")return this;var y=this.constructor;return this.then(function(_){return y.resolve(h()).then(function(){return _})},function(_){return y.resolve(h()).then(function(){throw _})})},f.prototype.catch=function(h){return this.then(null,h)},f.prototype.then=function(h,y){if(typeof h!="function"&&this.state===u||typeof y!="function"&&this.state===l)return this;var _=new this.constructor(o);return this.state!==c?d(_,this.state===u?h:y,this.outcome):this.queue.push(new p(_,h,y)),_},p.prototype.callFulfilled=function(h){a.resolve(this.promise,h)},p.prototype.otherCallFulfilled=function(h){d(this.promise,this.onFulfilled,h)},p.prototype.callRejected=function(h){a.reject(this.promise,h)},p.prototype.otherCallRejected=function(h){d(this.promise,this.onRejected,h)},a.resolve=function(h,y){var _=m(v,y);if(_.status==="error")return a.reject(h,_.value);var S=_.value;if(S)g(h,S);else{h.state=u,h.outcome=y;for(var E=-1,I=h.queue.length;++E<I;)h.queue[E].callFulfilled(y)}return h},a.reject=function(h,y){h.state=l,h.outcome=y;for(var _=-1,S=h.queue.length;++_<S;)h.queue[_].callRejected(y);return h},f.resolve=function(h){return h instanceof this?h:a.resolve(new this(o),h)},f.reject=function(h){var y=new this(o);return a.reject(y,h)},f.all=function(h){var y=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var _=h.length,S=!1;if(!_)return this.resolve([]);for(var E=new Array(_),I=0,R=-1,B=new this(o);++R<_;)k(h[R],R);return B;function k(T,U){y.resolve(T).then(function(A){E[U]=A,++I!==_||S||(S=!0,a.resolve(B,E))},function(A){S||(S=!0,a.reject(B,A))})}},f.race=function(h){var y=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var _=h.length,S=!1;if(!_)return this.resolve([]);for(var E=-1,I=new this(o);++E<_;)R=h[E],y.resolve(R).then(function(B){S||(S=!0,a.resolve(I,B))},function(B){S||(S=!0,a.reject(I,B))});var R;return I}},{immediate:36}],38:[function(e,i,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),i.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,i,r){var s=e("./zlib/deflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/messages"),u=e("./zlib/zstream"),c=Object.prototype.toString,f=0,p=-1,d=0,v=8;function g(h){if(!(this instanceof g))return new g(h);this.options=o.assign({level:p,method:v,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},h||{});var y=this.options;y.raw&&0<y.windowBits?y.windowBits=-y.windowBits:y.gzip&&0<y.windowBits&&y.windowBits<16&&(y.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var _=s.deflateInit2(this.strm,y.level,y.method,y.windowBits,y.memLevel,y.strategy);if(_!==f)throw new Error(l[_]);if(y.header&&s.deflateSetHeader(this.strm,y.header),y.dictionary){var S;if(S=typeof y.dictionary=="string"?a.string2buf(y.dictionary):c.call(y.dictionary)==="[object ArrayBuffer]"?new Uint8Array(y.dictionary):y.dictionary,(_=s.deflateSetDictionary(this.strm,S))!==f)throw new Error(l[_]);this._dict_set=!0}}function m(h,y){var _=new g(y);if(_.push(h,!0),_.err)throw _.msg||l[_.err];return _.result}g.prototype.push=function(h,y){var _,S,E=this.strm,I=this.options.chunkSize;if(this.ended)return!1;S=y===~~y?y:y===!0?4:0,typeof h=="string"?E.input=a.string2buf(h):c.call(h)==="[object ArrayBuffer]"?E.input=new Uint8Array(h):E.input=h,E.next_in=0,E.avail_in=E.input.length;do{if(E.avail_out===0&&(E.output=new o.Buf8(I),E.next_out=0,E.avail_out=I),(_=s.deflate(E,S))!==1&&_!==f)return this.onEnd(_),!(this.ended=!0);E.avail_out!==0&&(E.avail_in!==0||S!==4&&S!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(E.output,E.next_out))):this.onData(o.shrinkBuf(E.output,E.next_out)))}while((0<E.avail_in||E.avail_out===0)&&_!==1);return S===4?(_=s.deflateEnd(this.strm),this.onEnd(_),this.ended=!0,_===f):S!==2||(this.onEnd(f),!(E.avail_out=0))},g.prototype.onData=function(h){this.chunks.push(h)},g.prototype.onEnd=function(h){h===f&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},r.Deflate=g,r.deflate=m,r.deflateRaw=function(h,y){return(y=y||{}).raw=!0,m(h,y)},r.gzip=function(h,y){return(y=y||{}).gzip=!0,m(h,y)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,i,r){var s=e("./zlib/inflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/constants"),u=e("./zlib/messages"),c=e("./zlib/zstream"),f=e("./zlib/gzheader"),p=Object.prototype.toString;function d(g){if(!(this instanceof d))return new d(g);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},g||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||g&&g.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&!(15&m.windowBits)&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var h=s.inflateInit2(this.strm,m.windowBits);if(h!==l.Z_OK)throw new Error(u[h]);this.header=new f,s.inflateGetHeader(this.strm,this.header)}function v(g,m){var h=new d(m);if(h.push(g,!0),h.err)throw h.msg||u[h.err];return h.result}d.prototype.push=function(g,m){var h,y,_,S,E,I,R=this.strm,B=this.options.chunkSize,k=this.options.dictionary,T=!1;if(this.ended)return!1;y=m===~~m?m:m===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof g=="string"?R.input=a.binstring2buf(g):p.call(g)==="[object ArrayBuffer]"?R.input=new Uint8Array(g):R.input=g,R.next_in=0,R.avail_in=R.input.length;do{if(R.avail_out===0&&(R.output=new o.Buf8(B),R.next_out=0,R.avail_out=B),(h=s.inflate(R,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&k&&(I=typeof k=="string"?a.string2buf(k):p.call(k)==="[object ArrayBuffer]"?new Uint8Array(k):k,h=s.inflateSetDictionary(this.strm,I)),h===l.Z_BUF_ERROR&&T===!0&&(h=l.Z_OK,T=!1),h!==l.Z_STREAM_END&&h!==l.Z_OK)return this.onEnd(h),!(this.ended=!0);R.next_out&&(R.avail_out!==0&&h!==l.Z_STREAM_END&&(R.avail_in!==0||y!==l.Z_FINISH&&y!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(_=a.utf8border(R.output,R.next_out),S=R.next_out-_,E=a.buf2string(R.output,_),R.next_out=S,R.avail_out=B-S,S&&o.arraySet(R.output,R.output,_,S,0),this.onData(E)):this.onData(o.shrinkBuf(R.output,R.next_out)))),R.avail_in===0&&R.avail_out===0&&(T=!0)}while((0<R.avail_in||R.avail_out===0)&&h!==l.Z_STREAM_END);return h===l.Z_STREAM_END&&(y=l.Z_FINISH),y===l.Z_FINISH?(h=s.inflateEnd(this.strm),this.onEnd(h),this.ended=!0,h===l.Z_OK):y!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(R.avail_out=0))},d.prototype.onData=function(g){this.chunks.push(g)},d.prototype.onEnd=function(g){g===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},r.Inflate=d,r.inflate=v,r.inflateRaw=function(g,m){return(m=m||{}).raw=!0,v(g,m)},r.ungzip=v},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,i,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var u=Array.prototype.slice.call(arguments,1);u.length;){var c=u.shift();if(c){if(typeof c!="object")throw new TypeError(c+"must be non-object");for(var f in c)c.hasOwnProperty(f)&&(l[f]=c[f])}}return l},r.shrinkBuf=function(l,u){return l.length===u?l:l.subarray?l.subarray(0,u):(l.length=u,l)};var o={arraySet:function(l,u,c,f,p){if(u.subarray&&l.subarray)l.set(u.subarray(c,c+f),p);else for(var d=0;d<f;d++)l[p+d]=u[c+d]},flattenChunks:function(l){var u,c,f,p,d,v;for(u=f=0,c=l.length;u<c;u++)f+=l[u].length;for(v=new Uint8Array(f),u=p=0,c=l.length;u<c;u++)d=l[u],v.set(d,p),p+=d.length;return v}},a={arraySet:function(l,u,c,f,p){for(var d=0;d<f;d++)l[p+d]=u[c+d]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,o)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(s)},{}],42:[function(e,i,r){var s=e("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new s.Buf8(256),u=0;u<256;u++)l[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;function c(f,p){if(p<65537&&(f.subarray&&a||!f.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(f,p));for(var d="",v=0;v<p;v++)d+=String.fromCharCode(f[v]);return d}l[254]=l[254]=1,r.string2buf=function(f){var p,d,v,g,m,h=f.length,y=0;for(g=0;g<h;g++)(64512&(d=f.charCodeAt(g)))==55296&&g+1<h&&(64512&(v=f.charCodeAt(g+1)))==56320&&(d=65536+(d-55296<<10)+(v-56320),g++),y+=d<128?1:d<2048?2:d<65536?3:4;for(p=new s.Buf8(y),g=m=0;m<y;g++)(64512&(d=f.charCodeAt(g)))==55296&&g+1<h&&(64512&(v=f.charCodeAt(g+1)))==56320&&(d=65536+(d-55296<<10)+(v-56320),g++),d<128?p[m++]=d:(d<2048?p[m++]=192|d>>>6:(d<65536?p[m++]=224|d>>>12:(p[m++]=240|d>>>18,p[m++]=128|d>>>12&63),p[m++]=128|d>>>6&63),p[m++]=128|63&d);return p},r.buf2binstring=function(f){return c(f,f.length)},r.binstring2buf=function(f){for(var p=new s.Buf8(f.length),d=0,v=p.length;d<v;d++)p[d]=f.charCodeAt(d);return p},r.buf2string=function(f,p){var d,v,g,m,h=p||f.length,y=new Array(2*h);for(d=v=0;d<h;)if((g=f[d++])<128)y[v++]=g;else if(4<(m=l[g]))y[v++]=65533,d+=m-1;else{for(g&=m===2?31:m===3?15:7;1<m&&d<h;)g=g<<6|63&f[d++],m--;1<m?y[v++]=65533:g<65536?y[v++]=g:(g-=65536,y[v++]=55296|g>>10&1023,y[v++]=56320|1023&g)}return c(y,v)},r.utf8border=function(f,p){var d;for((p=p||f.length)>f.length&&(p=f.length),d=p-1;0<=d&&(192&f[d])==128;)d--;return d<0||d===0?p:d+l[f[d]]>p?d:p}},{"./common":41}],43:[function(e,i,r){i.exports=function(s,o,a,l){for(var u=65535&s|0,c=s>>>16&65535|0,f=0;a!==0;){for(a-=f=2e3<a?2e3:a;c=c+(u=u+o[l++]|0)|0,--f;);u%=65521,c%=65521}return u|c<<16|0}},{}],44:[function(e,i,r){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,i,r){var s=function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var u=0;u<8;u++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a}();i.exports=function(o,a,l,u){var c=s,f=u+l;o^=-1;for(var p=u;p<f;p++)o=o>>>8^c[255&(o^a[p])];return-1^o}},{}],46:[function(e,i,r){var s,o=e("../utils/common"),a=e("./trees"),l=e("./adler32"),u=e("./crc32"),c=e("./messages"),f=0,p=4,d=0,v=-2,g=-1,m=4,h=2,y=8,_=9,S=286,E=30,I=19,R=2*S+1,B=15,k=3,T=258,U=T+k+1,A=42,N=113,M=1,X=2,tt=3,q=4;function nt(x,z){return x.msg=c[z],z}function J(x){return(x<<1)-(4<x?9:0)}function lt(x){for(var z=x.length;0<=--z;)x[z]=0}function $(x){var z=x.state,F=z.pending;F>x.avail_out&&(F=x.avail_out),F!==0&&(o.arraySet(x.output,z.pending_buf,z.pending_out,F,x.next_out),x.next_out+=F,z.pending_out+=F,x.total_out+=F,x.avail_out-=F,z.pending-=F,z.pending===0&&(z.pending_out=0))}function K(x,z){a._tr_flush_block(x,0<=x.block_start?x.block_start:-1,x.strstart-x.block_start,z),x.block_start=x.strstart,$(x.strm)}function xt(x,z){x.pending_buf[x.pending++]=z}function et(x,z){x.pending_buf[x.pending++]=z>>>8&255,x.pending_buf[x.pending++]=255&z}function D(x,z){var F,P,L=x.max_chain_length,O=x.strstart,j=x.prev_length,C=x.nice_match,b=x.strstart>x.w_size-U?x.strstart-(x.w_size-U):0,H=x.window,Z=x.w_mask,Q=x.prev,ot=x.strstart+T,St=H[O+j-1],vt=H[O+j];x.prev_length>=x.good_match&&(L>>=2),C>x.lookahead&&(C=x.lookahead);do if(H[(F=z)+j]===vt&&H[F+j-1]===St&&H[F]===H[O]&&H[++F]===H[O+1]){O+=2,F++;do;while(H[++O]===H[++F]&&H[++O]===H[++F]&&H[++O]===H[++F]&&H[++O]===H[++F]&&H[++O]===H[++F]&&H[++O]===H[++F]&&H[++O]===H[++F]&&H[++O]===H[++F]&&O<ot);if(P=T-(ot-O),O=ot-T,j<P){if(x.match_start=z,C<=(j=P))break;St=H[O+j-1],vt=H[O+j]}}while((z=Q[z&Z])>b&&--L!=0);return j<=x.lookahead?j:x.lookahead}function Y(x){var z,F,P,L,O,j,C,b,H,Z,Q=x.w_size;do{if(L=x.window_size-x.lookahead-x.strstart,x.strstart>=Q+(Q-U)){for(o.arraySet(x.window,x.window,Q,Q,0),x.match_start-=Q,x.strstart-=Q,x.block_start-=Q,z=F=x.hash_size;P=x.head[--z],x.head[z]=Q<=P?P-Q:0,--F;);for(z=F=Q;P=x.prev[--z],x.prev[z]=Q<=P?P-Q:0,--F;);L+=Q}if(x.strm.avail_in===0)break;if(j=x.strm,C=x.window,b=x.strstart+x.lookahead,H=L,Z=void 0,Z=j.avail_in,H<Z&&(Z=H),F=Z===0?0:(j.avail_in-=Z,o.arraySet(C,j.input,j.next_in,Z,b),j.state.wrap===1?j.adler=l(j.adler,C,Z,b):j.state.wrap===2&&(j.adler=u(j.adler,C,Z,b)),j.next_in+=Z,j.total_in+=Z,Z),x.lookahead+=F,x.lookahead+x.insert>=k)for(O=x.strstart-x.insert,x.ins_h=x.window[O],x.ins_h=(x.ins_h<<x.hash_shift^x.window[O+1])&x.hash_mask;x.insert&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[O+k-1])&x.hash_mask,x.prev[O&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=O,O++,x.insert--,!(x.lookahead+x.insert<k)););}while(x.lookahead<U&&x.strm.avail_in!==0)}function W(x,z){for(var F,P;;){if(x.lookahead<U){if(Y(x),x.lookahead<U&&z===f)return M;if(x.lookahead===0)break}if(F=0,x.lookahead>=k&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+k-1])&x.hash_mask,F=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),F!==0&&x.strstart-F<=x.w_size-U&&(x.match_length=D(x,F)),x.match_length>=k)if(P=a._tr_tally(x,x.strstart-x.match_start,x.match_length-k),x.lookahead-=x.match_length,x.match_length<=x.max_lazy_match&&x.lookahead>=k){for(x.match_length--;x.strstart++,x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+k-1])&x.hash_mask,F=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart,--x.match_length!=0;);x.strstart++}else x.strstart+=x.match_length,x.match_length=0,x.ins_h=x.window[x.strstart],x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+1])&x.hash_mask;else P=a._tr_tally(x,0,x.window[x.strstart]),x.lookahead--,x.strstart++;if(P&&(K(x,!1),x.strm.avail_out===0))return M}return x.insert=x.strstart<k-1?x.strstart:k-1,z===p?(K(x,!0),x.strm.avail_out===0?tt:q):x.last_lit&&(K(x,!1),x.strm.avail_out===0)?M:X}function rt(x,z){for(var F,P,L;;){if(x.lookahead<U){if(Y(x),x.lookahead<U&&z===f)return M;if(x.lookahead===0)break}if(F=0,x.lookahead>=k&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+k-1])&x.hash_mask,F=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),x.prev_length=x.match_length,x.prev_match=x.match_start,x.match_length=k-1,F!==0&&x.prev_length<x.max_lazy_match&&x.strstart-F<=x.w_size-U&&(x.match_length=D(x,F),x.match_length<=5&&(x.strategy===1||x.match_length===k&&4096<x.strstart-x.match_start)&&(x.match_length=k-1)),x.prev_length>=k&&x.match_length<=x.prev_length){for(L=x.strstart+x.lookahead-k,P=a._tr_tally(x,x.strstart-1-x.prev_match,x.prev_length-k),x.lookahead-=x.prev_length-1,x.prev_length-=2;++x.strstart<=L&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+k-1])&x.hash_mask,F=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),--x.prev_length!=0;);if(x.match_available=0,x.match_length=k-1,x.strstart++,P&&(K(x,!1),x.strm.avail_out===0))return M}else if(x.match_available){if((P=a._tr_tally(x,0,x.window[x.strstart-1]))&&K(x,!1),x.strstart++,x.lookahead--,x.strm.avail_out===0)return M}else x.match_available=1,x.strstart++,x.lookahead--}return x.match_available&&(P=a._tr_tally(x,0,x.window[x.strstart-1]),x.match_available=0),x.insert=x.strstart<k-1?x.strstart:k-1,z===p?(K(x,!0),x.strm.avail_out===0?tt:q):x.last_lit&&(K(x,!1),x.strm.avail_out===0)?M:X}function it(x,z,F,P,L){this.good_length=x,this.max_lazy=z,this.nice_length=F,this.max_chain=P,this.func=L}function mt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=y,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*R),this.dyn_dtree=new o.Buf16(2*(2*E+1)),this.bl_tree=new o.Buf16(2*(2*I+1)),lt(this.dyn_ltree),lt(this.dyn_dtree),lt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(B+1),this.heap=new o.Buf16(2*S+1),lt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*S+1),lt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ht(x){var z;return x&&x.state?(x.total_in=x.total_out=0,x.data_type=h,(z=x.state).pending=0,z.pending_out=0,z.wrap<0&&(z.wrap=-z.wrap),z.status=z.wrap?A:N,x.adler=z.wrap===2?0:1,z.last_flush=f,a._tr_init(z),d):nt(x,v)}function w(x){var z=ht(x);return z===d&&function(F){F.window_size=2*F.w_size,lt(F.head),F.max_lazy_match=s[F.level].max_lazy,F.good_match=s[F.level].good_length,F.nice_match=s[F.level].nice_length,F.max_chain_length=s[F.level].max_chain,F.strstart=0,F.block_start=0,F.lookahead=0,F.insert=0,F.match_length=F.prev_length=k-1,F.match_available=0,F.ins_h=0}(x.state),z}function V(x,z,F,P,L,O){if(!x)return v;var j=1;if(z===g&&(z=6),P<0?(j=0,P=-P):15<P&&(j=2,P-=16),L<1||_<L||F!==y||P<8||15<P||z<0||9<z||O<0||m<O)return nt(x,v);P===8&&(P=9);var C=new mt;return(x.state=C).strm=x,C.wrap=j,C.gzhead=null,C.w_bits=P,C.w_size=1<<C.w_bits,C.w_mask=C.w_size-1,C.hash_bits=L+7,C.hash_size=1<<C.hash_bits,C.hash_mask=C.hash_size-1,C.hash_shift=~~((C.hash_bits+k-1)/k),C.window=new o.Buf8(2*C.w_size),C.head=new o.Buf16(C.hash_size),C.prev=new o.Buf16(C.w_size),C.lit_bufsize=1<<L+6,C.pending_buf_size=4*C.lit_bufsize,C.pending_buf=new o.Buf8(C.pending_buf_size),C.d_buf=1*C.lit_bufsize,C.l_buf=3*C.lit_bufsize,C.level=z,C.strategy=O,C.method=F,w(x)}s=[new it(0,0,0,0,function(x,z){var F=65535;for(F>x.pending_buf_size-5&&(F=x.pending_buf_size-5);;){if(x.lookahead<=1){if(Y(x),x.lookahead===0&&z===f)return M;if(x.lookahead===0)break}x.strstart+=x.lookahead,x.lookahead=0;var P=x.block_start+F;if((x.strstart===0||x.strstart>=P)&&(x.lookahead=x.strstart-P,x.strstart=P,K(x,!1),x.strm.avail_out===0)||x.strstart-x.block_start>=x.w_size-U&&(K(x,!1),x.strm.avail_out===0))return M}return x.insert=0,z===p?(K(x,!0),x.strm.avail_out===0?tt:q):(x.strstart>x.block_start&&(K(x,!1),x.strm.avail_out),M)}),new it(4,4,8,4,W),new it(4,5,16,8,W),new it(4,6,32,32,W),new it(4,4,16,16,rt),new it(8,16,32,32,rt),new it(8,16,128,128,rt),new it(8,32,128,256,rt),new it(32,128,258,1024,rt),new it(32,258,258,4096,rt)],r.deflateInit=function(x,z){return V(x,z,y,15,8,0)},r.deflateInit2=V,r.deflateReset=w,r.deflateResetKeep=ht,r.deflateSetHeader=function(x,z){return x&&x.state?x.state.wrap!==2?v:(x.state.gzhead=z,d):v},r.deflate=function(x,z){var F,P,L,O;if(!x||!x.state||5<z||z<0)return x?nt(x,v):v;if(P=x.state,!x.output||!x.input&&x.avail_in!==0||P.status===666&&z!==p)return nt(x,x.avail_out===0?-5:v);if(P.strm=x,F=P.last_flush,P.last_flush=z,P.status===A)if(P.wrap===2)x.adler=0,xt(P,31),xt(P,139),xt(P,8),P.gzhead?(xt(P,(P.gzhead.text?1:0)+(P.gzhead.hcrc?2:0)+(P.gzhead.extra?4:0)+(P.gzhead.name?8:0)+(P.gzhead.comment?16:0)),xt(P,255&P.gzhead.time),xt(P,P.gzhead.time>>8&255),xt(P,P.gzhead.time>>16&255),xt(P,P.gzhead.time>>24&255),xt(P,P.level===9?2:2<=P.strategy||P.level<2?4:0),xt(P,255&P.gzhead.os),P.gzhead.extra&&P.gzhead.extra.length&&(xt(P,255&P.gzhead.extra.length),xt(P,P.gzhead.extra.length>>8&255)),P.gzhead.hcrc&&(x.adler=u(x.adler,P.pending_buf,P.pending,0)),P.gzindex=0,P.status=69):(xt(P,0),xt(P,0),xt(P,0),xt(P,0),xt(P,0),xt(P,P.level===9?2:2<=P.strategy||P.level<2?4:0),xt(P,3),P.status=N);else{var j=y+(P.w_bits-8<<4)<<8;j|=(2<=P.strategy||P.level<2?0:P.level<6?1:P.level===6?2:3)<<6,P.strstart!==0&&(j|=32),j+=31-j%31,P.status=N,et(P,j),P.strstart!==0&&(et(P,x.adler>>>16),et(P,65535&x.adler)),x.adler=1}if(P.status===69)if(P.gzhead.extra){for(L=P.pending;P.gzindex<(65535&P.gzhead.extra.length)&&(P.pending!==P.pending_buf_size||(P.gzhead.hcrc&&P.pending>L&&(x.adler=u(x.adler,P.pending_buf,P.pending-L,L)),$(x),L=P.pending,P.pending!==P.pending_buf_size));)xt(P,255&P.gzhead.extra[P.gzindex]),P.gzindex++;P.gzhead.hcrc&&P.pending>L&&(x.adler=u(x.adler,P.pending_buf,P.pending-L,L)),P.gzindex===P.gzhead.extra.length&&(P.gzindex=0,P.status=73)}else P.status=73;if(P.status===73)if(P.gzhead.name){L=P.pending;do{if(P.pending===P.pending_buf_size&&(P.gzhead.hcrc&&P.pending>L&&(x.adler=u(x.adler,P.pending_buf,P.pending-L,L)),$(x),L=P.pending,P.pending===P.pending_buf_size)){O=1;break}O=P.gzindex<P.gzhead.name.length?255&P.gzhead.name.charCodeAt(P.gzindex++):0,xt(P,O)}while(O!==0);P.gzhead.hcrc&&P.pending>L&&(x.adler=u(x.adler,P.pending_buf,P.pending-L,L)),O===0&&(P.gzindex=0,P.status=91)}else P.status=91;if(P.status===91)if(P.gzhead.comment){L=P.pending;do{if(P.pending===P.pending_buf_size&&(P.gzhead.hcrc&&P.pending>L&&(x.adler=u(x.adler,P.pending_buf,P.pending-L,L)),$(x),L=P.pending,P.pending===P.pending_buf_size)){O=1;break}O=P.gzindex<P.gzhead.comment.length?255&P.gzhead.comment.charCodeAt(P.gzindex++):0,xt(P,O)}while(O!==0);P.gzhead.hcrc&&P.pending>L&&(x.adler=u(x.adler,P.pending_buf,P.pending-L,L)),O===0&&(P.status=103)}else P.status=103;if(P.status===103&&(P.gzhead.hcrc?(P.pending+2>P.pending_buf_size&&$(x),P.pending+2<=P.pending_buf_size&&(xt(P,255&x.adler),xt(P,x.adler>>8&255),x.adler=0,P.status=N)):P.status=N),P.pending!==0){if($(x),x.avail_out===0)return P.last_flush=-1,d}else if(x.avail_in===0&&J(z)<=J(F)&&z!==p)return nt(x,-5);if(P.status===666&&x.avail_in!==0)return nt(x,-5);if(x.avail_in!==0||P.lookahead!==0||z!==f&&P.status!==666){var C=P.strategy===2?function(b,H){for(var Z;;){if(b.lookahead===0&&(Y(b),b.lookahead===0)){if(H===f)return M;break}if(b.match_length=0,Z=a._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++,Z&&(K(b,!1),b.strm.avail_out===0))return M}return b.insert=0,H===p?(K(b,!0),b.strm.avail_out===0?tt:q):b.last_lit&&(K(b,!1),b.strm.avail_out===0)?M:X}(P,z):P.strategy===3?function(b,H){for(var Z,Q,ot,St,vt=b.window;;){if(b.lookahead<=T){if(Y(b),b.lookahead<=T&&H===f)return M;if(b.lookahead===0)break}if(b.match_length=0,b.lookahead>=k&&0<b.strstart&&(Q=vt[ot=b.strstart-1])===vt[++ot]&&Q===vt[++ot]&&Q===vt[++ot]){St=b.strstart+T;do;while(Q===vt[++ot]&&Q===vt[++ot]&&Q===vt[++ot]&&Q===vt[++ot]&&Q===vt[++ot]&&Q===vt[++ot]&&Q===vt[++ot]&&Q===vt[++ot]&&ot<St);b.match_length=T-(St-ot),b.match_length>b.lookahead&&(b.match_length=b.lookahead)}if(b.match_length>=k?(Z=a._tr_tally(b,1,b.match_length-k),b.lookahead-=b.match_length,b.strstart+=b.match_length,b.match_length=0):(Z=a._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++),Z&&(K(b,!1),b.strm.avail_out===0))return M}return b.insert=0,H===p?(K(b,!0),b.strm.avail_out===0?tt:q):b.last_lit&&(K(b,!1),b.strm.avail_out===0)?M:X}(P,z):s[P.level].func(P,z);if(C!==tt&&C!==q||(P.status=666),C===M||C===tt)return x.avail_out===0&&(P.last_flush=-1),d;if(C===X&&(z===1?a._tr_align(P):z!==5&&(a._tr_stored_block(P,0,0,!1),z===3&&(lt(P.head),P.lookahead===0&&(P.strstart=0,P.block_start=0,P.insert=0))),$(x),x.avail_out===0))return P.last_flush=-1,d}return z!==p?d:P.wrap<=0?1:(P.wrap===2?(xt(P,255&x.adler),xt(P,x.adler>>8&255),xt(P,x.adler>>16&255),xt(P,x.adler>>24&255),xt(P,255&x.total_in),xt(P,x.total_in>>8&255),xt(P,x.total_in>>16&255),xt(P,x.total_in>>24&255)):(et(P,x.adler>>>16),et(P,65535&x.adler)),$(x),0<P.wrap&&(P.wrap=-P.wrap),P.pending!==0?d:1)},r.deflateEnd=function(x){var z;return x&&x.state?(z=x.state.status)!==A&&z!==69&&z!==73&&z!==91&&z!==103&&z!==N&&z!==666?nt(x,v):(x.state=null,z===N?nt(x,-3):d):v},r.deflateSetDictionary=function(x,z){var F,P,L,O,j,C,b,H,Z=z.length;if(!x||!x.state||(O=(F=x.state).wrap)===2||O===1&&F.status!==A||F.lookahead)return v;for(O===1&&(x.adler=l(x.adler,z,Z,0)),F.wrap=0,Z>=F.w_size&&(O===0&&(lt(F.head),F.strstart=0,F.block_start=0,F.insert=0),H=new o.Buf8(F.w_size),o.arraySet(H,z,Z-F.w_size,F.w_size,0),z=H,Z=F.w_size),j=x.avail_in,C=x.next_in,b=x.input,x.avail_in=Z,x.next_in=0,x.input=z,Y(F);F.lookahead>=k;){for(P=F.strstart,L=F.lookahead-(k-1);F.ins_h=(F.ins_h<<F.hash_shift^F.window[P+k-1])&F.hash_mask,F.prev[P&F.w_mask]=F.head[F.ins_h],F.head[F.ins_h]=P,P++,--L;);F.strstart=P,F.lookahead=k-1,Y(F)}return F.strstart+=F.lookahead,F.block_start=F.strstart,F.insert=F.lookahead,F.lookahead=0,F.match_length=F.prev_length=k-1,F.match_available=0,x.next_in=C,x.input=b,x.avail_in=j,F.wrap=O,d},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,i,r){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,i,r){i.exports=function(s,o){var a,l,u,c,f,p,d,v,g,m,h,y,_,S,E,I,R,B,k,T,U,A,N,M,X;a=s.state,l=s.next_in,M=s.input,u=l+(s.avail_in-5),c=s.next_out,X=s.output,f=c-(o-s.avail_out),p=c+(s.avail_out-257),d=a.dmax,v=a.wsize,g=a.whave,m=a.wnext,h=a.window,y=a.hold,_=a.bits,S=a.lencode,E=a.distcode,I=(1<<a.lenbits)-1,R=(1<<a.distbits)-1;t:do{_<15&&(y+=M[l++]<<_,_+=8,y+=M[l++]<<_,_+=8),B=S[y&I];e:for(;;){if(y>>>=k=B>>>24,_-=k,(k=B>>>16&255)===0)X[c++]=65535&B;else{if(!(16&k)){if(!(64&k)){B=S[(65535&B)+(y&(1<<k)-1)];continue e}if(32&k){a.mode=12;break t}s.msg="invalid literal/length code",a.mode=30;break t}T=65535&B,(k&=15)&&(_<k&&(y+=M[l++]<<_,_+=8),T+=y&(1<<k)-1,y>>>=k,_-=k),_<15&&(y+=M[l++]<<_,_+=8,y+=M[l++]<<_,_+=8),B=E[y&R];n:for(;;){if(y>>>=k=B>>>24,_-=k,!(16&(k=B>>>16&255))){if(!(64&k)){B=E[(65535&B)+(y&(1<<k)-1)];continue n}s.msg="invalid distance code",a.mode=30;break t}if(U=65535&B,_<(k&=15)&&(y+=M[l++]<<_,(_+=8)<k&&(y+=M[l++]<<_,_+=8)),d<(U+=y&(1<<k)-1)){s.msg="invalid distance too far back",a.mode=30;break t}if(y>>>=k,_-=k,(k=c-f)<U){if(g<(k=U-k)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break t}if(N=h,(A=0)===m){if(A+=v-k,k<T){for(T-=k;X[c++]=h[A++],--k;);A=c-U,N=X}}else if(m<k){if(A+=v+m-k,(k-=m)<T){for(T-=k;X[c++]=h[A++],--k;);if(A=0,m<T){for(T-=k=m;X[c++]=h[A++],--k;);A=c-U,N=X}}}else if(A+=m-k,k<T){for(T-=k;X[c++]=h[A++],--k;);A=c-U,N=X}for(;2<T;)X[c++]=N[A++],X[c++]=N[A++],X[c++]=N[A++],T-=3;T&&(X[c++]=N[A++],1<T&&(X[c++]=N[A++]))}else{for(A=c-U;X[c++]=X[A++],X[c++]=X[A++],X[c++]=X[A++],2<(T-=3););T&&(X[c++]=X[A++],1<T&&(X[c++]=X[A++]))}break}}break}}while(l<u&&c<p);l-=T=_>>3,y&=(1<<(_-=T<<3))-1,s.next_in=l,s.next_out=c,s.avail_in=l<u?u-l+5:5-(l-u),s.avail_out=c<p?p-c+257:257-(c-p),a.hold=y,a.bits=_}},{}],49:[function(e,i,r){var s=e("../utils/common"),o=e("./adler32"),a=e("./crc32"),l=e("./inffast"),u=e("./inftrees"),c=1,f=2,p=0,d=-2,v=1,g=852,m=592;function h(A){return(A>>>24&255)+(A>>>8&65280)+((65280&A)<<8)+((255&A)<<24)}function y(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function _(A){var N;return A&&A.state?(N=A.state,A.total_in=A.total_out=N.total=0,A.msg="",N.wrap&&(A.adler=1&N.wrap),N.mode=v,N.last=0,N.havedict=0,N.dmax=32768,N.head=null,N.hold=0,N.bits=0,N.lencode=N.lendyn=new s.Buf32(g),N.distcode=N.distdyn=new s.Buf32(m),N.sane=1,N.back=-1,p):d}function S(A){var N;return A&&A.state?((N=A.state).wsize=0,N.whave=0,N.wnext=0,_(A)):d}function E(A,N){var M,X;return A&&A.state?(X=A.state,N<0?(M=0,N=-N):(M=1+(N>>4),N<48&&(N&=15)),N&&(N<8||15<N)?d:(X.window!==null&&X.wbits!==N&&(X.window=null),X.wrap=M,X.wbits=N,S(A))):d}function I(A,N){var M,X;return A?(X=new y,(A.state=X).window=null,(M=E(A,N))!==p&&(A.state=null),M):d}var R,B,k=!0;function T(A){if(k){var N;for(R=new s.Buf32(512),B=new s.Buf32(32),N=0;N<144;)A.lens[N++]=8;for(;N<256;)A.lens[N++]=9;for(;N<280;)A.lens[N++]=7;for(;N<288;)A.lens[N++]=8;for(u(c,A.lens,0,288,R,0,A.work,{bits:9}),N=0;N<32;)A.lens[N++]=5;u(f,A.lens,0,32,B,0,A.work,{bits:5}),k=!1}A.lencode=R,A.lenbits=9,A.distcode=B,A.distbits=5}function U(A,N,M,X){var tt,q=A.state;return q.window===null&&(q.wsize=1<<q.wbits,q.wnext=0,q.whave=0,q.window=new s.Buf8(q.wsize)),X>=q.wsize?(s.arraySet(q.window,N,M-q.wsize,q.wsize,0),q.wnext=0,q.whave=q.wsize):(X<(tt=q.wsize-q.wnext)&&(tt=X),s.arraySet(q.window,N,M-X,tt,q.wnext),(X-=tt)?(s.arraySet(q.window,N,M-X,X,0),q.wnext=X,q.whave=q.wsize):(q.wnext+=tt,q.wnext===q.wsize&&(q.wnext=0),q.whave<q.wsize&&(q.whave+=tt))),0}r.inflateReset=S,r.inflateReset2=E,r.inflateResetKeep=_,r.inflateInit=function(A){return I(A,15)},r.inflateInit2=I,r.inflate=function(A,N){var M,X,tt,q,nt,J,lt,$,K,xt,et,D,Y,W,rt,it,mt,ht,w,V,x,z,F,P,L=0,O=new s.Buf8(4),j=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!A||!A.state||!A.output||!A.input&&A.avail_in!==0)return d;(M=A.state).mode===12&&(M.mode=13),nt=A.next_out,tt=A.output,lt=A.avail_out,q=A.next_in,X=A.input,J=A.avail_in,$=M.hold,K=M.bits,xt=J,et=lt,z=p;t:for(;;)switch(M.mode){case v:if(M.wrap===0){M.mode=13;break}for(;K<16;){if(J===0)break t;J--,$+=X[q++]<<K,K+=8}if(2&M.wrap&&$===35615){O[M.check=0]=255&$,O[1]=$>>>8&255,M.check=a(M.check,O,2,0),K=$=0,M.mode=2;break}if(M.flags=0,M.head&&(M.head.done=!1),!(1&M.wrap)||(((255&$)<<8)+($>>8))%31){A.msg="incorrect header check",M.mode=30;break}if((15&$)!=8){A.msg="unknown compression method",M.mode=30;break}if(K-=4,x=8+(15&($>>>=4)),M.wbits===0)M.wbits=x;else if(x>M.wbits){A.msg="invalid window size",M.mode=30;break}M.dmax=1<<x,A.adler=M.check=1,M.mode=512&$?10:12,K=$=0;break;case 2:for(;K<16;){if(J===0)break t;J--,$+=X[q++]<<K,K+=8}if(M.flags=$,(255&M.flags)!=8){A.msg="unknown compression method",M.mode=30;break}if(57344&M.flags){A.msg="unknown header flags set",M.mode=30;break}M.head&&(M.head.text=$>>8&1),512&M.flags&&(O[0]=255&$,O[1]=$>>>8&255,M.check=a(M.check,O,2,0)),K=$=0,M.mode=3;case 3:for(;K<32;){if(J===0)break t;J--,$+=X[q++]<<K,K+=8}M.head&&(M.head.time=$),512&M.flags&&(O[0]=255&$,O[1]=$>>>8&255,O[2]=$>>>16&255,O[3]=$>>>24&255,M.check=a(M.check,O,4,0)),K=$=0,M.mode=4;case 4:for(;K<16;){if(J===0)break t;J--,$+=X[q++]<<K,K+=8}M.head&&(M.head.xflags=255&$,M.head.os=$>>8),512&M.flags&&(O[0]=255&$,O[1]=$>>>8&255,M.check=a(M.check,O,2,0)),K=$=0,M.mode=5;case 5:if(1024&M.flags){for(;K<16;){if(J===0)break t;J--,$+=X[q++]<<K,K+=8}M.length=$,M.head&&(M.head.extra_len=$),512&M.flags&&(O[0]=255&$,O[1]=$>>>8&255,M.check=a(M.check,O,2,0)),K=$=0}else M.head&&(M.head.extra=null);M.mode=6;case 6:if(1024&M.flags&&(J<(D=M.length)&&(D=J),D&&(M.head&&(x=M.head.extra_len-M.length,M.head.extra||(M.head.extra=new Array(M.head.extra_len)),s.arraySet(M.head.extra,X,q,D,x)),512&M.flags&&(M.check=a(M.check,X,D,q)),J-=D,q+=D,M.length-=D),M.length))break t;M.length=0,M.mode=7;case 7:if(2048&M.flags){if(J===0)break t;for(D=0;x=X[q+D++],M.head&&x&&M.length<65536&&(M.head.name+=String.fromCharCode(x)),x&&D<J;);if(512&M.flags&&(M.check=a(M.check,X,D,q)),J-=D,q+=D,x)break t}else M.head&&(M.head.name=null);M.length=0,M.mode=8;case 8:if(4096&M.flags){if(J===0)break t;for(D=0;x=X[q+D++],M.head&&x&&M.length<65536&&(M.head.comment+=String.fromCharCode(x)),x&&D<J;);if(512&M.flags&&(M.check=a(M.check,X,D,q)),J-=D,q+=D,x)break t}else M.head&&(M.head.comment=null);M.mode=9;case 9:if(512&M.flags){for(;K<16;){if(J===0)break t;J--,$+=X[q++]<<K,K+=8}if($!==(65535&M.check)){A.msg="header crc mismatch",M.mode=30;break}K=$=0}M.head&&(M.head.hcrc=M.flags>>9&1,M.head.done=!0),A.adler=M.check=0,M.mode=12;break;case 10:for(;K<32;){if(J===0)break t;J--,$+=X[q++]<<K,K+=8}A.adler=M.check=h($),K=$=0,M.mode=11;case 11:if(M.havedict===0)return A.next_out=nt,A.avail_out=lt,A.next_in=q,A.avail_in=J,M.hold=$,M.bits=K,2;A.adler=M.check=1,M.mode=12;case 12:if(N===5||N===6)break t;case 13:if(M.last){$>>>=7&K,K-=7&K,M.mode=27;break}for(;K<3;){if(J===0)break t;J--,$+=X[q++]<<K,K+=8}switch(M.last=1&$,K-=1,3&($>>>=1)){case 0:M.mode=14;break;case 1:if(T(M),M.mode=20,N!==6)break;$>>>=2,K-=2;break t;case 2:M.mode=17;break;case 3:A.msg="invalid block type",M.mode=30}$>>>=2,K-=2;break;case 14:for($>>>=7&K,K-=7&K;K<32;){if(J===0)break t;J--,$+=X[q++]<<K,K+=8}if((65535&$)!=($>>>16^65535)){A.msg="invalid stored block lengths",M.mode=30;break}if(M.length=65535&$,K=$=0,M.mode=15,N===6)break t;case 15:M.mode=16;case 16:if(D=M.length){if(J<D&&(D=J),lt<D&&(D=lt),D===0)break t;s.arraySet(tt,X,q,D,nt),J-=D,q+=D,lt-=D,nt+=D,M.length-=D;break}M.mode=12;break;case 17:for(;K<14;){if(J===0)break t;J--,$+=X[q++]<<K,K+=8}if(M.nlen=257+(31&$),$>>>=5,K-=5,M.ndist=1+(31&$),$>>>=5,K-=5,M.ncode=4+(15&$),$>>>=4,K-=4,286<M.nlen||30<M.ndist){A.msg="too many length or distance symbols",M.mode=30;break}M.have=0,M.mode=18;case 18:for(;M.have<M.ncode;){for(;K<3;){if(J===0)break t;J--,$+=X[q++]<<K,K+=8}M.lens[j[M.have++]]=7&$,$>>>=3,K-=3}for(;M.have<19;)M.lens[j[M.have++]]=0;if(M.lencode=M.lendyn,M.lenbits=7,F={bits:M.lenbits},z=u(0,M.lens,0,19,M.lencode,0,M.work,F),M.lenbits=F.bits,z){A.msg="invalid code lengths set",M.mode=30;break}M.have=0,M.mode=19;case 19:for(;M.have<M.nlen+M.ndist;){for(;it=(L=M.lencode[$&(1<<M.lenbits)-1])>>>16&255,mt=65535&L,!((rt=L>>>24)<=K);){if(J===0)break t;J--,$+=X[q++]<<K,K+=8}if(mt<16)$>>>=rt,K-=rt,M.lens[M.have++]=mt;else{if(mt===16){for(P=rt+2;K<P;){if(J===0)break t;J--,$+=X[q++]<<K,K+=8}if($>>>=rt,K-=rt,M.have===0){A.msg="invalid bit length repeat",M.mode=30;break}x=M.lens[M.have-1],D=3+(3&$),$>>>=2,K-=2}else if(mt===17){for(P=rt+3;K<P;){if(J===0)break t;J--,$+=X[q++]<<K,K+=8}K-=rt,x=0,D=3+(7&($>>>=rt)),$>>>=3,K-=3}else{for(P=rt+7;K<P;){if(J===0)break t;J--,$+=X[q++]<<K,K+=8}K-=rt,x=0,D=11+(127&($>>>=rt)),$>>>=7,K-=7}if(M.have+D>M.nlen+M.ndist){A.msg="invalid bit length repeat",M.mode=30;break}for(;D--;)M.lens[M.have++]=x}}if(M.mode===30)break;if(M.lens[256]===0){A.msg="invalid code -- missing end-of-block",M.mode=30;break}if(M.lenbits=9,F={bits:M.lenbits},z=u(c,M.lens,0,M.nlen,M.lencode,0,M.work,F),M.lenbits=F.bits,z){A.msg="invalid literal/lengths set",M.mode=30;break}if(M.distbits=6,M.distcode=M.distdyn,F={bits:M.distbits},z=u(f,M.lens,M.nlen,M.ndist,M.distcode,0,M.work,F),M.distbits=F.bits,z){A.msg="invalid distances set",M.mode=30;break}if(M.mode=20,N===6)break t;case 20:M.mode=21;case 21:if(6<=J&&258<=lt){A.next_out=nt,A.avail_out=lt,A.next_in=q,A.avail_in=J,M.hold=$,M.bits=K,l(A,et),nt=A.next_out,tt=A.output,lt=A.avail_out,q=A.next_in,X=A.input,J=A.avail_in,$=M.hold,K=M.bits,M.mode===12&&(M.back=-1);break}for(M.back=0;it=(L=M.lencode[$&(1<<M.lenbits)-1])>>>16&255,mt=65535&L,!((rt=L>>>24)<=K);){if(J===0)break t;J--,$+=X[q++]<<K,K+=8}if(it&&!(240&it)){for(ht=rt,w=it,V=mt;it=(L=M.lencode[V+(($&(1<<ht+w)-1)>>ht)])>>>16&255,mt=65535&L,!(ht+(rt=L>>>24)<=K);){if(J===0)break t;J--,$+=X[q++]<<K,K+=8}$>>>=ht,K-=ht,M.back+=ht}if($>>>=rt,K-=rt,M.back+=rt,M.length=mt,it===0){M.mode=26;break}if(32&it){M.back=-1,M.mode=12;break}if(64&it){A.msg="invalid literal/length code",M.mode=30;break}M.extra=15&it,M.mode=22;case 22:if(M.extra){for(P=M.extra;K<P;){if(J===0)break t;J--,$+=X[q++]<<K,K+=8}M.length+=$&(1<<M.extra)-1,$>>>=M.extra,K-=M.extra,M.back+=M.extra}M.was=M.length,M.mode=23;case 23:for(;it=(L=M.distcode[$&(1<<M.distbits)-1])>>>16&255,mt=65535&L,!((rt=L>>>24)<=K);){if(J===0)break t;J--,$+=X[q++]<<K,K+=8}if(!(240&it)){for(ht=rt,w=it,V=mt;it=(L=M.distcode[V+(($&(1<<ht+w)-1)>>ht)])>>>16&255,mt=65535&L,!(ht+(rt=L>>>24)<=K);){if(J===0)break t;J--,$+=X[q++]<<K,K+=8}$>>>=ht,K-=ht,M.back+=ht}if($>>>=rt,K-=rt,M.back+=rt,64&it){A.msg="invalid distance code",M.mode=30;break}M.offset=mt,M.extra=15&it,M.mode=24;case 24:if(M.extra){for(P=M.extra;K<P;){if(J===0)break t;J--,$+=X[q++]<<K,K+=8}M.offset+=$&(1<<M.extra)-1,$>>>=M.extra,K-=M.extra,M.back+=M.extra}if(M.offset>M.dmax){A.msg="invalid distance too far back",M.mode=30;break}M.mode=25;case 25:if(lt===0)break t;if(D=et-lt,M.offset>D){if((D=M.offset-D)>M.whave&&M.sane){A.msg="invalid distance too far back",M.mode=30;break}Y=D>M.wnext?(D-=M.wnext,M.wsize-D):M.wnext-D,D>M.length&&(D=M.length),W=M.window}else W=tt,Y=nt-M.offset,D=M.length;for(lt<D&&(D=lt),lt-=D,M.length-=D;tt[nt++]=W[Y++],--D;);M.length===0&&(M.mode=21);break;case 26:if(lt===0)break t;tt[nt++]=M.length,lt--,M.mode=21;break;case 27:if(M.wrap){for(;K<32;){if(J===0)break t;J--,$|=X[q++]<<K,K+=8}if(et-=lt,A.total_out+=et,M.total+=et,et&&(A.adler=M.check=M.flags?a(M.check,tt,et,nt-et):o(M.check,tt,et,nt-et)),et=lt,(M.flags?$:h($))!==M.check){A.msg="incorrect data check",M.mode=30;break}K=$=0}M.mode=28;case 28:if(M.wrap&&M.flags){for(;K<32;){if(J===0)break t;J--,$+=X[q++]<<K,K+=8}if($!==(4294967295&M.total)){A.msg="incorrect length check",M.mode=30;break}K=$=0}M.mode=29;case 29:z=1;break t;case 30:z=-3;break t;case 31:return-4;case 32:default:return d}return A.next_out=nt,A.avail_out=lt,A.next_in=q,A.avail_in=J,M.hold=$,M.bits=K,(M.wsize||et!==A.avail_out&&M.mode<30&&(M.mode<27||N!==4))&&U(A,A.output,A.next_out,et-A.avail_out)?(M.mode=31,-4):(xt-=A.avail_in,et-=A.avail_out,A.total_in+=xt,A.total_out+=et,M.total+=et,M.wrap&&et&&(A.adler=M.check=M.flags?a(M.check,tt,et,A.next_out-et):o(M.check,tt,et,A.next_out-et)),A.data_type=M.bits+(M.last?64:0)+(M.mode===12?128:0)+(M.mode===20||M.mode===15?256:0),(xt==0&&et===0||N===4)&&z===p&&(z=-5),z)},r.inflateEnd=function(A){if(!A||!A.state)return d;var N=A.state;return N.window&&(N.window=null),A.state=null,p},r.inflateGetHeader=function(A,N){var M;return A&&A.state&&2&(M=A.state).wrap?((M.head=N).done=!1,p):d},r.inflateSetDictionary=function(A,N){var M,X=N.length;return A&&A.state?(M=A.state).wrap!==0&&M.mode!==11?d:M.mode===11&&o(1,N,X,0)!==M.check?-3:U(A,N,X,X)?(M.mode=31,-4):(M.havedict=1,p):d},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,i,r){var s=e("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],u=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(c,f,p,d,v,g,m,h){var y,_,S,E,I,R,B,k,T,U=h.bits,A=0,N=0,M=0,X=0,tt=0,q=0,nt=0,J=0,lt=0,$=0,K=null,xt=0,et=new s.Buf16(16),D=new s.Buf16(16),Y=null,W=0;for(A=0;A<=15;A++)et[A]=0;for(N=0;N<d;N++)et[f[p+N]]++;for(tt=U,X=15;1<=X&&et[X]===0;X--);if(X<tt&&(tt=X),X===0)return v[g++]=20971520,v[g++]=20971520,h.bits=1,0;for(M=1;M<X&&et[M]===0;M++);for(tt<M&&(tt=M),A=J=1;A<=15;A++)if(J<<=1,(J-=et[A])<0)return-1;if(0<J&&(c===0||X!==1))return-1;for(D[1]=0,A=1;A<15;A++)D[A+1]=D[A]+et[A];for(N=0;N<d;N++)f[p+N]!==0&&(m[D[f[p+N]]++]=N);if(R=c===0?(K=Y=m,19):c===1?(K=o,xt-=257,Y=a,W-=257,256):(K=l,Y=u,-1),A=M,I=g,nt=N=$=0,S=-1,E=(lt=1<<(q=tt))-1,c===1&&852<lt||c===2&&592<lt)return 1;for(;;){for(B=A-nt,T=m[N]<R?(k=0,m[N]):m[N]>R?(k=Y[W+m[N]],K[xt+m[N]]):(k=96,0),y=1<<A-nt,M=_=1<<q;v[I+($>>nt)+(_-=y)]=B<<24|k<<16|T|0,_!==0;);for(y=1<<A-1;$&y;)y>>=1;if(y!==0?($&=y-1,$+=y):$=0,N++,--et[A]==0){if(A===X)break;A=f[p+m[N]]}if(tt<A&&($&E)!==S){for(nt===0&&(nt=tt),I+=M,J=1<<(q=A-nt);q+nt<X&&!((J-=et[q+nt])<=0);)q++,J<<=1;if(lt+=1<<q,c===1&&852<lt||c===2&&592<lt)return 1;v[S=$&E]=tt<<24|q<<16|I-g|0}}return $!==0&&(v[I+$]=A-nt<<24|64<<16|0),h.bits=tt,0}},{"../utils/common":41}],51:[function(e,i,r){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,i,r){var s=e("../utils/common"),o=0,a=1;function l(L){for(var O=L.length;0<=--O;)L[O]=0}var u=0,c=29,f=256,p=f+1+c,d=30,v=19,g=2*p+1,m=15,h=16,y=7,_=256,S=16,E=17,I=18,R=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],B=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],k=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],T=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],U=new Array(2*(p+2));l(U);var A=new Array(2*d);l(A);var N=new Array(512);l(N);var M=new Array(256);l(M);var X=new Array(c);l(X);var tt,q,nt,J=new Array(d);function lt(L,O,j,C,b){this.static_tree=L,this.extra_bits=O,this.extra_base=j,this.elems=C,this.max_length=b,this.has_stree=L&&L.length}function $(L,O){this.dyn_tree=L,this.max_code=0,this.stat_desc=O}function K(L){return L<256?N[L]:N[256+(L>>>7)]}function xt(L,O){L.pending_buf[L.pending++]=255&O,L.pending_buf[L.pending++]=O>>>8&255}function et(L,O,j){L.bi_valid>h-j?(L.bi_buf|=O<<L.bi_valid&65535,xt(L,L.bi_buf),L.bi_buf=O>>h-L.bi_valid,L.bi_valid+=j-h):(L.bi_buf|=O<<L.bi_valid&65535,L.bi_valid+=j)}function D(L,O,j){et(L,j[2*O],j[2*O+1])}function Y(L,O){for(var j=0;j|=1&L,L>>>=1,j<<=1,0<--O;);return j>>>1}function W(L,O,j){var C,b,H=new Array(m+1),Z=0;for(C=1;C<=m;C++)H[C]=Z=Z+j[C-1]<<1;for(b=0;b<=O;b++){var Q=L[2*b+1];Q!==0&&(L[2*b]=Y(H[Q]++,Q))}}function rt(L){var O;for(O=0;O<p;O++)L.dyn_ltree[2*O]=0;for(O=0;O<d;O++)L.dyn_dtree[2*O]=0;for(O=0;O<v;O++)L.bl_tree[2*O]=0;L.dyn_ltree[2*_]=1,L.opt_len=L.static_len=0,L.last_lit=L.matches=0}function it(L){8<L.bi_valid?xt(L,L.bi_buf):0<L.bi_valid&&(L.pending_buf[L.pending++]=L.bi_buf),L.bi_buf=0,L.bi_valid=0}function mt(L,O,j,C){var b=2*O,H=2*j;return L[b]<L[H]||L[b]===L[H]&&C[O]<=C[j]}function ht(L,O,j){for(var C=L.heap[j],b=j<<1;b<=L.heap_len&&(b<L.heap_len&&mt(O,L.heap[b+1],L.heap[b],L.depth)&&b++,!mt(O,C,L.heap[b],L.depth));)L.heap[j]=L.heap[b],j=b,b<<=1;L.heap[j]=C}function w(L,O,j){var C,b,H,Z,Q=0;if(L.last_lit!==0)for(;C=L.pending_buf[L.d_buf+2*Q]<<8|L.pending_buf[L.d_buf+2*Q+1],b=L.pending_buf[L.l_buf+Q],Q++,C===0?D(L,b,O):(D(L,(H=M[b])+f+1,O),(Z=R[H])!==0&&et(L,b-=X[H],Z),D(L,H=K(--C),j),(Z=B[H])!==0&&et(L,C-=J[H],Z)),Q<L.last_lit;);D(L,_,O)}function V(L,O){var j,C,b,H=O.dyn_tree,Z=O.stat_desc.static_tree,Q=O.stat_desc.has_stree,ot=O.stat_desc.elems,St=-1;for(L.heap_len=0,L.heap_max=g,j=0;j<ot;j++)H[2*j]!==0?(L.heap[++L.heap_len]=St=j,L.depth[j]=0):H[2*j+1]=0;for(;L.heap_len<2;)H[2*(b=L.heap[++L.heap_len]=St<2?++St:0)]=1,L.depth[b]=0,L.opt_len--,Q&&(L.static_len-=Z[2*b+1]);for(O.max_code=St,j=L.heap_len>>1;1<=j;j--)ht(L,H,j);for(b=ot;j=L.heap[1],L.heap[1]=L.heap[L.heap_len--],ht(L,H,1),C=L.heap[1],L.heap[--L.heap_max]=j,L.heap[--L.heap_max]=C,H[2*b]=H[2*j]+H[2*C],L.depth[b]=(L.depth[j]>=L.depth[C]?L.depth[j]:L.depth[C])+1,H[2*j+1]=H[2*C+1]=b,L.heap[1]=b++,ht(L,H,1),2<=L.heap_len;);L.heap[--L.heap_max]=L.heap[1],function(vt,_t){var Mt,Pt,yt,Ut,Ot,Ct,Tt=_t.dyn_tree,It=_t.max_code,jt=_t.stat_desc.static_tree,zt=_t.stat_desc.has_stree,ae=_t.stat_desc.extra_bits,at=_t.stat_desc.extra_base,Et=_t.stat_desc.max_length,ut=0;for(Ut=0;Ut<=m;Ut++)vt.bl_count[Ut]=0;for(Tt[2*vt.heap[vt.heap_max]+1]=0,Mt=vt.heap_max+1;Mt<g;Mt++)Et<(Ut=Tt[2*Tt[2*(Pt=vt.heap[Mt])+1]+1]+1)&&(Ut=Et,ut++),Tt[2*Pt+1]=Ut,It<Pt||(vt.bl_count[Ut]++,Ot=0,at<=Pt&&(Ot=ae[Pt-at]),Ct=Tt[2*Pt],vt.opt_len+=Ct*(Ut+Ot),zt&&(vt.static_len+=Ct*(jt[2*Pt+1]+Ot)));if(ut!==0){do{for(Ut=Et-1;vt.bl_count[Ut]===0;)Ut--;vt.bl_count[Ut]--,vt.bl_count[Ut+1]+=2,vt.bl_count[Et]--,ut-=2}while(0<ut);for(Ut=Et;Ut!==0;Ut--)for(Pt=vt.bl_count[Ut];Pt!==0;)It<(yt=vt.heap[--Mt])||(Tt[2*yt+1]!==Ut&&(vt.opt_len+=(Ut-Tt[2*yt+1])*Tt[2*yt],Tt[2*yt+1]=Ut),Pt--)}}(L,O),W(H,St,L.bl_count)}function x(L,O,j){var C,b,H=-1,Z=O[1],Q=0,ot=7,St=4;for(Z===0&&(ot=138,St=3),O[2*(j+1)+1]=65535,C=0;C<=j;C++)b=Z,Z=O[2*(C+1)+1],++Q<ot&&b===Z||(Q<St?L.bl_tree[2*b]+=Q:b!==0?(b!==H&&L.bl_tree[2*b]++,L.bl_tree[2*S]++):Q<=10?L.bl_tree[2*E]++:L.bl_tree[2*I]++,H=b,St=(Q=0)===Z?(ot=138,3):b===Z?(ot=6,3):(ot=7,4))}function z(L,O,j){var C,b,H=-1,Z=O[1],Q=0,ot=7,St=4;for(Z===0&&(ot=138,St=3),C=0;C<=j;C++)if(b=Z,Z=O[2*(C+1)+1],!(++Q<ot&&b===Z)){if(Q<St)for(;D(L,b,L.bl_tree),--Q!=0;);else b!==0?(b!==H&&(D(L,b,L.bl_tree),Q--),D(L,S,L.bl_tree),et(L,Q-3,2)):Q<=10?(D(L,E,L.bl_tree),et(L,Q-3,3)):(D(L,I,L.bl_tree),et(L,Q-11,7));H=b,St=(Q=0)===Z?(ot=138,3):b===Z?(ot=6,3):(ot=7,4)}}l(J);var F=!1;function P(L,O,j,C){et(L,(u<<1)+(C?1:0),3),function(b,H,Z,Q){it(b),xt(b,Z),xt(b,~Z),s.arraySet(b.pending_buf,b.window,H,Z,b.pending),b.pending+=Z}(L,O,j)}r._tr_init=function(L){F||(function(){var O,j,C,b,H,Z=new Array(m+1);for(b=C=0;b<c-1;b++)for(X[b]=C,O=0;O<1<<R[b];O++)M[C++]=b;for(M[C-1]=b,b=H=0;b<16;b++)for(J[b]=H,O=0;O<1<<B[b];O++)N[H++]=b;for(H>>=7;b<d;b++)for(J[b]=H<<7,O=0;O<1<<B[b]-7;O++)N[256+H++]=b;for(j=0;j<=m;j++)Z[j]=0;for(O=0;O<=143;)U[2*O+1]=8,O++,Z[8]++;for(;O<=255;)U[2*O+1]=9,O++,Z[9]++;for(;O<=279;)U[2*O+1]=7,O++,Z[7]++;for(;O<=287;)U[2*O+1]=8,O++,Z[8]++;for(W(U,p+1,Z),O=0;O<d;O++)A[2*O+1]=5,A[2*O]=Y(O,5);tt=new lt(U,R,f+1,p,m),q=new lt(A,B,0,d,m),nt=new lt(new Array(0),k,0,v,y)}(),F=!0),L.l_desc=new $(L.dyn_ltree,tt),L.d_desc=new $(L.dyn_dtree,q),L.bl_desc=new $(L.bl_tree,nt),L.bi_buf=0,L.bi_valid=0,rt(L)},r._tr_stored_block=P,r._tr_flush_block=function(L,O,j,C){var b,H,Z=0;0<L.level?(L.strm.data_type===2&&(L.strm.data_type=function(Q){var ot,St=4093624447;for(ot=0;ot<=31;ot++,St>>>=1)if(1&St&&Q.dyn_ltree[2*ot]!==0)return o;if(Q.dyn_ltree[18]!==0||Q.dyn_ltree[20]!==0||Q.dyn_ltree[26]!==0)return a;for(ot=32;ot<f;ot++)if(Q.dyn_ltree[2*ot]!==0)return a;return o}(L)),V(L,L.l_desc),V(L,L.d_desc),Z=function(Q){var ot;for(x(Q,Q.dyn_ltree,Q.l_desc.max_code),x(Q,Q.dyn_dtree,Q.d_desc.max_code),V(Q,Q.bl_desc),ot=v-1;3<=ot&&Q.bl_tree[2*T[ot]+1]===0;ot--);return Q.opt_len+=3*(ot+1)+5+5+4,ot}(L),b=L.opt_len+3+7>>>3,(H=L.static_len+3+7>>>3)<=b&&(b=H)):b=H=j+5,j+4<=b&&O!==-1?P(L,O,j,C):L.strategy===4||H===b?(et(L,2+(C?1:0),3),w(L,U,A)):(et(L,4+(C?1:0),3),function(Q,ot,St,vt){var _t;for(et(Q,ot-257,5),et(Q,St-1,5),et(Q,vt-4,4),_t=0;_t<vt;_t++)et(Q,Q.bl_tree[2*T[_t]+1],3);z(Q,Q.dyn_ltree,ot-1),z(Q,Q.dyn_dtree,St-1)}(L,L.l_desc.max_code+1,L.d_desc.max_code+1,Z+1),w(L,L.dyn_ltree,L.dyn_dtree)),rt(L),C&&it(L)},r._tr_tally=function(L,O,j){return L.pending_buf[L.d_buf+2*L.last_lit]=O>>>8&255,L.pending_buf[L.d_buf+2*L.last_lit+1]=255&O,L.pending_buf[L.l_buf+L.last_lit]=255&j,L.last_lit++,O===0?L.dyn_ltree[2*j]++:(L.matches++,O--,L.dyn_ltree[2*(M[j]+f+1)]++,L.dyn_dtree[2*K(O)]++),L.last_lit===L.lit_bufsize-1},r._tr_align=function(L){et(L,2,3),D(L,_,U),function(O){O.bi_valid===16?(xt(O,O.bi_buf),O.bi_buf=0,O.bi_valid=0):8<=O.bi_valid&&(O.pending_buf[O.pending++]=255&O.bi_buf,O.bi_buf>>=8,O.bi_valid-=8)}(L)}},{"../utils/common":41}],53:[function(e,i,r){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,i,r){(function(s){(function(o,a){if(!o.setImmediate){var l,u,c,f,p=1,d={},v=!1,g=o.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(o);m=m&&m.setTimeout?m:o,l={}.toString.call(o.process)==="[object process]"?function(S){process.nextTick(function(){y(S)})}:function(){if(o.postMessage&&!o.importScripts){var S=!0,E=o.onmessage;return o.onmessage=function(){S=!1},o.postMessage("","*"),o.onmessage=E,S}}()?(f="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",_,!1):o.attachEvent("onmessage",_),function(S){o.postMessage(f+S,"*")}):o.MessageChannel?((c=new MessageChannel).port1.onmessage=function(S){y(S.data)},function(S){c.port2.postMessage(S)}):g&&"onreadystatechange"in g.createElement("script")?(u=g.documentElement,function(S){var E=g.createElement("script");E.onreadystatechange=function(){y(S),E.onreadystatechange=null,u.removeChild(E),E=null},u.appendChild(E)}):function(S){setTimeout(y,0,S)},m.setImmediate=function(S){typeof S!="function"&&(S=new Function(""+S));for(var E=new Array(arguments.length-1),I=0;I<E.length;I++)E[I]=arguments[I+1];var R={callback:S,args:E};return d[p]=R,l(p),p++},m.clearImmediate=h}function h(S){delete d[S]}function y(S){if(v)setTimeout(y,0,S);else{var E=d[S];if(E){v=!0;try{(function(I){var R=I.callback,B=I.args;switch(B.length){case 0:R();break;case 1:R(B[0]);break;case 2:R(B[0],B[1]);break;case 3:R(B[0],B[1],B[2]);break;default:R.apply(a,B)}})(E)}finally{h(S),v=!1}}}}function _(S){S.source===o&&typeof S.data=="string"&&S.data.indexOf(f)===0&&y(+S.data.slice(f.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof ta<"u"?ta:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(wd);var yb=wd.exports;const Mb=xb(yb),Sb={class:"converter-page"},bb={class:"conv-panel"},Eb={class:"panel-header"},wb={class:"header-actions"},Tb={class:"global-settings"},Ab={class:"setting-row"},Cb={class:"mode-toggle"},Rb={class:"setting-row"},Pb={class:"fps-row"},Ib={class:"fps-presets"},Lb=["onClick"],Db={class:"input-with-unit"},Ub={class:"setting-row"},Nb={class:"input-with-unit"},Ob={key:0,class:"mode-hint"},Fb={class:"add-file-area"},Bb={key:0,class:"task-list"},kb={class:"task-list-header"},zb=["onClick"],Gb={class:"task-name"},Hb={class:"task-meta"},Vb={key:0},Wb={key:0,class:"task-progress"},Xb={class:"prog-bar"},qb={class:"prog-pct"},jb=["onClick"],$b=["onClick"],Yb=["href","download"],Zb=["onClick"],Kb={key:1,class:"empty-hint"},Jb={key:0,class:"preview-placeholder"},Qb={class:"video-preview-wrap"},tE=["src"],eE={class:"status-area"},nE={class:"status-header"},iE={class:"status-text"},rE={class:"task-info-badges"},sE={class:"info-badge"},aE={class:"info-badge"},oE={class:"info-badge"},lE={key:0,class:"progress-wrap"},cE={class:"progress-bar"},uE={class:"progress-pct"},fE={key:1,class:"error-msg"},hE={class:"file-info-inline"},dE={key:0},pE={key:1},mE={class:"action-row"},gE=["href","download"],_E={__name:"VideoConverter",setup(n){const t=ie("gif"),e=ie(24),i=ie(960),r=[12,16,24,30],s=ie([]),o=ie(null),a=ie(null),l=ie(null);let u=0;const c=ve(()=>s.value.find(D=>D.id===o.value)||null),f=ve(()=>s.value.some(D=>D.status==="running"));function p(D){v(Array.from(D.target.files||[])),D.target.value=""}function d(D){var W;const Y=Array.from(((W=D.dataTransfer)==null?void 0:W.files)||[]).filter(rt=>/\.(mp4|mov|webm)$/i.test(rt.name));Y.length&&v(Y)}function v(D){for(const Y of D){if(!/\.(mp4|mov|webm)$/i.test(Y.name)||Y.size>500*1024*1024)continue;const rt={id:++u,file:Y,objectUrl:URL.createObjectURL(Y),status:"idle",statusText:"等待开始",progress:0,duration:0,origW:0,origH:0,downloadUrl:"",downloadName:"",errorMsg:"",cancelled:!1,mode:t.value,fps:e.value,width:i.value};s.value.push(rt),o.value||(o.value=rt.id)}}function g(D){o.value=D.id}function m(D){var Y;D.status==="running"&&(D.cancelled=!0),URL.revokeObjectURL(D.objectUrl),D.downloadUrl&&URL.revokeObjectURL(D.downloadUrl),s.value=s.value.filter(W=>W.id!==D.id),o.value===D.id&&(o.value=((Y=s.value[0])==null?void 0:Y.id)||null)}function h(){s.value.filter(D=>D.status==="done"||D.status==="cancelled").forEach(D=>{URL.revokeObjectURL(D.objectUrl),D.downloadUrl&&URL.revokeObjectURL(D.downloadUrl)}),s.value=s.value.filter(D=>D.status!=="done"&&D.status!=="cancelled")}function y(){s.value.forEach(D=>{D.status==="running"&&(D.cancelled=!0)})}async function _(){for(const D of s.value)(D.status==="idle"||D.status==="error")&&await E(D)}function S(D,Y){const W=D.target;Y.duration=W.duration,Y.origW=W.videoWidth,Y.origH=W.videoHeight,(!Y.width||Y.width===960)&&(Y.width=W.videoWidth||960)}async function E(D){if(D.status==="running")return;D.mode=t.value,D.fps=e.value,D.width=i.value,D.cancelled=!1,D.status="running",D.progress=0,D.errorMsg="",D.statusText="正在转换…",D.downloadUrl&&(URL.revokeObjectURL(D.downloadUrl),D.downloadUrl="");const Y=l.value;if(!Y){U(D,"画布初始化失败");return}const W=await I(D.objectUrl);if(!W){U(D,"视频加载失败");return}D.duration=D.duration||W.duration,D.origW=D.origW||W.videoWidth,D.origH=D.origH||W.videoHeight;const rt=D.width,it=D.origH?Math.round(rt*D.origH/D.origW):Math.round(rt*9/16);Y.width=rt,Y.height=it;const mt=Y.getContext("2d"),ht=W.duration,w=1/D.fps,V=Math.ceil(ht*D.fps);if(V>1500){U(D,`帧数过多 (${V})，请降低帧率（建议 ≤ 30fps × 时长）`);return}try{D.mode==="gif"?await R(D,W,Y,mt,ht,w,V,rt,it):D.mode==="png"?await B(D,W,Y,mt,ht,w,V,rt,it):await k(D,W,Y,mt,ht,w,V,rt,it)}catch(x){D.cancelled?(D.status="cancelled",D.statusText="已取消"):U(D,"转换失败："+((x==null?void 0:x.message)||String(x)))}}function I(D){return new Promise(Y=>{const W=document.createElement("video");W.muted=!0,W.preload="metadata",W.src=D,W.onloadeddata=()=>Y(W),W.onerror=()=>Y(null),W.load()})}async function R(D,Y,W,rt,it,mt,ht,w,V){const x=Math.round(1e3/D.fps),z=[];for(let P=0;P<ht;P++){if(D.cancelled)throw new Error("cancelled");const L=P*mt;await nt(Y,Math.min(L,it-.001)),rt.drawImage(Y,0,0,w,V);const O=rt.getImageData(0,0,w,V);z.push(O),D.progress=Math.round((P+1)/ht*80),D.statusText=`采集帧 ${P+1} / ${ht}`,P%3===0&&await lt(0)}if(D.cancelled)throw new Error("cancelled");D.statusText="正在编码 GIF…";const F=await N(z,w,V,x,P=>{D.progress=80+Math.round(P*20)});if(D.cancelled)throw new Error("cancelled");T(D,F,xt(D.file.name)+".gif",`GIF 完成，共 ${ht} 帧`)}async function B(D,Y,W,rt,it,mt,ht,w,V){const x=new Mb,z=x.folder("frames");for(let P=0;P<ht;P++){if(D.cancelled)throw new Error("cancelled");const L=P*mt;await nt(Y,Math.min(L,it-.001)),rt.drawImage(Y,0,0,w,V);const O=await J(W,"image/png");z.file(`frame_${String(P+1).padStart(4,"0")}.png`,O),D.progress=Math.round((P+1)/ht*80),D.statusText=`导出帧 ${P+1} / ${ht}`,P%5===0&&await lt(0)}if(D.cancelled)throw new Error("cancelled");D.statusText="打包 ZIP…";const F=await x.generateAsync({type:"blob",compression:"DEFLATE"},P=>{D.progress=80+Math.round(P.percent*.2)});T(D,F,xt(D.file.name)+"_frames.zip",`PNG 完成，共 ${ht} 帧`)}async function k(D,Y,W,rt,it,mt,ht,w,V){const x=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm",z=W.captureStream(D.fps),F=[],P=new MediaRecorder(z,{mimeType:x,videoBitsPerSecond:8e6});P.ondataavailable=j=>{j.data.size>0&&F.push(j.data)};const L=new Promise(j=>{P.onstop=j});P.start();for(let j=0;j<ht;j++){if(D.cancelled)throw P.stop(),await L,new Error("cancelled");const C=j*mt;await nt(Y,Math.min(C,it-.001)),rt.drawImage(Y,0,0,w,V),D.progress=Math.round((j+1)/ht*100),D.statusText=`录制帧 ${j+1} / ${ht}`,await lt(Math.max(16,Math.round(1e3/D.fps)))}P.stop(),await L;const O=new Blob(F,{type:x});T(D,O,xt(D.file.name)+".webm",`WebM 完成，共 ${ht} 帧`)}function T(D,Y,W,rt){D.downloadUrl=URL.createObjectURL(Y),D.downloadName=W,D.status="done",D.statusText=rt,D.progress=100}function U(D,Y){D.status="error",D.statusText="转换失败",D.errorMsg=Y,D.progress=0}function A(D){D.cancelled=!0}async function N(D,Y,W,rt,it){const mt=[],ht=z=>{for(let F=0;F<z.length;F++)mt.push(z.charCodeAt(F))},w=z=>mt.push(z&255),V=z=>{mt.push(z&255),mt.push(z>>8&255)};ht("GIF89a"),V(Y),V(W),w(112),w(0),w(0),w(33),w(255),w(11),ht("NETSCAPE2.0"),w(3),w(1),V(0),w(0);const x=D.length;for(let z=0;z<x;z++){const P=D[z].data,{palette:L,indexed:O}=M(P,Y*W);w(33),w(249),w(4),w(4),V(Math.round(rt/10)),w(0),w(0),w(44),V(0),V(0),V(Y),V(W),w(135);for(let b=0;b<256;b++){const H=b*3;w(L[H]||0),w(L[H+1]||0),w(L[H+2]||0)}w(8);const j=q(O,8);let C=0;for(;C<j.length;){const b=Math.min(255,j.length-C);w(b);for(let H=0;H<b;H++)mt.push(j[C+H]);C+=b}w(0),it&&it((z+1)/x),z%3===0&&await lt(0)}return w(59),new Blob([new Uint8Array(mt)],{type:"image/gif"})}function M(D,Y){const W=[],rt=Math.max(1,Math.floor(Y/4e3));for(let w=0;w<Y;w+=rt){const V=w*4;W.push([D[V],D[V+1],D[V+2]])}const it=X(W,8);for(;it.length<256;)it.push([0,0,0]);const mt=new Uint8Array(Y);for(let w=0;w<Y;w++){const V=w*4;mt[w]=tt(D[V],D[V+1],D[V+2],it)}const ht=new Uint8Array(256*3);for(let w=0;w<256;w++)ht[w*3]=it[w][0],ht[w*3+1]=it[w][1],ht[w*3+2]=it[w][2];return{palette:ht,indexed:mt}}function X(D,Y){if(Y===0||D.length===0){if(D.length===0)return[[0,0,0]];const L=Math.round(D.reduce((C,b)=>C+b[0],0)/D.length),O=Math.round(D.reduce((C,b)=>C+b[1],0)/D.length),j=Math.round(D.reduce((C,b)=>C+b[2],0)/D.length);return[[L,O,j]]}let W=255,rt=0,it=255,mt=0,ht=255,w=0;for(const[L,O,j]of D)L<W&&(W=L),L>rt&&(rt=L),O<it&&(it=O),O>mt&&(mt=O),j<ht&&(ht=j),j>w&&(w=j);const V=rt-W,x=mt-it,z=w-ht;let F=0;x>=V&&x>=z?F=1:z>=V&&z>=x&&(F=2),D.sort((L,O)=>L[F]-O[F]);const P=Math.floor(D.length/2);return[...X(D.slice(0,P),Y-1),...X(D.slice(P),Y-1)]}function tt(D,Y,W,rt){let it=0,mt=1/0;for(let ht=0;ht<rt.length;ht++){const w=D-rt[ht][0],V=Y-rt[ht][1],x=W-rt[ht][2],z=w*w+V*V+x*x;z<mt&&(mt=z,it=ht)}return it}function q(D,Y){const W=1<<Y,rt=W+1;let it=Y+1,mt=rt+1;const ht=()=>1<<it,w=[];let V=0,x=0;const z=O=>{for(V|=O<<x,x+=it;x>=8;)w.push(V&255),V>>=8,x-=8};let F=new Map;const P=()=>{F=new Map;for(let O=0;O<W;O++)F.set(String(O),O);mt=rt+1,it=Y+1};P(),z(W);let L="";for(let O=0;O<D.length;O++){const j=String(D[O]),C=L?L+","+j:j;F.has(C)?L=C:(z(F.get(L)),mt<4096?(F.set(C,mt++),mt>ht()&&it<12&&it++):(z(W),P()),L=j)}return L&&z(F.get(L)),z(rt),x>0&&w.push(V&255),w}function nt(D,Y){return new Promise((W,rt)=>{if(Math.abs(D.currentTime-Y)<.001){W();return}const it=()=>{D.removeEventListener("seeked",it),W()},mt=()=>{D.removeEventListener("error",mt),rt(new Error("seek error"))};D.addEventListener("seeked",it,{once:!0}),D.addEventListener("error",mt,{once:!0}),D.currentTime=Y})}function J(D,Y){return new Promise(W=>D.toBlob(W,Y))}function lt(D){return new Promise(Y=>setTimeout(Y,D))}function $(D){return D<1024?D+" B":D<1048576?(D/1024).toFixed(1)+" KB":(D/1048576).toFixed(2)+" MB"}function K(D){if(!D||!isFinite(D))return"";const Y=Math.floor(D/60),W=(D%60).toFixed(1);return`${Y}:${String(W).padStart(4,"0")}`}function xt(D){return D.replace(/\.[^.]+$/,"")}function et(D){return{idle:"等待",running:"转换中",done:"完成",error:"失败",cancelled:"已取消"}[D]||D}return Rl(()=>{s.value.forEach(D=>{D.cancelled=!0,URL.revokeObjectURL(D.objectUrl),D.downloadUrl&&URL.revokeObjectURL(D.downloadUrl)})}),(D,Y)=>(Bt(),Gt("div",Sb,[st("div",bb,[st("div",Eb,[Y[13]||(Y[13]=st("span",{class:"panel-title"},"视频素材转换",-1)),st("div",wb,[s.value.length?(Bt(),Gt("button",{key:0,class:"btn-ghost btn-xs",onClick:h,title:"清除已完成"},[...Y[12]||(Y[12]=[st("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[st("polyline",{points:"3 6 5 6 21 6"}),st("path",{d:"M19 6l-1 14H6L5 6"}),st("path",{d:"M10 11v6M14 11v6"})],-1)])])):me("",!0),f.value?(Bt(),Gt("button",{key:1,class:"btn-ghost btn-xs btn-danger",onClick:y},"取消全部")):me("",!0)])]),st("div",Tb,[Y[20]||(Y[20]=st("div",{class:"setting-title"},"输出设置",-1)),st("div",Ab,[Y[14]||(Y[14]=st("span",{class:"setting-label"},"输出格式",-1)),st("div",Cb,[st("button",{class:_e({active:t.value==="gif"}),onClick:Y[0]||(Y[0]=W=>t.value="gif")},"GIF 动图",2),st("button",{class:_e({active:t.value==="png"}),onClick:Y[1]||(Y[1]=W=>t.value="png")},"PNG 序列帧",2),st("button",{class:_e({active:t.value==="webm"}),onClick:Y[2]||(Y[2]=W=>t.value="webm")},"WebM 视频",2)])]),st("div",Rb,[Y[17]||(Y[17]=st("span",{class:"setting-label"},"帧率",-1)),st("div",Pb,[st("div",Ib,[(Bt(),Gt(Re,null,Ki(r,W=>st("button",{key:W,class:_e({active:e.value===W}),onClick:rt=>e.value=W},[Qn(Yt(W),1),Y[15]||(Y[15]=st("small",null,"fps",-1))],10,Lb)),64))]),st("div",Db,[jo(st("input",{type:"number","onUpdate:modelValue":Y[3]||(Y[3]=W=>e.value=W),min:"1",max:"60",step:"0.5",class:"num-input-sm"},null,512),[[Ic,e.value,void 0,{number:!0}]]),Y[16]||(Y[16]=st("span",{class:"unit"},"fps",-1))])])]),st("div",Ub,[Y[19]||(Y[19]=st("span",{class:"setting-label"},"输出宽度",-1)),st("div",Nb,[jo(st("input",{type:"number","onUpdate:modelValue":Y[4]||(Y[4]=W=>i.value=W),min:"64",max:"3840",step:"1",class:"num-input"},null,512),[[Ic,i.value,void 0,{number:!0}]]),Y[18]||(Y[18]=st("span",{class:"unit"},"px  (高度自动)",-1))])]),t.value==="gif"?(Bt(),Gt("div",Ob," GIF 最多 256 色，颜色丰富的视频建议使用 PNG 序列帧 ")):me("",!0)]),st("div",Fb,[st("input",{ref_key:"fileInput",ref:a,type:"file",accept:"video/mp4,video/quicktime,video/webm,.mp4,.mov,.webm",multiple:"",style:{display:"none"},onChange:p},null,544),st("button",{class:"btn-add",onClick:Y[5]||(Y[5]=W=>a.value.click())},[...Y[21]||(Y[21]=[st("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[st("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),st("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),Qn(" 添加视频文件 ",-1)])]),Y[22]||(Y[22]=st("div",{class:"add-hint"},"支持 MP4、MOV、WebM，可多选",-1))]),s.value.length?(Bt(),Gt("div",Bb,[st("div",kb,[st("span",null,"任务队列 ("+Yt(s.value.length)+")",1),s.value.length>1&&!f.value?(Bt(),Gt("button",{key:0,class:"btn-link",onClick:_},"全部开始")):me("",!0)]),(Bt(!0),Gt(Re,null,Ki(s.value,W=>(Bt(),Gt("div",{key:W.id,class:_e(["task-item","task-"+W.status]),onClick:rt=>g(W),style:_n({cursor:"pointer",outline:o.value===W.id?"1px solid var(--border-hover, #444)":"none"})},[st("div",Gb,Yt(W.file.name),1),st("div",Hb,[Qn(Yt($(W.file.size))+" ",1),W.duration?(Bt(),Gt("span",Vb," · "+Yt(K(W.duration)),1)):me("",!0),st("span",{class:_e(["task-badge","badge-"+W.status])},Yt(et(W.status)),3)]),W.status==="running"?(Bt(),Gt("div",Wb,[st("div",Xb,[st("div",{class:"prog-fill",style:_n({width:W.progress+"%"})},null,4)]),st("span",qb,Yt(Math.round(W.progress))+"%",1)])):me("",!0),st("div",{class:"task-actions",onClick:Y[7]||(Y[7]=ts(()=>{},["stop"]))},[W.status==="idle"||W.status==="error"?(Bt(),Gt("button",{key:0,class:"task-btn",onClick:rt=>E(W)},[...Y[23]||(Y[23]=[st("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"currentColor"},[st("polygon",{points:"5 3 19 12 5 21 5 3"})],-1)])],8,jb)):me("",!0),W.status==="running"?(Bt(),Gt("button",{key:1,class:"task-btn btn-cancel",onClick:rt=>A(W)},[...Y[24]||(Y[24]=[st("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"currentColor"},[st("rect",{x:"6",y:"6",width:"12",height:"12",rx:"2"})],-1)])],8,$b)):me("",!0),W.downloadUrl?(Bt(),Gt("a",{key:2,href:W.downloadUrl,download:W.downloadName,class:"task-btn btn-dl",onClick:Y[6]||(Y[6]=ts(()=>{},["stop"]))},[...Y[25]||(Y[25]=[st("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[st("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),st("polyline",{points:"7 10 12 15 17 10"}),st("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1)])],8,Yb)):me("",!0),st("button",{class:"task-btn btn-remove",onClick:rt=>m(W)},[...Y[26]||(Y[26]=[st("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[st("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),st("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,Zb)])],14,zb))),128))])):(Bt(),Gt("div",Kb,[...Y[27]||(Y[27]=[st("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.2"},[st("polygon",{points:"23 7 16 12 23 17 23 7"}),st("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"})],-1),st("p",null,'还没有任务，点击"添加视频文件"开始',-1)])]))]),st("div",{class:"conv-preview",onDragover:Y[11]||(Y[11]=ts(()=>{},["prevent"])),onDrop:ts(d,["prevent"])},[c.value?me("",!0):(Bt(),Gt("div",Jb,[...Y[28]||(Y[28]=[st("svg",{width:"56",height:"56",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1"},[st("polygon",{points:"23 7 16 12 23 17 23 7"}),st("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"})],-1),st("p",null,"点击左侧任务可预览视频",-1),st("p",{class:"placeholder-sub"},"或拖拽视频文件到此处添加",-1)])])),c.value?(Bt(),Gt(Re,{key:1},[st("div",Qb,[(Bt(),Gt("video",{key:c.value.id,src:c.value.objectUrl,controls:"",muted:"",playsinline:"",class:"video-preview",onLoadedmetadata:Y[8]||(Y[8]=W=>S(W,c.value))},null,40,tE))]),st("div",eE,[st("div",nE,[st("div",{class:_e(["status-row","status-"+c.value.status])},[Y[29]||(Y[29]=st("span",{class:"status-dot"},null,-1)),st("span",iE,Yt(c.value.statusText||et(c.value.status)),1)],2),st("div",rE,[st("span",sE,Yt(t.value.toUpperCase()),1),st("span",aE,Yt(e.value)+" fps",1),st("span",oE,Yt(i.value)+"px",1)])]),c.value.status==="running"?(Bt(),Gt("div",lE,[st("div",cE,[st("div",{class:"progress-fill",style:_n({width:c.value.progress+"%"})},null,4)]),st("span",uE,Yt(Math.round(c.value.progress))+"%",1)])):me("",!0),c.value.errorMsg?(Bt(),Gt("div",fE,Yt(c.value.errorMsg),1)):me("",!0),st("div",hE,[st("span",null,Yt(c.value.file.name),1),st("span",null,Yt($(c.value.file.size)),1),c.value.duration?(Bt(),Gt("span",dE,Yt(K(c.value.duration)),1)):me("",!0),c.value.origW?(Bt(),Gt("span",pE,Yt(c.value.origW)+" × "+Yt(c.value.origH),1)):me("",!0)]),st("div",mE,[c.value.status==="idle"||c.value.status==="error"?(Bt(),Gt("button",{key:0,class:"btn-convert",onClick:Y[9]||(Y[9]=W=>E(c.value))}," 开始转换 ")):me("",!0),c.value.status==="running"?(Bt(),Gt("button",{key:1,class:"btn-cancel-big",onClick:Y[10]||(Y[10]=W=>A(c.value))}," 取消转换 ")):me("",!0),c.value.downloadUrl?(Bt(),Gt("a",{key:2,href:c.value.downloadUrl,download:c.value.downloadName,class:"btn-download"},[Y[30]||(Y[30]=st("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[st("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),st("polyline",{points:"7 10 12 15 17 10"}),st("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1)),Qn(" 下载 "+Yt(c.value.downloadName),1)],8,gE)):me("",!0)])])],64)):me("",!0)],32),st("canvas",{ref_key:"offCanvas",ref:l,style:{display:"none"}},null,512)]))}},vE=tr(_E,[["__scopeId","data-v-efa7390c"]]),xE=[{path:"/",component:vb},{path:"/convert",component:vE}],yE=m_({history:jg("/kskr-preview/"),routes:xE});ag(C_).use(yE).mount("#app");
