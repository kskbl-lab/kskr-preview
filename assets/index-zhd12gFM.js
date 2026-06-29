(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fo(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Qe={},or=[],bn=()=>{},du=()=>!1,ea=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ta=n=>n.startsWith("onUpdate:"),xt=Object.assign,Oo=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},ph=Object.prototype.hasOwnProperty,Ke=(n,e)=>ph.call(n,e),Le=Array.isArray,lr=n=>jr(n)==="[object Map]",pu=n=>jr(n)==="[object Set]",ul=n=>jr(n)==="[object Date]",Fe=n=>typeof n=="function",lt=n=>typeof n=="string",wn=n=>typeof n=="symbol",je=n=>n!==null&&typeof n=="object",mu=n=>(je(n)||Fe(n))&&Fe(n.then)&&Fe(n.catch),gu=Object.prototype.toString,jr=n=>gu.call(n),mh=n=>jr(n).slice(8,-1),_u=n=>jr(n)==="[object Object]",Bo=n=>lt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ur=Fo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),na=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},gh=/-\w/g,cn=na(n=>n.replace(gh,e=>e.slice(1).toUpperCase())),_h=/\B([A-Z])/g,zi=na(n=>n.replace(_h,"-$1").toLowerCase()),vu=na(n=>n.charAt(0).toUpperCase()+n.slice(1)),xa=na(n=>n?`on${vu(n)}`:""),En=(n,e)=>!Object.is(n,e),Ma=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},xu=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},vh=n=>{const e=parseFloat(n);return isNaN(e)?n:e},xh=n=>{const e=lt(n)?Number(n):NaN;return isNaN(e)?n:e};let fl;const ia=()=>fl||(fl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ai(n){if(Le(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=lt(i)?yh(i):ai(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(lt(n)||je(n))return n}const Mh=/;(?![^(]*\))/g,Sh=/:([^]+)/,Eh=/\/\*[^]*?\*\//g;function yh(n){const e={};return n.replace(Eh,"").split(Mh).forEach(t=>{if(t){const i=t.split(Sh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function un(n){let e="";if(lt(n))e=n;else if(Le(n))for(let t=0;t<n.length;t++){const i=un(n[t]);i&&(e+=i+" ")}else if(je(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Th="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bh=Fo(Th);function Mu(n){return!!n||n===""}function Ah(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=zo(n[i],e[i]);return t}function zo(n,e){if(n===e)return!0;let t=ul(n),i=ul(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=wn(n),i=wn(e),t||i)return n===e;if(t=Le(n),i=Le(e),t||i)return t&&i?Ah(n,e):!1;if(t=je(n),i=je(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!zo(n[o],e[o]))return!1}}return String(n)===String(e)}const Su=n=>!!(n&&n.__v_isRef===!0),Et=n=>lt(n)?n:n==null?"":Le(n)||je(n)&&(n.toString===gu||!Fe(n.toString))?Su(n)?Et(n.value):JSON.stringify(n,Eu,2):String(n),Eu=(n,e)=>Su(e)?Eu(n,e.value):lr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Sa(i,s)+" =>"]=r,t),{})}:pu(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Sa(t))}:wn(e)?Sa(e):je(e)&&!Le(e)&&!_u(e)?String(e):e,Sa=(n,e="")=>{var t;return wn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let St;class wh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&St&&(St.active?(this.parent=St,this.index=(St.scopes||(St.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=St;try{return St=this,e()}finally{St=t}}}on(){++this._on===1&&(this.prevScope=St,St=this)}off(){if(this._on>0&&--this._on===0){if(St===this)St=this.prevScope;else{let e=St;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Ch(){return St}let it;const Ea=new WeakSet;class yu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,St&&(St.active?St.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ea.has(this)&&(Ea.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||bu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,hl(this),Au(this);const e=it,t=fn;it=this,fn=!0;try{return this.fn()}finally{wu(this),it=e,fn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Vo(e);this.deps=this.depsTail=void 0,hl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ea.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fo(this)&&this.run()}get dirty(){return fo(this)}}let Tu=0,Nr,Fr;function bu(n,e=!1){if(n.flags|=8,e){n.next=Fr,Fr=n;return}n.next=Nr,Nr=n}function Ho(){Tu++}function Go(){if(--Tu>0)return;if(Fr){let e=Fr;for(Fr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Nr;){let e=Nr;for(Nr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Au(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function wu(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Vo(i),Rh(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function fo(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Cu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Cu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Gr)||(n.globalVersion=Gr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!fo(n))))return;n.flags|=2;const e=n.dep,t=it,i=fn;it=n,fn=!0;try{Au(n);const r=n.fn(n._value);(e.version===0||En(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{it=t,fn=i,wu(n),n.flags&=-3}}function Vo(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Vo(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Rh(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let fn=!0;const Ru=[];function Xn(){Ru.push(fn),fn=!1}function qn(){const n=Ru.pop();fn=n===void 0?!0:n}function hl(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=it;it=void 0;try{e()}finally{it=t}}}let Gr=0;class Ph{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ko{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!it||!fn||it===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==it)t=this.activeLink=new Ph(it,this),it.deps?(t.prevDep=it.depsTail,it.depsTail.nextDep=t,it.depsTail=t):it.deps=it.depsTail=t,Pu(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=it.depsTail,t.nextDep=void 0,it.depsTail.nextDep=t,it.depsTail=t,it.deps===t&&(it.deps=i)}return t}trigger(e){this.version++,Gr++,this.notify(e)}notify(e){Ho();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Go()}}}function Pu(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Pu(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ho=new WeakMap,Di=Symbol(""),po=Symbol(""),Vr=Symbol("");function Rt(n,e,t){if(fn&&it){let i=ho.get(n);i||ho.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new ko),r.map=i,r.key=t),r.track()}}function zn(n,e,t,i,r,s){const o=ho.get(n);if(!o){Gr++;return}const a=l=>{l&&l.trigger()};if(Ho(),e==="clear")o.forEach(a);else{const l=Le(n),u=l&&Bo(t);if(l&&t==="length"){const c=Number(i);o.forEach((f,h)=>{(h==="length"||h===Vr||!wn(h)&&h>=c)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(Vr)),e){case"add":l?u&&a(o.get("length")):(a(o.get(Di)),lr(n)&&a(o.get(po)));break;case"delete":l||(a(o.get(Di)),lr(n)&&a(o.get(po)));break;case"set":lr(n)&&a(o.get(Di));break}}Go()}function Gi(n){const e=Ye(n);return e===n?e:(Rt(e,"iterate",Vr),tn(n)?e:e.map(hn))}function ra(n){return Rt(n=Ye(n),"iterate",Vr),n}function xn(n,e){return $n(n)?dr(Ui(n)?hn(e):e):hn(e)}const Lh={__proto__:null,[Symbol.iterator](){return ya(this,Symbol.iterator,n=>xn(this,n))},concat(...n){return Gi(this).concat(...n.map(e=>Le(e)?Gi(e):e))},entries(){return ya(this,"entries",n=>(n[1]=xn(this,n[1]),n))},every(n,e){return Rn(this,"every",n,e,void 0,arguments)},filter(n,e){return Rn(this,"filter",n,e,t=>t.map(i=>xn(this,i)),arguments)},find(n,e){return Rn(this,"find",n,e,t=>xn(this,t),arguments)},findIndex(n,e){return Rn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Rn(this,"findLast",n,e,t=>xn(this,t),arguments)},findLastIndex(n,e){return Rn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Rn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ta(this,"includes",n)},indexOf(...n){return Ta(this,"indexOf",n)},join(n){return Gi(this).join(n)},lastIndexOf(...n){return Ta(this,"lastIndexOf",n)},map(n,e){return Rn(this,"map",n,e,void 0,arguments)},pop(){return Sr(this,"pop")},push(...n){return Sr(this,"push",n)},reduce(n,...e){return dl(this,"reduce",n,e)},reduceRight(n,...e){return dl(this,"reduceRight",n,e)},shift(){return Sr(this,"shift")},some(n,e){return Rn(this,"some",n,e,void 0,arguments)},splice(...n){return Sr(this,"splice",n)},toReversed(){return Gi(this).toReversed()},toSorted(n){return Gi(this).toSorted(n)},toSpliced(...n){return Gi(this).toSpliced(...n)},unshift(...n){return Sr(this,"unshift",n)},values(){return ya(this,"values",n=>xn(this,n))}};function ya(n,e,t){const i=ra(n),r=i[e]();return i!==n&&!tn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Ih=Array.prototype;function Rn(n,e,t,i,r,s){const o=ra(n),a=o!==n&&!tn(n),l=o[e];if(l!==Ih[e]){const f=l.apply(n,s);return a?hn(f):f}let u=t;o!==n&&(a?u=function(f,h){return t.call(this,xn(n,f),h,n)}:t.length>2&&(u=function(f,h){return t.call(this,f,h,n)}));const c=l.call(o,u,i);return a&&r?r(c):c}function dl(n,e,t,i){const r=ra(n),s=r!==n&&!tn(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(u,c,f){return a&&(a=!1,u=xn(n,u)),t.call(this,u,xn(n,c),f,n)}):t.length>3&&(o=function(u,c,f){return t.call(this,u,c,f,n)}));const l=r[e](o,...i);return a?xn(n,l):l}function Ta(n,e,t){const i=Ye(n);Rt(i,"iterate",Vr);const r=i[e](...t);return(r===-1||r===!1)&&$o(t[0])?(t[0]=Ye(t[0]),i[e](...t)):r}function Sr(n,e,t=[]){Xn(),Ho();const i=Ye(n)[e].apply(n,t);return Go(),qn(),i}const Dh=Fo("__proto__,__v_isRef,__isVue"),Lu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(wn));function Uh(n){wn(n)||(n=String(n));const e=Ye(this);return Rt(e,"has",n),e.hasOwnProperty(n)}class Iu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Wh:Fu:s?Nu:Uu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Le(e);if(!r){let l;if(o&&(l=Lh[t]))return l;if(t==="hasOwnProperty")return Uh}const a=Reflect.get(e,t,Lt(e)?e:i);if((wn(t)?Lu.has(t):Dh(t))||(r||Rt(e,"get",t),s))return a;if(Lt(a)){const l=o&&Bo(t)?a:a.value;return r&&je(l)?go(l):l}return je(a)?r?go(a):Xo(a):a}}class Du extends Iu{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Le(e)&&Bo(t);if(!this._isShallow){const u=$n(s);if(!tn(i)&&!$n(i)&&(s=Ye(s),i=Ye(i)),!o&&Lt(s)&&!Lt(i))return u||(s.value=i),!0}const a=o?Number(t)<e.length:Ke(e,t),l=Reflect.set(e,t,i,Lt(e)?e:r);return e===Ye(r)&&(a?En(i,s)&&zn(e,"set",t,i):zn(e,"add",t,i)),l}deleteProperty(e,t){const i=Ke(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&zn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!wn(t)||!Lu.has(t))&&Rt(e,"has",t),i}ownKeys(e){return Rt(e,"iterate",Le(e)?"length":Di),Reflect.ownKeys(e)}}class Nh extends Iu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Fh=new Du,Oh=new Nh,Bh=new Du(!0);const mo=n=>n,os=n=>Reflect.getPrototypeOf(n);function zh(n,e,t){return function(...i){const r=this.__v_raw,s=Ye(r),o=lr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=r[n](...i),c=t?mo:e?dr:hn;return!e&&Rt(s,"iterate",l?po:Di),xt(Object.create(u),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[c(f[0]),c(f[1])]:c(f),done:h}}})}}function ls(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Hh(n,e){const t={get(r){const s=this.__v_raw,o=Ye(s),a=Ye(r);n||(En(r,a)&&Rt(o,"get",r),Rt(o,"get",a));const{has:l}=os(o),u=e?mo:n?dr:hn;if(l.call(o,r))return u(s.get(r));if(l.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Rt(Ye(r),"iterate",Di),r.size},has(r){const s=this.__v_raw,o=Ye(s),a=Ye(r);return n||(En(r,a)&&Rt(o,"has",r),Rt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Ye(a),u=e?mo:n?dr:hn;return!n&&Rt(l,"iterate",Di),a.forEach((c,f)=>r.call(s,u(c),u(f),o))}};return xt(t,n?{add:ls("add"),set:ls("set"),delete:ls("delete"),clear:ls("clear")}:{add(r){const s=Ye(this),o=os(s),a=Ye(r),l=!e&&!tn(r)&&!$n(r)?a:r;return o.has.call(s,l)||En(r,l)&&o.has.call(s,r)||En(a,l)&&o.has.call(s,a)||(s.add(l),zn(s,"add",l,l)),this},set(r,s){!e&&!tn(s)&&!$n(s)&&(s=Ye(s));const o=Ye(this),{has:a,get:l}=os(o);let u=a.call(o,r);u||(r=Ye(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,s),u?En(s,c)&&zn(o,"set",r,s):zn(o,"add",r,s),this},delete(r){const s=Ye(this),{has:o,get:a}=os(s);let l=o.call(s,r);l||(r=Ye(r),l=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return l&&zn(s,"delete",r,void 0),u},clear(){const r=Ye(this),s=r.size!==0,o=r.clear();return s&&zn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=zh(r,n,e)}),t}function Wo(n,e){const t=Hh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ke(t,r)&&r in i?t:i,r,s)}const Gh={get:Wo(!1,!1)},Vh={get:Wo(!1,!0)},kh={get:Wo(!0,!1)};const Uu=new WeakMap,Nu=new WeakMap,Fu=new WeakMap,Wh=new WeakMap;function Xh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qh(n){return n.__v_skip||!Object.isExtensible(n)?0:Xh(mh(n))}function Xo(n){return $n(n)?n:qo(n,!1,Fh,Gh,Uu)}function $h(n){return qo(n,!1,Bh,Vh,Nu)}function go(n){return qo(n,!0,Oh,kh,Fu)}function qo(n,e,t,i,r){if(!je(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=qh(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function Ui(n){return $n(n)?Ui(n.__v_raw):!!(n&&n.__v_isReactive)}function $n(n){return!!(n&&n.__v_isReadonly)}function tn(n){return!!(n&&n.__v_isShallow)}function $o(n){return n?!!n.__v_raw:!1}function Ye(n){const e=n&&n.__v_raw;return e?Ye(e):n}function Yh(n){return!Ke(n,"__v_skip")&&Object.isExtensible(n)&&xu(n,"__v_skip",!0),n}const hn=n=>je(n)?Xo(n):n,dr=n=>je(n)?go(n):n;function Lt(n){return n?n.__v_isRef===!0:!1}function ft(n){return Kh(n,!1)}function Kh(n,e){return Lt(n)?n:new jh(n,e)}class jh{constructor(e,t){this.dep=new ko,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ye(e),this._value=t?e:hn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||tn(e)||$n(e);e=i?e:Ye(e),En(e,t)&&(this._rawValue=e,this._value=i?e:hn(e),this.dep.trigger())}}function Ou(n){return Lt(n)?n.value:n}const Zh={get:(n,e,t)=>e==="__v_raw"?n:Ou(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Lt(r)&&!Lt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Bu(n){return Ui(n)?n:new Proxy(n,Zh)}class Jh{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ko(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&it!==this)return bu(this,!0),!0}get value(){const e=this.dep.track();return Cu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Qh(n,e,t=!1){let i,r;return Fe(n)?i=n:(i=n.get,r=n.set),new Jh(i,r,t)}const cs={},Bs=new WeakMap;let Ai;function ed(n,e=!1,t=Ai){if(t){let i=Bs.get(t);i||Bs.set(t,i=[]),i.push(n)}}function td(n,e,t=Qe){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,u=y=>r?y:tn(y)||r===!1||r===0?Hn(y,1):Hn(y);let c,f,h,m,v=!1,M=!1;if(Lt(n)?(f=()=>n.value,v=tn(n)):Ui(n)?(f=()=>u(n),v=!0):Le(n)?(M=!0,v=n.some(y=>Ui(y)||tn(y)),f=()=>n.map(y=>{if(Lt(y))return y.value;if(Ui(y))return u(y);if(Fe(y))return l?l(y,2):y()})):Fe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Xn();try{h()}finally{qn()}}const y=Ai;Ai=c;try{return l?l(n,3,[m]):n(m)}finally{Ai=y}}:f=bn,e&&r){const y=f,L=r===!0?1/0:r;f=()=>Hn(y(),L)}const p=Ch(),d=()=>{c.stop(),p&&p.active&&Oo(p.effects,c)};if(s&&e){const y=e;e=(...L)=>{y(...L),d()}}let T=M?new Array(n.length).fill(cs):cs;const _=y=>{if(!(!(c.flags&1)||!c.dirty&&!y))if(e){const L=c.run();if(r||v||(M?L.some((P,C)=>En(P,T[C])):En(L,T))){h&&h();const P=Ai;Ai=c;try{const C=[L,T===cs?void 0:M&&T[0]===cs?[]:T,m];T=L,l?l(e,3,C):e(...C)}finally{Ai=P}}}else c.run()};return a&&a(_),c=new yu(f),c.scheduler=o?()=>o(_,!1):_,m=y=>ed(y,!1,c),h=c.onStop=()=>{const y=Bs.get(c);if(y){if(l)l(y,4);else for(const L of y)L();Bs.delete(c)}},e?i?_(!0):T=c.run():o?o(_.bind(null,!0),!0):c.run(),d.pause=c.pause.bind(c),d.resume=c.resume.bind(c),d.stop=d,d}function Hn(n,e=1/0,t){if(e<=0||!je(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Lt(n))Hn(n.value,e,t);else if(Le(n))for(let i=0;i<n.length;i++)Hn(n[i],e,t);else if(pu(n)||lr(n))n.forEach(i=>{Hn(i,e,t)});else if(_u(n)){for(const i in n)Hn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Hn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zr(n,e,t,i){try{return i?n(...i):n()}catch(r){sa(r,e,t)}}function dn(n,e,t,i){if(Fe(n)){const r=Zr(n,e,t,i);return r&&mu(r)&&r.catch(s=>{sa(s,e,t)}),r}if(Le(n)){const r=[];for(let s=0;s<n.length;s++)r.push(dn(n[s],e,t,i));return r}}function sa(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Qe;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}a=a.parent}if(s){Xn(),Zr(s,null,10,[n,l,u]),qn();return}}nd(n,t,r,i,o)}function nd(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Ft=[];let gn=-1;const cr=[];let ri=null,rr=0;const zu=Promise.resolve();let zs=null;function Lr(n){const e=zs||zu;return n?e.then(this?n.bind(this):n):e}function id(n){let e=gn+1,t=Ft.length;for(;e<t;){const i=e+t>>>1,r=Ft[i],s=kr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Yo(n){if(!(n.flags&1)){const e=kr(n),t=Ft[Ft.length-1];!t||!(n.flags&2)&&e>=kr(t)?Ft.push(n):Ft.splice(id(e),0,n),n.flags|=1,Hu()}}function Hu(){zs||(zs=zu.then(Vu))}function rd(n){Le(n)?cr.push(...n):ri&&n.id===-1?ri.splice(rr+1,0,n):n.flags&1||(cr.push(n),n.flags|=1),Hu()}function pl(n,e,t=gn+1){for(;t<Ft.length;t++){const i=Ft[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ft.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Gu(n){if(cr.length){const e=[...new Set(cr)].sort((t,i)=>kr(t)-kr(i));if(cr.length=0,ri){ri.push(...e);return}for(ri=e,rr=0;rr<ri.length;rr++){const t=ri[rr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ri=null,rr=0}}const kr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Vu(n){try{for(gn=0;gn<Ft.length;gn++){const e=Ft[gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Zr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;gn<Ft.length;gn++){const e=Ft[gn];e&&(e.flags&=-2)}gn=-1,Ft.length=0,Gu(),zs=null,(Ft.length||cr.length)&&Vu()}}let en=null,ku=null;function Hs(n){const e=en;return en=n,ku=n&&n.type.__scopeId||null,e}function Wu(n,e=en,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&ks(-1);const s=Hs(e);let o;try{o=n(...r)}finally{Hs(s),i._d&&ks(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function sd(n,e){if(en===null)return n;const t=ua(en),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=Qe]=e[r];s&&(Fe(s)&&(s={mounted:s,updated:s}),s.deep&&Hn(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function gi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Xn(),dn(l,t,8,[n.el,a,n,e]),qn())}}function ad(n,e){if(Bt){let t=Bt.provides;const i=Bt.parent&&Bt.parent.provides;i===t&&(t=Bt.provides=Object.create(i)),t[n]=e}}function Is(n,e,t=!1){const i=Tf();if(i||ur){let r=ur?ur._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Fe(e)?e.call(i&&i.proxy):e}}const od=Symbol.for("v-scx"),ld=()=>Is(od);function Ds(n,e,t){return Xu(n,e,t)}function Xu(n,e,t=Qe){const{immediate:i,deep:r,flush:s,once:o}=t,a=xt({},t),l=e&&i||!e&&s!=="post";let u;if($r){if(s==="sync"){const m=ld();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=bn,m.resume=bn,m.pause=bn,m}}const c=Bt;a.call=(m,v,M)=>dn(m,c,v,M);let f=!1;s==="post"?a.scheduler=m=>{Gt(m,c&&c.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(m,v)=>{v?m():Yo(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const h=td(n,e,a);return $r&&(u?u.push(h):l&&h()),h}function cd(n,e,t){const i=this.proxy,r=lt(n)?n.includes(".")?qu(i,n):()=>i[n]:n.bind(i,i);let s;Fe(e)?s=e:(s=e.handler,t=e);const o=Jr(this),a=Xu(r,s.bind(i),t);return o(),a}function qu(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const ud=Symbol("_vte"),$u=n=>n.__isTeleport,_n=Symbol("_leaveCb"),Er=Symbol("_enterCb");function fd(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ko(()=>{n.isMounted=!0}),tf(()=>{n.isUnmounting=!0}),n}const Jt=[Function,Array],Yu={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Jt,onEnter:Jt,onAfterEnter:Jt,onEnterCancelled:Jt,onBeforeLeave:Jt,onLeave:Jt,onAfterLeave:Jt,onLeaveCancelled:Jt,onBeforeAppear:Jt,onAppear:Jt,onAfterAppear:Jt,onAppearCancelled:Jt},Ku=n=>{const e=n.subTree;return e.component?Ku(e.component):e},hd={name:"BaseTransition",props:Yu,setup(n,{slots:e}){const t=Tf(),i=fd();return()=>{const r=e.default&&Ju(e.default(),!0),s=r&&r.length?ju(r):t.subTree?Xs():void 0;if(!s)return;const o=Ye(n),{mode:a}=o;if(i.isLeaving)return ba(s);const l=ml(s);if(!l)return ba(s);let u=_o(l,o,i,t,f=>u=f);l.type!==Ot&&Wr(l,u);let c=t.subTree&&ml(t.subTree);if(c&&c.type!==Ot&&!Ri(c,l)&&Ku(t).type!==Ot){let f=_o(c,o,i,t);if(Wr(c,f),a==="out-in"&&l.type!==Ot)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,c=void 0},ba(s);a==="in-out"&&l.type!==Ot?f.delayLeave=(h,m,v)=>{const M=Zu(i,c);M[String(c.key)]=c,h[_n]=()=>{m(),h[_n]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{v(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function ju(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Ot){e=t;break}}return e}const dd=hd;function Zu(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function _o(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:h,onLeave:m,onAfterLeave:v,onLeaveCancelled:M,onBeforeAppear:p,onAppear:d,onAfterAppear:T,onAppearCancelled:_}=e,y=String(n.key),L=Zu(t,n),P=(q,S)=>{q&&dn(q,i,9,S)},C=(q,S)=>{const A=S[1];P(q,S),Le(q)?q.every(R=>R.length<=1)&&A():q.length<=1&&A()},O={mode:o,persisted:a,beforeEnter(q){let S=l;if(!t.isMounted)if(s)S=p||l;else return;q[_n]&&q[_n](!0);const A=L[y];A&&Ri(n,A)&&A.el[_n]&&A.el[_n](),P(S,[q])},enter(q){if(L[y]===n)return;let S=u,A=c,R=f;if(!t.isMounted)if(s)S=d||u,A=T||c,R=_||f;else return;let I=!1;q[Er]=G=>{I||(I=!0,G?P(R,[q]):P(A,[q]),O.delayedLeave&&O.delayedLeave(),q[Er]=void 0)};const w=q[Er].bind(null,!1);S?C(S,[q,w]):w()},leave(q,S){const A=String(n.key);if(q[Er]&&q[Er](!0),t.isUnmounting)return S();P(h,[q]);let R=!1;q[_n]=w=>{R||(R=!0,S(),w?P(M,[q]):P(v,[q]),q[_n]=void 0,L[A]===n&&delete L[A])};const I=q[_n].bind(null,!1);L[A]=n,m?C(m,[q,I]):I()},clone(q){const S=_o(q,e,t,i,r);return r&&r(S),S}};return O}function ba(n){if(aa(n))return n=fi(n),n.children=null,n}function ml(n){if(!aa(n))return $u(n.type)&&n.children?ju(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Fe(t.default))return t.default()}}function Wr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Wr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Ju(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Pt?(o.patchFlag&128&&r++,i=i.concat(Ju(o.children,e,a))):(e||o.type!==Ot)&&i.push(a!=null?fi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Qu(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function gl(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Gs=new WeakMap;function Or(n,e,t,i,r=!1){if(Le(n)){n.forEach((M,p)=>Or(M,e&&(Le(e)?e[p]:e),t,i,r));return}if(Br(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Or(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?ua(i.component):i.el,o=r?null:s,{i:a,r:l}=n,u=e&&e.r,c=a.refs===Qe?a.refs={}:a.refs,f=a.setupState,h=Ye(f),m=f===Qe?du:M=>gl(c,M)?!1:Ke(h,M),v=(M,p)=>!(p&&gl(c,p));if(u!=null&&u!==l){if(_l(e),lt(u))c[u]=null,m(u)&&(f[u]=null);else if(Lt(u)){const M=e;v(u,M.k)&&(u.value=null),M.k&&(c[M.k]=null)}}if(Fe(l))Zr(l,a,12,[o,c]);else{const M=lt(l),p=Lt(l);if(M||p){const d=()=>{if(n.f){const T=M?m(l)?f[l]:c[l]:v()||!n.k?l.value:c[n.k];if(r)Le(T)&&Oo(T,s);else if(Le(T))T.includes(s)||T.push(s);else if(M)c[l]=[s],m(l)&&(f[l]=c[l]);else{const _=[s];v(l,n.k)&&(l.value=_),n.k&&(c[n.k]=_)}}else M?(c[l]=o,m(l)&&(f[l]=o)):p&&(v(l,n.k)&&(l.value=o),n.k&&(c[n.k]=o))};if(o){const T=()=>{d(),Gs.delete(n)};T.id=-1,Gs.set(n,T),Gt(T,t)}else _l(n),d()}}}function _l(n){const e=Gs.get(n);e&&(e.flags|=8,Gs.delete(n))}ia().requestIdleCallback;ia().cancelIdleCallback;const Br=n=>!!n.type.__asyncLoader,aa=n=>n.type.__isKeepAlive;function pd(n,e){ef(n,"a",e)}function md(n,e){ef(n,"da",e)}function ef(n,e,t=Bt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(oa(e,i,t),t){let r=t.parent;for(;r&&r.parent;)aa(r.parent.vnode)&&gd(i,e,t,r),r=r.parent}}function gd(n,e,t,i){const r=oa(e,n,i,!0);nf(()=>{Oo(i[e],r)},t)}function oa(n,e,t=Bt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Xn();const a=Jr(t),l=dn(e,t,n,o);return a(),qn(),l});return i?r.unshift(s):r.push(s),s}}const jn=n=>(e,t=Bt)=>{(!$r||n==="sp")&&oa(n,(...i)=>e(...i),t)},_d=jn("bm"),Ko=jn("m"),vd=jn("bu"),xd=jn("u"),tf=jn("bum"),nf=jn("um"),Md=jn("sp"),Sd=jn("rtg"),Ed=jn("rtc");function yd(n,e=Bt){oa("ec",n,e)}const Td=Symbol.for("v-ndc");function Xr(n,e,t,i){let r;const s=t,o=Le(n);if(o||lt(n)){const a=o&&Ui(n);let l=!1,u=!1;a&&(l=!tn(n),u=$n(n),n=ra(n)),r=new Array(n.length);for(let c=0,f=n.length;c<f;c++)r[c]=e(l?u?dr(hn(n[c])):hn(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(je(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=e(n[c],c,l,s)}}else r=[];return r}const vo=n=>n?bf(n)?ua(n):vo(n.parent):null,zr=xt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>vo(n.parent),$root:n=>vo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>sf(n),$forceUpdate:n=>n.f||(n.f=()=>{Yo(n.update)}),$nextTick:n=>n.n||(n.n=Lr.bind(n.proxy)),$watch:n=>cd.bind(n)}),Aa=(n,e)=>n!==Qe&&!n.__isScriptSetup&&Ke(n,e),bd={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Aa(i,e))return o[e]=1,i[e];if(r!==Qe&&Ke(r,e))return o[e]=2,r[e];if(Ke(s,e))return o[e]=3,s[e];if(t!==Qe&&Ke(t,e))return o[e]=4,t[e];xo&&(o[e]=0)}}const u=zr[e];let c,f;if(u)return e==="$attrs"&&Rt(n.attrs,"get",""),u(n);if((c=a.__cssModules)&&(c=c[e]))return c;if(t!==Qe&&Ke(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Ke(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Aa(r,e)?(r[e]=t,!0):i!==Qe&&Ke(i,e)?(i[e]=t,!0):Ke(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==Qe&&a[0]!=="$"&&Ke(n,a)||Aa(e,a)||Ke(s,a)||Ke(i,a)||Ke(zr,a)||Ke(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ke(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function vl(n){return Le(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let xo=!0;function Ad(n){const e=sf(n),t=n.proxy,i=n.ctx;xo=!1,e.beforeCreate&&xl(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:m,updated:v,activated:M,deactivated:p,beforeDestroy:d,beforeUnmount:T,destroyed:_,unmounted:y,render:L,renderTracked:P,renderTriggered:C,errorCaptured:O,serverPrefetch:q,expose:S,inheritAttrs:A,components:R,directives:I,filters:w}=e;if(u&&wd(u,i,null),o)for(const X in o){const V=o[X];Fe(V)&&(i[X]=V.bind(t))}if(r){const X=r.call(t,t);je(X)&&(n.data=Xo(X))}if(xo=!0,s)for(const X in s){const V=s[X],ne=Fe(V)?V.bind(t,t):Fe(V.get)?V.get.bind(t,t):bn,ie=!Fe(V)&&Fe(V.set)?V.set.bind(t):bn,ue=Wn({get:ne,set:ie});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>ue.value,set:_e=>ue.value=_e})}if(a)for(const X in a)rf(a[X],i,t,X);if(l){const X=Fe(l)?l.call(t):l;Reflect.ownKeys(X).forEach(V=>{ad(V,X[V])})}c&&xl(c,n,"c");function B(X,V){Le(V)?V.forEach(ne=>X(ne.bind(t))):V&&X(V.bind(t))}if(B(_d,f),B(Ko,h),B(vd,m),B(xd,v),B(pd,M),B(md,p),B(yd,O),B(Ed,P),B(Sd,C),B(tf,T),B(nf,y),B(Md,q),Le(S))if(S.length){const X=n.exposed||(n.exposed={});S.forEach(V=>{Object.defineProperty(X,V,{get:()=>t[V],set:ne=>t[V]=ne,enumerable:!0})})}else n.exposed||(n.exposed={});L&&n.render===bn&&(n.render=L),A!=null&&(n.inheritAttrs=A),R&&(n.components=R),I&&(n.directives=I),q&&Qu(n)}function wd(n,e,t=bn){Le(n)&&(n=Mo(n));for(const i in n){const r=n[i];let s;je(r)?"default"in r?s=Is(r.from||i,r.default,!0):s=Is(r.from||i):s=Is(r),Lt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function xl(n,e,t){dn(Le(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function rf(n,e,t,i){let r=i.includes(".")?qu(t,i):()=>t[i];if(lt(n)){const s=e[n];Fe(s)&&Ds(r,s)}else if(Fe(n))Ds(r,n.bind(t));else if(je(n))if(Le(n))n.forEach(s=>rf(s,e,t,i));else{const s=Fe(n.handler)?n.handler.bind(t):e[n.handler];Fe(s)&&Ds(r,s,n)}}function sf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(u=>Vs(l,u,o,!0)),Vs(l,e,o)),je(e)&&s.set(e,l),l}function Vs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Vs(n,s,t,!0),r&&r.forEach(o=>Vs(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Cd[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Cd={data:Ml,props:Sl,emits:Sl,methods:Ir,computed:Ir,beforeCreate:Dt,created:Dt,beforeMount:Dt,mounted:Dt,beforeUpdate:Dt,updated:Dt,beforeDestroy:Dt,beforeUnmount:Dt,destroyed:Dt,unmounted:Dt,activated:Dt,deactivated:Dt,errorCaptured:Dt,serverPrefetch:Dt,components:Ir,directives:Ir,watch:Pd,provide:Ml,inject:Rd};function Ml(n,e){return e?n?function(){return xt(Fe(n)?n.call(this,this):n,Fe(e)?e.call(this,this):e)}:e:n}function Rd(n,e){return Ir(Mo(n),Mo(e))}function Mo(n){if(Le(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Dt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ir(n,e){return n?xt(Object.create(null),n,e):e}function Sl(n,e){return n?Le(n)&&Le(e)?[...new Set([...n,...e])]:xt(Object.create(null),vl(n),vl(e??{})):e}function Pd(n,e){if(!n)return e;if(!e)return n;const t=xt(Object.create(null),n);for(const i in e)t[i]=Dt(n[i],e[i]);return t}function af(){return{app:null,config:{isNativeTag:du,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ld=0;function Id(n,e){return function(i,r=null){Fe(i)||(i=xt({},i)),r!=null&&!je(r)&&(r=null);const s=af(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:Ld++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:up,get config(){return s.config},set config(c){},use(c,...f){return o.has(c)||(c&&Fe(c.install)?(o.add(c),c.install(u,...f)):Fe(c)&&(o.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,h){if(!l){const m=u._ceVNode||vt(i,r);return m.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(m,c,h),l=!0,u._container=c,c.__vue_app__=u,ua(m.component)}},onUnmount(c){a.push(c)},unmount(){l&&(dn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=ur;ur=u;try{return c()}finally{ur=f}}};return u}}let ur=null;const Dd=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${cn(e)}Modifiers`]||n[`${zi(e)}Modifiers`];function Ud(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Qe;let r=t;const s=e.startsWith("update:"),o=s&&Dd(i,e.slice(7));o&&(o.trim&&(r=t.map(c=>lt(c)?c.trim():c)),o.number&&(r=t.map(vh)));let a,l=i[a=xa(e)]||i[a=xa(cn(e))];!l&&s&&(l=i[a=xa(zi(e))]),l&&dn(l,n,6,r);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,dn(u,n,6,r)}}const Nd=new WeakMap;function of(n,e,t=!1){const i=t?Nd:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Fe(n)){const l=u=>{const c=of(u,e,!0);c&&(a=!0,xt(o,c))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(je(n)&&i.set(n,null),null):(Le(s)?s.forEach(l=>o[l]=null):xt(o,s),je(n)&&i.set(n,o),o)}function la(n,e){return!n||!ea(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ke(n,e[0].toLowerCase()+e.slice(1))||Ke(n,zi(e))||Ke(n,e))}function El(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:h,setupState:m,ctx:v,inheritAttrs:M}=n,p=Hs(n);let d,T;try{if(t.shapeFlag&4){const y=r||i,L=y;d=Mn(u.call(L,y,c,f,m,h,v)),T=a}else{const y=e;d=Mn(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),T=e.props?a:Fd(a)}}catch(y){Hr.length=0,sa(y,n,1),d=vt(Ot)}let _=d;if(T&&M!==!1){const y=Object.keys(T),{shapeFlag:L}=_;y.length&&L&7&&(s&&y.some(ta)&&(T=Od(T,s)),_=fi(_,T,!1,!0))}return t.dirs&&(_=fi(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition&&Wr(_,t.transition),d=_,Hs(p),d}const Fd=n=>{let e;for(const t in n)(t==="class"||t==="style"||ea(t))&&((e||(e={}))[t]=n[t]);return e},Od=(n,e)=>{const t={};for(const i in n)(!ta(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Bd(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?yl(i,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(lf(o,i,h)&&!la(u,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?yl(i,o,u):!0:!!o;return!1}function yl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(lf(e,n,s)&&!la(t,s))return!0}return!1}function lf(n,e,t){const i=n[t],r=e[t];return t==="style"&&je(i)&&je(r)?!zo(i,r):i!==r}function zd({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const cf={},uf=()=>Object.create(cf),ff=n=>Object.getPrototypeOf(n)===cf;function Hd(n,e,t,i=!1){const r={},s=uf();n.propsDefaults=Object.create(null),hf(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:$h(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Gd(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Ye(r),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(la(n.emitsOptions,h))continue;const m=e[h];if(l)if(Ke(s,h))m!==s[h]&&(s[h]=m,u=!0);else{const v=cn(h);r[v]=So(l,a,v,m,n,!1)}else m!==s[h]&&(s[h]=m,u=!0)}}}else{hf(n,e,r,s)&&(u=!0);let c;for(const f in a)(!e||!Ke(e,f)&&((c=zi(f))===f||!Ke(e,c)))&&(l?t&&(t[f]!==void 0||t[c]!==void 0)&&(r[f]=So(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ke(e,f))&&(delete s[f],u=!0)}u&&zn(n.attrs,"set","")}function hf(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ur(l))continue;const u=e[l];let c;r&&Ke(r,c=cn(l))?!s||!s.includes(c)?t[c]=u:(a||(a={}))[c]=u:la(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=Ye(t),u=a||Qe;for(let c=0;c<s.length;c++){const f=s[c];t[f]=So(r,l,f,u[f],n,!Ke(u,f))}}return o}function So(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Ke(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Fe(l)){const{propsDefaults:u}=r;if(t in u)i=u[t];else{const c=Jr(r);i=u[t]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===zi(t))&&(i=!0))}return i}const Vd=new WeakMap;function df(n,e,t=!1){const i=t?Vd:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Fe(n)){const c=f=>{l=!0;const[h,m]=df(f,e,!0);xt(o,h),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!s&&!l)return je(n)&&i.set(n,or),or;if(Le(s))for(let c=0;c<s.length;c++){const f=cn(s[c]);Tl(f)&&(o[f]=Qe)}else if(s)for(const c in s){const f=cn(c);if(Tl(f)){const h=s[c],m=o[f]=Le(h)||Fe(h)?{type:h}:xt({},h),v=m.type;let M=!1,p=!0;if(Le(v))for(let d=0;d<v.length;++d){const T=v[d],_=Fe(T)&&T.name;if(_==="Boolean"){M=!0;break}else _==="String"&&(p=!1)}else M=Fe(v)&&v.name==="Boolean";m[0]=M,m[1]=p,(M||Ke(m,"default"))&&a.push(f)}}const u=[o,a];return je(n)&&i.set(n,u),u}function Tl(n){return n[0]!=="$"&&!Ur(n)}const jo=n=>n==="_"||n==="_ctx"||n==="$stable",Zo=n=>Le(n)?n.map(Mn):[Mn(n)],kd=(n,e,t)=>{if(e._n)return e;const i=Wu((...r)=>Zo(e(...r)),t);return i._c=!1,i},pf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(jo(r))continue;const s=n[r];if(Fe(s))e[r]=kd(r,s,i);else if(s!=null){const o=Zo(s);e[r]=()=>o}}},mf=(n,e)=>{const t=Zo(e);n.slots.default=()=>t},gf=(n,e,t)=>{for(const i in e)(t||!jo(i))&&(n[i]=e[i])},Wd=(n,e,t)=>{const i=n.slots=uf();if(n.vnode.shapeFlag&32){const r=e._;r?(gf(i,e,t),t&&xu(i,"_",r,!0)):pf(e,i)}else e&&mf(n,e)},Xd=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Qe;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:gf(r,e,t):(s=!e.$stable,pf(e,r)),o=e}else e&&(mf(n,e),o={default:1});if(s)for(const a in r)!jo(a)&&o[a]==null&&delete r[a]},Gt=jd;function qd(n){return $d(n)}function $d(n,e){const t=ia();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:m=bn,insertStaticContent:v}=n,M=(x,D,F,J=null,k=null,Q=null,se=void 0,re=null,ae=!!D.dynamicChildren)=>{if(x===D)return;x&&!Ri(x,D)&&(J=Re(x),_e(x,k,Q,!0),x=null),D.patchFlag===-2&&(ae=!1,D.dynamicChildren=null);const{type:E,ref:g,shapeFlag:U}=D;switch(E){case ca:p(x,D,F,J);break;case Ot:d(x,D,F,J);break;case Us:x==null&&T(D,F,J,se);break;case Pt:R(x,D,F,J,k,Q,se,re,ae);break;default:U&1?L(x,D,F,J,k,Q,se,re,ae):U&6?I(x,D,F,J,k,Q,se,re,ae):(U&64||U&128)&&E.process(x,D,F,J,k,Q,se,re,ae,qe)}g!=null&&k?Or(g,x&&x.ref,Q,D||x,!D):g==null&&x&&x.ref!=null&&Or(x.ref,null,Q,x,!0)},p=(x,D,F,J)=>{if(x==null)i(D.el=a(D.children),F,J);else{const k=D.el=x.el;D.children!==x.children&&u(k,D.children)}},d=(x,D,F,J)=>{x==null?i(D.el=l(D.children||""),F,J):D.el=x.el},T=(x,D,F,J)=>{[x.el,x.anchor]=v(x.children,D,F,J,x.el,x.anchor)},_=({el:x,anchor:D},F,J)=>{let k;for(;x&&x!==D;)k=h(x),i(x,F,J),x=k;i(D,F,J)},y=({el:x,anchor:D})=>{let F;for(;x&&x!==D;)F=h(x),r(x),x=F;r(D)},L=(x,D,F,J,k,Q,se,re,ae)=>{if(D.type==="svg"?se="svg":D.type==="math"&&(se="mathml"),x==null)P(D,F,J,k,Q,se,re,ae);else{const E=x.el&&x.el._isVueCE?x.el:null;try{E&&E._beginPatch(),q(x,D,k,Q,se,re,ae)}finally{E&&E._endPatch()}}},P=(x,D,F,J,k,Q,se,re)=>{let ae,E;const{props:g,shapeFlag:U,transition:z,dirs:j}=x;if(ae=x.el=o(x.type,Q,g&&g.is,g),U&8?c(ae,x.children):U&16&&O(x.children,ae,null,J,k,wa(x,Q),se,re),j&&gi(x,null,J,"created"),C(ae,x,x.scopeId,se,J),g){for(const Me in g)Me!=="value"&&!Ur(Me)&&s(ae,Me,null,g[Me],Q,J);"value"in g&&s(ae,"value",null,g.value,Q),(E=g.onVnodeBeforeMount)&&mn(E,J,x)}j&&gi(x,null,J,"beforeMount");const te=Yd(k,z);te&&z.beforeEnter(ae),i(ae,D,F),((E=g&&g.onVnodeMounted)||te||j)&&Gt(()=>{try{E&&mn(E,J,x),te&&z.enter(ae),j&&gi(x,null,J,"mounted")}finally{}},k)},C=(x,D,F,J,k)=>{if(F&&m(x,F),J)for(let Q=0;Q<J.length;Q++)m(x,J[Q]);if(k){let Q=k.subTree;if(D===Q||Mf(Q.type)&&(Q.ssContent===D||Q.ssFallback===D)){const se=k.vnode;C(x,se,se.scopeId,se.slotScopeIds,k.parent)}}},O=(x,D,F,J,k,Q,se,re,ae=0)=>{for(let E=ae;E<x.length;E++){const g=x[E]=re?Bn(x[E]):Mn(x[E]);M(null,g,D,F,J,k,Q,se,re)}},q=(x,D,F,J,k,Q,se)=>{const re=D.el=x.el;let{patchFlag:ae,dynamicChildren:E,dirs:g}=D;ae|=x.patchFlag&16;const U=x.props||Qe,z=D.props||Qe;let j;if(F&&_i(F,!1),(j=z.onVnodeBeforeUpdate)&&mn(j,F,D,x),g&&gi(D,x,F,"beforeUpdate"),F&&_i(F,!0),(U.innerHTML&&z.innerHTML==null||U.textContent&&z.textContent==null)&&c(re,""),E?S(x.dynamicChildren,E,re,F,J,wa(D,k),Q):se||V(x,D,re,null,F,J,wa(D,k),Q,!1),ae>0){if(ae&16)A(re,U,z,F,k);else if(ae&2&&U.class!==z.class&&s(re,"class",null,z.class,k),ae&4&&s(re,"style",U.style,z.style,k),ae&8){const te=D.dynamicProps;for(let Me=0;Me<te.length;Me++){const me=te[Me],oe=U[me],fe=z[me];(fe!==oe||me==="value")&&s(re,me,oe,fe,k,F)}}ae&1&&x.children!==D.children&&c(re,D.children)}else!se&&E==null&&A(re,U,z,F,k);((j=z.onVnodeUpdated)||g)&&Gt(()=>{j&&mn(j,F,D,x),g&&gi(D,x,F,"updated")},J)},S=(x,D,F,J,k,Q,se)=>{for(let re=0;re<D.length;re++){const ae=x[re],E=D[re],g=ae.el&&(ae.type===Pt||!Ri(ae,E)||ae.shapeFlag&198)?f(ae.el):F;M(ae,E,g,null,J,k,Q,se,!0)}},A=(x,D,F,J,k)=>{if(D!==F){if(D!==Qe)for(const Q in D)!Ur(Q)&&!(Q in F)&&s(x,Q,D[Q],null,k,J);for(const Q in F){if(Ur(Q))continue;const se=F[Q],re=D[Q];se!==re&&Q!=="value"&&s(x,Q,re,se,k,J)}"value"in F&&s(x,"value",D.value,F.value,k)}},R=(x,D,F,J,k,Q,se,re,ae)=>{const E=D.el=x?x.el:a(""),g=D.anchor=x?x.anchor:a("");let{patchFlag:U,dynamicChildren:z,slotScopeIds:j}=D;j&&(re=re?re.concat(j):j),x==null?(i(E,F,J),i(g,F,J),O(D.children||[],F,g,k,Q,se,re,ae)):U>0&&U&64&&z&&x.dynamicChildren&&x.dynamicChildren.length===z.length?(S(x.dynamicChildren,z,F,k,Q,se,re),(D.key!=null||k&&D===k.subTree)&&_f(x,D,!0)):V(x,D,F,g,k,Q,se,re,ae)},I=(x,D,F,J,k,Q,se,re,ae)=>{D.slotScopeIds=re,x==null?D.shapeFlag&512?k.ctx.activate(D,F,J,se,ae):w(D,F,J,k,Q,se,ae):G(x,D,ae)},w=(x,D,F,J,k,Q,se)=>{const re=x.component=ip(x,J,k);if(aa(x)&&(re.ctx.renderer=qe),rp(re,!1,se),re.asyncDep){if(k&&k.registerDep(re,B,se),!x.el){const ae=re.subTree=vt(Ot);d(null,ae,D,F),x.placeholder=ae.el}}else B(re,x,D,F,k,Q,se)},G=(x,D,F)=>{const J=D.component=x.component;if(Bd(x,D,F))if(J.asyncDep&&!J.asyncResolved){X(J,D,F);return}else J.next=D,J.update();else D.el=x.el,J.vnode=D},B=(x,D,F,J,k,Q,se)=>{const re=()=>{if(x.isMounted){let{next:U,bu:z,u:j,parent:te,vnode:Me}=x;{const le=vf(x);if(le){U&&(U.el=Me.el,X(x,U,se)),le.asyncDep.then(()=>{Gt(()=>{x.isUnmounted||E()},k)});return}}let me=U,oe;_i(x,!1),U?(U.el=Me.el,X(x,U,se)):U=Me,z&&Ma(z),(oe=U.props&&U.props.onVnodeBeforeUpdate)&&mn(oe,te,U,Me),_i(x,!0);const fe=El(x),Ce=x.subTree;x.subTree=fe,M(Ce,fe,f(Ce.el),Re(Ce),x,k,Q),U.el=fe.el,me===null&&zd(x,fe.el),j&&Gt(j,k),(oe=U.props&&U.props.onVnodeUpdated)&&Gt(()=>mn(oe,te,U,Me),k)}else{let U;const{el:z,props:j}=D,{bm:te,m:Me,parent:me,root:oe,type:fe}=x,Ce=Br(D);_i(x,!1),te&&Ma(te),!Ce&&(U=j&&j.onVnodeBeforeMount)&&mn(U,me,D),_i(x,!0);{oe.ce&&oe.ce._hasShadowRoot()&&oe.ce._injectChildStyle(fe,x.parent?x.parent.type:void 0);const le=x.subTree=El(x);M(null,le,F,J,x,k,Q),D.el=le.el}if(Me&&Gt(Me,k),!Ce&&(U=j&&j.onVnodeMounted)){const le=D;Gt(()=>mn(U,me,le),k)}(D.shapeFlag&256||me&&Br(me.vnode)&&me.vnode.shapeFlag&256)&&x.a&&Gt(x.a,k),x.isMounted=!0,D=F=J=null}};x.scope.on();const ae=x.effect=new yu(re);x.scope.off();const E=x.update=ae.run.bind(ae),g=x.job=ae.runIfDirty.bind(ae);g.i=x,g.id=x.uid,ae.scheduler=()=>Yo(g),_i(x,!0),E()},X=(x,D,F)=>{D.component=x;const J=x.vnode.props;x.vnode=D,x.next=null,Gd(x,D.props,J,F),Xd(x,D.children,F),Xn(),pl(x),qn()},V=(x,D,F,J,k,Q,se,re,ae=!1)=>{const E=x&&x.children,g=x?x.shapeFlag:0,U=D.children,{patchFlag:z,shapeFlag:j}=D;if(z>0){if(z&128){ie(E,U,F,J,k,Q,se,re,ae);return}else if(z&256){ne(E,U,F,J,k,Q,se,re,ae);return}}j&8?(g&16&&xe(E,k,Q),U!==E&&c(F,U)):g&16?j&16?ie(E,U,F,J,k,Q,se,re,ae):xe(E,k,Q,!0):(g&8&&c(F,""),j&16&&O(U,F,J,k,Q,se,re,ae))},ne=(x,D,F,J,k,Q,se,re,ae)=>{x=x||or,D=D||or;const E=x.length,g=D.length,U=Math.min(E,g);let z;for(z=0;z<U;z++){const j=D[z]=ae?Bn(D[z]):Mn(D[z]);M(x[z],j,F,null,k,Q,se,re,ae)}E>g?xe(x,k,Q,!0,!1,U):O(D,F,J,k,Q,se,re,ae,U)},ie=(x,D,F,J,k,Q,se,re,ae)=>{let E=0;const g=D.length;let U=x.length-1,z=g-1;for(;E<=U&&E<=z;){const j=x[E],te=D[E]=ae?Bn(D[E]):Mn(D[E]);if(Ri(j,te))M(j,te,F,null,k,Q,se,re,ae);else break;E++}for(;E<=U&&E<=z;){const j=x[U],te=D[z]=ae?Bn(D[z]):Mn(D[z]);if(Ri(j,te))M(j,te,F,null,k,Q,se,re,ae);else break;U--,z--}if(E>U){if(E<=z){const j=z+1,te=j<g?D[j].el:J;for(;E<=z;)M(null,D[E]=ae?Bn(D[E]):Mn(D[E]),F,te,k,Q,se,re,ae),E++}}else if(E>z)for(;E<=U;)_e(x[E],k,Q,!0),E++;else{const j=E,te=E,Me=new Map;for(E=te;E<=z;E++){const ye=D[E]=ae?Bn(D[E]):Mn(D[E]);ye.key!=null&&Me.set(ye.key,E)}let me,oe=0;const fe=z-te+1;let Ce=!1,le=0;const et=new Array(fe);for(E=0;E<fe;E++)et[E]=0;for(E=j;E<=U;E++){const ye=x[E];if(oe>=fe){_e(ye,k,Q,!0);continue}let Se;if(ye.key!=null)Se=Me.get(ye.key);else for(me=te;me<=z;me++)if(et[me-te]===0&&Ri(ye,D[me])){Se=me;break}Se===void 0?_e(ye,k,Q,!0):(et[Se-te]=E+1,Se>=le?le=Se:Ce=!0,M(ye,D[Se],F,null,k,Q,se,re,ae),oe++)}const ze=Ce?Kd(et):or;for(me=ze.length-1,E=fe-1;E>=0;E--){const ye=te+E,Se=D[ye],be=D[ye+1],We=ye+1<g?be.el||xf(be):J;et[E]===0?M(null,Se,F,We,k,Q,se,re,ae):Ce&&(me<0||E!==ze[me]?ue(Se,F,We,2):me--)}}},ue=(x,D,F,J,k=null)=>{const{el:Q,type:se,transition:re,children:ae,shapeFlag:E}=x;if(E&6){ue(x.component.subTree,D,F,J);return}if(E&128){x.suspense.move(D,F,J);return}if(E&64){se.move(x,D,F,qe);return}if(se===Pt){i(Q,D,F);for(let U=0;U<ae.length;U++)ue(ae[U],D,F,J);i(x.anchor,D,F);return}if(se===Us){_(x,D,F);return}if(J!==2&&E&1&&re)if(J===0)re.beforeEnter(Q),i(Q,D,F),Gt(()=>re.enter(Q),k);else{const{leave:U,delayLeave:z,afterLeave:j}=re,te=()=>{x.ctx.isUnmounted?r(Q):i(Q,D,F)},Me=()=>{Q._isLeaving&&Q[_n](!0),U(Q,()=>{te(),j&&j()})};z?z(Q,te,Me):Me()}else i(Q,D,F)},_e=(x,D,F,J=!1,k=!1)=>{const{type:Q,props:se,ref:re,children:ae,dynamicChildren:E,shapeFlag:g,patchFlag:U,dirs:z,cacheIndex:j,memo:te}=x;if(U===-2&&(k=!1),re!=null&&(Xn(),Or(re,null,F,x,!0),qn()),j!=null&&(D.renderCache[j]=void 0),g&256){D.ctx.deactivate(x);return}const Me=g&1&&z,me=!Br(x);let oe;if(me&&(oe=se&&se.onVnodeBeforeUnmount)&&mn(oe,D,x),g&6)ce(x.component,F,J);else{if(g&128){x.suspense.unmount(F,J);return}Me&&gi(x,null,D,"beforeUnmount"),g&64?x.type.remove(x,D,F,qe,J):E&&!E.hasOnce&&(Q!==Pt||U>0&&U&64)?xe(E,D,F,!1,!0):(Q===Pt&&U&384||!k&&g&16)&&xe(ae,D,F),J&&Ue(x)}const fe=te!=null&&j==null;(me&&(oe=se&&se.onVnodeUnmounted)||Me||fe)&&Gt(()=>{oe&&mn(oe,D,x),Me&&gi(x,null,D,"unmounted"),fe&&(x.el=null)},F)},Ue=x=>{const{type:D,el:F,anchor:J,transition:k}=x;if(D===Pt){ee(F,J);return}if(D===Us){y(x);return}const Q=()=>{r(F),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(x.shapeFlag&1&&k&&!k.persisted){const{leave:se,delayLeave:re}=k,ae=()=>se(F,Q);re?re(x.el,Q,ae):ae()}else Q()},ee=(x,D)=>{let F;for(;x!==D;)F=h(x),r(x),x=F;r(D)},ce=(x,D,F)=>{const{bum:J,scope:k,job:Q,subTree:se,um:re,m:ae,a:E}=x;bl(ae),bl(E),J&&Ma(J),k.stop(),Q&&(Q.flags|=8,_e(se,x,D,F)),re&&Gt(re,D),Gt(()=>{x.isUnmounted=!0},D)},xe=(x,D,F,J=!1,k=!1,Q=0)=>{for(let se=Q;se<x.length;se++)_e(x[se],D,F,J,k)},Re=x=>{if(x.shapeFlag&6)return Re(x.component.subTree);if(x.shapeFlag&128)return x.suspense.next();const D=h(x.anchor||x.el),F=D&&D[ud];return F?h(F):D};let Ae=!1;const Te=(x,D,F)=>{let J;x==null?D._vnode&&(_e(D._vnode,null,null,!0),J=D._vnode.component):M(D._vnode||null,x,D,null,null,null,F),D._vnode=x,Ae||(Ae=!0,pl(J),Gu(),Ae=!1)},qe={p:M,um:_e,m:ue,r:Ue,mt:w,mc:O,pc:V,pbc:S,n:Re,o:n};return{render:Te,hydrate:void 0,createApp:Id(Te)}}function wa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function _i({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Yd(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function _f(n,e,t=!1){const i=n.children,r=e.children;if(Le(i)&&Le(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Bn(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&_f(o,a)),a.type===ca&&(a.patchFlag===-1&&(a=r[s]=Bn(a)),a.el=o.el),a.type===Ot&&!a.el&&(a.el=o.el)}}function Kd(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(r=t[t.length-1],n[r]<u){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<u?s=a+1:o=a;u<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function vf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:vf(e)}function bl(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function xf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?xf(e.subTree):null}const Mf=n=>n.__isSuspense;function jd(n,e){e&&e.pendingBranch?Le(n)?e.effects.push(...n):e.effects.push(n):rd(n)}const Pt=Symbol.for("v-fgt"),ca=Symbol.for("v-txt"),Ot=Symbol.for("v-cmt"),Us=Symbol.for("v-stc"),Hr=[];let Yt=null;function ht(n=!1){Hr.push(Yt=n?null:[])}function Zd(){Hr.pop(),Yt=Hr[Hr.length-1]||null}let qr=1;function ks(n,e=!1){qr+=n,n<0&&Yt&&e&&(Yt.hasOnce=!0)}function Sf(n){return n.dynamicChildren=qr>0?Yt||or:null,Zd(),qr>0&&Yt&&Yt.push(n),n}function yt(n,e,t,i,r,s){return Sf(he(n,e,t,i,r,s,!0))}function Ef(n,e,t,i,r){return Sf(vt(n,e,t,i,r,!0))}function Ws(n){return n?n.__v_isVNode===!0:!1}function Ri(n,e){return n.type===e.type&&n.key===e.key}const yf=({key:n})=>n??null,Ns=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?lt(n)||Lt(n)||Fe(n)?{i:en,r:n,k:e,f:!!t}:n:null);function he(n,e=null,t=null,i=0,r=null,s=n===Pt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&yf(e),ref:e&&Ns(e),scopeId:ku,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:en};return a?(Jo(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=lt(t)?8:16),qr>0&&!o&&Yt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Yt.push(l),l}const vt=Jd;function Jd(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Td)&&(n=Ot),Ws(n)){const a=fi(n,e,!0);return t&&Jo(a,t),qr>0&&!s&&Yt&&(a.shapeFlag&6?Yt[Yt.indexOf(n)]=a:Yt.push(a)),a.patchFlag=-2,a}if(lp(n)&&(n=n.__vccOpts),e){e=Qd(e);let{class:a,style:l}=e;a&&!lt(a)&&(e.class=un(a)),je(l)&&($o(l)&&!Le(l)&&(l=xt({},l)),e.style=ai(l))}const o=lt(n)?1:Mf(n)?128:$u(n)?64:je(n)?4:Fe(n)?2:0;return he(n,e,t,i,r,o,s,!0)}function Qd(n){return n?$o(n)||ff(n)?xt({},n):n:null}function fi(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,u=e?ep(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&yf(u),ref:e&&e.ref?t&&s?Le(s)?s.concat(Ns(e)):[s,Ns(e)]:Ns(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Pt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&fi(n.ssContent),ssFallback:n.ssFallback&&fi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Wr(c,l.clone(c)),c}function Eo(n=" ",e=0){return vt(ca,null,n,e)}function yo(n,e){const t=vt(Us,null,n);return t.staticCount=e,t}function Xs(n="",e=!1){return e?(ht(),Ef(Ot,null,n)):vt(Ot,null,n)}function Mn(n){return n==null||typeof n=="boolean"?vt(Ot):Le(n)?vt(Pt,null,n.slice()):Ws(n)?Bn(n):vt(ca,null,String(n))}function Bn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:fi(n)}function Jo(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Le(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Jo(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!ff(e)?e._ctx=en:r===3&&en&&(en.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Fe(e)?(e={default:e,_ctx:en},t=32):(e=String(e),i&64?(t=16,e=[Eo(e)]):t=8);n.children=e,n.shapeFlag|=t}function ep(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=un([e.class,i.class]));else if(r==="style")e.style=ai([e.style,i.style]);else if(ea(r)){const s=e[r],o=i[r];o&&s!==o&&!(Le(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!ta(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function mn(n,e,t,i=null){dn(n,e,7,[t,i])}const tp=af();let np=0;function ip(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||tp,s={uid:np++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new wh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:df(i,r),emitsOptions:of(i,r),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:i.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ud.bind(null,s),n.ce&&n.ce(s),s}let Bt=null;const Tf=()=>Bt||en;let qs,To;{const n=ia(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};qs=e("__VUE_INSTANCE_SETTERS__",t=>Bt=t),To=e("__VUE_SSR_SETTERS__",t=>$r=t)}const Jr=n=>{const e=Bt;return qs(n),n.scope.on(),()=>{n.scope.off(),qs(e)}},Al=()=>{Bt&&Bt.scope.off(),qs(null)};function bf(n){return n.vnode.shapeFlag&4}let $r=!1;function rp(n,e=!1,t=!1){e&&To(e);const{props:i,children:r}=n.vnode,s=bf(n);Hd(n,i,s,e),Wd(n,r,t||e);const o=s?sp(n,e):void 0;return e&&To(!1),o}function sp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,bd);const{setup:i}=t;if(i){Xn();const r=n.setupContext=i.length>1?op(n):null,s=Jr(n),o=Zr(i,n,0,[n.props,r]),a=mu(o);if(qn(),s(),(a||n.sp)&&!Br(n)&&Qu(n),a){if(o.then(Al,Al),e)return o.then(l=>{wl(n,l)}).catch(l=>{sa(l,n,0)});n.asyncDep=o}else wl(n,o)}else Af(n)}function wl(n,e,t){Fe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:je(e)&&(n.setupState=Bu(e)),Af(n)}function Af(n,e,t){const i=n.type;n.render||(n.render=i.render||bn);{const r=Jr(n);Xn();try{Ad(n)}finally{qn(),r()}}}const ap={get(n,e){return Rt(n,"get",""),n[e]}};function op(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,ap),slots:n.slots,emit:n.emit,expose:e}}function ua(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Bu(Yh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in zr)return zr[t](n)},has(e,t){return t in e||t in zr}})):n.proxy}function lp(n){return Fe(n)&&"__vccOpts"in n}const Wn=(n,e)=>Qh(n,e,$r);function cp(n,e,t){try{ks(-1);const i=arguments.length;return i===2?je(e)&&!Le(e)?Ws(e)?vt(n,null,[e]):vt(n,e):vt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ws(t)&&(t=[t]),vt(n,e,t))}finally{ks(1)}}const up="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bo;const Cl=typeof window<"u"&&window.trustedTypes;if(Cl)try{bo=Cl.createPolicy("vue",{createHTML:n=>n})}catch{}const wf=bo?n=>bo.createHTML(n):n=>n,fp="http://www.w3.org/2000/svg",hp="http://www.w3.org/1998/Math/MathML",On=typeof document<"u"?document:null,Rl=On&&On.createElement("template"),dp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?On.createElementNS(fp,n):e==="mathml"?On.createElementNS(hp,n):t?On.createElement(n,{is:t}):On.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>On.createTextNode(n),createComment:n=>On.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>On.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Rl.innerHTML=wf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Rl.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Zn="transition",yr="animation",Yr=Symbol("_vtc"),Cf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},pp=xt({},Yu,Cf),mp=n=>(n.displayName="Transition",n.props=pp,n),gp=mp((n,{slots:e})=>cp(dd,_p(n),e)),vi=(n,e=[])=>{Le(n)?n.forEach(t=>t(...e)):n&&n(...e)},Pl=n=>n?Le(n)?n.some(e=>e.length>1):n.length>1:!1;function _p(n){const e={};for(const R in n)R in Cf||(e[R]=n[R]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,v=vp(r),M=v&&v[0],p=v&&v[1],{onBeforeEnter:d,onEnter:T,onEnterCancelled:_,onLeave:y,onLeaveCancelled:L,onBeforeAppear:P=d,onAppear:C=T,onAppearCancelled:O=_}=e,q=(R,I,w,G)=>{R._enterCancelled=G,xi(R,I?c:a),xi(R,I?u:o),w&&w()},S=(R,I)=>{R._isLeaving=!1,xi(R,f),xi(R,m),xi(R,h),I&&I()},A=R=>(I,w)=>{const G=R?C:T,B=()=>q(I,R,w);vi(G,[I,B]),Ll(()=>{xi(I,R?l:s),Pn(I,R?c:a),Pl(G)||Il(I,i,M,B)})};return xt(e,{onBeforeEnter(R){vi(d,[R]),Pn(R,s),Pn(R,o)},onBeforeAppear(R){vi(P,[R]),Pn(R,l),Pn(R,u)},onEnter:A(!1),onAppear:A(!0),onLeave(R,I){R._isLeaving=!0;const w=()=>S(R,I);Pn(R,f),R._enterCancelled?(Pn(R,h),Nl(R)):(Nl(R),Pn(R,h)),Ll(()=>{R._isLeaving&&(xi(R,f),Pn(R,m),Pl(y)||Il(R,i,p,w))}),vi(y,[R,w])},onEnterCancelled(R){q(R,!1,void 0,!0),vi(_,[R])},onAppearCancelled(R){q(R,!0,void 0,!0),vi(O,[R])},onLeaveCancelled(R){S(R),vi(L,[R])}})}function vp(n){if(n==null)return null;if(je(n))return[Ca(n.enter),Ca(n.leave)];{const e=Ca(n);return[e,e]}}function Ca(n){return xh(n)}function Pn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Yr]||(n[Yr]=new Set)).add(e)}function xi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Yr];t&&(t.delete(e),t.size||(n[Yr]=void 0))}function Ll(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let xp=0;function Il(n,e,t,i){const r=n._endId=++xp,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=Mp(n,e);if(!o)return i();const u=o+"end";let c=0;const f=()=>{n.removeEventListener(u,h),s()},h=m=>{m.target===n&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},a+1),n.addEventListener(u,h)}function Mp(n,e){const t=window.getComputedStyle(n),i=v=>(t[v]||"").split(", "),r=i(`${Zn}Delay`),s=i(`${Zn}Duration`),o=Dl(r,s),a=i(`${yr}Delay`),l=i(`${yr}Duration`),u=Dl(a,l);let c=null,f=0,h=0;e===Zn?o>0&&(c=Zn,f=o,h=s.length):e===yr?u>0&&(c=yr,f=u,h=l.length):(f=Math.max(o,u),c=f>0?o>u?Zn:yr:null,h=c?c===Zn?s.length:l.length:0);const m=c===Zn&&/\b(?:transform|all)(?:,|$)/.test(i(`${Zn}Property`).toString());return{type:c,timeout:f,propCount:h,hasTransform:m}}function Dl(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Ul(t)+Ul(n[i])))}function Ul(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Nl(n){return(n?n.ownerDocument:document).body.offsetHeight}function Sp(n,e,t){const i=n[Yr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const $s=Symbol("_vod"),Rf=Symbol("_vsh"),Ep={name:"show",beforeMount(n,{value:e},{transition:t}){n[$s]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Tr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Tr(n,!0),i.enter(n)):i.leave(n,()=>{Tr(n,!1)}):Tr(n,e))},beforeUnmount(n,{value:e}){Tr(n,e)}};function Tr(n,e){n.style.display=e?n[$s]:"none",n[Rf]=!e}const yp=Symbol(""),Tp=/(?:^|;)\s*display\s*:/;function bp(n,e,t){const i=n.style,r=lt(t);let s=!1;if(t&&!r){if(e)if(lt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Dr(i,a,"")}else for(const o in e)t[o]==null&&Dr(i,o,"");for(const o in t){o==="display"&&(s=!0);const a=t[o];a!=null?wp(n,o,!lt(e)&&e?e[o]:void 0,a)||Dr(i,o,a):Dr(i,o,"")}}else if(r){if(e!==t){const o=i[yp];o&&(t+=";"+o),i.cssText=t,s=Tp.test(t)}}else e&&n.removeAttribute("style");$s in n&&(n[$s]=s?i.display:"",n[Rf]&&(i.display="none"))}const Fl=/\s*!important$/;function Dr(n,e,t){if(Le(t))t.forEach(i=>Dr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Ap(n,e);Fl.test(t)?n.setProperty(zi(i),t.replace(Fl,""),"important"):n[i]=t}}const Ol=["Webkit","Moz","ms"],Ra={};function Ap(n,e){const t=Ra[e];if(t)return t;let i=cn(e);if(i!=="filter"&&i in n)return Ra[e]=i;i=vu(i);for(let r=0;r<Ol.length;r++){const s=Ol[r]+i;if(s in n)return Ra[e]=s}return e}function wp(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&lt(i)&&t===i}const Bl="http://www.w3.org/1999/xlink";function zl(n,e,t,i,r,s=bh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Bl,e.slice(6,e.length)):n.setAttributeNS(Bl,e,t):t==null||s&&!Mu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":wn(t)?String(t):t)}function Hl(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?wf(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Mu(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Cp(n,e,t,i){n.addEventListener(e,t,i)}function Rp(n,e,t,i){n.removeEventListener(e,t,i)}const Gl=Symbol("_vei");function Pp(n,e,t,i,r=null){const s=n[Gl]||(n[Gl]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Lp(e);if(i){const u=s[e]=Up(i,r);Cp(n,a,u,l)}else o&&(Rp(n,a,o,l),s[e]=void 0)}}const Vl=/(?:Once|Passive|Capture)$/;function Lp(n){let e;if(Vl.test(n)){e={};let i;for(;i=n.match(Vl);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):zi(n.slice(2)),e]}let Pa=0;const Ip=Promise.resolve(),Dp=()=>Pa||(Ip.then(()=>Pa=0),Pa=Date.now());function Up(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;dn(Np(i,t.value),e,5,[i])};return t.value=n,t.attached=Dp(),t}function Np(n,e){if(Le(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const kl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Fp=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Sp(n,i,o):e==="style"?bp(n,t,i):ea(e)?ta(e)||Pp(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Op(n,e,i,o))?(Hl(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&zl(n,e,i,o,s,e!=="value")):n._isVueCE&&(Bp(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!lt(i)))?Hl(n,cn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),zl(n,e,i,o))};function Op(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&kl(e)&&Fe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return kl(e)&&lt(t)?!1:e in n}function Bp(n,e){const t=n._def.props;if(!t)return!1;const i=cn(e);return Array.isArray(t)?t.some(r=>cn(r)===i):Object.keys(t).some(r=>cn(r)===i)}const zp=["ctrl","shift","alt","meta"],Hp={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>zp.some(t=>n[`${t}Key`]&&!e.includes(t))},La=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=Hp[e[o]];if(a&&a(r,e))return}return n(r,...s)})},Gp=xt({patchProp:Fp},dp);let Wl;function Vp(){return Wl||(Wl=qd(Gp))}const kp=(...n)=>{const e=Vp().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Xp(i);if(!r)return;const s=e._component;!Fe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Wp(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Wp(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Xp(n){return lt(n)?document.querySelector(n):n}const Qr=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},qp={class:"topbar"},$p={class:"topbar-right"},Yp={class:"theme-switcher"},Kp=["title","onClick"],jp={__name:"TopBar",props:{currentTheme:{type:String,default:"dark"}},emits:["set-theme"],setup(n){const e=[{id:"dark",label:"黑色",color:"#111"},{id:"gray",label:"灰色",color:"#555"},{id:"light",label:"白色",color:"#e8e8e8"}];return(t,i)=>(ht(),yt("header",qp,[i[4]||(i[4]=yo('<div class="topbar-left" data-v-14d3a547><div class="logo" data-v-14d3a547><span class="logo-k" data-v-14d3a547>K</span><span class="logo-rest" data-v-14d3a547>Skr</span></div><div class="topbar-divider" data-v-14d3a547></div><span class="topbar-subtitle" data-v-14d3a547>AE Plugin Preview</span></div>',1)),he("div",$p,[i[0]||(i[0]=he("a",{href:"https://kskr.kuaishou.com",target:"_blank",class:"topbar-link"},"文档",-1)),i[1]||(i[1]=he("a",{href:"#",class:"topbar-link"},"更新日志",-1)),i[2]||(i[2]=he("a",{href:"#",class:"topbar-link"},"关于",-1)),he("div",Yp,[(ht(),yt(Pt,null,Xr(e,r=>he("button",{key:r.id,class:un(["theme-btn",{active:n.currentTheme===r.id}]),title:r.label,onClick:s=>t.$emit("set-theme",r.id)},[he("span",{class:"theme-dot",style:ai({background:r.color})},null,4)],10,Kp)),64))]),i[3]||(i[3]=he("span",{class:"version-badge"},"v1.0",-1))])]))}},Zp=Qr(jp,[["__scopeId","data-v-14d3a547"]]),Fs=[{id:"light",name:"光效",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',plugins:[{id:"lens-flare",name:"LensFlare",nameZh:"镜头光晕",status:"coming"},{id:"light-leak",name:"LightLeak",nameZh:"漏光效果",status:"coming"},{id:"glow-bloom",name:"GlowBloom",nameZh:"辉光绽放",status:"coming"},{id:"neon-glow",name:"NeonGlow",nameZh:"霓虹发光",status:"coming"}]},{id:"distortion",name:"画面扭曲",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8"/><path d="M3 12c0 2.2 3.6 4 8 4s8-1.8 8-4"/><path d="M3 12c0-2.2 3.6-4 8-4s8 1.8 8 4"/></svg>',plugins:[{id:"wave-blur",name:"WaveBlurring",nameZh:"波形模糊",status:"active"},{id:"ripple",name:"RippleWarp",nameZh:"涟漪扭曲",status:"coming"},{id:"liquid",name:"LiquidMorph",nameZh:"液态变形",status:"coming"},{id:"glitch",name:"GlitchWarp",nameZh:"故障扭曲",status:"coming"}]},{id:"blur-mosaic",name:"模糊/马赛克",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="4" height="4"/><rect x="10" y="3" width="4" height="4"/><rect x="17" y="3" width="4" height="4"/><rect x="3" y="10" width="4" height="4"/><rect x="10" y="10" width="4" height="4"/><rect x="17" y="10" width="4" height="4"/><rect x="3" y="17" width="4" height="4"/><rect x="10" y="17" width="4" height="4"/><rect x="17" y="17" width="4" height="4"/></svg>',plugins:[{id:"directional-blur",name:"Directional Blur",nameZh:"定向模糊",status:"active"},{id:"radial-blur",name:"Radial Blur",nameZh:"径向模糊",status:"active"},{id:"basic-mosaic",name:"Basic Mosaic",nameZh:"基础马赛克",status:"active"},{id:"blur-mosaic-fx",name:"Blur Mosaic",nameZh:"模糊马赛克",status:"active"},{id:"brick-mosaic",name:"Brick Mosaic",nameZh:"砖块马赛克",status:"active"},{id:"colorful-mosaic-1",name:"Colorful MosaicI",nameZh:"彩色马赛克 I",status:"active"},{id:"colorful-mosaic-2",name:"Colorful MosaicII",nameZh:"彩色马赛克 II",status:"active"},{id:"colorful-mosaic-3",name:"Colorful MosaicIII",nameZh:"彩色马赛克 III",status:"active"},{id:"glass-mosaic-1",name:"Glass MosaicI",nameZh:"玻璃马赛克 I",status:"active"},{id:"glass-mosaic-2",name:"Glass MosaicII",nameZh:"玻璃马赛克 II",status:"active"},{id:"hexagon-mosaic",name:"Hexagon Mosaic",nameZh:"六边形马赛克",status:"active"},{id:"star-mosaic",name:"Star Mosaic",nameZh:"星形马赛克",status:"active"}]},{id:"text",name:"文本",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>',plugins:[{id:"text-glitch",name:"TextGlitch",nameZh:"文字故障",status:"coming"},{id:"text-reveal",name:"TextReveal",nameZh:"文字揭示",status:"coming"},{id:"kinetic-type",name:"KineticType",nameZh:"动态字体",status:"coming"},{id:"neon-text",name:"NeonText",nameZh:"霓虹文字",status:"coming"}]},{id:"filter",name:"滤镜",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M8 12a4 4 0 0 1 8 0"/><line x1="12" y1="3" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="21"/><line x1="3" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="21" y2="12"/></svg>',plugins:[{id:"engrave",name:"Engrave",nameZh:"雕刻",status:"active"},{id:"newsprint",name:"Newsprint",nameZh:"报纸印刷",status:"active"},{id:"cartoon",name:"Cartoon",nameZh:"卡通",status:"active"},{id:"film-soft-light",name:"FilmSoftLight",nameZh:"胶片柔光",status:"active"},{id:"comic",name:"Comic",nameZh:"漫画",status:"active"}]},{id:"stylize",name:"风格化",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/><circle cx="12" cy="12" r="3"/></svg>',plugins:[{id:"oil-paint",name:"OilPaint",nameZh:"油画效果",status:"coming"},{id:"sketch",name:"Sketch",nameZh:"素描效果",status:"coming"},{id:"halftone",name:"Halftone",nameZh:"半调效果",status:"coming"},{id:"watercolor",name:"Watercolor",nameZh:"水彩效果",status:"coming"},{id:"glitch-art",name:"GlitchArt",nameZh:"故障艺术",status:"coming"}]},{id:"generate",name:"生成",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',plugins:[{id:"particle-gen",name:"ParticleGen",nameZh:"粒子生成",status:"coming"},{id:"noise-field",name:"NoiseField",nameZh:"噪声场",status:"coming"},{id:"fractal",name:"FractalGen",nameZh:"分形生成",status:"coming"},{id:"grid-gen",name:"GridGen",nameZh:"网格生成",status:"coming"}]}],Jp={class:"sidebar"},Qp={class:"category-list"},em=["onClick"],tm=["innerHTML"],nm={class:"category-name"},im={class:"plugin-list"},rm=["onClick"],sm={class:"plugin-info"},am={class:"plugin-name"},om={class:"plugin-name-zh"},lm={key:0,class:"plugin-tag"},cm={key:1,class:"plugin-tag active-tag"},um={class:"sidebar-footer"},fm={class:"footer-text"},hm={class:"footer-count"},dm={class:"footer-available"},pm={__name:"Sidebar",emits:["select-plugin"],setup(n,{emit:e}){const t=e,i=ft("distortion"),r=ft("wave-blur"),s=Wn(()=>Fs.reduce((u,c)=>u+c.plugins.length,0)),o=Wn(()=>Fs.reduce((u,c)=>u+c.plugins.filter(f=>f.status==="active").length,0));function a(u){i.value=i.value===u?null:u}function l(u){u.status!=="coming"&&(r.value=u.id,t("select-plugin",u))}return(u,c)=>(ht(),yt("aside",Jp,[he("div",Qp,[(ht(!0),yt(Pt,null,Xr(Ou(Fs),f=>(ht(),yt("div",{key:f.id,class:un(["category-item",{expanded:i.value===f.id}])},[he("div",{class:un(["category-header",{active:i.value===f.id}]),onClick:h=>a(f.id)},[he("div",{class:"category-icon",innerHTML:f.icon},null,8,tm),he("span",nm,Et(f.name),1),c[0]||(c[0]=he("div",{class:"category-arrow"},[he("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[he("polyline",{points:"6 9 12 15 18 9"})])],-1))],10,em),vt(gp,{name:"slide"},{default:Wu(()=>[sd(he("div",im,[(ht(!0),yt(Pt,null,Xr(f.plugins,h=>(ht(),yt("div",{key:h.id,class:un(["plugin-item",{selected:r.value===h.id,coming:h.status==="coming"}]),onClick:m=>l(h)},[c[1]||(c[1]=he("div",{class:"plugin-dot"},null,-1)),he("div",sm,[he("span",am,Et(h.name),1),he("span",om,Et(h.nameZh),1)]),h.status==="coming"?(ht(),yt("span",lm,"即将")):(ht(),yt("span",cm,"可用"))],10,rm))),128))],512),[[Ep,i.value===f.id]])]),_:2},1024)],2))),128))]),he("div",um,[he("div",fm,[he("span",hm,Et(s.value)+" 个插件",1),c[2]||(c[2]=he("span",{class:"footer-divider"},"·",-1)),he("span",dm,Et(o.value)+" 已上线",1)])])]))}},mm=Qr(pm,[["__scopeId","data-v-3c9974e1"]]),gm={class:"param-panel"},_m={class:"plugin-header"},vm={class:"plugin-title-row"},xm={class:"plugin-title"},Mm={class:"plugin-title-zh"},Sm={class:"params-scroll"},Em={class:"param-header"},ym={class:"param-label"},Tm={class:"param-value-wrap"},bm={class:"param-value"},Am={class:"param-desc"},wm={class:"slider-wrap"},Cm={class:"slider-min"},Rm=["min","max","step","value","onInput"],Pm={class:"slider-max"},Lm={class:"panel-actions"},Im={class:"btn-upload"},Dm={__name:"ParamPanel",props:{plugin:{type:Object,required:!0},params:{type:Array,required:!0},modelValue:{type:Object,required:!0},compareMode:{type:Boolean,default:!1}},emits:["update:modelValue","reset","upload","toggle-compare"],setup(n,{emit:e}){const t=n,i=e;function r(o,a){i("update:modelValue",{...t.modelValue,[o]:parseFloat(a)})}function s(o){return typeof o=="number"?o.toFixed(1):o}return(o,a)=>(ht(),yt("div",gm,[he("div",_m,[he("div",vm,[he("div",null,[he("h2",xm,Et(n.plugin.name),1),he("p",Mm,Et(n.plugin.nameZh),1)]),he("button",{class:"btn-icon",onClick:a[0]||(a[0]=l=>o.$emit("reset")),title:"重置参数"},[...a[3]||(a[3]=[he("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[he("polyline",{points:"1 4 1 10 7 10"}),he("path",{d:"M3.51 15a9 9 0 1 0 .49-4.64"})],-1)])])])]),he("div",Sm,[(ht(!0),yt(Pt,null,Xr(n.params,l=>(ht(),yt("div",{class:"param-group",key:l.key},[he("div",Em,[he("span",ym,Et(l.label),1),he("div",Tm,[he("span",bm,Et(s(n.modelValue[l.key])),1)])]),he("p",Am,Et(l.desc),1),he("div",wm,[he("span",Cm,Et(l.min),1),he("input",{type:"range",min:l.min,max:l.max,step:l.step||.1,value:n.modelValue[l.key],onInput:u=>r(l.key,u.target.value)},null,40,Rm),he("span",Pm,Et(l.max),1)])]))),128))]),he("div",Lm,[he("label",Im,[he("input",{type:"file",accept:"image/*",onChange:a[1]||(a[1]=l=>o.$emit("upload",l)),hidden:""},null,32),a[4]||(a[4]=he("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[he("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),he("polyline",{points:"17 8 12 3 7 8"}),he("line",{x1:"12",y1:"3",x2:"12",y2:"15"})],-1)),a[5]||(a[5]=Eo(" 上传图片 ",-1))]),he("button",{class:un(["btn-compare",{active:n.compareMode}]),onClick:a[2]||(a[2]=l=>o.$emit("toggle-compare"))},[a[6]||(a[6]=he("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[he("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),he("line",{x1:"12",y1:"3",x2:"12",y2:"21"})],-1)),Eo(" "+Et(n.compareMode?"关闭对比":"前后对比"),1)],2)])]))}},Um=Qr(Dm,[["__scopeId","data-v-78100527"]]),Nm={class:"preview-area"},Fm={class:"preview-toolbar"},Om={class:"toolbar-left"},Bm={class:"breadcrumb"},zm={class:"breadcrumb-cat"},Hm={class:"breadcrumb-plugin"},Gm={class:"toolbar-right"},Vm={class:"view-toggle"},km=["onClick","title"],Wm=["innerHTML"],Xm={class:"zoom-control"},qm={class:"zoom-val"},$m={class:"center-wrap"},Ym={__name:"PreviewArea",props:{compareMode:{type:Boolean,default:!1},hasImage:{type:Boolean,default:!1},currentCategory:{type:String,default:""},currentPlugin:{type:String,default:""},imageWidth:{type:Number,default:0},imageHeight:{type:Number,default:0}},emits:["upload"],setup(n,{expose:e,emit:t}){const i=n,r=t,s=ft(null),o=ft(null),a=ft(null),l=ft(null),u=ft(null),c=ft(null),f=ft("fit"),h=ft(100),m=ft(50);let v=!1;const M=[{id:"fit",label:"适应窗口",icon:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>'},{id:"actual",label:"实际大小",icon:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>'}],p=Wn(()=>i.imageWidth||900),d=Wn(()=>i.imageHeight||600),T=Wn(()=>{if(f.value==="fit")return{width:p.value+"px",height:d.value+"px",maxWidth:"100%",maxHeight:"100%"};const R=Math.round(p.value*h.value/100),I=Math.round(d.value*h.value/100);return{width:R+"px",height:I+"px"}});e({effectCanvas:s,originalCanvas:o,effectCanvasCmp:a});function _(){var R;(R=l.value)==null||R.click()}function y(R){r("upload",R)}function L(R){var w,G;R.preventDefault();const I=(G=(w=R.dataTransfer)==null?void 0:w.files)==null?void 0:G[0];I&&r("upload",{target:{files:[I]}})}function P(R){h.value=Math.min(400,Math.max(10,h.value+R))}function C(R){R.preventDefault(),v=!0,document.addEventListener("mousemove",q),document.addEventListener("touchmove",S,{passive:!1}),document.addEventListener("mouseup",O),document.addEventListener("touchend",O)}function O(){v=!1,document.removeEventListener("mousemove",q),document.removeEventListener("touchmove",S),document.removeEventListener("mouseup",O),document.removeEventListener("touchend",O)}function q(R){v&&A(R.clientX)}function S(R){v&&(R.preventDefault(),A(R.touches[0].clientX))}function A(R){const I=u.value;if(!I)return;const w=I.getBoundingClientRect(),G=(R-w.left)/w.width*100;m.value=Math.min(95,Math.max(5,100-G))}return(R,I)=>(ht(),yt("div",Nm,[he("div",Fm,[he("div",Om,[he("span",Bm,[he("span",zm,Et(n.currentCategory),1),I[3]||(I[3]=he("span",{class:"breadcrumb-sep"},"/",-1)),he("span",Hm,Et(n.currentPlugin),1)])]),he("div",Gm,[he("div",Vm,[(ht(),yt(Pt,null,Xr(M,w=>he("button",{key:w.id,class:un({active:f.value===w.id}),onClick:G=>f.value=w.id,title:w.label},[he("span",{innerHTML:w.icon},null,8,Wm)],10,km)),64))]),he("div",Xm,[he("button",{onClick:I[0]||(I[0]=w=>P(-25))},[...I[4]||(I[4]=[he("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[he("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])]),he("span",qm,Et(h.value)+"%",1),he("button",{onClick:I[1]||(I[1]=w=>P(25))},[...I[5]||(I[5]=[he("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[he("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),he("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])])])]),he("div",{class:"canvas-area",ref_key:"canvasArea",ref:c},[n.hasImage?Xs("",!0):(ht(),yt("div",{key:0,class:"upload-placeholder",onClick:_,onDragover:I[2]||(I[2]=La(()=>{},["prevent"])),onDrop:L},[...I[6]||(I[6]=[yo('<div class="upload-box" data-v-89ac04ab><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" data-v-89ac04ab><rect x="3" y="3" width="18" height="18" rx="2" data-v-89ac04ab></rect><circle cx="8.5" cy="8.5" r="1.5" data-v-89ac04ab></circle><polyline points="21 15 16 10 5 21" data-v-89ac04ab></polyline></svg><p class="upload-text" data-v-89ac04ab>点击或拖拽图片到此处</p><p class="upload-sub" data-v-89ac04ab>支持 JPG、PNG、WebP</p></div>',1)])],32)),he("div",{class:un(["scroll-wrap",{scrollable:f.value==="actual",hidden:!n.hasImage}])},[he("div",$m,[he("div",{class:"canvas-wrap",style:ai(T.value),ref_key:"canvasWrapRef",ref:u},[he("canvas",{ref_key:"effectCanvas",ref:s,class:"abs-fill",style:ai({opacity:n.compareMode?0:1})},null,4),n.compareMode?(ht(),yt(Pt,{key:0},[he("canvas",{ref_key:"originalCanvas",ref:o,class:"abs-fill"},null,512),he("div",{class:"cmp-clip",style:ai({width:100-m.value+"%"})},[he("canvas",{ref_key:"effectCanvasCmp",ref:a,class:"abs-fill"},null,512)],4),he("div",{class:"cmp-handle",style:ai({left:100-m.value+"%"}),onMousedown:La(C,["stop"]),onTouchstart:La(C,["stop","prevent"])},[...I[7]||(I[7]=[yo('<div class="handle-line" data-v-89ac04ab></div><div class="handle-knob" data-v-89ac04ab><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-v-89ac04ab><polyline points="15 18 9 12 15 6" data-v-89ac04ab></polyline><polyline points="9 18 3 12 9 6" transform="translate(6,0)" data-v-89ac04ab></polyline></svg></div>',2)])],36),I[8]||(I[8]=he("div",{class:"cmp-label cmp-label-l"},"原图",-1)),I[9]||(I[9]=he("div",{class:"cmp-label cmp-label-r"},"效果",-1))],64)):Xs("",!0)],4)])],2)],512),he("input",{ref_key:"fileInput",ref:l,type:"file",accept:"image/*",onChange:y,style:{display:"none"}},null,544)]))}},Km=Qr(Ym,[["__scopeId","data-v-89ac04ab"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qo="162",jm=0,Xl=1,Zm=2,Pf=1,Jm=2,Fn=3,hi=0,Wt=1,Gn=2,li=0,fr=1,ql=2,$l=3,Yl=4,Qm=5,Pi=100,eg=101,tg=102,Kl=103,jl=104,ng=200,ig=201,rg=202,sg=203,Ao=204,wo=205,ag=206,og=207,lg=208,cg=209,ug=210,fg=211,hg=212,dg=213,pg=214,mg=0,gg=1,_g=2,Ys=3,vg=4,xg=5,Mg=6,Sg=7,Lf=0,Eg=1,yg=2,ci=0,Tg=1,bg=2,Ag=3,wg=4,Cg=5,Rg=6,Pg=7,If=300,pr=301,mr=302,Co=303,Ro=304,fa=306,Po=1e3,on=1001,Lo=1002,Nt=1003,Zl=1004,br=1005,Vt=1006,Ia=1007,Ii=1008,ui=1009,Lg=1010,Ig=1011,el=1012,Df=1013,oi=1014,Vn=1015,Kr=1016,Uf=1017,Nf=1018,Ni=1020,Dg=1021,ln=1023,Ug=1024,Ng=1025,Fi=1026,gr=1027,Fg=1028,Ff=1029,Og=1030,Of=1031,Bf=1033,Da=33776,Ua=33777,Na=33778,Fa=33779,Jl=35840,Ql=35841,ec=35842,tc=35843,zf=36196,nc=37492,ic=37496,rc=37808,sc=37809,ac=37810,oc=37811,lc=37812,cc=37813,uc=37814,fc=37815,hc=37816,dc=37817,pc=37818,mc=37819,gc=37820,_c=37821,Oa=36492,vc=36494,xc=36495,Bg=36283,Mc=36284,Sc=36285,Ec=36286,zg=3200,Hg=3201,Gg=0,Vg=1,si="",vn="srgb",di="srgb-linear",tl="display-p3",ha="display-p3-linear",Ks="linear",rt="srgb",js="rec709",Zs="p3",Vi=7680,yc=519,kg=512,Wg=513,Xg=514,Hf=515,qg=516,$g=517,Yg=518,Kg=519,Tc=35044,bc="300 es",Io=1035,kn=2e3,Js=2001;class vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ba=Math.PI/180,Do=180/Math.PI;function es(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function kt(n,e,t){return Math.max(e,Math.min(t,n))}function jg(n,e){return(n%e+e)%e}function za(n,e,t){return(1-t)*n+t*e}function Ac(n){return(n&n-1)===0&&n!==0}function Uo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ar(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,r,s,o,a,l,u){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],m=i[5],v=i[8],M=r[0],p=r[3],d=r[6],T=r[1],_=r[4],y=r[7],L=r[2],P=r[5],C=r[8];return s[0]=o*M+a*T+l*L,s[3]=o*p+a*_+l*P,s[6]=o*d+a*y+l*C,s[1]=u*M+c*T+f*L,s[4]=u*p+c*_+f*P,s[7]=u*d+c*y+f*C,s[2]=h*M+m*T+v*L,s[5]=h*p+m*_+v*P,s[8]=h*d+m*y+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,m=u*s-o*l,v=t*f+i*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=f*M,e[1]=(r*u-c*i)*M,e[2]=(a*i-r*o)*M,e[3]=h*M,e[4]=(c*t-r*l)*M,e[5]=(r*s-a*t)*M,e[6]=m*M,e[7]=(i*l-u*t)*M,e[8]=(o*t-i*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ha.makeScale(e,t)),this}rotate(e){return this.premultiply(Ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ha=new Ve;function Gf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Zg(){const n=Qs("canvas");return n.style.display="block",n}const wc={};function Jg(n){n in wc||(wc[n]=!0,console.warn(n))}const Cc=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rc=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),us={[di]:{transfer:Ks,primaries:js,toReference:n=>n,fromReference:n=>n},[vn]:{transfer:rt,primaries:js,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ha]:{transfer:Ks,primaries:Zs,toReference:n=>n.applyMatrix3(Rc),fromReference:n=>n.applyMatrix3(Cc)},[tl]:{transfer:rt,primaries:Zs,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Rc),fromReference:n=>n.applyMatrix3(Cc).convertLinearToSRGB()}},Qg=new Set([di,ha]),Ze={enabled:!0,_workingColorSpace:di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Qg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=us[e].toReference,r=us[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return us[n].primaries},getTransfer:function(n){return n===si?Ks:us[n].transfer}};function hr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ga(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ki;class Vf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ki===void 0&&(ki=Qs("canvas")),ki.width=e.width,ki.height=e.height;const i=ki.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hr(t[i]/255)*255):t[i]=hr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let e_=0;class kf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=es(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Va(r[o].image)):s.push(Va(r[o]))}else s=Va(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Va(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let t_=0;class zt extends vr{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,i=on,r=on,s=Vt,o=Ii,a=ln,l=ui,u=zt.DEFAULT_ANISOTROPY,c=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=es(),this.name="",this.source=new kf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==If)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Po:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case Lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Po:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case Lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=If;zt.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],m=l[5],v=l[9],M=l[2],p=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-M)<.01&&Math.abs(v-p)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+M)<.1&&Math.abs(v+p)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,y=(m+1)/2,L=(d+1)/2,P=(c+h)/4,C=(f+M)/4,O=(v+p)/4;return _>y&&_>L?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=P/i,s=C/i):y>L?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=P/r,s=O/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=C/s,r=O/s),this.set(i,r,s,t),this}let T=Math.sqrt((p-v)*(p-v)+(f-M)*(f-M)+(h-c)*(h-c));return Math.abs(T)<.001&&(T=1),this.x=(p-v)/T,this.y=(f-M)/T,this.z=(h-c)/T,this.w=Math.acos((u+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class n_ extends vr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends n_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Wf extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class i_ extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ts{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],v=s[o+2],M=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=v,e[t+3]=M;return}if(f!==M||l!==h||u!==m||c!==v){let p=1-a;const d=l*h+u*m+c*v+f*M,T=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const L=Math.sqrt(_),P=Math.atan2(L,d*T);p=Math.sin(p*P)/L,a=Math.sin(a*P)/L}const y=a*T;if(l=l*p+h*y,u=u*p+m*y,c=c*p+v*y,f=f*p+M*y,p===1-a){const L=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=L,u*=L,c*=L,f*=L}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],m=s[o+2],v=s[o+3];return e[t]=a*v+c*f+l*m-u*h,e[t+1]=l*v+c*h+u*f-a*m,e[t+2]=u*v+c*m+a*h-l*f,e[t+3]=c*v-a*f-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*m*v,this._y=u*m*f-h*c*v,this._z=u*c*v+h*m*f,this._w=u*c*f-h*m*v;break;case"YXZ":this._x=h*c*f+u*m*v,this._y=u*m*f-h*c*v,this._z=u*c*v-h*m*f,this._w=u*c*f+h*m*v;break;case"ZXY":this._x=h*c*f-u*m*v,this._y=u*m*f+h*c*v,this._z=u*c*v+h*m*f,this._w=u*c*f-h*m*v;break;case"ZYX":this._x=h*c*f-u*m*v,this._y=u*m*f+h*c*v,this._z=u*c*v-h*m*f,this._w=u*c*f+h*m*v;break;case"YZX":this._x=h*c*f+u*m*v,this._y=u*m*f+h*c*v,this._z=u*c*v-h*m*f,this._w=u*c*f-h*m*v;break;case"XZY":this._x=h*c*f-u*m*v,this._y=u*m*f-h*c*v,this._z=u*c*v+h*m*f,this._w=u*c*f+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(c-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,i=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ka.copy(this).projectOnVector(e),this.sub(ka)}reflect(e){return this.sub(ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ka=new K,Pc=new ts;class ns{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,nn):nn.fromBufferAttribute(s,o),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fs.copy(i.boundingBox)),fs.applyMatrix4(e.matrixWorld),this.union(fs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),hs.subVectors(this.max,wr),Wi.subVectors(e.a,wr),Xi.subVectors(e.b,wr),qi.subVectors(e.c,wr),Jn.subVectors(Xi,Wi),Qn.subVectors(qi,Xi),Mi.subVectors(Wi,qi);let t=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-Mi.z,Mi.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,Mi.z,0,-Mi.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-Mi.y,Mi.x,0];return!Wa(t,Wi,Xi,qi,hs)||(t=[1,0,0,0,1,0,0,0,1],!Wa(t,Wi,Xi,qi,hs))?!1:(ds.crossVectors(Jn,Qn),t=[ds.x,ds.y,ds.z],Wa(t,Wi,Xi,qi,hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ln=[new K,new K,new K,new K,new K,new K,new K,new K],nn=new K,fs=new ns,Wi=new K,Xi=new K,qi=new K,Jn=new K,Qn=new K,Mi=new K,wr=new K,hs=new K,ds=new K,Si=new K;function Wa(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Si.fromArray(n,s);const a=r.x*Math.abs(Si.x)+r.y*Math.abs(Si.y)+r.z*Math.abs(Si.z),l=e.dot(Si),u=t.dot(Si),c=i.dot(Si);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const r_=new ns,Cr=new K,Xa=new K;class nl{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):r_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);const t=Cr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Cr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(Xa)),this.expandByPoint(Cr.copy(e.center).sub(Xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new K,qa=new K,ps=new K,ei=new K,$a=new K,ms=new K,Ya=new K;class s_{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){qa.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(qa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ps),a=ei.dot(this.direction),l=-ei.dot(ps),u=ei.lengthSq(),c=Math.abs(1-o*o);let f,h,m,v;if(c>0)if(f=o*l-a,h=o*a-l,v=s*c,f>=0)if(h>=-v)if(h<=v){const M=1/c;f*=M,h*=M,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+u):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(qa).addScaledVector(ps,h),m}intersectSphere(e,t){In.subVectors(e.center,this.origin);const i=In.dot(this.direction),r=In.dot(In)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,i,r,s){$a.subVectors(t,e),ms.subVectors(i,e),Ya.crossVectors($a,ms);let o=this.direction.dot(Ya),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,e);const l=a*this.direction.dot(ms.crossVectors(ei,ms));if(l<0)return null;const u=a*this.direction.dot($a.cross(ei));if(u<0||l+u>o)return null;const c=-a*ei.dot(Ya);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,i,r,s,o,a,l,u,c,f,h,m,v,M,p){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,h,m,v,M,p)}set(e,t,i,r,s,o,a,l,u,c,f,h,m,v,M,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=m,d[7]=v,d[11]=M,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/$i.setFromMatrixColumn(e,0).length(),s=1/$i.setFromMatrixColumn(e,1).length(),o=1/$i.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,m=o*f,v=a*c,M=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=m+v*u,t[5]=h-M*u,t[9]=-a*l,t[2]=M-h*u,t[6]=v+m*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,m=l*f,v=u*c,M=u*f;t[0]=h+M*a,t[4]=v*a-m,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=m*a-v,t[6]=M+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,m=l*f,v=u*c,M=u*f;t[0]=h-M*a,t[4]=-o*f,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*c,t[9]=M-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,m=o*f,v=a*c,M=a*f;t[0]=l*c,t[4]=v*u-m,t[8]=h*u+M,t[1]=l*f,t[5]=M*u+h,t[9]=m*u-v,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*u,v=a*l,M=a*u;t[0]=l*c,t[4]=M-h*f,t[8]=v*f+m,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=m*f+v,t[10]=h-M*f}else if(e.order==="XZY"){const h=o*l,m=o*u,v=a*l,M=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+M,t[5]=o*c,t[9]=m*f-v,t[2]=v*f-m,t[6]=a*c,t[10]=M*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(a_,e,o_)}lookAt(e,t,i){const r=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),ti.crossVectors(i,qt),ti.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),ti.crossVectors(i,qt)),ti.normalize(),gs.crossVectors(qt,ti),r[0]=ti.x,r[4]=gs.x,r[8]=qt.x,r[1]=ti.y,r[5]=gs.y,r[9]=qt.y,r[2]=ti.z,r[6]=gs.z,r[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],m=i[13],v=i[2],M=i[6],p=i[10],d=i[14],T=i[3],_=i[7],y=i[11],L=i[15],P=r[0],C=r[4],O=r[8],q=r[12],S=r[1],A=r[5],R=r[9],I=r[13],w=r[2],G=r[6],B=r[10],X=r[14],V=r[3],ne=r[7],ie=r[11],ue=r[15];return s[0]=o*P+a*S+l*w+u*V,s[4]=o*C+a*A+l*G+u*ne,s[8]=o*O+a*R+l*B+u*ie,s[12]=o*q+a*I+l*X+u*ue,s[1]=c*P+f*S+h*w+m*V,s[5]=c*C+f*A+h*G+m*ne,s[9]=c*O+f*R+h*B+m*ie,s[13]=c*q+f*I+h*X+m*ue,s[2]=v*P+M*S+p*w+d*V,s[6]=v*C+M*A+p*G+d*ne,s[10]=v*O+M*R+p*B+d*ie,s[14]=v*q+M*I+p*X+d*ue,s[3]=T*P+_*S+y*w+L*V,s[7]=T*C+_*A+y*G+L*ne,s[11]=T*O+_*R+y*B+L*ie,s[15]=T*q+_*I+y*X+L*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],m=e[14],v=e[3],M=e[7],p=e[11],d=e[15];return v*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*m-i*l*m)+M*(+t*l*m-t*u*h+s*o*h-r*o*m+r*u*c-s*l*c)+p*(+t*u*f-t*a*m-s*o*f+i*o*m+s*a*c-i*u*c)+d*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],m=e[11],v=e[12],M=e[13],p=e[14],d=e[15],T=f*p*u-M*h*u+M*l*m-a*p*m-f*l*d+a*h*d,_=v*h*u-c*p*u-v*l*m+o*p*m+c*l*d-o*h*d,y=c*M*u-v*f*u+v*a*m-o*M*m-c*a*d+o*f*d,L=v*f*l-c*M*l-v*a*h+o*M*h+c*a*p-o*f*p,P=t*T+i*_+r*y+s*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=T*C,e[1]=(M*h*s-f*p*s-M*r*m+i*p*m+f*r*d-i*h*d)*C,e[2]=(a*p*s-M*l*s+M*r*u-i*p*u-a*r*d+i*l*d)*C,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*m-i*l*m)*C,e[4]=_*C,e[5]=(c*p*s-v*h*s+v*r*m-t*p*m-c*r*d+t*h*d)*C,e[6]=(v*l*s-o*p*s-v*r*u+t*p*u+o*r*d-t*l*d)*C,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*m+t*l*m)*C,e[8]=y*C,e[9]=(v*f*s-c*M*s-v*i*m+t*M*m+c*i*d-t*f*d)*C,e[10]=(o*M*s-v*a*s+v*i*u-t*M*u-o*i*d+t*a*d)*C,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*m-t*a*m)*C,e[12]=L*C,e[13]=(c*M*r-v*f*r+v*i*h-t*M*h-c*i*p+t*f*p)*C,e[14]=(v*a*r-o*M*r-v*i*l+t*M*l+o*i*p-t*a*p)*C,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,m=s*c,v=s*f,M=o*c,p=o*f,d=a*f,T=l*u,_=l*c,y=l*f,L=i.x,P=i.y,C=i.z;return r[0]=(1-(M+d))*L,r[1]=(m+y)*L,r[2]=(v-_)*L,r[3]=0,r[4]=(m-y)*P,r[5]=(1-(h+d))*P,r[6]=(p+T)*P,r[7]=0,r[8]=(v+_)*C,r[9]=(p-T)*C,r[10]=(1-(h+M))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=$i.set(r[0],r[1],r[2]).length();const o=$i.set(r[4],r[5],r[6]).length(),a=$i.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],rn.copy(this);const u=1/s,c=1/o,f=1/a;return rn.elements[0]*=u,rn.elements[1]*=u,rn.elements[2]*=u,rn.elements[4]*=c,rn.elements[5]*=c,rn.elements[6]*=c,rn.elements[8]*=f,rn.elements[9]*=f,rn.elements[10]*=f,t.setFromRotationMatrix(rn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=kn){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let m,v;if(a===kn)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Js)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=kn){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),h=(t+e)*u,m=(i+r)*c;let v,M;if(a===kn)v=(o+s)*f,M=-2*f;else if(a===Js)v=s*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const $i=new K,rn=new dt,a_=new K(0,0,0),o_=new K(1,1,1),ti=new K,gs=new K,qt=new K,Lc=new dt,Ic=new ts;class Yn{constructor(e=0,t=0,i=0,r=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Lc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ic.setFromEuler(this),this.setFromQuaternion(Ic,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class Xf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let l_=0;const Dc=new K,Yi=new ts,Dn=new dt,_s=new K,Rr=new K,c_=new K,u_=new ts,Uc=new K(1,0,0),Nc=new K(0,1,0),Fc=new K(0,0,1),f_={type:"added"},h_={type:"removed"},Ka={type:"childadded",child:null},ja={type:"childremoved",child:null};class Kt extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new K,t=new Yn,i=new ts,r=new K(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ve}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(Uc,e)}rotateY(e){return this.rotateOnAxis(Nc,e)}rotateZ(e){return this.rotateOnAxis(Fc,e)}translateOnAxis(e,t){return Dc.copy(e).applyQuaternion(this.quaternion),this.position.add(Dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uc,e)}translateY(e){return this.translateOnAxis(Nc,e)}translateZ(e){return this.translateOnAxis(Fc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_s.copy(e):_s.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Rr,_s,this.up):Dn.lookAt(_s,Rr,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),Yi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(f_),Ka.child=e,this.dispatchEvent(Ka),Ka.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(h_),ja.child=e,this.dispatchEvent(ja),ja.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,c_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,u_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Kt.DEFAULT_UP=new K(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new K,Un=new K,Za=new K,Nn=new K,Ki=new K,ji=new K,Oc=new K,Ja=new K,Qa=new K,eo=new K;class yn{constructor(e=new K,t=new K,i=new K){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),sn.subVectors(e,t),r.cross(sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){sn.subVectors(r,t),Un.subVectors(i,t),Za.subVectors(e,t);const o=sn.dot(sn),a=sn.dot(Un),l=sn.dot(Za),u=Un.dot(Un),c=Un.dot(Za),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(u*l-a*c)*h,v=(o*c-a*l)*h;return s.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static isFrontFacing(e,t,i,r){return sn.subVectors(i,t),Un.subVectors(e,t),sn.cross(Un).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),sn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return yn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ki.subVectors(r,i),ji.subVectors(s,i),Ja.subVectors(e,i);const l=Ki.dot(Ja),u=ji.dot(Ja);if(l<=0&&u<=0)return t.copy(i);Qa.subVectors(e,r);const c=Ki.dot(Qa),f=ji.dot(Qa);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Ki,o);eo.subVectors(e,s);const m=Ki.dot(eo),v=ji.dot(eo);if(v>=0&&m<=v)return t.copy(s);const M=m*u-l*v;if(M<=0&&u>=0&&v<=0)return a=u/(u-v),t.copy(i).addScaledVector(ji,a);const p=c*v-m*f;if(p<=0&&f-c>=0&&m-v>=0)return Oc.subVectors(s,r),a=(f-c)/(f-c+(m-v)),t.copy(r).addScaledVector(Oc,a);const d=1/(p+M+h);return o=M*d,a=h*d,t.copy(i).addScaledVector(Ki,o).addScaledVector(ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},vs={h:0,s:0,l:0};function to(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=jg(e,1),t=kt(t,0,1),i=kt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=to(o,s,e+1/3),this.g=to(o,s,e),this.b=to(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=vn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){const i=qf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}copyLinearToSRGB(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return Ze.fromWorkingColorSpace(Ct.copy(this),e),Math.round(kt(Ct.r*255,0,255))*65536+Math.round(kt(Ct.g*255,0,255))*256+Math.round(kt(Ct.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Ct.copy(this),t);const i=Ct.r,r=Ct.g,s=Ct.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=vn){Ze.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,r=Ct.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(vs);const i=za(ni.h,vs.h,t),r=za(ni.s,vs.s,t),s=za(ni.l,vs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Je;Je.NAMES=qf;let d_=0;class da extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=es(),this.name="",this.type="Material",this.blending=fr,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ao,this.blendDst=wo,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(i.blending=this.blending),this.side!==hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ao&&(i.blendSrc=this.blendSrc),this.blendDst!==wo&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $f extends da{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Lf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new K,xs=new $e;class An{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Tc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Jg("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ar(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ar(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ar(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ar(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ar(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tc&&(e.usage=this.usage),e}}class Yf extends An{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Kf extends An{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Oi extends An{constructor(e,t,i){super(new Float32Array(e),t,i)}}let p_=0;const Qt=new dt,no=new Kt,Zi=new K,$t=new ns,Pr=new ns,_t=new K;class Hi extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gf(e)?Kf:Yf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,i){return Qt.makeTranslation(e,t,i),this.applyMatrix4(Qt),this}scale(e,t,i){return Qt.makeScale(e,t,i),this.applyMatrix4(Qt),this}lookAt(e){return no.lookAt(e),no.updateMatrix(),this.applyMatrix4(no.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Oi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Pr.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors($t.min,Pr.min),$t.expandByPoint(_t),_t.addVectors($t.max,Pr.max),$t.expandByPoint(_t)):($t.expandByPoint(Pr.min),$t.expandByPoint(Pr.max))}$t.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_t));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)_t.fromBufferAttribute(a,u),l&&(Zi.fromBufferAttribute(e,u),_t.add(Zi)),r=Math.max(r,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new K,l[O]=new K;const u=new K,c=new K,f=new K,h=new $e,m=new $e,v=new $e,M=new K,p=new K;function d(O,q,S){u.fromBufferAttribute(i,O),c.fromBufferAttribute(i,q),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,O),m.fromBufferAttribute(s,q),v.fromBufferAttribute(s,S),c.sub(u),f.sub(u),m.sub(h),v.sub(h);const A=1/(m.x*v.y-v.x*m.y);isFinite(A)&&(M.copy(c).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(A),p.copy(f).multiplyScalar(m.x).addScaledVector(c,-v.x).multiplyScalar(A),a[O].add(M),a[q].add(M),a[S].add(M),l[O].add(p),l[q].add(p),l[S].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let O=0,q=T.length;O<q;++O){const S=T[O],A=S.start,R=S.count;for(let I=A,w=A+R;I<w;I+=3)d(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const _=new K,y=new K,L=new K,P=new K;function C(O){L.fromBufferAttribute(r,O),P.copy(L);const q=a[O];_.copy(q),_.sub(L.multiplyScalar(L.dot(q))).normalize(),y.crossVectors(P,q);const A=y.dot(l[O])<0?-1:1;o.setXYZW(O,_.x,_.y,_.z,A)}for(let O=0,q=T.length;O<q;++O){const S=T[O],A=S.start,R=S.count;for(let I=A,w=A+R;I<w;I+=3)C(e.getX(I+0)),C(e.getX(I+1)),C(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new K,s=new K,o=new K,a=new K,l=new K,u=new K,c=new K,f=new K;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),M=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,M),o.fromBufferAttribute(t,p),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let m=0,v=0;for(let M=0,p=l.length;M<p;M++){a.isInterleavedBufferAttribute?m=l[M]*a.data.stride+a.offset:m=l[M]*c;for(let d=0;d<c;d++)h[v++]=u[m++]}return new An(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const m=u[f];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,m=f.length;h<m;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bc=new dt,Ei=new s_,Ms=new nl,zc=new K,Ji=new K,Qi=new K,er=new K,io=new K,Ss=new K,Es=new $e,ys=new $e,Ts=new $e,Hc=new K,Gc=new K,Vc=new K,bs=new K,As=new K;class Tn extends Kt{constructor(e=new Hi,t=new $f){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ss.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(io.fromBufferAttribute(f,e),o?Ss.addScaledVector(io,c):Ss.addScaledVector(io.sub(t),c))}t.add(Ss)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ms.copy(i.boundingSphere),Ms.applyMatrix4(s),Ei.copy(e.ray).recast(e.near),!(Ms.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Ms,zc)===null||Ei.origin.distanceToSquared(zc)>(e.far-e.near)**2))&&(Bc.copy(s).invert(),Ei.copy(e.ray).applyMatrix4(Bc),!(i.boundingBox!==null&&Ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,M=h.length;v<M;v++){const p=h[v],d=o[p.materialIndex],T=Math.max(p.start,m.start),_=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=T,L=_;y<L;y+=3){const P=a.getX(y),C=a.getX(y+1),O=a.getX(y+2);r=ws(this,d,e,i,u,c,f,P,C,O),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let p=v,d=M;p<d;p+=3){const T=a.getX(p),_=a.getX(p+1),y=a.getX(p+2);r=ws(this,o,e,i,u,c,f,T,_,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,M=h.length;v<M;v++){const p=h[v],d=o[p.materialIndex],T=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=T,L=_;y<L;y+=3){const P=y,C=y+1,O=y+2;r=ws(this,d,e,i,u,c,f,P,C,O),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=v,d=M;p<d;p+=3){const T=p,_=p+1,y=p+2;r=ws(this,o,e,i,u,c,f,T,_,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function m_(n,e,t,i,r,s,o,a){let l;if(e.side===Wt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===hi,a),l===null)return null;As.copy(a),As.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(As);return u<t.near||u>t.far?null:{distance:u,point:As.clone(),object:n}}function ws(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Ji),n.getVertexPosition(l,Qi),n.getVertexPosition(u,er);const c=m_(n,e,t,i,Ji,Qi,er,bs);if(c){r&&(Es.fromBufferAttribute(r,a),ys.fromBufferAttribute(r,l),Ts.fromBufferAttribute(r,u),c.uv=yn.getInterpolation(bs,Ji,Qi,er,Es,ys,Ts,new $e)),s&&(Es.fromBufferAttribute(s,a),ys.fromBufferAttribute(s,l),Ts.fromBufferAttribute(s,u),c.uv1=yn.getInterpolation(bs,Ji,Qi,er,Es,ys,Ts,new $e)),o&&(Hc.fromBufferAttribute(o,a),Gc.fromBufferAttribute(o,l),Vc.fromBufferAttribute(o,u),c.normal=yn.getInterpolation(bs,Ji,Qi,er,Hc,Gc,Vc,new K),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new K,materialIndex:0};yn.getNormal(Ji,Qi,er,f.normal),c.face=f}return c}class is extends Hi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,m=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Oi(u,3)),this.setAttribute("normal",new Oi(c,3)),this.setAttribute("uv",new Oi(f,2));function v(M,p,d,T,_,y,L,P,C,O,q){const S=y/C,A=L/O,R=y/2,I=L/2,w=P/2,G=C+1,B=O+1;let X=0,V=0;const ne=new K;for(let ie=0;ie<B;ie++){const ue=ie*A-I;for(let _e=0;_e<G;_e++){const Ue=_e*S-R;ne[M]=Ue*T,ne[p]=ue*_,ne[d]=w,u.push(ne.x,ne.y,ne.z),ne[M]=0,ne[p]=0,ne[d]=P>0?1:-1,c.push(ne.x,ne.y,ne.z),f.push(_e/C),f.push(1-ie/O),X+=1}}for(let ie=0;ie<O;ie++)for(let ue=0;ue<C;ue++){const _e=h+ue+G*ie,Ue=h+ue+G*(ie+1),ee=h+(ue+1)+G*(ie+1),ce=h+(ue+1)+G*ie;l.push(_e,Ue,ce),l.push(Ue,ee,ce),V+=6}a.addGroup(m,V,q),m+=V,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _r(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ut(n){const e={};for(let t=0;t<n.length;t++){const i=_r(n[t]);for(const r in i)e[r]=i[r]}return e}function g_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function jf(n){return n.getRenderTarget()===null?n.outputColorSpace:Ze.workingColorSpace}const __={clone:_r,merge:Ut};var v_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends da{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=v_,this.fragmentShader=x_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=g_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Zf extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new K,kc=new $e,Wc=new $e;class an extends Zf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Do*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,kc,Wc),t.subVectors(Wc,kc)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ba*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tr=-90,nr=1;class M_ extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(tr,nr,e,t);r.layers=this.layers,this.add(r);const s=new an(tr,nr,e,t);s.layers=this.layers,this.add(s);const o=new an(tr,nr,e,t);o.layers=this.layers,this.add(o);const a=new an(tr,nr,e,t);a.layers=this.layers,this.add(a);const l=new an(tr,nr,e,t);l.layers=this.layers,this.add(l);const u=new an(tr,nr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===kn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Js)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Jf extends zt{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:pr,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class S_ extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Jf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new is(5,5,5),s=new Kn({name:"CubemapFromEquirect",uniforms:_r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:li});s.uniforms.tEquirect.value=t;const o=new Tn(r,s),a=t.minFilter;return t.minFilter===Ii&&(t.minFilter=Vt),new M_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const ro=new K,E_=new K,y_=new Ve;class wi{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ro.subVectors(i,t).cross(E_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ro),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||y_.getNormalMatrix(e),r=this.coplanarPoint(ro).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new nl,Cs=new K;class Qf{constructor(e=new wi,t=new wi,i=new wi,r=new wi,s=new wi,o=new wi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=kn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],m=r[8],v=r[9],M=r[10],p=r[11],d=r[12],T=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,p-m,y-d).normalize(),i[1].setComponents(l+s,h+u,p+m,y+d).normalize(),i[2].setComponents(l+o,h+c,p+v,y+T).normalize(),i[3].setComponents(l-o,h-c,p-v,y-T).normalize(),i[4].setComponents(l-a,h-f,p-M,y-_).normalize(),t===kn)i[5].setComponents(l+a,h+f,p+M,y+_).normalize();else if(t===Js)i[5].setComponents(a,f,M,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Cs.x=r.normal.x>0?e.max.x:e.min.x,Cs.y=r.normal.y>0?e.max.y:e.min.y,Cs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function T_(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,h=u.usage,m=f.byteLength,v=n.createBuffer();n.bindBuffer(c,v),n.bufferData(c,f,h),u.onUploadCallback();let M;if(f instanceof Float32Array)M=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)M=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)M=n.SHORT;else if(f instanceof Uint32Array)M=n.UNSIGNED_INT;else if(f instanceof Int32Array)M=n.INT;else if(f instanceof Int8Array)M=n.BYTE;else if(f instanceof Uint8Array)M=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)M=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:M,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:m}}function s(u,c,f){const h=c.array,m=c._updateRange,v=c.updateRanges;if(n.bindBuffer(f,u),m.count===-1&&v.length===0&&n.bufferSubData(f,0,h),v.length!==0){for(let M=0,p=v.length;M<p;M++){const d=v[M];t?n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}c.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:o,remove:a,update:l}}class rs extends Hi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,m=[],v=[],M=[],p=[];for(let d=0;d<c;d++){const T=d*h-o;for(let _=0;_<u;_++){const y=_*f-s;v.push(y,-T,0),M.push(0,0,1),p.push(_/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<a;T++){const _=T+u*d,y=T+u*(d+1),L=T+1+u*(d+1),P=T+1+u*d;m.push(_,y,P),m.push(y,L,P)}this.setIndex(m),this.setAttribute("position",new Oi(v,3)),this.setAttribute("normal",new Oi(M,3)),this.setAttribute("uv",new Oi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.widthSegments,e.heightSegments)}}var b_=`#ifdef USE_ALPHAHASH
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
#endif`,V_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
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
} // validated`,K_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,j_=`vec3 transformedNormal = objectNormal;
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
#endif`,r0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,s0=`#ifdef USE_ENVMAP
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
#endif`,f0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,h0=`#ifdef USE_GRADIENTMAP
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
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y0=`PhysicalMaterial material;
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
#endif`,T0=`struct PhysicalMaterial {
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
}`,b0=`
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
#endif`,V0=`#ifdef USE_MORPHTARGETS
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
#endif`,k0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,K0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j0=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,rv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sv=`float roughnessFactor = roughness;
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
}`,fv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hv=`#ifdef USE_SKINNING
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
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bv=`varying vec2 vUv;
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
}`,Vv=`#define LAMBERT
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
}`,kv=`#define MATCAP
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
}`,Kv=`#define STANDARD
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
}`,jv=`#define STANDARD
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
}`,rx=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:b_,alphahash_pars_fragment:A_,alphamap_fragment:w_,alphamap_pars_fragment:C_,alphatest_fragment:R_,alphatest_pars_fragment:P_,aomap_fragment:L_,aomap_pars_fragment:I_,batching_pars_vertex:D_,batching_vertex:U_,begin_vertex:N_,beginnormal_vertex:F_,bsdfs:O_,iridescence_fragment:B_,bumpmap_pars_fragment:z_,clipping_planes_fragment:H_,clipping_planes_pars_fragment:G_,clipping_planes_pars_vertex:V_,clipping_planes_vertex:k_,color_fragment:W_,color_pars_fragment:X_,color_pars_vertex:q_,color_vertex:$_,common:Y_,cube_uv_reflection_fragment:K_,defaultnormal_vertex:j_,displacementmap_pars_vertex:Z_,displacementmap_vertex:J_,emissivemap_fragment:Q_,emissivemap_pars_fragment:e0,colorspace_fragment:t0,colorspace_pars_fragment:n0,envmap_fragment:i0,envmap_common_pars_fragment:r0,envmap_pars_fragment:s0,envmap_pars_vertex:a0,envmap_physical_pars_fragment:v0,envmap_vertex:o0,fog_vertex:l0,fog_pars_vertex:c0,fog_fragment:u0,fog_pars_fragment:f0,gradientmap_pars_fragment:h0,lightmap_fragment:d0,lightmap_pars_fragment:p0,lights_lambert_fragment:m0,lights_lambert_pars_fragment:g0,lights_pars_begin:_0,lights_toon_fragment:x0,lights_toon_pars_fragment:M0,lights_phong_fragment:S0,lights_phong_pars_fragment:E0,lights_physical_fragment:y0,lights_physical_pars_fragment:T0,lights_fragment_begin:b0,lights_fragment_maps:A0,lights_fragment_end:w0,logdepthbuf_fragment:C0,logdepthbuf_pars_fragment:R0,logdepthbuf_pars_vertex:P0,logdepthbuf_vertex:L0,map_fragment:I0,map_pars_fragment:D0,map_particle_fragment:U0,map_particle_pars_fragment:N0,metalnessmap_fragment:F0,metalnessmap_pars_fragment:O0,morphinstance_vertex:B0,morphcolor_vertex:z0,morphnormal_vertex:H0,morphtarget_pars_vertex:G0,morphtarget_vertex:V0,normal_fragment_begin:k0,normal_fragment_maps:W0,normal_pars_fragment:X0,normal_pars_vertex:q0,normal_vertex:$0,normalmap_pars_fragment:Y0,clearcoat_normal_fragment_begin:K0,clearcoat_normal_fragment_maps:j0,clearcoat_pars_fragment:Z0,iridescence_pars_fragment:J0,opaque_fragment:Q0,packing:ev,premultiplied_alpha_fragment:tv,project_vertex:nv,dithering_fragment:iv,dithering_pars_fragment:rv,roughnessmap_fragment:sv,roughnessmap_pars_fragment:av,shadowmap_pars_fragment:ov,shadowmap_pars_vertex:lv,shadowmap_vertex:cv,shadowmask_pars_fragment:uv,skinbase_vertex:fv,skinning_pars_vertex:hv,skinning_vertex:dv,skinnormal_vertex:pv,specularmap_fragment:mv,specularmap_pars_fragment:gv,tonemapping_fragment:_v,tonemapping_pars_fragment:vv,transmission_fragment:xv,transmission_pars_fragment:Mv,uv_pars_fragment:Sv,uv_pars_vertex:Ev,uv_vertex:yv,worldpos_vertex:Tv,background_vert:bv,background_frag:Av,backgroundCube_vert:wv,backgroundCube_frag:Cv,cube_vert:Rv,cube_frag:Pv,depth_vert:Lv,depth_frag:Iv,distanceRGBA_vert:Dv,distanceRGBA_frag:Uv,equirect_vert:Nv,equirect_frag:Fv,linedashed_vert:Ov,linedashed_frag:Bv,meshbasic_vert:zv,meshbasic_frag:Hv,meshlambert_vert:Gv,meshlambert_frag:Vv,meshmatcap_vert:kv,meshmatcap_frag:Wv,meshnormal_vert:Xv,meshnormal_frag:qv,meshphong_vert:$v,meshphong_frag:Yv,meshphysical_vert:Kv,meshphysical_frag:jv,meshtoon_vert:Zv,meshtoon_frag:Jv,points_vert:Qv,points_frag:ex,shadow_vert:tx,shadow_frag:nx,sprite_vert:ix,sprite_frag:rx},pe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Sn={basic:{uniforms:Ut([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ut([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ut([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ut([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ut([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ut([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ut([pe.points,pe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ut([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ut([pe.common,pe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ut([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ut([pe.sprite,pe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Ut([pe.common,pe.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Ut([pe.lights,pe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Sn.physical={uniforms:Ut([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Rs={r:0,b:0,g:0},Ti=new Yn,sx=new dt;function ax(n,e,t,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,u,c,f=null,h=0,m=null;function v(p,d){let T=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?t:e).get(_)),_===null?M(a,l):_&&_.isColor&&(M(_,1),T=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===fa)?(c===void 0&&(c=new Tn(new is(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:_r(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Ti.copy(d.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sx.makeRotationFromEuler(Ti)),c.material.toneMapped=Ze.getTransfer(_.colorSpace)!==rt,(f!==_||h!==_.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new Tn(new rs(2,2),new Kn({name:"BackgroundMaterial",uniforms:_r(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(_.colorSpace)!==rt,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=_,h=_.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function M(p,d){p.getRGB(Rs,jf(n)),i.buffers.color.setClear(Rs.r,Rs.g,Rs.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,M(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,M(a,l)},render:v}}function ox(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,c=!1;function f(w,G,B,X,V){let ne=!1;if(o){const ie=M(X,B,G);u!==ie&&(u=ie,m(u.object)),ne=d(w,X,B,V),ne&&T(w,X,B,V)}else{const ie=G.wireframe===!0;(u.geometry!==X.id||u.program!==B.id||u.wireframe!==ie)&&(u.geometry=X.id,u.program=B.id,u.wireframe=ie,ne=!0)}V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),(ne||c)&&(c=!1,O(w,G,B,X),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(w){return i.isWebGL2?n.bindVertexArray(w):s.bindVertexArrayOES(w)}function v(w){return i.isWebGL2?n.deleteVertexArray(w):s.deleteVertexArrayOES(w)}function M(w,G,B){const X=B.wireframe===!0;let V=a[w.id];V===void 0&&(V={},a[w.id]=V);let ne=V[G.id];ne===void 0&&(ne={},V[G.id]=ne);let ie=ne[X];return ie===void 0&&(ie=p(h()),ne[X]=ie),ie}function p(w){const G=[],B=[],X=[];for(let V=0;V<r;V++)G[V]=0,B[V]=0,X[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:B,attributeDivisors:X,object:w,attributes:{},index:null}}function d(w,G,B,X){const V=u.attributes,ne=G.attributes;let ie=0;const ue=B.getAttributes();for(const _e in ue)if(ue[_e].location>=0){const ee=V[_e];let ce=ne[_e];if(ce===void 0&&(_e==="instanceMatrix"&&w.instanceMatrix&&(ce=w.instanceMatrix),_e==="instanceColor"&&w.instanceColor&&(ce=w.instanceColor)),ee===void 0||ee.attribute!==ce||ce&&ee.data!==ce.data)return!0;ie++}return u.attributesNum!==ie||u.index!==X}function T(w,G,B,X){const V={},ne=G.attributes;let ie=0;const ue=B.getAttributes();for(const _e in ue)if(ue[_e].location>=0){let ee=ne[_e];ee===void 0&&(_e==="instanceMatrix"&&w.instanceMatrix&&(ee=w.instanceMatrix),_e==="instanceColor"&&w.instanceColor&&(ee=w.instanceColor));const ce={};ce.attribute=ee,ee&&ee.data&&(ce.data=ee.data),V[_e]=ce,ie++}u.attributes=V,u.attributesNum=ie,u.index=X}function _(){const w=u.newAttributes;for(let G=0,B=w.length;G<B;G++)w[G]=0}function y(w){L(w,0)}function L(w,G){const B=u.newAttributes,X=u.enabledAttributes,V=u.attributeDivisors;B[w]=1,X[w]===0&&(n.enableVertexAttribArray(w),X[w]=1),V[w]!==G&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](w,G),V[w]=G)}function P(){const w=u.newAttributes,G=u.enabledAttributes;for(let B=0,X=G.length;B<X;B++)G[B]!==w[B]&&(n.disableVertexAttribArray(B),G[B]=0)}function C(w,G,B,X,V,ne,ie){ie===!0?n.vertexAttribIPointer(w,G,B,V,ne):n.vertexAttribPointer(w,G,B,X,V,ne)}function O(w,G,B,X){if(i.isWebGL2===!1&&(w.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const V=X.attributes,ne=B.getAttributes(),ie=G.defaultAttributeValues;for(const ue in ne){const _e=ne[ue];if(_e.location>=0){let Ue=V[ue];if(Ue===void 0&&(ue==="instanceMatrix"&&w.instanceMatrix&&(Ue=w.instanceMatrix),ue==="instanceColor"&&w.instanceColor&&(Ue=w.instanceColor)),Ue!==void 0){const ee=Ue.normalized,ce=Ue.itemSize,xe=t.get(Ue);if(xe===void 0)continue;const Re=xe.buffer,Ae=xe.type,Te=xe.bytesPerElement,qe=i.isWebGL2===!0&&(Ae===n.INT||Ae===n.UNSIGNED_INT||Ue.gpuType===Df);if(Ue.isInterleavedBufferAttribute){const De=Ue.data,x=De.stride,D=Ue.offset;if(De.isInstancedInterleavedBuffer){for(let F=0;F<_e.locationSize;F++)L(_e.location+F,De.meshPerAttribute);w.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let F=0;F<_e.locationSize;F++)y(_e.location+F);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let F=0;F<_e.locationSize;F++)C(_e.location+F,ce/_e.locationSize,Ae,ee,x*Te,(D+ce/_e.locationSize*F)*Te,qe)}else{if(Ue.isInstancedBufferAttribute){for(let De=0;De<_e.locationSize;De++)L(_e.location+De,Ue.meshPerAttribute);w.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let De=0;De<_e.locationSize;De++)y(_e.location+De);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let De=0;De<_e.locationSize;De++)C(_e.location+De,ce/_e.locationSize,Ae,ee,ce*Te,ce/_e.locationSize*De*Te,qe)}}else if(ie!==void 0){const ee=ie[ue];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(_e.location,ee);break;case 3:n.vertexAttrib3fv(_e.location,ee);break;case 4:n.vertexAttrib4fv(_e.location,ee);break;default:n.vertexAttrib1fv(_e.location,ee)}}}}P()}function q(){R();for(const w in a){const G=a[w];for(const B in G){const X=G[B];for(const V in X)v(X[V].object),delete X[V];delete G[B]}delete a[w]}}function S(w){if(a[w.id]===void 0)return;const G=a[w.id];for(const B in G){const X=G[B];for(const V in X)v(X[V].object),delete X[V];delete G[B]}delete a[w.id]}function A(w){for(const G in a){const B=a[G];if(B[w.id]===void 0)continue;const X=B[w.id];for(const V in X)v(X[V].object),delete X[V];delete B[w.id]}}function R(){I(),c=!0,u!==l&&(u=l,m(u.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:R,resetDefaultState:I,dispose:q,releaseStatesOfGeometry:S,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:y,disableUnusedAttributes:P}}function lx(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,f){n.drawArrays(s,c,f),t.update(f,s,1)}function l(c,f,h){if(h===0)return;let m,v;if(r)m=n,v="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](s,c,f,h),t.update(f,s,h)}function u(c,f,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<h;v++)this.render(c[v],f[v]);else{m.multiDrawArraysWEBGL(s,c,0,f,0,h);let v=0;for(let M=0;M<h;M++)v+=f[M];t.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function cx(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),M=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,y=o||e.has("OES_texture_float"),L=_&&y,P=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:v,maxAttributes:M,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:T,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:L,maxSamples:P}}function ux(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new wi,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,m){const v=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||v===null||v.length===0||s&&!p)s?c(null):u();else{const T=s?0:i,_=T*4;let y=d.clippingState||null;l.value=y,y=c(v,h,_,m);for(let L=0;L!==_;++L)y[L]=t[L];d.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,m,v){const M=f!==null?f.length:0;let p=null;if(M!==0){if(p=l.value,v!==!0||p===null){const d=m+M*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<d)&&(p=new Float32Array(d));for(let _=0,y=m;_!==M;++_,y+=4)o.copy(f[_]).applyMatrix4(T,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function fx(n){let e=new WeakMap;function t(o,a){return a===Co?o.mapping=pr:a===Ro&&(o.mapping=mr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Co||a===Ro)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new S_(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class th extends Zf{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const sr=4,Xc=[.125,.215,.35,.446,.526,.582],Li=20,so=new th,qc=new Je;let ao=null,oo=0,lo=0;const Ci=(1+Math.sqrt(5))/2,ir=1/Ci,$c=[new K(1,1,1),new K(-1,1,1),new K(1,1,-1),new K(-1,1,-1),new K(0,Ci,ir),new K(0,Ci,-ir),new K(ir,0,Ci),new K(-ir,0,Ci),new K(Ci,ir,0),new K(-Ci,ir,0)];class Yc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ao=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ao,oo,lo),e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pr||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ao=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Kr,format:ln,colorSpace:di,depthBuffer:!1},r=Kc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hx(s)),this._blurMaterial=dx(s,e,t)}return r}_compileMaterial(e){const t=new Tn(this._lodPlanes[0],e);this._renderer.compile(t,so)}_sceneToCubeUV(e,t,i,r){const a=new an(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(qc),c.toneMapping=ci,c.autoClear=!1;const m=new $f({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),v=new Tn(new is,m);let M=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,M=!0):(m.color.copy(qc),M=!0);for(let d=0;d<6;d++){const T=d%3;T===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):T===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const _=this._cubeSize;Ps(r,T*_,d>2?_:0,_,_),c.setRenderTarget(r),M&&c.render(v,a),c.render(e,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===pr||e.mapping===mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Tn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ps(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,so)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=$c[(r-1)%$c.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Tn(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Li-1),M=s/v,p=isFinite(s)?1+Math.floor(c*M):Li;p>Li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Li}`);const d=[];let T=0;for(let C=0;C<Li;++C){const O=C/M,q=Math.exp(-O*O/2);d.push(q),C===0?T+=q:C<p&&(T+=2*q)}for(let C=0;C<d.length;C++)d[C]=d[C]/T;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=v,h.mipInt.value=_-i;const y=this._sizeLods[r],L=3*y*(r>_-sr?r-_+sr:0),P=4*(this._cubeSize-y);Ps(t,L,P,3*y,2*y),l.setRenderTarget(t),l.render(f,so)}}function hx(n){const e=[],t=[],i=[];let r=n;const s=n-sr+1+Xc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-sr?l=Xc[o-n+sr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,v=6,M=3,p=2,d=1,T=new Float32Array(M*v*m),_=new Float32Array(p*v*m),y=new Float32Array(d*v*m);for(let P=0;P<m;P++){const C=P%3*2/3-1,O=P>2?0:-1,q=[C,O,0,C+2/3,O,0,C+2/3,O+1,0,C,O,0,C+2/3,O+1,0,C,O+1,0];T.set(q,M*v*P),_.set(h,p*v*P);const S=[P,P,P,P,P,P];y.set(S,d*v*P)}const L=new Hi;L.setAttribute("position",new An(T,M)),L.setAttribute("uv",new An(_,p)),L.setAttribute("faceIndex",new An(y,d)),e.push(L),r>sr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Kc(n,e,t){const i=new Bi(n,e,t);return i.texture.mapping=fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ps(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function dx(n,e,t){const i=new Float32Array(Li),r=new K(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:il(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function jc(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Zc(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function il(){return`

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
	`}function px(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Co||l===Ro,c=l===pr||l===mr;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Yc(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new Yc(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function mx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function gx(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const M=h.morphAttributes[v];for(let p=0,d=M.length;p<d;p++)e.remove(M[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const M=m[v];for(let p=0,d=M.length;p<d;p++)e.update(M[p],n.ARRAY_BUFFER)}}function u(f){const h=[],m=f.index,v=f.attributes.position;let M=0;if(m!==null){const T=m.array;M=m.version;for(let _=0,y=T.length;_<y;_+=3){const L=T[_+0],P=T[_+1],C=T[_+2];h.push(L,P,P,C,C,L)}}else if(v!==void 0){const T=v.array;M=v.version;for(let _=0,y=T.length/3-1;_<y;_+=3){const L=_+0,P=_+1,C=_+2;h.push(L,P,P,C,C,L)}}else return;const p=new(Gf(h)?Kf:Yf)(h,1);p.version=M;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function c(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function _x(n,e,t,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function u(m){a=m.type,l=m.bytesPerElement}function c(m,v){n.drawElements(s,v,a,m*l),t.update(v,s,1)}function f(m,v,M){if(M===0)return;let p,d;if(r)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,v,a,m*l,M),t.update(v,s,M)}function h(m,v,M){if(M===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<M;d++)this.render(m[d]/l,v[d]);else{p.multiDrawElementsWEBGL(s,v,0,a,m,0,M);let d=0;for(let T=0;T<M;T++)d+=v[T];t.update(d,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function vx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function xx(n,e){return n[0]-e[0]}function Mx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Sx(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Tt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,M=v!==void 0?v.length:0;let p=s.get(c);if(p===void 0||p.count!==M){let I=function(){A.dispose(),s.delete(c),c.removeEventListener("dispose",I)};var m=I;p!==void 0&&p.texture.dispose();const d=c.morphAttributes.position!==void 0,T=c.morphAttributes.normal!==void 0,_=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],L=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let C=0;d===!0&&(C=1),T===!0&&(C=2),_===!0&&(C=3);let O=c.attributes.position.count*C,q=1;O>e.maxTextureSize&&(q=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const S=new Float32Array(O*q*4*M),A=new Wf(S,O,q,M);A.type=Vn,A.needsUpdate=!0;const R=C*4;for(let w=0;w<M;w++){const G=y[w],B=L[w],X=P[w],V=O*q*4*w;for(let ne=0;ne<G.count;ne++){const ie=ne*R;d===!0&&(o.fromBufferAttribute(G,ne),S[V+ie+0]=o.x,S[V+ie+1]=o.y,S[V+ie+2]=o.z,S[V+ie+3]=0),T===!0&&(o.fromBufferAttribute(B,ne),S[V+ie+4]=o.x,S[V+ie+5]=o.y,S[V+ie+6]=o.z,S[V+ie+7]=0),_===!0&&(o.fromBufferAttribute(X,ne),S[V+ie+8]=o.x,S[V+ie+9]=o.y,S[V+ie+10]=o.z,S[V+ie+11]=X.itemSize===4?o.w:1)}}p={count:M,texture:A,size:new $e(O,q)},s.set(c,p),c.addEventListener("dispose",I)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let d=0;for(let _=0;_<h.length;_++)d+=h[_];const T=c.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",T),f.getUniforms().setValue(n,"morphTargetInfluences",h)}f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const v=h===void 0?0:h.length;let M=i[c.id];if(M===void 0||M.length!==v){M=[];for(let y=0;y<v;y++)M[y]=[y,0];i[c.id]=M}for(let y=0;y<v;y++){const L=M[y];L[0]=y,L[1]=h[y]}M.sort(Mx);for(let y=0;y<8;y++)y<v&&M[y][1]?(a[y][0]=M[y][0],a[y][1]=M[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(xx);const p=c.morphAttributes.position,d=c.morphAttributes.normal;let T=0;for(let y=0;y<8;y++){const L=a[y],P=L[0],C=L[1];P!==Number.MAX_SAFE_INTEGER&&C?(p&&c.getAttribute("morphTarget"+y)!==p[P]&&c.setAttribute("morphTarget"+y,p[P]),d&&c.getAttribute("morphNormal"+y)!==d[P]&&c.setAttribute("morphNormal"+y,d[P]),r[y]=C,T+=C):(p&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),d&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const _=c.morphTargetsRelative?1:1-T;f.getUniforms().setValue(n,"morphTargetBaseInfluence",_),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Ex(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class nh extends zt{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Fi,c!==Fi&&c!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Fi&&(i=oi),i===void 0&&c===gr&&(i=Ni),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ih=new zt,rh=new nh(1,1);rh.compareFunction=Hf;const sh=new Wf,ah=new i_,oh=new Jf,Jc=[],Qc=[],eu=new Float32Array(16),tu=new Float32Array(9),nu=new Float32Array(4);function xr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Jc[r];if(s===void 0&&(s=new Float32Array(r),Jc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pa(n,e){let t=Qc[e];t===void 0&&(t=new Int32Array(e),Qc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function yx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2fv(this.addr,e),mt(t,e)}}function bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;n.uniform3fv(this.addr,e),mt(t,e)}}function Ax(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4fv(this.addr,e),mt(t,e)}}function wx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;nu.set(i),n.uniformMatrix2fv(this.addr,!1,nu),mt(t,i)}}function Cx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;tu.set(i),n.uniformMatrix3fv(this.addr,!1,tu),mt(t,i)}}function Rx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;eu.set(i),n.uniformMatrix4fv(this.addr,!1,eu),mt(t,i)}}function Px(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Lx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2iv(this.addr,e),mt(t,e)}}function Ix(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3iv(this.addr,e),mt(t,e)}}function Dx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4iv(this.addr,e),mt(t,e)}}function Ux(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Nx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2uiv(this.addr,e),mt(t,e)}}function Fx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3uiv(this.addr,e),mt(t,e)}}function Ox(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4uiv(this.addr,e),mt(t,e)}}function Bx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?rh:ih;t.setTexture2D(e||s,r)}function zx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ah,r)}function Hx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||oh,r)}function Gx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||sh,r)}function Vx(n){switch(n){case 5126:return yx;case 35664:return Tx;case 35665:return bx;case 35666:return Ax;case 35674:return wx;case 35675:return Cx;case 35676:return Rx;case 5124:case 35670:return Px;case 35667:case 35671:return Lx;case 35668:case 35672:return Ix;case 35669:case 35673:return Dx;case 5125:return Ux;case 36294:return Nx;case 36295:return Fx;case 36296:return Ox;case 35678:case 36198:case 36298:case 36306:case 35682:return Bx;case 35679:case 36299:case 36307:return zx;case 35680:case 36300:case 36308:case 36293:return Hx;case 36289:case 36303:case 36311:case 36292:return Gx}}function kx(n,e){n.uniform1fv(this.addr,e)}function Wx(n,e){const t=xr(e,this.size,2);n.uniform2fv(this.addr,t)}function Xx(n,e){const t=xr(e,this.size,3);n.uniform3fv(this.addr,t)}function qx(n,e){const t=xr(e,this.size,4);n.uniform4fv(this.addr,t)}function $x(n,e){const t=xr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Yx(n,e){const t=xr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Kx(n,e){const t=xr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function jx(n,e){n.uniform1iv(this.addr,e)}function Zx(n,e){n.uniform2iv(this.addr,e)}function Jx(n,e){n.uniform3iv(this.addr,e)}function Qx(n,e){n.uniform4iv(this.addr,e)}function eM(n,e){n.uniform1uiv(this.addr,e)}function tM(n,e){n.uniform2uiv(this.addr,e)}function nM(n,e){n.uniform3uiv(this.addr,e)}function iM(n,e){n.uniform4uiv(this.addr,e)}function rM(n,e,t){const i=this.cache,r=e.length,s=pa(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ih,s[o])}function sM(n,e,t){const i=this.cache,r=e.length,s=pa(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ah,s[o])}function aM(n,e,t){const i=this.cache,r=e.length,s=pa(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||oh,s[o])}function oM(n,e,t){const i=this.cache,r=e.length,s=pa(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||sh,s[o])}function lM(n){switch(n){case 5126:return kx;case 35664:return Wx;case 35665:return Xx;case 35666:return qx;case 35674:return $x;case 35675:return Yx;case 35676:return Kx;case 5124:case 35670:return jx;case 35667:case 35671:return Zx;case 35668:case 35672:return Jx;case 35669:case 35673:return Qx;case 5125:return eM;case 36294:return tM;case 36295:return nM;case 36296:return iM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return sM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return oM}}class cM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Vx(t.type)}}class uM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lM(t.type)}}class fM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const co=/(\w+)(\])?(\[|\.)?/g;function iu(n,e){n.seq.push(e),n.map[e.id]=e}function hM(n,e,t){const i=n.name,r=i.length;for(co.lastIndex=0;;){const s=co.exec(i),o=co.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){iu(t,u===void 0?new cM(a,n,e):new uM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new fM(a),iu(t,f)),t=f}}}class Os{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);hM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ru(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const dM=37297;let pM=0;function mM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function gM(n){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(n);let i;switch(e===t?i="":e===Zs&&t===js?i="LinearDisplayP3ToLinearSRGB":e===js&&t===Zs&&(i="LinearSRGBToLinearDisplayP3"),n){case di:case ha:return[i,"LinearTransferOETF"];case vn:case tl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function su(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+mM(n.getShaderSource(e),o)}else return r}function _M(n,e){const t=gM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function vM(n,e){let t;switch(e){case Tg:t="Linear";break;case bg:t="Reinhard";break;case Ag:t="OptimizedCineon";break;case wg:t="ACESFilmic";break;case Rg:t="AgX";break;case Pg:t="Neutral";break;case Cg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ar).join(`
`)}function MM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function SM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function EM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ar(n){return n!==""}function au(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ou(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yM=/^[ \t]*#include +<([\w\d./]+)>/gm;function No(n){return n.replace(yM,bM)}const TM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function bM(n,e){let t=Ge[e];if(t===void 0){const i=TM.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return No(t)}const AM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lu(n){return n.replace(AM,wM)}function wM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function CM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Pf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Jm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function RM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case pr:case mr:e="ENVMAP_TYPE_CUBE";break;case fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case mr:e="ENVMAP_MODE_REFRACTION";break}return e}function LM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Lf:e="ENVMAP_BLENDING_MULTIPLY";break;case Eg:e="ENVMAP_BLENDING_MIX";break;case yg:e="ENVMAP_BLENDING_ADD";break}return e}function IM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function DM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=CM(t),u=RM(t),c=PM(t),f=LM(t),h=IM(t),m=t.isWebGL2?"":xM(t),v=MM(t),M=SM(s),p=r.createProgram();let d,T,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ar).join(`
`),d.length>0&&(d+=`
`),T=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ar).join(`
`),T.length>0&&(T+=`
`)):(d=[cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),T=[m,cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?Ge.tonemapping_pars_fragment:"",t.toneMapping!==ci?vM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,_M("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ar).join(`
`)),o=No(o),o=au(o,t),o=ou(o,t),a=No(a),a=au(a,t),a=ou(a,t),o=lu(o),a=lu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,T=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const y=_+d+o,L=_+T+a,P=ru(r,r.VERTEX_SHADER,y),C=ru(r,r.FRAGMENT_SHADER,L);r.attachShader(p,P),r.attachShader(p,C),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function O(R){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(p).trim(),w=r.getShaderInfoLog(P).trim(),G=r.getShaderInfoLog(C).trim();let B=!0,X=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,P,C);else{const V=su(r,P,"vertex"),ne=su(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+V+`
`+ne)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(w===""||G==="")&&(X=!1);X&&(R.diagnostics={runnable:B,programLog:I,vertexShader:{log:w,prefix:d},fragmentShader:{log:G,prefix:T}})}r.deleteShader(P),r.deleteShader(C),q=new Os(r,p),S=EM(r,p)}let q;this.getUniforms=function(){return q===void 0&&O(this),q};let S;this.getAttributes=function(){return S===void 0&&O(this),S};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(p,dM)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=P,this.fragmentShader=C,this}let UM=0;class NM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new FM(e),t.set(e,i)),i}}class FM{constructor(e){this.id=UM++,this.code=e,this.usedTimes=0}}function OM(n,e,t,i,r,s,o){const a=new Xf,l=new NM,u=new Set,c=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,m=r.vertexTextures;let v=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){return u.add(S),S===0?"uv":`uv${S}`}function d(S,A,R,I,w){const G=I.fog,B=w.geometry,X=S.isMeshStandardMaterial?I.environment:null,V=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),ne=V&&V.mapping===fa?V.image.height:null,ie=M[S.type];S.precision!==null&&(v=r.getMaxPrecision(S.precision),v!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",v,"instead."));const ue=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,_e=ue!==void 0?ue.length:0;let Ue=0;B.morphAttributes.position!==void 0&&(Ue=1),B.morphAttributes.normal!==void 0&&(Ue=2),B.morphAttributes.color!==void 0&&(Ue=3);let ee,ce,xe,Re;if(ie){const tt=Sn[ie];ee=tt.vertexShader,ce=tt.fragmentShader}else ee=S.vertexShader,ce=S.fragmentShader,l.update(S),xe=l.getVertexShaderID(S),Re=l.getFragmentShaderID(S);const Ae=n.getRenderTarget(),Te=w.isInstancedMesh===!0,qe=w.isBatchedMesh===!0,De=!!S.map,x=!!S.matcap,D=!!V,F=!!S.aoMap,J=!!S.lightMap,k=!!S.bumpMap,Q=!!S.normalMap,se=!!S.displacementMap,re=!!S.emissiveMap,ae=!!S.metalnessMap,E=!!S.roughnessMap,g=S.anisotropy>0,U=S.clearcoat>0,z=S.iridescence>0,j=S.sheen>0,te=S.transmission>0,Me=g&&!!S.anisotropyMap,me=U&&!!S.clearcoatMap,oe=U&&!!S.clearcoatNormalMap,fe=U&&!!S.clearcoatRoughnessMap,Ce=z&&!!S.iridescenceMap,le=z&&!!S.iridescenceThicknessMap,et=j&&!!S.sheenColorMap,ze=j&&!!S.sheenRoughnessMap,ye=!!S.specularMap,Se=!!S.specularColorMap,be=!!S.specularIntensityMap,We=te&&!!S.transmissionMap,Oe=te&&!!S.thicknessMap,st=!!S.gradientMap,N=!!S.alphaMap,ge=S.alphaTest>0,$=!!S.alphaHash,de=!!S.extensions;let ve=ci;S.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(ve=n.toneMapping);const Xe={isWebGL2:f,shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:ee,fragmentShader:ce,defines:S.defines,customVertexShaderID:xe,customFragmentShaderID:Re,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:v,batching:qe,instancing:Te,instancingColor:Te&&w.instanceColor!==null,instancingMorph:Te&&w.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ae===null?n.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:di,alphaToCoverage:!!S.alphaToCoverage,map:De,matcap:x,envMap:D,envMapMode:D&&V.mapping,envMapCubeUVHeight:ne,aoMap:F,lightMap:J,bumpMap:k,normalMap:Q,displacementMap:m&&se,emissiveMap:re,normalMapObjectSpace:Q&&S.normalMapType===Vg,normalMapTangentSpace:Q&&S.normalMapType===Gg,metalnessMap:ae,roughnessMap:E,anisotropy:g,anisotropyMap:Me,clearcoat:U,clearcoatMap:me,clearcoatNormalMap:oe,clearcoatRoughnessMap:fe,iridescence:z,iridescenceMap:Ce,iridescenceThicknessMap:le,sheen:j,sheenColorMap:et,sheenRoughnessMap:ze,specularMap:ye,specularColorMap:Se,specularIntensityMap:be,transmission:te,transmissionMap:We,thicknessMap:Oe,gradientMap:st,opaque:S.transparent===!1&&S.blending===fr&&S.alphaToCoverage===!1,alphaMap:N,alphaTest:ge,alphaHash:$,combine:S.combine,mapUv:De&&p(S.map.channel),aoMapUv:F&&p(S.aoMap.channel),lightMapUv:J&&p(S.lightMap.channel),bumpMapUv:k&&p(S.bumpMap.channel),normalMapUv:Q&&p(S.normalMap.channel),displacementMapUv:se&&p(S.displacementMap.channel),emissiveMapUv:re&&p(S.emissiveMap.channel),metalnessMapUv:ae&&p(S.metalnessMap.channel),roughnessMapUv:E&&p(S.roughnessMap.channel),anisotropyMapUv:Me&&p(S.anisotropyMap.channel),clearcoatMapUv:me&&p(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&p(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&p(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&p(S.iridescenceMap.channel),iridescenceThicknessMapUv:le&&p(S.iridescenceThicknessMap.channel),sheenColorMapUv:et&&p(S.sheenColorMap.channel),sheenRoughnessMapUv:ze&&p(S.sheenRoughnessMap.channel),specularMapUv:ye&&p(S.specularMap.channel),specularColorMapUv:Se&&p(S.specularColorMap.channel),specularIntensityMapUv:be&&p(S.specularIntensityMap.channel),transmissionMapUv:We&&p(S.transmissionMap.channel),thicknessMapUv:Oe&&p(S.thicknessMap.channel),alphaMapUv:N&&p(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Q||g),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!B.attributes.uv&&(De||N),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:w.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Ue,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ve,useLegacyLights:n._useLegacyLights,decodeVideoTexture:De&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Gn,flipSided:S.side===Wt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:de&&S.extensions.derivatives===!0,extensionFragDepth:de&&S.extensions.fragDepth===!0,extensionDrawBuffers:de&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:de&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Xe.vertexUv1s=u.has(1),Xe.vertexUv2s=u.has(2),Xe.vertexUv3s=u.has(3),u.clear(),Xe}function T(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)A.push(R),A.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(_(A,S),y(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function _(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function y(S,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.instancingMorph&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.normalMapObjectSpace&&a.enable(7),A.normalMapTangentSpace&&a.enable(8),A.clearcoat&&a.enable(9),A.iridescence&&a.enable(10),A.alphaTest&&a.enable(11),A.vertexColors&&a.enable(12),A.vertexAlphas&&a.enable(13),A.vertexUv1s&&a.enable(14),A.vertexUv2s&&a.enable(15),A.vertexUv3s&&a.enable(16),A.vertexTangents&&a.enable(17),A.anisotropy&&a.enable(18),A.alphaHash&&a.enable(19),A.batching&&a.enable(20),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.alphaToCoverage&&a.enable(20),S.push(a.mask)}function L(S){const A=M[S.type];let R;if(A){const I=Sn[A];R=__.clone(I.uniforms)}else R=S.uniforms;return R}function P(S,A){let R;for(let I=0,w=c.length;I<w;I++){const G=c[I];if(G.cacheKey===A){R=G,++R.usedTimes;break}}return R===void 0&&(R=new DM(n,A,S,s),c.push(R)),R}function C(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),S.destroy()}}function O(S){l.remove(S)}function q(){l.dispose()}return{getParameters:d,getProgramCacheKey:T,getUniforms:L,acquireProgram:P,releaseProgram:C,releaseShaderCache:O,programs:c,dispose:q}}function BM(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function zM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function uu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function fu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,m,v,M,p){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:v,renderOrder:f.renderOrder,z:M,group:p},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=M,d.group=p),e++,d}function a(f,h,m,v,M,p){const d=o(f,h,m,v,M,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(f,h,m,v,M,p){const d=o(f,h,m,v,M,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||zM),i.length>1&&i.sort(h||uu),r.length>1&&r.sort(h||uu)}function c(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function HM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new fu,n.set(i,[o])):r>=s.length?(o=new fu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function GM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new Je};break;case"SpotLight":t={position:new K,direction:new K,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new K,halfWidth:new K,halfHeight:new K};break}return n[e.id]=t,t}}}function VM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let kM=0;function WM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function XM(n,e){const t=new GM,i=VM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new K);const s=new K,o=new dt,a=new dt;function l(c,f){let h=0,m=0,v=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let M=0,p=0,d=0,T=0,_=0,y=0,L=0,P=0,C=0,O=0,q=0;c.sort(WM);const S=f===!0?Math.PI:1;for(let R=0,I=c.length;R<I;R++){const w=c[R],G=w.color,B=w.intensity,X=w.distance,V=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=G.r*B*S,m+=G.g*B*S,v+=G.b*B*S;else if(w.isLightProbe){for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(w.sh.coefficients[ne],B);q++}else if(w.isDirectionalLight){const ne=t.get(w);if(ne.color.copy(w.color).multiplyScalar(w.intensity*S),w.castShadow){const ie=w.shadow,ue=i.get(w);ue.shadowBias=ie.bias,ue.shadowNormalBias=ie.normalBias,ue.shadowRadius=ie.radius,ue.shadowMapSize=ie.mapSize,r.directionalShadow[M]=ue,r.directionalShadowMap[M]=V,r.directionalShadowMatrix[M]=w.shadow.matrix,y++}r.directional[M]=ne,M++}else if(w.isSpotLight){const ne=t.get(w);ne.position.setFromMatrixPosition(w.matrixWorld),ne.color.copy(G).multiplyScalar(B*S),ne.distance=X,ne.coneCos=Math.cos(w.angle),ne.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),ne.decay=w.decay,r.spot[d]=ne;const ie=w.shadow;if(w.map&&(r.spotLightMap[C]=w.map,C++,ie.updateMatrices(w),w.castShadow&&O++),r.spotLightMatrix[d]=ie.matrix,w.castShadow){const ue=i.get(w);ue.shadowBias=ie.bias,ue.shadowNormalBias=ie.normalBias,ue.shadowRadius=ie.radius,ue.shadowMapSize=ie.mapSize,r.spotShadow[d]=ue,r.spotShadowMap[d]=V,P++}d++}else if(w.isRectAreaLight){const ne=t.get(w);ne.color.copy(G).multiplyScalar(B),ne.halfWidth.set(w.width*.5,0,0),ne.halfHeight.set(0,w.height*.5,0),r.rectArea[T]=ne,T++}else if(w.isPointLight){const ne=t.get(w);if(ne.color.copy(w.color).multiplyScalar(w.intensity*S),ne.distance=w.distance,ne.decay=w.decay,w.castShadow){const ie=w.shadow,ue=i.get(w);ue.shadowBias=ie.bias,ue.shadowNormalBias=ie.normalBias,ue.shadowRadius=ie.radius,ue.shadowMapSize=ie.mapSize,ue.shadowCameraNear=ie.camera.near,ue.shadowCameraFar=ie.camera.far,r.pointShadow[p]=ue,r.pointShadowMap[p]=V,r.pointShadowMatrix[p]=w.shadow.matrix,L++}r.point[p]=ne,p++}else if(w.isHemisphereLight){const ne=t.get(w);ne.skyColor.copy(w.color).multiplyScalar(B*S),ne.groundColor.copy(w.groundColor).multiplyScalar(B*S),r.hemi[_]=ne,_++}}T>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=v;const A=r.hash;(A.directionalLength!==M||A.pointLength!==p||A.spotLength!==d||A.rectAreaLength!==T||A.hemiLength!==_||A.numDirectionalShadows!==y||A.numPointShadows!==L||A.numSpotShadows!==P||A.numSpotMaps!==C||A.numLightProbes!==q)&&(r.directional.length=M,r.spot.length=d,r.rectArea.length=T,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=P+C-O,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=q,A.directionalLength=M,A.pointLength=p,A.spotLength=d,A.rectAreaLength=T,A.hemiLength=_,A.numDirectionalShadows=y,A.numPointShadows=L,A.numSpotShadows=P,A.numSpotMaps=C,A.numLightProbes=q,r.version=kM++)}function u(c,f){let h=0,m=0,v=0,M=0,p=0;const d=f.matrixWorldInverse;for(let T=0,_=c.length;T<_;T++){const y=c[T];if(y.isDirectionalLight){const L=r.directional[h];L.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(d),h++}else if(y.isSpotLight){const L=r.spot[v];L.position.setFromMatrixPosition(y.matrixWorld),L.position.applyMatrix4(d),L.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(d),v++}else if(y.isRectAreaLight){const L=r.rectArea[M];L.position.setFromMatrixPosition(y.matrixWorld),L.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),L.halfWidth.set(y.width*.5,0,0),L.halfHeight.set(0,y.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){const L=r.point[m];L.position.setFromMatrixPosition(y.matrixWorld),L.position.applyMatrix4(d),m++}else if(y.isHemisphereLight){const L=r.hemi[p];L.direction.setFromMatrixPosition(y.matrixWorld),L.direction.transformDirection(d),p++}}}return{setup:l,setupView:u,state:r}}function hu(n,e){const t=new XM(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function qM(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new hu(n,e),t.set(s,[l])):o>=a.length?(l=new hu(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class $M extends da{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YM extends da{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const KM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jM=`uniform sampler2D shadow_pass;
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
}`;function ZM(n,e,t){let i=new Qf;const r=new $e,s=new $e,o=new Tt,a=new $M({depthPacking:Hg}),l=new YM,u={},c=t.maxTextureSize,f={[hi]:Wt,[Wt]:hi,[Gn]:Gn},h=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:KM,fragmentShader:jM}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new Hi;v.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Tn(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pf;let d=this.type;this.render=function(P,C,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const q=n.getRenderTarget(),S=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),R=n.state;R.setBlending(li),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const I=d!==Fn&&this.type===Fn,w=d===Fn&&this.type!==Fn;for(let G=0,B=P.length;G<B;G++){const X=P[G],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ne=V.getFrameExtents();if(r.multiply(ne),s.copy(V.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/ne.x),r.x=s.x*ne.x,V.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/ne.y),r.y=s.y*ne.y,V.mapSize.y=s.y)),V.map===null||I===!0||w===!0){const ue=this.type!==Fn?{minFilter:Nt,magFilter:Nt}:{};V.map!==null&&V.map.dispose(),V.map=new Bi(r.x,r.y,ue),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const ie=V.getViewportCount();for(let ue=0;ue<ie;ue++){const _e=V.getViewport(ue);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),R.viewport(o),V.updateMatrices(X,ue),i=V.getFrustum(),y(C,O,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===Fn&&T(V,O),V.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(q,S,A)};function T(P,C){const O=e.update(M);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Bi(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(C,null,O,h,M,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(C,null,O,m,M,null)}function _(P,C,O,q){let S=null;const A=O.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(A!==void 0)S=A;else if(S=O.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const R=S.uuid,I=C.uuid;let w=u[R];w===void 0&&(w={},u[R]=w);let G=w[I];G===void 0&&(G=S.clone(),w[I]=G,C.addEventListener("dispose",L)),S=G}if(S.visible=C.visible,S.wireframe=C.wireframe,q===Fn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:f[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,O.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const R=n.properties.get(S);R.light=O}return S}function y(P,C,O,q,S){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===Fn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,P.matrixWorld);const I=e.update(P),w=P.material;if(Array.isArray(w)){const G=I.groups;for(let B=0,X=G.length;B<X;B++){const V=G[B],ne=w[V.materialIndex];if(ne&&ne.visible){const ie=_(P,ne,q,S);P.onBeforeShadow(n,P,C,O,I,ie,V),n.renderBufferDirect(O,null,I,ie,P,V),P.onAfterShadow(n,P,C,O,I,ie,V)}}}else if(w.visible){const G=_(P,w,q,S);P.onBeforeShadow(n,P,C,O,I,G,null),n.renderBufferDirect(O,null,I,G,P,null),P.onAfterShadow(n,P,C,O,I,G,null)}}const R=P.children;for(let I=0,w=R.length;I<w;I++)y(R[I],C,O,q,S)}function L(P){P.target.removeEventListener("dispose",L);for(const O in u){const q=u[O],S=P.target.uuid;S in q&&(q[S].dispose(),delete q[S])}}}function JM(n,e,t){const i=t.isWebGL2;function r(){let N=!1;const ge=new Tt;let $=null;const de=new Tt(0,0,0,0);return{setMask:function(ve){$!==ve&&!N&&(n.colorMask(ve,ve,ve,ve),$=ve)},setLocked:function(ve){N=ve},setClear:function(ve,Xe,tt,Mt,jt){jt===!0&&(ve*=Mt,Xe*=Mt,tt*=Mt),ge.set(ve,Xe,tt,Mt),de.equals(ge)===!1&&(n.clearColor(ve,Xe,tt,Mt),de.copy(ge))},reset:function(){N=!1,$=null,de.set(-1,0,0,0)}}}function s(){let N=!1,ge=null,$=null,de=null;return{setTest:function(ve){ve?Te(n.DEPTH_TEST):qe(n.DEPTH_TEST)},setMask:function(ve){ge!==ve&&!N&&(n.depthMask(ve),ge=ve)},setFunc:function(ve){if($!==ve){switch(ve){case mg:n.depthFunc(n.NEVER);break;case gg:n.depthFunc(n.ALWAYS);break;case _g:n.depthFunc(n.LESS);break;case Ys:n.depthFunc(n.LEQUAL);break;case vg:n.depthFunc(n.EQUAL);break;case xg:n.depthFunc(n.GEQUAL);break;case Mg:n.depthFunc(n.GREATER);break;case Sg:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=ve}},setLocked:function(ve){N=ve},setClear:function(ve){de!==ve&&(n.clearDepth(ve),de=ve)},reset:function(){N=!1,ge=null,$=null,de=null}}}function o(){let N=!1,ge=null,$=null,de=null,ve=null,Xe=null,tt=null,Mt=null,jt=null;return{setTest:function(nt){N||(nt?Te(n.STENCIL_TEST):qe(n.STENCIL_TEST))},setMask:function(nt){ge!==nt&&!N&&(n.stencilMask(nt),ge=nt)},setFunc:function(nt,It,pn){($!==nt||de!==It||ve!==pn)&&(n.stencilFunc(nt,It,pn),$=nt,de=It,ve=pn)},setOp:function(nt,It,pn){(Xe!==nt||tt!==It||Mt!==pn)&&(n.stencilOp(nt,It,pn),Xe=nt,tt=It,Mt=pn)},setLocked:function(nt){N=nt},setClear:function(nt){jt!==nt&&(n.clearStencil(nt),jt=nt)},reset:function(){N=!1,ge=null,$=null,de=null,ve=null,Xe=null,tt=null,Mt=null,jt=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let h={},m={},v=new WeakMap,M=[],p=null,d=!1,T=null,_=null,y=null,L=null,P=null,C=null,O=null,q=new Je(0,0,0),S=0,A=!1,R=null,I=null,w=null,G=null,B=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ne=0;const ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ie)[1]),V=ne>=1):ie.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),V=ne>=2);let ue=null,_e={};const Ue=n.getParameter(n.SCISSOR_BOX),ee=n.getParameter(n.VIEWPORT),ce=new Tt().fromArray(Ue),xe=new Tt().fromArray(ee);function Re(N,ge,$,de){const ve=new Uint8Array(4),Xe=n.createTexture();n.bindTexture(N,Xe),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<$;tt++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(ge,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(ge+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return Xe}const Ae={};Ae[n.TEXTURE_2D]=Re(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=Re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ae[n.TEXTURE_2D_ARRAY]=Re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=Re(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Te(n.DEPTH_TEST),l.setFunc(Ys),se(!1),re(Xl),Te(n.CULL_FACE),k(li);function Te(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function qe(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function De(N,ge){return m[N]!==ge?(n.bindFramebuffer(N,ge),m[N]=ge,i&&(N===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ge),N===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ge)),!0):!1}function x(N,ge){let $=M,de=!1;if(N){$=v.get(ge),$===void 0&&($=[],v.set(ge,$));const ve=N.textures;if($.length!==ve.length||$[0]!==n.COLOR_ATTACHMENT0){for(let Xe=0,tt=ve.length;Xe<tt;Xe++)$[Xe]=n.COLOR_ATTACHMENT0+Xe;$.length=ve.length,de=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,de=!0);if(de)if(t.isWebGL2)n.drawBuffers($);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL($);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function D(N){return p!==N?(n.useProgram(N),p=N,!0):!1}const F={[Pi]:n.FUNC_ADD,[eg]:n.FUNC_SUBTRACT,[tg]:n.FUNC_REVERSE_SUBTRACT};if(i)F[Kl]=n.MIN,F[jl]=n.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(F[Kl]=N.MIN_EXT,F[jl]=N.MAX_EXT)}const J={[ng]:n.ZERO,[ig]:n.ONE,[rg]:n.SRC_COLOR,[Ao]:n.SRC_ALPHA,[ug]:n.SRC_ALPHA_SATURATE,[lg]:n.DST_COLOR,[ag]:n.DST_ALPHA,[sg]:n.ONE_MINUS_SRC_COLOR,[wo]:n.ONE_MINUS_SRC_ALPHA,[cg]:n.ONE_MINUS_DST_COLOR,[og]:n.ONE_MINUS_DST_ALPHA,[fg]:n.CONSTANT_COLOR,[hg]:n.ONE_MINUS_CONSTANT_COLOR,[dg]:n.CONSTANT_ALPHA,[pg]:n.ONE_MINUS_CONSTANT_ALPHA};function k(N,ge,$,de,ve,Xe,tt,Mt,jt,nt){if(N===li){d===!0&&(qe(n.BLEND),d=!1);return}if(d===!1&&(Te(n.BLEND),d=!0),N!==Qm){if(N!==T||nt!==A){if((_!==Pi||P!==Pi)&&(n.blendEquation(n.FUNC_ADD),_=Pi,P=Pi),nt)switch(N){case fr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ql:n.blendFunc(n.ONE,n.ONE);break;case $l:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case fr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ql:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case $l:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,L=null,C=null,O=null,q.set(0,0,0),S=0,T=N,A=nt}return}ve=ve||ge,Xe=Xe||$,tt=tt||de,(ge!==_||ve!==P)&&(n.blendEquationSeparate(F[ge],F[ve]),_=ge,P=ve),($!==y||de!==L||Xe!==C||tt!==O)&&(n.blendFuncSeparate(J[$],J[de],J[Xe],J[tt]),y=$,L=de,C=Xe,O=tt),(Mt.equals(q)===!1||jt!==S)&&(n.blendColor(Mt.r,Mt.g,Mt.b,jt),q.copy(Mt),S=jt),T=N,A=!1}function Q(N,ge){N.side===Gn?qe(n.CULL_FACE):Te(n.CULL_FACE);let $=N.side===Wt;ge&&($=!$),se($),N.blending===fr&&N.transparent===!1?k(li):k(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const de=N.stencilWrite;u.setTest(de),de&&(u.setMask(N.stencilWriteMask),u.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),u.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),E(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Te(n.SAMPLE_ALPHA_TO_COVERAGE):qe(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(N){R!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),R=N)}function re(N){N!==jm?(Te(n.CULL_FACE),N!==I&&(N===Xl?n.cullFace(n.BACK):N===Zm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):qe(n.CULL_FACE),I=N}function ae(N){N!==w&&(V&&n.lineWidth(N),w=N)}function E(N,ge,$){N?(Te(n.POLYGON_OFFSET_FILL),(G!==ge||B!==$)&&(n.polygonOffset(ge,$),G=ge,B=$)):qe(n.POLYGON_OFFSET_FILL)}function g(N){N?Te(n.SCISSOR_TEST):qe(n.SCISSOR_TEST)}function U(N){N===void 0&&(N=n.TEXTURE0+X-1),ue!==N&&(n.activeTexture(N),ue=N)}function z(N,ge,$){$===void 0&&(ue===null?$=n.TEXTURE0+X-1:$=ue);let de=_e[$];de===void 0&&(de={type:void 0,texture:void 0},_e[$]=de),(de.type!==N||de.texture!==ge)&&(ue!==$&&(n.activeTexture($),ue=$),n.bindTexture(N,ge||Ae[N]),de.type=N,de.texture=ge)}function j(){const N=_e[ue];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function te(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ze(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(N){ce.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ce.copy(N))}function be(N){xe.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),xe.copy(N))}function We(N,ge){let $=f.get(ge);$===void 0&&($=new WeakMap,f.set(ge,$));let de=$.get(N);de===void 0&&(de=n.getUniformBlockIndex(ge,N.name),$.set(N,de))}function Oe(N,ge){const de=f.get(ge).get(N);c.get(ge)!==de&&(n.uniformBlockBinding(ge,de,N.__bindingPointIndex),c.set(ge,de))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ue=null,_e={},m={},v=new WeakMap,M=[],p=null,d=!1,T=null,_=null,y=null,L=null,P=null,C=null,O=null,q=new Je(0,0,0),S=0,A=!1,R=null,I=null,w=null,G=null,B=null,ce.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Te,disable:qe,bindFramebuffer:De,drawBuffers:x,useProgram:D,setBlending:k,setMaterial:Q,setFlipSided:se,setCullFace:re,setLineWidth:ae,setPolygonOffset:E,setScissorTest:g,activeTexture:U,bindTexture:z,unbindTexture:j,compressedTexImage2D:te,compressedTexImage3D:Me,texImage2D:ze,texImage3D:ye,updateUBOMapping:We,uniformBlockBinding:Oe,texStorage2D:le,texStorage3D:et,texSubImage2D:me,texSubImage3D:oe,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ce,scissor:Se,viewport:be,reset:st}}function QM(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,f=new WeakMap;let h;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,g){return v?new OffscreenCanvas(E,g):Qs("canvas")}function p(E,g,U,z){let j=1;const te=ae(E);if((te.width>z||te.height>z)&&(j=z/Math.max(te.width,te.height)),j<1||g===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Me=g?Uo:Math.floor,me=Me(j*te.width),oe=Me(j*te.height);h===void 0&&(h=M(me,oe));const fe=U?M(me,oe):h;return fe.width=me,fe.height=oe,fe.getContext("2d").drawImage(E,0,0,me,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+me+"x"+oe+")."),fe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),E;return E}function d(E){const g=ae(E);return Ac(g.width)&&Ac(g.height)}function T(E){return a?!1:E.wrapS!==on||E.wrapT!==on||E.minFilter!==Nt&&E.minFilter!==Vt}function _(E,g){return E.generateMipmaps&&g&&E.minFilter!==Nt&&E.minFilter!==Vt}function y(E){n.generateMipmap(E)}function L(E,g,U,z,j=!1){if(a===!1)return g;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let te=g;if(g===n.RED&&(U===n.FLOAT&&(te=n.R32F),U===n.HALF_FLOAT&&(te=n.R16F),U===n.UNSIGNED_BYTE&&(te=n.R8)),g===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(te=n.R8UI),U===n.UNSIGNED_SHORT&&(te=n.R16UI),U===n.UNSIGNED_INT&&(te=n.R32UI),U===n.BYTE&&(te=n.R8I),U===n.SHORT&&(te=n.R16I),U===n.INT&&(te=n.R32I)),g===n.RG&&(U===n.FLOAT&&(te=n.RG32F),U===n.HALF_FLOAT&&(te=n.RG16F),U===n.UNSIGNED_BYTE&&(te=n.RG8)),g===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(te=n.RG8UI),U===n.UNSIGNED_SHORT&&(te=n.RG16UI),U===n.UNSIGNED_INT&&(te=n.RG32UI),U===n.BYTE&&(te=n.RG8I),U===n.SHORT&&(te=n.RG16I),U===n.INT&&(te=n.RG32I)),g===n.RGBA){const Me=j?Ks:Ze.getTransfer(z);U===n.FLOAT&&(te=n.RGBA32F),U===n.HALF_FLOAT&&(te=n.RGBA16F),U===n.UNSIGNED_BYTE&&(te=Me===rt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function P(E,g,U){return _(E,U)===!0||E.isFramebufferTexture&&E.minFilter!==Nt&&E.minFilter!==Vt?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function C(E){return E===Nt||E===Zl||E===br?n.NEAREST:n.LINEAR}function O(E){const g=E.target;g.removeEventListener("dispose",O),S(g),g.isVideoTexture&&f.delete(g)}function q(E){const g=E.target;g.removeEventListener("dispose",q),R(g)}function S(E){const g=i.get(E);if(g.__webglInit===void 0)return;const U=E.source,z=m.get(U);if(z){const j=z[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&A(E),Object.keys(z).length===0&&m.delete(U)}i.remove(E)}function A(E){const g=i.get(E);n.deleteTexture(g.__webglTexture);const U=E.source,z=m.get(U);delete z[g.__cacheKey],o.memory.textures--}function R(E){const g=i.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(g.__webglFramebuffer[z]))for(let j=0;j<g.__webglFramebuffer[z].length;j++)n.deleteFramebuffer(g.__webglFramebuffer[z][j]);else n.deleteFramebuffer(g.__webglFramebuffer[z]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[z])}else{if(Array.isArray(g.__webglFramebuffer))for(let z=0;z<g.__webglFramebuffer.length;z++)n.deleteFramebuffer(g.__webglFramebuffer[z]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let z=0;z<g.__webglColorRenderbuffer.length;z++)g.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[z]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const U=E.textures;for(let z=0,j=U.length;z<j;z++){const te=i.get(U[z]);te.__webglTexture&&(n.deleteTexture(te.__webglTexture),o.memory.textures--),i.remove(U[z])}i.remove(E)}let I=0;function w(){I=0}function G(){const E=I;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),I+=1,E}function B(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function X(E,g){const U=i.get(E);if(E.isVideoTexture&&se(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){const z=E.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(U,E,g);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+g)}function V(E,g){const U=i.get(E);if(E.version>0&&U.__version!==E.version){xe(U,E,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+g)}function ne(E,g){const U=i.get(E);if(E.version>0&&U.__version!==E.version){xe(U,E,g);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+g)}function ie(E,g){const U=i.get(E);if(E.version>0&&U.__version!==E.version){Re(U,E,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+g)}const ue={[Po]:n.REPEAT,[on]:n.CLAMP_TO_EDGE,[Lo]:n.MIRRORED_REPEAT},_e={[Nt]:n.NEAREST,[Zl]:n.NEAREST_MIPMAP_NEAREST,[br]:n.NEAREST_MIPMAP_LINEAR,[Vt]:n.LINEAR,[Ia]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},Ue={[kg]:n.NEVER,[Kg]:n.ALWAYS,[Wg]:n.LESS,[Hf]:n.LEQUAL,[Xg]:n.EQUAL,[Yg]:n.GEQUAL,[qg]:n.GREATER,[$g]:n.NOTEQUAL};function ee(E,g,U){if(g.type===Vn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Vt||g.magFilter===Ia||g.magFilter===br||g.magFilter===Ii||g.minFilter===Vt||g.minFilter===Ia||g.minFilter===br||g.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),U?(n.texParameteri(E,n.TEXTURE_WRAP_S,ue[g.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ue[g.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ue[g.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,_e[g.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,_e[g.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(g.wrapS!==on||g.wrapT!==on)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,C(g.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,C(g.minFilter)),g.minFilter!==Nt&&g.minFilter!==Vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Ue[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Nt||g.minFilter!==br&&g.minFilter!==Ii||g.type===Vn&&e.has("OES_texture_float_linear")===!1||a===!1&&g.type===Kr&&e.has("OES_texture_half_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function ce(E,g){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",O));const z=g.source;let j=m.get(z);j===void 0&&(j={},m.set(z,j));const te=B(g);if(te!==E.__cacheKey){j[te]===void 0&&(j[te]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),j[te].usedTimes++;const Me=j[E.__cacheKey];Me!==void 0&&(j[E.__cacheKey].usedTimes--,Me.usedTimes===0&&A(g)),E.__cacheKey=te,E.__webglTexture=j[te].texture}return U}function xe(E,g,U){let z=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(z=n.TEXTURE_3D);const j=ce(E,g),te=g.source;t.bindTexture(z,E.__webglTexture,n.TEXTURE0+U);const Me=i.get(te);if(te.version!==Me.__version||j===!0){t.activeTexture(n.TEXTURE0+U);const me=Ze.getPrimaries(Ze.workingColorSpace),oe=g.colorSpace===si?null:Ze.getPrimaries(g.colorSpace),fe=g.colorSpace===si||me===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ce=T(g)&&d(g.image)===!1;let le=p(g.image,Ce,!1,r.maxTextureSize);le=re(g,le);const et=d(le)||a,ze=s.convert(g.format,g.colorSpace);let ye=s.convert(g.type),Se=L(g.internalFormat,ze,ye,g.colorSpace,g.isVideoTexture);ee(z,g,et);let be;const We=g.mipmaps,Oe=a&&g.isVideoTexture!==!0&&Se!==zf,st=Me.__version===void 0||j===!0,N=te.dataReady,ge=P(g,le,et);if(g.isDepthTexture)Se=n.DEPTH_COMPONENT,a?g.type===Vn?Se=n.DEPTH_COMPONENT32F:g.type===oi?Se=n.DEPTH_COMPONENT24:g.type===Ni?Se=n.DEPTH24_STENCIL8:Se=n.DEPTH_COMPONENT16:g.type===Vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Fi&&Se===n.DEPTH_COMPONENT&&g.type!==el&&g.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=oi,ye=s.convert(g.type)),g.format===gr&&Se===n.DEPTH_COMPONENT&&(Se=n.DEPTH_STENCIL,g.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Ni,ye=s.convert(g.type))),st&&(Oe?t.texStorage2D(n.TEXTURE_2D,1,Se,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Se,le.width,le.height,0,ze,ye,null));else if(g.isDataTexture)if(We.length>0&&et){Oe&&st&&t.texStorage2D(n.TEXTURE_2D,ge,Se,We[0].width,We[0].height);for(let $=0,de=We.length;$<de;$++)be=We[$],Oe?N&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,be.width,be.height,ze,ye,be.data):t.texImage2D(n.TEXTURE_2D,$,Se,be.width,be.height,0,ze,ye,be.data);g.generateMipmaps=!1}else Oe?(st&&t.texStorage2D(n.TEXTURE_2D,ge,Se,le.width,le.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,ze,ye,le.data)):t.texImage2D(n.TEXTURE_2D,0,Se,le.width,le.height,0,ze,ye,le.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Oe&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Se,We[0].width,We[0].height,le.depth);for(let $=0,de=We.length;$<de;$++)be=We[$],g.format!==ln?ze!==null?Oe?N&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,be.width,be.height,le.depth,ze,be.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Se,be.width,be.height,le.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,be.width,be.height,le.depth,ze,ye,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,Se,be.width,be.height,le.depth,0,ze,ye,be.data)}else{Oe&&st&&t.texStorage2D(n.TEXTURE_2D,ge,Se,We[0].width,We[0].height);for(let $=0,de=We.length;$<de;$++)be=We[$],g.format!==ln?ze!==null?Oe?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,be.width,be.height,ze,be.data):t.compressedTexImage2D(n.TEXTURE_2D,$,Se,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?N&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,be.width,be.height,ze,ye,be.data):t.texImage2D(n.TEXTURE_2D,$,Se,be.width,be.height,0,ze,ye,be.data)}else if(g.isDataArrayTexture)Oe?(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Se,le.width,le.height,le.depth),N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ze,ye,le.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,le.width,le.height,le.depth,0,ze,ye,le.data);else if(g.isData3DTexture)Oe?(st&&t.texStorage3D(n.TEXTURE_3D,ge,Se,le.width,le.height,le.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ze,ye,le.data)):t.texImage3D(n.TEXTURE_3D,0,Se,le.width,le.height,le.depth,0,ze,ye,le.data);else if(g.isFramebufferTexture){if(st)if(Oe)t.texStorage2D(n.TEXTURE_2D,ge,Se,le.width,le.height);else{let $=le.width,de=le.height;for(let ve=0;ve<ge;ve++)t.texImage2D(n.TEXTURE_2D,ve,Se,$,de,0,ze,ye,null),$>>=1,de>>=1}}else if(We.length>0&&et){if(Oe&&st){const $=ae(We[0]);t.texStorage2D(n.TEXTURE_2D,ge,Se,$.width,$.height)}for(let $=0,de=We.length;$<de;$++)be=We[$],Oe?N&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,ze,ye,be):t.texImage2D(n.TEXTURE_2D,$,Se,ze,ye,be);g.generateMipmaps=!1}else if(Oe){if(st){const $=ae(le);t.texStorage2D(n.TEXTURE_2D,ge,Se,$.width,$.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ze,ye,le)}else t.texImage2D(n.TEXTURE_2D,0,Se,ze,ye,le);_(g,et)&&y(z),Me.__version=te.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Re(E,g,U){if(g.image.length!==6)return;const z=ce(E,g),j=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+U);const te=i.get(j);if(j.version!==te.__version||z===!0){t.activeTexture(n.TEXTURE0+U);const Me=Ze.getPrimaries(Ze.workingColorSpace),me=g.colorSpace===si?null:Ze.getPrimaries(g.colorSpace),oe=g.colorSpace===si||Me===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const fe=g.isCompressedTexture||g.image[0].isCompressedTexture,Ce=g.image[0]&&g.image[0].isDataTexture,le=[];for(let $=0;$<6;$++)!fe&&!Ce?le[$]=p(g.image[$],!1,!0,r.maxCubemapSize):le[$]=Ce?g.image[$].image:g.image[$],le[$]=re(g,le[$]);const et=le[0],ze=d(et)||a,ye=s.convert(g.format,g.colorSpace),Se=s.convert(g.type),be=L(g.internalFormat,ye,Se,g.colorSpace),We=a&&g.isVideoTexture!==!0,Oe=te.__version===void 0||z===!0,st=j.dataReady;let N=P(g,et,ze);ee(n.TEXTURE_CUBE_MAP,g,ze);let ge;if(fe){We&&Oe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,N,be,et.width,et.height);for(let $=0;$<6;$++){ge=le[$].mipmaps;for(let de=0;de<ge.length;de++){const ve=ge[de];g.format!==ln?ye!==null?We?st&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,0,0,ve.width,ve.height,ye,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,be,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?st&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,0,0,ve.width,ve.height,ye,Se,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,be,ve.width,ve.height,0,ye,Se,ve.data)}}}else{if(ge=g.mipmaps,We&&Oe){ge.length>0&&N++;const $=ae(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,N,be,$.width,$.height)}for(let $=0;$<6;$++)if(Ce){We?st&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,le[$].width,le[$].height,ye,Se,le[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,be,le[$].width,le[$].height,0,ye,Se,le[$].data);for(let de=0;de<ge.length;de++){const Xe=ge[de].image[$].image;We?st&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,0,0,Xe.width,Xe.height,ye,Se,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,be,Xe.width,Xe.height,0,ye,Se,Xe.data)}}else{We?st&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ye,Se,le[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,be,ye,Se,le[$]);for(let de=0;de<ge.length;de++){const ve=ge[de];We?st&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,0,0,ye,Se,ve.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,be,ye,Se,ve.image[$])}}}_(g,ze)&&y(n.TEXTURE_CUBE_MAP),te.__version=j.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Ae(E,g,U,z,j,te){const Me=s.convert(U.format,U.colorSpace),me=s.convert(U.type),oe=L(U.internalFormat,Me,me,U.colorSpace);if(!i.get(g).__hasExternalTextures){const Ce=Math.max(1,g.width>>te),le=Math.max(1,g.height>>te);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,te,oe,Ce,le,g.depth,0,Me,me,null):t.texImage2D(j,te,oe,Ce,le,0,Me,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Q(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,j,i.get(U).__webglTexture,0,k(g)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,j,i.get(U).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(E,g,U){if(n.bindRenderbuffer(n.RENDERBUFFER,E),g.depthBuffer&&!g.stencilBuffer){let z=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(U||Q(g)){const j=g.depthTexture;j&&j.isDepthTexture&&(j.type===Vn?z=n.DEPTH_COMPONENT32F:j.type===oi&&(z=n.DEPTH_COMPONENT24));const te=k(g);Q(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,z,g.width,g.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,te,z,g.width,g.height)}else n.renderbufferStorage(n.RENDERBUFFER,z,g.width,g.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(g.depthBuffer&&g.stencilBuffer){const z=k(g);U&&Q(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,z,n.DEPTH24_STENCIL8,g.width,g.height):Q(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,z,n.DEPTH24_STENCIL8,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const z=g.textures;for(let j=0;j<z.length;j++){const te=z[j],Me=s.convert(te.format,te.colorSpace),me=s.convert(te.type),oe=L(te.internalFormat,Me,me,te.colorSpace),fe=k(g);U&&Q(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,oe,g.width,g.height):Q(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,oe,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,oe,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qe(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),X(g.depthTexture,0);const z=i.get(g.depthTexture).__webglTexture,j=k(g);if(g.depthTexture.format===Fi)Q(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0);else if(g.depthTexture.format===gr)Q(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function De(E){const g=i.get(E),U=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");qe(g.__webglFramebuffer,E)}else if(U){g.__webglDepthbuffer=[];for(let z=0;z<6;z++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[z]),g.__webglDepthbuffer[z]=n.createRenderbuffer(),Te(g.__webglDepthbuffer[z],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),Te(g.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function x(E,g,U){const z=i.get(E);g!==void 0&&Ae(z.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&De(E)}function D(E){const g=E.texture,U=i.get(E),z=i.get(g);E.addEventListener("dispose",q);const j=E.textures,te=E.isWebGLCubeRenderTarget===!0,Me=j.length>1,me=d(E)||a;if(Me||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=g.version,o.memory.textures++),te){U.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[oe]=[];for(let fe=0;fe<g.mipmaps.length;fe++)U.__webglFramebuffer[oe][fe]=n.createFramebuffer()}else U.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(a&&g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let oe=0;oe<g.mipmaps.length;oe++)U.__webglFramebuffer[oe]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(Me)if(r.drawBuffers)for(let oe=0,fe=j.length;oe<fe;oe++){const Ce=i.get(j[oe]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&Q(E)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let oe=0;oe<j.length;oe++){const fe=j[oe];U.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[oe]);const Ce=s.convert(fe.format,fe.colorSpace),le=s.convert(fe.type),et=L(fe.internalFormat,Ce,le,fe.colorSpace,E.isXRRenderTarget===!0),ze=k(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,et,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,U.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Te(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),ee(n.TEXTURE_CUBE_MAP,g,me);for(let oe=0;oe<6;oe++)if(a&&g.mipmaps&&g.mipmaps.length>0)for(let fe=0;fe<g.mipmaps.length;fe++)Ae(U.__webglFramebuffer[oe][fe],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else Ae(U.__webglFramebuffer[oe],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);_(g,me)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let oe=0,fe=j.length;oe<fe;oe++){const Ce=j[oe],le=i.get(Ce);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),ee(n.TEXTURE_2D,Ce,me),Ae(U.__webglFramebuffer,E,Ce,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),_(Ce,me)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?oe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,z.__webglTexture),ee(oe,g,me),a&&g.mipmaps&&g.mipmaps.length>0)for(let fe=0;fe<g.mipmaps.length;fe++)Ae(U.__webglFramebuffer[fe],E,g,n.COLOR_ATTACHMENT0,oe,fe);else Ae(U.__webglFramebuffer,E,g,n.COLOR_ATTACHMENT0,oe,0);_(g,me)&&y(oe),t.unbindTexture()}E.depthBuffer&&De(E)}function F(E){const g=d(E)||a,U=E.textures;for(let z=0,j=U.length;z<j;z++){const te=U[z];if(_(te,g)){const Me=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,me=i.get(te).__webglTexture;t.bindTexture(Me,me),y(Me),t.unbindTexture()}}}function J(E){if(a&&E.samples>0&&Q(E)===!1){const g=E.textures,U=E.width,z=E.height;let j=n.COLOR_BUFFER_BIT;const te=[],Me=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(E),oe=g.length>1;if(oe)for(let fe=0;fe<g.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let fe=0;fe<g.length;fe++){te.push(n.COLOR_ATTACHMENT0+fe),E.depthBuffer&&te.push(Me);const Ce=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Ce===!1&&(E.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),oe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[fe]),Ce===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Me])),oe){const le=i.get(g[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,U,z,0,0,U,z,j,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let fe=0;fe<g.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,me.__webglColorRenderbuffer[fe]);const Ce=i.get(g[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,Ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function k(E){return Math.min(r.maxSamples,E.samples)}function Q(E){const g=i.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function se(E){const g=o.render.frame;f.get(E)!==g&&(f.set(E,g),E.update())}function re(E,g){const U=E.colorSpace,z=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Io||U!==di&&U!==si&&(Ze.getTransfer(U)===rt?a===!1?e.has("EXT_sRGB")===!0&&z===ln?(E.format=Io,E.minFilter=Vt,E.generateMipmaps=!1):g=Vf.sRGBToLinear(g):(z!==ln||j!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),g}function ae(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=w,this.setTexture2D=X,this.setTexture2DArray=V,this.setTexture3D=ne,this.setTextureCube=ie,this.rebindTextures=x,this.setupRenderTarget=D,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Q}function eS(n,e,t){const i=t.isWebGL2;function r(s,o=si){let a;const l=Ze.getTransfer(o);if(s===ui)return n.UNSIGNED_BYTE;if(s===Uf)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Nf)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Lg)return n.BYTE;if(s===Ig)return n.SHORT;if(s===el)return n.UNSIGNED_SHORT;if(s===Df)return n.INT;if(s===oi)return n.UNSIGNED_INT;if(s===Vn)return n.FLOAT;if(s===Kr)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Dg)return n.ALPHA;if(s===ln)return n.RGBA;if(s===Ug)return n.LUMINANCE;if(s===Ng)return n.LUMINANCE_ALPHA;if(s===Fi)return n.DEPTH_COMPONENT;if(s===gr)return n.DEPTH_STENCIL;if(s===Io)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Fg)return n.RED;if(s===Ff)return n.RED_INTEGER;if(s===Og)return n.RG;if(s===Of)return n.RG_INTEGER;if(s===Bf)return n.RGBA_INTEGER;if(s===Da||s===Ua||s===Na||s===Fa)if(l===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Da)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Da)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ua)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Na)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Jl||s===Ql||s===ec||s===tc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Jl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ql)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ec)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===tc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===nc||s===ic)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===nc)return l===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ic)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===rc||s===sc||s===ac||s===oc||s===lc||s===cc||s===uc||s===fc||s===hc||s===dc||s===pc||s===mc||s===gc||s===_c)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===rc)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===sc)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ac)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===oc)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===lc)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===cc)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===uc)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===fc)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===hc)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===dc)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===pc)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===mc)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===gc)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===_c)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Oa||s===vc||s===xc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Oa)return l===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===vc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===xc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Bg||s===Mc||s===Sc||s===Ec)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Oa)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Mc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Sc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ec)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ni?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class tS extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ls extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nS={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,i),d=this._getHandJoint(u,M);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),m=.02,v=.005;u.inputState.pinching&&h>m+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ls;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const iS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rS=`
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

}`;class sS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new zt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Kn({extensions:{fragDepth:!0},vertexShader:iS,fragmentShader:rS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Tn(new rs(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class aS extends vr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,m=null,v=null;const M=new sS,p=t.getContextAttributes();let d=null,T=null;const _=[],y=[],L=new $e;let P=null;const C=new an;C.layers.enable(1),C.viewport=new Tt;const O=new an;O.layers.enable(2),O.viewport=new Tt;const q=[C,O],S=new tS;S.layers.enable(1),S.layers.enable(2);let A=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ce=_[ee];return ce===void 0&&(ce=new uo,_[ee]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ee){let ce=_[ee];return ce===void 0&&(ce=new uo,_[ee]=ce),ce.getGripSpace()},this.getHand=function(ee){let ce=_[ee];return ce===void 0&&(ce=new uo,_[ee]=ce),ce.getHandSpace()};function I(ee){const ce=y.indexOf(ee.inputSource);if(ce===-1)return;const xe=_[ce];xe!==void 0&&(xe.update(ee.inputSource,ee.frame,u||o),xe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function w(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",w),r.removeEventListener("inputsourceschange",G);for(let ee=0;ee<_.length;ee++){const ce=y[ee];ce!==null&&(y[ee]=null,_[ee].disconnect(ce))}A=null,R=null,M.reset(),e.setRenderTarget(d),m=null,h=null,f=null,r=null,T=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(ee){u=ee},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",w),r.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ce={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new Bi(m.framebufferWidth,m.framebufferHeight,{format:ln,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ce=null,xe=null,Re=null;p.depth&&(Re=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=p.stencil?gr:Fi,xe=p.stencil?Ni:oi);const Ae={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Ae),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new Bi(h.textureWidth,h.textureHeight,{format:ln,type:ui,depthTexture:new nh(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Te=e.properties.get(T);Te.__ignoreDepthValues=h.ignoreDepthValues}T.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ue.setContext(r),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G(ee){for(let ce=0;ce<ee.removed.length;ce++){const xe=ee.removed[ce],Re=y.indexOf(xe);Re>=0&&(y[Re]=null,_[Re].disconnect(xe))}for(let ce=0;ce<ee.added.length;ce++){const xe=ee.added[ce];let Re=y.indexOf(xe);if(Re===-1){for(let Te=0;Te<_.length;Te++)if(Te>=y.length){y.push(xe),Re=Te;break}else if(y[Te]===null){y[Te]=xe,Re=Te;break}if(Re===-1)break}const Ae=_[Re];Ae&&Ae.connect(xe)}}const B=new K,X=new K;function V(ee,ce,xe){B.setFromMatrixPosition(ce.matrixWorld),X.setFromMatrixPosition(xe.matrixWorld);const Re=B.distanceTo(X),Ae=ce.projectionMatrix.elements,Te=xe.projectionMatrix.elements,qe=Ae[14]/(Ae[10]-1),De=Ae[14]/(Ae[10]+1),x=(Ae[9]+1)/Ae[5],D=(Ae[9]-1)/Ae[5],F=(Ae[8]-1)/Ae[0],J=(Te[8]+1)/Te[0],k=qe*F,Q=qe*J,se=Re/(-F+J),re=se*-F;ce.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(re),ee.translateZ(se),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const ae=qe+se,E=De+se,g=k-re,U=Q+(Re-re),z=x*De/E*ae,j=D*De/E*ae;ee.projectionMatrix.makePerspective(g,U,z,j,ae,E),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function ne(ee,ce){ce===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ce.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;M.texture!==null&&(ee.near=M.depthNear,ee.far=M.depthFar),S.near=O.near=C.near=ee.near,S.far=O.far=C.far=ee.far,(A!==S.near||R!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,R=S.far,C.near=A,C.far=R,O.near=A,O.far=R,C.updateProjectionMatrix(),O.updateProjectionMatrix(),ee.updateProjectionMatrix());const ce=ee.parent,xe=S.cameras;ne(S,ce);for(let Re=0;Re<xe.length;Re++)ne(xe[Re],ce);xe.length===2?V(S,C,O):S.projectionMatrix.copy(C.projectionMatrix),ie(ee,S,ce)};function ie(ee,ce,xe){xe===null?ee.matrix.copy(ce.matrixWorld):(ee.matrix.copy(xe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ce.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Do*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)},this.hasDepthSensing=function(){return M.texture!==null};let ue=null;function _e(ee,ce){if(c=ce.getViewerPose(u||o),v=ce,c!==null){const xe=c.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let Re=!1;xe.length!==S.cameras.length&&(S.cameras.length=0,Re=!0);for(let Te=0;Te<xe.length;Te++){const qe=xe[Te];let De=null;if(m!==null)De=m.getViewport(qe);else{const D=f.getViewSubImage(h,qe);De=D.viewport,Te===0&&(e.setRenderTargetTextures(T,D.colorTexture,h.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(T))}let x=q[Te];x===void 0&&(x=new an,x.layers.enable(Te),x.viewport=new Tt,q[Te]=x),x.matrix.fromArray(qe.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.projectionMatrix.fromArray(qe.projectionMatrix),x.projectionMatrixInverse.copy(x.projectionMatrix).invert(),x.viewport.set(De.x,De.y,De.width,De.height),Te===0&&(S.matrix.copy(x.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Re===!0&&S.cameras.push(x)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Te=f.getDepthInformation(xe[0]);Te&&Te.isValid&&Te.texture&&M.init(e,Te,r.renderState)}}for(let xe=0;xe<_.length;xe++){const Re=y[xe],Ae=_[xe];Re!==null&&Ae!==void 0&&Ae.update(Re,ce,u||o)}M.render(e,S),ue&&ue(ee,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),v=null}const Ue=new eh;Ue.setAnimationLoop(_e),this.setAnimationLoop=function(ee){ue=ee},this.dispose=function(){}}}const bi=new Yn,oS=new dt;function lS(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,jf(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,T,_,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),c(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,y)):d.isMeshMatcapMaterial?(s(p,d),v(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),M(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,T,_):d.isSpriteMaterial?u(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Wt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Wt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const T=e.get(d),_=T.envMap,y=T.envMapRotation;if(_&&(p.envMap.value=_,bi.copy(y),bi.x*=-1,bi.y*=-1,bi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),p.envMapRotation.value.setFromMatrix4(oS.makeRotationFromEuler(bi)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const L=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*L,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,T,_){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*T,p.scale.value=_*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,T){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Wt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,d){d.matcap&&(p.matcap.value=d.matcap)}function M(p,d){const T=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function cS(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,_){const y=_.program;i.uniformBlockBinding(T,y)}function u(T,_){let y=r[T.id];y===void 0&&(v(T),y=c(T),r[T.id]=y,T.addEventListener("dispose",p));const L=_.program;i.updateUBOMapping(T,L);const P=e.render.frame;s[T.id]!==P&&(h(T),s[T.id]=P)}function c(T){const _=f();T.__bindingPointIndex=_;const y=n.createBuffer(),L=T.__size,P=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,L,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const _=r[T.id],y=T.uniforms,L=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let P=0,C=y.length;P<C;P++){const O=Array.isArray(y[P])?y[P]:[y[P]];for(let q=0,S=O.length;q<S;q++){const A=O[q];if(m(A,P,q,L)===!0){const R=A.__offset,I=Array.isArray(A.value)?A.value:[A.value];let w=0;for(let G=0;G<I.length;G++){const B=I[G],X=M(B);typeof B=="number"||typeof B=="boolean"?(A.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,R+w,A.__data)):B.isMatrix3?(A.__data[0]=B.elements[0],A.__data[1]=B.elements[1],A.__data[2]=B.elements[2],A.__data[3]=0,A.__data[4]=B.elements[3],A.__data[5]=B.elements[4],A.__data[6]=B.elements[5],A.__data[7]=0,A.__data[8]=B.elements[6],A.__data[9]=B.elements[7],A.__data[10]=B.elements[8],A.__data[11]=0):(B.toArray(A.__data,w),w+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,R,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,_,y,L){const P=T.value,C=_+"_"+y;if(L[C]===void 0)return typeof P=="number"||typeof P=="boolean"?L[C]=P:L[C]=P.clone(),!0;{const O=L[C];if(typeof P=="number"||typeof P=="boolean"){if(O!==P)return L[C]=P,!0}else if(O.equals(P)===!1)return O.copy(P),!0}return!1}function v(T){const _=T.uniforms;let y=0;const L=16;for(let C=0,O=_.length;C<O;C++){const q=Array.isArray(_[C])?_[C]:[_[C]];for(let S=0,A=q.length;S<A;S++){const R=q[S],I=Array.isArray(R.value)?R.value:[R.value];for(let w=0,G=I.length;w<G;w++){const B=I[w],X=M(B),V=y%L;V!==0&&L-V<X.boundary&&(y+=L-V),R.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=y,y+=X.storage}}}const P=y%L;return P>0&&(y+=L-P),T.__size=y,T.__cache={},this}function M(T){const _={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(_.boundary=4,_.storage=4):T.isVector2?(_.boundary=8,_.storage=8):T.isVector3||T.isColor?(_.boundary=16,_.storage=12):T.isVector4?(_.boundary=16,_.storage=16):T.isMatrix3?(_.boundary=48,_.storage=48):T.isMatrix4?(_.boundary=64,_.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),_}function p(T){const _=T.target;_.removeEventListener("dispose",p);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class lh{constructor(e={}){const{canvas:t=Zg(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),v=new Int32Array(4);let M=null,p=null;const d=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vn,this._useLegacyLights=!1,this.toneMapping=ci,this.toneMappingExposure=1;const _=this;let y=!1,L=0,P=0,C=null,O=-1,q=null;const S=new Tt,A=new Tt;let R=null;const I=new Je(0);let w=0,G=t.width,B=t.height,X=1,V=null,ne=null;const ie=new Tt(0,0,G,B),ue=new Tt(0,0,G,B);let _e=!1;const Ue=new Qf;let ee=!1,ce=!1,xe=null;const Re=new dt,Ae=new $e,Te=new K,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return C===null?X:1}let x=i;function D(b,H){for(let Y=0;Y<b.length;Y++){const Z=b[Y],W=t.getContext(Z,H);if(W!==null)return W}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qo}`),t.addEventListener("webglcontextlost",st,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",ge,!1),x===null){const H=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&H.shift(),x=D(H,b),x===null)throw D(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&x instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),x.getShaderPrecisionFormat===void 0&&(x.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let F,J,k,Q,se,re,ae,E,g,U,z,j,te,Me,me,oe,fe,Ce,le,et,ze,ye,Se,be;function We(){F=new mx(x),J=new cx(x,F,e),F.init(J),ye=new eS(x,F,J),k=new JM(x,F,J),Q=new vx(x),se=new BM,re=new QM(x,F,k,se,J,ye,Q),ae=new fx(_),E=new px(_),g=new T_(x,J),Se=new ox(x,F,g,J),U=new gx(x,g,Q,Se),z=new Ex(x,U,g,Q),le=new Sx(x,J,re),oe=new ux(se),j=new OM(_,ae,E,F,J,Se,oe),te=new lS(_,se),Me=new HM,me=new qM(F,J),Ce=new ax(_,ae,E,k,z,h,l),fe=new ZM(_,z,J),be=new cS(x,Q,J,k),et=new lx(x,F,Q,J),ze=new _x(x,F,Q,J),Q.programs=j.programs,_.capabilities=J,_.extensions=F,_.properties=se,_.renderLists=Me,_.shadowMap=fe,_.state=k,_.info=Q}We();const Oe=new aS(_,x);this.xr=Oe,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const b=F.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=F.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(G,B,!1))},this.getSize=function(b){return b.set(G,B)},this.setSize=function(b,H,Y=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,B=H,t.width=Math.floor(b*X),t.height=Math.floor(H*X),Y===!0&&(t.style.width=b+"px",t.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(G*X,B*X).floor()},this.setDrawingBufferSize=function(b,H,Y){G=b,B=H,X=Y,t.width=Math.floor(b*Y),t.height=Math.floor(H*Y),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(S)},this.getViewport=function(b){return b.copy(ie)},this.setViewport=function(b,H,Y,Z){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,H,Y,Z),k.viewport(S.copy(ie).multiplyScalar(X).round())},this.getScissor=function(b){return b.copy(ue)},this.setScissor=function(b,H,Y,Z){b.isVector4?ue.set(b.x,b.y,b.z,b.w):ue.set(b,H,Y,Z),k.scissor(A.copy(ue).multiplyScalar(X).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(b){k.setScissorTest(_e=b)},this.setOpaqueSort=function(b){V=b},this.setTransparentSort=function(b){ne=b},this.getClearColor=function(b){return b.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(b=!0,H=!0,Y=!0){let Z=0;if(b){let W=!1;if(C!==null){const Ee=C.texture.format;W=Ee===Bf||Ee===Of||Ee===Ff}if(W){const Ee=C.texture.type,we=Ee===ui||Ee===oi||Ee===el||Ee===Ni||Ee===Uf||Ee===Nf,Pe=Ce.getClearColor(),Ie=Ce.getClearAlpha(),ke=Pe.r,Ne=Pe.g,Be=Pe.b;we?(m[0]=ke,m[1]=Ne,m[2]=Be,m[3]=Ie,x.clearBufferuiv(x.COLOR,0,m)):(v[0]=ke,v[1]=Ne,v[2]=Be,v[3]=Ie,x.clearBufferiv(x.COLOR,0,v))}else Z|=x.COLOR_BUFFER_BIT}H&&(Z|=x.DEPTH_BUFFER_BIT),Y&&(Z|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Me.dispose(),me.dispose(),se.dispose(),ae.dispose(),E.dispose(),z.dispose(),Se.dispose(),be.dispose(),j.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",jt),Oe.removeEventListener("sessionend",nt),xe&&(xe.dispose(),xe=null),It.stop()};function st(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=Q.autoReset,H=fe.enabled,Y=fe.autoUpdate,Z=fe.needsUpdate,W=fe.type;We(),Q.autoReset=b,fe.enabled=H,fe.autoUpdate=Y,fe.needsUpdate=Z,fe.type=W}function ge(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function $(b){const H=b.target;H.removeEventListener("dispose",$),de(H)}function de(b){ve(b),se.remove(b)}function ve(b){const H=se.get(b).programs;H!==void 0&&(H.forEach(function(Y){j.releaseProgram(Y)}),b.isShaderMaterial&&j.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,Y,Z,W,Ee){H===null&&(H=qe);const we=W.isMesh&&W.matrixWorld.determinant()<0,Pe=uh(b,H,Y,Z,W);k.setMaterial(Z,we);let Ie=Y.index,ke=1;if(Z.wireframe===!0){if(Ie=U.getWireframeAttribute(Y),Ie===void 0)return;ke=2}const Ne=Y.drawRange,Be=Y.attributes.position;let ct=Ne.start*ke,Xt=(Ne.start+Ne.count)*ke;Ee!==null&&(ct=Math.max(ct,Ee.start*ke),Xt=Math.min(Xt,(Ee.start+Ee.count)*ke)),Ie!==null?(ct=Math.max(ct,0),Xt=Math.min(Xt,Ie.count)):Be!=null&&(ct=Math.max(ct,0),Xt=Math.min(Xt,Be.count));const gt=Xt-ct;if(gt<0||gt===1/0)return;Se.setup(W,Z,Pe,Y,Ie);let Cn,ot=et;if(Ie!==null&&(Cn=g.get(Ie),ot=ze,ot.setIndex(Cn)),W.isMesh)Z.wireframe===!0?(k.setLineWidth(Z.wireframeLinewidth*De()),ot.setMode(x.LINES)):ot.setMode(x.TRIANGLES);else if(W.isLine){let He=Z.linewidth;He===void 0&&(He=1),k.setLineWidth(He*De()),W.isLineSegments?ot.setMode(x.LINES):W.isLineLoop?ot.setMode(x.LINE_LOOP):ot.setMode(x.LINE_STRIP)}else W.isPoints?ot.setMode(x.POINTS):W.isSprite&&ot.setMode(x.TRIANGLES);if(W.isBatchedMesh)ot.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)ot.renderInstances(ct,gt,W.count);else if(Y.isInstancedBufferGeometry){const He=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ma=Math.min(Y.instanceCount,He);ot.renderInstances(ct,gt,ma)}else ot.render(ct,gt)};function Xe(b,H,Y){b.transparent===!0&&b.side===Gn&&b.forceSinglePass===!1?(b.side=Wt,b.needsUpdate=!0,as(b,H,Y),b.side=hi,b.needsUpdate=!0,as(b,H,Y),b.side=Gn):as(b,H,Y)}this.compile=function(b,H,Y=null){Y===null&&(Y=b),p=me.get(Y),p.init(),T.push(p),Y.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),b!==Y&&b.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights(_._useLegacyLights);const Z=new Set;return b.traverse(function(W){const Ee=W.material;if(Ee)if(Array.isArray(Ee))for(let we=0;we<Ee.length;we++){const Pe=Ee[we];Xe(Pe,Y,W),Z.add(Pe)}else Xe(Ee,Y,W),Z.add(Ee)}),T.pop(),p=null,Z},this.compileAsync=function(b,H,Y=null){const Z=this.compile(b,H,Y);return new Promise(W=>{function Ee(){if(Z.forEach(function(we){se.get(we).currentProgram.isReady()&&Z.delete(we)}),Z.size===0){W(b);return}setTimeout(Ee,10)}F.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let tt=null;function Mt(b){tt&&tt(b)}function jt(){It.stop()}function nt(){It.start()}const It=new eh;It.setAnimationLoop(Mt),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(b){tt=b,Oe.setAnimationLoop(b),b===null?It.stop():It.start()},Oe.addEventListener("sessionstart",jt),Oe.addEventListener("sessionend",nt),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(H),H=Oe.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,H,C),p=me.get(b,T.length),p.init(),T.push(p),Re.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Ue.setFromProjectionMatrix(Re),ce=this.localClippingEnabled,ee=oe.init(this.clippingPlanes,ce),M=Me.get(b,d.length),M.init(),d.push(M),pn(b,H,0,_.sortObjects),M.finish(),_.sortObjects===!0&&M.sort(V,ne),this.info.render.frame++,ee===!0&&oe.beginShadows();const Y=p.state.shadowsArray;if(fe.render(Y,b,H),ee===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1)&&Ce.render(M,b),p.setupLights(_._useLegacyLights),H.isArrayCamera){const Z=H.cameras;for(let W=0,Ee=Z.length;W<Ee;W++){const we=Z[W];rl(M,b,we,we.viewport)}}else rl(M,b,H);C!==null&&(re.updateMultisampleRenderTarget(C),re.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(_,b,H),Se.resetDefaultState(),O=-1,q=null,T.pop(),T.length>0?p=T[T.length-1]:p=null,d.pop(),d.length>0?M=d[d.length-1]:M=null};function pn(b,H,Y,Z){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ue.intersectsSprite(b)){Z&&Te.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Re);const we=z.update(b),Pe=b.material;Pe.visible&&M.push(b,we,Pe,Y,Te.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ue.intersectsObject(b))){const we=z.update(b),Pe=b.material;if(Z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Te.copy(b.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Te.copy(we.boundingSphere.center)),Te.applyMatrix4(b.matrixWorld).applyMatrix4(Re)),Array.isArray(Pe)){const Ie=we.groups;for(let ke=0,Ne=Ie.length;ke<Ne;ke++){const Be=Ie[ke],ct=Pe[Be.materialIndex];ct&&ct.visible&&M.push(b,we,ct,Y,Te.z,Be)}}else Pe.visible&&M.push(b,we,Pe,Y,Te.z,null)}}const Ee=b.children;for(let we=0,Pe=Ee.length;we<Pe;we++)pn(Ee[we],H,Y,Z)}function rl(b,H,Y,Z){const W=b.opaque,Ee=b.transmissive,we=b.transparent;p.setupLightsView(Y),ee===!0&&oe.setGlobalState(_.clippingPlanes,Y),Ee.length>0&&ch(W,Ee,H,Y),Z&&k.viewport(S.copy(Z)),W.length>0&&ss(W,H,Y),Ee.length>0&&ss(Ee,H,Y),we.length>0&&ss(we,H,Y),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function ch(b,H,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const Ee=J.isWebGL2;xe===null&&(xe=new Bi(1,1,{generateMipmaps:!0,type:F.has("EXT_color_buffer_half_float")?Kr:ui,minFilter:Ii,samples:Ee?4:0})),_.getDrawingBufferSize(Ae),Ee?xe.setSize(Ae.x,Ae.y):xe.setSize(Uo(Ae.x),Uo(Ae.y));const we=_.getRenderTarget();_.setRenderTarget(xe),_.getClearColor(I),w=_.getClearAlpha(),w<1&&_.setClearColor(16777215,.5),_.clear();const Pe=_.toneMapping;_.toneMapping=ci,ss(b,Y,Z),re.updateMultisampleRenderTarget(xe),re.updateRenderTargetMipmap(xe);let Ie=!1;for(let ke=0,Ne=H.length;ke<Ne;ke++){const Be=H[ke],ct=Be.object,Xt=Be.geometry,gt=Be.material,Cn=Be.group;if(gt.side===Gn&&ct.layers.test(Z.layers)){const ot=gt.side;gt.side=Wt,gt.needsUpdate=!0,sl(ct,Y,Z,Xt,gt,Cn),gt.side=ot,gt.needsUpdate=!0,Ie=!0}}Ie===!0&&(re.updateMultisampleRenderTarget(xe),re.updateRenderTargetMipmap(xe)),_.setRenderTarget(we),_.setClearColor(I,w),_.toneMapping=Pe}function ss(b,H,Y){const Z=H.isScene===!0?H.overrideMaterial:null;for(let W=0,Ee=b.length;W<Ee;W++){const we=b[W],Pe=we.object,Ie=we.geometry,ke=Z===null?we.material:Z,Ne=we.group;Pe.layers.test(Y.layers)&&sl(Pe,H,Y,Ie,ke,Ne)}}function sl(b,H,Y,Z,W,Ee){b.onBeforeRender(_,H,Y,Z,W,Ee),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(_,H,Y,Z,b,Ee),W.transparent===!0&&W.side===Gn&&W.forceSinglePass===!1?(W.side=Wt,W.needsUpdate=!0,_.renderBufferDirect(Y,H,Z,W,b,Ee),W.side=hi,W.needsUpdate=!0,_.renderBufferDirect(Y,H,Z,W,b,Ee),W.side=Gn):_.renderBufferDirect(Y,H,Z,W,b,Ee),b.onAfterRender(_,H,Y,Z,W,Ee)}function as(b,H,Y){H.isScene!==!0&&(H=qe);const Z=se.get(b),W=p.state.lights,Ee=p.state.shadowsArray,we=W.state.version,Pe=j.getParameters(b,W.state,Ee,H,Y),Ie=j.getProgramCacheKey(Pe);let ke=Z.programs;Z.environment=b.isMeshStandardMaterial?H.environment:null,Z.fog=H.fog,Z.envMap=(b.isMeshStandardMaterial?E:ae).get(b.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,ke===void 0&&(b.addEventListener("dispose",$),ke=new Map,Z.programs=ke);let Ne=ke.get(Ie);if(Ne!==void 0){if(Z.currentProgram===Ne&&Z.lightsStateVersion===we)return ol(b,Pe),Ne}else Pe.uniforms=j.getUniforms(b),b.onBuild(Y,Pe,_),b.onBeforeCompile(Pe,_),Ne=j.acquireProgram(Pe,Ie),ke.set(Ie,Ne),Z.uniforms=Pe.uniforms;const Be=Z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Be.clippingPlanes=oe.uniform),ol(b,Pe),Z.needsLights=hh(b),Z.lightsStateVersion=we,Z.needsLights&&(Be.ambientLightColor.value=W.state.ambient,Be.lightProbe.value=W.state.probe,Be.directionalLights.value=W.state.directional,Be.directionalLightShadows.value=W.state.directionalShadow,Be.spotLights.value=W.state.spot,Be.spotLightShadows.value=W.state.spotShadow,Be.rectAreaLights.value=W.state.rectArea,Be.ltc_1.value=W.state.rectAreaLTC1,Be.ltc_2.value=W.state.rectAreaLTC2,Be.pointLights.value=W.state.point,Be.pointLightShadows.value=W.state.pointShadow,Be.hemisphereLights.value=W.state.hemi,Be.directionalShadowMap.value=W.state.directionalShadowMap,Be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Be.spotShadowMap.value=W.state.spotShadowMap,Be.spotLightMatrix.value=W.state.spotLightMatrix,Be.spotLightMap.value=W.state.spotLightMap,Be.pointShadowMap.value=W.state.pointShadowMap,Be.pointShadowMatrix.value=W.state.pointShadowMatrix),Z.currentProgram=Ne,Z.uniformsList=null,Ne}function al(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=Os.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function ol(b,H){const Y=se.get(b);Y.outputColorSpace=H.outputColorSpace,Y.batching=H.batching,Y.instancing=H.instancing,Y.instancingColor=H.instancingColor,Y.instancingMorph=H.instancingMorph,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function uh(b,H,Y,Z,W){H.isScene!==!0&&(H=qe),re.resetTextureUnits();const Ee=H.fog,we=Z.isMeshStandardMaterial?H.environment:null,Pe=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:di,Ie=(Z.isMeshStandardMaterial?E:ae).get(Z.envMap||we),ke=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ne=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Be=!!Y.morphAttributes.position,ct=!!Y.morphAttributes.normal,Xt=!!Y.morphAttributes.color;let gt=ci;Z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(gt=_.toneMapping);const Cn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ot=Cn!==void 0?Cn.length:0,He=se.get(Z),ma=p.state.lights;if(ee===!0&&(ce===!0||b!==q)){const Zt=b===q&&Z.id===O;oe.setState(Z,b,Zt)}let at=!1;Z.version===He.__version?(He.needsLights&&He.lightsStateVersion!==ma.state.version||He.outputColorSpace!==Pe||W.isBatchedMesh&&He.batching===!1||!W.isBatchedMesh&&He.batching===!0||W.isInstancedMesh&&He.instancing===!1||!W.isInstancedMesh&&He.instancing===!0||W.isSkinnedMesh&&He.skinning===!1||!W.isSkinnedMesh&&He.skinning===!0||W.isInstancedMesh&&He.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&He.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&He.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&He.instancingMorph===!1&&W.morphTexture!==null||He.envMap!==Ie||Z.fog===!0&&He.fog!==Ee||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==oe.numPlanes||He.numIntersection!==oe.numIntersection)||He.vertexAlphas!==ke||He.vertexTangents!==Ne||He.morphTargets!==Be||He.morphNormals!==ct||He.morphColors!==Xt||He.toneMapping!==gt||J.isWebGL2===!0&&He.morphTargetsCount!==ot)&&(at=!0):(at=!0,He.__version=Z.version);let pi=He.currentProgram;at===!0&&(pi=as(Z,H,W));let ll=!1,Mr=!1,ga=!1;const At=pi.getUniforms(),mi=He.uniforms;if(k.useProgram(pi.program)&&(ll=!0,Mr=!0,ga=!0),Z.id!==O&&(O=Z.id,Mr=!0),ll||q!==b){At.setValue(x,"projectionMatrix",b.projectionMatrix),At.setValue(x,"viewMatrix",b.matrixWorldInverse);const Zt=At.map.cameraPosition;Zt!==void 0&&Zt.setValue(x,Te.setFromMatrixPosition(b.matrixWorld)),J.logarithmicDepthBuffer&&At.setValue(x,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&At.setValue(x,"isOrthographic",b.isOrthographicCamera===!0),q!==b&&(q=b,Mr=!0,ga=!0)}if(W.isSkinnedMesh){At.setOptional(x,W,"bindMatrix"),At.setOptional(x,W,"bindMatrixInverse");const Zt=W.skeleton;Zt&&(J.floatVertexTextures?(Zt.boneTexture===null&&Zt.computeBoneTexture(),At.setValue(x,"boneTexture",Zt.boneTexture,re)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(At.setOptional(x,W,"batchingTexture"),At.setValue(x,"batchingTexture",W._matricesTexture,re));const _a=Y.morphAttributes;if((_a.position!==void 0||_a.normal!==void 0||_a.color!==void 0&&J.isWebGL2===!0)&&le.update(W,Y,pi),(Mr||He.receiveShadow!==W.receiveShadow)&&(He.receiveShadow=W.receiveShadow,At.setValue(x,"receiveShadow",W.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(mi.envMap.value=Ie,mi.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Mr&&(At.setValue(x,"toneMappingExposure",_.toneMappingExposure),He.needsLights&&fh(mi,ga),Ee&&Z.fog===!0&&te.refreshFogUniforms(mi,Ee),te.refreshMaterialUniforms(mi,Z,X,B,xe),Os.upload(x,al(He),mi,re)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Os.upload(x,al(He),mi,re),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&At.setValue(x,"center",W.center),At.setValue(x,"modelViewMatrix",W.modelViewMatrix),At.setValue(x,"normalMatrix",W.normalMatrix),At.setValue(x,"modelMatrix",W.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Zt=Z.uniformsGroups;for(let va=0,dh=Zt.length;va<dh;va++)if(J.isWebGL2){const cl=Zt[va];be.update(cl,pi),be.bind(cl,pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pi}function fh(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function hh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,H,Y){se.get(b.texture).__webglTexture=H,se.get(b.depthTexture).__webglTexture=Y;const Z=se.get(b);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=Y===void 0,Z.__autoAllocateDepthBuffer||F.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,H){const Y=se.get(b);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(b,H=0,Y=0){C=b,L=H,P=Y;let Z=!0,W=null,Ee=!1,we=!1;if(b){const Ie=se.get(b);Ie.__useDefaultFramebuffer!==void 0?(k.bindFramebuffer(x.FRAMEBUFFER,null),Z=!1):Ie.__webglFramebuffer===void 0?re.setupRenderTarget(b):Ie.__hasExternalTextures&&re.rebindTextures(b,se.get(b.texture).__webglTexture,se.get(b.depthTexture).__webglTexture);const ke=b.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(we=!0);const Ne=se.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ne[H])?W=Ne[H][Y]:W=Ne[H],Ee=!0):J.isWebGL2&&b.samples>0&&re.useMultisampledRTT(b)===!1?W=se.get(b).__webglMultisampledFramebuffer:Array.isArray(Ne)?W=Ne[Y]:W=Ne,S.copy(b.viewport),A.copy(b.scissor),R=b.scissorTest}else S.copy(ie).multiplyScalar(X).floor(),A.copy(ue).multiplyScalar(X).floor(),R=_e;if(k.bindFramebuffer(x.FRAMEBUFFER,W)&&J.drawBuffers&&Z&&k.drawBuffers(b,W),k.viewport(S),k.scissor(A),k.setScissorTest(R),Ee){const Ie=se.get(b.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ie.__webglTexture,Y)}else if(we){const Ie=se.get(b.texture),ke=H||0;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Ie.__webglTexture,Y||0,ke)}O=-1},this.readRenderTargetPixels=function(b,H,Y,Z,W,Ee,we){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=se.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){k.bindFramebuffer(x.FRAMEBUFFER,Pe);try{const Ie=b.texture,ke=Ie.format,Ne=Ie.type;if(ke!==ln&&ye.convert(ke)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Ne===Kr&&(F.has("EXT_color_buffer_half_float")||J.isWebGL2&&F.has("EXT_color_buffer_float"));if(Ne!==ui&&ye.convert(Ne)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===Vn&&(J.isWebGL2||F.has("OES_texture_float")||F.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-Z&&Y>=0&&Y<=b.height-W&&x.readPixels(H,Y,Z,W,ye.convert(ke),ye.convert(Ne),Ee)}finally{const Ie=C!==null?se.get(C).__webglFramebuffer:null;k.bindFramebuffer(x.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(b,H,Y=0){const Z=Math.pow(2,-Y),W=Math.floor(H.image.width*Z),Ee=Math.floor(H.image.height*Z);re.setTexture2D(H,0),x.copyTexSubImage2D(x.TEXTURE_2D,Y,0,0,b.x,b.y,W,Ee),k.unbindTexture()},this.copyTextureToTexture=function(b,H,Y,Z=0){const W=H.image.width,Ee=H.image.height,we=ye.convert(Y.format),Pe=ye.convert(Y.type);re.setTexture2D(Y,0),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,Y.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,Y.unpackAlignment),H.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,Z,b.x,b.y,W,Ee,we,Pe,H.image.data):H.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,Z,b.x,b.y,H.mipmaps[0].width,H.mipmaps[0].height,we,H.mipmaps[0].data):x.texSubImage2D(x.TEXTURE_2D,Z,b.x,b.y,we,Pe,H.image),Z===0&&Y.generateMipmaps&&x.generateMipmap(x.TEXTURE_2D),k.unbindTexture()},this.copyTextureToTexture3D=function(b,H,Y,Z,W=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=Math.round(b.max.x-b.min.x),we=Math.round(b.max.y-b.min.y),Pe=b.max.z-b.min.z+1,Ie=ye.convert(Z.format),ke=ye.convert(Z.type);let Ne;if(Z.isData3DTexture)re.setTexture3D(Z,0),Ne=x.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)re.setTexture2DArray(Z,0),Ne=x.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,Z.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,Z.unpackAlignment);const Be=x.getParameter(x.UNPACK_ROW_LENGTH),ct=x.getParameter(x.UNPACK_IMAGE_HEIGHT),Xt=x.getParameter(x.UNPACK_SKIP_PIXELS),gt=x.getParameter(x.UNPACK_SKIP_ROWS),Cn=x.getParameter(x.UNPACK_SKIP_IMAGES),ot=Y.isCompressedTexture?Y.mipmaps[W]:Y.image;x.pixelStorei(x.UNPACK_ROW_LENGTH,ot.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,ot.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,b.min.x),x.pixelStorei(x.UNPACK_SKIP_ROWS,b.min.y),x.pixelStorei(x.UNPACK_SKIP_IMAGES,b.min.z),Y.isDataTexture||Y.isData3DTexture?x.texSubImage3D(Ne,W,H.x,H.y,H.z,Ee,we,Pe,Ie,ke,ot.data):Z.isCompressedArrayTexture?x.compressedTexSubImage3D(Ne,W,H.x,H.y,H.z,Ee,we,Pe,Ie,ot.data):x.texSubImage3D(Ne,W,H.x,H.y,H.z,Ee,we,Pe,Ie,ke,ot),x.pixelStorei(x.UNPACK_ROW_LENGTH,Be),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,ct),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Xt),x.pixelStorei(x.UNPACK_SKIP_ROWS,gt),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Cn),W===0&&Z.generateMipmaps&&x.generateMipmap(Ne),k.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?re.setTextureCube(b,0):b.isData3DTexture?re.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?re.setTexture2DArray(b,0):re.setTexture2D(b,0),k.unbindTexture()},this.resetState=function(){L=0,P=0,C=null,k.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===tl?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===ha?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class uS extends lh{}uS.prototype.isWebGL1Renderer=!0;class fS extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qo);class hS{constructor(e,t){this.effectCanvas=e,this.originalCanvas=t,this.renderer=null,this.scene=null,this.camera=null,this.material=null,this.texture=null,this.mesh=null,this.params={horizontalChromatic:70,distortion:50,speed:60,size:60,blur:60},this.time=0,this.animationId=null,this.currentImage=null,this.compareMode=!1}init(){this.scene=new fS,this.camera=new th(-1,1,1,-1,0,1),this.renderer=new lh({canvas:this.effectCanvas,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.createMaterial();const e=new rs(2,2);this.mesh=new Tn(e,this.material),this.scene.add(this.mesh),this.animate(),window.addEventListener("resize",()=>this.handleResize())}createMaterial(){this.material=new Kn({uniforms:{uTexture:{value:null},uTime:{value:0},uHorizontalChromatic:{value:.7},uDistortion:{value:.5},uSpeed:{value:.6},uSize:{value:.6},uBlur:{value:.6},uResolution:{value:new $e(1,1)},uTextureResolution:{value:new $e(1,1)}},vertexShader:`
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
      `})}loadImage(e){this.currentImage=e,this.texture&&this.texture.dispose(),this.texture=new zt(e),this.texture.needsUpdate=!0,this.material.uniforms.uTexture.value=this.texture,this.material.uniforms.uTextureResolution.value.set(e.width,e.height),this.updateCanvasSize(e.width,e.height),this.compareMode&&this.originalCanvas&&this.drawOriginalImage(e)}drawOriginalImage(e){if(!this.originalCanvas)return;const t=this.originalCanvas.getContext("2d");this.originalCanvas.width=e.width,this.originalCanvas.height=e.height,t.drawImage(e,0,0)}updateCanvasSize(e,t){const i=this.effectCanvas.parentElement;if(!i)return;const r=i.clientWidth-48,s=i.clientHeight-48,o=Math.min(r/e,s/t,1),a=Math.floor(e*o),l=Math.floor(t*o);this.effectCanvas.style.width=`${a}px`,this.effectCanvas.style.height=`${l}px`,this.renderer.setSize(e,t,!1),this.material.uniforms.uResolution.value.set(e,t),this.compareMode&&this.originalCanvas&&(this.originalCanvas.style.width=`${a}px`,this.originalCanvas.style.height=`${l}px`)}updateParams(e){this.params={...e},this.material.uniforms.uHorizontalChromatic.value=e.horizontalChromatic/100,this.material.uniforms.uDistortion.value=e.distortion/100,this.material.uniforms.uSpeed.value=e.speed/100,this.material.uniforms.uSize.value=e.size/100,this.material.uniforms.uBlur.value=e.blur/100}setCompareMode(e){this.compareMode=e,e&&this.currentImage&&this.originalCanvas&&(this.drawOriginalImage(this.currentImage),this.updateCanvasSize(this.currentImage.width,this.currentImage.height))}animate(){this.animationId=requestAnimationFrame(()=>this.animate()),this.time+=.016,this.material.uniforms.uTime.value=this.time,this.renderer.render(this.scene,this.camera)}handleResize(){this.currentImage&&this.updateCanvasSize(this.currentImage.width,this.currentImage.height)}dispose(){this.animationId&&cancelAnimationFrame(this.animationId),this.texture&&this.texture.dispose(),this.material&&this.material.dispose(),this.renderer&&this.renderer.dispose(),window.removeEventListener("resize",()=>this.handleResize())}}class bt{constructor(e){this.canvas=e,this.ctx=e.getContext("2d"),this.sourceImage=null,this.params={},this.animFrame=null,this.isAnimating=!1}loadImage(e){this.sourceImage=e,this.canvas.width=e.naturalWidth||e.width,this.canvas.height=e.naturalHeight||e.height,this.render()}updateParams(e){this.params={...this.params,...e},this.render()}render(){this.sourceImage&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.sourceImage,0,0,this.canvas.width,this.canvas.height),this.apply())}apply(){}destroy(){this.animFrame&&cancelAnimationFrame(this.animFrame)}getAvgColor(e,t,i,r,s,o,a){let l=0,u=0,c=0,f=0,h=0;const m=Math.max(0,Math.floor(t)),v=Math.max(0,Math.floor(i)),M=Math.min(o-1,Math.floor(t+r)),p=Math.min(a-1,Math.floor(i+s));for(let d=v;d<=p;d++)for(let T=m;T<=M;T++){const _=(d*o+T)*4;l+=e[_],u+=e[_+1],c+=e[_+2],f+=e[_+3],h++}return h===0?[0,0,0,255]:[l/h,u/h,c/h,f/h]}}class dS extends bt{constructor(e){super(e),this.params={intensity:50}}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,r=t.width,s=t.height,o=Math.max(2,Math.round(this.params.intensity/100*60)+2),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;e.clearRect(0,0,r,s);for(let c=0;c<s;c+=o)for(let f=0;f<r;f+=o){const[h,m,v,M]=this.getAvgColor(u,f,c,o-1,o-1,r,s);e.fillStyle=`rgba(${h|0},${m|0},${v|0},${M/255})`,e.fillRect(f,c,o,o)}}}class pS extends bt{constructor(e){super(e),this.params={intensity:50}}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,r=t.width,s=t.height,o=Math.max(4,Math.round(this.params.intensity/100*80)+4),a=Math.round(this.params.intensity/100*3)+1;e.clearRect(0,0,r,s);const l=document.createElement("canvas"),u=Math.max(4,o);l.width=Math.max(1,Math.ceil(r/u)),l.height=Math.max(1,Math.ceil(s/u));const c=l.getContext("2d");c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high",c.drawImage(i,0,0,l.width,l.height),e.imageSmoothingEnabled=!0,e.imageSmoothingQuality="high",e.drawImage(l,0,0,r,s),e.filter=`blur(${a*2}px)`,e.globalAlpha=.3,e.drawImage(i,0,0,r,s),e.filter="none",e.globalAlpha=1}}class mS extends bt{constructor(e){super(e),this.params={intensity:50}}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,r=t.width,s=t.height,o=Math.max(4,Math.round(this.params.intensity/100*56)+8),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;e.clearRect(0,0,r,s);for(let c=0;c<s;c+=o)for(let f=0;f<r;f+=o){const[h,m,v]=this.getAvgColor(u,f,c,o-1,o-1,r,s),M=h|0,p=m|0,d=v|0;e.fillStyle=`rgb(${M},${p},${d})`,e.fillRect(f,c,o,o),e.fillStyle="rgba(0,0,0,0.35)",e.fillRect(f+o-2,c,2,o),e.fillRect(f,c+o-2,o,2),e.fillStyle="rgba(255,255,255,0.2)",e.fillRect(f,c,o-2,2),e.fillRect(f,c,2,o-2);const T=f+o/2,_=c+o/2,y=o*.28,L=e.createRadialGradient(T-y*.3,_-y*.3,y*.1,T,_,y);L.addColorStop(0,"rgba(255,255,255,0.5)"),L.addColorStop(.5,`rgba(${M},${p},${d},0.9)`),L.addColorStop(1,"rgba(0,0,0,0.3)"),e.beginPath(),e.arc(T,_,y,0,Math.PI*2),e.fillStyle=L,e.fill()}}}class gS extends bt{constructor(e){super(e),this.params={intensity:50},this._cachedSeeds=null,this._cachedSize=-1}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,r=t.width,s=t.height,o=Math.max(8,Math.round(this.params.intensity/100*60)+8),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;this._cachedSize!==o&&(this._cachedSeeds=this._genSeeds(r,s,o),this._cachedSize=o);const c=this._cachedSeeds,f=c.map(([h,m])=>{const[v,M,p]=this.getAvgColor(u,h-o/2,m-o/2,o,o,r,s);return[v|0,M|0,p|0]});e.clearRect(0,0,r,s),this._drawVoronoi(e,c,f,r,s,o)}_genSeeds(e,t,i){const r=[],s=Math.ceil(e/i)+1,o=Math.ceil(t/i)+1;for(let a=0;a<o;a++)for(let l=0;l<s;l++){const u=i*.7,c=l*i+(this._hash(l,a,0)-.5)*u,f=a*i+(this._hash(l,a,1)-.5)*u;r.push([c,f])}return r}_hash(e,t,i){let r=Math.sin(e*127.1+t*311.7+i*74.3)*43758.5453;return r-Math.floor(r)}_drawVoronoi(e,t,i,r,s,o){const a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d"),u=l.createImageData(r,s),c=u.data;for(let p=0;p<s;p++)for(let d=0;d<r;d++){let T=1/0,_=0;const y=Math.round(d/o),L=Math.round(p/o);for(let S=-2;S<=2;S++)for(let A=-2;A<=2;A++){const R=y+A,I=L+S;if(R<0||I<0||R>=Math.ceil(r/o)+1||I>=Math.ceil(s/o)+1)continue;const w=I*(Math.ceil(r/o)+1)+R;if(w<0||w>=t.length)continue;const[G,B]=t[w],X=(d-G)**2+(p-B)**2;X<T&&(T=X,_=w)}const[P,C,O]=i[_],q=(p*r+d)*4;c[q]=P,c[q+1]=C,c[q+2]=O,c[q+3]=255}l.putImageData(u,0,0),e.drawImage(a,0,0);const f=l.getImageData(0,0,r,s).data,h=document.createElement("canvas");h.width=r,h.height=s;const m=h.getContext("2d"),v=m.createImageData(r,s),M=v.data;for(let p=1;p<s-1;p++)for(let d=1;d<r-1;d++){const T=(p*r+d)*4,_=(p*r+d+1)*4,y=((p+1)*r+d)*4;(f[T]!==f[_]||f[T+1]!==f[_+1]||f[T]!==f[y]||f[T+1]!==f[y+1])&&(M[T]=255,M[T+1]=255,M[T+2]=255,M[T+3]=200)}m.putImageData(v,0,0),e.drawImage(h,0,0)}}class _S extends bt{constructor(e){super(e),this.params={intensity:50},this._seeds=null,this._cachedSize=-1}_hash(e,t,i){let r=Math.sin(e*127.1+t*311.7+i*74.3)*43758.5453;return r-Math.floor(r)}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,r=t.width,s=t.height,o=Math.max(6,Math.round(this.params.intensity/100*50)+6),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;if(this._cachedSize!==o){this._seeds=[];const c=Math.ceil(r/o)+1,f=Math.ceil(s/o)+1;for(let h=0;h<f;h++)for(let m=0;m<c;m++){const v=o*.65,M=m*o+(this._hash(m,h,0)-.5)*v,p=h*o+(this._hash(m,h,1)-.5)*v,d=o*(.35+this._hash(m,h,2)*.3);this._seeds.push({x:M,y:p,r:d})}this._cachedSize=o}e.fillStyle="#000",e.fillRect(0,0,r,s);for(const c of this._seeds){const[f,h,m]=this.getAvgColor(u,c.x-c.r,c.y-c.r,c.r*2,c.r*2,r,s),[v,M,p]=this._boostSat(f,h,m,1.5);e.beginPath(),e.arc(c.x,c.y,c.r,0,Math.PI*2),e.fillStyle=`rgb(${v|0},${M|0},${p|0})`,e.fill()}}_boostSat(e,t,i,r){const s=Math.max(e,t,i),o=Math.min(e,t,i),a=(s+o)/2;return[Math.min(255,Math.max(0,a+(e-a)*r)),Math.min(255,Math.max(0,a+(t-a)*r)),Math.min(255,Math.max(0,a+(i-a)*r))]}}class vS extends bt{constructor(e){super(e),this.params={intensity:50},this._cachedSize=-1,this._triangles=null}_hash(e,t,i){let r=Math.sin(e*127.1+t*311.7+i*74.3)*43758.5453;return r-Math.floor(r)}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,r=t.width,s=t.height,o=Math.max(8,Math.round(this.params.intensity/100*60)+10),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;this._cachedSize!==o&&(this._triangles=this._genTriangles(r,s,o),this._cachedSize=o),e.clearRect(0,0,r,s);for(const c of this._triangles){const f=(c[0]+c[2]+c[4])/3,h=(c[1]+c[3]+c[5])/3,[m,v,M]=this.getAvgColor(u,f-o/2,h-o/2,o,o,r,s),[p,d,T]=this._boostSat(m,v,M,1.8);e.beginPath(),e.moveTo(c[0],c[1]),e.lineTo(c[2],c[3]),e.lineTo(c[4],c[5]),e.closePath(),e.fillStyle=`rgb(${p|0},${d|0},${T|0})`,e.fill()}}_genTriangles(e,t,i){const r=[],s=Math.ceil(e/i)+1,o=Math.ceil(t/i)+1,a=[];for(let l=0;l<=o;l++){a.push([]);for(let u=0;u<=s;u++){const c=(this._hash(u,l,0)-.5)*i*.7,f=(this._hash(u,l,1)-.5)*i*.7;a[l].push([u*i+c,l*i+f])}}for(let l=0;l<o;l++)for(let u=0;u<s;u++){const[c,f]=a[l][u],[h,m]=a[l][u+1],[v,M]=a[l+1][u],[p,d]=a[l+1][u+1];r.push([c,f,h,m,v,M]),r.push([h,m,p,d,v,M])}return r}_boostSat(e,t,i,r){const s=Math.max(e,t,i),o=Math.min(e,t,i),a=(s+o)/2;return[Math.min(255,Math.max(0,a+(e-a)*r)),Math.min(255,Math.max(0,a+(t-a)*r)),Math.min(255,Math.max(0,a+(i-a)*r))]}}class xS extends bt{constructor(e){super(e),this.params={intensity:50}}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,r=t.width,s=t.height,o=Math.max(20,Math.round(this.params.intensity/100*120)+20),a=document.createElement("canvas");a.width=r,a.height=s,a.getContext("2d").drawImage(i,0,0,r,s),e.clearRect(0,0,r,s);for(let u=0;u<s;u+=o)for(let c=0;c<r;c+=o){const f=Math.min(o,r-c),h=Math.min(o,s-u);e.save(),e.beginPath(),e.rect(c,u,f,h),e.clip(),e.transform(1.08,.04,-.04,1.08,c-c*.08+f*.02,u-u*.08+h*.02),e.drawImage(a,0,0,r,s),e.setTransform(1,0,0,1,0,0);const m=e.createLinearGradient(c,u,c+f,u+h);m.addColorStop(0,"rgba(255,255,255,0.18)"),m.addColorStop(.4,"rgba(255,255,255,0.04)"),m.addColorStop(1,"rgba(0,0,0,0.12)"),e.fillStyle=m,e.fillRect(c,u,f,h),e.restore(),e.strokeStyle="rgba(0,0,0,0.6)",e.lineWidth=1,e.strokeRect(c+.5,u+.5,f-1,h-1)}}}class MS extends bt{constructor(e){super(e),this.params={intensity:50}}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,r=t.width,s=t.height,o=Math.max(16,Math.round(this.params.intensity/100*100)+16),a=o*.12,l=document.createElement("canvas");l.width=r,l.height=s;const u=l.getContext("2d");u.drawImage(i,0,0,r,s),u.getImageData(0,0,r,s).data,e.clearRect(0,0,r,s),e.filter="blur(2px)",e.drawImage(i,0,0,r,s),e.filter="none";for(let c=0;c<s;c+=o)for(let f=0;f<r;f+=o){const h=Math.min(o,r-f),m=Math.min(o,s-c),v=f+h/2,M=c+m/2;e.save(),e.beginPath(),this._roundRect(e,f+1,c+1,h-2,m-2,a),e.clip();const p=Math.sin(v/r*Math.PI*2)*o*.15,d=Math.cos(M/s*Math.PI*2)*o*.15;e.drawImage(l,p,d,r,s),e.fillStyle="rgba(255,255,255,0.06)",e.fillRect(f,c,h,m);const T=e.createLinearGradient(f,c,f,c+m*.4);T.addColorStop(0,"rgba(255,255,255,0.25)"),T.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=T,e.fillRect(f,c,h,m*.4),e.restore(),e.save(),e.beginPath(),this._roundRect(e,f+.5,c+.5,h-1,m-1,a),e.strokeStyle="rgba(255,255,255,0.25)",e.lineWidth=1,e.stroke(),e.restore()}}_roundRect(e,t,i,r,s,o){e.moveTo(t+o,i),e.lineTo(t+r-o,i),e.quadraticCurveTo(t+r,i,t+r,i+o),e.lineTo(t+r,i+s-o),e.quadraticCurveTo(t+r,i+s,t+r-o,i+s),e.lineTo(t+o,i+s),e.quadraticCurveTo(t,i+s,t,i+s-o),e.lineTo(t,i+o),e.quadraticCurveTo(t,i,t+o,i),e.closePath()}}class SS extends bt{constructor(e){super(e),this.params={intensity:50}}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,r=t.width,s=t.height,o=Math.max(6,Math.round(this.params.intensity/100*60)+6),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;e.clearRect(0,0,r,s);const c=o*2,f=Math.sqrt(3)*o,h=c*.75,m=f,v=Math.ceil(r/h)+1,M=Math.ceil(s/m)+1;for(let p=0;p<M;p++)for(let d=0;d<v;d++){const T=d%2===0?0:f/2,_=d*h,y=p*m+T,[L,P,C]=this.getAvgColor(u,_-o,y-o,o*2,o*2,r,s);e.beginPath();for(let O=0;O<6;O++){const q=Math.PI/3*O-Math.PI/6,S=_+o*Math.cos(q),A=y+o*Math.sin(q);O===0?e.moveTo(S,A):e.lineTo(S,A)}e.closePath(),e.fillStyle=`rgb(${L|0},${P|0},${C|0})`,e.fill(),e.strokeStyle="rgba(0,0,0,0.2)",e.lineWidth=.5,e.stroke()}}}class ES extends bt{constructor(e){super(e),this.params={intensity:50}}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,r=t.width,s=t.height,o=Math.max(10,Math.round(this.params.intensity/100*70)+10),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;e.clearRect(0,0,r,s),e.filter="blur(4px) brightness(0.5)",e.drawImage(i,0,0,r,s),e.filter="none";const c=Math.ceil(r/o)+1,f=Math.ceil(s/o)+1;for(let h=0;h<f;h++)for(let m=0;m<c;m++){const v=m*o+o/2,M=h*o+o/2,[p,d,T]=this.getAvgColor(u,v-o/2,M-o/2,o,o,r,s);e.save(),e.translate(v,M),e.beginPath();for(let y=0;y<10;y++){const L=Math.PI/5*y-Math.PI/2,P=y%2===0?o*.48:o*.22,C=Math.cos(L)*P,O=Math.sin(L)*P;y===0?e.moveTo(C,O):e.lineTo(C,O)}e.closePath();const _=e.createRadialGradient(-o*.15,-o*.15,0,0,0,o*.5);_.addColorStop(0,`rgba(${Math.min(255,(p|0)+60)},${Math.min(255,(d|0)+60)},${Math.min(255,(T|0)+60)},1)`),_.addColorStop(.5,`rgba(${p|0},${d|0},${T|0},0.9)`),_.addColorStop(1,`rgba(${Math.max(0,(p|0)-40)},${Math.max(0,(d|0)-40)},${Math.max(0,(T|0)-40)},0.8)`),e.fillStyle=_,e.fill(),e.strokeStyle="rgba(0,0,0,0.4)",e.lineWidth=.8,e.stroke(),e.restore()}}}class yS extends bt{constructor(e){super(e),this.params={mode:0,intensity:30,center:50}}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,r=t.width,s=t.height,{mode:o,intensity:a,center:l}=this.params,u=l/100*r,c=l/100*s,f=Math.max(1,Math.round(a/100*24)),h=a/100*.08,m=a/100*.12;e.clearRect(0,0,r,s),e.globalAlpha=1/f;for(let v=0;v<f;v++){const M=v/(f-1||1)-.5;if(e.save(),e.translate(u,c),o===0)e.rotate(M*h*2);else{const p=1+M*m*2;e.scale(p,p)}e.translate(-u,-c),e.drawImage(i,0,0,r,s),e.restore()}e.globalAlpha=1}}class TS extends bt{constructor(e){super(e),this.params={length:30,direction:0}}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,r=t.width,s=t.height,{length:o,direction:a}=this.params,l=Math.max(1,Math.round(o/100*30)),u=a*Math.PI/180,c=Math.cos(u),f=Math.sin(u),h=o/100*Math.max(r,s)*.15;e.clearRect(0,0,r,s),e.globalAlpha=1/l;for(let m=0;m<l;m++){const v=(m/(l-1||1)-.5)*2,M=c*v*h,p=f*v*h;e.drawImage(i,M,p,r,s)}e.globalAlpha=1}}class bS extends bt{constructor(e){super(e),this.params={strength:2.9}}apply(){const{width:e,height:t}=this.canvas,i=this.ctx,r=i.getImageData(0,0,e,t),s=r.data,o=new Uint8ClampedArray(s.length),a=Math.max(.1,this.params.strength/10*8+.5);for(let l=0;l<t;l++)for(let u=0;u<e;u++){const c=(l*e+u)*4,f=u>0?(l*e+(u-1))*4:c,h=l>0?((l-1)*e+u)*4:c,m=(s[c]-s[f]+s[c]-s[h])*a*.5+128,v=(s[c+1]-s[f+1]+s[c+1]-s[h+1])*a*.5+128,M=(s[c+2]-s[f+2]+s[c+2]-s[h+2])*a*.5+128,p=.299*m+.587*v+.114*M;o[c]=p,o[c+1]=p,o[c+2]=p,o[c+3]=255}for(let l=0;l<o.length;l+=4){const u=o[l];o[l]=Math.min(255,u*1.05),o[l+1]=Math.min(255,u*.97),o[l+2]=Math.min(255,u*.88)}r.data.set(o),i.putImageData(r,0,0)}updateParams(e){this.params={...this.params,strength:e.strength??this.params.strength},this.render()}}class AS extends bt{constructor(e){super(e),this.params={colorModel:2,pattern:2,period:12.7,angle:75,antiAlias:16,turbulence:0,blocksize:-1,angleBoost:0}}apply(){const{width:e,height:t}=this.canvas,i=this.ctx,s=i.getImageData(0,0,e,t).data,o=i.createImageData(e,t),a=o.data,l=Math.max(2,this.params.period),u=(this.params.angle+this.params.angleBoost*10)*Math.PI/180,c=this.params.turbulence*l*.3,f=Math.pow(2,this.params.blocksize),h=Math.cos(u),m=Math.sin(u),v=(p,d)=>{const T=Math.min(e-1,Math.max(0,Math.round(p))),y=(Math.min(t-1,Math.max(0,Math.round(d)))*e+T)*4;return[s[y],s[y+1],s[y+2],s[y+3]]},M=this.params.pattern;for(let p=0;p<t;p++)for(let d=0;d<e;d++){let T=0,_=0;if(c>0){const ie=Math.sin((d+p*.7)*.1)*c;T=ie,_=ie*.6}const y=(d+T)*h-(p+_)*m,L=(d+T)*m+(p+_)*h,P=Math.floor(y/l)*l+l*.5,C=Math.floor(L/l)*l+l*.5,O=P*h+C*m,q=-P*m+C*h,[S,A,R]=v(O,q),I=(.299*S+.587*A+.114*R)/255,w=(y%l+l)%l/l,G=(L%l+l)%l/l,B=w-.5,X=G-.5;let V=!1;if(M===1)V=Math.abs(B)<I*.5*f;else if(M===0){const ie=I*.5*f;V=B*B+X*X<ie*ie}else{const ie=I*.5*f;V=Math.abs(B)<ie&&Math.abs(X)<ie}const ne=(p*e+d)*4;if(this.params.colorModel===0){const ie=V?0:255;a[ne]=a[ne+1]=a[ne+2]=ie,a[ne+3]=255}else if(this.params.colorModel===1){const ie=V?1:0;a[ne]=Math.round(S*ie),a[ne+1]=Math.round(A*ie),a[ne+2]=Math.round(R*ie),a[ne+3]=255}else{const ie=V?20:240;a[ne]=a[ne+1]=a[ne+2]=ie,a[ne+3]=255}}i.putImageData(o,0,0)}updateParams(e){this.params={...this.params,...e},this.render()}}class wS extends bt{constructor(e){super(e),this.params={render:2,detailRadius:10.6,detailThreshold:10,shadingSteps:10,shadingSmoothness:10,edgeThreshold:1,edgeWidth:2.5,edgeOpacity:.26}}apply(){const{width:e,height:t}=this.canvas,i=this.ctx,s=i.getImageData(0,0,e,t).data,o=Math.max(2,Math.round(this.params.shadingSteps)),a=this.params.shadingSmoothness*.5,l=Math.max(1,Math.round(this.params.edgeWidth)),u=this.params.edgeThreshold*30,c=this.params.edgeOpacity,f=this.params.render,h=new Uint8ClampedArray(s.length);for(let T=0;T<s.length;T+=4){for(let _=0;_<3;_++){const y=s[T+_],L=Math.round(y/255*(o-1))/(o-1)*255;h[T+_]=Math.min(255,L+(y-L)*a/(a+5))}h[T+3]=255}const m=new Float32Array(e*t);for(let T=0;T<e*t;T++){const _=T*4;m[T]=.299*s[_]+.587*s[_+1]+.114*s[_+2]}const v=new Uint8ClampedArray(e*t);for(let T=1;T<t-1;T++)for(let _=1;_<e-1;_++){const y=T*e+_,L=-m[y-e-1]+m[y-e+1]-2*m[y-1]+2*m[y+1]-m[y+e-1]+m[y+e+1],P=-m[y-e-1]-2*m[y-e]-m[y-e+1]+m[y+e-1]+2*m[y+e]+m[y+e+1];v[y]=Math.sqrt(L*L+P*P)>u?255:0}const M=new Uint8ClampedArray(v.length);if(l>0)for(let T=0;T<t;T++)for(let _=0;_<e;_++){let y=!1;for(let L=-l;L<=l&&!y;L++)for(let P=-l;P<=l&&!y;P++){const C=_+P,O=T+L;C>=0&&C<e&&O>=0&&O<t&&v[O*e+C]&&(y=!0)}M[T*e+_]=y?255:0}const p=i.createImageData(e,t),d=p.data;for(let T=0;T<e*t;T++){const _=T*4,y=M[T]>0;if(f===0)d[_]=h[_],d[_+1]=h[_+1],d[_+2]=h[_+2],d[_+3]=255;else if(f===1){const L=y?0:255;d[_]=d[_+1]=d[_+2]=L,d[_+3]=255}else y?(d[_]=Math.round(h[_]*(1-c)),d[_+1]=Math.round(h[_+1]*(1-c)),d[_+2]=Math.round(h[_+2]*(1-c))):(d[_]=h[_],d[_+1]=h[_+1],d[_+2]=h[_+2]),d[_+3]=255}i.putImageData(p,0,0)}updateParams(e){this.params={...this.params,...e},this.render()}}class CS extends bt{constructor(e){super(e),this.params={lightColor:50,lightRange:73,lightIntensity:50}}apply(){const{width:e,height:t}=this.canvas,i=this.ctx,s=i.getImageData(0,0,e,t).data,o=i.createImageData(e,t),a=o.data,l=this.params.lightIntensity/100,u=this.params.lightRange/100,c=this.params.lightColor/100,f=e*.5,h=t*.5,m=Math.max(e,t)*u*.8,v=200+c*55,M=180+(1-Math.abs(c-.5)*2)*40,p=255-c*80;for(let d=0;d<t;d++)for(let T=0;T<e;T++){const _=(d*e+T)*4,y=Math.sqrt((T-f)**2+(d-h)**2),L=Math.exp(-(y*y)/(2*m*m))*l*1.2,P=s[_],C=s[_+1],O=s[_+2],q=Math.min(1,L*v/255),S=Math.min(1,L*M/255),A=Math.min(1,L*p/255),R=P/255,I=C/255,w=O/255,G=(2*R*q+R*R*(1-2*q))*255,B=(2*I*S+I*I*(1-2*S))*255,X=(2*w*A+w*w*(1-2*A))*255;a[_]=Math.min(255,Math.max(0,P+(G-P)*L*2)),a[_+1]=Math.min(255,Math.max(0,C+(B-C)*L*2)),a[_+2]=Math.min(255,Math.max(0,O+(X-O)*L*2)),a[_+3]=255}i.putImageData(o,0,0)}updateParams(e){this.params={...this.params,...e},this.render()}}class RS extends bt{constructor(e){super(e),this.params={comicType:0,color1:300,color2:300,gridNum:.14}}hsvToRgb(e,t,i){e=(e%360+360)%360;const r=i*t,s=r*(1-Math.abs(e/60%2-1)),o=i-r;let a=0,l=0,u=0;return e<60?(a=r,l=s,u=0):e<120?(a=s,l=r,u=0):e<180?(a=0,l=r,u=s):e<240?(a=0,l=s,u=r):e<300?(a=s,l=0,u=r):(a=r,l=0,u=s),[(a+o)*255,(l+o)*255,(u+o)*255]}apply(){const{width:e,height:t}=this.canvas,i=this.ctx,s=i.getImageData(0,0,e,t).data,o=i.createImageData(e,t),a=o.data,l=Math.max(2,Math.round(this.params.gridNum*30+3)),u=this.params.comicType===1,[c,f,h]=this.hsvToRgb(this.params.color1,.8,.9),[m,v,M]=this.hsvToRgb(this.params.color2,.6,.7);for(let p=0;p<t;p++)for(let d=0;d<e;d++){const T=(p*e+d)*4,_=(.299*s[T]+.587*s[T+1]+.114*s[T+2])/255,y=d%l/l,L=p%l/l,P=y-.5,C=L-.5,O=_*.55,q=P*P+C*C<O*O,A=(d+p)%l/l<(1-_)*.6&&_<.7,R=d%l===0||p%l===0;let I,w,G;if(_>.85?I=w=G=255:_>.5?q?I=w=G=30:I=w=G=240:_>.2?A?I=w=G=20:I=w=G=220:I=w=G=15,R&&this.params.gridNum>.02&&(I=w=G=Math.min(I,80)),u){const B=_;I=Math.round(I*(c/255*B+m/255*(1-B))*1.2),w=Math.round(w*(f/255*B+v/255*(1-B))*1.2),G=Math.round(G*(h/255*B+M/255*(1-B))*1.2)}a[T]=Math.min(255,Math.max(0,I)),a[T+1]=Math.min(255,Math.max(0,w)),a[T+2]=Math.min(255,Math.max(0,G)),a[T+3]=255}i.putImageData(o,0,0)}updateParams(e){this.params={...this.params,...e},this.render()}}const PS={class:"app-body"},LS={__name:"App",setup(n){const e=ft("dark");function t(R){e.value=R}const i=ft("wave-blur"),r=ft(!1),s=ft(!1),o=ft(null),a=ft(0),l=ft(0);let u=null,c=null,f=null;const h={"wave-blur":{name:"WaveBlurring",nameZh:"波形模糊",EffectClass:null,defaults:{horizontalChromatic:70,distortion:50,speed:60,size:60,blur:60},params:[{key:"horizontalChromatic",label:"AdjustHorizontalChromatic",desc:"水平色差强度",min:0,max:100},{key:"distortion",label:"AdjustDistortion",desc:"扭曲程度",min:0,max:100},{key:"speed",label:"AdjustSpeed",desc:"动画速度",min:0,max:100},{key:"size",label:"AdjustSize",desc:"波形尺寸",min:0,max:100},{key:"blur",label:"AdjustBlur",desc:"模糊强度",min:0,max:100}]},"directional-blur":{name:"Directional Blur",nameZh:"定向模糊",EffectClass:TS,defaults:{length:30,direction:0},params:[{key:"length",label:"Blur Length",desc:"模糊长度",min:0,max:100},{key:"direction",label:"Blur Direction",desc:"模糊方向（角度，0=水平）",min:0,max:360,step:1}]},"radial-blur":{name:"Radial Blur",nameZh:"径向模糊",EffectClass:yS,defaults:{mode:0,intensity:30,center:50},params:[{key:"mode",label:"Mode",desc:"0 = 旋转模糊  /  1 = 缩放模糊",min:0,max:1,step:1},{key:"intensity",label:"Intensity",desc:"模糊强度",min:0,max:100},{key:"center",label:"Center",desc:"中心位置 (0=左上  100=右下)",min:0,max:100}]},"basic-mosaic":{name:"Basic Mosaic",nameZh:"基础马赛克",EffectClass:dS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"马赛克块大小",min:1,max:100}]},"blur-mosaic-fx":{name:"Blur Mosaic",nameZh:"模糊马赛克",EffectClass:pS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"模糊程度",min:1,max:100}]},"brick-mosaic":{name:"Brick Mosaic",nameZh:"砖块马赛克",EffectClass:mS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"砖块大小",min:1,max:100}]},"colorful-mosaic-1":{name:"Colorful MosaicI",nameZh:"彩色马赛克 I",EffectClass:gS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"晶格大小",min:1,max:100}]},"colorful-mosaic-2":{name:"Colorful MosaicII",nameZh:"彩色马赛克 II",EffectClass:_S,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"气泡大小",min:1,max:100}]},"colorful-mosaic-3":{name:"Colorful MosaicIII",nameZh:"彩色马赛克 III",EffectClass:vS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"三角片大小",min:1,max:100}]},"glass-mosaic-1":{name:"Glass MosaicI",nameZh:"玻璃马赛克 I",EffectClass:xS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"玻璃格大小",min:1,max:100}]},"glass-mosaic-2":{name:"Glass MosaicII",nameZh:"玻璃马赛克 II",EffectClass:MS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"磨砂格大小",min:1,max:100}]},"hexagon-mosaic":{name:"Hexagon Mosaic",nameZh:"六边形马赛克",EffectClass:SS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"六边形大小",min:1,max:100}]},"star-mosaic":{name:"Star Mosaic",nameZh:"星形马赛克",EffectClass:ES,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"星形大小",min:1,max:100}]},engrave:{name:"Engrave",nameZh:"雕刻",EffectClass:bS,defaults:{strength:2.9},params:[{key:"strength",label:"Strength",desc:"雕刻强度",min:0,max:10,step:.1}]},newsprint:{name:"Newsprint",nameZh:"报纸印刷",EffectClass:AS,defaults:{colorModel:2,pattern:2,period:12.7,angle:75,antiAlias:16,turbulence:0,blocksize:-1,angleBoost:0},params:[{key:"colorModel",label:"ColorModel",desc:"颜色模式 (0=黑白 1=彩色 2=灰度半调)",min:0,max:2,step:1},{key:"pattern",label:"Pattern",desc:"图案类型 (0=圆点 1=线条 2=方块)",min:0,max:2,step:1},{key:"period",label:"Period",desc:"网格周期大小",min:1,max:30,step:.1},{key:"angle",label:"Angle",desc:"网格旋转角度",min:0,max:180,step:1},{key:"turbulence",label:"Turbulence",desc:"扰动变形",min:0,max:5,step:.1},{key:"blocksize",label:"Blocksize",desc:"图案缩放 (-2~2)",min:-2,max:2,step:.1},{key:"angleBoost",label:"AngleBoost",desc:"额外角度叠加",min:0,max:5,step:.1}]},cartoon:{name:"Cartoon",nameZh:"卡通",EffectClass:wS,defaults:{render:2,detailRadius:10.6,detailThreshold:10,shadingSteps:10,shadingSmoothness:10,edgeThreshold:1,edgeWidth:2.5,edgeOpacity:.26},params:[{key:"render",label:"Render",desc:"渲染模式 (0=仅填色 1=仅边缘 2=填色+边缘)",min:0,max:2,step:1},{key:"detailRadius",label:"DetailRadius",desc:"细节平滑半径",min:1,max:30,step:.1},{key:"detailThreshold",label:"DetailThreshold",desc:"细节阈值",min:0,max:20,step:.1},{key:"shadingSteps",label:"ShadingSteps",desc:"色阶数量",min:2,max:16,step:1},{key:"shadingSmoothness",label:"ShadingSmoothness",desc:"色阶过渡平滑",min:0,max:20,step:.1},{key:"edgeThreshold",label:"EdgeThreshold",desc:"边缘检测阈值",min:0,max:5,step:.1},{key:"edgeWidth",label:"EdgeWidth",desc:"边缘线宽度",min:0,max:8,step:.1},{key:"edgeOpacity",label:"EdgeOpacity",desc:"边缘线透明度",min:0,max:1,step:.01}]},"film-soft-light":{name:"FilmSoftLight",nameZh:"胶片柔光",EffectClass:CS,defaults:{lightColor:50,lightRange:73,lightIntensity:50},params:[{key:"lightColor",label:"LightColor",desc:"光色偏移 (0=冷蓝 100=暖橙)",min:0,max:100},{key:"lightRange",label:"LightRange",desc:"光晕扩散范围",min:0,max:100},{key:"lightIntensity",label:"LightIntensity",desc:"光晕强度",min:0,max:100}]},comic:{name:"Comic",nameZh:"漫画",EffectClass:RS,defaults:{comicType:0,color1:300,color2:300,gridNum:.14},params:[{key:"comicType",label:"ComicType",desc:"漫画类型 (0=黑白 1=彩色)",min:0,max:1,step:1},{key:"color1",label:"Color1",desc:"高光色相 (0-360°)",min:0,max:360,step:1},{key:"color2",label:"Color2",desc:"阴影色相 (0-360°)",min:0,max:360,step:1},{key:"gridNum",label:"GridNum",desc:"网格密度",min:0,max:1,step:.01}]}},m=Wn(()=>h[i.value]||null),v=Wn(()=>{var R;return((R=m.value)==null?void 0:R.params)||[]}),M=Wn(()=>{for(const R of Fs)if(R.plugins.find(I=>I.id===i.value))return R.name;return""}),p=ft({...h["wave-blur"].defaults});Ds(p,R=>{u==null||u.updateParams(R),c==null||c.updateParams(R)},{deep:!0}),Ko(()=>{Lr(()=>{T("wave-blur"),L()})});function d(R,I){const w=h[R];if(!w||!I)return null;if(R==="wave-blur"){const G=new hS(I,null);return G.init(),G}else if(w.EffectClass)return new w.EffectClass(I);return null}function T(R){var w,G,B;(w=u==null?void 0:u.destroy)==null||w.call(u),(G=c==null?void 0:c.destroy)==null||G.call(c),u=null,c=null;const I=(B=o.value)==null?void 0:B.effectCanvas;u=d(R,I),f&&(u==null||u.loadImage(f)),r.value&&(_(R),y())}function _(R){var w,G;(w=c==null?void 0:c.destroy)==null||w.call(c),c=null;const I=(G=o.value)==null?void 0:G.effectCanvasCmp;c=d(R,I),f&&(c==null||c.loadImage(f))}function y(){var I;const R=(I=o.value)==null?void 0:I.originalCanvas;!R||!f||(R.width=a.value||f.naturalWidth||900,R.height=l.value||f.naturalHeight||600,R.getContext("2d").drawImage(f,0,0,R.width,R.height))}function L(){const R=new Image;R.crossOrigin="anonymous",R.src="/demo.jpg",R.onload=()=>C(R),R.onerror=()=>P()}function P(){const R=document.createElement("canvas");R.width=900,R.height=600;const I=R.getContext("2d"),w=I.createLinearGradient(0,0,900,600);w.addColorStop(0,"#101010"),w.addColorStop(1,"#1c1c1c"),I.fillStyle=w,I.fillRect(0,0,900,600),I.strokeStyle="rgba(255,255,255,.03)",I.lineWidth=1;for(let X=0;X<=900;X+=50)I.beginPath(),I.moveTo(X,0),I.lineTo(X,600),I.stroke();for(let X=0;X<=600;X+=50)I.beginPath(),I.moveTo(0,X),I.lineTo(900,X),I.stroke();const G=I.createRadialGradient(450,300,20,450,300,260);G.addColorStop(0,"rgba(255,255,255,.06)"),G.addColorStop(1,"rgba(255,255,255,0)"),I.fillStyle=G,I.fillRect(0,0,900,600),I.fillStyle="rgba(255,255,255,.18)",I.font='bold 36px "Space Grotesk", sans-serif',I.textAlign="center",I.textBaseline="middle",I.fillText("KSkr",450,278),I.font='15px "Inter", sans-serif',I.fillStyle="rgba(255,255,255,.08)",I.fillText("上传图片以开始预览",450,326);const B=new Image;B.onload=()=>C(B),B.src=R.toDataURL()}function C(R){f=R,a.value=R.naturalWidth||R.width||900,l.value=R.naturalHeight||R.height||600,s.value=!0,Lr(()=>{u==null||u.loadImage(R),r.value&&(c==null||c.loadImage(R),y())})}function O(R){var G,B,X,V,ne;const I=((B=(G=R==null?void 0:R.target)==null?void 0:G.files)==null?void 0:B[0])||((V=(X=R==null?void 0:R.dataTransfer)==null?void 0:X.files)==null?void 0:V[0])||((ne=R==null?void 0:R.files)==null?void 0:ne[0]);if(!I)return;const w=new FileReader;w.onload=ie=>{const ue=new Image;ue.onload=()=>C(ue),ue.src=ie.target.result},w.readAsDataURL(I)}function q(){var R;p.value={...((R=m.value)==null?void 0:R.defaults)||{}}}function S(){r.value=!r.value,Lr(()=>{var R;r.value?(_(i.value),y()):((R=c==null?void 0:c.destroy)==null||R.call(c),c=null)})}function A(R){i.value=R.id;const I=h[R.id];I&&(p.value={...I.defaults}),Lr(()=>T(R.id))}return(R,I)=>{var w;return ht(),yt("div",{class:un(["app","theme-"+e.value])},[vt(Zp,{currentTheme:e.value,onSetTheme:t},null,8,["currentTheme"]),he("div",PS,[vt(mm,{onSelectPlugin:A}),m.value?(ht(),Ef(Um,{key:0,plugin:m.value,params:v.value,modelValue:p.value,"onUpdate:modelValue":I[0]||(I[0]=G=>p.value=G),compareMode:r.value,onReset:q,onUpload:O,onToggleCompare:S},null,8,["plugin","params","modelValue","compareMode"])):Xs("",!0),vt(Km,{ref_key:"previewArea",ref:o,compareMode:r.value,hasImage:s.value,imageWidth:a.value,imageHeight:l.value,currentCategory:M.value,currentPlugin:((w=m.value)==null?void 0:w.name)||"",onUpload:O},null,8,["compareMode","hasImage","imageWidth","imageHeight","currentCategory","currentPlugin"])])],2)}}},IS=Qr(LS,[["__scopeId","data-v-da44ae4b"]]);kp(IS).mount("#app");
