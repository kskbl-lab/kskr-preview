(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fa(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Qe={},sr=[],ln=()=>{},gu=()=>!1,Js=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Qs=n=>n.startsWith("onUpdate:"),vt=Object.assign,Oa=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},vh=Object.prototype.hasOwnProperty,Ke=(n,e)=>vh.call(n,e),Le=Array.isArray,or=n=>Kr(n)==="[object Map]",_u=n=>Kr(n)==="[object Set]",hl=n=>Kr(n)==="[object Date]",Fe=n=>typeof n=="function",lt=n=>typeof n=="string",bn=n=>typeof n=="symbol",je=n=>n!==null&&typeof n=="object",vu=n=>(je(n)||Fe(n))&&Fe(n.then)&&Fe(n.catch),xu=Object.prototype.toString,Kr=n=>xu.call(n),xh=n=>Kr(n).slice(8,-1),Mu=n=>Kr(n)==="[object Object]",Ba=n=>lt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Dr=Fa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),eo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Mh=/-\w/g,cn=eo(n=>n.replace(Mh,e=>e.slice(1).toUpperCase())),Sh=/\B([A-Z])/g,Oi=eo(n=>n.replace(Sh,"-$1").toLowerCase()),Su=eo(n=>n.charAt(0).toUpperCase()+n.slice(1)),xo=eo(n=>n?`on${Su(n)}`:""),Sn=(n,e)=>!Object.is(n,e),Mo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Eu=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Eh=n=>{const e=parseFloat(n);return isNaN(e)?n:e},yh=n=>{const e=lt(n)?Number(n):NaN;return isNaN(e)?n:e};let dl;const to=()=>dl||(dl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ar(n){if(Le(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=lt(i)?wh(i):ar(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(lt(n)||je(n))return n}const Th=/;(?![^(]*\))/g,bh=/:([^]+)/,Ah=/\/\*[^]*?\*\//g;function wh(n){const e={};return n.replace(Ah,"").split(Th).forEach(t=>{if(t){const i=t.split(bh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ri(n){let e="";if(lt(n))e=n;else if(Le(n))for(let t=0;t<n.length;t++){const i=ri(n[t]);i&&(e+=i+" ")}else if(je(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Rh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ch=Fa(Rh);function yu(n){return!!n||n===""}function Ph(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=za(n[i],e[i]);return t}function za(n,e){if(n===e)return!0;let t=hl(n),i=hl(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=bn(n),i=bn(e),t||i)return n===e;if(t=Le(n),i=Le(e),t||i)return t&&i?Ph(n,e):!1;if(t=je(n),i=je(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!za(n[a],e[a]))return!1}}return String(n)===String(e)}const Tu=n=>!!(n&&n.__v_isRef===!0),St=n=>lt(n)?n:n==null?"":Le(n)||je(n)&&(n.toString===xu||!Fe(n.toString))?Tu(n)?St(n.value):JSON.stringify(n,bu,2):String(n),bu=(n,e)=>Tu(e)?bu(n,e.value):or(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[So(i,s)+" =>"]=r,t),{})}:_u(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>So(t))}:bn(e)?So(e):je(e)&&!Le(e)&&!Mu(e)?String(e):e,So=(n,e="")=>{var t;return bn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};function Lh(n){return n==null?"initial":typeof n=="string"?n===""?" ":n:String(n)}/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mt;class Dh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Mt&&(Mt.active?(this.parent=Mt,this.index=(Mt.scopes||(Mt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Mt;try{return Mt=this,e()}finally{Mt=t}}}on(){++this._on===1&&(this.prevScope=Mt,Mt=this)}off(){if(this._on>0&&--this._on===0){if(Mt===this)Mt=this.prevScope;else{let e=Mt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Uh(){return Mt}let it;const Eo=new WeakSet;class Au{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Mt&&(Mt.active?Mt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Eo.has(this)&&(Eo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ru(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,pl(this),Cu(this);const e=it,t=un;it=this,un=!0;try{return this.fn()}finally{Pu(this),it=e,un=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Va(e);this.deps=this.depsTail=void 0,pl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Eo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ua(this)&&this.run()}get dirty(){return ua(this)}}let wu=0,Ur,Ir;function Ru(n,e=!1){if(n.flags|=8,e){n.next=Ir,Ir=n;return}n.next=Ur,Ur=n}function Ha(){wu++}function Ga(){if(--wu>0)return;if(Ir){let e=Ir;for(Ir=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ur;){let e=Ur;for(Ur=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Cu(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Pu(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Va(i),Ih(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function ua(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Lu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Lu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Gr)||(n.globalVersion=Gr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ua(n))))return;n.flags|=2;const e=n.dep,t=it,i=un;it=n,un=!0;try{Cu(n);const r=n.fn(n._value);(e.version===0||Sn(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{it=t,un=i,Pu(n),n.flags&=-3}}function Va(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Va(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Ih(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let un=!0;const Du=[];function Vn(){Du.push(un),un=!1}function kn(){const n=Du.pop();un=n===void 0?!0:n}function pl(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=it;it=void 0;try{e()}finally{it=t}}}let Gr=0;class Nh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ka{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!it||!un||it===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==it)t=this.activeLink=new Nh(it,this),it.deps?(t.prevDep=it.depsTail,it.depsTail.nextDep=t,it.depsTail=t):it.deps=it.depsTail=t,Uu(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=it.depsTail,t.nextDep=void 0,it.depsTail.nextDep=t,it.depsTail=t,it.deps===t&&(it.deps=i)}return t}trigger(e){this.version++,Gr++,this.notify(e)}notify(e){Ha();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ga()}}}function Uu(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Uu(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const fa=new WeakMap,Pi=Symbol(""),ha=Symbol(""),Vr=Symbol("");function Rt(n,e,t){if(un&&it){let i=fa.get(n);i||fa.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new ka),r.map=i,r.key=t),r.track()}}function On(n,e,t,i,r,s){const a=fa.get(n);if(!a){Gr++;return}const o=l=>{l&&l.trigger()};if(Ha(),e==="clear")a.forEach(o);else{const l=Le(n),u=l&&Ba(t);if(l&&t==="length"){const c=Number(i);a.forEach((f,d)=>{(d==="length"||d===Vr||!bn(d)&&d>=c)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),u&&o(a.get(Vr)),e){case"add":l?u&&o(a.get("length")):(o(a.get(Pi)),or(n)&&o(a.get(ha)));break;case"delete":l||(o(a.get(Pi)),or(n)&&o(a.get(ha)));break;case"set":or(n)&&o(a.get(Pi));break}}Ga()}function zi(n){const e=Ye(n);return e===n?e:(Rt(e,"iterate",Vr),en(n)?e:e.map(fn))}function no(n){return Rt(n=Ye(n),"iterate",Vr),n}function vn(n,e){return Wn(n)?hr(Li(n)?fn(e):e):fn(e)}const Fh={__proto__:null,[Symbol.iterator](){return yo(this,Symbol.iterator,n=>vn(this,n))},concat(...n){return zi(this).concat(...n.map(e=>Le(e)?zi(e):e))},entries(){return yo(this,"entries",n=>(n[1]=vn(this,n[1]),n))},every(n,e){return wn(this,"every",n,e,void 0,arguments)},filter(n,e){return wn(this,"filter",n,e,t=>t.map(i=>vn(this,i)),arguments)},find(n,e){return wn(this,"find",n,e,t=>vn(this,t),arguments)},findIndex(n,e){return wn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return wn(this,"findLast",n,e,t=>vn(this,t),arguments)},findLastIndex(n,e){return wn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return wn(this,"forEach",n,e,void 0,arguments)},includes(...n){return To(this,"includes",n)},indexOf(...n){return To(this,"indexOf",n)},join(n){return zi(this).join(n)},lastIndexOf(...n){return To(this,"lastIndexOf",n)},map(n,e){return wn(this,"map",n,e,void 0,arguments)},pop(){return Mr(this,"pop")},push(...n){return Mr(this,"push",n)},reduce(n,...e){return ml(this,"reduce",n,e)},reduceRight(n,...e){return ml(this,"reduceRight",n,e)},shift(){return Mr(this,"shift")},some(n,e){return wn(this,"some",n,e,void 0,arguments)},splice(...n){return Mr(this,"splice",n)},toReversed(){return zi(this).toReversed()},toSorted(n){return zi(this).toSorted(n)},toSpliced(...n){return zi(this).toSpliced(...n)},unshift(...n){return Mr(this,"unshift",n)},values(){return yo(this,"values",n=>vn(this,n))}};function yo(n,e,t){const i=no(n),r=i[e]();return i!==n&&!en(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Oh=Array.prototype;function wn(n,e,t,i,r,s){const a=no(n),o=a!==n&&!en(n),l=a[e];if(l!==Oh[e]){const f=l.apply(n,s);return o?fn(f):f}let u=t;a!==n&&(o?u=function(f,d){return t.call(this,vn(n,f),d,n)}:t.length>2&&(u=function(f,d){return t.call(this,f,d,n)}));const c=l.call(a,u,i);return o&&r?r(c):c}function ml(n,e,t,i){const r=no(n),s=r!==n&&!en(n);let a=t,o=!1;r!==n&&(s?(o=i.length===0,a=function(u,c,f){return o&&(o=!1,u=vn(n,u)),t.call(this,u,vn(n,c),f,n)}):t.length>3&&(a=function(u,c,f){return t.call(this,u,c,f,n)}));const l=r[e](a,...i);return o?vn(n,l):l}function To(n,e,t){const i=Ye(n);Rt(i,"iterate",Vr);const r=i[e](...t);return(r===-1||r===!1)&&$a(t[0])?(t[0]=Ye(t[0]),i[e](...t)):r}function Mr(n,e,t=[]){Vn(),Ha();const i=Ye(n)[e].apply(n,t);return Ga(),kn(),i}const Bh=Fa("__proto__,__v_isRef,__isVue"),Iu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(bn));function zh(n){bn(n)||(n=String(n));const e=Ye(this);return Rt(e,"has",n),e.hasOwnProperty(n)}class Nu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Kh:zu:s?Bu:Ou).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Le(e);if(!r){let l;if(a&&(l=Fh[t]))return l;if(t==="hasOwnProperty")return zh}const o=Reflect.get(e,t,Ct(e)?e:i);if((bn(t)?Iu.has(t):Bh(t))||(r||Rt(e,"get",t),s))return o;if(Ct(o)){const l=a&&Ba(t)?o:o.value;return r&&je(l)?pa(l):l}return je(o)?r?pa(o):Xa(o):o}}class Fu extends Nu{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=Le(e)&&Ba(t);if(!this._isShallow){const u=Wn(s);if(!en(i)&&!Wn(i)&&(s=Ye(s),i=Ye(i)),!a&&Ct(s)&&!Ct(i))return u||(s.value=i),!0}const o=a?Number(t)<e.length:Ke(e,t),l=Reflect.set(e,t,i,Ct(e)?e:r);return e===Ye(r)&&(o?Sn(i,s)&&On(e,"set",t,i):On(e,"add",t,i)),l}deleteProperty(e,t){const i=Ke(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&On(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!bn(t)||!Iu.has(t))&&Rt(e,"has",t),i}ownKeys(e){return Rt(e,"iterate",Le(e)?"length":Pi),Reflect.ownKeys(e)}}class Hh extends Nu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Gh=new Fu,Vh=new Hh,kh=new Fu(!0);const da=n=>n,os=n=>Reflect.getPrototypeOf(n);function Wh(n,e,t){return function(...i){const r=this.__v_raw,s=Ye(r),a=or(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,u=r[n](...i),c=t?da:e?hr:fn;return!e&&Rt(s,"iterate",l?ha:Pi),vt(Object.create(u),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:o?[c(f[0]),c(f[1])]:c(f),done:d}}})}}function as(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Xh(n,e){const t={get(r){const s=this.__v_raw,a=Ye(s),o=Ye(r);n||(Sn(r,o)&&Rt(a,"get",r),Rt(a,"get",o));const{has:l}=os(a),u=e?da:n?hr:fn;if(l.call(a,r))return u(s.get(r));if(l.call(a,o))return u(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Rt(Ye(r),"iterate",Pi),r.size},has(r){const s=this.__v_raw,a=Ye(s),o=Ye(r);return n||(Sn(r,o)&&Rt(a,"has",r),Rt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Ye(o),u=e?da:n?hr:fn;return!n&&Rt(l,"iterate",Pi),o.forEach((c,f)=>r.call(s,u(c),u(f),a))}};return vt(t,n?{add:as("add"),set:as("set"),delete:as("delete"),clear:as("clear")}:{add(r){const s=Ye(this),a=os(s),o=Ye(r),l=!e&&!en(r)&&!Wn(r)?o:r;return a.has.call(s,l)||Sn(r,l)&&a.has.call(s,r)||Sn(o,l)&&a.has.call(s,o)||(s.add(l),On(s,"add",l,l)),this},set(r,s){!e&&!en(s)&&!Wn(s)&&(s=Ye(s));const a=Ye(this),{has:o,get:l}=os(a);let u=o.call(a,r);u||(r=Ye(r),u=o.call(a,r));const c=l.call(a,r);return a.set(r,s),u?Sn(s,c)&&On(a,"set",r,s):On(a,"add",r,s),this},delete(r){const s=Ye(this),{has:a,get:o}=os(s);let l=a.call(s,r);l||(r=Ye(r),l=a.call(s,r)),o&&o.call(s,r);const u=s.delete(r);return l&&On(s,"delete",r,void 0),u},clear(){const r=Ye(this),s=r.size!==0,a=r.clear();return s&&On(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Wh(r,n,e)}),t}function Wa(n,e){const t=Xh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ke(t,r)&&r in i?t:i,r,s)}const qh={get:Wa(!1,!1)},$h={get:Wa(!1,!0)},Yh={get:Wa(!0,!1)};const Ou=new WeakMap,Bu=new WeakMap,zu=new WeakMap,Kh=new WeakMap;function jh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zh(n){return n.__v_skip||!Object.isExtensible(n)?0:jh(xh(n))}function Xa(n){return Wn(n)?n:qa(n,!1,Gh,qh,Ou)}function Jh(n){return qa(n,!1,kh,$h,Bu)}function pa(n){return qa(n,!0,Vh,Yh,zu)}function qa(n,e,t,i,r){if(!je(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Zh(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function Li(n){return Wn(n)?Li(n.__v_raw):!!(n&&n.__v_isReactive)}function Wn(n){return!!(n&&n.__v_isReadonly)}function en(n){return!!(n&&n.__v_isShallow)}function $a(n){return n?!!n.__v_raw:!1}function Ye(n){const e=n&&n.__v_raw;return e?Ye(e):n}function Qh(n){return!Ke(n,"__v_skip")&&Object.isExtensible(n)&&Eu(n,"__v_skip",!0),n}const fn=n=>je(n)?Xa(n):n,hr=n=>je(n)?pa(n):n;function Ct(n){return n?n.__v_isRef===!0:!1}function wt(n){return ed(n,!1)}function ed(n,e){return Ct(n)?n:new td(n,e)}class td{constructor(e,t){this.dep=new ka,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ye(e),this._value=t?e:fn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||en(e)||Wn(e);e=i?e:Ye(e),Sn(e,t)&&(this._rawValue=e,this._value=i?e:fn(e),this.dep.trigger())}}function Hu(n){return Ct(n)?n.value:n}const nd={get:(n,e,t)=>e==="__v_raw"?n:Hu(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ct(r)&&!Ct(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Gu(n){return Li(n)?n:new Proxy(n,nd)}class id{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ka(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&it!==this)return Ru(this,!0),!0}get value(){const e=this.dep.track();return Lu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function rd(n,e,t=!1){let i,r;return Fe(n)?i=n:(i=n.get,r=n.set),new id(i,r,t)}const ls={},Ns=new WeakMap;let yi;function sd(n,e=!1,t=yi){if(t){let i=Ns.get(t);i||Ns.set(t,i=[]),i.push(n)}}function od(n,e,t=Qe){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,u=b=>r?b:en(b)||r===!1||r===0?Bn(b,1):Bn(b);let c,f,d,m,M=!1,E=!1;if(Ct(n)?(f=()=>n.value,M=en(n)):Li(n)?(f=()=>u(n),M=!0):Le(n)?(E=!0,M=n.some(b=>Li(b)||en(b)),f=()=>n.map(b=>{if(Ct(b))return b.value;if(Li(b))return u(b);if(Fe(b))return l?l(b,2):b()})):Fe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){Vn();try{d()}finally{kn()}}const b=yi;yi=c;try{return l?l(n,3,[m]):n(m)}finally{yi=b}}:f=ln,e&&r){const b=f,C=r===!0?1/0:r;f=()=>Bn(b(),C)}const p=Uh(),h=()=>{c.stop(),p&&p.active&&Oa(p.effects,c)};if(s&&e){const b=e;e=(...C)=>{b(...C),h()}}let T=E?new Array(n.length).fill(ls):ls;const S=b=>{if(!(!(c.flags&1)||!c.dirty&&!b))if(e){const C=c.run();if(r||M||(E?C.some((R,w)=>Sn(R,T[w])):Sn(C,T))){d&&d();const R=yi;yi=c;try{const w=[C,T===ls?void 0:E&&T[0]===ls?[]:T,m];T=C,l?l(e,3,w):e(...w)}finally{yi=R}}}else c.run()};return o&&o(S),c=new Au(f),c.scheduler=a?()=>a(S,!1):S,m=b=>sd(b,!1,c),d=c.onStop=()=>{const b=Ns.get(c);if(b){if(l)l(b,4);else for(const C of b)C();Ns.delete(c)}},e?i?S(!0):T=c.run():a?a(S.bind(null,!0),!0):c.run(),h.pause=c.pause.bind(c),h.resume=c.resume.bind(c),h.stop=h,h}function Bn(n,e=1/0,t){if(e<=0||!je(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Ct(n))Bn(n.value,e,t);else if(Le(n))for(let i=0;i<n.length;i++)Bn(n[i],e,t);else if(_u(n)||or(n))n.forEach(i=>{Bn(i,e,t)});else if(Mu(n)){for(const i in n)Bn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Bn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jr(n,e,t,i){try{return i?n(...i):n()}catch(r){io(r,e,t)}}function hn(n,e,t,i){if(Fe(n)){const r=jr(n,e,t,i);return r&&vu(r)&&r.catch(s=>{io(s,e,t)}),r}if(Le(n)){const r=[];for(let s=0;s<n.length;s++)r.push(hn(n[s],e,t,i));return r}}function io(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Qe;if(e){let o=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const c=o.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}o=o.parent}if(s){Vn(),jr(s,null,10,[n,l,u]),kn();return}}ad(n,t,r,i,a)}function ad(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const It=[];let mn=-1;const lr=[];let ti=null,nr=0;const Vu=Promise.resolve();let Fs=null;function ma(n){const e=Fs||Vu;return n?e.then(this?n.bind(this):n):e}function ld(n){let e=mn+1,t=It.length;for(;e<t;){const i=e+t>>>1,r=It[i],s=kr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Ya(n){if(!(n.flags&1)){const e=kr(n),t=It[It.length-1];!t||!(n.flags&2)&&e>=kr(t)?It.push(n):It.splice(ld(e),0,n),n.flags|=1,ku()}}function ku(){Fs||(Fs=Vu.then(qu))}function Wu(n){Le(n)?lr.push(...n):ti&&n.id===-1?ti.splice(nr+1,0,n):n.flags&1||(lr.push(n),n.flags|=1),ku()}function gl(n,e,t=mn+1){for(;t<It.length;t++){const i=It[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;It.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Xu(n){if(lr.length){const e=[...new Set(lr)].sort((t,i)=>kr(t)-kr(i));if(lr.length=0,ti){ti.push(...e);return}for(ti=e,nr=0;nr<ti.length;nr++){const t=ti[nr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ti=null,nr=0}}const kr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function qu(n){try{for(mn=0;mn<It.length;mn++){const e=It[mn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),jr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;mn<It.length;mn++){const e=It[mn];e&&(e.flags&=-2)}mn=-1,It.length=0,Xu(),Fs=null,(It.length||lr.length)&&qu()}}let Qt=null,$u=null;function Os(n){const e=Qt;return Qt=n,$u=n&&n.type.__scopeId||null,e}function Yu(n,e=Qt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Gs(-1);const s=Os(e);let a;try{a=n(...r)}finally{Os(s),i._d&&Gs(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function cd(n,e){if(Qt===null)return n;const t=co(Qt),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=Qe]=e[r];s&&(Fe(s)&&(s={mounted:s,updated:s}),s.deep&&Bn(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function di(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Vn(),hn(l,t,8,[n.el,o,n,e]),kn())}}function ud(n,e){if(Ot){let t=Ot.provides;const i=Ot.parent&&Ot.parent.provides;i===t&&(t=Ot.provides=Object.create(i)),t[n]=e}}function Ls(n,e,t=!1){const i=el();if(i||cr){let r=cr?cr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Fe(e)?e.call(i&&i.proxy):e}}const fd=Symbol.for("v-scx"),hd=()=>Ls(fd);function Nr(n,e,t){return Ku(n,e,t)}function Ku(n,e,t=Qe){const{immediate:i,deep:r,flush:s,once:a}=t,o=vt({},t),l=e&&i||!e&&s!=="post";let u;if(qr){if(s==="sync"){const m=hd();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=ln,m.resume=ln,m.pause=ln,m}}const c=Ot;o.call=(m,M,E)=>hn(m,c,M,E);let f=!1;s==="post"?o.scheduler=m=>{Ht(m,c&&c.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(m,M)=>{M?m():Ya(m)}),o.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const d=od(n,e,o);return qr&&(u?u.push(d):l&&d()),d}function dd(n,e,t){const i=this.proxy,r=lt(n)?n.includes(".")?ju(i,n):()=>i[n]:n.bind(i,i);let s;Fe(e)?s=e:(s=e.handler,t=e);const a=Zr(this),o=Ku(r,s.bind(i),t);return a(),o}function ju(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const pd=Symbol("_vte"),Zu=n=>n.__isTeleport,gn=Symbol("_leaveCb"),Sr=Symbol("_enterCb");function md(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return oo(()=>{n.isMounted=!0}),af(()=>{n.isUnmounting=!0}),n}const Zt=[Function,Array],Ju={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Zt,onEnter:Zt,onAfterEnter:Zt,onEnterCancelled:Zt,onBeforeLeave:Zt,onLeave:Zt,onAfterLeave:Zt,onLeaveCancelled:Zt,onBeforeAppear:Zt,onAppear:Zt,onAfterAppear:Zt,onAppearCancelled:Zt},Qu=n=>{const e=n.subTree;return e.component?Qu(e.component):e},gd={name:"BaseTransition",props:Ju,setup(n,{slots:e}){const t=el(),i=md();return()=>{const r=e.default&&nf(e.default(),!0),s=r&&r.length?ef(r):t.subTree?Ja():void 0;if(!s)return;const a=Ye(n),{mode:o}=a;if(i.isLeaving)return bo(s);const l=_l(s);if(!l)return bo(s);let u=ga(l,a,i,t,f=>u=f);l.type!==Ft&&Wr(l,u);let c=t.subTree&&_l(t.subTree);if(c&&c.type!==Ft&&!Ai(c,l)&&Qu(t).type!==Ft){let f=ga(c,a,i,t);if(Wr(c,f),o==="out-in"&&l.type!==Ft)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,c=void 0},bo(s);o==="in-out"&&l.type!==Ft?f.delayLeave=(d,m,M)=>{const E=tf(i,c);E[String(c.key)]=c,d[gn]=()=>{m(),d[gn]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{M(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function ef(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Ft){e=t;break}}return e}const _d=gd;function tf(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function ga(n,e,t,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:d,onLeave:m,onAfterLeave:M,onLeaveCancelled:E,onBeforeAppear:p,onAppear:h,onAfterAppear:T,onAppearCancelled:S}=e,b=String(n.key),C=tf(t,n),R=(B,v)=>{B&&hn(B,i,9,v)},w=(B,v)=>{const A=v[1];R(B,v),Le(B)?B.every(V=>V.length<=1)&&A():B.length<=1&&A()},O={mode:a,persisted:o,beforeEnter(B){let v=l;if(!t.isMounted)if(s)v=p||l;else return;B[gn]&&B[gn](!0);const A=C[b];A&&Ai(n,A)&&A.el[gn]&&A.el[gn](),R(v,[B])},enter(B){if(C[b]===n)return;let v=u,A=c,V=f;if(!t.isMounted)if(s)v=h||u,A=T||c,V=S||f;else return;let ne=!1;B[Sr]=ee=>{ne||(ne=!0,ee?R(V,[B]):R(A,[B]),O.delayedLeave&&O.delayedLeave(),B[Sr]=void 0)};const D=B[Sr].bind(null,!1);v?w(v,[B,D]):D()},leave(B,v){const A=String(n.key);if(B[Sr]&&B[Sr](!0),t.isUnmounting)return v();R(d,[B]);let V=!1;B[gn]=D=>{V||(V=!0,v(),D?R(E,[B]):R(M,[B]),B[gn]=void 0,C[A]===n&&delete C[A])};const ne=B[gn].bind(null,!1);C[A]=n,m?w(m,[B,ne]):ne()},clone(B){const v=ga(B,e,t,i,r);return r&&r(v),v}};return O}function bo(n){if(ro(n))return n=li(n),n.children=null,n}function _l(n){if(!ro(n))return Zu(n.type)&&n.children?ef(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Fe(t.default))return t.default()}}function Wr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Wr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function nf(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===Nt?(a.patchFlag&128&&r++,i=i.concat(nf(a.children,e,o))):(e||a.type!==Ft)&&i.push(o!=null?li(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function rf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function vl(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Bs=new WeakMap;function Fr(n,e,t,i,r=!1){if(Le(n)){n.forEach((E,p)=>Fr(E,e&&(Le(e)?e[p]:e),t,i,r));return}if(Or(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Fr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?co(i.component):i.el,a=r?null:s,{i:o,r:l}=n,u=e&&e.r,c=o.refs===Qe?o.refs={}:o.refs,f=o.setupState,d=Ye(f),m=f===Qe?gu:E=>vl(c,E)?!1:Ke(d,E),M=(E,p)=>!(p&&vl(c,p));if(u!=null&&u!==l){if(xl(e),lt(u))c[u]=null,m(u)&&(f[u]=null);else if(Ct(u)){const E=e;M(u,E.k)&&(u.value=null),E.k&&(c[E.k]=null)}}if(Fe(l))jr(l,o,12,[a,c]);else{const E=lt(l),p=Ct(l);if(E||p){const h=()=>{if(n.f){const T=E?m(l)?f[l]:c[l]:M()||!n.k?l.value:c[n.k];if(r)Le(T)&&Oa(T,s);else if(Le(T))T.includes(s)||T.push(s);else if(E)c[l]=[s],m(l)&&(f[l]=c[l]);else{const S=[s];M(l,n.k)&&(l.value=S),n.k&&(c[n.k]=S)}}else E?(c[l]=a,m(l)&&(f[l]=a)):p&&(M(l,n.k)&&(l.value=a),n.k&&(c[n.k]=a))};if(a){const T=()=>{h(),Bs.delete(n)};T.id=-1,Bs.set(n,T),Ht(T,t)}else xl(n),h()}}}function xl(n){const e=Bs.get(n);e&&(e.flags|=8,Bs.delete(n))}to().requestIdleCallback;to().cancelIdleCallback;const Or=n=>!!n.type.__asyncLoader,ro=n=>n.type.__isKeepAlive;function vd(n,e){sf(n,"a",e)}function xd(n,e){sf(n,"da",e)}function sf(n,e,t=Ot){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(so(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ro(r.parent.vnode)&&Md(i,e,t,r),r=r.parent}}function Md(n,e,t,i){const r=so(e,n,i,!0);Ka(()=>{Oa(i[e],r)},t)}function so(n,e,t=Ot,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Vn();const o=Zr(t),l=hn(e,t,n,a);return o(),kn(),l});return i?r.unshift(s):r.push(s),s}}const $n=n=>(e,t=Ot)=>{(!qr||n==="sp")&&so(n,(...i)=>e(...i),t)},Sd=$n("bm"),oo=$n("m"),of=$n("bu"),Ed=$n("u"),af=$n("bum"),Ka=$n("um"),yd=$n("sp"),Td=$n("rtg"),bd=$n("rtc");function Ad(n,e=Ot){so("ec",n,e)}const wd=Symbol.for("v-ndc");function zs(n,e,t,i){let r;const s=t,a=Le(n);if(a||lt(n)){const o=a&&Li(n);let l=!1,u=!1;o&&(l=!en(n),u=Wn(n),n=no(n)),r=new Array(n.length);for(let c=0,f=n.length;c<f;c++)r[c]=e(l?u?hr(fn(n[c])):fn(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(je(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,u=o.length;l<u;l++){const c=o[l];r[l]=e(n[c],c,l,s)}}else r=[];return r}const _a=n=>n?Rf(n)?co(n):_a(n.parent):null,Br=vt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>_a(n.parent),$root:n=>_a(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>cf(n),$forceUpdate:n=>n.f||(n.f=()=>{Ya(n.update)}),$nextTick:n=>n.n||(n.n=ma.bind(n.proxy)),$watch:n=>dd.bind(n)}),Ao=(n,e)=>n!==Qe&&!n.__isScriptSetup&&Ke(n,e),Rd={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ao(i,e))return a[e]=1,i[e];if(r!==Qe&&Ke(r,e))return a[e]=2,r[e];if(Ke(s,e))return a[e]=3,s[e];if(t!==Qe&&Ke(t,e))return a[e]=4,t[e];va&&(a[e]=0)}}const u=Br[e];let c,f;if(u)return e==="$attrs"&&Rt(n.attrs,"get",""),u(n);if((c=o.__cssModules)&&(c=c[e]))return c;if(t!==Qe&&Ke(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,Ke(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ao(r,e)?(r[e]=t,!0):i!==Qe&&Ke(i,e)?(i[e]=t,!0):Ke(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==Qe&&o[0]!=="$"&&Ke(n,o)||Ao(e,o)||Ke(s,o)||Ke(i,o)||Ke(Br,o)||Ke(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ke(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ml(n){return Le(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let va=!0;function Cd(n){const e=cf(n),t=n.proxy,i=n.ctx;va=!1,e.beforeCreate&&Sl(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:u,created:c,beforeMount:f,mounted:d,beforeUpdate:m,updated:M,activated:E,deactivated:p,beforeDestroy:h,beforeUnmount:T,destroyed:S,unmounted:b,render:C,renderTracked:R,renderTriggered:w,errorCaptured:O,serverPrefetch:B,expose:v,inheritAttrs:A,components:V,directives:ne,filters:D}=e;if(u&&Pd(u,i,null),a)for(const Q in a){const H=a[Q];Fe(H)&&(i[Q]=H.bind(t))}if(r){const Q=r.call(t,t);je(Q)&&(n.data=Xa(Q))}if(va=!0,s)for(const Q in s){const H=s[Q],re=Fe(H)?H.bind(t,t):Fe(H.get)?H.get.bind(t,t):ln,oe=!Fe(H)&&Fe(H.set)?H.set.bind(t):ln,fe=Di({get:re,set:oe});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>fe.value,set:_e=>fe.value=_e})}if(o)for(const Q in o)lf(o[Q],i,t,Q);if(l){const Q=Fe(l)?l.call(t):l;Reflect.ownKeys(Q).forEach(H=>{ud(H,Q[H])})}c&&Sl(c,n,"c");function q(Q,H){Le(H)?H.forEach(re=>Q(re.bind(t))):H&&Q(H.bind(t))}if(q(Sd,f),q(oo,d),q(of,m),q(Ed,M),q(vd,E),q(xd,p),q(Ad,O),q(bd,R),q(Td,w),q(af,T),q(Ka,b),q(yd,B),Le(v))if(v.length){const Q=n.exposed||(n.exposed={});v.forEach(H=>{Object.defineProperty(Q,H,{get:()=>t[H],set:re=>t[H]=re,enumerable:!0})})}else n.exposed||(n.exposed={});C&&n.render===ln&&(n.render=C),A!=null&&(n.inheritAttrs=A),V&&(n.components=V),ne&&(n.directives=ne),B&&rf(n)}function Pd(n,e,t=ln){Le(n)&&(n=xa(n));for(const i in n){const r=n[i];let s;je(r)?"default"in r?s=Ls(r.from||i,r.default,!0):s=Ls(r.from||i):s=Ls(r),Ct(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Sl(n,e,t){hn(Le(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function lf(n,e,t,i){let r=i.includes(".")?ju(t,i):()=>t[i];if(lt(n)){const s=e[n];Fe(s)&&Nr(r,s)}else if(Fe(n))Nr(r,n.bind(t));else if(je(n))if(Le(n))n.forEach(s=>lf(s,e,t,i));else{const s=Fe(n.handler)?n.handler.bind(t):e[n.handler];Fe(s)&&Nr(r,s,n)}}function cf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(u=>Hs(l,u,a,!0)),Hs(l,e,a)),je(e)&&s.set(e,l),l}function Hs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Hs(n,s,t,!0),r&&r.forEach(a=>Hs(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Ld[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Ld={data:El,props:yl,emits:yl,methods:Pr,computed:Pr,beforeCreate:Lt,created:Lt,beforeMount:Lt,mounted:Lt,beforeUpdate:Lt,updated:Lt,beforeDestroy:Lt,beforeUnmount:Lt,destroyed:Lt,unmounted:Lt,activated:Lt,deactivated:Lt,errorCaptured:Lt,serverPrefetch:Lt,components:Pr,directives:Pr,watch:Ud,provide:El,inject:Dd};function El(n,e){return e?n?function(){return vt(Fe(n)?n.call(this,this):n,Fe(e)?e.call(this,this):e)}:e:n}function Dd(n,e){return Pr(xa(n),xa(e))}function xa(n){if(Le(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Lt(n,e){return n?[...new Set([].concat(n,e))]:e}function Pr(n,e){return n?vt(Object.create(null),n,e):e}function yl(n,e){return n?Le(n)&&Le(e)?[...new Set([...n,...e])]:vt(Object.create(null),Ml(n),Ml(e??{})):e}function Ud(n,e){if(!n)return e;if(!e)return n;const t=vt(Object.create(null),n);for(const i in e)t[i]=Lt(n[i],e[i]);return t}function uf(){return{app:null,config:{isNativeTag:gu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Id=0;function Nd(n,e){return function(i,r=null){Fe(i)||(i=vt({},i)),r!=null&&!je(r)&&(r=null);const s=uf(),a=new WeakSet,o=[];let l=!1;const u=s.app={_uid:Id++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:dp,get config(){return s.config},set config(c){},use(c,...f){return a.has(c)||(c&&Fe(c.install)?(a.add(c),c.install(u,...f)):Fe(c)&&(a.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,d){if(!l){const m=u._ceVNode||_t(i,r);return m.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(m,c,d),l=!0,u._container=c,c.__vue_app__=u,co(m.component)}},onUnmount(c){o.push(c)},unmount(){l&&(hn(o,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=cr;cr=u;try{return c()}finally{cr=f}}};return u}}let cr=null;const Fd=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${cn(e)}Modifiers`]||n[`${Oi(e)}Modifiers`];function Od(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Qe;let r=t;const s=e.startsWith("update:"),a=s&&Fd(i,e.slice(7));a&&(a.trim&&(r=t.map(c=>lt(c)?c.trim():c)),a.number&&(r=t.map(Eh)));let o,l=i[o=xo(e)]||i[o=xo(cn(e))];!l&&s&&(l=i[o=xo(Oi(e))]),l&&hn(l,n,6,r);const u=i[o+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,hn(u,n,6,r)}}const Bd=new WeakMap;function ff(n,e,t=!1){const i=t?Bd:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Fe(n)){const l=u=>{const c=ff(u,e,!0);c&&(o=!0,vt(a,c))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(je(n)&&i.set(n,null),null):(Le(s)?s.forEach(l=>a[l]=null):vt(a,s),je(n)&&i.set(n,a),a)}function ao(n,e){return!n||!Js(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ke(n,e[0].toLowerCase()+e.slice(1))||Ke(n,Oi(e))||Ke(n,e))}function Tl(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:u,renderCache:c,props:f,data:d,setupState:m,ctx:M,inheritAttrs:E}=n,p=Os(n);let h,T;try{if(t.shapeFlag&4){const b=r||i,C=b;h=xn(u.call(C,b,c,f,m,d,M)),T=o}else{const b=e;h=xn(b.length>1?b(f,{attrs:o,slots:a,emit:l}):b(f,null)),T=e.props?o:zd(o)}}catch(b){Hr.length=0,io(b,n,1),h=_t(Ft)}let S=h;if(T&&E!==!1){const b=Object.keys(T),{shapeFlag:C}=S;b.length&&C&7&&(s&&b.some(Qs)&&(T=Hd(T,s)),S=li(S,T,!1,!0))}return t.dirs&&(S=li(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&Wr(S,t.transition),h=S,Os(p),h}const zd=n=>{let e;for(const t in n)(t==="class"||t==="style"||Js(t))&&((e||(e={}))[t]=n[t]);return e},Hd=(n,e)=>{const t={};for(const i in n)(!Qs(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Gd(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?bl(i,a,u):!!a;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const d=c[f];if(hf(a,i,d)&&!ao(u,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?bl(i,a,u):!0:!!a;return!1}function bl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(hf(e,n,s)&&!ao(t,s))return!0}return!1}function hf(n,e,t){const i=n[t],r=e[t];return t==="style"&&je(i)&&je(r)?!za(i,r):i!==r}function Vd({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const df={},pf=()=>Object.create(df),mf=n=>Object.getPrototypeOf(n)===df;function kd(n,e,t,i=!1){const r={},s=pf();n.propsDefaults=Object.create(null),gf(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Jh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Wd(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Ye(r),[l]=n.propsOptions;let u=!1;if((i||a>0)&&!(a&16)){if(a&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let d=c[f];if(ao(n.emitsOptions,d))continue;const m=e[d];if(l)if(Ke(s,d))m!==s[d]&&(s[d]=m,u=!0);else{const M=cn(d);r[M]=Ma(l,o,M,m,n,!1)}else m!==s[d]&&(s[d]=m,u=!0)}}}else{gf(n,e,r,s)&&(u=!0);let c;for(const f in o)(!e||!Ke(e,f)&&((c=Oi(f))===f||!Ke(e,c)))&&(l?t&&(t[f]!==void 0||t[c]!==void 0)&&(r[f]=Ma(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Ke(e,f))&&(delete s[f],u=!0)}u&&On(n.attrs,"set","")}function gf(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Dr(l))continue;const u=e[l];let c;r&&Ke(r,c=cn(l))?!s||!s.includes(c)?t[c]=u:(o||(o={}))[c]=u:ao(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,a=!0)}if(s){const l=Ye(t),u=o||Qe;for(let c=0;c<s.length;c++){const f=s[c];t[f]=Ma(r,l,f,u[f],n,!Ke(u,f))}}return a}function Ma(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Ke(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Fe(l)){const{propsDefaults:u}=r;if(t in u)i=u[t];else{const c=Zr(r);i=u[t]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Oi(t))&&(i=!0))}return i}const Xd=new WeakMap;function _f(n,e,t=!1){const i=t?Xd:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Fe(n)){const c=f=>{l=!0;const[d,m]=_f(f,e,!0);vt(a,d),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!s&&!l)return je(n)&&i.set(n,sr),sr;if(Le(s))for(let c=0;c<s.length;c++){const f=cn(s[c]);Al(f)&&(a[f]=Qe)}else if(s)for(const c in s){const f=cn(c);if(Al(f)){const d=s[c],m=a[f]=Le(d)||Fe(d)?{type:d}:vt({},d),M=m.type;let E=!1,p=!0;if(Le(M))for(let h=0;h<M.length;++h){const T=M[h],S=Fe(T)&&T.name;if(S==="Boolean"){E=!0;break}else S==="String"&&(p=!1)}else E=Fe(M)&&M.name==="Boolean";m[0]=E,m[1]=p,(E||Ke(m,"default"))&&o.push(f)}}const u=[a,o];return je(n)&&i.set(n,u),u}function Al(n){return n[0]!=="$"&&!Dr(n)}const ja=n=>n==="_"||n==="_ctx"||n==="$stable",Za=n=>Le(n)?n.map(xn):[xn(n)],qd=(n,e,t)=>{if(e._n)return e;const i=Yu((...r)=>Za(e(...r)),t);return i._c=!1,i},vf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(ja(r))continue;const s=n[r];if(Fe(s))e[r]=qd(r,s,i);else if(s!=null){const a=Za(s);e[r]=()=>a}}},xf=(n,e)=>{const t=Za(e);n.slots.default=()=>t},Mf=(n,e,t)=>{for(const i in e)(t||!ja(i))&&(n[i]=e[i])},$d=(n,e,t)=>{const i=n.slots=pf();if(n.vnode.shapeFlag&32){const r=e._;r?(Mf(i,e,t),t&&Eu(i,"_",r,!0)):vf(e,i)}else e&&xf(n,e)},Yd=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Qe;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:Mf(r,e,t):(s=!e.$stable,vf(e,r)),a=e}else e&&(xf(n,e),a={default:1});if(s)for(const o in r)!ja(o)&&a[o]==null&&delete r[o]},Ht=Qd;function Kd(n){return jd(n)}function jd(n,e){const t=to();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:d,setScopeId:m=ln,insertStaticContent:M}=n,E=(_,P,I,K=null,z=null,j=null,ie=void 0,te=null,se=!!P.dynamicChildren)=>{if(_===P)return;_&&!Ai(_,P)&&(K=Ce(_),_e(_,z,j,!0),_=null),P.patchFlag===-2&&(se=!1,P.dynamicChildren=null);const{type:x,ref:g,shapeFlag:L}=P;switch(x){case lo:p(_,P,I,K);break;case Ft:h(_,P,I,K);break;case zr:_==null&&T(P,I,K,ie);break;case Nt:V(_,P,I,K,z,j,ie,te,se);break;default:L&1?C(_,P,I,K,z,j,ie,te,se):L&6?ne(_,P,I,K,z,j,ie,te,se):(L&64||L&128)&&x.process(_,P,I,K,z,j,ie,te,se,qe)}g!=null&&z?Fr(g,_&&_.ref,j,P||_,!P):g==null&&_&&_.ref!=null&&Fr(_.ref,null,j,_,!0)},p=(_,P,I,K)=>{if(_==null)i(P.el=o(P.children),I,K);else{const z=P.el=_.el;P.children!==_.children&&u(z,P.children)}},h=(_,P,I,K)=>{_==null?i(P.el=l(P.children||""),I,K):P.el=_.el},T=(_,P,I,K)=>{[_.el,_.anchor]=M(_.children,P,I,K,_.el,_.anchor)},S=({el:_,anchor:P},I,K)=>{let z;for(;_&&_!==P;)z=d(_),i(_,I,K),_=z;i(P,I,K)},b=({el:_,anchor:P})=>{let I;for(;_&&_!==P;)I=d(_),r(_),_=I;r(P)},C=(_,P,I,K,z,j,ie,te,se)=>{if(P.type==="svg"?ie="svg":P.type==="math"&&(ie="mathml"),_==null)R(P,I,K,z,j,ie,te,se);else{const x=_.el&&_.el._isVueCE?_.el:null;try{x&&x._beginPatch(),B(_,P,z,j,ie,te,se)}finally{x&&x._endPatch()}}},R=(_,P,I,K,z,j,ie,te)=>{let se,x;const{props:g,shapeFlag:L,transition:N,dirs:$}=_;if(se=_.el=a(_.type,j,g&&g.is,g),L&8?c(se,_.children):L&16&&O(_.children,se,null,K,z,wo(_,j),ie,te),$&&di(_,null,K,"created"),w(se,_,_.scopeId,ie,K),g){for(const Me in g)Me!=="value"&&!Dr(Me)&&s(se,Me,null,g[Me],j,K);"value"in g&&s(se,"value",null,g.value,j),(x=g.onVnodeBeforeMount)&&pn(x,K,_)}$&&di(_,null,K,"beforeMount");const J=Zd(z,N);J&&N.beforeEnter(se),i(se,P,I),((x=g&&g.onVnodeMounted)||J||$)&&Ht(()=>{try{x&&pn(x,K,_),J&&N.enter(se),$&&di(_,null,K,"mounted")}finally{}},z)},w=(_,P,I,K,z)=>{if(I&&m(_,I),K)for(let j=0;j<K.length;j++)m(_,K[j]);if(z){let j=z.subTree;if(P===j||Tf(j.type)&&(j.ssContent===P||j.ssFallback===P)){const ie=z.vnode;w(_,ie,ie.scopeId,ie.slotScopeIds,z.parent)}}},O=(_,P,I,K,z,j,ie,te,se=0)=>{for(let x=se;x<_.length;x++){const g=_[x]=te?Fn(_[x]):xn(_[x]);E(null,g,P,I,K,z,j,ie,te)}},B=(_,P,I,K,z,j,ie)=>{const te=P.el=_.el;let{patchFlag:se,dynamicChildren:x,dirs:g}=P;se|=_.patchFlag&16;const L=_.props||Qe,N=P.props||Qe;let $;if(I&&pi(I,!1),($=N.onVnodeBeforeUpdate)&&pn($,I,P,_),g&&di(P,_,I,"beforeUpdate"),I&&pi(I,!0),(L.innerHTML&&N.innerHTML==null||L.textContent&&N.textContent==null)&&c(te,""),x?v(_.dynamicChildren,x,te,I,K,wo(P,z),j):ie||H(_,P,te,null,I,K,wo(P,z),j,!1),se>0){if(se&16)A(te,L,N,I,z);else if(se&2&&L.class!==N.class&&s(te,"class",null,N.class,z),se&4&&s(te,"style",L.style,N.style,z),se&8){const J=P.dynamicProps;for(let Me=0;Me<J.length;Me++){const me=J[Me],ae=L[me],ue=N[me];(ue!==ae||me==="value")&&s(te,me,ae,ue,z,I)}}se&1&&_.children!==P.children&&c(te,P.children)}else!ie&&x==null&&A(te,L,N,I,z);(($=N.onVnodeUpdated)||g)&&Ht(()=>{$&&pn($,I,P,_),g&&di(P,_,I,"updated")},K)},v=(_,P,I,K,z,j,ie)=>{for(let te=0;te<P.length;te++){const se=_[te],x=P[te],g=se.el&&(se.type===Nt||!Ai(se,x)||se.shapeFlag&198)?f(se.el):I;E(se,x,g,null,K,z,j,ie,!0)}},A=(_,P,I,K,z)=>{if(P!==I){if(P!==Qe)for(const j in P)!Dr(j)&&!(j in I)&&s(_,j,P[j],null,z,K);for(const j in I){if(Dr(j))continue;const ie=I[j],te=P[j];ie!==te&&j!=="value"&&s(_,j,te,ie,z,K)}"value"in I&&s(_,"value",P.value,I.value,z)}},V=(_,P,I,K,z,j,ie,te,se)=>{const x=P.el=_?_.el:o(""),g=P.anchor=_?_.anchor:o("");let{patchFlag:L,dynamicChildren:N,slotScopeIds:$}=P;$&&(te=te?te.concat($):$),_==null?(i(x,I,K),i(g,I,K),O(P.children||[],I,g,z,j,ie,te,se)):L>0&&L&64&&N&&_.dynamicChildren&&_.dynamicChildren.length===N.length?(v(_.dynamicChildren,N,I,z,j,ie,te),(P.key!=null||z&&P===z.subTree)&&Sf(_,P,!0)):H(_,P,I,g,z,j,ie,te,se)},ne=(_,P,I,K,z,j,ie,te,se)=>{P.slotScopeIds=te,_==null?P.shapeFlag&512?z.ctx.activate(P,I,K,ie,se):D(P,I,K,z,j,ie,se):ee(_,P,se)},D=(_,P,I,K,z,j,ie)=>{const te=_.component=op(_,K,z);if(ro(_)&&(te.ctx.renderer=qe),ap(te,!1,ie),te.asyncDep){if(z&&z.registerDep(te,q,ie),!_.el){const se=te.subTree=_t(Ft);h(null,se,P,I),_.placeholder=se.el}}else q(te,_,P,I,z,j,ie)},ee=(_,P,I)=>{const K=P.component=_.component;if(Gd(_,P,I))if(K.asyncDep&&!K.asyncResolved){Q(K,P,I);return}else K.next=P,K.update();else P.el=_.el,K.vnode=P},q=(_,P,I,K,z,j,ie)=>{const te=()=>{if(_.isMounted){let{next:L,bu:N,u:$,parent:J,vnode:Me}=_;{const le=Ef(_);if(le){L&&(L.el=Me.el,Q(_,L,ie)),le.asyncDep.then(()=>{Ht(()=>{_.isUnmounted||x()},z)});return}}let me=L,ae;pi(_,!1),L?(L.el=Me.el,Q(_,L,ie)):L=Me,N&&Mo(N),(ae=L.props&&L.props.onVnodeBeforeUpdate)&&pn(ae,J,L,Me),pi(_,!0);const ue=Tl(_),Re=_.subTree;_.subTree=ue,E(Re,ue,f(Re.el),Ce(Re),_,z,j),L.el=ue.el,me===null&&Vd(_,ue.el),$&&Ht($,z),(ae=L.props&&L.props.onVnodeUpdated)&&Ht(()=>pn(ae,J,L,Me),z)}else{let L;const{el:N,props:$}=P,{bm:J,m:Me,parent:me,root:ae,type:ue}=_,Re=Or(P);pi(_,!1),J&&Mo(J),!Re&&(L=$&&$.onVnodeBeforeMount)&&pn(L,me,P),pi(_,!0);{ae.ce&&ae.ce._hasShadowRoot()&&ae.ce._injectChildStyle(ue,_.parent?_.parent.type:void 0);const le=_.subTree=Tl(_);E(null,le,I,K,_,z,j),P.el=le.el}if(Me&&Ht(Me,z),!Re&&(L=$&&$.onVnodeMounted)){const le=P;Ht(()=>pn(L,me,le),z)}(P.shapeFlag&256||me&&Or(me.vnode)&&me.vnode.shapeFlag&256)&&_.a&&Ht(_.a,z),_.isMounted=!0,P=I=K=null}};_.scope.on();const se=_.effect=new Au(te);_.scope.off();const x=_.update=se.run.bind(se),g=_.job=se.runIfDirty.bind(se);g.i=_,g.id=_.uid,se.scheduler=()=>Ya(g),pi(_,!0),x()},Q=(_,P,I)=>{P.component=_;const K=_.vnode.props;_.vnode=P,_.next=null,Wd(_,P.props,K,I),Yd(_,P.children,I),Vn(),gl(_),kn()},H=(_,P,I,K,z,j,ie,te,se=!1)=>{const x=_&&_.children,g=_?_.shapeFlag:0,L=P.children,{patchFlag:N,shapeFlag:$}=P;if(N>0){if(N&128){oe(x,L,I,K,z,j,ie,te,se);return}else if(N&256){re(x,L,I,K,z,j,ie,te,se);return}}$&8?(g&16&&xe(x,z,j),L!==x&&c(I,L)):g&16?$&16?oe(x,L,I,K,z,j,ie,te,se):xe(x,z,j,!0):(g&8&&c(I,""),$&16&&O(L,I,K,z,j,ie,te,se))},re=(_,P,I,K,z,j,ie,te,se)=>{_=_||sr,P=P||sr;const x=_.length,g=P.length,L=Math.min(x,g);let N;for(N=0;N<L;N++){const $=P[N]=se?Fn(P[N]):xn(P[N]);E(_[N],$,I,null,z,j,ie,te,se)}x>g?xe(_,z,j,!0,!1,L):O(P,I,K,z,j,ie,te,se,L)},oe=(_,P,I,K,z,j,ie,te,se)=>{let x=0;const g=P.length;let L=_.length-1,N=g-1;for(;x<=L&&x<=N;){const $=_[x],J=P[x]=se?Fn(P[x]):xn(P[x]);if(Ai($,J))E($,J,I,null,z,j,ie,te,se);else break;x++}for(;x<=L&&x<=N;){const $=_[L],J=P[N]=se?Fn(P[N]):xn(P[N]);if(Ai($,J))E($,J,I,null,z,j,ie,te,se);else break;L--,N--}if(x>L){if(x<=N){const $=N+1,J=$<g?P[$].el:K;for(;x<=N;)E(null,P[x]=se?Fn(P[x]):xn(P[x]),I,J,z,j,ie,te,se),x++}}else if(x>N)for(;x<=L;)_e(_[x],z,j,!0),x++;else{const $=x,J=x,Me=new Map;for(x=J;x<=N;x++){const ye=P[x]=se?Fn(P[x]):xn(P[x]);ye.key!=null&&Me.set(ye.key,x)}let me,ae=0;const ue=N-J+1;let Re=!1,le=0;const et=new Array(ue);for(x=0;x<ue;x++)et[x]=0;for(x=$;x<=L;x++){const ye=_[x];if(ae>=ue){_e(ye,z,j,!0);continue}let Se;if(ye.key!=null)Se=Me.get(ye.key);else for(me=J;me<=N;me++)if(et[me-J]===0&&Ai(ye,P[me])){Se=me;break}Se===void 0?_e(ye,z,j,!0):(et[Se-J]=x+1,Se>=le?le=Se:Re=!0,E(ye,P[Se],I,null,z,j,ie,te,se),ae++)}const ze=Re?Jd(et):sr;for(me=ze.length-1,x=ue-1;x>=0;x--){const ye=J+x,Se=P[ye],be=P[ye+1],We=ye+1<g?be.el||yf(be):K;et[x]===0?E(null,Se,I,We,z,j,ie,te,se):Re&&(me<0||x!==ze[me]?fe(Se,I,We,2):me--)}}},fe=(_,P,I,K,z=null)=>{const{el:j,type:ie,transition:te,children:se,shapeFlag:x}=_;if(x&6){fe(_.component.subTree,P,I,K);return}if(x&128){_.suspense.move(P,I,K);return}if(x&64){ie.move(_,P,I,qe);return}if(ie===Nt){i(j,P,I);for(let L=0;L<se.length;L++)fe(se[L],P,I,K);i(_.anchor,P,I);return}if(ie===zr){S(_,P,I);return}if(K!==2&&x&1&&te)if(K===0)te.beforeEnter(j),i(j,P,I),Ht(()=>te.enter(j),z);else{const{leave:L,delayLeave:N,afterLeave:$}=te,J=()=>{_.ctx.isUnmounted?r(j):i(j,P,I)},Me=()=>{j._isLeaving&&j[gn](!0),L(j,()=>{J(),$&&$()})};N?N(j,J,Me):Me()}else i(j,P,I)},_e=(_,P,I,K=!1,z=!1)=>{const{type:j,props:ie,ref:te,children:se,dynamicChildren:x,shapeFlag:g,patchFlag:L,dirs:N,cacheIndex:$,memo:J}=_;if(L===-2&&(z=!1),te!=null&&(Vn(),Fr(te,null,I,_,!0),kn()),$!=null&&(P.renderCache[$]=void 0),g&256){P.ctx.deactivate(_);return}const Me=g&1&&N,me=!Or(_);let ae;if(me&&(ae=ie&&ie.onVnodeBeforeUnmount)&&pn(ae,P,_),g&6)ce(_.component,I,K);else{if(g&128){_.suspense.unmount(I,K);return}Me&&di(_,null,P,"beforeUnmount"),g&64?_.type.remove(_,P,I,qe,K):x&&!x.hasOnce&&(j!==Nt||L>0&&L&64)?xe(x,P,I,!1,!0):(j===Nt&&L&384||!z&&g&16)&&xe(se,P,I),K&&Ie(_)}const ue=J!=null&&$==null;(me&&(ae=ie&&ie.onVnodeUnmounted)||Me||ue)&&Ht(()=>{ae&&pn(ae,P,_),Me&&di(_,null,P,"unmounted"),ue&&(_.el=null)},I)},Ie=_=>{const{type:P,el:I,anchor:K,transition:z}=_;if(P===Nt){Z(I,K);return}if(P===zr){b(_);return}const j=()=>{r(I),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(_.shapeFlag&1&&z&&!z.persisted){const{leave:ie,delayLeave:te}=z,se=()=>ie(I,j);te?te(_.el,j,se):se()}else j()},Z=(_,P)=>{let I;for(;_!==P;)I=d(_),r(_),_=I;r(P)},ce=(_,P,I)=>{const{bum:K,scope:z,job:j,subTree:ie,um:te,m:se,a:x}=_;wl(se),wl(x),K&&Mo(K),z.stop(),j&&(j.flags|=8,_e(ie,_,P,I)),te&&Ht(te,P),Ht(()=>{_.isUnmounted=!0},P)},xe=(_,P,I,K=!1,z=!1,j=0)=>{for(let ie=j;ie<_.length;ie++)_e(_[ie],P,I,K,z)},Ce=_=>{if(_.shapeFlag&6)return Ce(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const P=d(_.anchor||_.el),I=P&&P[pd];return I?d(I):P};let Ae=!1;const Te=(_,P,I)=>{let K;_==null?P._vnode&&(_e(P._vnode,null,null,!0),K=P._vnode.component):E(P._vnode||null,_,P,null,null,null,I),P._vnode=_,Ae||(Ae=!0,gl(K),Xu(),Ae=!1)},qe={p:E,um:_e,m:fe,r:Ie,mt:D,mc:O,pc:H,pbc:v,n:Ce,o:n};return{render:Te,hydrate:void 0,createApp:Nd(Te)}}function wo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function pi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Zd(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Sf(n,e,t=!1){const i=n.children,r=e.children;if(Le(i)&&Le(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Fn(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Sf(a,o)),o.type===lo&&(o.patchFlag===-1&&(o=r[s]=Fn(o)),o.el=a.el),o.type===Ft&&!o.el&&(o.el=a.el)}}function Jd(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(r=t[t.length-1],n[r]<u){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<u?s=o+1:a=o;u<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Ef(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ef(e)}function wl(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function yf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?yf(e.subTree):null}const Tf=n=>n.__isSuspense;function Qd(n,e){e&&e.pendingBranch?Le(n)?e.effects.push(...n):e.effects.push(n):Wu(n)}const Nt=Symbol.for("v-fgt"),lo=Symbol.for("v-txt"),Ft=Symbol.for("v-cmt"),zr=Symbol.for("v-stc"),Hr=[];let $t=null;function ft(n=!1){Hr.push($t=n?null:[])}function ep(){Hr.pop(),$t=Hr[Hr.length-1]||null}let Xr=1;function Gs(n,e=!1){Xr+=n,n<0&&$t&&e&&($t.hasOnce=!0)}function bf(n){return n.dynamicChildren=Xr>0?$t||sr:null,ep(),Xr>0&&$t&&$t.push(n),n}function Et(n,e,t,i,r,s){return bf(he(n,e,t,i,r,s,!0))}function Af(n,e,t,i,r){return bf(_t(n,e,t,i,r,!0))}function Vs(n){return n?n.__v_isVNode===!0:!1}function Ai(n,e){return n.type===e.type&&n.key===e.key}const wf=({key:n})=>n??null,Ds=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?lt(n)||Ct(n)||Fe(n)?{i:Qt,r:n,k:e,f:!!t}:n:null);function he(n,e=null,t=null,i=0,r=null,s=n===Nt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&wf(e),ref:e&&Ds(e),scopeId:$u,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Qt};return o?(Qa(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=lt(t)?8:16),Xr>0&&!a&&$t&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&$t.push(l),l}const _t=tp;function tp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===wd)&&(n=Ft),Vs(n)){const o=li(n,e,!0);return t&&Qa(o,t),Xr>0&&!s&&$t&&(o.shapeFlag&6?$t[$t.indexOf(n)]=o:$t.push(o)),o.patchFlag=-2,o}if(fp(n)&&(n=n.__vccOpts),e){e=np(e);let{class:o,style:l}=e;o&&!lt(o)&&(e.class=ri(o)),je(l)&&($a(l)&&!Le(l)&&(l=vt({},l)),e.style=ar(l))}const a=lt(n)?1:Tf(n)?128:Zu(n)?64:je(n)?4:Fe(n)?2:0;return he(n,e,t,i,r,a,s,!0)}function np(n){return n?$a(n)||mf(n)?vt({},n):n:null}function li(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,u=e?ip(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&wf(u),ref:e&&e.ref?t&&s?Le(s)?s.concat(Ds(e)):[s,Ds(e)]:Ds(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Nt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&li(n.ssContent),ssFallback:n.ssFallback&&li(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Wr(c,l.clone(c)),c}function Sa(n=" ",e=0){return _t(lo,null,n,e)}function Ea(n,e){const t=_t(zr,null,n);return t.staticCount=e,t}function Ja(n="",e=!1){return e?(ft(),Af(Ft,null,n)):_t(Ft,null,n)}function xn(n){return n==null||typeof n=="boolean"?_t(Ft):Le(n)?_t(Nt,null,n.slice()):Vs(n)?Fn(n):_t(lo,null,String(n))}function Fn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:li(n)}function Qa(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Le(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Qa(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!mf(e)?e._ctx=Qt:r===3&&Qt&&(Qt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Fe(e)?(e={default:e,_ctx:Qt},t=32):(e=String(e),i&64?(t=16,e=[Sa(e)]):t=8);n.children=e,n.shapeFlag|=t}function ip(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ri([e.class,i.class]));else if(r==="style")e.style=ar([e.style,i.style]);else if(Js(r)){const s=e[r],a=i[r];a&&s!==a&&!(Le(s)&&s.includes(a))?e[r]=s?[].concat(s,a):a:a==null&&s==null&&!Qs(r)&&(e[r]=a)}else r!==""&&(e[r]=i[r])}return e}function pn(n,e,t,i=null){hn(n,e,7,[t,i])}const rp=uf();let sp=0;function op(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||rp,s={uid:sp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Dh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_f(i,r),emitsOptions:ff(i,r),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:i.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Od.bind(null,s),n.ce&&n.ce(s),s}let Ot=null;const el=()=>Ot||Qt;let ks,ya;{const n=to(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};ks=e("__VUE_INSTANCE_SETTERS__",t=>Ot=t),ya=e("__VUE_SSR_SETTERS__",t=>qr=t)}const Zr=n=>{const e=Ot;return ks(n),n.scope.on(),()=>{n.scope.off(),ks(e)}},Rl=()=>{Ot&&Ot.scope.off(),ks(null)};function Rf(n){return n.vnode.shapeFlag&4}let qr=!1;function ap(n,e=!1,t=!1){e&&ya(e);const{props:i,children:r}=n.vnode,s=Rf(n);kd(n,i,s,e),$d(n,r,t||e);const a=s?lp(n,e):void 0;return e&&ya(!1),a}function lp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Rd);const{setup:i}=t;if(i){Vn();const r=n.setupContext=i.length>1?up(n):null,s=Zr(n),a=jr(i,n,0,[n.props,r]),o=vu(a);if(kn(),s(),(o||n.sp)&&!Or(n)&&rf(n),o){if(a.then(Rl,Rl),e)return a.then(l=>{Cl(n,l)}).catch(l=>{io(l,n,0)});n.asyncDep=a}else Cl(n,a)}else Cf(n)}function Cl(n,e,t){Fe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:je(e)&&(n.setupState=Gu(e)),Cf(n)}function Cf(n,e,t){const i=n.type;n.render||(n.render=i.render||ln);{const r=Zr(n);Vn();try{Cd(n)}finally{kn(),r()}}}const cp={get(n,e){return Rt(n,"get",""),n[e]}};function up(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,cp),slots:n.slots,emit:n.emit,expose:e}}function co(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Gu(Qh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Br)return Br[t](n)},has(e,t){return t in e||t in Br}})):n.proxy}function fp(n){return Fe(n)&&"__vccOpts"in n}const Di=(n,e)=>rd(n,e,qr);function hp(n,e,t){try{Gs(-1);const i=arguments.length;return i===2?je(e)&&!Le(e)?Vs(e)?_t(n,null,[e]):_t(n,e):_t(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Vs(t)&&(t=[t]),_t(n,e,t))}finally{Gs(1)}}const dp="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ta;const Pl=typeof window<"u"&&window.trustedTypes;if(Pl)try{Ta=Pl.createPolicy("vue",{createHTML:n=>n})}catch{}const Pf=Ta?n=>Ta.createHTML(n):n=>n,pp="http://www.w3.org/2000/svg",mp="http://www.w3.org/1998/Math/MathML",Nn=typeof document<"u"?document:null,Ll=Nn&&Nn.createElement("template"),gp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Nn.createElementNS(pp,n):e==="mathml"?Nn.createElementNS(mp,n):t?Nn.createElement(n,{is:t}):Nn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Nn.createTextNode(n),createComment:n=>Nn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Nn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Ll.innerHTML=Pf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Ll.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Yn="transition",Er="animation",$r=Symbol("_vtc"),Lf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},_p=vt({},Ju,Lf),vp=n=>(n.displayName="Transition",n.props=_p,n),xp=vp((n,{slots:e})=>hp(_d,Mp(n),e)),mi=(n,e=[])=>{Le(n)?n.forEach(t=>t(...e)):n&&n(...e)},Dl=n=>n?Le(n)?n.some(e=>e.length>1):n.length>1:!1;function Mp(n){const e={};for(const V in n)V in Lf||(e[V]=n[V]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:u=a,appearToClass:c=o,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,M=Sp(r),E=M&&M[0],p=M&&M[1],{onBeforeEnter:h,onEnter:T,onEnterCancelled:S,onLeave:b,onLeaveCancelled:C,onBeforeAppear:R=h,onAppear:w=T,onAppearCancelled:O=S}=e,B=(V,ne,D,ee)=>{V._enterCancelled=ee,gi(V,ne?c:o),gi(V,ne?u:a),D&&D()},v=(V,ne)=>{V._isLeaving=!1,gi(V,f),gi(V,m),gi(V,d),ne&&ne()},A=V=>(ne,D)=>{const ee=V?w:T,q=()=>B(ne,V,D);mi(ee,[ne,q]),Ul(()=>{gi(ne,V?l:s),Rn(ne,V?c:o),Dl(ee)||Il(ne,i,E,q)})};return vt(e,{onBeforeEnter(V){mi(h,[V]),Rn(V,s),Rn(V,a)},onBeforeAppear(V){mi(R,[V]),Rn(V,l),Rn(V,u)},onEnter:A(!1),onAppear:A(!0),onLeave(V,ne){V._isLeaving=!0;const D=()=>v(V,ne);Rn(V,f),V._enterCancelled?(Rn(V,d),Ol(V)):(Ol(V),Rn(V,d)),Ul(()=>{V._isLeaving&&(gi(V,f),Rn(V,m),Dl(b)||Il(V,i,p,D))}),mi(b,[V,D])},onEnterCancelled(V){B(V,!1,void 0,!0),mi(S,[V])},onAppearCancelled(V){B(V,!0,void 0,!0),mi(O,[V])},onLeaveCancelled(V){v(V),mi(C,[V])}})}function Sp(n){if(n==null)return null;if(je(n))return[Ro(n.enter),Ro(n.leave)];{const e=Ro(n);return[e,e]}}function Ro(n){return yh(n)}function Rn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[$r]||(n[$r]=new Set)).add(e)}function gi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[$r];t&&(t.delete(e),t.size||(n[$r]=void 0))}function Ul(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Ep=0;function Il(n,e,t,i){const r=n._endId=++Ep,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:a,timeout:o,propCount:l}=yp(n,e);if(!a)return i();const u=a+"end";let c=0;const f=()=>{n.removeEventListener(u,d),s()},d=m=>{m.target===n&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},o+1),n.addEventListener(u,d)}function yp(n,e){const t=window.getComputedStyle(n),i=M=>(t[M]||"").split(", "),r=i(`${Yn}Delay`),s=i(`${Yn}Duration`),a=Nl(r,s),o=i(`${Er}Delay`),l=i(`${Er}Duration`),u=Nl(o,l);let c=null,f=0,d=0;e===Yn?a>0&&(c=Yn,f=a,d=s.length):e===Er?u>0&&(c=Er,f=u,d=l.length):(f=Math.max(a,u),c=f>0?a>u?Yn:Er:null,d=c?c===Yn?s.length:l.length:0);const m=c===Yn&&/\b(?:transform|all)(?:,|$)/.test(i(`${Yn}Property`).toString());return{type:c,timeout:f,propCount:d,hasTransform:m}}function Nl(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Fl(t)+Fl(n[i])))}function Fl(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Ol(n){return(n?n.ownerDocument:document).body.offsetHeight}function Tp(n,e,t){const i=n[$r];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ws=Symbol("_vod"),Df=Symbol("_vsh"),bp={name:"show",beforeMount(n,{value:e},{transition:t}){n[Ws]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):yr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),yr(n,!0),i.enter(n)):i.leave(n,()=>{yr(n,!1)}):yr(n,e))},beforeUnmount(n,{value:e}){yr(n,e)}};function yr(n,e){n.style.display=e?n[Ws]:"none",n[Df]=!e}const Uf=Symbol("");function Ap(n){const e=el();if(!e)return;const t=e.ut=(r=n(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>Xs(s,r))},i=()=>{const r=n(e.proxy);e.ce?Xs(e.ce,r):ba(e.subTree,r),t(r)};of(()=>{Wu(i)}),oo(()=>{Nr(i,ln,{flush:"post"});const r=new MutationObserver(i);r.observe(e.subTree.el.parentNode,{childList:!0}),Ka(()=>r.disconnect())})}function ba(n,e){if(n.shapeFlag&128){const t=n.suspense;n=t.activeBranch,t.pendingBranch&&!t.isHydrating&&t.effects.push(()=>{ba(t.activeBranch,e)})}for(;n.component;)n=n.component.subTree;if(n.shapeFlag&1&&n.el)Xs(n.el,e);else if(n.type===Nt)n.children.forEach(t=>ba(t,e));else if(n.type===zr){let{el:t,anchor:i}=n;for(;t&&(Xs(t,e),t!==i);)t=t.nextSibling}}function Xs(n,e){if(n.nodeType===1){const t=n.style;let i="";for(const r in e){const s=Lh(e[r]);t.setProperty(`--${r}`,s),i+=`--${r}: ${s};`}t[Uf]=i}}const wp=/(?:^|;)\s*display\s*:/;function Rp(n,e,t){const i=n.style,r=lt(t);let s=!1;if(t&&!r){if(e)if(lt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Lr(i,o,"")}else for(const a in e)t[a]==null&&Lr(i,a,"");for(const a in t){a==="display"&&(s=!0);const o=t[a];o!=null?Pp(n,a,!lt(e)&&e?e[a]:void 0,o)||Lr(i,a,o):Lr(i,a,"")}}else if(r){if(e!==t){const a=i[Uf];a&&(t+=";"+a),i.cssText=t,s=wp.test(t)}}else e&&n.removeAttribute("style");Ws in n&&(n[Ws]=s?i.display:"",n[Df]&&(i.display="none"))}const Bl=/\s*!important$/;function Lr(n,e,t){if(Le(t))t.forEach(i=>Lr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Cp(n,e);Bl.test(t)?n.setProperty(Oi(i),t.replace(Bl,""),"important"):n[i]=t}}const zl=["Webkit","Moz","ms"],Co={};function Cp(n,e){const t=Co[e];if(t)return t;let i=cn(e);if(i!=="filter"&&i in n)return Co[e]=i;i=Su(i);for(let r=0;r<zl.length;r++){const s=zl[r]+i;if(s in n)return Co[e]=s}return e}function Pp(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&lt(i)&&t===i}const Hl="http://www.w3.org/1999/xlink";function Gl(n,e,t,i,r,s=Ch(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Hl,e.slice(6,e.length)):n.setAttributeNS(Hl,e,t):t==null||s&&!yu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":bn(t)?String(t):t)}function Vl(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Pf(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=yu(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function Lp(n,e,t,i){n.addEventListener(e,t,i)}function Dp(n,e,t,i){n.removeEventListener(e,t,i)}const kl=Symbol("_vei");function Up(n,e,t,i,r=null){const s=n[kl]||(n[kl]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Ip(e);if(i){const u=s[e]=Op(i,r);Lp(n,o,u,l)}else a&&(Dp(n,o,a,l),s[e]=void 0)}}const Wl=/(?:Once|Passive|Capture)$/;function Ip(n){let e;if(Wl.test(n)){e={};let i;for(;i=n.match(Wl);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Oi(n.slice(2)),e]}let Po=0;const Np=Promise.resolve(),Fp=()=>Po||(Np.then(()=>Po=0),Po=Date.now());function Op(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;hn(Bp(i,t.value),e,5,[i])};return t.value=n,t.attached=Fp(),t}function Bp(n,e){if(Le(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Xl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,zp=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?Tp(n,i,a):e==="style"?Rp(n,t,i):Js(e)?Qs(e)||Up(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Hp(n,e,i,a))?(Vl(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Gl(n,e,i,a,s,e!=="value")):n._isVueCE&&(Gp(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!lt(i)))?Vl(n,cn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Gl(n,e,i,a))};function Hp(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Xl(e)&&Fe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Xl(e)&&lt(t)?!1:e in n}function Gp(n,e){const t=n._def.props;if(!t)return!1;const i=cn(e);return Array.isArray(t)?t.some(r=>cn(r)===i):Object.keys(t).some(r=>cn(r)===i)}const Vp=["ctrl","shift","alt","meta"],kp={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Vp.some(t=>n[`${t}Key`]&&!e.includes(t))},ql=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let a=0;a<e.length;a++){const o=kp[e[a]];if(o&&o(r,e))return}return n(r,...s)})},Wp=vt({patchProp:zp},gp);let $l;function Xp(){return $l||($l=Kd(Wp))}const qp=(...n)=>{const e=Xp().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Yp(i);if(!r)return;const s=e._component;!Fe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,$p(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function $p(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Yp(n){return lt(n)?document.querySelector(n):n}const Jr=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Kp={},jp={class:"topbar"};function Zp(n,e){return ft(),Et("header",jp,[...e[0]||(e[0]=[Ea('<div class="topbar-left" data-v-0e40bc9e><div class="logo" data-v-0e40bc9e><span class="logo-k" data-v-0e40bc9e>K</span><span class="logo-rest" data-v-0e40bc9e>Skr</span></div><div class="topbar-divider" data-v-0e40bc9e></div><span class="topbar-subtitle" data-v-0e40bc9e>AE Plugin Preview</span></div><div class="topbar-right" data-v-0e40bc9e><a href="https://kskr.kuaishou.com" target="_blank" class="topbar-link" data-v-0e40bc9e>文档</a><a href="#" class="topbar-link" data-v-0e40bc9e>更新日志</a><a href="#" class="topbar-link" data-v-0e40bc9e>关于</a><span class="version-badge" data-v-0e40bc9e>v1.0</span></div>',2)])])}const Jp=Jr(Kp,[["render",Zp],["__scopeId","data-v-0e40bc9e"]]),Us=[{id:"light",name:"光效",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',plugins:[{id:"lens-flare",name:"LensFlare",nameZh:"镜头光晕",status:"coming"},{id:"light-leak",name:"LightLeak",nameZh:"漏光效果",status:"coming"},{id:"glow-bloom",name:"GlowBloom",nameZh:"辉光绽放",status:"coming"},{id:"neon-glow",name:"NeonGlow",nameZh:"霓虹发光",status:"coming"}]},{id:"distortion",name:"画面扭曲",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8"/><path d="M3 12c0 2.2 3.6 4 8 4s8-1.8 8-4"/><path d="M3 12c0-2.2 3.6-4 8-4s8 1.8 8 4"/></svg>',plugins:[{id:"wave-blur",name:"WaveBlurring",nameZh:"波形模糊",status:"active"},{id:"ripple",name:"RippleWarp",nameZh:"涟漪扭曲",status:"coming"},{id:"liquid",name:"LiquidMorph",nameZh:"液态变形",status:"coming"},{id:"glitch",name:"GlitchWarp",nameZh:"故障扭曲",status:"coming"}]},{id:"blur",name:"模糊",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="6" opacity=".5"/><circle cx="12" cy="12" r="9" opacity=".25"/></svg>',plugins:[{id:"motion-blur",name:"MotionBlur",nameZh:"运动模糊",status:"coming"},{id:"depth-blur",name:"DepthBlur",nameZh:"景深模糊",status:"coming"},{id:"radial-blur",name:"RadialBlur",nameZh:"径向模糊",status:"coming"},{id:"bokeh",name:"BokehBlur",nameZh:"散景模糊",status:"coming"}]},{id:"text",name:"文本",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>',plugins:[{id:"text-glitch",name:"TextGlitch",nameZh:"文字故障",status:"coming"},{id:"text-reveal",name:"TextReveal",nameZh:"文字揭示",status:"coming"},{id:"kinetic-type",name:"KineticType",nameZh:"动态字体",status:"coming"},{id:"neon-text",name:"NeonText",nameZh:"霓虹文字",status:"coming"}]},{id:"generate",name:"生成",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',plugins:[{id:"particle-gen",name:"ParticleGen",nameZh:"粒子生成",status:"coming"},{id:"noise-field",name:"NoiseField",nameZh:"噪声场",status:"coming"},{id:"fractal",name:"FractalGen",nameZh:"分形生成",status:"coming"},{id:"grid-gen",name:"GridGen",nameZh:"网格生成",status:"coming"}]}],Qp={class:"sidebar"},em={class:"category-list"},tm=["onClick"],nm=["innerHTML"],im={class:"category-name"},rm={class:"plugin-list"},sm=["onClick"],om={class:"plugin-info"},am={class:"plugin-name"},lm={class:"plugin-name-zh"},cm={key:0,class:"plugin-tag"},um={key:1,class:"plugin-tag active-tag"},fm={class:"sidebar-footer"},hm={class:"footer-text"},dm={class:"footer-count"},pm={class:"footer-available"},mm={__name:"Sidebar",emits:["select-plugin"],setup(n,{emit:e}){const t=e,i=wt("distortion"),r=wt("wave-blur"),s=Di(()=>Us.reduce((u,c)=>u+c.plugins.length,0)),a=Di(()=>Us.reduce((u,c)=>u+c.plugins.filter(f=>f.status==="active").length,0));function o(u){i.value=i.value===u?null:u}function l(u){u.status!=="coming"&&(r.value=u.id,t("select-plugin",u))}return(u,c)=>(ft(),Et("aside",Qp,[he("div",em,[(ft(!0),Et(Nt,null,zs(Hu(Us),f=>(ft(),Et("div",{key:f.id,class:ri(["category-item",{expanded:i.value===f.id}])},[he("div",{class:ri(["category-header",{active:i.value===f.id}]),onClick:d=>o(f.id)},[he("div",{class:"category-icon",innerHTML:f.icon},null,8,nm),he("span",im,St(f.name),1),c[0]||(c[0]=he("div",{class:"category-arrow"},[he("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[he("polyline",{points:"6 9 12 15 18 9"})])],-1))],10,tm),_t(xp,{name:"slide"},{default:Yu(()=>[cd(he("div",rm,[(ft(!0),Et(Nt,null,zs(f.plugins,d=>(ft(),Et("div",{key:d.id,class:ri(["plugin-item",{selected:r.value===d.id,coming:d.status==="coming"}]),onClick:m=>l(d)},[c[1]||(c[1]=he("div",{class:"plugin-dot"},null,-1)),he("div",om,[he("span",am,St(d.name),1),he("span",lm,St(d.nameZh),1)]),d.status==="coming"?(ft(),Et("span",cm,"即将")):(ft(),Et("span",um,"可用"))],10,sm))),128))],512),[[bp,i.value===f.id]])]),_:2},1024)],2))),128))]),he("div",fm,[he("div",hm,[he("span",dm,St(s.value)+" 个插件",1),c[2]||(c[2]=he("span",{class:"footer-divider"},"·",-1)),he("span",pm,St(a.value)+" 已上线",1)])])]))}},gm=Jr(mm,[["__scopeId","data-v-adbdcd38"]]),_m={class:"param-panel"},vm={class:"plugin-header"},xm={class:"plugin-title-row"},Mm={class:"plugin-title"},Sm={class:"plugin-title-zh"},Em={class:"params-scroll"},ym={class:"param-header"},Tm={class:"param-label"},bm={class:"param-value-wrap"},Am={class:"param-value"},wm={class:"param-desc"},Rm={class:"slider-wrap"},Cm={class:"slider-min"},Pm=["min","max","step","value","onInput"],Lm={class:"slider-max"},Dm={class:"panel-actions"},Um={class:"btn-upload"},Im={__name:"ParamPanel",props:{plugin:{type:Object,required:!0},params:{type:Array,required:!0},modelValue:{type:Object,required:!0},compareMode:{type:Boolean,default:!1}},emits:["update:modelValue","reset","upload","toggle-compare"],setup(n,{emit:e}){const t=n,i=e;function r(a,o){i("update:modelValue",{...t.modelValue,[a]:parseFloat(o)})}function s(a){return typeof a=="number"?a.toFixed(1):a}return(a,o)=>(ft(),Et("div",_m,[he("div",vm,[he("div",xm,[he("div",null,[he("h2",Mm,St(n.plugin.name),1),he("p",Sm,St(n.plugin.nameZh),1)]),he("button",{class:"btn-icon",onClick:o[0]||(o[0]=l=>a.$emit("reset")),title:"重置参数"},[...o[3]||(o[3]=[he("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[he("polyline",{points:"1 4 1 10 7 10"}),he("path",{d:"M3.51 15a9 9 0 1 0 .49-4.64"})],-1)])])])]),he("div",Em,[(ft(!0),Et(Nt,null,zs(n.params,l=>(ft(),Et("div",{class:"param-group",key:l.key},[he("div",ym,[he("span",Tm,St(l.label),1),he("div",bm,[he("span",Am,St(s(n.modelValue[l.key])),1)])]),he("p",wm,St(l.desc),1),he("div",Rm,[he("span",Cm,St(l.min),1),he("input",{type:"range",min:l.min,max:l.max,step:l.step||.1,value:n.modelValue[l.key],onInput:u=>r(l.key,u.target.value)},null,40,Pm),he("span",Lm,St(l.max),1)])]))),128))]),he("div",Dm,[he("label",Um,[he("input",{type:"file",accept:"image/*",onChange:o[1]||(o[1]=l=>a.$emit("upload",l)),hidden:""},null,32),o[4]||(o[4]=he("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[he("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),he("polyline",{points:"17 8 12 3 7 8"}),he("line",{x1:"12",y1:"3",x2:"12",y2:"15"})],-1)),o[5]||(o[5]=Sa(" 上传图片 ",-1))]),he("button",{class:ri(["btn-compare",{active:n.compareMode}]),onClick:o[2]||(o[2]=l=>a.$emit("toggle-compare"))},[o[6]||(o[6]=he("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[he("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),he("line",{x1:"12",y1:"3",x2:"12",y2:"21"})],-1)),Sa(" "+St(n.compareMode?"关闭对比":"前后对比"),1)],2)])]))}},Nm=Jr(Im,[["__scopeId","data-v-ec26b06a"]]),Fm={class:"preview-area"},Om={class:"preview-toolbar"},Bm={class:"toolbar-left"},zm={class:"breadcrumb"},Hm={class:"breadcrumb-cat"},Gm={class:"breadcrumb-plugin"},Vm={class:"toolbar-right"},km={class:"view-toggle"},Wm=["onClick","title"],Xm=["innerHTML"],qm={class:"zoom-control"},$m={class:"zoom-val"},Ym={key:0,class:"single-mode"},Km={key:0,class:"canvas-overlay"},jm={key:1,class:"compare-mode-wrap"},Zm={class:"compare-canvas-bg"},Jm={__name:"PreviewArea",props:{compareMode:{type:Boolean,default:!1},effect:{type:Object,default:null},hasImage:{type:Boolean,default:!1},currentCategory:{type:String,default:""},currentPlugin:{type:String,default:""}},emits:["upload"],setup(n,{expose:e,emit:t}){Ap(O=>({v9f263458:d.value+"%"}));const i=t,r=wt(null),s=wt(null),a=wt(null),o=wt(null),l=wt(null),u=wt(null),c=wt("fit"),f=wt(100),d=wt(50);let m=!1;const M=[{id:"fit",label:"适应窗口",icon:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>'},{id:"actual",label:"实际大小",icon:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>'}],E=Di(()=>c.value==="fit"?{maxWidth:"100%",maxHeight:"100%"}:{transform:`scale(${f.value/100})`,transformOrigin:"center center"});e({effectCanvas:r,originalCanvas:s,effectCanvasCmp:a});function p(){var O;(O=o.value)==null||O.click()}function h(O){i("upload",O)}function T(O){var v,A;const B=(A=(v=O.dataTransfer)==null?void 0:v.files)==null?void 0:A[0];B&&i("upload",{target:{files:[B]}})}function S(O){O.preventDefault(),m=!0,document.addEventListener("mousemove",C),document.addEventListener("touchmove",R),document.addEventListener("mouseup",b),document.addEventListener("touchend",b)}function b(){m=!1,document.removeEventListener("mousemove",C),document.removeEventListener("touchmove",R),document.removeEventListener("mouseup",b),document.removeEventListener("touchend",b)}function C(O){m&&w(O.clientX)}function R(O){m&&w(O.touches[0].clientX)}function w(O){const B=l.value;if(!B)return;const v=B.getBoundingClientRect(),A=(O-v.left)/v.width*100;d.value=Math.min(95,Math.max(5,A))}return(O,B)=>(ft(),Et("div",Fm,[he("div",Om,[he("div",Bm,[he("span",zm,[he("span",Hm,St(n.currentCategory),1),B[3]||(B[3]=he("span",{class:"breadcrumb-sep"},"/",-1)),he("span",Gm,St(n.currentPlugin),1)])]),he("div",Vm,[he("div",km,[(ft(),Et(Nt,null,zs(M,v=>he("button",{key:v.id,class:ri({active:c.value===v.id}),onClick:A=>c.value=v.id,title:v.label},[he("span",{innerHTML:v.icon},null,8,Xm)],10,Wm)),64))]),he("div",qm,[he("button",{onClick:B[0]||(B[0]=v=>f.value=Math.max(25,f.value-25))},[...B[4]||(B[4]=[he("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[he("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])]),he("span",$m,St(f.value)+"%",1),he("button",{onClick:B[1]||(B[1]=v=>f.value=Math.min(200,f.value+25))},[...B[5]||(B[5]=[he("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[he("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),he("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])])])]),he("div",{class:"canvas-area",ref_key:"canvasArea",ref:u},[n.compareMode?(ft(),Et("div",jm,[he("div",{class:"compare-slider-wrap",ref_key:"compareWrap",ref:l,onMousemove:C,onTouchmove:ql(R,["prevent"])},[he("div",Zm,[he("canvas",{ref_key:"originalCanvas",ref:s,class:"cmp-canvas"},null,512)]),he("div",{class:"compare-canvas-fg",style:ar({width:d.value+"%"})},[he("canvas",{ref_key:"effectCanvasCmp",ref:a,class:"cmp-canvas"},null,512)],4),he("div",{class:"compare-divider",style:ar({left:d.value+"%"}),onMousedown:S,onTouchstart:S},[...B[7]||(B[7]=[Ea('<div class="divider-line" data-v-7caf8909></div><div class="divider-handle" data-v-7caf8909><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-7caf8909><polyline points="15 18 9 12 15 6" data-v-7caf8909></polyline><polyline points="9 18 3 12 9 6" transform="translate(6,0)" data-v-7caf8909></polyline></svg></div>',2)])],36),B[8]||(B[8]=he("div",{class:"compare-label compare-label-before"},"原图",-1)),B[9]||(B[9]=he("div",{class:"compare-label compare-label-after"},"效果",-1))],544)])):(ft(),Et("div",Ym,[he("div",{class:"canvas-frame",style:ar(E.value)},[he("canvas",{ref_key:"effectCanvas",ref:r,class:"preview-canvas"},null,512),n.hasImage?Ja("",!0):(ft(),Et("div",Km,[he("div",{class:"upload-hint",onClick:p,onDragover:B[2]||(B[2]=ql(()=>{},["prevent"])),onDrop:T},[...B[6]||(B[6]=[Ea('<div class="upload-icon" data-v-7caf8909><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" data-v-7caf8909><rect x="3" y="3" width="18" height="18" rx="2" ry="2" data-v-7caf8909></rect><circle cx="8.5" cy="8.5" r="1.5" data-v-7caf8909></circle><polyline points="21 15 16 10 5 21" data-v-7caf8909></polyline></svg></div><p class="upload-hint-text" data-v-7caf8909>点击或拖拽图片到此处</p><p class="upload-hint-sub" data-v-7caf8909>支持 JPG、PNG、WebP</p>',3)])],32)]))],4)]))],512),he("input",{ref_key:"fileInput",ref:o,type:"file",accept:"image/*",onChange:h,hidden:""},null,544)]))}},Qm=Jr(Jm,[["__scopeId","data-v-7caf8909"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tl="162",eg=0,Yl=1,tg=2,If=1,ng=2,In=3,ci=0,kt=1,zn=2,si=0,ur=1,Kl=2,jl=3,Zl=4,ig=5,wi=100,rg=101,sg=102,Jl=103,Ql=104,og=200,ag=201,lg=202,cg=203,Aa=204,wa=205,ug=206,fg=207,hg=208,dg=209,pg=210,mg=211,gg=212,_g=213,vg=214,xg=0,Mg=1,Sg=2,qs=3,Eg=4,yg=5,Tg=6,bg=7,Nf=0,Ag=1,wg=2,oi=0,Rg=1,Cg=2,Pg=3,Lg=4,Dg=5,Ug=6,Ig=7,Ff=300,dr=301,pr=302,Ra=303,Ca=304,uo=306,Pa=1e3,on=1001,La=1002,Ut=1003,ec=1004,Tr=1005,Gt=1006,Lo=1007,Ci=1008,ai=1009,Ng=1010,Fg=1011,nl=1012,Of=1013,ii=1014,Hn=1015,Yr=1016,Bf=1017,zf=1018,Ui=1020,Og=1021,an=1023,Bg=1024,zg=1025,Ii=1026,mr=1027,Hg=1028,Hf=1029,Gg=1030,Gf=1031,Vf=1033,Do=33776,Uo=33777,Io=33778,No=33779,tc=35840,nc=35841,ic=35842,rc=35843,kf=36196,sc=37492,oc=37496,ac=37808,lc=37809,cc=37810,uc=37811,fc=37812,hc=37813,dc=37814,pc=37815,mc=37816,gc=37817,_c=37818,vc=37819,xc=37820,Mc=37821,Fo=36492,Sc=36494,Ec=36495,Vg=36283,yc=36284,Tc=36285,bc=36286,kg=3200,Wg=3201,Xg=0,qg=1,ni="",_n="srgb",ui="srgb-linear",il="display-p3",fo="display-p3-linear",$s="linear",rt="srgb",Ys="rec709",Ks="p3",Hi=7680,Ac=519,$g=512,Yg=513,Kg=514,Wf=515,jg=516,Zg=517,Jg=518,Qg=519,wc=35044,Rc="300 es",Da=1035,Gn=2e3,js=2001;class _r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oo=Math.PI/180,Ua=180/Math.PI;function Qr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]).toLowerCase()}function Vt(n,e,t){return Math.max(e,Math.min(t,n))}function e_(n,e){return(n%e+e)%e}function Bo(n,e,t){return(1-t)*n+t*e}function Cc(n){return(n&n-1)===0&&n!==0}function Ia(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function br(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,r,s,a,o,l,u){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u)}set(e,t,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],m=i[5],M=i[8],E=r[0],p=r[3],h=r[6],T=r[1],S=r[4],b=r[7],C=r[2],R=r[5],w=r[8];return s[0]=a*E+o*T+l*C,s[3]=a*p+o*S+l*R,s[6]=a*h+o*b+l*w,s[1]=u*E+c*T+f*C,s[4]=u*p+c*S+f*R,s[7]=u*h+c*b+f*w,s[2]=d*E+m*T+M*C,s[5]=d*p+m*S+M*R,s[8]=d*h+m*b+M*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=c*a-o*u,d=o*l-c*s,m=u*s-a*l,M=t*f+i*d+r*m;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=f*E,e[1]=(r*u-c*i)*E,e[2]=(o*i-r*a)*E,e[3]=d*E,e[4]=(c*t-r*l)*E,e[5]=(r*s-o*t)*E,e[6]=m*E,e[7]=(i*l-u*t)*E,e[8]=(a*t-i*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(zo.makeScale(e,t)),this}rotate(e){return this.premultiply(zo.makeRotation(-e)),this}translate(e,t){return this.premultiply(zo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zo=new Ve;function Xf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function t_(){const n=Zs("canvas");return n.style.display="block",n}const Pc={};function n_(n){n in Pc||(Pc[n]=!0,console.warn(n))}const Lc=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dc=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cs={[ui]:{transfer:$s,primaries:Ys,toReference:n=>n,fromReference:n=>n},[_n]:{transfer:rt,primaries:Ys,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[fo]:{transfer:$s,primaries:Ks,toReference:n=>n.applyMatrix3(Dc),fromReference:n=>n.applyMatrix3(Lc)},[il]:{transfer:rt,primaries:Ks,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Dc),fromReference:n=>n.applyMatrix3(Lc).convertLinearToSRGB()}},i_=new Set([ui,fo]),Ze={enabled:!0,_workingColorSpace:ui,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!i_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=cs[e].toReference,r=cs[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return cs[n].primaries},getTransfer:function(n){return n===ni?$s:cs[n].transfer}};function fr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ho(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Gi;class qf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gi===void 0&&(Gi=Zs("canvas")),Gi.width=e.width,Gi.height=e.height;const i=Gi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=fr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fr(t[i]/255)*255):t[i]=fr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let r_=0;class $f{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=Qr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Go(r[a].image)):s.push(Go(r[a]))}else s=Go(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Go(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let s_=0;class Bt extends _r{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=on,r=on,s=Gt,a=Ci,o=an,l=ai,u=Bt.DEFAULT_ANISOTROPY,c=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=Qr(),this.name="",this.source=new $f(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ff)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pa:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pa:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Ff;Bt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],m=l[5],M=l[9],E=l[2],p=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-E)<.01&&Math.abs(M-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+E)<.1&&Math.abs(M+p)<.1&&Math.abs(u+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(u+1)/2,b=(m+1)/2,C=(h+1)/2,R=(c+d)/4,w=(f+E)/4,O=(M+p)/4;return S>b&&S>C?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=R/i,s=w/i):b>C?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=R/r,s=O/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=w/s,r=O/s),this.set(i,r,s,t),this}let T=Math.sqrt((p-M)*(p-M)+(f-E)*(f-E)+(d-c)*(d-c));return Math.abs(T)<.001&&(T=1),this.x=(p-M)/T,this.y=(f-E)/T,this.z=(d-c)/T,this.w=Math.acos((u+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class o_ extends _r{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new Bt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $f(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends o_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Yf extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class a_ extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class es{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[a+0],m=s[a+1],M=s[a+2],E=s[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=M,e[t+3]=E;return}if(f!==E||l!==d||u!==m||c!==M){let p=1-o;const h=l*d+u*m+c*M+f*E,T=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const C=Math.sqrt(S),R=Math.atan2(C,h*T);p=Math.sin(p*R)/C,o=Math.sin(o*R)/C}const b=o*T;if(l=l*p+d*b,u=u*p+m*b,c=c*p+M*b,f=f*p+E*b,p===1-o){const C=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=C,u*=C,c*=C,f*=C}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[a],d=s[a+1],m=s[a+2],M=s[a+3];return e[t]=o*M+c*f+l*m-u*d,e[t+1]=l*M+c*d+u*f-o*m,e[t+2]=u*M+c*m+o*d-l*f,e[t+3]=c*M-o*f-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),f=o(s/2),d=l(i/2),m=l(r/2),M=l(s/2);switch(a){case"XYZ":this._x=d*c*f+u*m*M,this._y=u*m*f-d*c*M,this._z=u*c*M+d*m*f,this._w=u*c*f-d*m*M;break;case"YXZ":this._x=d*c*f+u*m*M,this._y=u*m*f-d*c*M,this._z=u*c*M-d*m*f,this._w=u*c*f+d*m*M;break;case"ZXY":this._x=d*c*f-u*m*M,this._y=u*m*f+d*c*M,this._z=u*c*M+d*m*f,this._w=u*c*f-d*m*M;break;case"ZYX":this._x=d*c*f-u*m*M,this._y=u*m*f+d*c*M,this._z=u*c*M-d*m*f,this._w=u*c*f+d*m*M;break;case"YZX":this._x=d*c*f+u*m*M,this._y=u*m*f+d*c*M,this._z=u*c*M-d*m*f,this._w=u*c*f-d*m*M;break;case"XZY":this._x=d*c*f-u*m*M,this._y=u*m*f-d*c*M,this._z=u*c*M+d*m*f,this._w=u*c*f+d*m*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(c-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),f=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*u+a*f-o*c,this.y=i+l*c+o*u-s*f,this.z=r+l*f+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vo.copy(this).projectOnVector(e),this.sub(Vo)}reflect(e){return this.sub(Vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vo=new X,Uc=new es;class ts{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,tn):tn.fromBufferAttribute(s,a),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),us.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),us.copy(i.boundingBox)),us.applyMatrix4(e.matrixWorld),this.union(us)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),fs.subVectors(this.max,Ar),Vi.subVectors(e.a,Ar),ki.subVectors(e.b,Ar),Wi.subVectors(e.c,Ar),Kn.subVectors(ki,Vi),jn.subVectors(Wi,ki),_i.subVectors(Vi,Wi);let t=[0,-Kn.z,Kn.y,0,-jn.z,jn.y,0,-_i.z,_i.y,Kn.z,0,-Kn.x,jn.z,0,-jn.x,_i.z,0,-_i.x,-Kn.y,Kn.x,0,-jn.y,jn.x,0,-_i.y,_i.x,0];return!ko(t,Vi,ki,Wi,fs)||(t=[1,0,0,0,1,0,0,0,1],!ko(t,Vi,ki,Wi,fs))?!1:(hs.crossVectors(Kn,jn),t=[hs.x,hs.y,hs.z],ko(t,Vi,ki,Wi,fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Cn=[new X,new X,new X,new X,new X,new X,new X,new X],tn=new X,us=new ts,Vi=new X,ki=new X,Wi=new X,Kn=new X,jn=new X,_i=new X,Ar=new X,fs=new X,hs=new X,vi=new X;function ko(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){vi.fromArray(n,s);const o=r.x*Math.abs(vi.x)+r.y*Math.abs(vi.y)+r.z*Math.abs(vi.z),l=e.dot(vi),u=t.dot(vi),c=i.dot(vi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const l_=new ts,wr=new X,Wo=new X;class rl{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):l_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);const t=wr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(wr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(Wo)),this.expandByPoint(wr.copy(e.center).sub(Wo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new X,Xo=new X,ds=new X,Zn=new X,qo=new X,ps=new X,$o=new X;class c_{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Xo.copy(e).add(t).multiplyScalar(.5),ds.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub(Xo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ds),o=Zn.dot(this.direction),l=-Zn.dot(ds),u=Zn.lengthSq(),c=Math.abs(1-a*a);let f,d,m,M;if(c>0)if(f=a*l-o,d=a*o-l,M=s*c,f>=0)if(d>=-M)if(d<=M){const E=1/c;f*=E,d*=E,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+u}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+u;else d<=-M?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+u):d<=M?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+u);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Xo).addScaledVector(ds,d),m}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const i=Pn.dot(this.direction),r=Pn.dot(Pn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,i,r,s){qo.subVectors(t,e),ps.subVectors(i,e),$o.crossVectors(qo,ps);let a=this.direction.dot($o),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zn.subVectors(this.origin,e);const l=o*this.direction.dot(ps.crossVectors(Zn,ps));if(l<0)return null;const u=o*this.direction.dot(qo.cross(Zn));if(u<0||l+u>a)return null;const c=-o*Zn.dot($o);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,r,s,a,o,l,u,c,f,d,m,M,E,p){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u,c,f,d,m,M,E,p)}set(e,t,i,r,s,a,o,l,u,c,f,d,m,M,E,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=m,h[7]=M,h[11]=E,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Xi.setFromMatrixColumn(e,0).length(),s=1/Xi.setFromMatrixColumn(e,1).length(),a=1/Xi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*c,m=a*f,M=o*c,E=o*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=m+M*u,t[5]=d-E*u,t[9]=-o*l,t[2]=E-d*u,t[6]=M+m*u,t[10]=a*l}else if(e.order==="YXZ"){const d=l*c,m=l*f,M=u*c,E=u*f;t[0]=d+E*o,t[4]=M*o-m,t[8]=a*u,t[1]=a*f,t[5]=a*c,t[9]=-o,t[2]=m*o-M,t[6]=E+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*c,m=l*f,M=u*c,E=u*f;t[0]=d-E*o,t[4]=-a*f,t[8]=M+m*o,t[1]=m+M*o,t[5]=a*c,t[9]=E-d*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*c,m=a*f,M=o*c,E=o*f;t[0]=l*c,t[4]=M*u-m,t[8]=d*u+E,t[1]=l*f,t[5]=E*u+d,t[9]=m*u-M,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*u,M=o*l,E=o*u;t[0]=l*c,t[4]=E-d*f,t[8]=M*f+m,t[1]=f,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=m*f+M,t[10]=d-E*f}else if(e.order==="XZY"){const d=a*l,m=a*u,M=o*l,E=o*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+E,t[5]=a*c,t[9]=m*f-M,t[2]=M*f-m,t[6]=o*c,t[10]=E*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(u_,e,f_)}lookAt(e,t,i){const r=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Jn.crossVectors(i,Xt),Jn.lengthSq()===0&&(Math.abs(i.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Jn.crossVectors(i,Xt)),Jn.normalize(),ms.crossVectors(Xt,Jn),r[0]=Jn.x,r[4]=ms.x,r[8]=Xt.x,r[1]=Jn.y,r[5]=ms.y,r[9]=Xt.y,r[2]=Jn.z,r[6]=ms.z,r[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],m=i[13],M=i[2],E=i[6],p=i[10],h=i[14],T=i[3],S=i[7],b=i[11],C=i[15],R=r[0],w=r[4],O=r[8],B=r[12],v=r[1],A=r[5],V=r[9],ne=r[13],D=r[2],ee=r[6],q=r[10],Q=r[14],H=r[3],re=r[7],oe=r[11],fe=r[15];return s[0]=a*R+o*v+l*D+u*H,s[4]=a*w+o*A+l*ee+u*re,s[8]=a*O+o*V+l*q+u*oe,s[12]=a*B+o*ne+l*Q+u*fe,s[1]=c*R+f*v+d*D+m*H,s[5]=c*w+f*A+d*ee+m*re,s[9]=c*O+f*V+d*q+m*oe,s[13]=c*B+f*ne+d*Q+m*fe,s[2]=M*R+E*v+p*D+h*H,s[6]=M*w+E*A+p*ee+h*re,s[10]=M*O+E*V+p*q+h*oe,s[14]=M*B+E*ne+p*Q+h*fe,s[3]=T*R+S*v+b*D+C*H,s[7]=T*w+S*A+b*ee+C*re,s[11]=T*O+S*V+b*q+C*oe,s[15]=T*B+S*ne+b*Q+C*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],m=e[14],M=e[3],E=e[7],p=e[11],h=e[15];return M*(+s*l*f-r*u*f-s*o*d+i*u*d+r*o*m-i*l*m)+E*(+t*l*m-t*u*d+s*a*d-r*a*m+r*u*c-s*l*c)+p*(+t*u*f-t*o*m-s*a*f+i*a*m+s*o*c-i*u*c)+h*(-r*o*c-t*l*f+t*o*d+r*a*f-i*a*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],m=e[11],M=e[12],E=e[13],p=e[14],h=e[15],T=f*p*u-E*d*u+E*l*m-o*p*m-f*l*h+o*d*h,S=M*d*u-c*p*u-M*l*m+a*p*m+c*l*h-a*d*h,b=c*E*u-M*f*u+M*o*m-a*E*m-c*o*h+a*f*h,C=M*f*l-c*E*l-M*o*d+a*E*d+c*o*p-a*f*p,R=t*T+i*S+r*b+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=T*w,e[1]=(E*d*s-f*p*s-E*r*m+i*p*m+f*r*h-i*d*h)*w,e[2]=(o*p*s-E*l*s+E*r*u-i*p*u-o*r*h+i*l*h)*w,e[3]=(f*l*s-o*d*s-f*r*u+i*d*u+o*r*m-i*l*m)*w,e[4]=S*w,e[5]=(c*p*s-M*d*s+M*r*m-t*p*m-c*r*h+t*d*h)*w,e[6]=(M*l*s-a*p*s-M*r*u+t*p*u+a*r*h-t*l*h)*w,e[7]=(a*d*s-c*l*s+c*r*u-t*d*u-a*r*m+t*l*m)*w,e[8]=b*w,e[9]=(M*f*s-c*E*s-M*i*m+t*E*m+c*i*h-t*f*h)*w,e[10]=(a*E*s-M*o*s+M*i*u-t*E*u-a*i*h+t*o*h)*w,e[11]=(c*o*s-a*f*s-c*i*u+t*f*u+a*i*m-t*o*m)*w,e[12]=C*w,e[13]=(c*E*r-M*f*r+M*i*d-t*E*d-c*i*p+t*f*p)*w,e[14]=(M*o*r-a*E*r-M*i*l+t*E*l+a*i*p-t*o*p)*w,e[15]=(a*f*r-c*o*r+c*i*l-t*f*l-a*i*d+t*o*d)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,c=a+a,f=o+o,d=s*u,m=s*c,M=s*f,E=a*c,p=a*f,h=o*f,T=l*u,S=l*c,b=l*f,C=i.x,R=i.y,w=i.z;return r[0]=(1-(E+h))*C,r[1]=(m+b)*C,r[2]=(M-S)*C,r[3]=0,r[4]=(m-b)*R,r[5]=(1-(d+h))*R,r[6]=(p+T)*R,r[7]=0,r[8]=(M+S)*w,r[9]=(p-T)*w,r[10]=(1-(d+E))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Xi.set(r[0],r[1],r[2]).length();const a=Xi.set(r[4],r[5],r[6]).length(),o=Xi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],nn.copy(this);const u=1/s,c=1/a,f=1/o;return nn.elements[0]*=u,nn.elements[1]*=u,nn.elements[2]*=u,nn.elements[4]*=c,nn.elements[5]*=c,nn.elements[6]*=c,nn.elements[8]*=f,nn.elements[9]*=f,nn.elements[10]*=f,t.setFromRotationMatrix(nn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Gn){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let m,M;if(o===Gn)m=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===js)m=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Gn){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(a-s),d=(t+e)*u,m=(i+r)*c;let M,E;if(o===Gn)M=(a+s)*f,E=-2*f;else if(o===js)M=s*f,E=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=E,l[14]=-M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Xi=new X,nn=new ht,u_=new X(0,0,0),f_=new X(1,1,1),Jn=new X,ms=new X,Xt=new X,Ic=new ht,Nc=new es;class Xn{constructor(e=0,t=0,i=0,r=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ic.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ic,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class Kf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let h_=0;const Fc=new X,qi=new es,Ln=new ht,gs=new X,Rr=new X,d_=new X,p_=new es,Oc=new X(1,0,0),Bc=new X(0,1,0),zc=new X(0,0,1),m_={type:"added"},g_={type:"removed"},Yo={type:"childadded",child:null},Ko={type:"childremoved",child:null};class Yt extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=Qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new X,t=new Xn,i=new es,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ve}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis(Oc,e)}rotateY(e){return this.rotateOnAxis(Bc,e)}rotateZ(e){return this.rotateOnAxis(zc,e)}translateOnAxis(e,t){return Fc.copy(e).applyQuaternion(this.quaternion),this.position.add(Fc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oc,e)}translateY(e){return this.translateOnAxis(Bc,e)}translateZ(e){return this.translateOnAxis(zc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?gs.copy(e):gs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Rr,gs,this.up):Ln.lookAt(gs,Rr,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),qi.setFromRotationMatrix(Ln),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(m_),Yo.child=e,this.dispatchEvent(Yo),Yo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(g_),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,d_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,p_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),M=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),M.length>0&&(i.nodes=M)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new X(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new X,Dn=new X,jo=new X,Un=new X,$i=new X,Yi=new X,Hc=new X,Zo=new X,Jo=new X,Qo=new X;class En{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),rn.subVectors(e,t),r.cross(rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){rn.subVectors(r,t),Dn.subVectors(i,t),jo.subVectors(e,t);const a=rn.dot(rn),o=rn.dot(Dn),l=rn.dot(jo),u=Dn.dot(Dn),c=Dn.dot(jo),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(u*l-o*c)*d,M=(a*c-o*l)*d;return s.set(1-m-M,M,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Un.x),l.addScaledVector(a,Un.y),l.addScaledVector(o,Un.z),l)}static isFrontFacing(e,t,i,r){return rn.subVectors(i,t),Dn.subVectors(e,t),rn.cross(Dn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),rn.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return En.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;$i.subVectors(r,i),Yi.subVectors(s,i),Zo.subVectors(e,i);const l=$i.dot(Zo),u=Yi.dot(Zo);if(l<=0&&u<=0)return t.copy(i);Jo.subVectors(e,r);const c=$i.dot(Jo),f=Yi.dot(Jo);if(c>=0&&f<=c)return t.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector($i,a);Qo.subVectors(e,s);const m=$i.dot(Qo),M=Yi.dot(Qo);if(M>=0&&m<=M)return t.copy(s);const E=m*u-l*M;if(E<=0&&u>=0&&M<=0)return o=u/(u-M),t.copy(i).addScaledVector(Yi,o);const p=c*M-m*f;if(p<=0&&f-c>=0&&m-M>=0)return Hc.subVectors(s,r),o=(f-c)/(f-c+(m-M)),t.copy(r).addScaledVector(Hc,o);const h=1/(p+E+d);return a=E*h,o=d*h,t.copy(i).addScaledVector($i,a).addScaledVector(Yi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},_s={h:0,s:0,l:0};function ea(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=e_(e,1),t=Vt(t,0,1),i=Vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ea(a,s,e+1/3),this.g=ea(a,s,e),this.b=ea(a,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=_n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_n){const i=jf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=Ho(e.r),this.g=Ho(e.g),this.b=Ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return Ze.fromWorkingColorSpace(At.copy(this),e),Math.round(Vt(At.r*255,0,255))*65536+Math.round(Vt(At.g*255,0,255))*256+Math.round(Vt(At.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(At.copy(this),t);const i=At.r,r=At.g,s=At.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=c<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=_n){Ze.fromWorkingColorSpace(At.copy(this),e);const t=At.r,i=At.g,r=At.b;return e!==_n?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(_s);const i=Bo(Qn.h,_s.h,t),r=Bo(Qn.s,_s.s,t),s=Bo(Qn.l,_s.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Je;Je.NAMES=jf;let __=0;class ho extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=Qr(),this.name="",this.type="Material",this.blending=ur,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Aa,this.blendDst=wa,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(i.blending=this.blending),this.side!==ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Aa&&(i.blendSrc=this.blendSrc),this.blendDst!==wa&&(i.blendDst=this.blendDst),this.blendEquation!==wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ac&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zf extends ho{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new X,vs=new $e;class Tn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return n_("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vs.fromBufferAttribute(this,t),vs.applyMatrix3(e),this.setXY(t,vs.x,vs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=br(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=br(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=br(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=br(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=br(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wc&&(e.usage=this.usage),e}}class Jf extends Tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Qf extends Tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ni extends Tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let v_=0;const Jt=new ht,ta=new Yt,Ki=new X,qt=new ts,Cr=new ts,gt=new X;class Bi extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=Qr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xf(e)?Qf:Jf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,i){return Jt.makeTranslation(e,t,i),this.applyMatrix4(Jt),this}scale(e,t,i){return Jt.makeScale(e,t,i),this.applyMatrix4(Jt),this}lookAt(e){return ta.lookAt(e),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ni(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Cr.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(qt.min,Cr.min),qt.expandByPoint(gt),gt.addVectors(qt.max,Cr.max),qt.expandByPoint(gt)):(qt.expandByPoint(Cr.min),qt.expandByPoint(Cr.max))}qt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)gt.fromBufferAttribute(o,u),l&&(Ki.fromBufferAttribute(e,u),gt.add(Ki)),r=Math.max(r,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<i.count;O++)o[O]=new X,l[O]=new X;const u=new X,c=new X,f=new X,d=new $e,m=new $e,M=new $e,E=new X,p=new X;function h(O,B,v){u.fromBufferAttribute(i,O),c.fromBufferAttribute(i,B),f.fromBufferAttribute(i,v),d.fromBufferAttribute(s,O),m.fromBufferAttribute(s,B),M.fromBufferAttribute(s,v),c.sub(u),f.sub(u),m.sub(d),M.sub(d);const A=1/(m.x*M.y-M.x*m.y);isFinite(A)&&(E.copy(c).multiplyScalar(M.y).addScaledVector(f,-m.y).multiplyScalar(A),p.copy(f).multiplyScalar(m.x).addScaledVector(c,-M.x).multiplyScalar(A),o[O].add(E),o[B].add(E),o[v].add(E),l[O].add(p),l[B].add(p),l[v].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let O=0,B=T.length;O<B;++O){const v=T[O],A=v.start,V=v.count;for(let ne=A,D=A+V;ne<D;ne+=3)h(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const S=new X,b=new X,C=new X,R=new X;function w(O){C.fromBufferAttribute(r,O),R.copy(C);const B=o[O];S.copy(B),S.sub(C.multiplyScalar(C.dot(B))).normalize(),b.crossVectors(R,B);const A=b.dot(l[O])<0?-1:1;a.setXYZW(O,S.x,S.y,S.z,A)}for(let O=0,B=T.length;O<B;++O){const v=T[O],A=v.start,V=v.count;for(let ne=A,D=A+V;ne<D;ne+=3)w(e.getX(ne+0)),w(e.getX(ne+1)),w(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new X,s=new X,a=new X,o=new X,l=new X,u=new X,c=new X,f=new X;if(e)for(let d=0,m=e.count;d<m;d+=3){const M=e.getX(d+0),E=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,M),s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,p),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),o.fromBufferAttribute(i,M),l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,p),o.add(c),l.add(c),u.add(c),i.setXYZ(M,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,f=o.normalized,d=new u.constructor(l.length*c);let m=0,M=0;for(let E=0,p=l.length;E<p;E++){o.isInterleavedBufferAttribute?m=l[E]*o.data.stride+o.offset:m=l[E]*c;for(let h=0;h<c;h++)d[M++]=u[m++]}return new Tn(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,f=u.length;c<f;c++){const d=u[c],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const m=u[f];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,m=f.length;d<m;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gc=new ht,xi=new c_,xs=new rl,Vc=new X,ji=new X,Zi=new X,Ji=new X,na=new X,Ms=new X,Ss=new $e,Es=new $e,ys=new $e,kc=new X,Wc=new X,Xc=new X,Ts=new X,bs=new X;class yn extends Yt{constructor(e=new Bi,t=new Zf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ms.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],f=s[l];c!==0&&(na.fromBufferAttribute(f,e),a?Ms.addScaledVector(na,c):Ms.addScaledVector(na.sub(t),c))}t.add(Ms)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xs.copy(i.boundingSphere),xs.applyMatrix4(s),xi.copy(e.ray).recast(e.near),!(xs.containsPoint(xi.origin)===!1&&(xi.intersectSphere(xs,Vc)===null||xi.origin.distanceToSquared(Vc)>(e.far-e.near)**2))&&(Gc.copy(s).invert(),xi.copy(e.ray).applyMatrix4(Gc),!(i.boundingBox!==null&&xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let M=0,E=d.length;M<E;M++){const p=d[M],h=a[p.materialIndex],T=Math.max(p.start,m.start),S=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=T,C=S;b<C;b+=3){const R=o.getX(b),w=o.getX(b+1),O=o.getX(b+2);r=As(this,h,e,i,u,c,f,R,w,O),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const M=Math.max(0,m.start),E=Math.min(o.count,m.start+m.count);for(let p=M,h=E;p<h;p+=3){const T=o.getX(p),S=o.getX(p+1),b=o.getX(p+2);r=As(this,a,e,i,u,c,f,T,S,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let M=0,E=d.length;M<E;M++){const p=d[M],h=a[p.materialIndex],T=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=T,C=S;b<C;b+=3){const R=b,w=b+1,O=b+2;r=As(this,h,e,i,u,c,f,R,w,O),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const M=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let p=M,h=E;p<h;p+=3){const T=p,S=p+1,b=p+2;r=As(this,a,e,i,u,c,f,T,S,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function x_(n,e,t,i,r,s,a,o){let l;if(e.side===kt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ci,o),l===null)return null;bs.copy(o),bs.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(bs);return u<t.near||u>t.far?null:{distance:u,point:bs.clone(),object:n}}function As(n,e,t,i,r,s,a,o,l,u){n.getVertexPosition(o,ji),n.getVertexPosition(l,Zi),n.getVertexPosition(u,Ji);const c=x_(n,e,t,i,ji,Zi,Ji,Ts);if(c){r&&(Ss.fromBufferAttribute(r,o),Es.fromBufferAttribute(r,l),ys.fromBufferAttribute(r,u),c.uv=En.getInterpolation(Ts,ji,Zi,Ji,Ss,Es,ys,new $e)),s&&(Ss.fromBufferAttribute(s,o),Es.fromBufferAttribute(s,l),ys.fromBufferAttribute(s,u),c.uv1=En.getInterpolation(Ts,ji,Zi,Ji,Ss,Es,ys,new $e)),a&&(kc.fromBufferAttribute(a,o),Wc.fromBufferAttribute(a,l),Xc.fromBufferAttribute(a,u),c.normal=En.getInterpolation(Ts,ji,Zi,Ji,kc,Wc,Xc,new X),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new X,materialIndex:0};En.getNormal(ji,Zi,Ji,f.normal),c.face=f}return c}class ns extends Bi{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],f=[];let d=0,m=0;M("z","y","x",-1,-1,i,t,e,a,s,0),M("z","y","x",1,-1,i,t,-e,a,s,1),M("x","z","y",1,1,e,i,t,r,a,2),M("x","z","y",1,-1,e,i,-t,r,a,3),M("x","y","z",1,-1,e,t,i,r,s,4),M("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ni(u,3)),this.setAttribute("normal",new Ni(c,3)),this.setAttribute("uv",new Ni(f,2));function M(E,p,h,T,S,b,C,R,w,O,B){const v=b/w,A=C/O,V=b/2,ne=C/2,D=R/2,ee=w+1,q=O+1;let Q=0,H=0;const re=new X;for(let oe=0;oe<q;oe++){const fe=oe*A-ne;for(let _e=0;_e<ee;_e++){const Ie=_e*v-V;re[E]=Ie*T,re[p]=fe*S,re[h]=D,u.push(re.x,re.y,re.z),re[E]=0,re[p]=0,re[h]=R>0?1:-1,c.push(re.x,re.y,re.z),f.push(_e/w),f.push(1-oe/O),Q+=1}}for(let oe=0;oe<O;oe++)for(let fe=0;fe<w;fe++){const _e=d+fe+ee*oe,Ie=d+fe+ee*(oe+1),Z=d+(fe+1)+ee*(oe+1),ce=d+(fe+1)+ee*oe;l.push(_e,Ie,ce),l.push(Ie,Z,ce),H+=6}o.addGroup(m,H,B),m+=H,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Dt(n){const e={};for(let t=0;t<n.length;t++){const i=gr(n[t]);for(const r in i)e[r]=i[r]}return e}function M_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function eh(n){return n.getRenderTarget()===null?n.outputColorSpace:Ze.workingColorSpace}const S_={clone:gr,merge:Dt};var E_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,y_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends ho{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E_,this.fragmentShader=y_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=M_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class th extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new X,qc=new $e,$c=new $e;class sn extends th{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ua*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ua*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ei.x,ei.y).multiplyScalar(-e/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ei.x,ei.y).multiplyScalar(-e/ei.z)}getViewSize(e,t){return this.getViewBounds(e,qc,$c),t.subVectors($c,qc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qi=-90,er=1;class T_ extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new sn(Qi,er,e,t);r.layers=this.layers,this.add(r);const s=new sn(Qi,er,e,t);s.layers=this.layers,this.add(s);const a=new sn(Qi,er,e,t);a.layers=this.layers,this.add(a);const o=new sn(Qi,er,e,t);o.layers=this.layers,this.add(o);const l=new sn(Qi,er,e,t);l.layers=this.layers,this.add(l);const u=new sn(Qi,er,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const u of t)this.remove(u);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===js)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,d,m),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class nh extends Bt{constructor(e,t,i,r,s,a,o,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:dr,super(e,t,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class b_ extends Fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new nh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ns(5,5,5),s=new qn({name:"CubemapFromEquirect",uniforms:gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:si});s.uniforms.tEquirect.value=t;const a=new yn(r,s),o=t.minFilter;return t.minFilter===Ci&&(t.minFilter=Gt),new T_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const ia=new X,A_=new X,w_=new Ve;class Ti{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ia.subVectors(i,t).cross(A_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ia),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||w_.getNormalMatrix(e),r=this.coplanarPoint(ia).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new rl,ws=new X;class ih{constructor(e=new Ti,t=new Ti,i=new Ti,r=new Ti,s=new Ti,a=new Ti){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],m=r[8],M=r[9],E=r[10],p=r[11],h=r[12],T=r[13],S=r[14],b=r[15];if(i[0].setComponents(l-s,d-u,p-m,b-h).normalize(),i[1].setComponents(l+s,d+u,p+m,b+h).normalize(),i[2].setComponents(l+a,d+c,p+M,b+T).normalize(),i[3].setComponents(l-a,d-c,p-M,b-T).normalize(),i[4].setComponents(l-o,d-f,p-E,b-S).normalize(),t===Gn)i[5].setComponents(l+o,d+f,p+E,b+S).normalize();else if(t===js)i[5].setComponents(o,f,E,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ws.x=r.normal.x>0?e.max.x:e.min.x,ws.y=r.normal.y>0?e.max.y:e.min.y,ws.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ws)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rh(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function R_(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,d=u.usage,m=f.byteLength,M=n.createBuffer();n.bindBuffer(c,M),n.bufferData(c,f,d),u.onUploadCallback();let E;if(f instanceof Float32Array)E=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)E=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)E=n.SHORT;else if(f instanceof Uint32Array)E=n.UNSIGNED_INT;else if(f instanceof Int32Array)E=n.INT;else if(f instanceof Int8Array)E=n.BYTE;else if(f instanceof Uint8Array)E=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)E=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:M,type:E,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:m}}function s(u,c,f){const d=c.array,m=c._updateRange,M=c.updateRanges;if(n.bindBuffer(f,u),m.count===-1&&M.length===0&&n.bufferSubData(f,0,d),M.length!==0){for(let E=0,p=M.length;E<p;E++){const h=M[E];t?n.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):n.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}c.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:a,remove:o,update:l}}class is extends Bi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,f=e/o,d=t/l,m=[],M=[],E=[],p=[];for(let h=0;h<c;h++){const T=h*d-a;for(let S=0;S<u;S++){const b=S*f-s;M.push(b,-T,0),E.push(0,0,1),p.push(S/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<o;T++){const S=T+u*h,b=T+u*(h+1),C=T+1+u*(h+1),R=T+1+u*h;m.push(S,b,R),m.push(b,C,R)}this.setIndex(m),this.setAttribute("position",new Ni(M,3)),this.setAttribute("normal",new Ni(E,3)),this.setAttribute("uv",new Ni(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.widthSegments,e.heightSegments)}}var C_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P_=`#ifdef USE_ALPHAHASH
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
#endif`,L_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N_=`#ifdef USE_AOMAP
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
#endif`,F_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O_=`#ifdef USE_BATCHING
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
#endif`,B_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,z_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,H_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,V_=`#ifdef USE_IRIDESCENCE
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
#endif`,k_=`#ifdef USE_BUMPMAP
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
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,K_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Z_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,J_=`#define PI 3.141592653589793
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
} // validated`,Q_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ev=`vec3 transformedNormal = objectNormal;
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
#endif`,tv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sv="gl_FragColor = linearToOutputTexel( gl_FragColor );",ov=`
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
}`,av=`#ifdef USE_ENVMAP
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
#endif`,lv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cv=`#ifdef USE_ENVMAP
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
#endif`,uv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fv=`#ifdef USE_ENVMAP
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
#endif`,hv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gv=`#ifdef USE_GRADIENTMAP
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
}`,_v=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sv=`uniform bool receiveShadow;
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
#endif`,Ev=`#ifdef USE_ENVMAP
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
#endif`,yv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Av=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wv=`PhysicalMaterial material;
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
#endif`,Rv=`struct PhysicalMaterial {
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
}`,Cv=`
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
#endif`,Pv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Nv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ov=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zv=`#if defined( USE_POINTS_UV )
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
#endif`,Hv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wv=`#ifdef USE_MORPHNORMALS
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
#endif`,Xv=`#ifdef USE_MORPHTARGETS
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
#endif`,qv=`#ifdef USE_MORPHTARGETS
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
#endif`,$v=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jv=`#ifdef USE_NORMALMAP
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
#endif`,Qv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,r0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,p0=`float getShadowMask() {
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
}`,m0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g0=`#ifdef USE_SKINNING
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
#endif`,_0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,v0=`#ifdef USE_SKINNING
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
#endif`,x0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,M0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,S0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y0=`#ifdef USE_TRANSMISSION
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
#endif`,T0=`#ifdef USE_TRANSMISSION
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P0=`uniform sampler2D t2D;
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`#include <common>
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
}`,F0=`#if DEPTH_PACKING == 3200
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
}`,O0=`#define DISTANCE
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
}`,B0=`#define DISTANCE
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
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`uniform float scale;
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
}`,V0=`uniform vec3 diffuse;
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
}`,k0=`#include <common>
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
}`,W0=`uniform vec3 diffuse;
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
}`,X0=`#define LAMBERT
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
}`,q0=`#define LAMBERT
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
}`,$0=`#define MATCAP
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
}`,Y0=`#define MATCAP
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
}`,K0=`#define NORMAL
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
}`,j0=`#define NORMAL
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
}`,Z0=`#define PHONG
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
}`,J0=`#define PHONG
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
}`,Q0=`#define STANDARD
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
}`,ex=`#define STANDARD
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
}`,tx=`#define TOON
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
}`,nx=`#define TOON
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
}`,ix=`uniform float size;
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
}`,rx=`uniform vec3 diffuse;
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
}`,sx=`#include <common>
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
}`,ox=`uniform vec3 color;
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
}`,ax=`uniform float rotation;
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
}`,lx=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:C_,alphahash_pars_fragment:P_,alphamap_fragment:L_,alphamap_pars_fragment:D_,alphatest_fragment:U_,alphatest_pars_fragment:I_,aomap_fragment:N_,aomap_pars_fragment:F_,batching_pars_vertex:O_,batching_vertex:B_,begin_vertex:z_,beginnormal_vertex:H_,bsdfs:G_,iridescence_fragment:V_,bumpmap_pars_fragment:k_,clipping_planes_fragment:W_,clipping_planes_pars_fragment:X_,clipping_planes_pars_vertex:q_,clipping_planes_vertex:$_,color_fragment:Y_,color_pars_fragment:K_,color_pars_vertex:j_,color_vertex:Z_,common:J_,cube_uv_reflection_fragment:Q_,defaultnormal_vertex:ev,displacementmap_pars_vertex:tv,displacementmap_vertex:nv,emissivemap_fragment:iv,emissivemap_pars_fragment:rv,colorspace_fragment:sv,colorspace_pars_fragment:ov,envmap_fragment:av,envmap_common_pars_fragment:lv,envmap_pars_fragment:cv,envmap_pars_vertex:uv,envmap_physical_pars_fragment:Ev,envmap_vertex:fv,fog_vertex:hv,fog_pars_vertex:dv,fog_fragment:pv,fog_pars_fragment:mv,gradientmap_pars_fragment:gv,lightmap_fragment:_v,lightmap_pars_fragment:vv,lights_lambert_fragment:xv,lights_lambert_pars_fragment:Mv,lights_pars_begin:Sv,lights_toon_fragment:yv,lights_toon_pars_fragment:Tv,lights_phong_fragment:bv,lights_phong_pars_fragment:Av,lights_physical_fragment:wv,lights_physical_pars_fragment:Rv,lights_fragment_begin:Cv,lights_fragment_maps:Pv,lights_fragment_end:Lv,logdepthbuf_fragment:Dv,logdepthbuf_pars_fragment:Uv,logdepthbuf_pars_vertex:Iv,logdepthbuf_vertex:Nv,map_fragment:Fv,map_pars_fragment:Ov,map_particle_fragment:Bv,map_particle_pars_fragment:zv,metalnessmap_fragment:Hv,metalnessmap_pars_fragment:Gv,morphinstance_vertex:Vv,morphcolor_vertex:kv,morphnormal_vertex:Wv,morphtarget_pars_vertex:Xv,morphtarget_vertex:qv,normal_fragment_begin:$v,normal_fragment_maps:Yv,normal_pars_fragment:Kv,normal_pars_vertex:jv,normal_vertex:Zv,normalmap_pars_fragment:Jv,clearcoat_normal_fragment_begin:Qv,clearcoat_normal_fragment_maps:e0,clearcoat_pars_fragment:t0,iridescence_pars_fragment:n0,opaque_fragment:i0,packing:r0,premultiplied_alpha_fragment:s0,project_vertex:o0,dithering_fragment:a0,dithering_pars_fragment:l0,roughnessmap_fragment:c0,roughnessmap_pars_fragment:u0,shadowmap_pars_fragment:f0,shadowmap_pars_vertex:h0,shadowmap_vertex:d0,shadowmask_pars_fragment:p0,skinbase_vertex:m0,skinning_pars_vertex:g0,skinning_vertex:_0,skinnormal_vertex:v0,specularmap_fragment:x0,specularmap_pars_fragment:M0,tonemapping_fragment:S0,tonemapping_pars_fragment:E0,transmission_fragment:y0,transmission_pars_fragment:T0,uv_pars_fragment:b0,uv_pars_vertex:A0,uv_vertex:w0,worldpos_vertex:R0,background_vert:C0,background_frag:P0,backgroundCube_vert:L0,backgroundCube_frag:D0,cube_vert:U0,cube_frag:I0,depth_vert:N0,depth_frag:F0,distanceRGBA_vert:O0,distanceRGBA_frag:B0,equirect_vert:z0,equirect_frag:H0,linedashed_vert:G0,linedashed_frag:V0,meshbasic_vert:k0,meshbasic_frag:W0,meshlambert_vert:X0,meshlambert_frag:q0,meshmatcap_vert:$0,meshmatcap_frag:Y0,meshnormal_vert:K0,meshnormal_frag:j0,meshphong_vert:Z0,meshphong_frag:J0,meshphysical_vert:Q0,meshphysical_frag:ex,meshtoon_vert:tx,meshtoon_frag:nx,points_vert:ix,points_frag:rx,shadow_vert:sx,shadow_frag:ox,sprite_vert:ax,sprite_frag:lx},pe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Mn={basic:{uniforms:Dt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Dt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Dt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Dt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Dt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Dt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Dt([pe.points,pe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Dt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Dt([pe.common,pe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Dt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Dt([pe.sprite,pe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Dt([pe.common,pe.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Dt([pe.lights,pe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Mn.physical={uniforms:Dt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Rs={r:0,b:0,g:0},Si=new Xn,cx=new ht;function ux(n,e,t,i,r,s,a){const o=new Je(0);let l=s===!0?0:1,u,c,f=null,d=0,m=null;function M(p,h){let T=!1,S=h.isScene===!0?h.background:null;S&&S.isTexture&&(S=(h.backgroundBlurriness>0?t:e).get(S)),S===null?E(o,l):S&&S.isColor&&(E(S,1),T=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===uo)?(c===void 0&&(c=new yn(new ns(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:gr(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Si.copy(h.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cx.makeRotationFromEuler(Si)),c.material.toneMapped=Ze.getTransfer(S.colorSpace)!==rt,(f!==S||d!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new yn(new is(2,2),new qn({name:"BackgroundMaterial",uniforms:gr(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function E(p,h){p.getRGB(Rs,eh(n)),i.buffers.color.setClear(Rs.r,Rs.g,Rs.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),l=h,E(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,E(o,l)},render:M}}function fx(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let u=l,c=!1;function f(D,ee,q,Q,H){let re=!1;if(a){const oe=E(Q,q,ee);u!==oe&&(u=oe,m(u.object)),re=h(D,Q,q,H),re&&T(D,Q,q,H)}else{const oe=ee.wireframe===!0;(u.geometry!==Q.id||u.program!==q.id||u.wireframe!==oe)&&(u.geometry=Q.id,u.program=q.id,u.wireframe=oe,re=!0)}H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(re||c)&&(c=!1,O(D,ee,q,Q),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function M(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function E(D,ee,q){const Q=q.wireframe===!0;let H=o[D.id];H===void 0&&(H={},o[D.id]=H);let re=H[ee.id];re===void 0&&(re={},H[ee.id]=re);let oe=re[Q];return oe===void 0&&(oe=p(d()),re[Q]=oe),oe}function p(D){const ee=[],q=[],Q=[];for(let H=0;H<r;H++)ee[H]=0,q[H]=0,Q[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:q,attributeDivisors:Q,object:D,attributes:{},index:null}}function h(D,ee,q,Q){const H=u.attributes,re=ee.attributes;let oe=0;const fe=q.getAttributes();for(const _e in fe)if(fe[_e].location>=0){const Z=H[_e];let ce=re[_e];if(ce===void 0&&(_e==="instanceMatrix"&&D.instanceMatrix&&(ce=D.instanceMatrix),_e==="instanceColor"&&D.instanceColor&&(ce=D.instanceColor)),Z===void 0||Z.attribute!==ce||ce&&Z.data!==ce.data)return!0;oe++}return u.attributesNum!==oe||u.index!==Q}function T(D,ee,q,Q){const H={},re=ee.attributes;let oe=0;const fe=q.getAttributes();for(const _e in fe)if(fe[_e].location>=0){let Z=re[_e];Z===void 0&&(_e==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),_e==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor));const ce={};ce.attribute=Z,Z&&Z.data&&(ce.data=Z.data),H[_e]=ce,oe++}u.attributes=H,u.attributesNum=oe,u.index=Q}function S(){const D=u.newAttributes;for(let ee=0,q=D.length;ee<q;ee++)D[ee]=0}function b(D){C(D,0)}function C(D,ee){const q=u.newAttributes,Q=u.enabledAttributes,H=u.attributeDivisors;q[D]=1,Q[D]===0&&(n.enableVertexAttribArray(D),Q[D]=1),H[D]!==ee&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,ee),H[D]=ee)}function R(){const D=u.newAttributes,ee=u.enabledAttributes;for(let q=0,Q=ee.length;q<Q;q++)ee[q]!==D[q]&&(n.disableVertexAttribArray(q),ee[q]=0)}function w(D,ee,q,Q,H,re,oe){oe===!0?n.vertexAttribIPointer(D,ee,q,H,re):n.vertexAttribPointer(D,ee,q,Q,H,re)}function O(D,ee,q,Q){if(i.isWebGL2===!1&&(D.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const H=Q.attributes,re=q.getAttributes(),oe=ee.defaultAttributeValues;for(const fe in re){const _e=re[fe];if(_e.location>=0){let Ie=H[fe];if(Ie===void 0&&(fe==="instanceMatrix"&&D.instanceMatrix&&(Ie=D.instanceMatrix),fe==="instanceColor"&&D.instanceColor&&(Ie=D.instanceColor)),Ie!==void 0){const Z=Ie.normalized,ce=Ie.itemSize,xe=t.get(Ie);if(xe===void 0)continue;const Ce=xe.buffer,Ae=xe.type,Te=xe.bytesPerElement,qe=i.isWebGL2===!0&&(Ae===n.INT||Ae===n.UNSIGNED_INT||Ie.gpuType===Of);if(Ie.isInterleavedBufferAttribute){const Ue=Ie.data,_=Ue.stride,P=Ie.offset;if(Ue.isInstancedInterleavedBuffer){for(let I=0;I<_e.locationSize;I++)C(_e.location+I,Ue.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let I=0;I<_e.locationSize;I++)b(_e.location+I);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let I=0;I<_e.locationSize;I++)w(_e.location+I,ce/_e.locationSize,Ae,Z,_*Te,(P+ce/_e.locationSize*I)*Te,qe)}else{if(Ie.isInstancedBufferAttribute){for(let Ue=0;Ue<_e.locationSize;Ue++)C(_e.location+Ue,Ie.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let Ue=0;Ue<_e.locationSize;Ue++)b(_e.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let Ue=0;Ue<_e.locationSize;Ue++)w(_e.location+Ue,ce/_e.locationSize,Ae,Z,ce*Te,ce/_e.locationSize*Ue*Te,qe)}}else if(oe!==void 0){const Z=oe[fe];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(_e.location,Z);break;case 3:n.vertexAttrib3fv(_e.location,Z);break;case 4:n.vertexAttrib4fv(_e.location,Z);break;default:n.vertexAttrib1fv(_e.location,Z)}}}}R()}function B(){V();for(const D in o){const ee=o[D];for(const q in ee){const Q=ee[q];for(const H in Q)M(Q[H].object),delete Q[H];delete ee[q]}delete o[D]}}function v(D){if(o[D.id]===void 0)return;const ee=o[D.id];for(const q in ee){const Q=ee[q];for(const H in Q)M(Q[H].object),delete Q[H];delete ee[q]}delete o[D.id]}function A(D){for(const ee in o){const q=o[ee];if(q[D.id]===void 0)continue;const Q=q[D.id];for(const H in Q)M(Q[H].object),delete Q[H];delete q[D.id]}}function V(){ne(),c=!0,u!==l&&(u=l,m(u.object))}function ne(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:V,resetDefaultState:ne,dispose:B,releaseStatesOfGeometry:v,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:b,disableUnusedAttributes:R}}function hx(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,f){n.drawArrays(s,c,f),t.update(f,s,1)}function l(c,f,d){if(d===0)return;let m,M;if(r)m=n,M="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[M](s,c,f,d),t.update(f,s,d)}function u(c,f,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let M=0;M<d;M++)this.render(c[M],f[M]);else{m.multiDrawArraysWEBGL(s,c,0,f,0,d);let M=0;for(let E=0;E<d;E++)M+=f[E];t.update(M,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function dx(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),M=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),E=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,b=a||e.has("OES_texture_float"),C=S&&b,R=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:M,maxAttributes:E,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:T,vertexTextures:S,floatFragmentTextures:b,floatVertexTextures:C,maxSamples:R}}function px(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ti,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=c(f,d,0)},this.setState=function(f,d,m){const M=f.clippingPlanes,E=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||M===null||M.length===0||s&&!p)s?c(null):u();else{const T=s?0:i,S=T*4;let b=h.clippingState||null;l.value=b,b=c(M,d,S,m);for(let C=0;C!==S;++C)b[C]=t[C];h.clippingState=b,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=T}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,m,M){const E=f!==null?f.length:0;let p=null;if(E!==0){if(p=l.value,M!==!0||p===null){const h=m+E*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<h)&&(p=new Float32Array(h));for(let S=0,b=m;S!==E;++S,b+=4)a.copy(f[S]).applyMatrix4(T,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,p}}function mx(n){let e=new WeakMap;function t(a,o){return o===Ra?a.mapping=dr:o===Ca&&(a.mapping=pr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ra||o===Ca)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new b_(l.height);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class sh extends th{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ir=4,Yc=[.125,.215,.35,.446,.526,.582],Ri=20,ra=new sh,Kc=new Je;let sa=null,oa=0,aa=0;const bi=(1+Math.sqrt(5))/2,tr=1/bi,jc=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,bi,tr),new X(0,bi,-tr),new X(tr,0,bi),new X(-tr,0,bi),new X(bi,tr,0),new X(-bi,tr,0)];class Zc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){sa=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sa,oa,aa),e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sa=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Yr,format:an,colorSpace:ui,depthBuffer:!1},r=Jc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gx(s)),this._blurMaterial=_x(s,e,t)}return r}_compileMaterial(e){const t=new yn(this._lodPlanes[0],e);this._renderer.compile(t,ra)}_sceneToCubeUV(e,t,i,r){const o=new sn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Kc),c.toneMapping=oi,c.autoClear=!1;const m=new Zf({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),M=new yn(new ns,m);let E=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,E=!0):(m.color.copy(Kc),E=!0);for(let h=0;h<6;h++){const T=h%3;T===0?(o.up.set(0,l[h],0),o.lookAt(u[h],0,0)):T===1?(o.up.set(0,0,l[h]),o.lookAt(0,u[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,u[h]));const S=this._cubeSize;Cs(r,T*S,h>2?S:0,S,S),c.setRenderTarget(r),E&&c.render(M,o),c.render(e,o)}M.geometry.dispose(),M.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===dr||e.mapping===pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new yn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Cs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ra)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=jc[(r-1)%jc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new yn(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[i]-1,M=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ri-1),E=s/M,p=isFinite(s)?1+Math.floor(c*E):Ri;p>Ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ri}`);const h=[];let T=0;for(let w=0;w<Ri;++w){const O=w/E,B=Math.exp(-O*O/2);h.push(B),w===0?T+=B:w<p&&(T+=2*B)}for(let w=0;w<h.length;w++)h[w]=h[w]/T;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=M,d.mipInt.value=S-i;const b=this._sizeLods[r],C=3*b*(r>S-ir?r-S+ir:0),R=4*(this._cubeSize-b);Cs(t,C,R,3*b,2*b),l.setRenderTarget(t),l.render(f,ra)}}function gx(n){const e=[],t=[],i=[];let r=n;const s=n-ir+1+Yc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-ir?l=Yc[a-n+ir-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,M=6,E=3,p=2,h=1,T=new Float32Array(E*M*m),S=new Float32Array(p*M*m),b=new Float32Array(h*M*m);for(let R=0;R<m;R++){const w=R%3*2/3-1,O=R>2?0:-1,B=[w,O,0,w+2/3,O,0,w+2/3,O+1,0,w,O,0,w+2/3,O+1,0,w,O+1,0];T.set(B,E*M*R),S.set(d,p*M*R);const v=[R,R,R,R,R,R];b.set(v,h*M*R)}const C=new Bi;C.setAttribute("position",new Tn(T,E)),C.setAttribute("uv",new Tn(S,p)),C.setAttribute("faceIndex",new Tn(b,h)),e.push(C),r>ir&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Jc(n,e,t){const i=new Fi(n,e,t);return i.texture.mapping=uo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function _x(n,e,t){const i=new Float32Array(Ri),r=new X(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sl(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Qc(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sl(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function eu(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function sl(){return`

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
	`}function vx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===Ra||l===Ca,c=l===dr||l===pr;if(u||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Zc(n)),f=u?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new Zc(n));const d=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function xx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Mx(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const M in d.attributes)e.remove(d.attributes[M]);for(const M in d.morphAttributes){const E=d.morphAttributes[M];for(let p=0,h=E.length;p<h;p++)e.remove(E[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const M in d)e.update(d[M],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const M in m){const E=m[M];for(let p=0,h=E.length;p<h;p++)e.update(E[p],n.ARRAY_BUFFER)}}function u(f){const d=[],m=f.index,M=f.attributes.position;let E=0;if(m!==null){const T=m.array;E=m.version;for(let S=0,b=T.length;S<b;S+=3){const C=T[S+0],R=T[S+1],w=T[S+2];d.push(C,R,R,w,w,C)}}else if(M!==void 0){const T=M.array;E=M.version;for(let S=0,b=T.length/3-1;S<b;S+=3){const C=S+0,R=S+1,w=S+2;d.push(C,R,R,w,w,C)}}else return;const p=new(Xf(d)?Qf:Jf)(d,1);p.version=E;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function c(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:c}}function Sx(n,e,t,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,l;function u(m){o=m.type,l=m.bytesPerElement}function c(m,M){n.drawElements(s,M,o,m*l),t.update(M,s,1)}function f(m,M,E){if(E===0)return;let p,h;if(r)p=n,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,M,o,m*l,E),t.update(M,s,E)}function d(m,M,E){if(E===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<E;h++)this.render(m[h]/l,M[h]);else{p.multiDrawElementsWEBGL(s,M,0,o,m,0,E);let h=0;for(let T=0;T<E;T++)h+=M[T];t.update(h,s,1)}}this.setMode=a,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function Ex(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function yx(n,e){return n[0]-e[0]}function Tx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function bx(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new yt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,c,f){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const M=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,E=M!==void 0?M.length:0;let p=s.get(c);if(p===void 0||p.count!==E){let ne=function(){A.dispose(),s.delete(c),c.removeEventListener("dispose",ne)};var m=ne;p!==void 0&&p.texture.dispose();const h=c.morphAttributes.position!==void 0,T=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,b=c.morphAttributes.position||[],C=c.morphAttributes.normal||[],R=c.morphAttributes.color||[];let w=0;h===!0&&(w=1),T===!0&&(w=2),S===!0&&(w=3);let O=c.attributes.position.count*w,B=1;O>e.maxTextureSize&&(B=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const v=new Float32Array(O*B*4*E),A=new Yf(v,O,B,E);A.type=Hn,A.needsUpdate=!0;const V=w*4;for(let D=0;D<E;D++){const ee=b[D],q=C[D],Q=R[D],H=O*B*4*D;for(let re=0;re<ee.count;re++){const oe=re*V;h===!0&&(a.fromBufferAttribute(ee,re),v[H+oe+0]=a.x,v[H+oe+1]=a.y,v[H+oe+2]=a.z,v[H+oe+3]=0),T===!0&&(a.fromBufferAttribute(q,re),v[H+oe+4]=a.x,v[H+oe+5]=a.y,v[H+oe+6]=a.z,v[H+oe+7]=0),S===!0&&(a.fromBufferAttribute(Q,re),v[H+oe+8]=a.x,v[H+oe+9]=a.y,v[H+oe+10]=a.z,v[H+oe+11]=Q.itemSize===4?a.w:1)}}p={count:E,texture:A,size:new $e(O,B)},s.set(c,p),c.addEventListener("dispose",ne)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let h=0;for(let S=0;S<d.length;S++)h+=d[S];const T=c.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",T),f.getUniforms().setValue(n,"morphTargetInfluences",d)}f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const M=d===void 0?0:d.length;let E=i[c.id];if(E===void 0||E.length!==M){E=[];for(let b=0;b<M;b++)E[b]=[b,0];i[c.id]=E}for(let b=0;b<M;b++){const C=E[b];C[0]=b,C[1]=d[b]}E.sort(Tx);for(let b=0;b<8;b++)b<M&&E[b][1]?(o[b][0]=E[b][0],o[b][1]=E[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(yx);const p=c.morphAttributes.position,h=c.morphAttributes.normal;let T=0;for(let b=0;b<8;b++){const C=o[b],R=C[0],w=C[1];R!==Number.MAX_SAFE_INTEGER&&w?(p&&c.getAttribute("morphTarget"+b)!==p[R]&&c.setAttribute("morphTarget"+b,p[R]),h&&c.getAttribute("morphNormal"+b)!==h[R]&&c.setAttribute("morphNormal"+b,h[R]),r[b]=w,T+=w):(p&&c.hasAttribute("morphTarget"+b)===!0&&c.deleteAttribute("morphTarget"+b),h&&c.hasAttribute("morphNormal"+b)===!0&&c.deleteAttribute("morphNormal"+b),r[b]=0)}const S=c.morphTargetsRelative?1:1-T;f.getUniforms().setValue(n,"morphTargetBaseInfluence",S),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Ax(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}class oh extends Bt{constructor(e,t,i,r,s,a,o,l,u,c){if(c=c!==void 0?c:Ii,c!==Ii&&c!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ii&&(i=ii),i===void 0&&c===mr&&(i=Ui),super(null,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ut,this.minFilter=l!==void 0?l:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ah=new Bt,lh=new oh(1,1);lh.compareFunction=Wf;const ch=new Yf,uh=new a_,fh=new nh,tu=[],nu=[],iu=new Float32Array(16),ru=new Float32Array(9),su=new Float32Array(4);function vr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=tu[r];if(s===void 0&&(s=new Float32Array(r),tu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function po(n,e){let t=nu[e];t===void 0&&(t=new Int32Array(e),nu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function wx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function Cx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function Px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function Lx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;su.set(i),n.uniformMatrix2fv(this.addr,!1,su),pt(t,i)}}function Dx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;ru.set(i),n.uniformMatrix3fv(this.addr,!1,ru),pt(t,i)}}function Ux(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;iu.set(i),n.uniformMatrix4fv(this.addr,!1,iu),pt(t,i)}}function Ix(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Nx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function Fx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function Ox(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function Bx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function Hx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function Gx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function Vx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?lh:ah;t.setTexture2D(e||s,r)}function kx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||uh,r)}function Wx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||fh,r)}function Xx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ch,r)}function qx(n){switch(n){case 5126:return wx;case 35664:return Rx;case 35665:return Cx;case 35666:return Px;case 35674:return Lx;case 35675:return Dx;case 35676:return Ux;case 5124:case 35670:return Ix;case 35667:case 35671:return Nx;case 35668:case 35672:return Fx;case 35669:case 35673:return Ox;case 5125:return Bx;case 36294:return zx;case 36295:return Hx;case 36296:return Gx;case 35678:case 36198:case 36298:case 36306:case 35682:return Vx;case 35679:case 36299:case 36307:return kx;case 35680:case 36300:case 36308:case 36293:return Wx;case 36289:case 36303:case 36311:case 36292:return Xx}}function $x(n,e){n.uniform1fv(this.addr,e)}function Yx(n,e){const t=vr(e,this.size,2);n.uniform2fv(this.addr,t)}function Kx(n,e){const t=vr(e,this.size,3);n.uniform3fv(this.addr,t)}function jx(n,e){const t=vr(e,this.size,4);n.uniform4fv(this.addr,t)}function Zx(n,e){const t=vr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Jx(n,e){const t=vr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Qx(n,e){const t=vr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function eM(n,e){n.uniform1iv(this.addr,e)}function tM(n,e){n.uniform2iv(this.addr,e)}function nM(n,e){n.uniform3iv(this.addr,e)}function iM(n,e){n.uniform4iv(this.addr,e)}function rM(n,e){n.uniform1uiv(this.addr,e)}function sM(n,e){n.uniform2uiv(this.addr,e)}function oM(n,e){n.uniform3uiv(this.addr,e)}function aM(n,e){n.uniform4uiv(this.addr,e)}function lM(n,e,t){const i=this.cache,r=e.length,s=po(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ah,s[a])}function cM(n,e,t){const i=this.cache,r=e.length,s=po(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||uh,s[a])}function uM(n,e,t){const i=this.cache,r=e.length,s=po(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||fh,s[a])}function fM(n,e,t){const i=this.cache,r=e.length,s=po(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ch,s[a])}function hM(n){switch(n){case 5126:return $x;case 35664:return Yx;case 35665:return Kx;case 35666:return jx;case 35674:return Zx;case 35675:return Jx;case 35676:return Qx;case 5124:case 35670:return eM;case 35667:case 35671:return tM;case 35668:case 35672:return nM;case 35669:case 35673:return iM;case 5125:return rM;case 36294:return sM;case 36295:return oM;case 36296:return aM;case 35678:case 36198:case 36298:case 36306:case 35682:return lM;case 35679:case 36299:case 36307:return cM;case 35680:case 36300:case 36308:case 36293:return uM;case 36289:case 36303:case 36311:case 36292:return fM}}class dM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=qx(t.type)}}class pM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hM(t.type)}}class mM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const la=/(\w+)(\])?(\[|\.)?/g;function ou(n,e){n.seq.push(e),n.map[e.id]=e}function gM(n,e,t){const i=n.name,r=i.length;for(la.lastIndex=0;;){const s=la.exec(i),a=la.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){ou(t,u===void 0?new dM(o,n,e):new pM(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new mM(o),ou(t,f)),t=f}}}class Is{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);gM(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function au(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const _M=37297;let vM=0;function xM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function MM(n){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(n);let i;switch(e===t?i="":e===Ks&&t===Ys?i="LinearDisplayP3ToLinearSRGB":e===Ys&&t===Ks&&(i="LinearSRGBToLinearDisplayP3"),n){case ui:case fo:return[i,"LinearTransferOETF"];case _n:case il:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function lu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+xM(n.getShaderSource(e),a)}else return r}function SM(n,e){const t=MM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function EM(n,e){let t;switch(e){case Rg:t="Linear";break;case Cg:t="Reinhard";break;case Pg:t="OptimizedCineon";break;case Lg:t="ACESFilmic";break;case Ug:t="AgX";break;case Ig:t="Neutral";break;case Dg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function yM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rr).join(`
`)}function TM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function bM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function AM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function rr(n){return n!==""}function cu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Na(n){return n.replace(wM,CM)}const RM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function CM(n,e){let t=Ge[e];if(t===void 0){const i=RM.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Na(t)}const PM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fu(n){return n.replace(PM,LM)}function LM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function DM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===If?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ng?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function UM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case dr:case pr:e="ENVMAP_TYPE_CUBE";break;case uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function IM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function NM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Nf:e="ENVMAP_BLENDING_MULTIPLY";break;case Ag:e="ENVMAP_BLENDING_MIX";break;case wg:e="ENVMAP_BLENDING_ADD";break}return e}function FM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function OM(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=DM(t),u=UM(t),c=IM(t),f=NM(t),d=FM(t),m=t.isWebGL2?"":yM(t),M=TM(t),E=bM(s),p=r.createProgram();let h,T,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(rr).join(`
`),h.length>0&&(h+=`
`),T=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(rr).join(`
`),T.length>0&&(T+=`
`)):(h=[hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),T=[m,hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==oi?EM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,SM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rr).join(`
`)),a=Na(a),a=cu(a,t),a=uu(a,t),o=Na(o),o=cu(o,t),o=uu(o,t),a=fu(a),o=fu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,h=[M,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,T=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const b=S+h+a,C=S+T+o,R=au(r,r.VERTEX_SHADER,b),w=au(r,r.FRAGMENT_SHADER,C);r.attachShader(p,R),r.attachShader(p,w),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function O(V){if(n.debug.checkShaderErrors){const ne=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(R).trim(),ee=r.getShaderInfoLog(w).trim();let q=!0,Q=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,R,w);else{const H=lu(r,R,"vertex"),re=lu(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ne+`
`+H+`
`+re)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(D===""||ee==="")&&(Q=!1);Q&&(V.diagnostics={runnable:q,programLog:ne,vertexShader:{log:D,prefix:h},fragmentShader:{log:ee,prefix:T}})}r.deleteShader(R),r.deleteShader(w),B=new Is(r,p),v=AM(r,p)}let B;this.getUniforms=function(){return B===void 0&&O(this),B};let v;this.getAttributes=function(){return v===void 0&&O(this),v};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(p,_M)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=w,this}let BM=0;class zM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new HM(e),t.set(e,i)),i}}class HM{constructor(e){this.id=BM++,this.code=e,this.usedTimes=0}}function GM(n,e,t,i,r,s,a){const o=new Kf,l=new zM,u=new Set,c=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,m=r.vertexTextures;let M=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return u.add(v),v===0?"uv":`uv${v}`}function h(v,A,V,ne,D){const ee=ne.fog,q=D.geometry,Q=v.isMeshStandardMaterial?ne.environment:null,H=(v.isMeshStandardMaterial?t:e).get(v.envMap||Q),re=H&&H.mapping===uo?H.image.height:null,oe=E[v.type];v.precision!==null&&(M=r.getMaxPrecision(v.precision),M!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",M,"instead."));const fe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,_e=fe!==void 0?fe.length:0;let Ie=0;q.morphAttributes.position!==void 0&&(Ie=1),q.morphAttributes.normal!==void 0&&(Ie=2),q.morphAttributes.color!==void 0&&(Ie=3);let Z,ce,xe,Ce;if(oe){const tt=Mn[oe];Z=tt.vertexShader,ce=tt.fragmentShader}else Z=v.vertexShader,ce=v.fragmentShader,l.update(v),xe=l.getVertexShaderID(v),Ce=l.getFragmentShaderID(v);const Ae=n.getRenderTarget(),Te=D.isInstancedMesh===!0,qe=D.isBatchedMesh===!0,Ue=!!v.map,_=!!v.matcap,P=!!H,I=!!v.aoMap,K=!!v.lightMap,z=!!v.bumpMap,j=!!v.normalMap,ie=!!v.displacementMap,te=!!v.emissiveMap,se=!!v.metalnessMap,x=!!v.roughnessMap,g=v.anisotropy>0,L=v.clearcoat>0,N=v.iridescence>0,$=v.sheen>0,J=v.transmission>0,Me=g&&!!v.anisotropyMap,me=L&&!!v.clearcoatMap,ae=L&&!!v.clearcoatNormalMap,ue=L&&!!v.clearcoatRoughnessMap,Re=N&&!!v.iridescenceMap,le=N&&!!v.iridescenceThicknessMap,et=$&&!!v.sheenColorMap,ze=$&&!!v.sheenRoughnessMap,ye=!!v.specularMap,Se=!!v.specularColorMap,be=!!v.specularIntensityMap,We=J&&!!v.transmissionMap,Oe=J&&!!v.thicknessMap,st=!!v.gradientMap,U=!!v.alphaMap,ge=v.alphaTest>0,k=!!v.alphaHash,de=!!v.extensions;let ve=oi;v.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(ve=n.toneMapping);const Xe={isWebGL2:f,shaderID:oe,shaderType:v.type,shaderName:v.name,vertexShader:Z,fragmentShader:ce,defines:v.defines,customVertexShaderID:xe,customFragmentShaderID:Ce,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:M,batching:qe,instancing:Te,instancingColor:Te&&D.instanceColor!==null,instancingMorph:Te&&D.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ae===null?n.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:ui,alphaToCoverage:!!v.alphaToCoverage,map:Ue,matcap:_,envMap:P,envMapMode:P&&H.mapping,envMapCubeUVHeight:re,aoMap:I,lightMap:K,bumpMap:z,normalMap:j,displacementMap:m&&ie,emissiveMap:te,normalMapObjectSpace:j&&v.normalMapType===qg,normalMapTangentSpace:j&&v.normalMapType===Xg,metalnessMap:se,roughnessMap:x,anisotropy:g,anisotropyMap:Me,clearcoat:L,clearcoatMap:me,clearcoatNormalMap:ae,clearcoatRoughnessMap:ue,iridescence:N,iridescenceMap:Re,iridescenceThicknessMap:le,sheen:$,sheenColorMap:et,sheenRoughnessMap:ze,specularMap:ye,specularColorMap:Se,specularIntensityMap:be,transmission:J,transmissionMap:We,thicknessMap:Oe,gradientMap:st,opaque:v.transparent===!1&&v.blending===ur&&v.alphaToCoverage===!1,alphaMap:U,alphaTest:ge,alphaHash:k,combine:v.combine,mapUv:Ue&&p(v.map.channel),aoMapUv:I&&p(v.aoMap.channel),lightMapUv:K&&p(v.lightMap.channel),bumpMapUv:z&&p(v.bumpMap.channel),normalMapUv:j&&p(v.normalMap.channel),displacementMapUv:ie&&p(v.displacementMap.channel),emissiveMapUv:te&&p(v.emissiveMap.channel),metalnessMapUv:se&&p(v.metalnessMap.channel),roughnessMapUv:x&&p(v.roughnessMap.channel),anisotropyMapUv:Me&&p(v.anisotropyMap.channel),clearcoatMapUv:me&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ae&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:le&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:et&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:ze&&p(v.sheenRoughnessMap.channel),specularMapUv:ye&&p(v.specularMap.channel),specularColorMapUv:Se&&p(v.specularColorMap.channel),specularIntensityMapUv:be&&p(v.specularIntensityMap.channel),transmissionMapUv:We&&p(v.transmissionMap.channel),thicknessMapUv:Oe&&p(v.thicknessMap.channel),alphaMapUv:U&&p(v.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(j||g),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!q.attributes.uv&&(Ue||U),fog:!!ee,useFog:v.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Ie,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:ve,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ue&&v.map.isVideoTexture===!0&&Ze.getTransfer(v.map.colorSpace)===rt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===zn,flipSided:v.side===kt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:de&&v.extensions.derivatives===!0,extensionFragDepth:de&&v.extensions.fragDepth===!0,extensionDrawBuffers:de&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:de&&v.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Xe.vertexUv1s=u.has(1),Xe.vertexUv2s=u.has(2),Xe.vertexUv3s=u.has(3),u.clear(),Xe}function T(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const V in v.defines)A.push(V),A.push(v.defines[V]);return v.isRawShaderMaterial===!1&&(S(A,v),b(A,v),A.push(n.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function S(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function b(v,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.instancingMorph&&o.enable(4),A.matcap&&o.enable(5),A.envMap&&o.enable(6),A.normalMapObjectSpace&&o.enable(7),A.normalMapTangentSpace&&o.enable(8),A.clearcoat&&o.enable(9),A.iridescence&&o.enable(10),A.alphaTest&&o.enable(11),A.vertexColors&&o.enable(12),A.vertexAlphas&&o.enable(13),A.vertexUv1s&&o.enable(14),A.vertexUv2s&&o.enable(15),A.vertexUv3s&&o.enable(16),A.vertexTangents&&o.enable(17),A.anisotropy&&o.enable(18),A.alphaHash&&o.enable(19),A.batching&&o.enable(20),v.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.alphaToCoverage&&o.enable(20),v.push(o.mask)}function C(v){const A=E[v.type];let V;if(A){const ne=Mn[A];V=S_.clone(ne.uniforms)}else V=v.uniforms;return V}function R(v,A){let V;for(let ne=0,D=c.length;ne<D;ne++){const ee=c[ne];if(ee.cacheKey===A){V=ee,++V.usedTimes;break}}return V===void 0&&(V=new OM(n,A,v,s),c.push(V)),V}function w(v){if(--v.usedTimes===0){const A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),v.destroy()}}function O(v){l.remove(v)}function B(){l.dispose()}return{getParameters:h,getProgramCacheKey:T,getUniforms:C,acquireProgram:R,releaseProgram:w,releaseShaderCache:O,programs:c,dispose:B}}function VM(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function kM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function du(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function pu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,m,M,E,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:M,renderOrder:f.renderOrder,z:E,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=M,h.renderOrder=f.renderOrder,h.z=E,h.group=p),e++,h}function o(f,d,m,M,E,p){const h=a(f,d,m,M,E,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(f,d,m,M,E,p){const h=a(f,d,m,M,E,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function u(f,d){t.length>1&&t.sort(f||kM),i.length>1&&i.sort(d||du),r.length>1&&r.sort(d||du)}function c(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:c,sort:u}}function WM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new pu,n.set(i,[a])):r>=s.length?(a=new pu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function XM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Je};break;case"SpotLight":t={position:new X,direction:new X,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function qM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let $M=0;function YM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function KM(n,e){const t=new XM,i=qM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new X);const s=new X,a=new ht,o=new ht;function l(c,f){let d=0,m=0,M=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let E=0,p=0,h=0,T=0,S=0,b=0,C=0,R=0,w=0,O=0,B=0;c.sort(YM);const v=f===!0?Math.PI:1;for(let V=0,ne=c.length;V<ne;V++){const D=c[V],ee=D.color,q=D.intensity,Q=D.distance,H=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=ee.r*q*v,m+=ee.g*q*v,M+=ee.b*q*v;else if(D.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(D.sh.coefficients[re],q);B++}else if(D.isDirectionalLight){const re=t.get(D);if(re.color.copy(D.color).multiplyScalar(D.intensity*v),D.castShadow){const oe=D.shadow,fe=i.get(D);fe.shadowBias=oe.bias,fe.shadowNormalBias=oe.normalBias,fe.shadowRadius=oe.radius,fe.shadowMapSize=oe.mapSize,r.directionalShadow[E]=fe,r.directionalShadowMap[E]=H,r.directionalShadowMatrix[E]=D.shadow.matrix,b++}r.directional[E]=re,E++}else if(D.isSpotLight){const re=t.get(D);re.position.setFromMatrixPosition(D.matrixWorld),re.color.copy(ee).multiplyScalar(q*v),re.distance=Q,re.coneCos=Math.cos(D.angle),re.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),re.decay=D.decay,r.spot[h]=re;const oe=D.shadow;if(D.map&&(r.spotLightMap[w]=D.map,w++,oe.updateMatrices(D),D.castShadow&&O++),r.spotLightMatrix[h]=oe.matrix,D.castShadow){const fe=i.get(D);fe.shadowBias=oe.bias,fe.shadowNormalBias=oe.normalBias,fe.shadowRadius=oe.radius,fe.shadowMapSize=oe.mapSize,r.spotShadow[h]=fe,r.spotShadowMap[h]=H,R++}h++}else if(D.isRectAreaLight){const re=t.get(D);re.color.copy(ee).multiplyScalar(q),re.halfWidth.set(D.width*.5,0,0),re.halfHeight.set(0,D.height*.5,0),r.rectArea[T]=re,T++}else if(D.isPointLight){const re=t.get(D);if(re.color.copy(D.color).multiplyScalar(D.intensity*v),re.distance=D.distance,re.decay=D.decay,D.castShadow){const oe=D.shadow,fe=i.get(D);fe.shadowBias=oe.bias,fe.shadowNormalBias=oe.normalBias,fe.shadowRadius=oe.radius,fe.shadowMapSize=oe.mapSize,fe.shadowCameraNear=oe.camera.near,fe.shadowCameraFar=oe.camera.far,r.pointShadow[p]=fe,r.pointShadowMap[p]=H,r.pointShadowMatrix[p]=D.shadow.matrix,C++}r.point[p]=re,p++}else if(D.isHemisphereLight){const re=t.get(D);re.skyColor.copy(D.color).multiplyScalar(q*v),re.groundColor.copy(D.groundColor).multiplyScalar(q*v),r.hemi[S]=re,S++}}T>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=M;const A=r.hash;(A.directionalLength!==E||A.pointLength!==p||A.spotLength!==h||A.rectAreaLength!==T||A.hemiLength!==S||A.numDirectionalShadows!==b||A.numPointShadows!==C||A.numSpotShadows!==R||A.numSpotMaps!==w||A.numLightProbes!==B)&&(r.directional.length=E,r.spot.length=h,r.rectArea.length=T,r.point.length=p,r.hemi.length=S,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=R+w-O,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=B,A.directionalLength=E,A.pointLength=p,A.spotLength=h,A.rectAreaLength=T,A.hemiLength=S,A.numDirectionalShadows=b,A.numPointShadows=C,A.numSpotShadows=R,A.numSpotMaps=w,A.numLightProbes=B,r.version=$M++)}function u(c,f){let d=0,m=0,M=0,E=0,p=0;const h=f.matrixWorldInverse;for(let T=0,S=c.length;T<S;T++){const b=c[T];if(b.isDirectionalLight){const C=r.directional[d];C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(h),d++}else if(b.isSpotLight){const C=r.spot[M];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(h),C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(h),M++}else if(b.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(h),o.identity(),a.copy(b.matrixWorld),a.premultiply(h),o.extractRotation(a),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),E++}else if(b.isPointLight){const C=r.point[m];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(h),m++}else if(b.isHemisphereLight){const C=r.hemi[p];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(h),p++}}}return{setup:l,setupView:u,state:r}}function mu(n,e){const t=new KM(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function jM(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new mu(n,e),t.set(s,[l])):a>=o.length?(l=new mu(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class ZM extends ho{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JM extends ho{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const QM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eS=`uniform sampler2D shadow_pass;
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
}`;function tS(n,e,t){let i=new ih;const r=new $e,s=new $e,a=new yt,o=new ZM({depthPacking:Wg}),l=new JM,u={},c=t.maxTextureSize,f={[ci]:kt,[kt]:ci,[zn]:zn},d=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:QM,fragmentShader:eS}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const M=new Bi;M.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new yn(M,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=If;let h=this.type;this.render=function(R,w,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const B=n.getRenderTarget(),v=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),V=n.state;V.setBlending(si),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const ne=h!==In&&this.type===In,D=h===In&&this.type!==In;for(let ee=0,q=R.length;ee<q;ee++){const Q=R[ee],H=Q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const re=H.getFrameExtents();if(r.multiply(re),s.copy(H.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/re.x),r.x=s.x*re.x,H.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/re.y),r.y=s.y*re.y,H.mapSize.y=s.y)),H.map===null||ne===!0||D===!0){const fe=this.type!==In?{minFilter:Ut,magFilter:Ut}:{};H.map!==null&&H.map.dispose(),H.map=new Fi(r.x,r.y,fe),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const oe=H.getViewportCount();for(let fe=0;fe<oe;fe++){const _e=H.getViewport(fe);a.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),V.viewport(a),H.updateMatrices(Q,fe),i=H.getFrustum(),b(w,O,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===In&&T(H,O),H.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(B,v,A)};function T(R,w){const O=e.update(E);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Fi(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(w,null,O,d,E,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(w,null,O,m,E,null)}function S(R,w,O,B){let v=null;const A=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)v=A;else if(v=O.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=v.uuid,ne=w.uuid;let D=u[V];D===void 0&&(D={},u[V]=D);let ee=D[ne];ee===void 0&&(ee=v.clone(),D[ne]=ee,w.addEventListener("dispose",C)),v=ee}if(v.visible=w.visible,v.wireframe=w.wireframe,B===In?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:f[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,O.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const V=n.properties.get(v);V.light=O}return v}function b(R,w,O,B,v){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===In)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);const ne=e.update(R),D=R.material;if(Array.isArray(D)){const ee=ne.groups;for(let q=0,Q=ee.length;q<Q;q++){const H=ee[q],re=D[H.materialIndex];if(re&&re.visible){const oe=S(R,re,B,v);R.onBeforeShadow(n,R,w,O,ne,oe,H),n.renderBufferDirect(O,null,ne,oe,R,H),R.onAfterShadow(n,R,w,O,ne,oe,H)}}}else if(D.visible){const ee=S(R,D,B,v);R.onBeforeShadow(n,R,w,O,ne,ee,null),n.renderBufferDirect(O,null,ne,ee,R,null),R.onAfterShadow(n,R,w,O,ne,ee,null)}}const V=R.children;for(let ne=0,D=V.length;ne<D;ne++)b(V[ne],w,O,B,v)}function C(R){R.target.removeEventListener("dispose",C);for(const O in u){const B=u[O],v=R.target.uuid;v in B&&(B[v].dispose(),delete B[v])}}}function nS(n,e,t){const i=t.isWebGL2;function r(){let U=!1;const ge=new yt;let k=null;const de=new yt(0,0,0,0);return{setMask:function(ve){k!==ve&&!U&&(n.colorMask(ve,ve,ve,ve),k=ve)},setLocked:function(ve){U=ve},setClear:function(ve,Xe,tt,xt,Kt){Kt===!0&&(ve*=xt,Xe*=xt,tt*=xt),ge.set(ve,Xe,tt,xt),de.equals(ge)===!1&&(n.clearColor(ve,Xe,tt,xt),de.copy(ge))},reset:function(){U=!1,k=null,de.set(-1,0,0,0)}}}function s(){let U=!1,ge=null,k=null,de=null;return{setTest:function(ve){ve?Te(n.DEPTH_TEST):qe(n.DEPTH_TEST)},setMask:function(ve){ge!==ve&&!U&&(n.depthMask(ve),ge=ve)},setFunc:function(ve){if(k!==ve){switch(ve){case xg:n.depthFunc(n.NEVER);break;case Mg:n.depthFunc(n.ALWAYS);break;case Sg:n.depthFunc(n.LESS);break;case qs:n.depthFunc(n.LEQUAL);break;case Eg:n.depthFunc(n.EQUAL);break;case yg:n.depthFunc(n.GEQUAL);break;case Tg:n.depthFunc(n.GREATER);break;case bg:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}k=ve}},setLocked:function(ve){U=ve},setClear:function(ve){de!==ve&&(n.clearDepth(ve),de=ve)},reset:function(){U=!1,ge=null,k=null,de=null}}}function a(){let U=!1,ge=null,k=null,de=null,ve=null,Xe=null,tt=null,xt=null,Kt=null;return{setTest:function(nt){U||(nt?Te(n.STENCIL_TEST):qe(n.STENCIL_TEST))},setMask:function(nt){ge!==nt&&!U&&(n.stencilMask(nt),ge=nt)},setFunc:function(nt,Pt,dn){(k!==nt||de!==Pt||ve!==dn)&&(n.stencilFunc(nt,Pt,dn),k=nt,de=Pt,ve=dn)},setOp:function(nt,Pt,dn){(Xe!==nt||tt!==Pt||xt!==dn)&&(n.stencilOp(nt,Pt,dn),Xe=nt,tt=Pt,xt=dn)},setLocked:function(nt){U=nt},setClear:function(nt){Kt!==nt&&(n.clearStencil(nt),Kt=nt)},reset:function(){U=!1,ge=null,k=null,de=null,ve=null,Xe=null,tt=null,xt=null,Kt=null}}}const o=new r,l=new s,u=new a,c=new WeakMap,f=new WeakMap;let d={},m={},M=new WeakMap,E=[],p=null,h=!1,T=null,S=null,b=null,C=null,R=null,w=null,O=null,B=new Je(0,0,0),v=0,A=!1,V=null,ne=null,D=null,ee=null,q=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,re=0;const oe=n.getParameter(n.VERSION);oe.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(oe)[1]),H=re>=1):oe.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),H=re>=2);let fe=null,_e={};const Ie=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),ce=new yt().fromArray(Ie),xe=new yt().fromArray(Z);function Ce(U,ge,k,de){const ve=new Uint8Array(4),Xe=n.createTexture();n.bindTexture(U,Xe),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<k;tt++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(ge,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(ge+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return Xe}const Ae={};Ae[n.TEXTURE_2D]=Ce(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=Ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ae[n.TEXTURE_2D_ARRAY]=Ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=Ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Te(n.DEPTH_TEST),l.setFunc(qs),ie(!1),te(Yl),Te(n.CULL_FACE),z(si);function Te(U){d[U]!==!0&&(n.enable(U),d[U]=!0)}function qe(U){d[U]!==!1&&(n.disable(U),d[U]=!1)}function Ue(U,ge){return m[U]!==ge?(n.bindFramebuffer(U,ge),m[U]=ge,i&&(U===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ge),U===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ge)),!0):!1}function _(U,ge){let k=E,de=!1;if(U){k=M.get(ge),k===void 0&&(k=[],M.set(ge,k));const ve=U.textures;if(k.length!==ve.length||k[0]!==n.COLOR_ATTACHMENT0){for(let Xe=0,tt=ve.length;Xe<tt;Xe++)k[Xe]=n.COLOR_ATTACHMENT0+Xe;k.length=ve.length,de=!0}}else k[0]!==n.BACK&&(k[0]=n.BACK,de=!0);if(de)if(t.isWebGL2)n.drawBuffers(k);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(k);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function P(U){return p!==U?(n.useProgram(U),p=U,!0):!1}const I={[wi]:n.FUNC_ADD,[rg]:n.FUNC_SUBTRACT,[sg]:n.FUNC_REVERSE_SUBTRACT};if(i)I[Jl]=n.MIN,I[Ql]=n.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(I[Jl]=U.MIN_EXT,I[Ql]=U.MAX_EXT)}const K={[og]:n.ZERO,[ag]:n.ONE,[lg]:n.SRC_COLOR,[Aa]:n.SRC_ALPHA,[pg]:n.SRC_ALPHA_SATURATE,[hg]:n.DST_COLOR,[ug]:n.DST_ALPHA,[cg]:n.ONE_MINUS_SRC_COLOR,[wa]:n.ONE_MINUS_SRC_ALPHA,[dg]:n.ONE_MINUS_DST_COLOR,[fg]:n.ONE_MINUS_DST_ALPHA,[mg]:n.CONSTANT_COLOR,[gg]:n.ONE_MINUS_CONSTANT_COLOR,[_g]:n.CONSTANT_ALPHA,[vg]:n.ONE_MINUS_CONSTANT_ALPHA};function z(U,ge,k,de,ve,Xe,tt,xt,Kt,nt){if(U===si){h===!0&&(qe(n.BLEND),h=!1);return}if(h===!1&&(Te(n.BLEND),h=!0),U!==ig){if(U!==T||nt!==A){if((S!==wi||R!==wi)&&(n.blendEquation(n.FUNC_ADD),S=wi,R=wi),nt)switch(U){case ur:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kl:n.blendFunc(n.ONE,n.ONE);break;case jl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ur:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case jl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,C=null,w=null,O=null,B.set(0,0,0),v=0,T=U,A=nt}return}ve=ve||ge,Xe=Xe||k,tt=tt||de,(ge!==S||ve!==R)&&(n.blendEquationSeparate(I[ge],I[ve]),S=ge,R=ve),(k!==b||de!==C||Xe!==w||tt!==O)&&(n.blendFuncSeparate(K[k],K[de],K[Xe],K[tt]),b=k,C=de,w=Xe,O=tt),(xt.equals(B)===!1||Kt!==v)&&(n.blendColor(xt.r,xt.g,xt.b,Kt),B.copy(xt),v=Kt),T=U,A=!1}function j(U,ge){U.side===zn?qe(n.CULL_FACE):Te(n.CULL_FACE);let k=U.side===kt;ge&&(k=!k),ie(k),U.blending===ur&&U.transparent===!1?z(si):z(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);const de=U.stencilWrite;u.setTest(de),de&&(u.setMask(U.stencilWriteMask),u.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),u.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),x(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Te(n.SAMPLE_ALPHA_TO_COVERAGE):qe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ie(U){V!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),V=U)}function te(U){U!==eg?(Te(n.CULL_FACE),U!==ne&&(U===Yl?n.cullFace(n.BACK):U===tg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):qe(n.CULL_FACE),ne=U}function se(U){U!==D&&(H&&n.lineWidth(U),D=U)}function x(U,ge,k){U?(Te(n.POLYGON_OFFSET_FILL),(ee!==ge||q!==k)&&(n.polygonOffset(ge,k),ee=ge,q=k)):qe(n.POLYGON_OFFSET_FILL)}function g(U){U?Te(n.SCISSOR_TEST):qe(n.SCISSOR_TEST)}function L(U){U===void 0&&(U=n.TEXTURE0+Q-1),fe!==U&&(n.activeTexture(U),fe=U)}function N(U,ge,k){k===void 0&&(fe===null?k=n.TEXTURE0+Q-1:k=fe);let de=_e[k];de===void 0&&(de={type:void 0,texture:void 0},_e[k]=de),(de.type!==U||de.texture!==ge)&&(fe!==k&&(n.activeTexture(k),fe=k),n.bindTexture(U,ge||Ae[U]),de.type=U,de.texture=ge)}function $(){const U=_e[fe];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(U){ce.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ce.copy(U))}function be(U){xe.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),xe.copy(U))}function We(U,ge){let k=f.get(ge);k===void 0&&(k=new WeakMap,f.set(ge,k));let de=k.get(U);de===void 0&&(de=n.getUniformBlockIndex(ge,U.name),k.set(U,de))}function Oe(U,ge){const de=f.get(ge).get(U);c.get(ge)!==de&&(n.uniformBlockBinding(ge,de,U.__bindingPointIndex),c.set(ge,de))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},fe=null,_e={},m={},M=new WeakMap,E=[],p=null,h=!1,T=null,S=null,b=null,C=null,R=null,w=null,O=null,B=new Je(0,0,0),v=0,A=!1,V=null,ne=null,D=null,ee=null,q=null,ce.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:Te,disable:qe,bindFramebuffer:Ue,drawBuffers:_,useProgram:P,setBlending:z,setMaterial:j,setFlipSided:ie,setCullFace:te,setLineWidth:se,setPolygonOffset:x,setScissorTest:g,activeTexture:L,bindTexture:N,unbindTexture:$,compressedTexImage2D:J,compressedTexImage3D:Me,texImage2D:ze,texImage3D:ye,updateUBOMapping:We,uniformBlockBinding:Oe,texStorage2D:le,texStorage3D:et,texSubImage2D:me,texSubImage3D:ae,compressedTexSubImage2D:ue,compressedTexSubImage3D:Re,scissor:Se,viewport:be,reset:st}}function iS(n,e,t,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,f=new WeakMap;let d;const m=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(x,g){return M?new OffscreenCanvas(x,g):Zs("canvas")}function p(x,g,L,N){let $=1;const J=se(x);if((J.width>N||J.height>N)&&($=N/Math.max(J.width,J.height)),$<1||g===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const Me=g?Ia:Math.floor,me=Me($*J.width),ae=Me($*J.height);d===void 0&&(d=E(me,ae));const ue=L?E(me,ae):d;return ue.width=me,ue.height=ae,ue.getContext("2d").drawImage(x,0,0,me,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+me+"x"+ae+")."),ue}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),x;return x}function h(x){const g=se(x);return Cc(g.width)&&Cc(g.height)}function T(x){return o?!1:x.wrapS!==on||x.wrapT!==on||x.minFilter!==Ut&&x.minFilter!==Gt}function S(x,g){return x.generateMipmaps&&g&&x.minFilter!==Ut&&x.minFilter!==Gt}function b(x){n.generateMipmap(x)}function C(x,g,L,N,$=!1){if(o===!1)return g;if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let J=g;if(g===n.RED&&(L===n.FLOAT&&(J=n.R32F),L===n.HALF_FLOAT&&(J=n.R16F),L===n.UNSIGNED_BYTE&&(J=n.R8)),g===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(J=n.R8UI),L===n.UNSIGNED_SHORT&&(J=n.R16UI),L===n.UNSIGNED_INT&&(J=n.R32UI),L===n.BYTE&&(J=n.R8I),L===n.SHORT&&(J=n.R16I),L===n.INT&&(J=n.R32I)),g===n.RG&&(L===n.FLOAT&&(J=n.RG32F),L===n.HALF_FLOAT&&(J=n.RG16F),L===n.UNSIGNED_BYTE&&(J=n.RG8)),g===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(J=n.RG8UI),L===n.UNSIGNED_SHORT&&(J=n.RG16UI),L===n.UNSIGNED_INT&&(J=n.RG32UI),L===n.BYTE&&(J=n.RG8I),L===n.SHORT&&(J=n.RG16I),L===n.INT&&(J=n.RG32I)),g===n.RGBA){const Me=$?$s:Ze.getTransfer(N);L===n.FLOAT&&(J=n.RGBA32F),L===n.HALF_FLOAT&&(J=n.RGBA16F),L===n.UNSIGNED_BYTE&&(J=Me===rt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function R(x,g,L){return S(x,L)===!0||x.isFramebufferTexture&&x.minFilter!==Ut&&x.minFilter!==Gt?Math.log2(Math.max(g.width,g.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?g.mipmaps.length:1}function w(x){return x===Ut||x===ec||x===Tr?n.NEAREST:n.LINEAR}function O(x){const g=x.target;g.removeEventListener("dispose",O),v(g),g.isVideoTexture&&f.delete(g)}function B(x){const g=x.target;g.removeEventListener("dispose",B),V(g)}function v(x){const g=i.get(x);if(g.__webglInit===void 0)return;const L=x.source,N=m.get(L);if(N){const $=N[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&A(x),Object.keys(N).length===0&&m.delete(L)}i.remove(x)}function A(x){const g=i.get(x);n.deleteTexture(g.__webglTexture);const L=x.source,N=m.get(L);delete N[g.__cacheKey],a.memory.textures--}function V(x){const g=i.get(x);if(x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(g.__webglFramebuffer[N]))for(let $=0;$<g.__webglFramebuffer[N].length;$++)n.deleteFramebuffer(g.__webglFramebuffer[N][$]);else n.deleteFramebuffer(g.__webglFramebuffer[N]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[N])}else{if(Array.isArray(g.__webglFramebuffer))for(let N=0;N<g.__webglFramebuffer.length;N++)n.deleteFramebuffer(g.__webglFramebuffer[N]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let N=0;N<g.__webglColorRenderbuffer.length;N++)g.__webglColorRenderbuffer[N]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[N]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=x.textures;for(let N=0,$=L.length;N<$;N++){const J=i.get(L[N]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(L[N])}i.remove(x)}let ne=0;function D(){ne=0}function ee(){const x=ne;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),ne+=1,x}function q(x){const g=[];return g.push(x.wrapS),g.push(x.wrapT),g.push(x.wrapR||0),g.push(x.magFilter),g.push(x.minFilter),g.push(x.anisotropy),g.push(x.internalFormat),g.push(x.format),g.push(x.type),g.push(x.generateMipmaps),g.push(x.premultiplyAlpha),g.push(x.flipY),g.push(x.unpackAlignment),g.push(x.colorSpace),g.join()}function Q(x,g){const L=i.get(x);if(x.isVideoTexture&&ie(x),x.isRenderTargetTexture===!1&&x.version>0&&L.__version!==x.version){const N=x.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(L,x,g);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+g)}function H(x,g){const L=i.get(x);if(x.version>0&&L.__version!==x.version){xe(L,x,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+g)}function re(x,g){const L=i.get(x);if(x.version>0&&L.__version!==x.version){xe(L,x,g);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+g)}function oe(x,g){const L=i.get(x);if(x.version>0&&L.__version!==x.version){Ce(L,x,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+g)}const fe={[Pa]:n.REPEAT,[on]:n.CLAMP_TO_EDGE,[La]:n.MIRRORED_REPEAT},_e={[Ut]:n.NEAREST,[ec]:n.NEAREST_MIPMAP_NEAREST,[Tr]:n.NEAREST_MIPMAP_LINEAR,[Gt]:n.LINEAR,[Lo]:n.LINEAR_MIPMAP_NEAREST,[Ci]:n.LINEAR_MIPMAP_LINEAR},Ie={[$g]:n.NEVER,[Qg]:n.ALWAYS,[Yg]:n.LESS,[Wf]:n.LEQUAL,[Kg]:n.EQUAL,[Jg]:n.GEQUAL,[jg]:n.GREATER,[Zg]:n.NOTEQUAL};function Z(x,g,L){if(g.type===Hn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Gt||g.magFilter===Lo||g.magFilter===Tr||g.magFilter===Ci||g.minFilter===Gt||g.minFilter===Lo||g.minFilter===Tr||g.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),L?(n.texParameteri(x,n.TEXTURE_WRAP_S,fe[g.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,fe[g.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,fe[g.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,_e[g.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,_e[g.minFilter])):(n.texParameteri(x,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(x,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(g.wrapS!==on||g.wrapT!==on)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(x,n.TEXTURE_MAG_FILTER,w(g.magFilter)),n.texParameteri(x,n.TEXTURE_MIN_FILTER,w(g.minFilter)),g.minFilter!==Ut&&g.minFilter!==Gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,Ie[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ut||g.minFilter!==Tr&&g.minFilter!==Ci||g.type===Hn&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===Yr&&e.has("OES_texture_half_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function ce(x,g){let L=!1;x.__webglInit===void 0&&(x.__webglInit=!0,g.addEventListener("dispose",O));const N=g.source;let $=m.get(N);$===void 0&&($={},m.set(N,$));const J=q(g);if(J!==x.__cacheKey){$[J]===void 0&&($[J]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,L=!0),$[J].usedTimes++;const Me=$[x.__cacheKey];Me!==void 0&&($[x.__cacheKey].usedTimes--,Me.usedTimes===0&&A(g)),x.__cacheKey=J,x.__webglTexture=$[J].texture}return L}function xe(x,g,L){let N=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(N=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(N=n.TEXTURE_3D);const $=ce(x,g),J=g.source;t.bindTexture(N,x.__webglTexture,n.TEXTURE0+L);const Me=i.get(J);if(J.version!==Me.__version||$===!0){t.activeTexture(n.TEXTURE0+L);const me=Ze.getPrimaries(Ze.workingColorSpace),ae=g.colorSpace===ni?null:Ze.getPrimaries(g.colorSpace),ue=g.colorSpace===ni||me===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Re=T(g)&&h(g.image)===!1;let le=p(g.image,Re,!1,r.maxTextureSize);le=te(g,le);const et=h(le)||o,ze=s.convert(g.format,g.colorSpace);let ye=s.convert(g.type),Se=C(g.internalFormat,ze,ye,g.colorSpace,g.isVideoTexture);Z(N,g,et);let be;const We=g.mipmaps,Oe=o&&g.isVideoTexture!==!0&&Se!==kf,st=Me.__version===void 0||$===!0,U=J.dataReady,ge=R(g,le,et);if(g.isDepthTexture)Se=n.DEPTH_COMPONENT,o?g.type===Hn?Se=n.DEPTH_COMPONENT32F:g.type===ii?Se=n.DEPTH_COMPONENT24:g.type===Ui?Se=n.DEPTH24_STENCIL8:Se=n.DEPTH_COMPONENT16:g.type===Hn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Ii&&Se===n.DEPTH_COMPONENT&&g.type!==nl&&g.type!==ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=ii,ye=s.convert(g.type)),g.format===mr&&Se===n.DEPTH_COMPONENT&&(Se=n.DEPTH_STENCIL,g.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Ui,ye=s.convert(g.type))),st&&(Oe?t.texStorage2D(n.TEXTURE_2D,1,Se,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Se,le.width,le.height,0,ze,ye,null));else if(g.isDataTexture)if(We.length>0&&et){Oe&&st&&t.texStorage2D(n.TEXTURE_2D,ge,Se,We[0].width,We[0].height);for(let k=0,de=We.length;k<de;k++)be=We[k],Oe?U&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,be.width,be.height,ze,ye,be.data):t.texImage2D(n.TEXTURE_2D,k,Se,be.width,be.height,0,ze,ye,be.data);g.generateMipmaps=!1}else Oe?(st&&t.texStorage2D(n.TEXTURE_2D,ge,Se,le.width,le.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,ze,ye,le.data)):t.texImage2D(n.TEXTURE_2D,0,Se,le.width,le.height,0,ze,ye,le.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Oe&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Se,We[0].width,We[0].height,le.depth);for(let k=0,de=We.length;k<de;k++)be=We[k],g.format!==an?ze!==null?Oe?U&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,be.width,be.height,le.depth,ze,be.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,k,Se,be.width,be.height,le.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,be.width,be.height,le.depth,ze,ye,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,k,Se,be.width,be.height,le.depth,0,ze,ye,be.data)}else{Oe&&st&&t.texStorage2D(n.TEXTURE_2D,ge,Se,We[0].width,We[0].height);for(let k=0,de=We.length;k<de;k++)be=We[k],g.format!==an?ze!==null?Oe?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,k,0,0,be.width,be.height,ze,be.data):t.compressedTexImage2D(n.TEXTURE_2D,k,Se,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?U&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,be.width,be.height,ze,ye,be.data):t.texImage2D(n.TEXTURE_2D,k,Se,be.width,be.height,0,ze,ye,be.data)}else if(g.isDataArrayTexture)Oe?(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Se,le.width,le.height,le.depth),U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ze,ye,le.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,le.width,le.height,le.depth,0,ze,ye,le.data);else if(g.isData3DTexture)Oe?(st&&t.texStorage3D(n.TEXTURE_3D,ge,Se,le.width,le.height,le.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ze,ye,le.data)):t.texImage3D(n.TEXTURE_3D,0,Se,le.width,le.height,le.depth,0,ze,ye,le.data);else if(g.isFramebufferTexture){if(st)if(Oe)t.texStorage2D(n.TEXTURE_2D,ge,Se,le.width,le.height);else{let k=le.width,de=le.height;for(let ve=0;ve<ge;ve++)t.texImage2D(n.TEXTURE_2D,ve,Se,k,de,0,ze,ye,null),k>>=1,de>>=1}}else if(We.length>0&&et){if(Oe&&st){const k=se(We[0]);t.texStorage2D(n.TEXTURE_2D,ge,Se,k.width,k.height)}for(let k=0,de=We.length;k<de;k++)be=We[k],Oe?U&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,ze,ye,be):t.texImage2D(n.TEXTURE_2D,k,Se,ze,ye,be);g.generateMipmaps=!1}else if(Oe){if(st){const k=se(le);t.texStorage2D(n.TEXTURE_2D,ge,Se,k.width,k.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ze,ye,le)}else t.texImage2D(n.TEXTURE_2D,0,Se,ze,ye,le);S(g,et)&&b(N),Me.__version=J.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function Ce(x,g,L){if(g.image.length!==6)return;const N=ce(x,g),$=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+L);const J=i.get($);if($.version!==J.__version||N===!0){t.activeTexture(n.TEXTURE0+L);const Me=Ze.getPrimaries(Ze.workingColorSpace),me=g.colorSpace===ni?null:Ze.getPrimaries(g.colorSpace),ae=g.colorSpace===ni||Me===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const ue=g.isCompressedTexture||g.image[0].isCompressedTexture,Re=g.image[0]&&g.image[0].isDataTexture,le=[];for(let k=0;k<6;k++)!ue&&!Re?le[k]=p(g.image[k],!1,!0,r.maxCubemapSize):le[k]=Re?g.image[k].image:g.image[k],le[k]=te(g,le[k]);const et=le[0],ze=h(et)||o,ye=s.convert(g.format,g.colorSpace),Se=s.convert(g.type),be=C(g.internalFormat,ye,Se,g.colorSpace),We=o&&g.isVideoTexture!==!0,Oe=J.__version===void 0||N===!0,st=$.dataReady;let U=R(g,et,ze);Z(n.TEXTURE_CUBE_MAP,g,ze);let ge;if(ue){We&&Oe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,U,be,et.width,et.height);for(let k=0;k<6;k++){ge=le[k].mipmaps;for(let de=0;de<ge.length;de++){const ve=ge[de];g.format!==an?ye!==null?We?st&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,0,0,ve.width,ve.height,ye,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,be,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?st&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,0,0,ve.width,ve.height,ye,Se,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,be,ve.width,ve.height,0,ye,Se,ve.data)}}}else{if(ge=g.mipmaps,We&&Oe){ge.length>0&&U++;const k=se(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,U,be,k.width,k.height)}for(let k=0;k<6;k++)if(Re){We?st&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,le[k].width,le[k].height,ye,Se,le[k].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,be,le[k].width,le[k].height,0,ye,Se,le[k].data);for(let de=0;de<ge.length;de++){const Xe=ge[de].image[k].image;We?st&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,0,0,Xe.width,Xe.height,ye,Se,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,be,Xe.width,Xe.height,0,ye,Se,Xe.data)}}else{We?st&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,ye,Se,le[k]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,be,ye,Se,le[k]);for(let de=0;de<ge.length;de++){const ve=ge[de];We?st&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,0,0,ye,Se,ve.image[k]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,be,ye,Se,ve.image[k])}}}S(g,ze)&&b(n.TEXTURE_CUBE_MAP),J.__version=$.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function Ae(x,g,L,N,$,J){const Me=s.convert(L.format,L.colorSpace),me=s.convert(L.type),ae=C(L.internalFormat,Me,me,L.colorSpace);if(!i.get(g).__hasExternalTextures){const Re=Math.max(1,g.width>>J),le=Math.max(1,g.height>>J);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,J,ae,Re,le,g.depth,0,Me,me,null):t.texImage2D($,J,ae,Re,le,0,Me,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),j(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,N,$,i.get(L).__webglTexture,0,z(g)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,N,$,i.get(L).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(x,g,L){if(n.bindRenderbuffer(n.RENDERBUFFER,x),g.depthBuffer&&!g.stencilBuffer){let N=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(L||j(g)){const $=g.depthTexture;$&&$.isDepthTexture&&($.type===Hn?N=n.DEPTH_COMPONENT32F:$.type===ii&&(N=n.DEPTH_COMPONENT24));const J=z(g);j(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,N,g.width,g.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,J,N,g.width,g.height)}else n.renderbufferStorage(n.RENDERBUFFER,N,g.width,g.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,x)}else if(g.depthBuffer&&g.stencilBuffer){const N=z(g);L&&j(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,N,n.DEPTH24_STENCIL8,g.width,g.height):j(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,N,n.DEPTH24_STENCIL8,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,x)}else{const N=g.textures;for(let $=0;$<N.length;$++){const J=N[$],Me=s.convert(J.format,J.colorSpace),me=s.convert(J.type),ae=C(J.internalFormat,Me,me,J.colorSpace),ue=z(g);L&&j(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,ae,g.width,g.height):j(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,ae,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ae,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qe(x,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Q(g.depthTexture,0);const N=i.get(g.depthTexture).__webglTexture,$=z(g);if(g.depthTexture.format===Ii)j(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0);else if(g.depthTexture.format===mr)j(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0);else throw new Error("Unknown depthTexture format")}function Ue(x){const g=i.get(x),L=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");qe(g.__webglFramebuffer,x)}else if(L){g.__webglDepthbuffer=[];for(let N=0;N<6;N++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[N]),g.__webglDepthbuffer[N]=n.createRenderbuffer(),Te(g.__webglDepthbuffer[N],x,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),Te(g.__webglDepthbuffer,x,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function _(x,g,L){const N=i.get(x);g!==void 0&&Ae(N.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Ue(x)}function P(x){const g=x.texture,L=i.get(x),N=i.get(g);x.addEventListener("dispose",B);const $=x.textures,J=x.isWebGLCubeRenderTarget===!0,Me=$.length>1,me=h(x)||o;if(Me||(N.__webglTexture===void 0&&(N.__webglTexture=n.createTexture()),N.__version=g.version,a.memory.textures++),J){L.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(o&&g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[ae]=[];for(let ue=0;ue<g.mipmaps.length;ue++)L.__webglFramebuffer[ae][ue]=n.createFramebuffer()}else L.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(o&&g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let ae=0;ae<g.mipmaps.length;ae++)L.__webglFramebuffer[ae]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(Me)if(r.drawBuffers)for(let ae=0,ue=$.length;ae<ue;ae++){const Re=i.get($[ae]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&x.samples>0&&j(x)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ae=0;ae<$.length;ae++){const ue=$[ae];L.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[ae]);const Re=s.convert(ue.format,ue.colorSpace),le=s.convert(ue.type),et=C(ue.internalFormat,Re,le,ue.colorSpace,x.isXRRenderTarget===!0),ze=z(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,et,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,L.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Te(L.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture),Z(n.TEXTURE_CUBE_MAP,g,me);for(let ae=0;ae<6;ae++)if(o&&g.mipmaps&&g.mipmaps.length>0)for(let ue=0;ue<g.mipmaps.length;ue++)Ae(L.__webglFramebuffer[ae][ue],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ue);else Ae(L.__webglFramebuffer[ae],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);S(g,me)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ae=0,ue=$.length;ae<ue;ae++){const Re=$[ae],le=i.get(Re);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),Z(n.TEXTURE_2D,Re,me),Ae(L.__webglFramebuffer,x,Re,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),S(Re,me)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(o?ae=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,N.__webglTexture),Z(ae,g,me),o&&g.mipmaps&&g.mipmaps.length>0)for(let ue=0;ue<g.mipmaps.length;ue++)Ae(L.__webglFramebuffer[ue],x,g,n.COLOR_ATTACHMENT0,ae,ue);else Ae(L.__webglFramebuffer,x,g,n.COLOR_ATTACHMENT0,ae,0);S(g,me)&&b(ae),t.unbindTexture()}x.depthBuffer&&Ue(x)}function I(x){const g=h(x)||o,L=x.textures;for(let N=0,$=L.length;N<$;N++){const J=L[N];if(S(J,g)){const Me=x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,me=i.get(J).__webglTexture;t.bindTexture(Me,me),b(Me),t.unbindTexture()}}}function K(x){if(o&&x.samples>0&&j(x)===!1){const g=x.textures,L=x.width,N=x.height;let $=n.COLOR_BUFFER_BIT;const J=[],Me=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(x),ae=g.length>1;if(ae)for(let ue=0;ue<g.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ue=0;ue<g.length;ue++){J.push(n.COLOR_ATTACHMENT0+ue),x.depthBuffer&&J.push(Me);const Re=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Re===!1&&(x.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),ae&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[ue]),Re===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Me])),ae){const le=i.get(g[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,L,N,0,0,L,N,$,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let ue=0;ue<g.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,me.__webglColorRenderbuffer[ue]);const Re=i.get(g[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,Re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function z(x){return Math.min(r.maxSamples,x.samples)}function j(x){const g=i.get(x);return o&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ie(x){const g=a.render.frame;f.get(x)!==g&&(f.set(x,g),x.update())}function te(x,g){const L=x.colorSpace,N=x.format,$=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===Da||L!==ui&&L!==ni&&(Ze.getTransfer(L)===rt?o===!1?e.has("EXT_sRGB")===!0&&N===an?(x.format=Da,x.minFilter=Gt,x.generateMipmaps=!1):g=qf.sRGBToLinear(g):(N!==an||$!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),g}function se(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=ee,this.resetTextureUnits=D,this.setTexture2D=Q,this.setTexture2DArray=H,this.setTexture3D=re,this.setTextureCube=oe,this.rebindTextures=_,this.setupRenderTarget=P,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=j}function rS(n,e,t){const i=t.isWebGL2;function r(s,a=ni){let o;const l=Ze.getTransfer(a);if(s===ai)return n.UNSIGNED_BYTE;if(s===Bf)return n.UNSIGNED_SHORT_4_4_4_4;if(s===zf)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Ng)return n.BYTE;if(s===Fg)return n.SHORT;if(s===nl)return n.UNSIGNED_SHORT;if(s===Of)return n.INT;if(s===ii)return n.UNSIGNED_INT;if(s===Hn)return n.FLOAT;if(s===Yr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Og)return n.ALPHA;if(s===an)return n.RGBA;if(s===Bg)return n.LUMINANCE;if(s===zg)return n.LUMINANCE_ALPHA;if(s===Ii)return n.DEPTH_COMPONENT;if(s===mr)return n.DEPTH_STENCIL;if(s===Da)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Hg)return n.RED;if(s===Hf)return n.RED_INTEGER;if(s===Gg)return n.RG;if(s===Gf)return n.RG_INTEGER;if(s===Vf)return n.RGBA_INTEGER;if(s===Do||s===Uo||s===Io||s===No)if(l===rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Do)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Uo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Io)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===No)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Do)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Uo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Io)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===No)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===tc||s===nc||s===ic||s===rc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===tc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===nc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ic)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===rc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===kf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===sc||s===oc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===sc)return l===rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===oc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ac||s===lc||s===cc||s===uc||s===fc||s===hc||s===dc||s===pc||s===mc||s===gc||s===_c||s===vc||s===xc||s===Mc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ac)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===lc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===cc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===uc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===fc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===hc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===dc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===pc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===mc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===gc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_c)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===vc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Mc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fo||s===Sc||s===Ec)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Fo)return l===rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Sc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ec)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Vg||s===yc||s===Tc||s===bc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Fo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===yc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Tc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===bc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ui?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class sS extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ps extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oS={type:"move"};class ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const E of e.hand.values()){const p=t.getJointPose(E,i),h=this._getHandJoint(u,E);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),m=.02,M=.005;u.inputState.pinching&&d>m+M?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-M&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(oS)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ps;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const aS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lS=`
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

}`;class cS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Bt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new qn({extensions:{fragDepth:!0},vertexShader:aS,fragmentShader:lS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new yn(new is(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class uS extends _r{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,f=null,d=null,m=null,M=null;const E=new cS,p=t.getContextAttributes();let h=null,T=null;const S=[],b=[],C=new $e;let R=null;const w=new sn;w.layers.enable(1),w.viewport=new yt;const O=new sn;O.layers.enable(2),O.viewport=new yt;const B=[w,O],v=new sS;v.layers.enable(1),v.layers.enable(2);let A=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ce=S[Z];return ce===void 0&&(ce=new ca,S[Z]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Z){let ce=S[Z];return ce===void 0&&(ce=new ca,S[Z]=ce),ce.getGripSpace()},this.getHand=function(Z){let ce=S[Z];return ce===void 0&&(ce=new ca,S[Z]=ce),ce.getHandSpace()};function ne(Z){const ce=b.indexOf(Z.inputSource);if(ce===-1)return;const xe=S[ce];xe!==void 0&&(xe.update(Z.inputSource,Z.frame,u||a),xe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function D(){r.removeEventListener("select",ne),r.removeEventListener("selectstart",ne),r.removeEventListener("selectend",ne),r.removeEventListener("squeeze",ne),r.removeEventListener("squeezestart",ne),r.removeEventListener("squeezeend",ne),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",ee);for(let Z=0;Z<S.length;Z++){const ce=b[Z];ce!==null&&(b[Z]=null,S[Z].disconnect(ce))}A=null,V=null,E.reset(),e.setRenderTarget(h),m=null,d=null,f=null,r=null,T=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",D),r.addEventListener("inputsourceschange",ee),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ce={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new Fi(m.framebufferWidth,m.framebufferHeight,{format:an,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ce=null,xe=null,Ce=null;p.depth&&(Ce=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=p.stencil?mr:Ii,xe=p.stencil?Ui:ii);const Ae={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Ae),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Fi(d.textureWidth,d.textureHeight,{format:an,type:ai,depthTexture:new oh(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Te=e.properties.get(T);Te.__ignoreDepthValues=d.ignoreDepthValues}T.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ee(Z){for(let ce=0;ce<Z.removed.length;ce++){const xe=Z.removed[ce],Ce=b.indexOf(xe);Ce>=0&&(b[Ce]=null,S[Ce].disconnect(xe))}for(let ce=0;ce<Z.added.length;ce++){const xe=Z.added[ce];let Ce=b.indexOf(xe);if(Ce===-1){for(let Te=0;Te<S.length;Te++)if(Te>=b.length){b.push(xe),Ce=Te;break}else if(b[Te]===null){b[Te]=xe,Ce=Te;break}if(Ce===-1)break}const Ae=S[Ce];Ae&&Ae.connect(xe)}}const q=new X,Q=new X;function H(Z,ce,xe){q.setFromMatrixPosition(ce.matrixWorld),Q.setFromMatrixPosition(xe.matrixWorld);const Ce=q.distanceTo(Q),Ae=ce.projectionMatrix.elements,Te=xe.projectionMatrix.elements,qe=Ae[14]/(Ae[10]-1),Ue=Ae[14]/(Ae[10]+1),_=(Ae[9]+1)/Ae[5],P=(Ae[9]-1)/Ae[5],I=(Ae[8]-1)/Ae[0],K=(Te[8]+1)/Te[0],z=qe*I,j=qe*K,ie=Ce/(-I+K),te=ie*-I;ce.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(te),Z.translateZ(ie),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const se=qe+ie,x=Ue+ie,g=z-te,L=j+(Ce-te),N=_*Ue/x*se,$=P*Ue/x*se;Z.projectionMatrix.makePerspective(g,L,N,$,se,x),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function re(Z,ce){ce===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ce.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;E.texture!==null&&(Z.near=E.depthNear,Z.far=E.depthFar),v.near=O.near=w.near=Z.near,v.far=O.far=w.far=Z.far,(A!==v.near||V!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),A=v.near,V=v.far,w.near=A,w.far=V,O.near=A,O.far=V,w.updateProjectionMatrix(),O.updateProjectionMatrix(),Z.updateProjectionMatrix());const ce=Z.parent,xe=v.cameras;re(v,ce);for(let Ce=0;Ce<xe.length;Ce++)re(xe[Ce],ce);xe.length===2?H(v,w,O):v.projectionMatrix.copy(w.projectionMatrix),oe(Z,v,ce)};function oe(Z,ce,xe){xe===null?Z.matrix.copy(ce.matrixWorld):(Z.matrix.copy(xe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ce.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ua*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return E.texture!==null};let fe=null;function _e(Z,ce){if(c=ce.getViewerPose(u||a),M=ce,c!==null){const xe=c.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let Ce=!1;xe.length!==v.cameras.length&&(v.cameras.length=0,Ce=!0);for(let Te=0;Te<xe.length;Te++){const qe=xe[Te];let Ue=null;if(m!==null)Ue=m.getViewport(qe);else{const P=f.getViewSubImage(d,qe);Ue=P.viewport,Te===0&&(e.setRenderTargetTextures(T,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(T))}let _=B[Te];_===void 0&&(_=new sn,_.layers.enable(Te),_.viewport=new yt,B[Te]=_),_.matrix.fromArray(qe.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.projectionMatrix.fromArray(qe.projectionMatrix),_.projectionMatrixInverse.copy(_.projectionMatrix).invert(),_.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),Te===0&&(v.matrix.copy(_.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Ce===!0&&v.cameras.push(_)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Te=f.getDepthInformation(xe[0]);Te&&Te.isValid&&Te.texture&&E.init(e,Te,r.renderState)}}for(let xe=0;xe<S.length;xe++){const Ce=b[xe],Ae=S[xe];Ce!==null&&Ae!==void 0&&Ae.update(Ce,ce,u||a)}E.render(e,v),fe&&fe(Z,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),M=null}const Ie=new rh;Ie.setAnimationLoop(_e),this.setAnimationLoop=function(Z){fe=Z},this.dispose=function(){}}}const Ei=new Xn,fS=new ht;function hS(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,eh(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,T,S,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),c(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,b)):h.isMeshMatcapMaterial?(s(p,h),M(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),E(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,T,S):h.isSpriteMaterial?u(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===kt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===kt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const T=e.get(h),S=T.envMap,b=T.envMapRotation;if(S&&(p.envMap.value=S,Ei.copy(b),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),p.envMapRotation.value.setFromMatrix4(fS.makeRotationFromEuler(Ei)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const C=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*C,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,T,S){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*T,p.scale.value=S*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,T){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===kt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function M(p,h){h.matcap&&(p.matcap.value=h.matcap)}function E(p,h){const T=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function dS(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,S){const b=S.program;i.uniformBlockBinding(T,b)}function u(T,S){let b=r[T.id];b===void 0&&(M(T),b=c(T),r[T.id]=b,T.addEventListener("dispose",p));const C=S.program;i.updateUBOMapping(T,C);const R=e.render.frame;s[T.id]!==R&&(d(T),s[T.id]=R)}function c(T){const S=f();T.__bindingPointIndex=S;const b=n.createBuffer(),C=T.__size,R=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,C,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,b),b}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const S=r[T.id],b=T.uniforms,C=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let R=0,w=b.length;R<w;R++){const O=Array.isArray(b[R])?b[R]:[b[R]];for(let B=0,v=O.length;B<v;B++){const A=O[B];if(m(A,R,B,C)===!0){const V=A.__offset,ne=Array.isArray(A.value)?A.value:[A.value];let D=0;for(let ee=0;ee<ne.length;ee++){const q=ne[ee],Q=E(q);typeof q=="number"||typeof q=="boolean"?(A.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,V+D,A.__data)):q.isMatrix3?(A.__data[0]=q.elements[0],A.__data[1]=q.elements[1],A.__data[2]=q.elements[2],A.__data[3]=0,A.__data[4]=q.elements[3],A.__data[5]=q.elements[4],A.__data[6]=q.elements[5],A.__data[7]=0,A.__data[8]=q.elements[6],A.__data[9]=q.elements[7],A.__data[10]=q.elements[8],A.__data[11]=0):(q.toArray(A.__data,D),D+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,S,b,C){const R=T.value,w=S+"_"+b;if(C[w]===void 0)return typeof R=="number"||typeof R=="boolean"?C[w]=R:C[w]=R.clone(),!0;{const O=C[w];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return C[w]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function M(T){const S=T.uniforms;let b=0;const C=16;for(let w=0,O=S.length;w<O;w++){const B=Array.isArray(S[w])?S[w]:[S[w]];for(let v=0,A=B.length;v<A;v++){const V=B[v],ne=Array.isArray(V.value)?V.value:[V.value];for(let D=0,ee=ne.length;D<ee;D++){const q=ne[D],Q=E(q),H=b%C;H!==0&&C-H<Q.boundary&&(b+=C-H),V.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=b,b+=Q.storage}}}const R=b%C;return R>0&&(b+=C-R),T.__size=b,T.__cache={},this}function E(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function p(T){const S=T.target;S.removeEventListener("dispose",p);const b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function h(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:u,dispose:h}}class hh{constructor(e={}){const{canvas:t=t_(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),M=new Int32Array(4);let E=null,p=null;const h=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this._useLegacyLights=!1,this.toneMapping=oi,this.toneMappingExposure=1;const S=this;let b=!1,C=0,R=0,w=null,O=-1,B=null;const v=new yt,A=new yt;let V=null;const ne=new Je(0);let D=0,ee=t.width,q=t.height,Q=1,H=null,re=null;const oe=new yt(0,0,ee,q),fe=new yt(0,0,ee,q);let _e=!1;const Ie=new ih;let Z=!1,ce=!1,xe=null;const Ce=new ht,Ae=new $e,Te=new X,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return w===null?Q:1}let _=i;function P(y,F){for(let W=0;W<y.length;W++){const Y=y[W],G=t.getContext(Y,F);if(G!==null)return G}return null}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tl}`),t.addEventListener("webglcontextlost",st,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",ge,!1),_===null){const F=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&F.shift(),_=P(F,y),_===null)throw P(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&_ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),_.getShaderPrecisionFormat===void 0&&(_.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let I,K,z,j,ie,te,se,x,g,L,N,$,J,Me,me,ae,ue,Re,le,et,ze,ye,Se,be;function We(){I=new xx(_),K=new dx(_,I,e),I.init(K),ye=new rS(_,I,K),z=new nS(_,I,K),j=new Ex(_),ie=new VM,te=new iS(_,I,z,ie,K,ye,j),se=new mx(S),x=new vx(S),g=new R_(_,K),Se=new fx(_,I,g,K),L=new Mx(_,g,j,Se),N=new Ax(_,L,g,j),le=new bx(_,K,te),ae=new px(ie),$=new GM(S,se,x,I,K,Se,ae),J=new hS(S,ie),Me=new WM,me=new jM(I,K),Re=new ux(S,se,x,z,N,d,l),ue=new tS(S,N,K),be=new dS(_,j,K,z),et=new hx(_,I,j,K),ze=new Sx(_,I,j,K),j.programs=$.programs,S.capabilities=K,S.extensions=I,S.properties=ie,S.renderLists=Me,S.shadowMap=ue,S.state=z,S.info=j}We();const Oe=new uS(S,_);this.xr=Oe,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const y=I.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=I.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(y){y!==void 0&&(Q=y,this.setSize(ee,q,!1))},this.getSize=function(y){return y.set(ee,q)},this.setSize=function(y,F,W=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=y,q=F,t.width=Math.floor(y*Q),t.height=Math.floor(F*Q),W===!0&&(t.style.width=y+"px",t.style.height=F+"px"),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(ee*Q,q*Q).floor()},this.setDrawingBufferSize=function(y,F,W){ee=y,q=F,Q=W,t.width=Math.floor(y*W),t.height=Math.floor(F*W),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(v)},this.getViewport=function(y){return y.copy(oe)},this.setViewport=function(y,F,W,Y){y.isVector4?oe.set(y.x,y.y,y.z,y.w):oe.set(y,F,W,Y),z.viewport(v.copy(oe).multiplyScalar(Q).round())},this.getScissor=function(y){return y.copy(fe)},this.setScissor=function(y,F,W,Y){y.isVector4?fe.set(y.x,y.y,y.z,y.w):fe.set(y,F,W,Y),z.scissor(A.copy(fe).multiplyScalar(Q).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(y){z.setScissorTest(_e=y)},this.setOpaqueSort=function(y){H=y},this.setTransparentSort=function(y){re=y},this.getClearColor=function(y){return y.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(y=!0,F=!0,W=!0){let Y=0;if(y){let G=!1;if(w!==null){const Ee=w.texture.format;G=Ee===Vf||Ee===Gf||Ee===Hf}if(G){const Ee=w.texture.type,we=Ee===ai||Ee===ii||Ee===nl||Ee===Ui||Ee===Bf||Ee===zf,Pe=Re.getClearColor(),De=Re.getClearAlpha(),ke=Pe.r,Ne=Pe.g,Be=Pe.b;we?(m[0]=ke,m[1]=Ne,m[2]=Be,m[3]=De,_.clearBufferuiv(_.COLOR,0,m)):(M[0]=ke,M[1]=Ne,M[2]=Be,M[3]=De,_.clearBufferiv(_.COLOR,0,M))}else Y|=_.COLOR_BUFFER_BIT}F&&(Y|=_.DEPTH_BUFFER_BIT),W&&(Y|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Me.dispose(),me.dispose(),ie.dispose(),se.dispose(),x.dispose(),N.dispose(),Se.dispose(),be.dispose(),$.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",Kt),Oe.removeEventListener("sessionend",nt),xe&&(xe.dispose(),xe=null),Pt.stop()};function st(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const y=j.autoReset,F=ue.enabled,W=ue.autoUpdate,Y=ue.needsUpdate,G=ue.type;We(),j.autoReset=y,ue.enabled=F,ue.autoUpdate=W,ue.needsUpdate=Y,ue.type=G}function ge(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function k(y){const F=y.target;F.removeEventListener("dispose",k),de(F)}function de(y){ve(y),ie.remove(y)}function ve(y){const F=ie.get(y).programs;F!==void 0&&(F.forEach(function(W){$.releaseProgram(W)}),y.isShaderMaterial&&$.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,W,Y,G,Ee){F===null&&(F=qe);const we=G.isMesh&&G.matrixWorld.determinant()<0,Pe=ph(y,F,W,Y,G);z.setMaterial(Y,we);let De=W.index,ke=1;if(Y.wireframe===!0){if(De=L.getWireframeAttribute(W),De===void 0)return;ke=2}const Ne=W.drawRange,Be=W.attributes.position;let ct=Ne.start*ke,Wt=(Ne.start+Ne.count)*ke;Ee!==null&&(ct=Math.max(ct,Ee.start*ke),Wt=Math.min(Wt,(Ee.start+Ee.count)*ke)),De!==null?(ct=Math.max(ct,0),Wt=Math.min(Wt,De.count)):Be!=null&&(ct=Math.max(ct,0),Wt=Math.min(Wt,Be.count));const mt=Wt-ct;if(mt<0||mt===1/0)return;Se.setup(G,Y,Pe,W,De);let An,at=et;if(De!==null&&(An=g.get(De),at=ze,at.setIndex(An)),G.isMesh)Y.wireframe===!0?(z.setLineWidth(Y.wireframeLinewidth*Ue()),at.setMode(_.LINES)):at.setMode(_.TRIANGLES);else if(G.isLine){let He=Y.linewidth;He===void 0&&(He=1),z.setLineWidth(He*Ue()),G.isLineSegments?at.setMode(_.LINES):G.isLineLoop?at.setMode(_.LINE_LOOP):at.setMode(_.LINE_STRIP)}else G.isPoints?at.setMode(_.POINTS):G.isSprite&&at.setMode(_.TRIANGLES);if(G.isBatchedMesh)at.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)at.renderInstances(ct,mt,G.count);else if(W.isInstancedBufferGeometry){const He=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,mo=Math.min(W.instanceCount,He);at.renderInstances(ct,mt,mo)}else at.render(ct,mt)};function Xe(y,F,W){y.transparent===!0&&y.side===zn&&y.forceSinglePass===!1?(y.side=kt,y.needsUpdate=!0,ss(y,F,W),y.side=ci,y.needsUpdate=!0,ss(y,F,W),y.side=zn):ss(y,F,W)}this.compile=function(y,F,W=null){W===null&&(W=y),p=me.get(W),p.init(),T.push(p),W.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),y!==W&&y.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(S._useLegacyLights);const Y=new Set;return y.traverse(function(G){const Ee=G.material;if(Ee)if(Array.isArray(Ee))for(let we=0;we<Ee.length;we++){const Pe=Ee[we];Xe(Pe,W,G),Y.add(Pe)}else Xe(Ee,W,G),Y.add(Ee)}),T.pop(),p=null,Y},this.compileAsync=function(y,F,W=null){const Y=this.compile(y,F,W);return new Promise(G=>{function Ee(){if(Y.forEach(function(we){ie.get(we).currentProgram.isReady()&&Y.delete(we)}),Y.size===0){G(y);return}setTimeout(Ee,10)}I.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let tt=null;function xt(y){tt&&tt(y)}function Kt(){Pt.stop()}function nt(){Pt.start()}const Pt=new rh;Pt.setAnimationLoop(xt),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(y){tt=y,Oe.setAnimationLoop(y),y===null?Pt.stop():Pt.start()},Oe.addEventListener("sessionstart",Kt),Oe.addEventListener("sessionend",nt),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(F),F=Oe.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,F,w),p=me.get(y,T.length),p.init(),T.push(p),Ce.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ie.setFromProjectionMatrix(Ce),ce=this.localClippingEnabled,Z=ae.init(this.clippingPlanes,ce),E=Me.get(y,h.length),E.init(),h.push(E),dn(y,F,0,S.sortObjects),E.finish(),S.sortObjects===!0&&E.sort(H,re),this.info.render.frame++,Z===!0&&ae.beginShadows();const W=p.state.shadowsArray;if(ue.render(W,y,F),Z===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1)&&Re.render(E,y),p.setupLights(S._useLegacyLights),F.isArrayCamera){const Y=F.cameras;for(let G=0,Ee=Y.length;G<Ee;G++){const we=Y[G];ol(E,y,we,we.viewport)}}else ol(E,y,F);w!==null&&(te.updateMultisampleRenderTarget(w),te.updateRenderTargetMipmap(w)),y.isScene===!0&&y.onAfterRender(S,y,F),Se.resetDefaultState(),O=-1,B=null,T.pop(),T.length>0?p=T[T.length-1]:p=null,h.pop(),h.length>0?E=h[h.length-1]:E=null};function dn(y,F,W,Y){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Ie.intersectsSprite(y)){Y&&Te.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ce);const we=N.update(y),Pe=y.material;Pe.visible&&E.push(y,we,Pe,W,Te.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Ie.intersectsObject(y))){const we=N.update(y),Pe=y.material;if(Y&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Te.copy(y.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Te.copy(we.boundingSphere.center)),Te.applyMatrix4(y.matrixWorld).applyMatrix4(Ce)),Array.isArray(Pe)){const De=we.groups;for(let ke=0,Ne=De.length;ke<Ne;ke++){const Be=De[ke],ct=Pe[Be.materialIndex];ct&&ct.visible&&E.push(y,we,ct,W,Te.z,Be)}}else Pe.visible&&E.push(y,we,Pe,W,Te.z,null)}}const Ee=y.children;for(let we=0,Pe=Ee.length;we<Pe;we++)dn(Ee[we],F,W,Y)}function ol(y,F,W,Y){const G=y.opaque,Ee=y.transmissive,we=y.transparent;p.setupLightsView(W),Z===!0&&ae.setGlobalState(S.clippingPlanes,W),Ee.length>0&&dh(G,Ee,F,W),Y&&z.viewport(v.copy(Y)),G.length>0&&rs(G,F,W),Ee.length>0&&rs(Ee,F,W),we.length>0&&rs(we,F,W),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function dh(y,F,W,Y){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const Ee=K.isWebGL2;xe===null&&(xe=new Fi(1,1,{generateMipmaps:!0,type:I.has("EXT_color_buffer_half_float")?Yr:ai,minFilter:Ci,samples:Ee?4:0})),S.getDrawingBufferSize(Ae),Ee?xe.setSize(Ae.x,Ae.y):xe.setSize(Ia(Ae.x),Ia(Ae.y));const we=S.getRenderTarget();S.setRenderTarget(xe),S.getClearColor(ne),D=S.getClearAlpha(),D<1&&S.setClearColor(16777215,.5),S.clear();const Pe=S.toneMapping;S.toneMapping=oi,rs(y,W,Y),te.updateMultisampleRenderTarget(xe),te.updateRenderTargetMipmap(xe);let De=!1;for(let ke=0,Ne=F.length;ke<Ne;ke++){const Be=F[ke],ct=Be.object,Wt=Be.geometry,mt=Be.material,An=Be.group;if(mt.side===zn&&ct.layers.test(Y.layers)){const at=mt.side;mt.side=kt,mt.needsUpdate=!0,al(ct,W,Y,Wt,mt,An),mt.side=at,mt.needsUpdate=!0,De=!0}}De===!0&&(te.updateMultisampleRenderTarget(xe),te.updateRenderTargetMipmap(xe)),S.setRenderTarget(we),S.setClearColor(ne,D),S.toneMapping=Pe}function rs(y,F,W){const Y=F.isScene===!0?F.overrideMaterial:null;for(let G=0,Ee=y.length;G<Ee;G++){const we=y[G],Pe=we.object,De=we.geometry,ke=Y===null?we.material:Y,Ne=we.group;Pe.layers.test(W.layers)&&al(Pe,F,W,De,ke,Ne)}}function al(y,F,W,Y,G,Ee){y.onBeforeRender(S,F,W,Y,G,Ee),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(S,F,W,Y,y,Ee),G.transparent===!0&&G.side===zn&&G.forceSinglePass===!1?(G.side=kt,G.needsUpdate=!0,S.renderBufferDirect(W,F,Y,G,y,Ee),G.side=ci,G.needsUpdate=!0,S.renderBufferDirect(W,F,Y,G,y,Ee),G.side=zn):S.renderBufferDirect(W,F,Y,G,y,Ee),y.onAfterRender(S,F,W,Y,G,Ee)}function ss(y,F,W){F.isScene!==!0&&(F=qe);const Y=ie.get(y),G=p.state.lights,Ee=p.state.shadowsArray,we=G.state.version,Pe=$.getParameters(y,G.state,Ee,F,W),De=$.getProgramCacheKey(Pe);let ke=Y.programs;Y.environment=y.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(y.isMeshStandardMaterial?x:se).get(y.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,ke===void 0&&(y.addEventListener("dispose",k),ke=new Map,Y.programs=ke);let Ne=ke.get(De);if(Ne!==void 0){if(Y.currentProgram===Ne&&Y.lightsStateVersion===we)return cl(y,Pe),Ne}else Pe.uniforms=$.getUniforms(y),y.onBuild(W,Pe,S),y.onBeforeCompile(Pe,S),Ne=$.acquireProgram(Pe,De),ke.set(De,Ne),Y.uniforms=Pe.uniforms;const Be=Y.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Be.clippingPlanes=ae.uniform),cl(y,Pe),Y.needsLights=gh(y),Y.lightsStateVersion=we,Y.needsLights&&(Be.ambientLightColor.value=G.state.ambient,Be.lightProbe.value=G.state.probe,Be.directionalLights.value=G.state.directional,Be.directionalLightShadows.value=G.state.directionalShadow,Be.spotLights.value=G.state.spot,Be.spotLightShadows.value=G.state.spotShadow,Be.rectAreaLights.value=G.state.rectArea,Be.ltc_1.value=G.state.rectAreaLTC1,Be.ltc_2.value=G.state.rectAreaLTC2,Be.pointLights.value=G.state.point,Be.pointLightShadows.value=G.state.pointShadow,Be.hemisphereLights.value=G.state.hemi,Be.directionalShadowMap.value=G.state.directionalShadowMap,Be.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Be.spotShadowMap.value=G.state.spotShadowMap,Be.spotLightMatrix.value=G.state.spotLightMatrix,Be.spotLightMap.value=G.state.spotLightMap,Be.pointShadowMap.value=G.state.pointShadowMap,Be.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Ne,Y.uniformsList=null,Ne}function ll(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=Is.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function cl(y,F){const W=ie.get(y);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function ph(y,F,W,Y,G){F.isScene!==!0&&(F=qe),te.resetTextureUnits();const Ee=F.fog,we=Y.isMeshStandardMaterial?F.environment:null,Pe=w===null?S.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ui,De=(Y.isMeshStandardMaterial?x:se).get(Y.envMap||we),ke=Y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ne=!!W.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Be=!!W.morphAttributes.position,ct=!!W.morphAttributes.normal,Wt=!!W.morphAttributes.color;let mt=oi;Y.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(mt=S.toneMapping);const An=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,at=An!==void 0?An.length:0,He=ie.get(Y),mo=p.state.lights;if(Z===!0&&(ce===!0||y!==B)){const jt=y===B&&Y.id===O;ae.setState(Y,y,jt)}let ot=!1;Y.version===He.__version?(He.needsLights&&He.lightsStateVersion!==mo.state.version||He.outputColorSpace!==Pe||G.isBatchedMesh&&He.batching===!1||!G.isBatchedMesh&&He.batching===!0||G.isInstancedMesh&&He.instancing===!1||!G.isInstancedMesh&&He.instancing===!0||G.isSkinnedMesh&&He.skinning===!1||!G.isSkinnedMesh&&He.skinning===!0||G.isInstancedMesh&&He.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&He.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&He.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&He.instancingMorph===!1&&G.morphTexture!==null||He.envMap!==De||Y.fog===!0&&He.fog!==Ee||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ae.numPlanes||He.numIntersection!==ae.numIntersection)||He.vertexAlphas!==ke||He.vertexTangents!==Ne||He.morphTargets!==Be||He.morphNormals!==ct||He.morphColors!==Wt||He.toneMapping!==mt||K.isWebGL2===!0&&He.morphTargetsCount!==at)&&(ot=!0):(ot=!0,He.__version=Y.version);let fi=He.currentProgram;ot===!0&&(fi=ss(Y,F,G));let ul=!1,xr=!1,go=!1;const Tt=fi.getUniforms(),hi=He.uniforms;if(z.useProgram(fi.program)&&(ul=!0,xr=!0,go=!0),Y.id!==O&&(O=Y.id,xr=!0),ul||B!==y){Tt.setValue(_,"projectionMatrix",y.projectionMatrix),Tt.setValue(_,"viewMatrix",y.matrixWorldInverse);const jt=Tt.map.cameraPosition;jt!==void 0&&jt.setValue(_,Te.setFromMatrixPosition(y.matrixWorld)),K.logarithmicDepthBuffer&&Tt.setValue(_,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Tt.setValue(_,"isOrthographic",y.isOrthographicCamera===!0),B!==y&&(B=y,xr=!0,go=!0)}if(G.isSkinnedMesh){Tt.setOptional(_,G,"bindMatrix"),Tt.setOptional(_,G,"bindMatrixInverse");const jt=G.skeleton;jt&&(K.floatVertexTextures?(jt.boneTexture===null&&jt.computeBoneTexture(),Tt.setValue(_,"boneTexture",jt.boneTexture,te)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Tt.setOptional(_,G,"batchingTexture"),Tt.setValue(_,"batchingTexture",G._matricesTexture,te));const _o=W.morphAttributes;if((_o.position!==void 0||_o.normal!==void 0||_o.color!==void 0&&K.isWebGL2===!0)&&le.update(G,W,fi),(xr||He.receiveShadow!==G.receiveShadow)&&(He.receiveShadow=G.receiveShadow,Tt.setValue(_,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(hi.envMap.value=De,hi.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),xr&&(Tt.setValue(_,"toneMappingExposure",S.toneMappingExposure),He.needsLights&&mh(hi,go),Ee&&Y.fog===!0&&J.refreshFogUniforms(hi,Ee),J.refreshMaterialUniforms(hi,Y,Q,q,xe),Is.upload(_,ll(He),hi,te)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Is.upload(_,ll(He),hi,te),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Tt.setValue(_,"center",G.center),Tt.setValue(_,"modelViewMatrix",G.modelViewMatrix),Tt.setValue(_,"normalMatrix",G.normalMatrix),Tt.setValue(_,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const jt=Y.uniformsGroups;for(let vo=0,_h=jt.length;vo<_h;vo++)if(K.isWebGL2){const fl=jt[vo];be.update(fl,fi),be.bind(fl,fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fi}function mh(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function gh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(y,F,W){ie.get(y.texture).__webglTexture=F,ie.get(y.depthTexture).__webglTexture=W;const Y=ie.get(y);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=W===void 0,Y.__autoAllocateDepthBuffer||I.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,F){const W=ie.get(y);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(y,F=0,W=0){w=y,C=F,R=W;let Y=!0,G=null,Ee=!1,we=!1;if(y){const De=ie.get(y);De.__useDefaultFramebuffer!==void 0?(z.bindFramebuffer(_.FRAMEBUFFER,null),Y=!1):De.__webglFramebuffer===void 0?te.setupRenderTarget(y):De.__hasExternalTextures&&te.rebindTextures(y,ie.get(y.texture).__webglTexture,ie.get(y.depthTexture).__webglTexture);const ke=y.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(we=!0);const Ne=ie.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?G=Ne[F][W]:G=Ne[F],Ee=!0):K.isWebGL2&&y.samples>0&&te.useMultisampledRTT(y)===!1?G=ie.get(y).__webglMultisampledFramebuffer:Array.isArray(Ne)?G=Ne[W]:G=Ne,v.copy(y.viewport),A.copy(y.scissor),V=y.scissorTest}else v.copy(oe).multiplyScalar(Q).floor(),A.copy(fe).multiplyScalar(Q).floor(),V=_e;if(z.bindFramebuffer(_.FRAMEBUFFER,G)&&K.drawBuffers&&Y&&z.drawBuffers(y,G),z.viewport(v),z.scissor(A),z.setScissorTest(V),Ee){const De=ie.get(y.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+F,De.__webglTexture,W)}else if(we){const De=ie.get(y.texture),ke=F||0;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,De.__webglTexture,W||0,ke)}O=-1},this.readRenderTargetPixels=function(y,F,W,Y,G,Ee,we){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ie.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){z.bindFramebuffer(_.FRAMEBUFFER,Pe);try{const De=y.texture,ke=De.format,Ne=De.type;if(ke!==an&&ye.convert(ke)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Ne===Yr&&(I.has("EXT_color_buffer_half_float")||K.isWebGL2&&I.has("EXT_color_buffer_float"));if(Ne!==ai&&ye.convert(Ne)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===Hn&&(K.isWebGL2||I.has("OES_texture_float")||I.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-Y&&W>=0&&W<=y.height-G&&_.readPixels(F,W,Y,G,ye.convert(ke),ye.convert(Ne),Ee)}finally{const De=w!==null?ie.get(w).__webglFramebuffer:null;z.bindFramebuffer(_.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(y,F,W=0){const Y=Math.pow(2,-W),G=Math.floor(F.image.width*Y),Ee=Math.floor(F.image.height*Y);te.setTexture2D(F,0),_.copyTexSubImage2D(_.TEXTURE_2D,W,0,0,y.x,y.y,G,Ee),z.unbindTexture()},this.copyTextureToTexture=function(y,F,W,Y=0){const G=F.image.width,Ee=F.image.height,we=ye.convert(W.format),Pe=ye.convert(W.type);te.setTexture2D(W,0),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,W.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,W.unpackAlignment),F.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,Y,y.x,y.y,G,Ee,we,Pe,F.image.data):F.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,Y,y.x,y.y,F.mipmaps[0].width,F.mipmaps[0].height,we,F.mipmaps[0].data):_.texSubImage2D(_.TEXTURE_2D,Y,y.x,y.y,we,Pe,F.image),Y===0&&W.generateMipmaps&&_.generateMipmap(_.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(y,F,W,Y,G=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=Math.round(y.max.x-y.min.x),we=Math.round(y.max.y-y.min.y),Pe=y.max.z-y.min.z+1,De=ye.convert(Y.format),ke=ye.convert(Y.type);let Ne;if(Y.isData3DTexture)te.setTexture3D(Y,0),Ne=_.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)te.setTexture2DArray(Y,0),Ne=_.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,Y.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,Y.unpackAlignment);const Be=_.getParameter(_.UNPACK_ROW_LENGTH),ct=_.getParameter(_.UNPACK_IMAGE_HEIGHT),Wt=_.getParameter(_.UNPACK_SKIP_PIXELS),mt=_.getParameter(_.UNPACK_SKIP_ROWS),An=_.getParameter(_.UNPACK_SKIP_IMAGES),at=W.isCompressedTexture?W.mipmaps[G]:W.image;_.pixelStorei(_.UNPACK_ROW_LENGTH,at.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,at.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,y.min.x),_.pixelStorei(_.UNPACK_SKIP_ROWS,y.min.y),_.pixelStorei(_.UNPACK_SKIP_IMAGES,y.min.z),W.isDataTexture||W.isData3DTexture?_.texSubImage3D(Ne,G,F.x,F.y,F.z,Ee,we,Pe,De,ke,at.data):Y.isCompressedArrayTexture?_.compressedTexSubImage3D(Ne,G,F.x,F.y,F.z,Ee,we,Pe,De,at.data):_.texSubImage3D(Ne,G,F.x,F.y,F.z,Ee,we,Pe,De,ke,at),_.pixelStorei(_.UNPACK_ROW_LENGTH,Be),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,ct),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Wt),_.pixelStorei(_.UNPACK_SKIP_ROWS,mt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,An),G===0&&Y.generateMipmaps&&_.generateMipmap(Ne),z.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?te.setTextureCube(y,0):y.isData3DTexture?te.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?te.setTexture2DArray(y,0):te.setTexture2D(y,0),z.unbindTexture()},this.resetState=function(){C=0,R=0,w=null,z.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===il?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===fo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class pS extends hh{}pS.prototype.isWebGL1Renderer=!0;class mS extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tl);class gS{constructor(e,t){this.effectCanvas=e,this.originalCanvas=t,this.renderer=null,this.scene=null,this.camera=null,this.material=null,this.texture=null,this.mesh=null,this.params={horizontalChromatic:70,distortion:50,speed:60,size:60,blur:60},this.time=0,this.animationId=null,this.currentImage=null,this.compareMode=!1}init(){this.scene=new mS,this.camera=new sh(-1,1,1,-1,0,1),this.renderer=new hh({canvas:this.effectCanvas,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.createMaterial();const e=new is(2,2);this.mesh=new yn(e,this.material),this.scene.add(this.mesh),this.animate(),window.addEventListener("resize",()=>this.handleResize())}createMaterial(){this.material=new qn({uniforms:{uTexture:{value:null},uTime:{value:0},uHorizontalChromatic:{value:.7},uDistortion:{value:.5},uSpeed:{value:.6},uSize:{value:.6},uBlur:{value:.6},uResolution:{value:new $e(1,1)},uTextureResolution:{value:new $e(1,1)}},vertexShader:`
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
      `})}loadImage(e){this.currentImage=e,this.texture&&this.texture.dispose(),this.texture=new Bt(e),this.texture.needsUpdate=!0,this.material.uniforms.uTexture.value=this.texture,this.material.uniforms.uTextureResolution.value.set(e.width,e.height),this.updateCanvasSize(e.width,e.height),this.compareMode&&this.originalCanvas&&this.drawOriginalImage(e)}drawOriginalImage(e){if(!this.originalCanvas)return;const t=this.originalCanvas.getContext("2d");this.originalCanvas.width=e.width,this.originalCanvas.height=e.height,t.drawImage(e,0,0)}updateCanvasSize(e,t){const i=this.effectCanvas.parentElement;if(!i)return;const r=i.clientWidth-48,s=i.clientHeight-48,a=Math.min(r/e,s/t,1),o=Math.floor(e*a),l=Math.floor(t*a);this.effectCanvas.style.width=`${o}px`,this.effectCanvas.style.height=`${l}px`,this.renderer.setSize(e,t,!1),this.material.uniforms.uResolution.value.set(e,t),this.compareMode&&this.originalCanvas&&(this.originalCanvas.style.width=`${o}px`,this.originalCanvas.style.height=`${l}px`)}updateParams(e){this.params={...e},this.material.uniforms.uHorizontalChromatic.value=e.horizontalChromatic/100,this.material.uniforms.uDistortion.value=e.distortion/100,this.material.uniforms.uSpeed.value=e.speed/100,this.material.uniforms.uSize.value=e.size/100,this.material.uniforms.uBlur.value=e.blur/100}setCompareMode(e){this.compareMode=e,e&&this.currentImage&&this.originalCanvas&&(this.drawOriginalImage(this.currentImage),this.updateCanvasSize(this.currentImage.width,this.currentImage.height))}animate(){this.animationId=requestAnimationFrame(()=>this.animate()),this.time+=.016,this.material.uniforms.uTime.value=this.time,this.renderer.render(this.scene,this.camera)}handleResize(){this.currentImage&&this.updateCanvasSize(this.currentImage.width,this.currentImage.height)}dispose(){this.animationId&&cancelAnimationFrame(this.animationId),this.texture&&this.texture.dispose(),this.material&&this.material.dispose(),this.renderer&&this.renderer.dispose(),window.removeEventListener("resize",()=>this.handleResize())}}const _S={class:"app"},vS={class:"app-body"},xS={__name:"App",setup(n){const e=wt("wave-blur"),t=wt(!1),i=wt(!1),r=wt(null);let s=null;const a={"wave-blur":{id:"wave-blur",name:"WaveBlurring",nameZh:"波形模糊",defaultParams:{horizontalChromatic:70,distortion:50,speed:60,size:60,blur:60},paramDefs:[{key:"horizontalChromatic",label:"AdjustHorizontalChromatic",desc:"水平色差强度",min:0,max:100,step:.1},{key:"distortion",label:"AdjustDistortion",desc:"扭曲程度",min:0,max:100,step:.1},{key:"speed",label:"AdjustSpeed",desc:"动画速度",min:0,max:100,step:.1},{key:"size",label:"AdjustSize",desc:"波形尺寸",min:0,max:100,step:.1},{key:"blur",label:"AdjustBlur",desc:"模糊强度",min:0,max:100,step:.1}]}},o=Di(()=>a[e.value]||null),l=Di(()=>{var T;return((T=o.value)==null?void 0:T.paramDefs)||[]}),u=Di(()=>{for(const T of Us)if(T.plugins.find(S=>S.id===e.value))return T.name;return""}),c=wt({horizontalChromatic:70,distortion:50,speed:60,size:60,blur:60});Nr(c,T=>{s&&s.updateParams(T)},{deep:!0}),oo(()=>{ma(()=>{f(),d()})});function f(){const T=r.value;if(!T)return;const S=T.effectCanvas,b=T.originalCanvas;S&&(s=new gS(S,b),s.init())}function d(){const T=new Image;T.crossOrigin="anonymous",T.src="/demo.jpg",T.onload=()=>{i.value=!0,s==null||s.loadImage(T)},T.onerror=()=>m()}function m(){const T=document.createElement("canvas");T.width=800,T.height=600;const S=T.getContext("2d"),b=S.createLinearGradient(0,0,800,600);b.addColorStop(0,"#111"),b.addColorStop(1,"#1a1a1a"),S.fillStyle=b,S.fillRect(0,0,800,600),S.strokeStyle="rgba(255,255,255,0.04)",S.lineWidth=1;for(let C=0;C<800;C+=50)S.beginPath(),S.moveTo(C,0),S.lineTo(C,600),S.stroke();for(let C=0;C<600;C+=50)S.beginPath(),S.moveTo(0,C),S.lineTo(800,C),S.stroke();S.fillStyle="rgba(255,255,255,0.15)",S.font='bold 32px "Space Grotesk", sans-serif',S.textAlign="center",S.textBaseline="middle",S.fillText("KSkr Preview",400,280),S.font='16px "Space Grotesk", sans-serif',S.fillStyle="rgba(255,255,255,0.06)",S.fillText("上传图片以预览效果",400,326),T.toBlob(C=>{const R=new Image;R.src=URL.createObjectURL(C),R.onload=()=>{i.value=!0,s==null||s.loadImage(R)}})}function M(T){var C,R,w;const S=((R=(C=T==null?void 0:T.target)==null?void 0:C.files)==null?void 0:R[0])||(Array.isArray((w=T==null?void 0:T.target)==null?void 0:w.files)?T.target.files[0]:null);if(!S)return;const b=new FileReader;b.onload=O=>{const B=new Image;B.src=O.target.result,B.onload=()=>{i.value=!0,s==null||s.loadImage(B)}},b.readAsDataURL(S)}function E(){var S;const T=((S=o.value)==null?void 0:S.defaultParams)||{};c.value={...T}}function p(){t.value=!t.value,ma(()=>{if(s){const T=r.value;if(!T)return;t.value?T.effectCanvasCmp:T.effectCanvas,T.originalCanvas,s.setCompareMode(t.value)}})}function h(T){e.value=T.id,a[T.id]&&(c.value={...a[T.id].defaultParams})}return(T,S)=>{var b;return ft(),Et("div",_S,[_t(Jp),he("div",vS,[_t(gm,{onSelectPlugin:h}),o.value?(ft(),Af(Nm,{key:0,plugin:o.value,params:l.value,modelValue:c.value,"onUpdate:modelValue":S[0]||(S[0]=C=>c.value=C),compareMode:t.value,onReset:E,onUpload:M,onToggleCompare:p},null,8,["plugin","params","modelValue","compareMode"])):Ja("",!0),_t(Qm,{ref_key:"previewArea",ref:r,compareMode:t.value,hasImage:i.value,currentCategory:u.value,currentPlugin:((b=o.value)==null?void 0:b.name)||"",onUpload:M},null,8,["compareMode","hasImage","currentCategory","currentPlugin"])])])}}},MS=Jr(xS,[["__scopeId","data-v-257e79ba"]]);qp(MS).mount("#app");
