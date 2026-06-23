(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Oo(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Qe={},ar=[],ln=()=>{},_u=()=>!1,ea=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ta=n=>n.startsWith("onUpdate:"),vt=Object.assign,Bo=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},xh=Object.prototype.hasOwnProperty,Ke=(n,e)=>xh.call(n,e),Le=Array.isArray,or=n=>jr(n)==="[object Map]",vu=n=>jr(n)==="[object Set]",dl=n=>jr(n)==="[object Date]",Fe=n=>typeof n=="function",lt=n=>typeof n=="string",An=n=>typeof n=="symbol",je=n=>n!==null&&typeof n=="object",xu=n=>(je(n)||Fe(n))&&Fe(n.then)&&Fe(n.catch),Mu=Object.prototype.toString,jr=n=>Mu.call(n),Mh=n=>jr(n).slice(8,-1),Su=n=>jr(n)==="[object Object]",zo=n=>lt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ir=Oo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),na=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Sh=/-\w/g,cn=na(n=>n.replace(Sh,e=>e.slice(1).toUpperCase())),Eh=/\B([A-Z])/g,Bi=na(n=>n.replace(Eh,"-$1").toLowerCase()),Eu=na(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ma=na(n=>n?`on${Eu(n)}`:""),En=(n,e)=>!Object.is(n,e),Sa=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},yu=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},yh=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Th=n=>{const e=lt(n)?Number(n):NaN;return isNaN(e)?n:e};let pl;const ia=()=>pl||(pl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function lr(n){if(Le(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=lt(i)?Ch(i):lr(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(lt(n)||je(n))return n}const bh=/;(?![^(]*\))/g,Ah=/:([^]+)/,wh=/\/\*[^]*?\*\//g;function Ch(n){const e={};return n.replace(wh,"").split(bh).forEach(t=>{if(t){const i=t.split(Ah);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function si(n){let e="";if(lt(n))e=n;else if(Le(n))for(let t=0;t<n.length;t++){const i=si(n[t]);i&&(e+=i+" ")}else if(je(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Rh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ph=Oo(Rh);function Tu(n){return!!n||n===""}function Lh(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Ho(n[i],e[i]);return t}function Ho(n,e){if(n===e)return!0;let t=dl(n),i=dl(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=An(n),i=An(e),t||i)return n===e;if(t=Le(n),i=Le(e),t||i)return t&&i?Lh(n,e):!1;if(t=je(n),i=je(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ho(n[o],e[o]))return!1}}return String(n)===String(e)}const bu=n=>!!(n&&n.__v_isRef===!0),St=n=>lt(n)?n:n==null?"":Le(n)||je(n)&&(n.toString===Mu||!Fe(n.toString))?bu(n)?St(n.value):JSON.stringify(n,Au,2):String(n),Au=(n,e)=>bu(e)?Au(n,e.value):or(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Ea(i,s)+" =>"]=r,t),{})}:vu(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ea(t))}:An(e)?Ea(e):je(e)&&!Le(e)&&!Su(e)?String(e):e,Ea=(n,e="")=>{var t;return An(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};function Dh(n){return n==null?"initial":typeof n=="string"?n===""?" ":n:String(n)}/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mt;class Ih{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Mt&&(Mt.active?(this.parent=Mt,this.index=(Mt.scopes||(Mt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Mt;try{return Mt=this,e()}finally{Mt=t}}}on(){++this._on===1&&(this.prevScope=Mt,Mt=this)}off(){if(this._on>0&&--this._on===0){if(Mt===this)Mt=this.prevScope;else{let e=Mt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Uh(){return Mt}let it;const ya=new WeakSet;class wu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Mt&&(Mt.active?Mt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ya.has(this)&&(ya.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ru(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ml(this),Pu(this);const e=it,t=un;it=this,un=!0;try{return this.fn()}finally{Lu(this),it=e,un=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ko(e);this.deps=this.depsTail=void 0,ml(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ya.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fo(this)&&this.run()}get dirty(){return fo(this)}}let Cu=0,Ur,Nr;function Ru(n,e=!1){if(n.flags|=8,e){n.next=Nr,Nr=n;return}n.next=Ur,Ur=n}function Go(){Cu++}function Vo(){if(--Cu>0)return;if(Nr){let e=Nr;for(Nr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ur;){let e=Ur;for(Ur=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Pu(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Lu(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),ko(i),Nh(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function fo(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Du(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Du(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Vr)||(n.globalVersion=Vr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!fo(n))))return;n.flags|=2;const e=n.dep,t=it,i=un;it=n,un=!0;try{Pu(n);const r=n.fn(n._value);(e.version===0||En(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{it=t,un=i,Lu(n),n.flags&=-3}}function ko(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)ko(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Nh(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let un=!0;const Iu=[];function kn(){Iu.push(un),un=!1}function Wn(){const n=Iu.pop();un=n===void 0?!0:n}function ml(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=it;it=void 0;try{e()}finally{it=t}}}let Vr=0;class Fh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Wo{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!it||!un||it===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==it)t=this.activeLink=new Fh(it,this),it.deps?(t.prevDep=it.depsTail,it.depsTail.nextDep=t,it.depsTail=t):it.deps=it.depsTail=t,Uu(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=it.depsTail,t.nextDep=void 0,it.depsTail.nextDep=t,it.depsTail=t,it.deps===t&&(it.deps=i)}return t}trigger(e){this.version++,Vr++,this.notify(e)}notify(e){Go();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Vo()}}}function Uu(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Uu(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ho=new WeakMap,Li=Symbol(""),po=Symbol(""),kr=Symbol("");function Ct(n,e,t){if(un&&it){let i=ho.get(n);i||ho.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Wo),r.map=i,r.key=t),r.track()}}function Bn(n,e,t,i,r,s){const o=ho.get(n);if(!o){Vr++;return}const a=l=>{l&&l.trigger()};if(Go(),e==="clear")o.forEach(a);else{const l=Le(n),u=l&&zo(t);if(l&&t==="length"){const c=Number(i);o.forEach((f,h)=>{(h==="length"||h===kr||!An(h)&&h>=c)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(kr)),e){case"add":l?u&&a(o.get("length")):(a(o.get(Li)),or(n)&&a(o.get(po)));break;case"delete":l||(a(o.get(Li)),or(n)&&a(o.get(po)));break;case"set":or(n)&&a(o.get(Li));break}}Vo()}function Hi(n){const e=Ye(n);return e===n?e:(Ct(e,"iterate",kr),en(n)?e:e.map(fn))}function ra(n){return Ct(n=Ye(n),"iterate",kr),n}function xn(n,e){return Xn(n)?dr(Di(n)?fn(e):e):fn(e)}const Oh={__proto__:null,[Symbol.iterator](){return Ta(this,Symbol.iterator,n=>xn(this,n))},concat(...n){return Hi(this).concat(...n.map(e=>Le(e)?Hi(e):e))},entries(){return Ta(this,"entries",n=>(n[1]=xn(this,n[1]),n))},every(n,e){return Cn(this,"every",n,e,void 0,arguments)},filter(n,e){return Cn(this,"filter",n,e,t=>t.map(i=>xn(this,i)),arguments)},find(n,e){return Cn(this,"find",n,e,t=>xn(this,t),arguments)},findIndex(n,e){return Cn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Cn(this,"findLast",n,e,t=>xn(this,t),arguments)},findLastIndex(n,e){return Cn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Cn(this,"forEach",n,e,void 0,arguments)},includes(...n){return ba(this,"includes",n)},indexOf(...n){return ba(this,"indexOf",n)},join(n){return Hi(this).join(n)},lastIndexOf(...n){return ba(this,"lastIndexOf",n)},map(n,e){return Cn(this,"map",n,e,void 0,arguments)},pop(){return Sr(this,"pop")},push(...n){return Sr(this,"push",n)},reduce(n,...e){return gl(this,"reduce",n,e)},reduceRight(n,...e){return gl(this,"reduceRight",n,e)},shift(){return Sr(this,"shift")},some(n,e){return Cn(this,"some",n,e,void 0,arguments)},splice(...n){return Sr(this,"splice",n)},toReversed(){return Hi(this).toReversed()},toSorted(n){return Hi(this).toSorted(n)},toSpliced(...n){return Hi(this).toSpliced(...n)},unshift(...n){return Sr(this,"unshift",n)},values(){return Ta(this,"values",n=>xn(this,n))}};function Ta(n,e,t){const i=ra(n),r=i[e]();return i!==n&&!en(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Bh=Array.prototype;function Cn(n,e,t,i,r,s){const o=ra(n),a=o!==n&&!en(n),l=o[e];if(l!==Bh[e]){const f=l.apply(n,s);return a?fn(f):f}let u=t;o!==n&&(a?u=function(f,h){return t.call(this,xn(n,f),h,n)}:t.length>2&&(u=function(f,h){return t.call(this,f,h,n)}));const c=l.call(o,u,i);return a&&r?r(c):c}function gl(n,e,t,i){const r=ra(n),s=r!==n&&!en(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(u,c,f){return a&&(a=!1,u=xn(n,u)),t.call(this,u,xn(n,c),f,n)}):t.length>3&&(o=function(u,c,f){return t.call(this,u,c,f,n)}));const l=r[e](o,...i);return a?xn(n,l):l}function ba(n,e,t){const i=Ye(n);Ct(i,"iterate",kr);const r=i[e](...t);return(r===-1||r===!1)&&Yo(t[0])?(t[0]=Ye(t[0]),i[e](...t)):r}function Sr(n,e,t=[]){kn(),Go();const i=Ye(n)[e].apply(n,t);return Vo(),Wn(),i}const zh=Oo("__proto__,__v_isRef,__isVue"),Nu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(An));function Hh(n){An(n)||(n=String(n));const e=Ye(this);return Ct(e,"has",n),e.hasOwnProperty(n)}class Fu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?jh:Hu:s?zu:Bu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Le(e);if(!r){let l;if(o&&(l=Oh[t]))return l;if(t==="hasOwnProperty")return Hh}const a=Reflect.get(e,t,Rt(e)?e:i);if((An(t)?Nu.has(t):zh(t))||(r||Ct(e,"get",t),s))return a;if(Rt(a)){const l=o&&zo(t)?a:a.value;return r&&je(l)?go(l):l}return je(a)?r?go(a):qo(a):a}}class Ou extends Fu{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Le(e)&&zo(t);if(!this._isShallow){const u=Xn(s);if(!en(i)&&!Xn(i)&&(s=Ye(s),i=Ye(i)),!o&&Rt(s)&&!Rt(i))return u||(s.value=i),!0}const a=o?Number(t)<e.length:Ke(e,t),l=Reflect.set(e,t,i,Rt(e)?e:r);return e===Ye(r)&&(a?En(i,s)&&Bn(e,"set",t,i):Bn(e,"add",t,i)),l}deleteProperty(e,t){const i=Ke(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Bn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!An(t)||!Nu.has(t))&&Ct(e,"has",t),i}ownKeys(e){return Ct(e,"iterate",Le(e)?"length":Li),Reflect.ownKeys(e)}}class Gh extends Fu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Vh=new Ou,kh=new Gh,Wh=new Ou(!0);const mo=n=>n,os=n=>Reflect.getPrototypeOf(n);function Xh(n,e,t){return function(...i){const r=this.__v_raw,s=Ye(r),o=or(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=r[n](...i),c=t?mo:e?dr:fn;return!e&&Ct(s,"iterate",l?po:Li),vt(Object.create(u),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[c(f[0]),c(f[1])]:c(f),done:h}}})}}function ls(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function qh(n,e){const t={get(r){const s=this.__v_raw,o=Ye(s),a=Ye(r);n||(En(r,a)&&Ct(o,"get",r),Ct(o,"get",a));const{has:l}=os(o),u=e?mo:n?dr:fn;if(l.call(o,r))return u(s.get(r));if(l.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Ct(Ye(r),"iterate",Li),r.size},has(r){const s=this.__v_raw,o=Ye(s),a=Ye(r);return n||(En(r,a)&&Ct(o,"has",r),Ct(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Ye(a),u=e?mo:n?dr:fn;return!n&&Ct(l,"iterate",Li),a.forEach((c,f)=>r.call(s,u(c),u(f),o))}};return vt(t,n?{add:ls("add"),set:ls("set"),delete:ls("delete"),clear:ls("clear")}:{add(r){const s=Ye(this),o=os(s),a=Ye(r),l=!e&&!en(r)&&!Xn(r)?a:r;return o.has.call(s,l)||En(r,l)&&o.has.call(s,r)||En(a,l)&&o.has.call(s,a)||(s.add(l),Bn(s,"add",l,l)),this},set(r,s){!e&&!en(s)&&!Xn(s)&&(s=Ye(s));const o=Ye(this),{has:a,get:l}=os(o);let u=a.call(o,r);u||(r=Ye(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,s),u?En(s,c)&&Bn(o,"set",r,s):Bn(o,"add",r,s),this},delete(r){const s=Ye(this),{has:o,get:a}=os(s);let l=o.call(s,r);l||(r=Ye(r),l=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return l&&Bn(s,"delete",r,void 0),u},clear(){const r=Ye(this),s=r.size!==0,o=r.clear();return s&&Bn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Xh(r,n,e)}),t}function Xo(n,e){const t=qh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ke(t,r)&&r in i?t:i,r,s)}const $h={get:Xo(!1,!1)},Yh={get:Xo(!1,!0)},Kh={get:Xo(!0,!1)};const Bu=new WeakMap,zu=new WeakMap,Hu=new WeakMap,jh=new WeakMap;function Zh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jh(n){return n.__v_skip||!Object.isExtensible(n)?0:Zh(Mh(n))}function qo(n){return Xn(n)?n:$o(n,!1,Vh,$h,Bu)}function Qh(n){return $o(n,!1,Wh,Yh,zu)}function go(n){return $o(n,!0,kh,Kh,Hu)}function $o(n,e,t,i,r){if(!je(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Jh(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function Di(n){return Xn(n)?Di(n.__v_raw):!!(n&&n.__v_isReactive)}function Xn(n){return!!(n&&n.__v_isReadonly)}function en(n){return!!(n&&n.__v_isShallow)}function Yo(n){return n?!!n.__v_raw:!1}function Ye(n){const e=n&&n.__v_raw;return e?Ye(e):n}function ed(n){return!Ke(n,"__v_skip")&&Object.isExtensible(n)&&yu(n,"__v_skip",!0),n}const fn=n=>je(n)?qo(n):n,dr=n=>je(n)?go(n):n;function Rt(n){return n?n.__v_isRef===!0:!1}function wt(n){return td(n,!1)}function td(n,e){return Rt(n)?n:new nd(n,e)}class nd{constructor(e,t){this.dep=new Wo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ye(e),this._value=t?e:fn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||en(e)||Xn(e);e=i?e:Ye(e),En(e,t)&&(this._rawValue=e,this._value=i?e:fn(e),this.dep.trigger())}}function Gu(n){return Rt(n)?n.value:n}const id={get:(n,e,t)=>e==="__v_raw"?n:Gu(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Rt(r)&&!Rt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Vu(n){return Di(n)?n:new Proxy(n,id)}class rd{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Wo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Vr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&it!==this)return Ru(this,!0),!0}get value(){const e=this.dep.track();return Du(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function sd(n,e,t=!1){let i,r;return Fe(n)?i=n:(i=n.get,r=n.set),new rd(i,r,t)}const cs={},Os=new WeakMap;let Ti;function ad(n,e=!1,t=Ti){if(t){let i=Os.get(t);i||Os.set(t,i=[]),i.push(n)}}function od(n,e,t=Qe){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,u=E=>r?E:en(E)||r===!1||r===0?zn(E,1):zn(E);let c,f,h,m,v=!1,M=!1;if(Rt(n)?(f=()=>n.value,v=en(n)):Di(n)?(f=()=>u(n),v=!0):Le(n)?(M=!0,v=n.some(E=>Di(E)||en(E)),f=()=>n.map(E=>{if(Rt(E))return E.value;if(Di(E))return u(E);if(Fe(E))return l?l(E,2):E()})):Fe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){kn();try{h()}finally{Wn()}}const E=Ti;Ti=c;try{return l?l(n,3,[m]):n(m)}finally{Ti=E}}:f=ln,e&&r){const E=f,w=r===!0?1/0:r;f=()=>zn(E(),w)}const p=Uh(),d=()=>{c.stop(),p&&p.active&&Bo(p.effects,c)};if(s&&e){const E=e;e=(...w)=>{E(...w),d()}}let b=M?new Array(n.length).fill(cs):cs;const y=E=>{if(!(!(c.flags&1)||!c.dirty&&!E))if(e){const w=c.run();if(r||v||(M?w.some((R,C)=>En(R,b[C])):En(w,b))){h&&h();const R=Ti;Ti=c;try{const C=[w,b===cs?void 0:M&&b[0]===cs?[]:b,m];b=w,l?l(e,3,C):e(...C)}finally{Ti=R}}}else c.run()};return a&&a(y),c=new wu(f),c.scheduler=o?()=>o(y,!1):y,m=E=>ad(E,!1,c),h=c.onStop=()=>{const E=Os.get(c);if(E){if(l)l(E,4);else for(const w of E)w();Os.delete(c)}},e?i?y(!0):b=c.run():o?o(y.bind(null,!0),!0):c.run(),d.pause=c.pause.bind(c),d.resume=c.resume.bind(c),d.stop=d,d}function zn(n,e=1/0,t){if(e<=0||!je(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Rt(n))zn(n.value,e,t);else if(Le(n))for(let i=0;i<n.length;i++)zn(n[i],e,t);else if(vu(n)||or(n))n.forEach(i=>{zn(i,e,t)});else if(Su(n)){for(const i in n)zn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&zn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zr(n,e,t,i){try{return i?n(...i):n()}catch(r){sa(r,e,t)}}function hn(n,e,t,i){if(Fe(n)){const r=Zr(n,e,t,i);return r&&xu(r)&&r.catch(s=>{sa(s,e,t)}),r}if(Le(n)){const r=[];for(let s=0;s<n.length;s++)r.push(hn(n[s],e,t,i));return r}}function sa(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Qe;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}a=a.parent}if(s){kn(),Zr(s,null,10,[n,l,u]),Wn();return}}ld(n,t,r,i,o)}function ld(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Ut=[];let gn=-1;const cr=[];let ni=null,ir=0;const ku=Promise.resolve();let Bs=null;function Ds(n){const e=Bs||ku;return n?e.then(this?n.bind(this):n):e}function cd(n){let e=gn+1,t=Ut.length;for(;e<t;){const i=e+t>>>1,r=Ut[i],s=Wr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Ko(n){if(!(n.flags&1)){const e=Wr(n),t=Ut[Ut.length-1];!t||!(n.flags&2)&&e>=Wr(t)?Ut.push(n):Ut.splice(cd(e),0,n),n.flags|=1,Wu()}}function Wu(){Bs||(Bs=ku.then($u))}function Xu(n){Le(n)?cr.push(...n):ni&&n.id===-1?ni.splice(ir+1,0,n):n.flags&1||(cr.push(n),n.flags|=1),Wu()}function _l(n,e,t=gn+1){for(;t<Ut.length;t++){const i=Ut[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ut.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function qu(n){if(cr.length){const e=[...new Set(cr)].sort((t,i)=>Wr(t)-Wr(i));if(cr.length=0,ni){ni.push(...e);return}for(ni=e,ir=0;ir<ni.length;ir++){const t=ni[ir];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ni=null,ir=0}}const Wr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function $u(n){try{for(gn=0;gn<Ut.length;gn++){const e=Ut[gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Zr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;gn<Ut.length;gn++){const e=Ut[gn];e&&(e.flags&=-2)}gn=-1,Ut.length=0,qu(),Bs=null,(Ut.length||cr.length)&&$u()}}let Qt=null,Yu=null;function zs(n){const e=Qt;return Qt=n,Yu=n&&n.type.__scopeId||null,e}function Ku(n,e=Qt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&ks(-1);const s=zs(e);let o;try{o=n(...r)}finally{zs(s),i._d&&ks(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ud(n,e){if(Qt===null)return n;const t=fa(Qt),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=Qe]=e[r];s&&(Fe(s)&&(s={mounted:s,updated:s}),s.deep&&zn(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function pi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(kn(),hn(l,t,8,[n.el,a,n,e]),Wn())}}function fd(n,e){if(Ot){let t=Ot.provides;const i=Ot.parent&&Ot.parent.provides;i===t&&(t=Ot.provides=Object.create(i)),t[n]=e}}function Is(n,e,t=!1){const i=tl();if(i||ur){let r=ur?ur._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Fe(e)?e.call(i&&i.proxy):e}}const hd=Symbol.for("v-scx"),dd=()=>Is(hd);function Fr(n,e,t){return ju(n,e,t)}function ju(n,e,t=Qe){const{immediate:i,deep:r,flush:s,once:o}=t,a=vt({},t),l=e&&i||!e&&s!=="post";let u;if($r){if(s==="sync"){const m=dd();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=ln,m.resume=ln,m.pause=ln,m}}const c=Ot;a.call=(m,v,M)=>hn(m,c,v,M);let f=!1;s==="post"?a.scheduler=m=>{Ht(m,c&&c.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(m,v)=>{v?m():Ko(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const h=od(n,e,a);return $r&&(u?u.push(h):l&&h()),h}function pd(n,e,t){const i=this.proxy,r=lt(n)?n.includes(".")?Zu(i,n):()=>i[n]:n.bind(i,i);let s;Fe(e)?s=e:(s=e.handler,t=e);const o=Jr(this),a=ju(r,s.bind(i),t);return o(),a}function Zu(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const md=Symbol("_vte"),Ju=n=>n.__isTeleport,_n=Symbol("_leaveCb"),Er=Symbol("_enterCb");function gd(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return la(()=>{n.isMounted=!0}),lf(()=>{n.isUnmounting=!0}),n}const Zt=[Function,Array],Qu={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Zt,onEnter:Zt,onAfterEnter:Zt,onEnterCancelled:Zt,onBeforeLeave:Zt,onLeave:Zt,onAfterLeave:Zt,onLeaveCancelled:Zt,onBeforeAppear:Zt,onAppear:Zt,onAfterAppear:Zt,onAppearCancelled:Zt},ef=n=>{const e=n.subTree;return e.component?ef(e.component):e},_d={name:"BaseTransition",props:Qu,setup(n,{slots:e}){const t=tl(),i=gd();return()=>{const r=e.default&&rf(e.default(),!0),s=r&&r.length?tf(r):t.subTree?Qo():void 0;if(!s)return;const o=Ye(n),{mode:a}=o;if(i.isLeaving)return Aa(s);const l=vl(s);if(!l)return Aa(s);let u=_o(l,o,i,t,f=>u=f);l.type!==Ft&&Xr(l,u);let c=t.subTree&&vl(t.subTree);if(c&&c.type!==Ft&&!wi(c,l)&&ef(t).type!==Ft){let f=_o(c,o,i,t);if(Xr(c,f),a==="out-in"&&l.type!==Ft)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,c=void 0},Aa(s);a==="in-out"&&l.type!==Ft?f.delayLeave=(h,m,v)=>{const M=nf(i,c);M[String(c.key)]=c,h[_n]=()=>{m(),h[_n]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{v(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function tf(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Ft){e=t;break}}return e}const vd=_d;function nf(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function _o(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:h,onLeave:m,onAfterLeave:v,onLeaveCancelled:M,onBeforeAppear:p,onAppear:d,onAfterAppear:b,onAppearCancelled:y}=e,E=String(n.key),w=nf(t,n),R=(F,x)=>{F&&hn(F,i,9,x)},C=(F,x)=>{const A=x[1];R(F,x),Le(F)?F.every(z=>z.length<=1)&&A():F.length<=1&&A()},U={mode:o,persisted:a,beforeEnter(F){let x=l;if(!t.isMounted)if(s)x=p||l;else return;F[_n]&&F[_n](!0);const A=w[E];A&&wi(n,A)&&A.el[_n]&&A.el[_n](),R(x,[F])},enter(F){if(w[E]===n)return;let x=u,A=c,z=f;if(!t.isMounted)if(s)x=d||u,A=b||c,z=y||f;else return;let te=!1;F[Er]=ee=>{te||(te=!0,ee?R(z,[F]):R(A,[F]),U.delayedLeave&&U.delayedLeave(),F[Er]=void 0)};const L=F[Er].bind(null,!1);x?C(x,[F,L]):L()},leave(F,x){const A=String(n.key);if(F[Er]&&F[Er](!0),t.isUnmounting)return x();R(h,[F]);let z=!1;F[_n]=L=>{z||(z=!0,x(),L?R(M,[F]):R(v,[F]),F[_n]=void 0,w[A]===n&&delete w[A])};const te=F[_n].bind(null,!1);w[A]=n,m?C(m,[F,te]):te()},clone(F){const x=_o(F,e,t,i,r);return r&&r(x),x}};return U}function Aa(n){if(aa(n))return n=ci(n),n.children=null,n}function vl(n){if(!aa(n))return Ju(n.type)&&n.children?tf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Fe(t.default))return t.default()}}function Xr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Xr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function rf(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Nt?(o.patchFlag&128&&r++,i=i.concat(rf(o.children,e,a))):(e||o.type!==Ft)&&i.push(a!=null?ci(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function sf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function xl(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Hs=new WeakMap;function Or(n,e,t,i,r=!1){if(Le(n)){n.forEach((M,p)=>Or(M,e&&(Le(e)?e[p]:e),t,i,r));return}if(Br(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Or(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?fa(i.component):i.el,o=r?null:s,{i:a,r:l}=n,u=e&&e.r,c=a.refs===Qe?a.refs={}:a.refs,f=a.setupState,h=Ye(f),m=f===Qe?_u:M=>xl(c,M)?!1:Ke(h,M),v=(M,p)=>!(p&&xl(c,p));if(u!=null&&u!==l){if(Ml(e),lt(u))c[u]=null,m(u)&&(f[u]=null);else if(Rt(u)){const M=e;v(u,M.k)&&(u.value=null),M.k&&(c[M.k]=null)}}if(Fe(l))Zr(l,a,12,[o,c]);else{const M=lt(l),p=Rt(l);if(M||p){const d=()=>{if(n.f){const b=M?m(l)?f[l]:c[l]:v()||!n.k?l.value:c[n.k];if(r)Le(b)&&Bo(b,s);else if(Le(b))b.includes(s)||b.push(s);else if(M)c[l]=[s],m(l)&&(f[l]=c[l]);else{const y=[s];v(l,n.k)&&(l.value=y),n.k&&(c[n.k]=y)}}else M?(c[l]=o,m(l)&&(f[l]=o)):p&&(v(l,n.k)&&(l.value=o),n.k&&(c[n.k]=o))};if(o){const b=()=>{d(),Hs.delete(n)};b.id=-1,Hs.set(n,b),Ht(b,t)}else Ml(n),d()}}}function Ml(n){const e=Hs.get(n);e&&(e.flags|=8,Hs.delete(n))}ia().requestIdleCallback;ia().cancelIdleCallback;const Br=n=>!!n.type.__asyncLoader,aa=n=>n.type.__isKeepAlive;function xd(n,e){af(n,"a",e)}function Md(n,e){af(n,"da",e)}function af(n,e,t=Ot){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(oa(e,i,t),t){let r=t.parent;for(;r&&r.parent;)aa(r.parent.vnode)&&Sd(i,e,t,r),r=r.parent}}function Sd(n,e,t,i){const r=oa(e,n,i,!0);jo(()=>{Bo(i[e],r)},t)}function oa(n,e,t=Ot,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{kn();const a=Jr(t),l=hn(e,t,n,o);return a(),Wn(),l});return i?r.unshift(s):r.push(s),s}}const Yn=n=>(e,t=Ot)=>{(!$r||n==="sp")&&oa(n,(...i)=>e(...i),t)},Ed=Yn("bm"),la=Yn("m"),of=Yn("bu"),yd=Yn("u"),lf=Yn("bum"),jo=Yn("um"),Td=Yn("sp"),bd=Yn("rtg"),Ad=Yn("rtc");function wd(n,e=Ot){oa("ec",n,e)}const Cd=Symbol.for("v-ndc");function Gs(n,e,t,i){let r;const s=t,o=Le(n);if(o||lt(n)){const a=o&&Di(n);let l=!1,u=!1;a&&(l=!en(n),u=Xn(n),n=ra(n)),r=new Array(n.length);for(let c=0,f=n.length;c<f;c++)r[c]=e(l?u?dr(fn(n[c])):fn(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(je(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=e(n[c],c,l,s)}}else r=[];return r}const vo=n=>n?Rf(n)?fa(n):vo(n.parent):null,zr=vt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>vo(n.parent),$root:n=>vo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>uf(n),$forceUpdate:n=>n.f||(n.f=()=>{Ko(n.update)}),$nextTick:n=>n.n||(n.n=Ds.bind(n.proxy)),$watch:n=>pd.bind(n)}),wa=(n,e)=>n!==Qe&&!n.__isScriptSetup&&Ke(n,e),Rd={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(wa(i,e))return o[e]=1,i[e];if(r!==Qe&&Ke(r,e))return o[e]=2,r[e];if(Ke(s,e))return o[e]=3,s[e];if(t!==Qe&&Ke(t,e))return o[e]=4,t[e];xo&&(o[e]=0)}}const u=zr[e];let c,f;if(u)return e==="$attrs"&&Ct(n.attrs,"get",""),u(n);if((c=a.__cssModules)&&(c=c[e]))return c;if(t!==Qe&&Ke(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Ke(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return wa(r,e)?(r[e]=t,!0):i!==Qe&&Ke(i,e)?(i[e]=t,!0):Ke(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==Qe&&a[0]!=="$"&&Ke(n,a)||wa(e,a)||Ke(s,a)||Ke(i,a)||Ke(zr,a)||Ke(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ke(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Sl(n){return Le(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let xo=!0;function Pd(n){const e=uf(n),t=n.proxy,i=n.ctx;xo=!1,e.beforeCreate&&El(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:m,updated:v,activated:M,deactivated:p,beforeDestroy:d,beforeUnmount:b,destroyed:y,unmounted:E,render:w,renderTracked:R,renderTriggered:C,errorCaptured:U,serverPrefetch:F,expose:x,inheritAttrs:A,components:z,directives:te,filters:L}=e;if(u&&Ld(u,i,null),o)for(const Q in o){const G=o[Q];Fe(G)&&(i[Q]=G.bind(t))}if(r){const Q=r.call(t,t);je(Q)&&(n.data=qo(Q))}if(xo=!0,s)for(const Q in s){const G=s[Q],re=Fe(G)?G.bind(t,t):Fe(G.get)?G.get.bind(t,t):ln,ae=!Fe(G)&&Fe(G.set)?G.set.bind(t):ln,fe=Ii({get:re,set:ae});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>fe.value,set:_e=>fe.value=_e})}if(a)for(const Q in a)cf(a[Q],i,t,Q);if(l){const Q=Fe(l)?l.call(t):l;Reflect.ownKeys(Q).forEach(G=>{fd(G,Q[G])})}c&&El(c,n,"c");function W(Q,G){Le(G)?G.forEach(re=>Q(re.bind(t))):G&&Q(G.bind(t))}if(W(Ed,f),W(la,h),W(of,m),W(yd,v),W(xd,M),W(Md,p),W(wd,U),W(Ad,R),W(bd,C),W(lf,b),W(jo,E),W(Td,F),Le(x))if(x.length){const Q=n.exposed||(n.exposed={});x.forEach(G=>{Object.defineProperty(Q,G,{get:()=>t[G],set:re=>t[G]=re,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===ln&&(n.render=w),A!=null&&(n.inheritAttrs=A),z&&(n.components=z),te&&(n.directives=te),F&&sf(n)}function Ld(n,e,t=ln){Le(n)&&(n=Mo(n));for(const i in n){const r=n[i];let s;je(r)?"default"in r?s=Is(r.from||i,r.default,!0):s=Is(r.from||i):s=Is(r),Rt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function El(n,e,t){hn(Le(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function cf(n,e,t,i){let r=i.includes(".")?Zu(t,i):()=>t[i];if(lt(n)){const s=e[n];Fe(s)&&Fr(r,s)}else if(Fe(n))Fr(r,n.bind(t));else if(je(n))if(Le(n))n.forEach(s=>cf(s,e,t,i));else{const s=Fe(n.handler)?n.handler.bind(t):e[n.handler];Fe(s)&&Fr(r,s,n)}}function uf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(u=>Vs(l,u,o,!0)),Vs(l,e,o)),je(e)&&s.set(e,l),l}function Vs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Vs(n,s,t,!0),r&&r.forEach(o=>Vs(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Dd[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Dd={data:yl,props:Tl,emits:Tl,methods:Lr,computed:Lr,beforeCreate:Lt,created:Lt,beforeMount:Lt,mounted:Lt,beforeUpdate:Lt,updated:Lt,beforeDestroy:Lt,beforeUnmount:Lt,destroyed:Lt,unmounted:Lt,activated:Lt,deactivated:Lt,errorCaptured:Lt,serverPrefetch:Lt,components:Lr,directives:Lr,watch:Ud,provide:yl,inject:Id};function yl(n,e){return e?n?function(){return vt(Fe(n)?n.call(this,this):n,Fe(e)?e.call(this,this):e)}:e:n}function Id(n,e){return Lr(Mo(n),Mo(e))}function Mo(n){if(Le(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Lt(n,e){return n?[...new Set([].concat(n,e))]:e}function Lr(n,e){return n?vt(Object.create(null),n,e):e}function Tl(n,e){return n?Le(n)&&Le(e)?[...new Set([...n,...e])]:vt(Object.create(null),Sl(n),Sl(e??{})):e}function Ud(n,e){if(!n)return e;if(!e)return n;const t=vt(Object.create(null),n);for(const i in e)t[i]=Lt(n[i],e[i]);return t}function ff(){return{app:null,config:{isNativeTag:_u,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nd=0;function Fd(n,e){return function(i,r=null){Fe(i)||(i=vt({},i)),r!=null&&!je(r)&&(r=null);const s=ff(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:Nd++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:pp,get config(){return s.config},set config(c){},use(c,...f){return o.has(c)||(c&&Fe(c.install)?(o.add(c),c.install(u,...f)):Fe(c)&&(o.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,h){if(!l){const m=u._ceVNode||_t(i,r);return m.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(m,c,h),l=!0,u._container=c,c.__vue_app__=u,fa(m.component)}},onUnmount(c){a.push(c)},unmount(){l&&(hn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=ur;ur=u;try{return c()}finally{ur=f}}};return u}}let ur=null;const Od=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${cn(e)}Modifiers`]||n[`${Bi(e)}Modifiers`];function Bd(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Qe;let r=t;const s=e.startsWith("update:"),o=s&&Od(i,e.slice(7));o&&(o.trim&&(r=t.map(c=>lt(c)?c.trim():c)),o.number&&(r=t.map(yh)));let a,l=i[a=Ma(e)]||i[a=Ma(cn(e))];!l&&s&&(l=i[a=Ma(Bi(e))]),l&&hn(l,n,6,r);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,hn(u,n,6,r)}}const zd=new WeakMap;function hf(n,e,t=!1){const i=t?zd:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Fe(n)){const l=u=>{const c=hf(u,e,!0);c&&(a=!0,vt(o,c))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(je(n)&&i.set(n,null),null):(Le(s)?s.forEach(l=>o[l]=null):vt(o,s),je(n)&&i.set(n,o),o)}function ca(n,e){return!n||!ea(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ke(n,e[0].toLowerCase()+e.slice(1))||Ke(n,Bi(e))||Ke(n,e))}function bl(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:h,setupState:m,ctx:v,inheritAttrs:M}=n,p=zs(n);let d,b;try{if(t.shapeFlag&4){const E=r||i,w=E;d=Mn(u.call(w,E,c,f,m,h,v)),b=a}else{const E=e;d=Mn(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),b=e.props?a:Hd(a)}}catch(E){Gr.length=0,sa(E,n,1),d=_t(Ft)}let y=d;if(b&&M!==!1){const E=Object.keys(b),{shapeFlag:w}=y;E.length&&w&7&&(s&&E.some(ta)&&(b=Gd(b,s)),y=ci(y,b,!1,!0))}return t.dirs&&(y=ci(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&Xr(y,t.transition),d=y,zs(p),d}const Hd=n=>{let e;for(const t in n)(t==="class"||t==="style"||ea(t))&&((e||(e={}))[t]=n[t]);return e},Gd=(n,e)=>{const t={};for(const i in n)(!ta(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Vd(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Al(i,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(df(o,i,h)&&!ca(u,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Al(i,o,u):!0:!!o;return!1}function Al(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(df(e,n,s)&&!ca(t,s))return!0}return!1}function df(n,e,t){const i=n[t],r=e[t];return t==="style"&&je(i)&&je(r)?!Ho(i,r):i!==r}function kd({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const pf={},mf=()=>Object.create(pf),gf=n=>Object.getPrototypeOf(n)===pf;function Wd(n,e,t,i=!1){const r={},s=mf();n.propsDefaults=Object.create(null),_f(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Qh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Xd(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Ye(r),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(ca(n.emitsOptions,h))continue;const m=e[h];if(l)if(Ke(s,h))m!==s[h]&&(s[h]=m,u=!0);else{const v=cn(h);r[v]=So(l,a,v,m,n,!1)}else m!==s[h]&&(s[h]=m,u=!0)}}}else{_f(n,e,r,s)&&(u=!0);let c;for(const f in a)(!e||!Ke(e,f)&&((c=Bi(f))===f||!Ke(e,c)))&&(l?t&&(t[f]!==void 0||t[c]!==void 0)&&(r[f]=So(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ke(e,f))&&(delete s[f],u=!0)}u&&Bn(n.attrs,"set","")}function _f(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ir(l))continue;const u=e[l];let c;r&&Ke(r,c=cn(l))?!s||!s.includes(c)?t[c]=u:(a||(a={}))[c]=u:ca(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=Ye(t),u=a||Qe;for(let c=0;c<s.length;c++){const f=s[c];t[f]=So(r,l,f,u[f],n,!Ke(u,f))}}return o}function So(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Ke(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Fe(l)){const{propsDefaults:u}=r;if(t in u)i=u[t];else{const c=Jr(r);i=u[t]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Bi(t))&&(i=!0))}return i}const qd=new WeakMap;function vf(n,e,t=!1){const i=t?qd:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Fe(n)){const c=f=>{l=!0;const[h,m]=vf(f,e,!0);vt(o,h),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!s&&!l)return je(n)&&i.set(n,ar),ar;if(Le(s))for(let c=0;c<s.length;c++){const f=cn(s[c]);wl(f)&&(o[f]=Qe)}else if(s)for(const c in s){const f=cn(c);if(wl(f)){const h=s[c],m=o[f]=Le(h)||Fe(h)?{type:h}:vt({},h),v=m.type;let M=!1,p=!0;if(Le(v))for(let d=0;d<v.length;++d){const b=v[d],y=Fe(b)&&b.name;if(y==="Boolean"){M=!0;break}else y==="String"&&(p=!1)}else M=Fe(v)&&v.name==="Boolean";m[0]=M,m[1]=p,(M||Ke(m,"default"))&&a.push(f)}}const u=[o,a];return je(n)&&i.set(n,u),u}function wl(n){return n[0]!=="$"&&!Ir(n)}const Zo=n=>n==="_"||n==="_ctx"||n==="$stable",Jo=n=>Le(n)?n.map(Mn):[Mn(n)],$d=(n,e,t)=>{if(e._n)return e;const i=Ku((...r)=>Jo(e(...r)),t);return i._c=!1,i},xf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Zo(r))continue;const s=n[r];if(Fe(s))e[r]=$d(r,s,i);else if(s!=null){const o=Jo(s);e[r]=()=>o}}},Mf=(n,e)=>{const t=Jo(e);n.slots.default=()=>t},Sf=(n,e,t)=>{for(const i in e)(t||!Zo(i))&&(n[i]=e[i])},Yd=(n,e,t)=>{const i=n.slots=mf();if(n.vnode.shapeFlag&32){const r=e._;r?(Sf(i,e,t),t&&yu(i,"_",r,!0)):xf(e,i)}else e&&Mf(n,e)},Kd=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Qe;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Sf(r,e,t):(s=!e.$stable,xf(e,r)),o=e}else e&&(Mf(n,e),o={default:1});if(s)for(const a in r)!Zo(a)&&o[a]==null&&delete r[a]},Ht=ep;function jd(n){return Zd(n)}function Zd(n,e){const t=ia();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:m=ln,insertStaticContent:v}=n,M=(_,P,N,K=null,H=null,j=null,ie=void 0,ne=null,se=!!P.dynamicChildren)=>{if(_===P)return;_&&!wi(_,P)&&(K=Re(_),_e(_,H,j,!0),_=null),P.patchFlag===-2&&(se=!1,P.dynamicChildren=null);const{type:S,ref:g,shapeFlag:D}=P;switch(S){case ua:p(_,P,N,K);break;case Ft:d(_,P,N,K);break;case Hr:_==null&&b(P,N,K,ie);break;case Nt:z(_,P,N,K,H,j,ie,ne,se);break;default:D&1?w(_,P,N,K,H,j,ie,ne,se):D&6?te(_,P,N,K,H,j,ie,ne,se):(D&64||D&128)&&S.process(_,P,N,K,H,j,ie,ne,se,qe)}g!=null&&H?Or(g,_&&_.ref,j,P||_,!P):g==null&&_&&_.ref!=null&&Or(_.ref,null,j,_,!0)},p=(_,P,N,K)=>{if(_==null)i(P.el=a(P.children),N,K);else{const H=P.el=_.el;P.children!==_.children&&u(H,P.children)}},d=(_,P,N,K)=>{_==null?i(P.el=l(P.children||""),N,K):P.el=_.el},b=(_,P,N,K)=>{[_.el,_.anchor]=v(_.children,P,N,K,_.el,_.anchor)},y=({el:_,anchor:P},N,K)=>{let H;for(;_&&_!==P;)H=h(_),i(_,N,K),_=H;i(P,N,K)},E=({el:_,anchor:P})=>{let N;for(;_&&_!==P;)N=h(_),r(_),_=N;r(P)},w=(_,P,N,K,H,j,ie,ne,se)=>{if(P.type==="svg"?ie="svg":P.type==="math"&&(ie="mathml"),_==null)R(P,N,K,H,j,ie,ne,se);else{const S=_.el&&_.el._isVueCE?_.el:null;try{S&&S._beginPatch(),F(_,P,H,j,ie,ne,se)}finally{S&&S._endPatch()}}},R=(_,P,N,K,H,j,ie,ne)=>{let se,S;const{props:g,shapeFlag:D,transition:O,dirs:$}=_;if(se=_.el=o(_.type,j,g&&g.is,g),D&8?c(se,_.children):D&16&&U(_.children,se,null,K,H,Ca(_,j),ie,ne),$&&pi(_,null,K,"created"),C(se,_,_.scopeId,ie,K),g){for(const Me in g)Me!=="value"&&!Ir(Me)&&s(se,Me,null,g[Me],j,K);"value"in g&&s(se,"value",null,g.value,j),(S=g.onVnodeBeforeMount)&&mn(S,K,_)}$&&pi(_,null,K,"beforeMount");const J=Jd(H,O);J&&O.beforeEnter(se),i(se,P,N),((S=g&&g.onVnodeMounted)||J||$)&&Ht(()=>{try{S&&mn(S,K,_),J&&O.enter(se),$&&pi(_,null,K,"mounted")}finally{}},H)},C=(_,P,N,K,H)=>{if(N&&m(_,N),K)for(let j=0;j<K.length;j++)m(_,K[j]);if(H){let j=H.subTree;if(P===j||bf(j.type)&&(j.ssContent===P||j.ssFallback===P)){const ie=H.vnode;C(_,ie,ie.scopeId,ie.slotScopeIds,H.parent)}}},U=(_,P,N,K,H,j,ie,ne,se=0)=>{for(let S=se;S<_.length;S++){const g=_[S]=ne?On(_[S]):Mn(_[S]);M(null,g,P,N,K,H,j,ie,ne)}},F=(_,P,N,K,H,j,ie)=>{const ne=P.el=_.el;let{patchFlag:se,dynamicChildren:S,dirs:g}=P;se|=_.patchFlag&16;const D=_.props||Qe,O=P.props||Qe;let $;if(N&&mi(N,!1),($=O.onVnodeBeforeUpdate)&&mn($,N,P,_),g&&pi(P,_,N,"beforeUpdate"),N&&mi(N,!0),(D.innerHTML&&O.innerHTML==null||D.textContent&&O.textContent==null)&&c(ne,""),S?x(_.dynamicChildren,S,ne,N,K,Ca(P,H),j):ie||G(_,P,ne,null,N,K,Ca(P,H),j,!1),se>0){if(se&16)A(ne,D,O,N,H);else if(se&2&&D.class!==O.class&&s(ne,"class",null,O.class,H),se&4&&s(ne,"style",D.style,O.style,H),se&8){const J=P.dynamicProps;for(let Me=0;Me<J.length;Me++){const me=J[Me],oe=D[me],ue=O[me];(ue!==oe||me==="value")&&s(ne,me,oe,ue,H,N)}}se&1&&_.children!==P.children&&c(ne,P.children)}else!ie&&S==null&&A(ne,D,O,N,H);(($=O.onVnodeUpdated)||g)&&Ht(()=>{$&&mn($,N,P,_),g&&pi(P,_,N,"updated")},K)},x=(_,P,N,K,H,j,ie)=>{for(let ne=0;ne<P.length;ne++){const se=_[ne],S=P[ne],g=se.el&&(se.type===Nt||!wi(se,S)||se.shapeFlag&198)?f(se.el):N;M(se,S,g,null,K,H,j,ie,!0)}},A=(_,P,N,K,H)=>{if(P!==N){if(P!==Qe)for(const j in P)!Ir(j)&&!(j in N)&&s(_,j,P[j],null,H,K);for(const j in N){if(Ir(j))continue;const ie=N[j],ne=P[j];ie!==ne&&j!=="value"&&s(_,j,ne,ie,H,K)}"value"in N&&s(_,"value",P.value,N.value,H)}},z=(_,P,N,K,H,j,ie,ne,se)=>{const S=P.el=_?_.el:a(""),g=P.anchor=_?_.anchor:a("");let{patchFlag:D,dynamicChildren:O,slotScopeIds:$}=P;$&&(ne=ne?ne.concat($):$),_==null?(i(S,N,K),i(g,N,K),U(P.children||[],N,g,H,j,ie,ne,se)):D>0&&D&64&&O&&_.dynamicChildren&&_.dynamicChildren.length===O.length?(x(_.dynamicChildren,O,N,H,j,ie,ne),(P.key!=null||H&&P===H.subTree)&&Ef(_,P,!0)):G(_,P,N,g,H,j,ie,ne,se)},te=(_,P,N,K,H,j,ie,ne,se)=>{P.slotScopeIds=ne,_==null?P.shapeFlag&512?H.ctx.activate(P,N,K,ie,se):L(P,N,K,H,j,ie,se):ee(_,P,se)},L=(_,P,N,K,H,j,ie)=>{const ne=_.component=op(_,K,H);if(aa(_)&&(ne.ctx.renderer=qe),lp(ne,!1,ie),ne.asyncDep){if(H&&H.registerDep(ne,W,ie),!_.el){const se=ne.subTree=_t(Ft);d(null,se,P,N),_.placeholder=se.el}}else W(ne,_,P,N,H,j,ie)},ee=(_,P,N)=>{const K=P.component=_.component;if(Vd(_,P,N))if(K.asyncDep&&!K.asyncResolved){Q(K,P,N);return}else K.next=P,K.update();else P.el=_.el,K.vnode=P},W=(_,P,N,K,H,j,ie)=>{const ne=()=>{if(_.isMounted){let{next:D,bu:O,u:$,parent:J,vnode:Me}=_;{const le=yf(_);if(le){D&&(D.el=Me.el,Q(_,D,ie)),le.asyncDep.then(()=>{Ht(()=>{_.isUnmounted||S()},H)});return}}let me=D,oe;mi(_,!1),D?(D.el=Me.el,Q(_,D,ie)):D=Me,O&&Sa(O),(oe=D.props&&D.props.onVnodeBeforeUpdate)&&mn(oe,J,D,Me),mi(_,!0);const ue=bl(_),Ce=_.subTree;_.subTree=ue,M(Ce,ue,f(Ce.el),Re(Ce),_,H,j),D.el=ue.el,me===null&&kd(_,ue.el),$&&Ht($,H),(oe=D.props&&D.props.onVnodeUpdated)&&Ht(()=>mn(oe,J,D,Me),H)}else{let D;const{el:O,props:$}=P,{bm:J,m:Me,parent:me,root:oe,type:ue}=_,Ce=Br(P);mi(_,!1),J&&Sa(J),!Ce&&(D=$&&$.onVnodeBeforeMount)&&mn(D,me,P),mi(_,!0);{oe.ce&&oe.ce._hasShadowRoot()&&oe.ce._injectChildStyle(ue,_.parent?_.parent.type:void 0);const le=_.subTree=bl(_);M(null,le,N,K,_,H,j),P.el=le.el}if(Me&&Ht(Me,H),!Ce&&(D=$&&$.onVnodeMounted)){const le=P;Ht(()=>mn(D,me,le),H)}(P.shapeFlag&256||me&&Br(me.vnode)&&me.vnode.shapeFlag&256)&&_.a&&Ht(_.a,H),_.isMounted=!0,P=N=K=null}};_.scope.on();const se=_.effect=new wu(ne);_.scope.off();const S=_.update=se.run.bind(se),g=_.job=se.runIfDirty.bind(se);g.i=_,g.id=_.uid,se.scheduler=()=>Ko(g),mi(_,!0),S()},Q=(_,P,N)=>{P.component=_;const K=_.vnode.props;_.vnode=P,_.next=null,Xd(_,P.props,K,N),Kd(_,P.children,N),kn(),_l(_),Wn()},G=(_,P,N,K,H,j,ie,ne,se=!1)=>{const S=_&&_.children,g=_?_.shapeFlag:0,D=P.children,{patchFlag:O,shapeFlag:$}=P;if(O>0){if(O&128){ae(S,D,N,K,H,j,ie,ne,se);return}else if(O&256){re(S,D,N,K,H,j,ie,ne,se);return}}$&8?(g&16&&xe(S,H,j),D!==S&&c(N,D)):g&16?$&16?ae(S,D,N,K,H,j,ie,ne,se):xe(S,H,j,!0):(g&8&&c(N,""),$&16&&U(D,N,K,H,j,ie,ne,se))},re=(_,P,N,K,H,j,ie,ne,se)=>{_=_||ar,P=P||ar;const S=_.length,g=P.length,D=Math.min(S,g);let O;for(O=0;O<D;O++){const $=P[O]=se?On(P[O]):Mn(P[O]);M(_[O],$,N,null,H,j,ie,ne,se)}S>g?xe(_,H,j,!0,!1,D):U(P,N,K,H,j,ie,ne,se,D)},ae=(_,P,N,K,H,j,ie,ne,se)=>{let S=0;const g=P.length;let D=_.length-1,O=g-1;for(;S<=D&&S<=O;){const $=_[S],J=P[S]=se?On(P[S]):Mn(P[S]);if(wi($,J))M($,J,N,null,H,j,ie,ne,se);else break;S++}for(;S<=D&&S<=O;){const $=_[D],J=P[O]=se?On(P[O]):Mn(P[O]);if(wi($,J))M($,J,N,null,H,j,ie,ne,se);else break;D--,O--}if(S>D){if(S<=O){const $=O+1,J=$<g?P[$].el:K;for(;S<=O;)M(null,P[S]=se?On(P[S]):Mn(P[S]),N,J,H,j,ie,ne,se),S++}}else if(S>O)for(;S<=D;)_e(_[S],H,j,!0),S++;else{const $=S,J=S,Me=new Map;for(S=J;S<=O;S++){const ye=P[S]=se?On(P[S]):Mn(P[S]);ye.key!=null&&Me.set(ye.key,S)}let me,oe=0;const ue=O-J+1;let Ce=!1,le=0;const et=new Array(ue);for(S=0;S<ue;S++)et[S]=0;for(S=$;S<=D;S++){const ye=_[S];if(oe>=ue){_e(ye,H,j,!0);continue}let Se;if(ye.key!=null)Se=Me.get(ye.key);else for(me=J;me<=O;me++)if(et[me-J]===0&&wi(ye,P[me])){Se=me;break}Se===void 0?_e(ye,H,j,!0):(et[Se-J]=S+1,Se>=le?le=Se:Ce=!0,M(ye,P[Se],N,null,H,j,ie,ne,se),oe++)}const ze=Ce?Qd(et):ar;for(me=ze.length-1,S=ue-1;S>=0;S--){const ye=J+S,Se=P[ye],be=P[ye+1],We=ye+1<g?be.el||Tf(be):K;et[S]===0?M(null,Se,N,We,H,j,ie,ne,se):Ce&&(me<0||S!==ze[me]?fe(Se,N,We,2):me--)}}},fe=(_,P,N,K,H=null)=>{const{el:j,type:ie,transition:ne,children:se,shapeFlag:S}=_;if(S&6){fe(_.component.subTree,P,N,K);return}if(S&128){_.suspense.move(P,N,K);return}if(S&64){ie.move(_,P,N,qe);return}if(ie===Nt){i(j,P,N);for(let D=0;D<se.length;D++)fe(se[D],P,N,K);i(_.anchor,P,N);return}if(ie===Hr){y(_,P,N);return}if(K!==2&&S&1&&ne)if(K===0)ne.beforeEnter(j),i(j,P,N),Ht(()=>ne.enter(j),H);else{const{leave:D,delayLeave:O,afterLeave:$}=ne,J=()=>{_.ctx.isUnmounted?r(j):i(j,P,N)},Me=()=>{j._isLeaving&&j[_n](!0),D(j,()=>{J(),$&&$()})};O?O(j,J,Me):Me()}else i(j,P,N)},_e=(_,P,N,K=!1,H=!1)=>{const{type:j,props:ie,ref:ne,children:se,dynamicChildren:S,shapeFlag:g,patchFlag:D,dirs:O,cacheIndex:$,memo:J}=_;if(D===-2&&(H=!1),ne!=null&&(kn(),Or(ne,null,N,_,!0),Wn()),$!=null&&(P.renderCache[$]=void 0),g&256){P.ctx.deactivate(_);return}const Me=g&1&&O,me=!Br(_);let oe;if(me&&(oe=ie&&ie.onVnodeBeforeUnmount)&&mn(oe,P,_),g&6)ce(_.component,N,K);else{if(g&128){_.suspense.unmount(N,K);return}Me&&pi(_,null,P,"beforeUnmount"),g&64?_.type.remove(_,P,N,qe,K):S&&!S.hasOnce&&(j!==Nt||D>0&&D&64)?xe(S,P,N,!1,!0):(j===Nt&&D&384||!H&&g&16)&&xe(se,P,N),K&&Ue(_)}const ue=J!=null&&$==null;(me&&(oe=ie&&ie.onVnodeUnmounted)||Me||ue)&&Ht(()=>{oe&&mn(oe,P,_),Me&&pi(_,null,P,"unmounted"),ue&&(_.el=null)},N)},Ue=_=>{const{type:P,el:N,anchor:K,transition:H}=_;if(P===Nt){Z(N,K);return}if(P===Hr){E(_);return}const j=()=>{r(N),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(_.shapeFlag&1&&H&&!H.persisted){const{leave:ie,delayLeave:ne}=H,se=()=>ie(N,j);ne?ne(_.el,j,se):se()}else j()},Z=(_,P)=>{let N;for(;_!==P;)N=h(_),r(_),_=N;r(P)},ce=(_,P,N)=>{const{bum:K,scope:H,job:j,subTree:ie,um:ne,m:se,a:S}=_;Cl(se),Cl(S),K&&Sa(K),H.stop(),j&&(j.flags|=8,_e(ie,_,P,N)),ne&&Ht(ne,P),Ht(()=>{_.isUnmounted=!0},P)},xe=(_,P,N,K=!1,H=!1,j=0)=>{for(let ie=j;ie<_.length;ie++)_e(_[ie],P,N,K,H)},Re=_=>{if(_.shapeFlag&6)return Re(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const P=h(_.anchor||_.el),N=P&&P[md];return N?h(N):P};let Ae=!1;const Te=(_,P,N)=>{let K;_==null?P._vnode&&(_e(P._vnode,null,null,!0),K=P._vnode.component):M(P._vnode||null,_,P,null,null,null,N),P._vnode=_,Ae||(Ae=!0,_l(K),qu(),Ae=!1)},qe={p:M,um:_e,m:fe,r:Ue,mt:L,mc:U,pc:G,pbc:x,n:Re,o:n};return{render:Te,hydrate:void 0,createApp:Fd(Te)}}function Ca({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function mi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Jd(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Ef(n,e,t=!1){const i=n.children,r=e.children;if(Le(i)&&Le(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=On(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Ef(o,a)),a.type===ua&&(a.patchFlag===-1&&(a=r[s]=On(a)),a.el=o.el),a.type===Ft&&!a.el&&(a.el=o.el)}}function Qd(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(r=t[t.length-1],n[r]<u){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<u?s=a+1:o=a;u<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function yf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:yf(e)}function Cl(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Tf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Tf(e.subTree):null}const bf=n=>n.__isSuspense;function ep(n,e){e&&e.pendingBranch?Le(n)?e.effects.push(...n):e.effects.push(n):Xu(n)}const Nt=Symbol.for("v-fgt"),ua=Symbol.for("v-txt"),Ft=Symbol.for("v-cmt"),Hr=Symbol.for("v-stc"),Gr=[];let $t=null;function ft(n=!1){Gr.push($t=n?null:[])}function tp(){Gr.pop(),$t=Gr[Gr.length-1]||null}let qr=1;function ks(n,e=!1){qr+=n,n<0&&$t&&e&&($t.hasOnce=!0)}function Af(n){return n.dynamicChildren=qr>0?$t||ar:null,tp(),qr>0&&$t&&$t.push(n),n}function Et(n,e,t,i,r,s){return Af(he(n,e,t,i,r,s,!0))}function wf(n,e,t,i,r){return Af(_t(n,e,t,i,r,!0))}function Ws(n){return n?n.__v_isVNode===!0:!1}function wi(n,e){return n.type===e.type&&n.key===e.key}const Cf=({key:n})=>n??null,Us=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?lt(n)||Rt(n)||Fe(n)?{i:Qt,r:n,k:e,f:!!t}:n:null);function he(n,e=null,t=null,i=0,r=null,s=n===Nt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Cf(e),ref:e&&Us(e),scopeId:Yu,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Qt};return a?(el(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=lt(t)?8:16),qr>0&&!o&&$t&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&$t.push(l),l}const _t=np;function np(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Cd)&&(n=Ft),Ws(n)){const a=ci(n,e,!0);return t&&el(a,t),qr>0&&!s&&$t&&(a.shapeFlag&6?$t[$t.indexOf(n)]=a:$t.push(a)),a.patchFlag=-2,a}if(hp(n)&&(n=n.__vccOpts),e){e=ip(e);let{class:a,style:l}=e;a&&!lt(a)&&(e.class=si(a)),je(l)&&(Yo(l)&&!Le(l)&&(l=vt({},l)),e.style=lr(l))}const o=lt(n)?1:bf(n)?128:Ju(n)?64:je(n)?4:Fe(n)?2:0;return he(n,e,t,i,r,o,s,!0)}function ip(n){return n?Yo(n)||gf(n)?vt({},n):n:null}function ci(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,u=e?rp(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Cf(u),ref:e&&e.ref?t&&s?Le(s)?s.concat(Us(e)):[s,Us(e)]:Us(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Nt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ci(n.ssContent),ssFallback:n.ssFallback&&ci(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Xr(c,l.clone(c)),c}function Eo(n=" ",e=0){return _t(ua,null,n,e)}function yo(n,e){const t=_t(Hr,null,n);return t.staticCount=e,t}function Qo(n="",e=!1){return e?(ft(),wf(Ft,null,n)):_t(Ft,null,n)}function Mn(n){return n==null||typeof n=="boolean"?_t(Ft):Le(n)?_t(Nt,null,n.slice()):Ws(n)?On(n):_t(ua,null,String(n))}function On(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ci(n)}function el(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Le(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),el(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!gf(e)?e._ctx=Qt:r===3&&Qt&&(Qt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Fe(e)?(e={default:e,_ctx:Qt},t=32):(e=String(e),i&64?(t=16,e=[Eo(e)]):t=8);n.children=e,n.shapeFlag|=t}function rp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=si([e.class,i.class]));else if(r==="style")e.style=lr([e.style,i.style]);else if(ea(r)){const s=e[r],o=i[r];o&&s!==o&&!(Le(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!ta(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function mn(n,e,t,i=null){hn(n,e,7,[t,i])}const sp=ff();let ap=0;function op(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||sp,s={uid:ap++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ih(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vf(i,r),emitsOptions:hf(i,r),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:i.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Bd.bind(null,s),n.ce&&n.ce(s),s}let Ot=null;const tl=()=>Ot||Qt;let Xs,To;{const n=ia(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Xs=e("__VUE_INSTANCE_SETTERS__",t=>Ot=t),To=e("__VUE_SSR_SETTERS__",t=>$r=t)}const Jr=n=>{const e=Ot;return Xs(n),n.scope.on(),()=>{n.scope.off(),Xs(e)}},Rl=()=>{Ot&&Ot.scope.off(),Xs(null)};function Rf(n){return n.vnode.shapeFlag&4}let $r=!1;function lp(n,e=!1,t=!1){e&&To(e);const{props:i,children:r}=n.vnode,s=Rf(n);Wd(n,i,s,e),Yd(n,r,t||e);const o=s?cp(n,e):void 0;return e&&To(!1),o}function cp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Rd);const{setup:i}=t;if(i){kn();const r=n.setupContext=i.length>1?fp(n):null,s=Jr(n),o=Zr(i,n,0,[n.props,r]),a=xu(o);if(Wn(),s(),(a||n.sp)&&!Br(n)&&sf(n),a){if(o.then(Rl,Rl),e)return o.then(l=>{Pl(n,l)}).catch(l=>{sa(l,n,0)});n.asyncDep=o}else Pl(n,o)}else Pf(n)}function Pl(n,e,t){Fe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:je(e)&&(n.setupState=Vu(e)),Pf(n)}function Pf(n,e,t){const i=n.type;n.render||(n.render=i.render||ln);{const r=Jr(n);kn();try{Pd(n)}finally{Wn(),r()}}}const up={get(n,e){return Ct(n,"get",""),n[e]}};function fp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,up),slots:n.slots,emit:n.emit,expose:e}}function fa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Vu(ed(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in zr)return zr[t](n)},has(e,t){return t in e||t in zr}})):n.proxy}function hp(n){return Fe(n)&&"__vccOpts"in n}const Ii=(n,e)=>sd(n,e,$r);function dp(n,e,t){try{ks(-1);const i=arguments.length;return i===2?je(e)&&!Le(e)?Ws(e)?_t(n,null,[e]):_t(n,e):_t(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ws(t)&&(t=[t]),_t(n,e,t))}finally{ks(1)}}const pp="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bo;const Ll=typeof window<"u"&&window.trustedTypes;if(Ll)try{bo=Ll.createPolicy("vue",{createHTML:n=>n})}catch{}const Lf=bo?n=>bo.createHTML(n):n=>n,mp="http://www.w3.org/2000/svg",gp="http://www.w3.org/1998/Math/MathML",Fn=typeof document<"u"?document:null,Dl=Fn&&Fn.createElement("template"),_p={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Fn.createElementNS(mp,n):e==="mathml"?Fn.createElementNS(gp,n):t?Fn.createElement(n,{is:t}):Fn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Fn.createTextNode(n),createComment:n=>Fn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Fn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Dl.innerHTML=Lf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Dl.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Kn="transition",yr="animation",Yr=Symbol("_vtc"),Df={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},vp=vt({},Qu,Df),xp=n=>(n.displayName="Transition",n.props=vp,n),Mp=xp((n,{slots:e})=>dp(vd,Sp(n),e)),gi=(n,e=[])=>{Le(n)?n.forEach(t=>t(...e)):n&&n(...e)},Il=n=>n?Le(n)?n.some(e=>e.length>1):n.length>1:!1;function Sp(n){const e={};for(const z in n)z in Df||(e[z]=n[z]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,v=Ep(r),M=v&&v[0],p=v&&v[1],{onBeforeEnter:d,onEnter:b,onEnterCancelled:y,onLeave:E,onLeaveCancelled:w,onBeforeAppear:R=d,onAppear:C=b,onAppearCancelled:U=y}=e,F=(z,te,L,ee)=>{z._enterCancelled=ee,_i(z,te?c:a),_i(z,te?u:o),L&&L()},x=(z,te)=>{z._isLeaving=!1,_i(z,f),_i(z,m),_i(z,h),te&&te()},A=z=>(te,L)=>{const ee=z?C:b,W=()=>F(te,z,L);gi(ee,[te,W]),Ul(()=>{_i(te,z?l:s),Rn(te,z?c:a),Il(ee)||Nl(te,i,M,W)})};return vt(e,{onBeforeEnter(z){gi(d,[z]),Rn(z,s),Rn(z,o)},onBeforeAppear(z){gi(R,[z]),Rn(z,l),Rn(z,u)},onEnter:A(!1),onAppear:A(!0),onLeave(z,te){z._isLeaving=!0;const L=()=>x(z,te);Rn(z,f),z._enterCancelled?(Rn(z,h),Bl(z)):(Bl(z),Rn(z,h)),Ul(()=>{z._isLeaving&&(_i(z,f),Rn(z,m),Il(E)||Nl(z,i,p,L))}),gi(E,[z,L])},onEnterCancelled(z){F(z,!1,void 0,!0),gi(y,[z])},onAppearCancelled(z){F(z,!0,void 0,!0),gi(U,[z])},onLeaveCancelled(z){x(z),gi(w,[z])}})}function Ep(n){if(n==null)return null;if(je(n))return[Ra(n.enter),Ra(n.leave)];{const e=Ra(n);return[e,e]}}function Ra(n){return Th(n)}function Rn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Yr]||(n[Yr]=new Set)).add(e)}function _i(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Yr];t&&(t.delete(e),t.size||(n[Yr]=void 0))}function Ul(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let yp=0;function Nl(n,e,t,i){const r=n._endId=++yp,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=Tp(n,e);if(!o)return i();const u=o+"end";let c=0;const f=()=>{n.removeEventListener(u,h),s()},h=m=>{m.target===n&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},a+1),n.addEventListener(u,h)}function Tp(n,e){const t=window.getComputedStyle(n),i=v=>(t[v]||"").split(", "),r=i(`${Kn}Delay`),s=i(`${Kn}Duration`),o=Fl(r,s),a=i(`${yr}Delay`),l=i(`${yr}Duration`),u=Fl(a,l);let c=null,f=0,h=0;e===Kn?o>0&&(c=Kn,f=o,h=s.length):e===yr?u>0&&(c=yr,f=u,h=l.length):(f=Math.max(o,u),c=f>0?o>u?Kn:yr:null,h=c?c===Kn?s.length:l.length:0);const m=c===Kn&&/\b(?:transform|all)(?:,|$)/.test(i(`${Kn}Property`).toString());return{type:c,timeout:f,propCount:h,hasTransform:m}}function Fl(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Ol(t)+Ol(n[i])))}function Ol(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Bl(n){return(n?n.ownerDocument:document).body.offsetHeight}function bp(n,e,t){const i=n[Yr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const qs=Symbol("_vod"),If=Symbol("_vsh"),Ap={name:"show",beforeMount(n,{value:e},{transition:t}){n[qs]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Tr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Tr(n,!0),i.enter(n)):i.leave(n,()=>{Tr(n,!1)}):Tr(n,e))},beforeUnmount(n,{value:e}){Tr(n,e)}};function Tr(n,e){n.style.display=e?n[qs]:"none",n[If]=!e}const Uf=Symbol("");function wp(n){const e=tl();if(!e)return;const t=e.ut=(r=n(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>$s(s,r))},i=()=>{const r=n(e.proxy);e.ce?$s(e.ce,r):Ao(e.subTree,r),t(r)};of(()=>{Xu(i)}),la(()=>{Fr(i,ln,{flush:"post"});const r=new MutationObserver(i);r.observe(e.subTree.el.parentNode,{childList:!0}),jo(()=>r.disconnect())})}function Ao(n,e){if(n.shapeFlag&128){const t=n.suspense;n=t.activeBranch,t.pendingBranch&&!t.isHydrating&&t.effects.push(()=>{Ao(t.activeBranch,e)})}for(;n.component;)n=n.component.subTree;if(n.shapeFlag&1&&n.el)$s(n.el,e);else if(n.type===Nt)n.children.forEach(t=>Ao(t,e));else if(n.type===Hr){let{el:t,anchor:i}=n;for(;t&&($s(t,e),t!==i);)t=t.nextSibling}}function $s(n,e){if(n.nodeType===1){const t=n.style;let i="";for(const r in e){const s=Dh(e[r]);t.setProperty(`--${r}`,s),i+=`--${r}: ${s};`}t[Uf]=i}}const Cp=/(?:^|;)\s*display\s*:/;function Rp(n,e,t){const i=n.style,r=lt(t);let s=!1;if(t&&!r){if(e)if(lt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Dr(i,a,"")}else for(const o in e)t[o]==null&&Dr(i,o,"");for(const o in t){o==="display"&&(s=!0);const a=t[o];a!=null?Lp(n,o,!lt(e)&&e?e[o]:void 0,a)||Dr(i,o,a):Dr(i,o,"")}}else if(r){if(e!==t){const o=i[Uf];o&&(t+=";"+o),i.cssText=t,s=Cp.test(t)}}else e&&n.removeAttribute("style");qs in n&&(n[qs]=s?i.display:"",n[If]&&(i.display="none"))}const zl=/\s*!important$/;function Dr(n,e,t){if(Le(t))t.forEach(i=>Dr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Pp(n,e);zl.test(t)?n.setProperty(Bi(i),t.replace(zl,""),"important"):n[i]=t}}const Hl=["Webkit","Moz","ms"],Pa={};function Pp(n,e){const t=Pa[e];if(t)return t;let i=cn(e);if(i!=="filter"&&i in n)return Pa[e]=i;i=Eu(i);for(let r=0;r<Hl.length;r++){const s=Hl[r]+i;if(s in n)return Pa[e]=s}return e}function Lp(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&lt(i)&&t===i}const Gl="http://www.w3.org/1999/xlink";function Vl(n,e,t,i,r,s=Ph(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Gl,e.slice(6,e.length)):n.setAttributeNS(Gl,e,t):t==null||s&&!Tu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":An(t)?String(t):t)}function kl(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Lf(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Tu(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Dp(n,e,t,i){n.addEventListener(e,t,i)}function Ip(n,e,t,i){n.removeEventListener(e,t,i)}const Wl=Symbol("_vei");function Up(n,e,t,i,r=null){const s=n[Wl]||(n[Wl]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Np(e);if(i){const u=s[e]=Bp(i,r);Dp(n,a,u,l)}else o&&(Ip(n,a,o,l),s[e]=void 0)}}const Xl=/(?:Once|Passive|Capture)$/;function Np(n){let e;if(Xl.test(n)){e={};let i;for(;i=n.match(Xl);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Bi(n.slice(2)),e]}let La=0;const Fp=Promise.resolve(),Op=()=>La||(Fp.then(()=>La=0),La=Date.now());function Bp(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;hn(zp(i,t.value),e,5,[i])};return t.value=n,t.attached=Op(),t}function zp(n,e){if(Le(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const ql=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Hp=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?bp(n,i,o):e==="style"?Rp(n,t,i):ea(e)?ta(e)||Up(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Gp(n,e,i,o))?(kl(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Vl(n,e,i,o,s,e!=="value")):n._isVueCE&&(Vp(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!lt(i)))?kl(n,cn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Vl(n,e,i,o))};function Gp(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&ql(e)&&Fe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ql(e)&&lt(t)?!1:e in n}function Vp(n,e){const t=n._def.props;if(!t)return!1;const i=cn(e);return Array.isArray(t)?t.some(r=>cn(r)===i):Object.keys(t).some(r=>cn(r)===i)}const kp=["ctrl","shift","alt","meta"],Wp={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>kp.some(t=>n[`${t}Key`]&&!e.includes(t))},$l=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=Wp[e[o]];if(a&&a(r,e))return}return n(r,...s)})},Xp=vt({patchProp:Hp},_p);let Yl;function qp(){return Yl||(Yl=jd(Xp))}const $p=(...n)=>{const e=qp().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Kp(i);if(!r)return;const s=e._component;!Fe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Yp(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Yp(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Kp(n){return lt(n)?document.querySelector(n):n}const Qr=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},jp={},Zp={class:"topbar"};function Jp(n,e){return ft(),Et("header",Zp,[...e[0]||(e[0]=[yo('<div class="topbar-left" data-v-0e40bc9e><div class="logo" data-v-0e40bc9e><span class="logo-k" data-v-0e40bc9e>K</span><span class="logo-rest" data-v-0e40bc9e>Skr</span></div><div class="topbar-divider" data-v-0e40bc9e></div><span class="topbar-subtitle" data-v-0e40bc9e>AE Plugin Preview</span></div><div class="topbar-right" data-v-0e40bc9e><a href="https://kskr.kuaishou.com" target="_blank" class="topbar-link" data-v-0e40bc9e>文档</a><a href="#" class="topbar-link" data-v-0e40bc9e>更新日志</a><a href="#" class="topbar-link" data-v-0e40bc9e>关于</a><span class="version-badge" data-v-0e40bc9e>v1.0</span></div>',2)])])}const Qp=Qr(jp,[["render",Jp],["__scopeId","data-v-0e40bc9e"]]),Ns=[{id:"light",name:"光效",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',plugins:[{id:"lens-flare",name:"LensFlare",nameZh:"镜头光晕",status:"coming"},{id:"light-leak",name:"LightLeak",nameZh:"漏光效果",status:"coming"},{id:"glow-bloom",name:"GlowBloom",nameZh:"辉光绽放",status:"coming"},{id:"neon-glow",name:"NeonGlow",nameZh:"霓虹发光",status:"coming"}]},{id:"distortion",name:"画面扭曲",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8"/><path d="M3 12c0 2.2 3.6 4 8 4s8-1.8 8-4"/><path d="M3 12c0-2.2 3.6-4 8-4s8 1.8 8 4"/></svg>',plugins:[{id:"wave-blur",name:"WaveBlurring",nameZh:"波形模糊",status:"active"},{id:"ripple",name:"RippleWarp",nameZh:"涟漪扭曲",status:"coming"},{id:"liquid",name:"LiquidMorph",nameZh:"液态变形",status:"coming"},{id:"glitch",name:"GlitchWarp",nameZh:"故障扭曲",status:"coming"}]},{id:"blur",name:"模糊",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="6" opacity=".5"/><circle cx="12" cy="12" r="9" opacity=".25"/></svg>',plugins:[{id:"motion-blur",name:"MotionBlur",nameZh:"运动模糊",status:"coming"},{id:"depth-blur",name:"DepthBlur",nameZh:"景深模糊",status:"coming"},{id:"radial-blur",name:"RadialBlur",nameZh:"径向模糊",status:"coming"},{id:"bokeh",name:"BokehBlur",nameZh:"散景模糊",status:"coming"}]},{id:"text",name:"文本",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>',plugins:[{id:"text-glitch",name:"TextGlitch",nameZh:"文字故障",status:"coming"},{id:"text-reveal",name:"TextReveal",nameZh:"文字揭示",status:"coming"},{id:"kinetic-type",name:"KineticType",nameZh:"动态字体",status:"coming"},{id:"neon-text",name:"NeonText",nameZh:"霓虹文字",status:"coming"}]},{id:"mosaic",name:"马赛克",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="4" height="4"/><rect x="10" y="3" width="4" height="4"/><rect x="17" y="3" width="4" height="4"/><rect x="3" y="10" width="4" height="4"/><rect x="10" y="10" width="4" height="4"/><rect x="17" y="10" width="4" height="4"/><rect x="3" y="17" width="4" height="4"/><rect x="10" y="17" width="4" height="4"/><rect x="17" y="17" width="4" height="4"/></svg>',plugins:[{id:"basic-mosaic",name:"Basic Mosaic",nameZh:"基础马赛克",status:"active"},{id:"blur-mosaic",name:"Blur Mosaic",nameZh:"模糊马赛克",status:"active"},{id:"brick-mosaic",name:"Brick Mosaic",nameZh:"砖块马赛克",status:"active"},{id:"colorful-mosaic-1",name:"Colorful MosaicI",nameZh:"彩色马赛克 I",status:"active"},{id:"colorful-mosaic-2",name:"Colorful MosaicII",nameZh:"彩色马赛克 II",status:"active"},{id:"colorful-mosaic-3",name:"Colorful MosaicIII",nameZh:"彩色马赛克 III",status:"active"},{id:"glass-mosaic-1",name:"Glass MosaicI",nameZh:"玻璃马赛克 I",status:"active"},{id:"glass-mosaic-2",name:"Glass MosaicII",nameZh:"玻璃马赛克 II",status:"active"},{id:"hexagon-mosaic",name:"Hexagon Mosaic",nameZh:"六边形马赛克",status:"active"},{id:"star-mosaic",name:"Star Mosaic",nameZh:"星形马赛克",status:"active"},{id:"radial-blur",name:"Radial Blur",nameZh:"径向模糊",status:"active"}]},{id:"generate",name:"生成",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',plugins:[{id:"particle-gen",name:"ParticleGen",nameZh:"粒子生成",status:"coming"},{id:"noise-field",name:"NoiseField",nameZh:"噪声场",status:"coming"},{id:"fractal",name:"FractalGen",nameZh:"分形生成",status:"coming"},{id:"grid-gen",name:"GridGen",nameZh:"网格生成",status:"coming"}]}],em={class:"sidebar"},tm={class:"category-list"},nm=["onClick"],im=["innerHTML"],rm={class:"category-name"},sm={class:"plugin-list"},am=["onClick"],om={class:"plugin-info"},lm={class:"plugin-name"},cm={class:"plugin-name-zh"},um={key:0,class:"plugin-tag"},fm={key:1,class:"plugin-tag active-tag"},hm={class:"sidebar-footer"},dm={class:"footer-text"},pm={class:"footer-count"},mm={class:"footer-available"},gm={__name:"Sidebar",emits:["select-plugin"],setup(n,{emit:e}){const t=e,i=wt("distortion"),r=wt("wave-blur"),s=Ii(()=>Ns.reduce((u,c)=>u+c.plugins.length,0)),o=Ii(()=>Ns.reduce((u,c)=>u+c.plugins.filter(f=>f.status==="active").length,0));function a(u){i.value=i.value===u?null:u}function l(u){u.status!=="coming"&&(r.value=u.id,t("select-plugin",u))}return(u,c)=>(ft(),Et("aside",em,[he("div",tm,[(ft(!0),Et(Nt,null,Gs(Gu(Ns),f=>(ft(),Et("div",{key:f.id,class:si(["category-item",{expanded:i.value===f.id}])},[he("div",{class:si(["category-header",{active:i.value===f.id}]),onClick:h=>a(f.id)},[he("div",{class:"category-icon",innerHTML:f.icon},null,8,im),he("span",rm,St(f.name),1),c[0]||(c[0]=he("div",{class:"category-arrow"},[he("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[he("polyline",{points:"6 9 12 15 18 9"})])],-1))],10,nm),_t(Mp,{name:"slide"},{default:Ku(()=>[ud(he("div",sm,[(ft(!0),Et(Nt,null,Gs(f.plugins,h=>(ft(),Et("div",{key:h.id,class:si(["plugin-item",{selected:r.value===h.id,coming:h.status==="coming"}]),onClick:m=>l(h)},[c[1]||(c[1]=he("div",{class:"plugin-dot"},null,-1)),he("div",om,[he("span",lm,St(h.name),1),he("span",cm,St(h.nameZh),1)]),h.status==="coming"?(ft(),Et("span",um,"即将")):(ft(),Et("span",fm,"可用"))],10,am))),128))],512),[[Ap,i.value===f.id]])]),_:2},1024)],2))),128))]),he("div",hm,[he("div",dm,[he("span",pm,St(s.value)+" 个插件",1),c[2]||(c[2]=he("span",{class:"footer-divider"},"·",-1)),he("span",mm,St(o.value)+" 已上线",1)])])]))}},_m=Qr(gm,[["__scopeId","data-v-adbdcd38"]]),vm={class:"param-panel"},xm={class:"plugin-header"},Mm={class:"plugin-title-row"},Sm={class:"plugin-title"},Em={class:"plugin-title-zh"},ym={class:"params-scroll"},Tm={class:"param-header"},bm={class:"param-label"},Am={class:"param-value-wrap"},wm={class:"param-value"},Cm={class:"param-desc"},Rm={class:"slider-wrap"},Pm={class:"slider-min"},Lm=["min","max","step","value","onInput"],Dm={class:"slider-max"},Im={class:"panel-actions"},Um={class:"btn-upload"},Nm={__name:"ParamPanel",props:{plugin:{type:Object,required:!0},params:{type:Array,required:!0},modelValue:{type:Object,required:!0},compareMode:{type:Boolean,default:!1}},emits:["update:modelValue","reset","upload","toggle-compare"],setup(n,{emit:e}){const t=n,i=e;function r(o,a){i("update:modelValue",{...t.modelValue,[o]:parseFloat(a)})}function s(o){return typeof o=="number"?o.toFixed(1):o}return(o,a)=>(ft(),Et("div",vm,[he("div",xm,[he("div",Mm,[he("div",null,[he("h2",Sm,St(n.plugin.name),1),he("p",Em,St(n.plugin.nameZh),1)]),he("button",{class:"btn-icon",onClick:a[0]||(a[0]=l=>o.$emit("reset")),title:"重置参数"},[...a[3]||(a[3]=[he("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[he("polyline",{points:"1 4 1 10 7 10"}),he("path",{d:"M3.51 15a9 9 0 1 0 .49-4.64"})],-1)])])])]),he("div",ym,[(ft(!0),Et(Nt,null,Gs(n.params,l=>(ft(),Et("div",{class:"param-group",key:l.key},[he("div",Tm,[he("span",bm,St(l.label),1),he("div",Am,[he("span",wm,St(s(n.modelValue[l.key])),1)])]),he("p",Cm,St(l.desc),1),he("div",Rm,[he("span",Pm,St(l.min),1),he("input",{type:"range",min:l.min,max:l.max,step:l.step||.1,value:n.modelValue[l.key],onInput:u=>r(l.key,u.target.value)},null,40,Lm),he("span",Dm,St(l.max),1)])]))),128))]),he("div",Im,[he("label",Um,[he("input",{type:"file",accept:"image/*",onChange:a[1]||(a[1]=l=>o.$emit("upload",l)),hidden:""},null,32),a[4]||(a[4]=he("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[he("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),he("polyline",{points:"17 8 12 3 7 8"}),he("line",{x1:"12",y1:"3",x2:"12",y2:"15"})],-1)),a[5]||(a[5]=Eo(" 上传图片 ",-1))]),he("button",{class:si(["btn-compare",{active:n.compareMode}]),onClick:a[2]||(a[2]=l=>o.$emit("toggle-compare"))},[a[6]||(a[6]=he("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[he("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),he("line",{x1:"12",y1:"3",x2:"12",y2:"21"})],-1)),Eo(" "+St(n.compareMode?"关闭对比":"前后对比"),1)],2)])]))}},Fm=Qr(Nm,[["__scopeId","data-v-ec26b06a"]]),Om={class:"preview-area"},Bm={class:"preview-toolbar"},zm={class:"toolbar-left"},Hm={class:"breadcrumb"},Gm={class:"breadcrumb-cat"},Vm={class:"breadcrumb-plugin"},km={class:"toolbar-right"},Wm={class:"view-toggle"},Xm=["onClick","title"],qm=["innerHTML"],$m={class:"zoom-control"},Ym={class:"zoom-val"},Km={key:0,class:"single-mode"},jm={key:0,class:"canvas-overlay"},Zm={key:1,class:"compare-mode-wrap"},Jm={class:"compare-canvas-bg"},Qm={__name:"PreviewArea",props:{compareMode:{type:Boolean,default:!1},effect:{type:Object,default:null},hasImage:{type:Boolean,default:!1},currentCategory:{type:String,default:""},currentPlugin:{type:String,default:""}},emits:["upload"],setup(n,{expose:e,emit:t}){wp(U=>({v9f263458:h.value+"%"}));const i=t,r=wt(null),s=wt(null),o=wt(null),a=wt(null),l=wt(null),u=wt(null),c=wt("fit"),f=wt(100),h=wt(50);let m=!1;const v=[{id:"fit",label:"适应窗口",icon:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>'},{id:"actual",label:"实际大小",icon:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>'}],M=Ii(()=>c.value==="fit"?{maxWidth:"100%",maxHeight:"100%"}:{transform:`scale(${f.value/100})`,transformOrigin:"center center"});e({effectCanvas:r,originalCanvas:s,effectCanvasCmp:o});function p(){var U;(U=a.value)==null||U.click()}function d(U){i("upload",U)}function b(U){var x,A;const F=(A=(x=U.dataTransfer)==null?void 0:x.files)==null?void 0:A[0];F&&i("upload",{target:{files:[F]}})}function y(U){U.preventDefault(),m=!0,document.addEventListener("mousemove",w),document.addEventListener("touchmove",R),document.addEventListener("mouseup",E),document.addEventListener("touchend",E)}function E(){m=!1,document.removeEventListener("mousemove",w),document.removeEventListener("touchmove",R),document.removeEventListener("mouseup",E),document.removeEventListener("touchend",E)}function w(U){m&&C(U.clientX)}function R(U){m&&C(U.touches[0].clientX)}function C(U){const F=l.value;if(!F)return;const x=F.getBoundingClientRect(),A=(U-x.left)/x.width*100;h.value=Math.min(95,Math.max(5,A))}return(U,F)=>(ft(),Et("div",Om,[he("div",Bm,[he("div",zm,[he("span",Hm,[he("span",Gm,St(n.currentCategory),1),F[3]||(F[3]=he("span",{class:"breadcrumb-sep"},"/",-1)),he("span",Vm,St(n.currentPlugin),1)])]),he("div",km,[he("div",Wm,[(ft(),Et(Nt,null,Gs(v,x=>he("button",{key:x.id,class:si({active:c.value===x.id}),onClick:A=>c.value=x.id,title:x.label},[he("span",{innerHTML:x.icon},null,8,qm)],10,Xm)),64))]),he("div",$m,[he("button",{onClick:F[0]||(F[0]=x=>f.value=Math.max(25,f.value-25))},[...F[4]||(F[4]=[he("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[he("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])]),he("span",Ym,St(f.value)+"%",1),he("button",{onClick:F[1]||(F[1]=x=>f.value=Math.min(200,f.value+25))},[...F[5]||(F[5]=[he("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[he("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),he("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])])])]),he("div",{class:"canvas-area",ref_key:"canvasArea",ref:u},[n.compareMode?(ft(),Et("div",Zm,[he("div",{class:"compare-slider-wrap",ref_key:"compareWrap",ref:l,onMousemove:w,onTouchmove:$l(R,["prevent"])},[he("div",Jm,[he("canvas",{ref_key:"originalCanvas",ref:s,class:"cmp-canvas"},null,512)]),he("div",{class:"compare-canvas-fg",style:lr({width:h.value+"%"})},[he("canvas",{ref_key:"effectCanvasCmp",ref:o,class:"cmp-canvas"},null,512)],4),he("div",{class:"compare-divider",style:lr({left:h.value+"%"}),onMousedown:y,onTouchstart:y},[...F[7]||(F[7]=[yo('<div class="divider-line" data-v-7caf8909></div><div class="divider-handle" data-v-7caf8909><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-7caf8909><polyline points="15 18 9 12 15 6" data-v-7caf8909></polyline><polyline points="9 18 3 12 9 6" transform="translate(6,0)" data-v-7caf8909></polyline></svg></div>',2)])],36),F[8]||(F[8]=he("div",{class:"compare-label compare-label-before"},"原图",-1)),F[9]||(F[9]=he("div",{class:"compare-label compare-label-after"},"效果",-1))],544)])):(ft(),Et("div",Km,[he("div",{class:"canvas-frame",style:lr(M.value)},[he("canvas",{ref_key:"effectCanvas",ref:r,class:"preview-canvas"},null,512),n.hasImage?Qo("",!0):(ft(),Et("div",jm,[he("div",{class:"upload-hint",onClick:p,onDragover:F[2]||(F[2]=$l(()=>{},["prevent"])),onDrop:b},[...F[6]||(F[6]=[yo('<div class="upload-icon" data-v-7caf8909><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" data-v-7caf8909><rect x="3" y="3" width="18" height="18" rx="2" ry="2" data-v-7caf8909></rect><circle cx="8.5" cy="8.5" r="1.5" data-v-7caf8909></circle><polyline points="21 15 16 10 5 21" data-v-7caf8909></polyline></svg></div><p class="upload-hint-text" data-v-7caf8909>点击或拖拽图片到此处</p><p class="upload-hint-sub" data-v-7caf8909>支持 JPG、PNG、WebP</p>',3)])],32)]))],4)]))],512),he("input",{ref_key:"fileInput",ref:a,type:"file",accept:"image/*",onChange:d,hidden:""},null,544)]))}},eg=Qr(Qm,[["__scopeId","data-v-7caf8909"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nl="162",tg=0,Kl=1,ng=2,Nf=1,ig=2,Nn=3,ui=0,kt=1,Hn=2,ai=0,fr=1,jl=2,Zl=3,Jl=4,rg=5,Ci=100,sg=101,ag=102,Ql=103,ec=104,og=200,lg=201,cg=202,ug=203,wo=204,Co=205,fg=206,hg=207,dg=208,pg=209,mg=210,gg=211,_g=212,vg=213,xg=214,Mg=0,Sg=1,Eg=2,Ys=3,yg=4,Tg=5,bg=6,Ag=7,Ff=0,wg=1,Cg=2,oi=0,Rg=1,Pg=2,Lg=3,Dg=4,Ig=5,Ug=6,Ng=7,Of=300,pr=301,mr=302,Ro=303,Po=304,ha=306,Lo=1e3,an=1001,Do=1002,It=1003,tc=1004,br=1005,Gt=1006,Da=1007,Pi=1008,li=1009,Fg=1010,Og=1011,il=1012,Bf=1013,ri=1014,Gn=1015,Kr=1016,zf=1017,Hf=1018,Ui=1020,Bg=1021,on=1023,zg=1024,Hg=1025,Ni=1026,gr=1027,Gg=1028,Gf=1029,Vg=1030,Vf=1031,kf=1033,Ia=33776,Ua=33777,Na=33778,Fa=33779,nc=35840,ic=35841,rc=35842,sc=35843,Wf=36196,ac=37492,oc=37496,lc=37808,cc=37809,uc=37810,fc=37811,hc=37812,dc=37813,pc=37814,mc=37815,gc=37816,_c=37817,vc=37818,xc=37819,Mc=37820,Sc=37821,Oa=36492,Ec=36494,yc=36495,kg=36283,Tc=36284,bc=36285,Ac=36286,Wg=3200,Xg=3201,qg=0,$g=1,ii="",vn="srgb",fi="srgb-linear",rl="display-p3",da="display-p3-linear",Ks="linear",rt="srgb",js="rec709",Zs="p3",Gi=7680,wc=519,Yg=512,Kg=513,jg=514,Xf=515,Zg=516,Jg=517,Qg=518,e_=519,Cc=35044,Rc="300 es",Io=1035,Vn=2e3,Js=2001;class vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ba=Math.PI/180,Uo=180/Math.PI;function es(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]).toLowerCase()}function Vt(n,e,t){return Math.max(e,Math.min(t,n))}function t_(n,e){return(n%e+e)%e}function za(n,e,t){return(1-t)*n+t*e}function Pc(n){return(n&n-1)===0&&n!==0}function No(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ar(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,r,s,o,a,l,u){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],m=i[5],v=i[8],M=r[0],p=r[3],d=r[6],b=r[1],y=r[4],E=r[7],w=r[2],R=r[5],C=r[8];return s[0]=o*M+a*b+l*w,s[3]=o*p+a*y+l*R,s[6]=o*d+a*E+l*C,s[1]=u*M+c*b+f*w,s[4]=u*p+c*y+f*R,s[7]=u*d+c*E+f*C,s[2]=h*M+m*b+v*w,s[5]=h*p+m*y+v*R,s[8]=h*d+m*E+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,m=u*s-o*l,v=t*f+i*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=f*M,e[1]=(r*u-c*i)*M,e[2]=(a*i-r*o)*M,e[3]=h*M,e[4]=(c*t-r*l)*M,e[5]=(r*s-a*t)*M,e[6]=m*M,e[7]=(i*l-u*t)*M,e[8]=(o*t-i*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ha.makeScale(e,t)),this}rotate(e){return this.premultiply(Ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ha=new Ve;function qf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function n_(){const n=Qs("canvas");return n.style.display="block",n}const Lc={};function i_(n){n in Lc||(Lc[n]=!0,console.warn(n))}const Dc=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ic=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),us={[fi]:{transfer:Ks,primaries:js,toReference:n=>n,fromReference:n=>n},[vn]:{transfer:rt,primaries:js,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[da]:{transfer:Ks,primaries:Zs,toReference:n=>n.applyMatrix3(Ic),fromReference:n=>n.applyMatrix3(Dc)},[rl]:{transfer:rt,primaries:Zs,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ic),fromReference:n=>n.applyMatrix3(Dc).convertLinearToSRGB()}},r_=new Set([fi,da]),Ze={enabled:!0,_workingColorSpace:fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!r_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=us[e].toReference,r=us[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return us[n].primaries},getTransfer:function(n){return n===ii?Ks:us[n].transfer}};function hr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ga(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vi;class $f{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vi===void 0&&(Vi=Qs("canvas")),Vi.width=e.width,Vi.height=e.height;const i=Vi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hr(t[i]/255)*255):t[i]=hr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let s_=0;class Yf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=es(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Va(r[o].image)):s.push(Va(r[o]))}else s=Va(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Va(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$f.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let a_=0;class Bt extends vr{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=an,r=an,s=Gt,o=Pi,a=on,l=li,u=Bt.DEFAULT_ANISOTROPY,c=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=es(),this.name="",this.source=new Yf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Of)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lo:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case Do:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lo:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case Do:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Of;Bt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],m=l[5],v=l[9],M=l[2],p=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-M)<.01&&Math.abs(v-p)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+M)<.1&&Math.abs(v+p)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(u+1)/2,E=(m+1)/2,w=(d+1)/2,R=(c+h)/4,C=(f+M)/4,U=(v+p)/4;return y>E&&y>w?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=R/i,s=C/i):E>w?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=R/r,s=U/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=C/s,r=U/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-v)*(p-v)+(f-M)*(f-M)+(h-c)*(h-c));return Math.abs(b)<.001&&(b=1),this.x=(p-v)/b,this.y=(f-M)/b,this.z=(h-c)/b,this.w=Math.acos((u+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class o_ extends vr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new Bt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Yf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends o_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Kf extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class l_ extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ts{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],v=s[o+2],M=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=v,e[t+3]=M;return}if(f!==M||l!==h||u!==m||c!==v){let p=1-a;const d=l*h+u*m+c*v+f*M,b=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const w=Math.sqrt(y),R=Math.atan2(w,d*b);p=Math.sin(p*R)/w,a=Math.sin(a*R)/w}const E=a*b;if(l=l*p+h*E,u=u*p+m*E,c=c*p+v*E,f=f*p+M*E,p===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=w,u*=w,c*=w,f*=w}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],m=s[o+2],v=s[o+3];return e[t]=a*v+c*f+l*m-u*h,e[t+1]=l*v+c*h+u*f-a*m,e[t+2]=u*v+c*m+a*h-l*f,e[t+3]=c*v-a*f-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*m*v,this._y=u*m*f-h*c*v,this._z=u*c*v+h*m*f,this._w=u*c*f-h*m*v;break;case"YXZ":this._x=h*c*f+u*m*v,this._y=u*m*f-h*c*v,this._z=u*c*v-h*m*f,this._w=u*c*f+h*m*v;break;case"ZXY":this._x=h*c*f-u*m*v,this._y=u*m*f+h*c*v,this._z=u*c*v+h*m*f,this._w=u*c*f-h*m*v;break;case"ZYX":this._x=h*c*f-u*m*v,this._y=u*m*f+h*c*v,this._z=u*c*v-h*m*f,this._w=u*c*f+h*m*v;break;case"YZX":this._x=h*c*f+u*m*v,this._y=u*m*f+h*c*v,this._z=u*c*v-h*m*f,this._w=u*c*f-h*m*v;break;case"XZY":this._x=h*c*f-u*m*v,this._y=u*m*f-h*c*v,this._z=u*c*v+h*m*f,this._w=u*c*f+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(c-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ka.copy(this).projectOnVector(e),this.sub(ka)}reflect(e){return this.sub(ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ka=new q,Uc=new ts;class ns{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,tn):tn.fromBufferAttribute(s,o),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fs.copy(i.boundingBox)),fs.applyMatrix4(e.matrixWorld),this.union(fs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),hs.subVectors(this.max,wr),ki.subVectors(e.a,wr),Wi.subVectors(e.b,wr),Xi.subVectors(e.c,wr),jn.subVectors(Wi,ki),Zn.subVectors(Xi,Wi),vi.subVectors(ki,Xi);let t=[0,-jn.z,jn.y,0,-Zn.z,Zn.y,0,-vi.z,vi.y,jn.z,0,-jn.x,Zn.z,0,-Zn.x,vi.z,0,-vi.x,-jn.y,jn.x,0,-Zn.y,Zn.x,0,-vi.y,vi.x,0];return!Wa(t,ki,Wi,Xi,hs)||(t=[1,0,0,0,1,0,0,0,1],!Wa(t,ki,Wi,Xi,hs))?!1:(ds.crossVectors(jn,Zn),t=[ds.x,ds.y,ds.z],Wa(t,ki,Wi,Xi,hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pn=[new q,new q,new q,new q,new q,new q,new q,new q],tn=new q,fs=new ns,ki=new q,Wi=new q,Xi=new q,jn=new q,Zn=new q,vi=new q,wr=new q,hs=new q,ds=new q,xi=new q;function Wa(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){xi.fromArray(n,s);const a=r.x*Math.abs(xi.x)+r.y*Math.abs(xi.y)+r.z*Math.abs(xi.z),l=e.dot(xi),u=t.dot(xi),c=i.dot(xi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const c_=new ns,Cr=new q,Xa=new q;class sl{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):c_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);const t=Cr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Cr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(Xa)),this.expandByPoint(Cr.copy(e.center).sub(Xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new q,qa=new q,ps=new q,Jn=new q,$a=new q,ms=new q,Ya=new q;class u_{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){qa.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(qa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ps),a=Jn.dot(this.direction),l=-Jn.dot(ps),u=Jn.lengthSq(),c=Math.abs(1-o*o);let f,h,m,v;if(c>0)if(f=o*l-a,h=o*a-l,v=s*c,f>=0)if(h>=-v)if(h<=v){const M=1/c;f*=M,h*=M,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+u):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(qa).addScaledVector(ps,h),m}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);const i=Ln.dot(this.direction),r=Ln.dot(Ln)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,i,r,s){$a.subVectors(t,e),ms.subVectors(i,e),Ya.crossVectors($a,ms);let o=this.direction.dot(Ya),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Jn.subVectors(this.origin,e);const l=a*this.direction.dot(ms.crossVectors(Jn,ms));if(l<0)return null;const u=a*this.direction.dot($a.cross(Jn));if(u<0||l+u>o)return null;const c=-a*Jn.dot(Ya);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,r,s,o,a,l,u,c,f,h,m,v,M,p){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,h,m,v,M,p)}set(e,t,i,r,s,o,a,l,u,c,f,h,m,v,M,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=m,d[7]=v,d[11]=M,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/qi.setFromMatrixColumn(e,0).length(),s=1/qi.setFromMatrixColumn(e,1).length(),o=1/qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,m=o*f,v=a*c,M=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=m+v*u,t[5]=h-M*u,t[9]=-a*l,t[2]=M-h*u,t[6]=v+m*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,m=l*f,v=u*c,M=u*f;t[0]=h+M*a,t[4]=v*a-m,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=m*a-v,t[6]=M+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,m=l*f,v=u*c,M=u*f;t[0]=h-M*a,t[4]=-o*f,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*c,t[9]=M-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,m=o*f,v=a*c,M=a*f;t[0]=l*c,t[4]=v*u-m,t[8]=h*u+M,t[1]=l*f,t[5]=M*u+h,t[9]=m*u-v,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*u,v=a*l,M=a*u;t[0]=l*c,t[4]=M-h*f,t[8]=v*f+m,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=m*f+v,t[10]=h-M*f}else if(e.order==="XZY"){const h=o*l,m=o*u,v=a*l,M=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+M,t[5]=o*c,t[9]=m*f-v,t[2]=v*f-m,t[6]=a*c,t[10]=M*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f_,e,h_)}lookAt(e,t,i){const r=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Qn.crossVectors(i,Xt),Qn.lengthSq()===0&&(Math.abs(i.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Qn.crossVectors(i,Xt)),Qn.normalize(),gs.crossVectors(Xt,Qn),r[0]=Qn.x,r[4]=gs.x,r[8]=Xt.x,r[1]=Qn.y,r[5]=gs.y,r[9]=Xt.y,r[2]=Qn.z,r[6]=gs.z,r[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],m=i[13],v=i[2],M=i[6],p=i[10],d=i[14],b=i[3],y=i[7],E=i[11],w=i[15],R=r[0],C=r[4],U=r[8],F=r[12],x=r[1],A=r[5],z=r[9],te=r[13],L=r[2],ee=r[6],W=r[10],Q=r[14],G=r[3],re=r[7],ae=r[11],fe=r[15];return s[0]=o*R+a*x+l*L+u*G,s[4]=o*C+a*A+l*ee+u*re,s[8]=o*U+a*z+l*W+u*ae,s[12]=o*F+a*te+l*Q+u*fe,s[1]=c*R+f*x+h*L+m*G,s[5]=c*C+f*A+h*ee+m*re,s[9]=c*U+f*z+h*W+m*ae,s[13]=c*F+f*te+h*Q+m*fe,s[2]=v*R+M*x+p*L+d*G,s[6]=v*C+M*A+p*ee+d*re,s[10]=v*U+M*z+p*W+d*ae,s[14]=v*F+M*te+p*Q+d*fe,s[3]=b*R+y*x+E*L+w*G,s[7]=b*C+y*A+E*ee+w*re,s[11]=b*U+y*z+E*W+w*ae,s[15]=b*F+y*te+E*Q+w*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],m=e[14],v=e[3],M=e[7],p=e[11],d=e[15];return v*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*m-i*l*m)+M*(+t*l*m-t*u*h+s*o*h-r*o*m+r*u*c-s*l*c)+p*(+t*u*f-t*a*m-s*o*f+i*o*m+s*a*c-i*u*c)+d*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],m=e[11],v=e[12],M=e[13],p=e[14],d=e[15],b=f*p*u-M*h*u+M*l*m-a*p*m-f*l*d+a*h*d,y=v*h*u-c*p*u-v*l*m+o*p*m+c*l*d-o*h*d,E=c*M*u-v*f*u+v*a*m-o*M*m-c*a*d+o*f*d,w=v*f*l-c*M*l-v*a*h+o*M*h+c*a*p-o*f*p,R=t*b+i*y+r*E+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=b*C,e[1]=(M*h*s-f*p*s-M*r*m+i*p*m+f*r*d-i*h*d)*C,e[2]=(a*p*s-M*l*s+M*r*u-i*p*u-a*r*d+i*l*d)*C,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*m-i*l*m)*C,e[4]=y*C,e[5]=(c*p*s-v*h*s+v*r*m-t*p*m-c*r*d+t*h*d)*C,e[6]=(v*l*s-o*p*s-v*r*u+t*p*u+o*r*d-t*l*d)*C,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*m+t*l*m)*C,e[8]=E*C,e[9]=(v*f*s-c*M*s-v*i*m+t*M*m+c*i*d-t*f*d)*C,e[10]=(o*M*s-v*a*s+v*i*u-t*M*u-o*i*d+t*a*d)*C,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*m-t*a*m)*C,e[12]=w*C,e[13]=(c*M*r-v*f*r+v*i*h-t*M*h-c*i*p+t*f*p)*C,e[14]=(v*a*r-o*M*r-v*i*l+t*M*l+o*i*p-t*a*p)*C,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,m=s*c,v=s*f,M=o*c,p=o*f,d=a*f,b=l*u,y=l*c,E=l*f,w=i.x,R=i.y,C=i.z;return r[0]=(1-(M+d))*w,r[1]=(m+E)*w,r[2]=(v-y)*w,r[3]=0,r[4]=(m-E)*R,r[5]=(1-(h+d))*R,r[6]=(p+b)*R,r[7]=0,r[8]=(v+y)*C,r[9]=(p-b)*C,r[10]=(1-(h+M))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=qi.set(r[0],r[1],r[2]).length();const o=qi.set(r[4],r[5],r[6]).length(),a=qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],nn.copy(this);const u=1/s,c=1/o,f=1/a;return nn.elements[0]*=u,nn.elements[1]*=u,nn.elements[2]*=u,nn.elements[4]*=c,nn.elements[5]*=c,nn.elements[6]*=c,nn.elements[8]*=f,nn.elements[9]*=f,nn.elements[10]*=f,t.setFromRotationMatrix(nn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Vn){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let m,v;if(a===Vn)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Js)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Vn){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),h=(t+e)*u,m=(i+r)*c;let v,M;if(a===Vn)v=(o+s)*f,M=-2*f;else if(a===Js)v=s*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qi=new q,nn=new ht,f_=new q(0,0,0),h_=new q(1,1,1),Qn=new q,gs=new q,Xt=new q,Nc=new ht,Fc=new ts;class qn{constructor(e=0,t=0,i=0,r=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Nc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fc.setFromEuler(this),this.setFromQuaternion(Fc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class jf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let d_=0;const Oc=new q,$i=new ts,Dn=new ht,_s=new q,Rr=new q,p_=new q,m_=new ts,Bc=new q(1,0,0),zc=new q(0,1,0),Hc=new q(0,0,1),g_={type:"added"},__={type:"removed"},Ka={type:"childadded",child:null},ja={type:"childremoved",child:null};class Yt extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new q,t=new qn,i=new ts,r=new q(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ve}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Bc,e)}rotateY(e){return this.rotateOnAxis(zc,e)}rotateZ(e){return this.rotateOnAxis(Hc,e)}translateOnAxis(e,t){return Oc.copy(e).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bc,e)}translateY(e){return this.translateOnAxis(zc,e)}translateZ(e){return this.translateOnAxis(Hc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_s.copy(e):_s.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Rr,_s,this.up):Dn.lookAt(_s,Rr,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),$i.setFromRotationMatrix(Dn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(g_),Ka.child=e,this.dispatchEvent(Ka),Ka.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(__),ja.child=e,this.dispatchEvent(ja),ja.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,p_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,m_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new q(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new q,In=new q,Za=new q,Un=new q,Yi=new q,Ki=new q,Gc=new q,Ja=new q,Qa=new q,eo=new q;class yn{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),rn.subVectors(e,t),r.cross(rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){rn.subVectors(r,t),In.subVectors(i,t),Za.subVectors(e,t);const o=rn.dot(rn),a=rn.dot(In),l=rn.dot(Za),u=In.dot(In),c=In.dot(Za),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(u*l-a*c)*h,v=(o*c-a*l)*h;return s.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Un.x),l.addScaledVector(o,Un.y),l.addScaledVector(a,Un.z),l)}static isFrontFacing(e,t,i,r){return rn.subVectors(i,t),In.subVectors(e,t),rn.cross(In).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),rn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return yn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Yi.subVectors(r,i),Ki.subVectors(s,i),Ja.subVectors(e,i);const l=Yi.dot(Ja),u=Ki.dot(Ja);if(l<=0&&u<=0)return t.copy(i);Qa.subVectors(e,r);const c=Yi.dot(Qa),f=Ki.dot(Qa);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Yi,o);eo.subVectors(e,s);const m=Yi.dot(eo),v=Ki.dot(eo);if(v>=0&&m<=v)return t.copy(s);const M=m*u-l*v;if(M<=0&&u>=0&&v<=0)return a=u/(u-v),t.copy(i).addScaledVector(Ki,a);const p=c*v-m*f;if(p<=0&&f-c>=0&&m-v>=0)return Gc.subVectors(s,r),a=(f-c)/(f-c+(m-v)),t.copy(r).addScaledVector(Gc,a);const d=1/(p+M+h);return o=M*d,a=h*d,t.copy(i).addScaledVector(Yi,o).addScaledVector(Ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},vs={h:0,s:0,l:0};function to(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=t_(e,1),t=Vt(t,0,1),i=Vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=to(o,s,e+1/3),this.g=to(o,s,e),this.b=to(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=vn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){const i=Zf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}copyLinearToSRGB(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return Ze.fromWorkingColorSpace(At.copy(this),e),Math.round(Vt(At.r*255,0,255))*65536+Math.round(Vt(At.g*255,0,255))*256+Math.round(Vt(At.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(At.copy(this),t);const i=At.r,r=At.g,s=At.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=vn){Ze.fromWorkingColorSpace(At.copy(this),e);const t=At.r,i=At.g,r=At.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(vs);const i=za(ei.h,vs.h,t),r=za(ei.s,vs.s,t),s=za(ei.l,vs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Je;Je.NAMES=Zf;let v_=0;class pa extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=es(),this.name="",this.type="Material",this.blending=fr,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wo,this.blendDst=Co,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wo&&(i.blendSrc=this.blendSrc),this.blendDst!==Co&&(i.blendDst=this.blendDst),this.blendEquation!==Ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Jf extends pa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Ff,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new q,xs=new $e;class bn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return i_("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ar(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ar(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ar(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ar(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ar(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cc&&(e.usage=this.usage),e}}class Qf extends bn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class eh extends bn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Fi extends bn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let x_=0;const Jt=new ht,no=new Yt,ji=new q,qt=new ns,Pr=new ns,gt=new q;class zi extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qf(e)?eh:Qf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,i){return Jt.makeTranslation(e,t,i),this.applyMatrix4(Jt),this}scale(e,t,i){return Jt.makeScale(e,t,i),this.applyMatrix4(Jt),this}lookAt(e){return no.lookAt(e),no.updateMatrix(),this.applyMatrix4(no.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Fi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Pr.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(qt.min,Pr.min),qt.expandByPoint(gt),gt.addVectors(qt.max,Pr.max),qt.expandByPoint(gt)):(qt.expandByPoint(Pr.min),qt.expandByPoint(Pr.max))}qt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)gt.fromBufferAttribute(a,u),l&&(ji.fromBufferAttribute(e,u),gt.add(ji)),r=Math.max(r,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new q,l[U]=new q;const u=new q,c=new q,f=new q,h=new $e,m=new $e,v=new $e,M=new q,p=new q;function d(U,F,x){u.fromBufferAttribute(i,U),c.fromBufferAttribute(i,F),f.fromBufferAttribute(i,x),h.fromBufferAttribute(s,U),m.fromBufferAttribute(s,F),v.fromBufferAttribute(s,x),c.sub(u),f.sub(u),m.sub(h),v.sub(h);const A=1/(m.x*v.y-v.x*m.y);isFinite(A)&&(M.copy(c).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(A),p.copy(f).multiplyScalar(m.x).addScaledVector(c,-v.x).multiplyScalar(A),a[U].add(M),a[F].add(M),a[x].add(M),l[U].add(p),l[F].add(p),l[x].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,F=b.length;U<F;++U){const x=b[U],A=x.start,z=x.count;for(let te=A,L=A+z;te<L;te+=3)d(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const y=new q,E=new q,w=new q,R=new q;function C(U){w.fromBufferAttribute(r,U),R.copy(w);const F=a[U];y.copy(F),y.sub(w.multiplyScalar(w.dot(F))).normalize(),E.crossVectors(R,F);const A=E.dot(l[U])<0?-1:1;o.setXYZW(U,y.x,y.y,y.z,A)}for(let U=0,F=b.length;U<F;++U){const x=b[U],A=x.start,z=x.count;for(let te=A,L=A+z;te<L;te+=3)C(e.getX(te+0)),C(e.getX(te+1)),C(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new q,s=new q,o=new q,a=new q,l=new q,u=new q,c=new q,f=new q;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),M=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,M),o.fromBufferAttribute(t,p),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let m=0,v=0;for(let M=0,p=l.length;M<p;M++){a.isInterleavedBufferAttribute?m=l[M]*a.data.stride+a.offset:m=l[M]*c;for(let d=0;d<c;d++)h[v++]=u[m++]}return new bn(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const m=u[f];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,m=f.length;h<m;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vc=new ht,Mi=new u_,Ms=new sl,kc=new q,Zi=new q,Ji=new q,Qi=new q,io=new q,Ss=new q,Es=new $e,ys=new $e,Ts=new $e,Wc=new q,Xc=new q,qc=new q,bs=new q,As=new q;class Tn extends Yt{constructor(e=new zi,t=new Jf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ss.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(io.fromBufferAttribute(f,e),o?Ss.addScaledVector(io,c):Ss.addScaledVector(io.sub(t),c))}t.add(Ss)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ms.copy(i.boundingSphere),Ms.applyMatrix4(s),Mi.copy(e.ray).recast(e.near),!(Ms.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Ms,kc)===null||Mi.origin.distanceToSquared(kc)>(e.far-e.near)**2))&&(Vc.copy(s).invert(),Mi.copy(e.ray).applyMatrix4(Vc),!(i.boundingBox!==null&&Mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,M=h.length;v<M;v++){const p=h[v],d=o[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,w=y;E<w;E+=3){const R=a.getX(E),C=a.getX(E+1),U=a.getX(E+2);r=ws(this,d,e,i,u,c,f,R,C,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let p=v,d=M;p<d;p+=3){const b=a.getX(p),y=a.getX(p+1),E=a.getX(p+2);r=ws(this,o,e,i,u,c,f,b,y,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,M=h.length;v<M;v++){const p=h[v],d=o[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,w=y;E<w;E+=3){const R=E,C=E+1,U=E+2;r=ws(this,d,e,i,u,c,f,R,C,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=v,d=M;p<d;p+=3){const b=p,y=p+1,E=p+2;r=ws(this,o,e,i,u,c,f,b,y,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function M_(n,e,t,i,r,s,o,a){let l;if(e.side===kt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ui,a),l===null)return null;As.copy(a),As.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(As);return u<t.near||u>t.far?null:{distance:u,point:As.clone(),object:n}}function ws(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Zi),n.getVertexPosition(l,Ji),n.getVertexPosition(u,Qi);const c=M_(n,e,t,i,Zi,Ji,Qi,bs);if(c){r&&(Es.fromBufferAttribute(r,a),ys.fromBufferAttribute(r,l),Ts.fromBufferAttribute(r,u),c.uv=yn.getInterpolation(bs,Zi,Ji,Qi,Es,ys,Ts,new $e)),s&&(Es.fromBufferAttribute(s,a),ys.fromBufferAttribute(s,l),Ts.fromBufferAttribute(s,u),c.uv1=yn.getInterpolation(bs,Zi,Ji,Qi,Es,ys,Ts,new $e)),o&&(Wc.fromBufferAttribute(o,a),Xc.fromBufferAttribute(o,l),qc.fromBufferAttribute(o,u),c.normal=yn.getInterpolation(bs,Zi,Ji,Qi,Wc,Xc,qc,new q),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new q,materialIndex:0};yn.getNormal(Zi,Ji,Qi,f.normal),c.face=f}return c}class is extends zi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,m=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Fi(u,3)),this.setAttribute("normal",new Fi(c,3)),this.setAttribute("uv",new Fi(f,2));function v(M,p,d,b,y,E,w,R,C,U,F){const x=E/C,A=w/U,z=E/2,te=w/2,L=R/2,ee=C+1,W=U+1;let Q=0,G=0;const re=new q;for(let ae=0;ae<W;ae++){const fe=ae*A-te;for(let _e=0;_e<ee;_e++){const Ue=_e*x-z;re[M]=Ue*b,re[p]=fe*y,re[d]=L,u.push(re.x,re.y,re.z),re[M]=0,re[p]=0,re[d]=R>0?1:-1,c.push(re.x,re.y,re.z),f.push(_e/C),f.push(1-ae/U),Q+=1}}for(let ae=0;ae<U;ae++)for(let fe=0;fe<C;fe++){const _e=h+fe+ee*ae,Ue=h+fe+ee*(ae+1),Z=h+(fe+1)+ee*(ae+1),ce=h+(fe+1)+ee*ae;l.push(_e,Ue,ce),l.push(Ue,Z,ce),G+=6}a.addGroup(m,G,F),m+=G,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _r(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Dt(n){const e={};for(let t=0;t<n.length;t++){const i=_r(n[t]);for(const r in i)e[r]=i[r]}return e}function S_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function th(n){return n.getRenderTarget()===null?n.outputColorSpace:Ze.workingColorSpace}const E_={clone:_r,merge:Dt};var y_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends pa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=y_,this.fragmentShader=T_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=S_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class nh extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new q,$c=new $e,Yc=new $e;class sn extends nh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uo*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,$c,Yc),t.subVectors(Yc,$c)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ba*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const er=-90,tr=1;class b_ extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new sn(er,tr,e,t);r.layers=this.layers,this.add(r);const s=new sn(er,tr,e,t);s.layers=this.layers,this.add(s);const o=new sn(er,tr,e,t);o.layers=this.layers,this.add(o);const a=new sn(er,tr,e,t);a.layers=this.layers,this.add(a);const l=new sn(er,tr,e,t);l.layers=this.layers,this.add(l);const u=new sn(er,tr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Js)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class ih extends Bt{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:pr,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class A_ extends Oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ih(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new is(5,5,5),s=new $n({name:"CubemapFromEquirect",uniforms:_r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:ai});s.uniforms.tEquirect.value=t;const o=new Tn(r,s),a=t.minFilter;return t.minFilter===Pi&&(t.minFilter=Gt),new b_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const ro=new q,w_=new q,C_=new Ve;class bi{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ro.subVectors(i,t).cross(w_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ro),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||C_.getNormalMatrix(e),r=this.coplanarPoint(ro).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new sl,Cs=new q;class rh{constructor(e=new bi,t=new bi,i=new bi,r=new bi,s=new bi,o=new bi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],m=r[8],v=r[9],M=r[10],p=r[11],d=r[12],b=r[13],y=r[14],E=r[15];if(i[0].setComponents(l-s,h-u,p-m,E-d).normalize(),i[1].setComponents(l+s,h+u,p+m,E+d).normalize(),i[2].setComponents(l+o,h+c,p+v,E+b).normalize(),i[3].setComponents(l-o,h-c,p-v,E-b).normalize(),i[4].setComponents(l-a,h-f,p-M,E-y).normalize(),t===Vn)i[5].setComponents(l+a,h+f,p+M,E+y).normalize();else if(t===Js)i[5].setComponents(a,f,M,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Cs.x=r.normal.x>0?e.max.x:e.min.x,Cs.y=r.normal.y>0?e.max.y:e.min.y,Cs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function R_(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,h=u.usage,m=f.byteLength,v=n.createBuffer();n.bindBuffer(c,v),n.bufferData(c,f,h),u.onUploadCallback();let M;if(f instanceof Float32Array)M=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)M=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)M=n.SHORT;else if(f instanceof Uint32Array)M=n.UNSIGNED_INT;else if(f instanceof Int32Array)M=n.INT;else if(f instanceof Int8Array)M=n.BYTE;else if(f instanceof Uint8Array)M=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)M=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:M,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:m}}function s(u,c,f){const h=c.array,m=c._updateRange,v=c.updateRanges;if(n.bindBuffer(f,u),m.count===-1&&v.length===0&&n.bufferSubData(f,0,h),v.length!==0){for(let M=0,p=v.length;M<p;M++){const d=v[M];t?n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}c.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:o,remove:a,update:l}}class rs extends zi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,m=[],v=[],M=[],p=[];for(let d=0;d<c;d++){const b=d*h-o;for(let y=0;y<u;y++){const E=y*f-s;v.push(E,-b,0),M.push(0,0,1),p.push(y/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<a;b++){const y=b+u*d,E=b+u*(d+1),w=b+1+u*(d+1),R=b+1+u*d;m.push(y,E,R),m.push(E,w,R)}this.setIndex(m),this.setAttribute("position",new Fi(v,3)),this.setAttribute("normal",new Fi(M,3)),this.setAttribute("uv",new Fi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.widthSegments,e.heightSegments)}}var P_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L_=`#ifdef USE_ALPHAHASH
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
#endif`,D_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,N_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F_=`#ifdef USE_AOMAP
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
#endif`,O_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B_=`#ifdef USE_BATCHING
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
#endif`,z_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,H_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,k_=`#ifdef USE_IRIDESCENCE
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
#endif`,W_=`#ifdef USE_BUMPMAP
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
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Z_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,J_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Q_=`#define PI 3.141592653589793
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
} // validated`,ev=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tv=`vec3 transformedNormal = objectNormal;
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
#endif`,nv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,av="gl_FragColor = linearToOutputTexel( gl_FragColor );",ov=`
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
}`,lv=`#ifdef USE_ENVMAP
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
#endif`,cv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uv=`#ifdef USE_ENVMAP
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
#endif`,fv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hv=`#ifdef USE_ENVMAP
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
#endif`,dv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_v=`#ifdef USE_GRADIENTMAP
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
}`,vv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ev=`uniform bool receiveShadow;
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
#endif`,yv=`#ifdef USE_ENVMAP
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
#endif`,Tv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Av=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cv=`PhysicalMaterial material;
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
}`,Pv=`
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
#endif`,Lv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Fv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ov=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hv=`#if defined( USE_POINTS_UV )
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
#endif`,Gv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xv=`#ifdef USE_MORPHNORMALS
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
#endif`,qv=`#ifdef USE_MORPHTARGETS
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
#endif`,$v=`#ifdef USE_MORPHTARGETS
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
#endif`,Yv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qv=`#ifdef USE_NORMALMAP
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
#endif`,e0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,a0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,p0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,m0=`float getShadowMask() {
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
}`,g0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_0=`#ifdef USE_SKINNING
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
#endif`,v0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x0=`#ifdef USE_SKINNING
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
#endif`,M0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,E0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,T0=`#ifdef USE_TRANSMISSION
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
#endif`,b0=`#ifdef USE_TRANSMISSION
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
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`;const P0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L0=`uniform sampler2D t2D;
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
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,N0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`#include <common>
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
}`,O0=`#if DEPTH_PACKING == 3200
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
}`,B0=`#define DISTANCE
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
}`,z0=`#define DISTANCE
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
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`uniform float scale;
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
}`,k0=`uniform vec3 diffuse;
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
}`,W0=`#include <common>
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
}`,X0=`uniform vec3 diffuse;
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
}`,q0=`#define LAMBERT
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
}`,$0=`#define LAMBERT
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
}`,Y0=`#define MATCAP
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
}`,K0=`#define MATCAP
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
}`,j0=`#define NORMAL
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
}`,Z0=`#define NORMAL
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
}`,J0=`#define PHONG
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
}`,Q0=`#define PHONG
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
}`,ex=`#define STANDARD
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
}`,tx=`#define STANDARD
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
}`,nx=`#define TOON
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
}`,ix=`#define TOON
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
}`,rx=`uniform float size;
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
}`,sx=`uniform vec3 diffuse;
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
}`,ax=`#include <common>
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
}`,lx=`uniform float rotation;
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
}`,cx=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:P_,alphahash_pars_fragment:L_,alphamap_fragment:D_,alphamap_pars_fragment:I_,alphatest_fragment:U_,alphatest_pars_fragment:N_,aomap_fragment:F_,aomap_pars_fragment:O_,batching_pars_vertex:B_,batching_vertex:z_,begin_vertex:H_,beginnormal_vertex:G_,bsdfs:V_,iridescence_fragment:k_,bumpmap_pars_fragment:W_,clipping_planes_fragment:X_,clipping_planes_pars_fragment:q_,clipping_planes_pars_vertex:$_,clipping_planes_vertex:Y_,color_fragment:K_,color_pars_fragment:j_,color_pars_vertex:Z_,color_vertex:J_,common:Q_,cube_uv_reflection_fragment:ev,defaultnormal_vertex:tv,displacementmap_pars_vertex:nv,displacementmap_vertex:iv,emissivemap_fragment:rv,emissivemap_pars_fragment:sv,colorspace_fragment:av,colorspace_pars_fragment:ov,envmap_fragment:lv,envmap_common_pars_fragment:cv,envmap_pars_fragment:uv,envmap_pars_vertex:fv,envmap_physical_pars_fragment:yv,envmap_vertex:hv,fog_vertex:dv,fog_pars_vertex:pv,fog_fragment:mv,fog_pars_fragment:gv,gradientmap_pars_fragment:_v,lightmap_fragment:vv,lightmap_pars_fragment:xv,lights_lambert_fragment:Mv,lights_lambert_pars_fragment:Sv,lights_pars_begin:Ev,lights_toon_fragment:Tv,lights_toon_pars_fragment:bv,lights_phong_fragment:Av,lights_phong_pars_fragment:wv,lights_physical_fragment:Cv,lights_physical_pars_fragment:Rv,lights_fragment_begin:Pv,lights_fragment_maps:Lv,lights_fragment_end:Dv,logdepthbuf_fragment:Iv,logdepthbuf_pars_fragment:Uv,logdepthbuf_pars_vertex:Nv,logdepthbuf_vertex:Fv,map_fragment:Ov,map_pars_fragment:Bv,map_particle_fragment:zv,map_particle_pars_fragment:Hv,metalnessmap_fragment:Gv,metalnessmap_pars_fragment:Vv,morphinstance_vertex:kv,morphcolor_vertex:Wv,morphnormal_vertex:Xv,morphtarget_pars_vertex:qv,morphtarget_vertex:$v,normal_fragment_begin:Yv,normal_fragment_maps:Kv,normal_pars_fragment:jv,normal_pars_vertex:Zv,normal_vertex:Jv,normalmap_pars_fragment:Qv,clearcoat_normal_fragment_begin:e0,clearcoat_normal_fragment_maps:t0,clearcoat_pars_fragment:n0,iridescence_pars_fragment:i0,opaque_fragment:r0,packing:s0,premultiplied_alpha_fragment:a0,project_vertex:o0,dithering_fragment:l0,dithering_pars_fragment:c0,roughnessmap_fragment:u0,roughnessmap_pars_fragment:f0,shadowmap_pars_fragment:h0,shadowmap_pars_vertex:d0,shadowmap_vertex:p0,shadowmask_pars_fragment:m0,skinbase_vertex:g0,skinning_pars_vertex:_0,skinning_vertex:v0,skinnormal_vertex:x0,specularmap_fragment:M0,specularmap_pars_fragment:S0,tonemapping_fragment:E0,tonemapping_pars_fragment:y0,transmission_fragment:T0,transmission_pars_fragment:b0,uv_pars_fragment:A0,uv_pars_vertex:w0,uv_vertex:C0,worldpos_vertex:R0,background_vert:P0,background_frag:L0,backgroundCube_vert:D0,backgroundCube_frag:I0,cube_vert:U0,cube_frag:N0,depth_vert:F0,depth_frag:O0,distanceRGBA_vert:B0,distanceRGBA_frag:z0,equirect_vert:H0,equirect_frag:G0,linedashed_vert:V0,linedashed_frag:k0,meshbasic_vert:W0,meshbasic_frag:X0,meshlambert_vert:q0,meshlambert_frag:$0,meshmatcap_vert:Y0,meshmatcap_frag:K0,meshnormal_vert:j0,meshnormal_frag:Z0,meshphong_vert:J0,meshphong_frag:Q0,meshphysical_vert:ex,meshphysical_frag:tx,meshtoon_vert:nx,meshtoon_frag:ix,points_vert:rx,points_frag:sx,shadow_vert:ax,shadow_frag:ox,sprite_vert:lx,sprite_frag:cx},pe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Sn={basic:{uniforms:Dt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Dt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Dt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Dt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Dt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Dt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Dt([pe.points,pe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Dt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Dt([pe.common,pe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Dt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Dt([pe.sprite,pe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Dt([pe.common,pe.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Dt([pe.lights,pe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Sn.physical={uniforms:Dt([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Rs={r:0,b:0,g:0},Ei=new qn,ux=new ht;function fx(n,e,t,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,u,c,f=null,h=0,m=null;function v(p,d){let b=!1,y=d.isScene===!0?d.background:null;y&&y.isTexture&&(y=(d.backgroundBlurriness>0?t:e).get(y)),y===null?M(a,l):y&&y.isColor&&(M(y,1),b=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ha)?(c===void 0&&(c=new Tn(new is(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:_r(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Ei.copy(d.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ux.makeRotationFromEuler(Ei)),c.material.toneMapped=Ze.getTransfer(y.colorSpace)!==rt,(f!==y||h!==y.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new Tn(new rs(2,2),new $n({name:"BackgroundMaterial",uniforms:_r(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(y.colorSpace)!==rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function M(p,d){p.getRGB(Rs,th(n)),i.buffers.color.setClear(Rs.r,Rs.g,Rs.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,M(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,M(a,l)},render:v}}function hx(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,c=!1;function f(L,ee,W,Q,G){let re=!1;if(o){const ae=M(Q,W,ee);u!==ae&&(u=ae,m(u.object)),re=d(L,Q,W,G),re&&b(L,Q,W,G)}else{const ae=ee.wireframe===!0;(u.geometry!==Q.id||u.program!==W.id||u.wireframe!==ae)&&(u.geometry=Q.id,u.program=W.id,u.wireframe=ae,re=!0)}G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(re||c)&&(c=!1,U(L,ee,W,Q),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function v(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function M(L,ee,W){const Q=W.wireframe===!0;let G=a[L.id];G===void 0&&(G={},a[L.id]=G);let re=G[ee.id];re===void 0&&(re={},G[ee.id]=re);let ae=re[Q];return ae===void 0&&(ae=p(h()),re[Q]=ae),ae}function p(L){const ee=[],W=[],Q=[];for(let G=0;G<r;G++)ee[G]=0,W[G]=0,Q[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:W,attributeDivisors:Q,object:L,attributes:{},index:null}}function d(L,ee,W,Q){const G=u.attributes,re=ee.attributes;let ae=0;const fe=W.getAttributes();for(const _e in fe)if(fe[_e].location>=0){const Z=G[_e];let ce=re[_e];if(ce===void 0&&(_e==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),_e==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor)),Z===void 0||Z.attribute!==ce||ce&&Z.data!==ce.data)return!0;ae++}return u.attributesNum!==ae||u.index!==Q}function b(L,ee,W,Q){const G={},re=ee.attributes;let ae=0;const fe=W.getAttributes();for(const _e in fe)if(fe[_e].location>=0){let Z=re[_e];Z===void 0&&(_e==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),_e==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));const ce={};ce.attribute=Z,Z&&Z.data&&(ce.data=Z.data),G[_e]=ce,ae++}u.attributes=G,u.attributesNum=ae,u.index=Q}function y(){const L=u.newAttributes;for(let ee=0,W=L.length;ee<W;ee++)L[ee]=0}function E(L){w(L,0)}function w(L,ee){const W=u.newAttributes,Q=u.enabledAttributes,G=u.attributeDivisors;W[L]=1,Q[L]===0&&(n.enableVertexAttribArray(L),Q[L]=1),G[L]!==ee&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,ee),G[L]=ee)}function R(){const L=u.newAttributes,ee=u.enabledAttributes;for(let W=0,Q=ee.length;W<Q;W++)ee[W]!==L[W]&&(n.disableVertexAttribArray(W),ee[W]=0)}function C(L,ee,W,Q,G,re,ae){ae===!0?n.vertexAttribIPointer(L,ee,W,G,re):n.vertexAttribPointer(L,ee,W,Q,G,re)}function U(L,ee,W,Q){if(i.isWebGL2===!1&&(L.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const G=Q.attributes,re=W.getAttributes(),ae=ee.defaultAttributeValues;for(const fe in re){const _e=re[fe];if(_e.location>=0){let Ue=G[fe];if(Ue===void 0&&(fe==="instanceMatrix"&&L.instanceMatrix&&(Ue=L.instanceMatrix),fe==="instanceColor"&&L.instanceColor&&(Ue=L.instanceColor)),Ue!==void 0){const Z=Ue.normalized,ce=Ue.itemSize,xe=t.get(Ue);if(xe===void 0)continue;const Re=xe.buffer,Ae=xe.type,Te=xe.bytesPerElement,qe=i.isWebGL2===!0&&(Ae===n.INT||Ae===n.UNSIGNED_INT||Ue.gpuType===Bf);if(Ue.isInterleavedBufferAttribute){const Ie=Ue.data,_=Ie.stride,P=Ue.offset;if(Ie.isInstancedInterleavedBuffer){for(let N=0;N<_e.locationSize;N++)w(_e.location+N,Ie.meshPerAttribute);L.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let N=0;N<_e.locationSize;N++)E(_e.location+N);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let N=0;N<_e.locationSize;N++)C(_e.location+N,ce/_e.locationSize,Ae,Z,_*Te,(P+ce/_e.locationSize*N)*Te,qe)}else{if(Ue.isInstancedBufferAttribute){for(let Ie=0;Ie<_e.locationSize;Ie++)w(_e.location+Ie,Ue.meshPerAttribute);L.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let Ie=0;Ie<_e.locationSize;Ie++)E(_e.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let Ie=0;Ie<_e.locationSize;Ie++)C(_e.location+Ie,ce/_e.locationSize,Ae,Z,ce*Te,ce/_e.locationSize*Ie*Te,qe)}}else if(ae!==void 0){const Z=ae[fe];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(_e.location,Z);break;case 3:n.vertexAttrib3fv(_e.location,Z);break;case 4:n.vertexAttrib4fv(_e.location,Z);break;default:n.vertexAttrib1fv(_e.location,Z)}}}}R()}function F(){z();for(const L in a){const ee=a[L];for(const W in ee){const Q=ee[W];for(const G in Q)v(Q[G].object),delete Q[G];delete ee[W]}delete a[L]}}function x(L){if(a[L.id]===void 0)return;const ee=a[L.id];for(const W in ee){const Q=ee[W];for(const G in Q)v(Q[G].object),delete Q[G];delete ee[W]}delete a[L.id]}function A(L){for(const ee in a){const W=a[ee];if(W[L.id]===void 0)continue;const Q=W[L.id];for(const G in Q)v(Q[G].object),delete Q[G];delete W[L.id]}}function z(){te(),c=!0,u!==l&&(u=l,m(u.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:z,resetDefaultState:te,dispose:F,releaseStatesOfGeometry:x,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:E,disableUnusedAttributes:R}}function dx(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,f){n.drawArrays(s,c,f),t.update(f,s,1)}function l(c,f,h){if(h===0)return;let m,v;if(r)m=n,v="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](s,c,f,h),t.update(f,s,h)}function u(c,f,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<h;v++)this.render(c[v],f[v]);else{m.multiDrawArraysWEBGL(s,c,0,f,0,h);let v=0;for(let M=0;M<h;M++)v+=f[M];t.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function px(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),M=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=h>0,E=o||e.has("OES_texture_float"),w=y&&E,R=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:v,maxAttributes:M,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:b,vertexTextures:y,floatFragmentTextures:E,floatVertexTextures:w,maxSamples:R}}function mx(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new bi,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,m){const v=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||v===null||v.length===0||s&&!p)s?c(null):u();else{const b=s?0:i,y=b*4;let E=d.clippingState||null;l.value=E,E=c(v,h,y,m);for(let w=0;w!==y;++w)E[w]=t[w];d.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,m,v){const M=f!==null?f.length:0;let p=null;if(M!==0){if(p=l.value,v!==!0||p===null){const d=m+M*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<d)&&(p=new Float32Array(d));for(let y=0,E=m;y!==M;++y,E+=4)o.copy(f[y]).applyMatrix4(b,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function gx(n){let e=new WeakMap;function t(o,a){return a===Ro?o.mapping=pr:a===Po&&(o.mapping=mr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ro||a===Po)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new A_(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ah extends nh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const rr=4,Kc=[.125,.215,.35,.446,.526,.582],Ri=20,so=new ah,jc=new Je;let ao=null,oo=0,lo=0;const Ai=(1+Math.sqrt(5))/2,nr=1/Ai,Zc=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,Ai,nr),new q(0,Ai,-nr),new q(nr,0,Ai),new q(-nr,0,Ai),new q(Ai,nr,0),new q(-Ai,nr,0)];class Jc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ao=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ao,oo,lo),e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pr||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ao=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Kr,format:on,colorSpace:fi,depthBuffer:!1},r=Qc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_x(s)),this._blurMaterial=vx(s,e,t)}return r}_compileMaterial(e){const t=new Tn(this._lodPlanes[0],e);this._renderer.compile(t,so)}_sceneToCubeUV(e,t,i,r){const a=new sn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(jc),c.toneMapping=oi,c.autoClear=!1;const m=new Jf({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),v=new Tn(new is,m);let M=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,M=!0):(m.color.copy(jc),M=!0);for(let d=0;d<6;d++){const b=d%3;b===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):b===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const y=this._cubeSize;Ps(r,b*y,d>2?y:0,y,y),c.setRenderTarget(r),M&&c.render(v,a),c.render(e,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===pr||e.mapping===mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Tn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ps(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,so)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Zc[(r-1)%Zc.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Tn(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ri-1),M=s/v,p=isFinite(s)?1+Math.floor(c*M):Ri;p>Ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ri}`);const d=[];let b=0;for(let C=0;C<Ri;++C){const U=C/M,F=Math.exp(-U*U/2);d.push(F),C===0?b+=F:C<p&&(b+=2*F)}for(let C=0;C<d.length;C++)d[C]=d[C]/b;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=v,h.mipInt.value=y-i;const E=this._sizeLods[r],w=3*E*(r>y-rr?r-y+rr:0),R=4*(this._cubeSize-E);Ps(t,w,R,3*E,2*E),l.setRenderTarget(t),l.render(f,so)}}function _x(n){const e=[],t=[],i=[];let r=n;const s=n-rr+1+Kc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-rr?l=Kc[o-n+rr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,v=6,M=3,p=2,d=1,b=new Float32Array(M*v*m),y=new Float32Array(p*v*m),E=new Float32Array(d*v*m);for(let R=0;R<m;R++){const C=R%3*2/3-1,U=R>2?0:-1,F=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];b.set(F,M*v*R),y.set(h,p*v*R);const x=[R,R,R,R,R,R];E.set(x,d*v*R)}const w=new zi;w.setAttribute("position",new bn(b,M)),w.setAttribute("uv",new bn(y,p)),w.setAttribute("faceIndex",new bn(E,d)),e.push(w),r>rr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Qc(n,e,t){const i=new Oi(n,e,t);return i.texture.mapping=ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ps(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function vx(n,e,t){const i=new Float32Array(Ri),r=new q(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:al(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function eu(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:al(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function tu(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function al(){return`

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
	`}function xx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Ro||l===Po,c=l===pr||l===mr;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Jc(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new Jc(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Mx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Sx(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const M=h.morphAttributes[v];for(let p=0,d=M.length;p<d;p++)e.remove(M[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const M=m[v];for(let p=0,d=M.length;p<d;p++)e.update(M[p],n.ARRAY_BUFFER)}}function u(f){const h=[],m=f.index,v=f.attributes.position;let M=0;if(m!==null){const b=m.array;M=m.version;for(let y=0,E=b.length;y<E;y+=3){const w=b[y+0],R=b[y+1],C=b[y+2];h.push(w,R,R,C,C,w)}}else if(v!==void 0){const b=v.array;M=v.version;for(let y=0,E=b.length/3-1;y<E;y+=3){const w=y+0,R=y+1,C=y+2;h.push(w,R,R,C,C,w)}}else return;const p=new(qf(h)?eh:Qf)(h,1);p.version=M;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function c(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function Ex(n,e,t,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function u(m){a=m.type,l=m.bytesPerElement}function c(m,v){n.drawElements(s,v,a,m*l),t.update(v,s,1)}function f(m,v,M){if(M===0)return;let p,d;if(r)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,v,a,m*l,M),t.update(v,s,M)}function h(m,v,M){if(M===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<M;d++)this.render(m[d]/l,v[d]);else{p.multiDrawElementsWEBGL(s,v,0,a,m,0,M);let d=0;for(let b=0;b<M;b++)d+=v[b];t.update(d,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function yx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Tx(n,e){return n[0]-e[0]}function bx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Ax(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new yt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,M=v!==void 0?v.length:0;let p=s.get(c);if(p===void 0||p.count!==M){let te=function(){A.dispose(),s.delete(c),c.removeEventListener("dispose",te)};var m=te;p!==void 0&&p.texture.dispose();const d=c.morphAttributes.position!==void 0,b=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,E=c.morphAttributes.position||[],w=c.morphAttributes.normal||[],R=c.morphAttributes.color||[];let C=0;d===!0&&(C=1),b===!0&&(C=2),y===!0&&(C=3);let U=c.attributes.position.count*C,F=1;U>e.maxTextureSize&&(F=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const x=new Float32Array(U*F*4*M),A=new Kf(x,U,F,M);A.type=Gn,A.needsUpdate=!0;const z=C*4;for(let L=0;L<M;L++){const ee=E[L],W=w[L],Q=R[L],G=U*F*4*L;for(let re=0;re<ee.count;re++){const ae=re*z;d===!0&&(o.fromBufferAttribute(ee,re),x[G+ae+0]=o.x,x[G+ae+1]=o.y,x[G+ae+2]=o.z,x[G+ae+3]=0),b===!0&&(o.fromBufferAttribute(W,re),x[G+ae+4]=o.x,x[G+ae+5]=o.y,x[G+ae+6]=o.z,x[G+ae+7]=0),y===!0&&(o.fromBufferAttribute(Q,re),x[G+ae+8]=o.x,x[G+ae+9]=o.y,x[G+ae+10]=o.z,x[G+ae+11]=Q.itemSize===4?o.w:1)}}p={count:M,texture:A,size:new $e(U,F)},s.set(c,p),c.addEventListener("dispose",te)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let d=0;for(let y=0;y<h.length;y++)d+=h[y];const b=c.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",h)}f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const v=h===void 0?0:h.length;let M=i[c.id];if(M===void 0||M.length!==v){M=[];for(let E=0;E<v;E++)M[E]=[E,0];i[c.id]=M}for(let E=0;E<v;E++){const w=M[E];w[0]=E,w[1]=h[E]}M.sort(bx);for(let E=0;E<8;E++)E<v&&M[E][1]?(a[E][0]=M[E][0],a[E][1]=M[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(Tx);const p=c.morphAttributes.position,d=c.morphAttributes.normal;let b=0;for(let E=0;E<8;E++){const w=a[E],R=w[0],C=w[1];R!==Number.MAX_SAFE_INTEGER&&C?(p&&c.getAttribute("morphTarget"+E)!==p[R]&&c.setAttribute("morphTarget"+E,p[R]),d&&c.getAttribute("morphNormal"+E)!==d[R]&&c.setAttribute("morphNormal"+E,d[R]),r[E]=C,b+=C):(p&&c.hasAttribute("morphTarget"+E)===!0&&c.deleteAttribute("morphTarget"+E),d&&c.hasAttribute("morphNormal"+E)===!0&&c.deleteAttribute("morphNormal"+E),r[E]=0)}const y=c.morphTargetsRelative?1:1-b;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function wx(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class oh extends Bt{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Ni,c!==Ni&&c!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ni&&(i=ri),i===void 0&&c===gr&&(i=Ui),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:It,this.minFilter=l!==void 0?l:It,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const lh=new Bt,ch=new oh(1,1);ch.compareFunction=Xf;const uh=new Kf,fh=new l_,hh=new ih,nu=[],iu=[],ru=new Float32Array(16),su=new Float32Array(9),au=new Float32Array(4);function xr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=nu[r];if(s===void 0&&(s=new Float32Array(r),nu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ma(n,e){let t=iu[e];t===void 0&&(t=new Int32Array(e),iu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Cx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function Px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function Lx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function Dx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;au.set(i),n.uniformMatrix2fv(this.addr,!1,au),pt(t,i)}}function Ix(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;su.set(i),n.uniformMatrix3fv(this.addr,!1,su),pt(t,i)}}function Ux(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;ru.set(i),n.uniformMatrix4fv(this.addr,!1,ru),pt(t,i)}}function Nx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Fx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function Ox(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function Bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function zx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Hx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function Gx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function Vx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function kx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?ch:lh;t.setTexture2D(e||s,r)}function Wx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||fh,r)}function Xx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||hh,r)}function qx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||uh,r)}function $x(n){switch(n){case 5126:return Cx;case 35664:return Rx;case 35665:return Px;case 35666:return Lx;case 35674:return Dx;case 35675:return Ix;case 35676:return Ux;case 5124:case 35670:return Nx;case 35667:case 35671:return Fx;case 35668:case 35672:return Ox;case 35669:case 35673:return Bx;case 5125:return zx;case 36294:return Hx;case 36295:return Gx;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return Wx;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return qx}}function Yx(n,e){n.uniform1fv(this.addr,e)}function Kx(n,e){const t=xr(e,this.size,2);n.uniform2fv(this.addr,t)}function jx(n,e){const t=xr(e,this.size,3);n.uniform3fv(this.addr,t)}function Zx(n,e){const t=xr(e,this.size,4);n.uniform4fv(this.addr,t)}function Jx(n,e){const t=xr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Qx(n,e){const t=xr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function eM(n,e){const t=xr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function tM(n,e){n.uniform1iv(this.addr,e)}function nM(n,e){n.uniform2iv(this.addr,e)}function iM(n,e){n.uniform3iv(this.addr,e)}function rM(n,e){n.uniform4iv(this.addr,e)}function sM(n,e){n.uniform1uiv(this.addr,e)}function aM(n,e){n.uniform2uiv(this.addr,e)}function oM(n,e){n.uniform3uiv(this.addr,e)}function lM(n,e){n.uniform4uiv(this.addr,e)}function cM(n,e,t){const i=this.cache,r=e.length,s=ma(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||lh,s[o])}function uM(n,e,t){const i=this.cache,r=e.length,s=ma(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||fh,s[o])}function fM(n,e,t){const i=this.cache,r=e.length,s=ma(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||hh,s[o])}function hM(n,e,t){const i=this.cache,r=e.length,s=ma(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||uh,s[o])}function dM(n){switch(n){case 5126:return Yx;case 35664:return Kx;case 35665:return jx;case 35666:return Zx;case 35674:return Jx;case 35675:return Qx;case 35676:return eM;case 5124:case 35670:return tM;case 35667:case 35671:return nM;case 35668:case 35672:return iM;case 35669:case 35673:return rM;case 5125:return sM;case 36294:return aM;case 36295:return oM;case 36296:return lM;case 35678:case 36198:case 36298:case 36306:case 35682:return cM;case 35679:case 36299:case 36307:return uM;case 35680:case 36300:case 36308:case 36293:return fM;case 36289:case 36303:case 36311:case 36292:return hM}}class pM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$x(t.type)}}class mM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dM(t.type)}}class gM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const co=/(\w+)(\])?(\[|\.)?/g;function ou(n,e){n.seq.push(e),n.map[e.id]=e}function _M(n,e,t){const i=n.name,r=i.length;for(co.lastIndex=0;;){const s=co.exec(i),o=co.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){ou(t,u===void 0?new pM(a,n,e):new mM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new gM(a),ou(t,f)),t=f}}}class Fs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);_M(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function lu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const vM=37297;let xM=0;function MM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function SM(n){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(n);let i;switch(e===t?i="":e===Zs&&t===js?i="LinearDisplayP3ToLinearSRGB":e===js&&t===Zs&&(i="LinearSRGBToLinearDisplayP3"),n){case fi:case da:return[i,"LinearTransferOETF"];case vn:case rl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function cu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+MM(n.getShaderSource(e),o)}else return r}function EM(n,e){const t=SM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function yM(n,e){let t;switch(e){case Rg:t="Linear";break;case Pg:t="Reinhard";break;case Lg:t="OptimizedCineon";break;case Dg:t="ACESFilmic";break;case Ug:t="AgX";break;case Ng:t="Neutral";break;case Ig:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function TM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sr).join(`
`)}function bM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function AM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function wM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function sr(n){return n!==""}function uu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(n){return n.replace(CM,PM)}const RM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function PM(n,e){let t=Ge[e];if(t===void 0){const i=RM.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fo(t)}const LM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hu(n){return n.replace(LM,DM)}function DM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function du(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function IM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Nf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ig?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function UM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case pr:case mr:e="ENVMAP_TYPE_CUBE";break;case ha:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case mr:e="ENVMAP_MODE_REFRACTION";break}return e}function FM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ff:e="ENVMAP_BLENDING_MULTIPLY";break;case wg:e="ENVMAP_BLENDING_MIX";break;case Cg:e="ENVMAP_BLENDING_ADD";break}return e}function OM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function BM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=IM(t),u=UM(t),c=NM(t),f=FM(t),h=OM(t),m=t.isWebGL2?"":TM(t),v=bM(t),M=AM(s),p=r.createProgram();let d,b,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(sr).join(`
`),d.length>0&&(d+=`
`),b=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(sr).join(`
`),b.length>0&&(b+=`
`)):(d=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),b=[m,du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==oi?yM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,EM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),o=Fo(o),o=uu(o,t),o=fu(o,t),a=Fo(a),a=uu(a,t),a=fu(a,t),o=hu(o),a=hu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const E=y+d+o,w=y+b+a,R=lu(r,r.VERTEX_SHADER,E),C=lu(r,r.FRAGMENT_SHADER,w);r.attachShader(p,R),r.attachShader(p,C),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function U(z){if(n.debug.checkShaderErrors){const te=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(R).trim(),ee=r.getShaderInfoLog(C).trim();let W=!0,Q=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,R,C);else{const G=cu(r,R,"vertex"),re=cu(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+te+`
`+G+`
`+re)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(L===""||ee==="")&&(Q=!1);Q&&(z.diagnostics={runnable:W,programLog:te,vertexShader:{log:L,prefix:d},fragmentShader:{log:ee,prefix:b}})}r.deleteShader(R),r.deleteShader(C),F=new Fs(r,p),x=wM(r,p)}let F;this.getUniforms=function(){return F===void 0&&U(this),F};let x;this.getAttributes=function(){return x===void 0&&U(this),x};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(p,vM)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=C,this}let zM=0;class HM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new GM(e),t.set(e,i)),i}}class GM{constructor(e){this.id=zM++,this.code=e,this.usedTimes=0}}function VM(n,e,t,i,r,s,o){const a=new jf,l=new HM,u=new Set,c=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,m=r.vertexTextures;let v=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return u.add(x),x===0?"uv":`uv${x}`}function d(x,A,z,te,L){const ee=te.fog,W=L.geometry,Q=x.isMeshStandardMaterial?te.environment:null,G=(x.isMeshStandardMaterial?t:e).get(x.envMap||Q),re=G&&G.mapping===ha?G.image.height:null,ae=M[x.type];x.precision!==null&&(v=r.getMaxPrecision(x.precision),v!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",v,"instead."));const fe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,_e=fe!==void 0?fe.length:0;let Ue=0;W.morphAttributes.position!==void 0&&(Ue=1),W.morphAttributes.normal!==void 0&&(Ue=2),W.morphAttributes.color!==void 0&&(Ue=3);let Z,ce,xe,Re;if(ae){const tt=Sn[ae];Z=tt.vertexShader,ce=tt.fragmentShader}else Z=x.vertexShader,ce=x.fragmentShader,l.update(x),xe=l.getVertexShaderID(x),Re=l.getFragmentShaderID(x);const Ae=n.getRenderTarget(),Te=L.isInstancedMesh===!0,qe=L.isBatchedMesh===!0,Ie=!!x.map,_=!!x.matcap,P=!!G,N=!!x.aoMap,K=!!x.lightMap,H=!!x.bumpMap,j=!!x.normalMap,ie=!!x.displacementMap,ne=!!x.emissiveMap,se=!!x.metalnessMap,S=!!x.roughnessMap,g=x.anisotropy>0,D=x.clearcoat>0,O=x.iridescence>0,$=x.sheen>0,J=x.transmission>0,Me=g&&!!x.anisotropyMap,me=D&&!!x.clearcoatMap,oe=D&&!!x.clearcoatNormalMap,ue=D&&!!x.clearcoatRoughnessMap,Ce=O&&!!x.iridescenceMap,le=O&&!!x.iridescenceThicknessMap,et=$&&!!x.sheenColorMap,ze=$&&!!x.sheenRoughnessMap,ye=!!x.specularMap,Se=!!x.specularColorMap,be=!!x.specularIntensityMap,We=J&&!!x.transmissionMap,Oe=J&&!!x.thicknessMap,st=!!x.gradientMap,I=!!x.alphaMap,ge=x.alphaTest>0,k=!!x.alphaHash,de=!!x.extensions;let ve=oi;x.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(ve=n.toneMapping);const Xe={isWebGL2:f,shaderID:ae,shaderType:x.type,shaderName:x.name,vertexShader:Z,fragmentShader:ce,defines:x.defines,customVertexShaderID:xe,customFragmentShaderID:Re,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:v,batching:qe,instancing:Te,instancingColor:Te&&L.instanceColor!==null,instancingMorph:Te&&L.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ae===null?n.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:fi,alphaToCoverage:!!x.alphaToCoverage,map:Ie,matcap:_,envMap:P,envMapMode:P&&G.mapping,envMapCubeUVHeight:re,aoMap:N,lightMap:K,bumpMap:H,normalMap:j,displacementMap:m&&ie,emissiveMap:ne,normalMapObjectSpace:j&&x.normalMapType===$g,normalMapTangentSpace:j&&x.normalMapType===qg,metalnessMap:se,roughnessMap:S,anisotropy:g,anisotropyMap:Me,clearcoat:D,clearcoatMap:me,clearcoatNormalMap:oe,clearcoatRoughnessMap:ue,iridescence:O,iridescenceMap:Ce,iridescenceThicknessMap:le,sheen:$,sheenColorMap:et,sheenRoughnessMap:ze,specularMap:ye,specularColorMap:Se,specularIntensityMap:be,transmission:J,transmissionMap:We,thicknessMap:Oe,gradientMap:st,opaque:x.transparent===!1&&x.blending===fr&&x.alphaToCoverage===!1,alphaMap:I,alphaTest:ge,alphaHash:k,combine:x.combine,mapUv:Ie&&p(x.map.channel),aoMapUv:N&&p(x.aoMap.channel),lightMapUv:K&&p(x.lightMap.channel),bumpMapUv:H&&p(x.bumpMap.channel),normalMapUv:j&&p(x.normalMap.channel),displacementMapUv:ie&&p(x.displacementMap.channel),emissiveMapUv:ne&&p(x.emissiveMap.channel),metalnessMapUv:se&&p(x.metalnessMap.channel),roughnessMapUv:S&&p(x.roughnessMap.channel),anisotropyMapUv:Me&&p(x.anisotropyMap.channel),clearcoatMapUv:me&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:oe&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:le&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:et&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:ze&&p(x.sheenRoughnessMap.channel),specularMapUv:ye&&p(x.specularMap.channel),specularColorMapUv:Se&&p(x.specularColorMap.channel),specularIntensityMapUv:be&&p(x.specularIntensityMap.channel),transmissionMapUv:We&&p(x.transmissionMap.channel),thicknessMapUv:Oe&&p(x.thicknessMap.channel),alphaMapUv:I&&p(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(j||g),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!W.attributes.uv&&(Ie||I),fog:!!ee,useFog:x.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:L.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Ue,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:ve,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ie&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===rt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Hn,flipSided:x.side===kt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:de&&x.extensions.derivatives===!0,extensionFragDepth:de&&x.extensions.fragDepth===!0,extensionDrawBuffers:de&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:de&&x.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Xe.vertexUv1s=u.has(1),Xe.vertexUv2s=u.has(2),Xe.vertexUv3s=u.has(3),u.clear(),Xe}function b(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const z in x.defines)A.push(z),A.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(y(A,x),E(A,x),A.push(n.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function y(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function E(x,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.instancingMorph&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.normalMapObjectSpace&&a.enable(7),A.normalMapTangentSpace&&a.enable(8),A.clearcoat&&a.enable(9),A.iridescence&&a.enable(10),A.alphaTest&&a.enable(11),A.vertexColors&&a.enable(12),A.vertexAlphas&&a.enable(13),A.vertexUv1s&&a.enable(14),A.vertexUv2s&&a.enable(15),A.vertexUv3s&&a.enable(16),A.vertexTangents&&a.enable(17),A.anisotropy&&a.enable(18),A.alphaHash&&a.enable(19),A.batching&&a.enable(20),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.alphaToCoverage&&a.enable(20),x.push(a.mask)}function w(x){const A=M[x.type];let z;if(A){const te=Sn[A];z=E_.clone(te.uniforms)}else z=x.uniforms;return z}function R(x,A){let z;for(let te=0,L=c.length;te<L;te++){const ee=c[te];if(ee.cacheKey===A){z=ee,++z.usedTimes;break}}return z===void 0&&(z=new BM(n,A,x,s),c.push(z)),z}function C(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),x.destroy()}}function U(x){l.remove(x)}function F(){l.dispose()}return{getParameters:d,getProgramCacheKey:b,getUniforms:w,acquireProgram:R,releaseProgram:C,releaseShaderCache:U,programs:c,dispose:F}}function kM(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function WM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function pu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,m,v,M,p){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:v,renderOrder:f.renderOrder,z:M,group:p},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=M,d.group=p),e++,d}function a(f,h,m,v,M,p){const d=o(f,h,m,v,M,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(f,h,m,v,M,p){const d=o(f,h,m,v,M,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||WM),i.length>1&&i.sort(h||pu),r.length>1&&r.sort(h||pu)}function c(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function XM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new mu,n.set(i,[o])):r>=s.length?(o=new mu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function qM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new Je};break;case"SpotLight":t={position:new q,direction:new q,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function $M(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let YM=0;function KM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function jM(n,e){const t=new qM,i=$M(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new q);const s=new q,o=new ht,a=new ht;function l(c,f){let h=0,m=0,v=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let M=0,p=0,d=0,b=0,y=0,E=0,w=0,R=0,C=0,U=0,F=0;c.sort(KM);const x=f===!0?Math.PI:1;for(let z=0,te=c.length;z<te;z++){const L=c[z],ee=L.color,W=L.intensity,Q=L.distance,G=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=ee.r*W*x,m+=ee.g*W*x,v+=ee.b*W*x;else if(L.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(L.sh.coefficients[re],W);F++}else if(L.isDirectionalLight){const re=t.get(L);if(re.color.copy(L.color).multiplyScalar(L.intensity*x),L.castShadow){const ae=L.shadow,fe=i.get(L);fe.shadowBias=ae.bias,fe.shadowNormalBias=ae.normalBias,fe.shadowRadius=ae.radius,fe.shadowMapSize=ae.mapSize,r.directionalShadow[M]=fe,r.directionalShadowMap[M]=G,r.directionalShadowMatrix[M]=L.shadow.matrix,E++}r.directional[M]=re,M++}else if(L.isSpotLight){const re=t.get(L);re.position.setFromMatrixPosition(L.matrixWorld),re.color.copy(ee).multiplyScalar(W*x),re.distance=Q,re.coneCos=Math.cos(L.angle),re.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),re.decay=L.decay,r.spot[d]=re;const ae=L.shadow;if(L.map&&(r.spotLightMap[C]=L.map,C++,ae.updateMatrices(L),L.castShadow&&U++),r.spotLightMatrix[d]=ae.matrix,L.castShadow){const fe=i.get(L);fe.shadowBias=ae.bias,fe.shadowNormalBias=ae.normalBias,fe.shadowRadius=ae.radius,fe.shadowMapSize=ae.mapSize,r.spotShadow[d]=fe,r.spotShadowMap[d]=G,R++}d++}else if(L.isRectAreaLight){const re=t.get(L);re.color.copy(ee).multiplyScalar(W),re.halfWidth.set(L.width*.5,0,0),re.halfHeight.set(0,L.height*.5,0),r.rectArea[b]=re,b++}else if(L.isPointLight){const re=t.get(L);if(re.color.copy(L.color).multiplyScalar(L.intensity*x),re.distance=L.distance,re.decay=L.decay,L.castShadow){const ae=L.shadow,fe=i.get(L);fe.shadowBias=ae.bias,fe.shadowNormalBias=ae.normalBias,fe.shadowRadius=ae.radius,fe.shadowMapSize=ae.mapSize,fe.shadowCameraNear=ae.camera.near,fe.shadowCameraFar=ae.camera.far,r.pointShadow[p]=fe,r.pointShadowMap[p]=G,r.pointShadowMatrix[p]=L.shadow.matrix,w++}r.point[p]=re,p++}else if(L.isHemisphereLight){const re=t.get(L);re.skyColor.copy(L.color).multiplyScalar(W*x),re.groundColor.copy(L.groundColor).multiplyScalar(W*x),r.hemi[y]=re,y++}}b>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=v;const A=r.hash;(A.directionalLength!==M||A.pointLength!==p||A.spotLength!==d||A.rectAreaLength!==b||A.hemiLength!==y||A.numDirectionalShadows!==E||A.numPointShadows!==w||A.numSpotShadows!==R||A.numSpotMaps!==C||A.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=d,r.rectArea.length=b,r.point.length=p,r.hemi.length=y,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=R+C-U,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=F,A.directionalLength=M,A.pointLength=p,A.spotLength=d,A.rectAreaLength=b,A.hemiLength=y,A.numDirectionalShadows=E,A.numPointShadows=w,A.numSpotShadows=R,A.numSpotMaps=C,A.numLightProbes=F,r.version=YM++)}function u(c,f){let h=0,m=0,v=0,M=0,p=0;const d=f.matrixWorldInverse;for(let b=0,y=c.length;b<y;b++){const E=c[b];if(E.isDirectionalLight){const w=r.directional[h];w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),h++}else if(E.isSpotLight){const w=r.spot[v];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),v++}else if(E.isRectAreaLight){const w=r.rectArea[M];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),a.identity(),o.copy(E.matrixWorld),o.premultiply(d),a.extractRotation(o),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),M++}else if(E.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),m++}else if(E.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(d),p++}}}return{setup:l,setupView:u,state:r}}function gu(n,e){const t=new jM(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function ZM(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new gu(n,e),t.set(s,[l])):o>=a.length?(l=new gu(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class JM extends pa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class QM extends pa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const eS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tS=`uniform sampler2D shadow_pass;
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
}`;function nS(n,e,t){let i=new rh;const r=new $e,s=new $e,o=new yt,a=new JM({depthPacking:Xg}),l=new QM,u={},c=t.maxTextureSize,f={[ui]:kt,[kt]:ui,[Hn]:Hn},h=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:eS,fragmentShader:tS}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new zi;v.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Tn(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nf;let d=this.type;this.render=function(R,C,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const F=n.getRenderTarget(),x=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),z=n.state;z.setBlending(ai),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const te=d!==Nn&&this.type===Nn,L=d===Nn&&this.type!==Nn;for(let ee=0,W=R.length;ee<W;ee++){const Q=R[ee],G=Q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const re=G.getFrameExtents();if(r.multiply(re),s.copy(G.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/re.x),r.x=s.x*re.x,G.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/re.y),r.y=s.y*re.y,G.mapSize.y=s.y)),G.map===null||te===!0||L===!0){const fe=this.type!==Nn?{minFilter:It,magFilter:It}:{};G.map!==null&&G.map.dispose(),G.map=new Oi(r.x,r.y,fe),G.map.texture.name=Q.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const ae=G.getViewportCount();for(let fe=0;fe<ae;fe++){const _e=G.getViewport(fe);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),z.viewport(o),G.updateMatrices(Q,fe),i=G.getFrustum(),E(C,U,G.camera,Q,this.type)}G.isPointLightShadow!==!0&&this.type===Nn&&b(G,U),G.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(F,x,A)};function b(R,C){const U=e.update(M);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Oi(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,U,h,M,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,U,m,M,null)}function y(R,C,U,F){let x=null;const A=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)x=A;else if(x=U.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const z=x.uuid,te=C.uuid;let L=u[z];L===void 0&&(L={},u[z]=L);let ee=L[te];ee===void 0&&(ee=x.clone(),L[te]=ee,C.addEventListener("dispose",w)),x=ee}if(x.visible=C.visible,x.wireframe=C.wireframe,F===Nn?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:f[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=n.properties.get(x);z.light=U}return x}function E(R,C,U,F,x){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===Nn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const te=e.update(R),L=R.material;if(Array.isArray(L)){const ee=te.groups;for(let W=0,Q=ee.length;W<Q;W++){const G=ee[W],re=L[G.materialIndex];if(re&&re.visible){const ae=y(R,re,F,x);R.onBeforeShadow(n,R,C,U,te,ae,G),n.renderBufferDirect(U,null,te,ae,R,G),R.onAfterShadow(n,R,C,U,te,ae,G)}}}else if(L.visible){const ee=y(R,L,F,x);R.onBeforeShadow(n,R,C,U,te,ee,null),n.renderBufferDirect(U,null,te,ee,R,null),R.onAfterShadow(n,R,C,U,te,ee,null)}}const z=R.children;for(let te=0,L=z.length;te<L;te++)E(z[te],C,U,F,x)}function w(R){R.target.removeEventListener("dispose",w);for(const U in u){const F=u[U],x=R.target.uuid;x in F&&(F[x].dispose(),delete F[x])}}}function iS(n,e,t){const i=t.isWebGL2;function r(){let I=!1;const ge=new yt;let k=null;const de=new yt(0,0,0,0);return{setMask:function(ve){k!==ve&&!I&&(n.colorMask(ve,ve,ve,ve),k=ve)},setLocked:function(ve){I=ve},setClear:function(ve,Xe,tt,xt,Kt){Kt===!0&&(ve*=xt,Xe*=xt,tt*=xt),ge.set(ve,Xe,tt,xt),de.equals(ge)===!1&&(n.clearColor(ve,Xe,tt,xt),de.copy(ge))},reset:function(){I=!1,k=null,de.set(-1,0,0,0)}}}function s(){let I=!1,ge=null,k=null,de=null;return{setTest:function(ve){ve?Te(n.DEPTH_TEST):qe(n.DEPTH_TEST)},setMask:function(ve){ge!==ve&&!I&&(n.depthMask(ve),ge=ve)},setFunc:function(ve){if(k!==ve){switch(ve){case Mg:n.depthFunc(n.NEVER);break;case Sg:n.depthFunc(n.ALWAYS);break;case Eg:n.depthFunc(n.LESS);break;case Ys:n.depthFunc(n.LEQUAL);break;case yg:n.depthFunc(n.EQUAL);break;case Tg:n.depthFunc(n.GEQUAL);break;case bg:n.depthFunc(n.GREATER);break;case Ag:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}k=ve}},setLocked:function(ve){I=ve},setClear:function(ve){de!==ve&&(n.clearDepth(ve),de=ve)},reset:function(){I=!1,ge=null,k=null,de=null}}}function o(){let I=!1,ge=null,k=null,de=null,ve=null,Xe=null,tt=null,xt=null,Kt=null;return{setTest:function(nt){I||(nt?Te(n.STENCIL_TEST):qe(n.STENCIL_TEST))},setMask:function(nt){ge!==nt&&!I&&(n.stencilMask(nt),ge=nt)},setFunc:function(nt,Pt,pn){(k!==nt||de!==Pt||ve!==pn)&&(n.stencilFunc(nt,Pt,pn),k=nt,de=Pt,ve=pn)},setOp:function(nt,Pt,pn){(Xe!==nt||tt!==Pt||xt!==pn)&&(n.stencilOp(nt,Pt,pn),Xe=nt,tt=Pt,xt=pn)},setLocked:function(nt){I=nt},setClear:function(nt){Kt!==nt&&(n.clearStencil(nt),Kt=nt)},reset:function(){I=!1,ge=null,k=null,de=null,ve=null,Xe=null,tt=null,xt=null,Kt=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let h={},m={},v=new WeakMap,M=[],p=null,d=!1,b=null,y=null,E=null,w=null,R=null,C=null,U=null,F=new Je(0,0,0),x=0,A=!1,z=null,te=null,L=null,ee=null,W=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,re=0;const ae=n.getParameter(n.VERSION);ae.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(ae)[1]),G=re>=1):ae.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),G=re>=2);let fe=null,_e={};const Ue=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),ce=new yt().fromArray(Ue),xe=new yt().fromArray(Z);function Re(I,ge,k,de){const ve=new Uint8Array(4),Xe=n.createTexture();n.bindTexture(I,Xe),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<k;tt++)i&&(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)?n.texImage3D(ge,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(ge+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return Xe}const Ae={};Ae[n.TEXTURE_2D]=Re(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=Re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ae[n.TEXTURE_2D_ARRAY]=Re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=Re(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Te(n.DEPTH_TEST),l.setFunc(Ys),ie(!1),ne(Kl),Te(n.CULL_FACE),H(ai);function Te(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function qe(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Ie(I,ge){return m[I]!==ge?(n.bindFramebuffer(I,ge),m[I]=ge,i&&(I===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ge),I===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ge)),!0):!1}function _(I,ge){let k=M,de=!1;if(I){k=v.get(ge),k===void 0&&(k=[],v.set(ge,k));const ve=I.textures;if(k.length!==ve.length||k[0]!==n.COLOR_ATTACHMENT0){for(let Xe=0,tt=ve.length;Xe<tt;Xe++)k[Xe]=n.COLOR_ATTACHMENT0+Xe;k.length=ve.length,de=!0}}else k[0]!==n.BACK&&(k[0]=n.BACK,de=!0);if(de)if(t.isWebGL2)n.drawBuffers(k);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(k);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function P(I){return p!==I?(n.useProgram(I),p=I,!0):!1}const N={[Ci]:n.FUNC_ADD,[sg]:n.FUNC_SUBTRACT,[ag]:n.FUNC_REVERSE_SUBTRACT};if(i)N[Ql]=n.MIN,N[ec]=n.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(N[Ql]=I.MIN_EXT,N[ec]=I.MAX_EXT)}const K={[og]:n.ZERO,[lg]:n.ONE,[cg]:n.SRC_COLOR,[wo]:n.SRC_ALPHA,[mg]:n.SRC_ALPHA_SATURATE,[dg]:n.DST_COLOR,[fg]:n.DST_ALPHA,[ug]:n.ONE_MINUS_SRC_COLOR,[Co]:n.ONE_MINUS_SRC_ALPHA,[pg]:n.ONE_MINUS_DST_COLOR,[hg]:n.ONE_MINUS_DST_ALPHA,[gg]:n.CONSTANT_COLOR,[_g]:n.ONE_MINUS_CONSTANT_COLOR,[vg]:n.CONSTANT_ALPHA,[xg]:n.ONE_MINUS_CONSTANT_ALPHA};function H(I,ge,k,de,ve,Xe,tt,xt,Kt,nt){if(I===ai){d===!0&&(qe(n.BLEND),d=!1);return}if(d===!1&&(Te(n.BLEND),d=!0),I!==rg){if(I!==b||nt!==A){if((y!==Ci||R!==Ci)&&(n.blendEquation(n.FUNC_ADD),y=Ci,R=Ci),nt)switch(I){case fr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jl:n.blendFunc(n.ONE,n.ONE);break;case Zl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case fr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,w=null,C=null,U=null,F.set(0,0,0),x=0,b=I,A=nt}return}ve=ve||ge,Xe=Xe||k,tt=tt||de,(ge!==y||ve!==R)&&(n.blendEquationSeparate(N[ge],N[ve]),y=ge,R=ve),(k!==E||de!==w||Xe!==C||tt!==U)&&(n.blendFuncSeparate(K[k],K[de],K[Xe],K[tt]),E=k,w=de,C=Xe,U=tt),(xt.equals(F)===!1||Kt!==x)&&(n.blendColor(xt.r,xt.g,xt.b,Kt),F.copy(xt),x=Kt),b=I,A=!1}function j(I,ge){I.side===Hn?qe(n.CULL_FACE):Te(n.CULL_FACE);let k=I.side===kt;ge&&(k=!k),ie(k),I.blending===fr&&I.transparent===!1?H(ai):H(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const de=I.stencilWrite;u.setTest(de),de&&(u.setMask(I.stencilWriteMask),u.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),u.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),S(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Te(n.SAMPLE_ALPHA_TO_COVERAGE):qe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ie(I){z!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),z=I)}function ne(I){I!==tg?(Te(n.CULL_FACE),I!==te&&(I===Kl?n.cullFace(n.BACK):I===ng?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):qe(n.CULL_FACE),te=I}function se(I){I!==L&&(G&&n.lineWidth(I),L=I)}function S(I,ge,k){I?(Te(n.POLYGON_OFFSET_FILL),(ee!==ge||W!==k)&&(n.polygonOffset(ge,k),ee=ge,W=k)):qe(n.POLYGON_OFFSET_FILL)}function g(I){I?Te(n.SCISSOR_TEST):qe(n.SCISSOR_TEST)}function D(I){I===void 0&&(I=n.TEXTURE0+Q-1),fe!==I&&(n.activeTexture(I),fe=I)}function O(I,ge,k){k===void 0&&(fe===null?k=n.TEXTURE0+Q-1:k=fe);let de=_e[k];de===void 0&&(de={type:void 0,texture:void 0},_e[k]=de),(de.type!==I||de.texture!==ge)&&(fe!==k&&(n.activeTexture(k),fe=k),n.bindTexture(I,ge||Ae[I]),de.type=I,de.texture=ge)}function $(){const I=_e[fe];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ze(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(I){ce.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ce.copy(I))}function be(I){xe.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),xe.copy(I))}function We(I,ge){let k=f.get(ge);k===void 0&&(k=new WeakMap,f.set(ge,k));let de=k.get(I);de===void 0&&(de=n.getUniformBlockIndex(ge,I.name),k.set(I,de))}function Oe(I,ge){const de=f.get(ge).get(I);c.get(ge)!==de&&(n.uniformBlockBinding(ge,de,I.__bindingPointIndex),c.set(ge,de))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},fe=null,_e={},m={},v=new WeakMap,M=[],p=null,d=!1,b=null,y=null,E=null,w=null,R=null,C=null,U=null,F=new Je(0,0,0),x=0,A=!1,z=null,te=null,L=null,ee=null,W=null,ce.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Te,disable:qe,bindFramebuffer:Ie,drawBuffers:_,useProgram:P,setBlending:H,setMaterial:j,setFlipSided:ie,setCullFace:ne,setLineWidth:se,setPolygonOffset:S,setScissorTest:g,activeTexture:D,bindTexture:O,unbindTexture:$,compressedTexImage2D:J,compressedTexImage3D:Me,texImage2D:ze,texImage3D:ye,updateUBOMapping:We,uniformBlockBinding:Oe,texStorage2D:le,texStorage3D:et,texSubImage2D:me,texSubImage3D:oe,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ce,scissor:Se,viewport:be,reset:st}}function rS(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,f=new WeakMap;let h;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(S,g){return v?new OffscreenCanvas(S,g):Qs("canvas")}function p(S,g,D,O){let $=1;const J=se(S);if((J.width>O||J.height>O)&&($=O/Math.max(J.width,J.height)),$<1||g===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const Me=g?No:Math.floor,me=Me($*J.width),oe=Me($*J.height);h===void 0&&(h=M(me,oe));const ue=D?M(me,oe):h;return ue.width=me,ue.height=oe,ue.getContext("2d").drawImage(S,0,0,me,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+me+"x"+oe+")."),ue}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),S;return S}function d(S){const g=se(S);return Pc(g.width)&&Pc(g.height)}function b(S){return a?!1:S.wrapS!==an||S.wrapT!==an||S.minFilter!==It&&S.minFilter!==Gt}function y(S,g){return S.generateMipmaps&&g&&S.minFilter!==It&&S.minFilter!==Gt}function E(S){n.generateMipmap(S)}function w(S,g,D,O,$=!1){if(a===!1)return g;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let J=g;if(g===n.RED&&(D===n.FLOAT&&(J=n.R32F),D===n.HALF_FLOAT&&(J=n.R16F),D===n.UNSIGNED_BYTE&&(J=n.R8)),g===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(J=n.R8UI),D===n.UNSIGNED_SHORT&&(J=n.R16UI),D===n.UNSIGNED_INT&&(J=n.R32UI),D===n.BYTE&&(J=n.R8I),D===n.SHORT&&(J=n.R16I),D===n.INT&&(J=n.R32I)),g===n.RG&&(D===n.FLOAT&&(J=n.RG32F),D===n.HALF_FLOAT&&(J=n.RG16F),D===n.UNSIGNED_BYTE&&(J=n.RG8)),g===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(J=n.RG8UI),D===n.UNSIGNED_SHORT&&(J=n.RG16UI),D===n.UNSIGNED_INT&&(J=n.RG32UI),D===n.BYTE&&(J=n.RG8I),D===n.SHORT&&(J=n.RG16I),D===n.INT&&(J=n.RG32I)),g===n.RGBA){const Me=$?Ks:Ze.getTransfer(O);D===n.FLOAT&&(J=n.RGBA32F),D===n.HALF_FLOAT&&(J=n.RGBA16F),D===n.UNSIGNED_BYTE&&(J=Me===rt?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function R(S,g,D){return y(S,D)===!0||S.isFramebufferTexture&&S.minFilter!==It&&S.minFilter!==Gt?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function C(S){return S===It||S===tc||S===br?n.NEAREST:n.LINEAR}function U(S){const g=S.target;g.removeEventListener("dispose",U),x(g),g.isVideoTexture&&f.delete(g)}function F(S){const g=S.target;g.removeEventListener("dispose",F),z(g)}function x(S){const g=i.get(S);if(g.__webglInit===void 0)return;const D=S.source,O=m.get(D);if(O){const $=O[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&A(S),Object.keys(O).length===0&&m.delete(D)}i.remove(S)}function A(S){const g=i.get(S);n.deleteTexture(g.__webglTexture);const D=S.source,O=m.get(D);delete O[g.__cacheKey],o.memory.textures--}function z(S){const g=i.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(g.__webglFramebuffer[O]))for(let $=0;$<g.__webglFramebuffer[O].length;$++)n.deleteFramebuffer(g.__webglFramebuffer[O][$]);else n.deleteFramebuffer(g.__webglFramebuffer[O]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[O])}else{if(Array.isArray(g.__webglFramebuffer))for(let O=0;O<g.__webglFramebuffer.length;O++)n.deleteFramebuffer(g.__webglFramebuffer[O]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let O=0;O<g.__webglColorRenderbuffer.length;O++)g.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[O]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const D=S.textures;for(let O=0,$=D.length;O<$;O++){const J=i.get(D[O]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(D[O])}i.remove(S)}let te=0;function L(){te=0}function ee(){const S=te;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),te+=1,S}function W(S){const g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function Q(S,g){const D=i.get(S);if(S.isVideoTexture&&ie(S),S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){const O=S.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(D,S,g);return}}t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+g)}function G(S,g){const D=i.get(S);if(S.version>0&&D.__version!==S.version){xe(D,S,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+g)}function re(S,g){const D=i.get(S);if(S.version>0&&D.__version!==S.version){xe(D,S,g);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+g)}function ae(S,g){const D=i.get(S);if(S.version>0&&D.__version!==S.version){Re(D,S,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+g)}const fe={[Lo]:n.REPEAT,[an]:n.CLAMP_TO_EDGE,[Do]:n.MIRRORED_REPEAT},_e={[It]:n.NEAREST,[tc]:n.NEAREST_MIPMAP_NEAREST,[br]:n.NEAREST_MIPMAP_LINEAR,[Gt]:n.LINEAR,[Da]:n.LINEAR_MIPMAP_NEAREST,[Pi]:n.LINEAR_MIPMAP_LINEAR},Ue={[Yg]:n.NEVER,[e_]:n.ALWAYS,[Kg]:n.LESS,[Xf]:n.LEQUAL,[jg]:n.EQUAL,[Qg]:n.GEQUAL,[Zg]:n.GREATER,[Jg]:n.NOTEQUAL};function Z(S,g,D){if(g.type===Gn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Gt||g.magFilter===Da||g.magFilter===br||g.magFilter===Pi||g.minFilter===Gt||g.minFilter===Da||g.minFilter===br||g.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),D?(n.texParameteri(S,n.TEXTURE_WRAP_S,fe[g.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,fe[g.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,fe[g.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,_e[g.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,_e[g.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(g.wrapS!==an||g.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,C(g.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,C(g.minFilter)),g.minFilter!==It&&g.minFilter!==Gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Ue[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===It||g.minFilter!==br&&g.minFilter!==Pi||g.type===Gn&&e.has("OES_texture_float_linear")===!1||a===!1&&g.type===Kr&&e.has("OES_texture_half_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function ce(S,g){let D=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",U));const O=g.source;let $=m.get(O);$===void 0&&($={},m.set(O,$));const J=W(g);if(J!==S.__cacheKey){$[J]===void 0&&($[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),$[J].usedTimes++;const Me=$[S.__cacheKey];Me!==void 0&&($[S.__cacheKey].usedTimes--,Me.usedTimes===0&&A(g)),S.__cacheKey=J,S.__webglTexture=$[J].texture}return D}function xe(S,g,D){let O=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(O=n.TEXTURE_3D);const $=ce(S,g),J=g.source;t.bindTexture(O,S.__webglTexture,n.TEXTURE0+D);const Me=i.get(J);if(J.version!==Me.__version||$===!0){t.activeTexture(n.TEXTURE0+D);const me=Ze.getPrimaries(Ze.workingColorSpace),oe=g.colorSpace===ii?null:Ze.getPrimaries(g.colorSpace),ue=g.colorSpace===ii||me===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ce=b(g)&&d(g.image)===!1;let le=p(g.image,Ce,!1,r.maxTextureSize);le=ne(g,le);const et=d(le)||a,ze=s.convert(g.format,g.colorSpace);let ye=s.convert(g.type),Se=w(g.internalFormat,ze,ye,g.colorSpace,g.isVideoTexture);Z(O,g,et);let be;const We=g.mipmaps,Oe=a&&g.isVideoTexture!==!0&&Se!==Wf,st=Me.__version===void 0||$===!0,I=J.dataReady,ge=R(g,le,et);if(g.isDepthTexture)Se=n.DEPTH_COMPONENT,a?g.type===Gn?Se=n.DEPTH_COMPONENT32F:g.type===ri?Se=n.DEPTH_COMPONENT24:g.type===Ui?Se=n.DEPTH24_STENCIL8:Se=n.DEPTH_COMPONENT16:g.type===Gn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Ni&&Se===n.DEPTH_COMPONENT&&g.type!==il&&g.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=ri,ye=s.convert(g.type)),g.format===gr&&Se===n.DEPTH_COMPONENT&&(Se=n.DEPTH_STENCIL,g.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Ui,ye=s.convert(g.type))),st&&(Oe?t.texStorage2D(n.TEXTURE_2D,1,Se,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Se,le.width,le.height,0,ze,ye,null));else if(g.isDataTexture)if(We.length>0&&et){Oe&&st&&t.texStorage2D(n.TEXTURE_2D,ge,Se,We[0].width,We[0].height);for(let k=0,de=We.length;k<de;k++)be=We[k],Oe?I&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,be.width,be.height,ze,ye,be.data):t.texImage2D(n.TEXTURE_2D,k,Se,be.width,be.height,0,ze,ye,be.data);g.generateMipmaps=!1}else Oe?(st&&t.texStorage2D(n.TEXTURE_2D,ge,Se,le.width,le.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,ze,ye,le.data)):t.texImage2D(n.TEXTURE_2D,0,Se,le.width,le.height,0,ze,ye,le.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Oe&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Se,We[0].width,We[0].height,le.depth);for(let k=0,de=We.length;k<de;k++)be=We[k],g.format!==on?ze!==null?Oe?I&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,be.width,be.height,le.depth,ze,be.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,k,Se,be.width,be.height,le.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,be.width,be.height,le.depth,ze,ye,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,k,Se,be.width,be.height,le.depth,0,ze,ye,be.data)}else{Oe&&st&&t.texStorage2D(n.TEXTURE_2D,ge,Se,We[0].width,We[0].height);for(let k=0,de=We.length;k<de;k++)be=We[k],g.format!==on?ze!==null?Oe?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,k,0,0,be.width,be.height,ze,be.data):t.compressedTexImage2D(n.TEXTURE_2D,k,Se,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?I&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,be.width,be.height,ze,ye,be.data):t.texImage2D(n.TEXTURE_2D,k,Se,be.width,be.height,0,ze,ye,be.data)}else if(g.isDataArrayTexture)Oe?(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Se,le.width,le.height,le.depth),I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ze,ye,le.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,le.width,le.height,le.depth,0,ze,ye,le.data);else if(g.isData3DTexture)Oe?(st&&t.texStorage3D(n.TEXTURE_3D,ge,Se,le.width,le.height,le.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ze,ye,le.data)):t.texImage3D(n.TEXTURE_3D,0,Se,le.width,le.height,le.depth,0,ze,ye,le.data);else if(g.isFramebufferTexture){if(st)if(Oe)t.texStorage2D(n.TEXTURE_2D,ge,Se,le.width,le.height);else{let k=le.width,de=le.height;for(let ve=0;ve<ge;ve++)t.texImage2D(n.TEXTURE_2D,ve,Se,k,de,0,ze,ye,null),k>>=1,de>>=1}}else if(We.length>0&&et){if(Oe&&st){const k=se(We[0]);t.texStorage2D(n.TEXTURE_2D,ge,Se,k.width,k.height)}for(let k=0,de=We.length;k<de;k++)be=We[k],Oe?I&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,ze,ye,be):t.texImage2D(n.TEXTURE_2D,k,Se,ze,ye,be);g.generateMipmaps=!1}else if(Oe){if(st){const k=se(le);t.texStorage2D(n.TEXTURE_2D,ge,Se,k.width,k.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ze,ye,le)}else t.texImage2D(n.TEXTURE_2D,0,Se,ze,ye,le);y(g,et)&&E(O),Me.__version=J.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function Re(S,g,D){if(g.image.length!==6)return;const O=ce(S,g),$=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+D);const J=i.get($);if($.version!==J.__version||O===!0){t.activeTexture(n.TEXTURE0+D);const Me=Ze.getPrimaries(Ze.workingColorSpace),me=g.colorSpace===ii?null:Ze.getPrimaries(g.colorSpace),oe=g.colorSpace===ii||Me===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const ue=g.isCompressedTexture||g.image[0].isCompressedTexture,Ce=g.image[0]&&g.image[0].isDataTexture,le=[];for(let k=0;k<6;k++)!ue&&!Ce?le[k]=p(g.image[k],!1,!0,r.maxCubemapSize):le[k]=Ce?g.image[k].image:g.image[k],le[k]=ne(g,le[k]);const et=le[0],ze=d(et)||a,ye=s.convert(g.format,g.colorSpace),Se=s.convert(g.type),be=w(g.internalFormat,ye,Se,g.colorSpace),We=a&&g.isVideoTexture!==!0,Oe=J.__version===void 0||O===!0,st=$.dataReady;let I=R(g,et,ze);Z(n.TEXTURE_CUBE_MAP,g,ze);let ge;if(ue){We&&Oe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,I,be,et.width,et.height);for(let k=0;k<6;k++){ge=le[k].mipmaps;for(let de=0;de<ge.length;de++){const ve=ge[de];g.format!==on?ye!==null?We?st&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,0,0,ve.width,ve.height,ye,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,be,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?st&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,0,0,ve.width,ve.height,ye,Se,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,be,ve.width,ve.height,0,ye,Se,ve.data)}}}else{if(ge=g.mipmaps,We&&Oe){ge.length>0&&I++;const k=se(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,I,be,k.width,k.height)}for(let k=0;k<6;k++)if(Ce){We?st&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,le[k].width,le[k].height,ye,Se,le[k].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,be,le[k].width,le[k].height,0,ye,Se,le[k].data);for(let de=0;de<ge.length;de++){const Xe=ge[de].image[k].image;We?st&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,0,0,Xe.width,Xe.height,ye,Se,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,be,Xe.width,Xe.height,0,ye,Se,Xe.data)}}else{We?st&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,ye,Se,le[k]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,be,ye,Se,le[k]);for(let de=0;de<ge.length;de++){const ve=ge[de];We?st&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,0,0,ye,Se,ve.image[k]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,be,ye,Se,ve.image[k])}}}y(g,ze)&&E(n.TEXTURE_CUBE_MAP),J.__version=$.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function Ae(S,g,D,O,$,J){const Me=s.convert(D.format,D.colorSpace),me=s.convert(D.type),oe=w(D.internalFormat,Me,me,D.colorSpace);if(!i.get(g).__hasExternalTextures){const Ce=Math.max(1,g.width>>J),le=Math.max(1,g.height>>J);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,J,oe,Ce,le,g.depth,0,Me,me,null):t.texImage2D($,J,oe,Ce,le,0,Me,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),j(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,$,i.get(D).__webglTexture,0,H(g)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,$,i.get(D).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(S,g,D){if(n.bindRenderbuffer(n.RENDERBUFFER,S),g.depthBuffer&&!g.stencilBuffer){let O=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(D||j(g)){const $=g.depthTexture;$&&$.isDepthTexture&&($.type===Gn?O=n.DEPTH_COMPONENT32F:$.type===ri&&(O=n.DEPTH_COMPONENT24));const J=H(g);j(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,O,g.width,g.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,J,O,g.width,g.height)}else n.renderbufferStorage(n.RENDERBUFFER,O,g.width,g.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(g.depthBuffer&&g.stencilBuffer){const O=H(g);D&&j(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,O,n.DEPTH24_STENCIL8,g.width,g.height):j(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,O,n.DEPTH24_STENCIL8,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{const O=g.textures;for(let $=0;$<O.length;$++){const J=O[$],Me=s.convert(J.format,J.colorSpace),me=s.convert(J.type),oe=w(J.internalFormat,Me,me,J.colorSpace),ue=H(g);D&&j(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,oe,g.width,g.height):j(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,oe,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,oe,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qe(S,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Q(g.depthTexture,0);const O=i.get(g.depthTexture).__webglTexture,$=H(g);if(g.depthTexture.format===Ni)j(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0);else if(g.depthTexture.format===gr)j(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function Ie(S){const g=i.get(S),D=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!g.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");qe(g.__webglFramebuffer,S)}else if(D){g.__webglDepthbuffer=[];for(let O=0;O<6;O++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[O]),g.__webglDepthbuffer[O]=n.createRenderbuffer(),Te(g.__webglDepthbuffer[O],S,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),Te(g.__webglDepthbuffer,S,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function _(S,g,D){const O=i.get(S);g!==void 0&&Ae(O.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Ie(S)}function P(S){const g=S.texture,D=i.get(S),O=i.get(g);S.addEventListener("dispose",F);const $=S.textures,J=S.isWebGLCubeRenderTarget===!0,Me=$.length>1,me=d(S)||a;if(Me||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=g.version,o.memory.textures++),J){D.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[oe]=[];for(let ue=0;ue<g.mipmaps.length;ue++)D.__webglFramebuffer[oe][ue]=n.createFramebuffer()}else D.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(a&&g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let oe=0;oe<g.mipmaps.length;oe++)D.__webglFramebuffer[oe]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(Me)if(r.drawBuffers)for(let oe=0,ue=$.length;oe<ue;oe++){const Ce=i.get($[oe]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&j(S)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let oe=0;oe<$.length;oe++){const ue=$[oe];D.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[oe]);const Ce=s.convert(ue.format,ue.colorSpace),le=s.convert(ue.type),et=w(ue.internalFormat,Ce,le,ue.colorSpace,S.isXRRenderTarget===!0),ze=H(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,et,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,D.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Te(D.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),Z(n.TEXTURE_CUBE_MAP,g,me);for(let oe=0;oe<6;oe++)if(a&&g.mipmaps&&g.mipmaps.length>0)for(let ue=0;ue<g.mipmaps.length;ue++)Ae(D.__webglFramebuffer[oe][ue],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ue);else Ae(D.__webglFramebuffer[oe],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);y(g,me)&&E(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let oe=0,ue=$.length;oe<ue;oe++){const Ce=$[oe],le=i.get(Ce);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),Z(n.TEXTURE_2D,Ce,me),Ae(D.__webglFramebuffer,S,Ce,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),y(Ce,me)&&E(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?oe=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,O.__webglTexture),Z(oe,g,me),a&&g.mipmaps&&g.mipmaps.length>0)for(let ue=0;ue<g.mipmaps.length;ue++)Ae(D.__webglFramebuffer[ue],S,g,n.COLOR_ATTACHMENT0,oe,ue);else Ae(D.__webglFramebuffer,S,g,n.COLOR_ATTACHMENT0,oe,0);y(g,me)&&E(oe),t.unbindTexture()}S.depthBuffer&&Ie(S)}function N(S){const g=d(S)||a,D=S.textures;for(let O=0,$=D.length;O<$;O++){const J=D[O];if(y(J,g)){const Me=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,me=i.get(J).__webglTexture;t.bindTexture(Me,me),E(Me),t.unbindTexture()}}}function K(S){if(a&&S.samples>0&&j(S)===!1){const g=S.textures,D=S.width,O=S.height;let $=n.COLOR_BUFFER_BIT;const J=[],Me=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(S),oe=g.length>1;if(oe)for(let ue=0;ue<g.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ue=0;ue<g.length;ue++){J.push(n.COLOR_ATTACHMENT0+ue),S.depthBuffer&&J.push(Me);const Ce=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Ce===!1&&(S.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),oe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[ue]),Ce===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Me])),oe){const le=i.get(g[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,D,O,0,0,D,O,$,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let ue=0;ue<g.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,me.__webglColorRenderbuffer[ue]);const Ce=i.get(g[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,Ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function H(S){return Math.min(r.maxSamples,S.samples)}function j(S){const g=i.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ie(S){const g=o.render.frame;f.get(S)!==g&&(f.set(S,g),S.update())}function ne(S,g){const D=S.colorSpace,O=S.format,$=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Io||D!==fi&&D!==ii&&(Ze.getTransfer(D)===rt?a===!1?e.has("EXT_sRGB")===!0&&O===on?(S.format=Io,S.minFilter=Gt,S.generateMipmaps=!1):g=$f.sRGBToLinear(g):(O!==on||$!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),g}function se(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=ee,this.resetTextureUnits=L,this.setTexture2D=Q,this.setTexture2DArray=G,this.setTexture3D=re,this.setTextureCube=ae,this.rebindTextures=_,this.setupRenderTarget=P,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=j}function sS(n,e,t){const i=t.isWebGL2;function r(s,o=ii){let a;const l=Ze.getTransfer(o);if(s===li)return n.UNSIGNED_BYTE;if(s===zf)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Hf)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Fg)return n.BYTE;if(s===Og)return n.SHORT;if(s===il)return n.UNSIGNED_SHORT;if(s===Bf)return n.INT;if(s===ri)return n.UNSIGNED_INT;if(s===Gn)return n.FLOAT;if(s===Kr)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Bg)return n.ALPHA;if(s===on)return n.RGBA;if(s===zg)return n.LUMINANCE;if(s===Hg)return n.LUMINANCE_ALPHA;if(s===Ni)return n.DEPTH_COMPONENT;if(s===gr)return n.DEPTH_STENCIL;if(s===Io)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Gg)return n.RED;if(s===Gf)return n.RED_INTEGER;if(s===Vg)return n.RG;if(s===Vf)return n.RG_INTEGER;if(s===kf)return n.RGBA_INTEGER;if(s===Ia||s===Ua||s===Na||s===Fa)if(l===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ia)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ia)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ua)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Na)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===nc||s===ic||s===rc||s===sc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===nc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ic)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===rc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===sc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ac||s===oc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ac)return l===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===oc)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===lc||s===cc||s===uc||s===fc||s===hc||s===dc||s===pc||s===mc||s===gc||s===_c||s===vc||s===xc||s===Mc||s===Sc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===lc)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cc)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===uc)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fc)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hc)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===dc)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pc)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===mc)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gc)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===_c)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vc)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xc)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Mc)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Sc)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Oa||s===Ec||s===yc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Oa)return l===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ec)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===kg||s===Tc||s===bc||s===Ac)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Oa)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Tc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===bc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ac)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ui?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class aS extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ls extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oS={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,i),d=this._getHandJoint(u,M);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),m=.02,v=.005;u.inputState.pinching&&h>m+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(oS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ls;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const lS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cS=`
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

}`;class uS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Bt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new $n({extensions:{fragDepth:!0},vertexShader:lS,fragmentShader:cS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Tn(new rs(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class fS extends vr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,m=null,v=null;const M=new uS,p=t.getContextAttributes();let d=null,b=null;const y=[],E=[],w=new $e;let R=null;const C=new sn;C.layers.enable(1),C.viewport=new yt;const U=new sn;U.layers.enable(2),U.viewport=new yt;const F=[C,U],x=new aS;x.layers.enable(1),x.layers.enable(2);let A=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ce=y[Z];return ce===void 0&&(ce=new uo,y[Z]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Z){let ce=y[Z];return ce===void 0&&(ce=new uo,y[Z]=ce),ce.getGripSpace()},this.getHand=function(Z){let ce=y[Z];return ce===void 0&&(ce=new uo,y[Z]=ce),ce.getHandSpace()};function te(Z){const ce=E.indexOf(Z.inputSource);if(ce===-1)return;const xe=y[ce];xe!==void 0&&(xe.update(Z.inputSource,Z.frame,u||o),xe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function L(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",ee);for(let Z=0;Z<y.length;Z++){const ce=E[Z];ce!==null&&(E[Z]=null,y[Z].disconnect(ce))}A=null,z=null,M.reset(),e.setRenderTarget(d),m=null,h=null,f=null,r=null,b=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",L),r.addEventListener("inputsourceschange",ee),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ce={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Oi(m.framebufferWidth,m.framebufferHeight,{format:on,type:li,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ce=null,xe=null,Re=null;p.depth&&(Re=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=p.stencil?gr:Ni,xe=p.stencil?Ui:ri);const Ae={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Ae),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new Oi(h.textureWidth,h.textureHeight,{format:on,type:li,depthTexture:new oh(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Te=e.properties.get(b);Te.__ignoreDepthValues=h.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ue.setContext(r),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ee(Z){for(let ce=0;ce<Z.removed.length;ce++){const xe=Z.removed[ce],Re=E.indexOf(xe);Re>=0&&(E[Re]=null,y[Re].disconnect(xe))}for(let ce=0;ce<Z.added.length;ce++){const xe=Z.added[ce];let Re=E.indexOf(xe);if(Re===-1){for(let Te=0;Te<y.length;Te++)if(Te>=E.length){E.push(xe),Re=Te;break}else if(E[Te]===null){E[Te]=xe,Re=Te;break}if(Re===-1)break}const Ae=y[Re];Ae&&Ae.connect(xe)}}const W=new q,Q=new q;function G(Z,ce,xe){W.setFromMatrixPosition(ce.matrixWorld),Q.setFromMatrixPosition(xe.matrixWorld);const Re=W.distanceTo(Q),Ae=ce.projectionMatrix.elements,Te=xe.projectionMatrix.elements,qe=Ae[14]/(Ae[10]-1),Ie=Ae[14]/(Ae[10]+1),_=(Ae[9]+1)/Ae[5],P=(Ae[9]-1)/Ae[5],N=(Ae[8]-1)/Ae[0],K=(Te[8]+1)/Te[0],H=qe*N,j=qe*K,ie=Re/(-N+K),ne=ie*-N;ce.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ne),Z.translateZ(ie),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const se=qe+ie,S=Ie+ie,g=H-ne,D=j+(Re-ne),O=_*Ie/S*se,$=P*Ie/S*se;Z.projectionMatrix.makePerspective(g,D,O,$,se,S),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function re(Z,ce){ce===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ce.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;M.texture!==null&&(Z.near=M.depthNear,Z.far=M.depthFar),x.near=U.near=C.near=Z.near,x.far=U.far=C.far=Z.far,(A!==x.near||z!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,z=x.far,C.near=A,C.far=z,U.near=A,U.far=z,C.updateProjectionMatrix(),U.updateProjectionMatrix(),Z.updateProjectionMatrix());const ce=Z.parent,xe=x.cameras;re(x,ce);for(let Re=0;Re<xe.length;Re++)re(xe[Re],ce);xe.length===2?G(x,C,U):x.projectionMatrix.copy(C.projectionMatrix),ae(Z,x,ce)};function ae(Z,ce,xe){xe===null?Z.matrix.copy(ce.matrixWorld):(Z.matrix.copy(xe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ce.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Uo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return M.texture!==null};let fe=null;function _e(Z,ce){if(c=ce.getViewerPose(u||o),v=ce,c!==null){const xe=c.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let Re=!1;xe.length!==x.cameras.length&&(x.cameras.length=0,Re=!0);for(let Te=0;Te<xe.length;Te++){const qe=xe[Te];let Ie=null;if(m!==null)Ie=m.getViewport(qe);else{const P=f.getViewSubImage(h,qe);Ie=P.viewport,Te===0&&(e.setRenderTargetTextures(b,P.colorTexture,h.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(b))}let _=F[Te];_===void 0&&(_=new sn,_.layers.enable(Te),_.viewport=new yt,F[Te]=_),_.matrix.fromArray(qe.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.projectionMatrix.fromArray(qe.projectionMatrix),_.projectionMatrixInverse.copy(_.projectionMatrix).invert(),_.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Te===0&&(x.matrix.copy(_.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Re===!0&&x.cameras.push(_)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Te=f.getDepthInformation(xe[0]);Te&&Te.isValid&&Te.texture&&M.init(e,Te,r.renderState)}}for(let xe=0;xe<y.length;xe++){const Re=E[xe],Ae=y[xe];Re!==null&&Ae!==void 0&&Ae.update(Re,ce,u||o)}M.render(e,x),fe&&fe(Z,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),v=null}const Ue=new sh;Ue.setAnimationLoop(_e),this.setAnimationLoop=function(Z){fe=Z},this.dispose=function(){}}}const yi=new qn,hS=new ht;function dS(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,th(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,b,y,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),c(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(s(p,d),v(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),M(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,b,y):d.isSpriteMaterial?u(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===kt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===kt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const b=e.get(d),y=b.envMap,E=b.envMapRotation;if(y&&(p.envMap.value=y,yi.copy(E),yi.x*=-1,yi.y*=-1,yi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),p.envMapRotation.value.setFromMatrix4(hS.makeRotationFromEuler(yi)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const w=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*w,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,b,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*b,p.scale.value=y*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,b){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===kt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,d){d.matcap&&(p.matcap.value=d.matcap)}function M(p,d){const b=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function pS(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,y){const E=y.program;i.uniformBlockBinding(b,E)}function u(b,y){let E=r[b.id];E===void 0&&(v(b),E=c(b),r[b.id]=E,b.addEventListener("dispose",p));const w=y.program;i.updateUBOMapping(b,w);const R=e.render.frame;s[b.id]!==R&&(h(b),s[b.id]=R)}function c(b){const y=f();b.__bindingPointIndex=y;const E=n.createBuffer(),w=b.__size,R=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,w,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,E),E}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const y=r[b.id],E=b.uniforms,w=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let R=0,C=E.length;R<C;R++){const U=Array.isArray(E[R])?E[R]:[E[R]];for(let F=0,x=U.length;F<x;F++){const A=U[F];if(m(A,R,F,w)===!0){const z=A.__offset,te=Array.isArray(A.value)?A.value:[A.value];let L=0;for(let ee=0;ee<te.length;ee++){const W=te[ee],Q=M(W);typeof W=="number"||typeof W=="boolean"?(A.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,z+L,A.__data)):W.isMatrix3?(A.__data[0]=W.elements[0],A.__data[1]=W.elements[1],A.__data[2]=W.elements[2],A.__data[3]=0,A.__data[4]=W.elements[3],A.__data[5]=W.elements[4],A.__data[6]=W.elements[5],A.__data[7]=0,A.__data[8]=W.elements[6],A.__data[9]=W.elements[7],A.__data[10]=W.elements[8],A.__data[11]=0):(W.toArray(A.__data,L),L+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,y,E,w){const R=b.value,C=y+"_"+E;if(w[C]===void 0)return typeof R=="number"||typeof R=="boolean"?w[C]=R:w[C]=R.clone(),!0;{const U=w[C];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return w[C]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function v(b){const y=b.uniforms;let E=0;const w=16;for(let C=0,U=y.length;C<U;C++){const F=Array.isArray(y[C])?y[C]:[y[C]];for(let x=0,A=F.length;x<A;x++){const z=F[x],te=Array.isArray(z.value)?z.value:[z.value];for(let L=0,ee=te.length;L<ee;L++){const W=te[L],Q=M(W),G=E%w;G!==0&&w-G<Q.boundary&&(E+=w-G),z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=Q.storage}}}const R=E%w;return R>0&&(E+=w-R),b.__size=E,b.__cache={},this}function M(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function p(b){const y=b.target;y.removeEventListener("dispose",p);const E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class dh{constructor(e={}){const{canvas:t=n_(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),v=new Int32Array(4);let M=null,p=null;const d=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vn,this._useLegacyLights=!1,this.toneMapping=oi,this.toneMappingExposure=1;const y=this;let E=!1,w=0,R=0,C=null,U=-1,F=null;const x=new yt,A=new yt;let z=null;const te=new Je(0);let L=0,ee=t.width,W=t.height,Q=1,G=null,re=null;const ae=new yt(0,0,ee,W),fe=new yt(0,0,ee,W);let _e=!1;const Ue=new rh;let Z=!1,ce=!1,xe=null;const Re=new ht,Ae=new $e,Te=new q,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return C===null?Q:1}let _=i;function P(T,B){for(let X=0;X<T.length;X++){const Y=T[X],V=t.getContext(Y,B);if(V!==null)return V}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nl}`),t.addEventListener("webglcontextlost",st,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",ge,!1),_===null){const B=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&B.shift(),_=P(B,T),_===null)throw P(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&_ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),_.getShaderPrecisionFormat===void 0&&(_.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let N,K,H,j,ie,ne,se,S,g,D,O,$,J,Me,me,oe,ue,Ce,le,et,ze,ye,Se,be;function We(){N=new Mx(_),K=new px(_,N,e),N.init(K),ye=new sS(_,N,K),H=new iS(_,N,K),j=new yx(_),ie=new kM,ne=new rS(_,N,H,ie,K,ye,j),se=new gx(y),S=new xx(y),g=new R_(_,K),Se=new hx(_,N,g,K),D=new Sx(_,g,j,Se),O=new wx(_,D,g,j),le=new Ax(_,K,ne),oe=new mx(ie),$=new VM(y,se,S,N,K,Se,oe),J=new dS(y,ie),Me=new XM,me=new ZM(N,K),Ce=new fx(y,se,S,H,O,h,l),ue=new nS(y,O,K),be=new pS(_,j,K,H),et=new dx(_,N,j,K),ze=new Ex(_,N,j,K),j.programs=$.programs,y.capabilities=K,y.extensions=N,y.properties=ie,y.renderLists=Me,y.shadowMap=ue,y.state=H,y.info=j}We();const Oe=new fS(y,_);this.xr=Oe,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const T=N.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=N.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(ee,W,!1))},this.getSize=function(T){return T.set(ee,W)},this.setSize=function(T,B,X=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=T,W=B,t.width=Math.floor(T*Q),t.height=Math.floor(B*Q),X===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(ee*Q,W*Q).floor()},this.setDrawingBufferSize=function(T,B,X){ee=T,W=B,Q=X,t.width=Math.floor(T*X),t.height=Math.floor(B*X),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(ae)},this.setViewport=function(T,B,X,Y){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,B,X,Y),H.viewport(x.copy(ae).multiplyScalar(Q).round())},this.getScissor=function(T){return T.copy(fe)},this.setScissor=function(T,B,X,Y){T.isVector4?fe.set(T.x,T.y,T.z,T.w):fe.set(T,B,X,Y),H.scissor(A.copy(fe).multiplyScalar(Q).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(T){H.setScissorTest(_e=T)},this.setOpaqueSort=function(T){G=T},this.setTransparentSort=function(T){re=T},this.getClearColor=function(T){return T.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(T=!0,B=!0,X=!0){let Y=0;if(T){let V=!1;if(C!==null){const Ee=C.texture.format;V=Ee===kf||Ee===Vf||Ee===Gf}if(V){const Ee=C.texture.type,we=Ee===li||Ee===ri||Ee===il||Ee===Ui||Ee===zf||Ee===Hf,Pe=Ce.getClearColor(),De=Ce.getClearAlpha(),ke=Pe.r,Ne=Pe.g,Be=Pe.b;we?(m[0]=ke,m[1]=Ne,m[2]=Be,m[3]=De,_.clearBufferuiv(_.COLOR,0,m)):(v[0]=ke,v[1]=Ne,v[2]=Be,v[3]=De,_.clearBufferiv(_.COLOR,0,v))}else Y|=_.COLOR_BUFFER_BIT}B&&(Y|=_.DEPTH_BUFFER_BIT),X&&(Y|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Me.dispose(),me.dispose(),ie.dispose(),se.dispose(),S.dispose(),O.dispose(),Se.dispose(),be.dispose(),$.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",Kt),Oe.removeEventListener("sessionend",nt),xe&&(xe.dispose(),xe=null),Pt.stop()};function st(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=j.autoReset,B=ue.enabled,X=ue.autoUpdate,Y=ue.needsUpdate,V=ue.type;We(),j.autoReset=T,ue.enabled=B,ue.autoUpdate=X,ue.needsUpdate=Y,ue.type=V}function ge(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function k(T){const B=T.target;B.removeEventListener("dispose",k),de(B)}function de(T){ve(T),ie.remove(T)}function ve(T){const B=ie.get(T).programs;B!==void 0&&(B.forEach(function(X){$.releaseProgram(X)}),T.isShaderMaterial&&$.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,X,Y,V,Ee){B===null&&(B=qe);const we=V.isMesh&&V.matrixWorld.determinant()<0,Pe=mh(T,B,X,Y,V);H.setMaterial(Y,we);let De=X.index,ke=1;if(Y.wireframe===!0){if(De=D.getWireframeAttribute(X),De===void 0)return;ke=2}const Ne=X.drawRange,Be=X.attributes.position;let ct=Ne.start*ke,Wt=(Ne.start+Ne.count)*ke;Ee!==null&&(ct=Math.max(ct,Ee.start*ke),Wt=Math.min(Wt,(Ee.start+Ee.count)*ke)),De!==null?(ct=Math.max(ct,0),Wt=Math.min(Wt,De.count)):Be!=null&&(ct=Math.max(ct,0),Wt=Math.min(Wt,Be.count));const mt=Wt-ct;if(mt<0||mt===1/0)return;Se.setup(V,Y,Pe,X,De);let wn,ot=et;if(De!==null&&(wn=g.get(De),ot=ze,ot.setIndex(wn)),V.isMesh)Y.wireframe===!0?(H.setLineWidth(Y.wireframeLinewidth*Ie()),ot.setMode(_.LINES)):ot.setMode(_.TRIANGLES);else if(V.isLine){let He=Y.linewidth;He===void 0&&(He=1),H.setLineWidth(He*Ie()),V.isLineSegments?ot.setMode(_.LINES):V.isLineLoop?ot.setMode(_.LINE_LOOP):ot.setMode(_.LINE_STRIP)}else V.isPoints?ot.setMode(_.POINTS):V.isSprite&&ot.setMode(_.TRIANGLES);if(V.isBatchedMesh)ot.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)ot.renderInstances(ct,mt,V.count);else if(X.isInstancedBufferGeometry){const He=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ga=Math.min(X.instanceCount,He);ot.renderInstances(ct,mt,ga)}else ot.render(ct,mt)};function Xe(T,B,X){T.transparent===!0&&T.side===Hn&&T.forceSinglePass===!1?(T.side=kt,T.needsUpdate=!0,as(T,B,X),T.side=ui,T.needsUpdate=!0,as(T,B,X),T.side=Hn):as(T,B,X)}this.compile=function(T,B,X=null){X===null&&(X=T),p=me.get(X),p.init(),b.push(p),X.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),T!==X&&T.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(y._useLegacyLights);const Y=new Set;return T.traverse(function(V){const Ee=V.material;if(Ee)if(Array.isArray(Ee))for(let we=0;we<Ee.length;we++){const Pe=Ee[we];Xe(Pe,X,V),Y.add(Pe)}else Xe(Ee,X,V),Y.add(Ee)}),b.pop(),p=null,Y},this.compileAsync=function(T,B,X=null){const Y=this.compile(T,B,X);return new Promise(V=>{function Ee(){if(Y.forEach(function(we){ie.get(we).currentProgram.isReady()&&Y.delete(we)}),Y.size===0){V(T);return}setTimeout(Ee,10)}N.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let tt=null;function xt(T){tt&&tt(T)}function Kt(){Pt.stop()}function nt(){Pt.start()}const Pt=new sh;Pt.setAnimationLoop(xt),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(T){tt=T,Oe.setAnimationLoop(T),T===null?Pt.stop():Pt.start()},Oe.addEventListener("sessionstart",Kt),Oe.addEventListener("sessionend",nt),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(B),B=Oe.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,B,C),p=me.get(T,b.length),p.init(),b.push(p),Re.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ue.setFromProjectionMatrix(Re),ce=this.localClippingEnabled,Z=oe.init(this.clippingPlanes,ce),M=Me.get(T,d.length),M.init(),d.push(M),pn(T,B,0,y.sortObjects),M.finish(),y.sortObjects===!0&&M.sort(G,re),this.info.render.frame++,Z===!0&&oe.beginShadows();const X=p.state.shadowsArray;if(ue.render(X,T,B),Z===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1)&&Ce.render(M,T),p.setupLights(y._useLegacyLights),B.isArrayCamera){const Y=B.cameras;for(let V=0,Ee=Y.length;V<Ee;V++){const we=Y[V];ol(M,T,we,we.viewport)}}else ol(M,T,B);C!==null&&(ne.updateMultisampleRenderTarget(C),ne.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(y,T,B),Se.resetDefaultState(),U=-1,F=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,d.pop(),d.length>0?M=d[d.length-1]:M=null};function pn(T,B,X,Y){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ue.intersectsSprite(T)){Y&&Te.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Re);const we=O.update(T),Pe=T.material;Pe.visible&&M.push(T,we,Pe,X,Te.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ue.intersectsObject(T))){const we=O.update(T),Pe=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Te.copy(T.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Te.copy(we.boundingSphere.center)),Te.applyMatrix4(T.matrixWorld).applyMatrix4(Re)),Array.isArray(Pe)){const De=we.groups;for(let ke=0,Ne=De.length;ke<Ne;ke++){const Be=De[ke],ct=Pe[Be.materialIndex];ct&&ct.visible&&M.push(T,we,ct,X,Te.z,Be)}}else Pe.visible&&M.push(T,we,Pe,X,Te.z,null)}}const Ee=T.children;for(let we=0,Pe=Ee.length;we<Pe;we++)pn(Ee[we],B,X,Y)}function ol(T,B,X,Y){const V=T.opaque,Ee=T.transmissive,we=T.transparent;p.setupLightsView(X),Z===!0&&oe.setGlobalState(y.clippingPlanes,X),Ee.length>0&&ph(V,Ee,B,X),Y&&H.viewport(x.copy(Y)),V.length>0&&ss(V,B,X),Ee.length>0&&ss(Ee,B,X),we.length>0&&ss(we,B,X),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function ph(T,B,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const Ee=K.isWebGL2;xe===null&&(xe=new Oi(1,1,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")?Kr:li,minFilter:Pi,samples:Ee?4:0})),y.getDrawingBufferSize(Ae),Ee?xe.setSize(Ae.x,Ae.y):xe.setSize(No(Ae.x),No(Ae.y));const we=y.getRenderTarget();y.setRenderTarget(xe),y.getClearColor(te),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear();const Pe=y.toneMapping;y.toneMapping=oi,ss(T,X,Y),ne.updateMultisampleRenderTarget(xe),ne.updateRenderTargetMipmap(xe);let De=!1;for(let ke=0,Ne=B.length;ke<Ne;ke++){const Be=B[ke],ct=Be.object,Wt=Be.geometry,mt=Be.material,wn=Be.group;if(mt.side===Hn&&ct.layers.test(Y.layers)){const ot=mt.side;mt.side=kt,mt.needsUpdate=!0,ll(ct,X,Y,Wt,mt,wn),mt.side=ot,mt.needsUpdate=!0,De=!0}}De===!0&&(ne.updateMultisampleRenderTarget(xe),ne.updateRenderTargetMipmap(xe)),y.setRenderTarget(we),y.setClearColor(te,L),y.toneMapping=Pe}function ss(T,B,X){const Y=B.isScene===!0?B.overrideMaterial:null;for(let V=0,Ee=T.length;V<Ee;V++){const we=T[V],Pe=we.object,De=we.geometry,ke=Y===null?we.material:Y,Ne=we.group;Pe.layers.test(X.layers)&&ll(Pe,B,X,De,ke,Ne)}}function ll(T,B,X,Y,V,Ee){T.onBeforeRender(y,B,X,Y,V,Ee),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(y,B,X,Y,T,Ee),V.transparent===!0&&V.side===Hn&&V.forceSinglePass===!1?(V.side=kt,V.needsUpdate=!0,y.renderBufferDirect(X,B,Y,V,T,Ee),V.side=ui,V.needsUpdate=!0,y.renderBufferDirect(X,B,Y,V,T,Ee),V.side=Hn):y.renderBufferDirect(X,B,Y,V,T,Ee),T.onAfterRender(y,B,X,Y,V,Ee)}function as(T,B,X){B.isScene!==!0&&(B=qe);const Y=ie.get(T),V=p.state.lights,Ee=p.state.shadowsArray,we=V.state.version,Pe=$.getParameters(T,V.state,Ee,B,X),De=$.getProgramCacheKey(Pe);let ke=Y.programs;Y.environment=T.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(T.isMeshStandardMaterial?S:se).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,ke===void 0&&(T.addEventListener("dispose",k),ke=new Map,Y.programs=ke);let Ne=ke.get(De);if(Ne!==void 0){if(Y.currentProgram===Ne&&Y.lightsStateVersion===we)return ul(T,Pe),Ne}else Pe.uniforms=$.getUniforms(T),T.onBuild(X,Pe,y),T.onBeforeCompile(Pe,y),Ne=$.acquireProgram(Pe,De),ke.set(De,Ne),Y.uniforms=Pe.uniforms;const Be=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=oe.uniform),ul(T,Pe),Y.needsLights=_h(T),Y.lightsStateVersion=we,Y.needsLights&&(Be.ambientLightColor.value=V.state.ambient,Be.lightProbe.value=V.state.probe,Be.directionalLights.value=V.state.directional,Be.directionalLightShadows.value=V.state.directionalShadow,Be.spotLights.value=V.state.spot,Be.spotLightShadows.value=V.state.spotShadow,Be.rectAreaLights.value=V.state.rectArea,Be.ltc_1.value=V.state.rectAreaLTC1,Be.ltc_2.value=V.state.rectAreaLTC2,Be.pointLights.value=V.state.point,Be.pointLightShadows.value=V.state.pointShadow,Be.hemisphereLights.value=V.state.hemi,Be.directionalShadowMap.value=V.state.directionalShadowMap,Be.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Be.spotShadowMap.value=V.state.spotShadowMap,Be.spotLightMatrix.value=V.state.spotLightMatrix,Be.spotLightMap.value=V.state.spotLightMap,Be.pointShadowMap.value=V.state.pointShadowMap,Be.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=Ne,Y.uniformsList=null,Ne}function cl(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Fs.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function ul(T,B){const X=ie.get(T);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function mh(T,B,X,Y,V){B.isScene!==!0&&(B=qe),ne.resetTextureUnits();const Ee=B.fog,we=Y.isMeshStandardMaterial?B.environment:null,Pe=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:fi,De=(Y.isMeshStandardMaterial?S:se).get(Y.envMap||we),ke=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ne=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Be=!!X.morphAttributes.position,ct=!!X.morphAttributes.normal,Wt=!!X.morphAttributes.color;let mt=oi;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(mt=y.toneMapping);const wn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ot=wn!==void 0?wn.length:0,He=ie.get(Y),ga=p.state.lights;if(Z===!0&&(ce===!0||T!==F)){const jt=T===F&&Y.id===U;oe.setState(Y,T,jt)}let at=!1;Y.version===He.__version?(He.needsLights&&He.lightsStateVersion!==ga.state.version||He.outputColorSpace!==Pe||V.isBatchedMesh&&He.batching===!1||!V.isBatchedMesh&&He.batching===!0||V.isInstancedMesh&&He.instancing===!1||!V.isInstancedMesh&&He.instancing===!0||V.isSkinnedMesh&&He.skinning===!1||!V.isSkinnedMesh&&He.skinning===!0||V.isInstancedMesh&&He.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&He.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&He.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&He.instancingMorph===!1&&V.morphTexture!==null||He.envMap!==De||Y.fog===!0&&He.fog!==Ee||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==oe.numPlanes||He.numIntersection!==oe.numIntersection)||He.vertexAlphas!==ke||He.vertexTangents!==Ne||He.morphTargets!==Be||He.morphNormals!==ct||He.morphColors!==Wt||He.toneMapping!==mt||K.isWebGL2===!0&&He.morphTargetsCount!==ot)&&(at=!0):(at=!0,He.__version=Y.version);let hi=He.currentProgram;at===!0&&(hi=as(Y,B,V));let fl=!1,Mr=!1,_a=!1;const Tt=hi.getUniforms(),di=He.uniforms;if(H.useProgram(hi.program)&&(fl=!0,Mr=!0,_a=!0),Y.id!==U&&(U=Y.id,Mr=!0),fl||F!==T){Tt.setValue(_,"projectionMatrix",T.projectionMatrix),Tt.setValue(_,"viewMatrix",T.matrixWorldInverse);const jt=Tt.map.cameraPosition;jt!==void 0&&jt.setValue(_,Te.setFromMatrixPosition(T.matrixWorld)),K.logarithmicDepthBuffer&&Tt.setValue(_,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Tt.setValue(_,"isOrthographic",T.isOrthographicCamera===!0),F!==T&&(F=T,Mr=!0,_a=!0)}if(V.isSkinnedMesh){Tt.setOptional(_,V,"bindMatrix"),Tt.setOptional(_,V,"bindMatrixInverse");const jt=V.skeleton;jt&&(K.floatVertexTextures?(jt.boneTexture===null&&jt.computeBoneTexture(),Tt.setValue(_,"boneTexture",jt.boneTexture,ne)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Tt.setOptional(_,V,"batchingTexture"),Tt.setValue(_,"batchingTexture",V._matricesTexture,ne));const va=X.morphAttributes;if((va.position!==void 0||va.normal!==void 0||va.color!==void 0&&K.isWebGL2===!0)&&le.update(V,X,hi),(Mr||He.receiveShadow!==V.receiveShadow)&&(He.receiveShadow=V.receiveShadow,Tt.setValue(_,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(di.envMap.value=De,di.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Mr&&(Tt.setValue(_,"toneMappingExposure",y.toneMappingExposure),He.needsLights&&gh(di,_a),Ee&&Y.fog===!0&&J.refreshFogUniforms(di,Ee),J.refreshMaterialUniforms(di,Y,Q,W,xe),Fs.upload(_,cl(He),di,ne)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Fs.upload(_,cl(He),di,ne),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Tt.setValue(_,"center",V.center),Tt.setValue(_,"modelViewMatrix",V.modelViewMatrix),Tt.setValue(_,"normalMatrix",V.normalMatrix),Tt.setValue(_,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const jt=Y.uniformsGroups;for(let xa=0,vh=jt.length;xa<vh;xa++)if(K.isWebGL2){const hl=jt[xa];be.update(hl,hi),be.bind(hl,hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hi}function gh(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function _h(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,B,X){ie.get(T.texture).__webglTexture=B,ie.get(T.depthTexture).__webglTexture=X;const Y=ie.get(T);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||N.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const X=ie.get(T);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,X=0){C=T,w=B,R=X;let Y=!0,V=null,Ee=!1,we=!1;if(T){const De=ie.get(T);De.__useDefaultFramebuffer!==void 0?(H.bindFramebuffer(_.FRAMEBUFFER,null),Y=!1):De.__webglFramebuffer===void 0?ne.setupRenderTarget(T):De.__hasExternalTextures&&ne.rebindTextures(T,ie.get(T.texture).__webglTexture,ie.get(T.depthTexture).__webglTexture);const ke=T.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(we=!0);const Ne=ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ne[B])?V=Ne[B][X]:V=Ne[B],Ee=!0):K.isWebGL2&&T.samples>0&&ne.useMultisampledRTT(T)===!1?V=ie.get(T).__webglMultisampledFramebuffer:Array.isArray(Ne)?V=Ne[X]:V=Ne,x.copy(T.viewport),A.copy(T.scissor),z=T.scissorTest}else x.copy(ae).multiplyScalar(Q).floor(),A.copy(fe).multiplyScalar(Q).floor(),z=_e;if(H.bindFramebuffer(_.FRAMEBUFFER,V)&&K.drawBuffers&&Y&&H.drawBuffers(T,V),H.viewport(x),H.scissor(A),H.setScissorTest(z),Ee){const De=ie.get(T.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+B,De.__webglTexture,X)}else if(we){const De=ie.get(T.texture),ke=B||0;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,De.__webglTexture,X||0,ke)}U=-1},this.readRenderTargetPixels=function(T,B,X,Y,V,Ee,we){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){H.bindFramebuffer(_.FRAMEBUFFER,Pe);try{const De=T.texture,ke=De.format,Ne=De.type;if(ke!==on&&ye.convert(ke)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Ne===Kr&&(N.has("EXT_color_buffer_half_float")||K.isWebGL2&&N.has("EXT_color_buffer_float"));if(Ne!==li&&ye.convert(Ne)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===Gn&&(K.isWebGL2||N.has("OES_texture_float")||N.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-Y&&X>=0&&X<=T.height-V&&_.readPixels(B,X,Y,V,ye.convert(ke),ye.convert(Ne),Ee)}finally{const De=C!==null?ie.get(C).__webglFramebuffer:null;H.bindFramebuffer(_.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(T,B,X=0){const Y=Math.pow(2,-X),V=Math.floor(B.image.width*Y),Ee=Math.floor(B.image.height*Y);ne.setTexture2D(B,0),_.copyTexSubImage2D(_.TEXTURE_2D,X,0,0,T.x,T.y,V,Ee),H.unbindTexture()},this.copyTextureToTexture=function(T,B,X,Y=0){const V=B.image.width,Ee=B.image.height,we=ye.convert(X.format),Pe=ye.convert(X.type);ne.setTexture2D(X,0),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,X.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,X.unpackAlignment),B.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,Y,T.x,T.y,V,Ee,we,Pe,B.image.data):B.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,Y,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,we,B.mipmaps[0].data):_.texSubImage2D(_.TEXTURE_2D,Y,T.x,T.y,we,Pe,B.image),Y===0&&X.generateMipmaps&&_.generateMipmap(_.TEXTURE_2D),H.unbindTexture()},this.copyTextureToTexture3D=function(T,B,X,Y,V=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=Math.round(T.max.x-T.min.x),we=Math.round(T.max.y-T.min.y),Pe=T.max.z-T.min.z+1,De=ye.convert(Y.format),ke=ye.convert(Y.type);let Ne;if(Y.isData3DTexture)ne.setTexture3D(Y,0),Ne=_.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)ne.setTexture2DArray(Y,0),Ne=_.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,Y.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,Y.unpackAlignment);const Be=_.getParameter(_.UNPACK_ROW_LENGTH),ct=_.getParameter(_.UNPACK_IMAGE_HEIGHT),Wt=_.getParameter(_.UNPACK_SKIP_PIXELS),mt=_.getParameter(_.UNPACK_SKIP_ROWS),wn=_.getParameter(_.UNPACK_SKIP_IMAGES),ot=X.isCompressedTexture?X.mipmaps[V]:X.image;_.pixelStorei(_.UNPACK_ROW_LENGTH,ot.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,ot.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,T.min.x),_.pixelStorei(_.UNPACK_SKIP_ROWS,T.min.y),_.pixelStorei(_.UNPACK_SKIP_IMAGES,T.min.z),X.isDataTexture||X.isData3DTexture?_.texSubImage3D(Ne,V,B.x,B.y,B.z,Ee,we,Pe,De,ke,ot.data):Y.isCompressedArrayTexture?_.compressedTexSubImage3D(Ne,V,B.x,B.y,B.z,Ee,we,Pe,De,ot.data):_.texSubImage3D(Ne,V,B.x,B.y,B.z,Ee,we,Pe,De,ke,ot),_.pixelStorei(_.UNPACK_ROW_LENGTH,Be),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,ct),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Wt),_.pixelStorei(_.UNPACK_SKIP_ROWS,mt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,wn),V===0&&Y.generateMipmaps&&_.generateMipmap(Ne),H.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?ne.setTextureCube(T,0):T.isData3DTexture?ne.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ne.setTexture2DArray(T,0):ne.setTexture2D(T,0),H.unbindTexture()},this.resetState=function(){w=0,R=0,C=null,H.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===rl?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===da?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class mS extends dh{}mS.prototype.isWebGL1Renderer=!0;class gS extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nl);class _S{constructor(e,t){this.effectCanvas=e,this.originalCanvas=t,this.renderer=null,this.scene=null,this.camera=null,this.material=null,this.texture=null,this.mesh=null,this.params={horizontalChromatic:70,distortion:50,speed:60,size:60,blur:60},this.time=0,this.animationId=null,this.currentImage=null,this.compareMode=!1}init(){this.scene=new gS,this.camera=new ah(-1,1,1,-1,0,1),this.renderer=new dh({canvas:this.effectCanvas,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.createMaterial();const e=new rs(2,2);this.mesh=new Tn(e,this.material),this.scene.add(this.mesh),this.animate(),window.addEventListener("resize",()=>this.handleResize())}createMaterial(){this.material=new $n({uniforms:{uTexture:{value:null},uTime:{value:0},uHorizontalChromatic:{value:.7},uDistortion:{value:.5},uSpeed:{value:.6},uSize:{value:.6},uBlur:{value:.6},uResolution:{value:new $e(1,1)},uTextureResolution:{value:new $e(1,1)}},vertexShader:`
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
      `})}loadImage(e){this.currentImage=e,this.texture&&this.texture.dispose(),this.texture=new Bt(e),this.texture.needsUpdate=!0,this.material.uniforms.uTexture.value=this.texture,this.material.uniforms.uTextureResolution.value.set(e.width,e.height),this.updateCanvasSize(e.width,e.height),this.compareMode&&this.originalCanvas&&this.drawOriginalImage(e)}drawOriginalImage(e){if(!this.originalCanvas)return;const t=this.originalCanvas.getContext("2d");this.originalCanvas.width=e.width,this.originalCanvas.height=e.height,t.drawImage(e,0,0)}updateCanvasSize(e,t){const i=this.effectCanvas.parentElement;if(!i)return;const r=i.clientWidth-48,s=i.clientHeight-48,o=Math.min(r/e,s/t,1),a=Math.floor(e*o),l=Math.floor(t*o);this.effectCanvas.style.width=`${a}px`,this.effectCanvas.style.height=`${l}px`,this.renderer.setSize(e,t,!1),this.material.uniforms.uResolution.value.set(e,t),this.compareMode&&this.originalCanvas&&(this.originalCanvas.style.width=`${a}px`,this.originalCanvas.style.height=`${l}px`)}updateParams(e){this.params={...e},this.material.uniforms.uHorizontalChromatic.value=e.horizontalChromatic/100,this.material.uniforms.uDistortion.value=e.distortion/100,this.material.uniforms.uSpeed.value=e.speed/100,this.material.uniforms.uSize.value=e.size/100,this.material.uniforms.uBlur.value=e.blur/100}setCompareMode(e){this.compareMode=e,e&&this.currentImage&&this.originalCanvas&&(this.drawOriginalImage(this.currentImage),this.updateCanvasSize(this.currentImage.width,this.currentImage.height))}animate(){this.animationId=requestAnimationFrame(()=>this.animate()),this.time+=.016,this.material.uniforms.uTime.value=this.time,this.renderer.render(this.scene,this.camera)}handleResize(){this.currentImage&&this.updateCanvasSize(this.currentImage.width,this.currentImage.height)}dispose(){this.animationId&&cancelAnimationFrame(this.animationId),this.texture&&this.texture.dispose(),this.material&&this.material.dispose(),this.renderer&&this.renderer.dispose(),window.removeEventListener("resize",()=>this.handleResize())}}class dn{constructor(e){this.canvas=e,this.ctx=e.getContext("2d"),this.sourceImage=null,this.params={},this.animFrame=null,this.isAnimating=!1}loadImage(e){this.sourceImage=e,this.canvas.width=e.naturalWidth||e.width,this.canvas.height=e.naturalHeight||e.height,this.render()}updateParams(e){this.params={...this.params,...e},this.render()}render(){this.sourceImage&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.sourceImage,0,0,this.canvas.width,this.canvas.height),this.apply())}apply(){}destroy(){this.animFrame&&cancelAnimationFrame(this.animFrame)}getAvgColor(e,t,i,r,s,o,a){let l=0,u=0,c=0,f=0,h=0;const m=Math.max(0,Math.floor(t)),v=Math.max(0,Math.floor(i)),M=Math.min(o-1,Math.floor(t+r)),p=Math.min(a-1,Math.floor(i+s));for(let d=v;d<=p;d++)for(let b=m;b<=M;b++){const y=(d*o+b)*4;l+=e[y],u+=e[y+1],c+=e[y+2],f+=e[y+3],h++}return h===0?[0,0,0,255]:[l/h,u/h,c/h,f/h]}}class vS extends dn{constructor(e){super(e),this.params={intensity:50}}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,r=t.width,s=t.height,o=Math.max(2,Math.round(this.params.intensity/100*60)+2),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;e.clearRect(0,0,r,s);for(let c=0;c<s;c+=o)for(let f=0;f<r;f+=o){const[h,m,v,M]=this.getAvgColor(u,f,c,o-1,o-1,r,s);e.fillStyle=`rgba(${h|0},${m|0},${v|0},${M/255})`,e.fillRect(f,c,o,o)}}}class xS extends dn{constructor(e){super(e),this.params={intensity:50}}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,r=t.width,s=t.height,o=Math.max(4,Math.round(this.params.intensity/100*80)+4),a=Math.round(this.params.intensity/100*3)+1;e.clearRect(0,0,r,s);const l=document.createElement("canvas"),u=Math.max(4,o);l.width=Math.max(1,Math.ceil(r/u)),l.height=Math.max(1,Math.ceil(s/u));const c=l.getContext("2d");c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high",c.drawImage(i,0,0,l.width,l.height),e.imageSmoothingEnabled=!0,e.imageSmoothingQuality="high",e.drawImage(l,0,0,r,s),e.filter=`blur(${a*2}px)`,e.globalAlpha=.3,e.drawImage(i,0,0,r,s),e.filter="none",e.globalAlpha=1}}class MS extends dn{constructor(e){super(e),this.params={intensity:50}}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,r=t.width,s=t.height,o=Math.max(4,Math.round(this.params.intensity/100*56)+8),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;e.clearRect(0,0,r,s);for(let c=0;c<s;c+=o)for(let f=0;f<r;f+=o){const[h,m,v]=this.getAvgColor(u,f,c,o-1,o-1,r,s),M=h|0,p=m|0,d=v|0;e.fillStyle=`rgb(${M},${p},${d})`,e.fillRect(f,c,o,o),e.fillStyle="rgba(0,0,0,0.35)",e.fillRect(f+o-2,c,2,o),e.fillRect(f,c+o-2,o,2),e.fillStyle="rgba(255,255,255,0.2)",e.fillRect(f,c,o-2,2),e.fillRect(f,c,2,o-2);const b=f+o/2,y=c+o/2,E=o*.28,w=e.createRadialGradient(b-E*.3,y-E*.3,E*.1,b,y,E);w.addColorStop(0,"rgba(255,255,255,0.5)"),w.addColorStop(.5,`rgba(${M},${p},${d},0.9)`),w.addColorStop(1,"rgba(0,0,0,0.3)"),e.beginPath(),e.arc(b,y,E,0,Math.PI*2),e.fillStyle=w,e.fill()}}}class SS extends dn{constructor(e){super(e),this.params={intensity:50},this._cachedSeeds=null,this._cachedSize=-1}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,r=t.width,s=t.height,o=Math.max(8,Math.round(this.params.intensity/100*60)+8),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;this._cachedSize!==o&&(this._cachedSeeds=this._genSeeds(r,s,o),this._cachedSize=o);const c=this._cachedSeeds,f=c.map(([h,m])=>{const[v,M,p]=this.getAvgColor(u,h-o/2,m-o/2,o,o,r,s);return[v|0,M|0,p|0]});e.clearRect(0,0,r,s),this._drawVoronoi(e,c,f,r,s,o)}_genSeeds(e,t,i){const r=[],s=Math.ceil(e/i)+1,o=Math.ceil(t/i)+1;for(let a=0;a<o;a++)for(let l=0;l<s;l++){const u=i*.7,c=l*i+(this._hash(l,a,0)-.5)*u,f=a*i+(this._hash(l,a,1)-.5)*u;r.push([c,f])}return r}_hash(e,t,i){let r=Math.sin(e*127.1+t*311.7+i*74.3)*43758.5453;return r-Math.floor(r)}_drawVoronoi(e,t,i,r,s,o){const a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d"),u=l.createImageData(r,s),c=u.data;for(let p=0;p<s;p++)for(let d=0;d<r;d++){let b=1/0,y=0;const E=Math.round(d/o),w=Math.round(p/o);for(let x=-2;x<=2;x++)for(let A=-2;A<=2;A++){const z=E+A,te=w+x;if(z<0||te<0||z>=Math.ceil(r/o)+1||te>=Math.ceil(s/o)+1)continue;const L=te*(Math.ceil(r/o)+1)+z;if(L<0||L>=t.length)continue;const[ee,W]=t[L],Q=(d-ee)**2+(p-W)**2;Q<b&&(b=Q,y=L)}const[R,C,U]=i[y],F=(p*r+d)*4;c[F]=R,c[F+1]=C,c[F+2]=U,c[F+3]=255}l.putImageData(u,0,0),e.drawImage(a,0,0);const f=l.getImageData(0,0,r,s).data,h=document.createElement("canvas");h.width=r,h.height=s;const m=h.getContext("2d"),v=m.createImageData(r,s),M=v.data;for(let p=1;p<s-1;p++)for(let d=1;d<r-1;d++){const b=(p*r+d)*4,y=(p*r+d+1)*4,E=((p+1)*r+d)*4;(f[b]!==f[y]||f[b+1]!==f[y+1]||f[b]!==f[E]||f[b+1]!==f[E+1])&&(M[b]=255,M[b+1]=255,M[b+2]=255,M[b+3]=200)}m.putImageData(v,0,0),e.drawImage(h,0,0)}}class ES extends dn{constructor(e){super(e),this.params={intensity:50},this._seeds=null,this._cachedSize=-1}_hash(e,t,i){let r=Math.sin(e*127.1+t*311.7+i*74.3)*43758.5453;return r-Math.floor(r)}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,r=t.width,s=t.height,o=Math.max(6,Math.round(this.params.intensity/100*50)+6),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;if(this._cachedSize!==o){this._seeds=[];const c=Math.ceil(r/o)+1,f=Math.ceil(s/o)+1;for(let h=0;h<f;h++)for(let m=0;m<c;m++){const v=o*.65,M=m*o+(this._hash(m,h,0)-.5)*v,p=h*o+(this._hash(m,h,1)-.5)*v,d=o*(.35+this._hash(m,h,2)*.3);this._seeds.push({x:M,y:p,r:d})}this._cachedSize=o}e.fillStyle="#000",e.fillRect(0,0,r,s);for(const c of this._seeds){const[f,h,m]=this.getAvgColor(u,c.x-c.r,c.y-c.r,c.r*2,c.r*2,r,s),[v,M,p]=this._boostSat(f,h,m,1.5);e.beginPath(),e.arc(c.x,c.y,c.r,0,Math.PI*2),e.fillStyle=`rgb(${v|0},${M|0},${p|0})`,e.fill()}}_boostSat(e,t,i,r){const s=Math.max(e,t,i),o=Math.min(e,t,i),a=(s+o)/2;return[Math.min(255,Math.max(0,a+(e-a)*r)),Math.min(255,Math.max(0,a+(t-a)*r)),Math.min(255,Math.max(0,a+(i-a)*r))]}}class yS extends dn{constructor(e){super(e),this.params={intensity:50},this._cachedSize=-1,this._triangles=null}_hash(e,t,i){let r=Math.sin(e*127.1+t*311.7+i*74.3)*43758.5453;return r-Math.floor(r)}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,r=t.width,s=t.height,o=Math.max(8,Math.round(this.params.intensity/100*60)+10),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;this._cachedSize!==o&&(this._triangles=this._genTriangles(r,s,o),this._cachedSize=o),e.clearRect(0,0,r,s);for(const c of this._triangles){const f=(c[0]+c[2]+c[4])/3,h=(c[1]+c[3]+c[5])/3,[m,v,M]=this.getAvgColor(u,f-o/2,h-o/2,o,o,r,s),[p,d,b]=this._boostSat(m,v,M,1.8);e.beginPath(),e.moveTo(c[0],c[1]),e.lineTo(c[2],c[3]),e.lineTo(c[4],c[5]),e.closePath(),e.fillStyle=`rgb(${p|0},${d|0},${b|0})`,e.fill()}}_genTriangles(e,t,i){const r=[],s=Math.ceil(e/i)+1,o=Math.ceil(t/i)+1,a=[];for(let l=0;l<=o;l++){a.push([]);for(let u=0;u<=s;u++){const c=(this._hash(u,l,0)-.5)*i*.7,f=(this._hash(u,l,1)-.5)*i*.7;a[l].push([u*i+c,l*i+f])}}for(let l=0;l<o;l++)for(let u=0;u<s;u++){const[c,f]=a[l][u],[h,m]=a[l][u+1],[v,M]=a[l+1][u],[p,d]=a[l+1][u+1];r.push([c,f,h,m,v,M]),r.push([h,m,p,d,v,M])}return r}_boostSat(e,t,i,r){const s=Math.max(e,t,i),o=Math.min(e,t,i),a=(s+o)/2;return[Math.min(255,Math.max(0,a+(e-a)*r)),Math.min(255,Math.max(0,a+(t-a)*r)),Math.min(255,Math.max(0,a+(i-a)*r))]}}class TS extends dn{constructor(e){super(e),this.params={intensity:50}}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,r=t.width,s=t.height,o=Math.max(20,Math.round(this.params.intensity/100*120)+20),a=document.createElement("canvas");a.width=r,a.height=s,a.getContext("2d").drawImage(i,0,0,r,s),e.clearRect(0,0,r,s);for(let u=0;u<s;u+=o)for(let c=0;c<r;c+=o){const f=Math.min(o,r-c),h=Math.min(o,s-u);e.save(),e.beginPath(),e.rect(c,u,f,h),e.clip(),e.transform(1.08,.04,-.04,1.08,c-c*.08+f*.02,u-u*.08+h*.02),e.drawImage(a,0,0,r,s),e.setTransform(1,0,0,1,0,0);const m=e.createLinearGradient(c,u,c+f,u+h);m.addColorStop(0,"rgba(255,255,255,0.18)"),m.addColorStop(.4,"rgba(255,255,255,0.04)"),m.addColorStop(1,"rgba(0,0,0,0.12)"),e.fillStyle=m,e.fillRect(c,u,f,h),e.restore(),e.strokeStyle="rgba(0,0,0,0.6)",e.lineWidth=1,e.strokeRect(c+.5,u+.5,f-1,h-1)}}}class bS extends dn{constructor(e){super(e),this.params={intensity:50}}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,r=t.width,s=t.height,o=Math.max(16,Math.round(this.params.intensity/100*100)+16),a=o*.12,l=document.createElement("canvas");l.width=r,l.height=s;const u=l.getContext("2d");u.drawImage(i,0,0,r,s),u.getImageData(0,0,r,s).data,e.clearRect(0,0,r,s),e.filter="blur(2px)",e.drawImage(i,0,0,r,s),e.filter="none";for(let c=0;c<s;c+=o)for(let f=0;f<r;f+=o){const h=Math.min(o,r-f),m=Math.min(o,s-c),v=f+h/2,M=c+m/2;e.save(),e.beginPath(),this._roundRect(e,f+1,c+1,h-2,m-2,a),e.clip();const p=Math.sin(v/r*Math.PI*2)*o*.15,d=Math.cos(M/s*Math.PI*2)*o*.15;e.drawImage(l,p,d,r,s),e.fillStyle="rgba(255,255,255,0.06)",e.fillRect(f,c,h,m);const b=e.createLinearGradient(f,c,f,c+m*.4);b.addColorStop(0,"rgba(255,255,255,0.25)"),b.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=b,e.fillRect(f,c,h,m*.4),e.restore(),e.save(),e.beginPath(),this._roundRect(e,f+.5,c+.5,h-1,m-1,a),e.strokeStyle="rgba(255,255,255,0.25)",e.lineWidth=1,e.stroke(),e.restore()}}_roundRect(e,t,i,r,s,o){e.moveTo(t+o,i),e.lineTo(t+r-o,i),e.quadraticCurveTo(t+r,i,t+r,i+o),e.lineTo(t+r,i+s-o),e.quadraticCurveTo(t+r,i+s,t+r-o,i+s),e.lineTo(t+o,i+s),e.quadraticCurveTo(t,i+s,t,i+s-o),e.lineTo(t,i+o),e.quadraticCurveTo(t,i,t+o,i),e.closePath()}}class AS extends dn{constructor(e){super(e),this.params={intensity:50}}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,r=t.width,s=t.height,o=Math.max(6,Math.round(this.params.intensity/100*60)+6),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;e.clearRect(0,0,r,s);const c=o*2,f=Math.sqrt(3)*o,h=c*.75,m=f,v=Math.ceil(r/h)+1,M=Math.ceil(s/m)+1;for(let p=0;p<M;p++)for(let d=0;d<v;d++){const b=d%2===0?0:f/2,y=d*h,E=p*m+b,[w,R,C]=this.getAvgColor(u,y-o,E-o,o*2,o*2,r,s);e.beginPath();for(let U=0;U<6;U++){const F=Math.PI/3*U-Math.PI/6,x=y+o*Math.cos(F),A=E+o*Math.sin(F);U===0?e.moveTo(x,A):e.lineTo(x,A)}e.closePath(),e.fillStyle=`rgb(${w|0},${R|0},${C|0})`,e.fill(),e.strokeStyle="rgba(0,0,0,0.2)",e.lineWidth=.5,e.stroke()}}}class wS extends dn{constructor(e){super(e),this.params={intensity:50}}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,r=t.width,s=t.height,o=Math.max(10,Math.round(this.params.intensity/100*70)+10),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.drawImage(i,0,0,r,s);const u=l.getImageData(0,0,r,s).data;e.clearRect(0,0,r,s),e.filter="blur(4px) brightness(0.5)",e.drawImage(i,0,0,r,s),e.filter="none";const c=Math.ceil(r/o)+1,f=Math.ceil(s/o)+1;for(let h=0;h<f;h++)for(let m=0;m<c;m++){const v=m*o+o/2,M=h*o+o/2,[p,d,b]=this.getAvgColor(u,v-o/2,M-o/2,o,o,r,s);e.save(),e.translate(v,M),e.beginPath();for(let E=0;E<10;E++){const w=Math.PI/5*E-Math.PI/2,R=E%2===0?o*.48:o*.22,C=Math.cos(w)*R,U=Math.sin(w)*R;E===0?e.moveTo(C,U):e.lineTo(C,U)}e.closePath();const y=e.createRadialGradient(-o*.15,-o*.15,0,0,0,o*.5);y.addColorStop(0,`rgba(${Math.min(255,(p|0)+60)},${Math.min(255,(d|0)+60)},${Math.min(255,(b|0)+60)},1)`),y.addColorStop(.5,`rgba(${p|0},${d|0},${b|0},0.9)`),y.addColorStop(1,`rgba(${Math.max(0,(p|0)-40)},${Math.max(0,(d|0)-40)},${Math.max(0,(b|0)-40)},0.8)`),e.fillStyle=y,e.fill(),e.strokeStyle="rgba(0,0,0,0.4)",e.lineWidth=.8,e.stroke(),e.restore()}}}class CS extends dn{constructor(e){super(e),this.params={mode:0,intensity:30,center:50}}apply(){const{ctx:e,canvas:t,sourceImage:i}=this,r=t.width,s=t.height,{mode:o,intensity:a,center:l}=this.params,u=l/100*r,c=l/100*s,f=Math.max(1,Math.round(a/100*24)),h=a/100*.08,m=a/100*.12;e.clearRect(0,0,r,s),e.globalAlpha=1/f;for(let v=0;v<f;v++){const M=v/(f-1||1)-.5;if(e.save(),e.translate(u,c),o===0)e.rotate(M*h*2);else{const p=1+M*m*2;e.scale(p,p)}e.translate(-u,-c),e.drawImage(i,0,0,r,s),e.restore()}e.globalAlpha=1}}const RS={class:"app"},PS={class:"app-body"},LS={__name:"App",setup(n){const e=wt("wave-blur"),t=wt(!1),i=wt(!1),r=wt(null);let s=null,o=null;const a={"wave-blur":{name:"WaveBlurring",nameZh:"波形模糊",EffectClass:null,defaults:{horizontalChromatic:70,distortion:50,speed:60,size:60,blur:60},params:[{key:"horizontalChromatic",label:"AdjustHorizontalChromatic",desc:"水平色差强度",min:0,max:100},{key:"distortion",label:"AdjustDistortion",desc:"扭曲程度",min:0,max:100},{key:"speed",label:"AdjustSpeed",desc:"动画速度",min:0,max:100},{key:"size",label:"AdjustSize",desc:"波形尺寸",min:0,max:100},{key:"blur",label:"AdjustBlur",desc:"模糊强度",min:0,max:100}]},"basic-mosaic":{name:"Basic Mosaic",nameZh:"基础马赛克",EffectClass:vS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"马赛克块大小",min:1,max:100}]},"blur-mosaic":{name:"Blur Mosaic",nameZh:"模糊马赛克",EffectClass:xS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"模糊程度",min:1,max:100}]},"brick-mosaic":{name:"Brick Mosaic",nameZh:"砖块马赛克",EffectClass:MS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"砖块大小",min:1,max:100}]},"colorful-mosaic-1":{name:"Colorful MosaicI",nameZh:"彩色马赛克 I",EffectClass:SS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"晶格大小",min:1,max:100}]},"colorful-mosaic-2":{name:"Colorful MosaicII",nameZh:"彩色马赛克 II",EffectClass:ES,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"气泡大小",min:1,max:100}]},"colorful-mosaic-3":{name:"Colorful MosaicIII",nameZh:"彩色马赛克 III",EffectClass:yS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"三角片大小",min:1,max:100}]},"glass-mosaic-1":{name:"Glass MosaicI",nameZh:"玻璃马赛克 I",EffectClass:TS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"玻璃格大小",min:1,max:100}]},"glass-mosaic-2":{name:"Glass MosaicII",nameZh:"玻璃马赛克 II",EffectClass:bS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"磨砂格大小",min:1,max:100}]},"hexagon-mosaic":{name:"Hexagon Mosaic",nameZh:"六边形马赛克",EffectClass:AS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"六边形大小",min:1,max:100}]},"star-mosaic":{name:"Star Mosaic",nameZh:"星形马赛克",EffectClass:wS,defaults:{intensity:50},params:[{key:"intensity",label:"Intensity",desc:"星形大小",min:1,max:100}]},"radial-blur":{name:"Radial Blur",nameZh:"径向模糊",EffectClass:CS,defaults:{mode:0,intensity:30,center:50},params:[{key:"mode",label:"Mode",desc:"模式：0=旋转模糊  1=缩放模糊",min:0,max:1,step:1},{key:"intensity",label:"Intensity",desc:"模糊强度",min:0,max:100},{key:"center",label:"Center",desc:"模糊中心位置 (0=左上  100=右下)",min:0,max:100}]}},l=Ii(()=>a[e.value]||null),u=Ii(()=>{var E;return((E=l.value)==null?void 0:E.params)||[]}),c=Ii(()=>{for(const E of Ns)if(E.plugins.find(w=>w.id===e.value))return E.name;return""}),f=wt({...a["wave-blur"].defaults});Fr(f,E=>{s&&(e.value,s.updateParams(E))},{deep:!0}),la(()=>{Ds(()=>{m("wave-blur"),v()})});function h(){var E;return(E=r.value)==null?void 0:E.effectCanvas}function m(E){var C,U;s&&((C=s.destroy)==null||C.call(s),s=null);const w=a[E];if(!w)return;const R=h();R&&(E==="wave-blur"?(s=new _S(R,(U=r.value)==null?void 0:U.originalCanvas),s.init()):w.EffectClass&&(s=new w.EffectClass(R)),o&&s&&s.loadImage(o))}function v(){const E=new Image;E.crossOrigin="anonymous",E.src="/demo.jpg",E.onload=()=>{o=E,i.value=!0,s==null||s.loadImage(E)},E.onerror=()=>M()}function M(){const E=document.createElement("canvas");E.width=900,E.height=600;const w=E.getContext("2d"),R=w.createLinearGradient(0,0,900,600);R.addColorStop(0,"#101010"),R.addColorStop(1,"#1c1c1c"),w.fillStyle=R,w.fillRect(0,0,900,600),w.strokeStyle="rgba(255,255,255,.03)",w.lineWidth=1;for(let F=0;F<=900;F+=50)w.beginPath(),w.moveTo(F,0),w.lineTo(F,600),w.stroke();for(let F=0;F<=600;F+=50)w.beginPath(),w.moveTo(0,F),w.lineTo(900,F),w.stroke();const C=w.createRadialGradient(450,300,20,450,300,260);C.addColorStop(0,"rgba(255,255,255,.06)"),C.addColorStop(1,"rgba(255,255,255,0)"),w.fillStyle=C,w.fillRect(0,0,900,600),w.fillStyle="rgba(255,255,255,.18)",w.font='bold 36px "Space Grotesk", sans-serif',w.textAlign="center",w.textBaseline="middle",w.fillText("KSkr",450,278),w.font='15px "Inter", sans-serif',w.fillStyle="rgba(255,255,255,.08)",w.fillText("上传图片以开始预览",450,326);const U=new Image;U.onload=()=>{o=U,i.value=!0,s==null||s.loadImage(U)},U.src=E.toDataURL()}function p(E){var C,U,F,x;const w=((U=(C=E==null?void 0:E.target)==null?void 0:C.files)==null?void 0:U[0])||((x=(F=E==null?void 0:E.dataTransfer)==null?void 0:F.files)==null?void 0:x[0]);if(!w)return;const R=new FileReader;R.onload=A=>{const z=new Image;z.src=A.target.result,z.onload=()=>{o=z,i.value=!0,s==null||s.loadImage(z)}},R.readAsDataURL(w)}function d(){var w;const E=((w=l.value)==null?void 0:w.defaults)||{};f.value={...E}}function b(){t.value=!t.value,Ds(()=>{var E;e.value==="wave-blur"&&s&&((E=s.setCompareMode)==null||E.call(s,t.value))})}function y(E){e.value=E.id;const w=a[E.id];w&&(f.value={...w.defaults}),Ds(()=>m(E.id))}return(E,w)=>{var R;return ft(),Et("div",RS,[_t(Qp),he("div",PS,[_t(_m,{onSelectPlugin:y}),l.value?(ft(),wf(Fm,{key:0,plugin:l.value,params:u.value,modelValue:f.value,"onUpdate:modelValue":w[0]||(w[0]=C=>f.value=C),compareMode:t.value,onReset:d,onUpload:p,onToggleCompare:b},null,8,["plugin","params","modelValue","compareMode"])):Qo("",!0),_t(eg,{ref_key:"previewArea",ref:r,compareMode:t.value,hasImage:i.value,currentCategory:c.value,currentPlugin:((R=l.value)==null?void 0:R.name)||"",onUpload:p},null,8,["compareMode","hasImage","currentCategory","currentPlugin"])])])}}},DS=Qr(LS,[["__scopeId","data-v-e08462a4"]]);$p(DS).mount("#app");
