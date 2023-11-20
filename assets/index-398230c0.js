(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Pu(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ie={},Ki=[],Vt=()=>{},qE=()=>!1,FE=/^on[^a-z]/,Ma=t=>FE.test(t),Nu=t=>t.startsWith("onUpdate:"),ct=Object.assign,ku=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},UE=Object.prototype.hasOwnProperty,re=(t,e)=>UE.call(t,e),U=Array.isArray,Gi=t=>$r(t)==="[object Map]",Es=t=>$r(t)==="[object Set]",kd=t=>$r(t)==="[object Date]",Q=t=>typeof t=="function",Fe=t=>typeof t=="string",ss=t=>typeof t=="symbol",ve=t=>t!==null&&typeof t=="object",Em=t=>(ve(t)||Q(t))&&Q(t.then)&&Q(t.catch),Tm=Object.prototype.toString,$r=t=>Tm.call(t),zE=t=>$r(t).slice(8,-1),Im=t=>$r(t)==="[object Object]",xu=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fo=Pu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Va=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},jE=/-(\w)/g,on=Va(t=>t.replace(jE,(e,n)=>n?n.toUpperCase():"")),BE=/\B([A-Z])/g,Ts=Va(t=>t.replace(BE,"-$1").toLowerCase()),qa=Va(t=>t.charAt(0).toUpperCase()+t.slice(1)),Mc=Va(t=>t?`on${qa(t)}`:""),vi=(t,e)=>!Object.is(t,e),Uo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Go=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},wm=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let xd;const _l=()=>xd||(xd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function mr(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Fe(i)?KE(i):mr(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Fe(t)||ve(t))return t}const $E=/;(?![^(]*\))/g,WE=/:([^]+)/,HE=/\/\*[^]*?\*\//g;function KE(t){const e={};return t.replace(HE,"").split($E).forEach(n=>{if(n){const i=n.split(WE);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Du(t){let e="";if(Fe(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const i=Du(t[n]);i&&(e+=i+" ")}else if(ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const GE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",QE=Pu(GE);function bm(t){return!!t||t===""}function YE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Wr(t[i],e[i]);return n}function Wr(t,e){if(t===e)return!0;let n=kd(t),i=kd(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=ss(t),i=ss(e),n||i)return t===e;if(n=U(t),i=U(e),n||i)return n&&i?YE(t,e):!1;if(n=ve(t),i=ve(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Wr(t[o],e[o]))return!1}}return String(t)===String(e)}function Ou(t,e){return t.findIndex(n=>Wr(n,e))}const et=t=>Fe(t)?t:t==null?"":U(t)||ve(t)&&(t.toString===Tm||!Q(t.toString))?JSON.stringify(t,Am,2):String(t),Am=(t,e)=>e&&e.__v_isRef?Am(t,e.value):Gi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:Es(e)?{[`Set(${e.size})`]:[...e.values()]}:ve(e)&&!U(e)&&!Im(e)?String(e):e;let Et;class Cm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Et,!e&&Et&&(this.index=(Et.scopes||(Et.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Et;try{return Et=this,e()}finally{Et=n}}}on(){Et=this}off(){Et=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Fa(t){return new Cm(t)}function XE(t,e=Et){e&&e.active&&e.effects.push(t)}function Lu(){return Et}function Rm(t){Et&&Et.cleanups.push(t)}const Mu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Sm=t=>(t.w&Wn)>0,Pm=t=>(t.n&Wn)>0,JE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Wn},ZE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];Sm(s)&&!Pm(s)?s.delete(t):e[n++]=s,s.w&=~Wn,s.n&=~Wn}e.length=n}},Qo=new WeakMap;let Ks=0,Wn=1;const vl=30;let kt;const di=Symbol(""),yl=Symbol("");class Vu{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,XE(this,i)}run(){if(!this.active)return this.fn();let e=kt,n=Vn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=kt,kt=this,Vn=!0,Wn=1<<++Ks,Ks<=vl?JE(this):Dd(this),this.fn()}finally{Ks<=vl&&ZE(this),Wn=1<<--Ks,kt=this.parent,Vn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){kt===this?this.deferStop=!0:this.active&&(Dd(this),this.onStop&&this.onStop(),this.active=!1)}}function Dd(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Vn=!0;const Nm=[];function Is(){Nm.push(Vn),Vn=!1}function ws(){const t=Nm.pop();Vn=t===void 0?!0:t}function _t(t,e,n){if(Vn&&kt){let i=Qo.get(t);i||Qo.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=Mu()),km(s)}}function km(t,e){let n=!1;Ks<=vl?Pm(t)||(t.n|=Wn,n=!Sm(t)):n=!t.has(kt),n&&(t.add(kt),kt.deps.push(t))}function En(t,e,n,i,s,r){const o=Qo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&U(t)){const c=Number(i);o.forEach((l,u)=>{(u==="length"||!ss(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":U(t)?xu(n)&&a.push(o.get("length")):(a.push(o.get(di)),Gi(t)&&a.push(o.get(yl)));break;case"delete":U(t)||(a.push(o.get(di)),Gi(t)&&a.push(o.get(yl)));break;case"set":Gi(t)&&a.push(o.get(di));break}if(a.length===1)a[0]&&El(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);El(Mu(c))}}function El(t,e){const n=U(t)?t:[...t];for(const i of n)i.computed&&Od(i);for(const i of n)i.computed||Od(i)}function Od(t,e){(t!==kt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function eT(t,e){var n;return(n=Qo.get(t))==null?void 0:n.get(e)}const tT=Pu("__proto__,__v_isRef,__isVue"),xm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ss)),Ld=nT();function nT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=oe(this);for(let r=0,o=this.length;r<o;r++)_t(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(oe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Is();const i=oe(this)[e].apply(this,n);return ws(),i}}),t}function iT(t){const e=oe(this);return _t(e,"has",t),e.hasOwnProperty(t)}class Dm{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,i){const s=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw"&&i===(s?r?gT:Vm:r?Mm:Lm).get(e))return e;const o=U(e);if(!s){if(o&&re(Ld,n))return Reflect.get(Ld,n,i);if(n==="hasOwnProperty")return iT}const a=Reflect.get(e,n,i);return(ss(n)?xm.has(n):tT(n))||(s||_t(e,"get",n),r)?a:Pe(a)?o&&xu(n)?a:a.value:ve(a)?s?qm(a):za(a):a}}class Om extends Dm{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(rs(r)&&Pe(r)&&!Pe(i))return!1;if(!this._shallow&&(!Yo(i)&&!rs(i)&&(r=oe(r),i=oe(i)),!U(e)&&Pe(r)&&!Pe(i)))return r.value=i,!0;const o=U(e)&&xu(n)?Number(n)<e.length:re(e,n),a=Reflect.set(e,n,i,s);return e===oe(s)&&(o?vi(i,r)&&En(e,"set",n,i):En(e,"add",n,i)),a}deleteProperty(e,n){const i=re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&En(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!ss(n)||!xm.has(n))&&_t(e,"has",n),i}ownKeys(e){return _t(e,"iterate",U(e)?"length":di),Reflect.ownKeys(e)}}class sT extends Dm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const rT=new Om,oT=new sT,aT=new Om(!0),qu=t=>t,Ua=t=>Reflect.getPrototypeOf(t);function vo(t,e,n=!1,i=!1){t=t.__v_raw;const s=oe(t),r=oe(e);n||(vi(e,r)&&_t(s,"get",e),_t(s,"get",r));const{has:o}=Ua(s),a=i?qu:n?zu:gr;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function yo(t,e=!1){const n=this.__v_raw,i=oe(n),s=oe(t);return e||(vi(t,s)&&_t(i,"has",t),_t(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Eo(t,e=!1){return t=t.__v_raw,!e&&_t(oe(t),"iterate",di),Reflect.get(t,"size",t)}function Md(t){t=oe(t);const e=oe(this);return Ua(e).has.call(e,t)||(e.add(t),En(e,"add",t,t)),this}function Vd(t,e){e=oe(e);const n=oe(this),{has:i,get:s}=Ua(n);let r=i.call(n,t);r||(t=oe(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?vi(e,o)&&En(n,"set",t,e):En(n,"add",t,e),this}function qd(t){const e=oe(this),{has:n,get:i}=Ua(e);let s=n.call(e,t);s||(t=oe(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&En(e,"delete",t,void 0),r}function Fd(){const t=oe(this),e=t.size!==0,n=t.clear();return e&&En(t,"clear",void 0,void 0),n}function To(t,e){return function(i,s){const r=this,o=r.__v_raw,a=oe(o),c=e?qu:t?zu:gr;return!t&&_t(a,"iterate",di),o.forEach((l,u)=>i.call(s,c(l),c(u),r))}}function Io(t,e,n){return function(...i){const s=this.__v_raw,r=oe(s),o=Gi(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...i),u=n?qu:e?zu:gr;return!e&&_t(r,"iterate",c?yl:di),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function kn(t){return function(...e){return t==="delete"?!1:this}}function cT(){const t={get(r){return vo(this,r)},get size(){return Eo(this)},has:yo,add:Md,set:Vd,delete:qd,clear:Fd,forEach:To(!1,!1)},e={get(r){return vo(this,r,!1,!0)},get size(){return Eo(this)},has:yo,add:Md,set:Vd,delete:qd,clear:Fd,forEach:To(!1,!0)},n={get(r){return vo(this,r,!0)},get size(){return Eo(this,!0)},has(r){return yo.call(this,r,!0)},add:kn("add"),set:kn("set"),delete:kn("delete"),clear:kn("clear"),forEach:To(!0,!1)},i={get(r){return vo(this,r,!0,!0)},get size(){return Eo(this,!0)},has(r){return yo.call(this,r,!0)},add:kn("add"),set:kn("set"),delete:kn("delete"),clear:kn("clear"),forEach:To(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Io(r,!1,!1),n[r]=Io(r,!0,!1),e[r]=Io(r,!1,!0),i[r]=Io(r,!0,!0)}),[t,n,e,i]}const[lT,uT,hT,dT]=cT();function Fu(t,e){const n=e?t?dT:hT:t?uT:lT;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(re(n,s)&&s in i?n:i,s,r)}const fT={get:Fu(!1,!1)},pT={get:Fu(!1,!0)},mT={get:Fu(!0,!1)},Lm=new WeakMap,Mm=new WeakMap,Vm=new WeakMap,gT=new WeakMap;function _T(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vT(t){return t.__v_skip||!Object.isExtensible(t)?0:_T(zE(t))}function za(t){return rs(t)?t:Uu(t,!1,rT,fT,Lm)}function yT(t){return Uu(t,!1,aT,pT,Mm)}function qm(t){return Uu(t,!0,oT,mT,Vm)}function Uu(t,e,n,i,s){if(!ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=vT(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function qn(t){return rs(t)?qn(t.__v_raw):!!(t&&t.__v_isReactive)}function rs(t){return!!(t&&t.__v_isReadonly)}function Yo(t){return!!(t&&t.__v_isShallow)}function Fm(t){return qn(t)||rs(t)}function oe(t){const e=t&&t.__v_raw;return e?oe(e):t}function ja(t){return Go(t,"__v_skip",!0),t}const gr=t=>ve(t)?za(t):t,zu=t=>ve(t)?qm(t):t;function Um(t){Vn&&kt&&(t=oe(t),km(t.dep||(t.dep=Mu())))}function zm(t,e){t=oe(t);const n=t.dep;n&&El(n)}function Pe(t){return!!(t&&t.__v_isRef===!0)}function fi(t){return jm(t,!1)}function ET(t){return jm(t,!0)}function jm(t,e){return Pe(t)?t:new TT(t,e)}class TT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:oe(e),this._value=n?e:gr(e)}get value(){return Um(this),this._value}set value(e){const n=this.__v_isShallow||Yo(e)||rs(e);e=n?e:oe(e),vi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:gr(e),zm(this))}}function Bm(t){return Pe(t)?t.value:t}function gn(t){return Q(t)?t():Bm(t)}const IT={get:(t,e,n)=>Bm(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Pe(s)&&!Pe(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function $m(t){return qn(t)?t:new Proxy(t,IT)}function wT(t){const e=U(t)?new Array(t.length):{};for(const n in t)e[n]=Wm(t,n);return e}class bT{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return eT(oe(this._object),this._key)}}class AT{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function CT(t,e,n){return Pe(t)?t:Q(t)?new AT(t):ve(t)&&arguments.length>1?Wm(t,e,n):fi(t)}function Wm(t,e,n){const i=t[e];return Pe(i)?i:new bT(t,e,n)}class RT{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Vu(e,()=>{this._dirty||(this._dirty=!0,zm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=oe(this);return Um(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ST(t,e,n=!1){let i,s;const r=Q(t);return r?(i=t,s=Vt):(i=t.get,s=t.set),new RT(i,s,r||!s,n)}function Fn(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){Ba(r,e,n)}return s}function qt(t,e,n,i){if(Q(t)){const r=Fn(t,e,n,i);return r&&Em(r)&&r.catch(o=>{Ba(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(qt(t[r],e,n,i));return s}function Ba(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){Fn(c,null,10,[t,o,a]);return}}PT(t,n,s,i)}function PT(t,e,n,i=!0){console.error(t)}let _r=!1,Tl=!1;const st=[];let Yt=0;const Qi=[];let _n=null,si=0;const Hm=Promise.resolve();let ju=null;function Km(t){const e=ju||Hm;return t?e.then(this?t.bind(this):t):e}function NT(t){let e=Yt+1,n=st.length;for(;e<n;){const i=e+n>>>1,s=st[i],r=vr(s);r<t||r===t&&s.pre?e=i+1:n=i}return e}function Bu(t){(!st.length||!st.includes(t,_r&&t.allowRecurse?Yt+1:Yt))&&(t.id==null?st.push(t):st.splice(NT(t.id),0,t),Gm())}function Gm(){!_r&&!Tl&&(Tl=!0,ju=Hm.then(Ym))}function kT(t){const e=st.indexOf(t);e>Yt&&st.splice(e,1)}function xT(t){U(t)?Qi.push(...t):(!_n||!_n.includes(t,t.allowRecurse?si+1:si))&&Qi.push(t),Gm()}function Ud(t,e=_r?Yt+1:0){for(;e<st.length;e++){const n=st[e];n&&n.pre&&(st.splice(e,1),e--,n())}}function Qm(t){if(Qi.length){const e=[...new Set(Qi)];if(Qi.length=0,_n){_n.push(...e);return}for(_n=e,_n.sort((n,i)=>vr(n)-vr(i)),si=0;si<_n.length;si++)_n[si]();_n=null,si=0}}const vr=t=>t.id==null?1/0:t.id,DT=(t,e)=>{const n=vr(t)-vr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ym(t){Tl=!1,_r=!0,st.sort(DT);const e=Vt;try{for(Yt=0;Yt<st.length;Yt++){const n=st[Yt];n&&n.active!==!1&&Fn(n,null,14)}}finally{Yt=0,st.length=0,Qm(),_r=!1,ju=null,(st.length||Qi.length)&&Ym()}}function OT(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ie;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||Ie;d&&(s=n.map(p=>Fe(p)?p.trim():p)),h&&(s=n.map(wm))}let a,c=i[a=Mc(e)]||i[a=Mc(on(e))];!c&&r&&(c=i[a=Mc(Ts(e))]),c&&qt(c,t,6,s);const l=i[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,qt(l,t,6,s)}}function Xm(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!Q(t)){const c=l=>{const u=Xm(l,e,!0);u&&(a=!0,ct(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(ve(t)&&i.set(t,null),null):(U(r)?r.forEach(c=>o[c]=null):ct(o,r),ve(t)&&i.set(t,o),o)}function $a(t,e){return!t||!Ma(e)?!1:(e=e.slice(2).replace(/Once$/,""),re(t,e[0].toLowerCase()+e.slice(1))||re(t,Ts(e))||re(t,e))}let pt=null,Wa=null;function Xo(t){const e=pt;return pt=t,Wa=t&&t.type.__scopeId||null,e}function LT(t){Wa=t}function MT(){Wa=null}function VT(t,e=pt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Jd(-1);const r=Xo(e);let o;try{o=t(...s)}finally{Xo(r),i._d&&Jd(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Vc(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:g,inheritAttrs:_}=t;let y,x;const M=Xo(t);try{if(n.shapeFlag&4){const A=s||i;y=Qt(u.call(A,A,h,r,p,d,g)),x=c}else{const A=e;y=Qt(A.length>1?A(r,{attrs:c,slots:a,emit:l}):A(r,null)),x=e.props?c:qT(c)}}catch(A){ir.length=0,Ba(A,t,1),y=Rt(yi)}let k=y;if(x&&_!==!1){const A=Object.keys(x),{shapeFlag:K}=k;A.length&&K&7&&(o&&A.some(Nu)&&(x=FT(x,o)),k=os(k,x))}return n.dirs&&(k=os(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),y=k,Xo(M),y}const qT=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ma(n))&&((e||(e={}))[n]=t[n]);return e},FT=(t,e)=>{const n={};for(const i in t)(!Nu(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function UT(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?zd(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!$a(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?zd(i,o,l):!0:!!o;return!1}function zd(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!$a(n,r))return!0}return!1}function zT({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Jm="components";function jd(t,e){return BT(Jm,t,!0,e)||t}const jT=Symbol.for("v-ndc");function BT(t,e,n=!0,i=!1){const s=pt||Ve;if(s){const r=s.type;if(t===Jm){const a=VI(r,!1);if(a&&(a===e||a===on(e)||a===qa(on(e))))return r}const o=Bd(s[t]||r[t],e)||Bd(s.appContext[t],e);return!o&&i?r:o}}function Bd(t,e){return t&&(t[e]||t[on(e)]||t[qa(on(e))])}const $T=t=>t.__isSuspense;function WT(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):xT(t)}const wo={};function tr(t,e,n){return Zm(t,e,n)}function Zm(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=Ie){var a;const c=Lu()===((a=Ve)==null?void 0:a.scope)?Ve:null;let l,u=!1,h=!1;if(Pe(t)?(l=()=>t.value,u=Yo(t)):qn(t)?(l=()=>t,i=!0):U(t)?(h=!0,u=t.some(A=>qn(A)||Yo(A)),l=()=>t.map(A=>{if(Pe(A))return A.value;if(qn(A))return oi(A);if(Q(A))return Fn(A,c,2)})):Q(t)?e?l=()=>Fn(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),qt(t,c,3,[p])}:l=Vt,e&&i){const A=l;l=()=>oi(A())}let d,p=A=>{d=M.onStop=()=>{Fn(A,c,4)}},g;if(Ir)if(p=Vt,e?n&&qt(e,c,3,[l(),h?[]:void 0,p]):l(),s==="sync"){const A=UI();g=A.__watcherHandles||(A.__watcherHandles=[])}else return Vt;let _=h?new Array(t.length).fill(wo):wo;const y=()=>{if(M.active)if(e){const A=M.run();(i||u||(h?A.some((K,le)=>vi(K,_[le])):vi(A,_)))&&(d&&d(),qt(e,c,3,[A,_===wo?void 0:h&&_[0]===wo?[]:_,p]),_=A)}else M.run()};y.allowRecurse=!!e;let x;s==="sync"?x=y:s==="post"?x=()=>dt(y,c&&c.suspense):(y.pre=!0,c&&(y.id=c.uid),x=()=>Bu(y));const M=new Vu(l,x);e?n?y():_=M.run():s==="post"?dt(M.run.bind(M),c&&c.suspense):M.run();const k=()=>{M.stop(),c&&c.scope&&ku(c.scope.effects,M)};return g&&g.push(k),k}function HT(t,e,n){const i=this.proxy,s=Fe(t)?t.includes(".")?eg(i,t):()=>i[t]:t.bind(i,i);let r;Q(e)?r=e:(r=e.handler,n=e);const o=Ve;as(this);const a=Zm(s,r.bind(i),n);return o?as(o):mi(),a}function eg(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function oi(t,e){if(!ve(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Pe(t))oi(t.value,e);else if(U(t))for(let n=0;n<t.length;n++)oi(t[n],e);else if(Es(t)||Gi(t))t.forEach(n=>{oi(n,e)});else if(Im(t))for(const n in t)oi(t[n],e);return t}function tg(t,e){const n=pt;if(n===null)return t;const i=Qa(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,c,l=Ie]=e[r];o&&(Q(o)&&(o={mounted:o,updated:o}),o.deep&&oi(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function ei(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(Is(),qt(c,n,8,[t.el,a,t,e]),ws())}}const zo=t=>!!t.type.__asyncLoader,ng=t=>t.type.__isKeepAlive;function KT(t,e){ig(t,"a",e)}function GT(t,e){ig(t,"da",e)}function ig(t,e,n=Ve){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ha(e,i,n),n){let s=n.parent;for(;s&&s.parent;)ng(s.parent.vnode)&&QT(i,e,n,s),s=s.parent}}function QT(t,e,n,i){const s=Ha(e,t,i,!0);sg(()=>{ku(i[e],s)},n)}function Ha(t,e,n=Ve,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Is(),as(n);const a=qt(e,n,t,o);return mi(),ws(),a});return i?s.unshift(r):s.push(r),r}}const Rn=t=>(e,n=Ve)=>(!Ir||t==="sp")&&Ha(t,(...i)=>e(...i),n),YT=Rn("bm"),XT=Rn("m"),JT=Rn("bu"),ZT=Rn("u"),eI=Rn("bum"),sg=Rn("um"),rg=Rn("sp"),tI=Rn("rtg"),nI=Rn("rtc");function iI(t,e=Ve){Ha("ec",t,e)}function Jo(t,e,n,i){let s;const r=n&&n[i];if(U(t)||Fe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(ve(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}const Il=t=>t?gg(t)?Qa(t)||t.proxy:Il(t.parent):null,nr=ct(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Il(t.parent),$root:t=>Il(t.root),$emit:t=>t.emit,$options:t=>$u(t),$forceUpdate:t=>t.f||(t.f=()=>Bu(t.update)),$nextTick:t=>t.n||(t.n=Km.bind(t.proxy)),$watch:t=>HT.bind(t)}),qc=(t,e)=>t!==Ie&&!t.__isScriptSetup&&re(t,e),sI={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(qc(i,e))return o[e]=1,i[e];if(s!==Ie&&re(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&re(l,e))return o[e]=3,r[e];if(n!==Ie&&re(n,e))return o[e]=4,n[e];wl&&(o[e]=0)}}const u=nr[e];let h,d;if(u)return e==="$attrs"&&_t(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ie&&re(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,re(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return qc(s,e)?(s[e]=n,!0):i!==Ie&&re(i,e)?(i[e]=n,!0):re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==Ie&&re(t,o)||qc(e,o)||(a=r[0])&&re(a,o)||re(i,o)||re(nr,o)||re(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function $d(t){return U(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let wl=!0;function rI(t){const e=$u(t),n=t.proxy,i=t.ctx;wl=!1,e.beforeCreate&&Wd(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:_,deactivated:y,beforeDestroy:x,beforeUnmount:M,destroyed:k,unmounted:A,render:K,renderTracked:le,renderTriggered:me,errorCaptured:B,serverPrefetch:X,expose:ye,inheritAttrs:vt,components:$t,directives:Oi,filters:Ms}=e;if(l&&oI(l,i,null),o)for(const Ne in o){const ge=o[Ne];Q(ge)&&(i[Ne]=ge.bind(n))}if(s){const Ne=s.call(n,n);ve(Ne)&&(t.data=za(Ne))}if(wl=!0,r)for(const Ne in r){const ge=r[Ne],Jn=Q(ge)?ge.bind(n,n):Q(ge.get)?ge.get.bind(n,n):Vt,go=!Q(ge)&&Q(ge.set)?ge.set.bind(n):Vt,Zn=vg({get:Jn,set:go});Object.defineProperty(i,Ne,{enumerable:!0,configurable:!0,get:()=>Zn.value,set:Wt=>Zn.value=Wt})}if(a)for(const Ne in a)og(a[Ne],i,n,Ne);if(c){const Ne=Q(c)?c.call(n):c;Reflect.ownKeys(Ne).forEach(ge=>{dI(ge,Ne[ge])})}u&&Wd(u,t,"c");function de(Ne,ge){U(ge)?ge.forEach(Jn=>Ne(Jn.bind(n))):ge&&Ne(ge.bind(n))}if(de(YT,h),de(XT,d),de(JT,p),de(ZT,g),de(KT,_),de(GT,y),de(iI,B),de(nI,le),de(tI,me),de(eI,M),de(sg,A),de(rg,X),U(ye))if(ye.length){const Ne=t.exposed||(t.exposed={});ye.forEach(ge=>{Object.defineProperty(Ne,ge,{get:()=>n[ge],set:Jn=>n[ge]=Jn})})}else t.exposed||(t.exposed={});K&&t.render===Vt&&(t.render=K),vt!=null&&(t.inheritAttrs=vt),$t&&(t.components=$t),Oi&&(t.directives=Oi)}function oI(t,e,n=Vt){U(t)&&(t=bl(t));for(const i in t){const s=t[i];let r;ve(s)?"default"in s?r=pi(s.from||i,s.default,!0):r=pi(s.from||i):r=pi(s),Pe(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Wd(t,e,n){qt(U(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function og(t,e,n,i){const s=i.includes(".")?eg(n,i):()=>n[i];if(Fe(t)){const r=e[t];Q(r)&&tr(s,r)}else if(Q(t))tr(s,t.bind(n));else if(ve(t))if(U(t))t.forEach(r=>og(r,e,n,i));else{const r=Q(t.handler)?t.handler.bind(n):e[t.handler];Q(r)&&tr(s,r,t)}}function $u(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!s.length&&!n&&!i?c=e:(c={},s.length&&s.forEach(l=>Zo(c,l,o,!0)),Zo(c,e,o)),ve(e)&&r.set(e,c),c}function Zo(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Zo(t,r,n,!0),s&&s.forEach(o=>Zo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=aI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const aI={data:Hd,props:Kd,emits:Kd,methods:Gs,computed:Gs,beforeCreate:ut,created:ut,beforeMount:ut,mounted:ut,beforeUpdate:ut,updated:ut,beforeDestroy:ut,beforeUnmount:ut,destroyed:ut,unmounted:ut,activated:ut,deactivated:ut,errorCaptured:ut,serverPrefetch:ut,components:Gs,directives:Gs,watch:lI,provide:Hd,inject:cI};function Hd(t,e){return e?t?function(){return ct(Q(t)?t.call(this,this):t,Q(e)?e.call(this,this):e)}:e:t}function cI(t,e){return Gs(bl(t),bl(e))}function bl(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ut(t,e){return t?[...new Set([].concat(t,e))]:e}function Gs(t,e){return t?ct(Object.create(null),t,e):e}function Kd(t,e){return t?U(t)&&U(e)?[...new Set([...t,...e])]:ct(Object.create(null),$d(t),$d(e??{})):e}function lI(t,e){if(!t)return e;if(!e)return t;const n=ct(Object.create(null),t);for(const i in e)n[i]=ut(t[i],e[i]);return n}function ag(){return{app:null,config:{isNativeTag:qE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uI=0;function hI(t,e){return function(i,s=null){Q(i)||(i=ct({},i)),s!=null&&!ve(s)&&(s=null);const r=ag(),o=new WeakSet;let a=!1;const c=r.app={_uid:uI++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:zI,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&Q(l.install)?(o.add(l),l.install(c,...u)):Q(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const d=Rt(i,s);return d.appContext=r,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Qa(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c},runWithContext(l){yr=c;try{return l()}finally{yr=null}}};return c}}let yr=null;function dI(t,e){if(Ve){let n=Ve.provides;const i=Ve.parent&&Ve.parent.provides;i===n&&(n=Ve.provides=Object.create(i)),n[t]=e}}function pi(t,e,n=!1){const i=Ve||pt;if(i||yr){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:yr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Q(e)?e.call(i&&i.proxy):e}}function fI(){return!!(Ve||pt||yr)}function pI(t,e,n,i=!1){const s={},r={};Go(r,Ga,1),t.propsDefaults=Object.create(null),cg(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:yT(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function mI(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=oe(s),[c]=t.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if($a(t.emitsOptions,d))continue;const p=e[d];if(c)if(re(r,d))p!==r[d]&&(r[d]=p,l=!0);else{const g=on(d);s[g]=Al(c,a,g,p,t,!1)}else p!==r[d]&&(r[d]=p,l=!0)}}}else{cg(t,e,s,r)&&(l=!0);let u;for(const h in a)(!e||!re(e,h)&&((u=Ts(h))===h||!re(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Al(c,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!re(e,h))&&(delete r[h],l=!0)}l&&En(t,"set","$attrs")}function cg(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Fo(c))continue;const l=e[c];let u;s&&re(s,u=on(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:$a(t.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(r){const c=oe(n),l=a||Ie;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Al(s,c,h,l[h],t,!re(l,h))}}return o}function Al(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=re(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Q(c)){const{propsDefaults:l}=s;n in l?i=l[n]:(as(s),i=l[n]=c.call(null,e),mi())}else i=c}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ts(n))&&(i=!0))}return i}function lg(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let c=!1;if(!Q(t)){const u=h=>{c=!0;const[d,p]=lg(h,e,!0);ct(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return ve(t)&&i.set(t,Ki),Ki;if(U(r))for(let u=0;u<r.length;u++){const h=on(r[u]);Gd(h)&&(o[h]=Ie)}else if(r)for(const u in r){const h=on(u);if(Gd(h)){const d=r[u],p=o[h]=U(d)||Q(d)?{type:d}:ct({},d);if(p){const g=Xd(Boolean,p.type),_=Xd(String,p.type);p[0]=g>-1,p[1]=_<0||g<_,(g>-1||re(p,"default"))&&a.push(h)}}}const l=[o,a];return ve(t)&&i.set(t,l),l}function Gd(t){return t[0]!=="$"}function Qd(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Yd(t,e){return Qd(t)===Qd(e)}function Xd(t,e){return U(e)?e.findIndex(n=>Yd(n,t)):Q(e)&&Yd(e,t)?0:-1}const ug=t=>t[0]==="_"||t==="$stable",Wu=t=>U(t)?t.map(Qt):[Qt(t)],gI=(t,e,n)=>{if(e._n)return e;const i=VT((...s)=>Wu(e(...s)),n);return i._c=!1,i},hg=(t,e,n)=>{const i=t._ctx;for(const s in t){if(ug(s))continue;const r=t[s];if(Q(r))e[s]=gI(s,r,i);else if(r!=null){const o=Wu(r);e[s]=()=>o}}},dg=(t,e)=>{const n=Wu(e);t.slots.default=()=>n},_I=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=oe(e),Go(e,"_",n)):hg(e,t.slots={})}else t.slots={},e&&dg(t,e);Go(t.slots,Ga,1)},vI=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Ie;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(ct(s,e),!n&&a===1&&delete s._):(r=!e.$stable,hg(e,s)),o=e}else e&&(dg(t,e),o={default:1});if(r)for(const a in s)!ug(a)&&o[a]==null&&delete s[a]};function Cl(t,e,n,i,s=!1){if(U(t)){t.forEach((d,p)=>Cl(d,e&&(U(e)?e[p]:e),n,i,s));return}if(zo(i)&&!s)return;const r=i.shapeFlag&4?Qa(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ie?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Fe(l)?(u[l]=null,re(h,l)&&(h[l]=null)):Pe(l)&&(l.value=null)),Q(c))Fn(c,a,12,[o,u]);else{const d=Fe(c),p=Pe(c);if(d||p){const g=()=>{if(t.f){const _=d?re(h,c)?h[c]:u[c]:c.value;s?U(_)&&ku(_,r):U(_)?_.includes(r)||_.push(r):d?(u[c]=[r],re(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,re(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,dt(g,n)):g()}}}const dt=WT;function yI(t){return EI(t)}function EI(t,e){const n=_l();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Vt,insertStaticContent:g}=t,_=(f,m,v,E=null,T=null,R=null,D=!1,C=null,S=!!m.dynamicChildren)=>{if(f===m)return;f&&!qs(f,m)&&(E=_o(f),Wt(f,T,R,!0),f=null),m.patchFlag===-2&&(S=!1,m.dynamicChildren=null);const{type:b,ref:q,shapeFlag:L}=m;switch(b){case Ka:y(f,m,v,E);break;case yi:x(f,m,v,E);break;case Fc:f==null&&M(m,v,E,D);break;case ft:$t(f,m,v,E,T,R,D,C,S);break;default:L&1?K(f,m,v,E,T,R,D,C,S):L&6?Oi(f,m,v,E,T,R,D,C,S):(L&64||L&128)&&b.process(f,m,v,E,T,R,D,C,S,Li)}q!=null&&T&&Cl(q,f&&f.ref,R,m||f,!m)},y=(f,m,v,E)=>{if(f==null)i(m.el=a(m.children),v,E);else{const T=m.el=f.el;m.children!==f.children&&l(T,m.children)}},x=(f,m,v,E)=>{f==null?i(m.el=c(m.children||""),v,E):m.el=f.el},M=(f,m,v,E)=>{[f.el,f.anchor]=g(f.children,m,v,E,f.el,f.anchor)},k=({el:f,anchor:m},v,E)=>{let T;for(;f&&f!==m;)T=d(f),i(f,v,E),f=T;i(m,v,E)},A=({el:f,anchor:m})=>{let v;for(;f&&f!==m;)v=d(f),s(f),f=v;s(m)},K=(f,m,v,E,T,R,D,C,S)=>{D=D||m.type==="svg",f==null?le(m,v,E,T,R,D,C,S):X(f,m,T,R,D,C,S)},le=(f,m,v,E,T,R,D,C)=>{let S,b;const{type:q,props:L,shapeFlag:F,transition:G,dirs:J}=f;if(S=f.el=o(f.type,R,L&&L.is,L),F&8?u(S,f.children):F&16&&B(f.children,S,null,E,T,R&&q!=="foreignObject",D,C),J&&ei(f,null,E,"created"),me(S,f,f.scopeId,D,E),L){for(const fe in L)fe!=="value"&&!Fo(fe)&&r(S,fe,null,L[fe],R,f.children,E,T,pn);"value"in L&&r(S,"value",null,L.value),(b=L.onVnodeBeforeMount)&&Kt(b,E,f)}J&&ei(f,null,E,"beforeMount");const _e=TI(T,G);_e&&G.beforeEnter(S),i(S,m,v),((b=L&&L.onVnodeMounted)||_e||J)&&dt(()=>{b&&Kt(b,E,f),_e&&G.enter(S),J&&ei(f,null,E,"mounted")},T)},me=(f,m,v,E,T)=>{if(v&&p(f,v),E)for(let R=0;R<E.length;R++)p(f,E[R]);if(T){let R=T.subTree;if(m===R){const D=T.vnode;me(f,D,D.scopeId,D.slotScopeIds,T.parent)}}},B=(f,m,v,E,T,R,D,C,S=0)=>{for(let b=S;b<f.length;b++){const q=f[b]=C?On(f[b]):Qt(f[b]);_(null,q,m,v,E,T,R,D,C)}},X=(f,m,v,E,T,R,D)=>{const C=m.el=f.el;let{patchFlag:S,dynamicChildren:b,dirs:q}=m;S|=f.patchFlag&16;const L=f.props||Ie,F=m.props||Ie;let G;v&&ti(v,!1),(G=F.onVnodeBeforeUpdate)&&Kt(G,v,m,f),q&&ei(m,f,v,"beforeUpdate"),v&&ti(v,!0);const J=T&&m.type!=="foreignObject";if(b?ye(f.dynamicChildren,b,C,v,E,J,R):D||ge(f,m,C,null,v,E,J,R,!1),S>0){if(S&16)vt(C,m,L,F,v,E,T);else if(S&2&&L.class!==F.class&&r(C,"class",null,F.class,T),S&4&&r(C,"style",L.style,F.style,T),S&8){const _e=m.dynamicProps;for(let fe=0;fe<_e.length;fe++){const xe=_e[fe],Pt=L[xe],Mi=F[xe];(Mi!==Pt||xe==="value")&&r(C,xe,Pt,Mi,T,f.children,v,E,pn)}}S&1&&f.children!==m.children&&u(C,m.children)}else!D&&b==null&&vt(C,m,L,F,v,E,T);((G=F.onVnodeUpdated)||q)&&dt(()=>{G&&Kt(G,v,m,f),q&&ei(m,f,v,"updated")},E)},ye=(f,m,v,E,T,R,D)=>{for(let C=0;C<m.length;C++){const S=f[C],b=m[C],q=S.el&&(S.type===ft||!qs(S,b)||S.shapeFlag&70)?h(S.el):v;_(S,b,q,null,E,T,R,D,!0)}},vt=(f,m,v,E,T,R,D)=>{if(v!==E){if(v!==Ie)for(const C in v)!Fo(C)&&!(C in E)&&r(f,C,v[C],null,D,m.children,T,R,pn);for(const C in E){if(Fo(C))continue;const S=E[C],b=v[C];S!==b&&C!=="value"&&r(f,C,b,S,D,m.children,T,R,pn)}"value"in E&&r(f,"value",v.value,E.value)}},$t=(f,m,v,E,T,R,D,C,S)=>{const b=m.el=f?f.el:a(""),q=m.anchor=f?f.anchor:a("");let{patchFlag:L,dynamicChildren:F,slotScopeIds:G}=m;G&&(C=C?C.concat(G):G),f==null?(i(b,v,E),i(q,v,E),B(m.children,v,q,T,R,D,C,S)):L>0&&L&64&&F&&f.dynamicChildren?(ye(f.dynamicChildren,F,v,T,R,D,C),(m.key!=null||T&&m===T.subTree)&&fg(f,m,!0)):ge(f,m,v,q,T,R,D,C,S)},Oi=(f,m,v,E,T,R,D,C,S)=>{m.slotScopeIds=C,f==null?m.shapeFlag&512?T.ctx.activate(m,v,E,D,S):Ms(m,v,E,T,R,D,S):Nn(f,m,S)},Ms=(f,m,v,E,T,R,D)=>{const C=f.component=xI(f,E,T);if(ng(f)&&(C.ctx.renderer=Li),DI(C),C.asyncDep){if(T&&T.registerDep(C,de),!f.el){const S=C.subTree=Rt(yi);x(null,S,m,v)}return}de(C,f,m,v,T,R,D)},Nn=(f,m,v)=>{const E=m.component=f.component;if(UT(f,m,v))if(E.asyncDep&&!E.asyncResolved){Ne(E,m,v);return}else E.next=m,kT(E.update),E.update();else m.el=f.el,E.vnode=m},de=(f,m,v,E,T,R,D)=>{const C=()=>{if(f.isMounted){let{next:q,bu:L,u:F,parent:G,vnode:J}=f,_e=q,fe;ti(f,!1),q?(q.el=J.el,Ne(f,q,D)):q=J,L&&Uo(L),(fe=q.props&&q.props.onVnodeBeforeUpdate)&&Kt(fe,G,q,J),ti(f,!0);const xe=Vc(f),Pt=f.subTree;f.subTree=xe,_(Pt,xe,h(Pt.el),_o(Pt),f,T,R),q.el=xe.el,_e===null&&zT(f,xe.el),F&&dt(F,T),(fe=q.props&&q.props.onVnodeUpdated)&&dt(()=>Kt(fe,G,q,J),T)}else{let q;const{el:L,props:F}=m,{bm:G,m:J,parent:_e}=f,fe=zo(m);if(ti(f,!1),G&&Uo(G),!fe&&(q=F&&F.onVnodeBeforeMount)&&Kt(q,_e,m),ti(f,!0),L&&Lc){const xe=()=>{f.subTree=Vc(f),Lc(L,f.subTree,f,T,null)};fe?m.type.__asyncLoader().then(()=>!f.isUnmounted&&xe()):xe()}else{const xe=f.subTree=Vc(f);_(null,xe,v,E,f,T,R),m.el=xe.el}if(J&&dt(J,T),!fe&&(q=F&&F.onVnodeMounted)){const xe=m;dt(()=>Kt(q,_e,xe),T)}(m.shapeFlag&256||_e&&zo(_e.vnode)&&_e.vnode.shapeFlag&256)&&f.a&&dt(f.a,T),f.isMounted=!0,m=v=E=null}},S=f.effect=new Vu(C,()=>Bu(b),f.scope),b=f.update=()=>S.run();b.id=f.uid,ti(f,!0),b()},Ne=(f,m,v)=>{m.component=f;const E=f.vnode.props;f.vnode=m,f.next=null,mI(f,m.props,E,v),vI(f,m.children,v),Is(),Ud(),ws()},ge=(f,m,v,E,T,R,D,C,S=!1)=>{const b=f&&f.children,q=f?f.shapeFlag:0,L=m.children,{patchFlag:F,shapeFlag:G}=m;if(F>0){if(F&128){go(b,L,v,E,T,R,D,C,S);return}else if(F&256){Jn(b,L,v,E,T,R,D,C,S);return}}G&8?(q&16&&pn(b,T,R),L!==b&&u(v,L)):q&16?G&16?go(b,L,v,E,T,R,D,C,S):pn(b,T,R,!0):(q&8&&u(v,""),G&16&&B(L,v,E,T,R,D,C,S))},Jn=(f,m,v,E,T,R,D,C,S)=>{f=f||Ki,m=m||Ki;const b=f.length,q=m.length,L=Math.min(b,q);let F;for(F=0;F<L;F++){const G=m[F]=S?On(m[F]):Qt(m[F]);_(f[F],G,v,null,T,R,D,C,S)}b>q?pn(f,T,R,!0,!1,L):B(m,v,E,T,R,D,C,S,L)},go=(f,m,v,E,T,R,D,C,S)=>{let b=0;const q=m.length;let L=f.length-1,F=q-1;for(;b<=L&&b<=F;){const G=f[b],J=m[b]=S?On(m[b]):Qt(m[b]);if(qs(G,J))_(G,J,v,null,T,R,D,C,S);else break;b++}for(;b<=L&&b<=F;){const G=f[L],J=m[F]=S?On(m[F]):Qt(m[F]);if(qs(G,J))_(G,J,v,null,T,R,D,C,S);else break;L--,F--}if(b>L){if(b<=F){const G=F+1,J=G<q?m[G].el:E;for(;b<=F;)_(null,m[b]=S?On(m[b]):Qt(m[b]),v,J,T,R,D,C,S),b++}}else if(b>F)for(;b<=L;)Wt(f[b],T,R,!0),b++;else{const G=b,J=b,_e=new Map;for(b=J;b<=F;b++){const yt=m[b]=S?On(m[b]):Qt(m[b]);yt.key!=null&&_e.set(yt.key,b)}let fe,xe=0;const Pt=F-J+1;let Mi=!1,Sd=0;const Vs=new Array(Pt);for(b=0;b<Pt;b++)Vs[b]=0;for(b=G;b<=L;b++){const yt=f[b];if(xe>=Pt){Wt(yt,T,R,!0);continue}let Ht;if(yt.key!=null)Ht=_e.get(yt.key);else for(fe=J;fe<=F;fe++)if(Vs[fe-J]===0&&qs(yt,m[fe])){Ht=fe;break}Ht===void 0?Wt(yt,T,R,!0):(Vs[Ht-J]=b+1,Ht>=Sd?Sd=Ht:Mi=!0,_(yt,m[Ht],v,null,T,R,D,C,S),xe++)}const Pd=Mi?II(Vs):Ki;for(fe=Pd.length-1,b=Pt-1;b>=0;b--){const yt=J+b,Ht=m[yt],Nd=yt+1<q?m[yt+1].el:E;Vs[b]===0?_(null,Ht,v,Nd,T,R,D,C,S):Mi&&(fe<0||b!==Pd[fe]?Zn(Ht,v,Nd,2):fe--)}}},Zn=(f,m,v,E,T=null)=>{const{el:R,type:D,transition:C,children:S,shapeFlag:b}=f;if(b&6){Zn(f.component.subTree,m,v,E);return}if(b&128){f.suspense.move(m,v,E);return}if(b&64){D.move(f,m,v,Li);return}if(D===ft){i(R,m,v);for(let L=0;L<S.length;L++)Zn(S[L],m,v,E);i(f.anchor,m,v);return}if(D===Fc){k(f,m,v);return}if(E!==2&&b&1&&C)if(E===0)C.beforeEnter(R),i(R,m,v),dt(()=>C.enter(R),T);else{const{leave:L,delayLeave:F,afterLeave:G}=C,J=()=>i(R,m,v),_e=()=>{L(R,()=>{J(),G&&G()})};F?F(R,J,_e):_e()}else i(R,m,v)},Wt=(f,m,v,E=!1,T=!1)=>{const{type:R,props:D,ref:C,children:S,dynamicChildren:b,shapeFlag:q,patchFlag:L,dirs:F}=f;if(C!=null&&Cl(C,null,v,f,!0),q&256){m.ctx.deactivate(f);return}const G=q&1&&F,J=!zo(f);let _e;if(J&&(_e=D&&D.onVnodeBeforeUnmount)&&Kt(_e,m,f),q&6)VE(f.component,v,E);else{if(q&128){f.suspense.unmount(v,E);return}G&&ei(f,null,m,"beforeUnmount"),q&64?f.type.remove(f,m,v,T,Li,E):b&&(R!==ft||L>0&&L&64)?pn(b,m,v,!1,!0):(R===ft&&L&384||!T&&q&16)&&pn(S,m,v),E&&Cd(f)}(J&&(_e=D&&D.onVnodeUnmounted)||G)&&dt(()=>{_e&&Kt(_e,m,f),G&&ei(f,null,m,"unmounted")},v)},Cd=f=>{const{type:m,el:v,anchor:E,transition:T}=f;if(m===ft){ME(v,E);return}if(m===Fc){A(f);return}const R=()=>{s(v),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(f.shapeFlag&1&&T&&!T.persisted){const{leave:D,delayLeave:C}=T,S=()=>D(v,R);C?C(f.el,R,S):S()}else R()},ME=(f,m)=>{let v;for(;f!==m;)v=d(f),s(f),f=v;s(m)},VE=(f,m,v)=>{const{bum:E,scope:T,update:R,subTree:D,um:C}=f;E&&Uo(E),T.stop(),R&&(R.active=!1,Wt(D,f,m,v)),C&&dt(C,m),dt(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},pn=(f,m,v,E=!1,T=!1,R=0)=>{for(let D=R;D<f.length;D++)Wt(f[D],m,v,E,T)},_o=f=>f.shapeFlag&6?_o(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),Rd=(f,m,v)=>{f==null?m._vnode&&Wt(m._vnode,null,null,!0):_(m._vnode||null,f,m,null,null,null,v),Ud(),Qm(),m._vnode=f},Li={p:_,um:Wt,m:Zn,r:Cd,mt:Ms,mc:B,pc:ge,pbc:ye,n:_o,o:t};let Oc,Lc;return e&&([Oc,Lc]=e(Li)),{render:Rd,hydrate:Oc,createApp:hI(Rd,Oc)}}function ti({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function TI(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function fg(t,e,n=!1){const i=t.children,s=e.children;if(U(i)&&U(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=On(s[r]),a.el=o.el),n||fg(o,a)),a.type===Ka&&(a.el=o.el)}}function II(t){const e=t.slice(),n=[0];let i,s,r,o,a;const c=t.length;for(i=0;i<c;i++){const l=t[i];if(l!==0){if(s=n[n.length-1],t[s]<l){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const wI=t=>t.__isTeleport,ft=Symbol.for("v-fgt"),Ka=Symbol.for("v-txt"),yi=Symbol.for("v-cmt"),Fc=Symbol.for("v-stc"),ir=[];let Dt=null;function Te(t=!1){ir.push(Dt=t?null:[])}function bI(){ir.pop(),Dt=ir[ir.length-1]||null}let Er=1;function Jd(t){Er+=t}function pg(t){return t.dynamicChildren=Er>0?Dt||Ki:null,bI(),Er>0&&Dt&&Dt.push(t),t}function Re(t,e,n,i,s,r){return pg(j(t,e,n,i,s,r,!0))}function AI(t,e,n,i,s){return pg(Rt(t,e,n,i,s,!0))}function CI(t){return t?t.__v_isVNode===!0:!1}function qs(t,e){return t.type===e.type&&t.key===e.key}const Ga="__vInternal",mg=({key:t})=>t??null,jo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Fe(t)||Pe(t)||Q(t)?{i:pt,r:t,k:e,f:!!n}:t:null);function j(t,e=null,n=null,i=0,s=null,r=t===ft?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&mg(e),ref:e&&jo(e),scopeId:Wa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:pt};return a?(Hu(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Fe(n)?8:16),Er>0&&!o&&Dt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Dt.push(c),c}const Rt=RI;function RI(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===jT)&&(t=yi),CI(t)){const a=os(t,e,!0);return n&&Hu(a,n),Er>0&&!r&&Dt&&(a.shapeFlag&6?Dt[Dt.indexOf(t)]=a:Dt.push(a)),a.patchFlag|=-2,a}if(qI(t)&&(t=t.__vccOpts),e){e=SI(e);let{class:a,style:c}=e;a&&!Fe(a)&&(e.class=Du(a)),ve(c)&&(Fm(c)&&!U(c)&&(c=ct({},c)),e.style=mr(c))}const o=Fe(t)?1:$T(t)?128:wI(t)?64:ve(t)?4:Q(t)?2:0;return j(t,e,n,i,s,o,r,!0)}function SI(t){return t?Fm(t)||Ga in t?ct({},t):t:null}function os(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?PI(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&mg(a),ref:e&&e.ref?n&&s?U(s)?s.concat(jo(e)):[s,jo(e)]:jo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ft?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&os(t.ssContent),ssFallback:t.ssFallback&&os(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Tr(t=" ",e=0){return Rt(Ka,null,t,e)}function Gt(t="",e=!1){return e?(Te(),AI(yi,null,t)):Rt(yi,null,t)}function Qt(t){return t==null||typeof t=="boolean"?Rt(yi):U(t)?Rt(ft,null,t.slice()):typeof t=="object"?On(t):Rt(Ka,null,String(t))}function On(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:os(t)}function Hu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Hu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ga in e)?e._ctx=pt:s===3&&pt&&(pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Q(e)?(e={default:e,_ctx:pt},n=32):(e=String(e),i&64?(n=16,e=[Tr(e)]):n=8);t.children=e,t.shapeFlag|=n}function PI(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Du([e.class,i.class]));else if(s==="style")e.style=mr([e.style,i.style]);else if(Ma(s)){const r=e[s],o=i[s];o&&r!==o&&!(U(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Kt(t,e,n,i=null){qt(t,e,7,[n,i])}const NI=ag();let kI=0;function xI(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||NI,r={uid:kI++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Cm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lg(i,s),emitsOptions:Xm(i,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:i.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=OT.bind(null,r),t.ce&&t.ce(r),r}let Ve=null;const Ku=()=>Ve||pt;let Gu,Vi,Zd="__VUE_INSTANCE_SETTERS__";(Vi=_l()[Zd])||(Vi=_l()[Zd]=[]),Vi.push(t=>Ve=t),Gu=t=>{Vi.length>1?Vi.forEach(e=>e(t)):Vi[0](t)};const as=t=>{Gu(t),t.scope.on()},mi=()=>{Ve&&Ve.scope.off(),Gu(null)};function gg(t){return t.vnode.shapeFlag&4}let Ir=!1;function DI(t,e=!1){Ir=e;const{props:n,children:i}=t.vnode,s=gg(t);pI(t,n,s,e),_I(t,i);const r=s?OI(t,e):void 0;return Ir=!1,r}function OI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ja(new Proxy(t.ctx,sI));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?MI(t):null;as(t),Is();const r=Fn(i,t,0,[t.props,s]);if(ws(),mi(),Em(r)){if(r.then(mi,mi),e)return r.then(o=>{ef(t,o,e)}).catch(o=>{Ba(o,t,0)});t.asyncDep=r}else ef(t,r,e)}else _g(t,e)}function ef(t,e,n){Q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ve(e)&&(t.setupState=$m(e)),_g(t,n)}let tf;function _g(t,e,n){const i=t.type;if(!t.render){if(!e&&tf&&!i.render){const s=i.template||$u(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=i,l=ct(ct({isCustomElement:r,delimiters:a},o),c);i.render=tf(s,l)}}t.render=i.render||Vt}{as(t),Is();try{rI(t)}finally{ws(),mi()}}}function LI(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return _t(t,"get","$attrs"),e[n]}}))}function MI(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return LI(t)},slots:t.slots,emit:t.emit,expose:e}}function Qa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy($m(ja(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in nr)return nr[n](t)},has(e,n){return n in e||n in nr}}))}function VI(t,e=!0){return Q(t)?t.displayName||t.name:t.name||e&&t.__name}function qI(t){return Q(t)&&"__vccOpts"in t}const vg=(t,e)=>ST(t,e,Ir),FI=Symbol.for("v-scx"),UI=()=>pi(FI),zI="3.3.8",jI="http://www.w3.org/2000/svg",ri=typeof document<"u"?document:null,nf=ri&&ri.createElement("template"),BI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?ri.createElementNS(jI,t):ri.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>ri.createTextNode(t),createComment:t=>ri.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ri.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{nf.innerHTML=i?`<svg>${t}</svg>`:t;const a=nf.content;if(i){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},$I=Symbol("_vtc");function WI(t,e,n){const i=t[$I];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const HI=Symbol("_vod");function KI(t,e,n){const i=t.style,s=Fe(n);if(n&&!s){if(e&&!Fe(e))for(const r in e)n[r]==null&&Rl(i,r,"");for(const r in n)Rl(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),HI in t&&(i.display=r)}}const sf=/\s*!important$/;function Rl(t,e,n){if(U(n))n.forEach(i=>Rl(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=GI(t,e);sf.test(n)?t.setProperty(Ts(i),n.replace(sf,""),"important"):t[i]=n}}const rf=["Webkit","Moz","ms"],Uc={};function GI(t,e){const n=Uc[e];if(n)return n;let i=on(e);if(i!=="filter"&&i in t)return Uc[e]=i;i=qa(i);for(let s=0;s<rf.length;s++){const r=rf[s]+i;if(r in t)return Uc[e]=r}return e}const of="http://www.w3.org/1999/xlink";function QI(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(of,e.slice(6,e.length)):t.setAttributeNS(of,e,n);else{const r=QE(e);n==null||r&&!bm(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function YI(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=bm(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Qu(t,e,n,i){t.addEventListener(e,n,i)}function XI(t,e,n,i){t.removeEventListener(e,n,i)}const af=Symbol("_vei");function JI(t,e,n,i,s=null){const r=t[af]||(t[af]={}),o=r[e];if(i&&o)o.value=i;else{const[a,c]=ZI(e);if(i){const l=r[e]=nw(i,s);Qu(t,a,l,c)}else o&&(XI(t,a,o,c),r[e]=void 0)}}const cf=/(?:Once|Passive|Capture)$/;function ZI(t){let e;if(cf.test(t)){e={};let i;for(;i=t.match(cf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ts(t.slice(2)),e]}let zc=0;const ew=Promise.resolve(),tw=()=>zc||(ew.then(()=>zc=0),zc=Date.now());function nw(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;qt(iw(i,n.value),e,5,[i])};return n.value=t,n.attached=tw(),n}function iw(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const lf=/^on[a-z]/,sw=(t,e,n,i,s=!1,r,o,a,c)=>{e==="class"?WI(t,i,s):e==="style"?KI(t,n,i):Ma(e)?Nu(e)||JI(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):rw(t,e,i,s))?YI(t,e,i,r,o,a,c):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),QI(t,e,i,s))};function rw(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&lf.test(e)&&Q(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||lf.test(e)&&Fe(n)?!1:e in t}const ea=t=>{const e=t.props["onUpdate:modelValue"]||!1;return U(e)?n=>Uo(e,n):e},Yi=Symbol("_assign"),ow={deep:!0,created(t,e,n){t[Yi]=ea(n),Qu(t,"change",()=>{const i=t._modelValue,s=wr(t),r=t.checked,o=t[Yi];if(U(i)){const a=Ou(i,s),c=a!==-1;if(r&&!c)o(i.concat(s));else if(!r&&c){const l=[...i];l.splice(a,1),o(l)}}else if(Es(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(yg(t,r))})},mounted:uf,beforeUpdate(t,e,n){t[Yi]=ea(n),uf(t,e,n)}};function uf(t,{value:e,oldValue:n},i){t._modelValue=e,U(e)?t.checked=Ou(e,i.props.value)>-1:Es(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=Wr(e,yg(t,!0)))}const aw={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=Es(e);Qu(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?wm(wr(o)):wr(o));t[Yi](t.multiple?s?new Set(r):r:r[0])}),t[Yi]=ea(i)},mounted(t,{value:e}){hf(t,e)},beforeUpdate(t,e,n){t[Yi]=ea(n)},updated(t,{value:e}){hf(t,e)}};function hf(t,e){const n=t.multiple;if(!(n&&!U(e)&&!Es(e))){for(let i=0,s=t.options.length;i<s;i++){const r=t.options[i],o=wr(r);if(n)U(e)?r.selected=Ou(e,o)>-1:r.selected=e.has(o);else if(Wr(wr(r),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function wr(t){return"_value"in t?t._value:t.value}function yg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const cw=ct({patchProp:sw},BI);let df;function lw(){return df||(df=yI(cw))}const uw=(...t)=>{const e=lw().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=hw(i);if(!s)return;const r=e._component;!Q(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function hw(t){return Fe(t)?document.querySelector(t):t}var dw=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Eg;const Ya=t=>Eg=t,Tg=Symbol();function Sl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var sr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(sr||(sr={}));function fw(){const t=Fa(!0),e=t.run(()=>fi({}));let n=[],i=[];const s=ja({install(r){Ya(s),s._a=r,r.provide(Tg,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!dw?i.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Ig=()=>{};function ff(t,e,n,i=Ig){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&Lu()&&Rm(s),s}function qi(t,...e){t.slice().forEach(n=>{n(...e)})}const pw=t=>t();function Pl(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];Sl(s)&&Sl(i)&&t.hasOwnProperty(n)&&!Pe(i)&&!qn(i)?t[n]=Pl(s,i):t[n]=i}return t}const mw=Symbol();function gw(t){return!Sl(t)||!t.hasOwnProperty(mw)}const{assign:Dn}=Object;function _w(t){return!!(Pe(t)&&t.effect)}function vw(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=wT(n.state.value[t]);return Dn(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=ja(vg(()=>{Ya(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return c=wg(t,l,e,n,i,!0),c}function wg(t,e,n={},i,s,r){let o;const a=Dn({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],p;const g=i.state.value[t];!r&&!g&&(i.state.value[t]={}),fi({});let _;function y(B){let X;l=u=!1,typeof B=="function"?(B(i.state.value[t]),X={type:sr.patchFunction,storeId:t,events:p}):(Pl(i.state.value[t],B),X={type:sr.patchObject,payload:B,storeId:t,events:p});const ye=_=Symbol();Km().then(()=>{_===ye&&(l=!0)}),u=!0,qi(h,X,i.state.value[t])}const x=r?function(){const{state:X}=n,ye=X?X():{};this.$patch(vt=>{Dn(vt,ye)})}:Ig;function M(){o.stop(),h=[],d=[],i._s.delete(t)}function k(B,X){return function(){Ya(i);const ye=Array.from(arguments),vt=[],$t=[];function Oi(de){vt.push(de)}function Ms(de){$t.push(de)}qi(d,{args:ye,name:B,store:K,after:Oi,onError:Ms});let Nn;try{Nn=X.apply(this&&this.$id===t?this:K,ye)}catch(de){throw qi($t,de),de}return Nn instanceof Promise?Nn.then(de=>(qi(vt,de),de)).catch(de=>(qi($t,de),Promise.reject(de))):(qi(vt,Nn),Nn)}}const A={_p:i,$id:t,$onAction:ff.bind(null,d),$patch:y,$reset:x,$subscribe(B,X={}){const ye=ff(h,B,X.detached,()=>vt()),vt=o.run(()=>tr(()=>i.state.value[t],$t=>{(X.flush==="sync"?u:l)&&B({storeId:t,type:sr.direct,events:p},$t)},Dn({},c,X)));return ye},$dispose:M},K=za(A);i._s.set(t,K);const me=(i._a&&i._a.runWithContext||pw)(()=>i._e.run(()=>(o=Fa()).run(e)));for(const B in me){const X=me[B];if(Pe(X)&&!_w(X)||qn(X))r||(g&&gw(X)&&(Pe(X)?X.value=g[B]:Pl(X,g[B])),i.state.value[t][B]=X);else if(typeof X=="function"){const ye=k(B,X);me[B]=ye,a.actions[B]=X}}return Dn(K,me),Dn(oe(K),me),Object.defineProperty(K,"$state",{get:()=>i.state.value[t],set:B=>{y(X=>{Dn(X,B)})}}),i._p.forEach(B=>{Dn(K,o.run(()=>B({store:K,app:i._a,pinia:i,options:a})))}),g&&r&&n.hydrate&&n.hydrate(K.$state,g),l=!0,u=!0,K}function bg(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(a,c){const l=fI();return a=a||(l?pi(Tg,null):null),a&&Ya(a),a=Eg,a._s.has(i)||(r?wg(i,e,s,a):vw(i,s,a)),a._s.get(i)}return o.$id=i,o}const Nt=bg({id:"partyFFVL",state:()=>({qcms:[],nbErrors:0}),actions:{setAnswerd(t){this.qcms.find(e=>e.id===t).answered=!0},setValidated(t){this.qcms.find(e=>e.id===t).validated=!0},setQCMs(t){this.qcms=t},setNbErrors(t){this.nbErrors=t}},getters:{}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(t,e){if(!t)throw bs(e)},bs=function(t){return new Error("Firebase Database ("+Ag.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},yw=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Xa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),i.push(n[u],n[h],n[d],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||l==null||h==null)throw new Ew;const d=r<<2|a>>4;if(i.push(d),l!==64){const p=a<<4&240|l>>2;if(i.push(p),h!==64){const g=l<<6&192|h;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ew extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rg=function(t){const e=Cg(t);return Xa.encodeByteArray(e,!0)},ta=function(t){return Rg(t).replace(/\./g,"")},na=function(t){try{return Xa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(t){return Sg(void 0,t)}function Sg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Iw(n)||(t[n]=Sg(t[n],e[n]));return t}function Iw(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=()=>ww().__FIREBASE_DEFAULTS__,Aw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Cw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&na(t[1]);return e&&JSON.parse(e)},Yu=()=>{try{return bw()||Aw()||Cw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rw=t=>{var e,n;return(n=(e=Yu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Sw=t=>{const e=Rw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Pg=()=>{var t;return(t=Yu())===null||t===void 0?void 0:t.config},Pw=t=>{var e;return(e=Yu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ta(JSON.stringify(n)),ta(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(an())}function kw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ng(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kg(){return Ag.NODE_ADMIN===!0}function xg(){try{return typeof indexedDB=="object"}catch{return!1}}function xw(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="FirebaseError";class Sn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Dw,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,As.prototype.create)}}class As{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Ow(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Sn(s,a,i)}}function Ow(t,e){return t.replace(Lw,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Lw=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(t){return JSON.parse(t)}function Ge(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=Ar(na(r[0])||""),n=Ar(na(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},Mw=function(t){const e=Dg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Vw=function(t){const e=Dg(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function cs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function pf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ia(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Nl(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(mf(r)&&mf(o)){if(!Nl(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function mf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+l+c+u+i[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Fw(t,e){const n=new Uw(t,e);return n.subscribe.bind(n)}class Uw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");zw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=jc),s.error===void 0&&(s.error=jc),s.complete===void 0&&(s.complete=jc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jc(){}function jw(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,P(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ja=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t){return t&&t._delegate?t._delegate:t}class zt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new br;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hw(e))try{this.getOrInitializeService({instanceIdentifier:ni})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ni){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ni){return this.instances.has(e)}getOptions(e=ni){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ww(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ni){return this.component?this.component.multipleInstances?e:ni:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ww(t){return t===ni?void 0:t}function Hw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $w(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const Gw={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Qw=Z.INFO,Yw={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Xw=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Yw[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hr{constructor(e){this.name=e,this._logLevel=Qw,this._logHandler=Xw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const Jw=(t,e)=>e.some(n=>t instanceof n);let gf,_f;function Zw(){return gf||(gf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function e0(){return _f||(_f=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Og=new WeakMap,kl=new WeakMap,Lg=new WeakMap,Bc=new WeakMap,Zu=new WeakMap;function t0(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Un(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Og.set(n,t)}).catch(()=>{}),Zu.set(e,t),e}function n0(t){if(kl.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});kl.set(t,e)}let xl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function i0(t){xl=t(xl)}function s0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call($c(this),e,...n);return Lg.set(i,e.sort?e.sort():[e]),Un(i)}:e0().includes(t)?function(...e){return t.apply($c(this),e),Un(Og.get(this))}:function(...e){return Un(t.apply($c(this),e))}}function r0(t){return typeof t=="function"?s0(t):(t instanceof IDBTransaction&&n0(t),Jw(t,Zw())?new Proxy(t,xl):t)}function Un(t){if(t instanceof IDBRequest)return t0(t);if(Bc.has(t))return Bc.get(t);const e=r0(t);return e!==t&&(Bc.set(t,e),Zu.set(e,t)),e}const $c=t=>Zu.get(t);function o0(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Un(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Un(o.result),c.oldVersion,c.newVersion,Un(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const a0=["get","getKey","getAll","getAllKeys","count"],c0=["put","add","delete","clear"],Wc=new Map;function vf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wc.get(e))return Wc.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=c0.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||a0.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Wc.set(e,r),r}i0(t=>({...t,get:(e,n,i)=>vf(e,n)||t.get(e,n,i),has:(e,n)=>!!vf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(u0(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function u0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dl="@firebase/app",yf="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=new Hr("@firebase/app"),h0="@firebase/app-compat",d0="@firebase/analytics-compat",f0="@firebase/analytics",p0="@firebase/app-check-compat",m0="@firebase/app-check",g0="@firebase/auth",_0="@firebase/auth-compat",v0="@firebase/database",y0="@firebase/database-compat",E0="@firebase/functions",T0="@firebase/functions-compat",I0="@firebase/installations",w0="@firebase/installations-compat",b0="@firebase/messaging",A0="@firebase/messaging-compat",C0="@firebase/performance",R0="@firebase/performance-compat",S0="@firebase/remote-config",P0="@firebase/remote-config-compat",N0="@firebase/storage",k0="@firebase/storage-compat",x0="@firebase/firestore",D0="@firebase/firestore-compat",O0="firebase",L0="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol="[DEFAULT]",M0={[Dl]:"fire-core",[h0]:"fire-core-compat",[f0]:"fire-analytics",[d0]:"fire-analytics-compat",[m0]:"fire-app-check",[p0]:"fire-app-check-compat",[g0]:"fire-auth",[_0]:"fire-auth-compat",[v0]:"fire-rtdb",[y0]:"fire-rtdb-compat",[E0]:"fire-fn",[T0]:"fire-fn-compat",[I0]:"fire-iid",[w0]:"fire-iid-compat",[b0]:"fire-fcm",[A0]:"fire-fcm-compat",[C0]:"fire-perf",[R0]:"fire-perf-compat",[S0]:"fire-rc",[P0]:"fire-rc-compat",[N0]:"fire-gcs",[k0]:"fire-gcs-compat",[x0]:"fire-fst",[D0]:"fire-fst-compat","fire-js":"fire-js",[O0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=new Map,Ll=new Map;function V0(t,e){try{t.container.addComponent(e)}catch(n){Ei.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cn(t){const e=t.name;if(Ll.has(e))return Ei.debug(`There were multiple attempts to register component ${e}.`),!1;Ll.set(e,t);for(const n of sa.values())V0(n,t);return!0}function q0(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},zn=new As("app","Firebase",F0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=L0;function Mg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ol,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw zn.create("bad-app-name",{appName:String(s)});if(n||(n=Pg()),!n)throw zn.create("no-options");const r=sa.get(s);if(r){if(Nl(n,r.options)&&Nl(i,r.config))return r;throw zn.create("duplicate-app",{appName:s})}const o=new Kw(s);for(const c of Ll.values())o.addComponent(c);const a=new U0(n,i,o);return sa.set(s,a),a}function Vg(t=Ol){const e=sa.get(t);if(!e&&t===Ol&&Pg())return Mg();if(!e)throw zn.create("no-app",{appName:t});return e}function Tt(t,e,n){var i;let s=(i=M0[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ei.warn(a.join(" "));return}cn(new zt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0="firebase-heartbeat-database",j0=1,Cr="firebase-heartbeat-store";let Hc=null;function qg(){return Hc||(Hc=o0(z0,j0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Cr)}}}).catch(t=>{throw zn.create("idb-open",{originalErrorMessage:t.message})})),Hc}async function B0(t){try{return await(await qg()).transaction(Cr).objectStore(Cr).get(Fg(t))}catch(e){if(e instanceof Sn)Ei.warn(e.message);else{const n=zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ei.warn(n.message)}}}async function Ef(t,e){try{const i=(await qg()).transaction(Cr,"readwrite");await i.objectStore(Cr).put(e,Fg(t)),await i.done}catch(n){if(n instanceof Sn)Ei.warn(n.message);else{const i=zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ei.warn(i.message)}}}function Fg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=1024,W0=30*24*60*60*1e3;class H0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new G0(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Tf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=W0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Tf(),{heartbeatsToSend:i,unsentEntries:s}=K0(this._heartbeatsCache.heartbeats),r=ta(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Tf(){return new Date().toISOString().substring(0,10)}function K0(t,e=$0){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),If(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),If(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class G0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xg()?xw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await B0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ef(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ef(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function If(t){return ta(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(t){cn(new zt("platform-logger",e=>new l0(e),"PRIVATE")),cn(new zt("heartbeat",e=>new H0(e),"PRIVATE")),Tt(Dl,yf,t),Tt(Dl,yf,"esm2017"),Tt("fire-js","")}Q0("");var Y0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,eh=eh||{},W=Y0||self;function Za(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Kr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function X0(t){return Object.prototype.hasOwnProperty.call(t,Kc)&&t[Kc]||(t[Kc]=++J0)}var Kc="closure_uid_"+(1e9*Math.random()>>>0),J0=0;function Z0(t,e,n){return t.call.apply(t.bind,arguments)}function eb(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ot(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ot=Z0:ot=eb,ot.apply(null,arguments)}function bo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function We(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Yn(){this.s=this.s,this.o=this.o}var tb=0;Yn.prototype.s=!1;Yn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),tb!=0)&&X0(this)};Yn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ug=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function th(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function wf(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Za(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};var nb=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",()=>{},e),W.removeEventListener("test",()=>{},e)}catch{}return t}();function Rr(t){return/^[\s\xa0]*$/.test(t)}function ec(){var t=W.navigator;return t&&(t=t.userAgent)?t:""}function Xt(t){return ec().indexOf(t)!=-1}function nh(t){return nh[" "](t),t}nh[" "]=function(){};function ib(t,e){var n=Qb;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var sb=Xt("Opera"),ls=Xt("Trident")||Xt("MSIE"),zg=Xt("Edge"),Ml=zg||ls,jg=Xt("Gecko")&&!(ec().toLowerCase().indexOf("webkit")!=-1&&!Xt("Edge"))&&!(Xt("Trident")||Xt("MSIE"))&&!Xt("Edge"),rb=ec().toLowerCase().indexOf("webkit")!=-1&&!Xt("Edge");function Bg(){var t=W.document;return t?t.documentMode:void 0}var Vl;e:{var Gc="",Qc=function(){var t=ec();if(jg)return/rv:([^\);]+)(\)|;)/.exec(t);if(zg)return/Edge\/([\d\.]+)/.exec(t);if(ls)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(rb)return/WebKit\/(\S+)/.exec(t);if(sb)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Qc&&(Gc=Qc?Qc[1]:""),ls){var Yc=Bg();if(Yc!=null&&Yc>parseFloat(Gc)){Vl=String(Yc);break e}}Vl=Gc}var ql;if(W.document&&ls){var bf=Bg();ql=bf||parseInt(Vl,10)||void 0}else ql=void 0;var ob=ql;function Sr(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(jg){e:{try{nh(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ab[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Sr.$.h.call(this)}}We(Sr,at);var ab={2:"touch",3:"pen",4:"mouse"};Sr.prototype.h=function(){Sr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Gr="closure_listenable_"+(1e6*Math.random()|0),cb=0;function lb(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=s,this.key=++cb,this.fa=this.ia=!1}function tc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function ih(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function ub(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function $g(t){const e={};for(const n in t)e[n]=t[n];return e}const Af="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wg(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<Af.length;r++)n=Af[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function nc(t){this.src=t,this.g={},this.h=0}nc.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Ul(t,e,i,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new lb(e,this.src,r,!!i,s),e.ia=n,t.push(e)),e};function Fl(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=Ug(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(tc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ul(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==i)return s}return-1}var sh="closure_lm_"+(1e6*Math.random()|0),Xc={};function Hg(t,e,n,i,s){if(i&&i.once)return Gg(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Hg(t,e[r],n,i,s);return null}return n=ah(n),t&&t[Gr]?t.O(e,n,Kr(i)?!!i.capture:!!i,s):Kg(t,e,n,!1,i,s)}function Kg(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Kr(s)?!!s.capture:!!s,a=oh(t);if(a||(t[sh]=a=new nc(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=hb(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)nb||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Yg(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function hb(){function t(n){return e.call(t.src,t.listener,n)}const e=db;return t}function Gg(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Gg(t,e[r],n,i,s);return null}return n=ah(n),t&&t[Gr]?t.P(e,n,Kr(i)?!!i.capture:!!i,s):Kg(t,e,n,!0,i,s)}function Qg(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Qg(t,e[r],n,i,s);else i=Kr(i)?!!i.capture:!!i,n=ah(n),t&&t[Gr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Ul(r,n,i,s),-1<n&&(tc(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=oh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ul(e,n,i,s)),(n=-1<t?e[t]:null)&&rh(n))}function rh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Gr])Fl(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Yg(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=oh(e))?(Fl(n,t),n.h==0&&(n.src=null,e[sh]=null)):tc(t)}}}function Yg(t){return t in Xc?Xc[t]:Xc[t]="on"+t}function db(t,e){if(t.fa)t=!0;else{e=new Sr(e,this);var n=t.listener,i=t.la||t.src;t.ia&&rh(t),t=n.call(i,e)}return t}function oh(t){return t=t[sh],t instanceof nc?t:null}var Jc="__closure_events_fn_"+(1e9*Math.random()>>>0);function ah(t){return typeof t=="function"?t:(t[Jc]||(t[Jc]=function(e){return t.handleEvent(e)}),t[Jc])}function $e(){Yn.call(this),this.i=new nc(this),this.S=this,this.J=null}We($e,Yn);$e.prototype[Gr]=!0;$e.prototype.removeEventListener=function(t,e,n,i){Qg(this,t,e,n,i)};function Ye(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var s=e;e=new at(i,t),Wg(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Ao(o,i,!0,e)&&s}if(o=e.g=t,s=Ao(o,i,!0,e)&&s,s=Ao(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Ao(o,i,!1,e)&&s}$e.prototype.N=function(){if($e.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)tc(n[i]);delete t.g[e],t.h--}}this.J=null};$e.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};$e.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Ao(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Fl(t.i,o),s=a.call(c,i)!==!1&&s}}return s&&!i.defaultPrevented}var ch=W.JSON.stringify;class fb{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function pb(){var t=lh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class mb{constructor(){this.h=this.g=null}add(e,n){const i=Xg.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Xg=new fb(()=>new gb,t=>t.reset());class gb{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function _b(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function vb(t){W.setTimeout(()=>{throw t},0)}let Pr,Nr=!1,lh=new mb,Jg=()=>{const t=W.Promise.resolve(void 0);Pr=()=>{t.then(yb)}};var yb=()=>{for(var t;t=pb();){try{t.h.call(t.g)}catch(n){vb(n)}var e=Xg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Nr=!1};function ic(t,e){$e.call(this),this.h=t||1,this.g=e||W,this.j=ot(this.qb,this),this.l=Date.now()}We(ic,$e);N=ic.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ye(this,"tick"),this.ga&&(uh(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function uh(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){ic.$.N.call(this),uh(this),delete this.g};function hh(t,e,n){if(typeof t=="function")n&&(t=ot(t,n));else if(t&&typeof t.handleEvent=="function")t=ot(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function Zg(t){t.g=hh(()=>{t.g=null,t.i&&(t.i=!1,Zg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Eb extends Yn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Zg(this)}N(){super.N(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function kr(t){Yn.call(this),this.h=t,this.g={}}We(kr,Yn);var Cf=[];function e_(t,e,n,i){Array.isArray(n)||(n&&(Cf[0]=n.toString()),n=Cf);for(var s=0;s<n.length;s++){var r=Hg(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function t_(t){ih(t.g,function(e,n){this.g.hasOwnProperty(n)&&rh(e)},t),t.g={}}kr.prototype.N=function(){kr.$.N.call(this),t_(this)};kr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function sc(){this.g=!0}sc.prototype.Ea=function(){this.g=!1};function Tb(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Ib(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function $i(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+bb(t,n)+(i?" "+i:"")})}function wb(t,e){t.info(function(){return"TIMEOUT: "+e})}sc.prototype.info=function(){};function bb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return ch(n)}catch{return e}}var Si={},Rf=null;function rc(){return Rf=Rf||new $e}Si.Ta="serverreachability";function n_(t){at.call(this,Si.Ta,t)}We(n_,at);function xr(t){const e=rc();Ye(e,new n_(e))}Si.STAT_EVENT="statevent";function i_(t,e){at.call(this,Si.STAT_EVENT,t),this.stat=e}We(i_,at);function ht(t){const e=rc();Ye(e,new i_(e,t))}Si.Ua="timingevent";function s_(t,e){at.call(this,Si.Ua,t),this.size=e}We(s_,at);function Qr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var oc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},r_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function dh(){}dh.prototype.h=null;function Sf(t){return t.h||(t.h=t.i())}function o_(){}var Yr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function fh(){at.call(this,"d")}We(fh,at);function ph(){at.call(this,"c")}We(ph,at);var zl;function ac(){}We(ac,dh);ac.prototype.g=function(){return new XMLHttpRequest};ac.prototype.i=function(){return{}};zl=new ac;function Xr(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new kr(this),this.P=Ab,t=Ml?125:void 0,this.V=new ic(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new a_}function a_(){this.i=null,this.g="",this.h=!1}var Ab=45e3,jl={},ra={};N=Xr.prototype;N.setTimeout=function(t){this.P=t};function Bl(t,e,n){t.L=1,t.v=lc(bn(e)),t.s=n,t.S=!0,c_(t,null)}function c_(t,e){t.G=Date.now(),Jr(t),t.A=bn(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),g_(n.i,"t",i),t.C=0,n=t.l.J,t.h=new a_,t.g=V_(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Eb(ot(t.Pa,t,t.g),t.O)),e_(t.U,t.g,"readystatechange",t.nb),e=t.I?$g(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),xr(),Tb(t.j,t.u,t.A,t.m,t.W,t.s)}N.nb=function(t){t=t.target;const e=this.M;e&&Jt(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const u=Jt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Ml||this.g&&(this.h.h||this.g.ja()||xf(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?xr(3):xr(2)),cc(this);var n=this.g.da();this.ca=n;t:if(l_(this)){var i=xf(this.g);t="";var s=i.length,r=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ai(this),rr(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Ib(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Rr(a)){var l=a;break t}}l=null}if(n=l)$i(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$l(this,n);else{this.i=!1,this.o=3,ht(12),ai(this),rr(this);break e}}this.S?(u_(this,u,o),Ml&&this.i&&u==3&&(e_(this.U,this.V,"tick",this.mb),this.V.start())):($i(this.j,this.m,o,null),$l(this,o)),u==4&&ai(this),this.i&&!this.J&&(u==4?D_(this.l,this):(this.i=!1,Jr(this)))}else Hb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ht(12)):(this.o=0,ht(13)),ai(this),rr(this)}}}catch{}finally{}};function l_(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function u_(t,e,n){let i=!0,s;for(;!t.J&&t.C<n.length;)if(s=Cb(t,n),s==ra){e==4&&(t.o=4,ht(14),i=!1),$i(t.j,t.m,null,"[Incomplete Response]");break}else if(s==jl){t.o=4,ht(15),$i(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else $i(t.j,t.m,s,null),$l(t,s);l_(t)&&s!=ra&&s!=jl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ht(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Eh(e),e.M=!0,ht(11))):($i(t.j,t.m,n,"[Invalid Chunked Response]"),ai(t),rr(t))}N.mb=function(){if(this.g){var t=Jt(this.g),e=this.g.ja();this.C<e.length&&(cc(this),u_(this,t,e),this.i&&t!=4&&Jr(this))}};function Cb(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?ra:(n=Number(e.substring(n,i)),isNaN(n)?jl:(i+=1,i+n>e.length?ra:(e=e.slice(i,i+n),t.C=i+n,e)))}N.cancel=function(){this.J=!0,ai(this)};function Jr(t){t.Y=Date.now()+t.P,h_(t,t.P)}function h_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Qr(ot(t.lb,t),e)}function cc(t){t.B&&(W.clearTimeout(t.B),t.B=null)}N.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(wb(this.j,this.A),this.L!=2&&(xr(),ht(17)),ai(this),this.o=2,rr(this)):h_(this,this.Y-t)};function rr(t){t.l.H==0||t.J||D_(t.l,t)}function ai(t){cc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,uh(t.V),t_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function $l(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Wl(n.i,t))){if(!t.K&&Wl(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ca(n),dc(n);else break e;yh(n),ht(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Qr(ot(n.ib,n),6e3));if(1>=y_(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ci(n,11)}else if((t.K||n.g==t)&&ca(n),!Rr(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=i.i;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(mh(r,r.h),r.h=null))}if(i.F){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(i.Da=_,be(i.I,i.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=M_(i,i.J?i.pa:null,i.Y),o.K){E_(i.i,o);var a=o,c=i.L;c&&a.setTimeout(c),a.B&&(cc(a),Jr(a)),i.g=o}else k_(i);0<n.j.length&&fc(n)}else l[0]!="stop"&&l[0]!="close"||ci(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ci(n,7):vh(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}xr(4)}catch{}}function Rb(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Za(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function Sb(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Za(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function d_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Za(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Sb(t),i=Rb(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var f_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function gi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof gi){this.h=t.h,oa(this,t.j),this.s=t.s,this.g=t.g,aa(this,t.m),this.l=t.l;var e=t.i,n=new Dr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Pf(this,n),this.o=t.o}else t&&(e=String(t).match(f_))?(this.h=!1,oa(this,e[1]||"",!0),this.s=Qs(e[2]||""),this.g=Qs(e[3]||"",!0),aa(this,e[4]),this.l=Qs(e[5]||"",!0),Pf(this,e[6]||"",!0),this.o=Qs(e[7]||"")):(this.h=!1,this.i=new Dr(null,this.h))}gi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ys(e,Nf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ys(e,Nf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ys(n,n.charAt(0)=="/"?xb:kb,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ys(n,Ob)),t.join("")};function bn(t){return new gi(t)}function oa(t,e,n){t.j=n?Qs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function aa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Pf(t,e,n){e instanceof Dr?(t.i=e,Lb(t.i,t.h)):(n||(e=Ys(e,Db)),t.i=new Dr(e,t.h))}function be(t,e,n){t.i.set(e,n)}function lc(t){return be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Qs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ys(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Nb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Nb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Nf=/[#\/\?@]/g,kb=/[#\?:]/g,xb=/[#\?]/g,Db=/[#\?@]/g,Ob=/#/g;function Dr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Xn(t){t.g||(t.g=new Map,t.h=0,t.i&&Pb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=Dr.prototype;N.add=function(t,e){Xn(this),this.i=null,t=Rs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function p_(t,e){Xn(t),e=Rs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function m_(t,e){return Xn(t),e=Rs(t,e),t.g.has(e)}N.forEach=function(t,e){Xn(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};N.ta=function(){Xn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};N.Z=function(t){Xn(this);let e=[];if(typeof t=="string")m_(this,t)&&(e=e.concat(this.g.get(Rs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return Xn(this),this.i=null,t=Rs(this,t),m_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function g_(t,e,n){p_(t,e),0<n.length&&(t.i=null,t.g.set(Rs(t,e),th(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function Rs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Lb(t,e){e&&!t.j&&(Xn(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(p_(this,i),g_(this,s,n))},t)),t.j=e}var Mb=class{constructor(t,e){this.g=t,this.map=e}};function __(t){this.l=t||Vb,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ka&&W.g.Ka()&&W.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Vb=10;function v_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function y_(t){return t.h?1:t.g?t.g.size:0}function Wl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function mh(t,e){t.g?t.g.add(e):t.h=e}function E_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}__.prototype.cancel=function(){if(this.i=T_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function T_(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return th(t.i)}var qb=class{stringify(t){return W.JSON.stringify(t,void 0)}parse(t){return W.JSON.parse(t,void 0)}};function Fb(){this.g=new qb}function Ub(t,e,n){const i=n||"";try{d_(t,function(s,r){let o=s;Kr(s)&&(o=ch(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function zb(t,e){const n=new sc;if(W.Image){const i=new Image;i.onload=bo(Co,n,i,"TestLoadImage: loaded",!0,e),i.onerror=bo(Co,n,i,"TestLoadImage: error",!1,e),i.onabort=bo(Co,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=bo(Co,n,i,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Co(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Zr(t){this.l=t.ec||null,this.j=t.ob||!1}We(Zr,dh);Zr.prototype.g=function(){return new uc(this.l,this.j)};Zr.prototype.i=function(t){return function(){return t}}({});function uc(t,e){$e.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=gh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}We(uc,$e);var gh=0;N=uc.prototype;N.open=function(t,e){if(this.readyState!=gh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Or(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||W).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,eo(this)),this.readyState=gh};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Or(this)),this.g&&(this.readyState=3,Or(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;I_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function I_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?eo(this):Or(this),this.readyState==3&&I_(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,eo(this))};N.Ya=function(t){this.g&&(this.response=t,eo(this))};N.ka=function(){this.g&&eo(this)};function eo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Or(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Or(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(uc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var jb=W.JSON.parse;function ke(t){$e.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=w_,this.L=this.M=!1}We(ke,$e);var w_="",Bb=/^https?$/i,$b=["POST","PUT"];N=ke.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():zl.g(),this.C=this.u?Sf(this.u):Sf(zl),this.g.onreadystatechange=ot(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){kf(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=W.FormData&&t instanceof W.FormData,!(0<=Ug($b,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{C_(this),0<this.B&&((this.L=Wb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ot(this.ua,this)):this.A=hh(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){kf(this,r)}};function Wb(t){return ls&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof eh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ye(this,"timeout"),this.abort(8))};function kf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,b_(t),hc(t)}function b_(t){t.F||(t.F=!0,Ye(t,"complete"),Ye(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ye(this,"complete"),Ye(this,"abort"),hc(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),hc(this,!0)),ke.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?A_(this):this.kb())};N.kb=function(){A_(this)};function A_(t){if(t.h&&typeof eh<"u"&&(!t.C[1]||Jt(t)!=4||t.da()!=2)){if(t.v&&Jt(t)==4)hh(t.La,0,t);else if(Ye(t,"readystatechange"),Jt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var s=String(t.I).match(f_)[1]||null;!s&&W.self&&W.self.location&&(s=W.self.location.protocol.slice(0,-1)),i=!Bb.test(s?s.toLowerCase():"")}n=i}if(n)Ye(t,"complete"),Ye(t,"success");else{t.m=6;try{var r=2<Jt(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",b_(t)}}finally{hc(t)}}}}function hc(t,e){if(t.g){C_(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ye(t,"ready");try{n.onreadystatechange=i}catch{}}}function C_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}N.isActive=function(){return!!this.g};function Jt(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),jb(e)}};function xf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case w_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Hb(t){const e={};t=(t.g&&2<=Jt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(Rr(t[i]))continue;var n=_b(t[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[s]||[];e[s]=r,r.push(n)}ub(e,function(i){return i.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function R_(t){let e="";return ih(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function _h(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=R_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):be(t,e,n))}function Fs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function S_(t){this.Ga=0,this.j=[],this.l=new sc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Fs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Fs("baseRetryDelayMs",5e3,t),this.hb=Fs("retryDelaySeedMs",1e4,t),this.eb=Fs("forwardChannelMaxRetries",2,t),this.xa=Fs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new __(t&&t.concurrentRequestLimit),this.Ja=new Fb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=S_.prototype;N.ra=8;N.H=1;function vh(t){if(P_(t),t.H==3){var e=t.W++,n=bn(t.I);if(be(n,"SID",t.K),be(n,"RID",e),be(n,"TYPE","terminate"),to(t,n),e=new Xr(t,t.l,e),e.L=2,e.v=lc(bn(n)),n=!1,W.navigator&&W.navigator.sendBeacon)try{n=W.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=V_(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Jr(e)}L_(t)}function dc(t){t.g&&(Eh(t),t.g.cancel(),t.g=null)}function P_(t){dc(t),t.u&&(W.clearTimeout(t.u),t.u=null),ca(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function fc(t){if(!v_(t.i)&&!t.m){t.m=!0;var e=t.Na;Pr||Jg(),Nr||(Pr(),Nr=!0),lh.add(e,t),t.C=0}}function Kb(t,e){return y_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Qr(ot(t.Na,t,e),O_(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Xr(this,this.l,t);let r=this.s;if(this.U&&(r?(r=$g(r),Wg(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=N_(this,s,e),n=bn(this.I),be(n,"RID",t),be(n,"CVER",22),this.F&&be(n,"X-HTTP-Session-Id",this.F),to(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(R_(r)))+"&"+e:this.o&&_h(n,this.o,r)),mh(this.i,s),this.bb&&be(n,"TYPE","init"),this.P?(be(n,"$req",e),be(n,"SID","null"),s.aa=!0,Bl(s,n,null)):Bl(s,n,e),this.H=2}}else this.H==3&&(t?Df(this,t):this.j.length==0||v_(this.i)||Df(this))};function Df(t,e){var n;e?n=e.m:n=t.W++;const i=bn(t.I);be(i,"SID",t.K),be(i,"RID",n),be(i,"AID",t.V),to(t,i),t.o&&t.s&&_h(i,t.o,t.s),n=new Xr(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=N_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),mh(t.i,n),Bl(n,i,e)}function to(t,e){t.na&&ih(t.na,function(n,i){be(e,i,n)}),t.h&&d_({},function(n,i){be(e,i,n)})}function N_(t,e,n){n=Math.min(t.j.length,n);var i=t.h?ot(t.h.Va,t.h,t):null;e:{var s=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=r,0>l)r=Math.max(0,s[c].g-100),a=!1;else try{Ub(u,o,"req"+l+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function k_(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Pr||Jg(),Nr||(Pr(),Nr=!0),lh.add(e,t),t.A=0}}function yh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Qr(ot(t.Ma,t),O_(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,x_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Qr(ot(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ht(10),dc(this),x_(this))};function Eh(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function x_(t){t.g=new Xr(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=bn(t.wa);be(e,"RID","rpc"),be(e,"SID",t.K),be(e,"AID",t.V),be(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&be(e,"TO",t.qa),be(e,"TYPE","xmlhttp"),to(t,e),t.o&&t.s&&_h(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=lc(bn(e)),n.s=null,n.S=!0,c_(n,t)}N.ib=function(){this.v!=null&&(this.v=null,dc(this),yh(this),ht(19))};function ca(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function D_(t,e){var n=null;if(t.g==e){ca(t),Eh(t),t.g=null;var i=2}else if(Wl(t.i,e))n=e.F,E_(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;i=rc(),Ye(i,new s_(i,n)),fc(t)}else k_(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(i==1&&Kb(t,e)||i==2&&yh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:ci(t,5);break;case 4:ci(t,10);break;case 3:ci(t,6);break;default:ci(t,2)}}}function O_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ci(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=ot(t.pb,t);n||(n=new gi("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||oa(n,"https"),lc(n)),zb(n.toString(),i)}else ht(2);t.H=0,t.h&&t.h.za(e),L_(t),P_(t)}N.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ht(2)):(this.l.info("Failed to ping google.com"),ht(1))};function L_(t){if(t.H=0,t.ma=[],t.h){const e=T_(t.i);(e.length!=0||t.j.length!=0)&&(wf(t.ma,e),wf(t.ma,t.j),t.i.i.length=0,th(t.j),t.j.length=0),t.h.ya()}}function M_(t,e,n){var i=n instanceof gi?bn(n):new gi(n);if(i.g!="")e&&(i.g=e+"."+i.g),aa(i,i.m);else{var s=W.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new gi(null);i&&oa(r,i),e&&(r.g=e),s&&aa(r,s),n&&(r.l=n),i=r}return n=t.F,e=t.Da,n&&e&&be(i,n,e),be(i,"VER",t.ra),to(t,i),i}function V_(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new ke(new Zr({ob:!0})):new ke(t.va),e.Oa(t.J),e}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function q_(){}N=q_.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function la(){if(ls&&!(10<=Number(ob)))throw Error("Environmental error: no available transport.")}la.prototype.g=function(t,e){return new wt(t,e)};function wt(t,e){$e.call(this),this.g=new S_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Rr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Rr(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ss(this)}We(wt,$e);wt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ht(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=M_(t,null,t.Y),fc(t)};wt.prototype.close=function(){vh(this.g)};wt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ch(t),t=n);e.j.push(new Mb(e.fb++,t)),e.H==3&&fc(e)};wt.prototype.N=function(){this.g.h=null,delete this.j,vh(this.g),delete this.g,wt.$.N.call(this)};function F_(t){fh.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}We(F_,fh);function U_(){ph.call(this),this.status=1}We(U_,ph);function Ss(t){this.g=t}We(Ss,q_);Ss.prototype.Ba=function(){Ye(this.g,"a")};Ss.prototype.Aa=function(t){Ye(this.g,new F_(t))};Ss.prototype.za=function(t){Ye(this.g,new U_)};Ss.prototype.ya=function(){Ye(this.g,"b")};function Gb(){this.blockSize=-1}function jt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}We(jt,Gb);jt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Zc(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^n&(s^r))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(n^s))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^r)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~r))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}jt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=n;)Zc(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(i[s++]=t.charCodeAt(r++),s==this.blockSize){Zc(this,i),s=0;break}}else for(;r<e;)if(i[s++]=t[r++],s==this.blockSize){Zc(this,i),s=0;break}}this.h=s,this.i+=e};jt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function he(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var r=t[s]|0;i&&r==e||(n[s]=r,i=!1)}this.g=n}var Qb={};function Th(t){return-128<=t&&128>t?ib(t,function(e){return new he([e|0],0>e?-1:0)}):new he([t|0],0>t?-1:0)}function Zt(t){if(isNaN(t)||!isFinite(t))return Xi;if(0>t)return Ke(Zt(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=Hl;return new he(e,0)}function z_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ke(z_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Zt(Math.pow(e,8)),i=Xi,s=0;s<t.length;s+=8){var r=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+r),e);8>r?(r=Zt(Math.pow(e,r)),i=i.R(r).add(Zt(o))):(i=i.R(n),i=i.add(Zt(o)))}return i}var Hl=4294967296,Xi=Th(0),Kl=Th(1),Of=Th(16777216);N=he.prototype;N.ea=function(){if(bt(this))return-Ke(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:Hl+i)*e,e*=Hl}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(vn(this))return"0";if(bt(this))return"-"+Ke(this).toString(t);for(var e=Zt(Math.pow(t,6)),n=this,i="";;){var s=ha(n,e).g;n=ua(n,s.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,vn(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function vn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function bt(t){return t.h==-1}N.X=function(t){return t=ua(this,t),bt(t)?-1:vn(t)?0:1};function Ke(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new he(n,~t.h).add(Kl)}N.abs=function(){return bt(this)?Ke(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(t.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new he(n,n[n.length-1]&-2147483648?-1:0)};function ua(t,e){return t.add(Ke(e))}N.R=function(t){if(vn(this)||vn(t))return Xi;if(bt(this))return bt(t)?Ke(this).R(Ke(t)):Ke(Ke(this).R(t));if(bt(t))return Ke(this.R(Ke(t)));if(0>this.X(Of)&&0>t.X(Of))return Zt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*i+2*s]+=o*c,Ro(n,2*i+2*s),n[2*i+2*s+1]+=r*c,Ro(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,Ro(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,Ro(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new he(n,0)};function Ro(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Us(t,e){this.g=t,this.h=e}function ha(t,e){if(vn(e))throw Error("division by zero");if(vn(t))return new Us(Xi,Xi);if(bt(t))return e=ha(Ke(t),e),new Us(Ke(e.g),Ke(e.h));if(bt(e))return e=ha(t,Ke(e)),new Us(Ke(e.g),e.h);if(30<t.g.length){if(bt(t)||bt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Kl,i=e;0>=i.X(t);)n=Lf(n),i=Lf(i);var s=Fi(n,1),r=Fi(i,1);for(i=Fi(i,2),n=Fi(n,2);!vn(i);){var o=r.add(i);0>=o.X(t)&&(s=s.add(n),r=o),i=Fi(i,1),n=Fi(n,1)}return e=ua(t,s.R(e)),new Us(s,e)}for(s=Xi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=Zt(n),o=r.R(e);bt(o)||0<o.X(t);)n-=i,r=Zt(n),o=r.R(e);vn(r)&&(r=Kl),s=s.add(r),t=ua(t,o)}return new Us(s,t)}N.gb=function(t){return ha(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new he(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new he(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new he(n,this.h^t.h)};function Lf(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new he(n,t.h)}function Fi(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],r=0;r<i;r++)s[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new he(s,t.h)}la.prototype.createWebChannel=la.prototype.g;wt.prototype.send=wt.prototype.u;wt.prototype.open=wt.prototype.m;wt.prototype.close=wt.prototype.close;oc.NO_ERROR=0;oc.TIMEOUT=8;oc.HTTP_ERROR=6;r_.COMPLETE="complete";o_.EventType=Yr;Yr.OPEN="a";Yr.CLOSE="b";Yr.ERROR="c";Yr.MESSAGE="d";$e.prototype.listen=$e.prototype.O;ke.prototype.listenOnce=ke.prototype.P;ke.prototype.getLastError=ke.prototype.Sa;ke.prototype.getLastErrorCode=ke.prototype.Ia;ke.prototype.getStatus=ke.prototype.da;ke.prototype.getResponseJson=ke.prototype.Wa;ke.prototype.getResponseText=ke.prototype.ja;ke.prototype.send=ke.prototype.ha;ke.prototype.setWithCredentials=ke.prototype.Oa;jt.prototype.digest=jt.prototype.l;jt.prototype.reset=jt.prototype.reset;jt.prototype.update=jt.prototype.j;he.prototype.add=he.prototype.add;he.prototype.multiply=he.prototype.R;he.prototype.modulo=he.prototype.gb;he.prototype.compare=he.prototype.X;he.prototype.toNumber=he.prototype.ea;he.prototype.toString=he.prototype.toString;he.prototype.getBits=he.prototype.D;he.fromNumber=Zt;he.fromString=z_;var Yb=function(){return new la},Xb=function(){return rc()},el=oc,Jb=r_,Zb=Si,Mf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},eA=Zr,So=o_,tA=ke,nA=jt,Ji=he;const Vf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new Hr("@firebase/firestore");function zs(){return Ti.logLevel}function O(t,...e){if(Ti.logLevel<=Z.DEBUG){const n=e.map(Ih);Ti.debug(`Firestore (${Ps}): ${t}`,...n)}}function An(t,...e){if(Ti.logLevel<=Z.ERROR){const n=e.map(Ih);Ti.error(`Firestore (${Ps}): ${t}`,...n)}}function us(t,...e){if(Ti.logLevel<=Z.WARN){const n=e.map(Ih);Ti.warn(`Firestore (${Ps}): ${t}`,...n)}}function Ih(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t="Unexpected state"){const e=`FIRESTORE (${Ps}) INTERNAL ASSERTION FAILED: `+t;throw An(e),new Error(e)}function Ae(t,e){t||$()}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class sA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class rA{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let r=new Tn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Tn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Tn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ae(typeof i.accessToken=="string"),new j_(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new Ze(e)}}class oA{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class aA{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new oA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const i=r=>{r.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ae(typeof n.token=="string"),this.R=n.token,new cA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=uA(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function ae(t,e){return t<e?-1:t>e?1:0}function hs(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Le(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new Le(0,0))}static max(){return new H(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n,i){n===void 0?n=0:n>e.length&&$(),i===void 0?i=e.length-n:i>e.length-n&&$(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Lr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Lr?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends Lr{construct(e,n,i){return new Se(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new V(I.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const hA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends Lr{construct(e,n,i){return new Qe(e,n,i)}static isValidIdentifier(e){return hA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qe(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new V(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new V(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new V(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new V(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(Se.fromString(e))}static fromName(e){return new z(Se.fromString(e).popFirst(5))}static empty(){return new z(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new Se(e.slice()))}}function dA(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=H.fromTimestamp(i===1e9?new Le(n+1,0):new Le(n,i));return new Hn(s,z.empty(),e)}function fA(t){return new Hn(t.readTime,t.key,-1)}class Hn{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Hn(H.min(),z.empty(),-1)}static max(){return new Hn(H.max(),z.empty(),-1)}}function pA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=z.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==mA)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,i)=>{n(e)})}static reject(e){return new w((n,i)=>{i(e)})}static waitFor(e){return new w((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},c=>i(c))}),o=!0,r===s&&n()})}static or(e){let n=w.resolve(!1);for(const i of e)n=n.next(s=>s?w.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new w((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,n){return new w((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function io(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.se(i),this.oe=i=>n.writeSequenceNumber(i))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}wh._e=-1;function pc(t){return t==null}function da(t){return t===0&&1/t==-1/0}function _A(t){return typeof t=="number"&&Number.isInteger(t)&&!da(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ns(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Me=class Gl{constructor(e,n){this.comparator=e,this.root=n||jn.EMPTY}insert(e,n){return new Gl(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,jn.BLACK,null,null))}remove(e){return new Gl(this.comparator,this.root.remove(e,this.comparator).copy(null,null,jn.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Po(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Po(this.root,e,this.comparator,!1)}getReverseIterator(){return new Po(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Po(this.root,e,this.comparator,!0)}},Po=class{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},jn=class mn{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??mn.RED,this.left=s??mn.EMPTY,this.right=r??mn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new mn(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return mn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return mn.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}};jn.EMPTY=null,jn.RED=!0,jn.BLACK=!1;jn.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(e,n,i,s,r){return this}insert(e,n,i){return new jn(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ff(this.data.getIterator())}getIteratorFrom(e){return new Ff(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class Ff{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new Xe(Qe.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return hs(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new W_("Invalid base64 string: "+r):r}}(e);return new lt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const vA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kn(t){if(Ae(!!t),typeof t=="string"){let e=0;const n=vA.exec(t);if(Ae(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ii(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ah(t){const e=t.mapValue.fields.__previous_value__;return bh(e)?Ah(e):e}function Mr(t){const e=Kn(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e,n,i,s,r,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Vr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Vr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Vr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function wi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bh(t)?4:EA(t)?9007199254740991:10:$()}function ln(t,e){if(t===e)return!0;const n=wi(t);if(n!==wi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Mr(t).isEqual(Mr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=Kn(s.timestampValue),a=Kn(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Ii(s.bytesValue).isEqual(Ii(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Oe(s.geoPointValue.latitude)===Oe(r.geoPointValue.latitude)&&Oe(s.geoPointValue.longitude)===Oe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Oe(s.integerValue)===Oe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=Oe(s.doubleValue),a=Oe(r.doubleValue);return o===a?da(o)===da(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return hs(t.arrayValue.values||[],e.arrayValue.values||[],ln);case 10:return function(s,r){const o=s.mapValue.fields||{},a=r.mapValue.fields||{};if(qf(o)!==qf(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!ln(o[c],a[c])))return!1;return!0}(t,e);default:return $()}}function qr(t,e){return(t.values||[]).find(n=>ln(n,e))!==void 0}function ds(t,e){if(t===e)return 0;const n=wi(t),i=wi(e);if(n!==i)return ae(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=Oe(r.integerValue||r.doubleValue),c=Oe(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Uf(t.timestampValue,e.timestampValue);case 4:return Uf(Mr(t),Mr(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(r,o){const a=Ii(r),c=Ii(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ae(a[l],c[l]);if(u!==0)return u}return ae(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=ae(Oe(r.latitude),Oe(o.latitude));return a!==0?a:ae(Oe(r.longitude),Oe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=ds(a[l],c[l]);if(u)return u}return ae(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===No.mapValue&&o===No.mapValue)return 0;if(r===No.mapValue)return 1;if(o===No.mapValue)return-1;const a=r.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=ae(c[h],u[h]);if(d!==0)return d;const p=ds(a[c[h]],l[u[h]]);if(p!==0)return p}return ae(c.length,u.length)}(t.mapValue,e.mapValue);default:throw $()}}function Uf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=Kn(t),i=Kn(e),s=ae(n.seconds,i.seconds);return s!==0?s:ae(n.nanos,i.nanos)}function fs(t){return Ql(t)}function Ql(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=Kn(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ii(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return z.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",s=!0;for(const r of n.values||[])s?s=!1:i+=",",i+=Ql(r);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${Ql(n.fields[o])}`;return s+"}"}(t.mapValue):$()}function Yl(t){return!!t&&"integerValue"in t}function Ch(t){return!!t&&"arrayValue"in t}function zf(t){return!!t&&"nullValue"in t}function jf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bo(t){return!!t&&"mapValue"in t}function or(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ns(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=or(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=or(t.arrayValue.values[n]);return e}return Object.assign({},t)}function EA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Bo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=or(n)}setAll(e){let n=Qe.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=or(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());Bo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Bo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Ns(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new At(or(this.value))}}function H_(t){const e=[];return Ns(t.fields,(n,i)=>{const s=new Qe([n]);if(Bo(i)){const r=H_(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new Ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new tt(e,0,H.min(),H.min(),H.min(),At.empty(),0)}static newFoundDocument(e,n,i,s){return new tt(e,1,n,H.min(),i,s,0)}static newNoDocument(e,n){return new tt(e,2,n,H.min(),H.min(),At.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,H.min(),H.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n){this.position=e,this.inclusive=n}}function Bf(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=z.comparator(z.fromName(o.referenceValue),n.key):i=ds(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function $f(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ln(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n="asc"){this.field=e,this.dir=n}}function TA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{}class qe extends K_{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new wA(e,n,i):n==="array-contains"?new CA(e,i):n==="in"?new RA(e,i):n==="not-in"?new SA(e,i):n==="array-contains-any"?new PA(e,i):new qe(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new bA(e,i):new AA(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ds(n,this.value)):n!==null&&wi(this.value)===wi(n)&&this.matchesComparison(ds(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class un extends K_{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new un(e,n)}matches(e){return G_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function G_(t){return t.op==="and"}function Q_(t){return IA(t)&&G_(t)}function IA(t){for(const e of t.filters)if(e instanceof un)return!1;return!0}function Xl(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+fs(t.value);if(Q_(t))return t.filters.map(e=>Xl(e)).join(",");{const e=t.filters.map(n=>Xl(n)).join(",");return`${t.op}(${e})`}}function Y_(t,e){return t instanceof qe?function(i,s){return s instanceof qe&&i.op===s.op&&i.field.isEqual(s.field)&&ln(i.value,s.value)}(t,e):t instanceof un?function(i,s){return s instanceof un&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,o,a)=>r&&Y_(o,s.filters[a]),!0):!1}(t,e):void $()}function X_(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${fs(n.value)}`}(t):t instanceof un?function(n){return n.op.toString()+" {"+n.getFilters().map(X_).join(" ,")+"}"}(t):"Filter"}class wA extends qe{constructor(e,n,i){super(e,n,i),this.key=z.fromName(i.referenceValue)}matches(e){const n=z.comparator(e.key,this.key);return this.matchesComparison(n)}}class bA extends qe{constructor(e,n){super(e,"in",n),this.keys=J_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class AA extends qe{constructor(e,n){super(e,"not-in",n),this.keys=J_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function J_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>z.fromName(i.referenceValue))}class CA extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ch(n)&&qr(n.arrayValue,this.value)}}class RA extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&qr(this.value.arrayValue,n)}}class SA extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(qr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!qr(this.value.arrayValue,n)}}class PA extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ch(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>qr(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.ce=null}}function Wf(t,e=null,n=[],i=[],s=null,r=null,o=null){return new NA(t,e,n,i,s,r,o)}function Rh(t){const e=Y(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Xl(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),pc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>fs(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>fs(i)).join(",")),e.ce=n}return e.ce}function Sh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!TA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Y_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$f(t.startAt,e.startAt)&&$f(t.endAt,e.endAt)}function Jl(t){return z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function kA(t,e,n,i,s,r,o,a){return new mc(t,e,n,i,s,r,o,a)}function gc(t){return new mc(t)}function Hf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xA(t){return t.collectionGroup!==null}function ar(t){const e=Y(t);if(e.le===null){e.le=[];const n=new Set;for(const r of e.explicitOrderBy)e.le.push(r),n.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Xe(Qe.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||e.le.push(new pa(r,i))}),n.has(Qe.keyField().canonicalString())||e.le.push(new pa(Qe.keyField(),i))}return e.le}function nn(t){const e=Y(t);return e.he||(e.he=DA(e,ar(t))),e.he}function DA(t,e){if(t.limitType==="F")return Wf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const r=s.dir==="desc"?"asc":"desc";return new pa(s.field,r)});const n=t.endAt?new fa(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new fa(t.startAt.position,t.startAt.inclusive):null;return Wf(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function Zl(t,e,n){return new mc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _c(t,e){return Sh(nn(t),nn(e))&&t.limitType===e.limitType}function Z_(t){return`${Rh(nn(t))}|lt:${t.limitType}`}function zi(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(s=>X_(s)).join(", ")}]`),pc(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(s=>fs(s)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(s=>fs(s)).join(",")),`Target(${i})`}(nn(t))}; limitType=${t.limitType})`}function vc(t,e){return e.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):z.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(t,e)&&function(i,s){for(const r of ar(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(i,s){return!(i.startAt&&!function(o,a,c){const l=Bf(o,a,c);return o.inclusive?l<=0:l<0}(i.startAt,ar(i),s)||i.endAt&&!function(o,a,c){const l=Bf(o,a,c);return o.inclusive?l>=0:l>0}(i.endAt,ar(i),s))}(t,e)}function OA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ev(t){return(e,n)=>{let i=!1;for(const s of ar(t)){const r=LA(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function LA(t,e,n){const i=t.field.isKeyField()?z.comparator(e.key,n.key):function(r,o,a){const c=o.data.field(r),l=a.data.field(r);return c!==null&&l!==null?ds(c,l):$()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return $()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ns(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return $_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=new Me(z.comparator);function Cn(){return MA}const tv=new Me(z.comparator);function Xs(...t){let e=tv;for(const n of t)e=e.insert(n.key,n);return e}function nv(t){let e=tv;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function li(){return cr()}function iv(){return cr()}function cr(){return new ks(t=>t.toString(),(t,e)=>t.isEqual(e))}const VA=new Me(z.comparator),qA=new Xe(z.comparator);function ee(...t){let e=qA;for(const n of t)e=e.add(n);return e}const FA=new Xe(ae);function UA(){return FA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:da(e)?"-0":e}}function rv(t){return{integerValue:""+t}}function zA(t,e){return _A(e)?rv(e):sv(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(){this._=void 0}}function jA(t,e,n){return t instanceof ma?function(s,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&bh(r)&&(r=Ah(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof Fr?av(t,e):t instanceof Ur?cv(t,e):function(s,r){const o=ov(s,r),a=Kf(o)+Kf(s.Ie);return Yl(o)&&Yl(s.Ie)?rv(a):sv(s.serializer,a)}(t,e)}function BA(t,e,n){return t instanceof Fr?av(t,e):t instanceof Ur?cv(t,e):n}function ov(t,e){return t instanceof ga?function(i){return Yl(i)||function(r){return!!r&&"doubleValue"in r}(i)}(e)?e:{integerValue:0}:null}class ma extends yc{}class Fr extends yc{constructor(e){super(),this.elements=e}}function av(t,e){const n=lv(e);for(const i of t.elements)n.some(s=>ln(s,i))||n.push(i);return{arrayValue:{values:n}}}class Ur extends yc{constructor(e){super(),this.elements=e}}function cv(t,e){let n=lv(e);for(const i of t.elements)n=n.filter(s=>!ln(s,i));return{arrayValue:{values:n}}}class ga extends yc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Kf(t){return Oe(t.integerValue||t.doubleValue)}function lv(t){return Ch(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function $A(t,e){return t.field.isEqual(e.field)&&function(i,s){return i instanceof Fr&&s instanceof Fr||i instanceof Ur&&s instanceof Ur?hs(i.elements,s.elements,ln):i instanceof ga&&s instanceof ga?ln(i.Ie,s.Ie):i instanceof ma&&s instanceof ma}(t.transform,e.transform)}class WA{constructor(e,n){this.version=e,this.transformResults=n}}class In{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new In}static exists(e){return new In(void 0,e)}static updateTime(e){return new In(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $o(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ec{}function uv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new dv(t.key,In.none()):new so(t.key,t.data,In.none());{const n=t.data,i=At.empty();let s=new Xe(Qe.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Pi(t.key,i,new Ot(s.toArray()),In.none())}}function HA(t,e,n){t instanceof so?function(s,r,o){const a=s.value.clone(),c=Qf(s.fieldTransforms,r,o.transformResults);a.setAll(c),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Pi?function(s,r,o){if(!$o(s.precondition,r))return void r.convertToUnknownDocument(o.version);const a=Qf(s.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(hv(s)),c.setAll(a),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function lr(t,e,n,i){return t instanceof so?function(r,o,a,c){if(!$o(r.precondition,o))return a;const l=r.value.clone(),u=Yf(r.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,i):t instanceof Pi?function(r,o,a,c){if(!$o(r.precondition,o))return a;const l=Yf(r.fieldTransforms,c,o),u=o.data;return u.setAll(hv(r)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(t,e,n,i):function(r,o,a){return $o(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function KA(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=ov(i.transform,s||null);r!=null&&(n===null&&(n=At.empty()),n.set(i.field,r))}return n||null}function Gf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&hs(i,s,(r,o)=>$A(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class so extends Ec{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Pi extends Ec{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function hv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Qf(t,e,n){const i=new Map;Ae(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,BA(o,a,n[s]))}return i}function Yf(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,jA(r,o,e))}return i}class dv extends Ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GA extends Ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&HA(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=lr(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=lr(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=iv();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const c=uv(o,a);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(H.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&hs(this.mutations,e.mutations,(n,i)=>Gf(n,i))&&hs(this.baseMutations,e.baseMutations,(n,i)=>Gf(n,i))}}class Ph{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){Ae(e.mutations.length===i.length);let s=function(){return VA}();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Ph(e,n,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,ne;function JA(t){switch(t){default:return $();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function fv(t){if(t===void 0)return An("GRPC error has no .code"),I.UNKNOWN;switch(t){case De.OK:return I.OK;case De.CANCELLED:return I.CANCELLED;case De.UNKNOWN:return I.UNKNOWN;case De.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case De.INTERNAL:return I.INTERNAL;case De.UNAVAILABLE:return I.UNAVAILABLE;case De.UNAUTHENTICATED:return I.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case De.NOT_FOUND:return I.NOT_FOUND;case De.ALREADY_EXISTS:return I.ALREADY_EXISTS;case De.PERMISSION_DENIED:return I.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case De.ABORTED:return I.ABORTED;case De.OUT_OF_RANGE:return I.OUT_OF_RANGE;case De.UNIMPLEMENTED:return I.UNIMPLEMENTED;case De.DATA_LOSS:return I.DATA_LOSS;default:return $()}}(ne=De||(De={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=new Ji([4294967295,4294967295],0);function Xf(t){const e=ZA().encode(t),n=new nA;return n.update(e),new Uint8Array(n.digest())}function Jf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Ji([n,i],0),new Ji([s,r],0)]}class Nh{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new Js(`Invalid padding: ${n}`);if(i<0)throw new Js(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Js(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new Js(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Ji.fromNumber(this.Te)}de(e,n,i){let s=e.add(n.multiply(Ji.fromNumber(i)));return s.compare(eC)===1&&(s=new Ji([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Xf(e),[i,s]=Jf(n);for(let r=0;r<this.hashCount;r++){const o=this.de(i,s,r);if(!this.Ae(o))return!1}return!0}static create(e,n,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Nh(r,s,n);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Xf(e),[i,s]=Jf(n);for(let r=0;r<this.hashCount;r++){const o=this.de(i,s,r);this.Re(o)}}Re(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class Js extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,ro.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Tc(H.min(),s,new Me(ae),Cn(),ee())}}class ro{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new ro(i,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n,i,s){this.Ve=e,this.removedTargetIds=n,this.key=i,this.me=s}}class pv{constructor(e,n){this.targetId=e,this.fe=n}}class mv{constructor(e,n,i=lt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class Zf{constructor(){this.ge=0,this.pe=tp(),this.ye=lt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ee(),n=ee(),i=ee();return this.pe.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:$()}}),new ro(this.ye,this.we,e,n,i)}Fe(){this.Se=!1,this.pe=tp()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class tC{constructor(e){this.Le=e,this.ke=new Map,this.qe=Cn(),this.Qe=ep(),this.Ke=new Me(ae)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const i=this.ze(n);switch(e.state){case 0:this.je(n)&&i.Ce(e.resumeToken);break;case 1:i.Ne(),i.be||i.Fe(),i.Ce(e.resumeToken);break;case 2:i.Ne(),i.be||this.removeTarget(n);break;case 3:this.je(n)&&(i.Be(),i.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),i.Ce(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((i,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,i=e.fe.count,s=this.Ye(n);if(s){const r=s.target;if(Jl(r))if(i===0){const o=new z(r.path);this.We(n,o,tt.newNoDocument(o,H.min()))}else Ae(i===1);else{const o=this.Ze(n);if(o!==i){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=n;let o,a;try{o=Ii(i).toUint8Array()}catch(c){if(c instanceof W_)return us("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Nh(o,s,r)}catch(c){return us(c instanceof Js?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,i){return n.fe.count===i-this.rt(e,n.targetId)?0:2}rt(e,n){const i=this.Le.getRemoteKeysForTarget(n);let s=0;return i.forEach(r=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(a)||(this.We(n,r,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((r,o)=>{const a=this.Ye(o);if(a){if(r.current&&Jl(a.target)){const c=new z(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,tt.newNoDocument(c,e))}r.De&&(n.set(o,r.ve()),r.Fe())}});let i=ee();this.Qe.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(r))}),this.qe.forEach((r,o)=>o.setReadTime(e));const s=new Tc(e,n,this.Ke,this.qe,i);return this.qe=Cn(),this.Qe=ep(),this.Ke=new Me(ae),s}Ue(e,n){if(!this.je(e))return;const i=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,i),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,i){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),i&&(this.qe=this.qe.insert(n,i))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Zf,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Xe(ae),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Zf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ep(){return new Me(z.comparator)}function tp(){return new Me(z.comparator)}const nC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),iC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),sC=(()=>({and:"AND",or:"OR"}))();class rC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function eu(t,e){return t.useProto3Json||pc(e)?e:{value:e}}function _a(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function oC(t,e){return _a(t,e.toTimestamp())}function sn(t){return Ae(!!t),H.fromTimestamp(function(n){const i=Kn(n);return new Le(i.seconds,i.nanos)}(t))}function kh(t,e){return function(i){return new Se(["projects",i.projectId,"databases",i.database])}(t).child("documents").child(e).canonicalString()}function _v(t){const e=Se.fromString(t);return Ae(Tv(e)),e}function tu(t,e){return kh(t.databaseId,e.path)}function tl(t,e){const n=_v(e);if(n.get(1)!==t.databaseId.projectId)throw new V(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new z(vv(n))}function nu(t,e){return kh(t.databaseId,e)}function aC(t){const e=_v(t);return e.length===4?Se.emptyPath():vv(e)}function iu(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function vv(t){return Ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function np(t,e,n){return{name:tu(t,e),fields:n.value.mapValue.fields}}function cC(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,u){return l.useProto3Json?(Ae(u===void 0||typeof u=="string"),lt.fromBase64String(u||"")):(Ae(u===void 0||u instanceof Uint8Array),lt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?I.UNKNOWN:fv(l.code);return new V(u,l.message||"")}(o);n=new mv(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=tl(t,i.document.name),r=sn(i.document.updateTime),o=i.document.createTime?sn(i.document.createTime):H.min(),a=new At({mapValue:{fields:i.document.fields}}),c=tt.newFoundDocument(s,r,o,a),l=i.targetIds||[],u=i.removedTargetIds||[];n=new Wo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=tl(t,i.document),r=i.readTime?sn(i.readTime):H.min(),o=tt.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Wo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=tl(t,i.document),r=i.removedTargetIds||[];n=new Wo([],r,s,null)}else{if(!("filter"in e))return $();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new XA(s,r),a=i.targetId;n=new pv(a,o)}}return n}function lC(t,e){let n;if(e instanceof so)n={update:np(t,e.key,e.value)};else if(e instanceof dv)n={delete:tu(t,e.key)};else if(e instanceof Pi)n={update:np(t,e.key,e.data),updateMask:vC(e.fieldMask)};else{if(!(e instanceof GA))return $();n={verify:tu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,o){const a=o.transform;if(a instanceof ma)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Fr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ur)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ga)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw $()}(0,i))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:oC(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:$()}(t,e.precondition)),n}function uC(t,e){return t&&t.length>0?(Ae(e!==void 0),t.map(n=>function(s,r){let o=s.updateTime?sn(s.updateTime):sn(r);return o.isEqual(H.min())&&(o=sn(r)),new WA(o,s.transformResults||[])}(n,e))):[]}function hC(t,e){return{documents:[nu(t,e.path)]}}function dC(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=nu(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=nu(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(c){if(c.length!==0)return Ev(un.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:ji(h.field),direction:mC(h.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=eu(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function fC(t){let e=aC(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Ae(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(h){const d=yv(h);return d instanceof un&&Q_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new pa(Bi(g.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,pc(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,p=h.values||[];return new fa(p,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,p=h.values||[];return new fa(p,d)}(n.endAt)),kA(e,s,o,r,a,"F",c,l)}function pC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function yv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=Bi(n.unaryFilter.field);return qe.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Bi(n.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Bi(n.unaryFilter.field);return qe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Bi(n.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(t):t.fieldFilter!==void 0?function(n){return qe.create(Bi(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return un.create(n.compositeFilter.filters.map(i=>yv(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return $()}}(n.compositeFilter.op))}(t):$()}function mC(t){return nC[t]}function gC(t){return iC[t]}function _C(t){return sC[t]}function ji(t){return{fieldPath:t.canonicalString()}}function Bi(t){return Qe.fromServerFormat(t.fieldPath)}function Ev(t){return t instanceof qe?function(n){if(n.op==="=="){if(jf(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NAN"}};if(zf(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(jf(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NOT_NAN"}};if(zf(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ji(n.field),op:gC(n.op),value:n.value}}}(t):t instanceof un?function(n){const i=n.getFilters().map(s=>Ev(s));return i.length===1?i[0]:{compositeFilter:{op:_C(n.op),filters:i}}}(t):$()}function vC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Tv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n,i,s,r=H.min(),o=H.min(),a=lt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Ln(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e){this.ut=e}}function EC(t){const e=fC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Zl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(){this.on=new IC}addToCollectionParentIndex(e,n){return this.on.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}deleteAllFieldIndexes(e){return w.resolve()}createTargetIndexes(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(Hn.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(Hn.min())}updateCollectionGroup(e,n,i){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class IC{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new Xe(Se.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Xe(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new ps(0)}static Nn(){return new ps(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(){this.changes=new ks(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?w.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&lr(i.mutation,s,Ot.empty(),Le.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,ee()).next(()=>i))}getLocalViewOfDocuments(e,n,i=ee()){const s=li();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=Xs();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=li();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,ee()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,s){let r=Cn();const o=cr(),a=function(){return cr()}();return n.forEach((c,l)=>{const u=i.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Pi)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),lr(u.mutation,l,u.mutation.getFieldMask(),Le.now())):o.set(l.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new bC(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=cr();let s=new Me((o,a)=>o-a),r=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=i.get(c)||Ot.empty();u=a.applyToLocalView(l,u),i.set(c,u);const h=(s.get(a.batchId)||ee()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=iv();u.forEach(d=>{if(!r.has(d)){const p=uv(n.get(d),i.get(d));p!==null&&h.set(d,p),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return w.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i,s){return function(o){return z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):xA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,s):this.getDocumentsMatchingCollectionQuery(e,n,i,s)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):w.resolve(li());let a=-1,c=r;return o.next(l=>w.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?w.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,ee())).next(u=>({batchId:a,changes:nv(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new z(n)).next(i=>{let s=Xs();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i,s){const r=n.collectionGroup;let o=Xs();return this.indexManager.getCollectionParents(e,r).next(a=>w.forEach(a,c=>{const l=function(h,d){return new mc(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,l,i,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,r,s))).next(o=>{r.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,tt.newInvalidDocument(u)))});let a=Xs();return o.forEach((c,l)=>{const u=r.get(c);u!==void 0&&lr(u.mutation,l,Ot.empty(),Le.now()),vc(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return w.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:sn(s.createTime)}}(n)),w.resolve()}getNamedQuery(e,n){return w.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:EC(s.bundledQuery),readTime:sn(s.readTime)}}(n)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(){this.overlays=new Me(z.comparator),this.lr=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const i=li();return w.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.lt(e,n,r)}),w.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.lr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.lr.delete(i)),w.resolve()}getOverlaysForCollection(e,n,i){const s=li(),r=n.length+1,o=new z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return w.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new Me((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>i){let u=r.get(l.largestBatchId);u===null&&(u=li(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=li(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return w.resolve(a)}lt(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(i.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new YA(n,i));let r=this.lr.get(n);r===void 0&&(r=ee(),this.lr.set(n,r)),this.lr.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(){this.hr=new Xe(ze.Pr),this.Ir=new Xe(ze.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const i=new ze(e,n);this.hr=this.hr.add(i),this.Ir=this.Ir.add(i)}Er(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.dr(new ze(e,n))}Ar(e,n){e.forEach(i=>this.removeReference(i,n))}Rr(e){const n=new z(new Se([])),i=new ze(n,e),s=new ze(n,e+1),r=[];return this.Ir.forEachInRange([i,s],o=>{this.dr(o),r.push(o.key)}),r}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new z(new Se([])),i=new ze(n,e),s=new ze(n,e+1);let r=ee();return this.Ir.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ze(e,0),i=this.hr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class ze{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return z.comparator(e.key,n.key)||ae(e.gr,n.gr)}static Tr(e,n){return ae(e.gr,n.gr)||z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Xe(ze.Pr)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new QA(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new ze(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.Sr(i),r=s<0?0:s;return w.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new ze(n,0),s=new ze(n,Number.POSITIVE_INFINITY),r=[];return this.yr.forEachInRange([i,s],o=>{const a=this.wr(o.gr);r.push(a)}),w.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Xe(ae);return n.forEach(s=>{const r=new ze(s,0),o=new ze(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([r,o],a=>{i=i.add(a.gr)})}),w.resolve(this.br(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;z.isDocumentKey(r)||(r=r.child(""));const o=new ze(new z(r),0);let a=new Xe(ae);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!i.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.gr)),!0)},o),w.resolve(this.br(a))}br(e){const n=[];return e.forEach(i=>{const s=this.wr(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ae(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.yr;return w.forEach(n.mutations,s=>{const r=new ze(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=i})}Fn(e){}containsKey(e,n){const i=new ze(n,0),s=this.yr.firstAfterOrEqual(i);return w.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e){this.Cr=e,this.docs=function(){return new Me(z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return w.resolve(i?i.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let i=Cn();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():tt.newInvalidDocument(s))}),w.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=Cn();const o=n.path,a=new z(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||pA(fA(u),i)<=0||(s.has(u.key)||vc(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return w.resolve(r)}getAllFromCollectionGroup(e,n,i,s){$()}vr(e,n){return w.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new NC(this)}getSize(e){return w.resolve(this.size)}}class NC extends wC{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(i)}),w.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.persistence=e,this.Fr=new ks(n=>Rh(n),Sh),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Mr=0,this.Or=new xh,this.targetCount=0,this.Nr=ps.On()}forEachTarget(e,n){return this.Fr.forEach((i,s)=>n(s)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Mr&&(this.Mr=n),w.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new ps(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.kn(n),w.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Fr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),w.waitFor(r).next(()=>s)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const i=this.Fr.get(n)||null;return w.resolve(i)}addMatchingKeys(e,n,i){return this.Or.Er(n,i),w.resolve()}removeMatchingKeys(e,n,i){this.Or.Ar(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),w.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),w.resolve()}getMatchingKeysForTargetId(e,n){const i=this.Or.mr(n);return w.resolve(i)}containsKey(e,n){return w.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,n){this.Br={},this.overlays={},this.Lr=new wh(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new kC(this),this.indexManager=new TC,this.remoteDocumentCache=function(s){return new PC(s)}(i=>this.referenceDelegate.Qr(i)),this.serializer=new yC(n),this.Kr=new CC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new RC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Br[e.toKey()];return i||(i=new SC(n,this.referenceDelegate),this.Br[e.toKey()]=i),i}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,i){O("MemoryPersistence","Starting transaction:",e);const s=new DC(this.Lr.next());return this.referenceDelegate.$r(),i(s).next(r=>this.referenceDelegate.Ur(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Wr(e,n){return w.or(Object.values(this.Br).map(i=>()=>i.containsKey(e,n)))}}class DC extends gA{constructor(e){super(),this.currentSequenceNumber=e}}class Dh{constructor(e){this.persistence=e,this.Gr=new xh,this.zr=null}static jr(e){return new Dh(e)}get Hr(){if(this.zr)return this.zr;throw $()}addReference(e,n,i){return this.Gr.addReference(i,n),this.Hr.delete(i.toString()),w.resolve()}removeReference(e,n,i){return this.Gr.removeReference(i,n),this.Hr.add(i.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),w.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.Hr.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Hr,i=>{const s=z.fromPath(i);return this.Jr(e,s).next(r=>{r||n.removeEntry(s,H.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(i=>{i?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return w.or([()=>w.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.ki=i,this.qi=s}static Qi(e,n){let i=ee(),s=ee();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Oh(e,n.fromCache,i,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,i,s){const r={result:null};return this.zi(e,n).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.ji(e,n,s,i).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new OC;return this.Hi(e,n,o).next(a=>{if(r.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>r.result)}Ji(e,n,i,s){return i.documentReadCount<this.Ui?(zs()<=Z.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",zi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),w.resolve()):(zs()<=Z.DEBUG&&O("QueryEngine","Query:",zi(n),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Wi*s?(zs()<=Z.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",zi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nn(n))):w.resolve())}zi(e,n){if(Hf(n))return w.resolve(null);let i=nn(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Zl(n,null,"F"),i=nn(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=ee(...r);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,Zl(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,i,s){return Hf(n)||s.isEqual(H.min())?w.resolve(null):this.Gi.getDocuments(e,i).next(r=>{const o=this.Yi(n,r);return this.Zi(n,o,i,s)?w.resolve(null):(zs()<=Z.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),zi(n)),this.Xi(e,o,n,dA(s,-1)).next(a=>a))})}Yi(e,n){let i=new Xe(ev(e));return n.forEach((s,r)=>{vc(e,r)&&(i=i.add(r))}),i}Zi(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Hi(e,n,i){return zs()<=Z.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",zi(n)),this.Gi.getDocumentsMatchingQuery(e,n,Hn.min(),i)}Xi(e,n,i,s){return this.Gi.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,n,i,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new Me(ae),this.ns=new ks(r=>Rh(r),Sh),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(i)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new AC(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function VC(t,e,n,i){return new MC(t,e,n,i)}async function Iv(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.os(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let c=ee();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(i,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function qC(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let p=w.resolve();return d.forEach(g=>{p=p.next(()=>u.getEntry(c,g)).next(_=>{const y=l.docVersions.get(g);Ae(y!==null),_.version.compareTo(y)<0&&(h.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),u.addEntry(_)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(a){let c=ee();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function wv(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function FC(t,e){const n=Y(t),i=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(r,u.addedDocuments,h)));let p=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(lt.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,i)),s=s.insert(h,p),function(_,y,x){return _.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(d,p,u)&&a.push(n.qr.updateTargetData(r,p))});let c=Cn(),l=ee();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(UC(r,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!i.isEqual(H.min())){const u=n.qr.getLastRemoteSnapshotVersion(r).next(h=>n.qr.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return w.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.ts=s,r))}function UC(t,e,n){let i=ee(),s=ee();return n.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let o=Cn();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(H.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:s}})}function zC(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function jC(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.qr.getTargetData(i,e).next(r=>r?(s=r,w.resolve(s)):n.qr.allocateTargetId(i).next(o=>(s=new Ln(e,o,"TargetPurposeListen",i.currentSequenceNumber),n.qr.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.ts.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(i.targetId,i),n.ns.set(e,i.targetId)),i})}async function su(t,e,n){const i=Y(t),s=i.ts.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!io(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.ts=i.ts.remove(e),i.ns.delete(s.target)}function ip(t,e,n){const i=Y(t);let s=H.min(),r=ee();return i.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=Y(c),d=h.ns.get(u);return d!==void 0?w.resolve(h.ts.get(d)):h.qr.getTargetData(l,u)}(i,o,nn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>i.es.getDocumentsMatchingQuery(o,e,n?s:H.min(),n?r:ee())).next(a=>(BC(i,OA(e),a),{documents:a,ls:r})))}function BC(t,e,n){let i=t.rs.get(e)||H.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.rs.set(e,i)}class sp{constructor(){this.activeTargetIds=UA()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $C{constructor(){this.eo=new sp,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,i){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new sp,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko=null;function nl(){return ko===null?ko=function(){return 268435456+Math.round(2147483648*Math.random())}():ko++,"0x"+ko.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="WebChannelConnection";class GC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.mo=i+"://"+n.host,this.fo=`projects/${s}/databases/${r}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${r}`}get yo(){return!1}wo(n,i,s,r,o){const a=nl(),c=this.So(n,i);O("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,r,o),this.Do(n,c,l,s).then(u=>(O("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw us("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Co(n,i,s,r,o,a){return this.wo(n,i,s,r,o)}bo(n,i,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ps}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((r,o)=>n[o]=r),s&&s.headers.forEach((r,o)=>n[o]=r)}So(n,i){const s=HC[n];return`${this.mo}/v1/${i}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,i,s){const r=nl();return new Promise((o,a)=>{const c=new tA;c.setWithCredentials(!0),c.listenOnce(Jb.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case el.NO_ERROR:const u=c.getResponseJson();O(Je,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case el.TIMEOUT:O(Je,`RPC '${e}' ${r} timed out`),a(new V(I.DEADLINE_EXCEEDED,"Request time out"));break;case el.HTTP_ERROR:const h=c.getStatus();if(O(Je,`RPC '${e}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const g=function(y){const x=y.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(x)>=0?x:I.UNKNOWN}(p.status);a(new V(g,p.message))}else a(new V(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new V(I.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{O(Je,`RPC '${e}' ${r} completed.`)}});const l=JSON.stringify(s);O(Je,`RPC '${e}' ${r} sending request:`,s),c.send(n,"POST",l,i,15)})}vo(e,n,i){const s=nl(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Yb(),a=Xb(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new eA({})),this.bo(c.initMessageHeaders,n,i),c.encodeInitMessageHeaders=!0;const u=r.join("");O(Je,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,p=!1;const g=new KC({co:y=>{p?O(Je,`Not sending because RPC '${e}' stream ${s} is closed:`,y):(d||(O(Je,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),O(Je,`RPC '${e}' stream ${s} sending:`,y),h.send(y))},lo:()=>h.close()}),_=(y,x,M)=>{y.listen(x,k=>{try{M(k)}catch(A){setTimeout(()=>{throw A},0)}})};return _(h,So.EventType.OPEN,()=>{p||O(Je,`RPC '${e}' stream ${s} transport opened.`)}),_(h,So.EventType.CLOSE,()=>{p||(p=!0,O(Je,`RPC '${e}' stream ${s} transport closed`),g.Ro())}),_(h,So.EventType.ERROR,y=>{p||(p=!0,us(Je,`RPC '${e}' stream ${s} transport errored:`,y),g.Ro(new V(I.UNAVAILABLE,"The operation could not be completed")))}),_(h,So.EventType.MESSAGE,y=>{var x;if(!p){const M=y.data[0];Ae(!!M);const k=M,A=k.error||((x=k[0])===null||x===void 0?void 0:x.error);if(A){O(Je,`RPC '${e}' stream ${s} received error:`,A);const K=A.status;let le=function(X){const ye=De[X];if(ye!==void 0)return fv(ye)}(K),me=A.message;le===void 0&&(le=I.INTERNAL,me="Unknown error status: "+K+" with message "+A.message),p=!0,g.Ro(new V(le,me)),h.close()}else O(Je,`RPC '${e}' stream ${s} received:`,M),g.Vo(M)}}),_(a,Zb.STAT_EVENT,y=>{y.stat===Mf.PROXY?O(Je,`RPC '${e}' stream ${s} detected buffering proxy`):y.stat===Mf.NOPROXY&&O(Je,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.Ao()},0),g}}function il(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t){return new rC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,n,i=1e3,s=1.5,r=6e4){this.si=e,this.timerId=n,this.Fo=i,this.Mo=s,this.xo=r,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),i=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-i);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e,n,i,s,r,o,a,c){this.si=e,this.Ko=i,this.$o=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new bv(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(An(n.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Uo===n&&this.s_(i,s)},i=>{e(()=>{const s=new V(I.UNKNOWN,"Fetching auth token failed: "+i.message);return this.o_(s)})})}s_(e,n){const i=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{i(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{i(()=>this.o_(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class QC extends Av{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=cC(this.serializer,e),i=function(r){if(!("targetChange"in r))return H.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?H.min():o.readTime?sn(o.readTime):H.min()}(e);return this.listener.a_(n,i)}u_(e){const n={};n.database=iu(this.serializer),n.addTarget=function(r,o){let a;const c=o.target;if(a=Jl(c)?{documents:hC(r,c)}:{query:dC(r,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=gv(r,o.resumeToken);const l=eu(r,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(H.min())>0){a.readTime=_a(r,o.snapshotVersion.toTimestamp());const l=eu(r,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const i=pC(this.serializer,e);i&&(n.labels=i),this.e_(n)}c_(e){const n={};n.database=iu(this.serializer),n.removeTarget=e,this.e_(n)}}class YC extends Av{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=uC(e.writeResults,e.commitTime),i=sn(e.commitTime);return this.listener.I_(i,n)}return Ae(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=iu(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>lC(this.serializer,i))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new V(I.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.wo(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(I.UNKNOWN,s.toString())})}Co(e,n,i,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Co(e,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new V(I.UNKNOWN,r.toString())})}terminate(){this.d_=!0}}class JC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(An(n),this.f_=!1):O("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=r,this.F_.ro(o=>{i.enqueueAndForget(async()=>{Ni(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=Y(c);l.C_.add(4),await oo(l),l.M_.set("Unknown"),l.C_.delete(4),await wc(l)}(this))})}),this.M_=new JC(i,s)}}async function wc(t){if(Ni(t))for(const e of t.v_)await e(!0)}async function oo(t){for(const e of t.v_)await e(!1)}function Cv(t,e){const n=Y(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Vh(n)?Mh(n):xs(n).Ho()&&Lh(n,e))}function Rv(t,e){const n=Y(t),i=xs(n);n.D_.delete(e),i.Ho()&&Sv(n,e),n.D_.size===0&&(i.Ho()?i.Zo():Ni(n)&&n.M_.set("Unknown"))}function Lh(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}xs(t).u_(e)}function Sv(t,e){t.x_.Oe(e),xs(t).c_(e)}function Mh(t){t.x_=new tC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),xs(t).start(),t.M_.g_()}function Vh(t){return Ni(t)&&!xs(t).jo()&&t.D_.size>0}function Ni(t){return Y(t).C_.size===0}function Pv(t){t.x_=void 0}async function eR(t){t.D_.forEach((e,n)=>{Lh(t,e)})}async function tR(t,e){Pv(t),Vh(t)?(t.M_.w_(e),Mh(t)):t.M_.set("Unknown")}async function nR(t,e,n){if(t.M_.set("Online"),e instanceof mv&&e.state===2&&e.cause)try{await async function(s,r){const o=r.cause;for(const a of r.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(t,e)}catch(i){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await va(t,i)}else if(e instanceof Wo?t.x_.$e(e):e instanceof pv?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(H.min()))try{const i=await wv(t.localStore);n.compareTo(i)>=0&&await function(r,o){const a=r.x_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=r.D_.get(l);u&&r.D_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=r.D_.get(c);if(!u)return;r.D_.set(c,u.withResumeToken(lt.EMPTY_BYTE_STRING,u.snapshotVersion)),Sv(r,c);const h=new Ln(u.target,c,l,u.sequenceNumber);Lh(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(i){O("RemoteStore","Failed to raise snapshot:",i),await va(t,i)}}async function va(t,e,n){if(!io(e))throw e;t.C_.add(1),await oo(t),t.M_.set("Offline"),n||(n=()=>wv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await wc(t)})}function Nv(t,e){return e().catch(n=>va(t,n,e))}async function bc(t){const e=Y(t),n=Gn(e);let i=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;iR(e);)try{const s=await zC(e.localStore,i);if(s===null){e.b_.length===0&&n.Zo();break}i=s.batchId,sR(e,s)}catch(s){await va(e,s)}kv(e)&&xv(e)}function iR(t){return Ni(t)&&t.b_.length<10}function sR(t,e){t.b_.push(e);const n=Gn(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function kv(t){return Ni(t)&&!Gn(t).jo()&&t.b_.length>0}function xv(t){Gn(t).start()}async function rR(t){Gn(t).E_()}async function oR(t){const e=Gn(t);for(const n of t.b_)e.P_(n.mutations)}async function aR(t,e,n){const i=t.b_.shift(),s=Ph.from(i,e,n);await Nv(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await bc(t)}async function cR(t,e){e&&Gn(t).h_&&await async function(i,s){if(function(o){return JA(o)&&o!==I.ABORTED}(s.code)){const r=i.b_.shift();Gn(i).Yo(),await Nv(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await bc(i)}}(t,e),kv(t)&&xv(t)}async function op(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const i=Ni(n);n.C_.add(3),await oo(n),i&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await wc(n)}async function lR(t,e){const n=Y(t);e?(n.C_.delete(2),await wc(n)):e||(n.C_.add(2),await oo(n),n.M_.set("Unknown"))}function xs(t){return t.O_||(t.O_=function(n,i,s){const r=Y(n);return r.A_(),new QC(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{ho:eR.bind(null,t),Io:tR.bind(null,t),a_:nR.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Vh(t)?Mh(t):t.M_.set("Unknown")):(await t.O_.stop(),Pv(t))})),t.O_}function Gn(t){return t.N_||(t.N_=function(n,i,s){const r=Y(n);return r.A_(),new YC(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{ho:rR.bind(null,t),Io:cR.bind(null,t),T_:oR.bind(null,t),I_:aR.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await bc(t)):(await t.N_.stop(),t.b_.length>0&&(O("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new qh(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fh(t,e){if(An("AsyncQueue",`${e}: ${t}`),io(t))return new V(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this.comparator=e?(n,i)=>e(n,i)||z.comparator(n.key,i.key):(n,i)=>z.comparator(n.key,i.key),this.keyedMap=Xs(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new Zi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Zi;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(){this.B_=new Me(z.comparator)}track(e){const n=e.doc.key,i=this.B_.get(n);i?e.type!==0&&i.type===3?this.B_=this.B_.insert(n,e):e.type===3&&i.type!==1?this.B_=this.B_.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.B_=this.B_.remove(n):e.type===1&&i.type===2?this.B_=this.B_.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):$():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,i)=>{e.push(i)}),e}}class ms{constructor(e,n,i,s,r,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,i,s,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ms(e,n,Zi.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_c(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(){this.k_=void 0,this.listeners=[]}}class hR{constructor(){this.queries=new ks(e=>Z_(e),_c),this.onlineState="Unknown",this.q_=new Set}}async function Uh(t,e){const n=Y(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new uR),s)try{r.k_=await n.onListen(i)}catch(o){const a=Fh(o,`Initialization of query '${zi(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.Q_(n.onlineState),r.k_&&e.K_(r.k_)&&jh(n)}async function zh(t,e){const n=Y(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function dR(t,e){const n=Y(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.K_(s)&&(i=!0);o.k_=s}}i&&jh(n)}function fR(t,e,n){const i=Y(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function jh(t){t.q_.forEach(e=>{e.next()})}class Bh{constructor(e,n,i){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=i||{}}K_(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new ms(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.J_||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=ms.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e){this.key=e}}class Ov{constructor(e){this.key=e}}class pR{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=ee(),this.mutatedKeys=ee(),this._a=ev(e),this.aa=new Zi(this._a)}get ua(){return this.ia}ca(e,n){const i=n?n.la:new ap,s=n?n.aa:this.aa;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=vc(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let y=!1;d&&p?d.data.isEqual(p.data)?g!==_&&(i.track({type:3,doc:p}),y=!0):this.ha(d,p)||(i.track({type:2,doc:p}),y=!0,(c&&this._a(p,c)>0||l&&this._a(p,l)<0)&&(a=!0)):!d&&p?(i.track({type:0,doc:p}),y=!0):d&&!p&&(i.track({type:1,doc:d}),y=!0,(c||l)&&(a=!0)),y&&(p?(o=o.add(p),r=_?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{aa:o,la:i,Zi:a,mutatedKeys:r}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const r=e.la.L_();r.sort((l,u)=>function(d,p){const g=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return g(d)-g(p)}(l.type,u.type)||this._a(l.doc,u.doc)),this.Pa(i);const o=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,c=a!==this.sa;return this.sa=a,r.length!==0||c?{snapshot:new ms(this.query,e.aa,s,r,e.mutatedKeys,a===0,c,!1,!!i&&i.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new ap,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=ee(),this.aa.forEach(i=>{this.Ea(i.key)&&(this.oa=this.oa.add(i.key))});const n=[];return e.forEach(i=>{this.oa.has(i)||n.push(new Ov(i))}),this.oa.forEach(i=>{e.has(i)||n.push(new Dv(i))}),n}da(e){this.ia=e.ls,this.oa=ee();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return ms.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class mR{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class gR{constructor(e){this.key=e,this.Ra=!1}}class _R{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new ks(a=>Z_(a),_c),this.fa=new Map,this.ga=new Set,this.pa=new Me(z.comparator),this.ya=new Map,this.wa=new xh,this.Sa={},this.ba=new Map,this.Da=ps.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function vR(t,e){const n=SR(t);let i,s;const r=n.ma.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.Aa();else{const o=await jC(n.localStore,nn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await yR(n,e,i,a==="current",o.resumeToken),n.isPrimaryClient&&Cv(n.remoteStore,o)}return s}async function yR(t,e,n,i,s){t.va=(h,d,p)=>async function(_,y,x,M){let k=y.view.ca(x);k.Zi&&(k=await ip(_.localStore,y.query,!1).then(({documents:le})=>y.view.ca(le,k)));const A=M&&M.targetChanges.get(y.targetId),K=y.view.applyChanges(k,_.isPrimaryClient,A);return lp(_,y.targetId,K.Ta),K.snapshot}(t,h,d,p);const r=await ip(t.localStore,e,!0),o=new pR(e,r.ls),a=o.ca(r.documents),c=ro.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);lp(t,n,l.Ta);const u=new mR(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),l.snapshot}async function ER(t,e){const n=Y(t),i=n.ma.get(e),s=n.fa.get(i.targetId);if(s.length>1)return n.fa.set(i.targetId,s.filter(r=>!_c(r,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await su(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),Rv(n.remoteStore,i.targetId),ru(n,i.targetId)}).catch(no)):(ru(n,i.targetId),await su(n.localStore,i.targetId,!0))}async function TR(t,e,n){const i=PR(t);try{const s=await function(o,a){const c=Y(o),l=Le.now(),u=a.reduce((p,g)=>p.add(g.key),ee());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let g=Cn(),_=ee();return c.ss.getEntries(p,u).next(y=>{g=y,g.forEach((x,M)=>{M.isValidDocument()||(_=_.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,g)).next(y=>{h=y;const x=[];for(const M of a){const k=KA(M,h.get(M.key).overlayedDocument);k!=null&&x.push(new Pi(M.key,k,H_(k.value.mapValue),In.exists(!0)))}return c.mutationQueue.addMutationBatch(p,l,x,a)}).next(y=>{d=y;const x=y.applyToLocalDocumentSet(h,_);return c.documentOverlayCache.saveOverlays(p,y.batchId,x)})}).then(()=>({batchId:d.batchId,changes:nv(h)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Sa[o.currentUser.toKey()];l||(l=new Me(ae)),l=l.insert(a,c),o.Sa[o.currentUser.toKey()]=l}(i,s.batchId,n),await ao(i,s.changes),await bc(i.remoteStore)}catch(s){const r=Fh(s,"Failed to persist write");n.reject(r)}}async function Lv(t,e){const n=Y(t);try{const i=await FC(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.ya.get(r);o&&(Ae(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?Ae(o.Ra):s.removedDocuments.size>0&&(Ae(o.Ra),o.Ra=!1))}),await ao(n,i,e)}catch(i){await no(i)}}function cp(t,e,n){const i=Y(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.ma.forEach((r,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=Y(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(l=!0)}),l&&jh(c)}(i.eventManager,e),s.length&&i.Va.a_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function IR(t,e,n){const i=Y(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.ya.get(e),r=s&&s.key;if(r){let o=new Me(z.comparator);o=o.insert(r,tt.newNoDocument(r,H.min()));const a=ee().add(r),c=new Tc(H.min(),new Map,new Me(ae),o,a);await Lv(i,c),i.pa=i.pa.remove(r),i.ya.delete(e),$h(i)}else await su(i.localStore,e,!1).then(()=>ru(i,e,n)).catch(no)}async function wR(t,e){const n=Y(t),i=e.batch.batchId;try{const s=await qC(n.localStore,e);Vv(n,i,null),Mv(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ao(n,s)}catch(s){await no(s)}}async function bR(t,e,n){const i=Y(t);try{const s=await function(o,a){const c=Y(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Ae(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(i.localStore,e);Vv(i,e,n),Mv(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await ao(i,s)}catch(s){await no(s)}}function Mv(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function Vv(t,e,n){const i=Y(t);let s=i.Sa[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.Sa[i.currentUser.toKey()]=s}}function ru(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.fa.get(e))t.ma.delete(i),n&&t.Va.Fa(i,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(i=>{t.wa.containsKey(i)||qv(t,i)})}function qv(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(Rv(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),$h(t))}function lp(t,e,n){for(const i of n)i instanceof Dv?(t.wa.addReference(i.key,e),AR(t,i)):i instanceof Ov?(O("SyncEngine","Document no longer in limbo: "+i.key),t.wa.removeReference(i.key,e),t.wa.containsKey(i.key)||qv(t,i.key)):$()}function AR(t,e){const n=e.key,i=n.path.canonicalString();t.pa.get(n)||t.ga.has(i)||(O("SyncEngine","New document in limbo: "+n),t.ga.add(i),$h(t))}function $h(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new z(Se.fromString(e)),i=t.Da.next();t.ya.set(i,new gR(n)),t.pa=t.pa.insert(n,i),Cv(t.remoteStore,new Ln(nn(gc(n.path)),i,"TargetPurposeLimboResolution",wh._e))}}async function ao(t,e,n){const i=Y(t),s=[],r=[],o=[];i.ma.isEmpty()||(i.ma.forEach((a,c)=>{o.push(i.va(c,e,n).then(l=>{if((l||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Oh.Qi(c.targetId,l);r.push(u)}}))}),await Promise.all(o),i.Va.a_(s),await async function(c,l){const u=Y(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>w.forEach(l,d=>w.forEach(d.ki,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>w.forEach(d.qi,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!io(h))throw h;O("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const p=u.ts.get(d),g=p.snapshotVersion,_=p.withLastLimboFreeSnapshotVersion(g);u.ts=u.ts.insert(d,_)}}}(i.localStore,r))}async function CR(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const i=await Iv(n.localStore,e);n.currentUser=e,function(r,o){r.ba.forEach(a=>{a.forEach(c=>{c.reject(new V(I.CANCELLED,o))})}),r.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ao(n,i._s)}}function RR(t,e){const n=Y(t),i=n.ya.get(e);if(i&&i.Ra)return ee().add(i.key);{let s=ee();const r=n.fa.get(e);if(!r)return s;for(const o of r){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function SR(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Lv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=RR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IR.bind(null,e),e.Va.a_=dR.bind(null,e.eventManager),e.Va.Fa=fR.bind(null,e.eventManager),e}function PR(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bR.bind(null,e),e}class up{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ic(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return VC(this.persistence,new LC,e.initialUser,this.serializer)}createPersistence(e){return new xC(Dh.jr,this.serializer)}createSharedClientState(e){return new $C}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class NR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>cp(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=CR.bind(null,this.syncEngine),await lR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hR}()}createDatastore(e){const n=Ic(e.databaseInfo.databaseId),i=function(r){return new GC(r)}(e.databaseInfo);return function(r,o,a,c){return new XC(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,s,r,o,a){return new ZC(i,s,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>cp(this.syncEngine,n,0),function(){return rp.D()?new rp:new WC}())}createSyncEngine(e,n){return function(s,r,o,a,c,l,u){const h=new _R(s,r,o,a,c,l);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const i=Y(n);O("RemoteStore","RemoteStore shutting down."),i.C_.add(5),await oo(i),i.F_.shutdown(),i.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):An("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=Ze.UNAUTHENTICATED,this.clientId=B_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{O("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(O("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Fh(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function sl(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Iv(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function hp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await DR(t);O("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>op(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>op(e.remoteStore,r)),t._onlineComponents=e}function xR(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function DR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await sl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!xR(n))throw n;us("Error using user provided cache. Falling back to memory cache: "+n),await sl(t,new up)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await sl(t,new up);return t._offlineComponents}async function Fv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await hp(t,t._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await hp(t,new NR))),t._onlineComponents}function OR(t){return Fv(t).then(e=>e.syncEngine)}async function ya(t){const e=await Fv(t),n=e.eventManager;return n.onListen=vR.bind(null,e.syncEngine),n.onUnlisten=ER.bind(null,e.syncEngine),n}function LR(t,e,n={}){const i=new Tn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,l){const u=new Wh({next:d=>{o.enqueueAndForget(()=>zh(r,h));const p=d.docs.has(a);!p&&d.fromCache?l.reject(new V(I.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&c&&c.source==="server"?l.reject(new V(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new Bh(gc(a.path),u,{includeMetadataChanges:!0,J_:!0});return Uh(r,h)}(await ya(t),t.asyncQueue,e,n,i)),i.promise}function MR(t,e,n={}){const i=new Tn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,l){const u=new Wh({next:d=>{o.enqueueAndForget(()=>zh(r,h)),d.fromCache&&c.source==="server"?l.reject(new V(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new Bh(a,u,{includeMetadataChanges:!0,J_:!0});return Uh(r,h)}(await ya(t),t.asyncQueue,e,n,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(t,e,n){if(!n)throw new V(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function VR(t,e,n,i){if(e===!0&&i===!0)throw new V(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fp(t){if(!z.isDocumentKey(t))throw new V(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function pp(t){if(z.isDocumentKey(t))throw new V(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Hh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function rn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hh(t);throw new V(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new V(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}VR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uv((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new V(I.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new V(I.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new V(I.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ac{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mp(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new iA;switch(i.type){case"firstParty":return new aA(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new V(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=dp.get(n);i&&(O("ComponentProvider","Removing Datastore"),dp.delete(n),i.terminate())}(this),Promise.resolve()}}function qR(t,e,n,i={}){var s;const r=(t=rn(t,Ac))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&us("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,c;if(typeof i.mockUserToken=="string")a=i.mockUserToken,c=Ze.MOCK_USER;else{a=Nw(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new V(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ze(l)}t._authCredentials=new sA(new j_(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new co(this.firestore,e,this._query)}}class gt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}}class Bn extends co{constructor(e,n,i){super(e,n,gc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new z(e))}withConverter(e){return new Bn(this.firestore,e,this._path)}}function FR(t,e,...n){if(t=Ut(t),zv("collection","path",e),t instanceof Ac){const i=Se.fromString(e,...n);return pp(i),new Bn(t,null,i)}{if(!(t instanceof gt||t instanceof Bn))throw new V(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Se.fromString(e,...n));return pp(i),new Bn(t.firestore,null,i)}}function gp(t,e,...n){if(t=Ut(t),arguments.length===1&&(e=B_.newId()),zv("doc","path",e),t instanceof Ac){const i=Se.fromString(e,...n);return fp(i),new gt(t,null,new z(i))}{if(!(t instanceof gt||t instanceof Bn))throw new V(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Se.fromString(e,...n));return fp(i),new gt(t.firestore,t instanceof Bn?t.converter:null,new z(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new bv(this,"async_queue_retry"),this.iu=()=>{const n=il();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=il();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=il();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new Tn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!io(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(i=>{this.eu=i,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw An("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.tu=!1,i))));return this.Ja=n,n}enqueueAfterDelay(e,n,i){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=qh.createAndSchedule(this,e,n,i,r=>this.au(r));return this.Xa.push(s),s}su(){this.eu&&$()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function _p(t){return function(n,i){if(typeof n!="object"||n===null)return!1;const s=n;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class gs extends Ac{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=function(){return new UR}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Bv(this),this._firestoreClient.terminate()}}function jv(t,e){const n=typeof t=="object"?t:Vg(),i=typeof t=="string"?t:e||"(default)",s=q0(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Sw("firestore");r&&qR(s,...r)}return s}function Cc(t){return t._firestoreClient||Bv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Bv(t){var e,n,i;const s=t._freezeSettings(),r=function(a,c,l,u){return new yA(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Uv(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new kR(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _s(lt.fromBase64String(e))}catch(n){throw new V(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _s(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=/^__.*__$/;class jR{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Pi(e,this.data,this.fieldMask,n,this.fieldTransforms):new so(e,this.data,n,this.fieldTransforms)}}function Wv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class Gh{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Pu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Gh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:i,du:!1});return s.Au(e),s}Ru(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:i,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Ea(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(Wv(this.Iu)&&zR.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class BR{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Ic(e)}pu(e,n,i,s=!1){return new Gh({Iu:e,methodName:n,gu:i,path:Qe.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $R(t){const e=t._freezeSettings(),n=Ic(t._databaseId);return new BR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function WR(t,e,n,i,s,r={}){const o=t.pu(r.merge||r.mergeFields?2:0,e,n,s);Qv("Data must be an object, but it was:",o,i);const a=Kv(i,o);let c,l;if(r.merge)c=new Ot(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=HR(e,h,n);if(!o.contains(d))throw new V(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);GR(u,d)||u.push(d)}c=new Ot(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new jR(new At(a),c,l)}function Hv(t,e){if(Gv(t=Ut(t)))return Qv("Unsupported field value:",e,t),Kv(t,e);if(t instanceof $v)return function(i,s){if(!Wv(s.Iu))throw s.mu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(i,s){const r=[];let o=0;for(const a of i){let c=Hv(a,s.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}}(t,e)}return function(i,s){if((i=Ut(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return zA(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=Le.fromDate(i);return{timestampValue:_a(s.serializer,r)}}if(i instanceof Le){const r=new Le(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:_a(s.serializer,r)}}if(i instanceof Rc)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof _s)return{bytesValue:gv(s.serializer,i._byteString)};if(i instanceof gt){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:kh(i.firestore._databaseId||s.databaseId,i._key.path)}}throw s.mu(`Unsupported field value: ${Hh(i)}`)}(t,e)}function Kv(t,e){const n={};return $_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ns(t,(i,s)=>{const r=Hv(s,e.Eu(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function Gv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof Rc||t instanceof _s||t instanceof gt||t instanceof $v)}function Qv(t,e,n){if(!Gv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const i=Hh(n);throw i==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+i)}}function HR(t,e,n){if((e=Ut(e))instanceof Kh)return e._internalPath;if(typeof e=="string")return Yv(t,e);throw Ea("Field path arguments must be of type string or ",t,!1,void 0,n)}const KR=new RegExp("[~\\*/\\[\\]]");function Yv(t,e,n){if(e.search(KR)>=0)throw Ea(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Kh(...e.split("."))._internalPath}catch{throw Ea(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ea(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new V(I.INVALID_ARGUMENT,a+t+c)}function GR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class QR extends Xv{data(){return super.data()}}function Jv(t,e){return typeof e=="string"?Yv(t,e):e instanceof Kh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new V(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class YR{convertValue(e,n="none"){switch(wi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ii(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return Ns(e,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new Rc(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Ah(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Mr(e));default:return null}}convertTimestamp(e){const n=Kn(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Se.fromString(e);Ae(Tv(i));const s=new Vr(i.get(1),i.get(3)),r=new z(i.popFirst(5));return s.isEqual(n)||An(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XR(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ey extends Xv{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ho(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Jv("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Ho extends ey{data(e={}){return super.data(e)}}class ty{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Zs(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Ho(this._firestore,this._userDataWriter,i.key,i,new Zs(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Ho(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Zs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const c=new Ho(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Zs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:JR(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function JR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(t){t=rn(t,gt);const e=rn(t.firestore,gs);return LR(Cc(e),t._key).then(n=>sy(e,t,n))}class Qh extends YR{constructor(e){super(),this.firestore=e}convertBytes(e){return new _s(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,n)}}function iy(t){t=rn(t,co);const e=rn(t.firestore,gs),n=Cc(e),i=new Qh(e);return Zv(t._query),MR(n,t._query).then(s=>new ty(e,i,t,s))}function vp(t,e,n){t=rn(t,gt);const i=rn(t.firestore,gs),s=XR(t.converter,e,n);return ZR(i,[WR($R(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,In.none())])}function Yh(t,...e){var n,i,s;t=Ut(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||_p(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(_p(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof gt)l=rn(t.firestore,gs),u=gc(t._key.path),c={next:h=>{e[o]&&e[o](sy(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=rn(t,co);l=rn(h.firestore,gs),u=h._query;const d=new Qh(l);c={next:p=>{e[o]&&e[o](new ty(l,d,h,p))},error:e[o+1],complete:e[o+2]},Zv(t._query)}return function(d,p,g,_){const y=new Wh(_),x=new Bh(p,y,g);return d.asyncQueue.enqueueAndForget(async()=>Uh(await ya(d),x)),()=>{y.Na(),d.asyncQueue.enqueueAndForget(async()=>zh(await ya(d),x))}}(Cc(l),u,a,c)}function ZR(t,e){return function(i,s){const r=new Tn;return i.asyncQueue.enqueueAndForget(async()=>TR(await OR(i),s,r)),r.promise}(Cc(t),e)}function sy(t,e,n){const i=n.docs.get(e._key),s=new Qh(t);return new ey(t,s,e._key,i,new Zs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Ps=s})(Cs),cn(new zt("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new gs(new rA(i.getProvider("auth-internal")),new lA(i.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new V(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vr(l.options.projectId,u)}(o,s),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Tt(Vf,"4.3.2",e),Tt(Vf,"4.3.2","esm2017")})();let xo;const eS=new Uint8Array(16);function tS(){if(!xo&&(xo=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!xo))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return xo(eS)}const He=[];for(let t=0;t<256;++t)He.push((t+256).toString(16).slice(1));function nS(t,e=0){return He[t[e+0]]+He[t[e+1]]+He[t[e+2]]+He[t[e+3]]+"-"+He[t[e+4]]+He[t[e+5]]+"-"+He[t[e+6]]+He[t[e+7]]+"-"+He[t[e+8]]+He[t[e+9]]+"-"+He[t[e+10]]+He[t[e+11]]+He[t[e+12]]+He[t[e+13]]+He[t[e+14]]+He[t[e+15]]}const iS=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),yp={randomUUID:iS};function sS(t,e,n){if(yp.randomUUID&&!e&&!t)return yp.randomUUID();t=t||{};const i=t.random||(t.rng||tS)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e){n=n||0;for(let s=0;s<16;++s)e[n+s]=i[s];return e}return nS(i)}var rS="firebase",oS="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt(rS,oS,"app");const Xh=Mg({apiKey:"AIzaSyD3_PR3stakqPCdQaVutT5fORlmXsMNPM0",authDomain:"quizzify-d3053.firebaseapp.com",projectId:"quizzify-d3053",storageBucket:"quizzify-d3053.appspot.com",messagingSenderId:"955132845389",appId:"1:955132845389:web:3346cc1457aeeaa97b2b04"});jv(Xh);const ou=window.location.href.includes("localhost")?"_dev":"";const Jh=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},aS={name:"QuestionFFVL",props:["qcm","dryrun"],data(){return{checkboxes:[],resultsColor:[],resultsDecoration:[],validated:!1,headerColor:"",headerBackgroundColor:"",responsePoint:"",delayResult:"",hasBeenAnswered:!0}},methods:{validate(){this.hasBeenAnswered=this.qcm.answered,this.validated=!0;let t=0,e=0,n=!0;for(let r in this.qcm.choices)this.qcm.choices[r].point>0&&(t+=this.qcm.choices[r].point),this.qcm.choices[r].point<=0&&!this.checkboxes[r]?(this.resultsColor[r]="gray",this.resultsDecoration[r]="line-through"):this.qcm.choices[r].point<=0&&this.checkboxes[r]?(this.resultsColor[r]="red",e+=this.qcm.choices[r].point):this.qcm.choices[r].point>=0&&this.checkboxes[r]?(this.resultsColor[r]="green",e+=this.qcm.choices[r].point):this.qcm.choices[r].point>=0&&!this.checkboxes[r]&&(this.resultsColor[r]="black");t==e?(this.headerColor="#3c763d",this.headerBackgroundColor="#dff0d8",Nt().setValidated(this.qcm.id)):e>0?(this.headerColor="#AA6C00",this.headerBackgroundColor="#FFE5C1",n=!1):(this.headerColor="#a94442",this.headerBackgroundColor="#f2dede",n=!1);let i=this.qcm.reminder==null?"New":this.qcm.reminder.remindDelay,s=this.qcm.reminder==null?"New":this.qcm.reminder.remindDelay;if(!this.qcm.answered){let r=this.getReminderDelay(n);const o=new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear();this.qcm.reminder==null&&!this.dryrun?(s=r,this.insertQuestionReminder(r,o)):o!=this.qcm.reminder.answeredDate&&!this.dryrun&&(this.updateQuestionReminder(r,o),s=r)}this.responsePoint=e>0?e:"0",!this.qcm.answered&&!n&&Nt().setNbErrors(Nt().nbErrors+1),Nt().setAnswerd(this.qcm.id),this.delayResult=`${i} => ${s}`},getReminderDelay(t){if(this.qcm.reminder==null)return t?1:0;const e=[0,1,2,3,5,8,13,21,34,55],n=e.indexOf(this.qcm.reminder.remindDelay);return t?n==9?55:e[n+1]:n==0?0:e[n-1]},getNextQuestion(){this.resetcss(),this.$emit("getNextQuestion")},resetcss(){this.resultsColor=[],this.resultsDecoration=[],this.validated=!1,this.headerColor="",this.headerBackgroundColor="",this.responsePoint="";for(let t=0;t<this.checkboxes.length;t++)this.checkboxes[t]=!1},async insertQuestionReminder(t,e){await vp(gp(Su,"QcmReminder"+ou,sS()),{answeredDate:e,qcmId:this.qcm.id,remindDelay:t})},async updateQuestionReminder(t,e){await vp(gp(Su,"QcmReminder"+ou,this.qcm.reminder.id),{answeredDate:e,qcmId:this.qcm.id,remindDelay:t})}}},cS={key:0},lS={key:1},uS={key:0,class:"resultPanel"},hS=["onUpdate:modelValue"],dS={key:0};function fS(t,e,n,i,s,r){return Te(),Re("div",null,[j("div",{class:"questionHeader",style:mr({color:s.headerColor,"background-color":s.headerBackgroundColor})},[Tr(et(n.qcm.question)+" ",1),s.responsePoint?(Te(),Re("span",cS,et(s.responsePoint),1)):Gt("",!0),n.qcm.reminder?(Te(),Re("span",lS,et(n.qcm.reminder.remindDelay),1)):Gt("",!0)],4),s.validated&&!this.hasBeenAnswered&&!this.dryrun?(Te(),Re("div",uS,et(s.delayResult),1)):Gt("",!0),(Te(!0),Re(ft,null,Jo(n.qcm.choices,(o,a)=>(Te(),Re("div",{class:"questionChoice",style:mr({color:s.resultsColor[a],"text-decoration":s.resultsDecoration[a]})},[tg(j("input",{type:"checkbox","onUpdate:modelValue":c=>s.checkboxes[a]=c},null,8,hS),[[ow,s.checkboxes[a]]]),j("span",null,et(o.choice),1),s.validated?(Te(),Re("span",dS,"("+et(o.point)+")",1)):Gt("",!0)],4))),256)),s.validated?Gt("",!0):(Te(),Re("button",{key:1,class:"button-4, actionButton",onClick:e[0]||(e[0]=(...o)=>r.validate&&r.validate(...o))},"OK")),s.validated?(Te(),Re("button",{key:2,class:"button-4, actionButton",onClick:e[1]||(e[1]=(...o)=>r.getNextQuestion&&r.getNextQuestion(...o))},"Next")):Gt("",!0)])}const pS=Jh(aS,[["render",fS],["__scopeId","data-v-6bed72f4"]]),Mn=bg({id:"globalFFVL",state:()=>({qcms:[{id:1,question:"Vous volez au taux de chute minimum ; vous allez rentrer dans une ascendance",choices:[{choice:"vous vous préparez à freiner",point:-6},{choice:"vous vous préparez à relâcher les freins",point:0},{choice:"vous conservez votre régime de vol",point:0},{choice:"vous augmentez votre vitesse",point:6}]},{id:2,question:"Lorsqu'une particule d'air nuageux est soulevée, sa température",choices:[{choice:"décroît plus lentement que si la particule contenait de l'air clair",point:6},{choice:"décroît plus vite que si la particule contenait de l'air clair",point:-6},{choice:"croît plus vite que si la particule contenait de l'air clair",point:-6}]},{id:3,question:'Vous faites les "oreilles"',choices:[{choice:"traverser un gradient ou une turbulence peut accroître considérablement votre taux de chute",point:2},{choice:"votre finesse diminue",point:2},{choice:"l'incidence augmente",point:2},{choice:"il n'existe aucun risque de parachutage",point:-6}]},{id:4,question:"Facteurs favorisant l'instabilité",choices:[{choice:"l'arrivée d'air chaud dans la basse couche",point:3},{choice:"l'arrivée d'air chaud en altitude",point:-6},{choice:"le refroidissement du sol",point:-6},{choice:"le réchauffement du sol",point:3}]},{id:5,question:"En général un front froid engendre des nuages",choices:[{choice:"par couches minces stratiformes",point:-6},{choice:"isolés de type cumuliformes",point:-6},{choice:"développés sur une grande épaisseur et des 2 types",point:6}]},{id:6,question:"Deux ailes se suivent tout près d'un relief situé à leur droite, la deuxième aile est plus rapide",choices:[{choice:"elle double par la gauche",point:-6},{choice:"elle double par la droite entre le relief et l'autre aile",point:-6},{choice:"elle fait demi-tour",point:6}]},{id:7,question:"Un altimètre permet d'obtenir une information sur",choices:[{choice:"la variation du taux d'humidité",point:-6},{choice:"le gradient vertical de pression atmosphérique",point:0},{choice:"l'altitude",point:6}]},{id:8,question:"Puis-je prévoir d'atterrir en delta ou parapente sur un aérodrome contrôlé ?",choices:[{choice:"Non, les PUL ne peuvent utiliser un aérodrome contrôlé sans autorisation particulière de l'autorité compétente",point:6},{choice:"Oui, mais il faut que je respecte le circuit d'aérodrome",point:-6},{choice:"Oui, il me suffit d'annoncer mon arrivée par radio",point:-6}]},{id:9,question:"Si deux pilotes ont la même aile, à même incidence, le plus lourd",choices:[{choice:"descend moins vite",point:-6},{choice:"vole plus vite",point:3},{choice:"descend plus vite",point:3},{choice:"vole moins vite",point:-6}]},{id:10,question:"Faire une descente rapide en 360° enchaînés et serrés",choices:[{choice:"vous expose à des facteurs de charges importants",point:2},{choice:"vous fait perdre toute référence extérieure",point:2},{choice:"peut entraîner une perte de connaissance",point:2},{choice:"est toujours sans danger",point:-6}]},{id:11,question:"Si vous volez par vent arrière fort",choices:[{choice:"votre vitesse-sol est augmentée",point:6},{choice:"vous avez moins de portance sur votre parapente",point:-6},{choice:"l'effet du vent sur votre visage sera bien plus fort",point:-6},{choice:"cela fragilise votre parapente qui peut se fermer plus facilement",point:-6}]},{id:12,question:"Un mouvement de lacet à droite déclenche principalement",choices:[{choice:"un couple piqueur",point:-6},{choice:"du roulis induit à gauche",point:-6},{choice:"du roulis induit à droite",point:6},{choice:"un couple cabreur",point:-6}]},{id:13,question:"Une bulle d'air s'élève si sa température par rapport à l'air ambiant est",choices:[{choice:"égale",point:-6},{choice:"inférieure",point:-6},{choice:"supérieure",point:6}]},{id:14,question:"Vous ne pouvez pas",choices:[{choice:"décoller 30 minutes après le coucher du soleil",point:2},{choice:"décoller si le pilote précédent est à moins de 100 mètres",point:2},{choice:"rester en vol au delà de 30 minutes après le coucher du soleil",point:2}]},{id:15,question:"Le 360° en prise de terrain",choices:[{choice:"est tout à fait déconseillé",point:2},{choice:"permet d'être précis à l'atterrissage",point:-6},{choice:"vous expose à des risques importants de collision avec les autres ailes en approche",point:2},{choice:"vous fait perdre de vue les repères au sol",point:2}]},{id:16,question:"A niveau de vol égal, la priorité en vol revient",choices:[{choice:"par convention, à l'aile arrivée la première dans l'ascendance",point:2},{choice:"à l'aile qui arrive par la droite",point:4},{choice:"au biplace sur le monoplace",point:-6},{choice:"à l'aile pilotée par un débutant",point:-6}]},{id:17,question:"Durant un vol de pente à 50m du sol, le sifflement du vent faiblit et votre aile s'enfonce en se trouvant proche de la vitesse de décrochage ; pour éviter le crash",choices:[{choice:"vous freinez immédiatement pour ralentir la vitesse de rapprochement du sol",point:-6},{choice:"vous engagez immédiatement un virage prononcé pour vous éloigner de la pente",point:-6},{choice:"vous appliquez votre poids du côté dégagé en relevant les mains puis, dès que la vitesse est revenue, vous utilisez la commande pour virer",point:6}]},{id:18,question:"Un altimètre",choices:[{choice:"peut être calé à différentes valeurs (niveau de la mer, du décollage, de l'atterrissage, etc.)",point:2},{choice:"est calé définitivement à la construction",point:-6},{choice:"doit toujours être comparé et réglé par rapport aux valeurs connues (décollage, points reconnus, atterrissage)",point:2},{choice:"donne une indication variant avec les données atmosphériques",point:2}]},{id:19,question:"Les nuages de type cumulus",choices:[{choice:"caractérisent des couches plutôt instables",point:3},{choice:"se développent horizontalement",point:-6},{choice:"se développent verticalement",point:3},{choice:"caractérisent des couches plutôt stables",point:-6}]},{id:20,question:"Par rapport à l'air chaud, à pression et à volumes égaux l'air froid est",choices:[{choice:"plus lourd",point:6},{choice:"identique",point:-6},{choice:"plus léger",point:-6}]},{id:21,question:'Une voile classée "A" aux tests de la norme CEN',choices:[{choice:"permet au pilote de voler en conditions fortes",point:-6},{choice:"tolère, à l'écart du relief, des imprécisions de pilotage dans des conditions aérologiques modérées",point:3},{choice:"a des qualités d'amortissement des turbulences intéressantes pour l'apprentissage",point:3}]},{id:22,question:"Quelles contraintes peuvent engendrer les évènements sportifs, culturels ou politiques ?",choices:[{choice:"Des restrictions d'horaires et de volumes de vol matérialisés par des ZRT et/ou des ZIT",point:6},{choice:"Des NOTAM d'information pour renforcer la vigilance des pilotes",point:-6},{choice:"Les aéronefs non motorisés doivent simplement ne pas survoler les lieux de déroulement",point:-6}]},{id:23,question:"Le départ en vrille en parapente est précédé",choices:[{choice:"du sentiment que l'aile a du mal à tourner",point:2},{choice:"d'une augmentation du bruit du vent relatif dans les oreilles du pilote",point:-6},{choice:"d'une commande intérieure dure et largement abaissée",point:2},{choice:"d'un affaiblissement du bruit du vent relatif dans les oreilles du pilote",point:2}]},{id:24,question:"Les ascendances thermiques",choices:[{choice:"montent toujours verticalement",point:-6},{choice:"se déclenchent souvent sur des sols contrastés",point:2},{choice:"sont en général entourées de descendances",point:2},{choice:"peuvent se présenter sous forme de bulles ou de colonnes",point:2}]},{id:25,question:"En vol turbulent, votre voile se ferme par devant sur une grande longueur du bord d'attaque",choices:[{choice:"vous tirez brièvement sur les deux freins puis, sans délai, relevez vos mains",point:3},{choice:"vous remontez les freins à vitesse max",point:-6},{choice:"vous augmentez l'incidence de votre aile",point:3}]},{id:26,question:'Vous faites les "oreilles"',choices:[{choice:"cela améliore votre pénétration",point:-6},{choice:"votre finesse est dégradée",point:3},{choice:"votre taux de chute est augmenté",point:3},{choice:"ainsi, la voile ne fermera jamais",point:-6}]},{id:27,question:"La convection dans un profil de masse d'air plutôt stable",choices:[{choice:"est impossible",point:-6},{choice:"peut se concentrer le long des pentes bien exposées au soleil",point:3},{choice:"est possible si un réchauffement suffisant du sol est obtenu",point:3}]},{id:28,question:"Les nuages matérialisant les ondes de ressaut sont des",choices:[{choice:"cumulus congestus et cumulonimbus",point:-6},{choice:"altocumulus lenticulaires et cumulus rotors",point:6},{choice:"cirrostratus et nimbo stratus",point:-6}]},{id:29,question:"Vous volez vent arrière ; votre vitesse/air de croisière est égale à la vitesse du vent météo ; le sol",choices:[{choice:"paraît fixe",point:-6},{choice:"défile 2 fois moins vite que par vent nul",point:-6},{choice:"défile 2 fois plus vite que par vent nul",point:6}]},{id:30,question:"Les avions de chasse de la Défense peuvent-ils évoluer en espace G et E ?",choices:[{choice:"Oui, à n'importe quel moment, en fonction du mode de vol appliqué",point:6},{choice:"Non, uniquement dans les zones militaires de type, R, RTBA, P, ZIT, CTR et TMA",point:-6},{choice:"Oui, mais seulement si un exercice militaire a été programmé",point:-6}]},{id:31,question:"En régime turbulent, il vaut mieux",choices:[{choice:"ne pas taquiner les vitesses trop basses",point:2},{choice:"ne jamais faire d'évolutions serrées",point:2},{choice:"ne pas taquiner les vitesses trop élevées",point:2}]},{id:32,question:"Indiquez les facteurs favorisant la convection",choices:[{choice:"un réchauffement important au niveau du sol",point:3},{choice:"un vent très fort",point:-6},{choice:"un vent de force moyenne",point:3},{choice:"pas de vent du tout",point:0}]},{id:33,question:"La qualification d'accompagnateur fédéral",choices:[{choice:"est reconnue et délivrée par l'ensemble des pilotes du club",point:-3},{choice:"est délivrée suite à plusieurs journées de formation spécifique",point:2},{choice:"est auto-délivrée par le pilote concerné",point:-6},{choice:"est reconnue par la FFVL et délivrée par le responsable régional formation (RRF)",point:4}]},{id:34,question:"Un vent régulier en force et direction n'a aucune influence",choices:[{choice:"sur la finesse-sol",point:-6},{choice:"sur la vitesse-sol",point:-6},{choice:"sur la vitesse-air",point:6}]},{id:35,question:"Le variomètre de base mesure la vitesse verticale",choices:[{choice:"de l'aile par rapport à la masse d'air",point:-6},{choice:"de la masse d'air par rapport à l'aile",point:-6},{choice:"de l'aile par rapport au sol",point:6},{choice:"de la masse d'air par rapport au sol",point:-6}]},{id:36,question:"Que faut-il prendre en compte pour une valeur exprimée en FL ?",choices:[{choice:"Etant basée sur une pression standard, l'altitude correspondante est variable",point:6},{choice:"Il faut une instrumentation spécifique, cela est destiné au trafic IFR uniquement",point:-6},{choice:"Il faut ajouter l'altitude du décollage pour pouvoir utiliser une valeur en FL",point:-6}]},{id:37,question:'En faisant les "oreilles"',choices:[{choice:"l'incidence diminue",point:-6},{choice:"vous améliorez l'amortissement en tangage",point:3},{choice:'vous gardez votre "tour de frein"',point:-6},{choice:"la traînée augmente",point:3}]},{id:38,question:"Vous vous apprêtez à décoller à 15 heures sur un versant ensoleillé où s'est établi une légère brise montante. Le vent météo est nul",choices:[{choice:"le vent sera nul ou très faible en vallée",point:-6},{choice:"vous devez envisager l'éventualité d'un vent de vallée fort, surtout si la vallée est étroite",point:3},{choice:"dans tous les cas, il est prudent de prévoir des possibilités tenant compte d'un éventuel vent de vallée fort",point:3}]},{id:39,question:"Les ondes de ressaut se rencontrent en altitude",choices:[{choice:"n'importe où dans une couche d'air instable",point:-6},{choice:"sous le vent d'un relief dans une couche d'air stable",point:6},{choice:"au vent d'un relief dans une couche d'air stable",point:-6}]},{id:40,question:"Cochez les affirmations exactes",choices:[{choice:"les nimbostratus donnent des chutes de grêlons",point:-6},{choice:"les cirrus sont constitués de cristaux de glace",point:3},{choice:"les stratus sont constitués de cristaux de glace",point:-6},{choice:"les cumulonimbus sont constitués de gouttes d'eau et de cristaux de glace",point:3}]},{id:41,question:"La vapeur d'eau",choices:[{choice:"est présente au sol certains matins sous forme de rosée",point:-6},{choice:"est invisible",point:6},{choice:"est visible sous forme de buée blanche",point:-6}]},{id:42,question:"Le freinage final par vent fort",choices:[{choice:"n'est pas dangereux",point:-6},{choice:"demande un dosage précis et limité en amplitude",point:3},{choice:"n'est pas toujours nécessaire",point:3}]},{id:43,question:"L'hectopascal est une unité de",choices:[{choice:"pression",point:6},{choice:"température",point:-6},{choice:"humidité",point:-6}]},{id:44,question:"La portance d'une aile est due à",choices:[{choice:"la déviation non symétrique des filets d'air par le profil de l'aile",point:3},{choice:"une dépression apparaissant au dessus du profil et une surpression au dessous",point:3},{choice:"une dépression apparaissant au dessous du profil et une surpression au dessus",point:-6}]},{id:45,question:"Le poids apparent sur un appareil en virage équilibré est",choices:[{choice:"supérieur au poids total aile+pilote",point:6},{choice:"inférieur au poids total aile+pilote",point:-6},{choice:"égal au poids totale aile+pilote",point:-6}]},{id:46,question:"L'anémomètre est un instrument indiquant",choices:[{choice:"la vitesse du vent relatif à bord",point:3},{choice:"la direction du vent",point:-6},{choice:"la vitesse du vent instantané",point:3}]},{id:47,question:"Le label École Française de Vol Libre (EFVL) ou Club-École français de Vol Libre (CEFVL)",choices:[{choice:"permet à un club d'enseigner sans moniteur",point:-6},{choice:"garantit à l'élève le respects des exigences fédérales en matière d'apprentissage",point:6},{choice:"est nécessaire pour enseigner",point:-6}]},{id:48,question:"Vous constatez une diminution du vent relatif. L'aile s'enfonce. Vous réagissez en",choices:[{choice:"en débridant totalement l'aile quitte à produire une abattée et augmenter le taux de chute",point:6},{choice:"faisant les oreilles pour fuir au plus vite le secteur",point:-6},{choice:"tirant sur les freins pour réduire le taux de chute qui est en passe d'augmenter",point:-6}]},{id:49,question:"Le ciel est progressivement envahi par des cirrus de plus en plus denses, puis par un voile de cirrostratus de 7/8",choices:[{choice:"il va y avoir du brouillard cette nuit",point:0},{choice:"un front chaud arrive, il va probablement pleuvoir",point:6},{choice:"un cumulonimbus est en cours de formation",point:-6},{choice:"la convection thermique va se renforcer car l'atmosphère se réchauffe",point:-6}]},{id:50,question:"Dans quels types d'espaces militaires le pilote de l'aéronef militaire ne peut assurer l'anticollision ?",choices:[{choice:"L'anticollision n'est jamais assurée dans les zones d'entrainement militaires",point:-6},{choice:"Dans les zones R et dans les ZIT",point:-6},{choice:"Dans le RTBA activé, car le pilote évolue souvent en mode automatique de suivi de terrain",point:6}]},{id:51,question:"Les nuages favorables aux vols de performances sont les",choices:[{choice:"nimbostratus, altostratus et cumulonimbus",point:-6},{choice:"stratus",point:-6},{choice:"cirrocumulus, nimbostratus et stratocumulus",point:-6},{choice:"cumulus",point:6}]},{id:52,question:"Avec les oreilles",choices:[{choice:"mon nouveau taux de chute me permet de facilement redescendre dans toutes les situations aérologiques",point:-6},{choice:"il est recommandé d'avoir l'accélérateur au pied en cas de phase parachutage",point:3},{choice:"je n'ai plus d'autre choix que de piloter les grandes lignes de ma trajectoire à la sellette",point:3}]},{id:53,question:"Une couche de stratus de 40m d'épaisseur est située sous le décollage",choices:[{choice:"s'il y a un vent suffisant pour faire du vol de pente, vous décollez et vous restez au dessus de la couche",point:-6},{choice:"40m c'est peu ; vous décollez",point:-6},{choice:"vous attendez en espérant que la nuée se dégage sinon vous ne décollez pas",point:6}]},{id:54,question:"Les déclarations d'accident doivent être envoyées",choices:[{choice:"sous les 15 jours à l'assureur",point:-6},{choice:"sous 5 jours à la F.F.V.L. qui transmet à l'assureur",point:6},{choice:"sous les 15 jours à la FFVL",point:-6}]},{id:55,question:"La traînée de forme de l'ensemble aile+pilote est la traînée",choices:[{choice:"de pression due au pilote, aux suspentes et à l'aile",point:6},{choice:"due aux irrégularités de surface de l'aile",point:-6},{choice:"due aux tourbillons marginaux",point:-6}]},{id:56,question:"Les ondes de ressaut se développent lorsque le vent",choices:[{choice:"est faible en altitude et la masse d'air très instable",point:-6},{choice:"est de plus en plus fort en altitude et la masse d'air stable",point:6},{choice:"est fort près du sol et la masse d'air très instable",point:-6}]},{id:57,question:"Le taux de chute minimum",choices:[{choice:"correspond à un angle d'incidence plus petit que celui de vitesse-max",point:-6},{choice:"correspond à un angle d'incidence plus grand que celui de finesse-max",point:3},{choice:"peut s'utiliser en permanence sans risque en ascendance",point:-6},{choice:"est le régime de vol utile le plus proche du décrochage",point:3}]},{id:58,question:"Un variomètre indique",choices:[{choice:"la vitesse verticale de votre aile par rapport au sol",point:6},{choice:"la hauteur de votre aile",point:-6},{choice:"la direction de votre aile par rapport au nord",point:-6}]},{id:59,question:"Priorités en aéronefs non motorisés",choices:[{choice:"les P.U.L. sont prioritaires sur les ensembles remorqués (avion+planeur, U.L.M.+delta, avion ou U.L.M.+banderole)",point:6},{choice:"les ballons doivent la priorité aux P.U.L",point:-6},{choice:"les P.U.L. biplace sont prioritaires sur les P.U.L monoplace",point:-3}]},{id:60,question:"La cause de formation des nuages, c'est",choices:[{choice:"une forte descendance",point:-6},{choice:"Le réchauffement de l'air ascendant",point:-6},{choice:"le refroidissement de l'air jusqu'à son niveau de condensation",point:6}]},{id:61,question:"En vol, la diminution importante du vent relatif a pour conséquence",choices:[{choice:"une abattée dont l'amplitude peut exiger d'être contrôlée",point:2},{choice:"l'affaiblissement du bruit du vent dans les oreilles",point:2},{choice:"de vous obliger à lever vos mains pour favoriser la reprise de vitesse",point:2},{choice:"de vous obliger à abaisser vos mains pour garder le contact avec l'aile",point:-6}]},{id:62,question:"La traînée sur l'ensemble aile+pilote",choices:[{choice:"se divise en traînée de forme + traînée induite + traînée de frottement",point:6},{choice:"est indépendante de la vitesse-air",point:-6},{choice:"est indépendante de la forme de l'aile",point:-6}]},{id:63,question:"Les relations entre accompagnateur fédéral et écoles de vol libre",choices:[{choice:"sont à éviter absolument",point:-6},{choice:"pourraient nuire à la bonne évolution de l'activité",point:-6},{choice:"sont indispensables dans l'intérêt des pratiquants",point:3},{choice:"améliorent et facilitent le rôle de chacun pour la progression du nouveau pilote",point:3}]},{id:64,question:"La vapeur d'eau",choices:[{choice:"est visible (fines gouttelettes d'eau)",point:-6},{choice:"est invisible",point:4},{choice:"existe uniquement dans l'air maritime",point:-6},{choice:"existe partout dans la troposphère",point:2}]},{id:65,question:"Un thermique pur ou bleu",choices:[{choice:"permet un gain minimum de 1000m",point:-6},{choice:"ne se forme que dans une couche d'air à tendance stable",point:-6},{choice:"est dangereux pour nos ailes",point:-6},{choice:"n'est pas coiffé par un cumulus",point:6}]},{id:66,question:"Dans l'hémisphère nord lorsque vous êtes face au vent, vous avez",choices:[{choice:"les hautes pressions dans votre dos",point:-6},{choice:"les hautes pression à droite",point:-6},{choice:"les basses pressions à droite",point:6}]},{id:67,question:"Vous empruntez l'aile d'un pilote plus lourd que vous",choices:[{choice:"elle sera plus maniable",point:-6},{choice:"Les actions aux commandes seront moins efficaces",point:2},{choice:"elle se refermera plus facilement dans les turbulences",point:2},{choice:"le taux de chute sera légèrement plus favorable",point:2}]},{id:68,question:"Le meilleur profil d'un terrain de décollage est",choices:[{choice:"tel que vous pourrez facilement vous arrêter en cas de problèmes au gonflage",point:2},{choice:"tel que vous pourrez vous éloigner assez vite du relief",point:2},{choice:"concave",point:-6},{choice:"convexe",point:2}]},{id:69,question:"L'assemblée générale d'une association loi 1901 affiliée à la F.F.V.L. (votre club)",choices:[{choice:"est obligatoire tous les ans",point:6},{choice:"est obligatoire tous les 2 ans",point:-6},{choice:"n'est obligatoire qu'à la fondation du club",point:-6}]},{id:70,question:"L'altimètre",choices:[{choice:"ne subit pas l'influence des variations de température",point:-6},{choice:"utilise une échelle d'altitude calibrée pour des valeurs météo moyennes (atmosphère standard)",point:3},{choice:"indique la vitesse à laquelle varie la pression",point:-6},{choice:"même en parfait état est susceptible d'afficher pour une altitude donnée des valeurs qui peuvent varier selon l'heure et le lieu",point:3}]},{id:71,question:"Se relever dans la sellette en finale augmente",choices:[{choice:"la traînée induite",point:-6},{choice:"la traînée d'effet de sol",point:-6},{choice:"la traînée de forme",point:6}]},{id:72,question:"Voler en local d'un atterrissage, c'est",choices:[{choice:"avoir une autonomie qui permet de le rejoindre à tout moment quelles que soient les conditions aérologiques rencontrées",point:6},{choice:"rester sur un site habituel sans faire de distance",point:-6}]},{id:73,question:"Une aile arrive en face de vous, vous effectuez",choices:[{choice:"un virage à droite (l'autre dégage aussi à droite)",point:6},{choice:"une mise en descente (l'autre reste au même niveau)",point:-6},{choice:"un virage à gauche (l'autre dégage aussi à gauche)",point:-6}]},{id:74,question:"Le container du parachute de secours",choices:[{choice:"doit être verrouillé par un nœud",point:-6},{choice:"peut être positionné sous la planche d'assise de la sellette",point:2},{choice:"peut être positionné en position ventrale",point:2},{choice:"peut être positionné au dos de la sellette",point:2}]},{id:75,question:"La formation d'onde de ressaut est favorisée par",choices:[{choice:"une atmosphère humide",point:-6},{choice:"une atmosphère instable",point:-6},{choice:"une atmosphère stable",point:6}]},{id:76,question:"Une aile en vol stabilisé dans une ascendance",choices:[{choice:"descend par rapport à l'air ascendant",point:6},{choice:"monte à la même vitesse que l'air ascendant",point:-6},{choice:"monte par rapport à l'air ascendant",point:-6}]},{id:77,question:"Une école non reconnue par la F.F.V.L.",choices:[{choice:"peut attester le brevet de pilote confirmé",point:-6},{choice:"peut enseigner si les moniteurs possèdent les diplômes requis",point:6},{choice:"peut attester la partie pratique du brevet de pilote",point:-6}]},{id:78,question:"Au décollage, avec 20 km/h de face, vous pouvez gonfler votre voile",choices:[{choice:"dos à l'aile en vous attendant à devoir résister en reculant pour contrôler la vitesse d'ascension du profil",point:3},{choice:"face à l'aile en ordonnant à une aide extérieure de résister avec vous à la traction de votre voile",point:-6},{choice:"face à l'aile en vous attendant à devoir résister en avançant pour contrôler la vitesse d'ascension du profil",point:3},{choice:"dos à l'aile en vous préparant à mettre beaucoup d'énergie pour contrecarrer la force du vent",point:-6}]},{id:79,question:"Le vent météo",choices:[{choice:"s'affaiblit lorsque les isobares se resserrent",point:-6},{choice:"se renforce lorsque les isobares se resserrent",point:6},{choice:"n'a rien à voir avec l'espacement des lignes isobares",point:-6}]},{id:80,question:"Dans une atmosphère à tendance instable",choices:[{choice:"les cumulus ont tendance à se développer",point:3},{choice:"les stratus ont tendance à se développer",point:-6},{choice:"la température décroît rapidement quand on s'élève en altitude",point:3},{choice:"il y a peu d'ascendances",point:-6}]},{id:81,question:"Pour réduire le risque de fermeture en parapente, il faudra",choices:[{choice:"débrider l'aile ou la demi aile concernée",point:-6},{choice:"brider l'aile ou la demi aile concernée",point:3},{choice:"diminuer l'incidence",point:-6},{choice:"augmenter l'incidence",point:3}]},{id:82,question:"30 km/h de vent de face au décollage ; vous êtes seul",choices:[{choice:"un pilote expérimenté peut, sur un site adapté, décoller en gonflant dos au vent",point:-6},{choice:"vous essayez de gonfler car ça partira tout seul sans avoir besoin de courir",point:-6},{choice:"c'est trop ; vous vous abstenez",point:6}]},{id:83,question:"Types de fronts possibles dans une perturbation",choices:[{choice:"tempéré",point:-6},{choice:"chaud",point:2},{choice:"occlus",point:2},{choice:"froid",point:2}]},{id:84,question:"L'allongement d'une aile est égale au carré",choices:[{choice:"de l'envergure divisé par la surface",point:6},{choice:"de la surface divisé par l'envergure",point:-6},{choice:"de la corde divisé par la surface",point:-6}]},{id:85,question:"La finesse-air est le rapport",choices:[{choice:"distance parcourue horizontalement sur distance parcourue verticalement",point:-6},{choice:"portance sur traînée",point:3},{choice:"vitesse-air horizontale sur vitesse-air verticale",point:3},{choice:"traînée sur portance",point:-6}]},{id:86,question:"L'effet pendulaire spécifique au parapente",choices:[{choice:"peut être la cause d'amples mouvements de tangage et de roulis",point:2},{choice:"est une priorité en pilotage pour la sécurité du vol en parapente",point:2},{choice:"génère des mouvements de lacet",point:-6},{choice:"est produit par la différence de vitesse entre le pilote et sa voile",point:2}]},{id:87,question:"Vous vous posez en catastrophe dans un champ de blé non fauché",choices:[{choice:"vous êtes dans votre tort et vous devez régler le prix sur place",point:-6},{choice:"vous allez vous excuser auprès du cultivateur",point:3},{choice:"vous estimez les dégâts et vous le dédommagez immédiatement",point:-6},{choice:"vous demandez au cultivateur d'estimer les dégâts et vous faites une déclaration à l'assureur de la F.F.V.L.",point:3}]},{id:88,question:"Les signes distinctifs du Cumulonimbus et du Nimbostratus sont",choices:[{choice:"le Ns est accompagné d'un orage et le Cb d'un halo",point:-6},{choice:"le Ns donne des averses violentes, le Cb de la pluie continue",point:-6},{choice:"le Ns donne de la pluie continue et le Cb des pluies orageuses, des éclairs et des vents forts tourbillonnants",point:6}]},{id:89,question:"Le vol de pente nécessite",choices:[{choice:"d'être habitué aux effets de dérive imposés par le vent",point:2},{choice:"une observation constante de l'évolution du vent",point:2},{choice:"une maîtrise parfaite de sa trajectoire",point:2}]},{id:90,question:"Peut on voler dans les ZIT mentionnées sur les cartes aéronautiques ?",choices:[{choice:"Il suffit de téléphoner au numéro mentionné pour savoir si l'on peut la traverser",point:-6},{choice:"Il est interdit de pénétrer le volume des ZIT mentionnées sur les cartes aéronautiques",point:6},{choice:"Il est uniquement possible de pénétrer en week-end et jours fériés : interdit en semaine",point:-6}]},{id:91,question:"En situation de fœhn on observe",choices:[{choice:"des turbulences dangereuses",point:3},{choice:"des nuages dérivant avec le vent",point:-6},{choice:"un assèchement de la masse d'air sous le vent des reliefs",point:3}]},{id:92,question:"Sur la polaire des vitesses, les régimes de vol de croisière correspondent",choices:[{choice:"aux incidences inférieures à l'incidence du taux de chute mini",point:6},{choice:"aux incidences supérieures à l'incidence du taux de chute mini",point:-6}]},{id:93,question:"Le centrage d'une aile",choices:[{choice:"est équilibré lorsque le centre de poussée et le centre de gravité sont alignés verticalement sur corde",point:4},{choice:"s'exprime en degrés",point:-6},{choice:"s'exprime en pourcentage",point:2}]},{id:94,question:"Vous êtes dans une masse d'air descendante, la finesse-sol",choices:[{choice:"reste la même",point:-6},{choice:"est améliorée",point:-6},{choice:"est dégradée",point:6}]},{id:95,question:"L'accompagnateur fédéral utilise sa radio",choices:[{choice:"pour guider les pilotes qu'il accompagne tout le long du vol",point:-6},{choice:"uniquement pour les guider au décollage",point:-3},{choice:"comme n'importe quel pilote, sans plus",point:6},{choice:"uniquement pour les guider à l'atterrissage",point:-3}]},{id:96,question:"Le brouillard d'advection se forme",choices:[{choice:"sans vent",point:-6},{choice:"lorsque le sol se refroidit par nuit claire",point:-6},{choice:"lors de l'arrivée d'une masse d'air chaude sur un sol froid",point:6}]},{id:97,question:"Un front froid",choices:[{choice:"est sécurisant (air froid = air stable)",point:-6},{choice:"peut provoquer des coups de vent",point:2},{choice:"peut donner lieu à de fortes précipitations et turbulences",point:4},{choice:"donne peu de vent",point:-6}]},{id:98,question:"En vol si vous ressentez des turbulences",choices:[{choice:"vous les contrez pour conserver votre cap et veillez à conserver de la vitesse",point:2},{choice:"vous restez attentifs aux informations que vous procurent vos commandes",point:2},{choice:"vous pilotez de manière à amortir en priorité les mouvements pendulaires de l'aile",point:2},{choice:"vous restez bras hauts",point:-6}]},{id:99,question:"Une aile vole face au vent; elle avance par rapport au sol ; le vent est",choices:[{choice:"moins fort que la vitesse/air de l'aile",point:6},{choice:"on ne peut pas savoir",point:-6},{choice:"plus fort que la vitesse/air de l'aile",point:-6}]},{id:100,question:"Le décrochage a lieu en général",choices:[{choice:"à une vitesse inférieure à celle du taux de chute mini",point:6},{choice:"à la vitesse de taux de chute mini",point:-6},{choice:"à une vitesse supérieure à celle du taux de chute mini",point:-3}]},{id:101,question:"Le choix d'une voile est guidé par",choices:[{choice:"son coût abaissé par l'absence de contrôle technique",point:-6},{choice:"le niveau du pilote (fiche de progression)",point:3},{choice:"la catégorie de la voile",point:3},{choice:"le site principalement fréquenté",point:0}]},{id:102,question:"La qualification d'accompagnateur fédéral",choices:[{choice:"est un produit fédéral visant à concurrencer les écoles professionnelles",point:-6},{choice:"s'adresse à des bénévoles et n'attribue aucune prérogative pour l'enseignement du vol libre",point:3},{choice:"permet de bénéficier d'allègements de formation du diplôme d'Etat (DEJEPS)",point:-6},{choice:"est un produit fédéral permettant aux club de mieux accueillir et aider les nouveaux pilotes",point:3}]},{id:103,question:"Le brouillard de rayonnement se forme",choices:[{choice:"sans vent ou par vent très faible",point:2},{choice:"lorsque le sol se refroidit par une nuit claire",point:4},{choice:"lors de l'arrivée d'une masse d'air chaude sur un sol froid",point:-6}]},{id:104,question:"Une confluence se rencontre habituellement",choices:[{choice:"au sommet d'une crête entre 2 vallées alimentées chacune par une brise",point:2},{choice:"entre une brise et un vent météo",point:2},{choice:"le long d'un front de brise de mer",point:2}]},{id:105,question:"La surface d'un parapente est généralement donnée par",choices:[{choice:"la projection de la voile gonflée sur un plan",point:3},{choice:"la surface de l'intrados posé à plat",point:3},{choice:"l'envergure multiplié par l'épaisseur du profil",point:-6}]},{id:106,question:"Dans un espace aérien non contrôlé et au dessus de 900 m mer ou 300 m sol en montagne, vous devez avoir",choices:[{choice:"une visibilité de 1500 mètres et rester hors des nuages",point:-6},{choice:"une visibilité de 5 km sous le FL100, 8 km au-dessus et un espacement par rapport aux nuages de 300m verticalement et 1500m horizontalement",point:6},{choice:"une visibilité de 8 km et rester hors des nuages",point:-6}]},{id:107,question:"La portance et la traînée d'une aile sont fonctions, entre autres, de",choices:[{choice:"la vitesse-sol",point:-6},{choice:"la vitesse du vent météo",point:-6},{choice:"la vitesse-air de l'aile",point:6}]},{id:108,question:"Dans un espace aérien non contrôlé et au dessous de 900 m mer et 300 m sol en montagne, la visibilité minimale doit être de",choices:[{choice:"300 mètres",point:-6},{choice:"8000 mètres",point:-6},{choice:"1500 mètres",point:6}]},{id:109,question:"Par une belle journée d'ascendances où des orages sont annoncés, il faut s'inquiéter si",choices:[{choice:"le ciel se couvre rapidement",point:2},{choice:"l'ombre des nuages au sol grandit rapidement",point:2},{choice:"ça monte partout",point:2}]},{id:110,question:"Un vent du 225° est un vent",choices:[{choice:"provenant du cap 225°",point:3},{choice:"soufflant vers le cap 225°",point:-3},{choice:"soufflant vers le sud-ouest",point:-3},{choice:"soufflant vers le nord-est",point:3}]},{id:111,question:"Un thalweg est",choices:[{choice:"un axe de basses pressions",point:6},{choice:"une zone où la pression atmosphérique varie peu",point:-6},{choice:"un axe de hautes pressions",point:-6}]},{id:112,question:"Pour une même aile, un fort accroissement de la charge alaire entraîne une augmentation",choices:[{choice:"du taux de chute",point:2},{choice:"des déformations de l'aile",point:2},{choice:"de la vitesse horizontale",point:2}]},{id:113,question:"Votre voile se replie brusquement côté relief",choices:[{choice:"vous infléchissez energiquement votre trajectoire vers la vallée malgré la demi aile fermée",point:-6},{choice:"vous contrez commande + sellette pour garder votre cap",point:6},{choice:"vous forcez sa réouverture avec un abaissement ample du frein côté fermé",point:-3}]},{id:114,question:"Le calage d'une aile de parapente",choices:[{choice:"peut être modifié par le réglage de la longueur des freins",point:-6},{choice:"est déterminé par la longueur de chaque suspente",point:2},{choice:"peut être fortement modifié par le vieillissement du suspentage",point:2},{choice:"est modifié par une action sur les trims ou l'accélérateur",point:2}]},{id:115,question:"Vous empruntez l'aile d'un pilote plus léger que vous",choices:[{choice:"les réactions de l'aile lors de fermetures seront plus vives",point:3},{choice:"votre vitesse-max sera plus faible",point:-6},{choice:"elle se refermera plus facilement dans les turbulences",point:-6},{choice:"elle se refermera plus rarement dans les turbulences",point:3}]},{id:116,question:"Lors d'un atterrissage en campagne, un pilote breveté, licencié, détruit le pare-brise d'une voiture; c'est",choices:[{choice:"la R.C. du propriétaire de la voiture qui doit rembourser",point:-6},{choice:"le propriétaire de la voiture qui doit payer",point:-6},{choice:"au pilote de payer les dégâts",point:-6},{choice:"la R.C. du pilote qui remboursera",point:6}]},{id:117,question:"On appelle charge alaire, le rapport",choices:[{choice:"poids total (aile+pilote) sur surface de l'aile",point:6},{choice:"envergure au carré sur surface de l'aile",point:-6},{choice:"poids du pilote sur surface de l'aile",point:-6},{choice:"surface de l'aile sur poids total (aile+pilote)",point:-6}]},{id:118,question:"L'effet girouette, c'est la conséquence d'une rotation autour de l'axe de",choices:[{choice:"tangage",point:-6},{choice:"roulis",point:-6},{choice:"lacet",point:6}]},{id:119,question:"Quelles règles dois-je respecter pour survoler une manifestation entrainant un grand rassemblement de personnes ?",choices:[{choice:"A minima, et sauf restrictions particulières, 300m au dessus de l'obstacle le plus élevé dans un rayon de 600m autour de l'aéronef",point:6},{choice:"150m minimum pour pouvoir dégager si besoin",point:-6},{choice:"Pas de minimum en PUL, mais ne pas mettre en danger les biens et les personnes au sol",point:-6}]},{id:120,question:`Aux "oreilles", vous décidez d'utiliser l'accélérateur, cela`,choices:[{choice:"peut être une parade au risque de parachutale",point:3},{choice:"augmente l'incidence",point:-6},{choice:"permet d'augmenter encore plus votre taux de chute",point:3},{choice:"rend l'aile plus stable en roulis",point:-6}]},{id:121,question:"En vol de pente, vous engagez les virages",choices:[{choice:"du côté opposé au relief",point:6},{choice:"du côté de l'aile qui se soulève",point:-6},{choice:"du côté du relief",point:-6}]},{id:122,question:"Le point d'arrêt d'un profil",choices:[{choice:"est la zone où dépression et surpression s'arrêtent",point:-6},{choice:"se déplace en fonction de l'incidence",point:2},{choice:"est le point où la pression statique de l'air est maximale",point:2},{choice:"sépare les écoulements d'intrados et d'extrados",point:2}]},{id:123,question:"Lors du passage d'un front, l'air chaud",choices:[{choice:"soulève l'air froid",point:-6},{choice:"peut être refoulé vers le bas ou soulevé selon la situation",point:-6},{choice:"est soulevé",point:6}]},{id:124,question:"Je me ferai probablement plus plaisir avec une aile",choices:[{choice:"aux performances maximum, mais difficile à piloter pour mon niveau",point:-6},{choice:"que je maîtrise bien aux performances honnêtes",point:6},{choice:"qui gagne en compétition, quel que soit mon niveau",point:-6}]},{id:125,question:"Parmi les nuages ci-dessous, certains produisent généralement des précipitations",choices:[{choice:"nimbostratus",point:3},{choice:"cumulonimbus",point:3},{choice:"cumulus",point:-6}]},{id:126,question:"Pour amener une particule d'air à saturation en humidité, il faut",choices:[{choice:"diminuer sa température",point:6},{choice:"augmenter sa température",point:-6},{choice:"abaisser son altitude",point:-6}]},{id:127,question:"Des commandes réglées trop tendues",choices:[{choice:"peuvent auto brider le bord de fuite lors de l'utilisation de l'accélérateur",point:2},{choice:"créent un risque supplémentaire de phase parachutale",point:2},{choice:"n'ont rien à voir avec les cascades d'incidents",point:-6},{choice:"peuvent empêcher la montée de la voile",point:2}]},{id:128,question:"Les actions de l'accompagnateur fédéral se font auprès",choices:[{choice:"de pilotes licenciés, au minimum fin de niveau vert ayant validés le brevet initial",point:6},{choice:"de pilotes de bon niveau non licenciés",point:-6},{choice:"d'accompagnateurs de club entre eux uniquement",point:-6},{choice:"de pilotes brevetés assurés",point:0}]},{id:129,question:"La finesse-sol",choices:[{choice:"augmente par vent arrière",point:6},{choice:"augmente par vent de face",point:-6},{choice:"diminue par vent arrière",point:-6}]},{id:130,question:"La norme CEN E 926-1 et 2",choices:[{choice:"classe les parapentes en 4 niveaux d'accès dont le plus accessible est noté D",point:-6},{choice:"attribue les lettres A, B, C ou D à 28 manœuvres réalisées en vol par des pilotes test",point:2},{choice:"sépare les parapentes en 4 niveaux de comportements en vol",point:2},{choice:"applique des tests de résistance à 8G, au sol, derrière un véhicule",point:2}]},{id:131,question:"Pour décoller en sécurité, il est préférable de choisir une pente",choices:[{choice:"convexe et progressive",point:3},{choice:"concave suivie d'une cassure nette",point:-6},{choice:"dégagée d'obstacles",point:3}]},{id:132,question:"Un allongement important est facteur",choices:[{choice:"de performance",point:6},{choice:"d'instabilité",point:-3},{choice:"d'effilement",point:-6}]},{id:133,question:"Juste avant le sommet d'une ressource importante",choices:[{choice:"l'effet pendulaire préjuge de l'arrivée d'une abattée",point:2},{choice:"la vitesse-air parvient à un minimum",point:2},{choice:"le facteur de charge est inférieur à",point:12},{choice:"l'assiette est à piquer",point:-6}]},{id:134,question:"On peut rencontrer des turbulences dangereuses pour le vol libre dans les phénomènes observés suivant",choices:[{choice:"à l'interface d'une couche d'inversion recouvrant une masse d'air générant des ascendances",point:3},{choice:"stratus",point:-6},{choice:"rotors d'onde de ressaut",point:3}]},{id:135,question:"Lors du passage d'un front chaud",choices:[{choice:"les pluies sont continues",point:3},{choice:"l'air est très humide et le système nuageux important",point:3},{choice:"les pluies sont intermittentes et violentes",point:-6}]},{id:136,question:"Dans un virage, l'aile s'incline principalement grâce à un mouvement de",choices:[{choice:"roulis",point:6},{choice:"lacet",point:-3},{choice:"tangage",point:-6}]},{id:137,question:"Dans une masse d'air sans nuages, la température est de 15°C au sol et de 12°C 500 mètres au dessus. Cette tranche d'air est",choices:[{choice:"plutôt stable",point:6},{choice:"plutôt instable",point:-6},{choice:"plutôt sélectivement instable",point:-6}]},{id:138,question:"Quelle est l'altitude maximale absolue possible en vol libre.",choices:[{choice:"Le FL 100 ou 1000ft surface en haute montagne",point:-6},{choice:"Le FL 195, dans certaines LTA E Alpes ou Pyrénées",point:6},{choice:"Le FL 115 soit environ 3500m",point:-6}]},{id:139,question:"Vous rentrez dans un thermique et engagez un 360°. Après 90° de virage le variomètre devient négatif",choices:[{choice:"vous continuez le virage jusqu'à 270° puis reprenez une ligne droite pour retrouver l'ascendance",point:3},{choice:"vous inversez le sens du virage",point:3},{choice:"vous diminuez l'inclinaison",point:-6}]},{id:140,question:"Autour d'un profil d'aile, l'écoulement de l'air peut être",choices:[{choice:"résonnant",point:-6},{choice:"décollé",point:2},{choice:"laminaire",point:2},{choice:"turbulent",point:2}]},{id:141,question:"J'accrois les risques",choices:[{choice:"énormément avec la fatigue et/ou les problèmes (cœur, santé, travail, etc.)",point:4},{choice:"pas du tout, je suis en bonne forme physique et psychique",point:0},{choice:"raisonnablement en introduisant une seule nouveauté à la fois",point:2},{choice:"un peu avec la fatigue",point:-6}]},{id:142,question:"Les règles de vol obligent chaque pilote",choices:[{choice:"à dépasser une aile plus lente par la gauche",point:-6},{choice:"à respecter une distance suffisante pour prévenir les abordages",point:3},{choice:"à dégager par la droite en cas de croisement à la même altitude",point:3}]},{id:143,question:"En vol une turbulence ferme brutalement mon aile ; je me sens tomber à droite dans ma sellette",choices:[{choice:"j'utilise mon frein gauche de manière à ralentir un départ en rotation",point:2},{choice:"je résiste au déséquilibre en transférant mon poids à gauche",point:2},{choice:"j'actionne immédiatement ma main droite avec un geste ample et profond pour forcer la réouverture de l'aile",point:-6},{choice:"je regarde mon aile pour évaluer la situation et son évolution",point:2}]},{id:144,question:"A quoi correspondent les valeurs ASFC et AGL, AMSL ?",choices:[{choice:"ASFC et AGL = hauteur sol, AMSL = altitude par rapport au niveau de la mer",point:6},{choice:"Toutes ces valeurs sont variables en fonction de la pression atmosphérique",point:-6},{choice:"Elles expriment les hauteurs et altitudes en mètres à respecter",point:-6}]},{id:145,question:"Le vent de fœhn est caractérisé par",choices:[{choice:"un nuage orographique sur le relief au vent",point:2},{choice:"une descente d'air chaud, sec et très turbulent sous le vent du relief",point:4},{choice:"un refroidissement de la masse d'air sous le vent du relief",point:-6}]},{id:146,question:"Votre voile neuve vire systématiquement à droite, drisses de freins détendues",choices:[{choice:"vous portez votre poids sur votre fesse gauche et vérifiez si une déviation de la trajectoire équivalente du côté opposé se produit",point:3},{choice:"vous tendez d'avantage le cuissard droit",point:-6},{choice:"une fois posé vous décalez le niveau des élévateurs droits sur le harnais",point:-6},{choice:"vous contactez le revendeur pour un contrôle en usine",point:3}]},{id:147,question:"On risque de rencontrer une zone de cisaillement",choices:[{choice:"dans une confluence",point:2},{choice:"en traversant une couche d'inversion",point:2},{choice:"en entrée et sortie de thermique",point:2}]},{id:148,question:"La chaleur se propage par",choices:[{choice:"rayonnement",point:2},{choice:"conduction",point:2},{choice:"convection",point:2}]},{id:149,question:"L'effet girouette remet l'aile",choices:[{choice:"en vol face à son vent relatif",point:3},{choice:"au sol, à l'arrêt, face au vent instantané",point:3},{choice:"en vol face au vent météo",point:-6},{choice:"au sol face au vent moyen",point:-6}]},{id:150,question:"Lorsqu'une particule atmosphérique non saturée s'élève sans échanger de chaleur avec l'air ambiant, sa température",choices:[{choice:"augmente de 1° par 100m",point:-6},{choice:"reste constante",point:-6},{choice:"diminue de 1° par 100m",point:6}]},{id:151,question:"En air calme, si l'on compare deux régimes de vol stabilisé, l'assiette",choices:[{choice:"augmente lorsque l'angle d'incidence augmente",point:3},{choice:"augmente lorsque la vitesse augmente",point:-6},{choice:"diminue lorsque la vitesse diminue",point:-6},{choice:"diminue lorsque l'angle d'incidence diminue",point:3}]},{id:152,question:"Le niveau d'accessibilité d'une voile dépend",choices:[{choice:"des résultats aux tests",point:1},{choice:"de la charge alaire appliquée sur les modèles dont la fourchette de poids est très large",point:2},{choice:"du niveau technique du pilote",point:2},{choice:"des indications du constructeur",point:1}]},{id:153,question:"Lors de la réception d'une aile neuve, vous devez",choices:[{choice:"vérifier les performances et les comportements de l'aile sur un site grand vol connu et en conditions aérologiques calmes",point:3},{choice:"faire quelques essais en pente école pour vérifier les freins, le suspentage et le ressenti de la prise en charge pendant la course",point:3},{choice:"raccourcir les freins pour légèrement diminuer sa vitesse max (bras haut)",point:-6}]},{id:154,question:"La traînée de profil se compose de",choices:[{choice:"la traînée induite",point:-6},{choice:"la traînée de forme",point:3},{choice:"la traînée de frottement",point:3}]},{id:155,question:"Après un accident, la déclaration doit être établie et envoyée à la F.F.V.L.",choices:[{choice:"dans tous les cas par le président du club",point:-6},{choice:"par le pilote breveté ou son entourage",point:3},{choice:"par le moniteur pour un de ses élèves",point:3},{choice:"par la gendarmerie",point:-6}]},{id:156,question:"Si la charge alaire est réduite, l'aile",choices:[{choice:"est moins manœuvrante",point:3},{choice:"a un taux de chute moins important",point:3},{choice:"a une finesse plus élevée",point:-3},{choice:"décolle à une plus grande vitesse",point:-6}]},{id:157,question:"Un halo autour de la lune ou du soleil est souvent",choices:[{choice:"le signe d'une dégradation prochaine du temps",point:2},{choice:"le signe de la présence d'altocumulus",point:-6},{choice:"le signe de la présence de cirrostratus",point:4},{choice:"caractéristique du beau temps qui va durer",point:-6}]},{id:158,question:"Les tendances générales d'un front froid sont",choices:[{choice:"aggravation rapide avec pluie, orages, vents forts, turbulences",point:6},{choice:"temps brumeux couvert avec bruine",point:-6},{choice:"aggravation lente avec pluie modérée",point:-6}]},{id:159,question:"A l'atterrissage",choices:[{choice:"le dernier virage peut se prévoir à 5m/sol et sur 180°",point:-6},{choice:"il faut ralentir sa vitesse très tôt",point:-6},{choice:"il est déconseillé de faire des virages serrés près du sol à cause de l'augmentation du taux de chute",point:3},{choice:"il faut augmenter la vitesse en finale bien avant le freinage",point:3}]},{id:160,question:"En espace de classe E, puis-je néanmoins croiser un trafic IFR ?",choices:[{choice:"Oui, et le trafic IFR est donc prioritaire",point:-6},{choice:"Non, le trafic IFR n'évolue qu'en espaces classés D à minima",point:-6},{choice:"Oui, il est cependant tenu dans ce cas de respecter également les règles VFR",point:6}]},{id:161,question:"Le déclenchement des thermiques",choices:[{choice:"renforce les brises de pente et de vallée",point:4},{choice:"rend la brise de pente irrégulière",point:2},{choice:"permet d'exploiter la brise de pente loin du relief",point:-6}]},{id:162,question:"La finesse-sol est le rapport",choices:[{choice:"vitesse-sol horizontale sur vitesse-sol verticale",point:6},{choice:"vitesse de vol sur taux de chute",point:-3},{choice:"vitesse verticale sur vitesse horizontale",point:-6},{choice:"portance sur traînée",point:-3}]},{id:163,question:"Les isobares sur une carte météo montrent",choices:[{choice:"les niveaux de températures",point:-6},{choice:"les anticyclones et les dépressions",point:6},{choice:"les niveaux des risques de précipitation",point:-6}]},{id:164,question:"L'élève qui réussit son brevet de pilote fédéral",choices:[{choice:"est considéré par son moniteur et par la F.F.V.L. comme un pilote autonome sur sites",point:3},{choice:"peut voler sous sa propre responsabilité sans contrevenir aux règlements fédéraux",point:3},{choice:"peut estimer que sa progression est terminée",point:-6}]},{id:165,question:"Sur une aile en vol, il y a plusieurs types de traînées de natures bien distinctes",choices:[{choice:"la traînée de frottement",point:2},{choice:"la traînée de forme",point:2},{choice:"la traînée induite",point:2}]},{id:166,question:"Vous venez d'acquérir une nouvelle aile, afin de mieux la connaître et comme vous avez un parachute de secours",choices:[{choice:"vous recherchez la phase parachutale",point:-6},{choice:"vous multipliez les vols dans des aérologies standards pour vous la rendre familière",point:3},{choice:"vous effectuez éventuellement une journée de stage en milieu aménagé",point:3},{choice:'après un peu de gain, vous réalisez quelques "360°" engagés afin de mesurer le taux de chute maximal',point:-6}]},{id:167,question:"Comment savoir si je peux franchir une limite d'espace aérien ?",choices:[{choice:"En téléphonant à la DGAC",point:-6},{choice:"Il suffit de voler à moins de 500ft (150m) sol, les autres aéronefs volant au dessus de cette limite",point:-6},{choice:"En me référant aux mentions concernant la nature et le volume de cet espace sur un document aéronautique à jour",point:6}]},{id:168,question:"Un vent de 20 Kt (nœuds) souffle à environ",choices:[{choice:"18 km/h",point:-6},{choice:"36 km/h",point:6},{choice:"20 km/h",point:-6}]},{id:169,question:"Vous volez à une vitesse-air de 35 km/h avec 10 km/h de vent arrière, votre vitesse-sol",choices:[{choice:"reste inchangée",point:-6},{choice:"est d'environ 45 km/h",point:6},{choice:"est d'environ 25 km/h",point:-6}]},{id:170,question:"Pour une sécurité maximale, le dépliage/repliage du parachute de secours doit être effectué",choices:[{choice:"au moins 1 fois par an",point:2},{choice:"à la fréquence des préconisations du constructeur",point:4},{choice:"il faut le laisser tel que l'a plié le revendeur",point:-6}]},{id:171,question:"A 4m/sol vous constatez que vous allez vous poser avec un vent de travers de 45°",choices:[{choice:"vous réalisez un virage pour vous replacer face au vent et freinerez une fois face au vent",point:-6},{choice:"vous ne vous inquiétez pas, vous arrondirez plus tôt et n'envisagez pas de virage",point:-6},{choice:"en utilisant la sellette vous veillez à ce que cet écart ne s'aggrave pas et vous vous préparez à arrondir normalement",point:6}]},{id:172,question:"Les anticyclones sont le siège",choices:[{choice:"d'un mouvement général ascendant des masses d'air",point:-6},{choice:"plutôt de vents forts",point:-6},{choice:"plutôt de vents faibles",point:2},{choice:"d'un mouvement général d'affaissement des masses d'air",point:4}]},{id:173,question:"Un nuage orographique",choices:[{choice:"est dû à une ascendance dynamique",point:3},{choice:"indique une absence de vent",point:-6},{choice:"est fixe par rapport au sol",point:3},{choice:"est dû à une ascendance thermique",point:-6}]},{id:174,question:"Le directeur technique d'une École Française de Vol Libre (EFVL) ou d'un Club-École Français de Vol Libre (CEFVL)",choices:[{choice:"atteste la partie pratique du brevet de pilote",point:3},{choice:"est responsable de toutes les activités pédagogiques de l'école",point:3},{choice:"délivre le brevet de pilote",point:-6}]},{id:175,question:"Le facteur de charge",choices:[{choice:"est égal à 1 en vol rectiligne stabilisé",point:2},{choice:"dépend du poids du pilote et des indications du constructeur",point:-6},{choice:"est supérieur à 1 pendant les virages équilibrés",point:2},{choice:"est inférieur à 1 quand on accélère en vol rectiligne",point:2}]},{id:176,question:"Le décrochage se produit lorsque",choices:[{choice:"la vitesse est trop forte",point:-6},{choice:"l'incidence est trop forte",point:6},{choice:"l'incidence est trop faible",point:-6}]},{id:177,question:"Vous approchez de la base d'un cumulus",choices:[{choice:"vous risquez d'être aspiré car l'ascendance peut se renforcer",point:3},{choice:"il n'y a jamais de risque d'aspiration",point:-6},{choice:"le risque est faible tant que le nuage n'est pas de type congestus ou nimbus",point:-6},{choice:"le danger est aggravé si la base est en dessous des plus hautes crêtes",point:3}]},{id:178,question:"Le parachute de secours",choices:[{choice:"doit être équipé d'aiguilles en plus du velcro",point:3},{choice:"ne peut pas s'ouvrir de manière intempestive",point:-6},{choice:"nécessite une visite prévol",point:3}]},{id:179,question:"Pour avancer de 4800m dans le plan horizontal, vous avez perdu 600m d'altitude ; votre finesse-sol est voisine de",choices:[{choice:"9",point:-6},{choice:"6",point:-6},{choice:"",point:86},{choice:"7",point:-6}]},{id:180,question:"La pression atmosphérique est due",choices:[{choice:"au poids de la colonne d'air située au dessus",point:6},{choice:"à la rotation de la terre sur elle-même",point:-6},{choice:"au réchauffement solaire",point:-6}]},{id:181,question:"En vol de pente, la priorité revient à l'aile qui",choices:[{choice:"est situé au vent du relief",point:-6},{choice:"à la pente à sa gauche",point:-6},{choice:"a la pente à sa droite",point:6},{choice:"est situé sous le vent du relief",point:-6}]},{id:182,question:"Lorsqu'un pilote exploite une bulle thermique pour gagner de l'altitude",choices:[{choice:"il descend continuellement à l'intérieur de la bulle",point:6},{choice:"il aborde la bulle vers sa partie inférieure et ressort au sommet",point:-6},{choice:"il s'élève à la même vitesse que la bulle",point:-6}]},{id:183,question:"Parmi les points suivants, certains améliorent la finesse",choices:[{choice:"profil optimisé pour minimiser la traînée de forme",point:3},{choice:"position debout du pilote",point:-6},{choice:"suspentes fines ou montants de trapèze profilés",point:3}]},{id:184,question:"La rotation de la terre dévie les vents vers leur",choices:[{choice:"gauche dans l'hémisphère nord",point:-6},{choice:"droite dans l'hémisphère sud",point:-6},{choice:"droite dans l'hémisphère nord",point:6}]},{id:185,question:"Où peut-on trouver les horaires d'activation des zones R ?",choices:[{choice:"Au dos de toutes les cartes IGN du SIA au 1/500 000",point:-6},{choice:"Dans le guide VFR édité par le SIA",point:-6},{choice:"Au dos des cartes au 1/250 000 et dans le complément aux cartes édité par le SIA",point:6}]},{id:186,question:"La finesse-sol",choices:[{choice:"ne varie jamais",point:-6},{choice:"est toujours inférieure à la finesse-air",point:-6},{choice:"est identique à la finesse-air dans une masse d'air immobile",point:6}]},{id:187,question:"Une École Française de Vol Libre (EFVL)",choices:[{choice:"signe annuellement une charte garantissant notamment le respect des règles d'enseignement édictées par la F.F.V.L.",point:2},{choice:"est une entreprise privée financièrement indépendante de la F.F.V.L.",point:2},{choice:"est une entreprise privée qui fait l'objet d'un suivi régulier de la part de la F.F.V.L.",point:2}]},{id:188,question:"La traîne d'une perturbation, c'est la zone",choices:[{choice:"d'air froid s'étendant à l'arrière du front froid",point:6},{choice:"d'air chaud compris entre le front chaud et le front froid",point:-6},{choice:"nuageuse très développée arrivant avec le front froid",point:-6}]},{id:189,question:"En soufflerie, lorsque l'angle d'incidence augmente à partir de 0°, la portance",choices:[{choice:"augmente progressivement jusqu'au décrochage",point:-6},{choice:"augmente, passe par un maximum, diminue puis s'effondre brusquement (décrochage)",point:6},{choice:"ne varie pratiquement pas",point:-6}]},{id:190,question:"Une fois que j'ai mis en œuvre les oreilles",choices:[{choice:"je suis sensible à l'éventuelle diminution du vent dans mes oreilles",point:2},{choice:"je peux utiliser l'accélérateur pour descendre encore plus vite",point:2},{choice:"je me donne la possibilité d'étager mon approche lors d'une présentation simultanée de plusieurs ailes à l'atterrissage",point:2},{choice:"je surveille mon aile en permanence pour m'assurer que les « oreilles » restent en place",point:-6}]},{id:191,question:"La restitution est un phénomène",choices:[{choice:"d'inversion des brises de vallée le soir",point:-6},{choice:"d'ascendances plutôt douces, le soir, sur des zones généralement peu propices pendant la journée",point:6},{choice:"d'inversion des brises de pente le soir",point:-6}]},{id:192,question:"L'extraction du parachute de secours et le retour au sol",choices:[{choice:"peuvent s'avérer problématiques dans bien des cas",point:3},{choice:"se passent toujours bien",point:-6},{choice:"sont une formalité et permettent donc un engagement plus important du pilote sous son aile",point:-6},{choice:"nécessitent une bonne information préalable",point:3}]},{id:193,question:"En finale, si la cible descend dans le champ de vision",choices:[{choice:"vous êtes long",point:6},{choice:"vous êtes court",point:-6},{choice:"vous devez ralentir au maximum",point:-6}]},{id:194,question:"Priorités entre P.U.L.",choices:[{choice:"delta et parapente doivent observer les mêmes règles de l'air",point:6},{choice:"le parapente doit la priorité au delta",point:-6},{choice:"le delta doit la priorité au parapente",point:-6}]},{id:195,question:"Un parachute de secours hémisphérique est",choices:[{choice:"un planeur ultra-léger",point:-6},{choice:"un frein aérodynamique",point:6},{choice:"une garantie à 100% de s'en sortir en cas d'accident",point:-6}]},{id:196,question:"En vol, le pilote peut anticiper",choices:[{choice:"l'imminence d'une fermeture du côté où sa commande durcit",point:-6},{choice:"l'arrivée prochaine d'une ressource lorsqu'il se sent « tomber vers l'avant »",point:2},{choice:"l'arrivée d'un mouvement de piqué lorsque sa vitesse diminue",point:2},{choice:"l'arrivée prochaine d'une abattée lorsqu'il se sent « tomber sur le dos »",point:2}]},{id:197,question:"La situation météo la plus favorable à la formation d'orages isolés est",choices:[{choice:"un anticyclone",point:-6},{choice:"une dépression",point:0},{choice:"un marais barométrique",point:6}]},{id:198,question:"Vous volez par fort vent arrière, cela implique",choices:[{choice:"une diminution de la Force Aérodynamique",point:-6},{choice:"une augmentation de l'incidence",point:-6},{choice:"une augmentation de la vitesse-sol",point:3},{choice:"une augmentation de la finesse-sol",point:3}]},{id:199,question:"Dans une atmosphère à tendance stable",choices:[{choice:"la température décroît doucement quand on s'élève en altitude",point:3},{choice:"la température décroît rapidement quand on s'élève en altitude",point:-6},{choice:"la structure de la masse d'air s'oppose au développement des ascendances",point:3},{choice:"il ne peut pas y avoir d'ascendances thermiques",point:-6}]},{id:200,question:"L'accompagnateur fédéral dans un club de plaine",choices:[{choice:"maîtrise les spécificités du treuil",point:3},{choice:"a les mêmes prérogatives que l'accompagnateur fédéral dans un club de montagne",point:3},{choice:"ne peut proposer de sorties montagnes",point:-6}]},{id:201,question:"A surface égale, un pilote plus léger aura",choices:[{choice:"une meilleure pénétration",point:-6},{choice:"une vitesse max plus faible",point:3},{choice:"une vitesse de décrochage identique",point:-6},{choice:"un taux de chute plus faible",point:3}]},{id:202,question:"Une dorsale est",choices:[{choice:"un axe de basses pressions",point:-6},{choice:"une zone où la pression atmosphérique varie peu",point:-6},{choice:"un axe de hautes pressions",point:6}]},{id:203,question:"Par vent soutenu, préalablement à un gonflage face à l'aile",choices:[{choice:"une traction solidement verrouillée des « C » ou des « D » permet une solution d'attente sûre",point:3},{choice:"j'ai pris mes commandes en main comme je l'aurais fais en étant dos à l'aile",point:3},{choice:"un pré gonflage ne s'impose pas",point:-6},{choice:"j'ai soigneusement trié mes suspentes et disposé mon aile au sol avant d'endosser ma sellette",point:0}]},{id:204,question:"La portance en vol rectiligne stabilisé est",choices:[{choice:"perpendiculaire à la trajectoire-air",point:3},{choice:"plus faible que le poids total aile+pilote",point:3},{choice:"constante quelle que soit la vitesse de l'aile",point:-6}]},{id:205,question:"Pour votre sécurité",choices:[{choice:"vous équipez votre sellette d'un kit de secours comprenant au minimum une ficelle résistante de 20m",point:2},{choice:"vous faites vérifier votre aile par le constructeur dès que vous constatez une paresse inhabituelle au gonflage",point:2},{choice:"vous faites vérifier votre aile par le constructeur dès que vous constatez un comportement inhabituel en virage",point:2}]},{id:206,question:"En atmosphère humide, les ascendances",choices:[{choice:"sont souvent matérialisées par des nuages",point:6},{choice:"ne sont généralement pas matérialisées",point:-6},{choice:"sont très faibles car l'atmosphère humide est à tendance stable",point:-6}]},{id:207,question:"La finesse-air maximale est",choices:[{choice:"une valeur qui dépend de la charge alaire",point:-6},{choice:"obtenue à une vitesse supérieure à celle du taux de chute mini",point:6},{choice:"obtenue à une incidence dépendant du vent météo",point:-6}]},{id:208,question:"Quel est le type de carte aéronautique le plus adapté pour le vol libre ?",choices:[{choice:"La carte au 1/250 000, si le secteur où j'évolue est couvert",point:6},{choice:"La carte au 1/1 000 000, car elle couvre tout l'espace aérien",point:-6},{choice:"La carte au 1/500 000 suffit amplement pour voler uniquement jusqu'au FL115",point:-6}]},{id:209,question:"Suis-je soumis aux mêmes règles si mon parapente ou delta est équipé d'un moteur ?",choices:[{choice:"Oui, sous réserve d'avoir une assurance complémentaire",point:-6},{choice:"Oui, sous réserve de n'utiliser le moteur que temporairement",point:-6},{choice:"Non, un delta ou un parapente équipé d'un moteur est soumis aux règles des ULM",point:6}]},{id:210,question:"En traversant une masse d'air turbulent, l'ensemble aile+pilote est soumis à des variations",choices:[{choice:"d'incidence",point:2},{choice:"de vitesse-air",point:2},{choice:"de Force Aérodynamique",point:2},{choice:"de masse",point:-6}]},{id:211,question:"Le phénomène de restitution se rencontre en général",choices:[{choice:"le soir",point:6},{choice:"au centre des vallées toute la journée",point:-6},{choice:"le matin au centre de la vallée",point:-6}]},{id:212,question:"Autour des zones de haute pression, les vents tournent",choices:[{choice:"dans le sens contraire des aiguilles d'une montre dans l'hémisphère nord",point:-6},{choice:"dans le sens des aiguilles d'une montre dans l'hémisphère nord",point:6},{choice:"dans le sens des aiguilles d'une montre dans l'hémisphère sud",point:-6}]},{id:213,question:"Vous gonflez symétriquement dos à l'aile avec un vent de travers droit",choices:[{choice:"votre demi aile droite se lève en premier",point:-3},{choice:"votre demi aile gauche se lève en premier",point:3},{choice:"pour réussir votre gonflage vous vous apprétez à freiner l'arrivée de la demie aile gauche en premier",point:3},{choice:"pour réussir votre gonflage vous vous apprêtez à freiner l'arrivée de la demie aile droite en premier",point:-3}]},{id:214,question:"La traînée totale d'un aéronef se divise en",choices:[{choice:"traînée de frottement",point:2},{choice:"traînée induite",point:2},{choice:"traînée de pression",point:2},{choice:"traînée dynamique",point:-6}]},{id:215,question:"En vol, la dureté de mes commandes",choices:[{choice:"dépend de la vitesse relative de chacune de mes demi ailes",point:2},{choice:"s'accroît avec l'augmentation de la vitesse",point:2},{choice:"faiblie avec l'augmentation de la vitesse",point:-6},{choice:"augmente lorsque je tire sur les freins",point:2}]},{id:216,question:"Vous faites les oreilles",choices:[{choice:"vent de face, votre finesse/sol augmente",point:-6},{choice:"ça n'abîme pas l'aile",point:0},{choice:"c'est un moyen de descente rapide qui peut doubler votre taux de chute",point:6},{choice:"vous augmentez votre finesse/air",point:-6}]},{id:217,question:"Le cône d'autonomie",choices:[{choice:"est une caractéristique de l'aile qui ne dépend pas du vent",point:-6},{choice:"a un axe plus ou moins penché par le vent",point:3},{choice:"correspond à l'ensemble des points les plus éloignés que l'aile peut atteindre en vol plané",point:3}]},{id:218,question:"Quel type de plan de vol sont tenus de déposer les pratiquants de vol libre",choices:[{choice:"Un plan de vol simplifié comprenant uniquement l'itinéraire prévu",point:-6},{choice:"Sauf cas très particulier, les pratiquants de vol libre ne sont pas tenus de déposer un plan de vol",point:6},{choice:"Un plan de vol simplifié comprenant les horaires et lieux de vol prévus",point:-6}]},{id:219,question:"Le variomètre de base mesure",choices:[{choice:"la composante verticale de la vitesse/sol de l'aile",point:6},{choice:"la composante verticale de la vitesse/air de l'aile",point:-6},{choice:"la vitesse du vent s'il est utilisé au sol",point:-6},{choice:"la vitesse ascensionnelle de la masse d'air dans un thermique",point:-6}]},{id:220,question:"Lors d'un décrochage",choices:[{choice:"la portance chute",point:2},{choice:"la traînée augmente fortement",point:4},{choice:"la portance augmente",point:-6},{choice:"la traînée diminue",point:-6}]},{id:221,question:"On appelle inversion de la température la situation suivante",choices:[{choice:"une couche d'air qui bloque le développement des ascendances",point:0},{choice:"une couche d'air froid qui est au dessus d'une couche d'air chaud",point:-6},{choice:"une couche d'air chaud qui est au dessus d'une couche d'air froid",point:6}]},{id:222,question:"La traînée d'une aile est",choices:[{choice:"indépendante de la vitesse-air",point:-6},{choice:"proportionnelle au carré de la vitesse-air",point:6},{choice:"proportionnelle au cube de la vitesse-air",point:-6},{choice:"proportionnelle à la vitesse-air",point:-6}]},{id:223,question:"La vitesse de votre appareil par rapport au sol est",choices:[{choice:"ne change jamais",point:-6},{choice:"plus élevée par vent de face",point:-6},{choice:"plus élevée par vent arrière",point:6}]},{id:224,question:"Lorsque 2 masses d'air de températures différentes se rencontrent",choices:[{choice:"elles se mélangent facilement",point:-6},{choice:"l'air le plus chaud s'élève au dessus de l'air froid",point:6},{choice:"l'air le plus chaud s'infiltre au dessous de l'air froid",point:-6}]},{id:225,question:"Parmi ces nuages, certains annoncent l'arrivée d'un front chaud",choices:[{choice:"altostratus",point:3},{choice:"cirrostratus",point:3},{choice:"cumulus",point:-6},{choice:"cumulonimbus",point:-6}]},{id:226,question:"La déclaration d'accident est nécessaire si",choices:[{choice:"l'aéronef est endommagé",point:-6},{choice:"quand il y a intervention des secours ou hospitalisation",point:3},{choice:"une tierce personne est blessée",point:3}]},{id:227,question:"Un thermique peut",choices:[{choice:"être dévié par le vent",point:2},{choice:"ne donner lieu à aucune matérialisation",point:2},{choice:"être matérialisé par un cumulus bourgeonnant",point:2},{choice:"être matérialisé par un voile de stratus",point:-6}]},{id:228,question:"Les rotors et les lenticulaires semblent fixes par rapport au sol car",choices:[{choice:"leur durée de vie est très brève",point:-6},{choice:"ils se forment à leur partie au vent et se désagrègent à leur partie sous le vent",point:6},{choice:"à leur niveau le vent est nul",point:-6}]},{id:229,question:"Sur une aile en vol rectiligne stabilisé, lorsque le pilote provoque un accroissement de l'incidence, transitoirement",choices:[{choice:"la vitesse sur trajectoire diminue",point:3},{choice:"la vitesse sur trajectoire augmente",point:-6},{choice:"la trajectoire s'incurve vers le bas",point:-6},{choice:"la trajectoire s'incurve vers le haut",point:3}]},{id:230,question:"Pour rendre efficace l'utilisation du parachute de secours je dois",choices:[{choice:"en vol, régulièrement m'exercer à trouver le contact de sa poignée",point:3},{choice:"l'aérer une fois par an au minimum avant de le replier",point:3},{choice:"faire un lavage par an en machine avant de le replier",point:-6}]},{id:231,question:"Un pilote de vol libre peut-il être soumis à un contrôle d'alcoolémie ou de stupéfiants ?",choices:[{choice:"Non, cela ne concerne que la réglementation routière",point:-6},{choice:"Oui, et l'usage de boissons alcoolisées ou de stupéfiants est interdit",point:6},{choice:"Oui, mais la tolérance est identique à la circulation routière",point:-6}]},{id:232,question:"Par une belle journée d'été, la température maximum sera atteinte à (heure solaire, sans tenir compte des 2 heures d'avance sur nos montres)",choices:[{choice:"15h",point:6},{choice:"12h",point:-6},{choice:"14h",point:-2}]},{id:233,question:"Vous êtes le premier à enrouler une ascendance",choices:[{choice:"une aile qui entre dans l'ascendance au même niveau que vous doit spiraler à 180° et dans le même sens",point:3},{choice:"aucune autre aile n'a le droit d'utiliser cette ascendance",point:-6},{choice:"les ailes qui arrivent après vous doivent adopter votre sens de rotation",point:3},{choice:"vous êtes prioritaire sur une aile située en dessous et qui vous rejoint",point:-6}]},{id:234,question:"Vous envisagez d'utiliser une ascendance où se trouve déjà un autre appareil ; vous",choices:[{choice:"faites comme si vous étiez seul",point:-6},{choice:"essayez en jouant sur la vitesse de vous placer de façon diamétralement opposée dans le même sens de rotation",point:6},{choice:"engagez la spirale juste devant lui pour qu'il vous voit bien",point:-6}]},{id:235,question:"Au cas où le vent météo change d'orientation ou d'intensité pendant le vol, il convient",choices:[{choice:"de ralentir au maximum afin de retarder le moment d'un atterrissage qui s'annonce délicat",point:-6},{choice:`de repérer immédiatement des terrains de secours afin de se préparer à l'éventualité d'un atterrissage "aux vaches"`,point:3},{choice:"de mettre le cap immédiatement sur le terrain pour rentrer coûte que coûte",point:-6},{choice:"de changer à temps son plan de vol pour se donner les meilleurs chances de rentrer malgré tout au terrain",point:3}]},{id:236,question:"Sur une aile en vol rectiligne stabilisé, lorsque le pilote provoque une diminution de l'incidence",choices:[{choice:"la vitesse sur trajectoire augmente",point:3},{choice:"la trajectoire s'incurve transitoirement vers le bas",point:3},{choice:"la trajectoire s'incurve transitoirement vers le haut",point:-6},{choice:"la vitesse sur trajectoire diminue",point:-6}]},{id:237,question:"Les zones favorables au déclenchement de la convection sont en général",choices:[{choice:"les zones rocailleuses",point:2},{choice:"les forêts",point:-6},{choice:"les zones urbanisées",point:2},{choice:"les zones sèches",point:2}]},{id:238,question:"Une bonne approche",choices:[{choice:"se prépare suffisamment tôt",point:2},{choice:"tient compte du vent météo et de ses variations possibles",point:2},{choice:"doit être modifiable en cas de nécessité",point:2}]},{id:239,question:"La traînée induite",choices:[{choice:"est la traînée de culot de l'aile",point:-6},{choice:"est due au pilote et aux câbles ou suspentes",point:-6},{choice:"est due aux irrégularités de surface de l'aile",point:-6},{choice:"se manifeste entre autres par des tourbillons marginaux",point:6}]},{id:240,question:"Un moniteur encadre un stage de formation en milieu aménagé (S.I.V., pilotage, acrobatie) dans le cadre d'une école fédérale",choices:[{choice:"sa formation initiale est suffisante",point:-6},{choice:"il doit organiser le stage au dessus de l'eau",point:3},{choice:"il a reçu une formation particulière",point:3}]},{id:241,question:"En région montagneuse, vous recherchez de préférence les ascendances thermiques",choices:[{choice:"sur les rochers ensoleillés",point:6},{choice:"sur les versants à l'abri du soleil et du vent",point:-6},{choice:"dans les fonds de vallée",point:-6}]},{id:242,question:"On appelle anticyclone une zone",choices:[{choice:"de vents faibles",point:0},{choice:"de haute pression",point:6},{choice:"de basse pression",point:-6}]},{id:243,question:"L'emport du parachute de secours",choices:[{choice:"n'exige aucune mesure particulière",point:-6},{choice:"impose une surveillance particulière des velcros et goupilles de fermeture du conteneur",point:3},{choice:"expose le pilote à des risques d'ouverture intempestive",point:3}]},{id:244,question:"Le système de fermeture du container extérieur du parachute",choices:[{choice:"doit se libérer à la première traction de la poignée de parachute (effort compris entre 4 et 9kg)",point:2},{choice:"doit être vérifié avant chaque décollage",point:2},{choice:"est plus fiable si un maillon rapide le verrouille",point:-6},{choice:"est généralement verrouillé par une aiguille souple ou rigide",point:2}]},{id:245,question:"Vous êtes en approche ; une aile est juste en dessous de vous",choices:[{choice:"vous l'observez attentivement car vous lui devez la priorité",point:6},{choice:"vous faites des 360° pour vous poser avant lui",point:-6},{choice:"en approche, il n'y a plus de priorité",point:-6},{choice:"il vous doit la priorité",point:-6}]},{id:246,question:"Une aile de Vol Libre, c'est",choices:[{choice:"un frein aérodynamique",point:-6},{choice:"un parachute",point:-6},{choice:"un planeur ultra-léger",point:3},{choice:"un aéronef non soumis à l'immatriculation",point:3}]},{id:247,question:"Vous êtes 200m sous un gros cumulus, vers son centre, vous observez quelques nuages déchiquetés et un variomètre fortement positif",choices:[{choice:"vous augmentez la vitesse jusqu'à amener le variomètre à 0",point:-6},{choice:"vous pouvez utiliser l'ascendance sur les bords du nuage, en gardant toujours une direction totalement dégagée à toute altitude",point:2},{choice:"vous en profitez pour gagner de l'altitude",point:-6},{choice:"vous dégagez du côté le plus clair pour échapper à l'influence du nuage",point:4}]},{id:248,question:"Les nuages de type stratus",choices:[{choice:"se développent horizontalement",point:3},{choice:"caractérisent des couches plutôt stables",point:3},{choice:"se développent verticalement",point:-6},{choice:"caractérisent des couches plutôt instables",point:-6}]},{id:249,question:"Le brevet de pilote et la qualification biplace sont certifiées par",choices:[{choice:"le président du club où vous êtes affilié",point:-6},{choice:"le responsable régional de la formation (R.R.F.)",point:6},{choice:"le directeur technique de l'école (D.T.E.)",point:-6}]},{id:250,question:"Vous croisez une autre aile ; votre vitesse de croisement est égale à",choices:[{choice:"la somme de vos 2 vitesse/air",point:6},{choice:"la moitié de votre vitesse/air",point:-6},{choice:"votre vitesse/air",point:-6}]},{id:251,question:"Les protections dorsales et latérales de votre sellette",choices:[{choice:"vous autorise à un niveau d'engagement plus fort",point:-6},{choice:"permettent parfois et pour certains modèles d'atténuer les lésions dues au poinçonnement",point:2},{choice:"peuvent améliorer le maintien dorsal",point:2},{choice:"peuvent protéger contre un choc de faible intensité",point:2}]},{id:252,question:"Parmi les nuages ci-dessous, les plus dangereux pour le vol libre sont les",choices:[{choice:"cumulonimbus",point:4},{choice:"strato-cumulus",point:-6},{choice:"nuages de rotors",point:2}]},{id:253,question:"Par vent fort, le vol captif sur point fixe (corde attachée au sol)",choices:[{choice:"peut être utilisé en école",point:-6},{choice:"peut entraîner un verrouillage irrémédiable",point:3},{choice:"n'est jamais dangereux",point:-6},{choice:"est fortement déconseillé",point:3}]},{id:254,question:"En turbulence vous faites les oreilles",choices:[{choice:"vous ne pourrez plus piloter avec vos freins",point:3},{choice:"votre aile sera moins sensible en tangage",point:3},{choice:"c'est fortement déconseillé",point:-6}]},{id:255,question:"Le soleil réchauffe principalement l'atmosphère",choices:[{choice:"indirectement par l'intermédiaire du sol",point:6},{choice:"directement par rayonnement",point:-6},{choice:"directement par convection",point:-6}]},{id:256,question:"En vol vent de travers",choices:[{choice:"le nez de l'aile se met face au vent : c'est l'effet girouette",point:-6},{choice:"l'axe de l'aile fait un angle avec la trajectoire/sol",point:2},{choice:"l'axe de l'aile reste parallèle à la trajectoire/sol",point:-6},{choice:"vous devez adopter un angle de contre-dérive si vous vous dirigez vers un point qui n'est pas dans l'axe du vent",point:4}]},{id:257,question:"Comment savoir si un exercice militaire est en cours ?",choices:[{choice:"En allant vérifier sur le site web du SIA, à la rubrique SUP AIP et NOTAM",point:6},{choice:"En vérifiant l'affichage sur les panneaux d'information du site choisi",point:-6},{choice:"Il suffit d'aller sur les pages espace aérien du site web de la FFVL",point:-6}]},{id:258,question:"Lorsque vous volez vent arrière près du sol, l'impression visuelle tend à modifier votre perception de la vitesse/air, ce qui peut vous conduire à",choices:[{choice:"voler trop lentement en freinant votre aile",point:3},{choice:"voler trop rapidement en accélérant votre aile",point:-6},{choice:"vous rapprocher dangereusement de la vitesses minimum et des risques associés",point:3}]},{id:259,question:"On appelle brise de pente descendante (ou vent catabatique)",choices:[{choice:"un vent froid qui descend la vallée du Rhône",point:-6},{choice:"un vent météo qui descend le long d'une pente",point:-6},{choice:"un air qui s'est refroidi au contact du sol et qui descend par gravité le long d'une pente",point:6}]},{id:260,question:"Vous vous dirigez vers le terrain en vent arrière à vitesse de croisière ; vous voyez les limites les plus rapprochées du terrain monter régulièrement vers vous",choices:[{choice:"vous choisissez immédiatement un atterrissage de secours à meilleure portée",point:6},{choice:"vous ralentissez pour utiliser la finesse/sol importante due au vent arrière",point:-6},{choice:"vous allez arriver au dessus du terrain, faire demi-tour et vous poser vent de face",point:-6},{choice:"vous allez arriver juste au terrain et vous poser vent arrière",point:-6}]},{id:261,question:"Pour un pilote peu expérimenté, un terrain d'atterrissage se découvre",choices:[{choice:"au moment d'atterrir",point:-6},{choice:"en vol, en venant à la verticale pour l'observer",point:-6},{choice:"avant le vol, c'est un minimum",point:6}]},{id:262,question:"Vous affrontez un vent de face de 15 km/h ; pour rentrer au terrain",choices:[{choice:"en prenant des points de repère au sol et en jouant sur votre vitesse, vous essayez de trouver le meilleur angle de plané",point:6},{choice:"vous cherchez à vous maintenir au taux de chute minimum pour avoir plus de temps pour effectuer le trajet",point:-6},{choice:"vous volez aussi rapidement que possible pour avoir une vitesse de pénétration maximum",point:-6}]},{id:263,question:"Pour être précis à l'atterrissage, la visualisation correcte de la pente en finale est indispensable. Cette pente",choices:[{choice:"varie en fonction de l'incidence",point:3},{choice:"ne dépend que des caractéristiques aérodynamiques de l'aile",point:-6},{choice:"varie en fonction de la direction et de la vitesse du vent",point:3}]},{id:264,question:"La partie pratique du brevet de pilote est attribué par",choices:[{choice:"le président de votre club",point:-3},{choice:"le directeur technique d'une école française de vol libre (DTE)",point:6},{choice:"le responsable régional de la formation (R.R.F.)",point:-3}]},{id:265,question:"Le gradient de vent de face à l'atterrissage",choices:[{choice:"augmente le taux de chute",point:2},{choice:"nécessite par sécurité une prise de vitesse préalable",point:2},{choice:"est parfois dangereux car il peut conduire au décrochage en cas de pilotage inadapté",point:2},{choice:"n'a pas d'effet sur la vitesse/air",point:-6}]},{id:266,question:"Par rapport au vent mesuré au décollage à 2m/sol, le vent 20m au dessus risque d'être",choices:[{choice:"de même force",point:-6},{choice:"plus fort",point:6},{choice:"moins fort",point:-6}]},{id:267,question:"Un pilote breveté ayant une pratique loisir irrégulière",choices:[{choice:'peut utiliser une voile classée en "D"',point:-6},{choice:"choisit sa voile selon les conditions aérologiques",point:-6},{choice:"peut utiliser un prototype en air calme",point:-6},{choice:`ne devrait voler qu'avec des voiles classées en "A" ou "B"`,point:6}]},{id:268,question:"La pente d'une aire de décollage doit être",choices:[{choice:"n'a pas à être comparée à la pente de finesse max. de l'aile",point:-6},{choice:"supérieure à la pente de finesse max. de l'aile",point:6},{choice:"inférieure ou égale à la finesse max. de l'aile",point:-6}]},{id:269,question:"A toute altitude dans les espaces aériens classés E et au dessus de 900 m mer ou 300 m sol en montagne dans les espaces aériens non contrôlés, la distance minimale à respecter par rapport aux nuages est de",choices:[{choice:"50 mètres horizontalement et 0 mètre verticalement",point:-6},{choice:"0 mètre",point:-6},{choice:"1500 mètres horizontalement et 300 mètres verticalement",point:6}]},{id:270,question:"Au cours d'un vol de pente en conditions relativement turbulentes",choices:[{choice:"vous vous éloignez un peu du relief et vous augmentez votre vitesse",point:4},{choice:"vous évitez de descendre en dessous des crêtes",point:2},{choice:"vous volez le plus vite possible",point:-6}]},{id:271,question:"En turbulence",choices:[{choice:"vous devez voler le plus lentement possible pour ne pas fatiguer la structure",point:-6},{choice:"les efforts sur la structure augmentent avec la vitesse de vol",point:6},{choice:"vous devez voler bras hauts pour vite sortir de la zone",point:-6}]},{id:272,question:"En vol, un P.U.L. arrive sur votre droite avec une route convergente",choices:[{choice:"vous devez céder la priorité",point:6},{choice:"vous avez la priorité",point:-6},{choice:"la priorité est fonction de la taille respective des aéronefs",point:-6}]},{id:273,question:"C'est mon premier vol de la saison",choices:[{choice:"j'aurais moins de résistance à la fatigue, je n'hésite pas à écourter mon vol pour garder un peu de fraîcheur pour l'atterrissage",point:3},{choice:"j'utilise des conditions faciles pour moi",point:3},{choice:"il n'y a pas de différence, c'est comme le vélo ça ne s'oublie pas",point:-6}]},{id:274,question:"Je m'approche de la base du nuage",choices:[{choice:"j'en profite au maximum, c'est un nuage isolé, ça n'est pas grave si je passe un peu dedans",point:-6},{choice:"je suis très méfiant, il pourrait arriver une masse d'air plus humide qui condense plus bas et me bouche la sortie, j'ai toujours une échappatoire latérale",point:3},{choice:"je suis sur un bord du nuage pour pouvoir m'échapper à tout moment",point:3},{choice:"pas de soucis, j'ai une boussole ou un GPS",point:-6}]},{id:275,question:"Dans un espace aérien non contrôlé et au dessous de 900 m mer ou 300 m sol en montagne, vous devez avoir",choices:[{choice:"une visibilité d'au moins 1500 m et voler hors des nuages",point:6},{choice:"une visibilité d'au moins 8 km et un espacement par rapport aux nuages de 300 m verticalement et 1500 m horizontalement",point:-6},{choice:"une visibilité de 3000 m et maintenir un espacement par rapport aux nuages de 600 m",point:-6}]},{id:276,question:"En conditions turbulentes, il vaut mieux",choices:[{choice:"voler au taux de chute mini",point:-6},{choice:"ne jamais faire d'évolutions serrées",point:3},{choice:"s'éloigner des limites du domaine de vol",point:3}]},{id:277,question:"Pour garder mon parachute en bon état, je dois",choices:[{choice:"le stocker au sec et éviter tout contact avec l'humidité",point:3},{choice:"l'essayer en vol sur mon site préféré au moins deux fois par an",point:-6},{choice:"l'aérer puis le replier une à deux fois par an, et à minima selon les préconisations du constructeur",point:3}]},{id:278,question:"Le gradient de vent de face à l'atterrissage",choices:[{choice:"diminue la vitesse/air",point:3},{choice:"augmente la vitesse/air",point:-6},{choice:"diminue l'incidence",point:-6},{choice:"augmente l'incidence",point:3}]},{id:279,question:"Au décollage, il y a 30 km/h de vent ; mon aile vole à une vitesse maximum de 35 km/h",choices:[{choice:"vous utilisez l'accélérateur dés que possible pour pouvoir vous éloigner du relief",point:-6},{choice:"vous devez courir à 5 km/h pour décoller",point:-6},{choice:"vous vous abstenez de décoller en estimant que la marge de sécurité n'est pas suffisante",point:6}]},{id:280,question:"Vous êtes en finale, face au terrain d'atterrissage ; vous vous apercevez que vous êtes un peu long et haut, vous risquez de dépasser le terrain ; vous choisissez",choices:[{choice:"d'augmenter le trajet à parcourir en déviant votre trajectoire",point:3},{choice:"d'augmenter la traînée parasite en vous relevant",point:3},{choice:"de perdre de l'altitude en parachutant légèrement",point:-6},{choice:"de perdre de l'altitude en accélérant",point:0}]},{id:281,question:"Le passage d'un cumulonimbus dans votre secteur de vol",choices:[{choice:"vous invite à profiter des ascendances larges avant la pluie",point:-6},{choice:"vous impose un atterrissage immédiat",point:3},{choice:"peut rendre de toute façon l'atterrissage problématique",point:3}]},{id:282,question:"Dans un thermique au cours des 360°, le variomètre passe par un maximum puis retombe à des valeurs faiblement positives",choices:[{choice:"vous quittez l'ascendance pour la reprendre d'un autre côté",point:-6},{choice:"vous inversez le sens des 360°",point:-6},{choice:"pour vous recentrer, vous élargissez le virage juste avant le maximum du variomètre et resserrez peu après",point:6}]},{id:283,question:"Pour centrer un thermique",choices:[{choice:"vous diminuez l'inclinaison quand l'ascendance augmente",point:3},{choice:"vous augmentez l'inclinaison quand l'ascendance augmente",point:-3},{choice:"vous pouvez voler très lentement sans risque d'autorotation car l'air ascendant empêchera une abattée éventuelle",point:-6},{choice:"vous augmentez l'inclinaison quand l'ascendance diminue",point:3}]},{id:284,question:"Vous êtes en prise de terrain en S (P.T.S.) ; votre trajectoire s'enfonce sous le plan de descente prévu ; vous devez",choices:[{choice:"accélérer pour ne pas perdre de temps",point:-6},{choice:"raccourcir vos S",point:3},{choice:"s'il le faut vous mettre en ligne droite face au terrain",point:3}]},{id:285,question:"En haute montagne, la densité de l'air diminuant avec l'altitude et pour que votre aile puisse décoller, vous devez vous attendre à courir",choices:[{choice:"moins vite",point:-6},{choice:"plus vite",point:3},{choice:"plus longtemps",point:3},{choice:"moins longtemps",point:-6}]},{id:286,question:"Les parties de l'aile subissant le plus d'efforts en vols sont",choices:[{choice:"la partie avant du profil",point:3},{choice:"la partie arrière du profil",point:-6},{choice:"les suspentes D",point:-6},{choice:"les suspentes A et B",point:3}]},{id:287,question:"Vous risquez de rencontrer de fortes turbulences dangereuses",choices:[{choice:"sous le vent d'un relief par vent fort",point:2},{choice:"dans une ascendance dynamique",point:-6},{choice:"dans les zones de cisaillement",point:2},{choice:"près du relief, lorsque l'activité thermique est maximum",point:2}]},{id:288,question:"Une aile homologuée CEN est obligatoire",choices:[{choice:"pour pratiquer en compétition",point:-6},{choice:"dans le cadre de la pratique loisir",point:-6},{choice:"dans le cadre des écoles labellisées par la fédération",point:6}]},{id:289,question:"Avant de voler sur un site déclaré F.F.V.L. que vous ne connaissez pas, vous devez",choices:[{choice:"lire les panneaux d'informations F.F.V.L. sur ces sites",point:3},{choice:"obtenir l'autorisation du club local",point:-6},{choice:"prendre connaissance de la classification des espaces aériens environnants et de la présence de zones à statut particulier",point:3},{choice:"obtenir l'autorisation de l'école locale",point:-6}]},{id:290,question:"Le vol à l'intérieur des nuages est permis",choices:[{choice:"nulle part",point:6},{choice:"à plus de 900 mètres au dessus du niveau de la mer",point:-6},{choice:"à plus de 300 mètres au dessus de tout relief",point:-6}]},{id:291,question:"A vitesse de taux de chute mini, pour amorcer un virage à droite sans trop perdre de vitesse et ne pas risquer la mise en vrille, vous devez",choices:[{choice:"appliquer mon poids sur les élévateurs de droite",point:3},{choice:"relever le frein gauche",point:3},{choice:"tirer sur le frein droit",point:-6}]},{id:292,question:"Vous voulez rentrer dans une ascendance alors qu'une autre aile spirale 50m en dessous",choices:[{choice:"vous attendez qu'elle passe au dessus de vous pour rentrer car sinon la descendance périphérique risque de vous mettre à la même hauteur",point:0},{choice:"vous enroulez en sens inverse pour pouvoir la surveiller",point:-6},{choice:"vous enroulez dans le même sens qu'elle",point:6}]},{id:293,question:"Lors d'un gonflage par vent fort, la voile commence à vous tirer très fort vers l'arrière, vous risquez d'être traîné au sol",choices:[{choice:"vous lâchez les commandes et vous vous agrippez où vous pouvez pour résister",point:-6},{choice:"vous courez vers l'aile avant d'être déséquilibré et aidez à affaler en tirant sur les freins",point:3},{choice:"vous courez vers l'aile avant d'être déséquilibré et décrochez l'aile à l'aide des élévateurs arrières si vous y arrivez",point:3},{choice:"Vous résistez et simultanément tirez les deux freins à fond pour vous arrêter",point:-6}]},{id:294,question:"Vous évoluez en vol de pente, dans un espace aérien non contrôlé, sur une montagne dont l'altitude est de 1000m. La base des nuages est à 1200m. Le respect des conditions de vol à vue vous permet de monter jusqu'à une altitude de",choices:[{choice:"1200 m",point:6},{choice:"1000 m",point:-6},{choice:"900 m",point:-6}]},{id:295,question:"Loin du relief, vous suivez la même route et au même niveau qu'une autre aile moins rapide ; vous effectuez le dépassement par",choices:[{choice:"la gauche",point:-6},{choice:"la droite",point:6},{choice:"le dessus",point:-6}]},{id:296,question:"L'emport du parachute de secours se justifie par les risques de",choices:[{choice:"abandon du vol par épuisement",point:-6},{choice:"incident de vol irréversible (twist, cravate, etc.)",point:2},{choice:"collision",point:2},{choice:"rupture de l'aile",point:2}]},{id:297,question:"Quelles indications sont portées dans le cartouche d'identification d'un espace ?",choices:[{choice:"Le nom et le type d'espace ainsi que les hauteurs sol du volume correspondant",point:-6},{choice:"Le type, le nom, le plancher et le plafond, ainsi que la fréquence d'appel pour cet espace",point:6},{choice:"Le nom, le type, les horaires, le volume et le numéro de téléphone liés à cet espace",point:-6}]},{id:298,question:"Comment peuvent être exprimées les limites des espaces contrôlés ?",choices:[{choice:"Toujours en altitudes QNH pour prendre en compte les variations de pression",point:-6},{choice:"Selon le cas, en ASFC, AMSL ou FL",point:6},{choice:"En niveaux de vol uniquement à cause du trafic IFR",point:-6}]},{id:299,question:"Dans le cadre fédéral, la présence d'un moniteur est",choices:[{choice:"obligatoire sur la pente école pendant les cours",point:6},{choice:"facultative dans tous les cas",point:-6},{choice:"facultative si les élèves sont accompagnés par un pilote breveté",point:-6}]},{id:300,question:"Vous êtes en vol de pente, le relief est à votre gauche. Une aile arrive en face à la même altitude",choices:[{choice:"elle a priorité",point:6},{choice:"vous avez priorité et maintenez votre cap",point:-6},{choice:"vous tentez de passer en dessous",point:-6}]},{id:301,question:"A l'atterrissage une prise de vitesse est nécessaire en finale car",choices:[{choice:"en présence de vent le risque d'un gradient est propre à soudainement réduire ma vitesse relative",point:3},{choice:"les forces aérodynamiques augmentant au carré de la vitesse, elles favoriseront un freinage efficace",point:3},{choice:"les forces aérodynamiques n'ont pas une incidence directe sur la vitesse de vol",point:-6}]},{id:302,question:"Pour la délivrance d'une licence à un élève, le certificat médical présenté doit être de moins de",choices:[{choice:"1 an",point:-6},{choice:"3 mois",point:6},{choice:"6 mois",point:-6}]},{id:303,question:"Un Club-École Français de Vol Libre (C.E.F.V.L) est",choices:[{choice:"une entreprise privée indépendante de la F.F.V.L.",point:-6},{choice:"une association loi 1901 (sans but lucratif) affiliée à la F.F.V.L.",point:3},{choice:"contrôlé par les adhérents de l'association",point:3}]},{id:304,question:"Le sticker CEN apposé sur un parapente",choices:[{choice:"n'est pas obligatoire sur tous les exemplaires d'un modèle homologué",point:-6},{choice:"donne des indications sur le comportement de ce modèle dans certaines configurations de vol",point:2},{choice:"indique avec quel type de harnais ont été réalisés les essais",point:2},{choice:"permet de se faire une idée sur le niveau de pilotage demandé pour ce modèle",point:2}]},{id:305,question:"Votre demi aile gauche se ferme",choices:[{choice:"de retour au vol droit, si l'aile est toujours fermée, vous pouvez forcer sa réouverture par une action ample et non maintenue du frein gauche",point:2},{choice:"vous chargez la demi aile droite simultanément à la sellette et à la commande",point:2},{choice:"vous freinez à gauche pour forcer la réouverture",point:-6},{choice:'vous freinez du côté opposé pour stabiliser votre trajectoire en évitant le "surcontre"',point:2}]},{id:306,question:"Pour rouvrir les oreilles",choices:[{choice:"je libère les suspentes concernées et regarde le bon déroulement de leur réouverture",point:2},{choice:"si la réouverture ne s'est pas faite d'elle-même, j'applique des actions répétées et rapides de petites amplitudes jusqu'à l'obtention de la réouverture totale",point:-6},{choice:"il est recommandé de procéder demi/aile par demi/aile et de valider à chaque étape la présence du vent relatif",point:2},{choice:"si la réouverture ne s'est pas faite d'elle-même, j'abaisse, côté fermé, amplement et paisiblement ma commande pour la relâcher aussitôt",point:2}]},{id:307,question:"Le choix d'une voile est guidé par",choices:[{choice:"l'avis d'un vendeur spécialisé qui connaît le pilote",point:3},{choice:"le niveau d'accessibilité défini par la presse spécialisée",point:1},{choice:"la catégorie de la voile",point:2},{choice:"le niveau que le pilote veut atteindre",point:-6}]},{id:308,question:"En vol de pente une violente turbulence replie brutalement une demi-aile de votre parapente",choices:[{choice:'vous contrôlez votre départ en rotation tout en gardant une vitesse suffisante pour éviter un "sur contre"',point:6},{choice:"vous regardez la nature du terrain sous vos pieds et vous vous préparez éventuellement à un atterrissage de fortune",point:0},{choice:"vous relevez les bras et prenez un maximum de vitesse pour éviter le décrochage",point:-6},{choice:"vous tirez immédiatement sur le frein correspondant au côté fermé pour en forcer la réouverture",point:-6}]},{id:309,question:"L'emport du parachute de secours",choices:[{choice:"est vivement conseillé quelle que soit la forme de pratique et demande une information pour l'utilisation",point:3},{choice:"nécessite une autorisation d'utilisation",point:-3},{choice:"est obligatoire en compétition FFVL",point:3},{choice:"est obligatoire en sortie club",point:-3}]},{id:310,question:"Suite à une turbulence ou à une entrée de thermique mon aile cabre",choices:[{choice:"je réagis en bridant doucement mon aile",point:-6},{choice:"je me sens “partir” sur le dos",point:2},{choice:"je réagis en relevant brièvement mes mains puis les rabaisse si une abattée s'enchaîne",point:2},{choice:"mon aile est en train de perdre de la vitesse",point:2}]},{id:311,question:"La norme CEN E 926-1 et 2",choices:[{choice:"oblige le constructeur à conserver les caractéristiques techniques sur tous les exemplaires produits",point:3},{choice:"est valable quel que soit le harnais monté sur l'aile",point:-6},{choice:"certifie que tout parapente homologué est utilisable sans risque par n'importe quel pilote (y compris les débutants)",point:-6},{choice:"permet de se faire une idée du comportement de ce modèle",point:3}]},{id:312,question:"En vol, bras hauts, vos freins sont tendus et le bord de fuite est un peu abaissé",choices:[{choice:"c'est mieux pour le gonflage",point:-6},{choice:"ça améliore la finesse sans action sur les commandes",point:-6},{choice:"il faut rallonger et régler les freins pour le prochain vol",point:6},{choice:"cela n'a que peu d'influence sur l'aile",point:-6}]},{id:313,question:"Votre secours est ouvert, vous sentez la traction liée à son déploiement",choices:[{choice:"vous tirez sur un frein pour ramener la voile",point:-6},{choice:"vous regardez vers le bas pour estimer le lieux de l'atterrissage",point:2},{choice:`vous tirez les élévateurs "B" pour stabiliser l'ensemble`,point:2},{choice:"vous vous redressez et vous préparez à amortir le choc",point:2}]},{id:314,question:"En faisant les oreilles, vous",choices:[{choice:"diminuez la finesse/air",point:3},{choice:"augmentez la manœuvrabilité de l'aile",point:-6},{choice:"augmentez le taux de chute",point:3}]},{id:315,question:"Pour faire les oreilles",choices:[{choice:"je vérifie où aboutissent sur mon aile la sélection des suspentes que je dois tirer",point:3},{choice:"je regarde ma voile pour vérifier le bon déroulement de l'opération",point:3},{choice:"je n'oublie pas de préalablement me séparer des freins",point:-6}]},{id:316,question:"Vous êtes en finale face au terrain d'atterrissage ; vous vous apercevez que vous êtes un peu long et haut ; vous risquez de dépasser le terrain",choices:[{choice:"vous lâchez puis retirez les freins plusieurs fois pour secouer l'aile et casser la finesse",point:-6},{choice:"vous augmentez le trajet en faisant un petit S",point:6},{choice:"vous perdez de l'altitude en faisant des 360°",point:-6},{choice:"vous freinez progressivement votre aile jusqu'au point de parachutage",point:-6}]},{id:317,question:"Le gonflage face à la voile",choices:[{choice:"permet de décoller avec un vent supérieur à 30 km/h",point:-6},{choice:"permet de décoller avec des vents modérés à faibles",point:2},{choice:"permet de voir facilement les clefs dans les suspentes",point:2},{choice:"permet de contrôler sa voile facilement pendant qu'elle monte",point:2}]},{id:318,question:"Pour rester dans une ascendance dynamique près du relief",choices:[{choice:"vous volez à la vitesse minimum de l'aile",point:-6},{choice:"vous faites des 360° devant la pente",point:-6},{choice:"vous faites des 8 longs en tournant face au vent",point:6},{choice:"vous faites des 8 longs en tournant face à la pente",point:-6}]},{id:319,question:"Vous êtes dos au relief et votre voile se ferme à 40% sur la gauche ce qui la met en virage à gauche",choices:[{choice:'vous contrez à droite pour vous dégager du relief tout en évitant le "surcontre"',point:6},{choice:"vous freinez à gauche amplement pour regonfler le côté fermé",point:-6},{choice:"vous laissez faire si votre parapente est classé A de la norme CEN",point:-6},{choice:"vous freinez symétriquement des deux côtés",point:0}]},{id:320,question:"Au décollage, le vent est de travers 30°, 3m/s",choices:[{choice:"vous gonflez face à la ligne de pente la plus raide, temporisez, puis prenez de la vitesse en orientant progressivement votre course et votre aile face au vent",point:-6},{choice:"vous gonflez face au vent, temporisez, puis prenez de la vitesse en orientant progressivement votre course et votre aile dans l'axe de la plus grande pente",point:6},{choice:"vous gonflez dans l'axe de la plus grande pente, temporisez, puis accélérez en vous attendant à devoir freiner amplement juste avant de décoller",point:-6}]}]}),actions:{addReminder(t,e){e.id=t,this.qcms.find(n=>n.id===e.qcmId).reminder=e}},getters:{}});function mS(t){return t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear()}function ry(t){const e=t.split("/");return new Date(e[2],e[1]-1,e[0])}function Ep(){return new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()}const gS={name:"StatistiquesFFVL",computed:{nbAnswered(){return Mn().qcms.filter(t=>t.reminder!==void 0).length},nbTotal(){return Mn().qcms.length},globalRepartition(){const t={};return Mn().qcms.filter(e=>e.reminder).forEach(e=>{const n=e.reminder.remindDelay;t[n]===void 0?t[n]=1:t[n]++}),t},nextDaysRepartition(){const t={};return Mn().qcms.filter(e=>e.reminder).forEach(e=>{const n=ry(e.reminder.answeredDate);n.setDate(n.getDate()+e.reminder.remindDelay);const i=mS(n);t[i]===void 0?t[i]=1:t[i]++}),t}}},_S={lass:"globalStats"},vS={class:"globalStatsTable"},yS=j("thead",null,[j("th",null,"Delay"),j("th",null,"Nb")],-1),ES={class:"nextDays"},TS={class:"nextDaysStatsTable"},IS=j("thead",null,[j("th",null,"Date"),j("th",null,"Nb")],-1);function wS(t,e,n,i,s,r){return Te(),Re(ft,null,[j("div",_S,[Tr(et(r.nbAnswered)+" / "+et(r.nbTotal)+" questions répondues. ",1),j("div",vS,[j("table",null,[yS,j("tbody",null,[(Te(!0),Re(ft,null,Jo(r.globalRepartition,(o,a)=>(Te(),Re("tr",null,[j("td",null,et(a),1),j("td",null,et(r.globalRepartition[a]),1)]))),256))])])])]),j("div",ES,[j("div",TS,[j("table",null,[IS,j("tbody",null,[(Te(!0),Re(ft,null,Jo(r.nextDaysRepartition,(o,a)=>(Te(),Re("tr",null,[j("td",null,et(a),1),j("td",null,et(r.nextDaysRepartition[a]),1)]))),256))])])])])],64)}const bS=Jh(gS,[["render",wS]]);const AS={name:"QuestionParty",components:{StatistiquesFFVL:bS,QuestionFFVL:pS},data(){return{qcm:{question:"",choices:[{choice:"",point:0}]},playing:!1,hasAlreadyPlayed:!1,nbQuestions:5,dryrun:!1,refreshLogo:!0,calendarLogoPath:"calendar_crossed.png",showStatistiques:!1}},computed:{nbNonValidated(){return Nt().qcms.filter(t=>!t.validated).length},nbErrors(){return Nt().nbErrors},hasReminder(){return this.getRemindQCMs().length},qcmsCount(){const t={};return this.getRemindQCMs().filter(e=>e.reminder).forEach(e=>{const n=e.reminder.remindDelay;t[n]===void 0?t[n]=1:t[n]++}),t}},created(){this.$emit("loadReminder")},methods:{getNextQuestion(){if(this.playing&&Nt().qcms.filter(t=>!t.validated).length==0)this.playing=!1,Nt().setNbErrors(0),this.$emit("loadReminder");else{let t=Nt().qcms.filter(n=>!n.validated),e=Math.floor(Math.random()*t.length);this.qcm=t[e],this.calendarLogoPath=this.dryrun||this.qcm.answered?"calendar_crossed.png":"calendar.png"}},shuffleArray(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t},start(){this.dryrun=!1;let t=Mn().qcms.filter(n=>n.reminder===void 0),e=this.shuffleArray(t).slice(0,this.nbQuestions);this.play(e)},replay(){this.dryrun=!0,this.play(Nt().qcms)},replayTodaysQuestions(){this.dryrun=!0;let t=Mn().qcms.filter(e=>e.reminder&&e.reminder.answeredDate==Ep());this.play(t)},play(t){t.forEach(function(e){e.answered=!1,e.validated=!1}),Nt().setQCMs(t),this.hasAlreadyPlayed=!0,this.playing=!0,this.getNextQuestion()},playRemind(){this.play(this.getRemindQCMs())},getRemindQCMs(){let t=Mn().qcms.filter(e=>e.reminder&&e.reminder.answeredDate!=Ep());return t=t.filter(e=>{let n=ry(e.reminder.answeredDate);return n.setDate(n.getDate()+e.reminder.remindDelay),n<=new Date}),t}}},dn=t=>(LT("data-v-ab3e2123"),t=t(),MT(),t),CS={class:"mainContainer"},RS={key:0,class:"menu"},SS={class:"reminderGlobal"},PS={key:0,class:"reminder"},NS={class:"remindTable"},kS=dn(()=>j("thead",null,[j("th",null,"Delay"),j("th",null,"Nb")],-1)),xS={key:1},DS=dn(()=>j("span",null,"Pas de reminder",-1)),OS=[DS],LS={class:"newSession"},MS=dn(()=>j("span",{class:"subtitile"},"Nouvelle session",-1)),VS=dn(()=>j("span",null,"Nb Question : ",-1)),qS=dn(()=>j("option",null,"2",-1)),FS=dn(()=>j("option",null,"5",-1)),US=dn(()=>j("option",null,"10",-1)),zS=dn(()=>j("option",null,"20",-1)),jS=[qS,FS,US,zS],BS={key:1},$S=dn(()=>j("span",null,"Reste : ",-1)),WS=dn(()=>j("span",null,"Erreurs : ",-1)),HS=["src"],KS={key:2};function GS(t,e,n,i,s,r){const o=jd("QuestionFFVL"),a=jd("StatistiquesFFVL");return Te(),Re("div",CS,[s.playing?Gt("",!0):(Te(),Re("div",RS,[j("div",SS,[r.hasReminder?(Te(),Re("div",PS,[j("div",NS,[j("table",null,[kS,j("tbody",null,[(Te(!0),Re(ft,null,Jo(r.qcmsCount,(c,l)=>(Te(),Re("tr",null,[j("td",null,et(l),1),j("td",null,et(r.qcmsCount[l]),1)]))),256))])])]),j("button",{class:"remindButton",onClick:e[0]||(e[0]=(...c)=>r.playRemind&&r.playRemind(...c))},"Remind")])):(Te(),Re("div",xS,OS))]),j("div",null,[j("button",{onClick:e[1]||(e[1]=(...c)=>r.replayTodaysQuestions&&r.replayTodaysQuestions(...c))},"Replay today")]),j("div",LS,[MS,VS,tg(j("select",{"onUpdate:modelValue":e[2]||(e[2]=c=>s.nbQuestions=c)},jS,512),[[aw,s.nbQuestions]]),j("button",{onClick:e[3]||(e[3]=(...c)=>r.start&&r.start(...c))},"Start"),s.hasAlreadyPlayed?(Te(),Re("button",{key:0,onClick:e[4]||(e[4]=(...c)=>r.replay&&r.replay(...c))},"Replay")):Gt("",!0)]),j("button",{onClick:e[5]||(e[5]=c=>s.showStatistiques=!0)},"Stats")])),s.playing?(Te(),Re("div",BS,[$S,Tr(et(r.nbNonValidated)+" ",1),WS,Tr(et(r.nbErrors)+" ",1),j("img",{src:s.calendarLogoPath,class:"calendarLogo"},null,8,HS),Rt(o,{qcm:s.qcm,dryrun:s.dryrun,onGetNextQuestion:r.getNextQuestion},null,8,["qcm","dryrun","onGetNextQuestion"])])):Gt("",!0),s.showStatistiques?(Te(),Re("div",KS,[Rt(a)])):Gt("",!0)])}const QS=Jh(AS,[["render",GS],["__scopeId","data-v-ab3e2123"]]);const YS={class:"mainframe"},XS={__name:"App",setup(t){async function e(){(await iy(FR(Su,"QcmReminder"+ou))).forEach(i=>{Mn().addReminder(i.id,i.data())})}return(n,i)=>(Te(),Re("div",YS,[Rt(QS,{onLoadReminder:e})]))}};function oy(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function ay(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JS=ay,cy=new As("auth","Firebase",ay());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=new Hr("@firebase/auth");function ZS(t,...e){Ta.logLevel<=Z.WARN&&Ta.warn(`Auth (${Cs}): ${t}`,...e)}function Ko(t,...e){Ta.logLevel<=Z.ERROR&&Ta.error(`Auth (${Cs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(t,...e){throw Zh(t,...e)}function ly(t,...e){return Zh(t,...e)}function eP(t,e,n){const i=Object.assign(Object.assign({},JS()),{[e]:n});return new As("auth","Firebase",i).create(e,{appName:t.name})}function Zh(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return cy.create(t,...e)}function ue(t,e,...n){if(!t)throw Zh(e,...n)}function ur(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ko(e),new Error(e)}function Ia(t,e){t||ur(e)}function tP(){return Ip()==="http:"||Ip()==="https:"}function Ip(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tP()||kw()||"connection"in navigator)?navigator.onLine:!0}function iP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ia(n>e,"Short delay should be less than long delay!"),this.isMobile=Xu()||Ng()}get(){return nP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sP(t,e){Ia(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ur("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ur("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ur("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP=new lo(3e4,6e4);function hy(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sc(t,e,n,i,s={}){return dy(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Ju(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),uy.fetch()(fy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function dy(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},rP),e);try{const s=new aP(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Do(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Do(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Do(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Do(t,"user-disabled",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw eP(t,u,l);Tp(t,u)}}catch(s){if(s instanceof Sn)throw s;Tp(t,"network-request-failed",{message:String(s)})}}function fy(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?sP(t.config,s):`${t.config.apiScheme}://${s}`}class aP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(ly(this.auth,"network-request-failed")),oP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Do(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=ly(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cP(t,e){return Sc(t,"POST","/v1/accounts:delete",e)}async function lP(t,e){return Sc(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uP(t,e=!1){const n=Ut(t),i=await n.getIdToken(e),s=py(i);ue(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:hr(rl(s.auth_time)),issuedAtTime:hr(rl(s.iat)),expirationTime:hr(rl(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function rl(t){return Number(t)*1e3}function py(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Ko("JWT malformed, contained fewer than 3 sections"),null;try{const s=na(n);return s?JSON.parse(s):(Ko("Failed to decode base64 JWT payload"),null)}catch(s){return Ko("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function hP(t){const e=py(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function au(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Sn&&dP(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function dP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hr(this.lastLoginAt),this.creationTime=hr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wa(t){var e;const n=t.auth,i=await t.getIdToken(),s=await au(t,lP(n,{idToken:i}));ue(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?gP(r.providerUserInfo):[],a=mP(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new my(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function pP(t){const e=Ut(t);await wa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mP(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function gP(t){return t.map(e=>{var{providerId:n}=e,i=oy(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _P(t,e){const n=await dy(t,{},async()=>{const i=Ju({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=fy(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",uy.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vP(t,e){return Sc(t,"POST","/v2/accounts:revokeToken",hy(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ue(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await _P(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new zr;return i&&(ue(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(ue(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(ue(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zr,this.toJSON())}_performRefresh(){return ur("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class es{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=oy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new my(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await au(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uP(this,e)}reload(){return pP(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new es(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await wa(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await au(this,cP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,c,l,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,x=(l=n.createdAt)!==null&&l!==void 0?l:void 0,M=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:A,isAnonymous:K,providerData:le,stsTokenManager:me}=n;ue(k&&me,e,"internal-error");const B=zr.fromJSON(this.name,me);ue(typeof k=="string",e,"internal-error"),xn(h,e.name),xn(d,e.name),ue(typeof A=="boolean",e,"internal-error"),ue(typeof K=="boolean",e,"internal-error"),xn(p,e.name),xn(g,e.name),xn(_,e.name),xn(y,e.name),xn(x,e.name),xn(M,e.name);const X=new es({uid:k,auth:e,email:d,emailVerified:A,displayName:h,isAnonymous:K,photoURL:g,phoneNumber:p,tenantId:_,stsTokenManager:B,createdAt:x,lastLoginAt:M});return le&&Array.isArray(le)&&(X.providerData=le.map(ye=>Object.assign({},ye))),y&&(X._redirectEventId=y),X}static async _fromIdTokenResponse(e,n,i=!1){const s=new zr;s.updateFromServerResponse(n);const r=new es({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await wa(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=new Map;function ui(t){Ia(t instanceof Function,"Expected a class definition");let e=wp.get(t);return e?(Ia(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}gy.type="NONE";const bp=gy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(t,e,n){return`firebase:${t}:${e}:${n}`}class ts{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=ol(this.userKey,s.apiKey,r),this.fullPersistenceKey=ol("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?es._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new ts(ui(bp),e,i);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||ui(bp);const o=ol(i,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=es._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new ts(r,e,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new ts(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(IP(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yP(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bP(e))return"Blackberry";if(AP(e))return"Webos";if(EP(e))return"Safari";if((e.includes("chrome/")||TP(e))&&!e.includes("edge/"))return"Chrome";if(wP(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function yP(t=an()){return/firefox\//i.test(t)}function EP(t=an()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function TP(t=an()){return/crios\//i.test(t)}function IP(t=an()){return/iemobile/i.test(t)}function wP(t=an()){return/android/i.test(t)}function bP(t=an()){return/blackberry/i.test(t)}function AP(t=an()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(t,e=[]){let n;switch(t){case"Browser":n=Ap(an());break;case"Worker":n=`${Ap(an())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cs}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RP(t,e={}){return Sc(t,"GET","/v2/passwordPolicy",hy(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP=6;class PP{constructor(e){var n,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:SP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cp(this),this.idTokenSubscription=new Cp(this),this.beforeStateQueue=new CP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ui(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await ts.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ut(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ui(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await RP(this),n=new PP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new As("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await vP(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ui(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await ts.create(this,[ui(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,i,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_y(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ZS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function kP(t){return Ut(t)}class Cp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fw(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function xP(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ui);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}new lo(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new lo(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new lo(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new lo(5e3,15e3);var Rp="@firebase/auth",Sp="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function LP(t){cn(new zt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_y(t)},l=new NP(i,s,r,c);return xP(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),cn(new zt("auth-internal",e=>{const n=kP(e.getProvider("auth").getImmediate());return(i=>new DP(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tt(Rp,Sp,OP(t)),Tt(Rp,Sp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=5*60;Pw("authIdTokenMaxAge");LP("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP=new Map,qP={activated:!1,tokenObservers:[]};function Bt(t){return VP.get(t)||Object.assign({},qP)}const Pp={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new br,await UP(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new br,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function UP(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},ba=new As("appCheck","AppCheck",zP);function vy(t){if(!Bt(t).activated)throw ba.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP="firebase-app-check-database",BP=1,cu="firebase-app-check-store";let Oo=null;function $P(){return Oo||(Oo=new Promise((t,e)=>{try{const n=indexedDB.open(jP,BP);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(ba.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(cu,{keyPath:"compositeKey"})}}}catch(n){e(ba.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Oo)}function WP(t,e){return HP(KP(t),e)}async function HP(t,e){const i=(await $P()).transaction(cu,"readwrite"),r=i.objectStore(cu).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=c=>{o()},i.onerror=c=>{var l;a(ba.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function KP(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=new Hr("@firebase/app-check");function Np(t,e){return xg()?WP(t,e).catch(n=>{lu.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP={error:"UNKNOWN_ERROR"};function QP(t){return Xa.encodeString(JSON.stringify(t),!1)}async function uu(t,e=!1){const n=t.app;vy(n);const i=Bt(n);let s=i.token,r;if(s&&!er(s)&&(i.token=void 0,s=void 0),!s){const c=await i.cachedTokenPromise;c&&(er(c)?s=c:await Np(n,void 0))}if(!e&&s&&er(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await Bt(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?lu.warn(c.message):lu.error(c),r=c}let a;return s?r?er(s)?a={token:s.token,internalError:r}:a=xp(r):(a={token:s.token},i.token=s,await Np(n,s)):a=xp(r),o&&ZP(n,a),a}async function YP(t){const e=t.app;vy(e);const{provider:n}=Bt(e);{const{token:i}=await n.getToken();return{token:i}}}function XP(t,e,n,i){const{app:s}=t,r=Bt(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&er(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),kp(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>kp(t))}function yy(t,e){const n=Bt(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function kp(t){const{app:e}=t,n=Bt(e);let i=n.tokenRefresher;i||(i=JP(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function JP(t){const{app:e}=t;return new FP(async()=>{const n=Bt(e);let i;if(n.token?i=await uu(t,!0):i=await uu(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=Bt(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},Pp.RETRIAL_MIN_WAIT,Pp.RETRIAL_MAX_WAIT)}function ZP(t,e){const n=Bt(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function er(t){return t.expireTimeMillis-Date.now()>0}function xp(t){return{token:QP(GP),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Bt(this.app);for(const n of e)yy(this.app,n.next);return Promise.resolve()}}function t1(t,e){return new e1(t,e)}function n1(t){return{getToken:e=>uu(t,e),getLimitedUseToken:()=>YP(t),addTokenListener:e=>XP(t,"INTERNAL",e),removeTokenListener:e=>yy(t.app,e)}}const i1="@firebase/app-check",s1="0.8.0",r1="app-check",Dp="app-check-internal";function o1(){cn(new zt(r1,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return t1(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Dp).initialize()})),cn(new zt(Dp,t=>{const e=t.getProvider("app-check").getImmediate();return n1(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Tt(i1,s1)}o1();const Ey=Symbol("firebaseApp");function ed(t){return Ku()&&pi(Ey,null)||Vg(t)}const en=()=>{};function td(t,e){return e.split(".").reduce((n,i)=>n&&n[i],t)}function a1(t,e,n){const i=(""+e).split("."),s=i.pop(),r=i.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(s),1,n):r[s]=n}function ki(t){return!!t&&typeof t=="object"}const c1=Object.prototype;function l1(t){return ki(t)&&Object.getPrototypeOf(t)===c1}function nd(t){return ki(t)&&t.type==="document"}function u1(t){return ki(t)&&t.type==="collection"}function h1(t){return nd(t)||u1(t)}function d1(t){return ki(t)&&t.type==="query"}function f1(t){return ki(t)&&"ref"in t}function p1(t){return ki(t)&&typeof t.bucket=="string"}function m1(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const g1=Symbol.for("v-scx");function _1(){return Ku(),!!pi(g1,0)}const Lo=new WeakMap;function v1(t,e){if(!Lo.has(t)){const n=Fa(!0);Lo.set(t,n);const{unmount:i}=e;e.unmount=()=>{i.call(e),n.stop(),Lo.delete(t)}}return Lo.get(t)}const Op="@firebase/database",Lp="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ty="";function y1(t){Ty=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ge(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ar(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Pn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new E1(e)}}catch{}return new T1},hi=Iy("localStorage"),hu=Iy("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new Hr("@firebase/database"),I1=function(){let t=1;return function(){return t++}}(),wy=function(t){const e=Bw(t),n=new qw;n.update(e);const i=n.digest();return Xa.encodeByteArray(i)},uo=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=uo.apply(null,i):typeof i=="object"?e+=Ge(i):e+=i,e+=" "}return e};let _i=null,Mp=!0;const w1=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ns.logLevel=Z.VERBOSE,_i=ns.log.bind(ns),e&&hu.set("logging_enabled",!0)):typeof t=="function"?_i=t:(_i=null,hu.remove("logging_enabled"))},nt=function(...t){if(Mp===!0&&(Mp=!1,_i===null&&hu.get("logging_enabled")===!0&&w1(!0)),_i){const e=uo.apply(null,t);_i(e)}},ho=function(t){return function(...e){nt(t,...e)}},du=function(...t){const e="FIREBASE INTERNAL ERROR: "+uo(...t);ns.error(e)},bi=function(...t){const e=`FIREBASE FATAL ERROR: ${uo(...t)}`;throw ns.error(e),new Error(e)},It=function(...t){const e="FIREBASE WARNING: "+uo(...t);ns.warn(e)},b1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&It("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},by=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},A1=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},vs="[MIN_NAME]",Ai="[MAX_NAME]",Ds=function(t,e){if(t===e)return 0;if(t===vs||e===Ai)return-1;if(e===vs||t===Ai)return 1;{const n=Vp(t),i=Vp(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},C1=function(t,e){return t===e?0:t<e?-1:1},js=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ge(e))},id=function(t){if(typeof t!="object"||t===null)return Ge(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Ge(e[i]),n+=":",n+=id(t[e[i]]);return n+="}",n},Ay=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function St(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Cy=function(t){P(!by(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,c;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(s?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},R1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},S1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},P1=new RegExp("^-?(0*)\\d{1,10}$"),N1=-2147483648,k1=2147483647,Vp=function(t){if(P1.test(t)){const e=Number(t);if(e>=N1&&e<=k1)return e}return null},fo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw It("Exception was thrown by user callback.",n),e},Math.floor(0))}},x1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},dr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){It(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(nt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',It(e)}}class fu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}fu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="5",Ry="v",Sy="s",Py="r",Ny="f",ky=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,xy="ls",Dy="p",pu="ac",Oy="websocket",Ly="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,n,i,s,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=hi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&hi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function M1(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function My(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let i;if(e===Oy)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ly)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);M1(t)&&(n.ns=t.namespace);const s=[];return St(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(){this.counters_={}}incrementCounter(e,n=1){Pn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Tw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al={},cl={};function rd(t){const e=t.toString();return al[e]||(al[e]=new V1),al[e]}function q1(t,e){const n=t.toString();return cl[n]||(cl[n]=e()),cl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&fo(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp="start",U1="close",z1="pLPCommand",j1="pRTLPCB",Vy="id",qy="pw",Fy="ser",B1="cb",$1="seg",W1="ts",H1="d",K1="dframe",Uy=1870,zy=30,G1=Uy-zy,Q1=25e3,Y1=3e4;class Wi{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ho(e),this.stats_=rd(n),this.urlFn=c=>(this.appCheckToken&&(c[pu]=this.appCheckToken),My(n,Ly,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new F1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Y1)),A1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new od((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===qp)this.id=a,this.password=c;else if(o===U1)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[qp]="t",i[Fy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[B1]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Ry]=sd,this.transportSessionId&&(i[Sy]=this.transportSessionId),this.lastSessionId&&(i[xy]=this.lastSessionId),this.applicationId&&(i[Dy]=this.applicationId),this.appCheckToken&&(i[pu]=this.appCheckToken),typeof location<"u"&&location.hostname&&ky.test(location.hostname)&&(i[Py]=Ny);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Wi.forceAllow_=!0}static forceDisallow(){Wi.forceDisallow_=!0}static isAvailable(){return Wi.forceAllow_?!0:!Wi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!R1()&&!S1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Rg(n),s=Ay(i,G1);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[K1]="t",i[Vy]=e,i[qy]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ge(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class od{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=I1(),window[z1+this.uniqueCallbackIdentifier]=e,window[j1+this.uniqueCallbackIdentifier]=n,this.myIFrame=od.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){nt("frame writing exception"),a.stack&&nt(a.stack),nt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||nt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Vy]=this.myID,e[qy]=this.myPW,e[Fy]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+zy+i.length<=Uy;){const o=this.pendingSegs.shift();i=i+"&"+$1+s+"="+o.seg+"&"+W1+s+"="+o.ts+"&"+H1+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(Q1)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{nt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=16384,J1=45e3;let Aa=null;typeof MozWebSocket<"u"?Aa=MozWebSocket:typeof WebSocket<"u"&&(Aa=WebSocket);class xt{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ho(this.connId),this.stats_=rd(n),this.connURL=xt.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[Ry]=sd,typeof location<"u"&&location.hostname&&ky.test(location.hostname)&&(o[Py]=Ny),n&&(o[Sy]=n),i&&(o[xy]=i),s&&(o[pu]=s),r&&(o[Dy]=r),My(e,Oy,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,hi.set("previous_websocket_failure",!0);try{let i;kg(),this.mySock=new Aa(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){xt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Aa!==null&&!xt.forceDisallow_}static previouslyFailed(){return hi.isInMemoryStorage||hi.get("previous_websocket_failure")===!0}markConnectionHealthy(){hi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Ar(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Ay(n,X1);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(J1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}xt.responsesRequiredToBeHealthy=2;xt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Wi,xt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=xt&&xt.isAvailable();let i=n&&!xt.previouslyFailed();if(e.webSocketOnly&&(n||It("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[xt];else{const s=this.transports_=[];for(const r of jr.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);jr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}jr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=6e4,eN=5e3,tN=10*1024,nN=100*1024,ll="t",Fp="d",iN="s",Up="r",sN="e",zp="o",jp="a",Bp="n",$p="p",rN="h";class oN{constructor(e,n,i,s,r,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ho("c:"+this.id+":"),this.transportManager_=new jr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=dr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>nN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>tN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ll in e){const n=e[ll];n===jp?this.upgradeIfSecondaryHealthy_():n===Up?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===zp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=js("t",e),i=js("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:$p,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:jp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Bp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=js("t",e),i=js("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=js(ll,e);if(Fp in e){const i=e[Fp];if(n===rN){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Bp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===iN?this.onConnectionShutdown_(i):n===Up?this.onReset_(i):n===sN?du("Server Error: "+i):n===zp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):du("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),sd!==i&&It("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),dr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Z1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):dr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(eN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:$p,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(hi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca extends By{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Xu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ca}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=32,Hp=768;class Ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function pe(){return new Ce("")}function ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Qn(t){return t.pieces_.length-t.pieceNum_}function we(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ce(t.pieces_,e)}function $y(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function aN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Wy(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Hy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ce(e,0)}function Be(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof Ce)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new Ce(n,0)}function te(t){return t.pieceNum_>=t.pieces_.length}function Ct(t,e){const n=ie(t),i=ie(e);if(n===null)return e;if(n===i)return Ct(we(t),we(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ky(t,e){if(Qn(t)!==Qn(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Lt(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Qn(t)>Qn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class cN{constructor(e,n){this.errorPrefix_=n,this.parts_=Wy(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ja(this.parts_[i]);Gy(this)}}function lN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ja(e),Gy(t)}function uN(t){const e=t.parts_.pop();t.byteLength_-=Ja(e),t.parts_.length>0&&(t.byteLength_-=1)}function Gy(t){if(t.byteLength_>Hp)throw new Error(t.errorPrefix_+"has a key path longer than "+Hp+" bytes ("+t.byteLength_+").");if(t.parts_.length>Wp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Wp+") or object contains a cycle "+ii(t))}function ii(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad extends By{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new ad}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=1e3,hN=60*5*1e3,Kp=30*1e3,dN=1.3,fN=3e4,pN="server_kill",Gp=3;class wn extends jy{constructor(e,n,i,s,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=wn.nextPersistentConnectionId_++,this.log_=ho("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Bs,this.maxReconnectDelay_=hN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!kg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ad.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ca.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(Ge(r)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new br,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;wn.warnOnListenWarnings_(c,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Pn(e,"w")){const i=cs(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();It(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Vw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Kp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Mw(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ge(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):du("Unrecognized action received from server: "+Ge(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Bs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Bs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>fN&&(this.reconnectDelay_=Bs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*dN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+wn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(h){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?nt("getToken() completed but was canceled"):(nt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new oN(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,p=>{It(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(pN)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&It(h),c())}}}interrupt(e){nt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){nt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],pf(this.interruptReasons_)&&(this.reconnectDelay_=Bs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>id(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new Ce(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){nt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Gp&&(this.reconnectDelay_=Kp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){nt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Gp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ty.replace(/\./g,"-")]=1,Xu()?e["framework.cordova"]=1:Ng()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ca.getInstance().currentlyOnline();return pf(this.interruptReasons_)&&e}}wn.nextPersistentConnectionId_=0;wn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new se(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new se(vs,e),s=new se(vs,n);return this.compare(i,s)!==0}minPost(){return se.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mo;class Qy extends Pc{static get __EMPTY_NODE(){return Mo}static set __EMPTY_NODE(e){Mo=e}compare(e,n){return Ds(e.name,n.name)}isDefinedOn(e){throw bs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return se.MIN}maxPost(){return new se(Ai,Mo)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new se(e,Mo)}toString(){return".key"}}const is=new Qy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class je{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??je.RED,this.left=s??mt.EMPTY_NODE,this.right=r??mt.EMPTY_NODE}copy(e,n,i,s,r){return new je(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return mt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return mt.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}je.RED=!0;je.BLACK=!1;class mN{copy(e,n,i,s,r){return this}insert(e,n,i){return new je(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class mt{constructor(e,n=mt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new mt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,je.BLACK,null,null))}remove(e){return new mt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,je.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Vo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Vo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Vo(this.root_,null,this.comparator_,!0,e)}}mt.EMPTY_NODE=new mN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(t,e){return Ds(t.name,e.name)}function cd(t,e){return Ds(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mu;function _N(t){mu=t}const Yy=function(t){return typeof t=="number"?"number:"+Cy(t):"string:"+t},Xy=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Pn(e,".sv"),"Priority must be a string or number.")}else P(t===mu||t.isEmpty(),"priority of unexpected type.");P(t===mu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qp;class Ue{constructor(e,n=Ue.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Xy(this.priorityNode_)}static set __childrenNodeConstructor(e){Qp=e}static get __childrenNodeConstructor(){return Qp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ue(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ue.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return te(e)?this:ie(e)===".priority"?this.priorityNode_:Ue.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ue.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=ie(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(P(i!==".priority"||Qn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ue.__childrenNodeConstructor.EMPTY_NODE.updateChild(we(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Yy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Cy(this.value_):e+=this.value_,this.lazyHash_=wy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ue.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ue.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=Ue.VALUE_TYPE_ORDER.indexOf(n),r=Ue.VALUE_TYPE_ORDER.indexOf(i);return P(s>=0,"Unknown leaf type: "+n),P(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ue.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jy,Zy;function vN(t){Jy=t}function yN(t){Zy=t}class EN extends Pc{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Ds(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return se.MIN}maxPost(){return new se(Ai,new Ue("[PRIORITY-POST]",Zy))}makePost(e,n){const i=Jy(e);return new se(n,new Ue("[PRIORITY-POST]",i))}toString(){return".priority"}}const rt=new EN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=Math.log(2);class IN{constructor(e){const n=r=>parseInt(Math.log(r)/TN,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ra=function(t,e,n,i){t.sort(e);const s=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=t[c],d=n?n(h):h,new je(d,h.node,je.BLACK,null,null);{const p=parseInt(u/2,10)+c,g=s(c,p),_=s(p+1,l);return h=t[p],d=n?n(h):h,new je(d,h.node,je.BLACK,g,_)}},r=function(c){let l=null,u=null,h=t.length;const d=function(g,_){const y=h-g,x=h;h-=g;const M=s(y+1,x),k=t[y],A=n?n(k):k;p(new je(A,k.node,_,null,M))},p=function(g){l?(l.left=g,l=g):(u=g,l=g)};for(let g=0;g<c.count;++g){const _=c.nextBitIsOne(),y=Math.pow(2,c.count-(g+1));_?d(y,je.BLACK):(d(y,je.BLACK),d(y,je.RED))}return u},o=new IN(t.length),a=r(o);return new mt(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ul;const Ui={};class yn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(Ui&&rt,"ChildrenNode.ts has not been loaded"),ul=ul||new yn({".priority":Ui},{".priority":rt}),ul}get(e){const n=cs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof mt?n:null}hasIndex(e){return Pn(this.indexSet_,e.toString())}addIndex(e,n){P(e!==is,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(se.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Ra(i,e.getCompare()):a=Ui;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new yn(u,l)}addToIndexes(e,n){const i=ia(this.indexes_,(s,r)=>{const o=cs(this.indexSet_,r);if(P(o,"Missing index implementation for "+r),s===Ui)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(se.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Ra(a,o.getCompare())}else return Ui;else{const a=n.get(e.name);let c=s;return a&&(c=c.remove(new se(e.name,a))),c.insert(e,e.node)}});return new yn(i,this.indexSet_)}removeFromIndexes(e,n){const i=ia(this.indexes_,s=>{if(s===Ui)return s;{const r=n.get(e.name);return r?s.remove(new se(e.name,r)):s}});return new yn(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $s;class ce{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Xy(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $s||($s=new ce(new mt(cd),null,yn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$s}updatePriority(e){return this.children_.isEmpty()?this:new ce(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?$s:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(we(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new se(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?$s:this.priorityNode_;return new ce(s,o,r)}}updateChild(e,n){const i=ie(e);if(i===null)return n;{P(ie(e)!==".priority"||Qn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(we(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(rt,(o,a)=>{n[o]=a.val(e),i++,r&&ce.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Yy(this.getPriority().val())+":"),this.forEachChild(rt,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":wy(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new se(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new se(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new se(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,se.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,se.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===po?-1:0}withIndex(e){if(e===is||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ce(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===is||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(rt),s=n.getIterator(rt);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===is?null:this.indexMap_.get(e.toString())}}ce.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class wN extends ce{constructor(){super(new mt(cd),ce.EMPTY_NODE,yn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ce.EMPTY_NODE}isEmpty(){return!1}}const po=new wN;Object.defineProperties(se,{MIN:{value:new se(vs,ce.EMPTY_NODE)},MAX:{value:new se(Ai,po)}});Qy.__EMPTY_NODE=ce.EMPTY_NODE;Ue.__childrenNodeConstructor=ce;_N(po);yN(po);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN=!0;function it(t,e=null){if(t===null)return ce.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ue(n,it(e))}if(!(t instanceof Array)&&bN){const n=[];let i=!1;if(St(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=it(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),n.push(new se(o,c)))}}),n.length===0)return ce.EMPTY_NODE;const r=Ra(n,gN,o=>o.name,cd);if(i){const o=Ra(n,rt.getCompare());return new ce(r,it(e),new yn({".priority":o},{".priority":rt}))}else return new ce(r,it(e),yn.Default)}else{let n=ce.EMPTY_NODE;return St(t,(i,s)=>{if(Pn(t,i)&&i.substring(0,1)!=="."){const r=it(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(it(e))}}vN(it);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN extends Pc{constructor(e){super(),this.indexPath_=e,P(!te(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Ds(e.name,n.name):r}makePost(e,n){const i=it(e),s=ce.EMPTY_NODE.updateChild(this.indexPath_,i);return new se(n,s)}maxPost(){const e=ce.EMPTY_NODE.updateChild(this.indexPath_,po);return new se(Ai,e)}toString(){return Wy(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN extends Pc{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Ds(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return se.MIN}maxPost(){return se.MAX}makePost(e,n){const i=it(e);return new se(n,i)}toString(){return".value"}}const RN=new CN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SN(t){return{type:"value",snapshotNode:t}}function PN(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function NN(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Yp(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function kN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=rt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vs}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ai}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===rt}copy(){const e=new ld;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Xp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===rt?n="$priority":t.index_===RN?n="$value":t.index_===is?n="$key":(P(t.index_ instanceof AN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ge(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=Ge(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+Ge(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=Ge(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+Ge(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Jp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==rt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa extends jy{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=ho("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Sa.getListenId_(e,i),a={};this.listens_[o]=a;const c=Xp(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,i),cs(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",s(d,null)}})}unlisten(e,n){const i=Sa.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Xp(e._queryParams),i=e._path.toString(),s=new br;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ju(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Ar(a.responseText)}catch{It("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&It("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(){this.rootNode_=ce.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(){return{value:null,children:new Map}}function eE(t,e,n){if(te(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=ie(e);t.children.has(i)||t.children.set(i,Pa());const s=t.children.get(i);e=we(e),eE(s,e,n)}}function gu(t,e,n){t.value!==null?n(e,t.value):DN(t,(i,s)=>{const r=new Ce(e.toString()+"/"+i);gu(s,r,n)})}function DN(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&St(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=10*1e3,LN=30*1e3,MN=5*60*1e3;class VN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ON(e);const i=Zp+(LN-Zp)*Math.random();dr(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;St(e,(s,r)=>{r>0&&Pn(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),dr(this.reportStats_.bind(this),Math.floor(Math.random()*2*MN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(tn||(tn={}));function tE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function nE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function iE(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=tn.ACK_USER_WRITE,this.source=tE()}operationForChild(e){if(te(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ce(e));return new Na(pe(),n,this.revert)}}else return P(ie(this.path)===e,"operationForChild called for unrelated child."),new Na(we(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=tn.OVERWRITE}operationForChild(e){return te(this.path)?new Ci(this.source,pe(),this.snap.getImmediateChild(e)):new Ci(this.source,we(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=tn.MERGE}operationForChild(e){if(te(this.path)){const n=this.children.subtree(new Ce(e));return n.isEmpty()?null:n.value?new Ci(this.source,pe(),n.value):new Br(this.source,pe(),n)}else return P(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Br(this.source,we(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(te(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function qN(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(kN(o.childName,o.snapshotNode))}),Ws(t,s,"child_removed",e,i,n),Ws(t,s,"child_added",e,i,n),Ws(t,s,"child_moved",r,i,n),Ws(t,s,"child_changed",e,i,n),Ws(t,s,"value",e,i,n),s}function Ws(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,c)=>UN(t,a,c)),o.forEach(a=>{const c=FN(t,a,r);s.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function FN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function UN(t,e,n){if(e.childName==null||n.childName==null)throw bs("Should only compare child_ events.");const i=new se(e.childName,e.snapshotNode),s=new se(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(t,e){return{eventCache:t,serverCache:e}}function fr(t,e,n,i){return sE(new ud(e,n,i),t.serverCache)}function rE(t,e,n,i){return sE(t.eventCache,new ud(e,n,i))}function _u(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ri(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hl;const zN=()=>(hl||(hl=new mt(C1)),hl);class Ee{constructor(e,n=zN()){this.value=e,this.children=n}static fromObject(e){let n=new Ee(null);return St(e,(i,s)=>{n=n.set(new Ce(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:pe(),value:this.value};if(te(e))return null;{const i=ie(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(we(e),n);return r!=null?{path:Be(new Ce(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(te(e))return this;{const n=ie(e),i=this.children.get(n);return i!==null?i.subtree(we(e)):new Ee(null)}}set(e,n){if(te(e))return new Ee(n,this.children);{const i=ie(e),r=(this.children.get(i)||new Ee(null)).set(we(e),n),o=this.children.insert(i,r);return new Ee(this.value,o)}}remove(e){if(te(e))return this.children.isEmpty()?new Ee(null):new Ee(null,this.children);{const n=ie(e),i=this.children.get(n);if(i){const s=i.remove(we(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new Ee(null):new Ee(this.value,r)}else return this}}get(e){if(te(e))return this.value;{const n=ie(e),i=this.children.get(n);return i?i.get(we(e)):null}}setTree(e,n){if(te(e))return n;{const i=ie(e),r=(this.children.get(i)||new Ee(null)).setTree(we(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Ee(this.value,o)}}fold(e){return this.fold_(pe(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Be(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,pe(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(te(e))return null;{const r=ie(e),o=this.children.get(r);return o?o.findOnPath_(we(e),Be(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,pe(),n)}foreachOnPath_(e,n,i){if(te(e))return this;{this.value&&i(n,this.value);const s=ie(e),r=this.children.get(s);return r?r.foreachOnPath_(we(e),Be(n,s),i):new Ee(null)}}foreach(e){this.foreach_(pe(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(Be(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.writeTree_=e}static empty(){return new Ft(new Ee(null))}}function pr(t,e,n){if(te(e))return new Ft(new Ee(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Ct(s,e);return r=r.updateChild(o,n),new Ft(t.writeTree_.set(s,r))}else{const s=new Ee(n),r=t.writeTree_.setTree(e,s);return new Ft(r)}}}function em(t,e,n){let i=t;return St(n,(s,r)=>{i=pr(i,Be(e,s),r)}),i}function tm(t,e){if(te(e))return Ft.empty();{const n=t.writeTree_.setTree(e,new Ee(null));return new Ft(n)}}function vu(t,e){return xi(t,e)!=null}function xi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ct(n.path,e)):null}function nm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(rt,(i,s)=>{e.push(new se(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new se(i,s.value))}),e}function $n(t,e){if(te(e))return t;{const n=xi(t,e);return n!=null?new Ft(new Ee(n)):new Ft(t.writeTree_.subtree(e))}}function yu(t){return t.writeTree_.isEmpty()}function ys(t,e){return oE(pe(),t.writeTree_,e)}function oE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(P(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=oE(Be(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Be(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(t,e){return dE(e,t)}function jN(t,e,n,i,s){P(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=pr(t.visibleWrites,e,n)),t.lastWriteId=i}function BN(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function $N(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&WN(a,i.path)?s=!1:Lt(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return HN(t),!0;if(i.snap)t.visibleWrites=tm(t.visibleWrites,i.path);else{const a=i.children;St(a,c=>{t.visibleWrites=tm(t.visibleWrites,Be(i.path,c))})}return!0}else return!1}function WN(t,e){if(t.snap)return Lt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Lt(Be(t.path,n),e))return!0;return!1}function HN(t){t.visibleWrites=cE(t.allWrites,KN,pe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function KN(t){return t.visible}function cE(t,e,n){let i=Ft.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)Lt(n,o)?(a=Ct(n,o),i=pr(i,a,r.snap)):Lt(o,n)&&(a=Ct(o,n),i=pr(i,pe(),r.snap.getChild(a)));else if(r.children){if(Lt(n,o))a=Ct(n,o),i=em(i,a,r.children);else if(Lt(o,n))if(a=Ct(o,n),te(a))i=em(i,pe(),r.children);else{const c=cs(r.children,ie(a));if(c){const l=c.getChild(we(a));i=pr(i,pe(),l)}}}else throw bs("WriteRecord should have .snap or .children")}}return i}function lE(t,e,n,i,s){if(!i&&!s){const r=xi(t.visibleWrites,e);if(r!=null)return r;{const o=$n(t.visibleWrites,e);if(yu(o))return n;if(n==null&&!vu(o,pe()))return null;{const a=n||ce.EMPTY_NODE;return ys(o,a)}}}else{const r=$n(t.visibleWrites,e);if(!s&&yu(r))return n;if(!s&&n==null&&!vu(r,pe()))return null;{const o=function(l){return(l.visible||s)&&(!i||!~i.indexOf(l.writeId))&&(Lt(l.path,e)||Lt(e,l.path))},a=cE(t.allWrites,o,e),c=n||ce.EMPTY_NODE;return ys(a,c)}}}function GN(t,e,n){let i=ce.EMPTY_NODE;const s=xi(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(rt,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=$n(t.visibleWrites,e);return n.forEachChild(rt,(o,a)=>{const c=ys($n(r,new Ce(o)),a);i=i.updateImmediateChild(o,c)}),nm(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=$n(t.visibleWrites,e);return nm(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function QN(t,e,n,i,s){P(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Be(e,n);if(vu(t.visibleWrites,r))return null;{const o=$n(t.visibleWrites,r);return yu(o)?s.getChild(n):ys(o,s.getChild(n))}}function YN(t,e,n,i){const s=Be(e,n),r=xi(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=$n(t.visibleWrites,s);return ys(o,i.getNode().getImmediateChild(n))}else return null}function XN(t,e){return xi(t.visibleWrites,e)}function JN(t,e,n,i,s,r,o){let a;const c=$n(t.visibleWrites,e),l=xi(c,pe());if(l!=null)a=l;else if(n!=null)a=ys(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=d.getNext();for(;p&&u.length<s;)h(p,i)!==0&&u.push(p),p=d.getNext();return u}else return[]}function ZN(){return{visibleWrites:Ft.empty(),allWrites:[],lastWriteId:-1}}function Eu(t,e,n,i){return lE(t.writeTree,t.treePath,e,n,i)}function uE(t,e){return GN(t.writeTree,t.treePath,e)}function im(t,e,n,i){return QN(t.writeTree,t.treePath,e,n,i)}function ka(t,e){return XN(t.writeTree,Be(t.treePath,e))}function ek(t,e,n,i,s,r){return JN(t.writeTree,t.treePath,e,n,i,s,r)}function hd(t,e,n){return YN(t.writeTree,t.treePath,e,n)}function hE(t,e){return dE(Be(t.treePath,e),t.writeTree)}function dE(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Yp(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,NN(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,PN(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Yp(i,e.snapshotNode,s.oldSnap));else throw bs("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const fE=new nk;class dd{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new ud(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return hd(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ri(this.viewCache_),r=ek(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function ik(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function sk(t,e,n,i,s){const r=new tk;let o,a;if(n.type===tn.OVERWRITE){const l=n;l.source.fromUser?o=Tu(t,e,l.path,l.snap,i,s,r):(P(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!te(l.path),o=xa(t,e,l.path,l.snap,i,s,a,r))}else if(n.type===tn.MERGE){const l=n;l.source.fromUser?o=ok(t,e,l.path,l.children,i,s,r):(P(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Iu(t,e,l.path,l.children,i,s,a,r))}else if(n.type===tn.ACK_USER_WRITE){const l=n;l.revert?o=lk(t,e,l.path,i,s,r):o=ak(t,e,l.path,l.affectedTree,i,s,r)}else if(n.type===tn.LISTEN_COMPLETE)o=ck(t,e,n.path,i,r);else throw bs("Unknown operation type: "+n.type);const c=r.getChanges();return rk(e,o,c),{viewCache:o,changes:c}}function rk(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=_u(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(SN(_u(e)))}}function pE(t,e,n,i,s,r){const o=e.eventCache;if(ka(i,n)!=null)return e;{let a,c;if(te(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Ri(e),u=l instanceof ce?l:ce.EMPTY_NODE,h=uE(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=Eu(i,Ri(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=ie(n);if(l===".priority"){P(Qn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=im(i,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=we(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=im(i,n,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=hd(i,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,s,r):a=o.getNode()}}return fr(e,a,o.isFullyInitialized()||te(n),t.filter.filtersNodes())}}function xa(t,e,n,i,s,r,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(te(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const p=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),p,null)}else{const p=ie(n);if(!c.isCompleteForPath(n)&&Qn(n)>1)return e;const g=we(n),y=c.getNode().getImmediateChild(p).updateChild(g,i);p===".priority"?l=u.updatePriority(c.getNode(),y):l=u.updateChild(c.getNode(),p,y,g,fE,null)}const h=rE(e,l,c.isFullyInitialized()||te(n),u.filtersNodes()),d=new dd(s,h,r);return pE(t,h,n,s,d,a)}function Tu(t,e,n,i,s,r,o){const a=e.eventCache;let c,l;const u=new dd(s,e,r);if(te(n))l=t.filter.updateFullNode(e.eventCache.getNode(),i,o),c=fr(e,l,!0,t.filter.filtersNodes());else{const h=ie(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),i),c=fr(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=we(n),p=a.getNode().getImmediateChild(h);let g;if(te(d))g=i;else{const _=u.getCompleteChild(h);_!=null?$y(d)===".priority"&&_.getChild(Hy(d)).isEmpty()?g=_:g=_.updateChild(d,i):g=ce.EMPTY_NODE}if(p.equals(g))c=e;else{const _=t.filter.updateChild(a.getNode(),h,g,d,u,o);c=fr(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function sm(t,e){return t.eventCache.isCompleteForChild(e)}function ok(t,e,n,i,s,r,o){let a=e;return i.foreach((c,l)=>{const u=Be(n,c);sm(e,ie(u))&&(a=Tu(t,a,u,l,s,r,o))}),i.foreach((c,l)=>{const u=Be(n,c);sm(e,ie(u))||(a=Tu(t,a,u,l,s,r,o))}),a}function rm(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Iu(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;te(n)?l=i:l=new Ee(null).setTree(n,i);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),g=rm(t,p,d);c=xa(t,c,new Ce(h),g,s,r,o,a)}}),l.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const g=e.serverCache.getNode().getImmediateChild(h),_=rm(t,g,d);c=xa(t,c,new Ce(h),_,s,r,o,a)}}),c}function ak(t,e,n,i,s,r,o){if(ka(s,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(te(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return xa(t,e,n,c.getNode().getChild(n),s,r,a,o);if(te(n)){let l=new Ee(null);return c.getNode().forEachChild(is,(u,h)=>{l=l.set(new Ce(u),h)}),Iu(t,e,n,l,s,r,a,o)}else return e}else{let l=new Ee(null);return i.foreach((u,h)=>{const d=Be(n,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),Iu(t,e,n,l,s,r,a,o)}}function ck(t,e,n,i,s){const r=e.serverCache,o=rE(e,r.getNode(),r.isFullyInitialized()||te(n),r.isFiltered());return pE(t,o,n,i,fE,s)}function lk(t,e,n,i,s,r){let o;if(ka(i,n)!=null)return e;{const a=new dd(i,e,s),c=e.eventCache.getNode();let l;if(te(n)||ie(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Eu(i,Ri(e));else{const h=e.serverCache.getNode();P(h instanceof ce,"serverChildren would be complete if leaf node"),u=uE(i,h)}u=u,l=t.filter.updateFullNode(c,u,r)}else{const u=ie(n);let h=hd(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,we(n),a,r):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,ce.EMPTY_NODE,we(n),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Eu(i,Ri(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||ka(i,pe())!=null,fr(e,l,o,t.filter.filtersNodes())}}function uk(t,e){const n=Ri(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!te(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function om(t,e,n,i){e.type===tn.MERGE&&e.source.queryId!==null&&(P(Ri(t.viewCache_),"We should always have a full cache before handling merges"),P(_u(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=sk(t.processor_,s,e,n,i);return ik(t.processor_,r.viewCache),P(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,hk(t,r.changes,r.viewCache.eventCache.getNode(),null)}function hk(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return qN(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let am;function dk(t){P(!am,"__referenceConstructor has already been defined"),am=t}function fd(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return P(r!=null,"SyncTree gave us an op for an invalid query."),om(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(om(o,e,n,i));return r}}function pd(t,e){let n=null;for(const i of t.views.values())n=n||uk(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cm;function fk(t){P(!cm,"__referenceConstructor has already been defined"),cm=t}class lm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ee(null),this.pendingWriteTree_=ZN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function pk(t,e,n,i,s){return jN(t.pendingWriteTree_,e,n,i,s),s?kc(t,new Ci(tE(),e,n)):[]}function Hi(t,e,n=!1){const i=BN(t.pendingWriteTree_,e);if($N(t.pendingWriteTree_,e)){let r=new Ee(null);return i.snap!=null?r=r.set(pe(),!0):St(i.children,o=>{r=r.set(new Ce(o),!0)}),kc(t,new Na(i.path,r,n))}else return[]}function Nc(t,e,n){return kc(t,new Ci(nE(),e,n))}function mk(t,e,n){const i=Ee.fromObject(n);return kc(t,new Br(nE(),e,i))}function gk(t,e,n,i){const s=vE(t,i);if(s!=null){const r=yE(s),o=r.path,a=r.queryId,c=Ct(o,e),l=new Ci(iE(a),c,n);return EE(t,o,l)}else return[]}function _k(t,e,n,i){const s=vE(t,i);if(s){const r=yE(s),o=r.path,a=r.queryId,c=Ct(o,e),l=Ee.fromObject(n),u=new Br(iE(a),c,l);return EE(t,o,u)}else return[]}function mE(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Ct(o,e),l=pd(a,c);if(l)return l});return lE(s,e,r,n,!0)}function kc(t,e){return gE(e,t.syncPointTree_,null,aE(t.pendingWriteTree_,pe()))}function gE(t,e,n,i){if(te(t.path))return _E(t,e,n,i);{const s=e.get(pe());n==null&&s!=null&&(n=pd(s,pe()));let r=[];const o=ie(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=hE(i,o);r=r.concat(gE(a,c,l,u))}return s&&(r=r.concat(fd(s,t,i,n))),r}}function _E(t,e,n,i){const s=e.get(pe());n==null&&s!=null&&(n=pd(s,pe()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=hE(i,o),u=t.operationForChild(o);u&&(r=r.concat(_E(u,a,c,l)))}),s&&(r=r.concat(fd(s,t,i,n))),r}function vE(t,e){return t.tagToQueryMap.get(e)}function yE(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ce(t.substr(0,e))}}function EE(t,e,n){const i=t.syncPointTree_.get(e);P(i,"Missing sync point for query tag that we're tracking");const s=aE(t.pendingWriteTree_,e);return fd(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new md(n)}node(){return this.node_}}class gd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Be(this.path_,e);return new gd(this.syncTree_,n)}node(){return mE(this.syncTree_,this.path_)}}const vk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},um=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return yk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Ek(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},yk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},Ek=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&P(!1,"Unexpected increment value: "+i);const s=e.node();if(P(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Tk=function(t,e,n,i){return _d(e,new gd(n,t),i)},Ik=function(t,e,n){return _d(t,new md(e),n)};function _d(t,e,n){const i=t.getPriority().val(),s=um(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=um(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Ue(a,it(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Ue(s))),o.forEachChild(rt,(a,c)=>{const l=_d(c,e.getImmediateChild(a),n);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function yd(t,e){let n=e instanceof Ce?e:new Ce(e),i=t,s=ie(n);for(;s!==null;){const r=cs(i.node.children,s)||{children:{},childCount:0};i=new vd(s,i,r),n=we(n),s=ie(n)}return i}function Os(t){return t.node.value}function TE(t,e){t.node.value=e,wu(t)}function IE(t){return t.node.childCount>0}function wk(t){return Os(t)===void 0&&!IE(t)}function xc(t,e){St(t.node.children,(n,i)=>{e(new vd(n,t,i))})}function wE(t,e,n,i){n&&!i&&e(t),xc(t,s=>{wE(s,e,!0,i)}),n&&i&&e(t)}function bk(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function mo(t){return new Ce(t.parent===null?t.name:mo(t.parent)+"/"+t.name)}function wu(t){t.parent!==null&&Ak(t.parent,t.name,t)}function Ak(t,e,n){const i=wk(n),s=Pn(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,wu(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,wu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck=/[\[\].#$\/\u0000-\u001F\u007F]/,Rk=/[\[\].#$\u0000-\u001F\u007F]/,dl=10*1024*1024,bE=function(t){return typeof t=="string"&&t.length!==0&&!Ck.test(t)},Sk=function(t){return typeof t=="string"&&t.length!==0&&!Rk.test(t)},Pk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Sk(t)},AE=function(t,e,n){const i=n instanceof Ce?new cN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ii(i));if(typeof e=="function")throw new Error(t+"contains a function "+ii(i)+" with contents = "+e.toString());if(by(e))throw new Error(t+"contains "+e.toString()+" "+ii(i));if(typeof e=="string"&&e.length>dl/3&&Ja(e)>dl)throw new Error(t+"contains a string greater than "+dl+" utf8 bytes "+ii(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(St(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!bE(o)))throw new Error(t+" contains an invalid key ("+o+") "+ii(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);lN(i,o),AE(t,a,i),uN(i)}),s&&r)throw new Error(t+' contains ".value" child '+ii(i)+" in addition to actual children.")}},Nk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!bE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Pk(n))throw new Error(jw(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function xk(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Ky(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Di(t,e,n){xk(t,n),Dk(t,i=>Lt(i,e)||Lt(e,i))}function Dk(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(Ok(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Ok(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();_i&&nt("event: "+n.toString()),fo(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk="repo_interrupt",Mk=25;class Vk{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new kk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Pa(),this.transactionQueueTree_=new vd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function qk(t,e,n){if(t.stats_=rd(t.repoInfo_),t.forceRestClient_||x1())t.server_=new Sa(t.repoInfo_,(i,s,r,o)=>{hm(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>dm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ge(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new wn(t.repoInfo_,e,(i,s,r,o)=>{hm(t,i,s,r,o)},i=>{dm(t,i)},i=>{Uk(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=q1(t.repoInfo_,()=>new VN(t.stats_,t.server_)),t.infoData_=new xN,t.infoSyncTree_=new lm({startListening:(i,s,r,o)=>{let a=[];const c=t.infoData_.getNode(i._path);return c.isEmpty()||(a=Nc(t.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ed(t,"connected",!1),t.serverSyncTree_=new lm({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,c)=>{const l=o(a,c);Di(t.eventQueue_,i._path,l)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function Fk(t){const n=t.infoData_.getNode(new Ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function CE(t){return vk({timestamp:Fk(t)})}function hm(t,e,n,i,s){t.dataUpdateCount++;const r=new Ce(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const c=ia(n,l=>it(l));o=_k(t.serverSyncTree_,r,c,s)}else{const c=it(n);o=gk(t.serverSyncTree_,r,c,s)}else if(i){const c=ia(n,l=>it(l));o=mk(t.serverSyncTree_,r,c)}else{const c=it(n);o=Nc(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Id(t,r)),Di(t.eventQueue_,a,o)}function dm(t,e){Ed(t,"connected",e),e===!1&&jk(t)}function Uk(t,e){St(e,(n,i)=>{Ed(t,n,i)})}function Ed(t,e,n){const i=new Ce("/.info/"+e),s=it(n);t.infoData_.updateSnapshot(i,s);const r=Nc(t.infoSyncTree_,i,s);Di(t.eventQueue_,i,r)}function zk(t){return t.nextWriteId_++}function jk(t){RE(t,"onDisconnectEvents");const e=CE(t),n=Pa();gu(t.onDisconnect_,pe(),(s,r)=>{const o=Tk(s,r,t.serverSyncTree_,e);eE(n,s,o)});let i=[];gu(n,pe(),(s,r)=>{i=i.concat(Nc(t.serverSyncTree_,s,r));const o=Hk(t,s);Id(t,o)}),t.onDisconnect_=Pa(),Di(t.eventQueue_,pe(),i)}function Bk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Lk)}function RE(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),nt(n,...e)}function SE(t,e,n){return mE(t.serverSyncTree_,e,n)||ce.EMPTY_NODE}function Td(t,e=t.transactionQueueTree_){if(e||Dc(t,e),Os(e)){const n=NE(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&$k(t,mo(e),n)}else IE(e)&&xc(e,n=>{Td(t,n)})}function $k(t,e,n){const i=n.map(l=>l.currentWriteId),s=SE(t,e,i);let r=s;const o=s.hash();for(let l=0;l<n.length;l++){const u=n[l];P(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ct(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,l=>{RE(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Hi(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Dc(t,yd(t.transactionQueueTree_,e)),Td(t,t.transactionQueueTree_),Di(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)fo(h[d])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{It("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}Id(t,e)}},o)}function Id(t,e){const n=PE(t,e),i=mo(n),s=NE(t,n);return Wk(t,s,i),i}function Wk(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Ct(n,c.path);let u=!1,h;if(P(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,s=s.concat(Hi(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Mk)u=!0,h="maxretry",s=s.concat(Hi(t.serverSyncTree_,c.currentWriteId,!0));else{const d=SE(t,c.path,o);c.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){AE("transaction failed: Data returned ",p,c.path);let g=it(p);typeof p=="object"&&p!=null&&Pn(p,".priority")||(g=g.updatePriority(d.getPriority()));const y=c.currentWriteId,x=CE(t),M=Ik(g,d,x);c.currentOutputSnapshotRaw=g,c.currentOutputSnapshotResolved=M,c.currentWriteId=zk(t),o.splice(o.indexOf(y),1),s=s.concat(pk(t.serverSyncTree_,c.path,M,c.currentWriteId,c.applyLocally)),s=s.concat(Hi(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",s=s.concat(Hi(t.serverSyncTree_,c.currentWriteId,!0))}Di(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}Dc(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)fo(i[a]);Td(t,t.transactionQueueTree_)}function PE(t,e){let n,i=t.transactionQueueTree_;for(n=ie(e);n!==null&&Os(i)===void 0;)i=yd(i,n),e=we(e),n=ie(e);return i}function NE(t,e){const n=[];return kE(t,e,n),n.sort((i,s)=>i.order-s.order),n}function kE(t,e,n){const i=Os(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);xc(e,s=>{kE(t,s,n)})}function Dc(t,e){const n=Os(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,TE(e,n.length>0?n:void 0)}xc(e,i=>{Dc(t,i)})}function Hk(t,e){const n=mo(PE(t,e)),i=yd(t.transactionQueueTree_,e);return bk(i,s=>{fl(t,s)}),fl(t,i),wE(i,s=>{fl(t,s)}),n}function fl(t,e){const n=Os(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Hi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?TE(e,void 0):n.length=r+1,Di(t.eventQueue_,mo(e),s);for(let o=0;o<i.length;o++)fo(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kk(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Gk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):It(`Invalid query segment '${n}' in query '${t}'`)}return e}const fm=function(t,e){const n=Qk(t),i=n.namespace;n.domain==="firebase.com"&&bi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&bi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||b1();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new L1(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new Ce(n.pathString)}},Qk=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=Kk(t.substring(u,h)));const d=Gk(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const p=e.slice(0,l);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return te(this._path)?null:$y(this._path)}get ref(){return new Ls(this._repo,this._path)}get _queryIdentifier(){const e=Jp(this._queryParams),n=id(e);return n==="{}"?"default":n}get _queryObject(){return Jp(this._queryParams)}isEqual(e){if(e=Ut(e),!(e instanceof wd))return!1;const n=this._repo===e._repo,i=Ky(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+aN(this._path)}}class Ls extends wd{constructor(e,n){super(e,n,new ld,!1)}get parent(){const e=Hy(this._path);return e===null?null:new Ls(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}dk(Ls);fk(Ls);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk="FIREBASE_DATABASE_EMULATOR_HOST",bu={};let Xk=!1;function Jk(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||bi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),nt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=fm(r,s),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[Yk]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=fm(r,s),a=o.repoInfo):c=!o.repoInfo.secure;const u=s&&c?new fu(fu.OWNER):new O1(t.name,t.options,e);Nk("Invalid Firebase Database URL",o),te(o.path)||bi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=ex(a,t,u,new D1(t.name,n));return new tx(h,t)}function Zk(t,e){const n=bu[e];(!n||n[t.key]!==t)&&bi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Bk(t),delete n[t.key]}function ex(t,e,n,i){let s=bu[e.name];s||(s={},bu[e.name]=s);let r=s[t.toURLString()];return r&&bi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Vk(t,Xk,n,i),s[t.toURLString()]=r,r}class tx{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(qk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ls(this._repo,pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Zk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&bi("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nx(t){y1(Cs),cn(new zt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Jk(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Tt(Op,Lp,t),Tt(Op,Lp,"esm2017")}wn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};wn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};nx();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE="firebasestorage.googleapis.com",ix="storageBucket",sx=2*60*1e3,rx=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Sn{constructor(e,n,i=0){super(pl(e),`Firebase Storage: ${n} (${pl(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,fn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return pl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var hn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(hn||(hn={}));function pl(t){return"storage/"+t}function ox(){const t="An unknown error occurred, please check the error payload for server response.";return new fn(hn.UNKNOWN,t)}function ax(){return new fn(hn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function cx(){return new fn(hn.CANCELED,"User canceled the upload/download.")}function lx(t){return new fn(hn.INVALID_URL,"Invalid URL '"+t+"'.")}function ux(t){return new fn(hn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function pm(t){return new fn(hn.INVALID_ARGUMENT,t)}function DE(){return new fn(hn.APP_DELETED,"The Firebase app was deleted.")}function hx(t){return new fn(hn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=Mt.makeFromUrl(e,n)}catch{return new Mt(e,"")}if(i.path==="")return i;throw ux(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(A){A.path_=decodeURIComponent(A.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),g={bucket:1,path:3},_=n===xE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",x=new RegExp(`^https?://${_}/${s}/${y}`,"i"),k=[{regex:a,indices:c,postModify:r},{regex:p,indices:g,postModify:l},{regex:x,indices:{bucket:1,path:2},postModify:l}];for(let A=0;A<k.length;A++){const K=k[A],le=K.regex.exec(e);if(le){const me=le[K.indices.bucket];let B=le[K.indices.path];B||(B=""),i=new Mt(me,B),K.postModify(i);break}}if(i==null)throw lx(e);return i}}class dx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fx(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...y){l||(l=!0,e.apply(null,y))}function h(y){s=setTimeout(()=>{s=null,t(p,c())},y)}function d(){r&&clearTimeout(r)}function p(y,...x){if(l){d();return}if(y){d(),u.call(null,y,...x);return}if(c()||o){d(),u.call(null,y,...x);return}i<64&&(i*=2);let k;a===1?(a=2,k=0):k=(i+Math.random())*1e3,h(k)}let g=!1;function _(y){g||(g=!0,d(),!l&&(s!==null?(y||(a=2),clearTimeout(s),h(0)):y||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,_(!0)},n),_}function px(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mx(t){return t!==void 0}function mm(t,e,n,i){if(i<e)throw pm(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw pm(`Invalid value for '${t}'. Expected ${n} or less.`)}function gx(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Da;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Da||(Da={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _x(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e,n,i,s,r,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new qo(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Da.NO_ERROR,c=r.getStatus();if(!a||_x(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Da.ABORT;i(!1,new qo(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;i(!0,new qo(l,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());mx(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=ox();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?DE():cx();o(c)}else{const c=ax();o(c)}};this.canceled_?n(!1,new qo(!1,null,!0)):this.backoffId_=fx(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&px(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qo{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function yx(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Ex(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Tx(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Ix(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function wx(t,e,n,i,s,r,o=!0){const a=gx(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return Tx(l,e),yx(l,n),Ex(l,r),Ix(l,i),new vx(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bx(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Ax(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n){this._service=e,n instanceof Mt?this._location=n:this._location=Mt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Oa(e,n)}get root(){const e=new Mt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ax(this._location.path)}get storage(){return this._service}get parent(){const e=bx(this._location.path);if(e===null)return null;const n=new Mt(this._location.bucket,e);return new Oa(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw hx(e)}}function gm(t,e){const n=e==null?void 0:e[ix];return n==null?null:Mt.makeFromBucketSpec(n,t)}class Cx{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=xE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=sx,this._maxUploadRetryTime=rx,this._requests=new Set,s!=null?this._bucket=Mt.makeFromBucketSpec(s,this._host):this._bucket=gm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Mt.makeFromBucketSpec(this._url,e):this._bucket=gm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){mm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){mm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Oa(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new dx(DE());{const o=wx(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const _m="@firebase/storage",vm="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx="storage";function Sx(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Cx(n,i,s,e,Cs)}function Px(){cn(new zt(Rx,Sx,"PUBLIC").setMultipleInstances(!0)),Tt(_m,vm,""),Tt(_m,vm,"esm2017")}Px();const ml=new WeakMap;function OE(t,e){return ml.has(e)||ml.set(e,t||{f:{},r:{},s:{},u:{}}),ml.get(e)}function Nx(t,e,n,i){if(!t)return n;const[s,r]=LE(t);if(!s)return n;const o=OE(void 0,i)[s]||{},a=e||r;return a&&a in o?o[a]:n}function kx(t,e,n,i){if(!t)return;const[s,r]=LE(t);if(!s)return;const o=OE(void 0,i)[s],a=e||r;if(a)return n.then(c=>{o[a]=c}).catch(en),a}function LE(t){return h1(t)||d1(t)?["f",t.path]:f1(t)?["r",t.toString()]:p1(t)?["s",t.toString()]:[]}const gl=new WeakMap;function xx(t,e,n){const i=ed();gl.has(i)||gl.set(i,new Map);const s=gl.get(i),r=kx(e,n,t,i);return r&&s.set(r,t),r?()=>s.delete(r):en}const Dx={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Au(t,e,n,i){if(!l1(t))return[t,{}];const s=[{},{}],r=Object.keys(n).reduce((a,c)=>{const l=n[c];return a[l.path]=l.data(),a},{});function o(a,c,l,u){c=c||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(p=>{const g=Object.getOwnPropertyDescriptor(a,p);g&&!g.enumerable&&Object.defineProperty(h,p,g)});for(const p in a){const g=a[p];if(g==null||g instanceof Date||g instanceof Le||g instanceof Rc)h[p]=g;else if(nd(g)){const _=l+p;h[p]=_ in n?c[p]:g.path,d[_]=g.converter?g:g.withConverter(i.converter)}else if(Array.isArray(g)){h[p]=Array(g.length);for(let _=0;_<g.length;_++){const y=g[_];y&&y.path in r&&(h[p][_]=r[y.path])}o(g,c[p]||h[p],l+p+".",[h[p],d])}else ki(g)?(h[p]={},o(g,c[p],l+p+".",[h[p],d])):h[p]=g}}return o(t,e,"",s),s}const bd={reset:!1,wait:!0,maxRefDepth:2,converter:Dx,snapshotOptions:{serverTimestamps:"estimate"}};function La(t){for(const e in t)t[e].unsub()}function Cu(t,e,n,i,s,r,o,a,c){const[l,u]=Au(i.data(t.snapshotOptions),td(e,n),s,t);r.set(e,n,l),Ru(t,e,n,s,u,r,o,a,c)}function Ox({ref:t,target:e,path:n,depth:i,resolve:s,reject:r,ops:o},a){const c=Object.create(null);let l=en;return a.once?ny(t).then(u=>{u.exists()?Cu(a,e,n,u,c,o,i,s,r):(o.set(e,n,null),s())}).catch(r):l=Yh(t,u=>{u.exists()?Cu(a,e,n,u,c,o,i,s,r):(o.set(e,n,null),s())},r),()=>{l(),La(c)}}function Ru(t,e,n,i,s,r,o,a,c){const l=Object.keys(s);if(Object.keys(i).filter(_=>l.indexOf(_)<0).forEach(_=>{i[_].unsub(),delete i[_]}),!l.length||++o>t.maxRefDepth)return a(n);let h=0;const d=l.length,p=Object.create(null);function g(_){_ in p&&++h>=d&&a(n)}l.forEach(_=>{const y=i[_],x=s[_],M=`${n}.${_}`;if(p[M]=!0,y)if(y.path!==x.path)y.unsub();else return;i[_]={data:()=>td(e,M),unsub:Ox({ref:x,target:e,path:M,depth:o,ops:r,resolve:g.bind(null,M),reject:c},t),path:x.path}})}function Lx(t,e,n,i,s,r){const o=Object.assign({},bd,r),{snapshotListenOptions:a,snapshotOptions:c,wait:l,once:u}=o,h="value";let d=fi(l?[]:t.value);l||n.set(t,h,[]);const p=i;let g,_=en;const y=[],x={added:({newIndex:k,doc:A})=>{y.splice(k,0,Object.create(null));const K=y[k],[le,me]=Au(A.data(c),void 0,K,o);n.add(gn(d),k,le),Ru(o,d,`${h}.${k}`,K,me,n,0,i.bind(null,A),s)},modified:({oldIndex:k,newIndex:A,doc:K})=>{const le=gn(d),me=y[k],B=le[k],[X,ye]=Au(K.data(c),B,me,o);y.splice(A,0,me),n.remove(le,k),n.add(le,A,X),Ru(o,d,`${h}.${A}`,me,ye,n,0,i,s)},removed:({oldIndex:k})=>{const A=gn(d);n.remove(A,k),La(y.splice(k,1)[0])}};function M(k){const A=k.docChanges(a);if(!g&&A.length){g=!0;let K=0;const le=A.length,me=Object.create(null);for(let B=0;B<le;B++)me[A[B].doc.id]=!0;i=B=>{B&&B.id in me&&++K>=le&&(l&&(n.set(t,h,gn(d)),d=t),p(gn(d)),i=en)}}A.forEach(K=>{x[K.type](K)}),A.length||(l&&(n.set(t,h,gn(d)),d=t),i(gn(d)))}return u?iy(e).then(M).catch(s):_=Yh(e,M,s),k=>{if(_(),k){const A=typeof k=="function"?k():[];n.set(t,h,A)}y.forEach(La)}}function Mx(t,e,n,i,s,r){const o=Object.assign({},bd,r),a="value",c=Object.create(null);i=m1(i,()=>td(t,a));let l=en;function u(h){h.exists()?Cu(o,t,a,h,c,n,0,i,s):(n.set(t,a,null),i(null))}return o.once?ny(e).then(u).catch(s):l=Yh(e,u,s),h=>{if(l(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}La(c)}}const ym=Symbol();function Vx(t,e){let n=en;const i=Object.assign({},bd,e),s=gn(t),r=i.target||fi();_1()&&(i.once=!0);const o=Nx(s,i.ssrKey,ym,ed()),a=o!==ym;a&&(r.value=o);let c=!a;const l=fi(!1),u=fi(),h=ET(),d=Lu();let p=en;function g(){let x=gn(t);const M=new Promise((k,A)=>{if(n(i.reset),!x)return n=en,k(null);l.value=c,c=!0,x.converter||(x=x.withConverter(i.converter)),n=(nd(x)?Mx:Lx)(r,x,qx,k,A,i)}).catch(k=>(h.value===M&&(u.value=k),Promise.reject(k))).finally(()=>{h.value===M&&(l.value=!1)});h.value=M}let _=en;Pe(t)&&(_=tr(t,g)),g(),s&&(p=xx(h.value,s,i.ssrKey)),Ku()&&rg(()=>h.value),d&&Rm(y);function y(x=i.reset){_(),p(),n(x)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>l},promise:{get:()=>h},stop:{get:()=>y}})}const qx={set:(t,e,n)=>a1(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)},Hs=new WeakMap;function Fx(t,e,n){e&&e[t]&&(e[t](n),delete e[t])}const Ux={bindName:"$firestoreBind",unbindName:"$firestoreUnbind"},zx=function(e,n,i){const s=Object.assign({},Ux,n),{bindName:r,unbindName:o}=s,a=e.config.globalProperties;a[o]=function(l,u){Fx(l,Hs.get(this),u),delete this.$firestoreRefs[l]},a[r]=function(l,u,h){const d=Object.assign({},s,h),p=CT(this.$data,l);Hs.has(this)||Hs.set(this,{});const g=Hs.get(this);g[l]&&g[l](d.reset);const _=v1(i||ed(),e).run(()=>Fa()),{promise:y,stop:x}=e.runWithContext(()=>_.run(()=>Vx(u,{target:p,...d}))),M=k=>{x(k),_.stop()};return g[l]=M,this.$firestoreRefs[l]=u,y.value},e.mixin({beforeCreate(){this.$firestoreRefs=Object.create(null)},created(){const{firestore:c}=this.$options,l=typeof c=="function"?c.call(this):c;if(l)for(const u in l)this[r](u,l[u],s)},beforeUnmount(){const c=Hs.get(this);if(c)for(const l in c)c[l]();this.$firestoreRefs=null}})};function jx(t){return(e,n)=>zx(n,t,e)}function Bx(t,{firebaseApp:e,modules:n=[]}){t.provide(Ey,e);for(const i of n)i(e,t)}const Ad=uw(XS);Ad.use(Bx,{firebaseApp:Xh,modules:[jx()]});const Su=jv(Xh);Ad.use(fw());Ad.mount("#app");
