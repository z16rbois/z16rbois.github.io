(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function bu(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ee={},Wi=[],Dt=()=>{},xE=()=>!1,DE=/^on[^a-z]/,Da=t=>DE.test(t),Au=t=>t.startsWith("onUpdate:"),st=Object.assign,Cu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},OE=Object.prototype.hasOwnProperty,se=(t,e)=>OE.call(t,e),U=Array.isArray,Hi=t=>zr(t)==="[object Map]",vs=t=>zr(t)==="[object Set]",Ad=t=>zr(t)==="[object Date]",G=t=>typeof t=="function",Ve=t=>typeof t=="string",ns=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",dm=t=>(_e(t)||G(t))&&G(t.then)&&G(t.catch),fm=Object.prototype.toString,zr=t=>fm.call(t),LE=t=>zr(t).slice(8,-1),pm=t=>zr(t)==="[object Object]",Ru=t=>Ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Vo=bu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Oa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},VE=/-(\w)/g,nn=Oa(t=>t.replace(VE,(e,n)=>n?n.toUpperCase():"")),ME=/\B([A-Z])/g,ys=Oa(t=>t.replace(ME,"-$1").toLowerCase()),La=Oa(t=>t.charAt(0).toUpperCase()+t.slice(1)),xc=Oa(t=>t?`on${La(t)}`:""),mi=(t,e)=>!Object.is(t,e),Mo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Wo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},mm=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Cd;const fl=()=>Cd||(Cd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fr(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Ve(i)?zE(i):fr(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ve(t)||_e(t))return t}const qE=/;(?![^(]*\))/g,FE=/:([^]+)/,UE=/\/\*[^]*?\*\//g;function zE(t){const e={};return t.replace(UE,"").split(qE).forEach(n=>{if(n){const i=n.split(FE);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Su(t){let e="";if(Ve(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const i=Su(t[n]);i&&(e+=i+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const jE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",BE=bu(jE);function gm(t){return!!t||t===""}function $E(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=jr(t[i],e[i]);return n}function jr(t,e){if(t===e)return!0;let n=Ad(t),i=Ad(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=ns(t),i=ns(e),n||i)return t===e;if(n=U(t),i=U(e),n||i)return n&&i?$E(t,e):!1;if(n=_e(t),i=_e(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!jr(t[o],e[o]))return!1}}return String(t)===String(e)}function Pu(t,e){return t.findIndex(n=>jr(n,e))}const zi=t=>Ve(t)?t:t==null?"":U(t)||_e(t)&&(t.toString===fm||!G(t.toString))?JSON.stringify(t,_m,2):String(t),_m=(t,e)=>e&&e.__v_isRef?_m(t,e.value):Hi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:vs(e)?{[`Set(${e.size})`]:[...e.values()]}:_e(e)&&!U(e)&&!pm(e)?String(e):e;let gt;class vm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=gt,!e&&gt&&(this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=gt;try{return gt=this,e()}finally{gt=n}}}on(){gt=this}off(){gt=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Va(t){return new vm(t)}function WE(t,e=gt){e&&e.active&&e.effects.push(t)}function Nu(){return gt}function ym(t){gt&&gt.cleanups.push(t)}const ku=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Em=t=>(t.w&zn)>0,Tm=t=>(t.n&zn)>0,HE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=zn},KE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];Em(s)&&!Tm(s)?s.delete(t):e[n++]=s,s.w&=~zn,s.n&=~zn}e.length=n}},Ho=new WeakMap;let Ws=0,zn=1;const pl=30;let Rt;const li=Symbol(""),ml=Symbol("");class xu{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,WE(this,i)}run(){if(!this.active)return this.fn();let e=Rt,n=Dn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Rt,Rt=this,Dn=!0,zn=1<<++Ws,Ws<=pl?HE(this):Rd(this),this.fn()}finally{Ws<=pl&&KE(this),zn=1<<--Ws,Rt=this.parent,Dn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Rt===this?this.deferStop=!0:this.active&&(Rd(this),this.onStop&&this.onStop(),this.active=!1)}}function Rd(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Dn=!0;const Im=[];function Es(){Im.push(Dn),Dn=!1}function Ts(){const t=Im.pop();Dn=t===void 0?!0:t}function ft(t,e,n){if(Dn&&Rt){let i=Ho.get(t);i||Ho.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=ku()),wm(s)}}function wm(t,e){let n=!1;Ws<=pl?Tm(t)||(t.n|=zn,n=!Em(t)):n=!t.has(Rt),n&&(t.add(Rt),Rt.deps.push(t))}function gn(t,e,n,i,s,r){const o=Ho.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&U(t)){const c=Number(i);o.forEach((l,u)=>{(u==="length"||!ns(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":U(t)?Ru(n)&&a.push(o.get("length")):(a.push(o.get(li)),Hi(t)&&a.push(o.get(ml)));break;case"delete":U(t)||(a.push(o.get(li)),Hi(t)&&a.push(o.get(ml)));break;case"set":Hi(t)&&a.push(o.get(li));break}if(a.length===1)a[0]&&gl(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);gl(ku(c))}}function gl(t,e){const n=U(t)?t:[...t];for(const i of n)i.computed&&Sd(i);for(const i of n)i.computed||Sd(i)}function Sd(t,e){(t!==Rt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function GE(t,e){var n;return(n=Ho.get(t))==null?void 0:n.get(e)}const QE=bu("__proto__,__v_isRef,__isVue"),bm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ns)),Pd=YE();function YE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=re(this);for(let r=0,o=this.length;r<o;r++)ft(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(re)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Es();const i=re(this)[e].apply(this,n);return Ts(),i}}),t}function XE(t){const e=re(this);return ft(e,"has",t),e.hasOwnProperty(t)}class Am{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,i){const s=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw"&&i===(s?r?uT:Pm:r?Sm:Rm).get(e))return e;const o=U(e);if(!s){if(o&&se(Pd,n))return Reflect.get(Pd,n,i);if(n==="hasOwnProperty")return XE}const a=Reflect.get(e,n,i);return(ns(n)?bm.has(n):QE(n))||(s||ft(e,"get",n),r)?a:Ce(a)?o&&Ru(n)?a:a.value:_e(a)?s?Nm(a):qa(a):a}}class Cm extends Am{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(is(r)&&Ce(r)&&!Ce(i))return!1;if(!this._shallow&&(!Ko(i)&&!is(i)&&(r=re(r),i=re(i)),!U(e)&&Ce(r)&&!Ce(i)))return r.value=i,!0;const o=U(e)&&Ru(n)?Number(n)<e.length:se(e,n),a=Reflect.set(e,n,i,s);return e===re(s)&&(o?mi(i,r)&&gn(e,"set",n,i):gn(e,"add",n,i)),a}deleteProperty(e,n){const i=se(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&gn(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!ns(n)||!bm.has(n))&&ft(e,"has",n),i}ownKeys(e){return ft(e,"iterate",U(e)?"length":li),Reflect.ownKeys(e)}}class JE extends Am{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ZE=new Cm,eT=new JE,tT=new Cm(!0),Du=t=>t,Ma=t=>Reflect.getPrototypeOf(t);function mo(t,e,n=!1,i=!1){t=t.__v_raw;const s=re(t),r=re(e);n||(mi(e,r)&&ft(s,"get",e),ft(s,"get",r));const{has:o}=Ma(s),a=i?Du:n?Vu:pr;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function go(t,e=!1){const n=this.__v_raw,i=re(n),s=re(t);return e||(mi(t,s)&&ft(i,"has",t),ft(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function _o(t,e=!1){return t=t.__v_raw,!e&&ft(re(t),"iterate",li),Reflect.get(t,"size",t)}function Nd(t){t=re(t);const e=re(this);return Ma(e).has.call(e,t)||(e.add(t),gn(e,"add",t,t)),this}function kd(t,e){e=re(e);const n=re(this),{has:i,get:s}=Ma(n);let r=i.call(n,t);r||(t=re(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?mi(e,o)&&gn(n,"set",t,e):gn(n,"add",t,e),this}function xd(t){const e=re(this),{has:n,get:i}=Ma(e);let s=n.call(e,t);s||(t=re(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&gn(e,"delete",t,void 0),r}function Dd(){const t=re(this),e=t.size!==0,n=t.clear();return e&&gn(t,"clear",void 0,void 0),n}function vo(t,e){return function(i,s){const r=this,o=r.__v_raw,a=re(o),c=e?Du:t?Vu:pr;return!t&&ft(a,"iterate",li),o.forEach((l,u)=>i.call(s,c(l),c(u),r))}}function yo(t,e,n){return function(...i){const s=this.__v_raw,r=re(s),o=Hi(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...i),u=n?Du:e?Vu:pr;return!e&&ft(r,"iterate",c?ml:li),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Rn(t){return function(...e){return t==="delete"?!1:this}}function nT(){const t={get(r){return mo(this,r)},get size(){return _o(this)},has:go,add:Nd,set:kd,delete:xd,clear:Dd,forEach:vo(!1,!1)},e={get(r){return mo(this,r,!1,!0)},get size(){return _o(this)},has:go,add:Nd,set:kd,delete:xd,clear:Dd,forEach:vo(!1,!0)},n={get(r){return mo(this,r,!0)},get size(){return _o(this,!0)},has(r){return go.call(this,r,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:vo(!0,!1)},i={get(r){return mo(this,r,!0,!0)},get size(){return _o(this,!0)},has(r){return go.call(this,r,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:vo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=yo(r,!1,!1),n[r]=yo(r,!0,!1),e[r]=yo(r,!1,!0),i[r]=yo(r,!0,!0)}),[t,n,e,i]}const[iT,sT,rT,oT]=nT();function Ou(t,e){const n=e?t?oT:rT:t?sT:iT;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(se(n,s)&&s in i?n:i,s,r)}const aT={get:Ou(!1,!1)},cT={get:Ou(!1,!0)},lT={get:Ou(!0,!1)},Rm=new WeakMap,Sm=new WeakMap,Pm=new WeakMap,uT=new WeakMap;function hT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dT(t){return t.__v_skip||!Object.isExtensible(t)?0:hT(LE(t))}function qa(t){return is(t)?t:Lu(t,!1,ZE,aT,Rm)}function fT(t){return Lu(t,!1,tT,cT,Sm)}function Nm(t){return Lu(t,!0,eT,lT,Pm)}function Lu(t,e,n,i,s){if(!_e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=dT(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function On(t){return is(t)?On(t.__v_raw):!!(t&&t.__v_isReactive)}function is(t){return!!(t&&t.__v_isReadonly)}function Ko(t){return!!(t&&t.__v_isShallow)}function km(t){return On(t)||is(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function Fa(t){return Wo(t,"__v_skip",!0),t}const pr=t=>_e(t)?qa(t):t,Vu=t=>_e(t)?Nm(t):t;function xm(t){Dn&&Rt&&(t=re(t),wm(t.dep||(t.dep=ku())))}function Dm(t,e){t=re(t);const n=t.dep;n&&gl(n)}function Ce(t){return!!(t&&t.__v_isRef===!0)}function ui(t){return Om(t,!1)}function pT(t){return Om(t,!0)}function Om(t,e){return Ce(t)?t:new mT(t,e)}class mT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:pr(e)}get value(){return xm(this),this._value}set value(e){const n=this.__v_isShallow||Ko(e)||is(e);e=n?e:re(e),mi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:pr(e),Dm(this))}}function Lm(t){return Ce(t)?t.value:t}function dn(t){return G(t)?t():Lm(t)}const gT={get:(t,e,n)=>Lm(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Ce(s)&&!Ce(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Vm(t){return On(t)?t:new Proxy(t,gT)}function _T(t){const e=U(t)?new Array(t.length):{};for(const n in t)e[n]=Mm(t,n);return e}class vT{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return GE(re(this._object),this._key)}}class yT{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function ET(t,e,n){return Ce(t)?t:G(t)?new yT(t):_e(t)&&arguments.length>1?Mm(t,e,n):ui(t)}function Mm(t,e,n){const i=t[e];return Ce(i)?i:new vT(t,e,n)}class TT{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new xu(e,()=>{this._dirty||(this._dirty=!0,Dm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=re(this);return xm(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function IT(t,e,n=!1){let i,s;const r=G(t);return r?(i=t,s=Dt):(i=t.get,s=t.set),new TT(i,s,r||!s,n)}function Ln(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){Ua(r,e,n)}return s}function Ot(t,e,n,i){if(G(t)){const r=Ln(t,e,n,i);return r&&dm(r)&&r.catch(o=>{Ua(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(Ot(t[r],e,n,i));return s}function Ua(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){Ln(c,null,10,[t,o,a]);return}}wT(t,n,s,i)}function wT(t,e,n,i=!0){console.error(t)}let mr=!1,_l=!1;const et=[];let Kt=0;const Ki=[];let fn=null,ei=0;const qm=Promise.resolve();let Mu=null;function Fm(t){const e=Mu||qm;return t?e.then(this?t.bind(this):t):e}function bT(t){let e=Kt+1,n=et.length;for(;e<n;){const i=e+n>>>1,s=et[i],r=gr(s);r<t||r===t&&s.pre?e=i+1:n=i}return e}function qu(t){(!et.length||!et.includes(t,mr&&t.allowRecurse?Kt+1:Kt))&&(t.id==null?et.push(t):et.splice(bT(t.id),0,t),Um())}function Um(){!mr&&!_l&&(_l=!0,Mu=qm.then(jm))}function AT(t){const e=et.indexOf(t);e>Kt&&et.splice(e,1)}function CT(t){U(t)?Ki.push(...t):(!fn||!fn.includes(t,t.allowRecurse?ei+1:ei))&&Ki.push(t),Um()}function Od(t,e=mr?Kt+1:0){for(;e<et.length;e++){const n=et[e];n&&n.pre&&(et.splice(e,1),e--,n())}}function zm(t){if(Ki.length){const e=[...new Set(Ki)];if(Ki.length=0,fn){fn.push(...e);return}for(fn=e,fn.sort((n,i)=>gr(n)-gr(i)),ei=0;ei<fn.length;ei++)fn[ei]();fn=null,ei=0}}const gr=t=>t.id==null?1/0:t.id,RT=(t,e)=>{const n=gr(t)-gr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function jm(t){_l=!1,mr=!0,et.sort(RT);const e=Dt;try{for(Kt=0;Kt<et.length;Kt++){const n=et[Kt];n&&n.active!==!1&&Ln(n,null,14)}}finally{Kt=0,et.length=0,zm(),mr=!1,Mu=null,(et.length||Ki.length)&&jm()}}function ST(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ee;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||Ee;d&&(s=n.map(p=>Ve(p)?p.trim():p)),h&&(s=n.map(mm))}let a,c=i[a=xc(e)]||i[a=xc(nn(e))];!c&&r&&(c=i[a=xc(ys(e))]),c&&Ot(c,t,6,s);const l=i[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ot(l,t,6,s)}}function Bm(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!G(t)){const c=l=>{const u=Bm(l,e,!0);u&&(a=!0,st(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(_e(t)&&i.set(t,null),null):(U(r)?r.forEach(c=>o[c]=null):st(o,r),_e(t)&&i.set(t,o),o)}function za(t,e){return!t||!Da(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,ys(e))||se(t,e))}let lt=null,$m=null;function Go(t){const e=lt;return lt=t,$m=t&&t.type.__scopeId||null,e}function PT(t,e=lt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Wd(-1);const r=Go(e);let o;try{o=t(...s)}finally{Go(r),i._d&&Wd(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Dc(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:g,inheritAttrs:_}=t;let y,x;const V=Go(t);try{if(n.shapeFlag&4){const A=s||i;y=Ht(u.call(A,A,h,r,p,d,g)),x=c}else{const A=e;y=Ht(A.length>1?A(r,{attrs:c,slots:a,emit:l}):A(r,null)),x=e.props?c:NT(c)}}catch(A){tr.length=0,Ua(A,t,1),y=Lt(gi)}let k=y;if(x&&_!==!1){const A=Object.keys(x),{shapeFlag:H}=k;A.length&&H&7&&(o&&A.some(Au)&&(x=kT(x,o)),k=ss(k,x))}return n.dirs&&(k=ss(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),y=k,Go(V),y}const NT=t=>{let e;for(const n in t)(n==="class"||n==="style"||Da(n))&&((e||(e={}))[n]=t[n]);return e},kT=(t,e)=>{const n={};for(const i in t)(!Au(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function xT(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?Ld(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!za(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ld(i,o,l):!0:!!o;return!1}function Ld(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!za(n,r))return!0}return!1}function DT({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Wm="components";function OT(t,e){return VT(Wm,t,!0,e)||t}const LT=Symbol.for("v-ndc");function VT(t,e,n=!0,i=!1){const s=lt||Oe;if(s){const r=s.type;if(t===Wm){const a=kI(r,!1);if(a&&(a===e||a===nn(e)||a===La(nn(e))))return r}const o=Vd(s[t]||r[t],e)||Vd(s.appContext[t],e);return!o&&i?r:o}}function Vd(t,e){return t&&(t[e]||t[nn(e)]||t[La(nn(e))])}const MT=t=>t.__isSuspense;function qT(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):CT(t)}const Eo={};function Zs(t,e,n){return Hm(t,e,n)}function Hm(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=Ee){var a;const c=Nu()===((a=Oe)==null?void 0:a.scope)?Oe:null;let l,u=!1,h=!1;if(Ce(t)?(l=()=>t.value,u=Ko(t)):On(t)?(l=()=>t,i=!0):U(t)?(h=!0,u=t.some(A=>On(A)||Ko(A)),l=()=>t.map(A=>{if(Ce(A))return A.value;if(On(A))return ni(A);if(G(A))return Ln(A,c,2)})):G(t)?e?l=()=>Ln(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),Ot(t,c,3,[p])}:l=Dt,e&&i){const A=l;l=()=>ni(A())}let d,p=A=>{d=V.onStop=()=>{Ln(A,c,4)}},g;if(yr)if(p=Dt,e?n&&Ot(e,c,3,[l(),h?[]:void 0,p]):l(),s==="sync"){const A=OI();g=A.__watcherHandles||(A.__watcherHandles=[])}else return Dt;let _=h?new Array(t.length).fill(Eo):Eo;const y=()=>{if(V.active)if(e){const A=V.run();(i||u||(h?A.some((H,ce)=>mi(H,_[ce])):mi(A,_)))&&(d&&d(),Ot(e,c,3,[A,_===Eo?void 0:h&&_[0]===Eo?[]:_,p]),_=A)}else V.run()};y.allowRecurse=!!e;let x;s==="sync"?x=y:s==="post"?x=()=>ct(y,c&&c.suspense):(y.pre=!0,c&&(y.id=c.uid),x=()=>qu(y));const V=new xu(l,x);e?n?y():_=V.run():s==="post"?ct(V.run.bind(V),c&&c.suspense):V.run();const k=()=>{V.stop(),c&&c.scope&&Cu(c.scope.effects,V)};return g&&g.push(k),k}function FT(t,e,n){const i=this.proxy,s=Ve(t)?t.includes(".")?Km(i,t):()=>i[t]:t.bind(i,i);let r;G(e)?r=e:(r=e.handler,n=e);const o=Oe;rs(this);const a=Hm(s,r.bind(i),n);return o?rs(o):di(),a}function Km(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function ni(t,e){if(!_e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ce(t))ni(t.value,e);else if(U(t))for(let n=0;n<t.length;n++)ni(t[n],e);else if(vs(t)||Hi(t))t.forEach(n=>{ni(n,e)});else if(pm(t))for(const n in t)ni(t[n],e);return t}function Gm(t,e){const n=lt;if(n===null)return t;const i=Wa(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,c,l=Ee]=e[r];o&&(G(o)&&(o={mounted:o,updated:o}),o.deep&&ni(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Yn(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(Es(),Ot(c,n,8,[t.el,a,t,e]),Ts())}}const qo=t=>!!t.type.__asyncLoader,Qm=t=>t.type.__isKeepAlive;function UT(t,e){Ym(t,"a",e)}function zT(t,e){Ym(t,"da",e)}function Ym(t,e,n=Oe){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ja(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Qm(s.parent.vnode)&&jT(i,e,n,s),s=s.parent}}function jT(t,e,n,i){const s=ja(e,t,i,!0);Xm(()=>{Cu(i[e],s)},n)}function ja(t,e,n=Oe,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Es(),rs(n);const a=Ot(e,n,t,o);return di(),Ts(),a});return i?s.unshift(r):s.push(r),r}}const wn=t=>(e,n=Oe)=>(!yr||t==="sp")&&ja(t,(...i)=>e(...i),n),BT=wn("bm"),$T=wn("m"),WT=wn("bu"),HT=wn("u"),KT=wn("bum"),Xm=wn("um"),Jm=wn("sp"),GT=wn("rtg"),QT=wn("rtc");function YT(t,e=Oe){ja("ec",t,e)}function XT(t,e,n,i){let s;const r=n&&n[i];if(U(t)||Ve(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(_e(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}const vl=t=>t?lg(t)?Wa(t)||t.proxy:vl(t.parent):null,er=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vl(t.parent),$root:t=>vl(t.root),$emit:t=>t.emit,$options:t=>Fu(t),$forceUpdate:t=>t.f||(t.f=()=>qu(t.update)),$nextTick:t=>t.n||(t.n=Fm.bind(t.proxy)),$watch:t=>FT.bind(t)}),Oc=(t,e)=>t!==Ee&&!t.__isScriptSetup&&se(t,e),JT={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Oc(i,e))return o[e]=1,i[e];if(s!==Ee&&se(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&se(l,e))return o[e]=3,r[e];if(n!==Ee&&se(n,e))return o[e]=4,n[e];yl&&(o[e]=0)}}const u=er[e];let h,d;if(u)return e==="$attrs"&&ft(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ee&&se(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,se(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Oc(s,e)?(s[e]=n,!0):i!==Ee&&se(i,e)?(i[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==Ee&&se(t,o)||Oc(e,o)||(a=r[0])&&se(a,o)||se(i,o)||se(er,o)||se(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Md(t){return U(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let yl=!0;function ZT(t){const e=Fu(t),n=t.proxy,i=t.ctx;yl=!1,e.beforeCreate&&qd(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:_,deactivated:y,beforeDestroy:x,beforeUnmount:V,destroyed:k,unmounted:A,render:H,renderTracked:ce,renderTriggered:pe,errorCaptured:j,serverPrefetch:Y,expose:ve,inheritAttrs:pt,components:zt,directives:ki,filters:Os}=e;if(l&&eI(l,i,null),o)for(const Re in o){const me=o[Re];G(me)&&(i[Re]=me.bind(n))}if(s){const Re=s.call(n,n);_e(Re)&&(t.data=qa(Re))}if(yl=!0,r)for(const Re in r){const me=r[Re],Gn=G(me)?me.bind(n,n):G(me.get)?me.get.bind(n,n):Dt,fo=!G(me)&&G(me.set)?me.set.bind(n):Dt,Qn=hg({get:Gn,set:fo});Object.defineProperty(i,Re,{enumerable:!0,configurable:!0,get:()=>Qn.value,set:jt=>Qn.value=jt})}if(a)for(const Re in a)Zm(a[Re],i,n,Re);if(c){const Re=G(c)?c.call(n):c;Reflect.ownKeys(Re).forEach(me=>{oI(me,Re[me])})}u&&qd(u,t,"c");function he(Re,me){U(me)?me.forEach(Gn=>Re(Gn.bind(n))):me&&Re(me.bind(n))}if(he(BT,h),he($T,d),he(WT,p),he(HT,g),he(UT,_),he(zT,y),he(YT,j),he(QT,ce),he(GT,pe),he(KT,V),he(Xm,A),he(Jm,Y),U(ve))if(ve.length){const Re=t.exposed||(t.exposed={});ve.forEach(me=>{Object.defineProperty(Re,me,{get:()=>n[me],set:Gn=>n[me]=Gn})})}else t.exposed||(t.exposed={});H&&t.render===Dt&&(t.render=H),pt!=null&&(t.inheritAttrs=pt),zt&&(t.components=zt),ki&&(t.directives=ki)}function eI(t,e,n=Dt){U(t)&&(t=El(t));for(const i in t){const s=t[i];let r;_e(s)?"default"in s?r=hi(s.from||i,s.default,!0):r=hi(s.from||i):r=hi(s),Ce(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function qd(t,e,n){Ot(U(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zm(t,e,n,i){const s=i.includes(".")?Km(n,i):()=>n[i];if(Ve(t)){const r=e[t];G(r)&&Zs(s,r)}else if(G(t))Zs(s,t.bind(n));else if(_e(t))if(U(t))t.forEach(r=>Zm(r,e,n,i));else{const r=G(t.handler)?t.handler.bind(n):e[t.handler];G(r)&&Zs(s,r,t)}}function Fu(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!s.length&&!n&&!i?c=e:(c={},s.length&&s.forEach(l=>Qo(c,l,o,!0)),Qo(c,e,o)),_e(e)&&r.set(e,c),c}function Qo(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Qo(t,r,n,!0),s&&s.forEach(o=>Qo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=tI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const tI={data:Fd,props:Ud,emits:Ud,methods:Hs,computed:Hs,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:Hs,directives:Hs,watch:iI,provide:Fd,inject:nI};function Fd(t,e){return e?t?function(){return st(G(t)?t.call(this,this):t,G(e)?e.call(this,this):e)}:e:t}function nI(t,e){return Hs(El(t),El(e))}function El(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ot(t,e){return t?[...new Set([].concat(t,e))]:e}function Hs(t,e){return t?st(Object.create(null),t,e):e}function Ud(t,e){return t?U(t)&&U(e)?[...new Set([...t,...e])]:st(Object.create(null),Md(t),Md(e??{})):e}function iI(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const i in e)n[i]=ot(t[i],e[i]);return n}function eg(){return{app:null,config:{isNativeTag:xE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sI=0;function rI(t,e){return function(i,s=null){G(i)||(i=st({},i)),s!=null&&!_e(s)&&(s=null);const r=eg(),o=new WeakSet;let a=!1;const c=r.app={_uid:sI++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:LI,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&G(l.install)?(o.add(l),l.install(c,...u)):G(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const d=Lt(i,s);return d.appContext=r,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Wa(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c},runWithContext(l){_r=c;try{return l()}finally{_r=null}}};return c}}let _r=null;function oI(t,e){if(Oe){let n=Oe.provides;const i=Oe.parent&&Oe.parent.provides;i===n&&(n=Oe.provides=Object.create(i)),n[t]=e}}function hi(t,e,n=!1){const i=Oe||lt;if(i||_r){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:_r._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&G(e)?e.call(i&&i.proxy):e}}function aI(){return!!(Oe||lt||_r)}function cI(t,e,n,i=!1){const s={},r={};Wo(r,$a,1),t.propsDefaults=Object.create(null),tg(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:fT(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function lI(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=re(s),[c]=t.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(za(t.emitsOptions,d))continue;const p=e[d];if(c)if(se(r,d))p!==r[d]&&(r[d]=p,l=!0);else{const g=nn(d);s[g]=Tl(c,a,g,p,t,!1)}else p!==r[d]&&(r[d]=p,l=!0)}}}else{tg(t,e,s,r)&&(l=!0);let u;for(const h in a)(!e||!se(e,h)&&((u=ys(h))===h||!se(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Tl(c,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!se(e,h))&&(delete r[h],l=!0)}l&&gn(t,"set","$attrs")}function tg(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Vo(c))continue;const l=e[c];let u;s&&se(s,u=nn(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:za(t.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(r){const c=re(n),l=a||Ee;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Tl(s,c,h,l[h],t,!se(l,h))}}return o}function Tl(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=se(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&G(c)){const{propsDefaults:l}=s;n in l?i=l[n]:(rs(s),i=l[n]=c.call(null,e),di())}else i=c}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ys(n))&&(i=!0))}return i}function ng(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let c=!1;if(!G(t)){const u=h=>{c=!0;const[d,p]=ng(h,e,!0);st(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return _e(t)&&i.set(t,Wi),Wi;if(U(r))for(let u=0;u<r.length;u++){const h=nn(r[u]);zd(h)&&(o[h]=Ee)}else if(r)for(const u in r){const h=nn(u);if(zd(h)){const d=r[u],p=o[h]=U(d)||G(d)?{type:d}:st({},d);if(p){const g=$d(Boolean,p.type),_=$d(String,p.type);p[0]=g>-1,p[1]=_<0||g<_,(g>-1||se(p,"default"))&&a.push(h)}}}const l=[o,a];return _e(t)&&i.set(t,l),l}function zd(t){return t[0]!=="$"}function jd(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Bd(t,e){return jd(t)===jd(e)}function $d(t,e){return U(e)?e.findIndex(n=>Bd(n,t)):G(e)&&Bd(e,t)?0:-1}const ig=t=>t[0]==="_"||t==="$stable",Uu=t=>U(t)?t.map(Ht):[Ht(t)],uI=(t,e,n)=>{if(e._n)return e;const i=PT((...s)=>Uu(e(...s)),n);return i._c=!1,i},sg=(t,e,n)=>{const i=t._ctx;for(const s in t){if(ig(s))continue;const r=t[s];if(G(r))e[s]=uI(s,r,i);else if(r!=null){const o=Uu(r);e[s]=()=>o}}},rg=(t,e)=>{const n=Uu(e);t.slots.default=()=>n},hI=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),Wo(e,"_",n)):sg(e,t.slots={})}else t.slots={},e&&rg(t,e);Wo(t.slots,$a,1)},dI=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Ee;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(st(s,e),!n&&a===1&&delete s._):(r=!e.$stable,sg(e,s)),o=e}else e&&(rg(t,e),o={default:1});if(r)for(const a in s)!ig(a)&&o[a]==null&&delete s[a]};function Il(t,e,n,i,s=!1){if(U(t)){t.forEach((d,p)=>Il(d,e&&(U(e)?e[p]:e),n,i,s));return}if(qo(i)&&!s)return;const r=i.shapeFlag&4?Wa(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ee?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ve(l)?(u[l]=null,se(h,l)&&(h[l]=null)):Ce(l)&&(l.value=null)),G(c))Ln(c,a,12,[o,u]);else{const d=Ve(c),p=Ce(c);if(d||p){const g=()=>{if(t.f){const _=d?se(h,c)?h[c]:u[c]:c.value;s?U(_)&&Cu(_,r):U(_)?_.includes(r)||_.push(r):d?(u[c]=[r],se(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,se(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,ct(g,n)):g()}}}const ct=qT;function fI(t){return pI(t)}function pI(t,e){const n=fl();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Dt,insertStaticContent:g}=t,_=(f,m,v,E=null,T=null,R=null,D=!1,C=null,S=!!m.dynamicChildren)=>{if(f===m)return;f&&!Vs(f,m)&&(E=po(f),jt(f,T,R,!0),f=null),m.patchFlag===-2&&(S=!1,m.dynamicChildren=null);const{type:b,ref:q,shapeFlag:L}=m;switch(b){case Ba:y(f,m,v,E);break;case gi:x(f,m,v,E);break;case Lc:f==null&&V(m,v,E,D);break;case Wt:zt(f,m,v,E,T,R,D,C,S);break;default:L&1?H(f,m,v,E,T,R,D,C,S):L&6?ki(f,m,v,E,T,R,D,C,S):(L&64||L&128)&&b.process(f,m,v,E,T,R,D,C,S,xi)}q!=null&&T&&Il(q,f&&f.ref,R,m||f,!m)},y=(f,m,v,E)=>{if(f==null)i(m.el=a(m.children),v,E);else{const T=m.el=f.el;m.children!==f.children&&l(T,m.children)}},x=(f,m,v,E)=>{f==null?i(m.el=c(m.children||""),v,E):m.el=f.el},V=(f,m,v,E)=>{[f.el,f.anchor]=g(f.children,m,v,E,f.el,f.anchor)},k=({el:f,anchor:m},v,E)=>{let T;for(;f&&f!==m;)T=d(f),i(f,v,E),f=T;i(m,v,E)},A=({el:f,anchor:m})=>{let v;for(;f&&f!==m;)v=d(f),s(f),f=v;s(m)},H=(f,m,v,E,T,R,D,C,S)=>{D=D||m.type==="svg",f==null?ce(m,v,E,T,R,D,C,S):Y(f,m,T,R,D,C,S)},ce=(f,m,v,E,T,R,D,C)=>{let S,b;const{type:q,props:L,shapeFlag:F,transition:K,dirs:X}=f;if(S=f.el=o(f.type,R,L&&L.is,L),F&8?u(S,f.children):F&16&&j(f.children,S,null,E,T,R&&q!=="foreignObject",D,C),X&&Yn(f,null,E,"created"),pe(S,f,f.scopeId,D,E),L){for(const de in L)de!=="value"&&!Vo(de)&&r(S,de,null,L[de],R,f.children,E,T,un);"value"in L&&r(S,"value",null,L.value),(b=L.onVnodeBeforeMount)&&$t(b,E,f)}X&&Yn(f,null,E,"beforeMount");const ge=mI(T,K);ge&&K.beforeEnter(S),i(S,m,v),((b=L&&L.onVnodeMounted)||ge||X)&&ct(()=>{b&&$t(b,E,f),ge&&K.enter(S),X&&Yn(f,null,E,"mounted")},T)},pe=(f,m,v,E,T)=>{if(v&&p(f,v),E)for(let R=0;R<E.length;R++)p(f,E[R]);if(T){let R=T.subTree;if(m===R){const D=T.vnode;pe(f,D,D.scopeId,D.slotScopeIds,T.parent)}}},j=(f,m,v,E,T,R,D,C,S=0)=>{for(let b=S;b<f.length;b++){const q=f[b]=C?Nn(f[b]):Ht(f[b]);_(null,q,m,v,E,T,R,D,C)}},Y=(f,m,v,E,T,R,D)=>{const C=m.el=f.el;let{patchFlag:S,dynamicChildren:b,dirs:q}=m;S|=f.patchFlag&16;const L=f.props||Ee,F=m.props||Ee;let K;v&&Xn(v,!1),(K=F.onVnodeBeforeUpdate)&&$t(K,v,m,f),q&&Yn(m,f,v,"beforeUpdate"),v&&Xn(v,!0);const X=T&&m.type!=="foreignObject";if(b?ve(f.dynamicChildren,b,C,v,E,X,R):D||me(f,m,C,null,v,E,X,R,!1),S>0){if(S&16)pt(C,m,L,F,v,E,T);else if(S&2&&L.class!==F.class&&r(C,"class",null,F.class,T),S&4&&r(C,"style",L.style,F.style,T),S&8){const ge=m.dynamicProps;for(let de=0;de<ge.length;de++){const Pe=ge[de],Ct=L[Pe],Di=F[Pe];(Di!==Ct||Pe==="value")&&r(C,Pe,Ct,Di,T,f.children,v,E,un)}}S&1&&f.children!==m.children&&u(C,m.children)}else!D&&b==null&&pt(C,m,L,F,v,E,T);((K=F.onVnodeUpdated)||q)&&ct(()=>{K&&$t(K,v,m,f),q&&Yn(m,f,v,"updated")},E)},ve=(f,m,v,E,T,R,D)=>{for(let C=0;C<m.length;C++){const S=f[C],b=m[C],q=S.el&&(S.type===Wt||!Vs(S,b)||S.shapeFlag&70)?h(S.el):v;_(S,b,q,null,E,T,R,D,!0)}},pt=(f,m,v,E,T,R,D)=>{if(v!==E){if(v!==Ee)for(const C in v)!Vo(C)&&!(C in E)&&r(f,C,v[C],null,D,m.children,T,R,un);for(const C in E){if(Vo(C))continue;const S=E[C],b=v[C];S!==b&&C!=="value"&&r(f,C,b,S,D,m.children,T,R,un)}"value"in E&&r(f,"value",v.value,E.value)}},zt=(f,m,v,E,T,R,D,C,S)=>{const b=m.el=f?f.el:a(""),q=m.anchor=f?f.anchor:a("");let{patchFlag:L,dynamicChildren:F,slotScopeIds:K}=m;K&&(C=C?C.concat(K):K),f==null?(i(b,v,E),i(q,v,E),j(m.children,v,q,T,R,D,C,S)):L>0&&L&64&&F&&f.dynamicChildren?(ve(f.dynamicChildren,F,v,T,R,D,C),(m.key!=null||T&&m===T.subTree)&&og(f,m,!0)):me(f,m,v,q,T,R,D,C,S)},ki=(f,m,v,E,T,R,D,C,S)=>{m.slotScopeIds=C,f==null?m.shapeFlag&512?T.ctx.activate(m,v,E,D,S):Os(m,v,E,T,R,D,S):Cn(f,m,S)},Os=(f,m,v,E,T,R,D)=>{const C=f.component=CI(f,E,T);if(Qm(f)&&(C.ctx.renderer=xi),RI(C),C.asyncDep){if(T&&T.registerDep(C,he),!f.el){const S=C.subTree=Lt(gi);x(null,S,m,v)}return}he(C,f,m,v,T,R,D)},Cn=(f,m,v)=>{const E=m.component=f.component;if(xT(f,m,v))if(E.asyncDep&&!E.asyncResolved){Re(E,m,v);return}else E.next=m,AT(E.update),E.update();else m.el=f.el,E.vnode=m},he=(f,m,v,E,T,R,D)=>{const C=()=>{if(f.isMounted){let{next:q,bu:L,u:F,parent:K,vnode:X}=f,ge=q,de;Xn(f,!1),q?(q.el=X.el,Re(f,q,D)):q=X,L&&Mo(L),(de=q.props&&q.props.onVnodeBeforeUpdate)&&$t(de,K,q,X),Xn(f,!0);const Pe=Dc(f),Ct=f.subTree;f.subTree=Pe,_(Ct,Pe,h(Ct.el),po(Ct),f,T,R),q.el=Pe.el,ge===null&&DT(f,Pe.el),F&&ct(F,T),(de=q.props&&q.props.onVnodeUpdated)&&ct(()=>$t(de,K,q,X),T)}else{let q;const{el:L,props:F}=m,{bm:K,m:X,parent:ge}=f,de=qo(m);if(Xn(f,!1),K&&Mo(K),!de&&(q=F&&F.onVnodeBeforeMount)&&$t(q,ge,m),Xn(f,!0),L&&kc){const Pe=()=>{f.subTree=Dc(f),kc(L,f.subTree,f,T,null)};de?m.type.__asyncLoader().then(()=>!f.isUnmounted&&Pe()):Pe()}else{const Pe=f.subTree=Dc(f);_(null,Pe,v,E,f,T,R),m.el=Pe.el}if(X&&ct(X,T),!de&&(q=F&&F.onVnodeMounted)){const Pe=m;ct(()=>$t(q,ge,Pe),T)}(m.shapeFlag&256||ge&&qo(ge.vnode)&&ge.vnode.shapeFlag&256)&&f.a&&ct(f.a,T),f.isMounted=!0,m=v=E=null}},S=f.effect=new xu(C,()=>qu(b),f.scope),b=f.update=()=>S.run();b.id=f.uid,Xn(f,!0),b()},Re=(f,m,v)=>{m.component=f;const E=f.vnode.props;f.vnode=m,f.next=null,lI(f,m.props,E,v),dI(f,m.children,v),Es(),Od(),Ts()},me=(f,m,v,E,T,R,D,C,S=!1)=>{const b=f&&f.children,q=f?f.shapeFlag:0,L=m.children,{patchFlag:F,shapeFlag:K}=m;if(F>0){if(F&128){fo(b,L,v,E,T,R,D,C,S);return}else if(F&256){Gn(b,L,v,E,T,R,D,C,S);return}}K&8?(q&16&&un(b,T,R),L!==b&&u(v,L)):q&16?K&16?fo(b,L,v,E,T,R,D,C,S):un(b,T,R,!0):(q&8&&u(v,""),K&16&&j(L,v,E,T,R,D,C,S))},Gn=(f,m,v,E,T,R,D,C,S)=>{f=f||Wi,m=m||Wi;const b=f.length,q=m.length,L=Math.min(b,q);let F;for(F=0;F<L;F++){const K=m[F]=S?Nn(m[F]):Ht(m[F]);_(f[F],K,v,null,T,R,D,C,S)}b>q?un(f,T,R,!0,!1,L):j(m,v,E,T,R,D,C,S,L)},fo=(f,m,v,E,T,R,D,C,S)=>{let b=0;const q=m.length;let L=f.length-1,F=q-1;for(;b<=L&&b<=F;){const K=f[b],X=m[b]=S?Nn(m[b]):Ht(m[b]);if(Vs(K,X))_(K,X,v,null,T,R,D,C,S);else break;b++}for(;b<=L&&b<=F;){const K=f[L],X=m[F]=S?Nn(m[F]):Ht(m[F]);if(Vs(K,X))_(K,X,v,null,T,R,D,C,S);else break;L--,F--}if(b>L){if(b<=F){const K=F+1,X=K<q?m[K].el:E;for(;b<=F;)_(null,m[b]=S?Nn(m[b]):Ht(m[b]),v,X,T,R,D,C,S),b++}}else if(b>F)for(;b<=L;)jt(f[b],T,R,!0),b++;else{const K=b,X=b,ge=new Map;for(b=X;b<=F;b++){const mt=m[b]=S?Nn(m[b]):Ht(m[b]);mt.key!=null&&ge.set(mt.key,b)}let de,Pe=0;const Ct=F-X+1;let Di=!1,Id=0;const Ls=new Array(Ct);for(b=0;b<Ct;b++)Ls[b]=0;for(b=K;b<=L;b++){const mt=f[b];if(Pe>=Ct){jt(mt,T,R,!0);continue}let Bt;if(mt.key!=null)Bt=ge.get(mt.key);else for(de=X;de<=F;de++)if(Ls[de-X]===0&&Vs(mt,m[de])){Bt=de;break}Bt===void 0?jt(mt,T,R,!0):(Ls[Bt-X]=b+1,Bt>=Id?Id=Bt:Di=!0,_(mt,m[Bt],v,null,T,R,D,C,S),Pe++)}const wd=Di?gI(Ls):Wi;for(de=wd.length-1,b=Ct-1;b>=0;b--){const mt=X+b,Bt=m[mt],bd=mt+1<q?m[mt+1].el:E;Ls[b]===0?_(null,Bt,v,bd,T,R,D,C,S):Di&&(de<0||b!==wd[de]?Qn(Bt,v,bd,2):de--)}}},Qn=(f,m,v,E,T=null)=>{const{el:R,type:D,transition:C,children:S,shapeFlag:b}=f;if(b&6){Qn(f.component.subTree,m,v,E);return}if(b&128){f.suspense.move(m,v,E);return}if(b&64){D.move(f,m,v,xi);return}if(D===Wt){i(R,m,v);for(let L=0;L<S.length;L++)Qn(S[L],m,v,E);i(f.anchor,m,v);return}if(D===Lc){k(f,m,v);return}if(E!==2&&b&1&&C)if(E===0)C.beforeEnter(R),i(R,m,v),ct(()=>C.enter(R),T);else{const{leave:L,delayLeave:F,afterLeave:K}=C,X=()=>i(R,m,v),ge=()=>{L(R,()=>{X(),K&&K()})};F?F(R,X,ge):ge()}else i(R,m,v)},jt=(f,m,v,E=!1,T=!1)=>{const{type:R,props:D,ref:C,children:S,dynamicChildren:b,shapeFlag:q,patchFlag:L,dirs:F}=f;if(C!=null&&Il(C,null,v,f,!0),q&256){m.ctx.deactivate(f);return}const K=q&1&&F,X=!qo(f);let ge;if(X&&(ge=D&&D.onVnodeBeforeUnmount)&&$t(ge,m,f),q&6)kE(f.component,v,E);else{if(q&128){f.suspense.unmount(v,E);return}K&&Yn(f,null,m,"beforeUnmount"),q&64?f.type.remove(f,m,v,T,xi,E):b&&(R!==Wt||L>0&&L&64)?un(b,m,v,!1,!0):(R===Wt&&L&384||!T&&q&16)&&un(S,m,v),E&&Ed(f)}(X&&(ge=D&&D.onVnodeUnmounted)||K)&&ct(()=>{ge&&$t(ge,m,f),K&&Yn(f,null,m,"unmounted")},v)},Ed=f=>{const{type:m,el:v,anchor:E,transition:T}=f;if(m===Wt){NE(v,E);return}if(m===Lc){A(f);return}const R=()=>{s(v),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(f.shapeFlag&1&&T&&!T.persisted){const{leave:D,delayLeave:C}=T,S=()=>D(v,R);C?C(f.el,R,S):S()}else R()},NE=(f,m)=>{let v;for(;f!==m;)v=d(f),s(f),f=v;s(m)},kE=(f,m,v)=>{const{bum:E,scope:T,update:R,subTree:D,um:C}=f;E&&Mo(E),T.stop(),R&&(R.active=!1,jt(D,f,m,v)),C&&ct(C,m),ct(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},un=(f,m,v,E=!1,T=!1,R=0)=>{for(let D=R;D<f.length;D++)jt(f[D],m,v,E,T)},po=f=>f.shapeFlag&6?po(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),Td=(f,m,v)=>{f==null?m._vnode&&jt(m._vnode,null,null,!0):_(m._vnode||null,f,m,null,null,null,v),Od(),zm(),m._vnode=f},xi={p:_,um:jt,m:Qn,r:Ed,mt:Os,mc:j,pc:me,pbc:ve,n:po,o:t};let Nc,kc;return e&&([Nc,kc]=e(xi)),{render:Td,hydrate:Nc,createApp:rI(Td,Nc)}}function Xn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function mI(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function og(t,e,n=!1){const i=t.children,s=e.children;if(U(i)&&U(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Nn(s[r]),a.el=o.el),n||og(o,a)),a.type===Ba&&(a.el=o.el)}}function gI(t){const e=t.slice(),n=[0];let i,s,r,o,a;const c=t.length;for(i=0;i<c;i++){const l=t[i];if(l!==0){if(s=n[n.length-1],t[s]<l){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const _I=t=>t.__isTeleport,Wt=Symbol.for("v-fgt"),Ba=Symbol.for("v-txt"),gi=Symbol.for("v-cmt"),Lc=Symbol.for("v-stc"),tr=[];let Pt=null;function _t(t=!1){tr.push(Pt=t?null:[])}function vI(){tr.pop(),Pt=tr[tr.length-1]||null}let vr=1;function Wd(t){vr+=t}function ag(t){return t.dynamicChildren=vr>0?Pt||Wi:null,vI(),vr>0&&Pt&&Pt.push(t),t}function Tt(t,e,n,i,s,r){return ag(ht(t,e,n,i,s,r,!0))}function yI(t,e,n,i,s){return ag(Lt(t,e,n,i,s,!0))}function EI(t){return t?t.__v_isVNode===!0:!1}function Vs(t,e){return t.type===e.type&&t.key===e.key}const $a="__vInternal",cg=({key:t})=>t??null,Fo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ve(t)||Ce(t)||G(t)?{i:lt,r:t,k:e,f:!!n}:t:null);function ht(t,e=null,n=null,i=0,s=null,r=t===Wt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&cg(e),ref:e&&Fo(e),scopeId:$m,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:lt};return a?(zu(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Ve(n)?8:16),vr>0&&!o&&Pt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Pt.push(c),c}const Lt=TI;function TI(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===LT)&&(t=gi),EI(t)){const a=ss(t,e,!0);return n&&zu(a,n),vr>0&&!r&&Pt&&(a.shapeFlag&6?Pt[Pt.indexOf(t)]=a:Pt.push(a)),a.patchFlag|=-2,a}if(xI(t)&&(t=t.__vccOpts),e){e=II(e);let{class:a,style:c}=e;a&&!Ve(a)&&(e.class=Su(a)),_e(c)&&(km(c)&&!U(c)&&(c=st({},c)),e.style=fr(c))}const o=Ve(t)?1:MT(t)?128:_I(t)?64:_e(t)?4:G(t)?2:0;return ht(t,e,n,i,s,o,r,!0)}function II(t){return t?km(t)||$a in t?st({},t):t:null}function ss(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?wI(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&cg(a),ref:e&&e.ref?n&&s?U(s)?s.concat(Fo(e)):[s,Fo(e)]:Fo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Wt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ss(t.ssContent),ssFallback:t.ssFallback&&ss(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Yo(t=" ",e=0){return Lt(Ba,null,t,e)}function ii(t="",e=!1){return e?(_t(),yI(gi,null,t)):Lt(gi,null,t)}function Ht(t){return t==null||typeof t=="boolean"?Lt(gi):U(t)?Lt(Wt,null,t.slice()):typeof t=="object"?Nn(t):Lt(Ba,null,String(t))}function Nn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ss(t)}function zu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),zu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!($a in e)?e._ctx=lt:s===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else G(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),i&64?(n=16,e=[Yo(e)]):n=8);t.children=e,t.shapeFlag|=n}function wI(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Su([e.class,i.class]));else if(s==="style")e.style=fr([e.style,i.style]);else if(Da(s)){const r=e[s],o=i[s];o&&r!==o&&!(U(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function $t(t,e,n,i=null){Ot(t,e,7,[n,i])}const bI=eg();let AI=0;function CI(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||bI,r={uid:AI++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new vm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ng(i,s),emitsOptions:Bm(i,s),emit:null,emitted:null,propsDefaults:Ee,inheritAttrs:i.inheritAttrs,ctx:Ee,data:Ee,props:Ee,attrs:Ee,slots:Ee,refs:Ee,setupState:Ee,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ST.bind(null,r),t.ce&&t.ce(r),r}let Oe=null;const ju=()=>Oe||lt;let Bu,Oi,Hd="__VUE_INSTANCE_SETTERS__";(Oi=fl()[Hd])||(Oi=fl()[Hd]=[]),Oi.push(t=>Oe=t),Bu=t=>{Oi.length>1?Oi.forEach(e=>e(t)):Oi[0](t)};const rs=t=>{Bu(t),t.scope.on()},di=()=>{Oe&&Oe.scope.off(),Bu(null)};function lg(t){return t.vnode.shapeFlag&4}let yr=!1;function RI(t,e=!1){yr=e;const{props:n,children:i}=t.vnode,s=lg(t);cI(t,n,s,e),hI(t,i);const r=s?SI(t,e):void 0;return yr=!1,r}function SI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Fa(new Proxy(t.ctx,JT));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?NI(t):null;rs(t),Es();const r=Ln(i,t,0,[t.props,s]);if(Ts(),di(),dm(r)){if(r.then(di,di),e)return r.then(o=>{Kd(t,o,e)}).catch(o=>{Ua(o,t,0)});t.asyncDep=r}else Kd(t,r,e)}else ug(t,e)}function Kd(t,e,n){G(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)&&(t.setupState=Vm(e)),ug(t,n)}let Gd;function ug(t,e,n){const i=t.type;if(!t.render){if(!e&&Gd&&!i.render){const s=i.template||Fu(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=i,l=st(st({isCustomElement:r,delimiters:a},o),c);i.render=Gd(s,l)}}t.render=i.render||Dt}{rs(t),Es();try{ZT(t)}finally{Ts(),di()}}}function PI(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ft(t,"get","$attrs"),e[n]}}))}function NI(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return PI(t)},slots:t.slots,emit:t.emit,expose:e}}function Wa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Vm(Fa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in er)return er[n](t)},has(e,n){return n in e||n in er}}))}function kI(t,e=!0){return G(t)?t.displayName||t.name:t.name||e&&t.__name}function xI(t){return G(t)&&"__vccOpts"in t}const hg=(t,e)=>IT(t,e,yr),DI=Symbol.for("v-scx"),OI=()=>hi(DI),LI="3.3.8",VI="http://www.w3.org/2000/svg",ti=typeof document<"u"?document:null,Qd=ti&&ti.createElement("template"),MI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?ti.createElementNS(VI,t):ti.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>ti.createTextNode(t),createComment:t=>ti.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ti.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Qd.innerHTML=i?`<svg>${t}</svg>`:t;const a=Qd.content;if(i){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},qI=Symbol("_vtc");function FI(t,e,n){const i=t[qI];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const UI=Symbol("_vod");function zI(t,e,n){const i=t.style,s=Ve(n);if(n&&!s){if(e&&!Ve(e))for(const r in e)n[r]==null&&wl(i,r,"");for(const r in n)wl(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),UI in t&&(i.display=r)}}const Yd=/\s*!important$/;function wl(t,e,n){if(U(n))n.forEach(i=>wl(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=jI(t,e);Yd.test(n)?t.setProperty(ys(i),n.replace(Yd,""),"important"):t[i]=n}}const Xd=["Webkit","Moz","ms"],Vc={};function jI(t,e){const n=Vc[e];if(n)return n;let i=nn(e);if(i!=="filter"&&i in t)return Vc[e]=i;i=La(i);for(let s=0;s<Xd.length;s++){const r=Xd[s]+i;if(r in t)return Vc[e]=r}return e}const Jd="http://www.w3.org/1999/xlink";function BI(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Jd,e.slice(6,e.length)):t.setAttributeNS(Jd,e,n);else{const r=BE(e);n==null||r&&!gm(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function $I(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=gm(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function $u(t,e,n,i){t.addEventListener(e,n,i)}function WI(t,e,n,i){t.removeEventListener(e,n,i)}const Zd=Symbol("_vei");function HI(t,e,n,i,s=null){const r=t[Zd]||(t[Zd]={}),o=r[e];if(i&&o)o.value=i;else{const[a,c]=KI(e);if(i){const l=r[e]=YI(i,s);$u(t,a,l,c)}else o&&(WI(t,a,o,c),r[e]=void 0)}}const ef=/(?:Once|Passive|Capture)$/;function KI(t){let e;if(ef.test(t)){e={};let i;for(;i=t.match(ef);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ys(t.slice(2)),e]}let Mc=0;const GI=Promise.resolve(),QI=()=>Mc||(GI.then(()=>Mc=0),Mc=Date.now());function YI(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Ot(XI(i,n.value),e,5,[i])};return n.value=t,n.attached=QI(),n}function XI(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const tf=/^on[a-z]/,JI=(t,e,n,i,s=!1,r,o,a,c)=>{e==="class"?FI(t,i,s):e==="style"?zI(t,n,i):Da(e)?Au(e)||HI(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ZI(t,e,i,s))?$I(t,e,i,r,o,a,c):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),BI(t,e,i,s))};function ZI(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&tf.test(e)&&G(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||tf.test(e)&&Ve(n)?!1:e in t}const Xo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return U(e)?n=>Mo(e,n):e},Gi=Symbol("_assign"),e0={deep:!0,created(t,e,n){t[Gi]=Xo(n),$u(t,"change",()=>{const i=t._modelValue,s=Er(t),r=t.checked,o=t[Gi];if(U(i)){const a=Pu(i,s),c=a!==-1;if(r&&!c)o(i.concat(s));else if(!r&&c){const l=[...i];l.splice(a,1),o(l)}}else if(vs(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(dg(t,r))})},mounted:nf,beforeUpdate(t,e,n){t[Gi]=Xo(n),nf(t,e,n)}};function nf(t,{value:e,oldValue:n},i){t._modelValue=e,U(e)?t.checked=Pu(e,i.props.value)>-1:vs(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=jr(e,dg(t,!0)))}const t0={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=vs(e);$u(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?mm(Er(o)):Er(o));t[Gi](t.multiple?s?new Set(r):r:r[0])}),t[Gi]=Xo(i)},mounted(t,{value:e}){sf(t,e)},beforeUpdate(t,e,n){t[Gi]=Xo(n)},updated(t,{value:e}){sf(t,e)}};function sf(t,e){const n=t.multiple;if(!(n&&!U(e)&&!vs(e))){for(let i=0,s=t.options.length;i<s;i++){const r=t.options[i],o=Er(r);if(n)U(e)?r.selected=Pu(e,o)>-1:r.selected=e.has(o);else if(jr(Er(r),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Er(t){return"_value"in t?t._value:t.value}function dg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const n0=st({patchProp:JI},MI);let rf;function i0(){return rf||(rf=fI(n0))}const s0=(...t)=>{const e=i0().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=r0(i);if(!s)return;const r=e._component;!G(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function r0(t){return Ve(t)?document.querySelector(t):t}var o0=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let fg;const Ha=t=>fg=t,pg=Symbol();function bl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var nr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(nr||(nr={}));function a0(){const t=Va(!0),e=t.run(()=>ui({}));let n=[],i=[];const s=Fa({install(r){Ha(s),s._a=r,r.provide(pg,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!o0?i.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const mg=()=>{};function of(t,e,n,i=mg){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&Nu()&&ym(s),s}function Li(t,...e){t.slice().forEach(n=>{n(...e)})}const c0=t=>t();function Al(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];bl(s)&&bl(i)&&t.hasOwnProperty(n)&&!Ce(i)&&!On(i)?t[n]=Al(s,i):t[n]=i}return t}const l0=Symbol();function u0(t){return!bl(t)||!t.hasOwnProperty(l0)}const{assign:Pn}=Object;function h0(t){return!!(Ce(t)&&t.effect)}function d0(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=_T(n.state.value[t]);return Pn(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=Fa(hg(()=>{Ha(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return c=gg(t,l,e,n,i,!0),c}function gg(t,e,n={},i,s,r){let o;const a=Pn({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],p;const g=i.state.value[t];!r&&!g&&(i.state.value[t]={}),ui({});let _;function y(j){let Y;l=u=!1,typeof j=="function"?(j(i.state.value[t]),Y={type:nr.patchFunction,storeId:t,events:p}):(Al(i.state.value[t],j),Y={type:nr.patchObject,payload:j,storeId:t,events:p});const ve=_=Symbol();Fm().then(()=>{_===ve&&(l=!0)}),u=!0,Li(h,Y,i.state.value[t])}const x=r?function(){const{state:Y}=n,ve=Y?Y():{};this.$patch(pt=>{Pn(pt,ve)})}:mg;function V(){o.stop(),h=[],d=[],i._s.delete(t)}function k(j,Y){return function(){Ha(i);const ve=Array.from(arguments),pt=[],zt=[];function ki(he){pt.push(he)}function Os(he){zt.push(he)}Li(d,{args:ve,name:j,store:H,after:ki,onError:Os});let Cn;try{Cn=Y.apply(this&&this.$id===t?this:H,ve)}catch(he){throw Li(zt,he),he}return Cn instanceof Promise?Cn.then(he=>(Li(pt,he),he)).catch(he=>(Li(zt,he),Promise.reject(he))):(Li(pt,Cn),Cn)}}const A={_p:i,$id:t,$onAction:of.bind(null,d),$patch:y,$reset:x,$subscribe(j,Y={}){const ve=of(h,j,Y.detached,()=>pt()),pt=o.run(()=>Zs(()=>i.state.value[t],zt=>{(Y.flush==="sync"?u:l)&&j({storeId:t,type:nr.direct,events:p},zt)},Pn({},c,Y)));return ve},$dispose:V},H=qa(A);i._s.set(t,H);const pe=(i._a&&i._a.runWithContext||c0)(()=>i._e.run(()=>(o=Va()).run(e)));for(const j in pe){const Y=pe[j];if(Ce(Y)&&!h0(Y)||On(Y))r||(g&&u0(Y)&&(Ce(Y)?Y.value=g[j]:Al(Y,g[j])),i.state.value[t][j]=Y);else if(typeof Y=="function"){const ve=k(j,Y);pe[j]=ve,a.actions[j]=Y}}return Pn(H,pe),Pn(re(H),pe),Object.defineProperty(H,"$state",{get:()=>i.state.value[t],set:j=>{y(Y=>{Pn(Y,j)})}}),i._p.forEach(j=>{Pn(H,o.run(()=>j({store:H,app:i._a,pinia:i,options:a})))}),g&&r&&n.hydrate&&n.hydrate(H.$state,g),l=!0,u=!0,H}function _g(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(a,c){const l=aI();return a=a||(l?hi(pg,null):null),a&&Ha(a),a=fg,a._s.has(i)||(r?gg(i,e,s,a):d0(i,s,a)),a._s.get(i)}return o.$id=i,o}const kn=_g({id:"partyFFVL",state:()=>({qcms:[]}),actions:{setAnswerd(t){this.qcms.find(e=>e.id===t).answered=!0},setValidated(t){this.qcms.find(e=>e.id===t).validated=!0},setQCMs(t){this.qcms=t}},getters:{}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(t,e){if(!t)throw Is(e)},Is=function(t){return new Error("Firebase Database ("+vg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},f0=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ka={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),i.push(n[u],n[h],n[d],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):f0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||l==null||h==null)throw new p0;const d=r<<2|a>>4;if(i.push(d),l!==64){const p=a<<4&240|l>>2;if(i.push(p),h!==64){const g=l<<6&192|h;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class p0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Eg=function(t){const e=yg(t);return Ka.encodeByteArray(e,!0)},Jo=function(t){return Eg(t).replace(/\./g,"")},Zo=function(t){try{return Ka.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t){return Tg(void 0,t)}function Tg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!g0(n)||(t[n]=Tg(t[n],e[n]));return t}function g0(t){return t!=="__proto__"}/**
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
 */function _0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const v0=()=>_0().__FIREBASE_DEFAULTS__,y0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},E0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zo(t[1]);return e&&JSON.parse(e)},Wu=()=>{try{return v0()||y0()||E0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},T0=t=>{var e,n;return(n=(e=Wu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},I0=t=>{const e=T0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Ig=()=>{var t;return(t=Wu())===null||t===void 0?void 0:t.config},w0=t=>{var e;return(e=Wu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function b0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Jo(JSON.stringify(n)),Jo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(sn())}function A0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bg(){return vg.NODE_ADMIN===!0}function Ag(){try{return typeof indexedDB=="object"}catch{return!1}}function C0(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0="FirebaseError";class bn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=R0,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ws.prototype.create)}}class ws{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?S0(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new bn(s,a,i)}}function S0(t,e){return t.replace(P0,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const P0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t){return JSON.parse(t)}function We(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=Ir(Zo(r[0])||""),n=Ir(Zo(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},N0=function(t){const e=Cg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},k0=function(t){const e=Cg(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function os(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function af(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ea(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Cl(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(cf(r)&&cf(o)){if(!Cl(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function cf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+l+c+u+i[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function D0(t,e){const n=new O0(t,e);return n.subscribe.bind(n)}class O0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");L0(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=qc),s.error===void 0&&(s.error=qc),s.complete===void 0&&(s.complete=qc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function L0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qc(){}function V0(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,P(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ga=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Mt(t){return t&&t._delegate?t._delegate:t}class qt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Jn="[DEFAULT]";/**
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
 */class q0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Tr;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(U0(e))try{this.getOrInitializeService({instanceIdentifier:Jn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jn){return this.instances.has(e)}getOptions(e=Jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:F0(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Jn){return this.component?this.component.multipleInstances?e:Jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function F0(t){return t===Jn?void 0:t}function U0(t){return t.instantiationMode==="EAGER"}/**
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
 */class z0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new q0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const j0={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},B0=J.INFO,$0={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},W0=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=$0[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Br{constructor(e){this.name=e,this._logLevel=B0,this._logHandler=W0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?j0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const H0=(t,e)=>e.some(n=>t instanceof n);let lf,uf;function K0(){return lf||(lf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function G0(){return uf||(uf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rg=new WeakMap,Rl=new WeakMap,Sg=new WeakMap,Fc=new WeakMap,Gu=new WeakMap;function Q0(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Vn(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Rg.set(n,t)}).catch(()=>{}),Gu.set(e,t),e}function Y0(t){if(Rl.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Rl.set(t,e)}let Sl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function X0(t){Sl=t(Sl)}function J0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Uc(this),e,...n);return Sg.set(i,e.sort?e.sort():[e]),Vn(i)}:G0().includes(t)?function(...e){return t.apply(Uc(this),e),Vn(Rg.get(this))}:function(...e){return Vn(t.apply(Uc(this),e))}}function Z0(t){return typeof t=="function"?J0(t):(t instanceof IDBTransaction&&Y0(t),H0(t,K0())?new Proxy(t,Sl):t)}function Vn(t){if(t instanceof IDBRequest)return Q0(t);if(Fc.has(t))return Fc.get(t);const e=Z0(t);return e!==t&&(Fc.set(t,e),Gu.set(e,t)),e}const Uc=t=>Gu.get(t);function ew(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Vn(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Vn(o.result),c.oldVersion,c.newVersion,Vn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const tw=["get","getKey","getAll","getAllKeys","count"],nw=["put","add","delete","clear"],zc=new Map;function hf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zc.get(e))return zc.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=nw.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||tw.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return zc.set(e,r),r}X0(t=>({...t,get:(e,n,i)=>hf(e,n)||t.get(e,n,i),has:(e,n)=>!!hf(e,n)||t.has(e,n)}));/**
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
 */class iw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sw(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function sw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pl="@firebase/app",df="0.9.23";/**
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
 */const _i=new Br("@firebase/app"),rw="@firebase/app-compat",ow="@firebase/analytics-compat",aw="@firebase/analytics",cw="@firebase/app-check-compat",lw="@firebase/app-check",uw="@firebase/auth",hw="@firebase/auth-compat",dw="@firebase/database",fw="@firebase/database-compat",pw="@firebase/functions",mw="@firebase/functions-compat",gw="@firebase/installations",_w="@firebase/installations-compat",vw="@firebase/messaging",yw="@firebase/messaging-compat",Ew="@firebase/performance",Tw="@firebase/performance-compat",Iw="@firebase/remote-config",ww="@firebase/remote-config-compat",bw="@firebase/storage",Aw="@firebase/storage-compat",Cw="@firebase/firestore",Rw="@firebase/firestore-compat",Sw="firebase",Pw="10.6.0";/**
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
 */const Nl="[DEFAULT]",Nw={[Pl]:"fire-core",[rw]:"fire-core-compat",[aw]:"fire-analytics",[ow]:"fire-analytics-compat",[lw]:"fire-app-check",[cw]:"fire-app-check-compat",[uw]:"fire-auth",[hw]:"fire-auth-compat",[dw]:"fire-rtdb",[fw]:"fire-rtdb-compat",[pw]:"fire-fn",[mw]:"fire-fn-compat",[gw]:"fire-iid",[_w]:"fire-iid-compat",[vw]:"fire-fcm",[yw]:"fire-fcm-compat",[Ew]:"fire-perf",[Tw]:"fire-perf-compat",[Iw]:"fire-rc",[ww]:"fire-rc-compat",[bw]:"fire-gcs",[Aw]:"fire-gcs-compat",[Cw]:"fire-fst",[Rw]:"fire-fst-compat","fire-js":"fire-js",[Sw]:"fire-js-all"};/**
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
 */const ta=new Map,kl=new Map;function kw(t,e){try{t.container.addComponent(e)}catch(n){_i.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rn(t){const e=t.name;if(kl.has(e))return _i.debug(`There were multiple attempts to register component ${e}.`),!1;kl.set(e,t);for(const n of ta.values())kw(n,t);return!0}function xw(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Dw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mn=new ws("app","Firebase",Dw);/**
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
 */class Ow{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
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
 */const bs=Pw;function Pg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Nl,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Mn.create("bad-app-name",{appName:String(s)});if(n||(n=Ig()),!n)throw Mn.create("no-options");const r=ta.get(s);if(r){if(Cl(n,r.options)&&Cl(i,r.config))return r;throw Mn.create("duplicate-app",{appName:s})}const o=new z0(s);for(const c of kl.values())o.addComponent(c);const a=new Ow(n,i,o);return ta.set(s,a),a}function Ng(t=Nl){const e=ta.get(t);if(!e&&t===Nl&&Ig())return Pg();if(!e)throw Mn.create("no-app",{appName:t});return e}function vt(t,e,n){var i;let s=(i=Nw[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_i.warn(a.join(" "));return}rn(new qt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Lw="firebase-heartbeat-database",Vw=1,wr="firebase-heartbeat-store";let jc=null;function kg(){return jc||(jc=ew(Lw,Vw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wr)}}}).catch(t=>{throw Mn.create("idb-open",{originalErrorMessage:t.message})})),jc}async function Mw(t){try{return await(await kg()).transaction(wr).objectStore(wr).get(xg(t))}catch(e){if(e instanceof bn)_i.warn(e.message);else{const n=Mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_i.warn(n.message)}}}async function ff(t,e){try{const i=(await kg()).transaction(wr,"readwrite");await i.objectStore(wr).put(e,xg(t)),await i.done}catch(n){if(n instanceof bn)_i.warn(n.message);else{const i=Mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_i.warn(i.message)}}}function xg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const qw=1024,Fw=30*24*60*60*1e3;class Uw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jw(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=pf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=Fw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=pf(),{heartbeatsToSend:i,unsentEntries:s}=zw(this._heartbeatsCache.heartbeats),r=Jo(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function pf(){return new Date().toISOString().substring(0,10)}function zw(t,e=qw){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),mf(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),mf(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class jw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ag()?C0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Mw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ff(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ff(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function mf(t){return Jo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Bw(t){rn(new qt("platform-logger",e=>new iw(e),"PRIVATE")),rn(new qt("heartbeat",e=>new Uw(e),"PRIVATE")),vt(Pl,df,t),vt(Pl,df,"esm2017"),vt("fire-js","")}Bw("");var $w=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,Qu=Qu||{},$=$w||self;function Qa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function $r(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Ww(t){return Object.prototype.hasOwnProperty.call(t,Bc)&&t[Bc]||(t[Bc]=++Hw)}var Bc="closure_uid_"+(1e9*Math.random()>>>0),Hw=0;function Kw(t,e,n){return t.call.apply(t.bind,arguments)}function Gw(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function nt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?nt=Kw:nt=Gw,nt.apply(null,arguments)}function To(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function je(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Hn(){this.s=this.s,this.o=this.o}var Qw=0;Hn.prototype.s=!1;Hn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Qw!=0)&&Ww(this)};Hn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Dg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Yu(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function gf(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Qa(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function it(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}it.prototype.h=function(){this.defaultPrevented=!0};var Yw=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",()=>{},e),$.removeEventListener("test",()=>{},e)}catch{}return t}();function br(t){return/^[\s\xa0]*$/.test(t)}function Ya(){var t=$.navigator;return t&&(t=t.userAgent)?t:""}function Gt(t){return Ya().indexOf(t)!=-1}function Xu(t){return Xu[" "](t),t}Xu[" "]=function(){};function Xw(t,e){var n=Bb;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Jw=Gt("Opera"),as=Gt("Trident")||Gt("MSIE"),Og=Gt("Edge"),xl=Og||as,Lg=Gt("Gecko")&&!(Ya().toLowerCase().indexOf("webkit")!=-1&&!Gt("Edge"))&&!(Gt("Trident")||Gt("MSIE"))&&!Gt("Edge"),Zw=Ya().toLowerCase().indexOf("webkit")!=-1&&!Gt("Edge");function Vg(){var t=$.document;return t?t.documentMode:void 0}var Dl;e:{var $c="",Wc=function(){var t=Ya();if(Lg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Og)return/Edge\/([\d\.]+)/.exec(t);if(as)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Zw)return/WebKit\/(\S+)/.exec(t);if(Jw)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Wc&&($c=Wc?Wc[1]:""),as){var Hc=Vg();if(Hc!=null&&Hc>parseFloat($c)){Dl=String(Hc);break e}}Dl=$c}var Ol;if($.document&&as){var _f=Vg();Ol=_f||parseInt(Dl,10)||void 0}else Ol=void 0;var eb=Ol;function Ar(t,e){if(it.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Lg){e:{try{Xu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:tb[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ar.$.h.call(this)}}je(Ar,it);var tb={2:"touch",3:"pen",4:"mouse"};Ar.prototype.h=function(){Ar.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Wr="closure_listenable_"+(1e6*Math.random()|0),nb=0;function ib(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=s,this.key=++nb,this.fa=this.ia=!1}function Xa(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ju(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function sb(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Mg(t){const e={};for(const n in t)e[n]=t[n];return e}const vf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qg(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<vf.length;r++)n=vf[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Ja(t){this.src=t,this.g={},this.h=0}Ja.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Vl(t,e,i,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new ib(e,this.src,r,!!i,s),e.ia=n,t.push(e)),e};function Ll(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=Dg(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Xa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Vl(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==i)return s}return-1}var Zu="closure_lm_"+(1e6*Math.random()|0),Kc={};function Fg(t,e,n,i,s){if(i&&i.once)return zg(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Fg(t,e[r],n,i,s);return null}return n=nh(n),t&&t[Wr]?t.O(e,n,$r(i)?!!i.capture:!!i,s):Ug(t,e,n,!1,i,s)}function Ug(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=$r(s)?!!s.capture:!!s,a=th(t);if(a||(t[Zu]=a=new Ja(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=rb(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Yw||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Bg(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function rb(){function t(n){return e.call(t.src,t.listener,n)}const e=ob;return t}function zg(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)zg(t,e[r],n,i,s);return null}return n=nh(n),t&&t[Wr]?t.P(e,n,$r(i)?!!i.capture:!!i,s):Ug(t,e,n,!0,i,s)}function jg(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)jg(t,e[r],n,i,s);else i=$r(i)?!!i.capture:!!i,n=nh(n),t&&t[Wr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Vl(r,n,i,s),-1<n&&(Xa(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=th(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Vl(e,n,i,s)),(n=-1<t?e[t]:null)&&eh(n))}function eh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Wr])Ll(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Bg(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=th(e))?(Ll(n,t),n.h==0&&(n.src=null,e[Zu]=null)):Xa(t)}}}function Bg(t){return t in Kc?Kc[t]:Kc[t]="on"+t}function ob(t,e){if(t.fa)t=!0;else{e=new Ar(e,this);var n=t.listener,i=t.la||t.src;t.ia&&eh(t),t=n.call(i,e)}return t}function th(t){return t=t[Zu],t instanceof Ja?t:null}var Gc="__closure_events_fn_"+(1e9*Math.random()>>>0);function nh(t){return typeof t=="function"?t:(t[Gc]||(t[Gc]=function(e){return t.handleEvent(e)}),t[Gc])}function ze(){Hn.call(this),this.i=new Ja(this),this.S=this,this.J=null}je(ze,Hn);ze.prototype[Wr]=!0;ze.prototype.removeEventListener=function(t,e,n,i){jg(this,t,e,n,i)};function Ke(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new it(e,t);else if(e instanceof it)e.target=e.target||t;else{var s=e;e=new it(i,t),qg(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Io(o,i,!0,e)&&s}if(o=e.g=t,s=Io(o,i,!0,e)&&s,s=Io(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Io(o,i,!1,e)&&s}ze.prototype.N=function(){if(ze.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Xa(n[i]);delete t.g[e],t.h--}}this.J=null};ze.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};ze.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Io(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Ll(t.i,o),s=a.call(c,i)!==!1&&s}}return s&&!i.defaultPrevented}var ih=$.JSON.stringify;class ab{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function cb(){var t=sh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class lb{constructor(){this.h=this.g=null}add(e,n){const i=$g.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var $g=new ab(()=>new ub,t=>t.reset());class ub{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function hb(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function db(t){$.setTimeout(()=>{throw t},0)}let Cr,Rr=!1,sh=new lb,Wg=()=>{const t=$.Promise.resolve(void 0);Cr=()=>{t.then(fb)}};var fb=()=>{for(var t;t=cb();){try{t.h.call(t.g)}catch(n){db(n)}var e=$g;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Rr=!1};function Za(t,e){ze.call(this),this.h=t||1,this.g=e||$,this.j=nt(this.qb,this),this.l=Date.now()}je(Za,ze);N=Za.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ke(this,"tick"),this.ga&&(rh(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function rh(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){Za.$.N.call(this),rh(this),delete this.g};function oh(t,e,n){if(typeof t=="function")n&&(t=nt(t,n));else if(t&&typeof t.handleEvent=="function")t=nt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function Hg(t){t.g=oh(()=>{t.g=null,t.i&&(t.i=!1,Hg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class pb extends Hn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Hg(this)}N(){super.N(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sr(t){Hn.call(this),this.h=t,this.g={}}je(Sr,Hn);var yf=[];function Kg(t,e,n,i){Array.isArray(n)||(n&&(yf[0]=n.toString()),n=yf);for(var s=0;s<n.length;s++){var r=Fg(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Gg(t){Ju(t.g,function(e,n){this.g.hasOwnProperty(n)&&eh(e)},t),t.g={}}Sr.prototype.N=function(){Sr.$.N.call(this),Gg(this)};Sr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ec(){this.g=!0}ec.prototype.Ea=function(){this.g=!1};function mb(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function gb(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function ji(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+vb(t,n)+(i?" "+i:"")})}function _b(t,e){t.info(function(){return"TIMEOUT: "+e})}ec.prototype.info=function(){};function vb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return ih(n)}catch{return e}}var Ai={},Ef=null;function tc(){return Ef=Ef||new ze}Ai.Ta="serverreachability";function Qg(t){it.call(this,Ai.Ta,t)}je(Qg,it);function Pr(t){const e=tc();Ke(e,new Qg(e))}Ai.STAT_EVENT="statevent";function Yg(t,e){it.call(this,Ai.STAT_EVENT,t),this.stat=e}je(Yg,it);function at(t){const e=tc();Ke(e,new Yg(e,t))}Ai.Ua="timingevent";function Xg(t,e){it.call(this,Ai.Ua,t),this.size=e}je(Xg,it);function Hr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var nc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Jg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ah(){}ah.prototype.h=null;function Tf(t){return t.h||(t.h=t.i())}function Zg(){}var Kr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ch(){it.call(this,"d")}je(ch,it);function lh(){it.call(this,"c")}je(lh,it);var Ml;function ic(){}je(ic,ah);ic.prototype.g=function(){return new XMLHttpRequest};ic.prototype.i=function(){return{}};Ml=new ic;function Gr(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Sr(this),this.P=yb,t=xl?125:void 0,this.V=new Za(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new e_}function e_(){this.i=null,this.g="",this.h=!1}var yb=45e3,ql={},na={};N=Gr.prototype;N.setTimeout=function(t){this.P=t};function Fl(t,e,n){t.L=1,t.v=rc(En(e)),t.s=n,t.S=!0,t_(t,null)}function t_(t,e){t.G=Date.now(),Qr(t),t.A=En(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),l_(n.i,"t",i),t.C=0,n=t.l.J,t.h=new e_,t.g=N_(t.l,n?e:null,!t.s),0<t.O&&(t.M=new pb(nt(t.Pa,t,t.g),t.O)),Kg(t.U,t.g,"readystatechange",t.nb),e=t.I?Mg(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Pr(),mb(t.j,t.u,t.A,t.m,t.W,t.s)}N.nb=function(t){t=t.target;const e=this.M;e&&Qt(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const u=Qt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||xl||this.g&&(this.h.h||this.g.ja()||Af(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Pr(3):Pr(2)),sc(this);var n=this.g.da();this.ca=n;t:if(n_(this)){var i=Af(this.g);t="";var s=i.length,r=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){si(this),ir(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,gb(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!br(a)){var l=a;break t}}l=null}if(n=l)ji(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ul(this,n);else{this.i=!1,this.o=3,at(12),si(this),ir(this);break e}}this.S?(i_(this,u,o),xl&&this.i&&u==3&&(Kg(this.U,this.V,"tick",this.mb),this.V.start())):(ji(this.j,this.m,o,null),Ul(this,o)),u==4&&si(this),this.i&&!this.J&&(u==4?C_(this.l,this):(this.i=!1,Qr(this)))}else Ub(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),si(this),ir(this)}}}catch{}finally{}};function n_(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function i_(t,e,n){let i=!0,s;for(;!t.J&&t.C<n.length;)if(s=Eb(t,n),s==na){e==4&&(t.o=4,at(14),i=!1),ji(t.j,t.m,null,"[Incomplete Response]");break}else if(s==ql){t.o=4,at(15),ji(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else ji(t.j,t.m,s,null),Ul(t,s);n_(t)&&s!=na&&s!=ql&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,at(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),mh(e),e.M=!0,at(11))):(ji(t.j,t.m,n,"[Invalid Chunked Response]"),si(t),ir(t))}N.mb=function(){if(this.g){var t=Qt(this.g),e=this.g.ja();this.C<e.length&&(sc(this),i_(this,t,e),this.i&&t!=4&&Qr(this))}};function Eb(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?na:(n=Number(e.substring(n,i)),isNaN(n)?ql:(i+=1,i+n>e.length?na:(e=e.slice(i,i+n),t.C=i+n,e)))}N.cancel=function(){this.J=!0,si(this)};function Qr(t){t.Y=Date.now()+t.P,s_(t,t.P)}function s_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Hr(nt(t.lb,t),e)}function sc(t){t.B&&($.clearTimeout(t.B),t.B=null)}N.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(_b(this.j,this.A),this.L!=2&&(Pr(),at(17)),si(this),this.o=2,ir(this)):s_(this,this.Y-t)};function ir(t){t.l.H==0||t.J||C_(t.l,t)}function si(t){sc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,rh(t.V),Gg(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ul(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||zl(n.i,t))){if(!t.K&&zl(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ra(n),cc(n);else break e;ph(n),at(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Hr(nt(n.ib,n),6e3));if(1>=d_(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ri(n,11)}else if((t.K||n.g==t)&&ra(n),!br(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=i.i;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(uh(r,r.h),r.h=null))}if(i.F){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(i.Da=_,Ie(i.I,i.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=P_(i,i.J?i.pa:null,i.Y),o.K){f_(i.i,o);var a=o,c=i.L;c&&a.setTimeout(c),a.B&&(sc(a),Qr(a)),i.g=o}else b_(i);0<n.j.length&&lc(n)}else l[0]!="stop"&&l[0]!="close"||ri(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ri(n,7):fh(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Pr(4)}catch{}}function Tb(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Qa(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function Ib(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Qa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function r_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Qa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Ib(t),i=Tb(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var o_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function fi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof fi){this.h=t.h,ia(this,t.j),this.s=t.s,this.g=t.g,sa(this,t.m),this.l=t.l;var e=t.i,n=new Nr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),If(this,n),this.o=t.o}else t&&(e=String(t).match(o_))?(this.h=!1,ia(this,e[1]||"",!0),this.s=Ks(e[2]||""),this.g=Ks(e[3]||"",!0),sa(this,e[4]),this.l=Ks(e[5]||"",!0),If(this,e[6]||"",!0),this.o=Ks(e[7]||"")):(this.h=!1,this.i=new Nr(null,this.h))}fi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Gs(e,wf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Gs(e,wf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Gs(n,n.charAt(0)=="/"?Cb:Ab,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Gs(n,Sb)),t.join("")};function En(t){return new fi(t)}function ia(t,e,n){t.j=n?Ks(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function sa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function If(t,e,n){e instanceof Nr?(t.i=e,Pb(t.i,t.h)):(n||(e=Gs(e,Rb)),t.i=new Nr(e,t.h))}function Ie(t,e,n){t.i.set(e,n)}function rc(t){return Ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ks(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Gs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,bb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function bb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var wf=/[#\/\?@]/g,Ab=/[#\?:]/g,Cb=/[#\?]/g,Rb=/[#\?@]/g,Sb=/#/g;function Nr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Kn(t){t.g||(t.g=new Map,t.h=0,t.i&&wb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=Nr.prototype;N.add=function(t,e){Kn(this),this.i=null,t=As(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function a_(t,e){Kn(t),e=As(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function c_(t,e){return Kn(t),e=As(t,e),t.g.has(e)}N.forEach=function(t,e){Kn(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};N.ta=function(){Kn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};N.Z=function(t){Kn(this);let e=[];if(typeof t=="string")c_(this,t)&&(e=e.concat(this.g.get(As(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return Kn(this),this.i=null,t=As(this,t),c_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function l_(t,e,n){a_(t,e),0<n.length&&(t.i=null,t.g.set(As(t,e),Yu(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function As(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Pb(t,e){e&&!t.j&&(Kn(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(a_(this,i),l_(this,s,n))},t)),t.j=e}var Nb=class{constructor(t,e){this.g=t,this.map=e}};function u_(t){this.l=t||kb,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ka&&$.g.Ka()&&$.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var kb=10;function h_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function d_(t){return t.h?1:t.g?t.g.size:0}function zl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function uh(t,e){t.g?t.g.add(e):t.h=e}function f_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}u_.prototype.cancel=function(){if(this.i=p_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function p_(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Yu(t.i)}var xb=class{stringify(t){return $.JSON.stringify(t,void 0)}parse(t){return $.JSON.parse(t,void 0)}};function Db(){this.g=new xb}function Ob(t,e,n){const i=n||"";try{r_(t,function(s,r){let o=s;$r(s)&&(o=ih(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function Lb(t,e){const n=new ec;if($.Image){const i=new Image;i.onload=To(wo,n,i,"TestLoadImage: loaded",!0,e),i.onerror=To(wo,n,i,"TestLoadImage: error",!1,e),i.onabort=To(wo,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=To(wo,n,i,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function wo(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Yr(t){this.l=t.ec||null,this.j=t.ob||!1}je(Yr,ah);Yr.prototype.g=function(){return new oc(this.l,this.j)};Yr.prototype.i=function(t){return function(){return t}}({});function oc(t,e){ze.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=hh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}je(oc,ze);var hh=0;N=oc.prototype;N.open=function(t,e){if(this.readyState!=hh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,kr(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||$).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xr(this)),this.readyState=hh};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,kr(this)),this.g&&(this.readyState=3,kr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;m_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function m_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Xr(this):kr(this),this.readyState==3&&m_(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,Xr(this))};N.Ya=function(t){this.g&&(this.response=t,Xr(this))};N.ka=function(){this.g&&Xr(this)};function Xr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,kr(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function kr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(oc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Vb=$.JSON.parse;function Se(t){ze.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=g_,this.L=this.M=!1}je(Se,ze);var g_="",Mb=/^https?$/i,qb=["POST","PUT"];N=Se.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ml.g(),this.C=this.u?Tf(this.u):Tf(Ml),this.g.onreadystatechange=nt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){bf(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=$.FormData&&t instanceof $.FormData,!(0<=Dg(qb,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{y_(this),0<this.B&&((this.L=Fb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=nt(this.ua,this)):this.A=oh(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){bf(this,r)}};function Fb(t){return as&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof Qu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ke(this,"timeout"),this.abort(8))};function bf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,__(t),ac(t)}function __(t){t.F||(t.F=!0,Ke(t,"complete"),Ke(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ke(this,"complete"),Ke(this,"abort"),ac(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ac(this,!0)),Se.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?v_(this):this.kb())};N.kb=function(){v_(this)};function v_(t){if(t.h&&typeof Qu<"u"&&(!t.C[1]||Qt(t)!=4||t.da()!=2)){if(t.v&&Qt(t)==4)oh(t.La,0,t);else if(Ke(t,"readystatechange"),Qt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var s=String(t.I).match(o_)[1]||null;!s&&$.self&&$.self.location&&(s=$.self.location.protocol.slice(0,-1)),i=!Mb.test(s?s.toLowerCase():"")}n=i}if(n)Ke(t,"complete"),Ke(t,"success");else{t.m=6;try{var r=2<Qt(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",__(t)}}finally{ac(t)}}}}function ac(t,e){if(t.g){y_(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ke(t,"ready");try{n.onreadystatechange=i}catch{}}}function y_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}N.isActive=function(){return!!this.g};function Qt(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Vb(e)}};function Af(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case g_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Ub(t){const e={};t=(t.g&&2<=Qt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(br(t[i]))continue;var n=hb(t[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[s]||[];e[s]=r,r.push(n)}sb(e,function(i){return i.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function E_(t){let e="";return Ju(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function dh(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=E_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ie(t,e,n))}function Ms(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function T_(t){this.Ga=0,this.j=[],this.l=new ec,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ms("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ms("baseRetryDelayMs",5e3,t),this.hb=Ms("retryDelaySeedMs",1e4,t),this.eb=Ms("forwardChannelMaxRetries",2,t),this.xa=Ms("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new u_(t&&t.concurrentRequestLimit),this.Ja=new Db,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=T_.prototype;N.ra=8;N.H=1;function fh(t){if(I_(t),t.H==3){var e=t.W++,n=En(t.I);if(Ie(n,"SID",t.K),Ie(n,"RID",e),Ie(n,"TYPE","terminate"),Jr(t,n),e=new Gr(t,t.l,e),e.L=2,e.v=rc(En(n)),n=!1,$.navigator&&$.navigator.sendBeacon)try{n=$.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&$.Image&&(new Image().src=e.v,n=!0),n||(e.g=N_(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Qr(e)}S_(t)}function cc(t){t.g&&(mh(t),t.g.cancel(),t.g=null)}function I_(t){cc(t),t.u&&($.clearTimeout(t.u),t.u=null),ra(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function lc(t){if(!h_(t.i)&&!t.m){t.m=!0;var e=t.Na;Cr||Wg(),Rr||(Cr(),Rr=!0),sh.add(e,t),t.C=0}}function zb(t,e){return d_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Hr(nt(t.Na,t,e),R_(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Gr(this,this.l,t);let r=this.s;if(this.U&&(r?(r=Mg(r),qg(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=w_(this,s,e),n=En(this.I),Ie(n,"RID",t),Ie(n,"CVER",22),this.F&&Ie(n,"X-HTTP-Session-Id",this.F),Jr(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(E_(r)))+"&"+e:this.o&&dh(n,this.o,r)),uh(this.i,s),this.bb&&Ie(n,"TYPE","init"),this.P?(Ie(n,"$req",e),Ie(n,"SID","null"),s.aa=!0,Fl(s,n,null)):Fl(s,n,e),this.H=2}}else this.H==3&&(t?Cf(this,t):this.j.length==0||h_(this.i)||Cf(this))};function Cf(t,e){var n;e?n=e.m:n=t.W++;const i=En(t.I);Ie(i,"SID",t.K),Ie(i,"RID",n),Ie(i,"AID",t.V),Jr(t,i),t.o&&t.s&&dh(i,t.o,t.s),n=new Gr(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=w_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),uh(t.i,n),Fl(n,i,e)}function Jr(t,e){t.na&&Ju(t.na,function(n,i){Ie(e,i,n)}),t.h&&r_({},function(n,i){Ie(e,i,n)})}function w_(t,e,n){n=Math.min(t.j.length,n);var i=t.h?nt(t.h.Va,t.h,t):null;e:{var s=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=r,0>l)r=Math.max(0,s[c].g-100),a=!1;else try{Ob(u,o,"req"+l+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function b_(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Cr||Wg(),Rr||(Cr(),Rr=!0),sh.add(e,t),t.A=0}}function ph(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Hr(nt(t.Ma,t),R_(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,A_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Hr(nt(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,at(10),cc(this),A_(this))};function mh(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function A_(t){t.g=new Gr(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=En(t.wa);Ie(e,"RID","rpc"),Ie(e,"SID",t.K),Ie(e,"AID",t.V),Ie(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ie(e,"TO",t.qa),Ie(e,"TYPE","xmlhttp"),Jr(t,e),t.o&&t.s&&dh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=rc(En(e)),n.s=null,n.S=!0,t_(n,t)}N.ib=function(){this.v!=null&&(this.v=null,cc(this),ph(this),at(19))};function ra(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function C_(t,e){var n=null;if(t.g==e){ra(t),mh(t),t.g=null;var i=2}else if(zl(t.i,e))n=e.F,f_(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;i=tc(),Ke(i,new Xg(i,n)),lc(t)}else b_(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(i==1&&zb(t,e)||i==2&&ph(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:ri(t,5);break;case 4:ri(t,10);break;case 3:ri(t,6);break;default:ri(t,2)}}}function R_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ri(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=nt(t.pb,t);n||(n=new fi("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||ia(n,"https"),rc(n)),Lb(n.toString(),i)}else at(2);t.H=0,t.h&&t.h.za(e),S_(t),I_(t)}N.pb=function(t){t?(this.l.info("Successfully pinged google.com"),at(2)):(this.l.info("Failed to ping google.com"),at(1))};function S_(t){if(t.H=0,t.ma=[],t.h){const e=p_(t.i);(e.length!=0||t.j.length!=0)&&(gf(t.ma,e),gf(t.ma,t.j),t.i.i.length=0,Yu(t.j),t.j.length=0),t.h.ya()}}function P_(t,e,n){var i=n instanceof fi?En(n):new fi(n);if(i.g!="")e&&(i.g=e+"."+i.g),sa(i,i.m);else{var s=$.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new fi(null);i&&ia(r,i),e&&(r.g=e),s&&sa(r,s),n&&(r.l=n),i=r}return n=t.F,e=t.Da,n&&e&&Ie(i,n,e),Ie(i,"VER",t.ra),Jr(t,i),i}function N_(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Se(new Yr({ob:!0})):new Se(t.va),e.Oa(t.J),e}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function k_(){}N=k_.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function oa(){if(as&&!(10<=Number(eb)))throw Error("Environmental error: no available transport.")}oa.prototype.g=function(t,e){return new Et(t,e)};function Et(t,e){ze.call(this),this.g=new T_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!br(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!br(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Cs(this)}je(Et,ze);Et.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;at(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=P_(t,null,t.Y),lc(t)};Et.prototype.close=function(){fh(this.g)};Et.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ih(t),t=n);e.j.push(new Nb(e.fb++,t)),e.H==3&&lc(e)};Et.prototype.N=function(){this.g.h=null,delete this.j,fh(this.g),delete this.g,Et.$.N.call(this)};function x_(t){ch.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}je(x_,ch);function D_(){lh.call(this),this.status=1}je(D_,lh);function Cs(t){this.g=t}je(Cs,k_);Cs.prototype.Ba=function(){Ke(this.g,"a")};Cs.prototype.Aa=function(t){Ke(this.g,new x_(t))};Cs.prototype.za=function(t){Ke(this.g,new D_)};Cs.prototype.ya=function(){Ke(this.g,"b")};function jb(){this.blockSize=-1}function Ft(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}je(Ft,jb);Ft.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Qc(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^n&(s^r))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(n^s))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^r)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~r))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}Ft.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=n;)Qc(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(i[s++]=t.charCodeAt(r++),s==this.blockSize){Qc(this,i),s=0;break}}else for(;r<e;)if(i[s++]=t[r++],s==this.blockSize){Qc(this,i),s=0;break}}this.h=s,this.i+=e};Ft.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function ue(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var r=t[s]|0;i&&r==e||(n[s]=r,i=!1)}this.g=n}var Bb={};function gh(t){return-128<=t&&128>t?Xw(t,function(e){return new ue([e|0],0>e?-1:0)}):new ue([t|0],0>t?-1:0)}function Yt(t){if(isNaN(t)||!isFinite(t))return Qi;if(0>t)return $e(Yt(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=jl;return new ue(e,0)}function O_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return $e(O_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Yt(Math.pow(e,8)),i=Qi,s=0;s<t.length;s+=8){var r=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+r),e);8>r?(r=Yt(Math.pow(e,r)),i=i.R(r).add(Yt(o))):(i=i.R(n),i=i.add(Yt(o)))}return i}var jl=4294967296,Qi=gh(0),Bl=gh(1),Rf=gh(16777216);N=ue.prototype;N.ea=function(){if(It(this))return-$e(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:jl+i)*e,e*=jl}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(pn(this))return"0";if(It(this))return"-"+$e(this).toString(t);for(var e=Yt(Math.pow(t,6)),n=this,i="";;){var s=ca(n,e).g;n=aa(n,s.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,pn(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function pn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function It(t){return t.h==-1}N.X=function(t){return t=aa(this,t),It(t)?-1:pn(t)?0:1};function $e(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new ue(n,~t.h).add(Bl)}N.abs=function(){return It(this)?$e(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(t.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new ue(n,n[n.length-1]&-2147483648?-1:0)};function aa(t,e){return t.add($e(e))}N.R=function(t){if(pn(this)||pn(t))return Qi;if(It(this))return It(t)?$e(this).R($e(t)):$e($e(this).R(t));if(It(t))return $e(this.R($e(t)));if(0>this.X(Rf)&&0>t.X(Rf))return Yt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*i+2*s]+=o*c,bo(n,2*i+2*s),n[2*i+2*s+1]+=r*c,bo(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,bo(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,bo(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new ue(n,0)};function bo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function qs(t,e){this.g=t,this.h=e}function ca(t,e){if(pn(e))throw Error("division by zero");if(pn(t))return new qs(Qi,Qi);if(It(t))return e=ca($e(t),e),new qs($e(e.g),$e(e.h));if(It(e))return e=ca(t,$e(e)),new qs($e(e.g),e.h);if(30<t.g.length){if(It(t)||It(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Bl,i=e;0>=i.X(t);)n=Sf(n),i=Sf(i);var s=Vi(n,1),r=Vi(i,1);for(i=Vi(i,2),n=Vi(n,2);!pn(i);){var o=r.add(i);0>=o.X(t)&&(s=s.add(n),r=o),i=Vi(i,1),n=Vi(n,1)}return e=aa(t,s.R(e)),new qs(s,e)}for(s=Qi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=Yt(n),o=r.R(e);It(o)||0<o.X(t);)n-=i,r=Yt(n),o=r.R(e);pn(r)&&(r=Bl),s=s.add(r),t=aa(t,o)}return new qs(s,t)}N.gb=function(t){return ca(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new ue(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new ue(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new ue(n,this.h^t.h)};function Sf(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new ue(n,t.h)}function Vi(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],r=0;r<i;r++)s[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new ue(s,t.h)}oa.prototype.createWebChannel=oa.prototype.g;Et.prototype.send=Et.prototype.u;Et.prototype.open=Et.prototype.m;Et.prototype.close=Et.prototype.close;nc.NO_ERROR=0;nc.TIMEOUT=8;nc.HTTP_ERROR=6;Jg.COMPLETE="complete";Zg.EventType=Kr;Kr.OPEN="a";Kr.CLOSE="b";Kr.ERROR="c";Kr.MESSAGE="d";ze.prototype.listen=ze.prototype.O;Se.prototype.listenOnce=Se.prototype.P;Se.prototype.getLastError=Se.prototype.Sa;Se.prototype.getLastErrorCode=Se.prototype.Ia;Se.prototype.getStatus=Se.prototype.da;Se.prototype.getResponseJson=Se.prototype.Wa;Se.prototype.getResponseText=Se.prototype.ja;Se.prototype.send=Se.prototype.ha;Se.prototype.setWithCredentials=Se.prototype.Oa;Ft.prototype.digest=Ft.prototype.l;Ft.prototype.reset=Ft.prototype.reset;Ft.prototype.update=Ft.prototype.j;ue.prototype.add=ue.prototype.add;ue.prototype.multiply=ue.prototype.R;ue.prototype.modulo=ue.prototype.gb;ue.prototype.compare=ue.prototype.X;ue.prototype.toNumber=ue.prototype.ea;ue.prototype.toString=ue.prototype.toString;ue.prototype.getBits=ue.prototype.D;ue.fromNumber=Yt;ue.fromString=O_;var $b=function(){return new oa},Wb=function(){return tc()},Yc=nc,Hb=Jg,Kb=Ai,Pf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Gb=Yr,Ao=Zg,Qb=Se,Yb=Ft,Yi=ue;const Nf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rs="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new Br("@firebase/firestore");function Fs(){return vi.logLevel}function O(t,...e){if(vi.logLevel<=J.DEBUG){const n=e.map(_h);vi.debug(`Firestore (${Rs}): ${t}`,...n)}}function Tn(t,...e){if(vi.logLevel<=J.ERROR){const n=e.map(_h);vi.error(`Firestore (${Rs}): ${t}`,...n)}}function cs(t,...e){if(vi.logLevel<=J.WARN){const n=e.map(_h);vi.warn(`Firestore (${Rs}): ${t}`,...n)}}function _h(t){if(typeof t=="string")return t;try{/**
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
 */function B(t="Unexpected state"){const e=`FIRESTORE (${Rs}) INTERNAL ASSERTION FAILED: `+t;throw Tn(e),new Error(e)}function we(t,e){t||B()}function Q(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Xb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class Jb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Zb{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let r=new _n;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new _n,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new _n)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(we(typeof i.accessToken=="string"),new L_(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new Ye(e)}}class eA{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class tA{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new eA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const i=r=>{r.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string"),this.R=n.token,new nA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function sA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=sA(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function oe(t,e){return t<e?-1:t>e?1:0}function ls(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new xe(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new xe(0,0))}static max(){return new W(new xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n,i){n===void 0?n=0:n>e.length&&B(),i===void 0?i=e.length-n:i>e.length-n&&B(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return xr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xr?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends xr{construct(e,n,i){return new Ae(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new M(I.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const rA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends xr{construct(e,n,i){return new He(e,n,i)}static isValidIdentifier(e){return rA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new He(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new M(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new M(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new M(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(Ae.fromString(e))}static fromName(e){return new z(Ae.fromString(e).popFirst(5))}static empty(){return new z(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new Ae(e.slice()))}}function oA(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=W.fromTimestamp(i===1e9?new xe(n+1,0):new xe(n,i));return new jn(s,z.empty(),e)}function aA(t){return new jn(t.readTime,t.key,-1)}class jn{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new jn(W.min(),z.empty(),-1)}static max(){return new jn(W.max(),z.empty(),-1)}}function cA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=z.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
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
 */const lA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==lA)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,i)=>{n(e)})}static reject(e){return new w((n,i)=>{i(e)})}static waitFor(e){return new w((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},c=>i(c))}),o=!0,r===s&&n()})}static or(e){let n=w.resolve(!1);for(const i of e)n=n.next(s=>s?w.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new w((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,n){return new w((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function eo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class vh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.se(i),this.oe=i=>n.writeSequenceNumber(i))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}vh._e=-1;function uc(t){return t==null}function la(t){return t===0&&1/t==-1/0}function hA(t){return typeof t=="number"&&Number.isInteger(t)&&!la(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ss(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function M_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let De=class $l{constructor(e,n){this.comparator=e,this.root=n||qn.EMPTY}insert(e,n){return new $l(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qn.BLACK,null,null))}remove(e){return new $l(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qn.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Co(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Co(this.root,e,this.comparator,!1)}getReverseIterator(){return new Co(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Co(this.root,e,this.comparator,!0)}},Co=class{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},qn=class hn{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??hn.RED,this.left=s??hn.EMPTY,this.right=r??hn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new hn(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return hn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return hn.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,hn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,hn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}};qn.EMPTY=null,qn.RED=!0,qn.BLACK=!1;qn.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(e,n,i,s,r){return this}insert(e,n,i){return new qn(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xf(this.data.getIterator())}getIteratorFrom(e){return new xf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class xf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Nt{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new Ge(He.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ls(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class q_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new q_("Invalid base64 string: "+r):r}}(e);return new rt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const dA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bn(t){if(we(!!t),typeof t=="string"){let e=0;const n=dA.exec(t);if(we(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yi(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
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
 */function yh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Eh(t){const e=t.mapValue.fields.__previous_value__;return yh(e)?Eh(e):e}function Dr(t){const e=Bn(t.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,n,i,s,r,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Or{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Or("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Or&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ro={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ei(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?yh(t)?4:pA(t)?9007199254740991:10:B()}function on(t,e){if(t===e)return!0;const n=Ei(t);if(n!==Ei(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Dr(t).isEqual(Dr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=Bn(s.timestampValue),a=Bn(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return yi(s.bytesValue).isEqual(yi(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return ke(s.geoPointValue.latitude)===ke(r.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return ke(s.integerValue)===ke(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=ke(s.doubleValue),a=ke(r.doubleValue);return o===a?la(o)===la(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ls(t.arrayValue.values||[],e.arrayValue.values||[],on);case 10:return function(s,r){const o=s.mapValue.fields||{},a=r.mapValue.fields||{};if(kf(o)!==kf(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!on(o[c],a[c])))return!1;return!0}(t,e);default:return B()}}function Lr(t,e){return(t.values||[]).find(n=>on(n,e))!==void 0}function us(t,e){if(t===e)return 0;const n=Ei(t),i=Ei(e);if(n!==i)return oe(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=ke(r.integerValue||r.doubleValue),c=ke(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Df(t.timestampValue,e.timestampValue);case 4:return Df(Dr(t),Dr(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(r,o){const a=yi(r),c=yi(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=oe(a[l],c[l]);if(u!==0)return u}return oe(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=oe(ke(r.latitude),ke(o.latitude));return a!==0?a:oe(ke(r.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=us(a[l],c[l]);if(u)return u}return oe(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===Ro.mapValue&&o===Ro.mapValue)return 0;if(r===Ro.mapValue)return 1;if(o===Ro.mapValue)return-1;const a=r.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=oe(c[h],u[h]);if(d!==0)return d;const p=us(a[c[h]],l[u[h]]);if(p!==0)return p}return oe(c.length,u.length)}(t.mapValue,e.mapValue);default:throw B()}}function Df(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Bn(t),i=Bn(e),s=oe(n.seconds,i.seconds);return s!==0?s:oe(n.nanos,i.nanos)}function hs(t){return Wl(t)}function Wl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=Bn(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return yi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return z.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",s=!0;for(const r of n.values||[])s?s=!1:i+=",",i+=Wl(r);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${Wl(n.fields[o])}`;return s+"}"}(t.mapValue):B()}function Hl(t){return!!t&&"integerValue"in t}function Th(t){return!!t&&"arrayValue"in t}function Of(t){return!!t&&"nullValue"in t}function Lf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uo(t){return!!t&&"mapValue"in t}function sr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ss(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=sr(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=sr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function pA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Uo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=sr(n)}setAll(e){let n=He.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=sr(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());Uo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Uo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Ss(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new wt(sr(this.value))}}function F_(t){const e=[];return Ss(t.fields,(n,i)=>{const s=new He([n]);if(Uo(i)){const r=F_(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new Nt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Xe(e,0,W.min(),W.min(),W.min(),wt.empty(),0)}static newFoundDocument(e,n,i,s){return new Xe(e,1,n,W.min(),i,s,0)}static newNoDocument(e,n){return new Xe(e,2,n,W.min(),W.min(),wt.empty(),0)}static newUnknownDocument(e,n){return new Xe(e,3,n,W.min(),W.min(),wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ua{constructor(e,n){this.position=e,this.inclusive=n}}function Vf(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=z.comparator(z.fromName(o.referenceValue),n.key):i=us(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Mf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!on(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ha{constructor(e,n="asc"){this.field=e,this.dir=n}}function mA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class U_{}class Le extends U_{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new _A(e,n,i):n==="array-contains"?new EA(e,i):n==="in"?new TA(e,i):n==="not-in"?new IA(e,i):n==="array-contains-any"?new wA(e,i):new Le(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new vA(e,i):new yA(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(us(n,this.value)):n!==null&&Ei(this.value)===Ei(n)&&this.matchesComparison(us(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class an extends U_{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new an(e,n)}matches(e){return z_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function z_(t){return t.op==="and"}function j_(t){return gA(t)&&z_(t)}function gA(t){for(const e of t.filters)if(e instanceof an)return!1;return!0}function Kl(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+hs(t.value);if(j_(t))return t.filters.map(e=>Kl(e)).join(",");{const e=t.filters.map(n=>Kl(n)).join(",");return`${t.op}(${e})`}}function B_(t,e){return t instanceof Le?function(i,s){return s instanceof Le&&i.op===s.op&&i.field.isEqual(s.field)&&on(i.value,s.value)}(t,e):t instanceof an?function(i,s){return s instanceof an&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,o,a)=>r&&B_(o,s.filters[a]),!0):!1}(t,e):void B()}function $_(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${hs(n.value)}`}(t):t instanceof an?function(n){return n.op.toString()+" {"+n.getFilters().map($_).join(" ,")+"}"}(t):"Filter"}class _A extends Le{constructor(e,n,i){super(e,n,i),this.key=z.fromName(i.referenceValue)}matches(e){const n=z.comparator(e.key,this.key);return this.matchesComparison(n)}}class vA extends Le{constructor(e,n){super(e,"in",n),this.keys=W_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class yA extends Le{constructor(e,n){super(e,"not-in",n),this.keys=W_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function W_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>z.fromName(i.referenceValue))}class EA extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Th(n)&&Lr(n.arrayValue,this.value)}}class TA extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Lr(this.value.arrayValue,n)}}class IA extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(Lr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Lr(this.value.arrayValue,n)}}class wA extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Th(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Lr(this.value.arrayValue,i))}}/**
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
 */class bA{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.ce=null}}function qf(t,e=null,n=[],i=[],s=null,r=null,o=null){return new bA(t,e,n,i,s,r,o)}function Ih(t){const e=Q(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Kl(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),uc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>hs(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>hs(i)).join(",")),e.ce=n}return e.ce}function wh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!mA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!B_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mf(t.startAt,e.startAt)&&Mf(t.endAt,e.endAt)}function Gl(t){return z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function AA(t,e,n,i,s,r,o,a){return new hc(t,e,n,i,s,r,o,a)}function dc(t){return new hc(t)}function Ff(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function CA(t){return t.collectionGroup!==null}function rr(t){const e=Q(t);if(e.le===null){e.le=[];const n=new Set;for(const r of e.explicitOrderBy)e.le.push(r),n.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ge(He.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||e.le.push(new ha(r,i))}),n.has(He.keyField().canonicalString())||e.le.push(new ha(He.keyField(),i))}return e.le}function Zt(t){const e=Q(t);return e.he||(e.he=RA(e,rr(t))),e.he}function RA(t,e){if(t.limitType==="F")return qf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const r=s.dir==="desc"?"asc":"desc";return new ha(s.field,r)});const n=t.endAt?new ua(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new ua(t.startAt.position,t.startAt.inclusive):null;return qf(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function Ql(t,e,n){return new hc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fc(t,e){return wh(Zt(t),Zt(e))&&t.limitType===e.limitType}function H_(t){return`${Ih(Zt(t))}|lt:${t.limitType}`}function qi(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(s=>$_(s)).join(", ")}]`),uc(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(s=>hs(s)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(s=>hs(s)).join(",")),`Target(${i})`}(Zt(t))}; limitType=${t.limitType})`}function pc(t,e){return e.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):z.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(t,e)&&function(i,s){for(const r of rr(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(i,s){return!(i.startAt&&!function(o,a,c){const l=Vf(o,a,c);return o.inclusive?l<=0:l<0}(i.startAt,rr(i),s)||i.endAt&&!function(o,a,c){const l=Vf(o,a,c);return o.inclusive?l>=0:l>0}(i.endAt,rr(i),s))}(t,e)}function SA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function K_(t){return(e,n)=>{let i=!1;for(const s of rr(t)){const r=PA(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function PA(t,e,n){const i=t.field.isKeyField()?z.comparator(e.key,n.key):function(r,o,a){const c=o.data.field(r),l=a.data.field(r);return c!==null&&l!==null?us(c,l):B()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return B()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ss(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return M_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=new De(z.comparator);function In(){return NA}const G_=new De(z.comparator);function Qs(...t){let e=G_;for(const n of t)e=e.insert(n.key,n);return e}function Q_(t){let e=G_;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function oi(){return or()}function Y_(){return or()}function or(){return new Ps(t=>t.toString(),(t,e)=>t.isEqual(e))}const kA=new De(z.comparator),xA=new Ge(z.comparator);function Z(...t){let e=xA;for(const n of t)e=e.add(n);return e}const DA=new Ge(oe);function OA(){return DA}/**
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
 */function X_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:la(e)?"-0":e}}function J_(t){return{integerValue:""+t}}function LA(t,e){return hA(e)?J_(e):X_(t,e)}/**
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
 */class mc{constructor(){this._=void 0}}function VA(t,e,n){return t instanceof da?function(s,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&yh(r)&&(r=Eh(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof Vr?ev(t,e):t instanceof Mr?tv(t,e):function(s,r){const o=Z_(s,r),a=Uf(o)+Uf(s.Ie);return Hl(o)&&Hl(s.Ie)?J_(a):X_(s.serializer,a)}(t,e)}function MA(t,e,n){return t instanceof Vr?ev(t,e):t instanceof Mr?tv(t,e):n}function Z_(t,e){return t instanceof fa?function(i){return Hl(i)||function(r){return!!r&&"doubleValue"in r}(i)}(e)?e:{integerValue:0}:null}class da extends mc{}class Vr extends mc{constructor(e){super(),this.elements=e}}function ev(t,e){const n=nv(e);for(const i of t.elements)n.some(s=>on(s,i))||n.push(i);return{arrayValue:{values:n}}}class Mr extends mc{constructor(e){super(),this.elements=e}}function tv(t,e){let n=nv(e);for(const i of t.elements)n=n.filter(s=>!on(s,i));return{arrayValue:{values:n}}}class fa extends mc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Uf(t){return ke(t.integerValue||t.doubleValue)}function nv(t){return Th(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function qA(t,e){return t.field.isEqual(e.field)&&function(i,s){return i instanceof Vr&&s instanceof Vr||i instanceof Mr&&s instanceof Mr?ls(i.elements,s.elements,on):i instanceof fa&&s instanceof fa?on(i.Ie,s.Ie):i instanceof da&&s instanceof da}(t.transform,e.transform)}class FA{constructor(e,n){this.version=e,this.transformResults=n}}class vn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vn}static exists(e){return new vn(void 0,e)}static updateTime(e){return new vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class gc{}function iv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new rv(t.key,vn.none()):new to(t.key,t.data,vn.none());{const n=t.data,i=wt.empty();let s=new Ge(He.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Ci(t.key,i,new Nt(s.toArray()),vn.none())}}function UA(t,e,n){t instanceof to?function(s,r,o){const a=s.value.clone(),c=jf(s.fieldTransforms,r,o.transformResults);a.setAll(c),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ci?function(s,r,o){if(!zo(s.precondition,r))return void r.convertToUnknownDocument(o.version);const a=jf(s.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(sv(s)),c.setAll(a),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ar(t,e,n,i){return t instanceof to?function(r,o,a,c){if(!zo(r.precondition,o))return a;const l=r.value.clone(),u=Bf(r.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,i):t instanceof Ci?function(r,o,a,c){if(!zo(r.precondition,o))return a;const l=Bf(r.fieldTransforms,c,o),u=o.data;return u.setAll(sv(r)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(t,e,n,i):function(r,o,a){return zo(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function zA(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=Z_(i.transform,s||null);r!=null&&(n===null&&(n=wt.empty()),n.set(i.field,r))}return n||null}function zf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&ls(i,s,(r,o)=>qA(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class to extends gc{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ci extends gc{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function sv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function jf(t,e,n){const i=new Map;we(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,MA(o,a,n[s]))}return i}function Bf(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,VA(r,o,e))}return i}class rv extends gc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jA extends gc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&UA(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=ar(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=ar(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=Y_();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const c=iv(o,a);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(W.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&ls(this.mutations,e.mutations,(n,i)=>zf(n,i))&&ls(this.baseMutations,e.baseMutations,(n,i)=>zf(n,i))}}class bh{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){we(e.mutations.length===i.length);let s=function(){return kA}();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new bh(e,n,i,s)}}/**
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
 */class $A{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class WA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne,te;function HA(t){switch(t){default:return B();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function ov(t){if(t===void 0)return Tn("GRPC error has no .code"),I.UNKNOWN;switch(t){case Ne.OK:return I.OK;case Ne.CANCELLED:return I.CANCELLED;case Ne.UNKNOWN:return I.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return I.INTERNAL;case Ne.UNAVAILABLE:return I.UNAVAILABLE;case Ne.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Ne.NOT_FOUND:return I.NOT_FOUND;case Ne.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Ne.ABORTED:return I.ABORTED;case Ne.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Ne.DATA_LOSS:return I.DATA_LOSS;default:return B()}}(te=Ne||(Ne={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function KA(){return new TextEncoder}/**
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
 */const GA=new Yi([4294967295,4294967295],0);function $f(t){const e=KA().encode(t),n=new Yb;return n.update(e),new Uint8Array(n.digest())}function Wf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Yi([n,i],0),new Yi([s,r],0)]}class Ah{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new Ys(`Invalid padding: ${n}`);if(i<0)throw new Ys(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ys(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new Ys(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Yi.fromNumber(this.Te)}de(e,n,i){let s=e.add(n.multiply(Yi.fromNumber(i)));return s.compare(GA)===1&&(s=new Yi([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=$f(e),[i,s]=Wf(n);for(let r=0;r<this.hashCount;r++){const o=this.de(i,s,r);if(!this.Ae(o))return!1}return!0}static create(e,n,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Ah(r,s,n);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=$f(e),[i,s]=Wf(n);for(let r=0;r<this.hashCount;r++){const o=this.de(i,s,r);this.Re(o)}}Re(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class Ys extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,no.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new _c(W.min(),s,new De(oe),In(),Z())}}class no{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new no(i,n,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n,i,s){this.Ve=e,this.removedTargetIds=n,this.key=i,this.me=s}}class av{constructor(e,n){this.targetId=e,this.fe=n}}class cv{constructor(e,n,i=rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class Hf{constructor(){this.ge=0,this.pe=Gf(),this.ye=rt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=Z(),n=Z(),i=Z();return this.pe.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:B()}}),new no(this.ye,this.we,e,n,i)}Fe(){this.Se=!1,this.pe=Gf()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class QA{constructor(e){this.Le=e,this.ke=new Map,this.qe=In(),this.Qe=Kf(),this.Ke=new De(oe)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const i=this.ze(n);switch(e.state){case 0:this.je(n)&&i.Ce(e.resumeToken);break;case 1:i.Ne(),i.be||i.Fe(),i.Ce(e.resumeToken);break;case 2:i.Ne(),i.be||this.removeTarget(n);break;case 3:this.je(n)&&(i.Be(),i.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),i.Ce(e.resumeToken));break;default:B()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((i,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,i=e.fe.count,s=this.Ye(n);if(s){const r=s.target;if(Gl(r))if(i===0){const o=new z(r.path);this.We(n,o,Xe.newNoDocument(o,W.min()))}else we(i===1);else{const o=this.Ze(n);if(o!==i){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=n;let o,a;try{o=yi(i).toUint8Array()}catch(c){if(c instanceof q_)return cs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Ah(o,s,r)}catch(c){return cs(c instanceof Ys?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,i){return n.fe.count===i-this.rt(e,n.targetId)?0:2}rt(e,n){const i=this.Le.getRemoteKeysForTarget(n);let s=0;return i.forEach(r=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(a)||(this.We(n,r,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((r,o)=>{const a=this.Ye(o);if(a){if(r.current&&Gl(a.target)){const c=new z(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,Xe.newNoDocument(c,e))}r.De&&(n.set(o,r.ve()),r.Fe())}});let i=Z();this.Qe.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(r))}),this.qe.forEach((r,o)=>o.setReadTime(e));const s=new _c(e,n,this.Ke,this.qe,i);return this.qe=In(),this.Qe=Kf(),this.Ke=new De(oe),s}Ue(e,n){if(!this.je(e))return;const i=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,i),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,i){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),i&&(this.qe=this.qe.insert(n,i))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Hf,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Ge(oe),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Hf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Kf(){return new De(z.comparator)}function Gf(){return new De(z.comparator)}const YA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),XA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),JA=(()=>({and:"AND",or:"OR"}))();class ZA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yl(t,e){return t.useProto3Json||uc(e)?e:{value:e}}function pa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function eC(t,e){return pa(t,e.toTimestamp())}function en(t){return we(!!t),W.fromTimestamp(function(n){const i=Bn(n);return new xe(i.seconds,i.nanos)}(t))}function Ch(t,e){return function(i){return new Ae(["projects",i.projectId,"databases",i.database])}(t).child("documents").child(e).canonicalString()}function uv(t){const e=Ae.fromString(t);return we(pv(e)),e}function Xl(t,e){return Ch(t.databaseId,e.path)}function Xc(t,e){const n=uv(e);if(n.get(1)!==t.databaseId.projectId)throw new M(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new z(hv(n))}function Jl(t,e){return Ch(t.databaseId,e)}function tC(t){const e=uv(t);return e.length===4?Ae.emptyPath():hv(e)}function Zl(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function hv(t){return we(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Qf(t,e,n){return{name:Xl(t,e),fields:n.value.mapValue.fields}}function nC(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:B()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,u){return l.useProto3Json?(we(u===void 0||typeof u=="string"),rt.fromBase64String(u||"")):(we(u===void 0||u instanceof Uint8Array),rt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?I.UNKNOWN:ov(l.code);return new M(u,l.message||"")}(o);n=new cv(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Xc(t,i.document.name),r=en(i.document.updateTime),o=i.document.createTime?en(i.document.createTime):W.min(),a=new wt({mapValue:{fields:i.document.fields}}),c=Xe.newFoundDocument(s,r,o,a),l=i.targetIds||[],u=i.removedTargetIds||[];n=new jo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Xc(t,i.document),r=i.readTime?en(i.readTime):W.min(),o=Xe.newNoDocument(s,r),a=i.removedTargetIds||[];n=new jo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Xc(t,i.document),r=i.removedTargetIds||[];n=new jo([],r,s,null)}else{if(!("filter"in e))return B();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new WA(s,r),a=i.targetId;n=new av(a,o)}}return n}function iC(t,e){let n;if(e instanceof to)n={update:Qf(t,e.key,e.value)};else if(e instanceof rv)n={delete:Xl(t,e.key)};else if(e instanceof Ci)n={update:Qf(t,e.key,e.data),updateMask:dC(e.fieldMask)};else{if(!(e instanceof jA))return B();n={verify:Xl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,o){const a=o.transform;if(a instanceof da)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Vr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Mr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof fa)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw B()}(0,i))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:eC(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:B()}(t,e.precondition)),n}function sC(t,e){return t&&t.length>0?(we(e!==void 0),t.map(n=>function(s,r){let o=s.updateTime?en(s.updateTime):en(r);return o.isEqual(W.min())&&(o=en(r)),new FA(o,s.transformResults||[])}(n,e))):[]}function rC(t,e){return{documents:[Jl(t,e.path)]}}function oC(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=Jl(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Jl(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(c){if(c.length!==0)return fv(an.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Fi(h.field),direction:lC(h.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=Yl(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function aC(t){let e=tC(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){we(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(h){const d=dv(h);return d instanceof an&&j_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new ha(Ui(g.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,uc(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,p=h.values||[];return new ua(p,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,p=h.values||[];return new ua(p,d)}(n.endAt)),AA(e,s,o,r,a,"F",c,l)}function cC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function dv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=Ui(n.unaryFilter.field);return Le.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Ui(n.unaryFilter.field);return Le.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ui(n.unaryFilter.field);return Le.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ui(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(t):t.fieldFilter!==void 0?function(n){return Le.create(Ui(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return an.create(n.compositeFilter.filters.map(i=>dv(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return B()}}(n.compositeFilter.op))}(t):B()}function lC(t){return YA[t]}function uC(t){return XA[t]}function hC(t){return JA[t]}function Fi(t){return{fieldPath:t.canonicalString()}}function Ui(t){return He.fromServerFormat(t.fieldPath)}function fv(t){return t instanceof Le?function(n){if(n.op==="=="){if(Lf(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NAN"}};if(Of(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Lf(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NOT_NAN"}};if(Of(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fi(n.field),op:uC(n.op),value:n.value}}}(t):t instanceof an?function(n){const i=n.getFilters().map(s=>fv(s));return i.length===1?i[0]:{compositeFilter:{op:hC(n.op),filters:i}}}(t):B()}function dC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function pv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,n,i,s,r=W.min(),o=W.min(),a=rt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.ut=e}}function pC(t){const e=aC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ql(e,e.limit,"L"):e}/**
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
 */class mC{constructor(){this.on=new gC}addToCollectionParentIndex(e,n){return this.on.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}deleteAllFieldIndexes(e){return w.resolve()}createTargetIndexes(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(jn.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(jn.min())}updateCollectionGroup(e,n,i){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class gC{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new Ge(Ae.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Ge(Ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new ds(0)}static Nn(){return new ds(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(){this.changes=new Ps(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Xe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?w.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class vC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&ar(i.mutation,s,Nt.empty(),xe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,Z()).next(()=>i))}getLocalViewOfDocuments(e,n,i=Z()){const s=oi();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=Qs();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=oi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,Z()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,s){let r=In();const o=or(),a=function(){return or()}();return n.forEach((c,l)=>{const u=i.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Ci)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),ar(u.mutation,l,u.mutation.getFieldMask(),xe.now())):o.set(l.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new vC(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=or();let s=new De((o,a)=>o-a),r=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=i.get(c)||Nt.empty();u=a.applyToLocalView(l,u),i.set(c,u);const h=(s.get(a.batchId)||Z()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Y_();u.forEach(d=>{if(!r.has(d)){const p=iv(n.get(d),i.get(d));p!==null&&h.set(d,p),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return w.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i,s){return function(o){return z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):CA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,s):this.getDocumentsMatchingCollectionQuery(e,n,i,s)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):w.resolve(oi());let a=-1,c=r;return o.next(l=>w.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?w.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,Z())).next(u=>({batchId:a,changes:Q_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new z(n)).next(i=>{let s=Qs();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i,s){const r=n.collectionGroup;let o=Qs();return this.indexManager.getCollectionParents(e,r).next(a=>w.forEach(a,c=>{const l=function(h,d){return new hc(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,l,i,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,r,s))).next(o=>{r.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,Xe.newInvalidDocument(u)))});let a=Qs();return o.forEach((c,l)=>{const u=r.get(c);u!==void 0&&ar(u.mutation,l,Nt.empty(),xe.now()),pc(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class EC{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return w.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:en(s.createTime)}}(n)),w.resolve()}getNamedQuery(e,n){return w.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:pC(s.bundledQuery),readTime:en(s.readTime)}}(n)),w.resolve()}}/**
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
 */class TC{constructor(){this.overlays=new De(z.comparator),this.lr=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const i=oi();return w.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.lt(e,n,r)}),w.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.lr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.lr.delete(i)),w.resolve()}getOverlaysForCollection(e,n,i){const s=oi(),r=n.length+1,o=new z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return w.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new De((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>i){let u=r.get(l.largestBatchId);u===null&&(u=oi(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=oi(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return w.resolve(a)}lt(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(i.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new $A(n,i));let r=this.lr.get(n);r===void 0&&(r=Z(),this.lr.set(n,r)),this.lr.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(){this.hr=new Ge(qe.Pr),this.Ir=new Ge(qe.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const i=new qe(e,n);this.hr=this.hr.add(i),this.Ir=this.Ir.add(i)}Er(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.dr(new qe(e,n))}Ar(e,n){e.forEach(i=>this.removeReference(i,n))}Rr(e){const n=new z(new Ae([])),i=new qe(n,e),s=new qe(n,e+1),r=[];return this.Ir.forEachInRange([i,s],o=>{this.dr(o),r.push(o.key)}),r}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new z(new Ae([])),i=new qe(n,e),s=new qe(n,e+1);let r=Z();return this.Ir.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new qe(e,0),i=this.hr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class qe{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return z.comparator(e.key,n.key)||oe(e.gr,n.gr)}static Tr(e,n){return oe(e.gr,n.gr)||z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Ge(qe.Pr)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new BA(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new qe(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.Sr(i),r=s<0?0:s;return w.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new qe(n,0),s=new qe(n,Number.POSITIVE_INFINITY),r=[];return this.yr.forEachInRange([i,s],o=>{const a=this.wr(o.gr);r.push(a)}),w.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Ge(oe);return n.forEach(s=>{const r=new qe(s,0),o=new qe(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([r,o],a=>{i=i.add(a.gr)})}),w.resolve(this.br(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;z.isDocumentKey(r)||(r=r.child(""));const o=new qe(new z(r),0);let a=new Ge(oe);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!i.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.gr)),!0)},o),w.resolve(this.br(a))}br(e){const n=[];return e.forEach(i=>{const s=this.wr(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){we(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.yr;return w.forEach(n.mutations,s=>{const r=new qe(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=i})}Fn(e){}containsKey(e,n){const i=new qe(n,0),s=this.yr.firstAfterOrEqual(i);return w.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e){this.Cr=e,this.docs=function(){return new De(z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return w.resolve(i?i.document.mutableCopy():Xe.newInvalidDocument(n))}getEntries(e,n){let i=In();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Xe.newInvalidDocument(s))}),w.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=In();const o=n.path,a=new z(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||cA(aA(u),i)<=0||(s.has(u.key)||pc(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return w.resolve(r)}getAllFromCollectionGroup(e,n,i,s){B()}vr(e,n){return w.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new bC(this)}getSize(e){return w.resolve(this.size)}}class bC extends _C{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(i)}),w.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.persistence=e,this.Fr=new Ps(n=>Ih(n),wh),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Rh,this.targetCount=0,this.Nr=ds.On()}forEachTarget(e,n){return this.Fr.forEach((i,s)=>n(s)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Mr&&(this.Mr=n),w.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new ds(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.kn(n),w.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Fr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),w.waitFor(r).next(()=>s)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const i=this.Fr.get(n)||null;return w.resolve(i)}addMatchingKeys(e,n,i){return this.Or.Er(n,i),w.resolve()}removeMatchingKeys(e,n,i){this.Or.Ar(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),w.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),w.resolve()}getMatchingKeysForTargetId(e,n){const i=this.Or.mr(n);return w.resolve(i)}containsKey(e,n){return w.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n){this.Br={},this.overlays={},this.Lr=new vh(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new AC(this),this.indexManager=new mC,this.remoteDocumentCache=function(s){return new wC(s)}(i=>this.referenceDelegate.Qr(i)),this.serializer=new fC(n),this.Kr=new EC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new TC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Br[e.toKey()];return i||(i=new IC(n,this.referenceDelegate),this.Br[e.toKey()]=i),i}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,i){O("MemoryPersistence","Starting transaction:",e);const s=new RC(this.Lr.next());return this.referenceDelegate.$r(),i(s).next(r=>this.referenceDelegate.Ur(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Wr(e,n){return w.or(Object.values(this.Br).map(i=>()=>i.containsKey(e,n)))}}class RC extends uA{constructor(e){super(),this.currentSequenceNumber=e}}class Sh{constructor(e){this.persistence=e,this.Gr=new Rh,this.zr=null}static jr(e){return new Sh(e)}get Hr(){if(this.zr)return this.zr;throw B()}addReference(e,n,i){return this.Gr.addReference(i,n),this.Hr.delete(i.toString()),w.resolve()}removeReference(e,n,i){return this.Gr.removeReference(i,n),this.Hr.add(i.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),w.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.Hr.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Hr,i=>{const s=z.fromPath(i);return this.Jr(e,s).next(r=>{r||n.removeEntry(s,W.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(i=>{i?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return w.or([()=>w.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.ki=i,this.qi=s}static Qi(e,n){let i=Z(),s=Z();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Ph(e,n.fromCache,i,s)}}/**
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
 */class SC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class PC{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,i,s){const r={result:null};return this.zi(e,n).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.ji(e,n,s,i).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new SC;return this.Hi(e,n,o).next(a=>{if(r.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>r.result)}Ji(e,n,i,s){return i.documentReadCount<this.Ui?(Fs()<=J.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",qi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),w.resolve()):(Fs()<=J.DEBUG&&O("QueryEngine","Query:",qi(n),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Wi*s?(Fs()<=J.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",qi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zt(n))):w.resolve())}zi(e,n){if(Ff(n))return w.resolve(null);let i=Zt(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ql(n,null,"F"),i=Zt(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=Z(...r);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,Ql(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,i,s){return Ff(n)||s.isEqual(W.min())?w.resolve(null):this.Gi.getDocuments(e,i).next(r=>{const o=this.Yi(n,r);return this.Zi(n,o,i,s)?w.resolve(null):(Fs()<=J.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),qi(n)),this.Xi(e,o,n,oA(s,-1)).next(a=>a))})}Yi(e,n){let i=new Ge(K_(e));return n.forEach((s,r)=>{pc(e,r)&&(i=i.add(r))}),i}Zi(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Hi(e,n,i){return Fs()<=J.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",qi(n)),this.Gi.getDocumentsMatchingQuery(e,n,jn.min(),i)}Xi(e,n,i,s){return this.Gi.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class NC{constructor(e,n,i,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new De(oe),this.ns=new Ps(r=>Ih(r),wh),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(i)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yC(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function kC(t,e,n,i){return new NC(t,e,n,i)}async function mv(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.os(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let c=Z();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(i,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function xC(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let p=w.resolve();return d.forEach(g=>{p=p.next(()=>u.getEntry(c,g)).next(_=>{const y=l.docVersions.get(g);we(y!==null),_.version.compareTo(y)<0&&(h.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),u.addEntry(_)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(a){let c=Z();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function gv(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function DC(t,e){const n=Q(t),i=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(r,u.addedDocuments,h)));let p=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(rt.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,i)),s=s.insert(h,p),function(_,y,x){return _.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(d,p,u)&&a.push(n.qr.updateTargetData(r,p))});let c=In(),l=Z();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(OC(r,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!i.isEqual(W.min())){const u=n.qr.getLastRemoteSnapshotVersion(r).next(h=>n.qr.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return w.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.ts=s,r))}function OC(t,e,n){let i=Z(),s=Z();return n.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let o=In();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(W.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:s}})}function LC(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function VC(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.qr.getTargetData(i,e).next(r=>r?(s=r,w.resolve(s)):n.qr.allocateTargetId(i).next(o=>(s=new xn(e,o,"TargetPurposeListen",i.currentSequenceNumber),n.qr.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.ts.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(i.targetId,i),n.ns.set(e,i.targetId)),i})}async function eu(t,e,n){const i=Q(t),s=i.ts.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!eo(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.ts=i.ts.remove(e),i.ns.delete(s.target)}function Yf(t,e,n){const i=Q(t);let s=W.min(),r=Z();return i.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=Q(c),d=h.ns.get(u);return d!==void 0?w.resolve(h.ts.get(d)):h.qr.getTargetData(l,u)}(i,o,Zt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>i.es.getDocumentsMatchingQuery(o,e,n?s:W.min(),n?r:Z())).next(a=>(MC(i,SA(e),a),{documents:a,ls:r})))}function MC(t,e,n){let i=t.rs.get(e)||W.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.rs.set(e,i)}class Xf{constructor(){this.activeTargetIds=OA()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qC{constructor(){this.eo=new Xf,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,i){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Xf,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class FC{ro(e){}shutdown(){}}/**
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
 */class Jf{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let So=null;function Jc(){return So===null?So=function(){return 268435456+Math.round(2147483648*Math.random())}():So++,"0x"+So.toString(16)}/**
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
 */const UC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="WebChannelConnection";class jC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.mo=i+"://"+n.host,this.fo=`projects/${s}/databases/${r}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${r}`}get yo(){return!1}wo(n,i,s,r,o){const a=Jc(),c=this.So(n,i);O("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,r,o),this.Do(n,c,l,s).then(u=>(O("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw cs("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Co(n,i,s,r,o,a){return this.wo(n,i,s,r,o)}bo(n,i,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Rs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((r,o)=>n[o]=r),s&&s.headers.forEach((r,o)=>n[o]=r)}So(n,i){const s=UC[n];return`${this.mo}/v1/${i}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,i,s){const r=Jc();return new Promise((o,a)=>{const c=new Qb;c.setWithCredentials(!0),c.listenOnce(Hb.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Yc.NO_ERROR:const u=c.getResponseJson();O(Qe,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Yc.TIMEOUT:O(Qe,`RPC '${e}' ${r} timed out`),a(new M(I.DEADLINE_EXCEEDED,"Request time out"));break;case Yc.HTTP_ERROR:const h=c.getStatus();if(O(Qe,`RPC '${e}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const g=function(y){const x=y.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(x)>=0?x:I.UNKNOWN}(p.status);a(new M(g,p.message))}else a(new M(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new M(I.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{O(Qe,`RPC '${e}' ${r} completed.`)}});const l=JSON.stringify(s);O(Qe,`RPC '${e}' ${r} sending request:`,s),c.send(n,"POST",l,i,15)})}vo(e,n,i){const s=Jc(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=$b(),a=Wb(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new Gb({})),this.bo(c.initMessageHeaders,n,i),c.encodeInitMessageHeaders=!0;const u=r.join("");O(Qe,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,p=!1;const g=new zC({co:y=>{p?O(Qe,`Not sending because RPC '${e}' stream ${s} is closed:`,y):(d||(O(Qe,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),O(Qe,`RPC '${e}' stream ${s} sending:`,y),h.send(y))},lo:()=>h.close()}),_=(y,x,V)=>{y.listen(x,k=>{try{V(k)}catch(A){setTimeout(()=>{throw A},0)}})};return _(h,Ao.EventType.OPEN,()=>{p||O(Qe,`RPC '${e}' stream ${s} transport opened.`)}),_(h,Ao.EventType.CLOSE,()=>{p||(p=!0,O(Qe,`RPC '${e}' stream ${s} transport closed`),g.Ro())}),_(h,Ao.EventType.ERROR,y=>{p||(p=!0,cs(Qe,`RPC '${e}' stream ${s} transport errored:`,y),g.Ro(new M(I.UNAVAILABLE,"The operation could not be completed")))}),_(h,Ao.EventType.MESSAGE,y=>{var x;if(!p){const V=y.data[0];we(!!V);const k=V,A=k.error||((x=k[0])===null||x===void 0?void 0:x.error);if(A){O(Qe,`RPC '${e}' stream ${s} received error:`,A);const H=A.status;let ce=function(Y){const ve=Ne[Y];if(ve!==void 0)return ov(ve)}(H),pe=A.message;ce===void 0&&(ce=I.INTERNAL,pe="Unknown error status: "+H+" with message "+A.message),p=!0,g.Ro(new M(ce,pe)),h.close()}else O(Qe,`RPC '${e}' stream ${s} received:`,V),g.Vo(V)}}),_(a,Kb.STAT_EVENT,y=>{y.stat===Pf.PROXY?O(Qe,`RPC '${e}' stream ${s} detected buffering proxy`):y.stat===Pf.NOPROXY&&O(Qe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.Ao()},0),g}}function Zc(){return typeof document<"u"?document:null}/**
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
 */function vc(t){return new ZA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,n,i=1e3,s=1.5,r=6e4){this.si=e,this.timerId=n,this.Fo=i,this.Mo=s,this.xo=r,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),i=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-i);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,n,i,s,r,o,a,c){this.si=e,this.Ko=i,this.$o=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new _v(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(Tn(n.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Uo===n&&this.s_(i,s)},i=>{e(()=>{const s=new M(I.UNKNOWN,"Fetching auth token failed: "+i.message);return this.o_(s)})})}s_(e,n){const i=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{i(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{i(()=>this.o_(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class BC extends vv{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=nC(this.serializer,e),i=function(r){if(!("targetChange"in r))return W.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?W.min():o.readTime?en(o.readTime):W.min()}(e);return this.listener.a_(n,i)}u_(e){const n={};n.database=Zl(this.serializer),n.addTarget=function(r,o){let a;const c=o.target;if(a=Gl(c)?{documents:rC(r,c)}:{query:oC(r,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=lv(r,o.resumeToken);const l=Yl(r,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(W.min())>0){a.readTime=pa(r,o.snapshotVersion.toTimestamp());const l=Yl(r,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const i=cC(this.serializer,e);i&&(n.labels=i),this.e_(n)}c_(e){const n={};n.database=Zl(this.serializer),n.removeTarget=e,this.e_(n)}}class $C extends vv{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(we(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=sC(e.writeResults,e.commitTime),i=en(e.commitTime);return this.listener.I_(i,n)}return we(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Zl(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>iC(this.serializer,i))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new M(I.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.wo(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(I.UNKNOWN,s.toString())})}Co(e,n,i,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Co(e,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new M(I.UNKNOWN,r.toString())})}terminate(){this.d_=!0}}class HC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Tn(n),this.f_=!1):O("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=r,this.F_.ro(o=>{i.enqueueAndForget(async()=>{Ri(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=Q(c);l.C_.add(4),await io(l),l.M_.set("Unknown"),l.C_.delete(4),await yc(l)}(this))})}),this.M_=new HC(i,s)}}async function yc(t){if(Ri(t))for(const e of t.v_)await e(!0)}async function io(t){for(const e of t.v_)await e(!1)}function yv(t,e){const n=Q(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),xh(n)?kh(n):Ns(n).Ho()&&Nh(n,e))}function Ev(t,e){const n=Q(t),i=Ns(n);n.D_.delete(e),i.Ho()&&Tv(n,e),n.D_.size===0&&(i.Ho()?i.Zo():Ri(n)&&n.M_.set("Unknown"))}function Nh(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ns(t).u_(e)}function Tv(t,e){t.x_.Oe(e),Ns(t).c_(e)}function kh(t){t.x_=new QA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ns(t).start(),t.M_.g_()}function xh(t){return Ri(t)&&!Ns(t).jo()&&t.D_.size>0}function Ri(t){return Q(t).C_.size===0}function Iv(t){t.x_=void 0}async function GC(t){t.D_.forEach((e,n)=>{Nh(t,e)})}async function QC(t,e){Iv(t),xh(t)?(t.M_.w_(e),kh(t)):t.M_.set("Unknown")}async function YC(t,e,n){if(t.M_.set("Online"),e instanceof cv&&e.state===2&&e.cause)try{await async function(s,r){const o=r.cause;for(const a of r.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(t,e)}catch(i){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await ma(t,i)}else if(e instanceof jo?t.x_.$e(e):e instanceof av?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(W.min()))try{const i=await gv(t.localStore);n.compareTo(i)>=0&&await function(r,o){const a=r.x_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=r.D_.get(l);u&&r.D_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=r.D_.get(c);if(!u)return;r.D_.set(c,u.withResumeToken(rt.EMPTY_BYTE_STRING,u.snapshotVersion)),Tv(r,c);const h=new xn(u.target,c,l,u.sequenceNumber);Nh(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(i){O("RemoteStore","Failed to raise snapshot:",i),await ma(t,i)}}async function ma(t,e,n){if(!eo(e))throw e;t.C_.add(1),await io(t),t.M_.set("Offline"),n||(n=()=>gv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await yc(t)})}function wv(t,e){return e().catch(n=>ma(t,n,e))}async function Ec(t){const e=Q(t),n=$n(e);let i=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;XC(e);)try{const s=await LC(e.localStore,i);if(s===null){e.b_.length===0&&n.Zo();break}i=s.batchId,JC(e,s)}catch(s){await ma(e,s)}bv(e)&&Av(e)}function XC(t){return Ri(t)&&t.b_.length<10}function JC(t,e){t.b_.push(e);const n=$n(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function bv(t){return Ri(t)&&!$n(t).jo()&&t.b_.length>0}function Av(t){$n(t).start()}async function ZC(t){$n(t).E_()}async function eR(t){const e=$n(t);for(const n of t.b_)e.P_(n.mutations)}async function tR(t,e,n){const i=t.b_.shift(),s=bh.from(i,e,n);await wv(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ec(t)}async function nR(t,e){e&&$n(t).h_&&await async function(i,s){if(function(o){return HA(o)&&o!==I.ABORTED}(s.code)){const r=i.b_.shift();$n(i).Yo(),await wv(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Ec(i)}}(t,e),bv(t)&&Av(t)}async function Zf(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const i=Ri(n);n.C_.add(3),await io(n),i&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await yc(n)}async function iR(t,e){const n=Q(t);e?(n.C_.delete(2),await yc(n)):e||(n.C_.add(2),await io(n),n.M_.set("Unknown"))}function Ns(t){return t.O_||(t.O_=function(n,i,s){const r=Q(n);return r.A_(),new BC(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{ho:GC.bind(null,t),Io:QC.bind(null,t),a_:YC.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),xh(t)?kh(t):t.M_.set("Unknown")):(await t.O_.stop(),Iv(t))})),t.O_}function $n(t){return t.N_||(t.N_=function(n,i,s){const r=Q(n);return r.A_(),new $C(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{ho:ZC.bind(null,t),Io:nR.bind(null,t),T_:eR.bind(null,t),I_:tR.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Ec(t)):(await t.N_.stop(),t.b_.length>0&&(O("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new _n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new Dh(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Oh(t,e){if(Tn("AsyncQueue",`${e}: ${t}`),eo(t))return new M(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this.comparator=e?(n,i)=>e(n,i)||z.comparator(n.key,i.key):(n,i)=>z.comparator(n.key,i.key),this.keyedMap=Qs(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new Xi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Xi;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(){this.B_=new De(z.comparator)}track(e){const n=e.doc.key,i=this.B_.get(n);i?e.type!==0&&i.type===3?this.B_=this.B_.insert(n,e):e.type===3&&i.type!==1?this.B_=this.B_.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.B_=this.B_.remove(n):e.type===1&&i.type===2?this.B_=this.B_.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):B():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,i)=>{e.push(i)}),e}}class fs{constructor(e,n,i,s,r,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,i,s,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new fs(e,n,Xi.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(){this.k_=void 0,this.listeners=[]}}class rR{constructor(){this.queries=new Ps(e=>H_(e),fc),this.onlineState="Unknown",this.q_=new Set}}async function Lh(t,e){const n=Q(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new sR),s)try{r.k_=await n.onListen(i)}catch(o){const a=Oh(o,`Initialization of query '${qi(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.Q_(n.onlineState),r.k_&&e.K_(r.k_)&&Mh(n)}async function Vh(t,e){const n=Q(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function oR(t,e){const n=Q(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.K_(s)&&(i=!0);o.k_=s}}i&&Mh(n)}function aR(t,e,n){const i=Q(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function Mh(t){t.q_.forEach(e=>{e.next()})}class qh{constructor(e,n,i){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=i||{}}K_(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new fs(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.J_||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=fs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e){this.key=e}}class Rv{constructor(e){this.key=e}}class cR{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=Z(),this.mutatedKeys=Z(),this._a=K_(e),this.aa=new Xi(this._a)}get ua(){return this.ia}ca(e,n){const i=n?n.la:new ep,s=n?n.aa:this.aa;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=pc(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let y=!1;d&&p?d.data.isEqual(p.data)?g!==_&&(i.track({type:3,doc:p}),y=!0):this.ha(d,p)||(i.track({type:2,doc:p}),y=!0,(c&&this._a(p,c)>0||l&&this._a(p,l)<0)&&(a=!0)):!d&&p?(i.track({type:0,doc:p}),y=!0):d&&!p&&(i.track({type:1,doc:d}),y=!0,(c||l)&&(a=!0)),y&&(p?(o=o.add(p),r=_?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{aa:o,la:i,Zi:a,mutatedKeys:r}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const r=e.la.L_();r.sort((l,u)=>function(d,p){const g=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return g(d)-g(p)}(l.type,u.type)||this._a(l.doc,u.doc)),this.Pa(i);const o=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,c=a!==this.sa;return this.sa=a,r.length!==0||c?{snapshot:new fs(this.query,e.aa,s,r,e.mutatedKeys,a===0,c,!1,!!i&&i.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new ep,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=Z(),this.aa.forEach(i=>{this.Ea(i.key)&&(this.oa=this.oa.add(i.key))});const n=[];return e.forEach(i=>{this.oa.has(i)||n.push(new Rv(i))}),this.oa.forEach(i=>{e.has(i)||n.push(new Cv(i))}),n}da(e){this.ia=e.ls,this.oa=Z();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return fs.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class lR{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class uR{constructor(e){this.key=e,this.Ra=!1}}class hR{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Ps(a=>H_(a),fc),this.fa=new Map,this.ga=new Set,this.pa=new De(z.comparator),this.ya=new Map,this.wa=new Rh,this.Sa={},this.ba=new Map,this.Da=ds.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function dR(t,e){const n=IR(t);let i,s;const r=n.ma.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.Aa();else{const o=await VC(n.localStore,Zt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await fR(n,e,i,a==="current",o.resumeToken),n.isPrimaryClient&&yv(n.remoteStore,o)}return s}async function fR(t,e,n,i,s){t.va=(h,d,p)=>async function(_,y,x,V){let k=y.view.ca(x);k.Zi&&(k=await Yf(_.localStore,y.query,!1).then(({documents:ce})=>y.view.ca(ce,k)));const A=V&&V.targetChanges.get(y.targetId),H=y.view.applyChanges(k,_.isPrimaryClient,A);return np(_,y.targetId,H.Ta),H.snapshot}(t,h,d,p);const r=await Yf(t.localStore,e,!0),o=new cR(e,r.ls),a=o.ca(r.documents),c=no.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);np(t,n,l.Ta);const u=new lR(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),l.snapshot}async function pR(t,e){const n=Q(t),i=n.ma.get(e),s=n.fa.get(i.targetId);if(s.length>1)return n.fa.set(i.targetId,s.filter(r=>!fc(r,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await eu(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),Ev(n.remoteStore,i.targetId),tu(n,i.targetId)}).catch(Zr)):(tu(n,i.targetId),await eu(n.localStore,i.targetId,!0))}async function mR(t,e,n){const i=wR(t);try{const s=await function(o,a){const c=Q(o),l=xe.now(),u=a.reduce((p,g)=>p.add(g.key),Z());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let g=In(),_=Z();return c.ss.getEntries(p,u).next(y=>{g=y,g.forEach((x,V)=>{V.isValidDocument()||(_=_.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,g)).next(y=>{h=y;const x=[];for(const V of a){const k=zA(V,h.get(V.key).overlayedDocument);k!=null&&x.push(new Ci(V.key,k,F_(k.value.mapValue),vn.exists(!0)))}return c.mutationQueue.addMutationBatch(p,l,x,a)}).next(y=>{d=y;const x=y.applyToLocalDocumentSet(h,_);return c.documentOverlayCache.saveOverlays(p,y.batchId,x)})}).then(()=>({batchId:d.batchId,changes:Q_(h)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Sa[o.currentUser.toKey()];l||(l=new De(oe)),l=l.insert(a,c),o.Sa[o.currentUser.toKey()]=l}(i,s.batchId,n),await so(i,s.changes),await Ec(i.remoteStore)}catch(s){const r=Oh(s,"Failed to persist write");n.reject(r)}}async function Sv(t,e){const n=Q(t);try{const i=await DC(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.ya.get(r);o&&(we(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?we(o.Ra):s.removedDocuments.size>0&&(we(o.Ra),o.Ra=!1))}),await so(n,i,e)}catch(i){await Zr(i)}}function tp(t,e,n){const i=Q(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.ma.forEach((r,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=Q(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(l=!0)}),l&&Mh(c)}(i.eventManager,e),s.length&&i.Va.a_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function gR(t,e,n){const i=Q(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.ya.get(e),r=s&&s.key;if(r){let o=new De(z.comparator);o=o.insert(r,Xe.newNoDocument(r,W.min()));const a=Z().add(r),c=new _c(W.min(),new Map,new De(oe),o,a);await Sv(i,c),i.pa=i.pa.remove(r),i.ya.delete(e),Fh(i)}else await eu(i.localStore,e,!1).then(()=>tu(i,e,n)).catch(Zr)}async function _R(t,e){const n=Q(t),i=e.batch.batchId;try{const s=await xC(n.localStore,e);Nv(n,i,null),Pv(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await so(n,s)}catch(s){await Zr(s)}}async function vR(t,e,n){const i=Q(t);try{const s=await function(o,a){const c=Q(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(we(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(i.localStore,e);Nv(i,e,n),Pv(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await so(i,s)}catch(s){await Zr(s)}}function Pv(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function Nv(t,e,n){const i=Q(t);let s=i.Sa[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.Sa[i.currentUser.toKey()]=s}}function tu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.fa.get(e))t.ma.delete(i),n&&t.Va.Fa(i,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(i=>{t.wa.containsKey(i)||kv(t,i)})}function kv(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(Ev(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Fh(t))}function np(t,e,n){for(const i of n)i instanceof Cv?(t.wa.addReference(i.key,e),yR(t,i)):i instanceof Rv?(O("SyncEngine","Document no longer in limbo: "+i.key),t.wa.removeReference(i.key,e),t.wa.containsKey(i.key)||kv(t,i.key)):B()}function yR(t,e){const n=e.key,i=n.path.canonicalString();t.pa.get(n)||t.ga.has(i)||(O("SyncEngine","New document in limbo: "+n),t.ga.add(i),Fh(t))}function Fh(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new z(Ae.fromString(e)),i=t.Da.next();t.ya.set(i,new uR(n)),t.pa=t.pa.insert(n,i),yv(t.remoteStore,new xn(Zt(dc(n.path)),i,"TargetPurposeLimboResolution",vh._e))}}async function so(t,e,n){const i=Q(t),s=[],r=[],o=[];i.ma.isEmpty()||(i.ma.forEach((a,c)=>{o.push(i.va(c,e,n).then(l=>{if((l||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Ph.Qi(c.targetId,l);r.push(u)}}))}),await Promise.all(o),i.Va.a_(s),await async function(c,l){const u=Q(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>w.forEach(l,d=>w.forEach(d.ki,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>w.forEach(d.qi,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!eo(h))throw h;O("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const p=u.ts.get(d),g=p.snapshotVersion,_=p.withLastLimboFreeSnapshotVersion(g);u.ts=u.ts.insert(d,_)}}}(i.localStore,r))}async function ER(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const i=await mv(n.localStore,e);n.currentUser=e,function(r,o){r.ba.forEach(a=>{a.forEach(c=>{c.reject(new M(I.CANCELLED,o))})}),r.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await so(n,i._s)}}function TR(t,e){const n=Q(t),i=n.ya.get(e);if(i&&i.Ra)return Z().add(i.key);{let s=Z();const r=n.fa.get(e);if(!r)return s;for(const o of r){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function IR(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=TR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gR.bind(null,e),e.Va.a_=oR.bind(null,e.eventManager),e.Va.Fa=aR.bind(null,e.eventManager),e}function wR(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_R.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vR.bind(null,e),e}class ip{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=vc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return kC(this.persistence,new PC,e.initialUser,this.serializer)}createPersistence(e){return new CC(Sh.jr,this.serializer)}createSharedClientState(e){return new qC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class bR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>tp(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=ER.bind(null,this.syncEngine),await iR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new rR}()}createDatastore(e){const n=vc(e.databaseInfo.databaseId),i=function(r){return new jC(r)}(e.databaseInfo);return function(r,o,a,c){return new WC(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,s,r,o,a){return new KC(i,s,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>tp(this.syncEngine,n,0),function(){return Jf.D()?new Jf:new FC}())}createSyncEngine(e,n){return function(s,r,o,a,c,l,u){const h=new hR(s,r,o,a,c,l);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const i=Q(n);O("RemoteStore","RemoteStore shutting down."),i.C_.add(5),await io(i),i.F_.shutdown(),i.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class Uh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Tn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=Ye.UNAUTHENTICATED,this.clientId=V_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{O("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(O("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Oh(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function el(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await mv(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function sp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await RR(t);O("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>Zf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>Zf(e.remoteStore,r)),t._onlineComponents=e}function CR(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function RR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await el(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!CR(n))throw n;cs("Error using user provided cache. Falling back to memory cache: "+n),await el(t,new ip)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await el(t,new ip);return t._offlineComponents}async function xv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await sp(t,t._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await sp(t,new bR))),t._onlineComponents}function SR(t){return xv(t).then(e=>e.syncEngine)}async function ga(t){const e=await xv(t),n=e.eventManager;return n.onListen=dR.bind(null,e.syncEngine),n.onUnlisten=pR.bind(null,e.syncEngine),n}function PR(t,e,n={}){const i=new _n;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,l){const u=new Uh({next:d=>{o.enqueueAndForget(()=>Vh(r,h));const p=d.docs.has(a);!p&&d.fromCache?l.reject(new M(I.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&c&&c.source==="server"?l.reject(new M(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new qh(dc(a.path),u,{includeMetadataChanges:!0,J_:!0});return Lh(r,h)}(await ga(t),t.asyncQueue,e,n,i)),i.promise}function NR(t,e,n={}){const i=new _n;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,l){const u=new Uh({next:d=>{o.enqueueAndForget(()=>Vh(r,h)),d.fromCache&&c.source==="server"?l.reject(new M(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new qh(a,u,{includeMetadataChanges:!0,J_:!0});return Lh(r,h)}(await ga(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */function Dv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const rp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(t,e,n){if(!n)throw new M(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kR(t,e,n,i){if(e===!0&&i===!0)throw new M(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function op(t){if(!z.isDocumentKey(t))throw new M(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ap(t){if(z.isDocumentKey(t))throw new M(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function zh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":B()}function tn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zh(t);throw new M(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class cp{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new M(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Dv((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new M(I.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new M(I.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new M(I.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Tc{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cp(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Xb;switch(i.type){case"firstParty":return new tA(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new M(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=rp.get(n);i&&(O("ComponentProvider","Removing Datastore"),rp.delete(n),i.terminate())}(this),Promise.resolve()}}function xR(t,e,n,i={}){var s;const r=(t=tn(t,Tc))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&cs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,c;if(typeof i.mockUserToken=="string")a=i.mockUserToken,c=Ye.MOCK_USER;else{a=b0(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new M(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ye(l)}t._authCredentials=new Jb(new L_(a,c))}}/**
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
 */class ro{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ro(this.firestore,e,this._query)}}class dt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}}class Fn extends ro{constructor(e,n,i){super(e,n,dc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new z(e))}withConverter(e){return new Fn(this.firestore,e,this._path)}}function DR(t,e,...n){if(t=Mt(t),Ov("collection","path",e),t instanceof Tc){const i=Ae.fromString(e,...n);return ap(i),new Fn(t,null,i)}{if(!(t instanceof dt||t instanceof Fn))throw new M(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ae.fromString(e,...n));return ap(i),new Fn(t.firestore,null,i)}}function lp(t,e,...n){if(t=Mt(t),arguments.length===1&&(e=V_.newId()),Ov("doc","path",e),t instanceof Tc){const i=Ae.fromString(e,...n);return op(i),new dt(t,null,new z(i))}{if(!(t instanceof dt||t instanceof Fn))throw new M(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ae.fromString(e,...n));return op(i),new dt(t.firestore,t instanceof Fn?t.converter:null,new z(i))}}/**
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
 */class OR{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new _v(this,"async_queue_retry"),this.iu=()=>{const n=Zc();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Zc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Zc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new _n;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!eo(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(i=>{this.eu=i,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw Tn("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.tu=!1,i))));return this.Ja=n,n}enqueueAfterDelay(e,n,i){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=Dh.createAndSchedule(this,e,n,i,r=>this.au(r));return this.Xa.push(s),s}su(){this.eu&&B()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function up(t){return function(n,i){if(typeof n!="object"||n===null)return!1;const s=n;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class ps extends Tc{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=function(){return new OR}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Vv(this),this._firestoreClient.terminate()}}function Lv(t,e){const n=typeof t=="object"?t:Ng(),i=typeof t=="string"?t:e||"(default)",s=xw(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=I0("firestore");r&&xR(s,...r)}return s}function Ic(t){return t._firestoreClient||Vv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Vv(t){var e,n,i;const s=t._freezeSettings(),r=function(a,c,l,u){return new fA(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Dv(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new AR(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class ms{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ms(rt.fromBase64String(e))}catch(n){throw new M(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ms(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class jh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Mv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=/^__.*__$/;class VR{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Ci(e,this.data,this.fieldMask,n,this.fieldTransforms):new to(e,this.data,n,this.fieldTransforms)}}function qv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class Bh{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Pu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Bh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:i,du:!1});return s.Au(e),s}Ru(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:i,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return _a(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(qv(this.Iu)&&LR.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class MR{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||vc(e)}pu(e,n,i,s=!1){return new Bh({Iu:e,methodName:n,gu:i,path:He.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qR(t){const e=t._freezeSettings(),n=vc(t._databaseId);return new MR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function FR(t,e,n,i,s,r={}){const o=t.pu(r.merge||r.mergeFields?2:0,e,n,s);jv("Data must be an object, but it was:",o,i);const a=Uv(i,o);let c,l;if(r.merge)c=new Nt(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=UR(e,h,n);if(!o.contains(d))throw new M(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);jR(u,d)||u.push(d)}c=new Nt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new VR(new wt(a),c,l)}function Fv(t,e){if(zv(t=Mt(t)))return jv("Unsupported field value:",e,t),Uv(t,e);if(t instanceof Mv)return function(i,s){if(!qv(s.Iu))throw s.mu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(i,s){const r=[];let o=0;for(const a of i){let c=Fv(a,s.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}}(t,e)}return function(i,s){if((i=Mt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return LA(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=xe.fromDate(i);return{timestampValue:pa(s.serializer,r)}}if(i instanceof xe){const r=new xe(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:pa(s.serializer,r)}}if(i instanceof wc)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof ms)return{bytesValue:lv(s.serializer,i._byteString)};if(i instanceof dt){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ch(i.firestore._databaseId||s.databaseId,i._key.path)}}throw s.mu(`Unsupported field value: ${zh(i)}`)}(t,e)}function Uv(t,e){const n={};return M_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ss(t,(i,s)=>{const r=Fv(s,e.Eu(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function zv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof wc||t instanceof ms||t instanceof dt||t instanceof Mv)}function jv(t,e,n){if(!zv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const i=zh(n);throw i==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+i)}}function UR(t,e,n){if((e=Mt(e))instanceof jh)return e._internalPath;if(typeof e=="string")return Bv(t,e);throw _a("Field path arguments must be of type string or ",t,!1,void 0,n)}const zR=new RegExp("[~\\*/\\[\\]]");function Bv(t,e,n){if(e.search(zR)>=0)throw _a(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new jh(...e.split("."))._internalPath}catch{throw _a(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _a(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new M(I.INVALID_ARGUMENT,a+t+c)}function jR(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class $v{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Wv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class BR extends $v{data(){return super.data()}}function Wv(t,e){return typeof e=="string"?Bv(t,e):e instanceof jh?e._internalPath:e._delegate._internalPath}/**
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
 */function Hv(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $R{convertValue(e,n="none"){switch(Ei(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw B()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return Ss(e,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new wc(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Eh(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Dr(e));default:return null}}convertTimestamp(e){const n=Bn(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Ae.fromString(e);we(pv(i));const s=new Or(i.get(1),i.get(3)),r=new z(i.popFirst(5));return s.isEqual(n)||Tn(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function WR(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}/**
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
 */class Xs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Kv extends $v{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Wv("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Bo extends Kv{data(e={}){return super.data(e)}}class Gv{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Xs(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Bo(this._firestore,this._userDataWriter,i.key,i,new Xs(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Bo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Xs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const c=new Bo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Xs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:HR(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function HR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}/**
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
 */function Qv(t){t=tn(t,dt);const e=tn(t.firestore,ps);return PR(Ic(e),t._key).then(n=>Xv(e,t,n))}class $h extends $R{constructor(e){super(),this.firestore=e}convertBytes(e){return new ms(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function Yv(t){t=tn(t,ro);const e=tn(t.firestore,ps),n=Ic(e),i=new $h(e);return Hv(t._query),NR(n,t._query).then(s=>new Gv(e,i,t,s))}function hp(t,e,n){t=tn(t,dt);const i=tn(t.firestore,ps),s=WR(t.converter,e,n);return KR(i,[FR(qR(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,vn.none())])}function Wh(t,...e){var n,i,s;t=Mt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||up(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(up(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof dt)l=tn(t.firestore,ps),u=dc(t._key.path),c={next:h=>{e[o]&&e[o](Xv(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=tn(t,ro);l=tn(h.firestore,ps),u=h._query;const d=new $h(l);c={next:p=>{e[o]&&e[o](new Gv(l,d,h,p))},error:e[o+1],complete:e[o+2]},Hv(t._query)}return function(d,p,g,_){const y=new Uh(_),x=new qh(p,y,g);return d.asyncQueue.enqueueAndForget(async()=>Lh(await ga(d),x)),()=>{y.Na(),d.asyncQueue.enqueueAndForget(async()=>Vh(await ga(d),x))}}(Ic(l),u,a,c)}function KR(t,e){return function(i,s){const r=new _n;return i.asyncQueue.enqueueAndForget(async()=>mR(await SR(i),s,r)),r.promise}(Ic(t),e)}function Xv(t,e,n){const i=n.docs.get(e._key),s=new $h(t);return new Kv(t,s,e._key,i,new Xs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Rs=s})(bs),rn(new qt("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new ps(new Zb(i.getProvider("auth-internal")),new iA(i.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new M(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Or(l.options.projectId,u)}(o,s),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),vt(Nf,"4.3.2",e),vt(Nf,"4.3.2","esm2017")})();let Po;const GR=new Uint8Array(16);function QR(){if(!Po&&(Po=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Po))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Po(GR)}const Be=[];for(let t=0;t<256;++t)Be.push((t+256).toString(16).slice(1));function YR(t,e=0){return Be[t[e+0]]+Be[t[e+1]]+Be[t[e+2]]+Be[t[e+3]]+"-"+Be[t[e+4]]+Be[t[e+5]]+"-"+Be[t[e+6]]+Be[t[e+7]]+"-"+Be[t[e+8]]+Be[t[e+9]]+"-"+Be[t[e+10]]+Be[t[e+11]]+Be[t[e+12]]+Be[t[e+13]]+Be[t[e+14]]+Be[t[e+15]]}const XR=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),dp={randomUUID:XR};function JR(t,e,n){if(dp.randomUUID&&!e&&!t)return dp.randomUUID();t=t||{};const i=t.random||(t.rng||QR)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e){n=n||0;for(let s=0;s<16;++s)e[n+s]=i[s];return e}return YR(i)}const Jv=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},ZR={name:"QuestionFFVL",props:["qcm"],data(){return{checkboxes:[],resultsColor:[],resultsDecoration:[],validated:!1,headerColor:"",headerBackgroundColor:"",responsePoint:""}},methods:{validate(){this.validated=!0;let t=0,e=0,n=!0;for(let i in this.qcm.choices)this.qcm.choices[i].point>0&&(t+=this.qcm.choices[i].point),this.qcm.choices[i].point<=0&&!this.checkboxes[i]?(this.resultsColor[i]="gray",this.resultsDecoration[i]="line-through"):this.qcm.choices[i].point<=0&&this.checkboxes[i]?(this.resultsColor[i]="red",e+=this.qcm.choices[i].point):this.qcm.choices[i].point>=0&&this.checkboxes[i]?(this.resultsColor[i]="green",e+=this.qcm.choices[i].point):this.qcm.choices[i].point>=0&&!this.checkboxes[i]&&(this.resultsColor[i]="black");if(t==e?(this.headerColor="#3c763d",this.headerBackgroundColor="#dff0d8",kn().setValidated(this.qcm.id)):e>0?(this.headerColor="#AA6C00",this.headerBackgroundColor="#FFE5C1",n=!1):(this.headerColor="#a94442",this.headerBackgroundColor="#f2dede",n=!1),!this.qcm.answered){let i=this.getReminderDelay(n);const s=new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear();this.qcm.reminder==null?this.insertQuestionReminder(i,s):s!=this.qcm.reminder.answeredDate&&this.updateQuestionReminder(i,s)}this.responsePoint=e>0?e:"0",kn().setAnswerd(this.qcm.id)},getReminderDelay(t){return this.qcm.reminder==null?t?1:0:t?this.qcm.reminder.remindDelay!=0?this.qcm.reminder.remindDelay*2:1:this.qcm.reminder.remindDelay<=1?0:this.qcm.reminder.remindDelay/2},getNextQuestion(){this.resetcss(),this.$emit("getNextQuestion")},resetcss(){this.resultsColor=[],this.resultsDecoration=[],this.validated=!1,this.headerColor="",this.headerBackgroundColor="",this.responsePoint="";for(let t=0;t<this.checkboxes.length;t++)this.checkboxes[t]=!1},async insertQuestionReminder(t,e){await hp(lp(wu,"QcmReminder",JR()),{answeredDate:e,qcmId:this.qcm.id,remindDelay:t})},async updateQuestionReminder(t,e){await hp(lp(wu,"QcmReminder",this.qcm.reminder.id),{answeredDate:e,qcmId:this.qcm.id,remindDelay:t})}}},eS={key:0},tS=["onUpdate:modelValue"],nS={key:0};function iS(t,e,n,i,s,r){return _t(),Tt("div",null,[ht("div",{class:"questionHeader",style:fr({color:s.headerColor,"background-color":s.headerBackgroundColor})},[Yo(zi(n.qcm.question)+" ",1),s.responsePoint?(_t(),Tt("span",eS,zi(s.responsePoint),1)):ii("",!0)],4),(_t(!0),Tt(Wt,null,XT(n.qcm.choices,(o,a)=>(_t(),Tt("div",{class:"questionChoice",style:fr({color:s.resultsColor[a],"text-decoration":s.resultsDecoration[a]})},[Gm(ht("input",{type:"checkbox","onUpdate:modelValue":c=>s.checkboxes[a]=c},null,8,tS),[[e0,s.checkboxes[a]]]),ht("span",null,zi(o.choice),1),s.validated?(_t(),Tt("span",nS,"("+zi(o.point)+")",1)):ii("",!0)],4))),256)),s.validated?ii("",!0):(_t(),Tt("button",{key:0,class:"button-4, actionButton",onClick:e[0]||(e[0]=(...o)=>r.validate&&r.validate(...o))},"OK")),s.validated?(_t(),Tt("button",{key:1,class:"button-4, actionButton",onClick:e[1]||(e[1]=(...o)=>r.getNextQuestion&&r.getNextQuestion(...o))},"Next")):ii("",!0)])}const sS=Jv(ZR,[["render",iS],["__scopeId","data-v-ac07b49b"]]),Zv=_g({id:"globalFFVL",state:()=>({qcms:[{id:1,question:"Vous volez au taux de chute minimum ; vous allez rentrer dans une ascendance",choices:[{choice:"vous vous préparez à freiner",point:-6},{choice:"vous vous préparez à relâcher les freins",point:0},{choice:"vous conservez votre régime de vol",point:0},{choice:"vous augmentez votre vitesse",point:6}]},{id:2,question:"Lorsqu'une particule d'air nuageux est soulevée, sa température",choices:[{choice:"décroît plus lentement que si la particule contenait de l'air clair",point:6},{choice:"décroît plus vite que si la particule contenait de l'air clair",point:-6},{choice:"croît plus vite que si la particule contenait de l'air clair",point:-6}]},{id:3,question:'Vous faites les "oreilles"',choices:[{choice:"traverser un gradient ou une turbulence peut accroître considérablement votre taux de chute",point:2},{choice:"votre finesse diminue",point:2},{choice:"l'incidence augmente",point:2},{choice:"il n'existe aucun risque de parachutage",point:-6}]},{id:4,question:"Facteurs favorisant l'instabilité",choices:[{choice:"l'arrivée d'air chaud dans la basse couche",point:3},{choice:"l'arrivée d'air chaud en altitude",point:-6},{choice:"le refroidissement du sol",point:-6},{choice:"le réchauffement du sol",point:3}]},{id:5,question:"En général un front froid engendre des nuages",choices:[{choice:"par couches minces stratiformes",point:-6},{choice:"isolés de type cumuliformes",point:-6},{choice:"développés sur une grande épaisseur et des 2 types",point:6}]},{id:6,question:"Deux ailes se suivent tout près d'un relief situé à leur droite, la deuxième aile est plus rapide",choices:[{choice:"elle double par la gauche",point:-6},{choice:"elle double par la droite entre le relief et l'autre aile",point:-6},{choice:"elle fait demi-tour",point:6}]},{id:7,question:"Un altimètre permet d'obtenir une information sur",choices:[{choice:"la variation du taux d'humidité",point:-6},{choice:"le gradient vertical de pression atmosphérique",point:0},{choice:"l'altitude",point:6}]},{id:8,question:"Puis-je prévoir d'atterrir en delta ou parapente sur un aérodrome contrôlé ?",choices:[{choice:"Non, les PUL ne peuvent utiliser un aérodrome contrôlé sans autorisation particulière de l'autorité compétente",point:6},{choice:"Oui, mais il faut que je respecte le circuit d'aérodrome",point:-6},{choice:"Oui, il me suffit d'annoncer mon arrivée par radio",point:-6}]},{id:9,question:"Si deux pilotes ont la même aile, à même incidence, le plus lourd",choices:[{choice:"descend moins vite",point:-6},{choice:"vole plus vite",point:3},{choice:"descend plus vite",point:3},{choice:"vole moins vite",point:-6}]},{id:10,question:"Faire une descente rapide en 360° enchaînés et serrés",choices:[{choice:"vous expose à des facteurs de charges importants",point:2},{choice:"vous fait perdre toute référence extérieure",point:2},{choice:"peut entraîner une perte de connaissance",point:2},{choice:"est toujours sans danger",point:-6}]},{id:11,question:"Si vous volez par vent arrière fort",choices:[{choice:"votre vitesse-sol est augmentée",point:6},{choice:"vous avez moins de portance sur votre parapente",point:-6},{choice:"l'effet du vent sur votre visage sera bien plus fort",point:-6},{choice:"cela fragilise votre parapente qui peut se fermer plus facilement",point:-6}]},{id:12,question:"Un mouvement de lacet à droite déclenche principalement",choices:[{choice:"un couple piqueur",point:-6},{choice:"du roulis induit à gauche",point:-6},{choice:"du roulis induit à droite",point:6},{choice:"un couple cabreur",point:-6}]},{id:13,question:"Une bulle d'air s'élève si sa température par rapport à l'air ambiant est",choices:[{choice:"égale",point:-6},{choice:"inférieure",point:-6},{choice:"supérieure",point:6}]},{id:14,question:"Vous ne pouvez pas",choices:[{choice:"décoller 30 minutes après le coucher du soleil",point:2},{choice:"décoller si le pilote précédent est à moins de 100 mètres",point:2},{choice:"rester en vol au delà de 30 minutes après le coucher du soleil",point:2}]},{id:15,question:"Le 360° en prise de terrain",choices:[{choice:"est tout à fait déconseillé",point:2},{choice:"permet d'être précis à l'atterrissage",point:-6},{choice:"vous expose à des risques importants de collision avec les autres ailes en approche",point:2},{choice:"vous fait perdre de vue les repères au sol",point:2}]},{id:16,question:"A niveau de vol égal, la priorité en vol revient",choices:[{choice:"par convention, à l'aile arrivée la première dans l'ascendance",point:2},{choice:"à l'aile qui arrive par la droite",point:4},{choice:"au biplace sur le monoplace",point:-6},{choice:"à l'aile pilotée par un débutant",point:-6}]},{id:17,question:"Durant un vol de pente à 50m du sol, le sifflement du vent faiblit et votre aile s'enfonce en se trouvant proche de la vitesse de décrochage ; pour éviter le crash",choices:[{choice:"vous freinez immédiatement pour ralentir la vitesse de rapprochement du sol",point:-6},{choice:"vous engagez immédiatement un virage prononcé pour vous éloigner de la pente",point:-6},{choice:"vous appliquez votre poids du côté dégagé en relevant les mains puis, dès que la vitesse est revenue, vous utilisez la commande pour virer",point:6}]},{id:18,question:"Un altimètre",choices:[{choice:"peut être calé à différentes valeurs (niveau de la mer, du décollage, de l'atterrissage, etc.)",point:2},{choice:"est calé définitivement à la construction",point:-6},{choice:"doit toujours être comparé et réglé par rapport aux valeurs connues (décollage, points reconnus, atterrissage)",point:2},{choice:"donne une indication variant avec les données atmosphériques",point:2}]},{id:19,question:"Les nuages de type cumulus",choices:[{choice:"caractérisent des couches plutôt instables",point:3},{choice:"se développent horizontalement",point:-6},{choice:"se développent verticalement",point:3},{choice:"caractérisent des couches plutôt stables",point:-6}]},{id:20,question:"Par rapport à l'air chaud, à pression et à volumes égaux l'air froid est",choices:[{choice:"plus lourd",point:6},{choice:"identique",point:-6},{choice:"plus léger",point:-6}]},{id:21,question:'Une voile classée "A" aux tests de la norme CEN',choices:[{choice:"permet au pilote de voler en conditions fortes",point:-6},{choice:"tolère, à l'écart du relief, des imprécisions de pilotage dans des conditions aérologiques modérées",point:3},{choice:"a des qualités d'amortissement des turbulences intéressantes pour l'apprentissage",point:3}]},{id:22,question:"Quelles contraintes peuvent engendrer les évènements sportifs, culturels ou politiques ?",choices:[{choice:"Des restrictions d'horaires et de volumes de vol matérialisés par des ZRT et/ou des ZIT",point:6},{choice:"Des NOTAM d'information pour renforcer la vigilance des pilotes",point:-6},{choice:"Les aéronefs non motorisés doivent simplement ne pas survoler les lieux de déroulement",point:-6}]},{id:23,question:"Le départ en vrille en parapente est précédé",choices:[{choice:"du sentiment que l'aile a du mal à tourner",point:2},{choice:"d'une augmentation du bruit du vent relatif dans les oreilles du pilote",point:-6},{choice:"d'une commande intérieure dure et largement abaissée",point:2},{choice:"d'un affaiblissement du bruit du vent relatif dans les oreilles du pilote",point:2}]},{id:24,question:"Les ascendances thermiques",choices:[{choice:"montent toujours verticalement",point:-6},{choice:"se déclenchent souvent sur des sols contrastés",point:2},{choice:"sont en général entourées de descendances",point:2},{choice:"peuvent se présenter sous forme de bulles ou de colonnes",point:2}]},{id:25,question:"En vol turbulent, votre voile se ferme par devant sur une grande longueur du bord d'attaque",choices:[{choice:"vous tirez brièvement sur les deux freins puis, sans délai, relevez vos mains",point:3},{choice:"vous remontez les freins à vitesse max",point:-6},{choice:"vous augmentez l'incidence de votre aile",point:3}]},{id:26,question:'Vous faites les "oreilles"',choices:[{choice:"cela améliore votre pénétration",point:-6},{choice:"votre finesse est dégradée",point:3},{choice:"votre taux de chute est augmenté",point:3},{choice:"ainsi, la voile ne fermera jamais",point:-6}]},{id:27,question:"La convection dans un profil de masse d'air plutôt stable",choices:[{choice:"est impossible",point:-6},{choice:"peut se concentrer le long des pentes bien exposées au soleil",point:3},{choice:"est possible si un réchauffement suffisant du sol est obtenu",point:3}]},{id:28,question:"Les nuages matérialisant les ondes de ressaut sont des",choices:[{choice:"cumulus congestus et cumulonimbus",point:-6},{choice:"altocumulus lenticulaires et cumulus rotors",point:6},{choice:"cirrostratus et nimbo stratus",point:-6}]},{id:29,question:"Vous volez vent arrière ; votre vitesse/air de croisière est égale à la vitesse du vent météo ; le sol",choices:[{choice:"paraît fixe",point:-6},{choice:"défile 2 fois moins vite que par vent nul",point:-6},{choice:"défile 2 fois plus vite que par vent nul",point:6}]},{id:30,question:"Les avions de chasse de la Défense peuvent-ils évoluer en espace G et E ?",choices:[{choice:"Oui, à n'importe quel moment, en fonction du mode de vol appliqué",point:6},{choice:"Non, uniquement dans les zones militaires de type, R, RTBA, P, ZIT, CTR et TMA",point:-6},{choice:"Oui, mais seulement si un exercice militaire a été programmé",point:-6}]},{id:31,question:"En régime turbulent, il vaut mieux",choices:[{choice:"ne pas taquiner les vitesses trop basses",point:2},{choice:"ne jamais faire d'évolutions serrées",point:2},{choice:"ne pas taquiner les vitesses trop élevées",point:2}]},{id:32,question:"Indiquez les facteurs favorisant la convection",choices:[{choice:"un réchauffement important au niveau du sol",point:3},{choice:"un vent très fort",point:-6},{choice:"un vent de force moyenne",point:3},{choice:"pas de vent du tout",point:0}]},{id:33,question:"La qualification d'accompagnateur fédéral",choices:[{choice:"est reconnue et délivrée par l'ensemble des pilotes du club",point:-3},{choice:"est délivrée suite à plusieurs journées de formation spécifique",point:2},{choice:"est auto-délivrée par le pilote concerné",point:-6},{choice:"est reconnue par la FFVL et délivrée par le responsable régional formation (RRF)",point:4}]},{id:34,question:"Un vent régulier en force et direction n'a aucune influence",choices:[{choice:"sur la finesse-sol",point:-6},{choice:"sur la vitesse-sol",point:-6},{choice:"sur la vitesse-air",point:6}]},{id:35,question:"Le variomètre de base mesure la vitesse verticale",choices:[{choice:"de l'aile par rapport à la masse d'air",point:-6},{choice:"de la masse d'air par rapport à l'aile",point:-6},{choice:"de l'aile par rapport au sol",point:6},{choice:"de la masse d'air par rapport au sol",point:-6}]},{id:36,question:"Que faut-il prendre en compte pour une valeur exprimée en FL ?",choices:[{choice:"Etant basée sur une pression standard, l'altitude correspondante est variable",point:6},{choice:"Il faut une instrumentation spécifique, cela est destiné au trafic IFR uniquement",point:-6},{choice:"Il faut ajouter l'altitude du décollage pour pouvoir utiliser une valeur en FL",point:-6}]},{id:37,question:'En faisant les "oreilles"',choices:[{choice:"l'incidence diminue",point:-6},{choice:"vous améliorez l'amortissement en tangage",point:3},{choice:'vous gardez votre "tour de frein"',point:-6},{choice:"la traînée augmente",point:3}]},{id:38,question:"Vous vous apprêtez à décoller à 15 heures sur un versant ensoleillé où s'est établi une légère brise montante. Le vent météo est nul",choices:[{choice:"le vent sera nul ou très faible en vallée",point:-6},{choice:"vous devez envisager l'éventualité d'un vent de vallée fort, surtout si la vallée est étroite",point:3},{choice:"dans tous les cas, il est prudent de prévoir des possibilités tenant compte d'un éventuel vent de vallée fort",point:3}]},{id:39,question:"Les ondes de ressaut se rencontrent en altitude",choices:[{choice:"n'importe où dans une couche d'air instable",point:-6},{choice:"sous le vent d'un relief dans une couche d'air stable",point:6},{choice:"au vent d'un relief dans une couche d'air stable",point:-6}]},{id:40,question:"Cochez les affirmations exactes",choices:[{choice:"les nimbostratus donnent des chutes de grêlons",point:-6},{choice:"les cirrus sont constitués de cristaux de glace",point:3},{choice:"les stratus sont constitués de cristaux de glace",point:-6},{choice:"les cumulonimbus sont constitués de gouttes d'eau et de cristaux de glace",point:3}]},{id:41,question:"La vapeur d'eau",choices:[{choice:"est présente au sol certains matins sous forme de rosée",point:-6},{choice:"est invisible",point:6},{choice:"est visible sous forme de buée blanche",point:-6}]},{id:42,question:"Le freinage final par vent fort",choices:[{choice:"n'est pas dangereux",point:-6},{choice:"demande un dosage précis et limité en amplitude",point:3},{choice:"n'est pas toujours nécessaire",point:3}]},{id:43,question:"L'hectopascal est une unité de",choices:[{choice:"pression",point:6},{choice:"température",point:-6},{choice:"humidité",point:-6}]},{id:44,question:"La portance d'une aile est due à",choices:[{choice:"la déviation non symétrique des filets d'air par le profil de l'aile",point:3},{choice:"une dépression apparaissant au dessus du profil et une surpression au dessous",point:3},{choice:"une dépression apparaissant au dessous du profil et une surpression au dessus",point:-6}]},{id:45,question:"Le poids apparent sur un appareil en virage équilibré est",choices:[{choice:"supérieur au poids total aile+pilote",point:6},{choice:"inférieur au poids total aile+pilote",point:-6},{choice:"égal au poids totale aile+pilote",point:-6}]},{id:46,question:"L'anémomètre est un instrument indiquant",choices:[{choice:"la vitesse du vent relatif à bord",point:3},{choice:"la direction du vent",point:-6},{choice:"la vitesse du vent instantané",point:3}]},{id:47,question:"Le label École Française de Vol Libre (EFVL) ou Club-École français de Vol Libre (CEFVL)",choices:[{choice:"permet à un club d'enseigner sans moniteur",point:-6},{choice:"garantit à l'élève le respects des exigences fédérales en matière d'apprentissage",point:6},{choice:"est nécessaire pour enseigner",point:-6}]},{id:48,question:"Vous constatez une diminution du vent relatif. L'aile s'enfonce. Vous réagissez en",choices:[{choice:"en débridant totalement l'aile quitte à produire une abattée et augmenter le taux de chute",point:6},{choice:"faisant les oreilles pour fuir au plus vite le secteur",point:-6},{choice:"tirant sur les freins pour réduire le taux de chute qui est en passe d'augmenter",point:-6}]},{id:49,question:"Le ciel est progressivement envahi par des cirrus de plus en plus denses, puis par un voile de cirrostratus de 7/8",choices:[{choice:"il va y avoir du brouillard cette nuit",point:0},{choice:"un front chaud arrive, il va probablement pleuvoir",point:6},{choice:"un cumulonimbus est en cours de formation",point:-6},{choice:"la convection thermique va se renforcer car l'atmosphère se réchauffe",point:-6}]},{id:50,question:"Dans quels types d'espaces militaires le pilote de l'aéronef militaire ne peut assurer l'anticollision ?",choices:[{choice:"L'anticollision n'est jamais assurée dans les zones d'entrainement militaires",point:-6},{choice:"Dans les zones R et dans les ZIT",point:-6},{choice:"Dans le RTBA activé, car le pilote évolue souvent en mode automatique de suivi de terrain",point:6}]},{id:51,question:"Les nuages favorables aux vols de performances sont les",choices:[{choice:"nimbostratus, altostratus et cumulonimbus",point:-6},{choice:"stratus",point:-6},{choice:"cirrocumulus, nimbostratus et stratocumulus",point:-6},{choice:"cumulus",point:6}]},{id:52,question:"Avec les oreilles",choices:[{choice:"mon nouveau taux de chute me permet de facilement redescendre dans toutes les situations aérologiques",point:-6},{choice:"il est recommandé d'avoir l'accélérateur au pied en cas de phase parachutage",point:3},{choice:"je n'ai plus d'autre choix que de piloter les grandes lignes de ma trajectoire à la sellette",point:3}]},{id:53,question:"Une couche de stratus de 40m d'épaisseur est située sous le décollage",choices:[{choice:"s'il y a un vent suffisant pour faire du vol de pente, vous décollez et vous restez au dessus de la couche",point:-6},{choice:"40m c'est peu ; vous décollez",point:-6},{choice:"vous attendez en espérant que la nuée se dégage sinon vous ne décollez pas",point:6}]},{id:54,question:"Les déclarations d'accident doivent être envoyées",choices:[{choice:"sous les 15 jours à l'assureur",point:-6},{choice:"sous 5 jours à la F.F.V.L. qui transmet à l'assureur",point:6},{choice:"sous les 15 jours à la FFVL",point:-6}]},{id:55,question:"La traînée de forme de l'ensemble aile+pilote est la traînée",choices:[{choice:"de pression due au pilote, aux suspentes et à l'aile",point:6},{choice:"due aux irrégularités de surface de l'aile",point:-6},{choice:"due aux tourbillons marginaux",point:-6}]},{id:56,question:"Les ondes de ressaut se développent lorsque le vent",choices:[{choice:"est faible en altitude et la masse d'air très instable",point:-6},{choice:"est de plus en plus fort en altitude et la masse d'air stable",point:6},{choice:"est fort près du sol et la masse d'air très instable",point:-6}]},{id:57,question:"Le taux de chute minimum",choices:[{choice:"correspond à un angle d'incidence plus petit que celui de vitesse-max",point:-6},{choice:"correspond à un angle d'incidence plus grand que celui de finesse-max",point:3},{choice:"peut s'utiliser en permanence sans risque en ascendance",point:-6},{choice:"est le régime de vol utile le plus proche du décrochage",point:3}]},{id:58,question:"Un variomètre indique",choices:[{choice:"la vitesse verticale de votre aile par rapport au sol",point:6},{choice:"la hauteur de votre aile",point:-6},{choice:"la direction de votre aile par rapport au nord",point:-6}]},{id:59,question:"Priorités en aéronefs non motorisés",choices:[{choice:"les P.U.L. sont prioritaires sur les ensembles remorqués (avion+planeur, U.L.M.+delta, avion ou U.L.M.+banderole)",point:6},{choice:"les ballons doivent la priorité aux P.U.L",point:-6},{choice:"les P.U.L. biplace sont prioritaires sur les P.U.L monoplace",point:-3}]},{id:60,question:"La cause de formation des nuages, c'est",choices:[{choice:"une forte descendance",point:-6},{choice:"Le réchauffement de l'air ascendant",point:-6},{choice:"le refroidissement de l'air jusqu'à son niveau de condensation",point:6}]},{id:61,question:"En vol, la diminution importante du vent relatif a pour conséquence",choices:[{choice:"une abattée dont l'amplitude peut exiger d'être contrôlée",point:2},{choice:"l'affaiblissement du bruit du vent dans les oreilles",point:2},{choice:"de vous obliger à lever vos mains pour favoriser la reprise de vitesse",point:2},{choice:"de vous obliger à abaisser vos mains pour garder le contact avec l'aile",point:-6}]},{id:62,question:"La traînée sur l'ensemble aile+pilote",choices:[{choice:"se divise en traînée de forme + traînée induite + traînée de frottement",point:6},{choice:"est indépendante de la vitesse-air",point:-6},{choice:"est indépendante de la forme de l'aile",point:-6}]},{id:63,question:"Les relations entre accompagnateur fédéral et écoles de vol libre",choices:[{choice:"sont à éviter absolument",point:-6},{choice:"pourraient nuire à la bonne évolution de l'activité",point:-6},{choice:"sont indispensables dans l'intérêt des pratiquants",point:3},{choice:"améliorent et facilitent le rôle de chacun pour la progression du nouveau pilote",point:3}]},{id:64,question:"La vapeur d'eau",choices:[{choice:"est visible (fines gouttelettes d'eau)",point:-6},{choice:"est invisible",point:4},{choice:"existe uniquement dans l'air maritime",point:-6},{choice:"existe partout dans la troposphère",point:2}]},{id:65,question:"Un thermique pur ou bleu",choices:[{choice:"permet un gain minimum de 1000m",point:-6},{choice:"ne se forme que dans une couche d'air à tendance stable",point:-6},{choice:"est dangereux pour nos ailes",point:-6},{choice:"n'est pas coiffé par un cumulus",point:6}]},{id:66,question:"Dans l'hémisphère nord lorsque vous êtes face au vent, vous avez",choices:[{choice:"les hautes pressions dans votre dos",point:-6},{choice:"les hautes pression à droite",point:-6},{choice:"les basses pressions à droite",point:6}]},{id:67,question:"Vous empruntez l'aile d'un pilote plus lourd que vous",choices:[{choice:"elle sera plus maniable",point:-6},{choice:"Les actions aux commandes seront moins efficaces",point:2},{choice:"elle se refermera plus facilement dans les turbulences",point:2},{choice:"le taux de chute sera légèrement plus favorable",point:2}]},{id:68,question:"Le meilleur profil d'un terrain de décollage est",choices:[{choice:"tel que vous pourrez facilement vous arrêter en cas de problèmes au gonflage",point:2},{choice:"tel que vous pourrez vous éloigner assez vite du relief",point:2},{choice:"concave",point:-6},{choice:"convexe",point:2}]},{id:69,question:"L'assemblée générale d'une association loi 1901 affiliée à la F.F.V.L. (votre club)",choices:[{choice:"est obligatoire tous les ans",point:6},{choice:"est obligatoire tous les 2 ans",point:-6},{choice:"n'est obligatoire qu'à la fondation du club",point:-6}]},{id:70,question:"L'altimètre",choices:[{choice:"ne subit pas l'influence des variations de température",point:-6},{choice:"utilise une échelle d'altitude calibrée pour des valeurs météo moyennes (atmosphère standard)",point:3},{choice:"indique la vitesse à laquelle varie la pression",point:-6},{choice:"même en parfait état est susceptible d'afficher pour une altitude donnée des valeurs qui peuvent varier selon l'heure et le lieu",point:3}]},{id:71,question:"Se relever dans la sellette en finale augmente",choices:[{choice:"la traînée induite",point:-6},{choice:"la traînée d'effet de sol",point:-6},{choice:"la traînée de forme",point:6}]},{id:72,question:"Voler en local d'un atterrissage, c'est",choices:[{choice:"avoir une autonomie qui permet de le rejoindre à tout moment quelles que soient les conditions aérologiques rencontrées",point:6},{choice:"rester sur un site habituel sans faire de distance",point:-6}]},{id:73,question:"Une aile arrive en face de vous, vous effectuez",choices:[{choice:"un virage à droite (l'autre dégage aussi à droite)",point:6},{choice:"une mise en descente (l'autre reste au même niveau)",point:-6},{choice:"un virage à gauche (l'autre dégage aussi à gauche)",point:-6}]},{id:74,question:"Le container du parachute de secours",choices:[{choice:"doit être verrouillé par un nœud",point:-6},{choice:"peut être positionné sous la planche d'assise de la sellette",point:2},{choice:"peut être positionné en position ventrale",point:2},{choice:"peut être positionné au dos de la sellette",point:2}]},{id:75,question:"La formation d'onde de ressaut est favorisée par",choices:[{choice:"une atmosphère humide",point:-6},{choice:"une atmosphère instable",point:-6},{choice:"une atmosphère stable",point:6}]},{id:76,question:"Une aile en vol stabilisé dans une ascendance",choices:[{choice:"descend par rapport à l'air ascendant",point:6},{choice:"monte à la même vitesse que l'air ascendant",point:-6},{choice:"monte par rapport à l'air ascendant",point:-6}]},{id:77,question:"Une école non reconnue par la F.F.V.L.",choices:[{choice:"peut attester le brevet de pilote confirmé",point:-6},{choice:"peut enseigner si les moniteurs possèdent les diplômes requis",point:6},{choice:"peut attester la partie pratique du brevet de pilote",point:-6}]},{id:78,question:"Au décollage, avec 20 km/h de face, vous pouvez gonfler votre voile",choices:[{choice:"dos à l'aile en vous attendant à devoir résister en reculant pour contrôler la vitesse d'ascension du profil",point:3},{choice:"face à l'aile en ordonnant à une aide extérieure de résister avec vous à la traction de votre voile",point:-6},{choice:"face à l'aile en vous attendant à devoir résister en avançant pour contrôler la vitesse d'ascension du profil",point:3},{choice:"dos à l'aile en vous préparant à mettre beaucoup d'énergie pour contrecarrer la force du vent",point:-6}]},{id:79,question:"Le vent météo",choices:[{choice:"s'affaiblit lorsque les isobares se resserrent",point:-6},{choice:"se renforce lorsque les isobares se resserrent",point:6},{choice:"n'a rien à voir avec l'espacement des lignes isobares",point:-6}]},{id:80,question:"Dans une atmosphère à tendance instable",choices:[{choice:"les cumulus ont tendance à se développer",point:3},{choice:"les stratus ont tendance à se développer",point:-6},{choice:"la température décroît rapidement quand on s'élève en altitude",point:3},{choice:"il y a peu d'ascendances",point:-6}]},{id:81,question:"Pour réduire le risque de fermeture en parapente, il faudra",choices:[{choice:"débrider l'aile ou la demi aile concernée",point:-6},{choice:"brider l'aile ou la demi aile concernée",point:3},{choice:"diminuer l'incidence",point:-6},{choice:"augmenter l'incidence",point:3}]},{id:82,question:"30 km/h de vent de face au décollage ; vous êtes seul",choices:[{choice:"un pilote expérimenté peut, sur un site adapté, décoller en gonflant dos au vent",point:-6},{choice:"vous essayez de gonfler car ça partira tout seul sans avoir besoin de courir",point:-6},{choice:"c'est trop ; vous vous abstenez",point:6}]},{id:83,question:"Types de fronts possibles dans une perturbation",choices:[{choice:"tempéré",point:-6},{choice:"chaud",point:2},{choice:"occlus",point:2},{choice:"froid",point:2}]},{id:84,question:"L'allongement d'une aile est égale au carré",choices:[{choice:"de l'envergure divisé par la surface",point:6},{choice:"de la surface divisé par l'envergure",point:-6},{choice:"de la corde divisé par la surface",point:-6}]},{id:85,question:"La finesse-air est le rapport",choices:[{choice:"distance parcourue horizontalement sur distance parcourue verticalement",point:-6},{choice:"portance sur traînée",point:3},{choice:"vitesse-air horizontale sur vitesse-air verticale",point:3},{choice:"traînée sur portance",point:-6}]},{id:86,question:"L'effet pendulaire spécifique au parapente",choices:[{choice:"peut être la cause d'amples mouvements de tangage et de roulis",point:2},{choice:"est une priorité en pilotage pour la sécurité du vol en parapente",point:2},{choice:"génère des mouvements de lacet",point:-6},{choice:"est produit par la différence de vitesse entre le pilote et sa voile",point:2}]},{id:87,question:"Vous vous posez en catastrophe dans un champ de blé non fauché",choices:[{choice:"vous êtes dans votre tort et vous devez régler le prix sur place",point:-6},{choice:"vous allez vous excuser auprès du cultivateur",point:3},{choice:"vous estimez les dégâts et vous le dédommagez immédiatement",point:-6},{choice:"vous demandez au cultivateur d'estimer les dégâts et vous faites une déclaration à l'assureur de la F.F.V.L.",point:3}]},{id:88,question:"Les signes distinctifs du Cumulonimbus et du Nimbostratus sont",choices:[{choice:"le Ns est accompagné d'un orage et le Cb d'un halo",point:-6},{choice:"le Ns donne des averses violentes, le Cb de la pluie continue",point:-6},{choice:"le Ns donne de la pluie continue et le Cb des pluies orageuses, des éclairs et des vents forts tourbillonnants",point:6}]},{id:89,question:"Le vol de pente nécessite",choices:[{choice:"d'être habitué aux effets de dérive imposés par le vent",point:2},{choice:"une observation constante de l'évolution du vent",point:2},{choice:"une maîtrise parfaite de sa trajectoire",point:2}]},{id:90,question:"Peut on voler dans les ZIT mentionnées sur les cartes aéronautiques ?",choices:[{choice:"Il suffit de téléphoner au numéro mentionné pour savoir si l'on peut la traverser",point:-6},{choice:"Il est interdit de pénétrer le volume des ZIT mentionnées sur les cartes aéronautiques",point:6},{choice:"Il est uniquement possible de pénétrer en week-end et jours fériés : interdit en semaine",point:-6}]},{id:91,question:"En situation de fœhn on observe",choices:[{choice:"des turbulences dangereuses",point:3},{choice:"des nuages dérivant avec le vent",point:-6},{choice:"un assèchement de la masse d'air sous le vent des reliefs",point:3}]},{id:92,question:"Sur la polaire des vitesses, les régimes de vol de croisière correspondent",choices:[{choice:"aux incidences inférieures à l'incidence du taux de chute mini",point:6},{choice:"aux incidences supérieures à l'incidence du taux de chute mini",point:-6}]},{id:93,question:"Le centrage d'une aile",choices:[{choice:"est équilibré lorsque le centre de poussée et le centre de gravité sont alignés verticalement sur corde",point:4},{choice:"s'exprime en degrés",point:-6},{choice:"s'exprime en pourcentage",point:2}]},{id:94,question:"Vous êtes dans une masse d'air descendante, la finesse-sol",choices:[{choice:"reste la même",point:-6},{choice:"est améliorée",point:-6},{choice:"est dégradée",point:6}]},{id:95,question:"L'accompagnateur fédéral utilise sa radio",choices:[{choice:"pour guider les pilotes qu'il accompagne tout le long du vol",point:-6},{choice:"uniquement pour les guider au décollage",point:-3},{choice:"comme n'importe quel pilote, sans plus",point:6},{choice:"uniquement pour les guider à l'atterrissage",point:-3}]},{id:96,question:"Le brouillard d'advection se forme",choices:[{choice:"sans vent",point:-6},{choice:"lorsque le sol se refroidit par nuit claire",point:-6},{choice:"lors de l'arrivée d'une masse d'air chaude sur un sol froid",point:6}]},{id:97,question:"Un front froid",choices:[{choice:"est sécurisant (air froid = air stable)",point:-6},{choice:"peut provoquer des coups de vent",point:2},{choice:"peut donner lieu à de fortes précipitations et turbulences",point:4},{choice:"donne peu de vent",point:-6}]},{id:98,question:"En vol si vous ressentez des turbulences",choices:[{choice:"vous les contrez pour conserver votre cap et veillez à conserver de la vitesse",point:2},{choice:"vous restez attentifs aux informations que vous procurent vos commandes",point:2},{choice:"vous pilotez de manière à amortir en priorité les mouvements pendulaires de l'aile",point:2},{choice:"vous restez bras hauts",point:-6}]},{id:99,question:"Une aile vole face au vent; elle avance par rapport au sol ; le vent est",choices:[{choice:"moins fort que la vitesse/air de l'aile",point:6},{choice:"on ne peut pas savoir",point:-6},{choice:"plus fort que la vitesse/air de l'aile",point:-6}]},{id:100,question:"Le décrochage a lieu en général",choices:[{choice:"à une vitesse inférieure à celle du taux de chute mini",point:6},{choice:"à la vitesse de taux de chute mini",point:-6},{choice:"à une vitesse supérieure à celle du taux de chute mini",point:-3}]},{id:101,question:"Le choix d'une voile est guidé par",choices:[{choice:"son coût abaissé par l'absence de contrôle technique",point:-6},{choice:"le niveau du pilote (fiche de progression)",point:3},{choice:"la catégorie de la voile",point:3},{choice:"le site principalement fréquenté",point:0}]},{id:102,question:"La qualification d'accompagnateur fédéral",choices:[{choice:"est un produit fédéral visant à concurrencer les écoles professionnelles",point:-6},{choice:"s'adresse à des bénévoles et n'attribue aucune prérogative pour l'enseignement du vol libre",point:3},{choice:"permet de bénéficier d'allègements de formation du diplôme d'Etat (DEJEPS)",point:-6},{choice:"est un produit fédéral permettant aux club de mieux accueillir et aider les nouveaux pilotes",point:3}]},{id:103,question:"Le brouillard de rayonnement se forme",choices:[{choice:"sans vent ou par vent très faible",point:2},{choice:"lorsque le sol se refroidit par une nuit claire",point:4},{choice:"lors de l'arrivée d'une masse d'air chaude sur un sol froid",point:-6}]},{id:104,question:"Une confluence se rencontre habituellement",choices:[{choice:"au sommet d'une crête entre 2 vallées alimentées chacune par une brise",point:2},{choice:"entre une brise et un vent météo",point:2},{choice:"le long d'un front de brise de mer",point:2}]},{id:105,question:"La surface d'un parapente est généralement donnée par",choices:[{choice:"la projection de la voile gonflée sur un plan",point:3},{choice:"la surface de l'intrados posé à plat",point:3},{choice:"l'envergure multiplié par l'épaisseur du profil",point:-6}]},{id:106,question:"Dans un espace aérien non contrôlé et au dessus de 900 m mer ou 300 m sol en montagne, vous devez avoir",choices:[{choice:"une visibilité de 1500 mètres et rester hors des nuages",point:-6},{choice:"une visibilité de 5 km sous le FL100, 8 km au-dessus et un espacement par rapport aux nuages de 300m verticalement et 1500m horizontalement",point:6},{choice:"une visibilité de 8 km et rester hors des nuages",point:-6}]},{id:107,question:"La portance et la traînée d'une aile sont fonctions, entre autres, de",choices:[{choice:"la vitesse-sol",point:-6},{choice:"la vitesse du vent météo",point:-6},{choice:"la vitesse-air de l'aile",point:6}]},{id:108,question:"Dans un espace aérien non contrôlé et au dessous de 900 m mer et 300 m sol en montagne, la visibilité minimale doit être de",choices:[{choice:"300 mètres",point:-6},{choice:"8000 mètres",point:-6},{choice:"1500 mètres",point:6}]},{id:109,question:"Par une belle journée d'ascendances où des orages sont annoncés, il faut s'inquiéter si",choices:[{choice:"le ciel se couvre rapidement",point:2},{choice:"l'ombre des nuages au sol grandit rapidement",point:2},{choice:"ça monte partout",point:2}]},{id:110,question:"Un vent du 225° est un vent",choices:[{choice:"provenant du cap 225°",point:3},{choice:"soufflant vers le cap 225°",point:-3},{choice:"soufflant vers le sud-ouest",point:-3},{choice:"soufflant vers le nord-est",point:3}]},{id:111,question:"Un thalweg est",choices:[{choice:"un axe de basses pressions",point:6},{choice:"une zone où la pression atmosphérique varie peu",point:-6},{choice:"un axe de hautes pressions",point:-6}]},{id:112,question:"Pour une même aile, un fort accroissement de la charge alaire entraîne une augmentation",choices:[{choice:"du taux de chute",point:2},{choice:"des déformations de l'aile",point:2},{choice:"de la vitesse horizontale",point:2}]},{id:113,question:"Votre voile se replie brusquement côté relief",choices:[{choice:"vous infléchissez energiquement votre trajectoire vers la vallée malgré la demi aile fermée",point:-6},{choice:"vous contrez commande + sellette pour garder votre cap",point:6},{choice:"vous forcez sa réouverture avec un abaissement ample du frein côté fermé",point:-3}]},{id:114,question:"Le calage d'une aile de parapente",choices:[{choice:"peut être modifié par le réglage de la longueur des freins",point:-6},{choice:"est déterminé par la longueur de chaque suspente",point:2},{choice:"peut être fortement modifié par le vieillissement du suspentage",point:2},{choice:"est modifié par une action sur les trims ou l'accélérateur",point:2}]},{id:115,question:"Vous empruntez l'aile d'un pilote plus léger que vous",choices:[{choice:"les réactions de l'aile lors de fermetures seront plus vives",point:3},{choice:"votre vitesse-max sera plus faible",point:-6},{choice:"elle se refermera plus facilement dans les turbulences",point:-6},{choice:"elle se refermera plus rarement dans les turbulences",point:3}]},{id:116,question:"Lors d'un atterrissage en campagne, un pilote breveté, licencié, détruit le pare-brise d'une voiture; c'est",choices:[{choice:"la R.C. du propriétaire de la voiture qui doit rembourser",point:-6},{choice:"le propriétaire de la voiture qui doit payer",point:-6},{choice:"au pilote de payer les dégâts",point:-6},{choice:"la R.C. du pilote qui remboursera",point:6}]},{id:117,question:"On appelle charge alaire, le rapport",choices:[{choice:"poids total (aile+pilote) sur surface de l'aile",point:6},{choice:"envergure au carré sur surface de l'aile",point:-6},{choice:"poids du pilote sur surface de l'aile",point:-6},{choice:"surface de l'aile sur poids total (aile+pilote)",point:-6}]},{id:118,question:"L'effet girouette, c'est la conséquence d'une rotation autour de l'axe de",choices:[{choice:"tangage",point:-6},{choice:"roulis",point:-6},{choice:"lacet",point:6}]},{id:119,question:"Quelles règles dois-je respecter pour survoler une manifestation entrainant un grand rassemblement de personnes ?",choices:[{choice:"A minima, et sauf restrictions particulières, 300m au dessus de l'obstacle le plus élevé dans un rayon de 600m autour de l'aéronef",point:6},{choice:"150m minimum pour pouvoir dégager si besoin",point:-6},{choice:"Pas de minimum en PUL, mais ne pas mettre en danger les biens et les personnes au sol",point:-6}]},{id:120,question:`Aux "oreilles", vous décidez d'utiliser l'accélérateur, cela`,choices:[{choice:"peut être une parade au risque de parachutale",point:3},{choice:"augmente l'incidence",point:-6},{choice:"permet d'augmenter encore plus votre taux de chute",point:3},{choice:"rend l'aile plus stable en roulis",point:-6}]},{id:121,question:"En vol de pente, vous engagez les virages",choices:[{choice:"du côté opposé au relief",point:6},{choice:"du côté de l'aile qui se soulève",point:-6},{choice:"du côté du relief",point:-6}]},{id:122,question:"Le point d'arrêt d'un profil",choices:[{choice:"est la zone où dépression et surpression s'arrêtent",point:-6},{choice:"se déplace en fonction de l'incidence",point:2},{choice:"est le point où la pression statique de l'air est maximale",point:2},{choice:"sépare les écoulements d'intrados et d'extrados",point:2}]},{id:123,question:"Lors du passage d'un front, l'air chaud",choices:[{choice:"soulève l'air froid",point:-6},{choice:"peut être refoulé vers le bas ou soulevé selon la situation",point:-6},{choice:"est soulevé",point:6}]},{id:124,question:"Je me ferai probablement plus plaisir avec une aile",choices:[{choice:"aux performances maximum, mais difficile à piloter pour mon niveau",point:-6},{choice:"que je maîtrise bien aux performances honnêtes",point:6},{choice:"qui gagne en compétition, quel que soit mon niveau",point:-6}]},{id:125,question:"Parmi les nuages ci-dessous, certains produisent généralement des précipitations",choices:[{choice:"nimbostratus",point:3},{choice:"cumulonimbus",point:3},{choice:"cumulus",point:-6}]},{id:126,question:"Pour amener une particule d'air à saturation en humidité, il faut",choices:[{choice:"diminuer sa température",point:6},{choice:"augmenter sa température",point:-6},{choice:"abaisser son altitude",point:-6}]},{id:127,question:"Des commandes réglées trop tendues",choices:[{choice:"peuvent auto brider le bord de fuite lors de l'utilisation de l'accélérateur",point:2},{choice:"créent un risque supplémentaire de phase parachutale",point:2},{choice:"n'ont rien à voir avec les cascades d'incidents",point:-6},{choice:"peuvent empêcher la montée de la voile",point:2}]},{id:128,question:"Les actions de l'accompagnateur fédéral se font auprès",choices:[{choice:"de pilotes licenciés, au minimum fin de niveau vert ayant validés le brevet initial",point:6},{choice:"de pilotes de bon niveau non licenciés",point:-6},{choice:"d'accompagnateurs de club entre eux uniquement",point:-6},{choice:"de pilotes brevetés assurés",point:0}]},{id:129,question:"La finesse-sol",choices:[{choice:"augmente par vent arrière",point:6},{choice:"augmente par vent de face",point:-6},{choice:"diminue par vent arrière",point:-6}]},{id:130,question:"La norme CEN E 926-1 et 2",choices:[{choice:"classe les parapentes en 4 niveaux d'accès dont le plus accessible est noté D",point:-6},{choice:"attribue les lettres A, B, C ou D à 28 manœuvres réalisées en vol par des pilotes test",point:2},{choice:"sépare les parapentes en 4 niveaux de comportements en vol",point:2},{choice:"applique des tests de résistance à 8G, au sol, derrière un véhicule",point:2}]},{id:131,question:"Pour décoller en sécurité, il est préférable de choisir une pente",choices:[{choice:"convexe et progressive",point:3},{choice:"concave suivie d'une cassure nette",point:-6},{choice:"dégagée d'obstacles",point:3}]},{id:132,question:"Un allongement important est facteur",choices:[{choice:"de performance",point:6},{choice:"d'instabilité",point:-3},{choice:"d'effilement",point:-6}]},{id:133,question:"Juste avant le sommet d'une ressource importante",choices:[{choice:"l'effet pendulaire préjuge de l'arrivée d'une abattée",point:2},{choice:"la vitesse-air parvient à un minimum",point:2},{choice:"le facteur de charge est inférieur à",point:12},{choice:"l'assiette est à piquer",point:-6}]},{id:134,question:"On peut rencontrer des turbulences dangereuses pour le vol libre dans les phénomènes observés suivant",choices:[{choice:"à l'interface d'une couche d'inversion recouvrant une masse d'air générant des ascendances",point:3},{choice:"stratus",point:-6},{choice:"rotors d'onde de ressaut",point:3}]},{id:135,question:"Lors du passage d'un front chaud",choices:[{choice:"les pluies sont continues",point:3},{choice:"l'air est très humide et le système nuageux important",point:3},{choice:"les pluies sont intermittentes et violentes",point:-6}]},{id:136,question:"Dans un virage, l'aile s'incline principalement grâce à un mouvement de",choices:[{choice:"roulis",point:6},{choice:"lacet",point:-3},{choice:"tangage",point:-6}]},{id:137,question:"Dans une masse d'air sans nuages, la température est de 15°C au sol et de 12°C 500 mètres au dessus. Cette tranche d'air est",choices:[{choice:"plutôt stable",point:6},{choice:"plutôt instable",point:-6},{choice:"plutôt sélectivement instable",point:-6}]},{id:138,question:"Quelle est l'altitude maximale absolue possible en vol libre.",choices:[{choice:"Le FL 100 ou 1000ft surface en haute montagne",point:-6},{choice:"Le FL 195, dans certaines LTA E Alpes ou Pyrénées",point:6},{choice:"Le FL 115 soit environ 3500m",point:-6}]},{id:139,question:"Vous rentrez dans un thermique et engagez un 360°. Après 90° de virage le variomètre devient négatif",choices:[{choice:"vous continuez le virage jusqu'à 270° puis reprenez une ligne droite pour retrouver l'ascendance",point:3},{choice:"vous inversez le sens du virage",point:3},{choice:"vous diminuez l'inclinaison",point:-6}]},{id:140,question:"Autour d'un profil d'aile, l'écoulement de l'air peut être",choices:[{choice:"résonnant",point:-6},{choice:"décollé",point:2},{choice:"laminaire",point:2},{choice:"turbulent",point:2}]},{id:141,question:"J'accrois les risques",choices:[{choice:"énormément avec la fatigue et/ou les problèmes (cœur, santé, travail, etc.)",point:4},{choice:"pas du tout, je suis en bonne forme physique et psychique",point:0},{choice:"raisonnablement en introduisant une seule nouveauté à la fois",point:2},{choice:"un peu avec la fatigue",point:-6}]},{id:142,question:"Les règles de vol obligent chaque pilote",choices:[{choice:"à dépasser une aile plus lente par la gauche",point:-6},{choice:"à respecter une distance suffisante pour prévenir les abordages",point:3},{choice:"à dégager par la droite en cas de croisement à la même altitude",point:3}]},{id:143,question:"En vol une turbulence ferme brutalement mon aile ; je me sens tomber à droite dans ma sellette",choices:[{choice:"j'utilise mon frein gauche de manière à ralentir un départ en rotation",point:2},{choice:"je résiste au déséquilibre en transférant mon poids à gauche",point:2},{choice:"j'actionne immédiatement ma main droite avec un geste ample et profond pour forcer la réouverture de l'aile",point:-6},{choice:"je regarde mon aile pour évaluer la situation et son évolution",point:2}]},{id:144,question:"A quoi correspondent les valeurs ASFC et AGL, AMSL ?",choices:[{choice:"ASFC et AGL = hauteur sol, AMSL = altitude par rapport au niveau de la mer",point:6},{choice:"Toutes ces valeurs sont variables en fonction de la pression atmosphérique",point:-6},{choice:"Elles expriment les hauteurs et altitudes en mètres à respecter",point:-6}]},{id:145,question:"Le vent de fœhn est caractérisé par",choices:[{choice:"un nuage orographique sur le relief au vent",point:2},{choice:"une descente d'air chaud, sec et très turbulent sous le vent du relief",point:4},{choice:"un refroidissement de la masse d'air sous le vent du relief",point:-6}]},{id:146,question:"Votre voile neuve vire systématiquement à droite, drisses de freins détendues",choices:[{choice:"vous portez votre poids sur votre fesse gauche et vérifiez si une déviation de la trajectoire équivalente du côté opposé se produit",point:3},{choice:"vous tendez d'avantage le cuissard droit",point:-6},{choice:"une fois posé vous décalez le niveau des élévateurs droits sur le harnais",point:-6},{choice:"vous contactez le revendeur pour un contrôle en usine",point:3}]},{id:147,question:"On risque de rencontrer une zone de cisaillement",choices:[{choice:"dans une confluence",point:2},{choice:"en traversant une couche d'inversion",point:2},{choice:"en entrée et sortie de thermique",point:2}]},{id:148,question:"La chaleur se propage par",choices:[{choice:"rayonnement",point:2},{choice:"conduction",point:2},{choice:"convection",point:2}]},{id:149,question:"L'effet girouette remet l'aile",choices:[{choice:"en vol face à son vent relatif",point:3},{choice:"au sol, à l'arrêt, face au vent instantané",point:3},{choice:"en vol face au vent météo",point:-6},{choice:"au sol face au vent moyen",point:-6}]},{id:150,question:"Lorsqu'une particule atmosphérique non saturée s'élève sans échanger de chaleur avec l'air ambiant, sa température",choices:[{choice:"augmente de 1° par 100m",point:-6},{choice:"reste constante",point:-6},{choice:"diminue de 1° par 100m",point:6}]},{id:151,question:"En air calme, si l'on compare deux régimes de vol stabilisé, l'assiette",choices:[{choice:"augmente lorsque l'angle d'incidence augmente",point:3},{choice:"augmente lorsque la vitesse augmente",point:-6},{choice:"diminue lorsque la vitesse diminue",point:-6},{choice:"diminue lorsque l'angle d'incidence diminue",point:3}]},{id:152,question:"Le niveau d'accessibilité d'une voile dépend",choices:[{choice:"des résultats aux tests",point:1},{choice:"de la charge alaire appliquée sur les modèles dont la fourchette de poids est très large",point:2},{choice:"du niveau technique du pilote",point:2},{choice:"des indications du constructeur",point:1}]},{id:153,question:"Lors de la réception d'une aile neuve, vous devez",choices:[{choice:"vérifier les performances et les comportements de l'aile sur un site grand vol connu et en conditions aérologiques calmes",point:3},{choice:"faire quelques essais en pente école pour vérifier les freins, le suspentage et le ressenti de la prise en charge pendant la course",point:3},{choice:"raccourcir les freins pour légèrement diminuer sa vitesse max (bras haut)",point:-6}]},{id:154,question:"La traînée de profil se compose de",choices:[{choice:"la traînée induite",point:-6},{choice:"la traînée de forme",point:3},{choice:"la traînée de frottement",point:3}]},{id:155,question:"Après un accident, la déclaration doit être établie et envoyée à la F.F.V.L.",choices:[{choice:"dans tous les cas par le président du club",point:-6},{choice:"par le pilote breveté ou son entourage",point:3},{choice:"par le moniteur pour un de ses élèves",point:3},{choice:"par la gendarmerie",point:-6}]},{id:156,question:"Si la charge alaire est réduite, l'aile",choices:[{choice:"est moins manœuvrante",point:3},{choice:"a un taux de chute moins important",point:3},{choice:"a une finesse plus élevée",point:-3},{choice:"décolle à une plus grande vitesse",point:-6}]},{id:157,question:"Un halo autour de la lune ou du soleil est souvent",choices:[{choice:"le signe d'une dégradation prochaine du temps",point:2},{choice:"le signe de la présence d'altocumulus",point:-6},{choice:"le signe de la présence de cirrostratus",point:4},{choice:"caractéristique du beau temps qui va durer",point:-6}]},{id:158,question:"Les tendances générales d'un front froid sont",choices:[{choice:"aggravation rapide avec pluie, orages, vents forts, turbulences",point:6},{choice:"temps brumeux couvert avec bruine",point:-6},{choice:"aggravation lente avec pluie modérée",point:-6}]},{id:159,question:"A l'atterrissage",choices:[{choice:"le dernier virage peut se prévoir à 5m/sol et sur 180°",point:-6},{choice:"il faut ralentir sa vitesse très tôt",point:-6},{choice:"il est déconseillé de faire des virages serrés près du sol à cause de l'augmentation du taux de chute",point:3},{choice:"il faut augmenter la vitesse en finale bien avant le freinage",point:3}]},{id:160,question:"En espace de classe E, puis-je néanmoins croiser un trafic IFR ?",choices:[{choice:"Oui, et le trafic IFR est donc prioritaire",point:-6},{choice:"Non, le trafic IFR n'évolue qu'en espaces classés D à minima",point:-6},{choice:"Oui, il est cependant tenu dans ce cas de respecter également les règles VFR",point:6}]},{id:161,question:"Le déclenchement des thermiques",choices:[{choice:"renforce les brises de pente et de vallée",point:4},{choice:"rend la brise de pente irrégulière",point:2},{choice:"permet d'exploiter la brise de pente loin du relief",point:-6}]},{id:162,question:"La finesse-sol est le rapport",choices:[{choice:"vitesse-sol horizontale sur vitesse-sol verticale",point:6},{choice:"vitesse de vol sur taux de chute",point:-3},{choice:"vitesse verticale sur vitesse horizontale",point:-6},{choice:"portance sur traînée",point:-3}]},{id:163,question:"Les isobares sur une carte météo montrent",choices:[{choice:"les niveaux de températures",point:-6},{choice:"les anticyclones et les dépressions",point:6},{choice:"les niveaux des risques de précipitation",point:-6}]},{id:164,question:"L'élève qui réussit son brevet de pilote fédéral",choices:[{choice:"est considéré par son moniteur et par la F.F.V.L. comme un pilote autonome sur sites",point:3},{choice:"peut voler sous sa propre responsabilité sans contrevenir aux règlements fédéraux",point:3},{choice:"peut estimer que sa progression est terminée",point:-6}]},{id:165,question:"Sur une aile en vol, il y a plusieurs types de traînées de natures bien distinctes",choices:[{choice:"la traînée de frottement",point:2},{choice:"la traînée de forme",point:2},{choice:"la traînée induite",point:2}]},{id:166,question:"Vous venez d'acquérir une nouvelle aile, afin de mieux la connaître et comme vous avez un parachute de secours",choices:[{choice:"vous recherchez la phase parachutale",point:-6},{choice:"vous multipliez les vols dans des aérologies standards pour vous la rendre familière",point:3},{choice:"vous effectuez éventuellement une journée de stage en milieu aménagé",point:3},{choice:'après un peu de gain, vous réalisez quelques "360°" engagés afin de mesurer le taux de chute maximal',point:-6}]},{id:167,question:"Comment savoir si je peux franchir une limite d'espace aérien ?",choices:[{choice:"En téléphonant à la DGAC",point:-6},{choice:"Il suffit de voler à moins de 500ft (150m) sol, les autres aéronefs volant au dessus de cette limite",point:-6},{choice:"En me référant aux mentions concernant la nature et le volume de cet espace sur un document aéronautique à jour",point:6}]},{id:168,question:"Un vent de 20 Kt (nœuds) souffle à environ",choices:[{choice:"18 km/h",point:-6},{choice:"36 km/h",point:6},{choice:"20 km/h",point:-6}]},{id:169,question:"Vous volez à une vitesse-air de 35 km/h avec 10 km/h de vent arrière, votre vitesse-sol",choices:[{choice:"reste inchangée",point:-6},{choice:"est d'environ 45 km/h",point:6},{choice:"est d'environ 25 km/h",point:-6}]},{id:170,question:"Pour une sécurité maximale, le dépliage/repliage du parachute de secours doit être effectué",choices:[{choice:"au moins 1 fois par an",point:2},{choice:"à la fréquence des préconisations du constructeur",point:4},{choice:"il faut le laisser tel que l'a plié le revendeur",point:-6}]},{id:171,question:"A 4m/sol vous constatez que vous allez vous poser avec un vent de travers de 45°",choices:[{choice:"vous réalisez un virage pour vous replacer face au vent et freinerez une fois face au vent",point:-6},{choice:"vous ne vous inquiétez pas, vous arrondirez plus tôt et n'envisagez pas de virage",point:-6},{choice:"en utilisant la sellette vous veillez à ce que cet écart ne s'aggrave pas et vous vous préparez à arrondir normalement",point:6}]},{id:172,question:"Les anticyclones sont le siège",choices:[{choice:"d'un mouvement général ascendant des masses d'air",point:-6},{choice:"plutôt de vents forts",point:-6},{choice:"plutôt de vents faibles",point:2},{choice:"d'un mouvement général d'affaissement des masses d'air",point:4}]},{id:173,question:"Un nuage orographique",choices:[{choice:"est dû à une ascendance dynamique",point:3},{choice:"indique une absence de vent",point:-6},{choice:"est fixe par rapport au sol",point:3},{choice:"est dû à une ascendance thermique",point:-6}]},{id:174,question:"Le directeur technique d'une École Française de Vol Libre (EFVL) ou d'un Club-École Français de Vol Libre (CEFVL)",choices:[{choice:"atteste la partie pratique du brevet de pilote",point:3},{choice:"est responsable de toutes les activités pédagogiques de l'école",point:3},{choice:"délivre le brevet de pilote",point:-6}]},{id:175,question:"Le facteur de charge",choices:[{choice:"est égal à 1 en vol rectiligne stabilisé",point:2},{choice:"dépend du poids du pilote et des indications du constructeur",point:-6},{choice:"est supérieur à 1 pendant les virages équilibrés",point:2},{choice:"est inférieur à 1 quand on accélère en vol rectiligne",point:2}]},{id:176,question:"Le décrochage se produit lorsque",choices:[{choice:"la vitesse est trop forte",point:-6},{choice:"l'incidence est trop forte",point:6},{choice:"l'incidence est trop faible",point:-6}]},{id:177,question:"Vous approchez de la base d'un cumulus",choices:[{choice:"vous risquez d'être aspiré car l'ascendance peut se renforcer",point:3},{choice:"il n'y a jamais de risque d'aspiration",point:-6},{choice:"le risque est faible tant que le nuage n'est pas de type congestus ou nimbus",point:-6},{choice:"le danger est aggravé si la base est en dessous des plus hautes crêtes",point:3}]},{id:178,question:"Le parachute de secours",choices:[{choice:"doit être équipé d'aiguilles en plus du velcro",point:3},{choice:"ne peut pas s'ouvrir de manière intempestive",point:-6},{choice:"nécessite une visite prévol",point:3}]},{id:179,question:"Pour avancer de 4800m dans le plan horizontal, vous avez perdu 600m d'altitude ; votre finesse-sol est voisine de",choices:[{choice:"9",point:-6},{choice:"6",point:-6},{choice:"",point:86},{choice:"7",point:-6}]},{id:180,question:"La pression atmosphérique est due",choices:[{choice:"au poids de la colonne d'air située au dessus",point:6},{choice:"à la rotation de la terre sur elle-même",point:-6},{choice:"au réchauffement solaire",point:-6}]},{id:181,question:"En vol de pente, la priorité revient à l'aile qui",choices:[{choice:"est situé au vent du relief",point:-6},{choice:"à la pente à sa gauche",point:-6},{choice:"a la pente à sa droite",point:6},{choice:"est situé sous le vent du relief",point:-6}]},{id:182,question:"Lorsqu'un pilote exploite une bulle thermique pour gagner de l'altitude",choices:[{choice:"il descend continuellement à l'intérieur de la bulle",point:6},{choice:"il aborde la bulle vers sa partie inférieure et ressort au sommet",point:-6},{choice:"il s'élève à la même vitesse que la bulle",point:-6}]},{id:183,question:"Parmi les points suivants, certains améliorent la finesse",choices:[{choice:"profil optimisé pour minimiser la traînée de forme",point:3},{choice:"position debout du pilote",point:-6},{choice:"suspentes fines ou montants de trapèze profilés",point:3}]},{id:184,question:"La rotation de la terre dévie les vents vers leur",choices:[{choice:"gauche dans l'hémisphère nord",point:-6},{choice:"droite dans l'hémisphère sud",point:-6},{choice:"droite dans l'hémisphère nord",point:6}]},{id:185,question:"Où peut-on trouver les horaires d'activation des zones R ?",choices:[{choice:"Au dos de toutes les cartes IGN du SIA au 1/500 000",point:-6},{choice:"Dans le guide VFR édité par le SIA",point:-6},{choice:"Au dos des cartes au 1/250 000 et dans le complément aux cartes édité par le SIA",point:6}]},{id:186,question:"La finesse-sol",choices:[{choice:"ne varie jamais",point:-6},{choice:"est toujours inférieure à la finesse-air",point:-6},{choice:"est identique à la finesse-air dans une masse d'air immobile",point:6}]},{id:187,question:"Une École Française de Vol Libre (EFVL)",choices:[{choice:"signe annuellement une charte garantissant notamment le respect des règles d'enseignement édictées par la F.F.V.L.",point:2},{choice:"est une entreprise privée financièrement indépendante de la F.F.V.L.",point:2},{choice:"est une entreprise privée qui fait l'objet d'un suivi régulier de la part de la F.F.V.L.",point:2}]},{id:188,question:"La traîne d'une perturbation, c'est la zone",choices:[{choice:"d'air froid s'étendant à l'arrière du front froid",point:6},{choice:"d'air chaud compris entre le front chaud et le front froid",point:-6},{choice:"nuageuse très développée arrivant avec le front froid",point:-6}]},{id:189,question:"En soufflerie, lorsque l'angle d'incidence augmente à partir de 0°, la portance",choices:[{choice:"augmente progressivement jusqu'au décrochage",point:-6},{choice:"augmente, passe par un maximum, diminue puis s'effondre brusquement (décrochage)",point:6},{choice:"ne varie pratiquement pas",point:-6}]},{id:190,question:"Une fois que j'ai mis en œuvre les oreilles",choices:[{choice:"je suis sensible à l'éventuelle diminution du vent dans mes oreilles",point:2},{choice:"je peux utiliser l'accélérateur pour descendre encore plus vite",point:2},{choice:"je me donne la possibilité d'étager mon approche lors d'une présentation simultanée de plusieurs ailes à l'atterrissage",point:2},{choice:"je surveille mon aile en permanence pour m'assurer que les « oreilles » restent en place",point:-6}]},{id:191,question:"La restitution est un phénomène",choices:[{choice:"d'inversion des brises de vallée le soir",point:-6},{choice:"d'ascendances plutôt douces, le soir, sur des zones généralement peu propices pendant la journée",point:6},{choice:"d'inversion des brises de pente le soir",point:-6}]},{id:192,question:"L'extraction du parachute de secours et le retour au sol",choices:[{choice:"peuvent s'avérer problématiques dans bien des cas",point:3},{choice:"se passent toujours bien",point:-6},{choice:"sont une formalité et permettent donc un engagement plus important du pilote sous son aile",point:-6},{choice:"nécessitent une bonne information préalable",point:3}]},{id:193,question:"En finale, si la cible descend dans le champ de vision",choices:[{choice:"vous êtes long",point:6},{choice:"vous êtes court",point:-6},{choice:"vous devez ralentir au maximum",point:-6}]},{id:194,question:"Priorités entre P.U.L.",choices:[{choice:"delta et parapente doivent observer les mêmes règles de l'air",point:6},{choice:"le parapente doit la priorité au delta",point:-6},{choice:"le delta doit la priorité au parapente",point:-6}]},{id:195,question:"Un parachute de secours hémisphérique est",choices:[{choice:"un planeur ultra-léger",point:-6},{choice:"un frein aérodynamique",point:6},{choice:"une garantie à 100% de s'en sortir en cas d'accident",point:-6}]},{id:196,question:"En vol, le pilote peut anticiper",choices:[{choice:"l'imminence d'une fermeture du côté où sa commande durcit",point:-6},{choice:"l'arrivée prochaine d'une ressource lorsqu'il se sent « tomber vers l'avant »",point:2},{choice:"l'arrivée d'un mouvement de piqué lorsque sa vitesse diminue",point:2},{choice:"l'arrivée prochaine d'une abattée lorsqu'il se sent « tomber sur le dos »",point:2}]},{id:197,question:"La situation météo la plus favorable à la formation d'orages isolés est",choices:[{choice:"un anticyclone",point:-6},{choice:"une dépression",point:0},{choice:"un marais barométrique",point:6}]},{id:198,question:"Vous volez par fort vent arrière, cela implique",choices:[{choice:"une diminution de la Force Aérodynamique",point:-6},{choice:"une augmentation de l'incidence",point:-6},{choice:"une augmentation de la vitesse-sol",point:3},{choice:"une augmentation de la finesse-sol",point:3}]},{id:199,question:"Dans une atmosphère à tendance stable",choices:[{choice:"la température décroît doucement quand on s'élève en altitude",point:3},{choice:"la température décroît rapidement quand on s'élève en altitude",point:-6},{choice:"la structure de la masse d'air s'oppose au développement des ascendances",point:3},{choice:"il ne peut pas y avoir d'ascendances thermiques",point:-6}]},{id:200,question:"L'accompagnateur fédéral dans un club de plaine",choices:[{choice:"maîtrise les spécificités du treuil",point:3},{choice:"a les mêmes prérogatives que l'accompagnateur fédéral dans un club de montagne",point:3},{choice:"ne peut proposer de sorties montagnes",point:-6}]},{id:201,question:"A surface égale, un pilote plus léger aura",choices:[{choice:"une meilleure pénétration",point:-6},{choice:"une vitesse max plus faible",point:3},{choice:"une vitesse de décrochage identique",point:-6},{choice:"un taux de chute plus faible",point:3}]},{id:202,question:"Une dorsale est",choices:[{choice:"un axe de basses pressions",point:-6},{choice:"une zone où la pression atmosphérique varie peu",point:-6},{choice:"un axe de hautes pressions",point:6}]},{id:203,question:"Par vent soutenu, préalablement à un gonflage face à l'aile",choices:[{choice:"une traction solidement verrouillée des « C » ou des « D » permet une solution d'attente sûre",point:3},{choice:"j'ai pris mes commandes en main comme je l'aurais fais en étant dos à l'aile",point:3},{choice:"un pré gonflage ne s'impose pas",point:-6},{choice:"j'ai soigneusement trié mes suspentes et disposé mon aile au sol avant d'endosser ma sellette",point:0}]},{id:204,question:"La portance en vol rectiligne stabilisé est",choices:[{choice:"perpendiculaire à la trajectoire-air",point:3},{choice:"plus faible que le poids total aile+pilote",point:3},{choice:"constante quelle que soit la vitesse de l'aile",point:-6}]},{id:205,question:"Pour votre sécurité",choices:[{choice:"vous équipez votre sellette d'un kit de secours comprenant au minimum une ficelle résistante de 20m",point:2},{choice:"vous faites vérifier votre aile par le constructeur dès que vous constatez une paresse inhabituelle au gonflage",point:2},{choice:"vous faites vérifier votre aile par le constructeur dès que vous constatez un comportement inhabituel en virage",point:2}]},{id:206,question:"En atmosphère humide, les ascendances",choices:[{choice:"sont souvent matérialisées par des nuages",point:6},{choice:"ne sont généralement pas matérialisées",point:-6},{choice:"sont très faibles car l'atmosphère humide est à tendance stable",point:-6}]},{id:207,question:"La finesse-air maximale est",choices:[{choice:"une valeur qui dépend de la charge alaire",point:-6},{choice:"obtenue à une vitesse supérieure à celle du taux de chute mini",point:6},{choice:"obtenue à une incidence dépendant du vent météo",point:-6}]},{id:208,question:"Quel est le type de carte aéronautique le plus adapté pour le vol libre ?",choices:[{choice:"La carte au 1/250 000, si le secteur où j'évolue est couvert",point:6},{choice:"La carte au 1/1 000 000, car elle couvre tout l'espace aérien",point:-6},{choice:"La carte au 1/500 000 suffit amplement pour voler uniquement jusqu'au FL115",point:-6}]},{id:209,question:"Suis-je soumis aux mêmes règles si mon parapente ou delta est équipé d'un moteur ?",choices:[{choice:"Oui, sous réserve d'avoir une assurance complémentaire",point:-6},{choice:"Oui, sous réserve de n'utiliser le moteur que temporairement",point:-6},{choice:"Non, un delta ou un parapente équipé d'un moteur est soumis aux règles des ULM",point:6}]},{id:210,question:"En traversant une masse d'air turbulent, l'ensemble aile+pilote est soumis à des variations",choices:[{choice:"d'incidence",point:2},{choice:"de vitesse-air",point:2},{choice:"de Force Aérodynamique",point:2},{choice:"de masse",point:-6}]},{id:211,question:"Le phénomène de restitution se rencontre en général",choices:[{choice:"le soir",point:6},{choice:"au centre des vallées toute la journée",point:-6},{choice:"le matin au centre de la vallée",point:-6}]},{id:212,question:"Autour des zones de haute pression, les vents tournent",choices:[{choice:"dans le sens contraire des aiguilles d'une montre dans l'hémisphère nord",point:-6},{choice:"dans le sens des aiguilles d'une montre dans l'hémisphère nord",point:6},{choice:"dans le sens des aiguilles d'une montre dans l'hémisphère sud",point:-6}]},{id:213,question:"Vous gonflez symétriquement dos à l'aile avec un vent de travers droit",choices:[{choice:"votre demi aile droite se lève en premier",point:-3},{choice:"votre demi aile gauche se lève en premier",point:3},{choice:"pour réussir votre gonflage vous vous apprétez à freiner l'arrivée de la demie aile gauche en premier",point:3},{choice:"pour réussir votre gonflage vous vous apprêtez à freiner l'arrivée de la demie aile droite en premier",point:-3}]},{id:214,question:"La traînée totale d'un aéronef se divise en",choices:[{choice:"traînée de frottement",point:2},{choice:"traînée induite",point:2},{choice:"traînée de pression",point:2},{choice:"traînée dynamique",point:-6}]},{id:215,question:"En vol, la dureté de mes commandes",choices:[{choice:"dépend de la vitesse relative de chacune de mes demi ailes",point:2},{choice:"s'accroît avec l'augmentation de la vitesse",point:2},{choice:"faiblie avec l'augmentation de la vitesse",point:-6},{choice:"augmente lorsque je tire sur les freins",point:2}]},{id:216,question:"Vous faites les oreilles",choices:[{choice:"vent de face, votre finesse/sol augmente",point:-6},{choice:"ça n'abîme pas l'aile",point:0},{choice:"c'est un moyen de descente rapide qui peut doubler votre taux de chute",point:6},{choice:"vous augmentez votre finesse/air",point:-6}]},{id:217,question:"Le cône d'autonomie",choices:[{choice:"est une caractéristique de l'aile qui ne dépend pas du vent",point:-6},{choice:"a un axe plus ou moins penché par le vent",point:3},{choice:"correspond à l'ensemble des points les plus éloignés que l'aile peut atteindre en vol plané",point:3}]},{id:218,question:"Quel type de plan de vol sont tenus de déposer les pratiquants de vol libre",choices:[{choice:"Un plan de vol simplifié comprenant uniquement l'itinéraire prévu",point:-6},{choice:"Sauf cas très particulier, les pratiquants de vol libre ne sont pas tenus de déposer un plan de vol",point:6},{choice:"Un plan de vol simplifié comprenant les horaires et lieux de vol prévus",point:-6}]},{id:219,question:"Le variomètre de base mesure",choices:[{choice:"la composante verticale de la vitesse/sol de l'aile",point:6},{choice:"la composante verticale de la vitesse/air de l'aile",point:-6},{choice:"la vitesse du vent s'il est utilisé au sol",point:-6},{choice:"la vitesse ascensionnelle de la masse d'air dans un thermique",point:-6}]},{id:220,question:"Lors d'un décrochage",choices:[{choice:"la portance chute",point:2},{choice:"la traînée augmente fortement",point:4},{choice:"la portance augmente",point:-6},{choice:"la traînée diminue",point:-6}]},{id:221,question:"On appelle inversion de la température la situation suivante",choices:[{choice:"une couche d'air qui bloque le développement des ascendances",point:0},{choice:"une couche d'air froid qui est au dessus d'une couche d'air chaud",point:-6},{choice:"une couche d'air chaud qui est au dessus d'une couche d'air froid",point:6}]},{id:222,question:"La traînée d'une aile est",choices:[{choice:"indépendante de la vitesse-air",point:-6},{choice:"proportionnelle au carré de la vitesse-air",point:6},{choice:"proportionnelle au cube de la vitesse-air",point:-6},{choice:"proportionnelle à la vitesse-air",point:-6}]},{id:223,question:"La vitesse de votre appareil par rapport au sol est",choices:[{choice:"ne change jamais",point:-6},{choice:"plus élevée par vent de face",point:-6},{choice:"plus élevée par vent arrière",point:6}]},{id:224,question:"Lorsque 2 masses d'air de températures différentes se rencontrent",choices:[{choice:"elles se mélangent facilement",point:-6},{choice:"l'air le plus chaud s'élève au dessus de l'air froid",point:6},{choice:"l'air le plus chaud s'infiltre au dessous de l'air froid",point:-6}]},{id:225,question:"Parmi ces nuages, certains annoncent l'arrivée d'un front chaud",choices:[{choice:"altostratus",point:3},{choice:"cirrostratus",point:3},{choice:"cumulus",point:-6},{choice:"cumulonimbus",point:-6}]},{id:226,question:"La déclaration d'accident est nécessaire si",choices:[{choice:"l'aéronef est endommagé",point:-6},{choice:"quand il y a intervention des secours ou hospitalisation",point:3},{choice:"une tierce personne est blessée",point:3}]},{id:227,question:"Un thermique peut",choices:[{choice:"être dévié par le vent",point:2},{choice:"ne donner lieu à aucune matérialisation",point:2},{choice:"être matérialisé par un cumulus bourgeonnant",point:2},{choice:"être matérialisé par un voile de stratus",point:-6}]},{id:228,question:"Les rotors et les lenticulaires semblent fixes par rapport au sol car",choices:[{choice:"leur durée de vie est très brève",point:-6},{choice:"ils se forment à leur partie au vent et se désagrègent à leur partie sous le vent",point:6},{choice:"à leur niveau le vent est nul",point:-6}]},{id:229,question:"Sur une aile en vol rectiligne stabilisé, lorsque le pilote provoque un accroissement de l'incidence, transitoirement",choices:[{choice:"la vitesse sur trajectoire diminue",point:3},{choice:"la vitesse sur trajectoire augmente",point:-6},{choice:"la trajectoire s'incurve vers le bas",point:-6},{choice:"la trajectoire s'incurve vers le haut",point:3}]},{id:230,question:"Pour rendre efficace l'utilisation du parachute de secours je dois",choices:[{choice:"en vol, régulièrement m'exercer à trouver le contact de sa poignée",point:3},{choice:"l'aérer une fois par an au minimum avant de le replier",point:3},{choice:"faire un lavage par an en machine avant de le replier",point:-6}]},{id:231,question:"Un pilote de vol libre peut-il être soumis à un contrôle d'alcoolémie ou de stupéfiants ?",choices:[{choice:"Non, cela ne concerne que la réglementation routière",point:-6},{choice:"Oui, et l'usage de boissons alcoolisées ou de stupéfiants est interdit",point:6},{choice:"Oui, mais la tolérance est identique à la circulation routière",point:-6}]},{id:232,question:"Par une belle journée d'été, la température maximum sera atteinte à (heure solaire, sans tenir compte des 2 heures d'avance sur nos montres)",choices:[{choice:"15h",point:6},{choice:"12h",point:-6},{choice:"14h",point:-2}]},{id:233,question:"Vous êtes le premier à enrouler une ascendance",choices:[{choice:"une aile qui entre dans l'ascendance au même niveau que vous doit spiraler à 180° et dans le même sens",point:3},{choice:"aucune autre aile n'a le droit d'utiliser cette ascendance",point:-6},{choice:"les ailes qui arrivent après vous doivent adopter votre sens de rotation",point:3},{choice:"vous êtes prioritaire sur une aile située en dessous et qui vous rejoint",point:-6}]},{id:234,question:"Vous envisagez d'utiliser une ascendance où se trouve déjà un autre appareil ; vous",choices:[{choice:"faites comme si vous étiez seul",point:-6},{choice:"essayez en jouant sur la vitesse de vous placer de façon diamétralement opposée dans le même sens de rotation",point:6},{choice:"engagez la spirale juste devant lui pour qu'il vous voit bien",point:-6}]},{id:235,question:"Au cas où le vent météo change d'orientation ou d'intensité pendant le vol, il convient",choices:[{choice:"de ralentir au maximum afin de retarder le moment d'un atterrissage qui s'annonce délicat",point:-6},{choice:`de repérer immédiatement des terrains de secours afin de se préparer à l'éventualité d'un atterrissage "aux vaches"`,point:3},{choice:"de mettre le cap immédiatement sur le terrain pour rentrer coûte que coûte",point:-6},{choice:"de changer à temps son plan de vol pour se donner les meilleurs chances de rentrer malgré tout au terrain",point:3}]},{id:236,question:"Sur une aile en vol rectiligne stabilisé, lorsque le pilote provoque une diminution de l'incidence",choices:[{choice:"la vitesse sur trajectoire augmente",point:3},{choice:"la trajectoire s'incurve transitoirement vers le bas",point:3},{choice:"la trajectoire s'incurve transitoirement vers le haut",point:-6},{choice:"la vitesse sur trajectoire diminue",point:-6}]},{id:237,question:"Les zones favorables au déclenchement de la convection sont en général",choices:[{choice:"les zones rocailleuses",point:2},{choice:"les forêts",point:-6},{choice:"les zones urbanisées",point:2},{choice:"les zones sèches",point:2}]},{id:238,question:"Une bonne approche",choices:[{choice:"se prépare suffisamment tôt",point:2},{choice:"tient compte du vent météo et de ses variations possibles",point:2},{choice:"doit être modifiable en cas de nécessité",point:2}]},{id:239,question:"La traînée induite",choices:[{choice:"est la traînée de culot de l'aile",point:-6},{choice:"est due au pilote et aux câbles ou suspentes",point:-6},{choice:"est due aux irrégularités de surface de l'aile",point:-6},{choice:"se manifeste entre autres par des tourbillons marginaux",point:6}]},{id:240,question:"Un moniteur encadre un stage de formation en milieu aménagé (S.I.V., pilotage, acrobatie) dans le cadre d'une école fédérale",choices:[{choice:"sa formation initiale est suffisante",point:-6},{choice:"il doit organiser le stage au dessus de l'eau",point:3},{choice:"il a reçu une formation particulière",point:3}]},{id:241,question:"En région montagneuse, vous recherchez de préférence les ascendances thermiques",choices:[{choice:"sur les rochers ensoleillés",point:6},{choice:"sur les versants à l'abri du soleil et du vent",point:-6},{choice:"dans les fonds de vallée",point:-6}]},{id:242,question:"On appelle anticyclone une zone",choices:[{choice:"de vents faibles",point:0},{choice:"de haute pression",point:6},{choice:"de basse pression",point:-6}]},{id:243,question:"L'emport du parachute de secours",choices:[{choice:"n'exige aucune mesure particulière",point:-6},{choice:"impose une surveillance particulière des velcros et goupilles de fermeture du conteneur",point:3},{choice:"expose le pilote à des risques d'ouverture intempestive",point:3}]},{id:244,question:"Le système de fermeture du container extérieur du parachute",choices:[{choice:"doit se libérer à la première traction de la poignée de parachute (effort compris entre 4 et 9kg)",point:2},{choice:"doit être vérifié avant chaque décollage",point:2},{choice:"est plus fiable si un maillon rapide le verrouille",point:-6},{choice:"est généralement verrouillé par une aiguille souple ou rigide",point:2}]},{id:245,question:"Vous êtes en approche ; une aile est juste en dessous de vous",choices:[{choice:"vous l'observez attentivement car vous lui devez la priorité",point:6},{choice:"vous faites des 360° pour vous poser avant lui",point:-6},{choice:"en approche, il n'y a plus de priorité",point:-6},{choice:"il vous doit la priorité",point:-6}]},{id:246,question:"Une aile de Vol Libre, c'est",choices:[{choice:"un frein aérodynamique",point:-6},{choice:"un parachute",point:-6},{choice:"un planeur ultra-léger",point:3},{choice:"un aéronef non soumis à l'immatriculation",point:3}]},{id:247,question:"Vous êtes 200m sous un gros cumulus, vers son centre, vous observez quelques nuages déchiquetés et un variomètre fortement positif",choices:[{choice:"vous augmentez la vitesse jusqu'à amener le variomètre à 0",point:-6},{choice:"vous pouvez utiliser l'ascendance sur les bords du nuage, en gardant toujours une direction totalement dégagée à toute altitude",point:2},{choice:"vous en profitez pour gagner de l'altitude",point:-6},{choice:"vous dégagez du côté le plus clair pour échapper à l'influence du nuage",point:4}]},{id:248,question:"Les nuages de type stratus",choices:[{choice:"se développent horizontalement",point:3},{choice:"caractérisent des couches plutôt stables",point:3},{choice:"se développent verticalement",point:-6},{choice:"caractérisent des couches plutôt instables",point:-6}]},{id:249,question:"Le brevet de pilote et la qualification biplace sont certifiées par",choices:[{choice:"le président du club où vous êtes affilié",point:-6},{choice:"le responsable régional de la formation (R.R.F.)",point:6},{choice:"le directeur technique de l'école (D.T.E.)",point:-6}]},{id:250,question:"Vous croisez une autre aile ; votre vitesse de croisement est égale à",choices:[{choice:"la somme de vos 2 vitesse/air",point:6},{choice:"la moitié de votre vitesse/air",point:-6},{choice:"votre vitesse/air",point:-6}]},{id:251,question:"Les protections dorsales et latérales de votre sellette",choices:[{choice:"vous autorise à un niveau d'engagement plus fort",point:-6},{choice:"permettent parfois et pour certains modèles d'atténuer les lésions dues au poinçonnement",point:2},{choice:"peuvent améliorer le maintien dorsal",point:2},{choice:"peuvent protéger contre un choc de faible intensité",point:2}]},{id:252,question:"Parmi les nuages ci-dessous, les plus dangereux pour le vol libre sont les",choices:[{choice:"cumulonimbus",point:4},{choice:"strato-cumulus",point:-6},{choice:"nuages de rotors",point:2}]},{id:253,question:"Par vent fort, le vol captif sur point fixe (corde attachée au sol)",choices:[{choice:"peut être utilisé en école",point:-6},{choice:"peut entraîner un verrouillage irrémédiable",point:3},{choice:"n'est jamais dangereux",point:-6},{choice:"est fortement déconseillé",point:3}]},{id:254,question:"En turbulence vous faites les oreilles",choices:[{choice:"vous ne pourrez plus piloter avec vos freins",point:3},{choice:"votre aile sera moins sensible en tangage",point:3},{choice:"c'est fortement déconseillé",point:-6}]},{id:255,question:"Le soleil réchauffe principalement l'atmosphère",choices:[{choice:"indirectement par l'intermédiaire du sol",point:6},{choice:"directement par rayonnement",point:-6},{choice:"directement par convection",point:-6}]},{id:256,question:"En vol vent de travers",choices:[{choice:"le nez de l'aile se met face au vent : c'est l'effet girouette",point:-6},{choice:"l'axe de l'aile fait un angle avec la trajectoire/sol",point:2},{choice:"l'axe de l'aile reste parallèle à la trajectoire/sol",point:-6},{choice:"vous devez adopter un angle de contre-dérive si vous vous dirigez vers un point qui n'est pas dans l'axe du vent",point:4}]},{id:257,question:"Comment savoir si un exercice militaire est en cours ?",choices:[{choice:"En allant vérifier sur le site web du SIA, à la rubrique SUP AIP et NOTAM",point:6},{choice:"En vérifiant l'affichage sur les panneaux d'information du site choisi",point:-6},{choice:"Il suffit d'aller sur les pages espace aérien du site web de la FFVL",point:-6}]},{id:258,question:"Lorsque vous volez vent arrière près du sol, l'impression visuelle tend à modifier votre perception de la vitesse/air, ce qui peut vous conduire à",choices:[{choice:"voler trop lentement en freinant votre aile",point:3},{choice:"voler trop rapidement en accélérant votre aile",point:-6},{choice:"vous rapprocher dangereusement de la vitesses minimum et des risques associés",point:3}]},{id:259,question:"On appelle brise de pente descendante (ou vent catabatique)",choices:[{choice:"un vent froid qui descend la vallée du Rhône",point:-6},{choice:"un vent météo qui descend le long d'une pente",point:-6},{choice:"un air qui s'est refroidi au contact du sol et qui descend par gravité le long d'une pente",point:6}]},{id:260,question:"Vous vous dirigez vers le terrain en vent arrière à vitesse de croisière ; vous voyez les limites les plus rapprochées du terrain monter régulièrement vers vous",choices:[{choice:"vous choisissez immédiatement un atterrissage de secours à meilleure portée",point:6},{choice:"vous ralentissez pour utiliser la finesse/sol importante due au vent arrière",point:-6},{choice:"vous allez arriver au dessus du terrain, faire demi-tour et vous poser vent de face",point:-6},{choice:"vous allez arriver juste au terrain et vous poser vent arrière",point:-6}]},{id:261,question:"Pour un pilote peu expérimenté, un terrain d'atterrissage se découvre",choices:[{choice:"au moment d'atterrir",point:-6},{choice:"en vol, en venant à la verticale pour l'observer",point:-6},{choice:"avant le vol, c'est un minimum",point:6}]},{id:262,question:"Vous affrontez un vent de face de 15 km/h ; pour rentrer au terrain",choices:[{choice:"en prenant des points de repère au sol et en jouant sur votre vitesse, vous essayez de trouver le meilleur angle de plané",point:6},{choice:"vous cherchez à vous maintenir au taux de chute minimum pour avoir plus de temps pour effectuer le trajet",point:-6},{choice:"vous volez aussi rapidement que possible pour avoir une vitesse de pénétration maximum",point:-6}]},{id:263,question:"Pour être précis à l'atterrissage, la visualisation correcte de la pente en finale est indispensable. Cette pente",choices:[{choice:"varie en fonction de l'incidence",point:3},{choice:"ne dépend que des caractéristiques aérodynamiques de l'aile",point:-6},{choice:"varie en fonction de la direction et de la vitesse du vent",point:3}]},{id:264,question:"La partie pratique du brevet de pilote est attribué par",choices:[{choice:"le président de votre club",point:-3},{choice:"le directeur technique d'une école française de vol libre (DTE)",point:6},{choice:"le responsable régional de la formation (R.R.F.)",point:-3}]},{id:265,question:"Le gradient de vent de face à l'atterrissage",choices:[{choice:"augmente le taux de chute",point:2},{choice:"nécessite par sécurité une prise de vitesse préalable",point:2},{choice:"est parfois dangereux car il peut conduire au décrochage en cas de pilotage inadapté",point:2},{choice:"n'a pas d'effet sur la vitesse/air",point:-6}]},{id:266,question:"Par rapport au vent mesuré au décollage à 2m/sol, le vent 20m au dessus risque d'être",choices:[{choice:"de même force",point:-6},{choice:"plus fort",point:6},{choice:"moins fort",point:-6}]},{id:267,question:"Un pilote breveté ayant une pratique loisir irrégulière",choices:[{choice:'peut utiliser une voile classée en "D"',point:-6},{choice:"choisit sa voile selon les conditions aérologiques",point:-6},{choice:"peut utiliser un prototype en air calme",point:-6},{choice:`ne devrait voler qu'avec des voiles classées en "A" ou "B"`,point:6}]},{id:268,question:"La pente d'une aire de décollage doit être",choices:[{choice:"n'a pas à être comparée à la pente de finesse max. de l'aile",point:-6},{choice:"supérieure à la pente de finesse max. de l'aile",point:6},{choice:"inférieure ou égale à la finesse max. de l'aile",point:-6}]},{id:269,question:"A toute altitude dans les espaces aériens classés E et au dessus de 900 m mer ou 300 m sol en montagne dans les espaces aériens non contrôlés, la distance minimale à respecter par rapport aux nuages est de",choices:[{choice:"50 mètres horizontalement et 0 mètre verticalement",point:-6},{choice:"0 mètre",point:-6},{choice:"1500 mètres horizontalement et 300 mètres verticalement",point:6}]},{id:270,question:"Au cours d'un vol de pente en conditions relativement turbulentes",choices:[{choice:"vous vous éloignez un peu du relief et vous augmentez votre vitesse",point:4},{choice:"vous évitez de descendre en dessous des crêtes",point:2},{choice:"vous volez le plus vite possible",point:-6}]},{id:271,question:"En turbulence",choices:[{choice:"vous devez voler le plus lentement possible pour ne pas fatiguer la structure",point:-6},{choice:"les efforts sur la structure augmentent avec la vitesse de vol",point:6},{choice:"vous devez voler bras hauts pour vite sortir de la zone",point:-6}]},{id:272,question:"En vol, un P.U.L. arrive sur votre droite avec une route convergente",choices:[{choice:"vous devez céder la priorité",point:6},{choice:"vous avez la priorité",point:-6},{choice:"la priorité est fonction de la taille respective des aéronefs",point:-6}]},{id:273,question:"C'est mon premier vol de la saison",choices:[{choice:"j'aurais moins de résistance à la fatigue, je n'hésite pas à écourter mon vol pour garder un peu de fraîcheur pour l'atterrissage",point:3},{choice:"j'utilise des conditions faciles pour moi",point:3},{choice:"il n'y a pas de différence, c'est comme le vélo ça ne s'oublie pas",point:-6}]},{id:274,question:"Je m'approche de la base du nuage",choices:[{choice:"j'en profite au maximum, c'est un nuage isolé, ça n'est pas grave si je passe un peu dedans",point:-6},{choice:"je suis très méfiant, il pourrait arriver une masse d'air plus humide qui condense plus bas et me bouche la sortie, j'ai toujours une échappatoire latérale",point:3},{choice:"je suis sur un bord du nuage pour pouvoir m'échapper à tout moment",point:3},{choice:"pas de soucis, j'ai une boussole ou un GPS",point:-6}]},{id:275,question:"Dans un espace aérien non contrôlé et au dessous de 900 m mer ou 300 m sol en montagne, vous devez avoir",choices:[{choice:"une visibilité d'au moins 1500 m et voler hors des nuages",point:6},{choice:"une visibilité d'au moins 8 km et un espacement par rapport aux nuages de 300 m verticalement et 1500 m horizontalement",point:-6},{choice:"une visibilité de 3000 m et maintenir un espacement par rapport aux nuages de 600 m",point:-6}]},{id:276,question:"En conditions turbulentes, il vaut mieux",choices:[{choice:"voler au taux de chute mini",point:-6},{choice:"ne jamais faire d'évolutions serrées",point:3},{choice:"s'éloigner des limites du domaine de vol",point:3}]},{id:277,question:"Pour garder mon parachute en bon état, je dois",choices:[{choice:"le stocker au sec et éviter tout contact avec l'humidité",point:3},{choice:"l'essayer en vol sur mon site préféré au moins deux fois par an",point:-6},{choice:"l'aérer puis le replier une à deux fois par an, et à minima selon les préconisations du constructeur",point:3}]},{id:278,question:"Le gradient de vent de face à l'atterrissage",choices:[{choice:"diminue la vitesse/air",point:3},{choice:"augmente la vitesse/air",point:-6},{choice:"diminue l'incidence",point:-6},{choice:"augmente l'incidence",point:3}]},{id:279,question:"Au décollage, il y a 30 km/h de vent ; mon aile vole à une vitesse maximum de 35 km/h",choices:[{choice:"vous utilisez l'accélérateur dés que possible pour pouvoir vous éloigner du relief",point:-6},{choice:"vous devez courir à 5 km/h pour décoller",point:-6},{choice:"vous vous abstenez de décoller en estimant que la marge de sécurité n'est pas suffisante",point:6}]},{id:280,question:"Vous êtes en finale, face au terrain d'atterrissage ; vous vous apercevez que vous êtes un peu long et haut, vous risquez de dépasser le terrain ; vous choisissez",choices:[{choice:"d'augmenter le trajet à parcourir en déviant votre trajectoire",point:3},{choice:"d'augmenter la traînée parasite en vous relevant",point:3},{choice:"de perdre de l'altitude en parachutant légèrement",point:-6},{choice:"de perdre de l'altitude en accélérant",point:0}]},{id:281,question:"Le passage d'un cumulonimbus dans votre secteur de vol",choices:[{choice:"vous invite à profiter des ascendances larges avant la pluie",point:-6},{choice:"vous impose un atterrissage immédiat",point:3},{choice:"peut rendre de toute façon l'atterrissage problématique",point:3}]},{id:282,question:"Dans un thermique au cours des 360°, le variomètre passe par un maximum puis retombe à des valeurs faiblement positives",choices:[{choice:"vous quittez l'ascendance pour la reprendre d'un autre côté",point:-6},{choice:"vous inversez le sens des 360°",point:-6},{choice:"pour vous recentrer, vous élargissez le virage juste avant le maximum du variomètre et resserrez peu après",point:6}]},{id:283,question:"Pour centrer un thermique",choices:[{choice:"vous diminuez l'inclinaison quand l'ascendance augmente",point:3},{choice:"vous augmentez l'inclinaison quand l'ascendance augmente",point:-3},{choice:"vous pouvez voler très lentement sans risque d'autorotation car l'air ascendant empêchera une abattée éventuelle",point:-6},{choice:"vous augmentez l'inclinaison quand l'ascendance diminue",point:3}]},{id:284,question:"Vous êtes en prise de terrain en S (P.T.S.) ; votre trajectoire s'enfonce sous le plan de descente prévu ; vous devez",choices:[{choice:"accélérer pour ne pas perdre de temps",point:-6},{choice:"raccourcir vos S",point:3},{choice:"s'il le faut vous mettre en ligne droite face au terrain",point:3}]},{id:285,question:"En haute montagne, la densité de l'air diminuant avec l'altitude et pour que votre aile puisse décoller, vous devez vous attendre à courir",choices:[{choice:"moins vite",point:-6},{choice:"plus vite",point:3},{choice:"plus longtemps",point:3},{choice:"moins longtemps",point:-6}]},{id:286,question:"Les parties de l'aile subissant le plus d'efforts en vols sont",choices:[{choice:"la partie avant du profil",point:3},{choice:"la partie arrière du profil",point:-6},{choice:"les suspentes D",point:-6},{choice:"les suspentes A et B",point:3}]},{id:287,question:"Vous risquez de rencontrer de fortes turbulences dangereuses",choices:[{choice:"sous le vent d'un relief par vent fort",point:2},{choice:"dans une ascendance dynamique",point:-6},{choice:"dans les zones de cisaillement",point:2},{choice:"près du relief, lorsque l'activité thermique est maximum",point:2}]},{id:288,question:"Une aile homologuée CEN est obligatoire",choices:[{choice:"pour pratiquer en compétition",point:-6},{choice:"dans le cadre de la pratique loisir",point:-6},{choice:"dans le cadre des écoles labellisées par la fédération",point:6}]},{id:289,question:"Avant de voler sur un site déclaré F.F.V.L. que vous ne connaissez pas, vous devez",choices:[{choice:"lire les panneaux d'informations F.F.V.L. sur ces sites",point:3},{choice:"obtenir l'autorisation du club local",point:-6},{choice:"prendre connaissance de la classification des espaces aériens environnants et de la présence de zones à statut particulier",point:3},{choice:"obtenir l'autorisation de l'école locale",point:-6}]},{id:290,question:"Le vol à l'intérieur des nuages est permis",choices:[{choice:"nulle part",point:6},{choice:"à plus de 900 mètres au dessus du niveau de la mer",point:-6},{choice:"à plus de 300 mètres au dessus de tout relief",point:-6}]},{id:291,question:"A vitesse de taux de chute mini, pour amorcer un virage à droite sans trop perdre de vitesse et ne pas risquer la mise en vrille, vous devez",choices:[{choice:"appliquer mon poids sur les élévateurs de droite",point:3},{choice:"relever le frein gauche",point:3},{choice:"tirer sur le frein droit",point:-6}]},{id:292,question:"Vous voulez rentrer dans une ascendance alors qu'une autre aile spirale 50m en dessous",choices:[{choice:"vous attendez qu'elle passe au dessus de vous pour rentrer car sinon la descendance périphérique risque de vous mettre à la même hauteur",point:0},{choice:"vous enroulez en sens inverse pour pouvoir la surveiller",point:-6},{choice:"vous enroulez dans le même sens qu'elle",point:6}]},{id:293,question:"Lors d'un gonflage par vent fort, la voile commence à vous tirer très fort vers l'arrière, vous risquez d'être traîné au sol",choices:[{choice:"vous lâchez les commandes et vous vous agrippez où vous pouvez pour résister",point:-6},{choice:"vous courez vers l'aile avant d'être déséquilibré et aidez à affaler en tirant sur les freins",point:3},{choice:"vous courez vers l'aile avant d'être déséquilibré et décrochez l'aile à l'aide des élévateurs arrières si vous y arrivez",point:3},{choice:"Vous résistez et simultanément tirez les deux freins à fond pour vous arrêter",point:-6}]},{id:294,question:"Vous évoluez en vol de pente, dans un espace aérien non contrôlé, sur une montagne dont l'altitude est de 1000m. La base des nuages est à 1200m. Le respect des conditions de vol à vue vous permet de monter jusqu'à une altitude de",choices:[{choice:"1200 m",point:6},{choice:"1000 m",point:-6},{choice:"900 m",point:-6}]},{id:295,question:"Loin du relief, vous suivez la même route et au même niveau qu'une autre aile moins rapide ; vous effectuez le dépassement par",choices:[{choice:"la gauche",point:-6},{choice:"la droite",point:6},{choice:"le dessus",point:-6}]},{id:296,question:"L'emport du parachute de secours se justifie par les risques de",choices:[{choice:"abandon du vol par épuisement",point:-6},{choice:"incident de vol irréversible (twist, cravate, etc.)",point:2},{choice:"collision",point:2},{choice:"rupture de l'aile",point:2}]},{id:297,question:"Quelles indications sont portées dans le cartouche d'identification d'un espace ?",choices:[{choice:"Le nom et le type d'espace ainsi que les hauteurs sol du volume correspondant",point:-6},{choice:"Le type, le nom, le plancher et le plafond, ainsi que la fréquence d'appel pour cet espace",point:6},{choice:"Le nom, le type, les horaires, le volume et le numéro de téléphone liés à cet espace",point:-6}]},{id:298,question:"Comment peuvent être exprimées les limites des espaces contrôlés ?",choices:[{choice:"Toujours en altitudes QNH pour prendre en compte les variations de pression",point:-6},{choice:"Selon le cas, en ASFC, AMSL ou FL",point:6},{choice:"En niveaux de vol uniquement à cause du trafic IFR",point:-6}]},{id:299,question:"Dans le cadre fédéral, la présence d'un moniteur est",choices:[{choice:"obligatoire sur la pente école pendant les cours",point:6},{choice:"facultative dans tous les cas",point:-6},{choice:"facultative si les élèves sont accompagnés par un pilote breveté",point:-6}]},{id:300,question:"Vous êtes en vol de pente, le relief est à votre gauche. Une aile arrive en face à la même altitude",choices:[{choice:"elle a priorité",point:6},{choice:"vous avez priorité et maintenez votre cap",point:-6},{choice:"vous tentez de passer en dessous",point:-6}]},{id:301,question:"A l'atterrissage une prise de vitesse est nécessaire en finale car",choices:[{choice:"en présence de vent le risque d'un gradient est propre à soudainement réduire ma vitesse relative",point:3},{choice:"les forces aérodynamiques augmentant au carré de la vitesse, elles favoriseront un freinage efficace",point:3},{choice:"les forces aérodynamiques n'ont pas une incidence directe sur la vitesse de vol",point:-6}]},{id:302,question:"Pour la délivrance d'une licence à un élève, le certificat médical présenté doit être de moins de",choices:[{choice:"1 an",point:-6},{choice:"3 mois",point:6},{choice:"6 mois",point:-6}]},{id:303,question:"Un Club-École Français de Vol Libre (C.E.F.V.L) est",choices:[{choice:"une entreprise privée indépendante de la F.F.V.L.",point:-6},{choice:"une association loi 1901 (sans but lucratif) affiliée à la F.F.V.L.",point:3},{choice:"contrôlé par les adhérents de l'association",point:3}]},{id:304,question:"Le sticker CEN apposé sur un parapente",choices:[{choice:"n'est pas obligatoire sur tous les exemplaires d'un modèle homologué",point:-6},{choice:"donne des indications sur le comportement de ce modèle dans certaines configurations de vol",point:2},{choice:"indique avec quel type de harnais ont été réalisés les essais",point:2},{choice:"permet de se faire une idée sur le niveau de pilotage demandé pour ce modèle",point:2}]},{id:305,question:"Votre demi aile gauche se ferme",choices:[{choice:"de retour au vol droit, si l'aile est toujours fermée, vous pouvez forcer sa réouverture par une action ample et non maintenue du frein gauche",point:2},{choice:"vous chargez la demi aile droite simultanément à la sellette et à la commande",point:2},{choice:"vous freinez à gauche pour forcer la réouverture",point:-6},{choice:'vous freinez du côté opposé pour stabiliser votre trajectoire en évitant le "surcontre"',point:2}]},{id:306,question:"Pour rouvrir les oreilles",choices:[{choice:"je libère les suspentes concernées et regarde le bon déroulement de leur réouverture",point:2},{choice:"si la réouverture ne s'est pas faite d'elle-même, j'applique des actions répétées et rapides de petites amplitudes jusqu'à l'obtention de la réouverture totale",point:-6},{choice:"il est recommandé de procéder demi/aile par demi/aile et de valider à chaque étape la présence du vent relatif",point:2},{choice:"si la réouverture ne s'est pas faite d'elle-même, j'abaisse, côté fermé, amplement et paisiblement ma commande pour la relâcher aussitôt",point:2}]},{id:307,question:"Le choix d'une voile est guidé par",choices:[{choice:"l'avis d'un vendeur spécialisé qui connaît le pilote",point:3},{choice:"le niveau d'accessibilité défini par la presse spécialisée",point:1},{choice:"la catégorie de la voile",point:2},{choice:"le niveau que le pilote veut atteindre",point:-6}]},{id:308,question:"En vol de pente une violente turbulence replie brutalement une demi-aile de votre parapente",choices:[{choice:'vous contrôlez votre départ en rotation tout en gardant une vitesse suffisante pour éviter un "sur contre"',point:6},{choice:"vous regardez la nature du terrain sous vos pieds et vous vous préparez éventuellement à un atterrissage de fortune",point:0},{choice:"vous relevez les bras et prenez un maximum de vitesse pour éviter le décrochage",point:-6},{choice:"vous tirez immédiatement sur le frein correspondant au côté fermé pour en forcer la réouverture",point:-6}]},{id:309,question:"L'emport du parachute de secours",choices:[{choice:"est vivement conseillé quelle que soit la forme de pratique et demande une information pour l'utilisation",point:3},{choice:"nécessite une autorisation d'utilisation",point:-3},{choice:"est obligatoire en compétition FFVL",point:3},{choice:"est obligatoire en sortie club",point:-3}]},{id:310,question:"Suite à une turbulence ou à une entrée de thermique mon aile cabre",choices:[{choice:"je réagis en bridant doucement mon aile",point:-6},{choice:"je me sens “partir” sur le dos",point:2},{choice:"je réagis en relevant brièvement mes mains puis les rabaisse si une abattée s'enchaîne",point:2},{choice:"mon aile est en train de perdre de la vitesse",point:2}]},{id:311,question:"La norme CEN E 926-1 et 2",choices:[{choice:"oblige le constructeur à conserver les caractéristiques techniques sur tous les exemplaires produits",point:3},{choice:"est valable quel que soit le harnais monté sur l'aile",point:-6},{choice:"certifie que tout parapente homologué est utilisable sans risque par n'importe quel pilote (y compris les débutants)",point:-6},{choice:"permet de se faire une idée du comportement de ce modèle",point:3}]},{id:312,question:"En vol, bras hauts, vos freins sont tendus et le bord de fuite est un peu abaissé",choices:[{choice:"c'est mieux pour le gonflage",point:-6},{choice:"ça améliore la finesse sans action sur les commandes",point:-6},{choice:"il faut rallonger et régler les freins pour le prochain vol",point:6},{choice:"cela n'a que peu d'influence sur l'aile",point:-6}]},{id:313,question:"Votre secours est ouvert, vous sentez la traction liée à son déploiement",choices:[{choice:"vous tirez sur un frein pour ramener la voile",point:-6},{choice:"vous regardez vers le bas pour estimer le lieux de l'atterrissage",point:2},{choice:`vous tirez les élévateurs "B" pour stabiliser l'ensemble`,point:2},{choice:"vous vous redressez et vous préparez à amortir le choc",point:2}]},{id:314,question:"En faisant les oreilles, vous",choices:[{choice:"diminuez la finesse/air",point:3},{choice:"augmentez la manœuvrabilité de l'aile",point:-6},{choice:"augmentez le taux de chute",point:3}]},{id:315,question:"Pour faire les oreilles",choices:[{choice:"je vérifie où aboutissent sur mon aile la sélection des suspentes que je dois tirer",point:3},{choice:"je regarde ma voile pour vérifier le bon déroulement de l'opération",point:3},{choice:"je n'oublie pas de préalablement me séparer des freins",point:-6}]},{id:316,question:"Vous êtes en finale face au terrain d'atterrissage ; vous vous apercevez que vous êtes un peu long et haut ; vous risquez de dépasser le terrain",choices:[{choice:"vous lâchez puis retirez les freins plusieurs fois pour secouer l'aile et casser la finesse",point:-6},{choice:"vous augmentez le trajet en faisant un petit S",point:6},{choice:"vous perdez de l'altitude en faisant des 360°",point:-6},{choice:"vous freinez progressivement votre aile jusqu'au point de parachutage",point:-6}]},{id:317,question:"Le gonflage face à la voile",choices:[{choice:"permet de décoller avec un vent supérieur à 30 km/h",point:-6},{choice:"permet de décoller avec des vents modérés à faibles",point:2},{choice:"permet de voir facilement les clefs dans les suspentes",point:2},{choice:"permet de contrôler sa voile facilement pendant qu'elle monte",point:2}]},{id:318,question:"Pour rester dans une ascendance dynamique près du relief",choices:[{choice:"vous volez à la vitesse minimum de l'aile",point:-6},{choice:"vous faites des 360° devant la pente",point:-6},{choice:"vous faites des 8 longs en tournant face au vent",point:6},{choice:"vous faites des 8 longs en tournant face à la pente",point:-6}]},{id:319,question:"Vous êtes dos au relief et votre voile se ferme à 40% sur la gauche ce qui la met en virage à gauche",choices:[{choice:'vous contrez à droite pour vous dégager du relief tout en évitant le "surcontre"',point:6},{choice:"vous freinez à gauche amplement pour regonfler le côté fermé",point:-6},{choice:"vous laissez faire si votre parapente est classé A de la norme CEN",point:-6},{choice:"vous freinez symétriquement des deux côtés",point:0}]},{id:320,question:"Au décollage, le vent est de travers 30°, 3m/s",choices:[{choice:"vous gonflez face à la ligne de pente la plus raide, temporisez, puis prenez de la vitesse en orientant progressivement votre course et votre aile face au vent",point:-6},{choice:"vous gonflez face au vent, temporisez, puis prenez de la vitesse en orientant progressivement votre course et votre aile dans l'axe de la plus grande pente",point:6},{choice:"vous gonflez dans l'axe de la plus grande pente, temporisez, puis accélérez en vous attendant à devoir freiner amplement juste avant de décoller",point:-6}]}]}),actions:{addReminder(t,e){console.log("iddoc: "+e.qcmId),e.id=t,this.qcms.find(n=>n.id===e.qcmId).reminder=e}},getters:{}}),rS={name:"QuestionParty",components:{QuestionFFVL:sS},data(){return{qcm:{question:"",choices:[{choice:"",point:0}]},playing:!1,hasAlreadyPlayed:!1,nbQuestions:5}},computed:{nbNonValidated(){return kn().qcms.filter(t=>!t.validated).length},nonAnswered(){return kn().qcms.filter(t=>!t.answered).length}},created(){this.$emit("loadReminder")},methods:{getNextQuestion(){if(this.playing&&kn().qcms.filter(t=>!t.validated).length==0)this.playing=!1,this.$emit("loadReminder");else{let t=kn().qcms.filter(n=>!n.validated),e=Math.floor(Math.random()*t.length);this.qcm=t[e]}},shuffleArray(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t},start(){let t=this.shuffleArray(Zv().qcms).slice(0,this.nbQuestions);t.forEach(function(e){e.answered=!1,e.validated=!1}),kn().setQCMs(t),this.getNextQuestion(),this.playing=!0,this.hasAlreadyPlayed=!0},replay(){kn().qcms.forEach(function(t){t.answered=!1,t.validated=!1}),this.playing=!0,this.getNextQuestion()}}},oS={key:0},aS=ht("span",null,"Nb Question : ",-1),cS=ht("option",null,"2",-1),lS=ht("option",null,"5",-1),uS=ht("option",null,"10",-1),hS=ht("option",null,"20",-1),dS=[cS,lS,uS,hS],fS={key:1},pS=ht("span",null,"Non validé : ",-1),mS=ht("span",null,"Non répondu : ",-1);function gS(t,e,n,i,s,r){const o=OT("QuestionFFVL");return _t(),Tt("div",null,[s.playing?ii("",!0):(_t(),Tt("div",oS,[aS,Gm(ht("select",{"onUpdate:modelValue":e[0]||(e[0]=a=>s.nbQuestions=a)},dS,512),[[t0,s.nbQuestions]]),ht("button",{onClick:e[1]||(e[1]=(...a)=>r.start&&r.start(...a))},"Start"),s.hasAlreadyPlayed?(_t(),Tt("button",{key:0,onClick:e[2]||(e[2]=(...a)=>r.replay&&r.replay(...a))},"Replay")):ii("",!0)])),s.playing?(_t(),Tt("div",fS,[pS,Yo(zi(r.nbNonValidated)+" ",1),mS,Yo(zi(r.nonAnswered)+" ",1),Lt(o,{qcm:s.qcm,onGetNextQuestion:r.getNextQuestion},null,8,["qcm","onGetNextQuestion"])])):ii("",!0)])}const _S=Jv(rS,[["render",gS]]);const vS={class:"mainframe"},yS={__name:"App",setup(t){async function e(){(await Yv(DR(wu,"QcmReminder"))).forEach(i=>{Zv().addReminder(i.id,i.data())})}return(n,i)=>(_t(),Tt("div",vS,[Lt(_S,{onLoadReminder:e})]))}};function ey(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function ty(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ES=ty,ny=new ws("auth","Firebase",ty());/**
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
 */const va=new Br("@firebase/auth");function TS(t,...e){va.logLevel<=J.WARN&&va.warn(`Auth (${bs}): ${t}`,...e)}function $o(t,...e){va.logLevel<=J.ERROR&&va.error(`Auth (${bs}): ${t}`,...e)}/**
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
 */function fp(t,...e){throw Hh(t,...e)}function iy(t,...e){return Hh(t,...e)}function IS(t,e,n){const i=Object.assign(Object.assign({},ES()),{[e]:n});return new ws("auth","Firebase",i).create(e,{appName:t.name})}function Hh(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return ny.create(t,...e)}function le(t,e,...n){if(!t)throw Hh(e,...n)}function cr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $o(e),new Error(e)}function ya(t,e){t||cr(e)}function wS(){return pp()==="http:"||pp()==="https:"}function pp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function bS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wS()||A0()||"connection"in navigator)?navigator.onLine:!0}function AS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class oo{constructor(e,n){this.shortDelay=e,this.longDelay=n,ya(n>e,"Short delay should be less than long delay!"),this.isMobile=Hu()||wg()}get(){return bS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function CS(t,e){ya(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class sy{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;cr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;cr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;cr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const RS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const SS=new oo(3e4,6e4);function ry(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function bc(t,e,n,i,s={}){return oy(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Ku(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),sy.fetch()(ay(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function oy(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},RS),e);try{const s=new PS(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw No(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw No(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw No(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw No(t,"user-disabled",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw IS(t,u,l);fp(t,u)}}catch(s){if(s instanceof bn)throw s;fp(t,"network-request-failed",{message:String(s)})}}function ay(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?CS(t.config,s):`${t.config.apiScheme}://${s}`}class PS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(iy(this.auth,"network-request-failed")),SS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function No(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=iy(t,e,i);return s.customData._tokenResponse=n,s}/**
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
 */async function NS(t,e){return bc(t,"POST","/v1/accounts:delete",e)}async function kS(t,e){return bc(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function lr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xS(t,e=!1){const n=Mt(t),i=await n.getIdToken(e),s=cy(i);le(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:lr(tl(s.auth_time)),issuedAtTime:lr(tl(s.iat)),expirationTime:lr(tl(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function tl(t){return Number(t)*1e3}function cy(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return $o("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zo(n);return s?JSON.parse(s):($o("Failed to decode base64 JWT payload"),null)}catch(s){return $o("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function DS(t){const e=cy(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function nu(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof bn&&OS(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function OS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class LS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ly{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=lr(this.lastLoginAt),this.creationTime=lr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ea(t){var e;const n=t.auth,i=await t.getIdToken(),s=await nu(t,kS(n,{idToken:i}));le(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?qS(r.providerUserInfo):[],a=MS(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ly(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function VS(t){const e=Mt(t);await Ea(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MS(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function qS(t){return t.map(e=>{var{providerId:n}=e,i=ey(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function FS(t,e){const n=await oy(t,{},async()=>{const i=Ku({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=ay(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sy.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function US(t,e){return bc(t,"POST","/v2/accounts:revokeToken",ry(t,e))}/**
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
 */class qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):DS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return le(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await FS(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new qr;return i&&(le(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(le(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(le(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qr,this.toJSON())}_performRefresh(){return cr("not implemented")}}/**
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
 */function Sn(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ji{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=ey(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new LS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ly(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await nu(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return xS(this,e)}reload(){return VS(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ji(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Ea(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await nu(this,NS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,c,l,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,x=(l=n.createdAt)!==null&&l!==void 0?l:void 0,V=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:A,isAnonymous:H,providerData:ce,stsTokenManager:pe}=n;le(k&&pe,e,"internal-error");const j=qr.fromJSON(this.name,pe);le(typeof k=="string",e,"internal-error"),Sn(h,e.name),Sn(d,e.name),le(typeof A=="boolean",e,"internal-error"),le(typeof H=="boolean",e,"internal-error"),Sn(p,e.name),Sn(g,e.name),Sn(_,e.name),Sn(y,e.name),Sn(x,e.name),Sn(V,e.name);const Y=new Ji({uid:k,auth:e,email:d,emailVerified:A,displayName:h,isAnonymous:H,photoURL:g,phoneNumber:p,tenantId:_,stsTokenManager:j,createdAt:x,lastLoginAt:V});return ce&&Array.isArray(ce)&&(Y.providerData=ce.map(ve=>Object.assign({},ve))),y&&(Y._redirectEventId=y),Y}static async _fromIdTokenResponse(e,n,i=!1){const s=new qr;s.updateFromServerResponse(n);const r=new Ji({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Ea(r),r}}/**
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
 */const mp=new Map;function ai(t){ya(t instanceof Function,"Expected a class definition");let e=mp.get(t);return e?(ya(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mp.set(t,e),e)}/**
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
 */class uy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}uy.type="NONE";const gp=uy;/**
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
 */function nl(t,e,n){return`firebase:${t}:${e}:${n}`}class Zi{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=nl(this.userKey,s.apiKey,r),this.fullPersistenceKey=nl("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ji._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Zi(ai(gp),e,i);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||ai(gp);const o=nl(i,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Ji._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Zi(r,e,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new Zi(r,e,i))}}/**
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
 */function _p(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($S(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(HS(e))return"Blackberry";if(KS(e))return"Webos";if(jS(e))return"Safari";if((e.includes("chrome/")||BS(e))&&!e.includes("edge/"))return"Chrome";if(WS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function zS(t=sn()){return/firefox\//i.test(t)}function jS(t=sn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function BS(t=sn()){return/crios\//i.test(t)}function $S(t=sn()){return/iemobile/i.test(t)}function WS(t=sn()){return/android/i.test(t)}function HS(t=sn()){return/blackberry/i.test(t)}function KS(t=sn()){return/webos/i.test(t)}/**
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
 */function hy(t,e=[]){let n;switch(t){case"Browser":n=_p(sn());break;case"Worker":n=`${_p(sn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bs}/${i}`}/**
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
 */class GS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function QS(t,e={}){return bc(t,"GET","/v2/passwordPolicy",ry(t,e))}/**
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
 */const YS=6;class XS{constructor(e){var n,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:YS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class JS{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vp(this),this.idTokenSubscription=new vp(this),this.beforeStateQueue=new GS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ny,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ai(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Zi.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ea(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Mt(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ai(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await QS(this),n=new XS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ws("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await US(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ai(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await Zi.create(this,[ai(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,i,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&TS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ZS(t){return Mt(t)}class vp{constructor(e){this.auth=e,this.observer=null,this.addObserver=D0(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function eP(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ai);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}new oo(3e4,6e4);/**
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
 */new oo(2e3,1e4);/**
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
 */new oo(3e4,6e4);/**
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
 */new oo(5e3,15e3);var yp="@firebase/auth",Ep="1.4.0";/**
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
 */class tP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function iP(t){rn(new qt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hy(t)},l=new JS(i,s,r,c);return eP(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),rn(new qt("auth-internal",e=>{const n=ZS(e.getProvider("auth").getImmediate());return(i=>new tP(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vt(yp,Ep,nP(t)),vt(yp,Ep,"esm2017")}/**
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
 */const sP=5*60;w0("authIdTokenMaxAge");iP("Browser");/**
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
 */const rP=new Map,oP={activated:!1,tokenObservers:[]};function Ut(t){return rP.get(t)||Object.assign({},oP)}const Tp={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class aP{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Tr,await cP(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Tr,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function cP(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const lP={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Ta=new ws("appCheck","AppCheck",lP);function dy(t){if(!Ut(t).activated)throw Ta.create("use-before-activation",{appName:t.name})}/**
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
 */const uP="firebase-app-check-database",hP=1,iu="firebase-app-check-store";let ko=null;function dP(){return ko||(ko=new Promise((t,e)=>{try{const n=indexedDB.open(uP,hP);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(Ta.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(iu,{keyPath:"compositeKey"})}}}catch(n){e(Ta.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ko)}function fP(t,e){return pP(mP(t),e)}async function pP(t,e){const i=(await dP()).transaction(iu,"readwrite"),r=i.objectStore(iu).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=c=>{o()},i.onerror=c=>{var l;a(Ta.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function mP(t){return`${t.options.appId}-${t.name}`}/**
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
 */const su=new Br("@firebase/app-check");function Ip(t,e){return Ag()?fP(t,e).catch(n=>{su.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const gP={error:"UNKNOWN_ERROR"};function _P(t){return Ka.encodeString(JSON.stringify(t),!1)}async function ru(t,e=!1){const n=t.app;dy(n);const i=Ut(n);let s=i.token,r;if(s&&!Js(s)&&(i.token=void 0,s=void 0),!s){const c=await i.cachedTokenPromise;c&&(Js(c)?s=c:await Ip(n,void 0))}if(!e&&s&&Js(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await Ut(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?su.warn(c.message):su.error(c),r=c}let a;return s?r?Js(s)?a={token:s.token,internalError:r}:a=bp(r):(a={token:s.token},i.token=s,await Ip(n,s)):a=bp(r),o&&TP(n,a),a}async function vP(t){const e=t.app;dy(e);const{provider:n}=Ut(e);{const{token:i}=await n.getToken();return{token:i}}}function yP(t,e,n,i){const{app:s}=t,r=Ut(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Js(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),wp(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>wp(t))}function fy(t,e){const n=Ut(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function wp(t){const{app:e}=t,n=Ut(e);let i=n.tokenRefresher;i||(i=EP(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function EP(t){const{app:e}=t;return new aP(async()=>{const n=Ut(e);let i;if(n.token?i=await ru(t,!0):i=await ru(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=Ut(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},Tp.RETRIAL_MIN_WAIT,Tp.RETRIAL_MAX_WAIT)}function TP(t,e){const n=Ut(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function Js(t){return t.expireTimeMillis-Date.now()>0}function bp(t){return{token:_P(gP),error:t}}/**
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
 */class IP{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Ut(this.app);for(const n of e)fy(this.app,n.next);return Promise.resolve()}}function wP(t,e){return new IP(t,e)}function bP(t){return{getToken:e=>ru(t,e),getLimitedUseToken:()=>vP(t),addTokenListener:e=>yP(t,"INTERNAL",e),removeTokenListener:e=>fy(t.app,e)}}const AP="@firebase/app-check",CP="0.8.0",RP="app-check",Ap="app-check-internal";function SP(){rn(new qt(RP,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return wP(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Ap).initialize()})),rn(new qt(Ap,t=>{const e=t.getProvider("app-check").getImmediate();return bP(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),vt(AP,CP)}SP();var PP="firebase",NP="10.6.0";/**
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
 */vt(PP,NP,"app");const py=Symbol("firebaseApp");function Kh(t){return ju()&&hi(py,null)||Ng(t)}const Xt=()=>{};function Gh(t,e){return e.split(".").reduce((n,i)=>n&&n[i],t)}function kP(t,e,n){const i=(""+e).split("."),s=i.pop(),r=i.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(s),1,n):r[s]=n}function Si(t){return!!t&&typeof t=="object"}const xP=Object.prototype;function DP(t){return Si(t)&&Object.getPrototypeOf(t)===xP}function Qh(t){return Si(t)&&t.type==="document"}function OP(t){return Si(t)&&t.type==="collection"}function LP(t){return Qh(t)||OP(t)}function VP(t){return Si(t)&&t.type==="query"}function MP(t){return Si(t)&&"ref"in t}function qP(t){return Si(t)&&typeof t.bucket=="string"}function FP(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const UP=Symbol.for("v-scx");function zP(){return ju(),!!hi(UP,0)}const xo=new WeakMap;function jP(t,e){if(!xo.has(t)){const n=Va(!0);xo.set(t,n);const{unmount:i}=e;e.unmount=()=>{i.call(e),n.stop(),xo.delete(t)}}return xo.get(t)}const Cp="@firebase/database",Rp="1.0.1";/**
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
 */let my="";function BP(t){my=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),We(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ir(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return An(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new $P(e)}}catch{}return new WP},ci=gy("localStorage"),ou=gy("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new Br("@firebase/database"),HP=function(){let t=1;return function(){return t++}}(),_y=function(t){const e=M0(t),n=new x0;n.update(e);const i=n.digest();return Ka.encodeByteArray(i)},ao=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=ao.apply(null,i):typeof i=="object"?e+=We(i):e+=i,e+=" "}return e};let pi=null,Sp=!0;const KP=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(es.logLevel=J.VERBOSE,pi=es.log.bind(es),e&&ou.set("logging_enabled",!0)):typeof t=="function"?pi=t:(pi=null,ou.remove("logging_enabled"))},Je=function(...t){if(Sp===!0&&(Sp=!1,pi===null&&ou.get("logging_enabled")===!0&&KP(!0)),pi){const e=ao.apply(null,t);pi(e)}},co=function(t){return function(...e){Je(t,...e)}},au=function(...t){const e="FIREBASE INTERNAL ERROR: "+ao(...t);es.error(e)},Ti=function(...t){const e=`FIREBASE FATAL ERROR: ${ao(...t)}`;throw es.error(e),new Error(e)},yt=function(...t){const e="FIREBASE WARNING: "+ao(...t);es.warn(e)},GP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&yt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},vy=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},QP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},gs="[MIN_NAME]",Ii="[MAX_NAME]",ks=function(t,e){if(t===e)return 0;if(t===gs||e===Ii)return-1;if(e===gs||t===Ii)return 1;{const n=Pp(t),i=Pp(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},YP=function(t,e){return t===e?0:t<e?-1:1},Us=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+We(e))},Yh=function(t){if(typeof t!="object"||t===null)return We(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=We(e[i]),n+=":",n+=Yh(t[e[i]]);return n+="}",n},yy=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function At(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ey=function(t){P(!vy(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,c;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(s?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},XP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},JP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},ZP=new RegExp("^-?(0*)\\d{1,10}$"),eN=-2147483648,tN=2147483647,Pp=function(t){if(ZP.test(t)){const e=Number(t);if(e>=eN&&e<=tN)return e}return null},lo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw yt("Exception was thrown by user callback.",n),e},Math.floor(0))}},nN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ur=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class iN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){yt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',yt(e)}}class cu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}cu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh="5",Ty="v",Iy="s",wy="r",by="f",Ay=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Cy="ls",Ry="p",lu="ac",Sy="websocket",Py="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e,n,i,s,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ci.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ci.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function oN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ny(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let i;if(e===Sy)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Py)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);oN(t)&&(n.ns=t.namespace);const s=[];return At(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(){this.counters_={}}incrementCounter(e,n=1){An(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return m0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il={},sl={};function Jh(t){const e=t.toString();return il[e]||(il[e]=new aN),il[e]}function cN(t,e){const n=t.toString();return sl[n]||(sl[n]=e()),sl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&lo(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np="start",uN="close",hN="pLPCommand",dN="pRTLPCB",ky="id",xy="pw",Dy="ser",fN="cb",pN="seg",mN="ts",gN="d",_N="dframe",Oy=1870,Ly=30,vN=Oy-Ly,yN=25e3,EN=3e4;class Bi{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=co(e),this.stats_=Jh(n),this.urlFn=c=>(this.appCheckToken&&(c[lu]=this.appCheckToken),Ny(n,Py,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new lN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(EN)),QP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Zh((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Np)this.id=a,this.password=c;else if(o===uN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Np]="t",i[Dy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[fN]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Ty]=Xh,this.transportSessionId&&(i[Iy]=this.transportSessionId),this.lastSessionId&&(i[Cy]=this.lastSessionId),this.applicationId&&(i[Ry]=this.applicationId),this.appCheckToken&&(i[lu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ay.test(location.hostname)&&(i[wy]=by);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Bi.forceAllow_=!0}static forceDisallow(){Bi.forceDisallow_=!0}static isAvailable(){return Bi.forceAllow_?!0:!Bi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!XP()&&!JP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=We(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Eg(n),s=yy(i,vN);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[_N]="t",i[ky]=e,i[xy]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=We(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Zh{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=HP(),window[hN+this.uniqueCallbackIdentifier]=e,window[dN+this.uniqueCallbackIdentifier]=n,this.myIFrame=Zh.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Je("frame writing exception"),a.stack&&Je(a.stack),Je(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Je("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ky]=this.myID,e[xy]=this.myPW,e[Dy]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ly+i.length<=Oy;){const o=this.pendingSegs.shift();i=i+"&"+pN+s+"="+o.seg+"&"+mN+s+"="+o.ts+"&"+gN+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(yN)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=16384,IN=45e3;let Ia=null;typeof MozWebSocket<"u"?Ia=MozWebSocket:typeof WebSocket<"u"&&(Ia=WebSocket);class St{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=co(this.connId),this.stats_=Jh(n),this.connURL=St.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[Ty]=Xh,typeof location<"u"&&location.hostname&&Ay.test(location.hostname)&&(o[wy]=by),n&&(o[Iy]=n),i&&(o[Cy]=i),s&&(o[lu]=s),r&&(o[Ry]=r),Ny(e,Sy,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ci.set("previous_websocket_failure",!0);try{let i;bg(),this.mySock=new Ia(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){St.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Ia!==null&&!St.forceDisallow_}static previouslyFailed(){return ci.isInMemoryStorage||ci.get("previous_websocket_failure")===!0}markConnectionHealthy(){ci.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Ir(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=We(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=yy(n,TN);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(IN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}St.responsesRequiredToBeHealthy=2;St.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Bi,St]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=St&&St.isAvailable();let i=n&&!St.previouslyFailed();if(e.webSocketOnly&&(n||yt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[St];else{const s=this.transports_=[];for(const r of Fr.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Fr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Fr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=6e4,bN=5e3,AN=10*1024,CN=100*1024,rl="t",kp="d",RN="s",xp="r",SN="e",Dp="o",Op="a",Lp="n",Vp="p",PN="h";class NN{constructor(e,n,i,s,r,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=co("c:"+this.id+":"),this.transportManager_=new Fr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ur(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>CN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>AN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(rl in e){const n=e[rl];n===Op?this.upgradeIfSecondaryHealthy_():n===xp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Dp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Us("t",e),i=Us("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Vp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Op,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Lp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Us("t",e),i=Us("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Us(rl,e);if(kp in e){const i=e[kp];if(n===PN){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Lp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===RN?this.onConnectionShutdown_(i):n===xp?this.onReset_(i):n===SN?au("Server Error: "+i):n===Dp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):au("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Xh!==i&&yt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),ur(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(wN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ur(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Vp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ci.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa extends My{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Hu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new wa}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=32,qp=768;class be{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function fe(){return new be("")}function ne(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Wn(t){return t.pieces_.length-t.pieceNum_}function Te(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new be(t.pieces_,e)}function qy(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function kN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Fy(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Uy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new be(e,0)}function Ue(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof be)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new be(n,0)}function ee(t){return t.pieceNum_>=t.pieces_.length}function bt(t,e){const n=ne(t),i=ne(e);if(n===null)return e;if(n===i)return bt(Te(t),Te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function zy(t,e){if(Wn(t)!==Wn(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function kt(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Wn(t)>Wn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class xN{constructor(e,n){this.errorPrefix_=n,this.parts_=Fy(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ga(this.parts_[i]);jy(this)}}function DN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ga(e),jy(t)}function ON(t){const e=t.parts_.pop();t.byteLength_-=Ga(e),t.parts_.length>0&&(t.byteLength_-=1)}function jy(t){if(t.byteLength_>qp)throw new Error(t.errorPrefix_+"has a key path longer than "+qp+" bytes ("+t.byteLength_+").");if(t.parts_.length>Mp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Mp+") or object contains a cycle "+Zn(t))}function Zn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed extends My{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new ed}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=1e3,LN=60*5*1e3,Fp=30*1e3,VN=1.3,MN=3e4,qN="server_kill",Up=3;class yn extends Vy{constructor(e,n,i,s,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=yn.nextPersistentConnectionId_++,this.log_=co("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zs,this.maxReconnectDelay_=LN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!bg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ed.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&wa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(We(r)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Tr,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;yn.warnOnListenWarnings_(c,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&An(e,"w")){const i=os(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();yt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||k0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Fp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=N0(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+We(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):au("Unrecognized action received from server: "+We(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=zs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>MN&&(this.reconnectDelay_=zs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*VN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+yn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(h){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Je("getToken() completed but was canceled"):(Je("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new NN(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,p=>{yt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(qN)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&yt(h),c())}}}interrupt(e){Je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],af(this.interruptReasons_)&&(this.reconnectDelay_=zs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Yh(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new be(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){Je("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Up&&(this.reconnectDelay_=Fp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Je("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Up&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+my.replace(/\./g,"-")]=1,Hu()?e["framework.cordova"]=1:wg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=wa.getInstance().currentlyOnline();return af(this.interruptReasons_)&&e}}yn.nextPersistentConnectionId_=0;yn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ie(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new ie(gs,e),s=new ie(gs,n);return this.compare(i,s)!==0}minPost(){return ie.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Do;class By extends Ac{static get __EMPTY_NODE(){return Do}static set __EMPTY_NODE(e){Do=e}compare(e,n){return ks(e.name,n.name)}isDefinedOn(e){throw Is("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ie.MIN}maxPost(){return new ie(Ii,Do)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new ie(e,Do)}toString(){return".key"}}const ts=new By;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Fe{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Fe.RED,this.left=s??ut.EMPTY_NODE,this.right=r??ut.EMPTY_NODE}copy(e,n,i,s,r){return new Fe(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ut.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return ut.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Fe.RED=!0;Fe.BLACK=!1;class FN{copy(e,n,i,s,r){return this}insert(e,n,i){return new Fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ut{constructor(e,n=ut.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ut(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Fe.BLACK,null,null))}remove(e){return new ut(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Fe.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Oo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Oo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Oo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Oo(this.root_,null,this.comparator_,!0,e)}}ut.EMPTY_NODE=new FN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UN(t,e){return ks(t.name,e.name)}function td(t,e){return ks(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uu;function zN(t){uu=t}const $y=function(t){return typeof t=="number"?"number:"+Ey(t):"string:"+t},Wy=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&An(e,".sv"),"Priority must be a string or number.")}else P(t===uu||t.isEmpty(),"priority of unexpected type.");P(t===uu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zp;class Me{constructor(e,n=Me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Wy(this.priorityNode_)}static set __childrenNodeConstructor(e){zp=e}static get __childrenNodeConstructor(){return zp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ee(e)?this:ne(e)===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=ne(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(P(i!==".priority"||Wn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Me.__childrenNodeConstructor.EMPTY_NODE.updateChild(Te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+$y(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ey(this.value_):e+=this.value_,this.lazyHash_=_y(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Me.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=Me.VALUE_TYPE_ORDER.indexOf(n),r=Me.VALUE_TYPE_ORDER.indexOf(i);return P(s>=0,"Unknown leaf type: "+n),P(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hy,Ky;function jN(t){Hy=t}function BN(t){Ky=t}class $N extends Ac{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?ks(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ie.MIN}maxPost(){return new ie(Ii,new Me("[PRIORITY-POST]",Ky))}makePost(e,n){const i=Hy(e);return new ie(n,new Me("[PRIORITY-POST]",i))}toString(){return".priority"}}const tt=new $N;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN=Math.log(2);class HN{constructor(e){const n=r=>parseInt(Math.log(r)/WN,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ba=function(t,e,n,i){t.sort(e);const s=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=t[c],d=n?n(h):h,new Fe(d,h.node,Fe.BLACK,null,null);{const p=parseInt(u/2,10)+c,g=s(c,p),_=s(p+1,l);return h=t[p],d=n?n(h):h,new Fe(d,h.node,Fe.BLACK,g,_)}},r=function(c){let l=null,u=null,h=t.length;const d=function(g,_){const y=h-g,x=h;h-=g;const V=s(y+1,x),k=t[y],A=n?n(k):k;p(new Fe(A,k.node,_,null,V))},p=function(g){l?(l.left=g,l=g):(u=g,l=g)};for(let g=0;g<c.count;++g){const _=c.nextBitIsOne(),y=Math.pow(2,c.count-(g+1));_?d(y,Fe.BLACK):(d(y,Fe.BLACK),d(y,Fe.RED))}return u},o=new HN(t.length),a=r(o);return new ut(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ol;const Mi={};class mn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(Mi&&tt,"ChildrenNode.ts has not been loaded"),ol=ol||new mn({".priority":Mi},{".priority":tt}),ol}get(e){const n=os(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ut?n:null}hasIndex(e){return An(this.indexSet_,e.toString())}addIndex(e,n){P(e!==ts,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(ie.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=ba(i,e.getCompare()):a=Mi;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new mn(u,l)}addToIndexes(e,n){const i=ea(this.indexes_,(s,r)=>{const o=os(this.indexSet_,r);if(P(o,"Missing index implementation for "+r),s===Mi)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(ie.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),ba(a,o.getCompare())}else return Mi;else{const a=n.get(e.name);let c=s;return a&&(c=c.remove(new ie(e.name,a))),c.insert(e,e.node)}});return new mn(i,this.indexSet_)}removeFromIndexes(e,n){const i=ea(this.indexes_,s=>{if(s===Mi)return s;{const r=n.get(e.name);return r?s.remove(new ie(e.name,r)):s}});return new mn(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let js;class ae{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Wy(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return js||(js=new ae(new ut(td),null,mn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||js}updatePriority(e){return this.children_.isEmpty()?this:new ae(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?js:n}}getChild(e){const n=ne(e);return n===null?this:this.getImmediateChild(n).getChild(Te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new ie(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?js:this.priorityNode_;return new ae(s,o,r)}}updateChild(e,n){const i=ne(e);if(i===null)return n;{P(ne(e)!==".priority"||Wn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(Te(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(tt,(o,a)=>{n[o]=a.val(e),i++,r&&ae.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+$y(this.getPriority().val())+":"),this.forEachChild(tt,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":_y(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new ie(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ie(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ie(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ie.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ie.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===uo?-1:0}withIndex(e){if(e===ts||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ae(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ts||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(tt),s=n.getIterator(tt);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ts?null:this.indexMap_.get(e.toString())}}ae.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class KN extends ae{constructor(){super(new ut(td),ae.EMPTY_NODE,mn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ae.EMPTY_NODE}isEmpty(){return!1}}const uo=new KN;Object.defineProperties(ie,{MIN:{value:new ie(gs,ae.EMPTY_NODE)},MAX:{value:new ie(Ii,uo)}});By.__EMPTY_NODE=ae.EMPTY_NODE;Me.__childrenNodeConstructor=ae;zN(uo);BN(uo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN=!0;function Ze(t,e=null){if(t===null)return ae.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Me(n,Ze(e))}if(!(t instanceof Array)&&GN){const n=[];let i=!1;if(At(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=Ze(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),n.push(new ie(o,c)))}}),n.length===0)return ae.EMPTY_NODE;const r=ba(n,UN,o=>o.name,td);if(i){const o=ba(n,tt.getCompare());return new ae(r,Ze(e),new mn({".priority":o},{".priority":tt}))}else return new ae(r,Ze(e),mn.Default)}else{let n=ae.EMPTY_NODE;return At(t,(i,s)=>{if(An(t,i)&&i.substring(0,1)!=="."){const r=Ze(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(Ze(e))}}jN(Ze);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN extends Ac{constructor(e){super(),this.indexPath_=e,P(!ee(e)&&ne(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?ks(e.name,n.name):r}makePost(e,n){const i=Ze(e),s=ae.EMPTY_NODE.updateChild(this.indexPath_,i);return new ie(n,s)}maxPost(){const e=ae.EMPTY_NODE.updateChild(this.indexPath_,uo);return new ie(Ii,e)}toString(){return Fy(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN extends Ac{compare(e,n){const i=e.node.compareTo(n.node);return i===0?ks(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ie.MIN}maxPost(){return ie.MAX}makePost(e,n){const i=Ze(e);return new ie(n,i)}toString(){return".value"}}const XN=new YN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(t){return{type:"value",snapshotNode:t}}function ZN(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function e1(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function jp(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function t1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=tt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:gs}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ii}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===tt}copy(){const e=new nd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Bp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===tt?n="$priority":t.index_===XN?n="$value":t.index_===ts?n="$key":(P(t.index_ instanceof QN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=We(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=We(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+We(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=We(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+We(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function $p(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==tt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends Vy{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=co("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Aa.getListenId_(e,i),a={};this.listens_[o]=a;const c=Bp(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,i),os(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",s(d,null)}})}unlisten(e,n){const i=Aa.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Bp(e._queryParams),i=e._path.toString(),s=new Tr;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ku(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Ir(a.responseText)}catch{yt("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&yt("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(){this.rootNode_=ae.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(){return{value:null,children:new Map}}function Gy(t,e,n){if(ee(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=ne(e);t.children.has(i)||t.children.set(i,Ca());const s=t.children.get(i);e=Te(e),Gy(s,e,n)}}function hu(t,e,n){t.value!==null?n(e,t.value):i1(t,(i,s)=>{const r=new be(e.toString()+"/"+i);hu(s,r,n)})}function i1(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&At(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=10*1e3,r1=30*1e3,o1=5*60*1e3;class a1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new s1(e);const i=Wp+(r1-Wp)*Math.random();ur(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;At(e,(s,r)=>{r>0&&An(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),ur(this.reportStats_.bind(this),Math.floor(Math.random()*2*o1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Jt||(Jt={}));function Qy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Yy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Xy(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Jt.ACK_USER_WRITE,this.source=Qy()}operationForChild(e){if(ee(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new be(e));return new Ra(fe(),n,this.revert)}}else return P(ne(this.path)===e,"operationForChild called for unrelated child."),new Ra(Te(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Jt.OVERWRITE}operationForChild(e){return ee(this.path)?new wi(this.source,fe(),this.snap.getImmediateChild(e)):new wi(this.source,Te(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Jt.MERGE}operationForChild(e){if(ee(this.path)){const n=this.children.subtree(new be(e));return n.isEmpty()?null:n.value?new wi(this.source,fe(),n.value):new Ur(this.source,fe(),n)}else return P(ne(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ur(this.source,Te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ee(e))return this.isFullyInitialized()&&!this.filtered_;const n=ne(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function c1(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(t1(o.childName,o.snapshotNode))}),Bs(t,s,"child_removed",e,i,n),Bs(t,s,"child_added",e,i,n),Bs(t,s,"child_moved",r,i,n),Bs(t,s,"child_changed",e,i,n),Bs(t,s,"value",e,i,n),s}function Bs(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,c)=>u1(t,a,c)),o.forEach(a=>{const c=l1(t,a,r);s.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function l1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function u1(t,e,n){if(e.childName==null||n.childName==null)throw Is("Should only compare child_ events.");const i=new ie(e.childName,e.snapshotNode),s=new ie(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(t,e){return{eventCache:t,serverCache:e}}function hr(t,e,n,i){return Jy(new id(e,n,i),t.serverCache)}function Zy(t,e,n,i){return Jy(t.eventCache,new id(e,n,i))}function du(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function bi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let al;const h1=()=>(al||(al=new ut(YP)),al);class ye{constructor(e,n=h1()){this.value=e,this.children=n}static fromObject(e){let n=new ye(null);return At(e,(i,s)=>{n=n.set(new be(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:fe(),value:this.value};if(ee(e))return null;{const i=ne(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(Te(e),n);return r!=null?{path:Ue(new be(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ee(e))return this;{const n=ne(e),i=this.children.get(n);return i!==null?i.subtree(Te(e)):new ye(null)}}set(e,n){if(ee(e))return new ye(n,this.children);{const i=ne(e),r=(this.children.get(i)||new ye(null)).set(Te(e),n),o=this.children.insert(i,r);return new ye(this.value,o)}}remove(e){if(ee(e))return this.children.isEmpty()?new ye(null):new ye(null,this.children);{const n=ne(e),i=this.children.get(n);if(i){const s=i.remove(Te(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new ye(null):new ye(this.value,r)}else return this}}get(e){if(ee(e))return this.value;{const n=ne(e),i=this.children.get(n);return i?i.get(Te(e)):null}}setTree(e,n){if(ee(e))return n;{const i=ne(e),r=(this.children.get(i)||new ye(null)).setTree(Te(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new ye(this.value,o)}}fold(e){return this.fold_(fe(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Ue(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,fe(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(ee(e))return null;{const r=ne(e),o=this.children.get(r);return o?o.findOnPath_(Te(e),Ue(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,fe(),n)}foreachOnPath_(e,n,i){if(ee(e))return this;{this.value&&i(n,this.value);const s=ne(e),r=this.children.get(s);return r?r.foreachOnPath_(Te(e),Ue(n,s),i):new ye(null)}}foreach(e){this.foreach_(fe(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(Ue(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.writeTree_=e}static empty(){return new Vt(new ye(null))}}function dr(t,e,n){if(ee(e))return new Vt(new ye(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=bt(s,e);return r=r.updateChild(o,n),new Vt(t.writeTree_.set(s,r))}else{const s=new ye(n),r=t.writeTree_.setTree(e,s);return new Vt(r)}}}function Hp(t,e,n){let i=t;return At(n,(s,r)=>{i=dr(i,Ue(e,s),r)}),i}function Kp(t,e){if(ee(e))return Vt.empty();{const n=t.writeTree_.setTree(e,new ye(null));return new Vt(n)}}function fu(t,e){return Pi(t,e)!=null}function Pi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(bt(n.path,e)):null}function Gp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(tt,(i,s)=>{e.push(new ie(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new ie(i,s.value))}),e}function Un(t,e){if(ee(e))return t;{const n=Pi(t,e);return n!=null?new Vt(new ye(n)):new Vt(t.writeTree_.subtree(e))}}function pu(t){return t.writeTree_.isEmpty()}function _s(t,e){return eE(fe(),t.writeTree_,e)}function eE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(P(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=eE(Ue(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Ue(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(t,e){return oE(e,t)}function d1(t,e,n,i,s){P(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=dr(t.visibleWrites,e,n)),t.lastWriteId=i}function f1(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function p1(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&m1(a,i.path)?s=!1:kt(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return g1(t),!0;if(i.snap)t.visibleWrites=Kp(t.visibleWrites,i.path);else{const a=i.children;At(a,c=>{t.visibleWrites=Kp(t.visibleWrites,Ue(i.path,c))})}return!0}else return!1}function m1(t,e){if(t.snap)return kt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&kt(Ue(t.path,n),e))return!0;return!1}function g1(t){t.visibleWrites=nE(t.allWrites,_1,fe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function _1(t){return t.visible}function nE(t,e,n){let i=Vt.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)kt(n,o)?(a=bt(n,o),i=dr(i,a,r.snap)):kt(o,n)&&(a=bt(o,n),i=dr(i,fe(),r.snap.getChild(a)));else if(r.children){if(kt(n,o))a=bt(n,o),i=Hp(i,a,r.children);else if(kt(o,n))if(a=bt(o,n),ee(a))i=Hp(i,fe(),r.children);else{const c=os(r.children,ne(a));if(c){const l=c.getChild(Te(a));i=dr(i,fe(),l)}}}else throw Is("WriteRecord should have .snap or .children")}}return i}function iE(t,e,n,i,s){if(!i&&!s){const r=Pi(t.visibleWrites,e);if(r!=null)return r;{const o=Un(t.visibleWrites,e);if(pu(o))return n;if(n==null&&!fu(o,fe()))return null;{const a=n||ae.EMPTY_NODE;return _s(o,a)}}}else{const r=Un(t.visibleWrites,e);if(!s&&pu(r))return n;if(!s&&n==null&&!fu(r,fe()))return null;{const o=function(l){return(l.visible||s)&&(!i||!~i.indexOf(l.writeId))&&(kt(l.path,e)||kt(e,l.path))},a=nE(t.allWrites,o,e),c=n||ae.EMPTY_NODE;return _s(a,c)}}}function v1(t,e,n){let i=ae.EMPTY_NODE;const s=Pi(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(tt,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Un(t.visibleWrites,e);return n.forEachChild(tt,(o,a)=>{const c=_s(Un(r,new be(o)),a);i=i.updateImmediateChild(o,c)}),Gp(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Un(t.visibleWrites,e);return Gp(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function y1(t,e,n,i,s){P(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Ue(e,n);if(fu(t.visibleWrites,r))return null;{const o=Un(t.visibleWrites,r);return pu(o)?s.getChild(n):_s(o,s.getChild(n))}}function E1(t,e,n,i){const s=Ue(e,n),r=Pi(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Un(t.visibleWrites,s);return _s(o,i.getNode().getImmediateChild(n))}else return null}function T1(t,e){return Pi(t.visibleWrites,e)}function I1(t,e,n,i,s,r,o){let a;const c=Un(t.visibleWrites,e),l=Pi(c,fe());if(l!=null)a=l;else if(n!=null)a=_s(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=d.getNext();for(;p&&u.length<s;)h(p,i)!==0&&u.push(p),p=d.getNext();return u}else return[]}function w1(){return{visibleWrites:Vt.empty(),allWrites:[],lastWriteId:-1}}function mu(t,e,n,i){return iE(t.writeTree,t.treePath,e,n,i)}function sE(t,e){return v1(t.writeTree,t.treePath,e)}function Qp(t,e,n,i){return y1(t.writeTree,t.treePath,e,n,i)}function Sa(t,e){return T1(t.writeTree,Ue(t.treePath,e))}function b1(t,e,n,i,s,r){return I1(t.writeTree,t.treePath,e,n,i,s,r)}function sd(t,e,n){return E1(t.writeTree,t.treePath,e,n)}function rE(t,e){return oE(Ue(t.treePath,e),t.writeTree)}function oE(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,jp(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,e1(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,ZN(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,jp(i,e.snapshotNode,s.oldSnap));else throw Is("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const aE=new C1;class rd{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new id(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return sd(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:bi(this.viewCache_),r=b1(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function R1(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function S1(t,e,n,i,s){const r=new A1;let o,a;if(n.type===Jt.OVERWRITE){const l=n;l.source.fromUser?o=gu(t,e,l.path,l.snap,i,s,r):(P(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!ee(l.path),o=Pa(t,e,l.path,l.snap,i,s,a,r))}else if(n.type===Jt.MERGE){const l=n;l.source.fromUser?o=N1(t,e,l.path,l.children,i,s,r):(P(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=_u(t,e,l.path,l.children,i,s,a,r))}else if(n.type===Jt.ACK_USER_WRITE){const l=n;l.revert?o=D1(t,e,l.path,i,s,r):o=k1(t,e,l.path,l.affectedTree,i,s,r)}else if(n.type===Jt.LISTEN_COMPLETE)o=x1(t,e,n.path,i,r);else throw Is("Unknown operation type: "+n.type);const c=r.getChanges();return P1(e,o,c),{viewCache:o,changes:c}}function P1(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=du(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(JN(du(e)))}}function cE(t,e,n,i,s,r){const o=e.eventCache;if(Sa(i,n)!=null)return e;{let a,c;if(ee(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=bi(e),u=l instanceof ae?l:ae.EMPTY_NODE,h=sE(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=mu(i,bi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=ne(n);if(l===".priority"){P(Wn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Qp(i,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Te(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=Qp(i,n,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=sd(i,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,s,r):a=o.getNode()}}return hr(e,a,o.isFullyInitialized()||ee(n),t.filter.filtersNodes())}}function Pa(t,e,n,i,s,r,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(ee(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const p=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),p,null)}else{const p=ne(n);if(!c.isCompleteForPath(n)&&Wn(n)>1)return e;const g=Te(n),y=c.getNode().getImmediateChild(p).updateChild(g,i);p===".priority"?l=u.updatePriority(c.getNode(),y):l=u.updateChild(c.getNode(),p,y,g,aE,null)}const h=Zy(e,l,c.isFullyInitialized()||ee(n),u.filtersNodes()),d=new rd(s,h,r);return cE(t,h,n,s,d,a)}function gu(t,e,n,i,s,r,o){const a=e.eventCache;let c,l;const u=new rd(s,e,r);if(ee(n))l=t.filter.updateFullNode(e.eventCache.getNode(),i,o),c=hr(e,l,!0,t.filter.filtersNodes());else{const h=ne(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),i),c=hr(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=Te(n),p=a.getNode().getImmediateChild(h);let g;if(ee(d))g=i;else{const _=u.getCompleteChild(h);_!=null?qy(d)===".priority"&&_.getChild(Uy(d)).isEmpty()?g=_:g=_.updateChild(d,i):g=ae.EMPTY_NODE}if(p.equals(g))c=e;else{const _=t.filter.updateChild(a.getNode(),h,g,d,u,o);c=hr(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Yp(t,e){return t.eventCache.isCompleteForChild(e)}function N1(t,e,n,i,s,r,o){let a=e;return i.foreach((c,l)=>{const u=Ue(n,c);Yp(e,ne(u))&&(a=gu(t,a,u,l,s,r,o))}),i.foreach((c,l)=>{const u=Ue(n,c);Yp(e,ne(u))||(a=gu(t,a,u,l,s,r,o))}),a}function Xp(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function _u(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;ee(n)?l=i:l=new ye(null).setTree(n,i);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),g=Xp(t,p,d);c=Pa(t,c,new be(h),g,s,r,o,a)}}),l.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const g=e.serverCache.getNode().getImmediateChild(h),_=Xp(t,g,d);c=Pa(t,c,new be(h),_,s,r,o,a)}}),c}function k1(t,e,n,i,s,r,o){if(Sa(s,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(ee(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Pa(t,e,n,c.getNode().getChild(n),s,r,a,o);if(ee(n)){let l=new ye(null);return c.getNode().forEachChild(ts,(u,h)=>{l=l.set(new be(u),h)}),_u(t,e,n,l,s,r,a,o)}else return e}else{let l=new ye(null);return i.foreach((u,h)=>{const d=Ue(n,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),_u(t,e,n,l,s,r,a,o)}}function x1(t,e,n,i,s){const r=e.serverCache,o=Zy(e,r.getNode(),r.isFullyInitialized()||ee(n),r.isFiltered());return cE(t,o,n,i,aE,s)}function D1(t,e,n,i,s,r){let o;if(Sa(i,n)!=null)return e;{const a=new rd(i,e,s),c=e.eventCache.getNode();let l;if(ee(n)||ne(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=mu(i,bi(e));else{const h=e.serverCache.getNode();P(h instanceof ae,"serverChildren would be complete if leaf node"),u=sE(i,h)}u=u,l=t.filter.updateFullNode(c,u,r)}else{const u=ne(n);let h=sd(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,Te(n),a,r):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,ae.EMPTY_NODE,Te(n),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=mu(i,bi(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||Sa(i,fe())!=null,hr(e,l,o,t.filter.filtersNodes())}}function O1(t,e){const n=bi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ee(e)&&!n.getImmediateChild(ne(e)).isEmpty())?n.getChild(e):null}function Jp(t,e,n,i){e.type===Jt.MERGE&&e.source.queryId!==null&&(P(bi(t.viewCache_),"We should always have a full cache before handling merges"),P(du(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=S1(t.processor_,s,e,n,i);return R1(t.processor_,r.viewCache),P(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,L1(t,r.changes,r.viewCache.eventCache.getNode(),null)}function L1(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return c1(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zp;function V1(t){P(!Zp,"__referenceConstructor has already been defined"),Zp=t}function od(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return P(r!=null,"SyncTree gave us an op for an invalid query."),Jp(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Jp(o,e,n,i));return r}}function ad(t,e){let n=null;for(const i of t.views.values())n=n||O1(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let em;function M1(t){P(!em,"__referenceConstructor has already been defined"),em=t}class tm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ye(null),this.pendingWriteTree_=w1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function q1(t,e,n,i,s){return d1(t.pendingWriteTree_,e,n,i,s),s?Rc(t,new wi(Qy(),e,n)):[]}function $i(t,e,n=!1){const i=f1(t.pendingWriteTree_,e);if(p1(t.pendingWriteTree_,e)){let r=new ye(null);return i.snap!=null?r=r.set(fe(),!0):At(i.children,o=>{r=r.set(new be(o),!0)}),Rc(t,new Ra(i.path,r,n))}else return[]}function Cc(t,e,n){return Rc(t,new wi(Yy(),e,n))}function F1(t,e,n){const i=ye.fromObject(n);return Rc(t,new Ur(Yy(),e,i))}function U1(t,e,n,i){const s=dE(t,i);if(s!=null){const r=fE(s),o=r.path,a=r.queryId,c=bt(o,e),l=new wi(Xy(a),c,n);return pE(t,o,l)}else return[]}function z1(t,e,n,i){const s=dE(t,i);if(s){const r=fE(s),o=r.path,a=r.queryId,c=bt(o,e),l=ye.fromObject(n),u=new Ur(Xy(a),c,l);return pE(t,o,u)}else return[]}function lE(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=bt(o,e),l=ad(a,c);if(l)return l});return iE(s,e,r,n,!0)}function Rc(t,e){return uE(e,t.syncPointTree_,null,tE(t.pendingWriteTree_,fe()))}function uE(t,e,n,i){if(ee(t.path))return hE(t,e,n,i);{const s=e.get(fe());n==null&&s!=null&&(n=ad(s,fe()));let r=[];const o=ne(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=rE(i,o);r=r.concat(uE(a,c,l,u))}return s&&(r=r.concat(od(s,t,i,n))),r}}function hE(t,e,n,i){const s=e.get(fe());n==null&&s!=null&&(n=ad(s,fe()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=rE(i,o),u=t.operationForChild(o);u&&(r=r.concat(hE(u,a,c,l)))}),s&&(r=r.concat(od(s,t,i,n))),r}function dE(t,e){return t.tagToQueryMap.get(e)}function fE(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new be(t.substr(0,e))}}function pE(t,e,n){const i=t.syncPointTree_.get(e);P(i,"Missing sync point for query tag that we're tracking");const s=tE(t.pendingWriteTree_,e);return od(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new cd(n)}node(){return this.node_}}class ld{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ue(this.path_,e);return new ld(this.syncTree_,n)}node(){return lE(this.syncTree_,this.path_)}}const j1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},nm=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return B1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return $1(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},B1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},$1=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&P(!1,"Unexpected increment value: "+i);const s=e.node();if(P(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},W1=function(t,e,n,i){return ud(e,new ld(n,t),i)},H1=function(t,e,n){return ud(t,new cd(e),n)};function ud(t,e,n){const i=t.getPriority().val(),s=nm(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=nm(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Me(a,Ze(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Me(s))),o.forEachChild(tt,(a,c)=>{const l=ud(c,e.getImmediateChild(a),n);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function dd(t,e){let n=e instanceof be?e:new be(e),i=t,s=ne(n);for(;s!==null;){const r=os(i.node.children,s)||{children:{},childCount:0};i=new hd(s,i,r),n=Te(n),s=ne(n)}return i}function xs(t){return t.node.value}function mE(t,e){t.node.value=e,vu(t)}function gE(t){return t.node.childCount>0}function K1(t){return xs(t)===void 0&&!gE(t)}function Sc(t,e){At(t.node.children,(n,i)=>{e(new hd(n,t,i))})}function _E(t,e,n,i){n&&!i&&e(t),Sc(t,s=>{_E(s,e,!0,i)}),n&&i&&e(t)}function G1(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ho(t){return new be(t.parent===null?t.name:ho(t.parent)+"/"+t.name)}function vu(t){t.parent!==null&&Q1(t.parent,t.name,t)}function Q1(t,e,n){const i=K1(n),s=An(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,vu(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,vu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=/[\[\].#$\/\u0000-\u001F\u007F]/,X1=/[\[\].#$\u0000-\u001F\u007F]/,cl=10*1024*1024,vE=function(t){return typeof t=="string"&&t.length!==0&&!Y1.test(t)},J1=function(t){return typeof t=="string"&&t.length!==0&&!X1.test(t)},Z1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),J1(t)},yE=function(t,e,n){const i=n instanceof be?new xN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Zn(i));if(typeof e=="function")throw new Error(t+"contains a function "+Zn(i)+" with contents = "+e.toString());if(vy(e))throw new Error(t+"contains "+e.toString()+" "+Zn(i));if(typeof e=="string"&&e.length>cl/3&&Ga(e)>cl)throw new Error(t+"contains a string greater than "+cl+" utf8 bytes "+Zn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(At(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!vE(o)))throw new Error(t+" contains an invalid key ("+o+") "+Zn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);DN(i,o),yE(t,a,i),ON(i)}),s&&r)throw new Error(t+' contains ".value" child '+Zn(i)+" in addition to actual children.")}},ek=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!vE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Z1(n))throw new Error(V0(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function nk(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!zy(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Ni(t,e,n){nk(t,n),ik(t,i=>kt(i,e)||kt(e,i))}function ik(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(sk(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function sk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();pi&&Je("event: "+n.toString()),lo(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk="repo_interrupt",ok=25;class ak{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new tk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ca(),this.transactionQueueTree_=new hd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ck(t,e,n){if(t.stats_=Jh(t.repoInfo_),t.forceRestClient_||nN())t.server_=new Aa(t.repoInfo_,(i,s,r,o)=>{im(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>sm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{We(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new yn(t.repoInfo_,e,(i,s,r,o)=>{im(t,i,s,r,o)},i=>{sm(t,i)},i=>{uk(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=cN(t.repoInfo_,()=>new a1(t.stats_,t.server_)),t.infoData_=new n1,t.infoSyncTree_=new tm({startListening:(i,s,r,o)=>{let a=[];const c=t.infoData_.getNode(i._path);return c.isEmpty()||(a=Cc(t.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),fd(t,"connected",!1),t.serverSyncTree_=new tm({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,c)=>{const l=o(a,c);Ni(t.eventQueue_,i._path,l)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function lk(t){const n=t.infoData_.getNode(new be(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function EE(t){return j1({timestamp:lk(t)})}function im(t,e,n,i,s){t.dataUpdateCount++;const r=new be(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const c=ea(n,l=>Ze(l));o=z1(t.serverSyncTree_,r,c,s)}else{const c=Ze(n);o=U1(t.serverSyncTree_,r,c,s)}else if(i){const c=ea(n,l=>Ze(l));o=F1(t.serverSyncTree_,r,c)}else{const c=Ze(n);o=Cc(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=md(t,r)),Ni(t.eventQueue_,a,o)}function sm(t,e){fd(t,"connected",e),e===!1&&dk(t)}function uk(t,e){At(e,(n,i)=>{fd(t,n,i)})}function fd(t,e,n){const i=new be("/.info/"+e),s=Ze(n);t.infoData_.updateSnapshot(i,s);const r=Cc(t.infoSyncTree_,i,s);Ni(t.eventQueue_,i,r)}function hk(t){return t.nextWriteId_++}function dk(t){TE(t,"onDisconnectEvents");const e=EE(t),n=Ca();hu(t.onDisconnect_,fe(),(s,r)=>{const o=W1(s,r,t.serverSyncTree_,e);Gy(n,s,o)});let i=[];hu(n,fe(),(s,r)=>{i=i.concat(Cc(t.serverSyncTree_,s,r));const o=gk(t,s);md(t,o)}),t.onDisconnect_=Ca(),Ni(t.eventQueue_,fe(),i)}function fk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(rk)}function TE(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Je(n,...e)}function IE(t,e,n){return lE(t.serverSyncTree_,e,n)||ae.EMPTY_NODE}function pd(t,e=t.transactionQueueTree_){if(e||Pc(t,e),xs(e)){const n=bE(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&pk(t,ho(e),n)}else gE(e)&&Sc(e,n=>{pd(t,n)})}function pk(t,e,n){const i=n.map(l=>l.currentWriteId),s=IE(t,e,i);let r=s;const o=s.hash();for(let l=0;l<n.length;l++){const u=n[l];P(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=bt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,l=>{TE(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat($i(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Pc(t,dd(t.transactionQueueTree_,e)),pd(t,t.transactionQueueTree_),Ni(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)lo(h[d])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{yt("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}md(t,e)}},o)}function md(t,e){const n=wE(t,e),i=ho(n),s=bE(t,n);return mk(t,s,i),i}function mk(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=bt(n,c.path);let u=!1,h;if(P(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,s=s.concat($i(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=ok)u=!0,h="maxretry",s=s.concat($i(t.serverSyncTree_,c.currentWriteId,!0));else{const d=IE(t,c.path,o);c.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){yE("transaction failed: Data returned ",p,c.path);let g=Ze(p);typeof p=="object"&&p!=null&&An(p,".priority")||(g=g.updatePriority(d.getPriority()));const y=c.currentWriteId,x=EE(t),V=H1(g,d,x);c.currentOutputSnapshotRaw=g,c.currentOutputSnapshotResolved=V,c.currentWriteId=hk(t),o.splice(o.indexOf(y),1),s=s.concat(q1(t.serverSyncTree_,c.path,V,c.currentWriteId,c.applyLocally)),s=s.concat($i(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",s=s.concat($i(t.serverSyncTree_,c.currentWriteId,!0))}Ni(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}Pc(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)lo(i[a]);pd(t,t.transactionQueueTree_)}function wE(t,e){let n,i=t.transactionQueueTree_;for(n=ne(e);n!==null&&xs(i)===void 0;)i=dd(i,n),e=Te(e),n=ne(e);return i}function bE(t,e){const n=[];return AE(t,e,n),n.sort((i,s)=>i.order-s.order),n}function AE(t,e,n){const i=xs(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Sc(e,s=>{AE(t,s,n)})}function Pc(t,e){const n=xs(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,mE(e,n.length>0?n:void 0)}Sc(e,i=>{Pc(t,i)})}function gk(t,e){const n=ho(wE(t,e)),i=dd(t.transactionQueueTree_,e);return G1(i,s=>{ll(t,s)}),ll(t,i),_E(i,s=>{ll(t,s)}),n}function ll(t,e){const n=xs(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat($i(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?mE(e,void 0):n.length=r+1,Ni(t.eventQueue_,ho(e),s);for(let o=0;o<i.length;o++)lo(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function vk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):yt(`Invalid query segment '${n}' in query '${t}'`)}return e}const rm=function(t,e){const n=yk(t),i=n.namespace;n.domain==="firebase.com"&&Ti(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Ti("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||GP();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new rN(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new be(n.pathString)}},yk=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=_k(t.substring(u,h)));const d=vk(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const p=e.slice(0,l);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class gd{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return ee(this._path)?null:qy(this._path)}get ref(){return new Ds(this._repo,this._path)}get _queryIdentifier(){const e=$p(this._queryParams),n=Yh(e);return n==="{}"?"default":n}get _queryObject(){return $p(this._queryParams)}isEqual(e){if(e=Mt(e),!(e instanceof gd))return!1;const n=this._repo===e._repo,i=zy(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+kN(this._path)}}class Ds extends gd{constructor(e,n){super(e,n,new nd,!1)}get parent(){const e=Uy(this._path);return e===null?null:new Ds(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}V1(Ds);M1(Ds);/**
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
 */const Ek="FIREBASE_DATABASE_EMULATOR_HOST",yu={};let Tk=!1;function Ik(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Ti("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Je("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=rm(r,s),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[Ek]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=rm(r,s),a=o.repoInfo):c=!o.repoInfo.secure;const u=s&&c?new cu(cu.OWNER):new sN(t.name,t.options,e);ek("Invalid Firebase Database URL",o),ee(o.path)||Ti("Database URL must point to the root of a Firebase Database (not including a child path).");const h=bk(a,t,u,new iN(t.name,n));return new Ak(h,t)}function wk(t,e){const n=yu[e];(!n||n[t.key]!==t)&&Ti(`Database ${e}(${t.repoInfo_}) has already been deleted.`),fk(t),delete n[t.key]}function bk(t,e,n,i){let s=yu[e.name];s||(s={},yu[e.name]=s);let r=s[t.toURLString()];return r&&Ti("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ak(t,Tk,n,i),s[t.toURLString()]=r,r}class Ak{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ck(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ds(this._repo,fe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(wk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ti("Cannot call "+e+" on a deleted database.")}}/**
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
 */function Ck(t){BP(bs),rn(new qt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Ik(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),vt(Cp,Rp,t),vt(Cp,Rp,"esm2017")}yn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};yn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Ck();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE="firebasestorage.googleapis.com",Rk="storageBucket",Sk=2*60*1e3,Pk=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends bn{constructor(e,n,i=0){super(ul(e),`Firebase Storage: ${n} (${ul(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ln.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ul(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var cn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(cn||(cn={}));function ul(t){return"storage/"+t}function Nk(){const t="An unknown error occurred, please check the error payload for server response.";return new ln(cn.UNKNOWN,t)}function kk(){return new ln(cn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function xk(){return new ln(cn.CANCELED,"User canceled the upload/download.")}function Dk(t){return new ln(cn.INVALID_URL,"Invalid URL '"+t+"'.")}function Ok(t){return new ln(cn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function om(t){return new ln(cn.INVALID_ARGUMENT,t)}function RE(){return new ln(cn.APP_DELETED,"The Firebase app was deleted.")}function Lk(t){return new ln(cn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=xt.makeFromUrl(e,n)}catch{return new xt(e,"")}if(i.path==="")return i;throw Ok(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(A){A.path_=decodeURIComponent(A.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),g={bucket:1,path:3},_=n===CE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",x=new RegExp(`^https?://${_}/${s}/${y}`,"i"),k=[{regex:a,indices:c,postModify:r},{regex:p,indices:g,postModify:l},{regex:x,indices:{bucket:1,path:2},postModify:l}];for(let A=0;A<k.length;A++){const H=k[A],ce=H.regex.exec(e);if(ce){const pe=ce[H.indices.bucket];let j=ce[H.indices.path];j||(j=""),i=new xt(pe,j),H.postModify(i);break}}if(i==null)throw Dk(e);return i}}class Vk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...y){l||(l=!0,e.apply(null,y))}function h(y){s=setTimeout(()=>{s=null,t(p,c())},y)}function d(){r&&clearTimeout(r)}function p(y,...x){if(l){d();return}if(y){d(),u.call(null,y,...x);return}if(c()||o){d(),u.call(null,y,...x);return}i<64&&(i*=2);let k;a===1?(a=2,k=0):k=(i+Math.random())*1e3,h(k)}let g=!1;function _(y){g||(g=!0,d(),!l&&(s!==null?(y||(a=2),clearTimeout(s),h(0)):y||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,_(!0)},n),_}function qk(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(t){return t!==void 0}function am(t,e,n,i){if(i<e)throw om(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw om(`Invalid value for '${t}'. Expected ${n} or less.`)}function Uk(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Na;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Na||(Na={}));/**
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
 */function zk(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e,n,i,s,r,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Lo(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Na.NO_ERROR,c=r.getStatus();if(!a||zk(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Na.ABORT;i(!1,new Lo(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;i(!0,new Lo(l,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Fk(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=Nk();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?RE():xk();o(c)}else{const c=kk();o(c)}};this.canceled_?n(!1,new Lo(!1,null,!0)):this.backoffId_=Mk(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&qk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Lo{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function Bk(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function $k(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Wk(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Hk(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Kk(t,e,n,i,s,r,o=!0){const a=Uk(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return Wk(l,e),Bk(l,n),$k(l,r),Hk(l,i),new jk(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Qk(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class ka{constructor(e,n){this._service=e,n instanceof xt?this._location=n:this._location=xt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ka(e,n)}get root(){const e=new xt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Qk(this._location.path)}get storage(){return this._service}get parent(){const e=Gk(this._location.path);if(e===null)return null;const n=new xt(this._location.bucket,e);return new ka(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Lk(e)}}function cm(t,e){const n=e==null?void 0:e[Rk];return n==null?null:xt.makeFromBucketSpec(n,t)}class Yk{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=CE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Sk,this._maxUploadRetryTime=Pk,this._requests=new Set,s!=null?this._bucket=xt.makeFromBucketSpec(s,this._host):this._bucket=cm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=xt.makeFromBucketSpec(this._url,e):this._bucket=cm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){am("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){am("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ka(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new Vk(RE());{const o=Kk(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const lm="@firebase/storage",um="0.11.2";/**
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
 */const Xk="storage";function Jk(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Yk(n,i,s,e,bs)}function Zk(){rn(new qt(Xk,Jk,"PUBLIC").setMultipleInstances(!0)),vt(lm,um,""),vt(lm,um,"esm2017")}Zk();const hl=new WeakMap;function SE(t,e){return hl.has(e)||hl.set(e,t||{f:{},r:{},s:{},u:{}}),hl.get(e)}function ex(t,e,n,i){if(!t)return n;const[s,r]=PE(t);if(!s)return n;const o=SE(void 0,i)[s]||{},a=e||r;return a&&a in o?o[a]:n}function tx(t,e,n,i){if(!t)return;const[s,r]=PE(t);if(!s)return;const o=SE(void 0,i)[s],a=e||r;if(a)return n.then(c=>{o[a]=c}).catch(Xt),a}function PE(t){return LP(t)||VP(t)?["f",t.path]:MP(t)?["r",t.toString()]:qP(t)?["s",t.toString()]:[]}const dl=new WeakMap;function nx(t,e,n){const i=Kh();dl.has(i)||dl.set(i,new Map);const s=dl.get(i),r=tx(e,n,t,i);return r&&s.set(r,t),r?()=>s.delete(r):Xt}const ix={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Eu(t,e,n,i){if(!DP(t))return[t,{}];const s=[{},{}],r=Object.keys(n).reduce((a,c)=>{const l=n[c];return a[l.path]=l.data(),a},{});function o(a,c,l,u){c=c||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(p=>{const g=Object.getOwnPropertyDescriptor(a,p);g&&!g.enumerable&&Object.defineProperty(h,p,g)});for(const p in a){const g=a[p];if(g==null||g instanceof Date||g instanceof xe||g instanceof wc)h[p]=g;else if(Qh(g)){const _=l+p;h[p]=_ in n?c[p]:g.path,d[_]=g.converter?g:g.withConverter(i.converter)}else if(Array.isArray(g)){h[p]=Array(g.length);for(let _=0;_<g.length;_++){const y=g[_];y&&y.path in r&&(h[p][_]=r[y.path])}o(g,c[p]||h[p],l+p+".",[h[p],d])}else Si(g)?(h[p]={},o(g,c[p],l+p+".",[h[p],d])):h[p]=g}}return o(t,e,"",s),s}const _d={reset:!1,wait:!0,maxRefDepth:2,converter:ix,snapshotOptions:{serverTimestamps:"estimate"}};function xa(t){for(const e in t)t[e].unsub()}function Tu(t,e,n,i,s,r,o,a,c){const[l,u]=Eu(i.data(t.snapshotOptions),Gh(e,n),s,t);r.set(e,n,l),Iu(t,e,n,s,u,r,o,a,c)}function sx({ref:t,target:e,path:n,depth:i,resolve:s,reject:r,ops:o},a){const c=Object.create(null);let l=Xt;return a.once?Qv(t).then(u=>{u.exists()?Tu(a,e,n,u,c,o,i,s,r):(o.set(e,n,null),s())}).catch(r):l=Wh(t,u=>{u.exists()?Tu(a,e,n,u,c,o,i,s,r):(o.set(e,n,null),s())},r),()=>{l(),xa(c)}}function Iu(t,e,n,i,s,r,o,a,c){const l=Object.keys(s);if(Object.keys(i).filter(_=>l.indexOf(_)<0).forEach(_=>{i[_].unsub(),delete i[_]}),!l.length||++o>t.maxRefDepth)return a(n);let h=0;const d=l.length,p=Object.create(null);function g(_){_ in p&&++h>=d&&a(n)}l.forEach(_=>{const y=i[_],x=s[_],V=`${n}.${_}`;if(p[V]=!0,y)if(y.path!==x.path)y.unsub();else return;i[_]={data:()=>Gh(e,V),unsub:sx({ref:x,target:e,path:V,depth:o,ops:r,resolve:g.bind(null,V),reject:c},t),path:x.path}})}function rx(t,e,n,i,s,r){const o=Object.assign({},_d,r),{snapshotListenOptions:a,snapshotOptions:c,wait:l,once:u}=o,h="value";let d=ui(l?[]:t.value);l||n.set(t,h,[]);const p=i;let g,_=Xt;const y=[],x={added:({newIndex:k,doc:A})=>{y.splice(k,0,Object.create(null));const H=y[k],[ce,pe]=Eu(A.data(c),void 0,H,o);n.add(dn(d),k,ce),Iu(o,d,`${h}.${k}`,H,pe,n,0,i.bind(null,A),s)},modified:({oldIndex:k,newIndex:A,doc:H})=>{const ce=dn(d),pe=y[k],j=ce[k],[Y,ve]=Eu(H.data(c),j,pe,o);y.splice(A,0,pe),n.remove(ce,k),n.add(ce,A,Y),Iu(o,d,`${h}.${A}`,pe,ve,n,0,i,s)},removed:({oldIndex:k})=>{const A=dn(d);n.remove(A,k),xa(y.splice(k,1)[0])}};function V(k){const A=k.docChanges(a);if(!g&&A.length){g=!0;let H=0;const ce=A.length,pe=Object.create(null);for(let j=0;j<ce;j++)pe[A[j].doc.id]=!0;i=j=>{j&&j.id in pe&&++H>=ce&&(l&&(n.set(t,h,dn(d)),d=t),p(dn(d)),i=Xt)}}A.forEach(H=>{x[H.type](H)}),A.length||(l&&(n.set(t,h,dn(d)),d=t),i(dn(d)))}return u?Yv(e).then(V).catch(s):_=Wh(e,V,s),k=>{if(_(),k){const A=typeof k=="function"?k():[];n.set(t,h,A)}y.forEach(xa)}}function ox(t,e,n,i,s,r){const o=Object.assign({},_d,r),a="value",c=Object.create(null);i=FP(i,()=>Gh(t,a));let l=Xt;function u(h){h.exists()?Tu(o,t,a,h,c,n,0,i,s):(n.set(t,a,null),i(null))}return o.once?Qv(e).then(u).catch(s):l=Wh(e,u,s),h=>{if(l(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}xa(c)}}const hm=Symbol();function ax(t,e){let n=Xt;const i=Object.assign({},_d,e),s=dn(t),r=i.target||ui();zP()&&(i.once=!0);const o=ex(s,i.ssrKey,hm,Kh()),a=o!==hm;a&&(r.value=o);let c=!a;const l=ui(!1),u=ui(),h=pT(),d=Nu();let p=Xt;function g(){let x=dn(t);const V=new Promise((k,A)=>{if(n(i.reset),!x)return n=Xt,k(null);l.value=c,c=!0,x.converter||(x=x.withConverter(i.converter)),n=(Qh(x)?ox:rx)(r,x,cx,k,A,i)}).catch(k=>(h.value===V&&(u.value=k),Promise.reject(k))).finally(()=>{h.value===V&&(l.value=!1)});h.value=V}let _=Xt;Ce(t)&&(_=Zs(t,g)),g(),s&&(p=nx(h.value,s,i.ssrKey)),ju()&&Jm(()=>h.value),d&&ym(y);function y(x=i.reset){_(),p(),n(x)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>l},promise:{get:()=>h},stop:{get:()=>y}})}const cx={set:(t,e,n)=>kP(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)},$s=new WeakMap;function lx(t,e,n){e&&e[t]&&(e[t](n),delete e[t])}const ux={bindName:"$firestoreBind",unbindName:"$firestoreUnbind"},hx=function(e,n,i){const s=Object.assign({},ux,n),{bindName:r,unbindName:o}=s,a=e.config.globalProperties;a[o]=function(l,u){lx(l,$s.get(this),u),delete this.$firestoreRefs[l]},a[r]=function(l,u,h){const d=Object.assign({},s,h),p=ET(this.$data,l);$s.has(this)||$s.set(this,{});const g=$s.get(this);g[l]&&g[l](d.reset);const _=jP(i||Kh(),e).run(()=>Va()),{promise:y,stop:x}=e.runWithContext(()=>_.run(()=>ax(u,{target:p,...d}))),V=k=>{x(k),_.stop()};return g[l]=V,this.$firestoreRefs[l]=u,y.value},e.mixin({beforeCreate(){this.$firestoreRefs=Object.create(null)},created(){const{firestore:c}=this.$options,l=typeof c=="function"?c.call(this):c;if(l)for(const u in l)this[r](u,l[u],s)},beforeUnmount(){const c=$s.get(this);if(c)for(const l in c)c[l]();this.$firestoreRefs=null}})};function dx(t){return(e,n)=>hx(n,t,e)}function fx(t,{firebaseApp:e,modules:n=[]}){t.provide(py,e);for(const i of n)i(e,t)}const vd=Pg({apiKey:"AIzaSyD3_PR3stakqPCdQaVutT5fORlmXsMNPM0",authDomain:"quizzify-d3053.firebaseapp.com",projectId:"quizzify-d3053",storageBucket:"quizzify-d3053.appspot.com",messagingSenderId:"955132845389",appId:"1:955132845389:web:3346cc1457aeeaa97b2b04"});Lv(vd);const yd=s0(yS);yd.use(fx,{firebaseApp:vd,modules:[dx()]});const wu=Lv(vd);yd.use(a0());yd.mount("#app");
