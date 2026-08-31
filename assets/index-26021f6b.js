(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Zh(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const ke={},Rr=[],nn=()=>{},fI=()=>!1,pI=/^on[^a-z]/,Kl=t=>pI.test(t),ed=t=>t.startsWith("onUpdate:"),lt=Object.assign,td=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},mI=Object.prototype.hasOwnProperty,fe=(t,e)=>mI.call(t,e),K=Array.isArray,Ar=t=>Mo(t)==="[object Map]",Gl=t=>Mo(t)==="[object Set]",ap=t=>Mo(t)==="[object Date]",Z=t=>typeof t=="function",Ke=t=>typeof t=="string",Br=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",v_=t=>(Se(t)||Z(t))&&Z(t.then)&&Z(t.catch),E_=Object.prototype.toString,Mo=t=>E_.call(t),gI=t=>Mo(t).slice(8,-1),w_=t=>Mo(t)==="[object Object]",nd=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Oa=Zh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ql=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},_I=/-(\w)/g,Cn=Ql(t=>t.replace(_I,(e,n)=>n?n.toUpperCase():"")),yI=/\B([A-Z])/g,sr=Ql(t=>t.replace(yI,"-$1").toLowerCase()),Yl=Ql(t=>t.charAt(0).toUpperCase()+t.slice(1)),Zc=Ql(t=>t?`on${Yl(t)}`:""),Ks=(t,e)=>!Object.is(t,e),Da=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ka=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ga=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let lp;const Vu=()=>lp||(lp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ro(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ke(s)?TI(s):ro(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Ke(t)||Se(t))return t}const vI=/;(?![^(]*\))/g,EI=/:([^]+)/,wI=/\/\*[^]*?\*\//g;function TI(t){const e={};return t.replace(wI,"").split(vI).forEach(n=>{if(n){const s=n.split(EI);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ii(t){let e="";if(Ke(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const s=ii(t[n]);s&&(e+=s+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const II="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",RI=Zh(II);function T_(t){return!!t||t===""}function AI(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Xl(t[s],e[s]);return n}function Xl(t,e){if(t===e)return!0;let n=ap(t),s=ap(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Br(t),s=Br(e),n||s)return t===e;if(n=K(t),s=K(e),n||s)return n&&s?AI(t,e):!1;if(n=Se(t),s=Se(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Xl(t[o],e[o]))return!1}}return String(t)===String(e)}function CI(t,e){return t.findIndex(n=>Xl(n,e))}const je=t=>Ke(t)?t:t==null?"":K(t)||Se(t)&&(t.toString===E_||!Z(t.toString))?JSON.stringify(t,I_,2):String(t),I_=(t,e)=>e&&e.__v_isRef?I_(t,e.value):Ar(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Gl(e)?{[`Set(${e.size})`]:[...e.values()]}:Se(e)&&!K(e)&&!w_(e)?String(e):e;let Dt;class R_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Dt,!e&&Dt&&(this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Dt;try{return Dt=this,e()}finally{Dt=n}}}on(){Dt=this}off(){Dt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Jl(t){return new R_(t)}function SI(t,e=Dt){e&&e.active&&e.effects.push(t)}function sd(){return Dt}function A_(t){Dt&&Dt.cleanups.push(t)}const rd=t=>{const e=new Set(t);return e.w=0,e.n=0,e},C_=t=>(t.w&ys)>0,S_=t=>(t.n&ys)>0,bI=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ys},PI=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];C_(r)&&!S_(r)?r.delete(t):e[n++]=r,r.w&=~ys,r.n&=~ys}e.length=n}},Qa=new WeakMap;let Oi=0,ys=1;const Fu=30;let Qt;const $s=Symbol(""),Uu=Symbol("");class id{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,SI(this,s)}run(){if(!this.active)return this.fn();let e=Qt,n=us;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Qt,Qt=this,us=!0,ys=1<<++Oi,Oi<=Fu?bI(this):cp(this),this.fn()}finally{Oi<=Fu&&PI(this),ys=1<<--Oi,Qt=this.parent,us=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Qt===this?this.deferStop=!0:this.active&&(cp(this),this.onStop&&this.onStop(),this.active=!1)}}function cp(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let us=!0;const b_=[];function oi(){b_.push(us),us=!1}function ai(){const t=b_.pop();us=t===void 0?!0:t}function kt(t,e,n){if(us&&Qt){let s=Qa.get(t);s||Qa.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=rd()),P_(r)}}function P_(t,e){let n=!1;Oi<=Fu?S_(t)||(t.n|=ys,n=!C_(t)):n=!t.has(Qt),n&&(t.add(Qt),Qt.deps.push(t))}function jn(t,e,n,s,r,i){const o=Qa.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||!Br(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?nd(n)&&a.push(o.get("length")):(a.push(o.get($s)),Ar(t)&&a.push(o.get(Uu)));break;case"delete":K(t)||(a.push(o.get($s)),Ar(t)&&a.push(o.get(Uu)));break;case"set":Ar(t)&&a.push(o.get($s));break}if(a.length===1)a[0]&&Bu(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Bu(rd(l))}}function Bu(t,e){const n=K(t)?t:[...t];for(const s of n)s.computed&&up(s);for(const s of n)s.computed||up(s)}function up(t,e){(t!==Qt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function kI(t,e){var n;return(n=Qa.get(t))==null?void 0:n.get(e)}const NI=Zh("__proto__,__v_isRef,__isVue"),k_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Br)),hp=OI();function OI(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=me(this);for(let i=0,o=this.length;i<o;i++)kt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(me)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){oi();const s=me(this)[e].apply(this,n);return ai(),s}}),t}function DI(t){const e=me(this);return kt(e,"has",t),e.hasOwnProperty(t)}class N_{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const r=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&s===(r?i?zI:M_:i?x_:D_).get(e))return e;const o=K(e);if(!r){if(o&&fe(hp,n))return Reflect.get(hp,n,s);if(n==="hasOwnProperty")return DI}const a=Reflect.get(e,n,s);return(Br(n)?k_.has(n):NI(n))||(r||kt(e,"get",n),i)?a:Ve(a)?o&&nd(n)?a:a.value:Se(a)?r?V_(a):Lo(a):a}}class O_ extends N_{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if($r(i)&&Ve(i)&&!Ve(s))return!1;if(!this._shallow&&(!Ya(s)&&!$r(s)&&(i=me(i),s=me(s)),!K(e)&&Ve(i)&&!Ve(s)))return i.value=s,!0;const o=K(e)&&nd(n)?Number(n)<e.length:fe(e,n),a=Reflect.set(e,n,s,r);return e===me(r)&&(o?Ks(s,i)&&jn(e,"set",n,s):jn(e,"add",n,s)),a}deleteProperty(e,n){const s=fe(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&jn(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Br(n)||!k_.has(n))&&kt(e,"has",n),s}ownKeys(e){return kt(e,"iterate",K(e)?"length":$s),Reflect.ownKeys(e)}}class xI extends N_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const MI=new O_,LI=new xI,VI=new O_(!0),od=t=>t,Zl=t=>Reflect.getPrototypeOf(t);function ua(t,e,n=!1,s=!1){t=t.__v_raw;const r=me(t),i=me(e);n||(Ks(e,i)&&kt(r,"get",e),kt(r,"get",i));const{has:o}=Zl(r),a=s?od:n?cd:io;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function ha(t,e=!1){const n=this.__v_raw,s=me(n),r=me(t);return e||(Ks(t,r)&&kt(s,"has",t),kt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function da(t,e=!1){return t=t.__v_raw,!e&&kt(me(t),"iterate",$s),Reflect.get(t,"size",t)}function dp(t){t=me(t);const e=me(this);return Zl(e).has.call(e,t)||(e.add(t),jn(e,"add",t,t)),this}function fp(t,e){e=me(e);const n=me(this),{has:s,get:r}=Zl(n);let i=s.call(n,t);i||(t=me(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Ks(e,o)&&jn(n,"set",t,e):jn(n,"add",t,e),this}function pp(t){const e=me(this),{has:n,get:s}=Zl(e);let r=n.call(e,t);r||(t=me(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&jn(e,"delete",t,void 0),i}function mp(){const t=me(this),e=t.size!==0,n=t.clear();return e&&jn(t,"clear",void 0,void 0),n}function fa(t,e){return function(s,r){const i=this,o=i.__v_raw,a=me(o),l=e?od:t?cd:io;return!t&&kt(a,"iterate",$s),o.forEach((c,u)=>s.call(r,l(c),l(u),i))}}function pa(t,e,n){return function(...s){const r=this.__v_raw,i=me(r),o=Ar(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),u=n?od:e?cd:io;return!e&&kt(i,"iterate",l?Uu:$s),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function es(t){return function(...e){return t==="delete"?!1:this}}function FI(){const t={get(i){return ua(this,i)},get size(){return da(this)},has:ha,add:dp,set:fp,delete:pp,clear:mp,forEach:fa(!1,!1)},e={get(i){return ua(this,i,!1,!0)},get size(){return da(this)},has:ha,add:dp,set:fp,delete:pp,clear:mp,forEach:fa(!1,!0)},n={get(i){return ua(this,i,!0)},get size(){return da(this,!0)},has(i){return ha.call(this,i,!0)},add:es("add"),set:es("set"),delete:es("delete"),clear:es("clear"),forEach:fa(!0,!1)},s={get(i){return ua(this,i,!0,!0)},get size(){return da(this,!0)},has(i){return ha.call(this,i,!0)},add:es("add"),set:es("set"),delete:es("delete"),clear:es("clear"),forEach:fa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=pa(i,!1,!1),n[i]=pa(i,!0,!1),e[i]=pa(i,!1,!0),s[i]=pa(i,!0,!0)}),[t,n,e,s]}const[UI,BI,$I,WI]=FI();function ad(t,e){const n=e?t?WI:$I:t?BI:UI;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(fe(n,r)&&r in s?n:s,r,i)}const jI={get:ad(!1,!1)},qI={get:ad(!1,!0)},HI={get:ad(!0,!1)},D_=new WeakMap,x_=new WeakMap,M_=new WeakMap,zI=new WeakMap;function KI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function GI(t){return t.__v_skip||!Object.isExtensible(t)?0:KI(gI(t))}function Lo(t){return $r(t)?t:ld(t,!1,MI,jI,D_)}function L_(t){return ld(t,!1,VI,qI,x_)}function V_(t){return ld(t,!0,LI,HI,M_)}function ld(t,e,n,s,r){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=GI(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function hs(t){return $r(t)?hs(t.__v_raw):!!(t&&t.__v_isReactive)}function $r(t){return!!(t&&t.__v_isReadonly)}function Ya(t){return!!(t&&t.__v_isShallow)}function F_(t){return hs(t)||$r(t)}function me(t){const e=t&&t.__v_raw;return e?me(e):t}function ec(t){return Ka(t,"__v_skip",!0),t}const io=t=>Se(t)?Lo(t):t,cd=t=>Se(t)?V_(t):t;function U_(t){us&&Qt&&(t=me(t),P_(t.dep||(t.dep=rd())))}function B_(t,e){t=me(t);const n=t.dep;n&&Bu(n)}function Ve(t){return!!(t&&t.__v_isRef===!0)}function ds(t){return W_(t,!1)}function $_(t){return W_(t,!0)}function W_(t,e){return Ve(t)?t:new QI(t,e)}class QI{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:me(e),this._value=n?e:io(e)}get value(){return U_(this),this._value}set value(e){const n=this.__v_isShallow||Ya(e)||$r(e);e=n?e:me(e),Ks(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:io(e),B_(this))}}function Ws(t){return Ve(t)?t.value:t}function Ln(t){return Z(t)?t():Ws(t)}const YI={get:(t,e,n)=>Ws(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ve(r)&&!Ve(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function j_(t){return hs(t)?t:new Proxy(t,YI)}function XI(t){const e=K(t)?new Array(t.length):{};for(const n in t)e[n]=q_(t,n);return e}class JI{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return kI(me(this._object),this._key)}}class ZI{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function e0(t,e,n){return Ve(t)?t:Z(t)?new ZI(t):Se(t)&&arguments.length>1?q_(t,e,n):ds(t)}function q_(t,e,n){const s=t[e];return Ve(s)?s:new JI(t,e,n)}class t0{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new id(e,()=>{this._dirty||(this._dirty=!0,B_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=me(this);return U_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function n0(t,e,n=!1){let s,r;const i=Z(t);return i?(s=t,r=nn):(s=t.get,r=t.set),new t0(s,r,i||!r,n)}function fs(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){tc(i,e,n)}return r}function sn(t,e,n,s){if(Z(t)){const i=fs(t,e,n,s);return i&&v_(i)&&i.catch(o=>{tc(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(sn(t[i],e,n,s));return r}function tc(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){fs(l,null,10,[t,o,a]);return}}s0(t,n,r,s)}function s0(t,e,n,s=!0){console.error(t)}let oo=!1,$u=!1;const _t=[];let pn=0;const Cr=[];let Vn=null,Os=0;const H_=Promise.resolve();let ud=null;function hd(t){const e=ud||H_;return t?e.then(this?t.bind(this):t):e}function r0(t){let e=pn+1,n=_t.length;for(;e<n;){const s=e+n>>>1,r=_t[s],i=ao(r);i<t||i===t&&r.pre?e=s+1:n=s}return e}function dd(t){(!_t.length||!_t.includes(t,oo&&t.allowRecurse?pn+1:pn))&&(t.id==null?_t.push(t):_t.splice(r0(t.id),0,t),z_())}function z_(){!oo&&!$u&&($u=!0,ud=H_.then(G_))}function i0(t){const e=_t.indexOf(t);e>pn&&_t.splice(e,1)}function o0(t){K(t)?Cr.push(...t):(!Vn||!Vn.includes(t,t.allowRecurse?Os+1:Os))&&Cr.push(t),z_()}function gp(t,e=oo?pn+1:0){for(;e<_t.length;e++){const n=_t[e];n&&n.pre&&(_t.splice(e,1),e--,n())}}function K_(t){if(Cr.length){const e=[...new Set(Cr)];if(Cr.length=0,Vn){Vn.push(...e);return}for(Vn=e,Vn.sort((n,s)=>ao(n)-ao(s)),Os=0;Os<Vn.length;Os++)Vn[Os]();Vn=null,Os=0}}const ao=t=>t.id==null?1/0:t.id,a0=(t,e)=>{const n=ao(t)-ao(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function G_(t){$u=!1,oo=!0,_t.sort(a0);const e=nn;try{for(pn=0;pn<_t.length;pn++){const n=_t[pn];n&&n.active!==!1&&fs(n,null,14)}}finally{pn=0,_t.length=0,K_(),oo=!1,ud=null,(_t.length||Cr.length)&&G_()}}function l0(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ke;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||ke;d&&(r=n.map(f=>Ke(f)?f.trim():f)),h&&(r=n.map(Ga))}let a,l=s[a=Zc(e)]||s[a=Zc(Cn(e))];!l&&i&&(l=s[a=Zc(sr(e))]),l&&sn(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,sn(c,t,6,r)}}function Q_(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Z(t)){const l=c=>{const u=Q_(c,e,!0);u&&(a=!0,lt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Se(t)&&s.set(t,null),null):(K(i)?i.forEach(l=>o[l]=null):lt(o,i),Se(t)&&s.set(t,o),o)}function nc(t,e){return!t||!Kl(e)?!1:(e=e.slice(2).replace(/Once$/,""),fe(t,e[0].toLowerCase()+e.slice(1))||fe(t,sr(e))||fe(t,e))}let Xe=null,sc=null;function Xa(t){const e=Xe;return Xe=t,sc=t&&t.type.__scopeId||null,e}function rc(t){sc=t}function ic(){sc=null}function xa(t,e=Xe,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Sp(-1);const i=Xa(e);let o;try{o=t(...r)}finally{Xa(i),s._d&&Sp(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function eu(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:y}=t;let v,T;const P=Xa(t);try{if(n.shapeFlag&4){const A=r||s;v=fn(u.call(A,A,h,i,f,d,g)),T=l}else{const A=e;v=fn(A.length>1?A(i,{attrs:l,slots:a,emit:c}):A(i,null)),T=e.props?l:c0(l)}}catch(A){ji.length=0,tc(A,t,1),v=Me(vs)}let k=v;if(T&&y!==!1){const A=Object.keys(T),{shapeFlag:z}=k;A.length&&z&7&&(o&&A.some(ed)&&(T=u0(T,o)),k=Wr(k,T))}return n.dirs&&(k=Wr(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),v=k,Xa(P),v}const c0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Kl(n))&&((e||(e={}))[n]=t[n]);return e},u0=(t,e)=>{const n={};for(const s in t)(!ed(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function h0(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?_p(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!nc(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?_p(s,o,c):!0:!!o;return!1}function _p(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!nc(n,i))return!0}return!1}function d0({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Y_="components";function Xt(t,e){return p0(Y_,t,!0,e)||t}const f0=Symbol.for("v-ndc");function p0(t,e,n=!0,s=!1){const r=Xe||He;if(r){const i=r.type;if(t===Y_){const a=oR(i,!1);if(a&&(a===e||a===Cn(e)||a===Yl(Cn(e))))return i}const o=yp(r[t]||i[t],e)||yp(r.appContext[t],e);return!o&&s?i:o}}function yp(t,e){return t&&(t[e]||t[Cn(e)]||t[Yl(Cn(e))])}const m0=t=>t.__isSuspense;function g0(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):o0(t)}const ma={};function Sr(t,e,n){return X_(t,e,n)}function X_(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ke){var a;const l=sd()===((a=He)==null?void 0:a.scope)?He:null;let c,u=!1,h=!1;if(Ve(t)?(c=()=>t.value,u=Ya(t)):hs(t)?(c=()=>t,s=!0):K(t)?(h=!0,u=t.some(A=>hs(A)||Ya(A)),c=()=>t.map(A=>{if(Ve(A))return A.value;if(hs(A))return Ms(A);if(Z(A))return fs(A,l,2)})):Z(t)?e?c=()=>fs(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),sn(t,l,3,[f])}:c=nn,e&&s){const A=c;c=()=>Ms(A())}let d,f=A=>{d=P.onStop=()=>{fs(A,l,4)}},g;if(uo)if(f=nn,e?n&&sn(e,l,3,[c(),h?[]:void 0,f]):c(),r==="sync"){const A=cR();g=A.__watcherHandles||(A.__watcherHandles=[])}else return nn;let y=h?new Array(t.length).fill(ma):ma;const v=()=>{if(P.active)if(e){const A=P.run();(s||u||(h?A.some((z,se)=>Ks(z,y[se])):Ks(A,y)))&&(d&&d(),sn(e,l,3,[A,y===ma?void 0:h&&y[0]===ma?[]:y,f]),y=A)}else P.run()};v.allowRecurse=!!e;let T;r==="sync"?T=v:r==="post"?T=()=>St(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),T=()=>dd(v));const P=new id(c,T);e?n?v():y=P.run():r==="post"?St(P.run.bind(P),l&&l.suspense):P.run();const k=()=>{P.stop(),l&&l.scope&&td(l.scope.effects,P)};return g&&g.push(k),k}function _0(t,e,n){const s=this.proxy,r=Ke(t)?t.includes(".")?J_(s,t):()=>s[t]:t.bind(s,s);let i;Z(e)?i=e:(i=e.handler,n=e);const o=He;jr(this);const a=X_(r,i.bind(s),n);return o?jr(o):js(),a}function J_(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Ms(t,e){if(!Se(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ve(t))Ms(t.value,e);else if(K(t))for(let n=0;n<t.length;n++)Ms(t[n],e);else if(Gl(t)||Ar(t))t.forEach(n=>{Ms(n,e)});else if(w_(t))for(const n in t)Ms(t[n],e);return t}function Ja(t,e){const n=Xe;if(n===null)return t;const s=cc(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=ke]=e[i];o&&(Z(o)&&(o={mounted:o,updated:o}),o.deep&&Ms(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function bs(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(oi(),sn(l,n,8,[t.el,a,t,e]),ai())}}/*! #__NO_SIDE_EFFECTS__ */function Z_(t,e){return Z(t)?(()=>lt({name:t.name},e,{setup:t}))():t}const $i=t=>!!t.type.__asyncLoader,ey=t=>t.type.__isKeepAlive;function y0(t,e){ty(t,"a",e)}function v0(t,e){ty(t,"da",e)}function ty(t,e,n=He){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(oc(e,s,n),n){let r=n.parent;for(;r&&r.parent;)ey(r.parent.vnode)&&E0(s,e,n,r),r=r.parent}}function E0(t,e,n,s){const r=oc(e,t,s,!0);ny(()=>{td(s[e],r)},n)}function oc(t,e,n=He,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;oi(),jr(n);const a=sn(e,n,t,o);return js(),ai(),a});return s?r.unshift(i):r.push(i),i}}const Xn=t=>(e,n=He)=>(!uo||t==="sp")&&oc(t,(...s)=>e(...s),n),w0=Xn("bm"),T0=Xn("m"),I0=Xn("bu"),R0=Xn("u"),A0=Xn("bum"),ny=Xn("um"),sy=Xn("sp"),C0=Xn("rtg"),S0=Xn("rtc");function b0(t,e=He){oc("ec",t,e)}function Za(t,e,n,s){let r;const i=n&&n[s];if(K(t)||Ke(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Se(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function P0(t,e,n={},s,r){if(Xe.isCE||Xe.parent&&$i(Xe.parent)&&Xe.parent.isCE)return e!=="default"&&(n.name=e),Me("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),re();const o=i&&ry(i(n)),a=Vo(nt,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function ry(t){return t.some(e=>tl(e)?!(e.type===vs||e.type===nt&&!ry(e.children)):!0)?t:null}const Wu=t=>t?gy(t)?cc(t)||t.proxy:Wu(t.parent):null,Wi=lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Wu(t.parent),$root:t=>Wu(t.root),$emit:t=>t.emit,$options:t=>fd(t),$forceUpdate:t=>t.f||(t.f=()=>dd(t.update)),$nextTick:t=>t.n||(t.n=hd.bind(t.proxy)),$watch:t=>_0.bind(t)}),tu=(t,e)=>t!==ke&&!t.__isScriptSetup&&fe(t,e),k0={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(tu(s,e))return o[e]=1,s[e];if(r!==ke&&fe(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&fe(c,e))return o[e]=3,i[e];if(n!==ke&&fe(n,e))return o[e]=4,n[e];ju&&(o[e]=0)}}const u=Wi[e];let h,d;if(u)return e==="$attrs"&&kt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ke&&fe(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,fe(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return tu(r,e)?(r[e]=n,!0):s!==ke&&fe(s,e)?(s[e]=n,!0):fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ke&&fe(t,o)||tu(e,o)||(a=i[0])&&fe(a,o)||fe(s,o)||fe(Wi,o)||fe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function vp(t){return K(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ju=!0;function N0(t){const e=fd(t),n=t.proxy,s=t.ctx;ju=!1,e.beforeCreate&&Ep(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:y,deactivated:v,beforeDestroy:T,beforeUnmount:P,destroyed:k,unmounted:A,render:z,renderTracked:se,renderTriggered:de,errorCaptured:G,serverPrefetch:ne,expose:Ie,inheritAttrs:ct,components:Nt,directives:Ut,filters:Ss}=e;if(c&&O0(c,s,null),o)for(const Ce in o){const ye=o[Ce];Z(ye)&&(s[Ce]=ye.bind(n))}if(r){const Ce=r.call(n,n);Se(Ce)&&(t.data=Lo(Ce))}if(ju=!0,i)for(const Ce in i){const ye=i[Ce],xn=Z(ye)?ye.bind(n,n):Z(ye.get)?ye.get.bind(n,n):nn,Zn=!Z(ye)&&Z(ye.set)?ye.set.bind(n):nn,un=$t({get:xn,set:Zn});Object.defineProperty(s,Ce,{enumerable:!0,configurable:!0,get:()=>un.value,set:Ct=>un.value=Ct})}if(a)for(const Ce in a)iy(a[Ce],s,n,Ce);if(l){const Ce=Z(l)?l.call(n):l;Reflect.ownKeys(Ce).forEach(ye=>{Ma(ye,Ce[ye])})}u&&Ep(u,t,"c");function ge(Ce,ye){K(ye)?ye.forEach(xn=>Ce(xn.bind(n))):ye&&Ce(ye.bind(n))}if(ge(w0,h),ge(T0,d),ge(I0,f),ge(R0,g),ge(y0,y),ge(v0,v),ge(b0,G),ge(S0,se),ge(C0,de),ge(A0,P),ge(ny,A),ge(sy,ne),K(Ie))if(Ie.length){const Ce=t.exposed||(t.exposed={});Ie.forEach(ye=>{Object.defineProperty(Ce,ye,{get:()=>n[ye],set:xn=>n[ye]=xn})})}else t.exposed||(t.exposed={});z&&t.render===nn&&(t.render=z),ct!=null&&(t.inheritAttrs=ct),Nt&&(t.components=Nt),Ut&&(t.directives=Ut)}function O0(t,e,n=nn){K(t)&&(t=qu(t));for(const s in t){const r=t[s];let i;Se(r)?"default"in r?i=Ht(r.from||s,r.default,!0):i=Ht(r.from||s):i=Ht(r),Ve(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Ep(t,e,n){sn(K(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function iy(t,e,n,s){const r=s.includes(".")?J_(n,s):()=>n[s];if(Ke(t)){const i=e[t];Z(i)&&Sr(r,i)}else if(Z(t))Sr(r,t.bind(n));else if(Se(t))if(K(t))t.forEach(i=>iy(i,e,n,s));else{const i=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(i)&&Sr(r,i,t)}}function fd(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>el(l,c,o,!0)),el(l,e,o)),Se(e)&&i.set(e,l),l}function el(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&el(t,i,n,!0),r&&r.forEach(o=>el(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=D0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const D0={data:wp,props:Tp,emits:Tp,methods:Di,computed:Di,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:Di,directives:Di,watch:M0,provide:wp,inject:x0};function wp(t,e){return e?t?function(){return lt(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function x0(t,e){return Di(qu(t),qu(e))}function qu(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function It(t,e){return t?[...new Set([].concat(t,e))]:e}function Di(t,e){return t?lt(Object.create(null),t,e):e}function Tp(t,e){return t?K(t)&&K(e)?[...new Set([...t,...e])]:lt(Object.create(null),vp(t),vp(e??{})):e}function M0(t,e){if(!t)return e;if(!e)return t;const n=lt(Object.create(null),t);for(const s in e)n[s]=It(t[s],e[s]);return n}function oy(){return{app:null,config:{isNativeTag:fI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let L0=0;function V0(t,e){return function(s,r=null){Z(s)||(s=lt({},s)),r!=null&&!Se(r)&&(r=null);const i=oy(),o=new WeakSet;let a=!1;const l=i.app={_uid:L0++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:uR,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&Z(c.install)?(o.add(c),c.install(l,...u)):Z(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const d=Me(s,r);return d.appContext=i,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,cc(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){lo=l;try{return c()}finally{lo=null}}};return l}}let lo=null;function Ma(t,e){if(He){let n=He.provides;const s=He.parent&&He.parent.provides;s===n&&(n=He.provides=Object.create(s)),n[t]=e}}function Ht(t,e,n=!1){const s=He||Xe;if(s||lo){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:lo._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Z(e)?e.call(s&&s.proxy):e}}function F0(){return!!(He||Xe||lo)}function U0(t,e,n,s=!1){const r={},i={};Ka(i,lc,1),t.propsDefaults=Object.create(null),ay(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:L_(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function B0(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=me(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(nc(t.emitsOptions,d))continue;const f=e[d];if(l)if(fe(i,d))f!==i[d]&&(i[d]=f,c=!0);else{const g=Cn(d);r[g]=Hu(l,a,g,f,t,!1)}else f!==i[d]&&(i[d]=f,c=!0)}}}else{ay(t,e,r,i)&&(c=!0);let u;for(const h in a)(!e||!fe(e,h)&&((u=sr(h))===h||!fe(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Hu(l,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!fe(e,h))&&(delete i[h],c=!0)}c&&jn(t,"set","$attrs")}function ay(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Oa(l))continue;const c=e[l];let u;r&&fe(r,u=Cn(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:nc(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=me(n),c=a||ke;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Hu(r,l,h,c[h],t,!fe(c,h))}}return o}function Hu(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=fe(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Z(l)){const{propsDefaults:c}=r;n in c?s=c[n]:(jr(r),s=c[n]=l.call(null,e),js())}else s=l}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===sr(n))&&(s=!0))}return s}function ly(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!Z(t)){const u=h=>{l=!0;const[d,f]=ly(h,e,!0);lt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Se(t)&&s.set(t,Rr),Rr;if(K(i))for(let u=0;u<i.length;u++){const h=Cn(i[u]);Ip(h)&&(o[h]=ke)}else if(i)for(const u in i){const h=Cn(u);if(Ip(h)){const d=i[u],f=o[h]=K(d)||Z(d)?{type:d}:lt({},d);if(f){const g=Cp(Boolean,f.type),y=Cp(String,f.type);f[0]=g>-1,f[1]=y<0||g<y,(g>-1||fe(f,"default"))&&a.push(h)}}}const c=[o,a];return Se(t)&&s.set(t,c),c}function Ip(t){return t[0]!=="$"}function Rp(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ap(t,e){return Rp(t)===Rp(e)}function Cp(t,e){return K(e)?e.findIndex(n=>Ap(n,t)):Z(e)&&Ap(e,t)?0:-1}const cy=t=>t[0]==="_"||t==="$stable",pd=t=>K(t)?t.map(fn):[fn(t)],$0=(t,e,n)=>{if(e._n)return e;const s=xa((...r)=>pd(e(...r)),n);return s._c=!1,s},uy=(t,e,n)=>{const s=t._ctx;for(const r in t){if(cy(r))continue;const i=t[r];if(Z(i))e[r]=$0(r,i,s);else if(i!=null){const o=pd(i);e[r]=()=>o}}},hy=(t,e)=>{const n=pd(e);t.slots.default=()=>n},W0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=me(e),Ka(e,"_",n)):uy(e,t.slots={})}else t.slots={},e&&hy(t,e);Ka(t.slots,lc,1)},j0=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ke;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(lt(r,e),!n&&a===1&&delete r._):(i=!e.$stable,uy(e,r)),o=e}else e&&(hy(t,e),o={default:1});if(i)for(const a in r)!cy(a)&&o[a]==null&&delete r[a]};function zu(t,e,n,s,r=!1){if(K(t)){t.forEach((d,f)=>zu(d,e&&(K(e)?e[f]:e),n,s,r));return}if($i(s)&&!r)return;const i=s.shapeFlag&4?cc(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ke?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ke(c)?(u[c]=null,fe(h,c)&&(h[c]=null)):Ve(c)&&(c.value=null)),Z(l))fs(l,a,12,[o,u]);else{const d=Ke(l),f=Ve(l);if(d||f){const g=()=>{if(t.f){const y=d?fe(h,l)?h[l]:u[l]:l.value;r?K(y)&&td(y,i):K(y)?y.includes(i)||y.push(i):d?(u[l]=[i],fe(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,fe(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,St(g,n)):g()}}}const St=g0;function q0(t){return H0(t)}function H0(t,e){const n=Vu();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=nn,insertStaticContent:g}=t,y=(p,m,_,E=null,I=null,C=null,L=!1,N=null,O=!!m.dynamicChildren)=>{if(p===m)return;p&&!Ti(p,m)&&(E=w(p),Ct(p,I,C,!0),p=null),m.patchFlag===-2&&(O=!1,m.dynamicChildren=null);const{type:b,ref:j,shapeFlag:B}=m;switch(b){case ac:v(p,m,_,E);break;case vs:T(p,m,_,E);break;case nu:p==null&&P(m,_,E,L);break;case nt:Nt(p,m,_,E,I,C,L,N,O);break;default:B&1?z(p,m,_,E,I,C,L,N,O):B&6?Ut(p,m,_,E,I,C,L,N,O):(B&64||B&128)&&b.process(p,m,_,E,I,C,L,N,O,D)}j!=null&&I&&zu(j,p&&p.ref,C,m||p,!m)},v=(p,m,_,E)=>{if(p==null)s(m.el=a(m.children),_,E);else{const I=m.el=p.el;m.children!==p.children&&c(I,m.children)}},T=(p,m,_,E)=>{p==null?s(m.el=l(m.children||""),_,E):m.el=p.el},P=(p,m,_,E)=>{[p.el,p.anchor]=g(p.children,m,_,E,p.el,p.anchor)},k=({el:p,anchor:m},_,E)=>{let I;for(;p&&p!==m;)I=d(p),s(p,_,E),p=I;s(m,_,E)},A=({el:p,anchor:m})=>{let _;for(;p&&p!==m;)_=d(p),r(p),p=_;r(m)},z=(p,m,_,E,I,C,L,N,O)=>{L=L||m.type==="svg",p==null?se(m,_,E,I,C,L,N,O):ne(p,m,I,C,L,N,O)},se=(p,m,_,E,I,C,L,N)=>{let O,b;const{type:j,props:B,shapeFlag:q,transition:ee,dirs:ie}=p;if(O=p.el=o(p.type,C,B&&B.is,B),q&8?u(O,p.children):q&16&&G(p.children,O,null,E,I,C&&j!=="foreignObject",L,N),ie&&bs(p,null,E,"created"),de(O,p,p.scopeId,L,E),B){for(const Re in B)Re!=="value"&&!Oa(Re)&&i(O,Re,null,B[Re],C,p.children,E,I,ut);"value"in B&&i(O,"value",null,B.value),(b=B.onVnodeBeforeMount)&&dn(b,E,p)}ie&&bs(p,null,E,"beforeMount");const be=z0(I,ee);be&&ee.beforeEnter(O),s(O,m,_),((b=B&&B.onVnodeMounted)||be||ie)&&St(()=>{b&&dn(b,E,p),be&&ee.enter(O),ie&&bs(p,null,E,"mounted")},I)},de=(p,m,_,E,I)=>{if(_&&f(p,_),E)for(let C=0;C<E.length;C++)f(p,E[C]);if(I){let C=I.subTree;if(m===C){const L=I.vnode;de(p,L,L.scopeId,L.slotScopeIds,I.parent)}}},G=(p,m,_,E,I,C,L,N,O=0)=>{for(let b=O;b<p.length;b++){const j=p[b]=N?rs(p[b]):fn(p[b]);y(null,j,m,_,E,I,C,L,N)}},ne=(p,m,_,E,I,C,L)=>{const N=m.el=p.el;let{patchFlag:O,dynamicChildren:b,dirs:j}=m;O|=p.patchFlag&16;const B=p.props||ke,q=m.props||ke;let ee;_&&Ps(_,!1),(ee=q.onVnodeBeforeUpdate)&&dn(ee,_,m,p),j&&bs(m,p,_,"beforeUpdate"),_&&Ps(_,!0);const ie=I&&m.type!=="foreignObject";if(b?Ie(p.dynamicChildren,b,N,_,E,ie,C):L||ye(p,m,N,null,_,E,ie,C,!1),O>0){if(O&16)ct(N,m,B,q,_,E,I);else if(O&2&&B.class!==q.class&&i(N,"class",null,q.class,I),O&4&&i(N,"style",B.style,q.style,I),O&8){const be=m.dynamicProps;for(let Re=0;Re<be.length;Re++){const Be=be[Re],Gt=B[Be],dr=q[Be];(dr!==Gt||Be==="value")&&i(N,Be,Gt,dr,I,p.children,_,E,ut)}}O&1&&p.children!==m.children&&u(N,m.children)}else!L&&b==null&&ct(N,m,B,q,_,E,I);((ee=q.onVnodeUpdated)||j)&&St(()=>{ee&&dn(ee,_,m,p),j&&bs(m,p,_,"updated")},E)},Ie=(p,m,_,E,I,C,L)=>{for(let N=0;N<m.length;N++){const O=p[N],b=m[N],j=O.el&&(O.type===nt||!Ti(O,b)||O.shapeFlag&70)?h(O.el):_;y(O,b,j,null,E,I,C,L,!0)}},ct=(p,m,_,E,I,C,L)=>{if(_!==E){if(_!==ke)for(const N in _)!Oa(N)&&!(N in E)&&i(p,N,_[N],null,L,m.children,I,C,ut);for(const N in E){if(Oa(N))continue;const O=E[N],b=_[N];O!==b&&N!=="value"&&i(p,N,b,O,L,m.children,I,C,ut)}"value"in E&&i(p,"value",_.value,E.value)}},Nt=(p,m,_,E,I,C,L,N,O)=>{const b=m.el=p?p.el:a(""),j=m.anchor=p?p.anchor:a("");let{patchFlag:B,dynamicChildren:q,slotScopeIds:ee}=m;ee&&(N=N?N.concat(ee):ee),p==null?(s(b,_,E),s(j,_,E),G(m.children,_,j,I,C,L,N,O)):B>0&&B&64&&q&&p.dynamicChildren?(Ie(p.dynamicChildren,q,_,I,C,L,N),(m.key!=null||I&&m===I.subTree)&&dy(p,m,!0)):ye(p,m,_,j,I,C,L,N,O)},Ut=(p,m,_,E,I,C,L,N,O)=>{m.slotScopeIds=N,p==null?m.shapeFlag&512?I.ctx.activate(m,_,E,L,O):Ss(m,_,E,I,C,L,O):Bt(p,m,O)},Ss=(p,m,_,E,I,C,L)=>{const N=p.component=tR(p,E,I);if(ey(p)&&(N.ctx.renderer=D),nR(N),N.asyncDep){if(I&&I.registerDep(N,ge),!p.el){const O=N.subTree=Me(vs);T(null,O,m,_)}return}ge(N,p,m,_,I,C,L)},Bt=(p,m,_)=>{const E=m.component=p.component;if(h0(p,m,_))if(E.asyncDep&&!E.asyncResolved){Ce(E,m,_);return}else E.next=m,i0(E.update),E.update();else m.el=p.el,E.vnode=m},ge=(p,m,_,E,I,C,L)=>{const N=()=>{if(p.isMounted){let{next:j,bu:B,u:q,parent:ee,vnode:ie}=p,be=j,Re;Ps(p,!1),j?(j.el=ie.el,Ce(p,j,L)):j=ie,B&&Da(B),(Re=j.props&&j.props.onVnodeBeforeUpdate)&&dn(Re,ee,j,ie),Ps(p,!0);const Be=eu(p),Gt=p.subTree;p.subTree=Be,y(Gt,Be,h(Gt.el),w(Gt),p,I,C),j.el=Be.el,be===null&&d0(p,Be.el),q&&St(q,I),(Re=j.props&&j.props.onVnodeUpdated)&&St(()=>dn(Re,ee,j,ie),I)}else{let j;const{el:B,props:q}=m,{bm:ee,m:ie,parent:be}=p,Re=$i(m);if(Ps(p,!1),ee&&Da(ee),!Re&&(j=q&&q.onVnodeBeforeMount)&&dn(j,be,m),Ps(p,!0),B&&ve){const Be=()=>{p.subTree=eu(p),ve(B,p.subTree,p,I,null)};Re?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Be()):Be()}else{const Be=p.subTree=eu(p);y(null,Be,_,E,p,I,C),m.el=Be.el}if(ie&&St(ie,I),!Re&&(j=q&&q.onVnodeMounted)){const Be=m;St(()=>dn(j,be,Be),I)}(m.shapeFlag&256||be&&$i(be.vnode)&&be.vnode.shapeFlag&256)&&p.a&&St(p.a,I),p.isMounted=!0,m=_=E=null}},O=p.effect=new id(N,()=>dd(b),p.scope),b=p.update=()=>O.run();b.id=p.uid,Ps(p,!0),b()},Ce=(p,m,_)=>{m.component=p;const E=p.vnode.props;p.vnode=m,p.next=null,B0(p,m.props,E,_),j0(p,m.children,_),oi(),gp(),ai()},ye=(p,m,_,E,I,C,L,N,O=!1)=>{const b=p&&p.children,j=p?p.shapeFlag:0,B=m.children,{patchFlag:q,shapeFlag:ee}=m;if(q>0){if(q&128){Zn(b,B,_,E,I,C,L,N,O);return}else if(q&256){xn(b,B,_,E,I,C,L,N,O);return}}ee&8?(j&16&&ut(b,I,C),B!==b&&u(_,B)):j&16?ee&16?Zn(b,B,_,E,I,C,L,N,O):ut(b,I,C,!0):(j&8&&u(_,""),ee&16&&G(B,_,E,I,C,L,N,O))},xn=(p,m,_,E,I,C,L,N,O)=>{p=p||Rr,m=m||Rr;const b=p.length,j=m.length,B=Math.min(b,j);let q;for(q=0;q<B;q++){const ee=m[q]=O?rs(m[q]):fn(m[q]);y(p[q],ee,_,null,I,C,L,N,O)}b>j?ut(p,I,C,!0,!1,B):G(m,_,E,I,C,L,N,O,B)},Zn=(p,m,_,E,I,C,L,N,O)=>{let b=0;const j=m.length;let B=p.length-1,q=j-1;for(;b<=B&&b<=q;){const ee=p[b],ie=m[b]=O?rs(m[b]):fn(m[b]);if(Ti(ee,ie))y(ee,ie,_,null,I,C,L,N,O);else break;b++}for(;b<=B&&b<=q;){const ee=p[B],ie=m[q]=O?rs(m[q]):fn(m[q]);if(Ti(ee,ie))y(ee,ie,_,null,I,C,L,N,O);else break;B--,q--}if(b>B){if(b<=q){const ee=q+1,ie=ee<j?m[ee].el:E;for(;b<=q;)y(null,m[b]=O?rs(m[b]):fn(m[b]),_,ie,I,C,L,N,O),b++}}else if(b>q)for(;b<=B;)Ct(p[b],I,C,!0),b++;else{const ee=b,ie=b,be=new Map;for(b=ie;b<=q;b++){const Ot=m[b]=O?rs(m[b]):fn(m[b]);Ot.key!=null&&be.set(Ot.key,b)}let Re,Be=0;const Gt=q-ie+1;let dr=!1,rp=0;const wi=new Array(Gt);for(b=0;b<Gt;b++)wi[b]=0;for(b=ee;b<=B;b++){const Ot=p[b];if(Be>=Gt){Ct(Ot,I,C,!0);continue}let hn;if(Ot.key!=null)hn=be.get(Ot.key);else for(Re=ie;Re<=q;Re++)if(wi[Re-ie]===0&&Ti(Ot,m[Re])){hn=Re;break}hn===void 0?Ct(Ot,I,C,!0):(wi[hn-ie]=b+1,hn>=rp?rp=hn:dr=!0,y(Ot,m[hn],_,null,I,C,L,N,O),Be++)}const ip=dr?K0(wi):Rr;for(Re=ip.length-1,b=Gt-1;b>=0;b--){const Ot=ie+b,hn=m[Ot],op=Ot+1<j?m[Ot+1].el:E;wi[b]===0?y(null,hn,_,op,I,C,L,N,O):dr&&(Re<0||b!==ip[Re]?un(hn,_,op,2):Re--)}}},un=(p,m,_,E,I=null)=>{const{el:C,type:L,transition:N,children:O,shapeFlag:b}=p;if(b&6){un(p.component.subTree,m,_,E);return}if(b&128){p.suspense.move(m,_,E);return}if(b&64){L.move(p,m,_,D);return}if(L===nt){s(C,m,_);for(let B=0;B<O.length;B++)un(O[B],m,_,E);s(p.anchor,m,_);return}if(L===nu){k(p,m,_);return}if(E!==2&&b&1&&N)if(E===0)N.beforeEnter(C),s(C,m,_),St(()=>N.enter(C),I);else{const{leave:B,delayLeave:q,afterLeave:ee}=N,ie=()=>s(C,m,_),be=()=>{B(C,()=>{ie(),ee&&ee()})};q?q(C,ie,be):be()}else s(C,m,_)},Ct=(p,m,_,E=!1,I=!1)=>{const{type:C,props:L,ref:N,children:O,dynamicChildren:b,shapeFlag:j,patchFlag:B,dirs:q}=p;if(N!=null&&zu(N,null,_,p,!0),j&256){m.ctx.deactivate(p);return}const ee=j&1&&q,ie=!$i(p);let be;if(ie&&(be=L&&L.onVnodeBeforeUnmount)&&dn(be,m,p),j&6)ca(p.component,_,E);else{if(j&128){p.suspense.unmount(_,E);return}ee&&bs(p,null,m,"beforeUnmount"),j&64?p.type.remove(p,m,_,I,D,E):b&&(C!==nt||B>0&&B&64)?ut(b,m,_,!1,!0):(C===nt&&B&384||!I&&j&16)&&ut(O,m,_),E&&ur(p)}(ie&&(be=L&&L.onVnodeUnmounted)||ee)&&St(()=>{be&&dn(be,m,p),ee&&bs(p,null,m,"unmounted")},_)},ur=p=>{const{type:m,el:_,anchor:E,transition:I}=p;if(m===nt){hr(_,E);return}if(m===nu){A(p);return}const C=()=>{r(_),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(p.shapeFlag&1&&I&&!I.persisted){const{leave:L,delayLeave:N}=I,O=()=>L(_,C);N?N(p.el,C,O):O()}else C()},hr=(p,m)=>{let _;for(;p!==m;)_=d(p),r(p),p=_;r(m)},ca=(p,m,_)=>{const{bum:E,scope:I,update:C,subTree:L,um:N}=p;E&&Da(E),I.stop(),C&&(C.active=!1,Ct(L,p,m,_)),N&&St(N,m),St(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},ut=(p,m,_,E=!1,I=!1,C=0)=>{for(let L=C;L<p.length;L++)Ct(p[L],m,_,E,I)},w=p=>p.shapeFlag&6?w(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),F=(p,m,_)=>{p==null?m._vnode&&Ct(m._vnode,null,null,!0):y(m._vnode||null,p,m,null,null,null,_),gp(),K_(),m._vnode=p},D={p:y,um:Ct,m:un,r:ur,mt:Ss,mc:G,pc:ye,pbc:Ie,n:w,o:t};let $,ve;return e&&([$,ve]=e(D)),{render:F,hydrate:$,createApp:V0(F,$)}}function Ps({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function z0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function dy(t,e,n=!1){const s=t.children,r=e.children;if(K(s)&&K(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=rs(r[i]),a.el=o.el),n||dy(o,a)),a.type===ac&&(a.el=o.el)}}function K0(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const G0=t=>t.__isTeleport,nt=Symbol.for("v-fgt"),ac=Symbol.for("v-txt"),vs=Symbol.for("v-cmt"),nu=Symbol.for("v-stc"),ji=[];let Jt=null;function re(t=!1){ji.push(Jt=t?null:[])}function Q0(){ji.pop(),Jt=ji[ji.length-1]||null}let co=1;function Sp(t){co+=t}function fy(t){return t.dynamicChildren=co>0?Jt||Rr:null,Q0(),co>0&&Jt&&Jt.push(t),t}function pe(t,e,n,s,r,i){return fy(V(t,e,n,s,r,i,!0))}function Vo(t,e,n,s,r){return fy(Me(t,e,n,s,r,!0))}function tl(t){return t?t.__v_isVNode===!0:!1}function Ti(t,e){return t.type===e.type&&t.key===e.key}const lc="__vInternal",py=({key:t})=>t??null,La=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ke(t)||Ve(t)||Z(t)?{i:Xe,r:t,k:e,f:!!n}:t:null);function V(t,e=null,n=null,s=0,r=null,i=t===nt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&py(e),ref:e&&La(e),scopeId:sc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Xe};return a?(md(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ke(n)?8:16),co>0&&!o&&Jt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Jt.push(l),l}const Me=Y0;function Y0(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===f0)&&(t=vs),tl(t)){const a=Wr(t,e,!0);return n&&md(a,n),co>0&&!i&&Jt&&(a.shapeFlag&6?Jt[Jt.indexOf(t)]=a:Jt.push(a)),a.patchFlag|=-2,a}if(aR(t)&&(t=t.__vccOpts),e){e=X0(e);let{class:a,style:l}=e;a&&!Ke(a)&&(e.class=ii(a)),Se(l)&&(F_(l)&&!K(l)&&(l=lt({},l)),e.style=ro(l))}const o=Ke(t)?1:m0(t)?128:G0(t)?64:Se(t)?4:Z(t)?2:0;return V(t,e,n,s,r,o,i,!0)}function X0(t){return t?F_(t)||lc in t?lt({},t):t:null}function Wr(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?J0(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&py(a),ref:e&&e.ref?n&&r?K(r)?r.concat(La(e)):[r,La(e)]:La(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==nt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Wr(t.ssContent),ssFallback:t.ssFallback&&Wr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function br(t=" ",e=0){return Me(ac,null,t,e)}function bt(t="",e=!1){return e?(re(),Vo(vs,null,t)):Me(vs,null,t)}function fn(t){return t==null||typeof t=="boolean"?Me(vs):K(t)?Me(nt,null,t.slice()):typeof t=="object"?rs(t):Me(ac,null,String(t))}function rs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Wr(t)}function md(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),md(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(lc in e)?e._ctx=Xe:r===3&&Xe&&(Xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:Xe},n=32):(e=String(e),s&64?(n=16,e=[br(e)]):n=8);t.children=e,t.shapeFlag|=n}function J0(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=ii([e.class,s.class]));else if(r==="style")e.style=ro([e.style,s.style]);else if(Kl(r)){const i=e[r],o=s[r];o&&i!==o&&!(K(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function dn(t,e,n,s=null){sn(t,e,7,[n,s])}const Z0=oy();let eR=0;function tR(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Z0,i={uid:eR++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new R_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ly(s,r),emitsOptions:Q_(s,r),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:s.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=l0.bind(null,i),t.ce&&t.ce(i),i}let He=null;const my=()=>He||Xe;let gd,fr,bp="__VUE_INSTANCE_SETTERS__";(fr=Vu()[bp])||(fr=Vu()[bp]=[]),fr.push(t=>He=t),gd=t=>{fr.length>1?fr.forEach(e=>e(t)):fr[0](t)};const jr=t=>{gd(t),t.scope.on()},js=()=>{He&&He.scope.off(),gd(null)};function gy(t){return t.vnode.shapeFlag&4}let uo=!1;function nR(t,e=!1){uo=e;const{props:n,children:s}=t.vnode,r=gy(t);U0(t,n,r,e),W0(t,s);const i=r?sR(t,e):void 0;return uo=!1,i}function sR(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ec(new Proxy(t.ctx,k0));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?iR(t):null;jr(t),oi();const i=fs(s,t,0,[t.props,r]);if(ai(),js(),v_(i)){if(i.then(js,js),e)return i.then(o=>{Pp(t,o,e)}).catch(o=>{tc(o,t,0)});t.asyncDep=i}else Pp(t,i,e)}else _y(t,e)}function Pp(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=j_(e)),_y(t,n)}let kp;function _y(t,e,n){const s=t.type;if(!t.render){if(!e&&kp&&!s.render){const r=s.template||fd(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=lt(lt({isCustomElement:i,delimiters:a},o),l);s.render=kp(r,c)}}t.render=s.render||nn}{jr(t),oi();try{N0(t)}finally{ai(),js()}}}function rR(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return kt(t,"get","$attrs"),e[n]}}))}function iR(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return rR(t)},slots:t.slots,emit:t.emit,expose:e}}function cc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(j_(ec(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wi)return Wi[n](t)},has(e,n){return n in e||n in Wi}}))}function oR(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function aR(t){return Z(t)&&"__vccOpts"in t}const $t=(t,e)=>n0(t,e,uo);function yy(t,e,n){const s=arguments.length;return s===2?Se(e)&&!K(e)?tl(e)?Me(t,null,[e]):Me(t,e):Me(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&tl(n)&&(n=[n]),Me(t,e,n))}const lR=Symbol.for("v-scx"),cR=()=>Ht(lR),uR="3.3.8",hR="http://www.w3.org/2000/svg",Ds=typeof document<"u"?document:null,Np=Ds&&Ds.createElement("template"),dR={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Ds.createElementNS(hR,t):Ds.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Ds.createTextNode(t),createComment:t=>Ds.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ds.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Np.innerHTML=s?`<svg>${t}</svg>`:t;const a=Np.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},fR=Symbol("_vtc");function pR(t,e,n){const s=t[fR];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const mR=Symbol("_vod");function gR(t,e,n){const s=t.style,r=Ke(n);if(n&&!r){if(e&&!Ke(e))for(const i in e)n[i]==null&&Ku(s,i,"");for(const i in n)Ku(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),mR in t&&(s.display=i)}}const Op=/\s*!important$/;function Ku(t,e,n){if(K(n))n.forEach(s=>Ku(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=_R(t,e);Op.test(n)?t.setProperty(sr(s),n.replace(Op,""),"important"):t[s]=n}}const Dp=["Webkit","Moz","ms"],su={};function _R(t,e){const n=su[e];if(n)return n;let s=Cn(e);if(s!=="filter"&&s in t)return su[e]=s;s=Yl(s);for(let r=0;r<Dp.length;r++){const i=Dp[r]+s;if(i in t)return su[e]=i}return e}const xp="http://www.w3.org/1999/xlink";function yR(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(xp,e.slice(6,e.length)):t.setAttributeNS(xp,e,n);else{const i=RI(e);n==null||i&&!T_(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function vR(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=T_(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function xs(t,e,n,s){t.addEventListener(e,n,s)}function ER(t,e,n,s){t.removeEventListener(e,n,s)}const Mp=Symbol("_vei");function wR(t,e,n,s,r=null){const i=t[Mp]||(t[Mp]={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=TR(e);if(s){const c=i[e]=AR(s,r);xs(t,a,c,l)}else o&&(ER(t,a,o,l),i[e]=void 0)}}const Lp=/(?:Once|Passive|Capture)$/;function TR(t){let e;if(Lp.test(t)){e={};let s;for(;s=t.match(Lp);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):sr(t.slice(2)),e]}let ru=0;const IR=Promise.resolve(),RR=()=>ru||(IR.then(()=>ru=0),ru=Date.now());function AR(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;sn(CR(s,n.value),e,5,[s])};return n.value=t,n.attached=RR(),n}function CR(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Vp=/^on[a-z]/,SR=(t,e,n,s,r=!1,i,o,a,l)=>{e==="class"?pR(t,s,r):e==="style"?gR(t,n,s):Kl(e)?ed(e)||wR(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bR(t,e,s,r))?vR(t,e,s,i,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),yR(t,e,s,r))};function bR(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Vp.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Vp.test(e)&&Ke(n)?!1:e in t}const nl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return K(e)?n=>Da(e,n):e};function PR(t){t.target.composing=!0}function Fp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Pr=Symbol("_assign"),Gu={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Pr]=nl(r);const i=s||r.props&&r.props.type==="number";xs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ga(a)),t[Pr](a)}),n&&xs(t,"change",()=>{t.value=t.value.trim()}),e||(xs(t,"compositionstart",PR),xs(t,"compositionend",Fp),xs(t,"change",Fp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t[Pr]=nl(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Ga(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},kR={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Gl(e);xs(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ga(sl(o)):sl(o));t[Pr](t.multiple?r?new Set(i):i:i[0])}),t[Pr]=nl(s)},mounted(t,{value:e}){Up(t,e)},beforeUpdate(t,e,n){t[Pr]=nl(n)},updated(t,{value:e}){Up(t,e)}};function Up(t,e){const n=t.multiple;if(!(n&&!K(e)&&!Gl(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=sl(i);if(n)K(e)?i.selected=CI(e,o)>-1:i.selected=e.has(o);else if(Xl(sl(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function sl(t){return"_value"in t?t._value:t.value}const NR=["ctrl","shift","alt","meta"],OR={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>NR.some(n=>t[`${n}Key`]&&!e.includes(n))},DR=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=OR[e[r]];if(i&&i(n,e))return}return t(n,...s)},xR={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Qu=(t,e)=>n=>{if(!("key"in n))return;const s=sr(n.key);if(e.some(r=>r===s||xR[r]===s))return t(n)},MR=lt({patchProp:SR},dR);let Bp;function LR(){return Bp||(Bp=q0(MR))}const VR=(...t)=>{const e=LR().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=FR(s);if(!r)return;const i=e._component;!Z(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function FR(t){return Ke(t)?document.querySelector(t):t}var UR=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let vy;const uc=t=>vy=t,Ey=Symbol();function Yu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var qi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(qi||(qi={}));function BR(){const t=Jl(!0),e=t.run(()=>ds({}));let n=[],s=[];const r=ec({install(i){uc(r),r._a=i,i.provide(Ey,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!UR?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const wy=()=>{};function $p(t,e,n,s=wy){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&sd()&&A_(r),r}function pr(t,...e){t.slice().forEach(n=>{n(...e)})}const $R=t=>t();function Xu(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Yu(r)&&Yu(s)&&t.hasOwnProperty(n)&&!Ve(s)&&!hs(s)?t[n]=Xu(r,s):t[n]=s}return t}const WR=Symbol();function jR(t){return!Yu(t)||!t.hasOwnProperty(WR)}const{assign:ss}=Object;function qR(t){return!!(Ve(t)&&t.effect)}function HR(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const u=XI(n.state.value[t]);return ss(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=ec($t(()=>{uc(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return l=Ty(t,c,e,n,s,!0),l}function Ty(t,e,n={},s,r,i){let o;const a=ss({actions:{}},n),l={deep:!0};let c,u,h=[],d=[],f;const g=s.state.value[t];!i&&!g&&(s.state.value[t]={}),ds({});let y;function v(G){let ne;c=u=!1,typeof G=="function"?(G(s.state.value[t]),ne={type:qi.patchFunction,storeId:t,events:f}):(Xu(s.state.value[t],G),ne={type:qi.patchObject,payload:G,storeId:t,events:f});const Ie=y=Symbol();hd().then(()=>{y===Ie&&(c=!0)}),u=!0,pr(h,ne,s.state.value[t])}const T=i?function(){const{state:ne}=n,Ie=ne?ne():{};this.$patch(ct=>{ss(ct,Ie)})}:wy;function P(){o.stop(),h=[],d=[],s._s.delete(t)}function k(G,ne){return function(){uc(s);const Ie=Array.from(arguments),ct=[],Nt=[];function Ut(ge){ct.push(ge)}function Ss(ge){Nt.push(ge)}pr(d,{args:Ie,name:G,store:z,after:Ut,onError:Ss});let Bt;try{Bt=ne.apply(this&&this.$id===t?this:z,Ie)}catch(ge){throw pr(Nt,ge),ge}return Bt instanceof Promise?Bt.then(ge=>(pr(ct,ge),ge)).catch(ge=>(pr(Nt,ge),Promise.reject(ge))):(pr(ct,Bt),Bt)}}const A={_p:s,$id:t,$onAction:$p.bind(null,d),$patch:v,$reset:T,$subscribe(G,ne={}){const Ie=$p(h,G,ne.detached,()=>ct()),ct=o.run(()=>Sr(()=>s.state.value[t],Nt=>{(ne.flush==="sync"?u:c)&&G({storeId:t,type:qi.direct,events:f},Nt)},ss({},l,ne)));return Ie},$dispose:P},z=Lo(A);s._s.set(t,z);const de=(s._a&&s._a.runWithContext||$R)(()=>s._e.run(()=>(o=Jl()).run(e)));for(const G in de){const ne=de[G];if(Ve(ne)&&!qR(ne)||hs(ne))i||(g&&jR(ne)&&(Ve(ne)?ne.value=g[G]:Xu(ne,g[G])),s.state.value[t][G]=ne);else if(typeof ne=="function"){const Ie=k(G,ne);de[G]=Ie,a.actions[G]=ne}}return ss(z,de),ss(me(z),de),Object.defineProperty(z,"$state",{get:()=>s.state.value[t],set:G=>{v(ne=>{ss(ne,G)})}}),s._p.forEach(G=>{ss(z,o.run(()=>G({store:z,app:s._a,pinia:s,options:a})))}),g&&i&&n.hydrate&&n.hydrate(z.$state,g),c=!0,u=!0,z}function Iy(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,l){const c=F0();return a=a||(c?Ht(Ey,null):null),a&&uc(a),a=vy,a._s.has(s)||(i?Ty(s,e,r,a):HR(s,r,a)),a._s.get(s)}return o.$id=s,o}const Kt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},zR={};function KR(t,e){const n=Xt("router-view");return re(),Vo(n)}const GR=Kt(zR,[["render",KR]]);/**
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
 */const Ry={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const x=function(t,e){if(!t)throw li(e)},li=function(t){return new Error("Firebase Database ("+Ry.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Ay=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},QR=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},hc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ay(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||h==null)throw new YR;const d=i<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const g=c<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class YR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cy=function(t){const e=Ay(t);return hc.encodeByteArray(e,!0)},rl=function(t){return Cy(t).replace(/\./g,"")},il=function(t){try{return hc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function XR(t){return Sy(void 0,t)}function Sy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!JR(n)||(t[n]=Sy(t[n],e[n]));return t}function JR(t){return t!=="__proto__"}/**
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
 */function ZR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const eA=()=>ZR().__FIREBASE_DEFAULTS__,tA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},nA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&il(t[1]);return e&&JSON.parse(e)},_d=()=>{try{return eA()||tA()||nA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},by=t=>{var e,n;return(n=(e=_d())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},sA=t=>{const e=by(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Py=()=>{var t;return(t=_d())===null||t===void 0?void 0:t.config},ky=t=>{var e;return(e=_d())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ho{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function rA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[rl(JSON.stringify(n)),rl(JSON.stringify(o)),a].join(".")}/**
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
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function iA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ny(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oA(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Oy(){return Ry.NODE_ADMIN===!0}function Dy(){try{return typeof indexedDB=="object"}catch{return!1}}function aA(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const lA="FirebaseError";class On extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=lA,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ci.prototype.create)}}class ci{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?cA(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new On(r,a,s)}}function cA(t,e){return t.replace(uA,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const uA=/\{\$([^}]+)}/g;/**
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
 */function fo(t){return JSON.parse(t)}function rt(t){return JSON.stringify(t)}/**
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
 */const xy=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=fo(il(i[0])||""),n=fo(il(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},hA=function(t){const e=xy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},dA=function(t){const e=xy(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Jn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function qr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ju(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ol(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function al(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Wp(i)&&Wp(o)){if(!al(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Wp(t){return t!==null&&typeof t=="object"}/**
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
 */function ui(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class fA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):h<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const d=(r<<5|r>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function pA(t,e){const n=new mA(t,e);return n.subscribe.bind(n)}class mA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");gA(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=iu),r.error===void 0&&(r.error=iu),r.complete===void 0&&(r.complete=iu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function iu(){}function _A(t,e){return`${t} failed: ${e} argument `}/**
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
 */const yA=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,x(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},dc=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Vt(t){return t&&t._delegate?t._delegate:t}class on{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ks="[DEFAULT]";/**
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
 */class vA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ho;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wA(e))try{this.getOrInitializeService({instanceIdentifier:ks})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=ks){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ks){return this.instances.has(e)}getOptions(e=ks){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:EA(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ks){return this.component?this.component.multipleInstances?e:ks:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function EA(t){return t===ks?void 0:t}function wA(t){return t.instantiationMode==="EAGER"}/**
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
 */class TA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const IA={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},RA=oe.INFO,AA={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},CA=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=AA[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fo{constructor(e){this.name=e,this._logLevel=RA,this._logHandler=CA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?IA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const SA=(t,e)=>e.some(n=>t instanceof n);let jp,qp;function bA(){return jp||(jp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function PA(){return qp||(qp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const My=new WeakMap,Zu=new WeakMap,Ly=new WeakMap,ou=new WeakMap,vd=new WeakMap;function kA(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ps(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&My.set(n,t)}).catch(()=>{}),vd.set(e,t),e}function NA(t){if(Zu.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Zu.set(t,e)}let eh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ly.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ps(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function OA(t){eh=t(eh)}function DA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(au(this),e,...n);return Ly.set(s,e.sort?e.sort():[e]),ps(s)}:PA().includes(t)?function(...e){return t.apply(au(this),e),ps(My.get(this))}:function(...e){return ps(t.apply(au(this),e))}}function xA(t){return typeof t=="function"?DA(t):(t instanceof IDBTransaction&&NA(t),SA(t,bA())?new Proxy(t,eh):t)}function ps(t){if(t instanceof IDBRequest)return kA(t);if(ou.has(t))return ou.get(t);const e=xA(t);return e!==t&&(ou.set(t,e),vd.set(e,t)),e}const au=t=>vd.get(t);function MA(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=ps(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ps(o.result),l.oldVersion,l.newVersion,ps(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const LA=["get","getKey","getAll","getAllKeys","count"],VA=["put","add","delete","clear"],lu=new Map;function Hp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lu.get(e))return lu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=VA.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||LA.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return lu.set(e,i),i}OA(t=>({...t,get:(e,n,s)=>Hp(e,n)||t.get(e,n,s),has:(e,n)=>!!Hp(e,n)||t.has(e,n)}));/**
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
 */class FA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(UA(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function UA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const th="@firebase/app",zp="0.9.23";/**
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
 */const Gs=new Fo("@firebase/app"),BA="@firebase/app-compat",$A="@firebase/analytics-compat",WA="@firebase/analytics",jA="@firebase/app-check-compat",qA="@firebase/app-check",HA="@firebase/auth",zA="@firebase/auth-compat",KA="@firebase/database",GA="@firebase/database-compat",QA="@firebase/functions",YA="@firebase/functions-compat",XA="@firebase/installations",JA="@firebase/installations-compat",ZA="@firebase/messaging",eC="@firebase/messaging-compat",tC="@firebase/performance",nC="@firebase/performance-compat",sC="@firebase/remote-config",rC="@firebase/remote-config-compat",iC="@firebase/storage",oC="@firebase/storage-compat",aC="@firebase/firestore",lC="@firebase/firestore-compat",cC="firebase",uC="10.6.0";/**
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
 */const nh="[DEFAULT]",hC={[th]:"fire-core",[BA]:"fire-core-compat",[WA]:"fire-analytics",[$A]:"fire-analytics-compat",[qA]:"fire-app-check",[jA]:"fire-app-check-compat",[HA]:"fire-auth",[zA]:"fire-auth-compat",[KA]:"fire-rtdb",[GA]:"fire-rtdb-compat",[QA]:"fire-fn",[YA]:"fire-fn-compat",[XA]:"fire-iid",[JA]:"fire-iid-compat",[ZA]:"fire-fcm",[eC]:"fire-fcm-compat",[tC]:"fire-perf",[nC]:"fire-perf-compat",[sC]:"fire-rc",[rC]:"fire-rc-compat",[iC]:"fire-gcs",[oC]:"fire-gcs-compat",[aC]:"fire-fst",[lC]:"fire-fst-compat","fire-js":"fire-js",[cC]:"fire-js-all"};/**
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
 */const ll=new Map,sh=new Map;function dC(t,e){try{t.container.addComponent(e)}catch(n){Gs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Sn(t){const e=t.name;if(sh.has(e))return Gs.debug(`There were multiple attempts to register component ${e}.`),!1;sh.set(e,t);for(const n of ll.values())dC(n,t);return!0}function Ed(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const fC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ms=new ci("app","Firebase",fC);/**
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
 */class pC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new on("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ms.create("app-deleted",{appName:this._name})}}/**
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
 */const Rs=uC;function Vy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:nh,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw ms.create("bad-app-name",{appName:String(r)});if(n||(n=Py()),!n)throw ms.create("no-options");const i=ll.get(r);if(i){if(al(n,i.options)&&al(s,i.config))return i;throw ms.create("duplicate-app",{appName:r})}const o=new TA(r);for(const l of sh.values())o.addComponent(l);const a=new pC(n,s,o);return ll.set(r,a),a}function wd(t=nh){const e=ll.get(t);if(!e&&t===nh&&Py())return Vy();if(!e)throw ms.create("no-app",{appName:t});return e}function Mt(t,e,n){var s;let r=(s=hC[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gs.warn(a.join(" "));return}Sn(new on(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const mC="firebase-heartbeat-database",gC=1,po="firebase-heartbeat-store";let cu=null;function Fy(){return cu||(cu=MA(mC,gC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(po)}}}).catch(t=>{throw ms.create("idb-open",{originalErrorMessage:t.message})})),cu}async function _C(t){try{return await(await Fy()).transaction(po).objectStore(po).get(Uy(t))}catch(e){if(e instanceof On)Gs.warn(e.message);else{const n=ms.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gs.warn(n.message)}}}async function Kp(t,e){try{const s=(await Fy()).transaction(po,"readwrite");await s.objectStore(po).put(e,Uy(t)),await s.done}catch(n){if(n instanceof On)Gs.warn(n.message);else{const s=ms.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gs.warn(s.message)}}}function Uy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const yC=1024,vC=30*24*60*60*1e3;class EC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Gp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=vC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gp(),{heartbeatsToSend:s,unsentEntries:r}=wC(this._heartbeatsCache.heartbeats),i=rl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Gp(){return new Date().toISOString().substring(0,10)}function wC(t,e=yC){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Qp(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Qp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class TC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dy()?aA().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _C(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Kp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Kp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Qp(t){return rl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function IC(t){Sn(new on("platform-logger",e=>new FA(e),"PRIVATE")),Sn(new on("heartbeat",e=>new EC(e),"PRIVATE")),Mt(th,zp,t),Mt(th,zp,"esm2017"),Mt("fire-js","")}IC("");function Td(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function By(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RC=By,$y=new ci("auth","Firebase",By());/**
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
 */const cl=new Fo("@firebase/auth");function AC(t,...e){cl.logLevel<=oe.WARN&&cl.warn(`Auth (${Rs}): ${t}`,...e)}function Va(t,...e){cl.logLevel<=oe.ERROR&&cl.error(`Auth (${Rs}): ${t}`,...e)}/**
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
 */function bn(t,...e){throw Id(t,...e)}function wn(t,...e){return Id(t,...e)}function Wy(t,e,n){const s=Object.assign(Object.assign({},RC()),{[e]:n});return new ci("auth","Firebase",s).create(e,{appName:t.name})}function CC(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&bn(t,"argument-error"),Wy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Id(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return $y.create(t,...e)}function J(t,e,...n){if(!t)throw Id(e,...n)}function Un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Va(e),new Error(e)}function Kn(t,e){t||Un(e)}/**
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
 */function rh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function SC(){return Yp()==="http:"||Yp()==="https:"}function Yp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function bC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SC()||iA()||"connection"in navigator)?navigator.onLine:!0}function PC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Uo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=yd()||Ny()}get(){return bC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Rd(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class jy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const kC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const NC=new Uo(3e4,6e4);function Ad(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function hi(t,e,n,s,r={}){return qy(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ui(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),jy.fetch()(Hy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function qy(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},kC),e);try{const r=new DC(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ga(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ga(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ga(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ga(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Wy(t,u,c);bn(t,u)}}catch(r){if(r instanceof On)throw r;bn(t,"network-request-failed",{message:String(r)})}}async function OC(t,e,n,s,r={}){const i=await hi(t,e,n,s,r);return"mfaPendingCredential"in i&&bn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Hy(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Rd(t.config,r):`${t.config.apiScheme}://${r}`}class DC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(wn(this.auth,"network-request-failed")),NC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ga(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=wn(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function xC(t,e){return hi(t,"POST","/v1/accounts:delete",e)}async function MC(t,e){return hi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Hi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LC(t,e=!1){const n=Vt(t),s=await n.getIdToken(e),r=Cd(s);J(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Hi(uu(r.auth_time)),issuedAtTime:Hi(uu(r.iat)),expirationTime:Hi(uu(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function uu(t){return Number(t)*1e3}function Cd(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Va("JWT malformed, contained fewer than 3 sections"),null;try{const r=il(n);return r?JSON.parse(r):(Va("Failed to decode base64 JWT payload"),null)}catch(r){return Va("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function VC(t){const e=Cd(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function mo(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof On&&FC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function FC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class UC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hi(this.lastLoginAt),this.creationTime=Hi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ul(t){var e;const n=t.auth,s=await t.getIdToken(),r=await mo(t,MC(n,{idToken:s}));J(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?WC(i.providerUserInfo):[],a=$C(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new zy(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function BC(t){const e=Vt(t);await ul(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $C(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function WC(t){return t.map(e=>{var{providerId:n}=e,s=Td(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function jC(t,e){const n=await qy(t,{},async()=>{const s=ui({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Hy(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",jy.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qC(t,e){return hi(t,"POST","/v2/accounts:revokeToken",Ad(t,e))}/**
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
 */class go{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):VC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await jC(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new go;return s&&(J(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(J(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new go,this.toJSON())}_performRefresh(){return Un("not implemented")}}/**
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
 */function ts(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qs{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Td(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new UC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new zy(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await mo(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LC(this,e)}reload(){return BC(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ul(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await mo(this,xC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:A,isAnonymous:z,providerData:se,stsTokenManager:de}=n;J(k&&de,e,"internal-error");const G=go.fromJSON(this.name,de);J(typeof k=="string",e,"internal-error"),ts(h,e.name),ts(d,e.name),J(typeof A=="boolean",e,"internal-error"),J(typeof z=="boolean",e,"internal-error"),ts(f,e.name),ts(g,e.name),ts(y,e.name),ts(v,e.name),ts(T,e.name),ts(P,e.name);const ne=new qs({uid:k,auth:e,email:d,emailVerified:A,displayName:h,isAnonymous:z,photoURL:g,phoneNumber:f,tenantId:y,stsTokenManager:G,createdAt:T,lastLoginAt:P});return se&&Array.isArray(se)&&(ne.providerData=se.map(Ie=>Object.assign({},Ie))),v&&(ne._redirectEventId=v),ne}static async _fromIdTokenResponse(e,n,s=!1){const r=new go;r.updateFromServerResponse(n);const i=new qs({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ul(i),i}}/**
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
 */const Xp=new Map;function Bn(t){Kn(t instanceof Function,"Expected a class definition");let e=Xp.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xp.set(t,e),e)}/**
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
 */class Ky{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ky.type="NONE";const Jp=Ky;/**
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
 */function Fa(t,e,n){return`firebase:${t}:${e}:${n}`}class kr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Fa(this.userKey,r.apiKey,i),this.fullPersistenceKey=Fa("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new kr(Bn(Jp),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||Bn(Jp);const o=Fa(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=qs._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new kr(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new kr(i,e,s))}}/**
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
 */function Zp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jy(e))return"Blackberry";if(Zy(e))return"Webos";if(Sd(e))return"Safari";if((e.includes("chrome/")||Qy(e))&&!e.includes("edge/"))return"Chrome";if(Xy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Gy(t=wt()){return/firefox\//i.test(t)}function Sd(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qy(t=wt()){return/crios\//i.test(t)}function Yy(t=wt()){return/iemobile/i.test(t)}function Xy(t=wt()){return/android/i.test(t)}function Jy(t=wt()){return/blackberry/i.test(t)}function Zy(t=wt()){return/webos/i.test(t)}function fc(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function HC(t=wt()){var e;return fc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zC(){return oA()&&document.documentMode===10}function ev(t=wt()){return fc(t)||Xy(t)||Zy(t)||Jy(t)||/windows phone/i.test(t)||Yy(t)}function KC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function tv(t,e=[]){let n;switch(t){case"Browser":n=Zp(wt());break;case"Worker":n=`${Zp(wt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rs}/${s}`}/**
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
 */class GC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function QC(t,e={}){return hi(t,"GET","/v2/passwordPolicy",Ad(t,e))}/**
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
 */const YC=6;class XC{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:YC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class JC{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new em(this),this.idTokenSubscription=new em(this),this.beforeStateQueue=new GC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$y,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await kr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ul(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=PC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Vt(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await QC(this),n=new XC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ci("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await qC(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await kr.create(this,[Bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&AC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function pc(t){return Vt(t)}class em{constructor(e){this.auth=e,this.observer=null,this.addObserver=pA(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function ZC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function eS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=wn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",ZC().appendChild(s)})}function tS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function nS(t,e){const n=Ed(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(al(i,e??{}))return r;bn(r,"already-initialized")}return n.initialize({options:e})}function sS(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function rS(t,e,n){const s=pc(t);J(s._canInitEmulator,s,"emulator-config-failed"),J(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=nv(e),{host:o,port:a}=iS(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||oS()}function nv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function iS(t){const e=nv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:tm(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:tm(o)}}}function tm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class sv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Un("not implemented")}_getIdTokenResponse(e){return Un("not implemented")}_linkToIdToken(e,n){return Un("not implemented")}_getReauthenticationResolver(e){return Un("not implemented")}}/**
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
 */async function Nr(t,e){return OC(t,"POST","/v1/accounts:signInWithIdp",Ad(t,e))}/**
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
 */const aS="http://localhost";class Qs extends sv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Td(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Qs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Nr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Nr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Nr(e,n)}buildRequest(){const e={requestUri:aS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ui(n)}return e}}/**
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
 */class bd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bo extends bd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class os extends Bo{constructor(){super("facebook.com")}static credential(e){return Qs._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return os.credentialFromTaggedObject(e)}static credentialFromError(e){return os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return os.credential(e.oauthAccessToken)}catch{return null}}}os.FACEBOOK_SIGN_IN_METHOD="facebook.com";os.PROVIDER_ID="facebook.com";/**
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
 */class Fn extends Bo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qs._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Fn.credential(n,s)}catch{return null}}}Fn.GOOGLE_SIGN_IN_METHOD="google.com";Fn.PROVIDER_ID="google.com";/**
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
 */class as extends Bo{constructor(){super("github.com")}static credential(e){return Qs._fromParams({providerId:as.PROVIDER_ID,signInMethod:as.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return as.credentialFromTaggedObject(e)}static credentialFromError(e){return as.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return as.credential(e.oauthAccessToken)}catch{return null}}}as.GITHUB_SIGN_IN_METHOD="github.com";as.PROVIDER_ID="github.com";/**
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
 */class ls extends Bo{constructor(){super("twitter.com")}static credential(e,n){return Qs._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ls.credentialFromTaggedObject(e)}static credentialFromError(e){return ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ls.credential(n,s)}catch{return null}}}ls.TWITTER_SIGN_IN_METHOD="twitter.com";ls.PROVIDER_ID="twitter.com";/**
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
 */class Hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await qs._fromIdTokenResponse(e,s,r),o=nm(s);return new Hr({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=nm(s);return new Hr({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function nm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class hl extends On{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,hl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new hl(e,n,s,r)}}function rv(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?hl._fromErrorAndOperation(t,i,e,s):i})}async function lS(t,e,n=!1){const s=await mo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hr._forOperation(t,"link",s)}/**
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
 */async function cS(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await mo(t,rv(s,r,e,t),n);J(i.idToken,s,"internal-error");const o=Cd(i.idToken);J(o,s,"internal-error");const{sub:a}=o;return J(t.uid===a,s,"user-mismatch"),Hr._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&bn(s,"user-mismatch"),i}}/**
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
 */async function uS(t,e,n=!1){const s="signIn",r=await rv(t,s,e),i=await Hr._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function hS(t,e,n,s){return Vt(t).onIdTokenChanged(e,n,s)}function dS(t,e,n){return Vt(t).beforeAuthStateChanged(e,n)}const dl="__sak";/**
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
 */class iv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(dl,"1"),this.storage.removeItem(dl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function fS(){const t=wt();return Sd(t)||fc(t)}const pS=1e3,mS=10;class ov extends iv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fS()&&KC(),this.fallbackToPolling=ev(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);zC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,mS):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},pS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ov.type="LOCAL";const gS=ov;/**
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
 */class av extends iv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}av.type="SESSION";const lv=av;/**
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
 */function _S(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class mc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new mc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await _S(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mc.receivers=[];/**
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
 */function Pd(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class yS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Pd("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Tn(){return window}function vS(t){Tn().location.href=t}/**
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
 */function cv(){return typeof Tn().WorkerGlobalScope<"u"&&typeof Tn().importScripts=="function"}async function ES(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function TS(){return cv()?self:null}/**
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
 */const uv="firebaseLocalStorageDb",IS=1,fl="firebaseLocalStorage",hv="fbase_key";class $o{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gc(t,e){return t.transaction([fl],e?"readwrite":"readonly").objectStore(fl)}function RS(){const t=indexedDB.deleteDatabase(uv);return new $o(t).toPromise()}function ih(){const t=indexedDB.open(uv,IS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(fl,{keyPath:hv})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(fl)?e(s):(s.close(),await RS(),e(await ih()))})})}async function sm(t,e,n){const s=gc(t,!0).put({[hv]:e,value:n});return new $o(s).toPromise()}async function AS(t,e){const n=gc(t,!1).get(e),s=await new $o(n).toPromise();return s===void 0?null:s.value}function rm(t,e){const n=gc(t,!0).delete(e);return new $o(n).toPromise()}const CS=800,SS=3;class dv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ih(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>SS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mc._getInstance(TS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ES(),!this.activeServiceWorker)return;this.sender=new yS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ih();return await sm(e,dl,"1"),await rm(e,dl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>sm(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>AS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>rm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=gc(r,!1).getAll();return new $o(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dv.type="LOCAL";const bS=dv;new Uo(3e4,6e4);/**
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
 */function fv(t,e){return e?Bn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class kd extends sv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Nr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Nr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Nr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function PS(t){return uS(t.auth,new kd(t),t.bypassAuthState)}function kS(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),cS(n,new kd(t),t.bypassAuthState)}async function NS(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),lS(n,new kd(t),t.bypassAuthState)}/**
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
 */class pv{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PS;case"linkViaPopup":case"linkViaRedirect":return NS;case"reauthViaPopup":case"reauthViaRedirect":return kS;default:bn(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const OS=new Uo(2e3,1e4);async function DS(t,e,n){const s=pc(t);CC(t,e,bd);const r=fv(s,n);return new Ls(s,"signInViaPopup",e,r).executeNotNull()}class Ls extends pv{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Ls.currentPopupAction&&Ls.currentPopupAction.cancel(),Ls.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=Pd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ls.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OS.get())};e()}}Ls.currentPopupAction=null;/**
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
 */const xS="pendingRedirect",Ua=new Map;class MS extends pv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ua.get(this.auth._key());if(!e){try{const s=await LS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ua.set(this.auth._key(),e)}return this.bypassAuthState||Ua.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LS(t,e){const n=US(e),s=FS(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function VS(t,e){Ua.set(t._key(),e)}function FS(t){return Bn(t._redirectPersistence)}function US(t){return Fa(xS,t.config.apiKey,t.name)}async function BS(t,e,n=!1){const s=pc(t),r=fv(s,e),o=await new MS(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const $S=10*60*1e3;class WS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!mv(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$S&&this.cachedEventUids.clear(),this.cachedEventUids.has(im(e))}saveEventToCache(e){this.cachedEventUids.add(im(e)),this.lastProcessedEventTime=Date.now()}}function im(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mv(t);default:return!1}}/**
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
 */async function qS(t,e={}){return hi(t,"GET","/v1/projects",e)}/**
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
 */const HS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zS=/^https?/;async function KS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qS(t);for(const n of e)try{if(GS(n))return}catch{}bn(t,"unauthorized-domain")}function GS(t){const e=rh(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!zS.test(n))return!1;if(HS.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const QS=new Uo(3e4,6e4);function om(){const t=Tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function YS(t){return new Promise((e,n)=>{var s,r,i;function o(){om(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{om(),n(wn(t,"network-request-failed"))},timeout:QS.get()})}if(!((r=(s=Tn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Tn().gapi)===null||i===void 0)&&i.load)o();else{const a=tS("iframefcb");return Tn()[a]=()=>{gapi.load?o():n(wn(t,"network-request-failed"))},eS(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ba=null,e})}let Ba=null;function XS(t){return Ba=Ba||YS(t),Ba}/**
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
 */const JS=new Uo(5e3,15e3),ZS="__/auth/iframe",eb="emulator/auth/iframe",tb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sb(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rd(e,eb):`https://${t.config.authDomain}/${ZS}`,s={apiKey:e.apiKey,appName:t.name,v:Rs},r=nb.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ui(s).slice(1)}`}async function rb(t){const e=await XS(t),n=Tn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:sb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tb,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),a=Tn().setTimeout(()=>{i(o)},JS.get());function l(){Tn().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const ib={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ob=500,ab=600,lb="_blank",cb="http://localhost";class am{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ub(t,e,n,s=ob,r=ab){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ib),{width:s.toString(),height:r.toString(),top:i,left:o}),c=wt().toLowerCase();n&&(a=Qy(c)?lb:n),Gy(c)&&(e=e||cb,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(HC(c)&&a!=="_self")return hb(e||"",a),new am(null);const h=window.open(e||"",a,u);J(h,t,"popup-blocked");try{h.focus()}catch{}return new am(h)}function hb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const db="__/auth/handler",fb="emulator/auth/handler",pb=encodeURIComponent("fac");async function lm(t,e,n,s,r,i){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Rs,eventId:r};if(e instanceof bd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ju(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Bo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${pb}=${encodeURIComponent(l)}`:"";return`${mb(t)}?${ui(a).slice(1)}${c}`}function mb({config:t}){return t.emulator?Rd(t,fb):`https://${t.authDomain}/${db}`}/**
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
 */const hu="webStorageSupport";class gb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lv,this._completeRedirectFn=BS,this._overrideRedirectResult=VS}async _openPopup(e,n,s,r){var i;Kn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await lm(e,n,s,rh(),r);return ub(e,o,Pd())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await lm(e,n,s,rh(),r);return vS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Kn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await rb(e),s=new WS(e);return n.register("authEvent",r=>(J(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hu,{type:hu},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[hu];o!==void 0&&n(!!o),bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ev()||Sd()||fc()}}const _b=gb;var cm="@firebase/auth",um="1.4.0";/**
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
 */class yb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Eb(t){Sn(new on("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tv(t)},c=new JC(s,r,i,l);return sS(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Sn(new on("auth-internal",e=>{const n=pc(e.getProvider("auth").getImmediate());return(s=>new yb(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(cm,um,vb(t)),Mt(cm,um,"esm2017")}/**
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
 */const wb=5*60,Tb=ky("authIdTokenMaxAge")||wb;let hm=null;const Ib=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Tb)return;const r=n==null?void 0:n.token;hm!==r&&(hm=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function oh(t=wd()){const e=Ed(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nS(t,{popupRedirectResolver:_b,persistence:[bS,gS,lv]}),s=ky("authTokenSyncURL");if(s){const i=Ib(s);dS(n,i,()=>i(n.currentUser)),hS(n,o=>i(o))}const r=by("auth");return r&&rS(n,`http://${r}`),n}Eb("Browser");/**
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
 */const Rb=new Map,Ab={activated:!1,tokenObservers:[]};function an(t){return Rb.get(t)||Object.assign({},Ab)}const dm={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class Cb{constructor(e,n,s,r,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ho,await Sb(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ho,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function Sb(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const bb={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},pl=new ci("appCheck","AppCheck",bb);function gv(t){if(!an(t).activated)throw pl.create("use-before-activation",{appName:t.name})}/**
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
 */const Pb="firebase-app-check-database",kb=1,ah="firebase-app-check-store";let _a=null;function Nb(){return _a||(_a=new Promise((t,e)=>{try{const n=indexedDB.open(Pb,kb);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var r;e(pl.create("storage-open",{originalErrorMessage:(r=s.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore(ah,{keyPath:"compositeKey"})}}}catch(n){e(pl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),_a)}function Ob(t,e){return Db(xb(t),e)}async function Db(t,e){const s=(await Nb()).transaction(ah,"readwrite"),i=s.objectStore(ah).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},s.onerror=l=>{var c;a(pl.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function xb(t){return`${t.options.appId}-${t.name}`}/**
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
 */const lh=new Fo("@firebase/app-check");function fm(t,e){return Dy()?Ob(t,e).catch(n=>{lh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const Mb={error:"UNKNOWN_ERROR"};function Lb(t){return hc.encodeString(JSON.stringify(t),!1)}async function ch(t,e=!1){const n=t.app;gv(n);const s=an(n);let r=s.token,i;if(r&&!xi(r)&&(s.token=void 0,r=void 0),!r){const l=await s.cachedTokenPromise;l&&(xi(l)?r=l:await fm(n,void 0))}if(!e&&r&&xi(r))return{token:r.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),r=await an(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?lh.warn(l.message):lh.error(l),i=l}let a;return r?i?xi(r)?a={token:r.token,internalError:i}:a=mm(i):(a={token:r.token},s.token=r,await fm(n,r)):a=mm(i),o&&Bb(n,a),a}async function Vb(t){const e=t.app;gv(e);const{provider:n}=an(e);{const{token:s}=await n.getToken();return{token:s}}}function Fb(t,e,n,s){const{app:r}=t,i=an(r),o={next:n,error:s,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&xi(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),pm(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>pm(t))}function _v(t,e){const n=an(t),s=n.tokenObservers.filter(r=>r.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function pm(t){const{app:e}=t,n=an(e);let s=n.tokenRefresher;s||(s=Ub(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function Ub(t){const{app:e}=t;return new Cb(async()=>{const n=an(e);let s;if(n.token?s=await ch(t,!0):s=await ch(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=an(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,r),Math.max(0,s-Date.now())}else return 0},dm.RETRIAL_MIN_WAIT,dm.RETRIAL_MAX_WAIT)}function Bb(t,e){const n=an(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function xi(t){return t.expireTimeMillis-Date.now()>0}function mm(t){return{token:Lb(Mb),error:t}}/**
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
 */class $b{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=an(this.app);for(const n of e)_v(this.app,n.next);return Promise.resolve()}}function Wb(t,e){return new $b(t,e)}function jb(t){return{getToken:e=>ch(t,e),getLimitedUseToken:()=>Vb(t),addTokenListener:e=>Fb(t,"INTERNAL",e),removeTokenListener:e=>_v(t.app,e)}}const qb="@firebase/app-check",Hb="0.8.0",zb="app-check",gm="app-check-internal";function Kb(){Sn(new on(zb,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Wb(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(gm).initialize()})),Sn(new on(gm,t=>{const e=t.getProvider("app-check").getImmediate();return jb(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Mt(qb,Hb)}Kb();var Gb="firebase",Qb="10.6.0";/**
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
 */Mt(Gb,Qb,"app");const yv=Symbol("firebaseApp");function Nd(t){return my()&&Ht(yv,null)||wd(t)}const gn=()=>{};function Od(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function Yb(t,e,n){const s=(""+e).split("."),r=s.pop(),i=s.reduce((o,a)=>o&&o[a],t);if(i!=null)return Array.isArray(i)?i.splice(Number(r),1,n):i[r]=n}function rr(t){return!!t&&typeof t=="object"}const Xb=Object.prototype;function Jb(t){return rr(t)&&Object.getPrototypeOf(t)===Xb}function Dd(t){return rr(t)&&t.type==="document"}function Zb(t){return rr(t)&&t.type==="collection"}function eP(t){return Dd(t)||Zb(t)}function tP(t){return rr(t)&&t.type==="query"}function nP(t){return rr(t)&&"ref"in t}function sP(t){return rr(t)&&typeof t.bucket=="string"}function rP(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const iP=Symbol.for("v-scx");function oP(){return!!Ht(iP,0)}const ya=new WeakMap;function aP(t,e){if(!ya.has(t)){const n=Jl(!0);ya.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),ya.delete(t)}}return ya.get(t)}const _m="@firebase/database",ym="1.0.1";/**
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
 */let vv="";function lP(t){vv=t}/**
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
 */class cP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),rt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:fo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class uP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Jn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ev=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new cP(e)}}catch{}return new uP},Vs=Ev("localStorage"),uh=Ev("sessionStorage");/**
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
 */const Or=new Fo("@firebase/database"),hP=function(){let t=1;return function(){return t++}}(),wv=function(t){const e=yA(t),n=new fA;n.update(e);const s=n.digest();return hc.encodeByteArray(s)},Wo=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Wo.apply(null,s):typeof s=="object"?e+=rt(s):e+=s,e+=" "}return e};let Hs=null,vm=!0;const dP=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Or.logLevel=oe.VERBOSE,Hs=Or.log.bind(Or),e&&uh.set("logging_enabled",!0)):typeof t=="function"?Hs=t:(Hs=null,uh.remove("logging_enabled"))},pt=function(...t){if(vm===!0&&(vm=!1,Hs===null&&uh.get("logging_enabled")===!0&&dP(!0)),Hs){const e=Wo.apply(null,t);Hs(e)}},jo=function(t){return function(...e){pt(t,...e)}},hh=function(...t){const e="FIREBASE INTERNAL ERROR: "+Wo(...t);Or.error(e)},Ys=function(...t){const e=`FIREBASE FATAL ERROR: ${Wo(...t)}`;throw Or.error(e),new Error(e)},Lt=function(...t){const e="FIREBASE WARNING: "+Wo(...t);Or.warn(e)},fP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Lt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Tv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},pP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},zr="[MIN_NAME]",Xs="[MAX_NAME]",di=function(t,e){if(t===e)return 0;if(t===zr||e===Xs)return-1;if(e===zr||t===Xs)return 1;{const n=Em(t),s=Em(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},mP=function(t,e){return t===e?0:t<e?-1:1},Ii=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+rt(e))},xd=function(t){if(typeof t!="object"||t===null)return rt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=rt(e[s]),n+=":",n+=xd(t[e[s]]);return n+="}",n},Iv=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function zt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Rv=function(t){x(!Tv(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,a,l;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(r?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},gP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},_P=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},yP=new RegExp("^-?(0*)\\d{1,10}$"),vP=-2147483648,EP=2147483647,Em=function(t){if(yP.test(t)){const e=Number(t);if(e>=vP&&e<=EP)return e}return null},qo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Lt("Exception was thrown by user callback.",n),e},Math.floor(0))}},wP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},zi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class TP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Lt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class IP{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(pt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Lt(e)}}class dh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}dh.OWNER="owner";/**
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
 */const Md="5",Av="v",Cv="s",Sv="r",bv="f",Pv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,kv="ls",Nv="p",fh="ac",Ov="websocket",Dv="long_polling";/**
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
 */class RP{constructor(e,n,s,r,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Vs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Vs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function AP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function xv(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let s;if(e===Ov)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Dv)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);AP(t)&&(n.ns=t.namespace);const r=[];return zt(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
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
 */class CP{constructor(){this.counters_={}}incrementCounter(e,n=1){Jn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return XR(this.counters_)}}/**
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
 */const du={},fu={};function Ld(t){const e=t.toString();return du[e]||(du[e]=new CP),du[e]}function SP(t,e){const n=t.toString();return fu[n]||(fu[n]=e()),fu[n]}/**
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
 */class bP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&qo(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const wm="start",PP="close",kP="pLPCommand",NP="pRTLPCB",Mv="id",Lv="pw",Vv="ser",OP="cb",DP="seg",xP="ts",MP="d",LP="dframe",Fv=1870,Uv=30,VP=Fv-Uv,FP=25e3,UP=3e4;class wr{constructor(e,n,s,r,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=jo(e),this.stats_=Ld(n),this.urlFn=l=>(this.appCheckToken&&(l[fh]=this.appCheckToken),xv(n,Dv,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new bP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(UP)),pP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Vd((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===wm)this.id=a,this.password=l;else if(o===PP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[wm]="t",s[Vv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[OP]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Av]=Md,this.transportSessionId&&(s[Cv]=this.transportSessionId),this.lastSessionId&&(s[kv]=this.lastSessionId),this.applicationId&&(s[Nv]=this.applicationId),this.appCheckToken&&(s[fh]=this.appCheckToken),typeof location<"u"&&location.hostname&&Pv.test(location.hostname)&&(s[Sv]=bv);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){wr.forceAllow_=!0}static forceDisallow(){wr.forceDisallow_=!0}static isAvailable(){return wr.forceAllow_?!0:!wr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!gP()&&!_P()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Cy(n),r=Iv(s,VP);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[LP]="t",s[Mv]=e,s[Lv]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=rt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Vd{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=hP(),window[kP+this.uniqueCallbackIdentifier]=e,window[NP+this.uniqueCallbackIdentifier]=n,this.myIFrame=Vd.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){pt("frame writing exception"),a.stack&&pt(a.stack),pt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||pt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Mv]=this.myID,e[Lv]=this.myPW,e[Vv]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Uv+s.length<=Fv;){const o=this.pendingSegs.shift();s=s+"&"+DP+r+"="+o.seg+"&"+xP+r+"="+o.ts+"&"+MP+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(FP)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{pt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const BP=16384,$P=45e3;let ml=null;typeof MozWebSocket<"u"?ml=MozWebSocket:typeof WebSocket<"u"&&(ml=WebSocket);class Yt{constructor(e,n,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=jo(this.connId),this.stats_=Ld(n),this.connURL=Yt.connectionURL_(n,o,a,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[Av]=Md,typeof location<"u"&&location.hostname&&Pv.test(location.hostname)&&(o[Sv]=bv),n&&(o[Cv]=n),s&&(o[kv]=s),r&&(o[fh]=r),i&&(o[Nv]=i),xv(e,Ov,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Vs.set("previous_websocket_failure",!0);try{let s;Oy(),this.mySock=new ml(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Yt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ml!==null&&!Yt.forceDisallow_}static previouslyFailed(){return Vs.isInMemoryStorage||Vs.get("previous_websocket_failure")===!0}markConnectionHealthy(){Vs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=fo(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Iv(n,BP);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor($P))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Yt.responsesRequiredToBeHealthy=2;Yt.healthyTimeout=3e4;/**
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
 */class _o{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[wr,Yt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Yt&&Yt.isAvailable();let s=n&&!Yt.previouslyFailed();if(e.webSocketOnly&&(n||Lt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Yt];else{const r=this.transports_=[];for(const i of _o.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);_o.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_o.globalTransportInitialized_=!1;/**
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
 */const WP=6e4,jP=5e3,qP=10*1024,HP=100*1024,pu="t",Tm="d",zP="s",Im="r",KP="e",Rm="o",Am="a",Cm="n",Sm="p",GP="h";class QP{constructor(e,n,s,r,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=jo("c:"+this.id+":"),this.transportManager_=new _o(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=zi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>HP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>qP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(pu in e){const n=e[pu];n===Am?this.upgradeIfSecondaryHealthy_():n===Im?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Rm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ii("t",e),s=Ii("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Sm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Am,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Cm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ii("t",e),s=Ii("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ii(pu,e);if(Tm in e){const s=e[Tm];if(n===GP){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Cm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===zP?this.onConnectionShutdown_(s):n===Im?this.onReset_(s):n===KP?hh("Server Error: "+s):n===Rm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):hh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Md!==s&&Lt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),zi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(WP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):zi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(jP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Sm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Vs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Bv{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class $v{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class gl extends $v{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!yd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new gl}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const bm=32,Pm=768;class xe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ae(){return new xe("")}function ue(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Es(t){return t.pieces_.length-t.pieceNum_}function Ne(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new xe(t.pieces_,e)}function Wv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function YP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function jv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function qv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new xe(e,0)}function Ye(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof xe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new xe(n,0)}function le(t){return t.pieceNum_>=t.pieces_.length}function qt(t,e){const n=ue(t),s=ue(e);if(n===null)return e;if(n===s)return qt(Ne(t),Ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Hv(t,e){if(Es(t)!==Es(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Zt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Es(t)>Es(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class XP{constructor(e,n){this.errorPrefix_=n,this.parts_=jv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=dc(this.parts_[s]);zv(this)}}function JP(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=dc(e),zv(t)}function ZP(t){const e=t.parts_.pop();t.byteLength_-=dc(e),t.parts_.length>0&&(t.byteLength_-=1)}function zv(t){if(t.byteLength_>Pm)throw new Error(t.errorPrefix_+"has a key path longer than "+Pm+" bytes ("+t.byteLength_+").");if(t.parts_.length>bm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+bm+") or object contains a cycle "+Ns(t))}function Ns(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Fd extends $v{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Fd}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ri=1e3,ek=60*5*1e3,km=30*1e3,tk=1.3,nk=3e4,sk="server_kill",Nm=3;class qn extends Bv{constructor(e,n,s,r,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=qn.nextPersistentConnectionId_++,this.log_=jo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ri,this.maxReconnectDelay_=ek,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Oy())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Fd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&gl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(rt(i)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new ho,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;qn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Jn(e,"w")){const s=qr(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Lt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||dA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=km)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=hA(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+rt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):hh("Unrecognized action received from server: "+rt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ri,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ri,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>nk&&(this.reconnectDelay_=Ri),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*tk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+qn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?pt("getToken() completed but was canceled"):(pt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new QP(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{Lt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(sk)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Lt(h),l())}}}interrupt(e){pt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){pt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ju(this.interruptReasons_)&&(this.reconnectDelay_=Ri,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>xd(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new xe(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){pt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Nm&&(this.reconnectDelay_=km,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){pt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Nm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+vv.replace(/\./g,"-")]=1,yd()?e["framework.cordova"]=1:Ny()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=gl.getInstance().currentlyOnline();return Ju(this.interruptReasons_)&&e}}qn.nextPersistentConnectionId_=0;qn.nextConnectionId_=0;/**
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
 */class he{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new he(e,n)}}/**
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
 */class _c{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new he(zr,e),r=new he(zr,n);return this.compare(s,r)!==0}minPost(){return he.MIN}}/**
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
 */let va;class Kv extends _c{static get __EMPTY_NODE(){return va}static set __EMPTY_NODE(e){va=e}compare(e,n){return di(e.name,n.name)}isDefinedOn(e){throw li("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return he.MIN}maxPost(){return new he(Xs,va)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new he(e,va)}toString(){return".key"}}const Dr=new Kv;/**
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
 */let Ea=class{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},xt=class Mi{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Mi.RED,this.left=r??_n.EMPTY_NODE,this.right=i??_n.EMPTY_NODE}copy(e,n,s,r,i){return new Mi(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return _n.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return _n.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Mi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Mi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};xt.RED=!0;xt.BLACK=!1;class rk{copy(e,n,s,r,i){return this}insert(e,n,s){return new xt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let _n=class $a{constructor(e,n=$a.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new $a(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,xt.BLACK,null,null))}remove(e){return new $a(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,xt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ea(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ea(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ea(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ea(this.root_,null,this.comparator_,!0,e)}};_n.EMPTY_NODE=new rk;/**
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
 */function ik(t,e){return di(t.name,e.name)}function Ud(t,e){return di(t,e)}/**
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
 */let ph;function ok(t){ph=t}const Gv=function(t){return typeof t=="number"?"number:"+Rv(t):"string:"+t},Qv=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Jn(e,".sv"),"Priority must be a string or number.")}else x(t===ph||t.isEmpty(),"priority of unexpected type.");x(t===ph||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Om;class Ge{constructor(e,n=Ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Qv(this.priorityNode_)}static set __childrenNodeConstructor(e){Om=e}static get __childrenNodeConstructor(){return Om}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return le(e)?this:ue(e)===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ue(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(x(s!==".priority"||Es(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ne(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Gv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Rv(this.value_):e+=this.value_,this.lazyHash_=wv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ge.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=Ge.VALUE_TYPE_ORDER.indexOf(n),i=Ge.VALUE_TYPE_ORDER.indexOf(s);return x(r>=0,"Unknown leaf type: "+n),x(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Yv,Xv;function ak(t){Yv=t}function lk(t){Xv=t}class ck extends _c{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?di(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return he.MIN}maxPost(){return new he(Xs,new Ge("[PRIORITY-POST]",Xv))}makePost(e,n){const s=Yv(e);return new he(n,new Ge("[PRIORITY-POST]",s))}toString(){return".priority"}}const yt=new ck;/**
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
 */const uk=Math.log(2);class hk{constructor(e){const n=i=>parseInt(Math.log(i)/uk,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _l=function(t,e,n,s){t.sort(e);const r=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new xt(d,h.node,xt.BLACK,null,null);{const f=parseInt(u/2,10)+l,g=r(l,f),y=r(f+1,c);return h=t[f],d=n?n(h):h,new xt(d,h.node,xt.BLACK,g,y)}},i=function(l){let c=null,u=null,h=t.length;const d=function(g,y){const v=h-g,T=h;h-=g;const P=r(v+1,T),k=t[v],A=n?n(k):k;f(new xt(A,k.node,y,null,P))},f=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const y=l.nextBitIsOne(),v=Math.pow(2,l.count-(g+1));y?d(v,xt.BLACK):(d(v,xt.BLACK),d(v,xt.RED))}return u},o=new hk(t.length),a=i(o);return new _n(s||e,a)};/**
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
 */let mu;const mr={};class $n{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(mr&&yt,"ChildrenNode.ts has not been loaded"),mu=mu||new $n({".priority":mr},{".priority":yt}),mu}get(e){const n=qr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof _n?n:null}hasIndex(e){return Jn(this.indexSet_,e.toString())}addIndex(e,n){x(e!==Dr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(he.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=_l(s,e.getCompare()):a=mr;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new $n(u,c)}addToIndexes(e,n){const s=ol(this.indexes_,(r,i)=>{const o=qr(this.indexSet_,i);if(x(o,"Missing index implementation for "+i),r===mr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(he.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),_l(a,o.getCompare())}else return mr;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new he(e.name,a))),l.insert(e,e.node)}});return new $n(s,this.indexSet_)}removeFromIndexes(e,n){const s=ol(this.indexes_,r=>{if(r===mr)return r;{const i=n.get(e.name);return i?r.remove(new he(e.name,i)):r}});return new $n(s,this.indexSet_)}}/**
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
 */let Ai;class Ee{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Qv(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ai||(Ai=new Ee(new _n(Ud),null,$n.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ai}updatePriority(e){return this.children_.isEmpty()?this:new Ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ai:n}}getChild(e){const n=ue(e);return n===null?this:this.getImmediateChild(n).getChild(Ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new he(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?Ai:this.priorityNode_;return new Ee(r,o,i)}}updateChild(e,n){const s=ue(e);if(s===null)return n;{x(ue(e)!==".priority"||Es(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(Ne(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(yt,(o,a)=>{n[o]=a.val(e),s++,i&&Ee.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Gv(this.getPriority().val())+":"),this.forEachChild(yt,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":wv(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new he(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new he(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new he(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,he.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,he.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ho?-1:0}withIndex(e){if(e===Dr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Ee(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Dr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(yt),r=n.getIterator(yt);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Dr?null:this.indexMap_.get(e.toString())}}Ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class dk extends Ee{constructor(){super(new _n(Ud),Ee.EMPTY_NODE,$n.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ee.EMPTY_NODE}isEmpty(){return!1}}const Ho=new dk;Object.defineProperties(he,{MIN:{value:new he(zr,Ee.EMPTY_NODE)},MAX:{value:new he(Xs,Ho)}});Kv.__EMPTY_NODE=Ee.EMPTY_NODE;Ge.__childrenNodeConstructor=Ee;ok(Ho);lk(Ho);/**
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
 */const fk=!0;function mt(t,e=null){if(t===null)return Ee.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ge(n,mt(e))}if(!(t instanceof Array)&&fk){const n=[];let s=!1;if(zt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=mt(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new he(o,l)))}}),n.length===0)return Ee.EMPTY_NODE;const i=_l(n,ik,o=>o.name,Ud);if(s){const o=_l(n,yt.getCompare());return new Ee(i,mt(e),new $n({".priority":o},{".priority":yt}))}else return new Ee(i,mt(e),$n.Default)}else{let n=Ee.EMPTY_NODE;return zt(t,(s,r)=>{if(Jn(t,s)&&s.substring(0,1)!=="."){const i=mt(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(mt(e))}}ak(mt);/**
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
 */class pk extends _c{constructor(e){super(),this.indexPath_=e,x(!le(e)&&ue(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?di(e.name,n.name):i}makePost(e,n){const s=mt(e),r=Ee.EMPTY_NODE.updateChild(this.indexPath_,s);return new he(n,r)}maxPost(){const e=Ee.EMPTY_NODE.updateChild(this.indexPath_,Ho);return new he(Xs,e)}toString(){return jv(this.indexPath_,0).join("/")}}/**
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
 */class mk extends _c{compare(e,n){const s=e.node.compareTo(n.node);return s===0?di(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return he.MIN}maxPost(){return he.MAX}makePost(e,n){const s=mt(e);return new he(n,s)}toString(){return".value"}}const gk=new mk;/**
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
 */function _k(t){return{type:"value",snapshotNode:t}}function yk(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function vk(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Dm(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Ek(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Bd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=yt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:zr}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===yt}copy(){const e=new Bd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===yt?n="$priority":t.index_===gk?n="$value":t.index_===Dr?n="$key":(x(t.index_ instanceof pk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=rt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=rt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+rt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=rt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+rt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Mm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==yt&&(e.i=t.index_.toString()),e}/**
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
 */class yl extends Bv{constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=jo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=yl.getListenId_(e,s),a={};this.listens_[o]=a;const l=xm(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,s),qr(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",r(d,null)}})}unlisten(e,n){const s=yl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=xm(e._queryParams),s=e._path.toString(),r=new ho;return this.restRequest_(s+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ui(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=fo(a.responseText)}catch{Lt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Lt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class wk{constructor(){this.rootNode_=Ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function vl(){return{value:null,children:new Map}}function Jv(t,e,n){if(le(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ue(e);t.children.has(s)||t.children.set(s,vl());const r=t.children.get(s);e=Ne(e),Jv(r,e,n)}}function mh(t,e,n){t.value!==null?n(e,t.value):Tk(t,(s,r)=>{const i=new xe(e.toString()+"/"+s);mh(r,i,n)})}function Tk(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Ik{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&zt(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
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
 */const Lm=10*1e3,Rk=30*1e3,Ak=5*60*1e3;class Ck{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Ik(e);const s=Lm+(Rk-Lm)*Math.random();zi(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;zt(e,(r,i)=>{i>0&&Jn(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),zi(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ak))}}/**
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
 */var yn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(yn||(yn={}));function Zv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function eE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function tE(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class El{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=yn.ACK_USER_WRITE,this.source=Zv()}operationForChild(e){if(le(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new xe(e));return new El(Ae(),n,this.revert)}}else return x(ue(this.path)===e,"operationForChild called for unrelated child."),new El(Ne(this.path),this.affectedTree,this.revert)}}/**
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
 */class Js{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=yn.OVERWRITE}operationForChild(e){return le(this.path)?new Js(this.source,Ae(),this.snap.getImmediateChild(e)):new Js(this.source,Ne(this.path),this.snap)}}/**
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
 */class yo{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=yn.MERGE}operationForChild(e){if(le(this.path)){const n=this.children.subtree(new xe(e));return n.isEmpty()?null:n.value?new Js(this.source,Ae(),n.value):new yo(this.source,Ae(),n)}else return x(ue(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new yo(this.source,Ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class $d{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(le(e))return this.isFullyInitialized()&&!this.filtered_;const n=ue(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Sk(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(Ek(o.childName,o.snapshotNode))}),Ci(t,r,"child_removed",e,s,n),Ci(t,r,"child_added",e,s,n),Ci(t,r,"child_moved",i,s,n),Ci(t,r,"child_changed",e,s,n),Ci(t,r,"value",e,s,n),r}function Ci(t,e,n,s,r,i){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Pk(t,a,l)),o.forEach(a=>{const l=bk(t,a,i);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function bk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Pk(t,e,n){if(e.childName==null||n.childName==null)throw li("Should only compare child_ events.");const s=new he(e.childName,e.snapshotNode),r=new he(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
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
 */function nE(t,e){return{eventCache:t,serverCache:e}}function Ki(t,e,n,s){return nE(new $d(e,n,s),t.serverCache)}function sE(t,e,n,s){return nE(t.eventCache,new $d(e,n,s))}function gh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Zs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let gu;const kk=()=>(gu||(gu=new _n(mP)),gu);class Pe{constructor(e,n=kk()){this.value=e,this.children=n}static fromObject(e){let n=new Pe(null);return zt(e,(s,r)=>{n=n.set(new xe(s),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ae(),value:this.value};if(le(e))return null;{const s=ue(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(Ne(e),n);return i!=null?{path:Ye(new xe(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(le(e))return this;{const n=ue(e),s=this.children.get(n);return s!==null?s.subtree(Ne(e)):new Pe(null)}}set(e,n){if(le(e))return new Pe(n,this.children);{const s=ue(e),i=(this.children.get(s)||new Pe(null)).set(Ne(e),n),o=this.children.insert(s,i);return new Pe(this.value,o)}}remove(e){if(le(e))return this.children.isEmpty()?new Pe(null):new Pe(null,this.children);{const n=ue(e),s=this.children.get(n);if(s){const r=s.remove(Ne(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new Pe(null):new Pe(this.value,i)}else return this}}get(e){if(le(e))return this.value;{const n=ue(e),s=this.children.get(n);return s?s.get(Ne(e)):null}}setTree(e,n){if(le(e))return n;{const s=ue(e),i=(this.children.get(s)||new Pe(null)).setTree(Ne(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new Pe(this.value,o)}}fold(e){return this.fold_(Ae(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(Ye(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Ae(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(le(e))return null;{const i=ue(e),o=this.children.get(i);return o?o.findOnPath_(Ne(e),Ye(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ae(),n)}foreachOnPath_(e,n,s){if(le(e))return this;{this.value&&s(n,this.value);const r=ue(e),i=this.children.get(r);return i?i.foreachOnPath_(Ne(e),Ye(n,r),s):new Pe(null)}}foreach(e){this.foreach_(Ae(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(Ye(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class rn{constructor(e){this.writeTree_=e}static empty(){return new rn(new Pe(null))}}function Gi(t,e,n){if(le(e))return new rn(new Pe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=qt(r,e);return i=i.updateChild(o,n),new rn(t.writeTree_.set(r,i))}else{const r=new Pe(n),i=t.writeTree_.setTree(e,r);return new rn(i)}}}function Vm(t,e,n){let s=t;return zt(n,(r,i)=>{s=Gi(s,Ye(e,r),i)}),s}function Fm(t,e){if(le(e))return rn.empty();{const n=t.writeTree_.setTree(e,new Pe(null));return new rn(n)}}function _h(t,e){return ir(t,e)!=null}function ir(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(qt(n.path,e)):null}function Um(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(yt,(s,r)=>{e.push(new he(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new he(s,r.value))}),e}function gs(t,e){if(le(e))return t;{const n=ir(t,e);return n!=null?new rn(new Pe(n)):new rn(t.writeTree_.subtree(e))}}function yh(t){return t.writeTree_.isEmpty()}function Kr(t,e){return rE(Ae(),t.writeTree_,e)}function rE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(x(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=rE(Ye(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ye(t,".priority"),s)),n}}/**
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
 */function iE(t,e){return uE(e,t)}function Nk(t,e,n,s,r){x(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=Gi(t.visibleWrites,e,n)),t.lastWriteId=s}function Ok(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Dk(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&xk(a,s.path)?r=!1:Zt(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return Mk(t),!0;if(s.snap)t.visibleWrites=Fm(t.visibleWrites,s.path);else{const a=s.children;zt(a,l=>{t.visibleWrites=Fm(t.visibleWrites,Ye(s.path,l))})}return!0}else return!1}function xk(t,e){if(t.snap)return Zt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Zt(Ye(t.path,n),e))return!0;return!1}function Mk(t){t.visibleWrites=oE(t.allWrites,Lk,Ae()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Lk(t){return t.visible}function oE(t,e,n){let s=rn.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let a;if(i.snap)Zt(n,o)?(a=qt(n,o),s=Gi(s,a,i.snap)):Zt(o,n)&&(a=qt(o,n),s=Gi(s,Ae(),i.snap.getChild(a)));else if(i.children){if(Zt(n,o))a=qt(n,o),s=Vm(s,a,i.children);else if(Zt(o,n))if(a=qt(o,n),le(a))s=Vm(s,Ae(),i.children);else{const l=qr(i.children,ue(a));if(l){const c=l.getChild(Ne(a));s=Gi(s,Ae(),c)}}}else throw li("WriteRecord should have .snap or .children")}}return s}function aE(t,e,n,s,r){if(!s&&!r){const i=ir(t.visibleWrites,e);if(i!=null)return i;{const o=gs(t.visibleWrites,e);if(yh(o))return n;if(n==null&&!_h(o,Ae()))return null;{const a=n||Ee.EMPTY_NODE;return Kr(o,a)}}}else{const i=gs(t.visibleWrites,e);if(!r&&yh(i))return n;if(!r&&n==null&&!_h(i,Ae()))return null;{const o=function(c){return(c.visible||r)&&(!s||!~s.indexOf(c.writeId))&&(Zt(c.path,e)||Zt(e,c.path))},a=oE(t.allWrites,o,e),l=n||Ee.EMPTY_NODE;return Kr(a,l)}}}function Vk(t,e,n){let s=Ee.EMPTY_NODE;const r=ir(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(yt,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=gs(t.visibleWrites,e);return n.forEachChild(yt,(o,a)=>{const l=Kr(gs(i,new xe(o)),a);s=s.updateImmediateChild(o,l)}),Um(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=gs(t.visibleWrites,e);return Um(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Fk(t,e,n,s,r){x(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=Ye(e,n);if(_h(t.visibleWrites,i))return null;{const o=gs(t.visibleWrites,i);return yh(o)?r.getChild(n):Kr(o,r.getChild(n))}}function Uk(t,e,n,s){const r=Ye(e,n),i=ir(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=gs(t.visibleWrites,r);return Kr(o,s.getNode().getImmediateChild(n))}else return null}function Bk(t,e){return ir(t.visibleWrites,e)}function $k(t,e,n,s,r,i,o){let a;const l=gs(t.visibleWrites,e),c=ir(l,Ae());if(c!=null)a=c;else if(n!=null)a=Kr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<r;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function Wk(){return{visibleWrites:rn.empty(),allWrites:[],lastWriteId:-1}}function vh(t,e,n,s){return aE(t.writeTree,t.treePath,e,n,s)}function lE(t,e){return Vk(t.writeTree,t.treePath,e)}function Bm(t,e,n,s){return Fk(t.writeTree,t.treePath,e,n,s)}function wl(t,e){return Bk(t.writeTree,Ye(t.treePath,e))}function jk(t,e,n,s,r,i){return $k(t.writeTree,t.treePath,e,n,s,r,i)}function Wd(t,e,n){return Uk(t.writeTree,t.treePath,e,n)}function cE(t,e){return uE(Ye(t.treePath,e),t.writeTree)}function uE(t,e){return{treePath:t,writeTree:e}}/**
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
 */class qk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,Dm(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,vk(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,yk(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,Dm(s,e.snapshotNode,r.oldSnap));else throw li("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Hk{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const hE=new Hk;class jd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new $d(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zs(this.viewCache_),i=jk(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}function zk(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Kk(t,e,n,s,r){const i=new qk;let o,a;if(n.type===yn.OVERWRITE){const c=n;c.source.fromUser?o=Eh(t,e,c.path,c.snap,s,r,i):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!le(c.path),o=Tl(t,e,c.path,c.snap,s,r,a,i))}else if(n.type===yn.MERGE){const c=n;c.source.fromUser?o=Qk(t,e,c.path,c.children,s,r,i):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=wh(t,e,c.path,c.children,s,r,a,i))}else if(n.type===yn.ACK_USER_WRITE){const c=n;c.revert?o=Jk(t,e,c.path,s,r,i):o=Yk(t,e,c.path,c.affectedTree,s,r,i)}else if(n.type===yn.LISTEN_COMPLETE)o=Xk(t,e,n.path,s,i);else throw li("Unknown operation type: "+n.type);const l=i.getChanges();return Gk(e,o,l),{viewCache:o,changes:l}}function Gk(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=gh(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(_k(gh(e)))}}function dE(t,e,n,s,r,i){const o=e.eventCache;if(wl(s,n)!=null)return e;{let a,l;if(le(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Zs(e),u=c instanceof Ee?c:Ee.EMPTY_NODE,h=lE(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=vh(s,Zs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=ue(n);if(c===".priority"){x(Es(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Bm(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ne(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Bm(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Wd(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,r,i):a=o.getNode()}}return Ki(e,a,o.isFullyInitialized()||le(n),t.filter.filtersNodes())}}function Tl(t,e,n,s,r,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(le(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=ue(n);if(!l.isCompleteForPath(n)&&Es(n)>1)return e;const g=Ne(n),v=l.getNode().getImmediateChild(f).updateChild(g,s);f===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),f,v,g,hE,null)}const h=sE(e,c,l.isFullyInitialized()||le(n),u.filtersNodes()),d=new jd(r,h,i);return dE(t,h,n,r,d,a)}function Eh(t,e,n,s,r,i,o){const a=e.eventCache;let l,c;const u=new jd(r,e,i);if(le(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ki(e,c,!0,t.filter.filtersNodes());else{const h=ue(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Ki(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Ne(n),f=a.getNode().getImmediateChild(h);let g;if(le(d))g=s;else{const y=u.getCompleteChild(h);y!=null?Wv(d)===".priority"&&y.getChild(qv(d)).isEmpty()?g=y:g=y.updateChild(d,s):g=Ee.EMPTY_NODE}if(f.equals(g))l=e;else{const y=t.filter.updateChild(a.getNode(),h,g,d,u,o);l=Ki(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function $m(t,e){return t.eventCache.isCompleteForChild(e)}function Qk(t,e,n,s,r,i,o){let a=e;return s.foreach((l,c)=>{const u=Ye(n,l);$m(e,ue(u))&&(a=Eh(t,a,u,c,r,i,o))}),s.foreach((l,c)=>{const u=Ye(n,l);$m(e,ue(u))||(a=Eh(t,a,u,c,r,i,o))}),a}function Wm(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function wh(t,e,n,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;le(n)?c=s:c=new Pe(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),g=Wm(t,f,d);l=Tl(t,l,new xe(h),g,r,i,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const g=e.serverCache.getNode().getImmediateChild(h),y=Wm(t,g,d);l=Tl(t,l,new xe(h),y,r,i,o,a)}}),l}function Yk(t,e,n,s,r,i,o){if(wl(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(le(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Tl(t,e,n,l.getNode().getChild(n),r,i,a,o);if(le(n)){let c=new Pe(null);return l.getNode().forEachChild(Dr,(u,h)=>{c=c.set(new xe(u),h)}),wh(t,e,n,c,r,i,a,o)}else return e}else{let c=new Pe(null);return s.foreach((u,h)=>{const d=Ye(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),wh(t,e,n,c,r,i,a,o)}}function Xk(t,e,n,s,r){const i=e.serverCache,o=sE(e,i.getNode(),i.isFullyInitialized()||le(n),i.isFiltered());return dE(t,o,n,s,hE,r)}function Jk(t,e,n,s,r,i){let o;if(wl(s,n)!=null)return e;{const a=new jd(s,e,r),l=e.eventCache.getNode();let c;if(le(n)||ue(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=vh(s,Zs(e));else{const h=e.serverCache.getNode();x(h instanceof Ee,"serverChildren would be complete if leaf node"),u=lE(s,h)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=ue(n);let h=Wd(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Ne(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Ee.EMPTY_NODE,Ne(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=vh(s,Zs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||wl(s,Ae())!=null,Ki(e,c,o,t.filter.filtersNodes())}}function Zk(t,e){const n=Zs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!le(e)&&!n.getImmediateChild(ue(e)).isEmpty())?n.getChild(e):null}function jm(t,e,n,s){e.type===yn.MERGE&&e.source.queryId!==null&&(x(Zs(t.viewCache_),"We should always have a full cache before handling merges"),x(gh(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=Kk(t.processor_,r,e,n,s);return zk(t.processor_,i.viewCache),x(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,eN(t,i.changes,i.viewCache.eventCache.getNode(),null)}function eN(t,e,n,s){const r=s?[s]:t.eventRegistrations_;return Sk(t.eventGenerator_,e,n,r)}/**
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
 */let qm;function tN(t){x(!qm,"__referenceConstructor has already been defined"),qm=t}function qd(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return x(i!=null,"SyncTree gave us an op for an invalid query."),jm(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(jm(o,e,n,s));return i}}function Hd(t,e){let n=null;for(const s of t.views.values())n=n||Zk(s,e);return n}/**
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
 */let Hm;function nN(t){x(!Hm,"__referenceConstructor has already been defined"),Hm=t}class zm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Pe(null),this.pendingWriteTree_=Wk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sN(t,e,n,s,r){return Nk(t.pendingWriteTree_,e,n,s,r),r?vc(t,new Js(Zv(),e,n)):[]}function Tr(t,e,n=!1){const s=Ok(t.pendingWriteTree_,e);if(Dk(t.pendingWriteTree_,e)){let i=new Pe(null);return s.snap!=null?i=i.set(Ae(),!0):zt(s.children,o=>{i=i.set(new xe(o),!0)}),vc(t,new El(s.path,i,n))}else return[]}function yc(t,e,n){return vc(t,new Js(eE(),e,n))}function rN(t,e,n){const s=Pe.fromObject(n);return vc(t,new yo(eE(),e,s))}function iN(t,e,n,s){const r=gE(t,s);if(r!=null){const i=_E(r),o=i.path,a=i.queryId,l=qt(o,e),c=new Js(tE(a),l,n);return yE(t,o,c)}else return[]}function oN(t,e,n,s){const r=gE(t,s);if(r){const i=_E(r),o=i.path,a=i.queryId,l=qt(o,e),c=Pe.fromObject(n),u=new yo(tE(a),l,c);return yE(t,o,u)}else return[]}function fE(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=qt(o,e),c=Hd(a,l);if(c)return c});return aE(r,e,i,n,!0)}function vc(t,e){return pE(e,t.syncPointTree_,null,iE(t.pendingWriteTree_,Ae()))}function pE(t,e,n,s){if(le(t.path))return mE(t,e,n,s);{const r=e.get(Ae());n==null&&r!=null&&(n=Hd(r,Ae()));let i=[];const o=ue(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=cE(s,o);i=i.concat(pE(a,l,c,u))}return r&&(i=i.concat(qd(r,t,s,n))),i}}function mE(t,e,n,s){const r=e.get(Ae());n==null&&r!=null&&(n=Hd(r,Ae()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=cE(s,o),u=t.operationForChild(o);u&&(i=i.concat(mE(u,a,l,c)))}),r&&(i=i.concat(qd(r,t,s,n))),i}function gE(t,e){return t.tagToQueryMap.get(e)}function _E(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new xe(t.substr(0,e))}}function yE(t,e,n){const s=t.syncPointTree_.get(e);x(s,"Missing sync point for query tag that we're tracking");const r=iE(t.pendingWriteTree_,e);return qd(s,n,r,null)}/**
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
 */class zd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new zd(n)}node(){return this.node_}}class Kd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ye(this.path_,e);return new Kd(this.syncTree_,n)}node(){return fE(this.syncTree_,this.path_)}}const aN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Km=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return lN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return cN(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},lN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},cN=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&x(!1,"Unexpected increment value: "+s);const r=e.node();if(x(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},uN=function(t,e,n,s){return Gd(e,new Kd(n,t),s)},hN=function(t,e,n){return Gd(t,new zd(e),n)};function Gd(t,e,n){const s=t.getPriority().val(),r=Km(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Km(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new Ge(a,mt(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new Ge(r))),o.forEachChild(yt,(a,l)=>{const c=Gd(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
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
 */class Qd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Yd(t,e){let n=e instanceof xe?e:new xe(e),s=t,r=ue(n);for(;r!==null;){const i=qr(s.node.children,r)||{children:{},childCount:0};s=new Qd(r,s,i),n=Ne(n),r=ue(n)}return s}function fi(t){return t.node.value}function vE(t,e){t.node.value=e,Th(t)}function EE(t){return t.node.childCount>0}function dN(t){return fi(t)===void 0&&!EE(t)}function Ec(t,e){zt(t.node.children,(n,s)=>{e(new Qd(n,t,s))})}function wE(t,e,n,s){n&&!s&&e(t),Ec(t,r=>{wE(r,e,!0,s)}),n&&s&&e(t)}function fN(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function zo(t){return new xe(t.parent===null?t.name:zo(t.parent)+"/"+t.name)}function Th(t){t.parent!==null&&pN(t.parent,t.name,t)}function pN(t,e,n){const s=dN(n),r=Jn(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,Th(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,Th(t))}/**
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
 */const mN=/[\[\].#$\/\u0000-\u001F\u007F]/,gN=/[\[\].#$\u0000-\u001F\u007F]/,_u=10*1024*1024,TE=function(t){return typeof t=="string"&&t.length!==0&&!mN.test(t)},_N=function(t){return typeof t=="string"&&t.length!==0&&!gN.test(t)},yN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),_N(t)},IE=function(t,e,n){const s=n instanceof xe?new XP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ns(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ns(s)+" with contents = "+e.toString());if(Tv(e))throw new Error(t+"contains "+e.toString()+" "+Ns(s));if(typeof e=="string"&&e.length>_u/3&&dc(e)>_u)throw new Error(t+"contains a string greater than "+_u+" utf8 bytes "+Ns(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(zt(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!TE(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ns(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);JP(s,o),IE(t,a,s),ZP(s)}),r&&i)throw new Error(t+' contains ".value" child '+Ns(s)+" in addition to actual children.")}},vN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!TE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!yN(n))throw new Error(_A(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class EN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function wN(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!Hv(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function or(t,e,n){wN(t,n),TN(t,s=>Zt(s,e)||Zt(e,s))}function TN(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(IN(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function IN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Hs&&pt("event: "+n.toString()),qo(s)}}}/**
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
 */const RN="repo_interrupt",AN=25;class CN{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new EN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vl(),this.transactionQueueTree_=new Qd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function SN(t,e,n){if(t.stats_=Ld(t.repoInfo_),t.forceRestClient_||wP())t.server_=new yl(t.repoInfo_,(s,r,i,o)=>{Gm(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Qm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{rt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new qn(t.repoInfo_,e,(s,r,i,o)=>{Gm(t,s,r,i,o)},s=>{Qm(t,s)},s=>{PN(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=SP(t.repoInfo_,()=>new Ck(t.stats_,t.server_)),t.infoData_=new wk,t.infoSyncTree_=new zm({startListening:(s,r,i,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=yc(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Xd(t,"connected",!1),t.serverSyncTree_=new zm({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(a,l)=>{const c=o(a,l);or(t.eventQueue_,s._path,c)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function bN(t){const n=t.infoData_.getNode(new xe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function RE(t){return aN({timestamp:bN(t)})}function Gm(t,e,n,s,r){t.dataUpdateCount++;const i=new xe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const l=ol(n,c=>mt(c));o=oN(t.serverSyncTree_,i,l,r)}else{const l=mt(n);o=iN(t.serverSyncTree_,i,l,r)}else if(s){const l=ol(n,c=>mt(c));o=rN(t.serverSyncTree_,i,l)}else{const l=mt(n);o=yc(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Zd(t,i)),or(t.eventQueue_,a,o)}function Qm(t,e){Xd(t,"connected",e),e===!1&&NN(t)}function PN(t,e){zt(e,(n,s)=>{Xd(t,n,s)})}function Xd(t,e,n){const s=new xe("/.info/"+e),r=mt(n);t.infoData_.updateSnapshot(s,r);const i=yc(t.infoSyncTree_,s,r);or(t.eventQueue_,s,i)}function kN(t){return t.nextWriteId_++}function NN(t){AE(t,"onDisconnectEvents");const e=RE(t),n=vl();mh(t.onDisconnect_,Ae(),(r,i)=>{const o=uN(r,i,t.serverSyncTree_,e);Jv(n,r,o)});let s=[];mh(n,Ae(),(r,i)=>{s=s.concat(yc(t.serverSyncTree_,r,i));const o=MN(t,r);Zd(t,o)}),t.onDisconnect_=vl(),or(t.eventQueue_,Ae(),s)}function ON(t){t.persistentConnection_&&t.persistentConnection_.interrupt(RN)}function AE(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),pt(n,...e)}function CE(t,e,n){return fE(t.serverSyncTree_,e,n)||Ee.EMPTY_NODE}function Jd(t,e=t.transactionQueueTree_){if(e||wc(t,e),fi(e)){const n=bE(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&DN(t,zo(e),n)}else EE(e)&&Ec(e,n=>{Jd(t,n)})}function DN(t,e,n){const s=n.map(c=>c.currentWriteId),r=CE(t,e,s);let i=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];x(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=qt(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{AE(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Tr(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();wc(t,Yd(t.transactionQueueTree_,e)),Jd(t,t.transactionQueueTree_),or(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)qo(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Lt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Zd(t,e)}},o)}function Zd(t,e){const n=SE(t,e),s=zo(n),r=bE(t,n);return xN(t,r,s),s}function xN(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=qt(n,l.path);let u=!1,h;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,r=r.concat(Tr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=AN)u=!0,h="maxretry",r=r.concat(Tr(t.serverSyncTree_,l.currentWriteId,!0));else{const d=CE(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){IE("transaction failed: Data returned ",f,l.path);let g=mt(f);typeof f=="object"&&f!=null&&Jn(f,".priority")||(g=g.updatePriority(d.getPriority()));const v=l.currentWriteId,T=RE(t),P=hN(g,d,T);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=P,l.currentWriteId=kN(t),o.splice(o.indexOf(v),1),r=r.concat(sN(t.serverSyncTree_,l.path,P,l.currentWriteId,l.applyLocally)),r=r.concat(Tr(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",r=r.concat(Tr(t.serverSyncTree_,l.currentWriteId,!0))}or(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}wc(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)qo(s[a]);Jd(t,t.transactionQueueTree_)}function SE(t,e){let n,s=t.transactionQueueTree_;for(n=ue(e);n!==null&&fi(s)===void 0;)s=Yd(s,n),e=Ne(e),n=ue(e);return s}function bE(t,e){const n=[];return PE(t,e,n),n.sort((s,r)=>s.order-r.order),n}function PE(t,e,n){const s=fi(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);Ec(e,r=>{PE(t,r,n)})}function wc(t,e){const n=fi(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,vE(e,n.length>0?n:void 0)}Ec(e,s=>{wc(t,s)})}function MN(t,e){const n=zo(SE(t,e)),s=Yd(t.transactionQueueTree_,e);return fN(s,r=>{yu(t,r)}),yu(t,s),wE(s,r=>{yu(t,r)}),n}function yu(t,e){const n=fi(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Tr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?vE(e,void 0):n.length=i+1,or(t.eventQueue_,zo(e),r);for(let o=0;o<s.length;o++)qo(s[o])}}/**
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
 */function LN(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function VN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Lt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ym=function(t,e){const n=FN(t),s=n.namespace;n.domain==="firebase.com"&&Ys(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ys("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||fP();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new RP(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new xe(n.pathString)}},FN=function(t){let e="",n="",s="",r="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(r=LN(t.substring(u,h)));const d=VN(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),i=s}"ns"in d&&(i=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
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
 */class ef{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return le(this._path)?null:Wv(this._path)}get ref(){return new pi(this._repo,this._path)}get _queryIdentifier(){const e=Mm(this._queryParams),n=xd(e);return n==="{}"?"default":n}get _queryObject(){return Mm(this._queryParams)}isEqual(e){if(e=Vt(e),!(e instanceof ef))return!1;const n=this._repo===e._repo,s=Hv(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+YP(this._path)}}class pi extends ef{constructor(e,n){super(e,n,new Bd,!1)}get parent(){const e=qv(this._path);return e===null?null:new pi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}tN(pi);nN(pi);/**
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
 */const UN="FIREBASE_DATABASE_EMULATOR_HOST",Ih={};let BN=!1;function $N(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||Ys("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),pt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ym(i,r),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[UN]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=Ym(i,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new dh(dh.OWNER):new IP(t.name,t.options,e);vN("Invalid Firebase Database URL",o),le(o.path)||Ys("Database URL must point to the root of a Firebase Database (not including a child path).");const h=jN(a,t,u,new TP(t.name,n));return new qN(h,t)}function WN(t,e){const n=Ih[e];(!n||n[t.key]!==t)&&Ys(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ON(t),delete n[t.key]}function jN(t,e,n,s){let r=Ih[e.name];r||(r={},Ih[e.name]=r);let i=r[t.toURLString()];return i&&Ys("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new CN(t,BN,n,s),r[t.toURLString()]=i,i}class qN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(SN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new pi(this._repo,Ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(WN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ys("Cannot call "+e+" on a deleted database.")}}/**
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
 */function HN(t){lP(Rs),Sn(new on("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return $N(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),Mt(_m,ym,t),Mt(_m,ym,"esm2017")}qn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};qn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};HN();var zN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,tf=tf||{},Y=zN||self;function Tc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ko(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function KN(t){return Object.prototype.hasOwnProperty.call(t,vu)&&t[vu]||(t[vu]=++GN)}var vu="closure_uid_"+(1e9*Math.random()>>>0),GN=0;function QN(t,e,n){return t.call.apply(t.bind,arguments)}function YN(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function vt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?vt=QN:vt=YN,vt.apply(null,arguments)}function wa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ze(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function As(){this.s=this.s,this.o=this.o}var XN=0;As.prototype.s=!1;As.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),XN!=0)&&KN(this)};As.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const kE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function nf(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Xm(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Tc(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Et.prototype.h=function(){this.defaultPrevented=!0};var JN=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",()=>{},e),Y.removeEventListener("test",()=>{},e)}catch{}return t}();function vo(t){return/^[\s\xa0]*$/.test(t)}function Ic(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function mn(t){return Ic().indexOf(t)!=-1}function sf(t){return sf[" "](t),t}sf[" "]=function(){};function ZN(t,e){var n=HO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var eO=mn("Opera"),Gr=mn("Trident")||mn("MSIE"),NE=mn("Edge"),Rh=NE||Gr,OE=mn("Gecko")&&!(Ic().toLowerCase().indexOf("webkit")!=-1&&!mn("Edge"))&&!(mn("Trident")||mn("MSIE"))&&!mn("Edge"),tO=Ic().toLowerCase().indexOf("webkit")!=-1&&!mn("Edge");function DE(){var t=Y.document;return t?t.documentMode:void 0}var Ah;e:{var Eu="",wu=function(){var t=Ic();if(OE)return/rv:([^\);]+)(\)|;)/.exec(t);if(NE)return/Edge\/([\d\.]+)/.exec(t);if(Gr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(tO)return/WebKit\/(\S+)/.exec(t);if(eO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(wu&&(Eu=wu?wu[1]:""),Gr){var Tu=DE();if(Tu!=null&&Tu>parseFloat(Eu)){Ah=String(Tu);break e}}Ah=Eu}var Ch;if(Y.document&&Gr){var Jm=DE();Ch=Jm||parseInt(Ah,10)||void 0}else Ch=void 0;var nO=Ch;function Eo(t,e){if(Et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(OE){e:{try{sf(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:sO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Eo.$.h.call(this)}}Ze(Eo,Et);var sO={2:"touch",3:"pen",4:"mouse"};Eo.prototype.h=function(){Eo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Go="closure_listenable_"+(1e6*Math.random()|0),rO=0;function iO(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++rO,this.fa=this.ia=!1}function Rc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function rf(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function oO(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function xE(t){const e={};for(const n in t)e[n]=t[n];return e}const Zm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ME(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Zm.length;i++)n=Zm[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ac(t){this.src=t,this.g={},this.h=0}Ac.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=bh(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new iO(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function Sh(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=kE(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Rc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function bh(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var of="closure_lm_"+(1e6*Math.random()|0),Iu={};function LE(t,e,n,s,r){if(s&&s.once)return FE(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)LE(t,e[i],n,s,r);return null}return n=cf(n),t&&t[Go]?t.O(e,n,Ko(s)?!!s.capture:!!s,r):VE(t,e,n,!1,s,r)}function VE(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ko(r)?!!r.capture:!!r,a=lf(t);if(a||(t[of]=a=new Ac(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=aO(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)JN||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(BE(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function aO(){function t(n){return e.call(t.src,t.listener,n)}const e=lO;return t}function FE(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)FE(t,e[i],n,s,r);return null}return n=cf(n),t&&t[Go]?t.P(e,n,Ko(s)?!!s.capture:!!s,r):VE(t,e,n,!0,s,r)}function UE(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)UE(t,e[i],n,s,r);else s=Ko(s)?!!s.capture:!!s,n=cf(n),t&&t[Go]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=bh(i,n,s,r),-1<n&&(Rc(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=lf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=bh(e,n,s,r)),(n=-1<t?e[t]:null)&&af(n))}function af(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Go])Sh(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(BE(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=lf(e))?(Sh(n,t),n.h==0&&(n.src=null,e[of]=null)):Rc(t)}}}function BE(t){return t in Iu?Iu[t]:Iu[t]="on"+t}function lO(t,e){if(t.fa)t=!0;else{e=new Eo(e,this);var n=t.listener,s=t.la||t.src;t.ia&&af(t),t=n.call(s,e)}return t}function lf(t){return t=t[of],t instanceof Ac?t:null}var Ru="__closure_events_fn_"+(1e9*Math.random()>>>0);function cf(t){return typeof t=="function"?t:(t[Ru]||(t[Ru]=function(e){return t.handleEvent(e)}),t[Ru])}function Je(){As.call(this),this.i=new Ac(this),this.S=this,this.J=null}Ze(Je,As);Je.prototype[Go]=!0;Je.prototype.removeEventListener=function(t,e,n,s){UE(this,t,e,n,s)};function ot(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new Et(e,t);else if(e instanceof Et)e.target=e.target||t;else{var r=e;e=new Et(s,t),ME(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Ta(o,s,!0,e)&&r}if(o=e.g=t,r=Ta(o,s,!0,e)&&r,r=Ta(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Ta(o,s,!1,e)&&r}Je.prototype.N=function(){if(Je.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Rc(n[s]);delete t.g[e],t.h--}}this.J=null};Je.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Je.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ta(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Sh(t.i,o),r=a.call(l,s)!==!1&&r}}return r&&!s.defaultPrevented}var uf=Y.JSON.stringify;class cO{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function uO(){var t=hf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class hO{constructor(){this.h=this.g=null}add(e,n){const s=$E.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var $E=new cO(()=>new dO,t=>t.reset());class dO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function fO(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function pO(t){Y.setTimeout(()=>{throw t},0)}let wo,To=!1,hf=new hO,WE=()=>{const t=Y.Promise.resolve(void 0);wo=()=>{t.then(mO)}};var mO=()=>{for(var t;t=uO();){try{t.h.call(t.g)}catch(n){pO(n)}var e=$E;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}To=!1};function Cc(t,e){Je.call(this),this.h=t||1,this.g=e||Y,this.j=vt(this.qb,this),this.l=Date.now()}Ze(Cc,Je);M=Cc.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ot(this,"tick"),this.ga&&(df(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function df(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){Cc.$.N.call(this),df(this),delete this.g};function ff(t,e,n){if(typeof t=="function")n&&(t=vt(t,n));else if(t&&typeof t.handleEvent=="function")t=vt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function jE(t){t.g=ff(()=>{t.g=null,t.i&&(t.i=!1,jE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class gO extends As{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:jE(this)}N(){super.N(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Io(t){As.call(this),this.h=t,this.g={}}Ze(Io,As);var eg=[];function qE(t,e,n,s){Array.isArray(n)||(n&&(eg[0]=n.toString()),n=eg);for(var r=0;r<n.length;r++){var i=LE(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function HE(t){rf(t.g,function(e,n){this.g.hasOwnProperty(n)&&af(e)},t),t.g={}}Io.prototype.N=function(){Io.$.N.call(this),HE(this)};Io.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Sc(){this.g=!0}Sc.prototype.Ea=function(){this.g=!1};function _O(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function yO(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Ir(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+EO(t,n)+(s?" "+s:"")})}function vO(t,e){t.info(function(){return"TIMEOUT: "+e})}Sc.prototype.info=function(){};function EO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return uf(n)}catch{return e}}var ar={},tg=null;function bc(){return tg=tg||new Je}ar.Ta="serverreachability";function zE(t){Et.call(this,ar.Ta,t)}Ze(zE,Et);function Ro(t){const e=bc();ot(e,new zE(e))}ar.STAT_EVENT="statevent";function KE(t,e){Et.call(this,ar.STAT_EVENT,t),this.stat=e}Ze(KE,Et);function At(t){const e=bc();ot(e,new KE(e,t))}ar.Ua="timingevent";function GE(t,e){Et.call(this,ar.Ua,t),this.size=e}Ze(GE,Et);function Qo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var Pc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},QE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function pf(){}pf.prototype.h=null;function ng(t){return t.h||(t.h=t.i())}function YE(){}var Yo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function mf(){Et.call(this,"d")}Ze(mf,Et);function gf(){Et.call(this,"c")}Ze(gf,Et);var Ph;function kc(){}Ze(kc,pf);kc.prototype.g=function(){return new XMLHttpRequest};kc.prototype.i=function(){return{}};Ph=new kc;function Xo(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Io(this),this.P=wO,t=Rh?125:void 0,this.V=new Cc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new XE}function XE(){this.i=null,this.g="",this.h=!1}var wO=45e3,kh={},Il={};M=Xo.prototype;M.setTimeout=function(t){this.P=t};function Nh(t,e,n){t.L=1,t.v=Oc(Gn(e)),t.s=n,t.S=!0,JE(t,null)}function JE(t,e){t.G=Date.now(),Jo(t),t.A=Gn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),ow(n.i,"t",s),t.C=0,n=t.l.J,t.h=new XE,t.g=Sw(t.l,n?e:null,!t.s),0<t.O&&(t.M=new gO(vt(t.Pa,t,t.g),t.O)),qE(t.U,t.g,"readystatechange",t.nb),e=t.I?xE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ro(),_O(t.j,t.u,t.A,t.m,t.W,t.s)}M.nb=function(t){t=t.target;const e=this.M;e&&vn(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const u=vn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Rh||this.g&&(this.h.h||this.g.ja()||og(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ro(3):Ro(2)),Nc(this);var n=this.g.da();this.ca=n;t:if(ZE(this)){var s=og(this.g);t="";var r=s.length,i=vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fs(this),Qi(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,yO(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!vo(a)){var c=a;break t}}c=null}if(n=c)Ir(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oh(this,n);else{this.i=!1,this.o=3,At(12),Fs(this),Qi(this);break e}}this.S?(ew(this,u,o),Rh&&this.i&&u==3&&(qE(this.U,this.V,"tick",this.mb),this.V.start())):(Ir(this.j,this.m,o,null),Oh(this,o)),u==4&&Fs(this),this.i&&!this.J&&(u==4?Iw(this.l,this):(this.i=!1,Jo(this)))}else WO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,At(12)):(this.o=0,At(13)),Fs(this),Qi(this)}}}catch{}finally{}};function ZE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function ew(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=TO(t,n),r==Il){e==4&&(t.o=4,At(14),s=!1),Ir(t.j,t.m,null,"[Incomplete Response]");break}else if(r==kh){t.o=4,At(15),Ir(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ir(t.j,t.m,r,null),Oh(t,r);ZE(t)&&r!=Il&&r!=kh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,At(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Tf(e),e.M=!0,At(11))):(Ir(t.j,t.m,n,"[Invalid Chunked Response]"),Fs(t),Qi(t))}M.mb=function(){if(this.g){var t=vn(this.g),e=this.g.ja();this.C<e.length&&(Nc(this),ew(this,t,e),this.i&&t!=4&&Jo(this))}};function TO(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Il:(n=Number(e.substring(n,s)),isNaN(n)?kh:(s+=1,s+n>e.length?Il:(e=e.slice(s,s+n),t.C=s+n,e)))}M.cancel=function(){this.J=!0,Fs(this)};function Jo(t){t.Y=Date.now()+t.P,tw(t,t.P)}function tw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Qo(vt(t.lb,t),e)}function Nc(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}M.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(vO(this.j,this.A),this.L!=2&&(Ro(),At(17)),Fs(this),this.o=2,Qi(this)):tw(this,this.Y-t)};function Qi(t){t.l.H==0||t.J||Iw(t.l,t)}function Fs(t){Nc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,df(t.V),HE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Oh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Dh(n.i,t))){if(!t.K&&Dh(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Cl(n),Mc(n);else break e;wf(n),At(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=Qo(vt(n.ib,n),6e3));if(1>=cw(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Us(n,11)}else if((t.K||n.g==t)&&Cl(n),!vo(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=s.i;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(_f(i,i.h),i.h=null))}if(s.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.Da=y,Oe(s.I,s.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=Cw(s,s.J?s.pa:null,s.Y),o.K){uw(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.B&&(Nc(a),Jo(a)),s.g=o}else ww(s);0<n.j.length&&Lc(n)}else c[0]!="stop"&&c[0]!="close"||Us(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Us(n,7):Ef(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Ro(4)}catch{}}function IO(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Tc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function RO(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Tc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function nw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Tc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=RO(t),s=IO(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var sw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function AO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function zs(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof zs){this.h=t.h,Rl(this,t.j),this.s=t.s,this.g=t.g,Al(this,t.m),this.l=t.l;var e=t.i,n=new Ao;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),sg(this,n),this.o=t.o}else t&&(e=String(t).match(sw))?(this.h=!1,Rl(this,e[1]||"",!0),this.s=Li(e[2]||""),this.g=Li(e[3]||"",!0),Al(this,e[4]),this.l=Li(e[5]||"",!0),sg(this,e[6]||"",!0),this.o=Li(e[7]||"")):(this.h=!1,this.i=new Ao(null,this.h))}zs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Vi(e,rg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Vi(e,rg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Vi(n,n.charAt(0)=="/"?bO:SO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Vi(n,kO)),t.join("")};function Gn(t){return new zs(t)}function Rl(t,e,n){t.j=n?Li(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Al(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function sg(t,e,n){e instanceof Ao?(t.i=e,NO(t.i,t.h)):(n||(e=Vi(e,PO)),t.i=new Ao(e,t.h))}function Oe(t,e,n){t.i.set(e,n)}function Oc(t){return Oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Li(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Vi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,CO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function CO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var rg=/[#\/\?@]/g,SO=/[#\?:]/g,bO=/[#\?]/g,PO=/[#\?@]/g,kO=/#/g;function Ao(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Cs(t){t.g||(t.g=new Map,t.h=0,t.i&&AO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=Ao.prototype;M.add=function(t,e){Cs(this),this.i=null,t=mi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function rw(t,e){Cs(t),e=mi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function iw(t,e){return Cs(t),e=mi(t,e),t.g.has(e)}M.forEach=function(t,e){Cs(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};M.ta=function(){Cs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};M.Z=function(t){Cs(this);let e=[];if(typeof t=="string")iw(this,t)&&(e=e.concat(this.g.get(mi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return Cs(this),this.i=null,t=mi(this,t),iw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function ow(t,e,n){rw(t,e),0<n.length&&(t.i=null,t.g.set(mi(t,e),nf(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function mi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function NO(t,e){e&&!t.j&&(Cs(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(rw(this,s),ow(this,r,n))},t)),t.j=e}var OO=class{constructor(t,e){this.g=t,this.map=e}};function aw(t){this.l=t||DO,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ka&&Y.g.Ka()&&Y.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var DO=10;function lw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function cw(t){return t.h?1:t.g?t.g.size:0}function Dh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function _f(t,e){t.g?t.g.add(e):t.h=e}function uw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}aw.prototype.cancel=function(){if(this.i=hw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function hw(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return nf(t.i)}var xO=class{stringify(t){return Y.JSON.stringify(t,void 0)}parse(t){return Y.JSON.parse(t,void 0)}};function MO(){this.g=new xO}function LO(t,e,n){const s=n||"";try{nw(t,function(r,i){let o=r;Ko(r)&&(o=uf(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function VO(t,e){const n=new Sc;if(Y.Image){const s=new Image;s.onload=wa(Ia,n,s,"TestLoadImage: loaded",!0,e),s.onerror=wa(Ia,n,s,"TestLoadImage: error",!1,e),s.onabort=wa(Ia,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=wa(Ia,n,s,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ia(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Zo(t){this.l=t.ec||null,this.j=t.ob||!1}Ze(Zo,pf);Zo.prototype.g=function(){return new Dc(this.l,this.j)};Zo.prototype.i=function(t){return function(){return t}}({});function Dc(t,e){Je.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=yf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ze(Dc,Je);var yf=0;M=Dc.prototype;M.open=function(t,e){if(this.readyState!=yf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Co(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Y).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ea(this)),this.readyState=yf};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Co(this)),this.g&&(this.readyState=3,Co(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;dw(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function dw(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ea(this):Co(this),this.readyState==3&&dw(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,ea(this))};M.Ya=function(t){this.g&&(this.response=t,ea(this))};M.ka=function(){this.g&&ea(this)};function ea(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Co(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Co(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Dc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var FO=Y.JSON.parse;function Ue(t){Je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=fw,this.L=this.M=!1}Ze(Ue,Je);var fw="",UO=/^https?$/i,BO=["POST","PUT"];M=Ue.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ph.g(),this.C=this.u?ng(this.u):ng(Ph),this.g.onreadystatechange=vt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){ig(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=Y.FormData&&t instanceof Y.FormData,!(0<=kE(BO,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{gw(this),0<this.B&&((this.L=$O(this.g))?(this.g.timeout=this.B,this.g.ontimeout=vt(this.ua,this)):this.A=ff(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){ig(this,i)}};function $O(t){return Gr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof tf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ot(this,"timeout"),this.abort(8))};function ig(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,pw(t),xc(t)}function pw(t){t.F||(t.F=!0,ot(t,"complete"),ot(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ot(this,"complete"),ot(this,"abort"),xc(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xc(this,!0)),Ue.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?mw(this):this.kb())};M.kb=function(){mw(this)};function mw(t){if(t.h&&typeof tf<"u"&&(!t.C[1]||vn(t)!=4||t.da()!=2)){if(t.v&&vn(t)==4)ff(t.La,0,t);else if(ot(t,"readystatechange"),vn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var r=String(t.I).match(sw)[1]||null;!r&&Y.self&&Y.self.location&&(r=Y.self.location.protocol.slice(0,-1)),s=!UO.test(r?r.toLowerCase():"")}n=s}if(n)ot(t,"complete"),ot(t,"success");else{t.m=6;try{var i=2<vn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",pw(t)}}finally{xc(t)}}}}function xc(t,e){if(t.g){gw(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ot(t,"ready");try{n.onreadystatechange=s}catch{}}}function gw(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}M.isActive=function(){return!!this.g};function vn(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<vn(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),FO(e)}};function og(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case fw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function WO(t){const e={};t=(t.g&&2<=vn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(vo(t[s]))continue;var n=fO(t[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}oO(e,function(s){return s.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function _w(t){let e="";return rf(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function vf(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=_w(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Oe(t,e,n))}function Si(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function yw(t){this.Ga=0,this.j=[],this.l=new Sc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Si("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Si("baseRetryDelayMs",5e3,t),this.hb=Si("retryDelaySeedMs",1e4,t),this.eb=Si("forwardChannelMaxRetries",2,t),this.xa=Si("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new aw(t&&t.concurrentRequestLimit),this.Ja=new MO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=yw.prototype;M.ra=8;M.H=1;function Ef(t){if(vw(t),t.H==3){var e=t.W++,n=Gn(t.I);if(Oe(n,"SID",t.K),Oe(n,"RID",e),Oe(n,"TYPE","terminate"),ta(t,n),e=new Xo(t,t.l,e),e.L=2,e.v=Oc(Gn(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon)try{n=Y.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=Sw(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Jo(e)}Aw(t)}function Mc(t){t.g&&(Tf(t),t.g.cancel(),t.g=null)}function vw(t){Mc(t),t.u&&(Y.clearTimeout(t.u),t.u=null),Cl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function Lc(t){if(!lw(t.i)&&!t.m){t.m=!0;var e=t.Na;wo||WE(),To||(wo(),To=!0),hf.add(e,t),t.C=0}}function jO(t,e){return cw(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Qo(vt(t.Na,t,e),Rw(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Xo(this,this.l,t);let i=this.s;if(this.U&&(i?(i=xE(i),ME(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ew(this,r,e),n=Gn(this.I),Oe(n,"RID",t),Oe(n,"CVER",22),this.F&&Oe(n,"X-HTTP-Session-Id",this.F),ta(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(_w(i)))+"&"+e:this.o&&vf(n,this.o,i)),_f(this.i,r),this.bb&&Oe(n,"TYPE","init"),this.P?(Oe(n,"$req",e),Oe(n,"SID","null"),r.aa=!0,Nh(r,n,null)):Nh(r,n,e),this.H=2}}else this.H==3&&(t?ag(this,t):this.j.length==0||lw(this.i)||ag(this))};function ag(t,e){var n;e?n=e.m:n=t.W++;const s=Gn(t.I);Oe(s,"SID",t.K),Oe(s,"RID",n),Oe(s,"AID",t.V),ta(t,s),t.o&&t.s&&vf(s,t.o,t.s),n=new Xo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Ew(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),_f(t.i,n),Nh(n,s,e)}function ta(t,e){t.na&&rf(t.na,function(n,s){Oe(e,s,n)}),t.h&&nw({},function(n,s){Oe(e,s,n)})}function Ew(t,e,n){n=Math.min(t.j.length,n);var s=t.h?vt(t.h.Va,t.h,t):null;e:{var r=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=r[l].g;const u=r[l].map;if(c-=i,0>c)i=Math.max(0,r[l].g-100),a=!1;else try{LO(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function ww(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;wo||WE(),To||(wo(),To=!0),hf.add(e,t),t.A=0}}function wf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Qo(vt(t.Ma,t),Rw(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,Tw(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Qo(vt(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,At(10),Mc(this),Tw(this))};function Tf(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function Tw(t){t.g=new Xo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Gn(t.wa);Oe(e,"RID","rpc"),Oe(e,"SID",t.K),Oe(e,"AID",t.V),Oe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Oe(e,"TO",t.qa),Oe(e,"TYPE","xmlhttp"),ta(t,e),t.o&&t.s&&vf(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Oc(Gn(e)),n.s=null,n.S=!0,JE(n,t)}M.ib=function(){this.v!=null&&(this.v=null,Mc(this),wf(this),At(19))};function Cl(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function Iw(t,e){var n=null;if(t.g==e){Cl(t),Tf(t),t.g=null;var s=2}else if(Dh(t.i,e))n=e.F,uw(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=bc(),ot(s,new GE(s,n)),Lc(t)}else ww(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(s==1&&jO(t,e)||s==2&&wf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Us(t,5);break;case 4:Us(t,10);break;case 3:Us(t,6);break;default:Us(t,2)}}}function Rw(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Us(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=vt(t.pb,t);n||(n=new zs("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||Rl(n,"https"),Oc(n)),VO(n.toString(),s)}else At(2);t.H=0,t.h&&t.h.za(e),Aw(t),vw(t)}M.pb=function(t){t?(this.l.info("Successfully pinged google.com"),At(2)):(this.l.info("Failed to ping google.com"),At(1))};function Aw(t){if(t.H=0,t.ma=[],t.h){const e=hw(t.i);(e.length!=0||t.j.length!=0)&&(Xm(t.ma,e),Xm(t.ma,t.j),t.i.i.length=0,nf(t.j),t.j.length=0),t.h.ya()}}function Cw(t,e,n){var s=n instanceof zs?Gn(n):new zs(n);if(s.g!="")e&&(s.g=e+"."+s.g),Al(s,s.m);else{var r=Y.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new zs(null);s&&Rl(i,s),e&&(i.g=e),r&&Al(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&Oe(s,n,e),Oe(s,"VER",t.ra),ta(t,s),s}function Sw(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ue(new Zo({ob:!0})):new Ue(t.va),e.Oa(t.J),e}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function bw(){}M=bw.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function Sl(){if(Gr&&!(10<=Number(nO)))throw Error("Environmental error: no available transport.")}Sl.prototype.g=function(t,e){return new Ft(t,e)};function Ft(t,e){Je.call(this),this.g=new yw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!vo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!vo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gi(this)}Ze(Ft,Je);Ft.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;At(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Cw(t,null,t.Y),Lc(t)};Ft.prototype.close=function(){Ef(this.g)};Ft.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=uf(t),t=n);e.j.push(new OO(e.fb++,t)),e.H==3&&Lc(e)};Ft.prototype.N=function(){this.g.h=null,delete this.j,Ef(this.g),delete this.g,Ft.$.N.call(this)};function Pw(t){mf.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ze(Pw,mf);function kw(){gf.call(this),this.status=1}Ze(kw,gf);function gi(t){this.g=t}Ze(gi,bw);gi.prototype.Ba=function(){ot(this.g,"a")};gi.prototype.Aa=function(t){ot(this.g,new Pw(t))};gi.prototype.za=function(t){ot(this.g,new kw)};gi.prototype.ya=function(){ot(this.g,"b")};function qO(){this.blockSize=-1}function ln(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ze(ln,qO);ln.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Au(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}ln.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)Au(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){Au(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){Au(this,s),r=0;break}}this.h=r,this.i+=e};ln.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function Te(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var HO={};function If(t){return-128<=t&&128>t?ZN(t,function(e){return new Te([e|0],0>e?-1:0)}):new Te([t|0],0>t?-1:0)}function En(t){if(isNaN(t)||!isFinite(t))return xr;if(0>t)return st(En(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=xh;return new Te(e,0)}function Nw(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return st(Nw(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=En(Math.pow(e,8)),s=xr,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=En(Math.pow(e,i)),s=s.R(i).add(En(o))):(s=s.R(n),s=s.add(En(o)))}return s}var xh=4294967296,xr=If(0),Mh=If(1),lg=If(16777216);M=Te.prototype;M.ea=function(){if(Wt(this))return-st(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:xh+s)*e,e*=xh}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Wn(this))return"0";if(Wt(this))return"-"+st(this).toString(t);for(var e=En(Math.pow(t,6)),n=this,s="";;){var r=Pl(n,e).g;n=bl(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,Wn(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Wn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Wt(t){return t.h==-1}M.X=function(t){return t=bl(this,t),Wt(t)?-1:Wn(t)?0:1};function st(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new Te(n,~t.h).add(Mh)}M.abs=function(){return Wt(this)?st(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new Te(n,n[n.length-1]&-2147483648?-1:0)};function bl(t,e){return t.add(st(e))}M.R=function(t){if(Wn(this)||Wn(t))return xr;if(Wt(this))return Wt(t)?st(this).R(st(t)):st(st(this).R(t));if(Wt(t))return st(this.R(st(t)));if(0>this.X(lg)&&0>t.X(lg))return En(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,l=t.D(r)&65535;n[2*s+2*r]+=o*l,Ra(n,2*s+2*r),n[2*s+2*r+1]+=i*l,Ra(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,Ra(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,Ra(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new Te(n,0)};function Ra(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function bi(t,e){this.g=t,this.h=e}function Pl(t,e){if(Wn(e))throw Error("division by zero");if(Wn(t))return new bi(xr,xr);if(Wt(t))return e=Pl(st(t),e),new bi(st(e.g),st(e.h));if(Wt(e))return e=Pl(t,st(e)),new bi(st(e.g),e.h);if(30<t.g.length){if(Wt(t)||Wt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Mh,s=e;0>=s.X(t);)n=cg(n),s=cg(s);var r=gr(n,1),i=gr(s,1);for(s=gr(s,2),n=gr(n,2);!Wn(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=gr(s,1),n=gr(n,1)}return e=bl(t,r.R(e)),new bi(r,e)}for(r=xr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=En(n),o=i.R(e);Wt(o)||0<o.X(t);)n-=s,i=En(n),o=i.R(e);Wn(i)&&(i=Mh),r=r.add(i),t=bl(t,o)}return new bi(r,t)}M.gb=function(t){return Pl(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new Te(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new Te(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new Te(n,this.h^t.h)};function cg(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new Te(n,t.h)}function gr(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Te(r,t.h)}Sl.prototype.createWebChannel=Sl.prototype.g;Ft.prototype.send=Ft.prototype.u;Ft.prototype.open=Ft.prototype.m;Ft.prototype.close=Ft.prototype.close;Pc.NO_ERROR=0;Pc.TIMEOUT=8;Pc.HTTP_ERROR=6;QE.COMPLETE="complete";YE.EventType=Yo;Yo.OPEN="a";Yo.CLOSE="b";Yo.ERROR="c";Yo.MESSAGE="d";Je.prototype.listen=Je.prototype.O;Ue.prototype.listenOnce=Ue.prototype.P;Ue.prototype.getLastError=Ue.prototype.Sa;Ue.prototype.getLastErrorCode=Ue.prototype.Ia;Ue.prototype.getStatus=Ue.prototype.da;Ue.prototype.getResponseJson=Ue.prototype.Wa;Ue.prototype.getResponseText=Ue.prototype.ja;Ue.prototype.send=Ue.prototype.ha;Ue.prototype.setWithCredentials=Ue.prototype.Oa;ln.prototype.digest=ln.prototype.l;ln.prototype.reset=ln.prototype.reset;ln.prototype.update=ln.prototype.j;Te.prototype.add=Te.prototype.add;Te.prototype.multiply=Te.prototype.R;Te.prototype.modulo=Te.prototype.gb;Te.prototype.compare=Te.prototype.X;Te.prototype.toNumber=Te.prototype.ea;Te.prototype.toString=Te.prototype.toString;Te.prototype.getBits=Te.prototype.D;Te.fromNumber=En;Te.fromString=Nw;var zO=function(){return new Sl},KO=function(){return bc()},Cu=Pc,GO=QE,QO=ar,ug={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},YO=Zo,Aa=YE,XO=Ue,JO=ln,Mr=Te;const hg="@firebase/firestore";/**
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
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
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
 */let _i="10.5.2";/**
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
 */const er=new Fo("@firebase/firestore");function Pi(){return er.logLevel}function U(t,...e){if(er.logLevel<=oe.DEBUG){const n=e.map(Rf);er.debug(`Firestore (${_i}): ${t}`,...n)}}function Qn(t,...e){if(er.logLevel<=oe.ERROR){const n=e.map(Rf);er.error(`Firestore (${_i}): ${t}`,...n)}}function Qr(t,...e){if(er.logLevel<=oe.WARN){const n=e.map(Rf);er.warn(`Firestore (${_i}): ${t}`,...n)}}function Rf(t){if(typeof t=="string")return t;try{/**
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${_i}) INTERNAL ASSERTION FAILED: `+t;throw Qn(e),new Error(e)}function De(t,e){t||Q()}function te(t,e){return t}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends On{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Hn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Ow{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ZO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class eD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class tD{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new Hn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Hn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Hn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(De(typeof s.accessToken=="string"),new Ow(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string"),new dt(e)}}class nD{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class sD{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new nD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string"),this.R=n.token,new rD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function oD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Dw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=oD(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function _e(t,e){return t<e?-1:t>e?1:0}function Yr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new qe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new qe(0,0))}static max(){return new X(new qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class So{constructor(e,n,s){n===void 0?n=0:n>e.length&&Q(),s===void 0?s=e.length-n:s>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return So.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof So?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends So{construct(e,n,s){return new Le(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new W(R.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const aD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends So{construct(e,n,s){return new it(e,n,s)}static isValidIdentifier(e){return aD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new W(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new W(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new W(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Le.fromString(e))}static fromName(e){return new H(Le.fromString(e).popFirst(5))}static empty(){return new H(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Le(e.slice()))}}function lD(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=X.fromTimestamp(s===1e9?new qe(n+1,0):new qe(n,s));return new ws(r,H.empty(),e)}function cD(t){return new ws(t.readTime,t.key,-1)}class ws{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ws(X.min(),H.empty(),-1)}static max(){return new ws(X.max(),H.empty(),-1)}}function uD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
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
 */const hD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function na(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==hD)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,s)=>{n(e)})}static reject(e){return new S((n,s)=>{s(e)})}static waitFor(e){return new S((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},l=>s(l))}),o=!0,i===r&&n()})}static or(e){let n=S.resolve(!1);for(const s of e)n=n.next(r=>r?S.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new S((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new S((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function sa(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Af{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.se(s),this.oe=s=>n.writeSequenceNumber(s))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Af._e=-1;function Vc(t){return t==null}function kl(t){return t===0&&1/t==-1/0}function fD(t){return typeof t=="number"&&Number.isInteger(t)&&!kl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function dg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function yi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ca(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ca(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ca(this.root,e,this.comparator,!0)}}class Ca{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??tt.RED,this.left=r??tt.EMPTY,this.right=i??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new tt(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return tt.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,s,r,i){return this}insert(e,n,s){return new tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new fg(this.data.getIterator())}getIteratorFrom(e){return new fg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class fg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class en{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new en([])}unionWith(e){let n=new at(it.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new en(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Yr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Mw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Mw("Invalid base64 string: "+i):i}}(e);return new Tt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new Tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const pD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ts(t){if(De(!!t),typeof t=="string"){let e=0;const n=pD.exec(t);if(De(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function tr(t){return typeof t=="string"?Tt.fromBase64String(t):Tt.fromUint8Array(t)}/**
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
 */function Cf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Sf(t){const e=t.mapValue.fields.__previous_value__;return Cf(e)?Sf(e):e}function bo(t){const e=Ts(t.mapValue.fields.__local_write_time__.timestampValue);return new qe(e.seconds,e.nanos)}/**
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
 */class mD{constructor(e,n,s,r,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Po{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Po("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Po&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Sa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function nr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cf(t)?4:gD(t)?9007199254740991:10:Q()}function Pn(t,e){if(t===e)return!0;const n=nr(t);if(n!==nr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return bo(t).isEqual(bo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Ts(r.timestampValue),a=Ts(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return tr(r.bytesValue).isEqual(tr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return We(r.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(r.geoPointValue.longitude)===We(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return We(r.integerValue)===We(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=We(r.doubleValue),a=We(i.doubleValue);return o===a?kl(o)===kl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Yr(t.arrayValue.values||[],e.arrayValue.values||[],Pn);case 10:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(dg(o)!==dg(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Pn(o[l],a[l])))return!1;return!0}(t,e);default:return Q()}}function ko(t,e){return(t.values||[]).find(n=>Pn(n,e))!==void 0}function Xr(t,e){if(t===e)return 0;const n=nr(t),s=nr(e);if(n!==s)return _e(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=We(i.integerValue||i.doubleValue),l=We(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return pg(t.timestampValue,e.timestampValue);case 4:return pg(bo(t),bo(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(i,o){const a=tr(i),l=tr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=_e(a[c],l[c]);if(u!==0)return u}return _e(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=_e(We(i.latitude),We(o.latitude));return a!==0?a:_e(We(i.longitude),We(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Xr(a[c],l[c]);if(u)return u}return _e(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Sa.mapValue&&o===Sa.mapValue)return 0;if(i===Sa.mapValue)return 1;if(o===Sa.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=_e(l[h],u[h]);if(d!==0)return d;const f=Xr(a[l[h]],c[u[h]]);if(f!==0)return f}return _e(l.length,u.length)}(t.mapValue,e.mapValue);default:throw Q()}}function pg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=Ts(t),s=Ts(e),r=_e(n.seconds,s.seconds);return r!==0?r:_e(n.nanos,s.nanos)}function Jr(t){return Lh(t)}function Lh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=Ts(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return tr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=Lh(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${Lh(n.fields[o])}`;return r+"}"}(t.mapValue):Q()}function Vh(t){return!!t&&"integerValue"in t}function bf(t){return!!t&&"arrayValue"in t}function mg(t){return!!t&&"nullValue"in t}function gg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wa(t){return!!t&&"mapValue"in t}function Yi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return yi(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Yi(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function gD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class jt{constructor(e){this.value=e}static empty(){return new jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Wa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yi(n)}setAll(e){let n=it.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Yi(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Wa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Wa(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){yi(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new jt(Yi(this.value))}}function Lw(t){const e=[];return yi(t.fields,(n,s)=>{const r=new it([n]);if(Wa(s)){const i=Lw(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new en(e)}/**
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
 */class gt{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new gt(e,0,X.min(),X.min(),X.min(),jt.empty(),0)}static newFoundDocument(e,n,s,r){return new gt(e,1,n,X.min(),s,r,0)}static newNoDocument(e,n){return new gt(e,2,n,X.min(),X.min(),jt.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,X.min(),X.min(),jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Nl{constructor(e,n){this.position=e,this.inclusive=n}}function _g(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=H.comparator(H.fromName(o.referenceValue),n.key):s=Xr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function yg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ol{constructor(e,n="asc"){this.field=e,this.dir=n}}function _D(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Vw{}class ze extends Vw{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new vD(e,n,s):n==="array-contains"?new TD(e,s):n==="in"?new ID(e,s):n==="not-in"?new RD(e,s):n==="array-contains-any"?new AD(e,s):new ze(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new ED(e,s):new wD(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xr(n,this.value)):n!==null&&nr(this.value)===nr(n)&&this.matchesComparison(Xr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kn extends Vw{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new kn(e,n)}matches(e){return Fw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Fw(t){return t.op==="and"}function Uw(t){return yD(t)&&Fw(t)}function yD(t){for(const e of t.filters)if(e instanceof kn)return!1;return!0}function Fh(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+Jr(t.value);if(Uw(t))return t.filters.map(e=>Fh(e)).join(",");{const e=t.filters.map(n=>Fh(n)).join(",");return`${t.op}(${e})`}}function Bw(t,e){return t instanceof ze?function(s,r){return r instanceof ze&&s.op===r.op&&s.field.isEqual(r.field)&&Pn(s.value,r.value)}(t,e):t instanceof kn?function(s,r){return r instanceof kn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&Bw(o,r.filters[a]),!0):!1}(t,e):void Q()}function $w(t){return t instanceof ze?function(n){return`${n.field.canonicalString()} ${n.op} ${Jr(n.value)}`}(t):t instanceof kn?function(n){return n.op.toString()+" {"+n.getFilters().map($w).join(" ,")+"}"}(t):"Filter"}class vD extends ze{constructor(e,n,s){super(e,n,s),this.key=H.fromName(s.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class ED extends ze{constructor(e,n){super(e,"in",n),this.keys=Ww("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class wD extends ze{constructor(e,n){super(e,"not-in",n),this.keys=Ww("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ww(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>H.fromName(s.referenceValue))}class TD extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bf(n)&&ko(n.arrayValue,this.value)}}class ID extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ko(this.value.arrayValue,n)}}class RD extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(ko(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ko(this.value.arrayValue,n)}}class AD extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ko(this.value.arrayValue,s))}}/**
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
 */class CD{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function vg(t,e=null,n=[],s=[],r=null,i=null,o=null){return new CD(t,e,n,s,r,i,o)}function Pf(t){const e=te(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Fh(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Vc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Jr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Jr(s)).join(",")),e.ce=n}return e.ce}function kf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!_D(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Bw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!yg(t.startAt,e.startAt)&&yg(t.endAt,e.endAt)}function Uh(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Fc{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function SD(t,e,n,s,r,i,o,a){return new Fc(t,e,n,s,r,i,o,a)}function Uc(t){return new Fc(t)}function Eg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bD(t){return t.collectionGroup!==null}function Xi(t){const e=te(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new at(it.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new Ol(i,s))}),n.has(it.keyField().canonicalString())||e.le.push(new Ol(it.keyField(),s))}return e.le}function In(t){const e=te(t);return e.he||(e.he=PD(e,Xi(t))),e.he}function PD(t,e){if(t.limitType==="F")return vg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Ol(r.field,i)});const n=t.endAt?new Nl(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Nl(t.startAt.position,t.startAt.inclusive):null;return vg(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Bh(t,e,n){return new Fc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bc(t,e){return kf(In(t),In(e))&&t.limitType===e.limitType}function jw(t){return`${Pf(In(t))}|lt:${t.limitType}`}function _r(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>$w(r)).join(", ")}]`),Vc(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>Jr(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>Jr(r)).join(",")),`Target(${s})`}(In(t))}; limitType=${t.limitType})`}function $c(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):H.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of Xi(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(o,a,l){const c=_g(o,a,l);return o.inclusive?c<=0:c<0}(s.startAt,Xi(s),r)||s.endAt&&!function(o,a,l){const c=_g(o,a,l);return o.inclusive?c>=0:c>0}(s.endAt,Xi(s),r))}(t,e)}function kD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function qw(t){return(e,n)=>{let s=!1;for(const r of Xi(t)){const i=ND(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function ND(t,e,n){const s=t.field.isKeyField()?H.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?Xr(l,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Q()}}/**
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
 */class vi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){yi(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return xw(this.inner)}size(){return this.innerSize}}/**
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
 */const OD=new Fe(H.comparator);function Yn(){return OD}const Hw=new Fe(H.comparator);function Fi(...t){let e=Hw;for(const n of t)e=e.insert(n.key,n);return e}function zw(t){let e=Hw;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Bs(){return Ji()}function Kw(){return Ji()}function Ji(){return new vi(t=>t.toString(),(t,e)=>t.isEqual(e))}const DD=new Fe(H.comparator),xD=new at(H.comparator);function ae(...t){let e=xD;for(const n of t)e=e.add(n);return e}const MD=new at(_e);function LD(){return MD}/**
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
 */function Gw(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kl(e)?"-0":e}}function Qw(t){return{integerValue:""+t}}function VD(t,e){return fD(e)?Qw(e):Gw(t,e)}/**
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
 */class Wc{constructor(){this._=void 0}}function FD(t,e,n){return t instanceof Dl?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Cf(i)&&(i=Sf(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof No?Xw(t,e):t instanceof Oo?Jw(t,e):function(r,i){const o=Yw(r,i),a=wg(o)+wg(r.Ie);return Vh(o)&&Vh(r.Ie)?Qw(a):Gw(r.serializer,a)}(t,e)}function UD(t,e,n){return t instanceof No?Xw(t,e):t instanceof Oo?Jw(t,e):n}function Yw(t,e){return t instanceof xl?function(s){return Vh(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Dl extends Wc{}class No extends Wc{constructor(e){super(),this.elements=e}}function Xw(t,e){const n=Zw(e);for(const s of t.elements)n.some(r=>Pn(r,s))||n.push(s);return{arrayValue:{values:n}}}class Oo extends Wc{constructor(e){super(),this.elements=e}}function Jw(t,e){let n=Zw(e);for(const s of t.elements)n=n.filter(r=>!Pn(r,s));return{arrayValue:{values:n}}}class xl extends Wc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function wg(t){return We(t.integerValue||t.doubleValue)}function Zw(t){return bf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function BD(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof No&&r instanceof No||s instanceof Oo&&r instanceof Oo?Yr(s.elements,r.elements,Pn):s instanceof xl&&r instanceof xl?Pn(s.Ie,r.Ie):s instanceof Dl&&r instanceof Dl}(t.transform,e.transform)}class $D{constructor(e,n){this.version=e,this.transformResults=n}}class zn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zn}static exists(e){return new zn(void 0,e)}static updateTime(e){return new zn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ja(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class jc{}function eT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new nT(t.key,zn.none()):new ra(t.key,t.data,zn.none());{const n=t.data,s=jt.empty();let r=new at(it.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new lr(t.key,s,new en(r.toArray()),zn.none())}}function WD(t,e,n){t instanceof ra?function(r,i,o){const a=r.value.clone(),l=Ig(r.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof lr?function(r,i,o){if(!ja(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Ig(r.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(tT(r)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Zi(t,e,n,s){return t instanceof ra?function(i,o,a,l){if(!ja(i.precondition,o))return a;const c=i.value.clone(),u=Rg(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof lr?function(i,o,a,l){if(!ja(i.precondition,o))return a;const c=Rg(i.fieldTransforms,l,o),u=o.data;return u.setAll(tT(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(i,o,a){return ja(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function jD(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Yw(s.transform,r||null);i!=null&&(n===null&&(n=jt.empty()),n.set(s.field,i))}return n||null}function Tg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Yr(s,r,(i,o)=>BD(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ra extends jc{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class lr extends jc{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function tT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Ig(t,e,n){const s=new Map;De(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,UD(o,a,n[r]))}return s}function Rg(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,FD(i,o,e))}return s}class nT extends jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qD extends jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class HD{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&WD(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Zi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Zi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Kw();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const l=eT(o,a);l!==null&&s.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&Yr(this.mutations,e.mutations,(n,s)=>Tg(n,s))&&Yr(this.baseMutations,e.baseMutations,(n,s)=>Tg(n,s))}}class Nf{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){De(e.mutations.length===s.length);let r=function(){return DD}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Nf(e,n,s,r)}}/**
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
 */class zD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class KD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var $e,ce;function GD(t){switch(t){default:return Q();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function sT(t){if(t===void 0)return Qn("GRPC error has no .code"),R.UNKNOWN;switch(t){case $e.OK:return R.OK;case $e.CANCELLED:return R.CANCELLED;case $e.UNKNOWN:return R.UNKNOWN;case $e.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case $e.INTERNAL:return R.INTERNAL;case $e.UNAVAILABLE:return R.UNAVAILABLE;case $e.UNAUTHENTICATED:return R.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case $e.NOT_FOUND:return R.NOT_FOUND;case $e.ALREADY_EXISTS:return R.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return R.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case $e.ABORTED:return R.ABORTED;case $e.OUT_OF_RANGE:return R.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return R.UNIMPLEMENTED;case $e.DATA_LOSS:return R.DATA_LOSS;default:return Q()}}(ce=$e||($e={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function QD(){return new TextEncoder}/**
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
 */const YD=new Mr([4294967295,4294967295],0);function Ag(t){const e=QD().encode(t),n=new JO;return n.update(e),new Uint8Array(n.digest())}function Cg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Mr([n,s],0),new Mr([r,i],0)]}class Of{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Ui(`Invalid padding: ${n}`);if(s<0)throw new Ui(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ui(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Ui(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Mr.fromNumber(this.Te)}de(e,n,s){let r=e.add(n.multiply(Mr.fromNumber(s)));return r.compare(YD)===1&&(r=new Mr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Ag(e),[s,r]=Cg(n);for(let i=0;i<this.hashCount;i++){const o=this.de(s,r,i);if(!this.Ae(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Of(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Ag(e),[s,r]=Cg(n);for(let i=0;i<this.hashCount;i++){const o=this.de(s,r,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Ui extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class qc{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,ia.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new qc(X.min(),r,new Fe(_e),Yn(),ae())}}class ia{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ia(s,n,ae(),ae(),ae())}}/**
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
 */class qa{constructor(e,n,s,r){this.Ve=e,this.removedTargetIds=n,this.key=s,this.me=r}}class rT{constructor(e,n){this.targetId=e,this.fe=n}}class iT{constructor(e,n,s=Tt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Sg{constructor(){this.ge=0,this.pe=Pg(),this.ye=Tt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ae(),n=ae(),s=ae();return this.pe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:Q()}}),new ia(this.ye,this.we,e,n,s)}Fe(){this.Se=!1,this.pe=Pg()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class XD{constructor(e){this.Le=e,this.ke=new Map,this.qe=Yn(),this.Qe=bg(),this.Ke=new Fe(_e)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const s=this.ze(n);switch(e.state){case 0:this.je(n)&&s.Ce(e.resumeToken);break;case 1:s.Ne(),s.be||s.Fe(),s.Ce(e.resumeToken);break;case 2:s.Ne(),s.be||this.removeTarget(n);break;case 3:this.je(n)&&(s.Be(),s.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),s.Ce(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((s,r)=>{this.je(r)&&n(r)})}Je(e){const n=e.targetId,s=e.fe.count,r=this.Ye(n);if(r){const i=r.target;if(Uh(i))if(s===0){const o=new H(i.path);this.We(n,o,gt.newNoDocument(o,X.min()))}else De(s===1);else{const o=this.Ze(n);if(o!==s){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,a;try{o=tr(s).toUint8Array()}catch(l){if(l instanceof Mw)return Qr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Of(o,r,i)}catch(l){return Qr(l instanceof Ui?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,s){return n.fe.count===s-this.rt(e,n.targetId)?0:2}rt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),r++)}),r}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Uh(a.target)){const l=new H(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,gt.newNoDocument(l,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let s=ae();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const r=new qc(e,n,this.Ke,this.qe,s);return this.qe=Yn(),this.Qe=bg(),this.Ke=new Fe(_e),r}Ue(e,n){if(!this.je(e))return;const s=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,s),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,s){if(!this.je(e))return;const r=this.ze(e);this.st(e,n)?r.Me(n,1):r.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),s&&(this.qe=this.qe.insert(n,s))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Sg,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new at(_e),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Sg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function bg(){return new Fe(H.comparator)}function Pg(){return new Fe(H.comparator)}const JD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ZD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),e1=(()=>({and:"AND",or:"OR"}))();class t1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $h(t,e){return t.useProto3Json||Vc(e)?e:{value:e}}function Ml(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function oT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function n1(t,e){return Ml(t,e.toTimestamp())}function Rn(t){return De(!!t),X.fromTimestamp(function(n){const s=Ts(n);return new qe(s.seconds,s.nanos)}(t))}function Df(t,e){return function(s){return new Le(["projects",s.projectId,"databases",s.database])}(t).child("documents").child(e).canonicalString()}function aT(t){const e=Le.fromString(t);return De(hT(e)),e}function Wh(t,e){return Df(t.databaseId,e.path)}function Su(t,e){const n=aT(e);if(n.get(1)!==t.databaseId.projectId)throw new W(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(lT(n))}function jh(t,e){return Df(t.databaseId,e)}function s1(t){const e=aT(t);return e.length===4?Le.emptyPath():lT(e)}function qh(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function lT(t){return De(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function kg(t,e,n){return{name:Wh(t,e),fields:n.value.mapValue.fields}}function r1(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(De(u===void 0||typeof u=="string"),Tt.fromBase64String(u||"")):(De(u===void 0||u instanceof Uint8Array),Tt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?R.UNKNOWN:sT(c.code);return new W(u,c.message||"")}(o);n=new iT(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Su(t,s.document.name),i=Rn(s.document.updateTime),o=s.document.createTime?Rn(s.document.createTime):X.min(),a=new jt({mapValue:{fields:s.document.fields}}),l=gt.newFoundDocument(r,i,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new qa(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Su(t,s.document),i=s.readTime?Rn(s.readTime):X.min(),o=gt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new qa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Su(t,s.document),i=s.removedTargetIds||[];n=new qa([],i,r,null)}else{if(!("filter"in e))return Q();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new KD(r,i),a=s.targetId;n=new rT(a,o)}}return n}function i1(t,e){let n;if(e instanceof ra)n={update:kg(t,e.key,e.value)};else if(e instanceof nT)n={delete:Wh(t,e.key)};else if(e instanceof lr)n={update:kg(t,e.key,e.data),updateMask:p1(e.fieldMask)};else{if(!(e instanceof qD))return Q();n={verify:Wh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof Dl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof No)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Oo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof xl)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw Q()}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:n1(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q()}(t,e.precondition)),n}function o1(t,e){return t&&t.length>0?(De(e!==void 0),t.map(n=>function(r,i){let o=r.updateTime?Rn(r.updateTime):Rn(i);return o.isEqual(X.min())&&(o=Rn(i)),new $D(o,r.transformResults||[])}(n,e))):[]}function a1(t,e){return{documents:[jh(t,e.path)]}}function l1(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=jh(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=jh(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(l){if(l.length!==0)return uT(kn.create(l,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:yr(h.field),direction:h1(h.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=$h(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function c1(t){let e=s1(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){De(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=cT(h);return d instanceof kn&&Uw(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new Ol(vr(g.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Vc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new Nl(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new Nl(f,d)}(n.endAt)),SD(e,r,o,i,a,"F",l,c)}function u1(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function cT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=vr(n.unaryFilter.field);return ze.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=vr(n.unaryFilter.field);return ze.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=vr(n.unaryFilter.field);return ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vr(n.unaryFilter.field);return ze.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return ze.create(vr(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return kn.create(n.compositeFilter.filters.map(s=>cT(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function h1(t){return JD[t]}function d1(t){return ZD[t]}function f1(t){return e1[t]}function yr(t){return{fieldPath:t.canonicalString()}}function vr(t){return it.fromServerFormat(t.fieldPath)}function uT(t){return t instanceof ze?function(n){if(n.op==="=="){if(gg(n.value))return{unaryFilter:{field:yr(n.field),op:"IS_NAN"}};if(mg(n.value))return{unaryFilter:{field:yr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(gg(n.value))return{unaryFilter:{field:yr(n.field),op:"IS_NOT_NAN"}};if(mg(n.value))return{unaryFilter:{field:yr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yr(n.field),op:d1(n.op),value:n.value}}}(t):t instanceof kn?function(n){const s=n.getFilters().map(r=>uT(r));return s.length===1?s[0]:{compositeFilter:{op:f1(n.op),filters:s}}}(t):Q()}function p1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function hT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class cs{constructor(e,n,s,r,i=X.min(),o=X.min(),a=Tt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new cs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class m1{constructor(e){this.ut=e}}function g1(t){const e=c1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Bh(e,e.limit,"L"):e}/**
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
 */class _1{constructor(){this.on=new y1}addToCollectionParentIndex(e,n){return this.on.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(ws.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(ws.min())}updateCollectionGroup(e,n,s){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class y1{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new at(Le.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new at(Le.comparator)).toArray()}}/**
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
 */class Zr{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Zr(0)}static Nn(){return new Zr(-1)}}/**
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
 */class v1{constructor(){this.changes=new vi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?S.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class E1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class w1{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Zi(s.mutation,r,en.empty(),qe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ae()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ae()){const r=Bs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Fi();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Bs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ae()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Yn();const o=Ji(),a=function(){return Ji()}();return n.forEach((l,c)=>{const u=s.get(c.key);r.has(c.key)&&(u===void 0||u.mutation instanceof lr)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Zi(u.mutation,c,u.mutation.getFieldMask(),qe.now())):o.set(c.key,en.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new E1(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Ji();let r=new Fe((o,a)=>o-a),i=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||en.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(r.get(a.batchId)||ae()).add(l);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Kw();u.forEach(d=>{if(!i.has(d)){const f=eT(n.get(d),s.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return S.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bD(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):S.resolve(Bs());let a=-1,l=i;return o.next(c=>S.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,ae())).next(u=>({batchId:a,changes:zw(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(s=>{let r=Fi();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=Fi();return this.indexManager.getCollectionParents(e,i).next(a=>S.forEach(a,l=>{const c=function(h,d){return new Fc(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s,r).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,gt.newInvalidDocument(u)))});let a=Fi();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&Zi(u.mutation,c,en.empty(),qe.now()),$c(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class T1{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return S.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(r){return{id:r.id,version:r.version,createTime:Rn(r.createTime)}}(n)),S.resolve()}getNamedQuery(e,n){return S.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(r){return{name:r.name,query:g1(r.bundledQuery),readTime:Rn(r.readTime)}}(n)),S.resolve()}}/**
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
 */class I1{constructor(){this.overlays=new Fe(H.comparator),this.lr=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Bs();return S.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.lt(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.lr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(s)),S.resolve()}getOverlaysForCollection(e,n,s){const r=Bs(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return S.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Fe((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=i.get(c.largestBatchId);u===null&&(u=Bs(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Bs(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=r)););return S.resolve(a)}lt(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.lr.get(r.largestBatchId).delete(s.key);this.lr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new zD(n,s));let i=this.lr.get(n);i===void 0&&(i=ae(),this.lr.set(n,i)),this.lr.set(n,i.add(s.key))}}/**
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
 */class xf{constructor(){this.hr=new at(Qe.Pr),this.Ir=new at(Qe.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const s=new Qe(e,n);this.hr=this.hr.add(s),this.Ir=this.Ir.add(s)}Er(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.dr(new Qe(e,n))}Ar(e,n){e.forEach(s=>this.removeReference(s,n))}Rr(e){const n=new H(new Le([])),s=new Qe(n,e),r=new Qe(n,e+1),i=[];return this.Ir.forEachInRange([s,r],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new H(new Le([])),s=new Qe(n,e),r=new Qe(n,e+1);let i=ae();return this.Ir.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Qe(e,0),s=this.hr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Qe{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return H.comparator(e.key,n.key)||_e(e.gr,n.gr)}static Tr(e,n){return _e(e.gr,n.gr)||H.comparator(e.key,n.key)}}/**
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
 */class R1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new at(Qe.Pr)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new HD(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.yr=this.yr.add(new Qe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Sr(s),i=r<0?0:r;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Qe(n,0),r=new Qe(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([s,r],o=>{const a=this.wr(o.gr);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new at(_e);return n.forEach(r=>{const i=new Qe(r,0),o=new Qe(r,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{s=s.add(a.gr)})}),S.resolve(this.br(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;H.isDocumentKey(i)||(i=i.child(""));const o=new Qe(new H(i),0);let a=new at(_e);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.gr)),!0)},o),S.resolve(this.br(a))}br(e){const n=[];return e.forEach(s=>{const r=this.wr(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){De(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.yr;return S.forEach(n.mutations,r=>{const i=new Qe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.yr=s})}Fn(e){}containsKey(e,n){const s=new Qe(n,0),r=this.yr.firstAfterOrEqual(s);return S.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class A1{constructor(e){this.Cr=e,this.docs=function(){return new Fe(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Cr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return S.resolve(s?s.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let s=Yn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():gt.newInvalidDocument(r))}),S.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Yn();const o=n.path,a=new H(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||uD(cD(u),s)<=0||(r.has(u.key)||$c(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,s,r){Q()}vr(e,n){return S.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new C1(this)}getSize(e){return S.resolve(this.size)}}class C1 extends v1{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this._r.addEntry(e,r)):this._r.removeEntry(s)}),S.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class S1{constructor(e){this.persistence=e,this.Fr=new vi(n=>Pf(n),kf),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Mr=0,this.Or=new xf,this.targetCount=0,this.Nr=Zr.On()}forEachTarget(e,n){return this.Fr.forEach((s,r)=>n(r)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Mr&&(this.Mr=n),S.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Zr(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.kn(n),S.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),S.waitFor(i).next(()=>r)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const s=this.Fr.get(n)||null;return S.resolve(s)}addMatchingKeys(e,n,s){return this.Or.Er(n,s),S.resolve()}removeMatchingKeys(e,n,s){this.Or.Ar(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),S.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Or.mr(n);return S.resolve(s)}containsKey(e,n){return S.resolve(this.Or.containsKey(n))}}/**
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
 */class b1{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Af(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new S1(this),this.indexManager=new _1,this.remoteDocumentCache=function(r){return new A1(r)}(s=>this.referenceDelegate.Qr(s)),this.serializer=new m1(n),this.Kr=new T1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new I1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Br[e.toKey()];return s||(s=new R1(n,this.referenceDelegate),this.Br[e.toKey()]=s),s}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,s){U("MemoryPersistence","Starting transaction:",e);const r=new P1(this.Lr.next());return this.referenceDelegate.$r(),s(r).next(i=>this.referenceDelegate.Ur(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Wr(e,n){return S.or(Object.values(this.Br).map(s=>()=>s.containsKey(e,n)))}}class P1 extends dD{constructor(e){super(),this.currentSequenceNumber=e}}class Mf{constructor(e){this.persistence=e,this.Gr=new xf,this.zr=null}static jr(e){return new Mf(e)}get Hr(){if(this.zr)return this.zr;throw Q()}addReference(e,n,s){return this.Gr.addReference(s,n),this.Hr.delete(s.toString()),S.resolve()}removeReference(e,n,s){return this.Gr.removeReference(s,n),this.Hr.add(s.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),S.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(r=>this.Hr.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Hr.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Hr,s=>{const r=H.fromPath(s);return this.Jr(e,r).next(i=>{i||n.removeEntry(r,X.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(s=>{s?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return S.or([()=>S.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class Lf{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.ki=s,this.qi=r}static Qi(e,n){let s=ae(),r=ae();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Lf(e,n.fromCache,s,r)}}/**
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
 */class k1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class N1{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new k1;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,s,r){return s.documentReadCount<this.Ui?(Pi()<=oe.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",_r(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),S.resolve()):(Pi()<=oe.DEBUG&&U("QueryEngine","Query:",_r(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Wi*r?(Pi()<=oe.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",_r(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,In(n))):S.resolve())}zi(e,n){if(Eg(n))return S.resolve(null);let s=In(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Bh(n,null,"F"),s=In(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ae(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Yi(n,a);return this.Zi(n,c,o,l.readTime)?this.zi(e,Bh(n,null,"F")):this.Xi(e,c,n,l)}))})))}ji(e,n,s,r){return Eg(n)||r.isEqual(X.min())?S.resolve(null):this.Gi.getDocuments(e,s).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,s,r)?S.resolve(null):(Pi()<=oe.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),_r(n)),this.Xi(e,o,n,lD(r,-1)).next(a=>a))})}Yi(e,n){let s=new at(qw(e));return n.forEach((r,i)=>{$c(e,i)&&(s=s.add(i))}),s}Zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Hi(e,n,s){return Pi()<=oe.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",_r(n)),this.Gi.getDocumentsMatchingQuery(e,n,ws.min(),s)}Xi(e,n,s,r){return this.Gi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class O1{constructor(e,n,s,r){this.persistence=e,this.es=n,this.serializer=r,this.ts=new Fe(_e),this.ns=new vi(i=>Pf(i),kf),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(s)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new w1(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function D1(t,e,n,s){return new O1(t,e,n,s)}async function dT(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.os(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let l=ae();for(const c of r){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function x1(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=S.resolve();return d.forEach(g=>{f=f.next(()=>u.getEntry(l,g)).next(y=>{const v=c.docVersions.get(g);De(v!==null),y.version.compareTo(v)<0&&(h.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let l=ae();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function fT(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function M1(t,e){const n=te(t),s=e.snapshotVersion;let r=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});r=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Tt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),r=r.insert(h,f),function(y,v,T){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(d,f,u)&&a.push(n.qr.updateTargetData(i,f))});let l=Yn(),c=ae();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(L1(i,o,e.documentUpdates).next(u=>{l=u.us,c=u.cs})),!s.isEqual(X.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.ts=r,i))}function L1(t,e,n){let s=ae(),r=ae();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Yn();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{us:o,cs:r}})}function V1(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function F1(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.qr.getTargetData(s,e).next(i=>i?(r=i,S.resolve(r)):n.qr.allocateTargetId(s).next(o=>(r=new cs(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.qr.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.ts.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ts=n.ts.insert(s.targetId,s),n.ns.set(e,s.targetId)),s})}async function Hh(t,e,n){const s=te(t),r=s.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!sa(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ts=s.ts.remove(e),s.ns.delete(r.target)}function Ng(t,e,n){const s=te(t);let r=X.min(),i=ae();return s.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=te(l),d=h.ns.get(u);return d!==void 0?S.resolve(h.ts.get(d)):h.qr.getTargetData(c,u)}(s,o,In(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>s.es.getDocumentsMatchingQuery(o,e,n?r:X.min(),n?i:ae())).next(a=>(U1(s,kD(e),a),{documents:a,ls:i})))}function U1(t,e,n){let s=t.rs.get(e)||X.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.rs.set(e,s)}class Og{constructor(){this.activeTargetIds=LD()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class B1{constructor(){this.eo=new Og,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,s){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Og,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class $1{ro(e){}shutdown(){}}/**
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
 */class Dg{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ba=null;function bu(){return ba===null?ba=function(){return 268435456+Math.round(2147483648*Math.random())}():ba++,"0x"+ba.toString(16)}/**
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
 */const W1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class j1{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
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
 */const ht="WebChannelConnection";class q1 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=s+"://"+n.host,this.fo=`projects/${r}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}get yo(){return!1}wo(n,s,r,i,o){const a=bu(),l=this.So(n,s);U("RestConnection",`Sending RPC '${n}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,i,o),this.Do(n,l,c,r).then(u=>(U("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Qr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",r),u})}Co(n,s,r,i,o,a){return this.wo(n,s,r,i,o)}bo(n,s,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_i}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>n[o]=i),r&&r.headers.forEach((i,o)=>n[o]=i)}So(n,s){const r=W1[n];return`${this.mo}/v1/${s}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,s,r){const i=bu();return new Promise((o,a)=>{const l=new XO;l.setWithCredentials(!0),l.listenOnce(GO.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Cu.NO_ERROR:const u=l.getResponseJson();U(ht,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Cu.TIMEOUT:U(ht,`RPC '${e}' ${i} timed out`),a(new W(R.DEADLINE_EXCEEDED,"Request time out"));break;case Cu.HTTP_ERROR:const h=l.getStatus();if(U(ht,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(v){const T=v.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(T)>=0?T:R.UNKNOWN}(f.status);a(new W(g,f.message))}else a(new W(R.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new W(R.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{U(ht,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(r);U(ht,`RPC '${e}' ${i} sending request:`,r),l.send(n,"POST",c,s,15)})}vo(e,n,s){const r=bu(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=zO(),a=KO(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new YO({})),this.bo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=i.join("");U(ht,`Creating RPC '${e}' stream ${r}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const g=new j1({co:v=>{f?U(ht,`Not sending because RPC '${e}' stream ${r} is closed:`,v):(d||(U(ht,`Opening RPC '${e}' stream ${r} transport.`),h.open(),d=!0),U(ht,`RPC '${e}' stream ${r} sending:`,v),h.send(v))},lo:()=>h.close()}),y=(v,T,P)=>{v.listen(T,k=>{try{P(k)}catch(A){setTimeout(()=>{throw A},0)}})};return y(h,Aa.EventType.OPEN,()=>{f||U(ht,`RPC '${e}' stream ${r} transport opened.`)}),y(h,Aa.EventType.CLOSE,()=>{f||(f=!0,U(ht,`RPC '${e}' stream ${r} transport closed`),g.Ro())}),y(h,Aa.EventType.ERROR,v=>{f||(f=!0,Qr(ht,`RPC '${e}' stream ${r} transport errored:`,v),g.Ro(new W(R.UNAVAILABLE,"The operation could not be completed")))}),y(h,Aa.EventType.MESSAGE,v=>{var T;if(!f){const P=v.data[0];De(!!P);const k=P,A=k.error||((T=k[0])===null||T===void 0?void 0:T.error);if(A){U(ht,`RPC '${e}' stream ${r} received error:`,A);const z=A.status;let se=function(ne){const Ie=$e[ne];if(Ie!==void 0)return sT(Ie)}(z),de=A.message;se===void 0&&(se=R.INTERNAL,de="Unknown error status: "+z+" with message "+A.message),f=!0,g.Ro(new W(se,de)),h.close()}else U(ht,`RPC '${e}' stream ${r} received:`,P),g.Vo(P)}}),y(a,QO.STAT_EVENT,v=>{v.stat===ug.PROXY?U(ht,`RPC '${e}' stream ${r} detected buffering proxy`):v.stat===ug.NOPROXY&&U(ht,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.Ao()},0),g}}function Pu(){return typeof document<"u"?document:null}/**
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
 */function Hc(t){return new t1(t,!0)}/**
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
 */class pT{constructor(e,n,s=1e3,r=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=s,this.Mo=r,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),s=Math.max(0,Date.now()-this.Bo),r=Math.max(0,n-s);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class mT{constructor(e,n,s,r,i,o,a,l){this.si=e,this.Ko=s,this.$o=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new pT(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(Qn(n.toString()),Qn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Uo===n&&this.s_(s,r)},s=>{e(()=>{const r=new W(R.UNKNOWN,"Fetching auth token failed: "+s.message);return this.o_(r)})})}s_(e,n){const s=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{s(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(r=>{s(()=>this.o_(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class H1 extends mT{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=r1(this.serializer,e),s=function(i){if(!("targetChange"in i))return X.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Rn(o.readTime):X.min()}(e);return this.listener.a_(n,s)}u_(e){const n={};n.database=qh(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Uh(l)?{documents:a1(i,l)}:{query:l1(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=oT(i,o.resumeToken);const c=$h(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=Ml(i,o.snapshotVersion.toTimestamp());const c=$h(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const s=u1(this.serializer,e);s&&(n.labels=s),this.e_(n)}c_(e){const n={};n.database=qh(this.serializer),n.removeTarget=e,this.e_(n)}}class z1 extends mT{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(De(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=o1(e.writeResults,e.commitTime),s=Rn(e.commitTime);return this.listener.I_(s,n)}return De(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=qh(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>i1(this.serializer,s))};this.e_(n)}}/**
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
 */class K1 extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.d_=!1}A_(){if(this.d_)throw new W(R.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.wo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new W(R.UNKNOWN,r.toString())})}Co(e,n,s,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(R.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class G1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Qn(n),this.f_=!1):U("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class Q1{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{s.enqueueAndForget(async()=>{cr(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=te(l);c.C_.add(4),await oa(c),c.M_.set("Unknown"),c.C_.delete(4),await zc(c)}(this))})}),this.M_=new G1(s,r)}}async function zc(t){if(cr(t))for(const e of t.v_)await e(!0)}async function oa(t){for(const e of t.v_)await e(!1)}function gT(t,e){const n=te(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Uf(n)?Ff(n):Ei(n).Ho()&&Vf(n,e))}function _T(t,e){const n=te(t),s=Ei(n);n.D_.delete(e),s.Ho()&&yT(n,e),n.D_.size===0&&(s.Ho()?s.Zo():cr(n)&&n.M_.set("Unknown"))}function Vf(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ei(t).u_(e)}function yT(t,e){t.x_.Oe(e),Ei(t).c_(e)}function Ff(t){t.x_=new XD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ei(t).start(),t.M_.g_()}function Uf(t){return cr(t)&&!Ei(t).jo()&&t.D_.size>0}function cr(t){return te(t).C_.size===0}function vT(t){t.x_=void 0}async function Y1(t){t.D_.forEach((e,n)=>{Vf(t,e)})}async function X1(t,e){vT(t),Uf(t)?(t.M_.w_(e),Ff(t)):t.M_.set("Unknown")}async function J1(t,e,n){if(t.M_.set("Online"),e instanceof iT&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.D_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.D_.delete(a),r.x_.removeTarget(a))}(t,e)}catch(s){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ll(t,s)}else if(e instanceof qa?t.x_.$e(e):e instanceof rT?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(X.min()))try{const s=await fT(t.localStore);n.compareTo(s)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.D_.get(c);u&&i.D_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.D_.get(l);if(!u)return;i.D_.set(l,u.withResumeToken(Tt.EMPTY_BYTE_STRING,u.snapshotVersion)),yT(i,l);const h=new cs(u.target,l,c,u.sequenceNumber);Vf(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){U("RemoteStore","Failed to raise snapshot:",s),await Ll(t,s)}}async function Ll(t,e,n){if(!sa(e))throw e;t.C_.add(1),await oa(t),t.M_.set("Offline"),n||(n=()=>fT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await zc(t)})}function ET(t,e){return e().catch(n=>Ll(t,n,e))}async function Kc(t){const e=te(t),n=Is(e);let s=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;Z1(e);)try{const r=await V1(e.localStore,s);if(r===null){e.b_.length===0&&n.Zo();break}s=r.batchId,ex(e,r)}catch(r){await Ll(e,r)}wT(e)&&TT(e)}function Z1(t){return cr(t)&&t.b_.length<10}function ex(t,e){t.b_.push(e);const n=Is(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function wT(t){return cr(t)&&!Is(t).jo()&&t.b_.length>0}function TT(t){Is(t).start()}async function tx(t){Is(t).E_()}async function nx(t){const e=Is(t);for(const n of t.b_)e.P_(n.mutations)}async function sx(t,e,n){const s=t.b_.shift(),r=Nf.from(s,e,n);await ET(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Kc(t)}async function rx(t,e){e&&Is(t).h_&&await async function(s,r){if(function(o){return GD(o)&&o!==R.ABORTED}(r.code)){const i=s.b_.shift();Is(s).Yo(),await ET(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Kc(s)}}(t,e),wT(t)&&TT(t)}async function xg(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const s=cr(n);n.C_.add(3),await oa(n),s&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await zc(n)}async function ix(t,e){const n=te(t);e?(n.C_.delete(2),await zc(n)):e||(n.C_.add(2),await oa(n),n.M_.set("Unknown"))}function Ei(t){return t.O_||(t.O_=function(n,s,r){const i=te(n);return i.A_(),new H1(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{ho:Y1.bind(null,t),Io:X1.bind(null,t),a_:J1.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Uf(t)?Ff(t):t.M_.set("Unknown")):(await t.O_.stop(),vT(t))})),t.O_}function Is(t){return t.N_||(t.N_=function(n,s,r){const i=te(n);return i.A_(),new z1(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{ho:tx.bind(null,t),Io:rx.bind(null,t),T_:nx.bind(null,t),I_:sx.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Kc(t)):(await t.N_.stop(),t.b_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
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
 */class Bf{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Bf(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $f(t,e){if(Qn("AsyncQueue",`${e}: ${t}`),sa(t))return new W(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Lr{constructor(e){this.comparator=e?(n,s)=>e(n,s)||H.comparator(n.key,s.key):(n,s)=>H.comparator(n.key,s.key),this.keyedMap=Fi(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new Lr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Lr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Lr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Mg{constructor(){this.B_=new Fe(H.comparator)}track(e){const n=e.doc.key,s=this.B_.get(n);s?e.type!==0&&s.type===3?this.B_=this.B_.insert(n,e):e.type===3&&s.type!==1?this.B_=this.B_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.B_=this.B_.remove(n):e.type===1&&s.type===2?this.B_=this.B_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):Q():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,s)=>{e.push(s)}),e}}class ei{constructor(e,n,s,r,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ei(e,n,Lr.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class ox{constructor(){this.k_=void 0,this.listeners=[]}}class ax{constructor(){this.queries=new vi(e=>jw(e),Bc),this.onlineState="Unknown",this.q_=new Set}}async function Wf(t,e){const n=te(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new ox),r)try{i.k_=await n.onListen(s)}catch(o){const a=$f(o,`Initialization of query '${_r(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&qf(n)}async function jf(t,e){const n=te(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function lx(t,e){const n=te(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(r)&&(s=!0);o.k_=r}}s&&qf(n)}function cx(t,e,n){const s=te(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function qf(t){t.q_.forEach(e=>{e.next()})}class Hf{constructor(e,n,s){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=s||{}}K_(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new ei(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.J_||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=ei.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
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
 */class IT{constructor(e){this.key=e}}class RT{constructor(e){this.key=e}}class ux{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=ae(),this.mutatedKeys=ae(),this._a=qw(e),this.aa=new Lr(this._a)}get ua(){return this.ia}ca(e,n){const s=n?n.la:new Mg,r=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),f=$c(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?g!==y&&(s.track({type:3,doc:f}),v=!0):this.ha(d,f)||(s.track({type:2,doc:f}),v=!0,(l&&this._a(f,l)>0||c&&this._a(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),v=!0):d&&!f&&(s.track({type:1,doc:d}),v=!0,(l||c)&&(a=!0)),v&&(f?(o=o.add(f),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{aa:o,la:s,Zi:a,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const i=e.la.L_();i.sort((c,u)=>function(d,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return g(d)-g(f)}(c.type,u.type)||this._a(c.doc,u.doc)),this.Pa(s);const o=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,l=a!==this.sa;return this.sa=a,i.length!==0||l?{snapshot:new ei(this.query,e.aa,r,i,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Mg,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=ae(),this.aa.forEach(s=>{this.Ea(s.key)&&(this.oa=this.oa.add(s.key))});const n=[];return e.forEach(s=>{this.oa.has(s)||n.push(new RT(s))}),this.oa.forEach(s=>{e.has(s)||n.push(new IT(s))}),n}da(e){this.ia=e.ls,this.oa=ae();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return ei.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class hx{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class dx{constructor(e){this.key=e,this.Ra=!1}}class fx{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new vi(a=>jw(a),Bc),this.fa=new Map,this.ga=new Set,this.pa=new Fe(H.comparator),this.ya=new Map,this.wa=new xf,this.Sa={},this.ba=new Map,this.Da=Zr.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function px(t,e){const n=Rx(t);let s,r;const i=n.ma.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Aa();else{const o=await F1(n.localStore,In(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await mx(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&gT(n.remoteStore,o)}return r}async function mx(t,e,n,s,r){t.va=(h,d,f)=>async function(y,v,T,P){let k=v.view.ca(T);k.Zi&&(k=await Ng(y.localStore,v.query,!1).then(({documents:se})=>v.view.ca(se,k)));const A=P&&P.targetChanges.get(v.targetId),z=v.view.applyChanges(k,y.isPrimaryClient,A);return Vg(y,v.targetId,z.Ta),z.snapshot}(t,h,d,f);const i=await Ng(t.localStore,e,!0),o=new ux(e,i.ls),a=o.ca(i.documents),l=ia.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),c=o.applyChanges(a,t.isPrimaryClient,l);Vg(t,n,c.Ta);const u=new hx(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),c.snapshot}async function gx(t,e){const n=te(t),s=n.ma.get(e),r=n.fa.get(s.targetId);if(r.length>1)return n.fa.set(s.targetId,r.filter(i=>!Bc(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Hh(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),_T(n.remoteStore,s.targetId),zh(n,s.targetId)}).catch(na)):(zh(n,s.targetId),await Hh(n.localStore,s.targetId,!0))}async function _x(t,e,n){const s=Ax(t);try{const r=await function(o,a){const l=te(o),c=qe.now(),u=a.reduce((f,g)=>f.add(g.key),ae());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=Yn(),y=ae();return l.ss.getEntries(f,u).next(v=>{g=v,g.forEach((T,P)=>{P.isValidDocument()||(y=y.add(T))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,g)).next(v=>{h=v;const T=[];for(const P of a){const k=jD(P,h.get(P.key).overlayedDocument);k!=null&&T.push(new lr(P.key,k,Lw(k.value.mapValue),zn.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,T,a)}).next(v=>{d=v;const T=v.applyToLocalDocumentSet(h,y);return l.documentOverlayCache.saveOverlays(f,v.batchId,T)})}).then(()=>({batchId:d.batchId,changes:zw(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,l){let c=o.Sa[o.currentUser.toKey()];c||(c=new Fe(_e)),c=c.insert(a,l),o.Sa[o.currentUser.toKey()]=c}(s,r.batchId,n),await aa(s,r.changes),await Kc(s.remoteStore)}catch(r){const i=$f(r,"Failed to persist write");n.reject(i)}}async function AT(t,e){const n=te(t);try{const s=await M1(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.ya.get(i);o&&(De(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Ra=!0:r.modifiedDocuments.size>0?De(o.Ra):r.removedDocuments.size>0&&(De(o.Ra),o.Ra=!1))}),await aa(n,s,e)}catch(s){await na(s)}}function Lg(t,e,n){const s=te(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const l=te(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(c=!0)}),c&&qf(l)}(s.eventManager,e),r.length&&s.Va.a_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function yx(t,e,n){const s=te(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.ya.get(e),i=r&&r.key;if(i){let o=new Fe(H.comparator);o=o.insert(i,gt.newNoDocument(i,X.min()));const a=ae().add(i),l=new qc(X.min(),new Map,new Fe(_e),o,a);await AT(s,l),s.pa=s.pa.remove(i),s.ya.delete(e),zf(s)}else await Hh(s.localStore,e,!1).then(()=>zh(s,e,n)).catch(na)}async function vx(t,e){const n=te(t),s=e.batch.batchId;try{const r=await x1(n.localStore,e);ST(n,s,null),CT(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await aa(n,r)}catch(r){await na(r)}}async function Ex(t,e,n){const s=te(t);try{const r=await function(o,a){const l=te(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(De(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(s.localStore,e);ST(s,e,n),CT(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await aa(s,r)}catch(r){await na(r)}}function CT(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function ST(t,e,n){const s=te(t);let r=s.Sa[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Sa[s.currentUser.toKey()]=r}}function zh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.fa.get(e))t.ma.delete(s),n&&t.Va.Fa(s,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(s=>{t.wa.containsKey(s)||bT(t,s)})}function bT(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(_T(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),zf(t))}function Vg(t,e,n){for(const s of n)s instanceof IT?(t.wa.addReference(s.key,e),wx(t,s)):s instanceof RT?(U("SyncEngine","Document no longer in limbo: "+s.key),t.wa.removeReference(s.key,e),t.wa.containsKey(s.key)||bT(t,s.key)):Q()}function wx(t,e){const n=e.key,s=n.path.canonicalString();t.pa.get(n)||t.ga.has(s)||(U("SyncEngine","New document in limbo: "+n),t.ga.add(s),zf(t))}function zf(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new H(Le.fromString(e)),s=t.Da.next();t.ya.set(s,new dx(n)),t.pa=t.pa.insert(n,s),gT(t.remoteStore,new cs(In(Uc(n.path)),s,"TargetPurposeLimboResolution",Af._e))}}async function aa(t,e,n){const s=te(t),r=[],i=[],o=[];s.ma.isEmpty()||(s.ma.forEach((a,l)=>{o.push(s.va(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){r.push(c);const u=Lf.Qi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),s.Va.a_(r),await async function(l,c){const u=te(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>S.forEach(c,d=>S.forEach(d.ki,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>S.forEach(d.qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!sa(h))throw h;U("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.ts.get(d),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.ts=u.ts.insert(d,y)}}}(s.localStore,i))}async function Tx(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const s=await dT(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(l=>{l.reject(new W(R.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await aa(n,s._s)}}function Ix(t,e){const n=te(t),s=n.ya.get(e);if(s&&s.Ra)return ae().add(s.key);{let r=ae();const i=n.fa.get(e);if(!i)return r;for(const o of i){const a=n.ma.get(o);r=r.unionWith(a.view.ua)}return r}}function Rx(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=AT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ix.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yx.bind(null,e),e.Va.a_=lx.bind(null,e.eventManager),e.Va.Fa=cx.bind(null,e.eventManager),e}function Ax(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ex.bind(null,e),e}class Fg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Hc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return D1(this.persistence,new N1,e.initialUser,this.serializer)}createPersistence(e){return new b1(Mf.jr,this.serializer)}createSharedClientState(e){return new B1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Cx{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Lg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Tx.bind(null,this.syncEngine),await ix(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ax}()}createDatastore(e){const n=Hc(e.databaseInfo.databaseId),s=function(i){return new q1(i)}(e.databaseInfo);return function(i,o,a,l){return new K1(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,o,a){return new Q1(s,r,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Lg(this.syncEngine,n,0),function(){return Dg.D()?new Dg:new $1}())}createSyncEngine(e,n){return function(r,i,o,a,l,c,u){const h=new fx(r,i,o,a,l,c);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const s=te(n);U("RemoteStore","RemoteStore shutting down."),s.C_.add(5),await oa(s),s.F_.shutdown(),s.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class Kf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Qn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Sx{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=dt.UNAUTHENTICATED,this.clientId=Dw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{U("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(U("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=$f(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ku(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await dT(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ug(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Px(t);U("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>xg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>xg(e.remoteStore,i)),t._onlineComponents=e}function bx(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Px(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await ku(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!bx(n))throw n;Qr("Error using user provided cache. Falling back to memory cache: "+n),await ku(t,new Fg)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await ku(t,new Fg);return t._offlineComponents}async function PT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await Ug(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await Ug(t,new Cx))),t._onlineComponents}function kx(t){return PT(t).then(e=>e.syncEngine)}async function Vl(t){const e=await PT(t),n=e.eventManager;return n.onListen=px.bind(null,e.syncEngine),n.onUnlisten=gx.bind(null,e.syncEngine),n}function Nx(t,e,n={}){const s=new Hn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new Kf({next:d=>{o.enqueueAndForget(()=>jf(i,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new W(R.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new W(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Hf(Uc(a.path),u,{includeMetadataChanges:!0,J_:!0});return Wf(i,h)}(await Vl(t),t.asyncQueue,e,n,s)),s.promise}function Ox(t,e,n={}){const s=new Hn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new Kf({next:d=>{o.enqueueAndForget(()=>jf(i,h)),d.fromCache&&l.source==="server"?c.reject(new W(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Hf(a,u,{includeMetadataChanges:!0,J_:!0});return Wf(i,h)}(await Vl(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function kT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Bg=new Map;/**
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
 */function NT(t,e,n){if(!n)throw new W(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Dx(t,e,n,s){if(e===!0&&s===!0)throw new W(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $g(t){if(!H.isDocumentKey(t))throw new W(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Wg(t){if(H.isDocumentKey(t))throw new W(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function An(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gf(t);throw new W(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class jg{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new W(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Dx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kT((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new W(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new W(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new W(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gc{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jg(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new ZO;switch(s.type){case"firstParty":return new sD(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new W(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Bg.get(n);s&&(U("ComponentProvider","Removing Datastore"),Bg.delete(n),s.terminate())}(this),Promise.resolve()}}function xx(t,e,n,s={}){var r;const i=(t=An(t,Gc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Qr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=dt.MOCK_USER;else{a=rA(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new W(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new dt(c)}t._authCredentials=new eD(new Ow(a,l))}}/**
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
 */class la{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new la(this.firestore,e,this._query)}}class Pt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _s(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}}class _s extends la{constructor(e,n,s){super(e,n,Uc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new H(e))}withConverter(e){return new _s(this.firestore,e,this._path)}}function qg(t,e,...n){if(t=Vt(t),NT("collection","path",e),t instanceof Gc){const s=Le.fromString(e,...n);return Wg(s),new _s(t,null,s)}{if(!(t instanceof Pt||t instanceof _s))throw new W(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Le.fromString(e,...n));return Wg(s),new _s(t.firestore,null,s)}}function eo(t,e,...n){if(t=Vt(t),arguments.length===1&&(e=Dw.newId()),NT("doc","path",e),t instanceof Gc){const s=Le.fromString(e,...n);return $g(s),new Pt(t,null,new H(s))}{if(!(t instanceof Pt||t instanceof _s))throw new W(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Le.fromString(e,...n));return $g(s),new Pt(t.firestore,t instanceof _s?t.converter:null,new H(s))}}/**
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
 */class Mx{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new pT(this,"async_queue_retry"),this.iu=()=>{const n=Pu();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Pu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Pu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new Hn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!sa(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(s=>{this.eu=s,this.tu=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw Qn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.tu=!1,s))));return this.Ja=n,n}enqueueAfterDelay(e,n,s){this.su(),this.ru.indexOf(e)>-1&&(n=0);const r=Bf.createAndSchedule(this,e,n,s,i=>this.au(i));return this.Xa.push(r),r}su(){this.eu&&Q()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function Hg(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const r=n;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ti extends Gc{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=function(){return new Mx}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||DT(this),this._firestoreClient.terminate()}}function OT(t,e){const n=typeof t=="object"?t:wd(),s=typeof t=="string"?t:e||"(default)",r=Ed(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=sA("firestore");i&&xx(r,...i)}return r}function Qc(t){return t._firestoreClient||DT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function DT(t){var e,n,s;const r=t._freezeSettings(),i=function(a,l,c,u){return new mD(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,kT(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new Sx(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
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
 */class ni{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ni(Tt.fromBase64String(e))}catch(n){throw new W(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ni(Tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Qf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class xT{constructor(e){this._methodName=e}}/**
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
 */class Yc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
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
 */const Lx=/^__.*__$/;class Vx{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ra(e,this.data,n,this.fieldTransforms)}}function MT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Yf{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Yf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Tu({path:s,du:!1});return r.Au(e),r}Ru(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Tu({path:s,du:!1});return r.Pu(),r}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Fl(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(MT(this.Iu)&&Lx.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class Fx{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Hc(e)}pu(e,n,s,r=!1){return new Yf({Iu:e,methodName:n,gu:s,path:it.emptyPath(),du:!1,fu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ux(t){const e=t._freezeSettings(),n=Hc(t._databaseId);return new Fx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Bx(t,e,n,s,r,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,r);UT("Data must be an object, but it was:",o,s);const a=VT(s,o);let l,c;if(i.merge)l=new en(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=$x(e,h,n);if(!o.contains(d))throw new W(R.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);jx(u,d)||u.push(d)}l=new en(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new Vx(new jt(a),l,c)}function LT(t,e){if(FT(t=Vt(t)))return UT("Unsupported field value:",e,t),VT(t,e);if(t instanceof xT)return function(s,r){if(!MT(r.Iu))throw r.mu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.mu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let l=LT(a,r.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=Vt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return VD(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=qe.fromDate(s);return{timestampValue:Ml(r.serializer,i)}}if(s instanceof qe){const i=new qe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ml(r.serializer,i)}}if(s instanceof Yc)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ni)return{bytesValue:oT(r.serializer,s._byteString)};if(s instanceof Pt){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Df(s.firestore._databaseId||r.databaseId,s._key.path)}}throw r.mu(`Unsupported field value: ${Gf(s)}`)}(t,e)}function VT(t,e){const n={};return xw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yi(t,(s,r)=>{const i=LT(r,e.Eu(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function FT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof Yc||t instanceof ni||t instanceof Pt||t instanceof xT)}function UT(t,e,n){if(!FT(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const s=Gf(n);throw s==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+s)}}function $x(t,e,n){if((e=Vt(e))instanceof Qf)return e._internalPath;if(typeof e=="string")return BT(t,e);throw Fl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Wx=new RegExp("[~\\*/\\[\\]]");function BT(t,e,n){if(e.search(Wx)>=0)throw Fl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Qf(...e.split("."))._internalPath}catch{throw Fl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fl(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new W(R.INVALID_ARGUMENT,a+t+l)}function jx(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class $T{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(WT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qx extends $T{data(){return super.data()}}function WT(t,e){return typeof e=="string"?BT(t,e):e instanceof Qf?e._internalPath:e._delegate._internalPath}/**
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
 */function jT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hx{convertValue(e,n="none"){switch(nr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return yi(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Yc(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Sf(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(bo(e));default:return null}}convertTimestamp(e){const n=Ts(e);return new qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Le.fromString(e);De(hT(s));const r=new Po(s.get(1),s.get(3)),i=new H(s.popFirst(5));return r.isEqual(n)||Qn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function zx(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class Bi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qT extends $T{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ha(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(WT("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ha extends qT{data(e={}){return super.data(e)}}class HT{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Bi(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ha(this._firestore,this._userDataWriter,s.key,s,new Bi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const l=new Ha(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Bi(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Ha(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Bi(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:Kx(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Kx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
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
 */function zT(t){t=An(t,Pt);const e=An(t.firestore,ti);return Nx(Qc(e),t._key).then(n=>KT(e,t,n))}class Xf extends Hx{constructor(e){super(),this.firestore=e}convertBytes(e){return new ni(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pt(this.firestore,null,n)}}function za(t){t=An(t,la);const e=An(t.firestore,ti),n=Qc(e),s=new Xf(e);return jT(t._query),Ox(n,t._query).then(r=>new HT(e,s,t,r))}function to(t,e,n){t=An(t,Pt);const s=An(t.firestore,ti),r=zx(t.converter,e,n);return Gx(s,[Bx(Ux(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,zn.none())])}function Jf(t,...e){var n,s,r;t=Vt(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Hg(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Hg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let l,c,u;if(t instanceof Pt)c=An(t.firestore,ti),u=Uc(t._key.path),l={next:h=>{e[o]&&e[o](KT(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=An(t,la);c=An(h.firestore,ti),u=h._query;const d=new Xf(c);l={next:f=>{e[o]&&e[o](new HT(c,d,h,f))},error:e[o+1],complete:e[o+2]},jT(t._query)}return function(d,f,g,y){const v=new Kf(y),T=new Hf(f,v,g);return d.asyncQueue.enqueueAndForget(async()=>Wf(await Vl(d),T)),()=>{v.Na(),d.asyncQueue.enqueueAndForget(async()=>jf(await Vl(d),T))}}(Qc(c),u,a,l)}function Gx(t,e){return function(s,r){const i=new Hn;return s.asyncQueue.enqueueAndForget(async()=>_x(await kx(s),r,i)),i.promise}(Qc(t),e)}function KT(t,e,n){const s=n.docs.get(e._key),r=new Xf(t);return new qT(t,r,e._key,s,new Bi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(r){_i=r})(Rs),Sn(new on("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new ti(new tD(s.getProvider("auth-internal")),new iD(s.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Po(c.options.projectId,u)}(o,r),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Mt(hg,"4.3.2",e),Mt(hg,"4.3.2","esm2017")})();/**
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
 */const GT="firebasestorage.googleapis.com",Qx="storageBucket",Yx=2*60*1e3,Xx=10*60*1e3;/**
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
 */class Dn extends On{constructor(e,n,s=0){super(Nu(e),`Firebase Storage: ${n} (${Nu(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Dn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Nu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Nn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Nn||(Nn={}));function Nu(t){return"storage/"+t}function Jx(){const t="An unknown error occurred, please check the error payload for server response.";return new Dn(Nn.UNKNOWN,t)}function Zx(){return new Dn(Nn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function eM(){return new Dn(Nn.CANCELED,"User canceled the upload/download.")}function tM(t){return new Dn(Nn.INVALID_URL,"Invalid URL '"+t+"'.")}function nM(t){return new Dn(Nn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function zg(t){return new Dn(Nn.INVALID_ARGUMENT,t)}function QT(){return new Dn(Nn.APP_DELETED,"The Firebase app was deleted.")}function sM(t){return new Dn(Nn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class tn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=tn.makeFromUrl(e,n)}catch{return new tn(e,"")}if(s.path==="")return s;throw nM(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function c(A){A.path_=decodeURIComponent(A.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),g={bucket:1,path:3},y=n===GT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",T=new RegExp(`^https?://${y}/${r}/${v}`,"i"),k=[{regex:a,indices:l,postModify:i},{regex:f,indices:g,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let A=0;A<k.length;A++){const z=k[A],se=z.regex.exec(e);if(se){const de=se[z.indices.bucket];let G=se[z.indices.path];G||(G=""),s=new tn(de,G),z.postModify(s);break}}if(s==null)throw tM(e);return s}}class rM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function iM(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...v){c||(c=!0,e.apply(null,v))}function h(v){r=setTimeout(()=>{r=null,t(f,l())},v)}function d(){i&&clearTimeout(i)}function f(v,...T){if(c){d();return}if(v){d(),u.call(null,v,...T);return}if(l()||o){d(),u.call(null,v,...T);return}s<64&&(s*=2);let k;a===1?(a=2,k=0):k=(s+Math.random())*1e3,h(k)}let g=!1;function y(v){g||(g=!0,d(),!c&&(r!==null?(v||(a=2),clearTimeout(r),h(0)):v||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,y(!0)},n),y}function oM(t){t(!1)}/**
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
 */function aM(t){return t!==void 0}function Kg(t,e,n,s){if(s<e)throw zg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw zg(`Invalid value for '${t}'. Expected ${n} or less.`)}function lM(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var Ul;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ul||(Ul={}));/**
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
 */function cM(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
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
 */class uM{constructor(e,n,s,r,i,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Pa(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Ul.NO_ERROR,l=i.getStatus();if(!a||cM(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===Ul.ABORT;s(!1,new Pa(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new Pa(c,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());aM(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Jx();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?QT():eM();o(l)}else{const l=Zx();o(l)}};this.canceled_?n(!1,new Pa(!1,null,!0)):this.backoffId_=iM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&oM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Pa{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function hM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function dM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function fM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function pM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function mM(t,e,n,s,r,i,o=!0){const a=lM(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return fM(c,e),hM(c,n),dM(c,i),pM(c,s),new uM(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
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
 */function gM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function _M(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Bl{constructor(e,n){this._service=e,n instanceof tn?this._location=n:this._location=tn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Bl(e,n)}get root(){const e=new tn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _M(this._location.path)}get storage(){return this._service}get parent(){const e=gM(this._location.path);if(e===null)return null;const n=new tn(this._location.bucket,e);return new Bl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw sM(e)}}function Gg(t,e){const n=e==null?void 0:e[Qx];return n==null?null:tn.makeFromBucketSpec(n,t)}class yM{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=GT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Yx,this._maxUploadRetryTime=Xx,this._requests=new Set,r!=null?this._bucket=tn.makeFromBucketSpec(r,this._host):this._bucket=Gg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=tn.makeFromBucketSpec(this._url,e):this._bucket=Gg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Kg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Kg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Bl(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new rM(QT());{const o=mM(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Qg="@firebase/storage",Yg="0.11.2";/**
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
 */const vM="storage";function EM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new yM(n,s,r,e,Rs)}function wM(){Sn(new on(vM,EM,"PUBLIC").setMultipleInstances(!0)),Mt(Qg,Yg,""),Mt(Qg,Yg,"esm2017")}wM();const Ou=new WeakMap;function YT(t,e){return Ou.has(e)||Ou.set(e,t||{f:{},r:{},s:{},u:{}}),Ou.get(e)}function TM(t,e,n,s){if(!t)return n;const[r,i]=XT(t);if(!r)return n;const o=YT(void 0,s)[r]||{},a=e||i;return a&&a in o?o[a]:n}function IM(t,e,n,s){if(!t)return;const[r,i]=XT(t);if(!r)return;const o=YT(void 0,s)[r],a=e||i;if(a)return n.then(l=>{o[a]=l}).catch(gn),a}function XT(t){return eP(t)||tP(t)?["f",t.path]:nP(t)?["r",t.toString()]:sP(t)?["s",t.toString()]:[]}const Du=new WeakMap;function RM(t,e,n){const s=Nd();Du.has(s)||Du.set(s,new Map);const r=Du.get(s),i=IM(e,n,t,s);return i&&r.set(i,t),i?()=>r.delete(i):gn}const AM={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Kh(t,e,n,s){if(!Jb(t))return[t,{}];const r=[{},{}],i=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const g=Object.getOwnPropertyDescriptor(a,f);g&&!g.enumerable&&Object.defineProperty(h,f,g)});for(const f in a){const g=a[f];if(g==null||g instanceof Date||g instanceof qe||g instanceof Yc)h[f]=g;else if(Dd(g)){const y=c+f;h[f]=y in n?l[f]:g.path,d[y]=g.converter?g:g.withConverter(s.converter)}else if(Array.isArray(g)){h[f]=Array(g.length);for(let y=0;y<g.length;y++){const v=g[y];v&&v.path in i&&(h[f][y]=i[v.path])}o(g,l[f]||h[f],c+f+".",[h[f],d])}else rr(g)?(h[f]={},o(g,l[f],c+f+".",[h[f],d])):h[f]=g}}return o(t,e,"",r),r}const Zf={reset:!1,wait:!0,maxRefDepth:2,converter:AM,snapshotOptions:{serverTimestamps:"estimate"}};function $l(t){for(const e in t)t[e].unsub()}function Gh(t,e,n,s,r,i,o,a,l){const[c,u]=Kh(s.data(t.snapshotOptions),Od(e,n),r,t);i.set(e,n,c),Qh(t,e,n,r,u,i,o,a,l)}function CM({ref:t,target:e,path:n,depth:s,resolve:r,reject:i,ops:o},a){const l=Object.create(null);let c=gn;return a.once?zT(t).then(u=>{u.exists()?Gh(a,e,n,u,l,o,s,r,i):(o.set(e,n,null),r())}).catch(i):c=Jf(t,u=>{u.exists()?Gh(a,e,n,u,l,o,s,r,i):(o.set(e,n,null),r())},i),()=>{c(),$l(l)}}function Qh(t,e,n,s,r,i,o,a,l){const c=Object.keys(r);if(Object.keys(s).filter(y=>c.indexOf(y)<0).forEach(y=>{s[y].unsub(),delete s[y]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const d=c.length,f=Object.create(null);function g(y){y in f&&++h>=d&&a(n)}c.forEach(y=>{const v=s[y],T=r[y],P=`${n}.${y}`;if(f[P]=!0,v)if(v.path!==T.path)v.unsub();else return;s[y]={data:()=>Od(e,P),unsub:CM({ref:T,target:e,path:P,depth:o,ops:i,resolve:g.bind(null,P),reject:l},t),path:T.path}})}function SM(t,e,n,s,r,i){const o=Object.assign({},Zf,i),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let d=ds(c?[]:t.value);c||n.set(t,h,[]);const f=s;let g,y=gn;const v=[],T={added:({newIndex:k,doc:A})=>{v.splice(k,0,Object.create(null));const z=v[k],[se,de]=Kh(A.data(l),void 0,z,o);n.add(Ln(d),k,se),Qh(o,d,`${h}.${k}`,z,de,n,0,s.bind(null,A),r)},modified:({oldIndex:k,newIndex:A,doc:z})=>{const se=Ln(d),de=v[k],G=se[k],[ne,Ie]=Kh(z.data(l),G,de,o);v.splice(A,0,de),n.remove(se,k),n.add(se,A,ne),Qh(o,d,`${h}.${A}`,de,Ie,n,0,s,r)},removed:({oldIndex:k})=>{const A=Ln(d);n.remove(A,k),$l(v.splice(k,1)[0])}};function P(k){const A=k.docChanges(a);if(!g&&A.length){g=!0;let z=0;const se=A.length,de=Object.create(null);for(let G=0;G<se;G++)de[A[G].doc.id]=!0;s=G=>{G&&G.id in de&&++z>=se&&(c&&(n.set(t,h,Ln(d)),d=t),f(Ln(d)),s=gn)}}A.forEach(z=>{T[z.type](z)}),A.length||(c&&(n.set(t,h,Ln(d)),d=t),s(Ln(d)))}return u?za(e).then(P).catch(r):y=Jf(e,P,r),k=>{if(y(),k){const A=typeof k=="function"?k():[];n.set(t,h,A)}v.forEach($l)}}function bM(t,e,n,s,r,i){const o=Object.assign({},Zf,i),a="value",l=Object.create(null);s=rP(s,()=>Od(t,a));let c=gn;function u(h){h.exists()?Gh(o,t,a,h,l,n,0,s,r):(n.set(t,a,null),s(null))}return o.once?zT(e).then(u).catch(r):c=Jf(e,u,r),h=>{if(c(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}$l(l)}}const Xg=Symbol();function PM(t,e){let n=gn;const s=Object.assign({},Zf,e),r=Ln(t),i=s.target||ds();oP()&&(s.once=!0);const o=TM(r,s.ssrKey,Xg,Nd()),a=o!==Xg;a&&(i.value=o);let l=!a;const c=ds(!1),u=ds(),h=$_(),d=sd();let f=gn;function g(){let T=Ln(t);const P=new Promise((k,A)=>{if(n(s.reset),!T)return n=gn,k(null);c.value=l,l=!0,T.converter||(T=T.withConverter(s.converter)),n=(Dd(T)?bM:SM)(i,T,kM,k,A,s)}).catch(k=>(h.value===P&&(u.value=k),Promise.reject(k))).finally(()=>{h.value===P&&(c.value=!1)});h.value=P}let y=gn;Ve(t)&&(y=Sr(t,g)),g(),r&&(f=RM(h.value,r,s.ssrKey)),my()&&sy(()=>h.value),d&&A_(v);function v(T=s.reset){y(),f(),n(T)}return Object.defineProperties(i,{error:{get:()=>u},data:{get:()=>i},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>v}})}const kM={set:(t,e,n)=>Yb(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)},ki=new WeakMap;function NM(t,e,n){e&&e[t]&&(e[t](n),delete e[t])}const OM={bindName:"$firestoreBind",unbindName:"$firestoreUnbind"},DM=function(e,n,s){const r=Object.assign({},OM,n),{bindName:i,unbindName:o}=r,a=e.config.globalProperties;a[o]=function(c,u){NM(c,ki.get(this),u),delete this.$firestoreRefs[c]},a[i]=function(c,u,h){const d=Object.assign({},r,h),f=e0(this.$data,c);ki.has(this)||ki.set(this,{});const g=ki.get(this);g[c]&&g[c](d.reset);const y=aP(s||Nd(),e).run(()=>Jl()),{promise:v,stop:T}=e.runWithContext(()=>y.run(()=>PM(u,{target:f,...d}))),P=k=>{T(k),y.stop()};return g[c]=P,this.$firestoreRefs[c]=u,v.value},e.mixin({beforeCreate(){this.$firestoreRefs=Object.create(null)},created(){const{firestore:l}=this.$options,c=typeof l=="function"?l.call(this):l;if(c)for(const u in c)this[i](u,c[u],r)},beforeUnmount(){const l=ki.get(this);if(l)for(const c in l)l[c]();this.$firestoreRefs=null}})};function xM(t){return(e,n)=>DM(n,t,e)}function MM(t,{firebaseApp:e,modules:n=[]}){t.provide(yv,e);for(const s of n)s(e,t)}const ep=Vy({apiKey:"AIzaSyD3_PR3stakqPCdQaVutT5fORlmXsMNPM0",authDomain:"quizzify-d3053.firebaseapp.com",projectId:"quizzify-d3053",storageBucket:"quizzify-d3053.appspot.com",messagingSenderId:"955132845389",appId:"1:955132845389:web:3346cc1457aeeaa97b2b04"});OT(ep);const Vr=window.location.href.includes("localhost")?"_dev":"";/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Er=typeof window<"u";function LM(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const we=Object.assign;function xu(t,e){const n={};for(const s in e){const r=e[s];n[s]=cn(r)?r.map(t):t(r)}return n}const no=()=>{},cn=Array.isArray,VM=/\/$/,FM=t=>t.replace(VM,"");function Mu(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=WM(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function UM(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Jg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function BM(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&si(e.matched[s],n.matched[r])&&JT(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function si(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function JT(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$M(t[n],e[n]))return!1;return!0}function $M(t,e){return cn(t)?Zg(t,e):cn(e)?Zg(e,t):t===e}function Zg(t,e){return cn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function WM(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Do;(function(t){t.pop="pop",t.push="push"})(Do||(Do={}));var so;(function(t){t.back="back",t.forward="forward",t.unknown=""})(so||(so={}));function jM(t){if(!t)if(Er){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),FM(t)}const qM=/^[^#]+#/;function HM(t,e){return t.replace(qM,"#")+e}function zM(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Xc=()=>({left:window.pageXOffset,top:window.pageYOffset});function KM(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=zM(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function e_(t,e){return(history.state?history.state.position-e:-1)+t}const Yh=new Map;function GM(t,e){Yh.set(t,e)}function QM(t){const e=Yh.get(t);return Yh.delete(t),e}let YM=()=>location.protocol+"//"+location.host;function ZT(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Jg(l,"")}return Jg(n,t)+s+r}function XM(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const f=ZT(t,location),g=n.value,y=e.value;let v=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}v=y?d.position-y.position:0}else s(f);r.forEach(T=>{T(n.value,g,{delta:v,type:Do.pop,direction:v?v>0?so.forward:so.back:so.unknown})})};function l(){o=n.value}function c(d){r.push(d);const f=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return i.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(we({},d.state,{scroll:Xc()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function t_(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Xc():null}}function JM(t){const{history:e,location:n}=window,s={value:ZT(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:YM()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=we({},e.state,t_(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,u,!0),s.value=l}function a(l,c){const u=we({},r.value,e.state,{forward:l,scroll:Xc()});i(u.current,u,!0);const h=we({},t_(s.value,l,null),{position:u.position+1},c);i(l,h,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function ZM(t){t=jM(t);const e=JM(t),n=XM(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=we({location:"",base:t,go:s,createHref:HM.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function eL(t){return typeof t=="string"||t&&typeof t=="object"}function eI(t){return typeof t=="string"||typeof t=="symbol"}const ns={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},tI=Symbol("");var n_;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(n_||(n_={}));function ri(t,e){return we(new Error,{type:t,[tI]:!0},e)}function Mn(t,e){return t instanceof Error&&tI in t&&(e==null||!!(t.type&e))}const s_="[^/]+?",tL={sensitive:!1,strict:!1,start:!0,end:!0},nL=/[.+*?^${}()[\]/\\]/g;function sL(t,e){const n=we({},tL,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(nL,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:y,optional:v,regexp:T}=d;i.push({name:g,repeatable:y,optional:v});const P=T||s_;if(P!==s_){f+=10;try{new RegExp(`(${P})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${g}" (${P}): `+A.message)}}let k=y?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(k=v&&c.length<2?`(?:/${k})`:"/"+k),v&&(k+="?"),r+=k,f+=20,v&&(f+=-8),y&&(f+=-20),P===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=i[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:y,optional:v}=f,T=g in c?c[g]:"";if(cn(T)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const P=cn(T)?T.join("/"):T;if(!P)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=P}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:l}}function rL(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function iL(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=rL(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(r_(s))return 1;if(r_(r))return-1}return r.length-s.length}function r_(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const oL={type:0,value:""},aL=/[a-zA-Z0-9_]/;function lL(t){if(!t)return[[]];if(t==="/")return[[oL]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:aL.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function cL(t,e,n){const s=sL(lL(t.path),n),r=we(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function uL(t,e){const n=[],s=new Map;e=a_({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const f=!d,g=hL(u);g.aliasOf=d&&d.record;const y=a_(e,u),v=[g];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const A of k)v.push(we({},g,{components:d?d.record.components:g.components,path:A,aliasOf:d?d.record:g}))}let T,P;for(const k of v){const{path:A}=k;if(h&&A[0]!=="/"){const z=h.record.path,se=z[z.length-1]==="/"?"":"/";k.path=h.record.path+(A&&se+A)}if(T=cL(k,h,y),d?d.alias.push(T):(P=P||T,P!==T&&P.alias.push(T),f&&u.name&&!o_(T)&&o(u.name)),g.children){const z=g.children;for(let se=0;se<z.length;se++)i(z[se],T,d&&d.children[se])}d=d||T,(T.record.components&&Object.keys(T.record.components).length||T.record.name||T.record.redirect)&&l(T)}return P?()=>{o(P)}:no}function o(u){if(eI(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&iL(u,n[h])>=0&&(u.record.path!==n[h].record.path||!nI(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!o_(u)&&s.set(u.record.name,u)}function c(u,h){let d,f={},g,y;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw ri(1,{location:u});y=d.record.name,f=we(i_(h.params,d.keys.filter(P=>!P.optional).map(P=>P.name)),u.params&&i_(u.params,d.keys.map(P=>P.name))),g=d.stringify(f)}else if("path"in u)g=u.path,d=n.find(P=>P.re.test(g)),d&&(f=d.parse(g),y=d.record.name);else{if(d=h.name?s.get(h.name):n.find(P=>P.re.test(h.path)),!d)throw ri(1,{location:u,currentLocation:h});y=d.record.name,f=we({},h.params,u.params),g=d.stringify(f)}const v=[];let T=d;for(;T;)v.unshift(T.record),T=T.parent;return{name:y,path:g,params:f,matched:v,meta:fL(v)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function i_(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function hL(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:dL(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function dL(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function o_(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function fL(t){return t.reduce((e,n)=>we(e,n.meta),{})}function a_(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function nI(t,e){return e.children.some(n=>n===t||nI(t,n))}const sI=/#/g,pL=/&/g,mL=/\//g,gL=/=/g,_L=/\?/g,rI=/\+/g,yL=/%5B/g,vL=/%5D/g,iI=/%5E/g,EL=/%60/g,oI=/%7B/g,wL=/%7C/g,aI=/%7D/g,TL=/%20/g;function tp(t){return encodeURI(""+t).replace(wL,"|").replace(yL,"[").replace(vL,"]")}function IL(t){return tp(t).replace(oI,"{").replace(aI,"}").replace(iI,"^")}function Xh(t){return tp(t).replace(rI,"%2B").replace(TL,"+").replace(sI,"%23").replace(pL,"%26").replace(EL,"`").replace(oI,"{").replace(aI,"}").replace(iI,"^")}function RL(t){return Xh(t).replace(gL,"%3D")}function AL(t){return tp(t).replace(sI,"%23").replace(_L,"%3F")}function CL(t){return t==null?"":AL(t).replace(mL,"%2F")}function Wl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function SL(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(rI," "),o=i.indexOf("="),a=Wl(o<0?i:i.slice(0,o)),l=o<0?null:Wl(i.slice(o+1));if(a in e){let c=e[a];cn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function l_(t){let e="";for(let n in t){const s=t[n];if(n=RL(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(cn(s)?s.map(i=>i&&Xh(i)):[s&&Xh(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function bL(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=cn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const PL=Symbol(""),c_=Symbol(""),np=Symbol(""),lI=Symbol(""),Jh=Symbol("");function Ni(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function is(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(ri(4,{from:n,to:e})):h instanceof Error?a(h):eL(h)?a(ri(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(s&&s.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Lu(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(kL(a)){const c=(a.__vccOpts||a)[e];c&&r.push(is(c,n,s,i,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=LM(c)?c.default:c;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&is(d,n,s,i,o)()}))}}return r}function kL(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function u_(t){const e=Ht(np),n=Ht(lI),s=$t(()=>e.resolve(Ws(t.to))),r=$t(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(si.bind(null,u));if(d>-1)return d;const f=h_(l[c-2]);return c>1&&h_(u)===f&&h[h.length-1].path!==f?h.findIndex(si.bind(null,l[c-2])):d}),i=$t(()=>r.value>-1&&xL(n.params,s.value.params)),o=$t(()=>r.value>-1&&r.value===n.matched.length-1&&JT(n.params,s.value.params));function a(l={}){return DL(l)?e[Ws(t.replace)?"replace":"push"](Ws(t.to)).catch(no):Promise.resolve()}return{route:s,href:$t(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const NL=Z_({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:u_,setup(t,{slots:e}){const n=Lo(u_(t)),{options:s}=Ht(np),r=$t(()=>({[d_(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[d_(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:yy("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),OL=NL;function DL(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function xL(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!cn(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function h_(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const d_=(t,e,n)=>t??e??n,ML=Z_({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ht(Jh),r=$t(()=>t.route||s.value),i=Ht(c_,0),o=$t(()=>{let c=Ws(i);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=$t(()=>r.value.matched[o.value]);Ma(c_,$t(()=>o.value+1)),Ma(PL,a),Ma(Jh,r);const l=ds();return Sr(()=>[l.value,a.value,t.name],([c,u,h],[d,f,g])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!si(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return f_(n.default,{Component:d,route:c});const f=h.props[u],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,v=yy(d,we({},g,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return f_(n.default,{Component:v,route:c})||v}}});function f_(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const LL=ML;function VL(t){const e=uL(t.routes,t),n=t.parseQuery||SL,s=t.stringifyQuery||l_,r=t.history,i=Ni(),o=Ni(),a=Ni(),l=$_(ns);let c=ns;Er&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=xu.bind(null,w=>""+w),h=xu.bind(null,CL),d=xu.bind(null,Wl);function f(w,F){let D,$;return eI(w)?(D=e.getRecordMatcher(w),$=F):$=w,e.addRoute($,D)}function g(w){const F=e.getRecordMatcher(w);F&&e.removeRoute(F)}function y(){return e.getRoutes().map(w=>w.record)}function v(w){return!!e.getRecordMatcher(w)}function T(w,F){if(F=we({},F||l.value),typeof w=="string"){const _=Mu(n,w,F.path),E=e.resolve({path:_.path},F),I=r.createHref(_.fullPath);return we(_,E,{params:d(E.params),hash:Wl(_.hash),redirectedFrom:void 0,href:I})}let D;if("path"in w)D=we({},w,{path:Mu(n,w.path,F.path).path});else{const _=we({},w.params);for(const E in _)_[E]==null&&delete _[E];D=we({},w,{params:h(_)}),F.params=h(F.params)}const $=e.resolve(D,F),ve=w.hash||"";$.params=u(d($.params));const p=UM(s,we({},w,{hash:IL(ve),path:$.path})),m=r.createHref(p);return we({fullPath:p,hash:ve,query:s===l_?bL(w.query):w.query||{}},$,{redirectedFrom:void 0,href:m})}function P(w){return typeof w=="string"?Mu(n,w,l.value.path):we({},w)}function k(w,F){if(c!==w)return ri(8,{from:F,to:w})}function A(w){return de(w)}function z(w){return A(we(P(w),{replace:!0}))}function se(w){const F=w.matched[w.matched.length-1];if(F&&F.redirect){const{redirect:D}=F;let $=typeof D=="function"?D(w):D;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=P($):{path:$},$.params={}),we({query:w.query,hash:w.hash,params:"path"in $?{}:w.params},$)}}function de(w,F){const D=c=T(w),$=l.value,ve=w.state,p=w.force,m=w.replace===!0,_=se(D);if(_)return de(we(P(_),{state:typeof _=="object"?we({},ve,_.state):ve,force:p,replace:m}),F||D);const E=D;E.redirectedFrom=F;let I;return!p&&BM(s,$,D)&&(I=ri(16,{to:E,from:$}),un($,$,!0,!1)),(I?Promise.resolve(I):Ie(E,$)).catch(C=>Mn(C)?Mn(C,2)?C:Zn(C):ye(C,E,$)).then(C=>{if(C){if(Mn(C,2))return de(we({replace:m},P(C.to),{state:typeof C.to=="object"?we({},ve,C.to.state):ve,force:p}),F||E)}else C=Nt(E,$,!0,m,ve);return ct(E,$,C),C})}function G(w,F){const D=k(w,F);return D?Promise.reject(D):Promise.resolve()}function ne(w){const F=hr.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(w):w()}function Ie(w,F){let D;const[$,ve,p]=FL(w,F);D=Lu($.reverse(),"beforeRouteLeave",w,F);for(const _ of $)_.leaveGuards.forEach(E=>{D.push(is(E,w,F))});const m=G.bind(null,w,F);return D.push(m),ut(D).then(()=>{D=[];for(const _ of i.list())D.push(is(_,w,F));return D.push(m),ut(D)}).then(()=>{D=Lu(ve,"beforeRouteUpdate",w,F);for(const _ of ve)_.updateGuards.forEach(E=>{D.push(is(E,w,F))});return D.push(m),ut(D)}).then(()=>{D=[];for(const _ of p)if(_.beforeEnter)if(cn(_.beforeEnter))for(const E of _.beforeEnter)D.push(is(E,w,F));else D.push(is(_.beforeEnter,w,F));return D.push(m),ut(D)}).then(()=>(w.matched.forEach(_=>_.enterCallbacks={}),D=Lu(p,"beforeRouteEnter",w,F),D.push(m),ut(D))).then(()=>{D=[];for(const _ of o.list())D.push(is(_,w,F));return D.push(m),ut(D)}).catch(_=>Mn(_,8)?_:Promise.reject(_))}function ct(w,F,D){a.list().forEach($=>ne(()=>$(w,F,D)))}function Nt(w,F,D,$,ve){const p=k(w,F);if(p)return p;const m=F===ns,_=Er?history.state:{};D&&($||m?r.replace(w.fullPath,we({scroll:m&&_&&_.scroll},ve)):r.push(w.fullPath,ve)),l.value=w,un(w,F,D,m),Zn()}let Ut;function Ss(){Ut||(Ut=r.listen((w,F,D)=>{if(!ca.listening)return;const $=T(w),ve=se($);if(ve){de(we(ve,{replace:!0}),$).catch(no);return}c=$;const p=l.value;Er&&GM(e_(p.fullPath,D.delta),Xc()),Ie($,p).catch(m=>Mn(m,12)?m:Mn(m,2)?(de(m.to,$).then(_=>{Mn(_,20)&&!D.delta&&D.type===Do.pop&&r.go(-1,!1)}).catch(no),Promise.reject()):(D.delta&&r.go(-D.delta,!1),ye(m,$,p))).then(m=>{m=m||Nt($,p,!1),m&&(D.delta&&!Mn(m,8)?r.go(-D.delta,!1):D.type===Do.pop&&Mn(m,20)&&r.go(-1,!1)),ct($,p,m)}).catch(no)}))}let Bt=Ni(),ge=Ni(),Ce;function ye(w,F,D){Zn(w);const $=ge.list();return $.length?$.forEach(ve=>ve(w,F,D)):console.error(w),Promise.reject(w)}function xn(){return Ce&&l.value!==ns?Promise.resolve():new Promise((w,F)=>{Bt.add([w,F])})}function Zn(w){return Ce||(Ce=!w,Ss(),Bt.list().forEach(([F,D])=>w?D(w):F()),Bt.reset()),w}function un(w,F,D,$){const{scrollBehavior:ve}=t;if(!Er||!ve)return Promise.resolve();const p=!D&&QM(e_(w.fullPath,0))||($||!D)&&history.state&&history.state.scroll||null;return hd().then(()=>ve(w,F,p)).then(m=>m&&KM(m)).catch(m=>ye(m,w,F))}const Ct=w=>r.go(w);let ur;const hr=new Set,ca={currentRoute:l,listening:!0,addRoute:f,removeRoute:g,hasRoute:v,getRoutes:y,resolve:T,options:t,push:A,replace:z,go:Ct,back:()=>Ct(-1),forward:()=>Ct(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ge.add,isReady:xn,install(w){const F=this;w.component("RouterLink",OL),w.component("RouterView",LL),w.config.globalProperties.$router=F,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>Ws(l)}),Er&&!ur&&l.value===ns&&(ur=!0,A(r.location).catch(ve=>{}));const D={};for(const ve in ns)Object.defineProperty(D,ve,{get:()=>l.value[ve],enumerable:!0});w.provide(np,F),w.provide(lI,L_(D)),w.provide(Jh,l);const $=w.unmount;hr.add(w),w.unmount=function(){hr.delete(w),hr.size<1&&(c=ns,Ut&&Ut(),Ut=null,l.value=ns,ur=!1,Ce=!1),$()}}};function ut(w){return w.reduce((F,D)=>F.then(()=>ne(D)),Promise.resolve())}return ca}function FL(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>si(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>si(c,l))||r.push(l))}return[n,s,r]}const UL={name:"Register",data(){return{signingIn:!1,errorMessage:""}},async mounted(){const t=oh();await t.authStateReady(),t.currentUser&&zl.push("/main")},methods:{async signInWithGoogle(){if(this.signingIn)return;this.signingIn=!0,this.errorMessage="";const t=new Fn,e=oh();try{await DS(e,t),zl.push("/main")}catch(n){this.errorMessage=this.messageFor(n)}finally{this.signingIn=!1}},messageFor(t){switch(t.code){case"auth/popup-closed-by-user":case"auth/cancelled-popup-request":return"";case"auth/popup-blocked":return"Le navigateur a bloqué la fenêtre de connexion. Autorisez les pop-ups pour ce site, puis réessayez.";case"auth/unauthorized-domain":return"Ce domaine n'est pas autorisé dans la console Firebase (Authentication > Settings > Authorized domains).";case"auth/network-request-failed":return"Connexion réseau impossible. Vérifiez votre accès à Internet.";default:return`Échec de la connexion (${t.code||t.message}).`}}}},BL=t=>(rc("data-v-9976e7c1"),t=t(),ic(),t),$L={class:"registerPanel"},WL=BL(()=>V("div",{class:"registerTitle"},"Quizzify",-1)),jL=["disabled"],qL={key:0,class:"registerError"};function HL(t,e,n,s,r,i){return re(),pe("div",$L,[WL,V("button",{class:"registerButton",disabled:r.signingIn,onClick:e[0]||(e[0]=(...o)=>i.signInWithGoogle&&i.signInWithGoogle(...o))},je(r.signingIn?"Connexion...":"Se connecter avec Google"),9,jL),r.errorMessage?(re(),pe("div",qL,je(r.errorMessage),1)):bt("",!0)])}const zL=Kt(UL,[["render",HL],["__scopeId","data-v-9976e7c1"]]);const KL={name:"MenuItem",props:["name","beforeSelected","afterSelected","selected","unselected"],methods:{menuClicked(){this.$emit("menuClicked",this.name)}},computed:{getMenuSrc(){return"menu_"+this.name+(this.selected?"":"_unselected")+".png"}}},GL=["src"];function QL(t,e,n,s,r,i){return re(),pe("div",{onClick:e[0]||(e[0]=o=>i.menuClicked(n.name)),class:ii(["menuItem",{afterSelected:n.afterSelected,beforeSelected:n.beforeSelected,selected:n.selected,unselected:n.unselected}])},[V("img",{class:"img_menu",src:i.getMenuSrc},null,8,GL)],2)}const YL=Kt(KL,[["render",QL]]);const XL={name:"Menu",components:{MenuItem:YL},data(){return{menuItems:[{item:"play",selected:!0},{item:"statistiques",selected:!1}]}},methods:{menuClicked(t){this.menuItems.find(e=>e.item===t).selected=!0,this.menuItems.filter(e=>e.item!==t).forEach(e=>e.selected=!1),this.$emit("menuClicked",t)},itemSelected(t){return this.menuItems.find(e=>e.item===t).selected},itemUnselected(t){return this.menuItems.find(e=>e.item===t).selected===!1},isBeforeSelected(t){const e=this.menuItems.findIndex(n=>n.selected);return this.menuItems[e-1]!==void 0&&this.menuItems[e-1].item===t},isAfterSelected(t){const e=this.menuItems.findIndex(n=>n.selected);return this.menuItems[e+1]!==void 0&&this.menuItems[e+1].item===t}}},JL={class:"menuPanel"};function ZL(t,e,n,s,r,i){const o=Xt("MenuItem");return re(),pe("div",JL,[(re(!0),pe(nt,null,Za(r.menuItems,a=>(re(),Vo(o,{name:a.item,beforeSelected:i.isBeforeSelected(a.item),afterSelected:i.isAfterSelected(a.item),selected:i.itemSelected(a.item),unselected:i.itemUnselected(a.item),onMenuClicked:i.menuClicked},null,8,["name","beforeSelected","afterSelected","selected","unselected","onMenuClicked"]))),256))])}const eV=Kt(XL,[["render",ZL]]),ft=Iy({id:"partyVocab",state:()=>({words:[],newWords:[],nbErrors:0,hasAlreadyPlayed:!1}),actions:{setAnswered(t){this.words.find(e=>e.id===t).answered=!0},setValidated(t){this.words.find(e=>e.id===t).validated=!0},setWords(t){this.words=t},setNewWords(t){this.newWords=t},setNbErrors(t){this.nbErrors=t}},getters:{}});let ka;const tV=new Uint8Array(16);function nV(){if(!ka&&(ka=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ka))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ka(tV)}const et=[];for(let t=0;t<256;++t)et.push((t+256).toString(16).slice(1));function sV(t,e=0){return et[t[e+0]]+et[t[e+1]]+et[t[e+2]]+et[t[e+3]]+"-"+et[t[e+4]]+et[t[e+5]]+"-"+et[t[e+6]]+et[t[e+7]]+"-"+et[t[e+8]]+et[t[e+9]]+"-"+et[t[e+10]]+et[t[e+11]]+et[t[e+12]]+et[t[e+13]]+et[t[e+14]]+et[t[e+15]]}const rV=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),p_={randomUUID:rV};function cI(t,e,n){if(p_.randomUUID&&!e&&!t)return p_.randomUUID();t=t||{};const s=t.random||(t.rng||nV)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,e){n=n||0;for(let r=0;r<16;++r)e[n+r]=s[r];return e}return sV(s)}function m_(t){return t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear()}function uI(t){const e=t.split("/");return new Date(e[2],e[1]-1,e[0])}function Fr(){return new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()}function Na(t){const e=uI(t.reminder.answeredDate);return e.setDate(e.getDate()+t.reminder.remindDelay),e}const jl="exact",ql="accent",Hl="wrong";function xo(t){return String(t??"").normalize("NFC").trim().toLowerCase().replace(/\s+/g," ")}function g_(t){return xo(t).split("ñ").map(e=>e.normalize("NFD").replace(/\p{Mn}/gu,"")).join("ñ").replace(/[¿?¡!.,;:]/g,"").replace(/\s+/g," ").trim()}function iV(t,e){if(xo(t)===xo(e))return jl;const n=g_(t);return n!==""&&n===g_(e)?ql:Hl}function oV(t,e){const n=[e.es,...e.alt||[]];let s={status:Hl,expected:e.es};for(const r of n){const i=iV(t,r);if(i===jl)return{status:jl,expected:r};i===ql&&s.status===Hl&&(s={status:ql,expected:r})}return s}const aV={name:"SpecialCharsKeyboard",emits:["insert"],data(){return{specialChars:["ñ","á","é","í","ó","ú","ü","¿","¡"]}}},lV={class:"specialCharsZone"},cV=["onClick"];function uV(t,e,n,s,r,i){return re(),pe("div",lV,[(re(!0),pe(nt,null,Za(r.specialChars,o=>(re(),pe("button",{key:o,type:"button",class:"specialCharButton",tabindex:"-1",onClick:a=>t.$emit("insert",o)},je(o),9,cV))),128))])}const hI=Kt(aV,[["render",uV],["__scopeId","data-v-a26ece02"]]);const hV={name:"QuestionVocab",components:{SpecialCharsKeyboard:hI},props:["word","dryrun"],watch:{word:{handler:function(t,e){t.id!==e.id&&this.updateCalendarLogoPath(t)},deep:!0}},data(){return{answer:"",answerStatus:"",validated:!1,headerColor:"",headerBackgroundColor:"",resultMessage:"",expected:"",otherAccepted:[],delayResult:"",hasBeenAnswered:!0,calendarLogoPath:"calendar.png"}},created(){this.updateCalendarLogoPath(this.word)},mounted(){this.focusInput()},methods:{onEnter(){this.validated?this.getNextQuestion():this.validate()},focusInput(){this.$nextTick(()=>{this.$refs.answerInput&&this.$refs.answerInput.focus()})},insertChar(t){const e=this.$refs.answerInput,n=e?e.selectionStart:this.answer.length,s=e?e.selectionEnd:this.answer.length;this.answer=this.answer.slice(0,n)+t+this.answer.slice(s),this.$nextTick(()=>{if(e){const r=n+t.length;e.focus(),e.setSelectionRange(r,r)}})},validate(){this.hasBeenAnswered=this.word.answered,this.validated=!0;const t=oV(this.answer,this.word),e=t.status!==Hl;this.answerStatus=t.status,this.expected=t.expected,this.otherAccepted=[this.word.es,...this.word.alt||[]].filter(r=>xo(r)!==xo(t.expected)),t.status===jl?(this.headerColor="#3c763d",this.headerBackgroundColor="#dff0d8",this.resultMessage="Correct"):t.status===ql?(this.headerColor="#AA6C00",this.headerBackgroundColor="#FFE5C1",this.resultMessage="Presque, attention aux accents"):(this.headerColor="#a94442",this.headerBackgroundColor="#f2dede",this.resultMessage="Faux"),e&&ft().setValidated(this.word.id);let n=this.word.reminder===void 0?"New":this.word.reminder.remindDelay,s=n;if(!this.word.answered){const r=this.getReminderDelay(e),i=Fr();this.word.reminder===void 0&&!this.dryrun?(s=r,this.insertWordReminder(r,i)):this.word.reminder!==void 0&&i!==this.word.reminder.answeredDate&&!this.dryrun&&(s=r,this.updateWordReminder(r,i))}!this.word.answered&&!e&&ft().setNbErrors(ft().nbErrors+1),ft().setAnswered(this.word.id),this.delayResult=`${n} => ${s}`,this.$nextTick(()=>{this.$refs.nextButton&&this.$refs.nextButton.focus()})},async reset(){await to(eo(Ur,"WordReminder"+Vr,this.word.reminder.id),{answeredDate:Fr(),firstAnsweredDate:Fr(),wordId:this.word.id,remindDelay:0}),ft().setValidated(this.word.id),this.getNextQuestion()},getReminderDelay(t){if(this.word.reminder===void 0)return t?1:0;const e=[0,1,2,3,5,8,13,21,34,55],n=e.indexOf(this.word.reminder.remindDelay);return t?n===e.length-1?55:e[n+1]:n<=0?0:e[n-1]},getNextQuestion(){this.resetcss(),this.$emit("getNextQuestion"),this.updateCalendarLogoPath(this.word),this.focusInput()},updateCalendarLogoPath(t){this.calendarLogoPath=this.dryrun||t&&t.answered?"calendar_crossed.png":"calendar.png"},resetcss(){this.answer="",this.answerStatus="",this.validated=!1,this.headerColor="",this.headerBackgroundColor="",this.resultMessage="",this.expected="",this.otherAccepted=[],this.delayResult=""},async insertWordReminder(t,e){await to(eo(Ur,"WordReminder"+Vr,cI()),{answeredDate:e,firstAnsweredDate:e,wordId:this.word.id,remindDelay:t})},async updateWordReminder(t,e){await to(eo(Ur,"WordReminder"+Vr,this.word.reminder.id),{answeredDate:e,firstAnsweredDate:this.word.reminder.firstAnsweredDate,wordId:this.word.id,remindDelay:t})}}},dV=t=>(rc("data-v-68894767"),t=t(),ic(),t),fV={class:"questionAsked"},pV={class:"questionText"},mV={class:"calendarDiv"},gV=["src"],_V={class:"answerZone"},yV=dV(()=>V("label",{class:"answerLabel",for:"answerInput"},"En espagnol :",-1)),vV=["disabled"],EV={key:0,class:"specialCharsZone"},wV={key:1,class:"resultPanel"},TV={class:"expectedAnswer"},IV={key:0,class:"otherAccepted"},RV={key:1,class:"delayResult"},AV={class:"buttonsPanel"};function CV(t,e,n,s,r,i){const o=Xt("SpecialCharsKeyboard");return re(),pe("div",{class:"questionPanel",onKeydown:e[4]||(e[4]=Qu(DR((...a)=>i.onEnter&&i.onEnter(...a),["prevent"]),["enter"]))},[V("div",fV,[V("div",{class:"questionHeader",style:ro({color:r.headerColor,"background-color":r.headerBackgroundColor})},[V("span",pV,je(n.word.fr),1),V("div",null,[V("div",mV,[V("img",{src:r.calendarLogoPath,class:"calendarLogo",style:{float:"right"}},null,8,gV)])])],4),V("div",_V,[yV,Ja(V("input",{id:"answerInput",ref:"answerInput",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",class:ii(["answerInput",r.answerStatus]),disabled:r.validated,"onUpdate:modelValue":e[0]||(e[0]=a=>r.answer=a)},null,10,vV),[[Gu,r.answer]])]),r.validated?bt("",!0):(re(),pe("div",EV,[Me(o,{onInsert:i.insertChar},null,8,["onInsert"])])),r.validated?(re(),pe("div",wV,[V("div",{class:"resultMessage",style:ro({color:r.headerColor})},je(r.resultMessage),5),V("div",TV,je(r.expected),1),r.otherAccepted.length?(re(),pe("div",IV," aussi accepté : "+je(r.otherAccepted.join(", ")),1)):bt("",!0),r.delayResult?(re(),pe("div",RV,"Délai : "+je(r.delayResult),1)):bt("",!0)])):bt("",!0)]),V("div",AV,[r.validated?bt("",!0):(re(),pe("button",{key:0,class:"button-4 actionButton",onClick:e[1]||(e[1]=(...a)=>i.validate&&i.validate(...a))},"OK")),!r.validated&&n.word.reminder!==void 0?(re(),pe("button",{key:1,class:"button-4 actionButton",onClick:e[2]||(e[2]=(...a)=>i.reset&&i.reset(...a))},"Reset")):bt("",!0),r.validated?(re(),pe("button",{key:2,ref:"nextButton",class:"button-4 actionButton",onClick:e[3]||(e[3]=(...a)=>i.getNextQuestion&&i.getNextQuestion(...a))},"Next",512)):bt("",!0)])],32)}const SV=Kt(hV,[["render",CV],["__scopeId","data-v-68894767"]]),Rt=Iy({id:"globalVocab",state:()=>({words:[]}),actions:{addReminder(t,e){e.id=t;const n=this.words.find(s=>String(s.id)===String(e.wordId));n&&(n.reminder=e)},addWord(t,e){if(this.words.some(s=>s.id===t))return;const n={id:t,fr:e.fr,es:e.es};e.alt&&(n.alt=e.alt),this.words.push(n)}},getters:{}}),bV=[{id:1,fr:"la maison",es:"la casa"},{id:2,fr:"le chien",es:"el perro"},{id:3,fr:"la chanson",es:"la canción"},{id:4,fr:"la voiture",es:"el coche",alt:["el carro","el auto"]},{id:5,fr:"l'année",es:"el año"}],PV={name:"PartyMenuItem",props:["words","title","dryrun"],computed:{nbWords(){return this.words.length}}},kV={class:"partyMenuItem"},NV={class:"partyMenuItemPanel"},OV={class:"pmiTitle"},DV={class:"pmiDefinition"},xV={class:"pmiNbWords"},MV={style:{"font-weight":"bold"}},LV={key:0,class:"pmiActions"},VV=["src"];function FV(t,e,n,s,r,i){return re(),pe("div",kV,[V("div",NV,[V("div",OV,je(n.title)+" :",1),V("div",DV,[P0(t.$slots,"default")]),V("span",xV,[V("span",MV,je(i.nbWords),1),br(" mots")])]),i.nbWords>0?(re(),pe("div",LV,[V("img",{src:"play.png",onClick:e[0]||(e[0]=o=>t.$emit("play",n.words,n.dryrun)),class:"playButton"},null,8,VV)])):bt("",!0)])}const UV=Kt(PV,[["render",FV]]);function __(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}const BV={name:"PartyMenuNewSeries",data(){return{nbWords:5}},computed:{nbWordsRemains(){return Rt().words.filter(t=>t.reminder===void 0).length},hasAlreadyPlayed(){return ft().hasAlreadyPlayed}},methods:{playNewSession(){let t=Rt().words.filter(n=>n.reminder===void 0),e=__(t.slice()).slice(0,this.nbWords);ft().hasAlreadyPlayed=!0,ft().setNewWords(e),this.$emit("play",e,!1)},replaySession(){this.$emit("play",ft().newWords,!0)},testSession(){let t=Rt().words.filter(n=>n.reminder===void 0),e=__(t.slice()).slice(0,this.nbWords);this.$emit("play",e,!0)}}},$V={class:"partyMenuItem"},WV={class:"partyMenuItemPanel"},jV=V("div",{class:"pmiTitle"},"Nouvelle série :",-1),qV={class:"pmiDefinition"},HV=V("span",null,"Nb mots : ",-1),zV=V("option",null,"2",-1),KV=V("option",null,"5",-1),GV=V("option",null,"10",-1),QV=V("option",null,"20",-1),YV=[zV,KV,GV,QV],XV={class:"pmiNbWords"},JV={style:{"font-weight":"bold"}},ZV={class:"pmiActions"},eF=["src"],tF=["src"];function nF(t,e,n,s,r,i){return re(),pe("div",$V,[V("div",WV,[jV,V("div",qV,[HV,Ja(V("select",{"onUpdate:modelValue":e[0]||(e[0]=o=>r.nbWords=o)},YV,512),[[kR,r.nbWords]])]),V("span",XV,[V("span",JV,je(i.nbWordsRemains),1),br(" mots")])]),V("div",ZV,[V("img",{onClick:e[1]||(e[1]=(...o)=>i.playNewSession&&i.playNewSession(...o)),src:"play.png",class:"playButton"},null,8,eF),i.hasAlreadyPlayed?(re(),pe("img",{key:0,style:{"margin-top":"20px"},onClick:e[2]||(e[2]=(...o)=>i.replaySession&&i.replaySession(...o)),src:"replay.png",class:"playButton"},null,8,tF)):bt("",!0),V("button",{onClick:e[3]||(e[3]=(...o)=>i.testSession&&i.testSession(...o)),class:"testButton",title:"Aucune réponse n'est enregistrée"},"Tester")])])}const sF=Kt(BV,[["render",nF]]);const rF={name:"AddWord",components:{SpecialCharsKeyboard:hI},data(){return{showForm:!1,fr:"",es:"",saving:!1,error:""}},methods:{open(){this.showForm=!0,this.$nextTick(()=>{this.$refs.frInput&&this.$refs.frInput.focus()})},cancel(){this.showForm=!1,this.fr="",this.es="",this.error=""},insertEsChar(t){const e=this.$refs.esInput,n=e?e.selectionStart:this.es.length,s=e?e.selectionEnd:this.es.length;this.es=this.es.slice(0,n)+t+this.es.slice(s),this.$nextTick(()=>{if(e){const r=n+t.length;e.focus(),e.setSelectionRange(r,r)}})},async save(){const t=this.fr.trim(),e=this.es.trim();if(!t||!e){this.error="Les deux champs sont obligatoires.";return}this.saving=!0;const n=cI();await to(eo(Ur,"Vocab"+Vr,n),{fr:t,es:e}),Rt().addWord(n,{fr:t,es:e}),this.saving=!1,this.cancel()}}},sp=t=>(rc("data-v-1f7bb065"),t=t(),ic(),t),iF={class:"addWordPanel"},oF={key:1,class:"addWordForm"},aF=sp(()=>V("div",{class:"addWordTitle"},"Nouveau mot :",-1)),lF=sp(()=>V("label",{class:"addWordLabel",for:"addWordFr"},"Français",-1)),cF=sp(()=>V("label",{class:"addWordLabel",for:"addWordEs"},"Espagnol",-1)),uF={class:"specialCharsZone"},hF={key:0,class:"addWordError"},dF={class:"addWordActions"},fF=["disabled"];function pF(t,e,n,s,r,i){const o=Xt("SpecialCharsKeyboard");return re(),pe("div",iF,[r.showForm?(re(),pe("div",oF,[aF,lF,Ja(V("input",{id:"addWordFr",ref:"frInput","onUpdate:modelValue":e[1]||(e[1]=a=>r.fr=a),type:"text",autocomplete:"off",autocorrect:"off",spellcheck:"false",class:"addWordInput",onKeydown:e[2]||(e[2]=Qu((...a)=>i.save&&i.save(...a),["enter"]))},null,544),[[Gu,r.fr]]),cF,Ja(V("input",{id:"addWordEs",ref:"esInput","onUpdate:modelValue":e[3]||(e[3]=a=>r.es=a),type:"text",autocomplete:"off",autocorrect:"off",spellcheck:"false",class:"addWordInput",onKeydown:e[4]||(e[4]=Qu((...a)=>i.save&&i.save(...a),["enter"]))},null,544),[[Gu,r.es]]),V("div",uF,[Me(o,{onInsert:i.insertEsChar},null,8,["onInsert"])]),r.error?(re(),pe("div",hF,je(r.error),1)):bt("",!0),V("div",dF,[V("button",{type:"button",class:"addWordActionButton",onClick:e[5]||(e[5]=(...a)=>i.cancel&&i.cancel(...a))},"Annuler"),V("button",{type:"button",class:"addWordActionButton",disabled:r.saving,onClick:e[6]||(e[6]=(...a)=>i.save&&i.save(...a))},"Enregistrer",8,fF)])])):(re(),pe("button",{key:0,type:"button",class:"addWordButton",onClick:e[0]||(e[0]=(...a)=>i.open&&i.open(...a)),"aria-label":"Ajouter un mot"},"+"))])}const mF=Kt(rF,[["render",pF],["__scopeId","data-v-1f7bb065"]]);const gF={name:"PartyMenu",components:{AddWord:mF,PartyMenuItem:UV,PartyMenuNewSeries:sF,QuestionVocab:SV},data(){return{word:{fr:"",es:""},playing:!1,dryrun:!1}},computed:{nbNonValidated(){return ft().words.filter(t=>!t.validated).length},nbErrors(){return ft().nbErrors},todayWords(){return Rt().words.filter(t=>t.reminder&&t.reminder.answeredDate===Fr())},todayNewWords(){return Rt().words.filter(t=>t.reminder&&t.reminder.firstAnsweredDate===Fr())},getRemindWordsCpt(){return this.getRemindWords()}},async created(){await this.loadWords(),this.loadReminder()},methods:{showmenu(){this.playing=!1},async loadWords(){const t=qg(Ur,"Vocab"+Vr);let e=await za(t);e.empty&&(await this.seedInitialVocab(t),e=await za(t)),e.forEach(n=>{Rt().addWord(n.id,n.data())})},async seedInitialVocab(t){await Promise.all(bV.map(({id:e,...n})=>to(eo(t,String(e)),n)))},async loadReminder(){(await za(qg(Ur,"WordReminder"+Vr))).forEach(e=>{Rt().addReminder(e.id,e.data())})},getNextQuestion(){if(this.playing&&ft().words.filter(t=>!t.validated).length===0)this.playing=!1,ft().setNbErrors(0),this.loadReminder();else{let t=ft().words.filter(n=>!n.validated),e=Math.floor(Math.random()*t.length);this.word=t[e]}},getRemindWords(){let t=Rt().words.filter(e=>e.reminder&&e.reminder.answeredDate!==Fr());return t=t.filter(e=>{let n=uI(e.reminder.answeredDate);return n.setDate(n.getDate()+e.reminder.remindDelay),n<=new Date}),t},play(t,e){this.dryrun=e,t.forEach(function(n){n.answered=!1,n.validated=!1}),ft().setWords(t),ft().setNbErrors(0),this.playing=!0,this.getNextQuestion()}}},_F={key:0,class:"partyMenu"},yF={key:1},vF={class:"partyHeader"},EF={style:{float:"right"}};function wF(t,e,n,s,r,i){const o=Xt("AddWord"),a=Xt("PartyMenuItem"),l=Xt("PartyMenuNewSeries"),c=Xt("QuestionVocab");return re(),pe(nt,null,[r.playing?bt("",!0):(re(),pe("div",_F,[Me(o),Me(a,{title:"Rappels",words:i.getRemindWordsCpt,dryrun:!1,onPlay:i.play},{default:xa(()=>[br("Mots à réviser aujourd'hui.")]),_:1},8,["words","onPlay"]),Me(a,{title:"Rejeux",words:i.todayWords,dryrun:!0,onPlay:i.play},{default:xa(()=>[br("Mots déjà révisés aujourd'hui.")]),_:1},8,["words","onPlay"]),Me(a,{title:"Nouveautés",words:i.todayNewWords,dryrun:!0,onPlay:i.play},{default:xa(()=>[br("Mots découverts aujourd'hui.")]),_:1},8,["words","onPlay"]),Me(l,{onPlay:i.play},null,8,["onPlay"])])),r.playing?(re(),pe("div",yF,[V("div",vF,[V("span",null,"Reste : "+je(i.nbNonValidated),1),V("span",EF,"Erreurs : "+je(i.nbErrors),1)]),Me(c,{word:r.word,dryrun:r.dryrun,onGetNextQuestion:i.getNextQuestion,ref:"questionVocab"},null,8,["word","dryrun","onGetNextQuestion"])])):bt("",!0)],64)}const TF=Kt(gF,[["render",wF]]);const IF={name:"StatistiquesVocab",computed:{nbAnswered(){return Rt().words.filter(t=>t.reminder!==void 0).length},nbTotal(){return Rt().words.length},globalRepartition(){const t={};return Rt().words.filter(e=>e.reminder).forEach(e=>{const n=e.reminder.remindDelay;t[n]===void 0?t[n]=1:t[n]++}),t},nextDaysRepartition(){const t=[];Rt().words.filter(n=>n.reminder).forEach(n=>{const s=Na(n);t.includes(s.getTime())||t.push(s.getTime())}),t.sort((n,s)=>n-s);const e={};return t.forEach(n=>{Rt().words.filter(s=>s.reminder!==void 0&&Na(s).getTime()===n).forEach(s=>{const r=m_(Na(s));e[r]===void 0?e[r]=1:e[r]++})}),e}},methods:{play(t){let e=Rt().words.filter(n=>n.reminder!==void 0&&m_(Na(n))===t);this.$emit("forceplay",e)}}},dI=t=>(rc("data-v-901db848"),t=t(),ic(),t),RF={class:"globalStats"},AF={class:"totalstats"},CF={class:"globalStatsTable"},SF=dI(()=>V("thead",null,[V("th",null,"Delais"),V("th",null,"Nombre")],-1)),bF={class:"nextDays"},PF=dI(()=>V("div",{class:"nextDaysTitle"},"Mots des prochains jours.",-1)),kF={class:"nextDaysStatsTable"},NF={class:"nextDayRow"},OF={class:"nextDayDiv"},DF={class:"nextDayDiv nexDayNb"},xF={class:"nextDayDiv"},MF=["src","onClick"];function LF(t,e,n,s,r,i){return re(),pe(nt,null,[V("div",RF,[V("div",AF,je(i.nbAnswered)+" / "+je(i.nbTotal)+" mots découverts. ",1),V("div",CF,[V("table",null,[SF,V("tbody",null,[(re(!0),pe(nt,null,Za(i.globalRepartition,(o,a)=>(re(),pe("tr",null,[V("td",null,je(a),1),V("td",null,je(i.globalRepartition[a]),1)]))),256))])])])]),V("div",bF,[PF,V("div",kF,[(re(!0),pe(nt,null,Za(i.nextDaysRepartition,(o,a)=>(re(),pe("div",NF,[V("span",OF,je(a),1),V("span",DF,je(i.nextDaysRepartition[a]),1),V("span",xF,[V("img",{src:"play.png",onClick:l=>i.play(a),class:"playButton"},null,8,MF)])]))),256))])])],64)}const VF=Kt(IF,[["render",LF],["__scopeId","data-v-901db848"]]);const FF={name:"Main",components:{StatistiquesVocab:VF,PartyMenu:TF,Menu:eV},data(){return{displayWordParty:!0,displayStatistique:!1}},methods:{menuclicked(t){t==="play"?(this.displayWordParty=!0,this.displayStatistique=!1,this.$refs.partyMenu.loadReminder()):t==="statistiques"&&(this.$refs.partyMenu.showmenu(),this.displayWordParty=!1,this.displayStatistique=!0)},forceplay(t){this.$refs.menu.menuClicked("play"),this.$refs.partyMenu.play(t,!0)}}},UF={class:"mainPanel"};function BF(t,e,n,s,r,i){const o=Xt("Menu"),a=Xt("PartyMenu"),l=Xt("StatistiquesVocab");return re(),pe("div",UF,[Me(o,{ref:"menu",onMenuClicked:i.menuclicked},null,8,["onMenuClicked"]),V("div",{class:ii({hide:!r.displayWordParty}),style:{height:"100%"}},[Me(a,{ref:"partyMenu"},null,512)],2),r.displayStatistique?(re(),Vo(l,{key:0,onForceplay:i.forceplay},null,8,["onForceplay"])):bt("",!0)])}const $F=Kt(FF,[["render",BF]]),WF="1788210418",y_="quizzify_version_reload";async function jF(){try{const t=await fetch(`/version.json?t=${Date.now()}`,{cache:"no-store"});if(!t.ok)return!1;const{version:e}=await t.json();if(e&&e!==WF)return sessionStorage.getItem(y_)===e?!1:(sessionStorage.setItem(y_,e),window.location.href=`${window.location.pathname}?v=${e}`,!0)}catch{}return!1}function qF(){if(!window.location.search.includes("v="))return;const t=new URL(window.location.href);t.searchParams.delete("v"),window.history.replaceState({},"",t)}qF();const Jc=VR(GR),HF=!1;Jc.use(MM,{firebaseApp:ep,modules:[xM()]});const Ur=OT(ep);Jc.use(BR());const zl=VL({history:ZM(),routes:[{path:"/",component:zL},{path:"/main",component:$F,meta:{requiresAuth:!0}}]});zl.beforeEach(async(t,e,n)=>{if(t.matched.some(s=>s.meta.requiresAuth)&&!HF){const s=oh();await s.authStateReady(),s.currentUser?n():n("/")}else n()});Jc.use(zl);jF().then(t=>{t||Jc.mount("#app")});
