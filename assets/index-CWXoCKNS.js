(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ml(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const se={},Er=[],Dn=()=>{},vf=()=>!1,Ma=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ba=n=>n.startsWith("onUpdate:"),be=Object.assign,gl=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Id=Object.prototype.hasOwnProperty,te=(n,t)=>Id.call(n,t),Dt=Array.isArray,wr=n=>vs(n)==="[object Map]",xf=n=>vs(n)==="[object Set]",jl=n=>vs(n)==="[object Date]",kt=n=>typeof n=="function",pe=n=>typeof n=="string",Nn=n=>typeof n=="symbol",ee=n=>n!==null&&typeof n=="object",yf=n=>(ee(n)||kt(n))&&kt(n.then)&&kt(n.catch),Sf=Object.prototype.toString,vs=n=>Sf.call(n),Dd=n=>vs(n).slice(8,-1),Mf=n=>vs(n)==="[object Object]",_l=n=>pe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ts=ml(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ea=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Ud=/-\w/g,Xe=Ea(n=>n.replace(Ud,t=>t.slice(1).toUpperCase())),Nd=/\B([A-Z])/g,Ji=Ea(n=>n.replace(Nd,"-$1").toLowerCase()),wa=Ea(n=>n.charAt(0).toUpperCase()+n.slice(1)),Xa=Ea(n=>n?`on${wa(n)}`:""),Pn=(n,t)=>!Object.is(n,t),ea=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},bf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},vl=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Od=n=>{const t=pe(n)?Number(n):NaN;return isNaN(t)?n:t};let Yl;const Ta=()=>Yl||(Yl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jn(n){if(Dt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],r=pe(i)?zd(i):Jn(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(pe(n)||ee(n))return n}const Fd=/;(?![^(]*\))/g,kd=/:([^]+)/,Bd=/\/\*[^]*?\*\//g;function zd(n){const t={};return n.replace(Bd,"").split(Fd).forEach(e=>{if(e){const i=e.split(kd);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ye(n){let t="";if(pe(n))t=n;else if(Dt(n))for(let e=0;e<n.length;e++){const i=ye(n[e]);i&&(t+=i+" ")}else if(ee(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Gd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hd=ml(Gd);function Ef(n){return!!n||n===""}function Vd(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=xl(n[i],t[i]);return e}function xl(n,t){if(n===t)return!0;let e=jl(n),i=jl(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=Nn(n),i=Nn(t),e||i)return n===t;if(e=Dt(n),i=Dt(t),e||i)return e&&i?Vd(n,t):!1;if(e=ee(n),i=ee(t),e||i){if(!e||!i)return!1;const r=Object.keys(n).length,s=Object.keys(t).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!xl(n[o],t[o]))return!1}}return String(n)===String(t)}const wf=n=>!!(n&&n.__v_isRef===!0),ie=n=>pe(n)?n:n==null?"":Dt(n)||ee(n)&&(n.toString===Sf||!kt(n.toString))?wf(n)?ie(n.value):JSON.stringify(n,Tf,2):String(n),Tf=(n,t)=>wf(t)?Tf(n,t.value):wr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,r],s)=>(e[qa(i,s)+" =>"]=r,e),{})}:xf(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>qa(e))}:Nn(t)?qa(t):ee(t)&&!Dt(t)&&!Mf(t)?String(t):t,qa=(n,t="")=>{var e;return Nn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Re;class Wd{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Re&&(Re.active?(this.parent=Re,this.index=(Re.scopes||(Re.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Re;try{return Re=this,t()}finally{Re=e}}}on(){++this._on===1&&(this.prevScope=Re,Re=this)}off(){if(this._on>0&&--this._on===0){if(Re===this)Re=this.prevScope;else{let t=Re;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Xd(){return Re}let ce;const ja=new WeakSet;class Af{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Re&&(Re.active?Re.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ja.has(this)&&(ja.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,$l(this),Pf(this);const t=ce,e=_n;ce=this,_n=!0;try{return this.fn()}finally{Lf(this),ce=t,_n=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ml(t);this.deps=this.depsTail=void 0,$l(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ja.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Go(this)&&this.run()}get dirty(){return Go(this)}}let Cf=0,es,ns;function Rf(n,t=!1){if(n.flags|=8,t){n.next=ns,ns=n;return}n.next=es,es=n}function yl(){Cf++}function Sl(){if(--Cf>0)return;if(ns){let t=ns;for(ns=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;es;){let t=es;for(es=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Pf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Lf(n){let t,e=n.depsTail,i=e;for(;i;){const r=i.prevDep;i.version===-1?(i===e&&(e=r),Ml(i),qd(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=t,n.depsTail=e}function Go(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(If(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function If(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===cs)||(n.globalVersion=cs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Go(n))))return;n.flags|=2;const t=n.dep,e=ce,i=_n;ce=n,_n=!0;try{Pf(n);const r=n.fn(n._value);(t.version===0||Pn(r,n._value))&&(n.flags|=128,n._value=r,t.version++)}catch(r){throw t.version++,r}finally{ce=e,_n=i,Lf(n),n.flags&=-3}}function Ml(n,t=!1){const{dep:e,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)Ml(s,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function qd(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let _n=!0;const Df=[];function ti(){Df.push(_n),_n=!1}function ei(){const n=Df.pop();_n=n===void 0?!0:n}function $l(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=ce;ce=void 0;try{t()}finally{ce=e}}}let cs=0;class jd{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class bl{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ce||!_n||ce===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==ce)e=this.activeLink=new jd(ce,this),ce.deps?(e.prevDep=ce.depsTail,ce.depsTail.nextDep=e,ce.depsTail=e):ce.deps=ce.depsTail=e,Uf(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=ce.depsTail,e.nextDep=void 0,ce.depsTail.nextDep=e,ce.depsTail=e,ce.deps===e&&(ce.deps=i)}return e}trigger(t){this.version++,cs++,this.notify(t)}notify(t){yl();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Sl()}}}function Uf(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Uf(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Ho=new WeakMap,Xi=Symbol(""),Vo=Symbol(""),us=Symbol("");function Ue(n,t,e){if(_n&&ce){let i=Ho.get(n);i||Ho.set(n,i=new Map);let r=i.get(e);r||(i.set(e,r=new bl),r.map=i,r.key=e),r.track()}}function Yn(n,t,e,i,r,s){const o=Ho.get(n);if(!o){cs++;return}const a=l=>{l&&l.trigger()};if(yl(),t==="clear")o.forEach(a);else{const l=Dt(n),u=l&&_l(e);if(l&&e==="length"){const c=Number(i);o.forEach((f,p)=>{(p==="length"||p===us||!Nn(p)&&p>=c)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),u&&a(o.get(us)),t){case"add":l?u&&a(o.get("length")):(a(o.get(Xi)),wr(n)&&a(o.get(Vo)));break;case"delete":l||(a(o.get(Xi)),wr(n)&&a(o.get(Vo)));break;case"set":wr(n)&&a(o.get(Xi));break}}Sl()}function er(n){const t=Jt(n);return t===n?t:(Ue(t,"iterate",us),un(n)?t:t.map(xn))}function Aa(n){return Ue(n=Jt(n),"iterate",us),n}function An(n,t){return ni(n)?Pr(qi(n)?xn(t):t):xn(t)}const Yd={__proto__:null,[Symbol.iterator](){return Ya(this,Symbol.iterator,n=>An(this,n))},concat(...n){return er(this).concat(...n.map(t=>Dt(t)?er(t):t))},entries(){return Ya(this,"entries",n=>(n[1]=An(this,n[1]),n))},every(n,t){return Fn(this,"every",n,t,void 0,arguments)},filter(n,t){return Fn(this,"filter",n,t,e=>e.map(i=>An(this,i)),arguments)},find(n,t){return Fn(this,"find",n,t,e=>An(this,e),arguments)},findIndex(n,t){return Fn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Fn(this,"findLast",n,t,e=>An(this,e),arguments)},findLastIndex(n,t){return Fn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Fn(this,"forEach",n,t,void 0,arguments)},includes(...n){return $a(this,"includes",n)},indexOf(...n){return $a(this,"indexOf",n)},join(n){return er(this).join(n)},lastIndexOf(...n){return $a(this,"lastIndexOf",n)},map(n,t){return Fn(this,"map",n,t,void 0,arguments)},pop(){return Gr(this,"pop")},push(...n){return Gr(this,"push",n)},reduce(n,...t){return Zl(this,"reduce",n,t)},reduceRight(n,...t){return Zl(this,"reduceRight",n,t)},shift(){return Gr(this,"shift")},some(n,t){return Fn(this,"some",n,t,void 0,arguments)},splice(...n){return Gr(this,"splice",n)},toReversed(){return er(this).toReversed()},toSorted(n){return er(this).toSorted(n)},toSpliced(...n){return er(this).toSpliced(...n)},unshift(...n){return Gr(this,"unshift",n)},values(){return Ya(this,"values",n=>An(this,n))}};function Ya(n,t,e){const i=Aa(n),r=i[t]();return i!==n&&!un(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=e(s.value)),s}),r}const $d=Array.prototype;function Fn(n,t,e,i,r,s){const o=Aa(n),a=o!==n&&!un(n),l=o[t];if(l!==$d[t]){const f=l.apply(n,s);return a?xn(f):f}let u=e;o!==n&&(a?u=function(f,p){return e.call(this,An(n,f),p,n)}:e.length>2&&(u=function(f,p){return e.call(this,f,p,n)}));const c=l.call(o,u,i);return a&&r?r(c):c}function Zl(n,t,e,i){const r=Aa(n),s=r!==n&&!un(n);let o=e,a=!1;r!==n&&(s?(a=i.length===0,o=function(u,c,f){return a&&(a=!1,u=An(n,u)),e.call(this,u,An(n,c),f,n)}):e.length>3&&(o=function(u,c,f){return e.call(this,u,c,f,n)}));const l=r[t](o,...i);return a?An(n,l):l}function $a(n,t,e){const i=Jt(n);Ue(i,"iterate",us);const r=i[t](...e);return(r===-1||r===!1)&&Tl(e[0])?(e[0]=Jt(e[0]),i[t](...e)):r}function Gr(n,t,e=[]){ti(),yl();const i=Jt(n)[t].apply(n,e);return Sl(),ei(),i}const Zd=ml("__proto__,__v_isRef,__isVue"),Nf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Nn));function Kd(n){Nn(n)||(n=String(n));const t=Jt(this);return Ue(t,"has",n),t.hasOwnProperty(n)}class Of{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const r=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return i===(r?s?op:zf:s?Bf:kf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Dt(t);if(!r){let l;if(o&&(l=Yd[e]))return l;if(e==="hasOwnProperty")return Kd}const a=Reflect.get(t,e,Fe(t)?t:i);if((Nn(e)?Nf.has(e):Zd(e))||(r||Ue(t,"get",e),s))return a;if(Fe(a)){const l=o&&_l(e)?a:a.value;return r&&ee(l)?Xo(l):l}return ee(a)?r?Xo(a):Ca(a):a}}class Ff extends Of{constructor(t=!1){super(!1,t)}set(t,e,i,r){let s=t[e];const o=Dt(t)&&_l(e);if(!this._isShallow){const u=ni(s);if(!un(i)&&!ni(i)&&(s=Jt(s),i=Jt(i)),!o&&Fe(s)&&!Fe(i))return u||(s.value=i),!0}const a=o?Number(e)<t.length:te(t,e),l=Reflect.set(t,e,i,Fe(t)?t:r);return t===Jt(r)&&(a?Pn(i,s)&&Yn(t,"set",e,i):Yn(t,"add",e,i)),l}deleteProperty(t,e){const i=te(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&i&&Yn(t,"delete",e,void 0),r}has(t,e){const i=Reflect.has(t,e);return(!Nn(e)||!Nf.has(e))&&Ue(t,"has",e),i}ownKeys(t){return Ue(t,"iterate",Dt(t)?"length":Xi),Reflect.ownKeys(t)}}class Jd extends Of{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Qd=new Ff,tp=new Jd,ep=new Ff(!0);const Wo=n=>n,Cs=n=>Reflect.getPrototypeOf(n);function np(n,t,e){return function(...i){const r=this.__v_raw,s=Jt(r),o=wr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=r[n](...i),c=e?Wo:t?Pr:xn;return!t&&Ue(s,"iterate",l?Vo:Xi),be(Object.create(u),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:a?[c(f[0]),c(f[1])]:c(f),done:p}}})}}function Rs(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function ip(n,t){const e={get(r){const s=this.__v_raw,o=Jt(s),a=Jt(r);n||(Pn(r,a)&&Ue(o,"get",r),Ue(o,"get",a));const{has:l}=Cs(o),u=t?Wo:n?Pr:xn;if(l.call(o,r))return u(s.get(r));if(l.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Ue(Jt(r),"iterate",Xi),r.size},has(r){const s=this.__v_raw,o=Jt(s),a=Jt(r);return n||(Pn(r,a)&&Ue(o,"has",r),Ue(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Jt(a),u=t?Wo:n?Pr:xn;return!n&&Ue(l,"iterate",Xi),a.forEach((c,f)=>r.call(s,u(c),u(f),o))}};return be(e,n?{add:Rs("add"),set:Rs("set"),delete:Rs("delete"),clear:Rs("clear")}:{add(r){const s=Jt(this),o=Cs(s),a=Jt(r),l=!t&&!un(r)&&!ni(r)?a:r;return o.has.call(s,l)||Pn(r,l)&&o.has.call(s,r)||Pn(a,l)&&o.has.call(s,a)||(s.add(l),Yn(s,"add",l,l)),this},set(r,s){!t&&!un(s)&&!ni(s)&&(s=Jt(s));const o=Jt(this),{has:a,get:l}=Cs(o);let u=a.call(o,r);u||(r=Jt(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,s),u?Pn(s,c)&&Yn(o,"set",r,s):Yn(o,"add",r,s),this},delete(r){const s=Jt(this),{has:o,get:a}=Cs(s);let l=o.call(s,r);l||(r=Jt(r),l=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return l&&Yn(s,"delete",r,void 0),u},clear(){const r=Jt(this),s=r.size!==0,o=r.clear();return s&&Yn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=np(r,n,t)}),e}function El(n,t){const e=ip(n,t);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(te(e,r)&&r in i?e:i,r,s)}const rp={get:El(!1,!1)},sp={get:El(!1,!0)},ap={get:El(!0,!1)};const kf=new WeakMap,Bf=new WeakMap,zf=new WeakMap,op=new WeakMap;function lp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cp(n){return n.__v_skip||!Object.isExtensible(n)?0:lp(Dd(n))}function Ca(n){return ni(n)?n:wl(n,!1,Qd,rp,kf)}function Gf(n){return wl(n,!1,ep,sp,Bf)}function Xo(n){return wl(n,!0,tp,ap,zf)}function wl(n,t,e,i,r){if(!ee(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const s=cp(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:e);return r.set(n,a),a}function qi(n){return ni(n)?qi(n.__v_raw):!!(n&&n.__v_isReactive)}function ni(n){return!!(n&&n.__v_isReadonly)}function un(n){return!!(n&&n.__v_isShallow)}function Tl(n){return n?!!n.__v_raw:!1}function Jt(n){const t=n&&n.__v_raw;return t?Jt(t):n}function up(n){return!te(n,"__v_skip")&&Object.isExtensible(n)&&bf(n,"__v_skip",!0),n}const xn=n=>ee(n)?Ca(n):n,Pr=n=>ee(n)?Xo(n):n;function Fe(n){return n?n.__v_isRef===!0:!1}function jt(n){return Hf(n,!1)}function fp(n){return Hf(n,!0)}function Hf(n,t){return Fe(n)?n:new hp(n,t)}class hp{constructor(t,e){this.dep=new bl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Jt(t),this._value=e?t:xn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||un(t)||ni(t);t=i?t:Jt(t),Pn(t,e)&&(this._rawValue=t,this._value=i?t:xn(t),this.dep.trigger())}}function ji(n){return Fe(n)?n.value:n}const dp={get:(n,t,e)=>t==="__v_raw"?n:ji(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const r=n[t];return Fe(r)&&!Fe(e)?(r.value=e,!0):Reflect.set(n,t,e,i)}};function Vf(n){return qi(n)?n:new Proxy(n,dp)}class pp{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new bl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=cs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return Rf(this,!0),!0}get value(){const t=this.dep.track();return If(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function mp(n,t,e=!1){let i,r;return kt(n)?i=n:(i=n.get,r=n.set),new pp(i,r,e)}const Ps={},oa=new WeakMap;let Fi;function gp(n,t=!1,e=Fi){if(e){let i=oa.get(e);i||oa.set(e,i=[]),i.push(n)}}function _p(n,t,e=se){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=e,u=M=>r?M:un(M)||r===!1||r===0?$n(M,1):$n(M);let c,f,p,d,v=!1,g=!1;if(Fe(n)?(f=()=>n.value,v=un(n)):qi(n)?(f=()=>u(n),v=!0):Dt(n)?(g=!0,v=n.some(M=>qi(M)||un(M)),f=()=>n.map(M=>{if(Fe(M))return M.value;if(qi(M))return u(M);if(kt(M))return l?l(M,2):M()})):kt(n)?t?f=l?()=>l(n,2):n:f=()=>{if(p){ti();try{p()}finally{ei()}}const M=Fi;Fi=c;try{return l?l(n,3,[d]):n(d)}finally{Fi=M}}:f=Dn,t&&r){const M=f,E=r===!0?1/0:r;f=()=>$n(M(),E)}const m=Xd(),h=()=>{c.stop(),m&&m.active&&gl(m.effects,c)};if(s&&t){const M=t;t=(...E)=>{M(...E),h()}}let x=g?new Array(n.length).fill(Ps):Ps;const _=M=>{if(!(!(c.flags&1)||!c.dirty&&!M))if(t){const E=c.run();if(r||v||(g?E.some((P,C)=>Pn(P,x[C])):Pn(E,x))){p&&p();const P=Fi;Fi=c;try{const C=[E,x===Ps?void 0:g&&x[0]===Ps?[]:x,d];x=E,l?l(t,3,C):t(...C)}finally{Fi=P}}}else c.run()};return a&&a(_),c=new Af(f),c.scheduler=o?()=>o(_,!1):_,d=M=>gp(M,!1,c),p=c.onStop=()=>{const M=oa.get(c);if(M){if(l)l(M,4);else for(const E of M)E();oa.delete(c)}},t?i?_(!0):x=c.run():o?o(_.bind(null,!0),!0):c.run(),h.pause=c.pause.bind(c),h.resume=c.resume.bind(c),h.stop=h,h}function $n(n,t=1/0,e){if(t<=0||!ee(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Fe(n))$n(n.value,t,e);else if(Dt(n))for(let i=0;i<n.length;i++)$n(n[i],t,e);else if(xf(n)||wr(n))n.forEach(i=>{$n(i,t,e)});else if(Mf(n)){for(const i in n)$n(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&$n(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xs(n,t,e,i){try{return i?n(...i):n()}catch(r){Ra(r,t,e)}}function yn(n,t,e,i){if(kt(n)){const r=xs(n,t,e,i);return r&&yf(r)&&r.catch(s=>{Ra(s,t,e)}),r}if(Dt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(yn(n[s],t,e,i));return r}}function Ra(n,t,e,i=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||se;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}a=a.parent}if(s){ti(),xs(s,null,10,[n,l,u]),ei();return}}vp(n,e,r,i,o)}function vp(n,t,e,i=!0,r=!1){if(r)throw n;console.error(n)}const Ve=[];let En=-1;const Tr=[];let pi=null,vr=0;const Wf=Promise.resolve();let la=null;function Sr(n){const t=la||Wf;return n?t.then(this?n.bind(this):n):t}function xp(n){let t=En+1,e=Ve.length;for(;t<e;){const i=t+e>>>1,r=Ve[i],s=fs(r);s<n||s===n&&r.flags&2?t=i+1:e=i}return t}function Al(n){if(!(n.flags&1)){const t=fs(n),e=Ve[Ve.length-1];!e||!(n.flags&2)&&t>=fs(e)?Ve.push(n):Ve.splice(xp(t),0,n),n.flags|=1,Xf()}}function Xf(){la||(la=Wf.then(jf))}function yp(n){Dt(n)?Tr.push(...n):pi&&n.id===-1?pi.splice(vr+1,0,n):n.flags&1||(Tr.push(n),n.flags|=1),Xf()}function Kl(n,t,e=En+1){for(;e<Ve.length;e++){const i=Ve[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ve.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function qf(n){if(Tr.length){const t=[...new Set(Tr)].sort((e,i)=>fs(e)-fs(i));if(Tr.length=0,pi){pi.push(...t);return}for(pi=t,vr=0;vr<pi.length;vr++){const e=pi[vr];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}pi=null,vr=0}}const fs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function jf(n){try{for(En=0;En<Ve.length;En++){const t=Ve[En];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),xs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;En<Ve.length;En++){const t=Ve[En];t&&(t.flags&=-2)}En=-1,Ve.length=0,qf(),la=null,(Ve.length||Tr.length)&&jf()}}let nn=null,Yf=null;function ca(n){const t=nn;return nn=n,Yf=n&&n.type.__scopeId||null,t}function $f(n,t=nn,e){if(!t||n._n)return n;const i=(...r)=>{i._d&&ha(-1);const s=ca(t);let o;try{o=n(...r)}finally{ca(s),i._d&&ha(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function qo(n,t){if(nn===null)return n;const e=Ua(nn),i=n.dirs||(n.dirs=[]);for(let r=0;r<t.length;r++){let[s,o,a,l=se]=t[r];s&&(kt(s)&&(s={mounted:s,updated:s}),s.deep&&$n(o),i.push({dir:s,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ai(n,t,e,i){const r=n.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ti(),yn(l,e,8,[n.el,a,n,t]),ei())}}function na(n,t){if(Oe){let e=Oe.provides;const i=Oe.parent&&Oe.parent.provides;i===e&&(e=Oe.provides=Object.create(i)),e[n]=t}}function vn(n,t,e=!1){const i=Rh();if(i||Ar){let r=Ar?Ar._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return e&&kt(t)?t.call(i&&i.proxy):t}}const Sp=Symbol.for("v-scx"),Mp=()=>vn(Sp);function is(n,t,e){return Zf(n,t,e)}function Zf(n,t,e=se){const{immediate:i,deep:r,flush:s,once:o}=e,a=be({},e),l=t&&i||!t&&s!=="post";let u;if(ps){if(s==="sync"){const d=Mp();u=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Dn,d.resume=Dn,d.pause=Dn,d}}const c=Oe;a.call=(d,v,g)=>yn(d,c,v,g);let f=!1;s==="post"?a.scheduler=d=>{Ye(d,c&&c.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,v)=>{v?d():Al(d)}),a.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const p=_p(n,t,a);return ps&&(u?u.push(p):l&&p()),p}function bp(n,t,e){const i=this.proxy,r=pe(n)?n.includes(".")?Kf(i,n):()=>i[n]:n.bind(i,i);let s;kt(t)?s=t:(s=t.handler,e=t);const o=ys(this),a=Zf(r,s.bind(i),e);return o(),a}function Kf(n,t){const e=t.split(".");return()=>{let i=n;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}const Ep=Symbol("_vte"),Jf=n=>n.__isTeleport,wn=Symbol("_leaveCb"),Hr=Symbol("_enterCb");function wp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Cl(()=>{n.isMounted=!0}),Rl(()=>{n.isUnmounting=!0}),n}const ln=[Function,Array],Qf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ln,onEnter:ln,onAfterEnter:ln,onEnterCancelled:ln,onBeforeLeave:ln,onLeave:ln,onAfterLeave:ln,onLeaveCancelled:ln,onBeforeAppear:ln,onAppear:ln,onAfterAppear:ln,onAppearCancelled:ln},th=n=>{const t=n.subTree;return t.component?th(t.component):t},Tp={name:"BaseTransition",props:Qf,setup(n,{slots:t}){const e=Rh(),i=wp();return()=>{const r=t.default&&ih(t.default(),!0),s=r&&r.length?eh(r):e.subTree?en():void 0;if(!s)return;const o=Jt(n),{mode:a}=o;if(i.isLeaving)return Za(s);const l=Jl(s);if(!l)return Za(s);let u=jo(l,o,i,e,f=>u=f);l.type!==We&&hs(l,u);let c=e.subTree&&Jl(e.subTree);if(c&&c.type!==We&&!zi(c,l)&&th(e).type!==We){let f=jo(c,o,i,e);if(hs(c,f),a==="out-in"&&l.type!==We)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete f.afterLeave,c=void 0},Za(s);a==="in-out"&&l.type!==We?f.delayLeave=(p,d,v)=>{const g=nh(i,c);g[String(c.key)]=c,p[wn]=()=>{d(),p[wn]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{v(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function eh(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==We){t=e;break}}return t}const Ap=Tp;function nh(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function jo(n,t,e,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:p,onLeave:d,onAfterLeave:v,onLeaveCancelled:g,onBeforeAppear:m,onAppear:h,onAfterAppear:x,onAppearCancelled:_}=t,M=String(n.key),E=nh(e,n),P=(O,w)=>{O&&yn(O,i,9,w)},C=(O,w)=>{const D=w[1];P(O,w),Dt(O)?O.every(T=>T.length<=1)&&D():O.length<=1&&D()},N={mode:o,persisted:a,beforeEnter(O){let w=l;if(!e.isMounted)if(s)w=m||l;else return;O[wn]&&O[wn](!0);const D=E[M];D&&zi(n,D)&&D.el[wn]&&D.el[wn](),P(w,[O])},enter(O){if(E[M]===n)return;let w=u,D=c,T=f;if(!e.isMounted)if(s)w=h||u,D=x||c,T=_||f;else return;let U=!1;O[Hr]=H=>{U||(U=!0,H?P(T,[O]):P(D,[O]),N.delayedLeave&&N.delayedLeave(),O[Hr]=void 0)};const S=O[Hr].bind(null,!1);w?C(w,[O,S]):S()},leave(O,w){const D=String(n.key);if(O[Hr]&&O[Hr](!0),e.isUnmounting)return w();P(p,[O]);let T=!1;O[wn]=S=>{T||(T=!0,w(),S?P(g,[O]):P(v,[O]),O[wn]=void 0,E[D]===n&&delete E[D])};const U=O[wn].bind(null,!1);E[D]=n,d?C(d,[O,U]):U()},clone(O){const w=jo(O,t,e,i,r);return r&&r(w),w}};return N}function Za(n){if(Pa(n))return n=Mi(n),n.children=null,n}function Jl(n){if(!Pa(n))return Jf(n.type)&&n.children?eh(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&kt(e.default))return e.default()}}function hs(n,t){n.shapeFlag&6&&n.component?(n.transition=t,hs(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function ih(n,t=!1,e){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:s);o.type===Ne?(o.patchFlag&128&&r++,i=i.concat(ih(o.children,t,a))):(t||o.type!==We)&&i.push(a!=null?Mi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function rh(n,t){return kt(n)?be({name:n.name},t,{setup:n}):n}function sh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ql(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const ua=new WeakMap;function rs(n,t,e,i,r=!1){if(Dt(n)){n.forEach((g,m)=>rs(g,t&&(Dt(t)?t[m]:t),e,i,r));return}if(ss(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&rs(n,t,e,i.component.subTree);return}const s=i.shapeFlag&4?Ua(i.component):i.el,o=r?null:s,{i:a,r:l}=n,u=t&&t.r,c=a.refs===se?a.refs={}:a.refs,f=a.setupState,p=Jt(f),d=f===se?vf:g=>Ql(c,g)?!1:te(p,g),v=(g,m)=>!(m&&Ql(c,m));if(u!=null&&u!==l){if(tc(t),pe(u))c[u]=null,d(u)&&(f[u]=null);else if(Fe(u)){const g=t;v(u,g.k)&&(u.value=null),g.k&&(c[g.k]=null)}}if(kt(l))xs(l,a,12,[o,c]);else{const g=pe(l),m=Fe(l);if(g||m){const h=()=>{if(n.f){const x=g?d(l)?f[l]:c[l]:v()||!n.k?l.value:c[n.k];if(r)Dt(x)&&gl(x,s);else if(Dt(x))x.includes(s)||x.push(s);else if(g)c[l]=[s],d(l)&&(f[l]=c[l]);else{const _=[s];v(l,n.k)&&(l.value=_),n.k&&(c[n.k]=_)}}else g?(c[l]=o,d(l)&&(f[l]=o)):m&&(v(l,n.k)&&(l.value=o),n.k&&(c[n.k]=o))};if(o){const x=()=>{h(),ua.delete(n)};x.id=-1,ua.set(n,x),Ye(x,e)}else tc(n),h()}}}function tc(n){const t=ua.get(n);t&&(t.flags|=8,ua.delete(n))}Ta().requestIdleCallback;Ta().cancelIdleCallback;const ss=n=>!!n.type.__asyncLoader,Pa=n=>n.type.__isKeepAlive;function Cp(n,t){ah(n,"a",t)}function Rp(n,t){ah(n,"da",t)}function ah(n,t,e=Oe){const i=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(La(t,i,e),e){let r=e.parent;for(;r&&r.parent;)Pa(r.parent.vnode)&&Pp(i,t,e,r),r=r.parent}}function Pp(n,t,e,i){const r=La(t,n,i,!0);oh(()=>{gl(i[t],r)},e)}function La(n,t,e=Oe,i=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...o)=>{ti();const a=ys(e),l=yn(t,e,n,o);return a(),ei(),l});return i?r.unshift(s):r.push(s),s}}const si=n=>(t,e=Oe)=>{(!ps||n==="sp")&&La(n,(...i)=>t(...i),e)},Lp=si("bm"),Cl=si("m"),Ip=si("bu"),Dp=si("u"),Rl=si("bum"),oh=si("um"),Up=si("sp"),Np=si("rtg"),Op=si("rtc");function Fp(n,t=Oe){La("ec",n,t)}const kp="components";function Bp(n,t){return Gp(kp,n,!0,t)||n}const zp=Symbol.for("v-ndc");function Gp(n,t,e=!0,i=!1){const r=nn||Oe;if(r){const s=r.type;{const a=wm(s,!1);if(a&&(a===t||a===Xe(t)||a===wa(Xe(t))))return s}const o=ec(r[n]||s[n],t)||ec(r.appContext[n],t);return!o&&i?s:o}}function ec(n,t){return n&&(n[t]||n[Xe(t)]||n[wa(Xe(t))])}function Lr(n,t,e,i){let r;const s=e,o=Dt(n);if(o||pe(n)){const a=o&&qi(n);let l=!1,u=!1;a&&(l=!un(n),u=ni(n),n=Aa(n)),r=new Array(n.length);for(let c=0,f=n.length;c<f;c++)r[c]=t(l?u?Pr(xn(n[c])):xn(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=t(a+1,a,void 0,s)}else if(ee(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=t(n[c],c,l,s)}}else r=[];return r}const Yo=n=>n?Ph(n)?Ua(n):Yo(n.parent):null,as=be(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Yo(n.parent),$root:n=>Yo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ch(n),$forceUpdate:n=>n.f||(n.f=()=>{Al(n.update)}),$nextTick:n=>n.n||(n.n=Sr.bind(n.proxy)),$watch:n=>bp.bind(n)}),Ka=(n,t)=>n!==se&&!n.__isScriptSetup&&te(n,t),Hp={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(Ka(i,t))return o[t]=1,i[t];if(r!==se&&te(r,t))return o[t]=2,r[t];if(te(s,t))return o[t]=3,s[t];if(e!==se&&te(e,t))return o[t]=4,e[t];$o&&(o[t]=0)}}const u=as[t];let c,f;if(u)return t==="$attrs"&&Ue(n.attrs,"get",""),u(n);if((c=a.__cssModules)&&(c=c[t]))return c;if(e!==se&&te(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,te(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:r,ctx:s}=n;return Ka(r,t)?(r[t]=e,!0):i!==se&&te(i,t)?(i[t]=e,!0):te(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(e[a]||n!==se&&a[0]!=="$"&&te(n,a)||Ka(t,a)||te(s,a)||te(i,a)||te(as,a)||te(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:te(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function nc(n){return Dt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let $o=!0;function Vp(n){const t=ch(n),e=n.proxy,i=n.ctx;$o=!1,t.beforeCreate&&ic(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:p,beforeUpdate:d,updated:v,activated:g,deactivated:m,beforeDestroy:h,beforeUnmount:x,destroyed:_,unmounted:M,render:E,renderTracked:P,renderTriggered:C,errorCaptured:N,serverPrefetch:O,expose:w,inheritAttrs:D,components:T,directives:U,filters:S}=t;if(u&&Wp(u,i,null),o)for(const q in o){const tt=o[q];kt(tt)&&(i[q]=tt.bind(e))}if(r){const q=r.call(e,e);ee(q)&&(n.data=Ca(q))}if($o=!0,s)for(const q in s){const tt=s[q],Z=kt(tt)?tt.bind(e,e):kt(tt.get)?tt.get.bind(e,e):Dn,st=!kt(tt)&&kt(tt.set)?tt.set.bind(e):Dn,j=ge({get:Z,set:st});Object.defineProperty(i,q,{enumerable:!0,configurable:!0,get:()=>j.value,set:$=>j.value=$})}if(a)for(const q in a)lh(a[q],i,e,q);if(l){const q=kt(l)?l.call(e):l;Reflect.ownKeys(q).forEach(tt=>{na(tt,q[tt])})}c&&ic(c,n,"c");function J(q,tt){Dt(tt)?tt.forEach(Z=>q(Z.bind(e))):tt&&q(tt.bind(e))}if(J(Lp,f),J(Cl,p),J(Ip,d),J(Dp,v),J(Cp,g),J(Rp,m),J(Fp,N),J(Op,P),J(Np,C),J(Rl,x),J(oh,M),J(Up,O),Dt(w))if(w.length){const q=n.exposed||(n.exposed={});w.forEach(tt=>{Object.defineProperty(q,tt,{get:()=>e[tt],set:Z=>e[tt]=Z,enumerable:!0})})}else n.exposed||(n.exposed={});E&&n.render===Dn&&(n.render=E),D!=null&&(n.inheritAttrs=D),T&&(n.components=T),U&&(n.directives=U),O&&sh(n)}function Wp(n,t,e=Dn){Dt(n)&&(n=Zo(n));for(const i in n){const r=n[i];let s;ee(r)?"default"in r?s=vn(r.from||i,r.default,!0):s=vn(r.from||i):s=vn(r),Fe(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function ic(n,t,e){yn(Dt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function lh(n,t,e,i){let r=i.includes(".")?Kf(e,i):()=>e[i];if(pe(n)){const s=t[n];kt(s)&&is(r,s)}else if(kt(n))is(r,n.bind(e));else if(ee(n))if(Dt(n))n.forEach(s=>lh(s,t,e,i));else{const s=kt(n.handler)?n.handler.bind(e):t[n.handler];kt(s)&&is(r,s,n)}}function ch(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(u=>fa(l,u,o,!0)),fa(l,t,o)),ee(t)&&s.set(t,l),l}function fa(n,t,e,i=!1){const{mixins:r,extends:s}=t;s&&fa(n,s,e,!0),r&&r.forEach(o=>fa(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Xp[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Xp={data:rc,props:sc,emits:sc,methods:Jr,computed:Jr,beforeCreate:Be,created:Be,beforeMount:Be,mounted:Be,beforeUpdate:Be,updated:Be,beforeDestroy:Be,beforeUnmount:Be,destroyed:Be,unmounted:Be,activated:Be,deactivated:Be,errorCaptured:Be,serverPrefetch:Be,components:Jr,directives:Jr,watch:jp,provide:rc,inject:qp};function rc(n,t){return t?n?function(){return be(kt(n)?n.call(this,this):n,kt(t)?t.call(this,this):t)}:t:n}function qp(n,t){return Jr(Zo(n),Zo(t))}function Zo(n){if(Dt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Be(n,t){return n?[...new Set([].concat(n,t))]:t}function Jr(n,t){return n?be(Object.create(null),n,t):t}function sc(n,t){return n?Dt(n)&&Dt(t)?[...new Set([...n,...t])]:be(Object.create(null),nc(n),nc(t??{})):t}function jp(n,t){if(!n)return t;if(!t)return n;const e=be(Object.create(null),n);for(const i in t)e[i]=Be(n[i],t[i]);return e}function uh(){return{app:null,config:{isNativeTag:vf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yp=0;function $p(n,t){return function(i,r=null){kt(i)||(i=be({},i)),r!=null&&!ee(r)&&(r=null);const s=uh(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:Yp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Am,get config(){return s.config},set config(c){},use(c,...f){return o.has(c)||(c&&kt(c.install)?(o.add(c),c.install(u,...f)):kt(c)&&(o.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,p){if(!l){const d=u._ceVNode||Se(i,r);return d.appContext=s,p===!0?p="svg":p===!1&&(p=void 0),n(d,c,p),l=!0,u._container=c,c.__vue_app__=u,Ua(d.component)}},onUnmount(c){a.push(c)},unmount(){l&&(yn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=Ar;Ar=u;try{return c()}finally{Ar=f}}};return u}}let Ar=null;const Zp=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Xe(t)}Modifiers`]||n[`${Ji(t)}Modifiers`];function Kp(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||se;let r=e;const s=t.startsWith("update:"),o=s&&Zp(i,t.slice(7));o&&(o.trim&&(r=e.map(c=>pe(c)?c.trim():c)),o.number&&(r=e.map(vl)));let a,l=i[a=Xa(t)]||i[a=Xa(Xe(t))];!l&&s&&(l=i[a=Xa(Ji(t))]),l&&yn(l,n,6,r);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,yn(u,n,6,r)}}const Jp=new WeakMap;function fh(n,t,e=!1){const i=e?Jp:t.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!kt(n)){const l=u=>{const c=fh(u,t,!0);c&&(a=!0,be(o,c))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ee(n)&&i.set(n,null),null):(Dt(s)?s.forEach(l=>o[l]=null):be(o,s),ee(n)&&i.set(n,o),o)}function Ia(n,t){return!n||!Ma(t)?!1:(t=t.slice(2).replace(/Once$/,""),te(n,t[0].toLowerCase()+t.slice(1))||te(n,Ji(t))||te(n,t))}function ac(n){const{type:t,vnode:e,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:p,setupState:d,ctx:v,inheritAttrs:g}=n,m=ca(n);let h,x;try{if(e.shapeFlag&4){const M=r||i,E=M;h=Cn(u.call(E,M,c,f,d,p,v)),x=a}else{const M=t;h=Cn(M.length>1?M(f,{attrs:a,slots:o,emit:l}):M(f,null)),x=t.props?a:Qp(a)}}catch(M){os.length=0,Ra(M,n,1),h=Se(We)}let _=h;if(x&&g!==!1){const M=Object.keys(x),{shapeFlag:E}=_;M.length&&E&7&&(s&&M.some(ba)&&(x=tm(x,s)),_=Mi(_,x,!1,!0))}return e.dirs&&(_=Mi(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(e.dirs):e.dirs),e.transition&&hs(_,e.transition),h=_,ca(m),h}const Qp=n=>{let t;for(const e in n)(e==="class"||e==="style"||Ma(e))&&((t||(t={}))[e]=n[e]);return t},tm=(n,t)=>{const e={};for(const i in n)(!ba(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function em(n,t,e){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?oc(i,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const p=c[f];if(hh(o,i,p)&&!Ia(u,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?oc(i,o,u):!0:!!o;return!1}function oc(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(hh(t,n,s)&&!Ia(e,s))return!0}return!1}function hh(n,t,e){const i=n[e],r=t[e];return e==="style"&&ee(i)&&ee(r)?!xl(i,r):i!==r}function nm({vnode:n,parent:t,suspense:e},i){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const dh={},ph=()=>Object.create(dh),mh=n=>Object.getPrototypeOf(n)===dh;function im(n,t,e,i=!1){const r={},s=ph();n.propsDefaults=Object.create(null),gh(n,t,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);e?n.props=i?r:Gf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function rm(n,t,e,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Jt(r),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let p=c[f];if(Ia(n.emitsOptions,p))continue;const d=t[p];if(l)if(te(s,p))d!==s[p]&&(s[p]=d,u=!0);else{const v=Xe(p);r[v]=Ko(l,a,v,d,n,!1)}else d!==s[p]&&(s[p]=d,u=!0)}}}else{gh(n,t,r,s)&&(u=!0);let c;for(const f in a)(!t||!te(t,f)&&((c=Ji(f))===f||!te(t,c)))&&(l?e&&(e[f]!==void 0||e[c]!==void 0)&&(r[f]=Ko(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!t||!te(t,f))&&(delete s[f],u=!0)}u&&Yn(n.attrs,"set","")}function gh(n,t,e,i){const[r,s]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(ts(l))continue;const u=t[l];let c;r&&te(r,c=Xe(l))?!s||!s.includes(c)?e[c]=u:(a||(a={}))[c]=u:Ia(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=Jt(e),u=a||se;for(let c=0;c<s.length;c++){const f=s[c];e[f]=Ko(r,l,f,u[f],n,!te(u,f))}}return o}function Ko(n,t,e,i,r,s){const o=n[e];if(o!=null){const a=te(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&kt(l)){const{propsDefaults:u}=r;if(e in u)i=u[e];else{const c=ys(r);i=u[e]=l.call(null,t),c()}}else i=l;r.ce&&r.ce._setProp(e,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ji(e))&&(i=!0))}return i}const sm=new WeakMap;function _h(n,t,e=!1){const i=e?sm:t.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!kt(n)){const c=f=>{l=!0;const[p,d]=_h(f,t,!0);be(o,p),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!s&&!l)return ee(n)&&i.set(n,Er),Er;if(Dt(s))for(let c=0;c<s.length;c++){const f=Xe(s[c]);lc(f)&&(o[f]=se)}else if(s)for(const c in s){const f=Xe(c);if(lc(f)){const p=s[c],d=o[f]=Dt(p)||kt(p)?{type:p}:be({},p),v=d.type;let g=!1,m=!0;if(Dt(v))for(let h=0;h<v.length;++h){const x=v[h],_=kt(x)&&x.name;if(_==="Boolean"){g=!0;break}else _==="String"&&(m=!1)}else g=kt(v)&&v.name==="Boolean";d[0]=g,d[1]=m,(g||te(d,"default"))&&a.push(f)}}const u=[o,a];return ee(n)&&i.set(n,u),u}function lc(n){return n[0]!=="$"&&!ts(n)}const Pl=n=>n==="_"||n==="_ctx"||n==="$stable",Ll=n=>Dt(n)?n.map(Cn):[Cn(n)],am=(n,t,e)=>{if(t._n)return t;const i=$f((...r)=>Ll(t(...r)),e);return i._c=!1,i},vh=(n,t,e)=>{const i=n._ctx;for(const r in n){if(Pl(r))continue;const s=n[r];if(kt(s))t[r]=am(r,s,i);else if(s!=null){const o=Ll(s);t[r]=()=>o}}},xh=(n,t)=>{const e=Ll(t);n.slots.default=()=>e},yh=(n,t,e)=>{for(const i in t)(e||!Pl(i))&&(n[i]=t[i])},om=(n,t,e)=>{const i=n.slots=ph();if(n.vnode.shapeFlag&32){const r=t._;r?(yh(i,t,e),e&&bf(i,"_",r,!0)):vh(t,i)}else t&&xh(n,t)},lm=(n,t,e)=>{const{vnode:i,slots:r}=n;let s=!0,o=se;if(i.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:yh(r,t,e):(s=!t.$stable,vh(t,r)),o=t}else t&&(xh(n,t),o={default:1});if(s)for(const a in r)!Pl(a)&&o[a]==null&&delete r[a]},Ye=dm;function cm(n){return um(n)}function um(n,t){const e=Ta();e.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:p,setScopeId:d=Dn,insertStaticContent:v}=n,g=(R,X,y,z=null,B=null,L=null,I=void 0,F=null,Q=!!X.dynamicChildren)=>{if(R===X)return;R&&!zi(R,X)&&(z=nt(R),$(R,B,L,!0),R=null),X.patchFlag===-2&&(Q=!1,X.dynamicChildren=null);const{type:A,ref:b,shapeFlag:G}=X;switch(A){case Da:m(R,X,y,z);break;case We:h(R,X,y,z);break;case ia:R==null&&x(X,y,z,I);break;case Ne:T(R,X,y,z,B,L,I,F,Q);break;default:G&1?E(R,X,y,z,B,L,I,F,Q):G&6?U(R,X,y,z,B,L,I,F,Q):(G&64||G&128)&&A.process(R,X,y,z,B,L,I,F,Q,mt)}b!=null&&B?rs(b,R&&R.ref,L,X||R,!X):b==null&&R&&R.ref!=null&&rs(R.ref,null,L,R,!0)},m=(R,X,y,z)=>{if(R==null)i(X.el=a(X.children),y,z);else{const B=X.el=R.el;X.children!==R.children&&u(B,X.children)}},h=(R,X,y,z)=>{R==null?i(X.el=l(X.children||""),y,z):X.el=R.el},x=(R,X,y,z)=>{[R.el,R.anchor]=v(R.children,X,y,z,R.el,R.anchor)},_=({el:R,anchor:X},y,z)=>{let B;for(;R&&R!==X;)B=p(R),i(R,y,z),R=B;i(X,y,z)},M=({el:R,anchor:X})=>{let y;for(;R&&R!==X;)y=p(R),r(R),R=y;r(X)},E=(R,X,y,z,B,L,I,F,Q)=>{if(X.type==="svg"?I="svg":X.type==="math"&&(I="mathml"),R==null)P(X,y,z,B,L,I,F,Q);else{const A=R.el&&R.el._isVueCE?R.el:null;try{A&&A._beginPatch(),O(R,X,B,L,I,F,Q)}finally{A&&A._endPatch()}}},P=(R,X,y,z,B,L,I,F)=>{let Q,A;const{props:b,shapeFlag:G,transition:Y,dirs:K}=R;if(Q=R.el=o(R.type,L,b&&b.is,b),G&8?c(Q,R.children):G&16&&N(R.children,Q,null,z,B,Ja(R,L),I,F),K&&Ai(R,null,z,"created"),C(Q,R,R.scopeId,I,z),b){for(const Mt in b)Mt!=="value"&&!ts(Mt)&&s(Q,Mt,null,b[Mt],L,z);"value"in b&&s(Q,"value",null,b.value,L),(A=b.onVnodeBeforeMount)&&bn(A,z,R)}K&&Ai(R,null,z,"beforeMount");const it=fm(B,Y);it&&Y.beforeEnter(Q),i(Q,X,y),((A=b&&b.onVnodeMounted)||it||K)&&Ye(()=>{try{A&&bn(A,z,R),it&&Y.enter(Q),K&&Ai(R,null,z,"mounted")}finally{}},B)},C=(R,X,y,z,B)=>{if(y&&d(R,y),z)for(let L=0;L<z.length;L++)d(R,z[L]);if(B){let L=B.subTree;if(X===L||Eh(L.type)&&(L.ssContent===X||L.ssFallback===X)){const I=B.vnode;C(R,I,I.scopeId,I.slotScopeIds,B.parent)}}},N=(R,X,y,z,B,L,I,F,Q=0)=>{for(let A=Q;A<R.length;A++){const b=R[A]=F?jn(R[A]):Cn(R[A]);g(null,b,X,y,z,B,L,I,F)}},O=(R,X,y,z,B,L,I)=>{const F=X.el=R.el;let{patchFlag:Q,dynamicChildren:A,dirs:b}=X;Q|=R.patchFlag&16;const G=R.props||se,Y=X.props||se;let K;if(y&&Ci(y,!1),(K=Y.onVnodeBeforeUpdate)&&bn(K,y,X,R),b&&Ai(X,R,y,"beforeUpdate"),y&&Ci(y,!0),(G.innerHTML&&Y.innerHTML==null||G.textContent&&Y.textContent==null)&&c(F,""),A?w(R.dynamicChildren,A,F,y,z,Ja(X,B),L):I||tt(R,X,F,null,y,z,Ja(X,B),L,!1),Q>0){if(Q&16)D(F,G,Y,y,B);else if(Q&2&&G.class!==Y.class&&s(F,"class",null,Y.class,B),Q&4&&s(F,"style",G.style,Y.style,B),Q&8){const it=X.dynamicProps;for(let Mt=0;Mt<it.length;Mt++){const _t=it[Mt],gt=G[_t],St=Y[_t];(St!==gt||_t==="value")&&s(F,_t,gt,St,B,y)}}Q&1&&R.children!==X.children&&c(F,X.children)}else!I&&A==null&&D(F,G,Y,y,B);((K=Y.onVnodeUpdated)||b)&&Ye(()=>{K&&bn(K,y,X,R),b&&Ai(X,R,y,"updated")},z)},w=(R,X,y,z,B,L,I)=>{for(let F=0;F<X.length;F++){const Q=R[F],A=X[F],b=Q.el&&(Q.type===Ne||!zi(Q,A)||Q.shapeFlag&198)?f(Q.el):y;g(Q,A,b,null,z,B,L,I,!0)}},D=(R,X,y,z,B)=>{if(X!==y){if(X!==se)for(const L in X)!ts(L)&&!(L in y)&&s(R,L,X[L],null,B,z);for(const L in y){if(ts(L))continue;const I=y[L],F=X[L];I!==F&&L!=="value"&&s(R,L,F,I,B,z)}"value"in y&&s(R,"value",X.value,y.value,B)}},T=(R,X,y,z,B,L,I,F,Q)=>{const A=X.el=R?R.el:a(""),b=X.anchor=R?R.anchor:a("");let{patchFlag:G,dynamicChildren:Y,slotScopeIds:K}=X;K&&(F=F?F.concat(K):K),R==null?(i(A,y,z),i(b,y,z),N(X.children||[],y,b,B,L,I,F,Q)):G>0&&G&64&&Y&&R.dynamicChildren&&R.dynamicChildren.length===Y.length?(w(R.dynamicChildren,Y,y,B,L,I,F),(X.key!=null||B&&X===B.subTree)&&Sh(R,X,!0)):tt(R,X,y,b,B,L,I,F,Q)},U=(R,X,y,z,B,L,I,F,Q)=>{X.slotScopeIds=F,R==null?X.shapeFlag&512?B.ctx.activate(X,y,z,I,Q):S(X,y,z,B,L,I,Q):H(R,X,Q)},S=(R,X,y,z,B,L,I)=>{const F=R.component=ym(R,z,B);if(Pa(R)&&(F.ctx.renderer=mt),Sm(F,!1,I),F.asyncDep){if(B&&B.registerDep(F,J,I),!R.el){const Q=F.subTree=Se(We);h(null,Q,X,y),R.placeholder=Q.el}}else J(F,R,X,y,B,L,I)},H=(R,X,y)=>{const z=X.component=R.component;if(em(R,X,y))if(z.asyncDep&&!z.asyncResolved){q(z,X,y);return}else z.next=X,z.update();else X.el=R.el,z.vnode=X},J=(R,X,y,z,B,L,I)=>{const F=()=>{if(R.isMounted){let{next:G,bu:Y,u:K,parent:it,vnode:Mt}=R;{const yt=Mh(R);if(yt){G&&(G.el=Mt.el,q(R,G,I)),yt.asyncDep.then(()=>{Ye(()=>{R.isUnmounted||A()},B)});return}}let _t=G,gt;Ci(R,!1),G?(G.el=Mt.el,q(R,G,I)):G=Mt,Y&&ea(Y),(gt=G.props&&G.props.onVnodeBeforeUpdate)&&bn(gt,it,G,Mt),Ci(R,!0);const St=ac(R),Pt=R.subTree;R.subTree=St,g(Pt,St,f(Pt.el),nt(Pt),R,B,L),G.el=St.el,_t===null&&nm(R,St.el),K&&Ye(K,B),(gt=G.props&&G.props.onVnodeUpdated)&&Ye(()=>bn(gt,it,G,Mt),B)}else{let G;const{el:Y,props:K}=X,{bm:it,m:Mt,parent:_t,root:gt,type:St}=R,Pt=ss(X);Ci(R,!1),it&&ea(it),!Pt&&(G=K&&K.onVnodeBeforeMount)&&bn(G,_t,X),Ci(R,!0);{gt.ce&&gt.ce._hasShadowRoot()&&gt.ce._injectChildStyle(St,R.parent?R.parent.type:void 0);const yt=R.subTree=ac(R);g(null,yt,y,z,R,B,L),X.el=yt.el}if(Mt&&Ye(Mt,B),!Pt&&(G=K&&K.onVnodeMounted)){const yt=X;Ye(()=>bn(G,_t,yt),B)}(X.shapeFlag&256||_t&&ss(_t.vnode)&&_t.vnode.shapeFlag&256)&&R.a&&Ye(R.a,B),R.isMounted=!0,X=y=z=null}};R.scope.on();const Q=R.effect=new Af(F);R.scope.off();const A=R.update=Q.run.bind(Q),b=R.job=Q.runIfDirty.bind(Q);b.i=R,b.id=R.uid,Q.scheduler=()=>Al(b),Ci(R,!0),A()},q=(R,X,y)=>{X.component=R;const z=R.vnode.props;R.vnode=X,R.next=null,rm(R,X.props,z,y),lm(R,X.children,y),ti(),Kl(R),ei()},tt=(R,X,y,z,B,L,I,F,Q=!1)=>{const A=R&&R.children,b=R?R.shapeFlag:0,G=X.children,{patchFlag:Y,shapeFlag:K}=X;if(Y>0){if(Y&128){st(A,G,y,z,B,L,I,F,Q);return}else if(Y&256){Z(A,G,y,z,B,L,I,F,Q);return}}K&8?(b&16&&pt(A,B,L),G!==A&&c(y,G)):b&16?K&16?st(A,G,y,z,B,L,I,F,Q):pt(A,B,L,!0):(b&8&&c(y,""),K&16&&N(G,y,z,B,L,I,F,Q))},Z=(R,X,y,z,B,L,I,F,Q)=>{R=R||Er,X=X||Er;const A=R.length,b=X.length,G=Math.min(A,b);let Y;for(Y=0;Y<G;Y++){const K=X[Y]=Q?jn(X[Y]):Cn(X[Y]);g(R[Y],K,y,null,B,L,I,F,Q)}A>b?pt(R,B,L,!0,!1,G):N(X,y,z,B,L,I,F,Q,G)},st=(R,X,y,z,B,L,I,F,Q)=>{let A=0;const b=X.length;let G=R.length-1,Y=b-1;for(;A<=G&&A<=Y;){const K=R[A],it=X[A]=Q?jn(X[A]):Cn(X[A]);if(zi(K,it))g(K,it,y,null,B,L,I,F,Q);else break;A++}for(;A<=G&&A<=Y;){const K=R[G],it=X[Y]=Q?jn(X[Y]):Cn(X[Y]);if(zi(K,it))g(K,it,y,null,B,L,I,F,Q);else break;G--,Y--}if(A>G){if(A<=Y){const K=Y+1,it=K<b?X[K].el:z;for(;A<=Y;)g(null,X[A]=Q?jn(X[A]):Cn(X[A]),y,it,B,L,I,F,Q),A++}}else if(A>Y)for(;A<=G;)$(R[A],B,L,!0),A++;else{const K=A,it=A,Mt=new Map;for(A=it;A<=Y;A++){const Ct=X[A]=Q?jn(X[A]):Cn(X[A]);Ct.key!=null&&Mt.set(Ct.key,A)}let _t,gt=0;const St=Y-it+1;let Pt=!1,yt=0;const Ut=new Array(St);for(A=0;A<St;A++)Ut[A]=0;for(A=K;A<=G;A++){const Ct=R[A];if(gt>=St){$(Ct,B,L,!0);continue}let Tt;if(Ct.key!=null)Tt=Mt.get(Ct.key);else for(_t=it;_t<=Y;_t++)if(Ut[_t-it]===0&&zi(Ct,X[_t])){Tt=_t;break}Tt===void 0?$(Ct,B,L,!0):(Ut[Tt-it]=A+1,Tt>=yt?yt=Tt:Pt=!0,g(Ct,X[Tt],y,null,B,L,I,F,Q),gt++)}const Ot=Pt?hm(Ut):Er;for(_t=Ot.length-1,A=St-1;A>=0;A--){const Ct=it+A,Tt=X[Ct],Lt=X[Ct+1],Xt=Ct+1<b?Lt.el||bh(Lt):z;Ut[A]===0?g(null,Tt,y,Xt,B,L,I,F,Q):Pt&&(_t<0||A!==Ot[_t]?j(Tt,y,Xt,2):_t--)}}},j=(R,X,y,z,B=null)=>{const{el:L,type:I,transition:F,children:Q,shapeFlag:A}=R;if(A&6){j(R.component.subTree,X,y,z);return}if(A&128){R.suspense.move(X,y,z);return}if(A&64){I.move(R,X,y,mt);return}if(I===Ne){i(L,X,y);for(let G=0;G<Q.length;G++)j(Q[G],X,y,z);i(R.anchor,X,y);return}if(I===ia){_(R,X,y);return}if(z!==2&&A&1&&F)if(z===0)F.beforeEnter(L),i(L,X,y),Ye(()=>F.enter(L),B);else{const{leave:G,delayLeave:Y,afterLeave:K}=F,it=()=>{R.ctx.isUnmounted?r(L):i(L,X,y)},Mt=()=>{L._isLeaving&&L[wn](!0),G(L,()=>{it(),K&&K()})};Y?Y(L,it,Mt):Mt()}else i(L,X,y)},$=(R,X,y,z=!1,B=!1)=>{const{type:L,props:I,ref:F,children:Q,dynamicChildren:A,shapeFlag:b,patchFlag:G,dirs:Y,cacheIndex:K,memo:it}=R;if(G===-2&&(B=!1),F!=null&&(ti(),rs(F,null,y,R,!0),ei()),K!=null&&(X.renderCache[K]=void 0),b&256){X.ctx.deactivate(R);return}const Mt=b&1&&Y,_t=!ss(R);let gt;if(_t&&(gt=I&&I.onVnodeBeforeUnmount)&&bn(gt,X,R),b&6)W(R.component,y,z);else{if(b&128){R.suspense.unmount(y,z);return}Mt&&Ai(R,null,X,"beforeUnmount"),b&64?R.type.remove(R,X,y,mt,z):A&&!A.hasOnce&&(L!==Ne||G>0&&G&64)?pt(A,X,y,!1,!0):(L===Ne&&G&384||!B&&b&16)&&pt(Q,X,y),z&&xt(R)}const St=it!=null&&K==null;(_t&&(gt=I&&I.onVnodeUnmounted)||Mt||St)&&Ye(()=>{gt&&bn(gt,X,R),Mt&&Ai(R,null,X,"unmounted"),St&&(R.el=null)},y)},xt=R=>{const{type:X,el:y,anchor:z,transition:B}=R;if(X===Ne){V(y,z);return}if(X===ia){M(R);return}const L=()=>{r(y),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(R.shapeFlag&1&&B&&!B.persisted){const{leave:I,delayLeave:F}=B,Q=()=>I(y,L);F?F(R.el,L,Q):Q()}else L()},V=(R,X)=>{let y;for(;R!==X;)y=p(R),r(R),R=y;r(X)},W=(R,X,y)=>{const{bum:z,scope:B,job:L,subTree:I,um:F,m:Q,a:A}=R;cc(Q),cc(A),z&&ea(z),B.stop(),L&&(L.flags|=8,$(I,R,X,y)),F&&Ye(F,X),Ye(()=>{R.isUnmounted=!0},X)},pt=(R,X,y,z=!1,B=!1,L=0)=>{for(let I=L;I<R.length;I++)$(R[I],X,y,z,B)},nt=R=>{if(R.shapeFlag&6)return nt(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const X=p(R.anchor||R.el),y=X&&X[Ep];return y?p(y):X};let at=!1;const rt=(R,X,y)=>{let z;R==null?X._vnode&&($(X._vnode,null,null,!0),z=X._vnode.component):g(X._vnode||null,R,X,null,null,null,y),X._vnode=R,at||(at=!0,Kl(z),qf(),at=!1)},mt={p:g,um:$,m:j,r:xt,mt:S,mc:N,pc:tt,pbc:w,n:nt,o:n};return{render:rt,hydrate:void 0,createApp:$p(rt)}}function Ja({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Ci({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function fm(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Sh(n,t,e=!1){const i=n.children,r=t.children;if(Dt(i)&&Dt(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=jn(r[s]),a.el=o.el),!e&&a.patchFlag!==-2&&Sh(o,a)),a.type===Da&&(a.patchFlag===-1&&(a=r[s]=jn(a)),a.el=o.el),a.type===We&&!a.el&&(a.el=o.el)}}function hm(n){const t=n.slice(),e=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(r=e[e.length-1],n[r]<u){t[i]=r,e.push(i);continue}for(s=0,o=e.length-1;s<o;)a=s+o>>1,n[e[a]]<u?s=a+1:o=a;u<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}function Mh(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Mh(t)}function cc(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function bh(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?bh(t.subTree):null}const Eh=n=>n.__isSuspense;function dm(n,t){t&&t.pendingBranch?Dt(n)?t.effects.push(...n):t.effects.push(n):yp(n)}const Ne=Symbol.for("v-fgt"),Da=Symbol.for("v-txt"),We=Symbol.for("v-cmt"),ia=Symbol.for("v-stc"),os=[];let rn=null;function $t(n=!1){os.push(rn=n?null:[])}function pm(){os.pop(),rn=os[os.length-1]||null}let ds=1;function ha(n,t=!1){ds+=n,n<0&&rn&&t&&(rn.hasOnce=!0)}function wh(n){return n.dynamicChildren=ds>0?rn||Er:null,pm(),ds>0&&rn&&rn.push(n),n}function Zt(n,t,e,i,r,s){return wh(ot(n,t,e,i,r,s,!0))}function Th(n,t,e,i,r){return wh(Se(n,t,e,i,r,!0))}function da(n){return n?n.__v_isVNode===!0:!1}function zi(n,t){return n.type===t.type&&n.key===t.key}const Ah=({key:n})=>n??null,ra=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?pe(n)||Fe(n)||kt(n)?{i:nn,r:n,k:t,f:!!e}:n:null);function ot(n,t=null,e=null,i=0,r=null,s=n===Ne?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Ah(t),ref:t&&ra(t),scopeId:Yf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:nn};return a?(Il(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=pe(e)?8:16),ds>0&&!o&&rn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&rn.push(l),l}const Se=mm;function mm(n,t=null,e=null,i=0,r=null,s=!1){if((!n||n===zp)&&(n=We),da(n)){const a=Mi(n,t,!0);return e&&Il(a,e),ds>0&&!s&&rn&&(a.shapeFlag&6?rn[rn.indexOf(n)]=a:rn.push(a)),a.patchFlag=-2,a}if(Tm(n)&&(n=n.__vccOpts),t){t=gm(t);let{class:a,style:l}=t;a&&!pe(a)&&(t.class=ye(a)),ee(l)&&(Tl(l)&&!Dt(l)&&(l=be({},l)),t.style=Jn(l))}const o=pe(n)?1:Eh(n)?128:Jf(n)?64:ee(n)?4:kt(n)?2:0;return ot(n,t,e,i,r,o,s,!0)}function gm(n){return n?Tl(n)||mh(n)?be({},n):n:null}function Mi(n,t,e=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,u=t?_m(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Ah(u),ref:t&&t.ref?e&&s?Dt(s)?s.concat(ra(t)):[s,ra(t)]:ra(t):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Ne?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Mi(n.ssContent),ssFallback:n.ssFallback&&Mi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&hs(c,l.clone(c)),c}function vi(n=" ",t=0){return Se(Da,null,n,t)}function Ch(n,t){const e=Se(ia,null,n);return e.staticCount=t,e}function en(n="",t=!1){return t?($t(),Th(We,null,n)):Se(We,null,n)}function Cn(n){return n==null||typeof n=="boolean"?Se(We):Dt(n)?Se(Ne,null,n.slice()):da(n)?jn(n):Se(Da,null,String(n))}function jn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Mi(n)}function Il(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Dt(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),Il(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!mh(t)?t._ctx=nn:r===3&&nn&&(nn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else kt(t)?(t={default:t,_ctx:nn},e=32):(t=String(t),i&64?(e=16,t=[vi(t)]):e=8);n.children=t,n.shapeFlag|=e}function _m(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=ye([t.class,i.class]));else if(r==="style")t.style=Jn([t.style,i.style]);else if(Ma(r)){const s=t[r],o=i[r];o&&s!==o&&!(Dt(s)&&s.includes(o))?t[r]=s?[].concat(s,o):o:o==null&&s==null&&!ba(r)&&(t[r]=o)}else r!==""&&(t[r]=i[r])}return t}function bn(n,t,e,i=null){yn(n,t,7,[e,i])}const vm=uh();let xm=0;function ym(n,t,e){const i=n.type,r=(t?t.appContext:n.appContext)||vm,s={uid:xm++,vnode:n,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Wd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_h(i,r),emitsOptions:fh(i,r),emit:null,emitted:null,propsDefaults:se,inheritAttrs:i.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Kp.bind(null,s),n.ce&&n.ce(s),s}let Oe=null;const Rh=()=>Oe||nn;let pa,Jo;{const n=Ta(),t=(e,i)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};pa=t("__VUE_INSTANCE_SETTERS__",e=>Oe=e),Jo=t("__VUE_SSR_SETTERS__",e=>ps=e)}const ys=n=>{const t=Oe;return pa(n),n.scope.on(),()=>{n.scope.off(),pa(t)}},uc=()=>{Oe&&Oe.scope.off(),pa(null)};function Ph(n){return n.vnode.shapeFlag&4}let ps=!1;function Sm(n,t=!1,e=!1){t&&Jo(t);const{props:i,children:r}=n.vnode,s=Ph(n);im(n,i,s,t),om(n,r,e||t);const o=s?Mm(n,t):void 0;return t&&Jo(!1),o}function Mm(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Hp);const{setup:i}=e;if(i){ti();const r=n.setupContext=i.length>1?Em(n):null,s=ys(n),o=xs(i,n,0,[n.props,r]),a=yf(o);if(ei(),s(),(a||n.sp)&&!ss(n)&&sh(n),a){if(o.then(uc,uc),t)return o.then(l=>{fc(n,l)}).catch(l=>{Ra(l,n,0)});n.asyncDep=o}else fc(n,o)}else Lh(n)}function fc(n,t,e){kt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ee(t)&&(n.setupState=Vf(t)),Lh(n)}function Lh(n,t,e){const i=n.type;n.render||(n.render=i.render||Dn);{const r=ys(n);ti();try{Vp(n)}finally{ei(),r()}}}const bm={get(n,t){return Ue(n,"get",""),n[t]}};function Em(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,bm),slots:n.slots,emit:n.emit,expose:t}}function Ua(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Vf(up(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in as)return as[e](n)},has(t,e){return e in t||e in as}})):n.proxy}function wm(n,t=!0){return kt(n)?n.displayName||n.name:n.name||t&&n.__name}function Tm(n){return kt(n)&&"__vccOpts"in n}const ge=(n,t)=>mp(n,t,ps);function Dl(n,t,e){try{ha(-1);const i=arguments.length;return i===2?ee(t)&&!Dt(t)?da(t)?Se(n,null,[t]):Se(n,t):Se(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&da(e)&&(e=[e]),Se(n,t,e))}finally{ha(1)}}const Am="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qo;const hc=typeof window<"u"&&window.trustedTypes;if(hc)try{Qo=hc.createPolicy("vue",{createHTML:n=>n})}catch{}const Ih=Qo?n=>Qo.createHTML(n):n=>n,Cm="http://www.w3.org/2000/svg",Rm="http://www.w3.org/1998/Math/MathML",qn=typeof document<"u"?document:null,dc=qn&&qn.createElement("template"),Pm={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const r=t==="svg"?qn.createElementNS(Cm,n):t==="mathml"?qn.createElementNS(Rm,n):e?qn.createElement(n,{is:e}):qn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>qn.createTextNode(n),createComment:n=>qn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>qn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,r,s){const o=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{dc.innerHTML=Ih(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=dc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},ai="transition",Vr="animation",ms=Symbol("_vtc"),Dh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Lm=be({},Qf,Dh),Im=n=>(n.displayName="Transition",n.props=Lm,n),Dm=Im((n,{slots:t})=>Dl(Ap,Um(n),t)),Ri=(n,t=[])=>{Dt(n)?n.forEach(e=>e(...t)):n&&n(...t)},pc=n=>n?Dt(n)?n.some(t=>t.length>1):n.length>1:!1;function Um(n){const t={};for(const T in n)T in Dh||(t[T]=n[T]);if(n.css===!1)return t;const{name:e="v",type:i,duration:r,enterFromClass:s=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=s,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:f=`${e}-leave-from`,leaveActiveClass:p=`${e}-leave-active`,leaveToClass:d=`${e}-leave-to`}=n,v=Nm(r),g=v&&v[0],m=v&&v[1],{onBeforeEnter:h,onEnter:x,onEnterCancelled:_,onLeave:M,onLeaveCancelled:E,onBeforeAppear:P=h,onAppear:C=x,onAppearCancelled:N=_}=t,O=(T,U,S,H)=>{T._enterCancelled=H,Pi(T,U?c:a),Pi(T,U?u:o),S&&S()},w=(T,U)=>{T._isLeaving=!1,Pi(T,f),Pi(T,d),Pi(T,p),U&&U()},D=T=>(U,S)=>{const H=T?C:x,J=()=>O(U,T,S);Ri(H,[U,J]),mc(()=>{Pi(U,T?l:s),kn(U,T?c:a),pc(H)||gc(U,i,g,J)})};return be(t,{onBeforeEnter(T){Ri(h,[T]),kn(T,s),kn(T,o)},onBeforeAppear(T){Ri(P,[T]),kn(T,l),kn(T,u)},onEnter:D(!1),onAppear:D(!0),onLeave(T,U){T._isLeaving=!0;const S=()=>w(T,U);kn(T,f),T._enterCancelled?(kn(T,p),xc(T)):(xc(T),kn(T,p)),mc(()=>{T._isLeaving&&(Pi(T,f),kn(T,d),pc(M)||gc(T,i,m,S))}),Ri(M,[T,S])},onEnterCancelled(T){O(T,!1,void 0,!0),Ri(_,[T])},onAppearCancelled(T){O(T,!0,void 0,!0),Ri(N,[T])},onLeaveCancelled(T){w(T),Ri(E,[T])}})}function Nm(n){if(n==null)return null;if(ee(n))return[Qa(n.enter),Qa(n.leave)];{const t=Qa(n);return[t,t]}}function Qa(n){return Od(n)}function kn(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[ms]||(n[ms]=new Set)).add(t)}function Pi(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[ms];e&&(e.delete(t),e.size||(n[ms]=void 0))}function mc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Om=0;function gc(n,t,e,i){const r=n._endId=++Om,s=()=>{r===n._endId&&i()};if(e!=null)return setTimeout(s,e);const{type:o,timeout:a,propCount:l}=Fm(n,t);if(!o)return i();const u=o+"end";let c=0;const f=()=>{n.removeEventListener(u,p),s()},p=d=>{d.target===n&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},a+1),n.addEventListener(u,p)}function Fm(n,t){const e=window.getComputedStyle(n),i=v=>(e[v]||"").split(", "),r=i(`${ai}Delay`),s=i(`${ai}Duration`),o=_c(r,s),a=i(`${Vr}Delay`),l=i(`${Vr}Duration`),u=_c(a,l);let c=null,f=0,p=0;t===ai?o>0&&(c=ai,f=o,p=s.length):t===Vr?u>0&&(c=Vr,f=u,p=l.length):(f=Math.max(o,u),c=f>0?o>u?ai:Vr:null,p=c?c===ai?s.length:l.length:0);const d=c===ai&&/\b(?:transform|all)(?:,|$)/.test(i(`${ai}Property`).toString());return{type:c,timeout:f,propCount:p,hasTransform:d}}function _c(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>vc(e)+vc(n[i])))}function vc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function xc(n){return(n?n.ownerDocument:document).body.offsetHeight}function km(n,t,e){const i=n[ms];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const ma=Symbol("_vod"),Uh=Symbol("_vsh"),Bm={name:"show",beforeMount(n,{value:t},{transition:e}){n[ma]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):Wr(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),Wr(n,!0),i.enter(n)):i.leave(n,()=>{Wr(n,!1)}):Wr(n,t))},beforeUnmount(n,{value:t}){Wr(n,t)}};function Wr(n,t){n.style.display=t?n[ma]:"none",n[Uh]=!t}const zm=Symbol(""),Gm=/(?:^|;)\s*display\s*:/;function Hm(n,t,e){const i=n.style,r=pe(e);let s=!1;if(e&&!r){if(t)if(pe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Qr(i,a,"")}else for(const o in t)e[o]==null&&Qr(i,o,"");for(const o in e){o==="display"&&(s=!0);const a=e[o];a!=null?Wm(n,o,!pe(t)&&t?t[o]:void 0,a)||Qr(i,o,a):Qr(i,o,"")}}else if(r){if(t!==e){const o=i[zm];o&&(e+=";"+o),i.cssText=e,s=Gm.test(e)}}else t&&n.removeAttribute("style");ma in n&&(n[ma]=s?i.display:"",n[Uh]&&(i.display="none"))}const yc=/\s*!important$/;function Qr(n,t,e){if(Dt(e))e.forEach(i=>Qr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=Vm(n,t);yc.test(e)?n.setProperty(Ji(i),e.replace(yc,""),"important"):n[i]=e}}const Sc=["Webkit","Moz","ms"],to={};function Vm(n,t){const e=to[t];if(e)return e;let i=Xe(t);if(i!=="filter"&&i in n)return to[t]=i;i=wa(i);for(let r=0;r<Sc.length;r++){const s=Sc[r]+i;if(s in n)return to[t]=s}return t}function Wm(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&pe(i)&&e===i}const Mc="http://www.w3.org/1999/xlink";function bc(n,t,e,i,r,s=Hd(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Mc,t.slice(6,t.length)):n.setAttributeNS(Mc,t,e):e==null||s&&!Ef(e)?n.removeAttribute(t):n.setAttribute(t,s?"":Nn(e)?String(e):e)}function Ec(n,t,e,i,r){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Ih(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Ef(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(r||t)}function xr(n,t,e,i){n.addEventListener(t,e,i)}function Xm(n,t,e,i){n.removeEventListener(t,e,i)}const wc=Symbol("_vei");function qm(n,t,e,i,r=null){const s=n[wc]||(n[wc]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=jm(t);if(i){const u=s[t]=Zm(i,r);xr(n,a,u,l)}else o&&(Xm(n,a,o,l),s[t]=void 0)}}const Tc=/(?:Once|Passive|Capture)$/;function jm(n){let t;if(Tc.test(n)){t={};let i;for(;i=n.match(Tc);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ji(n.slice(2)),t]}let eo=0;const Ym=Promise.resolve(),$m=()=>eo||(Ym.then(()=>eo=0),eo=Date.now());function Zm(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;yn(Km(i,e.value),t,5,[i])};return e.value=n,e.attached=$m(),e}function Km(n,t){if(Dt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const Ac=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Jm=(n,t,e,i,r,s)=>{const o=r==="svg";t==="class"?km(n,i,o):t==="style"?Hm(n,e,i):Ma(t)?ba(t)||qm(n,t,e,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Qm(n,t,i,o))?(Ec(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&bc(n,t,i,o,s,t!=="value")):n._isVueCE&&(tg(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!pe(i)))?Ec(n,Xe(t),i,s,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),bc(n,t,i,o))};function Qm(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Ac(t)&&kt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ac(t)&&pe(e)?!1:t in n}function tg(n,t){const e=n._def.props;if(!e)return!1;const i=Xe(t);return Array.isArray(e)?e.some(r=>Xe(r)===i):Object.keys(e).some(r=>Xe(r)===i)}const Cc=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Dt(t)?e=>ea(t,e):t};function eg(n){n.target.composing=!0}function Rc(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const no=Symbol("_assign");function Pc(n,t,e){return t&&(n=n.trim()),e&&(n=vl(n)),n}const Lc={created(n,{modifiers:{lazy:t,trim:e,number:i}},r){n[no]=Cc(r);const s=i||r.props&&r.props.type==="number";xr(n,t?"change":"input",o=>{o.target.composing||n[no](Pc(n.value,e,s))}),(e||s)&&xr(n,"change",()=>{n.value=Pc(n.value,e,s)}),t||(xr(n,"compositionstart",eg),xr(n,"compositionend",Rc),xr(n,"change",Rc))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:r,number:s}},o){if(n[no]=Cc(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?vl(n.value):n.value,l=t??"";if(a===l)return;const u=n.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===n&&n.type!=="range"&&(i&&t===e||r&&n.value.trim()===l)||(n.value=l)}},ng=["ctrl","shift","alt","meta"],ig={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>ng.some(e=>n[`${e}Key`]&&!t.includes(e))},tl=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=(r,...s)=>{for(let o=0;o<t.length;o++){const a=ig[t[o]];if(a&&a(r,t))return}return n(r,...s)})},rg=be({patchProp:Jm},Pm);let Ic;function sg(){return Ic||(Ic=cm(rg))}const ag=(...n)=>{const t=sg().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=lg(i);if(!r)return;const s=t._component;!kt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=e(r,!1,og(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function og(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function lg(n){return pe(n)?document.querySelector(n):n}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const yr=typeof document<"u";function Nh(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function cg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Nh(n.default)}const Qt=Object.assign;function io(n,t){const e={};for(const i in t){const r=t[i];e[i]=Sn(r)?r.map(n):n(r)}return e}const ls=()=>{},Sn=Array.isArray;function Dc(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}const Oh=/#/g,ug=/&/g,fg=/\//g,hg=/=/g,dg=/\?/g,Fh=/\+/g,pg=/%5B/g,mg=/%5D/g,kh=/%5E/g,gg=/%60/g,Bh=/%7B/g,_g=/%7C/g,zh=/%7D/g,vg=/%20/g;function Ul(n){return n==null?"":encodeURI(""+n).replace(_g,"|").replace(pg,"[").replace(mg,"]")}function xg(n){return Ul(n).replace(Bh,"{").replace(zh,"}").replace(kh,"^")}function el(n){return Ul(n).replace(Fh,"%2B").replace(vg,"+").replace(Oh,"%23").replace(ug,"%26").replace(gg,"`").replace(Bh,"{").replace(zh,"}").replace(kh,"^")}function yg(n){return el(n).replace(hg,"%3D")}function Sg(n){return Ul(n).replace(Oh,"%23").replace(dg,"%3F")}function Mg(n){return Sg(n).replace(fg,"%2F")}function gs(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const bg=/\/$/,Eg=n=>n.replace(bg,"");function ro(n,t,e="/"){let i,r={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=t.slice(0,l),s=t.slice(l,a>0?a:t.length),r=n(s.slice(1))),a>=0&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=Cg(i??t,e),{fullPath:i+s+o,path:i,query:r,hash:gs(o)}}function wg(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function Uc(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function Tg(n,t,e){const i=t.matched.length-1,r=e.matched.length-1;return i>-1&&i===r&&Ir(t.matched[i],e.matched[r])&&Gh(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function Ir(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function Gh(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(var e in n)if(!Ag(n[e],t[e]))return!1;return!0}function Ag(n,t){return Sn(n)?Nc(n,t):Sn(t)?Nc(t,n):(n==null?void 0:n.valueOf())===(t==null?void 0:t.valueOf())}function Nc(n,t){return Sn(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function Cg(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=e.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return e.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const oi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let nl=function(n){return n.pop="pop",n.push="push",n}({}),so=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function Rg(n){if(!n)if(yr){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Eg(n)}const Pg=/^[^#]+#/;function Lg(n,t){return n.replace(Pg,"#")+t}function Ig(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const Na=()=>({left:window.scrollX,top:window.scrollY});function Dg(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),r=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!r)return;t=Ig(r,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Oc(n,t){return(history.state?history.state.position-t:-1)+n}const il=new Map;function Ug(n,t){il.set(n,t)}function Ng(n){const t=il.get(n);return il.delete(n),t}function Og(n){return typeof n=="string"||n&&typeof n=="object"}function Hh(n){return typeof n=="string"||typeof n=="symbol"}let me=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const Vh=Symbol("");me.MATCHER_NOT_FOUND+"",me.NAVIGATION_GUARD_REDIRECT+"",me.NAVIGATION_ABORTED+"",me.NAVIGATION_CANCELLED+"",me.NAVIGATION_DUPLICATED+"";function Dr(n,t){return Qt(new Error,{type:n,[Vh]:!0},t)}function Bn(n,t){return n instanceof Error&&Vh in n&&(t==null||!!(n.type&t))}const Fg=["params","query","hash"];function kg(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const t={};for(const e of Fg)e in n&&(t[e]=n[e]);return JSON.stringify(t,null,2)}function Bg(n){const t={};if(n===""||n==="?")return t;const e=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<e.length;++i){const r=e[i].replace(Fh," "),s=r.indexOf("="),o=gs(s<0?r:r.slice(0,s)),a=s<0?null:gs(r.slice(s+1));if(o in t){let l=t[o];Sn(l)||(l=t[o]=[l]),l.push(a)}else t[o]=a}return t}function Fc(n){let t="";for(let e in n){const i=n[e];if(e=yg(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(Sn(i)?i.map(r=>r&&el(r)):[i&&el(i)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+e,r!=null&&(t+="="+r))})}return t}function zg(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=Sn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return t}const Gg=Symbol(""),kc=Symbol(""),Oa=Symbol(""),Nl=Symbol(""),rl=Symbol("");function Xr(){let n=[];function t(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function mi(n,t,e,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(Dr(me.NAVIGATION_ABORTED,{from:e,to:t})):p instanceof Error?l(p):Og(p)?l(Dr(me.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(o&&i.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),a())},c=s(()=>n.call(i&&i.instances[r],t,e,u));let f=Promise.resolve(c);n.length<3&&(f=f.then(u)),f.catch(p=>l(p))})}function ao(n,t,e,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Nh(l)){const u=(l.__vccOpts||l)[t];u&&s.push(mi(u,e,i,o,a,r))}else{let u=l();s.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=cg(c)?c.default:c;o.mods[a]=c,o.components[a]=f;const p=(f.__vccOpts||f)[t];return p&&mi(p,e,i,o,a,r)()}))}}return s}function Hg(n,t){const e=[],i=[],r=[],s=Math.max(t.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=t.matched[o];a&&(n.matched.find(u=>Ir(u,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(u=>Ir(u,l))||r.push(l))}return[e,i,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Vg=()=>location.protocol+"//"+location.host;function Wh(n,t){const{pathname:e,search:i,hash:r}=t,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),Uc(a,"")}return Uc(e,n)+i+r}function Wg(n,t,e,i){let r=[],s=[],o=null;const a=({state:p})=>{const d=Wh(n,location),v=e.value,g=t.value;let m=0;if(p){if(e.value=d,t.value=p,o&&o===v){o=null;return}m=g?p.position-g.position:0}else i(d);r.forEach(h=>{h(e.value,v,{delta:m,type:nl.pop,direction:m?m>0?so.forward:so.back:so.unknown})})};function l(){o=e.value}function u(p){r.push(p);const d=()=>{const v=r.indexOf(p);v>-1&&r.splice(v,1)};return s.push(d),d}function c(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(Qt({},p.state,{scroll:Na()}),"")}}function f(){for(const p of s)p();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:u,destroy:f}}function Bc(n,t,e,i=!1,r=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:r?Na():null}}function Xg(n){const{history:t,location:e}=window,i={value:Wh(n,e)},r={value:t.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,u,c){const f=n.indexOf("#"),p=f>-1?(e.host&&document.querySelector("base")?n:n.slice(f))+l:Vg()+n+l;try{t[c?"replaceState":"pushState"](u,"",p),r.value=u}catch(d){console.error(d),e[c?"replace":"assign"](p)}}function o(l,u){s(l,Qt({},t.state,Bc(r.value.back,l,r.value.forward,!0),u,{position:r.value.position}),!0),i.value=l}function a(l,u){const c=Qt({},r.value,t.state,{forward:l,scroll:Na()});s(c.current,c,!0),s(l,Qt({},Bc(i.value,l,null),{position:c.position+1},u),!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function qg(n){n=Rg(n);const t=Xg(n),e=Wg(n,t.state,t.location,t.replace);function i(s,o=!0){o||e.pauseListeners(),history.go(s)}const r=Qt({location:"",base:n,go:i,createHref:Lg.bind(null,n)},t,e);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function jg(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),qg(n)}let Vi=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var xe=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(xe||{});const Yg={type:Vi.Static,value:""},$g=/[a-zA-Z0-9_]/;function Zg(n){if(!n)return[[]];if(n==="/")return[[Yg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(d){throw new Error(`ERR (${e})/"${u}": ${d}`)}let e=xe.Static,i=e;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,u="",c="";function f(){u&&(e===xe.Static?s.push({type:Vi.Static,value:u}):e===xe.Param||e===xe.ParamRegExp||e===xe.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:Vi.Param,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==xe.ParamRegExp){i=e,e=xe.EscapeNext;continue}switch(e){case xe.Static:l==="/"?(u&&f(),o()):l===":"?(f(),e=xe.Param):p();break;case xe.EscapeNext:p(),e=i;break;case xe.Param:l==="("?e=xe.ParamRegExp:$g.test(l)?p():(f(),e=xe.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case xe.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:e=xe.ParamRegExpEnd:c+=l;break;case xe.ParamRegExpEnd:f(),e=xe.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:t("Unknown state");break}}return e===xe.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),f(),o(),r}const zc="[^/]+?",Kg={sensitive:!1,strict:!1,start:!0,end:!0};var Ge=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(Ge||{});const Jg=/[.+*?^${}()[\]/\\]/g;function Qg(n,t){const e=Qt({},Kg,t),i=[];let r=e.start?"^":"";const s=[];for(const u of n){const c=u.length?[]:[Ge.Root];e.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const p=u[f];let d=Ge.Segment+(e.sensitive?Ge.BonusCaseSensitive:0);if(p.type===Vi.Static)f||(r+="/"),r+=p.value.replace(Jg,"\\$&"),d+=Ge.Static;else if(p.type===Vi.Param){const{value:v,repeatable:g,optional:m,regexp:h}=p;s.push({name:v,repeatable:g,optional:m});const x=h||zc;if(x!==zc){d+=Ge.BonusCustomRegExp;try{`${x}`}catch(M){throw new Error(`Invalid custom RegExp for param "${v}" (${x}): `+M.message)}}let _=g?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(_=m&&u.length<2?`(?:/${_})`:"/"+_),m&&(_+="?"),r+=_,d+=Ge.Dynamic,m&&(d+=Ge.BonusOptional),g&&(d+=Ge.BonusRepeatable),x===".*"&&(d+=Ge.BonusWildcard)}c.push(d)}i.push(c)}if(e.strict&&e.end){const u=i.length-1;i[u][i[u].length-1]+=Ge.BonusStrict}e.strict||(r+="/?"),e.end?r+="$":e.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,e.sensitive?"":"i");function a(u){const c=u.match(o),f={};if(!c)return null;for(let p=1;p<c.length;p++){const d=c[p]||"",v=s[p-1];f[v.name]=d&&v.repeatable?d.split("/"):d}return f}function l(u){let c="",f=!1;for(const p of n){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const d of p)if(d.type===Vi.Static)c+=d.value;else if(d.type===Vi.Param){const{value:v,repeatable:g,optional:m}=d,h=v in u?u[v]:"";if(Sn(h)&&!g)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const x=Sn(h)?h.join("/"):h;if(!x)if(m)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);c+=x}}return c||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function t_(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===Ge.Static+Ge.Segment?-1:1:n.length>t.length?t.length===1&&t[0]===Ge.Static+Ge.Segment?1:-1:0}function Xh(n,t){let e=0;const i=n.score,r=t.score;for(;e<i.length&&e<r.length;){const s=t_(i[e],r[e]);if(s)return s;e++}if(Math.abs(r.length-i.length)===1){if(Gc(i))return 1;if(Gc(r))return-1}return r.length-i.length}function Gc(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const e_={strict:!1,end:!0,sensitive:!1};function n_(n,t,e){const i=Qg(Zg(n.path),e),r=Qt(i,{record:n,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function i_(n,t){const e=[],i=new Map;t=Dc(e_,t);function r(f){return i.get(f)}function s(f,p,d){const v=!d,g=Vc(f);g.aliasOf=d&&d.record;const m=Dc(t,f),h=[g];if("alias"in f){const M=typeof f.alias=="string"?[f.alias]:f.alias;for(const E of M)h.push(Vc(Qt({},g,{components:d?d.record.components:g.components,path:E,aliasOf:d?d.record:g})))}let x,_;for(const M of h){const{path:E}=M;if(p&&E[0]!=="/"){const P=p.record.path,C=P[P.length-1]==="/"?"":"/";M.path=p.record.path+(E&&C+E)}if(x=n_(M,p,m),d?d.alias.push(x):(_=_||x,_!==x&&_.alias.push(x),v&&f.name&&!Wc(x)&&o(f.name)),qh(x)&&l(x),g.children){const P=g.children;for(let C=0;C<P.length;C++)s(P[C],x,d&&d.children[C])}d=d||x}return _?()=>{o(_)}:ls}function o(f){if(Hh(f)){const p=i.get(f);p&&(i.delete(f),e.splice(e.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=e.indexOf(f);p>-1&&(e.splice(p,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return e}function l(f){const p=a_(f,e);e.splice(p,0,f),f.record.name&&!Wc(f)&&i.set(f.record.name,f)}function u(f,p){let d,v={},g,m;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw Dr(me.MATCHER_NOT_FOUND,{location:f});m=d.record.name,v=Qt(Hc(p.params,d.keys.filter(_=>!_.optional).concat(d.parent?d.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),f.params&&Hc(f.params,d.keys.map(_=>_.name))),g=d.stringify(v)}else if(f.path!=null)g=f.path,d=e.find(_=>_.re.test(g)),d&&(v=d.parse(g),m=d.record.name);else{if(d=p.name?i.get(p.name):e.find(_=>_.re.test(p.path)),!d)throw Dr(me.MATCHER_NOT_FOUND,{location:f,currentLocation:p});m=d.record.name,v=Qt({},p.params,f.params),g=d.stringify(v)}const h=[];let x=d;for(;x;)h.unshift(x.record),x=x.parent;return{name:m,path:g,params:v,matched:h,meta:s_(h)}}n.forEach(f=>s(f));function c(){e.length=0,i.clear()}return{addRoute:s,resolve:u,removeRoute:o,clearRoutes:c,getRoutes:a,getRecordMatcher:r}}function Hc(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function Vc(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:r_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function r_(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function Wc(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function s_(n){return n.reduce((t,e)=>Qt(t,e.meta),{})}function a_(n,t){let e=0,i=t.length;for(;e!==i;){const s=e+i>>1;Xh(n,t[s])<0?i=s:e=s+1}const r=o_(n);return r&&(i=t.lastIndexOf(r,i-1)),i}function o_(n){let t=n;for(;t=t.parent;)if(qh(t)&&Xh(n,t)===0)return t}function qh({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Xc(n){const t=vn(Oa),e=vn(Nl),i=ge(()=>{const l=ji(n.to);return t.resolve(l)}),r=ge(()=>{const{matched:l}=i.value,{length:u}=l,c=l[u-1],f=e.matched;if(!c||!f.length)return-1;const p=f.findIndex(Ir.bind(null,c));if(p>-1)return p;const d=qc(l[u-2]);return u>1&&qc(c)===d&&f[f.length-1].path!==d?f.findIndex(Ir.bind(null,l[u-2])):p}),s=ge(()=>r.value>-1&&h_(e.params,i.value.params)),o=ge(()=>r.value>-1&&r.value===e.matched.length-1&&Gh(e.params,i.value.params));function a(l={}){if(f_(l)){const u=t[ji(n.replace)?"replace":"push"](ji(n.to)).catch(ls);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:i,href:ge(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function l_(n){return n.length===1?n[0]:n}const c_=rh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Xc,setup(n,{slots:t}){const e=Ca(Xc(n)),{options:i}=vn(Oa),r=ge(()=>({[jc(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[jc(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const s=t.default&&l_(t.default(e));return n.custom?s:Dl("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:r.value},s)}}}),u_=c_;function f_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function h_(n,t){for(const e in t){const i=t[e],r=n[e];if(typeof i=="string"){if(i!==r)return!1}else if(!Sn(r)||r.length!==i.length||i.some((s,o)=>s.valueOf()!==r[o].valueOf()))return!1}return!0}function qc(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const jc=(n,t,e)=>n??t??e,d_=rh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=vn(rl),r=ge(()=>n.route||i.value),s=vn(kc,0),o=ge(()=>{let u=ji(s);const{matched:c}=r.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),a=ge(()=>r.value.matched[o.value]);na(kc,ge(()=>o.value+1)),na(Gg,a),na(rl,r);const l=jt();return is(()=>[l.value,a.value,n.name],([u,c,f],[p,d,v])=>{c&&(c.instances[f]=u,d&&d!==c&&u&&u===p&&(c.leaveGuards.size||(c.leaveGuards=d.leaveGuards),c.updateGuards.size||(c.updateGuards=d.updateGuards))),u&&c&&(!d||!Ir(c,d)||!p)&&(c.enterCallbacks[f]||[]).forEach(g=>g(u))},{flush:"post"}),()=>{const u=r.value,c=n.name,f=a.value,p=f&&f.components[c];if(!p)return Yc(e.default,{Component:p,route:u});const d=f.props[c],v=d?d===!0?u.params:typeof d=="function"?d(u):d:null,m=Dl(p,Qt({},v,t,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(f.instances[c]=null)},ref:l}));return Yc(e.default,{Component:m,route:u})||m}}});function Yc(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const p_=d_;function m_(n){const t=i_(n.routes,n),e=n.parseQuery||Bg,i=n.stringifyQuery||Fc,r=n.history,s=Xr(),o=Xr(),a=Xr(),l=fp(oi);let u=oi;yr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=io.bind(null,nt=>""+nt),f=io.bind(null,Mg),p=io.bind(null,gs);function d(nt,at){let rt,mt;return Hh(nt)?(rt=t.getRecordMatcher(nt),mt=at):mt=nt,t.addRoute(mt,rt)}function v(nt){const at=t.getRecordMatcher(nt);at&&t.removeRoute(at)}function g(){return t.getRoutes().map(nt=>nt.record)}function m(nt){return!!t.getRecordMatcher(nt)}function h(nt,at){if(at=Qt({},at||l.value),typeof nt=="string"){const y=ro(e,nt,at.path),z=t.resolve({path:y.path},at),B=r.createHref(y.fullPath);return Qt(y,z,{params:p(z.params),hash:gs(y.hash),redirectedFrom:void 0,href:B})}let rt;if(nt.path!=null)rt=Qt({},nt,{path:ro(e,nt.path,at.path).path});else{const y=Qt({},nt.params);for(const z in y)y[z]==null&&delete y[z];rt=Qt({},nt,{params:f(y)}),at.params=f(at.params)}const mt=t.resolve(rt,at),vt=nt.hash||"";mt.params=c(p(mt.params));const R=wg(i,Qt({},nt,{hash:xg(vt),path:mt.path})),X=r.createHref(R);return Qt({fullPath:R,hash:vt,query:i===Fc?zg(nt.query):nt.query||{}},mt,{redirectedFrom:void 0,href:X})}function x(nt){return typeof nt=="string"?ro(e,nt,l.value.path):Qt({},nt)}function _(nt,at){if(u!==nt)return Dr(me.NAVIGATION_CANCELLED,{from:at,to:nt})}function M(nt){return C(nt)}function E(nt){return M(Qt(x(nt),{replace:!0}))}function P(nt,at){const rt=nt.matched[nt.matched.length-1];if(rt&&rt.redirect){const{redirect:mt}=rt;let vt=typeof mt=="function"?mt(nt,at):mt;return typeof vt=="string"&&(vt=vt.includes("?")||vt.includes("#")?vt=x(vt):{path:vt},vt.params={}),Qt({query:nt.query,hash:nt.hash,params:vt.path!=null?{}:nt.params},vt)}}function C(nt,at){const rt=u=h(nt),mt=l.value,vt=nt.state,R=nt.force,X=nt.replace===!0,y=P(rt,mt);if(y)return C(Qt(x(y),{state:typeof y=="object"?Qt({},vt,y.state):vt,force:R,replace:X}),at||rt);const z=rt;z.redirectedFrom=at;let B;return!R&&Tg(i,mt,rt)&&(B=Dr(me.NAVIGATION_DUPLICATED,{to:z,from:mt}),j(mt,mt,!0,!1)),(B?Promise.resolve(B):w(z,mt)).catch(L=>Bn(L)?Bn(L,me.NAVIGATION_GUARD_REDIRECT)?L:st(L):tt(L,z,mt)).then(L=>{if(L){if(Bn(L,me.NAVIGATION_GUARD_REDIRECT))return C(Qt({replace:X},x(L.to),{state:typeof L.to=="object"?Qt({},vt,L.to.state):vt,force:R}),at||z)}else L=T(z,mt,!0,X,vt);return D(z,mt,L),L})}function N(nt,at){const rt=_(nt,at);return rt?Promise.reject(rt):Promise.resolve()}function O(nt){const at=V.values().next().value;return at&&typeof at.runWithContext=="function"?at.runWithContext(nt):nt()}function w(nt,at){let rt;const[mt,vt,R]=Hg(nt,at);rt=ao(mt.reverse(),"beforeRouteLeave",nt,at);for(const y of mt)y.leaveGuards.forEach(z=>{rt.push(mi(z,nt,at))});const X=N.bind(null,nt,at);return rt.push(X),pt(rt).then(()=>{rt=[];for(const y of s.list())rt.push(mi(y,nt,at));return rt.push(X),pt(rt)}).then(()=>{rt=ao(vt,"beforeRouteUpdate",nt,at);for(const y of vt)y.updateGuards.forEach(z=>{rt.push(mi(z,nt,at))});return rt.push(X),pt(rt)}).then(()=>{rt=[];for(const y of R)if(y.beforeEnter)if(Sn(y.beforeEnter))for(const z of y.beforeEnter)rt.push(mi(z,nt,at));else rt.push(mi(y.beforeEnter,nt,at));return rt.push(X),pt(rt)}).then(()=>(nt.matched.forEach(y=>y.enterCallbacks={}),rt=ao(R,"beforeRouteEnter",nt,at,O),rt.push(X),pt(rt))).then(()=>{rt=[];for(const y of o.list())rt.push(mi(y,nt,at));return rt.push(X),pt(rt)}).catch(y=>Bn(y,me.NAVIGATION_CANCELLED)?y:Promise.reject(y))}function D(nt,at,rt){a.list().forEach(mt=>O(()=>mt(nt,at,rt)))}function T(nt,at,rt,mt,vt){const R=_(nt,at);if(R)return R;const X=at===oi,y=yr?history.state:{};rt&&(mt||X?r.replace(nt.fullPath,Qt({scroll:X&&y&&y.scroll},vt)):r.push(nt.fullPath,vt)),l.value=nt,j(nt,at,rt,X),st()}let U;function S(){U||(U=r.listen((nt,at,rt)=>{if(!W.listening)return;const mt=h(nt),vt=P(mt,W.currentRoute.value);if(vt){C(Qt(vt,{replace:!0,force:!0}),mt).catch(ls);return}u=mt;const R=l.value;yr&&Ug(Oc(R.fullPath,rt.delta),Na()),w(mt,R).catch(X=>Bn(X,me.NAVIGATION_ABORTED|me.NAVIGATION_CANCELLED)?X:Bn(X,me.NAVIGATION_GUARD_REDIRECT)?(C(Qt(x(X.to),{force:!0}),mt).then(y=>{Bn(y,me.NAVIGATION_ABORTED|me.NAVIGATION_DUPLICATED)&&!rt.delta&&rt.type===nl.pop&&r.go(-1,!1)}).catch(ls),Promise.reject()):(rt.delta&&r.go(-rt.delta,!1),tt(X,mt,R))).then(X=>{X=X||T(mt,R,!1),X&&(rt.delta&&!Bn(X,me.NAVIGATION_CANCELLED)?r.go(-rt.delta,!1):rt.type===nl.pop&&Bn(X,me.NAVIGATION_ABORTED|me.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),D(mt,R,X)}).catch(ls)}))}let H=Xr(),J=Xr(),q;function tt(nt,at,rt){st(nt);const mt=J.list();return mt.length?mt.forEach(vt=>vt(nt,at,rt)):console.error(nt),Promise.reject(nt)}function Z(){return q&&l.value!==oi?Promise.resolve():new Promise((nt,at)=>{H.add([nt,at])})}function st(nt){return q||(q=!nt,S(),H.list().forEach(([at,rt])=>nt?rt(nt):at()),H.reset()),nt}function j(nt,at,rt,mt){const{scrollBehavior:vt}=n;if(!yr||!vt)return Promise.resolve();const R=!rt&&Ng(Oc(nt.fullPath,0))||(mt||!rt)&&history.state&&history.state.scroll||null;return Sr().then(()=>vt(nt,at,R)).then(X=>X&&Dg(X)).catch(X=>tt(X,nt,at))}const $=nt=>r.go(nt);let xt;const V=new Set,W={currentRoute:l,listening:!0,addRoute:d,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:g,resolve:h,options:n,push:M,replace:E,go:$,back:()=>$(-1),forward:()=>$(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:Z,install(nt){nt.component("RouterLink",u_),nt.component("RouterView",p_),nt.config.globalProperties.$router=W,Object.defineProperty(nt.config.globalProperties,"$route",{enumerable:!0,get:()=>ji(l)}),yr&&!xt&&l.value===oi&&(xt=!0,M(r.location).catch(mt=>{}));const at={};for(const mt in oi)Object.defineProperty(at,mt,{get:()=>l.value[mt],enumerable:!0});nt.provide(Oa,W),nt.provide(Nl,Gf(at)),nt.provide(rl,l);const rt=nt.unmount;V.add(nt),nt.unmount=function(){V.delete(nt),V.size<1&&(u=oi,U&&U(),U=null,l.value=oi,xt=!1,q=!1),rt()}}};function pt(nt){return nt.reduce((at,rt)=>at.then(()=>O(rt)),Promise.resolve())}return W}function g_(){return vn(Oa)}function __(n){return vn(Nl)}const Qi=(n,t)=>{const e=n.__vccOpts||n;for(const[i,r]of t)e[i]=r;return e},v_={class:"topbar"},x_={class:"topbar-left"},y_={class:"topbar-nav"},S_={class:"topbar-right"},M_={class:"theme-switcher"},b_=["title","onClick"],E_={__name:"TopBar",props:{currentTheme:{type:String,default:"dark"},currentRoute:{type:String,default:"/"}},emits:["set-theme","nav"],setup(n){const t=[{id:"dark",label:"黑色",color:"#111"},{id:"gray",label:"灰色",color:"#555"},{id:"light",label:"白色",color:"#e8e8e8"}];return(e,i)=>($t(),Zt("header",v_,[ot("div",x_,[i[4]||(i[4]=ot("div",{class:"logo"},[ot("span",{class:"logo-k"},"K"),ot("span",{class:"logo-rest"},"Skr")],-1)),i[5]||(i[5]=ot("div",{class:"topbar-divider"},null,-1)),ot("nav",y_,[ot("button",{class:ye(["nav-tab",{active:n.currentRoute==="/"}]),onClick:i[0]||(i[0]=r=>e.$emit("nav","/"))},[...i[2]||(i[2]=[ot("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[ot("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),ot("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),ot("polyline",{points:"21 15 16 10 5 21"})],-1),vi(" 插件预览 ",-1)])],2),ot("button",{class:ye(["nav-tab",{active:n.currentRoute==="/convert"}]),onClick:i[1]||(i[1]=r=>e.$emit("nav","/convert"))},[...i[3]||(i[3]=[ot("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[ot("polygon",{points:"23 7 16 12 23 17 23 7"}),ot("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"})],-1),vi(" 视频素材转换 ",-1)])],2)])]),ot("div",S_,[i[6]||(i[6]=ot("a",{href:"https://kskr.kuaishou.com",target:"_blank",class:"topbar-link"},"文档",-1)),i[7]||(i[7]=ot("a",{href:"#",class:"topbar-link"},"更新日志",-1)),i[8]||(i[8]=ot("a",{href:"#",class:"topbar-link"},"关于",-1)),ot("div",M_,[($t(),Zt(Ne,null,Lr(t,r=>ot("button",{key:r.id,class:ye(["theme-btn",{active:n.currentTheme===r.id}]),title:r.label,onClick:s=>e.$emit("set-theme",r.id)},[ot("span",{class:"theme-dot",style:Jn({background:r.color})},null,4)],10,b_)),64))]),i[9]||(i[9]=ot("span",{class:"version-badge"},"v1.0",-1))])]))}},w_=Qi(E_,[["__scopeId","data-v-1117d291"]]),T_={class:"app-body"},A_={__name:"App",setup(n){const t=jt("dark");function e(a){t.value=a}const i=g_(),r=__(),s=ge(()=>r.path);function o(a){i.push(a)}return(a,l)=>{const u=Bp("router-view");return $t(),Zt("div",{class:ye(["app","theme-"+t.value])},[Se(w_,{currentTheme:t.value,currentRoute:s.value,onSetTheme:e,onNav:o},null,8,["currentTheme","currentRoute"]),ot("div",T_,[Se(u)])],2)}}},C_=Qi(A_,[["__scopeId","data-v-19514291"]]),sa=[{id:"light",name:"光效",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',plugins:[{id:"edge-glow",name:"EdgeGlow",nameZh:"边缘辉光",status:"active"},{id:"enlargement",name:"Enlargement",nameZh:"局部放大",status:"active"},{id:"shaft-light",name:"ShaftLight",nameZh:"光柱",status:"active"},{id:"overall-glow",name:"OverallGlow",nameZh:"泛光",status:"active"}]},{id:"distortion",name:"画面扭曲",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8"/><path d="M3 12c0 2.2 3.6 4 8 4s8-1.8 8-4"/><path d="M3 12c0-2.2 3.6-4 8-4s8 1.8 8 4"/></svg>',plugins:[{id:"wave-blur",name:"WaveBlurring",nameZh:"波形模糊",status:"active"},{id:"cc-lens",name:"CCLens",nameZh:"鱼眼",status:"active"},{id:"ripple",name:"Ripple",nameZh:"波纹",status:"active"},{id:"wave-warp",name:"WaveWarp",nameZh:"波形变形",status:"active"},{id:"twirl-distort",name:"TwirlDistort",nameZh:"旋转扭曲",status:"active"}]},{id:"blur-mosaic",name:"模糊/马赛克",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="4" height="4"/><rect x="10" y="3" width="4" height="4"/><rect x="17" y="3" width="4" height="4"/><rect x="3" y="10" width="4" height="4"/><rect x="10" y="10" width="4" height="4"/><rect x="17" y="10" width="4" height="4"/><rect x="3" y="17" width="4" height="4"/><rect x="10" y="17" width="4" height="4"/><rect x="17" y="17" width="4" height="4"/></svg>',plugins:[{id:"directional-blur",name:"Directional Blur",nameZh:"定向模糊",status:"active"},{id:"radial-blur",name:"Radial Blur",nameZh:"径向模糊",status:"active"},{id:"basic-mosaic",name:"Basic Mosaic",nameZh:"基础马赛克",status:"active"},{id:"blur-mosaic-fx",name:"Blur Mosaic",nameZh:"模糊马赛克",status:"active"},{id:"brick-mosaic",name:"Brick Mosaic",nameZh:"砖块马赛克",status:"active"},{id:"colorful-mosaic-1",name:"Colorful MosaicI",nameZh:"彩色马赛克 I",status:"active"},{id:"colorful-mosaic-2",name:"Colorful MosaicII",nameZh:"彩色马赛克 II",status:"active"},{id:"colorful-mosaic-3",name:"Colorful MosaicIII",nameZh:"彩色马赛克 III",status:"active"},{id:"glass-mosaic-1",name:"Glass MosaicI",nameZh:"玻璃马赛克 I",status:"active"},{id:"glass-mosaic-2",name:"Glass MosaicII",nameZh:"玻璃马赛克 II",status:"active"},{id:"hexagon-mosaic",name:"Hexagon Mosaic",nameZh:"六边形马赛克",status:"active"},{id:"star-mosaic",name:"Star Mosaic",nameZh:"星形马赛克",status:"active"}]},{id:"text",name:"文本",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>',plugins:[{id:"text-glitch",name:"TextGlitch",nameZh:"文字故障",status:"coming"},{id:"text-reveal",name:"TextReveal",nameZh:"文字揭示",status:"coming"},{id:"kinetic-type",name:"KineticType",nameZh:"动态字体",status:"coming"},{id:"neon-text",name:"NeonText",nameZh:"霓虹文字",status:"coming"}]},{id:"filter",name:"滤镜",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M8 12a4 4 0 0 1 8 0"/><line x1="12" y1="3" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="21"/><line x1="3" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="21" y2="12"/></svg>',plugins:[{id:"engrave",name:"Engrave",nameZh:"雕刻",status:"active"},{id:"newsprint",name:"Newsprint",nameZh:"报纸印刷",status:"active"},{id:"cartoon",name:"Cartoon",nameZh:"卡通",status:"active"},{id:"film-soft-light",name:"FilmSoftLight",nameZh:"胶片柔光",status:"active"},{id:"comic",name:"Comic",nameZh:"漫画",status:"active"}]},{id:"stylize",name:"风格化",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/><circle cx="12" cy="12" r="3"/></svg>',plugins:[{id:"oil-paint",name:"OilPaint",nameZh:"油画效果",status:"coming"},{id:"sketch",name:"Sketch",nameZh:"素描效果",status:"coming"},{id:"halftone",name:"Halftone",nameZh:"半调效果",status:"coming"},{id:"watercolor",name:"Watercolor",nameZh:"水彩效果",status:"coming"},{id:"glitch-art",name:"GlitchArt",nameZh:"故障艺术",status:"coming"}]},{id:"generate",name:"生成",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',plugins:[{id:"particle-gen",name:"ParticleGen",nameZh:"粒子生成",status:"coming"},{id:"noise-field",name:"NoiseField",nameZh:"噪声场",status:"coming"},{id:"fractal",name:"FractalGen",nameZh:"分形生成",status:"coming"},{id:"grid-gen",name:"GridGen",nameZh:"网格生成",status:"coming"}]}],R_={class:"sidebar"},P_={class:"category-list"},L_=["onClick"],I_=["innerHTML"],D_={class:"category-name"},U_={class:"plugin-list"},N_=["onClick"],O_={class:"plugin-info"},F_={class:"plugin-name"},k_={class:"plugin-name-zh"},B_={key:0,class:"plugin-tag"},z_={key:1,class:"plugin-tag active-tag"},G_={class:"sidebar-footer"},H_={class:"footer-text"},V_={class:"footer-count"},W_={class:"footer-available"},X_={__name:"Sidebar",emits:["select-plugin"],setup(n,{emit:t}){const e=t,i=jt("distortion"),r=jt("wave-blur"),s=ge(()=>sa.reduce((u,c)=>u+c.plugins.length,0)),o=ge(()=>sa.reduce((u,c)=>u+c.plugins.filter(f=>f.status==="active").length,0));function a(u){i.value=i.value===u?null:u}function l(u){u.status!=="coming"&&(r.value=u.id,e("select-plugin",u))}return(u,c)=>($t(),Zt("aside",R_,[ot("div",P_,[($t(!0),Zt(Ne,null,Lr(ji(sa),f=>($t(),Zt("div",{key:f.id,class:ye(["category-item",{expanded:i.value===f.id}])},[ot("div",{class:ye(["category-header",{active:i.value===f.id}]),onClick:p=>a(f.id)},[ot("div",{class:"category-icon",innerHTML:f.icon},null,8,I_),ot("span",D_,ie(f.name),1),c[0]||(c[0]=ot("div",{class:"category-arrow"},[ot("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[ot("polyline",{points:"6 9 12 15 18 9"})])],-1))],10,L_),Se(Dm,{name:"slide"},{default:$f(()=>[qo(ot("div",U_,[($t(!0),Zt(Ne,null,Lr(f.plugins,p=>($t(),Zt("div",{key:p.id,class:ye(["plugin-item",{selected:r.value===p.id,coming:p.status==="coming"}]),onClick:d=>l(p)},[c[1]||(c[1]=ot("div",{class:"plugin-dot"},null,-1)),ot("div",O_,[ot("span",F_,ie(p.name),1),ot("span",k_,ie(p.nameZh),1)]),p.status==="coming"?($t(),Zt("span",B_,"即将")):($t(),Zt("span",z_,"可用"))],10,N_))),128))],512),[[Bm,i.value===f.id]])]),_:2},1024)],2))),128))]),ot("div",G_,[ot("div",H_,[ot("span",V_,ie(s.value)+" 个插件",1),c[2]||(c[2]=ot("span",{class:"footer-divider"},"·",-1)),ot("span",W_,ie(o.value)+" 已上线",1)])])]))}},q_=Qi(X_,[["__scopeId","data-v-3c9974e1"]]),j_={class:"param-panel"},Y_={class:"plugin-header"},$_={class:"plugin-title-row"},Z_={class:"plugin-title"},K_={class:"plugin-title-zh"},J_={class:"params-scroll"},Q_={class:"param-header"},t0={class:"param-label"},e0={class:"param-value-wrap"},n0={class:"param-value"},i0={class:"param-desc"},r0={class:"slider-wrap"},s0={class:"slider-min"},a0=["min","max","step","value","onInput"],o0={class:"slider-max"},l0={class:"panel-actions"},c0={class:"btn-upload"},u0={__name:"ParamPanel",props:{plugin:{type:Object,required:!0},params:{type:Array,required:!0},modelValue:{type:Object,required:!0},compareMode:{type:Boolean,default:!1}},emits:["update:modelValue","reset","upload","toggle-compare"],setup(n,{emit:t}){const e=n,i=t;function r(o,a){i("update:modelValue",{...e.modelValue,[o]:parseFloat(a)})}function s(o){return typeof o=="number"?o.toFixed(1):o}return(o,a)=>($t(),Zt("div",j_,[ot("div",Y_,[ot("div",$_,[ot("div",null,[ot("h2",Z_,ie(n.plugin.name),1),ot("p",K_,ie(n.plugin.nameZh),1)]),ot("button",{class:"btn-icon",onClick:a[0]||(a[0]=l=>o.$emit("reset")),title:"重置参数"},[...a[3]||(a[3]=[ot("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[ot("polyline",{points:"1 4 1 10 7 10"}),ot("path",{d:"M3.51 15a9 9 0 1 0 .49-4.64"})],-1)])])])]),ot("div",J_,[($t(!0),Zt(Ne,null,Lr(n.params,l=>($t(),Zt("div",{class:"param-group",key:l.key},[ot("div",Q_,[ot("span",t0,ie(l.label),1),ot("div",e0,[ot("span",n0,ie(s(n.modelValue[l.key])),1)])]),ot("p",i0,ie(l.desc),1),ot("div",r0,[ot("span",s0,ie(l.min),1),ot("input",{type:"range",min:l.min,max:l.max,step:l.step||.1,value:n.modelValue[l.key],onInput:u=>r(l.key,u.target.value)},null,40,a0),ot("span",o0,ie(l.max),1)])]))),128))]),ot("div",l0,[ot("label",c0,[ot("input",{type:"file",accept:"image/*",onChange:a[1]||(a[1]=l=>o.$emit("upload",l)),hidden:""},null,32),a[4]||(a[4]=ot("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[ot("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),ot("polyline",{points:"17 8 12 3 7 8"}),ot("line",{x1:"12",y1:"3",x2:"12",y2:"15"})],-1)),a[5]||(a[5]=vi(" 上传图片 ",-1))]),ot("button",{class:ye(["btn-compare",{active:n.compareMode}]),onClick:a[2]||(a[2]=l=>o.$emit("toggle-compare"))},[a[6]||(a[6]=ot("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[ot("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),ot("line",{x1:"12",y1:"3",x2:"12",y2:"21"})],-1)),vi(" "+ie(n.compareMode?"关闭对比":"前后对比"),1)],2)])]))}},f0=Qi(u0,[["__scopeId","data-v-78100527"]]),h0={class:"preview-area"},d0={class:"preview-toolbar"},p0={class:"toolbar-left"},m0={class:"breadcrumb"},g0={class:"breadcrumb-cat"},_0={class:"breadcrumb-plugin"},v0={class:"toolbar-right"},x0={class:"view-toggle"},y0=["onClick","title"],S0=["innerHTML"],M0={class:"zoom-control"},b0={class:"zoom-val"},E0={class:"center-wrap"},w0={__name:"PreviewArea",props:{compareMode:{type:Boolean,default:!1},hasImage:{type:Boolean,default:!1},isWebGL:{type:Boolean,default:!1},showingOriginal:{type:Boolean,default:!1},currentCategory:{type:String,default:""},currentPlugin:{type:String,default:""},imageWidth:{type:Number,default:0},imageHeight:{type:Number,default:0}},emits:["upload","toggle-original"],setup(n,{expose:t,emit:e}){const i=n,r=e,s=jt(null),o=jt(null),a=jt(null),l=jt(null),u=jt(null),c=jt(null),f=jt("fit"),p=jt(100),d=[{id:"fit",label:"适应窗口",icon:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>'},{id:"actual",label:"实际大小",icon:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>'}],v=ge(()=>i.imageWidth||900),g=ge(()=>i.imageHeight||600),m=ge(()=>f.value==="fit"?{width:v.value+"px",height:g.value+"px",maxWidth:"100%",maxHeight:"100%"}:{width:Math.round(v.value*p.value/100)+"px",height:Math.round(g.value*p.value/100)+"px"});t({webglCanvas:s,canvas2d:o,originalCanvas:a});function h(){var P;(P=l.value)==null||P.click()}function x(P){r("upload",P)}function _(P){var N,O;P.preventDefault();const C=(O=(N=P.dataTransfer)==null?void 0:N.files)==null?void 0:O[0];C&&r("upload",{target:{files:[C]}})}function M(P){p.value=Math.min(400,Math.max(10,p.value+P))}function E(){r("toggle-original")}return(P,C)=>($t(),Zt("div",h0,[ot("div",d0,[ot("div",p0,[ot("span",m0,[ot("span",g0,ie(n.currentCategory),1),C[3]||(C[3]=ot("span",{class:"breadcrumb-sep"},"/",-1)),ot("span",_0,ie(n.currentPlugin),1)])]),ot("div",v0,[ot("div",x0,[($t(),Zt(Ne,null,Lr(d,N=>ot("button",{key:N.id,class:ye({active:f.value===N.id}),onClick:O=>f.value=N.id,title:N.label},[ot("span",{innerHTML:N.icon},null,8,S0)],10,y0)),64))]),ot("div",M0,[ot("button",{onClick:C[0]||(C[0]=N=>M(-25))},[...C[4]||(C[4]=[ot("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[ot("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])]),ot("span",b0,ie(p.value)+"%",1),ot("button",{onClick:C[1]||(C[1]=N=>M(25))},[...C[5]||(C[5]=[ot("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[ot("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),ot("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])])])]),ot("div",{class:"canvas-area",ref_key:"canvasArea",ref:c},[n.hasImage?en("",!0):($t(),Zt("div",{key:0,class:"upload-placeholder",onClick:h,onDragover:C[2]||(C[2]=tl(()=>{},["prevent"])),onDrop:_},[...C[6]||(C[6]=[Ch('<div class="upload-box" data-v-e90c1f16><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" data-v-e90c1f16><rect x="3" y="3" width="18" height="18" rx="2" data-v-e90c1f16></rect><circle cx="8.5" cy="8.5" r="1.5" data-v-e90c1f16></circle><polyline points="21 15 16 10 5 21" data-v-e90c1f16></polyline></svg><p class="upload-text" data-v-e90c1f16>点击或拖拽图片到此处</p><p class="upload-sub" data-v-e90c1f16>支持 JPG、PNG、WebP</p></div>',1)])],32)),ot("div",{class:ye(["scroll-wrap",{scrollable:f.value==="actual",hidden:!n.hasImage}])},[ot("div",E0,[ot("div",{class:"canvas-wrap",style:Jn(m.value),ref_key:"canvasWrapRef",ref:u},[ot("canvas",{ref_key:"webglCanvas",ref:s,class:"abs-fill",style:Jn({display:n.isWebGL?"block":"none"})},null,4),ot("canvas",{ref_key:"canvas2d",ref:o,class:"abs-fill",style:Jn({display:n.isWebGL?"none":"block"})},null,4),n.compareMode&&n.hasImage?($t(),Zt("div",{key:0,class:ye(["compare-overlay",{"showing-original":n.showingOriginal}]),onClick:E},[ot("canvas",{ref_key:"originalCanvas",ref:a,class:"abs-fill",style:Jn({opacity:n.showingOriginal?1:0})},null,4),ot("div",{class:ye(["cmp-badge",n.showingOriginal?"badge-orig":"badge-fx"])},ie(n.showingOriginal?"原图":"效果"),3),C[7]||(C[7]=ot("div",{class:"cmp-hint"},"点击切换",-1))],2)):en("",!0)],4)])],2)],512),ot("input",{ref_key:"fileInput",ref:l,type:"file",accept:"image/*",onChange:x,style:{display:"none"}},null,544)]))}},T0=Qi(w0,[["__scopeId","data-v-e90c1f16"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ol="162",A0=0,$c=1,C0=2,jh=1,R0=2,Xn=3,bi=0,Ke=1,Zn=2,xi=0,Cr=1,Zc=2,Kc=3,Jc=4,P0=5,Gi=100,L0=101,I0=102,Qc=103,tu=104,D0=200,U0=201,N0=202,O0=203,sl=204,al=205,F0=206,k0=207,B0=208,z0=209,G0=210,H0=211,V0=212,W0=213,X0=214,q0=0,j0=1,Y0=2,ga=3,$0=4,Z0=5,K0=6,J0=7,Yh=0,Q0=1,tv=2,yi=0,ev=1,nv=2,iv=3,rv=4,sv=5,av=6,ov=7,$h=300,Ur=301,Nr=302,ol=303,ll=304,Fa=306,cl=1e3,mn=1001,ul=1002,He=1003,eu=1004,qr=1005,$e=1006,oo=1007,Wi=1008,Si=1009,lv=1010,cv=1011,Fl=1012,Zh=1013,_i=1014,Kn=1015,_s=1016,Kh=1017,Jh=1018,Yi=1020,uv=1021,gn=1023,fv=1024,hv=1025,$i=1026,Or=1027,dv=1028,Qh=1029,pv=1030,td=1031,ed=1033,lo=33776,co=33777,uo=33778,fo=33779,nu=35840,iu=35841,ru=35842,su=35843,nd=36196,au=37492,ou=37496,lu=37808,cu=37809,uu=37810,fu=37811,hu=37812,du=37813,pu=37814,mu=37815,gu=37816,_u=37817,vu=37818,xu=37819,yu=37820,Su=37821,ho=36492,Mu=36494,bu=36495,mv=36283,Eu=36284,wu=36285,Tu=36286,gv=3200,_v=3201,vv=0,xv=1,gi="",Tn="srgb",Ei="srgb-linear",kl="display-p3",ka="display-p3-linear",_a="linear",ue="srgb",va="rec709",xa="p3",nr=7680,Au=519,yv=512,Sv=513,Mv=514,id=515,bv=516,Ev=517,wv=518,Tv=519,Cu=35044,Ru="300 es",fl=1035,Qn=2e3,ya=2001;class kr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],po=Math.PI/180,hl=180/Math.PI;function Ss(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]).toLowerCase()}function Ze(n,t,e){return Math.max(t,Math.min(e,n))}function Av(n,t){return(n%t+t)%t}function mo(n,t,e){return(1-e)*n+e*t}function Pu(n){return(n&n-1)===0&&n!==0}function dl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function jr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function je(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Kt{constructor(t=0,e=0){Kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,i,r,s,o,a,l,u){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,u)}set(t,e,i,r,s,o,a,l,u){const c=this.elements;return c[0]=t,c[1]=r,c[2]=a,c[3]=e,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],p=i[2],d=i[5],v=i[8],g=r[0],m=r[3],h=r[6],x=r[1],_=r[4],M=r[7],E=r[2],P=r[5],C=r[8];return s[0]=o*g+a*x+l*E,s[3]=o*m+a*_+l*P,s[6]=o*h+a*M+l*C,s[1]=u*g+c*x+f*E,s[4]=u*m+c*_+f*P,s[7]=u*h+c*M+f*C,s[2]=p*g+d*x+v*E,s[5]=p*m+d*_+v*P,s[8]=p*h+d*M+v*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8];return e*o*c-e*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],f=c*o-a*u,p=a*l-c*s,d=u*s-o*l,v=e*f+i*p+r*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=f*g,t[1]=(r*u-c*i)*g,t[2]=(a*i-r*o)*g,t[3]=p*g,t[4]=(c*e-r*l)*g,t[5]=(r*s-a*e)*g,t[6]=d*g,t[7]=(i*l-u*e)*g,t[8]=(o*e-i*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+t,-r*u,r*l,-r*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(go.makeScale(t,e)),this}rotate(t){return this.premultiply(go.makeRotation(-t)),this}translate(t,e){return this.premultiply(go.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const go=new Wt;function rd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Sa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Cv(){const n=Sa("canvas");return n.style.display="block",n}const Lu={};function Rv(n){n in Lu||(Lu[n]=!0,console.warn(n))}const Iu=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Du=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ls={[Ei]:{transfer:_a,primaries:va,toReference:n=>n,fromReference:n=>n},[Tn]:{transfer:ue,primaries:va,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ka]:{transfer:_a,primaries:xa,toReference:n=>n.applyMatrix3(Du),fromReference:n=>n.applyMatrix3(Iu)},[kl]:{transfer:ue,primaries:xa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Du),fromReference:n=>n.applyMatrix3(Iu).convertLinearToSRGB()}},Pv=new Set([Ei,ka]),ne={enabled:!0,_workingColorSpace:Ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Pv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Ls[t].toReference,r=Ls[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Ls[n].primaries},getTransfer:function(n){return n===gi?_a:Ls[n].transfer}};function Rr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _o(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ir;class sd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ir===void 0&&(ir=Sa("canvas")),ir.width=t.width,ir.height=t.height;const i=ir.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ir}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Sa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Rr(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Rr(e[i]/255)*255):e[i]=Rr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Lv=0;class ad{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=Ss(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(vo(r[o].image)):s.push(vo(r[o]))}else s=vo(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function vo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Iv=0;class qe extends kr{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,i=mn,r=mn,s=$e,o=Wi,a=gn,l=Si,u=qe.DEFAULT_ANISOTROPY,c=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=Ss(),this.name="",this.source=new ad(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cl:t.x=t.x-Math.floor(t.x);break;case mn:t.x=t.x<0?0:1;break;case ul:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cl:t.y=t.y-Math.floor(t.y);break;case mn:t.y=t.y<0?0:1;break;case ul:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=$h;qe.DEFAULT_ANISOTROPY=1;class Pe{constructor(t=0,e=0,i=0,r=1){Pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,u=l[0],c=l[4],f=l[8],p=l[1],d=l[5],v=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(c-p)<.01&&Math.abs(f-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(c+p)<.1&&Math.abs(f+g)<.1&&Math.abs(v+m)<.1&&Math.abs(u+d+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(u+1)/2,M=(d+1)/2,E=(h+1)/2,P=(c+p)/4,C=(f+g)/4,N=(v+m)/4;return _>M&&_>E?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=P/i,s=C/i):M>E?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=P/r,s=N/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=C/s,r=N/s),this.set(i,r,s,e),this}let x=Math.sqrt((m-v)*(m-v)+(f-g)*(f-g)+(p-c)*(p-c));return Math.abs(x)<.001&&(x=1),this.x=(m-v)/x,this.y=(f-g)/x,this.z=(p-c)/x,this.w=Math.acos((u+d+h-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dv extends kr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new qe(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ad(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends Dv{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class od extends qe{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=He,this.minFilter=He,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uv extends qe{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=He,this.minFilter=He,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ms{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const p=s[o+0],d=s[o+1],v=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f;return}if(a===1){t[e+0]=p,t[e+1]=d,t[e+2]=v,t[e+3]=g;return}if(f!==g||l!==p||u!==d||c!==v){let m=1-a;const h=l*p+u*d+c*v+f*g,x=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const E=Math.sqrt(_),P=Math.atan2(E,h*x);m=Math.sin(m*P)/E,a=Math.sin(a*P)/E}const M=a*x;if(l=l*m+p*M,u=u*m+d*M,c=c*m+v*M,f=f*m+g*M,m===1-a){const E=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=E,u*=E,c*=E,f*=E}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],p=s[o+1],d=s[o+2],v=s[o+3];return t[e]=a*v+c*f+l*d-u*p,t[e+1]=l*v+c*p+u*f-a*d,t[e+2]=u*v+c*d+a*p-l*f,t[e+3]=c*v-a*f-l*p-u*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),p=l(i/2),d=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=p*c*f+u*d*v,this._y=u*d*f-p*c*v,this._z=u*c*v+p*d*f,this._w=u*c*f-p*d*v;break;case"YXZ":this._x=p*c*f+u*d*v,this._y=u*d*f-p*c*v,this._z=u*c*v-p*d*f,this._w=u*c*f+p*d*v;break;case"ZXY":this._x=p*c*f-u*d*v,this._y=u*d*f+p*c*v,this._z=u*c*v+p*d*f,this._w=u*c*f-p*d*v;break;case"ZYX":this._x=p*c*f-u*d*v,this._y=u*d*f+p*c*v,this._z=u*c*v-p*d*f,this._w=u*c*f+p*d*v;break;case"YZX":this._x=p*c*f+u*d*v,this._y=u*d*f+p*c*v,this._z=u*c*v-p*d*f,this._w=u*c*f-p*d*v;break;case"XZY":this._x=p*c*f-u*d*v,this._y=u*d*f-p*c*v,this._z=u*c*v+p*d*f,this._w=u*c*f+p*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],u=e[2],c=e[6],f=e[10],p=i+a+f;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(c-l)*d,this._y=(s-u)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(c-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+u)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-u)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+c)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+u)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ze(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,u=e._z,c=e._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-e)*c)/u,p=Math.sin(e*c)/u;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ht{constructor(t=0,e=0,i=0){ht.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*r-a*i),c=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return xo.copy(this).projectOnVector(t),this.sub(xo)}reflect(t){return this.sub(xo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xo=new ht,Uu=new Ms;class bs{constructor(t=new ht(1/0,1/0,1/0),e=new ht(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,fn):fn.fromBufferAttribute(s,o),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Is.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Is.copy(i.boundingBox)),Is.applyMatrix4(t.matrixWorld),this.union(Is)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yr),Ds.subVectors(this.max,Yr),rr.subVectors(t.a,Yr),sr.subVectors(t.b,Yr),ar.subVectors(t.c,Yr),li.subVectors(sr,rr),ci.subVectors(ar,sr),Li.subVectors(rr,ar);let e=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Li.z,Li.y,li.z,0,-li.x,ci.z,0,-ci.x,Li.z,0,-Li.x,-li.y,li.x,0,-ci.y,ci.x,0,-Li.y,Li.x,0];return!yo(e,rr,sr,ar,Ds)||(e=[1,0,0,0,1,0,0,0,1],!yo(e,rr,sr,ar,Ds))?!1:(Us.crossVectors(li,ci),e=[Us.x,Us.y,Us.z],yo(e,rr,sr,ar,Ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const zn=[new ht,new ht,new ht,new ht,new ht,new ht,new ht,new ht],fn=new ht,Is=new bs,rr=new ht,sr=new ht,ar=new ht,li=new ht,ci=new ht,Li=new ht,Yr=new ht,Ds=new ht,Us=new ht,Ii=new ht;function yo(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ii.fromArray(n,s);const a=r.x*Math.abs(Ii.x)+r.y*Math.abs(Ii.y)+r.z*Math.abs(Ii.z),l=t.dot(Ii),u=e.dot(Ii),c=i.dot(Ii);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Nv=new bs,$r=new ht,So=new ht;class Bl{constructor(t=new ht,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Nv.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$r.subVectors(t,this.center);const e=$r.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector($r,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(So.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($r.copy(t.center).add(So)),this.expandByPoint($r.copy(t.center).sub(So))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new ht,Mo=new ht,Ns=new ht,ui=new ht,bo=new ht,Os=new ht,Eo=new ht;class Ov{constructor(t=new ht,e=new ht(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Mo.copy(t).add(e).multiplyScalar(.5),Ns.copy(e).sub(t).normalize(),ui.copy(this.origin).sub(Mo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ns),a=ui.dot(this.direction),l=-ui.dot(Ns),u=ui.lengthSq(),c=Math.abs(1-o*o);let f,p,d,v;if(c>0)if(f=o*l-a,p=o*a-l,v=s*c,f>=0)if(p>=-v)if(p<=v){const g=1/c;f*=g,p*=g,d=f*(f+o*p+2*a)+p*(o*f+p+2*l)+u}else p=s,f=Math.max(0,-(o*p+a)),d=-f*f+p*(p+2*l)+u;else p=-s,f=Math.max(0,-(o*p+a)),d=-f*f+p*(p+2*l)+u;else p<=-v?(f=Math.max(0,-(-o*s+a)),p=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+p*(p+2*l)+u):p<=v?(f=0,p=Math.min(Math.max(-s,-l),s),d=p*(p+2*l)+u):(f=Math.max(0,-(o*s+a)),p=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+p*(p+2*l)+u);else p=o>0?-s:s,f=Math.max(0,-(o*p+a)),d=-f*f+p*(p+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Mo).addScaledVector(Ns,p),d}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);const i=Gn.dot(this.direction),r=Gn.dot(Gn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,p=this.origin;return u>=0?(i=(t.min.x-p.x)*u,r=(t.max.x-p.x)*u):(i=(t.max.x-p.x)*u,r=(t.min.x-p.x)*u),c>=0?(s=(t.min.y-p.y)*c,o=(t.max.y-p.y)*c):(s=(t.max.y-p.y)*c,o=(t.min.y-p.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-p.z)*f,l=(t.max.z-p.z)*f):(a=(t.max.z-p.z)*f,l=(t.min.z-p.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,i,r,s){bo.subVectors(e,t),Os.subVectors(i,t),Eo.crossVectors(bo,Os);let o=this.direction.dot(Eo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ui.subVectors(this.origin,t);const l=a*this.direction.dot(Os.crossVectors(ui,Os));if(l<0)return null;const u=a*this.direction.dot(bo.cross(ui));if(u<0||l+u>o)return null;const c=-a*ui.dot(Eo);return c<0?null:this.at(c/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(t,e,i,r,s,o,a,l,u,c,f,p,d,v,g,m){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,u,c,f,p,d,v,g,m)}set(t,e,i,r,s,o,a,l,u,c,f,p,d,v,g,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=p,h[3]=d,h[7]=v,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/or.setFromMatrixColumn(t,0).length(),s=1/or.setFromMatrixColumn(t,1).length(),o=1/or.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const p=o*c,d=o*f,v=a*c,g=a*f;e[0]=l*c,e[4]=-l*f,e[8]=u,e[1]=d+v*u,e[5]=p-g*u,e[9]=-a*l,e[2]=g-p*u,e[6]=v+d*u,e[10]=o*l}else if(t.order==="YXZ"){const p=l*c,d=l*f,v=u*c,g=u*f;e[0]=p+g*a,e[4]=v*a-d,e[8]=o*u,e[1]=o*f,e[5]=o*c,e[9]=-a,e[2]=d*a-v,e[6]=g+p*a,e[10]=o*l}else if(t.order==="ZXY"){const p=l*c,d=l*f,v=u*c,g=u*f;e[0]=p-g*a,e[4]=-o*f,e[8]=v+d*a,e[1]=d+v*a,e[5]=o*c,e[9]=g-p*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const p=o*c,d=o*f,v=a*c,g=a*f;e[0]=l*c,e[4]=v*u-d,e[8]=p*u+g,e[1]=l*f,e[5]=g*u+p,e[9]=d*u-v,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const p=o*l,d=o*u,v=a*l,g=a*u;e[0]=l*c,e[4]=g-p*f,e[8]=v*f+d,e[1]=f,e[5]=o*c,e[9]=-a*c,e[2]=-u*c,e[6]=d*f+v,e[10]=p-g*f}else if(t.order==="XZY"){const p=o*l,d=o*u,v=a*l,g=a*u;e[0]=l*c,e[4]=-f,e[8]=u*c,e[1]=p*f+g,e[5]=o*c,e[9]=d*f-v,e[2]=v*f-d,e[6]=a*c,e[10]=g*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fv,t,kv)}lookAt(t,e,i){const r=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),fi.crossVectors(i,Qe),fi.lengthSq()===0&&(Math.abs(i.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),fi.crossVectors(i,Qe)),fi.normalize(),Fs.crossVectors(Qe,fi),r[0]=fi.x,r[4]=Fs.x,r[8]=Qe.x,r[1]=fi.y,r[5]=Fs.y,r[9]=Qe.y,r[2]=fi.z,r[6]=Fs.z,r[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],p=i[9],d=i[13],v=i[2],g=i[6],m=i[10],h=i[14],x=i[3],_=i[7],M=i[11],E=i[15],P=r[0],C=r[4],N=r[8],O=r[12],w=r[1],D=r[5],T=r[9],U=r[13],S=r[2],H=r[6],J=r[10],q=r[14],tt=r[3],Z=r[7],st=r[11],j=r[15];return s[0]=o*P+a*w+l*S+u*tt,s[4]=o*C+a*D+l*H+u*Z,s[8]=o*N+a*T+l*J+u*st,s[12]=o*O+a*U+l*q+u*j,s[1]=c*P+f*w+p*S+d*tt,s[5]=c*C+f*D+p*H+d*Z,s[9]=c*N+f*T+p*J+d*st,s[13]=c*O+f*U+p*q+d*j,s[2]=v*P+g*w+m*S+h*tt,s[6]=v*C+g*D+m*H+h*Z,s[10]=v*N+g*T+m*J+h*st,s[14]=v*O+g*U+m*q+h*j,s[3]=x*P+_*w+M*S+E*tt,s[7]=x*C+_*D+M*H+E*Z,s[11]=x*N+_*T+M*J+E*st,s[15]=x*O+_*U+M*q+E*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],u=t[13],c=t[2],f=t[6],p=t[10],d=t[14],v=t[3],g=t[7],m=t[11],h=t[15];return v*(+s*l*f-r*u*f-s*a*p+i*u*p+r*a*d-i*l*d)+g*(+e*l*d-e*u*p+s*o*p-r*o*d+r*u*c-s*l*c)+m*(+e*u*f-e*a*d-s*o*f+i*o*d+s*a*c-i*u*c)+h*(-r*a*c-e*l*f+e*a*p+r*o*f-i*o*p+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],f=t[9],p=t[10],d=t[11],v=t[12],g=t[13],m=t[14],h=t[15],x=f*m*u-g*p*u+g*l*d-a*m*d-f*l*h+a*p*h,_=v*p*u-c*m*u-v*l*d+o*m*d+c*l*h-o*p*h,M=c*g*u-v*f*u+v*a*d-o*g*d-c*a*h+o*f*h,E=v*f*l-c*g*l-v*a*p+o*g*p+c*a*m-o*f*m,P=e*x+i*_+r*M+s*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return t[0]=x*C,t[1]=(g*p*s-f*m*s-g*r*d+i*m*d+f*r*h-i*p*h)*C,t[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*h+i*l*h)*C,t[3]=(f*l*s-a*p*s-f*r*u+i*p*u+a*r*d-i*l*d)*C,t[4]=_*C,t[5]=(c*m*s-v*p*s+v*r*d-e*m*d-c*r*h+e*p*h)*C,t[6]=(v*l*s-o*m*s-v*r*u+e*m*u+o*r*h-e*l*h)*C,t[7]=(o*p*s-c*l*s+c*r*u-e*p*u-o*r*d+e*l*d)*C,t[8]=M*C,t[9]=(v*f*s-c*g*s-v*i*d+e*g*d+c*i*h-e*f*h)*C,t[10]=(o*g*s-v*a*s+v*i*u-e*g*u-o*i*h+e*a*h)*C,t[11]=(c*a*s-o*f*s-c*i*u+e*f*u+o*i*d-e*a*d)*C,t[12]=E*C,t[13]=(c*g*r-v*f*r+v*i*p-e*g*p-c*i*m+e*f*m)*C,t[14]=(v*a*r-o*g*r-v*i*l+e*g*l+o*i*m-e*a*m)*C,t[15]=(o*f*r-c*a*r+c*i*l-e*f*l-o*i*p+e*a*p)*C,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,u=s+s,c=o+o,f=a+a,p=s*u,d=s*c,v=s*f,g=o*c,m=o*f,h=a*f,x=l*u,_=l*c,M=l*f,E=i.x,P=i.y,C=i.z;return r[0]=(1-(g+h))*E,r[1]=(d+M)*E,r[2]=(v-_)*E,r[3]=0,r[4]=(d-M)*P,r[5]=(1-(p+h))*P,r[6]=(m+x)*P,r[7]=0,r[8]=(v+_)*C,r[9]=(m-x)*C,r[10]=(1-(p+g))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=or.set(r[0],r[1],r[2]).length();const o=or.set(r[4],r[5],r[6]).length(),a=or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],hn.copy(this);const u=1/s,c=1/o,f=1/a;return hn.elements[0]*=u,hn.elements[1]*=u,hn.elements[2]*=u,hn.elements[4]*=c,hn.elements[5]*=c,hn.elements[6]*=c,hn.elements[8]*=f,hn.elements[9]*=f,hn.elements[10]*=f,e.setFromRotationMatrix(hn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Qn){const l=this.elements,u=2*s/(e-t),c=2*s/(i-r),f=(e+t)/(e-t),p=(i+r)/(i-r);let d,v;if(a===Qn)d=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ya)d=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Qn){const l=this.elements,u=1/(e-t),c=1/(i-r),f=1/(o-s),p=(e+t)*u,d=(i+r)*c;let v,g;if(a===Qn)v=(o+s)*f,g=-2*f;else if(a===ya)v=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const or=new ht,hn=new Me,Fv=new ht(0,0,0),kv=new ht(1,1,1),fi=new ht,Fs=new ht,Qe=new ht,Nu=new Me,Ou=new Ms;class ii{constructor(t=0,e=0,i=0,r=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],p=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Nu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ou.setFromEuler(this),this.setFromQuaternion(Ou,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class ld{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bv=0;const Fu=new ht,lr=new Ms,Hn=new Me,ks=new ht,Zr=new ht,zv=new ht,Gv=new Ms,ku=new ht(1,0,0),Bu=new ht(0,1,0),zu=new ht(0,0,1),Hv={type:"added"},Vv={type:"removed"},wo={type:"childadded",child:null},To={type:"childremoved",child:null};class sn extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const t=new ht,e=new ii,i=new Ms,r=new ht(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Me},normalMatrix:{value:new Wt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ld,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return lr.setFromAxisAngle(t,e),this.quaternion.multiply(lr),this}rotateOnWorldAxis(t,e){return lr.setFromAxisAngle(t,e),this.quaternion.premultiply(lr),this}rotateX(t){return this.rotateOnAxis(ku,t)}rotateY(t){return this.rotateOnAxis(Bu,t)}rotateZ(t){return this.rotateOnAxis(zu,t)}translateOnAxis(t,e){return Fu.copy(t).applyQuaternion(this.quaternion),this.position.add(Fu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ku,t)}translateY(t){return this.translateOnAxis(Bu,t)}translateZ(t){return this.translateOnAxis(zu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ks.copy(t):ks.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Zr,ks,this.up):Hn.lookAt(ks,Zr,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),lr.setFromRotationMatrix(Hn),this.quaternion.premultiply(lr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Hv),wo.child=t,this.dispatchEvent(wo),wo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vv),To.child=t,this.dispatchEvent(To),To.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,t,zv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,Gv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),c=o(t.images),f=o(t.shapes),p=o(t.skeletons),d=o(t.animations),v=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}sn.DEFAULT_UP=new ht(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new ht,Vn=new ht,Ao=new ht,Wn=new ht,cr=new ht,ur=new ht,Gu=new ht,Co=new ht,Ro=new ht,Po=new ht;class Ln{constructor(t=new ht,e=new ht,i=new ht){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),dn.subVectors(t,e),r.cross(dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){dn.subVectors(r,e),Vn.subVectors(i,e),Ao.subVectors(t,e);const o=dn.dot(dn),a=dn.dot(Vn),l=dn.dot(Ao),u=Vn.dot(Vn),c=Vn.dot(Ao),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const p=1/f,d=(u*l-a*c)*p,v=(o*c-a*l)*p;return s.set(1-d-v,v,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static isFrontFacing(t,e,i,r){return dn.subVectors(i,e),Vn.subVectors(t,e),dn.cross(Vn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),dn.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Ln.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;cr.subVectors(r,i),ur.subVectors(s,i),Co.subVectors(t,i);const l=cr.dot(Co),u=ur.dot(Co);if(l<=0&&u<=0)return e.copy(i);Ro.subVectors(t,r);const c=cr.dot(Ro),f=ur.dot(Ro);if(c>=0&&f<=c)return e.copy(r);const p=l*f-c*u;if(p<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(i).addScaledVector(cr,o);Po.subVectors(t,s);const d=cr.dot(Po),v=ur.dot(Po);if(v>=0&&d<=v)return e.copy(s);const g=d*u-l*v;if(g<=0&&u>=0&&v<=0)return a=u/(u-v),e.copy(i).addScaledVector(ur,a);const m=c*v-d*f;if(m<=0&&f-c>=0&&d-v>=0)return Gu.subVectors(s,r),a=(f-c)/(f-c+(d-v)),e.copy(r).addScaledVector(Gu,a);const h=1/(m+g+p);return o=g*h,a=p*h,e.copy(i).addScaledVector(cr,o).addScaledVector(ur,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function Lo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class re{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=ne.workingColorSpace){if(t=Av(t,1),e=Ze(e,0,1),i=Ze(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Lo(o,s,t+1/3),this.g=Lo(o,s,t),this.b=Lo(o,s,t-1/3)}return ne.toWorkingColorSpace(this,r),this}setStyle(t,e=Tn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Tn){const i=cd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rr(t.r),this.g=Rr(t.g),this.b=Rr(t.b),this}copyLinearToSRGB(t){return this.r=_o(t.r),this.g=_o(t.g),this.b=_o(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Tn){return ne.fromWorkingColorSpace(De.copy(this),t),Math.round(Ze(De.r*255,0,255))*65536+Math.round(Ze(De.g*255,0,255))*256+Math.round(Ze(De.b*255,0,255))}getHexString(t=Tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(De.copy(this),e);const i=De.r,r=De.g,s=De.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Tn){ne.fromWorkingColorSpace(De.copy(this),t);const e=De.r,i=De.g,r=De.b;return t!==Tn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(Bs);const i=mo(hi.h,Bs.h,e),r=mo(hi.s,Bs.s,e),s=mo(hi.l,Bs.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new re;re.NAMES=cd;let Wv=0;class Ba extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=Ss(),this.name="",this.type="Material",this.blending=Cr,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=al,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(i.blending=this.blending),this.side!==bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sl&&(i.blendSrc=this.blendSrc),this.blendDst!==al&&(i.blendDst=this.blendDst),this.blendEquation!==Gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ga&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Au&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ud extends Ba{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new ht,zs=new Kt;class Un{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Cu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Rv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)zs.fromBufferAttribute(this,e),zs.applyMatrix3(t),this.setXY(e,zs.x,zs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=jr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=je(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jr(e,this.array)),e}setX(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jr(e,this.array)),e}setY(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jr(e,this.array)),e}setW(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array),r=je(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array),r=je(r,this.array),s=je(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cu&&(t.usage=this.usage),t}}class fd extends Un{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class hd extends Un{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Zi extends Un{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Xv=0;const cn=new Me,Io=new sn,fr=new ht,tn=new bs,Kr=new bs,Ae=new ht;class tr extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rd(t)?hd:fd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Wt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,i){return cn.makeTranslation(t,e,i),this.applyMatrix4(cn),this}scale(t,e,i){return cn.makeScale(t,e,i),this.applyMatrix4(cn),this}lookAt(t){return Io.lookAt(t),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Zi(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ht(-1/0,-1/0,-1/0),new ht(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ht,1/0);return}if(t){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Kr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(tn.min,Kr.min),tn.expandByPoint(Ae),Ae.addVectors(tn.max,Kr.max),tn.expandByPoint(Ae)):(tn.expandByPoint(Kr.min),tn.expandByPoint(Kr.max))}tn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Ae.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ae));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ae.fromBufferAttribute(a,u),l&&(fr.fromBufferAttribute(t,u),Ae.add(fr)),r=Math.max(r,i.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new ht,l[N]=new ht;const u=new ht,c=new ht,f=new ht,p=new Kt,d=new Kt,v=new Kt,g=new ht,m=new ht;function h(N,O,w){u.fromBufferAttribute(i,N),c.fromBufferAttribute(i,O),f.fromBufferAttribute(i,w),p.fromBufferAttribute(s,N),d.fromBufferAttribute(s,O),v.fromBufferAttribute(s,w),c.sub(u),f.sub(u),d.sub(p),v.sub(p);const D=1/(d.x*v.y-v.x*d.y);isFinite(D)&&(g.copy(c).multiplyScalar(v.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(c,-v.x).multiplyScalar(D),a[N].add(g),a[O].add(g),a[w].add(g),l[N].add(m),l[O].add(m),l[w].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let N=0,O=x.length;N<O;++N){const w=x[N],D=w.start,T=w.count;for(let U=D,S=D+T;U<S;U+=3)h(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const _=new ht,M=new ht,E=new ht,P=new ht;function C(N){E.fromBufferAttribute(r,N),P.copy(E);const O=a[N];_.copy(O),_.sub(E.multiplyScalar(E.dot(O))).normalize(),M.crossVectors(P,O);const D=M.dot(l[N])<0?-1:1;o.setXYZW(N,_.x,_.y,_.z,D)}for(let N=0,O=x.length;N<O;++N){const w=x[N],D=w.start,T=w.count;for(let U=D,S=D+T;U<S;U+=3)C(t.getX(U+0)),C(t.getX(U+1)),C(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,d=i.count;p<d;p++)i.setXYZ(p,0,0,0);const r=new ht,s=new ht,o=new ht,a=new ht,l=new ht,u=new ht,c=new ht,f=new ht;if(t)for(let p=0,d=t.count;p<d;p+=3){const v=t.getX(p+0),g=t.getX(p+1),m=t.getX(p+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let p=0,d=e.count;p<d;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(p+0,c.x,c.y,c.z),i.setXYZ(p+1,c.x,c.y,c.z),i.setXYZ(p+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,l){const u=a.array,c=a.itemSize,f=a.normalized,p=new u.constructor(l.length*c);let d=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*c;for(let h=0;h<c;h++)p[v++]=u[d++]}return new Un(p,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new tr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=t(l,i);e.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const p=u[c],d=t(p,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,p=u.length;f<p;f++){const d=u[f];c.push(d.toJSON(t.data))}c.length>0&&(r[l]=c,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(e))}const s=t.morphAttributes;for(const u in s){const c=[],f=s[u];for(let p=0,d=f.length;p<d;p++)c.push(f[p].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hu=new Me,Di=new Ov,Gs=new Bl,Vu=new ht,hr=new ht,dr=new ht,pr=new ht,Do=new ht,Hs=new ht,Vs=new Kt,Ws=new Kt,Xs=new Kt,Wu=new ht,Xu=new ht,qu=new ht,qs=new ht,js=new ht;class In extends sn{constructor(t=new tr,e=new ud){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Hs.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Do.fromBufferAttribute(f,t),o?Hs.addScaledVector(Do,c):Hs.addScaledVector(Do.sub(e),c))}e.add(Hs)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gs.copy(i.boundingSphere),Gs.applyMatrix4(s),Di.copy(t.ray).recast(t.near),!(Gs.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Gs,Vu)===null||Di.origin.distanceToSquared(Vu)>(t.far-t.near)**2))&&(Hu.copy(s).invert(),Di.copy(t.ray).applyMatrix4(Hu),!(i.boundingBox!==null&&Di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,p=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=p.length;v<g;v++){const m=p[v],h=o[m.materialIndex],x=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=x,E=_;M<E;M+=3){const P=a.getX(M),C=a.getX(M+1),N=a.getX(M+2);r=Ys(this,h,t,i,u,c,f,P,C,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=v,h=g;m<h;m+=3){const x=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);r=Ys(this,o,t,i,u,c,f,x,_,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=p.length;v<g;v++){const m=p[v],h=o[m.materialIndex],x=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=x,E=_;M<E;M+=3){const P=M,C=M+1,N=M+2;r=Ys(this,h,t,i,u,c,f,P,C,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=v,h=g;m<h;m+=3){const x=m,_=m+1,M=m+2;r=Ys(this,o,t,i,u,c,f,x,_,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function qv(n,t,e,i,r,s,o,a){let l;if(t.side===Ke?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===bi,a),l===null)return null;js.copy(a),js.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(js);return u<e.near||u>e.far?null:{distance:u,point:js.clone(),object:n}}function Ys(n,t,e,i,r,s,o,a,l,u){n.getVertexPosition(a,hr),n.getVertexPosition(l,dr),n.getVertexPosition(u,pr);const c=qv(n,t,e,i,hr,dr,pr,qs);if(c){r&&(Vs.fromBufferAttribute(r,a),Ws.fromBufferAttribute(r,l),Xs.fromBufferAttribute(r,u),c.uv=Ln.getInterpolation(qs,hr,dr,pr,Vs,Ws,Xs,new Kt)),s&&(Vs.fromBufferAttribute(s,a),Ws.fromBufferAttribute(s,l),Xs.fromBufferAttribute(s,u),c.uv1=Ln.getInterpolation(qs,hr,dr,pr,Vs,Ws,Xs,new Kt)),o&&(Wu.fromBufferAttribute(o,a),Xu.fromBufferAttribute(o,l),qu.fromBufferAttribute(o,u),c.normal=Ln.getInterpolation(qs,hr,dr,pr,Wu,Xu,qu,new ht),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new ht,materialIndex:0};Ln.getNormal(hr,dr,pr,f.normal),c.face=f}return c}class Es extends tr{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let p=0,d=0;v("z","y","x",-1,-1,i,e,t,o,s,0),v("z","y","x",1,-1,i,e,-t,o,s,1),v("x","z","y",1,1,t,i,e,r,o,2),v("x","z","y",1,-1,t,i,-e,r,o,3),v("x","y","z",1,-1,t,e,i,r,s,4),v("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Zi(u,3)),this.setAttribute("normal",new Zi(c,3)),this.setAttribute("uv",new Zi(f,2));function v(g,m,h,x,_,M,E,P,C,N,O){const w=M/C,D=E/N,T=M/2,U=E/2,S=P/2,H=C+1,J=N+1;let q=0,tt=0;const Z=new ht;for(let st=0;st<J;st++){const j=st*D-U;for(let $=0;$<H;$++){const xt=$*w-T;Z[g]=xt*x,Z[m]=j*_,Z[h]=S,u.push(Z.x,Z.y,Z.z),Z[g]=0,Z[m]=0,Z[h]=P>0?1:-1,c.push(Z.x,Z.y,Z.z),f.push($/C),f.push(1-st/N),q+=1}}for(let st=0;st<N;st++)for(let j=0;j<C;j++){const $=p+j+H*st,xt=p+j+H*(st+1),V=p+(j+1)+H*(st+1),W=p+(j+1)+H*st;l.push($,xt,W),l.push(xt,V,W),tt+=6}a.addGroup(d,tt,O),d+=tt,p+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Es(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function ze(n){const t={};for(let e=0;e<n.length;e++){const i=Fr(n[e]);for(const r in i)t[r]=i[r]}return t}function jv(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function dd(n){return n.getRenderTarget()===null?n.outputColorSpace:ne.workingColorSpace}const Yv={clone:Fr,merge:ze};var $v=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends Ba{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$v,this.fragmentShader=Zv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fr(t.uniforms),this.uniformsGroups=jv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class pd extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new ht,ju=new Kt,Yu=new Kt;class pn extends pd{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hl*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(di.x,di.y).multiplyScalar(-t/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(di.x,di.y).multiplyScalar(-t/di.z)}getViewSize(t,e){return this.getViewBounds(t,ju,Yu),e.subVectors(Yu,ju)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(po*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const mr=-90,gr=1;class Kv extends sn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(mr,gr,t,e);r.layers=this.layers,this.add(r);const s=new pn(mr,gr,t,e);s.layers=this.layers,this.add(s);const o=new pn(mr,gr,t,e);o.layers=this.layers,this.add(o);const a=new pn(mr,gr,t,e);a.layers=this.layers,this.add(a);const l=new pn(mr,gr,t,e);l.layers=this.layers,this.add(l);const u=new pn(mr,gr,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const u of e)this.remove(u);if(t===Qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ya)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,u),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,r),t.render(e,c),t.setRenderTarget(f,p,d),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class md extends qe{constructor(t,e,i,r,s,o,a,l,u,c){t=t!==void 0?t:[],e=e!==void 0?e:Ur,super(t,e,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jv extends Ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new md(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Es(5,5,5),s=new ri({name:"CubemapFromEquirect",uniforms:Fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ke,blending:xi});s.uniforms.tEquirect.value=e;const o=new In(r,s),a=e.minFilter;return e.minFilter===Wi&&(e.minFilter=$e),new Kv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const Uo=new ht,Qv=new ht,tx=new Wt;class ki{constructor(t=new ht(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Uo.subVectors(i,e).cross(Qv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Uo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||tx.getNormalMatrix(t),r=this.coplanarPoint(Uo).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Bl,$s=new ht;class gd{constructor(t=new ki,e=new ki,i=new ki,r=new ki,s=new ki,o=new ki){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Qn){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],p=r[7],d=r[8],v=r[9],g=r[10],m=r[11],h=r[12],x=r[13],_=r[14],M=r[15];if(i[0].setComponents(l-s,p-u,m-d,M-h).normalize(),i[1].setComponents(l+s,p+u,m+d,M+h).normalize(),i[2].setComponents(l+o,p+c,m+v,M+x).normalize(),i[3].setComponents(l-o,p-c,m-v,M-x).normalize(),i[4].setComponents(l-a,p-f,m-g,M-_).normalize(),e===Qn)i[5].setComponents(l+a,p+f,m+g,M+_).normalize();else if(e===ya)i[5].setComponents(a,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if($s.x=r.normal.x>0?t.max.x:t.min.x,$s.y=r.normal.y>0?t.max.y:t.min.y,$s.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint($s)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _d(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function ex(n,t){const e=t.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,p=u.usage,d=f.byteLength,v=n.createBuffer();n.bindBuffer(c,v),n.bufferData(c,f,p),u.onUploadCallback();let g;if(f instanceof Float32Array)g=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(e)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=n.SHORT;else if(f instanceof Uint32Array)g=n.UNSIGNED_INT;else if(f instanceof Int32Array)g=n.INT;else if(f instanceof Int8Array)g=n.BYTE;else if(f instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:d}}function s(u,c,f){const p=c.array,d=c._updateRange,v=c.updateRanges;if(n.bindBuffer(f,u),d.count===-1&&v.length===0&&n.bufferSubData(f,0,p),v.length!==0){for(let g=0,m=v.length;g<m;g++){const h=v[g];e?n.bufferSubData(f,h.start*p.BYTES_PER_ELEMENT,p,h.start,h.count):n.bufferSubData(f,h.start*p.BYTES_PER_ELEMENT,p.subarray(h.start,h.start+h.count))}c.clearUpdateRanges()}d.count!==-1&&(e?n.bufferSubData(f,d.offset*p.BYTES_PER_ELEMENT,p,d.offset,d.count):n.bufferSubData(f,d.offset*p.BYTES_PER_ELEMENT,p.subarray(d.offset,d.offset+d.count)),d.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const p=i.get(u);(!p||p.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:o,remove:a,update:l}}class ws extends tr{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=t/a,p=e/l,d=[],v=[],g=[],m=[];for(let h=0;h<c;h++){const x=h*p-o;for(let _=0;_<u;_++){const M=_*f-s;v.push(M,-x,0),g.push(0,0,1),m.push(_/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<a;x++){const _=x+u*h,M=x+u*(h+1),E=x+1+u*(h+1),P=x+1+u*h;d.push(_,M,P),d.push(M,E,P)}this.setIndex(d),this.setAttribute("position",new Zi(v,3)),this.setAttribute("normal",new Zi(g,3)),this.setAttribute("uv",new Zi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ws(t.width,t.height,t.widthSegments,t.heightSegments)}}var nx=`#ifdef USE_ALPHAHASH
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
#endif`,Sx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ix="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dx=`
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
#endif`,kx=`#ifdef USE_ENVMAP
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
#endif`,Bx=`#ifdef USE_FOG
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
#endif`,$x=`#ifdef USE_ENVMAP
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
vec3 nonPerturbedNormal = normal;`,Sy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,My=`#ifndef FLAT_SHADED
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ly=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Iy=`#ifdef PREMULTIPLIED_ALPHA
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
#endif`,ky=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,By=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$y=`#ifndef saturate
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
}`,S1=`#define MATCAP
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
}`,M1=`#define NORMAL
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
}`,L1=`uniform vec3 diffuse;
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
}`,I1=`#include <common>
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
}`,Vt={alphahash_fragment:nx,alphahash_pars_fragment:ix,alphamap_fragment:rx,alphamap_pars_fragment:sx,alphatest_fragment:ax,alphatest_pars_fragment:ox,aomap_fragment:lx,aomap_pars_fragment:cx,batching_pars_vertex:ux,batching_vertex:fx,begin_vertex:hx,beginnormal_vertex:dx,bsdfs:px,iridescence_fragment:mx,bumpmap_pars_fragment:gx,clipping_planes_fragment:_x,clipping_planes_pars_fragment:vx,clipping_planes_pars_vertex:xx,clipping_planes_vertex:yx,color_fragment:Sx,color_pars_fragment:Mx,color_pars_vertex:bx,color_vertex:Ex,common:wx,cube_uv_reflection_fragment:Tx,defaultnormal_vertex:Ax,displacementmap_pars_vertex:Cx,displacementmap_vertex:Rx,emissivemap_fragment:Px,emissivemap_pars_fragment:Lx,colorspace_fragment:Ix,colorspace_pars_fragment:Dx,envmap_fragment:Ux,envmap_common_pars_fragment:Nx,envmap_pars_fragment:Ox,envmap_pars_vertex:Fx,envmap_physical_pars_fragment:$x,envmap_vertex:kx,fog_vertex:Bx,fog_pars_vertex:zx,fog_fragment:Gx,fog_pars_fragment:Hx,gradientmap_pars_fragment:Vx,lightmap_fragment:Wx,lightmap_pars_fragment:Xx,lights_lambert_fragment:qx,lights_lambert_pars_fragment:jx,lights_pars_begin:Yx,lights_toon_fragment:Zx,lights_toon_pars_fragment:Kx,lights_phong_fragment:Jx,lights_phong_pars_fragment:Qx,lights_physical_fragment:ty,lights_physical_pars_fragment:ey,lights_fragment_begin:ny,lights_fragment_maps:iy,lights_fragment_end:ry,logdepthbuf_fragment:sy,logdepthbuf_pars_fragment:ay,logdepthbuf_pars_vertex:oy,logdepthbuf_vertex:ly,map_fragment:cy,map_pars_fragment:uy,map_particle_fragment:fy,map_particle_pars_fragment:hy,metalnessmap_fragment:dy,metalnessmap_pars_fragment:py,morphinstance_vertex:my,morphcolor_vertex:gy,morphnormal_vertex:_y,morphtarget_pars_vertex:vy,morphtarget_vertex:xy,normal_fragment_begin:yy,normal_fragment_maps:Sy,normal_pars_fragment:My,normal_pars_vertex:by,normal_vertex:Ey,normalmap_pars_fragment:wy,clearcoat_normal_fragment_begin:Ty,clearcoat_normal_fragment_maps:Ay,clearcoat_pars_fragment:Cy,iridescence_pars_fragment:Ry,opaque_fragment:Py,packing:Ly,premultiplied_alpha_fragment:Iy,project_vertex:Dy,dithering_fragment:Uy,dithering_pars_fragment:Ny,roughnessmap_fragment:Oy,roughnessmap_pars_fragment:Fy,shadowmap_pars_fragment:ky,shadowmap_pars_vertex:By,shadowmap_vertex:zy,shadowmask_pars_fragment:Gy,skinbase_vertex:Hy,skinning_pars_vertex:Vy,skinning_vertex:Wy,skinnormal_vertex:Xy,specularmap_fragment:qy,specularmap_pars_fragment:jy,tonemapping_fragment:Yy,tonemapping_pars_fragment:$y,transmission_fragment:Zy,transmission_pars_fragment:Ky,uv_pars_fragment:Jy,uv_pars_vertex:Qy,uv_vertex:t1,worldpos_vertex:e1,background_vert:n1,background_frag:i1,backgroundCube_vert:r1,backgroundCube_frag:s1,cube_vert:a1,cube_frag:o1,depth_vert:l1,depth_frag:c1,distanceRGBA_vert:u1,distanceRGBA_frag:f1,equirect_vert:h1,equirect_frag:d1,linedashed_vert:p1,linedashed_frag:m1,meshbasic_vert:g1,meshbasic_frag:_1,meshlambert_vert:v1,meshlambert_frag:x1,meshmatcap_vert:y1,meshmatcap_frag:S1,meshnormal_vert:M1,meshnormal_frag:b1,meshphong_vert:E1,meshphong_frag:w1,meshphysical_vert:T1,meshphysical_frag:A1,meshtoon_vert:C1,meshtoon_frag:R1,points_vert:P1,points_frag:L1,shadow_vert:I1,shadow_frag:D1,sprite_vert:U1,sprite_frag:N1},wt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Rn={basic:{uniforms:ze([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:ze([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new re(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:ze([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:ze([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:ze([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new re(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:ze([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:ze([wt.points,wt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:ze([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:ze([wt.common,wt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:ze([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:ze([wt.sprite,wt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:ze([wt.common,wt.displacementmap,{referencePosition:{value:new ht},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:ze([wt.lights,wt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Rn.physical={uniforms:ze([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Zs={r:0,b:0,g:0},Ni=new ii,O1=new Me;function F1(n,t,e,i,r,s,o){const a=new re(0);let l=s===!0?0:1,u,c,f=null,p=0,d=null;function v(m,h){let x=!1,_=h.isScene===!0?h.background:null;_&&_.isTexture&&(_=(h.backgroundBlurriness>0?e:t).get(_)),_===null?g(a,l):_&&_.isColor&&(g(_,1),x=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Fa)?(c===void 0&&(c=new In(new Es(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:Fr(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Ni.copy(h.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(O1.makeRotationFromEuler(Ni)),c.material.toneMapped=ne.getTransfer(_.colorSpace)!==ue,(f!==_||p!==_.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=_,p=_.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new In(new ws(2,2),new ri({name:"BackgroundMaterial",uniforms:Fr(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=ne.getTransfer(_.colorSpace)!==ue,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||p!==_.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=_,p=_.version,d=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function g(m,h){m.getRGB(Zs,dd(n)),i.buffers.color.setClear(Zs.r,Zs.g,Zs.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:v}}function k1(n,t,e,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function f(S,H,J,q,tt){let Z=!1;if(o){const st=g(q,J,H);u!==st&&(u=st,d(u.object)),Z=h(S,q,J,tt),Z&&x(S,q,J,tt)}else{const st=H.wireframe===!0;(u.geometry!==q.id||u.program!==J.id||u.wireframe!==st)&&(u.geometry=q.id,u.program=J.id,u.wireframe=st,Z=!0)}tt!==null&&e.update(tt,n.ELEMENT_ARRAY_BUFFER),(Z||c)&&(c=!1,N(S,H,J,q),tt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(tt).buffer))}function p(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function d(S){return i.isWebGL2?n.bindVertexArray(S):s.bindVertexArrayOES(S)}function v(S){return i.isWebGL2?n.deleteVertexArray(S):s.deleteVertexArrayOES(S)}function g(S,H,J){const q=J.wireframe===!0;let tt=a[S.id];tt===void 0&&(tt={},a[S.id]=tt);let Z=tt[H.id];Z===void 0&&(Z={},tt[H.id]=Z);let st=Z[q];return st===void 0&&(st=m(p()),Z[q]=st),st}function m(S){const H=[],J=[],q=[];for(let tt=0;tt<r;tt++)H[tt]=0,J[tt]=0,q[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:J,attributeDivisors:q,object:S,attributes:{},index:null}}function h(S,H,J,q){const tt=u.attributes,Z=H.attributes;let st=0;const j=J.getAttributes();for(const $ in j)if(j[$].location>=0){const V=tt[$];let W=Z[$];if(W===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(W=S.instanceColor)),V===void 0||V.attribute!==W||W&&V.data!==W.data)return!0;st++}return u.attributesNum!==st||u.index!==q}function x(S,H,J,q){const tt={},Z=H.attributes;let st=0;const j=J.getAttributes();for(const $ in j)if(j[$].location>=0){let V=Z[$];V===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(V=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(V=S.instanceColor));const W={};W.attribute=V,V&&V.data&&(W.data=V.data),tt[$]=W,st++}u.attributes=tt,u.attributesNum=st,u.index=q}function _(){const S=u.newAttributes;for(let H=0,J=S.length;H<J;H++)S[H]=0}function M(S){E(S,0)}function E(S,H){const J=u.newAttributes,q=u.enabledAttributes,tt=u.attributeDivisors;J[S]=1,q[S]===0&&(n.enableVertexAttribArray(S),q[S]=1),tt[S]!==H&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](S,H),tt[S]=H)}function P(){const S=u.newAttributes,H=u.enabledAttributes;for(let J=0,q=H.length;J<q;J++)H[J]!==S[J]&&(n.disableVertexAttribArray(J),H[J]=0)}function C(S,H,J,q,tt,Z,st){st===!0?n.vertexAttribIPointer(S,H,J,tt,Z):n.vertexAttribPointer(S,H,J,q,tt,Z)}function N(S,H,J,q){if(i.isWebGL2===!1&&(S.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const tt=q.attributes,Z=J.getAttributes(),st=H.defaultAttributeValues;for(const j in Z){const $=Z[j];if($.location>=0){let xt=tt[j];if(xt===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(xt=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(xt=S.instanceColor)),xt!==void 0){const V=xt.normalized,W=xt.itemSize,pt=e.get(xt);if(pt===void 0)continue;const nt=pt.buffer,at=pt.type,rt=pt.bytesPerElement,mt=i.isWebGL2===!0&&(at===n.INT||at===n.UNSIGNED_INT||xt.gpuType===Zh);if(xt.isInterleavedBufferAttribute){const vt=xt.data,R=vt.stride,X=xt.offset;if(vt.isInstancedInterleavedBuffer){for(let y=0;y<$.locationSize;y++)E($.location+y,vt.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let y=0;y<$.locationSize;y++)M($.location+y);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let y=0;y<$.locationSize;y++)C($.location+y,W/$.locationSize,at,V,R*rt,(X+W/$.locationSize*y)*rt,mt)}else{if(xt.isInstancedBufferAttribute){for(let vt=0;vt<$.locationSize;vt++)E($.location+vt,xt.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let vt=0;vt<$.locationSize;vt++)M($.location+vt);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let vt=0;vt<$.locationSize;vt++)C($.location+vt,W/$.locationSize,at,V,W*rt,W/$.locationSize*vt*rt,mt)}}else if(st!==void 0){const V=st[j];if(V!==void 0)switch(V.length){case 2:n.vertexAttrib2fv($.location,V);break;case 3:n.vertexAttrib3fv($.location,V);break;case 4:n.vertexAttrib4fv($.location,V);break;default:n.vertexAttrib1fv($.location,V)}}}}P()}function O(){T();for(const S in a){const H=a[S];for(const J in H){const q=H[J];for(const tt in q)v(q[tt].object),delete q[tt];delete H[J]}delete a[S]}}function w(S){if(a[S.id]===void 0)return;const H=a[S.id];for(const J in H){const q=H[J];for(const tt in q)v(q[tt].object),delete q[tt];delete H[J]}delete a[S.id]}function D(S){for(const H in a){const J=a[H];if(J[S.id]===void 0)continue;const q=J[S.id];for(const tt in q)v(q[tt].object),delete q[tt];delete J[S.id]}}function T(){U(),c=!0,u!==l&&(u=l,d(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:T,resetDefaultState:U,dispose:O,releaseStatesOfGeometry:w,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:M,disableUnusedAttributes:P}}function B1(n,t,e,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,f){n.drawArrays(s,c,f),e.update(f,s,1)}function l(c,f,p){if(p===0)return;let d,v;if(r)d=n,v="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[v](s,c,f,p),e.update(f,s,p)}function u(c,f,p){if(p===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<p;v++)this.render(c[v],f[v]);else{d.multiDrawArraysWEBGL(s,c,0,f,0,p);let v=0;for(let g=0;g<p;g++)v+=f[g];e.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function z1(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||t.has("WEBGL_draw_buffers"),c=e.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,M=o||t.has("OES_texture_float"),E=_&&M,P=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:p,maxTextureSize:d,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:E,maxSamples:P}}function G1(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new ki,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const d=f.length!==0||p||i!==0||r;return r=p,i=f.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){e=c(f,p,0)},this.setState=function(f,p,d){const v=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||v===null||v.length===0||s&&!m)s?c(null):u();else{const x=s?0:i,_=x*4;let M=h.clippingState||null;l.value=M,M=c(v,p,_,d);for(let E=0;E!==_;++E)M[E]=e[E];h.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(f,p,d,v){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const h=d+g*4,x=p.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,M=d;_!==g;++_,M+=4)o.copy(f[_]).applyMatrix4(x,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function H1(n){let t=new WeakMap;function e(o,a){return a===ol?o.mapping=Ur:a===ll&&(o.mapping=Nr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ol||a===ll)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Jv(l.height);return u.fromEquirectangularTexture(n,o),t.set(o,u),o.addEventListener("dispose",r),e(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class vd extends pd{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Mr=4,$u=[.125,.215,.35,.446,.526,.582],Hi=20,No=new vd,Zu=new re;let Oo=null,Fo=0,ko=0;const Bi=(1+Math.sqrt(5))/2,_r=1/Bi,Ku=[new ht(1,1,1),new ht(-1,1,1),new ht(1,1,-1),new ht(-1,1,-1),new ht(0,Bi,_r),new ht(0,Bi,-_r),new ht(_r,0,Bi),new ht(-_r,0,Bi),new ht(Bi,_r,0),new ht(-Bi,_r,0)];class Ju{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Oo=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oo,Fo,ko),t.scissorTest=!1,Ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ur||t.mapping===Nr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oo=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:_s,format:gn,colorSpace:Ei,depthBuffer:!1},r=Qu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qu(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=V1(s)),this._blurMaterial=W1(s,t,e)}return r}_compileMaterial(t){const e=new In(this._lodPlanes[0],t);this._renderer.compile(e,No)}_sceneToCubeUV(t,e,i,r){const a=new pn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,p=c.toneMapping;c.getClearColor(Zu),c.toneMapping=yi,c.autoClear=!1;const d=new ud({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),v=new In(new Es,d);let g=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,g=!0):(d.color.copy(Zu),g=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):x===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const _=this._cubeSize;Ks(r,x*_,h>2?_:0,_,_),c.setRenderTarget(r),g&&c.render(v,a),c.render(t,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=p,c.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Ur||t.mapping===Nr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new In(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ks(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,No)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ku[(r-1)%Ku.length];this._blur(t,r-1,r,s,o)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new In(this._lodPlanes[r],u),p=u.uniforms,d=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Hi-1),g=s/v,m=isFinite(s)?1+Math.floor(c*g):Hi;m>Hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);const h=[];let x=0;for(let C=0;C<Hi;++C){const N=C/g,O=Math.exp(-N*N/2);h.push(O),C===0?x+=O:C<m&&(x+=2*O)}for(let C=0;C<h.length;C++)h[C]=h[C]/x;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=h,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:_}=this;p.dTheta.value=v,p.mipInt.value=_-i;const M=this._sizeLods[r],E=3*M*(r>_-Mr?r-_+Mr:0),P=4*(this._cubeSize-M);Ks(e,E,P,3*M,2*M),l.setRenderTarget(e),l.render(f,No)}}function V1(n){const t=[],e=[],i=[];let r=n;const s=n-Mr+1+$u.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Mr?l=$u[o-n+Mr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,p=[c,c,f,c,f,f,c,c,f,f,c,f],d=6,v=6,g=3,m=2,h=1,x=new Float32Array(g*v*d),_=new Float32Array(m*v*d),M=new Float32Array(h*v*d);for(let P=0;P<d;P++){const C=P%3*2/3-1,N=P>2?0:-1,O=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];x.set(O,g*v*P),_.set(p,m*v*P);const w=[P,P,P,P,P,P];M.set(w,h*v*P)}const E=new tr;E.setAttribute("position",new Un(x,g)),E.setAttribute("uv",new Un(_,m)),E.setAttribute("faceIndex",new Un(M,h)),t.push(E),r>Mr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Qu(n,t,e){const i=new Ki(n,t,e);return i.texture.mapping=Fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ks(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function W1(n,t,e){const i=new Float32Array(Hi),r=new ht(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zl(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function tf(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function ef(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

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
	`}function X1(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===ol||l===ll,c=l===Ur||l===Nr;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=t.get(a);return e===null&&(e=new Ju(n)),f=u?e.fromEquirectangular(a,f):e.fromCubemap(a,f),t.set(a,f),f.texture}else{if(t.has(a))return t.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){e===null&&(e=new Ju(n));const p=u?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function q1(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function j1(n,t,e,i){const r={},s=new WeakMap;function o(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const v in p.attributes)t.remove(p.attributes[v]);for(const v in p.morphAttributes){const g=p.morphAttributes[v];for(let m=0,h=g.length;m<h;m++)t.remove(g[m])}p.removeEventListener("dispose",o),delete r[p.id];const d=s.get(p);d&&(t.remove(d),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(f,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,e.memory.geometries++),p}function l(f){const p=f.attributes;for(const v in p)t.update(p[v],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const v in d){const g=d[v];for(let m=0,h=g.length;m<h;m++)t.update(g[m],n.ARRAY_BUFFER)}}function u(f){const p=[],d=f.index,v=f.attributes.position;let g=0;if(d!==null){const x=d.array;g=d.version;for(let _=0,M=x.length;_<M;_+=3){const E=x[_+0],P=x[_+1],C=x[_+2];p.push(E,P,P,C,C,E)}}else if(v!==void 0){const x=v.array;g=v.version;for(let _=0,M=x.length/3-1;_<M;_+=3){const E=_+0,P=_+1,C=_+2;p.push(E,P,P,C,C,E)}}else return;const m=new(rd(p)?hd:fd)(p,1);m.version=g;const h=s.get(f);h&&t.remove(h),s.set(f,m)}function c(f){const p=s.get(f);if(p){const d=f.index;d!==null&&p.version<d.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function Y1(n,t,e,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function c(d,v){n.drawElements(s,v,a,d*l),e.update(v,s,1)}function f(d,v,g){if(g===0)return;let m,h;if(r)m=n,h="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,v,a,d*l,g),e.update(v,s,g)}function p(d,v,g){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<g;h++)this.render(d[h]/l,v[h]);else{m.multiDrawElementsWEBGL(s,v,0,a,d,0,g);let h=0;for(let x=0;x<g;x++)h+=v[x];e.update(h,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=p}function $1(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Z1(n,t){return n[0]-t[0]}function K1(n,t){return Math.abs(t[1])-Math.abs(n[1])}function J1(n,t,e){const i={},r=new Float32Array(8),s=new WeakMap,o=new Pe,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const p=u.morphTargetInfluences;if(t.isWebGL2===!0){const v=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=v!==void 0?v.length:0;let m=s.get(c);if(m===void 0||m.count!==g){let U=function(){D.dispose(),s.delete(c),c.removeEventListener("dispose",U)};var d=U;m!==void 0&&m.texture.dispose();const h=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,_=c.morphAttributes.color!==void 0,M=c.morphAttributes.position||[],E=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let C=0;h===!0&&(C=1),x===!0&&(C=2),_===!0&&(C=3);let N=c.attributes.position.count*C,O=1;N>t.maxTextureSize&&(O=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const w=new Float32Array(N*O*4*g),D=new od(w,N,O,g);D.type=Kn,D.needsUpdate=!0;const T=C*4;for(let S=0;S<g;S++){const H=M[S],J=E[S],q=P[S],tt=N*O*4*S;for(let Z=0;Z<H.count;Z++){const st=Z*T;h===!0&&(o.fromBufferAttribute(H,Z),w[tt+st+0]=o.x,w[tt+st+1]=o.y,w[tt+st+2]=o.z,w[tt+st+3]=0),x===!0&&(o.fromBufferAttribute(J,Z),w[tt+st+4]=o.x,w[tt+st+5]=o.y,w[tt+st+6]=o.z,w[tt+st+7]=0),_===!0&&(o.fromBufferAttribute(q,Z),w[tt+st+8]=o.x,w[tt+st+9]=o.y,w[tt+st+10]=o.z,w[tt+st+11]=q.itemSize===4?o.w:1)}}m={count:g,texture:D,size:new Kt(N,O)},s.set(c,m),c.addEventListener("dispose",U)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",u.morphTexture,e);else{let h=0;for(let _=0;_<p.length;_++)h+=p[_];const x=c.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",p)}f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,e),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const v=p===void 0?0:p.length;let g=i[c.id];if(g===void 0||g.length!==v){g=[];for(let M=0;M<v;M++)g[M]=[M,0];i[c.id]=g}for(let M=0;M<v;M++){const E=g[M];E[0]=M,E[1]=p[M]}g.sort(K1);for(let M=0;M<8;M++)M<v&&g[M][1]?(a[M][0]=g[M][0],a[M][1]=g[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Z1);const m=c.morphAttributes.position,h=c.morphAttributes.normal;let x=0;for(let M=0;M<8;M++){const E=a[M],P=E[0],C=E[1];P!==Number.MAX_SAFE_INTEGER&&C?(m&&c.getAttribute("morphTarget"+M)!==m[P]&&c.setAttribute("morphTarget"+M,m[P]),h&&c.getAttribute("morphNormal"+M)!==h[P]&&c.setAttribute("morphNormal"+M,h[P]),r[M]=C,x+=C):(m&&c.hasAttribute("morphTarget"+M)===!0&&c.deleteAttribute("morphTarget"+M),h&&c.hasAttribute("morphNormal"+M)===!0&&c.deleteAttribute("morphNormal"+M),r[M]=0)}const _=c.morphTargetsRelative?1:1-x;f.getUniforms().setValue(n,"morphTargetBaseInfluence",_),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Q1(n,t,e,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=t.get(l,c);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:o}}class xd extends qe{constructor(t,e,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:$i,c!==$i&&c!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===$i&&(i=_i),i===void 0&&c===Or&&(i=Yi),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:He,this.minFilter=l!==void 0?l:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const yd=new qe,Sd=new xd(1,1);Sd.compareFunction=id;const Md=new od,bd=new Uv,Ed=new md,nf=[],rf=[],sf=new Float32Array(16),af=new Float32Array(9),of=new Float32Array(4);function Br(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=nf[r];if(s===void 0&&(s=new Float32Array(r),nf[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Ee(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function we(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function za(n,t){let e=rf[t];e===void 0&&(e=new Int32Array(t),rf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function tS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function eS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2fv(this.addr,t),we(e,t)}}function nS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;n.uniform3fv(this.addr,t),we(e,t)}}function iS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4fv(this.addr,t),we(e,t)}}function rS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,i))return;of.set(i),n.uniformMatrix2fv(this.addr,!1,of),we(e,i)}}function sS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,i))return;af.set(i),n.uniformMatrix3fv(this.addr,!1,af),we(e,i)}}function aS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,i))return;sf.set(i),n.uniformMatrix4fv(this.addr,!1,sf),we(e,i)}}function oS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function lS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2iv(this.addr,t),we(e,t)}}function cS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3iv(this.addr,t),we(e,t)}}function uS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4iv(this.addr,t),we(e,t)}}function fS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function hS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2uiv(this.addr,t),we(e,t)}}function dS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3uiv(this.addr,t),we(e,t)}}function pS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4uiv(this.addr,t),we(e,t)}}function mS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Sd:yd;e.setTexture2D(t||s,r)}function gS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||bd,r)}function _S(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Ed,r)}function vS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Md,r)}function xS(n){switch(n){case 5126:return tS;case 35664:return eS;case 35665:return nS;case 35666:return iS;case 35674:return rS;case 35675:return sS;case 35676:return aS;case 5124:case 35670:return oS;case 35667:case 35671:return lS;case 35668:case 35672:return cS;case 35669:case 35673:return uS;case 5125:return fS;case 36294:return hS;case 36295:return dS;case 36296:return pS;case 35678:case 36198:case 36298:case 36306:case 35682:return mS;case 35679:case 36299:case 36307:return gS;case 35680:case 36300:case 36308:case 36293:return _S;case 36289:case 36303:case 36311:case 36292:return vS}}function yS(n,t){n.uniform1fv(this.addr,t)}function SS(n,t){const e=Br(t,this.size,2);n.uniform2fv(this.addr,e)}function MS(n,t){const e=Br(t,this.size,3);n.uniform3fv(this.addr,e)}function bS(n,t){const e=Br(t,this.size,4);n.uniform4fv(this.addr,e)}function ES(n,t){const e=Br(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function wS(n,t){const e=Br(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function TS(n,t){const e=Br(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function AS(n,t){n.uniform1iv(this.addr,t)}function CS(n,t){n.uniform2iv(this.addr,t)}function RS(n,t){n.uniform3iv(this.addr,t)}function PS(n,t){n.uniform4iv(this.addr,t)}function LS(n,t){n.uniform1uiv(this.addr,t)}function IS(n,t){n.uniform2uiv(this.addr,t)}function DS(n,t){n.uniform3uiv(this.addr,t)}function US(n,t){n.uniform4uiv(this.addr,t)}function NS(n,t,e){const i=this.cache,r=t.length,s=za(e,r);Ee(i,s)||(n.uniform1iv(this.addr,s),we(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||yd,s[o])}function OS(n,t,e){const i=this.cache,r=t.length,s=za(e,r);Ee(i,s)||(n.uniform1iv(this.addr,s),we(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||bd,s[o])}function FS(n,t,e){const i=this.cache,r=t.length,s=za(e,r);Ee(i,s)||(n.uniform1iv(this.addr,s),we(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Ed,s[o])}function kS(n,t,e){const i=this.cache,r=t.length,s=za(e,r);Ee(i,s)||(n.uniform1iv(this.addr,s),we(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Md,s[o])}function BS(n){switch(n){case 5126:return yS;case 35664:return SS;case 35665:return MS;case 35666:return bS;case 35674:return ES;case 35675:return wS;case 35676:return TS;case 5124:case 35670:return AS;case 35667:case 35671:return CS;case 35668:case 35672:return RS;case 35669:case 35673:return PS;case 5125:return LS;case 36294:return IS;case 36295:return DS;case 36296:return US;case 35678:case 36198:case 36298:case 36306:case 35682:return NS;case 35679:case 36299:case 36307:return OS;case 35680:case 36300:case 36308:case 36293:return FS;case 36289:case 36303:case 36311:case 36292:return kS}}class zS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=xS(e.type)}}class GS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=BS(e.type)}}class HS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Bo=/(\w+)(\])?(\[|\.)?/g;function lf(n,t){n.seq.push(t),n.map[t.id]=t}function VS(n,t,e){const i=n.name,r=i.length;for(Bo.lastIndex=0;;){const s=Bo.exec(i),o=Bo.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){lf(e,u===void 0?new zS(a,n,t):new GS(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new HS(a),lf(e,f)),e=f}}}class aa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);VS(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function cf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const WS=37297;let XS=0;function qS(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function jS(n){const t=ne.getPrimaries(ne.workingColorSpace),e=ne.getPrimaries(n);let i;switch(t===e?i="":t===xa&&e===va?i="LinearDisplayP3ToLinearSRGB":t===va&&e===xa&&(i="LinearSRGBToLinearDisplayP3"),n){case Ei:case ka:return[i,"LinearTransferOETF"];case Tn:case kl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function uf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+qS(n.getShaderSource(t),o)}else return r}function YS(n,t){const e=jS(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function $S(n,t){let e;switch(t){case ev:e="Linear";break;case nv:e="Reinhard";break;case iv:e="OptimizedCineon";break;case rv:e="ACESFilmic";break;case av:e="AgX";break;case ov:e="Neutral";break;case sv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function ZS(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(br).join(`
`)}function KS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function JS(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function QS(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function br(n){return n!==""}function ff(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tM=/^[ \t]*#include +<([\w\d./]+)>/gm;function pl(n){return n.replace(tM,nM)}const eM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function nM(n,t){let e=Vt[t];if(e===void 0){const i=eM.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return pl(e)}const iM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function df(n){return n.replace(iM,rM)}function rM(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function sM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===jh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===R0?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function aM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ur:case Nr:t="ENVMAP_TYPE_CUBE";break;case Fa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function oM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Nr:t="ENVMAP_MODE_REFRACTION";break}return t}function lM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Yh:t="ENVMAP_BLENDING_MULTIPLY";break;case Q0:t="ENVMAP_BLENDING_MIX";break;case tv:t="ENVMAP_BLENDING_ADD";break}return t}function cM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function uM(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=sM(e),u=aM(e),c=oM(e),f=lM(e),p=cM(e),d=e.isWebGL2?"":ZS(e),v=KS(e),g=JS(s),m=r.createProgram();let h,x,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(br).join(`
`),h.length>0&&(h+=`
`),x=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(br).join(`
`),x.length>0&&(x+=`
`)):(h=[pf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),x=[d,pf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yi?"#define TONE_MAPPING":"",e.toneMapping!==yi?Vt.tonemapping_pars_fragment:"",e.toneMapping!==yi?$S("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,YS("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(br).join(`
`)),o=pl(o),o=ff(o,e),o=hf(o,e),a=pl(a),a=ff(a,e),a=hf(a,e),o=df(o),a=df(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const M=_+h+o,E=_+x+a,P=cf(r,r.VERTEX_SHADER,M),C=cf(r,r.FRAGMENT_SHADER,E);r.attachShader(m,P),r.attachShader(m,C),e.index0AttributeName!==void 0?r.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function N(T){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(m).trim(),S=r.getShaderInfoLog(P).trim(),H=r.getShaderInfoLog(C).trim();let J=!0,q=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,P,C);else{const tt=uf(r,P,"vertex"),Z=uf(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+U+`
`+tt+`
`+Z)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(S===""||H==="")&&(q=!1);q&&(T.diagnostics={runnable:J,programLog:U,vertexShader:{log:S,prefix:h},fragmentShader:{log:H,prefix:x}})}r.deleteShader(P),r.deleteShader(C),O=new aa(r,m),w=QS(r,m)}let O;this.getUniforms=function(){return O===void 0&&N(this),O};let w;this.getAttributes=function(){return w===void 0&&N(this),w};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(m,WS)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=XS++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=P,this.fragmentShader=C,this}let fM=0;class hM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new dM(t),e.set(t,i)),i}}class dM{constructor(t){this.id=fM++,this.code=t,this.usedTimes=0}}function pM(n,t,e,i,r,s,o){const a=new ld,l=new hM,u=new Set,c=[],f=r.isWebGL2,p=r.logarithmicDepthBuffer,d=r.vertexTextures;let v=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(w){return u.add(w),w===0?"uv":`uv${w}`}function h(w,D,T,U,S){const H=U.fog,J=S.geometry,q=w.isMeshStandardMaterial?U.environment:null,tt=(w.isMeshStandardMaterial?e:t).get(w.envMap||q),Z=tt&&tt.mapping===Fa?tt.image.height:null,st=g[w.type];w.precision!==null&&(v=r.getMaxPrecision(w.precision),v!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",v,"instead."));const j=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,$=j!==void 0?j.length:0;let xt=0;J.morphAttributes.position!==void 0&&(xt=1),J.morphAttributes.normal!==void 0&&(xt=2),J.morphAttributes.color!==void 0&&(xt=3);let V,W,pt,nt;if(st){const oe=Rn[st];V=oe.vertexShader,W=oe.fragmentShader}else V=w.vertexShader,W=w.fragmentShader,l.update(w),pt=l.getVertexShaderID(w),nt=l.getFragmentShaderID(w);const at=n.getRenderTarget(),rt=S.isInstancedMesh===!0,mt=S.isBatchedMesh===!0,vt=!!w.map,R=!!w.matcap,X=!!tt,y=!!w.aoMap,z=!!w.lightMap,B=!!w.bumpMap,L=!!w.normalMap,I=!!w.displacementMap,F=!!w.emissiveMap,Q=!!w.metalnessMap,A=!!w.roughnessMap,b=w.anisotropy>0,G=w.clearcoat>0,Y=w.iridescence>0,K=w.sheen>0,it=w.transmission>0,Mt=b&&!!w.anisotropyMap,_t=G&&!!w.clearcoatMap,gt=G&&!!w.clearcoatNormalMap,St=G&&!!w.clearcoatRoughnessMap,Pt=Y&&!!w.iridescenceMap,yt=Y&&!!w.iridescenceThicknessMap,Ut=K&&!!w.sheenColorMap,Ot=K&&!!w.sheenRoughnessMap,Ct=!!w.specularMap,Tt=!!w.specularColorMap,Lt=!!w.specularIntensityMap,Xt=it&&!!w.transmissionMap,Bt=it&&!!w.thicknessMap,ae=!!w.gradientMap,et=!!w.alphaMap,Et=w.alphaTest>0,ct=!!w.alphaHash,bt=!!w.extensions;let At=yi;w.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(At=n.toneMapping);const Yt={isWebGL2:f,shaderID:st,shaderType:w.type,shaderName:w.name,vertexShader:V,fragmentShader:W,defines:w.defines,customVertexShaderID:pt,customFragmentShaderID:nt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:v,batching:mt,instancing:rt,instancingColor:rt&&S.instanceColor!==null,instancingMorph:rt&&S.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?n.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Ei,alphaToCoverage:!!w.alphaToCoverage,map:vt,matcap:R,envMap:X,envMapMode:X&&tt.mapping,envMapCubeUVHeight:Z,aoMap:y,lightMap:z,bumpMap:B,normalMap:L,displacementMap:d&&I,emissiveMap:F,normalMapObjectSpace:L&&w.normalMapType===xv,normalMapTangentSpace:L&&w.normalMapType===vv,metalnessMap:Q,roughnessMap:A,anisotropy:b,anisotropyMap:Mt,clearcoat:G,clearcoatMap:_t,clearcoatNormalMap:gt,clearcoatRoughnessMap:St,iridescence:Y,iridescenceMap:Pt,iridescenceThicknessMap:yt,sheen:K,sheenColorMap:Ut,sheenRoughnessMap:Ot,specularMap:Ct,specularColorMap:Tt,specularIntensityMap:Lt,transmission:it,transmissionMap:Xt,thicknessMap:Bt,gradientMap:ae,opaque:w.transparent===!1&&w.blending===Cr&&w.alphaToCoverage===!1,alphaMap:et,alphaTest:Et,alphaHash:ct,combine:w.combine,mapUv:vt&&m(w.map.channel),aoMapUv:y&&m(w.aoMap.channel),lightMapUv:z&&m(w.lightMap.channel),bumpMapUv:B&&m(w.bumpMap.channel),normalMapUv:L&&m(w.normalMap.channel),displacementMapUv:I&&m(w.displacementMap.channel),emissiveMapUv:F&&m(w.emissiveMap.channel),metalnessMapUv:Q&&m(w.metalnessMap.channel),roughnessMapUv:A&&m(w.roughnessMap.channel),anisotropyMapUv:Mt&&m(w.anisotropyMap.channel),clearcoatMapUv:_t&&m(w.clearcoatMap.channel),clearcoatNormalMapUv:gt&&m(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&m(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&m(w.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&m(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&m(w.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&m(w.sheenRoughnessMap.channel),specularMapUv:Ct&&m(w.specularMap.channel),specularColorMapUv:Tt&&m(w.specularColorMap.channel),specularIntensityMapUv:Lt&&m(w.specularIntensityMap.channel),transmissionMapUv:Xt&&m(w.transmissionMap.channel),thicknessMapUv:Bt&&m(w.thicknessMap.channel),alphaMapUv:et&&m(w.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(L||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!J.attributes.uv&&(vt||et),fog:!!H,useFog:w.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:S.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:xt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:At,useLegacyLights:n._useLegacyLights,decodeVideoTexture:vt&&w.map.isVideoTexture===!0&&ne.getTransfer(w.map.colorSpace)===ue,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Zn,flipSided:w.side===Ke,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:bt&&w.extensions.derivatives===!0,extensionFragDepth:bt&&w.extensions.fragDepth===!0,extensionDrawBuffers:bt&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:bt&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:bt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:bt&&w.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Yt.vertexUv1s=u.has(1),Yt.vertexUv2s=u.has(2),Yt.vertexUv3s=u.has(3),u.clear(),Yt}function x(w){const D=[];if(w.shaderID?D.push(w.shaderID):(D.push(w.customVertexShaderID),D.push(w.customFragmentShaderID)),w.defines!==void 0)for(const T in w.defines)D.push(T),D.push(w.defines[T]);return w.isRawShaderMaterial===!1&&(_(D,w),M(D,w),D.push(n.outputColorSpace)),D.push(w.customProgramCacheKey),D.join()}function _(w,D){w.push(D.precision),w.push(D.outputColorSpace),w.push(D.envMapMode),w.push(D.envMapCubeUVHeight),w.push(D.mapUv),w.push(D.alphaMapUv),w.push(D.lightMapUv),w.push(D.aoMapUv),w.push(D.bumpMapUv),w.push(D.normalMapUv),w.push(D.displacementMapUv),w.push(D.emissiveMapUv),w.push(D.metalnessMapUv),w.push(D.roughnessMapUv),w.push(D.anisotropyMapUv),w.push(D.clearcoatMapUv),w.push(D.clearcoatNormalMapUv),w.push(D.clearcoatRoughnessMapUv),w.push(D.iridescenceMapUv),w.push(D.iridescenceThicknessMapUv),w.push(D.sheenColorMapUv),w.push(D.sheenRoughnessMapUv),w.push(D.specularMapUv),w.push(D.specularColorMapUv),w.push(D.specularIntensityMapUv),w.push(D.transmissionMapUv),w.push(D.thicknessMapUv),w.push(D.combine),w.push(D.fogExp2),w.push(D.sizeAttenuation),w.push(D.morphTargetsCount),w.push(D.morphAttributeCount),w.push(D.numDirLights),w.push(D.numPointLights),w.push(D.numSpotLights),w.push(D.numSpotLightMaps),w.push(D.numHemiLights),w.push(D.numRectAreaLights),w.push(D.numDirLightShadows),w.push(D.numPointLightShadows),w.push(D.numSpotLightShadows),w.push(D.numSpotLightShadowsWithMaps),w.push(D.numLightProbes),w.push(D.shadowMapType),w.push(D.toneMapping),w.push(D.numClippingPlanes),w.push(D.numClipIntersection),w.push(D.depthPacking)}function M(w,D){a.disableAll(),D.isWebGL2&&a.enable(0),D.supportsVertexTextures&&a.enable(1),D.instancing&&a.enable(2),D.instancingColor&&a.enable(3),D.instancingMorph&&a.enable(4),D.matcap&&a.enable(5),D.envMap&&a.enable(6),D.normalMapObjectSpace&&a.enable(7),D.normalMapTangentSpace&&a.enable(8),D.clearcoat&&a.enable(9),D.iridescence&&a.enable(10),D.alphaTest&&a.enable(11),D.vertexColors&&a.enable(12),D.vertexAlphas&&a.enable(13),D.vertexUv1s&&a.enable(14),D.vertexUv2s&&a.enable(15),D.vertexUv3s&&a.enable(16),D.vertexTangents&&a.enable(17),D.anisotropy&&a.enable(18),D.alphaHash&&a.enable(19),D.batching&&a.enable(20),w.push(a.mask),a.disableAll(),D.fog&&a.enable(0),D.useFog&&a.enable(1),D.flatShading&&a.enable(2),D.logarithmicDepthBuffer&&a.enable(3),D.skinning&&a.enable(4),D.morphTargets&&a.enable(5),D.morphNormals&&a.enable(6),D.morphColors&&a.enable(7),D.premultipliedAlpha&&a.enable(8),D.shadowMapEnabled&&a.enable(9),D.useLegacyLights&&a.enable(10),D.doubleSided&&a.enable(11),D.flipSided&&a.enable(12),D.useDepthPacking&&a.enable(13),D.dithering&&a.enable(14),D.transmission&&a.enable(15),D.sheen&&a.enable(16),D.opaque&&a.enable(17),D.pointsUvs&&a.enable(18),D.decodeVideoTexture&&a.enable(19),D.alphaToCoverage&&a.enable(20),w.push(a.mask)}function E(w){const D=g[w.type];let T;if(D){const U=Rn[D];T=Yv.clone(U.uniforms)}else T=w.uniforms;return T}function P(w,D){let T;for(let U=0,S=c.length;U<S;U++){const H=c[U];if(H.cacheKey===D){T=H,++T.usedTimes;break}}return T===void 0&&(T=new uM(n,D,w,s),c.push(T)),T}function C(w){if(--w.usedTimes===0){const D=c.indexOf(w);c[D]=c[c.length-1],c.pop(),w.destroy()}}function N(w){l.remove(w)}function O(){l.dispose()}return{getParameters:h,getProgramCacheKey:x,getUniforms:E,acquireProgram:P,releaseProgram:C,releaseShaderCache:N,programs:c,dispose:O}}function mM(){let n=new WeakMap;function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function e(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function gM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function mf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function gf(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,p,d,v,g,m){let h=n[t];return h===void 0?(h={id:f.id,object:f,geometry:p,material:d,groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},n[t]=h):(h.id=f.id,h.object=f,h.geometry=p,h.material=d,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=g,h.group=m),t++,h}function a(f,p,d,v,g,m){const h=o(f,p,d,v,g,m);d.transmission>0?i.push(h):d.transparent===!0?r.push(h):e.push(h)}function l(f,p,d,v,g,m){const h=o(f,p,d,v,g,m);d.transmission>0?i.unshift(h):d.transparent===!0?r.unshift(h):e.unshift(h)}function u(f,p){e.length>1&&e.sort(f||gM),i.length>1&&i.sort(p||mf),r.length>1&&r.sort(p||mf)}function c(){for(let f=t,p=n.length;f<p;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function _M(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new gf,n.set(i,[o])):r>=s.length?(o=new gf,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function vM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new ht,color:new re};break;case"SpotLight":e={position:new ht,direction:new ht,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new ht,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new ht,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new ht,halfWidth:new ht,halfHeight:new ht};break}return n[t.id]=e,e}}}function xM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let yM=0;function SM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function MM(n,t){const e=new vM,i=xM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new ht);const s=new ht,o=new Me,a=new Me;function l(c,f){let p=0,d=0,v=0;for(let T=0;T<9;T++)r.probe[T].set(0,0,0);let g=0,m=0,h=0,x=0,_=0,M=0,E=0,P=0,C=0,N=0,O=0;c.sort(SM);const w=f===!0?Math.PI:1;for(let T=0,U=c.length;T<U;T++){const S=c[T],H=S.color,J=S.intensity,q=S.distance,tt=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)p+=H.r*J*w,d+=H.g*J*w,v+=H.b*J*w;else if(S.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(S.sh.coefficients[Z],J);O++}else if(S.isDirectionalLight){const Z=e.get(S);if(Z.color.copy(S.color).multiplyScalar(S.intensity*w),S.castShadow){const st=S.shadow,j=i.get(S);j.shadowBias=st.bias,j.shadowNormalBias=st.normalBias,j.shadowRadius=st.radius,j.shadowMapSize=st.mapSize,r.directionalShadow[g]=j,r.directionalShadowMap[g]=tt,r.directionalShadowMatrix[g]=S.shadow.matrix,M++}r.directional[g]=Z,g++}else if(S.isSpotLight){const Z=e.get(S);Z.position.setFromMatrixPosition(S.matrixWorld),Z.color.copy(H).multiplyScalar(J*w),Z.distance=q,Z.coneCos=Math.cos(S.angle),Z.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),Z.decay=S.decay,r.spot[h]=Z;const st=S.shadow;if(S.map&&(r.spotLightMap[C]=S.map,C++,st.updateMatrices(S),S.castShadow&&N++),r.spotLightMatrix[h]=st.matrix,S.castShadow){const j=i.get(S);j.shadowBias=st.bias,j.shadowNormalBias=st.normalBias,j.shadowRadius=st.radius,j.shadowMapSize=st.mapSize,r.spotShadow[h]=j,r.spotShadowMap[h]=tt,P++}h++}else if(S.isRectAreaLight){const Z=e.get(S);Z.color.copy(H).multiplyScalar(J),Z.halfWidth.set(S.width*.5,0,0),Z.halfHeight.set(0,S.height*.5,0),r.rectArea[x]=Z,x++}else if(S.isPointLight){const Z=e.get(S);if(Z.color.copy(S.color).multiplyScalar(S.intensity*w),Z.distance=S.distance,Z.decay=S.decay,S.castShadow){const st=S.shadow,j=i.get(S);j.shadowBias=st.bias,j.shadowNormalBias=st.normalBias,j.shadowRadius=st.radius,j.shadowMapSize=st.mapSize,j.shadowCameraNear=st.camera.near,j.shadowCameraFar=st.camera.far,r.pointShadow[m]=j,r.pointShadowMap[m]=tt,r.pointShadowMatrix[m]=S.shadow.matrix,E++}r.point[m]=Z,m++}else if(S.isHemisphereLight){const Z=e.get(S);Z.skyColor.copy(S.color).multiplyScalar(J*w),Z.groundColor.copy(S.groundColor).multiplyScalar(J*w),r.hemi[_]=Z,_++}}x>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=wt.LTC_FLOAT_1,r.rectAreaLTC2=wt.LTC_FLOAT_2):(r.rectAreaLTC1=wt.LTC_HALF_1,r.rectAreaLTC2=wt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=wt.LTC_FLOAT_1,r.rectAreaLTC2=wt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=wt.LTC_HALF_1,r.rectAreaLTC2=wt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=d,r.ambient[2]=v;const D=r.hash;(D.directionalLength!==g||D.pointLength!==m||D.spotLength!==h||D.rectAreaLength!==x||D.hemiLength!==_||D.numDirectionalShadows!==M||D.numPointShadows!==E||D.numSpotShadows!==P||D.numSpotMaps!==C||D.numLightProbes!==O)&&(r.directional.length=g,r.spot.length=h,r.rectArea.length=x,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=P+C-N,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=O,D.directionalLength=g,D.pointLength=m,D.spotLength=h,D.rectAreaLength=x,D.hemiLength=_,D.numDirectionalShadows=M,D.numPointShadows=E,D.numSpotShadows=P,D.numSpotMaps=C,D.numLightProbes=O,r.version=yM++)}function u(c,f){let p=0,d=0,v=0,g=0,m=0;const h=f.matrixWorldInverse;for(let x=0,_=c.length;x<_;x++){const M=c[x];if(M.isDirectionalLight){const E=r.directional[p];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),p++}else if(M.isSpotLight){const E=r.spot[v];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),v++}else if(M.isRectAreaLight){const E=r.rectArea[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(h),a.identity(),o.copy(M.matrixWorld),o.premultiply(h),a.extractRotation(o),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const E=r.point[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(h),d++}else if(M.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(h),m++}}}return{setup:l,setupView:u,state:r}}function _f(n,t){const e=new MM(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){e.setup(i,f)}function u(f){e.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function bM(n,t){let e=new WeakMap;function i(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new _f(n,t),e.set(s,[l])):o>=a.length?(l=new _f(n,t),a.push(l)):l=a[o],l}function r(){e=new WeakMap}return{get:i,dispose:r}}class EM extends Ba{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wM extends Ba{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const TM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AM=`uniform sampler2D shadow_pass;
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
}`;function CM(n,t,e){let i=new gd;const r=new Kt,s=new Kt,o=new Pe,a=new EM({depthPacking:_v}),l=new wM,u={},c=e.maxTextureSize,f={[bi]:Ke,[Ke]:bi,[Zn]:Zn},p=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:TM,fragmentShader:AM}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const v=new tr;v.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new In(v,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jh;let h=this.type;this.render=function(P,C,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const O=n.getRenderTarget(),w=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),T=n.state;T.setBlending(xi),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);const U=h!==Xn&&this.type===Xn,S=h===Xn&&this.type!==Xn;for(let H=0,J=P.length;H<J;H++){const q=P[H],tt=q.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;r.copy(tt.mapSize);const Z=tt.getFrameExtents();if(r.multiply(Z),s.copy(tt.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/Z.x),r.x=s.x*Z.x,tt.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/Z.y),r.y=s.y*Z.y,tt.mapSize.y=s.y)),tt.map===null||U===!0||S===!0){const j=this.type!==Xn?{minFilter:He,magFilter:He}:{};tt.map!==null&&tt.map.dispose(),tt.map=new Ki(r.x,r.y,j),tt.map.texture.name=q.name+".shadowMap",tt.camera.updateProjectionMatrix()}n.setRenderTarget(tt.map),n.clear();const st=tt.getViewportCount();for(let j=0;j<st;j++){const $=tt.getViewport(j);o.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),T.viewport(o),tt.updateMatrices(q,j),i=tt.getFrustum(),M(C,N,tt.camera,q,this.type)}tt.isPointLightShadow!==!0&&this.type===Xn&&x(tt,N),tt.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(O,w,D)};function x(P,C){const N=t.update(g);p.defines.VSM_SAMPLES!==P.blurSamples&&(p.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ki(r.x,r.y)),p.uniforms.shadow_pass.value=P.map.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(C,null,N,p,g,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(C,null,N,d,g,null)}function _(P,C,N,O){let w=null;const D=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)w=D;else if(w=N.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const T=w.uuid,U=C.uuid;let S=u[T];S===void 0&&(S={},u[T]=S);let H=S[U];H===void 0&&(H=w.clone(),S[U]=H,C.addEventListener("dispose",E)),w=H}if(w.visible=C.visible,w.wireframe=C.wireframe,O===Xn?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:f[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,N.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const T=n.properties.get(w);T.light=N}return w}function M(P,C,N,O,w){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&w===Xn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const U=t.update(P),S=P.material;if(Array.isArray(S)){const H=U.groups;for(let J=0,q=H.length;J<q;J++){const tt=H[J],Z=S[tt.materialIndex];if(Z&&Z.visible){const st=_(P,Z,O,w);P.onBeforeShadow(n,P,C,N,U,st,tt),n.renderBufferDirect(N,null,U,st,P,tt),P.onAfterShadow(n,P,C,N,U,st,tt)}}}else if(S.visible){const H=_(P,S,O,w);P.onBeforeShadow(n,P,C,N,U,H,null),n.renderBufferDirect(N,null,U,H,P,null),P.onAfterShadow(n,P,C,N,U,H,null)}}const T=P.children;for(let U=0,S=T.length;U<S;U++)M(T[U],C,N,O,w)}function E(P){P.target.removeEventListener("dispose",E);for(const N in u){const O=u[N],w=P.target.uuid;w in O&&(O[w].dispose(),delete O[w])}}}function RM(n,t,e){const i=e.isWebGL2;function r(){let et=!1;const Et=new Pe;let ct=null;const bt=new Pe(0,0,0,0);return{setMask:function(At){ct!==At&&!et&&(n.colorMask(At,At,At,At),ct=At)},setLocked:function(At){et=At},setClear:function(At,Yt,oe,Ce,an){an===!0&&(At*=Ce,Yt*=Ce,oe*=Ce),Et.set(At,Yt,oe,Ce),bt.equals(Et)===!1&&(n.clearColor(At,Yt,oe,Ce),bt.copy(Et))},reset:function(){et=!1,ct=null,bt.set(-1,0,0,0)}}}function s(){let et=!1,Et=null,ct=null,bt=null;return{setTest:function(At){At?rt(n.DEPTH_TEST):mt(n.DEPTH_TEST)},setMask:function(At){Et!==At&&!et&&(n.depthMask(At),Et=At)},setFunc:function(At){if(ct!==At){switch(At){case q0:n.depthFunc(n.NEVER);break;case j0:n.depthFunc(n.ALWAYS);break;case Y0:n.depthFunc(n.LESS);break;case ga:n.depthFunc(n.LEQUAL);break;case $0:n.depthFunc(n.EQUAL);break;case Z0:n.depthFunc(n.GEQUAL);break;case K0:n.depthFunc(n.GREATER);break;case J0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ct=At}},setLocked:function(At){et=At},setClear:function(At){bt!==At&&(n.clearDepth(At),bt=At)},reset:function(){et=!1,Et=null,ct=null,bt=null}}}function o(){let et=!1,Et=null,ct=null,bt=null,At=null,Yt=null,oe=null,Ce=null,an=null;return{setTest:function(le){et||(le?rt(n.STENCIL_TEST):mt(n.STENCIL_TEST))},setMask:function(le){Et!==le&&!et&&(n.stencilMask(le),Et=le)},setFunc:function(le,ke,Mn){(ct!==le||bt!==ke||At!==Mn)&&(n.stencilFunc(le,ke,Mn),ct=le,bt=ke,At=Mn)},setOp:function(le,ke,Mn){(Yt!==le||oe!==ke||Ce!==Mn)&&(n.stencilOp(le,ke,Mn),Yt=le,oe=ke,Ce=Mn)},setLocked:function(le){et=le},setClear:function(le){an!==le&&(n.clearStencil(le),an=le)},reset:function(){et=!1,Et=null,ct=null,bt=null,At=null,Yt=null,oe=null,Ce=null,an=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let p={},d={},v=new WeakMap,g=[],m=null,h=!1,x=null,_=null,M=null,E=null,P=null,C=null,N=null,O=new re(0,0,0),w=0,D=!1,T=null,U=null,S=null,H=null,J=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let tt=!1,Z=0;const st=n.getParameter(n.VERSION);st.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(st)[1]),tt=Z>=1):st.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),tt=Z>=2);let j=null,$={};const xt=n.getParameter(n.SCISSOR_BOX),V=n.getParameter(n.VIEWPORT),W=new Pe().fromArray(xt),pt=new Pe().fromArray(V);function nt(et,Et,ct,bt){const At=new Uint8Array(4),Yt=n.createTexture();n.bindTexture(et,Yt),n.texParameteri(et,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(et,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let oe=0;oe<ct;oe++)i&&(et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY)?n.texImage3D(Et,0,n.RGBA,1,1,bt,0,n.RGBA,n.UNSIGNED_BYTE,At):n.texImage2D(Et+oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,At);return Yt}const at={};at[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),at[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(at[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),at[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),rt(n.DEPTH_TEST),l.setFunc(ga),I(!1),F($c),rt(n.CULL_FACE),B(xi);function rt(et){p[et]!==!0&&(n.enable(et),p[et]=!0)}function mt(et){p[et]!==!1&&(n.disable(et),p[et]=!1)}function vt(et,Et){return d[et]!==Et?(n.bindFramebuffer(et,Et),d[et]=Et,i&&(et===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Et),et===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Et)),!0):!1}function R(et,Et){let ct=g,bt=!1;if(et){ct=v.get(Et),ct===void 0&&(ct=[],v.set(Et,ct));const At=et.textures;if(ct.length!==At.length||ct[0]!==n.COLOR_ATTACHMENT0){for(let Yt=0,oe=At.length;Yt<oe;Yt++)ct[Yt]=n.COLOR_ATTACHMENT0+Yt;ct.length=At.length,bt=!0}}else ct[0]!==n.BACK&&(ct[0]=n.BACK,bt=!0);if(bt)if(e.isWebGL2)n.drawBuffers(ct);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ct);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function X(et){return m!==et?(n.useProgram(et),m=et,!0):!1}const y={[Gi]:n.FUNC_ADD,[L0]:n.FUNC_SUBTRACT,[I0]:n.FUNC_REVERSE_SUBTRACT};if(i)y[Qc]=n.MIN,y[tu]=n.MAX;else{const et=t.get("EXT_blend_minmax");et!==null&&(y[Qc]=et.MIN_EXT,y[tu]=et.MAX_EXT)}const z={[D0]:n.ZERO,[U0]:n.ONE,[N0]:n.SRC_COLOR,[sl]:n.SRC_ALPHA,[G0]:n.SRC_ALPHA_SATURATE,[B0]:n.DST_COLOR,[F0]:n.DST_ALPHA,[O0]:n.ONE_MINUS_SRC_COLOR,[al]:n.ONE_MINUS_SRC_ALPHA,[z0]:n.ONE_MINUS_DST_COLOR,[k0]:n.ONE_MINUS_DST_ALPHA,[H0]:n.CONSTANT_COLOR,[V0]:n.ONE_MINUS_CONSTANT_COLOR,[W0]:n.CONSTANT_ALPHA,[X0]:n.ONE_MINUS_CONSTANT_ALPHA};function B(et,Et,ct,bt,At,Yt,oe,Ce,an,le){if(et===xi){h===!0&&(mt(n.BLEND),h=!1);return}if(h===!1&&(rt(n.BLEND),h=!0),et!==P0){if(et!==x||le!==D){if((_!==Gi||P!==Gi)&&(n.blendEquation(n.FUNC_ADD),_=Gi,P=Gi),le)switch(et){case Cr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zc:n.blendFunc(n.ONE,n.ONE);break;case Kc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",et);break}else switch(et){case Cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Kc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",et);break}M=null,E=null,C=null,N=null,O.set(0,0,0),w=0,x=et,D=le}return}At=At||Et,Yt=Yt||ct,oe=oe||bt,(Et!==_||At!==P)&&(n.blendEquationSeparate(y[Et],y[At]),_=Et,P=At),(ct!==M||bt!==E||Yt!==C||oe!==N)&&(n.blendFuncSeparate(z[ct],z[bt],z[Yt],z[oe]),M=ct,E=bt,C=Yt,N=oe),(Ce.equals(O)===!1||an!==w)&&(n.blendColor(Ce.r,Ce.g,Ce.b,an),O.copy(Ce),w=an),x=et,D=!1}function L(et,Et){et.side===Zn?mt(n.CULL_FACE):rt(n.CULL_FACE);let ct=et.side===Ke;Et&&(ct=!ct),I(ct),et.blending===Cr&&et.transparent===!1?B(xi):B(et.blending,et.blendEquation,et.blendSrc,et.blendDst,et.blendEquationAlpha,et.blendSrcAlpha,et.blendDstAlpha,et.blendColor,et.blendAlpha,et.premultipliedAlpha),l.setFunc(et.depthFunc),l.setTest(et.depthTest),l.setMask(et.depthWrite),a.setMask(et.colorWrite);const bt=et.stencilWrite;u.setTest(bt),bt&&(u.setMask(et.stencilWriteMask),u.setFunc(et.stencilFunc,et.stencilRef,et.stencilFuncMask),u.setOp(et.stencilFail,et.stencilZFail,et.stencilZPass)),A(et.polygonOffset,et.polygonOffsetFactor,et.polygonOffsetUnits),et.alphaToCoverage===!0?rt(n.SAMPLE_ALPHA_TO_COVERAGE):mt(n.SAMPLE_ALPHA_TO_COVERAGE)}function I(et){T!==et&&(et?n.frontFace(n.CW):n.frontFace(n.CCW),T=et)}function F(et){et!==A0?(rt(n.CULL_FACE),et!==U&&(et===$c?n.cullFace(n.BACK):et===C0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):mt(n.CULL_FACE),U=et}function Q(et){et!==S&&(tt&&n.lineWidth(et),S=et)}function A(et,Et,ct){et?(rt(n.POLYGON_OFFSET_FILL),(H!==Et||J!==ct)&&(n.polygonOffset(Et,ct),H=Et,J=ct)):mt(n.POLYGON_OFFSET_FILL)}function b(et){et?rt(n.SCISSOR_TEST):mt(n.SCISSOR_TEST)}function G(et){et===void 0&&(et=n.TEXTURE0+q-1),j!==et&&(n.activeTexture(et),j=et)}function Y(et,Et,ct){ct===void 0&&(j===null?ct=n.TEXTURE0+q-1:ct=j);let bt=$[ct];bt===void 0&&(bt={type:void 0,texture:void 0},$[ct]=bt),(bt.type!==et||bt.texture!==Et)&&(j!==ct&&(n.activeTexture(ct),j=ct),n.bindTexture(et,Et||at[et]),bt.type=et,bt.texture=Et)}function K(){const et=$[j];et!==void 0&&et.type!==void 0&&(n.bindTexture(et.type,null),et.type=void 0,et.texture=void 0)}function it(){try{n.compressedTexImage2D.apply(n,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Mt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function _t(){try{n.texSubImage2D.apply(n,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function gt(){try{n.texSubImage3D.apply(n,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function St(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function yt(){try{n.texStorage2D.apply(n,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Ut(){try{n.texStorage3D.apply(n,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Ot(){try{n.texImage2D.apply(n,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Ct(){try{n.texImage3D.apply(n,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Tt(et){W.equals(et)===!1&&(n.scissor(et.x,et.y,et.z,et.w),W.copy(et))}function Lt(et){pt.equals(et)===!1&&(n.viewport(et.x,et.y,et.z,et.w),pt.copy(et))}function Xt(et,Et){let ct=f.get(Et);ct===void 0&&(ct=new WeakMap,f.set(Et,ct));let bt=ct.get(et);bt===void 0&&(bt=n.getUniformBlockIndex(Et,et.name),ct.set(et,bt))}function Bt(et,Et){const bt=f.get(Et).get(et);c.get(Et)!==bt&&(n.uniformBlockBinding(Et,bt,et.__bindingPointIndex),c.set(Et,bt))}function ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},j=null,$={},d={},v=new WeakMap,g=[],m=null,h=!1,x=null,_=null,M=null,E=null,P=null,C=null,N=null,O=new re(0,0,0),w=0,D=!1,T=null,U=null,S=null,H=null,J=null,W.set(0,0,n.canvas.width,n.canvas.height),pt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:rt,disable:mt,bindFramebuffer:vt,drawBuffers:R,useProgram:X,setBlending:B,setMaterial:L,setFlipSided:I,setCullFace:F,setLineWidth:Q,setPolygonOffset:A,setScissorTest:b,activeTexture:G,bindTexture:Y,unbindTexture:K,compressedTexImage2D:it,compressedTexImage3D:Mt,texImage2D:Ot,texImage3D:Ct,updateUBOMapping:Xt,uniformBlockBinding:Bt,texStorage2D:yt,texStorage3D:Ut,texSubImage2D:_t,texSubImage3D:gt,compressedTexSubImage2D:St,compressedTexSubImage3D:Pt,scissor:Tt,viewport:Lt,reset:ae}}function PM(n,t,e,i,r,s,o){const a=r.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Kt,f=new WeakMap;let p;const d=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return v?new OffscreenCanvas(A,b):Sa("canvas")}function m(A,b,G,Y){let K=1;const it=Q(A);if((it.width>Y||it.height>Y)&&(K=Y/Math.max(it.width,it.height)),K<1||b===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Mt=b?dl:Math.floor,_t=Mt(K*it.width),gt=Mt(K*it.height);p===void 0&&(p=g(_t,gt));const St=G?g(_t,gt):p;return St.width=_t,St.height=gt,St.getContext("2d").drawImage(A,0,0,_t,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+_t+"x"+gt+")."),St}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),A;return A}function h(A){const b=Q(A);return Pu(b.width)&&Pu(b.height)}function x(A){return a?!1:A.wrapS!==mn||A.wrapT!==mn||A.minFilter!==He&&A.minFilter!==$e}function _(A,b){return A.generateMipmaps&&b&&A.minFilter!==He&&A.minFilter!==$e}function M(A){n.generateMipmap(A)}function E(A,b,G,Y,K=!1){if(a===!1)return b;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let it=b;if(b===n.RED&&(G===n.FLOAT&&(it=n.R32F),G===n.HALF_FLOAT&&(it=n.R16F),G===n.UNSIGNED_BYTE&&(it=n.R8)),b===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(it=n.R8UI),G===n.UNSIGNED_SHORT&&(it=n.R16UI),G===n.UNSIGNED_INT&&(it=n.R32UI),G===n.BYTE&&(it=n.R8I),G===n.SHORT&&(it=n.R16I),G===n.INT&&(it=n.R32I)),b===n.RG&&(G===n.FLOAT&&(it=n.RG32F),G===n.HALF_FLOAT&&(it=n.RG16F),G===n.UNSIGNED_BYTE&&(it=n.RG8)),b===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(it=n.RG8UI),G===n.UNSIGNED_SHORT&&(it=n.RG16UI),G===n.UNSIGNED_INT&&(it=n.RG32UI),G===n.BYTE&&(it=n.RG8I),G===n.SHORT&&(it=n.RG16I),G===n.INT&&(it=n.RG32I)),b===n.RGBA){const Mt=K?_a:ne.getTransfer(Y);G===n.FLOAT&&(it=n.RGBA32F),G===n.HALF_FLOAT&&(it=n.RGBA16F),G===n.UNSIGNED_BYTE&&(it=Mt===ue?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function P(A,b,G){return _(A,G)===!0||A.isFramebufferTexture&&A.minFilter!==He&&A.minFilter!==$e?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function C(A){return A===He||A===eu||A===qr?n.NEAREST:n.LINEAR}function N(A){const b=A.target;b.removeEventListener("dispose",N),w(b),b.isVideoTexture&&f.delete(b)}function O(A){const b=A.target;b.removeEventListener("dispose",O),T(b)}function w(A){const b=i.get(A);if(b.__webglInit===void 0)return;const G=A.source,Y=d.get(G);if(Y){const K=Y[b.__cacheKey];K.usedTimes--,K.usedTimes===0&&D(A),Object.keys(Y).length===0&&d.delete(G)}i.remove(A)}function D(A){const b=i.get(A);n.deleteTexture(b.__webglTexture);const G=A.source,Y=d.get(G);delete Y[b.__cacheKey],o.memory.textures--}function T(A){const b=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let K=0;K<b.__webglFramebuffer[Y].length;K++)n.deleteFramebuffer(b.__webglFramebuffer[Y][K]);else n.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)n.deleteFramebuffer(b.__webglFramebuffer[Y]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=A.textures;for(let Y=0,K=G.length;Y<K;Y++){const it=i.get(G[Y]);it.__webglTexture&&(n.deleteTexture(it.__webglTexture),o.memory.textures--),i.remove(G[Y])}i.remove(A)}let U=0;function S(){U=0}function H(){const A=U;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),U+=1,A}function J(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function q(A,b){const G=i.get(A);if(A.isVideoTexture&&I(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(G,A,b);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+b)}function tt(A,b){const G=i.get(A);if(A.version>0&&G.__version!==A.version){pt(G,A,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+b)}function Z(A,b){const G=i.get(A);if(A.version>0&&G.__version!==A.version){pt(G,A,b);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+b)}function st(A,b){const G=i.get(A);if(A.version>0&&G.__version!==A.version){nt(G,A,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+b)}const j={[cl]:n.REPEAT,[mn]:n.CLAMP_TO_EDGE,[ul]:n.MIRRORED_REPEAT},$={[He]:n.NEAREST,[eu]:n.NEAREST_MIPMAP_NEAREST,[qr]:n.NEAREST_MIPMAP_LINEAR,[$e]:n.LINEAR,[oo]:n.LINEAR_MIPMAP_NEAREST,[Wi]:n.LINEAR_MIPMAP_LINEAR},xt={[yv]:n.NEVER,[Tv]:n.ALWAYS,[Sv]:n.LESS,[id]:n.LEQUAL,[Mv]:n.EQUAL,[wv]:n.GEQUAL,[bv]:n.GREATER,[Ev]:n.NOTEQUAL};function V(A,b,G){if(b.type===Kn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===$e||b.magFilter===oo||b.magFilter===qr||b.magFilter===Wi||b.minFilter===$e||b.minFilter===oo||b.minFilter===qr||b.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),G?(n.texParameteri(A,n.TEXTURE_WRAP_S,j[b.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,j[b.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,j[b.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,$[b.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,$[b.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==mn||b.wrapT!==mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,C(b.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,C(b.minFilter)),b.minFilter!==He&&b.minFilter!==$e&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,xt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===He||b.minFilter!==qr&&b.minFilter!==Wi||b.type===Kn&&t.has("OES_texture_float_linear")===!1||a===!1&&b.type===_s&&t.has("OES_texture_half_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function W(A,b){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",N));const Y=b.source;let K=d.get(Y);K===void 0&&(K={},d.set(Y,K));const it=J(b);if(it!==A.__cacheKey){K[it]===void 0&&(K[it]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),K[it].usedTimes++;const Mt=K[A.__cacheKey];Mt!==void 0&&(K[A.__cacheKey].usedTimes--,Mt.usedTimes===0&&D(b)),A.__cacheKey=it,A.__webglTexture=K[it].texture}return G}function pt(A,b,G){let Y=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=n.TEXTURE_3D);const K=W(A,b),it=b.source;e.bindTexture(Y,A.__webglTexture,n.TEXTURE0+G);const Mt=i.get(it);if(it.version!==Mt.__version||K===!0){e.activeTexture(n.TEXTURE0+G);const _t=ne.getPrimaries(ne.workingColorSpace),gt=b.colorSpace===gi?null:ne.getPrimaries(b.colorSpace),St=b.colorSpace===gi||_t===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Pt=x(b)&&h(b.image)===!1;let yt=m(b.image,Pt,!1,r.maxTextureSize);yt=F(b,yt);const Ut=h(yt)||a,Ot=s.convert(b.format,b.colorSpace);let Ct=s.convert(b.type),Tt=E(b.internalFormat,Ot,Ct,b.colorSpace,b.isVideoTexture);V(Y,b,Ut);let Lt;const Xt=b.mipmaps,Bt=a&&b.isVideoTexture!==!0&&Tt!==nd,ae=Mt.__version===void 0||K===!0,et=it.dataReady,Et=P(b,yt,Ut);if(b.isDepthTexture)Tt=n.DEPTH_COMPONENT,a?b.type===Kn?Tt=n.DEPTH_COMPONENT32F:b.type===_i?Tt=n.DEPTH_COMPONENT24:b.type===Yi?Tt=n.DEPTH24_STENCIL8:Tt=n.DEPTH_COMPONENT16:b.type===Kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===$i&&Tt===n.DEPTH_COMPONENT&&b.type!==Fl&&b.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=_i,Ct=s.convert(b.type)),b.format===Or&&Tt===n.DEPTH_COMPONENT&&(Tt=n.DEPTH_STENCIL,b.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Yi,Ct=s.convert(b.type))),ae&&(Bt?e.texStorage2D(n.TEXTURE_2D,1,Tt,yt.width,yt.height):e.texImage2D(n.TEXTURE_2D,0,Tt,yt.width,yt.height,0,Ot,Ct,null));else if(b.isDataTexture)if(Xt.length>0&&Ut){Bt&&ae&&e.texStorage2D(n.TEXTURE_2D,Et,Tt,Xt[0].width,Xt[0].height);for(let ct=0,bt=Xt.length;ct<bt;ct++)Lt=Xt[ct],Bt?et&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,Lt.width,Lt.height,Ot,Ct,Lt.data):e.texImage2D(n.TEXTURE_2D,ct,Tt,Lt.width,Lt.height,0,Ot,Ct,Lt.data);b.generateMipmaps=!1}else Bt?(ae&&e.texStorage2D(n.TEXTURE_2D,Et,Tt,yt.width,yt.height),et&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,yt.width,yt.height,Ot,Ct,yt.data)):e.texImage2D(n.TEXTURE_2D,0,Tt,yt.width,yt.height,0,Ot,Ct,yt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Bt&&ae&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,Tt,Xt[0].width,Xt[0].height,yt.depth);for(let ct=0,bt=Xt.length;ct<bt;ct++)Lt=Xt[ct],b.format!==gn?Ot!==null?Bt?et&&e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,Lt.width,Lt.height,yt.depth,Ot,Lt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ct,Tt,Lt.width,Lt.height,yt.depth,0,Lt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?et&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,Lt.width,Lt.height,yt.depth,Ot,Ct,Lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ct,Tt,Lt.width,Lt.height,yt.depth,0,Ot,Ct,Lt.data)}else{Bt&&ae&&e.texStorage2D(n.TEXTURE_2D,Et,Tt,Xt[0].width,Xt[0].height);for(let ct=0,bt=Xt.length;ct<bt;ct++)Lt=Xt[ct],b.format!==gn?Ot!==null?Bt?et&&e.compressedTexSubImage2D(n.TEXTURE_2D,ct,0,0,Lt.width,Lt.height,Ot,Lt.data):e.compressedTexImage2D(n.TEXTURE_2D,ct,Tt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?et&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,Lt.width,Lt.height,Ot,Ct,Lt.data):e.texImage2D(n.TEXTURE_2D,ct,Tt,Lt.width,Lt.height,0,Ot,Ct,Lt.data)}else if(b.isDataArrayTexture)Bt?(ae&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,Tt,yt.width,yt.height,yt.depth),et&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Ot,Ct,yt.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,Tt,yt.width,yt.height,yt.depth,0,Ot,Ct,yt.data);else if(b.isData3DTexture)Bt?(ae&&e.texStorage3D(n.TEXTURE_3D,Et,Tt,yt.width,yt.height,yt.depth),et&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Ot,Ct,yt.data)):e.texImage3D(n.TEXTURE_3D,0,Tt,yt.width,yt.height,yt.depth,0,Ot,Ct,yt.data);else if(b.isFramebufferTexture){if(ae)if(Bt)e.texStorage2D(n.TEXTURE_2D,Et,Tt,yt.width,yt.height);else{let ct=yt.width,bt=yt.height;for(let At=0;At<Et;At++)e.texImage2D(n.TEXTURE_2D,At,Tt,ct,bt,0,Ot,Ct,null),ct>>=1,bt>>=1}}else if(Xt.length>0&&Ut){if(Bt&&ae){const ct=Q(Xt[0]);e.texStorage2D(n.TEXTURE_2D,Et,Tt,ct.width,ct.height)}for(let ct=0,bt=Xt.length;ct<bt;ct++)Lt=Xt[ct],Bt?et&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,Ot,Ct,Lt):e.texImage2D(n.TEXTURE_2D,ct,Tt,Ot,Ct,Lt);b.generateMipmaps=!1}else if(Bt){if(ae){const ct=Q(yt);e.texStorage2D(n.TEXTURE_2D,Et,Tt,ct.width,ct.height)}et&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ot,Ct,yt)}else e.texImage2D(n.TEXTURE_2D,0,Tt,Ot,Ct,yt);_(b,Ut)&&M(Y),Mt.__version=it.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function nt(A,b,G){if(b.image.length!==6)return;const Y=W(A,b),K=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+G);const it=i.get(K);if(K.version!==it.__version||Y===!0){e.activeTexture(n.TEXTURE0+G);const Mt=ne.getPrimaries(ne.workingColorSpace),_t=b.colorSpace===gi?null:ne.getPrimaries(b.colorSpace),gt=b.colorSpace===gi||Mt===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const St=b.isCompressedTexture||b.image[0].isCompressedTexture,Pt=b.image[0]&&b.image[0].isDataTexture,yt=[];for(let ct=0;ct<6;ct++)!St&&!Pt?yt[ct]=m(b.image[ct],!1,!0,r.maxCubemapSize):yt[ct]=Pt?b.image[ct].image:b.image[ct],yt[ct]=F(b,yt[ct]);const Ut=yt[0],Ot=h(Ut)||a,Ct=s.convert(b.format,b.colorSpace),Tt=s.convert(b.type),Lt=E(b.internalFormat,Ct,Tt,b.colorSpace),Xt=a&&b.isVideoTexture!==!0,Bt=it.__version===void 0||Y===!0,ae=K.dataReady;let et=P(b,Ut,Ot);V(n.TEXTURE_CUBE_MAP,b,Ot);let Et;if(St){Xt&&Bt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,et,Lt,Ut.width,Ut.height);for(let ct=0;ct<6;ct++){Et=yt[ct].mipmaps;for(let bt=0;bt<Et.length;bt++){const At=Et[bt];b.format!==gn?Ct!==null?Xt?ae&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,bt,0,0,At.width,At.height,Ct,At.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,bt,Lt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?ae&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,bt,0,0,At.width,At.height,Ct,Tt,At.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,bt,Lt,At.width,At.height,0,Ct,Tt,At.data)}}}else{if(Et=b.mipmaps,Xt&&Bt){Et.length>0&&et++;const ct=Q(yt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,et,Lt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Pt){Xt?ae&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,yt[ct].width,yt[ct].height,Ct,Tt,yt[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Lt,yt[ct].width,yt[ct].height,0,Ct,Tt,yt[ct].data);for(let bt=0;bt<Et.length;bt++){const Yt=Et[bt].image[ct].image;Xt?ae&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,bt+1,0,0,Yt.width,Yt.height,Ct,Tt,Yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,bt+1,Lt,Yt.width,Yt.height,0,Ct,Tt,Yt.data)}}else{Xt?ae&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Ct,Tt,yt[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Lt,Ct,Tt,yt[ct]);for(let bt=0;bt<Et.length;bt++){const At=Et[bt];Xt?ae&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,bt+1,0,0,Ct,Tt,At.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,bt+1,Lt,Ct,Tt,At.image[ct])}}}_(b,Ot)&&M(n.TEXTURE_CUBE_MAP),it.__version=K.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function at(A,b,G,Y,K,it){const Mt=s.convert(G.format,G.colorSpace),_t=s.convert(G.type),gt=E(G.internalFormat,Mt,_t,G.colorSpace);if(!i.get(b).__hasExternalTextures){const Pt=Math.max(1,b.width>>it),yt=Math.max(1,b.height>>it);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,it,gt,Pt,yt,b.depth,0,Mt,_t,null):e.texImage2D(K,it,gt,Pt,yt,0,Mt,_t,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),L(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,K,i.get(G).__webglTexture,0,B(b)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,K,i.get(G).__webglTexture,it),e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(A,b,G){if(n.bindRenderbuffer(n.RENDERBUFFER,A),b.depthBuffer&&!b.stencilBuffer){let Y=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(G||L(b)){const K=b.depthTexture;K&&K.isDepthTexture&&(K.type===Kn?Y=n.DEPTH_COMPONENT32F:K.type===_i&&(Y=n.DEPTH_COMPONENT24));const it=B(b);L(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it,Y,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,it,Y,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,Y,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(b.depthBuffer&&b.stencilBuffer){const Y=B(b);G&&L(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,n.DEPTH24_STENCIL8,b.width,b.height):L(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Y,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{const Y=b.textures;for(let K=0;K<Y.length;K++){const it=Y[K],Mt=s.convert(it.format,it.colorSpace),_t=s.convert(it.type),gt=E(it.internalFormat,Mt,_t,it.colorSpace),St=B(b);G&&L(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,St,gt,b.width,b.height):L(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St,gt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,gt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function mt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);const Y=i.get(b.depthTexture).__webglTexture,K=B(b);if(b.depthTexture.format===$i)L(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(b.depthTexture.format===Or)L(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function vt(A){const b=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");mt(b.__webglFramebuffer,A)}else if(G){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]=n.createRenderbuffer(),rt(b.__webglDepthbuffer[Y],A,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),rt(b.__webglDepthbuffer,A,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function R(A,b,G){const Y=i.get(A);b!==void 0&&at(Y.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&vt(A)}function X(A){const b=A.texture,G=i.get(A),Y=i.get(b);A.addEventListener("dispose",O);const K=A.textures,it=A.isWebGLCubeRenderTarget===!0,Mt=K.length>1,_t=h(A)||a;if(Mt||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=b.version,o.memory.textures++),it){G.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(a&&b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[gt]=[];for(let St=0;St<b.mipmaps.length;St++)G.__webglFramebuffer[gt][St]=n.createFramebuffer()}else G.__webglFramebuffer[gt]=n.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let gt=0;gt<b.mipmaps.length;gt++)G.__webglFramebuffer[gt]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Mt)if(r.drawBuffers)for(let gt=0,St=K.length;gt<St;gt++){const Pt=i.get(K[gt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=n.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&L(A)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let gt=0;gt<K.length;gt++){const St=K[gt];G.__webglColorRenderbuffer[gt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[gt]);const Pt=s.convert(St.format,St.colorSpace),yt=s.convert(St.type),Ut=E(St.internalFormat,Pt,yt,St.colorSpace,A.isXRRenderTarget===!0),Ot=B(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,Ut,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,G.__webglColorRenderbuffer[gt])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),rt(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(it){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),V(n.TEXTURE_CUBE_MAP,b,_t);for(let gt=0;gt<6;gt++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)at(G.__webglFramebuffer[gt][St],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,St);else at(G.__webglFramebuffer[gt],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);_(b,_t)&&M(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let gt=0,St=K.length;gt<St;gt++){const Pt=K[gt],yt=i.get(Pt);e.bindTexture(n.TEXTURE_2D,yt.__webglTexture),V(n.TEXTURE_2D,Pt,_t),at(G.__webglFramebuffer,A,Pt,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,0),_(Pt,_t)&&M(n.TEXTURE_2D)}e.unbindTexture()}else{let gt=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?gt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(gt,Y.__webglTexture),V(gt,b,_t),a&&b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)at(G.__webglFramebuffer[St],A,b,n.COLOR_ATTACHMENT0,gt,St);else at(G.__webglFramebuffer,A,b,n.COLOR_ATTACHMENT0,gt,0);_(b,_t)&&M(gt),e.unbindTexture()}A.depthBuffer&&vt(A)}function y(A){const b=h(A)||a,G=A.textures;for(let Y=0,K=G.length;Y<K;Y++){const it=G[Y];if(_(it,b)){const Mt=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,_t=i.get(it).__webglTexture;e.bindTexture(Mt,_t),M(Mt),e.unbindTexture()}}}function z(A){if(a&&A.samples>0&&L(A)===!1){const b=A.textures,G=A.width,Y=A.height;let K=n.COLOR_BUFFER_BIT;const it=[],Mt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=i.get(A),gt=b.length>1;if(gt)for(let St=0;St<b.length;St++)e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let St=0;St<b.length;St++){it.push(n.COLOR_ATTACHMENT0+St),A.depthBuffer&&it.push(Mt);const Pt=_t.__ignoreDepthValues!==void 0?_t.__ignoreDepthValues:!1;if(Pt===!1&&(A.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),gt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_t.__webglColorRenderbuffer[St]),Pt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Mt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Mt])),gt){const yt=i.get(b[St]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,yt,0)}n.blitFramebuffer(0,0,G,Y,0,0,G,Y,K,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,it)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),gt)for(let St=0;St<b.length;St++){e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,_t.__webglColorRenderbuffer[St]);const Pt=i.get(b[St]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,Pt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}}function B(A){return Math.min(r.maxSamples,A.samples)}function L(A){const b=i.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function I(A){const b=o.render.frame;f.get(A)!==b&&(f.set(A,b),A.update())}function F(A,b){const G=A.colorSpace,Y=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===fl||G!==Ei&&G!==gi&&(ne.getTransfer(G)===ue?a===!1?t.has("EXT_sRGB")===!0&&Y===gn?(A.format=fl,A.minFilter=$e,A.generateMipmaps=!1):b=sd.sRGBToLinear(b):(Y!==gn||K!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function Q(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=S,this.setTexture2D=q,this.setTexture2DArray=tt,this.setTexture3D=Z,this.setTextureCube=st,this.rebindTextures=R,this.setupRenderTarget=X,this.updateRenderTargetMipmap=y,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=L}function LM(n,t,e){const i=e.isWebGL2;function r(s,o=gi){let a;const l=ne.getTransfer(o);if(s===Si)return n.UNSIGNED_BYTE;if(s===Kh)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Jh)return n.UNSIGNED_SHORT_5_5_5_1;if(s===lv)return n.BYTE;if(s===cv)return n.SHORT;if(s===Fl)return n.UNSIGNED_SHORT;if(s===Zh)return n.INT;if(s===_i)return n.UNSIGNED_INT;if(s===Kn)return n.FLOAT;if(s===_s)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===uv)return n.ALPHA;if(s===gn)return n.RGBA;if(s===fv)return n.LUMINANCE;if(s===hv)return n.LUMINANCE_ALPHA;if(s===$i)return n.DEPTH_COMPONENT;if(s===Or)return n.DEPTH_STENCIL;if(s===fl)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===dv)return n.RED;if(s===Qh)return n.RED_INTEGER;if(s===pv)return n.RG;if(s===td)return n.RG_INTEGER;if(s===ed)return n.RGBA_INTEGER;if(s===lo||s===co||s===uo||s===fo)if(l===ue)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===lo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===uo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===fo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===lo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===co)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===uo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===fo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===nu||s===iu||s===ru||s===su)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===nu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===iu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ru)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===su)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===nd)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===au||s===ou)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===au)return l===ue?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ou)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===lu||s===cu||s===uu||s===fu||s===hu||s===du||s===pu||s===mu||s===gu||s===_u||s===vu||s===xu||s===yu||s===Su)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===lu)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cu)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===uu)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fu)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hu)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===du)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pu)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===mu)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gu)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===_u)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vu)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xu)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yu)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Su)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ho||s===Mu||s===bu)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===ho)return l===ue?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Mu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===bu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===mv||s===Eu||s===wu||s===Tu)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===ho)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Eu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===wu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Tu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Yi?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class IM extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Js extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DM={type:"move"};class zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ht,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ht),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ht,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ht),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,i),h=this._getHandJoint(u,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],p=c.position.distanceTo(f.position),d=.02,v=.005;u.inputState.pinching&&p>d+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&p<=d-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(DM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Js;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const UM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NM=`
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

}`;class OM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new qe,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const i=e.cameras[0].viewport,r=new ri({extensions:{fragDepth:!0},vertexShader:UM,fragmentShader:NM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new In(new ws(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class FM extends kr{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,p=null,d=null,v=null;const g=new OM,m=e.getContextAttributes();let h=null,x=null;const _=[],M=[],E=new Kt;let P=null;const C=new pn;C.layers.enable(1),C.viewport=new Pe;const N=new pn;N.layers.enable(2),N.viewport=new Pe;const O=[C,N],w=new IM;w.layers.enable(1),w.layers.enable(2);let D=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let W=_[V];return W===void 0&&(W=new zo,_[V]=W),W.getTargetRaySpace()},this.getControllerGrip=function(V){let W=_[V];return W===void 0&&(W=new zo,_[V]=W),W.getGripSpace()},this.getHand=function(V){let W=_[V];return W===void 0&&(W=new zo,_[V]=W),W.getHandSpace()};function U(V){const W=M.indexOf(V.inputSource);if(W===-1)return;const pt=_[W];pt!==void 0&&(pt.update(V.inputSource,V.frame,u||o),pt.dispatchEvent({type:V.type,data:V.inputSource}))}function S(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",S),r.removeEventListener("inputsourceschange",H);for(let V=0;V<_.length;V++){const W=M[V];W!==null&&(M[V]=null,_[V].disconnect(W))}D=null,T=null,g.reset(),t.setRenderTarget(h),d=null,p=null,f=null,r=null,x=null,xt.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(V){u=V},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",S),r.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(E),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const W={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,W),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Ki(d.framebufferWidth,d.framebufferHeight,{format:gn,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let W=null,pt=null,nt=null;m.depth&&(nt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=m.stencil?Or:$i,pt=m.stencil?Yi:_i);const at={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:s};f=new XRWebGLBinding(r,e),p=f.createProjectionLayer(at),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),x=new Ki(p.textureWidth,p.textureHeight,{format:gn,type:Si,depthTexture:new xd(p.textureWidth,p.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});const rt=t.properties.get(x);rt.__ignoreDepthValues=p.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),xt.setContext(r),xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function H(V){for(let W=0;W<V.removed.length;W++){const pt=V.removed[W],nt=M.indexOf(pt);nt>=0&&(M[nt]=null,_[nt].disconnect(pt))}for(let W=0;W<V.added.length;W++){const pt=V.added[W];let nt=M.indexOf(pt);if(nt===-1){for(let rt=0;rt<_.length;rt++)if(rt>=M.length){M.push(pt),nt=rt;break}else if(M[rt]===null){M[rt]=pt,nt=rt;break}if(nt===-1)break}const at=_[nt];at&&at.connect(pt)}}const J=new ht,q=new ht;function tt(V,W,pt){J.setFromMatrixPosition(W.matrixWorld),q.setFromMatrixPosition(pt.matrixWorld);const nt=J.distanceTo(q),at=W.projectionMatrix.elements,rt=pt.projectionMatrix.elements,mt=at[14]/(at[10]-1),vt=at[14]/(at[10]+1),R=(at[9]+1)/at[5],X=(at[9]-1)/at[5],y=(at[8]-1)/at[0],z=(rt[8]+1)/rt[0],B=mt*y,L=mt*z,I=nt/(-y+z),F=I*-y;W.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(F),V.translateZ(I),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const Q=mt+I,A=vt+I,b=B-F,G=L+(nt-F),Y=R*vt/A*Q,K=X*vt/A*Q;V.projectionMatrix.makePerspective(b,G,Y,K,Q,A),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function Z(V,W){W===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(W.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;g.texture!==null&&(V.near=g.depthNear,V.far=g.depthFar),w.near=N.near=C.near=V.near,w.far=N.far=C.far=V.far,(D!==w.near||T!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),D=w.near,T=w.far,C.near=D,C.far=T,N.near=D,N.far=T,C.updateProjectionMatrix(),N.updateProjectionMatrix(),V.updateProjectionMatrix());const W=V.parent,pt=w.cameras;Z(w,W);for(let nt=0;nt<pt.length;nt++)Z(pt[nt],W);pt.length===2?tt(w,C,N):w.projectionMatrix.copy(C.projectionMatrix),st(V,w,W)};function st(V,W,pt){pt===null?V.matrix.copy(W.matrixWorld):(V.matrix.copy(pt.matrixWorld),V.matrix.invert(),V.matrix.multiply(W.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(W.projectionMatrix),V.projectionMatrixInverse.copy(W.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=hl*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(V){l=V,p!==null&&(p.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)},this.hasDepthSensing=function(){return g.texture!==null};let j=null;function $(V,W){if(c=W.getViewerPose(u||o),v=W,c!==null){const pt=c.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let nt=!1;pt.length!==w.cameras.length&&(w.cameras.length=0,nt=!0);for(let rt=0;rt<pt.length;rt++){const mt=pt[rt];let vt=null;if(d!==null)vt=d.getViewport(mt);else{const X=f.getViewSubImage(p,mt);vt=X.viewport,rt===0&&(t.setRenderTargetTextures(x,X.colorTexture,p.ignoreDepthValues?void 0:X.depthStencilTexture),t.setRenderTarget(x))}let R=O[rt];R===void 0&&(R=new pn,R.layers.enable(rt),R.viewport=new Pe,O[rt]=R),R.matrix.fromArray(mt.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(mt.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(vt.x,vt.y,vt.width,vt.height),rt===0&&(w.matrix.copy(R.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),nt===!0&&w.cameras.push(R)}const at=r.enabledFeatures;if(at&&at.includes("depth-sensing")){const rt=f.getDepthInformation(pt[0]);rt&&rt.isValid&&rt.texture&&g.init(t,rt,r.renderState)}}for(let pt=0;pt<_.length;pt++){const nt=M[pt],at=_[pt];nt!==null&&at!==void 0&&at.update(nt,W,u||o)}g.render(t,w),j&&j(V,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),v=null}const xt=new _d;xt.setAnimationLoop($),this.setAnimationLoop=function(V){j=V},this.dispose=function(){}}}const Oi=new ii,kM=new Me;function BM(n,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,dd(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,x,_,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),p(m,h),h.isMeshPhysicalMaterial&&d(m,h,M)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),g(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,x,_):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Ke&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Ke&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const x=t.get(h),_=x.envMap,M=x.envMapRotation;if(_&&(m.envMap.value=_,Oi.copy(M),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(kM.makeRotationFromEuler(Oi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const E=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*E,e(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,x,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*x,m.scale.value=_*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function p(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),t.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function d(m,h,x){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ke&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const x=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function zM(n,t,e,i){let r={},s={},o=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,_){const M=_.program;i.uniformBlockBinding(x,M)}function u(x,_){let M=r[x.id];M===void 0&&(v(x),M=c(x),r[x.id]=M,x.addEventListener("dispose",m));const E=_.program;i.updateUBOMapping(x,E);const P=t.render.frame;s[x.id]!==P&&(p(x),s[x.id]=P)}function c(x){const _=f();x.__bindingPointIndex=_;const M=n.createBuffer(),E=x.__size,P=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,E,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,M),M}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const _=r[x.id],M=x.uniforms,E=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let P=0,C=M.length;P<C;P++){const N=Array.isArray(M[P])?M[P]:[M[P]];for(let O=0,w=N.length;O<w;O++){const D=N[O];if(d(D,P,O,E)===!0){const T=D.__offset,U=Array.isArray(D.value)?D.value:[D.value];let S=0;for(let H=0;H<U.length;H++){const J=U[H],q=g(J);typeof J=="number"||typeof J=="boolean"?(D.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,T+S,D.__data)):J.isMatrix3?(D.__data[0]=J.elements[0],D.__data[1]=J.elements[1],D.__data[2]=J.elements[2],D.__data[3]=0,D.__data[4]=J.elements[3],D.__data[5]=J.elements[4],D.__data[6]=J.elements[5],D.__data[7]=0,D.__data[8]=J.elements[6],D.__data[9]=J.elements[7],D.__data[10]=J.elements[8],D.__data[11]=0):(J.toArray(D.__data,S),S+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,T,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,_,M,E){const P=x.value,C=_+"_"+M;if(E[C]===void 0)return typeof P=="number"||typeof P=="boolean"?E[C]=P:E[C]=P.clone(),!0;{const N=E[C];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return E[C]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function v(x){const _=x.uniforms;let M=0;const E=16;for(let C=0,N=_.length;C<N;C++){const O=Array.isArray(_[C])?_[C]:[_[C]];for(let w=0,D=O.length;w<D;w++){const T=O[w],U=Array.isArray(T.value)?T.value:[T.value];for(let S=0,H=U.length;S<H;S++){const J=U[S],q=g(J),tt=M%E;tt!==0&&E-tt<q.boundary&&(M+=E-tt),T.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=M,M+=q.storage}}}const P=M%E;return P>0&&(M+=E-P),x.__size=M,x.__cache={},this}function g(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const x in r)n.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class wd{constructor(t={}){const{canvas:e=Cv(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;const d=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const h=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tn,this._useLegacyLights=!1,this.toneMapping=yi,this.toneMappingExposure=1;const _=this;let M=!1,E=0,P=0,C=null,N=-1,O=null;const w=new Pe,D=new Pe;let T=null;const U=new re(0);let S=0,H=e.width,J=e.height,q=1,tt=null,Z=null;const st=new Pe(0,0,H,J),j=new Pe(0,0,H,J);let $=!1;const xt=new gd;let V=!1,W=!1,pt=null;const nt=new Me,at=new Kt,rt=new ht,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function vt(){return C===null?q:1}let R=i;function X(k,lt){for(let ft=0;ft<k.length;ft++){const dt=k[ft],ut=e.getContext(dt,lt);if(ut!==null)return ut}return null}try{const k={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ol}`),e.addEventListener("webglcontextlost",ae,!1),e.addEventListener("webglcontextrestored",et,!1),e.addEventListener("webglcontextcreationerror",Et,!1),R===null){const lt=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&lt.shift(),R=X(lt,k),R===null)throw X(lt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&R instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(k){throw console.error("THREE.WebGLRenderer: "+k.message),k}let y,z,B,L,I,F,Q,A,b,G,Y,K,it,Mt,_t,gt,St,Pt,yt,Ut,Ot,Ct,Tt,Lt;function Xt(){y=new q1(R),z=new z1(R,y,t),y.init(z),Ct=new LM(R,y,z),B=new RM(R,y,z),L=new $1(R),I=new mM,F=new PM(R,y,B,I,z,Ct,L),Q=new H1(_),A=new X1(_),b=new ex(R,z),Tt=new k1(R,y,b,z),G=new j1(R,b,L,Tt),Y=new Q1(R,G,b,L),yt=new J1(R,z,F),gt=new G1(I),K=new pM(_,Q,A,y,z,Tt,gt),it=new BM(_,I),Mt=new _M,_t=new bM(y,z),Pt=new F1(_,Q,A,B,Y,p,l),St=new CM(_,Y,z),Lt=new zM(R,L,z,B),Ut=new B1(R,y,L,z),Ot=new Y1(R,y,L,z),L.programs=K.programs,_.capabilities=z,_.extensions=y,_.properties=I,_.renderLists=Mt,_.shadowMap=St,_.state=B,_.info=L}Xt();const Bt=new FM(_,R);this.xr=Bt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const k=y.get("WEBGL_lose_context");k&&k.loseContext()},this.forceContextRestore=function(){const k=y.get("WEBGL_lose_context");k&&k.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(k){k!==void 0&&(q=k,this.setSize(H,J,!1))},this.getSize=function(k){return k.set(H,J)},this.setSize=function(k,lt,ft=!0){if(Bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=k,J=lt,e.width=Math.floor(k*q),e.height=Math.floor(lt*q),ft===!0&&(e.style.width=k+"px",e.style.height=lt+"px"),this.setViewport(0,0,k,lt)},this.getDrawingBufferSize=function(k){return k.set(H*q,J*q).floor()},this.setDrawingBufferSize=function(k,lt,ft){H=k,J=lt,q=ft,e.width=Math.floor(k*ft),e.height=Math.floor(lt*ft),this.setViewport(0,0,k,lt)},this.getCurrentViewport=function(k){return k.copy(w)},this.getViewport=function(k){return k.copy(st)},this.setViewport=function(k,lt,ft,dt){k.isVector4?st.set(k.x,k.y,k.z,k.w):st.set(k,lt,ft,dt),B.viewport(w.copy(st).multiplyScalar(q).round())},this.getScissor=function(k){return k.copy(j)},this.setScissor=function(k,lt,ft,dt){k.isVector4?j.set(k.x,k.y,k.z,k.w):j.set(k,lt,ft,dt),B.scissor(D.copy(j).multiplyScalar(q).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(k){B.setScissorTest($=k)},this.setOpaqueSort=function(k){tt=k},this.setTransparentSort=function(k){Z=k},this.getClearColor=function(k){return k.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(k=!0,lt=!0,ft=!0){let dt=0;if(k){let ut=!1;if(C!==null){const Rt=C.texture.format;ut=Rt===ed||Rt===td||Rt===Qh}if(ut){const Rt=C.texture.type,It=Rt===Si||Rt===_i||Rt===Fl||Rt===Yi||Rt===Kh||Rt===Jh,Nt=Pt.getClearColor(),Ft=Pt.getClearAlpha(),qt=Nt.r,zt=Nt.g,Gt=Nt.b;It?(d[0]=qt,d[1]=zt,d[2]=Gt,d[3]=Ft,R.clearBufferuiv(R.COLOR,0,d)):(v[0]=qt,v[1]=zt,v[2]=Gt,v[3]=Ft,R.clearBufferiv(R.COLOR,0,v))}else dt|=R.COLOR_BUFFER_BIT}lt&&(dt|=R.DEPTH_BUFFER_BIT),ft&&(dt|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(dt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ae,!1),e.removeEventListener("webglcontextrestored",et,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),Mt.dispose(),_t.dispose(),I.dispose(),Q.dispose(),A.dispose(),Y.dispose(),Tt.dispose(),Lt.dispose(),K.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",an),Bt.removeEventListener("sessionend",le),pt&&(pt.dispose(),pt=null),ke.stop()};function ae(k){k.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function et(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const k=L.autoReset,lt=St.enabled,ft=St.autoUpdate,dt=St.needsUpdate,ut=St.type;Xt(),L.autoReset=k,St.enabled=lt,St.autoUpdate=ft,St.needsUpdate=dt,St.type=ut}function Et(k){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function ct(k){const lt=k.target;lt.removeEventListener("dispose",ct),bt(lt)}function bt(k){At(k),I.remove(k)}function At(k){const lt=I.get(k).programs;lt!==void 0&&(lt.forEach(function(ft){K.releaseProgram(ft)}),k.isShaderMaterial&&K.releaseShaderCache(k))}this.renderBufferDirect=function(k,lt,ft,dt,ut,Rt){lt===null&&(lt=mt);const It=ut.isMesh&&ut.matrixWorld.determinant()<0,Nt=Cd(k,lt,ft,dt,ut);B.setMaterial(dt,It);let Ft=ft.index,qt=1;if(dt.wireframe===!0){if(Ft=G.getWireframeAttribute(ft),Ft===void 0)return;qt=2}const zt=ft.drawRange,Gt=ft.attributes.position;let _e=zt.start*qt,Je=(zt.start+zt.count)*qt;Rt!==null&&(_e=Math.max(_e,Rt.start*qt),Je=Math.min(Je,(Rt.start+Rt.count)*qt)),Ft!==null?(_e=Math.max(_e,0),Je=Math.min(Je,Ft.count)):Gt!=null&&(_e=Math.max(_e,0),Je=Math.min(Je,Gt.count));const Te=Je-_e;if(Te<0||Te===1/0)return;Tt.setup(ut,dt,Nt,ft,Ft);let On,de=Ut;if(Ft!==null&&(On=b.get(Ft),de=Ot,de.setIndex(On)),ut.isMesh)dt.wireframe===!0?(B.setLineWidth(dt.wireframeLinewidth*vt()),de.setMode(R.LINES)):de.setMode(R.TRIANGLES);else if(ut.isLine){let Ht=dt.linewidth;Ht===void 0&&(Ht=1),B.setLineWidth(Ht*vt()),ut.isLineSegments?de.setMode(R.LINES):ut.isLineLoop?de.setMode(R.LINE_LOOP):de.setMode(R.LINE_STRIP)}else ut.isPoints?de.setMode(R.POINTS):ut.isSprite&&de.setMode(R.TRIANGLES);if(ut.isBatchedMesh)de.renderMultiDraw(ut._multiDrawStarts,ut._multiDrawCounts,ut._multiDrawCount);else if(ut.isInstancedMesh)de.renderInstances(_e,Te,ut.count);else if(ft.isInstancedBufferGeometry){const Ht=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Ga=Math.min(ft.instanceCount,Ht);de.renderInstances(_e,Te,Ga)}else de.render(_e,Te)};function Yt(k,lt,ft){k.transparent===!0&&k.side===Zn&&k.forceSinglePass===!1?(k.side=Ke,k.needsUpdate=!0,As(k,lt,ft),k.side=bi,k.needsUpdate=!0,As(k,lt,ft),k.side=Zn):As(k,lt,ft)}this.compile=function(k,lt,ft=null){ft===null&&(ft=k),m=_t.get(ft),m.init(),x.push(m),ft.traverseVisible(function(ut){ut.isLight&&ut.layers.test(lt.layers)&&(m.pushLight(ut),ut.castShadow&&m.pushShadow(ut))}),k!==ft&&k.traverseVisible(function(ut){ut.isLight&&ut.layers.test(lt.layers)&&(m.pushLight(ut),ut.castShadow&&m.pushShadow(ut))}),m.setupLights(_._useLegacyLights);const dt=new Set;return k.traverse(function(ut){const Rt=ut.material;if(Rt)if(Array.isArray(Rt))for(let It=0;It<Rt.length;It++){const Nt=Rt[It];Yt(Nt,ft,ut),dt.add(Nt)}else Yt(Rt,ft,ut),dt.add(Rt)}),x.pop(),m=null,dt},this.compileAsync=function(k,lt,ft=null){const dt=this.compile(k,lt,ft);return new Promise(ut=>{function Rt(){if(dt.forEach(function(It){I.get(It).currentProgram.isReady()&&dt.delete(It)}),dt.size===0){ut(k);return}setTimeout(Rt,10)}y.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let oe=null;function Ce(k){oe&&oe(k)}function an(){ke.stop()}function le(){ke.start()}const ke=new _d;ke.setAnimationLoop(Ce),typeof self<"u"&&ke.setContext(self),this.setAnimationLoop=function(k){oe=k,Bt.setAnimationLoop(k),k===null?ke.stop():ke.start()},Bt.addEventListener("sessionstart",an),Bt.addEventListener("sessionend",le),this.render=function(k,lt){if(lt!==void 0&&lt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),lt.parent===null&&lt.matrixWorldAutoUpdate===!0&&lt.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(lt),lt=Bt.getCamera()),k.isScene===!0&&k.onBeforeRender(_,k,lt,C),m=_t.get(k,x.length),m.init(),x.push(m),nt.multiplyMatrices(lt.projectionMatrix,lt.matrixWorldInverse),xt.setFromProjectionMatrix(nt),W=this.localClippingEnabled,V=gt.init(this.clippingPlanes,W),g=Mt.get(k,h.length),g.init(),h.push(g),Mn(k,lt,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(tt,Z),this.info.render.frame++,V===!0&&gt.beginShadows();const ft=m.state.shadowsArray;if(St.render(ft,k,lt),V===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1)&&Pt.render(g,k),m.setupLights(_._useLegacyLights),lt.isArrayCamera){const dt=lt.cameras;for(let ut=0,Rt=dt.length;ut<Rt;ut++){const It=dt[ut];Gl(g,k,It,It.viewport)}}else Gl(g,k,lt);C!==null&&(F.updateMultisampleRenderTarget(C),F.updateRenderTargetMipmap(C)),k.isScene===!0&&k.onAfterRender(_,k,lt),Tt.resetDefaultState(),N=-1,O=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function Mn(k,lt,ft,dt){if(k.visible===!1)return;if(k.layers.test(lt.layers)){if(k.isGroup)ft=k.renderOrder;else if(k.isLOD)k.autoUpdate===!0&&k.update(lt);else if(k.isLight)m.pushLight(k),k.castShadow&&m.pushShadow(k);else if(k.isSprite){if(!k.frustumCulled||xt.intersectsSprite(k)){dt&&rt.setFromMatrixPosition(k.matrixWorld).applyMatrix4(nt);const It=Y.update(k),Nt=k.material;Nt.visible&&g.push(k,It,Nt,ft,rt.z,null)}}else if((k.isMesh||k.isLine||k.isPoints)&&(!k.frustumCulled||xt.intersectsObject(k))){const It=Y.update(k),Nt=k.material;if(dt&&(k.boundingSphere!==void 0?(k.boundingSphere===null&&k.computeBoundingSphere(),rt.copy(k.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),rt.copy(It.boundingSphere.center)),rt.applyMatrix4(k.matrixWorld).applyMatrix4(nt)),Array.isArray(Nt)){const Ft=It.groups;for(let qt=0,zt=Ft.length;qt<zt;qt++){const Gt=Ft[qt],_e=Nt[Gt.materialIndex];_e&&_e.visible&&g.push(k,It,_e,ft,rt.z,Gt)}}else Nt.visible&&g.push(k,It,Nt,ft,rt.z,null)}}const Rt=k.children;for(let It=0,Nt=Rt.length;It<Nt;It++)Mn(Rt[It],lt,ft,dt)}function Gl(k,lt,ft,dt){const ut=k.opaque,Rt=k.transmissive,It=k.transparent;m.setupLightsView(ft),V===!0&&gt.setGlobalState(_.clippingPlanes,ft),Rt.length>0&&Ad(ut,Rt,lt,ft),dt&&B.viewport(w.copy(dt)),ut.length>0&&Ts(ut,lt,ft),Rt.length>0&&Ts(Rt,lt,ft),It.length>0&&Ts(It,lt,ft),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function Ad(k,lt,ft,dt){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;const Rt=z.isWebGL2;pt===null&&(pt=new Ki(1,1,{generateMipmaps:!0,type:y.has("EXT_color_buffer_half_float")?_s:Si,minFilter:Wi,samples:Rt?4:0})),_.getDrawingBufferSize(at),Rt?pt.setSize(at.x,at.y):pt.setSize(dl(at.x),dl(at.y));const It=_.getRenderTarget();_.setRenderTarget(pt),_.getClearColor(U),S=_.getClearAlpha(),S<1&&_.setClearColor(16777215,.5),_.clear();const Nt=_.toneMapping;_.toneMapping=yi,Ts(k,ft,dt),F.updateMultisampleRenderTarget(pt),F.updateRenderTargetMipmap(pt);let Ft=!1;for(let qt=0,zt=lt.length;qt<zt;qt++){const Gt=lt[qt],_e=Gt.object,Je=Gt.geometry,Te=Gt.material,On=Gt.group;if(Te.side===Zn&&_e.layers.test(dt.layers)){const de=Te.side;Te.side=Ke,Te.needsUpdate=!0,Hl(_e,ft,dt,Je,Te,On),Te.side=de,Te.needsUpdate=!0,Ft=!0}}Ft===!0&&(F.updateMultisampleRenderTarget(pt),F.updateRenderTargetMipmap(pt)),_.setRenderTarget(It),_.setClearColor(U,S),_.toneMapping=Nt}function Ts(k,lt,ft){const dt=lt.isScene===!0?lt.overrideMaterial:null;for(let ut=0,Rt=k.length;ut<Rt;ut++){const It=k[ut],Nt=It.object,Ft=It.geometry,qt=dt===null?It.material:dt,zt=It.group;Nt.layers.test(ft.layers)&&Hl(Nt,lt,ft,Ft,qt,zt)}}function Hl(k,lt,ft,dt,ut,Rt){k.onBeforeRender(_,lt,ft,dt,ut,Rt),k.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),ut.onBeforeRender(_,lt,ft,dt,k,Rt),ut.transparent===!0&&ut.side===Zn&&ut.forceSinglePass===!1?(ut.side=Ke,ut.needsUpdate=!0,_.renderBufferDirect(ft,lt,dt,ut,k,Rt),ut.side=bi,ut.needsUpdate=!0,_.renderBufferDirect(ft,lt,dt,ut,k,Rt),ut.side=Zn):_.renderBufferDirect(ft,lt,dt,ut,k,Rt),k.onAfterRender(_,lt,ft,dt,ut,Rt)}function As(k,lt,ft){lt.isScene!==!0&&(lt=mt);const dt=I.get(k),ut=m.state.lights,Rt=m.state.shadowsArray,It=ut.state.version,Nt=K.getParameters(k,ut.state,Rt,lt,ft),Ft=K.getProgramCacheKey(Nt);let qt=dt.programs;dt.environment=k.isMeshStandardMaterial?lt.environment:null,dt.fog=lt.fog,dt.envMap=(k.isMeshStandardMaterial?A:Q).get(k.envMap||dt.environment),dt.envMapRotation=dt.environment!==null&&k.envMap===null?lt.environmentRotation:k.envMapRotation,qt===void 0&&(k.addEventListener("dispose",ct),qt=new Map,dt.programs=qt);let zt=qt.get(Ft);if(zt!==void 0){if(dt.currentProgram===zt&&dt.lightsStateVersion===It)return Wl(k,Nt),zt}else Nt.uniforms=K.getUniforms(k),k.onBuild(ft,Nt,_),k.onBeforeCompile(Nt,_),zt=K.acquireProgram(Nt,Ft),qt.set(Ft,zt),dt.uniforms=Nt.uniforms;const Gt=dt.uniforms;return(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)&&(Gt.clippingPlanes=gt.uniform),Wl(k,Nt),dt.needsLights=Pd(k),dt.lightsStateVersion=It,dt.needsLights&&(Gt.ambientLightColor.value=ut.state.ambient,Gt.lightProbe.value=ut.state.probe,Gt.directionalLights.value=ut.state.directional,Gt.directionalLightShadows.value=ut.state.directionalShadow,Gt.spotLights.value=ut.state.spot,Gt.spotLightShadows.value=ut.state.spotShadow,Gt.rectAreaLights.value=ut.state.rectArea,Gt.ltc_1.value=ut.state.rectAreaLTC1,Gt.ltc_2.value=ut.state.rectAreaLTC2,Gt.pointLights.value=ut.state.point,Gt.pointLightShadows.value=ut.state.pointShadow,Gt.hemisphereLights.value=ut.state.hemi,Gt.directionalShadowMap.value=ut.state.directionalShadowMap,Gt.directionalShadowMatrix.value=ut.state.directionalShadowMatrix,Gt.spotShadowMap.value=ut.state.spotShadowMap,Gt.spotLightMatrix.value=ut.state.spotLightMatrix,Gt.spotLightMap.value=ut.state.spotLightMap,Gt.pointShadowMap.value=ut.state.pointShadowMap,Gt.pointShadowMatrix.value=ut.state.pointShadowMatrix),dt.currentProgram=zt,dt.uniformsList=null,zt}function Vl(k){if(k.uniformsList===null){const lt=k.currentProgram.getUniforms();k.uniformsList=aa.seqWithValue(lt.seq,k.uniforms)}return k.uniformsList}function Wl(k,lt){const ft=I.get(k);ft.outputColorSpace=lt.outputColorSpace,ft.batching=lt.batching,ft.instancing=lt.instancing,ft.instancingColor=lt.instancingColor,ft.instancingMorph=lt.instancingMorph,ft.skinning=lt.skinning,ft.morphTargets=lt.morphTargets,ft.morphNormals=lt.morphNormals,ft.morphColors=lt.morphColors,ft.morphTargetsCount=lt.morphTargetsCount,ft.numClippingPlanes=lt.numClippingPlanes,ft.numIntersection=lt.numClipIntersection,ft.vertexAlphas=lt.vertexAlphas,ft.vertexTangents=lt.vertexTangents,ft.toneMapping=lt.toneMapping}function Cd(k,lt,ft,dt,ut){lt.isScene!==!0&&(lt=mt),F.resetTextureUnits();const Rt=lt.fog,It=dt.isMeshStandardMaterial?lt.environment:null,Nt=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ei,Ft=(dt.isMeshStandardMaterial?A:Q).get(dt.envMap||It),qt=dt.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,zt=!!ft.attributes.tangent&&(!!dt.normalMap||dt.anisotropy>0),Gt=!!ft.morphAttributes.position,_e=!!ft.morphAttributes.normal,Je=!!ft.morphAttributes.color;let Te=yi;dt.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Te=_.toneMapping);const On=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,de=On!==void 0?On.length:0,Ht=I.get(dt),Ga=m.state.lights;if(V===!0&&(W===!0||k!==O)){const on=k===O&&dt.id===N;gt.setState(dt,k,on)}let he=!1;dt.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Ga.state.version||Ht.outputColorSpace!==Nt||ut.isBatchedMesh&&Ht.batching===!1||!ut.isBatchedMesh&&Ht.batching===!0||ut.isInstancedMesh&&Ht.instancing===!1||!ut.isInstancedMesh&&Ht.instancing===!0||ut.isSkinnedMesh&&Ht.skinning===!1||!ut.isSkinnedMesh&&Ht.skinning===!0||ut.isInstancedMesh&&Ht.instancingColor===!0&&ut.instanceColor===null||ut.isInstancedMesh&&Ht.instancingColor===!1&&ut.instanceColor!==null||ut.isInstancedMesh&&Ht.instancingMorph===!0&&ut.morphTexture===null||ut.isInstancedMesh&&Ht.instancingMorph===!1&&ut.morphTexture!==null||Ht.envMap!==Ft||dt.fog===!0&&Ht.fog!==Rt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==gt.numPlanes||Ht.numIntersection!==gt.numIntersection)||Ht.vertexAlphas!==qt||Ht.vertexTangents!==zt||Ht.morphTargets!==Gt||Ht.morphNormals!==_e||Ht.morphColors!==Je||Ht.toneMapping!==Te||z.isWebGL2===!0&&Ht.morphTargetsCount!==de)&&(he=!0):(he=!0,Ht.__version=dt.version);let wi=Ht.currentProgram;he===!0&&(wi=As(dt,lt,ut));let Xl=!1,zr=!1,Ha=!1;const Le=wi.getUniforms(),Ti=Ht.uniforms;if(B.useProgram(wi.program)&&(Xl=!0,zr=!0,Ha=!0),dt.id!==N&&(N=dt.id,zr=!0),Xl||O!==k){Le.setValue(R,"projectionMatrix",k.projectionMatrix),Le.setValue(R,"viewMatrix",k.matrixWorldInverse);const on=Le.map.cameraPosition;on!==void 0&&on.setValue(R,rt.setFromMatrixPosition(k.matrixWorld)),z.logarithmicDepthBuffer&&Le.setValue(R,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2)),(dt.isMeshPhongMaterial||dt.isMeshToonMaterial||dt.isMeshLambertMaterial||dt.isMeshBasicMaterial||dt.isMeshStandardMaterial||dt.isShaderMaterial)&&Le.setValue(R,"isOrthographic",k.isOrthographicCamera===!0),O!==k&&(O=k,zr=!0,Ha=!0)}if(ut.isSkinnedMesh){Le.setOptional(R,ut,"bindMatrix"),Le.setOptional(R,ut,"bindMatrixInverse");const on=ut.skeleton;on&&(z.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),Le.setValue(R,"boneTexture",on.boneTexture,F)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ut.isBatchedMesh&&(Le.setOptional(R,ut,"batchingTexture"),Le.setValue(R,"batchingTexture",ut._matricesTexture,F));const Va=ft.morphAttributes;if((Va.position!==void 0||Va.normal!==void 0||Va.color!==void 0&&z.isWebGL2===!0)&&yt.update(ut,ft,wi),(zr||Ht.receiveShadow!==ut.receiveShadow)&&(Ht.receiveShadow=ut.receiveShadow,Le.setValue(R,"receiveShadow",ut.receiveShadow)),dt.isMeshGouraudMaterial&&dt.envMap!==null&&(Ti.envMap.value=Ft,Ti.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),zr&&(Le.setValue(R,"toneMappingExposure",_.toneMappingExposure),Ht.needsLights&&Rd(Ti,Ha),Rt&&dt.fog===!0&&it.refreshFogUniforms(Ti,Rt),it.refreshMaterialUniforms(Ti,dt,q,J,pt),aa.upload(R,Vl(Ht),Ti,F)),dt.isShaderMaterial&&dt.uniformsNeedUpdate===!0&&(aa.upload(R,Vl(Ht),Ti,F),dt.uniformsNeedUpdate=!1),dt.isSpriteMaterial&&Le.setValue(R,"center",ut.center),Le.setValue(R,"modelViewMatrix",ut.modelViewMatrix),Le.setValue(R,"normalMatrix",ut.normalMatrix),Le.setValue(R,"modelMatrix",ut.matrixWorld),dt.isShaderMaterial||dt.isRawShaderMaterial){const on=dt.uniformsGroups;for(let Wa=0,Ld=on.length;Wa<Ld;Wa++)if(z.isWebGL2){const ql=on[Wa];Lt.update(ql,wi),Lt.bind(ql,wi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wi}function Rd(k,lt){k.ambientLightColor.needsUpdate=lt,k.lightProbe.needsUpdate=lt,k.directionalLights.needsUpdate=lt,k.directionalLightShadows.needsUpdate=lt,k.pointLights.needsUpdate=lt,k.pointLightShadows.needsUpdate=lt,k.spotLights.needsUpdate=lt,k.spotLightShadows.needsUpdate=lt,k.rectAreaLights.needsUpdate=lt,k.hemisphereLights.needsUpdate=lt}function Pd(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(k,lt,ft){I.get(k.texture).__webglTexture=lt,I.get(k.depthTexture).__webglTexture=ft;const dt=I.get(k);dt.__hasExternalTextures=!0,dt.__autoAllocateDepthBuffer=ft===void 0,dt.__autoAllocateDepthBuffer||y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),dt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(k,lt){const ft=I.get(k);ft.__webglFramebuffer=lt,ft.__useDefaultFramebuffer=lt===void 0},this.setRenderTarget=function(k,lt=0,ft=0){C=k,E=lt,P=ft;let dt=!0,ut=null,Rt=!1,It=!1;if(k){const Ft=I.get(k);Ft.__useDefaultFramebuffer!==void 0?(B.bindFramebuffer(R.FRAMEBUFFER,null),dt=!1):Ft.__webglFramebuffer===void 0?F.setupRenderTarget(k):Ft.__hasExternalTextures&&F.rebindTextures(k,I.get(k.texture).__webglTexture,I.get(k.depthTexture).__webglTexture);const qt=k.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(It=!0);const zt=I.get(k).__webglFramebuffer;k.isWebGLCubeRenderTarget?(Array.isArray(zt[lt])?ut=zt[lt][ft]:ut=zt[lt],Rt=!0):z.isWebGL2&&k.samples>0&&F.useMultisampledRTT(k)===!1?ut=I.get(k).__webglMultisampledFramebuffer:Array.isArray(zt)?ut=zt[ft]:ut=zt,w.copy(k.viewport),D.copy(k.scissor),T=k.scissorTest}else w.copy(st).multiplyScalar(q).floor(),D.copy(j).multiplyScalar(q).floor(),T=$;if(B.bindFramebuffer(R.FRAMEBUFFER,ut)&&z.drawBuffers&&dt&&B.drawBuffers(k,ut),B.viewport(w),B.scissor(D),B.setScissorTest(T),Rt){const Ft=I.get(k.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft.__webglTexture,ft)}else if(It){const Ft=I.get(k.texture),qt=lt||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ft.__webglTexture,ft||0,qt)}N=-1},this.readRenderTargetPixels=function(k,lt,ft,dt,ut,Rt,It){if(!(k&&k.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=I.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&It!==void 0&&(Nt=Nt[It]),Nt){B.bindFramebuffer(R.FRAMEBUFFER,Nt);try{const Ft=k.texture,qt=Ft.format,zt=Ft.type;if(qt!==gn&&Ct.convert(qt)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Gt=zt===_s&&(y.has("EXT_color_buffer_half_float")||z.isWebGL2&&y.has("EXT_color_buffer_float"));if(zt!==Si&&Ct.convert(zt)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(zt===Kn&&(z.isWebGL2||y.has("OES_texture_float")||y.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}lt>=0&&lt<=k.width-dt&&ft>=0&&ft<=k.height-ut&&R.readPixels(lt,ft,dt,ut,Ct.convert(qt),Ct.convert(zt),Rt)}finally{const Ft=C!==null?I.get(C).__webglFramebuffer:null;B.bindFramebuffer(R.FRAMEBUFFER,Ft)}}},this.copyFramebufferToTexture=function(k,lt,ft=0){const dt=Math.pow(2,-ft),ut=Math.floor(lt.image.width*dt),Rt=Math.floor(lt.image.height*dt);F.setTexture2D(lt,0),R.copyTexSubImage2D(R.TEXTURE_2D,ft,0,0,k.x,k.y,ut,Rt),B.unbindTexture()},this.copyTextureToTexture=function(k,lt,ft,dt=0){const ut=lt.image.width,Rt=lt.image.height,It=Ct.convert(ft.format),Nt=Ct.convert(ft.type);F.setTexture2D(ft,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,ft.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ft.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,ft.unpackAlignment),lt.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,dt,k.x,k.y,ut,Rt,It,Nt,lt.image.data):lt.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,dt,k.x,k.y,lt.mipmaps[0].width,lt.mipmaps[0].height,It,lt.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,dt,k.x,k.y,It,Nt,lt.image),dt===0&&ft.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),B.unbindTexture()},this.copyTextureToTexture3D=function(k,lt,ft,dt,ut=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Rt=Math.round(k.max.x-k.min.x),It=Math.round(k.max.y-k.min.y),Nt=k.max.z-k.min.z+1,Ft=Ct.convert(dt.format),qt=Ct.convert(dt.type);let zt;if(dt.isData3DTexture)F.setTexture3D(dt,0),zt=R.TEXTURE_3D;else if(dt.isDataArrayTexture||dt.isCompressedArrayTexture)F.setTexture2DArray(dt,0),zt=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,dt.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,dt.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,dt.unpackAlignment);const Gt=R.getParameter(R.UNPACK_ROW_LENGTH),_e=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Je=R.getParameter(R.UNPACK_SKIP_PIXELS),Te=R.getParameter(R.UNPACK_SKIP_ROWS),On=R.getParameter(R.UNPACK_SKIP_IMAGES),de=ft.isCompressedTexture?ft.mipmaps[ut]:ft.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,de.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,de.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,k.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,k.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,k.min.z),ft.isDataTexture||ft.isData3DTexture?R.texSubImage3D(zt,ut,lt.x,lt.y,lt.z,Rt,It,Nt,Ft,qt,de.data):dt.isCompressedArrayTexture?R.compressedTexSubImage3D(zt,ut,lt.x,lt.y,lt.z,Rt,It,Nt,Ft,de.data):R.texSubImage3D(zt,ut,lt.x,lt.y,lt.z,Rt,It,Nt,Ft,qt,de),R.pixelStorei(R.UNPACK_ROW_LENGTH,Gt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,_e),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Je),R.pixelStorei(R.UNPACK_SKIP_ROWS,Te),R.pixelStorei(R.UNPACK_SKIP_IMAGES,On),ut===0&&dt.generateMipmaps&&R.generateMipmap(zt),B.unbindTexture()},this.initTexture=function(k){k.isCubeTexture?F.setTextureCube(k,0):k.isData3DTexture?F.setTexture3D(k,0):k.isDataArrayTexture||k.isCompressedArrayTexture?F.setTexture2DArray(k,0):F.setTexture2D(k,0),B.unbindTexture()},this.resetState=function(){E=0,P=0,C=null,B.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===kl?"display-p3":"srgb",e.unpackColorSpace=ne.workingColorSpace===ka?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class GM extends wd{}GM.prototype.isWebGL1Renderer=!0;class HM extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ol);class VM{constructor(t,e){this.effectCanvas=t,this.originalCanvas=e,this.renderer=null,this.scene=null,this.camera=null,this.material=null,this.texture=null,this.mesh=null,this.params={horizontalChromatic:70,distortion:50,speed:60,size:60,blur:60},this.time=0,this.animationId=null,this.currentImage=null,this.compareMode=!1}init(){this.scene=new HM,this.camera=new vd(-1,1,1,-1,0,1),this.renderer=new wd({canvas:this.effectCanvas,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.createMaterial();const t=new ws(2,2);this.mesh=new In(t,this.material),this.scene.add(this.mesh),this.animate(),window.addEventListener("resize",()=>this.handleResize())}createMaterial(){this.material=new ri({uniforms:{uTexture:{value:null},uTime:{value:0},uHorizontalChromatic:{value:.7},uDistortion:{value:.5},uSpeed:{value:.6},uSize:{value:.6},uBlur:{value:.6},uResolution:{value:new Kt(1,1)},uTextureResolution:{value:new Kt(1,1)}},vertexShader:`
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
      `})}loadImage(t){this.currentImage=t,this.texture&&this.texture.dispose(),this.texture=new qe(t),this.texture.needsUpdate=!0,this.material.uniforms.uTexture.value=this.texture,this.material.uniforms.uTextureResolution.value.set(t.width,t.height),this.updateCanvasSize(t.width,t.height),this.compareMode&&this.originalCanvas&&this.drawOriginalImage(t)}drawOriginalImage(t){if(!this.originalCanvas)return;const e=this.originalCanvas.getContext("2d");this.originalCanvas.width=t.width,this.originalCanvas.height=t.height,e.drawImage(t,0,0)}updateCanvasSize(t,e){const i=this.effectCanvas.parentElement;if(!i)return;const r=i.clientWidth-48,s=i.clientHeight-48,o=Math.min(r/t,s/e,1),a=Math.floor(t*o),l=Math.floor(e*o);this.effectCanvas.style.width=`${a}px`,this.effectCanvas.style.height=`${l}px`,this.renderer.setSize(t,e,!1),this.material.uniforms.uResolution.value.set(t,e),this.compareMode&&this.originalCanvas&&(this.originalCanvas.style.width=`${a}px`,this.originalCanvas.style.height=`${l}px`)}updateParams(t){this.params={...t},this.material.uniforms.uHorizontalChromatic.value=t.horizontalChromatic/100,this.material.uniforms.uDistortion.value=t.distortion/100,this.material.uniforms.uSpeed.value=t.speed/100,this.material.uniforms.uSize.value=t.size/100,this.material.uniforms.uBlur.value=t.blur/100}setCompareMode(t){this.compareMode=t,t&&this.currentImage&&this.originalCanvas&&(this.drawOriginalImage(this.currentImage),this.updateCanvasSize(this.currentImage.width,this.currentImage.height))}animate(){this.animationId=requestAnimationFrame(()=>this.animate()),this.time+=.016,this.material.uniforms.uTime.value=this.time,this.renderer.render(this.scene,this.camera)}handleResize(){this.currentImage&&this.updateCanvasSize(this.currentImage.width,this.currentImage.height)}dispose(){this.animationId&&cancelAnimationFrame(this.animationId),this.texture&&this.texture.dispose(),this.material&&this.material.dispose(),this.renderer&&this.renderer.dispose(),window.removeEventListener("resize",()=>this.handleResize())}}class fe{constructor(t){this.canvas=t,this.ctx=t.getContext("2d"),this.sourceImage=null,this.params={},this.animFrame=null,this.isAnimating=!1}loadImage(t){this.sourceImage=t,this.canvas.width=t.naturalWidth||t.width,this.canvas.height=t.naturalHeight||t.height,this.render()}updateParams(t){this.params={...this.params,...t},this.render()}render(){this.sourceImage&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.sourceImage,0,0,this.canvas.width,this.canvas.height),this.apply())}apply(){}destroy(){this.animFrame&&cancelAnimationFrame(this.animFrame)}getAvgColor(t,e,i,r,s,o,a){let l=0,u=0,c=0,f=0,p=0;const d=Math.max(0,Math.floor(e)),v=Math.max(0,Math.floor(i)),g=Math.min(o-1,Math.floor(e+r)),m=Math.min(a-1,Math.floor(i+s));for(let h=v;h<=m;h++)for(let x=d;x<=g;x++){const _=(h*o+x)*4;l+=t[_],u+=t[_+1],c+=t[_+2],f+=t[_+3],p++}return p===0?[0,0,0,255]:[l/p,u/p,c/p,f/p]}}class WM extends fe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(2,Math.round(this.params.intensity/100*60)+2),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;t.clearRect(0,0,r,s);for(let c=0;c<s;c+=o)for(let f=0;f<r;f+=o){const[p,d,v,g]=this.getAvgColor(u,f,c,o-1,o-1,r,s);t.fillStyle=`rgba(${p|0},${d|0},${v|0},${g/255})`,t.fillRect(f,c,o,o)}}}class XM extends fe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(4,Math.round(this.params.intensity/100*80)+4),a=Math.round(this.params.intensity/100*3)+1;t.clearRect(0,0,r,s);const l=document.createElement("canvas"),u=Math.max(4,o);l.width=Math.max(1,Math.ceil(r/u)),l.height=Math.max(1,Math.ceil(s/u));const c=l.getContext("2d");c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high",c.drawImage(i,0,0,l.width,l.height),t.imageSmoothingEnabled=!0,t.imageSmoothingQuality="high",t.drawImage(l,0,0,r,s),t.filter=`blur(${a*2}px)`,t.globalAlpha=.3,t.drawImage(i,0,0,r,s),t.filter="none",t.globalAlpha=1}}class qM extends fe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(4,Math.round(this.params.intensity/100*56)+8),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;t.clearRect(0,0,r,s);for(let c=0;c<s;c+=o)for(let f=0;f<r;f+=o){const[p,d,v]=this.getAvgColor(u,f,c,o-1,o-1,r,s),g=p|0,m=d|0,h=v|0;t.fillStyle=`rgb(${g},${m},${h})`,t.fillRect(f,c,o,o),t.fillStyle="rgba(0,0,0,0.35)",t.fillRect(f+o-2,c,2,o),t.fillRect(f,c+o-2,o,2),t.fillStyle="rgba(255,255,255,0.2)",t.fillRect(f,c,o-2,2),t.fillRect(f,c,2,o-2);const x=f+o/2,_=c+o/2,M=o*.28,E=t.createRadialGradient(x-M*.3,_-M*.3,M*.1,x,_,M);E.addColorStop(0,"rgba(255,255,255,0.5)"),E.addColorStop(.5,`rgba(${g},${m},${h},0.9)`),E.addColorStop(1,"rgba(0,0,0,0.3)"),t.beginPath(),t.arc(x,_,M,0,Math.PI*2),t.fillStyle=E,t.fill()}}}class jM extends fe{constructor(t){super(t),this.params={intensity:50},this._cachedSeeds=null,this._cachedSize=-1}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(8,Math.round(this.params.intensity/100*60)+8),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;this._cachedSize!==o&&(this._cachedSeeds=this._genSeeds(r,s,o),this._cachedSize=o);const c=this._cachedSeeds,f=c.map(([p,d])=>{const[v,g,m]=this.getAvgColor(u,p-o/2,d-o/2,o,o,r,s);return[v|0,g|0,m|0]});t.clearRect(0,0,r,s),this._drawVoronoi(t,c,f,r,s,o)}_genSeeds(t,e,i){const r=[],s=Math.ceil(t/i)+1,o=Math.ceil(e/i)+1;for(let a=0;a<o;a++)for(let l=0;l<s;l++){const u=i*.7,c=l*i+(this._hash(l,a,0)-.5)*u,f=a*i+(this._hash(l,a,1)-.5)*u;r.push([c,f])}return r}_hash(t,e,i){let r=Math.sin(t*127.1+e*311.7+i*74.3)*43758.5453;return r-Math.floor(r)}_drawVoronoi(t,e,i,r,s,o){const a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d"),u=l.createImageData(r,s),c=u.data;for(let m=0;m<s;m++)for(let h=0;h<r;h++){let x=1/0,_=0;const M=Math.round(h/o),E=Math.round(m/o);for(let w=-2;w<=2;w++)for(let D=-2;D<=2;D++){const T=M+D,U=E+w;if(T<0||U<0||T>=Math.ceil(r/o)+1||U>=Math.ceil(s/o)+1)continue;const S=U*(Math.ceil(r/o)+1)+T;if(S<0||S>=e.length)continue;const[H,J]=e[S],q=(h-H)**2+(m-J)**2;q<x&&(x=q,_=S)}const[P,C,N]=i[_],O=(m*r+h)*4;c[O]=P,c[O+1]=C,c[O+2]=N,c[O+3]=255}l.putImageData(u,0,0),t.drawImage(a,0,0);const f=l.getImageData(0,0,r,s).data,p=document.createElement("canvas");p.width=r,p.height=s;const d=p.getContext("2d"),v=d.createImageData(r,s),g=v.data;for(let m=1;m<s-1;m++)for(let h=1;h<r-1;h++){const x=(m*r+h)*4,_=(m*r+h+1)*4,M=((m+1)*r+h)*4;(f[x]!==f[_]||f[x+1]!==f[_+1]||f[x]!==f[M]||f[x+1]!==f[M+1])&&(g[x]=255,g[x+1]=255,g[x+2]=255,g[x+3]=200)}d.putImageData(v,0,0),t.drawImage(p,0,0)}}class YM extends fe{constructor(t){super(t),this.params={intensity:50},this._seeds=null,this._cachedSize=-1}_hash(t,e,i){let r=Math.sin(t*127.1+e*311.7+i*74.3)*43758.5453;return r-Math.floor(r)}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(6,Math.round(this.params.intensity/100*50)+6),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;if(this._cachedSize!==o){this._seeds=[];const c=Math.ceil(r/o)+1,f=Math.ceil(s/o)+1;for(let p=0;p<f;p++)for(let d=0;d<c;d++){const v=o*.65,g=d*o+(this._hash(d,p,0)-.5)*v,m=p*o+(this._hash(d,p,1)-.5)*v,h=o*(.35+this._hash(d,p,2)*.3);this._seeds.push({x:g,y:m,r:h})}this._cachedSize=o}t.fillStyle="#000",t.fillRect(0,0,r,s);for(const c of this._seeds){const[f,p,d]=this.getAvgColor(u,c.x-c.r,c.y-c.r,c.r*2,c.r*2,r,s),[v,g,m]=this._boostSat(f,p,d,1.5);t.beginPath(),t.arc(c.x,c.y,c.r,0,Math.PI*2),t.fillStyle=`rgb(${v|0},${g|0},${m|0})`,t.fill()}}_boostSat(t,e,i,r){const s=Math.max(t,e,i),o=Math.min(t,e,i),a=(s+o)/2;return[Math.min(255,Math.max(0,a+(t-a)*r)),Math.min(255,Math.max(0,a+(e-a)*r)),Math.min(255,Math.max(0,a+(i-a)*r))]}}class $M extends fe{constructor(t){super(t),this.params={intensity:50},this._cachedSize=-1,this._triangles=null}_hash(t,e,i){let r=Math.sin(t*127.1+e*311.7+i*74.3)*43758.5453;return r-Math.floor(r)}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(8,Math.round(this.params.intensity/100*60)+10),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;this._cachedSize!==o&&(this._triangles=this._genTriangles(r,s,o),this._cachedSize=o),t.clearRect(0,0,r,s);for(const c of this._triangles){const f=(c[0]+c[2]+c[4])/3,p=(c[1]+c[3]+c[5])/3,[d,v,g]=this.getAvgColor(u,f-o/2,p-o/2,o,o,r,s),[m,h,x]=this._boostSat(d,v,g,1.8);t.beginPath(),t.moveTo(c[0],c[1]),t.lineTo(c[2],c[3]),t.lineTo(c[4],c[5]),t.closePath(),t.fillStyle=`rgb(${m|0},${h|0},${x|0})`,t.fill()}}_genTriangles(t,e,i){const r=[],s=Math.ceil(t/i)+1,o=Math.ceil(e/i)+1,a=[];for(let l=0;l<=o;l++){a.push([]);for(let u=0;u<=s;u++){const c=(this._hash(u,l,0)-.5)*i*.7,f=(this._hash(u,l,1)-.5)*i*.7;a[l].push([u*i+c,l*i+f])}}for(let l=0;l<o;l++)for(let u=0;u<s;u++){const[c,f]=a[l][u],[p,d]=a[l][u+1],[v,g]=a[l+1][u],[m,h]=a[l+1][u+1];r.push([c,f,p,d,v,g]),r.push([p,d,m,h,v,g])}return r}_boostSat(t,e,i,r){const s=Math.max(t,e,i),o=Math.min(t,e,i),a=(s+o)/2;return[Math.min(255,Math.max(0,a+(t-a)*r)),Math.min(255,Math.max(0,a+(e-a)*r)),Math.min(255,Math.max(0,a+(i-a)*r))]}}class ZM extends fe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(20,Math.round(this.params.intensity/100*120)+20),a=document.createElement("canvas");a.width=r,a.height=s,a.getContext("2d").drawImage(i,0,0,r,s),t.clearRect(0,0,r,s);for(let u=0;u<s;u+=o)for(let c=0;c<r;c+=o){const f=Math.min(o,r-c),p=Math.min(o,s-u);t.save(),t.beginPath(),t.rect(c,u,f,p),t.clip(),t.transform(1.08,.04,-.04,1.08,c-c*.08+f*.02,u-u*.08+p*.02),t.drawImage(a,0,0,r,s),t.setTransform(1,0,0,1,0,0);const d=t.createLinearGradient(c,u,c+f,u+p);d.addColorStop(0,"rgba(255,255,255,0.18)"),d.addColorStop(.4,"rgba(255,255,255,0.04)"),d.addColorStop(1,"rgba(0,0,0,0.12)"),t.fillStyle=d,t.fillRect(c,u,f,p),t.restore(),t.strokeStyle="rgba(0,0,0,0.6)",t.lineWidth=1,t.strokeRect(c+.5,u+.5,f-1,p-1)}}}class KM extends fe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(16,Math.round(this.params.intensity/100*100)+16),a=o*.12,l=document.createElement("canvas");l.width=r,l.height=s;const u=l.getContext("2d");u.drawImage(i,0,0,r,s),u.getImageData(0,0,r,s).data,t.clearRect(0,0,r,s),t.filter="blur(2px)",t.drawImage(i,0,0,r,s),t.filter="none";for(let c=0;c<s;c+=o)for(let f=0;f<r;f+=o){const p=Math.min(o,r-f),d=Math.min(o,s-c),v=f+p/2,g=c+d/2;t.save(),t.beginPath(),this._roundRect(t,f+1,c+1,p-2,d-2,a),t.clip();const m=Math.sin(v/r*Math.PI*2)*o*.15,h=Math.cos(g/s*Math.PI*2)*o*.15;t.drawImage(l,m,h,r,s),t.fillStyle="rgba(255,255,255,0.06)",t.fillRect(f,c,p,d);const x=t.createLinearGradient(f,c,f,c+d*.4);x.addColorStop(0,"rgba(255,255,255,0.25)"),x.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=x,t.fillRect(f,c,p,d*.4),t.restore(),t.save(),t.beginPath(),this._roundRect(t,f+.5,c+.5,p-1,d-1,a),t.strokeStyle="rgba(255,255,255,0.25)",t.lineWidth=1,t.stroke(),t.restore()}}_roundRect(t,e,i,r,s,o){t.moveTo(e+o,i),t.lineTo(e+r-o,i),t.quadraticCurveTo(e+r,i,e+r,i+o),t.lineTo(e+r,i+s-o),t.quadraticCurveTo(e+r,i+s,e+r-o,i+s),t.lineTo(e+o,i+s),t.quadraticCurveTo(e,i+s,e,i+s-o),t.lineTo(e,i+o),t.quadraticCurveTo(e,i,e+o,i),t.closePath()}}class JM extends fe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(6,Math.round(this.params.intensity/100*60)+6),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;t.clearRect(0,0,r,s);const c=o*2,f=Math.sqrt(3)*o,p=c*.75,d=f,v=Math.ceil(r/p)+1,g=Math.ceil(s/d)+1;for(let m=0;m<g;m++)for(let h=0;h<v;h++){const x=h%2===0?0:f/2,_=h*p,M=m*d+x,[E,P,C]=this.getAvgColor(u,_-o,M-o,o*2,o*2,r,s);t.beginPath();for(let N=0;N<6;N++){const O=Math.PI/3*N-Math.PI/6,w=_+o*Math.cos(O),D=M+o*Math.sin(O);N===0?t.moveTo(w,D):t.lineTo(w,D)}t.closePath(),t.fillStyle=`rgb(${E|0},${P|0},${C|0})`,t.fill(),t.strokeStyle="rgba(0,0,0,0.2)",t.lineWidth=.5,t.stroke()}}}class QM extends fe{constructor(t){super(t),this.params={intensity:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,o=Math.max(10,Math.round(this.params.intensity/100*70)+10),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;t.clearRect(0,0,r,s),t.filter="blur(4px) brightness(0.5)",t.drawImage(i,0,0,r,s),t.filter="none";const c=Math.ceil(r/o)+1,f=Math.ceil(s/o)+1;for(let p=0;p<f;p++)for(let d=0;d<c;d++){const v=d*o+o/2,g=p*o+o/2,[m,h,x]=this.getAvgColor(u,v-o/2,g-o/2,o,o,r,s);t.save(),t.translate(v,g),t.beginPath();for(let M=0;M<10;M++){const E=Math.PI/5*M-Math.PI/2,P=M%2===0?o*.48:o*.22,C=Math.cos(E)*P,N=Math.sin(E)*P;M===0?t.moveTo(C,N):t.lineTo(C,N)}t.closePath();const _=t.createRadialGradient(-o*.15,-o*.15,0,0,0,o*.5);_.addColorStop(0,`rgba(${Math.min(255,(m|0)+60)},${Math.min(255,(h|0)+60)},${Math.min(255,(x|0)+60)},1)`),_.addColorStop(.5,`rgba(${m|0},${h|0},${x|0},0.9)`),_.addColorStop(1,`rgba(${Math.max(0,(m|0)-40)},${Math.max(0,(h|0)-40)},${Math.max(0,(x|0)-40)},0.8)`),t.fillStyle=_,t.fill(),t.strokeStyle="rgba(0,0,0,0.4)",t.lineWidth=.8,t.stroke(),t.restore()}}}class tb extends fe{constructor(t){super(t),this.params={mode:0,intensity:30,center:50}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,{mode:o,intensity:a,center:l}=this.params,u=l/100*r,c=l/100*s,f=Math.max(1,Math.round(a/100*24)),p=a/100*.08,d=a/100*.12;t.clearRect(0,0,r,s),t.globalAlpha=1/f;for(let v=0;v<f;v++){const g=v/(f-1||1)-.5;if(t.save(),t.translate(u,c),o===0)t.rotate(g*p*2);else{const m=1+g*d*2;t.scale(m,m)}t.translate(-u,-c),t.drawImage(i,0,0,r,s),t.restore()}t.globalAlpha=1}}class eb extends fe{constructor(t){super(t),this.params={length:30,direction:0}}apply(){const{ctx:t,canvas:e,sourceImage:i}=this,r=e.width,s=e.height,{length:o,direction:a}=this.params,l=Math.max(1,Math.round(o/100*30)),u=a*Math.PI/180,c=Math.cos(u),f=Math.sin(u),p=o/100*Math.max(r,s)*.15;t.clearRect(0,0,r,s),t.globalAlpha=1/l;for(let d=0;d<l;d++){const v=(d/(l-1||1)-.5)*2,g=c*v*p,m=f*v*p;t.drawImage(i,g,m,r,s)}t.globalAlpha=1}}class nb extends fe{constructor(t){super(t),this.params={strength:2.9}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,r=i.getImageData(0,0,t,e),s=r.data,o=new Uint8ClampedArray(s.length),a=Math.max(.1,this.params.strength/10*8+.5);for(let l=0;l<e;l++)for(let u=0;u<t;u++){const c=(l*t+u)*4,f=u>0?(l*t+(u-1))*4:c,p=l>0?((l-1)*t+u)*4:c,d=(s[c]-s[f]+s[c]-s[p])*a*.5+128,v=(s[c+1]-s[f+1]+s[c+1]-s[p+1])*a*.5+128,g=(s[c+2]-s[f+2]+s[c+2]-s[p+2])*a*.5+128,m=.299*d+.587*v+.114*g;o[c]=m,o[c+1]=m,o[c+2]=m,o[c+3]=255}for(let l=0;l<o.length;l+=4){const u=o[l];o[l]=Math.min(255,u*1.05),o[l+1]=Math.min(255,u*.97),o[l+2]=Math.min(255,u*.88)}r.data.set(o),i.putImageData(r,0,0)}updateParams(t){this.params={...this.params,strength:t.strength??this.params.strength},this.render()}}class ib extends fe{constructor(t){super(t),this.params={colorModel:2,pattern:2,period:12.7,angle:75,antiAlias:16,turbulence:0,blocksize:-1,angleBoost:0}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=Math.max(2,this.params.period),u=(this.params.angle+this.params.angleBoost*10)*Math.PI/180,c=this.params.turbulence*l*.3,f=Math.pow(2,this.params.blocksize),p=Math.cos(u),d=Math.sin(u),v=(m,h)=>{const x=Math.min(t-1,Math.max(0,Math.round(m))),M=(Math.min(e-1,Math.max(0,Math.round(h)))*t+x)*4;return[s[M],s[M+1],s[M+2],s[M+3]]},g=this.params.pattern;for(let m=0;m<e;m++)for(let h=0;h<t;h++){let x=0,_=0;if(c>0){const st=Math.sin((h+m*.7)*.1)*c;x=st,_=st*.6}const M=(h+x)*p-(m+_)*d,E=(h+x)*d+(m+_)*p,P=Math.floor(M/l)*l+l*.5,C=Math.floor(E/l)*l+l*.5,N=P*p+C*d,O=-P*d+C*p,[w,D,T]=v(N,O),U=(.299*w+.587*D+.114*T)/255,S=(M%l+l)%l/l,H=(E%l+l)%l/l,J=S-.5,q=H-.5;let tt=!1;if(g===1)tt=Math.abs(J)<U*.5*f;else if(g===0){const st=U*.5*f;tt=J*J+q*q<st*st}else{const st=U*.5*f;tt=Math.abs(J)<st&&Math.abs(q)<st}const Z=(m*t+h)*4;if(this.params.colorModel===0){const st=tt?0:255;a[Z]=a[Z+1]=a[Z+2]=st,a[Z+3]=255}else if(this.params.colorModel===1){const st=tt?1:0;a[Z]=Math.round(w*st),a[Z+1]=Math.round(D*st),a[Z+2]=Math.round(T*st),a[Z+3]=255}else{const st=tt?20:240;a[Z]=a[Z+1]=a[Z+2]=st,a[Z+3]=255}}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class rb extends fe{constructor(t){super(t),this.params={render:2,detailRadius:10.6,detailThreshold:10,shadingSteps:10,shadingSmoothness:10,edgeThreshold:1,edgeWidth:2.5,edgeOpacity:.26}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=Math.max(2,Math.round(this.params.shadingSteps)),a=this.params.shadingSmoothness*.5,l=Math.max(1,Math.round(this.params.edgeWidth)),u=this.params.edgeThreshold*30,c=this.params.edgeOpacity,f=this.params.render,p=new Uint8ClampedArray(s.length);for(let x=0;x<s.length;x+=4){for(let _=0;_<3;_++){const M=s[x+_],E=Math.round(M/255*(o-1))/(o-1)*255;p[x+_]=Math.min(255,E+(M-E)*a/(a+5))}p[x+3]=255}const d=new Float32Array(t*e);for(let x=0;x<t*e;x++){const _=x*4;d[x]=.299*s[_]+.587*s[_+1]+.114*s[_+2]}const v=new Uint8ClampedArray(t*e);for(let x=1;x<e-1;x++)for(let _=1;_<t-1;_++){const M=x*t+_,E=-d[M-t-1]+d[M-t+1]-2*d[M-1]+2*d[M+1]-d[M+t-1]+d[M+t+1],P=-d[M-t-1]-2*d[M-t]-d[M-t+1]+d[M+t-1]+2*d[M+t]+d[M+t+1];v[M]=Math.sqrt(E*E+P*P)>u?255:0}const g=new Uint8ClampedArray(v.length);if(l>0)for(let x=0;x<e;x++)for(let _=0;_<t;_++){let M=!1;for(let E=-l;E<=l&&!M;E++)for(let P=-l;P<=l&&!M;P++){const C=_+P,N=x+E;C>=0&&C<t&&N>=0&&N<e&&v[N*t+C]&&(M=!0)}g[x*t+_]=M?255:0}const m=i.createImageData(t,e),h=m.data;for(let x=0;x<t*e;x++){const _=x*4,M=g[x]>0;if(f===0)h[_]=p[_],h[_+1]=p[_+1],h[_+2]=p[_+2],h[_+3]=255;else if(f===1){const E=M?0:255;h[_]=h[_+1]=h[_+2]=E,h[_+3]=255}else M?(h[_]=Math.round(p[_]*(1-c)),h[_+1]=Math.round(p[_+1]*(1-c)),h[_+2]=Math.round(p[_+2]*(1-c))):(h[_]=p[_],h[_+1]=p[_+1],h[_+2]=p[_+2]),h[_+3]=255}i.putImageData(m,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class sb extends fe{constructor(t){super(t),this.params={lightColor:50,lightRange:73,lightIntensity:50}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.lightIntensity/100,u=this.params.lightRange/100,c=this.params.lightColor/100,f=t*.5,p=e*.5,d=Math.max(t,e)*u*.8,v=200+c*55,g=180+(1-Math.abs(c-.5)*2)*40,m=255-c*80;for(let h=0;h<e;h++)for(let x=0;x<t;x++){const _=(h*t+x)*4,M=Math.sqrt((x-f)**2+(h-p)**2),E=Math.exp(-(M*M)/(2*d*d))*l*1.2,P=s[_],C=s[_+1],N=s[_+2],O=Math.min(1,E*v/255),w=Math.min(1,E*g/255),D=Math.min(1,E*m/255),T=P/255,U=C/255,S=N/255,H=(2*T*O+T*T*(1-2*O))*255,J=(2*U*w+U*U*(1-2*w))*255,q=(2*S*D+S*S*(1-2*D))*255;a[_]=Math.min(255,Math.max(0,P+(H-P)*E*2)),a[_+1]=Math.min(255,Math.max(0,C+(J-C)*E*2)),a[_+2]=Math.min(255,Math.max(0,N+(q-N)*E*2)),a[_+3]=255}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class ab extends fe{constructor(t){super(t),this.params={comicType:0,color1:300,color2:300,gridNum:.14}}hsvToRgb(t,e,i){t=(t%360+360)%360;const r=i*e,s=r*(1-Math.abs(t/60%2-1)),o=i-r;let a=0,l=0,u=0;return t<60?(a=r,l=s,u=0):t<120?(a=s,l=r,u=0):t<180?(a=0,l=r,u=s):t<240?(a=0,l=s,u=r):t<300?(a=s,l=0,u=r):(a=r,l=0,u=s),[(a+o)*255,(l+o)*255,(u+o)*255]}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=Math.max(2,Math.round(this.params.gridNum*30+3)),u=this.params.comicType===1,[c,f,p]=this.hsvToRgb(this.params.color1,.8,.9),[d,v,g]=this.hsvToRgb(this.params.color2,.6,.7);for(let m=0;m<e;m++)for(let h=0;h<t;h++){const x=(m*t+h)*4,_=(.299*s[x]+.587*s[x+1]+.114*s[x+2])/255,M=h%l/l,E=m%l/l,P=M-.5,C=E-.5,N=_*.55,O=P*P+C*C<N*N,D=(h+m)%l/l<(1-_)*.6&&_<.7,T=h%l===0||m%l===0;let U,S,H;if(_>.85?U=S=H=255:_>.5?O?U=S=H=30:U=S=H=240:_>.2?D?U=S=H=20:U=S=H=220:U=S=H=15,T&&this.params.gridNum>.02&&(U=S=H=Math.min(U,80)),u){const J=_;U=Math.round(U*(c/255*J+d/255*(1-J))*1.2),S=Math.round(S*(f/255*J+v/255*(1-J))*1.2),H=Math.round(H*(p/255*J+g/255*(1-J))*1.2)}a[x]=Math.min(255,Math.max(0,U)),a[x+1]=Math.min(255,Math.max(0,S)),a[x+2]=Math.min(255,Math.max(0,H)),a[x+3]=255}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class ob extends fe{constructor(t){super(t),this.params={centerX:.5,centerY:.39,size:76,convergence:20}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.centerX*t,u=this.params.centerY*e,c=Math.max(1,this.params.size),f=this.params.convergence/100,p=(d,v)=>{const g=Math.min(t-1,Math.max(0,Math.round(d))),h=(Math.min(e-1,Math.max(0,Math.round(v)))*t+g)*4;return[s[h],s[h+1],s[h+2],s[h+3]]};for(let d=0;d<e;d++)for(let v=0;v<t;v++){const g=v-l,m=d-u,h=Math.sqrt(g*g+m*m),x=c*Math.max(t,e)/100;if(h<x&&h>0){const _=h/x,E=(f>0?Math.pow(_,1-f*.8):Math.pow(_,1+Math.abs(f)*1.5))*x/h,P=l+g*E,C=u+m*E,[N,O,w,D]=p(P,C),T=(d*t+v)*4;a[T]=N,a[T+1]=O,a[T+2]=w,a[T+3]=D}else{const _=(d*t+v)*4;a[_]=s[_],a[_+1]=s[_+1],a[_+2]=s[_+2],a[_+3]=s[_+3]}}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class lb extends fe{constructor(t){super(t),this.params={radius:100,waveSpeed:4.9,waveWidth:55.1,waveHeight:1,wavePhase:0}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=t*.5,u=e*.5,c=this.params.radius/100*Math.max(t,e),f=Math.max(1,this.params.waveWidth)/100*c,p=this.params.waveHeight*Math.min(t,e)*.02,d=this.params.wavePhase*Math.PI/180,v=(g,m)=>{const h=Math.min(t-1,Math.max(0,Math.round(g))),_=(Math.min(e-1,Math.max(0,Math.round(m)))*t+h)*4;return[s[_],s[_+1],s[_+2],s[_+3]]};for(let g=0;g<e;g++)for(let m=0;m<t;m++){const h=m-l,x=g-u,_=Math.sqrt(h*h+x*x);if(_<c&&_>0){const M=_/f*Math.PI*2-d,E=Math.sin(M)*p*(1-_/c),P=h/_,C=x/_,N=m+P*E,O=g+C*E,[w,D,T,U]=v(N,O),S=(g*t+m)*4;a[S]=w,a[S+1]=D,a[S+2]=T,a[S+3]=U}else{const M=(g*t+m)*4;a[M]=s[M],a[M+1]=s[M+1],a[M+2]=s[M+2],a[M+3]=s[M+3]}}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class cb extends fe{constructor(t){super(t),this.params={waveType:0,waveHeight:10,waveWidth:40,direction:90,waveSpeed:1,phase:0}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.direction*Math.PI/180,u=this.params.waveHeight*Math.min(t,e)*.01,c=Math.max(1,this.params.waveWidth)*Math.min(t,e)*.01,f=this.params.phase*Math.PI/180,p=Math.round(this.params.waveType),d=Math.cos(l),v=Math.sin(l),g=h=>{const x=(h%(Math.PI*2)+Math.PI*2)%(Math.PI*2);return p===1?x<Math.PI?1:-1:p===2?x<Math.PI?x/Math.PI*2-1:3-x/Math.PI*2:Math.sin(h)},m=(h,x)=>{const _=Math.min(t-1,Math.max(0,Math.round(h))),E=(Math.min(e-1,Math.max(0,Math.round(x)))*t+_)*4;return[s[E],s[E+1],s[E+2],s[E+3]]};for(let h=0;h<e;h++)for(let x=0;x<t;x++){const M=(x*d+h*v)/c*Math.PI*2-f,E=g(M)*u,P=x+E*v,C=h-E*d,[N,O,w,D]=m(P,C),T=(h*t+x)*4;a[T]=N,a[T+1]=O,a[T+2]=w,a[T+3]=D}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class ub extends fe{constructor(t){super(t),this.params={centerX:.5,centerY:.5,radius:80,angle:120,smoothness:60}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.centerX*t,u=this.params.centerY*e,c=this.params.radius/100*Math.max(t,e)*.5,f=this.params.angle*Math.PI/180,p=Math.max(1,this.params.smoothness)/100,d=(v,g)=>{const m=Math.floor(v),h=Math.floor(g),x=Math.min(t-1,m+1),_=Math.min(e-1,h+1),M=v-m,E=g-h,P=Math.max(0,m),C=Math.max(0,x),N=Math.max(0,h),O=Math.max(0,_),w=(N*t+P)*4,D=(N*t+C)*4,T=(O*t+P)*4,U=(O*t+C)*4;return[s[w]*(1-M)*(1-E)+s[D]*M*(1-E)+s[T]*(1-M)*E+s[U]*M*E,s[w+1]*(1-M)*(1-E)+s[D+1]*M*(1-E)+s[T+1]*(1-M)*E+s[U+1]*M*E,s[w+2]*(1-M)*(1-E)+s[D+2]*M*(1-E)+s[T+2]*(1-M)*E+s[U+2]*M*E,255]};for(let v=0;v<e;v++)for(let g=0;g<t;g++){const m=g-l,h=v-u,x=Math.sqrt(m*m+h*h);if(x<c){const _=1-Math.pow(x/c,p*2+.1),M=f*_,E=Math.cos(M),P=Math.sin(M),C=l+m*E-h*P,N=u+m*P+h*E,[O,w,D,T]=d(C,N),U=(v*t+g)*4;a[U]=O,a[U+1]=w,a[U+2]=D,a[U+3]=T}else{const _=(v*t+g)*4;a[_]=s[_],a[_+1]=s[_+1],a[_+2]=s[_+2],a[_+3]=s[_+3]}}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class fb extends fe{constructor(t){super(t),this.params={glowCenterX:.5,glowCenterY:.5,glowIntensity:50,glowDensity:60}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.glowCenterX*t,u=this.params.glowCenterY*e,c=this.params.glowIntensity/100,f=this.params.glowDensity/100,p=new Float32Array(t*e);for(let _=0;_<t*e;_++)p[_]=(.299*s[_*4]+.587*s[_*4+1]+.114*s[_*4+2])/255;const d=new Float32Array(t*e);let v=0;for(let _=1;_<e-1;_++)for(let M=1;M<t-1;M++){const E=_*t+M,P=-p[E-t-1]+p[E-t+1]-2*p[E-1]+2*p[E+1]-p[E+t-1]+p[E+t+1],C=-p[E-t-1]-2*p[E-t]-p[E-t+1]+p[E+t-1]+2*p[E+t]+p[E+t+1];d[E]=Math.sqrt(P*P+C*C),d[E]>v&&(v=d[E])}const g=Math.round(f*12+2),m=new Float32Array(t*e),h=new Float32Array(t*e);for(let _=0;_<e;_++)for(let M=0;M<t;M++){let E=0,P=0;for(let C=-g;C<=g;C++){const N=Math.min(t-1,Math.max(0,M+C));E+=d[_*t+N],P++}h[_*t+M]=E/P}for(let _=0;_<e;_++)for(let M=0;M<t;M++){let E=0,P=0;for(let C=-g;C<=g;C++){const N=Math.min(e-1,Math.max(0,_+C));E+=h[N*t+M],P++}m[_*t+M]=E/P}const x=Math.sqrt(l*l+u*u)*1.5;for(let _=0;_<e;_++)for(let M=0;M<t;M++){const E=(_*t+M)*4,P=_*t+M,C=v>0?m[P]/v:0,N=M-l,O=_-u,w=1-Math.sqrt(N*N+O*O)/x,D=C*c*Math.max(0,w)*3;a[E]=Math.min(255,s[E]+D*255),a[E+1]=Math.min(255,s[E+1]+D*255),a[E+2]=Math.min(255,s[E+2]+D*255),a[E+3]=255}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class hb extends fe{constructor(t){super(t),this.params={shape:0,centerX:.5,centerY:.5,magnification:108,size:154,feather:71}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=new Uint8ClampedArray(s),a=this.params.centerX*t,l=this.params.centerY*e,u=this.params.size/100*Math.min(t,e)*.5,c=this.params.magnification/100,f=this.params.feather/100,p=Math.round(this.params.shape)===0,d=(g,m)=>{const h=Math.floor(g),x=Math.floor(m),_=Math.min(t-1,h+1),M=Math.min(e-1,x+1),E=g-h,P=m-x,C=Math.max(0,h),N=Math.max(0,x),O=Math.min(t-1,_),w=Math.min(e-1,M),D=(N*t+C)*4,T=(N*t+O)*4,U=(w*t+C)*4,S=(w*t+O)*4;return[s[D]*(1-E)*(1-P)+s[T]*E*(1-P)+s[U]*(1-E)*P+s[S]*E*P,s[D+1]*(1-E)*(1-P)+s[T+1]*E*(1-P)+s[U+1]*(1-E)*P+s[S+1]*E*P,s[D+2]*(1-E)*(1-P)+s[T+2]*E*(1-P)+s[U+2]*(1-E)*P+s[S+2]*E*P,255]};for(let g=0;g<e;g++)for(let m=0;m<t;m++){const h=m-a,x=g-l;let _=0;if(p?_=Math.sqrt(h*h+x*x)/u:_=Math.max(Math.abs(h),Math.abs(x))/u,_>1)continue;const M=1-f,E=_<M?1:1-(_-M)/(f+.001),P=1/c,C=a+h*P,N=l+x*P,[O,w,D]=d(C,N),T=(g*t+m)*4,U=o[T],S=o[T+1],H=o[T+2];o[T]=Math.round(O*E+U*(1-E)),o[T+1]=Math.round(w*E+S*(1-E)),o[T+2]=Math.round(D*E+H*(1-E)),o[T+3]=255}const v=i.createImageData(t,e);v.data.set(o),i.putImageData(v,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class db extends fe{constructor(t){super(t),this.params={threshold:.2,strength:1.82,length:1,centerX:.5,centerY:.5}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.centerX*t,u=this.params.centerY*e,c=this.params.threshold,f=this.params.strength,p=this.params.length,d=new Float32Array(t*e);for(let x=0;x<t*e;x++){const _=(.299*s[x*4]+.587*s[x*4+1]+.114*s[x*4+2])/255;d[x]=_>c?(_-c)/(1-c):0}const v=Math.round(p*60+20),g=.97,m=new Float32Array(t*e);for(let x=0;x<e;x++)for(let _=0;_<t;_++){let M=0,E=_,P=x;const C=(l-_)/v,N=(u-x)/v;let O=1;for(let w=0;w<v;w++){const D=Math.min(t-1,Math.max(0,Math.round(E))),T=Math.min(e-1,Math.max(0,Math.round(P)));M+=d[T*t+D]*O,O*=g,E+=C,P+=N}m[x*t+_]=M/v}let h=0;for(let x=0;x<m.length;x++)m[x]>h&&(h=m[x]);if(h>0)for(let x=0;x<m.length;x++)m[x]/=h;for(let x=0;x<t*e;x++){const _=x*4,M=m[x]*f;a[_]=Math.min(255,s[_]+M*255),a[_+1]=Math.min(255,s[_+1]+M*245),a[_+2]=Math.min(255,s[_+2]+M*220),a[_+3]=255}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}class pb extends fe{constructor(t){super(t),this.params={threshold:60,glowRadius:40,glowStrength:60,glowColor:0}}apply(){const{width:t,height:e}=this.canvas,i=this.ctx,s=i.getImageData(0,0,t,e).data,o=i.createImageData(t,e),a=o.data,l=this.params.threshold/100,u=Math.round(this.params.glowRadius/100*Math.min(t,e)*.08+2),c=this.params.glowStrength/100,f=Math.round(this.params.glowColor),p=f===1?1:f===2?.7:1,d=f===1?.9:f===2?.85:1,v=f===1?.6:1,g=new Float32Array(t*e*3);for(let _=0;_<t*e;_++){const M=s[_*4]/255,E=s[_*4+1]/255,P=s[_*4+2]/255,C=.299*M+.587*E+.114*P,N=C>l?(C-l)/(1-l+.001):0;g[_*3]=M*N,g[_*3+1]=E*N,g[_*3+2]=P*N}const m=new Float32Array(t*e*3),h=new Float32Array(t*e*3),x=g.slice();for(let _=0;_<e;_++)for(let M=0;M<t;M++){let E=0,P=0,C=0,N=0;for(let w=-u;w<=u;w++){const D=Math.min(t-1,Math.max(0,M+w)),T=(_*t+D)*3;E+=x[T],P+=x[T+1],C+=x[T+2],N++}const O=(_*t+M)*3;h[O]=E/N,h[O+1]=P/N,h[O+2]=C/N}for(let _=0;_<e;_++)for(let M=0;M<t;M++){let E=0,P=0,C=0,N=0;for(let w=-u;w<=u;w++){const T=(Math.min(e-1,Math.max(0,_+w))*t+M)*3;E+=h[T],P+=h[T+1],C+=h[T+2],N++}const O=(_*t+M)*3;m[O]=E/N,m[O+1]=P/N,m[O+2]=C/N}for(let _=0;_<t*e;_++){const M=_*4,E=m[_*3]*p*c,P=m[_*3+1]*d*c,C=m[_*3+2]*v*c,N=s[M]/255,O=s[M+1]/255,w=s[M+2]/255;a[M]=Math.min(255,Math.round((1-(1-N)*(1-E))*255)),a[M+1]=Math.min(255,Math.round((1-(1-O)*(1-P))*255)),a[M+2]=Math.min(255,Math.round((1-(1-w)*(1-C))*255)),a[M+3]=255}i.putImageData(o,0,0)}updateParams(t){this.params={...this.params,...t},this.render()}}const mb={class:"plugin-preview"},gb={class:"app-body"},_b={__name:"PluginPreview",setup(n){const t=jt("wave-blur"),e=jt(!1),i=jt(!1),r=jt(!1),s=jt(!0),o=jt(null),a=jt(0),l=jt(0);let u=null,c=null;const f={"wave-blur":{name:"WaveBlurring",nameZh:"波形模糊",EffectClass:null,defaults:{horizontalChromatic:70,distortion:50,speed:60,size:60,blur:60},params:[{key:"horizontalChromatic",label:"AdjustHorizontalChromatic",desc:"水平色差强度",min:0,max:100},{key:"distortion",label:"AdjustDistortion",desc:"扭曲程度",min:0,max:100},{key:"speed",label:"AdjustSpeed",desc:"动画速度",min:0,max:100},{key:"size",label:"AdjustSize",desc:"波形尺寸",min:0,max:100},{key:"blur",label:"AdjustBlur",desc:"模糊强度",min:0,max:100}]},"directional-blur":{name:"Directional Blur",nameZh:"定向模糊",EffectClass:eb,defaults:{length:30,direction:0},params:[{key:"length",label:"Blur Length",desc:"模糊长度",min:0,max:100},{key:"direction",label:"Blur Direction",desc:"模糊方向（角度，0=水平）",min:0,max:360,step:1}]},"radial-blur":{name:"Radial Blur",nameZh:"径向模糊",EffectClass:tb,defaults:{mode:0,intensity:30,center:50},params:[{key:"mode",label:"Mode",desc:"0 = 旋转模糊  /  1 = 缩放模糊",min:0,max:1,step:1},{key:"intensity",label:"Intensity",desc:"模糊强度",min:0,max:100},{key:"center",label:"Center",desc:"中心位置 (0=左上  100=右下)",min:0,max:100}]},"basic-mosaic":{name:"Basic Mosaic",nameZh:"基础马赛克",EffectClass:WM,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"马赛克块大小",min:1,max:100}]},"blur-mosaic-fx":{name:"Blur Mosaic",nameZh:"模糊马赛克",EffectClass:XM,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"模糊程度",min:1,max:100}]},"brick-mosaic":{name:"Brick Mosaic",nameZh:"砖块马赛克",EffectClass:qM,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"砖块大小",min:1,max:100}]},"colorful-mosaic-1":{name:"Colorful MosaicI",nameZh:"彩色马赛克 I",EffectClass:jM,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"晶格大小",min:1,max:100}]},"colorful-mosaic-2":{name:"Colorful MosaicII",nameZh:"彩色马赛克 II",EffectClass:YM,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"气泡大小",min:1,max:100}]},"colorful-mosaic-3":{name:"Colorful MosaicIII",nameZh:"彩色马赛克 III",EffectClass:$M,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"三角片大小",min:1,max:100}]},"glass-mosaic-1":{name:"Glass MosaicI",nameZh:"玻璃马赛克 I",EffectClass:ZM,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"玻璃格大小",min:1,max:100}]},"glass-mosaic-2":{name:"Glass MosaicII",nameZh:"玻璃马赛克 II",EffectClass:KM,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"磨砂格大小",min:1,max:100}]},"hexagon-mosaic":{name:"Hexagon Mosaic",nameZh:"六边形马赛克",EffectClass:JM,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"六边形大小",min:1,max:100}]},"star-mosaic":{name:"Star Mosaic",nameZh:"星形马赛克",EffectClass:QM,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"星形大小",min:1,max:100}]},engrave:{name:"Engrave",nameZh:"雕刻",EffectClass:nb,defaults:{strength:2.9},params:[{key:"strength",label:"Strength",desc:"雕刻强度",min:0,max:10,step:.1}]},newsprint:{name:"Newsprint",nameZh:"报纸印刷",EffectClass:ib,defaults:{colorModel:2,pattern:2,period:12.7,angle:75,antiAlias:16,turbulence:0,blocksize:-1,angleBoost:0},params:[{key:"colorModel",label:"ColorModel",desc:"颜色模式 (0=黑白 1=彩色 2=灰度半调)",min:0,max:2,step:1},{key:"pattern",label:"Pattern",desc:"图案类型 (0=圆点 1=线条 2=方块)",min:0,max:2,step:1},{key:"period",label:"Period",desc:"网格周期大小",min:1,max:30,step:.1},{key:"angle",label:"Angle",desc:"网格旋转角度",min:0,max:180,step:1},{key:"turbulence",label:"Turbulence",desc:"扰动变形",min:0,max:5,step:.1},{key:"blocksize",label:"Blocksize",desc:"图案缩放 (-2~2)",min:-2,max:2,step:.1},{key:"angleBoost",label:"AngleBoost",desc:"额外角度叠加",min:0,max:5,step:.1}]},cartoon:{name:"Cartoon",nameZh:"卡通",EffectClass:rb,defaults:{render:2,detailRadius:10.6,detailThreshold:10,shadingSteps:10,shadingSmoothness:10,edgeThreshold:1,edgeWidth:2.5,edgeOpacity:.26},params:[{key:"render",label:"Render",desc:"渲染模式 (0=仅填色 1=仅边缘 2=填色+边缘)",min:0,max:2,step:1},{key:"detailRadius",label:"DetailRadius",desc:"细节平滑半径",min:1,max:30,step:.1},{key:"detailThreshold",label:"DetailThreshold",desc:"细节阈值",min:0,max:20,step:.1},{key:"shadingSteps",label:"ShadingSteps",desc:"色阶数量",min:2,max:16,step:1},{key:"shadingSmoothness",label:"ShadingSmoothness",desc:"色阶过渡平滑",min:0,max:20,step:.1},{key:"edgeThreshold",label:"EdgeThreshold",desc:"边缘检测阈值",min:0,max:5,step:.1},{key:"edgeWidth",label:"EdgeWidth",desc:"边缘线宽度",min:0,max:8,step:.1},{key:"edgeOpacity",label:"EdgeOpacity",desc:"边缘线透明度",min:0,max:1,step:.01}]},"film-soft-light":{name:"FilmSoftLight",nameZh:"胶片柔光",EffectClass:sb,defaults:{lightColor:50,lightRange:73,lightIntensity:50},params:[{key:"lightColor",label:"LightColor",desc:"光色偏移 (0=冷蓝 100=暖橙)",min:0,max:100},{key:"lightRange",label:"LightRange",desc:"光晕扩散范围",min:0,max:100},{key:"lightIntensity",label:"LightIntensity",desc:"光晕强度",min:0,max:100}]},comic:{name:"Comic",nameZh:"漫画",EffectClass:ab,defaults:{comicType:0,color1:300,color2:300,gridNum:.14},params:[{key:"comicType",label:"ComicType",desc:"漫画类型 (0=黑白 1=彩色)",min:0,max:1,step:1},{key:"color1",label:"Color1",desc:"高光色相 (0-360°)",min:0,max:360,step:1},{key:"color2",label:"Color2",desc:"阴影色相 (0-360°)",min:0,max:360,step:1},{key:"gridNum",label:"GridNum",desc:"网格密度",min:0,max:1,step:.01}]},"cc-lens":{name:"CCLens",nameZh:"鱼眼",EffectClass:ob,defaults:{centerX:.5,centerY:.39,size:76,convergence:20},params:[{key:"centerX",label:"CenterX",desc:"镜头中心 X",min:0,max:1,step:.01},{key:"centerY",label:"CenterY",desc:"镜头中心 Y",min:0,max:1,step:.01},{key:"size",label:"Size",desc:"镜头大小",min:0,max:200},{key:"convergence",label:"Convergence",desc:"汇聚 (+凸起 / -凹陷)",min:-100,max:100}]},ripple:{name:"Ripple",nameZh:"波纹",EffectClass:lb,defaults:{radius:100,waveSpeed:4.9,waveWidth:55.1,waveHeight:1,wavePhase:0},params:[{key:"radius",label:"半径",desc:"波纹影响半径",min:0,max:200},{key:"waveWidth",label:"波形宽度",desc:"相邻波峰间距",min:1,max:100,step:.1},{key:"waveHeight",label:"波形高度",desc:"波纹位移幅度",min:0,max:5,step:.1},{key:"wavePhase",label:"波纹相",desc:"波纹起始相位 (°)",min:0,max:360,step:1}]},"wave-warp":{name:"WaveWarp",nameZh:"波形变形",EffectClass:cb,defaults:{waveType:0,waveHeight:10,waveWidth:40,direction:90,waveSpeed:1,phase:0},params:[{key:"waveType",label:"波浪类型",desc:"0=正弦 1=方波 2=三角",min:0,max:2,step:1},{key:"waveHeight",label:"波形高度",desc:"位移幅度",min:0,max:100,step:.5},{key:"waveWidth",label:"波形宽度",desc:"波长（像素比）",min:1,max:200,step:1},{key:"direction",label:"方向",desc:"波形传播方向 (°)",min:0,max:360,step:1},{key:"phase",label:"相位",desc:"波形起始相位 (°)",min:0,max:360,step:1}]},"twirl-distort":{name:"TwirlDistort",nameZh:"旋转扭曲",EffectClass:ub,defaults:{centerX:.5,centerY:.5,radius:80,angle:120,smoothness:60},params:[{key:"centerX",label:"CenterX",desc:"旋转中心 X",min:0,max:1,step:.01},{key:"centerY",label:"CenterY",desc:"旋转中心 Y",min:0,max:1,step:.01},{key:"radius",label:"Radius",desc:"影响半径",min:0,max:200},{key:"angle",label:"Angle",desc:"扭曲角度 (°)",min:-360,max:360,step:1},{key:"smoothness",label:"Smoothness",desc:"边缘过渡平滑度",min:0,max:100}]},"edge-glow":{name:"EdgeGlow",nameZh:"边缘辉光",EffectClass:fb,defaults:{glowCenterX:.5,glowCenterY:.5,glowIntensity:50,glowDensity:60},params:[{key:"glowCenterX",label:"GlowCenterX",desc:"光源中心 X",min:0,max:1,step:.01},{key:"glowCenterY",label:"GlowCenterY",desc:"光源中心 Y",min:0,max:1,step:.01},{key:"glowIntensity",label:"Intensity",desc:"辉光亮度",min:0,max:100},{key:"glowDensity",label:"Density",desc:"辉光扩散密度",min:0,max:100}]},enlargement:{name:"Enlargement",nameZh:"局部放大",EffectClass:hb,defaults:{shape:0,centerX:.5,centerY:.5,magnification:108,size:154,feather:71},params:[{key:"shape",label:"Shape",desc:"形状 (0=圆形 1=方形)",min:0,max:1,step:1},{key:"centerX",label:"CenterX",desc:"放大中心 X",min:0,max:1,step:.01},{key:"centerY",label:"CenterY",desc:"放大中心 Y",min:0,max:1,step:.01},{key:"magnification",label:"Magnification",desc:"放大倍数 (%)",min:50,max:400},{key:"size",label:"Size",desc:"镜头大小",min:0,max:300},{key:"feather",label:"Feather",desc:"边缘羽化",min:0,max:100}]},"shaft-light":{name:"ShaftLight",nameZh:"光柱",EffectClass:db,defaults:{threshold:.2,strength:1.82,length:1,centerX:.5,centerY:.5},params:[{key:"threshold",label:"Threshold",desc:"亮度提取阈值",min:0,max:1,step:.01},{key:"strength",label:"Strength",desc:"光柱强度",min:0,max:5,step:.01},{key:"length",label:"Length",desc:"光线延伸长度",min:0,max:2,step:.01},{key:"centerX",label:"CenterX",desc:"光源中心 X",min:0,max:1,step:.01},{key:"centerY",label:"CenterY",desc:"光源中心 Y",min:0,max:1,step:.01}]},"overall-glow":{name:"OverallGlow",nameZh:"泛光",EffectClass:pb,defaults:{threshold:60,glowRadius:40,glowStrength:60,glowColor:0},params:[{key:"threshold",label:"Threshold",desc:"高光提取阈值",min:0,max:100},{key:"glowRadius",label:"GlowRadius",desc:"光晕扩散半径",min:0,max:100},{key:"glowStrength",label:"GlowStrength",desc:"光晕强度",min:0,max:100},{key:"glowColor",label:"GlowColor",desc:"光晕色调 (0=白 1=暖 2=冷)",min:0,max:2,step:1}]}},p=ge(()=>f[t.value]||null),d=ge(()=>{var T;return((T=p.value)==null?void 0:T.params)||[]}),v=ge(()=>{for(const T of sa)if(T.plugins.find(U=>U.id===t.value))return T.name;return""}),g=jt({...f["wave-blur"].defaults});is(g,T=>{u==null||u.updateParams(T)},{deep:!0}),Cl(()=>{Sr(()=>{x("wave-blur"),M()})});function m(T,U){const S=f[T];if(!S||!U)return null;if(T==="wave-blur"){const H=new VM(U,null);return H.init(),H}else if(S.EffectClass)return new S.EffectClass(U);return null}function h(){const T=o.value;return T?s.value?T.webglCanvas:T.canvas2d:null}function x(T){var S;(S=u==null?void 0:u.destroy)==null||S.call(u),u=null,s.value=T==="wave-blur";const U=h();u=m(T,U),c&&(u==null||u.loadImage(c)),e.value&&_()}function _(){var U;const T=(U=o.value)==null?void 0:U.originalCanvas;!T||!c||(T.width=a.value||c.naturalWidth||900,T.height=l.value||c.naturalHeight||600,T.getContext("2d").drawImage(c,0,0,T.width,T.height))}function M(){const T=new Image;T.crossOrigin="anonymous",T.src="/kskr-preview/demo.jpg",T.onload=()=>P(T),T.onerror=()=>E()}function E(){const T=document.createElement("canvas");T.width=900,T.height=600;const U=T.getContext("2d"),S=U.createLinearGradient(0,0,900,600);S.addColorStop(0,"#101010"),S.addColorStop(1,"#1c1c1c"),U.fillStyle=S,U.fillRect(0,0,900,600),U.strokeStyle="rgba(255,255,255,.03)",U.lineWidth=1;for(let q=0;q<=900;q+=50)U.beginPath(),U.moveTo(q,0),U.lineTo(q,600),U.stroke();for(let q=0;q<=600;q+=50)U.beginPath(),U.moveTo(0,q),U.lineTo(900,q),U.stroke();const H=U.createRadialGradient(450,300,20,450,300,260);H.addColorStop(0,"rgba(255,255,255,.06)"),H.addColorStop(1,"rgba(255,255,255,0)"),U.fillStyle=H,U.fillRect(0,0,900,600),U.fillStyle="rgba(255,255,255,.18)",U.font='bold 36px "Space Grotesk", sans-serif',U.textAlign="center",U.textBaseline="middle",U.fillText("KSkr",450,278),U.font='15px "Inter", sans-serif',U.fillStyle="rgba(255,255,255,.08)",U.fillText("上传图片以开始预览",450,326);const J=new Image;J.onload=()=>P(J),J.src=T.toDataURL()}function P(T){c=T,a.value=T.naturalWidth||T.width||900,l.value=T.naturalHeight||T.height||600,r.value=!0,Sr(()=>{u==null||u.loadImage(T),e.value&&_()})}function C(T){var H,J,q,tt,Z;const U=((J=(H=T==null?void 0:T.target)==null?void 0:H.files)==null?void 0:J[0])||((tt=(q=T==null?void 0:T.dataTransfer)==null?void 0:q.files)==null?void 0:tt[0])||((Z=T==null?void 0:T.files)==null?void 0:Z[0]);if(!U)return;const S=new FileReader;S.onload=st=>{const j=new Image;j.onload=()=>P(j),j.src=st.target.result},S.readAsDataURL(U)}function N(){var T;g.value={...((T=p.value)==null?void 0:T.defaults)||{}}}function O(){e.value=!e.value,i.value=!1,e.value&&c&&Sr(()=>_())}function w(){i.value=!i.value,i.value&&c&&_()}function D(T){t.value=T.id;const U=f[T.id];U&&(g.value={...U.defaults}),Sr(()=>x(T.id))}return(T,U)=>{var S;return $t(),Zt("div",mb,[ot("div",gb,[Se(q_,{onSelectPlugin:D}),p.value?($t(),Th(f0,{key:0,plugin:p.value,params:d.value,modelValue:g.value,"onUpdate:modelValue":U[0]||(U[0]=H=>g.value=H),compareMode:e.value,onReset:N,onUpload:C,onToggleCompare:O},null,8,["plugin","params","modelValue","compareMode"])):en("",!0),Se(T0,{ref_key:"previewArea",ref:o,compareMode:e.value,hasImage:r.value,isWebGL:s.value,showingOriginal:i.value,imageWidth:a.value,imageHeight:l.value,currentCategory:v.value,currentPlugin:((S=p.value)==null?void 0:S.name)||"",onUpload:C,onToggleOriginal:w},null,8,["compareMode","hasImage","isWebGL","showingOriginal","imageWidth","imageHeight","currentCategory","currentPlugin"])])])}}},vb=Qi(_b,[["__scopeId","data-v-5438a76b"]]);var Qs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xb(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function ta(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Td={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(n,t){(function(e){n.exports=e()})(function(){return function e(i,r,s){function o(u,c){if(!r[u]){if(!i[u]){var f=typeof ta=="function"&&ta;if(!c&&f)return f(u,!0);if(a)return a(u,!0);var p=new Error("Cannot find module '"+u+"'");throw p.code="MODULE_NOT_FOUND",p}var d=r[u]={exports:{}};i[u][0].call(d.exports,function(v){var g=i[u][1][v];return o(g||v)},d,d.exports,e,i,r,s)}return r[u].exports}for(var a=typeof ta=="function"&&ta,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(e,i,r){var s=e("./utils"),o=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var u,c,f,p,d,v,g,m=[],h=0,x=l.length,_=x,M=s.getTypeOf(l)!=="string";h<l.length;)_=x-h,f=M?(u=l[h++],c=h<x?l[h++]:0,h<x?l[h++]:0):(u=l.charCodeAt(h++),c=h<x?l.charCodeAt(h++):0,h<x?l.charCodeAt(h++):0),p=u>>2,d=(3&u)<<4|c>>4,v=1<_?(15&c)<<2|f>>6:64,g=2<_?63&f:64,m.push(a.charAt(p)+a.charAt(d)+a.charAt(v)+a.charAt(g));return m.join("")},r.decode=function(l){var u,c,f,p,d,v,g=0,m=0,h="data:";if(l.substr(0,h.length)===h)throw new Error("Invalid base64 input, it looks like a data url.");var x,_=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&_--,l.charAt(l.length-2)===a.charAt(64)&&_--,_%1!=0)throw new Error("Invalid base64 input, bad content length.");for(x=o.uint8array?new Uint8Array(0|_):new Array(0|_);g<l.length;)u=a.indexOf(l.charAt(g++))<<2|(p=a.indexOf(l.charAt(g++)))>>4,c=(15&p)<<4|(d=a.indexOf(l.charAt(g++)))>>2,f=(3&d)<<6|(v=a.indexOf(l.charAt(g++))),x[m++]=u,d!==64&&(x[m++]=c),v!==64&&(x[m++]=f);return x}},{"./support":30,"./utils":32}],2:[function(e,i,r){var s=e("./external"),o=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function u(c,f,p,d,v){this.compressedSize=c,this.uncompressedSize=f,this.crc32=p,this.compression=d,this.compressedContent=v}u.prototype={getContentWorker:function(){var c=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),f=this;return c.on("end",function(){if(this.streamInfo.data_length!==f.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),c},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},u.createWorkerFrom=function(c,f,p){return c.pipe(new a).pipe(new l("uncompressedSize")).pipe(f.compressWorker(p)).pipe(new l("compressedSize")).withStreamInfo("compression",f)},i.exports=u},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,i,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,i,r){var s=e("./utils"),o=function(){for(var a,l=[],u=0;u<256;u++){a=u;for(var c=0;c<8;c++)a=1&a?3988292384^a>>>1:a>>>1;l[u]=a}return l}();i.exports=function(a,l){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?function(u,c,f,p){var d=o,v=p+f;u^=-1;for(var g=p;g<v;g++)u=u>>>8^d[255&(u^c[g])];return-1^u}(0|l,a,a.length,0):function(u,c,f,p){var d=o,v=p+f;u^=-1;for(var g=p;g<v;g++)u=u>>>8^d[255&(u^c.charCodeAt(g))];return-1^u}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(e,i,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,i,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),i.exports={Promise:s}},{lie:37}],7:[function(e,i,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=e("pako"),a=e("./utils"),l=e("./stream/GenericWorker"),u=s?"uint8array":"array";function c(f,p){l.call(this,"FlateWorker/"+f),this._pako=null,this._pakoAction=f,this._pakoOptions=p,this.meta={}}r.magic="\b\0",a.inherits(c,l),c.prototype.processChunk=function(f){this.meta=f.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(u,f.data),!1)},c.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},c.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},c.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var f=this;this._pako.onData=function(p){f.push({data:p,meta:f.meta})}},r.compressWorker=function(f){return new c("Deflate",f)},r.uncompressWorker=function(){return new c("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,i,r){function s(d,v){var g,m="";for(g=0;g<v;g++)m+=String.fromCharCode(255&d),d>>>=8;return m}function o(d,v,g,m,h,x){var _,M,E=d.file,P=d.compression,C=x!==u.utf8encode,N=a.transformTo("string",x(E.name)),O=a.transformTo("string",u.utf8encode(E.name)),w=E.comment,D=a.transformTo("string",x(w)),T=a.transformTo("string",u.utf8encode(w)),U=O.length!==E.name.length,S=T.length!==w.length,H="",J="",q="",tt=E.dir,Z=E.date,st={crc32:0,compressedSize:0,uncompressedSize:0};v&&!g||(st.crc32=d.crc32,st.compressedSize=d.compressedSize,st.uncompressedSize=d.uncompressedSize);var j=0;v&&(j|=8),C||!U&&!S||(j|=2048);var $=0,xt=0;tt&&($|=16),h==="UNIX"?(xt=798,$|=function(W,pt){var nt=W;return W||(nt=pt?16893:33204),(65535&nt)<<16}(E.unixPermissions,tt)):(xt=20,$|=function(W){return 63&(W||0)}(E.dosPermissions)),_=Z.getUTCHours(),_<<=6,_|=Z.getUTCMinutes(),_<<=5,_|=Z.getUTCSeconds()/2,M=Z.getUTCFullYear()-1980,M<<=4,M|=Z.getUTCMonth()+1,M<<=5,M|=Z.getUTCDate(),U&&(J=s(1,1)+s(c(N),4)+O,H+="up"+s(J.length,2)+J),S&&(q=s(1,1)+s(c(D),4)+T,H+="uc"+s(q.length,2)+q);var V="";return V+=`
\0`,V+=s(j,2),V+=P.magic,V+=s(_,2),V+=s(M,2),V+=s(st.crc32,4),V+=s(st.compressedSize,4),V+=s(st.uncompressedSize,4),V+=s(N.length,2),V+=s(H.length,2),{fileRecord:f.LOCAL_FILE_HEADER+V+N+H,dirRecord:f.CENTRAL_FILE_HEADER+s(xt,2)+V+s(D.length,2)+"\0\0\0\0"+s($,4)+s(m,4)+N+H+D}}var a=e("../utils"),l=e("../stream/GenericWorker"),u=e("../utf8"),c=e("../crc32"),f=e("../signature");function p(d,v,g,m){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=v,this.zipPlatform=g,this.encodeFileName=m,this.streamFiles=d,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(p,l),p.prototype.push=function(d){var v=d.meta.percent||0,g=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(d):(this.bytesWritten+=d.data.length,l.prototype.push.call(this,{data:d.data,meta:{currentFile:this.currentFile,percent:g?(v+100*(g-m-1))/g:100}}))},p.prototype.openedSource=function(d){this.currentSourceOffset=this.bytesWritten,this.currentFile=d.file.name;var v=this.streamFiles&&!d.file.dir;if(v){var g=o(d,v,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},p.prototype.closedSource=function(d){this.accumulate=!1;var v=this.streamFiles&&!d.file.dir,g=o(d,v,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),v)this.push({data:function(m){return f.DATA_DESCRIPTOR+s(m.crc32,4)+s(m.compressedSize,4)+s(m.uncompressedSize,4)}(d),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},p.prototype.flush=function(){for(var d=this.bytesWritten,v=0;v<this.dirRecords.length;v++)this.push({data:this.dirRecords[v],meta:{percent:100}});var g=this.bytesWritten-d,m=function(h,x,_,M,E){var P=a.transformTo("string",E(M));return f.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(h,2)+s(h,2)+s(x,4)+s(_,4)+s(P.length,2)+P}(this.dirRecords.length,g,d,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},p.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},p.prototype.registerPrevious=function(d){this._sources.push(d);var v=this;return d.on("data",function(g){v.processChunk(g)}),d.on("end",function(){v.closedSource(v.previous.streamInfo),v._sources.length?v.prepareNextSource():v.end()}),d.on("error",function(g){v.error(g)}),this},p.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},p.prototype.error=function(d){var v=this._sources;if(!l.prototype.error.call(this,d))return!1;for(var g=0;g<v.length;g++)try{v[g].error(d)}catch{}return!0},p.prototype.lock=function(){l.prototype.lock.call(this);for(var d=this._sources,v=0;v<d.length;v++)d[v].lock()},i.exports=p},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,i,r){var s=e("../compressions"),o=e("./ZipFileWorker");r.generateWorker=function(a,l,u){var c=new o(l.streamFiles,u,l.platform,l.encodeFileName),f=0;try{a.forEach(function(p,d){f++;var v=function(x,_){var M=x||_,E=s[M];if(!E)throw new Error(M+" is not a valid compression method !");return E}(d.options.compression,l.compression),g=d.options.compressionOptions||l.compressionOptions||{},m=d.dir,h=d.date;d._compressWorker(v,g).withStreamInfo("file",{name:p,dir:m,date:h,comment:d.comment||"",unixPermissions:d.unixPermissions,dosPermissions:d.dosPermissions}).pipe(c)}),c.entriesCount=f}catch(p){c.error(p)}return c}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,i,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=e("./external"),i.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,i,r){var s=e("./utils"),o=e("./external"),a=e("./utf8"),l=e("./zipEntries"),u=e("./stream/Crc32Probe"),c=e("./nodejsUtils");function f(p){return new o.Promise(function(d,v){var g=p.decompressed.getContentWorker().pipe(new u);g.on("error",function(m){v(m)}).on("end",function(){g.streamInfo.crc32!==p.decompressed.crc32?v(new Error("Corrupted zip : CRC32 mismatch")):d()}).resume()})}i.exports=function(p,d){var v=this;return d=s.extend(d||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),c.isNode&&c.isStream(p)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",p,!0,d.optimizedBinaryString,d.base64).then(function(g){var m=new l(d);return m.load(g),m}).then(function(g){var m=[o.Promise.resolve(g)],h=g.files;if(d.checkCRC32)for(var x=0;x<h.length;x++)m.push(f(h[x]));return o.Promise.all(m)}).then(function(g){for(var m=g.shift(),h=m.files,x=0;x<h.length;x++){var _=h[x],M=_.fileNameStr,E=s.resolve(_.fileNameStr);v.file(E,_.decompressed,{binary:!0,optimizedBinaryString:!0,date:_.date,dir:_.dir,comment:_.fileCommentStr.length?_.fileCommentStr:null,unixPermissions:_.unixPermissions,dosPermissions:_.dosPermissions,createFolders:d.createFolders}),_.dir||(v.file(E).unsafeOriginalName=M)}return m.zipComment.length&&(v.comment=m.zipComment),v})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,i,r){var s=e("../utils"),o=e("../stream/GenericWorker");function a(l,u){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(u)}s.inherits(a,o),a.prototype._bindStream=function(l){var u=this;(this._stream=l).pause(),l.on("data",function(c){u.push({data:c,meta:{percent:0}})}).on("error",function(c){u.isPaused?this.generatedError=c:u.error(c)}).on("end",function(){u.isPaused?u._upstreamEnded=!0:u.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,i,r){var s=e("readable-stream").Readable;function o(a,l,u){s.call(this,l),this._helper=a;var c=this;a.on("data",function(f,p){c.push(f)||c._helper.pause(),u&&u(p)}).on("error",function(f){c.emit("error",f)}).on("end",function(){c.push(null)})}e("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},i.exports=o},{"../utils":32,"readable-stream":16}],14:[function(e,i,r){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,i,r){function s(E,P,C){var N,O=a.getTypeOf(P),w=a.extend(C||{},c);w.date=w.date||new Date,w.compression!==null&&(w.compression=w.compression.toUpperCase()),typeof w.unixPermissions=="string"&&(w.unixPermissions=parseInt(w.unixPermissions,8)),w.unixPermissions&&16384&w.unixPermissions&&(w.dir=!0),w.dosPermissions&&16&w.dosPermissions&&(w.dir=!0),w.dir&&(E=h(E)),w.createFolders&&(N=m(E))&&x.call(this,N,!0);var D=O==="string"&&w.binary===!1&&w.base64===!1;C&&C.binary!==void 0||(w.binary=!D),(P instanceof f&&P.uncompressedSize===0||w.dir||!P||P.length===0)&&(w.base64=!1,w.binary=!0,P="",w.compression="STORE",O="string");var T=null;T=P instanceof f||P instanceof l?P:v.isNode&&v.isStream(P)?new g(E,P):a.prepareContent(E,P,w.binary,w.optimizedBinaryString,w.base64);var U=new p(E,T,w);this.files[E]=U}var o=e("./utf8"),a=e("./utils"),l=e("./stream/GenericWorker"),u=e("./stream/StreamHelper"),c=e("./defaults"),f=e("./compressedObject"),p=e("./zipObject"),d=e("./generate"),v=e("./nodejsUtils"),g=e("./nodejs/NodejsStreamInputAdapter"),m=function(E){E.slice(-1)==="/"&&(E=E.substring(0,E.length-1));var P=E.lastIndexOf("/");return 0<P?E.substring(0,P):""},h=function(E){return E.slice(-1)!=="/"&&(E+="/"),E},x=function(E,P){return P=P!==void 0?P:c.createFolders,E=h(E),this.files[E]||s.call(this,E,null,{dir:!0,createFolders:P}),this.files[E]};function _(E){return Object.prototype.toString.call(E)==="[object RegExp]"}var M={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(E){var P,C,N;for(P in this.files)N=this.files[P],(C=P.slice(this.root.length,P.length))&&P.slice(0,this.root.length)===this.root&&E(C,N)},filter:function(E){var P=[];return this.forEach(function(C,N){E(C,N)&&P.push(N)}),P},file:function(E,P,C){if(arguments.length!==1)return E=this.root+E,s.call(this,E,P,C),this;if(_(E)){var N=E;return this.filter(function(w,D){return!D.dir&&N.test(w)})}var O=this.files[this.root+E];return O&&!O.dir?O:null},folder:function(E){if(!E)return this;if(_(E))return this.filter(function(O,w){return w.dir&&E.test(O)});var P=this.root+E,C=x.call(this,P),N=this.clone();return N.root=C.name,N},remove:function(E){E=this.root+E;var P=this.files[E];if(P||(E.slice(-1)!=="/"&&(E+="/"),P=this.files[E]),P&&!P.dir)delete this.files[E];else for(var C=this.filter(function(O,w){return w.name.slice(0,E.length)===E}),N=0;N<C.length;N++)delete this.files[C[N].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(E){var P,C={};try{if((C=a.extend(E||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=C.type.toLowerCase(),C.compression=C.compression.toUpperCase(),C.type==="binarystring"&&(C.type="string"),!C.type)throw new Error("No output type specified.");a.checkSupport(C.type),C.platform!=="darwin"&&C.platform!=="freebsd"&&C.platform!=="linux"&&C.platform!=="sunos"||(C.platform="UNIX"),C.platform==="win32"&&(C.platform="DOS");var N=C.comment||this.comment||"";P=d.generateWorker(this,C,N)}catch(O){(P=new l("error")).error(O)}return new u(P,C.type||"string",C.mimeType)},generateAsync:function(E,P){return this.generateInternalStream(E).accumulate(P)},generateNodeStream:function(E,P){return(E=E||{}).type||(E.type="nodebuffer"),this.generateInternalStream(E).toNodejsStream(P)}};i.exports=M},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,i,r){i.exports=e("stream")},{stream:void 0}],17:[function(e,i,r){var s=e("./DataReader");function o(a){s.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),u=a.charCodeAt(1),c=a.charCodeAt(2),f=a.charCodeAt(3),p=this.length-4;0<=p;--p)if(this.data[p]===l&&this.data[p+1]===u&&this.data[p+2]===c&&this.data[p+3]===f)return p-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),u=a.charCodeAt(1),c=a.charCodeAt(2),f=a.charCodeAt(3),p=this.readData(4);return l===p[0]&&u===p[1]&&c===p[2]&&f===p[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./DataReader":18}],18:[function(e,i,r){var s=e("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,u=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)u=(u<<8)+this.byteAt(l);return this.index+=a,u},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},i.exports=o},{"../utils":32}],19:[function(e,i,r){var s=e("./Uint8ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,i,r){var s=e("./DataReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./DataReader":18}],21:[function(e,i,r){var s=e("./ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(e,i,r){var s=e("../utils"),o=e("../support"),a=e("./ArrayReader"),l=e("./StringReader"),u=e("./NodeBufferReader"),c=e("./Uint8ArrayReader");i.exports=function(f){var p=s.getTypeOf(f);return s.checkSupport(p),p!=="string"||o.uint8array?p==="nodebuffer"?new u(f):o.uint8array?new c(s.transformTo("uint8array",f)):new a(s.transformTo("array",f)):new l(f)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,i,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,i,r){var s=e("./GenericWorker"),o=e("../utils");function a(l){s.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,s),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},i.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,i,r){var s=e("./GenericWorker"),o=e("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,s),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},i.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,i,r){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(a,o),a.prototype.processChunk=function(l){if(l){var u=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=u+l.data.length}o.prototype.processChunk.call(this,l)},i.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,i,r){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataWorker");var u=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(c){u.dataIsReady=!0,u.data=c,u.max=c&&c.length||0,u.type=s.getTypeOf(c),u.isPaused||u._tickAndRepeat()},function(c){u.error(c)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,u=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,u);break;case"uint8array":l=this.data.subarray(this.index,u);break;case"array":case"nodebuffer":l=this.data.slice(this.index,u)}return this.index=u,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,i,r){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},i.exports=s},{}],29:[function(e,i,r){var s=e("../utils"),o=e("./ConvertWorker"),a=e("./GenericWorker"),l=e("../base64"),u=e("../support"),c=e("../external"),f=null;if(u.nodestream)try{f=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function p(v,g){return new c.Promise(function(m,h){var x=[],_=v._internalType,M=v._outputType,E=v._mimeType;v.on("data",function(P,C){x.push(P),g&&g(C)}).on("error",function(P){x=[],h(P)}).on("end",function(){try{var P=function(C,N,O){switch(C){case"blob":return s.newBlob(s.transformTo("arraybuffer",N),O);case"base64":return l.encode(N);default:return s.transformTo(C,N)}}(M,function(C,N){var O,w=0,D=null,T=0;for(O=0;O<N.length;O++)T+=N[O].length;switch(C){case"string":return N.join("");case"array":return Array.prototype.concat.apply([],N);case"uint8array":for(D=new Uint8Array(T),O=0;O<N.length;O++)D.set(N[O],w),w+=N[O].length;return D;case"nodebuffer":return Buffer.concat(N);default:throw new Error("concat : unsupported type '"+C+"'")}}(_,x),E);m(P)}catch(C){h(C)}x=[]}).resume()})}function d(v,g,m){var h=g;switch(g){case"blob":case"arraybuffer":h="uint8array";break;case"base64":h="string"}try{this._internalType=h,this._outputType=g,this._mimeType=m,s.checkSupport(h),this._worker=v.pipe(new o(h)),v.lock()}catch(x){this._worker=new a("error"),this._worker.error(x)}}d.prototype={accumulate:function(v){return p(this,v)},on:function(v,g){var m=this;return v==="data"?this._worker.on(v,function(h){g.call(m,h.data,h.meta)}):this._worker.on(v,function(){s.delay(g,arguments,m)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(v){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new f(this,{objectMode:this._outputType!=="nodebuffer"},v)}},i.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,i,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),r.blob=o.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,i,r){for(var s=e("./utils"),o=e("./support"),a=e("./nodejsUtils"),l=e("./stream/GenericWorker"),u=new Array(256),c=0;c<256;c++)u[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;u[254]=u[254]=1;function f(){l.call(this,"utf-8 decode"),this.leftOver=null}function p(){l.call(this,"utf-8 encode")}r.utf8encode=function(d){return o.nodebuffer?a.newBufferFrom(d,"utf-8"):function(v){var g,m,h,x,_,M=v.length,E=0;for(x=0;x<M;x++)(64512&(m=v.charCodeAt(x)))==55296&&x+1<M&&(64512&(h=v.charCodeAt(x+1)))==56320&&(m=65536+(m-55296<<10)+(h-56320),x++),E+=m<128?1:m<2048?2:m<65536?3:4;for(g=o.uint8array?new Uint8Array(E):new Array(E),x=_=0;_<E;x++)(64512&(m=v.charCodeAt(x)))==55296&&x+1<M&&(64512&(h=v.charCodeAt(x+1)))==56320&&(m=65536+(m-55296<<10)+(h-56320),x++),m<128?g[_++]=m:(m<2048?g[_++]=192|m>>>6:(m<65536?g[_++]=224|m>>>12:(g[_++]=240|m>>>18,g[_++]=128|m>>>12&63),g[_++]=128|m>>>6&63),g[_++]=128|63&m);return g}(d)},r.utf8decode=function(d){return o.nodebuffer?s.transformTo("nodebuffer",d).toString("utf-8"):function(v){var g,m,h,x,_=v.length,M=new Array(2*_);for(g=m=0;g<_;)if((h=v[g++])<128)M[m++]=h;else if(4<(x=u[h]))M[m++]=65533,g+=x-1;else{for(h&=x===2?31:x===3?15:7;1<x&&g<_;)h=h<<6|63&v[g++],x--;1<x?M[m++]=65533:h<65536?M[m++]=h:(h-=65536,M[m++]=55296|h>>10&1023,M[m++]=56320|1023&h)}return M.length!==m&&(M.subarray?M=M.subarray(0,m):M.length=m),s.applyFromCharCode(M)}(d=s.transformTo(o.uint8array?"uint8array":"array",d))},s.inherits(f,l),f.prototype.processChunk=function(d){var v=s.transformTo(o.uint8array?"uint8array":"array",d.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var g=v;(v=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),v.set(g,this.leftOver.length)}else v=this.leftOver.concat(v);this.leftOver=null}var m=function(x,_){var M;for((_=_||x.length)>x.length&&(_=x.length),M=_-1;0<=M&&(192&x[M])==128;)M--;return M<0||M===0?_:M+u[x[M]]>_?M:_}(v),h=v;m!==v.length&&(o.uint8array?(h=v.subarray(0,m),this.leftOver=v.subarray(m,v.length)):(h=v.slice(0,m),this.leftOver=v.slice(m,v.length))),this.push({data:r.utf8decode(h),meta:d.meta})},f.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=f,s.inherits(p,l),p.prototype.processChunk=function(d){this.push({data:r.utf8encode(d.data),meta:d.meta})},r.Utf8EncodeWorker=p},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,i,r){var s=e("./support"),o=e("./base64"),a=e("./nodejsUtils"),l=e("./external");function u(g){return g}function c(g,m){for(var h=0;h<g.length;++h)m[h]=255&g.charCodeAt(h);return m}e("setimmediate"),r.newBlob=function(g,m){r.checkSupport("blob");try{return new Blob([g],{type:m})}catch{try{var h=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return h.append(g),h.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};var f={stringifyByChunk:function(g,m,h){var x=[],_=0,M=g.length;if(M<=h)return String.fromCharCode.apply(null,g);for(;_<M;)m==="array"||m==="nodebuffer"?x.push(String.fromCharCode.apply(null,g.slice(_,Math.min(_+h,M)))):x.push(String.fromCharCode.apply(null,g.subarray(_,Math.min(_+h,M)))),_+=h;return x.join("")},stringifyByChar:function(g){for(var m="",h=0;h<g.length;h++)m+=String.fromCharCode(g[h]);return m},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function p(g){var m=65536,h=r.getTypeOf(g),x=!0;if(h==="uint8array"?x=f.applyCanBeUsed.uint8array:h==="nodebuffer"&&(x=f.applyCanBeUsed.nodebuffer),x)for(;1<m;)try{return f.stringifyByChunk(g,h,m)}catch{m=Math.floor(m/2)}return f.stringifyByChar(g)}function d(g,m){for(var h=0;h<g.length;h++)m[h]=g[h];return m}r.applyFromCharCode=p;var v={};v.string={string:u,array:function(g){return c(g,new Array(g.length))},arraybuffer:function(g){return v.string.uint8array(g).buffer},uint8array:function(g){return c(g,new Uint8Array(g.length))},nodebuffer:function(g){return c(g,a.allocBuffer(g.length))}},v.array={string:p,array:u,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(g)}},v.arraybuffer={string:function(g){return p(new Uint8Array(g))},array:function(g){return d(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:u,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(new Uint8Array(g))}},v.uint8array={string:p,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:u,nodebuffer:function(g){return a.newBufferFrom(g)}},v.nodebuffer={string:p,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return v.nodebuffer.uint8array(g).buffer},uint8array:function(g){return d(g,new Uint8Array(g.length))},nodebuffer:u},r.transformTo=function(g,m){if(m=m||"",!g)return m;r.checkSupport(g);var h=r.getTypeOf(m);return v[h][g](m)},r.resolve=function(g){for(var m=g.split("/"),h=[],x=0;x<m.length;x++){var _=m[x];_==="."||_===""&&x!==0&&x!==m.length-1||(_===".."?h.pop():h.push(_))}return h.join("/")},r.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(g)?"nodebuffer":s.uint8array&&g instanceof Uint8Array?"uint8array":s.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(g){if(!s[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(g){var m,h,x="";for(h=0;h<(g||"").length;h++)x+="\\x"+((m=g.charCodeAt(h))<16?"0":"")+m.toString(16).toUpperCase();return x},r.delay=function(g,m,h){setImmediate(function(){g.apply(h||null,m||[])})},r.inherits=function(g,m){function h(){}h.prototype=m.prototype,g.prototype=new h},r.extend=function(){var g,m,h={};for(g=0;g<arguments.length;g++)for(m in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],m)&&h[m]===void 0&&(h[m]=arguments[g][m]);return h},r.prepareContent=function(g,m,h,x,_){return l.Promise.resolve(m).then(function(M){return s.blob&&(M instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(M))!==-1)&&typeof FileReader<"u"?new l.Promise(function(E,P){var C=new FileReader;C.onload=function(N){E(N.target.result)},C.onerror=function(N){P(N.target.error)},C.readAsArrayBuffer(M)}):M}).then(function(M){var E=r.getTypeOf(M);return E?(E==="arraybuffer"?M=r.transformTo("uint8array",M):E==="string"&&(_?M=o.decode(M):h&&x!==!0&&(M=function(P){return c(P,s.uint8array?new Uint8Array(P.length):new Array(P.length))}(M))),M):l.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,i,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./signature"),l=e("./zipEntry"),u=e("./support");function c(f){this.files=[],this.loadOptions=f}c.prototype={checkSignature:function(f){if(!this.reader.readAndCheckSignature(f)){this.reader.index-=4;var p=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(p)+", expected "+o.pretty(f)+")")}},isSignature:function(f,p){var d=this.reader.index;this.reader.setIndex(f);var v=this.reader.readString(4)===p;return this.reader.setIndex(d),v},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var f=this.reader.readData(this.zipCommentLength),p=u.uint8array?"uint8array":"array",d=o.transformTo(p,f);this.zipComment=this.loadOptions.decodeFileName(d)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var f,p,d,v=this.zip64EndOfCentralSize-44;0<v;)f=this.reader.readInt(2),p=this.reader.readInt(4),d=this.reader.readData(p),this.zip64ExtensibleData[f]={id:f,length:p,value:d}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var f,p;for(f=0;f<this.files.length;f++)p=this.files[f],this.reader.setIndex(p.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),p.readLocalPart(this.reader),p.handleUTF8(),p.processAttributes()},readCentralDir:function(){var f;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(f=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(f);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var f=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(f<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(f);var p=f;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(f=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(f),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var d=this.centralDirOffset+this.centralDirSize;this.zip64&&(d+=20,d+=12+this.zip64EndOfCentralSize);var v=p-d;if(0<v)this.isSignature(p,a.CENTRAL_FILE_HEADER)||(this.reader.zero=v);else if(v<0)throw new Error("Corrupted zip: missing "+Math.abs(v)+" bytes.")},prepareReader:function(f){this.reader=s(f)},load:function(f){this.prepareReader(f),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=c},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,i,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./compressedObject"),l=e("./crc32"),u=e("./utf8"),c=e("./compressions"),f=e("./support");function p(d,v){this.options=d,this.loadOptions=v}p.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(d){var v,g;if(d.skip(22),this.fileNameLength=d.readInt(2),g=d.readInt(2),this.fileName=d.readData(this.fileNameLength),d.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((v=function(m){for(var h in c)if(Object.prototype.hasOwnProperty.call(c,h)&&c[h].magic===m)return c[h];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,v,d.readData(this.compressedSize))},readCentralPart:function(d){this.versionMadeBy=d.readInt(2),d.skip(2),this.bitFlag=d.readInt(2),this.compressionMethod=d.readString(2),this.date=d.readDate(),this.crc32=d.readInt(4),this.compressedSize=d.readInt(4),this.uncompressedSize=d.readInt(4);var v=d.readInt(2);if(this.extraFieldsLength=d.readInt(2),this.fileCommentLength=d.readInt(2),this.diskNumberStart=d.readInt(2),this.internalFileAttributes=d.readInt(2),this.externalFileAttributes=d.readInt(4),this.localHeaderOffset=d.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");d.skip(v),this.readExtraFields(d),this.parseZIP64ExtraField(d),this.fileComment=d.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var d=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),d==0&&(this.dosPermissions=63&this.externalFileAttributes),d==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var d=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=d.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=d.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=d.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=d.readInt(4))}},readExtraFields:function(d){var v,g,m,h=d.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});d.index+4<h;)v=d.readInt(2),g=d.readInt(2),m=d.readData(g),this.extraFields[v]={id:v,length:g,value:m};d.setIndex(h)},handleUTF8:function(){var d=f.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=u.utf8decode(this.fileName),this.fileCommentStr=u.utf8decode(this.fileComment);else{var v=this.findExtraFieldUnicodePath();if(v!==null)this.fileNameStr=v;else{var g=o.transformTo(d,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var h=o.transformTo(d,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(h)}}},findExtraFieldUnicodePath:function(){var d=this.extraFields[28789];if(d){var v=s(d.value);return v.readInt(1)!==1||l(this.fileName)!==v.readInt(4)?null:u.utf8decode(v.readData(d.length-5))}return null},findExtraFieldUnicodeComment:function(){var d=this.extraFields[25461];if(d){var v=s(d.value);return v.readInt(1)!==1||l(this.fileComment)!==v.readInt(4)?null:u.utf8decode(v.readData(d.length-5))}return null}},i.exports=p},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,i,r){function s(v,g,m){this.name=v,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=g,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var o=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),l=e("./utf8"),u=e("./compressedObject"),c=e("./stream/GenericWorker");s.prototype={internalStream:function(v){var g=null,m="string";try{if(!v)throw new Error("No output type specified.");var h=(m=v.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),g=this._decompressWorker();var x=!this._dataBinary;x&&!h&&(g=g.pipe(new l.Utf8EncodeWorker)),!x&&h&&(g=g.pipe(new l.Utf8DecodeWorker))}catch(_){(g=new c("error")).error(_)}return new o(g,m,"")},async:function(v,g){return this.internalStream(v).accumulate(g)},nodeStream:function(v,g){return this.internalStream(v||"nodebuffer").toNodejsStream(g)},_compressWorker:function(v,g){if(this._data instanceof u&&this._data.compression.magic===v.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new l.Utf8EncodeWorker)),u.createWorkerFrom(m,v,g)},_decompressWorker:function(){return this._data instanceof u?this._data.getContentWorker():this._data instanceof c?this._data:new a(this._data)}};for(var f=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],p=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},d=0;d<f.length;d++)s.prototype[f[d]]=p;i.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,i,r){(function(s){var o,a,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var u=0,c=new l(v),f=s.document.createTextNode("");c.observe(f,{characterData:!0}),o=function(){f.data=u=++u%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var g=s.document.createElement("script");g.onreadystatechange=function(){v(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},s.document.documentElement.appendChild(g)}:function(){setTimeout(v,0)};else{var p=new s.MessageChannel;p.port1.onmessage=v,o=function(){p.port2.postMessage(0)}}var d=[];function v(){var g,m;a=!0;for(var h=d.length;h;){for(m=d,d=[],g=-1;++g<h;)m[g]();h=d.length}a=!1}i.exports=function(g){d.push(g)!==1||a||o()}}).call(this,typeof Qs<"u"?Qs:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,i,r){var s=e("immediate");function o(){}var a={},l=["REJECTED"],u=["FULFILLED"],c=["PENDING"];function f(h){if(typeof h!="function")throw new TypeError("resolver must be a function");this.state=c,this.queue=[],this.outcome=void 0,h!==o&&g(this,h)}function p(h,x,_){this.promise=h,typeof x=="function"&&(this.onFulfilled=x,this.callFulfilled=this.otherCallFulfilled),typeof _=="function"&&(this.onRejected=_,this.callRejected=this.otherCallRejected)}function d(h,x,_){s(function(){var M;try{M=x(_)}catch(E){return a.reject(h,E)}M===h?a.reject(h,new TypeError("Cannot resolve promise with itself")):a.resolve(h,M)})}function v(h){var x=h&&h.then;if(h&&(typeof h=="object"||typeof h=="function")&&typeof x=="function")return function(){x.apply(h,arguments)}}function g(h,x){var _=!1;function M(C){_||(_=!0,a.reject(h,C))}function E(C){_||(_=!0,a.resolve(h,C))}var P=m(function(){x(E,M)});P.status==="error"&&M(P.value)}function m(h,x){var _={};try{_.value=h(x),_.status="success"}catch(M){_.status="error",_.value=M}return _}(i.exports=f).prototype.finally=function(h){if(typeof h!="function")return this;var x=this.constructor;return this.then(function(_){return x.resolve(h()).then(function(){return _})},function(_){return x.resolve(h()).then(function(){throw _})})},f.prototype.catch=function(h){return this.then(null,h)},f.prototype.then=function(h,x){if(typeof h!="function"&&this.state===u||typeof x!="function"&&this.state===l)return this;var _=new this.constructor(o);return this.state!==c?d(_,this.state===u?h:x,this.outcome):this.queue.push(new p(_,h,x)),_},p.prototype.callFulfilled=function(h){a.resolve(this.promise,h)},p.prototype.otherCallFulfilled=function(h){d(this.promise,this.onFulfilled,h)},p.prototype.callRejected=function(h){a.reject(this.promise,h)},p.prototype.otherCallRejected=function(h){d(this.promise,this.onRejected,h)},a.resolve=function(h,x){var _=m(v,x);if(_.status==="error")return a.reject(h,_.value);var M=_.value;if(M)g(h,M);else{h.state=u,h.outcome=x;for(var E=-1,P=h.queue.length;++E<P;)h.queue[E].callFulfilled(x)}return h},a.reject=function(h,x){h.state=l,h.outcome=x;for(var _=-1,M=h.queue.length;++_<M;)h.queue[_].callRejected(x);return h},f.resolve=function(h){return h instanceof this?h:a.resolve(new this(o),h)},f.reject=function(h){var x=new this(o);return a.reject(x,h)},f.all=function(h){var x=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var _=h.length,M=!1;if(!_)return this.resolve([]);for(var E=new Array(_),P=0,C=-1,N=new this(o);++C<_;)O(h[C],C);return N;function O(w,D){x.resolve(w).then(function(T){E[D]=T,++P!==_||M||(M=!0,a.resolve(N,E))},function(T){M||(M=!0,a.reject(N,T))})}},f.race=function(h){var x=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var _=h.length,M=!1;if(!_)return this.resolve([]);for(var E=-1,P=new this(o);++E<_;)C=h[E],x.resolve(C).then(function(N){M||(M=!0,a.resolve(P,N))},function(N){M||(M=!0,a.reject(P,N))});var C;return P}},{immediate:36}],38:[function(e,i,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),i.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,i,r){var s=e("./zlib/deflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/messages"),u=e("./zlib/zstream"),c=Object.prototype.toString,f=0,p=-1,d=0,v=8;function g(h){if(!(this instanceof g))return new g(h);this.options=o.assign({level:p,method:v,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},h||{});var x=this.options;x.raw&&0<x.windowBits?x.windowBits=-x.windowBits:x.gzip&&0<x.windowBits&&x.windowBits<16&&(x.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var _=s.deflateInit2(this.strm,x.level,x.method,x.windowBits,x.memLevel,x.strategy);if(_!==f)throw new Error(l[_]);if(x.header&&s.deflateSetHeader(this.strm,x.header),x.dictionary){var M;if(M=typeof x.dictionary=="string"?a.string2buf(x.dictionary):c.call(x.dictionary)==="[object ArrayBuffer]"?new Uint8Array(x.dictionary):x.dictionary,(_=s.deflateSetDictionary(this.strm,M))!==f)throw new Error(l[_]);this._dict_set=!0}}function m(h,x){var _=new g(x);if(_.push(h,!0),_.err)throw _.msg||l[_.err];return _.result}g.prototype.push=function(h,x){var _,M,E=this.strm,P=this.options.chunkSize;if(this.ended)return!1;M=x===~~x?x:x===!0?4:0,typeof h=="string"?E.input=a.string2buf(h):c.call(h)==="[object ArrayBuffer]"?E.input=new Uint8Array(h):E.input=h,E.next_in=0,E.avail_in=E.input.length;do{if(E.avail_out===0&&(E.output=new o.Buf8(P),E.next_out=0,E.avail_out=P),(_=s.deflate(E,M))!==1&&_!==f)return this.onEnd(_),!(this.ended=!0);E.avail_out!==0&&(E.avail_in!==0||M!==4&&M!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(E.output,E.next_out))):this.onData(o.shrinkBuf(E.output,E.next_out)))}while((0<E.avail_in||E.avail_out===0)&&_!==1);return M===4?(_=s.deflateEnd(this.strm),this.onEnd(_),this.ended=!0,_===f):M!==2||(this.onEnd(f),!(E.avail_out=0))},g.prototype.onData=function(h){this.chunks.push(h)},g.prototype.onEnd=function(h){h===f&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},r.Deflate=g,r.deflate=m,r.deflateRaw=function(h,x){return(x=x||{}).raw=!0,m(h,x)},r.gzip=function(h,x){return(x=x||{}).gzip=!0,m(h,x)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,i,r){var s=e("./zlib/inflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/constants"),u=e("./zlib/messages"),c=e("./zlib/zstream"),f=e("./zlib/gzheader"),p=Object.prototype.toString;function d(g){if(!(this instanceof d))return new d(g);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},g||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||g&&g.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&!(15&m.windowBits)&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var h=s.inflateInit2(this.strm,m.windowBits);if(h!==l.Z_OK)throw new Error(u[h]);this.header=new f,s.inflateGetHeader(this.strm,this.header)}function v(g,m){var h=new d(m);if(h.push(g,!0),h.err)throw h.msg||u[h.err];return h.result}d.prototype.push=function(g,m){var h,x,_,M,E,P,C=this.strm,N=this.options.chunkSize,O=this.options.dictionary,w=!1;if(this.ended)return!1;x=m===~~m?m:m===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof g=="string"?C.input=a.binstring2buf(g):p.call(g)==="[object ArrayBuffer]"?C.input=new Uint8Array(g):C.input=g,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new o.Buf8(N),C.next_out=0,C.avail_out=N),(h=s.inflate(C,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&O&&(P=typeof O=="string"?a.string2buf(O):p.call(O)==="[object ArrayBuffer]"?new Uint8Array(O):O,h=s.inflateSetDictionary(this.strm,P)),h===l.Z_BUF_ERROR&&w===!0&&(h=l.Z_OK,w=!1),h!==l.Z_STREAM_END&&h!==l.Z_OK)return this.onEnd(h),!(this.ended=!0);C.next_out&&(C.avail_out!==0&&h!==l.Z_STREAM_END&&(C.avail_in!==0||x!==l.Z_FINISH&&x!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(_=a.utf8border(C.output,C.next_out),M=C.next_out-_,E=a.buf2string(C.output,_),C.next_out=M,C.avail_out=N-M,M&&o.arraySet(C.output,C.output,_,M,0),this.onData(E)):this.onData(o.shrinkBuf(C.output,C.next_out)))),C.avail_in===0&&C.avail_out===0&&(w=!0)}while((0<C.avail_in||C.avail_out===0)&&h!==l.Z_STREAM_END);return h===l.Z_STREAM_END&&(x=l.Z_FINISH),x===l.Z_FINISH?(h=s.inflateEnd(this.strm),this.onEnd(h),this.ended=!0,h===l.Z_OK):x!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(C.avail_out=0))},d.prototype.onData=function(g){this.chunks.push(g)},d.prototype.onEnd=function(g){g===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},r.Inflate=d,r.inflate=v,r.inflateRaw=function(g,m){return(m=m||{}).raw=!0,v(g,m)},r.ungzip=v},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,i,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var u=Array.prototype.slice.call(arguments,1);u.length;){var c=u.shift();if(c){if(typeof c!="object")throw new TypeError(c+"must be non-object");for(var f in c)c.hasOwnProperty(f)&&(l[f]=c[f])}}return l},r.shrinkBuf=function(l,u){return l.length===u?l:l.subarray?l.subarray(0,u):(l.length=u,l)};var o={arraySet:function(l,u,c,f,p){if(u.subarray&&l.subarray)l.set(u.subarray(c,c+f),p);else for(var d=0;d<f;d++)l[p+d]=u[c+d]},flattenChunks:function(l){var u,c,f,p,d,v;for(u=f=0,c=l.length;u<c;u++)f+=l[u].length;for(v=new Uint8Array(f),u=p=0,c=l.length;u<c;u++)d=l[u],v.set(d,p),p+=d.length;return v}},a={arraySet:function(l,u,c,f,p){for(var d=0;d<f;d++)l[p+d]=u[c+d]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,o)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(s)},{}],42:[function(e,i,r){var s=e("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new s.Buf8(256),u=0;u<256;u++)l[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;function c(f,p){if(p<65537&&(f.subarray&&a||!f.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(f,p));for(var d="",v=0;v<p;v++)d+=String.fromCharCode(f[v]);return d}l[254]=l[254]=1,r.string2buf=function(f){var p,d,v,g,m,h=f.length,x=0;for(g=0;g<h;g++)(64512&(d=f.charCodeAt(g)))==55296&&g+1<h&&(64512&(v=f.charCodeAt(g+1)))==56320&&(d=65536+(d-55296<<10)+(v-56320),g++),x+=d<128?1:d<2048?2:d<65536?3:4;for(p=new s.Buf8(x),g=m=0;m<x;g++)(64512&(d=f.charCodeAt(g)))==55296&&g+1<h&&(64512&(v=f.charCodeAt(g+1)))==56320&&(d=65536+(d-55296<<10)+(v-56320),g++),d<128?p[m++]=d:(d<2048?p[m++]=192|d>>>6:(d<65536?p[m++]=224|d>>>12:(p[m++]=240|d>>>18,p[m++]=128|d>>>12&63),p[m++]=128|d>>>6&63),p[m++]=128|63&d);return p},r.buf2binstring=function(f){return c(f,f.length)},r.binstring2buf=function(f){for(var p=new s.Buf8(f.length),d=0,v=p.length;d<v;d++)p[d]=f.charCodeAt(d);return p},r.buf2string=function(f,p){var d,v,g,m,h=p||f.length,x=new Array(2*h);for(d=v=0;d<h;)if((g=f[d++])<128)x[v++]=g;else if(4<(m=l[g]))x[v++]=65533,d+=m-1;else{for(g&=m===2?31:m===3?15:7;1<m&&d<h;)g=g<<6|63&f[d++],m--;1<m?x[v++]=65533:g<65536?x[v++]=g:(g-=65536,x[v++]=55296|g>>10&1023,x[v++]=56320|1023&g)}return c(x,v)},r.utf8border=function(f,p){var d;for((p=p||f.length)>f.length&&(p=f.length),d=p-1;0<=d&&(192&f[d])==128;)d--;return d<0||d===0?p:d+l[f[d]]>p?d:p}},{"./common":41}],43:[function(e,i,r){i.exports=function(s,o,a,l){for(var u=65535&s|0,c=s>>>16&65535|0,f=0;a!==0;){for(a-=f=2e3<a?2e3:a;c=c+(u=u+o[l++]|0)|0,--f;);u%=65521,c%=65521}return u|c<<16|0}},{}],44:[function(e,i,r){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,i,r){var s=function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var u=0;u<8;u++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a}();i.exports=function(o,a,l,u){var c=s,f=u+l;o^=-1;for(var p=u;p<f;p++)o=o>>>8^c[255&(o^a[p])];return-1^o}},{}],46:[function(e,i,r){var s,o=e("../utils/common"),a=e("./trees"),l=e("./adler32"),u=e("./crc32"),c=e("./messages"),f=0,p=4,d=0,v=-2,g=-1,m=4,h=2,x=8,_=9,M=286,E=30,P=19,C=2*M+1,N=15,O=3,w=258,D=w+O+1,T=42,U=113,S=1,H=2,J=3,q=4;function tt(y,z){return y.msg=c[z],z}function Z(y){return(y<<1)-(4<y?9:0)}function st(y){for(var z=y.length;0<=--z;)y[z]=0}function j(y){var z=y.state,B=z.pending;B>y.avail_out&&(B=y.avail_out),B!==0&&(o.arraySet(y.output,z.pending_buf,z.pending_out,B,y.next_out),y.next_out+=B,z.pending_out+=B,y.total_out+=B,y.avail_out-=B,z.pending-=B,z.pending===0&&(z.pending_out=0))}function $(y,z){a._tr_flush_block(y,0<=y.block_start?y.block_start:-1,y.strstart-y.block_start,z),y.block_start=y.strstart,j(y.strm)}function xt(y,z){y.pending_buf[y.pending++]=z}function V(y,z){y.pending_buf[y.pending++]=z>>>8&255,y.pending_buf[y.pending++]=255&z}function W(y,z){var B,L,I=y.max_chain_length,F=y.strstart,Q=y.prev_length,A=y.nice_match,b=y.strstart>y.w_size-D?y.strstart-(y.w_size-D):0,G=y.window,Y=y.w_mask,K=y.prev,it=y.strstart+w,Mt=G[F+Q-1],_t=G[F+Q];y.prev_length>=y.good_match&&(I>>=2),A>y.lookahead&&(A=y.lookahead);do if(G[(B=z)+Q]===_t&&G[B+Q-1]===Mt&&G[B]===G[F]&&G[++B]===G[F+1]){F+=2,B++;do;while(G[++F]===G[++B]&&G[++F]===G[++B]&&G[++F]===G[++B]&&G[++F]===G[++B]&&G[++F]===G[++B]&&G[++F]===G[++B]&&G[++F]===G[++B]&&G[++F]===G[++B]&&F<it);if(L=w-(it-F),F=it-w,Q<L){if(y.match_start=z,A<=(Q=L))break;Mt=G[F+Q-1],_t=G[F+Q]}}while((z=K[z&Y])>b&&--I!=0);return Q<=y.lookahead?Q:y.lookahead}function pt(y){var z,B,L,I,F,Q,A,b,G,Y,K=y.w_size;do{if(I=y.window_size-y.lookahead-y.strstart,y.strstart>=K+(K-D)){for(o.arraySet(y.window,y.window,K,K,0),y.match_start-=K,y.strstart-=K,y.block_start-=K,z=B=y.hash_size;L=y.head[--z],y.head[z]=K<=L?L-K:0,--B;);for(z=B=K;L=y.prev[--z],y.prev[z]=K<=L?L-K:0,--B;);I+=K}if(y.strm.avail_in===0)break;if(Q=y.strm,A=y.window,b=y.strstart+y.lookahead,G=I,Y=void 0,Y=Q.avail_in,G<Y&&(Y=G),B=Y===0?0:(Q.avail_in-=Y,o.arraySet(A,Q.input,Q.next_in,Y,b),Q.state.wrap===1?Q.adler=l(Q.adler,A,Y,b):Q.state.wrap===2&&(Q.adler=u(Q.adler,A,Y,b)),Q.next_in+=Y,Q.total_in+=Y,Y),y.lookahead+=B,y.lookahead+y.insert>=O)for(F=y.strstart-y.insert,y.ins_h=y.window[F],y.ins_h=(y.ins_h<<y.hash_shift^y.window[F+1])&y.hash_mask;y.insert&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[F+O-1])&y.hash_mask,y.prev[F&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=F,F++,y.insert--,!(y.lookahead+y.insert<O)););}while(y.lookahead<D&&y.strm.avail_in!==0)}function nt(y,z){for(var B,L;;){if(y.lookahead<D){if(pt(y),y.lookahead<D&&z===f)return S;if(y.lookahead===0)break}if(B=0,y.lookahead>=O&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+O-1])&y.hash_mask,B=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart),B!==0&&y.strstart-B<=y.w_size-D&&(y.match_length=W(y,B)),y.match_length>=O)if(L=a._tr_tally(y,y.strstart-y.match_start,y.match_length-O),y.lookahead-=y.match_length,y.match_length<=y.max_lazy_match&&y.lookahead>=O){for(y.match_length--;y.strstart++,y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+O-1])&y.hash_mask,B=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart,--y.match_length!=0;);y.strstart++}else y.strstart+=y.match_length,y.match_length=0,y.ins_h=y.window[y.strstart],y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+1])&y.hash_mask;else L=a._tr_tally(y,0,y.window[y.strstart]),y.lookahead--,y.strstart++;if(L&&($(y,!1),y.strm.avail_out===0))return S}return y.insert=y.strstart<O-1?y.strstart:O-1,z===p?($(y,!0),y.strm.avail_out===0?J:q):y.last_lit&&($(y,!1),y.strm.avail_out===0)?S:H}function at(y,z){for(var B,L,I;;){if(y.lookahead<D){if(pt(y),y.lookahead<D&&z===f)return S;if(y.lookahead===0)break}if(B=0,y.lookahead>=O&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+O-1])&y.hash_mask,B=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart),y.prev_length=y.match_length,y.prev_match=y.match_start,y.match_length=O-1,B!==0&&y.prev_length<y.max_lazy_match&&y.strstart-B<=y.w_size-D&&(y.match_length=W(y,B),y.match_length<=5&&(y.strategy===1||y.match_length===O&&4096<y.strstart-y.match_start)&&(y.match_length=O-1)),y.prev_length>=O&&y.match_length<=y.prev_length){for(I=y.strstart+y.lookahead-O,L=a._tr_tally(y,y.strstart-1-y.prev_match,y.prev_length-O),y.lookahead-=y.prev_length-1,y.prev_length-=2;++y.strstart<=I&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+O-1])&y.hash_mask,B=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart),--y.prev_length!=0;);if(y.match_available=0,y.match_length=O-1,y.strstart++,L&&($(y,!1),y.strm.avail_out===0))return S}else if(y.match_available){if((L=a._tr_tally(y,0,y.window[y.strstart-1]))&&$(y,!1),y.strstart++,y.lookahead--,y.strm.avail_out===0)return S}else y.match_available=1,y.strstart++,y.lookahead--}return y.match_available&&(L=a._tr_tally(y,0,y.window[y.strstart-1]),y.match_available=0),y.insert=y.strstart<O-1?y.strstart:O-1,z===p?($(y,!0),y.strm.avail_out===0?J:q):y.last_lit&&($(y,!1),y.strm.avail_out===0)?S:H}function rt(y,z,B,L,I){this.good_length=y,this.max_lazy=z,this.nice_length=B,this.max_chain=L,this.func=I}function mt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=x,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*C),this.dyn_dtree=new o.Buf16(2*(2*E+1)),this.bl_tree=new o.Buf16(2*(2*P+1)),st(this.dyn_ltree),st(this.dyn_dtree),st(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(N+1),this.heap=new o.Buf16(2*M+1),st(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*M+1),st(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function vt(y){var z;return y&&y.state?(y.total_in=y.total_out=0,y.data_type=h,(z=y.state).pending=0,z.pending_out=0,z.wrap<0&&(z.wrap=-z.wrap),z.status=z.wrap?T:U,y.adler=z.wrap===2?0:1,z.last_flush=f,a._tr_init(z),d):tt(y,v)}function R(y){var z=vt(y);return z===d&&function(B){B.window_size=2*B.w_size,st(B.head),B.max_lazy_match=s[B.level].max_lazy,B.good_match=s[B.level].good_length,B.nice_match=s[B.level].nice_length,B.max_chain_length=s[B.level].max_chain,B.strstart=0,B.block_start=0,B.lookahead=0,B.insert=0,B.match_length=B.prev_length=O-1,B.match_available=0,B.ins_h=0}(y.state),z}function X(y,z,B,L,I,F){if(!y)return v;var Q=1;if(z===g&&(z=6),L<0?(Q=0,L=-L):15<L&&(Q=2,L-=16),I<1||_<I||B!==x||L<8||15<L||z<0||9<z||F<0||m<F)return tt(y,v);L===8&&(L=9);var A=new mt;return(y.state=A).strm=y,A.wrap=Q,A.gzhead=null,A.w_bits=L,A.w_size=1<<A.w_bits,A.w_mask=A.w_size-1,A.hash_bits=I+7,A.hash_size=1<<A.hash_bits,A.hash_mask=A.hash_size-1,A.hash_shift=~~((A.hash_bits+O-1)/O),A.window=new o.Buf8(2*A.w_size),A.head=new o.Buf16(A.hash_size),A.prev=new o.Buf16(A.w_size),A.lit_bufsize=1<<I+6,A.pending_buf_size=4*A.lit_bufsize,A.pending_buf=new o.Buf8(A.pending_buf_size),A.d_buf=1*A.lit_bufsize,A.l_buf=3*A.lit_bufsize,A.level=z,A.strategy=F,A.method=B,R(y)}s=[new rt(0,0,0,0,function(y,z){var B=65535;for(B>y.pending_buf_size-5&&(B=y.pending_buf_size-5);;){if(y.lookahead<=1){if(pt(y),y.lookahead===0&&z===f)return S;if(y.lookahead===0)break}y.strstart+=y.lookahead,y.lookahead=0;var L=y.block_start+B;if((y.strstart===0||y.strstart>=L)&&(y.lookahead=y.strstart-L,y.strstart=L,$(y,!1),y.strm.avail_out===0)||y.strstart-y.block_start>=y.w_size-D&&($(y,!1),y.strm.avail_out===0))return S}return y.insert=0,z===p?($(y,!0),y.strm.avail_out===0?J:q):(y.strstart>y.block_start&&($(y,!1),y.strm.avail_out),S)}),new rt(4,4,8,4,nt),new rt(4,5,16,8,nt),new rt(4,6,32,32,nt),new rt(4,4,16,16,at),new rt(8,16,32,32,at),new rt(8,16,128,128,at),new rt(8,32,128,256,at),new rt(32,128,258,1024,at),new rt(32,258,258,4096,at)],r.deflateInit=function(y,z){return X(y,z,x,15,8,0)},r.deflateInit2=X,r.deflateReset=R,r.deflateResetKeep=vt,r.deflateSetHeader=function(y,z){return y&&y.state?y.state.wrap!==2?v:(y.state.gzhead=z,d):v},r.deflate=function(y,z){var B,L,I,F;if(!y||!y.state||5<z||z<0)return y?tt(y,v):v;if(L=y.state,!y.output||!y.input&&y.avail_in!==0||L.status===666&&z!==p)return tt(y,y.avail_out===0?-5:v);if(L.strm=y,B=L.last_flush,L.last_flush=z,L.status===T)if(L.wrap===2)y.adler=0,xt(L,31),xt(L,139),xt(L,8),L.gzhead?(xt(L,(L.gzhead.text?1:0)+(L.gzhead.hcrc?2:0)+(L.gzhead.extra?4:0)+(L.gzhead.name?8:0)+(L.gzhead.comment?16:0)),xt(L,255&L.gzhead.time),xt(L,L.gzhead.time>>8&255),xt(L,L.gzhead.time>>16&255),xt(L,L.gzhead.time>>24&255),xt(L,L.level===9?2:2<=L.strategy||L.level<2?4:0),xt(L,255&L.gzhead.os),L.gzhead.extra&&L.gzhead.extra.length&&(xt(L,255&L.gzhead.extra.length),xt(L,L.gzhead.extra.length>>8&255)),L.gzhead.hcrc&&(y.adler=u(y.adler,L.pending_buf,L.pending,0)),L.gzindex=0,L.status=69):(xt(L,0),xt(L,0),xt(L,0),xt(L,0),xt(L,0),xt(L,L.level===9?2:2<=L.strategy||L.level<2?4:0),xt(L,3),L.status=U);else{var Q=x+(L.w_bits-8<<4)<<8;Q|=(2<=L.strategy||L.level<2?0:L.level<6?1:L.level===6?2:3)<<6,L.strstart!==0&&(Q|=32),Q+=31-Q%31,L.status=U,V(L,Q),L.strstart!==0&&(V(L,y.adler>>>16),V(L,65535&y.adler)),y.adler=1}if(L.status===69)if(L.gzhead.extra){for(I=L.pending;L.gzindex<(65535&L.gzhead.extra.length)&&(L.pending!==L.pending_buf_size||(L.gzhead.hcrc&&L.pending>I&&(y.adler=u(y.adler,L.pending_buf,L.pending-I,I)),j(y),I=L.pending,L.pending!==L.pending_buf_size));)xt(L,255&L.gzhead.extra[L.gzindex]),L.gzindex++;L.gzhead.hcrc&&L.pending>I&&(y.adler=u(y.adler,L.pending_buf,L.pending-I,I)),L.gzindex===L.gzhead.extra.length&&(L.gzindex=0,L.status=73)}else L.status=73;if(L.status===73)if(L.gzhead.name){I=L.pending;do{if(L.pending===L.pending_buf_size&&(L.gzhead.hcrc&&L.pending>I&&(y.adler=u(y.adler,L.pending_buf,L.pending-I,I)),j(y),I=L.pending,L.pending===L.pending_buf_size)){F=1;break}F=L.gzindex<L.gzhead.name.length?255&L.gzhead.name.charCodeAt(L.gzindex++):0,xt(L,F)}while(F!==0);L.gzhead.hcrc&&L.pending>I&&(y.adler=u(y.adler,L.pending_buf,L.pending-I,I)),F===0&&(L.gzindex=0,L.status=91)}else L.status=91;if(L.status===91)if(L.gzhead.comment){I=L.pending;do{if(L.pending===L.pending_buf_size&&(L.gzhead.hcrc&&L.pending>I&&(y.adler=u(y.adler,L.pending_buf,L.pending-I,I)),j(y),I=L.pending,L.pending===L.pending_buf_size)){F=1;break}F=L.gzindex<L.gzhead.comment.length?255&L.gzhead.comment.charCodeAt(L.gzindex++):0,xt(L,F)}while(F!==0);L.gzhead.hcrc&&L.pending>I&&(y.adler=u(y.adler,L.pending_buf,L.pending-I,I)),F===0&&(L.status=103)}else L.status=103;if(L.status===103&&(L.gzhead.hcrc?(L.pending+2>L.pending_buf_size&&j(y),L.pending+2<=L.pending_buf_size&&(xt(L,255&y.adler),xt(L,y.adler>>8&255),y.adler=0,L.status=U)):L.status=U),L.pending!==0){if(j(y),y.avail_out===0)return L.last_flush=-1,d}else if(y.avail_in===0&&Z(z)<=Z(B)&&z!==p)return tt(y,-5);if(L.status===666&&y.avail_in!==0)return tt(y,-5);if(y.avail_in!==0||L.lookahead!==0||z!==f&&L.status!==666){var A=L.strategy===2?function(b,G){for(var Y;;){if(b.lookahead===0&&(pt(b),b.lookahead===0)){if(G===f)return S;break}if(b.match_length=0,Y=a._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++,Y&&($(b,!1),b.strm.avail_out===0))return S}return b.insert=0,G===p?($(b,!0),b.strm.avail_out===0?J:q):b.last_lit&&($(b,!1),b.strm.avail_out===0)?S:H}(L,z):L.strategy===3?function(b,G){for(var Y,K,it,Mt,_t=b.window;;){if(b.lookahead<=w){if(pt(b),b.lookahead<=w&&G===f)return S;if(b.lookahead===0)break}if(b.match_length=0,b.lookahead>=O&&0<b.strstart&&(K=_t[it=b.strstart-1])===_t[++it]&&K===_t[++it]&&K===_t[++it]){Mt=b.strstart+w;do;while(K===_t[++it]&&K===_t[++it]&&K===_t[++it]&&K===_t[++it]&&K===_t[++it]&&K===_t[++it]&&K===_t[++it]&&K===_t[++it]&&it<Mt);b.match_length=w-(Mt-it),b.match_length>b.lookahead&&(b.match_length=b.lookahead)}if(b.match_length>=O?(Y=a._tr_tally(b,1,b.match_length-O),b.lookahead-=b.match_length,b.strstart+=b.match_length,b.match_length=0):(Y=a._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++),Y&&($(b,!1),b.strm.avail_out===0))return S}return b.insert=0,G===p?($(b,!0),b.strm.avail_out===0?J:q):b.last_lit&&($(b,!1),b.strm.avail_out===0)?S:H}(L,z):s[L.level].func(L,z);if(A!==J&&A!==q||(L.status=666),A===S||A===J)return y.avail_out===0&&(L.last_flush=-1),d;if(A===H&&(z===1?a._tr_align(L):z!==5&&(a._tr_stored_block(L,0,0,!1),z===3&&(st(L.head),L.lookahead===0&&(L.strstart=0,L.block_start=0,L.insert=0))),j(y),y.avail_out===0))return L.last_flush=-1,d}return z!==p?d:L.wrap<=0?1:(L.wrap===2?(xt(L,255&y.adler),xt(L,y.adler>>8&255),xt(L,y.adler>>16&255),xt(L,y.adler>>24&255),xt(L,255&y.total_in),xt(L,y.total_in>>8&255),xt(L,y.total_in>>16&255),xt(L,y.total_in>>24&255)):(V(L,y.adler>>>16),V(L,65535&y.adler)),j(y),0<L.wrap&&(L.wrap=-L.wrap),L.pending!==0?d:1)},r.deflateEnd=function(y){var z;return y&&y.state?(z=y.state.status)!==T&&z!==69&&z!==73&&z!==91&&z!==103&&z!==U&&z!==666?tt(y,v):(y.state=null,z===U?tt(y,-3):d):v},r.deflateSetDictionary=function(y,z){var B,L,I,F,Q,A,b,G,Y=z.length;if(!y||!y.state||(F=(B=y.state).wrap)===2||F===1&&B.status!==T||B.lookahead)return v;for(F===1&&(y.adler=l(y.adler,z,Y,0)),B.wrap=0,Y>=B.w_size&&(F===0&&(st(B.head),B.strstart=0,B.block_start=0,B.insert=0),G=new o.Buf8(B.w_size),o.arraySet(G,z,Y-B.w_size,B.w_size,0),z=G,Y=B.w_size),Q=y.avail_in,A=y.next_in,b=y.input,y.avail_in=Y,y.next_in=0,y.input=z,pt(B);B.lookahead>=O;){for(L=B.strstart,I=B.lookahead-(O-1);B.ins_h=(B.ins_h<<B.hash_shift^B.window[L+O-1])&B.hash_mask,B.prev[L&B.w_mask]=B.head[B.ins_h],B.head[B.ins_h]=L,L++,--I;);B.strstart=L,B.lookahead=O-1,pt(B)}return B.strstart+=B.lookahead,B.block_start=B.strstart,B.insert=B.lookahead,B.lookahead=0,B.match_length=B.prev_length=O-1,B.match_available=0,y.next_in=A,y.input=b,y.avail_in=Q,B.wrap=F,d},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,i,r){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,i,r){i.exports=function(s,o){var a,l,u,c,f,p,d,v,g,m,h,x,_,M,E,P,C,N,O,w,D,T,U,S,H;a=s.state,l=s.next_in,S=s.input,u=l+(s.avail_in-5),c=s.next_out,H=s.output,f=c-(o-s.avail_out),p=c+(s.avail_out-257),d=a.dmax,v=a.wsize,g=a.whave,m=a.wnext,h=a.window,x=a.hold,_=a.bits,M=a.lencode,E=a.distcode,P=(1<<a.lenbits)-1,C=(1<<a.distbits)-1;t:do{_<15&&(x+=S[l++]<<_,_+=8,x+=S[l++]<<_,_+=8),N=M[x&P];e:for(;;){if(x>>>=O=N>>>24,_-=O,(O=N>>>16&255)===0)H[c++]=65535&N;else{if(!(16&O)){if(!(64&O)){N=M[(65535&N)+(x&(1<<O)-1)];continue e}if(32&O){a.mode=12;break t}s.msg="invalid literal/length code",a.mode=30;break t}w=65535&N,(O&=15)&&(_<O&&(x+=S[l++]<<_,_+=8),w+=x&(1<<O)-1,x>>>=O,_-=O),_<15&&(x+=S[l++]<<_,_+=8,x+=S[l++]<<_,_+=8),N=E[x&C];n:for(;;){if(x>>>=O=N>>>24,_-=O,!(16&(O=N>>>16&255))){if(!(64&O)){N=E[(65535&N)+(x&(1<<O)-1)];continue n}s.msg="invalid distance code",a.mode=30;break t}if(D=65535&N,_<(O&=15)&&(x+=S[l++]<<_,(_+=8)<O&&(x+=S[l++]<<_,_+=8)),d<(D+=x&(1<<O)-1)){s.msg="invalid distance too far back",a.mode=30;break t}if(x>>>=O,_-=O,(O=c-f)<D){if(g<(O=D-O)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break t}if(U=h,(T=0)===m){if(T+=v-O,O<w){for(w-=O;H[c++]=h[T++],--O;);T=c-D,U=H}}else if(m<O){if(T+=v+m-O,(O-=m)<w){for(w-=O;H[c++]=h[T++],--O;);if(T=0,m<w){for(w-=O=m;H[c++]=h[T++],--O;);T=c-D,U=H}}}else if(T+=m-O,O<w){for(w-=O;H[c++]=h[T++],--O;);T=c-D,U=H}for(;2<w;)H[c++]=U[T++],H[c++]=U[T++],H[c++]=U[T++],w-=3;w&&(H[c++]=U[T++],1<w&&(H[c++]=U[T++]))}else{for(T=c-D;H[c++]=H[T++],H[c++]=H[T++],H[c++]=H[T++],2<(w-=3););w&&(H[c++]=H[T++],1<w&&(H[c++]=H[T++]))}break}}break}}while(l<u&&c<p);l-=w=_>>3,x&=(1<<(_-=w<<3))-1,s.next_in=l,s.next_out=c,s.avail_in=l<u?u-l+5:5-(l-u),s.avail_out=c<p?p-c+257:257-(c-p),a.hold=x,a.bits=_}},{}],49:[function(e,i,r){var s=e("../utils/common"),o=e("./adler32"),a=e("./crc32"),l=e("./inffast"),u=e("./inftrees"),c=1,f=2,p=0,d=-2,v=1,g=852,m=592;function h(T){return(T>>>24&255)+(T>>>8&65280)+((65280&T)<<8)+((255&T)<<24)}function x(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function _(T){var U;return T&&T.state?(U=T.state,T.total_in=T.total_out=U.total=0,T.msg="",U.wrap&&(T.adler=1&U.wrap),U.mode=v,U.last=0,U.havedict=0,U.dmax=32768,U.head=null,U.hold=0,U.bits=0,U.lencode=U.lendyn=new s.Buf32(g),U.distcode=U.distdyn=new s.Buf32(m),U.sane=1,U.back=-1,p):d}function M(T){var U;return T&&T.state?((U=T.state).wsize=0,U.whave=0,U.wnext=0,_(T)):d}function E(T,U){var S,H;return T&&T.state?(H=T.state,U<0?(S=0,U=-U):(S=1+(U>>4),U<48&&(U&=15)),U&&(U<8||15<U)?d:(H.window!==null&&H.wbits!==U&&(H.window=null),H.wrap=S,H.wbits=U,M(T))):d}function P(T,U){var S,H;return T?(H=new x,(T.state=H).window=null,(S=E(T,U))!==p&&(T.state=null),S):d}var C,N,O=!0;function w(T){if(O){var U;for(C=new s.Buf32(512),N=new s.Buf32(32),U=0;U<144;)T.lens[U++]=8;for(;U<256;)T.lens[U++]=9;for(;U<280;)T.lens[U++]=7;for(;U<288;)T.lens[U++]=8;for(u(c,T.lens,0,288,C,0,T.work,{bits:9}),U=0;U<32;)T.lens[U++]=5;u(f,T.lens,0,32,N,0,T.work,{bits:5}),O=!1}T.lencode=C,T.lenbits=9,T.distcode=N,T.distbits=5}function D(T,U,S,H){var J,q=T.state;return q.window===null&&(q.wsize=1<<q.wbits,q.wnext=0,q.whave=0,q.window=new s.Buf8(q.wsize)),H>=q.wsize?(s.arraySet(q.window,U,S-q.wsize,q.wsize,0),q.wnext=0,q.whave=q.wsize):(H<(J=q.wsize-q.wnext)&&(J=H),s.arraySet(q.window,U,S-H,J,q.wnext),(H-=J)?(s.arraySet(q.window,U,S-H,H,0),q.wnext=H,q.whave=q.wsize):(q.wnext+=J,q.wnext===q.wsize&&(q.wnext=0),q.whave<q.wsize&&(q.whave+=J))),0}r.inflateReset=M,r.inflateReset2=E,r.inflateResetKeep=_,r.inflateInit=function(T){return P(T,15)},r.inflateInit2=P,r.inflate=function(T,U){var S,H,J,q,tt,Z,st,j,$,xt,V,W,pt,nt,at,rt,mt,vt,R,X,y,z,B,L,I=0,F=new s.Buf8(4),Q=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!T||!T.state||!T.output||!T.input&&T.avail_in!==0)return d;(S=T.state).mode===12&&(S.mode=13),tt=T.next_out,J=T.output,st=T.avail_out,q=T.next_in,H=T.input,Z=T.avail_in,j=S.hold,$=S.bits,xt=Z,V=st,z=p;t:for(;;)switch(S.mode){case v:if(S.wrap===0){S.mode=13;break}for(;$<16;){if(Z===0)break t;Z--,j+=H[q++]<<$,$+=8}if(2&S.wrap&&j===35615){F[S.check=0]=255&j,F[1]=j>>>8&255,S.check=a(S.check,F,2,0),$=j=0,S.mode=2;break}if(S.flags=0,S.head&&(S.head.done=!1),!(1&S.wrap)||(((255&j)<<8)+(j>>8))%31){T.msg="incorrect header check",S.mode=30;break}if((15&j)!=8){T.msg="unknown compression method",S.mode=30;break}if($-=4,y=8+(15&(j>>>=4)),S.wbits===0)S.wbits=y;else if(y>S.wbits){T.msg="invalid window size",S.mode=30;break}S.dmax=1<<y,T.adler=S.check=1,S.mode=512&j?10:12,$=j=0;break;case 2:for(;$<16;){if(Z===0)break t;Z--,j+=H[q++]<<$,$+=8}if(S.flags=j,(255&S.flags)!=8){T.msg="unknown compression method",S.mode=30;break}if(57344&S.flags){T.msg="unknown header flags set",S.mode=30;break}S.head&&(S.head.text=j>>8&1),512&S.flags&&(F[0]=255&j,F[1]=j>>>8&255,S.check=a(S.check,F,2,0)),$=j=0,S.mode=3;case 3:for(;$<32;){if(Z===0)break t;Z--,j+=H[q++]<<$,$+=8}S.head&&(S.head.time=j),512&S.flags&&(F[0]=255&j,F[1]=j>>>8&255,F[2]=j>>>16&255,F[3]=j>>>24&255,S.check=a(S.check,F,4,0)),$=j=0,S.mode=4;case 4:for(;$<16;){if(Z===0)break t;Z--,j+=H[q++]<<$,$+=8}S.head&&(S.head.xflags=255&j,S.head.os=j>>8),512&S.flags&&(F[0]=255&j,F[1]=j>>>8&255,S.check=a(S.check,F,2,0)),$=j=0,S.mode=5;case 5:if(1024&S.flags){for(;$<16;){if(Z===0)break t;Z--,j+=H[q++]<<$,$+=8}S.length=j,S.head&&(S.head.extra_len=j),512&S.flags&&(F[0]=255&j,F[1]=j>>>8&255,S.check=a(S.check,F,2,0)),$=j=0}else S.head&&(S.head.extra=null);S.mode=6;case 6:if(1024&S.flags&&(Z<(W=S.length)&&(W=Z),W&&(S.head&&(y=S.head.extra_len-S.length,S.head.extra||(S.head.extra=new Array(S.head.extra_len)),s.arraySet(S.head.extra,H,q,W,y)),512&S.flags&&(S.check=a(S.check,H,W,q)),Z-=W,q+=W,S.length-=W),S.length))break t;S.length=0,S.mode=7;case 7:if(2048&S.flags){if(Z===0)break t;for(W=0;y=H[q+W++],S.head&&y&&S.length<65536&&(S.head.name+=String.fromCharCode(y)),y&&W<Z;);if(512&S.flags&&(S.check=a(S.check,H,W,q)),Z-=W,q+=W,y)break t}else S.head&&(S.head.name=null);S.length=0,S.mode=8;case 8:if(4096&S.flags){if(Z===0)break t;for(W=0;y=H[q+W++],S.head&&y&&S.length<65536&&(S.head.comment+=String.fromCharCode(y)),y&&W<Z;);if(512&S.flags&&(S.check=a(S.check,H,W,q)),Z-=W,q+=W,y)break t}else S.head&&(S.head.comment=null);S.mode=9;case 9:if(512&S.flags){for(;$<16;){if(Z===0)break t;Z--,j+=H[q++]<<$,$+=8}if(j!==(65535&S.check)){T.msg="header crc mismatch",S.mode=30;break}$=j=0}S.head&&(S.head.hcrc=S.flags>>9&1,S.head.done=!0),T.adler=S.check=0,S.mode=12;break;case 10:for(;$<32;){if(Z===0)break t;Z--,j+=H[q++]<<$,$+=8}T.adler=S.check=h(j),$=j=0,S.mode=11;case 11:if(S.havedict===0)return T.next_out=tt,T.avail_out=st,T.next_in=q,T.avail_in=Z,S.hold=j,S.bits=$,2;T.adler=S.check=1,S.mode=12;case 12:if(U===5||U===6)break t;case 13:if(S.last){j>>>=7&$,$-=7&$,S.mode=27;break}for(;$<3;){if(Z===0)break t;Z--,j+=H[q++]<<$,$+=8}switch(S.last=1&j,$-=1,3&(j>>>=1)){case 0:S.mode=14;break;case 1:if(w(S),S.mode=20,U!==6)break;j>>>=2,$-=2;break t;case 2:S.mode=17;break;case 3:T.msg="invalid block type",S.mode=30}j>>>=2,$-=2;break;case 14:for(j>>>=7&$,$-=7&$;$<32;){if(Z===0)break t;Z--,j+=H[q++]<<$,$+=8}if((65535&j)!=(j>>>16^65535)){T.msg="invalid stored block lengths",S.mode=30;break}if(S.length=65535&j,$=j=0,S.mode=15,U===6)break t;case 15:S.mode=16;case 16:if(W=S.length){if(Z<W&&(W=Z),st<W&&(W=st),W===0)break t;s.arraySet(J,H,q,W,tt),Z-=W,q+=W,st-=W,tt+=W,S.length-=W;break}S.mode=12;break;case 17:for(;$<14;){if(Z===0)break t;Z--,j+=H[q++]<<$,$+=8}if(S.nlen=257+(31&j),j>>>=5,$-=5,S.ndist=1+(31&j),j>>>=5,$-=5,S.ncode=4+(15&j),j>>>=4,$-=4,286<S.nlen||30<S.ndist){T.msg="too many length or distance symbols",S.mode=30;break}S.have=0,S.mode=18;case 18:for(;S.have<S.ncode;){for(;$<3;){if(Z===0)break t;Z--,j+=H[q++]<<$,$+=8}S.lens[Q[S.have++]]=7&j,j>>>=3,$-=3}for(;S.have<19;)S.lens[Q[S.have++]]=0;if(S.lencode=S.lendyn,S.lenbits=7,B={bits:S.lenbits},z=u(0,S.lens,0,19,S.lencode,0,S.work,B),S.lenbits=B.bits,z){T.msg="invalid code lengths set",S.mode=30;break}S.have=0,S.mode=19;case 19:for(;S.have<S.nlen+S.ndist;){for(;rt=(I=S.lencode[j&(1<<S.lenbits)-1])>>>16&255,mt=65535&I,!((at=I>>>24)<=$);){if(Z===0)break t;Z--,j+=H[q++]<<$,$+=8}if(mt<16)j>>>=at,$-=at,S.lens[S.have++]=mt;else{if(mt===16){for(L=at+2;$<L;){if(Z===0)break t;Z--,j+=H[q++]<<$,$+=8}if(j>>>=at,$-=at,S.have===0){T.msg="invalid bit length repeat",S.mode=30;break}y=S.lens[S.have-1],W=3+(3&j),j>>>=2,$-=2}else if(mt===17){for(L=at+3;$<L;){if(Z===0)break t;Z--,j+=H[q++]<<$,$+=8}$-=at,y=0,W=3+(7&(j>>>=at)),j>>>=3,$-=3}else{for(L=at+7;$<L;){if(Z===0)break t;Z--,j+=H[q++]<<$,$+=8}$-=at,y=0,W=11+(127&(j>>>=at)),j>>>=7,$-=7}if(S.have+W>S.nlen+S.ndist){T.msg="invalid bit length repeat",S.mode=30;break}for(;W--;)S.lens[S.have++]=y}}if(S.mode===30)break;if(S.lens[256]===0){T.msg="invalid code -- missing end-of-block",S.mode=30;break}if(S.lenbits=9,B={bits:S.lenbits},z=u(c,S.lens,0,S.nlen,S.lencode,0,S.work,B),S.lenbits=B.bits,z){T.msg="invalid literal/lengths set",S.mode=30;break}if(S.distbits=6,S.distcode=S.distdyn,B={bits:S.distbits},z=u(f,S.lens,S.nlen,S.ndist,S.distcode,0,S.work,B),S.distbits=B.bits,z){T.msg="invalid distances set",S.mode=30;break}if(S.mode=20,U===6)break t;case 20:S.mode=21;case 21:if(6<=Z&&258<=st){T.next_out=tt,T.avail_out=st,T.next_in=q,T.avail_in=Z,S.hold=j,S.bits=$,l(T,V),tt=T.next_out,J=T.output,st=T.avail_out,q=T.next_in,H=T.input,Z=T.avail_in,j=S.hold,$=S.bits,S.mode===12&&(S.back=-1);break}for(S.back=0;rt=(I=S.lencode[j&(1<<S.lenbits)-1])>>>16&255,mt=65535&I,!((at=I>>>24)<=$);){if(Z===0)break t;Z--,j+=H[q++]<<$,$+=8}if(rt&&!(240&rt)){for(vt=at,R=rt,X=mt;rt=(I=S.lencode[X+((j&(1<<vt+R)-1)>>vt)])>>>16&255,mt=65535&I,!(vt+(at=I>>>24)<=$);){if(Z===0)break t;Z--,j+=H[q++]<<$,$+=8}j>>>=vt,$-=vt,S.back+=vt}if(j>>>=at,$-=at,S.back+=at,S.length=mt,rt===0){S.mode=26;break}if(32&rt){S.back=-1,S.mode=12;break}if(64&rt){T.msg="invalid literal/length code",S.mode=30;break}S.extra=15&rt,S.mode=22;case 22:if(S.extra){for(L=S.extra;$<L;){if(Z===0)break t;Z--,j+=H[q++]<<$,$+=8}S.length+=j&(1<<S.extra)-1,j>>>=S.extra,$-=S.extra,S.back+=S.extra}S.was=S.length,S.mode=23;case 23:for(;rt=(I=S.distcode[j&(1<<S.distbits)-1])>>>16&255,mt=65535&I,!((at=I>>>24)<=$);){if(Z===0)break t;Z--,j+=H[q++]<<$,$+=8}if(!(240&rt)){for(vt=at,R=rt,X=mt;rt=(I=S.distcode[X+((j&(1<<vt+R)-1)>>vt)])>>>16&255,mt=65535&I,!(vt+(at=I>>>24)<=$);){if(Z===0)break t;Z--,j+=H[q++]<<$,$+=8}j>>>=vt,$-=vt,S.back+=vt}if(j>>>=at,$-=at,S.back+=at,64&rt){T.msg="invalid distance code",S.mode=30;break}S.offset=mt,S.extra=15&rt,S.mode=24;case 24:if(S.extra){for(L=S.extra;$<L;){if(Z===0)break t;Z--,j+=H[q++]<<$,$+=8}S.offset+=j&(1<<S.extra)-1,j>>>=S.extra,$-=S.extra,S.back+=S.extra}if(S.offset>S.dmax){T.msg="invalid distance too far back",S.mode=30;break}S.mode=25;case 25:if(st===0)break t;if(W=V-st,S.offset>W){if((W=S.offset-W)>S.whave&&S.sane){T.msg="invalid distance too far back",S.mode=30;break}pt=W>S.wnext?(W-=S.wnext,S.wsize-W):S.wnext-W,W>S.length&&(W=S.length),nt=S.window}else nt=J,pt=tt-S.offset,W=S.length;for(st<W&&(W=st),st-=W,S.length-=W;J[tt++]=nt[pt++],--W;);S.length===0&&(S.mode=21);break;case 26:if(st===0)break t;J[tt++]=S.length,st--,S.mode=21;break;case 27:if(S.wrap){for(;$<32;){if(Z===0)break t;Z--,j|=H[q++]<<$,$+=8}if(V-=st,T.total_out+=V,S.total+=V,V&&(T.adler=S.check=S.flags?a(S.check,J,V,tt-V):o(S.check,J,V,tt-V)),V=st,(S.flags?j:h(j))!==S.check){T.msg="incorrect data check",S.mode=30;break}$=j=0}S.mode=28;case 28:if(S.wrap&&S.flags){for(;$<32;){if(Z===0)break t;Z--,j+=H[q++]<<$,$+=8}if(j!==(4294967295&S.total)){T.msg="incorrect length check",S.mode=30;break}$=j=0}S.mode=29;case 29:z=1;break t;case 30:z=-3;break t;case 31:return-4;case 32:default:return d}return T.next_out=tt,T.avail_out=st,T.next_in=q,T.avail_in=Z,S.hold=j,S.bits=$,(S.wsize||V!==T.avail_out&&S.mode<30&&(S.mode<27||U!==4))&&D(T,T.output,T.next_out,V-T.avail_out)?(S.mode=31,-4):(xt-=T.avail_in,V-=T.avail_out,T.total_in+=xt,T.total_out+=V,S.total+=V,S.wrap&&V&&(T.adler=S.check=S.flags?a(S.check,J,V,T.next_out-V):o(S.check,J,V,T.next_out-V)),T.data_type=S.bits+(S.last?64:0)+(S.mode===12?128:0)+(S.mode===20||S.mode===15?256:0),(xt==0&&V===0||U===4)&&z===p&&(z=-5),z)},r.inflateEnd=function(T){if(!T||!T.state)return d;var U=T.state;return U.window&&(U.window=null),T.state=null,p},r.inflateGetHeader=function(T,U){var S;return T&&T.state&&2&(S=T.state).wrap?((S.head=U).done=!1,p):d},r.inflateSetDictionary=function(T,U){var S,H=U.length;return T&&T.state?(S=T.state).wrap!==0&&S.mode!==11?d:S.mode===11&&o(1,U,H,0)!==S.check?-3:D(T,U,H,H)?(S.mode=31,-4):(S.havedict=1,p):d},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,i,r){var s=e("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],u=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(c,f,p,d,v,g,m,h){var x,_,M,E,P,C,N,O,w,D=h.bits,T=0,U=0,S=0,H=0,J=0,q=0,tt=0,Z=0,st=0,j=0,$=null,xt=0,V=new s.Buf16(16),W=new s.Buf16(16),pt=null,nt=0;for(T=0;T<=15;T++)V[T]=0;for(U=0;U<d;U++)V[f[p+U]]++;for(J=D,H=15;1<=H&&V[H]===0;H--);if(H<J&&(J=H),H===0)return v[g++]=20971520,v[g++]=20971520,h.bits=1,0;for(S=1;S<H&&V[S]===0;S++);for(J<S&&(J=S),T=Z=1;T<=15;T++)if(Z<<=1,(Z-=V[T])<0)return-1;if(0<Z&&(c===0||H!==1))return-1;for(W[1]=0,T=1;T<15;T++)W[T+1]=W[T]+V[T];for(U=0;U<d;U++)f[p+U]!==0&&(m[W[f[p+U]]++]=U);if(C=c===0?($=pt=m,19):c===1?($=o,xt-=257,pt=a,nt-=257,256):($=l,pt=u,-1),T=S,P=g,tt=U=j=0,M=-1,E=(st=1<<(q=J))-1,c===1&&852<st||c===2&&592<st)return 1;for(;;){for(N=T-tt,w=m[U]<C?(O=0,m[U]):m[U]>C?(O=pt[nt+m[U]],$[xt+m[U]]):(O=96,0),x=1<<T-tt,S=_=1<<q;v[P+(j>>tt)+(_-=x)]=N<<24|O<<16|w|0,_!==0;);for(x=1<<T-1;j&x;)x>>=1;if(x!==0?(j&=x-1,j+=x):j=0,U++,--V[T]==0){if(T===H)break;T=f[p+m[U]]}if(J<T&&(j&E)!==M){for(tt===0&&(tt=J),P+=S,Z=1<<(q=T-tt);q+tt<H&&!((Z-=V[q+tt])<=0);)q++,Z<<=1;if(st+=1<<q,c===1&&852<st||c===2&&592<st)return 1;v[M=j&E]=J<<24|q<<16|P-g|0}}return j!==0&&(v[P+j]=T-tt<<24|64<<16|0),h.bits=J,0}},{"../utils/common":41}],51:[function(e,i,r){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,i,r){var s=e("../utils/common"),o=0,a=1;function l(I){for(var F=I.length;0<=--F;)I[F]=0}var u=0,c=29,f=256,p=f+1+c,d=30,v=19,g=2*p+1,m=15,h=16,x=7,_=256,M=16,E=17,P=18,C=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],N=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],O=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],D=new Array(2*(p+2));l(D);var T=new Array(2*d);l(T);var U=new Array(512);l(U);var S=new Array(256);l(S);var H=new Array(c);l(H);var J,q,tt,Z=new Array(d);function st(I,F,Q,A,b){this.static_tree=I,this.extra_bits=F,this.extra_base=Q,this.elems=A,this.max_length=b,this.has_stree=I&&I.length}function j(I,F){this.dyn_tree=I,this.max_code=0,this.stat_desc=F}function $(I){return I<256?U[I]:U[256+(I>>>7)]}function xt(I,F){I.pending_buf[I.pending++]=255&F,I.pending_buf[I.pending++]=F>>>8&255}function V(I,F,Q){I.bi_valid>h-Q?(I.bi_buf|=F<<I.bi_valid&65535,xt(I,I.bi_buf),I.bi_buf=F>>h-I.bi_valid,I.bi_valid+=Q-h):(I.bi_buf|=F<<I.bi_valid&65535,I.bi_valid+=Q)}function W(I,F,Q){V(I,Q[2*F],Q[2*F+1])}function pt(I,F){for(var Q=0;Q|=1&I,I>>>=1,Q<<=1,0<--F;);return Q>>>1}function nt(I,F,Q){var A,b,G=new Array(m+1),Y=0;for(A=1;A<=m;A++)G[A]=Y=Y+Q[A-1]<<1;for(b=0;b<=F;b++){var K=I[2*b+1];K!==0&&(I[2*b]=pt(G[K]++,K))}}function at(I){var F;for(F=0;F<p;F++)I.dyn_ltree[2*F]=0;for(F=0;F<d;F++)I.dyn_dtree[2*F]=0;for(F=0;F<v;F++)I.bl_tree[2*F]=0;I.dyn_ltree[2*_]=1,I.opt_len=I.static_len=0,I.last_lit=I.matches=0}function rt(I){8<I.bi_valid?xt(I,I.bi_buf):0<I.bi_valid&&(I.pending_buf[I.pending++]=I.bi_buf),I.bi_buf=0,I.bi_valid=0}function mt(I,F,Q,A){var b=2*F,G=2*Q;return I[b]<I[G]||I[b]===I[G]&&A[F]<=A[Q]}function vt(I,F,Q){for(var A=I.heap[Q],b=Q<<1;b<=I.heap_len&&(b<I.heap_len&&mt(F,I.heap[b+1],I.heap[b],I.depth)&&b++,!mt(F,A,I.heap[b],I.depth));)I.heap[Q]=I.heap[b],Q=b,b<<=1;I.heap[Q]=A}function R(I,F,Q){var A,b,G,Y,K=0;if(I.last_lit!==0)for(;A=I.pending_buf[I.d_buf+2*K]<<8|I.pending_buf[I.d_buf+2*K+1],b=I.pending_buf[I.l_buf+K],K++,A===0?W(I,b,F):(W(I,(G=S[b])+f+1,F),(Y=C[G])!==0&&V(I,b-=H[G],Y),W(I,G=$(--A),Q),(Y=N[G])!==0&&V(I,A-=Z[G],Y)),K<I.last_lit;);W(I,_,F)}function X(I,F){var Q,A,b,G=F.dyn_tree,Y=F.stat_desc.static_tree,K=F.stat_desc.has_stree,it=F.stat_desc.elems,Mt=-1;for(I.heap_len=0,I.heap_max=g,Q=0;Q<it;Q++)G[2*Q]!==0?(I.heap[++I.heap_len]=Mt=Q,I.depth[Q]=0):G[2*Q+1]=0;for(;I.heap_len<2;)G[2*(b=I.heap[++I.heap_len]=Mt<2?++Mt:0)]=1,I.depth[b]=0,I.opt_len--,K&&(I.static_len-=Y[2*b+1]);for(F.max_code=Mt,Q=I.heap_len>>1;1<=Q;Q--)vt(I,G,Q);for(b=it;Q=I.heap[1],I.heap[1]=I.heap[I.heap_len--],vt(I,G,1),A=I.heap[1],I.heap[--I.heap_max]=Q,I.heap[--I.heap_max]=A,G[2*b]=G[2*Q]+G[2*A],I.depth[b]=(I.depth[Q]>=I.depth[A]?I.depth[Q]:I.depth[A])+1,G[2*Q+1]=G[2*A+1]=b,I.heap[1]=b++,vt(I,G,1),2<=I.heap_len;);I.heap[--I.heap_max]=I.heap[1],function(_t,gt){var St,Pt,yt,Ut,Ot,Ct,Tt=gt.dyn_tree,Lt=gt.max_code,Xt=gt.stat_desc.static_tree,Bt=gt.stat_desc.has_stree,ae=gt.stat_desc.extra_bits,et=gt.stat_desc.extra_base,Et=gt.stat_desc.max_length,ct=0;for(Ut=0;Ut<=m;Ut++)_t.bl_count[Ut]=0;for(Tt[2*_t.heap[_t.heap_max]+1]=0,St=_t.heap_max+1;St<g;St++)Et<(Ut=Tt[2*Tt[2*(Pt=_t.heap[St])+1]+1]+1)&&(Ut=Et,ct++),Tt[2*Pt+1]=Ut,Lt<Pt||(_t.bl_count[Ut]++,Ot=0,et<=Pt&&(Ot=ae[Pt-et]),Ct=Tt[2*Pt],_t.opt_len+=Ct*(Ut+Ot),Bt&&(_t.static_len+=Ct*(Xt[2*Pt+1]+Ot)));if(ct!==0){do{for(Ut=Et-1;_t.bl_count[Ut]===0;)Ut--;_t.bl_count[Ut]--,_t.bl_count[Ut+1]+=2,_t.bl_count[Et]--,ct-=2}while(0<ct);for(Ut=Et;Ut!==0;Ut--)for(Pt=_t.bl_count[Ut];Pt!==0;)Lt<(yt=_t.heap[--St])||(Tt[2*yt+1]!==Ut&&(_t.opt_len+=(Ut-Tt[2*yt+1])*Tt[2*yt],Tt[2*yt+1]=Ut),Pt--)}}(I,F),nt(G,Mt,I.bl_count)}function y(I,F,Q){var A,b,G=-1,Y=F[1],K=0,it=7,Mt=4;for(Y===0&&(it=138,Mt=3),F[2*(Q+1)+1]=65535,A=0;A<=Q;A++)b=Y,Y=F[2*(A+1)+1],++K<it&&b===Y||(K<Mt?I.bl_tree[2*b]+=K:b!==0?(b!==G&&I.bl_tree[2*b]++,I.bl_tree[2*M]++):K<=10?I.bl_tree[2*E]++:I.bl_tree[2*P]++,G=b,Mt=(K=0)===Y?(it=138,3):b===Y?(it=6,3):(it=7,4))}function z(I,F,Q){var A,b,G=-1,Y=F[1],K=0,it=7,Mt=4;for(Y===0&&(it=138,Mt=3),A=0;A<=Q;A++)if(b=Y,Y=F[2*(A+1)+1],!(++K<it&&b===Y)){if(K<Mt)for(;W(I,b,I.bl_tree),--K!=0;);else b!==0?(b!==G&&(W(I,b,I.bl_tree),K--),W(I,M,I.bl_tree),V(I,K-3,2)):K<=10?(W(I,E,I.bl_tree),V(I,K-3,3)):(W(I,P,I.bl_tree),V(I,K-11,7));G=b,Mt=(K=0)===Y?(it=138,3):b===Y?(it=6,3):(it=7,4)}}l(Z);var B=!1;function L(I,F,Q,A){V(I,(u<<1)+(A?1:0),3),function(b,G,Y,K){rt(b),xt(b,Y),xt(b,~Y),s.arraySet(b.pending_buf,b.window,G,Y,b.pending),b.pending+=Y}(I,F,Q)}r._tr_init=function(I){B||(function(){var F,Q,A,b,G,Y=new Array(m+1);for(b=A=0;b<c-1;b++)for(H[b]=A,F=0;F<1<<C[b];F++)S[A++]=b;for(S[A-1]=b,b=G=0;b<16;b++)for(Z[b]=G,F=0;F<1<<N[b];F++)U[G++]=b;for(G>>=7;b<d;b++)for(Z[b]=G<<7,F=0;F<1<<N[b]-7;F++)U[256+G++]=b;for(Q=0;Q<=m;Q++)Y[Q]=0;for(F=0;F<=143;)D[2*F+1]=8,F++,Y[8]++;for(;F<=255;)D[2*F+1]=9,F++,Y[9]++;for(;F<=279;)D[2*F+1]=7,F++,Y[7]++;for(;F<=287;)D[2*F+1]=8,F++,Y[8]++;for(nt(D,p+1,Y),F=0;F<d;F++)T[2*F+1]=5,T[2*F]=pt(F,5);J=new st(D,C,f+1,p,m),q=new st(T,N,0,d,m),tt=new st(new Array(0),O,0,v,x)}(),B=!0),I.l_desc=new j(I.dyn_ltree,J),I.d_desc=new j(I.dyn_dtree,q),I.bl_desc=new j(I.bl_tree,tt),I.bi_buf=0,I.bi_valid=0,at(I)},r._tr_stored_block=L,r._tr_flush_block=function(I,F,Q,A){var b,G,Y=0;0<I.level?(I.strm.data_type===2&&(I.strm.data_type=function(K){var it,Mt=4093624447;for(it=0;it<=31;it++,Mt>>>=1)if(1&Mt&&K.dyn_ltree[2*it]!==0)return o;if(K.dyn_ltree[18]!==0||K.dyn_ltree[20]!==0||K.dyn_ltree[26]!==0)return a;for(it=32;it<f;it++)if(K.dyn_ltree[2*it]!==0)return a;return o}(I)),X(I,I.l_desc),X(I,I.d_desc),Y=function(K){var it;for(y(K,K.dyn_ltree,K.l_desc.max_code),y(K,K.dyn_dtree,K.d_desc.max_code),X(K,K.bl_desc),it=v-1;3<=it&&K.bl_tree[2*w[it]+1]===0;it--);return K.opt_len+=3*(it+1)+5+5+4,it}(I),b=I.opt_len+3+7>>>3,(G=I.static_len+3+7>>>3)<=b&&(b=G)):b=G=Q+5,Q+4<=b&&F!==-1?L(I,F,Q,A):I.strategy===4||G===b?(V(I,2+(A?1:0),3),R(I,D,T)):(V(I,4+(A?1:0),3),function(K,it,Mt,_t){var gt;for(V(K,it-257,5),V(K,Mt-1,5),V(K,_t-4,4),gt=0;gt<_t;gt++)V(K,K.bl_tree[2*w[gt]+1],3);z(K,K.dyn_ltree,it-1),z(K,K.dyn_dtree,Mt-1)}(I,I.l_desc.max_code+1,I.d_desc.max_code+1,Y+1),R(I,I.dyn_ltree,I.dyn_dtree)),at(I),A&&rt(I)},r._tr_tally=function(I,F,Q){return I.pending_buf[I.d_buf+2*I.last_lit]=F>>>8&255,I.pending_buf[I.d_buf+2*I.last_lit+1]=255&F,I.pending_buf[I.l_buf+I.last_lit]=255&Q,I.last_lit++,F===0?I.dyn_ltree[2*Q]++:(I.matches++,F--,I.dyn_ltree[2*(S[Q]+f+1)]++,I.dyn_dtree[2*$(F)]++),I.last_lit===I.lit_bufsize-1},r._tr_align=function(I){V(I,2,3),W(I,_,D),function(F){F.bi_valid===16?(xt(F,F.bi_buf),F.bi_buf=0,F.bi_valid=0):8<=F.bi_valid&&(F.pending_buf[F.pending++]=255&F.bi_buf,F.bi_buf>>=8,F.bi_valid-=8)}(I)}},{"../utils/common":41}],53:[function(e,i,r){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,i,r){(function(s){(function(o,a){if(!o.setImmediate){var l,u,c,f,p=1,d={},v=!1,g=o.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(o);m=m&&m.setTimeout?m:o,l={}.toString.call(o.process)==="[object process]"?function(M){process.nextTick(function(){x(M)})}:function(){if(o.postMessage&&!o.importScripts){var M=!0,E=o.onmessage;return o.onmessage=function(){M=!1},o.postMessage("","*"),o.onmessage=E,M}}()?(f="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",_,!1):o.attachEvent("onmessage",_),function(M){o.postMessage(f+M,"*")}):o.MessageChannel?((c=new MessageChannel).port1.onmessage=function(M){x(M.data)},function(M){c.port2.postMessage(M)}):g&&"onreadystatechange"in g.createElement("script")?(u=g.documentElement,function(M){var E=g.createElement("script");E.onreadystatechange=function(){x(M),E.onreadystatechange=null,u.removeChild(E),E=null},u.appendChild(E)}):function(M){setTimeout(x,0,M)},m.setImmediate=function(M){typeof M!="function"&&(M=new Function(""+M));for(var E=new Array(arguments.length-1),P=0;P<E.length;P++)E[P]=arguments[P+1];var C={callback:M,args:E};return d[p]=C,l(p),p++},m.clearImmediate=h}function h(M){delete d[M]}function x(M){if(v)setTimeout(x,0,M);else{var E=d[M];if(E){v=!0;try{(function(P){var C=P.callback,N=P.args;switch(N.length){case 0:C();break;case 1:C(N[0]);break;case 2:C(N[0],N[1]);break;case 3:C(N[0],N[1],N[2]);break;default:C.apply(a,N)}})(E)}finally{h(M),v=!1}}}}function _(M){M.source===o&&typeof M.data=="string"&&M.data.indexOf(f)===0&&x(+M.data.slice(f.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof Qs<"u"?Qs:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Td);var yb=Td.exports;const Sb=xb(yb),Mb={class:"converter-page"},bb={class:"conv-panel"},Eb={class:"panel-header"},wb={key:1,class:"file-info"},Tb={class:"file-info-row"},Ab={class:"fi-value fi-name"},Cb={class:"file-info-row"},Rb={class:"fi-value"},Pb={class:"file-info-row"},Lb={class:"fi-value"},Ib={class:"file-info-row"},Db={class:"fi-value"},Ub={key:2,class:"settings-section"},Nb={class:"setting-row"},Ob={class:"mode-toggle"},Fb={class:"setting-row"},kb={class:"fps-presets"},Bb=["onClick"],zb={class:"setting-row"},Gb={class:"input-with-unit"},Hb={class:"setting-row"},Vb={class:"input-with-unit"},Wb={key:0,class:"setting-row"},Xb={class:"fi-value"},qb=["disabled"],jb={key:0},Yb={key:1},$b={class:"conv-preview"},Zb={key:0,class:"video-preview-wrap"},Kb=["src"],Jb={key:1,class:"preview-placeholder"},Qb={key:2,class:"status-area"},tE={class:"status-text"},eE={key:0,class:"progress-wrap"},nE={class:"progress-bar"},iE={class:"progress-pct"},rE={key:1,class:"error-msg"},sE={key:2,class:"download-wrap"},aE=["href","download"],oE={__name:"VideoConverter",setup(n){const t=jt(null),e=jt(null),i=jt(null),r=jt(null),s=jt(""),o=jt(""),a=jt(0),l=jt(0),u=jt("webp"),c=jt(24),f=jt(960),p=jt(!1),d=jt(0),v=jt("等待上传"),g=jt("idle"),m=jt(""),h=jt(""),x=jt(""),_=[14.5,16,24,30],M=ge(()=>{var W;const V=((W=e.value)==null?void 0:W.duration)||0;return!V||!c.value?0:Math.ceil(V*c.value)}),E=ge(()=>!a.value||!l.value?0:Math.round(f.value*l.value/a.value));function P(){var V;(V=t.value)==null||V.click()}function C(V){var W;O((W=V.target.files)==null?void 0:W[0])}function N(V){var W,pt;O((pt=(W=V.dataTransfer)==null?void 0:W.files)==null?void 0:pt[0])}function O(V){if(!V)return;const W=["video/mp4","video/quicktime","video/webm"],pt=/\.(mp4|mov|webm)$/i.test(V.name);if(!W.includes(V.type)&&!pt){st("格式不支持，请上传 MP4、MOV 或 WebM 文件");return}if(V.size>500*1024*1024){st("文件过大（最大 500MB）");return}U(),m.value="",s.value&&URL.revokeObjectURL(s.value),r.value=V,s.value=URL.createObjectURL(V),v.value="已加载视频，请配置参数后开始转换",g.value="idle"}function w(){const V=e.value;if(!V)return;const W=V.duration;o.value=isFinite(W)?$(W):"未知",a.value=V.videoWidth,l.value=V.videoHeight,(!f.value||f.value===960)&&(f.value=V.videoWidth||960)}function D(){st("视频加载失败，请检查文件是否损坏")}function T(){s.value&&URL.revokeObjectURL(s.value),U(),r.value=null,s.value="",o.value="",a.value=0,l.value=0,p.value=!1,d.value=0,v.value="等待上传",g.value="idle",m.value=""}function U(){h.value&&h.value.startsWith("blob:")&&URL.revokeObjectURL(h.value),h.value="",x.value=""}async function S(){if(p.value)return;m.value="",U();const V=e.value;if(!V||!V.duration){st("视频未就绪，请稍后再试");return}const W=V.duration,pt=1/c.value,nt=Math.ceil(W*c.value),at=f.value,rt=E.value||Math.round(at*(V.videoHeight/(V.videoWidth||1)));if(nt>1200){st(`预计帧数 ${nt} 过多（限制 1200 帧），请降低帧率或缩短时长`);return}p.value=!0,d.value=0,v.value="正在转换…",g.value="running";const mt=i.value;mt.width=at,mt.height=rt;const vt=mt.getContext("2d");try{u.value==="webp"?await H(V,mt,vt,W,pt,nt,at,rt):await J(V,mt,vt,W,pt,nt,at,rt)}catch(R){st("转换失败："+((R==null?void 0:R.message)||String(R)))}finally{p.value=!1}}async function H(V,W,pt,nt,at,rt,mt,vt){v.value="正在录制视频帧…";const R=W.captureStream(c.value),X=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm",y=[],z=new MediaRecorder(R,{mimeType:X,videoBitsPerSecond:8e6});z.ondataavailable=I=>{I.data.size>0&&y.push(I.data)};const B=new Promise(I=>{z.onstop=I});z.start();for(let I=0;I<rt;I++){const F=I*at;await q(V,Math.min(F,nt-.001)),pt.drawImage(V,0,0,mt,vt),d.value=Math.round((I+1)/rt*100),await Z(Math.max(16,Math.round(1e3/c.value)))}z.stop(),await B;const L=new Blob(y,{type:X});h.value=URL.createObjectURL(L),x.value=xt(r.value.name)+"_converted.webm",v.value=`转换完成，共 ${rt} 帧`,g.value="done",d.value=100}async function J(V,W,pt,nt,at,rt,mt,vt){const R=new Sb,X=R.folder("frames");for(let z=0;z<rt;z++){const B=z*at;await q(V,Math.min(B,nt-.001)),pt.drawImage(V,0,0,mt,vt);const L=await tt(W,"image/png"),I=String(z+1).padStart(4,"0");X.file(`frame_${I}.png`,L),d.value=Math.round((z+1)/rt*100),v.value=`正在导出帧 ${z+1} / ${rt}…`,z%5===0&&await Z(0)}v.value="正在打包 ZIP…";const y=await R.generateAsync({type:"blob",compression:"DEFLATE"},z=>{d.value=Math.round(z.percent)});h.value=URL.createObjectURL(y),x.value=xt(r.value.name)+"_frames.zip",v.value=`转换完成，共 ${rt} 帧 PNG`,g.value="done",d.value=100}function q(V,W){return new Promise((pt,nt)=>{if(Math.abs(V.currentTime-W)<.001){pt();return}const at=()=>{V.removeEventListener("seeked",at),pt()},rt=()=>{V.removeEventListener("error",rt),nt(new Error("seek error"))};V.addEventListener("seeked",at,{once:!0}),V.addEventListener("error",rt,{once:!0}),V.currentTime=W})}function tt(V,W){return new Promise(pt=>V.toBlob(pt,W))}function Z(V){return new Promise(W=>setTimeout(W,V))}function st(V){m.value=V,v.value="转换失败",g.value="error",p.value=!1}function j(V){return V<1024?V+" B":V<1024*1024?(V/1024).toFixed(1)+" KB":(V/1024/1024).toFixed(2)+" MB"}function $(V){const W=Math.floor(V/60),pt=(V%60).toFixed(2);return`${W}:${String(pt).padStart(5,"0")}`}function xt(V){return V.replace(/\.[^.]+$/,"")}return Rl(()=>{s.value&&URL.revokeObjectURL(s.value),h.value&&h.value.startsWith("blob:")&&URL.revokeObjectURL(h.value)}),(V,W)=>($t(),Zt("div",Mb,[ot("div",bb,[ot("div",Eb,[W[6]||(W[6]=ot("span",{class:"panel-title"},"视频素材转换",-1)),r.value?($t(),Zt("button",{key:0,class:"btn-ghost btn-sm",onClick:T},[...W[5]||(W[5]=[ot("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[ot("polyline",{points:"1 4 1 10 7 10"}),ot("path",{d:"M3.51 15a9 9 0 1 0 .49-4.29"})],-1),vi(" 重新上传 ",-1)])])):en("",!0)]),r.value?en("",!0):($t(),Zt("div",{key:0,class:"upload-zone",onClick:P,onDragover:W[0]||(W[0]=tl(()=>{},["prevent"])),onDrop:tl(N,["prevent"])},[ot("input",{ref_key:"fileInput",ref:t,type:"file",accept:"video/mp4,video/quicktime,video/webm,.mp4,.mov,.webm",style:{display:"none"},onChange:C},null,544),W[7]||(W[7]=Ch('<div class="upload-box" data-v-017bd066><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" data-v-017bd066><polygon points="23 7 16 12 23 17 23 7" data-v-017bd066></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2" data-v-017bd066></rect></svg><p class="upload-text" data-v-017bd066>点击或拖拽视频文件到此处</p><p class="upload-sub" data-v-017bd066>支持 MP4、MOV、WebM</p></div>',1))],32)),r.value?($t(),Zt("div",wb,[ot("div",Tb,[W[8]||(W[8]=ot("span",{class:"fi-label"},"文件名",-1)),ot("span",Ab,ie(r.value.name),1)]),ot("div",Cb,[W[9]||(W[9]=ot("span",{class:"fi-label"},"文件大小",-1)),ot("span",Rb,ie(j(r.value.size)),1)]),ot("div",Pb,[W[10]||(W[10]=ot("span",{class:"fi-label"},"视频时长",-1)),ot("span",Lb,ie(o.value||"加载中…"),1)]),ot("div",Ib,[W[11]||(W[11]=ot("span",{class:"fi-label"},"原始尺寸",-1)),ot("span",Db,ie(a.value&&l.value?a.value+" × "+l.value:"—"),1)])])):en("",!0),r.value?($t(),Zt("div",Ub,[W[20]||(W[20]=ot("div",{class:"settings-title"},"输出设置",-1)),ot("div",Nb,[W[12]||(W[12]=ot("span",{class:"setting-label"},"输出模式",-1)),ot("div",Ob,[ot("button",{class:ye({active:u.value==="webp"}),onClick:W[1]||(W[1]=pt=>u.value="webp")},"WebP 动图",2),ot("button",{class:ye({active:u.value==="png"}),onClick:W[2]||(W[2]=pt=>u.value="png")},"PNG 序列帧",2)])]),ot("div",Fb,[W[14]||(W[14]=ot("span",{class:"setting-label"},"导出帧率",-1)),ot("div",kb,[($t(),Zt(Ne,null,Lr(_,pt=>ot("button",{key:pt,class:ye({active:c.value===pt}),onClick:nt=>c.value=pt},[vi(ie(pt),1),W[13]||(W[13]=ot("small",null,"fps",-1))],10,Bb)),64))])]),ot("div",zb,[W[16]||(W[16]=ot("span",{class:"setting-label"},"自定义帧率",-1)),ot("div",Gb,[qo(ot("input",{type:"number","onUpdate:modelValue":W[3]||(W[3]=pt=>c.value=pt),min:"1",max:"60",step:"0.5",class:"num-input"},null,512),[[Lc,c.value,void 0,{number:!0}]]),W[15]||(W[15]=ot("span",{class:"unit"},"fps",-1))])]),ot("div",Hb,[W[18]||(W[18]=ot("span",{class:"setting-label"},"输出宽度",-1)),ot("div",Vb,[qo(ot("input",{type:"number","onUpdate:modelValue":W[4]||(W[4]=pt=>f.value=pt),min:"64",max:"3840",step:"1",class:"num-input"},null,512),[[Lc,f.value,void 0,{number:!0}]]),W[17]||(W[17]=ot("span",{class:"unit"},"px",-1))])]),M.value>0?($t(),Zt("div",Wb,[W[19]||(W[19]=ot("span",{class:"setting-label"},"预计帧数",-1)),ot("span",Xb,ie(M.value)+" 帧",1)])):en("",!0),ot("button",{class:"btn-convert",disabled:p.value,onClick:S},[p.value?($t(),Zt("span",Yb,"转换中…")):($t(),Zt("span",jb,"开始转换"))],8,qb)])):en("",!0)]),ot("div",$b,[r.value?($t(),Zt("div",Zb,[ot("video",{ref_key:"videoEl",ref:e,src:s.value,controls:"",muted:"",playsinline:"",class:"video-preview",onLoadedmetadata:w,onError:D},null,40,Kb)])):($t(),Zt("div",Jb,[...W[21]||(W[21]=[ot("svg",{width:"56",height:"56",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1"},[ot("polygon",{points:"23 7 16 12 23 17 23 7"}),ot("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"})],-1),ot("p",null,"上传视频后在此预览",-1)])])),r.value?($t(),Zt("div",Qb,[ot("div",{class:ye(["status-row","status-"+g.value])},[W[22]||(W[22]=ot("span",{class:"status-dot"},null,-1)),ot("span",tE,ie(v.value),1)],2),p.value||d.value>0?($t(),Zt("div",eE,[ot("div",nE,[ot("div",{class:"progress-fill",style:Jn({width:d.value+"%"})},null,4)]),ot("span",iE,ie(Math.round(d.value))+"%",1)])):en("",!0),m.value?($t(),Zt("div",rE,ie(m.value),1)):en("",!0),h.value?($t(),Zt("div",sE,[ot("a",{href:h.value,download:x.value,class:"btn-download"},[W[23]||(W[23]=ot("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[ot("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),ot("polyline",{points:"7 10 12 15 17 10"}),ot("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1)),vi(" 下载 "+ie(x.value),1)],8,aE)])):en("",!0)])):en("",!0)]),ot("canvas",{ref_key:"offCanvas",ref:i,style:{display:"none"}},null,512)]))}},lE=Qi(oE,[["__scopeId","data-v-017bd066"]]),cE=[{path:"/",component:vb},{path:"/convert",component:lE}],uE=m_({history:jg("/kskr-preview/"),routes:cE});ag(C_).use(uE).mount("#app");
